import { ExerciseSet } from '../../types/course';

// Kilde: BUS220 høst 2026 – Oppgavesett0_Renteregning_2026.html + fasit (samme sett som i klasseromskurset).
export const oppgavesett0Renteregning: ExerciseSet = {
  id: "oppgavesett-0-renteregning",
  moduleId: "modul-2-tidverdi",
  title: "Oppgavesett 0: Renteregning",
  description: "Disse oppgavene dekker grunnleggende renteregning som du i utgangspunktet skal kunne fra VGS og mattekurs. Bruk dem til oppfriskning — ferdighetene er helt nødvendige for resten av kurset.",
  exercises: [
    {
      id: "os0-1",
      number: 1,
      difficulty: "easy",
      problemText: `Du setter inn kr 20 000 i dag og kr 8 000 om to år på en sparekonto i Ås Sparebank. Banken garanterer deg 4 % årlig rente i hele perioden.

Hvor mye har du på kontoen etter 5 år?`,
      solution: `De to innskuddene forrentes separat. Det første innskuddet forrentes i 5 år, det andre i 3 år (satt inn etter 2 år).

$$FV = 20\\,000 \\times 1{,}04^5 + 8\\,000 \\times 1{,}04^3$$
$$= 24\\,333{,}06 + 8\\,998{,}91$$

**Svar:** $$= \\text{kr } 33\\,331{,}97$$`
    },
    {
      id: "os0-2",
      number: 2,
      difficulty: "easy",
      problemText: `Du plasserer kr 200 000 på en fastrentekonto med 4,5 % årlig rente og 4 års bindingstid. Rentene blir stående på kontoen.

Hvor mye renter har du opptjent i løpet av de fire årene?`,
      solution: `Sluttverdien av innskuddet etter 4 år:

$$FV = 200\\,000 \\times 1{,}045^4 = 200\\,000 \\times 1{,}1925 = 238\\,503{,}72$$

Opptjente renter er differansen mellom sluttverdi og innskudd:

$$\\text{Renter} = 238\\,503{,}72 - 200\\,000$$

**Svar:** $$= \\text{kr } 38\\,503{,}72$$`
    },
    {
      id: "os0-3",
      number: 3,
      difficulty: "easy",
      problemText: `Kr 50 000 settes på en sparekonto som gir 3 % rente p.a. Rentene heves ikke, men blir stående på konto til innskuddet tas ut og kontoen avsluttes.`,
      subParts: [
        { label: "a", text: `Hvilket beløp står på kontoen etter hhv. 1, 2, 3, 4 og 5 spareår?`, solution: `$$\\begin{array}{|c|c|} \\hline \\textbf{År} & \\textbf{Saldo (kr)} \\\\ \\hline \\text{0} & \\text{50 000,00} \\\\ \\text{1} & \\text{51 500,00} \\\\ \\text{2} & \\text{53 045,00} \\\\ \\text{3} & \\text{54 636,35} \\\\ \\text{4} & \\text{56 275,44} \\\\ \\text{5} & \\text{57 963,70} \\\\ \\hline \\end{array}$$

Generelt: $FV_t = 50\\,000 \\times 1{,}03^t$` },
        { label: "b", text: `Beregn årlig rentegodtgjørelse i hvert av de fem årene. Vis hva som er enkel rente og hva som er rentes rente.`, solution: `Enkel rente per år = $50\\,000 \\times 0{,}03 = 1\\,500$ kr. Rentes rente er den delen av årets rentegodtgjørelse som skyldes at tidligere renter har fått rente.

$$\\begin{array}{|c|c|c|c|} \\hline \\textbf{År} & \\textbf{Total rente (kr)} & \\textbf{Enkel rente (kr)} & \\textbf{Rentes rente (kr)} \\\\ \\hline \\text{1} & \\text{1 500,00} & \\text{1 500,00} & \\text{0,00} \\\\ \\text{2} & \\text{1 545,00} & \\text{1 500,00} & \\text{45,00} \\\\ \\text{3} & \\text{1 591,35} & \\text{1 500,00} & \\text{91,35} \\\\ \\text{4} & \\text{1 639,09} & \\text{1 500,00} & \\text{139,09} \\\\ \\text{5} & \\text{1 688,26} & \\text{1 500,00} & \\text{188,26} \\\\ \\hline \\end{array}$$` },
        { label: "c", text: `Hva ville sluttverdien vært dersom rentene ble tatt ut av kontoen hvert år (dvs. kun enkel rente)?`, solution: `Med kun enkel rente tas rentene ut hvert år, slik at grunnlaget alltid er 50 000:

$$FV_{\\text{enkel}} = 50\\,000 + 5 \\times 1\\,500$$

**Svar:** $$= \\text{kr } 57\\,500$$` },
        { label: "d", text: `Beregn den andel samlet rentes rente utgjør av totalrenten etter 5 år.`, solution: `Total rente med rentes rente: $57\\,963{,}70 - 50\\,000 = 7\\,963{,}70$ kr

Total enkel rente: $5 \\times 1\\,500 = 7\\,500$ kr

Samlet rentes rente: $7\\,963{,}70 - 7\\,500 = 463{,}70$ kr

$$\\text{Andel} = \\frac{463{,}70}{7\\,963{,}70}$$

**Svar:** $$= 5{,}82\\,\\%$$` },
        { label: "e", text: `Hva ville andelen rentes rente vært dersom pengene stod på kontoen i 25 år?`, solution: `$FV_{25} = 50\\,000 \\times 1{,}03^{25} = 104\\,688{,}90$

Total rente: $104\\,688{,}90 - 50\\,000 = 54\\,688{,}90$

Enkel rente: $25 \\times 1\\,500 = 37\\,500$

Rentes rente: $54\\,688{,}90 - 37\\,500 = 17\\,188{,}90$

$$\\text{Andel} = \\frac{17\\,188{,}90}{54\\,688{,}90}$$

**Svar:** $$= 31{,}43\\,\\%$$

Over lengre tidsperioder utgjør rentes rente en stadig større andel av totalrenten.` },
      ],
      solution: ``
    },
    {
      id: "os0-4",
      number: 4,
      difficulty: "easy",
      problemText: `Du har kr 80 000 på en sparekonto som gir 6 % årlig rente. Du trenger kr 120 000 for å kjøpe en bruktbil.

Hvor mange år må du vente før du har nok? Rund av til nærmeste hele år.`,
      solution: `Vi løser for $t$:

$$80\\,000 \\times 1{,}06^t = 120\\,000$$
$$1{,}06^t = \\frac{120\\,000}{80\\,000} = 1{,}5$$
$$t = \\frac{\\ln(1{,}5)}{\\ln(1{,}06)} = \\frac{0{,}4055}{0{,}0583} = 6{,}96$$

**Svar:** $$\\approx 7 \\text{ år}$$`
    },
    {
      id: "os0-5",
      number: 5,
      difficulty: "easy",
      problemText: `Du har nettopp fått ditt første barnebarn og ønsker å gi barnebarnet kr 200 000 på 18-årsdagen. Du kan plassere penger i banken til en fast rente på 3,5 % per år.

Hvor mye må du sette inn i banken i dag?`,
      solution: `Vi diskonterer 200 000 tilbake 18 år:

$$PV = \\frac{200\\,000}{1{,}035^{18}} = \\frac{200\\,000}{1{,}8575}$$

**Svar:** $$= \\text{kr } 107\\,672$$`
    },
    {
      id: "os0-6",
      number: 6,
      difficulty: "easy",
      problemText: `Hva foretrekker du: kr 50 000 i dag eller kr 70 000 om 5 år? Anta at diskonteringsrenten er 6 %.

Vis beregningen som underbygger svaret ditt.`,
      solution: `Vi kan sammenligne ved å beregne nåverdi av begge, eller sluttverdi av begge.

**Metode 1 — Nåverdi:**

$$PV_1 = 50\\,000$$
$$PV_2 = \\frac{70\\,000}{1{,}06^5} = \\frac{70\\,000}{1{,}3382} = 52\\,308$$

**Metode 2 — Sluttverdi:**

$$FV_1 = 50\\,000 \\times 1{,}06^5 = 66\\,911$$
$$FV_2 = 70\\,000$$

Uansett metode er alternativ 2 best.

**Svar:** Du foretrekker kr 70 000 om 5 år (høyere nåverdi: 52 308 > 50 000).`
    },
    {
      id: "os0-7",
      number: 7,
      difficulty: "medium",
      problemText: `Du har vunnet i Lotto og kan velge mellom to utbetalingsmåter:

• Alternativ 1: kr 5 000 000 om 2 år
• Alternativ 2: kr 8 000 000 om 6 år

Hva velger du dersom diskonteringsrenten er:`,
      subParts: [
        { label: "a", text: `5 prosent?`, solution: `$$PV_1 = \\frac{5\\,000\\,000}{1{,}05^2} = \\frac{5\\,000\\,000}{1{,}1025} = 4\\,535\\,147$$
$$PV_2 = \\frac{8\\,000\\,000}{1{,}05^6} = \\frac{8\\,000\\,000}{1{,}3401} = 5\\,969\\,723$$

**Svar:** Velger alternativ 2 (NV = 5 969 723 > 4 535 147).` },
        { label: "b", text: `15 prosent?`, solution: `$$PV_1 = \\frac{5\\,000\\,000}{1{,}15^2} = \\frac{5\\,000\\,000}{1{,}3225} = 3\\,780\\,718$$
$$PV_2 = \\frac{8\\,000\\,000}{1{,}15^6} = \\frac{8\\,000\\,000}{2{,}3131} = 3\\,458\\,621$$

**Svar:** Velger alternativ 1 (NV = 3 780 718 > 3 458 621).` },
        { label: "c", text: `Hvilken diskonteringsrente gjør deg likegyldig mellom de to alternativene?`, solution: `Sett nåverdiene lik hverandre:

$$\\frac{5\\,000\\,000}{(1+r)^2} = \\frac{8\\,000\\,000}{(1+r)^6}$$

Multipliser begge sider med $(1+r)^6$:

$$5\\,000\\,000 \\times (1+r)^4 = 8\\,000\\,000$$
$$(1+r)^4 = \\frac{8}{5} = 1{,}6$$
$$1+r = 1{,}6^{1/4} = 1{,}1247$$

**Svar:** $$r = 12{,}47\\,\\%$$

For $r < 12{,}47\\,\\%$ velges alt. 2 (det fjerne beløpet), for $r > 12{,}47\\,\\%$ velges alt. 1 (det nære beløpet). Høyere diskonteringsrente gjør ventetid mer «kostbar».` },
      ],
      solution: ``
    },
    {
      id: "os0-8",
      number: 8,
      difficulty: "easy",
      problemText: `Du arver kr 300 000 fra en fjern slektning i utlandet. Om 8 år skal du innfri et rentefritt lån fra familien på kr 300 000. Du får tilbud fra banken om en garantert rente på 4 % per år dersom du binder pengene i 8 år.

Du ønsker å bruke noe av arven med en gang, men samtidig sette av nok i banken til å dekke lånet om 8 år.

Hvor mye kan du bruke i dag?`,
      solution: `Du må sette av nok i dag slik at det vokser til 300 000 om 8 år:

$$\\text{Avsetning} = \\frac{300\\,000}{1{,}04^8} = \\frac{300\\,000}{1{,}3686} = 219\\,207$$

Resten av arven kan brukes:

$$\\text{Til forbruk} = 300\\,000 - 219\\,207$$

**Svar:** $$= \\text{kr } 80\\,793$$`
    },
    {
      id: "os0-9",
      number: 9,
      difficulty: "medium",
      problemText: `Din onkel vil gjerne gi deg penger, men du må overbevise ham om at du kan velge det økonomisk smarteste alternativet. Han tilbyr deg fire alternative måter å motta pengene på. Du kan regne med en fast rente på 5 % per år.

• 250 000 kroner i dag
• 280 000 kroner om 2 år
• 35 000 kroner per år i 10 år (første utbetaling om ett år)
• 400 000 kroner om 5 år

Hvilket alternativ velger du? Valget skal underbygges med beregninger.`,
      hints: ["Sammenlign nåverdien av alle alternativene."],
      solution: `Vi beregner nåverdien (NV) av hvert alternativ med $r = 5\\,\\%$:

**Alternativ 1:** 250 000 i dag

$$NV_1 = 250\\,000$$

**Alternativ 2:** 280 000 om 2 år

$$NV_2 = \\frac{280\\,000}{1{,}05^2} = \\frac{280\\,000}{1{,}1025} = 253\\,968$$

**Alternativ 3:** 35 000 per år i 10 år (annuitet)

$$NV_3 = 35\\,000 \\times \\frac{1 - 1{,}05^{-10}}{0{,}05} = 35\\,000 \\times 7{,}7217 = 270\\,261$$

**Alternativ 4:** 400 000 om 5 år

$$NV_4 = \\frac{400\\,000}{1{,}05^5} = \\frac{400\\,000}{1{,}2763} = 313\\,410$$

**Svar:** Velger alternativ 4 med NV = kr 313 410 (høyest nåverdi).`
    },
    {
      id: "os0-10",
      number: 10,
      difficulty: "medium",
      problemText: `I dag fikk du ditt første barn. I glede inngår du en spareavtale med banken. Avtalen innebærer at du setter inn kr 5 000 hvert år på barnets bursdag, første gang på ettårsdagen og siste gang på 18-årsdagen. Renten er 4 % per år i hele spareperioden.

Hvor mye penger kan barnet ditt ta ut på 18-årsdagen?`,
      solution: `Dette er sluttverdien av en ordinær annuitet med 18 innbetalinger:

$$FV = C \\times \\frac{(1+r)^n - 1}{r} = 5\\,000 \\times \\frac{1{,}04^{18} - 1}{0{,}04}$$
$$= 5\\,000 \\times \\frac{2{,}0258 - 1}{0{,}04} = 5\\,000 \\times 25{,}6454$$

**Svar:** $$= \\text{kr } 128\\,227$$`
    },
    {
      id: "os0-11",
      number: 11,
      difficulty: "medium",
      problemText: `Anta at du setter inn kr 2 000 på en konto i slutten av hvert av de neste 5 årene. Du får en avkastning på 8 % årlig.

Hvor mye vil du ha på kontoen ved slutten av det 9. året?`,
      solution: `**Steg 1:** Beregn sluttverdien av annuiteten ved slutten av år 5:

$$FV_5 = 2\\,000 \\times \\frac{1{,}08^5 - 1}{0{,}08} = 2\\,000 \\times 5{,}8666 = 11\\,733$$

**Steg 2:** Beløpet står urørt i ytterligere 4 år (år 6–9) og forrentes:

$$FV_9 = 11\\,733 \\times 1{,}08^4 = 11\\,733 \\times 1{,}3605$$

**Svar:** $$= \\text{kr } 15\\,963$$`
    },
    {
      id: "os0-12",
      number: 12,
      difficulty: "medium",
      problemText: `Du mottar en gave på kr 40 000 den 01.01.2027 og en gave på kr 30 000 den 01.01.2028. Du ønsker å ha kr 50 000 til disposisjon 31.12.2028. Renten er 4 % per år.

Forutsatt at du ikke bruker noe av pengene fra 2027-gaven i 2027, hvor mye kan du maksimalt ta ut til forbruk den 01.01.2028?`,
      solution: `**Steg 1:** 2027-gaven vokser fra 01.01.2027 til 01.01.2028:

$$40\\,000 \\times 1{,}04 = 41\\,600$$

**Steg 2:** Total tilgjengelig 01.01.2028:

$$41\\,600 + 30\\,000 = 71\\,600$$

**Steg 3:** Beløpet som må stå igjen for å bli 50 000 den 31.12.2028:

$$\\text{Nødvendig saldo} = \\frac{50\\,000}{1{,}04} = 48\\,077$$

**Steg 4:** Maks uttak:

$$71\\,600 - 48\\,077$$

**Svar:** $$= \\text{kr } 23\\,523$$`
    },
    {
      id: "os0-13",
      number: 13,
      difficulty: "hard",
      problemText: `Du vinner en tv-konkurranse og kan velge mellom følgende premier:

1. 100 000 kroner som utbetales om ett år
2. 15 000 kroner hvert år til evig tid, første utbetaling i dag
3. 12 000 kroner per år i 12 år, første utbetaling om ett år
4. 6 000 kroner per år til evig tid med 3 % årlig vekst, første utbetaling om ett år`,
      subParts: [
        { label: "a", text: `Dersom kapitalkostnaden er 10 %, hvilken premie velger du?`, solution: `**Premie 1:** 100 000 om ett år

$$PV_1 = \\frac{100\\,000}{1{,}10} = 90\\,909$$

**Premie 2:** 15 000 per år til evig tid, første utbetaling i dag (forskuddsperpetuitet)

$$PV_2 = 15\\,000 + \\frac{15\\,000}{0{,}10} = 15\\,000 + 150\\,000 = 165\\,000$$

**Premie 3:** 12 000 per år i 12 år (ordinær annuitet)

$$PV_3 = 12\\,000 \\times \\frac{1 - 1{,}10^{-12}}{0{,}10} = 12\\,000 \\times 6{,}8137 = 81\\,764$$

**Premie 4:** 6 000 per år til evig tid med 3 % vekst (voksende perpetuitet)

$$PV_4 = \\frac{6\\,000}{0{,}10 - 0{,}03} = \\frac{6\\,000}{0{,}07} = 85\\,714$$

$$\\begin{array}{|c|c|} \\hline \\textbf{Premie} & \\textbf{NV (kr)} \\\\ \\hline \\text{1} & \\text{90 909} \\\\ \\text{2} & \\text{165 000} \\\\ \\text{3} & \\text{81 764} \\\\ \\text{4} & \\text{85 714} \\\\ \\hline \\end{array}$$

**Svar:** Velger premie 2 (NV = kr 165 000).` },
        { label: "b", text: `Dersom kapitalkostnaden er 4 %, hvilken premie velger du?`, solution: `**Premie 1:**

$$PV_1 = \\frac{100\\,000}{1{,}04} = 96\\,154$$

**Premie 2:**

$$PV_2 = 15\\,000 + \\frac{15\\,000}{0{,}04} = 15\\,000 + 375\\,000 = 390\\,000$$

**Premie 3:**

$$PV_3 = 12\\,000 \\times \\frac{1 - 1{,}04^{-12}}{0{,}04} = 12\\,000 \\times 9{,}3851 = 112\\,621$$

**Premie 4:**

$$PV_4 = \\frac{6\\,000}{0{,}04 - 0{,}03} = \\frac{6\\,000}{0{,}01} = 600\\,000$$

$$\\begin{array}{|c|c|} \\hline \\textbf{Premie} & \\textbf{NV (kr)} \\\\ \\hline \\text{1} & \\text{96 154} \\\\ \\text{2} & \\text{390 000} \\\\ \\text{3} & \\text{112 621} \\\\ \\text{4} & \\text{600 000} \\\\ \\hline \\end{array}$$

**Svar:** Velger premie 4 (NV = kr 600 000).

Merk: Med lavere diskonteringsrente blir den voksende perpetuiteten mye mer verdt fordi nevneren $(r - g)$ blir svært liten. Dette illustrerer hvor sensitiv verdsettelse av voksende kontantstrømmer er overfor diskonteringsrenten.` },
      ],
      hints: ["Husk formlene for perpetuitet ($C/r$), annuitet, og voksende perpetuitet ($C/(r-g)$). Premie 2 er en forskuddsannuitet (perpetuitet med første utbetaling i dag)."],
      solution: ``
    }
  ]
};
