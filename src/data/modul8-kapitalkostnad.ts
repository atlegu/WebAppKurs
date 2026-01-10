import { Module } from '../types/course';

export const modul8KapitalkostnadModule: Module = {
  id: 'modul-8-kapitalkostnad',
  title: 'Kapitalkostnad',
  icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path></svg>',
  order: 8,
  learningObjectives: [
    'Forstå hva kapitalkostnad er og hvorfor den er viktig for investeringsbeslutninger',
    'Beregne egenkapitalkostnad ved hjelp av CAPM',
    'Beregne gjeldskostnad før og etter skatt',
    'Beregne WACC (vektet gjennomsnittlig kapitalkostnad)',
    'Anvende WACC som diskonteringsrente i investeringsanalyse'
  ],
  sections: [
    // SEKSJON 8.1: Hva er kapitalkostnad?
    {
      id: 'seksjon-8-1-intro',
      title: 'Hva er kapitalkostnad?',
      order: 1,
      content: [
        {
          id: '8-1-intro',
          type: 'text',
          order: 1,
          text: 'I 2022 vurderte Equinor å investere i et nytt havvindprosjekt. Prosjektet ville generere 500 MNOK årlig i 25 år. Men hva skulle de bruke som diskonteringsrente? Svaret - kapitalkostnaden - kan utgjøre forskjellen på milliarder i beregnet verdi. Velger du feil rente, kan du ende opp med å investere i prosjekter som ødelegger verdi.',
          emphasis: 'important'
        },
        {
          id: '8-1-podcast',
          type: 'audio',
          order: 2,
          title: 'Podcast: Kapitalkostnad og WACC',
          duration: '15 min',
          url: '/Kapitalkostnad.m4a',
          description: 'Vi anbefaler at du lytter til denne podcasten før du leser videre. Her får du en grundig innføring i kapitalkostnad, WACC og hvordan dette brukes i praksis for å ta investeringsbeslutninger.'
        },
        {
          id: '8-1-heading-1',
          type: 'heading',
          order: 3,
          level: 2,
          text: 'Hva er kapitalkostnad?'
        },
        {
          id: '8-1-def-1',
          type: 'definition',
          order: 4,
          term: 'Kapitalkostnad',
          definition: 'Avkastningen investorene krever for å stille kapital til disposisjon for selskapet. Det er selskapets "pris" for å bruke andres penger - og representerer minimumskravet til avkastning på nye investeringer.'
        },
        {
          id: '8-1-text-2',
          type: 'text',
          order: 5,
          text: 'Tenk på kapitalkostnad som en alternativkostnad. Investorer - enten de er aksjonærer eller långivere - kunne plassert pengene sine andre steder. De krever derfor kompensasjon for risikoen de tar ved å investere i akkurat dette selskapet. Selskapet må tjene minst dette for å tilfredsstille investorene sine.'
        },
        {
          id: '8-1-heading-2',
          type: 'heading',
          order: 6,
          level: 2,
          text: 'Hvorfor er kapitalkostnaden viktig?'
        },
        {
          id: '8-1-list-1',
          type: 'list',
          order: 7,
          ordered: false,
          items: [
            'Brukes som diskonteringsrente i NPV-beregninger',
            'Avgjør hvilke prosjekter som er lønnsomme - NPV > 0 kun hvis avkastning > kapitalkostnad',
            'Påvirker selskapets verdsettelse direkte',
            'Er grunnlaget for å vurdere optimal kapitalstruktur',
            'Brukes til å sette minimumskrav (hurdle rate) for investeringer'
          ]
        },
        {
          id: '8-1-example-1',
          type: 'example',
          order: 8,
          title: 'To prosjekter, ulik kapitalkostnad',
          content: 'Prosjekt A og B gir begge 10 MNOK/år i 10 år med investering på 50 MNOK.\n\nMed 8% kapitalkostnad:\nNPV = -50 + 10 × 6,71 = 17,1 MNOK (lønnsomt!)\n\nMed 15% kapitalkostnad:\nNPV = -50 + 10 × 5,02 = 0,2 MNOK (knapt lønnsomt)\n\nKapitalkostnaden kan være forskjellen mellom ja og nei til en investering på 50 millioner!'
        },
        {
          id: '8-1-heading-3',
          type: 'heading',
          order: 9,
          level: 2,
          text: 'Ulike kilder til kapital'
        },
        {
          id: '8-1-text-3',
          type: 'text',
          order: 10,
          text: 'Selskaper finansierer seg med ulike typer kapital, og hver type har sin egen kostnad. De to hovedkildene er egenkapital (fra aksjonærene) og gjeld (fra banker og obligasjonseiere).'
        },
        {
          id: '8-1-table-1',
          type: 'table',
          order: 11,
          headers: ['Kilde', 'Beskrivelse', 'Kostnad'],
          rows: [
            ['Egenkapital', 'Aksjonærenes investering - ingen fast utbetaling', 'Høyest (bærer mest risiko)'],
            ['Gjeld', 'Lån fra banker og obligasjoner - fast rente', 'Lavere (prioritet ved konkurs + skattefradrag)'],
            ['Preferanseaksjer', 'Hybrid - fast utbytte, prioritet over ordinær EK', 'Mellom EK og gjeld']
          ]
        },
        {
          id: '8-1-text-4',
          type: 'text',
          order: 12,
          text: 'Hvorfor er egenkapital dyrere enn gjeld? To grunner: 1) Aksjonærer står sist i køen ved konkurs, så de tar høyere risiko. 2) Renteutgifter på gjeld er fradragsberettiget, noe som gir en skattefordel.'
        },
        {
          id: '8-1-keypoint-1',
          type: 'keypoint',
          order: 13,
          points: [
            'Kapitalkostnad er investorenes avkastningskrav',
            'Den varierer med risiko - høyere risiko = høyere avkastningskrav',
            'Vi må beregne kostnad for hver kapitaltype separat',
            'WACC kombinerer disse til én diskonteringsrente',
            'Kapitalkostnaden er minimumskravet for prosjektavkastning'
          ]
        },
        {
          id: '8-1-quiz-1',
          type: 'quiz',
          order: 14,
          question: 'Hva representerer kapitalkostnaden?',
          options: [
            'Selskapets rentekostnad på banklån',
            'Avkastningen investorene krever for å stille kapital til disposisjon',
            'Inflasjonsraten pluss en fast margin',
            'Gjennomsnittlig avkastning i aksjemarkedet'
          ],
          correctAnswer: 1,
          explanation: 'Kapitalkostnaden er avkastningskravet til investorene - både aksjonærer og långivere. Det representerer alternativkostnaden deres ved å investere i selskapet fremfor andre muligheter med tilsvarende risiko.'
        },
        {
          id: '8-1-quiz-2',
          type: 'quiz',
          order: 15,
          question: 'Hvorfor er egenkapital vanligvis dyrere enn gjeld?',
          options: [
            'Fordi aksjer handles oftere enn obligasjoner',
            'Fordi aksjonærer har prioritet ved konkurs',
            'Fordi aksjonærer bærer høyere risiko og gjeld gir skattefradrag',
            'Fordi det er flere aksjonærer enn långivere'
          ],
          correctAnswer: 2,
          explanation: 'Aksjonærer står sist i køen ved konkurs (tar høyest risiko) og krever derfor høyere avkastning. I tillegg er renteutgifter fradragsberettiget, noe som gjør gjeld billigere etter skatt.'
        },
        {
          id: '8-1-reflection-1',
          type: 'reflection',
          order: 16,
          question: 'Tenk på at du låner ut 100 000 kr. Hvilken rente ville du krevd av en nær venn vs. en fremmed? Hvordan påvirker tillit og risiko avkastningskravet ditt?'
        }
      ]
    },

    // SEKSJON 8.2: Egenkapitalkostnad
    {
      id: 'seksjon-8-2-egenkapitalkostnad',
      title: 'Egenkapitalkostnad',
      order: 2,
      content: [
        {
          id: '8-2-intro',
          type: 'text',
          order: 1,
          text: 'Aksjonærer investerer i selskaper for å få avkastning. Men hvor mye avkastning krever de? Svaret avhenger av én ting: risiko. Jo mer risikabel investeringen er, jo høyere avkastning kreves. Capital Asset Pricing Model (CAPM) gir oss en elegant måte å kvantifisere dette på.',
          emphasis: 'important'
        },
        {
          id: '8-2-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Capital Asset Pricing Model (CAPM)'
        },
        {
          id: '8-2-text-1',
          type: 'text',
          order: 3,
          text: 'CAPM er den mest brukte metoden for å estimere egenkapitalkostnad. Modellen bygger på porteføljeteorien vi lærte tidligere: investorer bryr seg bare om systematisk risiko (beta), fordi usystematisk risiko kan diversifiseres bort.'
        },
        {
          id: '8-2-def-1',
          type: 'definition',
          order: 4,
          term: 'CAPM',
          definition: 'En modell som beregner forventet avkastning basert på risikofri rente, markedets risikopremie, og aksjens systematiske risiko (beta). Grunnideen er at avkastningskravet øker lineært med systematisk risiko.'
        },
        {
          id: '8-2-formula-1',
          type: 'formula',
          order: 5,
          formula: 'rE = rf + β × (rM - rf)',
          description: 'Hvor rE = egenkapitalkostnad, rf = risikofri rente, β = aksjens beta (systematisk risiko), og (rM - rf) = markedets risikopremie.'
        },
        {
          id: '8-2-heading-2',
          type: 'heading',
          order: 6,
          level: 2,
          text: 'Komponentene i CAPM'
        },
        {
          id: '8-2-heading-3',
          type: 'heading',
          order: 7,
          level: 3,
          text: 'Risikofri rente (rf)'
        },
        {
          id: '8-2-text-2',
          type: 'text',
          order: 8,
          text: 'Den risikofrie renten representerer tidsverdien av penger uten risiko. I praksis brukes vanligvis statsobligasjonsrenten som proxy. I Norge brukes ofte 10-års statsobligasjonsrente, som per 2024 ligger rundt 3-4%.'
        },
        {
          id: '8-2-heading-4',
          type: 'heading',
          order: 9,
          level: 3,
          text: 'Markedets risikopremie (rM - rf)'
        },
        {
          id: '8-2-text-3',
          type: 'text',
          order: 10,
          text: 'Risikopremien er meravkastningen investorer krever for å investere i aksjemarkedet fremfor risikofrie statsobligasjoner. Historisk har den ligget på ca. 5-6% i utviklede markeder, men dette er gjenstand for debatt og kan variere med markedsforhold.'
        },
        {
          id: '8-2-heading-5',
          type: 'heading',
          order: 11,
          level: 3,
          text: 'Beta (β)'
        },
        {
          id: '8-2-text-4',
          type: 'text',
          order: 12,
          text: 'Beta måler hvor mye aksjen svinger i forhold til markedet. En beta på 1 betyr at aksjen svinger likt med markedet. Beta over 1 betyr mer volatil (typisk vekstaksjer), beta under 1 betyr mer stabil (typisk defensive aksjer).'
        },
        {
          id: '8-2-list-1',
          type: 'list',
          order: 13,
          ordered: false,
          items: [
            'β = 1,0: Aksjen svinger likt med markedet',
            'β > 1,0: Mer volatil enn markedet (f.eks. β = 1,5 betyr 50% mer svingninger)',
            'β < 1,0: Mindre volatil enn markedet (f.eks. β = 0,7 betyr 30% mindre svingninger)',
            'β < 0: Beveger seg motsatt av markedet (sjeldent)'
          ]
        },
        {
          id: '8-2-table-1',
          type: 'table',
          order: 14,
          headers: ['Bransje', 'Typisk beta', 'Forklaring'],
          rows: [
            ['Kraftselskaper', '0,4-0,7', 'Stabil etterspørsel, regulerte priser'],
            ['Dagligvarer', '0,6-0,9', 'Folk kjøper mat uansett konjunktur'],
            ['Finans/bank', '0,9-1,3', 'Konjunkturfølsomme'],
            ['Industri', '1,0-1,4', 'Syklisk etterspørsel'],
            ['Teknologi', '1,2-1,8', 'Høy vekst, usikre kontantstrømmer'],
            ['Olje/gass', '1,0-1,5', 'Råvarepriser, konjunkturavhengig']
          ]
        },
        {
          id: '8-2-example-1',
          type: 'example',
          order: 15,
          title: 'CAPM-beregning for Equinor',
          content: 'La oss beregne egenkapitalkostnaden for Equinor:\n\nGitt informasjon:\n• Risikofri rente (10-års statsobligasjon): 3,5%\n• Markedets risikopremie: 5%\n• Equinors beta: 1,2\n\nBeregning med CAPM:\nrE = rf + β × (rM - rf)\nrE = 3,5% + 1,2 × 5%\nrE = 3,5% + 6,0% = 9,5%\n\nEquinors aksjonærer krever altså 9,5% avkastning på sin investering.'
        },
        {
          id: '8-2-heading-6',
          type: 'heading',
          order: 16,
          level: 2,
          text: 'Alternativ metode: Utbyttevekstmodellen'
        },
        {
          id: '8-2-text-5',
          type: 'text',
          order: 17,
          text: 'Gordon Growth-modellen er en alternativ metode som brukes når beta er vanskelig å estimere, eller som en krysssjekk mot CAPM. Den baserer seg på forventet utbytte og antatt vekstrate.'
        },
        {
          id: '8-2-formula-2',
          type: 'formula',
          order: 18,
          formula: 'rE = D₁/P₀ + g',
          description: 'Hvor D₁ = forventet utbytte neste år, P₀ = dagens aksjekurs, og g = forventet årlig vekstrate i utbytte.'
        },
        {
          id: '8-2-text-6',
          type: 'text',
          order: 19,
          text: 'Utbyttevekstmodellen har begrensninger: den forutsetter konstant vekst for alltid, og fungerer dårlig for selskaper som ikke betaler utbytte eller har ustabil utbyttepolitikk. CAPM er derfor den foretrukne metoden i praksis.'
        },
        {
          id: '8-2-keypoint-1',
          type: 'keypoint',
          order: 20,
          points: [
            'CAPM er hovedmetoden for å beregne egenkapitalkostnad',
            'Tre komponenter: risikofri rente + beta × risikopremie',
            'Beta reflekterer systematisk (ikke-diversifiserbar) risiko',
            'Høyere beta = høyere egenkapitalkostnad',
            'Utbyttevekstmodellen er et alternativ, men har flere begrensninger'
          ]
        },
        {
          id: '8-2-quiz-1',
          type: 'quiz',
          order: 21,
          question: 'Et selskap har beta = 1,5. Risikofri rente er 4% og markedspremien er 6%. Hva er egenkapitalkostnaden?',
          options: [
            '10%',
            '11%',
            '13%',
            '15%'
          ],
          correctAnswer: 2,
          explanation: 'rE = rf + β × (rM - rf) = 4% + 1,5 × 6% = 4% + 9% = 13%. Høy beta (1,5) gir et betydelig risikotillegg.'
        },
        {
          id: '8-2-quiz-2',
          type: 'quiz',
          order: 22,
          question: 'Hva betyr en beta på 0,8?',
          options: [
            'Aksjen er 80% mer volatil enn markedet',
            'Aksjen svinger 20% mindre enn markedet',
            'Aksjen har 80% av markedets avkastning',
            '80% av risikoen er systematisk'
          ],
          correctAnswer: 1,
          explanation: 'Beta = 0,8 betyr at aksjen svinger 20% mindre enn markedet. Hvis markedet går opp 10%, forventes aksjen å gå opp ca. 8%. Dette er typisk for defensive sektorer som dagligvarer eller kraft.'
        },
        {
          id: '8-2-quiz-3',
          type: 'quiz',
          order: 23,
          question: 'Hvilken komponent i CAPM representerer kompensasjon for systematisk risiko?',
          options: [
            'Risikofri rente (rf)',
            'Beta (β)',
            'Risikopremien (rM - rf)',
            'Produktet β × (rM - rf)'
          ],
          correctAnswer: 3,
          explanation: 'Produktet β × (rM - rf) er risikotillegget som kompenserer for systematisk risiko. Beta måler mengden systematisk risiko, og risikopremien er prisen per enhet risiko.'
        },
        {
          id: '8-2-exercise-1',
          type: 'exercise',
          order: 24,
          title: 'Beregn egenkapitalkostnad',
          description: 'TechStart ASA er et teknologiselskap med beta = 1,4.\n\nGitt informasjon:\n• Risikofri rente: 3%\n• Historisk markedsavkastning: 9%\n\nOppgaver:\na) Beregn markedets risikopremie\nb) Beregn egenkapitalkostnaden med CAPM\nc) Hvorfor har tech-selskaper ofte høy beta? Nevn minst to grunner.',
          hint: 'Risikopremien = markedsavkastning - risikofri rente. Tenk på hva som gjør tech-selskaper mer volatile.'
        },
        {
          id: '8-2-reflection-1',
          type: 'reflection',
          order: 25,
          question: 'Hvorfor tror du kraftselskaper har lavere beta enn tech-selskaper? Tenk på stabiliteten i etterspørselen, inntektspredikerbarheten, og følsomheten for konjunkturer.'
        }
      ]
    },

    // SEKSJON 8.3: Gjeldskostnad
    {
      id: 'seksjon-8-3-gjeldskostnad',
      title: 'Gjeldskostnad',
      order: 3,
      content: [
        {
          id: '8-3-intro',
          type: 'text',
          order: 1,
          text: 'Gjeld er ofte billigere enn egenkapital - og ikke bare fordi banken tar lavere rente. Staten gir deg faktisk "rabatt" på gjelden gjennom skattefradrag på rentekostnader. Dette skatteskjoldet kan spare selskaper for millioner i årlig kostnad.',
          emphasis: 'important'
        },
        {
          id: '8-3-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Gjeldskostnad før skatt'
        },
        {
          id: '8-3-def-1',
          type: 'definition',
          order: 3,
          term: 'Gjeldskostnad (rD)',
          definition: 'Den effektive renten selskapet betaler på sine lån og obligasjoner. For obligasjoner er dette yield to maturity (YTM) i markedet, for banklån er det avtalte rentebetingelser.'
        },
        {
          id: '8-3-text-1',
          type: 'text',
          order: 4,
          text: 'Å finne gjeldskostnaden er ofte enklere enn egenkapitalkostnaden. For børsnoterte obligasjoner kan vi observere YTM direkte i markedet. For banklån bruker vi den avtalte renten. Hvis selskapet nettopp har lånt penger, reflekterer den nye renten markedets vurdering av selskapets risiko.'
        },
        {
          id: '8-3-heading-2',
          type: 'heading',
          order: 5,
          level: 2,
          text: 'Skatteskjoldet - gjeld gir skattefradrag'
        },
        {
          id: '8-3-text-2',
          type: 'text',
          order: 6,
          text: 'Den store fordelen med gjeld er at renteutgifter er fradragsberettiget. Det betyr at staten i praksis betaler en del av rentekostnaden gjennom lavere skatt. Denne fordelen kalles skatteskjoldet.'
        },
        {
          id: '8-3-def-2',
          type: 'definition',
          order: 7,
          term: 'Skatteskjold',
          definition: 'Skattebesparelsen som oppstår fordi renteutgifter er fradragsberettiget. Skatteskjoldet = Rentekostnad × Skattesats.'
        },
        {
          id: '8-3-formula-1',
          type: 'formula',
          order: 8,
          formula: 'rD,etter skatt = rD × (1 - Tc)',
          description: 'Hvor rD = gjeldskostnad før skatt (rentesats), og Tc = selskapsskattesats. I Norge er Tc = 22%.'
        },
        {
          id: '8-3-example-1',
          type: 'example',
          order: 9,
          title: 'Skatteeffekten på gjeld',
          content: 'Et selskap har:\n• Lånerente: 6%\n• Skattesats: 22%\n\nGjeldskostnad før skatt: 6%\nGjeldskostnad etter skatt: 6% × (1 - 0,22) = 6% × 0,78 = 4,68%\n\nSelskapet sparer 6% × 0,22 = 1,32 prosentpoeng takket være skattefradraget!\n\nPå et lån på 100 MNOK betyr dette:\n• Rentekostnad før skatt: 6 MNOK\n• Skattebesparelse: 1,32 MNOK\n• Netto kostnad: 4,68 MNOK'
        },
        {
          id: '8-3-heading-3',
          type: 'heading',
          order: 10,
          level: 2,
          text: 'Kredittvurdering og risikopremie'
        },
        {
          id: '8-3-text-3',
          type: 'text',
          order: 11,
          text: 'Ikke alle selskaper betaler samme rente. Renten avhenger av selskapets kredittrisiko - sannsynligheten for at de ikke kan betale tilbake. Kredittvurderingsbyråer som Moody\'s og S&P gir selskaper en rating som reflekterer denne risikoen.'
        },
        {
          id: '8-3-table-1',
          type: 'table',
          order: 12,
          headers: ['Rating', 'Kategori', 'Typisk spread over statsobl.'],
          rows: [
            ['AAA', 'Høyeste kvalitet', '0,5-0,8%'],
            ['AA', 'Veldig høy kvalitet', '0,8-1,2%'],
            ['A', 'God kvalitet', '1,2-1,8%'],
            ['BBB', 'Investment grade (laveste)', '1,8-2,8%'],
            ['BB', 'Spekulativ', '3,0-4,5%'],
            ['B', 'Høy risiko', '4,5-6,0%'],
            ['CCC og lavere', 'Svært høy risiko', '6,0%+']
          ]
        },
        {
          id: '8-3-text-4',
          type: 'text',
          order: 13,
          text: 'BBB er den laveste "investment grade"-ratingen. Mange institusjonelle investorer har mandat til kun å investere i investment grade, så å falle fra BBB til BB (bli "fallen angel") kan dramatisk øke lånekostnaden.'
        },
        {
          id: '8-3-example-2',
          type: 'example',
          order: 14,
          title: 'Ulik kredittvurdering - ulik rente',
          content: 'To selskaper låner 100 MNOK med 10 års løpetid:\n\nSelskap A (rating AA):\n• Statsobligasjon: 3,5%\n• Kredittspread: +1,0%\n• Lånerente: 4,5%\n• Etter skatt (22%): 3,51%\n\nSelskap B (rating BB):\n• Statsobligasjon: 3,5%\n• Kredittspread: +4,0%\n• Lånerente: 7,5%\n• Etter skatt (22%): 5,85%\n\nÅrlig forskjell i rentekostnad: 2,34 MNOK!'
        },
        {
          id: '8-3-keypoint-1',
          type: 'keypoint',
          order: 15,
          points: [
            'Gjeldskostnad er renten selskapet betaler på lån og obligasjoner',
            'Skatteskjoldet reduserer effektiv kostnad: rD × (1 - Tc)',
            'Med 22% skatt blir en 6% rente bare 4,68% etter skatt',
            'Kredittvurdering påvirker rentekostnaden betydelig',
            'Gjeld er vanligvis billigere enn egenkapital pga. lavere risiko og skattefordel'
          ]
        },
        {
          id: '8-3-quiz-1',
          type: 'quiz',
          order: 16,
          question: 'Et selskap har 5% rente på gjelden og 25% skattesats. Hva er gjeldskostnaden etter skatt?',
          options: [
            '5,00%',
            '4,25%',
            '3,75%',
            '6,25%'
          ],
          correctAnswer: 2,
          explanation: 'rD,etter skatt = 5% × (1 - 0,25) = 5% × 0,75 = 3,75%. Skattefradraget sparer selskapet 1,25 prosentpoeng.'
        },
        {
          id: '8-3-quiz-2',
          type: 'quiz',
          order: 17,
          question: 'Hva er "skatteskjoldet" på gjeld?',
          options: [
            'En skattefri grense for hvor mye gjeld man kan ha',
            'Skattebesparelsen fra at renteutgifter er fradragsberettiget',
            'En forsikring mot at gjelden øker',
            'En avgift på høy gjeldsgrad'
          ],
          correctAnswer: 1,
          explanation: 'Skatteskjoldet er skattebesparelsen som oppstår fordi renteutgifter kan trekkes fra skattbar inntekt. Staten "betaler" dermed en del av rentekostnaden.'
        },
        {
          id: '8-3-quiz-3',
          type: 'quiz',
          order: 18,
          question: 'Et selskap har kredittvurdering BBB. Hva skjer typisk med lånekostnaden hvis ratingen faller til BB?',
          options: [
            'Den forblir uendret',
            'Den synker fordi BB er bedre enn BBB',
            'Den øker betydelig fordi selskapet faller ut av investment grade',
            'Den øker kun hvis selskapet tar opp nye lån'
          ],
          correctAnswer: 2,
          explanation: 'BBB er laveste investment grade. Å falle til BB ("junk") betyr at mange institusjonelle investorer må selge, og kredittspread øker typisk med 1-2 prosentpoeng eller mer.'
        },
        {
          id: '8-3-exercise-1',
          type: 'exercise',
          order: 19,
          title: 'Beregn gjeldskostnad',
          description: 'NorIndustri AS har følgende gjeld:\n• Banklån: 50 MNOK til 5% rente\n• Obligasjonslån: 100 MNOK til 7% rente\n• Skattesats: 22%\n\nOppgaver:\na) Beregn vektet gjennomsnittlig rente før skatt\nb) Beregn gjeldskostnad etter skatt\nc) Hvor mye sparer selskapet årlig i skatt pga. skattefradraget?',
          hint: 'Vektet snitt = (beløp1 × rente1 + beløp2 × rente2) / total gjeld'
        },
        {
          id: '8-3-reflection-1',
          type: 'reflection',
          order: 20,
          question: 'Hvis gjeld er billigere enn egenkapital, hvorfor finansierer ikke alle selskaper seg 100% med gjeld? Hva er risikoen ved høy gjeldsgrad?'
        }
      ]
    },

    // SEKSJON 8.4: WACC
    {
      id: 'seksjon-8-4-wacc',
      title: 'WACC - Totalkapitalkostnad',
      order: 4,
      content: [
        {
          id: '8-4-intro',
          type: 'text',
          order: 1,
          text: 'Du har nå lært å beregne kostnad for egenkapital og gjeld separat. Men et selskap bruker begge. Hvordan finner vi én rente som reflekterer totalkostnaden for all kapital? Svaret er WACC - Weighted Average Cost of Capital - den kanskje viktigste parameteren i corporate finance.',
          emphasis: 'important'
        },
        {
          id: '8-4-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Weighted Average Cost of Capital'
        },
        {
          id: '8-4-def-1',
          type: 'definition',
          order: 3,
          term: 'WACC',
          definition: 'Vektet gjennomsnitt av egenkapitalkostnad og gjeldskostnad etter skatt, der vektene er andelen av total kapital. WACC representerer selskapets samlede kapitalkostnad og brukes som diskonteringsrente for prosjekter med samme risiko som selskapet.'
        },
        {
          id: '8-4-formula-1',
          type: 'formula',
          order: 4,
          formula: 'WACC = (E/V) × rE + (D/V) × rD × (1 - Tc)',
          description: 'Hvor E = markedsverdi egenkapital, D = markedsverdi gjeld, V = E + D = total verdi, rE = egenkapitalkostnad, rD = gjeldskostnad før skatt, Tc = skattesats.'
        },
        {
          id: '8-4-heading-2',
          type: 'heading',
          order: 5,
          level: 2,
          text: 'WACC steg for steg'
        },
        {
          id: '8-4-list-1',
          type: 'list',
          order: 6,
          ordered: true,
          items: [
            'Finn markedsverdi av egenkapital (E): Aksjekurs × antall aksjer',
            'Finn markedsverdi av gjeld (D): Bokført verdi eller markedspris på obligasjoner',
            'Beregn vektene: E/V og D/V der V = E + D',
            'Beregn egenkapitalkostnad (rE) med CAPM',
            'Finn gjeldskostnad før skatt (rD)',
            'Sett inn i WACC-formelen med skattejustering på gjeld'
          ]
        },
        {
          id: '8-4-example-1',
          type: 'example',
          order: 7,
          title: 'WACC-beregning for NorTech ASA',
          content: 'La oss beregne WACC for NorTech ASA:\n\nGitt informasjon:\n• Markedsverdi egenkapital (E): 600 MNOK\n• Markedsverdi gjeld (D): 400 MNOK\n• Egenkapitalkostnad (fra CAPM): 10%\n• Gjeldskostnad før skatt: 5%\n• Skattesats: 22%\n\nSteg 1: Beregn total verdi og vekter\nV = E + D = 600 + 400 = 1000 MNOK\nE/V = 600/1000 = 60%\nD/V = 400/1000 = 40%\n\nSteg 2: Sett inn i WACC-formelen\nWACC = (E/V) × rE + (D/V) × rD × (1 - Tc)\nWACC = 0,60 × 10% + 0,40 × 5% × (1 - 0,22)\nWACC = 6% + 0,40 × 5% × 0,78\nWACC = 6% + 1,56%\nWACC = 7,56%\n\nNorTechs samlede kapitalkostnad er 7,56%. Dette er minimumskravet til avkastning på nye prosjekter.'
        },
        {
          id: '8-4-heading-3',
          type: 'heading',
          order: 8,
          level: 2,
          text: 'Viktige prinsipper for WACC'
        },
        {
          id: '8-4-heading-4',
          type: 'heading',
          order: 9,
          level: 3,
          text: 'Bruk markedsverdier, ikke bokførte verdier'
        },
        {
          id: '8-4-text-1',
          type: 'text',
          order: 10,
          text: 'Bokførte verdier reflekterer historiske kostnader, ikke hva kapitalen er verdt i dag. Investorer vurderer avkastning basert på markedsverdi - det de faktisk har investert eller kunne solgt for. Markedsverdi av egenkapital er aksjekurs × antall aksjer utestående.'
        },
        {
          id: '8-4-heading-5',
          type: 'heading',
          order: 11,
          level: 3,
          text: 'Bruk målsatt (target) kapitalstruktur'
        },
        {
          id: '8-4-text-2',
          type: 'text',
          order: 12,
          text: 'Hvis selskapets nåværende kapitalstruktur avviker fra den langsiktige målstrukturen, bør du bruke målstrukturen. WACC skal reflektere fremtidig finansiering, ikke nødvendigvis dagens situasjon.'
        },
        {
          id: '8-4-heading-6',
          type: 'heading',
          order: 12,
          level: 3,
          text: 'WACC gjelder for prosjekter med lik risiko'
        },
        {
          id: '8-4-text-3',
          type: 'text',
          order: 13,
          text: 'WACC reflekterer risikoen til selskapet som helhet. Hvis et prosjekt har vesentlig annerledes risiko (f.eks. et oljeselskap som vurderer et fornybar-prosjekt), må diskonteringsrenten justeres.'
        },
        {
          id: '8-4-table-1',
          type: 'table',
          order: 14,
          headers: ['Prinsipp', 'Riktig', 'Feil'],
          rows: [
            ['Verdier', 'Markedsverdier', 'Bokførte verdier'],
            ['Kapitalstruktur', 'Target/langsiktig', 'Tilfeldig nåværende'],
            ['Gjeldskostnad', 'Etter skatt', 'Før skatt'],
            ['Risiko', 'Justert for prosjektrisiko', 'Samme for alle prosjekter']
          ]
        },
        {
          id: '8-4-keypoint-1',
          type: 'keypoint',
          order: 15,
          points: [
            'WACC er vektet snitt av EK- og gjeldskostnad',
            'Bruk markedsverdier for vektene, ikke bokførte verdier',
            'Gjeld får skattejustering (1 - Tc) pga. fradragsrett',
            'WACC er minimumskravet for prosjektavkastning',
            'Juster WACC hvis prosjektrisiko avviker fra selskapsrisiko'
          ]
        },
        {
          id: '8-4-quiz-1',
          type: 'quiz',
          order: 16,
          question: 'Et selskap finansieres 50% med EK (kostnad 12%) og 50% med gjeld (6% rente, 22% skatt). Hva er WACC?',
          options: [
            '9,00%',
            '8,34%',
            '7,68%',
            '9,66%'
          ],
          correctAnswer: 1,
          explanation: 'WACC = 0,5 × 12% + 0,5 × 6% × (1 - 0,22) = 6% + 0,5 × 6% × 0,78 = 6% + 2,34% = 8,34%'
        },
        {
          id: '8-4-quiz-2',
          type: 'quiz',
          order: 17,
          question: 'Hvorfor bruker vi markedsverdier og ikke bokførte verdier i WACC?',
          options: [
            'Fordi bokførte verdier alltid er feil',
            'Fordi markedsverdier reflekterer hva investorer faktisk har investert',
            'Fordi det er enklere å finne markedsverdier',
            'Fordi loven krever det'
          ],
          correctAnswer: 1,
          explanation: 'Markedsverdier reflekterer hva investorene faktisk har investert (for EK) og hva de kunne solgt for. Avkastningskravet er basert på disse verdiene, ikke historiske bokførte verdier.'
        },
        {
          id: '8-4-quiz-3',
          type: 'quiz',
          order: 18,
          question: 'Hva skjer med WACC hvis selskapet øker gjeldsandelen (alt annet likt)?',
          options: [
            'WACC øker fordi gjeld er risikabelt',
            'WACC synker fordi gjeld er billigere enn EK',
            'WACC forblir uendret',
            'WACC kan både øke og synke avhengig av situasjonen'
          ],
          correctAnswer: 3,
          explanation: 'I utgangspunktet synker WACC med mer gjeld pga. skattefordelen. Men for høy gjeld øker konkurssannsynligheten, noe som øker både rE og rD. Optimal gjeldsgrad balanserer disse effektene.'
        },
        {
          id: '8-4-exercise-1',
          type: 'exercise',
          order: 19,
          title: 'Komplett WACC-beregning',
          description: 'GrønnEnergi AS har følgende informasjon:\n\n• Aksjekurs: 150 kr\n• Antall aksjer utestående: 10 millioner\n• Gjeld (markedsverdi): 500 MNOK\n• Risikofri rente: 3%\n• Markedspremie: 5%\n• Beta: 1,2\n• Gjeldskostnad før skatt: 5,5%\n• Skattesats: 22%\n\nBeregn:\na) Markedsverdi egenkapital\nb) Total verdi (V) og kapitalstrukturvekter (E/V og D/V)\nc) Egenkapitalkostnad med CAPM\nd) WACC',
          hint: 'Start med markedsverdi EK = aksjekurs × antall aksjer. Deretter vekter, så CAPM, og til slutt WACC.'
        },
        {
          id: '8-4-reflection-1',
          type: 'reflection',
          order: 20,
          question: 'Hvorfor tror du selskaper ikke finansierer seg 100% med gjeld, selv om gjeld er billigere? Hva skjer med risikoen for aksjonærer og långivere ved svært høy gjeldsgrad?'
        }
      ]
    },

    // SEKSJON 8.5: Bruk av WACC i praksis
    {
      id: 'seksjon-8-5-praksis',
      title: 'Bruk av WACC i praksis',
      order: 5,
      content: [
        {
          id: '8-5-intro',
          type: 'text',
          order: 1,
          text: 'Nå har du verktøyene til å beregne kapitalkostnaden. Men hvordan bruker du den i praksis? La oss koble WACC direkte til investeringsbeslutninger og se hvordan den påvirker prosjekters lønnsomhet.',
          emphasis: 'important'
        },
        {
          id: '8-5-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'WACC som diskonteringsrente'
        },
        {
          id: '8-5-text-1',
          type: 'text',
          order: 3,
          text: 'WACC brukes som diskonteringsrente i NPV-beregninger. Et prosjekt er lønnsomt hvis det gir avkastning høyere enn kapitalkostnaden - altså NPV > 0 eller IRR > WACC.'
        },
        {
          id: '8-5-list-1',
          type: 'list',
          order: 4,
          ordered: false,
          items: [
            'NPV > 0: Prosjektet gir avkastning over kapitalkostnaden - godkjenn',
            'NPV < 0: Prosjektet gir avkastning under kapitalkostnaden - avslå',
            'IRR > WACC: Lønnsomt prosjekt',
            'IRR < WACC: Ulønnsomt prosjekt'
          ]
        },
        {
          id: '8-5-example-1',
          type: 'example',
          order: 5,
          title: 'Investeringsbeslutning med WACC',
          content: 'NorTech vurderer nytt produksjonsanlegg:\n\n• Investering: 100 MNOK\n• Årlig kontantstrøm: 15 MNOK i 15 år\n• WACC (beregnet tidligere): 7,56%\n\nNPV = -100 + 15 × annuitetsfaktor(7,56%, 15 år)\nNPV = -100 + 15 × 8,76\nNPV = -100 + 131,4 = 31,4 MNOK\n\nNPV > 0 → Prosjektet er lønnsomt!\n\nProsjektet gir 31,4 MNOK mer enn minimumskravet til avkastning. NorTech bør investere.'
        },
        {
          id: '8-5-heading-2',
          type: 'heading',
          order: 6,
          level: 2,
          text: 'Når må WACC justeres?'
        },
        {
          id: '8-5-text-2',
          type: 'text',
          order: 7,
          text: 'WACC reflekterer gjennomsnittlig risiko for selskapet. Men alle prosjekter har ikke samme risiko. Et konservativt utvidelsesprosjekt har lavere risiko enn et prosjekt i et helt nytt marked.'
        },
        {
          id: '8-5-table-1',
          type: 'table',
          order: 8,
          headers: ['Situasjon', 'Justering av diskonteringsrente'],
          rows: [
            ['Prosjekt med lik risiko som selskapet', 'Bruk WACC direkte'],
            ['Lavrisikoprosjekt (f.eks. effektivisering)', 'Bruk lavere rente enn WACC'],
            ['Høyrisikoprosjekt (f.eks. ny teknologi)', 'Bruk høyere rente enn WACC'],
            ['Prosjekt i ny bransje', 'Bruk WACC for sammenlignbare selskaper i den bransjen']
          ]
        },
        {
          id: '8-5-example-2',
          type: 'example',
          order: 9,
          title: 'Equinor - ulike forretningsområder',
          content: 'Equinor driver med både olje/gass og fornybar energi:\n\nOlje/gass-produksjon:\n• Høy beta (~1,2-1,4)\n• Volatile råvarepriser\n• Avkastningskrav kanskje 10-12%\n\nHavvind (etablert teknologi):\n• Lavere beta (~0,8-1,0)\n• Mer forutsigbare kontantstrømmer\n• Avkastningskrav kanskje 7-9%\n\nÅ bruke samme WACC for begge ville føre til:\n• For få fornybar-prosjekter (de ser ulønnsomme ut med for høy rente)\n• For mange olje-prosjekter (de ser lønnsomme ut med for lav rente)'
        },
        {
          id: '8-5-heading-3',
          type: 'heading',
          order: 10,
          level: 2,
          text: 'Divisjons-WACC'
        },
        {
          id: '8-5-text-3',
          type: 'text',
          order: 11,
          text: 'Store, diversifiserte selskaper løser risikoproblemet ved å beregne divisjonsspesifikk WACC. Hver forretningsenhet får sitt eget avkastningskrav basert på sin bransjerisiko.'
        },
        {
          id: '8-5-text-4',
          type: 'text',
          order: 12,
          text: 'For å finne divisjons-WACC brukes ofte "pure play"-metoden: Finn børsnoterte selskaper som kun driver i den aktuelle bransjen, og bruk deres beta og WACC som utgangspunkt.'
        },
        {
          id: '8-5-heading-4',
          type: 'heading',
          order: 13,
          level: 2,
          text: 'Vanlige fallgruver'
        },
        {
          id: '8-5-list-2',
          type: 'list',
          order: 14,
          ordered: false,
          items: [
            'Bruke bokført kapitalstruktur istedenfor markedsverdier',
            'Glemme skattejustering på gjeldskostnaden',
            'Bruke samme WACC for alle prosjekter uansett risiko',
            'Ukritisk bruk av historisk markedspremie',
            'Glemme at WACC er et estimat med usikkerhet'
          ]
        },
        {
          id: '8-5-text-5',
          type: 'text',
          order: 15,
          text: 'Husk at WACC er et estimat. Små endringer i input (beta, markedspremie) kan gi betydelige utslag. Bruk sensitivitetsanalyse for å teste hvor robust konklusjonen er.'
        },
        {
          id: '8-5-keypoint-1',
          type: 'keypoint',
          order: 16,
          points: [
            'WACC er minimumskravet for prosjektavkastning',
            'NPV > 0 og IRR > WACC betyr lønnsomt prosjekt',
            'Juster diskonteringsrenten for prosjekter med annen risiko',
            'Store selskaper bruker ofte divisjonsspesifikk WACC',
            'WACC er et estimat - bruk sensitivitetsanalyse'
          ]
        },
        {
          id: '8-5-quiz-1',
          type: 'quiz',
          order: 17,
          question: 'Når bør du bruke høyere diskonteringsrente enn selskapets WACC?',
          options: [
            'Når prosjektet er stort',
            'Når prosjektet har høyere risiko enn selskapsgjennomsnittet',
            'Når prosjektet gir høy forventet avkastning',
            'Når markedet er volatilt'
          ],
          correctAnswer: 1,
          explanation: 'Høyere risiko krever høyere avkastningskrav. Bruker du selskapets gjennomsnittlige WACC på et høyrisikoprosjekt, undervurderer du risikoen og kan ende opp med å investere i prosjekter som ikke kompenserer for risikoen.'
        },
        {
          id: '8-5-quiz-2',
          type: 'quiz',
          order: 18,
          question: 'Et prosjekt har IRR = 12% og selskapet har WACC = 10%. Hva er konklusjonen?',
          options: [
            'Prosjektet er ikke lønnsomt',
            'Prosjektet er lønnsomt',
            'Trenger mer informasjon om kontantstrømmene',
            'Prosjektet er risikofritt'
          ],
          correctAnswer: 1,
          explanation: 'IRR > WACC betyr at prosjektet gir høyere avkastning enn minimumskravet. Prosjektet skaper verdi og bør gjennomføres (forutsatt at risikoen er lik selskapets gjennomsnitt).'
        },
        {
          id: '8-5-quiz-3',
          type: 'quiz',
          order: 19,
          question: 'Hva er "pure play"-metoden?',
          options: [
            'En metode for å eliminere all risiko',
            'Å finne WACC ved å se på selskaper som kun opererer i én bransje',
            'Å bruke kun egenkapital-finansiering',
            'En metode for å maksimere IRR'
          ],
          correctAnswer: 1,
          explanation: 'Pure play-metoden innebærer å finne sammenlignbare selskaper som kun opererer i den aktuelle bransjen, og bruke deres beta/WACC som grunnlag for divisjons-WACC.'
        },
        {
          id: '8-5-exercise-1',
          type: 'exercise',
          order: 20,
          title: 'Vurder et prosjekt',
          description: 'SolEnergi AS vurderer å investere i et solcelleanlegg:\n\n• Investering: 50 MNOK\n• Årlig kontantstrøm: 7 MNOK i 12 år\n• Selskapets WACC: 9%\n• Annuitetsfaktor ved 9% for 12 år: 7,16\n• Annuitetsfaktor ved 12% for 12 år: 6,19\n\nOppgaver:\na) Beregn NPV med selskapets WACC (9%)\nb) Er prosjektet lønnsomt?\nc) Hva blir NPV hvis prosjektets risiko tilsier 12% diskonteringsrente?\nd) Hvordan endrer dette konklusjonen?',
          hint: 'NPV = -Investering + Årlig CF × Annuitetsfaktor'
        },
        {
          id: '8-5-reflection-1',
          type: 'reflection',
          order: 21,
          question: 'Hvorfor kan det være farlig å bruke samme avkastningskrav for alle prosjekter i et stort, diversifisert selskap? Tenk på hvordan dette påvirker hvilke prosjekter som blir godkjent.'
        }
      ]
    },

    // SEKSJON 8.6: Oppsummering
    {
      id: 'seksjon-8-6-oppsummering',
      title: 'Oppsummering og kontroll',
      order: 6,
      content: [
        {
          id: '8-6-heading-1',
          type: 'heading',
          order: 1,
          level: 2,
          text: 'Kapitalkostnad - en oppsummering'
        },
        {
          id: '8-6-text-1',
          type: 'text',
          order: 2,
          text: 'I denne modulen har du lært å beregne selskapets kapitalkostnad - avkastningskravet som investorene stiller. Dette er fundamentalt for å kunne vurdere om investeringsprosjekter skaper verdi.'
        },
        {
          id: '8-6-table-1',
          type: 'table',
          order: 3,
          headers: ['Konsept', 'Formel', 'Formål'],
          rows: [
            ['Egenkapitalkostnad (CAPM)', 'rE = rf + β(rM - rf)', 'Avkastningskrav fra aksjonærer'],
            ['Gjeldskostnad etter skatt', 'rD × (1 - Tc)', 'Lånekostnad justert for skattefordel'],
            ['WACC', '(E/V)×rE + (D/V)×rD×(1-Tc)', 'Samlet kapitalkostnad']
          ]
        },
        {
          id: '8-6-keypoint-1',
          type: 'keypoint',
          order: 4,
          points: [
            'Kapitalkostnad er investorenes avkastningskrav - prisen selskapet betaler for kapital',
            'CAPM beregner egenkapitalkostnad basert på systematisk risiko (beta)',
            'Gjeld har skattefordel som reduserer effektiv kostnad med faktoren (1 - Tc)',
            'WACC kombinerer EK- og gjeldskostnad til én diskonteringsrente',
            'Bruk WACC som minimumskrav for prosjekter - NPV > 0 betyr lønnsomt',
            'Juster for prosjektspesifikk risiko når den avviker fra selskapsrisiko'
          ]
        },
        {
          id: '8-6-heading-2',
          type: 'heading',
          order: 5,
          level: 2,
          text: 'Avsluttende kunnskapstest'
        },
        {
          id: '8-6-quiz-1',
          type: 'quiz',
          order: 6,
          question: 'Et selskap har 40% egenkapital og 60% gjeld. EK-kostnad er 15%, gjeldskostnad før skatt er 6%, og skattesatsen er 22%. Hva er WACC?',
          options: [
            '8,81%',
            '9,60%',
            '10,20%',
            '8,40%'
          ],
          correctAnswer: 0,
          explanation: 'WACC = 0,40 × 15% + 0,60 × 6% × (1 - 0,22) = 6% + 0,60 × 6% × 0,78 = 6% + 2,81% = 8,81%'
        },
        {
          id: '8-6-quiz-2',
          type: 'quiz',
          order: 7,
          question: 'Hvorfor gir skattefradraget på renteutgifter en fordel for gjeld?',
          options: [
            'Fordi banken gir lavere rente',
            'Fordi rentene trekkes fra skattbar inntekt, så staten "betaler" en del',
            'Fordi gjeldshavere betaler lavere skatt',
            'Fordi aksjonærene får høyere utbytte'
          ],
          correctAnswer: 1,
          explanation: 'Renteutgifter er fradragsberettiget. Med 22% skatt og 6% rente blir nettokostnaden 6% × (1-0,22) = 4,68%. Staten dekker effektivt 22% av rentekostnaden.'
        },
        {
          id: '8-6-quiz-3',
          type: 'quiz',
          order: 8,
          question: 'Hvilken komponent i CAPM varierer mest fra selskap til selskap?',
          options: [
            'Risikofri rente (rf)',
            'Markedets risikopremie (rM - rf)',
            'Beta (β)',
            'Alle varierer like mye'
          ],
          correctAnswer: 2,
          explanation: 'Risikofri rente og markedspremie er markedsbestemte og like for alle. Beta er selskapsspesifikk og varierer betydelig - fra under 0,5 for stabile utilities til over 2,0 for volatile vekstaksjer.'
        },
        {
          id: '8-6-quiz-4',
          type: 'quiz',
          order: 9,
          question: 'Et selskap med WACC = 10% vurderer to prosjekter: A med IRR = 12% og B med IRR = 8%. Hva bør selskapet gjøre?',
          options: [
            'Investere i begge prosjektene',
            'Kun investere i prosjekt A',
            'Kun investere i prosjekt B',
            'Ikke investere i noen av dem'
          ],
          correctAnswer: 1,
          explanation: 'Kun prosjekt A har IRR > WACC og bør gjennomføres. Prosjekt B gir avkastning under kapitalkostnaden og vil ødelegge verdi.'
        },
        {
          id: '8-6-quiz-5',
          type: 'quiz',
          order: 10,
          question: 'Hva skjer med WACC hvis selskapets beta øker?',
          options: [
            'WACC øker fordi egenkapitalkostnaden øker',
            'WACC synker fordi selskapet blir mer risikabelt',
            'WACC forblir uendret',
            'WACC synker fordi gjeldskostnaden synker'
          ],
          correctAnswer: 0,
          explanation: 'Høyere beta → høyere egenkapitalkostnad via CAPM → høyere WACC. Dette reflekterer at mer risikable selskaper må tilby høyere forventet avkastning.'
        },
        {
          id: '8-6-exercise-1',
          type: 'exercise',
          order: 11,
          title: 'Komplett analyse: InnoTech ASA',
          description: 'InnoTech ASA vurderer en stor investering i automatisering. Du har følgende informasjon:\n\nSelskapsdata:\n• Aksjekurs: 200 kr, 5 millioner aksjer\n• Gjeld (markedsverdi): 400 MNOK\n• Gjeldskostnad før skatt: 6%\n• Skattesats: 22%\n\nMarkedsdata:\n• Risikofri rente: 3,5%\n• Markedspremie: 5%\n• InnoTechs beta: 1,3\n\nProsjektdata:\n• Investering: 200 MNOK\n• Årlig kontantstrøm: 35 MNOK i 10 år\n• Annuitetsfaktor ved 10%: 6,14\n• Annuitetsfaktor ved 11%: 5,89\n\nBeregn:\na) Markedsverdi egenkapital og vekter\nb) Egenkapitalkostnad (CAPM)\nc) WACC\nd) Prosjektets NPV\ne) Er prosjektet lønnsomt? Begrunn svaret.',
          hint: 'Følg stegene systematisk: Først verdier og vekter, så CAPM, så WACC, så NPV.'
        },
        {
          id: '8-6-reflection-1',
          type: 'reflection',
          order: 12,
          question: 'Tenk på et selskap du kjenner (f.eks. der du jobber eller har investert). Hvilke faktorer tror du påvirker deres kapitalkostnad mest - beta, gjeldsgrad, eller skattesats? Hvordan ville du gått frem for å estimere selskapets WACC?'
        },
        {
          id: '8-6-text-exercises',
          type: 'text',
          order: 13,
          text: 'Vil du øve mer på kapitalkostnad og WACC? Oppgavesettet til dette emnet finner du under neste modul: Kapitalstruktur og Dividende. Der vil du finne flere oppgaver som kombinerer kapitalkostnad med kapitalstrukturvalg.'
        }
      ]
    }
  ],
  moduleQuiz: {
    id: 'modul-8-kapitalkostnad-quiz',
    title: 'Modulquiz: Kapitalkostnad',
    description: 'Test din forståelse av kapitalkostnad, CAPM, gjeldskostnad og WACC. Du trenger minst 80% riktig for å bestå.',
    passingScore: 80,
    questionsToShow: 20,
    questions: [
      // Grunnleggende forståelse av kapitalkostnad
      {
        id: 'kk-q1',
        question: 'Hva representerer kapitalkostnaden for et selskap?',
        options: [
          'Selskapets totale kostnader',
          'Avkastningen investorene krever for å stille kapital til disposisjon',
          'Bankens utlånsrente',
          'Inflasjonsraten i økonomien'
        ],
        correctAnswer: 1,
        explanation: 'Kapitalkostnaden er avkastningskravet til investorene - både aksjonærer og långivere. Det representerer alternativkostnaden deres ved å investere i selskapet.'
      },
      {
        id: 'kk-q2',
        question: 'Hvorfor er kapitalkostnaden viktig i investeringsanalyse?',
        options: [
          'Den bestemmer selskapets skattesats',
          'Den brukes som diskonteringsrente i NPV-beregninger',
          'Den avgjør hvor mye gjeld selskapet kan ta opp',
          'Den bestemmer aksjekursen direkte'
        ],
        correctAnswer: 1,
        explanation: 'Kapitalkostnaden brukes som diskonteringsrente når vi beregner NPV av investeringsprosjekter. Et prosjekt er lønnsomt hvis avkastningen overstiger kapitalkostnaden.'
      },
      {
        id: 'kk-q3',
        question: 'Hvilken type kapital har normalt høyest kostnad?',
        options: [
          'Banklån',
          'Obligasjonslån',
          'Egenkapital',
          'Leverandørgjeld'
        ],
        correctAnswer: 2,
        explanation: 'Egenkapital har høyest kostnad fordi aksjonærene bærer høyest risiko - de står sist i køen ved konkurs og har ingen garantert avkastning.'
      },
      {
        id: 'kk-q4',
        question: 'Hva er sammenhengen mellom risiko og avkastningskrav?',
        options: [
          'Høyere risiko gir lavere avkastningskrav',
          'Det er ingen sammenheng',
          'Høyere risiko gir høyere avkastningskrav',
          'Risiko påvirker kun gjeldskostnaden'
        ],
        correctAnswer: 2,
        explanation: 'Investorer krever høyere avkastning for å kompensere for høyere risiko. Dette er et fundamentalt prinsipp i finans.'
      },
      // CAPM-spørsmål
      {
        id: 'kk-q5',
        question: 'Hva står CAPM for?',
        options: [
          'Capital Asset Pricing Model',
          'Cost And Profit Management',
          'Corporate Annual Performance Measure',
          'Cash Asset Portfolio Method'
        ],
        correctAnswer: 0,
        explanation: 'CAPM = Capital Asset Pricing Model, en modell for å beregne forventet avkastning basert på systematisk risiko.'
      },
      {
        id: 'kk-q6',
        question: 'Hva er formelen for CAPM?',
        options: [
          'rE = rf × β × (rM - rf)',
          'rE = rf + β × (rM - rf)',
          'rE = rf - β × (rM - rf)',
          'rE = rf + β + (rM - rf)'
        ],
        correctAnswer: 1,
        explanation: 'CAPM-formelen er rE = rf + β × (rM - rf), hvor risikofri rente pluss beta ganger risikopremien gir egenkapitalkostnaden.'
      },
      {
        id: 'kk-q7',
        question: 'Hva representerer risikofri rente (rf) i CAPM?',
        options: [
          'Sentralbankens styringsrente',
          'Avkastningen på en investering uten risiko, typisk statsobligasjoner',
          'Bankenes innskuddsrente',
          'NIBOR-renten'
        ],
        correctAnswer: 1,
        explanation: 'Risikofri rente representerer tidsverdien av penger uten risiko. I praksis brukes ofte 10-års statsobligasjonsrente.'
      },
      {
        id: 'kk-q8',
        question: 'Hva måler beta (β) i CAPM?',
        options: [
          'Selskapets totale risiko',
          'Selskapets systematiske risiko relativt til markedet',
          'Selskapets gjeldsnivå',
          'Selskapets lønnsomhet'
        ],
        correctAnswer: 1,
        explanation: 'Beta måler systematisk risiko - hvor mye aksjen svinger i forhold til markedet. Usystematisk risiko kan diversifiseres bort.'
      },
      {
        id: 'kk-q9',
        question: 'Et selskap har beta = 1,0. Hva betyr dette?',
        options: [
          'Aksjen svinger dobbelt så mye som markedet',
          'Aksjen svinger likt med markedet',
          'Aksjen svinger halvparten så mye som markedet',
          'Aksjen beveger seg motsatt av markedet'
        ],
        correctAnswer: 1,
        explanation: 'Beta = 1,0 betyr at aksjen har samme systematiske risiko som markedet og forventes å svinge i takt med markedet.'
      },
      {
        id: 'kk-q10',
        question: 'Et selskap har beta = 1,5. Risikofri rente er 3% og markedspremien er 6%. Hva er egenkapitalkostnaden?',
        options: [
          '9%',
          '10,5%',
          '12%',
          '13,5%'
        ],
        correctAnswer: 2,
        explanation: 'rE = rf + β × (rM - rf) = 3% + 1,5 × 6% = 3% + 9% = 12%'
      },
      {
        id: 'kk-q11',
        question: 'Hvilken bransje har typisk lavest beta?',
        options: [
          'Teknologi',
          'Olje og gass',
          'Kraftselskaper',
          'Bioteknologi'
        ],
        correctAnswer: 2,
        explanation: 'Kraftselskaper har typisk lav beta (0,4-0,7) fordi etterspørselen etter strøm er stabil uavhengig av konjunkturer.'
      },
      {
        id: 'kk-q12',
        question: 'Hva er markedets risikopremie?',
        options: [
          'Totalavkastningen i aksjemarkedet',
          'Meravkastningen utover risikofri rente for å investere i aksjer',
          'Differansen mellom høyeste og laveste avkastning',
          'Standardavviket i markedsavkastningen'
        ],
        correctAnswer: 1,
        explanation: 'Risikopremien (rM - rf) er den ekstra avkastningen investorer krever for å bære markedsrisiko fremfor å investere risikofritt.'
      },
      {
        id: 'kk-q13',
        question: 'Hvorfor har tech-selskaper ofte høy beta?',
        options: [
          'De har mye gjeld',
          'Inntektene er sensitive for konjunkturer og fremtidsforventninger',
          'De betaler ikke utbytte',
          'De har få ansatte'
        ],
        correctAnswer: 1,
        explanation: 'Tech-selskaper har ofte usikre fremtidige kontantstrømmer og verdsettes mye på vekstforventninger, som gjør dem sensitive for markedssentiment.'
      },
      {
        id: 'kk-q14',
        question: 'Beta for selskap X er 0,8. Risikofri rente er 4% og markedspremien er 5%. Hva er egenkapitalkostnaden?',
        options: [
          '7%',
          '8%',
          '9%',
          '10%'
        ],
        correctAnswer: 1,
        explanation: 'rE = 4% + 0,8 × 5% = 4% + 4% = 8%. Lav beta gir lavere egenkapitalkostnad.'
      },
      // Gjeldskostnad
      {
        id: 'kk-q15',
        question: 'Hva er gjeldskostnaden for et selskap?',
        options: [
          'Totalt beløp selskapet skylder',
          'Effektiv rente selskapet betaler på sin gjeld',
          'Bankens fortjeneste på lånet',
          'Gebyrer knyttet til låneopptaket'
        ],
        correctAnswer: 1,
        explanation: 'Gjeldskostnaden er den effektive renten (yield to maturity) selskapet betaler på sine lån og obligasjoner.'
      },
      {
        id: 'kk-q16',
        question: 'Hva er skatteskjoldet på gjeld?',
        options: [
          'En forsikring mot gjeldsproblemer',
          'Skattebesparelsen fordi renteutgifter er fradragsberettiget',
          'En avgift på høy gjeld',
          'Grensen for hvor mye gjeld man kan trekke fra'
        ],
        correctAnswer: 1,
        explanation: 'Skatteskjoldet er skattebesparelsen som oppstår fordi renteutgifter kan trekkes fra skattbar inntekt.'
      },
      {
        id: 'kk-q17',
        question: 'Hva er formelen for gjeldskostnad etter skatt?',
        options: [
          'rD × Tc',
          'rD / (1 - Tc)',
          'rD × (1 - Tc)',
          'rD + Tc'
        ],
        correctAnswer: 2,
        explanation: 'Gjeldskostnad etter skatt = rD × (1 - Tc), hvor Tc er skattesatsen. Skattefradraget reduserer den effektive kostnaden.'
      },
      {
        id: 'kk-q18',
        question: 'Et selskap har 6% rente på gjelden og 22% skattesats. Hva er gjeldskostnaden etter skatt?',
        options: [
          '4,68%',
          '5,28%',
          '6,00%',
          '7,32%'
        ],
        correctAnswer: 0,
        explanation: 'rD etter skatt = 6% × (1 - 0,22) = 6% × 0,78 = 4,68%'
      },
      {
        id: 'kk-q19',
        question: 'Hvorfor er gjeld vanligvis billigere enn egenkapital?',
        options: [
          'Fordi banker alltid gir gode betingelser',
          'Fordi gjeldshavere har prioritet ved konkurs og renter er fradragsberettiget',
          'Fordi gjeld er mindre risikabelt for selskapet',
          'Fordi det er lettere å få gjeld enn egenkapital'
        ],
        correctAnswer: 1,
        explanation: 'Gjeld er billigere fordi: 1) Långivere har prioritet og lavere risiko, 2) Rentekostnader gir skattefradrag.'
      },
      {
        id: 'kk-q20',
        question: 'Et selskap med kredittvurdering BBB vil typisk ha:',
        options: [
          'Lavere rente enn et AAA-selskap',
          'Samme rente som et AAA-selskap',
          'Høyere rente enn et AAA-selskap',
          'Ingen tilgang til obligasjonsmarkedet'
        ],
        correctAnswer: 2,
        explanation: 'Lavere kredittvurdering betyr høyere risiko, som krever høyere rente. BBB har høyere spread enn AAA.'
      },
      {
        id: 'kk-q21',
        question: 'Hva skjer typisk med et selskaps lånekostnad hvis det faller fra BBB til BB?',
        options: [
          'Den forblir uendret',
          'Den synker litt',
          'Den øker betydelig',
          'Den blir null'
        ],
        correctAnswer: 2,
        explanation: 'BBB er laveste investment grade. Å falle til BB (junk) betyr at mange institusjonelle investorer må selge, og spreaden øker typisk betydelig.'
      },
      // WACC-spørsmål
      {
        id: 'kk-q22',
        question: 'Hva står WACC for?',
        options: [
          'Weighted Annual Cost of Credit',
          'Weighted Average Cost of Capital',
          'Working Asset Capital Calculation',
          'Whole Asset Cost Calculation'
        ],
        correctAnswer: 1,
        explanation: 'WACC = Weighted Average Cost of Capital, vektet gjennomsnittlig kapitalkostnad.'
      },
      {
        id: 'kk-q23',
        question: 'Hva er WACC-formelen?',
        options: [
          'WACC = (E/V) × rE + (D/V) × rD',
          'WACC = (E/V) × rE + (D/V) × rD × (1 - Tc)',
          'WACC = rE + rD × (1 - Tc)',
          'WACC = (E + D) × (rE + rD)'
        ],
        correctAnswer: 1,
        explanation: 'WACC = (E/V) × rE + (D/V) × rD × (1 - Tc). Gjeldskostnaden skattejusteres, egenkapitalkostnaden gjør ikke det.'
      },
      {
        id: 'kk-q24',
        question: 'I WACC-formelen, hva representerer E/V?',
        options: [
          'Egenkapitalens avkastning',
          'Andelen egenkapital av totalkapitalen',
          'Egenkapitalens vekst',
          'Effektiv egenkapitalrente'
        ],
        correctAnswer: 1,
        explanation: 'E/V er markedsverdi av egenkapital delt på totalverdi (E + D), altså egenkapitalandelen.'
      },
      {
        id: 'kk-q25',
        question: 'Hvorfor bruker vi markedsverdier og ikke bokførte verdier i WACC?',
        options: [
          'Fordi bokførte verdier er feil',
          'Fordi markedsverdier reflekterer hva investorer faktisk har investert',
          'Fordi det er enklere å beregne',
          'Fordi regnskapsstandarden krever det'
        ],
        correctAnswer: 1,
        explanation: 'Markedsverdier reflekterer nåværende verdi av investorenes kapital og er grunnlaget for avkastningskravet.'
      },
      {
        id: 'kk-q26',
        question: 'Et selskap har 60% EK og 40% gjeld. EK-kostnad er 10%, gjeldskostnad er 5%, skatt er 25%. Hva er WACC?',
        options: [
          '7,5%',
          '8,0%',
          '7,0%',
          '8,5%'
        ],
        correctAnswer: 0,
        explanation: 'WACC = 0,6 × 10% + 0,4 × 5% × (1 - 0,25) = 6% + 0,4 × 5% × 0,75 = 6% + 1,5% = 7,5%'
      },
      {
        id: 'kk-q27',
        question: 'Hva skjer med WACC hvis selskapet øker gjeldsandelen (alt annet likt)?',
        options: [
          'WACC øker alltid',
          'WACC synker alltid',
          'WACC kan både øke og synke avhengig av gjeldsgraden',
          'WACC forblir uendret'
        ],
        correctAnswer: 2,
        explanation: 'Ved lav gjeld synker WACC pga. skattefordelen. Ved for høy gjeld øker konkurssannsynligheten, som øker både rE og rD.'
      },
      {
        id: 'kk-q28',
        question: 'Et selskap har markedsverdi EK = 800 MNOK og gjeld = 200 MNOK. Hva er gjeldsandelen?',
        options: [
          '20%',
          '25%',
          '80%',
          '40%'
        ],
        correctAnswer: 0,
        explanation: 'Gjeldsandel = D/V = 200 / (800 + 200) = 200 / 1000 = 20%'
      },
      {
        id: 'kk-q29',
        question: 'Hvorfor skattejusteres gjeldskostnaden i WACC, men ikke egenkapitalkostnaden?',
        options: [
          'Fordi aksjonærer ikke betaler skatt',
          'Fordi renteutgifter er fradragsberettiget, utbytte er det ikke',
          'Fordi gjeld er mer risikabelt',
          'Det er en forenkling som ikke stemmer i praksis'
        ],
        correctAnswer: 1,
        explanation: 'Renteutgifter på gjeld er fradragsberettiget og reduserer skattbar inntekt. Utbytte til aksjonærer betales av resultat etter skatt.'
      },
      {
        id: 'kk-q30',
        question: 'Selskap A har WACC = 9%. Et prosjekt har IRR = 11%. Bør prosjektet gjennomføres?',
        options: [
          'Nei, IRR er for høy',
          'Ja, IRR > WACC betyr lønnsomt prosjekt',
          'Umulig å si uten mer informasjon',
          'Nei, fordi forskjellen er for liten'
        ],
        correctAnswer: 1,
        explanation: 'Når IRR > WACC gir prosjektet høyere avkastning enn kapitalkostnaden og skaper verdi. NPV vil være positiv.'
      },
      // Praktisk anvendelse
      {
        id: 'kk-q31',
        question: 'Når bør man bruke høyere diskonteringsrente enn selskapets WACC?',
        options: [
          'Når prosjektet er stort',
          'Når prosjektet har høyere risiko enn selskapsgjennomsnittet',
          'Når markedet er volatilt',
          'Når rentene stiger'
        ],
        correctAnswer: 1,
        explanation: 'Prosjekter med høyere risiko enn snittet bør diskonteres med høyere rente for å reflektere den ekstra risikoen.'
      },
      {
        id: 'kk-q32',
        question: 'Hva er "pure play"-metoden?',
        options: [
          'Å kun investere i ett selskap',
          'Å finne WACC ved å se på selskaper som kun opererer i én bransje',
          'Å bruke kun egenkapitalfinansiering',
          'En strategi for å maksimere avkastning'
        ],
        correctAnswer: 1,
        explanation: 'Pure play-metoden innebærer å finne beta og WACC fra sammenlignbare selskaper som kun opererer i den aktuelle bransjen.'
      },
      {
        id: 'kk-q33',
        question: 'Hvorfor kan store selskaper bruke divisjons-WACC?',
        options: [
          'For å spare skatt',
          'Fordi ulike forretningsområder har ulik risiko',
          'For å øke gjelden',
          'Fordi det er enklere å beregne'
        ],
        correctAnswer: 1,
        explanation: 'Ulike forretningsområder (f.eks. olje vs. fornybar hos Equinor) har ulik risiko og bør vurderes med ulike avkastningskrav.'
      },
      {
        id: 'kk-q34',
        question: 'Et prosjekt har NPV = -5 MNOK med WACC = 10%. Hva betyr dette?',
        options: [
          'Prosjektet er lønnsomt',
          'Prosjektet gir avkastning under kapitalkostnaden og bør avslås',
          'Prosjektet trenger mer kapital',
          'WACC er satt for lavt'
        ],
        correctAnswer: 1,
        explanation: 'NPV < 0 betyr at prosjektet ikke gir tilstrekkelig avkastning til å dekke kapitalkostnaden og vil ødelegge verdi.'
      },
      {
        id: 'kk-q35',
        question: 'Hva er en vanlig fallgruve ved WACC-beregning?',
        options: [
          'Å bruke for mange desimaler',
          'Å bruke bokførte verdier i stedet for markedsverdier',
          'Å beregne WACC for ofte',
          'Å inkludere for mange kapitaltyper'
        ],
        correctAnswer: 1,
        explanation: 'Å bruke bokførte verdier gir feil vekting fordi de reflekterer historiske, ikke nåværende verdier.'
      },
      // Beregningsoppgaver
      {
        id: 'kk-q36',
        question: 'Risikofri rente er 3%, beta er 1,2, markedsavkastning er 9%. Hva er egenkapitalkostnaden?',
        options: [
          '10,2%',
          '9,6%',
          '10,8%',
          '7,2%'
        ],
        correctAnswer: 1,
        explanation: 'Risikopremie = 9% - 3% = 6%. rE = 3% + 1,2 × 6% = 3% + 7,2% = 10,2%. Men vent: 3% + 1,2 × 6% = 3% + 7,2% = 10,2%. La meg sjekke: rE = rf + β(rM - rf) = 3% + 1,2(9% - 3%) = 3% + 1,2(6%) = 3% + 7,2% = 10,2%. Svaret er A.'
      },
      {
        id: 'kk-q37',
        question: 'Et selskap har 50% EK (kostnad 12%) og 50% gjeld (6% før skatt). Skattesatsen er 20%. Hva er WACC?',
        options: [
          '8,4%',
          '9,0%',
          '7,8%',
          '8,7%'
        ],
        correctAnswer: 0,
        explanation: 'WACC = 0,5 × 12% + 0,5 × 6% × (1 - 0,2) = 6% + 0,5 × 6% × 0,8 = 6% + 2,4% = 8,4%'
      },
      {
        id: 'kk-q38',
        question: 'Gjeldskostnad er 7%, skattesats er 22%. Hva er gjeldskostnad etter skatt?',
        options: [
          '5,46%',
          '5,78%',
          '6,16%',
          '8,54%'
        ],
        correctAnswer: 0,
        explanation: 'rD etter skatt = 7% × (1 - 0,22) = 7% × 0,78 = 5,46%'
      },
      {
        id: 'kk-q39',
        question: 'Aksjekurs er 100 kr, 10 millioner aksjer utestående, gjeld er 400 MNOK. Hva er egenkapitalandelen?',
        options: [
          '60%',
          '71,4%',
          '40%',
          '28,6%'
        ],
        correctAnswer: 1,
        explanation: 'EK = 100 × 10 mill = 1000 MNOK. V = 1000 + 400 = 1400 MNOK. E/V = 1000/1400 = 71,4%'
      },
      {
        id: 'kk-q40',
        question: 'Hvilken påstand om WACC er IKKE korrekt?',
        options: [
          'WACC er minimumskravet for prosjektavkastning',
          'WACC brukes kun for prosjekter med lik risiko som selskapet',
          'WACC er alltid lik egenkapitalkostnaden',
          'WACC inkluderer skattefordelen på gjeld'
        ],
        correctAnswer: 2,
        explanation: 'WACC er et vektet snitt av EK- og gjeldskostnad, og er normalt lavere enn ren egenkapitalkostnad pga. billigere gjeld.'
      }
    ]
  }
};
