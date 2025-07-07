import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tqpryezzddufpovfbpld.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxcHJ5ZXp6ZGR1ZnBvdmZicGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NjA5MDksImV4cCI6MjA2NzAzNjkwOX0.TYmpggmCUr_7aNN_KKC5igvyT_QOWjFpa4_wlX_hjpE';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Module 3.7 content - proper structure for sub-modules
const module37Content = {
  sections: [
    {
      title: "Inflasjon og reell rente",
      type: "content",
      content: `**La oss først se hva inflasjon betyr i praksis!**

Start med å utforske den interaktive kalkulatoren nedenfor. Legg spesielt merke til hvordan inflasjon påvirker kjøpekraften din over tid, selv når du får renter på sparepengene.

!component:inflation-real-rate

**Viktig begrepsavklaring**

I forrige modul (3.6) brukte vi begrepet "nominell rente" om den oppgitte renten før rentesammensetning. I denne modulen bruker vi "nominell rente" i en annen betydning:

• **Nominell rente (i denne modulen)**: Renten som inkluderer inflasjon - den viser endring i antall kroner
• **Reell rente**: Renten justert for inflasjon - den viser endring i kjøpekraft

Dette er standard begrepsbruk i økonomi når vi diskuterer inflasjon.

**Hva er egentlig inflasjon?**

Tenk deg at du går i butikken i dag og fyller handlekurven med varer for 1000 kroner. Inflasjon betyr at den samme kurven med varer vil koste mer enn 1000 kroner i fremtiden:

• Om 1 år med 2% inflasjon: 1020 kr
• Om 5 år med 2% inflasjon: 1104 kr  
• Om 10 år med 2% inflasjon: 1219 kr

Inflasjon er altså den generelle prisstigningen i økonomien over tid. Pengene dine mister gradvis kjøpekraft.

**Prisstigning på enkeltvarer vs. generell inflasjon**

Det er viktig å skille mellom:

1. **Prisstigning på enkeltvarer**: Bensinprisen kan gå opp 20% på grunn av økt oljepris
2. **Generell inflasjon**: Gjennomsnittlig prisstigning på alle varer og tjenester

Eksempel:
• Bensin: +20%
• Mat: +3%
• Klær: -5%
• Bolig: +8%
• Transport: +4%

Den generelle inflasjonen blir et vektet gjennomsnitt basert på hva folk faktisk bruker penger på.

**Konsumprisindeksen (KPI)**

Statistisk sentralbyrå (SSB) måler inflasjon gjennom konsumprisindeksen:

• En "handlekurv" med ca. 700 varer og tjenester
• Vektet etter norske husholdningers forbruksmønster
• Oppdateres månedlig
• Brukes til å justere lønn, pensjoner, og sosiale ytelser

Typisk vekting i KPI:
• Bolig og energi: 23%
• Transport: 16%
• Mat og drikke: 13%
• Kultur og fritid: 11%
• Klær og sko: 5%
• Øvrige varer: 32%

**Fisher-ligningen: Sammenhengen mellom nominell og reell rente**

Irving Fisher utledet sammenhengen mellom nominell rente, reell rente og inflasjon:

**(1 + nominell rente) = (1 + reell rente) × (1 + inflasjon)**

Dette kan skrives om til:

**Reell rente = [(1 + nominell rente) / (1 + inflasjon)] - 1**

For lave renter kan vi bruke tilnærmingen:

**Reell rente ≈ Nominell rente - Inflasjon**

**Eksempel på beregning**

La oss si du har:
• Nominell rente på sparekonto: 5%
• Inflasjon: 2%

Eksakt beregning:
Reell rente = (1,05 / 1,02) - 1 = 0,0294 = 2,94%

Tilnærming:
Reell rente ≈ 5% - 2% = 3%

Forskjellen er liten ved lave renter, men blir større ved høye renter eller inflasjon.

**Hvorfor er reell rente viktig?**

1. **For sparere**: Reell rente viser om sparingen din faktisk øker kjøpekraften
2. **For låntakere**: Negativ reell rente betyr at gjelden blir "billigere" over tid
3. **For investorer**: Alle investeringer må vurderes mot reell avkastning
4. **For samfunnet**: Sentralbanken bruker realrenten som styringsverktøy

**Historiske eksempler**

**1970-tallet - Høy inflasjon:**
• Nominell rente: 12%
• Inflasjon: 10%
• Reell rente: 1,8%

De som hadde fastrentelån tjente stort, mens sparere tapte kjøpekraft.

**2020-tallet - Lavrentetid:**
• Nominell rente: 1%
• Inflasjon: 3%
• Reell rente: -1,9%

Sparere taper kjøpekraft, mens låntakere tjener på negativ realrente.

**Inflasjonsjusterte (indekserte) produkter**

For å beskytte mot inflasjon finnes det finansielle produkter som:

1. **Inflasjonsjusterte obligasjoner**: Hovedstol og renter justeres med KPI
2. **Realrenteobligasjoner**: Gir en fast reell rente pluss inflasjon
3. **Indekserte lån**: Lånebeløpet justeres med inflasjon

**Praktiske implikasjoner**

**For privatpersoner:**
• Vurder alltid reell avkastning, ikke bare nominell
• I perioder med høy inflasjon: Vurder realaktiva (eiendom, aksjer)
• Ved låneopptak: Fastrentelån er gunstig hvis du forventer økt inflasjon

**For bedrifter:**
• Prissetting må ta hensyn til forventet inflasjon
• Langsiktige kontrakter bør ha indeksklausuler
• Investeringsbeslutninger må baseres på reelle størrelser

**🎯 Det viktigste å huske**

• Nominell rente = rente inkludert inflasjon (endring i kroner)
• Reell rente = rente justert for inflasjon (endring i kjøpekraft)
• Reell rente ≈ Nominell rente - Inflasjon (for lave renter)
• Inflasjon måles gjennom KPI (konsumprisindeksen)
• Positiv reell rente = økt kjøpekraft
• Negativ reell rente = tapt kjøpekraft

**Refleksjonsspørsmål:** I perioder med høy inflasjon sier folk ofte at "det lønner seg å ha gjeld". Kan du forklare hvorfor dette stemmer når vi ser på reell rente? Hvem er vinnere og tapere i et høyinflasjonsscenario?`
    }
  ]
};

async function addModule37() {
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

    // Check if sub-module 3.7 already exists
    const { data: existingSubModule, error: fetchError } = await supabase
      .from('sub_modules')
      .select('*')
      .eq('module_id', module3.id)
      .eq('order_index', 7)
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
          title: 'Inflasjon og reell rente',
          content: module37Content,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingSubModule.id);

      if (updateError) {
        console.error('Error updating sub-module 3.7:', updateError);
      } else {
        console.log('Successfully updated sub-module 3.7');
      }
    } else {
      // Create new sub-module
      const { error: insertError } = await supabase
        .from('sub_modules')
        .insert({
          module_id: module3.id,
          title: 'Inflasjon og reell rente',
          content: module37Content,
          order_index: 7,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });

      if (insertError) {
        console.error('Error creating sub-module 3.7:', insertError);
      } else {
        console.log('Successfully created sub-module 3.7');
      }
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

addModule37();