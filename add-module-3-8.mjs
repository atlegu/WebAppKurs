import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tqpryezzddufpovfbpld.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxcHJ5ZXp6ZGR1ZnBvdmZicGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NjA5MDksImV4cCI6MjA2NzAzNjkwOX0.TYmpggmCUr_7aNN_KKC5igvyT_QOWjFpa4_wlX_hjpE';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Module 3.8 content - proper structure for sub-modules
const module38Content = {
  sections: [
    {
      title: "Serielån vs. Annuitetslån",
      type: "content",
      content: `**La oss utforske forskjellen mellom serielån og annuitetslån!**

Bruk den interaktive kalkulatoren nedenfor til å sammenligne de to vanligste nedbetalingsformene for lån. Prøv å justere parametrene og se hvordan det påvirker betalingene og totalkostnadene.

!component:loan-comparison

**Hva er forskjellen?**

I modul 3.5 lærte du om annuitetslån - lån med like store betalinger gjennom hele låneperioden. Nå skal vi sammenligne dette med serielån og forstå når hver type passer best.

**Annuitetslån - repetisjon fra modul 3.5**

Som du husker fra tidligere:
• Like store betalinger hver måned/år
• Betalingen = Lånebeløp / Annuitetsfaktor
• Betalingen består av både renter og avdrag
• Rentedelen synker mens avdragsdelen øker over tid
• Total betaling forblir konstant

**Serielån - det nye konseptet**

Med serielån er det avdragene som er like store:
• Avdrag = Lånebeløp / Antall terminer
• Renter beregnes av gjenværende lån
• Total betaling = Fast avdrag + Synkende renter
• Betalingene blir mindre over tid

**Matematisk sammenligning**

La oss se på et eksempel med 1 million kr lån over 10 år til 5% rente:

**Annuitetslån:**
• Månedlig betaling: 10 607 kr (konstant)
• Total betalt: 1 272 792 kr
• Totale renter: 272 792 kr

**Serielån:**
• Første betaling: 12 500 kr (8 333 kr avdrag + 4 167 kr renter)
• Siste betaling: 8 368 kr (8 333 kr avdrag + 35 kr renter)
• Total betalt: 1 252 083 kr
• Totale renter: 252 083 kr

**Hvorfor er serielån "billigere"?**

Det er kritisk viktig å forstå at serielån ikke har lavere rente eller er iboende billigere. Forskjellen i totale rentekostnader kommer utelukkende av at du betaler ned lånet raskere:

1. Med serielån betaler du mer i starten
2. Dette reduserer lånebalansen raskere
3. Lavere lånebalanse gir lavere renter
4. Totalt betaler du mindre renter

**Det samme prinsippet gjelder hvis du:**
• Betaler ned halve lånet med en gang
• Gjør ekstra innbetalinger på annuitetslånet
• Velger kortere nedbetalingstid

**Fordeler og ulemper**

**Annuitetslån:**
✓ Forutsigbar økonomi - samme betaling hver måned
✓ Lettere å budsjettere
✓ Lavere belastning i starten
✓ Passer hvis du forventer økende inntekt

✗ Høyere totale rentekostnader
✗ Tregere nedbetaling i starten
✗ Mer følsom for renteendringer tidlig

**Serielån:**
✓ Lavere totale rentekostnader
✓ Raskere nedbetaling
✓ Synkende belastning over tid
✓ Passer hvis du har god økonomi nå

✗ Høyere betalinger i starten
✗ Vanskeligere å budsjettere (varierende betalinger)
✗ Kan være tøft de første årene

**Hvem bør velge hva?**

**Velg annuitetslån hvis:**
• Du er ung med forventning om karriereutvikling
• Du har stram økonomi de første årene
• Du verdsetter forutsigbarhet høyt
• Du kjøper din første bolig

**Velg serielån hvis:**
• Du har god økonomi nå
• Du nærmer deg pensjon (vil ha lav gjeld som pensjonist)
• Du ønsker å minimere rentekostnader
• Du har fleksibilitet i budsjettet

**Praktisk eksempel: Boligkjøp**

La oss si du skal låne 3 millioner til boligkjøp:
• Rente: 4,5%
• Nedbetalingstid: 25 år

**Med annuitetslån:**
• Månedlig betaling: 16 695 kr
• Årlig betaling år 1: 200 340 kr
• Årlig betaling år 25: 200 340 kr

**Med serielån:**
• Månedlig betaling år 1: 21 250 kr
• Årlig betaling år 1: 255 000 kr
• Månedlig betaling år 25: 10 188 kr
• Årlig betaling år 25: 122 250 kr

**Kombinasjonsstrategier**

Mange banker tilbyr også:

1. **Delvis serielån**: F.eks. 50% serie og 50% annuitet
2. **Annuitetslån med ekstra nedbetaling**: Fleksibilitet til å betale ekstra
3. **Trappelån**: Økende betalinger over tid

**Rentefølsomhet**

Et viktig poeng er at serielån er mindre følsomt for renteøkninger over tid:
• Ved renteøkning påvirkes kun gjenværende lån
• Serielån har lavere gjenværende lån enn annuitetslån
• Derfor blir renteøkningen mindre belastende

**Skatteeffekter**

I Norge gir gjeldsrenter skattefradrag (22% av rentene). Dette påvirker:
• Effektiv rente blir lavere
• Fordelen med serielån reduseres noe
• Men hovedprinsippene forblir de samme

**Oppsummering**

• Serielån og annuitetslån har samme rente
• Forskjellen ligger i nedbetalingsprofilen
• Serielån gir lavere totale renter fordi du betaler raskere
• Valget avhenger av din økonomiske situasjon og preferanser
• Du kan alltid betale ekstra på annuitetslån for samme effekt

**🎯 Det viktigste å huske**

• Annuitetslån: Like betalinger, forutsigbart
• Serielån: Like avdrag, synkende betalinger
• Ingen er "billigere" - forskjellen er når du betaler
• Vurder din egen økonomi nå og fremover
• Fleksibilitet kan være vel så viktig som totalkostnad

**Refleksjonsspørsmål:** Mange unge velger annuitetslån fordi de har lavere inntekt i starten av karrieren. Men hva skjer hvis renten stiger kraftig de første årene? Hvilken lånetype er mest sårbar for tidlige renteøkninger, og hvorfor?`
    }
  ]
};

async function addModule38() {
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

    // Check if sub-module 3.8 already exists
    const { data: existingSubModule, error: fetchError } = await supabase
      .from('sub_modules')
      .select('*')
      .eq('module_id', module3.id)
      .eq('order_index', 8)
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
          title: 'Serielån vs. Annuitetslån',
          content: module38Content,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingSubModule.id);

      if (updateError) {
        console.error('Error updating sub-module 3.8:', updateError);
      } else {
        console.log('Successfully updated sub-module 3.8');
      }
    } else {
      // Create new sub-module
      const { error: insertError } = await supabase
        .from('sub_modules')
        .insert({
          module_id: module3.id,
          title: 'Serielån vs. Annuitetslån',
          content: module38Content,
          order_index: 8,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });

      if (insertError) {
        console.error('Error creating sub-module 3.8:', insertError);
      } else {
        console.log('Successfully created sub-module 3.8');
      }
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

addModule38();