import { Module } from '../types/course';

export const modul8KapitalstrukturModule: Module = {
  id: 'modul-8-kapitalstruktur',
  title: 'Kapitalstruktur og Dividende',
  icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',
  order: 8,
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
          text: 'Kapitalstruktur handler om hvordan en bedrift finansierer sin virksomhet – altså blandingen av egenkapital (aksjer) og gjeld (lån og obligasjoner). Dette er en av de viktigste beslutningene i foretaksfinans fordi den påvirker både avkastning og risiko for eierne.'
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
    }
  ],
  moduleQuiz: {
    id: 'modul-8-kapitalstruktur-quiz',
    title: 'Modulquiz: Kapitalstruktur og Dividende',
    description: 'Test din forståelse av kapitalstruktur, WACC og dividendepolitikk. Du trenger minst 90% riktig for å bestå.',
    passingScore: 90,
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
      }
    ]
  }
};
