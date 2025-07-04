-- Final cleanup with proper JSONB casting

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
WHERE title = '2.3 Egenkapital' AND (content->>'{sections,0,content}') LIKE '%Detaljert innhold%';

-- Make sure all properties are properly structured for all sub-modules
UPDATE sub_modules 
SET content = jsonb_set(
    content,
    '{sections,0}',
    jsonb_build_object(
        'title', COALESCE(content->'{sections,0,title}', '"Ukjent tittel"'),
        'type', COALESCE(content->'{sections,0,type}', '"lesson"'),
        'content', COALESCE(content->'{sections,0,content}', '"Innhold kommer snart..."'),
        'video', content->'{sections,0,video}',
        'reflection', content->'{sections,0,reflection}',
        'exercise', content->'{sections,0,exercise}',
        'selftest', content->'{sections,0,selftest}',
        'download', content->'{sections,0,download}'
    )
)
WHERE content->'{sections}' IS NOT NULL 
AND jsonb_array_length(content->'{sections}') > 0;