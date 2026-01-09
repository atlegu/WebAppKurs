import { Module } from '../types/course';

export const modul2RegnskapModule: Module = {
  id: 'modul-2-regnskap',
  title: 'Grunnleggende Regnskap',
  icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>',
  order: 2,
  learningObjectives: [
    'Forstå sammenhengen mellom resultatregnskap, balanse og kontantstrøm',
    'Kunne lese og tolke et resultatregnskap',
    'Forstå balansens oppbygning med eiendeler, gjeld og egenkapital',
    'Analysere kontantstrømoppstillingen og forstå hvorfor kontanter er viktig',
    'Beregne og tolke sentrale nøkkeltall for lønnsomhet, likviditet og soliditet'
  ],
  sections: [
    // SEKSJON 2.1: Hvorfor regnskap?
    {
      id: 'seksjon-2-1-hvorfor-regnskap',
      title: 'Hvorfor regnskap er viktig',
      order: 1,
      content: [
        {
          id: '2-1-intro',
          type: 'text',
          order: 1,
          text: 'I 2001 kollapset Enron – ett av USAs største selskaper. Tusenvis av ansatte mistet jobbene sine, pensjonssparingen fordampet, og investorer tapte milliarder. Årsaken? Kreativ regnskapsføring som skjulte enorm gjeld. Å forstå regnskap handler ikke bare om tall – det handler om å avsløre sannheten om et selskaps økonomi.',
          emphasis: 'important'
        },
        {
          id: '2-1-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Regnskapets tre hovedoppgaver'
        },
        {
          id: '2-1-list-1',
          type: 'list',
          order: 3,
          ordered: true,
          items: [
            'Dokumentasjon: Registrere alle økonomiske hendelser systematisk',
            'Rapportering: Gi eiere, kreditorer og myndigheter innsikt i selskapets økonomi',
            'Beslutningsgrunnlag: Gi ledelsen informasjon til å styre virksomheten'
          ]
        },
        {
          id: '2-1-heading-2',
          type: 'heading',
          order: 4,
          level: 2,
          text: 'De tre finansielle hovedoppstillingene'
        },
        {
          id: '2-1-text-2',
          type: 'text',
          order: 5,
          text: 'Ethvert selskap rapporterer tre hovedoppstillinger som til sammen gir et komplett bilde av økonomien:'
        },
        {
          id: '2-1-table-1',
          type: 'table',
          order: 6,
          headers: ['Oppstilling', 'Hva den viser', 'Tidsperiode', 'Nøkkelspørsmål'],
          rows: [
            ['Resultatregnskap', 'Inntekter minus kostnader = resultat', 'En periode (år, kvartal)', 'Tjener selskapet penger?'],
            ['Balanse', 'Eiendeler = Gjeld + Egenkapital', 'Et tidspunkt', 'Hva eier og skylder selskapet?'],
            ['Kontantstrøm', 'Inn- og utbetalinger', 'En periode', 'Hvor kommer pengene fra og hvor går de?']
          ]
        },
        {
          id: '2-1-def-1',
          type: 'definition',
          order: 7,
          term: 'Regnskapsligningen',
          definition: 'Eiendeler = Gjeld + Egenkapital. Dette er regnskapets grunnlov – balansen må alltid stemme. Eiendelene viser hva selskapet har, mens høyresiden viser hvordan det er finansiert.'
        },
        {
          id: '2-1-heading-3',
          type: 'heading',
          order: 8,
          level: 2,
          text: 'Hvem bruker regnskapet?'
        },
        {
          id: '2-1-table-2',
          type: 'table',
          order: 9,
          headers: ['Brukergruppe', 'Hva de ser etter', 'Hvorfor'],
          rows: [
            ['Investorer', 'Lønnsomhet, vekst, utbytte', 'Vurdere om selskapet er en god investering'],
            ['Banker/Kreditorer', 'Betalingsevne, sikkerhet', 'Vurdere om selskapet kan betale tilbake lån'],
            ['Ansatte', 'Stabilitet, vekst', 'Jobbsikkerhet og lønnsutvikling'],
            ['Leverandører', 'Likviditet', 'Vil de få betalt for varer og tjenester?'],
            ['Myndigheter', 'Skattegrunnlag', 'Beregne riktig skatt']
          ]
        },
        {
          id: '2-1-example-1',
          type: 'example',
          order: 10,
          title: 'Case: Equinor årsrapport 2023',
          content: 'Equinors årsrapport 2023 er på over 300 sider. Men de viktigste tallene finner du i de tre hovedoppstillingene:\n\n• Resultat: 28,6 mrd USD i driftsresultat\n• Balanse: 148 mrd USD i eiendeler, 45% egenkapitalandel\n• Kontantstrøm: 36 mrd USD fra drift\n\nDisse tallene forteller at Equinor er et lønnsomt, solid finansiert selskap med sterk kontantgenerering. Men de forteller ikke alt – klimarisiko, reserverstatning og fremtidige investeringer krever dypere analyse.'
        },
        {
          id: '2-1-keypoint-1',
          type: 'keypoint',
          order: 11,
          points: [
            'Regnskap er språket til næringslivet – du må kunne det for å forstå selskapers økonomi',
            'De tre hovedoppstillingene henger sammen og gir ulik informasjon',
            'Ulike brukere har ulike behov og fokuserer på forskjellige deler av regnskapet'
          ]
        },
        {
          id: '2-1-quiz-1',
          type: 'quiz',
          order: 12,
          question: 'Hva viser regnskapsligningen?',
          options: [
            'Inntekter = Kostnader + Resultat',
            'Eiendeler = Gjeld + Egenkapital',
            'Kontanter = Inntekter - Utgifter',
            'Overskudd = Inntekter - Kostnader'
          ],
          correctAnswer: 1,
          explanation: 'Regnskapsligningen Eiendeler = Gjeld + Egenkapital er grunnlaget for balansen. Den viser at alt selskapet eier (eiendeler) er finansiert enten med gjeld eller egenkapital.'
        },
        {
          id: '2-1-quiz-2',
          type: 'quiz',
          order: 13,
          question: 'Hvilken finansiell oppstilling viser om selskapet tjener penger?',
          options: [
            'Balansen',
            'Kontantstrømoppstillingen',
            'Resultatregnskapet',
            'Egenkapitaloppstillingen'
          ],
          correctAnswer: 2,
          explanation: 'Resultatregnskapet viser inntekter minus kostnader over en periode, og dermed om selskapet tjener eller taper penger.'
        },
        {
          id: '2-1-exercise-1',
          type: 'exercise',
          order: 14,
          title: 'Oppgave: Brukerperspektiver',
          description: '1. Du vurderer å investere i et selskap. Hvilke tre nøkkeltall fra årsregnskapet ville du sett på først? Begrunn valget.\n\n2. En bank vurderer å gi et selskap et lån på 10 millioner. Hvilken av de tre hovedoppstillingene er viktigst for bankens beslutning, og hvorfor?\n\n3. Forklar med egne ord hvorfor Enron-skandalen viser at regnskapsforståelse er viktig for investorer.',
          hint: 'Tenk på hva de ulike brukergruppene trenger å vite for å ta gode beslutninger.'
        },
        {
          id: '2-1-reflection-1',
          type: 'reflection',
          order: 15,
          question: 'Har du noen gang sett på et selskaps årsregnskap? Hvis ikke, prøv å finne årsrapporten til et selskap du kjenner (f.eks. DNB, Telenor, eller en lokal bedrift). Hva legger du merke til ved første øyekast?'
        }
      ]
    },

    // SEKSJON 2.2: Resultatregnskapet
    {
      id: 'seksjon-2-2-resultat',
      title: 'Resultatregnskapet – Tjener selskapet penger?',
      order: 2,
      content: [
        {
          id: '2-2-intro',
          type: 'text',
          order: 1,
          text: '**I 2019 rapporterte Norwegian et underskudd på 1,6 milliarder kroner – til tross for rekordhøye passasjertall.** Hvordan kan et flyselskap som frakter millioner av mennesker tape så mye penger? Svaret finner du i resultatregnskapet – dokumentet som avslører om et selskap virkelig tjener penger, eller bare later som.',
          emphasis: 'important'
        },
        {
          id: '2-2-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Resultatregnskapets oppbygning'
        },
        {
          id: '2-2-text-2',
          type: 'text',
          order: 3,
          text: 'Et resultatregnskap følger en logisk struktur fra toppen (inntekter) til bunnen (resultat):'
        },
        {
          id: '2-2-table-1',
          type: 'table',
          order: 4,
          headers: ['Post', 'Eksempel (MNOK)', 'Forklaring'],
          rows: [
            ['Driftsinntekter', '1 000', 'Inntekter fra hovedvirksomheten (salg av varer/tjenester)'],
            ['- Varekostnad', '-400', 'Kostnaden for solgte varer'],
            ['= Bruttofortjeneste', '600', 'Inntekter minus direkte kostnader'],
            ['- Driftskostnader', '-350', 'Lønn, husleie, markedsføring, etc.'],
            ['= Driftsresultat (EBIT)', '250', 'Resultat før renter og skatt'],
            ['- Rentekostnader', '-30', 'Kostnader på lån'],
            ['+ Renteinntekter', '5', 'Inntekter fra bankinnskudd etc.'],
            ['= Resultat før skatt', '225', 'Resultat før skattekostnad'],
            ['- Skattekostnad', '-50', 'Ca. 22% selskapsskatt i Norge'],
            ['= Årsresultat', '175', 'Bunnlinjen – overskudd til eierne']
          ]
        },
        {
          id: '2-2-heading-2',
          type: 'heading',
          order: 5,
          level: 2,
          text: 'Viktige begreper'
        },
        {
          id: '2-2-def-1',
          type: 'definition',
          order: 6,
          term: 'EBIT (Earnings Before Interest and Taxes)',
          definition: 'Driftsresultatet – viser hvor mye selskapet tjener på selve driften, uavhengig av finansiering og skatt. Brukes ofte til å sammenligne selskaper.'
        },
        {
          id: '2-2-def-2',
          type: 'definition',
          order: 7,
          term: 'EBITDA',
          definition: 'Driftsresultat før avskrivninger. Viser kontantgenerering fra driften før investeringer. Populært mål, men kan være misvisende fordi det ignorerer investeringsbehov.'
        },
        {
          id: '2-2-def-3',
          type: 'definition',
          order: 8,
          term: 'Bruttomargin',
          definition: 'Bruttofortjeneste / Driftsinntekter. Viser hvor mye som er igjen etter direkte kostnader. Høyere margin = bedre priskraft eller lavere produksjonskostnader.'
        },
        {
          id: '2-2-heading-3',
          type: 'heading',
          order: 9,
          level: 2,
          text: 'Periodisering: Regnskap vs. kontanter'
        },
        {
          id: '2-2-text-3',
          type: 'text',
          order: 10,
          text: 'En viktig regel i regnskap: Inntekter og kostnader føres når de oppstår, ikke når pengene kommer eller går. Dette kalles periodisering.'
        },
        {
          id: '2-2-example-1',
          type: 'example',
          order: 11,
          title: 'Periodisering i praksis',
          content: 'Selskap A selger varer for 100 000 kr i desember, med 30 dagers betalingsfrist.\n\n• I resultatregnskapet for desember: Inntekt 100 000 kr\n• I kontantstrømmen for desember: Ingen innbetaling (kunden har ikke betalt ennå)\n• I balansen per 31. desember: Kundefordring 100 000 kr (selskapet har til gode)\n• I kontantstrømmen for januar: Innbetaling 100 000 kr (når kunden betaler)\n\nDette er hvorfor et lønnsomt selskap kan gå konkurs – de kan ha høye inntekter i regnskapet, men mangle kontanter til å betale regningene.'
        },
        {
          id: '2-2-heading-4',
          type: 'heading',
          order: 12,
          level: 2,
          text: 'Hva påvirker resultatet?'
        },
        {
          id: '2-2-list-1',
          type: 'list',
          order: 13,
          ordered: false,
          items: [
            'Salgsvolum og priser: Høyere salg eller bedre priser øker inntektene',
            'Kostnadsstruktur: Faste vs. variable kostnader påvirker lønnsomhet ved ulik kapasitetsutnyttelse',
            'Avskrivninger: Ikke-kontante kostnader som fordeler investeringer over levetid',
            'Engangseffekter: Gevinster fra salg, nedskrivninger, restrukturering',
            'Valutaeffekter: For selskaper med internasjonal virksomhet'
          ]
        },
        {
          id: '2-2-keypoint-1',
          type: 'keypoint',
          order: 14,
          points: [
            'Resultatregnskapet viser lønnsomhet over en periode',
            'EBIT (driftsresultat) er nyttig for å sammenligne selskaper',
            'Periodisering betyr at regnskapet ikke er det samme som kontantstrøm'
          ]
        },
        {
          id: '2-2-quiz-1',
          type: 'quiz',
          order: 15,
          question: 'Hva viser EBIT?',
          options: [
            'Selskapets totale inntekter',
            'Driftsresultatet før renter og skatt',
            'Kontantstrøm fra driften',
            'Egenkapitalavkastningen'
          ],
          correctAnswer: 1,
          explanation: 'EBIT (Earnings Before Interest and Taxes) er driftsresultatet – hva selskapet tjener på selve driften, før vi tar hensyn til finansiering (renter) og skatt.'
        },
        {
          id: '2-2-quiz-2',
          type: 'quiz',
          order: 16,
          question: 'Hvorfor kan et lønnsomt selskap gå konkurs?',
          options: [
            'Fordi høy lønnsomhet gir høy skatt',
            'Fordi resultatregnskapet viser inntekter før pengene kommer inn',
            'Fordi avskrivninger reduserer kontantbeholdningen',
            'Fordi EBITDA ikke tar hensyn til avskrivninger'
          ],
          correctAnswer: 1,
          explanation: 'På grunn av periodisering føres inntekter når de oppstår, ikke når pengene kommer. Et selskap kan ha høye bokførte inntekter men mangle kontanter til å betale løpende regninger.'
        },
        {
          id: '2-2-exercise-1',
          type: 'exercise',
          order: 17,
          title: 'Oppgave: Analyser et resultatregnskap',
          description: 'Et selskap har følgende tall (MNOK):\n• Driftsinntekter: 500\n• Varekostnad: 200\n• Lønnskostnader: 150\n• Andre driftskostnader: 50\n• Avskrivninger: 30\n• Rentekostnader: 15\n• Skattekostnad: 12\n\n1. Beregn bruttofortjeneste, driftsresultat (EBIT), EBITDA og årsresultat.\n2. Beregn bruttomargin og driftsmargin.\n3. Er dette et lønnsomt selskap? Begrunn svaret.',
          hint: 'Bruttofortjeneste = Inntekter - Varekostnad. EBIT = Bruttofortjeneste - Driftskostnader - Avskrivninger.'
        },
        {
          id: '2-2-reflection-1',
          type: 'reflection',
          order: 18,
          question: 'Hvorfor tror du EBITDA er så populært blant ledere og investorer, til tross for at det kan være misvisende? Hva er fordelene og ulempene med å fokusere på dette tallet?'
        }
      ]
    },

    // SEKSJON 2.3: Balansen
    {
      id: 'seksjon-2-3-balanse',
      title: 'Balansen – Hva eier og skylder selskapet?',
      order: 3,
      content: [
        {
          id: '2-3-intro',
          type: 'text',
          order: 1,
          text: '**Da Norwegian søkte om konkursbeskyttelse i 2020, hadde selskapet 60 milliarder i gjeld og bare 6 milliarder i egenkapital.** For hver krone eierne hadde skutt inn, skyldte selskapet 10 kroner til andre. Balansen avslørte det resultatregnskapet skjulte: Norwegian var teknisk insolvent. Å lese en balanse kan bokstavelig talt redde investeringen din.',
          emphasis: 'important'
        },
        {
          id: '2-3-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Balansens oppbygning'
        },
        {
          id: '2-3-text-2',
          type: 'text',
          order: 3,
          text: 'Balansen har to sider som alltid skal være like (derav navnet):'
        },
        {
          id: '2-3-table-1',
          type: 'table',
          order: 4,
          headers: ['EIENDELER (Aktiva)', 'MNOK', 'GJELD OG EGENKAPITAL (Passiva)', 'MNOK'],
          rows: [
            ['Anleggsmidler', '', 'Egenkapital', ''],
            ['  Varige driftsmidler', '300', '  Aksjekapital', '100'],
            ['  Immaterielle eiendeler', '50', '  Opptjent egenkapital', '250'],
            ['  Finansielle anleggsmidler', '20', 'Sum egenkapital', '350'],
            ['Sum anleggsmidler', '370', '', ''],
            ['', '', 'Langsiktig gjeld', ''],
            ['Omløpsmidler', '', '  Banklån', '200'],
            ['  Varelager', '80', '  Obligasjonslån', '50'],
            ['  Kundefordringer', '120', 'Sum langsiktig gjeld', '250'],
            ['  Bankinnskudd', '130', '', ''],
            ['Sum omløpsmidler', '330', 'Kortsiktig gjeld', ''],
            ['', '', '  Leverandørgjeld', '60'],
            ['', '', '  Annen kortsiktig gjeld', '40'],
            ['', '', 'Sum kortsiktig gjeld', '100'],
            ['SUM EIENDELER', '700', 'SUM GJELD OG EK', '700']
          ]
        },
        {
          id: '2-3-heading-2',
          type: 'heading',
          order: 5,
          level: 2,
          text: 'Eiendeler (Aktiva)'
        },
        {
          id: '2-3-def-1',
          type: 'definition',
          order: 6,
          term: 'Anleggsmidler',
          definition: 'Eiendeler som skal brukes i virksomheten over lengre tid (typisk > 1 år). Eksempler: bygninger, maskiner, patenter, aksjer i datterselskap.'
        },
        {
          id: '2-3-def-2',
          type: 'definition',
          order: 7,
          term: 'Omløpsmidler',
          definition: 'Eiendeler som forventes å bli omgjort til kontanter innen ett år. Eksempler: varelager, kundefordringer, kontanter.'
        },
        {
          id: '2-3-heading-3',
          type: 'heading',
          order: 8,
          level: 2,
          text: 'Gjeld og egenkapital (Passiva)'
        },
        {
          id: '2-3-def-3',
          type: 'definition',
          order: 9,
          term: 'Egenkapital',
          definition: 'Det som tilhører eierne etter at all gjeld er betalt. Består av innskutt kapital (aksjekapital) og opptjent kapital (tilbakeholdte overskudd). Egenkapital = Eiendeler - Gjeld.'
        },
        {
          id: '2-3-def-4',
          type: 'definition',
          order: 10,
          term: 'Langsiktig gjeld',
          definition: 'Gjeld som forfaller til betaling om mer enn ett år. Typisk banklån og obligasjonslån.'
        },
        {
          id: '2-3-def-5',
          type: 'definition',
          order: 11,
          term: 'Kortsiktig gjeld',
          definition: 'Gjeld som forfaller til betaling innen ett år. Leverandørgjeld, skyldig skatt, kassekreditt.'
        },
        {
          id: '2-3-draggame-balance',
          type: 'draggame',
          order: 12,
          title: 'Balansespillet – Plasser postene riktig!',
          instructions: 'Dra hver post til riktig kategori på balansen. Tenk på: Er det noe selskapet eier (eiendeler) eller skylder (gjeld/EK)? Er det langsiktig eller kortsiktig?',
          categories: [
            { id: 'anleggsmidler', title: 'Anleggsmidler' },
            { id: 'omlopsmidler', title: 'Omløpsmidler' },
            { id: 'egenkapital', title: 'Egenkapital' },
            { id: 'gjeld', title: 'Gjeld' }
          ],
          items: [
            { id: 'bygninger', text: 'Bygninger', correctCategory: 'anleggsmidler', explanation: 'Varige driftsmidler som brukes over lang tid' },
            { id: 'maskiner', text: 'Maskiner', correctCategory: 'anleggsmidler', explanation: 'Produksjonsutstyr er anleggsmidler' },
            { id: 'patent', text: 'Patenter', correctCategory: 'anleggsmidler', explanation: 'Immaterielle eiendeler er også anleggsmidler' },
            { id: 'aksjer-datter', text: 'Aksjer i datterselskap', correctCategory: 'anleggsmidler', explanation: 'Finansielle anleggsmidler - langsiktig investering' },
            { id: 'varelager', text: 'Varelager', correctCategory: 'omlopsmidler', explanation: 'Varer som skal selges innen kort tid' },
            { id: 'kundefordringer', text: 'Kundefordringer', correctCategory: 'omlopsmidler', explanation: 'Penger kunder skylder oss, forventes betalt snart' },
            { id: 'bankinnskudd', text: 'Bankinnskudd', correctCategory: 'omlopsmidler', explanation: 'Kontanter og bankinnskudd er omløpsmidler' },
            { id: 'forskuddsbetalt', text: 'Forskuddsbetalte kostnader', correctCategory: 'omlopsmidler', explanation: 'Betalinger vi har gjort på forhånd' },
            { id: 'aksjekapital', text: 'Aksjekapital', correctCategory: 'egenkapital', explanation: 'Innskutt kapital fra aksjonærene' },
            { id: 'opptjent-ek', text: 'Opptjent egenkapital', correctCategory: 'egenkapital', explanation: 'Tilbakeholdt overskudd fra tidligere år' },
            { id: 'overkursfond', text: 'Overkursfond', correctCategory: 'egenkapital', explanation: 'Betaling over pålydende ved aksjeemisjon' },
            { id: 'banklan', text: 'Langsiktig banklån', correctCategory: 'gjeld', explanation: 'Lån som forfaller om mer enn ett år' },
            { id: 'obligasjonslan', text: 'Obligasjonslån', correctCategory: 'gjeld', explanation: 'Langsiktig gjeld til obligasjonseiere' },
            { id: 'leverandorgjeld', text: 'Leverandørgjeld', correctCategory: 'gjeld', explanation: 'Kortsiktig gjeld til leverandører' },
            { id: 'skyldig-skatt', text: 'Skyldig skatt', correctCategory: 'gjeld', explanation: 'Kortsiktig gjeld til myndighetene' },
            { id: 'kassekreditt', text: 'Kassekreditt', correctCategory: 'gjeld', explanation: 'Kortsiktig gjeld til banken' }
          ],
          successMessage: 'Fantastisk! Du har plassert alle balansepostene riktig. Nå forstår du strukturen i en balanse!'
        },
        {
          id: '2-3-heading-4',
          type: 'heading',
          order: 13,
          level: 2,
          text: 'Balansen forteller en historie'
        },
        {
          id: '2-3-example-1',
          type: 'example',
          order: 14,
          title: 'Lese mellom linjene',
          content: 'Se på disse to selskapene:\n\n**Selskap A:**\n• 80% anleggsmidler, 20% omløpsmidler\n• 30% egenkapital, 70% gjeld\n• Stor investering i fabrikker, høy gjeldsfinansiering\n\n**Selskap B:**\n• 30% anleggsmidler, 70% omløpsmidler\n• 60% egenkapital, 40% gjeld\n• Lite investering i varige driftsmidler, solid finansiert\n\nSelskap A kan være et industriselskap med tunge investeringer. Selskap B kan være et konsulentselskap eller handelsselskap. Balansen forteller mye om forretningsmodellen og risikoprofilen.'
        },
        {
          id: '2-3-heading-5',
          type: 'heading',
          order: 15,
          level: 2,
          text: 'Arbeidskapital'
        },
        {
          id: '2-3-def-6',
          type: 'definition',
          order: 16,
          term: 'Arbeidskapital',
          definition: 'Omløpsmidler minus kortsiktig gjeld. Viser selskapets evne til å betale løpende forpliktelser. Positiv arbeidskapital betyr at selskapet har mer kortsiktige eiendeler enn kortsiktig gjeld.'
        },
        {
          id: '2-3-formula-1',
          type: 'formula',
          order: 17,
          formula: 'Arbeidskapital = Omløpsmidler - Kortsiktig gjeld',
          description: 'Med tallene fra tabellen: 330 - 100 = 230 MNOK. Selskapet har god likviditetsreserve.'
        },
        {
          id: '2-3-keypoint-1',
          type: 'keypoint',
          order: 18,
          points: [
            'Balansen viser et øyeblikksbilde av selskapets finansielle stilling',
            'Eiendeler = Gjeld + Egenkapital (regnskapsligningen)',
            'Arbeidskapital viser evnen til å betale kortsiktige forpliktelser',
            'Balansestrukturen forteller mye om forretningsmodell og risiko'
          ]
        },
        {
          id: '2-3-quiz-1',
          type: 'quiz',
          order: 19,
          question: 'Hva er arbeidskapital?',
          options: [
            'Egenkapital minus gjeld',
            'Omløpsmidler minus kortsiktig gjeld',
            'Anleggsmidler minus langsiktig gjeld',
            'Eiendeler minus egenkapital'
          ],
          correctAnswer: 1,
          explanation: 'Arbeidskapital er omløpsmidler minus kortsiktig gjeld. Det viser hvor mye "buffer" selskapet har for å håndtere kortsiktige forpliktelser.'
        },
        {
          id: '2-3-quiz-2',
          type: 'quiz',
          order: 20,
          question: 'Et selskap har eiendeler på 500 MNOK og gjeld på 300 MNOK. Hvor stor er egenkapitalen?',
          options: [
            '800 MNOK',
            '500 MNOK',
            '300 MNOK',
            '200 MNOK'
          ],
          correctAnswer: 3,
          explanation: 'Fra regnskapsligningen: Egenkapital = Eiendeler - Gjeld = 500 - 300 = 200 MNOK.'
        },
        {
          id: '2-3-exercise-1',
          type: 'exercise',
          order: 21,
          title: 'Oppgave: Analyser en balanse',
          description: 'Et selskap har følgende balanse (MNOK):\n\nEiendeler:\n• Varige driftsmidler: 400\n• Varelager: 100\n• Kundefordringer: 80\n• Bank: 50\n\nGjeld og EK:\n• Aksjekapital: 150\n• Opptjent egenkapital: ?\n• Banklån (langsiktig): 180\n• Leverandørgjeld: 70\n• Annen kortsiktig gjeld: 30\n\n1. Beregn opptjent egenkapital slik at balansen går i null.\n2. Beregn arbeidskapitalen.\n3. Beregn egenkapitalandelen (egenkapital / eiendeler).\n4. Vurder: Er selskapet solid finansiert?',
          hint: 'Start med å summere alle eiendeler og alle kjente gjeldsposter. Differansen er opptjent egenkapital.'
        },
        {
          id: '2-3-reflection-1',
          type: 'reflection',
          order: 22,
          question: 'Hvorfor tror du mange investorer ser på egenkapitalandelen (egenkapital / eiendeler) som et viktig mål på soliditet? Hva sier dette tallet om selskapets risiko?'
        }
      ]
    },

    // SEKSJON 2.4: Kontantstrømoppstillingen
    {
      id: 'seksjon-2-4-kontantstrom',
      title: 'Kontantstrømoppstillingen – Følg pengene',
      order: 4,
      content: [
        {
          id: '2-4-intro',
          type: 'text',
          order: 1,
          text: '"Revenue is vanity, profit is sanity, but cash is reality." Dette sitatet fanger essensen av kontantstrømoppstillingen. Du kan ha høye inntekter og godt overskudd, men uten kontanter går selskapet konkurs. Kontantstrømmen viser hvor pengene faktisk kommer fra og hvor de går.',
          emphasis: 'important'
        },
        {
          id: '2-4-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'De tre aktivitetene'
        },
        {
          id: '2-4-text-2',
          type: 'text',
          order: 3,
          text: 'Kontantstrømoppstillingen deler pengestrømmene i tre kategorier:'
        },
        {
          id: '2-4-table-1',
          type: 'table',
          order: 4,
          headers: ['Aktivitet', 'Eksempler på inn', 'Eksempler på ut'],
          rows: [
            ['Drift', 'Innbetalinger fra kunder', 'Utbetalinger til leverandører, lønn, skatt'],
            ['Investering', 'Salg av anleggsmidler, salg av datterselskap', 'Kjøp av maskiner, oppkjøp av selskaper'],
            ['Finansiering', 'Opptak av lån, emisjon av aksjer', 'Nedbetaling av lån, utbytte til aksjonærer']
          ]
        },
        {
          id: '2-4-heading-2',
          type: 'heading',
          order: 5,
          level: 2,
          text: 'Eksempel på kontantstrømoppstilling'
        },
        {
          id: '2-4-table-2',
          type: 'table',
          order: 6,
          headers: ['Post', 'MNOK'],
          rows: [
            ['KONTANTSTRØM FRA DRIFT', ''],
            ['Årsresultat', '175'],
            ['+ Avskrivninger (ikke kontant)', '40'],
            ['- Økning i kundefordringer', '-30'],
            ['- Økning i varelager', '-20'],
            ['+ Økning i leverandørgjeld', '15'],
            ['= Netto kontantstrøm fra drift', '180'],
            ['', ''],
            ['KONTANTSTRØM FRA INVESTERING', ''],
            ['- Kjøp av varige driftsmidler', '-100'],
            ['+ Salg av finansielle eiendeler', '10'],
            ['= Netto kontantstrøm fra investering', '-90'],
            ['', ''],
            ['KONTANTSTRØM FRA FINANSIERING', ''],
            ['+ Opptak av langsiktig lån', '50'],
            ['- Utbytte til aksjonærer', '-80'],
            ['- Nedbetaling av lån', '-30'],
            ['= Netto kontantstrøm fra finansiering', '-60'],
            ['', ''],
            ['NETTO ENDRING I KONTANTER', '30'],
            ['+ Kontanter ved periodens start', '100'],
            ['= Kontanter ved periodens slutt', '130']
          ]
        },
        {
          id: '2-4-heading-3',
          type: 'heading',
          order: 7,
          level: 2,
          text: 'Forholdet mellom resultat og kontantstrøm'
        },
        {
          id: '2-4-text-3',
          type: 'text',
          order: 8,
          text: 'Legg merke til at årsresultatet (175) ikke er det samme som kontantstrøm fra drift (180). Forskjellen skyldes:'
        },
        {
          id: '2-4-list-1',
          type: 'list',
          order: 9,
          ordered: false,
          items: [
            'Avskrivninger: Kostnad i resultatregnskapet, men ingen kontantutbetaling',
            'Endringer i arbeidskapital: Økt kundefordring = salg uten innbetaling (trekker fra)',
            'Økt varelager = kontanter bundet opp i varer (trekker fra)',
            'Økt leverandørgjeld = kjøp uten utbetaling (legger til)'
          ]
        },
        {
          id: '2-4-def-1',
          type: 'definition',
          order: 10,
          term: 'Fri kontantstrøm (Free Cash Flow)',
          definition: 'Kontantstrøm fra drift minus investeringer. Viser hvor mye kontanter som er tilgjengelig for eierne og kreditorene etter at nødvendige investeringer er gjort.'
        },
        {
          id: '2-4-formula-1',
          type: 'formula',
          order: 11,
          formula: 'Fri kontantstrøm = Kontantstrøm fra drift - Investeringer',
          description: 'I eksempelet: 180 - 100 = 80 MNOK. Dette beløpet kan brukes til å betale utbytte, nedbetale gjeld, eller opparbeide kontantreserve.'
        },
        {
          id: '2-4-example-1',
          type: 'example',
          order: 12,
          title: 'Hva sier kontantstrømmen?',
          content: 'Selskapets kontantstrøm forteller følgende historie:\n\n✓ Sterk drift: 180 MNOK fra driften – solid kontantgenerering\n✓ Investerer i vekst: 100 MNOK i nye driftsmidler\n✓ Returnerer kapital: 80 MNOK i utbytte til aksjonærer\n✓ Netto positiv: 30 MNOK økning i kontantbeholdning\n\nDette er et sunt mønster: Selskapet finansierer investeringer og utbytte fra driften, og bygger likviditetsreserve.'
        },
        {
          id: '2-4-heading-4',
          type: 'heading',
          order: 13,
          level: 2,
          text: 'Varselflagg i kontantstrømmen'
        },
        {
          id: '2-4-list-2',
          type: 'list',
          order: 14,
          ordered: false,
          items: [
            'Negativ kontantstrøm fra drift over tid: Kjernevirksomheten genererer ikke kontanter',
            'Finansierer utbytte med lån: Ikke bærekraftig – selskapet låner for å betale eierne',
            'Kontantstrøm mye lavere enn resultat: Kan tyde på aggressive regnskapsprinsipper',
            'Stadig økende kundefordringer: Kan tyde på at kunder ikke betaler'
          ]
        },
        {
          id: '2-4-keypoint-1',
          type: 'keypoint',
          order: 15,
          points: [
            '"Cash is king" – kontantstrøm viser selskapets faktiske pengebevegelser',
            'Resultat og kontantstrøm er ikke det samme på grunn av periodisering',
            'Fri kontantstrøm viser hva som er tilgjengelig etter investeringer',
            'Sunne selskaper finansierer investeringer og utbytte fra driften'
          ]
        },
        {
          id: '2-4-quiz-1',
          type: 'quiz',
          order: 16,
          question: 'Hvorfor legges avskrivninger til årsresultatet når vi beregner kontantstrøm fra drift?',
          options: [
            'Fordi avskrivninger er en inntekt',
            'Fordi avskrivninger er en kostnad som ikke medfører kontantutbetaling',
            'Fordi avskrivninger øker egenkapitalen',
            'Fordi avskrivninger reduserer skatten'
          ],
          correctAnswer: 1,
          explanation: 'Avskrivninger reduserer resultatet, men innebærer ingen faktisk kontantutbetaling. Derfor legges de tilbake for å beregne kontantstrøm fra drift.'
        },
        {
          id: '2-4-quiz-2',
          type: 'quiz',
          order: 17,
          question: 'Hva er fri kontantstrøm (Free Cash Flow)?',
          options: [
            'Kontanter på bankkonto',
            'Kontantstrøm fra drift minus investeringer',
            'Resultat minus skatt',
            'Kontantstrøm fra finansiering'
          ],
          correctAnswer: 1,
          explanation: 'Fri kontantstrøm = Kontantstrøm fra drift minus investeringer. Det viser hvor mye kontanter som er tilgjengelig for eierne og kreditorene etter nødvendige investeringer.'
        },
        {
          id: '2-4-exercise-1',
          type: 'exercise',
          order: 18,
          title: 'Oppgave: Kontantstrømanalyse',
          description: 'Et selskap har følgende tall:\n• Årsresultat: 50 MNOK\n• Avskrivninger: 20 MNOK\n• Økning i kundefordringer: 15 MNOK\n• Reduksjon i varelager: 5 MNOK\n• Økning i leverandørgjeld: 8 MNOK\n• Kjøp av maskiner: 40 MNOK\n• Utbytte betalt: 25 MNOK\n\n1. Beregn kontantstrøm fra drift.\n2. Beregn fri kontantstrøm.\n3. Kan selskapet finansiere utbyttet fra driften? Forklar.',
          hint: 'Kontantstrøm fra drift = Resultat + Avskrivninger +/- Endringer i arbeidskapital.'
        },
        {
          id: '2-4-reflection-1',
          type: 'reflection',
          order: 19,
          question: 'Warren Buffett fokuserer ofte på "owner earnings" som er nær fri kontantstrøm. Hvorfor tror du erfarne investorer vektlegger kontantstrøm så høyt, ofte mer enn regnskapsmessig resultat?'
        }
      ]
    },

    // SEKSJON 2.5: Nøkkeltall og regnskapsanalyse
    {
      id: 'seksjon-2-5-nokkeltall',
      title: 'Nøkkeltall og regnskapsanalyse',
      order: 5,
      content: [
        {
          id: '2-5-intro',
          type: 'text',
          order: 1,
          text: 'Tallene i regnskapet blir først meningsfulle når vi setter dem i sammenheng. Nøkkeltall – eller forholdstall – gjør det mulig å sammenligne selskaper av ulik størrelse, over tid, og mot bransjen.',
          emphasis: 'important'
        },
        {
          id: '2-5-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Lønnsomhetsnøkkeltall'
        },
        {
          id: '2-5-text-2',
          type: 'text',
          order: 3,
          text: 'Lønnsomhetstall viser hvor effektivt selskapet tjener penger på sine ressurser:'
        },
        {
          id: '2-5-table-1',
          type: 'table',
          order: 4,
          headers: ['Nøkkeltall', 'Formel', 'Hva det viser'],
          rows: [
            ['Bruttomargin', 'Bruttofortjeneste / Inntekter', 'Lønnsomhet etter direkte kostnader'],
            ['Driftsmargin (EBIT-margin)', 'EBIT / Inntekter', 'Lønnsomhet fra selve driften'],
            ['Resultatmargin', 'Årsresultat / Inntekter', 'Hvor mye av hver salgskrone som blir overskudd'],
            ['ROE (Return on Equity)', 'Årsresultat / Egenkapital', 'Avkastning på eiernes investering'],
            ['ROA (Return on Assets)', 'EBIT / Eiendeler', 'Hvor effektivt selskapet utnytter sine eiendeler']
          ]
        },
        {
          id: '2-5-formula-1',
          type: 'formula',
          order: 5,
          formula: 'ROE = Årsresultat / Gjennomsnittlig egenkapital × 100%',
          description: 'Eksempel: Årsresultat 175 MNOK, gjennomsnittlig egenkapital 1000 MNOK. ROE = 17,5%. Dette betyr at eierne fikk 17,5% avkastning på sin investering.'
        },
        {
          id: '2-5-heading-2',
          type: 'heading',
          order: 6,
          level: 2,
          text: 'Likviditetsnøkkeltall'
        },
        {
          id: '2-5-text-3',
          type: 'text',
          order: 7,
          text: 'Likviditetstall viser selskapets evne til å betale kortsiktige forpliktelser:'
        },
        {
          id: '2-5-table-2',
          type: 'table',
          order: 8,
          headers: ['Nøkkeltall', 'Formel', 'Tommelfingerregel'],
          rows: [
            ['Likviditetsgrad 1', 'Omløpsmidler / Kortsiktig gjeld', '> 2 er bra, < 1 er risikabelt'],
            ['Likviditetsgrad 2 (Acid test)', '(Omløpsmidler - Varelager) / Kortsiktig gjeld', '> 1 betyr god kortsiktig betalingsevne'],
            ['Kontantgrad', 'Kontanter / Kortsiktig gjeld', 'Viser umiddelbar betalingsevne']
          ]
        },
        {
          id: '2-5-heading-3',
          type: 'heading',
          order: 9,
          level: 2,
          text: 'Soliditetsnøkkeltall'
        },
        {
          id: '2-5-text-4',
          type: 'text',
          order: 10,
          text: 'Soliditetstall viser selskapets langsiktige finansielle styrke:'
        },
        {
          id: '2-5-table-3',
          type: 'table',
          order: 11,
          headers: ['Nøkkeltall', 'Formel', 'Tolkning'],
          rows: [
            ['Egenkapitalandel', 'Egenkapital / Eiendeler', 'Jo høyere, jo mer solid. > 30% er ofte ønskelig'],
            ['Gjeldsgrad', 'Gjeld / Egenkapital', 'Lavere er sikrere. < 2 er ofte greit'],
            ['Rentedekningsgrad', 'EBIT / Rentekostnader', '> 3 betyr god evne til å betjene gjeld']
          ]
        },
        {
          id: '2-5-heading-4',
          type: 'heading',
          order: 12,
          level: 2,
          text: 'DuPont-analyse'
        },
        {
          id: '2-5-text-5',
          type: 'text',
          order: 13,
          text: 'DuPont-modellen bryter ned ROE i tre komponenter for å forstå hva som driver avkastningen:'
        },
        {
          id: '2-5-formula-2',
          type: 'formula',
          order: 14,
          formula: 'ROE = Resultatmargin × Kapitalomløp × Finansiell gearing',
          description: 'ROE = (Resultat/Inntekter) × (Inntekter/Eiendeler) × (Eiendeler/Egenkapital)\n\nDette viser tre veier til høy ROE:\n1. Høyere marginer (premium priser, lavere kostnader)\n2. Raskere kapitalomløp (selge mer per investert krone)\n3. Høyere gearing (bruke mer gjeld) – men dette øker risikoen'
        },
        {
          id: '2-5-example-1',
          type: 'example',
          order: 15,
          title: 'Sammenligne to selskaper',
          content: '**Luksusvareselskap (LVMH-type):**\n• Resultatmargin: 20%\n• Kapitalomløp: 0,8\n• Gearing: 1,5\n• ROE = 20% × 0,8 × 1,5 = 24%\n\n**Dagligvarekjede (REMA-type):**\n• Resultatmargin: 3%\n• Kapitalomløp: 4,0\n• Gearing: 2,0\n• ROE = 3% × 4,0 × 2,0 = 24%\n\nBegge har 24% ROE, men på helt forskjellige måter! LVMH tjener på høye marginer, dagligvare på høyt volum og effektiv kapitalbruk.'
        },
        {
          id: '2-5-heading-5',
          type: 'heading',
          order: 16,
          level: 2,
          text: 'Fallgruver i nøkkeltallsanalyse'
        },
        {
          id: '2-5-list-1',
          type: 'list',
          order: 17,
          ordered: false,
          items: [
            'Sammenlign like med like: Ulike bransjer har ulike "normale" nøkkeltall',
            'Se på trender: Ett års tall kan være misvisende – se på utviklingen',
            'Sjekk kvaliteten: Høy ROE fra høy gearing er risikabelt',
            'Vær skeptisk til engangseffekter: Salgsgevinster, nedskrivninger etc. forvrenger bildet'
          ]
        },
        {
          id: '2-5-keypoint-1',
          type: 'keypoint',
          order: 18,
          points: [
            'Nøkkeltall setter regnskapstall i sammenheng og muliggjør sammenligninger',
            'Lønnsomhet (ROE, marginer), likviditet og soliditet gir et helhetsbilde',
            'DuPont-analysen viser hva som driver avkastningen',
            'Sammenlign alltid med bransjen og over tid'
          ]
        },
        {
          id: '2-5-quiz-1',
          type: 'quiz',
          order: 19,
          question: 'Hva viser egenkapitalandelen?',
          options: [
            'Hvor lønnsomt selskapet er',
            'Hvor stor del av eiendelene som er finansiert med egenkapital',
            'Hvor mye utbytte aksjonærene får',
            'Hvor raskt selskapet kan betale kortsiktig gjeld'
          ],
          correctAnswer: 1,
          explanation: 'Egenkapitalandel = Egenkapital / Eiendeler. Det viser hvor stor andel av selskapets eiendeler som er finansiert av eierne vs. gjeld. Høyere andel = mer solid.'
        },
        {
          id: '2-5-quiz-2',
          type: 'quiz',
          order: 20,
          question: 'I DuPont-modellen, hvilke tre faktorer bestemmer ROE?',
          options: [
            'Inntekter, kostnader, skatt',
            'Resultatmargin, kapitalomløp, finansiell gearing',
            'Egenkapital, gjeld, eiendeler',
            'Bruttomargin, driftsmargin, netto margin'
          ],
          correctAnswer: 1,
          explanation: 'DuPont bryter ned ROE i: Resultatmargin (lønnsomhet per salg) × Kapitalomløp (effektivitet) × Finansiell gearing (bruk av gjeld).'
        },
        {
          id: '2-5-exercise-1',
          type: 'exercise',
          order: 21,
          title: 'Oppgave: Komplett regnskapsanalyse',
          description: 'Et selskap har følgende tall:\n\nResultatregnskap:\n• Inntekter: 800\n• EBIT: 80\n• Årsresultat: 48\n\nBalanse:\n• Eiendeler: 600\n• Herav omløpsmidler: 200\n• Egenkapital: 240\n• Kortsiktig gjeld: 100\n• Rentekostnader: 20\n\n1. Beregn driftsmargin, resultatmargin og ROE.\n2. Beregn likviditetsgrad 1 og egenkapitalandel.\n3. Beregn rentedekningsgrad.\n4. Gjør en DuPont-analyse.\n5. Er dette et godt selskap å investere i? Begrunn.',
          hint: 'Bruk formlene fra tabellene. For DuPont trenger du Resultatmargin × (Inntekter/Eiendeler) × (Eiendeler/EK).'
        },
        {
          id: '2-5-reflection-1',
          type: 'reflection',
          order: 22,
          question: 'Nå har du lært å lese og analysere regnskap. Hvordan vil denne kunnskapen hjelpe deg som investor eller i en fremtidig jobb? Hva er det viktigste du tar med deg fra denne modulen?'
        }
      ]
    }
  ],
  moduleQuiz: {
    id: 'modul-2-regnskap-quiz',
    title: 'Modulquiz: Grunnleggende Regnskap',
    description: 'Test din forståelse av resultatregnskap, balanse, kontantstrøm og nøkkeltall. Du trenger minst 90% riktig for å bestå.',
    passingScore: 90,
    questions: [
      {
        id: 'q2-1',
        question: 'Hva er den grunnleggende regnskapsligningen?',
        options: [
          'Inntekter - Kostnader = Resultat',
          'Eiendeler = Gjeld + Egenkapital',
          'Kontantstrøm = Innbetalinger - Utbetalinger',
          'Omsetning × Margin = Fortjeneste'
        ],
        correctAnswer: 1,
        explanation: 'Regnskapsligningen Eiendeler = Gjeld + Egenkapital er regnskapets grunnlov. Eiendelene viser hva selskapet har, mens høyresiden viser hvordan det er finansiert.'
      },
      {
        id: 'q2-2',
        question: 'Hvilken oppstilling viser om selskapet tjener penger over en periode?',
        options: [
          'Balansen',
          'Kontantstrømoppstillingen',
          'Resultatregnskapet',
          'Noter til regnskapet'
        ],
        correctAnswer: 2,
        explanation: 'Resultatregnskapet viser inntekter minus kostnader og dermed selskapets resultat (overskudd eller underskudd) over en periode.'
      },
      {
        id: 'q2-3',
        question: 'Hva er forskjellen mellom EBIT og EBITDA?',
        options: [
          'EBIT inkluderer skatt, EBITDA gjør ikke',
          'EBITDA trekker fra avskrivninger, EBIT gjør ikke',
          'EBIT trekker fra avskrivninger, EBITDA gjør ikke',
          'Det er ingen forskjell, begrepene brukes om hverandre'
        ],
        correctAnswer: 2,
        explanation: 'EBIT = Driftsresultat (resultat før renter og skatt). EBITDA = EBIT + avskrivninger. EBITDA er nyttig for å sammenligne selskaper med ulik kapitalintensitet.'
      },
      {
        id: 'q2-4',
        question: 'Hvorfor kan et selskap med overskudd likevel gå konkurs?',
        options: [
          'Fordi overskuddet er for lite',
          'Fordi inntektene er bokført før pengene er mottatt',
          'Fordi eierne tar ut for mye utbytte',
          'Det kan ikke skje - overskudd betyr alltid god likviditet'
        ],
        correctAnswer: 1,
        explanation: 'Resultatregnskapet følger periodiseringsprinsippet der inntekter bokføres når de opptjenes, ikke når pengene mottas. Et selskap kan ha stort overskudd men mangle kontanter hvis kundene ikke har betalt.'
      },
      {
        id: 'q2-5',
        question: 'Hva viser balansens eiendelsside?',
        options: [
          'Hvordan selskapet er finansiert',
          'Selskapets inntekter og kostnader',
          'Hva selskapet eier og har tilgode',
          'Selskapets kontantbeholdning alene'
        ],
        correctAnswer: 2,
        explanation: 'Eiendelssiden (aktivasiden) viser hva selskapet eier og har tilgode, fordelt på anleggsmidler og omløpsmidler.'
      },
      {
        id: 'q2-6',
        question: 'Hva er forskjellen mellom anleggsmidler og omløpsmidler?',
        options: [
          'Anleggsmidler er mer verdifulle enn omløpsmidler',
          'Omløpsmidler skal brukes eller selges innen ett år, anleggsmidler er langsiktige',
          'Anleggsmidler kan avskrives, omløpsmidler kan ikke',
          'Omløpsmidler er fysiske, anleggsmidler er immaterielle'
        ],
        correctAnswer: 1,
        explanation: 'Omløpsmidler (varelager, kundefordringer, kontanter) skal omsettes innen ett år. Anleggsmidler (maskiner, bygninger, goodwill) brukes over lengre tid.'
      },
      {
        id: 'q2-7',
        question: 'Hvilke tre hovedkategorier deles kontantstrømmen inn i?',
        options: [
          'Inntekter, kostnader og resultat',
          'Kort, mellomlang og lang sikt',
          'Drift, investering og finansiering',
          'Eiendeler, gjeld og egenkapital'
        ],
        correctAnswer: 2,
        explanation: 'Kontantstrømmen deles inn i operasjonell (drift), investerings- og finansieringsaktiviteter for å vise hvor pengene kommer fra og går.'
      },
      {
        id: 'q2-8',
        question: 'Et selskap med høy ROE. Hva er en mulig ulempe?',
        options: [
          'Selskapet investerer for mye',
          'Det kan skyldes høy gjeldsgrad som gir finansiell risiko',
          'Det betyr alltid at selskapet er undervurdert',
          'Høy ROE har ingen ulemper'
        ],
        correctAnswer: 1,
        explanation: 'ROE kan være høy fordi selskapet har mye gjeld (finansiell gearing). Dette gir høy avkastning på egenkapitalen, men også høyere finansiell risiko.'
      },
      {
        id: 'q2-9',
        question: 'Hva måler likviditetsgrad 1?',
        options: [
          'Selskapets langsiktige betalingsevne',
          'Hvor mye kontanter selskapet har',
          'Evnen til å betale kortsiktig gjeld med omløpsmidler',
          'Forholdet mellom gjeld og egenkapital'
        ],
        correctAnswer: 2,
        explanation: 'Likviditetsgrad 1 = Omløpsmidler / Kortsiktig gjeld. Den måler om selskapet kan betale gjeld som forfaller innen ett år.'
      },
      {
        id: 'q2-10',
        question: 'Hva er gjeldsgrad, og hva viser den?',
        options: [
          'Gjeld/Eiendeler - hvor stor andel av eiendelene som er lånefinansiert',
          'Gjeld/Egenkapital - hvor mye gjeld selskapet har per krone egenkapital',
          'Egenkapital/Gjeld - selskapets finansielle styrke',
          'Rentekostnader/Gjeld - kostnaden ved lån'
        ],
        correctAnswer: 1,
        explanation: 'Gjeldsgrad = Gjeld/Egenkapital viser hvor mye gjeld selskapet har sammenlignet med egenkapital. Høy gjeldsgrad = høy finansiell risiko, men også potensielt høyere avkastning.'
      },
      {
        id: 'q2-11',
        question: 'Hva er formålet med DuPont-analysen?',
        options: [
          'Å beregne selskapets skattekostnad',
          'Å bryte ned ROE i drivere: margin, omløp og gearing',
          'Å sammenligne selskaper i ulike bransjer',
          'Å beregne kontantstrøm fra drift'
        ],
        correctAnswer: 1,
        explanation: 'DuPont-analysen bryter ned ROE i tre komponenter: Resultatmargin × Kapitalomløp × Finansiell gearing. Dette viser HVA som driver avkastningen.'
      },
      {
        id: 'q2-12',
        question: 'Hva er rentedekningsgrad, og hva er en god tommelfingerregel?',
        options: [
          'EBIT/Rentekostnader - bør være over 3',
          'Rentekostnader/EBIT - bør være under 30%',
          'Gjeld/Rentekostnader - bør være under 10',
          'Årsresultat/Rentekostnader - bør være over 1'
        ],
        correctAnswer: 0,
        explanation: 'Rentedekningsgrad = EBIT/Rentekostnader måler hvor mange ganger selskapet kan betale sine rentekostnader med driftsresultatet. Over 3 anses som trygt.'
      }
    ]
  }
};
