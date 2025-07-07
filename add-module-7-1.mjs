import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tqpryezzddufpovfbpld.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxcHJ5ZXp6ZGR1ZnBvdmZicGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NjA5MDksImV4cCI6MjA2NzAzNjkwOX0.TYmpggmCUr_7aNN_KKC5igvyT_QOWjFpa4_wlX_hjpE';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Module 7.1 content
const module71Content = {
  sections: [
    {
      title: "Hvorfor investeringsanalyse?",
      type: "content",
      content: `**Fra hverdagsvalg til milliardbeslutninger**

La oss starte med en fundamental innsikt: Hver gang du tar en beslutning som involverer penger over tid, gjør du en investering. Enten du er klar over det eller ikke.

!component:investment-introduction

**Hva er egentlig en investering?**

En investering er fundamentalt sett å gi avkall på noe av verdi i dag (vanligvis penger, men også tid eller andre ressurser) for å oppnå noe av større verdi i fremtiden. Dette høres enkelt ut, men det er tre kritiske elementer som gjør investeringer komplekse:

1. **Tidsdimensjonen**: Kostnadene kommer vanligvis først, gevinstene senere
2. **Usikkerheten**: Fremtidige inntekter er sjelden garantert
3. **Alternativkostnaden**: Pengene kunne vært brukt på noe annet

**Investeringer er overalt**

La oss se på noen eksempler du kanskje ikke tenker på som investeringer:

**Personlige investeringer:**
• **Utdanning**: Du betaler studieavgift og gir avkall på arbeidsinntekt i studietiden. Gevinsten? Høyere lønn og bedre karrieremuligheter senere.
• **Helse**: Treningsmedlemskap koster penger og tid nå, men gir bedre helse og lavere helseutgifter senere.
• **Bolig**: Kjøpe vs. leie - en klassisk investeringsbeslutning de fleste må ta.

**Bedriftsinvesteringer:**
• **Produksjonsutstyr**: En fabrikk som kjøper nye maskiner for å øke kapasiteten
• **Markedsføring**: Reklamekampanje som koster millioner nå, forhåpentligvis øker salget senere
• **Ansatte**: Opplæring og utvikling av medarbeidere

**Samfunnsinvesteringer:**
• **Infrastruktur**: Veier, broer, kollektivtransport
• **Miljøtiltak**: Solcelleparker, vindmøller, karbonfangst
• **Forskning**: Grunnforskning som kanskje gir resultater om 20 år

**Hvorfor kan vi ikke bare bruke magefølelsen?**

Tenk deg at du skal velge mellom:
- Alternativ A: Betale 100.000 kr nå, få 150.000 kr om 5 år
- Alternativ B: Betale 80.000 kr nå, få 130.000 kr om 4 år

Hvilket alternativ er best? Uten investeringsanalyse er det umulig å svare objektivt. Vi må ta hensyn til:
• Tidsverdien av penger (penger i dag er mer verdt enn penger i morgen)
• Risikoen i hvert alternativ
• Hva pengene alternativt kunne gitt av avkastning

**Beslutninger uten analyse = Gambling**

Når bedrifter eller privatpersoner tar investeringsbeslutninger uten grundig analyse, er det i praksis gambling. Du satser på at det går bra, men har ingen objektiv grunn til å tro det.

Typiske feilslutninger uten analyse:
• "Naboen gjorde det samme og det gikk bra"
• "Vi har alltid gjort det sånn"
• "Det føles som en god idé"
• "Alle andre gjør det"

**Hva er investeringsanalyse?**

Investeringsanalyse er systematiske metoder for å:
1. **Identifisere** alle relevante kostnader og inntekter
2. **Kvantifisere** disse i kroner og øre
3. **Tidsjustere** ved å ta hensyn til når pengene kommer/går
4. **Sammenligne** alternativer på objektiv basis
5. **Vurdere risiko** og usikkerhet
6. **Ta beslutning** basert på klare kriterier

**Verktøykassen vår**

I denne modulen skal du lære de viktigste verktøyene:

• **Kontantstrømanalyse**: Kartlegge alle inn- og utbetalinger
• **Nåverdi (NPV)**: Hovedverktøyet for å vurdere lønnsomhet
• **Internrente (IRR)**: Vise avkastning i prosent
• **Tilbakebetalingstid**: Hvor raskt får vi pengene tilbake?
• **Følsomhetsanalyse**: Hva hvis forutsetningene endres?

**Fra synsing til systematikk**

Med disse verktøyene kan vi gå fra:
❌ "Jeg tror dette er en god investering"
✅ "Analysen viser at investeringen har positiv nåverdi på 2,3 millioner ved 8% avkastningskrav"

❌ "La oss satse på det nye produktet"
✅ "Selv med 20% lavere salg enn forventet, gir produktet 15% internrente"

**Realisme og begrensninger**

Investeringsanalyse er kraftfullt, men ikke magisk:
• Analysen er bare så god som forutsetningene
• "Garbage in, garbage out" - dårlige data gir dårlige svar
• Ikke alt kan kvantifiseres (f.eks. omdømmeeffekter)
• Fremtiden er usikker uansett hvor mye vi analyserer

Men: En beslutning basert på grundig analyse med usikre forutsetninger er fortsatt bedre enn en beslutning basert på synsing!

**Din siste investeringsbeslutning**

Før vi går videre, tenk på en større økonomisk beslutning du har tatt:
• Hva var alternativene?
• Hvilke kriterier brukte du?
• Gjorde du noen beregninger?
• Ville en grundig analyse endret beslutningen?

**Veien videre**

I de neste delene skal vi bygge opp verktøykassen steg for steg:
1. Først lærer vi å identifisere relevante kontantstrømmer
2. Så beregner vi nåverdi for å vurdere lønnsomhet
3. Deretter ser vi på alternative mål som IRR
4. Til slutt lærer vi å håndtere usikkerhet

Målet er at du etter denne modulen skal kunne analysere alt fra personlige investeringer (skal jeg ta videreutdanning?) til milliardinvesteringer (skal selskapet bygge ny fabrikk?).

**🎯 Det viktigste å huske**

• En investering = Gi avkall på noe nå for å få mer senere
• Alle økonomiske beslutninger over tid er investeringer
• Uten analyse blir det gambling
• Investeringsanalyse gir objektive beslutningsgrunnlag
• Verktøyene fungerer for både små og store beslutninger

**Refleksjonsspørsmål:** Mange sier "jeg er ikke god på tall" som unnskyldning for å ikke gjøre investeringsanalyser. Men er det virkelig bedre å ta millionbeslutninger basert på magefølelse fremfor enkle beregninger?`
    }
  ]
};

async function addModule71() {
  try {
    // First find module 7
    const { data: module7, error: moduleError } = await supabase
      .from('modules')
      .select('id')
      .eq('order_index', 7)
      .single();

    if (moduleError) {
      console.error('Error fetching module 7:', moduleError);
      // If module 7 doesn't exist, we might need to create it first
      if (moduleError.code === 'PGRST116') {
        console.log('Module 7 not found. Creating it first...');
        
        // Create module 7
        const { data: newModule, error: createError } = await supabase
          .from('modules')
          .insert({
            title: 'Investeringsanalyse',
            description: 'Fra idé til beslutning med kontantstrøm, nåverdi og følsomhetstesting',
            order_index: 7,
            course_id: '7e098785-f51d-48f8-b4de-de492a451d52', // You may need to adjust this
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          })
          .select()
          .single();

        if (createError) {
          console.error('Error creating module 7:', createError);
          return;
        }

        console.log('Created module 7 with id:', newModule.id);
        module7 = newModule;
      } else {
        return;
      }
    }

    console.log('Found/created module 7 with id:', module7.id);

    // Check if sub-module 7.1 already exists
    const { data: existingSubModule, error: fetchError } = await supabase
      .from('sub_modules')
      .select('*')
      .eq('module_id', module7.id)
      .eq('order_index', 1)
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
          title: 'Hvorfor investeringsanalyse?',
          content: module71Content,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingSubModule.id);

      if (updateError) {
        console.error('Error updating sub-module 7.1:', updateError);
      } else {
        console.log('Successfully updated sub-module 7.1');
      }
    } else {
      // Create new sub-module
      const { error: insertError } = await supabase
        .from('sub_modules')
        .insert({
          module_id: module7.id,
          title: 'Hvorfor investeringsanalyse?',
          content: module71Content,
          order_index: 1,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });

      if (insertError) {
        console.error('Error creating sub-module 7.1:', insertError);
      } else {
        console.log('Successfully created sub-module 7.1');
      }
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

addModule71();