import { createSupabaseAdmin } from './supabase-admin.mjs';

async function updateModule9Formatting() {
  const supabase = createSupabaseAdmin();
  
  console.log('🔄 Updating formatting in module 9...\n');
  
  // Get all sub-modules for module 9
  const { data: subModules, error: fetchError } = await supabase
    .from('sub_modules')
    .select('*')
    .eq('module_id', '06819e9a-e60d-42b3-bc72-9106991e8d17')
    .order('order_index');
    
  if (fetchError) {
    console.error('❌ Error fetching sub-modules:', fetchError);
    return;
  }
  
  console.log(`Found ${subModules.length} sub-modules to process\n`);
  
  let totalUpdated = 0;
  
  for (const subModule of subModules) {
    console.log(`Processing: ${subModule.title}`);
    
    if (subModule.content && subModule.content.sections) {
      let hasChanges = false;
      
      // Process each section
      const updatedSections = subModule.content.sections.map(section => {
        if (section.content && section.content.includes('###')) {
          hasChanges = true;
          // Replace ### heading with **heading**
          const updatedContent = section.content.replace(/###\s+(.+?)(\n|$)/g, '**$1**$2');
          
          // Count replacements for logging
          const matches = section.content.match(/###\s+(.+?)(\n|$)/g);
          if (matches) {
            console.log(`  - Updating ${matches.length} headers in section: ${section.title}`);
          }
          
          return {
            ...section,
            content: updatedContent
          };
        }
        return section;
      });
      
      if (hasChanges) {
        // Update the sub-module with new content
        const { error: updateError } = await supabase
          .from('sub_modules')
          .update({
            content: {
              ...subModule.content,
              sections: updatedSections
            }
          })
          .eq('id', subModule.id);
          
        if (updateError) {
          console.error(`❌ Error updating ${subModule.title}:`, updateError);
        } else {
          console.log(`  ✅ Updated successfully`);
          totalUpdated++;
        }
      } else {
        console.log(`  - No ### headers found`);
      }
    }
    console.log('');
  }
  
  console.log(`\n✨ Formatting update complete!`);
  console.log(`Updated ${totalUpdated} sub-modules`);
}

updateModule9Formatting();