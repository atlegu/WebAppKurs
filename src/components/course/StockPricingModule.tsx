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
        <CardContent className="space-y-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Dividend Discount Model (Gordon, multistadium)</li>
            <li>Fri kontantstrøm til egenkapital (FCFE)</li>
            <li>Fordeler og begrensninger ved hver metode</li>
          </ul>
          
          {/* Gordon Model Formula */}
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg my-4">
            <div className="text-center">
              <p className="font-semibold mb-4">Eksempel: Gordon-modellen</p>
              <div className="flex items-center justify-center gap-4 text-xl flex-wrap">
                <span className="font-bold text-slate-800">P₀</span>
                <span className="font-bold text-red-600 text-2xl">=</span>
                <div className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  <div className="text-center">
                    <div className="border-b border-white pb-1 mb-1">D₁</div>
                    <div className="text-sm">(r - g)</div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                der D₁ = 5, r = 8%, g = 3% ⇒ P₀ = 5 / (0,08 - 0,03) = 100
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