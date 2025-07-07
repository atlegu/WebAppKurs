import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tqpryezzddufpovfbpld.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxcHJ5ZXp6ZGR1ZnBvdmZicGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NjA5MDksImV4cCI6MjA2NzAzNjkwOX0.TYmpggmCUr_7aNN_KKC5igvyT_QOWjFpa4_wlX_hjpE';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Module 3.5 content
const module35Content = {
  title: '3.5 Annuitet',
  sections: [
    {
      type: 'introduction',
      content: `**La oss først utforske annuiteter gjennom interaksjon!**

Prøv å justere parametrene i visualiseringen nedenfor for å se hvordan annuiteter fungerer. Legg spesielt merke til hvordan vi kan utlede annuitetsformelen fra to perpetuiteter.

!component:annuity`
    },
    {
      type: 'text',
      content: `**Hva er en annuitet?**

En annuitet er en serie med like betalinger som skjer med jevne mellomrom over en begrenset tidsperiode. Eksempler på annuiteter i hverdagen:

• Billån med faste månedlige avdrag
• Boliglån med fast rente og avdrag
• Pensjonssparing med årlige innbetalinger
• Livsforsikring med faste premier
• Leieavtaler med like betalinger

Annuiteter er grunnleggende byggeklosser i finans fordi svært mange finansielle produkter og avtaler innebærer like, periodiske betalinger.`
    },
    {
      type: 'text',
      content: `**Utledning av annuitetsformelen**

I stedet for å summere alle betalingene (som kan bli tungvint med mange perioder), bruker vi et elegant triks:

**Steg 1: Se på en perpetuitet som starter i år 1**
Nåverdien av denne perpetuiteten er: PV₁ = C/r

**Steg 2: Se på en perpetuitet som starter i år n+1**
Denne perpetuiteten har verdi C/r i år n, så nåverdien i dag er:
PV₂ = (C/r) / (1+r)ⁿ

**Steg 3: Annuiteten = Perpetuitet 1 - Perpetuitet 2**
En annuitet med n betalinger er akkurat forskjellen mellom disse to perpetuitetene!

PV(annuitet) = PV₁ - PV₂ = C/r - (C/r)/(1+r)ⁿ

Dette kan skrives om til:
**PV = C × [1/r - 1/(r(1+r)ⁿ)]**`
    },
    {
      type: 'text',
      content: `**Annuitetsfaktoren**

Uttrykket i klammeparentesen kalles annuitetsfaktoren (AF):

AF = 1/r - 1/(r(1+r)ⁿ)

Annuitetsfaktoren forteller oss hvor mange "års betalinger" annuiteten er verdt, justert for tidsverdien av penger.

**Intuisjon:** 
• Hvis r = 0 (ingen rente), blir AF = n (antall perioder)
• Jo høyere rente, desto lavere AF (fremtidige betalinger blir mindre verdt)
• Jo flere perioder, desto nærmere kommer AF til 1/r (perpetuitetsverdien)`
    },
    {
      type: 'text',
      content: `**Sluttverdi av annuitet**

Mens nåverdien diskonterer alle betalinger til i dag, beregner sluttverdien hva alle betalingene vil være verdt på slutten av perioden:

**FV = C × [(1+r)ⁿ - 1]/r**

Dette er nyttig når vi vil vite:
• Hvor mye vi har spart opp ved pensjonsalder
• Verdien av et investeringsprogram
• Akkumulert formue fra regelmessig sparing`
    },
    {
      type: 'text',
      content: `**Praktiske anvendelser**

**1. Beregne lånebetalinger**
Hvis du låner 500 000 kr til 4% rente over 20 år:
Årlig betaling = 500 000 / AF(4%, 20 år)

**2. Pensjonssparing**
Hvis du sparer 50 000 kr årlig i 30 år med 7% avkastning:
Sluttverdi = 50 000 × [(1.07³⁰ - 1)/0.07]

**3. Verdsetting av leieinntekter**
Et utleielokale gir 100 000 kr/år i 10 år, diskonteringsrente 6%:
Nåverdi = 100 000 × AF(6%, 10 år)`
    },
    {
      type: 'text',
      content: `**Forskjellen mellom annuitet og perpetuitet**

| Egenskap | Annuitet | Perpetuitet |
|----------|----------|-------------|
| Varighet | Begrenset (n perioder) | Uendelig |
| Formel | PV = C × AF | PV = C/r |
| Når n→∞ | AF → 1/r | Konstant = 1/r |
| Eksempel | Billån | Preferanseaksje |`
    },
    {
      type: 'text',
      content: `**Annuitet med vekst**

Hvis betalingene vokser med en fast rate g:
**PV = C × [1/(r-g) - 1/((r-g)(1+r)ⁿ)]**

Dette brukes når:
• Leieinntekter justeres for inflasjon
• Lønn/pensjon øker over tid
• Driftskostnader vokser med en fast rate`
    },
    {
      type: 'text',
      content: `**🎯 Det viktigste å huske**

• En annuitet er like betalinger over begrenset tid
• Kan utledes elegant fra to perpetuiteter
• Annuitetsfaktoren AF = 1/r - 1/(r(1+r)ⁿ)
• Nåverdi: PV = C × AF
• Sluttverdi: FV = C × [(1+r)ⁿ - 1]/r
• Brukes i lån, sparing, investeringer og verdsetting`
    },
    {
      type: 'reflection',
      content: `**Refleksjonsspørsmål:** Hvorfor tror du banker foretrekker annuitetslån fremfor serielån? Tenk på hvordan betalingene fordeler seg over tid og hvilken part som bærer renterisikoen.`
    }
  ]
};

async function updateModule35() {
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

    // Check if sub-module 3.5 already exists
    const { data: existingSubModule, error: fetchError } = await supabase
      .from('sub_modules')
      .select('*')
      .eq('module_id', module3.id)
      .eq('order_index', 5)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      console.error('Error fetching sub-module:', fetchError);
      return;
    }

    const contentString = JSON.stringify(module35Content);

    if (existingSubModule) {
      // Update existing sub-module
      const { error: updateError } = await supabase
        .from('sub_modules')
        .update({ 
          title: 'Annuitet',
          content: contentString,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingSubModule.id);

      if (updateError) {
        console.error('Error updating sub-module 3.5:', updateError);
      } else {
        console.log('Successfully updated sub-module 3.5');
      }
    } else {
      // Create new sub-module
      const { error: insertError } = await supabase
        .from('sub_modules')
        .insert({
          module_id: module3.id,
          title: 'Annuitet',
          content: contentString,
          order_index: 5,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });

      if (insertError) {
        console.error('Error creating sub-module 3.5:', insertError);
      } else {
        console.log('Successfully created sub-module 3.5');
      }
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

updateModule35();