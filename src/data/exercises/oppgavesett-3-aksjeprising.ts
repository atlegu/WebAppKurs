import { ExerciseSet } from '../../types/course';

// Kilde: BUS220 høst 2026 – Oppgavesett3_Aksjeprising_2026.html + fasit (samme sett som i klasseromskurset).
export const oppgavesett3Aksjeprising: ExerciseSet = {
  id: "oppgavesett-3-aksjeprising",
  moduleId: "modul-4-aksjer",
  title: "Oppgavesett 3: Aksjeprising",
  description: "Pensum: HRWJ kapittel 9",
  exercises: [
    {
      id: "os3-1",
      number: 1,
      difficulty: "easy",
      problemText: `Norsk Sjømat ASA utbetalte i går kr 3 per aksje i dividende. Du forventer en jevn vekst i dividenden på 5 % p.a.`,
      subParts: [
        { label: "a", text: `Hva er forventet dividende i hvert av de tre neste årene?`, solution: `$$D_1 = D_0 \\times (1+g) = 3 \\times 1{,}05 = 3{,}15$$
$$D_2 = 3 \\times 1{,}05^2 = 3{,}3075$$
$$D_3 = 3 \\times 1{,}05^3 = 3{,}4729$$` },
        { label: "b", text: `Hvis avkastningskravet for aksjen er 11 %, hva vil aksjen omsettes for?`, solution: `Gordons vekstmodell:

$$P_0 = \\frac{D_1}{r - g} = \\frac{3{,}15}{0{,}11 - 0{,}05} = \\frac{3{,}15}{0{,}06}$$

**Svar:** $$= \\text{kr } 52{,}50$$` },
        { label: "c", text: `Hva er forventet aksjekurs om tre år?`, solution: `$$P_3 = \\frac{D_4}{r - g} = \\frac{D_0 \\times (1{,}05)^4}{0{,}06} = \\frac{3{,}6465}{0{,}06}$$

**Svar:** $$= \\text{kr } 60{,}78$$` },
        { label: "d", text: `Hvis du kjøper aksjen og sitter med den i tre år og da selger, hvilke betalinger vil du motta hvert år? Hva er nåverdien (NV) av disse betalingene?`, solution: `Dine betalinger som eier i tre år:

$$\\begin{array}{|c|c|c|c|} \\hline \\textbf{} & \\textbf{År 1} & \\textbf{År 2} & \\textbf{År 3} \\\\ \\hline \\text{Dividende} & \\text{3,15} & \\text{3,31} & \\text{3,47} \\\\ \\text{Salgspris} & \\text{} & \\text{} & \\text{60,78} \\\\ \\text{**Total CF**} & \\text{3,15} & \\text{3,31} & \\text{64,25} \\\\ \\text{NV av CF} & \\text{2,84} & \\text{2,68} & \\text{46,98} \\\\ \\hline \\end{array}$$

$$NV = \\frac{3{,}15}{1{,}11} + \\frac{3{,}31}{1{,}11^2} + \\frac{64{,}25}{1{,}11^3} = 2{,}84 + 2{,}68 + 46{,}98$$

**Svar:** $$= \\text{kr } 52{,}50$$

Nåverdien er den samme som i b). Dette illustrerer at aksjens verdi er uavhengig av investorens planlagte eierperiode.` },
      ],
      solution: ``
    },
    {
      id: "os3-2",
      number: 2,
      difficulty: "medium",
      problemText: `AS Havbruk har nettopp betalt ut dividende på kr 4 per aksje. Investorer krever en avkastning på 14 % på en investering i selskapet.`,
      subParts: [
        { label: "a", text: `Dersom man forventer en jevn vekst i dividenden på 6 % per år, hva er dagens aksjeverdi?`, solution: `$$P_0 = \\frac{D_1}{r - g} = \\frac{4 \\times 1{,}06}{0{,}14 - 0{,}06} = \\frac{4{,}24}{0{,}08}$$

**Svar:** $$= \\text{kr } 53{,}00$$` },
        { label: "b", text: `Hva vil aksjen (under samme forutsetninger) være verdt om fem år?`, solution: `$$P_5 = P_0 \\times (1+g)^5 = 53{,}00 \\times 1{,}06^5 = 53{,}00 \\times 1{,}3382$$

**Svar:** $$= \\text{kr } 70{,}93$$` },
        { label: "c", text: `Anta at forutsetningene endres som følger: De nærmeste tre årene forventes utbyttet å øke med hele 18 % hvert år. Deretter vil utbyttet vokse jevnt med 6 % årlig. Hva vil aksjen være verdt i dag?`, solution: `Beregn dividendene i høyvekstperioden:

$$D_1 = 4 \\times 1{,}18 = 4{,}72$$
$$D_2 = 4 \\times 1{,}18^2 = 5{,}57$$
$$D_3 = 4 \\times 1{,}18^3 = 6{,}57$$

Aksjekurs ved slutten av år 3 (vekst faller til 6 %):

$$P_3 = \\frac{D_3 \\times (1{,}06)}{r - g} = \\frac{6{,}57 \\times 1{,}06}{0{,}08} = \\frac{6{,}97}{0{,}08} = 87{,}08$$

Nåverdi av alle kontantstrømmer:

$$P_0 = \\frac{4{,}72}{1{,}14} + \\frac{5{,}57}{1{,}14^2} + \\frac{6{,}57}{1{,}14^3} + \\frac{87{,}08}{1{,}14^3}$$
$$= 4{,}14 + 4{,}29 + 4{,}44 + 58{,}78$$

**Svar:** $$= \\text{kr } 71{,}64$$

Den høyere veksten i de første årene gjør aksjen mer verdt enn under jevn 6 %-vekst.` },
      ],
      solution: ``
    },
    {
      id: "os3-3",
      number: 3,
      difficulty: "easy",
      problemText: `Aksjene i Fjord Energi ASA omsettes for tiden for kr 42. Selskapet hadde et resultat («earnings») på kr 2,80 per aksje siste år.`,
      subParts: [
        { label: "a", text: `Hva er selskapets P/E?`, solution: `**Svar:** $$P/E = \\frac{42}{2{,}80} = 15{,}0$$` },
        { label: "b", text: `Hvilken avkastning (%) vil du teoretisk ha i løpet av neste år på en investering i selskapet hvis du kjøper til ovennevnte pris og selskapets resultat blir det samme? Virker dette som en god avkastning for et selskap av denne typen, gitt risikoen?`, solution: `$$\\text{Avkastning} = \\frac{\\text{EPS}}{P} = \\frac{2{,}80}{42} = 6{,}67\\,\\%$$

For et energiselskap med normal risiko virker dette lavt. Investorer må forvente at selskapet vil vokse for å rettferdiggjøre den høye prisen (høye P/E).` },
        { label: "c", text: `Generelt: Hva forventer investorer i selskaper med høy P/E at vil skje med resultatene i disse selskapene i framtida?`, solution: `**Svar:** Investorer i selskaper med høy P/E forventer at resultatene vil vokse betydelig i fremtiden.

En høy P/E betyr at investorer betaler mye per krone av dagens inntjening, noe som kun gir mening dersom de tror inntjeningen vil stige. Hvis resultatene ikke vokser, vil investorene ha betalt for mye for aksjen.` },
      ],
      solution: ``
    },
    {
      id: "os3-4",
      number: 4,
      difficulty: "medium",
      problemText: `En aksje i Alfa AS vil gi utbytte på kr 60 de neste 4 årene. Deretter vil utbyttet øke med 3 % hvert år i all evighet. Hvilken markedspris vil aksjen ideelt ha, dersom alternativ avkastning på en tilsvarende investering er 11 %?`,
      solution: `Markedsprisen er nåverdien av alle fremtidige dividender. Kontantstrømmen har to deler: en annuitet (år 1–4) og en voksende perpetuitet (fra år 5).

**Steg 1:** Aksjekurs ved slutten av år 4 (Gordons modell fra år 5):

$$D_5 = 60 \\times 1{,}03 = 61{,}80$$
$$P_4 = \\frac{D_5}{r - g} = \\frac{61{,}80}{0{,}11 - 0{,}03} = \\frac{61{,}80}{0{,}08} = 772{,}50$$

**Steg 2:** Nåverdi av dividendene år 1–4 (annuitet):

$$PV_{\\text{div}} = 60 \\times \\frac{1 - 1{,}11^{-4}}{0{,}11} = 60 \\times 3{,}1024 = 186{,}15$$

**Steg 3:** Nåverdi av $P_4$:

$$PV_{P_4} = \\frac{772{,}50}{1{,}11^4} = \\frac{772{,}50}{1{,}5181} = 508{,}87$$

**Aksjeprisen:**

$$P_0 = 186{,}15 + 508{,}87$$

**Svar:** $$= \\text{kr } 695$$`
    },
    {
      id: "os3-5",
      number: 5,
      difficulty: "medium",
      problemText: `Aksjen i selskapet Grønn Kraft ASA koster i dag kr 240. Den prises i henhold til dividendemodellen basert på en evigvarende, konstant vekst med dividendebetaling en gang i året. Siste dividendebetaling har nettopp funnet sted. Årlig vekst i dividende er 3 %, avkastningskravet på aksjen, $r$, er 5 %, mens utdelingsforholdet er 0,5.

Basert på ovennevnte opplysninger, finn dividenden om ett år, selskapets egenkapitalrentabilitet (ROE), P/E-forholdet ($P_0/\\text{EPS}_1$), samt nåverdien av vekstmulighetene innbakt i aksjeprisen (PVGO). Forklar hvorfor den sistnevnte størrelsen blir positiv i dette tilfellet.`,
      solution: `**Dividende om ett år:**

$$P_0 = \\frac{D_1}{r-g} \\implies D_1 = P_0 \\times (r-g) = 240 \\times 0{,}02 = 4{,}80$$

**Egenkapitalrentabilitet (ROE):**

Sammenhengen mellom vekst, utdeling og ROE er $g = (1 - \\text{utdelingsforhold}) \\times \\text{ROE}$:

$$\\text{ROE} = \\frac{g}{1 - \\text{utdelingsforhold}} = \\frac{0{,}03}{1 - 0{,}5} = \\frac{0{,}03}{0{,}5}$$

**Svar:** $$= 6\\,\\%$$

**P/E-forholdet:**

$$\\text{EPS}_1 = \\frac{D_1}{\\text{utdelingsforhold}} = \\frac{4{,}80}{0{,}5} = 9{,}60$$

**Svar:** $$P/E = \\frac{P_0}{\\text{EPS}_1} = \\frac{240}{9{,}60} = 25$$

**PVGO:**

$$\\text{PVGO} = P_0 - \\frac{\\text{EPS}_1}{r} = 240 - \\frac{9{,}60}{0{,}05} = 240 - 192$$

**Svar:** $$= 48$$

PVGO er positiv fordi $\\text{ROE} = 6\\,\\% > r = 5\\,\\%$. Selskapet skaper merverdi ved å reinvestere tilbakeholdt overskudd — avkastningen på reinvesteringene overstiger avkastningskravet.`
    },
    {
      id: "os3-6",
      number: 6,
      difficulty: "hard",
      problemText: `Aksjen i AS Nordlys koster kr 270 og prises i henhold til dividendemodellen med en evig, konstant vekst på 8 % årlig. Dividendebetalinger skjer én gang i året, og det er nettopp blitt utbetalt kr 10 per aksje. Egenkapitalrentabiliteten er 20 %.`,
      subParts: [
        { label: "a", text: `Hvilken dividendebetaling forventes om ett år? Finn aksjens avkastningskrav, utdelingsforholdet, P/E-forholdet ($P_0/\\text{EPS}_1$) og nåverdien av vekstmulighetene innbakt i aksjeprisen.`, solution: `**Dividende:** $D_1 = 10 \\times 1{,}08 = 10{,}80$

**Avkastningskrav:**

$$r = \\frac{D_1}{P_0} + g = \\frac{10{,}80}{270} + 0{,}08 = 0{,}04 + 0{,}08$$

**Svar:** $$= 12\\,\\%$$

**Utdelingsforhold:**

$$\\text{Utdelingsforhold} = 1 - \\frac{g}{\\text{ROE}} = 1 - \\frac{0{,}08}{0{,}20}$$

**Svar:** $$= 0{,}60$$

**P/E:**

$$\\text{EPS}_1 = \\frac{D_1}{\\text{utdelingsforhold}} = \\frac{10{,}80}{0{,}60} = 18$$

**Svar:** $$P/E = \\frac{270}{18} = 15$$

**PVGO:**

$$\\text{PVGO} = 270 - \\frac{18}{0{,}12} = 270 - 150$$

**Svar:** $$= 120$$

PVGO er positiv fordi ROE (20 %) > $r$ (12 %). Reinvestering skaper verdi.` },
        { label: "b", text: `Gitt at alle opplysninger er nøyaktig som før, bare med unntak av at egenkapitalrentabiliteten er 10 % i stedet for 20 %, svar på de samme spørsmålene som under a) og forklar kort de endringene som finner sted i svarene.`, solution: `$D_1 = 10{,}80$ og $r = 12\\,\\%$ som før (pris og dividende er uendret).

**Utdelingsforhold:**

$$\\text{Utdelingsforhold} = 1 - \\frac{0{,}08}{0{,}10} = 0{,}20$$

**EPS og P/E:**

$$\\text{EPS}_1 = \\frac{10{,}80}{0{,}20} = 54 \\qquad P/E = \\frac{270}{54} = 5$$

**PVGO:**

$$\\text{PVGO} = 270 - \\frac{54}{0{,}12} = 270 - 450$$

**Svar:** $$= -180$$

For at veksten skal være uforandret (8 %) med lavere ROE, må en mye større andel av fortjenesten holdes igjen i selskapet. Utdelingsforholdet faller fra 0,60 til 0,20. Med samme dividendebetaling betyr dette at inntjeningen i utgangspunktet må være betydelig høyere (EPS stiger fra 18 til 54), noe som innebærer et stort fall i P/E-forholdet.

PVGO er negativ fordi ROE (10 %) &lt; $r$ (12 %): selskapet «ødelegger» verdier ved å reinvestere — aksjonærene ville vært bedre tjent med at hele fortjenesten ble utbetalt som dividende.` },
      ],
      solution: ``
    },
    {
      id: "os3-7",
      number: 7,
      difficulty: "medium",
      problemText: `Aksjen Fjord prises i samsvar med dividendemodellen basert på evigvarende, konstant vekst. Det betales dividende en gang i året og siste dividendebetaling har nettopp funnet sted. Om ett år forventes det en dividende på kr 18. Utdelingsforholdet er 0,6, avkastningskravet på aksjen er 15 % og aksjen koster kr 180 i dag.

Finn den konstante årlige veksten i dividende, selskapets egenkapitalrentabilitet, P/E-forholdet ($P_0/\\text{EPS}_1$), samt nåverdien av vekstmulighetene innbakt i aksjeprisen. Forklar kortfattet hvorfor den siste størrelsen blir negativ i dette tilfellet.`,
      solution: `**Vekst:**

$$P_0 = \\frac{D_1}{r-g} \\implies g = r - \\frac{D_1}{P_0} = 0{,}15 - \\frac{18}{180} = 0{,}15 - 0{,}10$$

**Svar:** $$g = 5\\,\\%$$

**ROE:**

$$\\text{ROE} = \\frac{g}{1 - \\text{utdelingsforhold}} = \\frac{0{,}05}{1 - 0{,}6} = \\frac{0{,}05}{0{,}4}$$

**Svar:** $$= 12{,}5\\,\\%$$

**P/E:**

$$\\text{EPS}_1 = \\frac{D_1}{\\text{utdelingsforhold}} = \\frac{18}{0{,}6} = 30$$

**Svar:** $$P/E = \\frac{180}{30} = 6$$

**PVGO:**

$$\\text{PVGO} = P_0 - \\frac{\\text{EPS}_1}{r} = 180 - \\frac{30}{0{,}15} = 180 - 200$$

**Svar:** $$= -20$$

PVGO er negativ fordi ROE (12,5 %) &lt; $r$ (15 %). Selskapet reinvesterer til en avkastning som er lavere enn investorenes avkastningskrav. Aksjonærene ville fått mer verdi dersom selskapet betalte ut all fortjeneste som dividende i stedet for å reinvestere.`
    },
    {
      id: "os3-8",
      number: 8,
      difficulty: "medium",
      problemText: `Aksjen Vest koster kr 200 i dag, vurdert ut fra dividendemodellen basert på evigvarende, konstant vekst. Det er nettopp blitt utbetalt dividende og dividenden om ett år forventes å bli kr 12. Neste års fortjeneste per aksje er anslått til kr 24. Avkastningskravet på denne aksjen er 15 %.

Finn egenkapitalrentabiliteten.`,
      solution: `**Vekst:**

$$g = r - \\frac{D_1}{P_0} = 0{,}15 - \\frac{12}{200} = 0{,}15 - 0{,}06 = 9\\,\\%$$

**Utdelingsforhold:**

$$\\text{Utdelingsforhold} = \\frac{D_1}{\\text{EPS}_1} = \\frac{12}{24} = 0{,}50$$

**ROE:**

$$\\text{ROE} = \\frac{g}{1 - \\text{utdelingsforhold}} = \\frac{0{,}09}{1 - 0{,}50} = \\frac{0{,}09}{0{,}50}$$

**Svar:** $$= 18\\,\\%$$`
    },
    {
      id: "os3-9",
      number: 9,
      difficulty: "hard",
      problemText: `Aksjen Skog prises i henhold til dividendemodellen med evigvarende, konstant vekst. Det deles ut dividende en gang i året og siste dividendebetaling har nettopp blitt foretatt. Om ett år forventes en dividende på kr 9, avkastningskravet på aksjen er 12 % og den konstante veksten er 9 %. Utdelingsforholdet er 0,3.`,
      subParts: [
        { label: "a", text: `Finn aksjens pris, P/E-forholdet ($P_0/\\text{EPS}_1$) og selskapets egenkapitalrentabilitet.`, solution: `**Aksjepris:**

$$P_0 = \\frac{D_1}{r - g} = \\frac{9}{0{,}12 - 0{,}09} = \\frac{9}{0{,}03}$$

**Svar:** $$= \\text{kr } 300$$

**EPS og P/E:**

$$\\text{EPS}_1 = \\frac{D_1}{\\text{utdelingsforhold}} = \\frac{9}{0{,}3} = 30$$

**Svar:** $$P/E = \\frac{300}{30} = 10$$

**ROE:**

$$\\text{ROE} = \\frac{g}{1 - \\text{utdelingsforhold}} = \\frac{0{,}09}{0{,}7}$$

**Svar:** $$= 12{,}86\\,\\%$$` },
        { label: "b", text: `Beregn nåverdien av vekstmuligheter som ligger i aksjeprisen. Forklar svaret du har fått.`, solution: `$$\\text{PVGO} = P_0 - \\frac{\\text{EPS}_1}{r} = 300 - \\frac{30}{0{,}12} = 300 - 250$$

**Svar:** $$= 50$$

PVGO er positiv som følge av at ROE (12,86 %) > $r$ (12 %). PVGO kan uttrykkes som samlet nåverdi av fremtidige reinvesteringer av tilbakeholdt overskudd. Samtlige reinvesteringer gir en positiv nåverdi når ROE > avkastningskravet — selskapet skaper merverdi for aksjonærene ved å reinvestere deler av fortjenesten.` },
      ],
      solution: ``
    }
  ]
};
