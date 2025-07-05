-- Update sub-module 6.4 with diversification content
UPDATE public.sub_modules 
SET content = '{
  "sections": [
    {
      "title": "1. Hva mener vi med risiko?",
      "content": "Risiko i finans er usikkerheten i fremtidig avkastning. Den kvantifiseres vanligvis som standardavviket ($\\sigma$) til avkastningen:\n\n$$\\sigma = \\sqrt{\\mathrm{Var}(R)}$$\n\nder $R$ er periodisk avkastning. Jo større $\\sigma$, desto mindre forutsigbar verdi."
    },
    {
      "title": "2. Intuisjonen bak diversifisering",
      "content": "Å **diversifisere** betyr å fordele kapitalen på flere investeringer som ikke svinger helt i takt.\n\n• **Eksempel**: En paraply-produsent tjener på regn, mens en solkrem-produsent tjener på sol.\n• Når én gjør det dårlig, kan den andre gjøre det bra; de delvis utligner hverandres utslag."
    },
    {
      "title": "3. Korrelasjon: motoren som avgjør effekten", 
      "content": "Korrelasjonen ($\\rho$) mellom to avkastningsserier bestemmer hvor mye risiko som kan fjernes.\n\n$$\\rho = +1: \\text{Ingen gevinst} \\quad \\rho \\approx 0: \\text{Betydelig reduksjon} \\quad \\rho = -1: \\text{Potensiell null risiko}$$\n\n| **Korrelasjon** | **Samvariasjon** | **Diversifiseringseffekt** |\n|---|---|---|\n| +1 | Helt i takt | Ingen |\n| 0 | Uavhengige | Moderat–stor |\n| -1 | Perfekt motsatt | Kan fjerne all risiko |"
    },
    {
      "title": "4. To-aktiva-formelen",
      "content": "For to investeringer $A$ og $B$ med vekter $w_A$ og $w_B$ ($w_A + w_B = 1$) blir porteføljens varians:\n\n$$\\sigma_p^2 = w_A^2\\sigma_A^2 + w_B^2\\sigma_B^2 + 2w_Aw_B\\sigma_A\\sigma_B\\rho_{AB}$$\n\nDet siste leddet («kovariansleddet») trekker porteføljens totale varians ned når $\\rho_{AB} < +1$."
    },
    {
      "title": "5. Mange aktiva – hvorfor kurven flater ut",
      "content": "For $n$ like store investeringer med samme varians $\\sigma^2$ og gjensidig korrelasjon $\\rho$:\n\n$$\\mathrm{Var}(R_p) = \\frac{1}{n}\\sigma^2 + \\left(1-\\frac{1}{n}\\right)\\sigma^2\\rho$$\n\n• $\\frac{1}{n}\\sigma^2$: Usystematisk (bedriftsspesifikk) risiko forsvinner raskt når $n$ øker.\n• $\\left(1-\\frac{1}{n}\\right)\\sigma^2\\rho$: Systematisk (markeds-)risiko blir igjen."
    },
    {
      "title": "6. To hovedtyper risiko",
      "content": "| **Risiko** | **Kilde** | **Kan diversifiseres bort?** |\n|---|---|---|\n| Usystematisk | Hendelser som rammer enkeltbedrifter | Ja |\n| Systematisk | Sjokk som påvirker hele markedet | Nei |"
    },
    {
      "title": "7. Eksempel",
      "content": "**Data:**\n\n| | A | B |\n|---|---|---|\n| Standardavvik $\\sigma$ | 20% | 25% |\n| Forventet avkastning | 10% | 15% |\n| Vekt | 0,5 | 0,5 |\n| Korrelasjon $\\rho_{AB}$ | 0,3 | |\n\n**Beregning:**\n\n$$\\begin{aligned}\n\\sigma_p^2 &= 0{,}5^2 \\cdot 0{,}20^2 + 0{,}5^2 \\cdot 0{,}25^2 + 2 \\cdot 0{,}5 \\cdot 0{,}5 \\cdot 0{,}20 \\cdot 0{,}25 \\cdot 0{,}30 \\\\\n&\\approx 0{,}0258 \\quad \\Longrightarrow \\quad \\sigma_p \\approx 16{,}1\\%\n\\end{aligned}$$\n\nPorteføljens risiko (~16%) er lavere enn risikoen til hver av de to investeringene alene.\n\n!component:portfolio-calculator"
    }
  ]
}'::jsonb
WHERE title = '6.4 Risiko og avkastning for porteføljer';