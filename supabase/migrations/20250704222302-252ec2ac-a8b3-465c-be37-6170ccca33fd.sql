-- Fix double-nested sections in sub_modules content
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', (content->'sections'->0->'sections')
)
WHERE content->'sections'->0->'sections' IS NOT NULL;