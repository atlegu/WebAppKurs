import { ExerciseSet } from '../../types/course';

// Kilde: BUS220 høst 2026 – Oppgavesett6_CAPM_2026.html + fasit (samme sett som i klasseromskurset).
export const oppgavesett6Capm: ExerciseSet = {
  id: "oppgavesett-6-capm",
  moduleId: "modul-5-portefolje",
  title: "Oppgavesett 6: CAPM og kapitalverdimodellen",
  description: "Pensum: HRWJ kapittel 11",
  exercises: [
    {
      id: "os6-1",
      number: 1,
      difficulty: "easy",
      problemText: `Aksjen i Pelagisk ASA har kovarians med markedsporteføljen $\\text{Cov}(R_i, R_m) = 0{,}024$. Markedsporteføljens varians er $\\text{Var}(R_m) = 0{,}020$.

Beregn betaen til aksjen.`,
      solution: `$$\\beta_i = \\frac{\\text{Cov}(R_i, R_m)}{\\text{Var}(R_m)} = \\frac{0{,}024}{0{,}020}$$

**Svar:** $$= 1{,}20$$

Aksjen har høyere markedsrisiko enn gjennomsnittsaksjen ($\\beta > 1$).`
    },
    {
      id: "os6-2",
      number: 2,
      difficulty: "easy",
      problemText: `En aksje har beta $\\beta = 1{,}5$. Risikofri rente er 3 % og markedets risikopremie er 6 %.

Hva er aksjens forventede avkastning ifølge CAPM?`,
      solution: `CAPM-formelen:

$$E(R) = r_f + \\beta \\times [E(R_m) - r_f] = 3\\,\\% + 1{,}5 \\times 6\\,\\%$$
$$= 3\\,\\% + 9\\,\\%$$

**Svar:** $$= 12\\,\\%$$`
    },
    {
      id: "os6-3",
      number: 3,
      difficulty: "medium",
      problemText: `Aksjen i Hav ASA forventes å gi 15 % avkastning. Aksjens beta er 1,4 og markedets risikopremie er 7 %.

Hva må risikofri rente være for at CAPM skal være konsistent med disse opplysningene?`,
      solution: `Fra CAPM-formelen:

$$E(R) = r_f + \\beta \\times \\text{MRP}$$
$$15\\,\\% = r_f + 1{,}4 \\times 7\\,\\% = r_f + 9{,}8\\,\\%$$
$$r_f = 15\\,\\% - 9{,}8\\,\\%$$

**Svar:** $$= 5{,}2\\,\\%$$`
    },
    {
      id: "os6-4",
      number: 4,
      difficulty: "medium",
      problemText: `Aksjen X har beta 0,8 og en forventet avkastning på 10 %. Markedet karakteriseres av $r_f = 3\\,\\%$ og $E(R_m) = 11\\,\\%$.`,
      subParts: [
        { label: "a", text: `Beregn aksjens avkastningskrav (krevd avkastning) i henhold til CAPM.`, solution: `$$E(R)_{krav} = r_f + \\beta \\times [E(R_m) - r_f] = 3\\,\\% + 0{,}8 \\times (11 - 3)\\,\\%$$
$$= 3\\,\\% + 0{,}8 \\times 8\\,\\% = 3\\,\\% + 6{,}4\\,\\%$$

**Svar:** $$= 9{,}4\\,\\%$$` },
        { label: "b", text: `Er aksjen riktig priset, overpriset eller underpriset? Hvilken handelsanbefaling gir du?`, solution: `Forventet avkastning (10,0 %) er **høyere** enn det CAPM krever (9,4 %).

Differansen — kalt aksjens alpha — er $\\alpha = 10{,}0 - 9{,}4 = +0{,}6$ prosentpoeng.

**Svar:** Aksjen ligger over SML og er **underpriset** — anbefaling: kjøp.

Investorer som kjøper aksjen får mer betalt enn risikoen tilsier; etter hvert vil aksjekursen stige (når flere oppdager dette) og forventet avkastning falle tilbake til 9,4 %.` },
      ],
      solution: ``
    },
    {
      id: "os6-5",
      number: 5,
      difficulty: "easy",
      problemText: `Du eier en portefølje med følgende sammensetning:

Beregn porteføljens beta.`,
      tables: [{"headers":["Aksje","Vekt","Beta"],"rows":[["A","25 %","1,4"],["B","35 %","0,8"],["C","40 %","1,1"]]}],
      solution: `Porteføljens beta er det vektede gjennomsnittet av aksjenes betaer:

$$\\beta_p = 0{,}25 \\times 1{,}4 + 0{,}35 \\times 0{,}8 + 0{,}40 \\times 1{,}1$$
$$= 0{,}35 + 0{,}28 + 0{,}44$$

**Svar:** $$= 1{,}07$$

Porteføljen er litt mer risikofylt enn markedet.`
    },
    {
      id: "os6-6",
      number: 6,
      difficulty: "medium",
      problemText: `Du har i dag plassert 60 % av formuen i en aksjeportefølje med beta 1,2 og 40 % i statskasseveksler. Du ønsker å justere porteføljen slik at beta blir lik 1,0 (samme risiko som markedet).`,
      subParts: [
        { label: "a", text: `Hva er beta på dagens portefølje?`, solution: `$$\\beta_p = 0{,}60 \\times 1{,}2 + 0{,}40 \\times 0$$

**Svar:** $$= 0{,}72$$` },
        { label: "b", text: `Hvilken vektfordeling mellom aksjer og statskasseveksler må du ha for å oppnå målet?`, solution: `$$w_{\\text{aksjer}} \\times 1{,}2 + (1 - w_{\\text{aksjer}}) \\times 0 = 1{,}0$$
$$w_{\\text{aksjer}} = \\frac{1{,}0}{1{,}2}$$

**Svar:** $$= 83{,}33\\,\\% \\text{ i aksjer, } 16{,}67\\,\\% \\text{ i statskasseveksler}$$

Med $\\beta = 0$ for statskasseveksler påvirker disse kun risikoen indirekte gjennom vektingen.` },
      ],
      solution: ``
    },
    {
      id: "os6-7",
      number: 7,
      difficulty: "medium",
      problemText: `Du sammenligner to aksjer i markedet:

Risikofri rente er 4 % og forventet markedsavkastning er 10 %.`,
      tables: [{"headers":["Aksje","Beta","Forventet avkastning"],"rows":[["A","1,5","14 %"],["B","0,7","8 %"]]}],
      subParts: [
        { label: "a", text: `Beregn CAPM-kravet (avkastningskrav) for hver aksje.`, solution: `$$E(R)_A^{krav} = 4\\,\\% + 1{,}5 \\times (10 - 4)\\,\\% = 4 + 9$$

**Svar:** $$= 13{,}0\\,\\%$$

$$E(R)_B^{krav} = 4\\,\\% + 0{,}7 \\times 6\\,\\% = 4 + 4{,}2$$

**Svar:** $$= 8{,}2\\,\\%$$` },
        { label: "b", text: `Hvilken aksje er underpriset og hvilken er overpriset? Begrunn svaret.`, solution: `$$\\begin{array}{|c|c|c|c|c|} \\hline \\textbf{Aksje} & \\textbf{Forventet} & \\textbf{CAPM-krav} & \\textbf{Alpha} & \\textbf{Verdsetting} \\\\ \\hline \\text{A} & 14{,}0\\,\\% & 13{,}0\\,\\% & +1{,}0 & \\text{Underpriset} \\\\ \\text{B} & 8{,}0\\,\\% & 8{,}2\\,\\% & -0{,}2 & \\text{Overpriset} \\\\ \\hline \\end{array}$$

**Svar:** A er underpriset (kjøp), B er marginalt overpriset (selg/unngå).` },
      ],
      solution: ``
    },
    {
      id: "os6-8",
      number: 8,
      difficulty: "hard",
      problemText: `Aksjen Z forventer å betale et utbytte om ett år på kr 5. Selskapet forventer en jevn vekst i utbyttet på 4 % per år i all evighet. Aksjens beta er 1,2, risikofri rente er 3 % og markedets risikopremie er 6 %.`,
      subParts: [
        { label: "a", text: `Bruk CAPM til å finne avkastningskravet for aksjen.`, solution: `$$r = r_f + \\beta \\times \\text{MRP} = 3\\,\\% + 1{,}2 \\times 6\\,\\%$$

**Svar:** $$= 10{,}2\\,\\%$$` },
        { label: "b", text: `Bruk Gordons vekstmodell til å beregne aksjens teoretisk riktige pris.`, solution: `$$P_0 = \\frac{D_1}{r - g} = \\frac{5}{0{,}102 - 0{,}040} = \\frac{5}{0{,}062}$$

**Svar:** $$= \\text{kr } 80{,}65$$` },
        { label: "c", text: `Anta at aksjen i dag omsettes for kr 95. Hva slags handelsanbefaling gir du, og hvorfor?`, solution: `Markedspris ($95) overstiger teoretisk verdi (80,65) med kr 14,35 — eller 17,8 % over fundamental verdi.

**Svar:** Aksjen er **overpriset** — anbefaling: selg (eller unngå).

Implikasjon: dersom kursen skal være kr 95, må enten avkastningskravet være lavere enn 10,2 % eller forventet vekst være høyere enn 4 %. Med markedspris 95 ville den implisitte avkastningen være $r = 5/95 + 0{,}04 = 9{,}26\\,\\%$ — under CAPM-kravet.` },
      ],
      solution: ``
    },
    {
      id: "os6-9",
      number: 9,
      difficulty: "easy",
      problemText: `Svar kortfattet på følgende spørsmål om beta:`,
      subParts: [
        { label: "a", text: `Hva måler beta i CAPM?`, solution: `Beta måler en aksjes **systematiske risiko** — hvor følsom aksjens avkastning er for endringer i hele markedets avkastning. Det er forholdet mellom aksjens kovarians med markedet og markedets varians:

$$\\beta_i = \\frac{\\text{Cov}(R_i, R_m)}{\\text{Var}(R_m)}$$` },
        { label: "b", text: `Hva betyr det at en aksje har $\\beta = 1$? $\\beta = 0$? $\\beta = 1{,}5$? $\\beta < 0$ (er det mulig)?`, solution: `• $\\beta = 1$: Aksjen beveger seg i takt med markedet. Hvis markedet stiger 10 %, forventes aksjen også å stige 10 %.
• $\\beta = 0$: Aksjen er ukorrelert med markedet. Endringer i markedet har ingen forventet effekt på aksjen. Risikofrie statspapirer har tilnærmet $\\beta = 0$.
• $\\beta = 1{,}5$: Aksjen er mer volatil enn markedet — den forsterker markedssvingninger med 50 %. Hvis markedet stiger 10 %, forventes aksjen å stige 15 %.
• $\\beta < 0$: Aksjen beveger seg motsatt av markedet. Det er teoretisk mulig (f.eks. gullaksjer eller short-posisjoner kan ha negativ beta), men sjeldent i praksis.` },
        { label: "c", text: `Hvorfor brukes beta og ikke totalt standardavvik som mål på risiko i CAPM?`, solution: `I et velfungerende marked vil rasjonelle investorer holde diversifiserte porteføljer der den usystematiske risikoen er eliminert. Markedet belønner derfor kun den **systematiske risikoen** — den som ikke kan diversifiseres bort. Beta måler nettopp denne ikke-diversifiserbare risikoen.

Totalt standardavvik inkluderer både systematisk og usystematisk risiko. Å bruke totalrisiko som risikomål ville feilaktig kreve kompensasjon for risiko investoren selv kunne valgt bort gjennom diversifisering.` },
      ],
      solution: ``
    },
    {
      id: "os6-10",
      number: 10,
      difficulty: "hard",
      problemText: `Aksjen i Boreal AS har et totalt standardavvik på 30 %. Aksjens beta er 1,2, og markedsporteføljens standardavvik er 18 %.`,
      subParts: [
        { label: "a", text: `Beregn variansen til aksjen og dekomponer denne i systematisk og usystematisk varians.`, solution: `Total varians:

$$\\sigma_i^2 = (30)^2 = 900 \\, \\%^2$$

Systematisk varians:

$$\\sigma_{\\text{sys}}^2 = \\beta^2 \\sigma_m^2 = (1{,}2)^2 \\times (18)^2 = 1{,}44 \\times 324 = 466{,}56 \\, \\%^2$$

Usystematisk varians (residual):

$$\\sigma_{\\text{usys}}^2 = \\sigma_i^2 - \\sigma_{\\text{sys}}^2 = 900 - 466{,}56 = 433{,}44 \\, \\%^2$$

Som standardavvik:

**Svar:** $\\sigma_{\\text{sys}} = \\sqrt{466{,}56} = 21{,}60\\,\\%$, $\\sigma_{\\text{usys}} = \\sqrt{433{,}44} = 20{,}82\\,\\%$` },
        { label: "b", text: `Hvor stor andel av variansen skyldes systematisk risiko?`, solution: `$$\\frac{\\sigma_{\\text{sys}}^2}{\\sigma_i^2} = \\frac{466{,}56}{900}$$

**Svar:** $$= 51{,}84\\,\\%$$

Drøyt halvparten av variansen til Boreal er drevet av markedsbevegelser; resten er selskapsspesifikt.` },
        { label: "c", text: `Sammenlign med en investor som diversifiserer bort all usystematisk risiko. Hva blir investorens effektive risiko (målt som standardavvik) per krone investert i aksjen?`, solution: `En investor som holder Boreal som del av en veldiversifisert portefølje, eliminerer all den usystematiske risikoen. Det som gjenstår er kun bidraget fra systematisk risiko:

**Svar:** $$\\sigma_{\\text{effektiv}} = \\beta \\sigma_m = 1{,}2 \\times 18\\,\\% = 21{,}60\\,\\%$$

Med andre ord: en investor som diversifiserer reduserer effektiv risiko fra 30 % til 21,60 % — en risikoreduksjon på 28 % uten å gi opp forventet avkastning. Dette er nettopp diversifikasjonens magi.` },
      ],
      hints: ["Systematisk varians er $\\beta^2 \\sigma_m^2$."],
      solution: ``
    }
  ]
};
