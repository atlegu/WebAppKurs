-- Fix all sub-modules to get proper rich content from their parent modules

-- Fix Regnskap sub-modules (they're missing most content)
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->2 FROM modules WHERE title = 'Regnskap')
    )
)
WHERE title = '2.3 Egenkapital';

UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->3 FROM modules WHERE title = 'Regnskap')
    )
)
WHERE title = '2.4 Utgift, kostnad og utbetaling';

UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->4 FROM modules WHERE title = 'Regnskap')
    )
)
WHERE title = '2.5 Tillit og transparens';

UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->5 FROM modules WHERE title = 'Regnskap')
    )
)
WHERE title = '2.6 Bærekraftsrapportering';

-- Fix Obligasjoner sub-modules (fill in the empty ones)
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->1 FROM modules WHERE title = 'Obligasjoner')
    )
)
WHERE title = '4.2 Obligasjonsstruktur';

UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->2 FROM modules WHERE title = 'Obligasjoner')
    )
)
WHERE title = '4.3 Pris og avkastning';

UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->4 FROM modules WHERE title = 'Obligasjoner')
    )
)
WHERE title = '4.5 Risikofaktorer';

UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->5 FROM modules WHERE title = 'Obligasjoner')
    )
)
WHERE title = '4.6 Kredittrating og markedsaktører';

UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->6 FROM modules WHERE title = 'Obligasjoner')
    )
)
WHERE title = '4.7 Grønne obligasjoner og bærekraftige lån';

UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->7 FROM modules WHERE title = 'Obligasjoner')
    )
)
WHERE title = '4.8 Durasjon og følsomhet';

-- Fix Aksjer sub-modules (fill in the empty ones)
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->1 FROM modules WHERE title = 'Aksjer og aksjeprising')
    )
)
WHERE title = '5.2 Hvorfor aksjeprising?';

UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->3 FROM modules WHERE title = 'Aksjer og aksjeprising')
    )
)
WHERE title = '5.4 DDM og FCFE';

UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->6 FROM modules WHERE title = 'Aksjer og aksjeprising')
    )
)
WHERE title = '5.7 Markedseffisiens';

UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->7 FROM modules WHERE title = 'Aksjer og aksjeprising')
    )
)
WHERE title = '5.8 ESG i aksjeanalyse';

UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->8 FROM modules WHERE title = 'Aksjer og aksjeprising')
    )
)
WHERE title = '5.9 Oppgaver';