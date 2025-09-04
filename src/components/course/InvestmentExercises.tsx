import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Eye, EyeOff } from 'lucide-react';

interface Exercise {
  id: number;
  title: string;
  content: string;
  solution: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Oppgave 1: Valg mellom produksjonslinjer",
    content: `Seafood AS vurderer å skifte ut sin gamle produksjonslinje. To alternative teknologier foreligger. Alternativ P koster kr. 100.000 og beregnes å vare i 10 år hvorpå utstyret må skrotes. P gir en forventet årlig netto kontantstrøm på kr. 22.000. Alternativ R koster kr. 85.000, forventes å holde i 8 år og forventes å generere en netto kontantstrøm på 18.000 hvert år.

Valget av teknologi (P eller R) vil låse valget ved framtidige utskiftinger av utstyr. Seafood har beregnet sin totale kapitalkostnad til 12%

Hvilket alternativ bør velges?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Siden maskinene har ulik levetid og skal gjentas, bruker vi annuitetsmetoden (EAA).</p>

<p><strong>Alternativ P:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NPV<sub>P</sub> = -100.000 + 22.000 × [1-(1,12)<sup>-10</sup>]/0,12
NPV<sub>P</sub> = -100.000 + 22.000 × 5,6502
NPV<sub>P</sub> = -100.000 + 124.304 = <strong>24.304 kr</strong>
</div>

<p>Årlig annuitet for P:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
EAA<sub>P</sub> = NPV<sub>P</sub> / Annuitetsfaktor<sub>10,12%</sub>
EAA<sub>P</sub> = 24.304 / 5,6502 = <strong>4.302 kr/år</strong>
</div>

<p><strong>Alternativ R:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NPV<sub>R</sub> = -85.000 + 18.000 × [1-(1,12)<sup>-8</sup>]/0,12
NPV<sub>R</sub> = -85.000 + 18.000 × 4,9676
NPV<sub>R</sub> = -85.000 + 89.417 = <strong>4.417 kr</strong>
</div>

<p>Årlig annuitet for R:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
EAA<sub>R</sub> = 4.417 / 4,9676 = <strong>889 kr/år</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ <strong>Alternativ P bør velges</strong> da det gir høyest årlig annuitet (4.302 kr/år vs 889 kr/år)</p>
</div>`
  },
  {
    id: 2,
    title: "Oppgave 2: Beregning av internrente",
    content: `Beregn internrenten for følgende prosjekt:
Investeringsbeløp (år 0): 50.000 kr
Kontantstrøm år 1: 40.000 kr
Kontantstrøm år 2: 30.000 kr`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Internrenten (IRR) er den diskonteringsrenten som gir NPV = 0:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
0 = -50.000 + 40.000/(1+IRR) + 30.000/(1+IRR)²
</div>

<p>La r = IRR. Vi må løse:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
50.000(1+r)² = 40.000(1+r) + 30.000
50.000(1+r)² - 40.000(1+r) - 30.000 = 0
</div>

<p>Dividerer med 10.000:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
5(1+r)² - 4(1+r) - 3 = 0
</div>

<p>La x = (1+r):</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
5x² - 4x - 3 = 0
</div>

<p>Bruker abc-formelen:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
x = [4 ± √(16 + 60)] / 10 = [4 ± √76] / 10
x = [4 ± 8,718] / 10
x₁ = 1,2718 eller x₂ = -0,4718 (forkastes)
</div>

<p>Siden x = 1 + r:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
r = 1,2718 - 1 = 0,2718 = <strong>27,18%</strong>
</div>

<p><strong>Verifisering:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NPV = -50.000 + 40.000/1,2718 + 30.000/1,2718²
NPV = -50.000 + 31.461 + 18.539 ≈ 0 ✓
</div>

<p class="bg-green-50 p-3 rounded">✓ Internrenten er <strong>27,18%</strong></p>
</div>`
  },
  {
    id: 3,
    title: "Oppgave 3: Prosjekt med flere fortegnsskifter",
    content: `Et prosjekt har følgende kontantstrømmer i periodene 0, 1 og 2: -150, 460, -264.

Bør prosjektet gjennomføres dersom avkastningskravet til prosjektet er 15%?

Forklar kort hvorfor internrentemetoden er lite egnet som beslutningskriterium i dette tilfellet.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>NPV-beregning ved 15% avkastningskrav:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NPV = -150 + 460/(1,15) + (-264)/(1,15)²
NPV = -150 + 400 - 199,62
NPV = <strong>50,38</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ <strong>Prosjektet bør gjennomføres</strong> da NPV > 0</p>

<p><strong>Problem med internrentemetoden:</strong></p>
<p>Internrentemetoden er lite egnet fordi:</p>
<ul class="list-disc pl-5 space-y-2">
<li><strong>Flere fortegnsskifter:</strong> Kontantstrømmen går fra negativ (-150) til positiv (+460) til negativ (-264)</li>
<li><strong>Mulighet for flere internrenter:</strong> Ved flere fortegnsskifter kan det eksistere like mange internrenter som antall fortegnsskifter (Descartes' regel)</li>
<li><strong>Tvetydig beslutningsregel:</strong> Med flere internrenter blir det uklart hvilken som skal sammenlignes med avkastningskravet</li>
</ul>

<p class="bg-yellow-50 p-3 rounded">💡 I dette tilfellet kan prosjektet ha opptil to internrenter, noe som gjør internrentemetoden uegnet som beslutningskriterium. NPV-metoden gir derimot et entydig svar.</p>
</div>`
  },
  {
    id: 4,
    title: "Oppgave 4: Valg mellom maskiner med ulik levetid",
    content: `Securus vurderer å skifte ut en maskin. Det er usikkerhet om hvorvidt man bør anskaffe en tysk maskin (A) eller en svensk (B). Følgende informasjon foreligger:
A) Koster kr. 80.000. Netto kontantstrøm bidrag kr. 18.000 pr. år i 8 år. Null utrangeringsverdi etter 8 år.
B) Koster kr. 65.000. Netto kontantstrøm bidrag kr. 18.000 pr. år i 6 år. Null utrangeringsverdi etter 6 år.

Securus benytter en kapitalkostnad på 13%. Valget Securus gjør i dag, vil binde selskapet opp til samme leverandør når maskinen igjen skal skiftes ut etter 6 eller 8 år.

Hvilket alternativ anbefaler du?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Siden maskinene har ulik levetid og skal gjentas, bruker vi annuitetsmetoden.</p>

<p><strong>Maskin A (tysk, 8 år):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NPV<sub>A</sub> = -80.000 + 18.000 × [1-(1,13)<sup>-8</sup>]/0,13
NPV<sub>A</sub> = -80.000 + 18.000 × 4,7988
NPV<sub>A</sub> = -80.000 + 86.378 = <strong>6.378 kr</strong>
</div>

<p>Årlig annuitet for A:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
EAA<sub>A</sub> = 6.378 / 4,7988 = <strong>1.329 kr/år</strong>
</div>

<p><strong>Maskin B (svensk, 6 år):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NPV<sub>B</sub> = -65.000 + 18.000 × [1-(1,13)<sup>-6</sup>]/0,13
NPV<sub>B</sub> = -65.000 + 18.000 × 3,9976
NPV<sub>B</sub> = -65.000 + 71.957 = <strong>6.957 kr</strong>
</div>

<p>Årlig annuitet for B:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
EAA<sub>B</sub> = 6.957 / 3,9976 = <strong>1.740 kr/år</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ <strong>Maskin B (svensk) anbefales</strong> da den gir høyest årlig annuitet (1.740 kr/år vs 1.329 kr/år)</p>
</div>`
  },
  {
    id: 5,
    title: "Oppgave 5: Beregning av ekvivalent annuitet",
    content: `En investering vil gi følgende kontantstrøm ved utgangen av året:

Utgangen av år    Kontantstrøm
1                 kr. 20.000
2                 kr. 30.000
3                 kr. 15.000

Bruk en kalkulasjonsrente på 15% og beregn den ekvivalente 3-årige annuiteten til denne kontantstrømmen.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Steg 1: Beregn nåverdien av kontantstrømmene:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV = 20.000/(1,15) + 30.000/(1,15)² + 15.000/(1,15)³
PV = 17.391 + 22.684 + 9.863
PV = <strong>49.938 kr</strong>
</div>

<p><strong>Steg 2: Beregn annuitetsfaktoren for 3 år ved 15%:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
AF = [1 - (1,15)<sup>-3</sup>] / 0,15
AF = [1 - 0,6575] / 0,15
AF = 0,3425 / 0,15 = <strong>2,2832</strong>
</div>

<p><strong>Steg 3: Beregn den ekvivalente annuiteten:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Annuitet = PV / AF
Annuitet = 49.938 / 2,2832
Annuitet = <strong>21.872 kr/år</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Den ekvivalente 3-årige annuiteten er <strong>21.872 kr per år</strong></p>

<p class="text-sm text-gray-600">Dette betyr at kontantstrømmene 20.000, 30.000 og 15.000 kr har samme nåverdi som tre like årlige beløp på 21.872 kr.</p>
</div>`
  },
  {
    id: 6,
    title: "Oppgave 6: Gjensidig utelukkende investeringer",
    content: `AS Turbo vurderer to gjensidig utelukkende investeringer (D og E) i nytt utstyr som vil øke produksjonskapasiteten. Turbo benytter et avkastningskrav på 14%. De to alternativene har følgende kontantstrømmer:

År      Investering D    Investering E
0       -50.000         -50.000
1        24.000          15.000
2        24.000          15.000    
3        24.000          15.000
4                        15.000
5                        15.000
6                        15.000

a. Beregn netto nåverdier for D og E.
b. Anta at investeringene skal gjentas ("kjedeinvesteringer") og at dersom man først har valgt det ene alternativet, så må man fortsette å investere i dette. Hvilket alternativ bør da velges?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>a) Netto nåverdier:</strong></p>

<p><em>Investering D (3 år):</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NPV<sub>D</sub> = -50.000 + 24.000 × [1-(1,14)<sup>-3</sup>]/0,14
NPV<sub>D</sub> = -50.000 + 24.000 × 2,3216
NPV<sub>D</sub> = -50.000 + 55.719 = <strong>5.719 kr</strong>
</div>

<p><em>Investering E (6 år):</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NPV<sub>E</sub> = -50.000 + 15.000 × [1-(1,14)<sup>-6</sup>]/0,14
NPV<sub>E</sub> = -50.000 + 15.000 × 3,8887
NPV<sub>E</sub> = -50.000 + 58.330 = <strong>8.330 kr</strong>
</div>

<p><strong>b) Valg ved kjedeinvesteringer:</strong></p>

<p>Siden prosjektene har ulik levetid, må vi beregne årlig annuitet:</p>

<p><em>Annuitet for D:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
EAA<sub>D</sub> = 5.719 / 2,3216 = <strong>2.464 kr/år</strong>
</div>

<p><em>Annuitet for E:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
EAA<sub>E</sub> = 8.330 / 3,8887 = <strong>2.142 kr/år</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Ved kjedeinvesteringer bør <strong>Investering D velges</strong> da den gir høyest årlig annuitet (2.464 kr/år vs 2.142 kr/år)</p>

<p class="bg-yellow-50 p-3 rounded">💡 Merk: Selv om E har høyest NPV som enkeltstående prosjekt, gir D best resultat når investeringene gjentas over tid!</p>
</div>`
  },
  {
    id: 7,
    title: "Oppgave 7: Valg av renseteknologi",
    content: `Statens forurensingstilsyn (SFT) har pålagt AS Utslipp å gjennomføre rensetiltak. Bedriften kan velge mellom to ulike renseteknologier. Begge tilfredsstiller SFTs krav. Teknologi A innerbærer en investering i en rensegenerator på kr. 100.000. Generatoren har en levetid på to år og årlige driftsutgifter på kr. 10.000. Teknologi B koster kr. 140.000 og har en levetid på tre år. Årlige driftsutgifter er kr. 8.000. Utslipp anslår sine kapitalkostnader til 10%. Hvilken teknologi bør velges?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Dette er en kostnadsminimeringsproblem med ulik levetid. Vi beregner årlig ekvivalent kostnad.</p>

<p><strong>Teknologi A (2 år):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NPV<sub>kostnad,A</sub> = 100.000 + 10.000 × [1-(1,10)<sup>-2</sup>]/0,10
NPV<sub>kostnad,A</sub> = 100.000 + 10.000 × 1,7355
NPV<sub>kostnad,A</sub> = 100.000 + 17.355 = <strong>117.355 kr</strong>
</div>

<p>Årlig ekvivalent kostnad for A:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
EAC<sub>A</sub> = 117.355 / 1,7355 = <strong>67.619 kr/år</strong>
</div>

<p><strong>Teknologi B (3 år):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NPV<sub>kostnad,B</sub> = 140.000 + 8.000 × [1-(1,10)<sup>-3</sup>]/0,10
NPV<sub>kostnad,B</sub> = 140.000 + 8.000 × 2,4869
NPV<sub>kostnad,B</sub> = 140.000 + 19.895 = <strong>159.895 kr</strong>
</div>

<p>Årlig ekvivalent kostnad for B:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
EAC<sub>B</sub> = 159.895 / 2,4869 = <strong>64.288 kr/år</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ <strong>Teknologi B bør velges</strong> da den gir lavest årlig kostnad (64.288 kr/år vs 67.619 kr/år)</p>
</div>`
  },
  {
    id: 8,
    title: "Oppgave 8: Utleie av sykler",
    content: `Du har etter lange overveielser bestemt deg for å starte utleie av sykler i Ås. Du har ingått en avtale med Erik Johansen om å få kjøpe 100 DBS sykler for 4000 kroner per stykk. Du har videre analysert deg frem til at årlig vedlikeholdskostnad per sykkel er 200 kroner, og at de varer i 10 år, skrapverdien er 0. Gitt at du har et avkastningkrav på 10% på denne investeringen, hva må du minimum få inn i leieinntekter per år?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Investeringskostnad:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Totalkostnad = 100 sykler × 4.000 kr = <strong>400.000 kr</strong>
</div>

<p><strong>Årlig vedlikeholdskostnad:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Vedlikehold = 100 sykler × 200 kr = <strong>20.000 kr/år</strong>
</div>

<p><strong>Beregn årlig annuitet for investeringen:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Annuitetsfaktor<sub>10år,10%</sub> = [1-(1,10)<sup>-10</sup>]/0,10 = 6,1446
Årlig kapitalkostnad = 400.000 / 6,1446 = <strong>65.095 kr/år</strong>
</div>

<p><strong>Minimum årlig leieinntekt:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Min. leieinntekt = Kapitalkostnad + Vedlikehold
Min. leieinntekt = 65.095 + 20.000 = <strong>85.095 kr/år</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Du må minimum få inn <strong>85.095 kr per år</strong> i leieinntekter for å dekke kapitalkostnader og vedlikehold</p>

<p class="text-sm text-gray-600">Dette tilsvarer 851 kr per sykkel per år, eller ca. 71 kr per måned per sykkel.</p>
</div>`
  },
  {
    id: 9,
    title: "Oppgave 9: Estimering av internrente",
    content: `Du har regnet ut to nåverdier av et investeringsprosjekt:

Avkastningskrav    Nåverdi
15%                +400.000 kroner
25%                -900.000 kroner

Du skal gi et begrunnet svar på hvilket av alternativene nedenfor som ligger nærmest investeringsprosjektets internrente:

13%    18,2%    23,4%    28,9%`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Internrenten (IRR) er den renten som gir NPV = 0. Vi vet at:</p>
<ul class="list-disc pl-5">
<li>Ved 15%: NPV = +400.000 (positiv)</li>
<li>Ved 25%: NPV = -900.000 (negativ)</li>
</ul>

<p>Siden NPV går fra positiv til negativ, må IRR ligge mellom 15% og 25%.</p>

<p><strong>Lineær interpolasjon:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
IRR ≈ r₁ + (r₂ - r₁) × |NPV₁| / (|NPV₁| + |NPV₂|)
IRR ≈ 15% + (25% - 15%) × 400.000 / (400.000 + 900.000)
IRR ≈ 15% + 10% × 400.000 / 1.300.000
IRR ≈ 15% + 10% × 0,3077
IRR ≈ 15% + 3,077%
IRR ≈ <strong>18,077%</strong>
</div>

<p><strong>Vurdering av alternativer:</strong></p>
<ul class="list-disc pl-5 space-y-1">
<li>13% - For lav (under 15%)</li>
<li><strong>18,2% - Nærmest vårt estimat på 18,077%</strong></li>
<li>23,4% - For høy</li>
<li>28,9% - Altfor høy (over 25%)</li>
</ul>

<p class="bg-green-50 p-3 rounded">✓ Internrenten ligger nærmest <strong>18,2%</strong></p>
</div>`
  },
  {
    id: 10,
    title: "Oppgave 10: Oljerørledning med avtakende kontantstrøm",
    content: `Du eier en oljerørledning som vil generere en kontantstrøm på $2 millioner neste år. Driftskostnadene ved rørledningen er minimale, og ledningen forventes å vare i svært lang tid. Dessverre ser det ut til at etterspørselen avtar, slik at kontantstrømmen deretter forventes å avta med 4 prosent årlig. Diskonteringsrenten er 10 prosent.

a. Hva er nåverdien (NV) av rørledningens kontantstrøm hvis man antar at ledningen vil bli benyttet i all evighet (og kontantstrømmen avtar med 4% årlig)? 
b. Hva er NV til kontantstrømmen dersom rørledningen må stenges om 20 år?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>a) Nåverdi ved evigvarende drift:</strong></p>
<p>Dette er en evigvarende kontantstrøm med negativ vekst. Vi bruker Gordon's vekstmodell:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV = CF₁ / (r - g)
hvor: CF₁ = $2 mill, r = 10%, g = -4%

PV = 2 / (0,10 - (-0,04))
PV = 2 / (0,10 + 0,04)
PV = 2 / 0,14
PV = <strong>$14,29 millioner</strong>
</div>

<p><strong>b) Nåverdi ved stenging etter 20 år:</strong></p>
<p>Kontantstrømmen i år t: CF<sub>t</sub> = 2 × (0,96)<sup>t-1</sup></p>

<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV = Σ[t=1 til 20] 2 × (0,96)<sup>t-1</sup> / (1,10)<sup>t</sup>
</div>

<p>Dette kan forenkles til:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
PV = 2 × [1 - (0,96/1,10)<sup>20</sup>] / (1,10 - 0,96)
PV = 2 × [1 - (0,8727)<sup>20</sup>] / 0,14
PV = 2 × [1 - 0,0672] / 0,14
PV = 2 × 0,9328 / 0,14
PV = <strong>$13,33 millioner</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ a) Ved evig drift: <strong>$14,29 millioner</strong><br/>
✓ b) Ved stenging etter 20 år: <strong>$13,33 millioner</strong></p>

<p class="text-sm text-gray-600">Forskjellen ($0,96 mill) representerer verdien av kontantstrømmene etter år 20.</p>
</div>`
  },
  {
    id: 11,
    title: "Oppgave 11: Beregning av årlig kontantstrøm",
    content: `Anta at du investerer kr 1.000.000 i et nytt prosjekt. Prosjektet vil gi det samme innbetalingsoverskuddet (kontantstrømmen) hvert år i de påfølgende 10 år. Prosjektets internrente er 16%.

Du skal beregne det årlige innbetalingsoverskuddet.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p>Ved internrenten er NPV = 0, så:</p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
1.000.000 = CF × Annuitetsfaktor<sub>10år,16%</sub>
</div>

<p><strong>Beregn annuitetsfaktoren:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
AF = [1 - (1,16)<sup>-10</sup>] / 0,16
AF = [1 - 0,2267] / 0,16
AF = 0,7733 / 0,16
AF = 4,8332
</div>

<p><strong>Beregn årlig kontantstrøm:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
CF = 1.000.000 / 4,8332
CF = <strong>206.901 kr/år</strong>
</div>

<p><strong>Verifisering:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NPV = -1.000.000 + 206.901 × 4,8332
NPV = -1.000.000 + 999.997 ≈ 0 ✓
</div>

<p class="bg-green-50 p-3 rounded">✓ Det årlige innbetalingsoverskuddet er <strong>206.901 kr</strong></p>
</div>`
  },
  {
    id: 12,
    title: "Oppgave 12: Kompleks investeringsanalyse",
    content: `Du skal velge mellom to gjensidig utelukkende investeringsprosjekter med ulik levetid. Begge prosjektene, A og B, har et investeringsutlegg i dag på kr 16 millioner. Prosjekt A varer i tre år og gir et årlig netto innbetalingsoverskudd på kr 8 millioner hvert år, mens prosjekt B bare varer i to år og gir et netto innbetalingsoverskudd på kr 10 millioner det første året og kr 12,5 millioner det andre året. Avkastningskravet er 12%.

a) Basert på ovenstående opplysninger, hvilket prosjekt vil du velge hvis det er tale om en engangsinvestering?
b) Hvilket prosjekt vil du velge dersom det er mulig å gjenta dem på nytt over lang tid (i det uendelige) med de samme kontantstrømmer?
c) Hva er det laveste (faste) årlige netto innbetalingsoverskudd som prosjekt A må gi for at dette skal bli valgt under spørsmål a) og under spørsmål b)?

Du kommer så på at du har glemt å ta hensyn til det faktum at investeringsobjektene kan selges ved slutten av hvert år. Utrangeringsverdien for prosjekt A er kr 13 millioner etter 1 år, kr 10 millioner etter 2 år og kr 6 millioner etter 3 år, mens den for prosjekt B er kr 11 millioner etter 1 år og kr 3 millioner etter 2 år.

d) Ved å ta hensyn til de nye opplysningene, hvilket prosjekt vil du nå velge dersom det er mulig å gjenta dem på nytt over lang tid (i det uendelige) med de samme kontantstrømmer? Hva er optimal levetid for det valgte prosjektet?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>a) Engangsinvestering:</strong></p>

<p><em>Prosjekt A:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NPV<sub>A</sub> = -16 + 8×[1-(1,12)<sup>-3</sup>]/0,12
NPV<sub>A</sub> = -16 + 8×2,4018 = -16 + 19,214 = <strong>3,214 mill</strong>
</div>

<p><em>Prosjekt B:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NPV<sub>B</sub> = -16 + 10/1,12 + 12,5/1,12²
NPV<sub>B</sub> = -16 + 8,929 + 9,969 = <strong>2,898 mill</strong>
</div>

<p class="bg-blue-50 p-3 rounded">Ved engangsinvestering: Velg <strong>prosjekt A</strong> (NPV = 3,214 mill)</p>

<p><strong>b) Gjentatte investeringer:</strong></p>

<p><em>Årlig annuitet A:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
EAA<sub>A</sub> = 3,214 / 2,4018 = <strong>1,338 mill/år</strong>
</div>

<p><em>Årlig annuitet B:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
EAA<sub>B</sub> = 2,898 / 1,6901 = <strong>1,715 mill/år</strong>
</div>

<p class="bg-blue-50 p-3 rounded">Ved gjentatte investeringer: Velg <strong>prosjekt B</strong> (EAA = 1,715 mill/år)</p>

<p><strong>c) Break-even kontantstrøm for A:</strong></p>

<p><em>For engangsinvestering (NPV<sub>A</sub> = NPV<sub>B</sub> = 2,898):</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
2,898 = -16 + CF×2,4018
CF = 18,898 / 2,4018 = <strong>7,871 mill/år</strong>
</div>

<p><em>For gjentatte investeringer (EAA<sub>A</sub> = EAA<sub>B</sub> = 1,715):</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
1,715 = NPV<sub>A</sub> / 2,4018
NPV<sub>A</sub> = 4,119
4,119 = -16 + CF×2,4018
CF = 20,119 / 2,4018 = <strong>8,377 mill/år</strong>
</div>

<p><strong>d) Med utrangeringsverdier:</strong></p>

<p>Vi må sjekke optimal levetid for hvert prosjekt:</p>

<p><em>Prosjekt A - 1 år:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NPV = -16 + (8+13)/1,12 = 2,75 mill
EAA = 2,75 / 0,8929 = 3,080 mill/år
</div>

<p><em>Prosjekt A - 2 år:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NPV = -16 + 8/1,12 + (8+10)/1,12² = 6,507 mill
EAA = 6,507 / 1,6901 = 3,851 mill/år
</div>

<p><em>Prosjekt A - 3 år:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NPV = -16 + 8×2,4018 + 6/1,12³ = 7,477 mill
EAA = 7,477 / 2,4018 = 3,113 mill/år
</div>

<p><em>Prosjekt B - 1 år:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NPV = -16 + (10+11)/1,12 = 2,75 mill
EAA = 2,75 / 0,8929 = 3,080 mill/år
</div>

<p><em>Prosjekt B - 2 år:</em></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NPV = -16 + 10/1,12 + (12,5+3)/1,12² = 5,290 mill
EAA = 5,290 / 1,6901 = 3,130 mill/år
</div>

<p class="bg-green-50 p-3 rounded">✓ Velg <strong>prosjekt A med 2 års levetid</strong> (høyest EAA = 3,851 mill/år)</p>
</div>`
  }
];

export default function InvestmentExercises() {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  const currentExercise = exercises[currentExerciseIndex];

  const handleNext = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setShowSolution(false);
    }
  };

  const handlePrevious = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(currentExerciseIndex - 1);
      setShowSolution(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{currentExercise.title}</CardTitle>
            <span className="text-sm text-muted-foreground">
              Oppgave {currentExerciseIndex + 1} av {exercises.length}
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="prose prose-sm max-w-none">
            <div className="whitespace-pre-wrap">{currentExercise.content}</div>
          </div>

          <div className="border-t pt-4">
            <Button
              onClick={() => setShowSolution(!showSolution)}
              variant="outline"
              className="w-full"
            >
              {showSolution ? (
                <>
                  <EyeOff className="mr-2 h-4 w-4" />
                  Skjul løsning
                </>
              ) : (
                <>
                  <Eye className="mr-2 h-4 w-4" />
                  Vis løsning
                </>
              )}
            </Button>
          </div>

          {showSolution && (
            <div className="border rounded-lg p-4 bg-muted/20">
              <div 
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: currentExercise.solution }}
              />
            </div>
          )}

          <div className="flex items-center justify-between pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentExerciseIndex === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Forrige
            </Button>

            <div className="flex gap-1">
              {exercises.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentExerciseIndex(index);
                    setShowSolution(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentExerciseIndex
                      ? 'bg-primary'
                      : 'bg-muted hover:bg-muted-foreground/20'
                  }`}
                  aria-label={`Gå til oppgave ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              onClick={handleNext}
              disabled={currentExerciseIndex === exercises.length - 1}
            >
              Neste
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}