import { Module } from '../types/course';

export const modul8KapitalstrukturModule: Module = {
  id: 'modul-9-kapitalstruktur',
  title: 'Kapitalstruktur og Dividende',
  icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',
  order: 9,
  learningObjectives: [
    'Forstå hva kapitalstruktur er og hvorfor det er viktig',
    'Forklare Modigliani-Miller-teoremet og dets implikasjoner',
    'Analysere effekten av gjeld på egenkapitalavkastning og risiko',
    'Vurdere ulike dividendepolitikker og deres konsekvenser',
    'Forstå tilbakekjøp av aksjer som alternativ til dividende'
  ],
  sections: [
    {
      id: 'kapitalstruktur-8-1-grunnleggende',
      title: 'Grunnleggende om kapitalstruktur',
      order: 1,
      content: [
        {
          id: 'kapitalstruktur-8-1-intro',
          type: 'text',
          order: 1,
          text: '**I 2019 hadde Norwegian en gjeldsgrad på 10 – ti kroner gjeld for hver krone egenkapital. Equinor hadde 0,4.** Da pandemien slo til, kollapset Norwegian og måtte reddes. Equinor betalte rekordhøyt utbytte. Samme krise, helt forskjellige utfall. Hemmeligheten? Kapitalstruktur – valget mellom gjeld og egenkapital som kan avgjøre om et selskap overlever eller går under.',
          emphasis: 'important'
        },
        {
          id: 'kapitalstruktur-8-1-heading-hva',
          type: 'heading',
          order: 2,
          text: 'Hva er kapitalstruktur?',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-1-forklaring',
          type: 'text',
          order: 3,
          text: 'Kapitalstrukturen viser forholdet mellom egenkapital og gjeld på høyresiden av balansen. En bedrift kan finansiere sine eiendeler med egne midler (aksjonærenes penger) eller lånte midler (fra banker og obligasjonseiere). De fleste bedrifter bruker en kombinasjon av begge.'
        },
        {
          id: 'kapitalstruktur-8-1-def-egenkapital',
          type: 'definition',
          order: 4,
          term: 'Egenkapital',
          definition: 'Aksjonærenes investering i selskapet, inkludert innskutt kapital og tilbakeholdt overskudd. Egenkapitalen representerer restverdi etter at all gjeld er betalt.'
        },
        {
          id: 'kapitalstruktur-8-1-def-gjeld',
          type: 'definition',
          order: 5,
          term: 'Gjeld (fremmedkapital)',
          definition: 'Lånte midler som må tilbakebetales med renter. Inkluderer banklån, obligasjoner og andre forpliktelser med fast tilbakebetalingsplan.'
        },
        {
          id: 'kapitalstruktur-8-1-heading-gjeldsgrad',
          type: 'heading',
          order: 6,
          text: 'Gjeldsgrad og nøkkeltall',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-1-gjeldsgrad-intro',
          type: 'text',
          order: 7,
          text: 'Vi måler kapitalstruktur ved hjelp av ulike nøkkeltall som viser forholdet mellom gjeld og egenkapital:'
        },
        {
          id: 'kapitalstruktur-8-1-formula-gjeldsgrad',
          type: 'formula',
          order: 8,
          formula: 'Gjeldsgrad = Gjeld / Egenkapital',
          description: 'Viser hvor mange kroner gjeld det er per krone egenkapital. En gjeldsgrad på 1 betyr like mye gjeld som egenkapital.'
        },
        {
          id: 'kapitalstruktur-8-1-formula-gjeldsandel',
          type: 'formula',
          order: 9,
          formula: 'Gjeldsandel = Gjeld / Totalkapital',
          description: 'Andelen av totalkapitalen som er finansiert med gjeld. Ofte uttrykt i prosent.'
        },
        {
          id: 'kapitalstruktur-8-1-formula-egenkapitalandel',
          type: 'formula',
          order: 10,
          formula: 'Egenkapitalandel = Egenkapital / Totalkapital',
          description: 'Andelen av totalkapitalen som er finansiert med egenkapital. Viser bedriftens finansielle soliditet.'
        },
        {
          id: 'kapitalstruktur-8-1-example',
          type: 'example',
          order: 11,
          title: 'Kapitalstruktur hos Nordisk Energi AS',
          content: 'Nordisk Energi har en balanse med totalkapital på 500 millioner kroner. Av dette er 200 millioner egenkapital og 300 millioner gjeld.',
          calculation: 'Gjeldsgrad = 300 / 200 = 1,5\nGjeldsandel = 300 / 500 = 60%\nEgenkapitalandel = 200 / 500 = 40%\n\nDette betyr at for hver krone eierne har investert, har selskapet lånt 1,50 kroner.'
        },
        {
          id: 'kapitalstruktur-8-1-heading-fordeler',
          type: 'heading',
          order: 12,
          text: 'Fordeler og ulemper med gjeld',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-1-fordeler-heading',
          type: 'heading',
          order: 13,
          text: 'Fordeler med gjeldsfinansiering',
          level: 3
        },
        {
          id: 'kapitalstruktur-8-1-fordeler-list',
          type: 'list',
          order: 14,
          ordered: false,
          items: [
            'Skattefordel: Rentekostnader er fradragsberettiget, noe som reduserer selskapets skattekostnad',
            'Finansiell gearing: Kan øke avkastningen til aksjonærene når driften går bra',
            'Disiplinerende effekt: Gjeldsforpliktelser tvinger ledelsen til å være effektiv',
            'Beholder kontroll: Lånegivere får ikke stemmerett, i motsetning til nye aksjonærer'
          ]
        },
        {
          id: 'kapitalstruktur-8-1-ulemper-heading',
          type: 'heading',
          order: 15,
          text: 'Ulemper med gjeldsfinansiering',
          level: 3
        },
        {
          id: 'kapitalstruktur-8-1-ulemper-list',
          type: 'list',
          order: 16,
          ordered: false,
          items: [
            'Konkursrisiko: Gjeld må betjenes uansett resultat, noe som øker risikoen for konkurs',
            'Finansielle begrensninger: Lånevilkår (covenants) kan begrense handlefriheten',
            'Økt risiko for aksjonærer: Variasjon i resultat slår hardere ut på egenkapitalavkastningen',
            'Agentkostnader: Konflikter mellom aksjonærer og långivere kan oppstå'
          ]
        },
        {
          id: 'kapitalstruktur-8-1-keypoints',
          type: 'keypoint',
          order: 17,
          points: [
            'Kapitalstruktur er blandingen av egenkapital og gjeld',
            'Gjeldsgrad måler forholdet mellom gjeld og egenkapital',
            'Gjeld gir skattefordel men øker også risiko',
            'Optimal kapitalstruktur balanserer fordeler og ulemper'
          ]
        },
        {
          id: 'kapitalstruktur-8-1-reflection',
          type: 'reflection',
          order: 18,
          question: 'Et oppstartsselskap innen teknologi har nesten ingen gjeld, mens et modent kraftselskap ofte har høy gjeldsgrad. Hvorfor tror du det er slik?'
        }
      ]
    },
    {
      id: 'kapitalstruktur-8-2-mm',
      title: 'Modigliani-Miller og kapitalstrukturteori',
      order: 2,
      content: [
        {
          id: 'kapitalstruktur-8-2-intro',
          type: 'text',
          order: 1,
          text: 'I 1958 publiserte Franco Modigliani og Merton Miller en banebrytende artikkel som viste at under visse forutsetninger er selskapets verdi uavhengig av kapitalstrukturen. Dette teoremet danner grunnlaget for moderne kapitalstrukturteori.'
        },
        {
          id: 'kapitalstruktur-8-2-heading-mm1',
          type: 'heading',
          order: 2,
          text: 'MM Proposisjon I: Irrelevans',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-2-mm1-forklaring',
          type: 'text',
          order: 3,
          text: 'Modigliani-Miller Proposisjon I sier at i et perfekt kapitalmarked er verdien av et selskap uavhengig av hvordan det er finansiert. Verdien bestemmes utelukkende av kontantstrømmene fra driften, ikke av om disse finansieres med gjeld eller egenkapital.'
        },
        {
          id: 'kapitalstruktur-8-2-def-perfekt',
          type: 'definition',
          order: 4,
          term: 'Perfekt kapitalmarked',
          definition: 'Et teoretisk marked uten skatter, konkurskostnader, transaksjonskostnader eller informasjonsasymmetri. Alle aktører kan låne og låne ut til samme rente.'
        },
        {
          id: 'kapitalstruktur-8-2-mm1-analogi',
          type: 'text',
          order: 5,
          text: 'En analogi: Tenk på et selskap som en pizza. MM Proposisjon I sier at den totale mengden pizza ikke endres av hvordan du deler den opp. Om du skjærer i 4 eller 8 stykker, har du like mye pizza. På samme måte endrer ikke fordelingen mellom gjeld og egenkapital den totale selskapsverdien.'
        },
        {
          id: 'kapitalstruktur-8-2-heading-mm2',
          type: 'heading',
          order: 6,
          text: 'MM Proposisjon II: Avkastningskrav',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-2-mm2-forklaring',
          type: 'text',
          order: 7,
          text: 'Proposisjon II sier at egenkapitalens avkastningskrav øker lineært med gjeldsgraden. Når bedriften tar opp mer gjeld, øker risikoen for aksjonærene, og de krever høyere forventet avkastning som kompensasjon.'
        },
        {
          id: 'kapitalstruktur-8-2-formula-re',
          type: 'formula',
          order: 8,
          formula: 'rE = rA + (rA - rD) × (D/E)',
          description: 'rE = avkastningskrav egenkapital, rA = avkastningskrav totalkapital, rD = gjeldsrente, D/E = gjeldsgrad'
        },
        {
          id: 'kapitalstruktur-8-2-example',
          type: 'example',
          order: 9,
          title: 'Avkastningskrav og gjeldsgrad',
          content: 'Grønn Kraft AS har avkastningskrav på totalkapitalen på 8% og kan låne til 4% rente. Hva blir avkastningskravet til egenkapitalen ved ulike gjeldsgrader?',
          calculation: 'Med gjeldsgrad 0 (ingen gjeld):\nrE = 8% + (8% - 4%) × 0 = 8%\n\nMed gjeldsgrad 0,5:\nrE = 8% + (8% - 4%) × 0,5 = 10%\n\nMed gjeldsgrad 1,0:\nrE = 8% + (8% - 4%) × 1,0 = 12%\n\nMed gjeldsgrad 2,0:\nrE = 8% + (8% - 4%) × 2,0 = 16%'
        },
        {
          id: 'kapitalstruktur-8-2-heading-skatt',
          type: 'heading',
          order: 10,
          text: 'MM med selskapsskatt',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-2-skatt-intro',
          type: 'text',
          order: 11,
          text: 'I den virkelige verden er rentekostnader fradragsberettiget, noe som gir en skattefordel ved bruk av gjeld. Modigliani og Miller viste at med selskapsskatt øker selskapsverdien med gjeldsnivået på grunn av skatteskjoldet.'
        },
        {
          id: 'kapitalstruktur-8-2-def-skatteskjold',
          type: 'definition',
          order: 12,
          term: 'Skatteskjold (tax shield)',
          definition: 'Skattereduksjonen som oppstår fordi rentekostnader er fradragsberettiget. Nåverdien av skatteskjoldet øker selskapsverdien.'
        },
        {
          id: 'kapitalstruktur-8-2-formula-skatteskjold',
          type: 'formula',
          order: 13,
          formula: 'VL = VU + TC × D',
          description: 'VL = verdi med gjeld, VU = verdi uten gjeld, TC = selskapsskattesats, D = gjeld. Skatteskjoldets verdi er TC × D.'
        },
        {
          id: 'kapitalstruktur-8-2-example-skatt',
          type: 'example',
          order: 14,
          title: 'Verdien av skatteskjoldet',
          content: 'Solenergi AS har verdi på 100 mill. kr uten gjeld. Selskapet vurderer å ta opp 40 mill. kr i gjeld. Selskapsskattesatsen er 22%.',
          calculation: 'Skatteskjoldets verdi = 22% × 40 mill. = 8,8 mill. kr\n\nVerdi med gjeld = 100 + 8,8 = 108,8 mill. kr\n\nVed å ta opp gjeld øker selskapsverdien med nåverdien av fremtidige skattebesparelser.'
        },
        {
          id: 'kapitalstruktur-8-2-heading-tradeoff',
          type: 'heading',
          order: 15,
          text: 'Trade-off-teorien',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-2-tradeoff',
          type: 'text',
          order: 16,
          text: 'Trade-off-teorien bygger på MM med skatt, men inkluderer også kostnader ved gjeld. Optimal kapitalstruktur er der marginalverdien av skatteskjoldet er lik marginalkostnaden ved finansielt stress. Dette gir en avveining (trade-off) mellom skattefordeler og konkurskostnader.'
        },
        {
          id: 'kapitalstruktur-8-2-def-konkurskostnader',
          type: 'definition',
          order: 17,
          term: 'Konkurskostnader',
          definition: 'Direkte kostnader (advokater, revisorer, rettsgebyr) og indirekte kostnader (tapt tillit, miste nøkkelpersoner, dårligere leverandørvilkår) ved finansielt stress og konkurs.'
        },
        {
          id: 'kapitalstruktur-8-2-keypoints',
          type: 'keypoint',
          order: 18,
          points: [
            'MM Proposisjon I: I perfekte markeder er verdi uavhengig av kapitalstruktur',
            'MM Proposisjon II: Avkastningskrav øker med gjeldsgrad',
            'Med skatt gir gjeld verdi gjennom skatteskjoldet',
            'Trade-off-teorien balanserer skattefordel mot konkurskostnader'
          ]
        },
        {
          id: 'kapitalstruktur-8-2-quiz',
          type: 'quiz',
          order: 19,
          question: 'Ifølge MM Proposisjon II, hva skjer med aksjonærenes avkastningskrav når bedriften øker gjeldsgraden?',
          options: [
            'Det holder seg uendret',
            'Det øker lineært',
            'Det synker',
            'Det varierer tilfeldig'
          ],
          correctAnswer: 1,
          explanation: 'MM Proposisjon II viser at egenkapitalens avkastningskrav øker lineært med gjeldsgraden. Økt gjeld betyr økt risiko for aksjonærene, som krever høyere avkastning som kompensasjon.'
        }
      ]
    },
    {
      id: 'kapitalstruktur-8-3-wacc',
      title: 'WACC og finansieringskostnad',
      order: 3,
      content: [
        {
          id: 'kapitalstruktur-8-3-intro',
          type: 'text',
          order: 1,
          text: 'Bedriftens totale kapitalkostnad er et vektet gjennomsnitt av kostnadene for de ulike finansieringskildene. WACC (Weighted Average Cost of Capital) er et sentralt begrep som brukes som diskonteringsrente i investeringsanalyser.'
        },
        {
          id: 'kapitalstruktur-8-3-heading-wacc',
          type: 'heading',
          order: 2,
          text: 'Hva er WACC?',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-3-def-wacc',
          type: 'definition',
          order: 3,
          term: 'WACC (Weighted Average Cost of Capital)',
          definition: 'Vektet gjennomsnittlig kapitalkostnad. Beregnes som et vektet gjennomsnitt av egenkapitalkostnad og gjeldskostnad etter skatt, vektet etter markedsverdier.'
        },
        {
          id: 'kapitalstruktur-8-3-formula-wacc',
          type: 'formula',
          order: 4,
          formula: 'WACC = (E/V) × rE + (D/V) × rD × (1 - TC)',
          description: 'E = egenkapital, D = gjeld, V = totalverdi (E+D), rE = egenkapitalkostnad, rD = gjeldskostnad, TC = skattesats'
        },
        {
          id: 'kapitalstruktur-8-3-wacc-forklaring',
          type: 'text',
          order: 5,
          text: 'WACC reflekterer den gjennomsnittlige avkastningen investorer (både aksjonærer og långivere) krever for å finansiere selskapet. Gjeldskostnaden justeres for skatt fordi rentekostnader er fradragsberettiget.'
        },
        {
          id: 'kapitalstruktur-8-3-example-wacc',
          type: 'example',
          order: 6,
          title: 'Beregning av WACC',
          content: 'Havvind AS har egenkapital verdt 600 mill. kr og gjeld på 400 mill. kr. Egenkapitalkostnaden er 12%, gjeldskostnaden er 5%, og skattesatsen er 22%.',
          calculation: 'Totalverdi V = 600 + 400 = 1000 mill. kr\n\nEgenkapitalandel E/V = 600/1000 = 60%\nGjeldsandel D/V = 400/1000 = 40%\n\nWACC = 60% × 12% + 40% × 5% × (1 - 22%)\nWACC = 7,2% + 1,56%\nWACC = 8,76%\n\nSelskapet må tjene minst 8,76% avkastning på nye investeringer for å tilfredsstille alle kapitalleverandører.'
        },
        {
          id: 'kapitalstruktur-8-3-heading-ek',
          type: 'heading',
          order: 7,
          text: 'Egenkapitalkostnaden',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-3-ek-intro',
          type: 'text',
          order: 8,
          text: 'Egenkapitalkostnaden er avkastningen aksjonærene krever for å investere i selskapet. Denne er vanskeligere å observere enn gjeldskostnaden fordi den ikke er kontraktsfestet. Vi bruker ofte kapitalverdimodellen (CAPM) til å estimere den.'
        },
        {
          id: 'kapitalstruktur-8-3-formula-capm',
          type: 'formula',
          order: 9,
          formula: 'rE = rf + β × (rm - rf)',
          description: 'rf = risikofri rente, β = aksjens beta, rm = forventet markedsavkastning, (rm - rf) = markedets risikopremie'
        },
        {
          id: 'kapitalstruktur-8-3-def-beta',
          type: 'definition',
          order: 10,
          term: 'Beta (β)',
          definition: 'Mål på aksjens systematiske risiko relativt til markedet. Beta = 1 betyr lik risiko som markedet. Beta > 1 betyr høyere risiko, Beta < 1 betyr lavere risiko.'
        },
        {
          id: 'kapitalstruktur-8-3-example-capm',
          type: 'example',
          order: 11,
          title: 'Egenkapitalkostnad med CAPM',
          content: 'Risikofri rente er 3%, forventet markedsavkastning er 9%, og aksjens beta er 1,2. Hva er egenkapitalkostnaden?',
          calculation: 'Markedets risikopremie = 9% - 3% = 6%\n\nrE = 3% + 1,2 × 6%\nrE = 3% + 7,2%\nrE = 10,2%\n\nAksjonærene krever 10,2% forventet avkastning for å investere i dette selskapet.'
        },
        {
          id: 'kapitalstruktur-8-3-heading-gjeld',
          type: 'heading',
          order: 12,
          text: 'Gjeldskostnaden',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-3-gjeld-intro',
          type: 'text',
          order: 13,
          text: 'Gjeldskostnaden er enklere å observere enn egenkapitalkostnaden. Den tilsvarer renten bedriften betaler på sine lån, justert for skattefradraget. For obligasjoner brukes yield to maturity (YTM).'
        },
        {
          id: 'kapitalstruktur-8-3-formula-gjeldskost',
          type: 'formula',
          order: 14,
          formula: 'Gjeldskostnad etter skatt = rD × (1 - TC)',
          description: 'rD = gjeldskostnad før skatt, TC = selskapsskattesats. Skattefradraget reduserer den effektive kostnaden.'
        },
        {
          id: 'kapitalstruktur-8-3-heading-optimal',
          type: 'heading',
          order: 15,
          text: 'WACC og optimal kapitalstruktur',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-3-optimal',
          type: 'text',
          order: 16,
          text: 'Ifølge trade-off-teorien finnes det en optimal kapitalstruktur som minimerer WACC. Initialt synker WACC når bedriften øker gjelden på grunn av skattefordelen. Men ved høy gjeldsgrad øker både egenkapitalkostnaden og gjeldskostnaden så mye at WACC begynner å stige igjen.'
        },
        {
          id: 'kapitalstruktur-8-3-table',
          type: 'table',
          order: 17,
          headers: ['Gjeldsandel', 'rE', 'rD', 'WACC'],
          rows: [
            ['0%', '10,0%', '4,0%', '10,0%'],
            ['20%', '10,5%', '4,5%', '9,1%'],
            ['40%', '11,5%', '5,0%', '8,5%'],
            ['60%', '13,5%', '6,5%', '8,6%'],
            ['80%', '18,0%', '9,0%', '9,2%']
          ]
        },
        {
          id: 'kapitalstruktur-8-3-keypoints',
          type: 'keypoint',
          order: 18,
          points: [
            'WACC er vektet gjennomsnittlig kapitalkostnad',
            'Egenkapitalkostnad estimeres ofte med CAPM',
            'Gjeldskostnad justeres for skattefradrag',
            'Optimal kapitalstruktur minimerer WACC'
          ]
        },
        {
          id: 'kapitalstruktur-8-3-exercise',
          type: 'exercise',
          order: 19,
          title: 'Beregn WACC',
          description: 'Bølgekraft AS har markedsverdi av egenkapital på 800 mill. kr og gjeld på 200 mill. kr. Aksjens beta er 1,4, risikofri rente er 2,5%, og markedets risikopremie er 5%. Gjeldskostnaden er 4,5% og skattesatsen 22%. Beregn selskapets WACC.',
          hint: 'Beregn først egenkapitalkostnaden med CAPM, deretter WACC-formelen.'
        }
      ]
    },
    {
      id: 'kapitalstruktur-8-4-dividende',
      title: 'Dividendepolitikk',
      order: 4,
      content: [
        {
          id: 'kapitalstruktur-8-4-intro',
          type: 'text',
          order: 1,
          text: 'Dividendepolitikk handler om hvordan selskapet fordeler overskuddet mellom å betale utbytte til aksjonærene og å reinvestere i virksomheten. Dette er en viktig beslutning som påvirker både aksjonærer og selskapets fremtidige vekst.'
        },
        {
          id: 'kapitalstruktur-8-4-heading-hva',
          type: 'heading',
          order: 2,
          text: 'Hva er dividende?',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-4-def-dividende',
          type: 'definition',
          order: 3,
          term: 'Dividende (utbytte)',
          definition: 'Kontant utbetaling fra selskapet til aksjonærene, vanligvis fra årets overskudd. Besluttes av generalforsamlingen etter styrets forslag.'
        },
        {
          id: 'kapitalstruktur-8-4-typer',
          type: 'text',
          order: 4,
          text: 'Det finnes ulike typer dividende. Ordinær dividende utbetales regelmessig (årlig eller kvartalsvis). Ekstraordinær dividende er engangsutbetalinger ved spesielle anledninger. Noen selskaper betaler også ut aksjeutbytte i form av nye aksjer.'
        },
        {
          id: 'kapitalstruktur-8-4-heading-nokkel',
          type: 'heading',
          order: 5,
          text: 'Viktige dividendemål',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-4-formula-utbytteandel',
          type: 'formula',
          order: 6,
          formula: 'Utbytteandel = Dividende per aksje / Resultat per aksje',
          description: 'Viser hvor stor andel av overskuddet som utbetales som dividende. Også kalt payout ratio.'
        },
        {
          id: 'kapitalstruktur-8-4-formula-direkteavkast',
          type: 'formula',
          order: 7,
          formula: 'Direkteavkastning = Dividende per aksje / Aksjekurs',
          description: 'Viser dividenden som prosent av aksjekursen. Også kalt dividend yield.'
        },
        {
          id: 'kapitalstruktur-8-4-example-div',
          type: 'example',
          order: 8,
          title: 'Dividendenøkkeltall',
          content: 'Vannkraft AS har resultat per aksje på 8 kr, dividende per aksje på 5 kr, og aksjekursen er 100 kr.',
          calculation: 'Utbytteandel = 5 / 8 = 62,5%\nDirekteavkastning = 5 / 100 = 5%\n\nSelskapet betaler ut 62,5% av overskuddet og beholder 37,5% til reinvestering.'
        },
        {
          id: 'kapitalstruktur-8-4-heading-mm-div',
          type: 'heading',
          order: 9,
          text: 'Dividendeirrelevans (MM)',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-4-mm-div',
          type: 'text',
          order: 10,
          text: 'Modigliani og Miller viste også at i perfekte markeder er dividendepolitikken irrelevant for selskapsverdien. Aksjonærer kan selv skape ønsket kontantstrøm ved å selge aksjer (hjemmelaget dividende) eller reinvestere dividenden.'
        },
        {
          id: 'kapitalstruktur-8-4-heading-praksis',
          type: 'heading',
          order: 11,
          text: 'Dividende i praksis',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-4-praksis',
          type: 'text',
          order: 12,
          text: 'I virkeligheten påvirker flere faktorer dividendepolitikken. Skatteregler, signaleringseffekter, investorpreferanser og likviditetsbehov spiller alle en rolle. Mange selskaper følger en jevn dividendepolitikk fordi aksjonærer ofte tolker dividendekutt negativt.'
        },
        {
          id: 'kapitalstruktur-8-4-heading-politikker',
          type: 'heading',
          order: 13,
          text: 'Ulike dividendepolitikker',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-4-politikker-list',
          type: 'list',
          order: 14,
          ordered: false,
          items: [
            'Stabil dividende: Fast kronemengde per aksje, økes gradvis over tid',
            'Konstant utbytteandel: Fast prosent av overskuddet, varierer med resultatet',
            'Residualdividende: Først investering, deretter utbetaling av rest',
            'Null dividende: Alt reinvesteres, typisk for vekstselskaper'
          ]
        },
        {
          id: 'kapitalstruktur-8-4-heading-signaling',
          type: 'heading',
          order: 15,
          text: 'Signaleffekten',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-4-signaling',
          type: 'text',
          order: 16,
          text: 'Dividendeendringer sender signaler til markedet. En økning tolkes ofte som at ledelsen er optimistisk om fremtiden, mens et kutt kan signalisere problemer. Dette er en grunn til at ledelsen ofte er tilbakeholden med å øke dividenden for mye i gode tider.'
        },
        {
          id: 'kapitalstruktur-8-4-def-clientele',
          type: 'definition',
          order: 17,
          term: 'Klientell-effekten',
          definition: 'Teorien om at ulike investorgrupper foretrekker ulike dividendepolitikker. Pensjonister kan foretrekke høy dividende, mens unge investorer kan foretrekke vekst og reinvestering.'
        },
        {
          id: 'kapitalstruktur-8-4-keypoints',
          type: 'keypoint',
          order: 18,
          points: [
            'Dividende er kontant utbetaling til aksjonærene',
            'Utbytteandel viser hvor mye av overskuddet som deles ut',
            'I perfekte markeder er dividendepolitikk irrelevant',
            'I praksis påvirker skatt, signaler og preferanser valget'
          ]
        },
        {
          id: 'kapitalstruktur-8-4-quiz',
          type: 'quiz',
          order: 19,
          question: 'Hva er direkteavkastningen for en aksje med kurs 200 kr og årlig dividende på 8 kr?',
          options: [
            '2%',
            '4%',
            '8%',
            '25%'
          ],
          correctAnswer: 1,
          explanation: 'Direkteavkastning = Dividende / Kurs = 8 / 200 = 4%. Dette viser at for hver 100 kr investert får du 4 kr i årlig dividende.'
        }
      ]
    },
    {
      id: 'kapitalstruktur-8-5-tilbakekjop',
      title: 'Tilbakekjøp av aksjer',
      order: 5,
      content: [
        {
          id: 'kapitalstruktur-8-5-intro',
          type: 'text',
          order: 1,
          text: 'Tilbakekjøp av aksjer har blitt et stadig mer populært alternativ til dividende for å returnere kapital til aksjonærene. Ved tilbakekjøp bruker selskapet kontanter til å kjøpe tilbake sine egne aksjer fra markedet.'
        },
        {
          id: 'kapitalstruktur-8-5-heading-hva',
          type: 'heading',
          order: 2,
          text: 'Hva er tilbakekjøp?',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-5-def-tilbakekjop',
          type: 'definition',
          order: 3,
          term: 'Tilbakekjøp av aksjer',
          definition: 'Når et selskap kjøper tilbake sine egne aksjer fra eksisterende aksjonærer. Aksjene slettes eller holdes som egne aksjer. Reduserer antall utestående aksjer.'
        },
        {
          id: 'kapitalstruktur-8-5-metoder',
          type: 'text',
          order: 4,
          text: 'Tilbakekjøp kan gjennomføres på flere måter: Åpent marked (selskapet kjøper gradvis i markedet), anbudstilbud (tilbyr aksjonærene en fast pris over markedskurs), eller forhandlet kjøp (direkte fra storaksjonærer).'
        },
        {
          id: 'kapitalstruktur-8-5-heading-effekt',
          type: 'heading',
          order: 5,
          text: 'Effekt på nøkkeltall',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-5-effekt',
          type: 'text',
          order: 6,
          text: 'Når antall aksjer reduseres, øker resultat per aksje (EPS) selv om total inntjening er uendret. Dette er en mekanisk effekt som ikke nødvendigvis øker selskapsverdien, men som ofte oppfattes positivt av markedet.'
        },
        {
          id: 'kapitalstruktur-8-5-example',
          type: 'example',
          order: 7,
          title: 'Effekt av tilbakekjøp på EPS',
          content: 'Bioenergi AS har overskudd på 100 mill. kr og 10 millioner aksjer. Selskapet bruker 50 mill. kr til å kjøpe tilbake 1 million aksjer til kurs 50 kr.',
          calculation: 'Før tilbakekjøp:\nEPS = 100 mill. / 10 mill. aksjer = 10 kr\n\nEtter tilbakekjøp:\nAntall aksjer = 10 - 1 = 9 millioner\nEPS = 100 mill. / 9 mill. aksjer = 11,11 kr\n\nEPS øker med 11% selv om overskuddet er uendret!'
        },
        {
          id: 'kapitalstruktur-8-5-heading-vs-div',
          type: 'heading',
          order: 8,
          text: 'Tilbakekjøp vs. dividende',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-5-tabell',
          type: 'table',
          order: 9,
          headers: ['Egenskap', 'Dividende', 'Tilbakekjøp'],
          rows: [
            ['Fleksibilitet', 'Lav (forventning om stabilitet)', 'Høy (kan variere fritt)'],
            ['Skatt', 'Skatt ved utbetaling', 'Skatt ved realisering av gevinst'],
            ['Signal', 'Økning = sterkt positivt', 'Kan signalisere undervurdering'],
            ['Eierskap', 'Uendret fordeling', 'Øker andelen for gjenværende'],
            ['Valgfrihet', 'Alle mottar', 'Kan velge å selge eller ikke']
          ]
        },
        {
          id: 'kapitalstruktur-8-5-heading-fordeler',
          type: 'heading',
          order: 10,
          text: 'Fordeler med tilbakekjøp',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-5-fordeler-list',
          type: 'list',
          order: 11,
          ordered: false,
          items: [
            'Fleksibilitet: Ingen forventning om regelmessighet',
            'Skattefordel: Aksjonærer kan utsette skatten ved å ikke selge',
            'Signal om undervurdering: Viser at ledelsen mener aksjen er billig',
            'Motvirke utvanning: Kan kompensere for opsjoner til ansatte',
            'Justere kapitalstruktur: Effektiv måte å øke gjeldsgraden på'
          ]
        },
        {
          id: 'kapitalstruktur-8-5-heading-ulemper',
          type: 'heading',
          order: 12,
          text: 'Ulemper og kritikk',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-5-ulemper-list',
          type: 'list',
          order: 13,
          ordered: false,
          items: [
            'Kan brukes til å manipulere EPS og aksjekurs',
            'Reduserer kontantreserver og investeringsmuligheter',
            'Kan gjøres på feil tidspunkt (kjøpe dyrt)',
            'Kritiseres for å prioritere kortsiktig avkastning over langsiktig vekst'
          ]
        },
        {
          id: 'kapitalstruktur-8-5-heading-barekraft',
          type: 'heading',
          order: 14,
          text: 'Tilbakekjøp og bærekraft',
          level: 2
        },
        {
          id: 'kapitalstruktur-8-5-barekraft',
          type: 'text',
          order: 15,
          text: 'Fra et bærekraftsperspektiv diskuteres tilbakekjøp kritisk. Noen mener kapitalen heller burde investeres i bærekraftig omstilling, FoU eller ansattes utvikling. Andre argumenterer for at effektiv kapitalallokering – inkludert å returnere overskuddskapital – er det mest ansvarlige.'
        },
        {
          id: 'kapitalstruktur-8-5-keypoints',
          type: 'keypoint',
          order: 16,
          points: [
            'Tilbakekjøp reduserer antall aksjer og øker EPS',
            'Gir mer fleksibilitet enn dividende',
            'Kan gi skattefordel for aksjonærer',
            'Kritiseres for kortsiktighet, men kan være effektiv kapitalallokering'
          ]
        },
        {
          id: 'kapitalstruktur-8-5-reflection',
          type: 'reflection',
          order: 17,
          question: 'Et stort teknologiselskap har enormt overskudd og bruker mesteparten på tilbakekjøp. Kritikere mener pengene burde gå til høyere lønn, mer FoU, eller grønn omstilling. Hva tenker du om denne debatten?'
        },
        {
          id: 'kapitalstruktur-8-5-quiz',
          type: 'quiz',
          order: 18,
          question: 'Hva er den viktigste forskjellen mellom dividende og tilbakekjøp?',
          options: [
            'Tilbakekjøp returnerer mer kapital enn dividende',
            'Dividende er obligatorisk mens tilbakekjøp er frivillig',
            'Med tilbakekjøp kan aksjonærer velge om de vil realisere gevinst',
            'Tilbakekjøp er alltid bedre skattemessig'
          ],
          correctAnswer: 2,
          explanation: 'Ved dividende mottar alle aksjonærer kontanter og må skatte av det. Ved tilbakekjøp kan aksjonærer velge om de vil selge (og skatte) eller beholde aksjene og utsette skatten. Denne valgfriheten er en viktig fordel.'
        }
      ]
    },
    {
      id: 'kapitalstruktur-8-6-oppgaver',
      title: 'Regneoppgaver',
      order: 6,
      content: [
        {
          id: '8-6-intro',
          type: 'text',
          order: 1,
          text: 'Test dine ferdigheter med disse regneoppgavene om kapitalstruktur. Oppgavene dekker WACC, egenkapitalkostnad, Modigliani-Miller-teoremet, skatteskjold og effekten av gjeldsfinansiering. Klikk på en oppgave for å se oppgaveteksten, og bruk "Vis fasit"-knappen når du vil sjekke svaret ditt.'
        },
        {
          id: '8-6-exerciseset',
          type: 'exerciseset',
          order: 2,
          exerciseSetId: 'oppgavesett-kapitalstruktur'
        }
      ]
    }
  ],
  moduleQuiz: {
    id: 'modul-8-kapitalstruktur-quiz',
    title: 'Modulquiz: Kapitalstruktur og Dividende',
    description: 'Test din forståelse av kapitalstruktur, WACC og dividendepolitikk. Du trenger minst 80% riktig for å bestå.',
    passingScore: 80,
    questionsToShow: 20,
    questions: [
      {
        id: 'q8-1',
        question: 'Hva er kapitalstruktur?',
        options: [
          'Selskapets totale eiendeler',
          'Fordelingen mellom gjeld og egenkapital i finansieringen',
          'Antall aksjer utstedt',
          'Selskapets kontantbeholdning'
        ],
        correctAnswer: 1,
        explanation: 'Kapitalstruktur beskriver hvordan et selskap finansierer seg - hvor mye som er gjeld (lån, obligasjoner) og hvor mye som er egenkapital (aksjer).'
      },
      {
        id: 'q8-2',
        question: 'Hva sier Modigliani-Miller Proposisjon I (uten skatt)?',
        options: [
          'Mer gjeld gir alltid høyere verdi',
          'Selskapets verdi er uavhengig av kapitalstrukturen',
          'Egenkapital er alltid billigere enn gjeld',
          'Optimal gjeldsgrad er alltid 50%'
        ],
        correctAnswer: 1,
        explanation: 'I en perfekt verden uten skatt, konkurskostnader og asymmetrisk informasjon, er selskapets totalverdi uavhengig av hvordan det finansieres.'
      },
      {
        id: 'q8-3',
        question: 'Hvorfor gjør skatt at gjeld kan være fordelaktig?',
        options: [
          'Fordi gjeld aldri må tilbakebetales',
          'Fordi rentekostnader er skattemessig fradragsberettiget',
          'Fordi egenkapital alltid er dyrere',
          'Fordi bankene gir bedre vilkår til gjeldsfinansierte selskaper'
        ],
        correctAnswer: 1,
        explanation: 'Rentekostnader på gjeld gir skattefradrag, mens utbytte på egenkapital ikke gjør det. Dette kalles gjeldsskatteskjoldet.'
      },
      {
        id: 'q8-4',
        question: 'Hva er WACC?',
        options: [
          'Selskapets totale kapitalkostnad',
          'Vektet gjennomsnittlig kapitalkostnad',
          'Gjeldskostnaden etter skatt',
          'Avkastningskrav på egenkapitalen'
        ],
        correctAnswer: 1,
        explanation: 'WACC (Weighted Average Cost of Capital) er den vektede gjennomsnittlige kostnaden for selskapets kapital, basert på andel gjeld og egenkapital.'
      },
      {
        id: 'q8-5',
        question: 'Hva skjer med ROE (egenkapitalavkastningen) når gjeldsgraden øker?',
        options: [
          'ROE synker alltid',
          'ROE øker alltid',
          'ROE øker når driften går bra, men faller mer når det går dårlig',
          'ROE påvirkes ikke av gjeldsgrad'
        ],
        correctAnswer: 2,
        explanation: 'Finansiell gearing forsterker både positive og negative resultater. Med mye gjeld får eierne høyere ROE i gode tider, men lavere (eller negativ) ROE i dårlige tider.'
      },
      {
        id: 'q8-6',
        question: 'Hva er konkurskostnader?',
        options: [
          'Kostnader ved å starte et selskap',
          'Direkte og indirekte kostnader forbundet med finansiell nød',
          'Kostnader ved å utstede aksjer',
          'Rentekostnader på gjeld'
        ],
        correctAnswer: 1,
        explanation: 'Konkurskostnader inkluderer juridiske kostnader, tap av kunder og ansatte, og verdireduksjon ved tvangssalg. De begrenser hvor mye gjeld som er optimalt.'
      },
      {
        id: 'q8-7',
        question: 'Hva er "pecking order"-teorien?',
        options: [
          'At selskaper foretrekker intern finansiering, deretter gjeld, og til slutt egenkapital',
          'At de største selskapene alltid får best finansiering',
          'At banker rangerer lånesøknader etter størrelse',
          'At aksjonærer alltid foretrekker dividende'
        ],
        correctAnswer: 0,
        explanation: 'Pecking order sier at selskaper først bruker opptjent kapital, deretter tar opp gjeld, og kun i siste instans utsteder nye aksjer.'
      },
      {
        id: 'q8-8',
        question: 'Hva er signaleffekten av å utstede nye aksjer?',
        options: [
          'Det tolkes alltid positivt av markedet',
          'Det kan tolkes negativt fordi ledelsen kanskje mener aksjen er overpriset',
          'Det har ingen signaleffekt',
          'Det fører alltid til høyere aksjekurs'
        ],
        correctAnswer: 1,
        explanation: 'Ny aksjeemisjon kan signalisere at ledelsen mener aksjen er overpriset. Derfor reagerer markedet ofte negativt på nyemisjoner.'
      },
      {
        id: 'q8-9',
        question: 'Hva er dividendepolitikk?',
        options: [
          'Hvor mye selskapet betaler i skatt',
          'Selskapets beslutninger om hvor mye av overskuddet som utbetales til aksjonærene',
          'Hvordan aksjer prises i markedet',
          'Forholdet mellom gjeld og egenkapital'
        ],
        correctAnswer: 1,
        explanation: 'Dividendepolitikk handler om hvor mye av overskuddet som deles ut som utbytte versus reinvesteres i selskapet.'
      },
      {
        id: 'q8-10',
        question: 'Hva er tilbakekjøp av aksjer?',
        options: [
          'Når ansatte kjøper aksjer i eget selskap',
          'Når selskapet kjøper tilbake sine egne aksjer fra markedet',
          'Når investorer selger aksjer tilbake til utsteder',
          'En type aksjeemisjon'
        ],
        correctAnswer: 1,
        explanation: 'Ved tilbakekjøp bruker selskapet kontanter til å kjøpe egne aksjer. Dette reduserer antall utestående aksjer og øker eierandelen for gjenværende aksjonærer.'
      },
      {
        id: 'q8-11',
        question: 'Hvorfor kan tilbakekjøp være skattemessig gunstig sammenlignet med dividende?',
        options: [
          'Tilbakekjøp er skattefritt',
          'Aksjonærer kan velge om de vil selge og dermed realisere gevinst',
          'Dividende beskattes ikke i Norge',
          'Det er ingen skatteforskjell'
        ],
        correctAnswer: 1,
        explanation: 'Ved tilbakekjøp kan aksjonærer velge om de vil selge aksjer (og skatte) eller beholde dem og utsette skatten. Ved dividende er alle tvunget til å motta og skatte.'
      },
      {
        id: 'q8-12',
        question: 'Hva er en mulig ulempe med høy gjeldsgrad?',
        options: [
          'Lavere ROE i gode tider',
          'Økt finansiell risiko og høyere sannsynlighet for betalingsproblemer',
          'Høyere skattekostnad',
          'Mindre fleksibilitet til å betale utbytte'
        ],
        correctAnswer: 1,
        explanation: 'Høy gjeldsgrad gir økt finansiell risiko. Selskapet må betjene gjelden uansett resultat, noe som kan føre til betalingsproblemer i dårlige perioder.'
      },
      {
        id: 'q8-13',
        question: 'Hva er gjeldsskatteskjoldet (tax shield)?',
        options: [
          'Skatt på gjeldsrenter',
          'Skattebesparelsen fra at rentekostnader er fradragsberettiget',
          'Skattereduksjon ved å betale dividende',
          'Skatteutsettelse ved tilbakekjøp'
        ],
        correctAnswer: 1,
        explanation: 'Gjeldsskatteskjoldet = Rentekostnad × Skattesats. Det er verdien av skattefordelen ved å bruke gjeld i stedet for egenkapital.'
      },
      {
        id: 'q8-14',
        question: 'Hva er trade-off-teorien for kapitalstruktur?',
        options: [
          'At man alltid skal maksimere gjeld',
          'At optimal gjeldsgrad balanserer skattefordeler mot konkurskostnader',
          'At gjeld og egenkapital alltid er like dyre',
          'At selskaper alltid skal unngå gjeld'
        ],
        correctAnswer: 1,
        explanation: 'Trade-off-teorien sier at selskapet veier skattefordeler ved gjeld mot økte konkurskostnader for å finne optimal gjeldsgrad.'
      },
      {
        id: 'q8-15',
        question: 'Hva er agentproblem mellom aksjonærer og kreditorer?',
        options: [
          'At aksjonærer og kreditorer alltid samarbeider',
          'At aksjonærer kan ta risikable beslutninger som skader kreditorene',
          'At kreditorer kontrollerer selskapet',
          'At det ikke finnes interessekonflikter'
        ],
        correctAnswer: 1,
        explanation: 'Aksjonærer kan ta høy risiko siden de har begrenset nedsideansvar - gevinsten er deres, tapene bæres delvis av kreditorene. Dette skaper interessekonflikt.'
      },
      {
        id: 'q8-16',
        question: 'Hva er finansiell gearing/leverage?',
        options: [
          'Bruk av derivater for å øke avkastning',
          'Bruk av gjeld for å forsterke avkastningen på egenkapitalen',
          'Bruk av sikring mot valutarisiko',
          'Bruk av kontantreserver'
        ],
        correctAnswer: 1,
        explanation: 'Finansiell gearing er bruk av gjeld. Det forsterker ROE både oppover (gode tider) og nedover (dårlige tider) - høyere risiko og potensielt høyere avkastning.'
      },
      {
        id: 'q8-17',
        question: 'Hva er effekten på aksjekurs typisk ved kunngjøring av høyere dividende?',
        options: [
          'Kursen faller alltid',
          'Kursen stiger ofte fordi det signaliserer tro på fremtiden',
          'Kursen påvirkes ikke',
          'Kursen halveres'
        ],
        correctAnswer: 1,
        explanation: 'Økt dividende signaliserer ofte at ledelsen er optimistisk om fremtidige kontantstrømmer. Markedet tolker dette positivt, og kursen stiger ofte.'
      },
      {
        id: 'q8-18',
        question: 'Hva er dividend irrelevans-teorien (Miller-Modigliani)?',
        options: [
          'At dividende alltid er viktig for aksjonærene',
          'At i et perfekt marked er selskapets verdi uavhengig av dividendepolitikken',
          'At dividende alltid bør være null',
          'At tilbakekjøp er forbudt'
        ],
        correctAnswer: 1,
        explanation: 'I perfekte markeder kan investorer lage "hjemmelaget dividende" ved å selge aksjer. Derfor er selskapets verdi teoretisk uavhengig av dividendepolitikken.'
      },
      {
        id: 'q8-19',
        question: 'Hva er "bird-in-the-hand"-argumentet for dividende?',
        options: [
          'At aksjer er som fugler - de kan fly bort',
          'At investorer foretrekker sikker dividende i dag fremfor usikker kursgevinst i fremtiden',
          'At man bør investere i fugleindustrien',
          'At dividende er dobbeltbeskattet'
        ],
        correctAnswer: 1,
        explanation: 'Noen investorer foretrekker sikker dividende nå ("en fugl i hånden") fremfor usikre fremtidige gevinster ("to i busken"). Dette taler for dividende.'
      },
      {
        id: 'q8-20',
        question: 'Hva er "clientele-effekten" i dividendepolitikk?',
        options: [
          'At alle investorer foretrekker samme dividendenivå',
          'At ulike investorer tiltrekkes av ulike dividendepolitikker',
          'At kun institusjonelle investorer bryr seg om dividende',
          'At dividende kun påvirker private investorer'
        ],
        correctAnswer: 1,
        explanation: 'Investorer med ulike behov og skattesituasjoner velger selskaper med passende dividendepolitikk. Pensjonister vil ha høy dividende, unge vil ha vekst.'
      },
      {
        id: 'q8-21',
        question: 'Hva er gjeldsgrad (debt-to-equity ratio)?',
        options: [
          'Rentekostnad dividert på resultat',
          'Gjeld dividert på egenkapital',
          'Egenkapital dividert på eiendeler',
          'Omsetning dividert på gjeld'
        ],
        correctAnswer: 1,
        explanation: 'Gjeldsgrad = Gjeld / Egenkapital. Den måler hvor mye gjeld selskapet har i forhold til egenkapitalen. Høy gjeldsgrad = høy finansiell risiko.'
      },
      {
        id: 'q8-22',
        question: 'Hva er rentedekningsgrad (interest coverage ratio)?',
        options: [
          'EBIT dividert på rentekostnader',
          'Rentekostnader dividert på omsetning',
          'Gjeld dividert på rente',
          'Overskudd etter skatt dividert på rente'
        ],
        correctAnswer: 0,
        explanation: 'Rentedekningsgrad = EBIT / Rentekostnader. Den viser hvor mange ganger driftsresultatet dekker rentekostnadene. Høyere er tryggere for kreditorer.'
      },
      {
        id: 'q8-23',
        question: 'Hvorfor har finansielle selskaper (banker) typisk høyere gjeldsgrad enn industriselskaper?',
        options: [
          'Fordi de ikke kan bruke egenkapital',
          'Fordi deres eiendeler (lån) er mer stabile og forutsigbare',
          'Fordi de ikke betaler skatt',
          'Fordi de ikke har konkurskostnader'
        ],
        correctAnswer: 1,
        explanation: 'Bankers eiendeler (utlån) har mer stabile kontantstrømmer enn f.eks. industri. Dette gjør at de kan bære mer gjeld før finansiell nød blir sannsynlig.'
      },
      {
        id: 'q8-24',
        question: 'Hva er en mulig fordel med tilbakekjøp sammenlignet med dividende?',
        options: [
          'Tilbakekjøp er gratis for selskapet',
          'Tilbakekjøp gir mer fleksibilitet og kan være skatteeffektivt',
          'Tilbakekjøp øker antall aksjer',
          'Tilbakekjøp er obligatorisk'
        ],
        correctAnswer: 1,
        explanation: 'Tilbakekjøp gir fleksibilitet (ikke forpliktende som dividende), kan være skatteeffektivt, og kan brukes til å signalisere at aksjen er underpriset.'
      },
      {
        id: 'q8-25',
        question: 'Hva er asymmetrisk informasjon i kapitalstruktursammenheng?',
        options: [
          'At alle har lik informasjon',
          'At ledelsen vet mer om selskapet enn markedet',
          'At kreditorer vet mer enn aksjonærer',
          'At informasjon er symmetrisk fordelt'
        ],
        correctAnswer: 1,
        explanation: 'Ledelsen har mer informasjon om selskapets virkelige verdi og fremtidsutsikter. Dette påvirker hvordan markedet tolker finansieringsbeslutninger.'
      },
      {
        id: 'q8-26',
        question: 'Hva er "financial distress" (finansiell nød)?',
        options: [
          'Når selskapet har for mye egenkapital',
          'Når selskapet sliter med å betjene gjeldsforpliktelser',
          'Når aksjekursen stiger raskt',
          'Når selskapet betaler for mye dividende'
        ],
        correctAnswer: 1,
        explanation: 'Finansiell nød oppstår når selskapet ikke klarer å møte gjeldsforpliktelser. Det medfører direkte kostnader (advokater) og indirekte (tapt kundetillit).'
      },
      {
        id: 'q8-27',
        question: 'Hva er en konvertibel obligasjon?',
        options: [
          'En obligasjon som kun kan handles i utlandet',
          'En obligasjon som kan konverteres til aksjer',
          'En obligasjon med variabel rente',
          'En obligasjon uten kupongrente'
        ],
        correctAnswer: 1,
        explanation: 'Konvertible obligasjoner kan byttes til aksjer til en forhåndsbestemt kurs. De kombinerer egenskaper fra gjeld og egenkapital.'
      },
      {
        id: 'q8-28',
        question: 'Hvorfor er WACC viktig i investeringsbeslutninger?',
        options: [
          'WACC er kun viktig for banker',
          'WACC brukes som avkastningskrav/diskonteringsrate for å vurdere prosjekter',
          'WACC bestemmer dividendepolitikken',
          'WACC er irrelevant for prosjektvurdering'
        ],
        correctAnswer: 1,
        explanation: 'WACC representerer selskapets kapitalkostnad. Prosjekter må gi avkastning over WACC for å skape verdi (positiv NPV).'
      },
      {
        id: 'q8-29',
        question: 'Hva skjer med WACC når gjeldsandelen øker (innen rimelige grenser)?',
        options: [
          'WACC øker alltid',
          'WACC kan synke fordi gjeld er billigere etter skatt',
          'WACC forblir konstant',
          'WACC blir negativ'
        ],
        correctAnswer: 1,
        explanation: 'Gjeld etter skatt er billigere enn egenkapital. Derfor kan WACC synke når man øker gjeld - opp til et punkt der konkurskostnader begynner å dominere.'
      },
      {
        id: 'q8-30',
        question: 'Hva er M&M Proposisjon II?',
        options: [
          'At WACC er konstant uavhengig av kapitalstruktur',
          'At avkastningskravet til egenkapital øker lineært med gjeldsgraden',
          'At gjeld alltid er risikofritt',
          'At dividende er irrelevant'
        ],
        correctAnswer: 1,
        explanation: 'M&M II sier at når gjelden øker, øker også risikoen for aksjonærene, og dermed avkastningskravet til egenkapital (re øker med D/E).'
      },
      {
        id: 'q8-31',
        question: 'Hva er "utbytteutjevning" (dividend smoothing)?',
        options: [
          'Å alltid øke dividende hvert år',
          'At selskaper holder dividende stabil og bare endrer den gradvis',
          'Å aldri betale dividende',
          'Å variere dividende med aksjekursen'
        ],
        correctAnswer: 1,
        explanation: 'De fleste selskaper jevner ut dividende over tid og er motvillige til å kutte. Dividendekutt oppfattes svært negativt av markedet.'
      },
      {
        id: 'q8-32',
        question: 'Hva er et mulig problem med for mye fri kontantstrøm (free cash flow)?',
        options: [
          'Selskapet blir for lønnsomt',
          'Ledelsen kan bruke pengene på verdiødeleggende prosjekter (empire building)',
          'Aksjonærene krever for høy dividende',
          'Selskapet får for lite gjeld'
        ],
        correctAnswer: 1,
        explanation: 'Frie kontantstrømmer kan misbrukes av ledelsen til ulønnsom ekspansjon eller frynsegoder. Gjeld og dividende kan disiplinere ledelsen.'
      },
      {
        id: 'q8-33',
        question: 'Hva er "debt covenants" (lånebetingelser)?',
        options: [
          'Fordeler som kommer med gjeld',
          'Begrensninger kreditorer legger på selskapet for å beskytte sine interesser',
          'Renter som må betales på gjeld',
          'Skattefordeler ved gjeld'
        ],
        correctAnswer: 1,
        explanation: 'Covenants er vilkår i låneavtaler som begrenser selskapets handlingsrom (f.eks. max gjeldsgrad, minimumlikviditet) for å beskytte kreditorene.'
      },
      {
        id: 'q8-34',
        question: 'Hvorfor unngår mange selskaper å kutte dividende selv i dårlige tider?',
        options: [
          'Det er ulovlig å kutte dividende',
          'Fordi dividendekutt sender sterkt negativt signal om selskapets fremtid',
          'Fordi aksjonærene ikke merker det',
          'Fordi det øker gjelden'
        ],
        correctAnswer: 1,
        explanation: 'Dividendekutt tolkes som et signal om at ledelsen ikke tror på fremtiden. Derfor holder selskaper ofte ut lenge før de kutter.'
      },
      {
        id: 'q8-35',
        question: 'Hva er en "leveraged buyout" (LBO)?',
        options: [
          'Kjøp av aksjer med egne midler',
          'Oppkjøp finansiert hovedsakelig med gjeld',
          'Salg av selskapet til ansatte',
          'Emisjon av nye aksjer'
        ],
        correctAnswer: 1,
        explanation: 'LBO er oppkjøp der store deler av kjøpesummen finansieres med gjeld, sikret i målselskapets eiendeler og kontantstrømmer.'
      },
      {
        id: 'q8-36',
        question: 'Hva er et særskilt utbytte (special dividend)?',
        options: [
          'Vanlig kvartalsvis utbytte',
          'En engangsbetaling utover ordinær dividende',
          'Utbytte til ansatte',
          'Utbytte i form av aksjer'
        ],
        correctAnswer: 1,
        explanation: 'Særskilt utbytte er en engangsbetaling, ofte etter salg av eiendeler eller ekstraordinært gode resultater. Det er ikke forventet å gjentas.'
      },
      {
        id: 'q8-37',
        question: 'Hva er "payout ratio" (utbetalingsandel)?',
        options: [
          'Gjeld dividert på egenkapital',
          'Dividende dividert på årsresultat',
          'Rente dividert på gjeld',
          'Aksjekurs dividert på resultat'
        ],
        correctAnswer: 1,
        explanation: 'Payout ratio = Dividende / Nettoresultat. Den viser hvor stor andel av overskuddet som deles ut vs. beholdes i selskapet.'
      },
      {
        id: 'q8-38',
        question: 'Hva er effekten av gjeld på WACC ifølge trade-off-teorien?',
        options: [
          'WACC øker alltid med gjeld',
          'WACC synker først (skattefordel), men øker til slutt (konkurskostnader)',
          'WACC er konstant uansett gjeldsgrad',
          'WACC synker alltid med gjeld'
        ],
        correctAnswer: 1,
        explanation: 'Trade-off-teorien sier at WACC er U-formet: først synker den pga. skattefordeler, men ved høy gjeldsgrad øker den igjen pga. konkurskostnader og økt risiko.'
      },
      {
        id: 'q8-39',
        question: 'Hva er forskjellen mellom operasjonell og finansiell risiko?',
        options: [
          'Det finnes ingen forskjell',
          'Operasjonell risiko kommer fra driften, finansiell risiko fra kapitalstrukturen',
          'Begge kommer fra kapitalstrukturen',
          'Operasjonell risiko er alltid høyere'
        ],
        correctAnswer: 1,
        explanation: 'Operasjonell risiko (forretningsrisiko) avhenger av bransje og drift. Finansiell risiko legges til gjennom gjeldsfinansiering og forsterker totalrisikoen.'
      },
      {
        id: 'q8-40',
        question: 'Hvorfor bruker modne selskaper ofte mer gjeld enn vekstselskaper?',
        options: [
          'Fordi modne selskaper har mindre behov for kontanter',
          'Fordi modne selskaper har stabile kontantstrømmer som kan betjene gjelden',
          'Fordi vekstselskaper har for mye gjeld allerede',
          'Fordi bankene ikke låner til vekstselskaper'
        ],
        correctAnswer: 1,
        explanation: 'Modne selskaper med stabile, forutsigbare kontantstrømmer kan trygt ta mer gjeld. Vekstselskaper har usikre kontantstrømmer og trenger finansiell fleksibilitet.'
      }
    ]
  }
};
