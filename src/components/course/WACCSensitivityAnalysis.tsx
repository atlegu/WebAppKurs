import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Activity, AlertCircle, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BaseInputs {
  marketValueEquity: number;
  marketValueDebt: number;
  beta: number;
  riskFreeRate: number;
  marketPremium: number;
  debtRate: number;
  taxRate: number;
}

interface SensitivityData {
  parameter: string;
  baseValue: string;
  lowValue: string;
  highValue: string;
  lowWACC: number;
  baseWACC: number;
  highWACC: number;
  impact: number;
}

const WACCSensitivityAnalysis: React.FC = () => {
  const [baseInputs, setBaseInputs] = useState<BaseInputs>({
    marketValueEquity: 1500,
    marketValueDebt: 500,
    beta: 1.2,
    riskFreeRate: 3.5,
    marketPremium: 6.0,
    debtRate: 4.5,
    taxRate: 22,
  });

  const [sensitivityRange, setSensitivityRange] = useState(20); // +/- 20% default
  const [sensitivityData, setSensitivityData] = useState<SensitivityData[]>([]);
  const [baseWACC, setBaseWACC] = useState(0);

  useEffect(() => {
    calculateSensitivity();
  }, [baseInputs, sensitivityRange]);

  const calculateWACC = (inputs: BaseInputs): number => {
    const totalValue = inputs.marketValueEquity + inputs.marketValueDebt;
    const weightEquity = inputs.marketValueEquity / totalValue;
    const weightDebt = inputs.marketValueDebt / totalValue;
    const costOfEquity = inputs.riskFreeRate + inputs.beta * inputs.marketPremium;
    const afterTaxCostOfDebt = inputs.debtRate * (1 - inputs.taxRate / 100);
    return weightEquity * costOfEquity + weightDebt * afterTaxCostOfDebt;
  };

  const calculateSensitivity = () => {
    const base = calculateWACC(baseInputs);
    setBaseWACC(base);

    const sensitivityResults: SensitivityData[] = [];
    const factor = sensitivityRange / 100;

    // Beta sensitivity
    const betaLow = calculateWACC({ ...baseInputs, beta: baseInputs.beta * (1 - factor) });
    const betaHigh = calculateWACC({ ...baseInputs, beta: baseInputs.beta * (1 + factor) });
    sensitivityResults.push({
      parameter: "Beta",
      baseValue: baseInputs.beta.toFixed(2),
      lowValue: (baseInputs.beta * (1 - factor)).toFixed(2),
      highValue: (baseInputs.beta * (1 + factor)).toFixed(2),
      lowWACC: betaLow,
      baseWACC: base,
      highWACC: betaHigh,
      impact: Math.abs(betaHigh - betaLow),
    });

    // Market Premium sensitivity
    const mpLow = calculateWACC({ ...baseInputs, marketPremium: baseInputs.marketPremium * (1 - factor) });
    const mpHigh = calculateWACC({ ...baseInputs, marketPremium: baseInputs.marketPremium * (1 + factor) });
    sensitivityResults.push({
      parameter: "Markedspremie",
      baseValue: `${baseInputs.marketPremium.toFixed(1)}%`,
      lowValue: `${(baseInputs.marketPremium * (1 - factor)).toFixed(1)}%`,
      highValue: `${(baseInputs.marketPremium * (1 + factor)).toFixed(1)}%`,
      lowWACC: mpLow,
      baseWACC: base,
      highWACC: mpHigh,
      impact: Math.abs(mpHigh - mpLow),
    });

    // Debt ratio sensitivity
    const totalValue = baseInputs.marketValueEquity + baseInputs.marketValueDebt;
    const currentDebtRatio = baseInputs.marketValueDebt / totalValue;
    const lowDebtRatio = currentDebtRatio * (1 - factor);
    const highDebtRatio = currentDebtRatio * (1 + factor);
    
    const lowDebt = totalValue * lowDebtRatio;
    const lowEquity = totalValue - lowDebt;
    const debtLow = calculateWACC({ ...baseInputs, marketValueDebt: lowDebt, marketValueEquity: lowEquity });
    
    const highDebt = totalValue * highDebtRatio;
    const highEquity = totalValue - highDebt;
    const debtHigh = calculateWACC({ ...baseInputs, marketValueDebt: highDebt, marketValueEquity: highEquity });
    
    sensitivityResults.push({
      parameter: "Gjeldsandel",
      baseValue: `${(currentDebtRatio * 100).toFixed(0)}%`,
      lowValue: `${(lowDebtRatio * 100).toFixed(0)}%`,
      highValue: `${(highDebtRatio * 100).toFixed(0)}%`,
      lowWACC: debtLow,
      baseWACC: base,
      highWACC: debtHigh,
      impact: Math.abs(debtHigh - debtLow),
    });

    // Risk-free rate sensitivity
    const rfLow = calculateWACC({ ...baseInputs, riskFreeRate: baseInputs.riskFreeRate * (1 - factor) });
    const rfHigh = calculateWACC({ ...baseInputs, riskFreeRate: baseInputs.riskFreeRate * (1 + factor) });
    sensitivityResults.push({
      parameter: "Risikofri rente",
      baseValue: `${baseInputs.riskFreeRate.toFixed(1)}%`,
      lowValue: `${(baseInputs.riskFreeRate * (1 - factor)).toFixed(1)}%`,
      highValue: `${(baseInputs.riskFreeRate * (1 + factor)).toFixed(1)}%`,
      lowWACC: rfLow,
      baseWACC: base,
      highWACC: rfHigh,
      impact: Math.abs(rfHigh - rfLow),
    });

    // Debt rate sensitivity
    const drLow = calculateWACC({ ...baseInputs, debtRate: baseInputs.debtRate * (1 - factor) });
    const drHigh = calculateWACC({ ...baseInputs, debtRate: baseInputs.debtRate * (1 + factor) });
    sensitivityResults.push({
      parameter: "Lånerente",
      baseValue: `${baseInputs.debtRate.toFixed(1)}%`,
      lowValue: `${(baseInputs.debtRate * (1 - factor)).toFixed(1)}%`,
      highValue: `${(baseInputs.debtRate * (1 + factor)).toFixed(1)}%`,
      lowWACC: drLow,
      baseWACC: base,
      highWACC: drHigh,
      impact: Math.abs(drHigh - drLow),
    });

    // Tax rate sensitivity
    const taxLow = calculateWACC({ ...baseInputs, taxRate: baseInputs.taxRate * (1 - factor) });
    const taxHigh = calculateWACC({ ...baseInputs, taxRate: baseInputs.taxRate * (1 + factor) });
    sensitivityResults.push({
      parameter: "Skattesats",
      baseValue: `${baseInputs.taxRate}%`,
      lowValue: `${Math.round(baseInputs.taxRate * (1 - factor))}%`,
      highValue: `${Math.round(baseInputs.taxRate * (1 + factor))}%`,
      lowWACC: taxLow,
      baseWACC: base,
      highWACC: taxHigh,
      impact: Math.abs(taxHigh - taxLow),
    });

    // Sort by impact
    sensitivityResults.sort((a, b) => b.impact - a.impact);
    setSensitivityData(sensitivityResults);
  };

  const handleInputChange = (field: keyof BaseInputs, value: number) => {
    setBaseInputs({ ...baseInputs, [field]: value });
  };

  const formatPercent = (value: number) => `${value.toFixed(2)}%`;

  const TornadoChart: React.FC = () => {
    const chartData = sensitivityData.map(item => ({
      parameter: item.parameter,
      negative: -(item.lowWACC - item.baseWACC) * 100,
      positive: (item.highWACC - item.baseWACC) * 100,
    }));

    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          layout="horizontal"
          margin={{ top: 20, right: 30, bottom: 20, left: 100 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={['dataMin - 10', 'dataMax + 10']} />
          <YAxis dataKey="parameter" type="category" width={80} />
          <Tooltip
            formatter={(value: number) => `${value > 0 ? '+' : ''}${value.toFixed(2)} bp`}
            labelFormatter={(label) => `${label}`}
          />
          <Bar dataKey="negative" fill="#ef4444" />
          <Bar dataKey="positive" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Activity className="w-6 h-6 text-primary" />
          <div>
            <CardTitle>WACC Sensitivitetsanalyse</CardTitle>
            <CardDescription>
              Analyser hvordan endringer i ulike parametere påvirker WACC
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="tornado" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tornado">Tornado-diagram</TabsTrigger>
            <TabsTrigger value="table">Detaljert tabell</TabsTrigger>
            <TabsTrigger value="inputs">Parametere</TabsTrigger>
          </TabsList>

          <TabsContent value="tornado" className="space-y-6 mt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Base case WACC: {formatPercent(baseWACC)}</h3>
                  <p className="text-sm text-muted-foreground">
                    Sensitivitetsområde: ±{sensitivityRange}%
                  </p>
                </div>
                <div className="space-y-2">
                  <Label>Juster sensitivitetsområde</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">±</span>
                    <Slider
                      value={[sensitivityRange]}
                      onValueChange={(value) => setSensitivityRange(value[0])}
                      min={10}
                      max={50}
                      step={5}
                      className="w-32"
                    />
                    <span className="text-sm font-medium w-12">{sensitivityRange}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-4">Tornado-diagram (endring i basispunkter)</h4>
                <TornadoChart />
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Tolkning:</strong> Jo lengre stolpe, desto mer sensitiv er WACC for endringer 
                  i denne parameteren. Grønn = økning i parameter øker WACC, Rød = økning i parameter 
                  reduserer WACC.
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Mest sensitiv for:</h4>
                  <p className="text-sm">{sensitivityData[0]?.parameter}</p>
                  <p className="text-xs text-red-600 mt-1">
                    Påvirkning: {(sensitivityData[0]?.impact * 100).toFixed(0)} bp
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Nest mest sensitiv:</h4>
                  <p className="text-sm">{sensitivityData[1]?.parameter}</p>
                  <p className="text-xs text-yellow-600 mt-1">
                    Påvirkning: {(sensitivityData[1]?.impact * 100).toFixed(0)} bp
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Minst sensitiv for:</h4>
                  <p className="text-sm">{sensitivityData[sensitivityData.length - 1]?.parameter}</p>
                  <p className="text-xs text-green-600 mt-1">
                    Påvirkning: {(sensitivityData[sensitivityData.length - 1]?.impact * 100).toFixed(0)} bp
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="table" className="space-y-6 mt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Parameter</th>
                    <th className="text-center py-3 px-2">Lav verdi</th>
                    <th className="text-center py-3 px-2">Base verdi</th>
                    <th className="text-center py-3 px-2">Høy verdi</th>
                    <th className="text-center py-3 px-2">WACC (lav)</th>
                    <th className="text-center py-3 px-2">WACC (base)</th>
                    <th className="text-center py-3 px-2">WACC (høy)</th>
                    <th className="text-center py-3 px-2">Total påvirkning</th>
                  </tr>
                </thead>
                <tbody>
                  {sensitivityData.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-2 font-medium">{item.parameter}</td>
                      <td className="text-center py-3 px-2">{item.lowValue}</td>
                      <td className="text-center py-3 px-2 font-semibold">{item.baseValue}</td>
                      <td className="text-center py-3 px-2">{item.highValue}</td>
                      <td className="text-center py-3 px-2">{formatPercent(item.lowWACC)}</td>
                      <td className="text-center py-3 px-2 font-semibold">{formatPercent(item.baseWACC)}</td>
                      <td className="text-center py-3 px-2">{formatPercent(item.highWACC)}</td>
                      <td className="text-center py-3 px-2">
                        <span className={`font-semibold ${
                          index === 0 ? 'text-red-600' : 
                          index === 1 ? 'text-yellow-600' : 
                          'text-green-600'
                        }`}>
                          {(item.impact * 100).toFixed(0)} bp
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                <strong>bp = basispunkter.</strong> 100 basispunkter = 1 prosentpoeng. 
                Total påvirkning viser forskjellen mellom høy og lav WACC for hver parameter.
              </AlertDescription>
            </Alert>
          </TabsContent>

          <TabsContent value="inputs" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                  Markedsverdier
                </h3>
                
                <div className="space-y-2">
                  <Label>Markedsverdi egenkapital (mill kr)</Label>
                  <Slider
                    value={[baseInputs.marketValueEquity]}
                    onValueChange={(value) => handleInputChange("marketValueEquity", value[0])}
                    min={100}
                    max={5000}
                    step={100}
                    className="w-full"
                  />
                  <span className="text-sm text-muted-foreground">{baseInputs.marketValueEquity} mill kr</span>
                </div>

                <div className="space-y-2">
                  <Label>Markedsverdi gjeld (mill kr)</Label>
                  <Slider
                    value={[baseInputs.marketValueDebt]}
                    onValueChange={(value) => handleInputChange("marketValueDebt", value[0])}
                    min={0}
                    max={2000}
                    step={50}
                    className="w-full"
                  />
                  <span className="text-sm text-muted-foreground">{baseInputs.marketValueDebt} mill kr</span>
                </div>

                <div className="space-y-2">
                  <Label>Beta</Label>
                  <Slider
                    value={[baseInputs.beta]}
                    onValueChange={(value) => handleInputChange("beta", value[0] / 100)}
                    min={50}
                    max={200}
                    step={5}
                    className="w-full"
                  />
                  <span className="text-sm text-muted-foreground">{baseInputs.beta.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                  Rentesatser
                </h3>
                
                <div className="space-y-2">
                  <Label>Risikofri rente (%)</Label>
                  <Slider
                    value={[baseInputs.riskFreeRate]}
                    onValueChange={(value) => handleInputChange("riskFreeRate", value[0] / 10)}
                    min={10}
                    max={60}
                    step={5}
                    className="w-full"
                  />
                  <span className="text-sm text-muted-foreground">{baseInputs.riskFreeRate.toFixed(1)}%</span>
                </div>

                <div className="space-y-2">
                  <Label>Markedspremie (%)</Label>
                  <Slider
                    value={[baseInputs.marketPremium]}
                    onValueChange={(value) => handleInputChange("marketPremium", value[0] / 10)}
                    min={30}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                  <span className="text-sm text-muted-foreground">{baseInputs.marketPremium.toFixed(1)}%</span>
                </div>

                <div className="space-y-2">
                  <Label>Lånerente (%)</Label>
                  <Slider
                    value={[baseInputs.debtRate]}
                    onValueChange={(value) => handleInputChange("debtRate", value[0] / 10)}
                    min={20}
                    max={80}
                    step={5}
                    className="w-full"
                  />
                  <span className="text-sm text-muted-foreground">{baseInputs.debtRate.toFixed(1)}%</span>
                </div>

                <div className="space-y-2">
                  <Label>Skattesats (%)</Label>
                  <Slider
                    value={[baseInputs.taxRate]}
                    onValueChange={(value) => handleInputChange("taxRate", value[0])}
                    min={0}
                    max={40}
                    step={1}
                    className="w-full"
                  />
                  <span className="text-sm text-muted-foreground">{baseInputs.taxRate}%</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default WACCSensitivityAnalysis;