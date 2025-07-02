import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlayCircle, Target, CheckCircle, FileText, TrendingUp } from 'lucide-react';

export const StockPricingModule: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Module Header */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-slate-800">
            📊 Modul 4: Verdsettelse av aksjer og aksjeanalyse
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Learning Objectives */}
      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            🎯 Læringsmål
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Etter gjennomført modul skal studenten:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Forstå aksjens rolle i finansiering og investeringsporteføljer 📈</li>
            <li>Forklare prinsippene bak aksjeprising og hvorfor det er viktig 💡</li>
            <li>Utføre fundamental regnskapsanalyse som grunnlag for verdsettelse 📑</li>
            <li>Anvende ulike verdsettelsesmodeller: DDM, FCFE, P/E, EV/EBITDA 🔢</li>
            <li>Sammenligne resultater fra flere metoder i en praktisk case 🤝</li>
            <li>Diskutere markedseffisiens og prisdannelse ⚖️</li>
            <li>Integrere ESG-faktorer i aksjeanalyse 🌱</li>
          </ul>
        </CardContent>
      </Card>

      {/* Video 1 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PlayCircle className="w-5 h-5 text-red-500" />
            🎬 Video 1: Introduksjon til aksjemarkedet og aksjens rolle
          </CardTitle>
          <Badge variant="outline">8 min</Badge>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Aksjen som eierandel og rett til fremtidige kontantstrømmer</li>
            <li>Primær- vs. sekundærmarkedet</li>
            <li>Likviditet, kursdannelse og handelsmekanismer</li>
            <li>Hvordan markedspris reflekterer risiko og forventninger</li>
          </ul>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-purple-500" />
              <span className="font-medium">Refleksjonsspørsmål</span>
            </div>
            <ol className="list-decimal list-inside space-y-1 text-sm text-purple-700">
              <li>Hva er hovedforskjellen på primær- og sekundærmarkedet?</li>
              <li>Hvordan påvirker likviditet investorers vilje til å handle?</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Section 1 */}
      <Card>
        <CardHeader>
          <CardTitle>1️⃣ Hva er aksjeprising og hvorfor er det viktig?</CardTitle>
          <div className="flex items-center gap-2">
            <PlayCircle className="w-4 h-4 text-red-500" />
            <Badge variant="outline">Video 2 - 6 min</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Definisjon av «intrinsic value» vs. markedsverdi</li>
            <li>Eierens krav til avkastning (kostnaden for egenkapital)</li>
            <li>Informasjonseffisiens og signaleffekter</li>
          </ul>
          <p>Aksjeprising handler om å estimere den sanne verdien av et selskaps aksjer basert på fremtidige kontantstrømmer og risiko. Dette er viktig fordi det gir investorer og ledelse et objektivt grunnlag for beslutninger, enten det gjelder kjøp, salg eller finansiering.</p>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium">Småoppgave</span>
            </div>
            <p className="text-sm text-green-700">Finn to norske selskaper på Oslo Børs og noter deres P/E-multipler fra siste årsregnskap. Hva sier forskjellen om risikoperspektivet?</p>
          </div>
        </CardContent>
      </Card>

      {/* Section 2 */}
      <Card>
        <CardHeader>
          <CardTitle>2️⃣ Fundamental analyse: datainnhenting og regnskapsanalyse</CardTitle>
          <div className="flex items-center gap-2">
            <PlayCircle className="w-4 h-4 text-red-500" />
            <Badge variant="outline">Video 3 - 10 min</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Kildene: årsrapporter, kvartalsrapporter, børsmeldinger</li>
            <li>Nøkkeltall fra resultat- og balanseoppstilling</li>
            <li>Viktige justeringer (engangsposter, IFRS-overganger)</li>
          </ul>
          <p>Fundamental analyse starter med grundig gjennomgang av regnskapstall. Du må justere for engangsposter som kan gi et misvisende bilde av løpende drift, og vurdere effekter av endringer i regnskapsprinsipper.</p>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-purple-500" />
              <span className="font-medium">Refleksjonsspørsmål</span>
            </div>
            <p className="text-sm text-purple-700">Hvordan justerer du resultatet for engangsposter ved verdsettelse?</p>
          </div>
        </CardContent>
      </Card>

      {/* Section 3 - DDM and FCFE */}
      <Card>
        <CardHeader>
          <CardTitle>3️⃣ Verdsettelsesmodeller: DDM og FCFE</CardTitle>
          <div className="flex items-center gap-2">
            <PlayCircle className="w-4 h-4 text-red-500" />
            <Badge variant="outline">Video 4 - 12 min</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="list-disc list-inside space-y-2">
            <li>Dividend Discount Model (Gordon, multistadium)</li>
            <li>Fri kontantstrøm til egenkapital (FCFE)</li>
            <li>Fordeler og begrensninger ved hver metode</li>
          </ul>

          {/* Gordon Model Deep Dive */}
          <div className="border-l-4 border-primary bg-muted/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-primary mb-4">Gordon-modellen (konstant vekst-DDM)</h3>
            <p className="text-muted-foreground mb-4">
              En kort, selvforklarende innføring i hvordan du verdsetter modne selskaper med stabil utbyttevekst.
            </p>

            {/* Why a separate model */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">1 · Hvorfor en egen modell for aksjeprising?</h4>
              <p>
                Når et selskap betaler <strong>jevne utbytter</strong> som forventes å vokse i et <em>stabilt</em> tempo, 
                kan vi slippe tunge kontantstrøms-prognoser. Gordon-modellen kobler sammen forventet utbytte, vekst og 
                avkastningskrav i én enkel formel.
              </p>
            </div>

            {/* Core formula */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">2 · Kjerneformelen</h4>
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg text-center mb-4">
                <div className="flex items-center justify-center gap-4 text-xl flex-wrap mb-4">
                  <span className="font-bold text-slate-800">P₀</span>
                  <span className="font-bold text-red-600 text-2xl">=</span>
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                    <div className="text-center">
                      <div className="border-b border-primary-foreground pb-1 mb-1">Div₁</div>
                      <div className="text-sm">(rₑ - g)</div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Aksjens nåverdi er nåverdien av en evigvarende voksende utbytteserie.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>P₀:</strong> Aksjens verdi i dag<br/>
                  <strong>Div₁:</strong> Forventet utbytte neste år
                </div>
                <div>
                  <strong>rₑ:</strong> Egenkapitalkostnad (avkastningskrav)<br/>
                  <strong>g:</strong> Langsiktig årlig vekstrate i utbytte
                </div>
              </div>
            </div>

            {/* Important assumptions */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">3 · Viktige forutsetninger</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Stabil vekst:</strong> Utbyttet øker med samme % hvert år</li>
                <li><strong>Uendelig levetid:</strong> Selskapet fortsetter «for alltid»</li>
                <li><strong>Konstant risiko:</strong> rₑ er stabil</li>
                <li><strong>Fast utbyttepolitikk:</strong> Payout-raten er konstant</li>
              </ul>
            </div>

            {/* How to use */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">4 · Slik bruker du modellen – trinn for trinn</h4>
              <div className="space-y-3">
                <div className="bg-background p-3 rounded border">
                  <strong>Trinn 1:</strong> Start med siste utbytte Div₀ og beregn Div₁ = Div₀ × (1+g)
                  <p className="text-sm text-muted-foreground mt-1">Tips: Bruk ordinært årlig utbytte – ignorer ekstraordinære engangsposter</p>
                </div>
                <div className="bg-background p-3 rounded border">
                  <strong>Trinn 2:</strong> Estimer vekstraten g
                  <p className="text-sm text-muted-foreground mt-1">Tips: Historisk trend eller Retention-growth: g = b × ROE</p>
                </div>
                <div className="bg-background p-3 rounded border">
                  <strong>Trinn 3:</strong> Beregn avkastningskravet rₑ
                  <p className="text-sm text-muted-foreground mt-1">Tips: Typisk CAPM: rₑ = rf + β(E[RM] - rf)</p>
                </div>
                <div className="bg-background p-3 rounded border">
                  <strong>Trinn 4:</strong> Sett alt inn i formelen
                  <p className="text-sm text-muted-foreground mt-1">Tips: Sjekk at g &lt; rₑ. Hvis ikke: bruk flertrinns-modell</p>
                </div>
              </div>
            </div>

            {/* Numerical example */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">5 · Numerisk eksempel</h4>
              <p className="mb-3">
                <strong>Nordic Utilities ASA</strong> betalte nylig 3,40 kr i utbytte. Utbyttet forventes å vokse med 2% årlig. 
                Avkastningskravet estimeres til 6%.
              </p>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
                <p>Div₁ = 3,40 × 1,02 = 3,47 kr</p>
                <p>P₀ = 3,47 / (0,06 - 0,02) ≈ 86,75 kr</p>
                <p className="text-sm text-muted-foreground italic mt-2">
                  Nåverdien av aksjen under forutsetning om konstant vekst.
                </p>
              </div>
            </div>

            {/* Strengths and weaknesses */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">6 · Styrker og svakheter</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-800 mb-2">Styrker</h5>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Ekstremt enkel – få inndata</li>
                    <li>• Intuitiv kobling mellom utbytte-politikk, vekst og verdi</li>
                    <li>• Praktisk som terminalverdi i DCF</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-800 mb-2">Svakheter</h5>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Svært følsom for små forskjeller i g og rₑ</li>
                    <li>• Uegnet for selskaper uten stabilt utbytte</li>
                    <li>• Forutsetter konstant risiko og evig levetid</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sustainability perspective */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">7 · Bærekraftperspektivet</h4>
              <p className="mb-2">Når du anslår g må du vurdere:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>ESG-begrensninger</strong> kan redusere vekst for karbonintensive selskaper</li>
                <li><strong>EU-taksonomien</strong> påvirker fremtidige investeringer og utbyttepolitikk</li>
                <li><strong>Grønne investeringsmuligheter</strong> kan rettferdiggjøre lavere utbytte hvis IRR &gt; rₑ</li>
              </ul>
            </div>

            {/* Quick test */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">8 · Hurtigtest (selvkontroll)</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Hvilket forhold mellom g og rₑ må være oppfylt?</li>
                <li>Hvordan estimerer du g med Retention-growth?</li>
                <li>Hvorfor kan et kutt i utbytte øke aksjeverdien?</li>
              </ol>
              <p className="text-sm text-muted-foreground italic mt-2">
                Sammenlign med avsnittene over før du går videre.
              </p>
            </div>

            {/* Summary */}
            <div>
              <h4 className="text-lg font-semibold mb-3">9 · Oppsummering</h4>
              <p className="text-sm">
                Gordon-modellen er et kraftig men enkelt verktøy for modne selskaper med <strong>forutsigbar</strong> utbyttevekst. 
                For selskaper i tidlig vekst eller uten utbytte, kombiner den med flertrinns DCF eller alternative metoder 
                (FCFE, multipler). Vær særlig oppmerksom på <em>realistiske vekstanslag</em> og konsekvensene av bærekraftige 
                investeringsbeslutninger.
              </p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium">Oppgave</span>
            </div>
            <p className="text-sm text-green-700">Beregn aksjekursen til et selskap med FCFE på 20 mill neste år, r = 10%, antatt konstant FCFE-vekst på 2%.</p>
          </div>
        </CardContent>
      </Card>

      {/* Section 4 - Multiples */}
      <Card>
        <CardHeader>
          <CardTitle>4️⃣ Verdsettelse med multippelanalyse (P/E, EV/EBITDA, etc.)</CardTitle>
          <div className="flex items-center gap-2">
            <PlayCircle className="w-4 h-4 text-red-500" />
            <Badge variant="outline">Video 5 - 8 min</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>P/E: pris per aksje / resultat per aksje</li>
            <li>EV/EBITDA, P/B, P/S – når brukes de?</li>
            <li>Peer-group sammenligninger og bransjejustering</li>
          </ul>
          <p>Multipler gir et raskt estimat basert på markedsdata for sammenlignbare selskaper. Viktig å justere for kapitalstruktur, vekstforventninger og regnskapsprinsipper.</p>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-purple-500" />
              <span className="font-medium">Refleksjonsspørsmål</span>
            </div>
            <p className="text-sm text-purple-700">Hvilken multipel foretrekker du for et modent industriselskap, og hvorfor?</p>
          </div>
        </CardContent>
      </Card>

      {/* Section 5 - Practical Case */}
      <Card>
        <CardHeader>
          <CardTitle>5️⃣ Praktisk case: sammenligning av ulike verdsettelsesmetoder</CardTitle>
          <div className="flex items-center gap-2">
            <PlayCircle className="w-4 h-4 text-red-500" />
            <Badge variant="outline">Video 6 - 15 min</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Case-selskap: fiktivt teknologiselskap «TechNord».</p>
          <p>Data fra årsrapport: utbytte, FCFE, EBITDA, EPS.</p>
          <p className="font-semibold">Beregn prising via:</p>
          <ol className="list-decimal list-inside space-y-1 ml-4">
            <li>Gordon DDM</li>
            <li>FCFE-modell</li>
            <li>P/E-multipel</li>
            <li>EV/EBITDA</li>
          </ol>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium">Oppgave</span>
            </div>
            <p className="text-sm text-green-700">Presenter en tabell med kursestimatene fra hver metode og diskuter avvikene.</p>
          </div>
        </CardContent>
      </Card>

      {/* Section 6 - Market Efficiency */}
      <Card>
        <CardHeader>
          <CardTitle>6️⃣ Markedseffisiens og prisdannelse</CardTitle>
          <div className="flex items-center gap-2">
            <PlayCircle className="w-4 h-4 text-red-500" />
            <Badge variant="outline">Video 7 - 7 min</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Effisiente markeds-hypotesen (EMH) – svake, semi-sterke, sterke former</li>
            <li>Faktorer som fører til misprising: behavioral finance, asymmetrisk informasjon</li>
            <li>Hvordan utnytte eventuelle ineffisienser?</li>
          </ul>
          <p>En fullstendig effektiv markedsplass er sjelden realistisk. Ulike studier viser at anomalier som momentum og verdi-premier kan gi meravkastning.</p>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-purple-500" />
              <span className="font-medium">Refleksjonsspørsmål</span>
            </div>
            <p className="text-sm text-purple-700">Gi et eksempel på en «anomaly» fra akademisk litteratur.</p>
          </div>
        </CardContent>
      </Card>

      {/* Section 7 - ESG */}
      <Card>
        <CardHeader>
          <CardTitle>7️⃣ ESG og bærekraft i aksjeanalyse</CardTitle>
          <div className="flex items-center gap-2">
            <PlayCircle className="w-4 h-4 text-red-500" />
            <Badge variant="outline">Video 8 - 9 min</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>ESG-kriterier og datakilder (SASB, MSCI, Bloomberg)</li>
            <li>Justering av kontantstrømprognoser for klimarisiko</li>
            <li>«Greenium» og markedsreaksjoner på bærekraftshendelser</li>
          </ul>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium">Oppgave</span>
            </div>
            <p className="text-sm text-green-700">Finn to selskaper med ulik ESG-rating. Hvordan påvirker ratingen deres P/E-multipel?</p>
          </div>
        </CardContent>
      </Card>

      {/* Section 8 - Summary and Quiz */}
      <Card>
        <CardHeader>
          <CardTitle>8️⃣ Oppsummering, quiz og regneoppgave</CardTitle>
          <div className="flex items-center gap-2">
            <PlayCircle className="w-4 h-4 text-red-500" />
            <Badge variant="outline">Video 9 - 5 min</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>– Kort oppsummering av alle modeller og nøkkelpunkter</p>
          <p>– Quiz (10 flervalgsspørsmål)</p>
          <p>– Regneoppgave: Kombinert DDM + multippel</p>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium">Quiz-eksempel</span>
            </div>
            <div className="text-sm text-green-700 space-y-1">
              <p>1. Hva er hovedantagelsen i Gordon-modellen?</p>
              <p>2. Hvilken multipel inkluderer gjeld i verdsettelsen?</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Final Section */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            📚 Veien videre: Forberedelse til semesteroppgave
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Velg et selskap på Oslo Børs med tydelig bærekraftsprofil</li>
            <li>Samle regnskapsdata, beregn minst to verdsettingsestimater</li>
            <li>Drøft avvik mellom metodene og ESG-faktorers betydning</li>
            <li>Lever en rapport (3 000–4 000 ord) med vedlegg av alle beregninger</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};