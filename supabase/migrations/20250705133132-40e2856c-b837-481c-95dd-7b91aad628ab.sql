-- Update section 4 in 6.2 to include the random walk simulator
UPDATE public.sub_modules 
SET content = jsonb_set(
  content,
  '{sections,3,content}',
  '"**Aritmetrisk snitt:**

$$\\bar{r} = \\frac{1}{N}\\sum_{t=1}^{N} r_t$$

**Geometrisk snitt (CAGR):**

$$r_{\\text{geo}} = \\left(\\prod_{t=1}^{N} (1+r_t)\\right)^{1/N} - 1$$

Aritmetrisk snitt egner seg for forventet fremtidig avkastning, mens geometrisk snitt beskriver historisk vekstrate.

!component:random-walk-simulator

!insight Geometrisk gjennomsnitt er alltid lavere enn eller lik aritmetrisk gjennomsnitt når det er volatilitet. Forskjellen øker med volatiliteten - dette kalles ''volatility drag''."'
)
WHERE title = '6.2 Hvordan måle avkastning';