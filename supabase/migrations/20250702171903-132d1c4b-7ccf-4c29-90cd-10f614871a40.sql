-- Clear all content from the module at order_index 4 (Aksjer og aksjeprising)
UPDATE public.modules 
SET content = '{"sections": []}', 
    description = null
WHERE order_index = 4 
AND course_id IN (SELECT id FROM public.courses WHERE title = 'Bærekraftig Foretaksfinans');