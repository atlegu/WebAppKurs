import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { Target, TrendingDown, Info, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface OptimizationInputs {
  unleveredBeta: number;
  riskFreeRate: number;
  marketPremium: number;
  taxRate: number;
  baseDebtRate: number;
  debtSpread: number;
}

interface DataPoint {
  debtRatio: number;
  costOfEquity: number;
  costOfDebt: number;
  wacc: number;
  debtEquityRatio: number;
}

const CapitalStructureOptimizer: React.FC = () => {
  const [inputs, setInputs] = useState<OptimizationInputs>({
    unleveredBeta: 1.0,
    riskFreeRate: 3.5,
    marketPremium: 6.0,
    taxRate: 22,
    baseDebtRate: 3.5,
    debtSpread: 0.5,
  });

  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);
  const [optimalDebtRatio, setOptimalDebtRatio] = useState(0);
  const [minWACC, setMinWACC] = useState(0);
  const [selectedDebtRatio, setSelectedDebtRatio] = useState(30);

  useEffect(() => {
    calculateOptimalStructure();
  }, [inputs]);

  const calculateOptimalStructure = () => {
    const points: DataPoint[] = [];
    let minWaccValue = 100;
    let optimalRatio = 0;

    for (let debtRatio = 0; debtRatio <= 80; debtRatio += 5) {
      const equityRatio = 100 - debtRatio;
      const debtEquityRatio = debtRatio / equityRatio;
      
      // Calculate levered beta
      const taxFactor = 1 - inputs.taxRate / 100;
      const leveredBeta = inputs.unleveredBeta * (1 + taxFactor * debtEquityRatio);
      
      // Calculate cost of equity using CAPM
      const costOfEquity = inputs.riskFreeRate + leveredBeta * inputs.marketPremium;
      
      // Calculate cost of debt (increases with leverage)
      const financialDistressPremium = Math.pow(debtRatio / 100, 2) * 5; // Non-linear increase
      const costOfDebtBeforeTax = inputs.baseDebtRate + inputs.debtSpread + financialDistressPremium;
      const costOfDebt = costOfDebtBeforeTax * taxFactor;
      
      // Calculate WACC
      const wacc = (equityRatio / 100) * costOfEquity + (debtRatio / 100) * costOfDebt;
      
      points.push({
        debtRatio,
        costOfEquity,
        costOfDebt: costOfDebtBeforeTax,
        wacc,
        debtEquityRatio,
      });
      
      if (wacc < minWaccValue) {
        minWaccValue = wacc;
        optimalRatio = debtRatio;
      }
    }
    
    setDataPoints(points);
    setOptimalDebtRatio(optimalRatio);
    setMinWACC(minWaccValue);
  };

  const handleInputChange = (field: keyof OptimizationInputs, value: number) => {
    setInputs({ ...inputs, [field]: value });
  };

  const getCurrentMetrics = () => {
    const point = dataPoints.find(p => p.debtRatio === selectedDebtRatio);
    if (!point) return null;
    return point;
  };

  const currentMetrics = getCurrentMetrics();

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Target className="w-6 h-6 text-primary" />
          <div>
            <CardTitle>Kapitalstruktur-optimering</CardTitle>
            <CardDescription>
              Finn den optimale kombinasjonen av gjeld og egenkapital som minimerer WACC
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="analysis" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="analysis">Analyse</TabsTrigger>
            <TabsTrigger value="inputs">Parametere</TabsTrigger>
            <TabsTrigger value="theory">Teori</TabsTrigger>
          </TabsList>

          <TabsContent value="analysis" className="space-y-6 mt-6">
            <div className="space-y-6">
              {/* Chart */}
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="font-semibold mb-4">WACC ved ulike gjeldsnivåer</h3>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={dataPoints} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="debtRatio" 
                      label={{ value: "Gjeldsandel (%)", position: "insideBottom", offset: -5 }}
                    />
                    <YAxis 
                      label={{ value: "Kostnad (%)", angle: -90, position: "insideLeft" }}
                    />
                    <Tooltip 
                      formatter={(value: number) => `${value.toFixed(2)}%`}
                      labelFormatter={(label) => `Gjeldsandel: ${label}%`}
                    />
                    <ReferenceLine 
                      x={optimalDebtRatio} 
                      stroke="#10b981" 
                      strokeDasharray="5 5"
                      label={{ value: "Optimal", position: "top" }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="wacc" 
                      stroke="#3b82f6" 
                      strokeWidth={3}
                      name="WACC"
                      dot={false}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="costOfEquity" 
                      stroke="#ef4444" 
                      strokeWidth={2}
                      name="Egenkapitalkostnad"
                      strokeDasharray="5 5"
                      dot={false}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="costOfDebt" 
                      stroke="#f59e0b" 
                      strokeWidth={2}
                      name="Gjeldskostnad (før skatt)"
                      strokeDasharray="5 5"
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Optimal structure info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-green-800">Optimal kapitalstruktur</h4>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm">Gjeldsandel: <span className="font-bold">{optimalDebtRatio}%</span></p>
                    <p className="text-sm">Egenkapitalandel: <span className="font-bold">{100 - optimalDebtRatio}%</span></p>
                    <p className="text-sm">Minimum WACC: <span className="font-bold text-green-600">{minWACC.toFixed(2)}%</span></p>
                  </div>
                </div>

                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Ved optimal kapitalstruktur balanseres skattefordelen av gjeld mot økte 
                    finansielle kostnader og konkursrisiko.
                  </AlertDescription>
                </Alert>
              </div>

              {/* Interactive slider */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Test ulike gjeldsnivåer</Label>
                  <span className="text-sm font-medium">{selectedDebtRatio}% gjeld</span>
                </div>
                <Slider
                  value={[selectedDebtRatio]}
                  onValueChange={(value) => setSelectedDebtRatio(value[0])}
                  min={0}
                  max={80}
                  step={5}
                  className="w-full"
                />
                
                {currentMetrics && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                    <div className="bg-muted/50 p-3 rounded">
                      <p className="text-xs text-muted-foreground">WACC</p>
                      <p className="text-lg font-bold">{currentMetrics.wacc.toFixed(2)}%</p>
                    </div>
                    <div className="bg-muted/50 p-3 rounded">
                      <p className="text-xs text-muted-foreground">Egenkapitalkostnad</p>
                      <p className="text-lg font-bold">{currentMetrics.costOfEquity.toFixed(2)}%</p>
                    </div>
                    <div className="bg-muted/50 p-3 rounded">
                      <p className="text-xs text-muted-foreground">Gjeldskostnad</p>
                      <p className="text-lg font-bold">{currentMetrics.costOfDebt.toFixed(2)}%</p>
                    </div>
                    <div className="bg-muted/50 p-3 rounded">
                      <p className="text-xs text-muted-foreground">D/E ratio</p>
                      <p className="text-lg font-bold">{currentMetrics.debtEquityRatio.toFixed(2)}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="inputs" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                  Risiko og avkastning
                </h3>
                
                <div className="space-y-2">
                  <Label>Unlevered Beta</Label>
                  <Slider
                    value={[inputs.unleveredBeta]}
                    onValueChange={(value) => handleInputChange("unleveredBeta", value[0])}
                    min={0.5}
                    max={2}
                    step={0.05}
                    className="w-full"
                  />
                  <span className="text-sm text-muted-foreground">{inputs.unleveredBeta.toFixed(2)}</span>
                </div>

                <div className="space-y-2">
                  <Label>Risikofri rente (%)</Label>
                  <Slider
                    value={[inputs.riskFreeRate]}
                    onValueChange={(value) => handleInputChange("riskFreeRate", value[0])}
                    min={1}
                    max={6}
                    step={0.1}
                    className="w-full"
                  />
                  <span className="text-sm text-muted-foreground">{inputs.riskFreeRate.toFixed(1)}%</span>
                </div>

                <div className="space-y-2">
                  <Label>Markedspremie (%)</Label>
                  <Slider
                    value={[inputs.marketPremium]}
                    onValueChange={(value) => handleInputChange("marketPremium", value[0])}
                    min={3}
                    max={10}
                    step={0.1}
                    className="w-full"
                  />
                  <span className="text-sm text-muted-foreground">{inputs.marketPremium.toFixed(1)}%</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                  Gjeld og skatt
                </h3>
                
                <div className="space-y-2">
                  <Label>Skattesats (%)</Label>
                  <Slider
                    value={[inputs.taxRate]}
                    onValueChange={(value) => handleInputChange("taxRate", value[0])}
                    min={0}
                    max={40}
                    step={1}
                    className="w-full"
                  />
                  <span className="text-sm text-muted-foreground">{inputs.taxRate}%</span>
                </div>

                <div className="space-y-2">
                  <Label>Basis gjeldskostnad (%)</Label>
                  <Slider
                    value={[inputs.baseDebtRate]}
                    onValueChange={(value) => handleInputChange("baseDebtRate", value[0])}
                    min={1}
                    max={8}
                    step={0.1}
                    className="w-full"
                  />
                  <span className="text-sm text-muted-foreground">{inputs.baseDebtRate.toFixed(1)}%</span>
                </div>

                <div className="space-y-2">
                  <Label>Kredittspread (%)</Label>
                  <Slider
                    value={[inputs.debtSpread]}
                    onValueChange={(value) => handleInputChange("debtSpread", value[0])}
                    min={0}
                    max={5}
                    step={0.1}
                    className="w-full"
                  />
                  <span className="text-sm text-muted-foreground">{inputs.debtSpread.toFixed(1)}%</span>
                </div>
              </div>
            </div>

            <Alert className="bg-yellow-50 border-yellow-200">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Merk:</strong> Modellen inkluderer en forenklet antagelse om at gjeldskostnaden 
                øker eksponentielt med gjeldsgraden for å reflektere økt konkursrisiko.
              </AlertDescription>
            </Alert>
          </TabsContent>

          <TabsContent value="theory" className="space-y-6 mt-6">
            <div className="space-y-4">
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Trade-off teorien</h3>
                <p className="text-sm leading-relaxed mb-4">
                  Optimal kapitalstruktur oppnås når marginalkostnaden av gjeld er lik marginalnytten. 
                  Dette skjer når følgende faktorer balanseres:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded">
                    <h4 className="font-semibold text-green-800 mb-2">Fordeler med gjeld</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Skatteskjold (rentefradrag)</li>
                      <li>Disiplinerende effekt på ledelsen</li>
                      <li>Lavere kostnad enn egenkapital</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded">
                    <h4 className="font-semibold text-red-800 mb-2">Ulemper med gjeld</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Økt konkursrisiko</li>
                      <li>Finansielle begrensninger</li>
                      <li>Agency-kostnader</li>
                      <li>Tap av finansiell fleksibilitet</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Faktorer som påvirker optimal struktur</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <strong>Bransje:</strong> Stabile bransjer (utilities) tåler mer gjeld enn volatile (tech)
                  </li>
                  <li>
                    <strong>Eiendeler:</strong> Tangible eiendeler gir bedre lånesikkerhet
                  </li>
                  <li>
                    <strong>Vekstmuligheter:</strong> Høyvekstselskaper bør ha mindre gjeld
                  </li>
                  <li>
                    <strong>Lønnsomhet:</strong> Lønnsomme selskaper har mer nytte av skatteskjold
                  </li>
                  <li>
                    <strong>Størrelse:</strong> Store selskaper har lavere konkursrisiko
                  </li>
                </ul>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  I praksis er optimal kapitalstruktur ikke et presist punkt, men heller en range. 
                  Selskaper bør sikte mot en kapitalstruktur som gir fleksibilitet og rom for 
                  uventede hendelser.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CapitalStructureOptimizer;