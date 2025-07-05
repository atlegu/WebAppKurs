-- Update Module 1.3: Finansmarkedene i aksjon
UPDATE public.sub_modules 
SET 
  title = 'Finansmarkedene i aksjon',
  content = '{
    "sections": [
      {
        "title": "Fra klikk til handel",
        "type": "text",
        "content": "Når du trykker «Kjøp» i megler-appen, skjer det mer enn et enkelt tastetrykk. Ordren din sendes til ordreboken på Oslo Børs, et digitalt auksjonsbord der kjøpere legger inn bud og selgere legger inn tilbud. Dersom høyeste bud (bid) møter laveste tilbud (ask), blir det umiddelbart handel og prisen du ser på skjermen – siste omsatt kurs – justeres.\n\nGraden av aktivitet i ordreboken kalles **likviditet**. Jo flere ordrer på begge sider, desto smalere blir bid–ask-spreaden og desto lettere er det å handle store volum uten å flytte kursen. Tynne, illikvide aksjer kan derimot ha store sprang mellom bud og tilbud, slik at en markedsordre plutselig koster deg flere prosent ekstra.\n\n**Finansmarkedet er mer enn aksjer**\n\nObligasjoner er et verdipapir der du låner penger til en stat eller bedrift og får jevnlig rente (kupong). Prisen beveger seg motsatt av markedsrenten: stiger renten, faller obligasjonskursen. I Modul 4 dykker vi dypere ned i prising, risiko og grønne obligasjoner, men allerede nå er det nyttig å se at aksje- og obligasjonsmarkedet henger tett sammen: begge er kanaler som flytter kapital fra sparere til prosjekt-eiere, bare med ulik risiko- og avkastningsprofil.\n\n**Nøkkelbegreper:**\n• **Bid (bud):** Høyeste pris kjøpere vil betale\n• **Ask (tilbud):** Laveste pris selgere vil akseptere\n• **Spread:** Differansen mellom bid og ask\n• **Likviditet:** Hvor lett det er å handle uten å påvirke prisen\n• **Markedsordre:** Handel til beste tilgjengelige pris\n• **Limitordre:** Handel kun til spesifikk pris eller bedre"
      },
      {
        "title": "Video: Fra klikk til handel",
        "type": "video",
        "content": "",
        "video": "5-minutters video som følger en handelsordre fra klikk til utførelse. Starter med split-screen av student som kjøper Equinor-aksje mens kamera zoomer inn på ordreboken i sanntid. Forklarer matching-motoren, likviditet og spread med motion-graphics, demonstrerer hvordan fjerning av ordrer påvirker spread, og avslutter med lyninnføring i obligasjoner via whiteboard-animasjon."
      },
      {
        "title": "Interaktiv: Lek med likviditet",
        "type": "interactive",
        "content": "!component:liquidity-simulator\n\n**Utforsk hvordan likviditet påvirker handelskostnader:**\n\nBruk glidebrytere for å justere:\n• **Likviditetsnivå** - Antall ordrer i markedet\n• **Ordrestørrelse** - Hvor mye du vil handle\n• **Tidshorisont** - Hvor raskt du trenger å handle\n\nSe hvordan endringene påvirker:\n• Bid-ask spread\n• Forventet pris-påvirkning\n• Transaksjonskostnader\n\n*Pedagogisk poeng: Lav likviditet + stor ordre = høyere kostnader*"
      },
      {
        "title": "Case: Vipps vs. Apple Pay - Kampen om NFC-brikken",
        "type": "case",
        "content": "**Fintech-revolusjon i lommeboka**\n\nI 2024 åpnet EU for at andre aktører enn Apple kunne bruke iPhone-ens NFC-chip gratis i ti år. Vipps MobilePay utnyttet muligheten og lanserte «Tap med Vipps», verdens første reelle Apple Pay-alternativ på iPhone.\n\nSeks måneder etter lansering støttet tjenesten de fleste norske bank- og kredittkort, og selskapet planlegger Visa- og Mastercard-utvidelse innen midten av 2025.\n\n**Hvorfor er dette relevant for finans?**\n\nBetalingstjenester er en del av finansmarkedets infrastruktur. Når en ny aktør får tilgang til samme teknologi til lavere kostnad, kan:\n• Transaksjonsgebyrene falle\n• Bankenes marginer krympe\n• Konkurransen øke til fordel for forbrukerne\n• Nye forretningsmodeller oppstå\n\n**Spørsmål til ettertanke:**\nHvordan påvirker teknologiske endringer maktbalansen i finanssektoren? Hvem vinner og taper når monopoler brytes ned?"
      },
      {
        "title": "Selvtest: Sant eller usant?",
        "type": "quiz",
        "content": "**Test forståelsen din:**\n\n**Påstand:** \"En aksje som ikke er børsnotert kan fritt omsettes når som helst.\"\n\n**Ditt svar:** ☐ Sant ☐ Usant\n\n**Fasit:** **USANT**\n\nUnoterte aksjer kan selges, men handelen er ikke automatisk, må ofte godkjennes av styret eller øvrige eiere, og det finnes ingen kontinuerlig markedsplass. Dermed kan det ta tid og kreve høyere prisavslag for å finne en kjøper.\n\n**Tilleggsspørsmål:**\n1. Hva er forskjellen på bid og ask?\n2. Hvorfor øker spread når likviditeten faller?\n3. Hvorfor beveger obligasjonspriser seg motsatt av renten?\n\n*Svarene finner du i teksten over - eller i de kommende modulene!*"
      },
      {
        "title": "Oppsummering",
        "type": "summary",
        "content": "**🎯 Det viktigste du har lært:**\n\n• **Ordreboken** er hjertet i moderne aksjehandel - der bud møter tilbud\n• **Likviditet** bestemmer hvor dyrt det er å handle store volum\n• **Spread** (bid-ask) er din \"usynlige\" transaksjonskostnad\n• **Obligasjoner** og aksjer er begge kanaler for kapitalallokering\n• **Teknologi** endrer finanssektorens konkurranseforhold\n\n**🚀 Neste steg:**\nDu er nå klar for å utforske hvordan finans påvirker samfunn og miljø. I neste seksjon ser vi på sammenhengen mellom kapitalmarkeder, bærekraft og samfunnsansvar."
      }
    ]
  }'::jsonb
WHERE module_id = '27e4fe44-c2a0-4a3c-a021-1f3e9221ae23' 
AND order_index = 3;