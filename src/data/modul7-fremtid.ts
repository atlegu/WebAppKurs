import { Module } from '../types/course';

export const modul7FremtidModule: Module = {
  id: 'modul-7-fremtid',
  title: 'Din Finansielle Fremtid',
  icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>',
  order: 10,
  learningObjectives: [
    'Utvikle en personlig finansiell plan basert på dine mål og verdier',
    'Forstå hvordan kompetanse fra kurset kan anvendes i arbeidslivet',
    'Kjenne til atferdsøkonomiske prinsipper som påvirker finansielle beslutninger',
    'Kunne sette realistiske finansielle mål og følge opp disse over tid',
    'Integrere bærekraftsperspektiver i personlig økonomi og karrierevalg'
  ],
  sections: [
    // SEKSJON 7.1: Fra teori til praksis
    {
      id: 'seksjon-7-1-teori-praksis',
      title: 'Fra teori til praksis',
      order: 1,
      content: [
        {
          id: '7-1-intro',
          type: 'text',
          order: 1,
          text: 'Gratulerer – du har kommet til siste modul! Du har lært om pengenes tidsverdi, obligasjoner, aksjer, porteføljeteori og bærekraftig finans. Nå skal vi koble alt sammen og se hvordan du kan bruke denne kunnskapen i ditt eget liv.',
          emphasis: 'important'
        },
        {
          id: '7-1-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Hva du har lært'
        },
        {
          id: '7-1-text-2',
          type: 'text',
          order: 3,
          text: 'La oss oppsummere de viktigste konseptene fra kurset og hvordan de henger sammen:'
        },
        {
          id: '7-1-table-1',
          type: 'table',
          order: 4,
          headers: ['Modul', 'Nøkkelkonsept', 'Praktisk anvendelse'],
          rows: [
            ['Pengenes tidsverdi', 'Nåverdi og fremtidsverdi', 'Vurdere lån, sparing, investeringer'],
            ['Obligasjoner', 'Rentepapirer og kredittrisiko', 'Forstå rentemarkedet, diversifisere'],
            ['Aksjer', 'Eierskap og verdsettelse', 'Vurdere aksjeinvesteringer'],
            ['Porteføljeteori', 'Diversifisering og risiko', 'Bygge balanserte porteføljer'],
            ['Bærekraftig finans', 'ESG og klimarisiko', 'Ta hensyn til langsiktige risikoer']
          ]
        },
        {
          id: '7-1-heading-2',
          type: 'heading',
          order: 5,
          level: 2,
          text: 'Den røde tråden: Risiko og avkastning'
        },
        {
          id: '7-1-text-3',
          type: 'text',
          order: 6,
          text: 'Gjennom hele kurset har vi sett at finansielle beslutninger handler om å balansere risiko og avkastning. Dette gjelder ikke bare investeringer, men alle økonomiske valg du tar.'
        },
        {
          id: '7-1-list-1',
          type: 'list',
          order: 7,
          ordered: false,
          items: [
            'Lån til studier: Investering i humankapital med usikker, men typisk positiv avkastning',
            'Boligkjøp: Kombinasjon av konsum og investering, med gjeldsrisiko og boligprisrisiko',
            'Karrierevalg: Trade-off mellom lønn, jobbsikkerhet, utviklingsmuligheter og verdier',
            'Pensjonssparing: Lang tidshorisont muliggjør mer aksjeeksponering'
          ]
        },
        {
          id: '7-1-keypoint-1',
          type: 'keypoint',
          order: 8,
          points: [
            'Finansiell kompetanse handler ikke om å bli rik raskt',
            'Det handler om gjennomtenkte beslutninger som balanserer kort- og langsiktige mål',
            'Risiko og avkastning må alltid veies mot hverandre'
          ]
        },
        {
          id: '7-1-heading-3',
          type: 'heading',
          order: 9,
          level: 2,
          text: 'De tre nivåene av finansiell kompetanse'
        },
        {
          id: '7-1-list-2',
          type: 'list',
          order: 10,
          ordered: true,
          items: [
            'Grunnleggende: Budsjettering, sparing, unngå dyr gjeld, forstå renter og inflasjon',
            'Videregående: Investere i fond, forstå risiko, langsiktig planlegging, pensjon',
            'Avansert: Analysere enkeltaksjer, forstå obligasjoner, vurdere ESG, aktivt eierskap'
          ]
        },
        {
          id: '7-1-text-4',
          type: 'text',
          order: 11,
          text: 'Dette kurset har gitt deg kunnskap på videregående og avansert nivå. Men husk: selv de beste investorene mestrer grunnlaget først.'
        },
        {
          id: '7-1-example-1',
          type: 'example',
          order: 12,
          title: 'Fra studentøkonomi til arbeidsliv',
          content: 'Marie har nettopp fått sin første jobb etter studiene med lønn på 550 000 kr. Hun bruker kunnskapen fra kurset: 1) Setter opp budsjett og automatisk sparing på 10%, 2) Starter med BSU og utnytter skattefordelen, 3) Velger indeksfond med lav kostnad i aksjesparekonto, 4) Sjekker at arbeidsgiverens pensjonsfond har god ESG-profil, 5) Bygger opp bufferkonto på 3 månedslønner før hun øker risikoen. Etter 5 år har hun 300 000 kr spart og god kontroll på økonomien.'
        },
        {
          id: '7-1-quiz-1',
          type: 'quiz',
          order: 13,
          question: 'Hva er den viktigste lærdommen fra hele kurset?',
          options: [
            'At aksjer alltid gir høyest avkastning',
            'At man må balansere risiko og avkastning i alle finansielle beslutninger',
            'At bærekraftige investeringer er de eneste riktige',
            'At obligasjoner er tryggere enn aksjer'
          ],
          correctAnswer: 1,
          explanation: 'Den røde tråden gjennom kurset er at alle finansielle beslutninger innebærer en avveining mellom risiko og avkastning, tilpasset din situasjon, tidshorisont og preferanser.'
        },
        {
          id: '7-1-quiz-2',
          type: 'quiz',
          order: 14,
          question: 'Hvorfor er grunnleggende finansiell kompetanse viktig selv for avanserte investorer?',
          options: [
            'Fordi det er påkrevd av myndighetene',
            'Fordi man ikke kan investere uten solid grunnmur og kontroll på egen økonomi',
            'Fordi det ser bra ut på CV',
            'Fordi grunnleggende kunnskap er det mest lønnsomme'
          ],
          correctAnswer: 1,
          explanation: 'Selv den beste investeringsstrategi nytter ikke hvis du ikke har penger å investere eller bruker mer enn du tjener. Grunnleggende økonomistyring er fundamentet alt annet bygger på.'
        },
        {
          id: '7-1-exercise-1',
          type: 'exercise',
          order: 15,
          title: 'Oppgave: Koble sammen kunnskapen',
          description: '1. Forklar med egne ord sammenhengen mellom pengenes tidsverdi og verdsettelse av aksjer (hint: DCF-modellen).\n\n2. Hvordan kan forståelse av obligasjoner og renteendringer hjelpe deg å planlegge et boliglån?\n\n3. Beskriv hvordan porteføljeteori og ESG-analyse kan kombineres når du bygger en personlig investeringsportefølje.',
          hint: 'Tenk på hvordan nåverdiberegning brukes i aksjevurdering.'
        },
        {
          id: '7-1-reflection-1',
          type: 'reflection',
          order: 16,
          question: 'Tenk tilbake på starten av kurset. Hva visste du om finans da, og hva vet du nå? Hva er de tre viktigste tingene du har lært som vil påvirke dine fremtidige finansielle beslutninger?'
        }
      ]
    },

    // SEKSJON 7.2: Atferdsøkonomi og psykologi
    {
      id: 'seksjon-7-2-atferd',
      title: 'Atferdsøkonomi og psykologi',
      order: 2,
      content: [
        {
          id: '7-2-intro',
          type: 'text',
          order: 1,
          text: 'Du kan ha all teoretisk kunnskap i verden, men hvis følelsene overtar når markedet faller 30%, risikerer du å selge på bunn. Atferdsøkonomi studerer hvordan mennesker faktisk tar økonomiske beslutninger – og hvorfor vi ofte gjør feil.',
          emphasis: 'important'
        },
        {
          id: '7-2-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'De vanligste kognitive skjevhetene'
        },
        {
          id: '7-2-def-1',
          type: 'definition',
          order: 3,
          term: 'Kognitiv skjevhet',
          definition: 'Systematiske feil i tenkning og beslutningstaking som skyldes hvordan hjernen vår behandler informasjon. Alle mennesker er utsatt for disse, uavhengig av intelligens eller utdanning.'
        },
        {
          id: '7-2-table-1',
          type: 'table',
          order: 4,
          headers: ['Skjevhet', 'Beskrivelse', 'Eksempel i finans'],
          rows: [
            ['Tapsaversjon', 'Tap smerter mer enn like store gevinster gleder', 'Selger vinnere for tidlig, holder tapere for lenge'],
            ['Overkonfidens', 'Overvurderer egne evner til å forutse markedet', 'Tror man kan slå markedet med aksjeplukking'],
            ['Bekreftelsesskjevhet', 'Søker informasjon som bekrefter eksisterende oppfatninger', 'Ignorerer negative nyheter om aksjer man eier'],
            ['Flokkmentalitet', 'Følger mengden uten egen analyse', 'Kjøper på topp fordi "alle gjør det"'],
            ['Forankring', 'Fester seg til et tall eller pris', 'Selger ikke før aksjen er tilbake til kjøpsprisen'],
            ['Nylighetsskjevhet', 'Vektlegger nylige hendelser for mye', 'Etter krakk: tror markedet aldri henter seg inn']
          ]
        },
        {
          id: '7-2-heading-2',
          type: 'heading',
          order: 5,
          level: 2,
          text: 'Tapsaversjon: Vårt største handikap'
        },
        {
          id: '7-2-text-2',
          type: 'text',
          order: 6,
          text: 'Nobelprisvinner Daniel Kahneman viste at tap føles omtrent dobbelt så sterkt som tilsvarende gevinster. Dette fører til irrasjonell atferd:'
        },
        {
          id: '7-2-list-1',
          type: 'list',
          order: 7,
          ordered: false,
          items: [
            'Vi holder tapende aksjer for lenge i håp om at de skal "komme tilbake"',
            'Vi selger vinnere for tidlig for å "sikre gevinsten"',
            'Vi unngår aksjer helt fordi tanken på tap er for ubehagelig',
            'Vi sjekker porteføljen for ofte og reagerer på kortsiktige svingninger'
          ]
        },
        {
          id: '7-2-keypoint-1',
          type: 'keypoint',
          order: 8,
          points: [
            'Profesjonelle investorer er ikke immune mot kognitive skjevheter',
            'De har bare lært seg strategier for å motvirke dem',
            'Bevissthet om egne svakheter er første steg'
          ]
        },
        {
          id: '7-2-heading-3',
          type: 'heading',
          order: 9,
          level: 2,
          text: 'Strategier mot irrasjonalitet'
        },
        {
          id: '7-2-list-2',
          type: 'list',
          order: 10,
          ordered: true,
          items: [
            'Automatisering: Sett opp automatisk sparing så du slipper å ta beslutninger når følelsene er sterke',
            'Regler på forhånd: Bestem kjøps- og salgsregler før du investerer (f.eks. rebalansering årlig)',
            'Diversifisering: Gjør det lettere å tåle tap i enkeltposisjoner',
            'Lang tidshorisont: Fokuser på langsiktige mål, ikke daglige svingninger',
            'Unngå nyheter: Konstant markedsdekning trigger følelsesmessige reaksjoner',
            'Skriv ned beslutningsgrunnlag: Gjør det lettere å huske hvorfor du tok et valg'
          ]
        },
        {
          id: '7-2-example-1',
          type: 'example',
          order: 11,
          title: 'Panikkselgeren vs. den disiplinerte investoren',
          content: 'I mars 2020, da koronakrisen sendte Oslo Børs ned 30% på én måned, panikksolgte Ole alle sine aksjer. Han ventet på "riktig tidspunkt" å kjøpe tilbake, men markedet steg 50% de neste 12 månedene. Kari hadde bestemt på forhånd at hun ikke skulle røre langsiktige investeringer uansett hva. Hun holdt seg til planen og kom styrket ut. Forskjellen: Kari hadde en strategi og fulgte den.'
        },
        {
          id: '7-2-heading-4',
          type: 'heading',
          order: 12,
          level: 2,
          text: 'Nudging: Bruk psykologi til din fordel'
        },
        {
          id: '7-2-def-2',
          type: 'definition',
          order: 13,
          term: 'Nudging',
          definition: 'Små endringer i valgarkitektur som påvirker atferd i positiv retning uten å forby alternativer. Brukt i pensjonssparing, organdonasjon og andre områder.'
        },
        {
          id: '7-2-text-3',
          type: 'text',
          order: 14,
          text: 'Du kan "nudge" deg selv mot bedre finansielle vaner:'
        },
        {
          id: '7-2-list-3',
          type: 'list',
          order: 15,
          ordered: false,
          items: [
            'Automatisk overføring til sparekonto på lønningsdag (default = spare)',
            'Slett tradingappen fra telefonen (økt friksjon = færre impulshandler)',
            'Vis langsiktig avkastning i prosent, ikke dagens kroneverdi (fokus på trend)',
            'Ha egen "lek-konto" for risikable investeringer (mental accounting)'
          ]
        },
        {
          id: '7-2-quiz-1',
          type: 'quiz',
          order: 16,
          question: 'Hva menes med tapsaversjon?',
          options: [
            'At investorer generelt er redde for å tape penger',
            'At tap føles sterkere enn tilsvarende gevinster',
            'At folk selger aksjer når de taper',
            'At man bør unngå risikable investeringer'
          ],
          correctAnswer: 1,
          explanation: 'Tapsaversjon betyr spesifikt at negative utfall (tap) føles omtrent dobbelt så sterkt som tilsvarende positive utfall (gevinster).'
        },
        {
          id: '7-2-quiz-2',
          type: 'quiz',
          order: 17,
          question: 'Hva er den beste strategien for å unngå at følelser styrer investeringsbeslutninger?',
          options: [
            'Følge med på markedet hele tiden for å være forberedt',
            'Automatisere investeringer og bestemme regler på forhånd',
            'Kun investere i sikre obligasjoner',
            'Be en profesjonell megler ta alle beslutninger'
          ],
          correctAnswer: 1,
          explanation: 'Automatisering og forhåndsbestemte regler fjerner behovet for å ta beslutninger når følelsene er sterke.'
        },
        {
          id: '7-2-exercise-1',
          type: 'exercise',
          order: 18,
          title: 'Oppgave: Kjenn deg selv',
          description: '1. Tenk på en tidligere finansiell beslutning du angrer på. Hvilken kognitiv skjevhet kan ha påvirket beslutningen?\n\n2. Du har akkurat investert 50 000 kr i et aksjefond og markedet faller 15% den første måneden. Beskriv hva du tror du ville følt, tenkt og gjort – og hva du burde gjøre.\n\n3. Lag tre konkrete "nudges" du kan implementere i din egen økonomi.',
          hint: 'Tenk på automatisering og regler som fjerner beslutningsbehov.'
        },
        {
          id: '7-2-reflection-1',
          type: 'reflection',
          order: 19,
          question: 'Hvilken kognitiv skjevhet tror du at du er mest utsatt for? Hvorfor tror du det, og hva kan du gjøre for å motvirke den i fremtiden?'
        }
      ]
    },

    // SEKSJON 7.3: Personlig finansiell planlegging
    {
      id: 'seksjon-7-3-planlegging',
      title: 'Personlig finansiell planlegging',
      order: 3,
      content: [
        {
          id: '7-3-intro',
          type: 'text',
          order: 1,
          text: 'En finansiell plan er ikke bare for de velstående. Uansett hvor mye eller lite du tjener, gir en plan deg kontroll, reduserer stress og øker sannsynligheten for at du når målene dine.',
          emphasis: 'important'
        },
        {
          id: '7-3-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'De fem stegene i finansiell planlegging'
        },
        {
          id: '7-3-list-1',
          type: 'list',
          order: 3,
          ordered: true,
          items: [
            'Kartlegg nåsituasjonen: Hva eier du, hva skylder du, hva tjener og bruker du?',
            'Definer mål: Hva vil du oppnå, og når? (kortsiktig, mellomlang, langsiktig)',
            'Lag en plan: Hvordan kommer du deg fra nå til mål? Budsjett, sparing, investering',
            'Gjennomfør: Sett planen ut i livet med konkrete handlinger',
            'Følg opp og juster: Evaluer jevnlig og tilpass når situasjonen endrer seg'
          ]
        },
        {
          id: '7-3-heading-2',
          type: 'heading',
          order: 4,
          level: 2,
          text: 'Steg 1: Personlig balanse'
        },
        {
          id: '7-3-text-2',
          type: 'text',
          order: 5,
          text: 'Start med å lage din personlige balanse – en oversikt over hva du eier (eiendeler) minus hva du skylder (gjeld).'
        },
        {
          id: '7-3-table-1',
          type: 'table',
          order: 6,
          headers: ['Eiendeler', 'Eksempel', 'Gjeld', 'Eksempel'],
          rows: [
            ['Bankinnskudd', '50 000 kr', 'Studielån', '400 000 kr'],
            ['BSU', '30 000 kr', 'Kredittkort', '5 000 kr'],
            ['Aksjer/fond', '20 000 kr', 'Billån', '80 000 kr'],
            ['Sum eiendeler', '110 000 kr', 'Sum gjeld', '485 000 kr'],
            ['', '', 'Netto formue', '-375 000 kr']
          ]
        },
        {
          id: '7-3-text-3',
          type: 'text',
          order: 7,
          text: 'Negativ nettoformue som student eller nyutdannet er normalt på grunn av studielån. Målet er å øke eiendeler og redusere gjeld over tid.'
        },
        {
          id: '7-3-heading-3',
          type: 'heading',
          order: 8,
          level: 2,
          text: 'Steg 2: SMART-mål'
        },
        {
          id: '7-3-def-1',
          type: 'definition',
          order: 9,
          term: 'SMART-mål',
          definition: 'Mål som er Spesifikke, Målbare, Attraktive, Realistiske og Tidsbundne. Gir mye høyere sannsynlighet for måloppnåelse enn vage ønsker.'
        },
        {
          id: '7-3-example-1',
          type: 'example',
          order: 10,
          title: 'Fra vagt til SMART',
          content: 'Vagt mål: "Jeg vil spare mer"\n\nSMART-mål: "Jeg skal spare 5 000 kr per måned i et indeksfond fra januar 2024, slik at jeg har 300 000 kr til egenkapital for boligkjøp innen desember 2028."'
        },
        {
          id: '7-3-heading-4',
          type: 'heading',
          order: 11,
          level: 2,
          text: 'Typiske finansielle mål etter livsfase'
        },
        {
          id: '7-3-table-2',
          type: 'table',
          order: 12,
          headers: ['Livsfase', 'Typiske mål', 'Tidshorisont'],
          rows: [
            ['Student', 'Bygge bufferkonto, unngå kredittkortgjeld, BSU', 'Kort (1-3 år)'],
            ['Første jobb', 'Egenkapital bolig, etablere sparevaner, pensjon', 'Mellomlang (3-7 år)'],
            ['Etablert', 'Boliglån, barns utdanning, økt finansformue', 'Lang (7-20 år)'],
            ['Før pensjon', 'Sikre pensjonsinntekt, redusere risiko', 'Kort til mellomlang']
          ]
        },
        {
          id: '7-3-heading-5',
          type: 'heading',
          order: 13,
          level: 2,
          text: 'Prioritering: Hva kommer først?'
        },
        {
          id: '7-3-list-2',
          type: 'list',
          order: 14,
          ordered: true,
          items: [
            'Bufferkonto: 3-6 måneders utgifter i likvide midler (høyrentekonto)',
            'Dyr gjeld: Betal ned kredittkort og forbrukslån (rente > 10%)',
            'Utnyt skattefordeler: BSU (inntil 27 000 kr/år), pensjonssparing hos arbeidsgiver',
            'Langsiktig sparing: Indeksfond, aksjesparekonto, gradvis øke eksponering',
            'Ekstra nedbetaling: Vurder boliglån når bufferen er på plass'
          ]
        },
        {
          id: '7-3-keypoint-1',
          type: 'keypoint',
          order: 15,
          points: [
            'Prioritering er viktig: En krone spart på kredittkortgjeld (15-20% rente) er verdt mer enn samme krone investert i aksjer (7-8% forventet)',
            'Bufferkonto først, deretter dyr gjeld, så sparing'
          ]
        },
        {
          id: '7-3-quiz-1',
          type: 'quiz',
          order: 16,
          question: 'Hva bør typisk prioriteres først: bufferkonto, aksjesparing eller nedbetaling av studielån?',
          options: [
            'Aksjesparing for høyest avkastning',
            'Studielån for å bli gjeldfri',
            'Bufferkonto for å ha trygghet ved uforutsette hendelser',
            'Det spiller ingen rolle, alt er like viktig'
          ],
          correctAnswer: 2,
          explanation: 'Bufferkonto bør prioriteres først fordi den gir trygghet og forhindrer at du må ta opp dyr gjeld ved uforutsette utgifter.'
        },
        {
          id: '7-3-quiz-2',
          type: 'quiz',
          order: 17,
          question: 'Hva gjør et SMART-mål bedre enn et vanlig mål?',
          options: [
            'Det er mer ambisiøst',
            'Det er enklere å nå',
            'Det er spesifikt, målbart og tidsbundet, noe som øker sjansen for å nå det',
            'Det krever mindre innsats'
          ],
          correctAnswer: 2,
          explanation: 'SMART-mål (Spesifikt, Målbart, Attraktivt, Realistisk, Tidsbundet) gir klare kriterier for suksess og gjør det lettere å måle fremgang.'
        },
        {
          id: '7-3-exercise-1',
          type: 'exercise',
          order: 18,
          title: 'Oppgave: Din finansielle plan',
          description: '1. Lag en forenklet personlig balanse med dine eiendeler og gjeld. Beregn din netto formue.\n\n2. Formuler tre finansielle mål – ett kortsiktig (1 år), ett mellomlangsiktig (3-5 år) og ett langsiktig (10+ år). Bruk SMART-formatet.\n\n3. Basert på prioriteringslisten, vurder hva som bør være ditt neste finansielle steg.',
          hint: 'Start med å liste opp alle bankkontoer, investeringer og gjeldsposter.'
        },
        {
          id: '7-3-reflection-1',
          type: 'reflection',
          order: 19,
          question: 'Tenk over dine verdier og hva som er viktig for deg i livet. Hvordan kan din finansielle plan støtte disse verdiene? Vil du prioritere tidlig pensjonering, opplevelser, trygghet, fleksibilitet, eller noe annet?'
        }
      ]
    },

    // SEKSJON 7.4: Karriere og kompetanse
    {
      id: 'seksjon-7-4-karriere',
      title: 'Karriere og kompetanse',
      order: 4,
      content: [
        {
          id: '7-4-intro',
          type: 'text',
          order: 1,
          text: 'Din viktigste "eiendel" i ung alder er ikke penger i banken – det er din humankapital: evnen til å tjene penger gjennom hele yrkeslivet. Investering i deg selv gir ofte bedre avkastning enn noen finansiell investering.',
          emphasis: 'important'
        },
        {
          id: '7-4-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Humankapital: Din største investering'
        },
        {
          id: '7-4-def-1',
          type: 'definition',
          order: 3,
          term: 'Humankapital',
          definition: 'Nåverdien av alle fremtidige arbeidsinntekter. For en nyutdannet kan dette være 15-25 millioner kroner over yrkeslivet – langt mer enn det meste av finansformue.'
        },
        {
          id: '7-4-text-2',
          type: 'text',
          order: 4,
          text: 'Små forbedringer i din humankapital gir enorme utslag:'
        },
        {
          id: '7-4-list-1',
          type: 'list',
          order: 5,
          ordered: false,
          items: [
            '10% høyere lønn gjennom karrieren = millioner i ekstra inntekt',
            'Riktig bransjevalg kan gi 2-3x forskjell i livstidsinntekt',
            'Kontinuerlig læring holder kompetansen relevant og lønnen høy',
            'Nettverk og relasjoner åpner dører til bedre muligheter'
          ]
        },
        {
          id: '7-4-heading-2',
          type: 'heading',
          order: 6,
          level: 2,
          text: 'Finanskompetanse i arbeidsmarkedet'
        },
        {
          id: '7-4-text-3',
          type: 'text',
          order: 7,
          text: 'Kunnskapen fra dette kurset er etterspurt i mange bransjer:'
        },
        {
          id: '7-4-table-1',
          type: 'table',
          order: 8,
          headers: ['Sektor', 'Relevante roller', 'Hvorfor finanskompetanse trengs'],
          rows: [
            ['Finans og bank', 'Analytiker, rådgiver, risikostyring', 'Kjerne i alle funksjoner'],
            ['Consulting', 'Finansrådgivning, M&A, strategi', 'Verdsettelse, kundeforståelse'],
            ['Industri', 'Controller, treasury, investor relations', 'Kapitalstyring, rapportering'],
            ['Tech/startup', 'CFO, fundraising', 'Verdsettelse, forhandling'],
            ['Bærekraft/ESG', 'Bærekraftsanalytiker, klimarisiko', 'Grønn finans, regulering']
          ]
        },
        {
          id: '7-4-heading-3',
          type: 'heading',
          order: 9,
          level: 2,
          text: 'Den grønne kompetanserevolusjonen'
        },
        {
          id: '7-4-text-4',
          type: 'text',
          order: 10,
          text: 'Klimaomstillingen skaper enorm etterspørsel etter ny kompetanse. McKinsey anslår at Europa trenger 7-18 millioner nye grønne jobber innen 2050.'
        },
        {
          id: '7-4-list-2',
          type: 'list',
          order: 11,
          ordered: false,
          items: [
            'ESG-analyse og rapportering (CSRD, SFDR, taksonomi)',
            'Klimarisikomodellering og stresstesting',
            'Grønn obligasjonsfinansiering og sertifisering',
            'Impact measurement og verdiskapingsanalyse',
            'Bærekraftig supply chain-finans'
          ]
        },
        {
          id: '7-4-keypoint-1',
          type: 'keypoint',
          order: 12,
          points: [
            'Kombinasjonen av finanskompetanse og bærekraftsforståelse er sjelden og verdifull',
            'Du har nå begge deler gjennom dette kurset'
          ]
        },
        {
          id: '7-4-example-1',
          type: 'example',
          order: 13,
          title: 'Karrierevei: Fra finans til impact',
          content: 'Anders startet som analytiker i meglerhus etter studiene. Etter tre år tok han en mastergrad i bærekraftig finans og fikk jobb som ESG-analytiker i et stort pensjonsfond. Nå leder han arbeidet med klimarisikoanalyse og tjener mer enn han ville gjort i tradisjonell finans – samtidig som jobben føles meningsfull. "Kurset i bærekraftig foretaksfinans ga meg grunnlaget", sier han.'
        },
        {
          id: '7-4-heading-4',
          type: 'heading',
          order: 14,
          level: 2,
          text: 'Lønnsforhandling: Finanskompetanse i praksis'
        },
        {
          id: '7-4-list-3',
          type: 'list',
          order: 15,
          ordered: true,
          items: [
            'Kjenn din verdi: Undersøk markedslønn for tilsvarende stillinger',
            'Forbered argumenter: Dokumenter konkrete bidrag og resultater',
            'Tenk total kompensasjon: Lønn, bonus, pensjon, aksjer, fordeler',
            'Langsiktig perspektiv: Tidlig i karrieren er læringsmuligheter ofte viktigere',
            'BATNA: Ha alternativ (Best Alternative To Negotiated Agreement)'
          ]
        },
        {
          id: '7-4-quiz-1',
          type: 'quiz',
          order: 16,
          question: 'Hvorfor er humankapital ofte viktigere enn finanskapital for unge mennesker?',
          options: [
            'Fordi unge ikke har råd til å spare',
            'Fordi nåverdien av fremtidige inntekter typisk er større enn finansformuen',
            'Fordi humankapital er enklere å måle',
            'Fordi arbeidsgivere betaler mer til unge'
          ],
          correctAnswer: 1,
          explanation: 'For unge mennesker er nåverdien av alle fremtidige arbeidsinntekter (humankapitalen) typisk 15-25 millioner kroner, langt mer enn det meste av sparing.'
        },
        {
          id: '7-4-quiz-2',
          type: 'quiz',
          order: 17,
          question: 'Hvilken kompetansekombinasjon blir stadig mer etterspurt i finansbransjen?',
          options: [
            'Programmering og kreativitet',
            'Finans og bærekraft/ESG',
            'Økonomi og jus',
            'Ledelse og språk'
          ],
          correctAnswer: 1,
          explanation: 'Kombinasjonen av tradisjonell finanskompetanse og forståelse av bærekraft/ESG er svært etterspurt på grunn av ny regulering og investorkrav.'
        },
        {
          id: '7-4-exercise-1',
          type: 'exercise',
          order: 18,
          title: 'Oppgave: Din karriere og kompetanse',
          description: '1. Estimer din humankapital: Hvis du forventer en startlønn på X og 3% årlig lønnsvekst i 40 år, hva er nåverdien med 4% diskonteringsrente?\n\n2. Identifiser tre kompetanseområder du vil utvikle de neste 3 årene. Hvordan kan de øke din humankapital?\n\n3. Undersøk en konkret jobb du er interessert i. Hva er markedslønn, og hvilke kvalifikasjoner etterspørres?',
          hint: 'Bruk nåverdiformelen for annuitet, eller regneark.'
        },
        {
          id: '7-4-reflection-1',
          type: 'reflection',
          order: 19,
          question: 'Hva slags jobb ser du for deg om 10 år? Hvilken rolle spiller finansiell trygghet vs. mening og impact i din motivasjon? Hvordan kan du kombinere disse?'
        }
      ]
    },

    // SEKSJON 7.5: Handlingsplan og veien videre
    {
      id: 'seksjon-7-5-handlingsplan',
      title: 'Handlingsplan og veien videre',
      order: 5,
      content: [
        {
          id: '7-5-intro',
          type: 'text',
          order: 1,
          text: 'Kunnskap uten handling er ubrukelig. Dette er din siste seksjon – og den viktigste. Her lager du en konkret handlingsplan for å ta i bruk det du har lært.',
          emphasis: 'important'
        },
        {
          id: '7-5-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Fra kunnskap til handling'
        },
        {
          id: '7-5-text-2',
          type: 'text',
          order: 3,
          text: 'Studier viser at folk som lager spesifikke, tidsbundne planer har mye høyere sannsynlighet for å gjennomføre. Vage intensjoner fører sjelden til endring.'
        },
        {
          id: '7-5-heading-2',
          type: 'heading',
          order: 4,
          level: 2,
          text: 'Din 30-dagers starterplan'
        },
        {
          id: '7-5-table-1',
          type: 'table',
          order: 5,
          headers: ['Uke', 'Handling', 'Hvorfor'],
          rows: [
            ['Uke 1', 'Kartlegg din økonomi (balanse + budsjett)', 'Du kan ikke forbedre det du ikke måler'],
            ['Uke 2', 'Sett opp automatisk sparing (minimum 10%)', 'Automatisering fjerner viljestyrkeavhengighet'],
            ['Uke 3', 'Sjekk fond og pensjon (hva eier du, hva koster det?)', 'Bevissthet er første steg til forbedring'],
            ['Uke 4', 'Velg ett forbedringspunkt og implementer', 'Konkret handling skaper momentum']
          ]
        },
        {
          id: '7-5-heading-3',
          type: 'heading',
          order: 6,
          level: 2,
          text: 'Sjekkliste: Ditt finansielle fundament'
        },
        {
          id: '7-5-list-1',
          type: 'list',
          order: 7,
          ordered: false,
          items: [
            'Bufferkonto på 3-6 måneder med utgifter',
            'Ingen kredittkortgjeld eller forbrukslån',
            'Automatisk sparing på minst 10% av inntekt',
            'BSU utnyttet (hvis under 34 år)',
            'Pensjonssparing hos arbeidsgiver aktivert',
            'Investeringer i diversifiserte lavkostfond',
            'Forsikringer på plass (innbo, reise, evt. liv/uførhet)'
          ]
        },
        {
          id: '7-5-heading-4',
          type: 'heading',
          order: 8,
          level: 2,
          text: 'Årlig finansiell sjekk'
        },
        {
          id: '7-5-text-3',
          type: 'text',
          order: 9,
          text: 'Sett av tid én gang i året til en grundig gjennomgang:'
        },
        {
          id: '7-5-list-2',
          type: 'list',
          order: 10,
          ordered: true,
          items: [
            'Oppdater personlig balanse – hvordan har netto formue utviklet seg?',
            'Vurder måloppnåelse – er du på sporet mot dine finansielle mål?',
            'Rebalanser portefølje – har aksjeandelen blitt for høy eller lav?',
            'Sjekk kostnader – betaler du for mye i fondsavgifter eller banktjenester?',
            'Oppdater forsikringer – har livssituasjonen endret seg?',
            'Juster planen – nye mål, nye prioriteringer'
          ]
        },
        {
          id: '7-5-keypoint-1',
          type: 'keypoint',
          order: 11,
          points: [
            'Finansiell planlegging er ikke en engangshendelse – det er en kontinuerlig prosess',
            'Små, regelmessige justeringer gir bedre resultater enn store, sjeldne omveltninger'
          ]
        },
        {
          id: '7-5-heading-5',
          type: 'heading',
          order: 12,
          level: 2,
          text: 'Ressurser for videre læring'
        },
        {
          id: '7-5-list-3',
          type: 'list',
          order: 13,
          ordered: false,
          items: [
            'Finansportalen.no: Uavhengig sammenligning av finansprodukter',
            'Nordnet/DNB/Storebrand: Gode læringsressurser om investering',
            'CFA Institute: For profesjonell sertifisering i finans',
            'PRI (Principles for Responsible Investment): For ESG-fordypning',
            'Bøker: "A Random Walk Down Wall Street" (Malkiel), "Thinking, Fast and Slow" (Kahneman)'
          ]
        },
        {
          id: '7-5-heading-6',
          type: 'heading',
          order: 14,
          level: 2,
          text: 'Til slutt: Husk hvorfor'
        },
        {
          id: '7-5-text-4',
          type: 'text',
          order: 15,
          text: 'Penger er et middel, ikke et mål. Finansiell kompetanse handler ikke om å bli rik, men om å ha frihet til å leve livet på dine egne premisser:'
        },
        {
          id: '7-5-list-4',
          type: 'list',
          order: 16,
          ordered: false,
          items: [
            'Ha trygghet i møte med uforutsette hendelser',
            'Kunne ta valg basert på verdier, ikke bare økonomi',
            'Bygge en fremtid som er bærekraftig – for deg og planeten',
            'Gi fremtidens deg flere muligheter enn du har i dag',
            'Bidra til en verden der kapitalen flyter mot løsninger'
          ]
        },
        {
          id: '7-5-example-1',
          type: 'example',
          order: 17,
          title: 'En fremtidsvisjon',
          content: 'Om 20 år kan du se tilbake på dette kurset som et vendepunkt. Kanskje du ble en investor som konsekvent vurderte både avkastning og bærekraft. Kanskje du fikk en jobb der du bidrar til klimaomstillingen. Kanskje du rett og slett tok bedre økonomiske beslutninger og skapte trygghet for deg og dine nærmeste. Uansett – kunnskapen du nå har er et verktøy. Hvordan du bruker det, er opp til deg.'
        },
        {
          id: '7-5-quiz-1',
          type: 'quiz',
          order: 18,
          question: 'Hva bør være det første steget i 30-dagers starterplanen?',
          options: [
            'Investere i aksjer',
            'Kartlegge egen økonomi med balanse og budsjett',
            'Bytte til billigere fond',
            'Nedbetale all gjeld'
          ],
          correctAnswer: 1,
          explanation: 'Du kan ikke forbedre det du ikke måler. Kartlegging av nåsituasjonen er nødvendig for å kunne ta informerte beslutninger.'
        },
        {
          id: '7-5-quiz-2',
          type: 'quiz',
          order: 19,
          question: 'Hvorfor anbefales en årlig finansiell gjennomgang?',
          options: [
            'Fordi det er lovpålagt',
            'Fordi finansmarkene endrer seg så raskt',
            'Fordi livssituasjonen og målene endrer seg over tid',
            'Fordi det tar et år å spare nok til å investere'
          ],
          correctAnswer: 2,
          explanation: 'Årlig gjennomgang er viktig fordi livet endrer seg – ny jobb, ny familie, nye mål, nye prioriteringer. Finansplanen må tilpasses virkeligheten.'
        },
        {
          id: '7-5-exercise-1',
          type: 'exercise',
          order: 20,
          title: 'Oppgave: Din handlingsplan',
          description: '1. Gå gjennom sjekklisten for finansielt fundament. Hvilke punkter har du på plass, og hvilke mangler?\n\n2. Lag din versjon av 30-dagers starterplanen med konkrete, personlige tiltak for hver uke.\n\n3. Sett opp en påminnelse for din første årlige finansielle gjennomgang.\n\n4. Skriv et brev til deg selv om 5 år. Beskriv dine finansielle mål og hva du håper å ha oppnådd.',
          hint: 'Vær konkret og tidsspesifikk i planen din.'
        },
        {
          id: '7-5-reflection-1',
          type: 'reflection',
          order: 21,
          question: 'Du er nå ferdig med kurset. Hva er det aller viktigste du tar med deg? Og hva er det første du kommer til å gjøre annerledes som følge av det du har lært?'
        },
        {
          id: '7-5-heading-7',
          type: 'heading',
          order: 22,
          level: 2,
          text: 'Gratulerer – du er nå rustet for fremtiden!'
        },
        {
          id: '7-5-text-5',
          type: 'text',
          order: 23,
          text: 'Du har fullført kurset i Bærekraftig Foretaksfinans. Du har lært om pengenes tidsverdi, obligasjoner, aksjer, porteføljeteori, bærekraftig finans og personlig økonomi. Viktigst av alt: Du har verktøyene til å ta gjennomtenkte finansielle beslutninger resten av livet. Lykke til på reisen!',
          emphasis: 'important'
        }
      ]
    }
  ]
};
