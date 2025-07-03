UPDATE modules 
SET content = jsonb_set(
  content,
  '{sections,6,content}',
  to_jsonb(
    (content->'sections'->6->>'content') || 
    E'\n\n**Nyttige lenker:**\n\n[Grønne obligasjoner hos Aksje Norge](https://aksjenorge.no/aktuelt/2019/06/25/greenbonds/)\n\n[Hva er grønne obligasjoner (fra Nordea)](https://www.nordea.com/no/nyheter/hva-er-gronne-obligasjoner)'
  )
)
WHERE id = 'd3e2a547-18c3-4fac-89ce-6729c2966bb6';