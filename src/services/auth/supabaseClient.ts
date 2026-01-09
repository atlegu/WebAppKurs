import { createClient } from '@supabase/supabase-js';

console.log('📦 Loading Supabase config...');
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
console.log('📦 Supabase URL:', supabaseUrl ? 'SET' : 'MISSING');
console.log('📦 Supabase Key:', supabaseAnonKey ? 'SET' : 'MISSING');

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Check .env.local file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
