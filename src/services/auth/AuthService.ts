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
  private initializedFromSession = false;

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

    // Listen to auth state changes (for sign out, token refresh)
    supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('AUTH: onAuthStateChange fired, event:', event, 'hasSession:', !!session);

      // Skip if we already initialized OR still initializing
      if ((event === 'INITIAL_SESSION' || event === 'SIGNED_IN') && this.initializedFromSession) {
        console.log('AUTH: Skipping duplicate init event');
        return;
      }

      // Handle sign out
      if (event === 'SIGNED_OUT') {
        console.log('AUTH: User signed out');
        this.initializedFromSession = false;
        this.updateState({
          isAuthenticated: false,
          isLoading: false,
          user: null,
          error: null,
        });
        return;
      }

      // Handle token refresh
      if (event === 'TOKEN_REFRESHED') {
        console.log('AUTH: Token refreshed');
        return;
      }

      // Handle new sign in (after initial load)
      if (event === 'SIGNED_IN' && session?.user && !this.initializedFromSession) {
        console.log('AUTH: New sign in detected');
        this.initializedFromSession = true;
        const profile = await this.fetchProfile(session.user.id);
        this.updateState({
          isAuthenticated: true,
          isLoading: false,
          user: profile,
          error: null,
        });
      }
    });

    // Check existing session with timeout
    try {
      console.log('AUTH: Checking existing session...');

      const sessionResult = await Promise.race([
        supabase.auth.getSession(),
        new Promise<{ data: { session: null }, error: null }>((resolve) =>
          setTimeout(() => {
            console.log('AUTH: getSession timeout after 8s');
            resolve({ data: { session: null }, error: null });
          }, 8000)
        )
      ]);

      const session = sessionResult.data.session;
      console.log('AUTH: getSession result, hasSession:', !!session);

      if (session?.user) {
        const profile = await this.fetchProfile(session.user.id);
        this.initializedFromSession = true;
        this.updateState({
          isAuthenticated: true,
          isLoading: false,
          user: profile,
          error: null,
        });
        console.log('AUTH: Initialized as authenticated');
      } else {
        this.initializedFromSession = true;
        this.updateState({
          isAuthenticated: false,
          isLoading: false,
          user: null,
          error: null,
        });
        console.log('AUTH: Initialized as unauthenticated');
      }
    } catch (e) {
      console.error('AUTH: initializeAuth error:', e);
      this.initializedFromSession = true;
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
