-- Update module 4 (Obligasjoner) with properly formatted content
UPDATE public.modules 
SET content = '{
  "learning_objectives": [
    "Forklare hva en obligasjon er, og hvordan obligasjonsmarkedet fungerer",
    "Regne på pris, avkastning og risiko for ulike typer obligasjoner", 
    "Forstå forholdet mellom rente, løpetid og kurs",
    "Kjenne til risikofaktorer som kredittrisiko og renterisiko",
    "Forstå hva grønne obligasjoner er, og hvordan de brukes i bærekraftig finansiering"
  ],
  "sections": [
    {
      "title": "📗 Seksjon 1: Hva er en obligasjon?",
      "type": "content",
      "content": "En obligasjon er et verdipapir som dokumenterer at noen har lånt ut penger til en annen part – vanligvis en stat, kommune, bank eller et selskap. Den som låner ut penger (investoren) får til gjengjeld jevnlige rentebetalinger og tilbakebetaling av hovedstolen (lånebeløpet) ved forfall.\\n\\nTenk på obligasjonen som en kontrakt:\\n\"Du låner meg 1 000 kroner i 5 år. Jeg betaler deg 50 kroner i året i rente, og så får du hele beløpet tilbake til slutt.\"\\n\\n**🔁 Hovedforskjellen på aksjer og obligasjoner:**\\n• En aksje er eierandel i et selskap\\n• En obligasjon er et lån til selskapet\\n\\nSom obligasjonseier har du ikke stemmerett eller eierposisjon – men du har forrang til å få pengene dine tilbake. Derfor regnes obligasjoner som mindre risikable enn aksjer, men de har som regel også lavere forventet avkastning.",
      "video": "Video (2–3 min): \"Obligasjoner forklart på 2 minutter\"",
      "exercise": "Minioppgave: Hvem låner hva – match utsteder og kjøper"
    },
    {
      "title": "📗 Seksjon 2: Obligasjonsstruktur og nøkkeltall",
      "type": "content", 
      "content": "Når du kjøper en obligasjon, er det noen faste komponenter du må kjenne til. Disse bestemmer hvordan avkastning og risiko ser ut:\\n\\n**Begrep og forklaringer:**\\n• **Pålydende (hovedstol):** Det opprinnelige lånebeløpet, f.eks. 1 000 kr\\n• **Kupongrente:** Den faste årlige renten, f.eks. 5 %\\n• **Kupongbeløp:** Renteutbetaling per år = pålydende × kupongrente\\n• **Løpetid:** Hvor lenge lånet varer – til forfallsdato\\n• **Forfallsdato:** Datoen når hovedstolen skal betales tilbake\\n• **Kurs:** Markedspris for obligasjonen (ofte i prosent av pålydende)\\n• **Effektiv rente (YTM):** Faktisk avkastning over hele perioden",
      "video": "Video (3 min): \"Slik leser du et obligasjonsvilkår\"",
      "exercise": "Fyll inn kupongrenten. Beregn nåverdien av obligasjonen."
    },
    {
      "title": "📗 Seksjon 3: Pris og avkastning på obligasjoner", 
      "type": "content",
      "content": "**💡 Hvordan fastsettes prisen på en obligasjon?**\\nObligasjoner utstedes vanligvis til en pålydende verdi (ofte 1 000 kr). Men på annenhåndsmarkedet kan de omsettes til priser over eller under pari – avhengig av endringer i markedsrenten og risiko.\\n\\nEn obligasjonspris er rett og slett nåverdien av fremtidige kontantstrømmer – altså kupongbetalinger + tilbakebetaling av hovedstol – diskontert med markedsrenten.",
      "reflection": "Hvorfor handles noen obligasjoner over pari?",
      "exercise": "En obligasjon pålydende kr 5000, som innløses etter 10 år, betales det ut 7 % rente hvert år. Beregn markedsverdien når man alternativt kan plassere pengene til 5 %."
    },
    {
      "title": "📗 Seksjon 4: Effektiv rente (Yield to Maturity – YTM)",
      "type": "content",
      "content": "**💡 Hva er effektiv rente?**\\nEffektiv rente – eller Yield to Maturity (YTM) – er et nøkkeltall som viser den faktiske, årlige avkastningen du får dersom du kjøper en obligasjon i dag og holder den til forfall. Den tar hensyn til:\\n• Kupongbetalingene\\n• Hvor mye du betaler for obligasjonen\\n• Hvor lang tid det er igjen til forfall",
      "video": "Video (3 min): Eksempel med utregning og tolkning",
      "exercise": "Obligasjon A og obligasjon B forfaller begge om to år. Beregn effektiv rente for begge."
    },
    {
      "title": "📗 Seksjon 5: Risikofaktorer ved obligasjoner",
      "type": "content",
      "content": "Selv om obligasjoner ofte oppfattes som trygge investeringer, er det viktig å forstå at de også innebærer risiko. Ulike typer obligasjoner har forskjellig risikoprofil.\\n\\n**⚠️ Hovedtyper risiko ved obligasjoner:**\\n• **Kredittrisiko:** Risikoen for at utsteder ikke klarer å betale renter eller hovedstol\\n• **Renterisiko:** Risikoen for at verdien faller når renten i markedet stiger\\n• **Likviditetsrisiko:** Risikoen for at du ikke får solgt obligasjonen til en rettferdig pris\\n• **Inflasjonsrisiko:** Risikoen for at realverdien av betalingene reduseres over tid\\n• **Valutarisiko:** Gjelder obligasjoner i utenlandsk valuta",
      "reflection": "Hvordan påvirkes obligasjoner av renteendringer?"
    },
    {
      "title": "📗 Seksjon 6: Kredittrating og markedsaktører", 
      "type": "content",
      "content": "**🧾 Hva er kredittrating?**\\nKredittrating er en vurdering av hvor sannsynlig det er at en låntaker (utsteder av obligasjon) vil tilbakebetale lånet sitt. Denne vurderingen gjøres av uavhengige ratingbyråer.\\n\\n**🏢 De viktigste ratingbyråene:**\\n• Moody''s\\n• Standard & Poor''s (S&P)\\n• Fitch Ratings\\n\\nDisse gir karakterer i ulike skalaer:\\n• **Investment grade (AAA – BBB):** Høy kredittverdighet\\n• **Non-investment grade/high yield/junk bonds (BB+ og nedover):** Økt risiko"
    },
    {
      "title": "🌱 Seksjon 7: Grønne obligasjoner og bærekraftige lån",
      "type": "content",
      "content": "Obligasjonsmarkedet spiller en stadig viktigere rolle i det grønne skiftet. Flere selskaper, kommuner og statlige institusjoner bruker nå grønne obligasjoner for å finansiere prosjekter som bidrar til en bærekraftig utvikling.\\n\\n**🌍 Hva er en grønn obligasjon?**\\nEn grønn obligasjon er et lån hvor pengene utelukkende skal brukes til miljøvennlige og bærekraftige prosjekter. Dette kan for eksempel være:\\n• Bygging av energieffektive bygg\\n• Fornybar energi (sol, vind, vann)\\n• Klimatilpasning og vanninfrastruktur\\n• Elektrifisering av transport",
      "video": "Video (2 min): Intro til grønne obligasjoner",
      "reflection": "Hva er utfordringen med grønnvasking i obligasjonsmarkedet?",
      "download": "Les om Grønne Obligasjoner fra Aksje Norge"
    },
    {
      "title": "🧭 Seksjon 8: Oppsummering og refleksjon",
      "type": "content",
      "content": "Gratulerer! Du har nå fått en grundig innføring i obligasjonsmarkedet – både hvordan det fungerer teknisk, og hvordan det spiller en viktig rolle i bærekraftig finansiering.\\n\\n**🧱 Viktige punkter å ta med deg:**\\n• En obligasjon er et lån – du låner ut penger og får tilbakebetaling med renter\\n• Obligasjoner har fast struktur – pålydende, kupong, løpetid og forfall\\n• Prisen bestemmes av nåverdi – og varierer med rentenivå og risiko\\n• Effektiv rente (YTM) er det viktigste målet for avkastning\\n• Risiko varierer – kredittrisiko, renterisiko og likviditet må vurderes\\n• Grønne obligasjoner brukes til å finansiere bærekraftige prosjekter"
    },
    {
      "title": "📗 Seksjon 9: Durasjon – obligasjonens følsomhet for renteendringer",
      "type": "content",
      "content": "Når du investerer i obligasjoner, er det viktig ikke bare å vite hvilken avkastning du kan forvente – men også hvor følsom obligasjonen er for endringer i rentenivået. Det er her begrepet durasjon kommer inn.\\n\\n**📐 Hva er durasjon?**\\nDurasjon er et mål på obligasjonens rente-eksponering, altså hvor mye obligasjonens pris vil endre seg dersom renten i markedet endres.\\n\\nDurasjonen forteller deg hvor \"langt fram i tid\" du i gjennomsnitt får pengene dine tilbake.\\n\\n**📉 Hvordan fungerer det?**\\n• Jo høyere durasjon, desto mer faller obligasjonsprisen når renten stiger\\n• Jo lavere durasjon, desto mindre er obligasjonen påvirket av renteendringer",
      "selftest": true,
      "download": "Løsningsforslag til oppgavesett"
    }
  ]
}'::jsonb
WHERE order_index = 4 AND course_id IN (SELECT id FROM public.courses WHERE title = 'Bærekraftig Foretaksfinans');