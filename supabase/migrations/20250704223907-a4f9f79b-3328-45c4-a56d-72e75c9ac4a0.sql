-- Add learning objectives back to 5.1
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', '🎯 Læringsmål for modul 5: Aksjer og aksjeprising',
            'type', 'objectives',
            'content', '**Etter å ha fullført denne modulen skal du kunne:**

• Forstå aksjens rolle i finansiering og investeringsporteføljer
• Forklare prinsippene bak aksjeprising og hvorfor det er viktig  
• Utføre fundamental regnskapsanalyse som grunnlag for verdsettelse
• Anvende ulike verdsettelsesmodeller: DDM, FCFE, P/E, EV/EBITDA
• Sammenligne resultater fra flere metoder i en praktisk case
• Diskutere markedseffisiens og prisdannelse
• Integrere ESG-faktorer i aksjeanalyse

**📚 Moduloversikt:**
Denne modulen tar deg gjennom hele prosessen fra grunnleggende forståelse av aksjer til avanserte verdsettelsesteknikker som brukes av profesjonelle analytikere.'
        ),
        (content->'sections'->0)
    )
)
WHERE title = '5.1 Hva er en aksje?' AND EXISTS (
    SELECT 1 FROM modules m WHERE m.id = module_id AND m.order_index = 5
);