-- Update section 6.3 with reflection questions and insights

UPDATE sub_modules 
SET 
    content = jsonb_build_object(
        'sections', jsonb_build_array(
            jsonb_build_object(
                'title', '1. Usikkerhet vs. risiko',
                'type', 'content',
                'content', '• **Usikkerhet** (*uncertainty*): manglende kunnskap om framtidige utfall – sannsynlighetsfordelingen er ukjent eller ikke målbar.
• **Risiko**: målbar variasjon når (en tilnærmet) sannsynlighetsfordeling er kjent; ofte kalt «målbar usikkerhet» (Knight, 1921).
• I finans defineres risiko som *spredningen* rundt forventet avkastning – den inkluderer både opp- og nedside.

!insight Frank Knight skillet mellom risiko og usikkerhet er fundamentalt: Risiko kan måles og prises, mens usikkerhet er det ukjente ukjente som kan skape helt nye utfall ingen har sett før.'
            ),
            jsonb_build_object(
                'title', '2. Risiko er tosidig',
                'type', 'content',
                'content', 'Selv store *positive* avvik fra forventet avkastning anses som risiko fordi de skaper usikkerhet om fremtidig verdi. Standardavvik fanger begge sider av fordelingen:

$$\sigma = \sqrt{\mathrm{Var}(R)}$$

Alternative nedsidemål fokuserer kun på tap, som *semivarians* og *Expected Tail Loss (ETL)*.

!think Er positiv volatilitet virkelig et problem? For en langsiktig investor kan store positive avvik være velkommen, men for noen som trenger forutsigbare kontantstrømmer (som en pensjonist) er både opp- og nedside problematisk.'
            ),
            jsonb_build_object(
                'title', '3. Ingen entydig standard',
                'type', 'content',
                'content', '| **Fordelingsegenskap** | **Typiske mål** | **Tolkning** |
|---|---|---|
| Spredning | Varians $(\sigma^2)$, standardavvik $\sigma$ | Typisk avvik fra gjennomsnittet |
| Skjevhet | Skewness | Hale mot høyre/venstre |
| Kurtose | Excess kurtosis | Sannsynlighet for ekstreme utfall |
| Nedside | Semivarians, VaR, ETL | Fokus på tapsscenarier |

*Ulike aspekter ved en fordeling krever ulike risikomål.*

!insight Standardavvik forutsetter normalfordeling, men finansielle avkastninger har ofte skjevhet og "fat tails" (kurtose). Det er derfor banker bruker VaR og Expected Shortfall i tillegg til volatilitet.'
            ),
            jsonb_build_object(
                'title', '4. Klassiske spreddemål',
                'type', 'content',
                'content', '$$\mathrm{Var}(R)=\mathbb{E}\bigl[(R-\mathbb{E}[R])^{2}\bigr], \qquad \sigma=\sqrt{\mathrm{Var}(R)}$$

Standardavviket (volatiliteten) uttrykkes i samme enhet som avkastningen, noe som gjør det lett å kommunisere risiko.

!component:risk-calculator'
            ),
            jsonb_build_object(
                'title', '5. Fordelingsperspektiv',
                'type', 'content',
                'content', 'Porteføljevarians avhenger av kovarianser:

$$\sigma_p^{2} = \sum_{i}\sum_{j} w_i w_j \,\mathrm{Cov}(R_i,R_j)$$

Idiosynkratisk (usystematisk) risiko kan diversifiseres bort; *systematisk* risiko gjenstår fordi felles faktorer korrelerer aktivaklasser.

!insight Kovariansmatrisen er hjertet i moderne porteføljeteori. Når korrelasjonene øker i krisetider, fungerer diversifisering dårligere akkurat når du trenger den mest.'
            ),
            jsonb_build_object(
                'title', '6. Eksempel',
                'type', 'content',
                'content', 'Anta to aksjer med samme forventede avkastning (10%), men volatilitet $\sigma_A=35\%$ og $\sigma_B=21\%$.

Ifølge standardavvik er A mer risikabel, men for en investor som kun bekymrer seg for tap kan forskjellen være mindre avgjørende.

!insight Standardavvik måler total risiko, men ikke alle investorer bekymrer seg like mye for positiv og negativ volatilitet.'
            ),
            jsonb_build_object(
                'title', '7. Videre veivalg i kurset',
                'type', 'content',
                'content', '1. **Varianser og kovarianser** – grunnlaget for moderne porteføljeteori.
2. **Beta** – mål på systematisk risiko i CAPM.
3. **Durasjon** – rentefølsomhet for obligasjoner.
4. **Klimarisiko** – scenario-baserte stresstester (egen modul).'
            ),
            jsonb_build_object(
                'title', 'Refleksjonsspørsmål',
                'type', 'reflection',
                'content', '**Filosofisk:** Hvis du kunne velge mellom en investering som garantert gir 5% avkastning og en som gir 10% ± 20% (dvs. kan gi mellom -10% og +30%), hvilken ville du valgt? Hvorfor?

**Praktisk risikomåling:** Hvorfor tror du banker bruker VaR (Value at Risk) i tillegg til standardavvik når de måler risiko? Hvilke situasjoner fanger ikke standardavvik godt nok?

**Sammenheng:** Hvordan henger Knight sitt skille mellom risiko og usikkerhet sammen med Efficient Market Hypothesis? Kan markeder prise usikkerhet?'
            )
        )
    ),
    updated_at = now()
WHERE module_id = '542486da-1974-4674-8342-88df09528a16' 
  AND order_index = 3;