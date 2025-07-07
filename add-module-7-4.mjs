import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tqpryezzddufpovfbpld.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxcHJ5ZXp6ZGR1ZnBvdmZicGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NjA5MDksImV4cCI6MjA2NzAzNjkwOX0.TYmpggmCUr_7aNN_KKC5igvyT_QOWjFpa4_wlX_hjpE';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Module 7.4 content
const module74Content = {
  sections: [
    {
      title: "Andre investeringsmål",
      type: "content",
      content: `**Supplerende verktøy - med sine begrensninger**

NPV er gullstandarden i investeringsanalyse, men andre mål kan gi tilleggsinformasjon. La oss utforske de vanligste målene, deres bruksområder og - viktigst - deres begrensninger.

!component:investment-metrics-comparison

**Internrente (IRR) - Den populære, men problematiske**

Internrenten er avkastningen som gir NPV = 0. Mange ledere elsker IRR fordi den gir et enkelt prosenttall: "Dette prosjektet gir 15% avkastning!"

**Matematisk definisjon:**
IRR er renten r som løser: Σ[CFₜ / (1+r)ᵗ] = 0

**Beslutningsregel:**
- Aksepter hvis IRR > avkastningskrav
- Forkast hvis IRR < avkastningskrav

**Så langt høres det greit ut. Hva er problemet?**

**Problem 1: Multiple IRR**
Hvis kontantstrømmene skifter fortegn flere ganger, kan du få flere IRR-er:

Eksempel:
- År 0: -1000
- År 1: +3000  
- År 2: -2100

Dette gir to IRR-er: 10% og 100%. Hvilken skal du bruke?

**Problem 2: Reinvesteringsantagelse**
IRR antar implisitt at alle mellomliggende kontantstrømmer kan reinvesteres til IRR-renten. Er det realistisk at du kan reinvestere til 30% hvis det er prosjektets IRR?

**Problem 3: Skalaproblemer**
- Prosjekt A: Investér 100 kr, få 150 kr tilbake. IRR = 50%
- Prosjekt B: Investér 1 million, få 1,2 millioner tilbake. IRR = 20%

IRR sier A er best, men B skaper 200 000 kr i verdi mot As 50 kr!

**Problem 4: Gjensidig utelukkende prosjekter**
Ved valg mellom prosjekter kan IRR gi feil svar. NPV og IRR kan rangere prosjekter ulikt, og da har NPV alltid rett.

**Når er IRR nyttig?**
- Som et supplement til NPV
- Når du sammenligner prosjekter av lik størrelse
- For å kommunisere lønnsomhet i prosent
- Aldri som eneste beslutningskriterium!

**Tilbakebetalingstid - Fokus på likviditet**

Tilbakebetalingstid = Hvor lang tid tar det før investeringen er tjent inn?

**To varianter:**
1. **Enkel tilbakebetalingstid**: Ignorerer tidsverdien
2. **Diskontert tilbakebetalingstid**: Tar hensyn til tidsverdien

**Eksempel:**
Investering: 1 000 000 kr
Årlige kontantstrømmer: 300 000 kr

Enkel tilbakebetalingstid: 1 000 000 / 300 000 = 3,33 år
Diskontert tilbakebetalingstid ved 10%: ca. 4,2 år

**Fordeler:**
- Enkelt å forstå
- Fokus på likviditet og risiko
- Nyttig for bedrifter med likviditetsproblemer

**Ulemper:**
- Ignorerer kontantstrømmer etter cut-off
- Vilkårlig cut-off periode
- Kan forkaste lønnsomme langsiktige prosjekter

**Når bruke tilbakebetalingstid?**
- Som tilleggsinformasjon om likviditetsrisiko
- I usikre miljøer hvor fremtiden er svært usikker
- For små bedrifter med begrenset tilgang til kapital
- Aldri som eneste kriterium!

**Lønnsomhetsindeks (PI) - NPV i forhold til investering**

PI = Nåverdi av fremtidige kontantstrømmer / Initiell investering

eller

PI = 1 + (NPV / Initiell investering)

**Beslutningsregel:**
- PI > 1: Aksepter
- PI < 1: Forkast
- PI = 1: Break-even

**Eksempel:**
NPV = 200 000 kr, Investering = 1 000 000 kr
PI = 1 + (200 000 / 1 000 000) = 1,20

Tolkning: For hver krone investert får du 1,20 kr i nåverdi tilbake.

**Fordeler:**
- Viser relativ lønnsomhet
- Nyttig ved kapitalrasjonering
- Lett å sammenligne prosjekter av ulik størrelse

**Ulemper:**
- Kan gi feil rangering ved gjensidig utelukkende prosjekter
- Som IRR, favoriserer små prosjekter med høy relativ avkastning

**Kapitalrasjonering - Når du ikke kan ta alle positive NPV-prosjekter**

I en perfekt verden tar du alle prosjekter med positiv NPV. I praksis har bedrifter ofte:
- Begrenset kapital
- Begrenset ledelseskapasitet
- Risikogrenser

**Ved kapitalrasjonering:**
1. Ranger etter PI (ikke NPV!)
2. Ta prosjekter i rekkefølge til kapitalen er brukt opp
3. Sjekk for avhengigheter mellom prosjekter

**Målkonflikter - Hvem vinner?**

La oss se på et klassisk eksempel:

**Prosjekt A:**
- Investering: 10 000 kr
- År 1: 12 000 kr
- NPV (10%): 909 kr
- IRR: 20%
- Tilbakebetaling: 1 år

**Prosjekt B:**
- Investering: 10 000 kr
- År 1-5: 3 000 kr per år
- NPV (10%): 1 372 kr
- IRR: 15,2%
- Tilbakebetaling: 3,33 år

**Hva sier de ulike målene?**
- NPV: B er best (høyere NPV)
- IRR: A er best (høyere IRR)
- Tilbakebetaling: A er best (kortere tid)

**Hvem har rett? NPV!** B skaper mer verdi for bedriften.

**Praktiske retningslinjer**

**Bruk NPV som hovedregel fordi:**
- Måler verdiskaping direkte
- Tar hensyn til alle kontantstrømmer
- Konsistent med målet om verdimaksimering
- Additivt (NPV(A+B) = NPV(A) + NPV(B))

**Bruk IRR som supplement når:**
- Du vil kommunisere i prosent
- Prosjektene er av lik størrelse
- Kontantstrømmene har normalt mønster

**Bruk tilbakebetalingstid når:**
- Likviditet er kritisk
- Fremtiden er svært usikker
- Som grov screening av prosjekter

**Bruk PI når:**
- Du har kapitalrasjonering
- Du må rangere mange små prosjekter
- Som supplement til NPV

**Vanlige feil å unngå**

1. **"Vi krever 3 års tilbakebetalingstid på alle prosjekter"**
   Feil: Kan forkaste svært lønnsomme langsiktige prosjekter

2. **"Vi tar prosjektet med høyest IRR"**
   Feil: Ignorerer prosjektstørrelse og reinvesteringsproblemer

3. **"NPV er for teoretisk, vi bruker IRR"**
   Feil: IRR har flere teoretiske problemer enn NPV

4. **"Vi bruker alle målene og tar gjennomsnittet"**
   Feil: Ved konflikt har NPV alltid rett

**Oppsummering**

- **NPV er sjefen** - bruk alltid NPV som hovedkriterium
- **IRR kan villede** - vær klar over begrensningene
- **Tilbakebetalingstid** - nyttig for likviditetsvurdering
- **PI** - best ved kapitalrasjonering
- **Ved konflikt** - NPV vinner alltid!

**Husk:** Andre mål gir tilleggsinformasjon, men skal aldri overstyre NPV. En god analyse presenterer flere mål, men konkluderer basert på NPV.

**Neste steg**

Nå som vi forstår de ulike målene, skal vi se på hvordan usikkerhet påvirker investeringsanalysen. Hvordan håndterer vi at våre estimater sjelden treffer 100%?

**🎯 Tommelfingerregel: Present gjerne IRR og tilbakebetalingstid i tillegg til NPV, men la aldri disse målene overstyre en positiv NPV!**

**Refleksjonsspørsmål:** Mange ledere foretrekker IRR fremfor NPV fordi "alle forstår prosent". Hvorfor kan dette fokuset på "enkel kommunikasjon" føre til dårlige investeringsbeslutninger? Hvordan kan du som analytiker best formidle NPV-konseptet til ledere som er vant til å tenke i prosent?`
    }
  ]
};

async function addModule74() {
  try {
    // Find module 7
    const { data: module7, error: moduleError } = await supabase
      .from('modules')
      .select('id')
      .eq('order_index', 7)
      .single();

    if (moduleError) {
      console.error('Error fetching module 7:', moduleError);
      return;
    }

    console.log('Found module 7 with id:', module7.id);

    // Check if sub-module 7.4 already exists
    const { data: existingSubModule, error: fetchError } = await supabase
      .from('sub_modules')
      .select('*')
      .eq('module_id', module7.id)
      .eq('order_index', 4)
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
          title: 'Andre investeringsmål',
          content: module74Content,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingSubModule.id);

      if (updateError) {
        console.error('Error updating sub-module 7.4:', updateError);
      } else {
        console.log('Successfully updated sub-module 7.4');
      }
    } else {
      // Create new sub-module
      const { error: insertError } = await supabase
        .from('sub_modules')
        .insert({
          module_id: module7.id,
          title: 'Andre investeringsmål',
          content: module74Content,
          order_index: 4,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });

      if (insertError) {
        console.error('Error creating sub-module 7.4:', insertError);
      } else {
        console.log('Successfully created sub-module 7.4');
      }
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

addModule74();