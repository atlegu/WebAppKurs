import { createSupabaseAdmin } from './supabase-admin.mjs';

async function checkCurrentImage() {
  const supabase = createSupabaseAdmin();
  
  const sectionId = '2f3d7925-fb5f-4555-8bde-2ca34415fe8a';
  
  // Get current content
  const { data: subModule, error } = await supabase
    .from('sub_modules')
    .select('*')
    .eq('id', sectionId)
    .single();
    
  if (error || !subModule) {
    console.error('Error:', error);
    return;
  }
  
  // Find the section with the image
  if (subModule.content && subModule.content.sections) {
    subModule.content.sections.forEach(section => {
      if (section.content && section.content.includes('obligasjonsbilde')) {
        console.log('Found image reference in section:', section.title);
        
        // Extract the image markdown
        const imageMatch = section.content.match(/!\[.*?\]\((.*?)\)/);
        if (imageMatch) {
          console.log('Image markdown:', imageMatch[0]);
          console.log('Image path:', imageMatch[1]);
        }
      }
    });
  }
  
  // Also check Supabase storage
  console.log('\nChecking Supabase storage...');
  const { data: files, error: listError } = await supabase
    .storage
    .from('course-images')
    .list('', {
      search: 'obligasjon'
    });
    
  if (listError) {
    console.error('Error listing files:', listError);
  } else {
    console.log('Files containing "obligasjon":', files);
  }
}

checkCurrentImage();