import { supabase } from './supabaseClient';
import type { AuthState, UserProfile } from '../../types/auth';

export class AuthService {
  private static instance: AuthService;
  private authState: AuthState = {
    isAuthenticated: false,
    isLoading: true,
    user: null,
    error: null,
  };
  private listeners: Set<(state: AuthState) => void> = new Set();

  private constructor() {
    this.initializeAuth();
  }

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  private async initializeAuth(): Promise<void> {
    // Global timeout - ensure we never hang forever
    const globalTimeout = setTimeout(() => {
      if (this.authState.isLoading) {
        this.updateState({
          isAuthenticated: false,
          isLoading: false,
          user: null,
          error: null,
        });
      }
    }, 5000);

    try {
      // Listen to auth state changes
      supabase.auth.onAuthStateChange(async (event, session) => {
        try {
          if (session?.user) {
            const profile = await this.fetchProfile(session.user.id);
            clearTimeout(globalTimeout);
            this.updateState({
              isAuthenticated: true,
              isLoading: false,
              user: profile,
              error: null,
            });
          } else {
            clearTimeout(globalTimeout);
            this.updateState({
              isAuthenticated: false,
              isLoading: false,
              user: null,
              error: null,
            });
          }
        } catch (e) {
          clearTimeout(globalTimeout);
          this.updateState({
            isAuthenticated: false,
            isLoading: false,
            user: null,
            error: null,
          });
        }
      });

      // Check existing session
      const { data: { session } } = await supabase.auth.getSession();

      if (session?.user) {
        const profile = await this.fetchProfile(session.user.id);
        clearTimeout(globalTimeout);
        this.updateState({
          isAuthenticated: true,
          isLoading: false,
          user: profile,
          error: null,
        });
      } else {
        clearTimeout(globalTimeout);
        this.updateState({ ...this.authState, isLoading: false });
      }
    } catch (e) {
      clearTimeout(globalTimeout);
      // Show login page on any error
      this.updateState({
        isAuthenticated: false,
        isLoading: false,
        user: null,
        error: null,
      });
    }
  }

  private async fetchProfile(userId: string): Promise<UserProfile | null> {
    try {
      // Add timeout to prevent hanging
      const timeoutPromise = new Promise<null>((resolve) => {
        setTimeout(() => resolve(null), 5000);
      });

      const fetchPromise = supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()
        .then(({ data, error }) => {
          if (error) {
            return null;
          }
          return data;
        });

      const result = await Promise.race([fetchPromise, timeoutPromise]);
      return result;
    } catch (e) {
      return null;
    }
  }

  private updateState(newState: AuthState): void {
    this.authState = newState;
    this.listeners.forEach(listener => listener(newState));
  }

  subscribe(listener: (state: AuthState) => void): () => void {
    this.listeners.add(listener);
    listener(this.authState);
    return () => this.listeners.delete(listener);
  }

  getState(): AuthState {
    return this.authState;
  }

  async signIn(email: string, password: string): Promise<{ error?: string }> {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      return { error: error.message };
    }
    return {};
  }

  async signOut(): Promise<void> {
    await supabase.auth.signOut();
  }

  async resetPassword(email: string): Promise<{ error?: string }> {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) {
      return { error: error.message };
    }
    return {};
  }

  async updatePassword(newPassword: string): Promise<{ error?: string }> {
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
      return { error: error.message };
    }
    return {};
  }

  isAdmin(): boolean {
    return this.authState.user?.role === 'admin';
  }
}
