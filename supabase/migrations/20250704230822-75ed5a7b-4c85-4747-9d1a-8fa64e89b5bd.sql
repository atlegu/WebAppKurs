-- Restore original 4.7 content from module content
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

[Hva er grønne obligasjoner (fra Nordea)](https://www.nordea.com/no/nyheter/hva-er-gronne-obligasjoner)',
            'video', 'Introduksjon til grønne obligasjoner (4 min)',
            'reflection', 'Hvordan kan grønne obligasjoner bidra til det grønne skiftet, og hva er risikoen for grønnvasking?'
        )
    )
)
WHERE title = '4.7 Grønne obligasjoner og bærekraftige lån';