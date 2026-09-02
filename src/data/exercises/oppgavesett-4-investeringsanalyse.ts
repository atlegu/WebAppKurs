import { ExerciseSet } from '../../types/course';

// Kilde: BUS220 høst 2026 – Oppgavesett4_Investeringsanalyse_2026.html + fasit (samme sett som i klasseromskurset).
export const oppgavesett4Investeringsanalyse: ExerciseSet = {
  id: "oppgavesett-4-investeringsanalyse",
  moduleId: "modul-7-investeringsanalyse",
  title: "Oppgavesett 4: Investeringsanalyse",
  description: "Pensum: HRWJ kapittel 5 og 6",
  exercises: [
    {
      id: "os4-1",
      number: 1,
      difficulty: "medium",
      problemText: `Norsk Fisk AS vurderer å skifte ut sin gamle produksjonslinje. To alternative teknologier foreligger. Alternativ A koster kr 130 000 og beregnes å vare i 12 år hvorpå utstyret må skrotes. A gir en forventet årlig netto kontantstrøm på kr 24 000. Alternativ B koster kr 95 000, forventes å holde i 7 år og forventes å generere en netto kontantstrøm på kr 22 000 hvert år.

Valget av teknologi (A eller B) vil låse valget ved framtidige utskiftinger av utstyr. Norsk Fisk har beregnet sin totale kapitalkostnad til 10 %.

Hvilket alternativ bør velges?`,
      hints: ["Ulik levetid — bruk ekvivalente annuiteter."],
      solution: `Prosjektene har ulik levetid og skal sammenlignes som kjedeinvesteringer — vi bruker ekvivalent annuitet (EAA).

**NPV for A:**

$$\\text{AF}(10\\,\\%;\\, 12) = \\frac{1 - 1{,}10^{-12}}{0{,}10} = 6{,}8137$$
$$\\text{NPV}(A) = -130\\,000 + 24\\,000 \\times 6{,}8137 = -130\\,000 + 163\\,529$$

**Svar:** $$= 33\\,529$$

**NPV for B:**

$$\\text{AF}(10\\,\\%;\\, 7) = \\frac{1 - 1{,}10^{-7}}{0{,}10} = 4{,}8684$$
$$\\text{NPV}(B) = -95\\,000 + 22\\,000 \\times 4{,}8684 = -95\\,000 + 107\\,105$$

**Svar:** $$= 12\\,105$$

**Ekvivalent annuitet:**

$$\\text{EAA}(A) = \\frac{33\\,529}{6{,}8137} = 4\\,921$$
$$\\text{EAA}(B) = \\frac{12\\,105}{4{,}8684} = 2\\,486$$

**Svar:** Alternativ A bør velges fordi det har høyest EAA (4 921 > 2 486).

Selv om A krever en høyere investeringsutgift, genererer det mer verdiskaping per år over sin levetid. Dersom vi bare hadde sett på NPV alene, hadde A også vunnet — men med ulik levetid er det EAA som gir riktig sammenligningsgrunnlag for kjedeinvesteringer.`
    },
    {
      id: "os4-2",
      number: 2,
      difficulty: "easy",
      problemText: `Beregn internrenten for følgende prosjekt:`,
      tables: [{"headers":["År","Kontantstrøm"],"rows":[["0","−60 000"],["1","45 000"],["2","35 000"]]}],
      solution: `Internrenten er den renten som gir NPV = 0:

$$-60\\,000 + \\frac{45\\,000}{1+r} + \\frac{35\\,000}{(1+r)^2} = 0$$

Sett $x = \\frac{1}{1+r}$ og multipliser med 1 000:

$$35x^2 + 45x - 60 = 0$$
$$7x^2 + 9x - 12 = 0$$

Andregradsformelen gir:

$$x = \\frac{-9 + \\sqrt{81 + 336}}{14} = \\frac{-9 + \\sqrt{417}}{14} = \\frac{-9 + 20{,}421}{14} = 0{,}8158$$

$$r = \\frac{1}{x} - 1 = \\frac{1}{0{,}8158} - 1$$

**Svar:** $$\\text{IRR} = 22{,}59\\,\\%$$`
    },
    {
      id: "os4-3",
      number: 3,
      difficulty: "medium",
      problemText: `Et prosjekt har følgende kontantstrømmer i periodene 0, 1 og 2: −200, 520, −330.

Bør prosjektet gjennomføres dersom avkastningskravet til prosjektet er 15 %?

Forklar kort hvorfor internrentemetoden er lite egnet som beslutningskriterium i dette tilfellet.`,
      solution: `**NPV ved 15 %:**

$$\\text{NPV} = -200 + \\frac{520}{1{,}15} + \\frac{-330}{1{,}15^2} = -200 + 452{,}17 - 249{,}53$$

**Svar:** $$= 2{,}65 > 0$$

Siden NPV er positiv, bør prosjektet gjennomføres.

**Hvorfor IRR er problematisk:**

Prosjektet har to internrenter: 10 % og 50 %. Dette kan vises ved å sette NPV = 0 og la $y = 1+r$:

$$-200y^2 + 520y - 330 = 0$$
$$200y^2 - 520y + 330 = 0 \\quad \\Rightarrow \\quad 20y^2 - 52y + 33 = 0$$

som gir $y = 1{,}10$ (dvs. $r = 10\\,\\%$) og $y = 1{,}50$ (dvs. $r = 50\\,\\%$).

Kontantstrømmen skifter fortegn to ganger ($-$, $+$, $-$), noe som gir opphav til to internrenter. Hvilken av de to skal man velge? Det er ingen entydig «hurdle rate»-sammenligning. NPV-metoden er den eneste pålitelige metoden her.`
    },
    {
      id: "os4-4",
      number: 4,
      difficulty: "medium",
      problemText: `Securus vurderer å skifte ut en maskin. Det er usikkerhet om hvorvidt man bør anskaffe en tysk maskin (A) eller en svensk (B). Følgende informasjon foreligger:

• **A:** Koster kr 90 000. Netto kontantstrøm bidrag kr 20 000 pr. år i 8 år. Null utrangeringsverdi etter 8 år.
• **B:** Koster kr 70 000. Netto kontantstrøm bidrag kr 20 000 pr. år i 5 år. Null utrangeringsverdi etter 5 år.

Securus benytter en kapitalkostnad på 12 %. Valget Securus gjør i dag, vil binde selskapet opp til samme leverandør når maskinen igjen skal skiftes ut etter 5 eller 8 år.

Hvilket alternativ anbefaler du?`,
      solution: `**NPV for A:**

$$\\text{AF}(12\\,\\%;\\, 8) = \\frac{1 - 1{,}12^{-8}}{0{,}12} = 4{,}9676$$
$$\\text{NPV}(A) = -90\\,000 + 20\\,000 \\times 4{,}9676 = -90\\,000 + 99\\,353$$

**Svar:** $$= 9\\,353$$

**NPV for B:**

$$\\text{AF}(12\\,\\%;\\, 5) = \\frac{1 - 1{,}12^{-5}}{0{,}12} = 3{,}6048$$
$$\\text{NPV}(B) = -70\\,000 + 20\\,000 \\times 3{,}6048 = -70\\,000 + 72\\,096$$

**Svar:** $$= 2\\,096$$

**Ekvivalent annuitet:**

$$\\text{EAA}(A) = \\frac{9\\,353}{4{,}9676} = 1\\,883$$
$$\\text{EAA}(B) = \\frac{2\\,096}{3{,}6048} = 581$$

**Svar:** Maskin A anbefales — den har klart høyest EAA (1 883 > 581).`
    },
    {
      id: "os4-5",
      number: 5,
      difficulty: "easy",
      problemText: `En investering vil gi følgende kontantstrøm ved utgangen av året:

Bruk en kalkulasjonsrente på 12 % og beregn den ekvivalente 3-årige annuiteten til denne kontantstrømmen.`,
      tables: [{"headers":["Utgangen av år","Kontantstrøm"],"rows":[["1","kr 25 000"],["2","kr 35 000"],["3","kr 20 000"]]}],
      solution: `**Nåverdi av kontantstrømmen:**

$$\\text{PV} = \\frac{25\\,000}{1{,}12} + \\frac{35\\,000}{1{,}12^2} + \\frac{20\\,000}{1{,}12^3} = 22\\,321 + 27\\,902 + 14\\,236$$

**Svar:** $$= 64\\,459$$

**Ekvivalent annuitet:**

$$\\text{AF}(12\\,\\%;\\, 3) = \\frac{1 - 1{,}12^{-3}}{0{,}12} = 2{,}4018$$
$$\\text{EA} = \\frac{64\\,459}{2{,}4018}$$

**Svar:** $$= 26\\,837$$

Den ujevne kontantstrømmen tilsvarer å motta kr 26 837 hvert år i tre år.`
    },
    {
      id: "os4-6",
      number: 6,
      difficulty: "medium",
      problemText: `AS Turbo vurderer to gjensidig utelukkende investeringer (D og E) i nytt utstyr som vil øke produksjonskapasiteten. Turbo benytter et avkastningskrav på 12 %. De to alternativene har følgende kontantstrømmer:`,
      tables: [{"headers":["År","Investering D","Investering E"],"rows":[["0","−60 000","−60 000"],["1","28 000","16 000"],["2","28 000","16 000"],["3","28 000","16 000"],["4","","16 000"],["5","","16 000"],["6","","16 000"]]}],
      subParts: [
        { label: "a", text: `Beregn netto nåverdier for D og E.`, solution: `$$\\text{NPV}(D) = -60\\,000 + 28\\,000 \\times \\text{AF}(12\\,\\%;\\, 3) = -60\\,000 + 28\\,000 \\times 2{,}4018$$

**Svar:** $$= 7\\,251$$

$$\\text{NPV}(E) = -60\\,000 + 16\\,000 \\times \\text{AF}(12\\,\\%;\\, 6) = -60\\,000 + 16\\,000 \\times 4{,}1114$$

**Svar:** $$= 5\\,783$$

Ser vi kun på NPV, ville vi valgt D.` },
        { label: "b", text: `Anta at investeringene skal gjentas («kjedeinvesteringer») og at dersom man først har valgt det ene alternativet, så må man fortsette å investere i dette. Hvilket alternativ bør da velges?`, solution: `Ved kjedeinvesteringer bruker vi ekvivalent annuitet:

$$\\text{EAA}(D) = \\frac{7\\,251}{2{,}4018} = 3\\,019$$
$$\\text{EAA}(E) = \\frac{5\\,783}{4{,}1114} = 1\\,406$$

**Svar:** D bør velges — EAA(D) = 3 019 er klart høyere enn EAA(E) = 1 406.

D dominerer E både på engangsinvestering (NPV) og ved gjentatt investering (EAA).` },
      ],
      solution: ``
    },
    {
      id: "os4-7",
      number: 7,
      difficulty: "medium",
      problemText: `Miljødirektoratet har pålagt AS Utslipp å gjennomføre rensetiltak. Bedriften kan velge mellom to ulike renseteknologier. Begge tilfredsstiller kravene. Teknologi A innebærer en investering i en rensegenerator på kr 120 000. Generatoren har en levetid på tre år og årlige driftsutgifter på kr 12 000. Teknologi B koster kr 170 000 og har en levetid på fem år. Årlige driftsutgifter er kr 9 000. Utslipp anslår sine kapitalkostnader til 8 %.

Hvilken teknologi bør velges?`,
      solution: `Dette er et rent kostnadsproblem — vi velger det alternativet med lavest ekvivalent årskostnad (EAC).

**Teknologi A:**

$$\\text{AF}(8\\,\\%;\\, 3) = \\frac{1 - 1{,}08^{-3}}{0{,}08} = 2{,}5771$$
$$\\text{EAC}(A) = \\frac{120\\,000}{2{,}5771} + 12\\,000 = 46\\,564 + 12\\,000$$

**Svar:** $$= 58\\,564$$

**Teknologi B:**

$$\\text{AF}(8\\,\\%;\\, 5) = \\frac{1 - 1{,}08^{-5}}{0{,}08} = 3{,}9927$$
$$\\text{EAC}(B) = \\frac{170\\,000}{3{,}9927} + 9\\,000 = 42\\,578 + 9\\,000$$

**Svar:** $$= 51\\,578$$

**Svar:** Teknologi B bør velges — den har lavest EAC (51 578 &lt; 58 564).

Selv om B har høyere investeringskostnad, kompenserer den lengre levetiden og lavere driftskostnader for dette.`
    },
    {
      id: "os4-8",
      number: 8,
      difficulty: "medium",
      problemText: `Du har etter lange overveielser bestemt deg for å starte utleie av elsykler i Ås. Du har inngått en avtale med en leverandør om å få kjøpe 80 elsykler for 5 000 kroner per stykk. Du har videre analysert deg frem til at årlig vedlikeholdskostnad per sykkel er 250 kroner, og at de varer i 8 år. Skrapverdien er 0. Gitt at du har et avkastningskrav på 10 % på denne investeringen, hva må du minimum få inn i leieinntekter per sykkel per år?`,
      solution: `Minimum leieinntekt per sykkel tilsvarer den ekvivalente årskostnaden (EAC) per sykkel.

$$\\text{AF}(10\\,\\%;\\, 8) = \\frac{1 - 1{,}10^{-8}}{0{,}10} = 5{,}3349$$

Per sykkel:

$$\\text{EAC} = \\frac{5\\,000}{5{,}3349} + 250 = 937 + 250$$

**Svar:** $$= 1\\,187 \\text{ kr per sykkel per år}$$

For hele flåten: $1\\,187 \\times 80 = 94\\,978$ kr/år. Men oppgaven spør per sykkel.`
    },
    {
      id: "os4-9",
      number: 9,
      difficulty: "medium",
      problemText: `Du har regnet ut to nåverdier av et investeringsprosjekt:

Du skal gi et begrunnet svar på hvilket av alternativene nedenfor som ligger nærmest investeringsprosjektets internrente:`,
      tables: [{"headers":["Avkastningskrav","Nåverdi"],"rows":[["12 %","+ 350 000 kroner"],["22 %","− 750 000 kroner"]]},{"headers":[],"rows":[["13 %","15,2 %","19,5 %","24,3 %"]]}],
      solution: `Vi bruker lineær interpolasjon mellom de to nåverdiene for å estimere internrenten:

$$\\text{IRR} \\approx r_1 + \\frac{\\text{NPV}_1}{\\text{NPV}_1 - \\text{NPV}_2} \\times (r_2 - r_1)$$

$$= 0{,}12 + \\frac{350\\,000}{350\\,000 + 750\\,000} \\times (0{,}22 - 0{,}12)$$

$$= 0{,}12 + \\frac{350\\,000}{1\\,100\\,000} \\times 0{,}10 = 0{,}12 + 0{,}3182 \\times 0{,}10$$

**Svar:** $$\\text{IRR} \\approx 15{,}2\\,\\%$$

Av de oppgitte alternativene er **15,2 %** nærmest.

Merk at dette er en tilnærming — den faktiske NPV-kurven er konveks, ikke lineær, slik at interpolasjonen gir en tilnærmet verdi.`
    },
    {
      id: "os4-10",
      number: 10,
      difficulty: "medium",
      problemText: `Du eier en vindmøllepark som vil generere en kontantstrøm på 3 millioner kroner neste år. Driftskostnadene er minimale, og utstyret forventes å vare i svært lang tid. Dessverre ser det ut til at etterspørselen avtar, slik at kontantstrømmen deretter forventes å avta med 5 prosent årlig. Diskonteringsrenten er 8 prosent.`,
      subParts: [
        { label: "a", text: `Hva er nåverdien (NV) av vindmølleparkens kontantstrøm hvis man antar at den vil bli benyttet i all evighet (og kontantstrømmen avtar med 5 % årlig)?`, solution: `Selv med negativ vekst kan vi bruke Gordons modell — den fungerer så lenge $r > g$ (og her er $0{,}08 > -0{,}05$):

$$\\text{NV} = \\frac{\\text{CF}_1}{r - g} = \\frac{3\\,000\\,000}{0{,}08 - (-0{,}05)} = \\frac{3\\,000\\,000}{0{,}13}$$

**Svar:** $$= 23\\,076\\,923 \\approx 23{,}08 \\text{ mill. kr}$$` },
        { label: "b", text: `Hva er NV til kontantstrømmen dersom vindmølleparken må stenges om 15 år?`, solution: `Vi bruker formelen for en voksende annuitet (her med negativ vekst):

$$\\text{NV} = \\frac{\\text{CF}_1}{r - g}\\left[1 - \\left(\\frac{1+g}{1+r}\\right)^{15}\\right]$$

$$= \\frac{3\\,000\\,000}{0{,}13}\\left[1 - \\left(\\frac{0{,}95}{1{,}08}\\right)^{15}\\right]$$

$$= 23\\,076\\,923 \\times \\left[1 - 0{,}8796^{15}\\right]$$

$$= 23\\,076\\,923 \\times [1 - 0{,}1460]$$

**Svar:** $$= 19\\,706\\,568 \\approx 19{,}71 \\text{ mill. kr}$$

Til tross for at kontantstrømmen avtar raskt (den halveres omtrent hvert 14. år), er likevel 85 % av nåverdien konsentrert i de første 15 årene.` },
      ],
      solution: ``
    },
    {
      id: "os4-11",
      number: 11,
      difficulty: "easy",
      problemText: `Anta at du investerer kr 800 000 i et nytt prosjekt. Prosjektet vil gi det samme innbetalingsoverskuddet (kontantstrømmen) hvert år i de påfølgende 8 år. Prosjektets internrente er 14 %.

Du skal beregne det årlige innbetalingsoverskuddet.`,
      solution: `IRR er den renten som gir NPV = 0, dvs.:

$$800\\,000 = X \\times \\text{AF}(14\\,\\%;\\, 8)$$

$$\\text{AF}(14\\,\\%;\\, 8) = \\frac{1 - 1{,}14^{-8}}{0{,}14} = 4{,}6389$$

$$X = \\frac{800\\,000}{4{,}6389}$$

**Svar:** $$= 172\\,456$$`
    },
    {
      id: "os4-12",
      number: 12,
      difficulty: "hard",
      problemText: `Du skal velge mellom to gjensidig utelukkende investeringsprosjekter med ulik levetid. Begge prosjektene, A og B, har et investeringsutlegg i dag på kr 16 millioner. Prosjekt A varer i tre år og gir et årlig netto innbetalingsoverskudd på kr 8 millioner hvert år, mens prosjekt B bare varer i to år og gir et netto innbetalingsoverskudd på kr 11 millioner det første og kr 11 millioner det andre året. Avkastningskravet er 10 %.

Du kommer så på at du har glemt å ta hensyn til det faktum at investeringsobjektene kan selges ved slutten av hvert år. Utrangeringsverdien for prosjekt A er kr 13 millioner etter 1 år, kr 10 millioner etter 2 år og kr 6 millioner etter 3 år, mens den for prosjekt B er kr 11 millioner etter 1 år og kr 3 millioner etter 2 år.`,
      subParts: [
        { label: "a", text: `Basert på ovenstående opplysninger, hvilket prosjekt vil du velge hvis det er tale om en engangsinvestering?`, solution: `$$\\text{AF}(10\\,\\%;\\, 3) = \\frac{1 - 1{,}10^{-3}}{0{,}10} = 2{,}4869$$
$$\\text{NPV}(A) = -16 + 8 \\times 2{,}4869 = -16 + 19{,}895$$

**Svar:** $$= 3{,}895 \\text{ mill.}$$

$$\\text{AF}(10\\,\\%;\\, 2) = \\frac{1 - 1{,}10^{-2}}{0{,}10} = 1{,}7355$$
$$\\text{NPV}(B) = -16 + 11 \\times 1{,}7355 = -16 + 19{,}091$$

**Svar:** $$= 3{,}091 \\text{ mill.}$$

**Svar:** Ved engangsinvestering velges A (NPV 3,895 > 3,091).` },
        { label: "b", text: `Hvilket prosjekt vil du velge dersom det er mulig å gjenta dem på nytt over lang tid (i det uendelige) med de samme kontantstrømmene?`, solution: `$$\\text{EAA}(A) = \\frac{3{,}895}{2{,}4869} = 1{,}566 \\text{ mill.}$$
$$\\text{EAA}(B) = \\frac{3{,}091}{1{,}7355} = 1{,}781 \\text{ mill.}$$

**Svar:** Ved gjentatt investering velges B (EAA 1,781 > 1,566).

B genererer høyere verdiskaping per år, selv om total NPV per runde er lavere. Fordi B har kortere levetid, kan man reinvestere oftere og dermed oppnå en høyere samlet verdiskaping over tid.` },
        { label: "c", text: `Hva er det laveste (faste) netto innbetalingsoverskudd som prosjekt A må gi for at dette skal bli valgt under spørsmål a) og under spørsmål b)?`, solution: `**For at A skal velges under a):** $\\text{NPV}(A) \\geq \\text{NPV}(B)$

$$-16 + X \\times 2{,}4869 \\geq 3{,}091$$
$$X \\geq \\frac{19{,}091}{2{,}4869}$$

**Svar:** $$X \\geq 7{,}677 \\text{ mill. kr}$$

**For at A skal velges under b):** $\\text{EAA}(A) \\geq \\text{EAA}(B)$

$$\\frac{-16 + X \\times 2{,}4869}{2{,}4869} \\geq 1{,}781$$
$$X - \\frac{16}{2{,}4869} \\geq 1{,}781$$
$$X \\geq 1{,}781 + 6{,}434$$

**Svar:** $$X \\geq 8{,}215 \\text{ mill. kr}$$

Det kreves høyere kontantstrøm for A under b) enn under a) — nettopp fordi B har en fordel ved gjentatte investeringer som A ikke har med 8 M i årlig kontantstrøm.` },
        { label: "d", text: `Ved å ta hensyn til de nye opplysningene, hvilket prosjekt vil du nå velge dersom det er mulig å gjenta dem på nytt over lang tid (i det uendelige) med de samme kontantstrømmene? Hva er optimal levetid for det valgte prosjektet?`, solution: `Utrangeringsverdier: A = 13/10/6 M etter 1/2/3 år. B = 11/3 M etter 1/2 år.

Vi beregner NPV og EAA for hvert prosjekt ved ulike levetider:

$$\\begin{array}{|c|c|c|c|} \\hline \\textbf{Prosjekt} & \\textbf{Levetid} & \\textbf{NPV (mill.)} & \\textbf{EAA (mill.)} \\\\ \\hline \\text{A} & \\text{1 år} & \\frac{8+13}{1{,}10}-16 = 3{,}09 & \\text{3,40} \\\\ \\text{A} & \\text{2 år} & \\frac{8}{1{,}10}+\\frac{18}{1{,}21}-16 = 6{,}15 & \\text{3,54} \\\\ \\text{A} & \\text{3 år} & \\frac{8}{1{,}10}+\\frac{8}{1{,}21}+\\frac{14}{1{,}331}-16 = 8{,}40 & \\text{3,38} \\\\ \\text{B} & \\text{1 år} & \\frac{11+11}{1{,}10}-16 = 4{,}00 & \\text{**4,40**} \\\\ \\text{B} & \\text{2 år} & \\frac{11}{1{,}10}+\\frac{14}{1{,}21}-16 = 5{,}57 & \\text{3,21} \\\\ \\hline \\end{array}$$

**Svar:** B med levetid 1 år har høyest EAA (4,40 mill.) og bør velges.

Optimal strategi er å investere i B og selge allerede etter ett år for utrangeringsverdien på 11 mill. — og gjenta dette hvert år. Grunnen er at utrangeringsverdien til B faller svært mye fra år 1 til år 2 (fra 11 til 3 mill.), slik at det lønner seg å selge tidlig.` },
      ],
      solution: ``
    }
  ]
};
