-- Update all other modules with reflection questions to use ?? format

-- Update 4.1 (Obligasjoner)
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', 'Hva er en obligasjon?',
            'type', 'lesson',
            'content', '**En obligasjon er et lån i verdipapirform**

En obligasjon er et verdipapir som dokumenterer at noen har lånt ut penger til en annen part – vanligvis en stat, kommune, bank eller et selskap. Den som låner ut penger (investoren) får til gjengjeld jevnlige rentebetalinger og tilbakebetaling av hovedstolen ved forfall.

Tenk på obligasjonen som en kontrakt: "Du låner meg 1 000 kroner i 5 år. Jeg betaler deg 50 kroner i året i rente, og så får du hele beløpet tilbake til slutt."

**Hovedforskjellen på aksjer og obligasjoner:**
- En aksje er eierandel i et selskap
- En obligasjon er et lån til selskapet

Som obligasjonseier har du ikke stemmerett eller eierposisjon – men du har forrang til å få pengene dine tilbake. Derfor regnes obligasjoner som mindre risikable enn aksjer, men de har som regel også lavere forventet avkastning.

**Hvem utsteder obligasjoner:**
- Staten (statsobligasjoner)
- Kommuner og fylker (kommunelån)
- Selskaper (foretakslån, high yield-lån)
- Banker (obligasjoner med fortrinnsrett)

📌 Obligasjoner gir forutsigbare renteutbetalinger og lavere risiko enn aksjer

?? Tenk på en situasjon hvor du har lånt ut penger til en venn. Hvordan ligner dette på en obligasjon?',
            'video', 'Obligasjoner forklart på 2 minutter (3 min)'
        )
    )
)
WHERE id = '2f3d7925-fb5f-4555-8bde-2ca34415fe8a';

-- Update 4.5 (Risikofaktorer ved obligasjoner)
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', 'Risikofaktorer ved obligasjoner',
            'type', 'lesson',
            'content', '**Hovedtyper risiko ved obligasjoner:**

**Kredittrisiko:** Risikoen for at utsteder ikke klarer å betale renter eller hovedstol
- Eksempel: Et selskap går konkurs før lånet forfaller

**Renterisiko:** Risikoen for at verdien faller når renten i markedet stiger
- Eksempel: Du eier en obligasjon med fast 3% rente når markedet stiger til 5%

**Likviditetsrisiko:** Risikoen for at du ikke får solgt obligasjonen til en rettferdig pris
- Eksempel: Lav omsetning eller spesialtilpasset obligasjon

**Inflasjonsrisiko:** Risikoen for at realverdien av betalingene reduseres over tid
- Eksempel: Du mottar fast rente, men inflasjonen stiger

**Valutarisiko:** Gjelder obligasjoner i utenlandsk valuta
- Eksempel: Valutasvingninger kan påvirke avkastningen i NOK

**Hvordan påvirker risiko pris og rente?**
- Høy risiko → høyere effektiv rente (investoren krever "risikopremie")
- Statsobligasjoner har normalt lavest risiko og lavest rente
- High yield-obligasjoner har høy risiko og høy potensiell avkastning

📌 Langsiktige obligasjoner påvirkes mer av renteendringer enn kortsiktige

?? Hvorfor tror du at 10-årige obligasjoner reagerer sterkere på renteendringer enn 1-årige obligasjoner?',
            'video', 'Obligasjonsrisiko forklart (4 min)'
        )
    )
)
WHERE id = 'd69caf65-5e26-4107-b0f4-e707c3ceac01';

-- Update 4.7 (Grønne obligasjoner)
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', 'Grønne obligasjoner og bærekraftige lån',
            'type', 'lesson',
            'content', '**Hva er en grønn obligasjon?**

En grønn obligasjon er et lån hvor pengene utelukkende skal brukes til miljøvennlige og bærekraftige prosjekter. Det er ikke renten som er "grønn" – det er formålet med lånet.

**Typiske grønne prosjekter:**
- Bygging av energieffektive bygg
- Fornybar energi (sol, vind, vann)
- Klimatilpasning og vanninfrastruktur
- Elektrifisering av transport

**Krav til grønne obligasjoner:**
- **Tydelig bruk av midler:** Pengene må gå til grønne prosjekter
- **Prosjektutvelgelse:** Må kunne begrunnes og dokumenteres
- **Rapportering:** Må vise hva midlene faktisk brukes til
- **Ekstern verifikasjon:** Uavhengige vurderinger (Second Party Opinion)

**Grønne obligasjoner i Norge:**
Norske selskaper og kommuner er blant de mest aktive utstederne i Europa. Kommunalbanken, OBOS, Statkraft og BKK har alle brukt grønne obligasjoner.

**Fordeler:**
- For utsteder: Signaliserer bærekraft, tiltrekker flere investorer
- For investor: Mulighet for grønn portefølje, ESG-rapportering

**Utfordringer:**
- Sikre at prosjektene faktisk er grønne
- Fare for grønnvasking
- Behov for standardisering (EU-taksonomi, CSRD)

📌 Grønne obligasjoner kobler kapitalmarkedet med bærekraftige prosjekter

**Nyttige lenker:**

[Grønne obligasjoner hos Aksje Norge](https://aksjenorge.no/aktuelt/2019/06/25/greenbonds/)

[Hva er grønne obligasjoner (fra Nordea)](https://www.nordea.com/no/nyheter/hva-er-gronne-obligasjoner)

?? Hvordan kan grønne obligasjoner bidra til det grønne skiftet, og hva er risikoen for grønnvasking?',
            'video', 'Introduksjon til grønne obligasjoner (4 min)'
        )
    )
)
WHERE id = '217e4381-61dc-47cb-aa93-fd23d9dfc500';