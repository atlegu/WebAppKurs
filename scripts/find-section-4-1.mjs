import { createSupabaseAdmin } from './supabase-admin.mjs';

async function findSection41() {
  const supabase = createSupabaseAdmin();
  
  // First find module 4
  const { data: modules, error: moduleError } = await supabase
    .from('modules')
    .select('*')
    .eq('order_index', 4);
    
  if (moduleError || !modules || modules.length === 0) {
    console.error('Error finding module 4:', moduleError);
    return;
  }
  
  const module4 = modules[0];
  console.log('Module 4:', module4.title);
  console.log('Module ID:', module4.id);
  
  // Get sub-module 4.1
  const { data: subModules, error: subError } = await supabase
    .from('sub_modules')
    .select('*')
    .eq('module_id', module4.id)
    .eq('order_index', 1);
    
  if (subError || !subModules || subModules.length === 0) {
    console.error('Error finding sub-module 4.1:', subError);
    return;
  }
  
  const section41 = subModules[0];
  console.log('\nSection 4.1:', section41.title);
  console.log('Section ID:', section41.id);
  
  // Show content structure
  if (section41.content && section41.content.sections) {
    console.log('\nContent sections:');
    section41.content.sections.forEach((section, index) => {
      console.log(`${index + 1}. ${section.title}`);
      if (section.content && section.content.includes('Hvem utsteder obligasjoner')) {
        console.log('   -> Contains "Hvem utsteder obligasjoner"');
        // Show a snippet
        const startIndex = section.content.indexOf('Hvem utsteder obligasjoner');
        const snippet = section.content.substring(startIndex, startIndex + 300);
        console.log('   Snippet:', snippet.replace(/\n/g, '\\n'));
      }
    });
  }
}

findSection41();