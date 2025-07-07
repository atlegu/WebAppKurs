import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tqpryezzddufpovfbpld.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxcHJ5ZXp6ZGR1ZnBvdmZicGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NjA5MDksImV4cCI6MjA2NzAzNjkwOX0.TYmpggmCUr_7aNN_KKC5igvyT_QOWjFpa4_wlX_hjpE';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Module 7.5 content
const module75Content = {
  sections: [
    {
      title: "Usikkerhet og følsomhetsanalyse",
      type: "content",
      content: `**Når estimatene ikke treffer 100%**

Vi har lært at risiko håndteres gjennom avkastningskravet. Men det er ikke nok! Selv med riktig avkastningskrav, må vi forstå hvordan usikkerhet i våre estimater påvirker investeringsbeslutningen.

!component:sensitivity-analysis

**Hvorfor holder ikke avkastningskravet?**

Avkastningskravet justerer for systematisk risiko - risiko som påvirker hele markedet. Men investeringsprosjekter har også usystematisk risiko:

- **Estimatusikkerhet**: Hvor sikre er vi på salgsprognosene?
- **Prosjektspesifikk risiko**: Teknologisk utvikling, konkurrenter, regulering
- **Ulike syn**: Markedsavdelingen er optimistisk, produksjon er pessimistisk

**Tre nivåer av usikkerhetsanalyse**

**1. Sensitivitetsanalyse - Én variabel om gangen**

Sensitivitetsanalyse viser hvordan NPV endres når én variabel endres, mens alt annet holdes konstant.

**Fremgangsmåte:**
1. Identifiser nøkkelvariabler (salg, kostnader, investeringsbeløp)
2. Varier hver variabel med f.eks. ±20%
3. Beregn ny NPV for hver endring
4. Presenter grafisk eller i tabell

**Eksempel: Ny butikk**
\`\`\`
Basiscase NPV: 500 000 kr

Variabel         -20%        Basis      +20%
Salgsinntekter   -300 000    500 000    1 300 000
Varekostnader    900 000     500 000    100 000
Husleie          700 000     500 000    300 000
\`\`\`

**Tolkning**: Salgsinntekter er mest kritisk - 20% reduksjon gir negativ NPV!

**2. Scenarioanalyse - Flere variabler samtidig**

Virkeligheten er at variabler ofte henger sammen:
- Høy etterspørsel → høyere priser OG høyere kostnader
- Lavkonjunktur → lavere salg OG lavere kostnader

**Typiske scenarier:**
- **Optimistisk**: Alt går bedre enn forventet
- **Basis**: Forventede verdier
- **Pessimistisk**: Alt går dårligere
- **Realistisk dårlig**: Moderate problemer

**Eksempel: Hotellprosjekt**
\`\`\`
Scenario      Belegg  Rompeg  Kostnader  NPV
Optimistisk   85%     1500    90%        8 MNOK
Basis         70%     1200    100%       3 MNOK
Realistisk    60%     1100    105%       0.5 MNOK
Pessimistisk  45%     900     110%       -4 MNOK
\`\`\`

**3. Monte Carlo-simulering - Sannsynlighetsfordeling**

Mest avansert: Tildeler sannsynlighetsfordelinger til hver usikre variabel og kjører tusenvis av simuleringer.

**Resultat:**
- Sannsynlighet for positiv NPV: 73%
- Forventet NPV: 2.3 MNOK
- 5% verste utfall: -1.2 MNOK
- 5% beste utfall: 6.1 MNOK

**Tornado-diagrammet - Prioriter innsatsen**

Tornado-diagrammet viser hvilke variabler som har størst innvirkning på NPV. Fokuser på å:
1. Få bedre estimater for kritiske variabler
2. Finne måter å redusere risiko i disse
3. Lage beredskapsplaner

**Break-even analyse - Hvor mye tåler vi?**

Nyttig spørsmål: Hvor mye kan en kritisk variabel forverres før NPV = 0?

**Eksempel:**
- NPV blir 0 hvis salget faller 15% under forventning
- NPV blir 0 hvis kostnadene øker 25%
- NPV blir 0 hvis forsinkelse > 8 måneder

Dette gir konkret forståelse av risikomarginene.

**Presentasjon av usikkerhet**

Når du presenterer en investeringsanalyse, inkluder alltid:

1. **Basis NPV** med sentrale forutsetninger
2. **Sensitivitetstabell** for kritiske variabler
3. **Scenario-resultater** med sannsynlighetsvurdering
4. **Risikoreduserende tiltak** du foreslår

**Mal for presentasjon:**
"Prosjektet har positiv NPV på 3 MNOK i basisscenarioet. NPV forblir positiv selv om salget faller 15% eller kostnadene øker 20%. I vårt pessimistiske scenario (25% sannsynlighet) er NPV fortsatt positiv med 0.5 MNOK. Vi anbefaler prosjektet, men foreslår følgende risikoreduserende tiltak..."

**Risikoreduserende tiltak**

Når analysen avdekker høy følsomhet:

**Realopsjoner** (mer om dette i 7.6):
- Dele prosjektet i faser
- Bygge inn fleksibilitet
- Vente på mer informasjon

**Operasjonelle tiltak:**
- Langsiktige kontrakter for å låse priser
- Forsikring mot spesifikke risikoer
- Diversifisering av kunder/leverandører
- Outsourcing av risikable aktiviteter

**Vanlige feil i usikkerhetsanalyse**

**1. "Best/worst case" som er urealistiske**
Ikke: "Worst case er at vi selger 0"
Bedre: "Realistisk dårlig case basert på finanskrisen..."

**2. Ignorere korrelasjoner**
Feil: Høye priser OG lave kostnader i optimistisk scenario
Riktig: Høy etterspørsel gir både høyere priser OG kostnader

**3. Overfokus på usikkerhet**
"Det er så usikkert at vi ikke kan beslutte noe"
Husk: Å ikke investere er også en beslutning med konsekvenser!

**4. Pseudo-presisjon**
"NPV er 3 234 567 kr" → "NPV er ca. 3.2 MNOK"
Vis ikke desimaler som gir falsk presisjon.

**Kommunikasjon av usikkerhet**

**Til styret/ledelsen:**
- Fokus på beslutningsrelevant informasjon
- Grafisk fremstilling (tornado, scenariostolper)
- Klare anbefalinger med risikovurdering

**Til investorer:**
- Transparent om forutsetninger
- Vis robusthet gjennom scenarioer
- Fokus på nedsiderisiko

**Til prosjektteamet:**
- Detaljert om kritiske variabler
- Klare mål for oppfølging
- Triggerpunkter for revurdering

**Praktisk eksempel: Vindkraftprosjekt**

La oss se hvordan dette fungerer for et vindkraftprosjekt:

**Kritiske variabler:**
1. Vindforhold (GWh produksjon)
2. Strømpris (kr/MWh)
3. Driftskostnader
4. Investeringskostnad

**Sensitivitetsanalyse viser:**
- NPV mest sensitiv for strømpris og produksjon
- 10% lavere vind → 25% lavere NPV
- 10% lavere strømpris → 30% lavere NPV

**Risikoreduserende tiltak:**
1. Grundige vindmålinger (reduserer produksjonsusikkerhet)
2. Strømpriskontrakter (PPA) for deler av produksjonen
3. Vedlikeholdsavtaler med leverandør
4. Trinnvis utbygging

**Oppsummering**

Usikkerhetsanalyse er ikke valgfritt - det er en kritisk del av enhver investeringsanalyse:

1. **Start med sensitivitet** - identifiser kritiske variabler
2. **Lag realistiske scenarier** - ikke bare ekstremverdier
3. **Fokuser på beslutningsrelevans** - hva endrer konklusjonen?
4. **Foreslå tiltak** - hvordan kan risiko reduseres?
5. **Kommuniser tydelig** - tilpass budskapet til mottaker

**Husk:** Målet er ikke å eliminere usikkerhet (umulig!), men å forstå den godt nok til å ta gode beslutninger.

**Neste steg**

Med forståelse for usikkerhet, er vi klare for å se på realopsjoner - hvordan fleksibilitet og muligheten til å endre kurs kan ha betydelig verdi i usikre prosjekter.

**🎯 Tommelfingerregel: Hvis NPV kun er positiv i optimistiske scenarier, er prosjektet for risikabelt. Se etter prosjekter som er robuste også i realistiske negative scenarier.**

**Refleksjonsspørsmål:** En investeringsanalytiker presenterte kun basis-NPV til styret, uten sensitivitetsanalyse. Styret godkjente prosjektet. Ett år senere viste det seg at en kritisk forutsetning var 30% for optimistisk, og prosjektet tapte penger. Hvem har ansvaret - analytikeren som ikke viste usikkerheten, eller styret som ikke spurte? Hvordan kunne dette vært unngått?`
    }
  ]
};

async function addModule75() {
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

    // Check if sub-module 7.5 already exists
    const { data: existingSubModule, error: fetchError } = await supabase
      .from('sub_modules')
      .select('*')
      .eq('module_id', module7.id)
      .eq('order_index', 5)
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
          title: 'Usikkerhet og følsomhetsanalyse',
          content: module75Content,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingSubModule.id);

      if (updateError) {
        console.error('Error updating sub-module 7.5:', updateError);
      } else {
        console.log('Successfully updated sub-module 7.5');
      }
    } else {
      // Create new sub-module
      const { error: insertError } = await supabase
        .from('sub_modules')
        .insert({
          module_id: module7.id,
          title: 'Usikkerhet og følsomhetsanalyse',
          content: module75Content,
          order_index: 5,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });

      if (insertError) {
        console.error('Error creating sub-module 7.5:', insertError);
      } else {
        console.log('Successfully created sub-module 7.5');
      }
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

addModule75();