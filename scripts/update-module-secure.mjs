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
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey || supabaseServiceRoleKey === 'your_service_role_key_here') {
  console.error('❌ Missing or invalid environment variables!');
  console.log('\nPlease update your .env file with:');
  console.log('1. VITE_SUPABASE_URL - Your Supabase project URL');
  console.log('2. SUPABASE_SERVICE_ROLE_KEY - Your service role key from Supabase Dashboard > Settings > API');
  console.log('\n⚠️  Never commit the service role key to version control!');
  process.exit(1);
}

// Create client with service role key (bypasses RLS)
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function updateModule9Title() {
  try {
    console.log('🔄 Updating module 9 title to "Kapitalkostnad"...');
    
    const moduleId = '06819e9a-e60d-42b3-bc72-9106991e8d17';
    
    // Update the module title
    const { data, error } = await supabase
      .from('modules')
      .update({ 
        title: 'Kapitalkostnad',
        updated_at: new Date().toISOString()
      })
      .eq('id', moduleId)
      .select();

    if (error) {
      console.error('❌ Error updating module:', error);
      return;
    }

    console.log('✅ Module updated successfully!');
    
    // Verify the update
    const { data: verifyData, error: verifyError } = await supabase
      .from('modules')
      .select('id, title, description, order_index')
      .eq('id', moduleId);
      
    if (verifyError) {
      console.error('❌ Error verifying update:', verifyError);
    } else {
      console.log('\n📋 Module after update:', verifyData);
    }
    
  } catch (error) {
    console.error('❌ Unexpected error:', error);
  }
}

updateModule9Title();