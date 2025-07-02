-- Update the first module title to match the list
UPDATE public.modules 
SET title = 'Struktur Regnskap'
WHERE order_index = 1 AND course_id IN (SELECT id FROM public.courses WHERE title = 'Bærekraftig Foretaksfinans');