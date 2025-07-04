-- Fix sub-module content structure to match ContentSection expectations
-- Make sure all properties (video, reflection, exercise, etc.) are at the section level

-- Update all sub-modules to have proper section structure
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', (content->'sections'->0->>'title'),
            'type', (content->'sections'->0->>'type'),
            'content', (content->'sections'->0->>'content'),
            'video', (content->'sections'->0->>'video'),
            'reflection', (content->'sections'->0->>'reflection'),
            'exercise', (content->'sections'->0->>'exercise'),
            'selftest', (content->'sections'->0->'selftest'),
            'download', (content->'sections'->0->>'download')
        )
    )
)
WHERE content->'sections' IS NOT NULL 
AND jsonb_array_length(content->'sections') > 0;