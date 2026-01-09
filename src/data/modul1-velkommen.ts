import { Module } from '../types/course';

/**
 * MODUL 1: Velkommen til Din Finansreise
 *
 * Oppgradert versjon med:
 * - Engasjerende "hooks" i hver seksjon
 * - Dypere pedagogisk innhold
 * - Virkelighetsnære eksempler
 * - Tydelige læringsmål
 * - Refleksjonsspørsmål
 */

export const modul1VelkommenModule: Module = {
  id: 'modul1-velkommen',
  title: 'Velkommen til Din Finansreise',
  icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>',
  order: 1,
  learningObjectives: [
    'Forstå kursets oppbygning, mål og forventninger',
    'Erkjenne hvorfor finansiell forståelse er avgjørende i dag',
    'Kjenne til læringsressursene og hvordan du bruker dem effektivt',
    'Sette dine egne økonomiske læringsmål for kurset',
    'Forstå sammenhengen mellom personlig økonomi og bærekraft'
  ],
  sections: [
    // ============================================
    // SEKSJON 1.1: Velkommen til Kurset
    // ============================================
    {
      id: 'velkommen-til-kurset',
      title: 'Velkommen til Kurset',
      icon: '👋',
      order: 1,
      content: [
        // Læringsmål
        {
          id: 'laeringsmal-1-1',
          type: 'keypoint',
          points: [
            'Forstå hva dette kurset kan gjøre for deg',
            'Kjenne til kursoppbyggingen og ressursene',
            'Være motivert og klar til å starte reisen'
          ],
          order: 1
        },
        // Hook / Introduksjon
        {
          id: 'hook-1-1',
          type: 'text',
          text: 'Tenk deg følgende scenario: Du sitter i et jobbintervju. Arbeidsgiveren spør: "Hvordan ville du vurdert om vi skal investere i en grønn obligasjon fra Equinor versus en vanlig bedriftsobligasjon fra et eiendomsselskap?"',
          emphasis: 'important',
          order: 2
        },
        {
          id: 'hook-followup',
          type: 'text',
          text: 'Ville du visst hva du skulle svare? Eller kanskje et mer personlig scenario: Du har arvet 200 000 kroner. Bankrådgiveren foreslår et obligasjonsfond. Vennen din sier aksjer. Onkelen din sverger til eiendom. Hvordan vet du hva som er riktig for deg?',
          order: 3
        },
        {
          id: 'intro-statement',
          type: 'heading',
          text: 'Dette kurset gir deg svarene.',
          level: 2,
          order: 4
        },
        {
          id: 'context-1',
          type: 'text',
          text: 'Vi lever i en tid hvor finansiell forståelse ikke lenger er valgfritt – det er en superkraft. Enten du drømmer om å jobbe i bank, vil forvalte egen formue, eller ønsker å forstå hvordan klimakrisen påvirker økonomien – dette kurset er for deg.',
          order: 5
        },
        // Hva gjør kurset spesielt
        {
          id: 'spesielt-heading',
          type: 'heading',
          text: 'Hva gjør dette kurset spesielt?',
          level: 3,
          order: 6
        },
        {
          id: 'pilar-1',
          type: 'definition',
          term: '1. Teori som gir mening',
          definition: 'Vi starter ikke med formler. Vi starter med virkeligheten. Hver teori vi introduserer er forankret i ekte situasjoner du kan kjenne deg igjen i.',
          order: 7
        },
        {
          id: 'pilar-2',
          type: 'definition',
          term: '2. Bærekraft som rød tråd',
          definition: 'Finans handler ikke lenger bare om avkastning. Det handler om å bygge en fremtid vi faktisk vil leve i. Gjennom hele kurset viser vi hvordan tradisjonell finans og bærekraft henger sammen.',
          order: 8
        },
        {
          id: 'pilar-3',
          type: 'definition',
          term: '3. Praktisk anvendelse',
          definition: 'Du vil ikke bare lære hva en obligasjon er – du vil lære å analysere en faktisk obligasjon fra Oslo Børs. Du vil ikke bare lære om risiko – du vil beregne den for et ekte selskap.',
          order: 9
        },
        // Hvem står bak
        {
          id: 'om-oss-heading',
          type: 'heading',
          text: 'Hvem står bak kurset?',
          level: 3,
          order: 10
        },
        {
          id: 'om-oss-text',
          type: 'text',
          text: 'Professor Atle G. Guttormsen ved NMBU har utviklet dette kurset med én klar visjon: Å gjøre finanskunnskap tilgjengelig for alle, uansett bakgrunn.',
          order: 11
        },
        {
          id: 'sitat',
          type: 'example',
          title: 'Fra kursansvarlig',
          content: '"De fleste lærebøker i finans er skrevet for de som allerede kan finans. Vi har laget et kurs for de som vil lære – fra grunnen av."\n\n— Professor Atle G. Guttormsen, NMBU',
          order: 12
        },
        // Kursoppbygging tabell
        {
          id: 'kurs-struktur-heading',
          type: 'heading',
          text: 'Kursoppbygging',
          level: 3,
          order: 13
        },
        {
          id: 'kurs-struktur-tabell',
          type: 'table',
          headers: ['Modul', 'Tema', 'Fokus'],
          rows: [
            ['1', 'Velkommen og Grunnlag', 'Motivasjon og målsetting'],
            ['2', 'Pengenes Tidverdi', 'Rente og nåverdi'],
            ['3', 'Obligasjoner', 'Gjeldsinstrumenter og prising'],
            ['4', 'Aksjer', 'Eierskap og verdsettelse'],
            ['5', 'Portefølje', 'Diversifisering og risiko'],
            ['6', 'Bærekraft', 'ESG og grønn finans'],
            ['7', 'Syntese', 'Anvendelse og fremtid']
          ],
          order: 14
        },
        // Oppsummering
        {
          id: 'oppsummering-1-1',
          type: 'keypoint',
          points: [
            'Finanskunnskap er en superkraft i dagens samfunn',
            'Kurset kombinerer teori, praksis og bærekraft',
            'Du lærer i ditt eget tempo, med støtte hele veien',
            'Målet er at du skal kunne ta informerte økonomiske beslutninger'
          ],
          order: 15
        },
        // Refleksjon
        {
          id: 'refleksjon-1-1',
          type: 'reflection',
          question: 'Hva er den viktigste økonomiske beslutningen du tror du kommer til å ta de neste 5 årene? Hvordan kan dette kurset forberede deg på den?',
          order: 16
        }
      ]
    },

    // ============================================
    // SEKSJON 1.2: Hvorfor Personlig Økonomi er Livsviktig
    // ============================================
    {
      id: 'hvorfor-okonomi',
      title: 'Hvorfor Personlig Økonomi er Livsviktig',
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg>',
      order: 2,
      content: [
        // Læringsmål
        {
          id: 'laeringsmal-1-2',
          type: 'keypoint',
          points: [
            'Forstå hvorfor finansiell literacy er avgjørende',
            'Kjenne til de reelle kostnadene ved uvitenhet',
            'Se sammenhengen mellom økonomi og livskvalitet'
          ],
          order: 1
        },
        // Hook
        {
          id: 'hook-1-2',
          type: 'heading',
          text: 'En ubehagelig sannhet',
          level: 3,
          order: 2
        },
        {
          id: 'hook-1-2-text',
          type: 'text',
          text: 'Nordmenn låner mer enn noen gang. Gjennomsnittlig boliggjeld i Norge er over 3 millioner kroner. Mange har i tillegg forbrukslån, kredittkortgjeld og billån.',
          order: 3
        },
        {
          id: 'problem-statement',
          type: 'text',
          text: 'Men her er det urovekkende: En stor andel av nordmenn kan ikke forklare forskjellen på rente og effektiv rente. De vet ikke hvordan inflasjon påvirker sparepengene deres. Og de overlater finansielle beslutninger til rådgivere som tjener provisjon på å selge dem produkter.',
          emphasis: 'warning',
          order: 4
        },
        {
          id: 'reassurance',
          type: 'text',
          text: 'Dette er ikke din feil. Finansiell utdanning har aldri vært en prioritet i norsk skole. Men det betyr at du må ta ansvaret selv.',
          emphasis: 'important',
          order: 5
        },
        // Definisjon
        {
          id: 'financial-literacy-def',
          type: 'definition',
          term: 'Financial Literacy (Finansiell Kunnskapsforståelse)',
          definition: 'Evnen til å forstå og effektivt bruke ulike finansielle ferdigheter, inkludert personlig økonomistyring, budsjettering, og investering.',
          order: 6
        },
        // Nivåer
        {
          id: 'nivaer-heading',
          type: 'heading',
          text: 'Tre nivåer av finansiell forståelse',
          level: 3,
          order: 7
        },
        {
          id: 'nivaer-tabell',
          type: 'table',
          headers: ['Nivå', 'Beskrivelse', 'Eksempel'],
          rows: [
            ['Grunnleggende', 'Forstår dagligdags økonomi', 'Kan lage budsjett, forstår rente'],
            ['Middels', 'Forstår investeringer', 'Kan vurdere fond, forstår risiko'],
            ['Avansert', 'Kan analysere og optimalisere', 'Kan verdsette obligasjoner, bygge portefølje']
          ],
          order: 8
        },
        {
          id: 'nivaer-konklusjon',
          type: 'text',
          text: 'Dette kurset tar deg fra grunnleggende til avansert.',
          emphasis: 'important',
          order: 9
        },
        // Eksempel: Kostnaden av uvitenhet
        {
          id: 'eksempel-heading',
          type: 'heading',
          text: 'Eksempel: Kostnaden av Uvitenhet',
          level: 3,
          order: 10
        },
        {
          id: 'marie-knut-eksempel',
          type: 'example',
          title: 'Marie vs. Knut – En livshistorie i tall',
          content: 'Marie (25) og Knut (25) starter begge i sin første jobb med 450 000 kr i årslønn.\n\nMarie tar dette kurset og lærer om pengenes tidsverdi. Hun setter 3 000 kr i måneden i et indeksfond fra dag én.\n\nKnut tenker han skal "starte med sparing senere". Han venter til han er 35.',
          calculation: 'Etter 40 år (ved 65):\n\nMaries portefølje: ca. 8,3 millioner kr\nKnuts portefølje: ca. 3,4 millioner kr\n────────────────────────────────────\nForskjell: 4,9 millioner kr\n\n(Forutsetninger: 7% årlig avkastning, inflasjonsjustert)\n\nMaries "forsprang" på 10 år kostet Knut nesten 5 millioner kroner i tapt formue.',
          order: 11
        },
        {
          id: 'eksempel-konklusjon',
          type: 'text',
          text: 'Denne ene innsikten – at tid i markedet slår alt annet – kan endre livet ditt. Og det er bare begynnelsen.',
          emphasis: 'important',
          order: 12
        },
        // Vanlige feil
        {
          id: 'feil-heading',
          type: 'heading',
          text: 'Vanlige Økonomiske Feil',
          level: 3,
          order: 13
        },
        {
          id: 'feil-liste',
          type: 'list',
          items: [
            'Feil #1: Ignorerer renters rente – Mange forstår ikke eksponentiell vekst. De tror 1% forskjell i rente er "ubetydelig".',
            'Feil #2: Betaler for dyr rådgivning – Aktive fond tar ofte 1-2% i årlig gebyr. Over 30 år kan dette koste deg hundretusener.',
            'Feil #3: Handler på følelser – Selger når markedet faller, kjøper når det stiger. Det motsatte av det som gir avkastning.',
            'Feil #4: Tar ikke hensyn til inflasjon – Penger på sparekonto med 1% rente og 3% inflasjon betyr at du TAPER kjøpekraft.'
          ],
          ordered: false,
          order: 14
        },
        // Oppsummering
        {
          id: 'oppsummering-1-2',
          type: 'keypoint',
          points: [
            'Finansiell uvitenhet koster – bokstavelig talt millioner over et livsløp',
            'Små beslutninger tidlig får enorme konsekvenser',
            'Du trenger ikke være ekspert, men du trenger grunnleggende forståelse',
            'Dette kurset gir deg verktøyene til å ta kontroll'
          ],
          order: 15
        },
        // Quiz
        {
          id: 'quiz-1-2',
          type: 'quiz',
          question: 'Hva er den viktigste faktoren for langsiktig formuesbygging ifølge eksempelet med Marie og Knut?',
          options: [
            'Å velge de rette aksjene',
            'Å starte tidlig og være konsekvent',
            'Å ha høy lønn',
            'Å bruke en god finansrådgiver'
          ],
          correctAnswer: 1,
          explanation: 'Tid i markedet er den viktigste faktoren. Marie hadde ikke høyere lønn eller bedre aksjeutvalg – hun startet bare 10 år tidligere. Renters rente-effekten gjorde resten.',
          order: 16
        },
        // Refleksjon
        {
          id: 'refleksjon-1-2',
          type: 'reflection',
          question: 'Tenk på en økonomisk beslutning du har tatt det siste året. Med det du nå vet – ville du tatt den samme beslutningen?',
          order: 17
        }
      ]
    },

    // ============================================
    // SEKSJON 1.3: Slik Fungerer Kurset
    // ============================================
    {
      id: 'slik-fungerer-kurset',
      title: 'Slik Fungerer Kurset',
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
      order: 3,
      content: [
        // Læringsmål
        {
          id: 'laeringsmal-1-3',
          type: 'keypoint',
          points: [
            'Forstå hvordan kursinnholdet er strukturert',
            'Vite hvilke læringsressurser som er tilgjengelige',
            'Lære effektive strategier for å få mest mulig ut av kurset'
          ],
          order: 1
        },
        {
          id: 'intro-1-3',
          type: 'text',
          text: 'Dette kurset er designet for å møte deg der du er. Enten du har 20 minutter på bussen eller en hel søndags ettermiddag, kan du gjøre fremskritt.',
          order: 2
        },
        // Ressurser
        {
          id: 'ressurser-heading',
          type: 'heading',
          text: 'Dine Læringsressurser',
          level: 3,
          order: 3
        },
        {
          id: 'video-ressurs',
          type: 'definition',
          term: '🎥 Videoforelesninger',
          definition: 'Korte, fokuserte videoer (2-5 minutter) som introduserer hovedkonseptene. Perfekt for første eksponering mot et tema eller rask repetisjon.',
          order: 4
        },
        {
          id: 'tekst-ressurs',
          type: 'definition',
          term: 'Utdypende Tekster',
          definition: 'Grundige forklaringer med eksempler, tabeller og illustrasjoner. Her finner du dybden du trenger for virkelig å forstå stoffet.',
          order: 5
        },
        {
          id: 'quiz-ressurs',
          type: 'definition',
          term: 'Quiz og Selvtester',
          definition: 'Interaktive spørsmål underveis som hjelper deg å sjekke forståelsen din. Får du feil, får du en forklaring som hjelper deg videre.',
          order: 6
        },
        {
          id: 'oppgave-ressurs',
          type: 'definition',
          term: 'Regneoppgaver',
          definition: 'Praktiske oppgaver hvor du bruker formlene og konseptene på realistiske tall. Det er her læringen virkelig skjer.',
          order: 7
        },
        {
          id: 'refleksjon-ressurs',
          type: 'definition',
          term: 'Refleksjonsspørsmål',
          definition: 'Åpne spørsmål som inviterer deg til å tenke dypere og koble teorien til din egen situasjon.',
          order: 8
        },
        // Anbefalt tilnærming
        {
          id: 'tilnaerming-heading',
          type: 'heading',
          text: 'Anbefalt Tilnærming',
          level: 3,
          order: 9
        },
        {
          id: 'tilnaerming-liste',
          type: 'list',
          items: [
            'Sett av fast tid: 2-3 timer i uken gir jevn progresjon. Kort og regelmessig slår lange, sporadiske økter.',
            'Følg rekkefølgen: Modulene bygger på hverandre. Ikke hopp over selv om noe virker kjent.',
            'Gjør oppgavene: Passiv lesing gir illusjonen av forståelse. Aktiv problemløsning gir reell kompetanse.',
            'Still spørsmål: Bruk diskusjonsforumet eller ta kontakt hvis noe er uklart. Det finnes ingen dumme spørsmål.',
            'Repeter: Gå tilbake til tidligere moduler. Konseptene henger sammen, og repetisjon forsterker læring.'
          ],
          ordered: true,
          order: 10
        },
        // Tips boks
        {
          id: 'tips-eksempel',
          type: 'example',
          title: 'Pro-tips fra tidligere studenter',
          content: '• Les teksten én gang for oversikt, deretter én gang for detaljer\n• Forklar konseptene høyt for deg selv (eller en venn)\n• Lag egne eksempler med tall fra din egen økonomi\n• Ta notater for hånd – det forsterker hukommelsen\n• Belønne deg selv når du fullfører en modul!',
          order: 11
        },
        // Oppsummering
        {
          id: 'oppsummering-1-3',
          type: 'keypoint',
          points: [
            'Kurset tilbyr flere læringsformater for ulike preferanser',
            'Regelmessig, aktiv læring gir best resultater',
            'Oppgavene er ikke valgfrie – de er der læringen skjer',
            'Du har støtte tilgjengelig gjennom hele kurset'
          ],
          order: 12
        },
        // Refleksjon
        {
          id: 'refleksjon-1-3',
          type: 'reflection',
          question: 'Når på dagen er du mest fokusert? Planlegg din første læringsøkt for den tiden.',
          order: 13
        }
      ]
    },

    // ============================================
    // SEKSJON 1.4: Din Første Selvvurdering
    // ============================================
    {
      id: 'selvvurdering',
      title: 'Din Første Økonomiske Selvvurdering',
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>',
      order: 4,
      content: [
        // Læringsmål
        {
          id: 'laeringsmal-1-4',
          type: 'keypoint',
          points: [
            'Kartlegge din nåværende finansielle kunnskap',
            'Identifisere områder med størst forbedringspotensial',
            'Ha et utgangspunkt for å måle din progresjon'
          ],
          order: 1
        },
        {
          id: 'intro-1-4',
          type: 'text',
          text: 'Før vi starter reisen, er det nyttig å vite hvor du står. Dette er ikke en test du kan stryke på – det er en mulighet til å bli kjent med dine styrker og vekstområder.',
          order: 2
        },
        // Quiz-serie for selvvurdering
        {
          id: 'selvvurdering-heading',
          type: 'heading',
          text: 'Rask kunnskapssjekk',
          level: 3,
          order: 3
        },
        {
          id: 'quiz-grunnleggende',
          type: 'quiz',
          question: 'Hvis du setter 10 000 kr i banken med 5% årlig rente, hvor mye har du etter 2 år (uten uttak)?',
          options: [
            '10 500 kr',
            '11 000 kr',
            '11 025 kr',
            '10 250 kr'
          ],
          correctAnswer: 2,
          explanation: 'Riktig svar er 11 025 kr. Etter år 1: 10 000 × 1,05 = 10 500. Etter år 2: 10 500 × 1,05 = 11 025. Dette er renters rente i praksis!',
          order: 4
        },
        {
          id: 'quiz-obligasjon',
          type: 'quiz',
          question: 'Hva er en obligasjon?',
          options: [
            'En eierandel i et selskap',
            'Et lån du gir til en stat, kommune eller bedrift',
            'En type forsikring',
            'En pensjonsavtale'
          ],
          correctAnswer: 1,
          explanation: 'En obligasjon er et lån du gir til en utsteder (stat, kommune eller bedrift). Du får renter underveis og hovedstolen tilbake ved forfall. Dette er hovedtemaet i Modul 3!',
          order: 5
        },
        {
          id: 'quiz-risiko',
          type: 'quiz',
          question: 'Hva skjer vanligvis med obligasjonspriser når renten i markedet stiger?',
          options: [
            'De stiger',
            'De faller',
            'De forblir uendret',
            'De svinger tilfeldig'
          ],
          correctAnswer: 1,
          explanation: 'Obligasjonspriser og renter har en invers sammenheng. Når renten stiger, faller obligasjonsprisene. Hvorfor? Det lærer du i Modul 3!',
          order: 6
        },
        // Tolkning
        {
          id: 'tolkning-heading',
          type: 'heading',
          text: 'Hva resultatene betyr',
          level: 3,
          order: 7
        },
        {
          id: 'tolkning-tekst',
          type: 'text',
          text: 'Uansett hvor mange du fikk riktig, er du på rett sted. Fikk du alt riktig? Flott – kurset vil gi deg dybde og nye perspektiver. Fikk du noen feil? Perfekt – da vet du nøyaktig hva du skal fokusere på.',
          order: 8
        },
        // Oppsummering
        {
          id: 'oppsummering-1-4',
          type: 'keypoint',
          points: [
            'Selvvurdering er et verktøy, ikke en dom',
            'Det er OK å ikke kunne alt – derfor er du her',
            'Bruk resultatene til å fokusere innsatsen din'
          ],
          order: 9
        },
        // Refleksjon
        {
          id: 'refleksjon-1-4',
          type: 'reflection',
          question: 'Hvilket av disse tre temaene (renters rente, obligasjoner, risiko) føler du at du trenger mest hjelp med?',
          order: 10
        }
      ]
    },

    // ============================================
    // SEKSJON 1.5: Sett Dine Mål
    // ============================================
    {
      id: 'sett-dine-mal',
      title: 'Sett Dine Økonomiske Mål',
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
      order: 5,
      content: [
        // Læringsmål
        {
          id: 'laeringsmal-1-5',
          type: 'keypoint',
          points: [
            'Formulere konkrete læringsmål for kurset',
            'Koble kursets innhold til dine personlige økonomiske mål',
            'Ha en klar motivasjon å komme tilbake til underveis'
          ],
          order: 1
        },
        {
          id: 'intro-1-5',
          type: 'text',
          text: 'Forskning viser at studenter som setter eksplisitte mål, lærer mer og fullf,ører oftere. Ta deg tid til å tenke gjennom hva du vil oppnå.',
          order: 2
        },
        // Mål-kategorier
        {
          id: 'mal-heading',
          type: 'heading',
          text: 'Eksempler på Mål',
          level: 3,
          order: 3
        },
        {
          id: 'mal-tabell',
          type: 'table',
          headers: ['Kategori', 'Eksempel på mål'],
          rows: [
            ['Kunnskapsmål', '"Jeg vil forstå hvordan obligasjoner fungerer godt nok til å forklare det til en venn."'],
            ['Ferdighetsmål', '"Jeg vil kunne beregne nåverdi og effektiv rente uten hjelp."'],
            ['Anvendelsesmål', '"Jeg vil kunne analysere et reelt investeringsforslag fra banken min."'],
            ['Karrieremål', '"Jeg vil ha finanskompetanse som gir meg fordel i jobbsøknaden."'],
            ['Personlig mål', '"Jeg vil føle meg trygg på mine egne økonomiske beslutninger."']
          ],
          order: 4
        },
        // Oppfordring
        {
          id: 'oppfordring',
          type: 'exercise',
          title: 'Din tur: Skriv ned 2-3 mål',
          description: 'Ta frem en notatblokk eller åpne notater på telefonen. Skriv ned 2-3 konkrete mål du har for dette kurset. Vær så spesifikk som mulig.\n\nEksempel: Ikke bare "lære om finans", men "forstå hvorfor obligasjonspriser faller når renten stiger".',
          hint: 'Gode mål er spesifikke, målbare og personlig relevante. Tenk på situasjoner i livet ditt hvor finanskunnskap ville vært nyttig.',
          order: 5
        },
        // Kontaktinfo
        {
          id: 'kontakt-heading',
          type: 'heading',
          text: 'Kontakt og Støtte',
          level: 3,
          order: 6
        },
        {
          id: 'kontakt-info',
          type: 'text',
          text: 'Du er ikke alene på denne reisen. Har du spørsmål underveis, eller trenger du hjelp med noe, ikke nøl med å ta kontakt.',
          order: 7
        },
        {
          id: 'kontakt-definisjon',
          type: 'definition',
          term: 'Kontaktinformasjon',
          definition: 'E-post: finans@nmbu.no\nKursansvarlig: Professor Atle G. Guttormsen (atle.guttormsen@nmbu.no)\n\nVi er her for å hjelpe deg hele veien!',
          order: 8
        },
        // Avslutning
        {
          id: 'avslutning',
          type: 'text',
          text: 'Du har nå alt du trenger for å starte. I neste modul dykker vi inn i et av finansens mest fundamentale konsepter: Pengenes tidsverdi. Det er her alt begynner.',
          emphasis: 'important',
          order: 9
        },
        // Oppsummering for hele modulen
        {
          id: 'modul-oppsummering',
          type: 'keypoint',
          points: [
            'Du har blitt introdusert til kursets visjon og oppbygning',
            'Du forstår hvorfor finansiell kunnskap er viktig – og kostbart å mangle',
            'Du kjenner til læringsressursene og hvordan bruke dem effektivt',
            'Du har kartlagt ditt utgangspunkt og satt personlige mål',
            'Du er klar for å starte den virkelige læringen!'
          ],
          order: 10
        },
        // Siste refleksjon
        {
          id: 'refleksjon-1-5',
          type: 'reflection',
          question: 'Forestill deg selv om 6 måneder, etter at du har fullført kurset. Hva er den viktigste endringen du håper å se i hvordan du tenker om økonomi?',
          order: 11
        }
      ]
    }
  ]
};
