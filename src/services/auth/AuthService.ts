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
    console.log('🔑 initializeAuth starting...');

    // Listen to auth state changes
    supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event, 'session:', !!session);

      if (session?.user) {
        console.log('🔑 User found, fetching profile...');
        const profile = await this.fetchProfile(session.user.id);
        console.log('🔑 Profile fetched:', profile);
        this.updateState({
          isAuthenticated: true,
          isLoading: false,
          user: profile,
          error: null,
        });
      } else {
        console.log('🔑 No session, setting unauthenticated');
        this.updateState({
          isAuthenticated: false,
          isLoading: false,
          user: null,
          error: null,
        });
      }
    });

    // Check existing session
    console.log('🔑 Checking existing session...');
    const { data: { session } } = await supabase.auth.getSession();
    console.log('🔑 Existing session:', !!session);
    if (session?.user) {
      console.log('🔑 Existing user found, fetching profile...');
      const profile = await this.fetchProfile(session.user.id);
      console.log('🔑 Profile fetched:', profile);
      this.updateState({
        isAuthenticated: true,
        isLoading: false,
        user: profile,
        error: null,
      });
    } else {
      console.log('🔑 No existing session');
      this.updateState({ ...this.authState, isLoading: false });
    }
  }

  private async fetchProfile(userId: string): Promise<UserProfile | null> {
    console.log('🔍 fetchProfile called for userId:', userId);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      console.log('🔍 fetchProfile result - data:', data, 'error:', error);

      if (error) {
        console.error('Error fetching profile:', error);
        return null;
      }
      return data;
    } catch (e) {
      console.error('🔍 fetchProfile exception:', e);
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
