-- Restore original 4.6 content from module content
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', 'Kredittrating og markedsaktører',
            'type', 'lesson',
            'content', '**Hva er kredittrating?**

Kredittrating er en vurdering av hvor sannsynlig det er at en låntaker vil tilbakebetale lånet sitt. Denne vurderingen gjøres av uavhengige ratingbyråer og uttrykkes som karakterer.

**De viktigste ratingbyråene:**
- Moody''s
- Standard & Poor''s (S&P)
- Fitch Ratings

**Hovedinndelingen:**
- **Investment grade (AAA – BBB):** Høy kredittverdighet
- **Non-investment grade/High yield (BB+ og nedover):** Økt risiko for mislighold

**Hva betyr ratingen for investorer?**
- Høy rating → lav risiko → lavere rente
- Lav rating → høy risiko → høyere rente

**Det norske obligasjonsmarkedet:**

**To hovedmarkedsplasser:**
- **Oslo Børs:** Regulert markedsplass for børsnoterte obligasjoner
- **Nordic ABM:** Alternativ markedsplass for mindre eller kortsiktige lån

**Typiske aktører:**
- Banker og forsikringsselskaper (store investorer)
- Kommuner og stat (utstedere)
- Næringslivet (særlig innen eiendom og energi)
- Private investorer (via fond eller megler)

📌 Rating hjelper investorer med å vurdere hvem de låner penger til, men er ikke en garanti',
            'video', 'Kredittrating og det norske obligasjonsmarkedet (3 min)',
            'exercise', 'Hvilken type obligasjon ville du forvente har høyest rente: AAA-rated statsobligation eller BB-rated foretaksobligation? Forklar hvorfor.'
        )
    )
)
WHERE title = '4.6 Kredittrating og markedsaktører';