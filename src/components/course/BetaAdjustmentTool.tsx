import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BetaInputs {
  comparableBeta: number;
  comparableDebtEquity: number;
  targetDebtEquity: number;
  taxRate: number;
}

const BetaAdjustmentTool: React.FC = () => {
  const [inputs, setInputs] = useState<BetaInputs>({
    comparableBeta: 1.35,
    comparableDebtEquity: 0.6,
    targetDebtEquity: 0.3,
    taxRate: 22,
  });

  const [results, setResults] = useState({
    unleveredBeta: 0,
    releveredBeta: 0,
    betaChange: 0,
  });

  const [showExample, setShowExample] = useState(false);

  useEffect(() => {
    calculateBetas();
  }, [inputs]);

  const calculateBetas = () => {
    const taxFactor = 1 - inputs.taxRate / 100;
    
    // Unlever the comparable company's beta
    const unleveredBeta = inputs.comparableBeta / (1 + taxFactor * inputs.comparableDebtEquity);
    
    // Relever to target capital structure
    const releveredBeta = unleveredBeta * (1 + taxFactor * inputs.targetDebtEquity);
    
    const betaChange = releveredBeta - inputs.comparableBeta;

    setResults({
      unleveredBeta,
      releveredBeta,
      betaChange,
    });
  };

  const handleInputChange = (field: keyof BetaInputs, value: string) => {
    const numValue = parseFloat(value) || 0;
    setInputs({ ...inputs, [field]: numValue });
  };

  const formatNumber = (value: number, decimals: number = 3) => value.toFixed(decimals);

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-primary" />
          <div>
            <CardTitle>Beta-justeringsverktøy</CardTitle>
            <CardDescription>
              Juster beta for ulik kapitalstruktur mellom selskaper
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="calculator">Kalkulator</TabsTrigger>
            <TabsTrigger value="theory">Teori</TabsTrigger>
            <TabsTrigger value="example">Eksempel</TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Input section */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                  Sammenlignbart selskap
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="comparableBeta">
                    Levered Beta (βL)
                  </Label>
                  <Input
                    id="comparableBeta"
                    type="number"
                    value={inputs.comparableBeta}
                    onChange={(e) => handleInputChange("comparableBeta", e.target.value)}
                    step="0.05"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comparableDebtEquity">
                    D/E ratio
                  </Label>
                  <Input
                    id="comparableDebtEquity"
                    type="number"
                    value={inputs.comparableDebtEquity}
                    onChange={(e) => handleInputChange("comparableDebtEquity", e.target.value)}
                    step="0.1"
                  />
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-4">
                    Ditt selskap
                  </h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="targetDebtEquity">
                      Ønsket D/E ratio
                    </Label>
                    <Input
                      id="targetDebtEquity"
                      type="number"
                      value={inputs.targetDebtEquity}
                      onChange={(e) => handleInputChange("targetDebtEquity", e.target.value)}
                      step="0.1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="taxRate">
                    Skattesats (%)
                  </Label>
                  <Input
                    id="taxRate"
                    type="number"
                    value={inputs.taxRate}
                    onChange={(e) => handleInputChange("taxRate", e.target.value)}
                    step="1"
                  />
                </div>
              </div>

              {/* Results section */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                  Beregning
                </h3>

                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Steg 1: Unlever beta</span>
                      <span className="text-xs text-muted-foreground">Fjern finansiell risiko</span>
                    </div>
                    <div className="text-2xl font-bold">
                      βu = {formatNumber(results.unleveredBeta)}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      βu = {inputs.comparableBeta} / [1 + (1 - {inputs.taxRate}%) × {inputs.comparableDebtEquity}]
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-5 h-5 text-muted-foreground" />
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg border-2 border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Steg 2: Relever beta</span>
                      <span className="text-xs text-muted-foreground">Legg til din finansielle risiko</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      βL = {formatNumber(results.releveredBeta)}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      βL = {formatNumber(results.unleveredBeta)} × [1 + (1 - {inputs.taxRate}%) × {inputs.targetDebtEquity}]
                    </div>
                  </div>

                  <Alert className={results.betaChange > 0 ? "border-orange-200" : "border-green-200"}>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      Din justerte beta er {Math.abs(results.betaChange).toFixed(3)} {results.betaChange > 0 ? "høyere" : "lavere"} enn det sammenlignbare selskapets beta på grunn av {inputs.targetDebtEquity > inputs.comparableDebtEquity ? "høyere" : "lavere"} finansiell gearing.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="theory" className="space-y-6 mt-6">
            <div className="space-y-4">
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Hvorfor justere beta?</h3>
                <p className="text-sm leading-relaxed mb-4">
                  Beta måler et selskaps systematiske risiko. Når vi henter beta fra børsnoterte selskaper, 
                  reflekterer denne både operasjonell risiko og finansiell risiko. For å sammenligne selskaper 
                  med ulik kapitalstruktur, må vi:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li><strong>Unlever beta</strong> - Fjerne effekten av finansiell gearing</li>
                  <li><strong>Relever beta</strong> - Legge til effekten av din ønskede kapitalstruktur</li>
                </ol>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Formlene</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Unlevering (Hamada-formelen):</h4>
                    <div className="bg-background p-3 rounded font-mono text-center">
                      βu = βL / [1 + (1 - Tc) × (D/E)]
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Relevering:</h4>
                    <div className="bg-background p-3 rounded font-mono text-center">
                      βL = βu × [1 + (1 - Tc) × (D/E)]
                    </div>
                  </div>
                </div>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Viktig:</strong> Denne metoden antar at gjeldens beta er null (risikofri gjeld). 
                  For selskaper med høy gjeldsgrad eller lav kredittkvalitet, kan dette være en forenkling.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>

          <TabsContent value="example" className="space-y-6 mt-6">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Praktisk eksempel</h3>
              
              <div className="bg-muted/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Situasjon:</h4>
                <p className="text-sm mb-4">
                  Du skal verdsette et norsk teknologiselskap som er unotert. Du finner tre sammenlignbare 
                  børsnoterte selskaper:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Selskap</th>
                        <th className="text-center py-2">Beta</th>
                        <th className="text-center py-2">D/E ratio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">TechCo A</td>
                        <td className="text-center">1.45</td>
                        <td className="text-center">0.8</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">TechCo B</td>
                        <td className="text-center">1.20</td>
                        <td className="text-center">0.4</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">TechCo C</td>
                        <td className="text-center">1.60</td>
                        <td className="text-center">1.2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Løsning:</h4>
                <ol className="list-decimal list-inside space-y-3 text-sm">
                  <li>
                    <strong>Unlever alle betaer</strong> (anta Tc = 22%):
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>TechCo A: βu = 1.45 / [1 + 0.78 × 0.8] = 0.89</li>
                      <li>TechCo B: βu = 1.20 / [1 + 0.78 × 0.4] = 0.91</li>
                      <li>TechCo C: βu = 1.60 / [1 + 0.78 × 1.2] = 0.83</li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    <strong>Gjennomsnitt unlevered beta</strong>: (0.89 + 0.91 + 0.83) / 3 = 0.88
                  </li>
                  <li className="mt-3">
                    <strong>Relever for ditt selskap</strong> (anta D/E = 0.5):
                    <div className="mt-2">βL = 0.88 × [1 + 0.78 × 0.5] = 1.22</div>
                  </li>
                </ol>
              </div>

              <Alert className="bg-green-50 border-green-200">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Resultat:</strong> Den justerte betaen for ditt selskap er 1.22, 
                  som reflekterer både den gjennomsnittlige operasjonelle risikoen i bransjen 
                  og din planlagte kapitalstruktur.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BetaAdjustmentTool;