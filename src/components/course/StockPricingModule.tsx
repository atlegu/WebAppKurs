import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { PlayCircle, Target, CheckCircle, FileText, TrendingUp, Calculator } from 'lucide-react';
import AksjesparingKalkulator from './AksjesparingKalkulator';
import StockPricingQuiz from './StockPricingQuiz';

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

      {/* Introductory Section */}
      <Card>
        <CardHeader>
          <CardTitle>Hva er en aksje – og hvordan fungerer aksjemarkedet?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="mb-4">
              En <strong>aksje</strong> er en <em>eierandel</em> i et aksjeselskap. Når du kjøper én aksje,
              blir du medeier og får rett til:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><strong>Utbytte</strong> – din andel av selskapets overskudd dersom styret beslutter utdeling.</li>
              <li><strong>Stemmerett</strong> på generalforsamlingen, vanligvis én stemme per aksje.</li>
              <li><strong>Kapitalgevinst</strong> hvis aksjekursen stiger og du selger dyrere enn du kjøpte.</li>
              <li><strong>Restkrav</strong> på selskapets verdier ved avvikling (etter kreditorer).</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Slik havner aksjene på børsen</h3>
            <p className="mb-4">
              Når et selskap går på børs – en <strong>børsnotering</strong> eller «IPO»
              (<em>Initial Public Offering</em>) – selger det aksjer i <em>primærmarkedet</em>
              for å hente kapital til vekst, forskning eller nedbetaling av gjeld.
              Etter IPO-en omsettes de samme aksjene fritt mellom investorer i
              <em>sekundærmarkedet</em>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Hvordan settes prisen?</h3>
            <p className="mb-4">
              Aksjekursen styres av <strong>tilbud og etterspørsel</strong> i sanntid.
              Investorer vurderer:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><em>Forventet inntjening</em> – kontantstrøm og vekstutsikter.</li>
              <li><em>Risiko</em> – både selskapsspesifikk og markedsrelatert.</li>
              <li><em>Alternativavkastning</em> – hva de kunne tjent på andre investeringer.</li>
              <li><em>Markedssentiment</em> – nyheter, makroøkonomi og psykologiske faktorer.</li>
            </ul>
            <p className="mb-6">
              Selv små informasjonsendringer kan flytte kursen fordi millioner av kjøpere
              og selgere konkurrerer om å være først til å <em>prise inn</em> ny kunnskap.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Hvorfor vil noen kjøpe aksjer?</h3>
            <div className="bg-muted/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">To hovedkilder til avkastning</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Kapitalgevinst</strong> – kursen stiger på grunn av forventninger om høyere fremtidig inntjening.</li>
                <li><strong>Utbytte</strong> – kontantutbetaling fra årsoverskuddet.</li>
              </ul>
            </div>
            <p className="mb-6">
              Historisk har aksjer gitt høyere <em>forventet</em> avkastning enn bankinnskudd
              og obligasjoner, men også høyere svingninger (<strong>volatilitet</strong>).
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Markedets økosystem</h3>
            <p className="mb-6">
              Aksjemarkedet består av alt fra småsparere til store pensjonsfond,
              algoritmiske tradere og regulatorer som <em>Finanstilsynet</em>.
              Meglere formidler handler, børser som <em>Oslo Børs</em> matcher kjøps- og
              salgsordre, mens <em>Verdipapirsentralen</em> (VPS) registrerer eierskap.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Bærekraft og aksjer</h3>
            <p className="mb-6">
              Stadig flere investorer vurderer <strong>ESG-faktorer</strong>
              (miljø, sosiale forhold og eierstyring) fordi de kan påvirke både risiko og
              lønnsomhet. EUs taksonomi og rapporteringskrav gjør bærekraftsinformasjon
              mer transparent – noe som gradvis prises inn i aksjekursene.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Oppsummering</h3>
            <p>
              Aksjer gir deg eierskap, med rett til både fremtidig fortjeneste og
              medbestemmelse. Markedskursen reflekterer kontinuerlig investorers
              kollektive oppfatning av selskapets verdi og risiko. Å forstå
              <em>hvordan</em> og <em>hvorfor</em> disse prisene beveger seg er første
              skritt før du dykker ned i detaljert aksjeprising.
            </p>
          </div>
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
          {/* Embedded Video */}
          <div className="aspect-video w-full">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/UTHvfI9awBk?si=NwWG_eHEowgqEozP" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </CardContent>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-4">Efficient Market Hypothesis (EMH)</h3>
            <p className="mb-4">
              <strong>Efficient Market Hypothesis</strong> (EMH) hevder at konkurranse mellom investorer gjør at ingen
              konsekvent kan tjene meravkastning uten å ta ekstra risiko: så snart ny informasjon 
              blir kjent, justeres prisene umiddelbart.
            </p>

            <h4 className="text-lg font-semibold mb-3">Tre grader av markedseffisiens</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left font-semibold">Form</th>
                    <th className="border border-border p-3 text-left font-semibold">Informasjonssett som er «priset inn»</th>
                    <th className="border border-border p-3 text-left font-semibold">Praktisk implikasjon</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3"><strong>Svak form</strong></td>
                    <td className="border border-border p-3">Historiske priser og volumdata</td>
                    <td className="border border-border p-3">Teknisk analyse og trend-strategier skal ikke gi systematisk meravkastning.</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3"><strong>Semisterk form</strong></td>
                    <td className="border border-border p-3">All offentlig informasjon (regnskaper, nyheter, analytikerrapporter …)</td>
                    <td className="border border-border p-3">Fundamental analyse basert på publiserte data skal ikke gi meravkastning over tid.</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3"><strong>Sterk form</strong></td>
                    <td className="border border-border p-3">All informasjon – også innsideinformasjon</td>
                    <td className="border border-border p-3">Selv investorer med privat informasjon kan ikke tjene ekstra (i praksis motbevist av insider-dommer).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-lg font-semibold mb-3 mt-6">Hvorfor viktig for prisdannelse?</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Jo større informasjonssett som reflekteres i prisene, desto nærmere «fair value» ligger markedet.</li>
              <li>I <em>svakt</em> effektive markeder kan fundamental analyse fortsatt avdekke feilprising.</li>
              <li>I <em>semisterke</em> markeder må man lete etter unik innsikt – f.eks. ESG-faktorer som ikke er fullt forstått.</li>
              <li><em>Sterk</em> form er en teoretisk øvre grense; total sterk effektivitet er urealistisk pga. informasjonsasymmetri og innsideforbud.</li>
            </ul>

            <h4 className="text-lg font-semibold mb-3 mt-6">Empirisk status</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Momentum- og faktorpremier</strong> (SMB, HML, PR1YR) indikerer brudd på svak/semisterk effektivitet i perioder.</li>
              <li>De fleste aktive fond <strong>underyter</strong> brede markedsindekser etter kostnader, noe som støtter semisterk effektivitet.</li>
            </ul>

            <h4 className="text-lg font-semibold mb-3 mt-6">Hva betyr dette for deg som analytiker?</h4>
            <ol className="list-decimal list-inside space-y-1">
              <li><strong>Modellvalg:</strong> Anta semisterk effektivitet som grunnscenario, men test sensitiviteter mot svak form.</li>
              <li><strong>Datakrav:</strong> Spør alltid om informasjonen du bruker allerede er allment kjent – hvis ja, hvorfor er den ikke priset inn?</li>
              <li><strong>Bærekrafts-edge:</strong> Nye ESG-forskrifter og taksonomi-data kan gi midlertidige informasjonsfortrinn før de blir standardiserte.</li>
            </ol>
          </div>

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

      {/* Self-test Section */}
      <StockPricingQuiz />

      {/* Section 10 - Calculator */}
      <Card>
        <CardHeader>
          <CardTitle>🔟 Praktisk kalkulator: aksjesparing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            <strong>Aksjesparing</strong> er en av de mest effektive måtene å bygge langsiktig formue på. 
            Ved å investere jevnlige beløp over tid, kan du dra nytte av renters rente-effekten og 
            utjevne kortsiktige svingninger i markedet.
          </p>
          <p>
            Kalkulatoren nedenfor hjelper deg med å visualisere hvordan dine investeringer kan vokse 
            over tid, basert på ulike parametere som startbeløp, månedlige innbetalinger og forventet avkastning.
          </p>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full" size="lg">
                <Calculator className="w-5 h-5 mr-2" />
                Åpne aksjesparingskalkulator
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-screen-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Aksjesparingskalkulator</DialogTitle>
              </DialogHeader>
              <AksjesparingKalkulator />
            </DialogContent>
          </Dialog>

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Viktige prinsipper for aksjesparing</span>
            </div>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Start tidlig - tid i markedet slår timing av markedet</li>
              <li>• Invester jevnlig for å utjevne volatilitet (dollar cost averaging)</li>
              <li>• Diversifiser risiko gjennom indeksfond eller flere enkeltaksjer</li>
              <li>• Ha en langsiktig horisont - minimum 5-10 år</li>
              <li>• Vurder skatteoptimalisering gjennom aksjesparekonto (ASK)</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};