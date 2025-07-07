import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tqpryezzddufpovfbpld.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxcHJ5ZXp6ZGR1ZnBvdmZicGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NjA5MDksImV4cCI6MjA2NzAzNjkwOX0.TYmpggmCUr_7aNN_KKC5igvyT_QOWjFpa4_wlX_hjpE';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Module 3.6 content - proper structure for sub-modules
const module36Content = {
  sections: [
    {
      title: "Renteperioder og effektiv rente",
      type: "content",
      content: `**La oss utforske forskjellen mellom nominell og effektiv rente!**

Start med å eksperimentere med kalkulatoren nedenfor. Legg spesielt merke til hvordan hyppigere renteberegning gir høyere effektiv rente.

!component:effective-rate

**Hvorfor er dette viktig?**

Når vi sammenligner renter og investeringer, er det ikke alltid åpenbart hvilken som er best. En rente på 10% per år høres ut som det samme uansett, men det kommer helt an på hvordan renten beregnes!

La oss se på et konkret eksempel:
• Alternativ A: 10% rente per år, beregnet årlig
• Alternativ B: 10% rente per år, beregnet halvårlig

Hvis du investerer 1 kr:
• Alternativ A: 1 kr × 1,10 = 1,10 kr etter ett år
• Alternativ B: 1 kr × 1,05 × 1,05 = 1,1025 kr etter ett år

Forskjellen på 0,0025 kr virker liten, men på større beløp og over tid blir dette betydelig!

**Nominell vs. effektiv rente**

• **Nominell rente** (også kalt oppgitt eller kvotert rente): Den renten som oppgis, f.eks. "10% per år"
• **Effektiv årlig rente (EAR)**: Den faktiske årlige avkastningen når vi tar hensyn til rentesammensetning

**Perioderente**

Når renten beregnes flere ganger per år, må vi først finne perioderenten:

Perioderente = Nominell årlig rente / Antall perioder per år

For eksempel:
• 12% nominell rente med månedlig beregning: 12% / 12 = 1% per måned
• 8% nominell rente med kvartalsvis beregning: 8% / 4 = 2% per kvartal

**Formelen for effektiv årlig rente**

For diskret rentesammensetning (årlig, månedlig, daglig osv.):

**EAR = (1 + r/n)^n - 1**

hvor:
• r = nominell årlig rente
• n = antall renteperioder per år

For kontinuerlig rentesammensetning:

**EAR = e^r - 1**

hvor e ≈ 2,71828 (Eulers tall)

**Eksempler fra virkeligheten**

**1. Kredittkort**
Mange kredittkort oppgir en månedlig rente på 2%. Hva er den effektive årlige renten?
• Nominell årlig: 2% × 12 = 24%
• Effektiv årlig: (1,02)^12 - 1 = 26,82%

**2. Sparekonto med daglig renteberegning**
En sparekonto tilbyr 3% årlig rente med daglig kapitalisering:
• EAR = (1 + 0,03/365)^365 - 1 = 3,045%

**3. Boliglån**
Norske boliglån beregner ofte rente kvartalsvis, selv om de oppgir årlig rente. Et lån med 4% nominell rente:
• EAR = (1 + 0,04/4)^4 - 1 = 4,06%

**APR vs. EAR**

I USA brukes ofte APR (Annual Percentage Rate), som er nominell rente. I Norge må långivere oppgi effektiv rente, som inkluderer både rentesammensetning og gebyrer.

**Konvertering mellom perioder**

Noen ganger trenger vi å konvertere mellom ulike perioder. For eksempel:

Fra årlig til månedlig:
Månedlig rente = (1 + årlig rente)^(1/12) - 1

Fra månedlig til årlig:
Årlig rente = (1 + månedlig rente)^12 - 1

**Oppgaveeksempel: Avbetalingsordning**

La oss løse oppgaven du nevnte:

"I stedet for å betale kr 10.000 kontant, kan du slå til på en avbetalingsordning som innebærer at du betaler kr 2.500 kontant og resten i form av 12 månedlige beløp, første gang om en måned. Du har regnet deg frem til at den årlige effektive renten knyttet til avbetalingsordningen er 60,1%. Hvor stort er det månedlige beløpet?"

**Løsning:**
1. Restbeløp å finansiere: 10.000 - 2.500 = 7.500 kr
2. Årlig effektiv rente: 60,1%
3. Månedlig rente: (1,601)^(1/12) - 1 = 0,04 = 4%
4. Bruk annuitetsformelen: Månedlig betaling = 7.500 / AF(4%, 12)
5. AF(4%, 12) = [1/0,04 - 1/(0,04 × 1,04^12)] = 9,385
6. Månedlig betaling = 7.500 / 9,385 = 799,15 kr

**Praktiske tips**

• **For sparere**: Velg kontoer med hyppigst mulig renteberegning
• **For låntakere**: Vær oppmerksom på den effektive renten, ikke bare den nominelle
• **Ved sammenligning**: Konverter alltid til effektiv årlig rente
• **Forsiktig med gebyrer**: Effektiv rente inkluderer ofte gebyrer i tillegg til renten

**🎯 Det viktigste å huske**

• Nominell rente ≠ Effektiv rente når det er rentesammensetning
• Jo oftere renten beregnes, desto høyere effektiv rente
• Effektiv årlig rente (EAR) = (1 + r/n)^n - 1
• Alltid sammenlign effektive renter, ikke nominelle
• Små forskjeller i rente blir store over tid

**Refleksjonsspørsmål:** Hvorfor tror du forbrukslån og kredittkort ofte oppgir månedlig rente i stedet for årlig effektiv rente? Hvordan påvirker dette forbrukernes oppfatning av kostnadene?`
    }
  ]
};

async function addModule36() {
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

    // Check if sub-module 3.6 already exists
    const { data: existingSubModule, error: fetchError } = await supabase
      .from('sub_modules')
      .select('*')
      .eq('module_id', module3.id)
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
          title: 'Renteperioder og effektiv rente',
          content: module36Content,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingSubModule.id);

      if (updateError) {
        console.error('Error updating sub-module 3.6:', updateError);
      } else {
        console.log('Successfully updated sub-module 3.6');
      }
    } else {
      // Create new sub-module
      const { error: insertError } = await supabase
        .from('sub_modules')
        .insert({
          module_id: module3.id,
          title: 'Renteperioder og effektiv rente',
          content: module36Content,
          order_index: 6,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });

      if (insertError) {
        console.error('Error creating sub-module 3.6:', insertError);
      } else {
        console.log('Successfully created sub-module 3.6');
      }
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

addModule36();