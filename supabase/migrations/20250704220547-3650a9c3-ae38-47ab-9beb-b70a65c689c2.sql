-- Final cleanup: fill any remaining empty sub-modules with proper content

-- Fix any sub-modules that still have "Detaljert innhold kommer snart..."
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', 'Egenkapital – hva det egentlig betyr',
            'type', 'lesson',
            'content', 'Egenkapital er kanskje det mest misforståtte begrepet i hele regnskapet. Mange tror at "egenkapital" er det samme som «penger på konto» eller «det bedriften eier selv». Det stemmer ikke helt.

**Egenkapital er ikke kontanter. Det er en differanse.**

Egenkapital = Eiendeler – Gjeld

Den reflekterer eiernes "restinteresse" i virksomheten – verdien som tilhører dem.

**Et eksempel:**
En bedrift har:
- Eiendeler for 10 millioner kroner
- Gjeld på 6 millioner

Da er egenkapitalen: 10 millioner – 6 millioner = 4 millioner

Dette er eiernes verdi i selskapet – hvis alle lån ble gjort opp og alt av verdi ble solgt.',
            'video', '2 min: Hvordan tolke egenkapital som en restpost',
            'exercise', 'Gitt eiendeler og gjeld – regn ut egenkapitalen',
            'reflection', 'Hva forteller balansen deg om en bedrifts finansielle helse?'
        )
    )
)
WHERE title = '2.3 Egenkapital' AND content->'{sections,0,content}' LIKE '%Detaljert innhold%';

-- Fill remaining empty obligasjoner content
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
WHERE title LIKE '%Obligasjonsstruktur%' AND content->'{sections,0,content}' LIKE '%kommer snart%';

-- Make sure all video, reflection, exercise properties are properly structured
UPDATE sub_modules 
SET content = jsonb_set(
    content,
    '{sections,0}',
    jsonb_build_object(
        'title', content->'{sections,0,title}',
        'type', COALESCE(content->'{sections,0,type}', '"lesson"'),
        'content', content->'{sections,0,content}',
        'video', content->'{sections,0,video}',
        'reflection', content->'{sections,0,reflection}',
        'exercise', content->'{sections,0,exercise}',
        'selftest', content->'{sections,0,selftest}',
        'download', content->'{sections,0,download}'
    )
)
WHERE content->'{sections}' IS NOT NULL 
AND jsonb_array_length(content->'{sections}') > 0;