-- Remove duplicate Module 1.5 entry (the empty one)
DELETE FROM public.sub_modules 
WHERE module_id = '27e4fe44-c2a0-4a3c-a021-1f3e9221ae23' 
AND order_index = 5 
AND content->>'sections' = '[{"title":"Veien videre og hva du lærer i kurset","type":"content","content":"Innhold kommer snart..."}]';