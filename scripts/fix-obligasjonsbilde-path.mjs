import { createSupabaseAdmin } from './supabase-admin.mjs';

async function fixObligasjonsbildePath() {
  const supabase = createSupabaseAdmin();
  
  console.log('🔄 Fixing obligasjonsbilde path...\n');
  
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
  
  // Fix the image path
  if (subModule.content && subModule.content.sections) {
    const updatedSections = subModule.content.sections.map(section => {
      if (section.content && section.content.includes('course-images/obligasjonsbilde)')) {
        // Fix the path to include .png extension
        const updatedContent = section.content.replace(
          'course-images/obligasjonsbilde)',
          'course-images/obligasjonsbilde.png)'
        );
        
        console.log('✅ Fixing image path in section:', section.title);
        console.log('   From: course-images/obligasjonsbilde');
        console.log('   To: course-images/obligasjonsbilde.png');
        
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
      console.log('\n✨ Successfully fixed obligasjonsbilde path!');
      console.log('The image should now display correctly.');
    }
  }
}

fixObligasjonsbildePath();