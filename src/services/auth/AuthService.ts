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
    console.log('AUTH: initializeAuth starting');

    // Global timeout - ensure we never hang forever
    const globalTimeout = setTimeout(() => {
      console.log('AUTH: Global timeout fired - still loading, forcing login page');
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
      console.log('AUTH: Setting up onAuthStateChange listener');
      supabase.auth.onAuthStateChange(async (event, session) => {
        console.log('AUTH: onAuthStateChange fired, event:', event, 'hasSession:', !!session);
        try {
          if (session?.user) {
            console.log('AUTH: Session found, fetching profile for:', session.user.id);
            const profile = await this.fetchProfile(session.user.id);
            console.log('AUTH: Profile fetched:', profile);
            clearTimeout(globalTimeout);
            this.updateState({
              isAuthenticated: true,
              isLoading: false,
              user: profile,
              error: null,
            });
            console.log('AUTH: State updated - authenticated');
          } else {
            console.log('AUTH: No session, setting unauthenticated');
            clearTimeout(globalTimeout);
            this.updateState({
              isAuthenticated: false,
              isLoading: false,
              user: null,
              error: null,
            });
          }
        } catch (e) {
          console.error('AUTH: Error in onAuthStateChange:', e);
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
      console.log('AUTH: Checking existing session...');
      const { data: { session } } = await supabase.auth.getSession();
      console.log('AUTH: getSession result, hasSession:', !!session);

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
    console.log('AUTH: fetchProfile called for:', userId);
    try {
      // Add timeout to prevent hanging
      const timeoutPromise = new Promise<null>((resolve) => {
        setTimeout(() => {
          console.log('AUTH: fetchProfile TIMEOUT after 5s');
          resolve(null);
        }, 5000);
      });

      const fetchPromise = supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()
        .then(({ data, error }) => {
          console.log('AUTH: fetchProfile response - data:', data, 'error:', error);
          if (error) {
            console.error('AUTH: fetchProfile error:', error);
            return null;
          }
          return data;
        });

      const result = await Promise.race([fetchPromise, timeoutPromise]);
      console.log('AUTH: fetchProfile result:', result);
      return result;
    } catch (e) {
      console.error('AUTH: fetchProfile exception:', e);
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
