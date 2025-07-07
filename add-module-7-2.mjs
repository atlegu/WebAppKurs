import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tqpryezzddufpovfbpld.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxcHJ5ZXp6ZGR1ZnBvdmZicGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NjA5MDksImV4cCI6MjA2NzAzNjkwOX0.TYmpggmCUr_7aNN_KKC5igvyT_QOWjFpa4_wlX_hjpE';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Module 7.2 content
const module72Content = {
  sections: [
    {
      title: "Kontantstrømmer - Hva teller?",
      type: "content",
      content: `**Grunnlaget for all investeringsanalyse**

Den viktigste jobben i investeringsanalyse er å identifisere de riktige kontantstrømmene. Gjør du feil her, blir hele analysen feil - uansett hvor sofistikerte beregninger du gjør etterpå.

!component:cash-flow-identifier

**Hva er en kontantstrøm?**

En kontantstrøm er ganske enkelt penger som går inn eller ut av bedriften. Det høres banalt ut, men det er overraskende lett å gjøre feil. La oss starte med hovedregelen:

**Hovedregelen: Følg pengene!**
Hvis investeringen fører til at bedriften mottar eller betaler penger, er det en relevant kontantstrøm. Hvis ikke, er det ikke relevant for investeringsanalysen.

**De fem kategoriene av kontantstrømmer**

**1. Investeringskostnader**
Dette er vanligvis den største utbetalingen og kommer ofte i starten:
• Kjøp av maskiner, utstyr eller bygninger
• Installasjon og oppstartskostnader
• Opplæring av ansatte
• Konsulentbistand for implementering

**2. Driftskontantstrømmer**
De løpende inn- og utbetalingene fra prosjektet:
• Salgsinntekter (kontante eller når kunden betaler)
• Råvarekostnader
• Lønnskostnader
• Andre driftskostnader (strøm, vedlikehold, etc.)

**3. Skatteeffekter**
Skatt er en reell utbetaling som må beregnes riktig:
• Skatt på overskudd fra prosjektet
• Skattefordel av avskrivninger (selv om avskrivninger ikke er kontantstrøm)
• Eventuell utsatt skatt

**4. Arbeidskapitalendringer**
Ofte oversett, men kritisk viktig:
• Økt behov for varelager
• Økte kundefordringer (kunder betaler senere)
• Økt leverandørgjeld (vi betaler senere)
• Frigjøring av arbeidskapital ved prosjektslutt

**5. Restverdi/Salgsverdi**
Hva skjer på slutten av prosjektet?
• Salgsverdi av utstyr
• Skatt på gevinst/tap ved salg
• Oppryddingskostnader
• Frigjort arbeidskapital

**Den kritiske skatteberegningen**

Mange blir forvirret av forholdet mellom avskrivninger og kontantstrøm. La oss klargjøre:

**Avskrivninger er IKKE en kontantstrøm!**
Men de påvirker skatten, som ER en kontantstrøm.

Eksempel:
\`\`\`
Salgsinntekter:           1 000 000 kr  (kontantstrøm inn)
- Driftskostnader:          400 000 kr  (kontantstrøm ut)
= Kontantstrøm før skatt:   600 000 kr

For skatteberegning:
Kontantstrøm før skatt:     600 000 kr
- Avskrivninger:            200 000 kr  (ikke kontantstrøm!)
= Skattbart overskudd:      400 000 kr
× Skattesats (22%):          88 000 kr  (kontantstrøm ut)

Netto kontantstrøm:         512 000 kr
\`\`\`

**Vanlige fallgruver - "Spot the pitfall"**

**1. Sunk Costs - Den klassiske feilen**
"Vi har allerede brukt 2 millioner på markedsundersøkelser, så vi må gjennomføre prosjektet!"

NEI! Sunk costs er irrelevante. De er allerede betalt og kan ikke påvirkes av beslutningen.

**2. Finansieringskostnader - Hold dem utenfor**
Renter og avdrag på lån skal IKKE inkluderes. Hvorfor? Fordi finansieringen håndteres gjennom avkastningskravet (diskonteringsrenten).

**3. Allokerte felleskostnader - Vær forsiktig**
"Prosjektet må bære sin del av konsernets administrasjonskostnader."

Spørsmålet er: Øker de faktiske kostnadene? Hvis ikke, skal de ikke med.

**4. Alternativkostnader - Glem dem ikke**
Hvis du bruker en bygning til prosjektet som alternativt kunne vært leid ut for 100 000 kr/måned, er dette en reell kostnad som må inkluderes.

**5. Bokførte vs. faktiske kostnader**
Regnskapet kan vise kostnader som ikke er kontantstrømmer:
• Avsetninger
• Nedskrivninger  
• Periodiseringer

Ignorer disse - følg pengene!

**Arbeidskapital - Den ofte glemte komponenten**

Når aktiviteten øker, bindes ofte mer kapital:

**Typisk eksempel:**
• Økt salg → Flere kundefordringer (de betaler om 30 dager)
• Økt produksjon → Større varelager
• Økt innkjøp → Mer leverandørgjeld (vi betaler om 30 dager)

**Netto økning i arbeidskapital = Kontantstrøm ut**

Husk: Arbeidskapitalen frigjøres vanligvis ved prosjektslutt!

**Praktisk fremgangsmåte**

**Steg 1: List alle inn- og utbetalinger**
Start bredt - list alt du kan tenke på.

**Steg 2: Filtrer med spørsmålet**
"Fører dette til at penger går inn eller ut?" Hvis nei, stryk det.

**Steg 3: Plasser i tidslinje**
Når skjer betalingen? År 0, 1, 2...?

**Steg 4: Beregn skatteeffekter**
Husk at avskrivninger påvirker skatten.

**Steg 5: Dobbeltsjekk for vanlige feil**
Har du med sunk costs? Finansiering? Glemte du arbeidskapital?

**Eksempel: Ny produksjonslinje**

La oss se på et komplett eksempel:

**År 0:**
• Kjøp av utstyr: -5 000 000 kr
• Installasjon: -500 000 kr
• Økt arbeidskapital: -800 000 kr
• **Total: -6 300 000 kr**

**År 1-10:**
• Økte salgsinntekter: +2 500 000 kr
• Økte driftskostnader: -1 200 000 kr
• Avskrivninger: -550 000 kr (for skatteberegning)
• Skatt (22% av 750 000): -165 000 kr
• **Årlig kontantstrøm: +1 135 000 kr**

**År 10 (i tillegg):**
• Salg av utstyr: +500 000 kr
• Skatt på gevinst: -110 000 kr
• Frigjort arbeidskapital: +800 000 kr
• **Ekstra i år 10: +1 190 000 kr**

**Oppsummering - Huskeliste**

✅ **Ta med:**
- Alle faktiske inn- og utbetalinger
- Skatteeffekter (inkl. effekt av avskrivninger)
- Arbeidskapitalendringer
- Alternativkostnader
- Restverdi

❌ **Ikke ta med:**
- Sunk costs
- Finansieringskostnader
- Kun regnskapsmessige poster
- Allokerte kostnader (hvis de ikke øker)
- Ikke-kontante poster

**Neste steg**

Når du har identifisert alle relevante kontantstrømmer og plassert dem i en tidslinje, er du klar for neste steg: Å beregne nåverdien av disse kontantstrømmene. Det er tema for neste del!

**🎯 Husk alltid: Følg pengene! Hvis det ikke er en faktisk inn- eller utbetaling, hører det ikke hjemme i investeringsanalysen.**

**Refleksjonsspørsmål:** Mange bedrifter glemmer å ta med arbeidskapitalendringer i sine investeringsanalyser. Hvorfor tror du dette skjer så ofte, og hva kan konsekvensene være av å glemme det?`
    }
  ]
};

async function addModule72() {
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

    // Check if sub-module 7.2 already exists
    const { data: existingSubModule, error: fetchError } = await supabase
      .from('sub_modules')
      .select('*')
      .eq('module_id', module7.id)
      .eq('order_index', 2)
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
          title: 'Kontantstrømmer - Hva teller?',
          content: module72Content,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingSubModule.id);

      if (updateError) {
        console.error('Error updating sub-module 7.2:', updateError);
      } else {
        console.log('Successfully updated sub-module 7.2');
      }
    } else {
      // Create new sub-module
      const { error: insertError } = await supabase
        .from('sub_modules')
        .insert({
          module_id: module7.id,
          title: 'Kontantstrømmer - Hva teller?',
          content: module72Content,
          order_index: 2,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });

      if (insertError) {
        console.error('Error creating sub-module 7.2:', insertError);
      } else {
        console.log('Successfully created sub-module 7.2');
      }
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

addModule72();