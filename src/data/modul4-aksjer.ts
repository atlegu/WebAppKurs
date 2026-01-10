import { Module, InteractiveModelContent } from '../types/course';

export const modul4AksjerModule: Module = {
  id: 'modul-4-aksjer',
  title: 'Aksjer og Eierskap',
  icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>',
  order: 5,
  learningObjectives: [
    'Forstå hva en aksje er og hva det betyr å være aksjonær',
    'Kjenne til ulike metoder for å verdsette aksjer',
    'Forstå hvordan aksjemarkedet fungerer og hvordan aksjer handles',
    'Beregne og vurdere risiko og avkastning for aksjer',
    'Forstå ESG-kriterier og bærekraftig aksjeinvestering'
  ],
  sections: [
    // ===================================
    // SEKSJON 4.1: Fra låntaker til eier
    // ===================================
    {
      id: 'seksjon-4-1-fra-laantaker-til-eier',
      title: 'Fra låntaker til eier',
      order: 1,
      content: [
        {
          id: '4-1-hook',
          type: 'text',
          order: 1,
          text: '**Tenk deg at du eier en bit av Equinor, DNB og Telenor – alle sammen.** Med aksjer er dette virkeligheten. Du blir medeier i noen av landets største selskaper, med rett til utbytte og stemmerett på generalforsamlingen.',
          emphasis: 'important'
        },
        {
          id: '4-1-podcast',
          type: 'audio',
          order: 2,
          title: 'Podcast: Introduksjon til aksjer og aksjeprising',
          duration: '15 min',
          url: '/aksjer.m4a',
          description: 'Vi anbefaler at du lytter til denne podcasten før du leser videre. Her får du en grundig og lettfattelig introduksjon til aksjer, eierskap og verdsettelse – fortalt på en engasjerende måte som gir deg et solid fundament for resten av modulen.'
        },
        {
          id: '4-1-intro',
          type: 'text',
          order: 3,
          text: 'I forrige modul lærte du om obligasjoner – der du er kreditor og låner ut penger. Nå snur vi perspektivet: med aksjer blir du *eier*. Du tar mer risiko, men har også mulighet for langt høyere avkastning.'
        },
        {
          id: '4-1-heading-definisjon',
          type: 'heading',
          order: 3,
          level: 2,
          text: 'Hva er en aksje?'
        },
        {
          id: '4-1-def-aksje',
          type: 'definition',
          order: 4,
          term: 'Aksje (Stock / Share / Equity)',
          definition: 'En eierandel i et aksjeselskap. Hver aksje representerer en like stor del av selskapet. Eier du 1% av aksjene, eier du 1% av selskapet.'
        },
        {
          id: '4-1-text-rettigheter',
          type: 'text',
          order: 5,
          text: 'Når du kjøper en aksje, får du flere rettigheter som medeier:'
        },
        {
          id: '4-1-list-rettigheter',
          type: 'list',
          order: 6,
          ordered: false,
          items: [
            '**Utbytterett:** Andel av overskuddet selskapet deler ut',
            '**Stemmerett:** Stemme på generalforsamlingen om viktige beslutninger',
            '**Informasjonsrett:** Tilgang til regnskaper og viktig selskapsinformasjon',
            '**Fortrinnsrett:** Førsterett til å kjøpe nye aksjer ved kapitalutvidelse',
            '**Likvidasjonsrett:** Andel av verdiene hvis selskapet oppløses (etter kreditorer)'
          ]
        },
        {
          id: '4-1-heading-sammenligning',
          type: 'heading',
          order: 7,
          level: 2,
          text: 'Aksjer vs. obligasjoner – en repetisjon'
        },
        {
          id: '4-1-table-sammenligning',
          type: 'table',
          order: 8,
          headers: ['Egenskap', 'Aksje', 'Obligasjon'],
          rows: [
            ['Din rolle', 'Eier (aksjonær)', 'Kreditor (långiver)'],
            ['Avkastning', 'Utbytte + kursgevinst (usikkert)', 'Fast kupong (forutsigbart)'],
            ['Risiko', 'Høy – kan tape alt', 'Lavere – kuponger er kontraktsfestet'],
            ['Ved konkurs', 'Sist i køen – ofte null', 'Foran aksjonærer'],
            ['Løpetid', 'Evig (så lenge selskapet eksisterer)', 'Bestemt forfallsdato'],
            ['Stemmerett', 'Ja', 'Nei'],
            ['Historisk avkastning', '7-10% årlig (langsiktig)', '3-5% årlig']
          ]
        },
        {
          id: '4-1-heading-typer',
          type: 'heading',
          order: 9,
          level: 2,
          text: 'Typer aksjer'
        },
        {
          id: '4-1-def-ordinaer',
          type: 'definition',
          order: 10,
          term: 'Ordinære aksjer (Common Stock)',
          definition: 'Vanlige aksjer med stemmerett og rett til utbytte. De fleste aksjer på børsen er ordinære aksjer.'
        },
        {
          id: '4-1-def-preferanse',
          type: 'definition',
          order: 11,
          term: 'Preferanseaksjer (Preferred Stock)',
          definition: 'Aksjer med fast utbytte og forrang foran ordinære aksjer ved utbytte og likvidasjon. Ofte uten stemmerett. Et slags mellomting mellom aksje og obligasjon.'
        },
        {
          id: '4-1-table-typer',
          type: 'table',
          order: 12,
          headers: ['Type', 'Kjennetegn', 'Eksempel'],
          rows: [
            ['A-aksjer', 'Full stemmerett (ofte 1 stemme per aksje)', 'De fleste børsnoterte aksjer'],
            ['B-aksjer', 'Begrenset eller ingen stemmerett', 'Noen familiekontrollerte selskaper'],
            ['Preferanseaksjer', 'Fast utbytte, forrang ved konkurs', 'Sjelden i Norge, vanligere i USA'],
            ['Vekstaksjer', 'Høy forventet vekst, lite/ingen utbytte', 'Teknologiselskaper'],
            ['Verdiaksjer', 'Stabil inntjening, høyt utbytte', 'Bank, forsikring, forsyning']
          ]
        },
        {
          id: '4-1-heading-hvorfor',
          type: 'heading',
          order: 13,
          level: 2,
          text: 'Hvorfor investerer folk i aksjer?'
        },
        {
          id: '4-1-list-hvorfor',
          type: 'list',
          order: 14,
          ordered: true,
          items: [
            '**Høyere avkastning:** Historisk 7-10% årlig vs. 3-5% for obligasjoner',
            '**Inflasjonsbeskyttelse:** Aksjekurser og utbytter følger økonomien',
            '**Eierskap:** Du blir del av verdiskapningen i samfunnet',
            '**Likviditet:** Børsnoterte aksjer kan kjøpes og selges på sekunder',
            '**Utbytte:** Jevn kontantstrøm fra vellykkede selskaper'
          ]
        },
        {
          id: '4-1-example-equinor',
          type: 'example',
          order: 15,
          title: 'Case: Eie en bit av Equinor',
          content: 'Du kjøper 100 aksjer i Equinor til kurs 280 kr.\n\n• Investering: 100 × 280 = 28 000 kr\n• Equinor har ca. 3 milliarder aksjer\n• Du eier: 100 / 3 000 000 000 = 0,0000033% av Equinor',
          calculation: '**Hva får du?**\n\nEquinor betalte ca 12 kr i utbytte per aksje i 2023:\n• Ditt utbytte: 100 × 12 kr = 1 200 kr\n• Direkteavkastning: 1 200 / 28 000 = 4,3%\n\n**I tillegg:**\n• Stemmerett på generalforsamling (100 stemmer)\n• Andel av eventuell kursstigning\n• Rett til fremtidige utbytter'
        },
        {
          id: '4-1-quiz-1',
          type: 'quiz',
          order: 16,
          question: 'Hva skjer med en aksjonærs investering hvis selskapet går konkurs?',
          options: [
            'Aksjonæren får pengene tilbake før kreditorene',
            'Aksjonæren får alltid minst halvparten tilbake',
            'Aksjonæren kommer sist og kan tape hele investeringen',
            'Aksjonæren er beskyttet av innskuddsgarantien'
          ],
          correctAnswer: 2,
          explanation: 'Ved konkurs betales kreditorer (inkludert obligasjonseiere) først. Aksjonærer kommer sist og får bare det som eventuelt er igjen – som ofte er ingenting. Dette er en av hovedgrunnene til at aksjer har høyere risiko enn obligasjoner.'
        },
        {
          id: '4-1-quiz-2',
          type: 'quiz',
          order: 17,
          question: 'Hvilken rettighet har IKKE en vanlig aksjonær?',
          options: [
            'Rett til utbytte',
            'Stemmerett på generalforsamlingen',
            'Garantert årlig avkastning',
            'Fortrinnsrett ved nye aksjer'
          ],
          correctAnswer: 2,
          explanation: 'Aksjonærer har IKKE garantert avkastning. Utbytte avhenger av selskapets resultat og styrets beslutning, og aksjekursen kan både stige og falle. Dette skiller aksjer fra obligasjoner, som har kontraktsfestede kuponger.'
        },
        {
          id: '4-1-exercise',
          type: 'exercise',
          order: 18,
          title: 'Oppgave: Beregn din eierandel',
          description: 'Du vurderer å investere 50 000 kr i DNB-aksjer. Aksjekursen er 200 kr.\n\n1. Hvor mange aksjer kan du kjøpe?\n2. DNB har ca. 1,5 milliarder utestående aksjer. Hva blir din eierandel?\n3. DNB betalte 12 kr per aksje i utbytte i fjor. Hvor mye ville du fått?',
          hint: 'Antall aksjer = Investering / Aksjekurs. Eierandel = Dine aksjer / Totalt antall aksjer.'
        },
        {
          id: '4-1-keypoint',
          type: 'keypoint',
          order: 19,
          points: [
            'En aksje er en eierandel i et selskap',
            'Aksjonærer har rett til utbytte, stemmerett og fortrinnsrett',
            'Aksjer har høyere risiko enn obligasjoner, men også høyere forventet avkastning',
            'Ved konkurs kommer aksjonærer sist – etter alle kreditorer',
            'Historisk har aksjer gitt 7-10% årlig avkastning over tid'
          ]
        },
        {
          id: '4-1-reflection',
          type: 'reflection',
          order: 20,
          question: 'Tenk på et selskap du kjenner godt (kanskje der du handler eller jobber). Ville du ønsket å være medeier i dette selskapet? Hvorfor eller hvorfor ikke?'
        }
      ]
    },

    // ===================================
    // SEKSJON 4.2: Hvordan aksjer verdsettes
    // ===================================
    {
      id: 'seksjon-4-2-verdsettelse',
      title: 'Hvordan aksjer verdsettes',
      order: 2,
      content: [
        {
          id: '4-2-hook',
          type: 'text',
          order: 1,
          text: '**Er Equinor-aksjen "billig" til 280 kr? Er Kahoot "dyr" til 15 kr?** Prisen alene forteller ingenting. For å vite om en aksje er over- eller underpriset, må du forstå verdsettelse.',
          emphasis: 'important'
        },
        {
          id: '4-2-intro',
          type: 'text',
          order: 2,
          text: 'Verdsettelse handler om å finne den "virkelige" verdien av et selskap – og sammenligne med markedsprisen. Hvis den virkelige verdien er høyere enn prisen, kan aksjen være et godt kjøp. Dette er kjernen i fundamental analyse.'
        },
        {
          id: '4-2-heading-grunnleggende',
          type: 'heading',
          order: 3,
          level: 2,
          text: 'Grunnleggende verdsettelseskonsepter'
        },
        {
          id: '4-2-def-markedsverdi',
          type: 'definition',
          order: 4,
          term: 'Markedsverdi (Market Capitalization)',
          definition: 'Selskapets totale verdi på børsen. Beregnes som: Aksjekurs × Antall utestående aksjer. Også kalt "market cap" eller børsverdi.'
        },
        {
          id: '4-2-example-markedsverdi',
          type: 'example',
          order: 5,
          title: 'Beregne markedsverdi',
          content: 'Equinor:\n• Aksjekurs: 280 kr\n• Utestående aksjer: ca. 3 milliarder',
          calculation: 'Markedsverdi = 280 × 3 000 000 000 = **840 milliarder kr**\n\nDette gjør Equinor til et av Norges mest verdifulle selskaper.\n\nTil sammenligning:\n• DNB: ca. 300 mrd kr\n• Telenor: ca. 200 mrd kr\n• Kahoot: ca. 10 mrd kr'
        },
        {
          id: '4-2-def-eps',
          type: 'definition',
          order: 6,
          term: 'Resultat per aksje (EPS - Earnings Per Share)',
          definition: 'Selskapets overskudd delt på antall aksjer. Viser hvor mye av overskuddet som "tilhører" hver aksje. EPS = Årsresultat / Antall aksjer.'
        },
        {
          id: '4-2-heading-multipler',
          type: 'heading',
          order: 7,
          level: 2,
          text: 'Verdsettelsesmultipler'
        },
        {
          id: '4-2-text-multipler',
          type: 'text',
          order: 8,
          text: 'Multipler er forholdstall som lar deg sammenligne aksjer på tvers av størrelse og pris. De mest brukte er P/E, P/B og EV/EBITDA.'
        },
        {
          id: '4-2-def-pe',
          type: 'definition',
          order: 9,
          term: 'P/E (Price/Earnings)',
          definition: 'Aksjekurs delt på resultat per aksje. Viser hvor mange kroner du betaler for hver krone i overskudd. P/E = Aksjekurs / EPS.'
        },
        {
          id: '4-2-formula-pe',
          type: 'formula',
          order: 10,
          formula: 'P/E = Aksjekurs / EPS = Markedsverdi / Årsresultat',
          description: 'Eksempel: Aksjekurs 100 kr, EPS 5 kr → P/E = 100/5 = 20.\nDu betaler 20 kr for hver krone selskapet tjener.'
        },
        {
          id: '4-2-table-pe',
          type: 'table',
          order: 11,
          headers: ['P/E', 'Tolkning', 'Typisk for'],
          rows: [
            ['< 10', 'Kan være billig, eller problemer forventet', 'Sykliske, banker, modne selskaper'],
            ['10-20', 'Normalt nivå', 'De fleste etablerte selskaper'],
            ['20-30', 'Høy verdsettelse, vekstforventninger', 'Vekstselskaper'],
            ['> 30', 'Svært høy, krever sterk vekst', 'Teknologi, høyvekst'],
            ['Negativ', 'Selskapet går med underskudd', 'Oppstart, krisetilstand']
          ]
        },
        {
          id: '4-2-def-pb',
          type: 'definition',
          order: 12,
          term: 'P/B (Price/Book)',
          definition: 'Aksjekurs delt på bokført verdi per aksje. Viser hva du betaler i forhold til selskapets regnskapsmessige egenkapital.'
        },
        {
          id: '4-2-formula-pb',
          type: 'formula',
          order: 13,
          formula: 'P/B = Aksjekurs / (Egenkapital / Antall aksjer)',
          description: 'P/B under 1 betyr at aksjen handles under bokført verdi – kan indikere et godt kjøp (eller at markedet forventer tap).'
        },
        {
          id: '4-2-def-yield',
          type: 'definition',
          order: 14,
          term: 'Direkteavkastning (Dividend Yield)',
          definition: 'Årlig utbytte delt på aksjekurs. Viser den løpende avkastningen fra utbytte, uavhengig av kursutvikling.'
        },
        {
          id: '4-2-formula-yield',
          type: 'formula',
          order: 15,
          formula: 'Direkteavkastning = Utbytte per aksje / Aksjekurs × 100%',
          description: 'Eksempel: Utbytte 10 kr, kurs 200 kr → Direkteavkastning = 10/200 = 5%'
        },
        {
          id: '4-2-heading-dcf',
          type: 'heading',
          order: 16,
          level: 2,
          text: 'Diskontert kontantstrøm (DCF)'
        },
        {
          id: '4-2-def-dcf',
          type: 'definition',
          order: 17,
          term: 'DCF (Discounted Cash Flow)',
          definition: 'En verdsettelsesmetode der du beregner nåverdien av alle fremtidige kontantstrømmer selskapet forventes å generere. Teoretisk den mest "korrekte" metoden, men krever mange antagelser.'
        },
        {
          id: '4-2-formula-dcf',
          type: 'formula',
          order: 18,
          formula: 'Verdi = Σ (FCF_t / (1+r)^t) + Terminalverdi / (1+r)^n',
          description: 'FCF = Fri kontantstrøm i år t\nr = Avkastningskrav (diskonteringsrente)\nTerminalverdi = Verdi av alle kontantstrømmer etter prognoseperioden'
        },
        {
          id: '4-2-text-dcf',
          type: 'text',
          order: 19,
          text: 'DCF er samme konsept som obligasjonsprising (nåverdi av fremtidige betalinger), men for aksjer må du *estimere* fremtidige kontantstrømmer – som er langt mer usikkert enn faste kupongbetalinger.'
        },
        {
          id: '4-2-example-sammenligning',
          type: 'example',
          order: 20,
          title: 'Sammenligning av norske aksjer',
          content: 'Her er multipler for noen norske selskaper (eksempeltall):',
          calculation: '| Selskap | P/E | P/B | Dir.avk. |\n|---------|-----|-----|----------|\n| Equinor | 8 | 1,8 | 4,5% |\n| DNB | 9 | 1,1 | 6,0% |\n| Telenor | 15 | 2,5 | 5,5% |\n| Mowi | 12 | 2,0 | 4,0% |\n| Kahoot | 45 | 3,5 | 0% |\n\n**Tolkning:**\n• Equinor/DNB: Lavt P/E, høyt utbytte – verdiaksjer\n• Kahoot: Høyt P/E, null utbytte – vekstaksje\n• Telenor: Midt i mellom'
        },
        {
          id: '4-2-quiz-1',
          type: 'quiz',
          order: 21,
          question: 'Selskap A har aksjekurs 100 kr og EPS på 10 kr. Hva er P/E?',
          options: [
            '1',
            '10',
            '100',
            '1000'
          ],
          correctAnswer: 1,
          explanation: 'P/E = Aksjekurs / EPS = 100 / 10 = 10. Dette betyr at du betaler 10 kroner for hver krone selskapet tjener, eller at det tar 10 år å "tjene inn" investeringen gjennom overskudd (hvis overskuddet er stabilt).'
        },
        {
          id: '4-2-quiz-2',
          type: 'quiz',
          order: 22,
          question: 'Et selskap har P/E på 40 og betaler ikke utbytte. Hva slags selskap er dette sannsynligvis?',
          options: [
            'En moden bank med stabil inntjening',
            'Et vekstselskap der markedet forventer kraftig resultatvekst',
            'Et selskap i finansielle problemer',
            'Et eiendomsselskap'
          ],
          correctAnswer: 1,
          explanation: 'Høy P/E (40) og null utbytte er typisk for vekstselskaper. Investorer aksepterer høy pris i forhold til nåværende inntjening fordi de forventer at selskapet vil vokse kraftig. Pengene reinvesteres i vekst i stedet for å betales ut som utbytte.'
        },
        {
          id: '4-2-exercise',
          type: 'exercise',
          order: 23,
          title: 'Oppgave: Verdsett selskap X',
          description: 'Selskap X har følgende nøkkeltall:\n• Aksjekurs: 150 kr\n• Antall aksjer: 10 millioner\n• Årsresultat: 100 millioner kr\n• Bokført egenkapital: 800 millioner kr\n• Utbytte per aksje: 6 kr\n\nBeregn:\n1. Markedsverdi\n2. EPS (resultat per aksje)\n3. P/E\n4. P/B\n5. Direkteavkastning',
          hint: 'Start med markedsverdi = kurs × antall aksjer. EPS = resultat / antall aksjer.'
        },
        {
          id: '4-2-keypoint',
          type: 'keypoint',
          order: 24,
          points: [
            'Markedsverdi = Aksjekurs × Antall aksjer',
            'P/E viser hvor mye du betaler per krone i overskudd',
            'Lavt P/E kan indikere billig aksje (eller forventede problemer)',
            'Høyt P/E indikerer høye vekstforventninger',
            'Direkteavkastning måler løpende utbytteavkastning'
          ]
        },
        {
          id: '4-2-reflection',
          type: 'reflection',
          order: 25,
          question: 'To selskaper har samme P/E på 15, men det ene er en moden bank og det andre er et teknologiselskap. Er de like attraktive? Hva mer må du vurdere?'
        }
      ]
    },

    // ===================================
    // SEKSJON 4.3: Aksjemarkedets mekanikk
    // ===================================
    {
      id: 'seksjon-4-3-marked',
      title: 'Aksjemarkedets mekanikk',
      order: 3,
      content: [
        {
          id: '4-3-hook',
          type: 'text',
          order: 1,
          text: '**Klokken er 09:00. Børsen åpner. På millisekunder matches tusenvis av kjøps- og salgsordrer.** Men hvordan bestemmes egentlig aksjekursen? Og hvem er aktørene som kjøper og selger?',
          emphasis: 'important'
        },
        {
          id: '4-3-intro',
          type: 'text',
          order: 2,
          text: 'Å forstå hvordan aksjemarkedet fungerer gir deg en fordel som investor. Du skjønner hvorfor kursene beveger seg, hvordan du plasserer ordre, og hvilke kostnader som påvirker avkastningen din.'
        },
        {
          id: '4-3-heading-oslobors',
          type: 'heading',
          order: 3,
          level: 2,
          text: 'Oslo Børs – Norges aksjemarked'
        },
        {
          id: '4-3-text-oslobors',
          type: 'text',
          order: 4,
          text: 'Oslo Børs ble grunnlagt i 1819 og er Norges eneste regulerte markedsplass for aksjer. Den er nå del av Euronext, Europas største børsgruppe.'
        },
        {
          id: '4-3-table-marked',
          type: 'table',
          order: 5,
          headers: ['Marked', 'Beskrivelse', 'Antall selskaper'],
          rows: [
            ['Oslo Børs (hovedlisten)', 'Strenge krav, store selskaper', 'Ca. 170'],
            ['Euronext Expand', 'Lettere krav, mellomstore', 'Ca. 50'],
            ['Euronext Growth', 'Enkleste krav, småselskaper', 'Ca. 80'],
            ['NOTC', 'Unoterte aksjer, lav likviditet', 'Varierer']
          ]
        },
        {
          id: '4-3-text-aapningstid',
          type: 'text',
          order: 6,
          text: '**Åpningstider:**\n• Førhandel: 08:15-09:00 (ordreinnlegging)\n• Kontinuerlig handel: 09:00-16:20\n• Etterhandel: 16:20-16:30'
        },
        {
          id: '4-3-heading-prisdannelse',
          type: 'heading',
          order: 7,
          level: 2,
          text: 'Hvordan bestemmes aksjekursen?'
        },
        {
          id: '4-3-def-ordrebok',
          type: 'definition',
          order: 8,
          term: 'Ordrebok (Order Book)',
          definition: 'En oversikt over alle aktive kjøps- og salgsordrer for en aksje. Viser hvor mange aksjer som ønskes kjøpt/solgt til ulike priser.'
        },
        {
          id: '4-3-text-tilbud',
          type: 'text',
          order: 9,
          text: 'Aksjekursen bestemmes av tilbud og etterspørsel. Når en kjøper og en selger blir enige om pris, gjennomføres en handel, og denne prisen blir den nye kursen.'
        },
        {
          id: '4-3-table-ordrebok',
          type: 'table',
          order: 10,
          headers: ['Kjøpsordrer (Bid)', '', 'Salgsordrer (Ask)'],
          rows: [
            ['500 aksjer @ 99 kr', '←', '300 aksjer @ 100 kr'],
            ['1000 aksjer @ 98 kr', '', '800 aksjer @ 101 kr'],
            ['200 aksjer @ 97 kr', '', '400 aksjer @ 102 kr']
          ]
        },
        {
          id: '4-3-def-spread',
          type: 'definition',
          order: 11,
          term: 'Spread (Bid-Ask Spread)',
          definition: 'Forskjellen mellom høyeste kjøpspris (bid) og laveste salgspris (ask). En kostnad for investor. Trang spread = høy likviditet. Vid spread = lav likviditet.'
        },
        {
          id: '4-3-example-spread',
          type: 'example',
          order: 12,
          title: 'Spread i praksis',
          content: 'Equinor-aksjen:\n• Bid (kjøpspris): 279,80 kr\n• Ask (salgspris): 280,00 kr\n• Spread: 0,20 kr (0,07%)',
          calculation: '**Hva betyr dette?**\n\nHvis du vil kjøpe MÅ du betale 280 kr (ask).\nHvis du vil selge FÅR du bare 279,80 kr (bid).\n\nSpread = 0,07% er svært lavt (likvid aksje).\n\nFor en illikvid småaksje kan spread være 2-5% – da må kursen stige 5% bare for å gå i null!'
        },
        {
          id: '4-3-heading-ordretyper',
          type: 'heading',
          order: 13,
          level: 2,
          text: 'Ordretyper'
        },
        {
          id: '4-3-def-markedsordre',
          type: 'definition',
          order: 14,
          term: 'Markedsordre (Market Order)',
          definition: 'Kjøp/salg umiddelbart til beste tilgjengelige pris. Garantert gjennomføring, men ikke garantert pris.'
        },
        {
          id: '4-3-def-limitordre',
          type: 'definition',
          order: 15,
          term: 'Limitordre (Limit Order)',
          definition: 'Kjøp/salg kun til angitt pris eller bedre. Garantert pris (eller bedre), men ikke garantert gjennomføring.'
        },
        {
          id: '4-3-def-stoploss',
          type: 'definition',
          order: 16,
          term: 'Stop-loss ordre',
          definition: 'Automatisk salgsordre som utløses hvis kursen faller til et visst nivå. Brukes for å begrense tap.'
        },
        {
          id: '4-3-table-ordretyper',
          type: 'table',
          order: 17,
          headers: ['Type', 'Fordel', 'Ulempe', 'Bruk'],
          rows: [
            ['Markedsordre', 'Rask, garantert handel', 'Usikker pris', 'Når du MÅ handle NÅ'],
            ['Limitordre', 'Kontroll på pris', 'Kanskje ikke fylt', 'Normal trading'],
            ['Stop-loss', 'Automatisk risikostyring', 'Kan trigges av korte dipp', 'Beskytte mot store tap']
          ]
        },
        {
          id: '4-3-heading-indekser',
          type: 'heading',
          order: 18,
          level: 2,
          text: 'Aksjeindekser'
        },
        {
          id: '4-3-def-indeks',
          type: 'definition',
          order: 19,
          term: 'Aksjeindeks',
          definition: 'Et vektet gjennomsnitt av utvalgte aksjer som representerer et marked eller en sektor. Brukes som referanse (benchmark) for avkastning.'
        },
        {
          id: '4-3-table-indekser',
          type: 'table',
          order: 20,
          headers: ['Indeks', 'Hva den måler', 'Antall aksjer'],
          rows: [
            ['OSEBX (Oslo Børs Benchmark)', 'Norges hovedindeks', 'Ca. 65'],
            ['OBX', 'De 25 mest omsatte', '25'],
            ['OSESX', 'Småselskaper', 'Ca. 100'],
            ['S&P 500', 'USAs største selskaper', '500'],
            ['MSCI World', 'Globale utviklede markeder', 'Ca. 1500']
          ]
        },
        {
          id: '4-3-heading-kostnader',
          type: 'heading',
          order: 21,
          level: 2,
          text: 'Kostnader ved aksjehandel'
        },
        {
          id: '4-3-list-kostnader',
          type: 'list',
          order: 22,
          ordered: false,
          items: [
            '**Kurtasje:** Meglers gebyr per handel (typisk 0,03-0,15% eller minimumsbeløp)',
            '**Spread:** Forskjellen mellom kjøps- og salgskurs',
            '**Depotgebyr:** Årlig gebyr for å ha aksjer på konto (noen tilbydere)',
            '**Valutaveksling:** Ved handel i utenlandsk valuta',
            '**Forvaltningshonorar:** For fond (typisk 0,1-2% årlig)'
          ]
        },
        {
          id: '4-3-quiz-1',
          type: 'quiz',
          order: 23,
          question: 'Du legger inn en markedsordre for å kjøpe 100 aksjer. Hva skjer?',
          options: [
            'Ordren venter til kursen når din ønskede pris',
            'Ordren gjennomføres umiddelbart til beste tilgjengelige pris',
            'Ordren avvises hvis prisen har endret seg',
            'Ordren gjennomføres til gårsdagens sluttkurs'
          ],
          correctAnswer: 1,
          explanation: 'En markedsordre gjennomføres umiddelbart til beste tilgjengelige pris i ordreboken. Du får garantert handel, men ikke garantert pris – prisen kan ha endret seg siden du så den.'
        },
        {
          id: '4-3-quiz-2',
          type: 'quiz',
          order: 24,
          question: 'En aksje har bid 99 kr og ask 101 kr. Du kjøper og selger umiddelbart. Hva blir resultatet?',
          options: [
            'Du går i null',
            'Du tjener 2 kr per aksje',
            'Du taper 2 kr per aksje',
            'Det avhenger av markedsordre eller limitordre'
          ],
          correctAnswer: 2,
          explanation: 'Du må kjøpe til ask (101 kr) og selge til bid (99 kr). Spread = 2 kr tap per aksje. Dette illustrerer hvorfor spread er en skjult kostnad, og hvorfor likvide aksjer med lav spread er billigere å handle.'
        },
        {
          id: '4-3-exercise',
          type: 'exercise',
          order: 25,
          title: 'Oppgave: Beregn handelskostnader',
          description: 'Du vil kjøpe aksjer for 100 000 kr. Din megler tar 0,10% kurtasje per handel (minimum 39 kr).\n\n1. Hva blir kurtasjen ved kjøp?\n2. Hva blir total kurtasje for kjøp OG senere salg?\n3. Aksjen har spread på 0,3%. Hva koster spread-en deg?\n4. Hva må aksjen stige for at du går i pluss etter alle kostnader?',
          hint: 'Husk at du betaler kurtasje både ved kjøp og salg. Spread betaler du én gang (ved kjøp).'
        },
        {
          id: '4-3-keypoint',
          type: 'keypoint',
          order: 26,
          points: [
            'Oslo Børs er Norges hovedmarked med ca. 300 noterte selskaper',
            'Aksjekursen bestemmes av tilbud og etterspørsel i ordreboken',
            'Spread er en skjult kostnad – velg likvide aksjer',
            'Bruk limitordre for prisgaranti, markedsordre for hastighet',
            'OSEBX er Norges hovedindeks og måler "markedet"'
          ]
        },
        {
          id: '4-3-reflection',
          type: 'reflection',
          order: 27,
          question: 'Noen mener at hyppig trading (day trading) er en god måte å tjene penger på. Med tanke på kostnader som kurtasje og spread – hva tror du?'
        }
      ]
    },

    // ===================================
    // SEKSJON 4.4: Risiko og avkastning
    // ===================================
    {
      id: 'seksjon-4-4-risiko-avkastning',
      title: 'Risiko og avkastning',
      order: 4,
      content: [
        {
          id: '4-4-hook',
          type: 'text',
          order: 1,
          text: '**"Høy risiko = høy avkastning."** Alle har hørt det. Men hva betyr egentlig risiko? Hvordan måler vi den? Og er det alltid sant at mer risiko gir mer avkastning?',
          emphasis: 'important'
        },
        {
          id: '4-4-intro',
          type: 'text',
          order: 2,
          text: 'Forholdet mellom risiko og avkastning er kanskje det viktigste konseptet i finans. Å forstå det hjelper deg å ta bedre investeringsbeslutninger – og unngå å bli lurt av "for gode til å være sanne"-tilbud.'
        },
        {
          id: '4-4-heading-definisjon',
          type: 'heading',
          order: 3,
          level: 2,
          text: 'Hva er risiko?'
        },
        {
          id: '4-4-def-risiko',
          type: 'definition',
          order: 4,
          term: 'Risiko (i finans)',
          definition: 'Usikkerheten i fremtidig avkastning. Måles ofte som standardavvik (volatilitet) – hvor mye avkastningen svinger rundt gjennomsnittet.'
        },
        {
          id: '4-4-text-risikotyper',
          type: 'text',
          order: 5,
          text: 'I finansteori deler vi risiko i to hovedtyper:'
        },
        {
          id: '4-4-def-systematisk',
          type: 'definition',
          order: 6,
          term: 'Systematisk risiko (Markedsrisiko)',
          definition: 'Risiko som påvirker hele markedet: renter, inflasjon, resesjon, geopolitikk. KAN IKKE diversifiseres bort.'
        },
        {
          id: '4-4-def-usystematisk',
          type: 'definition',
          order: 7,
          term: 'Usystematisk risiko (Selskapsspesifikk)',
          definition: 'Risiko knyttet til enkeltselskaper: dårlig ledelse, produktfeil, konkurranse. KAN diversifiseres bort ved å eie mange aksjer.'
        },
        {
          id: '4-4-heading-volatilitet',
          type: 'heading',
          order: 8,
          level: 2,
          text: 'Volatilitet – risikomålet'
        },
        {
          id: '4-4-def-volatilitet',
          type: 'definition',
          order: 9,
          term: 'Volatilitet (Standardavvik)',
          definition: 'Et statistisk mål på hvor mye avkastningen varierer. Høy volatilitet = stor usikkerhet, kursen svinger mye. Lav volatilitet = mer stabil kursutvikling.'
        },
        {
          id: '4-4-table-volatilitet',
          type: 'table',
          order: 10,
          headers: ['Aktivaklasse', 'Typisk årlig volatilitet', 'Forventet avkastning'],
          rows: [
            ['Bankkonto', '0%', '2-4%'],
            ['Statsobligasjoner', '3-5%', '3-5%'],
            ['Foretaksobligasjoner', '5-10%', '4-7%'],
            ['Aksjer (diversifisert)', '15-20%', '7-10%'],
            ['Enkeltaksjer', '25-50%', 'Varierer sterkt'],
            ['Kryptovaluta', '60-100%', 'Svært usikkert']
          ]
        },
        {
          id: '4-4-example-volatilitet',
          type: 'example',
          order: 11,
          title: 'Hva betyr 20% volatilitet?',
          content: 'En aksje har forventet avkastning 8% og volatilitet 20%.',
          calculation: '**Med normalfordeling (tommelfingerregel):**\n\nCa. 68% av tiden: Avkastning mellom -12% og +28%\n(8% ± 20%)\n\nCa. 95% av tiden: Avkastning mellom -32% og +48%\n(8% ± 2×20%)\n\n**I praksis:** Du må være forberedt på at aksjen kan falle 30%+ i et dårlig år, selv om langsiktig forventning er positiv.'
        },
        {
          id: '4-4-heading-risikopremie',
          type: 'heading',
          order: 12,
          level: 2,
          text: 'Risikopremien'
        },
        {
          id: '4-4-def-risikopremie',
          type: 'definition',
          order: 13,
          term: 'Risikopremie (Equity Risk Premium)',
          definition: 'Meravkastningen investorer krever for å investere i risikable aksjer fremfor risikofrie statsobligasjoner. Historisk ca. 4-6% per år.'
        },
        {
          id: '4-4-formula-capm',
          type: 'formula',
          order: 14,
          formula: 'Forventet avkastning = Risikofri rente + β × Markedets risikopremie',
          description: 'CAPM (Capital Asset Pricing Model):\n• β (beta) måler aksjens følsomhet for markedsbevegelser\n• β = 1: Følger markedet\n• β > 1: Mer volatil enn markedet\n• β < 1: Mindre volatil enn markedet'
        },
        {
          id: '4-4-table-beta',
          type: 'table',
          order: 15,
          headers: ['Beta', 'Betydning', 'Eksempel'],
          rows: [
            ['β = 0,5', 'Halvparten så volatil som markedet', 'Forsyningsselskaper, konsum'],
            ['β = 1,0', 'Følger markedet', 'Diversifisert fond'],
            ['β = 1,5', '50% mer volatil enn markedet', 'Teknologi, finance'],
            ['β = 2,0', 'Dobbelt så volatil', 'Høyrisiko vekstaksjer']
          ]
        },
        {
          id: '4-4-heading-diversifisering',
          type: 'heading',
          order: 16,
          level: 2,
          text: 'Diversifisering – den eneste "gratis lunsjen"'
        },
        {
          id: '4-4-text-diversifisering',
          type: 'text',
          order: 17,
          text: 'Nobelprisvinner Harry Markowitz kalte diversifisering "den eneste gratis lunsjen i finans". Ved å spre investeringene på mange aksjer, kan du redusere risiko UTEN å redusere forventet avkastning.'
        },
        {
          id: '4-4-list-diversifisering',
          type: 'list',
          order: 18,
          ordered: false,
          items: [
            '**1 aksje:** Svært høy usystematisk risiko',
            '**10 aksjer:** Risikoen reduseres betydelig',
            '**30+ aksjer:** Det meste av usystematisk risiko er borte',
            '**100+ aksjer:** Kun systematisk (markeds)risiko gjenstår'
          ]
        },
        {
          id: '4-4-example-diversifisering',
          type: 'example',
          order: 19,
          title: 'Effekten av diversifisering',
          content: 'Du har 100 000 kr å investere.',
          calculation: '**Alternativ A: Alt i én aksje (f.eks. Norwegian)**\n• Forventet avkastning: 10%\n• Volatilitet: 50%\n• Risiko: Selskapet kan gå konkurs → 100% tap\n\n**Alternativ B: Spredt på 30 aksjer (indeksfond)**\n• Forventet avkastning: 8%\n• Volatilitet: 18%\n• Risiko: Markedet kan falle, men total konkurs umulig\n\n**Konklusjon:** Ved diversifisering "bytter" du litt forventet avkastning mot mye lavere risiko.'
        },
        {
          id: '4-4-heading-historisk',
          type: 'heading',
          order: 20,
          level: 2,
          text: 'Historisk avkastning'
        },
        {
          id: '4-4-table-historisk',
          type: 'table',
          order: 21,
          headers: ['Aktivaklasse', '10 år', '30 år', 'Verste år'],
          rows: [
            ['Oslo Børs (OSEBX)', '8,5% p.a.', '9,2% p.a.', '-54% (2008)'],
            ['Globale aksjer (MSCI)', '9,8% p.a.', '8,5% p.a.', '-40% (2008)'],
            ['Norske obligasjoner', '3,2% p.a.', '5,1% p.a.', '-5% (2022)'],
            ['Inflasjon (Norge)', '2,8% p.a.', '2,2% p.a.', '7% (2022)']
          ]
        },
        {
          id: '4-4-text-historisk',
          type: 'text',
          order: 22,
          text: '**Viktig:** Historisk avkastning er ingen garanti for fremtiden! Men over lange perioder (20-30+ år) har aksjer konsistent slått obligasjoner og inflasjon.',
          emphasis: 'warning'
        },
        {
          id: '4-4-quiz-1',
          type: 'quiz',
          order: 23,
          question: 'Hvilken type risiko kan du eliminere ved å diversifisere?',
          options: [
            'Systematisk risiko (markedsrisiko)',
            'Usystematisk risiko (selskapsspesifikk)',
            'Begge typer',
            'Ingen av typene'
          ],
          correctAnswer: 1,
          explanation: 'Usystematisk (selskapsspesifikk) risiko kan diversifiseres bort ved å eie mange aksjer. Systematisk risiko påvirker hele markedet og kan ikke fjernes gjennom diversifisering – kun reduseres ved å ha andre aktivaklasser som obligasjoner.'
        },
        {
          id: '4-4-quiz-2',
          type: 'quiz',
          order: 24,
          question: 'En aksje har beta = 1,5. Markedet faller 10%. Hva forventes aksjen å falle?',
          options: [
            '5%',
            '10%',
            '15%',
            '20%'
          ],
          correctAnswer: 2,
          explanation: 'Beta måler følsomhet for markedsbevegelser. Med β = 1,5 beveger aksjen seg 1,5 ganger så mye som markedet. Markedet faller 10% → Aksjen forventes å falle 10% × 1,5 = 15%.'
        },
        {
          id: '4-4-exercise',
          type: 'exercise',
          order: 25,
          title: 'Oppgave: Forventet avkastning med CAPM',
          description: 'Bruk CAPM til å beregne forventet avkastning:\n\n• Risikofri rente: 4%\n• Markedets risikopremie: 5%\n• Aksjens beta: 1,2\n\n1. Hva er forventet avkastning for aksjen?\n2. Hvis aksjen har beta 0,8 i stedet, hva blir forventet avkastning?\n3. Hvorfor gir høyere beta høyere forventet avkastning?',
          hint: 'Formel: E(r) = Rf + β × (Rm - Rf) der Rf = risikofri rente og (Rm - Rf) = risikopremien.'
        },
        {
          id: '4-4-keypoint',
          type: 'keypoint',
          order: 26,
          points: [
            'Risiko måles med volatilitet (standardavvik)',
            'Systematisk risiko kan ikke diversifiseres bort',
            'Diversifisering fjerner selskapsspesifikk risiko "gratis"',
            'Beta måler aksjens følsomhet for markedsbevegelser',
            'Historisk har aksjer gitt 7-10% årlig, men med store svingninger'
          ]
        },
        {
          id: '4-4-reflection',
          type: 'reflection',
          order: 27,
          question: 'Hva er din personlige risikotoleranse? Kunne du sett porteføljen din falle 30% uten å panikk-selge? Eller ville du ligget våken om natten?'
        },
        {
          id: '4-4-interactive-capm-sml',
          type: 'interactive-model',
          order: 28,
          modelType: 'capm-sml',
          title: 'Interaktiv CAPM og Verdipapirmarkedslinjen (SML)',
          description: 'Utforsk Capital Asset Pricing Model og se hvordan forventet avkastning avhenger av beta og markedsforhold. Sammenlign en aksjens faktiske avkastning med SML for å finne alpha.',
          controls: [
            {
              key: 'riskFreeRate',
              label: 'Risikofri rente',
              type: 'slider',
              min: 0,
              max: 10,
              step: 0.25,
              default: 4,
              unit: '%',
              helpText: 'Renten på statsobligasjoner (f.eks. norske 10-års)'
            },
            {
              key: 'marketReturn',
              label: 'Markedsavkastning',
              type: 'slider',
              min: 0,
              max: 20,
              step: 0.5,
              default: 9,
              unit: '%',
              helpText: 'Forventet avkastning på markedsporteføljen'
            },
            {
              key: 'beta',
              label: 'Aksjens beta',
              type: 'slider',
              min: -0.5,
              max: 2.5,
              step: 0.1,
              default: 1.2,
              helpText: 'Aksjens følsomhet for markedsbevegelser'
            },
            {
              key: 'assetReturn',
              label: 'Faktisk avkastning',
              type: 'slider',
              min: 0,
              max: 25,
              step: 0.5,
              default: 12,
              unit: '%',
              helpText: 'Aksjens faktiske oppnådde avkastning'
            }
          ],
          outputs: [
            {
              key: 'expectedReturn',
              label: 'Forventet avkastning (CAPM)',
              unit: '%',
              precision: 2,
              highlight: true
            },
            {
              key: 'alpha',
              label: 'Alpha (meravkastning)',
              unit: '%',
              precision: 2
            },
            {
              key: 'marketPremium',
              label: 'Markedspremie',
              unit: '%',
              precision: 2
            },
            {
              key: 'sharpeRatio',
              label: 'Sharpe-ratio (marked)',
              precision: 2
            }
          ],
          charts: [
            {
              type: 'line',
              title: 'Verdipapirmarkedslinjen (SML)',
              xAxis: { key: 'beta', label: 'Beta', unit: '' },
              yAxis: { key: 'smlReturn', label: 'Forventet avkastning (%)', unit: '%' },
              series: [
                { key: 'smlReturn', name: 'SML', color: '#3b82f6' }
              ]
            }
          ],
          explanation: 'Verdipapirmarkedslinjen (SML) viser sammenhengen mellom systematisk risiko (beta) og forventet avkastning ifølge CAPM.\n\n**Tolkning av alpha:**\n• Positiv alpha (grønn prikk over linjen): Aksjen har gitt meravkastning – den er "billig"\n• Negativ alpha (rød prikk under linjen): Aksjen har underprestert – den er "dyr"\n\n**Tips:** Prøv å endre beta og se hvordan forventet avkastning endrer seg langs SML.'
        } as InteractiveModelContent
      ]
    },

    // ===================================
    // SEKSJON 4.5: Bærekraftige aksjer og ESG
    // ===================================
    {
      id: 'seksjon-4-5-esg',
      title: 'Bærekraftige aksjer og ESG',
      order: 5,
      content: [
        {
          id: '4-5-hook',
          type: 'text',
          order: 1,
          text: '**Kan du tjene penger OG gjøre verden bedre?** ESG-investering lover begge deler. Men hva betyr egentlig E, S og G? Og fungerer det – eller er det bare markedsføring?',
          emphasis: 'important'
        },
        {
          id: '4-5-intro',
          type: 'text',
          order: 2,
          text: 'Bærekraftig investering har gått fra nisje til mainstream på få år. Oljefondet, Norges største investor, har ESG-kriterier. Det samme har de fleste store fond. Men hva innebærer det konkret?'
        },
        {
          id: '4-5-heading-esg',
          type: 'heading',
          order: 3,
          level: 2,
          text: 'Hva er ESG?'
        },
        {
          id: '4-5-def-esg',
          type: 'definition',
          order: 4,
          term: 'ESG (Environmental, Social, Governance)',
          definition: 'Et rammeverk for å vurdere selskapers bærekraft basert på miljømessige, sosiale og styringsmessige faktorer – utover tradisjonell finansiell analyse.'
        },
        {
          id: '4-5-table-esg',
          type: 'table',
          order: 5,
          headers: ['Bokstav', 'Kategori', 'Eksempler på faktorer'],
          rows: [
            ['E', 'Environmental (Miljø)', 'Klimautslipp, energieffektivitet, avfall, biologisk mangfold'],
            ['S', 'Social (Sosiale forhold)', 'Arbeidstakerrettigheter, helse og sikkerhet, mangfold, leverandørkjede'],
            ['G', 'Governance (Selskapsstyring)', 'Styresammensetning, lederlønn, antikorrupsjon, aksjonærrettigheter']
          ]
        },
        {
          id: '4-5-heading-strategier',
          type: 'heading',
          order: 6,
          level: 2,
          text: 'ESG-investeringsstrategier'
        },
        {
          id: '4-5-def-ekskludering',
          type: 'definition',
          order: 7,
          term: 'Negativ screening / Ekskludering',
          definition: 'Utelukke selskaper basert på bransje (tobakk, våpen, gambling) eller atferd (menneskerettighetsbrudd). Enkleste formen for ESG.'
        },
        {
          id: '4-5-def-bestiklasse',
          type: 'definition',
          order: 8,
          term: 'Best-in-class',
          definition: 'Investere i de beste ESG-selskapene innenfor hver bransje. Kan inkludere olje hvis selskapet er "beste" oljeselskap på ESG.'
        },
        {
          id: '4-5-def-impact',
          type: 'definition',
          order: 9,
          term: 'Impact investing',
          definition: 'Investere for å oppnå målbar positiv sosial/miljømessig effekt, i tillegg til finansiell avkastning. Mest ambisiøse ESG-strategien.'
        },
        {
          id: '4-5-def-engagement',
          type: 'definition',
          order: 10,
          term: 'Aktivt eierskap / Engagement',
          definition: 'Bruke aksjonærrettigheter til å påvirke selskaper i mer bærekraftig retning gjennom dialog, stemmegivning og aksjonærforslag.'
        },
        {
          id: '4-5-heading-oljefondet',
          type: 'heading',
          order: 11,
          level: 2,
          text: 'Oljefondet – Norges ESG-lokomotiv'
        },
        {
          id: '4-5-text-oljefondet',
          type: 'text',
          order: 12,
          text: 'Statens pensjonsfond utland (Oljefondet) er verdens største statlige investeringsfond og en global leder på ESG:'
        },
        {
          id: '4-5-list-oljefondet',
          type: 'list',
          order: 13,
          ordered: false,
          items: [
            '**Størrelse:** Over 15 000 milliarder kr (ca. 1,5% av verdens børsnoterte aksjer)',
            '**Eksklusjoner:** Har ekskludert 100+ selskaper (tobakk, våpen, kull, alvorlige miljøbrudd)',
            '**Stemmegivning:** Stemmer på tusenvis av generalforsamlinger årlig',
            '**Forventningsdokumenter:** Publiserer forventninger til selskaper om klima, menneskerettigheter mm.',
            '**Transparens:** Alt offentlig – du kan se alle investeringer og eksklusjoner'
          ]
        },
        {
          id: '4-5-example-oljefondet',
          type: 'example',
          order: 14,
          title: 'Oljefondets eksklusjoner',
          content: 'Noen selskaper Oljefondet har ekskludert (per 2024):',
          calculation: '**Produktbasert:**\n• Philip Morris (tobakk)\n• Lockheed Martin (kjernevåpen)\n• RWE (> 30% kull)\n\n**Atferdsbasert:**\n• Walmart (arbeidsforhold i leverandørkjede)\n• Rio Tinto (miljøskade)\n• Tekstilselskaper (barnearbeid)\n\n**Totalt:** Ca. 180 selskaper ekskludert, verdi ca. 100 mrd kr'
        },
        {
          id: '4-5-heading-rating',
          type: 'heading',
          order: 15,
          level: 2,
          text: 'ESG-rating'
        },
        {
          id: '4-5-text-rating',
          type: 'text',
          order: 16,
          text: 'Flere selskaper gir ESG-rating til bedrifter, tilsvarende kredittrating for obligasjoner:'
        },
        {
          id: '4-5-table-ratingbyraaer',
          type: 'table',
          order: 17,
          headers: ['Byrå', 'Skala', 'Fokus'],
          rows: [
            ['MSCI ESG', 'AAA til CCC', 'Bred ESG-vurdering'],
            ['Sustainalytics', 'Negligible til Severe risk', 'Risikofokusert'],
            ['CDP', 'A til F', 'Klima spesifikt'],
            ['ISS ESG', 'A+ til D-', 'Governance-fokus']
          ]
        },
        {
          id: '4-5-text-utfordringer',
          type: 'text',
          order: 18,
          text: '**Utfordring:** Ulike ratingbyråer kan gi svært forskjellig score til samme selskap! Det finnes ingen universell standard for ESG-måling.',
          emphasis: 'warning'
        },
        {
          id: '4-5-heading-avkastning',
          type: 'heading',
          order: 19,
          level: 2,
          text: 'ESG og avkastning – hva sier forskningen?'
        },
        {
          id: '4-5-list-forskning',
          type: 'list',
          order: 20,
          ordered: false,
          items: [
            '**Nøytral til positiv:** Mest forskning viser at ESG-fond presterer likt eller bedre enn tradisjonelle fond',
            '**Risikobuffer:** Selskaper med høy ESG-score ser ut til å falle mindre i kriser',
            '**Langsiktig verdi:** God governance (G) korrelerer sterkest med avkastning',
            '**Ikke garantert:** ESG er ingen garanti for meravkastning – diversifisering gjelder fortsatt'
          ]
        },
        {
          id: '4-5-heading-gronnvasking',
          type: 'heading',
          order: 21,
          level: 2,
          text: 'Grønnvasking i aksjemarkedet'
        },
        {
          id: '4-5-def-gronnvasking',
          type: 'definition',
          order: 22,
          term: 'Grønnvasking (Greenwashing)',
          definition: 'Når selskaper eller fond gir et overdrevent eller misvisende inntrykk av å være miljøvennlige for å tiltrekke ESG-bevisste investorer.'
        },
        {
          id: '4-5-list-gronnvasking',
          type: 'list',
          order: 23,
          ordered: false,
          items: [
            '**"Grønne" fond med olje:** Fond som kaller seg bærekraftige, men eier oljeselskaper',
            '**Selektiv rapportering:** Fremheve positive miljøtiltak, skjule negative',
            '**Vage løfter:** "Vi jobber med bærekraft" uten konkrete mål',
            '**Carbon offsets:** Kjøpe klimakvoter i stedet for å kutte utslipp'
          ]
        },
        {
          id: '4-5-text-eu',
          type: 'text',
          order: 24,
          text: '**EU-taksonomien** (fra 2022) og **SFDR** (Sustainable Finance Disclosure Regulation) skal bekjempe grønnvasking ved å kreve standardisert rapportering og definere hva som faktisk er "grønt".'
        },
        {
          id: '4-5-quiz-1',
          type: 'quiz',
          order: 25,
          question: 'Hva står "G" for i ESG?',
          options: [
            'Green (Grønn)',
            'Governance (Selskapsstyring)',
            'Growth (Vekst)',
            'Global'
          ],
          correctAnswer: 1,
          explanation: 'G står for Governance – selskapsstyring. Dette inkluderer faktorer som styresammensetning, lederlønn, antikorrupsjon og aksjonærrettigheter. God governance korrelerer ofte sterkest med finansiell avkastning.'
        },
        {
          id: '4-5-quiz-2',
          type: 'quiz',
          order: 26,
          question: 'Oljefondet ekskluderer selskaper basert på hvilke kriterier?',
          options: [
            'Kun klimagassutslipp',
            'Kun avkastning',
            'Produktbasert (tobakk, våpen) og atferdsbasert (menneskerettigheter, miljøskade)',
            'Kun norske selskapers konkurrenter'
          ],
          correctAnswer: 2,
          explanation: 'Oljefondet bruker to hovedkriterier: Produktbasert eksklusjon (tobakk, visse våpen, kull) og atferdsbasert eksklusjon (alvorlige brudd på menneskerettigheter, miljø, korrupsjon). Etikkrådet vurderer sakene.'
        },
        {
          id: '4-5-exercise',
          type: 'exercise',
          order: 27,
          title: 'Oppgave: Vurder et selskaps ESG-profil',
          description: 'Velg et børsnotert selskap du kjenner til (f.eks. Equinor, Telenor, Mowi).\n\n1. Hvilke ESG-utfordringer tror du selskapet har innen E, S og G?\n2. Hva gjør selskapet bra på ESG?\n3. Søk opp selskapets bærekraftsrapport – hva rapporterer de om utslipp?\n4. Ville du investert i dette selskapet ut fra ESG-kriterier?',
          hint: 'De fleste børsnoterte selskaper publiserer årlige bærekraftsrapporter på sine nettsider.'
        },
        {
          id: '4-5-heading-oppsummering',
          type: 'heading',
          order: 28,
          level: 2,
          text: 'Oppsummering av Modul 4'
        },
        {
          id: '4-5-text-oppsummering',
          type: 'text',
          order: 29,
          text: 'Du har nå en solid forståelse av aksjer – fra grunnleggende eierskap til avanserte verdsettelsesmultipler og ESG-vurderinger. I neste modul skal vi se hvordan du kombinerer aksjer og obligasjoner i en balansert portefølje.'
        },
        {
          id: '4-5-keypoint',
          type: 'keypoint',
          order: 30,
          points: [
            'ESG = Environmental, Social, Governance',
            'Strategier: ekskludering, best-in-class, impact investing, aktivt eierskap',
            'Oljefondet er en global ESG-leder med 180+ eksklusjoner',
            'ESG-rating varierer mellom byråer – ingen universell standard',
            'Forskning viser nøytral til positiv effekt av ESG på avkastning',
            'Vær oppmerksom på grønnvasking – sjekk hva fond faktisk eier'
          ]
        },
        {
          id: '4-5-reflection',
          type: 'reflection',
          order: 31,
          question: 'Er det investorenes ansvar å "redde verden" gjennom ESG, eller bør det overlates til politikere og regulering? Hva er din mening?'
        }
      ]
    },
    {
      id: 'seksjon-4-6-oppgaver',
      title: 'Regneoppgaver',
      order: 6,
      content: [
        {
          id: '4-6-intro',
          type: 'text',
          order: 1,
          text: 'Test dine ferdigheter med disse regneoppgavene om aksjeprising. Oppgavene dekker dividendemodellen, P/E-multipler, ROE, PVGO og andre sentrale konsepter fra modulen. Klikk på en oppgave for å se oppgaveteksten, og bruk "Vis fasit"-knappen når du vil sjekke svaret ditt.'
        },
        {
          id: '4-6-exerciseset',
          type: 'exerciseset',
          order: 2,
          exerciseSetId: 'oppgavesett-aksjer'
        }
      ]
    }
  ],
  moduleQuiz: {
    id: 'modul-4-aksjer-quiz',
    title: 'Modulquiz: Aksjer og Eierskap',
    description: 'Test din forståelse av aksjeverdsettelse, avkastning og ESG. Du trenger minst 90% riktig for å bestå.',
    passingScore: 90,
    questions: [
      {
        id: 'q5-1',
        question: 'Hva er hovedforskjellen mellom en aksje og en obligasjon?',
        options: [
          'Aksjer er tryggere enn obligasjoner',
          'Med aksjer er du eier, med obligasjoner er du kreditor',
          'Obligasjoner gir høyere avkastning enn aksjer',
          'Aksjer har fast avkastning, obligasjoner har variabel'
        ],
        correctAnswer: 1,
        explanation: 'Med aksjer blir du medeier i selskapet med rett til utbytte og potensielt kursgevinst. Med obligasjoner låner du penger og får faste rentebetalinger.'
      },
      {
        id: 'q5-2',
        question: 'Hva måler P/E-multipelen?',
        options: [
          'Prisen på aksjen dividert med egenkapitalen',
          'Prisen på aksjen dividert med forventet fremtidig inntjening',
          'Aksjekursen dividert med resultat per aksje',
          'Profittmargin per aksje'
        ],
        correctAnswer: 2,
        explanation: 'P/E = Aksjekurs / Resultat per aksje. Det viser hvor mye investorer betaler for hver krone i overskudd.'
      },
      {
        id: 'q5-3',
        question: 'Et selskap har P/E på 25 mens bransjegjennomsnittet er 15. Hva kan dette bety?',
        options: [
          'Aksjen er garantert overpriset og bør selges',
          'Markedet forventer høyere vekst eller aksjen kan være overpriset',
          'Selskapet har høyere risiko enn konkurrentene',
          'Selskapet betaler mer utbytte'
        ],
        correctAnswer: 1,
        explanation: 'Høy P/E kan indikere at markedet forventer høy fremtidig vekst. Alternativt kan aksjen være overpriset. Man må analysere nærmere.'
      },
      {
        id: 'q5-4',
        question: 'Hva er utbytteavkastning (dividend yield)?',
        options: [
          'Hvor mye selskapet totalt betaler i utbytte',
          'Utbytte per aksje dividert med aksjekursen',
          'Prosentandelen av overskuddet som betales ut',
          'Avkastningen på selskapets egenkapital'
        ],
        correctAnswer: 1,
        explanation: 'Utbytteavkastning = Utbytte per aksje / Aksjekurs. Det viser hvor stor årlig avkastning du får gjennom utbytte alene.'
      },
      {
        id: 'q5-5',
        question: 'Hva er Gordon Growth Model?',
        options: [
          'En modell for å beregne obligasjonspriser',
          'En modell for å finne aksjeverdien basert på fremtidige utbytter',
          'En modell for å beregne selskapets vekstrate',
          'En modell for porteføljeoptimering'
        ],
        correctAnswer: 1,
        explanation: 'Gordon Growth Model: P = D₁/(r-g), der D₁ er neste års utbytte, r er avkastningskrav og g er vekstrate. Den verdsetter aksjer basert på nåverdien av fremtidige utbytter.'
      },
      {
        id: 'q5-6',
        question: 'Hva er forskjellen mellom A- og B-aksjer i norske selskaper?',
        options: [
          'A-aksjer koster mer enn B-aksjer',
          'A-aksjer har ofte stemmerett, B-aksjer har ikke (eller mindre)',
          'B-aksjer gir høyere utbytte',
          'A-aksjer kan bare eies av nordmenn'
        ],
        correctAnswer: 1,
        explanation: 'Mange norske selskaper har aksjerklasser der A-aksjer har stemmerett og B-aksjer har begrenset eller ingen stemmerett, men ofte rett til samme utbytte.'
      },
      {
        id: 'q5-7',
        question: 'Hva er markedseffisienshypotesen?',
        options: [
          'Markeder er alltid perfekt effisiente',
          'Aksjekurser reflekterer all tilgjengelig informasjon',
          'Det er umulig å tape penger på aksjer',
          'Alle investorer har tilgang til innsideinformasjon'
        ],
        correctAnswer: 1,
        explanation: 'Markedseffisienshypotesen sier at aksjekurser til enhver tid reflekterer all tilgjengelig informasjon, noe som gjør det vanskelig å systematisk slå markedet.'
      },
      {
        id: 'q5-8',
        question: 'Hva er totalavkastning på en aksje?',
        options: [
          'Bare kursgevinsten',
          'Bare utbyttet',
          'Kursgevinst pluss utbytte',
          'Kursgevinst minus transaksjonskostnader'
        ],
        correctAnswer: 2,
        explanation: 'Totalavkastning = Kursgevinst + Utbytte. Begge deler bidrar til investorens avkastning.'
      },
      {
        id: 'q5-9',
        question: 'Hva står ESG for?',
        options: [
          'Equity, Stocks, Gains',
          'Environmental, Social, Governance',
          'Economic, Strategic, Growth',
          'Earnings, Sustainability, Goals'
        ],
        correctAnswer: 1,
        explanation: 'ESG står for Environmental (miljø), Social (sosiale forhold) og Governance (selskapsstyring). Det er et rammeverk for bærekraftig investering.'
      },
      {
        id: 'q5-10',
        question: 'Hva er P/B-multipelen (Price-to-Book)?',
        options: [
          'Aksjekurs dividert med bokført egenkapital per aksje',
          'Prisen på obligasjoner',
          'Resultat dividert med bokført verdi',
          'Utbytte dividert med egenkapital'
        ],
        correctAnswer: 0,
        explanation: 'P/B = Aksjekurs / Bokført egenkapital per aksje. En P/B under 1 kan indikere at aksjen er underpriset, mens høy P/B kan indikere vekstforventninger.'
      },
      {
        id: 'q5-11',
        question: 'Hvorfor er det viktig å bruke flere multipler ved verdsettelse?',
        options: [
          'Fordi én multippel alltid gir feil svar',
          'Fordi det ser mer profesjonelt ut',
          'Fordi ulike multipler fanger ulike aspekter og gir et helhetsbilde',
          'Fordi det er lovpålagt'
        ],
        correctAnswer: 2,
        explanation: 'Ulike multipler belyser forskjellige aspekter - P/E viser inntjening, P/B viser formue, EV/EBITDA viser driftsverdi. Sammen gir de et mer komplett bilde.'
      },
      {
        id: 'q5-12',
        question: 'Hva er "grønnvasking" i investeringssammenheng?',
        options: [
          'Å investere kun i grønne selskaper',
          'Når fond markedsfører seg som bærekraftige uten å faktisk være det',
          'Å vaske aksjer for å øke verdien',
          'En type miljøskatt på investeringer'
        ],
        correctAnswer: 1,
        explanation: 'Grønnvasking er når selskaper eller fond fremstiller seg som mer miljøvennlige enn de faktisk er. Det er viktig å sjekke hva fond faktisk investerer i.'
      }
    ]
  }
};
