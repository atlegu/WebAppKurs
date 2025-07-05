-- Update 6.2 with comprehensive LaTeX-based content on measuring returns
UPDATE public.sub_modules 
SET content = jsonb_build_object(
  'sections', jsonb_build_array(
    jsonb_build_object(
      'title', '1. Hva er avkastning?',
      'type', 'content', 
      'content', 'Avkastning beskriver endringen i investeringens verdi i løpet av en gitt periode. Den består av **prisendring** (kapitalgevinst eller –tap) og **kontantutbetalinger** (utbytte/kuponger):

$$r_t = \frac{P_t + \text{Div}_t - P_{t-1}}{P_{t-1}}$$

hvor $P_{t-1}$ er startkurs, $P_t$ sluttkurs og $\text{Div}_t$ kontantutbetalinger i perioden.'
    ),
    jsonb_build_object(
      'title', '2. Monetær vs. relativ avkastning',
      'type', 'content',
      'content', '**Monetær avkastning (kroner):**

$$\text{Monetær avkastning} = \text{Div}_t + (P_t - P_{t-1})$$

**Relativ avkastning (Holding Period Return, HPR):**

$$\text{HPR}_t = \frac{P_t + \text{Div}_t - P_{t-1}}{P_{t-1}}$$'
    ),
    jsonb_build_object(
      'title', '3. Totalavkastning og komponenter',
      'type', 'content',
      'content', 'I læreboken formuleres totalavkastningen som sum av **utbytte-yield** og **kapitalgevinst-rate**:

$$r_{\text{tot}} = \underbrace{\frac{\text{Div}_t}{P_{t-1}}}_{\text{utbytte-yield}} + \underbrace{\frac{P_t - P_{t-1}}{P_{t-1}}}_{\text{kapitalgevinst-rate}}$$'
    ),
    jsonb_build_object(
      'title', '4. Gjennomsnittlig avkastning over flere perioder',
      'type', 'content',
      'content', '**Aritmetrisk snitt:**

$$\bar{r} = \frac{1}{N}\sum_{t=1}^{N} r_t$$

**Geometrisk snitt (CAGR):**

$$r_{\text{geo}} = \left(\prod_{t=1}^{N} (1+r_t)\right)^{1/N} - 1$$

Aritmetrisk snitt egner seg for forventet fremtidig avkastning, mens geometrisk snitt beskriver historisk vekstrate.'
    ),
    jsonb_build_object(
      'title', '5. Meravkastning (risikopremie)',
      'type', 'content',
      'content', '$$\text{Risikopremie}_t = r_{\text{tot},t} - r_{f,t}$$

hvor $r_{f,t}$ er risikofri rente i perioden.'
    ),
    jsonb_build_object(
      'title', '6. Eksempel – arbeidsoppgave',
      'type', 'content',
      'content', '| Tidspunkt | Pris (kr) | Utbytte (kr) |
|-----------|-----------|--------------|
| 0         | 120       | --           |
| 1 år      | 128       | 4            |

**Oppgaver:**

• Beregn monetær avkastning
• Beregn HPR  
• Finn utbytte-yield og kapitalgevinst-rate

!component:return-calculator'
    )
  )
),
updated_at = now()
WHERE title = '6.2 Hvordan måle avkastning';