import { ExerciseSet } from '../../types/course';

export const portefoljeCAPMExerciseSet: ExerciseSet = {
  id: 'oppgavesett-portefolje-capm',
  moduleId: 'modul-5-portefolje',
  title: 'Regneoppgaver: Portefølje, Risiko og CAPM',
  description: 'Oppgaver om avkastning, varians, porteføljerisiko og kapitalverdimodellen',
  exercises: [
    {
      id: 'port-1',
      number: 1,
      title: 'Avkastningsberegning',
      problemText: `Aksjen Little John Industries ble 1. januar solgt for $1,90 og i slutten av året var prisen $2,50. I tillegg hadde aksjen utbetalt en dividende på $0,20 per aksje.

Kalkuler Little Johns utbytteavkastning (dividend yield), kapitalavkastning (capital gain yield) og totalavkastning (total rate of return) i prosent.`,
      solution: `**Utbytteavkastning (Dividend Yield):**
$$\\frac{\\$0{,}20}{\\$1{,}90} = \\mathbf{10{,}53\\%}$$

**Kapitalavkastning (Capital Gain):**
$$\\frac{\\$2{,}50 - \\$1{,}90}{\\$1{,}90} = \\frac{\\$0{,}60}{\\$1{,}90} = \\mathbf{31{,}58\\%}$$

**Totalavkastning:**
$$10{,}53\\% + 31{,}58\\% = \\mathbf{42{,}11\\%}$$`
    },
    {
      id: 'port-2',
      number: 2,
      title: 'Forventet verdi og varians',
      problemText: `Et spill som koster 100 kroner å delta i, gir følgende odds og mulig utbetaling:

| Sannsynlighet | Utbetaling | Netto gevinst |
|---------------|------------|---------------|
| 0,10 | 500 | 400 |
| 0,50 | 100 | 0 |
| 0,40 | 0 | -100 |

Hva er forventet gevinst ved dette spillet? Regn også ut standardavvik og varians.`,
      tables: [{
        headers: ['Sannsynlighet', 'Utbetaling', 'Netto gevinst'],
        rows: [['0,10', '500', '400'], ['0,50', '100', '0'], ['0,40', '0', '-100']]
      }],
      solution: `**Forventet gevinst:**
$$E(X) = 0{,}1 \\times 400 + 0{,}5 \\times 0 + 0{,}4 \\times (-100) = 40 + 0 - 40 = \\mathbf{0}$$

**Varians:**
$$\\sigma^2 = (400-0)^2 \\times 0{,}1 + (0-0)^2 \\times 0{,}5 + (-100-0)^2 \\times 0{,}4$$
$$= 16000 + 0 + 4000 = \\mathbf{20000}$$

**Standardavvik:**
$$\\sigma = \\sqrt{20000} = \\mathbf{141{,}4}$$`
    },
    {
      id: 'port-3',
      number: 3,
      title: 'Historisk avkastning',
      problemText: `Tabellen nedenfor viser nominell avkastning på børsen i Sør Afrika:

| År | Nominell avkastning |
|----|---------------------|
| 1977 | -2,64% |
| 1978 | 9,27% |
| 1979 | 25,56% |
| 1980 | 33,67% |
| 1981 | -3,75% |`,
      subParts: [
        {
          label: 'a',
          text: 'Beregn gjennomsnittlig avkastning og standardavvik.',
          solution: 'Gj.snitt: 12,42%, Std.avvik: 16,75%'
        },
        {
          label: 'b',
          text: 'Regn ut geometrisk gjennomsnittlig avkastning. Hva er forskjellen på aritmetisk og geometrisk gjennomsnitt?',
          solution: 'Geometrisk: 11,4%'
        }
      ],
      tables: [{
        headers: ['År', 'Nominell avkastning'],
        rows: [['1977', '-2,64%'], ['1978', '9,27%'], ['1979', '25,56%'], ['1980', '33,67%'], ['1981', '-3,75%']]
      }],
      solution: `**a) Aritmetisk gjennomsnitt:**
$$\\bar{r} = \\frac{(-2{,}64) + 9{,}27 + 25{,}56 + 33{,}67 + (-3{,}75)}{5} = \\mathbf{12{,}42\\%}$$

**Standardavvik:** $\\sigma = \\mathbf{16{,}75\\%}$

**b) Geometrisk gjennomsnitt:**
$$0{,}9736 \\times 1{,}0927 \\times 1{,}2556 \\times 1{,}3367 \\times 0{,}9625 = 1{,}7186$$
$$\\sqrt[5]{1{,}7186} = 1{,}114 \\Rightarrow \\mathbf{11{,}4\\%}$$

**Forskjell:**
- **Geometrisk** = faktisk oppnådd årlig avkastning
- **Aritmetisk** = forventet avkastning (forventningsverdien)

Geometrisk er alltid lavere når det er variasjon, fordi -10% av et stort beløp er mer enn +10% av et mindre beløp.`
    },
    {
      id: 'port-4',
      number: 4,
      title: 'Porteføljevarians',
      problemText: `To aksjer har følgende forventede avkastning med tilhørende standardavvik:

| | Forventet avkastning | Standardavvik |
|--|---------------------|---------------|
| Aksje A | 14% | 12% |
| Aksje B | 9% | 5% |

Beregn forventet avkastning og tilhørende standardavvik for en portefølje der 55% av formuen er investert i aksje A og resten i aksje B, når korrelasjonskoeffisienten mellom aksjenes avkastning er 0,35.`,
      tables: [{
        headers: ['', 'Forventet avkastning', 'Standardavvik'],
        rows: [['Aksje A', '14%', '12%'], ['Aksje B', '9%', '5%']]
      }],
      solution: `**Forventet avkastning:**
$$E(R_p) = 0{,}55 \\times 14\\% + 0{,}45 \\times 9\\% = \\mathbf{11{,}8\\%}$$

**Porteføljevarians:**
$$\\sigma_p^2 = x_A^2 \\sigma_A^2 + x_B^2 \\sigma_B^2 + 2 x_A x_B \\rho_{AB} \\sigma_A \\sigma_B$$
$$= 0{,}55^2 \\times 0{,}12^2 + 0{,}45^2 \\times 0{,}05^2 + 2 \\times 0{,}55 \\times 0{,}45 \\times 0{,}35 \\times 0{,}12 \\times 0{,}05$$
$$= 0{,}004356 + 0{,}000506 + 0{,}00104 = 0{,}005902$$

**Standardavvik:**
$$\\sigma_p = \\sqrt{0{,}005902} = \\mathbf{7{,}7\\%}$$`
    },
    {
      id: 'port-5',
      number: 5,
      title: 'Korrelasjonens effekt',
      problemText: `Aksje A har en forventet avkastning på 16% og et standardavvik på 28%. Aksje B har en forventet avkastning på 21% og et standardavvik på 36%. Beregn forventet porteføljeavkastning og standardavvik for en likeveid portefølje av A og B gitt at:`,
      subParts: [
        {
          label: 'a',
          text: 'Korrelasjonen mellom A og B er 1,0',
          solution: 'Forv.avk. = 18,5%, Std.avvik = 32%'
        },
        {
          label: 'b',
          text: 'Korrelasjonen mellom A og B er 0,5',
          solution: 'Forv.avk. = 18,5%, Std.avvik = 27,8%'
        },
        {
          label: 'c',
          text: 'Korrelasjonen mellom A og B er -0,5',
          solution: 'Forv.avk. = 18,5%, Std.avvik = 16,4%'
        }
      ],
      solution: `**Forventet avkastning (uavhengig av korrelasjon):**
$$E(R_p) = 0{,}5 \\times 16\\% + 0{,}5 \\times 21\\% = \\mathbf{18{,}5\\%}$$

**a) Korrelasjon = 1,0:**
$$\\sigma_p^2 = 0{,}5^2 \\times 28^2 + 0{,}5^2 \\times 36^2 + 2 \\times 0{,}5 \\times 0{,}5 \\times 28 \\times 36 \\times 1{,}0 = 1024$$
$$\\sigma_p = \\mathbf{32\\%}$$
(Ved perfekt korrelasjon er standardavviket det veide gjennomsnittet)

**b) Korrelasjon = 0,5:**
$$\\sigma_p^2 = 772 \\Rightarrow \\sigma_p = \\mathbf{27{,}8\\%}$$

**c) Korrelasjon = -0,5:**
$$\\sigma_p^2 = 268 \\Rightarrow \\sigma_p = \\mathbf{16{,}4\\%}$$

**Konklusjon:** Lavere korrelasjon gir lavere porteføljerisiko - dette er diversifiseringsgevinsten!`
    },
    {
      id: 'capm-1',
      number: 6,
      title: 'CAPM og investeringsprosjekt',
      problemText: `Solar a.s. har en beta på 1,25. Dagens risikofri rente er 7% og forventet avkastning på markedsporteføljen er 15%. Solar vurderer et investeringsprosjekt med samme risiko som gjennomsnittet for selskapets øvrige engasjementer.

Prosjektet krever en investering på 70 mill. og gir en forventet kontantstrøm på 18 mill pr. år i 8 år. Deretter må en regne med å stenge prosjektet, som på det tidspunkt ikke vil ha noen verdi.

Bør Solar gå inn i prosjektet?`,
      solution: `**Steg 1: Finn avkastningskravet med CAPM**
$$r = r_f + \\beta(r_m - r_f) = 0{,}07 + 1{,}25 \\times (0{,}15 - 0{,}07) = \\mathbf{17\\%}$$

**Steg 2: Beregn NPV**
$$NPV = -70 + 18 \\times \\frac{1 - \\frac{1}{1{,}17^8}}{0{,}17} = -70 + 18 \\times 4{,}207 = \\mathbf{5{,}73 \\text{ mill}}$$

**Alternativ:** Beregn IRR = 19,55% > 17%

**Konklusjon:** NPV > 0, så **prosjektet bør gjennomføres**.`
    },
    {
      id: 'capm-2',
      number: 7,
      title: 'Verdipapirmarkedslinjen',
      problemText: `Statsobligasjonsrenten er 4% og forventet avkastning på markedsporteføljen er 12%.`,
      subParts: [
        {
          label: '1',
          text: 'Hva kaller du figuren som viser sammenhengen mellom systematisk risiko og forventet avkastning?',
          solution: 'Security Market Line (SML) / Verdipapirmarkedslinjen'
        },
        {
          label: '2',
          text: 'Hva er risikopremien i dette tilfellet?',
          solution: '8%'
        },
        {
          label: '3',
          text: 'Hva er avkastningskravet til en investering med beta lik 1,5?',
          solution: '16%'
        },
        {
          label: '4',
          text: 'Hvis en investering med beta lik 0,8 har en forventet avkastning på 9,8%, har investeringen da positiv NPV?',
          solution: 'Nei, NPV er negativ'
        },
        {
          label: '5',
          text: 'Hvis markedet forventer en avkastning på 11,2% på aksje X, hva er dens beta?',
          solution: 'Beta = 0,9'
        }
      ],
      solution: `**1. Figurnavn:** Security Market Line (SML) / Verdipapirmarkedslinjen

**2. Risikopremie:**
$$r_m - r_f = 12\\% - 4\\% = \\mathbf{8\\%}$$

**3. Avkastningskrav ved β = 1,5:**
$$r = 4\\% + 1{,}5 \\times 8\\% = \\mathbf{16\\%}$$

**4. NPV-vurdering (β = 0,8, forv.avk. = 9,8%):**
$$r_{krav} = 4\\% + 0{,}8 \\times 8\\% = 10{,}4\\%$$
Forventet avkastning (9,8%) < avkastningskrav (10,4%)
**NPV er negativ**.

**5. Finn beta når forv.avk. = 11,2%:**
$$11{,}2\\% = 4\\% + \\beta \\times 8\\%$$
$$\\beta = \\frac{11{,}2\\% - 4\\%}{8\\%} = \\mathbf{0{,}9}$$`
    },
    {
      id: 'capm-3',
      number: 8,
      title: 'Diversifisering og beta',
      problemText: `Global Stål vurderer å spre seg på flere nye virksomhetsområder. Som et resultat av denne spredningen forventer man at selskapets systematiske risiko vil bli redusert. Beta forventes å falle fra 1,3 til 0,9. På den annen side forventes den langsiktige årlige veksten i dividendeutbetaling å falle fra 8% til 7% dersom diversifiseringen gjennomføres.

Dagens dividendeutbetaling (D) er kr. 3,00 per aksje. Forventet markedsavkastning er 14%, risikofri rente er 7%.

Bør Global Stål gjennomføre diversifiseringen?`,
      solution: `**Uten diversifisering (β = 1,3, g = 8%):**
$$k = 7\\% + 1{,}3 \\times (14\\% - 7\\%) = 16{,}1\\%$$
$$P_0 = \\frac{3 \\times 1{,}08}{0{,}161 - 0{,}08} = \\frac{3{,}24}{0{,}081} = \\mathbf{kr\\text{ }40}$$

**Med diversifisering (β = 0,9, g = 7%):**
$$k = 7\\% + 0{,}9 \\times (14\\% - 7\\%) = 13{,}3\\%$$
$$P_0 = \\frac{3 \\times 1{,}07}{0{,}133 - 0{,}07} = \\frac{3{,}21}{0{,}063} = \\mathbf{kr\\text{ }50{,}95}$$

**Konklusjon:** Diversifiseringen **bør gjennomføres** da den øker aksjeverdien med ca. kr 11 per aksje.`
    },
    {
      id: 'capm-4',
      number: 9,
      title: 'Beta og markedsportefølje',
      problemText: `Markedsporteføljen har et standardavvik på 20%, og kovariansen mellom markedsavkastningen og avkastningen til aksje Z er 800.`,
      subParts: [
        {
          label: '1',
          text: 'Hva er betaen for aksje Z?',
          solution: 'Beta = 2,0'
        },
        {
          label: '2',
          text: 'Hva er standardavviket til en fullt diversifisert portefølje av slike aksjer?',
          solution: '40%'
        },
        {
          label: '3',
          text: 'Hva er gjennomsnittlig beta for alle aksjer?',
          solution: '1,0'
        },
        {
          label: '4',
          text: 'Hvis markedsporteføljen ga en ekstraavkastning på 5%, hvor høy ekstraavkastning ville du forvente for aksje Z?',
          solution: '10%'
        }
      ],
      solution: `**1. Beta for aksje Z:**
$$\\beta_Z = \\frac{Cov(R_Z, R_M)}{\\sigma_M^2} = \\frac{800}{20^2} = \\frac{800}{400} = \\mathbf{2{,}0}$$

**2. Standardavvik for diversifisert portefølje:**
For en fullt diversifisert portefølje:
$$\\sigma_p = \\beta \\times \\sigma_M = 2 \\times 20\\% = \\mathbf{40\\%}$$

**3. Gjennomsnittlig beta:**
Per definisjon er gjennomsnittlig beta for alle aksjer i markedet = **1,0**

**4. Ekstraavkastning for Z:**
$$\\text{Ekstra avkastning} = \\beta \\times \\text{markedets ekstraavkastning} = 2 \\times 5\\% = \\mathbf{10\\%}$$`
    },
    {
      id: 'capm-5',
      number: 10,
      title: 'Finn markedsavkastning og risikofri rente',
      problemText: `Aksje J har en beta på 1,2 og en forventet avkastning på 15,6%. Aksje K har en beta på 0,8 og en forventet avkastning på 12,4%.

Gitt kapitalverdimodellen (CAPM), hva er da markedsavkastningen og den risikofri renten?`,
      solution: `Sett opp to ligninger basert på CAPM:

**I:** $r_f + 1{,}2(r_m - r_f) = 15{,}6\\%$
**II:** $r_f + 0{,}8(r_m - r_f) = 12{,}4\\%$

**Trekk II fra I:**
$$0{,}4(r_m - r_f) = 3{,}2\\%$$
$$r_m - r_f = 8\\%$$

**Sett inn i ligning I:**
$$r_f + 1{,}2 \\times 8\\% = 15{,}6\\%$$
$$r_f = 15{,}6\\% - 9{,}6\\% = \\mathbf{6\\%}$$

**Markedsavkastning:**
$$r_m = r_f + 8\\% = \\mathbf{14\\%}$$`
    },
    {
      id: 'capm-6',
      number: 11,
      title: 'CAPM og dividendemodell',
      problemText: `Dividendeutbetalingen i a.s. NHL er dette året kr. 2,50 pr. aksje. Ledelsen i NHL forventer at dividenden vil vokse med 5% p.a. i lang tid framover. Den risikofrie renten er for tida 7,5% og meravkastningen i aksjemarkedet (markedets risikopremie) forventes å ligge på 8,3%. Du har beregnet betaen til a.s. NHL til 1,10.

Hva vil du antyde er en fornuftig pris på aksjene i NHL med utgangspunkt i kapitalverdimodellen (CAPM) og dividendemodellen for prising av aksjer?`,
      solution: `**Steg 1: Finn avkastningskrav med CAPM**
$$r = r_f + \\beta \\times (r_m - r_f) = 7{,}5\\% + 1{,}10 \\times 8{,}3\\% = \\mathbf{16{,}63\\%}$$

**Steg 2: Bruk dividendemodellen**
$$P_0 = \\frac{D_1}{r - g} = \\frac{2{,}50 \\times 1{,}05}{0{,}1663 - 0{,}05} = \\frac{2{,}625}{0{,}1163} = \\mathbf{kr\\text{ }22{,}57}$$`
    },
    {
      id: 'capm-7',
      number: 12,
      title: 'Porteføljebeta',
      problemText: `Som aksjerådgiver har du analysert aksjene i selskapene Sats, Trane og Ulv. Risikofri rente er 6%, mens markedsporteføljens forventede avkastning er 11%. Basert på historiske priser har du målt betaverdien til 0,8; 1,2 og 2,0 for henholdsvis Sats, Trane og Ulv.

Du investerer 25% av dine midler i Sats-aksjen, 50% i Trane-aksjen og 25% i Ulv-aksjen.`,
      subParts: [
        {
          label: 'a',
          text: 'Hvilken betaverdi får din portefølje av disse tre aksjene?',
          solution: 'Beta = 1,3'
        },
        {
          label: 'b',
          text: 'Hvilken betaverdi får en portefølje bestående av en andel på -0,5 risikofritt og en andel på 1,5 i Trane-aksjen?',
          solution: 'Beta = 1,8'
        },
        {
          label: 'c',
          text: 'Hvis du har kr 200.000 disponibelt, hvordan lager du porteføljen i b)?',
          solution: 'Lån kr 100.000 risikofritt og invester kr 300.000 i Trane'
        }
      ],
      solution: `**a) Porteføljebeta:**
$$\\beta_p = 0{,}25 \\times 0{,}8 + 0{,}50 \\times 1{,}2 + 0{,}25 \\times 2{,}0 = 0{,}2 + 0{,}6 + 0{,}5 = \\mathbf{1{,}3}$$

**b) Portefølje med belåning:**
$$\\beta_p = (-0{,}5) \\times 0 + 1{,}5 \\times 1{,}2 = \\mathbf{1{,}8}$$
(Risikofritt aktivum har beta = 0)

**c) Praktisk gjennomføring:**
- Du har kr 200.000
- Lån kr 100.000 risikofritt (andel -0,5)
- Invester kr 300.000 i Trane-aksjen (andel 1,5)

Dette gir en gearet posisjon med høyere forventet avkastning og høyere risiko.`
    }
  ]
};
