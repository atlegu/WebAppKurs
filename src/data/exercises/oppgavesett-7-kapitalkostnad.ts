import { ExerciseSet } from '../../types/course';

// Kilde: BUS220 høst 2026 – Oppgavesett7_Kapitalkostnad_2026.html + fasit (samme sett som i klasseromskurset).
export const oppgavesett7Kapitalkostnad: ExerciseSet = {
  id: "oppgavesett-7-kapitalkostnad",
  moduleId: "modul-8-kapitalkostnad",
  title: "Oppgavesett 7: Kapitalkostnad og WACC",
  description: "Pensum: HRWJ kapittel 12",
  exercises: [
    {
      id: "os7-1",
      number: 1,
      difficulty: "easy",
      problemText: `Egenkapitalbetaen til selskapet Skog AS er 1,3. Risikofri rente er 3 % og markedets risikopremie er 6 %.

Bruk CAPM til å beregne selskapets egenkapitalkostnad ($r_E$).`,
      solution: `$$r_E = r_f + \\beta \\times [E(R_m) - r_f] = 3\\,\\% + 1{,}3 \\times 6\\,\\%$$
$$= 3\\,\\% + 7{,}8\\,\\%$$

**Svar:** $$= 10{,}8\\,\\%$$`
    },
    {
      id: "os7-2",
      number: 2,
      difficulty: "easy",
      problemText: `Aksjen i Mar ASA omsettes for kr 80. Forventet utbytte om ett år er kr 4, og utbyttet forventes å vokse med 5 % per år i all evighet.

Bruk utbyttemodellen (Gordons modell) til å beregne selskapets egenkapitalkostnad.`,
      solution: `Gordons modell omarrangert:

$$P_0 = \\frac{D_1}{r_E - g} \\implies r_E = \\frac{D_1}{P_0} + g$$
$$r_E = \\frac{4}{80} + 0{,}05 = 0{,}05 + 0{,}05$$

**Svar:** $$= 10\\,\\%$$`
    },
    {
      id: "os7-3",
      number: 3,
      difficulty: "medium",
      problemText: `For Sjø AS har du følgende opplysninger:

• Aksjekurs: kr 50
• Forventet utbytte neste år: kr 2,50
• Forventet konstant vekst i utbyttet: 4 %
• Beta: 1,1
• Risikofri rente: 3 %
• Markedets risikopremie: 6 %`,
      subParts: [
        { label: "a", text: `Beregn egenkapitalkostnaden ved bruk av både CAPM og utbyttemodellen.`, solution: `**CAPM:**

$$r_E = 3\\,\\% + 1{,}1 \\times 6\\,\\% = 3\\,\\% + 6{,}6\\,\\%$$

**Svar:** $$= 9{,}6\\,\\%$$

**Utbyttemodellen:**

$$r_E = \\frac{D_1}{P_0} + g = \\frac{2{,}50}{50} + 0{,}04 = 0{,}05 + 0{,}04$$

**Svar:** $$= 9{,}0\\,\\%$$` },
        { label: "b", text: `Du får to ulike svar. Forklar mulige årsaker til avviket og diskuter kort hvilken metode du ville foretrukket.`, solution: `De to metodene måler det samme — investorers krav til avkastning på egenkapital — men bygger på ulike forutsetninger:

• **CAPM** bruker historisk beta og en markedspremie. Avhenger av at beta er stabil og at markedspremien er korrekt estimert.
• **Utbyttemodellen** bruker dagens aksjekurs og en antatt evig konstant vekstrate. Avhenger sterkt av $g$ — små endringer gir store utslag i $r_E$.

Avviket kan skyldes feilestimat av beta, markedspremien, eller forventet vekst — eller at aksjen er feilpriset i markedet (CAPM gir likevektskravet, mens utbyttemodellen reflekterer faktisk markedspris).

I praksis foretrekker mange CAPM fordi den er teoretisk konsistent og lar seg bruke også for selskaper uten stabilt utbytte. Et godt valg er ofte å beregne begge og rapportere et gjennomsnitt eller et intervall.` },
      ],
      solution: ``
    },
    {
      id: "os7-4",
      number: 4,
      difficulty: "easy",
      problemText: `Et selskap har utstedt obligasjoner med en effektiv rente (YTM) før skatt på 6 %. Selskapets skattesats er 22 %.`,
      subParts: [
        { label: "a", text: `Beregn gjeldens kostnad etter skatt.`, solution: `$$r_D^{etter} = r_D^{før} \\times (1 - t) = 6\\,\\% \\times (1 - 0{,}22) = 6\\,\\% \\times 0{,}78$$

**Svar:** $$= 4{,}68\\,\\%$$` },
        { label: "b", text: `Forklar kort hvorfor det er kostnaden etter skatt som er relevant i WACC-beregningen.`, solution: `Rentekostnader er fradragsberettiget i selskapsskatten. Selskapets faktiske finansieringskostnad reduseres derfor med skattefradragets verdi ($t \\times r_D$).

Eksempel: For hver krone rente betaler selskapet 0,78 kr netto (etter at staten har «refundert» 0,22 kr gjennom redusert skatt). Det er denne reelle, økonomiske kostnaden — ikke den bokførte renten — som er relevant når vi diskonterer kontantstrømmer etter skatt i NPV-analyser.` },
      ],
      solution: ``
    },
    {
      id: "os7-5",
      number: 5,
      difficulty: "medium",
      problemText: `Selskapet Ås Industri har følgende kapitalstruktur (markedsverdier):

Selskapets skattesats er 22 %. Beregn selskapets WACC.`,
      tables: [{"headers":["","Markedsverdi","Kostnad"],"rows":[["Egenkapital","70 mill. kr","$r_E = 12\\,\\%$"],["Gjeld","30 mill. kr","$r_D = 5\\,\\%$ (før skatt)"]]}],
      solution: `$V = E + D = 100$, så $w_E = 0{,}70$ og $w_D = 0{,}30$.

$$\\text{WACC} = \\frac{E}{V} r_E + \\frac{D}{V} r_D (1 - t)$$
$$= 0{,}70 \\times 12\\,\\% + 0{,}30 \\times 5\\,\\% \\times 0{,}78$$
$$= 8{,}40\\,\\% + 1{,}17\\,\\%$$

**Svar:** $$= 9{,}57\\,\\%$$`
    },
    {
      id: "os7-6",
      number: 6,
      difficulty: "medium",
      problemText: `Et selskap finansieres med 50 % egenkapital, 10 % preferanseaksjer og 40 % gjeld (alle til markedsverdi). Kapitalkostnader:

• $r_E = 13\\,\\%$
• $r_P = 8\\,\\%$
• $r_D = 5\\,\\%$ (før skatt)

Skattesats er 22 %. Beregn WACC.`,
      solution: `Med preferanseaksjer utvides WACC-formelen:

$$\\text{WACC} = w_E r_E + w_P r_P + w_D r_D (1 - t)$$
$$= 0{,}50 \\times 13\\,\\% + 0{,}10 \\times 8\\,\\% + 0{,}40 \\times 5\\,\\% \\times 0{,}78$$
$$= 6{,}50\\,\\% + 0{,}80\\,\\% + 1{,}56\\,\\%$$

**Svar:** $$= 8{,}86\\,\\%$$

Merk: preferanseaksjeutbytte er normalt ikke skattefradragsberettiget, så her brukes $r_P$ direkte uten skattejustering.`
    },
    {
      id: "os7-7",
      number: 7,
      difficulty: "medium",
      problemText: `Selskapet Tre AS har følgende kapitalstruktur (markedsverdier i mill. kr):

• Egenkapital: 700 ($r_E = 11\\,\\%$)
• Obligasjonslån A: 200 (YTM = 4 %)
• Obligasjonslån B: 100 (YTM = 6 %)

Skattesats er 22 %. Beregn:`,
      subParts: [
        { label: "a", text: `Selskapets vektede gjennomsnittlige gjeldskostnad (før skatt).`, solution: `Totalt gjeld: $D = 200 + 100 = 300$.

$$r_D = \\frac{200}{300} \\times 4\\,\\% + \\frac{100}{300} \\times 6\\,\\% = \\frac{8 + 6}{300}$$

**Svar:** $$= 4{,}67\\,\\%$$` },
        { label: "b", text: `Selskapets WACC.`, solution: `$V = E + D = 700 + 300 = 1000$, så $w_E = 0{,}70$, $w_D = 0{,}30$.

$$\\text{WACC} = 0{,}70 \\times 11\\,\\% + 0{,}30 \\times 4{,}67\\,\\% \\times 0{,}78$$
$$= 7{,}70\\,\\% + 1{,}09\\,\\%$$

**Svar:** $$= 8{,}79\\,\\%$$` },
      ],
      solution: ``
    },
    {
      id: "os7-8",
      number: 8,
      difficulty: "medium",
      problemText: `Et selskap med WACC = 9 % vurderer å investere 50 mill. kr i et prosjekt som vil gi en netto kontantstrøm på 10 mill. kr per år i åtte år. Prosjektet har samme risikoprofil som selskapets eksisterende virksomhet.`,
      subParts: [
        { label: "a", text: `Beregn prosjektets NPV ved å bruke WACC som diskonteringsrente.`, solution: `$$\\text{AF}(9\\,\\%;\\, 8) = \\frac{1 - 1{,}09^{-8}}{0{,}09} = 5{,}5348$$
$$\\text{NPV} = -50 + 10 \\times 5{,}5348 = -50 + 55{,}348$$

**Svar:** $$= 5{,}35 \\text{ mill. kr}$$` },
        { label: "b", text: `Beregn prosjektets IRR.`, solution: `IRR er det avkastningskravet som gir NPV = 0:

$$10 \\times \\text{AF}(\\text{IRR};\\, 8) = 50 \\implies \\text{AF}(\\text{IRR};\\, 8) = 5$$

Ved tabelloppslag eller iterasjon:

• $r = 11\\,\\%$: $\\text{AF} = 5{,}146$
• $r = 12\\,\\%$: $\\text{AF} = 4{,}968$

Lineær interpolasjon: $r \\approx 11 + \\frac{5{,}146 - 5}{5{,}146 - 4{,}968} = 11 + 0{,}82$

**Svar:** $$\\text{IRR} \\approx 11{,}81\\,\\%$$` },
        { label: "c", text: `Bør prosjektet gjennomføres? Begrunn svaret.`, solution: `NPV er positiv (5,35 mill.) og IRR (11,81 %) overstiger WACC (9 %).

**Svar:** Begge kriterier sier: gjennomfør prosjektet.` },
      ],
      solution: ``
    },
    {
      id: "os7-9",
      number: 9,
      difficulty: "hard",
      problemText: `Selskapet Berg AS, som driver innen industri, vurderer å investere i et nytt prosjekt i helt annen bransje (bioteknologi). Selskapets eksisterende WACC er 9 %.

Du har funnet tre sammenlignbare bioteknologiselskaper med beta-verdier 1,3, 1,5 og 1,7. Risikofri rente er 3 % og markedets risikopremie er 6 %.`,
      subParts: [
        { label: "a", text: `Hvorfor er Berg AS' eksisterende WACC ikke riktig diskonteringsrente for dette prosjektet?`, solution: `WACC reflekterer risikoen i selskapets eksisterende virksomhet — industri. Et bioteknologiprosjekt har en helt annen risikoprofil (typisk høyere systematisk risiko og høyere usystematisk risiko, herunder regulatoriske og teknologiske utfordringer).

Bruker man selskapets WACC til å diskontere bioteknologiprosjektet, vil man:

• Undervurdere risikoen og godkjenne prosjekter som faktisk ikke gir tilstrekkelig kompensasjon for risikoen.
• Over tid endre selskapets risikoprofil — og kan dermed feilprise hele virksomheten.` },
        { label: "b", text: `Bruk «pure play»-metoden til å estimere et passende avkastningskrav for prosjektet.`, solution: `Idéen: bruk beta fra sammenlignbare selskaper som kun opererer i bransjen prosjektet hører til. Disse er rene «pure plays» for risikoen vi vurderer.

Gjennomsnittlig beta for bransjen:

$$\\beta_{\\text{bransje}} = \\frac{1{,}3 + 1{,}5 + 1{,}7}{3} = \\frac{4{,}5}{3} = 1{,}5$$` },
        { label: "c", text: `Beregn diskonteringsrenten du vil bruke.`, solution: `$$r_{\\text{prosjekt}} = r_f + \\beta_{\\text{bransje}} \\times \\text{MRP} = 3\\,\\% + 1{,}5 \\times 6\\,\\%$$
$$= 3\\,\\% + 9\\,\\%$$

**Svar:** $$= 12\\,\\%$$

Vesentlig høyere enn selskapets WACC på 9 % — som det skal være, gitt at bioteknologi er mer risikofylt enn industri.` },
      ],
      solution: ``
    },
    {
      id: "os7-10",
      number: 10,
      difficulty: "hard",
      problemText: `Selskapet Tindra ASA har følgende informasjon:

• Antall utestående aksjer: 8 millioner
• Aksjekurs: kr 50
• Gjeld med markedsverdi: 100 mill. kr
• Effektiv rente (YTM) på gjelden: 4 %
• Egenkapitalbeta: 1,3
• Risikofri rente: 2 %
• Markedets risikopremie: 6 %
• Skattesats: 22 %`,
      subParts: [
        { label: "a", text: `Beregn markedsverdien av egenkapitalen og gjeldsforholdet ($D/V$).`, solution: `$$E = 8 \\text{ mill.} \\times 50 = 400 \\text{ mill. kr}$$
$$D = 100 \\text{ mill. kr}$$
$$V = E + D = 500 \\text{ mill. kr}$$

**Svar:** $D/V = 100/500 = 20\\,\\%$, $E/V = 80\\,\\%$` },
        { label: "b", text: `Beregn egenkapitalkostnaden ved bruk av CAPM.`, solution: `$$r_E = 2\\,\\% + 1{,}3 \\times 6\\,\\% = 2\\,\\% + 7{,}8\\,\\%$$

**Svar:** $$= 9{,}8\\,\\%$$` },
        { label: "c", text: `Beregn gjeldskostnaden etter skatt.`, solution: `$$r_D^{etter} = 4\\,\\% \\times (1 - 0{,}22) = 4\\,\\% \\times 0{,}78$$

**Svar:** $$= 3{,}12\\,\\%$$` },
        { label: "d", text: `Beregn selskapets WACC.`, solution: `$$\\text{WACC} = 0{,}80 \\times 9{,}8\\,\\% + 0{,}20 \\times 3{,}12\\,\\%$$
$$= 7{,}84\\,\\% + 0{,}624\\,\\%$$

**Svar:** $$= 8{,}46\\,\\%$$` },
        { label: "e", text: `Tindra vurderer et prosjekt med samme risikoprofil som dagens virksomhet. Prosjektet krever en investering på 80 mill. kr i dag og forventes å gi en evigvarende årlig kontantstrøm på 7 mill. kr. Bør prosjektet gjennomføres?`, solution: `Prosjekt: $I_0 = 80$, evigvarende $CF = 7$. Diskonteringsrente = WACC = 8,46 % (samme risikoprofil).

$$\\text{NV(kontantstrømmer)} = \\frac{CF}{r} = \\frac{7}{0{,}0846}$$

**Svar:** $$= 82{,}70 \\text{ mill. kr}$$

$$\\text{NPV} = 82{,}70 - 80 = 2{,}70 \\text{ mill. kr}$$

**Svar:** NPV > 0 → prosjektet bør gjennomføres.

Differansen er likevel relativt liten (2,70 mill. på en investering på 80 mill., ca. 3,4 %). Sensitiviteten mot WACC-estimatet er betydelig — en økning i WACC til 8,75 % ville være tilstrekkelig til at NPV blir negativ.` },
      ],
      solution: ``
    }
  ]
};
