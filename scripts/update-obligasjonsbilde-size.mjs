import { createSupabaseAdmin } from './supabase-admin.mjs';

async function updateObligasjonsbildeSize() {
  const supabase = createSupabaseAdmin();
  
  console.log('🔄 Updating obligasjonsbilde display...\n');
  
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
  
  // Update the image markdown to include alt text
  if (subModule.content && subModule.content.sections) {
    const updatedSections = subModule.content.sections.map(section => {
      if (section.content && section.content.includes('![Obligasjoner](course-images/obligasjonsbilde)')) {
        // Update the image markdown
        const updatedContent = section.content.replace(
          '![Obligasjoner](course-images/obligasjonsbilde)',
          '![Oversikt over ulike typer obligasjoner](course-images/obligasjonsbilde)'
        );
        
        console.log('✅ Updating image in section:', section.title);
        
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
      console.log('\n✨ Successfully updated obligasjonsbilde!');
    }
  }
}

updateObligasjonsbildeSize();