import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tqpryezzddufpovfbpld.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxcHJ5ZXp6ZGR1ZnBvdmZicGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NjA5MDksImV4cCI6MjA2NzAzNjkwOX0.TYmpggmCUr_7aNN_KKC5igvyT_QOWjFpa4_wlX_hjpE';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Module 7.6 content
const module76Content = {
  sections: [
    {
      title: "Spesielle problemstillinger",
      type: "content",
      content: `**Når virkeligheten kompliserer investeringsanalysen**

I den virkelige verden møter vi ofte situasjoner som kompliserer standard NPV-analyse. La oss se på de viktigste: kapitalrasjonering, prosjekter med ulik levetid, og valget mellom nominelle og reelle størrelser.

!component:capital-rationing

**Kapitalrasjonering - Når pengene ikke strekker til**

I en perfekt verden tar bedriften alle prosjekter med positiv NPV. Men virkeligheten er ofte annerledes:

**Soft rasjonering (selvpålagt)**
- Familiebedrifter som ikke vil utvanne eierskapet
- Ledelse som frykter for høy gjeldsgrad
- Ønske om finansiell fleksibilitet
- Intern budsjettdisiplin

**Hard rasjonering (markedspålagt)**
- Banken sier nei til mer lån
- Investorer tviler på bedriftens planer
- Regulatoriske begrensninger
- Makroøkonomisk uro

**Konsekvensen: NPV-regelen må modifiseres**

Ved kapitalrasjonering holder det ikke å se på total NPV. Du må maksimere NPV per investert krone:

**Lønnsomhetsindeks (PI) = PV av kontantstrømmer / Investering**

eller

**PI = 1 + (NPV / Investering)**

**Beslutningsregel ved rasjonering:**
1. Beregn PI for alle prosjekter
2. Ranger fra høyest til lavest PI
3. Ta prosjekter i rekkefølge til budsjettet er brukt

**Eksempel: 5 MNOK tilgjengelig**
- Prosjekt A: Investering 3 MNOK, NPV 1,5 MNOK, PI = 1,50
- Prosjekt B: Investering 2 MNOK, NPV 1,2 MNOK, PI = 1,60
- Prosjekt C: Investering 4 MNOK, NPV 2,4 MNOK, PI = 1,60

Uten rasjonering: Ta alle (NPV = 5,1 MNOK)
Med rasjonering: Ta B og C (NPV = 3,6 MNOK, høyere enn A alene)

**Viktig innsikt**: Stor NPV er ikke alltid best under rasjonering!

**Det skjulte problemet med avkastningskravet**

Ved hard rasjonering er standard avkastningskrav ofte for lavt. Hvorfor?

Avkastningskravet skal reflektere alternativkostnaden. Ved rasjonering er alternativet ikke "markedsavkastning" men "avkastningen på prosjekter vi må si nei til".

Hvis du må si nei til prosjekter med 20% IRR, er det din sanne alternativkostnad - ikke de 10% du bruker i normale tider.

**Prosjekter med ulik levetid**

Hvordan sammenligner du:
- Maskin A: 3 års levetid, NPV 500 000 kr
- Maskin B: 6 års levetid, NPV 800 000 kr

Hvis maskinene kan erstattes ved levetidens slutt, er ikke NPV direkte sammenlignbart.

**Løsning 1: Minste felles multiplum**
Sammenlign over 6 år:
- A kjøpes to ganger: NPV = 500 000 + 500 000/(1,1)³ = 875 657 kr
- B kjøpes én gang: NPV = 800 000 kr

A er best!

**Løsning 2: Ekvivalent årlig annuitet (EAA)**
Konverter NPV til årlig kontantstrøm:

EAA = NPV / Annuitetsfaktor

For A: EAA = 500 000 / 2,487 = 201 046 kr per år
For B: EAA = 800 000 / 4,355 = 183 676 kr per år

A gir høyest årlig verdi!

**Når bruke EAA?**
- Prosjektene kan gjentas
- Du sammenligner over "uendelig" tid
- Teknologi/marked er stabilt

**Når IKKE bruke EAA?**
- Engangsprosjekter
- Raskt skiftende teknologi
- Strategiske hensyn

**Nominelt vs. reelt avkastningskrav**

En ofte oversett feil: Blande nominelle og reelle størrelser.

**Hovedregel: Match kontantstrømmer og avkastningskrav!**

**Nominell analyse (vanligst):**
- Kontantstrømmer i løpende kroner
- Inkluderer forventet inflasjon
- Bruk nominelt avkastningskrav

**Reell analyse:**
- Kontantstrømmer i faste kroner
- Ekskluderer inflasjon
- Bruk reelt avkastningskrav

**Fisher-sammenhengen:**
(1 + nominell) = (1 + reell) × (1 + inflasjon)

Tilnærming for små rater:
Nominell ≈ Reell + Inflasjon

**Eksempel: Feil som ofte gjøres**
Nominelt avkastningskrav: 10%
Inflasjon: 2%
Reelt avkastningskrav: ≈ 8%

**Feil:** Bruke 10% på inflasjonsjusterte kontantstrømmer
**Resultat:** NPV blir alt for lav!

**Praktisk tips:**
1. Hold deg til nominell analyse (enklere)
2. Hvis du må bruke reell, vær konsistent
3. Husk at inflasjon påvirker ulikt:
   - Inntekter: Ofte full prisjustering
   - Lønn: Ofte full inflasjonsjustering
   - Avskrivninger: INGEN inflasjonsjustering (skatteeffekt eroderes!)

**Kombinerte utfordringer**

Ofte møter du flere problemer samtidig:
- Rasjonering + ulik levetid: Bruk PI på EAA
- Rasjonering + inflasjon: Vær ekstra nøye med konsistens
- Alle tre: Start med å forenkle!

**Oppsummering av beslutningsregler**

**Normal situasjon:**
→ NPV > 0 = Gjennomfør

**Kapitalrasjonering:**
→ Ranger etter PI, ta i rekkefølge

**Ulik levetid (gjentakende):**
→ Høyest EAA vinner

**Rasjonering + ulik levetid:**
→ Ranger etter PI beregnet på EAA

**Sjekkliste for spesielle situasjoner**

☐ Er det kapitalrasjonering? Soft eller hard?
☐ Kan prosjektene gjentas?
☐ Er kontantstrømmene nominelle eller reelle?
☐ Matcher avkastningskravet kontantstrømmene?
☐ Er avkastningskravet justert for rasjonering?

**Avsluttende refleksjon**

Investeringsanalyse handler om å ta gode beslutninger under usikkerhet og begrensninger. NPV er fortsatt det beste verktøyet, men må tilpasses situasjonen:

- Ved rasjonering: Se på verdiskaping per krone
- Ved ulik levetid: Se på verdiskaping per år
- Ved inflasjon: Vær konsistent

Det viktigste er ikke perfekt presisjon, men å unngå de store feilene. Og den største feilen? Å ignorere tidsverdien av penger helt!

**🎯 Husk: NPV er robust og fleksibelt. Tilpass metoden til situasjonen, men hold fast ved prinsippet: Maksimer verdiskaping!**

**Refleksjonsspørsmål:** En bedrift har 10 MNOK tilgjengelig og vurderer to strategier: (1) Ett stort, prestisjefylt prosjekt med NPV 5 MNOK og PI 1,5, eller (2) Fire små prosjekter med samlet NPV 6 MNOK og gjennomsnittlig PI 1,8. Ledelsen foretrekker det store prosjektet fordi det "ser bedre ut". Hva ville du anbefalt og hvordan ville du argumentert?`
    }
  ]
};

async function addModule76() {
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

    // Check if sub-module 7.6 already exists
    const { data: existingSubModule, error: fetchError } = await supabase
      .from('sub_modules')
      .select('*')
      .eq('module_id', module7.id)
      .eq('order_index', 6)
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
          title: 'Spesielle problemstillinger',
          content: module76Content,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingSubModule.id);

      if (updateError) {
        console.error('Error updating sub-module 7.6:', updateError);
      } else {
        console.log('Successfully updated sub-module 7.6');
      }
    } else {
      // Create new sub-module
      const { error: insertError } = await supabase
        .from('sub_modules')
        .insert({
          module_id: module7.id,
          title: 'Spesielle problemstillinger',
          content: module76Content,
          order_index: 6,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });

      if (insertError) {
        console.error('Error creating sub-module 7.6:', insertError);
      } else {
        console.log('Successfully created sub-module 7.6');
      }
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

addModule76();