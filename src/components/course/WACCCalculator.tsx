import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator, HelpCircle, TrendingUp, AlertCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface WACCInputs {
  sharePrice: number;
  sharesOutstanding: number;
  marketValueDebt: number;
  beta: number;
  riskFreeRate: number;
  marketPremium: number;
  debtRate: number;
  taxRate: number;
}

const WACCCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<WACCInputs>({
    sharePrice: 85,
    sharesOutstanding: 20,
    marketValueDebt: 600,
    beta: 1.2,
    riskFreeRate: 3.5,
    marketPremium: 6.0,
    debtRate: 4.5,
    taxRate: 22,
  });

  const [results, setResults] = useState({
    marketValueEquity: 0,
    totalValue: 0,
    weightEquity: 0,
    weightDebt: 0,
    costOfEquity: 0,
    afterTaxCostOfDebt: 0,
    wacc: 0,
  });

  useEffect(() => {
    calculateWACC();
  }, [inputs]);

  const calculateWACC = () => {
    const marketValueEquity = inputs.sharePrice * inputs.sharesOutstanding;
    const totalValue = marketValueEquity + inputs.marketValueDebt;
    const weightEquity = marketValueEquity / totalValue;
    const weightDebt = inputs.marketValueDebt / totalValue;
    const costOfEquity = inputs.riskFreeRate + inputs.beta * inputs.marketPremium;
    const afterTaxCostOfDebt = inputs.debtRate * (1 - inputs.taxRate / 100);
    const wacc = weightEquity * costOfEquity + weightDebt * afterTaxCostOfDebt;

    setResults({
      marketValueEquity,
      totalValue,
      weightEquity: weightEquity * 100,
      weightDebt: weightDebt * 100,
      costOfEquity,
      afterTaxCostOfDebt,
      wacc,
    });
  };

  const handleInputChange = (field: keyof WACCInputs, value: string) => {
    const numValue = parseFloat(value) || 0;
    setInputs({ ...inputs, [field]: numValue });
  };

  const formatPercent = (value: number) => `${value.toFixed(2)}%`;
  const formatCurrency = (value: number) => `${value.toFixed(0)} mill kr`;

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Calculator className="w-6 h-6 text-primary" />
          <div>
            <CardTitle>WACC-kalkulator</CardTitle>
            <CardDescription>
              Beregn selskapets veide gjennomsnittlige kapitalkostnad
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="inputs" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="inputs">Input</TabsTrigger>
            <TabsTrigger value="calculation">Beregning</TabsTrigger>
            <TabsTrigger value="formula">Formel</TabsTrigger>
          </TabsList>

          <TabsContent value="inputs" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Markedsverdier */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                  Markedsverdier
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="sharePrice" className="flex items-center gap-2">
                    Aksjekurs (kr)
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="w-4 h-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Dagens markedspris per aksje</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  <Input
                    id="sharePrice"
                    type="number"
                    value={inputs.sharePrice}
                    onChange={(e) => handleInputChange("sharePrice", e.target.value)}
                    step="0.1"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sharesOutstanding">
                    Antall aksjer (millioner)
                  </Label>
                  <Input
                    id="sharesOutstanding"
                    type="number"
                    value={inputs.sharesOutstanding}
                    onChange={(e) => handleInputChange("sharesOutstanding", e.target.value)}
                    step="0.1"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="marketValueDebt" className="flex items-center gap-2">
                    Markedsverdi gjeld (mill kr)
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="w-4 h-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Total rentebærende gjeld til markedsverdi</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  <Input
                    id="marketValueDebt"
                    type="number"
                    value={inputs.marketValueDebt}
                    onChange={(e) => handleInputChange("marketValueDebt", e.target.value)}
                    step="10"
                  />
                </div>
              </div>

              {/* Kapitalkostnader */}
              <div className="space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                  Kapitalkostnader
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="beta" className="flex items-center gap-2">
                    Beta
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="w-4 h-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Aksjens systematiske risiko relativt til markedet</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  <Input
                    id="beta"
                    type="number"
                    value={inputs.beta}
                    onChange={(e) => handleInputChange("beta", e.target.value)}
                    step="0.05"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="riskFreeRate">
                    Risikofri rente (%)
                  </Label>
                  <Input
                    id="riskFreeRate"
                    type="number"
                    value={inputs.riskFreeRate}
                    onChange={(e) => handleInputChange("riskFreeRate", e.target.value)}
                    step="0.1"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="marketPremium">
                    Markedspremie (%)
                  </Label>
                  <Input
                    id="marketPremium"
                    type="number"
                    value={inputs.marketPremium}
                    onChange={(e) => handleInputChange("marketPremium", e.target.value)}
                    step="0.1"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="debtRate">
                    Lånerente (%)
                  </Label>
                  <Input
                    id="debtRate"
                    type="number"
                    value={inputs.debtRate}
                    onChange={(e) => handleInputChange("debtRate", e.target.value)}
                    step="0.1"
                  />
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
            </div>
          </TabsContent>

          <TabsContent value="calculation" className="space-y-6 mt-6">
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                <h3 className="font-semibold">Steg 1: Markedsverdier og vekter</h3>
                <div className="space-y-1 text-sm">
                  <p>Markedsverdi egenkapital (E) = {formatCurrency(results.marketValueEquity)}</p>
                  <p>Markedsverdi gjeld (D) = {formatCurrency(inputs.marketValueDebt)}</p>
                  <p>Total verdi (V) = {formatCurrency(results.totalValue)}</p>
                  <p className="pt-2 font-medium">
                    E/V = {formatPercent(results.weightEquity)} &nbsp;&nbsp;&nbsp;
                    D/V = {formatPercent(results.weightDebt)}
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                <h3 className="font-semibold">Steg 2: Egenkapitalkostnad (CAPM)</h3>
                <div className="space-y-1 text-sm">
                  <p>Re = Rf + β × Markedspremie</p>
                  <p>Re = {inputs.riskFreeRate}% + {inputs.beta} × {inputs.marketPremium}%</p>
                  <p className="font-medium">Re = {formatPercent(results.costOfEquity)}</p>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                <h3 className="font-semibold">Steg 3: Gjeldskostnad etter skatt</h3>
                <div className="space-y-1 text-sm">
                  <p>Rd(etter skatt) = Rd × (1 - Tc)</p>
                  <p>Rd(etter skatt) = {inputs.debtRate}% × (1 - {inputs.taxRate}%)</p>
                  <p className="font-medium">Rd(etter skatt) = {formatPercent(results.afterTaxCostOfDebt)}</p>
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg space-y-3 border-2 border-primary/20">
                <h3 className="font-semibold flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Resultat: WACC
                </h3>
                <div className="space-y-1 text-sm">
                  <p>WACC = (E/V) × Re + (D/V) × Rd(etter skatt)</p>
                  <p>WACC = {formatPercent(results.weightEquity)} × {formatPercent(results.costOfEquity)} + {formatPercent(results.weightDebt)} × {formatPercent(results.afterTaxCostOfDebt)}</p>
                  <p className="text-2xl font-bold pt-2">WACC = {formatPercent(results.wacc)}</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="formula" className="space-y-6 mt-6">
            <div className="space-y-6">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  WACC er den veide gjennomsnittlige kapitalkostnaden som tar hensyn til både egenkapital og gjeld.
                </AlertDescription>
              </Alert>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">WACC-formelen</h3>
                <div className="bg-background p-4 rounded font-mono text-center">
                  WACC = (E/V) × Re + (D/V) × Rd × (1 - Tc)
                </div>
                
                <div className="mt-6 space-y-2">
                  <h4 className="font-semibold">Hvor:</h4>
                  <ul className="space-y-1 text-sm">
                    <li><strong>E</strong> = Markedsverdi av egenkapital</li>
                    <li><strong>D</strong> = Markedsverdi av gjeld</li>
                    <li><strong>V</strong> = E + D (total kapitalverdi)</li>
                    <li><strong>Re</strong> = Kostnad for egenkapital (beregnet med CAPM)</li>
                    <li><strong>Rd</strong> = Kostnad for gjeld (lånerente)</li>
                    <li><strong>Tc</strong> = Selskapsskattesats</li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">CAPM-formelen</h3>
                <div className="bg-background p-4 rounded font-mono text-center">
                  Re = Rf + β × (Rm - Rf)
                </div>
                
                <div className="mt-6 space-y-2">
                  <h4 className="font-semibold">Hvor:</h4>
                  <ul className="space-y-1 text-sm">
                    <li><strong>Rf</strong> = Risikofri rente</li>
                    <li><strong>β</strong> = Beta (systematisk risiko)</li>
                    <li><strong>Rm - Rf</strong> = Markedspremien</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default WACCCalculator;