import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tqpryezzddufpovfbpld.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxcHJ5ZXp6ZGR1ZnBvdmZicGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NjA5MDksImV4cCI6MjA2NzAzNjkwOX0.TYmpggmCUr_7aNN_KKC5igvyT_QOWjFpa4_wlX_hjpE';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Module 7.3 content
const module73Content = {
  sections: [
    {
      title: "Nåverdianalyse (NPV)",
      type: "content",
      content: `**Fra kontantstrømmer til investeringsbeslutning**

Nå som du har identifisert alle relevante kontantstrømmer, er det tid for det viktigste steget: Å beregne om investeringen faktisk er lønnsom. Dette gjør vi med netto nåverdi (NPV) - investeringsanalysens hovedverktøy.

!component:npv-calculator

**Bygger på modul 3 - Tidsverdien av penger**

Husker du fra modul 3 at penger i dag er mer verdt enn penger i fremtiden? NPV-analysen bruker dette prinsippet på alle kontantstrømmene fra en investering:

1. **Diskonterer** alle fremtidige kontantstrømmer til dagens verdi
2. **Summerer** alle nåverdiene
3. **Trekker fra** den initielle investeringen
4. **Resultatet** forteller om investeringen skaper eller ødelegger verdi

**Hva er netto nåverdi (NPV)?**

NPV er ganske enkelt: **Hvor mye rikere blir du av investeringen, målt i dagens kroner?**

Matematisk:
NPV = Σ [CFₜ / (1+r)ᵗ] - Initial investering

Hvor:
- CFₜ = Kontantstrøm i periode t
- r = Avkastningskrav (diskonteringsrente)
- t = Tidsperiode

**Men hva betyr NPV egentlig?**

La oss si du vurderer en investering og får NPV = 500 000 kr ved 10% avkastningskrav.

Dette betyr:
- Investeringen gir deg tilbake alle pengene du la inn
- PLUSS 10% årlig avkastning på pengene
- PLUSS 500 000 kr EKSTRA i dagens verdi

Med andre ord: Du blir 500 000 kr rikere (i dagens kroner) av å gjøre investeringen!

**Beslutningsregelen er enkel:**

✅ **NPV > 0**: Gjennomfør investeringen - den skaper verdi
❌ **NPV < 0**: Forkast investeringen - den ødelegger verdi
🟡 **NPV = 0**: Break-even - du får akkurat avkastningskravet

**Eksempel: Kafékjede vurderer ny filial**

La oss se på et konkret eksempel:

**Kontantstrømmer:**
- År 0: -2 000 000 kr (etablering)
- År 1: 400 000 kr
- År 2: 600 000 kr
- År 3: 800 000 kr
- År 4: 900 000 kr
- År 5: 1 000 000 kr + 300 000 kr (salg inventar)

**Med 12% avkastningskrav:**
- PV år 1: 400 000 / 1,12¹ = 357 143 kr
- PV år 2: 600 000 / 1,12² = 478 316 kr
- PV år 3: 800 000 / 1,12³ = 569 424 kr
- PV år 4: 900 000 / 1,12⁴ = 572 054 kr
- PV år 5: 1 300 000 / 1,12⁵ = 737 726 kr

**Sum PV**: 2 714 663 kr
**NPV**: 2 714 663 - 2 000 000 = **714 663 kr**

**Konklusjon**: Åpne filialen! Den gjør kafékjeden 714 663 kr rikere.

**Avkastningskravet - Hvor risikoen bor**

En kritisk innsikt: **Risiko håndteres gjennom avkastningskravet, ikke kontantstrømmene.**

- Kontantstrømmene skal være **forventede verdier** (beste estimat)
- Risikoen legges i **avkastningskravet** (diskonteringsrenten)

**Typiske avkastningskrav:**
- Statsobligasjoner: 2-3% (risikofri rente)
- Eiendom i sentrale strøk: 4-7%
- Etablerte bedrifter: 8-12%
- Vekstbedrifter: 15-20%
- Oppstartsbedrifter: 25-40%+

Jo høyere risiko, desto høyere avkastningskrav, desto lavere NPV.

**NPV vs. andre metoder**

Hvorfor er NPV bedre enn å bare se på total fortjeneste?

**Uten NPV-analyse:**
"Investeringen gir 2 millioner i overskudd over 5 år - flott!"

**Med NPV-analyse:**
"Investeringen har negativ NPV på -300 000 kr ved 15% avkastningskrav - pengene gir bedre avkastning andre steder!"

NPV tar hensyn til:
1. **Tidsverdien** - penger i dag > penger i morgen
2. **Risikoen** - gjennom avkastningskravet
3. **Alternativkostnaden** - hva pengene ellers kunne gitt

**Styrker med NPV**

✅ Tar hensyn til alle kontantstrømmer
✅ Tar hensyn til tidsverdien av penger
✅ Gir svar i kroner - lett å forstå
✅ Kan summeres (NPV prosjekt A + B = NPV totalt)
✅ Konsistent beslutningsregel

**Svakheter og fallgruver**

❌ Krever estimat av alle kontantstrømmer
❌ Følsom for avkastningskravet
❌ Sier ingenting om likviditet
❌ Kan favorisere store prosjekter

**Praktiske tips**

1. **Start enkelt**: List kontantstrømmer år for år
2. **Vær realistisk**: Bruk forventede verdier, ikke best case
3. **Test følsomhet**: Hva om salget blir 20% lavere?
4. **Sammenlign**: Beregn NPV for alle alternativer
5. **Dokumenter**: Skriv ned alle forutsetninger

**NPV i praksis - Tre scenarier**

**Scenario 1: Positiv NPV**
Du vurderer å kjøpe en utleieleilighet. NPV = 400 000 kr ved 6% avkastningskrav.
→ Kjøp! Du blir 400 000 kr rikere.

**Scenario 2: Negativ NPV**
Bedriften vurderer ny maskin. NPV = -200 000 kr ved 15% avkastningskrav.
→ Ikke kjøp! Dere taper 200 000 kr på investeringen.

**Scenario 3: Valg mellom prosjekter**
- Prosjekt A: NPV = 1 000 000 kr
- Prosjekt B: NPV = 1 500 000 kr
→ Velg B! (hvis de er gjensidig utelukkende)

**Vanlige misforståelser**

**Misforståelse 1**: "NPV ignorerer risiko"
**Sannhet**: Risiko håndteres gjennom avkastningskravet

**Misforståelse 2**: "Positiv kontantstrøm = god investering"
**Sannhet**: Må diskonteres for å se om det skaper verdi

**Misforståelse 3**: "NPV er for teoretisk"
**Sannhet**: Alle seriøse investorer bruker NPV

**Oppsummering**

NPV er det viktigste verktøyet i investeringsanalyse fordi det:
- Svarer direkte på spørsmålet "Bør vi investere?"
- Gir svaret i kroner og øre
- Tar hensyn til både tid og risiko
- Har en klar beslutningsregel

**Neste steg**

NPV er hovedverktøyet, men ikke det eneste. I neste del skal vi se på supplerende mål som internrente (IRR) og tilbakebetalingstid. Disse gir tilleggsinformasjon, men husk: Ved konflikt vinner alltid NPV!

**🎯 Husk alltid: NPV > 0 = Invester! NPV forteller hvor mye rikere investeringen gjør deg i dagens kroner.**

**Refleksjonsspørsmål:** Mange ledere liker "raske penger" og fokuserer på prosjekter med høye kontantstrømmer de første årene. Hvordan vil dette påvirke NPV sammenlignet med prosjekter som gir jevne kontantstrømmer over lengre tid? Hvilke farer ligger i å prioritere tidlige kontantstrømmer?`
    }
  ]
};

async function addModule73() {
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

    // Check if sub-module 7.3 already exists
    const { data: existingSubModule, error: fetchError } = await supabase
      .from('sub_modules')
      .select('*')
      .eq('module_id', module7.id)
      .eq('order_index', 3)
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
          title: 'Nåverdianalyse (NPV)',
          content: module73Content,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingSubModule.id);

      if (updateError) {
        console.error('Error updating sub-module 7.3:', updateError);
      } else {
        console.log('Successfully updated sub-module 7.3');
      }
    } else {
      // Create new sub-module
      const { error: insertError } = await supabase
        .from('sub_modules')
        .insert({
          module_id: module7.id,
          title: 'Nåverdianalyse (NPV)',
          content: module73Content,
          order_index: 3,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });

      if (insertError) {
        console.error('Error creating sub-module 7.3:', insertError);
      } else {
        console.log('Successfully created sub-module 7.3');
      }
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

addModule73();