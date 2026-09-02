import { ExerciseSet } from '../../types/course';

// Kilde: BUS220 høst 2026 – Oppgavesett5_RisikoOgAvkastning_2026.html + fasit (samme sett som i klasseromskurset).
export const oppgavesett5RisikoAvkastning: ExerciseSet = {
  id: "oppgavesett-5-risiko-avkastning",
  moduleId: "modul-5-portefolje",
  title: "Oppgavesett 5: Risiko og avkastning",
  description: "Pensum: HRWJ kapittel 10",
  exercises: [
    {
      id: "os5-1",
      number: 1,
      difficulty: "easy",
      problemText: `Du kjøpte 100 aksjer i Sjøstjerne ASA for ett år siden til kurs kr 120 per aksje. I løpet av året betalte selskapet kr 4 per aksje i utbytte. I dag selger du aksjene til kurs kr 138.`,
      subParts: [
        { label: "a", text: `Hva er din samlede gevinst i kroner?`, solution: `$$\\text{Gevinst} = 100 \\times (138 + 4 - 120) = 100 \\times 22$$

**Svar:** $$= \\text{kr } 2\\,200$$` },
        { label: "b", text: `Hva er total avkastning i prosent? Del opp i direkteavkastning (utbytte) og kursavkastning.`, solution: `$$\\text{Total} = \\frac{138 + 4 - 120}{120} = \\frac{22}{120}$$

**Svar:** $$= 18{,}33\\,\\%$$

Oppdelt:

$$\\text{Direkteavkastning} = \\frac{4}{120} = 3{,}33\\,\\%$$
$$\\text{Kursavkastning} = \\frac{138 - 120}{120} = \\frac{18}{120} = 15{,}00\\,\\%$$

Sum: $3{,}33\\,\\% + 15{,}00\\,\\% = 18{,}33\\,\\%$ ✓` },
      ],
      solution: ``
    },
    {
      id: "os5-2",
      number: 2,
      difficulty: "easy",
      problemText: `En aksje har hatt følgende årlige avkastning de fem siste årene:`,
      tables: [{"headers":["År","1","2","3","4","5"],"rows":[["Avkastning","14 %","−6 %","18 %","−2 %","10 %"]]}],
      subParts: [
        { label: "a", text: `Beregn aritmetisk gjennomsnittlig avkastning.`, solution: `$$\\bar{R} = \\frac{14 - 6 + 18 - 2 + 10}{5} = \\frac{34}{5}$$

**Svar:** $$= 6{,}80\\,\\%$$` },
        { label: "b", text: `Beregn varians og standardavvik (bruk $n-1$ i nevneren).`, solution: `Avvik fra snittet (i %): $7{,}2$, $-12{,}8$, $11{,}2$, $-8{,}8$, $3{,}2$.

Kvadrerte avvik: $51{,}84$, $163{,}84$, $125{,}44$, $77{,}44$, $10{,}24$ (i %²).

Sum: $428{,}80$ %²

$$\\text{Var} = \\frac{\\sum(R_i - \\bar{R})^2}{n - 1} = \\frac{428{,}80}{4} = 107{,}20 \\, \\%^2$$

**Svar:** $$\\sigma = \\sqrt{107{,}20} = 10{,}35\\,\\%$$` },
      ],
      solution: ``
    },
    {
      id: "os5-3",
      number: 3,
      difficulty: "medium",
      problemText: `En investering har hatt følgende årlige avkastning over fire år: 30 %, −20 %, 50 %, −10 %.`,
      subParts: [
        { label: "a", text: `Beregn aritmetisk gjennomsnittlig avkastning.`, solution: `$$\\bar{R}_a = \\frac{30 - 20 + 50 - 10}{4} = \\frac{50}{4}$$

**Svar:** $$= 12{,}50\\,\\%$$` },
        { label: "b", text: `Beregn geometrisk gjennomsnittlig avkastning.`, solution: `$$\\bar{R}_g = \\sqrt[4]{(1{,}30)(0{,}80)(1{,}50)(0{,}90)} - 1 = \\sqrt[4]{1{,}4040} - 1$$
$$= 1{,}0885 - 1$$

**Svar:** $$= 8{,}85\\,\\%$$` },
        { label: "c", text: `Forklar kort hvorfor de to gjennomsnittene er forskjellige. Hvilket bør brukes om man vil rapportere historisk faktisk vekst, og hvilket bør brukes for fremtidsforventning?`, solution: `Det geometriske snittet er alltid lavere enn (eller lik) det aritmetiske når avkastningene varierer. Forskjellen øker med volatiliteten.

Eksempel: Et tap på 50 % krever en gevinst på 100 % for å komme tilbake til utgangspunktet. Volatilitet «spiser» avkastning over tid.

• **Historisk faktisk vekst:** Bruk geometrisk snitt (1 kr ble til $1{,}404$ kr på fire år, tilsvarende 8,85 % årlig).
• **Forventet avkastning neste år:** Bruk aritmetisk snitt (gir et forventningsrett estimat av neste periodes avkastning).` },
      ],
      solution: ``
    },
    {
      id: "os5-4",
      number: 4,
      difficulty: "easy",
      problemText: `Risikofri rente er 2,5 % og forventet markedsavkastning er 9,0 %.`,
      subParts: [
        { label: "a", text: `Hva er markedets risikopremie?`, solution: `$$\\text{MRP} = E(R_m) - r_f = 9{,}0\\,\\% - 2{,}5\\,\\%$$

**Svar:** $$= 6{,}5\\,\\%$$` },
        { label: "b", text: `Forklar kort hva risikopremien representerer i økonomisk forstand.`, solution: `Risikopremien er den merhavkastningen investorene krever for å holde risikable markedsaksjer fremfor en risikofri plassering. Den representerer kompensasjon for den systematiske risikoen i markedet — den risikoen som ikke kan diversifiseres bort.` },
      ],
      solution: ``
    },
    {
      id: "os5-5",
      number: 5,
      difficulty: "medium",
      problemText: `Aksjen i Vekst AS forventes å ha følgende avkastning avhengig av økonomisk utvikling neste år:`,
      tables: [{"headers":["Tilstand","Sannsynlighet","Avkastning"],"rows":[["Oppgang","0,3","25 %"],["Normal","0,5","12 %"],["Nedgang","0,2","−8 %"]]}],
      subParts: [
        { label: "a", text: `Beregn forventet avkastning.`, solution: `$$E(R) = 0{,}3 \\times 25 + 0{,}5 \\times 12 + 0{,}2 \\times (-8) = 7{,}5 + 6{,}0 - 1{,}6$$

**Svar:** $$= 11{,}90\\,\\%$$` },
        { label: "b", text: `Beregn varians og standardavvik for avkastningen.`, solution: `Avvik fra forventning:

$$\\begin{array}{|c|c|c|c|} \\hline \\textbf{Tilstand} & \\boldsymbol{R - E(R)} & \\boldsymbol{(R - E(R))^2} & \\boldsymbol{p \\times (R - E(R))^2} \\\\ \\hline \\text{Oppgang} & 13{,}10 & 171{,}61 & 51{,}48 \\\\ \\text{Normal} & 0{,}10 & 0{,}01 & 0{,}005 \\\\ \\text{Nedgang} & -19{,}90 & 396{,}01 & 79{,}20 \\\\ \\text{**Sum**} & \\text{**} 130{,}69 \\text{**} \\\\ \\hline \\end{array}$$

$$\\text{Var}(R) = \\sum_i p_i \\times (R_i - E(R))^2 = 130{,}69 \\, \\%^2$$

**Svar:** $$\\sigma = \\sqrt{130{,}69} = 11{,}43\\,\\%$$` },
      ],
      solution: ``
    },
    {
      id: "os5-6",
      number: 6,
      difficulty: "easy",
      problemText: `Du eier en portefølje med 60 % investert i aksje A og 40 % i aksje B. Forventet avkastning er 14 % for A og 9 % for B.

Hva er porteføljens forventede avkastning?`,
      solution: `$$E(R_p) = w_A \\times E(R_A) + w_B \\times E(R_B) = 0{,}60 \\times 14 + 0{,}40 \\times 9$$
$$= 8{,}40 + 3{,}60$$

**Svar:** $$= 12{,}00\\,\\%$$`
    },
    {
      id: "os5-7",
      number: 7,
      difficulty: "medium",
      problemText: `Du vurderer en portefølje med to aksjer A og B fordelt 50/50. Informasjon:

Korrelasjonen mellom A og B er $\\rho_{AB} = 0{,}3$.`,
      tables: [{"headers":["","E(R)","Std.avvik"],"rows":[["Aksje A","15 %","25 %"],["Aksje B","8 %","12 %"]]}],
      subParts: [
        { label: "a", text: `Beregn porteføljens forventede avkastning og standardavvik.`, solution: `**Forventet avkastning:**

$$E(R_p) = 0{,}5 \\times 15 + 0{,}5 \\times 8 = 7{,}5 + 4{,}0$$

**Svar:** $$= 11{,}5\\,\\%$$

**Varians:**

$$\\sigma_p^2 = w_A^2 \\sigma_A^2 + w_B^2 \\sigma_B^2 + 2 w_A w_B \\rho_{AB} \\sigma_A \\sigma_B$$
$$= (0{,}5)^2 (25)^2 + (0{,}5)^2 (12)^2 + 2(0{,}5)(0{,}5)(0{,}3)(25)(12)$$
$$= 156{,}25 + 36{,}00 + 45{,}00 = 237{,}25 \\, \\%^2$$

**Svar:** $$\\sigma_p = \\sqrt{237{,}25} = 15{,}40\\,\\%$$` },
        { label: "b", text: `Sammenlign porteføljens standardavvik med det vektede gjennomsnittet av de to aksjenes standardavvik. Kommenter på diversifikasjonsgevinsten.`, solution: `Vektet gjennomsnitt av standardavvikene:

$$0{,}5 \\times 25 + 0{,}5 \\times 12 = 18{,}50\\,\\%$$

Porteføljens faktiske standardavvik er 15,40 % — altså **3,10 prosentpoeng lavere** enn det vektede snittet.

Diversifikasjonsgevinsten oppstår fordi korrelasjonen er $\\rho = 0{,}3 < 1$. Aksjene beveger seg ikke i takt, så svingninger delvis kanselleres ut.` },
      ],
      solution: ``
    },
    {
      id: "os5-8",
      number: 8,
      difficulty: "hard",
      problemText: `Bruk samme data som i oppgave 7 (50/50 portefølje med $\\sigma_A = 25\\,\\%$ og $\\sigma_B = 12\\,\\%$), men varier korrelasjonen.

Beregn porteføljens standardavvik for følgende verdier av $\\rho_{AB}$:

Forklar hvordan diversifikasjonsgevinsten endrer seg med korrelasjonen.`,
      subParts: [
        { label: "a", text: `$\\rho = 1{,}0$ (perfekt positiv samvariasjon)`, solution: `` },
        { label: "b", text: `$\\rho = 0$ (ingen samvariasjon)`, solution: `` },
        { label: "c", text: `$\\rho = -1{,}0$ (perfekt negativ samvariasjon)`, solution: `` },
      ],
      solution: `**Beregninger**
Fra oppgave 7: $w_A^2 \\sigma_A^2 + w_B^2 \\sigma_B^2 = 156{,}25 + 36 = 192{,}25$. Kryssleddet er $2 w_A w_B \\sigma_A \\sigma_B = 0{,}5 \\times 25 \\times 12 = 150$.

**a) $\\rho = 1{,}0$:**

$$\\sigma_p^2 = 192{,}25 + 1{,}0 \\times 150 = 342{,}25$$

**Svar:** $$\\sigma_p = 18{,}50\\,\\%$$

Lik det vektede gjennomsnittet — ingen diversifikasjonsgevinst.

**b) $\\rho = 0$:**

$$\\sigma_p^2 = 192{,}25 + 0 = 192{,}25$$

**Svar:** $$\\sigma_p = 13{,}87\\,\\%$$

**c) $\\rho = -1{,}0$:**

$$\\sigma_p^2 = 192{,}25 - 150 = 42{,}25$$

**Svar:** $$\\sigma_p = 6{,}50\\,\\%$$

**Konklusjon**
$$\\begin{array}{|c|c|c|} \\hline \\boldsymbol{\\rho} & \\boldsymbol{\\sigma_p} & \\textbf{Gevinst (pp)} \\\\ \\hline +1{,}0 & 18{,}50\\,\\% & 0{,}00 \\\\ +0{,}3 & 15{,}40\\,\\% & 3{,}10 \\\\ 0 & 13{,}87\\,\\% & 4{,}63 \\\\ -1{,}0 & 6{,}50\\,\\% & 12{,}00 \\\\ \\hline \\end{array}$$

Diversifikasjonsgevinsten øker monotont når korrelasjonen synker. Ved $\\rho = -1$ kan en velegnet vekting til og med eliminere risikoen fullstendig (en form for hedging). Ved $\\rho = +1$ er det ingen gevinst — aksjene beveger seg perfekt i takt.`
    },
    {
      id: "os5-9",
      number: 9,
      difficulty: "easy",
      problemText: `Du har satt sammen følgende portefølje:

Hva er porteføljens forventede avkastning?`,
      tables: [{"headers":["Aksje","Vekt","E(R)"],"rows":[["Sjø","40 %","12 %"],["Land","35 %","8 %"],["Luft","25 %","18 %"]]}],
      solution: `$$E(R_p) = 0{,}40 \\times 12 + 0{,}35 \\times 8 + 0{,}25 \\times 18$$
$$= 4{,}80 + 2{,}80 + 4{,}50$$

**Svar:** $$= 12{,}10\\,\\%$$`
    },
    {
      id: "os5-10",
      number: 10,
      difficulty: "medium",
      problemText: `Besvar følgende konseptuelle spørsmål kortfattet:`,
      subParts: [
        { label: "a", text: `Forklar hva som menes med systematisk og usystematisk risiko. Gi ett eksempel på hver.`, solution: `**Systematisk risiko** (markedsrisiko) påvirker alle (eller mange) aksjer samtidig. Eksempler: endringer i rente, konjunkturer, valutakurser, geopolitiske kriser.

**Usystematisk risiko** (selskapsspesifikk risiko) gjelder ett enkelt selskap eller en bestemt bransje. Eksempler: produkttilbakekalling, streik, ledelsesfeil, tap av en stor kunde.` },
        { label: "b", text: `Hvilken av disse to risikotypene kan reduseres ved diversifisering, og hvorfor?`, solution: `Bare den **usystematiske risikoen**. Når du holder mange aksjer, vil selskapsspesifikke hendelser hos ulike selskaper delvis utligne hverandre — positive nyheter i ett selskap motvirker negative nyheter i et annet. Systematisk risiko rammer alle aksjer i samme retning og kan derfor ikke diversifiseres bort.` },
        { label: "c", text: `For hvilken type risiko får en investor kompensasjon i form av høyere forventet avkastning? Begrunn svaret.`, solution: `Investorer får kompensasjon (i form av høyere forventet avkastning) kun for **systematisk risiko**. Logikken: usystematisk risiko kan elimineres kostnadsfritt gjennom diversifisering, så et velfungerende marked vil ikke belønne investorer for å bære risiko de selv kunne valgt bort.

Dette er det grunnleggende prinsippet bak CAPM, der bare beta (systematisk risiko) inngår som risikomål — ikke totalrisiko.` },
        { label: "d", text: `Hvor mange aksjer trengs vanligvis for å oppnå mesteparten av diversifikasjonsgevinsten i en aksjeportefølje?`, solution: `Empiriske studier viser at man oppnår mesteparten av diversifikasjonsgevinsten med **20–30 godt spredte aksjer**. Standardavviket faller raskt opp til rundt 20 aksjer, deretter blir gevinsten marginal. Det er imidlertid umulig å komme under markedets standardavvik — det er undergrensen som ikke kan diversifiseres bort.` },
      ],
      solution: ``
    }
  ]
};
