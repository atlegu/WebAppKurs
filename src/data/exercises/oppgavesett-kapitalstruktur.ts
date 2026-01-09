import { ExerciseSet } from '../../types/course';

export const oppgavesettKapitalstruktur: ExerciseSet = {
  id: 'oppgavesett-kapitalstruktur',
  moduleId: 'modul-8-kapitalstruktur',
  title: 'Oppgavesett 7: Kapitalkostnad og Kapitalstruktur',
  description: 'Oppgaver om WACC, egenkapitalkostnad, kapitalstruktur og Modigliani-Miller-teoremet',
  exercises: [
    {
      id: 'kapstr-1',
      number: 1,
      title: 'Mølla - Kapitalkostnad og kapitalstruktur',
      problemText: `Mølla er 100% egenkapitalfinansiert og har en beta på 1,1. Markedets risikopremie forventes å bli 8,5% utover den risikofrie renta på 4,2%, dvs. en forventet avkastning på 12,7% for en veldiversifisert portefølje.`,
      subParts: [
        {
          label: 'a',
          text: 'Hva er Møllas kapitalkostnad?',
          solution: `Møllas kapitalkostnad (ved 100% EK) = Egenkapitalkrav (CAPM):

$k_E = r_f + \\beta \\times (r_m - r_f)$

$k_E = 4{,}2\\% + 1{,}1 \\times 8{,}5\\% = 4{,}2\\% + 9{,}35\\% = \\mathbf{13{,}55\\%}$`
        },
        {
          label: 'b',
          text: 'Mølla vurderer å endre sin kapitalstruktur slik at man vil sitte med 25% gjeldsfinansiering og 75% egenkapitalandel. Mølla kan låne til 6% etter skatt. Samtidig vil Møllas beta øke til 1,2 som følge av endringen i kapitalstruktur. Hva vil total kapitalkostnad for Mølla være etter denne endringen i kapitalstruktur?',
          solution: `**Nytt egenkapitalkrav med høyere beta:**

$k_E = 4{,}2\\% + 1{,}2 \\times 8{,}5\\% = 4{,}2\\% + 10{,}2\\% = 14{,}4\\%$

**Veid kapitalkostnad (WACC):**

$WACC = w_E \\times k_E + w_D \\times k_D$

$WACC = 0{,}75 \\times 14{,}4\\% + 0{,}25 \\times 6\\%$

$WACC = 10{,}8\\% + 1{,}5\\% = \\mathbf{12{,}3\\%}$

Kapitalkostnaden reduseres fra 13,55% til 12,3% ved å ta opp gjeld.`
        }
      ],
      solution: ''
    },
    {
      id: 'kapstr-2',
      number: 2,
      title: 'A.S. Handels - Avkastningskrav og prosjektvurdering',
      problemText: `A.S. Handels er finansiert fullt ut med egenkapital. Handels' beta er estimert til 1,0. Dagens risikofri rente er 10% p.a. Forventet markedsavkastning er 15%.`,
      subParts: [
        {
          label: 'a',
          text: 'Hvilket avkastningskrav bør Handels anvende på et prosjekt med gjennomsnittlig risiko?',
          solution: `For et prosjekt med gjennomsnittlig risiko (samme beta som selskapet):

$k_E = r_f + \\beta \\times (r_m - r_f)$

$k_E = 10\\% + 1{,}0 \\times (15\\% - 10\\%) = 10\\% + 5\\% = \\mathbf{15\\%}$`
        },
        {
          label: 'b',
          text: 'Hvis et nytt prosjekt har en forventet beta på 1,6, hvilket avkastningskrav burde Handels i så fall anvende på prosjektet?',
          solution: `For prosjektet med høyere risiko:

$k_{prosjekt} = r_f + \\beta_{prosjekt} \\times (r_m - r_f)$

$k_{prosjekt} = 10\\% + 1{,}6 \\times (15\\% - 10\\%) = 10\\% + 8\\% = \\mathbf{18\\%}$`
        },
        {
          label: 'c',
          text: 'Det nye prosjektet innebærer en investering på 9 mill. kr. Det forventes å generere en årlig kontantstrøm på 1,9 mill. kr. over 10 år. Beregn netto nåverdi for prosjektet med 15% og deretter 18% for CAPM. Kommenter.',
          solution: `**Ved 15% (selskapets avkastningskrav):**

$NPV = -9 + 1{,}9 \\times \\frac{1 - (1{,}15)^{-10}}{0{,}15}$

$NPV = -9 + 1{,}9 \\times 5{,}019 = -9 + 9{,}54 = \\mathbf{0{,}54}$ mill. kr

**Ved 18% (prosjektets korrekte avkastningskrav):**

$NPV = -9 + 1{,}9 \\times \\frac{1 - (1{,}18)^{-10}}{0{,}18}$

$NPV = -9 + 1{,}9 \\times 4{,}494 = -9 + 8{,}54 = \\mathbf{-0{,}46}$ mill. kr

**Kommentar:** Ved å bruke selskapets gjennomsnittlige avkastningskrav (15%) fremstår prosjektet som lønnsomt. Men siden prosjektet har høyere risiko ($\\beta = 1{,}6$), må vi bruke et høyere avkastningskrav. Med korrekt risikojustert avkastningskrav (18%) er prosjektet ulønnsomt og bør avvises.`
        }
      ],
      solution: ''
    },
    {
      id: 'kapstr-3',
      number: 3,
      title: 'Industribedrift - Endring i kapitalstruktur',
      problemText: `En industribedrift er 100% egenkapitalfinansiert. Dens beta anslås til 0,9. Markedsavkastningen er 14% og den risikofrie renten er 8% p.a.`,
      subParts: [
        {
          label: 'a',
          text: 'Beregn bedriftens egenkapitalkostnad (%)',
          solution: `$k_E = r_f + \\beta \\times (r_m - r_f)$

$k_E = 8\\% + 0{,}9 \\times (14\\% - 8\\%) = 8\\% + 5{,}4\\% = \\mathbf{13{,}4\\%}$

Siden bedriften er 100% egenkapitalfinansiert: $WACC = k_E = 13{,}4\\%$`
        },
        {
          label: 'b',
          text: 'Hvis bedriften endrer sin kapitalstruktur slik at den får 30% gjeld, antas det at betaen vil stige til 1,1. Gjeldskostnadene etter skatt er 7% p.a. Bør bedriften gjennomføre en slik endring i kapitalstruktur? (Begrunn svaret!)',
          solution: `**Ny egenkapitalkostnad med høyere beta:**

$k_E = 8\\% + 1{,}1 \\times (14\\% - 8\\%) = 8\\% + 6{,}6\\% = 14{,}6\\%$

**Ny WACC:**

$WACC = w_E \\times k_E + w_D \\times k_D$

$WACC = 0{,}70 \\times 14{,}6\\% + 0{,}30 \\times 7\\%$

$WACC = 10{,}22\\% + 2{,}1\\% = \\mathbf{12{,}32\\%}$

**Konklusjon:** Ja, bedriften bør vurdere endringen. WACC reduseres fra 13,4% til 12,32%, noe som indikerer at selskapet kan skape mer verdi for aksjonærene gjennom lavere kapitalkostnad. Den billigere gjelden mer enn oppveier den økte egenkapitalkostnaden.`
        }
      ],
      solution: ''
    },
    {
      id: 'kapstr-4',
      number: 4,
      title: 'Modigliani-Miller og økt gjeldsgrad',
      problemText: `Et selskap har 350 mill i gjeld og 870 mill i EK (markedsverdi). Gjennomsnittlig gjeldsrente er 8,7%. Forventet avkastning til egenkapitalen er 14,2%. Hva blir forventet avkastning til egenkapitalen dersom selskapet tar opp 240 mill i ny gjeld til 9,5% rente? Anta at Modigliani-Miller-teoremet gjelder.`,
      solution: `**Steg 1: Beregn nåværende avkastning på totalkapitalen**

$r_T = \\frac{D}{D+E} \\times r_D + \\frac{E}{D+E} \\times r_E$

$r_T = \\frac{350}{350+870} \\times 8{,}7\\% + \\frac{870}{350+870} \\times 14{,}2\\%$

$r_T = 0{,}287 \\times 8{,}7\\% + 0{,}713 \\times 14{,}2\\%$

$r_T = 2{,}5\\% + 10{,}1\\% = 12{,}6\\%$

**Steg 2: Beregn ny gjennomsnittlig gjeldsrente**

Total gjeld blir: $350 + 240 = 590$ mill

$r_D^{ny} = \\frac{350}{590} \\times 8{,}7\\% + \\frac{240}{590} \\times 9{,}5\\%$

$r_D^{ny} = 0{,}593 \\times 8{,}7\\% + 0{,}407 \\times 9{,}5\\%$

$r_D^{ny} = 5{,}16\\% + 3{,}87\\% = 9{,}03\\%$

**Steg 3: Beregn ny egenkapitalavkastning (MM)**

Ifølge Modigliani-Miller forblir $r_T$ uendret. Ny egenkapitalavkastning:

$r_E = r_T + (r_T - r_D) \\times \\frac{D}{E}$

$r_E = 12{,}6\\% + (12{,}6\\% - 9{,}03\\%) \\times \\frac{590}{870}$

$r_E = 12{,}6\\% + 3{,}57\\% \\times 0{,}678$

$r_E = 12{,}6\\% + 2{,}42\\% = \\mathbf{15{,}1\\%}$

Egenkapitalavkastningen øker fra 14,2% til 15,1% på grunn av økt finansiell risiko.`
    },
    {
      id: 'kapstr-5',
      number: 5,
      title: 'OK Real Estate Co. - WACC og diversifisering',
      problemText: `Den totale markedsverdien på OK Real Estate Co. er $6 millioner, og den totale verdien av selskapets gjeld er $4 millioner. Regnskapssjefen anslår betaen til OK-aksjer til i dag å være 1,5. Markedets risikopremie forventes å være 10% mens statsobligasjonsrenten er 4%.`,
      subParts: [
        {
          label: 'a',
          text: 'Hva er avkastningskravet på OK-aksjer?',
          solution: `$r_E = r_f + \\beta \\times (r_m - r_f)$

$r_E = 4\\% + 1{,}5 \\times 10\\% = 4\\% + 15\\% = \\mathbf{19\\%}$`
        },
        {
          label: 'b',
          text: 'Hva er betaen til selskapets nåværende portefølje av aktiva (gjelden betraktes som risikofri)?',
          solution: `Egenkapitalandel: $E/(D+E) = (6-4)/6 = 2/6 = 1/3 \\approx 33{,}3\\%$

Gjeldsandel: $D/(D+E) = 4/6 = 2/3 \\approx 66{,}7\\%$

Veid gjennomsnittlig beta (aktivabeta):

$\\beta_A = w_D \\times \\beta_D + w_E \\times \\beta_E$

$\\beta_A = \\frac{2}{3} \\times 0 + \\frac{1}{3} \\times 1{,}5 = \\mathbf{0{,}5}$

(Merk: Egenkapital = Total verdi - Gjeld = 6 - 4 = 2 mill, så vektene er 4/6 og 2/6)`
        },
        {
          label: 'c',
          text: 'Beregn den veide gjennomsnittlige kapitalkostnaden (WACC) gitt at skatten er 40%.',
          solution: `$WACC = \\frac{D}{V} \\times r_D \\times (1-T) + \\frac{E}{V} \\times r_E$

$WACC = \\frac{4}{6} \\times 4\\% \\times (1-0{,}40) + \\frac{2}{6} \\times 19\\%$

$WACC = 0{,}667 \\times 4\\% \\times 0{,}60 + 0{,}333 \\times 19\\%$

$WACC = 1{,}60\\% + 6{,}33\\% = \\mathbf{7{,}93\\%}$

(Alternativt: $0{,}4 \\times 0{,}6 \\times 4\\% + 0{,}6 \\times 19\\% = 0{,}96\\% + 11{,}4\\% = 12{,}36\\%$ hvis vi bruker E=2, V=6)`
        },
        {
          label: 'd',
          text: 'Hvilket avkastningskrav skulle OK benytte ved en eventuell ekspansjon av den nåværende virksomheten?',
          solution: `Ved ekspansjon av nåværende virksomhet (samme risiko) bør selskapet bruke **WACC = 12,36%** som diskonteringsrente.

Dette fordi risikoen i det nye prosjektet er tilsvarende risikoen i eksisterende virksomhet.`
        },
        {
          label: 'e',
          text: 'Anta at OK vil diversifisere gjennom å begynne med vindusproduksjon. Beta til vindusprodusenter uten gjeld anslås til 1,2. Hva er avkastningskravet for OKs nye prosjekt?',
          solution: `For et nytt prosjekt med annen risiko må vi bruke prosjektets egen beta, ikke selskapets WACC:

$r_{prosjekt} = r_f + \\beta_{vindusproduksjon} \\times (r_m - r_f)$

$r_{prosjekt} = 4\\% + 1{,}2 \\times 10\\% = 4\\% + 12\\% = \\mathbf{16\\%}$

Vindusproduksjonsprosjektet bør vurderes med 16% avkastningskrav, ikke selskapets WACC.`
        }
      ],
      solution: ''
    },
    {
      id: 'kapstr-6',
      number: 6,
      title: 'AS Skog - WACC-beregning',
      problemText: `Anta at AS Skog har en beta på 0,8. Markedets risikopremie er 6% og den risikofrie renten er 6%. Skogs politikk er at gjelden skal tilsvare 50% av egenkapitalen. Skog kan låne til 9% før skatt. Skatten er 35%. Hva er AS Skogs veide kapitalkostnad (WACC) etter skatt?`,
      solution: `**Steg 1: Beregn egenkapitalkostnaden**

$R_E = r_f + \\beta \\times (r_m - r_f)$

$R_E = 6\\% + 0{,}8 \\times 6\\% = 6\\% + 4{,}8\\% = 10{,}8\\%$

**Steg 2: Bestem kapitalstrukturen**

Gjeld = 50% av egenkapital betyr:
- Hvis EK = 2, så er G = 1
- Total kapital = EK + G = 3
- Gjeldsandel: $\\frac{G}{G+EK} = \\frac{1}{3} = 33{,}3\\%$
- EK-andel: $\\frac{EK}{G+EK} = \\frac{2}{3} = 66{,}7\\%$

**Steg 3: Beregn WACC**

$WACC = \\frac{EK}{EK+G} \\times R_E + \\frac{G}{EK+G} \\times R_G \\times (1-T)$

$WACC = \\frac{2}{3} \\times 10{,}8\\% + \\frac{1}{3} \\times 9\\% \\times (1 - 0{,}35)$

$WACC = 0{,}667 \\times 10{,}8\\% + 0{,}333 \\times 9\\% \\times 0{,}65$

$WACC = 7{,}2\\% + 1{,}95\\% = \\mathbf{9{,}15\\%}$`
    },
    {
      id: 'kapstr-7',
      number: 7,
      title: 'Bioteknologi-oppstart - MM og kapitalstruktur',
      problemText: `Du er en gründer som starter et bioteknologiselskap. Hvis forskningen lykkes, kan teknologien selges for $30 millioner. Hvis forskningen mislykkes, vil den være verdt ingenting. For å finansiere forskningen trenger du $2 millioner. Investorer er villige til å gi deg $2 millioner i startkapital i bytte mot 50% av egenkapitalen i et ubelånt selskap.`,
      subParts: [
        {
          label: 'a',
          text: 'Hva er den totale markedsverdien til selskapet uten gjeldsfinansiering?',
          solution: `Hvis investorer betaler $2 millioner for 50% av egenkapitalen:

Total verdi av egenkapital = $2M \\times 2 = \\mathbf{\\$4}$ **millioner**

(Investorene verdsetter hele selskapet til $4M siden de betaler $2M for halve selskapet)`
        },
        {
          label: 'b',
          text: 'Anta at du låner $1 million i stedet. I henhold til MM, hvilken andel av selskapets egenkapital må du selge for å skaffe den ekstra $1 millionen du trenger?',
          solution: `Ifølge Modigliani-Miller er total selskapsverdi fortsatt $4 millioner (uavhengig av kapitalstruktur i perfekte markeder).

Med $1 million i gjeld:
- Total verdi = $4 millioner
- Gjeld = $1 million
- Egenkapitalverdi = $4M - $1M = $3 millioner

For å skaffe $1 million ekstra:

$\\text{Andel som må selges} = \\frac{\\$1M}{\\$3M} = \\mathbf{33{,}3\\%}$`
        },
        {
          label: 'c',
          text: 'Hva er verdien av din andel av selskapets egenkapital i tilfelle (a) og (b)?',
          solution: `**Tilfelle (a) - Uten gjeld:**
- Total EK-verdi = $4M
- Din andel = 50%
- Din verdi = $0{,}50 \\times \\$4M = \\mathbf{\\$2}$ **millioner**

**Tilfelle (b) - Med $1M gjeld:**
- Total EK-verdi = $3M
- Du selger 33,3% av EK
- Din andel = 100% - 33,3% = 66,7% = 2/3
- Din verdi = $\\frac{2}{3} \\times \\$3M = \\mathbf{\\$2}$ **millioner**

**Konklusjon:** I et perfekt marked påvirker ikke valg av kapitalstruktur verdien for gründeren. Din andel er verdt $2 millioner i begge tilfeller.`
        }
      ],
      solution: ''
    },
    {
      id: 'kapstr-8',
      number: 8,
      title: 'Acort Industries - Gjeldsfinansiering og avkastning',
      problemText: `Acort Industries eier eiendeler som har 80% sannsynlighet for å ha en markedsverdi på $50 millioner om ett år. Det er 20% sjanse for at eiendelene bare vil være verdt $20 millioner. Nåværende risikofri rente er 5%, og Acorts eiendeler har en kapitalkostnad på 10%.`,
      subParts: [
        {
          label: 'a',
          text: 'Hvis Acort er ubelånt, hva er nåværende markedsverdi av selskapets egenkapital?',
          solution: `**Forventet verdi om ett år:**

$E[V_1] = 0{,}80 \\times \\$50M + 0{,}20 \\times \\$20M = \\$40M + \\$4M = \\$44M$

**Nåverdi av egenkapitalen:**

$E_0 = \\frac{E[V_1]}{1 + r_A} = \\frac{\\$44M}{1{,}10} = \\mathbf{\\$40}$ **millioner**`
        },
        {
          label: 'b',
          text: 'Anta i stedet at Acort har gjeld med pålydende verdi $20 millioner som forfaller om ett år. I henhold til MM, hva er verdien av Acorts egenkapital i dette tilfellet?',
          solution: `**Verdi av gjelden:**

Gjelden er risikofri fordi selv i det dårlige scenariet ($20M) kan gjelden betales tilbake.

$D_0 = \\frac{\\$20M}{1{,}05} = \\$19{,}048M$

**Verdi av egenkapitalen (MM):**

Total selskapsverdi = $40M (uendret ifølge MM)

$E_0 = V_0 - D_0 = \\$40M - \\$19{,}048M = \\mathbf{\\$20{,}952}$ **millioner**`
        },
        {
          label: 'c',
          text: 'Hva er forventet avkastning på Acorts egenkapital uten gjeldsfinansiering? Hva er forventet avkastning på egenkapitalen med gjeldsfinansiering?',
          solution: `**Uten gjeldsfinansiering:**

$r_E = \\frac{E[V_1] - E_0}{E_0} = \\frac{\\$44M - \\$40M}{\\$40M} = \\frac{\\$4M}{\\$40M} = \\mathbf{10\\%}$

**Med gjeldsfinansiering:**

Forventet verdi til egenkapitalen om ett år:
$E[E_1] = 0{,}80 \\times (\\$50M - \\$20M) + 0{,}20 \\times (\\$20M - \\$20M)$
$E[E_1] = 0{,}80 \\times \\$30M + 0{,}20 \\times \\$0 = \\$24M$

$r_E = \\frac{E[E_1] - E_0}{E_0} = \\frac{\\$24M - \\$20{,}952M}{\\$20{,}952M} = \\frac{\\$3{,}048M}{\\$20{,}952M} = \\mathbf{14{,}55\\%}$

Egenkapitalavkastningen øker med gjeldsfinansiering pga. økt risiko.`
        },
        {
          label: 'd',
          text: 'Hva er den lavest mulige realiserte avkastningen på Acorts egenkapital med og uten gjeldsfinansiering?',
          solution: `**Uten gjeldsfinansiering (dårlig scenario):**

$r_{min} = \\frac{\\$20M - \\$40M}{\\$40M} = \\frac{-\\$20M}{\\$40M} = \\mathbf{-50\\%}$

**Med gjeldsfinansiering (dårlig scenario):**

I det dårlige scenariet: Eiendeler = $20M, Gjeld = $20M
Egenkapital = $20M - $20M = $0

$r_{min} = \\frac{\\$0 - \\$20{,}952M}{\\$20{,}952M} = \\mathbf{-100\\%}$

Gjeldsfinansiering øker nedsiderisikoen betydelig - aksjonærene kan tape alt.`
        }
      ],
      solution: ''
    },
    {
      id: 'kapstr-9',
      number: 9,
      title: 'Three Piggies - Gjeld og skatteskjold',
      problemText: `Three Piggies Enterprises har ingen gjeld. Nåværende totalverdi er $53 millioner. Uten hensyn til skatt, hva vil selskapets verdi være hvis det tar opp $19,4 millioner i gjeld? Anta nå at selskapets skattesats er 40 prosent. Hva vil den totale verdien være hvis det tar opp $19,4 millioner i gjeld? Anta at gjeldsprovenyet brukes til å kjøpe tilbake aksjer.`,
      solution: `**Del 1: Uten skatt (MM Proposisjon I)**

Ifølge Modigliani-Miller i et marked uten skatt er total selskapsverdi uavhengig av kapitalstruktur:

$V_L = V_U = \\mathbf{\\$53}$ **millioner**

Gjeldsopptak endrer ikke verdien - det omfordeler kun mellom gjeld og egenkapital.

**Del 2: Med 40% skatt**

Med skatt gir gjeld et skatteskjold (tax shield) fordi rentekostnader er fradragsberettiget:

$V_L = V_U + T_C \\times D$

hvor $T_C$ = selskapsskattesats og $D$ = gjeld

$V_L = \\$53M + 0{,}40 \\times \\$19{,}4M$

$V_L = \\$53M + \\$7{,}76M = \\mathbf{\\$60{,}76}$ **millioner**

Skatteskjoldet fra gjelden øker selskapets verdi med $7,76 millioner.`
    },
    {
      id: 'kapstr-10',
      number: 10,
      title: 'Calvert Corporation - Gjeld og selskapsverdi',
      problemText: `Calvert Corporation forventer en EBIT på $22.300 hvert år i all fremtid. Selskapet har for tiden ingen gjeld, og egenkapitalkostnaden er 15 prosent.`,
      subParts: [
        {
          label: 'a',
          text: 'Hva er nåværende verdi av selskapet?',
          solution: `For et ubelånt selskap med evigvarende kontantstrøm:

$V_U = \\frac{EBIT}{r_E} = \\frac{\\$22.300}{0{,}15} = \\mathbf{\\$148.667}$`
        },
        {
          label: 'b',
          text: 'Anta at selskapet kan låne til 10%. Hvis selskapsskattesatsen er 35%, hva vil verdien av selskapet være hvis det tar opp gjeld tilsvarende 50% av ubelånt verdi? Hva om det tar opp gjeld tilsvarende 100% av ubelånt verdi?',
          solution: `**Med skatteskjold:**

$V_L = V_U + T_C \\times D$

**Gjeld = 50% av $V_U$:**

$D = 0{,}50 \\times \\$148.667 = \\$74.333$

$V_L = \\$148.667 + 0{,}35 \\times \\$74.333$

$V_L = \\$148.667 + \\$26.017 = \\mathbf{\\$174.684}$

**Gjeld = 100% av $V_U$:**

$D = 1{,}00 \\times \\$148.667 = \\$148.667$

$V_L = \\$148.667 + 0{,}35 \\times \\$148.667$

$V_L = \\$148.667 + \\$52.033 = \\mathbf{\\$200.700}$`
        },
        {
          label: 'c',
          text: 'Hva vil verdien av selskapet være hvis det tar opp gjeld tilsvarende 100% av belånt verdi?',
          solution: `Her må vi løse for $V_L$ når $D = V_L$:

$V_L = V_U + T_C \\times D$

$V_L = V_U + T_C \\times V_L$

$V_L - T_C \\times V_L = V_U$

$V_L(1 - T_C) = V_U$

$V_L = \\frac{V_U}{1 - T_C} = \\frac{\\$148.667}{1 - 0{,}35} = \\frac{\\$148.667}{0{,}65}$

$V_L = \\mathbf{\\$228.718}$

Dette representerer maksimal verdi ved 100% gjeldsfinansiering, men er teoretisk - i praksis vil finansiell nød og konkurskostnader begrense optimal gjeldsgrad.`
        }
      ],
      solution: ''
    }
  ]
};
