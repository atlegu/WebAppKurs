-- Copy rich content from modules to their first sub-modules

-- Update Regnskap 2.1 with full content from modules
UPDATE sub_modules 
SET content = (
    SELECT modules.content->'sections'->0
    FROM modules 
    JOIN sub_modules sm ON sm.module_id = modules.id
    WHERE modules.title = 'Regnskap' 
    AND sm.title = '2.1 Introduksjon til regnskap'
    LIMIT 1
)
WHERE title = '2.1 Introduksjon til regnskap';

-- Update Regnskap 2.2 with second section from modules
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->1 FROM modules WHERE title = 'Regnskap')
    )
)
WHERE title = '2.2 Balanseoppstilling';

-- Update Regnskap 2.3 with third section
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->2 FROM modules WHERE title = 'Regnskap')
    )
)
WHERE title = '2.3 Egenkapital';

-- Update Regnskap 2.4 with fourth section  
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->3 FROM modules WHERE title = 'Regnskap')  
    )
)
WHERE title = '2.4 Utgift, kostnad og utbetaling';

-- Update Regnskap 2.5 with fifth section
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->4 FROM modules WHERE title = 'Regnskap')
    )
)
WHERE title = '2.5 Tillit og transparens';

-- Update Regnskap 2.6 with sixth section
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->5 FROM modules WHERE title = 'Regnskap')
    )
)
WHERE title = '2.6 Bærekraftsrapportering';

-- Update Obligasjoner 4.1 with first section content
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->0 FROM modules WHERE title = 'Obligasjoner')
    )
)
WHERE title = '4.1 Hva er en obligasjon?';

-- Update Obligasjoner 4.2 with second section
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->1 FROM modules WHERE title = 'Obligasjoner')
    )
)  
WHERE title = '4.2 Obligasjonsstruktur';

-- Update other Obligasjoner sub-modules with their respective sections
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
        (SELECT modules.content->'sections'->3 FROM modules WHERE title = 'Obligasjoner')
    )
)
WHERE title = '4.4 Effektiv rente (YTM)';

UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->4 FROM modules WHERE title = 'Obligasjoner')
    )
)
WHERE title = '4.5 Risikofaktorer';

-- Update Aksjer 5.1 with first section content
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->0 FROM modules WHERE title = 'Aksjer og aksjeprising')
    )
)
WHERE title = '5.1 Hva er en aksje?';

-- Update other Aksjer sub-modules
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
        (SELECT modules.content->'sections'->2 FROM modules WHERE title = 'Aksjer og aksjeprising')
    )
)
WHERE title = '5.3 Fundamental analyse';

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
        (SELECT modules.content->'sections'->4 FROM modules WHERE title = 'Aksjer og aksjeprising')
    )
)
WHERE title = '5.5 Multippelanalyse';

UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        (SELECT modules.content->'sections'->5 FROM modules WHERE title = 'Aksjer og aksjeprising')
    )
)
WHERE title = '5.6 Praktisk case';

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