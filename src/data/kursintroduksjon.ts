import { Module } from '../types/course';

export const kursintroduksjonModule: Module = {
  id: 'kursintro',
  title: 'Velkommen til Bærekraftig Finans',
  icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
  order: 1,
  learningObjectives: [
    'Forstå kursets oppbygning og målsetninger',
    'Bli kjent med læringsressursene',
    'Lære hvordan du best kan jobbe med kurset',
    'Forstå sammenhengen mellom finans og bærekraft'
  ],
  sections: [
    {
      id: 'velkommen',
      title: 'Velkommen til kurset',
      order: 1,
      content: [
        {
          id: 'velkommen-heading',
          type: 'heading',
          text: 'Bærekraftig finans',
          level: 1,
          order: 1
        },
        {
          id: 'velkommen-intro',
          type: 'text',
          text: 'Vi er glade for å ha deg med på denne reisen hvor vi sammen skal utforske hvordan finansverdenen kan bidra til en bærekraftig fremtid. Kurset er designet for deg, uansett bakgrunn eller hvor i landet du bor. Om du er nybegynner innen finans, eller allerede har erfaring, vil du finne noe her som utfordrer, engasjerer og inspirerer.',
          emphasis: 'important',
          order: 2
        }
      ]
    },
    {
      id: 'hva-forvente',
      title: 'Hva kan du forvente av kurset?',
      order: 2,
      content: [
        {
          id: 'forvente-heading',
          type: 'heading',
          text: 'Hva kan du forvente av kurset?',
          level: 2,
          order: 1
        },
        {
          id: 'forvente-intro',
          type: 'text',
          text: 'Dette kurset er lagt opp i moduler som bygger på hverandre, med tydelige mål og konkrete oppgaver. Her er en kort oversikt over hva som venter deg:',
          order: 2
        },
        {
          id: 'video-section',
          type: 'heading',
          text: '🎥 Videoforelesninger',
          level: 3,
          order: 3
        },
        {
          id: 'video-text',
          type: 'text',
          text: 'Vi starter hver modul med korte og informative videoer. Disse gir en introduksjon til hovedtemaene og hjelper deg å få oversikt.',
          order: 4
        },
        {
          id: 'presentasjoner-section',
          type: 'heading',
          text: 'Presentasjoner',
          level: 3,
          order: 5
        },
        {
          id: 'presentasjoner-text',
          type: 'text',
          text: 'Hver modul inkluderer en visuell presentasjon som oppsummerer nøkkelbegrepene og gir ekstra forklaringer. Du kan laste dem ned og bruke dem som støtte gjennom kurset.',
          order: 6
        },
        {
          id: 'oversikt-section',
          type: 'heading',
          text: 'Oversiktstekster',
          level: 3,
          order: 7
        },
        {
          id: 'oversikt-text',
          type: 'text',
          text: 'Disse er skrevet for å gi deg dypere innsikt, men uten å drukne deg i faguttrykk. De passer godt for repetisjon og som referanse når du jobber med oppgaver.',
          order: 8
        },
        {
          id: 'oppgaver-section',
          type: 'heading',
          text: 'Oppgaver',
          level: 3,
          order: 9
        },
        {
          id: 'oppgaver-list',
          type: 'list',
          items: [
            'Flervalgsoppgaver: Perfekt for å teste deg selv og repetere stoffet.',
            'Regneoppgaver: For å trene på praktiske ferdigheter.',
            'Semesteroppgave: En gjennomgående caseoppgave som gir deg mulighet til å anvende teori på virkelige utfordringer.'
          ],
          ordered: false,
          order: 10
        }
      ]
    },
    {
      id: 'hvordan-jobbe',
      title: 'Hvordan jobber du med kurset?',
      order: 3,
      content: [
        {
          id: 'jobbe-heading',
          type: 'heading',
          text: 'Hvordan jobber du med kurset?',
          level: 2,
          order: 1
        },
        {
          id: 'jobbe-intro',
          type: 'text',
          text: 'Kurset er helt fleksibelt og kan tas i ditt eget tempo. Vi anbefaler å:',
          order: 2
        },
        {
          id: 'jobbe-tips',
          type: 'list',
          items: [
            'Sette av litt tid hver uke: Om du følger planen, vil du være godt forberedt til oppgavene og semesteroppgaven.',
            'Delta aktivt: Bruk oppgavene og tekstene til å teste deg selv. Jo mer du deltar, desto mer får du ut av kurset.',
            'Utforske: Ikke vær redd for å stille spørsmål eller bruke ressursene i kurset til å fordype deg i det som interesserer deg mest.'
          ],
          ordered: false,
          order: 3
        },
        {
          id: 'jobbe-keypoints',
          type: 'keypoint',
          points: [
            'Ta kurset i ditt eget tempo',
            'Sett av tid hver uke for best resultat',
            'Delta aktivt i oppgaver og refleksjoner',
            'Bruk alle tilgjengelige ressurser'
          ],
          order: 4
        }
      ]
    },
    {
      id: 'om-oss',
      title: 'Om oss og kontakt',
      order: 4,
      content: [
        {
          id: 'om-heading',
          type: 'heading',
          text: 'Litt om oss',
          level: 2,
          order: 1
        },
        {
          id: 'om-text',
          type: 'text',
          text: 'Vi som har laget dette kurset brenner for bærekraft og finans. Målet vårt er å gi deg verktøyene du trenger for å forstå og påvirke verden rundt deg på en positiv måte. Sammen kan vi gjøre en forskjell!',
          order: 2
        },
        {
          id: 'om-ansvarlig',
          type: 'text',
          text: 'Hovedansvarlig for kurset er Professor Atle G. Guttormsen, atle.guttormsen@nmbu.no',
          emphasis: 'important',
          order: 3
        },
        {
          id: 'kontakt-heading',
          type: 'heading',
          text: 'Kontakt og støtte',
          level: 2,
          order: 4
        },
        {
          id: 'kontakt-text',
          type: 'text',
          text: 'Hvis du har spørsmål underveis, eller trenger hjelp med noe, ikke nøl med å ta kontakt. Vi er her for å hjelpe deg hele veien. Du tar enklest kontakt med oss på mail finans@nmbu.no eller ved hjelp av meldingstjenesten her i Canvas.',
          order: 5
        },
        {
          id: 'kontakt-info',
          type: 'definition',
          term: 'Kontaktinformasjon',
          definition: 'E-post: finans@nmbu.no\nKursansvarlig: Professor Atle G. Guttormsen (atle.guttormsen@nmbu.no)',
          order: 6
        },
        {
          id: 'avslutning',
          type: 'text',
          text: 'Vi gleder oss til å lære sammen med deg, og vi håper du vil finne dette kurset både lærerikt og inspirerende. Lykke til – vi heier på deg!',
          emphasis: 'important',
          order: 7
        }
      ]
    }
  ]
};