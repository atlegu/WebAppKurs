import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, PlayCircle, FileText, CheckCircle, Target, Brain } from "lucide-react";
import { ContentRenderer } from "./ContentRenderer";
import { BondQuiz } from "./BondQuiz";
import { DurationCalculator } from "./DurationCalculator";
import { BondExercises } from "./BondExercises";
import StockPricingQuiz from "./StockPricingQuiz";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import GordonGrowthWithOverlay from "../GordonGrowthWithOverlay";
import AvkastningRisikoWithOverlay from "../AvkastningRisikoWithOverlay";

interface ContentSectionData {
  title: string;
  type: string;
  content: string;
  video?: string;
  reflection?: string;
  exercise?: string;
  selftest?: boolean;
  download?: string;
}

interface ContentSectionProps {
  section: ContentSectionData;
  index: number;
  moduleIndex?: number;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ section, index, moduleIndex }) => {
  const [showBondQuiz, setShowBondQuiz] = useState(false);
  const [showBondExercises, setShowBondExercises] = useState(false);
  const [showStockQuiz, setShowStockQuiz] = useState(false);

  return (
    <>
      <Card key={index} className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            {section.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose max-w-none">
            <ContentRenderer content={section.content} />
          </div>

          {/* Duration Calculator - Show only for the duration section (4.8) */}
          {section.title.toLowerCase().includes('durasjon') && (
            <div className="my-6">
              <DurationCalculator />
            </div>
          )}

          {/* Gordon Model Deep Dive - Show for DDM and FCFE section in module 5 */}
          {section.title.toLowerCase().includes('ddm') && moduleIndex === 5 && (
            <div className="border-l-4 border-primary bg-muted/30 p-6 rounded-lg mb-6">
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
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">9 · Oppsummering</h4>
                <p className="text-sm">
                  Gordon-modellen er et kraftig men enkelt verktøy for modne selskaper med <strong>forutsigbar</strong> utbyttevekst. 
                  For selskaper i tidlig vekst eller uten utbytte, kombiner den med flertrinns DCF eller alternative metoder 
                  (FCFE, multipler). Vær særlig oppmerksom på <em>realistiske vekstanslag</em> og konsekvensene av bærekraftige 
                  investeringsbeslutninger.
                </p>
              </div>
            </div>
          )}

          {/* Avkastning og Risiko Module - Show for module 6 sections with avkastning og risiko */}
          {section.title.toLowerCase().includes('avkastning og risiko') && moduleIndex === 6 && (
            <div className="mt-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl">
              <h4 className="text-lg font-semibold mb-3 text-purple-800">🎮 Interaktiv Avkastning & Risiko Modul</h4>
              <p className="text-purple-700 mb-4">
                Utforsk sammenhengen mellom avkastning og risiko gjennom interaktive øvelser og beregninger.
              </p>
              <div className="flex justify-center">
                <AvkastningRisikoWithOverlay />
              </div>
            </div>
          )}

          {/* Gordon Growth Calculator - Show for DDM and FCFE section in module 5 */}
          {section.title.toLowerCase().includes('ddm') && moduleIndex === 5 && (
            <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl">
              <h4 className="text-lg font-semibold mb-3 text-blue-800">🎮 Interaktiv Gordon Growth kalkulator</h4>
              <p className="text-blue-700 mb-4">
                Eksperimenter med Gordon-modellen i praksis! Juster parametrene og se umiddelbare effekter på aksjepris.
              </p>
              <div className="flex justify-center">
                <GordonGrowthWithOverlay />
              </div>
            </div>
          )}

          {section.video && (
            <div className="bg-muted/50 border border-border p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <PlayCircle className="w-5 h-5 text-destructive" />
                <span className="font-semibold text-foreground">Video</span>
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                <ContentRenderer content={section.video} />
              </div>
            </div>
          )}

          {section.exercise && (
            <div className="bg-muted/30 border border-border p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Oppgave</span>
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                <ContentRenderer content={section.exercise} />
              </div>
            </div>
          )}

          {section.reflection && (
            <div className="bg-accent/10 border border-accent/30 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-accent-foreground" />
                <span className="font-semibold text-foreground">Refleksjonsspørsmål</span>
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                <ContentRenderer content={section.reflection} />
              </div>
            </div>
          )}

          {section.download && (
            <div className="bg-secondary/50 border border-secondary p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-secondary-foreground" />
                <span className="font-semibold text-foreground">Nedlasting</span>
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                <ContentRenderer content={section.download} />
              </div>
            </div>
          )}

          {section.selftest && (
            <Button variant="outline" className="w-full">
              Start selvtest
            </Button>
          )}

          {/* Quiz Buttons - Show only for "Oppgaver" sections */}
          {section.title.toLowerCase().includes('oppgaver') && moduleIndex === 4 && (
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-foreground">Flervalgsoppgaver</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Test kunnskapen din med 15 tilfeldige spørsmål om obligasjoner
                </p>
                <Button onClick={() => setShowBondQuiz(true)} className="w-full">
                  Start flervalgsoppgaver
                </Button>
              </div>
              
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-foreground">Regneoppgaver</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Øv på obligasjonsberegninger med 11 praktiske oppgaver
                </p>
                <Button onClick={() => setShowBondExercises(true)} className="w-full" variant="outline">
                  Start regneoppgaver
                </Button>
              </div>
            </div>
          )}

          {/* Stock Quiz Button - Show only for "Oppgaver" sections in module 5 */}
          {section.title.toLowerCase().includes('oppgaver') && moduleIndex === 5 && (
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-foreground">Selvtest</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Test kunnskapen din med 15 tilfeldige spørsmål om aksjeanalyse og verdsettelse
              </p>
              <Button onClick={() => setShowStockQuiz(true)} className="w-full">
                Start selvtest
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      
      <BondQuiz 
        isOpen={showBondQuiz} 
        onOpenChange={setShowBondQuiz} 
      />
      
      <BondExercises 
        isOpen={showBondExercises} 
        onOpenChange={setShowBondExercises} 
      />
      
      {/* Stock Quiz Dialog */}
      <Dialog open={showStockQuiz} onOpenChange={setShowStockQuiz}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Selvtest: Aksjeanalyse og verdsettelse</DialogTitle>
          </DialogHeader>
          <StockPricingQuiz />
        </DialogContent>
      </Dialog>
    </>
  );
};