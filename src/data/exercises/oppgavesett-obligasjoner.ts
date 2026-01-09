import { ExerciseSet } from '../../types/course';

export const obligasjonerExerciseSet: ExerciseSet = {
  id: 'oppgavesett-obligasjoner',
  moduleId: 'modul-3-obligasjoner',
  title: 'Regneoppgaver: Renter og obligasjoner',
  description: 'Oppgaver om obligasjonsprising, yield to maturity, og durasjon',
  exercises: [
    {
      id: 'obl-1',
      number: 1,
      title: 'Obligasjonsprising og kurs',
      problemText: `Obligasjon A har tre år igjen til forfall, mens obligasjon B har fem år igjen til forfall. Årlig kupongrente er 8% for obligasjon A og 4% for obligasjon B. Den effektive renten på de to obligasjonene er 6,0% for obligasjon A og 5,6% for obligasjon B.

Finn prisen på hver av de to obligasjonene som prosent av pålydende. Forklar kort hvorfor den ene obligasjonen står i overkurs og den andre i underkurs.`,
      solution: `**Obligasjon A:**
$$P_0 = \\frac{8}{0{,}06} \\times \\left(1 - \\frac{1}{1{,}06^3}\\right) + \\frac{100}{1{,}06^3} \\approx \\mathbf{105{,}35\\%}$$

**Obligasjon B:**
$$P_0 = \\frac{4}{0{,}056} \\times \\left(1 - \\frac{1}{1{,}056^5}\\right) + \\frac{100}{1{,}056^5} \\approx \\mathbf{93{,}19\\%}$$

**Forklaring:** Obligasjon A står i **overkurs** fordi kupongrenten (8%) er høyere enn den effektive renten (6%). Obligasjon B står i **underkurs** fordi kupongrenten (4%) er lavere enn den effektive renten (5,6%).`
    },
    {
      id: 'obl-2',
      number: 2,
      title: 'Arvet obligasjon',
      problemText: `For syv år siden arvet du en obligasjon etter din grandtante. Obligasjonens pålydende er 1.000 kr. Obligasjonens pålydende rente som utbetales i slutten av hvert år, er 7%. Markedsrenten er nå 5,5%. Obligasjonen vil bli innløst i sin helhet om tre år. Din yngre bror vil kjøpe obligasjonen av deg i dag for 1.085 kr.

Er du villig til å selge? Svaret skal underbygges med beregninger.

Gitt at du selger obligasjonen, hvilken effektiv rente får da din yngre bror på sin investering (ca. tall godkjennes)?`,
      solution: `**Beregning av nåverdi:**
$$NV = \\frac{70}{1{,}055} + \\frac{70}{1{,}055^2} + \\frac{1070}{1{,}055^3} = 1040{,}46 \\text{ kr}$$

**Konklusjon:** Du bør **selge** for 1.085 kr, da dette er høyere enn markedsverdien på 1.040,46 kr.

**Brors effektive rente:**
Ved å løse ligningen:
$$1085 = \\frac{70}{1+r} + \\frac{70}{(1+r)^2} + \\frac{1070}{(1+r)^3}$$

Ved prøving og feiling: $r \\approx \\mathbf{3{,}94\\%}$`
    },
    {
      id: 'obl-3',
      number: 3,
      title: 'Effektiv rente',
      problemText: `Obligasjon A og obligasjon B forfaller begge om to år. Obligasjon A koster i dag kr 197,16, mens obligasjon B koster kr 102,06. Pålydende beløp er kr 200 for obligasjon A og kr 100 for obligasjon B. Årlig nominell rente (kupongrente) er 10% for obligasjon A og 12% for obligasjon B.

Finn den effektive renten på hver av de to obligasjonene.`,
      solution: `**Obligasjon A:**
$$197{,}16 = \\frac{20}{(1+y_A)} + \\frac{220}{(1+y_A)^2}$$
$$y_A \\approx \\mathbf{10{,}8\\%}$$

**Obligasjon B:**
$$102{,}06 = \\frac{12}{(1+y_B)} + \\frac{112}{(1+y_B)^2}$$
$$y_B \\approx \\mathbf{10{,}8\\%}$$`
    },
    {
      id: 'obl-4',
      number: 4,
      title: 'Markedsverdi og avkastning',
      problemText: `En obligasjon pålydende kr 5000, som innløses etter 10 år, betales det ut 7% rente hvert år. Beregn markedsverdien for obligasjonen når man alternativt kan plassere pengene til 5%. Hvilken avkastning oppnår man hvis man kjøper obligasjonen for kr 5250?`,
      solution: `**Markedsverdi ved 5% rente:**
$$PV = 350 \\times \\left(\\frac{1}{0{,}05} - \\frac{1}{0{,}05 \\times 1{,}05^{10}}\\right) + \\frac{5000}{1{,}05^{10}} = \\mathbf{5772 \\text{ kr}}$$

**Avkastning ved kjøp for 5250 kr:**
$$YTM = \\frac{350 + \\frac{5000 - 5250}{10}}{\\frac{5000 + 5250}{2}} \\times 100 = \\mathbf{6{,}34\\%}$$`
    },
    {
      id: 'obl-5',
      number: 5,
      title: 'Halvårlige kuponger',
      problemText: `På en obligasjon pålydende kr 10000, som innløses etter 5 år, betales det ut 4% rente hvert halvår. Hva blir avkastning pr. år for denne investeringen når obligasjonen kjøpes for kr 9000?`,
      solution: `**Halvårlig avkastning:**
$$YTM_{halvår} = \\frac{400 + \\frac{10000 - 9000}{10}}{\\frac{10000 + 9000}{2}} \\approx 0{,}0526$$

**Årlig avkastning:**
$$(1 + 0{,}0526)^2 - 1 \\approx 0{,}108$$

**Svar:** Årlig avkastning er ca. **10,8%**`
    },
    {
      id: 'obl-6',
      number: 6,
      title: 'Yield to Maturity',
      problemText: `En obligasjon omsettes i dag for kr. 911,37. Dens pålydende er kr. 1000 og den har en kupongrente på 8% som utbetales med kr. 40,00 hvert halvår. Obligasjonens forfallstidspunkt er om seks år. Hva er obligasjonens "yield to maturity" (per halvår og per år)? Dersom en ikke klarer å regne det ut, kan en bruke prøve å feile metoden.`,
      solution: `Vi mottar hvert halvår 4% av 1000 = kr. 40. 6 år = 12 halvår.

**Halvårlig YTM:**
$$YTM_{halvår} = \\frac{40 + \\frac{1000 - 911{,}37}{12}}{\\frac{1000 + 911{,}37}{2}} \\approx 0{,}05 = \\mathbf{5\\%}$$

**Årlig YTM:**
$$(1 + 0{,}05)^2 - 1 = 0{,}1025 = \\mathbf{10{,}25\\%}$$

Kan også løses ved å sette inn i formelen:
$$911{,}37 = 40 \\times \\left[\\frac{1}{r} - \\frac{1}{r(1+r)^{12}}\\right] + \\frac{1000}{(1+r)^{12}}$$`
    },
    {
      id: 'obl-7',
      number: 7,
      title: 'Spotrente og terminrente',
      problemText: `Ett års spotrente er i dag 6%, og terminrenten for år 2 og 3 er hhv. $_1f_2 = 7\\%$ og $_2f_3 = 8\\%$.

Hva er dagens markedspris for en obligasjon med kupongrente på 6% som betales en gang pr. år, pålydende kr 1000 og løpetid 3 år fra i dag? Første rentebetaling er om ett år fra i dag.`,
      solution: `Verdien finnes ved å diskontere kontantstrømmene med terminrentene:

$$P_0 = \\frac{60}{1 + {}_0r_1} + \\frac{60}{(1 + {}_0r_1)(1 + {}_1f_2)} + \\frac{1060}{(1 + {}_0r_1)(1 + {}_1f_2)(1 + {}_2f_3)}$$

$$P_0 = \\frac{60}{1{,}06} + \\frac{60}{(1{,}06)(1{,}07)} + \\frac{1060}{(1{,}06)(1{,}07)(1{,}08)}$$

$$P_0 = \\mathbf{974{,}86 \\text{ kr}}$$`
    },
    {
      id: 'obl-8',
      number: 8,
      title: 'Studielån og obligasjoner',
      problemText: `Da du startet på ÅS brukte du studielånet ditt til å handle 100 obligasjoner med pålydende verdi 1000 kr. Obligasjonens pålydende rente/kupong som utbetales i slutten av hvert år, er 6%. Markedsrenten er nå 5,2%. Obligasjonen vil bli innløst i sin helhet om fire år.

a) Hvilken salgsverdi har obligasjonene i dag? Har obligasjonen en over- eller underkurs? (Gi en kort begrunnelse)`,
      subParts: [
        {
          label: 'a',
          text: 'Hvilken salgsverdi har obligasjonene i dag? Har obligasjonen en over- eller underkurs?',
          solution: 'Salgsverdi per obligasjon: 1028 kr. Total verdi: 102.800 kr. Overkurs.'
        }
      ],
      solution: `**Verdi per obligasjon:**
$$B = 60 \\times \\left(\\frac{1}{0{,}052} - \\frac{1}{0{,}052 \\times 1{,}052^4}\\right) + \\frac{1000}{1{,}052^4} = \\mathbf{1028 \\text{ kr}}$$

**Total verdi:** $1028 \\times 100 = \\mathbf{102.800 \\text{ kr}}$

**Kurs:** Obligasjonen har **overkurs** fordi kupongrenten (6%) er høyere enn markedsrenten (5,2%).`
    },
    {
      id: 'obl-9',
      number: 9,
      title: 'Rentefølsomhet',
      problemText: `Du har en obligasjon som betaler årlig kupong på 5. Om 4 år forfaller obligasjonen og du får 100 pålydende. Dagens rente er 6%.`,
      subParts: [
        {
          label: 'a',
          text: 'Dersom renten synker fra 6% til 3%, hvor mange prosent øker obligasjonsprisen med?',
          solution: '11,29% økning'
        },
        {
          label: 'b',
          text: 'Dersom renten øker fra 6% til 9%, hvor mange prosent synker obligasjonsprisen med?',
          solution: '9,83% reduksjon'
        },
        {
          label: 'c',
          text: 'Hva skyldes størrelsesforskjellen i svarene i a) og b)?',
          solution: 'Obligasjonsprisens konveksitet'
        }
      ],
      solution: `**a) Rente synker fra 6% til 3%:**

Pris ved 6%:
$$P_{6\\%} = 5 \\times \\left(\\frac{1}{0{,}06} - \\frac{1}{0{,}06 \\times 1{,}06^4}\\right) + \\frac{100}{1{,}06^4} = 96{,}53$$

Pris ved 3%:
$$P_{3\\%} = 5 \\times \\left(\\frac{1}{0{,}03} - \\frac{1}{0{,}03 \\times 1{,}03^4}\\right) + \\frac{100}{1{,}03^4} = 107{,}43$$

Endring: $\\frac{107{,}43 - 96{,}53}{96{,}53} = \\mathbf{11{,}29\\%}$

**b) Rente øker fra 6% til 9%:**

Pris ved 9%:
$$P_{9\\%} = 5 \\times \\left(\\frac{1}{0{,}09} - \\frac{1}{0{,}09 \\times 1{,}09^4}\\right) + \\frac{100}{1{,}09^4} = 87{,}04$$

Endring: $\\frac{87{,}04 - 96{,}53}{96{,}53} = \\mathbf{-9{,}83\\%}$

**c)** Forskjellen skyldes **obligasjonsprisens konveksitet** - prisøkningen ved rentereduksjon er større enn prisnedgangen ved tilsvarende renteøkning.`
    },
    {
      id: 'obl-10',
      number: 10,
      title: 'Durasjon',
      problemText: `For obligasjonen i oppgave 9 (kupong 5, pålydende 100, forfall om 4 år):`,
      subParts: [
        {
          label: 'a',
          text: 'Regn ut Macaulay\'s durasjon når renten er 6%.',
          solution: '3,718 år'
        },
        {
          label: 'b',
          text: 'Hva betyr dette tallet?',
          solution: 'Gjennomsnittlig maturitet for kontantstrømmene'
        },
        {
          label: 'c',
          text: 'Regn ut modifisert durasjon. Hva betyr dette tallet?',
          solution: '3,507 - estimat for prosentvis prisendring per 1% renteendring'
        },
        {
          label: 'd',
          text: 'Dersom du hadde brukt tallet for modifisert durasjon for å estimere prisendringen ved 3% renteendring, hva ville estimatet vært?',
          solution: '10,52% endring'
        },
        {
          label: 'e',
          text: 'Hvorfor stemte ikke den prosentvise endringen i oppgave 9 med tallet for modifisert durasjon?',
          solution: 'Konveksitet - modifisert durasjon er kun et lineært estimat'
        }
      ],
      solution: `**a) Macaulay's durasjon:**

| T | CF | NV(CF) | Vekt | t×vekt |
|---|-----|--------|------|--------|
| 1 | 5 | 4,72 | 0,049 | 0,049 |
| 2 | 5 | 4,45 | 0,046 | 0,092 |
| 3 | 5 | 4,20 | 0,043 | 0,130 |
| 4 | 105 | 83,17 | 0,862 | 3,446 |
| Sum | | 96,53 | 1,00 | **3,718** |

**b)** Macaulay's durasjon er den **gjennomsnittlige maturiteten** for kontantstrømmene i obligasjonen.

**c) Modifisert durasjon:**
$$\\text{Modifisert durasjon} = \\frac{\\text{Macaulay's durasjon}}{1+r} = \\frac{3{,}718}{1{,}06} = \\mathbf{3{,}507}$$

Dette er et estimat for hvor mange prosent obligasjonsprisen endres ved 1 prosentpoengs renteendring.

**d)** Estimat for 3% renteendring: $3 \\times 3{,}507 = \\mathbf{10{,}52\\%}$

**e)** Avviket skyldes at modifisert durasjon er et **lineært estimat**, mens obligasjonsprisens forhold til renten er **konveks**. Ved store renteendringer undervurderer durasjonen prisøkningen ved rentefall og overvurderer prisnedgangen ved renteoppgang.`
    },
    {
      id: 'obl-11',
      number: 11,
      title: 'Nullkupong durasjon',
      problemText: `Du har en nullkupong obligasjon som forfaller om 4 år. Hva er durasjonen til denne obligasjonen?`,
      solution: `Durasjonen til en nullkupong obligasjon er **alltid lik maturiteten**.

**Svar:** Durasjonen er **4 år**.

*Forklaring:* En nullkupong obligasjon har kun én kontantstrøm (pålydende ved forfall), så den gjennomsnittlige maturiteten er lik forfallstidspunktet.`
    }
  ]
};
