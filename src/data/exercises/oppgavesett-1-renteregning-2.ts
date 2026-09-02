import { ExerciseSet } from '../../types/course';

// Kilde: BUS220 høst 2026 – Oppgavesett1_Renteregning2_2026.html + fasit (samme sett som i klasseromskurset).
export const oppgavesett1Renteregning2: ExerciseSet = {
  id: "oppgavesett-1-renteregning-2",
  moduleId: "modul-2-tidverdi",
  title: "Oppgavesett 1: Renteregning del 2",
  description: "Dette oppgavesettet bygger videre på oppgavesett 0 og introduserer effektiv rente, ulike renteperioder, låntyper og realverdi. Disse temaene er sentrale for resten av kurset.",
  exercises: [
    {
      id: "os1-1",
      number: 1,
      difficulty: "easy",
      problemText: `Du tar opp et lån i en bank til 7,20 % p.a. Renten skal betales etterskuddsvis hvert halvår. Beregn effektiv rente p.a. (ingen gebyr).`,
      solution: `Med halvårlig forrentning er det $m = 2$ renteperioder per år. Perioderenten er $r/m = 0{,}072/2 = 0{,}036$.

$$r_{\\text{eff}} = \\left(1 + \\frac{r}{m}\\right)^m - 1 = \\left(1 + \\frac{0{,}072}{2}\\right)^2 - 1 = 1{,}036^2 - 1$$

**Svar:** $$= 0{,}0733 = 7{,}33\\,\\%$$`
    },
    {
      id: "os1-2",
      number: 2,
      difficulty: "easy",
      problemText: `Du tar opp et lån i en bank til 7,20 % p.a. Renten skal betales etterskuddsvis hver måned. Beregn effektiv rente p.a. (ingen gebyr).`,
      solution: `Med månedlig forrentning er $m = 12$. Perioderenten er $0{,}072/12 = 0{,}006$.

$$r_{\\text{eff}} = \\left(1 + \\frac{0{,}072}{12}\\right)^{12} - 1 = 1{,}006^{12} - 1$$

**Svar:** $$= 0{,}0744 = 7{,}44\\,\\%$$

Merk at effektiv rente øker med antall renteperioder per år.`
    },
    {
      id: "os1-3",
      number: 3,
      difficulty: "easy",
      problemText: `Du tar opp et lån i en bank til 7,20 % p.a. Tenk deg at renter avregnes kontinuerlig gjennom året, dvs. at antall perioder går mot uendelig. Beregn effektiv rente p.a. (ingen gebyr).`,
      solution: `Når antall perioder $m \\to \\infty$, bruker vi formelen for kontinuerlig forrentning:

$$r_{\\text{eff}} = e^r - 1 = e^{0{,}072} - 1$$

**Svar:** $$= 0{,}0747 = 7{,}47\\,\\%$$

Kontinuerlig forrentning gir den høyeste effektive renten for en gitt nominell rente, men forskjellen fra månedlig er svært liten.`
    },
    {
      id: "os1-4",
      number: 4,
      difficulty: "easy",
      problemText: `Du vinner kr 150 000 i tipping og plasserer gevinsten på en konto i Bybanken. Kontoen gir 1,0 % effektiv kvartalsvis rente (det vil si kvartalsvis kapitalisering).

Hvor mye penger kan du ta ut av banken på slutten av det sjette året?`,
      solution: `6 år med kvartalsvis kapitalisering gir $n = 6 \\times 4 = 24$ perioder.

$$FV = 150\\,000 \\times 1{,}01^{24} = 150\\,000 \\times 1{,}2697$$

**Svar:** $$= \\text{kr } 190\\,460$$

(Tilsvarende effektiv årsrente: $1{,}01^4 - 1 = 4{,}06\\,\\%$.)`
    },
    {
      id: "os1-5",
      number: 5,
      difficulty: "easy",
      problemText: `Du vinner kr 200 000 i Lotto og plasserer gevinsten på en sparekonto i Sparebanken. Kontoen gir 1,8 % effektiv halvårig rente.

Hvor mye penger kan du ta ut av banken på slutten av det femte året?`,
      solution: `5 år med halvårig kapitalisering gir $n = 5 \\times 2 = 10$ perioder.

$$FV = 200\\,000 \\times 1{,}018^{10} = 200\\,000 \\times 1{,}1953$$

**Svar:** $$= \\text{kr } 239\\,060$$

(Tilsvarende effektiv årsrente: $1{,}018^2 - 1 = 3{,}63\\,\\%$.)`
    },
    {
      id: "os1-6",
      number: 6,
      difficulty: "medium",
      problemText: `Du får et lån i banken på kr 300 000. På grunn av gode forbindelser slipper du etableringsgebyr. Effektiv rente er 6,14 % per år og lånet er et annuitetslån som skal tilbakebetales etterskuddsvis i kvartalsvise terminer over 10 år.

Hvor mye må du betale per termin?`,
      hints: ["Konverter effektiv årsrente til kvartalsrente først."],
      solution: `**Steg 1:** Konverter årsrente til kvartalsrente:

$$r_q = (1 + r_{\\text{eff}})^{1/4} - 1 = 1{,}0614^{1/4} - 1 = \\sqrt[4]{1{,}0614} - 1 \\approx 0{,}015 = 1{,}5\\,\\%$$

**Steg 2:** Antall terminer: $n = 10 \\times 4 = 40$.

**Steg 3:** Annuitetsformelen:

$$PV = C \\times \\frac{1 - (1+r)^{-n}}{r}$$
$$C = \\frac{300\\,000}{\\dfrac{1 - 1{,}015^{-40}}{0{,}015}} = \\frac{300\\,000}{29{,}92}$$

**Svar:** $$= \\text{kr } 10\\,028 \\text{ per kvartal}$$`
    },
    {
      id: "os1-7",
      number: 7,
      difficulty: "medium",
      problemText: `En av dine kollegaer har kjøpt hus og tar i den forbindelsen opp et annuitetslån på kr 1 000 000. Årsrenten er en etterskuddsrente på 6 % og den årlige betalingen er kr 87 185.

Hvor mange år skal hun bruke på å tilbakebetale lånet?`,
      solution: `Lånet kan ses på som nåverdien av en annuitet. Vi setter opp:

$$PV = C \\times \\frac{1 - (1+r)^{-t}}{r}$$
$$\\frac{1\\,000\\,000}{87\\,185} = \\frac{1 - (1{,}06)^{-t}}{0{,}06}$$
$$11{,}47 \\times 0{,}06 = 1 - (1{,}06)^{-t}$$
$$0{,}6882 = 1 - (1{,}06)^{-t}$$
$$(1{,}06)^{-t} = 0{,}3118$$
$$(1{,}06)^{t} = \\frac{1}{0{,}3118} = 3{,}207$$
$$t = \\frac{\\ln 3{,}207}{\\ln 1{,}06} = \\frac{1{,}1654}{0{,}0583}$$

**Svar:** $$= 20 \\text{ år}$$`
    },
    {
      id: "os1-8",
      number: 8,
      difficulty: "medium",
      problemText: `I stedet for å betale kr 14 000 kontant, kan du slå til på en avbetalingsordning som innebærer at du betaler kr 3 500 kontant og resten i form av 12 månedlige beløp, første gang om en måned. Du har regnet deg frem til at den årlige effektive renten knyttet til avbetalingsordningen er 42,58 %.

Hvor stort er det månedlige beløpet?`,
      solution: `**Steg 1:** Konverter effektiv årsrente til månedlig rente:

$$r_m = 1{,}4258^{1/12} - 1 \\approx 0{,}03 = 3\\,\\% \\text{ per måned}$$

**Steg 2:** Beløpet som finansieres er nåverdien av annuiteten:

$$PV = 14\\,000 - 3\\,500 = 10\\,500$$

**Steg 3:** Løs for månedlig beløp:

$$C = \\frac{10\\,500}{\\dfrac{1 - 1{,}03^{-12}}{0{,}03}} = \\frac{10\\,500}{9{,}954}$$

**Svar:** $$= \\text{kr } 1\\,055 \\text{ per måned}$$`
    },
    {
      id: "os1-9",
      number: 9,
      difficulty: "medium",
      problemText: `En fetter vil gjerne låne kr 150 000 av deg. Fetteren antyder fem alternative måter å betale tilbake lånet på. Alternativene er:

• Et uendelig annuitetslån med en årlig rente på 5 %
• Et 20 års serielån med en årlig rente på 5 %
• Et 20 års annuitetslån med en årlig rente på 5 %
• Et 20 års serielån med en halvårlig rente på 2,5 %

Du skal avgjøre hvilken tilbakebetalingsmetode du skal velge når du gjerne vil ha så høy prosentvis avkastning som mulig. Valget skal begrunnes.`,
      solution: `Nøkkelen er å se at renten er 5 % uavhengig av om det er annuitetslån, serielån eller uendelig annuitetslån — alle de tre første alternativene gir deg som långiver **5 % effektiv årsrente**. Tilbakebetalingsstrukturen påvirker ikke avkastningen når renten er den samme.

Det fjerde alternativet har 2,5 % halvårig rente. Er dette det samme som 5 % per år?

$$r_{\\text{eff}} = (1 + 0{,}025)^2 - 1 = 1{,}025^2 - 1 = 0{,}050625 = 5{,}0625\\,\\%$$

2,5 % per halvår tilsvarer 5,0625 % effektiv årsrente, som er høyere enn 5 %.

**Svar:** Velg alternativ 4 (serielån med halvårlig rente 2,5 %), da det gir effektiv avkastning 5,0625 % mot 5,00 % for de øvrige.`
    },
    {
      id: "os1-10",
      number: 10,
      difficulty: "hard",
      problemText: `Du kan få et annuitetslån på kr 400 000 til en effektiv rente per år på 5,0625 % når du ser bort fra betalingsgebyr. Som god kunde slipper du etableringsgebyr, men du må betale kr 60 i termingebyr ved hver betalingstermin. Lånet skal tilbakebetales i løpet av 8 år med halvårige, etterskuddsvise betalingsterminer.

Hvor mye må du betale til banken hvert halvår?`,
      solution: `**Steg 1:** Konverter effektiv årsrente til halvårsrente:

$$r_h = \\sqrt{1{,}050625} - 1 = 1{,}025 - 1 = 2{,}5\\,\\%$$

**Steg 2:** Antall terminer: $n = 8 \\times 2 = 16$.

**Steg 3:** Terminbeløp eksklusiv gebyr:

$$C = \\frac{400\\,000}{\\dfrac{1 - 1{,}025^{-16}}{0{,}025}} = \\frac{400\\,000}{13{,}06} = 30\\,640$$

**Steg 4:** Legg til termingebyr:

$$\\begin{array}{|c|c|} \\hline \\text{Terminbeløp ekskl. gebyr} & \\text{30 640} \\\\ \\text{Termingebyr} & \\text{60} \\\\ \\text{Betaler til banken} & \\text{30 700} \\\\ \\hline \\end{array}$$

**Svar:** Du betaler kr 30 700 hvert halvår.`
    },
    {
      id: "os1-11",
      number: 11,
      difficulty: "medium",
      problemText: `Du investerer kr 600 000 i dag til en garantert årlig rente på 4 % i 10 år.

Hva er **realverdien** av din investering om 10 år dersom prisstigning blir 2,5 % per år?`,
      solution: `**Steg 1:** Finn nominell sluttverdi:

$$FV_{\\text{nom}} = 600\\,000 \\times 1{,}04^{10} = 600\\,000 \\times 1{,}4802 = 888\\,147$$

**Steg 2:** Deflater med prisstigning for å finne realverdi (kjøpekraft i dagens kroner):

$$FV_{\\text{real}} = \\frac{888\\,147}{1{,}025^{10}} = \\frac{888\\,147}{1{,}2801}$$

**Svar:** $$= \\text{kr } 693\\,819$$

Alternativ metode: Bruk realrenten direkte:

$$r_{\\text{real}} = \\frac{1 + r_{\\text{nom}}}{1 + \\pi} - 1 = \\frac{1{,}04}{1{,}025} - 1 = 1{,}46\\,\\%$$
$$FV_{\\text{real}} = 600\\,000 \\times 1{,}0146^{10} = 693\\,819$$`
    },
    {
      id: "os1-12",
      number: 12,
      difficulty: "medium",
      problemText: `Du kan betale dine varekjøp etter 10 dager og oppnå 2 % rabatt, eller du kan betale etter 50 dager uten å få rabatt. Kassekredittrenten din er 15 % per år.

Hvilket betalingsalternativ velger du? Svaret skal begrunnes med beregninger.`,
      solution: `Spørsmålet er: hva koster det deg å ikke ta rabatten? Du betaler 2 % mer for å utsette betalingen i $50 - 10 = 40$ ekstra dager.

Effektiv periodekostnad for å vente:

$$r_{\\text{periode}} = \\frac{0{,}02}{1 - 0{,}02} = \\frac{0{,}02}{0{,}98} = 2{,}041\\,\\%$$

Annualisert kostnad (det er $365/40 = 9{,}125$ slike perioder per år):

$$r_{\\text{år}} = \\left(1 + 0{,}02041\\right)^{9{,}125} - 1 = 1{,}02041^{9{,}125} - 1 \\approx 20{,}2\\,\\%$$

Siden kostnaden ved å ikke ta rabatten (20,2 %) er **høyere** enn kassekredittrenten (15 %), lønner det seg å:

**Svar:** Betal etter 10 dager og ta rabatten. Finansier eventuelt med kassekreditt til 15 %.`
    },
    {
      id: "os1-13",
      number: 13,
      difficulty: "medium",
      problemText: `Nedenfor finner du fire utsagn. Du skal avgjøre hvilke(t) utsagn som er riktig(e) og galt/gale. Finner du gale utsagn, skal du forklare kort hva som er galt ved disse utsagnene. Se bort fra gebyrer og skatt.`,
      subParts: [
        { label: "a", text: `Dersom renteberegningen skjer etterskuddsvis én gang per år, er årlig nominell rente lik årlig effektiv rente.`, solution: `` },
        { label: "b", text: `Dersom renteberegningen skjer flere ganger per år, er årlig nominell rente mindre enn årlig effektiv rente.`, solution: `` },
        { label: "c", text: `Dersom renteberegningen skjer flere ganger per år, er årlig nominell rente større enn årlig effektiv rente.`, solution: `` },
        { label: "d", text: `Forskuddsrente vil føre til at effektiv rente per år blir høyere sammenlignet med etterskuddsrente.`, solution: `` },
      ],
      solution: `**a) RIKTIG.** Når renten beregnes etterskuddsvis én gang per år, er perioderenten lik årsrenten. Da er $r_{\\text{eff}} = (1 + r/1)^1 - 1 = r$, altså lik den nominelle renten.

**b) RIKTIG.** Når renten beregnes flere ganger per år ($m > 1$), blir effektiv rente høyere enn nominell rente fordi du får «rente på renten» innenfor året: $r_{\\text{eff}} = (1 + r/m)^m - 1 > r$.

**c) GALT.** Dette er det motsatte av b). Nominell rente er lavere enn effektiv rente når $m > 1$, ikke høyere.

**d) RIKTIG.** Ved forskuddsrente betaler du renten ved periodens begynnelse, slik at du i praksis låner et lavere beløp enn det nominelle. Dette gir en høyere effektiv rente enn ved etterskuddsrente med samme nominelle sats.

**Svar:** Utsagnene a), b) og d) er riktige. Utsagn c) er galt.`
    }
  ]
};
