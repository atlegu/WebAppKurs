UPDATE sub_modules 
SET content = '{
  "sections": [
    {
      "title": "Porteføljerisiko og -avkastning",
      "type": "content",
      "content": "Når vi kombinerer flere verdipapirer, får vi en ny *portefølje* med egen forventet avkastning og risiko. Diversifisering gjør at porteføljens totale risiko ofte blir lavere enn et vektet gjennomsnitt av enkeltrisikoene—så lenge verdipapirene ikke beveger seg helt i takt."
    },
    {
      "title": "To aktiva: det første skrittet mot diversifisering",
      "type": "content",
      "content": "Anta to investeringer $A$ og $B$ med\n\n$$\\begin{aligned}\nE[R_A]&=\\mu_A,&\\quad \\sigma_A &= \\text{SD}(R_A),\\\\\nE[R_B]&=\\mu_B,&\\quad \\sigma_B &= \\text{SD}(R_B),\\\\\n\\rho_{AB}&= \\text{korrelasjon}(R_A,R_B).\n\\end{aligned}$$\n\nLa $w$ være andelen av kapitalen i $A$ (slik at $1-w$ er andelen i $B$). Da blir\n\n$$E[R_p] = w\\mu_A + (1-w)\\mu_B$$\n\n$$\\sigma_p^2 = w^2\\sigma_A^2 + (1-w)^2\\sigma_B^2 + 2w(1-w)\\sigma_A\\sigma_B\\rho_{AB}$$\n\n**Intuisjon**\n\n• Avkastningen er bare et lineært gjennomsnitt av de to komponentene.\n• Risikoen er *ikke* lineær; den tredje termen bestemmes av korrelasjonen. Lav $\\rho_{AB}$ gir kraftig risikoreduksjon."
    },
    {
      "title": "Numerisk eksempel",
      "type": "content",
      "content": "$$\\begin{aligned}\n\\mu_A &= 8\\%, & \\sigma_A &= 15\\%,\\\\\n\\mu_B &= 5\\%, & \\sigma_B &= 7\\%,\\\\\n\\rho_{AB} &= 0.2.\n\\end{aligned}$$\n\nVelges $w=0.6$ får vi\n\n$$\\begin{aligned}\nE[R_p] &= 0.6(0.08)+0.4(0.05)=6.8\\%,\\\\\n\\sigma_p &= \\sqrt{0.6^2 \\cdot 0.15^2 + 0.4^2 \\cdot 0.07^2 + 2(0.6)(0.4)(0.15)(0.07)(0.2)}\\approx 9.9\\%.\n\\end{aligned}$$\n\nPorteføljen gir altså *lavere* risiko enn aktiva A, samtidig som forventet avkastning nesten er like høy."
    },
    {
      "title": "Flere aktiva: generell porteføljeteori",
      "type": "content",
      "content": "Med $n$ verdipapirer skriver vi vektvektoren $\\mathbf{w}=(w_1,\\dots,w_n)^{\\top}$, hvor $\\sum_{i=1}^n w_i =1$. La $\\boldsymbol\\mu=(\\mu_1,\\dots,\\mu_n)^{\\top}$ være forventet-avkastnings-vektoren og $\\boldsymbol\\Sigma=[\\sigma_{ij}]$ være kovariansmatrisen der $\\sigma_{ij}=\\text{cov}(R_i,R_j)$.\n\n$$E[R_p] = \\mathbf{w}^{\\top}\\boldsymbol\\mu, \\qquad \\sigma_p^2 = \\mathbf{w}^{\\top}\\boldsymbol\\Sigma \\mathbf{w}$$\n\n**Kovariansmatrisen**\n\ner tabellen som forteller hvordan alle par av verdipapirer henger sammen. Den har $\\frac{n(n-1)}{2}$ distinkte korrelasjoner. Når utvalget av verdipapirer vokser, blir det totale risikobildet bestemt mer av $\\boldsymbol\\Sigma$ enn av enkeltselskapers standardavvik."
    },
    {
      "title": "Diversifisering i praksis",
      "type": "content",
      "content": "1. **Flere verdipapirer → flere uavhengige kilder til avkastning.** Jo lavere korrelasjon, desto større reduksjon i $\\sigma_p$.\n\n2. **Grensen for risikoreduksjon.** Når porteføljen inneholder *tilstrekkelig mange* aktiva, nærmer den samlede risikoen seg markedets *systematiske* risiko. Alt som er *usystematisk* kan tilnærmet elimineres.\n\n3. **Porteføljer med restriksjoner.** Bærekraftige fond som ekskluderer visse sektorer kan få færre diversifiseringsmuligheter og noe høyere risiko enn en helt ubegrenset markedsportefølje—et bevisst valg investor må vurdere."
    },
    {
      "title": "Et kort eksempel med tre aktiva",
      "type": "content",
      "content": "| | Aksje 1 | Aksje 2 | Statsobligasjon |\n|---|---|---|---|\n| μ | 9% | 7% | 3% |\n| σ | 18% | 12% | 2% |\n\nKorrelasjonsmatrisen\n\n$$\\rho = \\begin{pmatrix}\n 1 & 0.3 & -0.1\\\\\n 0.3 & 1 & 0\\\\\n-0.1 & 0 & 1\n\\end{pmatrix}$$\n\ngjør at selv en liten andel statsobligasjoner senker porteføljens totale standardavvik betydelig uten å trekke ned forventet avkastning like mye."
    },
    {
      "title": "Oppsummering",
      "type": "content",
      "content": "• *To aktiva* illustrerer grunnideen: risikoen avhenger av korrelasjonen, ikke bare av hvert aktivums egen volatilitet.\n• *Flere aktiva* krever kovariansmatrisen, men prinsippet er det samme: lav samvariasjon gir bedre risiko-belønning.\n• Den *effisiente fronten* viser porteføljer som gir høyest forventet avkastning for hvert risikonivå.\n• Diversifisering kan eliminere usystematisk risiko; systematisk risiko gjenstår og belønnes med risikopremie."
    }
  ]
}'::jsonb,
updated_at = now()
WHERE id = '5b87be0d-cd23-4c5c-b524-70274946baf9';