import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tqpryezzddufpovfbpld.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxcHJ5ZXp6ZGR1ZnBvdmZicGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NjA5MDksImV4cCI6MjA2NzAzNjkwOX0.TYmpggmCUr_7aNN_KKC5igvyT_QOWjFpa4_wlX_hjpE';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Module 8.2 content
const module82Content = {
  sections: [
    {
      title: "Kapitalstruktur - Fra teori til praksis",
      type: "content",
      content: `**Modigliani-Miller og virkeligheten**

I forrige del introduserte vi spørsmålet om hvordan bedrifter skal finansiere seg. Nå skal vi dykke dypere inn i teorien og praksisen bak kapitalstruktur.

## Video: Kapitalstruktur og verdiskaping

!video[Kapitalstruktur forklart](placeholder-for-video-url)

**Fra kakemetaforen til M&M-teorien**

I 1958 revolusjonerte Franco Modigliani og Merton Miller finansverdenen med et sjokkerende utsagn: *I perfekte markeder er kapitalstrukturen irrelevant for bedriftens verdi!*

Dette kalles **M&M Proposisjon I** og kan forklares med kakemetaforen:
- Tenk på bedriften som en kake
- Uansett hvordan du deler kaken (mellom gjeld og egenkapital)
- Er den totale kakestørrelsen den samme

Men vent... hvis det var sant, hvorfor bryr bedrifter seg så mye om finansiering?

**Svaret: Verden er ikke perfekt!**

M&M forutsatte:
- Ingen skatter
- Ingen konkurskostnader
- Perfekt informasjon
- Ingen transaksjonskostnader
- Alle kan låne til samme rente

I virkeligheten har vi:
- **Skatter** - rentefradrag gjør gjeld attraktivt
- **Konkurskostnader** - for mye gjeld er farlig
- **Agentkostnader** - interessekonflikter mellom eiere og långivere
- **Asymmetrisk informasjon** - ledelsen vet mer enn markedet

**Interaktiv analyse: Utforsk kapitalstruktur**

Bruk verktøyet under til å se hvordan ulike faktorer påvirker optimal kapitalstruktur:

!interactive[CapitalStructureAnalyzer]

**M&M med skatt - Skattefavorisering av gjeld**

Når vi introduserer selskapsskatt, endrer bildet seg dramatisk:

**Uten gjeld:**
- EBIT: 1 000 000 kr
- Skatt (22%): 220 000 kr
- Til fordeling: 780 000 kr

**Med 5 MNOK gjeld (5% rente):**
- EBIT: 1 000 000 kr
- Renter: 250 000 kr
- Skatt (22% av 750 000): 165 000 kr
- Til fordeling: 835 000 kr
- **Skattebesparelse: 55 000 kr!**

Dette kalles **skatteskjoldet** og verdsettes som:
*Skatteskjold = Skattesats × Gjeld = 22% × 5 000 000 = 1 100 000 kr*

**Men hvorfor har ikke alle bedrifter 100% gjeld?**

**Konkurskostnader - Den mørke siden av gjeld**

Gjeld kommer med en pris:

1. **Direkte konkurskostnader** (3-5% av verdi):
   - Advokater og rådgivere
   - Rettsgebyr
   - Administrasjonskostnader

2. **Indirekte konkurskostnader** (10-20% av verdi):
   - Tapt salg (kunder stoler ikke på deg)
   - Dyktige ansatte slutter
   - Leverandører krever kontant betaling
   - Underinvestering i gode prosjekter

**Case: Norwegian Air Shuttle**

Norwegian hadde i 2019:
- Over 90% gjeldsfinansiering
- Lave rentekostnader (bra!)
- Men: Ved første turbulens (COVID-19)...
- Aksjekursen kollapset
- Måtte restrukturere gjeld
- Aksjonærene ble utvannet

**Lærdommen:** For mye gjeld kan ødelegge aksjonærverdier selv om skattefordelen er stor.

**Static Trade-off Theory - Balansekunsten**

Den optimale kapitalstrukturen balanserer:
- **Fordeler:** Skattefordel av gjeld
- **Ulemper:** Finansiell nød og konkurskostnader

**Optimal gjeld når:**
*Marginal skattefordel = Marginal konkurskostnad*

**Praktiske huskeregler for gjeldsgrad:**

**Høy gjeldskapasitet:**
- Stabile kontantstrømmer (kraft, eiendom)
- Mye materielle eiendeler (sikkerhet)
- Lav forretningsrisiko
- Modne bransjer

**Lav gjeldskapasitet:**
- Volatile inntekter (tech, biotek)
- Immaterielle eiendeler (IP, merkevare)
- Høy forretningsrisiko
- Vekstbedrifter

**WACC - Kapitalkostnaden**

WACC (Weighted Average Cost of Capital) er bedriftens "hurdle rate":

*WACC = (E/V) × Re + (D/V) × Rd × (1 - Tc)*

Hvor:
- E = Markedsverdi egenkapital
- D = Markedsverdi gjeld
- V = E + D (total verdi)
- Re = Avkastningskrav egenkapital
- Rd = Rente på gjeld
- Tc = Skattesats

**Eksempel: Beregning av WACC**

Aker Solutions:
- Egenkapital: 15 mrd kr (60%)
- Gjeld: 10 mrd kr (40%)
- Avkastningskrav EK: 12%
- Lånerente: 4%
- Skattesats: 22%

*WACC = 0,6 × 12% + 0,4 × 4% × (1 - 0,22)*
*WACC = 7,2% + 1,25% = 8,45%*

**M&M Proposisjon II - Risiko og avkastning**

Når bedriften tar opp gjeld, endres risikoen for eierne:

*Re = Ra + (Ra - Rd) × (D/E) × (1 - Tc)*

Hvor:
- Re = Avkastningskrav på egenkapital (med gjeld)
- Ra = Avkastningskrav uten gjeld
- Rd = Lånerente
- D/E = Gjeld/Egenkapital-forhold

**Intuisjonen:** Gjeld forsterker både opp- og nedsiden → høyere risiko → høyere avkastningskrav.

**Finansiell giring i praksis**

**Eksempel: Eiendomsinvestering**

Du kjøper en leilighet for 5 MNOK:

**Scenario A - 100% egenkapital:**
- Verdiøkning 10%: Gevinst 500 000 kr = 10% avkastning

**Scenario B - 80% gjeld:**
- Egenkapital: 1 MNOK
- Verdiøkning 10%: Gevinst 500 000 kr = 50% avkastning!

Men hvis verdien faller 10%:
- Scenario A: Tap 10%
- Scenario B: Tap 50%!

**Pecking Order Theory - Hierarkiet**

I praksis følger bedrifter ofte dette hierarkiet:
1. **Intern finansiering** (opptjent kapital)
2. **Gjeld** (obligasjoner, banklån)
3. **Egenkapital** (emisjon)

Hvorfor? Asymmetrisk informasjon - emisjoner signaliserer ofte at aksjen er overpriset.

**Norske særtrekk**

Norge har noen spesielle forhold:
- **Høy skatt** (22%) gjør gjeld attraktivt
- **Stabil økonomi** reduserer konkursrisiko
- **Olje/gass** gir volatile inntekter
- **Familiebedrifter** ofte konservative

**Typiske gjeldsgrader i Norge:**
- Eiendom: 60-80%
- Industri: 30-50%
- Tech/IT: 0-30%
- Shipping: 50-70%

**Oppsummering og refleksjon**

Optimal kapitalstruktur handler om balanse:
- Utnytt skattefordelen av gjeld
- Men unngå finansiell nød
- Tilpass til bransjens karakteristika
- Vurder timing og markedsforhold

**Praktiske tips:**
1. Start konservativt - det er lettere å øke gjeld enn redusere
2. Ha finansiell fleksibilitet for muligheter
3. Match gjeldsprofil med eiendeler (kort gjeld for korte eiendeler)
4. Følg med på kredittrating og lånebetingelser
5. Husk at optimal struktur endres over tid

**Neste:** I del 8.3 skal vi se nærmere på hvordan du praktisk beregner kapitalkostnaden (WACC) og bruker den i investeringsbeslutninger.`
    }
  ]
};

async function addModule82() {
  try {
    // First, get module 8 ID
    const { data: module8, error: fetchError } = await supabase
      .from('modules')
      .select('id')
      .eq('order_index', 8)
      .single();

    if (fetchError || !module8) {
      console.error('Error fetching module 8:', fetchError);
      return;
    }

    const module8Id = module8.id;

    // Check if sub-module 8.2 already exists
    const { data: existingSubModule, error: checkError } = await supabase
      .from('sub_modules')
      .select('*')
      .eq('module_id', module8Id)
      .eq('order_index', 2)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking sub-module:', checkError);
      return;
    }

    if (existingSubModule) {
      // Update existing sub-module
      const { error: updateError } = await supabase
        .from('sub_modules')
        .update({ 
          title: 'Kapitalstruktur - Fra teori til praksis',
          content: module82Content,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingSubModule.id);

      if (updateError) {
        console.error('Error updating sub-module 8.2:', updateError);
      } else {
        console.log('Successfully updated sub-module 8.2');
      }
    } else {
      // Create new sub-module
      const { error: insertError } = await supabase
        .from('sub_modules')
        .insert({
          module_id: module8Id,
          title: 'Kapitalstruktur - Fra teori til praksis',
          content: module82Content,
          order_index: 2,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });

      if (insertError) {
        console.error('Error creating sub-module 8.2:', insertError);
      } else {
        console.log('Successfully created sub-module 8.2');
      }
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

addModule82();