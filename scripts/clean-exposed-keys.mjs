import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const EXPOSED_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxcHJ5ZXp6ZGR1ZnBvdmZicGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NjA5MDksImV4cCI6MjA2NzAzNjkwOX0.TYmpggmCUr_7aNN_KKC5igvyT_QOWjFpa4_wlX_hjpE';
const EXPOSED_URL = 'https://tqpryezzddufpovfbpld.supabase.co';

async function cleanFile(filePath) {
  try {
    let content = await readFile(filePath, 'utf-8');
    const originalContent = content;
    
    // Replace exposed keys with placeholders
    content = content.replace(new RegExp(EXPOSED_KEY, 'g'), 'YOUR_SUPABASE_ANON_KEY');
    content = content.replace(new RegExp(EXPOSED_URL, 'g'), 'YOUR_SUPABASE_URL');
    
    if (content !== originalContent) {
      // Add import for dotenv at the beginning if not present
      if (!content.includes('dotenv') && content.includes('createClient')) {
        const importStatement = `import dotenv from 'dotenv';\ndotenv.config();\n\n`;
        content = importStatement + content;
        
        // Replace the hardcoded values with env vars
        content = content.replace(
          "const supabaseUrl = 'YOUR_SUPABASE_URL';",
          "const supabaseUrl = process.env.VITE_SUPABASE_URL;"
        );
        content = content.replace(
          "const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';",
          "const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;"
        );
      }
      
      await writeFile(filePath, content, 'utf-8');
      console.log(`✅ Cleaned: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

async function cleanAllFiles() {
  console.log('🔍 Searching for exposed keys in .mjs files...\n');
  
  const files = await readdir('.', { withFileTypes: true });
  const mjsFiles = files
    .filter(file => file.isFile() && file.name.endsWith('.mjs'))
    .map(file => file.name);
  
  let cleanedCount = 0;
  
  for (const file of mjsFiles) {
    const cleaned = await cleanFile(file);
    if (cleaned) cleanedCount++;
  }
  
  console.log(`\n✨ Cleaned ${cleanedCount} files with exposed keys.`);
  console.log('\n⚠️  Remember to:');
  console.log('1. Update your .env file with the actual keys');
  console.log('2. Never commit sensitive keys to version control');
  console.log('3. Use the scripts in the /scripts folder for secure operations');
}

cleanAllFiles();