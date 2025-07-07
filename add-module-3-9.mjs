import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tqpryezzddufpovfbpld.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxcHJ5ZXp6ZGR1ZnBvdmZicGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NjA5MDksImV4cCI6MjA2NzAzNjkwOX0.TYmpggmCUr_7aNN_KKC5igvyT_QOWjFpa4_wlX_hjpE';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Module 3.9 content - proper structure for sub-modules
const module39Content = {
  sections: [
    {
      title: "Test din forståelse",
      type: "content",
      content: `**Test kunnskapen din om tidsverdien av penger!**

Nå har du gått gjennom alle de grunnleggende konseptene i modul 3. La oss teste forståelsen din med 20 flervalgsoppgaver som dekker:

• Tidsverdien av penger
• Nåverdi og fremtidsverdi
• Enkel og sammensatt rente
• Nominell vs. effektiv rente
• Inflasjon og reell rente
• Annuiteter og perpetuiteter
• Serielån vs. annuitetslån

Ta deg god tid og tenk nøye gjennom hvert spørsmål. Du får umiddelbar tilbakemelding på hvert svar, og til slutt får du en samlet oversikt over resultatene dine.

!component:time-value-quiz

**Tips for å lykkes:**

• Les spørsmålene nøye - djevelens i detaljene!
• Husk formlene du har lært
• Tenk på de praktiske eksemplene vi har gjennomgått
• Hvis du er usikker, eliminer åpenbart gale alternativer først

**Etter quizen:**

Når du har fullført quizen, vil du se hvilke områder du mestrer godt og hvilke du bør repetere. 

• **80-100% riktig**: Utmerket! Du er klar for neste modul
• **60-79% riktig**: Bra jobbet, men gå gjennom de temaene du bommet på
• **Under 60%**: Du bør repetere modulen før du går videre

Lykke til!`
    }
  ]
};

async function addModule39() {
  try {
    // First find module 3 (Tidsverdien av penger)
    const { data: module3, error: moduleError } = await supabase
      .from('modules')
      .select('id')
      .eq('order_index', 3)
      .single();

    if (moduleError) {
      console.error('Error fetching module 3:', moduleError);
      return;
    }

    console.log('Found module 3 with id:', module3.id);

    // Check if sub-module 3.9 already exists
    const { data: existingSubModule, error: fetchError } = await supabase
      .from('sub_modules')
      .select('*')
      .eq('module_id', module3.id)
      .eq('order_index', 9)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      console.error('Error fetching sub-module:', fetchError);
      return;
    }

    if (existingSubModule) {
      // Update existing sub-module
      const { error: updateError } = await supabase
        .from('sub_modules')
        .update({ 
          title: 'Test din forståelse',
          content: module39Content,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingSubModule.id);

      if (updateError) {
        console.error('Error updating sub-module 3.9:', updateError);
      } else {
        console.log('Successfully updated sub-module 3.9');
      }
    } else {
      // Create new sub-module
      const { error: insertError } = await supabase
        .from('sub_modules')
        .insert({
          module_id: module3.id,
          title: 'Test din forståelse',
          content: module39Content,
          order_index: 9,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });

      if (insertError) {
        console.error('Error creating sub-module 3.9:', insertError);
      } else {
        console.log('Successfully created sub-module 3.9');
      }
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

addModule39();