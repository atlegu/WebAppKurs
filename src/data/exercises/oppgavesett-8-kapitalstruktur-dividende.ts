import { ExerciseSet } from '../../types/course';

// Kilde: BUS220 høst 2026 – Oppgavesett8_KapitalstrukturOgDividende_2026.html + fasit (samme sett som i klasseromskurset).
export const oppgavesett8KapitalstrukturDividende: ExerciseSet = {
  id: "oppgavesett-8-kapitalstruktur-dividende",
  moduleId: "modul-9-kapitalstruktur",
  title: "Oppgavesett 8: Kapitalstruktur og dividende",
  description: "Pensum: HRWJ kapittel 15 og 16 · Del 1 – Kapitalstruktur (oppgave 1–8) · Del 2 – Dividende og utbetalingspolitikk (oppgave 9–12)",
  exercises: [
    {
      id: "os8-1",
      number: 1,
      difficulty: "easy",
      problemText: `Industri AS er fullt egenkapitalfinansiert med 1 000 000 utestående aksjer som omsettes for kr 10 hver. Selskapet vurderer en kapitalstrukturendring der det tas opp et evigvarende lån på kr 5 millioner til 8 % rente. Hele lånebeløpet brukes til å kjøpe tilbake 500 000 aksjer.

Beregn EPS (resultat per aksje) under begge kapitalstrukturer for tre scenarier:

Forklar kort hvordan finansiell gearing påvirker EPS i ulike scenarier.`,
      tables: [{"headers":["Scenario","EBIT"],"rows":[["Nedgang","kr 500 000"],["Forventet","kr 1 000 000"],["Oppgang","kr 1 500 000"]]}],
      hints: ["Se bort fra skatt i denne oppgaven."],
      solution: `**Rentekostnad i ny struktur:** $0{,}08 \\times 5\\,000\\,000 = 400\\,000$ kr

**EPS-beregninger:**

$$\\begin{array}{|c|c|c|c|} \\hline \\textbf{Scenario} & \\textbf{EBIT} & \\textbf{EPS dagens (1M aksjer)} & \\textbf{EPS foreslått (0,5M aksjer)} \\\\ \\hline \\text{Nedgang} & \\text{500 000} & \\frac{500\\,000}{1\\,000\\,000} = 0{,}50 & \\frac{500\\,000 - 400\\,000}{500\\,000} = 0{,}20 \\\\ \\text{Forventet} & \\text{1 000 000} & 1{,}00 & \\frac{600\\,000}{500\\,000} = 1{,}20 \\\\ \\text{Oppgang} & \\text{1 500 000} & 1{,}50 & \\frac{1\\,100\\,000}{500\\,000} = 2{,}20 \\\\ \\hline \\end{array}$$

**Tolkning:**

• I oppgangsscenariet forsterker gearingen avkastningen: EPS øker fra 1,50 til 2,20.
• I nedgangsscenariet skader gearingen aksjonærene: EPS faller fra 0,50 til 0,20 — fordi renteforpliktelsene må betales uansett.
• Finansiell gearing forsterker både gevinster og tap — det er et sverd som skjærer begge veier.`
    },
    {
      id: "os8-2",
      number: 2,
      difficulty: "medium",
      problemText: `Bygg videre på Industri AS fra oppgave 1.`,
      subParts: [
        { label: "a", text: `Beregn break-even EBIT (indifferens-punktet) der EPS er den samme under begge kapitalstrukturer.`, solution: `Sett EPS likt under begge strukturer:

$$\\frac{\\text{EBIT}}{1\\,000\\,000} = \\frac{\\text{EBIT} - 400\\,000}{500\\,000}$$

Kryssmultipliser:

$$0{,}5 \\times \\text{EBIT} = \\text{EBIT} - 400\\,000$$
$$0{,}5 \\times \\text{EBIT} = 400\\,000$$

**Svar:** $$\\text{EBIT}^* = 800\\,000$$` },
        { label: "b", text: `Tegn EPS som funksjon av EBIT for de to strukturene. Hvor ligger break-even? Når lønner finansiell gearing seg, og når ikke?`, solution: `Under break-even EBIT på 800 000 kr lønner det seg å være ugearet (lavere risiko, samme EPS). Over break-even lønner gearing seg (høyere EPS).

Den foreslåtte strukturen er attraktiv for ledelse som forventer EBIT > 800 000 kr.` },
        { label: "c", text: `Hvilken EPS oppnås ved break-even-punktet, og hvilken sammenheng har dette med lånerenten?`, solution: `EPS ved break-even: $800\\,000 / 1\\,000\\,000 = 0{,}80$

Med 1 mill. aksjer à 10 kr, total egenkapital = 10 mill. kr. EPS = 0,80 betyr ROE = $0{,}80 / 10 = 8\\,\\%$ — som er nøyaktig lik lånerenten.

Tolkning: Ved break-even tjener selskapet akkurat så mye på de ekstra aktivene som lånet finansierer at det dekker rentekostnaden. Gearing gir verdi bare når avkastningen på aktivene overstiger lånekostnaden.` },
      ],
      solution: ``
    },
    {
      id: "os8-3",
      number: 3,
      difficulty: "easy",
      problemText: `Selskapet Stang AS er fullt egenkapitalfinansiert med en markedsverdi $V_U = 100$ mill. kr. Det vurderes en restrukturering der selskapet utsteder gjeld for 30 mill. kr og bruker proviniten til å betale ut et engangs-utbytte til aksjonærene. Se bort fra skatt og konkurskostnader.`,
      subParts: [
        { label: "a", text: `Ifølge M&amp;M Proposisjon I, hva blir selskapets samlede verdi etter restruktureringen?`, solution: `M&amp;M Proposisjon I (uten skatt): selskapets verdi er uavhengig av kapitalstrukturen.

**Svar:** $$V_L = V_U = 100 \\text{ mill. kr}$$` },
        { label: "b", text: `Hva blir markedsverdien av egenkapitalen?`, solution: `$$E = V_L - D = 100 - 30$$

**Svar:** $$= 70 \\text{ mill. kr}$$

Aksjonærene mottok 30 mill. kr i kontant utbytte. Selv om egenkapitalverdien falt fra 100 til 70 mill., har aksjonærene samme samlede formue: 70 mill. kr i aksjer + 30 mill. kr i kontanter = 100 mill. kr.` },
        { label: "c", text: `Forklar med M&amp;Ms «pizza-analogi» hvorfor selskapets totale verdi ikke endres.`, solution: `Selskapet er en pizza der hele verdien (V) bestemmes av størrelsen, ikke hvordan den er delt. Å skjære pizzaen i to (gjeld + egenkapital) eller fire (gjeld + preferanseaksjer + egenkapital + ...) endrer ikke selve pizzaen.

Verdien av selskapet er drevet av dets eiendeler og kontantstrømmer — ikke av hvordan disse kontantstrømmene fordeles mellom kreditorer og aksjonærer.` },
      ],
      solution: ``
    },
    {
      id: "os8-4",
      number: 4,
      difficulty: "medium",
      problemText: `Selskapet Vekt AS har et avkastningskrav på totalkapitalen ($R_A$) på 12 %. Gjeldskostnaden ($R_D$) er 6 %. Selskapet har ingen skatt.`,
      subParts: [
        { label: "a", text: `Bruk M&amp;M Proposisjon II til å beregne egenkapitalkostnaden ved følgende gjeldsgrader:

• $D/E = 0$
• $D/E = 0{,}5$
• $D/E = 1{,}0$
• $D/E = 2{,}0$`, solution: `M&amp;M Proposisjon II uten skatt:

$$R_E = R_A + (R_A - R_D) \\times \\frac{D}{E}$$

$$\\begin{array}{|c|c|c|} \\hline \\boldsymbol{D/E} & \\textbf{Beregning} & \\boldsymbol{R_E} \\\\ \\hline \\text{0} & 12\\,\\% + 6\\,\\% \\times 0 & \\text{**12,0 \\%**} \\\\ \\text{0,5} & 12\\,\\% + 6\\,\\% \\times 0{,}5 & \\text{**15,0 \\%**} \\\\ \\text{1,0} & 12\\,\\% + 6\\,\\% \\times 1{,}0 & \\text{**18,0 \\%**} \\\\ \\text{2,0} & 12\\,\\% + 6\\,\\% \\times 2{,}0 & \\text{**24,0 \\%**} \\\\ \\hline \\end{array}$$

Egenkapitalkostnaden stiger lineært med gjeldsgraden — fordi økt gjeld øker den finansielle risikoen aksjonærene bærer.` },
        { label: "b", text: `Beregn WACC for hver av gjeldsgradene i a). Hva observerer du, og hvordan stemmer dette med M&amp;M Proposisjon I?`, solution: `$\\text{WACC} = \\frac{E}{V} R_E + \\frac{D}{V} R_D$. Med $D/E = x$ er $E/V = 1/(1+x)$ og $D/V = x/(1+x)$.

$$\\begin{array}{|c|c|c|c|c|} \\hline \\boldsymbol{D/E} & \\boldsymbol{E/V} & \\boldsymbol{D/V} & \\boldsymbol{R_E} & \\textbf{WACC} \\\\ \\hline \\text{0} & \\text{1} & \\text{0} & \\text{12 \\%} & 1 \\times 12 = 12\\,\\% \\\\ \\text{0,5} & \\text{2/3} & \\text{1/3} & \\text{15 \\%} & \\frac{2}{3} \\times 15 + \\frac{1}{3} \\times 6 = 10 + 2 = 12\\,\\% \\\\ \\text{1,0} & \\text{1/2} & \\text{1/2} & \\text{18 \\%} & 0{,}5 \\times 18 + 0{,}5 \\times 6 = 9 + 3 = 12\\,\\% \\\\ \\text{2,0} & \\text{1/3} & \\text{2/3} & \\text{24 \\%} & \\frac{1}{3} \\times 24 + \\frac{2}{3} \\times 6 = 8 + 4 = 12\\,\\% \\\\ \\hline \\end{array}$$

**Svar:** WACC er konstant lik 12 % uansett kapitalstruktur.

Dette er nøyaktig hva M&amp;M Proposisjon I sier: gevinsten fra billigere gjeld blir nøyaktig oppveid av økt egenkapitalkostnad — netto effekt på WACC (og dermed firmaverdien) er null.` },
        { label: "c", text: `Forklar kort hvordan «business risk» og «financial risk» bidrar til egenkapitalkostnaden.`, solution: `$R_E$ kan dekomponeres i to deler:

$$R_E = \\underbrace{R_A}_{\\text{business risk}} + \\underbrace{(R_A - R_D) \\times (D/E)}_{\\text{financial risk}}$$

• **Business risk:** Risikoen som ligger i selve virksomheten — uavhengig av finansiering. Bestemt av $R_A$.
• **Financial risk:** Tilleggsrisikoen aksjonærene bærer fordi kreditorene betjenes først. Bestemt av gjeldsgraden $D/E$.

Selv om totalrisikoen i selskapets eiendeler ikke endres, øker risikoen for egenkapitalbeholderne når selskapet låner mer.` },
      ],
      solution: ``
    },
    {
      id: "os8-5",
      number: 5,
      difficulty: "hard",
      problemText: `Anne eier 200 aksjer i Industri AS (samme selskap som oppgave 1) i den nåværende ugearede strukturen. Aksjekursen er kr 10, så hennes investering er kr 2 000. Anne foretrekker imidlertid eksponering tilsvarende den foreslåtte (gearede) strukturen.

Vis at Anne kan replikere kontantstrømmene fra den foreslåtte kapitalstrukturen ved bruk av hjemmelaget gearing (homemade leverage). Anne kan låne penger personlig til 8 %, samme rente som selskapet betaler.`,
      subParts: [
        { label: "a", text: `Hvor mye må Anne låne, og hvor mange aksjer ender hun med?`, solution: `Foreslått struktur har $D/E = 5\\text{M}/5\\text{M} = 1{,}0$ (etter restruktureringen er det 5 mill. gjeld og 5 mill. egenkapital). For å replikere dette på personnivå:

• Anne låner kr 2 000 til 8 % rente (samme gjeldsgrad som selskapet)
• Bruker lånet + egne 2 000 til å kjøpe 200 ekstra aksjer → totalt 400 aksjer

**Svar:** Anne låner kr 2 000 og eier 400 aksjer.` },
        { label: "b", text: `Beregn Annes netto inntjening i de tre scenariene fra oppgave 1, og sammenlign med 200 aksjer i den foreslåtte strukturen.`, solution: `Annes kontantstrøm = 400 × EPS$_{dagens}$ − rente på lån (0,08 × 2 000 = 160)

$$\\begin{array}{|c|c|c|c|} \\hline \\textbf{Scenario} & \\textbf{EPS dagens} & \\textbf{Annes inntekt (hjemmelaget)} & \\textbf{200 aksjer i foreslått} \\\\ \\hline \\text{Nedgang} & \\text{0,50} & 400 \\times 0{,}50 - 160 = 40 & 200 \\times 0{,}20 = 40 \\\\ \\text{Forventet} & \\text{1,00} & 400 \\times 1{,}00 - 160 = 240 & 200 \\times 1{,}20 = 240 \\\\ \\text{Oppgang} & \\text{1,50} & 400 \\times 1{,}50 - 160 = 440 & 200 \\times 2{,}20 = 440 \\\\ \\hline \\end{array}$$

**Svar:** Anne får eksakt samme kontantstrøm som om selskapet hadde gearet seg opp.` },
        { label: "c", text: `Hva er den teoretiske implikasjonen av at hjemmelaget gearing er mulig? Hva sier dette om verdien av selskapets kapitalstruktur?`, solution: `Siden investorer kan skape ønsket gearing på egen hånd (når de kan låne til samme rente som selskapet), er kapitalstrukturen verdiløs som verktøy for å skape verdi for aksjonærene.

Dette er grunnlaget for M&amp;M Proposisjon I: selskapets verdi er uavhengig av kapitalstruktur i en perfekt verden uten skatt, transaksjonskostnader eller andre friksjoner.

I praksis er forutsetningene urealistiske (individene betaler høyere rente enn selskaper, skatt finnes, m.m.) — men hjemmelaget gearing er likevel et viktig referansepunkt.` },
      ],
      solution: ``
    },
    {
      id: "os8-6",
      number: 6,
      difficulty: "medium",
      problemText: `Tindra AS forventer en evigvarende EBIT på 10 mill. kr per år. Selskapet har 50 mill. kr i gjeld med 6 % effektiv rente. Selskapsskatt er 22 %. Avkastningskravet til egenkapitalen i et tilsvarende ugearet selskap er $R_U = 10\\,\\%$.`,
      subParts: [
        { label: "a", text: `Hva er den årlige skattebesparelsen («interest tax shield»)?`, solution: `Rentekostnad = $R_D \\times D = 0{,}06 \\times 50 = 3$ mill.

$$\\text{Skattebesparelse} = T_C \\times R_D \\times D = 0{,}22 \\times 3 \\text{ mill.}$$

**Svar:** $$= 0{,}66 \\text{ mill. kr per år}$$` },
        { label: "b", text: `Hva er nåverdien av skattebesparelsen?`, solution: `Siden skattebesparelsen er evig (gjelden er evig) og diskonteres med $R_D$:

$$\\text{NV} = \\frac{T_C \\times R_D \\times D}{R_D} = T_C \\times D = 0{,}22 \\times 50$$

**Svar:** $$= 11 \\text{ mill. kr}$$` },
        { label: "c", text: `Beregn verdien til selskapet hvis det var fullt egenkapitalfinansiert ($V_U$).`, solution: `$$V_U = \\frac{\\text{EBIT} \\times (1 - T_C)}{R_U} = \\frac{10 \\times 0{,}78}{0{,}10} = \\frac{7{,}8}{0{,}10}$$

**Svar:** $$= 78 \\text{ mill. kr}$$` },
        { label: "d", text: `Beregn verdien til Tindra med dagens kapitalstruktur ($V_L$), og markedsverdien av egenkapitalen ($E$).`, solution: `M&amp;M Proposisjon I med skatt:

$$V_L = V_U + T_C \\times D = 78 + 11$$

**Svar:** $$= 89 \\text{ mill. kr}$$

$$E = V_L - D = 89 - 50$$

**Svar:** $$= 39 \\text{ mill. kr}$$

Gearingen øker selskapets verdi med 11 mill. — nettopp nåverdien av rentens skatteskjold.` },
      ],
      solution: ``
    },
    {
      id: "os8-7",
      number: 7,
      difficulty: "hard",
      problemText: `Bygg videre på Tindra AS fra oppgave 6.`,
      subParts: [
        { label: "a", text: `Beregn egenkapitalkostnaden $R_E$ ved bruk av M&amp;M Proposisjon II med skatt.`, solution: `$$R_E = R_U + (R_U - R_D) \\times \\frac{D}{E} \\times (1 - T_C)$$
$$= 0{,}10 + (0{,}10 - 0{,}06) \\times \\frac{50}{39} \\times (1 - 0{,}22)$$
$$= 0{,}10 + 0{,}04 \\times 1{,}2821 \\times 0{,}78$$
$$= 0{,}10 + 0{,}04 \\times 1{,}0000$$
$$= 0{,}10 + 0{,}04$$

**Svar:** $$= 14{,}0\\,\\%$$` },
        { label: "b", text: `Beregn selskapets WACC, og sammenlign med $R_U = 10\\,\\%$.`, solution: `$$\\text{WACC} = \\frac{E}{V_L} R_E + \\frac{D}{V_L} R_D (1 - T_C)$$
$$= \\frac{39}{89} \\times 14\\,\\% + \\frac{50}{89} \\times 6\\,\\% \\times 0{,}78$$
$$= 0{,}4382 \\times 14\\,\\% + 0{,}5618 \\times 4{,}68\\,\\%$$
$$= 6{,}13\\,\\% + 2{,}63\\,\\%$$

**Svar:** $$= 8{,}76\\,\\%$$

WACC har falt fra 10 % (ugearet) til 8,76 % (gearet) — netto besparelse fra rentens skatteskjold.` },
        { label: "c", text: `Verifiser ditt WACC-svar ved bruk av formelen $\\text{WACC} = R_U \\times (1 - T_C \\times D/V_L)$.`, solution: `$$\\text{WACC} = R_U \\times \\left(1 - T_C \\times \\frac{D}{V_L}\\right)$$
$$= 0{,}10 \\times \\left(1 - 0{,}22 \\times \\frac{50}{89}\\right)$$
$$= 0{,}10 \\times (1 - 0{,}1236)$$
$$= 0{,}10 \\times 0{,}8764$$

**Svar:** $$= 8{,}76\\,\\% \\checkmark$$` },
        { label: "d", text: `Tindra vurderer å øke gjeldsgraden ytterligere. Forklar kort hvorfor M&amp;M med skatt isolert sett anbefaler 100 % gjeldsfinansiering, og hvorfor dette i praksis ikke er optimalt.`, solution: `M&amp;M med skatt isolert sett: verdien øker lineært med $T_C \\times D$, så jo mer gjeld, desto bedre. Implikasjon: optimal struktur er 100 % gjeldsfinansiering.

Men i virkeligheten medfører økt gjeld også:

• **Direkte konkurskostnader:** Advokatutgifter, administrasjon, tap av eiendelsverdi i selve konkursprosessen.
• **Indirekte konkurskostnader:** Tapt produktivitet, tap av kunder/leverandører, ansatte som slutter, mistede vekstmuligheter.
• **Agentkostnader:** Konflikter mellom aksjonærer og kreditorer (f.eks. underinvestering, risk-shifting).

Den statiske teorien sier at optimal gjeldsgrad er der den marginale skattebesparelsen er lik den marginale konkurskostnaden — typisk vesentlig under 100 %.` },
      ],
      solution: ``
    },
    {
      id: "os8-8",
      number: 8,
      difficulty: "easy",
      problemText: `Den statiske kapitalstrukturteorien («static theory of capital structure») beskriver et avveiningsproblem mellom skattebesparelse og kostnader.`,
      subParts: [
        { label: "a", text: `Hvilke fordeler ved gjeld trekker mot mer gjeld i kapitalstrukturen?`, solution: `• **Skatteskjold:** Renter er fradragsberettiget — staten subsidierer effektivt rentekostnaden. PV = $T_C \\times D$.
• **Disiplinering av ledelsen:** Renteforpliktelser disiplinerer ledelsen mot ineffektive investeringer (reduserer free cash flow agency-problemet).` },
        { label: "b", text: `Hvilke kostnader trekker mot mindre gjeld? Skill mellom direkte og indirekte konkurskostnader, og gi ett eksempel på hver.`, solution: `**Direkte konkurskostnader:** Advokat- og administrasjonsutgifter ved formell konkursbehandling. Eksempel: Lehman Brothers' konkurs i 2008 påløp over $2 mrd. i juridiske kostnader.

**Indirekte konkurskostnader:** Tapt verdi før formell konkurs — kunder som flykter, leverandører som krever forskuddsbetaling, beste medarbeidere som slutter, gode investeringer som droppes. Disse er ofte mye større enn de direkte kostnadene.` },
        { label: "c", text: `Forklar kort hva som menes med «agentkostnader ved gjeld» og hvordan disse oppstår.`, solution: `Konflikter mellom aksjonærer og kreditorer som magnifiseres ved finansiell stress:

• **Risk-shifting (incentive to take large risks):** Aksjonærene foretrekker høyrisikoprosjekter når selskapet er nær konkurs — de har lite å tape, men mye å vinne på «hail mary».
• **Underinvestering:** Aksjonærene avstår fra positiv-NPV-prosjekter fordi gevinsten hovedsakelig tilfaller kreditorene.
• **«Milking the property»:** Aksjonærene drar ut ekstra utbytte fra et nødlidende selskap, og lar kreditorene sitte igjen med en tom skall.

Rasjonelle kreditorer forutser dette og krever høyere rente — som ultimat betales av aksjonærene. Resultat: gjeld blir vanskeligere og dyrere å skaffe for selskaper der disse problemene er reelle.` },
        { label: "d", text: `Hvordan kan en bedrift med stor andel immaterielle eiendeler (f.eks. et bioteknologiselskap) forventes å velge gjeldsgrad sammenlignet med et selskap med store fysiske eiendeler (f.eks. et eiendomsselskap)? Begrunn.`, solution: `**Eiendomsselskap (fysiske eiendeler):** Eiendelene har høy gjenvinningsverdi i en konkurs — kreditorene kan ta over bygningene og selge dem. Lav forventet konkurskostnad → kan tåle høy gjeldsgrad.

**Bioteknologiselskap (immaterielle eiendeler):** Eiendelene er stort sett patenter, kunnskap og «human capital» som forsvinner ved konkurs. Høye agentkostnader og konkurskostnader → bør ha lav gjeldsgrad.

Empirisk: eiendoms- og forsyningsselskap har typisk D/E rundt 1–2, mens bioteknologi- og teknologiselskaper ofte ligger nær null. Den statiske teorien forklarer dette mønsteret godt.` },
      ],
      solution: ``
    },
    {
      id: "os8-9",
      number: 9,
      difficulty: "easy",
      problemText: `Bekk AS har 200 000 utestående aksjer som omsettes for kr 40 hver. Selskapets resultat (etter skatt) er kr 1 mill. Selskapet annonserer et kontantutbytte på kr 2 per aksje.`,
      subParts: [
        { label: "a", text: `Hva er resultatet per aksje (EPS) og P/E-forholdet før utbyttebetalingen?`, solution: `$$\\text{EPS} = \\frac{1\\,000\\,000}{200\\,000} = 5 \\qquad P/E = \\frac{40}{5}$$

**Svar:** $$\\text{EPS} = \\text{kr } 5{,}00, \\quad P/E = 8{,}0$$` },
        { label: "b", text: `Hva forventes aksjekursen å være på ex-utbyttedagen (forutsatt ingen skatt og andre friksjoner)?`, solution: `I et marked uten friksjoner faller kursen med utbyttebeløpet:

**Svar:** $$P_{ex} = 40 - 2 = \\text{kr } 38$$` },
        { label: "c", text: `Hva blir EPS og P/E etter utbyttebetalingen?`, solution: `EPS endres ikke (antall aksjer og inntekt er uendret):

$$\\text{EPS} = 5{,}00$$

P/E faller fordi prisen falt:

**Svar:** $$P/E = \\frac{38}{5} = 7{,}6$$` },
        { label: "d", text: `Vis at en aksjonær med 100 aksjer har samme totale formue rett før og rett etter utbyttebetalingen.`, solution: `$$\\begin{array}{|c|c|c|} \\hline \\textbf{} & \\textbf{Før} & \\textbf{Etter} \\\\ \\hline \\text{Aksjeverdi} & 100 \\times 40 = 4\\,000 & 100 \\times 38 = 3\\,800 \\\\ \\text{Kontanter} & \\text{0} & 100 \\times 2 = 200 \\\\ \\text{**Total formue**} & \\text{**4 000**} & \\text{**4 000**} \\\\ \\hline \\end{array}$$

**Svar:** Formuen er uendret — kun sammensetningen er endret fra aksjer til aksjer + kontanter.` },
      ],
      solution: ``
    },
    {
      id: "os8-10",
      number: 10,
      difficulty: "medium",
      problemText: `Bygg videre på Bekk AS fra oppgave 9. Anta nå at selskapet bruker de samme 400 000 kronene til å kjøpe tilbake aksjer i stedet for å utbetale dem som dividende. Tilbakekjøpet skjer til markedspris kr 40.`,
      subParts: [
        { label: "a", text: `Hvor mange aksjer kjøpes tilbake?`, solution: `$$\\frac{400\\,000}{40}$$

**Svar:** $$= 10\\,000 \\text{ aksjer}$$` },
        { label: "b", text: `Beregn ny aksjekurs, ny EPS og nytt P/E-forhold.`, solution: `Markedsverdi av EK etter tilbakekjøp: $8\\,000\\,000 - 400\\,000 = 7\\,600\\,000$ kr.

Antall aksjer igjen: $200\\,000 - 10\\,000 = 190\\,000$.

$$\\text{Aksjekurs} = \\frac{7\\,600\\,000}{190\\,000}$$

**Svar:** $$= \\text{kr } 40 \\text{ (uendret)}$$

$$\\text{EPS} = \\frac{1\\,000\\,000}{190\\,000} = \\text{kr } 5{,}26$$

$$P/E = \\frac{40}{5{,}26}$$

**Svar:** $$= 7{,}6 \\text{ (samme som ved utbytte)}$$

Merk: EPS øker mekanisk (færre aksjer å fordele inntekten på), men P/E faller — så aksjen er ikke «billigere» i noen meningsfull forstand. Verdiøkningen i EPS er fullt og helt et regnskapsteknisk fenomen.` },
        { label: "c", text: `Sammenlign formuen til en aksjonær med 100 aksjer i de to alternativene (utbytte vs tilbakekjøp). Hva er forskjellen i en verden uten skatt?`, solution: `Aksjonær med 100 aksjer:

$$\\begin{array}{|c|c|c|} \\hline \\textbf{} & \\textbf{Utbytte} & \\textbf{Tilbakekjøp (selger ikke)} \\\\ \\hline \\text{Aksjer} & 100 \\times 38 = 3\\,800 & 100 \\times 40 = 4\\,000 \\\\ \\text{Kontanter} & 200 & 0 \\\\ \\text{**Sum**} & \\text{**4 000**} & \\text{**4 000**} \\\\ \\hline \\end{array}$$

Uten skatt: ingen forskjell. (Hvis aksjonæren selger sine 5 aksjer ved tilbakekjøp, får hun 200 kr i kontanter og har 95 aksjer × 40 = 3 800 — også 4 000 i sum.)` },
        { label: "d", text: `Hva er den viktigste praktiske forskjellen mellom dividende og tilbakekjøp med skatt? Hvilket alternativ foretrekker aksjonærer normalt, og hvorfor?`, solution: `Med skatt foretrekkes typisk **tilbakekjøp**:

• **Dividende** beskattes umiddelbart hos alle aksjonærer (med utbytteskatt, ofte 25–35 %).
• **Tilbakekjøp** beskattes kun hos de som selger, og bare på gevinsten (ikke hele beløpet). De som ikke selger, betaler ingen skatt.

I tillegg gir tilbakekjøp aksjonæren valgfrihet: hver enkelt aksjonær kan velge om vedkommende vil ha kontanter eller ikke. Dette er en del av forklaringen på hvorfor tilbakekjøp har vokst sterkt internasjonalt de siste 30 årene.` },
      ],
      solution: ``
    },
    {
      id: "os8-11",
      number: 11,
      difficulty: "hard",
      problemText: `Per eier 100 aksjer i Bekk AS (samme selskap som oppgave 9). Bekk har annonsert et utbytte på kr 2 per aksje, men Per ønsker høyere kontantstrøm i år — han skulle helst hatt kr 4 per aksje i utbytte.`,
      subParts: [
        { label: "a", text: `Vis hvordan Per kan konstruere et «hjemmelaget utbytte» på kr 4 per aksje. Hvor mange aksjer må han selge, og til hvilken pris?`, solution: `Per har 100 aksjer. Etter utbytte: 100 aksjer × kr 38 + kr 200 i kontanter.

For å oppnå totalt kr 400 i kontant, må Per anskaffe ytterligere kr 200 ved å selge aksjer:

$$\\text{Aksjer å selge} = \\frac{200}{38} = 5{,}263$$

**Svar:** Per selger 5,263 aksjer à kr 38, og får kr 200 ekstra i kontant.` },
        { label: "b", text: `Vis at hans totale formue er den samme som om Bekk hadde utbetalt kr 4 i utbytte fra starten av.`, solution: `**Pers situasjon med hjemmelaget utbytte på 4 kr:**

• Gjenværende aksjer: $100 - 5{,}263 = 94{,}737$
• Aksjeverdi: $94{,}737 \\times 38 = 3\\,600$
• Kontanter: $200 + 200 = 400$
• **Total: 4 000 kr**

**Hypotetisk: hvis Bekk hadde utbetalt kr 4 i utbytte:**

• Aksjekurs ex-utbytte: $40 - 4 = 36$
• Aksjeverdi: $100 \\times 36 = 3\\,600$
• Kontanter: $100 \\times 4 = 400$
• **Total: 4 000 kr**

**Svar:** Pers totalformue er identisk i begge tilfeller.` },
        { label: "c", text: `En annen aksjonær, Lise, ønsker derimot lavere utbytte — hun foretrekker å reinvestere alt. Vis hvordan Lise kan oppnå dette.`, solution: `Lise har 100 aksjer og mottar kr 200 i utbytte. Hun ønsker å reinvestere alt.

Strategi: bruk de kr 200 til å kjøpe flere aksjer på markedet til pris kr 38:

$$\\text{Aksjer å kjøpe} = \\frac{200}{38} = 5{,}263$$

Lise eier nå $100 + 5{,}263 = 105{,}263$ aksjer × kr 38 = kr 4 000. Igjen identisk totalformue, men nå utelukkende i aksjer.` },
        { label: "d", text: `Hva er den teoretiske implikasjonen av at homemade-utbytte er mulig? Hva sier dette om verdien av selskapets utbyttepolitikk?`, solution: `I et marked uten transaksjonskostnader eller skatter kan investorer enkelt justere sin egen «utbyttesats» ved å kjøpe eller selge aksjer. Selskapets utbyttepolitikk er derfor — i en perfekt verden — irrelevant for aksjeverdien.

Dette er kjernen i Modigliani–Millers dividende-irrelevans-teorem (1961): et selskaps utbyttepolitikk påvirker ikke selskapets verdi i en perfekt verden.

I praksis spiller skatter, transaksjonskostnader og «clientele effects» en rolle, men hjemmelagde utbytter er et viktig teoretisk referansepunkt.` },
      ],
      solution: ``
    },
    {
      id: "os8-12",
      number: 12,
      difficulty: "easy",
      problemText: `Bekk AS har fortsatt 200 000 aksjer à kr 40 (markedsverdi kr 8 mill.). Vurder to alternative tiltak:`,
      subParts: [
        { label: "a", text: `**Aksjeutbytte (stock dividend) på 20 %:** Hvor mange aksjer er utestående etter utdelingen? Hva blir ny aksjekurs? Hvordan endres formuen til en aksjonær med 100 aksjer?`, solution: `Antall aksjer øker fra 200 000 til $200\\,000 \\times 1{,}20 = 240\\,000$.

Selskapets verdi (8 mill.) er uendret, så ny aksjekurs:

$$\\frac{8\\,000\\,000}{240\\,000} = \\text{kr } 33{,}33$$

Aksjonær med 100 aksjer har nå $100 \\times 1{,}20 = 120$ aksjer:

$$\\text{Formue} = 120 \\times 33{,}33 = \\text{kr } 4\\,000$$

**Svar:** Formuen er uendret — bare antall aksjer og pris per aksje er endret.` },
        { label: "b", text: `**Aksjesplitt 2-til-1:** Besvar de samme spørsmålene.`, solution: `Antall aksjer dobles: $200\\,000 \\times 2 = 400\\,000$.

Pris halveres: $40 / 2 = \\text{kr } 20$.

Aksjonær med 100 aksjer eier nå 200 aksjer:

$$\\text{Formue} = 200 \\times 20 = \\text{kr } 4\\,000$$

**Svar:** Formuen er uendret.` },
        { label: "c", text: `Hva er den prinsipielle forskjellen mellom et aksjeutbytte og en aksjesplitt? Hvorfor velger selskaper å gjennomføre dette?`, solution: `**Aksjeutbytte** uttrykkes i prosent (f.eks. 20 %). **Aksjesplitt** uttrykkes som forhold (f.eks. 2-til-1). Begge er rent regnskapsmessige hendelser uten økonomisk substans.

Hvorfor gjør selskaper dette?

• **«Trading range»-argumentet:** Aksjer som blir for dyre kan skremme bort småinvestorer. Splitt holder prisen i et «attraktivt» intervall.
• **Signaleffekt:** Selskaper splitter typisk når de er optimistiske om fremtiden — markedet kan oppfatte splitten som et signal om vekst.
• **Likviditet:** Flere aksjer i omløp kan øke handelsvolumet og redusere spread.

Merk: under IFRS behandles aksjeutbytte som et kontantutbytte etterfulgt av et samtidig kjøp av aksjer fra eierne — i motsetning til amerikansk regnskapsføring.` },
        { label: "d", text: `Konseptuelt: Forklar kort hva «klienteleffekten» (clientele effect) betyr i sammenheng med utbyttepolitikk. Hva er «informasjonsinnholdet i utbytte» (information content effect)?`, solution: `**Klienteleffekten (clientele effect):** Ulike grupper investorer foretrekker ulike utbyttenivåer (f.eks. pensjonister vil ha utbytte; rike investorer vil unngå skatt). Selskaper tiltrekker seg en bestemt klientel basert på sin utbyttepolitikk. Når klientelene først er «satt», er ytterligere endringer i policy uten verdi — det vil bare bytte ut den ene klientelen mot en annen.

**Informasjonsinnholdet (information content effect):** Markedet reagerer på uventede utbytteendringer fordi de signaliserer ledelsens informasjon om fremtidige inntekter. En utbytteøkning er et signal om sterk forventet inntjening; en kutt er et signal om svakhet. Kursreaksjonen er derfor en reaksjon på den nye informasjonen, ikke på utbyttepolitikken som sådan.

Sammen forklarer disse to fenomenene hvorfor empiriske kursreaksjoner kan se ut som om utbyttepolitikk «betyr noe» selv om M&amp;M-rammeverket sier den ikke gjør det.` },
      ],
      solution: ``
    }
  ]
};
