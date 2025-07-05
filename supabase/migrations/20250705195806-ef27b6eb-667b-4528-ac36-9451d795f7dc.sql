-- Create sub-modules for Tidsverdien av penger (module order_index 3)
-- First get the module ID for "Tidsverdien av penger"
INSERT INTO public.sub_modules (module_id, title, order_index, content) 
SELECT 
    modules.id,
    sub_module_data.title,
    sub_module_data.order_index,
    sub_module_data.content::jsonb
FROM modules,
(VALUES 
    ('3.1 Introduksjon', 1, '{"sections": [{"title": "Introduksjon til tidsverdien av penger", "type": "content", "content": "Tidsverdien av penger er et av de viktigste konseptene i finans. En krone i dag er verdt mer enn en krone i morgen på grunn av rentens kraft."}]}'),
    ('3.2 Slutt- og nåverdi av enkelt beløp', 2, '{"sections": [{"title": "Slutt- og nåverdi av enkelt beløp", "type": "content", "content": "Lær hvordan du beregner fremtidsverdi og nåverdi av enkeltbeløp med rentesrente-formelen."}]}'),
    ('3.3 Slutt- og nåverdi av flere beløp', 3, '{"sections": [{"title": "Slutt- og nåverdi av flere beløp", "type": "content", "content": "Når du har flere kontantstrømmer på forskjellige tidspunkt, må du beregne nåverdien av hver enkelt strøm."}]}'),
    ('3.4 Perpetuitet', 4, '{"sections": [{"title": "Perpetuitet", "type": "content", "content": "En perpetuitet er en uendelig serie av like store kontantstrømmer. Lær hvordan du verdsetter evigvarende kontantstrømmer."}]}'),
    ('3.5 Annuitet', 5, '{"sections": [{"title": "Annuitet", "type": "content", "content": "Annuiteter er like store betalinger over en bestemt periode. Dette er grunnlaget for låneberegninger og pensjonssparing."}]}'),
    ('3.6 Korte og lange renter', 6, '{"sections": [{"title": "Korte og lange renter", "type": "content", "content": "Forstå forskjellen mellom kortsiktige og langsiktige renter og hvordan rentekurven påvirker verdsettelse."}]}'),
    ('3.7 Nominell og reell rente', 7, '{"sections": [{"title": "Nominell og reell rente", "type": "content", "content": "Nominell rente er den oppgitte renten, mens reell rente tar hensyn til inflasjon. Lær Fisher-ligningen."}]}'),
    ('3.8 Serie og Annuitetslån', 8, '{"sections": [{"title": "Serie og Annuitetslån", "type": "content", "content": "Sammenlign serielån (avdrag + rente) med annuitetslån (like avdrag) og forstå forskjellen i kostnader."}]}'),
    ('3.9 Oppgaver', 9, '{"sections": [{"title": "Oppgaver", "type": "content", "content": "Praktiske oppgaver for å teste forståelsen av tidsverdien av penger."}]}')
) AS sub_module_data(title, order_index, content)
WHERE modules.title = 'Tidsverdien av penger' 
AND modules.order_index = 3;