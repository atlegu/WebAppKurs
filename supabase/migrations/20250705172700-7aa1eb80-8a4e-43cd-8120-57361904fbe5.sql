-- Update section 6.2 with reflection questions and insights

UPDATE sub_modules 
SET 
    content = jsonb_build_object(
        'sections', jsonb_build_array(
            jsonb_build_object(
                'title', '1. Hva er avkastning?',
                'type', 'content',
                'content', 'Avkastning beskriver endringen i investeringens verdi i løpet av en gitt periode. Den består av **prisendring** (kapitalgevinst eller –tap) og **kontantutbetalinger** (utbytte/kuponger):

$$r_t = \frac{P_t + \text{Div}_t - P_{t-1}}{P_{t-1}}$$

hvor $P_{t-1}$ er startkurs, $P_t$ sluttkurs og $\text{Div}_t$ kontantutbetalinger i perioden.

!insight En aksje som ikke gir utbytte kan likevel ha positiv avkastning gjennom prisøkning, mens en obligasjon med fast kupong kan ha negativ totalavkastning hvis kursen faller mer enn kuponginntekten.'
            ),
            jsonb_build_object(
                'title', '2. Monetær vs. relativ avkastning',
                'type', 'content',
                'content', '**Monetær avkastning (kroner):**

$$\text{Monetær avkastning} = \text{Div}_t + (P_t - P_{t-1})$$

**Relativ avkastning (Holding Period Return, HPR):**

$$\text{HPR}_t = \frac{P_t + \text{Div}_t - P_{t-1}}{P_{t-1}}$$

!think Hvilken form for avkastning er mest relevant når du sammenligner to investeringer med forskjellig størrelse? Monetær avkastning forteller deg hvor mange kroner du tjener, men relativ avkastning forteller deg hvor effektiv investeringen er per krone investert.'
            ),
            jsonb_build_object(
                'title', '3. Totalavkastning og komponenter',
                'type', 'content',
                'content', 'I læreboken formuleres totalavkastningen som sum av **utbytte-yield** og **kapitalgevinst-rate**:

$$r_{\text{tot}} = \underbrace{\frac{\text{Div}_t}{P_{t-1}}}_{\text{utbytte-yield}} + \underbrace{\frac{P_t - P_{t-1}}{P_{t-1}}}_{\text{kapitalgevinst-rate}}$$

!insight Forskjellige investeringsstrategier fokuserer på ulike komponenter: "Growth-investorer" ser etter kapitalgevinst, mens "dividend-investorer" prioriterer utbytte-yield. Begge kan være like lønnsomme over tid.'
            ),
            jsonb_build_object(
                'title', '4. Gjennomsnittlig avkastning over flere perioder',
                'type', 'content',
                'content', '**Aritmetrisk snitt:**

$$\bar{r} = \frac{1}{N}\sum_{t=1}^{N} r_t$$

**Geometrisk snitt (CAGR):**

$$r_{\text{geo}} = \left(\prod_{t=1}^{N} (1+r_t)\right)^{1/N} - 1$$

Aritmetrisk snitt egner seg for forventet fremtidig avkastning, mens geometrisk snitt beskriver historisk vekstrate.

!component:random-walk-simulator

!insight Geometrisk gjennomsnitt er alltid lavere enn eller lik aritmetrisk gjennomsnitt når det er volatilitet. Forskjellen øker med volatiliteten - dette kalles "volatility drag".'
            ),
            jsonb_build_object(
                'title', '5. Meravkastning (risikopremie)',
                'type', 'content',
                'content', '$$\text{Risikopremie}_t = r_{\text{tot},t} - r_{f,t}$$

hvor $r_{f,t}$ er risikofri rente i perioden.

!think Hvorfor er risikopremien viktig? Den forteller deg hvor mye ekstra avkastning du får for å ta risiko. En negativ risikopremie betyr at du kunne fått bedre avkastning uten risiko - da er investeringen ikke lønnsom på risikojustert basis.'
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
            ),
            jsonb_build_object(
                'title', 'Refleksjonsspørsmål',
                'type', 'reflection',
                'content', '**Praksis-perspektiv:** Tenk på en investering du kjenner til (aksje, fond, eiendom). Hvordan vil du beregne totalavkastningen for denne investeringen over siste år?

**Sammenligning:** Du sammenligner to aksjer: A har gitt 15% avkastning med høy volatilitet, B har gitt 12% med lav volatilitet. Hvilken informasjon trenger du for å vurdere hvilken som er "best"?

**Langsiktig vs. kortsiktig:** Når er geometrisk gjennomsnitt mer relevant enn aritmetrisk, og omvendt?'
            )
        )
    ),
    updated_at = now()
WHERE module_id = '542486da-1974-4674-8342-88df09528a16' 
  AND order_index = 2;