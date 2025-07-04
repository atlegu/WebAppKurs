UPDATE sub_modules 
SET content = jsonb_set(
  content,
  '{sections}',
  '[
    {
      "type": "content",
      "title": "Porteføljerisiko og -avkastning",
      "content": "Når vi kombinerer flere verdipapirer, får vi en ny *portefølje* med egen forventet avkastning og risiko. Diversifisering gjør at porteføljens totale risiko ofte blir lavere enn et vektet gjennomsnitt av enkeltrisikoene—så lenge verdipapirene ikke beveger seg helt i takt.\n\n!insight Nøkkelen til risikoreduksjon ligger ikke i hvor mye hvert verdipapir svinger, men i hvordan de svinger *sammen*. Dette måles ved korrelasjon.\n\n!video[Introduksjon til porteføljerisiko](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\n\n?? Hvorfor tror du at banker og forsikringsselskaper historisk har vært mer opptatt av diversifisering enn enkeltinvestorer?"
    },
    {
      "type": "content", 
      "title": "To aktiva: det første skrittet mot diversifisering",
      "content": "Anta to investeringer $A$ og $B$ med\n\n$$\\begin{aligned}\nE[R_A]&=\\mu_A,&\\quad \\sigma_A &= \\text{SD}(R_A),\\\\\nE[R_B]&=\\mu_B,&\\quad \\sigma_B &= \\text{SD}(R_B),\\\\\n\\rho_{AB}&= \\text{korrelasjon}(R_A,R_B).\n\\end{aligned}$$\n\nLa $w$ være andelen av kapitalen i $A$ (slik at $1-w$ er andelen i $B$). Da blir\n\n$$E[R_p] = w\\mu_A + (1-w)\\mu_B$$\n\n$$\\sigma_p^2 = w^2\\sigma_A^2 + (1-w)^2\\sigma_B^2 + 2w(1-w)\\sigma_A\\sigma_B\\rho_{AB}$$\n\n**Intuisjon**\n\n• Avkastningen er bare et lineært gjennomsnitt av de to komponentene.\n• Risikoen er *ikke* lineær; den tredje termen bestemmes av korrelasjonen. Lav $\\rho_{AB}$ gir kraftig risikoreduksjon.\n\n!think Legg merke til at når $\\rho_{AB} = 1$ (perfekt positiv korrelasjon), blir porteføljerisikoen bare et vektet gjennomsnitt. Men når $\\rho_{AB} < 1$, får vi en *risikoreduksjon* - dette er diversifiseringsgevinsten!"
    },
    {
      "type": "content",
      "title": "Interaktiv porteføljeanalyse", 
      "content": "!component:portfolio-calculator\n\n!insight Eksperimenter med kalkulatoren ovenfor! Prøv å sette korrelasjonen til -1, 0, og 1 og se hvordan porteføljerisikoen endres. Legg merke til at negativ korrelasjon kan gi betydelig risikoreduksjon."
    },
    {
      "type": "content",
      "title": "Numerisk eksempel",
      "content": "$$\\begin{aligned}\n\\mu_A &= 8\\%, & \\sigma_A &= 15\\%,\\\\\n\\mu_B &= 5\\%, & \\sigma_B &= 7\\%,\\\\\n\\rho_{AB} &= 0.2.\n\\end{aligned}$$\n\nVelges $w=0.6$ får vi\n\n$$\\begin{aligned}\nE[R_p] &= 0.6(0.08)+0.4(0.05)=6.8\\%,\\\\\n\\sigma_p &= \\sqrt{0.6^2 \\cdot 0.15^2 + 0.4^2 \\cdot 0.07^2 + 2(0.6)(0.4)(0.15)(0.07)(0.2)}\\approx 9.9\\%.\n\\end{aligned}$$\n\nPorteføljen gir altså *lavere* risiko enn aktiva A, samtidig som forventet avkastning nesten er like høy.\n\n?? Prøv å regne ut dette eksempelet for hånd, og sammenlign med kalkulatoren ovenfor. Hva skjer hvis du endrer korrelasjonen til 0.5 eller -0.2?"
    },
    {
      "type": "content",
      "title": "Flere aktiva: generell porteføljeteori",
      "content": "Med $n$ verdipapirer skriver vi vektvektoren $\\mathbf{w}=(w_1,\\dots,w_n)^{\\top}$, hvor $\\sum_{i=1}^n w_i =1$. La $\\boldsymbol\\mu=(\\mu_1,\\dots,\\mu_n)^{\\top}$ være forventet-avkastnings-vektoren og $\\boldsymbol\\Sigma=[\\sigma_{ij}]$ være kovariansmatrisen der $\\sigma_{ij}=\\text{cov}(R_i,R_j)$.\n\n$$E[R_p] = \\mathbf{w}^{\\top}\\boldsymbol\\mu, \\qquad \\sigma_p^2 = \\mathbf{w}^{\\top}\\boldsymbol\\Sigma \\mathbf{w}$$\n\n**Kovariansmatrisen**\n\ner tabellen som forteller hvordan alle par av verdipapirer henger sammen. Den har $\\frac{n(n-1)}{2}$ distinkte korrelasjoner. Når utvalget av verdipapirer vokser, blir det totale risikobildet bestemt mer av $\\boldsymbol\\Sigma$ enn av enkeltselskapers standardavvik.\n\n!video[Matematikken bak porteføljeoptimering](https://www.youtube.com/watch?v=dQw4w9WgXcQ)"
    },
    {
      "type": "content",
      "title": "Diversifisering i praksis",
      "content": "1. **Flere verdipapirer → flere uavhengige kilder til avkastning.** Jo lavere korrelasjon, desto større reduksjon i $\\sigma_p$.\n\n2. **Grensen for risikoreduksjon.** Når porteføljen inneholder *tilstrekkelig mange* aktiva, nærmer den samlede risikoen seg markedets *systematiske* risiko. Alt som er *usystematisk* kan tilnærmet elimineres.\n\n3. **Porteføljer med restriksjoner.** Bærekraftige fond som ekskluderer visse sektorer kan få færre diversifiseringsmuligheter og noe høyere risiko enn en helt ubegrenset markedsportefølje—et bevisst valg investor må vurdere.\n\n!think Tenk på ditt eget investeringsportfølje (eller den du vil ha). Hvor mange ulike aktiva har du? Hvor høyt tror du korrelasjonen er mellom dem? Hvilke sektorer eller land kan du inkludere for bedre diversifisering?"
    },
    {
      "type": "content", 
      "title": "Et kort eksempel med tre aktiva",
      "content": "| | Aksje 1 | Aksje 2 | Statsobligasjon |\n|---|---|---|---|\n| μ | 9% | 7% | 3% |\n| σ | 18% | 12% | 2% |\n\nKorrelasjonsmatrisen\n\n$$\\rho = \\begin{pmatrix} 1 & 0.3 & -0.1\\\\ 0.3 & 1 & 0\\\\ -0.1 & 0 & 1 \\end{pmatrix}$$\n\ngjør at selv en liten andel statsobligasjoner senker porteføljens totale standardavvik betydelig uten å trekke ned forventet avkastning like mye.\n\n?? Hvorfor tror du at statsobligasjoner ofte har negativ korrelasjon med aksjer? Hva skjer i økonomien når aksjer faller kraftig?"
    },
    {
      "type": "content",
      "title": "Oppsummering",
      "content": "• *To aktiva* illustrerer grunnideen: risikoen avhenger av korrelasjonen, ikke bare av hvert aktivums egen volatilitet.\n• *Flere aktiva* krever kovariansmatrisen, men prinsippet er det samme: lav samvariasjon gir bedre risiko-belønning.\n• Den *effisiente fronten* viser porteføljer som gir høyest forventet avkastning for hvert risikonivå.\n• Diversifisering kan eliminere usystematisk risiko; systematisk risiko gjenstår og belønnes med risikopremie.\n\n!insight Porteføljerisiko handler ikke om å eliminere all risiko, men om å få *betalt* for risikoen du tar. Diversifisering lar deg eliminere *gratis* risiko (usystematisk), slik at du kun tar risiko du blir kompensert for.\n\n?? Kan du tenke deg situasjoner der høy korrelasjon mellom investeringer faktisk kan være ønskelig? Når kan diversifisering være en ulempe?"
    }
  ]'
)
WHERE id = (
  SELECT sm.id 
  FROM sub_modules sm 
  JOIN modules m ON sm.module_id = m.id 
  WHERE m.order_index = 6 AND sm.order_index = 4
);