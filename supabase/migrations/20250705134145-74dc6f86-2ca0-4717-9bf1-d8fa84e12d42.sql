-- Create sub-module 6.3 "Måling av risiko"
INSERT INTO public.sub_modules (module_id, title, order_index, content)
SELECT 
  m.id as module_id,
  '6.3 Måling av risiko' as title,
  3 as order_index,
  '{
    "sections": [
      {
        "title": "1. Usikkerhet vs. risiko",
        "content": "• **Usikkerhet** (*uncertainty*): manglende kunnskap om framtidige utfall – sannsynlighetsfordelingen er ukjent eller ikke målbar.\n• **Risiko**: målbar variasjon når (en tilnærmet) sannsynlighetsfordeling er kjent; ofte kalt «målbar usikkerhet» (Knight, 1921).\n• I finans defineres risiko som *spredningen* rundt forventet avkastning – den inkluderer både opp- og nedside."
      },
      {
        "title": "2. Risiko er tosidig", 
        "content": "Selv store *positive* avvik fra forventet avkastning anses som risiko fordi de skaper usikkerhet om fremtidig verdi. Standardavvik fanger begge sider av fordelingen:\n\n$$\\sigma = \\sqrt{\\mathrm{Var}(R)}$$\n\nAlternative nedsidemål fokuserer kun på tap, som *semivarians* og *Expected Tail Loss (ETL)*."
      },
      {
        "title": "3. Ingen entydig standard",
        "content": "| **Fordelingsegenskap** | **Typiske mål** | **Tolkning** |\n|---|---|---|\n| Spredning | Varians $(\\sigma^2)$, standardavvik $\\sigma$ | Typisk avvik fra gjennomsnittet |\n| Skjevhet | Skewness | Hale mot høyre/venstre |\n| Kurtose | Excess kurtosis | Sannsynlighet for ekstreme utfall |\n| Nedside | Semivarians, VaR, ETL | Fokus på tapsscenarier |\n\n*Ulike aspekter ved en fordeling krever ulike risikomål.*"
      },
      {
        "title": "4. Klassiske spreddemål",
        "content": "$$\\mathrm{Var}(R)=\\mathbb{E}\\bigl[(R-\\mathbb{E}[R])^{2}\\bigr], \\qquad \\sigma=\\sqrt{\\mathrm{Var}(R)}$$\n\nStandardavviket (volatiliteten) uttrykkes i samme enhet som avkastningen, noe som gjør det lett å kommunisere risiko.\n\n!component:risk-calculator"
      },
      {
        "title": "5. Fordelingsperspektiv",
        "content": "Porteføljevarians avhenger av kovarianser:\n\n$$\\sigma_p^{2} = \\sum_{i}\\sum_{j} w_i w_j \\,\\mathrm{Cov}(R_i,R_j)$$\n\nIdiosynkratisk (usystematisk) risiko kan diversifiseres bort; *systematisk* risiko gjenstår fordi felles faktorer korrelerer aktivaklasser."
      },
      {
        "title": "6. Eksempel",
        "content": "Anta to aksjer med samme forventede avkastning (10%), men volatilitet $\\sigma_A=35\\%$ og $\\sigma_B=21\\%$.\n\nIfølge standardavvik er A mer risikabel, men for en investor som kun bekymrer seg for tap kan forskjellen være mindre avgjørende.\n\n!insight Standardavvik måler total risiko, men ikke alle investorer bekymrer seg like mye for positiv og negativ volatilitet."
      },
      {
        "title": "7. Videre veivalg i kurset",
        "content": "1. **Varianser og kovarianser** – grunnlaget for moderne porteføljeteori.\n2. **Beta** – mål på systematisk risiko i CAPM.\n3. **Durasjon** – rentefølsomhet for obligasjoner.\n4. **Klimarisiko** – scenario-baserte stresstester (egen modul)."
      }
    ]
  }'::jsonb
FROM modules m 
JOIN sub_modules sm ON sm.module_id = m.id 
WHERE sm.title = '6.2 Hvordan måle avkastning'
LIMIT 1;