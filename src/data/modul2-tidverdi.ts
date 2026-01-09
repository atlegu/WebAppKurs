import { Module, CalculatorContent } from '../types/course';

export const modul2TidverdiModule: Module = {
  id: 'modul-2-tidverdi',
  title: 'Pengenes Tidsverdi',
  icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
  order: 3,
  learningObjectives: [
    'Forstå hvorfor penger i dag er mer verdt enn penger i fremtiden',
    'Beregne fremtidsverdi og nåverdi av pengestrømmer',
    'Anvende renters rente-prinsippet i praktiske situasjoner',
    'Forstå inflasjonens påvirkning på kjøpekraft',
    'Bruke tidsverdi-konsepter i personlige finansbeslutninger'
  ],
  sections: [
    // ===================================
    // SEKSJON 2.1: Hva er penger egentlig verdt?
    // ===================================
    {
      id: 'seksjon-2-1-pengers-verdi',
      title: 'Hva er penger egentlig verdt?',
      order: 1,
      content: [
        {
          id: '2-1-intro-hook',
          type: 'text',
          order: 1,
          text: '**Tenk deg dette:** Du vinner 100 000 kroner i Lotto. Du får velge: pengene i dag, eller de samme 100 000 kronene om ett år. Hva velger du?',
          emphasis: 'important'
        },
        {
          id: '2-1-video',
          type: 'video',
          order: 2,
          title: 'Video: Introduksjon til renteregning',
          duration: '15 min',
          url: 'https://www.youtube.com/embed/733mgqrzNKs?start=23'
        },
        {
          id: '2-1-intro-2',
          type: 'text',
          order: 3,
          text: 'Hvis du valgte pengene i dag – gratulerer, du tenker som en finansekspert! Men *hvorfor* er dette det riktige valget? Svaret ligger i et av finansens mest fundamentale prinsipper: **pengenes tidsverdi**.'
        },
        {
          id: '2-1-heading-konsept',
          type: 'heading',
          order: 3,
          level: 2,
          text: 'Det grunnleggende prinsippet'
        },
        {
          id: '2-1-def-tidsverdi',
          type: 'definition',
          order: 4,
          term: 'Pengenes tidsverdi (Time Value of Money)',
          definition: 'Prinsippet om at penger tilgjengelig i dag er mer verdt enn samme beløp i fremtiden, fordi pengene kan investeres og vokse over tid.'
        },
        {
          id: '2-1-text-hvorfor',
          type: 'text',
          order: 5,
          text: 'Tre hovedgrunner forklarer hvorfor penger i dag er mer verdifulle:'
        },
        {
          id: '2-1-list-grunner',
          type: 'list',
          order: 6,
          ordered: true,
          items: [
            '**Investeringsmulighet:** 100 000 kr i dag kan settes i banken og tjene renter. Om ett år har du mer enn 100 000 kr.',
            '**Inflasjon:** Priser stiger over tid. Det du kan kjøpe for 100 000 kr i dag, koster sannsynligvis mer om ett år.',
            '**Usikkerhet:** Et løfte om penger i fremtiden innebærer alltid en risiko for at noe går galt. Penger i hånden er sikre.'
          ]
        },
        {
          id: '2-1-heading-praksis',
          type: 'heading',
          order: 7,
          level: 2,
          text: 'Hvorfor dette betyr alt for deg'
        },
        {
          id: '2-1-text-praksis',
          type: 'text',
          order: 8,
          text: 'Pengenes tidsverdi påvirker nesten alle finansielle beslutninger du tar i livet:'
        },
        {
          id: '2-1-table-eksempler',
          type: 'table',
          order: 9,
          headers: ['Situasjon', 'Tidsverdi-spørsmålet'],
          rows: [
            ['Boliglån', 'Er det verdt å betale ekstra nå for å spare renter senere?'],
            ['Pensjonssparing', 'Hvor mye må jeg spare i dag for å ha nok om 30 år?'],
            ['Utdanning', 'Er investeringen i studielån verdt den fremtidige inntektsøkningen?'],
            ['Billån', 'Bør jeg lease eller kjøpe? Betale kontant eller på avbetaling?'],
            ['Forretningsinvestering', 'Vil prosjektet gi nok avkastning til å rettferdiggjøre investeringen?']
          ]
        },
        {
          id: '2-1-example',
          type: 'example',
          order: 10,
          title: 'Emmas valg: Leilighet nå eller vente?',
          content: 'Emma (28) har spart opp 500 000 kr til egenkapital. Hun vurderer å kjøpe leilighet nå eller vente 2 år til hun har spart opp 700 000 kr.\n\n**Scenario A: Kjøpe nå**\n- Egenkapital: 500 000 kr\n- Leilighetspris: 3 000 000 kr\n- Lån: 2 500 000 kr\n- Om 2 år: Leiligheten kan ha steget i verdi, og hun har begynt å betale ned lånet\n\n**Scenario B: Vente 2 år**\n- Sparepenger vokser til 700 000 kr\n- Men: Leilighetsprisen kan ha steget til 3 300 000 kr\n- Lån: 2 600 000 kr (mer enn før!)\n- I tillegg: 2 år med husleie "tapt"',
          calculation: 'Hvis Emma betaler 12 000 kr/mnd i husleie i 2 år:\n12 000 × 24 = 288 000 kr i "tapt" husleie\n\nHvis leilighetsprisen stiger 5% per år:\n3 000 000 × 1.05² = 3 307 500 kr\n\n**Konklusjon:** Ved å vente "sparer" Emma 200 000 kr i egenkapital, men "taper" 288 000 kr i husleie og må betale 307 500 kr mer for leiligheten. Totalt tap: ca 395 500 kr.'
        },
        {
          id: '2-1-quiz',
          type: 'quiz',
          order: 11,
          question: 'Hvorfor er 1000 kr i dag verdt mer enn 1000 kr om ett år?',
          options: [
            'Fordi sedlene slites ut over tid',
            'Fordi pengene kan investeres og vokse, og inflasjonen reduserer kjøpekraft',
            'Fordi staten trykker mer penger hvert år',
            'Fordi banker alltid tar gebyrer'
          ],
          correctAnswer: 1,
          explanation: 'Pengenes tidsverdi skyldes at penger kan investeres og vokse (renter), at inflasjonen reduserer kjøpekraft over tid, og at fremtidige penger alltid innebærer usikkerhet. Disse tre faktorene gjør at dagens penger er mer verdifulle.'
        },
        {
          id: '2-1-keypoint',
          type: 'keypoint',
          order: 12,
          points: [
            'Penger i dag er alltid mer verdt enn samme beløp i fremtiden',
            'Tre faktorer: investeringsmulighet, inflasjon og usikkerhet',
            'Tidsverdi-konseptet er grunnlaget for alle finansielle beslutninger',
            'Jo lengre tidshorisont, jo større blir effekten'
          ]
        },
        {
          id: '2-1-reflection',
          type: 'reflection',
          order: 13,
          question: 'Tenk på en stor finansiell beslutning du har tatt eller skal ta. Hvordan påvirker pengenes tidsverdi denne beslutningen? Har du vurdert "kostnaden" ved å vente?'
        }
      ]
    },

    // ===================================
    // SEKSJON 2.2: Rente og renters rente
    // ===================================
    {
      id: 'seksjon-2-2-renters-rente',
      title: 'Rente og renters rente – din beste venn',
      order: 2,
      content: [
        {
          id: '2-2-intro-hook',
          type: 'text',
          order: 1,
          text: '**Albert Einstein skal ha kalt renters rente "verdens åttende underverk".** Om han faktisk sa det er usikkert, men poenget står: renters rente er den kraftigste kraften i personlig økonomi.',
          emphasis: 'important'
        },
        {
          id: '2-2-heading-enkel',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Enkel rente vs. renters rente'
        },
        {
          id: '2-2-def-enkel',
          type: 'definition',
          order: 3,
          term: 'Enkel rente (Simple Interest)',
          definition: 'Rente som kun beregnes på det opprinnelige beløpet (hovedstolen). Du får samme kronebeløp i rente hvert år.'
        },
        {
          id: '2-2-formula-enkel',
          type: 'formula',
          order: 4,
          formula: 'Enkel rente = Hovedstol × Rente × Tid',
          description: 'Hvis du investerer 10 000 kr til 5% enkel rente i 3 år: 10 000 × 0.05 × 3 = 1 500 kr i rente. Total: 11 500 kr.'
        },
        {
          id: '2-2-def-compound',
          type: 'definition',
          order: 5,
          term: 'Renters rente (Compound Interest)',
          definition: 'Rente som beregnes på både hovedstolen OG tidligere opptjent rente. Du får rente på rentene – pengene dine vokser eksponentielt.'
        },
        {
          id: '2-2-formula-compound',
          type: 'formula',
          order: 6,
          formula: 'FV = PV × (1 + r)^n',
          description: 'FV = Fremtidsverdi, PV = Nåverdi (startbeløp), r = rente per periode, n = antall perioder.\n\nSamme eksempel med renters rente: 10 000 × (1.05)³ = 11 576 kr. Du tjener 76 kr mer!'
        },
        {
          id: '2-2-heading-magi',
          type: 'heading',
          order: 7,
          level: 2,
          text: 'Magien i renters rente'
        },
        {
          id: '2-2-text-eksponentiell',
          type: 'text',
          order: 8,
          text: 'Forskjellen mellom enkel rente og renters rente virker liten i starten, men over tid blir den enorm. Dette er fordi renters rente gir **eksponentiell vekst** – kurven blir brattere og brattere jo lengre tid som går.'
        },
        {
          id: '2-2-table-sammenligning',
          type: 'table',
          order: 9,
          headers: ['År', 'Enkel rente (5%)', 'Renters rente (5%)', 'Forskjell'],
          rows: [
            ['0', '100 000 kr', '100 000 kr', '0 kr'],
            ['5', '125 000 kr', '127 628 kr', '2 628 kr'],
            ['10', '150 000 kr', '162 889 kr', '12 889 kr'],
            ['20', '200 000 kr', '265 330 kr', '65 330 kr'],
            ['30', '250 000 kr', '432 194 kr', '182 194 kr'],
            ['40', '300 000 kr', '703 999 kr', '403 999 kr']
          ]
        },
        {
          id: '2-2-text-tid',
          type: 'text',
          order: 10,
          text: 'Legg merke til hvordan forskjellen akselererer over tid! Etter 40 år har du mer enn **dobbelt så mye** med renters rente sammenlignet med enkel rente. Dette er grunnen til at det er så viktig å starte å spare tidlig.',
          emphasis: 'important'
        },
        {
          id: '2-2-heading-regel72',
          type: 'heading',
          order: 11,
          level: 2,
          text: '72-regelen: En mental snarvei'
        },
        {
          id: '2-2-def-regel72',
          type: 'definition',
          order: 12,
          term: '72-regelen',
          definition: 'En tommelfingerregel for å beregne hvor lang tid det tar å doble pengene dine. Del 72 på renten (i prosent) for å få antall år.'
        },
        {
          id: '2-2-formula-72',
          type: 'formula',
          order: 13,
          formula: 'Antall år for dobling ≈ 72 ÷ rente(%)',
          description: 'Med 6% rente: 72 ÷ 6 = 12 år for å doble pengene.\nMed 8% rente: 72 ÷ 8 = 9 år for å doble pengene.\nMed 3% rente: 72 ÷ 3 = 24 år for å doble pengene.'
        },
        {
          id: '2-2-example',
          type: 'example',
          order: 14,
          title: 'Lars og Marte: Tidlig start vs. sen start',
          content: '**Lars** starter å spare når han er 25 år. Han sparer 3 000 kr/mnd i 10 år (til han er 35), totalt 360 000 kr. Deretter stopper han å spare, men lar pengene stå.\n\n**Marte** starter å spare når hun er 35 år. Hun sparer 3 000 kr/mnd i 30 år (til hun er 65), totalt 1 080 000 kr.\n\nBegge får 7% årlig avkastning. Hvem har mest ved 65 år?',
          calculation: '**Lars (25-35, så pengene vokser til 65):**\nSpart: 360 000 kr\nVerdi ved 35 år: ca 518 000 kr\nVerdi ved 65 år (30 år senere): 518 000 × (1.07)³⁰ = **3 944 000 kr**\n\n**Marte (35-65):**\nSpart: 1 080 000 kr\nVerdi ved 65 år: **3 660 000 kr**\n\n**Resultat:** Lars sparte 720 000 kr MINDRE, men har 284 000 kr MER ved pensjon! Dette er kraften i å starte tidlig.'
        },
        {
          id: '2-2-calc-compound',
          type: 'calculator',
          order: 15,
          title: 'Renters rente-kalkulator',
          description: 'Prøv selv! Se hvordan pengene dine vokser med renters rente. Juster startbeløp, rente og antall år.',
          calculatorType: 'compound-interest',
          inputs: [
            {
              key: 'principal',
              label: 'Startbeløp',
              type: 'currency',
              default: 100000,
              min: 0,
              step: 10000,
              helpText: 'Beløpet du starter med'
            },
            {
              key: 'rate',
              label: 'Årlig rente',
              type: 'percentage',
              default: 7,
              min: 0,
              max: 50,
              step: 0.5,
              helpText: 'Forventet årlig avkastning'
            },
            {
              key: 'years',
              label: 'Antall år',
              type: 'years',
              default: 10,
              min: 1,
              max: 50,
              step: 1,
              helpText: 'Hvor lenge pengene skal stå'
            }
          ],
          formula: 'FV = PV × (1 + r)^n',
          resultLabel: 'Fremtidsverdi',
          resultUnit: 'kr',
          explanation: 'Se hvordan tid og rente påvirker sluttsummen'
        } as CalculatorContent,
        {
          id: '2-2-quiz-1',
          type: 'quiz',
          order: 16,
          question: 'Du har 50 000 kr og får 6% årlig rente med renters rente. Hvor lang tid tar det å doble pengene til 100 000 kr?',
          options: [
            'Ca 6 år',
            'Ca 12 år',
            'Ca 18 år',
            'Ca 24 år'
          ],
          correctAnswer: 1,
          explanation: 'Ved å bruke 72-regelen: 72 ÷ 6 = 12 år. Med 6% årlig rente tar det omtrent 12 år å doble pengene dine.'
        },
        {
          id: '2-2-quiz-2',
          type: 'quiz',
          order: 17,
          question: 'Hva er hovedforskjellen mellom enkel rente og renters rente?',
          options: [
            'Enkel rente er alltid høyere',
            'Renters rente beregnes kun på det opprinnelige beløpet',
            'Renters rente beregnes på både hovedstol og tidligere opptjent rente',
            'Det er ingen forskjell over tid'
          ],
          correctAnswer: 2,
          explanation: 'Ved renters rente får du rente på rentene – altså rente på både det opprinnelige beløpet (hovedstolen) og alle renter du har tjent tidligere. Dette gir eksponentiell vekst over tid.'
        },
        {
          id: '2-2-keypoint',
          type: 'keypoint',
          order: 18,
          points: [
            'Renters rente gir eksponentiell vekst – kurven blir brattere over tid',
            'Jo tidligere du starter å spare, jo mer jobber tiden for deg',
            'Bruk 72-regelen for raskt å beregne doblingstid',
            'Tid i markedet er ofte viktigere enn timing av markedet'
          ]
        },
        {
          id: '2-2-reflection',
          type: 'reflection',
          order: 19,
          question: 'Tenk på din egen sparesituasjon. Hvor mange år har pengene dine til å vokse før du trenger dem? Har du "råd" til å vente med å starte å spare?'
        }
      ]
    },

    // ===================================
    // SEKSJON 2.3: Nåverdi og fremtidsverdi
    // ===================================
    {
      id: 'seksjon-2-3-naaverdi-fremtidsverdi',
      title: 'Nåverdi og fremtidsverdi',
      order: 3,
      content: [
        {
          id: '2-3-intro-hook',
          type: 'text',
          order: 1,
          text: '**Hva er 1 million kroner om 20 år verdt i dag?** Dette høres ut som et filosofisk spørsmål, men det har et presist matematisk svar. Og svaret er avgjørende for nesten alle investeringsbeslutninger.',
          emphasis: 'important'
        },
        {
          id: '2-3-text-intro',
          type: 'text',
          order: 2,
          text: 'Nåverdi og fremtidsverdi er to sider av samme mynt. De lar oss sammenligne pengebeløp på tvers av tid – noe som er essensielt fordi vi vet at penger i dag ikke er det samme som penger i fremtiden.'
        },
        {
          id: '2-3-heading-fv',
          type: 'heading',
          order: 3,
          level: 2,
          text: 'Fremtidsverdi (FV)'
        },
        {
          id: '2-3-def-fv',
          type: 'definition',
          order: 4,
          term: 'Fremtidsverdi (Future Value)',
          definition: 'Verdien av et beløp på et fremtidig tidspunkt, gitt en bestemt rente. Svarer på: "Hvor mye vil mine penger vokse til?"'
        },
        {
          id: '2-3-formula-fv',
          type: 'formula',
          order: 5,
          formula: 'FV = PV × (1 + r)^n',
          description: 'FV = Fremtidsverdi\nPV = Nåverdi (dagens beløp)\nr = rente per periode (som desimaltall)\nn = antall perioder'
        },
        {
          id: '2-3-example-fv',
          type: 'example',
          order: 6,
          title: 'Beregning av fremtidsverdi',
          content: 'Du setter 50 000 kr i en aksje-indeksfond. Du forventer 7% årlig avkastning. Hvor mye har du etter 15 år?',
          calculation: 'FV = PV × (1 + r)^n\nFV = 50 000 × (1 + 0.07)^15\nFV = 50 000 × (1.07)^15\nFV = 50 000 × 2.759\nFV = **137 952 kr**\n\nDine 50 000 kr har nesten tredoblet seg!'
        },
        {
          id: '2-3-heading-pv',
          type: 'heading',
          order: 7,
          level: 2,
          text: 'Nåverdi (PV)'
        },
        {
          id: '2-3-def-pv',
          type: 'definition',
          order: 8,
          term: 'Nåverdi (Present Value)',
          definition: 'Dagens verdi av et fremtidig beløp, justert for tidsverdien av penger. Svarer på: "Hva er et fremtidig beløp verdt i dag?"'
        },
        {
          id: '2-3-formula-pv',
          type: 'formula',
          order: 9,
          formula: 'PV = FV ÷ (1 + r)^n',
          description: 'Denne formelen er bare fremtidsverdi-formelen snudd på hodet. Vi "diskonterer" det fremtidige beløpet tilbake til i dag.'
        },
        {
          id: '2-3-def-diskontering',
          type: 'definition',
          order: 10,
          term: 'Diskontering',
          definition: 'Prosessen med å beregne nåverdien av fremtidige kontantstrømmer. Diskonteringsrenten reflekterer alternativkostnaden – hva du kunne tjent ved å investere pengene annerledes.'
        },
        {
          id: '2-3-example-pv',
          type: 'example',
          order: 11,
          title: 'Beregning av nåverdi',
          content: 'Du skal motta 100 000 kr om 5 år fra en forsikringsutbetaling. Hvis du alternativt kunne investert penger til 6% årlig avkastning, hva er denne fremtidige utbetalingen verdt i dag?',
          calculation: 'PV = FV ÷ (1 + r)^n\nPV = 100 000 ÷ (1 + 0.06)^5\nPV = 100 000 ÷ (1.06)^5\nPV = 100 000 ÷ 1.338\nPV = **74 726 kr**\n\nDe 100 000 kronene om 5 år er bare verdt ca 75 000 kr i dag!'
        },
        {
          id: '2-3-heading-bruk',
          type: 'heading',
          order: 12,
          level: 2,
          text: 'Praktisk bruk av nåverdi'
        },
        {
          id: '2-3-text-bruk',
          type: 'text',
          order: 13,
          text: 'Nåverdi-beregninger er fundamentale i finans fordi de lar oss sammenligne ulike alternativer på samme tidspunkt:'
        },
        {
          id: '2-3-list-bruk',
          type: 'list',
          order: 14,
          ordered: false,
          items: [
            '**Obligasjonsprising:** En obligasjons verdi er nåverdien av alle fremtidige kupongbetalinger pluss nåverdien av pålydende ved forfall',
            '**Prosjektvurdering:** Bedrifter beregner nåverdien av fremtidige inntekter for å avgjøre om investeringer er lønnsomme',
            '**Pensjonsplanlegging:** Hvor mye må du spare i dag for å ha ønsket inntekt i fremtiden?',
            '**Sammenligne tilbud:** Er det bedre med 10 000 kr nå eller 12 000 kr om 2 år?'
          ]
        },
        {
          id: '2-3-example-sammenlign',
          type: 'example',
          order: 15,
          title: 'Velge mellom to tilbud',
          content: 'Du har vunnet i et lotteri og får velge:\n- **Alternativ A:** 80 000 kr i dag\n- **Alternativ B:** 100 000 kr om 3 år\n\nDu kan investere penger til 8% årlig avkastning. Hva bør du velge?',
          calculation: '**Nåverdien av Alternativ B:**\nPV = 100 000 ÷ (1.08)^3\nPV = 100 000 ÷ 1.260\nPV = **79 383 kr**\n\n**Konklusjon:** Alternativ A (80 000 kr i dag) er verdt mer enn nåverdien av Alternativ B (79 383 kr). Velg pengene nå!'
        },
        {
          id: '2-3-calc-pv',
          type: 'calculator',
          order: 16,
          title: 'Nåverdi-kalkulator',
          description: 'Beregn hva et fremtidig beløp er verdt i dag. Prøv ulike verdier for å se effekten av tid og diskonteringsrente.',
          calculatorType: 'present-value',
          inputs: [
            {
              key: 'futureValue',
              label: 'Fremtidig beløp',
              type: 'currency',
              default: 100000,
              min: 0,
              step: 10000,
              helpText: 'Beløpet du skal motta i fremtiden'
            },
            {
              key: 'rate',
              label: 'Diskonteringsrente',
              type: 'percentage',
              default: 5,
              min: 0,
              max: 30,
              step: 0.5,
              helpText: 'Din alternative avkastning'
            },
            {
              key: 'years',
              label: 'Antall år',
              type: 'years',
              default: 5,
              min: 1,
              max: 50,
              step: 1,
              helpText: 'År til du mottar beløpet'
            }
          ],
          formula: 'PV = FV ÷ (1 + r)^n',
          resultLabel: 'Nåverdi',
          resultUnit: 'kr',
          explanation: 'Se hvordan tidshorisonten og renten påvirker nåverdien'
        } as CalculatorContent,
        {
          id: '2-3-quiz',
          type: 'quiz',
          order: 17,
          question: 'Du skal motta 50 000 kr om 10 år. Med en diskonteringsrente på 5%, hva er nåverdien omtrent?',
          options: [
            'Ca 50 000 kr',
            'Ca 40 000 kr',
            'Ca 30 000 kr',
            'Ca 25 000 kr'
          ],
          correctAnswer: 2,
          explanation: 'PV = 50 000 ÷ (1.05)^10 = 50 000 ÷ 1.629 = 30 696 kr. Over 10 år med 5% diskontering mister det fremtidige beløpet nesten 40% av sin nåverdi.'
        },
        {
          id: '2-3-keypoint',
          type: 'keypoint',
          order: 18,
          points: [
            'Fremtidsverdi viser hva dagens penger vokser til over tid',
            'Nåverdi viser hva fremtidige penger er verdt i dag',
            'Diskontering er prosessen med å beregne nåverdi',
            'Diskonteringsrenten reflekterer alternativkostnaden din',
            'For å sammenligne beløp på ulike tidspunkter, konverter til samme tidspunkt'
          ]
        },
        {
          id: '2-3-reflection',
          type: 'reflection',
          order: 19,
          question: 'Tenk på arv eller fremtidige utbetalinger du kanskje forventer. Har du noen gang tenkt over hva disse er verdt i dagens kroner? Hvordan påvirker dette din økonomiske planlegging?'
        }
      ]
    },

    // ===================================
    // SEKSJON 2.4: Praktiske beregninger
    // ===================================
    {
      id: 'seksjon-2-4-praktiske-beregninger',
      title: 'Praktiske beregninger du kan bruke i dag',
      order: 4,
      content: [
        {
          id: '2-4-intro-hook',
          type: 'text',
          order: 1,
          text: '**Nå blir det praktisk!** I denne seksjonen lærer du å bruke tidsverdi-formlene på reelle økonomiske situasjoner du møter i hverdagen.',
          emphasis: 'important'
        },
        {
          id: '2-4-heading-annuitet',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Annuiteter: Faste betalinger over tid'
        },
        {
          id: '2-4-def-annuitet',
          type: 'definition',
          order: 3,
          term: 'Annuitet',
          definition: 'En serie med like store betalinger som skjer med jevne mellomrom. Eksempler inkluderer boliglån, bilfinansiering, pensjonsinnskudd og utbetalinger fra livsforsikring.'
        },
        {
          id: '2-4-text-annuitet',
          type: 'text',
          order: 4,
          text: 'De fleste lån og spareavtaler i Norge er strukturert som annuiteter. Å forstå annuitetsberegninger gir deg makt til å sammenligne tilbud og forstå hva du faktisk betaler.'
        },
        {
          id: '2-4-heading-fv-annuitet',
          type: 'heading',
          order: 5,
          level: 3,
          text: 'Fremtidsverdi av periodiske innbetalinger'
        },
        {
          id: '2-4-formula-fv-annuitet',
          type: 'formula',
          order: 6,
          formula: 'FV = PMT × [(1 + r)^n - 1] ÷ r',
          description: 'FV = Fremtidsverdi\nPMT = Periodisk innbetaling\nr = rente per periode\nn = antall perioder\n\nDenne formelen brukes for å beregne verdien av regelmessig sparing.'
        },
        {
          id: '2-4-example-sparing',
          type: 'example',
          order: 7,
          title: 'Månedlig pensjonssparing',
          content: 'Ida er 30 år og starter å spare 2 500 kr i måneden til pensjon i en aksjefond. Hun forventer 7% årlig avkastning (0.583% per måned). Hvor mye har hun ved 67 år?',
          calculation: 'n = 37 år × 12 måneder = 444 måneder\nr = 0.07 ÷ 12 = 0.00583 per måned\nPMT = 2 500 kr\n\nFV = 2 500 × [(1.00583)^444 - 1] ÷ 0.00583\nFV = 2 500 × [13.33 - 1] ÷ 0.00583\nFV = 2 500 × 2 115.4\nFV = **5 288 500 kr**\n\nIda sparer inn 2 500 × 444 = 1 110 000 kr\nRenter tjent: 5 288 500 - 1 110 000 = **4 178 500 kr**\n\nMer enn 3/4 av sluttsummen er renter!'
        },
        {
          id: '2-4-calc-fv',
          type: 'calculator',
          order: 8,
          title: 'Sparekalkulator',
          description: 'Se hvor mye du kan spare opp! Juster månedlig sparebeløp, forventet avkastning og sparetid.',
          calculatorType: 'future-value',
          inputs: [
            {
              key: 'payment',
              label: 'Årlig sparebeløp',
              type: 'currency',
              default: 30000,
              min: 0,
              step: 5000,
              helpText: 'Hvor mye du sparer per år'
            },
            {
              key: 'rate',
              label: 'Årlig avkastning',
              type: 'percentage',
              default: 7,
              min: 0,
              max: 20,
              step: 0.5,
              helpText: 'Forventet avkastning'
            },
            {
              key: 'years',
              label: 'Antall år',
              type: 'years',
              default: 20,
              min: 1,
              max: 50,
              step: 1,
              helpText: 'Hvor lenge du sparer'
            }
          ],
          formula: 'FV = PMT × [(1+r)^n - 1] ÷ r',
          resultLabel: 'Total oppsparing',
          resultUnit: 'kr',
          explanation: 'Se effekten av tid og avkastning på sparingen din'
        } as CalculatorContent,
        {
          id: '2-4-heading-laan',
          type: 'heading',
          order: 9,
          level: 2,
          text: 'Beregne lånekostnader'
        },
        {
          id: '2-4-formula-laan',
          type: 'formula',
          order: 10,
          formula: 'PMT = PV × [r × (1 + r)^n] ÷ [(1 + r)^n - 1]',
          description: 'PMT = Månedlig betaling\nPV = Lånebeløp\nr = månedlig rente\nn = antall månedlige betalinger\n\nDette er annuitetsformelen for å beregne månedlige låneavdrag.'
        },
        {
          id: '2-4-example-boliglaan',
          type: 'example',
          order: 11,
          title: 'Hva koster egentlig et boliglån?',
          content: 'Erik tar opp et boliglån på 3 000 000 kr med 5% årlig rente og 25 års løpetid. Hva blir den månedlige betalingen, og hvor mye betaler han totalt i renter?',
          calculation: 'PV = 3 000 000 kr\nr = 0.05 ÷ 12 = 0.00417 per måned\nn = 25 × 12 = 300 måneder\n\nPMT = 3 000 000 × [0.00417 × (1.00417)^300] ÷ [(1.00417)^300 - 1]\nPMT = 3 000 000 × [0.00417 × 3.481] ÷ [3.481 - 1]\nPMT = 3 000 000 × 0.01452 ÷ 2.481\nPMT = **17 533 kr per måned**\n\n**Total betaling:** 17 533 × 300 = 5 259 900 kr\n**Total rente:** 5 259 900 - 3 000 000 = **2 259 900 kr**\n\nErik betaler nesten like mye i renter som selve lånet!'
        },
        {
          id: '2-4-calc-loan',
          type: 'calculator',
          order: 12,
          title: 'Lånekalkulator',
          description: 'Beregn månedlig betaling og total rentekostnad for et lån. Prøv ulike beløp, renter og løpetider.',
          calculatorType: 'loan-payment',
          inputs: [
            {
              key: 'loanAmount',
              label: 'Lånebeløp',
              type: 'currency',
              default: 3000000,
              min: 0,
              step: 100000,
              helpText: 'Beløpet du låner'
            },
            {
              key: 'rate',
              label: 'Årlig rente',
              type: 'percentage',
              default: 5,
              min: 0,
              max: 20,
              step: 0.1,
              helpText: 'Nominell årlig rente'
            },
            {
              key: 'years',
              label: 'Løpetid',
              type: 'years',
              default: 25,
              min: 1,
              max: 40,
              step: 1,
              helpText: 'Antall år på lånet'
            }
          ],
          formula: 'PMT = PV × [r(1+r)^n] ÷ [(1+r)^n-1]',
          resultLabel: 'Månedlig betaling',
          resultUnit: 'kr',
          explanation: 'Se hvordan rente og løpetid påvirker kostnaden'
        } as CalculatorContent,
        {
          id: '2-4-heading-ekstra',
          type: 'heading',
          order: 13,
          level: 2,
          text: 'Effekten av ekstra avdrag'
        },
        {
          id: '2-4-text-ekstra',
          type: 'text',
          order: 14,
          text: 'Et av de kraftigste verktøyene for å spare penger på lån er å betale ekstra avdrag. Fordi du da reduserer hovedstolen som renten beregnes på, får du en "renters rente"-effekt i din favør.'
        },
        {
          id: '2-4-example-ekstra',
          type: 'example',
          order: 15,
          title: 'Ekstra avdrag på boliglånet',
          content: 'Erik fra forrige eksempel bestemmer seg for å betale 2 000 kr ekstra hver måned. Hvor mye sparer han?',
          calculation: '**Uten ekstra avdrag:**\n- 25 års løpetid\n- Total rente: 2 259 900 kr\n\n**Med 2 000 kr ekstra per måned:**\n- Ny løpetid: ca 19 år (76 måneder kortere!)\n- Total rente: ca 1 650 000 kr\n\n**Besparelse:**\n- Rentesparing: ca **610 000 kr**\n- 6 år tidligere nedbetalt\n- Ekstra innbetalt totalt: 2 000 × 228 = 456 000 kr\n\nErik "tjener" 154 000 kr på å betale ekstra!'
        },
        {
          id: '2-4-table-tips',
          type: 'table',
          order: 16,
          headers: ['Strategi', 'Effekt', 'Når fungerer det best?'],
          rows: [
            ['Månedlige ekstra avdrag', 'Reduserer løpetid og total rente', 'Når du har stabil økonomi'],
            ['Årlig ekstra avdrag', 'Stor effekt med én årlig innbetaling', 'Ved bonus eller skatterefusjon'],
            ['Kortere løpetid', 'Høyere betaling, men mye lavere total rente', 'Når du har råd til høyere månedlig'],
            ['Refinansiering', 'Kan gi lavere rente', 'Når renten har sunket vesentlig']
          ]
        },
        {
          id: '2-4-quiz',
          type: 'quiz',
          order: 17,
          question: 'Du sparer 1 000 kr i måneden i 30 år med 6% årlig avkastning. Hvor mye av sluttsummen kommer fra renter (omtrent)?',
          options: [
            'Ca 25% kommer fra renter',
            'Ca 50% kommer fra renter',
            'Ca 65% kommer fra renter',
            'Ca 80% kommer fra renter'
          ],
          correctAnswer: 2,
          explanation: 'Du sparer inn 1 000 × 12 × 30 = 360 000 kr. Med 6% årlig avkastning blir sluttsummen ca 1 004 000 kr. Rentene utgjør ca 644 000 kr, eller omtrent 65% av sluttsummen. Tid er din beste venn!'
        },
        {
          id: '2-4-exercise',
          type: 'exercise',
          order: 18,
          title: 'Beregn din egen spareplan',
          description: 'Ta frem en kalkulator eller et regneark. Beregn hvor mye du vil ha om 20 år hvis du sparer et beløp du selv velger, med 6% årlig avkastning.\n\nBruk formelen: FV = PMT × [(1.06)^20 - 1] ÷ 0.06\n\nPrøv med ulike beløp: 500 kr/mnd, 1 000 kr/mnd, 2 000 kr/mnd. Se hvordan forskjellen vokser!',
          hint: 'Husk at [(1.06)^20 - 1] ÷ 0.06 ≈ 36.79. Så multipliser ditt månedlige beløp × 12 × 36.79 for å få et grovt estimat.'
        },
        {
          id: '2-4-keypoint',
          type: 'keypoint',
          order: 19,
          points: [
            'Annuiteter er faste betalinger over tid – typisk for lån og sparing',
            'Ved langsiktig sparing kommer mesteparten av verdien fra renter',
            'Ekstra avdrag på lån gir stor effekt pga. "omvendt" renters rente',
            'Selv små månedlige beløp blir store over tid'
          ]
        },
        {
          id: '2-4-reflection',
          type: 'reflection',
          order: 20,
          question: 'Har du et boliglån eller annen gjeld? Hvor mye kunne du spart ved å betale litt ekstra hver måned? Er det verdt å kutte andre utgifter for å gjøre dette?'
        }
      ]
    },

    // ===================================
    // SEKSJON 2.5: Inflasjonens skjulte kostnad
    // ===================================
    {
      id: 'seksjon-2-5-inflasjon',
      title: 'Inflasjonens skjulte kostnad',
      order: 5,
      content: [
        {
          id: '2-5-intro-hook',
          type: 'text',
          order: 1,
          text: '**I 1990 kostet en liter melk 6,50 kr. I dag koster den over 20 kr.** Melken er den samme, men pengene dine er ikke det. Velkommen til inflasjonens verden.',
          emphasis: 'important'
        },
        {
          id: '2-5-heading-hva',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Hva er inflasjon?'
        },
        {
          id: '2-5-def-inflasjon',
          type: 'definition',
          order: 3,
          term: 'Inflasjon',
          definition: 'En vedvarende økning i det generelle prisnivået i økonomien, som resulterer i redusert kjøpekraft for hver krone. Måles typisk med Konsumprisindeksen (KPI).'
        },
        {
          id: '2-5-text-inflasjon',
          type: 'text',
          order: 4,
          text: 'Inflasjon er som en usynlig skatt på sparepengene dine. Selv om kontosaldoen din forblir den samme, kan du kjøpe mindre og mindre for pengene over tid. Dette er grunnen til at "penger under madrassen" er en dårlig sparestrategi.'
        },
        {
          id: '2-5-heading-maal',
          type: 'heading',
          order: 5,
          level: 2,
          text: 'Norges Banks inflasjonsmål'
        },
        {
          id: '2-5-text-maal',
          type: 'text',
          order: 6,
          text: 'Norges Bank styrer pengepolitikken med et inflasjonsmål på **2% årlig**. Dette betyr at prisene er ment å stige med omtrent 2% hvert år. Litt inflasjon anses som sunt for økonomien, men for din personlige økonomi betyr det at du må ha minst 2% avkastning bare for å holde tritt!'
        },
        {
          id: '2-5-heading-real',
          type: 'heading',
          order: 7,
          level: 2,
          text: 'Nominell vs. reell avkastning'
        },
        {
          id: '2-5-def-nominell',
          type: 'definition',
          order: 8,
          term: 'Nominell avkastning',
          definition: 'Avkastningen du ser på kontoutskriften – den rene prosentvise økningen i pengeverdi, uten justering for inflasjon.'
        },
        {
          id: '2-5-def-reell',
          type: 'definition',
          order: 9,
          term: 'Reell avkastning',
          definition: 'Avkastningen justert for inflasjon – den faktiske økningen i kjøpekraft. Dette er det som virkelig teller.'
        },
        {
          id: '2-5-formula-reell',
          type: 'formula',
          order: 10,
          formula: 'Reell avkastning ≈ Nominell avkastning - Inflasjon',
          description: 'En enkel tilnærming som fungerer godt for lave renter.\n\nEksempel: 5% nominell avkastning - 2.5% inflasjon = 2.5% reell avkastning.\n\nMer presis formel: (1 + nominell) ÷ (1 + inflasjon) - 1'
        },
        {
          id: '2-5-example-sparekonto',
          type: 'example',
          order: 11,
          title: 'Sparekontoen som taper verdi',
          content: 'Thomas har 200 000 kr på en høyrentekonto med 3.5% rente. Inflasjonen er 4%. Hvordan går det egentlig med pengene hans?',
          calculation: '**Nominelt (det han ser):**\n200 000 × 1.035 = 207 000 kr etter 1 år\nThomas "tjener" 7 000 kr\n\n**Reelt (kjøpekraft):**\nReell avkastning = 3.5% - 4% = -0.5%\n200 000 × 0.995 = 199 000 kr i kjøpekraft\n\n**Realitet:** Selv om kontoen viser 207 000 kr, kan Thomas kjøpe mindre enn før. Han har tapt ca 1 000 kr i reell kjøpekraft.\n\n**Over 10 år med samme forhold:**\nNominell verdi: 282 000 kr\nReell kjøpekraft: 190 000 kr\nSkjult tap: 92 000 kr!'
        },
        {
          id: '2-5-heading-historisk',
          type: 'heading',
          order: 12,
          level: 2,
          text: 'Historisk perspektiv'
        },
        {
          id: '2-5-table-historisk',
          type: 'table',
          order: 13,
          headers: ['År', 'Kjøpekraften til 100 kr i dag', 'Hva kostet en filmbilett?'],
          rows: [
            ['2024', '100 kr', 'Ca 150 kr'],
            ['2014', '130 kr', 'Ca 110 kr'],
            ['2004', '170 kr', 'Ca 80 kr'],
            ['1994', '230 kr', 'Ca 55 kr'],
            ['1984', '400 kr', 'Ca 35 kr']
          ]
        },
        {
          id: '2-5-text-langsiktig',
          type: 'text',
          order: 14,
          text: 'Med 2.5% gjennomsnittlig inflasjon mister pengene halvparten av kjøpekraften på ca 28 år. Dette er hvorfor det er så viktig å investere langsiktig sparing i noe som slår inflasjonen – som aksjer eller aksjefond.',
          emphasis: 'important'
        },
        {
          id: '2-5-heading-beskyttelse',
          type: 'heading',
          order: 15,
          level: 2,
          text: 'Hvordan beskytte seg mot inflasjon'
        },
        {
          id: '2-5-list-beskyttelse',
          type: 'list',
          order: 16,
          ordered: true,
          items: [
            '**Aksjer og aksjefond:** Historisk har aksjer gitt 7-10% årlig avkastning, godt over inflasjonen',
            '**Eiendom:** Boligpriser har historisk fulgt eller slått inflasjonen',
            '**Inflasjonsjusterte obligasjoner:** Spesielle obligasjoner der kupong og pålydende justeres med inflasjon',
            '**Råvarer:** Gull og andre råvarer kan fungere som inflasjonssikring',
            '**Humankapital:** Investér i deg selv – utdanning og ferdigheter som øker inntekten din'
          ]
        },
        {
          id: '2-5-table-avkastning',
          type: 'table',
          order: 17,
          headers: ['Aktivaklasse', 'Typisk nominell avkastning', 'Typisk reell avkastning (etter 2.5% inflasjon)'],
          rows: [
            ['Sparekonto', '2-4%', '-0.5% til +1.5%'],
            ['Obligasjonsfond', '3-5%', '+0.5% til +2.5%'],
            ['Aksjefond (globalt)', '7-10%', '+4.5% til +7.5%'],
            ['Bolig (historisk)', '5-8%', '+2.5% til +5.5%']
          ]
        },
        {
          id: '2-5-quiz',
          type: 'quiz',
          order: 18,
          question: 'Du får 4% rente på sparekontoen din og inflasjonen er 3%. Hva er din omtrentlige reelle avkastning?',
          options: [
            '4%',
            '7%',
            '1%',
            '3%'
          ],
          correctAnswer: 2,
          explanation: 'Reell avkastning ≈ Nominell avkastning - Inflasjon = 4% - 3% = 1%. Selv om kontoen din vokser med 4%, øker kjøpekraften din bare med ca 1% fordi prisene også stiger.'
        },
        {
          id: '2-5-quiz-2',
          type: 'quiz',
          order: 19,
          question: 'Hva skjer med kjøpekraften til penger på en konto med 2% rente hvis inflasjonen er 2.5%?',
          options: [
            'Kjøpekraften øker litt',
            'Kjøpekraften forblir den samme',
            'Kjøpekraften synker gradvis',
            'Det avhenger av skatt'
          ],
          correctAnswer: 2,
          explanation: 'Med 2% rente og 2.5% inflasjon er reell avkastning -0.5%. Selv om tallet på kontoen øker, kan du kjøpe stadig mindre for pengene. Kjøpekraften synker gradvis over tid.'
        },
        {
          id: '2-5-keypoint',
          type: 'keypoint',
          order: 20,
          points: [
            'Inflasjon er en "skjult skatt" som reduserer kjøpekraften over tid',
            'Reell avkastning = nominell avkastning minus inflasjon',
            'Du trenger minst 2-3% avkastning bare for å holde tritt med inflasjonen',
            'Langsiktig sparing bør investeres i noe som slår inflasjonen',
            'Aksjer har historisk vært den beste beskyttelsen mot inflasjon'
          ]
        },
        {
          id: '2-5-reflection',
          type: 'reflection',
          order: 21,
          question: 'Se på dine egne sparepenger. Hvor mye står på vanlig sparekonto vs. investert i fond eller aksjer? Er du fornøyd med denne fordelingen når du tenker på inflasjonens effekt?'
        },
        {
          id: '2-5-oppsummering-modul',
          type: 'heading',
          order: 22,
          level: 2,
          text: 'Oppsummering av Modul 2'
        },
        {
          id: '2-5-text-oppsummering',
          type: 'text',
          order: 23,
          text: 'Du har nå lært det kanskje viktigste konseptet i personlig økonomi: **pengenes tidsverdi**. Du forstår hvorfor penger i dag er mer verdt enn penger i morgen, hvordan renters rente kan jobbe for deg (eller mot deg), og hvordan inflasjon spiser opp kjøpekraften din hvis du ikke passer på.'
        },
        {
          id: '2-5-list-oppsummering',
          type: 'list',
          order: 24,
          ordered: false,
          items: [
            'Pengenes tidsverdi: Penger i dag > penger i fremtiden',
            'Renters rente: Eksponentiell vekst – start tidlig!',
            'Nåverdi/fremtidsverdi: Verktøy for å sammenligne på tvers av tid',
            'Annuiteter: Faste betalinger – grunnlaget for lån og sparing',
            'Inflasjon: Den usynlige fienden som krever minst 2-3% avkastning'
          ]
        },
        {
          id: '2-5-text-neste',
          type: 'text',
          order: 25,
          text: '**Neste steg:** I Modul 3 skal vi bruke alt du har lært til å forstå obligasjoner – hvordan de prises, hvilken avkastning de gir, og hvorfor de er en viktig del av enhver portefølje.',
          emphasis: 'important'
        }
      ]
    }
  ],
  moduleQuiz: {
    id: 'modul-2-tidverdi-quiz',
    title: 'Modulquiz: Tidsverdien av Penger',
    description: 'Test din forståelse av nåverdi, fremtidsverdi, renters rente og annuiteter. Du trenger minst 90% riktig for å bestå.',
    passingScore: 90,
    questions: [
      {
        id: 'q3-1',
        question: 'Hvorfor er 100 kroner i dag mer verdt enn 100 kroner om ett år?',
        options: [
          'Fordi inflasjonen alltid er positiv',
          'Fordi penger i dag kan investeres og gi avkastning',
          'Fordi skattereglene favoriserer tidlig betaling',
          'Fordi valutakurser alltid stiger'
        ],
        correctAnswer: 1,
        explanation: 'Penger i dag kan investeres og tjene renter. Dette er grunnprinsippet i pengenes tidsverdi - alternativkostnaden ved å vente.'
      },
      {
        id: 'q3-2',
        question: 'Hva er formelen for fremtidsverdi med årlig rente?',
        options: [
          'FV = PV × (1 + r)^n',
          'FV = PV / (1 + r)^n',
          'FV = PV × r × n',
          'FV = PV + (r × n)'
        ],
        correctAnswer: 0,
        explanation: 'Fremtidsverdi = Nåverdi × (1 + rente)^antall perioder. Dette viser eksponentiell vekst gjennom renters rente.'
      },
      {
        id: 'q3-3',
        question: 'Du investerer 10 000 kr til 8% rente i 30 år. Hva blir fremtidsverdien?',
        options: [
          'Ca. 34 000 kr',
          'Ca. 100 000 kr',
          'Ca. 50 000 kr',
          'Ca. 24 000 kr'
        ],
        correctAnswer: 1,
        explanation: 'FV = 10 000 × (1,08)^30 ≈ 100 627 kr. Renters rente gir eksponentiell vekst over lange perioder.'
      },
      {
        id: 'q3-4',
        question: 'Hva er diskontering?',
        options: [
          'Å beregne hvor mye du kan låne',
          'Å beregne fremtidig verdi av en investering',
          'Å beregne nåverdien av fremtidige kontantstrømmer',
          'Å beregne renten på et lån'
        ],
        correctAnswer: 2,
        explanation: 'Diskontering er det motsatte av renters rente - vi finner dagens verdi av penger som mottas i fremtiden ved å dele på (1+r)^n.'
      },
      {
        id: 'q3-5',
        question: 'Hva betyr regelen om 72?',
        options: [
          'Maksimal rente på forbrukslån er 72%',
          'Divider 72 med renten for å finne doblingstiden',
          'Etter 72 år er pengene verdt null',
          'Skatt på kapitalinntekt er 72%'
        ],
        correctAnswer: 1,
        explanation: 'Regelen om 72: Del 72 på renten for å finne antall år for å doble pengene. Ved 8% rente: 72/8 = 9 år.'
      },
      {
        id: 'q3-6',
        question: 'Hva er en annuitet?',
        options: [
          'En engangsutbetaling ved pensjonsalder',
          'En serie like store betalinger over en bestemt periode',
          'Renten på et boliglån',
          'Forskjellen mellom nåverdi og fremtidsverdi'
        ],
        correctAnswer: 1,
        explanation: 'En annuitet er en serie like store betalinger over en bestemt periode, for eksempel månedlige låneavdrag eller spareinnskudd.'
      },
      {
        id: 'q3-7',
        question: 'Hva er forskjellen på nominell og reell rente?',
        options: [
          'Nominell rente gjelder for banker, reell for privatpersoner',
          'Reell rente er justert for inflasjon',
          'Nominell rente er alltid høyere enn reell rente',
          'Det er ingen forskjell'
        ],
        correctAnswer: 1,
        explanation: 'Nominell rente er den oppgitte renten. Reell rente ≈ Nominell rente - Inflasjon, og viser den faktiske økningen i kjøpekraft.'
      },
      {
        id: 'q3-8',
        question: 'Hva er effektiv rente?',
        options: [
          'Renten etter skatt',
          'Renten banker faktisk bruker',
          'Årsrenten som tar hensyn til renteberegningsfrekvens',
          'Renten justert for valutaendringer'
        ],
        correctAnswer: 2,
        explanation: 'Effektiv rente er den faktiske årsrenten når man tar hensyn til at renter beregnes oftere enn årlig (f.eks. månedlig).'
      },
      {
        id: 'q3-9',
        question: 'Du kan velge: 1 million nå eller 1,5 millioner om 5 år. Renten er 10%. Hva bør du velge?',
        options: [
          '1 million nå fordi penger i dag alltid er bedre',
          '1,5 millioner om 5 år fordi det er mer penger',
          '1 million nå fordi nåverdien av 1,5 mill om 5 år er ca. 931 000',
          '1,5 millioner om 5 år fordi nåverdien er over 1 million'
        ],
        correctAnswer: 2,
        explanation: 'PV av 1,5 mill = 1 500 000 / (1,10)^5 ≈ 931 382 kr. Siden dette er mindre enn 1 million, bør du velge 1 million nå.'
      },
      {
        id: 'q3-10',
        question: 'Hvorfor er det så viktig å begynne å spare tidlig?',
        options: [
          'Fordi inflasjonen er lavere når man er ung',
          'Fordi renters rente trenger tid til å virke',
          'Fordi bankene gir bedre rente til unge',
          'Fordi skattereglene favoriserer unge sparere'
        ],
        correctAnswer: 1,
        explanation: 'Renters rente er eksponentiell og trenger tid. Å spare 1000 kr/mnd fra 25-65 år gir betydelig mer enn å spare 2000 kr/mnd fra 45-65 år.'
      },
      {
        id: 'q3-11',
        question: 'Hva er NPV (netto nåverdi)?',
        options: [
          'Summen av alle fremtidige kontantstrømmer',
          'Nåverdien av innbetalinger minus nåverdien av utbetalinger',
          'Differansen mellom nominell og reell avkastning',
          'Nåverdien av en annuitet'
        ],
        correctAnswer: 1,
        explanation: 'NPV = Nåverdi av innbetalinger - Nåverdi av utbetalinger (inkl. startinvestering). Positiv NPV = lønnsom investering.'
      },
      {
        id: 'q3-12',
        question: 'Hva skjer med nåverdien hvis diskonteringsrenten øker?',
        options: [
          'Nåverdien øker',
          'Nåverdien synker',
          'Nåverdien forblir uendret',
          'Det avhenger av kontantstrømmens størrelse'
        ],
        correctAnswer: 1,
        explanation: 'Høyere diskonteringsrente betyr at fremtidige kontantstrømmer er mindre verdt i dag, så nåverdien synker.'
      }
    ]
  }
};
