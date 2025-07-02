-- Update Module 4 (Obligasjoner) with detailed content - fix apostrophe issues
UPDATE public.modules 
SET 
  description = 'Forstå obligasjonsmarkedet og bærekraftige gjeldsinstrumenter',
  content = '{
    "learning_objectives": [
      "Forklare hva en obligasjon er, og hvordan obligasjonsmarkedet fungerer",
      "Regne på pris, avkastning og risiko for ulike typer obligasjoner",
      "Forstå forholdet mellom rente, løpetid og kurs",
      "Kjenne til risikofaktorer som kredittrisiko og renterisiko",
      "Forstå hva grønne obligasjoner er, og hvordan de brukes i bærekraftig finansiering"
    ],
    "sections": [
      {
        "title": "Hva er en obligasjon?",
        "type": "lesson",
        "content": "**En obligasjon er et verdipapir som dokumenterer at noen har lånt ut penger til en annen part** – vanligvis en stat, kommune, bank eller et selskap. Den som låner ut penger (investoren) får til gjengjeld jevnlige rentebetalinger og tilbakebetaling av hovedstolen (lånebeløpet) ved forfall.\\n\\nTenk på obligasjonen som en kontrakt:\\n\"Du låner meg 1 000 kroner i 5 år. Jeg betaler deg 50 kroner i året i rente, og så får du hele beløpet tilbake til slutt.\"\\n\\n**🔁 Hovedforskjellen på aksjer og obligasjoner:**\\n- En aksje er eierandel i et selskap\\n- En obligasjon er et lån til selskapet\\n\\nSom obligasjonseier har du ikke stemmerett eller eierposisjon – men du har forrang til å få pengene dine tilbake. Derfor regnes obligasjoner som mindre risikable enn aksjer, men de har som regel også lavere forventet avkastning.\\n\\n**🧑‍💼 Hvem utsteder obligasjoner?**\\n- Staten (statsobligasjoner)\\n- Kommuner og fylker (kommunelån)\\n- Selskaper (foretakslån, high yield-lån)\\n- Banker (obligasjoner med fortrinnsrett)\\n\\n**📈 Hvorfor investerer folk i obligasjoner?**\\n- Forutsigbare renteutbetalinger (kuponger)\\n- Lavere risiko enn aksjer\\n- Diversifisering i porteføljen\\n- Sikkerhet og likviditet (særlig statsobligasjoner)",
        "video": "Obligasjoner forklart på 2 minutter (2-3 min)",
        "exercise": "Hvem låner hva – match utsteder og kjøper"
      },
      {
        "title": "Obligasjonsstruktur og nøkkeltall",
        "type": "lesson",
        "content": "Når du kjøper en obligasjon, er det noen faste komponenter du må kjenne til. Disse bestemmer hvordan avkastning og risiko ser ut:\\n\\n**Viktige begreper:**\\n- **Pålydende (hovedstol)**: Det opprinnelige lånebeløpet, f.eks. 1 000 kr\\n- **Kupongrente**: Den faste årlige renten, f.eks. 5 %\\n- **Kupongbeløp**: Renteutbetaling per år = pålydende × kupongrente\\n- **Løpetid**: Hvor lenge lånet varer – til forfallsdato\\n- **Forfallsdato**: Datoen når hovedstolen skal betales tilbake\\n- **Kurs**: Markedspris for obligasjonen (ofte i prosent av pålydende)\\n- **Effektiv rente (YTM)**: Faktisk avkastning over hele perioden, inkludert kurs og kuponger\\n\\n**🧾 Eksempel:**\\nDu kjøper en obligasjon med:\\n- Pålydende: 1 000 kr\\n- Kupongrente: 4 %\\n- Løpetid: 5 år\\n\\nDu mottar 40 kr per år i rente i fem år (totalt 200 kr), og 1 000 kr ved forfall.\\n\\nHvis du betalte nøyaktig 1 000 kr, er effektiv rente = kupongrente = 4 %.\\nMen hvis du betalte 950 kr, blir effektiv rente høyere.\\n\\n📌 **Kort oppsummert:**\\nEn obligasjon er et lån i verdipapirform. Du må kjenne til vilkårene – kupong, løpetid og kurs – for å forstå hva du investerer i.",
        "video": "Slik leser du et obligasjonsvilkår (3 min)",
        "exercise": "Fyll inn kupongrenten og beregn nåverdi av obligasjon"
      },
      {
        "title": "Pris og avkastning på obligasjoner",
        "type": "lesson",
        "content": "**💡 Hvordan fastsettes prisen på en obligasjon?**\\n\\nObligasjoner utstedes vanligvis til en pålydende verdi (ofte 1 000 kr). Men på annenhåndsmarkedet kan de omsettes til priser over eller under pari – avhengig av endringer i markedsrenten og risiko.\\n\\nEn obligasjonspris er rett og slett nåverdien av fremtidige kontantstrømmer – altså kupongbetalinger + tilbakebetaling av hovedstol – diskontert med markedsrenten.\\n\\n**📐 Formel for prising av obligasjon**\\nPris = (Kupong / (1 + r)^1) + (Kupong / (1 + r)^2) + … + (Kupong + Pålydende) / (1 + r)^n\\n\\nDer:\\n- Kupong = årlig renteutbetaling\\n- r = markedsrente\\n- n = antall år til forfall\\n\\n**🧾 Eksempel:**\\nDu vurderer å kjøpe en 3-årig obligasjon med:\\n- Pålydende: 1 000 kr\\n- Kupongrente: 5 % → gir 50 kr/år\\n- Markedsrente: 4 %\\n\\nDu diskonterer alle fremtidige betalinger med 4 %. Resultatet blir at obligasjonen har en markedsverdi over pari – ca. 1 026 kr.\\n\\n**📉 Sammenheng mellom pris og rente**\\n- 📉 Rente opp → Pris ned\\n- 📈 Rente ned → Pris opp\\n\\nDette skjer fordi en obligasjon med fast kupong blir mindre attraktiv når nye obligasjoner gir høyere rente, og mer attraktiv når nye gir lavere.\\n\\n📌 **Viktig å merke seg**\\n- Jo lengre løpetid, desto mer sensitiv er obligasjonen for renteendringer\\n- Prisendringer påvirker markedsverdien, men ikke kupongbeløpet",
        "video": "Obligasjonsprising med eksempler (4 min)",
        "reflection": "Hvorfor handles noen obligasjoner over pari?",
        "exercise": "Beregn markedsverdi for obligasjon med 7% rente og 5% markedsrente"
      },
      {
        "title": "Effektiv rente (Yield to Maturity – YTM)",
        "type": "lesson",
        "content": "**💡 Hva er effektiv rente?**\\n\\nEffektiv rente – eller Yield to Maturity (YTM) – er et nøkkeltall som viser den faktiske, årlige avkastningen du får dersom du kjøper en obligasjon i dag og holder den til forfall. Den tar hensyn til:\\n\\n- Kupongbetalingene\\n- Hvor mye du betaler for obligasjonen\\n- Hvor lang tid det er igjen til forfall\\n\\n**🧮 Effektiv rente sammenlignet med kupongrente:**\\n\\n**Situasjon og relasjon:**\\n- Kjøpskurs = pålydende → Effektiv rente = kupongrente\\n- Kjøpskurs < pålydende → Effektiv rente > kupongrente\\n- Kjøpskurs > pålydende → Effektiv rente < kupongrente\\n\\n**📐 Prinsipp for beregning:**\\nEffektiv rente er den renten r som løser ligningen:\\n\\nPris = Nåverdi av alle fremtidige betalinger\\nPris = ∑ (Kupong / (1 + r)^t) + (Pålydende / (1 + r)^n)\\n\\nDenne ligningen må løses numerisk, ofte med kalkulator eller regneark.\\n\\n**🧾 Eksempel:**\\nDu vurderer en obligasjon med:\\n- Pålydende: 1 000 kr\\n- Kupong: 5 % → 50 kr per år\\n- Løpetid: 3 år\\n- Pris: 960 kr\\n\\nMed regneark finner vi at effektiv rente ≈ 6,8 %. Dette er høyere enn kupongrenten fordi du kjøper obligasjonen med rabatt.",
        "video": "YTM-beregning med eksempel (3 min)",
        "exercise": "Finn effektiv rente på to ulike obligasjoner"
      },
      {
        "title": "Risikofaktorer ved obligasjoner",
        "type": "lesson",
        "content": "Selv om obligasjoner ofte oppfattes som trygge investeringer, er det viktig å forstå at de også innebærer risiko. Ulike typer obligasjoner har forskjellig risikoprofil, og som investor må du vite hva du kan tape – og hvorfor.\\n\\n**⚠️ Hovedtyper risiko ved obligasjoner:**\\n\\n**Kredittrisiko**\\n- Risikoen for at utsteder ikke klarer å betale renter eller hovedstol\\n- Eksempel: Et selskap går konkurs før lånet forfaller\\n\\n**Renterisiko**\\n- Risikoen for at verdien faller når renten i markedet stiger\\n- Eksempel: Du eier en obligasjon med fast 3 % rente når markedet stiger til 5 %\\n\\n**Likviditetsrisiko**\\n- Risikoen for at du ikke får solgt obligasjonen til en rettferdig pris\\n- Eksempel: Lav omsetning eller spesialtilpasset obligasjon\\n\\n**Inflasjonsrisiko**\\n- Risikoen for at realverdien av betalingene reduseres over tid\\n- Eksempel: Du mottar fast rente, men inflasjonen stiger\\n\\n**Valutarisiko**\\n- Gjelder obligasjoner i utenlandsk valuta\\n- Eksempel: Valutasvingninger kan påvirke avkastningen i NOK",
        "reflection": "Hvordan påvirkes obligasjoner av renteendringer?",
        "exercise": "Identifiser ulike typer risiko i obligasjonseksempler"
      },
      {
        "title": "Kredittrating og markedsaktører",
        "type": "lesson",
        "content": "**🧾 Hva er kredittrating?**\\n\\nKredittrating er en vurdering av hvor sannsynlig det er at en låntaker (utsteder av obligasjon) vil tilbakebetale lånet sitt. Denne vurderingen gjøres av uavhengige ratingbyråer, og resultatet uttrykkes som en karakter – for eksempel AA, BBB, eller B-.\\n\\n**🏢 De viktigste ratingbyråene:**\\n- Moody rating\\n- Standard & Poor rating (S&P)\\n- Fitch Ratings\\n\\nDisse gir karakterer i ulike skalaer, men hovedinndelingen er:\\n\\n**Investment grade (AAA – BBB)**: Høy kredittverdighet\\n**Non-investment grade/high yield/junk bonds (BB+ og nedover)**: Økt risiko for mislighold\\n\\n**💸 Hva betyr ratingen for obligasjonsinvestorer?**\\n- Høy rating → lav risiko → lavere rente\\n- Lav rating → høy risiko → høyere rente\\n\\nEn bedrift med svak økonomi må betale høyere rente for å tiltrekke seg investorer. Det betyr at du som investor må veie avkastning mot risiko.\\n\\n**📉 Eksempel:**\\n- Et selskap med rating BBB utsteder en obligasjon med 5 % rente\\n- Et selskap med rating BB- tilbyr 7 %. Den høyere renten gjenspeiler økt risiko",
        "exercise": "Hvilken rating tilsvarer høyest risiko?"
      },
      {
        "title": "Markedet for obligasjoner i Norge",
        "type": "lesson",
        "content": "Det norske obligasjonsmarkedet er en viktig del av kapitalmarkedet og brukes aktivt av både næringsliv, banker og offentlige institusjoner for å finansiere seg.\\n\\n**🧱 Typer obligasjoner i det norske markedet:**\\n\\n**Statsobligasjoner**\\n- Utstedt av staten. Lav risiko. Brukes til styring av rentenivået\\n\\n**Kommunelån**\\n- Utstedt av kommuner og fylkeskommuner. Trygge og forutsigbare\\n\\n**Bankobligasjoner**\\n- Brukes av banker for å finansiere utlån. Kan være med eller uten fortrinnsrett\\n\\n**Foretakslån**\\n- Vanlig blant eiendomsselskaper, shipping og energiselskaper. Varierende risiko\\n\\n**High Yield-obligasjoner**\\n- Utstedt av selskaper med lav rating. Høy rente og høy risiko\\n\\n**Grønne obligasjoner**\\n- Øremerket bærekraftige prosjekter\\n\\n**📊 Eksempel på en obligasjonsutstedelse:**\\n- Utsteder: Storebrand ASA\\n- Volum: NOK 1 000 000 000\\n- Kupong: 3M NIBOR + 1,25 %\\n- Forfall: 12.03.2027\\n- Markedsplass: Nordic ABM",
        "video": "Klipp fra faktisk obligasjonsannonse (2 min)",
        "exercise": "Analyser en virkelig obligasjonsemisjon"
      },
      {
        "title": "Grønne obligasjoner og bærekraftige lån",
        "type": "lesson",
        "content": "Obligasjonsmarkedet spiller en stadig viktigere rolle i det grønne skiftet. Flere selskaper, kommuner og statlige institusjoner bruker nå grønne obligasjoner for å finansiere prosjekter som bidrar til en bærekraftig utvikling.\\n\\n**🌍 Hva er en grønn obligasjon?**\\n\\nEn grønn obligasjon er et lån hvor pengene utelukkende skal brukes til miljøvennlige og bærekraftige prosjekter. Dette kan for eksempel være:\\n\\n- Bygging av energieffektive bygg\\n- Fornybar energi (sol, vind, vann)\\n- Klimatilpasning og vanninfrastruktur\\n- Elektrifisering av transport\\n\\nDet er ikke renten som er grønn – det er formålet med lånet.\\n\\n**🧾 Krav til grønne obligasjoner**\\n\\nFor å kunne kalles grønn, må obligasjonen normalt oppfylle følgende kriterier:\\n\\n- **Tydelig bruk av midler** – pengene må gå til grønne prosjekter\\n- **Prosjektutvelgelse** – må kunne begrunnes og dokumenteres\\n- **Rapportering** – må vise hva midlene faktisk brukes til\\n- **Ekstern verifikasjon** – mange innhenter uavhengige vurderinger",
        "video": "Intro til grønne obligasjoner (2 min)",
        "reflection": "Hva er utfordringen med grønnvasking i obligasjonsmarkedet?"
      },
      {
        "title": "Oppsummering og refleksjon",
        "type": "summary",
        "content": "Gratulerer! Du har nå fått en grundig innføring i obligasjonsmarkedet – både hvordan det fungerer teknisk, og hvordan det spiller en viktig rolle i bærekraftig finansiering.\\n\\n**🧱 Viktige punkter å ta med deg:**\\n\\n1. En obligasjon er et lån – du låner ut penger og får tilbakebetaling med renter\\n2. Obligasjoner har fast struktur – pålydende, kupong, løpetid og forfall\\n3. Prisen bestemmes av nåverdi – og varierer med rentenivå og risiko\\n4. Effektiv rente (YTM) er det viktigste målet for avkastning\\n5. Risiko varierer – kredittrisiko, renterisiko og likviditet må vurderes\\n6. Kredittrating hjelper deg å vurdere låntakers evne til å betale\\n7. Norge har et aktivt obligasjonsmarked – via Oslo Børs og Nordic ABM\\n8. Grønne obligasjoner brukes til å finansiere bærekraftige prosjekter\\n\\n**💬 Refleksjonsspørsmål:**\\n- Hva er forskjellen på kupongrente og effektiv rente?\\n- Hvordan påvirkes obligasjonspriser av renteendringer?\\n- Hvorfor er det viktig med uavhengig verifikasjon i grønne obligasjoner?\\n- Hvilken type obligasjon ville du selv vurdert å investere i – og hvorfor?",
        "selftest": true,
        "download": "Oppgavesett med løsningsforslag (PDF)"
      }
    ]
  }'::jsonb
WHERE order_index = 4 
AND course_id IN (SELECT id FROM public.courses WHERE title = 'Bærekraftig Foretaksfinans');