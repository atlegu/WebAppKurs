export interface Application {
  id: string;
  email: string;
  full_name: string;
  institution?: string;
  motivation?: string;
  status: 'pending' | 'approved' | 'rejected';
  admin_notes?: string;
  created_at: string;
  reviewed_at?: string;
  reviewed_by?: string;
}

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  institution?: string;
  role: 'student' | 'admin';
  application_id?: string;
  created_at: string;
  updated_at: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserProfile | null;
  error: string | null;
}
