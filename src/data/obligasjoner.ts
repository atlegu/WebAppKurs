import { Module } from '../types/course';

export const obligasjonerModule: Module = {
  id: 'obligasjoner',
  title: 'Innføring i obligasjoner og bærekraftige gjeldsinstrumenter',
  icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
  order: 2,
  learningObjectives: [
    'Forklare hva en obligasjon er, og hvordan obligasjonsmarkedet fungerer.',
    'Regne på pris, avkastning og risiko for ulike typer obligasjoner.',
    'Forstå forholdet mellom rente, løpetid og kurs.',
    'Kjenne til risikofaktorer som kredittrisiko og renterisiko.',
    'Forstå hva grønne obligasjoner er, og hvordan de brukes i bærekraftig finansiering.'
  ],
  sections: [
    {
      id: 'hva-er-obligasjon',
      title: 'Hva er en obligasjon?',
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
      order: 1,
      content: [
        {
          id: 'intro-1',
          type: 'text',
          text: 'En obligasjon er et verdipapir som dokumenterer at noen har lånt ut penger til en annen part – vanligvis en stat, kommune, bank eller et selskap. Den som låner ut penger (investoren) får til gjengjeld jevnlige rentebetalinger og tilbakebetaling av hovedstolen (lånebeløpet) ved forfall.',
          order: 1
        },
        {
          id: 'analogy-1',
          type: 'example',
          title: 'Tenk på obligasjonen som en kontrakt',
          content: 'Du låner meg 1 000 kroner i 5 år. Jeg betaler deg 50 kroner i året i rente, og så får du hele beløpet tilbake til slutt.',
          order: 2
        },
        {
          id: 'diff-1',
          type: 'keypoint',
          points: [
            'En aksje er eierandel i et selskap.',
            'En obligasjon er et lån til selskapet.'
          ],
          order: 3
        },
        {
          id: 'text-2',
          type: 'text',
          text: 'Som obligasjonseier har du ikke stemmerett eller eierposisjon – men du har forrang til å få pengene dine tilbake. Derfor regnes obligasjoner som mindre risikable enn aksjer, men de har som regel også lavere forventet avkastning.',
          order: 4
        },
        {
          id: 'issuers-heading',
          type: 'heading',
          text: 'Hvem utsteder obligasjoner?',
          level: 3,
          order: 5
        },
        {
          id: 'issuers-list',
          type: 'list',
          items: [
            'Staten (statsobligasjoner)',
            'Kommuner og fylker (kommunelån)',
            'Selskaper (foretakslån, high yield-lån)',
            'Banker (obligasjoner med fortrinnsrett)'
          ],
          ordered: false,
          order: 6
        },
        {
          id: 'why-invest-heading',
          type: 'heading',
          text: 'Hvorfor investerer folk i obligasjoner?',
          level: 3,
          order: 7
        },
        {
          id: 'why-invest-list',
          type: 'list',
          items: [
            'Forutsigbare renteutbetalinger (kuponger)',
            'Lavere risiko enn aksjer',
            'Diversifisering i porteføljen',
            'Sikkerhet og likviditet (særlig statsobligasjoner)'
          ],
          ordered: false,
          order: 8
        },
        {
          id: 'video-1',
          type: 'video',
          title: 'Obligasjoner forklart på 2 minutter',
          duration: '2-3 min',
          placeholder: 'Video kommer snart',
          order: 9
        },
        {
          id: 'quiz-1',
          type: 'quiz',
          question: 'Hva er hovedforskjellen mellom en aksje og en obligasjon?',
          options: [
            'Aksjer gir høyere avkastning enn obligasjoner',
            'Aksjer er eierandel, obligasjoner er lån',
            'Obligasjoner er mer risikable enn aksjer',
            'Det er ingen forskjell'
          ],
          correctAnswer: 1,
          explanation: 'En aksje representerer eierandel i et selskap, mens en obligasjon er et lån til selskapet. Dette gir ulike rettigheter og risikoprofiler.',
          order: 10
        }
      ]
    },
    {
      id: 'obligasjonsstruktur',
      title: 'Obligasjonsstruktur og nøkkeltall',
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
      order: 2,
      content: [
        {
          id: 'struktur-intro',
          type: 'text',
          text: 'Når du kjøper en obligasjon, er det noen faste komponenter du må kjenne til. Disse bestemmer hvordan avkastning og risiko ser ut:',
          order: 1
        },
        {
          id: 'struktur-table',
          type: 'table',
          headers: ['Begrep', 'Forklaring'],
          rows: [
            ['Pålydende (hovedstol)', 'Det opprinnelige lånebeløpet, f.eks. 1 000 kr'],
            ['Kupongrente', 'Den faste årlige renten, f.eks. 5 %'],
            ['Kupongbeløp', 'Renteutbetaling per år = pålydende × kupongrente'],
            ['Løpetid', 'Hvor lenge lånet varer – til forfallsdato'],
            ['Forfallsdato', 'Datoen når hovedstolen skal betales tilbake'],
            ['Kurs', 'Markedspris for obligasjonen (ofte i prosent av pålydende)'],
            ['Effektiv rente (YTM)', 'Faktisk avkastning over hele perioden, inkludert kurs og kuponger']
          ],
          order: 2
        },
        {
          id: 'struktur-example',
          type: 'example',
          title: 'Eksempel',
          content: 'Du kjøper en obligasjon med:\n• Pålydende: 1 000 kr\n• Kupongrente: 4 %\n• Løpetid: 5 år',
          calculation: 'Du mottar 40 kr per år i rente i fem år (totalt 200 kr), og 1 000 kr ved forfall.\n\nHvis du betalte nøyaktig 1 000 kr, er effektiv rente = kupongrente = 4 %.\nMen hvis du betalte 950 kr, blir effektiv rente høyere.',
          order: 3
        },
        {
          id: 'struktur-summary',
          type: 'keypoint',
          points: [
            'En obligasjon er et lån i verdipapirform.',
            'Du må kjenne til vilkårene – kupong, løpetid og kurs – for å forstå hva du investerer i.'
          ],
          order: 4
        },
        {
          id: 'struktur-video',
          type: 'video',
          title: 'Slik leser du et obligasjonsvilkår',
          duration: '3 min',
          placeholder: 'Video kommer snart',
          order: 5
        },
        {
          id: 'struktur-quiz',
          type: 'quiz',
          question: 'Hva kalles den årlige rentebetalingen på en obligasjon?',
          options: [
            'Pålydende',
            'Kupong',
            'Yield',
            'Premium'
          ],
          correctAnswer: 1,
          explanation: 'Kupongen er den årlige rentebetalingen som obligasjonseieren mottar. Den beregnes som kupongrente × pålydende.',
          order: 6
        },
        {
          id: 'struktur-exercise',
          type: 'exercise',
          title: 'Oppgave: Obligasjonsanalyse',
          description: 'Fyll inn kupongrenten i prosent.\nBeregn nåverdien av obligasjonen (markedspris som prosent av pålydende).\nForklar hvorfor denne obligasjonen handles til overkurs eller underkurs.',
          order: 7
        }
      ]
    },
    {
      id: 'pris-og-avkastning',
      title: 'Pris og avkastning på obligasjoner',
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
      order: 3,
      content: [
        {
          id: 'pris-heading',
          type: 'heading',
          text: 'Hvordan fastsettes prisen på en obligasjon?',
          level: 3,
          order: 1
        },
        {
          id: 'pris-intro',
          type: 'text',
          text: 'Obligasjoner utstedes vanligvis til en pålydende verdi (ofte 1 000 kr). Men på annenhåndsmarkedet kan de omsettes til priser over eller under pari – avhengig av endringer i markedsrenten og risiko.',
          order: 2
        },
        {
          id: 'pris-definition',
          type: 'definition',
          term: 'Obligasjonspris',
          definition: 'Nåverdien av fremtidige kontantstrømmer – altså kupongbetalinger + tilbakebetaling av hovedstol – diskontert med markedsrenten.',
          order: 3
        },
        {
          id: 'pris-formula',
          type: 'formula',
          formula: 'Pris = (Kupong / (1 + r)^1) + (Kupong / (1 + r)^2) + … + (Kupong + Pålydende) / (1 + r)^n',
          description: 'Der:\n• Kupong = årlig renteutbetaling\n• r = markedsrente\n• n = antall år til forfall',
          order: 4
        },
        {
          id: 'pris-example',
          type: 'example',
          title: 'Eksempel: Prising av obligasjon',
          content: 'Du vurderer å kjøpe en 3-årig obligasjon med:\n• Pålydende: 1 000 kr\n• Kupongrente: 5 % → gir 50 kr/år\n• Markedsrente: 4 %',
          calculation: 'Du diskonterer alle fremtidige betalinger med 4 %. Resultatet blir at obligasjonen har en markedsverdi over pari – ca. 1 026 kr.',
          order: 5
        },
        {
          id: 'pris-rules',
          type: 'keypoint',
          points: [
            'Når kupongrenten er høyere enn markedsrenten → obligasjonen prises over pari.',
            'Når kupongrenten er lavere enn markedsrenten → obligasjonen prises under pari.'
          ],
          order: 6
        },
        {
          id: 'pris-relationship',
          type: 'heading',
          text: 'Sammenheng mellom pris og rente',
          level: 3,
          order: 7
        },
        {
          id: 'pris-relationship-points',
          type: 'keypoint',
          points: [
            'Rente opp → Pris ned',
            'Rente ned → Pris opp'
          ],
          order: 8
        },
        {
          id: 'pris-explanation',
          type: 'text',
          text: 'Dette skjer fordi en obligasjon med fast kupong blir mindre attraktiv når nye obligasjoner gir høyere rente, og mer attraktiv når nye gir lavere.',
          emphasis: 'important',
          order: 9
        },
        {
          id: 'pris-important',
          type: 'keypoint',
          points: [
            'Jo lengre løpetid, desto mer sensitiv er obligasjonen for renteendringer.',
            'Prisendringer påvirker markedsverdien, men ikke kupongbeløpet.'
          ],
          order: 10
        },
        {
          id: 'pris-reflection',
          type: 'reflection',
          question: 'Hvorfor handles noen obligasjoner over pari?',
          order: 11
        },
        {
          id: 'pris-formula-alt',
          type: 'formula',
          formula: 'P = Σ(C/(1+r)^t) + F/(1+r)^n',
          description: 'Hvor:\n• P = pris på obligasjonen\n• C = kupongbetaling per periode\n• r = markedsrente per periode\n• t = periode\n• F = pålydende/hovedstol\n• n = antall perioder til forfall',
          order: 11
        },
        {
          id: 'pris-formula-annuity',
          type: 'formula',
          formula: 'P = C × [1 - (1+r)^(-n)]/r + F/(1+r)^n',
          description: 'Første ledd: Nåverdi av kupongene som en annuitet\nAndre ledd: Nåverdi av hovedstol ved forfall',
          order: 12
        },
        {
          id: 'pris-quiz',
          type: 'quiz',
          question: 'Hva skjer med obligasjonsprisen når markedsrenten stiger?',
          options: [
            'Prisen stiger',
            'Prisen faller',
            'Prisen forblir uendret',
            'Det avhenger av kupongrenten'
          ],
          correctAnswer: 1,
          explanation: 'Når markedsrenten stiger, faller obligasjonsprisen. Dette skyldes den inverse sammenhengen mellom rente og obligasjonspris.',
          order: 13
        },
        {
          id: 'pris-exercise',
          type: 'exercise',
          title: 'Oppgave: Beregn markedsverdi',
          description: 'En obligasjon pålydende kr 5000, som innløses etter 10 år, betales det ut 7 % rente hvert år. Beregn markedsverdien for obligasjonen når man alternativt kan plassere pengene til 5 %.',
          order: 14
        }
      ]
    },
    {
      id: 'effektiv-rente',
      title: 'Effektiv rente (Yield to Maturity – YTM)',
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
      order: 4,
      content: [
        {
          id: 'ytm-heading',
          type: 'heading',
          text: 'Hva er effektiv rente?',
          level: 3,
          order: 1
        },
        {
          id: 'ytm-definition',
          type: 'definition',
          term: 'Effektiv rente (Yield to Maturity - YTM)',
          definition: 'Et nøkkeltall som viser den faktiske, årlige avkastningen du får dersom du kjøper en obligasjon i dag og holder den til forfall.',
          order: 2
        },
        {
          id: 'ytm-factors',
          type: 'text',
          text: 'Den tar hensyn til:\n• Kupongbetalingene\n• Hvor mye du betaler for obligasjonen\n• Hvor lang tid det er igjen til forfall',
          order: 3
        },
        {
          id: 'ytm-comparison-table',
          type: 'table',
          headers: ['Situasjon', 'Relasjon mellom pris og rente'],
          rows: [
            ['Kjøpskurs = pålydende', 'Effektiv rente = kupongrente'],
            ['Kjøpskurs < pålydende', 'Effektiv rente > kupongrente'],
            ['Kjøpskurs > pålydende', 'Effektiv rente < kupongrente']
          ],
          order: 4
        },
        {
          id: 'ytm-principle',
          type: 'heading',
          text: 'Prinsipp for beregning',
          level: 3,
          order: 5
        },
        {
          id: 'ytm-formula',
          type: 'formula',
          formula: 'Pris = Σ (Kupong / (1 + r)^t) + (Pålydende / (1 + r)^n)',
          description: 'Effektiv rente er den renten r som løser denne ligningen. Den må løses numerisk, ofte med kalkulator eller regneark.',
          order: 6
        },
        {
          id: 'ytm-example',
          type: 'example',
          title: 'Eksempel: Beregning av YTM',
          content: 'Du vurderer en obligasjon med:\n• Pålydende: 1 000 kr\n• Kupong: 5 % → 50 kr per år\n• Løpetid: 3 år\n• Pris: 960 kr',
          calculation: 'Med regneark (Excel: =YIELD(...)), finner vi at effektiv rente ≈ 6,8 %. Dette er høyere enn kupongrenten fordi du kjøper obligasjonen med rabatt, og dermed får gevinst i tillegg til kupongene.',
          order: 7
        },
        {
          id: 'ytm-importance',
          type: 'keypoint',
          points: [
            'Den lar deg sammenligne obligasjoner med ulik kupong og pris.',
            'Den gir et forventet avkastningsmål, dersom du holder til forfall.',
            'Den brukes også i beregning av risikojustert avkastning og verdsettelse.'
          ],
          order: 8
        },
        {
          id: 'ytm-limitations',
          type: 'text',
          text: 'Begrensninger:\n• Forutsetter at alle kuponger reinvesteres til samme rente (r).\n• Gjelder bare dersom obligasjonen holdes til forfall.\n• Påvirkes ikke av eventuell gjenkjøp eller call-avtaler (for mer avanserte lån).',
          emphasis: 'warning',
          order: 9
        },
        {
          id: 'ytm-video',
          type: 'video',
          title: 'Eksempel med utregning og tolkning',
          duration: '3 min',
          placeholder: 'Video kommer snart',
          order: 10
        },
        {
          id: 'ytm-quiz',
          type: 'quiz',
          question: 'Når er effektiv rente (YTM) høyere enn kupongrenten?',
          options: [
            'Når obligasjonen handles til pari',
            'Når obligasjonen handles over pari',
            'Når obligasjonen handles under pari',
            'YTM er alltid lik kupongrenten'
          ],
          correctAnswer: 2,
          explanation: 'Når en obligasjon kjøpes under pari (med rabatt), blir YTM høyere enn kupongrenten fordi investor får både kuponger og kursgevinst.',
          order: 11
        },
        {
          id: 'ytm-exercise',
          type: 'exercise',
          title: 'Oppgave: Sammenlign to obligasjoner',
          description: 'Obligasjon A og obligasjon B forfaller begge om to år. Obligasjon A koster i dag kr 197,16, mens obligasjon B koster kr 102,06. Pålydende beløp er kr 200 for obligasjon A og kr 100 for obligasjon B. Årlig nominell rente (kupongrente) er 10% for obligasjon A og 12% for obligasjon B.\n\nFinn den effektive renten på hver av de to obligasjonene.',
          order: 12
        }
      ]
    },
    {
      id: 'risikofaktorer',
      title: 'Risikofaktorer ved obligasjoner',
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
      order: 5,
      content: [
        {
          id: 'risk-intro',
          type: 'text',
          text: 'Selv om obligasjoner ofte oppfattes som trygge investeringer, er det viktig å forstå at de også innebærer risiko. Ulike typer obligasjoner har forskjellig risikoprofil, og som investor må du vite hva du kan tape – og hvorfor.',
          order: 1
        },
        {
          id: 'risk-types-heading',
          type: 'heading',
          text: 'Hovedtyper risiko ved obligasjoner',
          level: 3,
          order: 2
        },
        {
          id: 'risk-types-table',
          type: 'table',
          headers: ['Risiko', 'Hva det betyr', 'Eksempel'],
          rows: [
            ['Kredittrisiko', 'Risikoen for at utsteder ikke klarer å betale renter eller hovedstol', 'Et selskap går konkurs før lånet forfaller'],
            ['Renterisiko', 'Risikoen for at verdien faller når renten i markedet stiger', 'Du eier en obligasjon med fast 3 % rente når markedet stiger til 5 %'],
            ['Likviditetsrisiko', 'Risikoen for at du ikke får solgt obligasjonen til en rettferdig pris', 'Lav omsetning eller spesialtilpasset obligasjon'],
            ['Inflasjonsrisiko', 'Risikoen for at realverdien av betalingene reduseres over tid', 'Du mottar fast rente, men inflasjonen stiger'],
            ['Valutarisiko', 'Gjelder obligasjoner i utenlandsk valuta', 'Valutasvingninger kan påvirke avkastningen i NOK']
          ],
          order: 3
        },
        {
          id: 'risk-impact-heading',
          type: 'heading',
          text: 'Hvordan påvirker risiko pris og rente?',
          level: 3,
          order: 4
        },
        {
          id: 'risk-impact-points',
          type: 'keypoint',
          points: [
            'Høy risiko → høyere effektiv rente (investoren krever "risikopremie")',
            'Statsobligasjoner har normalt lavest risiko og lavest rente',
            'High yield-obligasjoner (lavt ratede selskaper) har høy risiko og høy potensiell avkastning'
          ],
          order: 5
        },
        {
          id: 'interest-rate-relationship',
          type: 'heading',
          text: 'Rente og kurs: Den inverse sammenhengen',
          level: 3,
          order: 6
        },
        {
          id: 'interest-rate-explanation',
          type: 'text',
          text: 'Når markedsrenten stiger, faller verdien av eksisterende obligasjoner (de gir lavere rente enn nye).\nNår renten synker, stiger verdien på gamle obligasjoner med høy kupong.',
          order: 7
        },
        {
          id: 'duration-impact',
          type: 'text',
          text: 'Derfor påvirkes langsiktige obligasjoner mer enn kortsiktige av renteendringer.',
          emphasis: 'important',
          order: 8
        },
        {
          id: 'risk-example',
          type: 'example',
          title: 'Eksempel: Renterisiko',
          content: 'Du eier en 10-årig obligasjon med 3 % rente. Hvis markedet stiger til 5 %, må noen kjøpe obligasjonen billigere for at den skal gi samme avkastning som nye.',
          order: 9
        },
        {
          id: 'risk-summary',
          type: 'keypoint',
          points: [
            'Obligasjoner er ikke risikofrie.',
            'Som investor må du vurdere både kredittrisiko og markedsforhold.',
            'Renterisiko er spesielt viktig i perioder med renteuro.'
          ],
          order: 10
        },
        {
          id: 'risk-quiz',
          type: 'quiz',
          question: 'Hvilken type obligasjon påvirkes MEST av renteendringer?',
          options: [
            'Kortsiktige obligasjoner',
            'Langsiktige obligasjoner',
            'Obligasjoner med høy kupong',
            'Alle påvirkes likt'
          ],
          correctAnswer: 1,
          explanation: 'Langsiktige obligasjoner er mer sensitive for renteendringer enn kortsiktige. Dette skyldes at flere fremtidige betalinger må diskonteres.',
          order: 11
        },
        {
          id: 'risk-reflection',
          type: 'reflection',
          question: 'Hvordan påvirkes obligasjoner av renteendringer?',
          order: 12
        }
      ]
    },
    {
      id: 'kredittrating',
      title: 'Kredittrating og markedsaktører',
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
      order: 6,
      content: [
        {
          id: 'rating-definition',
          type: 'definition',
          term: 'Kredittrating',
          definition: 'En vurdering av hvor sannsynlig det er at en låntaker (utsteder av obligasjon) vil tilbakebetale lånet sitt. Denne vurderingen gjøres av uavhengige ratingbyråer, og resultatet uttrykkes som en karakter – for eksempel AA, BBB, eller B-.',
          order: 1
        },
        {
          id: 'rating-agencies',
          type: 'heading',
          text: 'De viktigste ratingbyråene',
          level: 3,
          order: 2
        },
        {
          id: 'rating-agencies-list',
          type: 'list',
          items: [
            'Moody\'s',
            'Standard & Poor\'s (S&P)',
            'Fitch Ratings'
          ],
          ordered: false,
          order: 3
        },
        {
          id: 'rating-categories',
          type: 'table',
          headers: ['Kategori', 'S&P-eksempel', 'Beskrivelse'],
          rows: [
            ['Investment grade', 'AAA – BBB', 'Høy kredittverdighet'],
            ['Non-investment grade (high yield / junk bonds)', 'BB+ og nedover', 'Økt risiko for mislighold']
          ],
          order: 4
        },
        {
          id: 'rating-impact',
          type: 'heading',
          text: 'Hva betyr ratingen for obligasjonsinvestorer?',
          level: 3,
          order: 5
        },
        {
          id: 'rating-impact-points',
          type: 'keypoint',
          points: [
            'Høy rating → lav risiko → lavere rente',
            'Lav rating → høy risiko → høyere rente'
          ],
          order: 6
        },
        {
          id: 'rating-example',
          type: 'example',
          title: 'Eksempel: Rating og rente',
          content: 'Et selskap med rating BBB utsteder en obligasjon med 5 % rente.\nEt selskap med rating BB- tilbyr 7 %. Den høyere renten gjenspeiler økt risiko – og mulighet for tap.',
          order: 7
        },
        {
          id: 'norwegian-market',
          type: 'heading',
          text: 'Markedsaktører i det norske obligasjonsmarkedet',
          level: 3,
          order: 8
        },
        {
          id: 'market-platforms',
          type: 'text',
          text: 'I Norge er det særlig to plattformer for handel:\n• Oslo Børs: For børsnoterte obligasjoner\n• Nordic ABM: Alternativ markedsplass for mindre eller kortsiktige lån',
          order: 9
        },
        {
          id: 'market-actors',
          type: 'list',
          items: [
            'Banker og forsikringsselskaper (store investorer)',
            'Kommuner og stat (utstedere)',
            'Næringslivet (særlig innen eiendom og energi)',
            'Private investorer (via fond eller megler)'
          ],
          ordered: false,
          order: 10
        },
        {
          id: 'rating-quiz',
          type: 'quiz',
          question: 'Hvilken rating tilsvarer høyest risiko?',
          options: ['AAA', 'BBB', 'BB+', 'C'],
          correctAnswer: 3,
          explanation: 'C-rating tilsvarer høyest risiko. Jo lavere bokstav og jo flere minustegn, desto høyere risiko.',
          order: 11
        }
      ]
    },
    {
      id: 'norsk-marked',
      title: 'Markedet for obligasjoner i Norge',
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
      order: 7,
      content: [
        {
          id: 'market-intro',
          type: 'text',
          text: 'Det norske obligasjonsmarkedet er en viktig del av kapitalmarkedet og brukes aktivt av både næringsliv, banker og offentlige institusjoner for å finansiere seg. Selv om det er mindre enn aksjemarkedet, omsettes det for store beløp i obligasjoner hver dag.',
          order: 1
        },
        {
          id: 'market-platforms-table',
          type: 'table',
          headers: ['Marked', 'Beskrivelse'],
          rows: [
            ['Oslo Børs', 'Regulert markedsplass for obligasjoner. Offentlig noterte lån.'],
            ['Nordic ABM', 'Alternativ markedsplass for mindre emisjoner og enklere krav til dokumentasjon.']
          ],
          order: 2
        },
        {
          id: 'bond-types-heading',
          type: 'heading',
          text: 'Typer obligasjoner i det norske markedet',
          level: 3,
          order: 3
        },
        {
          id: 'bond-types-table',
          type: 'table',
          headers: ['Type obligasjon', 'Beskrivelse'],
          rows: [
            ['Statsobligasjoner', 'Utstedt av staten. Lav risiko. Brukes til styring av rentenivået.'],
            ['Kommunelån', 'Utstedt av kommuner og fylkeskommuner. Trygge og forutsigbare.'],
            ['Bankobligasjoner', 'Brukes av banker for å finansiere utlån. Kan være med eller uten fortrinnsrett.'],
            ['Foretakslån', 'Vanlig blant eiendomsselskaper, shipping og energiselskaper. Varierende risiko.'],
            ['High Yield-obligasjoner', 'Utstedt av selskaper med lav rating. Høy rente og høy risiko.'],
            ['Grønne obligasjoner', 'Øremerket bærekraftige prosjekter. Se neste seksjon.']
          ],
          order: 4
        },
        {
          id: 'emission-example',
          type: 'example',
          title: 'Eksempel på en obligasjonsutstedelse',
          content: 'Utsteder: Storebrand ASA\nVolum: NOK 1 000 000 000\nKupong: 3M NIBOR + 1,25 %\nForfall: 12.03.2027\nMarkedsplass: Nordic ABM',
          calculation: 'Dette betyr at investorer får en rente tilsvarende pengemarkedsrenten + 1,25 %, utbetalt hvert kvartal, og hovedstolen tilbakebetales i 2027.',
          order: 5
        },
        {
          id: 'investors-heading',
          type: 'heading',
          text: 'Hvem investerer i obligasjoner?',
          level: 3,
          order: 6
        },
        {
          id: 'investors-list',
          type: 'list',
          items: [
            'Pensjonskasser og forsikringsselskaper – søker stabil, lav risiko',
            'Sparebanker og fond – bruker obligasjoner for likviditet og sikkerhet',
            'Private investorer – ofte via obligasjonsfond',
            'Staten selv – gjennom ulike fond og plasseringer'
          ],
          ordered: false,
          order: 7
        },
        {
          id: 'market-video',
          type: 'video',
          title: 'Klipp fra faktisk obligasjonsannonse',
          duration: '2 min',
          placeholder: 'Video kommer snart',
          order: 8
        },
        {
          id: 'market-exercise',
          type: 'exercise',
          title: 'Oppgave: Analyser NST485',
          description: 'Forstå mest mulig om denne obligasjonen NST485. Undersøk vilkår, rating, og markedsforhold.',
          hint: 'Se etter informasjon om kupong, forfall, og kredittrating.',
          order: 9
        }
      ]
    },
    {
      id: 'gronne-obligasjoner',
      title: 'Grønne obligasjoner og bærekraftige lån',
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 20h10"></path><path d="M10 20c5.5-2.5.8-6.4 3-10"></path><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path></svg>',
      order: 8,
      content: [
        {
          id: 'green-intro',
          type: 'text',
          text: 'Obligasjonsmarkedet spiller en stadig viktigere rolle i det grønne skiftet. Flere selskaper, kommuner og statlige institusjoner bruker nå grønne obligasjoner for å finansiere prosjekter som bidrar til en bærekraftig utvikling.',
          order: 1
        },
        {
          id: 'green-definition',
          type: 'definition',
          term: 'Grønn obligasjon',
          definition: 'Et lån hvor pengene utelukkende skal brukes til miljøvennlige og bærekraftige prosjekter. Det er ikke renten som er "grønn" – det er formålet med lånet.',
          order: 2
        },
        {
          id: 'green-projects',
          type: 'list',
          items: [
            'Bygging av energieffektive bygg',
            'Fornybar energi (sol, vind, vann)',
            'Klimatilpasning og vanninfrastruktur',
            'Elektrifisering av transport'
          ],
          ordered: false,
          order: 3
        },
        {
          id: 'green-requirements',
          type: 'heading',
          text: 'Krav til grønne obligasjoner',
          level: 3,
          order: 4
        },
        {
          id: 'green-criteria',
          type: 'list',
          items: [
            'Tydelig bruk av midler – pengene må gå til grønne prosjekter',
            'Prosjektutvelgelse – må kunne begrunnes og dokumenteres',
            'Rapportering – må vise hva midlene faktisk brukes til',
            'Ekstern verifikasjon – mange innhenter uavhengige vurderinger (Second Party Opinion)'
          ],
          ordered: true,
          order: 5
        },
        {
          id: 'green-frameworks',
          type: 'text',
          text: 'Det finnes rammeverk som ICMA Green Bond Principles og EU-taksonomien som standardiserer hva som er grønt.',
          order: 6
        },
        {
          id: 'norway-green',
          type: 'heading',
          text: 'Grønne obligasjoner i Norge',
          level: 3,
          order: 7
        },
        {
          id: 'norway-green-facts',
          type: 'keypoint',
          points: [
            'Norske selskaper og kommuner er blant de mest aktive utstederne av grønne lån i Europa.',
            'Kommunalbanken, OBOS, Statkraft og BKK har alle brukt grønne obligasjoner.',
            'Oslo Børs har en egen grønn liste for obligasjoner som oppfyller kravene.'
          ],
          order: 8
        },
        {
          id: 'green-example',
          type: 'example',
          title: 'Eksempel: OBOS grønn obligasjon',
          content: 'Utsteder: OBOS\nVolum: NOK 600 mill\nFormål: Finansiere miljøvennlig boligprosjekt\nVerifisering: CICERO Shades of Green – mørkegrønn vurdering\nMarkedsplass: Oslo Børs',
          order: 9
        },
        {
          id: 'green-benefits',
          type: 'table',
          headers: ['Fordel for utsteder', 'Fordel for investor'],
          rows: [
            ['Signaliserer bærekraft', 'Mulighet for grønn portefølje'],
            ['Tiltrekker flere investorer', 'Ofte like betingelser som vanlige lån'],
            ['Mulig tilgang på bedre vilkår', 'ESG-rapportering og transparens']
          ],
          order: 10
        },
        {
          id: 'green-challenges',
          type: 'heading',
          text: 'Utfordringer og diskusjoner',
          level: 3,
          order: 11
        },
        {
          id: 'green-challenges-list',
          type: 'list',
          items: [
            'Hvordan sikre at prosjektene faktisk er grønne?',
            'Fare for grønnvasking – når prosjekter pyntes på for å få billig finansiering',
            'Standardisering er på vei (EU-taksonomi, CSRD) for å sikre sammenlignbarhet'
          ],
          ordered: false,
          order: 12
        },
        {
          id: 'green-video',
          type: 'video',
          title: 'Intro til grønne obligasjoner',
          duration: '2 min',
          placeholder: 'Video kommer snart',
          order: 13
        },
        {
          id: 'green-quiz',
          type: 'quiz',
          question: 'Hva gjør en obligasjon "grønn"?',
          options: [
            'Lavere rente enn vanlige obligasjoner',
            'Pengene brukes til miljøvennlige prosjekter',
            'Den er utstedt av miljøorganisasjoner',
            'Den har kortere løpetid'
          ],
          correctAnswer: 1,
          explanation: 'En grønn obligasjon skiller seg ut ved at pengene utelukkende skal brukes til miljøvennlige og bærekraftige prosjekter. Det er formålet, ikke renten, som gjør den "grønn".',
          order: 14
        },
        {
          id: 'green-reflection',
          type: 'reflection',
          question: 'Hva er utfordringen med grønnvasking i obligasjonsmarkedet?',
          order: 15
        }
      ]
    },
    {
      id: 'oppsummering',
      title: 'Oppsummering og refleksjon',
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>',
      order: 9,
      content: [
        {
          id: 'summary-congratulations',
          type: 'text',
          text: 'Gratulerer! Du har nå fått en grundig innføring i obligasjonsmarkedet – både hvordan det fungerer teknisk, og hvordan det spiller en viktig rolle i bærekraftig finansiering.',
          emphasis: 'important',
          order: 1
        },
        {
          id: 'key-takeaways',
          type: 'heading',
          text: 'Viktige punkter å ta med deg',
          level: 3,
          order: 2
        },
        {
          id: 'key-points',
          type: 'list',
          items: [
            'En obligasjon er et lån – du låner ut penger og får tilbakebetaling med renter.',
            'Obligasjoner har fast struktur – pålydende, kupong, løpetid og forfall.',
            'Prisen bestemmes av nåverdi – og varierer med rentenivå og risiko.',
            'Effektiv rente (YTM) er det viktigste målet for avkastning.',
            'Risiko varierer – kredittrisiko, renterisiko og likviditet må vurderes.',
            'Kredittrating hjelper deg å vurdere låntakers evne til å betale.',
            'Norge har et aktivt obligasjonsmarked – via Oslo Børs og Nordic ABM.',
            'Grønne obligasjoner brukes til å finansiere bærekraftige prosjekter – og gir både miljømessig og økonomisk effekt.'
          ],
          ordered: false,
          order: 3
        },
        {
          id: 'reflection-questions',
          type: 'heading',
          text: 'Refleksjonsspørsmål',
          level: 3,
          order: 4
        },
        {
          id: 'reflection-1',
          type: 'reflection',
          question: 'Hva er forskjellen på kupongrente og effektiv rente?',
          order: 5
        },
        {
          id: 'reflection-2',
          type: 'reflection',
          question: 'Hvordan påvirkes obligasjonspriser av renteendringer?',
          order: 6
        },
        {
          id: 'reflection-3',
          type: 'reflection',
          question: 'Hvorfor er det viktig med uavhengig verifikasjon i grønne obligasjoner?',
          order: 7
        },
        {
          id: 'reflection-4',
          type: 'reflection',
          question: 'Hvilken type obligasjon ville du selv vurdert å investere i – og hvorfor?',
          order: 8
        }
      ]
    },
    {
      id: 'durasjon',
      title: 'Durasjon – obligasjonens følsomhet for renteendringer',
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
      order: 10,
      content: [
        {
          id: 'duration-intro',
          type: 'text',
          text: 'Når du investerer i obligasjoner, er det viktig ikke bare å vite hvilken avkastning du kan forvente – men også hvor følsom obligasjonen er for endringer i rentenivået. Det er her begrepet durasjon kommer inn.',
          order: 1
        },
        {
          id: 'duration-definition',
          type: 'definition',
          term: 'Durasjon',
          definition: 'Et mål på obligasjonens rente-eksponering, altså hvor mye obligasjonens pris vil endre seg dersom renten i markedet endres. Durasjonen forteller deg hvor "langt fram i tid" du i gjennomsnitt får pengene dine tilbake.',
          order: 2
        },
        {
          id: 'duration-mechanism',
          type: 'keypoint',
          points: [
            'Jo høyere durasjon, desto mer faller obligasjonsprisen når renten stiger.',
            'Jo lavere durasjon, desto mindre er obligasjonen påvirket av renteendringer.'
          ],
          order: 3
        },
        {
          id: 'duration-types',
          type: 'table',
          headers: ['Type', 'Forklaring'],
          rows: [
            ['Macaulay durasjon', 'Vektet gjennomsnittstid til kontantstrømmene kommer'],
            ['Modifisert durasjon', 'Måler prosentvis prisendring ved én prosentpoeng renteendring']
          ],
          order: 4
        },
        {
          id: 'duration-formula',
          type: 'formula',
          formula: 'Modifisert durasjon = Macaulay durasjon / (1 + r)',
          order: 5
        },
        {
          id: 'duration-example',
          type: 'example',
          title: 'Eksempel: Durasjon og prisendring',
          content: 'Du har en obligasjon med Macaulay durasjon på 5 år og markedsrenten er 4 %.',
          calculation: 'Den modifiserte durasjonen er da: 5 / (1 + 0,04) ≈ 4,81\n\nDet betyr at hvis renten stiger med 1 prosentpoeng, faller obligasjonens pris med ca. 4,81 %.',
          order: 6
        },
        {
          id: 'duration-factors',
          type: 'table',
          headers: ['Faktor', 'Effekt på durasjon'],
          rows: [
            ['Lenger løpetid', 'Høyere durasjon'],
            ['Lavere kupongrente', 'Høyere durasjon'],
            ['Høyere markedsrente', 'Lavere durasjon'],
            ['Høy diskontering mot slutten', 'Mer følsom']
          ],
          order: 7
        },
        {
          id: 'duration-utility',
          type: 'heading',
          text: 'Hvorfor er durasjon nyttig?',
          level: 3,
          order: 8
        },
        {
          id: 'duration-benefits',
          type: 'list',
          items: [
            'Risikovurdering: Du kan måle renteeksponeringen i porteføljen din',
            'Sammenligning: To obligasjoner med lik YTM kan ha ulik durasjon',
            'Forvaltning: Brukes i rentefond og obligasjonsstrategier for å posisjonere seg mot renteendringer'
          ],
          ordered: false,
          order: 9
        },
        {
          id: 'duration-summary',
          type: 'keypoint',
          points: [
            'Durasjon er obligasjonens "rentevarighet".',
            'Den sier noe om hvor stor kursendringen blir ved rentebevegelser.',
            'Det er et viktig verktøy for investorer som vil forstå risikoen i obligasjonsmarkedet.'
          ],
          order: 10
        },
        {
          id: 'next-steps',
          type: 'heading',
          text: 'Neste steg',
          level: 3,
          order: 11
        },
        {
          id: 'next-steps-list',
          type: 'list',
          items: [
            'Gå tilbake og repeter eksempler og illustrasjoner du er usikker på.',
            'Prøv regneoppgavene eller flervalgsquiz.',
            'Tenk på hvordan obligasjoner henger sammen med andre tema i finans – som verdsettelse, kapitalstruktur og bærekraftig finansiering.'
          ],
          ordered: false,
          order: 12
        },
        {
          id: 'final-reminder',
          type: 'text',
          text: 'Obligasjoner er ikke bare en "trygg investering" – de er et komplekst, men kraftfullt verktøy for å forstå finansiering, risiko og bærekraft i praksis.',
          emphasis: 'important',
          order: 13
        }
      ]
    }
  ]
};