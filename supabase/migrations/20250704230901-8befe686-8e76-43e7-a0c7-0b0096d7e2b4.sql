-- Restore original 4.2 content from module content
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', 'Obligasjonsstruktur og nøkkeltall',
            'type', 'lesson',
            'content', '**Komponenter du må kjenne til:**

**Pålydende (hovedstol):** Det opprinnelige lånebeløpet, f.eks. 1 000 kr

**Kupongrente:** Den faste årlige renten, f.eks. 5%

**Kupongbeløp:** Renteutbetaling per år = pålydende × kupongrente

**Løpetid:** Hvor lenge lånet varer – til forfallsdato

**Forfallsdato:** Datoen når hovedstolen skal betales tilbake

**Kurs:** Markedspris for obligasjonen (ofte i prosent av pålydende)

**Effektiv rente (YTM):** Faktisk avkastning over hele perioden, inkludert kurs og kuponger

**Eksempel:**
Du kjøper en obligasjon med:
- Pålydende: 1 000 kr
- Kupongrente: 4%
- Løpetid: 5 år

Du mottar 40 kr per år i rente i fem år (totalt 200 kr), og 1 000 kr ved forfall.

📌 Disse vilkårene bestemmer obligasjonens risiko og avkastning',
            'video', 'Slik leser du et obligasjonsvilkår (3 min)',
            'exercise', 'Beregn årlig kupongbetaling for en obligasjon på 5 000 kr med 6% kupongrente'
        )
    )
)
WHERE title = '4.2 Obligasjonsstruktur og nøkkeltall';