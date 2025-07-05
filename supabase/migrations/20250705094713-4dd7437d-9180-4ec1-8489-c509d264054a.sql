-- Clear existing Module 1 and create new structure
-- First, delete existing sub-modules for Module 1
DELETE FROM sub_modules 
WHERE module_id IN (
    SELECT id FROM modules 
    WHERE order_index = 1 AND title ILIKE '%introduksjon%'
);

-- Update Module 1 to be the general course introduction
UPDATE modules 
SET 
    title = 'Introduksjon til finans',
    description = 'Velkommen til kurset! Her får du en grundig introduksjon til finansverdenen og lærer hvorfor finans er relevant for alle.',
    content = jsonb_build_object('sections', jsonb_build_array())
WHERE order_index = 1;

-- Get the Module 1 ID for creating sub-modules
-- Create the 5 new sub-modules for Module 1
INSERT INTO sub_modules (module_id, title, order_index, content)
SELECT 
    m.id,
    sub.title,
    sub.order_index,
    jsonb_build_object(
        'sections', jsonb_build_array(
            jsonb_build_object(
                'title', sub.title,
                'type', 'content',
                'content', 'Innhold kommer snart...'
            )
        )
    )
FROM modules m,
(VALUES 
    ('Hva er finans – og hvorfor angår det deg?', 1),
    ('Bedrifter, eierskap og verdiskaping', 2),
    ('Finansmarkedene i aksjon', 3),
    ('Finans, samfunn og bærekraft', 4),
    ('Veien videre og hva du lærer i kurset', 5)
) AS sub(title, order_index)
WHERE m.order_index = 1 AND m.title = 'Introduksjon til finans';