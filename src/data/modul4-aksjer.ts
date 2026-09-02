import { Module, InteractiveModelContent, PresentationContent } from '../types/course';

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
    // SEKSJON: Forelesningsslides
    // ===================================
    {
      id: 'aksjer-forelesningsslides',
      title: 'Forelesningsslides',
      icon: '🎓',
      order: 0,
      content: [
        {
          id: 'aksjer-pres',
          type: 'presentation',
          order: 1,
          title: 'Forelesningsslides: Aksjer og verdsettelse',
          description: 'Slides fra klasseromsforelesningene om aksjer. Tre deler som dekker hva aksjer er, dividendemodellen for verdsettelse, og nøkkeltallsanalyse (P/E, ROE, PVGO).',
          slides: [
            { title: 'Hva er aksjer?', filename: 'Forelesning7_Aksjer_HvaErAksjer_2026.html' },
            { title: 'Dividendemodellen', filename: 'Forelesning8_Aksjer_Dividendemodellen_2026.html' },
            { title: 'P/E, ROE og PVGO', filename: 'Forelesning9_Aksjer_PEROEPVGO_2026.html' }
          ]
        } as PresentationContent
      ]
    },
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
          formula: '$$\\text{P/E} = \\dfrac{\\text{Aksjekurs}}{\\text{EPS}} = \\dfrac{\\text{Markedsverdi}}{\\text{Årsresultat}}$$',
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
          formula: '$$\\text{P/B} = \\dfrac{\\text{Aksjekurs}}{\\text{Egenkapital per aksje}}$$',
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
          formula: '$$\\text{Direkteavkastning} = \\dfrac{\\text{Utbytte per aksje}}{\\text{Aksjekurs}} \\times 100\\%$$',
          description: 'Eksempel: Utbytte 10 kr, kurs 200 kr → Direkteavkastning = 10/200 = 5%'
        },
        {
          id: '4-2-def-ev-ebitda',
          type: 'definition',
          order: 15.5,
          term: 'EV/EBITDA',
          definition: 'Enterprise Value (markedsverdi av egenkapital + netto gjeld) delt på EBITDA (driftsresultat før av- og nedskrivninger). Viser hvor mange års driftsresultat som kreves for å kjøpe HELE selskapet inkludert gjeld. I motsetning til P/E – som bare gjelder egenkapitalen – kan EV/EBITDA sammenligne selskaper med ulik gjeldsgrad.'
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
          formula: '$$\\text{Verdi} = \\sum_{t=1}^{n} \\dfrac{FCF_t}{(1+r)^t} + \\dfrac{\\text{Terminalverdi}}{(1+r)^n}$$',
          description: 'FCF = Fri kontantstrøm i år t\nr = Avkastningskrav (diskonteringsrente)\nTerminalverdi = Verdi av alle kontantstrømmer etter prognoseperioden'
        },
        {
          id: '4-2-text-dcf',
          type: 'text',
          order: 19,
          text: 'DCF er samme konsept som obligasjonsprising (nåverdi av fremtidige betalinger), men for aksjer må du *estimere* fremtidige kontantstrømmer – som er langt mer usikkert enn faste kupongbetalinger.'
        },
        {
          id: '4-2-text-multipler-intro',
          type: 'text',
          order: 20,
          text: 'Her er multipler for noen norske selskaper (eksempeltall):'
        },
        {
          id: '4-2-table-multipler',
          type: 'table',
          order: 20.3,
          headers: ['Selskap', 'P/E', 'P/B', 'Dir.avk.'],
          rows: [
            ['Equinor', '8', '1,8', '4,5%'],
            ['DNB', '9', '1,1', '6,0%'],
            ['Telenor', '15', '2,5', '5,5%'],
            ['Mowi', '12', '2,0', '4,0%'],
            ['Kahoot', '45', '3,5', '0%']
          ]
        },
        {
          id: '4-2-text-multipler-tolk',
          type: 'text',
          order: 20.6,
          text: '**Tolkning:** Equinor og DNB har lavt P/E og høyt utbytte – typiske *verdiaksjer*. Kahoot har høyt P/E og null utbytte – en *vekstaksje* der markedet priser inn kraftig fremtidig vekst. Telenor ligger midt imellom.'
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
    // SEKSJON 4.2b: Dividendemodellen, ROE og PVGO
    // ===================================
    {
      id: 'seksjon-4-2b-dividendemodellen',
      title: 'Dividendemodellen, ROE og PVGO',
      icon: '💰',
      order: 2.5,
      content: [
        {
          id: '4-2b-laeringsmal',
          type: 'keypoint',
          order: 1,
          points: [
            'Forstå at en aksjes pris = nåverdien av alle fremtidige utbytter',
            'Bruke Gordon-modellen til å verdsette aksjer med konstant vekst',
            'Håndtere supernormal (to-stegs) vekst',
            'Knytte utbytte, EPS, ROE og vekst sammen',
            'Beregne og tolke PVGO – verdien av vekstmuligheter'
          ]
        },
        {
          id: '4-2b-heading-nv',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Aksjeprisen er nåverdien av fremtidige utbytter'
        },
        {
          id: '4-2b-text-nv',
          type: 'text',
          order: 3,
          text: 'Når du eier en aksje, får du to typer kontantstrømmer: **utbytte** så lenge du eier den, og en **salgspris** når du selger. Prisen du er villig til å betale i dag er nåverdien av disse:'
        },
        {
          id: '4-2b-formula-general',
          type: 'formula',
          order: 4,
          formula: '$$P_0 = \\sum_{t=1}^{T} \\dfrac{Div_t}{(1+r)^t} + \\dfrac{P_T}{(1+r)^T}$$',
          description: 'P₀ = pris i dag, Div_t = utbytte i år t, P_T = salgspris om T år, r = avkastningskravet.'
        },
        {
          id: '4-2b-text-collapse',
          type: 'text',
          order: 5,
          text: 'Men den som kjøper aksjen av deg om T år betaler også nåverdien av *sine* fremtidige utbytter. Kjeden kollapser: uansett hvor lenge du planlegger å eie aksjen, er prisen i dag lik nåverdien av **alle** fremtidige utbytter. Når $T \\to \\infty$ forsvinner salgsprisleddet:'
        },
        {
          id: '4-2b-formula-infinite',
          type: 'formula',
          order: 6,
          formula: '$$P_0 = \\sum_{t=1}^{\\infty} \\dfrac{Div_t}{(1+r)^t}$$',
          description: 'Aksjeprisen er nåverdien av alle fremtidige utbytter. Punktum.'
        },
        {
          id: '4-2b-example-1periode',
          type: 'example',
          order: 7,
          title: 'Eksempel: én periode (Starten AS)',
          content: 'Du forventer et utbytte på kr 2 om ett år, og at aksjekursen da vil være kr 14. Avkastningskravet ditt er 20%. Hva er det maksimale du bør betale i dag?',
          calculation: '$P_0 = \\dfrac{Div_1 + P_1}{1+r} = \\dfrac{2 + 14}{1{,}20} = \\dfrac{16}{1{,}20} = $ **kr 13,33**\n\nOmsettes aksjen for mindre enn 13,33 kr – kjøp. Mer – la være. (Beholder du aksjen i 2 eller 3 år i stedet, får du nøyaktig samme pris i dag – salgsprisen er jo også bare nåverdi av utbytter.)'
        },
        {
          id: '4-2b-heading-gordon',
          type: 'heading',
          order: 8,
          level: 2,
          text: 'Gordon-modellen: konstant vekst'
        },
        {
          id: '4-2b-def-gordon',
          type: 'definition',
          order: 9,
          term: 'Gordon-modellen (konstant vekst)',
          definition: 'Antar at utbyttet vokser med en fast rate g i all evighet. Da forenkles den uendelige summen (en voksende perpetuitet) til én enkel brøk. Dette er kursets viktigste formel for aksjeprising.'
        },
        {
          id: '4-2b-formula-gordon',
          type: 'formula',
          order: 10,
          formula: '$$P_0 = \\dfrac{Div_1}{r - g}$$',
          description: 'Div₁ = utbytte om ett år (= Div₀·(1+g)), r = avkastningskrav, g = konstant vekstrate. Krever r > g, ellers blir prisen uendelig.'
        },
        {
          id: '4-2b-example-gordon',
          type: 'example',
          order: 11,
          title: 'Eksempel: Gordon i bruk',
          content: 'Et selskap forventes å betale kr 4 i utbytte om ett år, deretter vokse 6% årlig. Avkastningskravet er 16%.',
          calculation: '**a) Pris i dag:**\n$P_0 = \\dfrac{Div_1}{r-g} = \\dfrac{4}{0{,}16 - 0{,}06} = \\dfrac{4}{0{,}10} = $ **kr 40**\n\n**b) Forventet pris om 4 år:**\n$P_4 = \\dfrac{Div_1(1+g)^4}{r-g} = \\dfrac{4 \\times 1{,}06^4}{0{,}10} = \\dfrac{5{,}05}{0{,}10} = $ **kr 50,50**\n\nPrisen vokser med samme rate som utbyttet (6% per år).'
        },
        {
          id: '4-2b-example-equinor',
          type: 'example',
          order: 12,
          title: 'Norsk eksempel: Equinor',
          content: 'Equinor betalte ~kr 19 per aksje i utbytte (2023). Anta 4% langsiktig vekst og et avkastningskrav på 10% (CAPM-basert).',
          calculation: '$P_0 = \\dfrac{19 \\times 1{,}04}{0{,}10 - 0{,}04} = \\dfrac{19{,}76}{0{,}06} \\approx $ **kr 329**\n\nFaktisk Equinor-kurs (2024) lå på ~270–320 kr – samme størrelsesorden. Men modellen er *svært* sensitiv for g og r: en liten endring gir stort utslag. Gordon gir en **plausibel** pris, ikke den «riktige» – bruk den som sanity-check mot markedet.'
        },
        {
          id: '4-2b-quiz-gordon',
          type: 'quiz',
          order: 13,
          question: 'En aksje har Div₁ = 10 kr, avkastningskrav 12% og konstant vekst 12%. Hva sier Gordon-modellen?',
          options: [
            'Prisen er kr 83,33',
            'Prisen er kr 100',
            'Modellen gjelder ikke – prisen blir uendelig når g = r',
            'Prisen er kr 0'
          ],
          correctAnswer: 2,
          explanation: 'Gordon krever r > g. Når g = r blir nevneren (r − g) = 0 og prisen uendelig – meningsløst. For selskaper som vokser fortere enn avkastningskravet må vi bruke supernormal (to-stegs) vekst.'
        },
        {
          id: '4-2b-heading-supernormal',
          type: 'heading',
          order: 14,
          level: 2,
          text: 'Supernormal vekst (to-stegs)'
        },
        {
          id: '4-2b-text-supernormal',
          type: 'text',
          order: 15,
          text: 'Mange selskaper vokser uregelmessig en periode før de «modnes» til stabil vekst. Da gjør vi det i to steg: (1) diskonter utbyttene i den uregelmessige perioden hver for seg, og (2) bruk Gordon på det første «normale» året for å finne en **terminalverdi**, som du så diskonterer tilbake.'
        },
        {
          id: '4-2b-example-supernormal',
          type: 'example',
          order: 16,
          title: 'Eksempel: to-stegs vekst (Oppgavesett 4, oppgave 4)',
          content: 'Alfa AS betaler kr 80 i utbytte hvert år de neste 5 årene. Deretter vokser utbyttet 4% årlig i all evighet. Avkastningskravet er 13%. Hva er aksjen verdt i dag?',
          calculation: '**Steg 1 – nåverdi av de 5 første utbyttene (annuitet):**\nPV = 80 × [1 − 1,13⁻⁵] / 0,13 = 80 × 3,517 = **281,4 kr**\n\n**Steg 2 – terminalverdi ved slutten av år 5** (Gordon på Div₆ = 80 × 1,04 = 83,2):\n$TV_5 = \\dfrac{83{,}2}{0{,}13 - 0{,}04} = \\dfrac{83{,}2}{0{,}09} = 924{,}4$ kr\n\nNåverdi av terminalverdien: 924,4 / 1,13⁵ = 924,4 / 1,842 = **501,8 kr**\n\n**Pris i dag:** 281,4 + 501,8 = **kr 783**'
        },
        {
          id: '4-2b-heading-r',
          type: 'heading',
          order: 17,
          level: 2,
          text: 'Avkastningskravet: direkteavkastning + kursvekst'
        },
        {
          id: '4-2b-text-r',
          type: 'text',
          order: 18,
          text: 'Snur vi Gordon-modellen, ser vi at avkastningskravet (den avkastningen investorene faktisk får) består av to deler: løpende utbytte pluss forventet kursstigning.'
        },
        {
          id: '4-2b-formula-r',
          type: 'formula',
          order: 19,
          formula: '$$r = \\underbrace{\\dfrac{Div_1}{P_0}}_{\\text{direkteavkastning}} + \\underbrace{g}_{\\text{kursvekst}}$$',
          description: 'Eier du aksjen fra eksempelet over (P₀ = 40, Div₁ = 4, g = 6%): r = 4/40 + 0,06 = 10% + 6% = 16%. Nøyaktig avkastningskravet vi startet med.'
        },
        {
          id: '4-2b-heading-roe',
          type: 'heading',
          order: 20,
          level: 2,
          text: 'EPS, utdelingsforhold og ROE'
        },
        {
          id: '4-2b-def-eps',
          type: 'definition',
          order: 21,
          term: 'EPS (fortjeneste per aksje)',
          definition: 'Resultat etter skatt delt på antall utestående aksjer. Viser hvor mye hver aksje «tjente» i perioden.'
        },
        {
          id: '4-2b-formula-eps',
          type: 'formula',
          order: 22,
          formula: '$$\\text{EPS} = \\dfrac{\\text{Resultat etter skatt}}{\\text{Antall aksjer}} \\qquad \\text{Utdelingsforhold} = \\dfrac{Div_1}{\\text{EPS}_1}$$',
          description: 'Utdelingsforholdet (payout ratio) er andelen av EPS som betales ut. Resten – (1 − utdelingsforhold) – beholdes og reinvesteres.'
        },
        {
          id: '4-2b-def-roe',
          type: 'definition',
          order: 23,
          term: 'ROE (egenkapitalrentabilitet)',
          definition: 'Resultat etter skatt delt på egenkapital. Måler hvor god selskapet er til å skape avkastning på eiernes kapital.'
        },
        {
          id: '4-2b-formula-g',
          type: 'formula',
          order: 24,
          formula: '$$g = (1 - \\text{utdelingsforhold}) \\times \\text{ROE}$$',
          description: 'Vekstraten kommer fra å beholde overskudd og reinvestere det til ROE-avkastning. Et selskap med 50% utdeling og 12% ROE vokser g = 0,5 × 12% = 6%. Vet du to av de tre (utdeling, ROE, g), finner du den tredje.'
        },
        {
          id: '4-2b-keypoint-verdi',
          type: 'keypoint',
          order: 25,
          points: [
            'ROE > r: reinvesteringene skaper verdi – vekst er bra',
            'ROE = r: verdinøytralt',
            'ROE < r: vekst ØDELEGGER verdi – selskapet burde heller betale mer utbytte',
            'Vekst er altså ikke alltid bra – det avhenger av ROE vs. avkastningskravet'
          ]
        },
        {
          id: '4-2b-heading-pvgo',
          type: 'heading',
          order: 26,
          level: 2,
          text: 'PVGO – nåverdien av vekstmuligheter'
        },
        {
          id: '4-2b-text-pvgo',
          type: 'text',
          order: 27,
          text: 'Et selskap som betaler ut hele overskuddet ($g = 0$) er bare en perpetuitet verdt $EPS_1/r$. Har selskapet i tillegg gode investeringsmuligheter, er aksjen verdt mer. Denne ekstraverdien kaller vi **PVGO**.'
        },
        {
          id: '4-2b-formula-pvgo',
          type: 'formula',
          order: 28,
          formula: '$$P_0 = \\dfrac{\\text{EPS}_1}{r} + \\text{PVGO} \\qquad \\Rightarrow \\qquad \\text{PVGO} = P_0 - \\dfrac{\\text{EPS}_1}{r}$$',
          description: 'PVGO kan være positiv (verdiskapende vekst), null (verdinøytral) eller negativ (verdi-ødeleggende reinvestering).'
        },
        {
          id: '4-2b-example-pvgo',
          type: 'example',
          order: 29,
          title: 'Eksempel: positiv vs. negativ PVGO',
          content: 'To aksjer har begge EPS₁ = 4 kr og avkastningskrav 10%. «Ikke-vekst»-prisen ville vært EPS₁/r = 4/0,10 = 40 kr.',
          calculation: '**Aksje A – pris 50 kr:**\nPVGO = 50 − 40 = **+10 kr**. Markedet betaler 10 kr ekstra for forventet verdiskapende vekst (20% av verdien kommer fra vekst).\n\n**Aksje B – pris 30 kr:**\nPVGO = 30 − 40 = **−10 kr**. Markedet «straffer» selskapet: reinvesteringene ødelegger verdi (ROE < r). Aktivistinvestorer ville presset på for høyere utbytte.'
        },
        {
          id: '4-2b-example-alt',
          type: 'example',
          order: 30,
          title: 'Alt sammen (Oppgavesett 4, oppgave 9)',
          content: 'Aksjen Must prises etter Gordon-modellen. Forventet utbytte om ett år: kr 8. Avkastningskrav 13%, konstant vekst 9%, utdelingsforhold 0,4. Finn pris, P/E, ROE og PVGO.',
          calculation: '**Pris:** $P_0 = \\dfrac{8}{0{,}13 - 0{,}09} = \\dfrac{8}{0{,}04} = $ **kr 200**\n\n**EPS₁** = Div₁ / utdelingsforhold = 8 / 0,4 = **20 kr**\n\n**P/E** = P₀ / EPS₁ = 200 / 20 = **10**\n\n**ROE:** g = (1 − utdeling) × ROE → 0,09 = 0,6 × ROE → ROE = **15%** (> r, så vekst skaper verdi)\n\n**PVGO** = P₀ − EPS₁/r = 200 − 20/0,13 = 200 − 153,8 = **46,2 kr** (positiv, som forventet når ROE > r)'
        },
        {
          id: '4-2b-quiz-pvgo',
          type: 'quiz',
          order: 31,
          question: 'Et selskap har positiv PVGO. Hva forteller det oss?',
          options: [
            'Selskapet betaler høyt utbytte',
            'Markedet forventer at reinvesteringene skaper verdi (ROE > avkastningskravet)',
            'Aksjen er overpriset',
            'Selskapet har lav gjeld'
          ],
          correctAnswer: 1,
          explanation: 'Positiv PVGO betyr at aksjen er verdt mer enn «ingen-vekst»-prisen EPS₁/r. Det skjer når selskapet har investeringsmuligheter med avkastning over avkastningskravet (ROE > r) – da skaper tilbakeholdt overskudd verdi.'
        },
        {
          id: '4-2b-reflection',
          type: 'reflection',
          order: 32,
          question: 'Et modent selskap med lav vekst har ofte høyt utdelingsforhold, mens et vekstselskap betaler lite eller ingen utbytte. Hvordan kan dividendemodellen likevel verdsette et selskap som ikke betaler utbytte i dag?'
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
          id: '4-3-heading-emh',
          type: 'heading',
          order: 2.5,
          level: 2,
          text: 'Markedseffisiens – reflekterer kursen all informasjon?'
        },
        {
          id: '4-3-def-emh',
          type: 'definition',
          order: 2.6,
          term: 'Markedseffisienshypotesen (EMH)',
          definition: 'Hypotesen om at aksjekurser til enhver tid reflekterer all tilgjengelig informasjon. Er markedet effisient, er det svært vanskelig å slå det systematisk – ny informasjon er allerede priset inn nesten umiddelbart.'
        },
        {
          id: '4-3-text-emh-former',
          type: 'text',
          order: 2.7,
          text: 'Vi skiller mellom tre former, etter hvor mye informasjon som er priset inn:\n\n**Svak form:** all historisk pris- og volumdata er reflektert → teknisk analyse (å lese kursgrafer) gir ingen systematisk gevinst.\n**Halvsterk form:** all *offentlig* informasjon er priset inn (regnskap, nyheter) → fundamental analyse på offentlige data hjelper heller ikke systematisk.\n**Sterk form:** *all* informasjon, også innsideinformasjon, er priset inn → selv innsidere kan ikke tjene systematisk.'
        },
        {
          id: '4-3-keypoint-emh',
          type: 'keypoint',
          order: 2.8,
          points: [
            'De fleste utviklede markeder antas å være minst halvsterkt effisiente',
            'Dette er hovedargumentet for indeksfond: klarer du ikke å slå markedet, kjøp heller hele markedet billig',
            'Effisiens er en grad, ikke absolutt – anomalier og bobler finnes'
          ]
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
            'Oslo Børs er Norges hovedmarked med rundt 200 selskaper på hovedlisten (flere hundre totalt medregnet Euronext Growth)',
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
          id: '4-4-diagram-normalfordeling',
          type: 'diagram',
          order: 11.5,
          title: 'Normalfordelingen: 8 % forventet, 20 % volatilitet',
          svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Normalfordeling for aksjeavkastning"><path d="M 146.7 240 L 146.7 215.0 L 152.4 211.5 L 158.2 207.6 L 164.0 203.4 L 169.8 198.8 L 175.6 193.9 L 181.3 188.6 L 187.1 182.9 L 192.9 176.9 L 198.7 170.6 L 204.4 163.9 L 210.2 157.1 L 216.0 150.0 L 221.8 142.7 L 227.6 135.3 L 233.3 127.8 L 239.1 120.3 L 244.9 112.9 L 250.7 105.7 L 256.4 98.6 L 262.2 91.9 L 268.0 85.5 L 273.8 79.5 L 279.6 74.1 L 285.3 69.2 L 291.1 65.0 L 296.9 61.5 L 302.7 58.7 L 308.4 56.6 L 314.2 55.4 L 320.0 55.0 L 325.8 55.4 L 331.6 56.6 L 337.3 58.7 L 343.1 61.5 L 348.9 65.0 L 354.7 69.2 L 360.4 74.1 L 366.2 79.5 L 372.0 85.5 L 377.8 91.9 L 383.6 98.6 L 389.3 105.7 L 395.1 112.9 L 400.9 120.3 L 406.7 127.8 L 412.4 135.3 L 418.2 142.7 L 424.0 150.0 L 429.8 157.1 L 435.6 163.9 L 441.3 170.6 L 447.1 176.9 L 452.9 182.9 L 458.7 188.6 L 464.4 193.9 L 470.2 198.8 L 476.0 203.4 L 481.8 207.6 L 487.6 211.5 L 493.3 215.0 L 493.3 240 Z" fill="rgba(4,101,48,0.10)"/><path d="M 233.3 240 L 233.3 127.8 L 236.2 124.1 L 239.1 120.3 L 242.0 116.6 L 244.9 112.9 L 247.8 109.3 L 250.7 105.7 L 253.6 102.1 L 256.4 98.6 L 259.3 95.2 L 262.2 91.9 L 265.1 88.6 L 268.0 85.5 L 270.9 82.4 L 273.8 79.5 L 276.7 76.7 L 279.6 74.1 L 282.4 71.6 L 285.3 69.2 L 288.2 67.0 L 291.1 65.0 L 294.0 63.1 L 296.9 61.5 L 299.8 60.0 L 302.7 58.7 L 305.6 57.6 L 308.4 56.6 L 311.3 55.9 L 314.2 55.4 L 317.1 55.1 L 320.0 55.0 L 322.9 55.1 L 325.8 55.4 L 328.7 55.9 L 331.6 56.6 L 334.4 57.6 L 337.3 58.7 L 340.2 60.0 L 343.1 61.5 L 346.0 63.1 L 348.9 65.0 L 351.8 67.0 L 354.7 69.2 L 357.6 71.6 L 360.4 74.1 L 363.3 76.7 L 366.2 79.5 L 369.1 82.4 L 372.0 85.5 L 374.9 88.6 L 377.8 91.9 L 380.7 95.2 L 383.6 98.6 L 386.4 102.1 L 389.3 105.7 L 392.2 109.3 L 395.1 112.9 L 398.0 116.6 L 400.9 120.3 L 403.8 124.1 L 406.7 127.8 L 406.7 240 Z" fill="rgba(4,101,48,0.22)"/><path d="M 60.0 237.9 L 64.3 237.6 L 68.7 237.2 L 73.0 236.8 L 77.3 236.3 L 81.7 235.8 L 86.0 235.2 L 90.3 234.5 L 94.7 233.7 L 99.0 232.8 L 103.3 231.9 L 107.7 230.8 L 112.0 229.6 L 116.3 228.3 L 120.7 226.9 L 125.0 225.3 L 129.3 223.5 L 133.7 221.7 L 138.0 219.6 L 142.3 217.4 L 146.7 215.0 L 151.0 212.4 L 155.3 209.6 L 159.7 206.6 L 164.0 203.4 L 168.3 200.0 L 172.7 196.4 L 177.0 192.6 L 181.3 188.6 L 185.7 184.3 L 190.0 179.9 L 194.3 175.3 L 198.7 170.6 L 203.0 165.6 L 207.3 160.5 L 211.7 155.3 L 216.0 150.0 L 220.3 144.5 L 224.7 139.0 L 229.0 133.4 L 233.3 127.8 L 237.7 122.2 L 242.0 116.6 L 246.3 111.1 L 250.7 105.7 L 255.0 100.4 L 259.3 95.2 L 263.7 90.2 L 268.0 85.5 L 272.3 81.0 L 276.7 76.7 L 281.0 72.8 L 285.3 69.2 L 289.7 66.0 L 294.0 63.1 L 298.3 60.7 L 302.7 58.7 L 307.0 57.1 L 311.3 55.9 L 315.7 55.2 L 320.0 55.0 L 324.3 55.2 L 328.7 55.9 L 333.0 57.1 L 337.3 58.7 L 341.7 60.7 L 346.0 63.1 L 350.3 66.0 L 354.7 69.2 L 359.0 72.8 L 363.3 76.7 L 367.7 81.0 L 372.0 85.5 L 376.3 90.2 L 380.7 95.2 L 385.0 100.4 L 389.3 105.7 L 393.7 111.1 L 398.0 116.6 L 402.3 122.2 L 406.7 127.8 L 411.0 133.4 L 415.3 139.0 L 419.7 144.5 L 424.0 150.0 L 428.3 155.3 L 432.7 160.5 L 437.0 165.6 L 441.3 170.6 L 445.7 175.3 L 450.0 179.9 L 454.3 184.3 L 458.7 188.6 L 463.0 192.6 L 467.3 196.4 L 471.7 200.0 L 476.0 203.4 L 480.3 206.6 L 484.7 209.6 L 489.0 212.4 L 493.3 215.0 L 497.7 217.4 L 502.0 219.6 L 506.3 221.7 L 510.7 223.5 L 515.0 225.3 L 519.3 226.9 L 523.7 228.3 L 528.0 229.6 L 532.3 230.8 L 536.7 231.9 L 541.0 232.8 L 545.3 233.7 L 549.7 234.5 L 554.0 235.2 L 558.3 235.8 L 562.7 236.3 L 567.0 236.8 L 571.3 237.2 L 575.7 237.6 L 580.0 237.9" fill="none" stroke="#046530" stroke-width="2.5"/><line x1="55" y1="240" x2="585" y2="240" stroke="#374151" stroke-width="1.5"/><line x1="146.66666666666666" y1="240" x2="146.66666666666666" y2="245" stroke="#374151"/><text x="146.7" y="258.0" font-family="Inter, system-ui, sans-serif" font-size="10" font-weight="400" fill="currentColor" text-anchor="middle">−32%</text><line x1="233.33333333333331" y1="240" x2="233.33333333333331" y2="245" stroke="#374151"/><text x="233.3" y="258.0" font-family="Inter, system-ui, sans-serif" font-size="10" font-weight="400" fill="currentColor" text-anchor="middle">−12%</text><line x1="320" y1="240" x2="320" y2="245" stroke="#374151"/><text x="320.0" y="258.0" font-family="Inter, system-ui, sans-serif" font-size="10" font-weight="700" fill="currentColor" text-anchor="middle">8%</text><line x1="406.66666666666663" y1="240" x2="406.66666666666663" y2="245" stroke="#374151"/><text x="406.7" y="258.0" font-family="Inter, system-ui, sans-serif" font-size="10" font-weight="400" fill="currentColor" text-anchor="middle">28%</text><line x1="493.33333333333337" y1="240" x2="493.33333333333337" y2="245" stroke="#374151"/><text x="493.3" y="258.0" font-family="Inter, system-ui, sans-serif" font-size="10" font-weight="400" fill="currentColor" text-anchor="middle">48%</text><line x1="320" y1="55" x2="320" y2="240" stroke="#046530" stroke-width="1" stroke-dasharray="3,3"/><text x="320.0" y="47.0" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="700" fill="#046530" text-anchor="middle">Forventet: 8%</text><text x="320.0" y="80.7" font-family="Inter, system-ui, sans-serif" font-size="12" font-weight="700" fill="#046530" text-anchor="middle">68%</text><text x="450.0" y="226.0" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="700" fill="#047857" text-anchor="middle">95%</text><text x="320.0" y="24.0" font-family="Inter, system-ui, sans-serif" font-size="11" font-weight="400" fill="#6b7280" text-anchor="middle">±1 standardavvik (20%) dekker ~68% av utfallene, ±2σ dekker ~95%</text></svg>`,
          caption: 'Normalfordelingen gjør tommelfingerregelen visuell. Toppen ligger på forventet avkastning (8 %). Det mørkegrønne feltet (±1 standardavvik = ±20 %) dekker ~68 % av alle år; det lysegrønne (±2σ) dekker ~95 %. Jo bredere klokke, desto høyere volatilitet – og desto lenger ut i halene ligger både de svært gode og de svært dårlige årene.'
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
          formula: '$$E(r) = r_f + \\beta \\times (r_m - r_f)$$',
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
          exerciseSetId: 'oppgavesett-3-aksjeprising'
        }
      ]
    }
  ],
  moduleQuiz: {
    id: 'modul-4-aksjer-quiz',
    title: 'Modulquiz: Aksjer og Eierskap',
    description: 'Test din forståelse av aksjeverdsettelse, avkastning og ESG. Du trenger minst 80% riktig for å bestå.',
    passingScore: 80,
    questionsToShow: 20,
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
      },
      {
        id: 'q5-13',
        question: 'Hva skjer med aksjonærene hvis et selskap går konkurs?',
        options: [
          'De får utbetalt pålydende verdi av aksjene',
          'De står sist i køen etter kreditorer og mister ofte alt',
          'De overtar selskapets gjeld',
          'De får statlig kompensasjon'
        ],
        correctAnswer: 1,
        explanation: 'Ved konkurs betales kreditorer (inkl. obligasjonseiere) først. Aksjonærer står sist og får bare det som eventuelt er igjen - ofte ingenting.'
      },
      {
        id: 'q5-14',
        question: 'Hva er fortrinnsrett ved emisjon?',
        options: [
          'Rett til høyere utbytte enn andre aksjonærer',
          'Rett til å kjøpe nye aksjer før utenforstående',
          'Rett til ekstra stemmer på generalforsamlingen',
          'Rett til å selge aksjer før andre'
        ],
        correctAnswer: 1,
        explanation: 'Fortrinnsrett betyr at eksisterende aksjonærer har førsterett til å kjøpe nye aksjer ved kapitalutvidelse, slik at de kan beholde sin eierandel.'
      },
      {
        id: 'q5-15',
        question: 'Hva er EV/EBITDA-multipelen?',
        options: [
          'Egenkapitalverdi dividert med resultat før skatt',
          'Foretaksverdi dividert med driftsresultat før av- og nedskrivninger',
          'Aksjekurs dividert med bokført verdi',
          'Utbytte dividert med aksjekurs'
        ],
        correctAnswer: 1,
        explanation: 'EV/EBITDA = Enterprise Value / EBITDA. Det viser hvor mange års driftsresultat (før av-/nedskrivninger) som kreves for å kjøpe hele selskapet inkludert gjeld.'
      },
      {
        id: 'q5-16',
        question: 'Hva er markedsverdi (market cap)?',
        options: [
          'Bokført verdi av selskapets eiendeler',
          'Aksjekurs multiplisert med antall aksjer',
          'Selskapets omsetning siste år',
          'Verdien av selskapets gjeld'
        ],
        correctAnswer: 1,
        explanation: 'Markedsverdi = Aksjekurs × Antall utestående aksjer. Det representerer markedets totale verdsettelse av selskapets egenkapital.'
      },
      {
        id: 'q5-17',
        question: 'Hva er en aksjesplitt?',
        options: [
          'Når selskapet kjøper tilbake egne aksjer',
          'Når antall aksjer økes mens totalverdi holdes konstant',
          'Når selskapet fusjonerer med et annet',
          'Når aksjer deles mellom arvinger'
        ],
        correctAnswer: 1,
        explanation: 'Ved aksjesplitt økes antall aksjer (f.eks. 2:1), men prisen per aksje reduseres tilsvarende. Totalverdien forblir uendret, men aksjen blir mer tilgjengelig.'
      },
      {
        id: 'q5-18',
        question: 'Hva kjennetegner en "verdiaksje" (value stock)?',
        options: [
          'Høy P/E og høy vekstforventning',
          'Lav P/E og lav P/B, ofte modne selskaper',
          'Aksjer i teknologisektoren',
          'Aksjer med høyt utbytte uansett verdsettelse'
        ],
        correctAnswer: 1,
        explanation: 'Verdiaksjer er relativt lavt priset i forhold til fundamentale verdier (lav P/E, P/B). Det er ofte etablerte selskaper i modne bransjer.'
      },
      {
        id: 'q5-19',
        question: 'Hva kjennetegner en "vekstaksje" (growth stock)?',
        options: [
          'Lav P/E og høyt utbytte',
          'Høy P/E og reinvestering av overskudd i vekst',
          'Aksjer i oljebransjen',
          'Aksjer som har falt mye i verdi'
        ],
        correctAnswer: 1,
        explanation: 'Vekstaksjer har høy P/E fordi investorer forventer sterk fremtidig vekst. De betaler ofte lite utbytte og reinvesterer i stedet.'
      },
      {
        id: 'q5-20',
        question: 'Hva er utbytteandel (payout ratio)?',
        options: [
          'Utbytte dividert med aksjekurs',
          'Andelen av overskuddet som betales ut som utbytte',
          'Antall aksjonærer som mottar utbytte',
          'Utbytte per aksje i kroner'
        ],
        correctAnswer: 1,
        explanation: 'Utbytteandel = Utbytte / Årsresultat. Viser hvor stor del av overskuddet selskapet deler ut til aksjonærene vs. beholder for reinvestering.'
      },
      {
        id: 'q5-21',
        question: 'I Gordon Growth Model, hva skjer med aksjeverdien hvis vekstraten (g) nærmer seg avkastningskravet (r)?',
        options: [
          'Verdien faller til null',
          'Verdien går mot uendelig',
          'Verdien forblir konstant',
          'Modellen blir irrelevant'
        ],
        correctAnswer: 1,
        explanation: 'P = D/(r-g). Når g nærmer seg r, går nevneren mot null og verdien mot uendelig. Derfor krever modellen at r > g.'
      },
      {
        id: 'q5-22',
        question: 'Hva er "svak form" av markedseffisiens?',
        options: [
          'Aksjekurser reflekterer all offentlig informasjon',
          'Aksjekurser reflekterer all historisk kursinformasjon',
          'Aksjekurser reflekterer all informasjon inkludert innsideinformasjon',
          'Aksjekurser er tilfeldig satt'
        ],
        correctAnswer: 1,
        explanation: 'Svak form betyr at all historisk pris- og volumdata er reflektert. Teknisk analyse er dermed ikke lønnsomt ifølge denne teorien.'
      },
      {
        id: 'q5-23',
        question: 'Hva er "sterk form" av markedseffisiens?',
        options: [
          'Kun at historiske kurser er reflektert',
          'At offentlig informasjon er reflektert',
          'At ALL informasjon, inkludert innsideinformasjon, er reflektert',
          'At markedet er manipulert'
        ],
        correctAnswer: 2,
        explanation: 'Sterk form hevder at selv innsideinformasjon er reflektert i prisene. Dette er kontroversielt og de fleste mener innsideinformasjon faktisk gir fordel.'
      },
      {
        id: 'q5-24',
        question: 'Hva er OBX-indeksen?',
        options: [
          'En skandinavisk obligasjonsindeks',
          'De 25 mest omsatte aksjene på Oslo Børs',
          'Alle selskaper notert på Oslo Børs',
          'Norske selskaper notert i utlandet'
        ],
        correctAnswer: 1,
        explanation: 'OBX består av de 25 mest likvide (mest omsatte) aksjene på Oslo Børs. Det er en viktig referanseindeks for norske aksjer.'
      },
      {
        id: 'q5-25',
        question: 'Hvorfor betaler mange vekstselskaper lite eller ingen utbytte?',
        options: [
          'Fordi de ikke har overskudd',
          'Fordi de reinvesterer overskuddet for å oppnå høyere avkastning',
          'Fordi det er ulovlig for vekstselskaper',
          'Fordi aksjonærene ikke ønsker utbytte'
        ],
        correctAnswer: 1,
        explanation: 'Vekstselskaper mener de kan reinvestere overskuddet til høyere avkastning enn aksjonærene selv kunne oppnå. Aksjonærer får avkastning gjennom kursoppgang i stedet.'
      },
      {
        id: 'q5-26',
        question: 'Hva er "G" i ESG?',
        options: [
          'Growth - vekstpotensial',
          'Green - miljøpåvirkning',
          'Governance - selskapsstyring',
          'Global - internasjonal tilstedeværelse'
        ],
        correctAnswer: 2,
        explanation: 'G står for Governance (selskapsstyring). Det omfatter styresammensetning, lederlønninger, antikorrupsjon, aksjonærrettigheter og lignende.'
      },
      {
        id: 'q5-27',
        question: 'Hva måler Sharpe-ratio?',
        options: [
          'Selskapets lønnsomhet',
          'Risikojustert avkastning - meravkastning per enhet risiko',
          'Aksjens volatilitet alene',
          'Forventet utbyttevekst'
        ],
        correctAnswer: 1,
        explanation: 'Sharpe = (Avkastning - Risikofri rente) / Standardavvik. Det måler hvor mye meravkastning du får per enhet risiko du tar.'
      },
      {
        id: 'q5-28',
        question: 'Hva er forskjellen mellom nominell og reell avkastning?',
        options: [
          'Nominell er før skatt, reell er etter skatt',
          'Nominell er den observerte avkastningen, reell er justert for inflasjon',
          'Nominell gjelder aksjer, reell gjelder obligasjoner',
          'Det er ingen forskjell'
        ],
        correctAnswer: 1,
        explanation: 'Nominell avkastning er det du ser i prosent. Reell avkastning er nominell minus inflasjon - altså økningen i faktisk kjøpekraft.'
      },
      {
        id: 'q5-29',
        question: 'Et selskap har P/B på 0,8. Hva kan dette indikere?',
        options: [
          'Aksjen er overpriset',
          'Markedet verdsetter selskapet under bokført egenkapital',
          'Selskapet har ingen gjeld',
          'Selskapet har ekstremt høy vekst'
        ],
        correctAnswer: 1,
        explanation: 'P/B under 1 betyr at markedsprisen er lavere enn bokført egenkapital. Det kan indikere undervurdert aksje, eller at markedet tviler på eiendelenes reelle verdi.'
      },
      {
        id: 'q5-30',
        question: 'Hva er en indeksfond-strategi?',
        options: [
          'Å velge enkeltaksjer som man tror vil slå markedet',
          'Å følge en indeks passivt og eie de samme aksjene i samme vekt',
          'Å investere kun i teknologiaksjer',
          'Å kjøpe og selge ofte for å time markedet'
        ],
        correctAnswer: 1,
        explanation: 'Indeksfond replikerer en indeks (f.eks. OBX) uten å prøve å slå markedet. Dette gir lav forvaltningskostnad og bred diversifisering.'
      },
      {
        id: 'q5-31',
        question: 'Hva er en børsnotering (IPO)?',
        options: [
          'Når et selskap kjøpes opp av et annet',
          'Når aksjer i et privat selskap selges til publikum for første gang',
          'Når et selskap utbetaler ekstra utbytte',
          'Når et selskap går konkurs'
        ],
        correctAnswer: 1,
        explanation: 'IPO (Initial Public Offering) er når et selskap for første gang tilbyr aksjer til offentligheten og blir børsnotert.'
      },
      {
        id: 'q5-32',
        question: 'Hva er et "bear market"?',
        options: [
          'Et marked med stigende kurser',
          'Et marked med fallende kurser (vanligvis 20%+ fall)',
          'Et marked med lav handelsvolum',
          'Et marked dominert av store investorer'
        ],
        correctAnswer: 1,
        explanation: 'Bear market er typisk definert som et fall på 20% eller mer fra toppen. Bull market er det motsatte - langvarig oppgang.'
      },
      {
        id: 'q5-33',
        question: 'Hva er en aksjes beta-verdi?',
        options: [
          'Aksjens absolutte risiko målt i kroner',
          'Aksjens følsomhet for markedsbevegelser',
          'Aksjens utbytteprosent',
          'Aksjens P/E-forhold'
        ],
        correctAnswer: 1,
        explanation: 'Beta måler systematisk risiko. Beta = 1 betyr lik følsomhet som markedet, beta > 1 betyr høyere følsomhet, beta < 1 betyr lavere følsomhet.'
      },
      {
        id: 'q5-34',
        question: 'Hva er positiv screening i ESG-investering?',
        options: [
          'Å utelukke selskaper som ikke oppfyller ESG-kriterier',
          'Å aktivt velge selskaper som scorer høyt på ESG',
          'Å investere kun i selskaper med positiv aksjekursutvikling',
          'Å gjennomgå selskapets regnskap for feil'
        ],
        correctAnswer: 1,
        explanation: 'Positiv screening betyr å aktivt inkludere selskaper som scorer høyt på ESG. Negativ screening er det motsatte - å ekskludere selskaper.'
      },
      {
        id: 'q5-35',
        question: 'Hva er "ex-utbytte"-dato?',
        options: [
          'Datoen utbyttet utbetales',
          'Datoen selskapet vedtar utbytte',
          'Første dag aksjen handles uten rett til utbytte',
          'Fristen for å registrere seg som aksjonær'
        ],
        correctAnswer: 2,
        explanation: 'Ex-utbytte-dato er første handelsdag uten rett til utbytte. Kjøper du på denne dagen eller senere, får du ikke utbyttet.'
      },
      {
        id: 'q5-36',
        question: 'Hva er forventet avkastning i CAPM-modellen beregnet ut fra?',
        options: [
          'Kun historisk avkastning',
          'Risikofri rente + beta × markedets risikopremie',
          'P/E-multipelen',
          'Utbytteavkastning alene'
        ],
        correctAnswer: 1,
        explanation: 'CAPM: E(r) = rf + β × (rm - rf). Forventet avkastning = Risikofri rente + Aksjens beta × Markedets risikopremie.'
      },
      {
        id: 'q5-37',
        question: 'Hva er Enterprise Value (EV)?',
        options: [
          'Kun markedsverdien av egenkapitalen',
          'Markedsverdi av egenkapital + gjeld - kontanter',
          'Bokført verdi av alle eiendeler',
          'Årets driftsresultat'
        ],
        correctAnswer: 1,
        explanation: 'EV = Markedsverdi + Netto gjeld. Det representerer verdien av hele virksomheten, uavhengig av finansieringsstruktur.'
      },
      {
        id: 'q5-38',
        question: 'Hvilken fordel har diversifisering i aksjeporteføljen?',
        options: [
          'Garantert høyere avkastning',
          'Reduserer usystematisk (selskapsspesifikk) risiko',
          'Eliminerer all risiko',
          'Øker forventet avkastning uten ekstra risiko'
        ],
        correctAnswer: 1,
        explanation: 'Diversifisering reduserer usystematisk risiko (selskapsspesifikk). Systematisk risiko (markedsrisiko) kan ikke diversifiseres bort.'
      },
      {
        id: 'q5-39',
        question: 'Hvorfor følger de fleste aktive fond ikke med indeksfond over tid?',
        options: [
          'Fordi indeksfond har høyere risiko',
          'Fordi aktive fonds høyere kostnader og vanskeligheten med å slå markedet',
          'Fordi indeksfond er ulovlig i Norge',
          'Fordi aktive forvaltere ikke prøver'
        ],
        correctAnswer: 1,
        explanation: 'Aktive fond har høyere forvaltningskostnader. I et effisient marked er det svært vanskelig å konsekvent slå indeksen etter kostnader.'
      },
      {
        id: 'q5-40',
        question: 'Hva er hovedformålet med en generalforsamling?',
        options: [
          'At ledelsen presenterer strategi til media',
          'At aksjonærer stemmer over viktige beslutninger i selskapet',
          'At analytikere får stille spørsmål til ledelsen',
          'At nyansatte introduseres for selskapet'
        ],
        correctAnswer: 1,
        explanation: 'Generalforsamlingen er aksjonærenes høyeste organ. Her stemmes det over utbytte, styrevalg, godkjenning av regnskap og andre viktige beslutninger.'
      }
    ]
  }
};
