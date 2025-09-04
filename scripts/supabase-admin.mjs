import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '..', '.env') });

// Get environment variables
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Validate environment variables
export function validateEnv() {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('❌ Missing required environment variables!');
    console.log('\nPlease create a .env file with:');
    console.log('- VITE_SUPABASE_URL');
    console.log('- VITE_SUPABASE_ANON_KEY');
    console.log('- SUPABASE_SERVICE_ROLE_KEY (for admin operations)');
    process.exit(1);
  }
}

// Create regular Supabase client
export function createSupabaseClient() {
  validateEnv();
  return createClient(supabaseUrl, supabaseAnonKey);
}

// Create admin Supabase client (with service role key)
export function createSupabaseAdmin() {
  validateEnv();
  
  if (!supabaseServiceRoleKey || supabaseServiceRoleKey === 'your_service_role_key_here') {
    console.error('❌ Invalid service role key!');
    console.log('\nTo use admin functions, please add your service role key to .env:');
    console.log('SUPABASE_SERVICE_ROLE_KEY=your_actual_service_role_key');
    console.log('\nFind it in: Supabase Dashboard > Settings > API > service_role (secret)');
    process.exit(1);
  }
  
  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}