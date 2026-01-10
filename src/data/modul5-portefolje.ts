import { Module, InteractiveModelContent } from '../types/course';

export const modul5PortefoljeModule: Module = {
  id: 'modul-5-portefolje',
  title: 'Porteføljeteori og Diversifisering',
  icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
  order: 6,
  learningObjectives: [
    'Forstå hvorfor diversifisering reduserer risiko uten å redusere forventet avkastning',
    'Beregne og tolke korrelasjon mellom ulike investeringer',
    'Forklare konseptet "den effektive fronten" og optimal portefølje',
    'Bygge en balansert portefølje tilpasset egen risikoprofil',
    'Forstå når og hvordan man rebalanserer en portefølje'
  ],
  sections: [
    // ===================================
    // SEKSJON 5.1: Hvorfor ikke legge alle egg i én kurv?
    // ===================================
    {
      id: 'seksjon-5-1-diversifisering',
      title: 'Hvorfor ikke legge alle egg i én kurv?',
      order: 1,
      content: [
        {
          id: '5-1-hook',
          type: 'text',
          order: 1,
          text: '**Tenk deg to investorer i 2001.** Erik satte alle sparepengene sine i én aksje: Enron. Anna spredte pengene på 30 ulike aksjer. Da Enron gikk konkurs, mistet Erik ALT. Anna? Hun tapte 3% på Enron-posisjonen, men porteføljen hennes overlevde.',
          emphasis: 'important'
        },
        {
          id: '5-1-podcast',
          type: 'audio',
          order: 2,
          title: 'Podcast: Risiko og avkastning',
          duration: '20 min',
          url: '/riskreturn.m4a',
          description: 'Lytt til denne podcasten for en grundig innføring i sammenhengen mellom risiko og avkastning i porteføljeteori.'
        },
        {
          id: '5-1-intro',
          type: 'text',
          order: 3,
          text: 'Diversifisering er ikke bare et fint ord – det er din viktigste beskyttelse mot katastrofe. Nobelprisvinner Harry Markowitz kalte det "den eneste gratis lunsjen i finans". I denne modulen lærer du hvorfor, og hvordan du bruker det.'
        },
        {
          id: '5-1-heading-prinsipp',
          type: 'heading',
          order: 4,
          level: 2,
          text: 'Det grunnleggende prinsippet'
        },
        {
          id: '5-1-def-diversifisering',
          type: 'definition',
          order: 5,
          term: 'Diversifisering',
          definition: 'Å spre investeringene på flere ulike verdipapirer, aktivaklasser, sektorer eller regioner for å redusere den totale risikoen i porteføljen.'
        },
        {
          id: '5-1-text-hvorfor',
          type: 'text',
          order: 6,
          text: 'Hvorfor fungerer diversifisering? Fordi ikke alle investeringer beveger seg likt. Når én aksje faller, kan en annen stige. Negative og positive bevegelser *utjevner hverandre*, og resultatet er en jevnere avkastning.'
        },
        {
          id: '5-1-heading-risikotyper',
          type: 'heading',
          order: 7,
          level: 2,
          text: 'To typer risiko – bare én kan elimineres'
        },
        {
          id: '5-1-table-risiko',
          type: 'table',
          order: 8,
          headers: ['Risikotype', 'Beskrivelse', 'Kan diversifiseres?'],
          rows: [
            ['Usystematisk risiko', 'Selskapsspesifikk: dårlig ledelse, produktfeil, konkurranse', 'JA – forsvinner med 20-30 aksjer'],
            ['Systematisk risiko', 'Markedsrisiko: renter, inflasjon, resesjon, krig', 'NEI – påvirker alle investeringer']
          ]
        },
        {
          id: '5-1-def-usystematisk',
          type: 'definition',
          order: 9,
          term: 'Usystematisk risiko (Diversifiserbar risiko)',
          definition: 'Risiko knyttet til enkeltselskaper eller sektorer. Eksempler: CEO slutter, produkt feiler, selskapet saksøkes. Kan elimineres ved å eie mange ulike aksjer.'
        },
        {
          id: '5-1-def-systematisk',
          type: 'definition',
          order: 10,
          term: 'Systematisk risiko (Markedsrisiko)',
          definition: 'Risiko som påvirker hele markedet samtidig. Eksempler: renteendringer, finanskrise, pandemi. KAN IKKE diversifiseres bort, bare reduseres med andre aktivaklasser.'
        },
        {
          id: '5-1-heading-effekt',
          type: 'heading',
          order: 11,
          level: 2,
          text: 'Diversifiseringens effekt'
        },
        {
          id: '5-1-table-effekt',
          type: 'table',
          order: 12,
          headers: ['Antall aksjer', 'Risiko (standardavvik)', 'Reduksjon fra 1 aksje'],
          rows: [
            ['1 aksje', '50%', '–'],
            ['5 aksjer', '35%', '-30%'],
            ['10 aksjer', '27%', '-46%'],
            ['20 aksjer', '22%', '-56%'],
            ['30 aksjer', '20%', '-60%'],
            ['100+ aksjer', '19%', '-62%'],
            ['Hele markedet', '18%', '-64% (kun systematisk)']
          ]
        },
        {
          id: '5-1-text-diminishing',
          type: 'text',
          order: 13,
          text: 'Legg merke til at mesteparten av risikofjerningen skjer med de første 10-20 aksjene. Etter 30 aksjer er det meste av den diversifiserbare risikoen borte – det som gjenstår er markedsrisiko.',
          emphasis: 'important'
        },
        {
          id: '5-1-example-enron',
          type: 'example',
          order: 14,
          title: 'Case: Enron-konkursen 2001',
          content: 'Enron var USAs 7. største selskap. Ansatte ble oppfordret til å ha pensjonsmidlene i Enron-aksjer.',
          calculation: '**Desember 2000:** Enron-aksjen på $90\n**Desember 2001:** Enron erklærer konkurs, aksjen verdiløs\n\n**Ansatt A (100% i Enron):**\nPensjonsverdi: $500 000 → $0\nTapt: ALT\n\n**Ansatt B (5% i Enron, 95% diversifisert):**\nEnron-tap: $25 000 → $0\nRest av porteføljen: $475 000 × 0,95 = $451 250\n**Totalt tap: ca 10%**\n\nForskjellen mellom total ruin og en håndterbar nedgang.'
        },
        {
          id: '5-1-heading-typer',
          type: 'heading',
          order: 15,
          level: 2,
          text: 'Ulike måter å diversifisere på'
        },
        {
          id: '5-1-list-typer',
          type: 'list',
          order: 16,
          ordered: false,
          items: [
            '**Antall aksjer:** 20-30 aksjer fjerner det meste av selskapsspesifikk risiko',
            '**Sektorer:** Spred på teknologi, finans, helse, industri, forbruk, energi',
            '**Geografi:** Norske, europeiske, amerikanske, asiatiske aksjer',
            '**Aktivaklasser:** Aksjer, obligasjoner, eiendom, råvarer',
            '**Tid:** Månedlig sparing ("dollar cost averaging")'
          ]
        },
        {
          id: '5-1-example-sektor',
          type: 'example',
          order: 17,
          title: 'Sektordiversifisering i praksis',
          content: 'Oslo Børs er tungt vektet mot energi og sjømat. Hva skjer ved oljeprisfall?',
          calculation: '**Portefølje A: Kun norske aksjer**\n• 40% energi (Equinor, Aker BP)\n• 20% sjømat (Mowi, Salmar)\n• 20% bank (DNB)\n• 20% telekom (Telenor)\n\n**Portefølje B: Global diversifisering**\n• 25% Norge\n• 50% USA/Europa\n• 25% fremvoksende markeder\n\n**Ved oljeprisfall på 30%:**\nPortefølje A: Kan falle 15-20%\nPortefølje B: Kan falle 5-8%\n\nGlobal diversifisering beskytter mot norsk sektorkonsentrasjon.'
        },
        {
          id: '5-1-quiz-1',
          type: 'quiz',
          order: 18,
          question: 'Hvilken type risiko KAN elimineres gjennom diversifisering?',
          options: [
            'Systematisk risiko (markedsrisiko)',
            'Usystematisk risiko (selskapsspesifikk)',
            'Begge typer',
            'Ingen av typene'
          ],
          correctAnswer: 1,
          explanation: 'Usystematisk (selskapsspesifikk) risiko kan diversifiseres bort ved å eie mange ulike aksjer. Systematisk risiko påvirker hele markedet og kan ikke elimineres gjennom diversifisering – kun reduseres ved å ha andre aktivaklasser.'
        },
        {
          id: '5-1-quiz-2',
          type: 'quiz',
          order: 19,
          question: 'Hvor mange aksjer trenger du omtrent for å fjerne det meste av usystematisk risiko?',
          options: [
            '3-5 aksjer',
            '10-15 aksjer',
            '20-30 aksjer',
            '100+ aksjer'
          ],
          correctAnswer: 2,
          explanation: 'Forskning viser at 20-30 aksjer fjerner det meste (ca 90%) av usystematisk risiko. Etter dette punktet gir flere aksjer minimal ekstra risikofjerning – du sitter igjen med markedsrisikoen som ikke kan diversifiseres bort.'
        },
        {
          id: '5-1-exercise',
          type: 'exercise',
          order: 20,
          title: 'Oppgave: Vurder diversifisering',
          description: 'En investor har følgende portefølje:\n• 50% Equinor\n• 25% Aker BP\n• 15% DNB\n• 10% Mowi\n\n1. Hvor mange aksjer har investoren?\n2. Er porteføljen godt diversifisert på antall?\n3. Hva er problemet med sektorfordelingen?\n4. Hva ville du anbefalt for bedre diversifisering?',
          hint: 'Se på både antall aksjer og konsentrasjon i energisektoren (Equinor + Aker BP).'
        },
        {
          id: '5-1-keypoint',
          type: 'keypoint',
          order: 21,
          points: [
            'Diversifisering er "den eneste gratis lunsjen" i finans',
            'Usystematisk risiko kan elimineres med 20-30 aksjer',
            'Systematisk risiko kan IKKE diversifiseres bort',
            'Diversifiser på antall, sektor, geografi og aktivaklasse',
            'Oslo Børs er konsentrert – global diversifisering anbefales'
          ]
        },
        {
          id: '5-1-reflection',
          type: 'reflection',
          order: 22,
          question: 'Sjekk din egen sparekonto eller pensjonssparing. Hvor diversifisert er du egentlig? Har du for mye i én aksje, én sektor eller ett land?'
        }
      ]
    },

    // ===================================
    // SEKSJON 5.2: Korrelasjon og risikospredning
    // ===================================
    {
      id: 'seksjon-5-2-korrelasjon',
      title: 'Korrelasjon og risikospredning',
      order: 2,
      content: [
        {
          id: '5-2-hook',
          type: 'text',
          order: 1,
          text: '**Hva er bedre: 10 oljeaksjer eller 5 oljeaksjer + 5 teknologiaksjer?** Svaret avhenger av *korrelasjon* – hvor likt aksjene beveger seg. Jo lavere korrelasjon, jo bedre diversifisering.',
          emphasis: 'important'
        },
        {
          id: '5-2-intro',
          type: 'text',
          order: 2,
          text: 'Diversifisering handler ikke bare om antall aksjer – det handler om å kombinere aksjer som *ikke beveger seg likt*. To oljegiganter vil stige og falle sammen. En oljeaksje og en teknologiaksje? Ikke nødvendigvis.'
        },
        {
          id: '5-2-heading-definisjon',
          type: 'heading',
          order: 3,
          level: 2,
          text: 'Hva er korrelasjon?'
        },
        {
          id: '5-2-def-korrelasjon',
          type: 'definition',
          order: 4,
          term: 'Korrelasjon (ρ)',
          definition: 'Et statistisk mål på samvariasjonen mellom to investeringer. Verdien går fra -1 til +1. Viser hvor likt to aksjer beveger seg over tid.'
        },
        {
          id: '5-2-table-korrelasjon',
          type: 'table',
          order: 5,
          headers: ['Korrelasjon', 'Betydning', 'Diversifiseringseffekt'],
          rows: [
            ['+1,0', 'Perfekt positiv – beveger seg helt likt', 'Ingen diversifisering'],
            ['+0,5 til +0,9', 'Høy positiv – beveger seg ofte likt', 'Begrenset diversifisering'],
            ['+0,1 til +0,4', 'Lav positiv – noe samvariasjon', 'God diversifisering'],
            ['0', 'Ingen sammenheng', 'Svært god diversifisering'],
            ['-0,1 til -0,4', 'Lav negativ – beveger seg ofte motsatt', 'Utmerket diversifisering'],
            ['-1,0', 'Perfekt negativ – alltid motsatt', 'Maksimal diversifisering']
          ]
        },
        {
          id: '5-2-heading-eksempler',
          type: 'heading',
          order: 6,
          level: 2,
          text: 'Typiske korrelasjoner'
        },
        {
          id: '5-2-table-typisk',
          type: 'table',
          order: 7,
          headers: ['Par', 'Typisk korrelasjon', 'Forklaring'],
          rows: [
            ['Equinor vs. Aker BP', '+0,85', 'Begge oljeselskaper, påvirkes av oljepris'],
            ['DNB vs. SpareBank 1', '+0,80', 'Begge banker, påvirkes av renter og økonomi'],
            ['Telenor vs. Equinor', '+0,40', 'Ulike sektorer, begge norske'],
            ['Norske aksjer vs. US aksjer', '+0,60', 'Ulike markeder, men global økonomi binder'],
            ['Aksjer vs. Statsobligasjoner', '+0,10 til -0,20', 'Ofte motsatt i kriser'],
            ['Aksjer vs. Gull', '-0,05', 'Nesten ingen sammenheng']
          ]
        },
        {
          id: '5-2-heading-portefoljerisiko',
          type: 'heading',
          order: 8,
          level: 2,
          text: 'Korrelasjon og porteføljerisiko'
        },
        {
          id: '5-2-text-formler',
          type: 'text',
          order: 9,
          text: 'Risikoen i en portefølje avhenger ikke bare av risikoen i hver enkelt investering, men også av korrelasjonen mellom dem.'
        },
        {
          id: '5-2-formula-portefolje',
          type: 'formula',
          order: 10,
          formula: 'σ_p² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂σ₁σ₂ρ₁₂',
          description: 'For en portefølje med to aktiva:\n• σ_p = porteføljens risiko (standardavvik)\n• w = vekt i porteføljen\n• σ = standardavvik (risiko) for hver aktiva\n• ρ = korrelasjon mellom aktivaene\n\nNøkkelinnsikt: Lavere ρ → lavere porteføljerisiko!'
        },
        {
          id: '5-2-example-korrelasjon',
          type: 'example',
          order: 11,
          title: 'Korrelasjonens effekt på risiko',
          content: 'Du har to aksjer, begge med 20% volatilitet. Du investerer 50% i hver.',
          calculation: '**Scenario A: Korrelasjon = +1 (perfekt positiv)**\nPorteføljerisiko = 20%\nIngen risikofjerning – aksjene beveger seg helt likt\n\n**Scenario B: Korrelasjon = +0,5**\nPorteføljerisiko = 17,3%\nNoe risikofjerning\n\n**Scenario C: Korrelasjon = 0**\nPorteføljerisiko = 14,1%\nGod risikofjerning\n\n**Scenario D: Korrelasjon = -1 (perfekt negativ)**\nPorteføljerisiko = 0%\nAll risiko eliminert!\n\n**Konklusjon:** Med samme individuelle risiko kan korrelasjonen endre porteføljerisiko fra 20% til 0%!'
        },
        {
          id: '5-2-heading-praksis',
          type: 'heading',
          order: 12,
          level: 2,
          text: 'Korrelasjon i praksis'
        },
        {
          id: '5-2-text-krisetid',
          type: 'text',
          order: 13,
          text: '**Viktig advarsel:** I krisetider øker korrelasjonen! Når markedet krasjer, faller de fleste aksjer sammen. Den diversifiseringen du trodde du hadde, kan forsvinne når du trenger den mest.',
          emphasis: 'warning'
        },
        {
          id: '5-2-example-finanskrise',
          type: 'example',
          order: 14,
          title: 'Finanskrisen 2008: Korrelasjon i krise',
          content: 'Under normale tider var korrelasjonen mellom ulike aksjemarked ca +0,5. I finanskrisen 2008:',
          calculation: '**Korrelasjoner før krisen (2006-2007):**\n• USA vs. Europa: +0,65\n• USA vs. Fremvoksende: +0,55\n• Aksjer vs. High Yield obl.: +0,40\n\n**Korrelasjoner under krisen (sept-nov 2008):**\n• USA vs. Europa: +0,95\n• USA vs. Fremvoksende: +0,90\n• Aksjer vs. High Yield obl.: +0,85\n\n**Alt falt sammen!**\nBare statsobligasjoner og gull holdt seg.\n\nLærdommen: Ekte diversifisering krever ulike *aktivaklasser*, ikke bare ulike aksjer.'
        },
        {
          id: '5-2-heading-aktivaklasser',
          type: 'heading',
          order: 15,
          level: 2,
          text: 'Korrelasjon mellom aktivaklasser'
        },
        {
          id: '5-2-table-aktivaklasser',
          type: 'table',
          order: 16,
          headers: ['', 'Aksjer', 'Stats.obl.', 'Foretak.obl.', 'Eiendom', 'Gull'],
          rows: [
            ['Aksjer', '1,00', '-0,10', '+0,50', '+0,60', '+0,05'],
            ['Statsobligasjoner', '-0,10', '1,00', '+0,30', '+0,10', '+0,20'],
            ['Foretaksobligasjoner', '+0,50', '+0,30', '1,00', '+0,40', '+0,10'],
            ['Eiendom', '+0,60', '+0,10', '+0,40', '1,00', '+0,15'],
            ['Gull', '+0,05', '+0,20', '+0,10', '+0,15', '1,00']
          ]
        },
        {
          id: '5-2-text-konklusjon',
          type: 'text',
          order: 17,
          text: 'Statsobligasjoner og gull har lavest korrelasjon med aksjer – derfor er de viktige diversifiseringsverktøy, spesielt i kriser.'
        },
        {
          id: '5-2-quiz-1',
          type: 'quiz',
          order: 18,
          question: 'To aksjer har korrelasjon +0,9. Hva betyr dette for diversifisering?',
          options: [
            'Utmerket diversifisering – de beveger seg motsatt',
            'God diversifisering – middels samvariasjon',
            'Dårlig diversifisering – de beveger seg nesten likt',
            'Korrelasjon har ingen betydning for diversifisering'
          ],
          correctAnswer: 2,
          explanation: 'Korrelasjon +0,9 er svært høy positiv korrelasjon – aksjene beveger seg nesten helt likt. Dette gir minimal diversifiseringseffekt. For god diversifisering ønsker du lav eller negativ korrelasjon.'
        },
        {
          id: '5-2-quiz-2',
          type: 'quiz',
          order: 19,
          question: 'Hva skjer typisk med korrelasjonen mellom aksjer under en finanskrise?',
          options: [
            'Den faller – aksjene beveger seg mer ulikt',
            'Den forblir uendret',
            'Den stiger – aksjene faller sammen',
            'Den blir negativ'
          ],
          correctAnswer: 2,
          explanation: 'Under kriser øker korrelasjonen mellom aksjer dramatisk – de fleste faller sammen. Dette kalles "correlation breakdown" og er grunnen til at ekte diversifisering krever ulike aktivaklasser, ikke bare ulike aksjer.'
        },
        {
          id: '5-2-exercise',
          type: 'exercise',
          order: 20,
          title: 'Oppgave: Beregn porteføljerisiko',
          description: 'Du har to aksjer:\n• Aksje A: Vekt 60%, volatilitet 25%\n• Aksje B: Vekt 40%, volatilitet 15%\n• Korrelasjon mellom A og B: +0,3\n\nBruk formelen σ_p² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂σ₁σ₂ρ til å beregne:\n1. Porteføljens varians (σ_p²)\n2. Porteføljens standardavvik (σ_p)\n3. Sammenlign med det vektede gjennomsnittet av risikoen (0,6×25 + 0,4×15 = 21%). Er porteføljerisikoen lavere?',
          hint: 'Husk å bruke desimaltall for vektene (0,6 og 0,4) og volatiliteten (0,25 og 0,15).'
        },
        {
          id: '5-2-keypoint',
          type: 'keypoint',
          order: 21,
          points: [
            'Korrelasjon måler samvariasjon: -1 til +1',
            'Lavere korrelasjon = bedre diversifisering',
            'I kriser øker korrelasjonen – diversifiseringen svekkes',
            'Statsobligasjoner og gull har lav korrelasjon med aksjer',
            'Ekte diversifisering krever ulike aktivaklasser, ikke bare ulike aksjer'
          ]
        },
        {
          id: '5-2-reflection',
          type: 'reflection',
          order: 22,
          question: 'Mange nordmenn har mye av formuen i bolig og norske aksjer. Hva tror du korrelasjonen er mellom norsk boligpris og Oslo Børs? Er dette god diversifisering?'
        }
      ]
    },

    // ===================================
    // SEKSJON 5.3: Den effektive fronten
    // ===================================
    {
      id: 'seksjon-5-3-effektiv-front',
      title: 'Den effektive fronten',
      order: 3,
      content: [
        {
          id: '5-3-hook',
          type: 'text',
          order: 1,
          text: '**Finnes det en "optimal" portefølje?** Nobelprisvinner Harry Markowitz mente det – og utviklet teorien som revolusjonerte finans. Resultatet? En elegant kurve kalt "den effektive fronten".',
          emphasis: 'important'
        },
        {
          id: '5-3-intro',
          type: 'text',
          order: 2,
          text: 'Moderne porteføljeteori handler om å finne den beste balansen mellom avkastning og risiko. Ikke alle porteføljer er like gode – noen gir høyere avkastning for samme risiko, eller lavere risiko for samme avkastning. Målet er å finne de *effisiente* porteføljene.'
        },
        {
          id: '5-3-heading-markowitz',
          type: 'heading',
          order: 3,
          level: 2,
          text: 'Markowitzs revolusjon'
        },
        {
          id: '5-3-text-markowitz',
          type: 'text',
          order: 4,
          text: 'I 1952 publiserte Harry Markowitz artikkelen "Portfolio Selection". Hovedinnsikten var enkel men kraftfull: **du bør ikke bare vurdere hver investering isolert, men hvordan de fungerer sammen i en portefølje.**'
        },
        {
          id: '5-3-def-mpt',
          type: 'definition',
          order: 5,
          term: 'Moderne porteføljeteori (MPT)',
          definition: 'Rammeverket utviklet av Markowitz for å konstruere porteføljer som maksimerer forventet avkastning for et gitt risikonivå, eller minimerer risiko for et gitt avkastningsnivå.'
        },
        {
          id: '5-3-heading-mulighetsomraade',
          type: 'heading',
          order: 6,
          level: 2,
          text: 'Mulighetsområdet'
        },
        {
          id: '5-3-text-mulighetsomraade',
          type: 'text',
          order: 7,
          text: 'Tenk deg at du kan kombinere et sett med aksjer i alle mulige vekter. Hver kombinasjon gir en unik risiko-avkastning-profil. Plottet du alle mulige porteføljer i et diagram med risiko (x-akse) og avkastning (y-akse), får du et "mulighetsområde".'
        },
        {
          id: '5-3-def-front',
          type: 'definition',
          order: 8,
          term: 'Den effektive fronten (Efficient Frontier)',
          definition: 'Kurven som viser alle porteføljer som gir høyest mulig forventet avkastning for hvert risikonivå. Porteføljer på fronten er "effisiente" – du kan ikke gjøre det bedre uten å ta mer risiko.'
        },
        {
          id: '5-3-text-kurve',
          type: 'text',
          order: 9,
          text: 'Den effektive fronten er den øvre kanten av mulighetsområdet – en kurve som buer oppover til høyre. Alle rasjonelle investorer bør velge en portefølje SOM LIGGER PÅ denne kurven.'
        },
        {
          id: '5-3-example-front',
          type: 'example',
          order: 10,
          title: 'Illustrasjon av den effektive fronten',
          content: 'Tenk deg tre porteføljer:\n\n• Portefølje A: 8% avkastning, 15% risiko\n• Portefølje B: 8% avkastning, 20% risiko\n• Portefølje C: 10% avkastning, 15% risiko',
          calculation: '**Analyse:**\n\nPortefølje B er INEFFISIENT:\n→ Samme avkastning som A, men høyere risiko\n→ Ingen rasjonell investor ville valgt B over A\n\nPortefølje A og C er begge EFFISIENTE:\n→ A: Lavere risiko, lavere avkastning\n→ C: Høyere avkastning, samme risiko som A\n→ Valget avhenger av investorens risikotoleranse\n\n**A og C ligger på den effektive fronten, B gjør det ikke.**'
        },
        {
          id: '5-3-heading-mvp',
          type: 'heading',
          order: 11,
          level: 2,
          text: 'Minimum varians-porteføljen (MVP)'
        },
        {
          id: '5-3-def-mvp',
          type: 'definition',
          order: 12,
          term: 'Minimum varians-portefølje (MVP)',
          definition: 'Porteføljen med lavest mulig risiko blant alle mulige kombinasjoner. Ligger på venstre ytterpunkt av den effektive fronten.'
        },
        {
          id: '5-3-text-mvp',
          type: 'text',
          order: 13,
          text: 'MVP er interessant fordi den viser at du kan oppnå lavere risiko enn ALLE enkeltaksjene ved smart kombinering. Selv den sikreste enkeltaksjen kan ha høyere risiko enn en godt diversifisert portefølje.'
        },
        {
          id: '5-3-heading-optimal',
          type: 'heading',
          order: 14,
          level: 2,
          text: 'Den optimale porteføljen'
        },
        {
          id: '5-3-text-optimal',
          type: 'text',
          order: 15,
          text: 'Hvilken portefølje på den effektive fronten er "best"? Det avhenger av *din* risikotoleranse, uttrykt gjennom en nyttekurve (indifferenskurve). Den optimale porteføljen er der din nyttekurve tangerer fronten.'
        },
        {
          id: '5-3-table-risikoprofil',
          type: 'table',
          order: 16,
          headers: ['Risikoprofil', 'Plassering på fronten', 'Typisk allokering'],
          rows: [
            ['Konservativ', 'Venstre (lav risiko)', '20% aksjer, 80% obligasjoner'],
            ['Moderat', 'Midten', '50% aksjer, 50% obligasjoner'],
            ['Aggressiv', 'Høyre (høy risiko)', '80% aksjer, 20% obligasjoner'],
            ['Svært aggressiv', 'Helt til høyre', '100% aksjer']
          ]
        },
        {
          id: '5-3-heading-praksis',
          type: 'heading',
          order: 17,
          level: 2,
          text: 'Fra teori til praksis'
        },
        {
          id: '5-3-text-begrensninger',
          type: 'text',
          order: 18,
          text: 'Moderne porteføljeteori har begrensninger i praksis:',
          emphasis: 'warning'
        },
        {
          id: '5-3-list-begrensninger',
          type: 'list',
          order: 19,
          ordered: false,
          items: [
            '**Estimeringsusikkerhet:** Forventet avkastning og korrelasjoner er estimater, ikke fakta',
            '**Ustabile korrelasjoner:** Korrelasjoner endrer seg over tid, spesielt i kriser',
            '**Følsom for inputdata:** Små endringer i estimater kan gi store endringer i optimal portefølje',
            '**Transaksjoskostnader:** Hyppig rebalansering koster penger',
            '**Skatter:** Teorien ignorerer skatteeffekter'
          ]
        },
        {
          id: '5-3-text-likevel',
          type: 'text',
          order: 20,
          text: 'Likevel er prinsippene verdifulle: Diversifisering fungerer, risiko-avkastning-avveiningen er reell, og å tenke på porteføljen som en helhet (ikke enkeltinvesteringer) gir bedre beslutninger.'
        },
        {
          id: '5-3-quiz-1',
          type: 'quiz',
          order: 21,
          question: 'En portefølje ligger UNDER den effektive fronten. Hva betyr dette?',
          options: [
            'Porteføljen har høyest mulig avkastning',
            'Porteføljen har lavest mulig risiko',
            'Porteføljen er ineffisient – du kan få høyere avkastning for samme risiko',
            'Porteføljen er optimal for alle investorer'
          ],
          correctAnswer: 2,
          explanation: 'Porteføljer under den effektive fronten er ineffisiente. Det finnes en annen portefølje som gir enten høyere avkastning for samme risiko, eller samme avkastning for lavere risiko. Rasjonelle investorer bør velge porteføljer PÅ fronten.'
        },
        {
          id: '5-3-quiz-2',
          type: 'quiz',
          order: 22,
          question: 'Hva er minimum varians-porteføljen (MVP)?',
          options: [
            'Porteføljen med høyest avkastning',
            'Porteføljen med lavest mulig risiko',
            'Porteføljen med lik vekt i alle aksjer',
            'Porteføljen med bare obligasjoner'
          ],
          correctAnswer: 1,
          explanation: 'MVP er porteføljen med lavest mulig risiko (varians/standardavvik) blant alle mulige kombinasjoner av de tilgjengelige investeringene. Den ligger på venstre ytterpunkt av den effektive fronten.'
        },
        {
          id: '5-3-exercise',
          type: 'exercise',
          order: 23,
          title: 'Oppgave: Identifiser effisiente porteføljer',
          description: 'Du har fire porteføljer:\n\n• P1: Forventet avkastning 6%, risiko 10%\n• P2: Forventet avkastning 8%, risiko 12%\n• P3: Forventet avkastning 7%, risiko 14%\n• P4: Forventet avkastning 10%, risiko 15%\n\n1. Hvilke porteføljer er INEFFISIENTE? Hvorfor?\n2. Hvilke porteføljer kan ligge på den effektive fronten?\n3. Tegn (skissér) porteføljene i et risiko-avkastning-diagram.',
          hint: 'En portefølje er ineffisient hvis det finnes en annen med høyere avkastning for lik/lavere risiko, eller lavere risiko for lik/høyere avkastning.'
        },
        {
          id: '5-3-keypoint',
          type: 'keypoint',
          order: 24,
          points: [
            'Den effektive fronten viser de beste risiko-avkastning-kombinasjonene',
            'Porteføljer under fronten er ineffisiente – du kan gjøre det bedre',
            'MVP har lavest risiko, men også lavere avkastning',
            'Optimal portefølje avhenger av din personlige risikotoleranse',
            'Teorien har begrensninger, men prinsippene er verdifulle'
          ]
        },
        {
          id: '5-3-reflection',
          type: 'reflection',
          order: 25,
          question: 'Hvor på den effektive fronten ville du plassert deg selv? Er du villig til å ta høy risiko for høy avkastning, eller foretrekker du trygghet?'
        },
        {
          id: '5-3-interactive-portfolio',
          type: 'interactive-model',
          order: 26,
          modelType: 'portfolio-two-asset',
          title: 'Interaktiv porteføljeoptimering (to aktiva)',
          description: 'Utforsk hvordan avkastning, risiko og korrelasjon påvirker den effektive fronten. Se hvordan du kan redusere risiko gjennom diversifisering, og finn minimum-variansporteføljen og tangentporteføljen.',
          controls: [
            {
              key: 'return1',
              label: 'Forventet avkastning - Aktiva 1',
              type: 'slider',
              min: 0,
              max: 25,
              step: 0.5,
              default: 10,
              unit: '%',
              helpText: 'F.eks. aksjer med høyere risiko og avkastning'
            },
            {
              key: 'return2',
              label: 'Forventet avkastning - Aktiva 2',
              type: 'slider',
              min: 0,
              max: 25,
              step: 0.5,
              default: 5,
              unit: '%',
              helpText: 'F.eks. obligasjoner med lavere risiko og avkastning'
            },
            {
              key: 'std1',
              label: 'Risiko (std.avvik) - Aktiva 1',
              type: 'slider',
              min: 5,
              max: 40,
              step: 1,
              default: 20,
              unit: '%',
              helpText: 'Volatilitet/risiko for aktiva 1'
            },
            {
              key: 'std2',
              label: 'Risiko (std.avvik) - Aktiva 2',
              type: 'slider',
              min: 5,
              max: 40,
              step: 1,
              default: 8,
              unit: '%',
              helpText: 'Volatilitet/risiko for aktiva 2'
            },
            {
              key: 'correlation',
              label: 'Korrelasjon',
              type: 'slider',
              min: -1,
              max: 1,
              step: 0.1,
              default: 0.3,
              helpText: 'Samvariasjon mellom aktivaene (-1 til +1)'
            },
            {
              key: 'weight1',
              label: 'Vekt i Aktiva 1',
              type: 'slider',
              min: 0,
              max: 100,
              step: 5,
              default: 50,
              unit: '%',
              helpText: 'Andel av porteføljen i aktiva 1'
            },
            {
              key: 'riskFreeRate',
              label: 'Risikofri rente',
              type: 'slider',
              min: 0,
              max: 8,
              step: 0.25,
              default: 3,
              unit: '%',
              helpText: 'Renten på risikofrie investeringer'
            }
          ],
          outputs: [
            {
              key: 'portReturn',
              label: 'Porteføljeavkastning',
              unit: '%',
              precision: 2,
              highlight: true
            },
            {
              key: 'portStd',
              label: 'Porteføljerisiko',
              unit: '%',
              precision: 2
            },
            {
              key: 'sharpeRatio',
              label: 'Sharpe-ratio',
              precision: 3
            },
            {
              key: 'minVarWeight1',
              label: 'MVP: Vekt Aktiva 1',
              unit: '%',
              precision: 1
            },
            {
              key: 'minVarStd',
              label: 'MVP: Risiko',
              unit: '%',
              precision: 2
            },
            {
              key: 'tangencyWeight1',
              label: 'Tangent: Vekt Aktiva 1',
              unit: '%',
              precision: 1
            },
            {
              key: 'tangencySharpe',
              label: 'Tangent: Sharpe-ratio',
              precision: 3
            }
          ],
          charts: [
            {
              type: 'composed',
              title: 'Effektiv front og kapitalmarkedslinjen (CML)',
              xAxis: { key: 'std', label: 'Risiko (Standardavvik %)', unit: '%' },
              yAxis: { key: 'return', label: 'Forventet avkastning (%)', unit: '%' },
              series: [
                { key: 'return', name: 'Effektiv front', color: '#8b5cf6', type: 'line' },
                { key: 'cmlReturn', name: 'CML', color: '#f59e0b', type: 'line', dashed: true }
              ]
            }
          ],
          explanation: 'Den **lilla kurven** er den effektive fronten – alle mulige kombinasjoner av de to aktivaene. Den **oransje stiplete linjen** er kapitalmarkedslinjen (CML), som viser kombinasjoner av risikofritt aktiva og tangentporteføljen.\n\n**Prøv dette:**\n• Sett korrelasjon til -1 og se hvor mye risikoen kan reduseres\n• Sammenlign Sharpe-ratioen for din portefølje med tangentporteføljen\n• Finn minimum-variansporteføljen ved å justere vektene'
        } as InteractiveModelContent
      ]
    },

    // ===================================
    // SEKSJON 5.4: Bygg din egen portefølje
    // ===================================
    {
      id: 'seksjon-5-4-bygg-portefolje',
      title: 'Bygg din egen portefølje',
      order: 4,
      content: [
        {
          id: '5-4-hook',
          type: 'text',
          order: 1,
          text: '**Nok teori – la oss bygge en portefølje!** I denne seksjonen går vi fra abstrakte konsepter til konkrete valg: Hvor mye i aksjer? Hvilke fond? Hvordan fordele mellom Norge og utland?',
          emphasis: 'important'
        },
        {
          id: '5-4-intro',
          type: 'text',
          order: 2,
          text: 'Å bygge en god portefølje handler om å gjøre bevisste valg basert på din situasjon: tidshorisont, risikotoleranse, og finansielle mål. Det finnes ingen "one size fits all" – men det finnes solide prinsipper.'
        },
        {
          id: '5-4-heading-steg1',
          type: 'heading',
          order: 3,
          level: 2,
          text: 'Steg 1: Definer din situasjon'
        },
        {
          id: '5-4-list-sporsmaal',
          type: 'list',
          order: 4,
          ordered: true,
          items: [
            '**Tidshorisont:** Når trenger du pengene? 2 år, 10 år, 30 år?',
            '**Risikotoleranse:** Kan du tåle 30% fall uten å panikk-selge?',
            '**Finansielle mål:** Pensjon, boligkjøp, barnesparing, økonomisk frihet?',
            '**Nåværende situasjon:** Gjeld? Fast inntekt? Nødsparing?',
            '**Kunnskap:** Hvor mye vil du selv følge med?'
          ]
        },
        {
          id: '5-4-table-tidshorisont',
          type: 'table',
          order: 5,
          headers: ['Tidshorisont', 'Typisk aksjeandel', 'Begrunnelse'],
          rows: [
            ['0-2 år', '0-20%', 'For kort tid til å hente inn tap'],
            ['2-5 år', '20-40%', 'Noe tid til å hente inn tap'],
            ['5-10 år', '40-70%', 'God tid, men behov for å trappe ned'],
            ['10-20 år', '60-90%', 'Lang horisont, kan ta risiko'],
            ['20+ år', '80-100%', 'Svært lang horisont, full aksjeeksponering mulig']
          ]
        },
        {
          id: '5-4-heading-steg2',
          type: 'heading',
          order: 6,
          level: 2,
          text: 'Steg 2: Velg aktivaallokering'
        },
        {
          id: '5-4-def-allokering',
          type: 'definition',
          order: 7,
          term: 'Aktivaallokering (Asset Allocation)',
          definition: 'Fordelingen av porteføljen mellom ulike aktivaklasser: aksjer, obligasjoner, eiendom, kontanter, etc. Den viktigste beslutningen for langsiktig avkastning og risiko.'
        },
        {
          id: '5-4-text-viktigst',
          type: 'text',
          order: 8,
          text: 'Forskning viser at aktivaallokering forklarer over 90% av variasjonen i porteføljeavkastning over tid. Hvilke enkeltaksjer du velger er langt mindre viktig enn fordelingen mellom aksjer og obligasjoner.',
          emphasis: 'important'
        },
        {
          id: '5-4-table-modeller',
          type: 'table',
          order: 9,
          headers: ['Modell', 'Aksjer', 'Obligasjoner', 'Passer for'],
          rows: [
            ['Konservativ', '30%', '70%', 'Pensjonister, kort horisont'],
            ['Balansert', '50%', '50%', 'Moderat risiko, middels horisont'],
            ['Vekst', '70%', '30%', 'Unge, lang horisont'],
            ['Aggressiv', '90%', '10%', 'Svært lang horisont, høy risikotoleranse'],
            ['100% aksjer', '100%', '0%', '20+ års horisont, stor risikotoleranse']
          ]
        },
        {
          id: '5-4-heading-steg3',
          type: 'heading',
          order: 10,
          level: 2,
          text: 'Steg 3: Velg geografisk fordeling'
        },
        {
          id: '5-4-text-geografi',
          type: 'text',
          order: 11,
          text: 'Norge utgjør bare ca 0,3% av verdens aksjemarked. Å ha alle pengene i norske aksjer er som å satse alt på én liten brikke. Global diversifisering gir tilgang til verdens vekst.'
        },
        {
          id: '5-4-table-geografi',
          type: 'table',
          order: 12,
          headers: ['Region', 'Andel av verdensmarkedet', 'Kjennetegn'],
          rows: [
            ['USA', '~60%', 'Store teknologiselskaper, innovasjon'],
            ['Europa (ex Norge)', '~15%', 'Modne selskaper, utbytte'],
            ['Japan', '~6%', 'Tradisjonelle industrier'],
            ['Fremvoksende markeder', '~12%', 'Høy vekst, høy risiko'],
            ['Norge', '~0,3%', 'Energi, sjømat, konsentrert']
          ]
        },
        {
          id: '5-4-example-portefolje',
          type: 'example',
          order: 13,
          title: 'Eksempel: Portefølje for ung sparer',
          content: 'Maria (28) vil spare til pensjon. Tidshorisont: 40 år. Høy risikotoleranse.',
          calculation: '**Marias valg:**\n\n**Aktivaallokering:**\n• 90% aksjer, 10% obligasjoner\n\n**Geografisk fordeling (av aksjer):**\n• 70% globalt aksjefond (verdensindeks)\n• 20% fremvoksende markeder\n• 10% Norge (litt home bias)\n\n**Konkrete fond:**\n• KLP AksjeGlobal Indeks (70%)\n• DNB Global Emerging Markets (20%)\n• KLP AksjeNorge Indeks (10%)\n\n**Obligasjoner (10%):**\n• KLP Obligasjon Global\n\n**Forventet årlig avkastning:** ca 7-8%\n**Forventet volatilitet:** ca 16-18%'
        },
        {
          id: '5-4-example-konservativ',
          type: 'example',
          order: 14,
          title: 'Eksempel: Portefølje for pensjonist',
          content: 'Knut (68) er nylig pensjonert. Trenger jevn inntekt, kort horisont.',
          calculation: '**Knuts valg:**\n\n**Aktivaallokering:**\n• 30% aksjer, 60% obligasjoner, 10% kontanter\n\n**Aksjene (30%):**\n• 20% globalt indeksfond (lav risiko)\n• 10% utbyttefokusert norsk fond\n\n**Obligasjoner (60%):**\n• 40% norske statsobligasjoner\n• 20% investment grade foretaksobl.\n\n**Kontanter (10%):**\n• Høyrentekonto (buffer)\n\n**Forventet årlig avkastning:** ca 4-5%\n**Forventet volatilitet:** ca 6-8%\n\nLavere avkastning, men Knut sover godt om natten.'
        },
        {
          id: '5-4-heading-indeksfond',
          type: 'heading',
          order: 15,
          level: 2,
          text: 'Indeksfond vs. aktive fond'
        },
        {
          id: '5-4-table-fondtype',
          type: 'table',
          order: 16,
          headers: ['', 'Indeksfond (passivt)', 'Aktivt forvaltet fond'],
          rows: [
            ['Mål', 'Følge en indeks', 'Slå indeksen'],
            ['Kostnad (TER)', '0,1-0,3%', '1-2%'],
            ['Avkastning', 'Lik indeksen minus kostnader', 'Varierer, ofte under indeks'],
            ['Risiko', 'Lik indeksen', 'Kan være høyere/lavere'],
            ['Forskning', '80-90% av aktive fond taper mot indeks over tid', '']
          ]
        },
        {
          id: '5-4-text-indeks',
          type: 'text',
          order: 17,
          text: '**Hovedbudskap:** For de fleste er billige indeksfond det smarteste valget. Du får markedsavkastningen til minimal kostnad, og slipper å gjette hvilke forvaltere som vil slå markedet.',
          emphasis: 'important'
        },
        {
          id: '5-4-quiz-1',
          type: 'quiz',
          order: 18,
          question: 'En 25-åring sparer til pensjon om 40 år. Hvilken aksjeandel er mest passende?',
          options: [
            '20% aksjer, 80% obligasjoner',
            '50% aksjer, 50% obligasjoner',
            '80-100% aksjer',
            'Alt i kontanter til markedet faller'
          ],
          correctAnswer: 2,
          explanation: 'Med 40 års horisont kan en ung sparer tåle høy aksjeandel (80-100%). Historisk har aksjer alltid gitt positiv avkastning over 20+ års perioder, og tiden utjevner kortsiktige svingninger.'
        },
        {
          id: '5-4-quiz-2',
          type: 'quiz',
          order: 19,
          question: 'Hva forklarer mest av variasjonen i porteføljeavkastning over tid?',
          options: [
            'Hvilke enkeltaksjer du velger',
            'Timing – når du kjøper og selger',
            'Aktivaallokering – fordelingen mellom aksjer og obligasjoner',
            'Hvilken megler du bruker'
          ],
          correctAnswer: 2,
          explanation: 'Forskning viser at aktivaallokering forklarer over 90% av variasjonen i avkastning over tid. Valg av enkeltaksjer og timing har langt mindre betydning enn den overordnede fordelingen mellom aktivaklasser.'
        },
        {
          id: '5-4-exercise',
          type: 'exercise',
          order: 20,
          title: 'Oppgave: Design din portefølje',
          description: 'Lag en portefølje for deg selv:\n\n1. Definer din tidshorisont (år til du trenger pengene)\n2. Vurder din risikotoleranse (høy/middels/lav)\n3. Velg aksjeandel basert på tabellen\n4. Fordel aksjene geografisk (Norge, global, fremvoksende)\n5. Velg type fond (indeks eller aktiv)\n\nSkriv ned dine valg og begrunnelser.',
          hint: 'Bruk tommelfingerregelen "100 minus alder = aksjeandel" som utgangspunkt, men juster for din personlige risikotoleranse.'
        },
        {
          id: '5-4-keypoint',
          type: 'keypoint',
          order: 21,
          points: [
            'Aktivaallokering er den viktigste beslutningen',
            'Tidshorisont bestemmer hvor mye risiko du kan ta',
            'Global diversifisering reduserer landspesifikk risiko',
            'Indeksfond slår de fleste aktive fond over tid',
            'Det finnes ingen "perfekt" portefølje – bare den som passer DIN situasjon'
          ]
        },
        {
          id: '5-4-reflection',
          type: 'reflection',
          order: 22,
          question: 'Har du en spareavtale i dag? Vet du hva du er investert i? Sjekk fordelingen mellom aksjer og obligasjoner i dine fond.'
        }
      ]
    },

    // ===================================
    // SEKSJON 5.5: Rebalansering over tid
    // ===================================
    {
      id: 'seksjon-5-5-rebalansering',
      title: 'Rebalansering over tid',
      order: 5,
      content: [
        {
          id: '5-5-hook',
          type: 'text',
          order: 1,
          text: '**Du bygde den perfekte porteføljen: 60% aksjer, 40% obligasjoner. Ett år senere: aksjene har steget 30%, obligasjonene 5%. Ny fordeling? 67% aksjer, 33% obligasjoner.** Din risikoprofil har endret seg – uten at du gjorde noe!',
          emphasis: 'important'
        },
        {
          id: '5-5-intro',
          type: 'text',
          order: 2,
          text: 'Markedsbevegelser endrer porteføljens sammensetning over tid. Uten vedlikehold driver porteføljen bort fra din ønskede risikoprofil. Løsningen? Regelmessig rebalansering.'
        },
        {
          id: '5-5-heading-definisjon',
          type: 'heading',
          order: 3,
          level: 2,
          text: 'Hva er rebalansering?'
        },
        {
          id: '5-5-def-rebalansering',
          type: 'definition',
          order: 4,
          term: 'Rebalansering',
          definition: 'Prosessen med å justere porteføljen tilbake til ønsket aktivaallokering ved å selge aktiva som har steget og kjøpe aktiva som har falt.'
        },
        {
          id: '5-5-text-hvorfor',
          type: 'text',
          order: 5,
          text: 'Rebalansering tvinger deg til å gjøre det motsatte av instinktet: **selge vinnere og kjøpe tapere.** Dette høres galt ut, men det er faktisk en systematisk måte å "kjøpe lavt, selge høyt" på.'
        },
        {
          id: '5-5-example-rebalansering',
          type: 'example',
          order: 6,
          title: 'Rebalansering i praksis',
          content: 'Du starter med 100 000 kr fordelt 60/40:\n• Aksjer: 60 000 kr\n• Obligasjoner: 40 000 kr',
          calculation: '**Etter ett år:**\n• Aksjer +25%: 60 000 × 1,25 = 75 000 kr\n• Obligasjoner +3%: 40 000 × 1,03 = 41 200 kr\n• Total: 116 200 kr\n\n**Ny fordeling:** 64,5% aksjer / 35,5% obligasjoner\n\n**For å rebalansere til 60/40:**\n• Ønsket aksjeverdi: 116 200 × 0,60 = 69 720 kr\n• Ønsket obligasjonsverdi: 116 200 × 0,40 = 46 480 kr\n\n**Handling:** Selg aksjer for 5 280 kr, kjøp obligasjoner\n\n**Resultat:** Du "låser inn" aksjegevinst og kjøper obligasjoner billig.'
        },
        {
          id: '5-5-heading-strategier',
          type: 'heading',
          order: 7,
          level: 2,
          text: 'Rebalanseringsstrategier'
        },
        {
          id: '5-5-table-strategier',
          type: 'table',
          order: 8,
          headers: ['Strategi', 'Beskrivelse', 'Fordeler', 'Ulemper'],
          rows: [
            ['Kalenderbasert', 'Rebalansér på faste datoer (årlig, halvårlig)', 'Enkel, forutsigbar', 'Ignorerer markedsbevegelser'],
            ['Terskelbasert', 'Rebalansér når avviket overstiger en grense (f.eks. 5%)', 'Reagerer på markedet', 'Krever overvåking'],
            ['Kombinasjon', 'Sjekk på faste datoer, rebalansér kun hvis terskel overskrides', 'Balansert tilnærming', 'Litt mer kompleks'],
            ['Ved nye midler', 'Nye innskudd investeres i underrepresenterte aktiva', 'Unngår salg, ingen skatt', 'Krever jevnlige innskudd']
          ]
        },
        {
          id: '5-5-text-anbefaling',
          type: 'text',
          order: 9,
          text: '**Anbefaling for de fleste:** Sjekk porteføljen en gang i året (f.eks. nyttår). Rebalansér hvis avviket fra målallokering er over 5 prosentpoeng. Enklere er ofte bedre.'
        },
        {
          id: '5-5-heading-livslopet',
          type: 'heading',
          order: 10,
          level: 2,
          text: 'Livssyklusallokering'
        },
        {
          id: '5-5-def-livssyklus',
          type: 'definition',
          order: 11,
          term: 'Livssyklusallokering (Glide Path)',
          definition: 'En strategi der aksjeandelen reduseres gradvis mot pensjonsalder. Unge tar høy risiko, eldre tar lav risiko – tilpasset tidshorisonten.'
        },
        {
          id: '5-5-table-glideban',
          type: 'table',
          order: 12,
          headers: ['Alder', 'Aksjeandel', 'Obligasjonsandel', 'Logikk'],
          rows: [
            ['25 år', '90%', '10%', '40 år til pensjon, tid til å hente inn tap'],
            ['35 år', '80%', '20%', '30 år til pensjon, fortsatt lang horisont'],
            ['45 år', '70%', '30%', '20 år til pensjon, begynner å trappe ned'],
            ['55 år', '55%', '45%', '10 år til pensjon, moderat risiko'],
            ['65 år', '40%', '60%', 'Nær pensjon, fokus på bevaring'],
            ['75 år', '30%', '70%', 'I pensjon, lav risiko, jevn inntekt']
          ]
        },
        {
          id: '5-5-text-tommelfingerregel',
          type: 'text',
          order: 13,
          text: '**Tommelfingerregel:** "100 minus alder = aksjeandel"\n\nEller for dem med lang forventet levetid: "110 eller 120 minus alder"'
        },
        {
          id: '5-5-heading-skatt',
          type: 'heading',
          order: 14,
          level: 2,
          text: 'Skatteeffekter ved rebalansering'
        },
        {
          id: '5-5-text-skatt',
          type: 'text',
          order: 15,
          text: 'I Norge skattlegges gevinst ved salg av fond (22% på gevinst). Dette påvirker rebalansering:',
          emphasis: 'warning'
        },
        {
          id: '5-5-list-skatt',
          type: 'list',
          order: 16,
          ordered: false,
          items: [
            '**ASK (Aksjesparekonto):** Ingen skatt ved salg innenfor kontoen – rebalansér fritt!',
            '**Vanlig konto:** Skatt ved salg – vurder om gevinsten er stor nok',
            '**IPS (Individuell Pensjonssparing):** Ingen skatt ved salg, men begrensninger',
            '**Nye midler:** Invester i underrepresenterte aktiva – unngår salg'
          ]
        },
        {
          id: '5-5-example-ask',
          type: 'example',
          order: 17,
          title: 'Fordelen med ASK',
          content: 'Du har 500 000 kr i aksjefond med 200 000 kr i urealisert gevinst.',
          calculation: '**På vanlig konto:**\nSalg utløser skatt: 200 000 × 22% = 44 000 kr\nEtter skatt: 456 000 kr å reinvestere\n\n**På ASK:**\nIngen skatt ved salg innenfor kontoen\nAlle 500 000 kr kan reinvesteres\n\n**Konklusjon:** Med ASK kan du rebalansere skattefritt. Bruk ASK for alle aksje-/fondsinvesteringer!'
        },
        {
          id: '5-5-heading-vanligefeil',
          type: 'heading',
          order: 18,
          level: 2,
          text: 'Vanlige feil ved rebalansering'
        },
        {
          id: '5-5-list-feil',
          type: 'list',
          order: 19,
          ordered: false,
          items: [
            '**For hyppig:** Daglig/ukentlig rebalansering gir høye kostnader, ingen ekstra gevinst',
            '**For sjelden:** Aldri rebalansere lar porteføljen drive vekk fra ønsket risiko',
            '**Emosjonell:** Unnlater å rebalansere fordi "vinnerne vil fortsette å vinne"',
            '**Perfeksjonisme:** Venter på "riktig tidspunkt" – som aldri kommer',
            '**Ignorerer skatt:** Rebalanserer utenfor ASK uten å vurdere skatteeffekten'
          ]
        },
        {
          id: '5-5-quiz-1',
          type: 'quiz',
          order: 20,
          question: 'Etter et år med høy aksjeavkastning har porteføljen din drevet fra 60/40 til 70/30 aksjer/obligasjoner. Hva bør du gjøre ved rebalansering?',
          options: [
            'Kjøpe mer aksjer fordi de gjør det bra',
            'Selge aksjer og kjøpe obligasjoner for å komme tilbake til 60/40',
            'Vente til aksjene faller før du gjør noe',
            'Ikke gjøre noe – la vinnerne løpe'
          ],
          correctAnswer: 1,
          explanation: 'Rebalansering betyr å selge det som har gjort det bra (aksjer) og kjøpe det som har gjort det relativt dårlig (obligasjoner). Dette gjenoppretter ønsket risikonivå og tvinger deg til å "selge høyt, kjøpe lavt".'
        },
        {
          id: '5-5-quiz-2',
          type: 'quiz',
          order: 21,
          question: 'Hva er hovedfordelen med å bruke ASK for fondsinvesteringer?',
          options: [
            'Du får høyere avkastning',
            'Du kan rebalansere skattefritt innenfor kontoen',
            'Fondene på ASK har lavere kostnader',
            'Du slipper å betale forvaltningshonorar'
          ],
          correctAnswer: 1,
          explanation: 'Hovedfordelen med ASK er at du kan kjøpe og selge aksjer/fond innenfor kontoen uten å utløse skatt. Du betaler først skatt når du tar penger ut av ASK. Dette gjør rebalansering mye mer kostnadseffektivt.'
        },
        {
          id: '5-5-exercise',
          type: 'exercise',
          order: 22,
          title: 'Oppgave: Rebalanser en portefølje',
          description: 'Du har en portefølje med målallokering 70% aksjer, 30% obligasjoner.\n\nNåværende verdi:\n• Aksjefond: 95 000 kr\n• Obligasjonsfond: 35 000 kr\n• Total: 130 000 kr\n\n1. Hva er nåværende fordeling i prosent?\n2. Hvor langt har porteføljen drevet fra målet?\n3. Beregn hvor mye du må selge/kjøpe for å rebalansere til 70/30.\n4. Hvis dette er på ASK vs. vanlig konto med 50 000 kr i urealisert gevinst – hva er forskjellen?',
          hint: 'Nåværende aksjeandel = 95 000 / 130 000. Målverdi aksjer = 130 000 × 0,70.'
        },
        {
          id: '5-5-heading-oppsummering',
          type: 'heading',
          order: 23,
          level: 2,
          text: 'Oppsummering av Modul 5'
        },
        {
          id: '5-5-text-oppsummering',
          type: 'text',
          order: 24,
          text: 'Du har nå lært de grunnleggende prinsippene for å bygge og vedlikeholde en portefølje. Husk: diversifisering er din venn, aktivaallokering er viktigst, og rebalansering holder risikoen i sjakk. I neste modul dykker vi dypere inn i bærekraftig finans i praksis.'
        },
        {
          id: '5-5-keypoint',
          type: 'keypoint',
          order: 25,
          points: [
            'Markedsbevegelser endrer porteføljens sammensetning over tid',
            'Rebalansering = selge vinnere, kjøpe tapere (motsatt av instinkt)',
            'Årlig sjekk med 5% terskel er en god strategi for de fleste',
            'Reduser aksjeandelen gradvis mot pensjonsalder',
            'Bruk ASK for å rebalansere skattefritt'
          ]
        },
        {
          id: '5-5-reflection',
          type: 'reflection',
          order: 26,
          question: 'Har du noen gang rebalansert porteføljen din? Hvis ikke – sjekk fordelingen din nå. Er den der du ønsker at den skal være?'
        }
      ]
    },
    {
      id: 'seksjon-5-6-oppgaver',
      title: 'Regneoppgaver',
      order: 6,
      content: [
        {
          id: '5-6-intro',
          type: 'text',
          order: 1,
          text: 'Test dine ferdigheter med disse regneoppgavene om porteføljeteori og CAPM. Oppgavene dekker avkastningsberegning, varians, kovarians, porteføljerisiko, beta og kapitalverdimodellen. Klikk på en oppgave for å se oppgaveteksten, og bruk "Vis fasit"-knappen når du vil sjekke svaret ditt.'
        },
        {
          id: '5-6-exerciseset',
          type: 'exerciseset',
          order: 2,
          exerciseSetId: 'oppgavesett-portefolje-capm'
        }
      ]
    }
  ],
  moduleQuiz: {
    id: 'modul-5-portefolje-quiz',
    title: 'Modulquiz: Porteføljeteori og Diversifisering',
    description: 'Test din forståelse av diversifisering, korrelasjon og porteføljebygging. Du trenger minst 80% riktig for å bestå.',
    passingScore: 80,
    questionsToShow: 20,
    questions: [
      {
        id: 'q6-1',
        question: 'Hva er hovedpoenget med diversifisering?',
        options: [
          'Å maksimere avkastningen',
          'Å redusere risiko uten å gi opp forventet avkastning',
          'Å unngå skatt',
          'Å følge alle markedstrender'
        ],
        correctAnswer: 1,
        explanation: 'Diversifisering reduserer usystematisk risiko (selskapsspesifikk risiko) uten å redusere forventet avkastning. Det er "den eneste gratis lunsjen i finans".'
      },
      {
        id: 'q6-2',
        question: 'Hva er korrelasjon?',
        options: [
          'Hvor mye to aktiva er verdt tilsammen',
          'Et mål på hvor mye to investeringer beveger seg sammen',
          'Forskjellen i avkastning mellom to aktiva',
          'Risikoen i en portefølje'
        ],
        correctAnswer: 1,
        explanation: 'Korrelasjon måler sammenheng mellom to investeringers bevegelser. Verdien går fra -1 (perfekt motsatt) til +1 (perfekt lik bevegelse).'
      },
      {
        id: 'q6-3',
        question: 'Hvilken korrelasjon gir best diversifiseringseffekt?',
        options: [
          '+1 (perfekt positiv)',
          '0 (ingen korrelasjon)',
          '-1 (perfekt negativ)',
          '+0,5 (moderat positiv)'
        ],
        correctAnswer: 2,
        explanation: 'Perfekt negativ korrelasjon (-1) gir maksimal diversifiseringseffekt fordi når den ene går ned, går den andre opp, noe som jevner ut svingningene.'
      },
      {
        id: 'q6-4',
        question: 'Hva er den effektive fronten?',
        options: [
          'De billigste aksjene i markedet',
          'Linjen som viser porteføljer med best avkastning for gitt risiko',
          'Grensen mellom aksjer og obligasjoner',
          'De mest omsatte verdipapirene'
        ],
        correctAnswer: 1,
        explanation: 'Den effektive fronten viser alle porteføljer som gir høyest mulig avkastning for et gitt risikonivå. Ingen portefølje under fronten er optimal.'
      },
      {
        id: 'q6-5',
        question: 'Hva er standardavvik i investeringssammenheng?',
        options: [
          'Gjennomsnittlig avkastning',
          'Et mål på volatilitet/risiko',
          'Differansen mellom høyeste og laveste pris',
          'Antall aksjer i porteføljen'
        ],
        correctAnswer: 1,
        explanation: 'Standardavvik måler hvor mye avkastningen varierer rundt gjennomsnittet. Høyere standardavvik = høyere volatilitet = høyere risiko.'
      },
      {
        id: 'q6-6',
        question: 'Hva er usystematisk risiko?',
        options: [
          'Risiko som påvirker hele markedet',
          'Risiko knyttet til enkeltselskaper som kan diversifiseres bort',
          'Valutarisiko',
          'Inflasjonsrisiko'
        ],
        correctAnswer: 1,
        explanation: 'Usystematisk (selskapsspesifikk) risiko kan elimineres gjennom diversifisering. Eksempler er ledelsesendringer, produktsvikt eller rettssaker mot ett selskap.'
      },
      {
        id: 'q6-7',
        question: 'Hva er systematisk risiko?',
        options: [
          'Risiko som kan diversifiseres bort',
          'Markedsrisiko som påvirker alle aktiva og ikke kan diversifiseres bort',
          'Risiko knyttet til enkeltaksjer',
          'Risiko ved systematisk sparing'
        ],
        correctAnswer: 1,
        explanation: 'Systematisk risiko (markedsrisiko, beta-risiko) påvirker hele markedet og kan ikke diversifiseres bort. Eksempler er finanskriser, rentehevinger og pandemier.'
      },
      {
        id: 'q6-8',
        question: 'Hvor mange aksjer trengs typisk for å oppnå god diversifisering?',
        options: [
          '5-10 aksjer',
          '20-30 aksjer',
          'Minst 100 aksjer',
          'Bare 2-3 aksjer'
        ],
        correctAnswer: 1,
        explanation: 'Forskning viser at 20-30 aksjer i ulike bransjer gir det meste av diversifiseringsgevinsten. Flere aksjer gir marginal ekstra gevinst.'
      },
      {
        id: 'q6-9',
        question: 'Hva er rebalansering?',
        options: [
          'Å selge alle aksjer og kjøpe obligasjoner',
          'Å justere porteføljen tilbake til ønsket fordeling',
          'Å investere mer penger',
          'Å bytte megler'
        ],
        correctAnswer: 1,
        explanation: 'Rebalansering betyr å selge aktiva som har steget mye og kjøpe aktiva som har falt, for å opprettholde ønsket risikoprofil.'
      },
      {
        id: 'q6-10',
        question: 'Hva er aktivaallokering?',
        options: [
          'Valg av enkeltaksjer',
          'Fordelingen mellom hovedkategorier som aksjer, obligasjoner og kontanter',
          'Timing av kjøp og salg',
          'Valg av fondsforvalter'
        ],
        correctAnswer: 1,
        explanation: 'Aktivaallokering er fordelingen av porteføljen mellom aktivaklasser. Forskning viser at dette er den viktigste faktoren for langsiktig avkastning og risiko.'
      },
      {
        id: 'q6-11',
        question: 'Hva er Sharpe ratio?',
        options: [
          'Forholdet mellom avkastning og standardavvik',
          'Meravkastning over risikofri rente delt på standardavvik',
          'Forholdet mellom aksjer og obligasjoner',
          'Porteføljens totale verdi delt på risiko'
        ],
        correctAnswer: 1,
        explanation: 'Sharpe ratio = (Avkastning - Risikofri rente) / Standardavvik. Det måler risikojustert avkastning - hvor mye ekstra avkastning du får per enhet risiko.'
      },
      {
        id: 'q6-12',
        question: 'Hvorfor bør aksjeandelen reduseres mot pensjonsalder?',
        options: [
          'Fordi aksjer gir lavere avkastning over tid',
          'Fordi man har kortere tidshorisont og mindre evne til å tåle tap',
          'Fordi det er lovpålagt',
          'Fordi obligasjoner alltid er bedre for pensjonister'
        ],
        correctAnswer: 1,
        explanation: 'Med kortere tidshorisont har man mindre tid til å hente inn eventuelle tap. Derfor bør risikoen gradvis reduseres mot pensjonsalder.'
      },
      {
        id: 'q6-13',
        question: 'To aksjer har korrelasjon på +0,9. Hva betyr dette for diversifisering?',
        options: [
          'Utmerket diversifiseringseffekt',
          'Svak diversifiseringseffekt fordi de beveger seg nesten likt',
          'Aksjene kan ikke kombineres i samme portefølje',
          'Risikoen elimineres helt'
        ],
        correctAnswer: 1,
        explanation: 'Korrelasjon +0,9 betyr at aksjene beveger seg nesten identisk. Dette gir svak diversifiseringseffekt fordi begge faller samtidig i nedgang.'
      },
      {
        id: 'q6-14',
        question: 'Hva er kovarians?',
        options: [
          'Kun et annet ord for korrelasjon',
          'Et mål på hvordan to aktivas avkastning varierer sammen, ikke standardisert',
          'Forventet avkastning på porteføljen',
          'Varians dividert med to'
        ],
        correctAnswer: 1,
        explanation: 'Kovarians måler sam-variasjon mellom to aktiva. I motsetning til korrelasjon er den ikke standardisert (-1 til +1), så den er vanskeligere å tolke direkte.'
      },
      {
        id: 'q6-15',
        question: 'Hva er Harry Markowitz kjent for?',
        options: [
          'Å finne den risikofrie renten',
          'Moderne porteføljeteori og den effektive fronten',
          'Å oppdage inflasjonseffekten',
          'Å grunnlegge Oslo Børs'
        ],
        correctAnswer: 1,
        explanation: 'Markowitz utviklet moderne porteføljeteori i 1952, inkludert konseptet om den effektive fronten. Han fikk Nobelprisen i økonomi i 1990.'
      },
      {
        id: 'q6-16',
        question: 'Hva skjer med porteføljerisikoen når du legger til aktiva med lav korrelasjon?',
        options: [
          'Risikoen øker alltid',
          'Risikoen kan reduseres selv om hvert aktiva er risikabelt',
          'Risikoen forblir uendret',
          'Avkastningen faller proporsjonalt'
        ],
        correctAnswer: 1,
        explanation: 'Med lav eller negativ korrelasjon kan porteføljerisikoen bli lavere enn risikoen til hvert enkelt aktiva. Dette er essensen av diversifisering.'
      },
      {
        id: 'q6-17',
        question: 'Hva er kapitalmarkedslinjen (CML)?',
        options: [
          'Linjen som viser børsens åpningstider',
          'Linjen fra risikofri rente gjennom markedsporteføljen på effektiv front',
          'Grensen mellom aksjer og obligasjoner',
          'Utviklingen i BNP over tid'
        ],
        correctAnswer: 1,
        explanation: 'CML viser kombinasjoner av risikofri plassering og markedsporteføljen. Alle effisiente porteføljer ligger på denne linjen ifølge CAPM.'
      },
      {
        id: 'q6-18',
        question: 'Hva er markedsporteføljen i teorien?',
        options: [
          'De største aksjene på børsen',
          'En portefølje som inneholder alle risikable aktiva vektet etter markedsverdi',
          'Kun norske aksjer',
          'En portefølje valgt av sentralbanken'
        ],
        correctAnswer: 1,
        explanation: 'Markedsporteføljen er en teoretisk portefølje som inneholder alle risikable aktiva i verden, vektet etter markedsverdi. I praksis brukes indekser som tilnærming.'
      },
      {
        id: 'q6-19',
        question: 'Hva betyr det at risiko er "diversifiserbar"?',
        options: [
          'At risikoen øker med flere aktiva',
          'At risikoen kan reduseres eller elimineres ved å spre investeringene',
          'At risikoen kun gjelder internasjonale aksjer',
          'At risikoen er konstant uansett porteføljesammensetning'
        ],
        correctAnswer: 1,
        explanation: 'Diversifiserbar risiko (usystematisk risiko) er selskapsspesifikk risiko som forsvinner når du eier mange ulike aksjer i ulike bransjer.'
      },
      {
        id: 'q6-20',
        question: 'Hva er et "minimum varians-portefølje"?',
        options: [
          'Porteføljen med høyest avkastning',
          'Porteføljen med lavest mulig risiko blant kombinasjoner av risikable aktiva',
          'En portefølje med kun obligasjoner',
          'En portefølje med korte posisjoner'
        ],
        correctAnswer: 1,
        explanation: 'Minimum varians-porteføljen er punktet på effektiv front med lavest risiko. Det er den mest forsiktige kombinasjonen av risikable aktiva.'
      },
      {
        id: 'q6-21',
        question: 'Hvorfor er internasjonal diversifisering viktig?',
        options: [
          'Fordi utenlandske aksjer alltid stiger',
          'Fordi ulike markeder ikke er perfekt korrelerte',
          'Fordi det gir skattefordeler',
          'Fordi det er lovpålagt for norske investorer'
        ],
        correctAnswer: 1,
        explanation: 'Internasjonale markeder har ikke perfekt korrelasjon, så å spre investeringer geografisk gir ytterligere diversifiseringsgevinst.'
      },
      {
        id: 'q6-22',
        question: 'Hva er en passiv investeringsstrategi?',
        options: [
          'Å handle aksjer daglig basert på markedsanalyse',
          'Å følge en indeks uten å prøve å slå markedet',
          'Å kun investere i obligasjoner',
          'Å aldri endre porteføljen uansett'
        ],
        correctAnswer: 1,
        explanation: 'Passiv strategi innebærer å kjøpe og holde en bred indeks, uten å prøve å time markedet eller velge "vinnere". Gir lave kostnader og bred diversifisering.'
      },
      {
        id: 'q6-23',
        question: 'Hva er likevektet portefølje (equal-weight)?',
        options: [
          'En portefølje der alle investorer har like mye',
          'En portefølje der hvert aktiva har samme andel',
          'En portefølje med kun like aksjer',
          'En portefølje uten risiko'
        ],
        correctAnswer: 1,
        explanation: 'Likevektet portefølje gir hvert aktiva lik vekt (f.eks. 20 aksjer = 5% hver). Alternativet er verdivektet der større selskaper har større andel.'
      },
      {
        id: 'q6-24',
        question: 'Hva er "home bias"?',
        options: [
          'Å kun investere i eiendom',
          'Tendens til å overinvestere i hjemlandets aksjer relativt til optimal diversifisering',
          'Å foretrekke kortsiktige investeringer',
          'Å investere kun i kjente merkenavn'
        ],
        correctAnswer: 1,
        explanation: 'Home bias betyr at investorer har uforholdsmessig mye i eget lands aksjer. Dette reduserer diversifiseringsgevinsten man kunne fått internasjonalt.'
      },
      {
        id: 'q6-25',
        question: 'Hva er varians i porteføljesammenheng?',
        options: [
          'Standardavviket kvadrert - et mål på risiko',
          'Gjennomsnittlig avkastning minus risikofri rente',
          'Antall aktiva i porteføljen',
          'Forskjellen mellom høyeste og laveste avkastning'
        ],
        correctAnswer: 0,
        explanation: 'Varians er standardavvik². Det måler spredningen i avkastning rundt gjennomsnittet. Lavere varians = lavere risiko.'
      },
      {
        id: 'q6-26',
        question: 'I en portefølje med to aktiva, hva påvirker totalrisikoen?',
        options: [
          'Kun vektene til hvert aktiva',
          'Vekter, individuelle varianser og korrelasjon mellom aktivaene',
          'Kun korrelasjonen',
          'Kun avkastningen til det største aktivet'
        ],
        correctAnswer: 1,
        explanation: 'Porteføljevarians avhenger av vekter (w), varianser (σ²) OG korrelasjonen (ρ) mellom aktivaene. Alle tre faktorene spiller inn.'
      },
      {
        id: 'q6-27',
        question: 'Hva er en 60/40-portefølje?',
        options: [
          'En portefølje med 60 aksjer og 40 obligasjoner',
          'En klassisk allokering med 60% aksjer og 40% obligasjoner',
          'En portefølje med 60% norske og 40% utenlandske aktiva',
          'En portefølje for personer mellom 40 og 60 år'
        ],
        correctAnswer: 1,
        explanation: '60/40 er en klassisk balansert allokering med 60% aksjer for vekst og 40% obligasjoner for stabilitet. Den har vært populær i tiår.'
      },
      {
        id: 'q6-28',
        question: 'Hvorfor faller korrelasjon ofte under kriser?',
        options: [
          'Fordi alle aktiva stiger sammen',
          'Fordi korrelasjon øker - aktiva faller sammen når panikk sprer seg',
          'Fordi sentralbanker stabiliserer markedet',
          'Fordi investorer diversifiserer bedre'
        ],
        correctAnswer: 1,
        explanation: 'I kriser øker korrelasjonene typisk - alle risikable aktiva faller sammen. Dette kalles "korrelasjon mot 1 i nedgang" og svekker diversifiseringseffekten når den trengs mest.'
      },
      {
        id: 'q6-29',
        question: 'Hva er tracking error?',
        options: [
          'Feil i porteføljeberegningen',
          'Standardavviket på differansen mellom porteføljens og referanseindeksens avkastning',
          'Kostnaden ved å handle aksjer',
          'Avviket mellom forventet og realisert risiko'
        ],
        correctAnswer: 1,
        explanation: 'Tracking error måler hvor mye en portefølje avviker fra sin referanseindeks. Lavere tracking error betyr tettere replikering av indeksen.'
      },
      {
        id: 'q6-30',
        question: 'Hva er strategisk aktivaallokering?',
        options: [
          'Å endre fordelingen daglig basert på nyheter',
          'En langsiktig fordeling basert på investors risikoprofil og mål',
          'Å kun investere i strategiske bransjer',
          'Å alltid ha 100% aksjer'
        ],
        correctAnswer: 1,
        explanation: 'Strategisk allokering er den langsiktige fordelingen tilpasset investors risikotoleranse, tidshorisont og mål. Den endres sjelden.'
      },
      {
        id: 'q6-31',
        question: 'Hva er taktisk aktivaallokering?',
        options: [
          'Det samme som strategisk allokering',
          'Kortsiktige avvik fra strategisk allokering for å utnytte markedsmuligheter',
          'Å kun investere i militærbransjen',
          'En allokering som aldri endres'
        ],
        correctAnswer: 1,
        explanation: 'Taktisk allokering betyr kortsiktige justeringer for å utnytte oppfattede feilprisinger, innenfor rammer rundt den strategiske allokeringen.'
      },
      {
        id: 'q6-32',
        question: 'Hva er risikotoleranse?',
        options: [
          'Den maksimale avkastningen en investor aksepterer',
          'Hvor mye risiko og potensielle tap en investor kan tåle',
          'Antall aksjer i porteføljen',
          'Minste tillatte investering'
        ],
        correctAnswer: 1,
        explanation: 'Risikotoleranse er investorens evne og vilje til å tåle verdisvingninger og potensielle tap. Den bestemmer passende aktivaallokering.'
      },
      {
        id: 'q6-33',
        question: 'Hva betyr det at to aktiva har korrelasjon 0?',
        options: [
          'De beveger seg alltid motsatt',
          'De beveger seg alltid likt',
          'Det er ingen systematisk sammenheng mellom bevegelsene',
          'De kan ikke kombineres i samme portefølje'
        ],
        correctAnswer: 2,
        explanation: 'Korrelasjon 0 betyr ingen lineær sammenheng. Bevegelsene er uavhengige av hverandre, noe som gir god diversifiseringseffekt.'
      },
      {
        id: 'q6-34',
        question: 'Hva er en livsløpsfond (target date fund)?',
        options: [
          'Et fond som lukkes etter målperioden',
          'Et fond som automatisk reduserer risiko mot en bestemt dato (ofte pensjon)',
          'Et fond som kun investerer i livsforsikring',
          'Et fond for kortsiktige investeringer'
        ],
        correctAnswer: 1,
        explanation: 'Livsløpsfond reduserer automatisk aksjeandelen mot en måldato (typisk pensjonsalder). De gjør rebalansering enkel for langsiktige sparere.'
      },
      {
        id: 'q6-35',
        question: 'Hva er formelen for porteføljeavkastning med to aktiva?',
        options: [
          'Gjennomsnittet av avkastningene',
          'Den vektede summen: w₁R₁ + w₂R₂',
          'Produktet av avkastningene',
          'Den høyeste av avkastningene'
        ],
        correctAnswer: 1,
        explanation: 'Porteføljeavkastning = w₁R₁ + w₂R₂, der w er vektene (som summerer til 1) og R er avkastningene. Det er et vektet gjennomsnitt.'
      },
      {
        id: 'q6-36',
        question: 'Hva skjer med risikoen når du legger til risikofri plassering i porteføljen?',
        options: [
          'Risikoen øker alltid',
          'Risikoen reduseres proporsjonal med andelen i risikofritt',
          'Risikoen forblir uendret',
          'Avkastningen dobles'
        ],
        correctAnswer: 1,
        explanation: 'Risikofri plassering har null standardavvik og null korrelasjon med andre aktiva. Å legge til risikofritt reduserer total porteføljerisiko proporsjonalt.'
      },
      {
        id: 'q6-37',
        question: 'Hvorfor er det viktig å vurdere korrelasjon over tid?',
        options: [
          'Fordi korrelasjon alltid er konstant',
          'Fordi korrelasjoner kan endre seg, spesielt i volatile perioder',
          'Fordi korrelasjon kun måles årlig',
          'Fordi det er lovpålagt'
        ],
        correctAnswer: 1,
        explanation: 'Korrelasjoner er ikke statiske. De tenderer å øke i kriser, noe som svekker diversifiseringen akkurat når den trengs mest.'
      },
      {
        id: 'q6-38',
        question: 'Hva er risikokapasitet?',
        options: [
          'Det samme som risikotoleranse',
          'Den objektive finansielle evnen til å tåle tap basert på formue og inntekt',
          'Maksimalt antall aksjer man kan eie',
          'Bankens kredittgrense'
        ],
        correctAnswer: 1,
        explanation: 'Risikokapasitet er den objektive evnen til å bære tap (basert på formue, inntekt, forpliktelser). Risikotoleranse er den psykologiske viljen. Begge bør vurderes.'
      },
      {
        id: 'q6-39',
        question: 'Hva er et aktivt forvaltet fond?',
        options: [
          'Et fond som kun handles i markedets åpningstider',
          'Et fond der forvalteren aktivt velger aksjer for å slå markedet',
          'Et fond som automatisk rebalanserer',
          'Et fond med høy minimumsinngang'
        ],
        correctAnswer: 1,
        explanation: 'Aktiv forvaltning betyr at forvalteren prøver å velge aksjer som vil gjøre det bedre enn markedet. Dette gir høyere kostnader enn passiv forvaltning.'
      },
      {
        id: 'q6-40',
        question: 'Hva sier "den eneste gratis lunsjen i finans"-utsagnet om diversifisering?',
        options: [
          'At diversifisering er gratis og uten effekt',
          'At diversifisering kan redusere risiko uten å redusere forventet avkastning',
          'At alle investeringsstrategier koster like mye',
          'At det ikke finnes risikofrie investeringer'
        ],
        correctAnswer: 1,
        explanation: 'Utsagnet tilskrives Harry Markowitz. Diversifisering kan senke porteføljerisikoen uten å senke forventet avkastning - en "gratis" forbedring.'
      }
    ]
  }
};
