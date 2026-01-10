import { Module } from '../types/course';

export const modul6BaerekraftModule: Module = {
  id: 'modul-10-baerekraft',
  title: 'Bærekraftig Finans i Praksis',
  icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"></path><path d="M10 20c5.5-2.5.8-6.4 3-10"></path><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path></svg>',
  order: 10,
  learningObjectives: [
    'Forstå det grønne skiftet og hvordan det påvirker finansmarkedene',
    'Kjenne til EU-taksonomien og regulatoriske rammeverk for bærekraftig finans',
    'Kunne gjennomføre grunnleggende ESG-analyse av selskaper',
    'Identifisere grønnvasking og kritisk vurdere bærekraftspåstander',
    'Forstå din egen rolle som investor i den bærekraftige omstillingen'
  ],
  sections: [
    // SEKSJON 6.1: Det grønne skiftet i finansverdenen
    {
      id: 'seksjon-6-1-gronne-skiftet',
      title: 'Det grønne skiftet i finansverdenen',
      order: 1,
      content: [
        {
          id: '6-1-intro',
          type: 'text',
          order: 1,
          text: 'I november 2019 kunngjorde Den europeiske investeringsbanken (EIB) at de ville slutte å finansiere fossile brensler fra 2022. En av verdens største utviklingsbanker snudde ryggen til olje og gass. Dette var ikke idealisme – det var risikovurdering. Bærekraftig finans har gått fra nisje til mainstream.',
          emphasis: 'important'
        },
        {
          id: '6-1-podcast',
          type: 'audio',
          order: 2,
          title: 'Podcast: Risiko og avkastning',
          duration: '20 min',
          url: '/riskreturn.m4a',
          description: 'Lytt til denne podcasten for en grundig innføring i sammenhengen mellom risiko og avkastning i bærekraftig finans.'
        },
        {
          id: '6-1-heading-1',
          type: 'heading',
          order: 3,
          level: 2,
          text: 'Hva er bærekraftig finans?'
        },
        {
          id: '6-1-def-1',
          type: 'definition',
          order: 4,
          term: 'Bærekraftig finans',
          definition: 'Finansielle beslutninger som integrerer miljømessige (E), sosiale (S) og styringsrelaterte (G) faktorer – ESG – for å oppnå både finansiell avkastning og positive samfunnseffekter.'
        },
        {
          id: '6-1-text-2',
          type: 'text',
          order: 5,
          text: 'Bærekraftig finans handler ikke bare om å "gjøre godt" – det handler om å forstå at ESG-faktorer representerer reelle finansielle risikoer og muligheter som påvirker langsiktig verdiskaping.'
        },
        {
          id: '6-1-heading-2',
          type: 'heading',
          order: 6,
          level: 2,
          text: 'Hvorfor skjer dette nå?'
        },
        {
          id: '6-1-list-1',
          type: 'list',
          order: 7,
          ordered: true,
          items: [
            'Klimarisiko er finansiell risiko: Ekstremvær, regulatoriske endringer og teknologiskift truer tradisjonelle forretningsmodeller',
            'Investorkrav: Store institusjonelle investorer krever ESG-integrering og transparens',
            'Regulatorisk press: EU og andre myndigheter innfører krav om bærekraftsrapportering',
            'Demografisk skifte: Yngre investorer prioriterer bærekraft høyere',
            'Datarevolusjon: Bedre ESG-data gjør det mulig å måle og sammenligne selskaper'
          ]
        },
        {
          id: '6-1-heading-3',
          type: 'heading',
          order: 8,
          level: 2,
          text: 'De tre pilarene: E, S og G'
        },
        {
          id: '6-1-table-1',
          type: 'table',
          order: 9,
          headers: ['Pilar', 'Fokusområder', 'Eksempler på risiko'],
          rows: [
            ['Environmental (E)', 'Klimagassutslipp, ressursbruk, biologisk mangfold, avfall', 'Karbonprising, stranded assets, naturkatastrofer'],
            ['Social (S)', 'Arbeidstakerrettigheter, helse og sikkerhet, lokalsamfunn, mangfold', 'Streiker, omdømmetap, boikotter, søksmål'],
            ['Governance (G)', 'Styresammensetning, lederlønninger, korrupsjon, aksjonærrettigheter', 'Skandaler, svindel, mistillit, dårlig kapitalallokering']
          ]
        },
        {
          id: '6-1-example-1',
          type: 'example',
          order: 10,
          title: 'Case: Equinors klimastrategi',
          content: 'Equinor har satt mål om å redusere netto karbonintensitet med 50% innen 2050. Selskapet investerer tungt i offshore vind (Hywind, Dogger Bank) og har satt av 50 milliarder kroner til fornybar energi. Denne strategien er en direkte respons på investorpress og klimarisiko – oljeselskaper uten troverdig omstillingsplan risikerer lavere verdsettelse og høyere kapitalkostnader.'
        },
        {
          id: '6-1-heading-4',
          type: 'heading',
          order: 11,
          level: 2,
          text: 'Veksten i bærekraftige investeringer'
        },
        {
          id: '6-1-text-3',
          type: 'text',
          order: 12,
          text: 'Globalt forvaltes nå over 35 000 milliarder dollar etter ESG-prinsipper. I Norge har bærekraftige fond sett kraftig vekst, og Statens pensjonsfond utland (Oljefondet) har blitt en global leder innen ansvarlig forvaltning.'
        },
        {
          id: '6-1-keypoint-1',
          type: 'keypoint',
          order: 13,
          points: [
            'Bærekraftig finans er ikke bare etikk – det er risikostyring',
            'ESG-faktorer representerer reelle finansielle risikoer',
            'Selskaper som ignorerer ESG eksponerer seg for regulatorisk-, omdømme- og overgangsrisiko'
          ]
        },
        {
          id: '6-1-heading-5',
          type: 'heading',
          order: 14,
          level: 2,
          text: 'Oljefondet som ESG-leder'
        },
        {
          id: '6-1-text-4',
          type: 'text',
          order: 15,
          text: 'Statens pensjonsfond utland (Oljefondet) forvalter over 17 000 milliarder kroner og eier i snitt 1,5% av alle børsnoterte selskaper globalt.'
        },
        {
          id: '6-1-list-2',
          type: 'list',
          order: 16,
          ordered: false,
          items: [
            'Ekskludert selskaper som bryter etiske retningslinjer (våpen, tobakk, kullkraft)',
            'Stemt mot dårlig selskapsstyring på tusenvis av generalforsamlinger',
            'Publisert forventningsdokumenter om klima, vannforvaltning og menneskerettigheter',
            'Solgt seg ut av over 300 selskaper av ESG-hensyn siden 2015'
          ]
        },
        {
          id: '6-1-quiz-1',
          type: 'quiz',
          order: 17,
          question: 'Hva står ESG for?',
          options: [
            'Earnings, Sales, Growth',
            'Environmental, Social, Governance',
            'Ethical Stock Guidelines',
            'European Sustainability Goals'
          ],
          correctAnswer: 1,
          explanation: 'ESG står for Environmental (miljø), Social (sosiale forhold), og Governance (selskapsstyring). Dette er de tre hovedkategoriene for bærekraftsvurdering av selskaper.'
        },
        {
          id: '6-1-quiz-2',
          type: 'quiz',
          order: 18,
          question: 'Hvorfor sluttet Den europeiske investeringsbanken å finansiere fossile brensler?',
          options: [
            'De ble pålagt av EU-kommisjonen',
            'Det var basert på risikovurdering og klimahensyn',
            'De gikk tom for penger til fossil finansiering',
            'Aksjonærene stemte for endringen'
          ],
          correctAnswer: 1,
          explanation: 'EIBs beslutning var primært basert på risikovurdering – de erkjente at klimarisiko er finansiell risiko, og at fossile investeringer innebar for høy langsiktig risiko.'
        },
        {
          id: '6-1-exercise-1',
          type: 'exercise',
          order: 19,
          title: 'Oppgave: ESG-pilarene',
          description: '1. Et selskap har høye CO2-utslipp, men god selskapsstyring og gode arbeidsforhold. Hvilken ESG-pilar scorer de svakt på? Forklar hvorfor dette kan være en finansiell risiko.\n\n2. Forklar med egne ord hva "stranded assets" betyr og gi et eksempel på hvordan dette kan påvirke et oljeselskaps verdsettelse.\n\n3. Oljefondet har ekskludert selskaper som produserer kull. Diskuter fordeler og ulemper med eksklusjon versus aktivt eierskap som ESG-strategi.',
          hint: 'Tenk på hvordan regulatoriske endringer kan påvirke verdien av fossile eiendeler.'
        },
        {
          id: '6-1-reflection-1',
          type: 'reflection',
          order: 20,
          question: 'Tenk på et selskap du kjenner til eller handler hos. Hvilke ESG-risikoer tror du dette selskapet står overfor? Hvordan kan disse risikoene påvirke selskapets fremtidige lønnsomhet og aksjekurs?'
        }
      ]
    },

    // SEKSJON 6.2: EU-taksonomien og nye standarder
    {
      id: 'seksjon-6-2-eu-taksonomi',
      title: 'EU-taksonomien og nye standarder',
      order: 2,
      content: [
        {
          id: '6-2-intro',
          type: 'text',
          order: 1,
          text: 'Hva er egentlig "grønt"? Er kjernekraft grønn energi? Er naturgass en overgangsløsning eller fossil forurensning? Uten felles definisjoner blir bærekraftspåstander meningsløse. EU-taksonomien er et forsøk på å skape et felles språk for bærekraftig finans.',
          emphasis: 'important'
        },
        {
          id: '6-2-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Hva er EU-taksonomien?'
        },
        {
          id: '6-2-def-1',
          type: 'definition',
          order: 3,
          term: 'EU-taksonomien',
          definition: 'Et klassifiseringssystem som definerer hvilke økonomiske aktiviteter som kan regnes som miljømessig bærekraftige. Vedtatt i 2020 og gradvis implementert fra 2022.'
        },
        {
          id: '6-2-text-2',
          type: 'text',
          order: 4,
          text: 'Taksonomien er EUs viktigste verktøy for å bekjempe grønnvasking og kanalisere kapital mot virkelig bærekraftige prosjekter. Den stiller konkrete, tekniske krav til hva som kan kalles "grønt".'
        },
        {
          id: '6-2-heading-2',
          type: 'heading',
          order: 5,
          level: 2,
          text: 'De seks miljømålene'
        },
        {
          id: '6-2-text-3',
          type: 'text',
          order: 6,
          text: 'For å kvalifisere som bærekraftig under taksonomien, må en aktivitet bidra vesentlig til minst ett av disse målene:'
        },
        {
          id: '6-2-list-1',
          type: 'list',
          order: 7,
          ordered: true,
          items: [
            'Begrensning av klimaendringer (redusere utslipp)',
            'Klimatilpasning (tilpasse seg klimaendringer)',
            'Bærekraftig bruk og beskyttelse av vann- og havressurser',
            'Omstilling til sirkulærøkonomi (redusere avfall, øke gjenbruk)',
            'Forebygging og bekjempelse av forurensning',
            'Beskyttelse og gjenopprettelse av biologisk mangfold og økosystemer'
          ]
        },
        {
          id: '6-2-heading-3',
          type: 'heading',
          order: 8,
          level: 2,
          text: 'DNSH-prinsippet'
        },
        {
          id: '6-2-def-2',
          type: 'definition',
          order: 9,
          term: 'DNSH (Do No Significant Harm)',
          definition: 'Prinsippet om at en aktivitet ikke kan regnes som bærekraftig hvis den gjør vesentlig skade på noen av de andre miljømålene, selv om den bidrar positivt til ett mål.'
        },
        {
          id: '6-2-example-1',
          type: 'example',
          order: 10,
          title: 'DNSH i praksis',
          content: 'Et vannkraftverk kan bidra til klimamålet (fornybar energi), men hvis det ødelegger viktige fiskehabitat, oppfyller det ikke DNSH-kravet for biologisk mangfold. Aktiviteten ville da ikke kvalifisere som bærekraftig under taksonomien.'
        },
        {
          id: '6-2-heading-4',
          type: 'heading',
          order: 11,
          level: 2,
          text: 'Rapporteringskrav under SFDR og CSRD'
        },
        {
          id: '6-2-table-1',
          type: 'table',
          order: 12,
          headers: ['Regulering', 'Hvem', 'Hva må rapporteres'],
          rows: [
            ['SFDR', 'Fondsforvaltere og finansrådgivere', 'ESG-risiko i produkter, andel bærekraftige investeringer, artikkel 6/8/9-klassifisering'],
            ['CSRD', 'Store selskaper og børsnoterte selskaper', 'Detaljert bærekraftsrapportering etter ESRS-standarder, inkludert klimamål og ESG-KPIer'],
            ['EU-taksonomien', 'Store selskaper', 'Andel av omsetning, CapEx og OpEx som er taksonomi-alignet']
          ]
        },
        {
          id: '6-2-heading-5',
          type: 'heading',
          order: 13,
          level: 2,
          text: 'Artikkel 6, 8 og 9-fond'
        },
        {
          id: '6-2-text-4',
          type: 'text',
          order: 14,
          text: 'Under SFDR klassifiseres investeringsprodukter i tre kategorier:'
        },
        {
          id: '6-2-list-2',
          type: 'list',
          order: 15,
          ordered: false,
          items: [
            'Artikkel 6-fond: Ingen spesifikke bærekraftsmål, men må opplyse om ESG-risiko',
            'Artikkel 8-fond ("lysegrønne"): Fremmer miljømessige eller sosiale egenskaper',
            'Artikkel 9-fond ("mørkegrønne"): Har bærekraftig investering som hovedmål'
          ]
        },
        {
          id: '6-2-keypoint-1',
          type: 'keypoint',
          order: 16,
          points: [
            'EU-taksonomien skaper et felles språk for bærekraft',
            'Den er kontroversiell – inkluderingen av kjernekraft og gass viser politiske kompromisser',
            'DNSH-prinsippet sikrer at grønne aktiviteter ikke gjør skade på andre områder'
          ]
        },
        {
          id: '6-2-heading-6',
          type: 'heading',
          order: 17,
          level: 2,
          text: 'Konsekvenser for norske selskaper'
        },
        {
          id: '6-2-text-5',
          type: 'text',
          order: 18,
          text: 'Selv om Norge ikke er EU-medlem, får reguleringene stor betydning gjennom EØS-avtalen. Norske børsnoterte selskaper må:'
        },
        {
          id: '6-2-list-3',
          type: 'list',
          order: 19,
          ordered: false,
          items: [
            'Rapportere taksonomi-alignment for omsetning, investeringer og driftskostnader',
            'Følge CSRD-kravene fra regnskapsåret 2024 (store selskaper)',
            'Tilpasse seg investorkrav som bygger på EU-rammeverket',
            'Konkurrere om grønn kapital som styres av taksonomien'
          ]
        },
        {
          id: '6-2-example-2',
          type: 'example',
          order: 20,
          title: 'Taksonomi-rapportering: Aker BP',
          content: 'Aker BP rapporterer at 0% av deres omsetning er taksonomi-alignet (olje og gass er ikke inkludert som bærekraftig aktivitet). Men selskapet rapporterer detaljert om klimarisiko og har satt ambisiøse mål for utslippskutt per produsert fat. Dette viser at taksonomi-compliance og klimastrategi er to forskjellige ting.'
        },
        {
          id: '6-2-quiz-1',
          type: 'quiz',
          order: 21,
          question: 'Hva står DNSH for i EU-taksonomien?',
          options: [
            'Do Not Stop Here',
            'Do No Significant Harm',
            'Develop New Sustainable Habits',
            'Direct National Sustainability Hierarchy'
          ],
          correctAnswer: 1,
          explanation: 'DNSH står for "Do No Significant Harm" – prinsippet om at en bærekraftig aktivitet ikke kan gjøre vesentlig skade på andre miljømål.'
        },
        {
          id: '6-2-quiz-2',
          type: 'quiz',
          order: 22,
          question: 'Hvilket fond har strengest bærekraftskrav under SFDR?',
          options: [
            'Artikkel 6-fond',
            'Artikkel 8-fond',
            'Artikkel 9-fond',
            'Alle har like strenge krav'
          ],
          correctAnswer: 2,
          explanation: 'Artikkel 9-fond (mørkegrønne) har strengest krav – de må ha bærekraftig investering som hovedmål, ikke bare fremme bærekraft som en egenskap.'
        },
        {
          id: '6-2-exercise-1',
          type: 'exercise',
          order: 23,
          title: 'Oppgave: EU-regulering',
          description: '1. Et fond investerer i fornybar energi, men også i våpenprodusenter. Kan dette fondet klassifiseres som Artikkel 9? Begrunn svaret.\n\n2. Forklar hvorfor DNSH-prinsippet er viktig for å unngå at "grønne" investeringer har negative bivirkninger.\n\n3. Kjernekraft er inkludert i EU-taksonomien som overgangsaktivitet. Diskuter argumentene for og mot denne beslutningen.',
          hint: 'Tenk på hva det betyr å ha bærekraft som "hovedmål" for et fond.'
        },
        {
          id: '6-2-reflection-1',
          type: 'reflection',
          order: 24,
          question: 'EU-taksonomien forsøker å definere hva som er "grønt" gjennom detaljerte tekniske kriterier. Tror du dette er den beste tilnærmingen, eller finnes det bedre måter å fremme bærekraftige investeringer?'
        }
      ]
    },

    // SEKSJON 6.3: ESG-analyse i praksis
    {
      id: 'seksjon-6-3-esg-analyse',
      title: 'ESG-analyse i praksis',
      order: 3,
      content: [
        {
          id: '6-3-intro',
          type: 'text',
          order: 1,
          text: 'Du vurderer å investere i et selskap. Regnskapet ser bra ut, men hva med klimarisikoen? Arbeidsforholdene i leverandørkjeden? Styrets uavhengighet? ESG-analyse gir deg verktøyene til å vurdere disse faktorene systematisk.',
          emphasis: 'important'
        },
        {
          id: '6-3-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'ESG-rating: Hva måles?'
        },
        {
          id: '6-3-text-2',
          type: 'text',
          order: 3,
          text: 'ESG-ratingbyråer som MSCI, Sustainalytics og ISS analyserer tusenvis av selskaper og gir dem en samlet bærekraftsscore. Men metodene varierer betydelig.'
        },
        {
          id: '6-3-table-1',
          type: 'table',
          order: 4,
          headers: ['Ratingbyrå', 'Skala', 'Fokus'],
          rows: [
            ['MSCI ESG', 'AAA til CCC', 'Bransjerelevante ESG-risikoer og hvordan selskapet håndterer dem'],
            ['Sustainalytics', '0-100 (lavere er bedre)', 'Umanaged ESG risk - risiko som ikke er håndtert av selskapet'],
            ['ISS ESG', 'A+ til D-', 'Absolutt bærekraftsperformance sammenlignet med globale standarder'],
            ['Refinitiv', '0-100 (høyere er bedre)', 'Kombinasjon av ESG-performance og kontrovers-screening']
          ]
        },
        {
          id: '6-3-heading-2',
          type: 'heading',
          order: 5,
          level: 2,
          text: 'Problemet med ESG-ratings'
        },
        {
          id: '6-3-text-3',
          type: 'text',
          order: 6,
          text: 'En studie fra MIT viste at korrelasjonen mellom ESG-ratings fra ulike byråer bare er 0,61. Til sammenligning er korrelasjonen mellom kredittvurderinger fra Moodys og S&P over 0,99.'
        },
        {
          id: '6-3-keypoint-1',
          type: 'keypoint',
          order: 7,
          points: [
            'ESG-ratings måler forskjellige ting og bruker ulike metoder',
            'Ett selskap kan få toppkarakter hos ett byrå og middels hos et annet',
            'Som investor må du forstå hva ratingen faktisk måler'
          ]
        },
        {
          id: '6-3-heading-3',
          type: 'heading',
          order: 8,
          level: 2,
          text: 'Gjør din egen ESG-analyse'
        },
        {
          id: '6-3-text-4',
          type: 'text',
          order: 9,
          text: 'I stedet for å stole blindt på ratings, kan du gjøre din egen vurdering. Her er et rammeverk:'
        },
        {
          id: '6-3-heading-4',
          type: 'heading',
          order: 10,
          level: 3,
          text: 'Steg 1: Identifiser materielle ESG-faktorer'
        },
        {
          id: '6-3-text-5',
          type: 'text',
          order: 11,
          text: 'Hvilke ESG-faktorer er mest relevante for bransjen? For et oljeselskap er klimarisiko kritisk. For en tech-bedrift er datasikkerhet og personvern viktigere.'
        },
        {
          id: '6-3-heading-5',
          type: 'heading',
          order: 12,
          level: 3,
          text: 'Steg 2: Samle data'
        },
        {
          id: '6-3-list-1',
          type: 'list',
          order: 13,
          ordered: false,
          items: [
            'Bærekraftsrapporter (se etter GRI- eller SASB-standarder)',
            'CDP-rapportering (klimadata)',
            'Proxy statements (lederlønninger, styresammensetning)',
            'Kontroversscreening (nyheter, NGO-rapporter, søksmål)',
            'Science Based Targets initiative (klimamål)'
          ]
        },
        {
          id: '6-3-heading-6',
          type: 'heading',
          order: 14,
          level: 3,
          text: 'Steg 3: Vurder håndtering'
        },
        {
          id: '6-3-text-6',
          type: 'text',
          order: 15,
          text: 'Det viktigste er ikke bare risikoen, men hvordan selskapet håndterer den. Har de konkrete mål? Handlingsplaner? Tredjepartsverifisering?'
        },
        {
          id: '6-3-example-1',
          type: 'example',
          order: 16,
          title: 'ESG-analyse: Yara International',
          content: 'Yara produserer gjødsel – en karbon-intensiv bransje. Men en grundig analyse viser: 1) De har konkrete mål om 30% utslippskutt innen 2030, 2) De investerer i grønn ammoniakk-produksjon, 3) Produktene deres bidrar til matsikkerhet, og 4) De har science-based targets. ESG-risikoen er høy, men håndteringen er god – noe som kan rettferdiggjøre investering.'
        },
        {
          id: '6-3-heading-7',
          type: 'heading',
          order: 17,
          level: 2,
          text: 'Materialitetsanalyse'
        },
        {
          id: '6-3-def-1',
          type: 'definition',
          order: 18,
          term: 'Materialitet',
          definition: 'Et ESG-tema er materielt hvis det har (eller sannsynligvis vil ha) betydelig påvirkning på selskapets finansielle resultater eller interessenters beslutninger.'
        },
        {
          id: '6-3-table-2',
          type: 'table',
          order: 19,
          headers: ['Bransje', 'Materielle E-faktorer', 'Materielle S-faktorer', 'Materielle G-faktorer'],
          rows: [
            ['Olje & Gass', 'Klimautslipp, oljeutslipp, biodiversitet', 'Arbeidssikkerhet, lokalsamfunn', 'Korrupsjonsrisiko, lobbyvirksomhet'],
            ['Teknologi', 'Energibruk datasentre, e-avfall', 'Personvern, datasikkerhet, mangfold', 'Antimonopol, innhold-moderering'],
            ['Bank', 'Finansiering av høy-karbon', 'Finansiell inkludering, kundebeskyttelse', 'Hvitvasking, styreuavhengighet'],
            ['Klesindustri', 'Vannforbruk, kjemikalier, avfall', 'Leverandørkjede, barnearbeid, lønn', 'Supply chain transparency']
          ]
        },
        {
          id: '6-3-quiz-1',
          type: 'quiz',
          order: 20,
          question: 'Hvorfor kan ESG-ratings fra forskjellige byråer gi ulike resultater for samme selskap?',
          options: [
            'Noen byråer er mer korrupte enn andre',
            'De bruker forskjellige metoder, vektinger og datakilder',
            'Selskapene rapporterer forskjellig til ulike byråer',
            'ESG-faktorer endrer seg så raskt at ingen kan følge med'
          ],
          correctAnswer: 1,
          explanation: 'ESG-ratingbyråer bruker forskjellige metoder, vekter E, S og G ulikt, og fokuserer på ulike aspekter. Dette gir naturlig variasjon i resultatene.'
        },
        {
          id: '6-3-quiz-2',
          type: 'quiz',
          order: 21,
          question: 'Hva menes med at en ESG-faktor er "materiell"?',
          options: [
            'At faktoren kan måles i fysiske enheter',
            'At faktoren har betydelig påvirkning på finansielle resultater',
            'At faktoren er synlig i årsrapporten',
            'At faktoren er regulert av myndighetene'
          ],
          correctAnswer: 1,
          explanation: 'Materialitet betyr at ESG-faktoren har (eller sannsynligvis vil ha) betydelig påvirkning på selskapets finansielle resultater eller interessenters beslutninger.'
        },
        {
          id: '6-3-exercise-1',
          type: 'exercise',
          order: 22,
          title: 'Oppgave: ESG-analyse',
          description: '1. Velg en norsk børsnotert bedrift og identifiser de tre mest materielle ESG-faktorene for denne bedriften. Begrunn valgene dine.\n\n2. Et teknologiselskap har høy score på E (lave utslipp), men lav score på S (dårlig personvern-praksis). Hvordan bør en investor vekte disse faktorene?\n\n3. Du finner ut at et selskap har A-rating hos MSCI, men "High Risk" hos Sustainalytics. Hvordan kan du forklare denne forskjellen?',
          hint: 'Tenk på hvilke faktorer som er mest relevante for den spesifikke bransjen.'
        },
        {
          id: '6-3-reflection-1',
          type: 'reflection',
          order: 23,
          question: 'Du oppdager at et selskap i din portefølje har gode finansielle resultater, men svak ESG-håndtering. Ville du solgt aksjen, beholdt den og engasjert deg som aktivist, eller ignorert ESG-faktoren?'
        }
      ]
    },

    // SEKSJON 6.4: Grønnvasking
    {
      id: 'seksjon-6-4-gronnvasking',
      title: 'Grønnvasking – hvordan avsløre det',
      order: 4,
      content: [
        {
          id: '6-4-intro',
          type: 'text',
          order: 1,
          text: 'I 2022 gjennomførte EU-kommisjonen en undersøkelse av 344 "grønne" påstander i markedsføring. Resultatet: 42% var villedende eller udokumenterte. Grønnvasking er ikke bare irriterende – det undergraver tilliten til hele bærekraftsagendaen.',
          emphasis: 'important'
        },
        {
          id: '6-4-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Hva er grønnvasking?'
        },
        {
          id: '6-4-def-1',
          type: 'definition',
          order: 3,
          term: 'Grønnvasking',
          definition: 'Praksisen med å gi et villedende inntrykk av at et produkt, selskap eller investering er mer miljøvennlig enn det faktisk er. Kan være bevisst manipulasjon eller resultat av upresist språk.'
        },
        {
          id: '6-4-heading-2',
          type: 'heading',
          order: 4,
          level: 2,
          text: 'De syv typene grønnvasking'
        },
        {
          id: '6-4-list-1',
          type: 'list',
          order: 5,
          ordered: true,
          items: [
            'Skjulte trade-offs: Fokuserer på én grønn egenskap mens man ignorerer større problemer',
            'Ingen bevis: Påstander som ikke kan dokumenteres eller verifiseres',
            'Vage påstander: Ord som "miljøvennlig", "naturlig", "grønn" uten konkret innhold',
            'Falsk merking: Selvlagde sertifiseringer eller misbruk av ekte merker',
            'Irrelevans: Fremhever egenskaper som er lovpålagte eller standard i bransjen',
            'Mindre av to onder: Fremstiller seg som "grønnere" enn konkurrenter i en skitten bransje',
            'Direkte løgn: Fabrikkerte data eller usanne påstander'
          ]
        },
        {
          id: '6-4-example-1',
          type: 'example',
          order: 6,
          title: 'Case: DWS og fondsgrønnvasking',
          content: 'I 2022 ble Deutsche Banks fondsselskap DWS gjenstand for razzia og etterforskning etter at en varsler hevdet at selskapet hadde overdrevet ESG-integreringen i sine fond. Tidligere markedsførte de 459 milliarder euro som "ESG-integrert" mens intern dokumentasjon viste at ESG-hensyn bare ble brukt sporadisk. Saken førte til CEOs avgang og illustrerer risikoen ved grønnvasking i finansbransjen.'
        },
        {
          id: '6-4-heading-3',
          type: 'heading',
          order: 7,
          level: 2,
          text: 'Røde flagg å se etter'
        },
        {
          id: '6-4-table-1',
          type: 'table',
          order: 8,
          headers: ['Advarselstegn', 'Hva du bør spørre om', 'Eksempel'],
          rows: [
            ['Vage formuleringer', 'Kan påstanden kvantifiseres?', '"Vi jobber for en bærekraftig fremtid"'],
            ['Selektiv rapportering', 'Hva rapporteres IKKE?', 'Rapporterer Scope 1 men ikke Scope 3'],
            ['Kjøp av CO2-kvoter', 'Kutter de faktiske utslipp?', '"Karbonnøytralt" kun gjennom kvotekjøp'],
            ['Grønne produkter, brun virksomhet', 'Hva er core business?', 'Oljeselskap som markedsfører fornybar som er <5% av porteføljen'],
            ['Fremtidsløfter uten plan', 'Finnes det en konkret roadmap?', '"Netto null innen 2050" uten mål for 2030']
          ]
        },
        {
          id: '6-4-heading-4',
          type: 'heading',
          order: 9,
          level: 2,
          text: 'Hvordan verifisere bærekraftspåstander'
        },
        {
          id: '6-4-list-2',
          type: 'list',
          order: 10,
          ordered: true,
          items: [
            'Sjekk datakilden: Er påstandene tredjepartsverifisert? Se etter revisorerklæringer',
            'Sammenlign med bransjen: Er selskapet faktisk bedre enn konkurrentene?',
            'Se på trender: Forbedrer selskapet seg over tid, eller stagnerer de?',
            'Les fotnoter: Mange "netto null"-løfter har unntak skjult i småskriften',
            'Sjekk NGO-rapporter: Organisasjoner som Climate Action 100+ følger opp klimapåstander'
          ]
        },
        {
          id: '6-4-keypoint-1',
          type: 'keypoint',
          order: 11,
          points: [
            'Den beste beskyttelsen mot grønnvasking er å spørre: "Kan denne påstanden verifiseres med konkrete tall?"',
            'Hvis svaret er nei, vær skeptisk',
            'Tredjepartsverifisering er gullstandarden'
          ]
        },
        {
          id: '6-4-heading-5',
          type: 'heading',
          order: 12,
          level: 2,
          text: 'Scope 1, 2 og 3: Hvorfor det betyr noe'
        },
        {
          id: '6-4-def-2',
          type: 'definition',
          order: 13,
          term: 'Scope 1, 2 og 3 utslipp',
          definition: 'Scope 1: Direkte utslipp fra egen virksomhet. Scope 2: Indirekte utslipp fra innkjøpt energi. Scope 3: Alle andre indirekte utslipp, inkludert leverandørkjede og produktbruk.'
        },
        {
          id: '6-4-text-2',
          type: 'text',
          order: 14,
          text: 'For mange selskaper utgjør Scope 3 over 90% av totale utslipp. Et oljeselskap som bare rapporterer Scope 1 og 2 skjuler at den største klimapåvirkningen kommer når kundene brenner oljen og gassen.'
        },
        {
          id: '6-4-quiz-1',
          type: 'quiz',
          order: 15,
          question: 'Et flyselskap markedsfører seg som "karbonnøytralt" fordi de kjøper CO2-kvoter, men har ikke kuttet utslipp. Hvilken type grønnvasking er dette?',
          options: [
            'Vage påstander',
            'Skjulte trade-offs',
            'Mindre av to onder',
            'Irrelevans'
          ],
          correctAnswer: 1,
          explanation: 'Dette er "skjulte trade-offs" – selskapet fokuserer på kvotekjøp mens de ignorerer det større problemet: at de fortsatt slipper ut like mye CO2.'
        },
        {
          id: '6-4-quiz-2',
          type: 'quiz',
          order: 16,
          question: 'Hvorfor er Scope 3-utslipp spesielt viktige å vurdere for oljeselskaper?',
          options: [
            'Fordi Scope 3 er enklest å måle',
            'Fordi Scope 3 (produktbruk) utgjør mesteparten av klimapåvirkningen',
            'Fordi Scope 3 er det eneste som er lovpålagt å rapportere',
            'Fordi Scope 3 ikke kan reduseres gjennom kvotekjøp'
          ],
          correctAnswer: 1,
          explanation: 'For olje- og gasselskaper utgjør Scope 3 (forbrenning av produktene) typisk over 90% av totale utslipp.'
        },
        {
          id: '6-4-exercise-1',
          type: 'exercise',
          order: 17,
          title: 'Oppgave: Avsløre grønnvasking',
          description: '1. Et selskap hevder å være "klimanøytralt" basert på kjøp av regnskog-kvoter. Liste opp minst tre kritiske spørsmål du ville stilt for å verifisere påstanden.\n\n2. Et fond markedsføres som "ESG-integrert" og har ekskludert tobakk, men har betydelige investeringer i kull. Er dette grønnvasking? Begrunn svaret.\n\n3. Sammenlign to klimamål: "Netto null innen 2050" vs. "50% kutt innen 2030 med årlig tredjepartsverifisering". Hvilken er mest troverdig?',
          hint: 'Tenk på hva som kan verifiseres og hva som bare er løfter.'
        },
        {
          id: '6-4-reflection-1',
          type: 'reflection',
          order: 18,
          question: 'Har du noen gang kjøpt et produkt eller investert i noe fordi det ble markedsført som "miljøvennlig"? I ettertid, tror du påstanden var troverdig?'
        }
      ]
    },

    // SEKSJON 6.5: Din rolle i den bærekraftige fremtiden
    {
      id: 'seksjon-6-5-din-rolle',
      title: 'Din rolle i den bærekraftige fremtiden',
      order: 5,
      content: [
        {
          id: '6-5-intro',
          type: 'text',
          order: 1,
          text: 'Som investor, forbruker og fremtidig yrkesutøver har du mer makt enn du kanskje tror. Hver krone du investerer er en stemme for hvordan du vil at økonomien skal fungere. Dette kapitlet handler om hvordan du kan bruke den stemmen bevisst.',
          emphasis: 'important'
        },
        {
          id: '6-5-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Fra passiv sparer til aktiv investor'
        },
        {
          id: '6-5-text-2',
          type: 'text',
          order: 3,
          text: 'De fleste nordmenn har sparepenger i fond gjennom pensjon, BSU eller vanlig sparing. Men få vet hvor pengene faktisk er investert. Første steg er bevissthet.'
        },
        {
          id: '6-5-list-1',
          type: 'list',
          order: 4,
          ordered: true,
          items: [
            'Finn ut hva du eier: Sjekk beholdningene i dine fond',
            'Vurder ESG-profilen: Bruker fondene ESG-integrering? Hvilken SFDR-klassifisering har de?',
            'Ta et aktivt valg: Vurder å bytte til fond med tydelig bærekraftsprofil',
            'Følg med: Sjekk årlig hvordan fondene dine presterer på bærekraft'
          ]
        },
        {
          id: '6-5-heading-2',
          type: 'heading',
          order: 5,
          level: 2,
          text: 'Aktivt eierskap vs. eksklusjon'
        },
        {
          id: '6-5-table-1',
          type: 'table',
          order: 6,
          headers: ['Strategi', 'Beskrivelse', 'Fordeler', 'Ulemper'],
          rows: [
            ['Eksklusjon', 'Unngå investeringer i visse sektorer', 'Tydelig, enkelt å kommunisere', 'Gir opp påvirkningsmulighet'],
            ['ESG-integrering', 'Inkludere ESG i investeringsanalysen', 'Bedre risikostyring', 'Kan være vagt'],
            ['Aktivt eierskap', 'Påvirke gjennom stemmegivning og dialog', 'Direkte påvirkning', 'Tidkrevende'],
            ['Impact investing', 'Investere for målbar positiv effekt', 'Tydelig positiv virkning', 'Færre muligheter']
          ]
        },
        {
          id: '6-5-example-1',
          type: 'example',
          order: 7,
          title: 'Engine No. 1 vs. Exxon',
          content: 'I 2021 klarte det lille hedgefondet Engine No. 1 (med kun 0,02% av aksjene) å få inn tre klimafokuserte styremedlemmer i ExxonMobil – et av verdens største oljeselskaper. De mobiliserte store institusjonelle investorer som var frustrert over selskapets klimastrategi. Dette viser at aktivt eierskap kan fungere, selv for små investorer som samarbeider.'
        },
        {
          id: '6-5-heading-3',
          type: 'heading',
          order: 8,
          level: 2,
          text: 'Praktiske verktøy for deg'
        },
        {
          id: '6-5-list-2',
          type: 'list',
          order: 9,
          ordered: false,
          items: [
            'Fossilfritt Norge (fossilfritt.no): Database over fossile investeringer i norske fond',
            'Morningstar Sustainability Rating: ESG-rating for fond',
            'As You Sow (asyousow.org): Sjekk hva pensjonsfond investerer i',
            'ShareAction: NGO som koordinerer investor-aktivisme på ESG',
            'CDP (cdp.net): Åpen database med klimadata'
          ]
        },
        {
          id: '6-5-heading-4',
          type: 'heading',
          order: 10,
          level: 2,
          text: 'Bærekraft i din karriere'
        },
        {
          id: '6-5-text-3',
          type: 'text',
          order: 11,
          text: 'Uansett hvilken karriere du velger, vil bærekraft bli relevant. Finans, regnskap, jus, ingeniørfag, IT – alle sektorer transformeres av klimaomstillingen.'
        },
        {
          id: '6-5-keypoint-1',
          type: 'keypoint',
          order: 12,
          points: [
            'Kompetanse innen bærekraftig finans er i høy etterspørsel',
            'Regulatorisk trykk og investorkrav gjør at selskaper trenger ESG-eksperter',
            'Kombinasjonen av finans og bærekraft er sjelden og verdifull'
          ]
        },
        {
          id: '6-5-heading-5',
          type: 'heading',
          order: 13,
          level: 2,
          text: 'Fra individ til system'
        },
        {
          id: '6-5-text-4',
          type: 'text',
          order: 14,
          text: 'Individuelle valg betyr noe, men systemendring krever kollektiv handling:'
        },
        {
          id: '6-5-list-3',
          type: 'list',
          order: 15,
          ordered: false,
          items: [
            'Stem med pensjonspengene: Krev at arbeidsgiver velger bærekraftige leverandører',
            'Bruk stemmeretten: I selskaper du eier aksjer i, stem for gode klimaforslag',
            'Krev transparens: Som forbruker og investor, etterspør bærekraftsinformasjon',
            'Del kunnskap: Snakk med venner og familie om bærekraftig finans',
            'Velg arbeidsgiver bevisst: Arbeid for selskaper som tar bærekraft seriøst'
          ]
        },
        {
          id: '6-5-example-2',
          type: 'example',
          order: 16,
          title: 'Den norske studentbevegelsen',
          content: 'I 2023 fikk norske studenter gjennomslag for at Lånekassen skulle få føringer om ansvarlige investeringer. Studentorganisasjoner har også presset på for at universitetenes pensjonsmidler skal forvaltes mer bærekraftig. Kollektiv organisering virker.'
        },
        {
          id: '6-5-quiz-1',
          type: 'quiz',
          order: 17,
          question: 'Hva er hovedforskjellen mellom eksklusjon og aktivt eierskap som ESG-strategi?',
          options: [
            'Eksklusjon gir høyere avkastning',
            'Eksklusjon unngår selskaper, aktivt eierskap forsøker å påvirke dem',
            'Aktivt eierskap er bare for store investorer',
            'Eksklusjon er mer effektivt for klimaet'
          ],
          correctAnswer: 1,
          explanation: 'Eksklusjon handler om å unngå investeringer, mens aktivt eierskap handler om å beholde investeringen og forsøke å påvirke selskapet til forbedring.'
        },
        {
          id: '6-5-quiz-2',
          type: 'quiz',
          order: 18,
          question: 'Hvordan klarte Engine No. 1 å påvirke ExxonMobil med bare 0,02% av aksjene?',
          options: [
            'De kjøpte flere aksjer rett før generalforsamlingen',
            'De truet med søksmål',
            'De mobiliserte store institusjonelle investorer som støttet dem',
            'De fikk hjelp fra amerikanske myndigheter'
          ],
          correctAnswer: 2,
          explanation: 'Engine No. 1 lyktes fordi de mobiliserte store institusjonelle investorer som var frustrerte over Exxons klimastrategi. Sammen hadde de nok stemmekraft.'
        },
        {
          id: '6-5-exercise-1',
          type: 'exercise',
          order: 19,
          title: 'Oppgave: Din bærekraftige fremtid',
          description: '1. Finn ut hvilke fond du (eller din familie) har sparepenger i. Hva er SFDR-klassifiseringen til disse fondene?\n\n2. Du får tilbud om drømmejobben i et oljeselskap eller en stilling med lavere lønn i et fornybarselskap. Hvordan ville du vurdert dette valget?\n\n3. Identifiser tre konkrete handlinger du kan gjøre de neste 6 månedene for å gjøre din økonomi mer bærekraftig.',
          hint: 'Sjekk fondsprodusentens nettside for SFDR-informasjon.'
        },
        {
          id: '6-5-reflection-1',
          type: 'reflection',
          order: 20,
          question: 'Tenk tilbake på alt du har lært i denne modulen om bærekraftig finans. Har det endret hvordan du tenker om penger, investeringer eller karrierevalg? Hva er den viktigste innsikten du tar med deg videre?'
        },
        {
          id: '6-5-heading-6',
          type: 'heading',
          order: 21,
          level: 2,
          text: 'Avslutning: Finans som kraft for endring'
        },
        {
          id: '6-5-text-5',
          type: 'text',
          order: 22,
          text: 'Finansmarkedene er ikke nøytrale – de former hvilke prosjekter som får kapital og dermed hvilken fremtid vi bygger. Som fremtidig investor, arbeidstaker og samfunnsborger har du muligheten til å bidra til at kapitalen flyter mot løsninger fremfor problemer.'
        }
      ]
    }
  ],
  moduleQuiz: {
    id: 'modul-6-baerekraft-quiz',
    title: 'Modulquiz: Bærekraftig Finans i Praksis',
    description: 'Test din forståelse av ESG, EU-taksonomi og grønnvasking. Du trenger minst 80% riktig for å bestå.',
    passingScore: 80,
    questionsToShow: 20,
    questions: [
      {
        id: 'q9-1',
        question: 'Hva er EU-taksonomien?',
        options: [
          'En skatt på ikke-bærekraftige investeringer',
          'Et klassifiseringssystem for hva som regnes som miljømessig bærekraftig',
          'En liste over forbudte investeringer',
          'En metode for å beregne CO2-utslipp'
        ],
        correctAnswer: 1,
        explanation: 'EU-taksonomien er et klassifiseringssystem som definerer hvilke økonomiske aktiviteter som kan kalles miljømessig bærekraftige. Det er et felles språk for grønn finans.'
      },
      {
        id: 'q9-2',
        question: 'Hva er "stranded assets"?',
        options: [
          'Aksjer som handles lite',
          'Eiendeler som mister verdi pga. overgangen til et lavutslippssamfunn',
          'Obligasjoner som har forfalt',
          'Investeringer i utviklingsland'
        ],
        correctAnswer: 1,
        explanation: 'Stranded assets er eiendeler (som fossilreserver eller kullkraftverk) som kan miste verdi fordi regulering, teknologi eller markedsendringer gjør dem ulønnsomme.'
      },
      {
        id: 'q9-3',
        question: 'Hva er SFDR?',
        options: [
          'Et mål på miljørisiko',
          'En EU-forordning som krever bærekraftsrapportering fra finansforetak',
          'En type grønn obligasjon',
          'Et karbonskattesystem'
        ],
        correctAnswer: 1,
        explanation: 'SFDR (Sustainable Finance Disclosure Regulation) er en EU-forordning som krever at finansforetak rapporterer hvordan de integrerer bærekraft i sine investeringsbeslutninger.'
      },
      {
        id: 'q9-4',
        question: 'Hva er grønnvasking?',
        options: [
          'En type miljøvennlig investering',
          'Når selskaper fremstiller seg som mer bærekraftige enn de faktisk er',
          'En metode for å rense forurensede områder',
          'Skatt på grønne produkter'
        ],
        correctAnswer: 1,
        explanation: 'Grønnvasking er når selskaper eller fond gir et falskt eller overdrevet inntrykk av sin miljøvennlighet for å tiltrekke kunder eller investorer.'
      },
      {
        id: 'q9-5',
        question: 'Hva er klimarisiko i finanssammenheng?',
        options: [
          'Bare fysiske skader fra ekstremvær',
          'Både fysisk risiko og overgangsrisiko knyttet til klimaendringer',
          'Risikoen for at klimafond presterer dårlig',
          'Kostnaden ved å redusere utslipp'
        ],
        correctAnswer: 1,
        explanation: 'Klimarisiko inkluderer fysisk risiko (ekstremvær, havnivåstigning) og overgangsrisiko (regulering, teknologiskift, endrede preferanser) som påvirker verdien av investeringer.'
      },
      {
        id: 'q9-6',
        question: 'Hva er forskjellen mellom Artikkel 6, 8 og 9 fond under SFDR?',
        options: [
          'Forskjellige gebyrnivåer',
          'Økende grad av bærekraftsfokus fra 6 (lavest) til 9 (høyest)',
          'Forskjellige geografiske fokus',
          'Forskjellige minimumsinvesteringer'
        ],
        correctAnswer: 1,
        explanation: 'Art. 6: ingen spesifikt bærekraftsfokus. Art. 8: fremmer miljø/sosiale egenskaper. Art. 9: har bærekraftig investering som mål. Økende krav til dokumentasjon.'
      },
      {
        id: 'q9-7',
        question: 'Hva er "double materiality"?',
        options: [
          'At selskaper må rapportere i to land',
          'At ESG-faktorer både påvirker selskapets verdi OG at selskapet påvirker samfunn/miljø',
          'At det finnes to typer bærekraftsrating',
          'At rapportering må være på to språk'
        ],
        correctAnswer: 1,
        explanation: 'Double materiality betyr at selskaper må vurdere både hvordan ESG påvirker dem finansielt (finansiell materialitet) og hvordan de påvirker samfunn og miljø (impact materiality).'
      },
      {
        id: 'q9-8',
        question: 'Hva er CSRD?',
        options: [
          'En type grønn obligasjon',
          'EUs direktiv om bærekraftsrapportering for selskaper',
          'En karbonskatt',
          'En ESG-rating'
        ],
        correctAnswer: 1,
        explanation: 'CSRD (Corporate Sustainability Reporting Directive) er EUs direktiv som krever at store selskaper rapporterer detaljert om bærekraft etter standardiserte maler.'
      },
      {
        id: 'q9-9',
        question: 'Hva er en viktig begrensning ved ESG-ratinger?',
        options: [
          'De finnes bare for amerikanske selskaper',
          'Ulike ratingbyråer kan gi svært forskjellige ratinger til samme selskap',
          'De er alltid for strenge',
          'De oppdateres bare hvert tiende år'
        ],
        correctAnswer: 1,
        explanation: 'ESG-ratinger fra ulike byråer korrelerer dårlig (ca. 0,5). De bruker ulike metodologier og vekter faktorer ulikt, så samme selskap kan få høy og lav rating samtidig.'
      },
      {
        id: 'q9-10',
        question: 'Hva er scope 1, 2 og 3 utslipp?',
        options: [
          'Utslipp i tre forskjellige land',
          'Direkte utslipp, indirekte fra energi, og indirekte fra verdikjeden',
          'Tre nivåer av rapporteringskrav',
          'Utslipp fra tre forskjellige bransjer'
        ],
        correctAnswer: 1,
        explanation: 'Scope 1: direkte utslipp (egen forbrenning). Scope 2: indirekte fra innkjøpt energi. Scope 3: alle andre indirekte utslipp i verdikjeden (ofte størst og vanskeligst å måle).'
      },
      {
        id: 'q9-11',
        question: 'Hvorfor har Oljefondets etiske retningslinjer global påvirkning?',
        options: [
          'Fordi Norge er verdens største oljeprodusent',
          'Fordi fondet er så stort at eksklusjoner og forventninger påvirker selskapers atferd',
          'Fordi FN krever at alle land følger Norges retningslinjer',
          'Fordi fondet bare investerer i grønne selskaper'
        ],
        correctAnswer: 1,
        explanation: 'Som verdens største statlige investeringsfond har Oljefondet stor påvirkningskraft. Når de ekskluderer et selskap eller sender forventningsbrev, merkes det i styrerommene.'
      },
      {
        id: 'q9-12',
        question: 'Hva er impact investing?',
        options: [
          'Å investere for høyest mulig avkastning',
          'Å investere med mål om både finansiell avkastning og målbar positiv effekt på samfunn/miljø',
          'Å investere i børsnoterte selskaper',
          'Å investere i eiendom'
        ],
        correctAnswer: 1,
        explanation: 'Impact investing sikter mot å oppnå både finansiell avkastning og målbar positiv samfunns- eller miljøeffekt. Det er mer aktivt enn bare å unngå "dårlige" selskaper.'
      },
      {
        id: 'q9-13',
        question: 'Hva betyr "Do No Significant Harm" (DNSH) i EU-taksonomien?',
        options: [
          'At investeringer må være risikofrie',
          'At en aktivitet ikke skal skade andre miljømål mens den oppfyller ett',
          'At selskaper ikke kan gå konkurs',
          'At fond ikke kan tape penger'
        ],
        correctAnswer: 1,
        explanation: 'DNSH betyr at en aktivitet som bidrar til ett miljømål (f.eks. klima) ikke skal gjøre betydelig skade på de andre miljømålene (vann, sirkulær økonomi, etc.).'
      },
      {
        id: 'q9-14',
        question: 'Hva er "transition finance"?',
        options: [
          'Finansiering av konkurser',
          'Finansiering som hjelper høyutslippssektorer med å bli mer bærekraftige',
          'Kortsiktige lån',
          'Finansiering av oppstartsbedrifter'
        ],
        correctAnswer: 1,
        explanation: 'Transition finance støtter selskaper i karbonintensive sektorer (stål, sement, energi) i overgangen til lavere utslipp, selv om de ikke er "grønne" i dag.'
      },
      {
        id: 'q9-15',
        question: 'Hva er negativ screening i ESG-investering?',
        options: [
          'Å velge de beste ESG-selskapene',
          'Å utelukke selskaper eller sektorer som ikke oppfyller etiske kriterier',
          'Å investere i nedadgående aksjer',
          'Å redusere risiko gjennom diversifisering'
        ],
        correctAnswer: 1,
        explanation: 'Negativ screening betyr å ekskludere selskaper basert på kriterier som våpen, tobakk, gambling eller fossile brensler fra investeringsuniverset.'
      },
      {
        id: 'q9-16',
        question: 'Hva er "Paris-aligned" investeringer?',
        options: [
          'Investeringer kun i franske selskaper',
          'Investeringer som er i tråd med Parisavtalens mål om maks 1,5-2°C oppvarming',
          'Investeringer i eiendom i Paris',
          'Investeringer godkjent av EU'
        ],
        correctAnswer: 1,
        explanation: 'Paris-aligned betyr at porteføljen er på en utslippsbane forenlig med Parisavtalen - typisk netto null innen 2050 og betydelig reduksjon underveis.'
      },
      {
        id: 'q9-17',
        question: 'Hva er fysisk klimarisiko?',
        options: [
          'Risikoen for nye klimareguleringer',
          'Direkte skader fra klimaendringer som flom, tørke og ekstremvær',
          'Risikoen for at grønne teknologier mislykkes',
          'Kostnaden ved klimarapportering'
        ],
        correctAnswer: 1,
        explanation: 'Fysisk klimarisiko er direkte skader fra klimaendringer: akutte (stormer, flom) og kroniske (havnivåstigning, temperaturstigningen). Påvirker eiendom, infrastruktur og forsyningskjeder.'
      },
      {
        id: 'q9-18',
        question: 'Hva er overgangsrisiko (transition risk)?',
        options: [
          'Risiko ved å bytte jobb',
          'Risiko knyttet til politikk, teknologi og markedsendringer i overgangen til lavutslippsøkonomi',
          'Risiko ved å endre porteføljesammensetning',
          'Risiko ved generasjonsskifte'
        ],
        correctAnswer: 1,
        explanation: 'Overgangsrisiko oppstår fra reguleringsendringer (karbonskatt), teknologiskift (elbiler) og endrede kundepreferanser som kan gjøre visse eiendeler mindre verdifulle.'
      },
      {
        id: 'q9-19',
        question: 'Hva er Scope 3-utslipp typisk for de fleste selskaper?',
        options: [
          'En liten andel av totale utslipp',
          'Den klart største andelen - ofte 80-90% av totale utslipp',
          'Like stor som Scope 1',
          'Irrelevant for de fleste bransjer'
        ],
        correctAnswer: 1,
        explanation: 'Scope 3 (verdikjede-utslipp) utgjør ofte 80-90% av et selskaps klimaavtrykk. Det inkluderer alt fra råvareproduksjon til kundens bruk av produktet.'
      },
      {
        id: 'q9-20',
        question: 'Hva kjennetegner et Artikkel 9-fond under SFDR?',
        options: [
          'Det har ingen bærekraftsfokus',
          'Det har bærekraftig investering som eksplisitt hovedmål',
          'Det fremmer miljøegenskaper som et av flere mål',
          'Det er et rent obligasjonsfond'
        ],
        correctAnswer: 1,
        explanation: 'Artikkel 9-fond (mørkegrønne) har bærekraftig investering som hovedmål, for eksempel å investere i selskaper som bidrar til FNs bærekraftsmål.'
      },
      {
        id: 'q9-21',
        question: 'Hva er Science Based Targets initiative (SBTi)?',
        options: [
          'En statlig forskningsinstitusjon',
          'Et initiativ som validerer at selskapers klimamål er i tråd med klimavitenskapen',
          'En ESG-ratingorganisasjon',
          'Et EU-direktiv'
        ],
        correctAnswer: 1,
        explanation: 'SBTi validerer at selskapers utslippsmål er i tråd med vitenskapens krav for å begrense oppvarming til 1,5°C. Det gir troverdighet til klimaforpliktelser.'
      },
      {
        id: 'q9-22',
        question: 'Hva er "ESG-integration"?',
        options: [
          'Å kun investere i grønne selskaper',
          'Å systematisk inkludere ESG-faktorer i tradisjonell finansiell analyse',
          'Å slå sammen flere ESG-fond',
          'Å rapportere ESG-data til myndighetene'
        ],
        correctAnswer: 1,
        explanation: 'ESG-integration betyr at ESG-informasjon brukes sammen med finansielle data i investeringsbeslutninger, ikke som et separat filter eller ekslusjonsverktøy.'
      },
      {
        id: 'q9-23',
        question: 'Hva er "active ownership" eller "stewardship"?',
        options: [
          'Å kjøpe og selge aksjer ofte',
          'Å bruke eierrettigheter for å påvirke selskapers bærekraftsarbeid',
          'Å eie aksjer i mange selskaper',
          'Å være majoritetsaksjonær'
        ],
        correctAnswer: 1,
        explanation: 'Active ownership betyr å bruke stemmerett, dialog og engasjement til å påvirke selskaper i bærekraftig retning - ikke bare selge aksjer i "dårlige" selskaper.'
      },
      {
        id: 'q9-24',
        question: 'Hva er hovedkritikken mot ESG-ratinger?',
        options: [
          'De er for strenge',
          'Mangel på standardisering og lav korrelasjon mellom ulike byråers ratinger',
          'De fokuserer for mye på klima',
          'De er for dyre å kjøpe'
        ],
        correctAnswer: 1,
        explanation: 'ESG-ratinger fra ulike byråer korrelerer bare ca. 50%. Ulike metodologier, vekter og datakilder gir forvirrende og til dels motstridende signaler.'
      },
      {
        id: 'q9-25',
        question: 'Hva er EU Green Bond Standard?',
        options: [
          'En obligatorisk standard for alle obligasjoner i EU',
          'Frivillig standard med strenge krav til grønne obligasjoner knyttet til taksonomien',
          'En skatt på grønne obligasjoner',
          'Minimumskrav til obligasjoners kupongrente'
        ],
        correctAnswer: 1,
        explanation: 'EU Green Bond Standard er en frivillig standard som krever at pengene brukes til taksonomi-aligned aktiviteter og verifiseres av uavhengig tredjepart.'
      },
      {
        id: 'q9-26',
        question: 'Hva betyr "net zero" for en investor?',
        options: [
          'Å ha null avkastning',
          'At porteføljens utslipp balanseres mot karbonfjerning, typisk innen 2050',
          'Å ikke ha noen investeringer',
          'Å kun investere i nullkupong-obligasjoner'
        ],
        correctAnswer: 1,
        explanation: 'Net zero betyr at de gjenværende utslippene fra porteføljen balanseres av karbonfjerning (eller investeringer i slik teknologi), vanligvis med 2050 som målår.'
      },
      {
        id: 'q9-27',
        question: 'Hva er TCFD?',
        options: [
          'En type grønn obligasjon',
          'Et rammeverk for klimarelatert finansiell rapportering',
          'En europeisk skatt',
          'En ESG-ratingorganisasjon'
        ],
        correctAnswer: 1,
        explanation: 'TCFD (Task Force on Climate-related Financial Disclosures) er et rammeverk som anbefaler hvordan selskaper bør rapportere klimarisiko og -muligheter.'
      },
      {
        id: 'q9-28',
        question: 'Hvorfor er Scope 3-utslipp vanskelig å måle?',
        options: [
          'Fordi de ikke eksisterer',
          'Fordi de involverer hele verdikjeden - leverandører, transport, kundebruk - som er utenfor direkte kontroll',
          'Fordi de er hemmelige',
          'Fordi de kun gjelder store selskaper'
        ],
        correctAnswer: 1,
        explanation: 'Scope 3 krever data fra hele verdikjeden - tusenvis av leverandører, logistikk, og hvordan produktene brukes og kasseres. Mye må estimeres.'
      },
      {
        id: 'q9-29',
        question: 'Hva er et "just transition" prinsipp?',
        options: [
          'At klimaomstillingen skal skje så raskt som mulig',
          'At klimaomstillingen skal ta hensyn til arbeidere og samfunn som rammes',
          'At alle land skal ha like klimamål',
          'At grønne investeringer skal være rettferdig fordelt'
        ],
        correctAnswer: 1,
        explanation: 'Just transition handler om at overgangen til lavutslippssamfunnet må ivareta arbeidere (f.eks. i kullgruver) og lokalsamfunn som berøres negativt.'
      },
      {
        id: 'q9-30',
        question: 'Hva er formålet med EU-taksonomiens seks miljømål?',
        options: [
          'Å rangere selskaper fra 1 til 6',
          'Å definere hva som er bærekraftig innen klima, vann, sirkulærøkonomi, forurensning, biologisk mangfold og økosystemer',
          'Å sette skattesatser',
          'Å klassifisere land etter miljøprestasjon'
        ],
        correctAnswer: 1,
        explanation: 'EU-taksonomien har seks miljømål: klimatilpasning, klimabegrensning, vannressurser, sirkulær økonomi, forurensning og biologisk mangfold.'
      },
      {
        id: 'q9-31',
        question: 'Hva er "brown spinning"?',
        options: [
          'En ny type energiproduksjon',
          'Å skille ut forurensende aktiviteter i egne selskaper for å pynte på morselskapet',
          'Å rotere porteføljen hyppig',
          'Å investere i sjokoladeproduksjon'
        ],
        correctAnswer: 1,
        explanation: 'Brown spinning er en risiko der selskaper selger ut forurensende virksomhet til private eiere som ikke er underlagt ESG-press, slik at utslippene fortsetter uovervåket.'
      },
      {
        id: 'q9-32',
        question: 'Hva er forskjellen mellom "exclusion" og "engagement"?',
        options: [
          'Det finnes ingen forskjell',
          'Exclusion er å selge seg ut, engagement er å påvirke innenfra som eier',
          'Exclusion gjelder aksjer, engagement gjelder obligasjoner',
          'Begge handler om å øke avkastning'
        ],
        correctAnswer: 1,
        explanation: 'Exclusion betyr å utelukke selskaper fra porteføljen. Engagement betyr å forbli eier og bruke dialog, stemmerett og forventningsbrev til å påvirke selskapet.'
      },
      {
        id: 'q9-33',
        question: 'Hva er "carbon footprint" for en portefølje?',
        options: [
          'Kostnaden ved å handle aksjer',
          'De samlede klimagassutslippene knyttet til selskapene i porteføljen',
          'Avkastningen fra klimarelaterte investeringer',
          'Antall klimaaksjer i porteføljen'
        ],
        correctAnswer: 1,
        explanation: 'Porteføljens carbon footprint måler hvor mye klimagassutslipp som er knyttet til investeringene, typisk vektet etter eierandel og normalisert per investert krone.'
      },
      {
        id: 'q9-34',
        question: 'Hva er et Principal Adverse Impact (PAI)?',
        options: [
          'En positiv ESG-indikator',
          'Negativ bærekraftseffekt som investeringer kan ha på miljø/samfunn',
          'En type aksjeindeks',
          'Lederlønn i ESG-selskaper'
        ],
        correctAnswer: 1,
        explanation: 'PAI er negative effekter på bærekraftsfaktorer, som CO2-utslipp, vannforbruk eller brudd på menneskerettigheter. SFDR krever at fond rapporterer på disse.'
      },
      {
        id: 'q9-35',
        question: 'Hva betyr "additionality" i impact investing?',
        options: [
          'At investeringen gir ekstra avkastning',
          'At investeringen bidrar til noe som ikke ville skjedd uten den',
          'At flere investorer går sammen',
          'At investeringen er i tillegg til eksisterende portefølje'
        ],
        correctAnswer: 1,
        explanation: 'Additionality betyr at investeringen faktisk skaper positiv effekt som ikke ville oppstått ellers - ikke bare finansierer noe som uansett ville blitt gjennomført.'
      },
      {
        id: 'q9-36',
        question: 'Hvordan kan klimarisiko påvirke eiendomsverdier?',
        options: [
          'Den påvirker ikke eiendom',
          'Fysiske risikoer som flom og havnivåstigning kan redusere verdier betydelig',
          'Klimarisiko øker alltid eiendomsverdier',
          'Bare kommersielle eiendommer påvirkes'
        ],
        correctAnswer: 1,
        explanation: 'Eiendommer i flomutsatte områder eller langs kysten kan tape verdi når forsikringspremier øker og fysiske skader blir hyppigere.'
      },
      {
        id: 'q9-37',
        question: 'Hva er "best-in-class" ESG-tilnærming?',
        options: [
          'Å kun investere i de grønneste sektorene',
          'Å velge de beste ESG-utøverne innen hver sektor, inkludert "brune"',
          'Å investere i de største selskapene',
          'Å utelukke alle fossile selskaper'
        ],
        correctAnswer: 1,
        explanation: 'Best-in-class betyr å velge de selskapene som scorer best på ESG innen sin bransje - også i sektorer som olje, der "beste" kan være relativt bedre, ikke absolutt grønn.'
      },
      {
        id: 'q9-38',
        question: 'Hva er formålet med et "sustainability-linked loan"?',
        options: [
          'Et lån som bare kan brukes til grønne prosjekter',
          'Et lån der rentebetingelsene er knyttet til låntakers bærekraftsprestasjon',
          'Et lån med evig løpetid',
          'Et lån garantert av staten'
        ],
        correctAnswer: 1,
        explanation: 'Sustainability-linked loans har renten knyttet til oppnåelse av ESG-mål. Oppnår selskapet målene, får de bedre rente; mislykkes de, øker renten.'
      },
      {
        id: 'q9-39',
        question: 'Hva er biodiversitetsrisiko?',
        options: [
          'Kun et lokalt miljøproblem',
          'Finansiell risiko fra tap av arter og økosystemer som forretningsmodeller avhenger av',
          'Risikoen ved å investere i mange sektorer',
          'Forskjellen mellom ESG-ratinger'
        ],
        correctAnswer: 1,
        explanation: 'Biodiversitetsrisiko er økende fokus. Mange virksomheter er avhengige av naturens tjenester (pollinering, rent vann) som trues av naturtap.'
      },
      {
        id: 'q9-40',
        question: 'Hva er TNFD?',
        options: [
          'En type grønn obligasjon',
          'Et rammeverk for rapportering av naturrelatert finansiell risiko',
          'Et norsk klimafond',
          'En EU-regulering'
        ],
        correctAnswer: 1,
        explanation: 'TNFD (Taskforce on Nature-related Financial Disclosures) er et rammeverk (inspirert av TCFD) for rapportering av finansiell risiko knyttet til naturtap og biodiversitet.'
      }
    ]
  }
};
