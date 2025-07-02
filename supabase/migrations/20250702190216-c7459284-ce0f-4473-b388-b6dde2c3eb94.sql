UPDATE modules 
SET content = '{
  "learning_objectives": [
    "Forstå aksjens rolle i finansiering og investeringsporteføljer",
    "Forklare prinsippene bak aksjeprising og hvorfor det er viktig",
    "Utføre fundamental regnskapsanalyse som grunnlag for verdsettelse",
    "Anvende ulike verdsettelsesmodeller: DDM, FCFE, P/E, EV/EBITDA",
    "Sammenligne resultater fra flere metoder i en praktisk case",
    "Diskutere markedseffisiens og prisdannelse",
    "Integrere ESG-faktorer i aksjeanalyse"
  ],
  "sections": [
    {
      "title": "Introduksjon til aksjemarkedet og aksjens rolle",
      "type": "content",
      "content": "Modul 4: Verdsettelse av aksjer og aksjeanalyse\n\nAksjen som eierandel og rett til fremtidige kontantstrømmer. Primær- vs. sekundærmarkedet. Likviditet, kursdannelse og handelsmekanismer. Hvordan markedspris reflekterer risiko og forventninger.",
      "video": "Video om introduksjon til aksjemarkedet (8 min)",
      "reflection": "Hva er hovedforskjellen på primær- og sekundærmarkedet? Hvordan påvirker likviditet investorers vilje til å handle?"
    },
    {
      "title": "Hva er aksjeprising og hvorfor er det viktig?",
      "type": "content", 
      "content": "Aksjeprising handler om å estimere den sanne verdien av et selskaps aksjer basert på fremtidige kontantstrømmer og risiko. Dette er viktig fordi det gir investorer og ledelse et objektivt grunnlag for beslutninger, enten det gjelder kjøp, salg eller finansiering.",
      "video": "Video om aksjeprising (6 min)",
      "exercise": "Finn to norske selskaper på Oslo Børs og noter deres P/E-multipler fra siste årsregnskap. Hva sier forskjellen om risikoperspektivet?"
    }
  ]
}'
WHERE title = 'Aksjer og aksjeprising';