-- Remove module 4 (Obligasjoner) from Bærekraftig Foretaksfinans course
DELETE FROM public.modules 
WHERE order_index = 4 
AND course_id IN (SELECT id FROM public.courses WHERE title = 'Bærekraftig Foretaksfinans');