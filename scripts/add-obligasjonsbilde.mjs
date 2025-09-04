import { createSupabaseAdmin } from './supabase-admin.mjs';

async function addObligasjonsbilde() {
  const supabase = createSupabaseAdmin();
  
  console.log('🔄 Adding obligasjonsbilde to section 4.1...\n');
  
  const sectionId = '2f3d7925-fb5f-4555-8bde-2ca34415fe8a';
  
  // Get current content
  const { data: subModule, error: fetchError } = await supabase
    .from('sub_modules')
    .select('*')
    .eq('id', sectionId)
    .single();
    
  if (fetchError || !subModule) {
    console.error('❌ Error fetching sub-module:', fetchError);
    return;
  }
  
  console.log('Found section:', subModule.title);
  
  // Find and update the section with "Hvem utsteder obligasjoner"
  if (subModule.content && subModule.content.sections) {
    const updatedSections = subModule.content.sections.map(section => {
      if (section.content && section.content.includes('Hvem utsteder obligasjoner:')) {
        // Add image after the list
        const updatedContent = section.content.replace(
          '📌 Obligasjoner gir forutsigbare renteutbetalinger og lavere risiko enn aksjer',
          '📌 Obligasjoner gir forutsigbare renteutbetalinger og lavere risiko enn aksjer\n\n![Obligasjoner](course-images/obligasjonsbilde)'
        );
        
        console.log('✅ Adding image to section:', section.title);
        
        return {
          ...section,
          content: updatedContent
        };
      }
      return section;
    });
    
    // Update the sub-module
    const { error: updateError } = await supabase
      .from('sub_modules')
      .update({
        content: {
          ...subModule.content,
          sections: updatedSections
        }
      })
      .eq('id', sectionId);
      
    if (updateError) {
      console.error('❌ Error updating sub-module:', updateError);
    } else {
      console.log('\n✨ Successfully added obligasjonsbilde to section 4.1!');
    }
  }
}

addObligasjonsbilde();