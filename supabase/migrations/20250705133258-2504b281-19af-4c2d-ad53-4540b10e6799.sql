-- Update section 4 in 6.2 to include the random walk simulator (fixed JSON escaping)
UPDATE public.sub_modules 
SET content = jsonb_set(
  content,
  '{sections,3,content}',
  '"**Aritmetrisk snitt:**\n\n$$\\bar{r} = \\frac{1}{N}\\sum_{t=1}^{N} r_t$$\n\n**Geometrisk snitt (CAGR):**\n\n$$r_{\\text{geo}} = \\left(\\prod_{t=1}^{N} (1+r_t)\\right)^{1/N} - 1$$\n\nAritmetrisk snitt egner seg for forventet fremtidig avkastning, mens geometrisk snitt beskriver historisk vekstrate.\n\n!component:random-walk-simulator\n\n!insight Geometrisk gjennomsnitt er alltid lavere enn eller lik aritmetrisk gjennomsnitt når det er volatilitet. Forskjellen øker med volatiliteten - dette kalles \"volatility drag\"."'
)
WHERE title = '6.2 Hvordan måle avkastning';