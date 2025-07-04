-- Fix the data structure issue - sub-modules need sections array
-- The content is there but not wrapped in sections array

UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(content)
)
WHERE content IS NOT NULL 
AND content->'{sections}' IS NULL;