UPDATE modules 
SET content = jsonb_set(
  content,
  '{sections,7,video}',
  to_jsonb(
    (content->'sections'->7->>'video') || 
    E'\n\n<iframe width="560" height="315" src="https://www.youtube.com/embed/fU7NnRW66vw?si=K5xjCNY_-R9IJd_C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  )
)
WHERE id = 'd3e2a547-18c3-4fac-89ce-6729c2966bb6';