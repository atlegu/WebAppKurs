import { createSupabaseClient, createSupabaseAdmin } from './supabase-admin.mjs';

// Example of using regular client (for read operations)
async function readPublicData() {
  const supabase = createSupabaseClient();
  
  const { data, error } = await supabase
    .from('modules')
    .select('*')
    .order('order_index');
    
  if (error) {
    console.error('Error reading data:', error);
  } else {
    console.log('Modules:', data);
  }
}

// Example of using admin client (for write operations that bypass RLS)
async function updateProtectedData() {
  const supabase = createSupabaseAdmin();
  
  const { data, error } = await supabase
    .from('modules')
    .update({ title: 'New Title' })
    .eq('id', 'some-id')
    .select();
    
  if (error) {
    console.error('Error updating data:', error);
  } else {
    console.log('Updated:', data);
  }
}

// Example usage
console.log('🔒 Secure Supabase Script Example\n');
console.log('This script demonstrates how to use environment variables safely.');
console.log('Make sure you have updated your .env file with the correct keys.\n');

// Uncomment to test:
// await readPublicData();
// await updateProtectedData();