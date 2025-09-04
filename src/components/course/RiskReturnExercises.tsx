import React, { useState, useCallback, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, Eye, EyeOff, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Exercise {
  id: number;
  title: string;
  content: string;
  solution: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Oppgave 1: Avkastningsberegning",
    content: `Aksjen Little John Industries ble 1. januar solgt for $ 1,90 og i slutten av året var prisen $2,50. I tillegg hadde aksjen utbetalt en dividende på 0,20 per aksje. 

Kalkuler Little Johns utbytteavkastning (dividend yield), kapitalavkastning (capital gain yield) og totalavkastning (total rate of return) i prosent.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt:</strong></p>
<ul class="list-disc list-inside">
  <li>P₀ = $1,90 (startpris)</li>
  <li>P₁ = $2,50 (sluttpris)</li>
  <li>D = $0,20 (dividende)</li>
</ul>

<p><strong>1) Utbytteavkastning (Dividend yield):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Dividend yield = D / P₀
Dividend yield = 0,20 / 1,90
Dividend yield = 0,1053 = <strong>10,53%</strong>
</div>

<p><strong>2) Kapitalavkastning (Capital gain yield):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Capital gain yield = (P₁ - P₀) / P₀
Capital gain yield = (2,50 - 1,90) / 1,90
Capital gain yield = 0,60 / 1,90
Capital gain yield = 0,3158 = <strong>31,58%</strong>
</div>

<p><strong>3) Totalavkastning (Total rate of return):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Total return = Dividend yield + Capital gain yield
Total return = 10,53% + 31,58%
Total return = <strong>42,11%</strong>

Alternativt:
Total return = (D + P₁ - P₀) / P₀
Total return = (0,20 + 2,50 - 1,90) / 1,90
Total return = 0,80 / 1,90 = <strong>42,11%</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Aksjen har gitt en betydelig totalavkastning på 42,11%, hovedsakelig drevet av kapitalgevinst</p>
</div>`
  },
  {
    id: 2,
    title: "Oppgave 2: Forventet avkastning og risiko",
    content: `Et spill som koster 100 kroner å delta i, gir følgende odds og mulig utbetaling:

Sannsynlighet    Utbetaling    Netto gevinst
0.10             500           400
0.50             100           0
0.40             0             -100

Hva er forventet gevinst ved dette spillet? Regn også ut standardavvik og varians.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt data:</strong></p>
<table class="border-collapse border border-gray-300">
  <tr>
    <th class="border border-gray-300 p-2">Sannsynlighet (p)</th>
    <th class="border border-gray-300 p-2">Utbetaling</th>
    <th class="border border-gray-300 p-2">Netto gevinst (x)</th>
  </tr>
  <tr>
    <td class="border border-gray-300 p-2">0,10</td>
    <td class="border border-gray-300 p-2">500</td>
    <td class="border border-gray-300 p-2">400</td>
  </tr>
  <tr>
    <td class="border border-gray-300 p-2">0,50</td>
    <td class="border border-gray-300 p-2">100</td>
    <td class="border border-gray-300 p-2">0</td>
  </tr>
  <tr>
    <td class="border border-gray-300 p-2">0,40</td>
    <td class="border border-gray-300 p-2">0</td>
    <td class="border border-gray-300 p-2">-100</td>
  </tr>
</table>

<p><strong>1) Forventet gevinst E(X):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
E(X) = Σ pᵢ × xᵢ
E(X) = 0,10 × 400 + 0,50 × 0 + 0,40 × (-100)
E(X) = 40 + 0 - 40
E(X) = <strong>0 kr</strong>
</div>

<p><strong>2) Varians σ²:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
σ² = Σ pᵢ × (xᵢ - E(X))²
σ² = 0,10 × (400 - 0)² + 0,50 × (0 - 0)² + 0,40 × (-100 - 0)²
σ² = 0,10 × 160.000 + 0,50 × 0 + 0,40 × 10.000
σ² = 16.000 + 0 + 4.000
σ² = <strong>20.000</strong>
</div>

<p><strong>3) Standardavvik σ:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
σ = √σ² = √20.000
σ = <strong>141,42 kr</strong>
</div>

<p class="bg-blue-50 p-3 rounded">Dette er et "fair" spill med forventet gevinst = 0, men med høy risiko (standardavvik = 141,42 kr)</p>
</div>`
  },
  {
    id: 3,
    title: "Oppgave 3: Aritmetisk og geometrisk gjennomsnitt",
    content: `Tabellen nedenfor viser nominell avkastning på børsen i Sør Afrika:

År    Nominell avkastning
1977    -2.64%
1978     9.27%
1979    25.56%
1980    33.67%
1981    -3.75%

a) Beregn gjennomsnittlig avkastning og standardavvik?
b) Regn ut geometrisk gjennomsnittlig avkastning. Hva er forskjellen på aritmetisk og geometrisk gjennomsnitt?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>a) Aritmetisk gjennomsnitt og standardavvik:</strong></p>

<p><strong>Aritmetisk gjennomsnitt:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
r̄ = Σ rᵢ / n
r̄ = (-2,64 + 9,27 + 25,56 + 33,67 - 3,75) / 5
r̄ = 62,11 / 5
r̄ = <strong>12,42%</strong>
</div>

<p><strong>Standardavvik:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Avvik fra gjennomsnitt:
1977: -2,64 - 12,42 = -15,06
1978: 9,27 - 12,42 = -3,15
1979: 25,56 - 12,42 = 13,14
1980: 33,67 - 12,42 = 21,25
1981: -3,75 - 12,42 = -16,17

Varians = Σ(rᵢ - r̄)² / (n-1)
= [(-15,06)² + (-3,15)² + (13,14)² + (21,25)² + (-16,17)²] / 4
= [226,80 + 9,92 + 172,66 + 451,56 + 261,47] / 4
= 1122,41 / 4 = 280,60

σ = √280,60 = <strong>16,75%</strong>
</div>

<p><strong>b) Geometrisk gjennomsnitt:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Kumulativ verdi = Π(1 + rᵢ)
= 0,9736 × 1,0927 × 1,2556 × 1,3367 × 0,9625
= 1,7663

Geometrisk gjennomsnitt = (1,7663)^(1/5) - 1
= 1,1206 - 1
= <strong>12,06%</strong>
</div>

<p><strong>Forskjell mellom aritmetisk og geometrisk gjennomsnitt:</strong></p>
<div class="bg-blue-50 p-3 rounded">
<ul class="list-disc list-inside">
  <li>Aritmetisk gjennomsnitt = 12,42%</li>
  <li>Geometrisk gjennomsnitt = 12,06%</li>
  <li>Differanse = 0,36%</li>
</ul>

<strong>Forklaring:</strong>
- Geometrisk gjennomsnitt er alltid ≤ aritmetisk gjennomsnitt
- Geometrisk gjennomsnitt tar hensyn til renters rente-effekt
- Geometrisk gjennomsnitt gir faktisk oppnådd avkastning over perioden
- Jo høyere volatilitet, jo større blir forskjellen
</div>
</div>`
  },
  {
    id: 4,
    title: "Oppgave 4: Ukjent avkastning",
    content: `En aksje har de fire av de fem siste årene hatt følgende avkastning; 13%, -18%, 9% og 36%. Hvis den gjennomsnittlige avkastningen på aksjen er 11%, hva er da avkastningen det femte året? Hva er standardavviket på avkastingen til aksjen?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt:</strong></p>
<ul class="list-disc list-inside">
  <li>r₁ = 13%</li>
  <li>r₂ = -18%</li>
  <li>r₃ = 9%</li>
  <li>r₄ = 36%</li>
  <li>r₅ = ?</li>
  <li>Gjennomsnitt = 11%</li>
</ul>

<p><strong>1) Finn avkastning år 5:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Gjennomsnitt = (r₁ + r₂ + r₃ + r₄ + r₅) / 5
11 = (13 - 18 + 9 + 36 + r₅) / 5
11 = (40 + r₅) / 5
55 = 40 + r₅
r₅ = <strong>15%</strong>
</div>

<p><strong>Verifisering:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Gjennomsnitt = (13 - 18 + 9 + 36 + 15) / 5 = 55 / 5 = 11% ✓
</div>

<p><strong>2) Beregn standardavvik:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Avvik fra gjennomsnitt:
År 1: 13 - 11 = 2
År 2: -18 - 11 = -29
År 3: 9 - 11 = -2
År 4: 36 - 11 = 25
År 5: 15 - 11 = 4

Varians = Σ(rᵢ - r̄)² / (n-1)
= [2² + (-29)² + (-2)² + 25² + 4²] / 4
= [4 + 841 + 4 + 625 + 16] / 4
= 1490 / 4 = 372,5

σ = √372,5 = <strong>19,30%</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Avkastning år 5 = 15%, Standardavvik = 19,30%</p>
</div>`
  },
  {
    id: 5,
    title: "Oppgave 5: Porteføljeberegning med kovarians",
    content: `Aksjene A og B har gitt følgende avkastning i månedene januar til desember. Dette gir tilnærmet samme forventede avkastning og standardavvik for aksjene A og B, selv om kursene for A og B beveger seg ulikt.

Aksje A og B har begge:
- Gjennomsnitt: 0,94%
- Varians: 0,0025
- Standardavvik: 0,05 (5%)

Beregn forventet avkastning og standardavvik for en portefølje hvor 60% av porteføljen er investert i aksje A og resten i aksje B.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt:</strong></p>
<ul class="list-disc list-inside">
  <li>wₐ = 60% = 0,6 (vekt aksje A)</li>
  <li>wᵦ = 40% = 0,4 (vekt aksje B)</li>
  <li>E(rₐ) = E(rᵦ) = 0,94%</li>
  <li>σₐ = σᵦ = 5%</li>
</ul>

<p><strong>1) Forventet porteføljeavkastning:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
E(rₚ) = wₐ × E(rₐ) + wᵦ × E(rᵦ)
E(rₚ) = 0,6 × 0,94% + 0,4 × 0,94%
E(rₚ) = 0,564% + 0,376%
E(rₚ) = <strong>0,94%</strong>
</div>

<p class="bg-blue-50 p-3 rounded">Merk: Siden begge aksjer har samme forventede avkastning, blir porteføljens forventede avkastning også 0,94%</p>

<p><strong>2) Porteføljens standardavvik:</strong></p>
<p>Først må vi beregne korrelasjonen mellom A og B basert på månedlige data:</p>

<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Basert på de månedlige avkastningene kan vi beregne:
Kovarians(A,B) ≈ -0,0012
Korrelasjon ρ = Kov(A,B) / (σₐ × σᵦ)
ρ = -0,0012 / (0,05 × 0,05) = -0,48

Porteføljens varians:
σₚ² = wₐ²σₐ² + wᵦ²σᵦ² + 2wₐwᵦσₐσᵦρ
σₚ² = 0,6² × 0,05² + 0,4² × 0,05² + 2 × 0,6 × 0,4 × 0,05 × 0,05 × (-0,48)
σₚ² = 0,0009 + 0,0004 + 2 × 0,6 × 0,4 × 0,0025 × (-0,48)
σₚ² = 0,0013 - 0,000576
σₚ² = 0,000724

σₚ = √0,000724 = <strong>2,69%</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Porteføljens avkastning = 0,94%, Standardavvik = 2,69%</p>
<p class="bg-yellow-50 p-3 rounded">Merk: Diversifisering har redusert risikoen fra 5% til 2,69% pga negativ korrelasjon</p>
</div>`
  },
  {
    id: 6,
    title: "Oppgave 6: Portefølje med gitt korrelasjon",
    content: `To aksjer har følgende forventede avkastning med tilhørende standardavvik:

                 Forventet avkastning    Standardavvik
Aksje A          14%                     12%
Aksje B          9%                      5%

Beregn forventet avkastning og tilhørende standardavvik for en portefølje der 55% av formuen er investert i aksje A og resten i aksje B, når korrelasjonskoeffisienten mellom aksjenes avkastning er 0,35.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt:</strong></p>
<ul class="list-disc list-inside">
  <li>E(rₐ) = 14%, σₐ = 12%</li>
  <li>E(rᵦ) = 9%, σᵦ = 5%</li>
  <li>wₐ = 55% = 0,55</li>
  <li>wᵦ = 45% = 0,45</li>
  <li>ρₐᵦ = 0,35</li>
</ul>

<p><strong>1) Forventet porteføljeavkastning:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
E(rₚ) = wₐ × E(rₐ) + wᵦ × E(rᵦ)
E(rₚ) = 0,55 × 14% + 0,45 × 9%
E(rₚ) = 7,7% + 4,05%
E(rₚ) = <strong>11,75%</strong>
</div>

<p><strong>2) Porteføljens standardavvik:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
σₚ² = wₐ²σₐ² + wᵦ²σᵦ² + 2wₐwᵦσₐσᵦρₐᵦ

σₚ² = (0,55)² × (0,12)² + (0,45)² × (0,05)² + 2 × 0,55 × 0,45 × 0,12 × 0,05 × 0,35

σₚ² = 0,3025 × 0,0144 + 0,2025 × 0,0025 + 2 × 0,55 × 0,45 × 0,006 × 0,35

σₚ² = 0,004356 + 0,000506 + 0,001040

σₚ² = 0,005902

σₚ = √0,005902 = 0,0768 = <strong>7,68%</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Porteføljens forventede avkastning = 11,75%, Standardavvik = 7,68%</p>
</div>`
  },
  {
    id: 7,
    title: "Oppgave 7: Portefølje med ulik korrelasjon",
    content: `Aksje A har en forventet avkastning på 16% og et standardavvik på 28%. Aksje B har en forventet avkastning på 21% og et standardavvik på 36%. Beregn forventet porteføljeavkastning og standardavvik for en likeveid portefølje av A og B gitt at:

a) Korrelasjonen mellom A og B er 1.0
b) Korrelasjonen mellom A og B er 0.5
c) Korrelasjonen mellom A og B er -0.5`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt:</strong></p>
<ul class="list-disc list-inside">
  <li>E(rₐ) = 16%, σₐ = 28%</li>
  <li>E(rᵦ) = 21%, σᵦ = 36%</li>
  <li>wₐ = wᵦ = 50% = 0,5 (likeveid)</li>
</ul>

<p><strong>Forventet avkastning (samme for alle tilfeller):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
E(rₚ) = 0,5 × 16% + 0,5 × 21% = 8% + 10,5% = <strong>18,5%</strong>
</div>

<p><strong>a) ρ = 1,0 (perfekt positiv korrelasjon):</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
σₚ² = 0,5² × 0,28² + 0,5² × 0,36² + 2 × 0,5 × 0,5 × 0,28 × 0,36 × 1,0
σₚ² = 0,25 × 0,0784 + 0,25 × 0,1296 + 0,5 × 0,1008
σₚ² = 0,0196 + 0,0324 + 0,0504
σₚ² = 0,1024
σₚ = √0,1024 = <strong>32%</strong>

Alternativ (enklere ved ρ = 1):
σₚ = wₐσₐ + wᵦσᵦ = 0,5 × 28% + 0,5 × 36% = 14% + 18% = <strong>32%</strong>
</div>

<p><strong>b) ρ = 0,5:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
σₚ² = 0,25 × 0,0784 + 0,25 × 0,1296 + 0,5 × 0,1008 × 0,5
σₚ² = 0,0196 + 0,0324 + 0,0252
σₚ² = 0,0772
σₚ = √0,0772 = <strong>27,78%</strong>
</div>

<p><strong>c) ρ = -0,5:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
σₚ² = 0,25 × 0,0784 + 0,25 × 0,1296 + 0,5 × 0,1008 × (-0,5)
σₚ² = 0,0196 + 0,0324 - 0,0252
σₚ² = 0,0268
σₚ = √0,0268 = <strong>16,37%</strong>
</div>

<p class="bg-blue-50 p-3 rounded">
<strong>Oppsummering:</strong>
- Forventet avkastning = 18,5% (uavhengig av korrelasjon)
- Standardavvik ved ρ = 1,0: 32%
- Standardavvik ved ρ = 0,5: 27,78%
- Standardavvik ved ρ = -0,5: 16,37%
</p>

<p class="bg-yellow-50 p-3 rounded">Merk: Jo lavere korrelasjon, jo større diversifiseringsgevinst!</p>
</div>`
  },
  {
    id: 8,
    title: "Oppgave 8: NPV med CAPM",
    content: `Solar a.s. har en beta på 1,25. Dagens risikofri rente er 7% og forventet avkastning på en veldiversifisert markedsportefølje («markedsavkastningen») er 15%. Solar vurderer et investeringsprosjekt med samme risiko som gjennomsnittet for selskapets øvrige engasjementer. Prosjektet krever en investering på 70 mill. og gir en forventet kontantstrøm på 18 mill pr. år i 8 år. Deretter må en regne med å stenge prosjektet, som på det tidspunkt ikke vil ha noen verdi. 

Bør Solar gå inn i prosjektet?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt:</strong></p>
<ul class="list-disc list-inside">
  <li>β = 1,25</li>
  <li>rf = 7%</li>
  <li>E(rm) = 15%</li>
  <li>Investering = 70 mill</li>
  <li>Årlig kontantstrøm = 18 mill i 8 år</li>
  <li>Terminalverdi = 0</li>
</ul>

<p><strong>Steg 1: Beregn avkastningskrav med CAPM</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
r = rf + β × (E(rm) - rf)
r = 7% + 1,25 × (15% - 7%)
r = 7% + 1,25 × 8%
r = 7% + 10%
r = <strong>17%</strong>
</div>

<p><strong>Steg 2: Beregn nåverdi av kontantstrømmer</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Dette er en annuitet med 8 like betalinger:
PV = CF × [1 - (1 + r)^(-n)] / r
PV = 18 × [1 - (1,17)^(-8)] / 0,17
PV = 18 × [1 - 0,2843] / 0,17
PV = 18 × 4,2100
PV = <strong>75,78 mill</strong>
</div>

<p><strong>Steg 3: Beregn NPV</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
NPV = PV - Investering
NPV = 75,78 - 70
NPV = <strong>5,78 mill</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ <strong>Ja, Solar bør gå inn i prosjektet</strong> siden NPV > 0</p>

<p class="bg-blue-50 p-3 rounded">Prosjektet har positiv netto nåverdi på 5,78 mill kr, som betyr at det skaper verdi utover avkastningskravet på 17%</p>
</div>`
  },
  {
    id: 9,
    title: "Oppgave 9: Verdipapirmarkedslinjen (SML)",
    content: `Statsobligasjonsrenten er 4% og forventet avkastning på markedsporteføljen er 12%. På grunnlag av kapitalverdimodellen (CAPM):

1. Hva kaller du denne figuren?
2. Hva er risikopremien i dette tilfellet?
3. Hva er avkastningskravet til en investering med beta lik 1,5?
4. Hvis en investering med beta lik 0,8 har en forventet avkastning på 9,8%, har investeringen da positiv netto nåverdi (NNV)?
5. Hvis markedet forventer en avkastning på 11,2% på aksje X, hva er dens beta?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt:</strong></p>
<ul class="list-disc list-inside">
  <li>rf = 4%</li>
  <li>E(rm) = 12%</li>
</ul>

<p><strong>1) Hva kaller du denne figuren?</strong></p>
<div class="bg-gray-100 p-3 rounded">
<strong>Verdipapirmarkedslinjen (Security Market Line - SML)</strong>

SML viser sammenhengen mellom systematisk risiko (beta) og forventet avkastning.
Likning: E(r) = rf + β × (E(rm) - rf)
</div>

<p><strong>2) Risikopremien:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Markedets risikopremie = E(rm) - rf
= 12% - 4%
= <strong>8%</strong>
</div>

<p><strong>3) Avkastningskrav for β = 1,5:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
E(r) = rf + β × (E(rm) - rf)
E(r) = 4% + 1,5 × 8%
E(r) = 4% + 12%
E(r) = <strong>16%</strong>
</div>

<p><strong>4) NPV for investering med β = 0,8 og E(r) = 9,8%:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Avkastningskrav (CAPM): E(r) = 4% + 0,8 × 8% = 10,4%
Forventet avkastning: 9,8%

Siden 9,8% < 10,4%:
<strong>NEI, investeringen har negativ NPV</strong>
</div>

<p><strong>5) Beta for aksje X med E(r) = 11,2%:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
11,2% = 4% + β × 8%
7,2% = β × 8%
β = 7,2% / 8%
β = <strong>0,9</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ Aksje X har beta = 0,9</p>
</div>`
  },
  {
    id: 10,
    title: "Oppgave 10: Diversifisering og verdi",
    content: `Global Stål vurderer å spre seg på flere nye virksomhetsområder. Som et resultat av denne spredningen, forventer man at selskapets systematiske risiko vil bli redusert. Beta forventes å falle fra 1,3 til 0,9. På den annen side forventes den langsiktige årlige veksten i dividendeutbetaling å falle fra 8% til 7% dersom diversifiseringen gjennomføres.

Dagens dividendeutbetaling (D₀) er kr. 3,00 per aksje. Forventet markedsavkastning er 14%, risikofri rente er 7%.

Bør Global Stål gjennomføre diversifiseringen?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt:</strong></p>
<ul class="list-disc list-inside">
  <li>D₀ = kr 3,00</li>
  <li>rf = 7%, E(rm) = 14%</li>
  <li>Før: β = 1,3, g = 8%</li>
  <li>Etter: β = 0,9, g = 7%</li>
</ul>

<p><strong>Alternativ 1: Ingen diversifisering</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Avkastningskrav: r = 7% + 1,3 × (14% - 7%) = 7% + 9,1% = 16,1%
D₁ = D₀ × (1 + g) = 3 × 1,08 = 3,24

P₀ = D₁ / (r - g) = 3,24 / (0,161 - 0,08) = 3,24 / 0,081 = <strong>kr 40,00</strong>
</div>

<p><strong>Alternativ 2: Med diversifisering</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Avkastningskrav: r = 7% + 0,9 × (14% - 7%) = 7% + 6,3% = 13,3%
D₁ = D₀ × (1 + g) = 3 × 1,07 = 3,21

P₀ = D₁ / (r - g) = 3,21 / (0,133 - 0,07) = 3,21 / 0,063 = <strong>kr 50,95</strong>
</div>

<p><strong>Konklusjon:</strong></p>
<div class="bg-green-50 p-3 rounded">
<strong>JA, Global Stål bør gjennomføre diversifiseringen</strong>

Aksjeverdi øker fra kr 40,00 til kr 50,95 (+27,4%)

Selv om veksten reduseres fra 8% til 7%, mer enn kompenseres dette av:
- Lavere beta (1,3 → 0,9) 
- Lavere avkastningskrav (16,1% → 13,3%)
- Reduksjon i avkastningskrav (2,8%) > reduksjon i vekst (1%)
</div>
</div>`
  },
  {
    id: 11,
    title: "Oppgave 11: Beta og diversifisering",
    content: `Markedsporteføljen har et standardavvik på 20%, og kovariansen mellom markedsavkastningen og avkastningen til aksje Z er 800.

1. Hva er betaen for aksje Z?
2. Hva er standardavviket til en fullt diversifisert portefølje av slike aksjer, dvs. aksjer med samme beta som Z?
3. Hva er gjennomsnittlig beta for alle aksjer?
4. Hvis markedsporteføljen ga en ekstraavkastning på 5%, hvor høy ekstraavkastning ville du forvente for aksje Z?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt:</strong></p>
<ul class="list-disc list-inside">
  <li>σm = 20% = 0,20</li>
  <li>Cov(Z,m) = 800 (NB: antar dette er 0,08 = 8%²)</li>
</ul>

<p><strong>1) Beta for aksje Z:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
βz = Cov(Z,m) / σm²
βz = 0,08 / (0,20)²
βz = 0,08 / 0,04
βz = <strong>2,0</strong>
</div>

<p><strong>2) Standardavvik for fullt diversifisert portefølje:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
For en fullt diversifisert portefølje elimineres all usystematisk risiko.
Kun systematisk risiko gjenstår:

σp = β × σm
σp = 2,0 × 20%
σp = <strong>40%</strong>
</div>

<p><strong>3) Gjennomsnittlig beta for alle aksjer:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Markedsporteføljen består av alle aksjer vektet etter markedsverdi.
Markedsporteføljens beta = 1,0 per definisjon.

Derfor: Gjennomsnittlig beta = <strong>1,0</strong>
</div>

<p><strong>4) Forventet ekstraavkastning for aksje Z:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
I henhold til CAPM er forventet ekstraavkastning proporsjonal med beta:

E(rz) - rf = βz × (E(rm) - rf)
E(rz) - rf = 2,0 × 5%
E(rz) - rf = <strong>10%</strong>
</div>

<p class="bg-blue-50 p-3 rounded">
Merk: Aksje Z har dobbelt så høy systematisk risiko som markedet (β = 2,0), og forventes derfor å gi dobbelt så høy ekstraavkastning.
</p>
</div>`
  },
  {
    id: 12,
    title: "Oppgave 12: Portefølje med ulik korrelasjon",
    content: `Du vurderer å investere i to verdipapirer, X og Y. Følgende data foreligger:

                            Verdipapir X    Verdipapir Y
Forventet avkastning        10%             7%
Standardavvik avkastning    8%              4%
Beta                        1,1             0,75

a) Hvis du investerer 40% av din formue i X og 60% i Y og korrelasjonen mellom avkastningene til de to er +0,50, hva blir da:
   i. Forventet porteføljeavkastning
   ii. Standardavviket til porteføljeavkastningen?

b) Hva skjer med forventet avkastning og standardavvik til porteføljen dersom:
   i. Korrelasjonen er +1,0
   ii. Korrelasjonen er 0,0
   iii. Korrelasjonen er -0,7?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt:</strong></p>
<ul class="list-disc list-inside">
  <li>wx = 40% = 0,4, wy = 60% = 0,6</li>
  <li>E(rx) = 10%, σx = 8%</li>
  <li>E(ry) = 7%, σy = 4%</li>
</ul>

<p><strong>a) Med ρ = 0,50:</strong></p>

<p><strong>i. Forventet porteføljeavkastning:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
E(rp) = wx × E(rx) + wy × E(ry)
E(rp) = 0,4 × 10% + 0,6 × 7%
E(rp) = 4% + 4,2%
E(rp) = <strong>8,2%</strong>
</div>

<p><strong>ii. Standardavvik:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
σp² = wx²σx² + wy²σy² + 2wxwyσxσyρ
σp² = (0,4)² × (0,08)² + (0,6)² × (0,04)² + 2 × 0,4 × 0,6 × 0,08 × 0,04 × 0,5
σp² = 0,16 × 0,0064 + 0,36 × 0,0016 + 0,48 × 0,0032 × 0,5
σp² = 0,001024 + 0,000576 + 0,000768
σp² = 0,002368
σp = √0,002368 = <strong>4,87%</strong>
</div>

<p><strong>b) Ulike korrelasjoner (forventet avkastning forblir 8,2%):</strong></p>

<p><strong>i. ρ = +1,0:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
σp = |wx × σx + wy × σy| = |0,4 × 8% + 0,6 × 4%|
σp = |3,2% + 2,4%| = <strong>5,6%</strong>
</div>

<p><strong>ii. ρ = 0,0:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
σp² = wx²σx² + wy²σy²
σp² = 0,001024 + 0,000576 = 0,001600
σp = √0,001600 = <strong>4,0%</strong>
</div>

<p><strong>iii. ρ = -0,7:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
σp² = 0,001024 + 0,000576 + 2 × 0,4 × 0,6 × 0,08 × 0,04 × (-0,7)
σp² = 0,001600 - 0,001075
σp² = 0,000525
σp = √0,000525 = <strong>2,29%</strong>
</div>

<p class="bg-blue-50 p-3 rounded">
<strong>Oppsummering:</strong>
- Forventet avkastning = 8,2% (uavhengig av korrelasjon)
- Standardavvik ved ρ = +1,0: 5,6%
- Standardavvik ved ρ = +0,5: 4,87%
- Standardavvik ved ρ = 0,0: 4,0%
- Standardavvik ved ρ = -0,7: 2,29%
</p>
</div>`
  },
  {
    id: 13,
    title: "Oppgave 13: CAPM og dividendemodellen",
    content: `Dividendeutbetalingen (utbyttet) i a.s. NHL er dette året kr. 2,50 pr. aksje. Ledelsen i NHL forventer at dividenden vil vokse med 5% p.a. i lang tid framover. Den risikofrie renten er for tida 7,5% og meravkastningen i aksjemarkedet (markedets risikopremie) forventes å ligge på 8,3%. Du har beregnet betaen til a.s. NHL til 1,10.

Hva vil du antyde er en fornuftig pris på aksjene i NHL med utgangspunkt i kapitalverdimodellen (CAPM) og dividendemodellen for prising av aksjer?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt:</strong></p>
<ul class="list-disc list-inside">
  <li>D₀ = kr 2,50</li>
  <li>g = 5% = 0,05</li>
  <li>rf = 7,5% = 0,075</li>
  <li>Markedets risikopremie = 8,3% = 0,083</li>
  <li>β = 1,10</li>
</ul>

<p><strong>Steg 1: Beregn avkastningskrav med CAPM</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
r = rf + β × (E(rm) - rf)
r = 7,5% + 1,10 × 8,3%
r = 7,5% + 9,13%
r = <strong>16,63%</strong>
</div>

<p><strong>Steg 2: Beregn neste års dividende</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
D₁ = D₀ × (1 + g)
D₁ = 2,50 × 1,05
D₁ = <strong>kr 2,625</strong>
</div>

<p><strong>Steg 3: Beregn aksjepris med Gordon-modellen</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
P₀ = D₁ / (r - g)
P₀ = 2,625 / (0,1663 - 0,05)
P₀ = 2,625 / 0,1163
P₀ = <strong>kr 22,57</strong>
</div>

<p class="bg-green-50 p-3 rounded">✓ En fornuftig pris på NHL-aksjen er <strong>kr 22,57</strong></p>

<p class="bg-blue-50 p-3 rounded">
Merk: Avkastningskravet (16,63%) reflekterer at NHL har høyere systematisk risiko enn markedet (β = 1,10)
</p>
</div>`
  },
  {
    id: 14,
    title: "Oppgave 14: Finn markedsavkastning og risikofri rente",
    content: `Aksje J har en beta på 1.2 og en forventet avkastning på 15.6%. Aksje K har en beta på 0.8 og en forventet avkastning på 12.4%.

Gitt kapitalverdimodellen (CAPM), hva er da markedsavkastningen og den risikofri renten?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt:</strong></p>
<ul class="list-disc list-inside">
  <li>Aksje J: βJ = 1,2, E(rJ) = 15,6%</li>
  <li>Aksje K: βK = 0,8, E(rK) = 12,4%</li>
</ul>

<p><strong>Sett opp CAPM-likninger:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
For aksje J: 15,6% = rf + 1,2 × (E(rm) - rf)    ... (1)
For aksje K: 12,4% = rf + 0,8 × (E(rm) - rf)    ... (2)
</div>

<p><strong>Løs likningssystemet:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Fra (1): 15,6% = rf + 1,2 × E(rm) - 1,2 × rf
        15,6% = rf(1 - 1,2) + 1,2 × E(rm)
        15,6% = -0,2 × rf + 1,2 × E(rm)      ... (3)

Fra (2): 12,4% = rf + 0,8 × E(rm) - 0,8 × rf
        12,4% = 0,2 × rf + 0,8 × E(rm)       ... (4)

Trekk (4) fra (3):
15,6% - 12,4% = -0,2 × rf - 0,2 × rf + 1,2 × E(rm) - 0,8 × E(rm)
3,2% = -0,4 × rf + 0,4 × E(rm)
3,2% = 0,4 × (E(rm) - rf)
8% = E(rm) - rf                              ... (5)

Sett (5) inn i (2):
12,4% = rf + 0,8 × 8%
12,4% = rf + 6,4%
rf = <strong>6%</strong>

Fra (5): E(rm) = rf + 8% = 6% + 8% = <strong>14%</strong>
</div>

<p><strong>Verifisering:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Aksje J: 6% + 1,2 × (14% - 6%) = 6% + 9,6% = 15,6% ✓
Aksje K: 6% + 0,8 × (14% - 6%) = 6% + 6,4% = 12,4% ✓
</div>

<p class="bg-green-50 p-3 rounded">✓ Risikofri rente = 6%, Markedsavkastning = 14%</p>
</div>`
  },
  {
    id: 15,
    title: "Oppgave 15: SML og porteføljeanalyse",
    content: `Som aksjerådgiver har du fått i oppdrag å analysere aksjene i selskapene Sats, Trane og Ulv. Risikofri rente er 6%, mens markedsporteføljens forventede avkastning er 11%. Basert på historiske priser har du målt betaverdien for de tre aksjene til 0,8; 1,2 og 2,0 for henholdsvis Sats, Trane og Ulv. Dagens aksjepris er kr 100 for alle tre.

I dine egne analyser har du kommet frem til at en investor i Sats ikke vil motta noe dividende neste år, men du forventer at aksjen har steget med kr 11 ved utgangen av det året. Tilsvarende forventes en investor i Trane å få en dividende på kr 5 per aksje og i tillegg en prisstigning på kr 7, mens en investor i Ulv forventes å få en dividende på kr 14 og ingen prisendring.

• Plott inn i diagram posisjonen til de tre aksjene basert på de gitte opplysningene.
• Forklar kort hva en aksjes karakteristiske linje representerer.
• Forklar kort hva det betyr at Ulv-aksjen har en betaverdi på 2,0.
• Hvilken av de tre aksjene ville en risikonøytral investor velge?

Du investerer 25% av dine midler i Sats-aksjen, 50% i Trane-aksjen og 25% i Ulv-aksjen.
• Hvilken betaverdi får din portefølje?
• Hvilken betaverdi får en portefølje bestående av en andel på -0,5 risikofritt og en andel på 1,5 i Trane-aksjen?
• Hvis du har kr 200.000 disponibelt, hvordan går du frem for å lage den siste porteføljen?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt:</strong></p>
<ul class="list-disc list-inside">
  <li>rf = 6%, E(rm) = 11%</li>
  <li>βSats = 0,8, βTrane = 1,2, βUlv = 2,0</li>
  <li>P₀ = kr 100 for alle</li>
</ul>

<p><strong>Del 1: Beregn forventet og faktisk avkastning</strong></p>

<div class="bg-gray-100 p-3 rounded font-mono text-sm">
<strong>CAPM-krav:</strong>
Sats: E(r) = 6% + 0,8 × (11% - 6%) = 6% + 4% = 10%
Trane: E(r) = 6% + 1,2 × (11% - 6%) = 6% + 6% = 12%
Ulv: E(r) = 6% + 2,0 × (11% - 6%) = 6% + 10% = 16%

<strong>Faktisk forventet avkastning:</strong>
Sats: (0 + 11) / 100 = 11%
Trane: (5 + 7) / 100 = 12%
Ulv: (14 + 0) / 100 = 14%
</div>

<p><strong>Posisjon relativt til SML:</strong></p>
<ul class="list-disc list-inside">
  <li><strong>Sats</strong>: 11% > 10% → Over SML → Underpriset</li>
  <li><strong>Trane</strong>: 12% = 12% → På SML → Riktig priset</li>
  <li><strong>Ulv</strong>: 14% < 16% → Under SML → Overpriset</li>
</ul>

<p><strong>Karakteristisk linje:</strong></p>
<div class="bg-blue-50 p-3 rounded">
Den karakteristiske linjen viser sammenhengen mellom en aksjes avkastning og markedets avkastning. Stigningstallet er aksjens beta, og skjæringspunktet med y-aksen er alfa (meravkastning utover CAPM).
</div>

<p><strong>Beta = 2,0 for Ulv betyr:</strong></p>
<div class="bg-blue-50 p-3 rounded">
- Ulv har dobbelt så høy systematisk risiko som markedet
- Når markedet stiger 1%, forventes Ulv å stige 2%
- Når markedet faller 1%, forventes Ulv å falle 2%
- Ulv er svært følsom for markedsbevegelser
</div>

<p><strong>Risikonøytral investor:</strong></p>
<div class="bg-green-50 p-3 rounded">
En risikonøytral investor ville velge <strong>Sats</strong> siden den har høyest forventet avkastning (11%) relativt til kravet.
</div>

<p><strong>Del 2: Porteføljeberegninger</strong></p>

<p><strong>Portefølje med 25% Sats, 50% Trane, 25% Ulv:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
βp = 0,25 × 0,8 + 0,50 × 1,2 + 0,25 × 2,0
βp = 0,2 + 0,6 + 0,5
βp = <strong>1,3</strong>
</div>

<p><strong>Portefølje med -50% risikofritt og 150% Trane:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
βp = -0,5 × 0 + 1,5 × 1,2
βp = 0 + 1,8
βp = <strong>1,8</strong>
</div>

<p><strong>Implementering med kr 200.000:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
1. <strong>Lån</strong> kr 100.000 til risikofri rente (6%)
2. <strong>Kjøp</strong> Trane-aksjer for kr 300.000 (egne 200.000 + lånte 100.000)
3. Total eksponering: 150% av kapitalen i Trane
4. Netto posisjon: -50% risikofritt + 150% Trane
</div>

<p class="bg-yellow-50 p-3 rounded">Merk: Dette er en belånt posisjon med høy risiko (β = 1,8)</p>
</div>`
  },
  {
    id: 16,
    title: "Oppgave 16: Effisiente porteføljer",
    content: `Fire verdipapirer, A, B, C og D, har en forventet avkastning på henholdsvis 12%, 14%, 8% og 6%, og et tilhørende standardavvik på henholdsvis 10%, 8%, 10% og 6%. Anta at det skal investeres i kun ett av verdipapirene.

a) Forklar hvilke verdipapirer som er uaktuelle for:
   - en risikoavers investor
   - en risikonøytral investor
   - en risikosøkende investor

Du vil investere en andel a i verdipapir A og en andel 1-a i verdipapir C. Korrelasjonskoeffisienten mellom avkastningene er -0,5.

b) Vis sammenhengen mellom forventet avkastning og standardavvik for verdier av a fra 0 til 1.
   - Hvilken verdi på a minimerer risikoen?
   - Beregn tilhørende forventet avkastning og standardavvik.
   - Er denne porteføljen bedre enn B og D alene for risikoaverse investorer?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>Gitt data:</strong></p>
<table class="border-collapse border border-gray-300">
  <tr>
    <th class="border border-gray-300 p-2">Verdipapir</th>
    <th class="border border-gray-300 p-2">E(r)</th>
    <th class="border border-gray-300 p-2">σ</th>
    <th class="border border-gray-300 p-2">Sharpe-ratio</th>
  </tr>
  <tr>
    <td class="border border-gray-300 p-2">A</td>
    <td class="border border-gray-300 p-2">12%</td>
    <td class="border border-gray-300 p-2">10%</td>
    <td class="border border-gray-300 p-2">1,20</td>
  </tr>
  <tr>
    <td class="border border-gray-300 p-2">B</td>
    <td class="border border-gray-300 p-2">14%</td>
    <td class="border border-gray-300 p-2">8%</td>
    <td class="border border-gray-300 p-2">1,75</td>
  </tr>
  <tr>
    <td class="border border-gray-300 p-2">C</td>
    <td class="border border-gray-300 p-2">8%</td>
    <td class="border border-gray-300 p-2">10%</td>
    <td class="border border-gray-300 p-2">0,80</td>
  </tr>
  <tr>
    <td class="border border-gray-300 p-2">D</td>
    <td class="border border-gray-300 p-2">6%</td>
    <td class="border border-gray-300 p-2">6%</td>
    <td class="border border-gray-300 p-2">1,00</td>
  </tr>
</table>

<p><strong>a) Uaktuelle verdipapirer:</strong></p>

<div class="bg-blue-50 p-3 rounded">
<strong>Risikoavers investor:</strong>
- <strong>C er uaktuelt</strong>: Samme risiko som A (10%) men lavere avkastning (8% vs 12%)
- A dominerer C
- Velger mellom A, B og D basert på risikotoleranse

<strong>Risikonøytral investor:</strong>
- <strong>C og D er uaktuelle</strong>: Lavere avkastning enn A og B
- Velger B (høyest avkastning: 14%)

<strong>Risikosøkende investor:</strong>
- <strong>D er uaktuelt</strong>: Lavest risiko og avkastning
- Foretrekker høy risiko
- Sannsynligvis velger A eller C (høyest risiko: 10%)
</div>

<p><strong>b) Portefølje av A og C med ρ = -0,5:</strong></p>

<p><strong>Porteføljens egenskaper:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
E(rp) = a × 12% + (1-a) × 8% = 8% + 4a%

σp² = a² × 0,1² + (1-a)² × 0,1² + 2a(1-a) × 0,1 × 0,1 × (-0,5)
σp² = 0,01a² + 0,01(1-a)² - 0,01a(1-a)
σp² = 0,01[a² + (1-a)² - a(1-a)]
σp² = 0,01[a² + 1 - 2a + a² - a + a²]
σp² = 0,01[3a² - 3a + 1]
</div>

<p><strong>Risikominimering:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
dσp²/da = 0,01[6a - 3] = 0
6a = 3
a = <strong>0,5</strong>

Ved a = 0,5:
E(rp) = 8% + 4 × 0,5% = <strong>10%</strong>
σp² = 0,01[3 × 0,25 - 3 × 0,5 + 1] = 0,01[0,75 - 1,5 + 1] = 0,0025
σp = <strong>5%</strong>
</div>

<p><strong>Sammenligning med B og D:</strong></p>
<div class="bg-green-50 p-3 rounded">
<strong>Minimum-varians portefølje (MVP):</strong> E(r) = 10%, σ = 5%

<strong>Versus B:</strong> E(r) = 14%, σ = 8%
- B har høyere avkastning (14% vs 10%)
- B har høyere risiko (8% vs 5%)
- <strong>Begge kan være attraktive</strong> avhengig av risikoaversjon

<strong>Versus D:</strong> E(r) = 6%, σ = 6%
- MVP har høyere avkastning (10% vs 6%)
- MVP har lavere risiko (5% vs 6%)
- <strong>MVP dominerer D fullstendig</strong>
</div>

<p class="bg-yellow-50 p-3 rounded">
Konklusjon: Risikominimerende portefølje er definitivt bedre enn D, men ikke nødvendigvis bedre enn B for alle risikoaverse investorer.
</p>
</div>`
  },
  {
    id: 17,
    title: "Oppgave 17: Kompleks porteføljeanalyse",
    content: `Aksjen Trix koster kr 250 i dag, vurdert ut fra dividendemodellen basert på evigvarende, konstant årlig vekst. Det er nettopp blitt utbetalt dividende og dividenden om ett år forventes å bli kr 15. Neste års fortjeneste per aksje er anslått til kr 30. Avkastningskravet på denne aksjen er 15%. Årlig risikofri rente er 5% og markedsporteføljens forventede avkastning er 10%.

a) Finn egenkapitalrentabiliteten og aksjens beta-verdi.

Prisen på Trix-aksjen vil, like før dividenden utbetales, være enten 40% høyere eller 10% lavere enn dagens pris. Det er like stor sannsynlighet for hvert utfall. Prisen på Kraft-aksjen vil kommende år øke med 18,5% hvis Trix-aksjen øker og falle med 1,5% hvis Trix-aksjen faller.

b) Finn forventet avkastning og standardavvik for hver av de to aksjene. Hva vil en risikonøytral/risikoavers investor velge?

c) Gitt valg mellom aksje + risikofritt, hva vil investorer velge? Finn forventet avkastning for standardavvik = 0,20.

d) Er kombinasjon av Trix og Kraft interessant for risikoavers investor? Finn avkastning ved σ = 0,20. Kovariansen = 0,025.`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>a) ROE og beta:</strong></p>

<div class="bg-gray-100 p-3 rounded font-mono text-sm">
<strong>Fra Gordon-modellen:</strong>
P₀ = D₁ / (r - g)
250 = 15 / (0,15 - g)
0,15 - g = 15/250 = 0,06
g = 0,09 = 9%

<strong>Utdelingsforhold og ROE:</strong>
Utdelingsforhold = D₁/EPS₁ = 15/30 = 0,5
Tilbakeholdt andel b = 1 - 0,5 = 0,5

g = b × ROE
0,09 = 0,5 × ROE
ROE = <strong>18%</strong>

<strong>Beta fra CAPM:</strong>
15% = 5% + β × (10% - 5%)
10% = β × 5%
β = <strong>2,0</strong>
</div>

<p><strong>b) Avkastning og risiko:</strong></p>

<div class="bg-gray-100 p-3 rounded font-mono text-sm">
<strong>Trix-aksjen:</strong>
Oppgang: P₁ = 250 × 1,4 = 350 → r = (350-250+15)/250 = 46%
Nedgang: P₁ = 250 × 0,9 = 225 → r = (225-250+15)/250 = -4%

E(rTrix) = 0,5 × 46% + 0,5 × (-4%) = <strong>21%</strong>
σ²Trix = 0,5 × (46-21)² + 0,5 × (-4-21)² = 625
σTrix = <strong>25%</strong>

<strong>Kraft-aksjen:</strong>
E(rKraft) = 0,5 × 18,5% + 0,5 × (-1,5%) = <strong>8,5%</strong>
σ²Kraft = 0,5 × (18,5-8,5)² + 0,5 × (-1,5-8,5)² = 100
σKraft = <strong>10%</strong>
</div>

<p><strong>Investorvalg:</strong></p>
<ul class="list-disc list-inside">
  <li><strong>Risikonøytral</strong>: Velger Trix (21% > 8,5%)</li>
  <li><strong>Risikoavers</strong>: Avhenger av grad av risikoaversjon</li>
</ul>

<p><strong>c) Aksje + risikofritt ved σ = 0,20:</strong></p>

<div class="bg-gray-100 p-3 rounded font-mono text-sm">
<strong>Trix + risikofritt:</strong>
Andel i Trix: w = σp/σTrix = 0,20/0,25 = 0,8
E(rp) = 0,8 × 21% + 0,2 × 5% = <strong>17,8%</strong>

<strong>Kraft + risikofritt:</strong>
Andel i Kraft: w = σp/σKraft = 0,20/0,10 = 2,0 (belånt posisjon)
E(rp) = 2,0 × 8,5% - 1,0 × 5% = <strong>12%</strong>
</div>

<p class="bg-blue-50 p-3 rounded">
<strong>Risikonøytral investor</strong>: Velger Trix + risikofritt (17,8% > 12%)
<strong>Risikoavers investor</strong>: Også Trix + risikofritt (høyere Sharpe-ratio)
</p>

<p><strong>d) Kombinasjon Trix + Kraft:</strong></p>

<div class="bg-gray-100 p-3 rounded font-mono text-sm">
ρ = Kov/(σTrix × σKraft) = 0,025/(0,25 × 0,10) = 1,0

Ved perfekt korrelasjon og σp = 0,20:
Andeler som gir σ = 0,20:
σp = |wT × 0,25 + (1-wT) × 0,10|
0,20 = 0,25wT + 0,10 - 0,10wT
0,10 = 0,15wT
wT = 2/3, wK = 1/3

E(rp) = (2/3) × 21% + (1/3) × 8,5% = 14% + 2,83% = <strong>16,83%</strong>
</div>

<p class="bg-yellow-50 p-3 rounded">
<strong>Konklusjon:</strong> Trix + Kraft (16,83%) er dårligere enn Trix + risikofritt (17,8%) ved samme risiko. Ikke interessant for risikoavers investor.
</p>
</div>`
  },
  {
    id: 18,
    title: "Oppgave 18: PVGO og korrelasjon",
    content: `Aksjen Must prises i henhold til dividendemodellen med evigvarende, konstant vekst. Det deles ut dividende en gang i året og siste dividendebetaling har nettopp blitt foretatt. Om ett år forventes en dividende på kr 8, avkastningskravet på aksjen er 13% og den konstante veksten er på 9%. Utdelingsforholdet er 0,4.

a) Finn aksjens pris, P/E-forholdet (P₀/EPS₁) og selskapets egenkapitalrentabilitet.
b) Beregn nåverdien av vekstmuligheter som ligger i aksjeprisen. Forklar svaret.

Aksjen Gullit vil i løpet av kommende periode enten øke med 40% eller falle med 20%. Aksjen Sølvgrå vil enten falle med 10% eller øke med 20%, og den øker når Gullit-aksjen faller. Det er like stor sannsynlighet for de to utfallene. Kovariansen mellom aksjeavkastningene er -0,045.

c) Bestem korrelasjonskoeffisienten og vis sammenhengen mellom forventet avkastning og standardavvik for porteføljer. Anslå risikominimerende posisjon.

Beta-verdien for Gullit-aksjen er 0,8, mens den er 0,2 for Sølvgrå-aksjen. Risikofri rente er 6% og markedsporteføljens forventede avkastning er 10%.

d) Hvis forventet avkastning er som beregnet under c) og du legger CAPM til grunn, hvilken aksje vil du anbefale?`,
    solution: `<div class="space-y-4">
<p><strong>Løsning:</strong></p>

<p><strong>a) Pris, P/E og ROE:</strong></p>

<div class="bg-gray-100 p-3 rounded font-mono text-sm">
<strong>Aksjepris:</strong>
P₀ = D₁ / (r - g) = 8 / (0,13 - 0,09) = 8 / 0,04 = <strong>kr 200</strong>

<strong>EPS₁ og P/E:</strong>
EPS₁ = D₁ / utdelingsforhold = 8 / 0,4 = kr 20
P/E = P₀ / EPS₁ = 200 / 20 = <strong>10</strong>

<strong>ROE:</strong>
Tilbakeholdt andel b = 1 - 0,4 = 0,6
g = b × ROE
0,09 = 0,6 × ROE
ROE = 0,09 / 0,6 = <strong>15%</strong>
</div>

<p><strong>b) PVGO:</strong></p>

<div class="bg-gray-100 p-3 rounded font-mono text-sm">
No-growth pris = EPS₁ / r = 20 / 0,13 = 153,85
PVGO = P₀ - No-growth pris = 200 - 153,85 = <strong>kr 46,15</strong>
</div>

<div class="bg-blue-50 p-3 rounded">
<strong>Forklaring:</strong> PVGO > 0 fordi ROE (15%) > r (13%). Selskapet skaper verdi ved å reinvestere 60% av overskuddet til 15% avkastning, som er høyere enn investorenes krav på 13%.
</div>

<p><strong>c) Gullit og Sølvgrå:</strong></p>

<div class="bg-gray-100 p-3 rounded font-mono text-sm">
<strong>Gullit:</strong>
E(rG) = 0,5 × 40% + 0,5 × (-20%) = <strong>10%</strong>
σ²G = 0,5 × (40-10)² + 0,5 × (-20-10)² = 900
σG = <strong>30%</strong>

<strong>Sølvgrå:</strong>
E(rS) = 0,5 × (-10%) + 0,5 × 20% = <strong>5%</strong>
σ²S = 0,5 × (-10-5)² + 0,5 × (20-5)² = 225
σS = <strong>15%</strong>

<strong>Korrelasjon:</strong>
ρ = Kov / (σG × σS) = -0,045 / (0,30 × 0,15) = <strong>-1,0</strong>
</div>

<p><strong>Risikominimerende portefølje ved ρ = -1:</strong></p>
<div class="bg-gray-100 p-3 rounded font-mono text-sm">
Ved perfekt negativ korrelasjon kan risiko elimineres helt:
wG = σS / (σG + σS) = 15 / (30 + 15) = 1/3
wS = σG / (σG + σS) = 30 / (30 + 15) = 2/3

E(rp) = (1/3) × 10% + (2/3) × 5% = 3,33% + 3,33% = <strong>6,67%</strong>
σp = <strong>0%</strong> (risikofri!)
</div>

<p><strong>d) CAPM-analyse:</strong></p>

<div class="bg-gray-100 p-3 rounded font-mono text-sm">
<strong>CAPM-krav:</strong>
Gullit: E(r) = 6% + 0,8 × (10% - 6%) = 6% + 3,2% = 9,2%
Sølvgrå: E(r) = 6% + 0,2 × (10% - 6%) = 6% + 0,8% = 6,8%

<strong>Faktisk forventet avkastning:</strong>
Gullit: 10%
Sølvgrå: 5%

<strong>Alfa (meravkastning):</strong>
Gullit: 10% - 9,2% = +0,8% → <strong>Underpriset</strong>
Sølvgrå: 5% - 6,8% = -1,8% → <strong>Overpriset</strong>
</div>

<p class="bg-green-50 p-3 rounded">
<strong>Anbefaling: Kjøp Gullit-aksjen</strong>
Gullit har positiv alfa og forventes å gi meravkastning utover CAPM-kravet.
</p>
</div>`
  }
];

interface RiskReturnExercisesProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const RiskReturnExercises: React.FC<RiskReturnExercisesProps> = ({ isOpen, onOpenChange }) => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  const handleNext = useCallback(() => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setShowSolution(false);
    }
  }, [currentExercise]);

  const handlePrevious = useCallback(() => {
    if (currentExercise > 0) {
      setCurrentExercise(currentExercise - 1);
      setShowSolution(false);
    }
  }, [currentExercise]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    
    if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === ' ') {
      e.preventDefault();
      setShowSolution(!showSolution);
    }
  }, [isOpen, handleNext, handlePrevious, showSolution]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const exercise = exercises[currentExercise];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Regneoppgaver: Risiko og avkastning</span>
            <Badge variant="secondary">
              Oppgave {currentExercise + 1} av {exercises.length}
            </Badge>
          </DialogTitle>
          <DialogDescription>
            Øv på praktiske beregninger innen risiko og avkastning. Bruk mellomromstasten for å vise/skjule løsning.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{exercise.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="whitespace-pre-wrap text-sm leading-relaxed">
                {exercise.content}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button
              onClick={() => setShowSolution(!showSolution)}
              variant="outline"
              className="flex items-center gap-2"
            >
              {showSolution ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  Skjul løsning
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  Vis løsning
                </>
              )}
            </Button>
          </div>

          {showSolution && (
            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-lg">Løsningsforslag</CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: exercise.solution }}
                />
              </CardContent>
            </Card>
          )}

          <div className="flex items-center justify-between pt-4">
            <Button
              onClick={handlePrevious}
              disabled={currentExercise === 0}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Forrige
            </Button>

            <div className="flex gap-1">
              {exercises.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentExercise(index);
                    setShowSolution(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentExercise
                      ? 'bg-primary'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Gå til oppgave ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              disabled={currentExercise === exercises.length - 1}
              variant="outline"
              className="flex items-center gap-2"
            >
              Neste
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RiskReturnExercises;