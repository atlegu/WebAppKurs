-- Fix sub-module names that don't match and fill missing content

-- Check what sub-modules actually exist and fix naming
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->1 FROM modules WHERE title = 'Aksjer og aksjeprising')
    )
)
WHERE title = '5.2 Aksjeprising og verdsettelse';

-- Fix any missing Regnskap content that has wrong names
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->4 FROM modules WHERE title = 'Regnskap')
    )
)
WHERE title LIKE '%Nøkkeltall%' OR title LIKE '%analyse%';

-- Make sure Oppgaver sections get the summary content
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->(jsonb_array_length(modules.content->'sections')-1) FROM modules WHERE title = 'Regnskap')
    )
)
WHERE title = '2.6 Oppgaver';

-- Also add the summary for other modules' Oppgaver sections
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'{summary}' FROM modules WHERE title = 'Obligasjoner')
    )
)
WHERE title LIKE '4.% Oppgaver';

UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->8 FROM modules WHERE title = 'Aksjer og aksjeprising')
    )
)
WHERE title LIKE '5.% Oppgaver';