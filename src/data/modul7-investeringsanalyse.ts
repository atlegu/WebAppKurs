import { Module, CalculatorContent } from '../types/course';

export const modul7InvesteringsanalyseModule: Module = {
  id: 'modul-7-investeringsanalyse',
  title: 'Investeringsanalyse',
  icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
  order: 7,
  learningObjectives: [
    'Forstå og beregne nåverdi (NPV) for investeringsprosjekter',
    'Beregne og tolke internrenten (IRR) og dens begrensninger',
    'Anvende tilbakebetalingstid og andre beslutningskriterier',
    'Gjennomføre sensitivitetsanalyse for å vurdere usikkerhet',
    'Forstå realopsjoner og strategisk verdi i investeringsbeslutninger'
  ],
  sections: [
    // SEKSJON 7.1: Grunnleggende investeringsbeslutninger
    {
      id: 'seksjon-7-1-grunnleggende',
      title: 'Grunnleggende investeringsbeslutninger',
      order: 1,
      content: [
        {
          id: '7-1-intro',
          type: 'text',
          order: 1,
          text: 'I 2006 bestemte Statkraft seg for å investere 1,2 milliarder kroner i Sheringham Shoal vindpark utenfor England. Prosjektet tok 6 år å bygge og ville generere kontantstrømmer i 25 år. Hvordan vet man at slike langsiktige investeringer er lønnsomme? Svaret ligger i investeringsanalyse.',
          emphasis: 'important'
        },
        {
          id: '7-1-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Hva er en investering?'
        },
        {
          id: '7-1-def-1',
          type: 'definition',
          order: 3,
          term: 'Investering',
          definition: 'En utbetaling i dag i forventning om fremtidige innbetalinger. Kjernen i investeringsanalyse er å vurdere om de fremtidige kontantstrømmene rettferdiggjør dagens investering.'
        },
        {
          id: '7-1-text-2',
          type: 'text',
          order: 4,
          text: 'Investeringsbeslutninger er blant de viktigste beslutningene et selskap tar. De binder kapital over lang tid og er ofte irreversible.'
        },
        {
          id: '7-1-heading-2',
          type: 'heading',
          order: 5,
          level: 2,
          text: 'Typer investeringer'
        },
        {
          id: '7-1-table-1',
          type: 'table',
          order: 6,
          headers: ['Type', 'Beskrivelse', 'Eksempel'],
          rows: [
            ['Ekspansjonsinvestering', 'Øke kapasitet eller entre nye markeder', 'Ny fabrikk, oppkjøp av konkurrent'],
            ['Erstatningsinvestering', 'Bytte ut gammel utstyr', 'Nye maskiner, oppgradering av IT'],
            ['Effektivisering', 'Redusere kostnader', 'Automatisering, energieffektivisering'],
            ['Regulatorisk', 'Oppfylle krav', 'Miljøtiltak, sikkerhetsutstyr'],
            ['FoU', 'Utvikle nye produkter', 'Forskning, produktutvikling']
          ]
        },
        {
          id: '7-1-heading-3',
          type: 'heading',
          order: 7,
          level: 2,
          text: 'Kontantstrømtankegang'
        },
        {
          id: '7-1-text-3',
          type: 'text',
          order: 8,
          text: 'I investeringsanalyse fokuserer vi på kontantstrømmer, ikke regnskapsmessig resultat. Grunnen er at kontanter er det som faktisk kan brukes til å betale tilbake investorer.'
        },
        {
          id: '7-1-list-1',
          type: 'list',
          order: 9,
          ordered: false,
          items: [
            'Inkluder alle relevante kontantstrømmer (investeringer, driftsinnbetalinger, driftsutbetalinger)',
            'Bruk inkrementelle kontantstrømmer – bare det som endrer seg pga. prosjektet',
            'Ignorer sunk costs – kostnader som allerede er påløpt',
            'Inkluder alternativkostnader – hva kunne ressursene ellers vært brukt til?',
            'Husk arbeidskapitalbehov – økt salg krever ofte økt varelager og kundefordringer'
          ]
        },
        {
          id: '7-1-example-1',
          type: 'example',
          order: 10,
          title: 'Inkrementelle kontantstrømmer',
          content: 'Et selskap vurderer å lansere et nytt produkt som vil generere 10 MNOK i årlig salg. MEN: 3 MNOK av dette vil kannibalisere salg av eksisterende produkter.\n\n• Feil: Bruke 10 MNOK som årlig kontantstrøm\n• Riktig: Bruke 10 - 3 = 7 MNOK som inkrementell kontantstrøm\n\nSelskapet har også brukt 2 MNOK på markedsundersøkelser før beslutningen. Skal dette inkluderes?\n\n• Nei – dette er en sunk cost. Pengene er brukt uansett om prosjektet gjennomføres eller ikke.'
        },
        {
          id: '7-1-keypoint-1',
          type: 'keypoint',
          order: 11,
          points: [
            'Investeringer binder kapital over tid og må analyseres grundig',
            'Fokuser på kontantstrømmer, ikke regnskapsmessig resultat',
            'Bruk inkrementelle kontantstrømmer – bare det som faktisk endres',
            'Ignorer sunk costs, men inkluder alternativkostnader'
          ]
        },
        {
          id: '7-1-quiz-1',
          type: 'quiz',
          order: 12,
          question: 'Hva er en sunk cost?',
          options: [
            'En kostnad som kommer i fremtiden',
            'En kostnad som allerede er påløpt og ikke påvirkes av beslutningen',
            'En kostnad som synker over tid',
            'En kostnad som er skjult i regnskapet'
          ],
          correctAnswer: 1,
          explanation: 'Sunk costs er kostnader som allerede er påløpt. De er irrelevante for investeringsbeslutningen fordi de ikke kan gjøres om, uansett hva man beslutter.'
        },
        {
          id: '7-1-quiz-2',
          type: 'quiz',
          order: 13,
          question: 'Hvorfor bruker vi kontantstrømmer og ikke regnskapsmessig resultat i investeringsanalyse?',
          options: [
            'Fordi kontantstrømmer er enklere å beregne',
            'Fordi kontanter er det som faktisk kan brukes til å betale investorer',
            'Fordi regnskapet alltid er feil',
            'Fordi kontantstrømmer ikke påvirkes av skatt'
          ],
          correctAnswer: 1,
          explanation: 'Kontantstrømmer er det som faktisk kan brukes til å betale tilbake lån, utbytte til aksjonærer, eller reinvesteres. Regnskapet inneholder ikke-kontante poster som avskrivninger.'
        },
        {
          id: '7-1-exercise-1',
          type: 'exercise',
          order: 14,
          title: 'Oppgave: Identifiser relevante kontantstrømmer',
          description: 'Et selskap vurderer å bygge en ny fabrikk. Her er informasjonen:\n\n• Tomten ble kjøpt for 5 år siden for 20 MNOK (markedsverdi i dag: 30 MNOK)\n• Bygge- og utstyrskostnad: 100 MNOK\n• Forventet årlig salg fra fabrikken: 50 MNOK\n• 20% av salget vil komme fra kunder som ellers ville kjøpt fra eksisterende fabrikk\n• Årlige driftskostnader: 30 MNOK\n• Markedsundersøkelse (allerede gjennomført): 2 MNOK\n• Økt arbeidskapitalbehov: 10 MNOK\n\n1. Hva er initial investering (kontantutgang i år 0)?\n2. Hva er årlig inkrementell kontantstrøm fra driften?\n3. Hvilke poster er sunk costs?',
          hint: 'Tomten har alternativkostnad = markedsverdi. Kannibaliseringseffekten må trekkes fra.'
        },
        {
          id: '7-1-reflection-1',
          type: 'reflection',
          order: 15,
          question: 'Tenk på en stor investeringsbeslutning du eller familien din har tatt (f.eks. kjøpe bolig, bil, utdanning). Hvordan ble fremtidige kontantstrømmer vurdert, bevisst eller ubevisst?'
        }
      ]
    },

    // SEKSJON 7.2: Nåverdi (NPV)
    {
      id: 'seksjon-7-2-npv',
      title: 'Nåverdi (NPV) – Gullstandarden',
      order: 2,
      content: [
        {
          id: '7-2-intro',
          type: 'text',
          order: 1,
          text: 'Nåverdimetoden (NPV) er det viktigste verktøyet i investeringsanalyse. Den tar hensyn til pengenes tidsverdi og gir et klart svar: Skaper prosjektet verdi eller ikke?',
          emphasis: 'important'
        },
        {
          id: '7-2-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Hva er nåverdi?'
        },
        {
          id: '7-2-def-1',
          type: 'definition',
          order: 3,
          term: 'Nåverdi (NPV)',
          definition: 'Summen av alle fremtidige kontantstrømmer diskontert til dagens verdi, minus initial investering. NPV > 0 betyr at prosjektet skaper verdi.'
        },
        {
          id: '7-2-formula-1',
          type: 'formula',
          order: 4,
          formula: 'NPV = -I₀ + CF₁/(1+r) + CF₂/(1+r)² + ... + CFₙ/(1+r)ⁿ',
          description: 'Hvor I₀ = initial investering, CFₜ = kontantstrøm i år t, r = avkastningskrav, n = prosjektets levetid.'
        },
        {
          id: '7-2-heading-2',
          type: 'heading',
          order: 5,
          level: 2,
          text: 'Beslutningsregelen'
        },
        {
          id: '7-2-list-1',
          type: 'list',
          order: 6,
          ordered: false,
          items: [
            'NPV > 0: Prosjektet skaper verdi – aksepter',
            'NPV = 0: Prosjektet gir nøyaktig avkastningskravet – indifferent',
            'NPV < 0: Prosjektet ødelegger verdi – avslå',
            'Ved valg mellom prosjekter: Velg det med høyest NPV'
          ]
        },
        {
          id: '7-2-example-1',
          type: 'example',
          order: 7,
          title: 'NPV-beregning steg for steg',
          content: 'Et selskap vurderer en maskin som koster 1 000 000 kr og gir følgende kontantstrømmer:\n\n• År 1: 300 000 kr\n• År 2: 400 000 kr\n• År 3: 500 000 kr\n\nAvkastningskravet er 10%.\n\nNPV = -1 000 000 + 300 000/1,10 + 400 000/1,10² + 500 000/1,10³\nNPV = -1 000 000 + 272 727 + 330 579 + 375 657\nNPV = -1 000 000 + 978 963\nNPV = -21 037 kr\n\n**Konklusjon:** NPV er negativ. Prosjektet bør avslås fordi det gir lavere avkastning enn kravet på 10%.'
        },
        {
          id: '7-2-calc-npv',
          type: 'calculator',
          order: 8,
          title: 'NPV-kalkulator',
          description: 'Prøv selv! Beregn nåverdien av et prosjekt med lik årlig kontantstrøm. Juster investering, kontantstrøm og avkastningskrav.',
          calculatorType: 'npv',
          inputs: [
            {
              key: 'investment',
              label: 'Initial investering',
              type: 'currency',
              default: 1000000,
              min: 0,
              step: 100000,
              helpText: 'Kostnaden ved å starte prosjektet'
            },
            {
              key: 'cashflow',
              label: 'Årlig kontantstrøm',
              type: 'currency',
              default: 300000,
              min: 0,
              step: 50000,
              helpText: 'Forventet årlig netto kontantstrøm'
            },
            {
              key: 'rate',
              label: 'Avkastningskrav',
              type: 'percentage',
              default: 10,
              min: 0,
              max: 30,
              step: 1,
              helpText: 'WACC eller krav til avkastning'
            },
            {
              key: 'years',
              label: 'Prosjektlevetid',
              type: 'years',
              default: 5,
              min: 1,
              max: 30,
              step: 1,
              helpText: 'Antall år med kontantstrømmer'
            }
          ],
          formula: 'NPV = -I₀ + Σ CFₜ/(1+r)^t',
          resultLabel: 'Nåverdi (NPV)',
          resultUnit: 'kr',
          explanation: 'Se hvordan avkastningskrav påvirker prosjektverdien'
        } as CalculatorContent,
        {
          id: '7-2-heading-3',
          type: 'heading',
          order: 9,
          level: 2,
          text: 'Avkastningskravet (diskonteringsrenten)'
        },
        {
          id: '7-2-text-2',
          type: 'text',
          order: 10,
          text: 'Avkastningskravet er den avkastningen investorene krever for å investere i prosjektet. Det reflekterer:'
        },
        {
          id: '7-2-list-2',
          type: 'list',
          order: 11,
          ordered: false,
          items: [
            'Risikofri rente: Avkastning på sikre investeringer (statsobligasjoner)',
            'Risikopremie: Ekstra avkastning for å kompensere for prosjektets risiko',
            'Finansieringsstruktur: Vektet gjennomsnitt av egenkapital- og gjeldsavkastning (WACC)'
          ]
        },
        {
          id: '7-2-def-2',
          type: 'definition',
          order: 12,
          term: 'WACC (Weighted Average Cost of Capital)',
          definition: 'Vektet gjennomsnittlig kapitalkostnad – brukes ofte som avkastningskrav. WACC = (E/V) × Rₑ + (D/V) × Rᵈ × (1-T), der E = egenkapital, D = gjeld, V = total verdi, Rₑ = egenkapitalkrav, Rᵈ = gjeldsrente, T = skattesats.'
        },
        {
          id: '7-2-heading-4',
          type: 'heading',
          order: 13,
          level: 2,
          text: 'Hvorfor NPV er gullstandarden'
        },
        {
          id: '7-2-list-3',
          type: 'list',
          order: 14,
          ordered: true,
          items: [
            'Tar hensyn til alle kontantstrømmer over hele prosjektets levetid',
            'Diskonterer med avkastningskravet – tar hensyn til pengenes tidsverdi og risiko',
            'Gir svar i kroner – lett å forstå hvor mye verdi som skapes',
            'Er additivt – NPV for portefølje = sum av individuelle NPVer'
          ]
        },
        {
          id: '7-2-keypoint-1',
          type: 'keypoint',
          order: 15,
          points: [
            'NPV er summen av diskonterte kontantstrømmer minus investering',
            'Aksepter prosjekter med NPV > 0, avslå prosjekter med NPV < 0',
            'Avkastningskravet reflekterer tidskostnad og risiko',
            'NPV er den foretrukne metoden for investeringsbeslutninger'
          ]
        },
        {
          id: '7-2-quiz-1',
          type: 'quiz',
          order: 16,
          question: 'Et prosjekt har NPV = 500 000 kr. Hva betyr dette?',
          options: [
            'Prosjektet koster 500 000 kr',
            'Prosjektet genererer 500 000 kr i kontantstrøm totalt',
            'Prosjektet skaper 500 000 kr i verdi utover avkastningskravet',
            'Prosjektet gir 500 000 kr i årlig kontantstrøm'
          ],
          correctAnswer: 2,
          explanation: 'NPV = 500 000 kr betyr at prosjektet skaper 500 000 kr i verdi utover det investorene krever. Dette er "merverdien" fra prosjektet.'
        },
        {
          id: '7-2-quiz-2',
          type: 'quiz',
          order: 17,
          question: 'Hva skjer med NPV hvis avkastningskravet øker?',
          options: [
            'NPV øker',
            'NPV synker',
            'NPV forblir uendret',
            'Det avhenger av kontantstrømmene'
          ],
          correctAnswer: 1,
          explanation: 'Høyere avkastningskrav betyr at fremtidige kontantstrømmer diskonteres mer. Nåverdien av fremtidige kontantstrømmer blir lavere, og dermed synker NPV.'
        },
        {
          id: '7-2-exercise-1',
          type: 'exercise',
          order: 17,
          title: 'Oppgave: NPV-beregning',
          description: 'En bedrift vurderer å investere i en ny produksjonslinje:\n\n• Investeringskostnad: 2 000 000 kr\n• Årlig kontantstrøm år 1-4: 700 000 kr\n• Kontantstrøm år 5 (inkl. salg av utstyr): 900 000 kr\n• Avkastningskrav: 12%\n\n1. Beregn NPV for prosjektet.\n2. Bør prosjektet gjennomføres?\n3. Hva ville NPV vært med 8% avkastningskrav? Og med 15%?',
          hint: 'Regn ut nåverdien av hver kontantstrøm separat og summer dem.'
        },
        {
          id: '7-2-reflection-1',
          type: 'reflection',
          order: 18,
          question: 'NPV krever at vi estimerer fremtidige kontantstrømmer og avkastningskrav. Begge deler er usikre. Hvordan tror du selskaper håndterer denne usikkerheten i praksis?'
        }
      ]
    },

    // SEKSJON 7.3: Internrente (IRR)
    {
      id: 'seksjon-7-3-irr',
      title: 'Internrenten (IRR) og dens begrensninger',
      order: 3,
      content: [
        {
          id: '7-3-intro',
          type: 'text',
          order: 1,
          text: 'Internrenten (IRR) er den avkastningen et prosjekt gir. Mange ledere foretrekker IRR fremfor NPV fordi den uttrykkes som prosent, som er lettere å forstå og kommunisere. Men IRR har flere fallgruver.',
          emphasis: 'important'
        },
        {
          id: '7-3-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Hva er internrenten?'
        },
        {
          id: '7-3-def-1',
          type: 'definition',
          order: 3,
          term: 'Internrente (IRR)',
          definition: 'Den diskonteringsrenten som gjør NPV = 0. Med andre ord: den avkastningen prosjektet gir på investert kapital.'
        },
        {
          id: '7-3-formula-1',
          type: 'formula',
          order: 4,
          formula: '0 = -I₀ + CF₁/(1+IRR) + CF₂/(1+IRR)² + ... + CFₙ/(1+IRR)ⁿ',
          description: 'IRR finnes ved å løse denne ligningen. Det gjøres vanligvis med regneark (IRR-funksjonen i Excel) eller kalkulator.'
        },
        {
          id: '7-3-heading-2',
          type: 'heading',
          order: 5,
          level: 2,
          text: 'Beslutningsregelen'
        },
        {
          id: '7-3-list-1',
          type: 'list',
          order: 6,
          ordered: false,
          items: [
            'IRR > avkastningskrav: Aksepter prosjektet',
            'IRR = avkastningskrav: Indifferent (NPV = 0)',
            'IRR < avkastningskrav: Avslå prosjektet'
          ]
        },
        {
          id: '7-3-example-1',
          type: 'example',
          order: 7,
          title: 'IRR i praksis',
          content: 'Prosjektet fra forrige seksjon:\n• Investering: 1 000 000 kr\n• År 1: 300 000 kr, År 2: 400 000 kr, År 3: 500 000 kr\n\nVi fant at NPV = -21 037 kr ved 10% avkastningskrav.\n\nFor å finne IRR, prøver vi ulike renter:\n• Ved 9%: NPV = +17 520 kr\n• Ved 10%: NPV = -21 037 kr\n\nIRR ligger mellom 9% og 10%. Mer presist: IRR ≈ 9,4%\n\nSiden IRR (9,4%) < avkastningskrav (10%), bekrefter dette at prosjektet bør avslås.'
        },
        {
          id: '7-3-calc-irr',
          type: 'calculator',
          order: 8,
          title: 'IRR-kalkulator',
          description: 'Beregn internrenten for et prosjekt med lik årlig kontantstrøm. Sammenlign med avkastningskravet ditt!',
          calculatorType: 'irr-approx',
          inputs: [
            {
              key: 'investment',
              label: 'Initial investering',
              type: 'currency',
              default: 1000000,
              min: 0,
              step: 100000,
              helpText: 'Kostnaden ved å starte prosjektet'
            },
            {
              key: 'cashflow',
              label: 'Årlig kontantstrøm',
              type: 'currency',
              default: 300000,
              min: 0,
              step: 50000,
              helpText: 'Forventet årlig netto kontantstrøm'
            },
            {
              key: 'years',
              label: 'Prosjektlevetid',
              type: 'years',
              default: 5,
              min: 1,
              max: 30,
              step: 1,
              helpText: 'Antall år med kontantstrømmer'
            },
            {
              key: 'rate',
              label: 'Avkastningskrav (til sammenligning)',
              type: 'percentage',
              default: 10,
              min: 0,
              max: 30,
              step: 1,
              helpText: 'Sammenlign IRR med dette kravet'
            }
          ],
          formula: 'IRR: renten der NPV = 0',
          resultLabel: 'Internrente (IRR)',
          resultUnit: '%',
          explanation: 'Er IRR høyere eller lavere enn avkastningskravet?'
        } as CalculatorContent,
        {
          id: '7-3-heading-3',
          type: 'heading',
          order: 9,
          level: 2,
          text: 'IRR-problemene'
        },
        {
          id: '7-3-text-2',
          type: 'text',
          order: 10,
          text: 'IRR har flere kjente problemer som kan føre til feil beslutninger:'
        },
        {
          id: '7-3-table-1',
          type: 'table',
          order: 11,
          headers: ['Problem', 'Beskrivelse', 'Løsning'],
          rows: [
            ['Multiple IRR', 'Når kontantstrømmen skifter fortegn flere ganger, kan det finnes flere IRR-verdier', 'Bruk NPV i stedet'],
            ['Gjensidig utelukkende prosjekter', 'IRR kan gi feil rangering når prosjekter har ulik størrelse eller timing', 'Bruk NPV for rangering'],
            ['Reinvesteringsantagelse', 'IRR forutsetter at kontantstrømmer reinvesteres til IRR, ikke avkastningskravet', 'Bruk MIRR eller NPV'],
            ['Ingen IRR', 'Noen prosjekter har ingen IRR (f.eks. alle positive kontantstrømmer)', 'Bruk NPV']
          ]
        },
        {
          id: '7-3-example-2',
          type: 'example',
          order: 12,
          title: 'Når IRR gir feil svar',
          content: 'To gjensidig utelukkende prosjekter (du kan bare velge ett):\n\n**Prosjekt A:** Investering 100, kontantstrøm år 1: 150\n• IRR = 50%\n• NPV ved 10% = 36,4\n\n**Prosjekt B:** Investering 1000, kontantstrøm år 1: 1300\n• IRR = 30%\n• NPV ved 10% = 181,8\n\nIRR sier: Velg A (50% > 30%)\nNPV sier: Velg B (181,8 > 36,4)\n\n**NPV har rett!** Prosjekt B skaper mer verdi selv om prosent-avkastningen er lavere. Du vil heller tjene 181,8 enn 36,4.'
        },
        {
          id: '7-3-heading-4',
          type: 'heading',
          order: 13,
          level: 2,
          text: 'Modifisert internrente (MIRR)'
        },
        {
          id: '7-3-def-2',
          type: 'definition',
          order: 14,
          term: 'MIRR (Modified IRR)',
          definition: 'En forbedret versjon av IRR som forutsetter at positive kontantstrømmer reinvesteres til avkastningskravet, ikke til IRR. Gir et mer realistisk bilde av prosjektets avkastning.'
        },
        {
          id: '7-3-keypoint-1',
          type: 'keypoint',
          order: 15,
          points: [
            'IRR er den renten som gir NPV = 0',
            'Aksepter hvis IRR > avkastningskrav',
            'IRR kan gi feil svar ved multiple kontantstrømendringer eller gjensidig utelukkende prosjekter',
            'Ved konflikt mellom IRR og NPV, stol på NPV'
          ]
        },
        {
          id: '7-3-quiz-1',
          type: 'quiz',
          order: 16,
          question: 'Hva er internrenten (IRR)?',
          options: [
            'Den renten selskapet betaler på gjeld',
            'Den renten som gjør NPV = 0',
            'Avkastningskravet til aksjonærene',
            'Gjennomsnittlig avkastning på egenkapitalen'
          ],
          correctAnswer: 1,
          explanation: 'IRR er den diskonteringsrenten som gjør at nåverdien av alle kontantstrømmer blir null. Det er altså prosjektets implisitte avkastning.'
        },
        {
          id: '7-3-quiz-2',
          type: 'quiz',
          order: 17,
          question: 'Når IRR og NPV gir motstridende svar, hvilket skal du stole på?',
          options: [
            'IRR fordi det er mer intuitivt',
            'NPV fordi det alltid gir riktig svar om verdiskaping',
            'Gjennomsnittet av de to',
            'Det avhenger av prosjektets størrelse'
          ],
          correctAnswer: 1,
          explanation: 'NPV måler direkte hvor mye verdi prosjektet skaper i kroner. Ved konflikt skal man alltid velge prosjektet med høyest NPV.'
        },
        {
          id: '7-3-exercise-1',
          type: 'exercise',
          order: 17,
          title: 'Oppgave: IRR vs NPV',
          description: 'Du vurderer to prosjekter (avkastningskrav 12%):\n\n**Prosjekt X:**\n• Investering: 500 000 kr\n• År 1-5: 150 000 kr per år\n\n**Prosjekt Y:**\n• Investering: 1 000 000 kr\n• År 1-5: 280 000 kr per år\n\n1. Beregn NPV for begge prosjekter.\n2. Finn IRR for begge prosjekter (bruk Excel eller prøv ulike renter).\n3. Hvilket prosjekt bør velges hvis de er gjensidig utelukkende? Forklar.',
          hint: 'For annuiteter: NPV = -I + CF × [(1 - (1+r)^-n) / r]'
        },
        {
          id: '7-3-reflection-1',
          type: 'reflection',
          order: 18,
          question: 'Hvorfor tror du mange ledere fortsatt foretrekker IRR fremfor NPV, til tross for IRRs begrensninger? Hva sier dette om kommunikasjon av finansielle beslutninger?'
        }
      ]
    },

    // SEKSJON 7.4: Andre beslutningskriterier
    {
      id: 'seksjon-7-4-andre-kriterier',
      title: 'Tilbakebetalingstid og andre metoder',
      order: 4,
      content: [
        {
          id: '7-4-intro',
          type: 'text',
          order: 1,
          text: 'Selv om NPV er teoretisk overlegen, brukes flere andre metoder i praksis. Tilbakebetalingstid er spesielt populær fordi den er enkel å forstå og kommuniserer risiko på en intuitiv måte.',
          emphasis: 'important'
        },
        {
          id: '7-4-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Tilbakebetalingstid'
        },
        {
          id: '7-4-def-1',
          type: 'definition',
          order: 3,
          term: 'Tilbakebetalingstid (Payback)',
          definition: 'Tiden det tar før de akkumulerte kontantstrømmene dekker den opprinnelige investeringen. Kortere tilbakebetalingstid = lavere risiko.'
        },
        {
          id: '7-4-example-1',
          type: 'example',
          order: 4,
          title: 'Beregne tilbakebetalingstid',
          content: 'Investering: 1 000 000 kr\nÅrlige kontantstrømmer: 300 000 kr\n\nTilbakebetalingstid = 1 000 000 / 300 000 = 3,33 år\n\nMed ujevne kontantstrømmer:\nÅr 1: 200 000 → Akkumulert: 200 000\nÅr 2: 400 000 → Akkumulert: 600 000\nÅr 3: 500 000 → Akkumulert: 1 100 000\n\nTilbakebetalingstid = 2 + (400 000 / 500 000) = 2,8 år'
        },
        {
          id: '7-4-heading-2',
          type: 'heading',
          order: 5,
          level: 2,
          text: 'Fordeler og ulemper med tilbakebetalingstid'
        },
        {
          id: '7-4-table-1',
          type: 'table',
          order: 6,
          headers: ['Fordeler', 'Ulemper'],
          rows: [
            ['Enkel å beregne og forstå', 'Ignorerer kontantstrømmer etter tilbakebetalingstiden'],
            ['Fokuserer på likviditet og risiko', 'Tar ikke hensyn til pengenes tidsverdi'],
            ['Nyttig for usikre prosjekter', 'Gir ingen indikasjon på verdiskaping'],
            ['God som supplement til NPV', 'Kan føre til feil beslutninger brukt alene']
          ]
        },
        {
          id: '7-4-heading-3',
          type: 'heading',
          order: 7,
          level: 2,
          text: 'Diskontert tilbakebetalingstid'
        },
        {
          id: '7-4-def-2',
          type: 'definition',
          order: 8,
          term: 'Diskontert tilbakebetalingstid',
          definition: 'Tiden det tar før de akkumulerte diskonterte kontantstrømmene dekker investeringen. Tar hensyn til pengenes tidsverdi, men har fortsatt samme begrensninger som vanlig payback.'
        },
        {
          id: '7-4-heading-4',
          type: 'heading',
          order: 9,
          level: 2,
          text: 'Lønnsomhetsindeks (Profitability Index)'
        },
        {
          id: '7-4-def-3',
          type: 'definition',
          order: 10,
          term: 'Lønnsomhetsindeks (PI)',
          definition: 'Nåverdien av fremtidige kontantstrømmer delt på initial investering. PI > 1 betyr lønnsomt prosjekt. Nyttig når det er kapitalbegrensninger.'
        },
        {
          id: '7-4-formula-1',
          type: 'formula',
          order: 11,
          formula: 'PI = PV(kontantstrømmer) / Investering = (NPV + Investering) / Investering',
          description: 'PI = 1,2 betyr at hver investert krone genererer 1,20 kr i nåverdi. Jo høyere PI, jo bedre avkastning per investert krone.'
        },
        {
          id: '7-4-example-2',
          type: 'example',
          order: 12,
          title: 'Når PI er nyttig',
          content: 'Et selskap har 1 000 000 kr å investere og tre mulige prosjekter:\n\n| Prosjekt | Investering | NPV | PI |\n|----------|-------------|-----|----|\n| A | 500 000 | 150 000 | 1,30 |\n| B | 700 000 | 175 000 | 1,25 |\n| C | 400 000 | 100 000 | 1,25 |\n\nNPV-rangering: B > A > C\nPI-rangering: A > B = C\n\nMed kapitalbegrensning på 1 MNOK:\n• Bare B: NPV = 175 000\n• A + C: NPV = 250 000 ← Bedre!\n\nPI hjelper oss finne den beste kombinasjonen.'
        },
        {
          id: '7-4-heading-5',
          type: 'heading',
          order: 13,
          level: 2,
          text: 'Sammendrag av metoder'
        },
        {
          id: '7-4-table-2',
          type: 'table',
          order: 14,
          headers: ['Metode', 'Tar hensyn til tidsverdi?', 'Alle CF?', 'Beste bruk'],
          rows: [
            ['NPV', 'Ja', 'Ja', 'Hovedmetode for verdiskaping'],
            ['IRR', 'Ja', 'Ja', 'Kommunisere avkastning (med forsiktighet)'],
            ['Payback', 'Nei', 'Nei', 'Vurdere likviditet og risiko'],
            ['Diskontert payback', 'Ja', 'Nei', 'Forbedret risiko-mål'],
            ['PI', 'Ja', 'Ja', 'Rangere ved kapitalbegrensning']
          ]
        },
        {
          id: '7-4-keypoint-1',
          type: 'keypoint',
          order: 15,
          points: [
            'Tilbakebetalingstid er enkel, men ignorerer tidsverdi og kontantstrømmer etter payback',
            'Diskontert payback forbedrer metoden, men har fortsatt begrensninger',
            'Lønnsomhetsindeks er nyttig ved kapitalbegrensninger',
            'Bruk alltid NPV som hovedmetode, supplert med andre mål'
          ]
        },
        {
          id: '7-4-quiz-1',
          type: 'quiz',
          order: 16,
          question: 'Hva er den viktigste svakheten med tilbakebetalingstid?',
          options: [
            'Den er vanskelig å beregne',
            'Den ignorerer kontantstrømmer etter tilbakebetalingstiden',
            'Den tar for lang tid å beregne',
            'Den krever avkastningskrav'
          ],
          correctAnswer: 1,
          explanation: 'Tilbakebetalingstid ignorerer alle kontantstrømmer som kommer etter at investeringen er tilbakebetalt. Et prosjekt som tjener mye etter payback kan bli avslått, mens et som tjener lite kan aksepteres.'
        },
        {
          id: '7-4-quiz-2',
          type: 'quiz',
          order: 17,
          question: 'Når er lønnsomhetsindeks (PI) spesielt nyttig?',
          options: [
            'Når prosjektene er gjensidig utelukkende',
            'Når selskapet har ubegrenset kapital',
            'Når det er kapitalbegrensninger og man må velge mellom flere prosjekter',
            'Når kontantstrømmene er ujevne'
          ],
          correctAnswer: 2,
          explanation: 'PI viser hvor mye nåverdi du får per investert krone. Dette er spesielt nyttig når du har begrenset kapital og må finne den beste kombinasjonen av prosjekter.'
        },
        {
          id: '7-4-exercise-1',
          type: 'exercise',
          order: 18,
          title: 'Oppgave: Sammenlign metoder',
          description: 'Et prosjekt har følgende kontantstrømmer (avkastningskrav 10%):\n\n• År 0: -800 000 kr\n• År 1: 200 000 kr\n• År 2: 300 000 kr\n• År 3: 400 000 kr\n• År 4: 300 000 kr\n\n1. Beregn tilbakebetalingstid.\n2. Beregn diskontert tilbakebetalingstid.\n3. Beregn NPV.\n4. Beregn lønnsomhetsindeks.\n5. Bør prosjektet aksepteres?',
          hint: 'Akkumuler kontantstrømmer (og diskonterte kontantstrømmer) år for år.'
        },
        {
          id: '7-4-reflection-1',
          type: 'reflection',
          order: 19,
          question: 'Undersøkelser viser at tilbakebetalingstid er den mest brukte metoden i små og mellomstore bedrifter. Hvorfor tror du det er slik, og hva er risikoen ved å kun bruke denne metoden?'
        }
      ]
    },

    // SEKSJON 7.5: Sensitivitetsanalyse og realopsjoner
    {
      id: 'seksjon-7-5-sensitivitet',
      title: 'Usikkerhet og realopsjoner',
      order: 5,
      content: [
        {
          id: '7-5-intro',
          type: 'text',
          order: 1,
          text: 'Alle investeringsanalyser bygger på antagelser om fremtiden. Men fremtiden er usikker. Sensitivitetsanalyse og scenarioanalyse hjelper oss forstå hvordan usikkerhet påvirker beslutningen. Realopsjoner gir verdi til fleksibilitet.',
          emphasis: 'important'
        },
        {
          id: '7-5-heading-1',
          type: 'heading',
          order: 2,
          level: 2,
          text: 'Sensitivitetsanalyse'
        },
        {
          id: '7-5-def-1',
          type: 'definition',
          order: 3,
          term: 'Sensitivitetsanalyse',
          definition: 'En metode for å teste hvor følsom NPV er for endringer i enkeltvariabler. Viser hvilke variabler som har størst påvirkning på prosjektets lønnsomhet.'
        },
        {
          id: '7-5-example-1',
          type: 'example',
          order: 4,
          title: 'Sensitivitetsanalyse',
          content: 'Basecase NPV = 500 000 kr. Vi tester ±20% endring i nøkkelvariabler:\n\n| Variabel | -20% | Base | +20% |\n|----------|------|------|------|\n| Salgspris | -200 000 | 500 000 | 1 200 000 |\n| Salgsvolum | 100 000 | 500 000 | 900 000 |\n| Variable kostnader | 700 000 | 500 000 | 300 000 |\n| Investering | 600 000 | 500 000 | 400 000 |\n\n**Innsikt:** NPV er mest sensitiv for salgspris (swing på 1,4 MNOK). Dette er den kritiske variabelen – selskapet bør fokusere på å sikre prisen.'
        },
        {
          id: '7-5-heading-2',
          type: 'heading',
          order: 5,
          level: 2,
          text: 'Break-even analyse'
        },
        {
          id: '7-5-def-2',
          type: 'definition',
          order: 6,
          term: 'Break-even',
          definition: 'Det nivået på en variabel som gjør NPV = 0. Viser hvor mye en variabel kan endre seg før prosjektet blir ulønnsomt.'
        },
        {
          id: '7-5-text-2',
          type: 'text',
          order: 7,
          text: 'Eksempel: Hvis break-even salgspris er 85% av forventet pris, kan prisen falle 15% før prosjektet går i minus. Jo større margin til break-even, jo tryggere er prosjektet.'
        },
        {
          id: '7-5-heading-3',
          type: 'heading',
          order: 8,
          level: 2,
          text: 'Scenarioanalyse'
        },
        {
          id: '7-5-def-3',
          type: 'definition',
          order: 9,
          term: 'Scenarioanalyse',
          definition: 'Vurderer NPV under forskjellige fremtidsbilder der flere variabler endrer seg samtidig. Typisk best case, base case og worst case.'
        },
        {
          id: '7-5-table-1',
          type: 'table',
          order: 10,
          headers: ['Scenario', 'Beskrivelse', 'NPV', 'Sannsynlighet'],
          rows: [
            ['Worst case', 'Lav pris, lavt volum, høye kostnader', '-300 000', '20%'],
            ['Base case', 'Forventede verdier', '500 000', '60%'],
            ['Best case', 'Høy pris, høyt volum, lave kostnader', '1 200 000', '20%']
          ]
        },
        {
          id: '7-5-formula-1',
          type: 'formula',
          order: 11,
          formula: 'Forventet NPV = Σ(NPVᵢ × Sannsynlighetsᵢ)',
          description: 'Forventet NPV = 0,20 × (-300) + 0,60 × 500 + 0,20 × 1200 = 480 tusen kr'
        },
        {
          id: '7-5-heading-4',
          type: 'heading',
          order: 12,
          level: 2,
          text: 'Realopsjoner'
        },
        {
          id: '7-5-def-4',
          type: 'definition',
          order: 13,
          term: 'Realopsjon',
          definition: 'Muligheten (men ikke plikten) til å ta en fremtidig beslutning basert på ny informasjon. Gir verdi til fleksibilitet som ikke fanges opp av standard NPV.'
        },
        {
          id: '7-5-text-3',
          type: 'text',
          order: 14,
          text: 'Vanlige typer realopsjoner:'
        },
        {
          id: '7-5-list-1',
          type: 'list',
          order: 15,
          ordered: false,
          items: [
            'Utsettelsesopsjon: Vente og se før man investerer',
            'Utvidelsesopsjon: Mulighet til å skalere opp ved suksess',
            'Nedleggelsesopsjon: Mulighet til å avbryte ved dårlige resultater',
            'Fleksibilitetsopsjon: Bytte mellom innsatsfaktorer eller produkter'
          ]
        },
        {
          id: '7-5-example-2',
          type: 'example',
          order: 16,
          title: 'Realopsjon i praksis',
          content: 'Et oljeselskap vurderer et felt:\n\n**Standard NPV-analyse:** NPV = -50 MNOK. Avslå prosjektet.\n\n**Med realopsjon:** Selskapet kan starte med en pilotbrønn (investering 20 MNOK). Etter ett år får de ny informasjon:\n• Godt resultat (50% sannsynlighet): Full utbygging gir NPV = 200 MNOK\n• Dårlig resultat (50% sannsynlighet): Avbryt, tape kun pilot-investeringen\n\nForventet NPV med opsjon = -20 + 0,5 × (200/1,1) + 0,5 × 0 = 71 MNOK\n\n**Konklusjon:** Muligheten til å avbryte (nedleggelsesopsjon) gjør prosjektet lønnsomt!'
        },
        {
          id: '7-5-keypoint-1',
          type: 'keypoint',
          order: 17,
          points: [
            'Sensitivitetsanalyse viser hvilke variabler som er kritiske',
            'Break-even viser hvor mye en variabel kan endre seg før NPV = 0',
            'Scenarioanalyse kombinerer flere variabler i realistiske fremtidsbilder',
            'Realopsjoner gir verdi til fleksibilitet og kan endre beslutningen'
          ]
        },
        {
          id: '7-5-quiz-1',
          type: 'quiz',
          order: 18,
          question: 'Hva viser en sensitivitetsanalyse?',
          options: [
            'Sannsynligheten for at prosjektet lykkes',
            'Hvilke variabler som har størst påvirkning på NPV',
            'Den beste måten å finansiere prosjektet',
            'Hvor lang tilbakebetalingstiden er'
          ],
          correctAnswer: 1,
          explanation: 'Sensitivitetsanalyse tester hvordan NPV endrer seg når enkeltvariabler endres. Den viser hvilke variabler som er mest kritiske for prosjektets lønnsomhet.'
        },
        {
          id: '7-5-quiz-2',
          type: 'quiz',
          order: 19,
          question: 'Hva er en realopsjon?',
          options: [
            'En aksjeopsjon for ansatte',
            'En mulighet til å ta fremtidige beslutninger basert på ny informasjon',
            'En forsikring mot valutatap',
            'En metode for å beregne NPV'
          ],
          correctAnswer: 1,
          explanation: 'En realopsjon er muligheten (men ikke plikten) til å ta en fremtidig beslutning. Den gir verdi til fleksibilitet – som muligheten til å utvide, utsette, eller avbryte et prosjekt.'
        },
        {
          id: '7-5-exercise-1',
          type: 'exercise',
          order: 20,
          title: 'Oppgave: Sensitivitet og realopsjoner',
          description: 'Et vindkraftprosjekt har base case NPV = 200 MNOK. Du har følgende informasjon:\n\n• Strømpris: Base 50 øre/kWh, break-even 40 øre/kWh\n• Vindforhold: Usikre, men selskapet kan starte med 3 turbiner og utvide til 10 hvis resultatene er gode\n\n1. Hvor mye kan strømprisen falle før prosjektet blir ulønnsomt?\n2. Hvilken type realopsjon representerer muligheten til å utvide?\n3. Hvorfor er denne fleksibiliteten verdifull?',
          hint: 'Break-even gir deg fallmarginen. Utvidelsesopsjon er en av de klassiske realopsjonstypene.'
        },
        {
          id: '7-5-reflection-1',
          type: 'reflection',
          order: 21,
          question: 'Tenk på en investeringsbeslutning med høy usikkerhet (f.eks. å starte en bedrift, ta en ny utdanning). Hvordan ville du brukt tankegangen om realopsjoner – å starte smått og beholde muligheten til å justere kursen?'
        }
      ]
    }
  ],
  moduleQuiz: {
    id: 'modul-7-investeringsanalyse-quiz',
    title: 'Modulquiz: Investeringsanalyse',
    description: 'Test din forståelse av NPV, IRR og investeringsbeslutninger. Du trenger minst 90% riktig for å bestå.',
    passingScore: 90,
    questions: [
      {
        id: 'q7-1',
        question: 'Hva er NPV (netto nåverdi)?',
        options: [
          'Summen av alle fremtidige kontantstrømmer',
          'Nåverdien av alle fremtidige kontantstrømmer minus investeringskostnaden',
          'Gjennomsnittlig årlig avkastning',
          'Tiden til investeringen er tilbakebetalt'
        ],
        correctAnswer: 1,
        explanation: 'NPV = Nåverdi av fremtidige kontantstrømmer - Investeringskostnad. Positiv NPV betyr at prosjektet skaper verdi.'
      },
      {
        id: 'q7-2',
        question: 'Når bør man akseptere et investeringsprosjekt basert på NPV?',
        options: [
          'Når NPV = 0',
          'Når NPV > 0',
          'Når NPV < 0',
          'Når NPV er høyere enn konkurrentenes'
        ],
        correctAnswer: 1,
        explanation: 'Et prosjekt med NPV > 0 skaper verdi utover avkastningskravet og bør aksepteres. NPV = 0 gir akkurat kravet, NPV < 0 ødelegger verdi.'
      },
      {
        id: 'q7-3',
        question: 'Hva er IRR (internrenten)?',
        options: [
          'Den risikofrie renten',
          'Den diskonteringsraten som gir NPV = 0',
          'Markedsrenten pluss risikopremie',
          'Gjennomsnittlig avkastning per år'
        ],
        correctAnswer: 1,
        explanation: 'IRR er den diskonteringsraten som gjør NPV lik null. Det er prosjektets effektive avkastning - jo høyere jo bedre.'
      },
      {
        id: 'q7-4',
        question: 'Hva er beslutningsregelen for IRR?',
        options: [
          'Aksepter hvis IRR < avkastningskravet',
          'Aksepter hvis IRR > avkastningskravet',
          'Aksepter hvis IRR = 0',
          'Avvis alltid prosjekter med høy IRR'
        ],
        correctAnswer: 1,
        explanation: 'Aksepter prosjektet hvis IRR > avkastningskravet. Da gir prosjektet høyere avkastning enn investorenes krav.'
      },
      {
        id: 'q7-5',
        question: 'Hva er tilbakebetalingstid (payback period)?',
        options: [
          'Tiden til prosjektet genererer positiv NPV',
          'Tiden til investeringen er tilbakebetalt med kontantstrømmer',
          'Levetiden på investeringen',
          'Tiden før IRR overstiger kravet'
        ],
        correctAnswer: 1,
        explanation: 'Tilbakebetalingstid måler hvor lang tid det tar før de akkumulerte kontantstrømmene tilsvarer investeringskostnaden.'
      },
      {
        id: 'q7-6',
        question: 'Hva er hovedproblemet med tilbakebetalingstid som kriterium?',
        options: [
          'Den er for komplisert å beregne',
          'Den ignorerer pengenes tidsverdi og kontantstrømmer etter tilbakebetaling',
          'Den favoriserer langsiktige prosjekter',
          'Den krever for mye data'
        ],
        correctAnswer: 1,
        explanation: 'Tilbakebetalingstid diskonterer ikke kontantstrømmer og ignorerer alt som skjer etter tilbakebetalingstidspunktet, noe som kan føre til feil beslutninger.'
      },
      {
        id: 'q7-7',
        question: 'Når kan IRR gi feil rangering av prosjekter?',
        options: [
          'Aldri - IRR er alltid korrekt',
          'Når prosjekter har ulik størrelse eller ulik kontantstrømprofil',
          'Når alle kontantstrømmene er positive',
          'Når avkastningskravet er lavt'
        ],
        correctAnswer: 1,
        explanation: 'IRR kan gi feil rangering ved ulik størrelse (et lite prosjekt med høy IRR vs. stort med lavere IRR) eller ukonvensjonelle kontantstrømmer.'
      },
      {
        id: 'q7-8',
        question: 'Hva er sensitivitetsanalyse?',
        options: [
          'En metode for å beregne NPV',
          'En analyse av hvordan endringer i nøkkelvariabler påvirker lønnsomheten',
          'En type risikoanalyse basert på historiske data',
          'En sammenligning av flere prosjekter'
        ],
        correctAnswer: 1,
        explanation: 'Sensitivitetsanalyse undersøker hvordan NPV/IRR endres når man varierer én input-variabel om gangen, for eksempel pris, kostnader eller volum.'
      },
      {
        id: 'q7-9',
        question: 'Hva er en realopsjon?',
        options: [
          'En finansiell opsjon på aksjer',
          'Fleksibiliteten til å ta fremtidige beslutninger basert på ny informasjon',
          'En metode for å verdsette obligasjoner',
          'En type renteopsjon'
        ],
        correctAnswer: 1,
        explanation: 'Realopsjoner er verdien av fleksibilitet i investeringsbeslutninger - muligheten til å utvide, utsette, avbryte eller endre et prosjekt.'
      },
      {
        id: 'q7-10',
        question: 'Hva er et eksempel på en "utvidelsesopsjon"?',
        options: [
          'Muligheten til å legge ned et prosjekt',
          'Muligheten til å øke kapasiteten hvis etterspørselen øker',
          'Muligheten til å utsette investeringen',
          'Muligheten til å bytte leverandør'
        ],
        correctAnswer: 1,
        explanation: 'En utvidelsesopsjon gir mulighet til å øke skalaen på et prosjekt hvis det går bra - for eksempel å bygge ut flere vindturbiner.'
      },
      {
        id: 'q7-11',
        question: 'Hvorfor kalles NPV "gullstandarden" for investeringsanalyse?',
        options: [
          'Fordi den bruker gullprisen som referanse',
          'Fordi den tar hensyn til pengenes tidsverdi og måler verdiskaping direkte',
          'Fordi den er enklest å beregne',
          'Fordi den er mest brukt i gullindustrien'
        ],
        correctAnswer: 1,
        explanation: 'NPV er gullstandarden fordi den korrekt diskonterer fremtidige kontantstrømmer og direkte måler hvor mye verdi prosjektet skaper.'
      },
      {
        id: 'q7-12',
        question: 'Et prosjekt koster 100 MNOK og genererer 30 MNOK årlig i 5 år. Avkastningskravet er 10%. Er dette lønnsomt?',
        options: [
          'Nei, fordi total kontantstrøm (150) er for lav',
          'Ja, fordi nåverdien av kontantstrømmene (ca. 114 MNOK) overstiger investeringen',
          'Nei, fordi tilbakebetalingstiden er over 3 år',
          'Det kan ikke avgjøres uten mer informasjon'
        ],
        correctAnswer: 1,
        explanation: 'NV av annuitet = 30 × [(1 - 1/1,10^5) / 0,10] ≈ 114 MNOK. NPV = 114 - 100 = 14 MNOK > 0, så prosjektet er lønnsomt.'
      }
    ]
  }
};
