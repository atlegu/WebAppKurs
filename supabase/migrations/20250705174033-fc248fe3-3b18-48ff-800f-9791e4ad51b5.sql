-- Update section 6.4 with reflection questions and insights

UPDATE sub_modules 
SET 
    content = jsonb_build_object(
        'sections', jsonb_build_array(
            jsonb_build_object(
                'title', '1. Hva mener vi med risiko?',
                'type', 'content',
                'content', 'Risiko i finans er usikkerheten i fremtidig avkastning. Den kvantifiseres vanligvis som standardavviket ($\sigma$) til avkastningen:

$$\sigma = \sqrt{\mathrm{Var}(R)}$$

der $R$ er periodisk avkastning. Jo større $\sigma$, desto mindre forutsigbar verdi.

!insight Risiko i finanssammenheng er ikke det samme som "fare" i dagliglivet. En investering kan ha høy risiko (volatilitet) men likevel være lønnsom på lang sikt.'
            ),
            jsonb_build_object(
                'title', '2. Intuisjonen bak diversifisering',
                'type', 'content',
                'content', 'Å **diversifisere** betyr å fordele kapitalen på flere investeringer som ikke svinger helt i takt.

• **Eksempel**: En paraply-produsent tjener på regn, mens en solkrem-produsent tjener på sol.
• Når én gjør det dårlig, kan den andre gjøre det bra; de delvis utligner hverandres utslag.

!think Tenk på din egen økonomi: Har du diversifisert inntektskildene dine? Hva skjer hvis din hovedinntekt forsvinner? Diversifisering gjelder ikke bare investeringer, men hele din økonomiske situasjon.'
            ),
            jsonb_build_object(
                'title', '3. Korrelasjon: motoren som avgjør effekten',
                'type', 'content',
                'content', 'Korrelasjonen ($\rho$) mellom to avkastningsserier bestemmer hvor mye risiko som kan fjernes.

$$\rho = +1: \text{Ingen gevinst} \quad \rho \approx 0: \text{Betydelig reduksjon} \quad \rho = -1: \text{Potensiell null risiko}$$

| **Korrelasjon** | **Samvariasjon** | **Diversifiseringseffekt** |
|---|---|---|
| +1 | Helt i takt | Ingen |
| 0 | Uavhengige | Moderat–stor |
| -1 | Perfekt motsatt | Kan fjerne all risiko |

!insight I praksis finner vi sjelden perfekt negativ korrelasjon (-1). De fleste aktivaklasser har positiv korrelasjon, spesielt i krisetider når diversifisering trengs mest.'
            ),
            jsonb_build_object(
                'title', '4. To-aktiva-formelen',
                'type', 'content',
                'content', 'For to investeringer $A$ og $B$ med vekter $w_A$ og $w_B$ ($w_A + w_B = 1$) blir porteføljens varians:

$$\sigma_p^2 = w_A^2\sigma_A^2 + w_B^2\sigma_B^2 + 2w_Aw_B\sigma_A\sigma_B\rho_{AB}$$

Det siste leddet («kovariansleddet») trekker porteføljens totale varians ned når $\rho_{AB} < +1$.

!insight Kovariansleddet er magien i diversifisering: Selv når korrelasjonen er positiv (f.eks. 0,3), reduserer den tredje termen porteføljens totale risiko betydelig.'
            ),
            jsonb_build_object(
                'title', '5. Mange aktiva – hvorfor kurven flater ut',
                'type', 'content',
                'content', 'For $n$ like store investeringer med samme varians $\sigma^2$ og gjensidig korrelasjon $\rho$:

$$\mathrm{Var}(R_p) = \frac{1}{n}\sigma^2 + \left(1-\frac{1}{n}\right)\sigma^2\rho$$

• $\frac{1}{n}\sigma^2$: Usystematisk (bedriftsspesifikk) risiko forsvinner raskt når $n$ øker.
• $\left(1-\frac{1}{n}\right)\sigma^2\rho$: Systematisk (markeds-)risiko blir igjen.

!think Hvor mange aksjer trenger du for å være "diversifisert"? Forskning viser at 15-20 aksjer fjerner det meste av usystematisk risiko, men den systematiske risikoen blir alltid igjen.'
            ),
            jsonb_build_object(
                'title', '6. To hovedtyper risiko',
                'type', 'content',
                'content', '| **Risiko** | **Kilde** | **Kan diversifiseres bort?** |
|---|---|---|
| Usystematisk | Hendelser som rammer enkeltbedrifter | Ja |
| Systematisk | Sjokk som påvirker hele markedet | Nei |

!insight Systematisk risiko er grunnen til at selv den mest diversifiserte porteføljen fortsatt har risiko. Dette er bakgrunnen for CAPM-modellen som vi skal se på.'
            ),
            jsonb_build_object(
                'title', '7. Eksempel',
                'type', 'content',
                'content', '**Data:**

| | A | B |
|---|---|---|
| Standardavvik $\sigma$ | 20% | 25% |
| Forventet avkastning | 10% | 15% |
| Vekt | 0,5 | 0,5 |
| Korrelasjon $\rho_{AB}$ | 0,3 | |

**Beregning:**

$$\begin{aligned}
\sigma_p^2 &= 0{,}5^2 \cdot 0{,}20^2 + 0{,}5^2 \cdot 0{,}25^2 + 2 \cdot 0{,}5 \cdot 0{,}5 \cdot 0{,}20 \cdot 0{,}25 \cdot 0{,}30 \\
&\approx 0{,}0258 \quad \Longrightarrow \quad \sigma_p \approx 16{,}1\%
\end{aligned}$$

Porteføljens risiko (~16%) er lavere enn risikoen til hver av de to investeringene alene.

!component:portfolio-calculator'
            ),
            jsonb_build_object(
                'title', 'Refleksjonsspørsmål',
                'type', 'reflection',
                'content', '**Personlig økonomi:** Hvordan har du diversifisert din egen portefølje (ikke bare investeringer, men inntekt, kompetanse, etc.)? Hvor sårbar er du for systematisk risiko?

**Krise-scenario:** Under finanskrisen 2008 økte korrelasjonen mellom de fleste aktivaklasser dramatisk. Hvorfor tror du diversifisering sviktet akkurat når investorene trengte det mest?

**Optimal diversifisering:** Hvis du kunne velge mellom 100 norske aksjer eller 20 aksjer spredt globalt, hvilken portefølje ville gitt best diversifisering? Hvorfor?

**Fremtidens diversifisering:** Hvordan tror du nye aktivaklasser som kryptovaluta, private equity og ESG-investeringer påvirker diversifiseringsmulighetene?'
            )
        )
    ),
    updated_at = now()
WHERE module_id = '542486da-1974-4674-8342-88df09528a16' 
  AND order_index = 4;