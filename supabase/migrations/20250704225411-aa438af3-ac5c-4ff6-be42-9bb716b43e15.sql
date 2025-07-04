-- Fix the title to just "Oppgaver" so the balance game appears
UPDATE sub_modules 
SET title = 'Oppgaver'
WHERE title = '2.6 Oppgaver' AND EXISTS (
    SELECT 1 FROM modules m WHERE m.id = module_id AND m.order_index = 2
);