import { ExerciseSet } from '../../types/course';

export const aksjerExerciseSet: ExerciseSet = {
  id: 'oppgavesett-aksjer',
  moduleId: 'modul-4-aksjer',
  title: 'Regneoppgaver: Aksjeprising',
  description: 'Oppgaver om dividendemodellen, P/E, ROE og PVGO',
  exercises: [
    {
      id: 'aksje-1',
      number: 1,
      title: 'Integrated Potato Chips',
      problemText: `Integrated Potato Chips utbetalte *i går* $1 pr. aksje i dividende. Du forventer en jevn vekst i dividenden på 4% p.a.`,
      subParts: [
        {
          label: 'a',
          text: 'Hva er forventet dividende i hvert av de tre neste årene?',
          solution: 'DIV₁ = $1,04, DIV₂ = $1,0816, DIV₃ = $1,1249'
        },
        {
          label: 'b',
          text: 'Hvis avkastningskravet for aksjen er 12%, hva vil aksjen omsettes for?',
          solution: 'P₀ = $13'
        },
        {
          label: 'c',
          text: 'Hva er forventet aksjekurs om tre år?',
          solution: 'P₃ = $14,623'
        },
        {
          label: 'd',
          text: 'Hvis du kjøper aksjen og sitter med den i tre år og da selger, hvilke betalinger vil du motta hvert år? Hva er nåverdien (NV) av disse betalingene?',
          solution: 'NV = $13 (samme som i b)'
        }
      ],
      solution: `**a) Forventet dividende:**
$$DIV_1 = DIV_0 \\times (1+g) = 1 \\times 1{,}04 = \\mathbf{\\$1{,}04}$$
$$DIV_2 = 1 \\times 1{,}04^2 = \\mathbf{\\$1{,}0816}$$
$$DIV_3 = 1 \\times 1{,}04^3 = \\mathbf{\\$1{,}1249}$$

**b) Aksjekurs i dag:**
$$P_0 = \\frac{DIV_1}{r-g} = \\frac{1{,}04}{0{,}12 - 0{,}04} = \\mathbf{\\$13}$$

**c) Aksjekurs om 3 år:**
$$P_3 = \\frac{DIV_4}{r-g} = \\frac{DIV_0 \\times 1{,}04^4}{0{,}08} = \\frac{1{,}17}{0{,}08} = \\mathbf{\\$14{,}623}$$

**d) Betalinger og nåverdi:**

| År | 1 | 2 | 3 |
|-----|------|--------|---------|
| Dividende | 1,04 | 1,0816 | 1,1249 |
| Salgspris | | | 14,623 |
| Total | 1,04 | 1,0816 | 15,748 |
| NV | 0,929 | 0,862 | 11,209 |

Sum NV = **$13** (samme som b) - dette illustrerer at aksjeverdien er uavhengig av investeringshorisont.`
    },
    {
      id: 'aksje-2',
      number: 2,
      title: 'AS Rosenborg Invest',
      problemText: `AS Rosenborg Invest har nettopp betalt ut dividende på kr 2,- per aksje. Investorer krever en avkastning på 16% på en investering i selskapet.`,
      subParts: [
        {
          label: 'a',
          text: 'Dersom man forventer en jevn vekst i dividenden på 8% per år, hva er dagens aksjeverdi?',
          solution: 'kr 27,00'
        },
        {
          label: 'b',
          text: 'Hva vil aksjen (under samme forutsetninger) være verdt om fem år?',
          solution: 'kr 39,67'
        },
        {
          label: 'c',
          text: 'Anta at de nærmeste tre årene forventes utbyttet å øke med 20% hvert år. Deretter vil utbyttet vokse jevnt med 8% årlig. Hva vil aksjen være verdt i dag?',
          solution: 'kr 36,31'
        }
      ],
      solution: `**a) Aksjeverdi med konstant vekst:**
$$P_0 = \\frac{D_1}{r-g} = \\frac{D_0 \\times (1+g)}{r-g} = \\frac{2 \\times 1{,}08}{0{,}16 - 0{,}08} = \\mathbf{kr\\text{ }27{,}00}$$

**b) Verdi om 5 år:**
$$P_5 = P_0 \\times (1+g)^5 = 27 \\times 1{,}08^5 = \\mathbf{kr\\text{ }39{,}67}$$

**c) To-trinns vekst:**

Først beregnes dividender for år 1-3 (20% vekst):
$$D_1 = 2 \\times 1{,}20 = 2{,}40$$
$$D_2 = 2 \\times 1{,}20^2 = 2{,}88$$
$$D_3 = 2 \\times 1{,}20^3 = 3{,}456$$

Aksjekurs ved år 3 (deretter 8% vekst):
$$P_3 = \\frac{D_3 \\times (1+0{,}08)}{0{,}16 - 0{,}08} = \\frac{3{,}456 \\times 1{,}08}{0{,}08} = 46{,}656$$

Nåverdi:
$$P_0 = \\frac{2{,}40}{1{,}16} + \\frac{2{,}88}{1{,}16^2} + \\frac{3{,}456}{1{,}16^3} + \\frac{46{,}656}{1{,}16^3} = \\mathbf{kr\\text{ }36{,}31}$$`
    },
    {
      id: 'aksje-3',
      number: 3,
      title: 'P/E-forhold',
      problemText: `Aksjene i et lite telefoniselskap omsettes for tiden for kr. 28,50. Selskapet hadde et resultat ("earnings") på kr. 1,80 per aksje siste år.`,
      subParts: [
        {
          label: 'a',
          text: 'Hva er selskapets P/E?',
          solution: '15,83'
        },
        {
          label: 'b',
          text: 'Hvilken avkastning (%) vil du teoretisk ha i løpet av neste år hvis du kjøper til ovennevnte pris og selskapets resultat blir det samme? Virker dette som en god avkastning for et selskap av denne typen?',
          solution: '6,3% - ser lavt ut for et slikt selskap'
        },
        {
          label: 'c',
          text: 'Generelt: Hva forventer investorer i selskaper med høy P/E at vil skje med resultatene?',
          solution: 'De forventer at resultatene vil øke i fremtiden'
        }
      ],
      solution: `**a) P/E-forhold:**
$$P/E = \\frac{28{,}50}{1{,}80} = \\mathbf{15{,}83}$$

**b) Earnings yield:**
$$\\frac{EPS}{P} = \\frac{1{,}80}{28{,}50} = \\mathbf{6{,}3\\%}$$

Denne avkastningen ser **lav ut** for et selskap i en så konkurranseutsatt bransje som telekommunikasjon.

**c)** Investorer som betaler høy P/E **forventer at resultatene vil øke** betydelig i fremtiden. Hvis resultatene ikke øker, har investorene betalt for mye for aksjen.`
    },
    {
      id: 'aksje-4',
      number: 4,
      title: 'To-trinns dividendemodell',
      problemText: `En aksje i Alfa AS vil gi utbetalt utbytte på kr 80 de neste 5 årene. Deretter vil utbyttet øke med 4% hvert år i all evighet. Hvilken markedspris vil aksjen ideelt ha, dersom alternativ avkastning på en tilsvarende investering er 13%?`,
      solution: `Markedsprisen er nåverdien av alle fremtidige dividender:

$$P_0 = \\frac{D_1}{1+r} + \\frac{D_2}{(1+r)^2} + ... + \\frac{D_5}{(1+r)^5} + \\frac{P_5}{(1+r)^5}$$

der $P_5 = \\frac{D_6}{r-g} = \\frac{80 \\times 1{,}04}{0{,}13 - 0{,}04} = \\frac{83{,}2}{0{,}09} = 924{,}44$

**Beregning:**

År 1-5: Konstant dividende på 80
$$NV_{år 1-5} = 80 \\times \\frac{1 - \\frac{1}{1{,}13^5}}{0{,}13} = 80 \\times 3{,}517 = 281{,}36$$

Nåverdi av $P_5$:
$$NV_{P_5} = \\frac{924{,}44}{1{,}13^5} = 501{,}77$$

**Total aksjepris:**
$$P_0 = 281{,}36 + 501{,}77 = \\mathbf{kr\\text{ }783{,}13}$$`
    },
    {
      id: 'aksje-5',
      number: 5,
      title: 'Kasai - Dividendemodell',
      problemText: `Aksjen i selskapet Kasai koster i dag kr 300. Den prises i henhold til dividendemodellen basert på en evigvarende, konstant vekst med dividendebetaling en gang i året. Siste dividendebetaling har nettopp funnet sted.

**Gitt:** Årlig vekst i dividende er 2%, avkastningskravet $r$ er 4%, utdelingsforholdet er 0,6.

Finn dividenden om ett år, selskapets egenkapitalrentabilitet (ROE), P/E-forholdet ($P_0/EPS_1$), samt nåverdien av vekstmulighetene (PVGO). Forklar hvorfor PVGO blir positiv.`,
      solution: `**Dividende om ett år:**
$$P_0 = \\frac{DIV_1}{r-g} \\Rightarrow DIV_1 = P_0 \\times (r-g) = 300 \\times (0{,}04 - 0{,}02) = \\mathbf{6}$$

**Egenkapitalrentabilitet (ROE):**
$$g = (1 - \\text{utdelingsforhold}) \\times ROE$$
$$ROE = \\frac{g}{1 - 0{,}6} = \\frac{0{,}02}{0{,}4} = \\mathbf{5\\%}$$

**P/E-forhold:**
$$EPS_1 = \\frac{DIV_1}{\\text{utdelingsforhold}} = \\frac{6}{0{,}6} = 10$$
$$P/E = \\frac{300}{10} = \\mathbf{30}$$

**PVGO:**
$$PVGO = P_0 - \\frac{EPS_1}{r} = 300 - \\frac{10}{0{,}04} = 300 - 250 = \\mathbf{50}$$

**Forklaring:** PVGO er positiv fordi **ROE (5%) > r (4%)**. Selskapet skaper verdi når det reinvesterer overskudd, siden avkastningen på reinvestert kapital overstiger avkastningskravet.`
    },
    {
      id: 'aksje-6',
      number: 6,
      title: 'AS Futurum',
      problemText: `Aksjen i AS Futurum koster kr 180 og prises i henhold til dividendemodellen med en evig, konstant vekst på 8% årlig. Det er nettopp blitt utbetalt kr 10 per aksje. Egenkapitalrentabiliteten er 20%.`,
      subParts: [
        {
          label: 'a',
          text: 'Finn forventet dividende om ett år, avkastningskravet, utdelingsforholdet, P/E og PVGO.',
          solution: 'DIV₁=10,80, r=14%, utd.forh.=0,6, P/E=10, PVGO≈51,43'
        },
        {
          label: 'b',
          text: 'Samme spørsmål hvis ROE er 10% i stedet for 20%. Forklar endringene.',
          solution: 'utd.forh.=0,2, P/E=3,33, PVGO≈-205,71'
        }
      ],
      solution: `**a) Med ROE = 20%:**

Dividende: $DIV_1 = 10 \\times 1{,}08 = \\mathbf{10{,}80}$

Avkastningskrav:
$$r = \\frac{DIV_1}{P_0} + g = \\frac{10{,}80}{180} + 0{,}08 = \\mathbf{14\\%}$$

Utdelingsforhold:
$$g = (1 - d) \\times ROE \\Rightarrow d = 1 - \\frac{g}{ROE} = 1 - \\frac{0{,}08}{0{,}20} = \\mathbf{0{,}6}$$

P/E: $EPS_1 = \\frac{10{,}80}{0{,}6} = 18 \\Rightarrow P/E = \\frac{180}{18} = \\mathbf{10}$

PVGO: $PVGO = 180 - \\frac{18}{0{,}14} = 180 - 128{,}57 \\approx \\mathbf{51{,}43}$

**b) Med ROE = 10%:**

$DIV_1 = 10{,}80$ og $r = 14\\%$ (uendret)

Utdelingsforhold: $d = 1 - \\frac{0{,}08}{0{,}10} = \\mathbf{0{,}2}$

P/E: $EPS_1 = \\frac{10{,}80}{0{,}2} = 54 \\Rightarrow P/E = \\frac{180}{54} = \\mathbf{3{,}33}$

PVGO: $PVGO = 180 - \\frac{54}{0{,}14} \\approx \\mathbf{-205{,}71}$

**Forklaring:** Med lavere ROE må mer holdes tilbake for å oppnå samme vekst, så utdelingsforholdet faller. EPS øker kraftig, og P/E faller. PVGO blir **negativ** fordi ROE (10%) < r (14%) - selskapet ødelegger verdi ved å reinvestere.`
    },
    {
      id: 'aksje-7',
      number: 7,
      title: 'Fortuna - Negativ PVGO',
      problemText: `Aksjen Fortuna prises i samsvar med dividendemodellen basert på evigvarende, konstant vekst. Det betales dividende en gang i året og siste dividendebetaling har nettopp funnet sted. Om ett år forventes det en dividende på kr 24. Utdelingsforholdet er 0,8, avkastningskravet på aksjen er 12% og aksjen koster kr 240 i dag.

Finn den konstante årlige veksten i dividende, selskapets egenkapitalrentabilitet, P/E-forholdet ($P_0/EPS_1$), samt nåverdien av vekstmulighetene (PVGO).

Forklar kortfattet hvorfor PVGO blir negativ.`,
      solution: `**Vekst:**
$$P_0 = \\frac{DIV_1}{r-g} \\Rightarrow g = r - \\frac{DIV_1}{P_0} = 0{,}12 - \\frac{24}{240} = \\mathbf{2\\%}$$

**ROE:**
$$g = (1-d) \\times ROE \\Rightarrow ROE = \\frac{g}{1-d} = \\frac{0{,}02}{1-0{,}8} = \\frac{0{,}02}{0{,}2} = \\mathbf{10\\%}$$

**P/E:**
$$EPS_1 = \\frac{DIV_1}{d} = \\frac{24}{0{,}8} = 30 \\Rightarrow P/E = \\frac{240}{30} = \\mathbf{8}$$

**PVGO:**
$$PVGO = P_0 - \\frac{EPS_1}{r} = 240 - \\frac{30}{0{,}12} = 240 - 250 = \\mathbf{-10}$$

**Forklaring:** PVGO er negativ fordi **ROE (10%) < r (12%)**. Selskapet "ødelegger" verdi når det reinvesterer overskudd, siden avkastningen på ny investert kapital er lavere enn det investorene krever.`
    },
    {
      id: 'aksje-8',
      number: 8,
      title: 'Trix - Finn ROE',
      problemText: `Aksjen Trix koster kr 250 i dag, vurdert ut fra dividendemodellen basert på evigvarende, konstant årlig vekst. Det er nettopp blitt utbetalt dividende og dividenden om ett år forventes å bli kr 15. Neste års fortjeneste per aksje er anslått til kr 30. Avkastningskravet på denne aksjen er 15%.

Finn egenkapitalrentabiliteten.`,
      solution: `**Steg 1: Finn veksten**
$$P_0 = \\frac{DIV_1}{r-g} \\Rightarrow g = r - \\frac{DIV_1}{P_0} = 0{,}15 - \\frac{15}{250} = \\mathbf{9\\%}$$

**Steg 2: Finn utdelingsforholdet**
$$d = \\frac{DIV_1}{EPS_1} = \\frac{15}{30} = 0{,}5$$

**Steg 3: Finn ROE**
$$g = (1-d) \\times ROE$$
$$ROE = \\frac{g}{1-d} = \\frac{0{,}09}{1-0{,}5} = \\frac{0{,}09}{0{,}5} = \\mathbf{18\\%}$$`
    },
    {
      id: 'aksje-9',
      number: 9,
      title: 'Must - Komplett analyse',
      problemText: `Aksjen Must prises i henhold til dividendemodellen med evigvarende, konstant vekst. Det deles ut dividende en gang i året og siste dividendebetaling har nettopp blitt foretatt. Om ett år forventes en dividende på kr 8, avkastningskravet på aksjen er 13% og den konstante veksten er på 9%. Utdelingsforholdet er 0,4.`,
      subParts: [
        {
          label: 'a',
          text: 'Finn aksjens pris, P/E-forholdet (P₀/EPS₁) og selskapets egenkapitalrentabilitet.',
          solution: 'P₀ = 200, P/E = 10, ROE = 15%'
        },
        {
          label: 'b',
          text: 'Beregn nåverdien av vekstmuligheter som ligger i aksjeprisen. Forklar svaret.',
          solution: 'PVGO ≈ 46,15 (positiv fordi ROE > r)'
        }
      ],
      solution: `**a) Aksjepris:**
$$P_0 = \\frac{DIV_1}{r-g} = \\frac{8}{0{,}13 - 0{,}09} = \\frac{8}{0{,}04} = \\mathbf{200}$$

**EPS og P/E:**
$$EPS_1 = \\frac{DIV_1}{d} = \\frac{8}{0{,}4} = 20$$
$$P/E = \\frac{200}{20} = \\mathbf{10}$$

**ROE:**
$$g = (1-d) \\times ROE \\Rightarrow ROE = \\frac{g}{1-d} = \\frac{0{,}09}{0{,}6} = \\mathbf{15\\%}$$

**b) PVGO:**
$$PVGO = P_0 - \\frac{EPS_1}{r} = 200 - \\frac{20}{0{,}13} = 200 - 153{,}85 \\approx \\mathbf{46{,}15}$$

**Forklaring:** PVGO er positiv fordi **ROE (15%) > r (13%)**. Hver krone som holdes tilbake og reinvesteres gir en avkastning som overstiger avkastningskravet. PVGO representerer nåverdien av alle fremtidige verdiskapende reinvesteringer.`
    }
  ]
};
