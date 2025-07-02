-- Update module titles to new names
UPDATE public.modules 
SET title = CASE order_index
    WHEN 1 THEN 'Introduksjon til finans'
    WHEN 2 THEN 'Regnskap'
    WHEN 3 THEN 'Tidsverdien av penger'
    WHEN 4 THEN 'Obligasjoner'
    WHEN 5 THEN 'Aksjer og aksjeprising'
    WHEN 6 THEN 'Avkastning og risiko'
    WHEN 7 THEN 'Investeringsanalyse'
    WHEN 8 THEN 'Kapitalstruktur'
    WHEN 9 THEN 'EU taksonomi og klimafinans'
    WHEN 10 THEN 'ESG og "grønn" finans'
END
WHERE course_id IN (SELECT id FROM public.courses WHERE title = 'Bærekraftig Foretaksfinans');