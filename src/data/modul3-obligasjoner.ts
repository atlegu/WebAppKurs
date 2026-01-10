import { Module, CalculatorContent, InteractiveModelContent } from '../types/course';

export const modul3ObligasjonerModule: Module = {
  id: 'modul-3-obligasjoner',
  title: 'Obligasjoner – Forstå Gjeld som Investering',
  icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
  order: 4,
  learningObjectives: [
    'Forklare hva en obligasjon er og hvordan den skiller seg fra aksjer',
    'Beregne pris, avkastning og effektiv rente (YTM) for obligasjoner',
    'Forstå den inverse sammenhengen mellom rente og obligasjonspris',
    'Vurdere risikofaktorer som kredittrisiko, renterisiko og durasjon',
    'Forstå kredittrating og hvordan det påvirker obligasjonsprisen',
    'Kjenne til det norske obligasjonsmarkedet og grønne obligasjoner'
  ],
  sections: [
    // ===================================
    // SEKSJON 3.1: Hva er egentlig en obligasjon?
    // ===================================
    {
      id: 'seksjon-3-1-hva-er-obligasjon',
      title: 'Hva er egentlig en obligasjon?',
      order: 1,
      content: [
        {
          id: '3-1-hook',
          type: 'text',
          order: 1,
          text: '**Tenk deg at du er staten Norge.** Du trenger 10 milliarder kroner til å bygge en ny vei. Du kan ikke bare trykke penger – da får vi inflasjon. Løsningen? Du låner pengene fra vanlige folk og institusjoner. Du utsteder en *obligasjon*.',
          emphasis: 'important'
        },
        {
          id: '3-1-podcast',
          type: 'audio',
          order: 2,
          title: 'Podcast: Introduksjon til obligasjoner',
          duration: '17 min',
          url: '/obligasjon.m4a',
          description: 'Vi anbefaler at du lytter til denne podcasten før du leser videre. Her får du en grundig og lettfattelig introduksjon til obligasjoner, renter og prising – fortalt på en engasjerende måte som gir deg et solid fundament for resten av modulen.'
        },
        {
          id: '3-1-intro',
          type: 'text',
          order: 3,
          text: 'Obligasjoner er selve grunnmuren i finansmarkedene. Faktisk er obligasjonsmarkedet globalt *større* enn aksjemarkedet! I Norge alene er det utestående obligasjoner for over 3 000 milliarder kroner. Likevel er det mange som ikke forstår hva en obligasjon egentlig er.'
        },
        {
          id: '3-1-heading-definisjon',
          type: 'heading',
          order: 3,
          level: 2,
          text: 'Den enkle definisjonen'
        },
        {
          id: '3-1-definition',
          type: 'definition',
          order: 4,
          term: 'Obligasjon (Bond)',
          definition: 'Et verdipapir som dokumenterer at investor har lånt penger til en utsteder (stat, kommune, bank eller selskap). Utstederen forplikter seg til å betale renter (kuponger) i låneperioden og tilbakebetale hovedstolen ved forfall.'
        },
        {
          id: '3-1-analogi',
          type: 'example',
          order: 5,
          title: 'Tenk på obligasjonen som et gjeldsbrev',
          content: 'Du låner bestemor 10 000 kroner. Hun skriver under på at hun vil betale deg 500 kr i året i rente, og tilbakebetale hele lånet om 5 år. Du har nettopp "kjøpt" en obligasjon fra bestemor!',
          calculation: 'Obligasjonens verdier:\n• Pålydende (hovedstol): 10 000 kr\n• Kupongrente: 5% (500 kr/år)\n• Løpetid: 5 år\n• Totalt mottar du: 500 × 5 + 10 000 = 12 500 kr'
        },
        {
          id: '3-1-heading-forskjell',
          type: 'heading',
          order: 6,
          level: 2,
          text: 'Obligasjoner vs. aksjer – den store forskjellen'
        },
        {
          id: '3-1-table-forskjell',
          type: 'table',
          order: 7,
          headers: ['Egenskap', 'Obligasjon', 'Aksje'],
          rows: [
            ['Hva er det?', 'Et lån til selskapet', 'En eierandel i selskapet'],
            ['Avkastning', 'Fast rente (kupong)', 'Utbytte + kursgevinst (usikkert)'],
            ['Risiko', 'Lavere (kreditorer betales først)', 'Høyere (aksjonærer kommer sist)'],
            ['Stemmerett', 'Ingen', 'Ja, på generalforsamling'],
            ['Ved konkurs', 'Forrang til verdier', 'Får det som er igjen (ofte ingenting)'],
            ['Løpetid', 'Bestemt forfallsdato', 'Uendelig (så lenge selskapet finnes)']
          ]
        },
        {
          id: '3-1-keypoint-1',
          type: 'keypoint',
          order: 8,
          points: [
            'En aksje er eierandel – du blir medeier i selskapet',
            'En obligasjon er et lån – du blir kreditor til selskapet',
            'Kreditorer har forrang ved konkurs, men begrenset oppside'
          ]
        },
        {
          id: '3-1-heading-utstedere',
          type: 'heading',
          order: 9,
          level: 2,
          text: 'Hvem utsteder obligasjoner?'
        },
        {
          id: '3-1-table-utstedere',
          type: 'table',
          order: 10,
          headers: ['Utsteder', 'Type obligasjon', 'Risiko', 'Eksempel'],
          rows: [
            ['Staten', 'Statsobligasjoner', 'Svært lav', 'Norsk statsobligasjon 10 år'],
            ['Kommuner', 'Kommunelån', 'Lav', 'Oslo kommune, Bergen kommune'],
            ['Banker', 'Bankobligasjoner', 'Lav-middels', 'DNB, Nordea, SpareBank 1'],
            ['Selskaper', 'Foretaksobligasjoner', 'Middels-høy', 'Equinor, Telenor, Norwegian'],
            ['Høyrisiko-selskaper', 'High yield (junk bonds)', 'Høy', 'Oppstartselskaper, shipping']
          ]
        },
        {
          id: '3-1-heading-hvorfor',
          type: 'heading',
          order: 11,
          level: 2,
          text: 'Hvorfor investerer folk i obligasjoner?'
        },
        {
          id: '3-1-list-hvorfor',
          type: 'list',
          order: 12,
          ordered: false,
          items: [
            '**Forutsigbar inntekt:** Faste kupongbetalinger gir jevn kontantstrøm',
            '**Lavere risiko:** Mer stabilt enn aksjer, spesielt statsobligasjoner',
            '**Diversifisering:** Obligasjoner beveger seg ofte motsatt av aksjer',
            '**Kapitalvern:** Ved forfall får du tilbake pålydende (med mindre utsteder misligholder)'
          ]
        },
        {
          id: '3-1-example-real',
          type: 'example',
          order: 13,
          title: 'Et ekte eksempel: Equinor-obligasjon',
          content: 'I 2023 utstedte Equinor en obligasjon med følgende vilkår:\n\n• Pålydende: 1 000 000 kr per obligasjon\n• Kupongrente: 4,5% årlig\n• Løpetid: 7 år\n• Rating: A+ (S&P)\n\nInvestorer som kjøpte denne obligasjonen visste at de ville motta 45 000 kr i rente hvert år i 7 år, og deretter få tilbake 1 million kroner ved forfall – forutsatt at Equinor ikke går konkurs.',
          calculation: 'Total avkastning over 7 år:\nKuponger: 45 000 × 7 = 315 000 kr\nTilbakebetaling: 1 000 000 kr\nTotal: 1 315 000 kr på en investering på 1 000 000 kr'
        },
        {
          id: '3-1-quiz-1',
          type: 'quiz',
          order: 14,
          question: 'Hva er hovedforskjellen mellom en aksje og en obligasjon?',
          options: [
            'Aksjer gir alltid høyere avkastning enn obligasjoner',
            'Aksjer er eierandel, obligasjoner er lån',
            'Obligasjoner er mer risikable enn aksjer',
            'Det er ingen vesentlig forskjell'
          ],
          correctAnswer: 1,
          explanation: 'En aksje representerer eierandel i et selskap, mens en obligasjon er et lån til selskapet. Dette gir ulike rettigheter: aksjonærer har stemmerett og andel av overskudd, mens obligasjonseiere har krav på faste rentebetalinger og forrang ved konkurs.'
        },
        {
          id: '3-1-quiz-2',
          type: 'quiz',
          order: 15,
          question: 'Hvilken type obligasjon har normalt lavest risiko?',
          options: [
            'High yield-obligasjoner',
            'Foretaksobligasjoner',
            'Statsobligasjoner',
            'Bankobligasjoner'
          ],
          correctAnswer: 2,
          explanation: 'Statsobligasjoner (fra stabile land som Norge) har lavest risiko fordi staten kan øke skatter eller i ytterste konsekvens trykke penger for å betale tilbake. Statsobligasjoner brukes ofte som "risikofri rente" i finansielle beregninger.'
        },
        {
          id: '3-1-keypoint-summary',
          type: 'keypoint',
          order: 16,
          points: [
            'En obligasjon er et verdipapir som dokumenterer et lån',
            'Investor får faste rentebetalinger (kuponger) og hovedstol tilbake ved forfall',
            'Obligasjoner har lavere risiko enn aksjer, men også lavere forventet avkastning',
            'Statsobligasjoner er tryggest, high yield-obligasjoner er mest risikable'
          ]
        },
        {
          id: '3-1-reflection',
          type: 'reflection',
          order: 17,
          question: 'Tenk deg at du er pensjonist og lever av sparepengene dine. Hvorfor kan obligasjoner være mer attraktive for deg enn aksjer?'
        }
      ]
    },

    // ===================================
    // SEKSJON 3.2: Obligasjonens anatomi
    // ===================================
    {
      id: 'seksjon-3-2-anatomi',
      title: 'Obligasjonens anatomi – alle nøkkeltallene',
      order: 2,
      content: [
        {
          id: '3-2-hook',
          type: 'text',
          order: 1,
          text: '**Før du kjøper en bruktbil, sjekker du kilometerstand, årsmodell og servicehistorikk.** Før du kjøper en obligasjon, må du forstå dens "spesifikasjoner" – de nøkkeltallene som bestemmer verdien og risikoen.',
          emphasis: 'important'
        },
        {
          id: '3-2-intro',
          type: 'text',
          order: 2,
          text: 'Hver obligasjon har et sett med faste egenskaper som bestemmes ved utstedelse. Disse kan ikke endres i løpetiden (med noen unntak). Å forstå disse er fundamentalt for å kunne vurdere obligasjoner.'
        },
        {
          id: '3-2-heading-begreper',
          type: 'heading',
          order: 3,
          level: 2,
          text: 'De viktigste begrepene'
        },
        {
          id: '3-2-def-paalydende',
          type: 'definition',
          order: 4,
          term: 'Pålydende (Face Value / Par Value)',
          definition: 'Beløpet obligasjonen lyder på og som tilbakebetales ved forfall. Ofte 1 000 kr eller 1 000 000 kr. Også kalt "hovedstol" eller "nominell verdi".'
        },
        {
          id: '3-2-def-kupong',
          type: 'definition',
          order: 5,
          term: 'Kupongrente (Coupon Rate)',
          definition: 'Den faste årlige renten som utsteder betaler, uttrykt som prosent av pålydende. Kalles "kupong" fordi man historisk klippet kuponger fra obligasjonspapiret for å få utbetaling.'
        },
        {
          id: '3-2-def-kupongbelop',
          type: 'definition',
          order: 6,
          term: 'Kupongbeløp',
          definition: 'Det faktiske kronebeløpet som utbetales. Beregnes som: Pålydende × Kupongrente. Med pålydende 1 000 kr og 5% kupongrente blir kupongbeløpet 50 kr per år.'
        },
        {
          id: '3-2-def-lopetid',
          type: 'definition',
          order: 7,
          term: 'Løpetid (Maturity)',
          definition: 'Tiden fra i dag til obligasjonen forfaller. En 10-årig obligasjon utstedt i 2020 forfaller i 2030 – i 2025 har den 5 år igjen av løpetiden.'
        },
        {
          id: '3-2-def-forfall',
          type: 'definition',
          order: 8,
          term: 'Forfallsdato (Maturity Date)',
          definition: 'Datoen da pålydende skal tilbakebetales og obligasjonen opphører å eksistere.'
        },
        {
          id: '3-2-def-kurs',
          type: 'definition',
          order: 9,
          term: 'Kurs (Price)',
          definition: 'Markedsprisen på obligasjonen, vanligvis uttrykt som prosent av pålydende. Kurs 100 = pari (lik pålydende). Kurs 95 = 5% under pari. Kurs 105 = 5% over pari.'
        },
        {
          id: '3-2-table-sammendrag',
          type: 'table',
          order: 10,
          headers: ['Begrep', 'Engelsk', 'Forklaring', 'Eksempel'],
          rows: [
            ['Pålydende', 'Face Value', 'Lånebeløpet', '1 000 kr'],
            ['Kupongrente', 'Coupon Rate', 'Årlig rente i %', '5%'],
            ['Kupongbeløp', 'Coupon Payment', 'Pålydende × Kupongrente', '50 kr/år'],
            ['Løpetid', 'Time to Maturity', 'År til forfall', '5 år'],
            ['Forfallsdato', 'Maturity Date', 'Når lånet forfaller', '15.03.2029'],
            ['Kurs', 'Price', 'Markedspris (% av pålydende)', '98%']
          ]
        },
        {
          id: '3-2-heading-kurstyper',
          type: 'heading',
          order: 11,
          level: 2,
          text: 'Kurstyper: Pari, overkurs og underkurs'
        },
        {
          id: '3-2-table-kurs',
          type: 'table',
          order: 12,
          headers: ['Kurstype', 'Kurs', 'Betydning', 'Når skjer dette?'],
          rows: [
            ['Pari', '100', 'Markedspris = Pålydende', 'Ved utstedelse (ofte), eller når kupongrente = markedsrente'],
            ['Underkurs (discount)', '< 100', 'Du betaler mindre enn pålydende', 'Når kupongrente < markedsrente'],
            ['Overkurs (premium)', '> 100', 'Du betaler mer enn pålydende', 'Når kupongrente > markedsrente']
          ]
        },
        {
          id: '3-2-example-lesing',
          type: 'example',
          order: 13,
          title: 'Lese en obligasjonsbeskrivelse',
          content: 'Du finner denne informasjonen om en obligasjon:\n\n**Storebrand ASA 2027**\n• ISIN: NO0012345678\n• Pålydende: NOK 1 000 000\n• Kupongrente: 3M NIBOR + 1,50%\n• Kupongfrekvens: Kvartalsvis\n• Forfall: 15.09.2027\n• Kurs: 99,50',
          calculation: '**Hva betyr dette?**\n\n• Utsteder: Storebrand (forsikringsselskap)\n• Minste investering: 1 million kroner\n• Renten følger NIBOR (pengemarkedsrente) + 1,50% (flytende rente)\n• Du mottar rente 4 ganger i året\n• Forfaller 15. september 2027\n• Prisen er 0,5% under pari (du betaler 995 000 kr for 1 mill pålydende)'
        },
        {
          id: '3-2-heading-betalinger',
          type: 'heading',
          order: 14,
          level: 2,
          text: 'Tidslinje for obligasjonsbetalinger'
        },
        {
          id: '3-2-text-tidslinje',
          type: 'text',
          order: 15,
          text: 'En typisk obligasjon med årlige kupongbetalinger ser slik ut over tid:'
        },
        {
          id: '3-2-example-tidslinje',
          type: 'example',
          order: 16,
          title: 'Kontantstrømmer for en 5-årig obligasjon',
          content: 'Obligasjon med pålydende 1 000 kr, kupongrente 6%, årlig kupong:',
          calculation: 'År 0: Du betaler -1 000 kr (kjøp til pari)\nÅr 1: Du mottar +60 kr (kupong)\nÅr 2: Du mottar +60 kr (kupong)\nÅr 3: Du mottar +60 kr (kupong)\nÅr 4: Du mottar +60 kr (kupong)\nÅr 5: Du mottar +60 kr + 1 000 kr = +1 060 kr (siste kupong + pålydende)\n\nTotal: -1 000 + 60 + 60 + 60 + 60 + 1 060 = +300 kr gevinst'
        },
        {
          id: '3-2-quiz',
          type: 'quiz',
          order: 17,
          question: 'En obligasjon med pålydende 10 000 kr og kupongrente 4% betaler hvor mye i årlig kupong?',
          options: [
            '40 kr',
            '400 kr',
            '4 000 kr',
            '4%'
          ],
          correctAnswer: 1,
          explanation: 'Kupongbeløp = Pålydende × Kupongrente = 10 000 kr × 4% = 10 000 × 0,04 = 400 kr per år.'
        },
        {
          id: '3-2-exercise',
          type: 'exercise',
          order: 18,
          title: 'Regneoppgave: Beregn kupongbeløp',
          description: 'Du vurderer å kjøpe en obligasjon med:\n• Pålydende: 100 000 kr\n• Kupongrente: 5,5%\n• Kupongfrekvens: Halvårlig (2 ganger i året)\n\nHvor mye mottar du i hver kupongbetaling?',
          hint: 'Ved halvårlig kupong deler du årlig kupongbeløp på 2.'
        },
        {
          id: '3-2-keypoint',
          type: 'keypoint',
          order: 19,
          points: [
            'Pålydende er beløpet som tilbakebetales ved forfall',
            'Kupongrente × Pålydende = Årlig kupongbetaling',
            'Kurs under 100 = du kjøper med rabatt (underkurs)',
            'Kurs over 100 = du betaler premium (overkurs)',
            'De fleste obligasjoner har enten årlig eller halvårlig kupongutbetaling'
          ]
        },
        {
          id: '3-2-reflection',
          type: 'reflection',
          order: 20,
          question: 'Hvorfor tror du obligasjoner ofte selges i store enheter (f.eks. 1 million kroner)? Hva betyr dette for privatinvestorer?'
        }
      ]
    },

    // ===================================
    // SEKSJON 3.3: Pris og avkastning
    // ===================================
    {
      id: 'seksjon-3-3-pris-avkastning',
      title: 'Pris og avkastning – den inverse dansen',
      order: 3,
      content: [
        {
          id: '3-3-hook',
          type: 'text',
          order: 1,
          text: '**Her kommer den viktigste innsikten i hele obligasjonsverdenen:** Når renten går opp, går obligasjonsprisen ned. Og omvendt. Denne "inverse dansen" forvirrer mange, men er helt logisk når du forstår hvorfor.',
          emphasis: 'important'
        },
        {
          id: '3-3-intro',
          type: 'text',
          order: 2,
          text: 'I 2022 opplevde obligasjonsinvestorer sitt verste år på generasjoner. Sentralbankene hevet rentene raskt, og obligasjonspriser stupte verden over. De som forsto den inverse sammenhengen, var forberedt. De som ikke gjorde det, ble tatt på sengen.'
        },
        {
          id: '3-3-heading-prinsipp',
          type: 'heading',
          order: 3,
          level: 2,
          text: 'Hvorfor beveger pris og rente seg motsatt?'
        },
        {
          id: '3-3-text-forklaring',
          type: 'text',
          order: 4,
          text: 'Tenk på det slik: Du eier en obligasjon som betaler 3% rente. Plutselig tilbyr markedet nye obligasjoner med 5% rente. Hvem vil kjøpe din 3%-obligasjon til full pris når de kan få 5% hos naboen?\n\nSvaret er: ingen. Du må senke prisen til din obligasjon blir like attraktiv som de nye. Prisen faller til et nivå der *effektiv* avkastning blir lik markedsrenten.'
        },
        {
          id: '3-3-keypoint-invers',
          type: 'keypoint',
          order: 5,
          points: [
            'Rente opp → Obligasjonspris ned',
            'Rente ned → Obligasjonspris opp'
          ]
        },
        {
          id: '3-3-heading-prising',
          type: 'heading',
          order: 6,
          level: 2,
          text: 'Hvordan beregnes obligasjonsprisen?'
        },
        {
          id: '3-3-def-pris',
          type: 'definition',
          order: 7,
          term: 'Obligasjonspris',
          definition: 'Nåverdien av alle fremtidige kontantstrømmer (kupongbetalinger + pålydende ved forfall), diskontert med markedsrenten. Jo høyere markedsrente, jo lavere blir nåverdien.'
        },
        {
          id: '3-3-formula',
          type: 'formula',
          order: 8,
          formula: 'Pris = C/(1+r)¹ + C/(1+r)² + ... + C/(1+r)ⁿ + F/(1+r)ⁿ',
          description: 'Hvor:\n• C = Kupongbetaling per periode\n• r = Markedsrente per periode (diskonteringsrente)\n• n = Antall perioder til forfall\n• F = Pålydende (face value)'
        },
        {
          id: '3-3-formula-annuitet',
          type: 'formula',
          order: 9,
          formula: 'Pris = C × [1 - (1+r)^(-n)] / r + F/(1+r)ⁿ',
          description: 'Forenklet formel der første ledd er nåverdien av kupongene (annuitet) og andre ledd er nåverdien av pålydende.'
        },
        {
          id: '3-3-example-prising',
          type: 'example',
          order: 10,
          title: 'Prisberegning steg for steg',
          content: 'Du vurderer en obligasjon med:\n• Pålydende: 1 000 kr\n• Kupongrente: 5% (kupong = 50 kr/år)\n• Løpetid: 3 år\n• Markedsrente: 4%\n\nHva er obligasjonen verdt?',
          calculation: 'Nåverdi av år 1: 50 / (1.04)¹ = 48,08 kr\nNåverdi av år 2: 50 / (1.04)² = 46,23 kr\nNåverdi av år 3: 50 / (1.04)³ = 44,45 kr\nNåverdi av pålydende: 1000 / (1.04)³ = 889,00 kr\n\n**Total pris = 48,08 + 46,23 + 44,45 + 889,00 = 1 027,76 kr**\n\nKurs = 1 027,76 / 1 000 = 102,78%\n\nObligasjonen prises OVER pari fordi kupongrenten (5%) er høyere enn markedsrenten (4%).'
        },
        {
          id: '3-3-calc-bond',
          type: 'calculator',
          order: 11,
          title: 'Obligasjonspris-kalkulator',
          description: 'Prøv selv! Juster kupongrente, markedsrente og løpetid for å se hvordan prisen endrer seg. Se spesielt på hva som skjer når markedsrenten stiger eller synker!',
          calculatorType: 'bond-price',
          inputs: [
            {
              key: 'faceValue',
              label: 'Pålydende verdi',
              type: 'currency',
              default: 1000,
              min: 100,
              step: 100,
              helpText: 'Beløpet som tilbakebetales ved forfall'
            },
            {
              key: 'couponRate',
              label: 'Kupongrente',
              type: 'percentage',
              default: 5,
              min: 0,
              max: 20,
              step: 0.25,
              helpText: 'Årlig rentebetaling i prosent av pålydende'
            },
            {
              key: 'ytm',
              label: 'Markedsrente (YTM)',
              type: 'percentage',
              default: 4,
              min: 0,
              max: 20,
              step: 0.25,
              helpText: 'Avkastningskravet i markedet'
            },
            {
              key: 'years',
              label: 'År til forfall',
              type: 'years',
              default: 5,
              min: 1,
              max: 30,
              step: 1,
              helpText: 'Antall år til obligasjonen forfaller'
            }
          ],
          formula: 'Pris = Σ C/(1+r)^t + F/(1+r)^n',
          resultLabel: 'Obligasjonspris',
          resultUnit: 'kr',
          explanation: 'Se hvordan rente og løpetid påvirker prisen'
        } as CalculatorContent,
        {
          id: '3-3-heading-sammenheng',
          type: 'heading',
          order: 12,
          level: 2,
          text: 'Regelen for pris og kupong vs. markedsrente'
        },
        {
          id: '3-3-table-sammenheng',
          type: 'table',
          order: 13,
          headers: ['Hvis...', 'Da handles obligasjonen...', 'Fordi...'],
          rows: [
            ['Kupongrente = Markedsrente', 'Til pari (kurs 100)', 'Obligasjonen gir akkurat det markedet krever'],
            ['Kupongrente > Markedsrente', 'Over pari (overkurs)', 'Obligasjonen gir mer enn markedet krever – investorer vil betale ekstra'],
            ['Kupongrente < Markedsrente', 'Under pari (underkurs)', 'Obligasjonen gir mindre enn markedet krever – prisen må ned for å kompensere']
          ]
        },
        {
          id: '3-3-example-rentesjokk',
          type: 'example',
          order: 14,
          title: 'Case: Rentesjokket i 2022',
          content: 'Lisa kjøpte en 10-årig statsobligasjon i 2021 med 1,5% kupongrente til kurs 100.\n\nI løpet av 2022 hevet Norges Bank styringsrenten fra 0,5% til 2,75%. Markedsrenten på tilsvarende obligasjoner steg til 3,5%.',
          calculation: '**Hva skjedde med Lisas obligasjon?**\n\nMed 9 år igjen og markedsrente på 3,5%:\nNy pris ≈ 850 kr (kurs 85)\n\n**Lisas tap:** 1 000 - 850 = 150 kr per obligasjon = **15% tap**\n\nMen: Hvis Lisa holder til forfall, får hun fortsatt tilbake 1 000 kr + alle kupongene. Tapet er kun "på papiret" (urealisert) med mindre hun selger.'
        },
        {
          id: '3-3-heading-lopetid',
          type: 'heading',
          order: 15,
          level: 2,
          text: 'Løpetidens betydning'
        },
        {
          id: '3-3-text-lopetid',
          type: 'text',
          order: 16,
          text: 'En kritisk innsikt: **Jo lengre løpetid, desto mer følsom er obligasjonen for renteendringer.** Dette skyldes at flere fremtidige betalinger må diskonteres med den nye renten.',
          emphasis: 'important'
        },
        {
          id: '3-3-table-lopetid',
          type: 'table',
          order: 17,
          headers: ['Løpetid', 'Renteøkning 1%', 'Omtrentlig prisfall'],
          rows: [
            ['2 år', '1%', '-2%'],
            ['5 år', '1%', '-4 til -5%'],
            ['10 år', '1%', '-8 til -9%'],
            ['30 år', '1%', '-15 til -20%']
          ]
        },
        {
          id: '3-3-quiz-1',
          type: 'quiz',
          order: 18,
          question: 'Hva skjer med obligasjonsprisen når markedsrenten stiger?',
          options: [
            'Prisen stiger',
            'Prisen faller',
            'Prisen forblir uendret',
            'Det avhenger av kupongrenten'
          ],
          correctAnswer: 1,
          explanation: 'Når markedsrenten stiger, faller obligasjonsprisen. Dette er den inverse sammenhengen: eksisterende obligasjoner med lavere kupong blir mindre attraktive sammenlignet med nye obligasjoner, så prisen må ned for å kompensere.'
        },
        {
          id: '3-3-quiz-2',
          type: 'quiz',
          order: 19,
          question: 'En obligasjon med 6% kupongrente handles i et marked der renten er 4%. Handles den til overkurs eller underkurs?',
          options: [
            'Underkurs (under pari)',
            'Pari (kurs 100)',
            'Overkurs (over pari)',
            'Umulig å si'
          ],
          correctAnswer: 2,
          explanation: 'Når kupongrenten (6%) er høyere enn markedsrenten (4%), gir obligasjonen mer enn markedet krever. Investorer er villige til å betale mer enn pålydende for disse attraktive kupongene, så obligasjonen handles til overkurs.'
        },
        {
          id: '3-3-keypoint',
          type: 'keypoint',
          order: 20,
          points: [
            'Obligasjonspris og markedsrente beveger seg alltid i motsatt retning',
            'Prisen er nåverdien av alle fremtidige kontantstrømmer',
            'Kupongrente > markedsrente = overkurs',
            'Kupongrente < markedsrente = underkurs',
            'Lang løpetid = høy rentefølsomhet'
          ]
        },
        {
          id: '3-3-reflection',
          type: 'reflection',
          order: 21,
          question: 'Norges Bank har varslet at rentene vil holde seg høye i lang tid. Hva betyr dette for deg hvis du vurderer å investere i obligasjoner med lang løpetid?'
        }
      ]
    },

    // ===================================
    // SEKSJON 3.4: Effektiv rente (YTM)
    // ===================================
    {
      id: 'seksjon-3-4-ytm',
      title: 'Effektiv rente (YTM) – det ærlige målet',
      order: 4,
      content: [
        {
          id: '3-4-hook',
          type: 'text',
          order: 1,
          text: '**Kupongrenten lyver.** Eller, for å være mer presis: den forteller bare halve sannheten. Hvis du kjøper en obligasjon med 5% kupong til underkurs, tjener du faktisk *mer* enn 5%. Effektiv rente (YTM) gir deg det ærlige bildet.',
          emphasis: 'important'
        },
        {
          id: '3-4-heading-definisjon',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Hva er effektiv rente?'
        },
        {
          id: '3-4-def-ytm',
          type: 'definition',
          order: 3,
          term: 'Effektiv rente / Yield to Maturity (YTM)',
          definition: 'Den totale årlige avkastningen du oppnår hvis du kjøper obligasjonen til dagens pris og holder den til forfall. YTM tar hensyn til kupongbetalinger, kjøpspris, pålydende og tid til forfall.'
        },
        {
          id: '3-4-text-hvorfor',
          type: 'text',
          order: 4,
          text: 'YTM er det viktigste målet for å sammenligne obligasjoner fordi det inkluderer *alt*: både løpende kupongavkastning og eventuell kursgevinst/-tap ved forfall.'
        },
        {
          id: '3-4-heading-forstaelse',
          type: 'heading',
          order: 5,
          level: 2,
          text: 'Forstå sammenhengen'
        },
        {
          id: '3-4-table-sammenheng',
          type: 'table',
          order: 6,
          headers: ['Situasjon', 'Kjøpspris', 'YTM vs. Kupongrente'],
          rows: [
            ['Kjøp til pari', 'Pris = Pålydende', 'YTM = Kupongrente'],
            ['Kjøp under pari', 'Pris < Pålydende', 'YTM > Kupongrente (du får kursgevinst)'],
            ['Kjøp over pari', 'Pris > Pålydende', 'YTM < Kupongrente (du får kurstap)']
          ]
        },
        {
          id: '3-4-text-intuisjon',
          type: 'text',
          order: 7,
          text: 'Intuisjonen er enkel: Kjøper du billig, tjener du mer. Kjøper du dyrt, tjener du mindre. YTM fanger opp begge effektene.'
        },
        {
          id: '3-4-heading-beregning',
          type: 'heading',
          order: 8,
          level: 2,
          text: 'Hvordan beregnes YTM?'
        },
        {
          id: '3-4-formula',
          type: 'formula',
          order: 9,
          formula: 'Pris = C/(1+YTM)¹ + C/(1+YTM)² + ... + (C+F)/(1+YTM)ⁿ',
          description: 'YTM er den renten som gjør at nåverdien av alle fremtidige kontantstrømmer blir lik dagens pris. Denne ligningen må løses numerisk (prøving og feiling, eller med kalkulator/Excel).'
        },
        {
          id: '3-4-formula-approx',
          type: 'formula',
          order: 10,
          formula: 'YTM ≈ [C + (F - P) / n] / [(F + P) / 2]',
          description: 'Tilnærmet formel:\n• C = Årlig kupongbetaling\n• F = Pålydende (Face value)\n• P = Pris\n• n = År til forfall\n\nDenne gir et godt estimat uten kompleks matematikk.'
        },
        {
          id: '3-4-example-beregning',
          type: 'example',
          order: 11,
          title: 'Beregne YTM steg for steg',
          content: 'Du finner en obligasjon med:\n• Pålydende: 1 000 kr\n• Kupongrente: 5% (kupong = 50 kr/år)\n• Løpetid: 3 år\n• Pris: 960 kr (underkurs)',
          calculation: '**Med tilnærmet formel:**\n\nYTM ≈ [50 + (1000 - 960) / 3] / [(1000 + 960) / 2]\nYTM ≈ [50 + 13,33] / 980\nYTM ≈ 63,33 / 980\nYTM ≈ **6,46%**\n\n**Med Excel/kalkulator (nøyaktig):**\nYTM = 6,76%\n\n**Tolkning:** Selv om kupongrenten bare er 5%, blir din faktiske avkastning 6,76% fordi du kjøper med 4% rabatt og får tilbake fulle 1 000 kr ved forfall.'
        },
        {
          id: '3-4-example-overkurs',
          type: 'example',
          order: 12,
          title: 'YTM ved overkurs',
          content: 'Samme obligasjon, men nå til pris 1 050 kr (overkurs):',
          calculation: 'YTM ≈ [50 + (1000 - 1050) / 3] / [(1000 + 1050) / 2]\nYTM ≈ [50 - 16,67] / 1025\nYTM ≈ 33,33 / 1025\nYTM ≈ **3,25%**\n\n**Tolkning:** Kupongrenten er 5%, men din faktiske avkastning er bare 3,25% fordi du betaler 5% over pålydende og "taper" dette ved forfall.'
        },
        {
          id: '3-4-heading-bruk',
          type: 'heading',
          order: 13,
          level: 2,
          text: 'Praktisk bruk av YTM'
        },
        {
          id: '3-4-list-bruk',
          type: 'list',
          order: 14,
          ordered: false,
          items: [
            '**Sammenligne obligasjoner:** To obligasjoner med ulik kupong og pris kan sammenlignes direkte via YTM',
            '**Vurdere attraktivitet:** Er YTM høyere eller lavere enn alternativ plassering?',
            '**Risikovurdering:** Høy YTM kan signalisere høy risiko (markedet krever kompensasjon)',
            '**Porteføljestyring:** Fondsforvaltere bruker YTM til å måle forventet avkastning'
          ]
        },
        {
          id: '3-4-text-begrensninger',
          type: 'text',
          order: 15,
          text: '**Begrensninger ved YTM:**\n• Forutsetter at du holder til forfall\n• Forutsetter at alle kuponger reinvesteres til samme rente (urealistisk)\n• Tar ikke hensyn til skatt\n• Fungerer ikke for obligasjoner med spesielle klausuler (callable bonds)',
          emphasis: 'warning'
        },
        {
          id: '3-4-quiz-1',
          type: 'quiz',
          order: 16,
          question: 'En obligasjon med 4% kupongrente handles til kurs 92 (under pari). Hva kan vi si om YTM?',
          options: [
            'YTM = 4%',
            'YTM < 4%',
            'YTM > 4%',
            'Umulig å si uten mer informasjon'
          ],
          correctAnswer: 2,
          explanation: 'Når en obligasjon handles under pari (underkurs), er YTM høyere enn kupongrenten. Du får både kupongbetalinger OG en kursgevinst ved forfall (du betalte 920, får tilbake 1000).'
        },
        {
          id: '3-4-quiz-2',
          type: 'quiz',
          order: 17,
          question: 'Hvorfor er YTM et bedre mål enn kupongrente for å vurdere obligasjoner?',
          options: [
            'YTM er alltid høyere enn kupongrenten',
            'YTM tar hensyn til både kuponger og kursgevinst/-tap',
            'YTM er enklere å beregne',
            'Kupongrenten endrer seg, YTM er fast'
          ],
          correctAnswer: 1,
          explanation: 'YTM er et mer komplett mål fordi det inkluderer både kupongavkastningen og eventuell kursgevinst eller -tap ved forfall. Kupongrenten forteller bare om de løpende renteutbetalingene, ikke om hva du faktisk tjener totalt.'
        },
        {
          id: '3-4-exercise',
          type: 'exercise',
          order: 18,
          title: 'Oppgave: Sammenlign to obligasjoner',
          description: '**Obligasjon A:**\n• Kupongrente: 6%\n• Pris: 1 100 kr\n• Løpetid: 5 år\n\n**Obligasjon B:**\n• Kupongrente: 4%\n• Pris: 920 kr\n• Løpetid: 5 år\n\nBegge har pålydende 1 000 kr. Bruk den tilnærmede formelen til å estimere YTM for begge. Hvilken gir høyest forventet avkastning?',
          hint: 'YTM ≈ [C + (F - P) / n] / [(F + P) / 2]'
        },
        {
          id: '3-4-keypoint',
          type: 'keypoint',
          order: 19,
          points: [
            'YTM er den reelle avkastningen hvis du holder til forfall',
            'Kjøp under pari → YTM > Kupongrente',
            'Kjøp over pari → YTM < Kupongrente',
            'Bruk YTM for å sammenligne obligasjoner med ulik kupong og pris',
            'YTM er standarden i obligasjonsmarkedet'
          ]
        },
        {
          id: '3-4-reflection',
          type: 'reflection',
          order: 20,
          question: 'Du ser en obligasjon med YTM på 8% mens statsobligasjoner gir 4%. Hva kan dette fortelle deg om obligasjonens risiko?'
        }
      ]
    },

    // ===================================
    // SEKSJON 3.5: Durasjon
    // ===================================
    {
      id: 'seksjon-3-5-durasjon',
      title: 'Durasjon – følsomhet for renteendringer',
      order: 5,
      content: [
        {
          id: '3-5-hook',
          type: 'text',
          order: 1,
          text: '**Du vet nå at obligasjonspriser faller når renten stiger. Men *hvor mye* faller de?** Svaret ligger i et begrep som heter durasjon – obligasjonens "rentevarighet". Det er ditt viktigste verktøy for å måle renterisiko.',
          emphasis: 'important'
        },
        {
          id: '3-5-heading-definisjon',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Hva er durasjon?'
        },
        {
          id: '3-5-def-durasjon',
          type: 'definition',
          order: 3,
          term: 'Durasjon (Duration)',
          definition: 'Et mål på obligasjonens rentefølsomhet – hvor mye prisen endres når renten endres med 1 prosentpoeng. Kan også tolkes som den vektede gjennomsnittlige tiden til du får pengene dine tilbake.'
        },
        {
          id: '3-5-text-tokning',
          type: 'text',
          order: 4,
          text: 'Durasjon har to beslektede tolkninger:\n\n1. **Rentefølsomhet:** En obligasjon med durasjon 5 vil falle ca 5% i pris hvis renten stiger 1 prosentpoeng\n\n2. **Tid til tilbakebetaling:** Gjennomsnittlig tid før du får pengene dine tilbake, vektet etter størrelsen på betalingene'
        },
        {
          id: '3-5-heading-typer',
          type: 'heading',
          order: 5,
          level: 2,
          text: 'To typer durasjon'
        },
        {
          id: '3-5-table-typer',
          type: 'table',
          order: 6,
          headers: ['Type', 'Forklaring', 'Bruk'],
          rows: [
            ['Macaulay-durasjon', 'Vektet gjennomsnittlig tid til kontantstrømmene kommer', 'Teoretisk mål, utgangspunkt for beregning'],
            ['Modifisert durasjon', 'Prosentvis prisendring ved 1% renteendring', 'Praktisk risikostyring, sammenligning']
          ]
        },
        {
          id: '3-5-formula-modifisert',
          type: 'formula',
          order: 7,
          formula: 'Modifisert durasjon = Macaulay-durasjon / (1 + r)',
          description: 'Der r = markedsrente per periode.\n\nPrisendring ≈ -Modifisert durasjon × Renteendring\n\nEksempel: Med modifisert durasjon 5 og renteøkning på 1%:\nPrisendring ≈ -5 × 1% = -5%'
        },
        {
          id: '3-5-example-durasjon',
          type: 'example',
          order: 8,
          title: 'Durasjon i praksis',
          content: 'Du har to obligasjoner:\n\n**Obligasjon A:** Modifisert durasjon = 2\n**Obligasjon B:** Modifisert durasjon = 8\n\nNorges Bank hever renten med 0,5 prosentpoeng. Hva skjer?',
          calculation: '**Obligasjon A:**\nPrisendring ≈ -2 × 0,5% = -1%\nEn investering på 100 000 kr faller til 99 000 kr\n\n**Obligasjon B:**\nPrisendring ≈ -8 × 0,5% = -4%\nEn investering på 100 000 kr faller til 96 000 kr\n\n**Konklusjon:** Obligasjon B er 4 ganger mer sensitiv for renteendringer!'
        },
        {
          id: '3-5-heading-faktorer',
          type: 'heading',
          order: 9,
          level: 2,
          text: 'Hva påvirker durasjonen?'
        },
        {
          id: '3-5-table-faktorer',
          type: 'table',
          order: 10,
          headers: ['Faktor', 'Effekt på durasjon', 'Forklaring'],
          rows: [
            ['Lengre løpetid', '↑ Høyere durasjon', 'Flere år med betalinger som påvirkes av renteendring'],
            ['Lavere kupongrente', '↑ Høyere durasjon', 'Større andel av verdien kommer fra pålydende til slutt'],
            ['Høyere markedsrente', '↓ Lavere durasjon', 'Fjerne betalinger diskonteres kraftigere, nære betalinger teller mer'],
            ['Nullkupong-obligasjon', 'Durasjon = Løpetid', 'All betaling kommer til slutt']
          ]
        },
        {
          id: '3-5-keypoint-nullkupong',
          type: 'keypoint',
          order: 11,
          points: [
            'En nullkupong-obligasjon har durasjon lik løpetiden (f.eks. 10 år)',
            'En kupongobligasjon har alltid durasjon KORTERE enn løpetiden',
            'Høy kupong → lavere durasjon (du får pengene raskere tilbake)'
          ]
        },
        {
          id: '3-5-heading-bruk',
          type: 'heading',
          order: 12,
          level: 2,
          text: 'Praktisk bruk av durasjon'
        },
        {
          id: '3-5-list-bruk',
          type: 'list',
          order: 13,
          ordered: false,
          items: [
            '**Risikovurdering:** Sammenlign obligasjoner med ulik løpetid og kupong',
            '**Porteføljestyring:** Hold kontroll på renteeksponering i hele porteføljen',
            '**Immunisering:** Matcher durasjon på eiendeler og forpliktelser (pensjonskasser)',
            '**Markedssyn:** Velg lang durasjon hvis du tror renten faller, kort hvis du tror den stiger'
          ]
        },
        {
          id: '3-5-example-strategi',
          type: 'example',
          order: 14,
          title: 'Strategisk bruk av durasjon',
          content: 'Maria forvalter et obligasjonsfond. Hun tror Norges Bank vil kutte renten det neste året fordi inflasjonen faller.',
          calculation: '**Marias strategi:**\n\nHun øker gjennomsnittlig durasjon i fondet fra 4 til 7 ved å:\n- Selge kortsiktige obligasjoner\n- Kjøpe langsiktige obligasjoner\n\n**Hvis renten faller 1%:**\nGammel portefølje: +4% avkastning\nNy portefølje: +7% avkastning\n\n**Risiko:** Hvis Maria tar feil og renten STIGER 1%:\nGammel portefølje: -4%\nNy portefølje: -7%\n\nHøyere durasjon = høyere risiko OG høyere potensiell gevinst.'
        },
        {
          id: '3-5-quiz-1',
          type: 'quiz',
          order: 15,
          question: 'En obligasjon har modifisert durasjon på 6. Renten stiger med 0,5 prosentpoeng. Omtrent hvor mye faller prisen?',
          options: [
            '-0,5%',
            '-3%',
            '-6%',
            '-12%'
          ],
          correctAnswer: 1,
          explanation: 'Prisendring ≈ -Durasjon × Renteendring = -6 × 0,5% = -3%. Durasjonen forteller deg direkte hvor sensitiv obligasjonen er for renteendringer.'
        },
        {
          id: '3-5-quiz-2',
          type: 'quiz',
          order: 16,
          question: 'Hvilken obligasjon har høyest durasjon?',
          options: [
            '10-årig med 6% kupong',
            '10-årig med 2% kupong',
            '5-årig med 2% kupong',
            'Alle har lik durasjon'
          ],
          correctAnswer: 1,
          explanation: 'Den 10-årige obligasjonen med 2% kupong har høyest durasjon. Lang løpetid øker durasjon, og lav kupong øker den ytterligere (fordi mer av verdien kommer fra pålydende til slutt).'
        },
        {
          id: '3-5-keypoint',
          type: 'keypoint',
          order: 17,
          points: [
            'Durasjon måler rentefølsomhet – hvor mye prisen endres ved renteendring',
            'Prisendring ≈ -Durasjon × Renteendring',
            'Lang løpetid og lav kupong gir høy durasjon',
            'Durasjon er ditt viktigste verktøy for å styre renterisiko',
            'Velg durasjon basert på ditt syn på renteretningen'
          ]
        },
        {
          id: '3-5-reflection',
          type: 'reflection',
          order: 18,
          question: 'Du er snart pensjonist og har sparepenger i obligasjonsfond. Bør du velge fond med høy eller lav durasjon? Hvorfor?'
        },
        {
          id: '3-5-interactive-bond-pricing',
          type: 'interactive-model',
          order: 19,
          modelType: 'bond-pricing',
          title: 'Interaktiv obligasjonsprismodell',
          description: 'Utforsk sammenhengen mellom rente, obligasjonspris, durasjon og konveksitet. Juster parametrene og se hvordan grafen og nøkkeltallene endres i sanntid.',
          controls: [
            {
              key: 'faceValue',
              label: 'Pålydende verdi',
              type: 'slider',
              min: 100,
              max: 10000,
              step: 100,
              default: 1000,
              unit: ' kr',
              helpText: 'Beløpet som utbetales ved forfall'
            },
            {
              key: 'couponRate',
              label: 'Kupongrente',
              type: 'slider',
              min: 0,
              max: 12,
              step: 0.5,
              default: 5,
              unit: '%',
              helpText: 'Årlig rente som utbetales til obligasjonseier'
            },
            {
              key: 'ytm',
              label: 'Markedsrente (YTM)',
              type: 'slider',
              min: 0.5,
              max: 15,
              step: 0.25,
              default: 5,
              unit: '%',
              helpText: 'Avkastningskravet i markedet (Yield to Maturity)'
            },
            {
              key: 'maturity',
              label: 'Løpetid',
              type: 'slider',
              min: 1,
              max: 30,
              step: 1,
              default: 10,
              unit: ' år',
              helpText: 'Antall år til obligasjonen forfaller'
            },
            {
              key: 'frequency',
              label: 'Kupongfrekvens',
              type: 'slider',
              min: 1,
              max: 4,
              step: 1,
              default: 1,
              unit: '/år',
              helpText: 'Antall kupongutbetalinger per år'
            }
          ],
          outputs: [
            {
              key: 'price',
              label: 'Obligasjonspris',
              unit: ' kr',
              precision: 2,
              highlight: true
            },
            {
              key: 'macaulayDuration',
              label: 'Macaulay-durasjon',
              unit: ' år',
              precision: 2
            },
            {
              key: 'modifiedDuration',
              label: 'Modifisert durasjon',
              precision: 2
            },
            {
              key: 'convexity',
              label: 'Konveksitet',
              precision: 2
            },
            {
              key: 'dv01',
              label: 'DV01',
              unit: ' kr',
              precision: 4,
              helpText: 'Prisendring ved 1 basispunkt renteendring'
            }
          ],
          charts: [
            {
              type: 'line',
              title: 'Pris-rente kurve',
              xAxis: { key: 'yield', label: 'Rente (%)', unit: '%' },
              yAxis: { key: 'price', label: 'Obligasjonspris (kr)', unit: 'kr' },
              series: [
                { key: 'price', name: 'Pris', color: '#10b981' }
              ]
            }
          ],
          explanation: 'Legg merke til at pris-rente kurven er **konveks** (buet). Dette betyr at prisøkningen ved rentefall er større enn prisfallet ved tilsvarende renteøkning. Konveksitet er en fordel for obligasjonsinvestorer!\n\n**Tips:** Prøv å endre kupongrente og løpetid for å se hvordan de påvirker durasjon og konveksitet.'
        } as InteractiveModelContent
      ]
    },

    // ===================================
    // SEKSJON 3.6: Risikofaktorer
    // ===================================
    {
      id: 'seksjon-3-6-risiko',
      title: 'Risikofaktorer du må kjenne',
      order: 6,
      content: [
        {
          id: '3-6-hook',
          type: 'text',
          order: 1,
          text: '**"Obligasjoner er trygge."** Dette utsagnet har kostet mange investorer dyrt. Obligasjoner er SIKRERE enn aksjer, men de er langt fra risikofrie. Å forstå risikotypene er nøkkelen til å ta gode investeringsbeslutninger.',
          emphasis: 'important'
        },
        {
          id: '3-6-intro',
          type: 'text',
          order: 2,
          text: 'I 2022 falt globale obligasjonsindekser med over 15% – det verste året på mange tiår. Investorer som trodde obligasjoner var "trygge", fikk en brutal oppvåkning. La oss gå gjennom de viktigste risikoene.'
        },
        {
          id: '3-6-heading-oversikt',
          type: 'heading',
          order: 3,
          level: 2,
          text: 'De fem hovedrisikotypene'
        },
        {
          id: '3-6-table-risiko',
          type: 'table',
          order: 4,
          headers: ['Risikotype', 'Beskrivelse', 'Hvem rammes hardest?'],
          rows: [
            ['Renterisiko', 'Tap når markedsrenten stiger', 'Lange obligasjoner, lav kupong'],
            ['Kredittrisiko', 'Tap hvis utsteder ikke kan betale', 'High yield, usikre selskaper'],
            ['Inflasjonsrisiko', 'Kjøpekraft eroderes', 'Lange obligasjoner, lav kupong'],
            ['Likviditetsrisiko', 'Vanskelig å selge til fair pris', 'Små utstedelser, eksotiske obligasjoner'],
            ['Valutarisiko', 'Tap fra valutakursendringer', 'Obligasjoner i fremmed valuta']
          ]
        },
        {
          id: '3-6-heading-renterisiko',
          type: 'heading',
          order: 5,
          level: 2,
          text: '1. Renterisiko – den største for de fleste'
        },
        {
          id: '3-6-def-renterisiko',
          type: 'definition',
          order: 6,
          term: 'Renterisiko',
          definition: 'Risikoen for at obligasjonens markedsverdi faller når rentenivået stiger. Jo lengre durasjon, jo høyere renterisiko.'
        },
        {
          id: '3-6-text-renterisiko',
          type: 'text',
          order: 7,
          text: 'Vi har allerede sett hvordan dette fungerer (husk den inverse dansen!). Viktig poeng: **Renterisiko realiseres bare hvis du selger før forfall.** Holder du til forfall, får du uansett tilbake pålydende (forutsatt at utsteder ikke misligholder).'
        },
        {
          id: '3-6-heading-kredittrisiko',
          type: 'heading',
          order: 8,
          level: 2,
          text: '2. Kredittrisiko – kan du stole på utstederen?'
        },
        {
          id: '3-6-def-kredittrisiko',
          type: 'definition',
          order: 9,
          term: 'Kredittrisiko (Default Risk)',
          definition: 'Risikoen for at utstederen ikke klarer å betale kuponger eller tilbakebetale pålydende. I verste fall går utsteder konkurs.'
        },
        {
          id: '3-6-example-kreditt',
          type: 'example',
          order: 10,
          title: 'Case: Norwegian Air 2019',
          content: 'I 2019 slet Norwegian med høy gjeld og tap. Obligasjonseierne fryktet at selskapet ikke ville klare å betale tilbake lånene.',
          calculation: 'Norwegian-obligasjoner som opprinnelig var utstedt til kurs 100 falt til kurs 30-40.\n\nInvestorer som hadde kjøpt for 1 000 000 kr, så verdien falle til 300 000-400 000 kr.\n\nDa COVID-krisen rammet i 2020, måtte obligasjonseierne akseptere "haircut" – de fikk bare delvis tilbakebetalt.\n\n**Lærdommen:** Høy rente på utstedelsestidspunktet (7-8%) reflekterte høy risiko. Markedet hadde rett.'
        },
        {
          id: '3-6-heading-inflasjon',
          type: 'heading',
          order: 11,
          level: 2,
          text: '3. Inflasjonsrisiko – den snikende fienden'
        },
        {
          id: '3-6-def-inflasjon',
          type: 'definition',
          order: 12,
          term: 'Inflasjonsrisiko',
          definition: 'Risikoen for at inflasjonen spiser opp realavkastningen. Du får nominelt det du ble lovet, men det er verdt mindre.'
        },
        {
          id: '3-6-text-inflasjon',
          type: 'text',
          order: 13,
          text: 'Med en obligasjon på 3% rente og 4% inflasjon *taper* du faktisk 1% kjøpekraft hvert år. Inflasjonsrisiko er spesielt farlig for langsiktige obligasjoner fordi inflasjonen har mange år på å erodere verdien.'
        },
        {
          id: '3-6-heading-likviditet',
          type: 'heading',
          order: 14,
          level: 2,
          text: '4. Likviditetsrisiko – kan du selge?'
        },
        {
          id: '3-6-def-likviditet',
          type: 'definition',
          order: 15,
          term: 'Likviditetsrisiko',
          definition: 'Risikoen for at du ikke kan selge obligasjonen raskt til en rettferdig pris. Lav omsetning gir stor forskjell mellom kjøps- og salgspris (spread).'
        },
        {
          id: '3-6-text-likviditet',
          type: 'text',
          order: 16,
          text: 'Statsobligasjoner har høy likviditet – du kan alltid selge. Små foretaksobligasjoner kan være tilnærmet umulige å selge på kort varsel, eller du må akseptere stor rabatt.'
        },
        {
          id: '3-6-heading-valuta',
          type: 'heading',
          order: 17,
          level: 2,
          text: '5. Valutarisiko – for utenlandske obligasjoner'
        },
        {
          id: '3-6-text-valuta',
          type: 'text',
          order: 18,
          text: 'Kjøper du en obligasjon i USD og dollaren svekkes 10% mot kronen, taper du 10% – selv om obligasjonen i seg selv gikk bra. Valutarisiko kan sikres (hedges), men det koster.'
        },
        {
          id: '3-6-heading-sammenligning',
          type: 'heading',
          order: 19,
          level: 2,
          text: 'Risikoprofil for ulike obligasjonstyper'
        },
        {
          id: '3-6-table-profil',
          type: 'table',
          order: 20,
          headers: ['Type', 'Renterisiko', 'Kredittrisiko', 'Typisk YTM'],
          rows: [
            ['Statsobligasjon 2 år', 'Lav', 'Minimal', '3-4%'],
            ['Statsobligasjon 10 år', 'Høy', 'Minimal', '3,5-4,5%'],
            ['Foretaksobligasjon IG*', 'Middels', 'Lav-middels', '4-6%'],
            ['High yield-obligasjon', 'Varierer', 'Høy', '7-12%'],
            ['Inflasjonsjustert statsobl.', 'Lav', 'Minimal', 'Inflasjon + 0,5-1%']
          ]
        },
        {
          id: '3-6-text-ig',
          type: 'text',
          order: 21,
          text: '*IG = Investment Grade (høy kredittvurdering)'
        },
        {
          id: '3-6-quiz',
          type: 'quiz',
          order: 22,
          question: 'Hvilken risiko er størst for en 30-årig statsobligasjon?',
          options: [
            'Kredittrisiko',
            'Likviditetsrisiko',
            'Renterisiko',
            'Valutarisiko'
          ],
          correctAnswer: 2,
          explanation: 'Med 30 års løpetid har obligasjonen svært høy durasjon og dermed høy renterisiko. En statsobligasjon har minimal kredittrisiko, god likviditet (statsobligasjoner er mye handlet), og ingen valutarisiko hvis den er i NOK.'
        },
        {
          id: '3-6-keypoint',
          type: 'keypoint',
          order: 23,
          points: [
            'Obligasjoner har flere typer risiko – ikke bare "trygt eller utrygt"',
            'Renterisiko og kredittrisiko er de viktigste',
            'Høyere YTM betyr nesten alltid høyere risiko',
            'Diversifisering på tvers av utstedere og løpetider reduserer risiko',
            'Vurder egen tidshorisont – kan du holde til forfall?'
          ]
        },
        {
          id: '3-6-reflection',
          type: 'reflection',
          order: 24,
          question: 'Du vurderer en high yield-obligasjon med 9% rente når statsobligasjoner gir 4%. Hva kompenserer de ekstra 5% for? Er du villig til å ta den risikoen?'
        }
      ]
    },

    // ===================================
    // SEKSJON 3.7: Kredittrating
    // ===================================
    {
      id: 'seksjon-3-7-kredittrating',
      title: 'Kredittrating – karakteren som betyr alt',
      order: 7,
      content: [
        {
          id: '3-7-hook',
          type: 'text',
          order: 1,
          text: '**Tenk på kredittrating som karakterer på vitnemålet til selskaper og stater.** AAA er toppkarakter – du kan stole på at de betaler tilbake. C eller D? De har strøket eller står i fare for å stryke.',
          emphasis: 'important'
        },
        {
          id: '3-7-heading-definisjon',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Hva er kredittrating?'
        },
        {
          id: '3-7-def-rating',
          type: 'definition',
          order: 3,
          term: 'Kredittrating',
          definition: 'En uavhengig vurdering av en utsteders evne og vilje til å betale tilbake gjeld. Uttrykkes som en bokstavkarakter fra AAA (best) til D (mislighold). Gjøres av ratingbyråer.'
        },
        {
          id: '3-7-heading-byraaer',
          type: 'heading',
          order: 4,
          level: 2,
          text: 'De tre store ratingbyråene'
        },
        {
          id: '3-7-table-byraaer',
          type: 'table',
          order: 5,
          headers: ['Byrå', 'Hovedkvarter', 'Markedsandel'],
          rows: [
            ['Standard & Poor\'s (S&P)', 'USA', '~40%'],
            ['Moody\'s', 'USA', '~40%'],
            ['Fitch Ratings', 'USA/UK', '~15%']
          ]
        },
        {
          id: '3-7-text-byraaer',
          type: 'text',
          order: 6,
          text: 'Disse tre dominerer markedet fullstendig. De fleste store utstedere betaler for å bli ratet av minst to av dem. Ratingen publiseres og oppdateres løpende.'
        },
        {
          id: '3-7-heading-skala',
          type: 'heading',
          order: 7,
          level: 2,
          text: 'Ratingskalaen forklart'
        },
        {
          id: '3-7-table-skala',
          type: 'table',
          order: 8,
          headers: ['S&P / Fitch', 'Moody\'s', 'Kategori', 'Beskrivelse'],
          rows: [
            ['AAA', 'Aaa', 'Investment Grade', 'Høyeste kvalitet, minimal risiko'],
            ['AA+, AA, AA-', 'Aa1, Aa2, Aa3', 'Investment Grade', 'Svært høy kvalitet'],
            ['A+, A, A-', 'A1, A2, A3', 'Investment Grade', 'Høy kvalitet'],
            ['BBB+, BBB, BBB-', 'Baa1, Baa2, Baa3', 'Investment Grade', 'Middels kvalitet, laveste IG'],
            ['BB+, BB, BB-', 'Ba1, Ba2, Ba3', 'High Yield (Junk)', 'Spekulativ, betydelig risiko'],
            ['B+, B, B-', 'B1, B2, B3', 'High Yield', 'Høy risiko'],
            ['CCC, CC, C', 'Caa, Ca, C', 'High Yield', 'Svært høy risiko, nær mislighold'],
            ['D', 'D', 'Default', 'Mislighold – utsteder betaler ikke']
          ]
        },
        {
          id: '3-7-keypoint-grense',
          type: 'keypoint',
          order: 9,
          points: [
            'BBB- / Baa3 er den viktigste grensen',
            'Alt over = Investment Grade (IG)',
            'Alt under = High Yield / "Junk Bonds"',
            'Mange fond har regler om at de KUN kan eie IG-obligasjoner'
          ]
        },
        {
          id: '3-7-heading-betydning',
          type: 'heading',
          order: 10,
          level: 2,
          text: 'Hvorfor betyr rating så mye?'
        },
        {
          id: '3-7-list-betydning',
          type: 'list',
          order: 11,
          ordered: false,
          items: [
            '**Rentekostnad:** Lavere rating = høyere rente utstederen må betale',
            '**Investortilgang:** Mange fond kan bare kjøpe IG-obligasjoner',
            '**Tvangssalg:** Hvis rating faller under IG, må noen fond selge',
            '**Omdømme:** Rating signaliserer finansiell styrke til kunder og partnere'
          ]
        },
        {
          id: '3-7-example-spread',
          type: 'example',
          order: 12,
          title: 'Rentespread etter rating',
          content: 'Typiske rentepåslag (spread) over risikofri rente for ulike ratinger:',
          calculation: 'Risikofri rente (statsobligasjon): 4,0%\n\nAAA: +0,3% → Total 4,3%\nAA: +0,5% → Total 4,5%\nA: +0,8% → Total 4,8%\nBBB: +1,5% → Total 5,5%\nBB: +3,0% → Total 7,0%\nB: +5,0% → Total 9,0%\nCCC: +10,0% → Total 14,0%\n\n**En utsteder med CCC-rating betaler nesten 10% mer i rente enn en AAA-utsteder!**'
        },
        {
          id: '3-7-heading-fallen',
          type: 'heading',
          order: 13,
          level: 2,
          text: '"Fallen Angels" og "Rising Stars"'
        },
        {
          id: '3-7-def-fallen',
          type: 'definition',
          order: 14,
          term: 'Fallen Angel',
          definition: 'En obligasjon som var Investment Grade, men har blitt nedgradert til High Yield. Ofte tvangssalg fra IG-fond, noe som kan gi gode kjøpsmuligheter.'
        },
        {
          id: '3-7-def-rising',
          type: 'definition',
          order: 15,
          term: 'Rising Star',
          definition: 'En obligasjon som var High Yield, men har blitt oppgradert til Investment Grade. Nye fond kan kjøpe, prisen stiger ofte.'
        },
        {
          id: '3-7-heading-norge',
          type: 'heading',
          order: 16,
          level: 2,
          text: 'Norske utstederes rating'
        },
        {
          id: '3-7-table-norge',
          type: 'table',
          order: 17,
          headers: ['Utsteder', 'S&P Rating', 'Kommentar'],
          rows: [
            ['Norge (stat)', 'AAA', 'En av få land med topprating'],
            ['Equinor', 'A+', 'Statlig majoritetseier gir støtte'],
            ['DNB', 'AA-', 'Norges største bank'],
            ['Telenor', 'A-', 'Stabil telekom'],
            ['Storebrand', 'A', 'Forsikring'],
            ['Norwegian (før COVID)', 'B', 'Høy gjeld, volatil bransje']
          ]
        },
        {
          id: '3-7-quiz-1',
          type: 'quiz',
          order: 18,
          question: 'Hvilken rating er den laveste som fortsatt regnes som Investment Grade?',
          options: [
            'A-',
            'BB+',
            'BBB-',
            'AA-'
          ],
          correctAnswer: 2,
          explanation: 'BBB- (eller Baa3 hos Moody\'s) er den laveste ratingen som fortsatt regnes som Investment Grade. BB+ og lavere er High Yield eller "junk bonds".'
        },
        {
          id: '3-7-quiz-2',
          type: 'quiz',
          order: 19,
          question: 'Hva skjer vanligvis med renten en utsteder må betale hvis kredittratingen nedgraderes?',
          options: [
            'Renten synker',
            'Renten forblir uendret',
            'Renten stiger',
            'Utstederen får ikke låne mer'
          ],
          correctAnswer: 2,
          explanation: 'Lavere rating betyr høyere risiko, og investorer krever høyere rente som kompensasjon. Utstederen må betale mer for nye lån, og eksisterende obligasjoner faller i pris.'
        },
        {
          id: '3-7-keypoint',
          type: 'keypoint',
          order: 20,
          points: [
            'Kredittrating er en uavhengig vurdering av betalingsevne',
            'S&P, Moody\'s og Fitch dominerer markedet',
            'BBB- er grensen mellom Investment Grade og High Yield',
            'Lavere rating = høyere rente, høyere risiko',
            'Mange fond har regler som begrenser hvilke ratinger de kan kjøpe'
          ]
        },
        {
          id: '3-7-reflection',
          type: 'reflection',
          order: 21,
          question: 'Under finanskrisen i 2008 hadde ratingbyråene gitt høy rating til verdipapirer som viste seg å være svært risikable. Hvordan kan dette påvirke din tillit til ratinger?'
        }
      ]
    },

    // ===================================
    // SEKSJON 3.8: Det norske markedet
    // ===================================
    {
      id: 'seksjon-3-8-norsk-marked',
      title: 'Det norske obligasjonsmarkedet',
      order: 8,
      content: [
        {
          id: '3-8-hook',
          type: 'text',
          order: 1,
          text: '**Norge har et av de mest aktive obligasjonsmarkedene i Norden.** Med Oslo Børs som sentrum handles det obligasjoner for hundrevis av milliarder kroner årlig. Fra statsobligasjoner til high yield-lån fra offshorerederier – her er det noe for enhver risikoappetitt.',
          emphasis: 'important'
        },
        {
          id: '3-8-heading-oversikt',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Markedsplasser i Norge'
        },
        {
          id: '3-8-table-markeder',
          type: 'table',
          order: 3,
          headers: ['Marked', 'Beskrivelse', 'Krav'],
          rows: [
            ['Oslo Børs', 'Regulert marked for børsnoterte obligasjoner', 'Strenge krav til dokumentasjon og rapportering'],
            ['Nordic ABM', 'Alternativ markedsplass', 'Enklere krav, raskere prosess, lavere kostnader'],
            ['OTC (over-the-counter)', 'Direkte handel mellom parter', 'Ingen formelle krav, mindre transparens']
          ]
        },
        {
          id: '3-8-text-nordisk-abm',
          type: 'text',
          order: 4,
          text: 'De fleste norske obligasjoner noteres på Nordic ABM fordi det er enklere og billigere. Oslo Børs brukes primært for store utstedelser fra selskaper som ønsker høy synlighet.'
        },
        {
          id: '3-8-heading-typer',
          type: 'heading',
          order: 5,
          level: 2,
          text: 'Typer obligasjoner i det norske markedet'
        },
        {
          id: '3-8-table-typer',
          type: 'table',
          order: 6,
          headers: ['Type', 'Utsteder', 'Risiko', 'Typisk investor'],
          rows: [
            ['Statsobligasjoner', 'Den norske stat', 'Minimal', 'Alle, inkl. sentralbanker'],
            ['Kommunelån', 'Kommuner og fylker', 'Svært lav', 'Pensjonskasser, fond'],
            ['OMF (Obl. m/fortrinnsrett)', 'Banker', 'Lav', 'Institusjonelle investorer'],
            ['Bankobligasjoner', 'Banker (senior/sub)', 'Lav-middels', 'Institusjonelle investorer'],
            ['Foretaksobligasjoner', 'Selskaper', 'Middels', 'Fond, profesjonelle'],
            ['High Yield', 'Risikable selskaper', 'Høy', 'Spesialiserte fond, profesjonelle']
          ]
        },
        {
          id: '3-8-heading-omf',
          type: 'heading',
          order: 7,
          level: 3,
          text: 'Obligasjoner med fortrinnsrett (OMF)'
        },
        {
          id: '3-8-def-omf',
          type: 'definition',
          order: 8,
          term: 'Obligasjoner med fortrinnsrett (OMF / Covered Bonds)',
          definition: 'Obligasjoner sikret med bankens boliglånsportefølje. Hvis banken går konkurs, har OMF-investorer førsteprioritet på boliglånene. Svært lav risiko.'
        },
        {
          id: '3-8-text-omf',
          type: 'text',
          order: 9,
          text: 'OMF er enormt populære i Norge og brukes av bankene for å finansiere boliglån. De er blant de sikreste obligasjonene du kan kjøpe, nest etter statsobligasjoner.'
        },
        {
          id: '3-8-heading-aktorer',
          type: 'heading',
          order: 10,
          level: 2,
          text: 'Hvem er aktørene?'
        },
        {
          id: '3-8-list-utstedere',
          type: 'list',
          order: 11,
          ordered: false,
          items: [
            '**Utstedere:** Staten, kommuner, banker (DNB, SpareBank 1, Nordea), eiendomsselskaper, energi/shipping/offshore',
            '**Investorer:** Livsforsikringsselskaper, pensjonskasser, verdipapirfond, banker, utenlandske investorer',
            '**Tilretteleggere:** Investeringsbanker (DNB Markets, Nordea Markets, Arctic Securities)',
            '**Clearinghus:** Verdipapirsentralen (VPS) – oppbevarer og overfører verdipapirer elektronisk'
          ]
        },
        {
          id: '3-8-example-utstedelse',
          type: 'example',
          order: 12,
          title: 'Eksempel på en typisk obligasjonsutstedelse',
          content: '**Aker BP ASA – Senior Unsecured Bond**\n\n• ISIN: NO0010893882\n• Utstedt: Mars 2023\n• Volum: NOK 1 500 000 000\n• Kupong: 3M NIBOR + 2,00%\n• Forfall: Mars 2028\n• Rating: BBB (S&P)\n• Markedsplass: Nordic ABM',
          calculation: '**Hva betyr dette?**\n\n• Aker BP (oljeselskap) låner 1,5 mrd kr\n• Renten flyter med pengemarkedet + 2% påslag\n• 5 års løpetid\n• Investment Grade-rating\n• Minste investering typisk 1 mill kr'
        },
        {
          id: '3-8-heading-nibor',
          type: 'heading',
          order: 13,
          level: 2,
          text: 'NIBOR – referanserenten'
        },
        {
          id: '3-8-def-nibor',
          type: 'definition',
          order: 14,
          term: 'NIBOR (Norwegian Interbank Offered Rate)',
          definition: 'Renten norske banker låner til hverandre. Brukes som referanserente for flytende rente-obligasjoner. "3M NIBOR" betyr 3-måneders NIBOR.'
        },
        {
          id: '3-8-text-nibor',
          type: 'text',
          order: 15,
          text: 'De fleste norske foretaksobligasjoner har flytende rente knyttet til NIBOR. Dette betyr at kupongbetalingene varierer med det generelle rentenivået – en fordel når rentene stiger, en ulempe når de faller.'
        },
        {
          id: '3-8-heading-investorer',
          type: 'heading',
          order: 16,
          level: 2,
          text: 'Hvordan kan privatpersoner investere?'
        },
        {
          id: '3-8-list-privatinvestor',
          type: 'list',
          order: 17,
          ordered: true,
          items: [
            '**Obligasjonsfond:** Enkleste tilgang, diversifisert, lav minstesum (ofte 100-1000 kr)',
            '**Rentefond:** Investerer i kortere obligasjoner og pengemarked',
            '**Direktekjøp via megler:** Krever ofte minimum 100 000 - 1 000 000 kr per obligasjon',
            '**ETF-er:** Børshandlede fond som følger obligasjonsindekser'
          ]
        },
        {
          id: '3-8-quiz',
          type: 'quiz',
          order: 18,
          question: 'Hva er OMF (obligasjoner med fortrinnsrett)?',
          options: [
            'Statsobligasjoner med høy avkastning',
            'Obligasjoner sikret med bankens boliglånsportefølje',
            'Høyrisiko-obligasjoner fra oppstartsselskaper',
            'Obligasjoner som kun handles på Oslo Børs'
          ],
          correctAnswer: 1,
          explanation: 'OMF (Covered Bonds) er obligasjoner utstedt av banker og sikret med bankens boliglånsportefølje. Hvis banken går konkurs, har OMF-investorer førsteprioritet på disse boliglånene, noe som gir svært lav risiko.'
        },
        {
          id: '3-8-keypoint',
          type: 'keypoint',
          order: 19,
          points: [
            'Oslo Børs og Nordic ABM er hovedmarkedsplassene i Norge',
            'OMF og statsobligasjoner har lavest risiko',
            'De fleste norske foretaksobligasjoner har flytende NIBOR-rente',
            'Privatpersoner investerer enklest via obligasjonsfond',
            'Norge har et aktivt high yield-marked, spesielt offshore/shipping'
          ]
        },
        {
          id: '3-8-reflection',
          type: 'reflection',
          order: 20,
          question: 'Norges oljeformue og stabile statsfinanser gir oss AAA-rating. Hvordan tror du dette påvirker renten norske selskaper må betale på sine obligasjoner?'
        }
      ]
    },

    // ===================================
    // SEKSJON 3.9: Grønne obligasjoner
    // ===================================
    {
      id: 'seksjon-3-9-groenne',
      title: 'Grønne obligasjoner og bærekraft',
      order: 9,
      content: [
        {
          id: '3-9-hook',
          type: 'text',
          order: 1,
          text: '**Hva om du kunne tjene penger OG redde planeten?** Grønne obligasjoner lover akkurat dette – avkastning kombinert med miljønytte. Men holder det vann, eller er det bare "grønnvasking"?',
          emphasis: 'important'
        },
        {
          id: '3-9-intro',
          type: 'text',
          order: 2,
          text: 'Det globale markedet for grønne obligasjoner har eksplodert fra nesten null i 2010 til over 500 milliarder dollar i årlige utstedelser. Norge er en pioner – den første grønne statsobligasjonen ble utstedt av en norsk kommune (Oslo) allerede i 2016.'
        },
        {
          id: '3-9-heading-definisjon',
          type: 'heading',
          order: 3,
          level: 2,
          text: 'Hva er en grønn obligasjon?'
        },
        {
          id: '3-9-def-gronn',
          type: 'definition',
          order: 4,
          term: 'Grønn obligasjon (Green Bond)',
          definition: 'En obligasjon der pengene utelukkende skal brukes til miljøvennlige prosjekter. Det er formålet som er "grønt" – ikke selve obligasjonsstrukturen. Rente og risiko er ofte lik vanlige obligasjoner.'
        },
        {
          id: '3-9-heading-prosjekter',
          type: 'heading',
          order: 5,
          level: 2,
          text: 'Hva finansierer grønne obligasjoner?'
        },
        {
          id: '3-9-list-prosjekter',
          type: 'list',
          order: 6,
          ordered: false,
          items: [
            '**Fornybar energi:** Vindparker, solceller, vannkraft',
            '**Energieffektive bygg:** Passivhus, BREEAM-sertifiserte bygg',
            '**Bærekraftig transport:** Elektriske busser, tog, ferger',
            '**Vannhåndtering:** Renseanlegg, flomvern, vannforsyning',
            '**Avfallshåndtering:** Gjenvinning, sirkulær økonomi',
            '**Naturvern:** Bevaring av skog, biologisk mangfold'
          ]
        },
        {
          id: '3-9-heading-standarder',
          type: 'heading',
          order: 7,
          level: 2,
          text: 'Standarder og verifikasjon'
        },
        {
          id: '3-9-text-standarder',
          type: 'text',
          order: 8,
          text: 'Hvem bestemmer hva som er "grønt"? Det finnes flere rammeverk:'
        },
        {
          id: '3-9-table-standarder',
          type: 'table',
          order: 9,
          headers: ['Standard', 'Organisasjon', 'Beskrivelse'],
          rows: [
            ['Green Bond Principles', 'ICMA', 'Frivillige retningslinjer, mest brukt globalt'],
            ['EU Green Bond Standard', 'EU', 'Strengere krav, knyttet til EU-taksonomien'],
            ['Climate Bonds Standard', 'Climate Bonds Initiative', 'Fokuserer på klimarelaterte investeringer'],
            ['Second Party Opinion', 'CICERO, Sustainalytics, etc.', 'Uavhengig vurdering av grønnhet']
          ]
        },
        {
          id: '3-9-def-spo',
          type: 'definition',
          order: 10,
          term: 'Second Party Opinion (SPO)',
          definition: 'En uavhengig vurdering fra en ekstern part (f.eks. CICERO) som bekrefter at obligasjonen oppfyller kriteriene for å være "grønn". Gir investorer trygghet.'
        },
        {
          id: '3-9-example-cicero',
          type: 'example',
          order: 11,
          title: 'CICEROs grønnhetsskala',
          content: 'Norske CICERO (senter for klimaforskning) er ledende på Second Party Opinions og bruker en fargeskala:',
          calculation: '🟢 **Mørkegrønn:** Prosjekter som aktivt bidrar til lavutslippssamfunnet\n🟢 **Mellomgrønn:** Prosjekter som er gode, men ikke banebrytende\n🟡 **Lysegrønn:** Prosjekter som er et skritt i riktig retning\n🟤 **Brun:** Prosjekter som ikke kvalifiserer som grønne'
        },
        {
          id: '3-9-heading-norge',
          type: 'heading',
          order: 12,
          level: 2,
          text: 'Grønne obligasjoner i Norge'
        },
        {
          id: '3-9-list-eksempler',
          type: 'list',
          order: 13,
          ordered: false,
          items: [
            '**Kommunalbanken:** Norges største utsteder av grønne obligasjoner, finansierer kommunale klima-prosjekter',
            '**OBOS:** Grønne lån til energieffektive boligprosjekter',
            '**Statkraft:** Finansierer fornybar energi (Europas største produsent)',
            '**Entra:** Grønne bygg i Oslo og andre storbyer',
            '**Norges Bank:** Investerer oljefondets obligasjonsportefølje delvis i grønne obligasjoner'
          ]
        },
        {
          id: '3-9-example-obos',
          type: 'example',
          order: 14,
          title: 'Case: OBOS Grønn Obligasjon',
          content: '**OBOS BBL – Grønn Obligasjon 2027**\n\n• Volum: NOK 750 000 000\n• Kupong: 3M NIBOR + 0,92%\n• Forfall: September 2027\n• Second Party Opinion: CICERO – Mellomgrønn\n• Formål: Finansiere BREEAM-sertifiserte boligprosjekter',
          calculation: '**Hva finansieres?**\n\n• Energieffektive nybygg\n• Rehabilitering av eldre bygg til høyere energistandard\n• Ladeinfrastruktur for elbiler\n• Solceller på tak\n\nInvestorer får samme avkastning som vanlige OBOS-obligasjoner, men vet at pengene går til bærekraftige prosjekter.'
        },
        {
          id: '3-9-heading-fordeler',
          type: 'heading',
          order: 15,
          level: 2,
          text: 'Fordeler og utfordringer'
        },
        {
          id: '3-9-table-fordeler',
          type: 'table',
          order: 16,
          headers: ['Fordeler', 'Utfordringer'],
          rows: [
            ['Bidrar til bærekraftig utvikling', 'Grønnvasking-risiko'],
            ['Ofte like god avkastning som vanlige obligasjoner', 'Begrenset utvalg i noen sektorer'],
            ['Tiltrekker nye investorgrupper', 'Ekstra rapporteringskrav for utsteder'],
            ['God omdømme-signalering', 'Uklare definisjoner på hva som er "grønt"'],
            ['Stadig strengere standarder (EU-taksonomi)', 'Noen prosjekter er "grønne nok" uansett']
          ]
        },
        {
          id: '3-9-heading-gronnvasking',
          type: 'heading',
          order: 17,
          level: 2,
          text: 'Hva er grønnvasking?'
        },
        {
          id: '3-9-def-gronnvasking',
          type: 'definition',
          order: 18,
          term: 'Grønnvasking (Greenwashing)',
          definition: 'Når selskaper gir et falskt inntrykk av å være miljøvennlige for å tiltrekke investorer eller kunder. For obligasjoner: Å kalle noe "grønt" som egentlig ikke bidrar vesentlig til miljøet.'
        },
        {
          id: '3-9-text-gronnvasking',
          type: 'text',
          order: 19,
          text: 'EU-taksonomien og strengere krav til SPO-er er ment å redusere grønnvasking. Som investor bør du alltid sjekke: Hva brukes pengene faktisk til? Har obligasjonen en uavhengig Second Party Opinion?',
          emphasis: 'warning'
        },
        {
          id: '3-9-quiz',
          type: 'quiz',
          order: 20,
          question: 'Hva gjør en obligasjon "grønn"?',
          options: [
            'Den har lavere rente enn vanlige obligasjoner',
            'Pengene brukes til miljøvennlige prosjekter',
            'Den er utstedt av miljøorganisasjoner',
            'Den har kortere løpetid'
          ],
          correctAnswer: 1,
          explanation: 'En grønn obligasjon skiller seg ut ved at pengene utelukkende skal brukes til miljøvennlige prosjekter. Strukturen (rente, løpetid, risiko) er ofte lik vanlige obligasjoner fra samme utsteder.'
        },
        {
          id: '3-9-keypoint',
          type: 'keypoint',
          order: 21,
          points: [
            'Grønne obligasjoner finansierer bærekraftige prosjekter',
            'Avkastningen er ofte lik vanlige obligasjoner',
            'Second Party Opinion fra f.eks. CICERO gir uavhengig verifikasjon',
            'EU-taksonomien innfører strengere krav til hva som kan kalles "grønt"',
            'Vær oppmerksom på grønnvasking – les dokumentasjonen!'
          ]
        },
        {
          id: '3-9-reflection',
          type: 'reflection',
          order: 22,
          question: 'Et oljeselskap utsteder en "grønn" obligasjon for å finansiere solceller på en av sine plattformer. Er dette grønnvasking, eller et legitimt grønt prosjekt? Diskuter med deg selv.'
        }
      ]
    },

    // ===================================
    // SEKSJON 3.10: Oppsummering og case
    // ===================================
    {
      id: 'seksjon-3-10-oppsummering',
      title: 'Oppsummering og praktisk case',
      order: 10,
      content: [
        {
          id: '3-10-intro',
          type: 'text',
          order: 1,
          text: '**Gratulerer!** Du har nå en solid forståelse av obligasjonsmarkedet – fra grunnleggende konsepter til avanserte risikobegreper. La oss oppsummere og teste kunnskapen din på et realistisk case.',
          emphasis: 'important'
        },
        {
          id: '3-10-heading-takeaways',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'De 10 viktigste tingene du har lært'
        },
        {
          id: '3-10-list-takeaways',
          type: 'list',
          order: 3,
          ordered: true,
          items: [
            '**Obligasjoner er lån** – du blir kreditor, ikke eier',
            '**Kupongrente ≠ faktisk avkastning** – YTM forteller hele sannheten',
            '**Rente og pris danser motsatt** – rente opp = pris ned',
            '**Durasjon måler følsomhet** – lengre løpetid = høyere risiko',
            '**Kredittrating forteller risiko** – BBB- er grensen for Investment Grade',
            '**Høyere avkastning = høyere risiko** – alltid',
            '**Det norske markedet er aktivt** – Oslo Børs og Nordic ABM',
            '**NIBOR er referanserenten** – de fleste norske obligasjoner er flytende',
            '**Grønne obligasjoner finansierer miljø** – sjekk SPO for å unngå grønnvasking',
            '**Obligasjoner passer til diversifisering** – lavere risiko enn aksjer'
          ]
        },
        {
          id: '3-10-heading-case',
          type: 'heading',
          order: 4,
          level: 2,
          text: 'Praktisk case: Vurder denne obligasjonen'
        },
        {
          id: '3-10-example-case',
          type: 'example',
          order: 5,
          title: 'Case: Nordic Shipping ASA obligasjon',
          content: 'Du er investeringsrådgiver og en kunde spør om denne obligasjonen:\n\n**Nordic Shipping ASA – Senior Unsecured 2028**\n• Pålydende: NOK 1 000 000\n• Kupongrente: 3M NIBOR + 4,50%\n• Løpetid: 4 år til forfall\n• Nåværende kurs: 94\n• Rating: BB (S&P)\n• Bransje: Shipping/offshore\n• Second Party Opinion: Ingen (ikke grønn)',
          calculation: '**Din analyse:**\n\n1. **YTM-estimat:**\n   • Med kurs 94 og 4 år igjen\n   • NIBOR ca 4,5% + spread 4,5% = 9% kupong\n   • Pluss kursgevinst fra 94 til 100\n   • Estimert YTM: ca 11%\n\n2. **Risikoprofil:**\n   • BB-rating = High Yield (under Investment Grade)\n   • Shipping er syklisk og volatil bransje\n   • Underkurs antyder markedet ser økt risiko\n\n3. **Sammenligning:**\n   • Statsobligasjon 4 år: ca 4% YTM\n   • Investment Grade 4 år: ca 5-6% YTM\n   • Denne: ca 11% YTM\n   • **Spread til IG: ca 5-6%** – betydelig kompensasjon for risiko'
        },
        {
          id: '3-10-exercise-case',
          type: 'exercise',
          order: 6,
          title: 'Din vurdering',
          description: 'Basert på informasjonen over, besvar følgende spørsmål:\n\n1. Hvorfor tror du obligasjonen handles til underkurs (94)?\n2. Hvem er denne obligasjonen passende for?\n3. Hvilke risikofaktorer er mest relevante?\n4. Ville du anbefalt denne til en pensjonist vs. en ung investor med høy risikotoleranse?',
          hint: 'Tenk på: kredittrisiko, bransjespesifikk risiko, rating, og kundens behov og tidshorisont.'
        },
        {
          id: '3-10-heading-sjekkliste',
          type: 'heading',
          order: 7,
          level: 2,
          text: 'Sjekkliste før du investerer i obligasjoner'
        },
        {
          id: '3-10-list-sjekkliste',
          type: 'list',
          order: 8,
          ordered: true,
          items: [
            '✓ Hvem er utsteder? Er det en stat, bank, eller selskap?',
            '✓ Hva er kredittratingen? Investment Grade eller High Yield?',
            '✓ Hva er YTM? Hvordan sammenligner det med alternativer?',
            '✓ Hva er durasjonen? Hvor sensitiv er den for renteendringer?',
            '✓ Fast eller flytende rente? NIBOR-basert eller fast kupong?',
            '✓ Kan jeg holde til forfall? Eller må jeg kanskje selge før?',
            '✓ Passer dette i min portefølje? Hva er min totale eksponering?',
            '✓ Er den grønn? Har den SPO hvis ja?'
          ]
        },
        {
          id: '3-10-heading-veienvidere',
          type: 'heading',
          order: 9,
          level: 2,
          text: 'Veien videre'
        },
        {
          id: '3-10-text-videre',
          type: 'text',
          order: 10,
          text: 'Du har nå et solid fundament i obligasjoner. I neste modul skal vi se på aksjer – den andre store aktivaklassen. Med forståelse for BEGGE kan du bygge en balansert portefølje som matcher din risikoprofil og dine mål.'
        },
        {
          id: '3-10-quiz-final',
          type: 'quiz',
          order: 11,
          question: 'Du ser en obligasjon med YTM på 12% mens statsobligasjoner gir 4%. Hva er den mest sannsynlige forklaringen?',
          options: [
            'Det er en beregningsfeil – så høy YTM er umulig',
            'Obligasjonen har svært høy kredittrisiko',
            'Obligasjonen er grønn og gir høyere avkastning',
            'Det er en statsobligasjon fra et annet land'
          ],
          correctAnswer: 1,
          explanation: 'En YTM på 12% når statsobligasjoner gir 4% innebærer en spread på 8%. Dette signaliserer svært høy kredittrisiko – typisk for high yield-obligasjoner med lav rating (B eller lavere). Høy avkastning kompenserer for risikoen for at utsteder ikke betaler tilbake.'
        },
        {
          id: '3-10-keypoint-final',
          type: 'keypoint',
          order: 12,
          points: [
            'Obligasjoner er komplekse, men forståelige med riktig fundament',
            'Bruk YTM for å sammenligne – kupongrente er ikke nok',
            'Respekter risiko – høy avkastning er aldri "gratis"',
            'Diversifiser på tvers av utstedere, løpetider og ratinger',
            'Hold deg oppdatert – renteendringer påvirker alle obligasjoner'
          ]
        },
        {
          id: '3-10-reflection-final',
          type: 'reflection',
          order: 13,
          question: 'Hvordan ville du fordelt en portefølje på 1 million kroner mellom statsobligasjoner, IG-foretaksobligasjoner, og high yield? Hvorfor?'
        }
      ]
    },
    {
      id: 'seksjon-3-11-oppgaver',
      title: 'Regneoppgaver',
      order: 11,
      content: [
        {
          id: '3-11-intro',
          type: 'text',
          order: 1,
          text: 'Test dine ferdigheter med disse regneoppgavene om obligasjoner. Oppgavene dekker obligasjonsprising, yield to maturity, durasjon og andre sentrale konsepter fra modulen. Klikk på en oppgave for å se oppgaveteksten, og bruk "Vis fasit"-knappen når du vil sjekke svaret ditt.'
        },
        {
          id: '3-11-exerciseset',
          type: 'exerciseset',
          order: 2,
          exerciseSetId: 'oppgavesett-obligasjoner'
        }
      ]
    }
  ],
  moduleQuiz: {
    id: 'modul-3-obligasjoner-quiz',
    title: 'Modulquiz: Obligasjoner',
    description: 'Test din forståelse av obligasjonsprising, renterisiko og kredittrisiko. Du trenger minst 80% riktig for å bestå.',
    passingScore: 80,
    questionsToShow: 20,
    questions: [
      {
        id: 'q4-1',
        question: 'Hva er de tre hovedkomponentene i en obligasjon?',
        options: [
          'Aksje, utbytte, kursgevinst',
          'Pålydende, kupongrente, forfallsdato',
          'Rente, inflasjon, valuta',
          'Kredittrisiko, renterisiko, likviditetsrisiko'
        ],
        correctAnswer: 1,
        explanation: 'En obligasjon defineres av pålydende (hovedstol), kupongrente (årlig rentebetaling) og forfallsdato (når hovedstolen tilbakebetales).'
      },
      {
        id: 'q4-2',
        question: 'Hva skjer med obligasjonsprisen når markedsrenten stiger?',
        options: [
          'Prisen stiger',
          'Prisen faller',
          'Prisen forblir uendret',
          'Det avhenger av kredittratingen'
        ],
        correctAnswer: 1,
        explanation: 'Obligasjonspriser og renter har et inverst forhold. Når renten stiger, faller verdien av eksisterende obligasjoner fordi nye obligasjoner tilbyr bedre avkastning.'
      },
      {
        id: 'q4-3',
        question: 'Hva er YTM (yield to maturity)?',
        options: [
          'Kupongrenten på obligasjonen',
          'Totalavkastningen hvis du holder obligasjonen til forfall',
          'Inflasjonsraten minus kupongrenten',
          'Prisen på obligasjonen ved forfall'
        ],
        correctAnswer: 1,
        explanation: 'YTM er den effektive avkastningen du får hvis du kjøper obligasjonen til dagens pris og holder den til forfall, inkludert kupongbetalinger og kursendring.'
      },
      {
        id: 'q4-4',
        question: 'En obligasjon handles til 95% av pålydende. Hva betyr dette?',
        options: [
          'Obligasjonen har 5% kupongrente',
          'Obligasjonen handles med rabatt - YTM er høyere enn kupongrenten',
          'Obligasjonen handles med premie',
          'Kredittratingen har blitt nedgradert til 95%'
        ],
        correctAnswer: 1,
        explanation: 'Når prisen er under pålydende (100%), handles obligasjonen med rabatt. Dette skjer typisk når markedsrenten er høyere enn kupongrenten.'
      },
      {
        id: 'q4-5',
        question: 'Hva måler durasjon?',
        options: [
          'Hvor lenge obligasjonen har vært på markedet',
          'Tiden til forfall',
          'Obligasjonsprisens følsomhet for renteendringer',
          'Sannsynligheten for mislighold'
        ],
        correctAnswer: 2,
        explanation: 'Durasjon måler rentefølsomheten. En durasjon på 5 betyr at prisen faller ca. 5% hvis renten stiger 1 prosentpoeng.'
      },
      {
        id: 'q4-6',
        question: 'Hvilken obligasjon har høyest durasjon?',
        options: [
          'Obligasjon med høy kupong og kort løpetid',
          'Obligasjon med lav kupong og lang løpetid',
          'Nullkupongobligasjon med kort løpetid',
          'Obligasjon med variabel rente'
        ],
        correctAnswer: 1,
        explanation: 'Lav kupong og lang løpetid gir høy durasjon fordi en større andel av verdien kommer fra fremtidige kontantstrømmer som er mer følsomme for renteendringer.'
      },
      {
        id: 'q4-7',
        question: 'Hva er en kredittspreaddifferanse (credit spread)?',
        options: [
          'Forskjellen mellom kjøps- og salgskurs',
          'Forskjellen i rente mellom en foretaksobligasjon og en risikofri statsrente',
          'Differansen mellom nominell og reell rente',
          'Kupongrente minus inflasjon'
        ],
        correctAnswer: 1,
        explanation: 'Credit spread er den ekstra avkastningen investorer krever for å ta kredittrisiko, målt som differansen mellom foretaksrente og statsrente.'
      },
      {
        id: 'q4-8',
        question: 'Hva betyr ratingen "BBB" typisk?',
        options: [
          'Høyeste kredittrating - ingen risiko',
          'Spekulativ rating - høy risiko',
          'Laveste investment grade - moderat risiko',
          'Obligasjonen er i mislighold'
        ],
        correctAnswer: 2,
        explanation: 'BBB er den laveste investment grade-ratingen. Det representerer moderat kredittrisiko, men er fortsatt tryggere enn high yield (BB og lavere).'
      },
      {
        id: 'q4-9',
        question: 'Hvorfor har en 10-årig statsobligasjon typisk høyere rente enn en 2-årig?',
        options: [
          'Fordi staten har mer gjeld på lang sikt',
          'Fordi investorer krever kompensasjon for lengre bindingstid og usikkerhet',
          'Fordi inflasjonen alltid øker over tid',
          'Det er tilfeldig og varierer fra dag til dag'
        ],
        correctAnswer: 1,
        explanation: 'Rentekurven er normalt stigende fordi investorer krever høyere avkastning for lengre bindingstid - dette kalles likviditetspremie og terminpremie.'
      },
      {
        id: 'q4-10',
        question: 'Hva er en "high yield"-obligasjon?',
        options: [
          'En obligasjon med svært høy kupongrente',
          'En obligasjon med lav kredittrating (BB+ eller lavere) og høyere avkastning',
          'En statsobligasjon fra et utviklet land',
          'En obligasjon som har steget mye i verdi'
        ],
        correctAnswer: 1,
        explanation: 'High yield (eller "junk bonds") er obligasjoner med rating BB+ eller lavere. De gir høyere avkastning for å kompensere for økt kredittrisiko.'
      },
      {
        id: 'q4-11',
        question: 'En obligasjon har 8% kupongrente og handles til par (100%). Hva er YTM?',
        options: [
          'Høyere enn 8%',
          'Lavere enn 8%',
          'Nøyaktig 8%',
          'Det kan ikke beregnes uten mer informasjon'
        ],
        correctAnswer: 2,
        explanation: 'Når obligasjonen handles til pålydende (100%), er YTM lik kupongrenten. Prisen er "riktig" i forhold til markedsrenten.'
      },
      {
        id: 'q4-12',
        question: 'Hva er grønne obligasjoner?',
        options: [
          'Obligasjoner med lavere rente enn vanlige',
          'Obligasjoner der inntektene øremerkes miljø- og klimaprosjekter',
          'Obligasjoner utstedt av miljøorganisasjoner',
          'Obligasjoner som bare kan kjøpes av ESG-fond'
        ],
        correctAnswer: 1,
        explanation: 'Grønne obligasjoner er obligasjoner der kapitalen øremerkes til miljø- og klimavennlige prosjekter som fornybar energi, energieffektivisering eller grønne bygg.'
      },
      {
        id: 'q4-13',
        question: 'Hva er pålydende verdi på en obligasjon?',
        options: [
          'Markedsprisen på obligasjonen',
          'Beløpet som utbetales ved forfall (hovedstolen)',
          'Den årlige kupongutbetalingen',
          'Forskjellen mellom kjøps- og salgspris'
        ],
        correctAnswer: 1,
        explanation: 'Pålydende verdi (face value) er hovedstolen som utsteder forplikter seg til å tilbakebetale ved forfall. Typisk er dette 1000 kr eller 1000 000 kr.'
      },
      {
        id: 'q4-14',
        question: 'Hvorfor har en nullkupongobligasjon durasjon lik løpetiden?',
        options: [
          'Fordi den ikke betaler rente',
          'Fordi all kontantstrøm kommer på ett tidspunkt - ved forfall',
          'Fordi den handles til pålydende',
          'Fordi den har høyere risiko'
        ],
        correctAnswer: 1,
        explanation: 'En nullkupongobligasjon har ingen mellomliggende kupongutbetalinger. All kontantstrøm kommer ved forfall, så vektet gjennomsnittlig tid = løpetiden.'
      },
      {
        id: 'q4-15',
        question: 'Hva er NIBOR?',
        options: [
          'Norges inflasjonsmål',
          'Referanserenten i det norske pengemarkedet',
          'Norges Banks styringsrente',
          'Et mål på kronekursen'
        ],
        correctAnswer: 1,
        explanation: 'NIBOR (Norwegian Interbank Offered Rate) er referanserenten bankene bruker seg imellom. De fleste norske foretaksobligasjoner har rente basert på NIBOR + påslag.'
      },
      {
        id: 'q4-16',
        question: 'Hva er OMF (obligasjoner med fortrinnsrett)?',
        options: [
          'Statsobligasjoner med høy likviditet',
          'Obligasjoner sikret med bankens boliglånsportefølje',
          'Obligasjoner som kun handles på Nordic ABM',
          'High yield-obligasjoner fra norske banker'
        ],
        correctAnswer: 1,
        explanation: 'OMF (Covered Bonds) er obligasjoner utstedt av banker, sikret med en pool av boliglån. Ved konkurs har OMF-eierne førsteprioritet på disse lånene, noe som gir svært lav risiko.'
      },
      {
        id: 'q4-17',
        question: 'En obligasjon med modifisert durasjon 7 opplever en rentestigning på 0,5%. Hva skjer med prisen?',
        options: [
          'Prisen stiger ca. 3,5%',
          'Prisen faller ca. 3,5%',
          'Prisen faller ca. 7%',
          'Prisen forblir uendret'
        ],
        correctAnswer: 1,
        explanation: 'Prisendring ≈ -Durasjon × Renteendring = -7 × 0,5% = -3,5%. Prisen faller når renten stiger, og durasjonen bestemmer hvor mye.'
      },
      {
        id: 'q4-18',
        question: 'Hva er grensen mellom investment grade og high yield?',
        options: [
          'A- / BBB+',
          'BBB- / BB+',
          'BB- / B+',
          'AA- / A+'
        ],
        correctAnswer: 1,
        explanation: 'BBB- er laveste investment grade, og BB+ er høyeste high yield. Denne grensen er viktig fordi mange fond kun kan investere i investment grade.'
      },
      {
        id: 'q4-19',
        question: 'Hva er inflasjonsrisiko for obligasjonsinvestorer?',
        options: [
          'Risikoen for at utsteder ikke betaler tilbake',
          'Risikoen for at kjøpekraften av kontantstrømmene eroderes',
          'Risikoen for at obligasjonen ikke kan selges',
          'Risikoen for valutakursendringer'
        ],
        correctAnswer: 1,
        explanation: 'Inflasjonsrisiko betyr at selv om du får nominelt det du er lovet, kan høy inflasjon redusere realverdien av disse pengene betydelig.'
      },
      {
        id: 'q4-20',
        question: 'Hva betyr det når en obligasjon handles til "overkurs"?',
        options: [
          'Prisen er over pålydende, og YTM er lavere enn kupongrenten',
          'Prisen er under pålydende, og YTM er høyere enn kupongrenten',
          'Obligasjonen har blitt oppgradert av ratingbyråene',
          'Obligasjonen er illikvid og vanskelig å selge'
        ],
        correctAnswer: 0,
        explanation: 'Overkurs (premie) betyr at prisen er over 100% av pålydende. Dette skjer når kupongrenten er høyere enn markedsrenten, slik at YTM blir lavere enn kupongen.'
      },
      {
        id: 'q4-21',
        question: 'Hvilken risikotype er MEST relevant for en langsiktig statsobligasjon?',
        options: [
          'Kredittrisiko',
          'Renterisiko',
          'Valutarisiko',
          'Konkursrisiko'
        ],
        correctAnswer: 1,
        explanation: 'Statsobligasjoner fra utviklede land har minimal kredittrisiko. Renterisiko er hovedrisikoen, spesielt for lange løpetider med høy durasjon.'
      },
      {
        id: 'q4-22',
        question: 'Hva er "credit spread"?',
        options: [
          'Forskjellen mellom lange og korte renter',
          'Rentepåslaget utover risikofri rente for å kompensere for kredittrisiko',
          'Differansen mellom kjøps- og salgspris',
          'Forskjellen mellom fast og flytende rente'
        ],
        correctAnswer: 1,
        explanation: 'Credit spread er den ekstra avkastningen investorer krever for å bære kredittrisiko, målt som differansen mellom obligasjonsrenten og statsrenten.'
      },
      {
        id: 'q4-23',
        question: 'Hva skjer typisk med credit spreader i økonomiske kriser?',
        options: [
          'De holder seg stabile',
          'De krymper (blir smalere)',
          'De øker (blir bredere)',
          'De blir negative'
        ],
        correctAnswer: 2,
        explanation: 'I kriser øker investorenes risikoaversjon. De krever høyere kompensasjon for kredittrisiko, så spreadene utvides betydelig.'
      },
      {
        id: 'q4-24',
        question: 'Hva er forskjellen mellom Macaulay-durasjon og modifisert durasjon?',
        options: [
          'Det finnes ingen forskjell - det er samme begrep',
          'Macaulay måler tid til kontantstrømmer, modifisert måler prisendring ved renteendring',
          'Macaulay brukes kun for statsobligasjoner',
          'Modifisert durasjon er alltid høyere enn Macaulay'
        ],
        correctAnswer: 1,
        explanation: 'Macaulay-durasjon er vektet gjennomsnittlig tid til kontantstrømmene. Modifisert durasjon = Macaulay / (1+r) og måler prosentvis prisendring ved 1% renteendring.'
      },
      {
        id: 'q4-25',
        question: 'Hva kjennetegner en "Second Party Opinion" (SPO)?',
        options: [
          'En vurdering fra kredittratingsbyråer som S&P eller Moody\'s',
          'En uavhengig vurdering av om en obligasjon faktisk er "grønn"',
          'En analyse av obligasjonens likviditetsrisiko',
          'En prognose for fremtidig renteutvikling'
        ],
        correctAnswer: 1,
        explanation: 'SPO er en uavhengig vurdering fra eksperter som CICERO som bekrefter at pengene fra en grønn obligasjon faktisk går til miljøvennlige prosjekter.'
      },
      {
        id: 'q4-26',
        question: 'Hva betyr det at de fleste norske foretaksobligasjoner har "flytende rente"?',
        options: [
          'Renten endres daglig basert på aksjemarkdet',
          'Kupongen justeres periodisk basert på NIBOR',
          'Utsteder kan endre renten når som helst',
          'Investorer kan velge mellom ulike rentenivåer'
        ],
        correctAnswer: 1,
        explanation: 'Flytende rente betyr at kupongen er NIBOR + et fast påslag. Når NIBOR endres (typisk hver 3. måned), endres også kupongen tilsvarende.'
      },
      {
        id: 'q4-27',
        question: 'En investor kjøper en 5-årig obligasjon til kurs 90. Hva skjer med YTM sammenlignet med kupongrenten?',
        options: [
          'YTM er lavere enn kupongrenten',
          'YTM er høyere enn kupongrenten',
          'YTM er lik kupongrenten',
          'YTM kan ikke beregnes'
        ],
        correctAnswer: 1,
        explanation: 'Ved kjøp til underkurs (90%) får investoren kursgevinst ved forfall (90 → 100). Dette øker totalavkastningen, så YTM > kupongrente.'
      },
      {
        id: 'q4-28',
        question: 'Hva er likviditetsrisiko for obligasjonsinvestorer?',
        options: [
          'Risikoen for at utsteder mangler likviditet',
          'Risikoen for at du ikke kan selge obligasjonen raskt til fair pris',
          'Risikoen for at banken går konkurs',
          'Risikoen for høy inflasjon'
        ],
        correctAnswer: 1,
        explanation: 'Likviditetsrisiko er risikoen for at det ikke finnes kjøpere når du vil selge, eller at du må akseptere stor rabatt for å selge raskt.'
      },
      {
        id: 'q4-29',
        question: 'Hva er konveksitet (convexity) i obligasjonssammenheng?',
        options: [
          'Hvor ofte kupongen utbetales',
          'Krumningen i pris-rente-forholdet - prisøkning > prisfall ved like renteendringer',
          'Forskjellen mellom nominell og reell rente',
          'Antall år til forfall'
        ],
        correctAnswer: 1,
        explanation: 'Konveksitet fanger at pris-rente-kurven er buet, ikke lineær. Prisgevinsten ved rentefall er større enn pristapet ved tilsvarende rentestigning.'
      },
      {
        id: 'q4-30',
        question: 'Hvilken rating indikerer at en obligasjon er i mislighold?',
        options: [
          'BBB-',
          'CCC',
          'D',
          'BB+'
        ],
        correctAnswer: 2,
        explanation: 'D-rating betyr at utsteder har misligholdt - enten ikke betalt kuponger eller ikke tilbakebetalt hovedstol som avtalt.'
      },
      {
        id: 'q4-31',
        question: 'Hva finansierer typisk grønne obligasjoner?',
        options: [
          'Nye oljefelt og gassproduksjon',
          'Fornybar energi, energieffektive bygg og bærekraftig transport',
          'Oppkjøp av konkurrenter',
          'Utbetaling av ekstra utbytte til aksjonærer'
        ],
        correctAnswer: 1,
        explanation: 'Grønne obligasjoner finansierer prosjekter som vindparker, solceller, BREEAM-sertifiserte bygg, elektriske ferger og lignende miljøvennlige tiltak.'
      },
      {
        id: 'q4-32',
        question: 'Hva er "grønnvasking" (greenwashing)?',
        options: [
          'Når miljøvennlige prosjekter faktisk lønner seg',
          'Når selskaper gir falskt inntrykk av å være miljøvennlige',
          'Når grønne obligasjoner har lavere rente',
          'Når ratingbyråer oppgraderer miljøselskaper'
        ],
        correctAnswer: 1,
        explanation: 'Grønnvasking er når selskaper overdriver miljøvennligheten for å tiltrekke investorer. EU-taksonomien og SPO-er skal motvirke dette.'
      },
      {
        id: 'q4-33',
        question: 'En rentekurve som er "invertert" betyr at:',
        options: [
          'Korte renter er høyere enn lange renter',
          'Lange renter er høyere enn korte renter',
          'Alle renter er like',
          'Renten varierer gjennom døgnet'
        ],
        correctAnswer: 0,
        explanation: 'Invertert rentekurve oppstår når kortsiktige renter er høyere enn langsiktige. Dette sees ofte som et varsel om kommende resesjon.'
      },
      {
        id: 'q4-34',
        question: 'Hva er Nordic ABM?',
        options: [
          'Et skandinavisk ratingbyrå',
          'En markedsplass for unoterte obligasjoner i Norge',
          'En type grønn obligasjon',
          'Et fond som investerer i nordiske obligasjoner'
        ],
        correctAnswer: 1,
        explanation: 'Nordic ABM (Alternative Bond Market) er en markedsplass for obligasjoner som ikke er notert på Oslo Børs, med lempeligere krav til utsteder.'
      },
      {
        id: 'q4-35',
        question: 'Hvorfor er high yield-obligasjoner populære i det norske markedet?',
        options: [
          'Fordi Norge ikke har investment grade-selskaper',
          'Fordi offshore/shipping-sektoren er stor og syklisk',
          'Fordi Norges Bank krever det',
          'Fordi det ikke finnes alternativer'
        ],
        correctAnswer: 1,
        explanation: 'Norge har en stor offshore- og shippingsektor med selskaper som ofte ikke oppnår investment grade. Dette har skapt et aktivt high yield-marked.'
      },
      {
        id: 'q4-36',
        question: 'Hvordan påvirker lengre løpetid durasjonen?',
        options: [
          'Ingen påvirkning - durasjon er uavhengig av løpetid',
          'Lengre løpetid gir høyere durasjon og mer renterisiko',
          'Lengre løpetid gir lavere durasjon og mindre renterisiko',
          'Det avhenger kun av kupongrenten'
        ],
        correctAnswer: 1,
        explanation: 'Lengre løpetid øker durasjonen fordi flere kontantstrømmer påvirkes av renteendringer over lengre tid. Mer tid = mer eksponering.'
      },
      {
        id: 'q4-37',
        question: 'Hva skjer med obligasjonens verdi hvis utstederens kredittrating nedgraderes?',
        options: [
          'Verdien øker fordi renten stiger',
          'Verdien faller fordi investorer krever høyere avkastning',
          'Verdien forblir uendret - ratingen påvirker ikke prisen',
          'Verdien øker fordi færre vil kjøpe'
        ],
        correctAnswer: 1,
        explanation: 'Ved nedgradering øker oppfattet risiko. Investorer krever høyere avkastning (høyere yield), som betyr at prisen må falle.'
      },
      {
        id: 'q4-38',
        question: 'Hva er hovedfordelen med obligasjonsfond for privatpersoner?',
        options: [
          'Garantert høyere avkastning enn direktekjøp',
          'Diversifisering, lav minstetegning og profesjonell forvaltning',
          'Skattefritak på all avkastning',
          'Mulighet til å påvirke selskapenes strategi'
        ],
        correctAnswer: 1,
        explanation: 'Obligasjonsfond gir tilgang til diversifisert obligasjonsportefølje med lav minstetegning (ofte 100-1000 kr), i motsetning til direktekjøp som ofte krever 100 000+ kr.'
      },
      {
        id: 'q4-39',
        question: 'En obligasjon utstedes med 5% kupong når markedsrenten er 5%. Hva er utstedelseskursen?',
        options: [
          'Under pålydende (underkurs)',
          'Over pålydende (overkurs)',
          'Til pålydende (pari/100%)',
          'Det kan ikke bestemmes'
        ],
        correctAnswer: 2,
        explanation: 'Når kupongrente = markedsrente, handles obligasjonen til pålydende (100%). Det er ingen grunn til premie eller rabatt.'
      },
      {
        id: 'q4-40',
        question: 'Hva er hovedformålet med EU-taksonomien for grønne obligasjoner?',
        options: [
          'Å gi lavere skatt til grønne investeringer',
          'Å etablere standarder for hva som kan kalles "bærekraftig"',
          'Å forby fossil-relaterte obligasjoner',
          'Å garantere avkastningen på grønne obligasjoner'
        ],
        correctAnswer: 1,
        explanation: 'EU-taksonomien gir et klassifiseringssystem for bærekraftige aktiviteter, slik at investorer kan stole på at "grønne" produkter faktisk oppfyller miljøkrav.'
      }
    ]
  }
};
