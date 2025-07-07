import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tqpryezzddufpovfbpld.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxcHJ5ZXp6ZGR1ZnBvdmZicGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NjA5MDksImV4cCI6MjA2NzAzNjkwOX0.TYmpggmCUr_7aNN_KKC5igvyT_QOWjFpa4_wlX_hjpE';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Module 8.1 content
const module81Content = {
  sections: [
    {
      title: "Kapitalstruktur og utbyttepolitikk - En introduksjon",
      type: "content",
      content: `**To grunnleggende finansielle beslutninger**

Etter at vi har lært å vurdere investeringer (modul 7), står vi overfor to andre kritiske finansielle beslutninger:

1. **Hvordan finansiere investeringene?** (Kapitalstruktur)
2. **Hva gjøre med overskuddet?** (Utbyttepolitikk)

Disse spørsmålene er tett koblet og påvirker både bedriftens verdi og risiko.

## Video: Introduksjon til kapitalstruktur og utbyttepolitikk

!video[Introduksjon til modul 8](placeholder-for-video-url)

**Kapitalstruktur - Finansieringsmiksen**

Tenk på en bedrift som en kake. Kapitalstrukturen handler om hvordan kaken er finansiert:
- **Egenkapital**: Eiernes penger (aksjekapital + opptjent egenkapital)
- **Gjeld**: Lånte penger (obligasjoner, banklån, leverandørgjeld)

Men hvorfor bry seg om miksen? Fordi valget påvirker:
- Bedriftens totale verdi
- Risikoen for eierne
- Kostnaden på kapitalen (WACC)
- Finansiell fleksibilitet
- Skattebetalingen

**Et enkelt eksempel:**

Forestill deg to identiske restauranter som begge koster 10 millioner å starte:
- Restaurant A: 100% egenkapitalfinansiert
- Restaurant B: 50% egenkapital, 50% gjeld

Begge tjener 2 millioner før renter og skatt. Hvem kommer best ut?

**Restaurant A (uten gjeld):**
- Overskudd før skatt: 2 000 000 kr
- Skatt (22%): 440 000 kr
- Overskudd etter skatt: 1 560 000 kr
- Avkastning på egenkapital: 15,6%

**Restaurant B (med gjeld):**
- Overskudd før renter: 2 000 000 kr
- Rentekostnader (5% av 5 mill): 250 000 kr
- Overskudd før skatt: 1 750 000 kr
- Skatt (22%): 385 000 kr
- Overskudd etter skatt: 1 365 000 kr
- Avkastning på egenkapital: 27,3%! (på kun 5 mill investert)

**Magien med gjeld:** Restaurant B får høyere avkastning på egenkapitalen! Dette kalles finansiell giring (leverage).

Men vent... det er en hake:

**Hvis det går dårlig (kun 500 000 kr overskudd):**
- Restaurant A: Fortsatt overskudd på 390 000 kr
- Restaurant B: Overskudd på kun 195 000 kr (må betale renter først!)

**Lærdommen:** Gjeld forsterker både opp- og nedsiden. Det er et tveegget sverd.

**Utbyttepolitikk - Hva gjøre med overskuddet?**

Når bedriften tjener penger, har den tre valg:
1. **Reinvestere** i virksomheten
2. **Betale utbytte** til eierne
3. **Kjøpe tilbake egne aksjer**

Valget påvirker:
- Bedriftens vekstmuligheter
- Likviditeten til aksjonærene
- Signaleffekter til markedet
- Skattekonsekvenser
- Aksjekursen

**Case: Telenor vs. Kahoot**

**Telenor** (modent selskap):
- Stabile kontantstrømmer
- Begrensede vekstmuligheter
- Høyt utbytte (5-6% yield)
- Regelmessige tilbakekjøp
- Signal: "Vi har mer cash enn gode prosjekter"

**Kahoot** (vekstselskap):
- Reinvesterer alt
- Null utbytte
- Fokus på vekst
- Signal: "Vi har mange lønnsomme prosjekter"

**Koblingen mellom kapitalstruktur og utbytte**

De to beslutningene henger tett sammen:
- Høy gjeld → mindre rom for utbytte
- Høyt utbytte → kanskje behov for mer gjeld
- Lav gjeld → fleksibilitet til å variere utbytte

**Praktisk eksempel: Familieselskapet**

Far driver et lønnsomt transportselskap. Datteren skal overta. Vurderinger:

**Kapitalstruktur:**
- Lite gjeld nå (konservativ far)
- Datteren vurderer gjeldfinansiering for å:
  - Kjøpe ut søsken
  - Investere i nye lastebiler
  - Utnytte skattefordelen

**Utbyttepolitikk:**
- Far tok ut høyt utbytte (pensjonssparing)
- Datteren vil reinvestere for vekst
- Men bankene vil se stabil utbytteevne

**Dilemmaet:** Hvordan balansere vekstambisjoner, familiens behov og finansiell stabilitet?

**Sentrale spørsmål vi skal besvare**

I de neste delene skal vi dykke dypere inn i:

**Kapitalstruktur (8.2-8.4):**
- Påvirker gjeldsgraden bedriftens verdi?
- Hva er optimal kapitalstruktur?
- Hvordan beregne kapitalkostnaden (WACC)?
- Hva med finansiell risiko og konkurs?

**Utbyttepolitikk (8.5-8.6):**
- Påvirker utbytte aksjekursen?
- Kontantutbytte vs. tilbakekjøp?
- Signaleffekter og markedsreaksjoner
- Praktisk utbyttepolitikk

**Hvorfor dette er viktig**

Feil kapitalstruktur eller utbyttepolitikk kan:
- Ødelegge aksjonærverdier
- Føre til unødvendig høye skatter
- Begrense vekstmuligheter
- Øke konkursrisikoen
- Sende feil signaler til markedet

Riktige beslutninger kan:
- Maksimere bedriftsverdien
- Redusere kapitalkostnaden
- Gi finansiell fleksibilitet
- Bygge investortillit
- Optimalisere skatteposisjonen

**En forsmak på kontroversene**

Finansteorien er full av debatter:
- **Modigliani-Miller**: "Kapitalstruktur er irrelevant!" (i perfekte markeder)
- **Trade-off teorien**: "Balanser skattefordeler mot konkursrisiko"
- **Pecking order**: "Bruk intern finansiering først"
- **Signalteori**: "Handlinger taler høyere enn ord"

Vi skal utforske disse teoriene og - viktigst - deres praktiske implikasjoner.

**Din verktøykasse etter modul 8**

Du vil kunne:
- Analysere og optimalisere kapitalstruktur
- Beregne WACC og forstå kapitalkostandens komponenter
- Vurdere finansiell risiko og giring
- Designe fornuftig utbyttepolitikk
- Forstå markedets reaksjoner på finansielle beslutninger

**Refleksjonsspørsmål:** 

Mange norske familiebedrifter har tradisjonelt svært lite gjeld og betaler lite utbytte. Alt overskudd reinvesteres. Er dette optimalt? Tenk på fordeler og ulemper med denne konservative tilnærmingen. Hva ville du rådet en familiebedrift som vurderer generasjonsskifte?

**Klar for dypdykket?**

La oss starte med å forstå kapitalstrukturens byggeklosser og hvordan balansen mellom gjeld og egenkapital påvirker alt fra bedriftsverdi til søvnkvaliteten til finansdirektøren...`
    }
  ]
};

async function addModule81() {
  try {
    // First, check if module 8 exists
    const { data: existingModule8, error: checkError } = await supabase
      .from('modules')
      .select('id')
      .eq('order_index', 8)
      .single();

    let module8Id;

    if (checkError && checkError.code === 'PGRST116') {
      // Module 8 doesn't exist, create it
      const { data: newModule, error: createError } = await supabase
        .from('modules')
        .insert({
          title: 'Kapitalstruktur og utbyttepolitikk',
          description: 'Lær hvordan bedrifter finansierer seg og fordeler overskudd',
          order_index: 8,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .select()
        .single();

      if (createError) {
        console.error('Error creating module 8:', createError);
        return;
      }

      module8Id = newModule.id;
      console.log('Created module 8 with id:', module8Id);
    } else if (existingModule8) {
      module8Id = existingModule8.id;
      console.log('Found existing module 8 with id:', module8Id);
    } else {
      console.error('Error checking for module 8:', checkError);
      return;
    }

    // Check if sub-module 8.1 already exists
    const { data: existingSubModule, error: fetchError } = await supabase
      .from('sub_modules')
      .select('*')
      .eq('module_id', module8Id)
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
          title: 'Introduksjon til kapitalstruktur og utbyttepolitikk',
          content: module81Content,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingSubModule.id);

      if (updateError) {
        console.error('Error updating sub-module 8.1:', updateError);
      } else {
        console.log('Successfully updated sub-module 8.1');
      }
    } else {
      // Create new sub-module
      const { error: insertError } = await supabase
        .from('sub_modules')
        .insert({
          module_id: module8Id,
          title: 'Introduksjon til kapitalstruktur og utbyttepolitikk',
          content: module81Content,
          order_index: 1,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });

      if (insertError) {
        console.error('Error creating sub-module 8.1:', insertError);
      } else {
        console.log('Successfully created sub-module 8.1');
      }
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

addModule81();