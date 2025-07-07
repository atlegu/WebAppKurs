import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown, 
  Info,
  BarChart3,
  Zap,
  Cloud,
  Sun,
  CloudRain,
  Activity,
  Target,
  Shuffle,
  Calculator
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
  ComposedChart,
  Area,
  Scatter,
  ScatterChart,
  ZAxis
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface BaseAssumptions {
  revenue: number;
  costs: number;
  investment: number;
  discountRate: number;
  years: number;
}

interface Scenario {
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  adjustments: {
    revenue: number;
    costs: number;
    investment: number;
  };
}

const SensitivityAnalysis = () => {
  const [baseAssumptions, setBaseAssumptions] = useState<BaseAssumptions>({
    revenue: 1000000,
    costs: 600000,
    investment: 2000000,
    discountRate: 10,
    years: 5
  });

  const [sensitivityVariable, setSensitivityVariable] = useState<'revenue' | 'costs' | 'discountRate'>('revenue');
  const [sensitivityRange, setSensitivityRange] = useState(20); // +/- percentage
  const [showBreakeven, setShowBreakeven] = useState(false);
  const [selectedScenarios, setSelectedScenarios] = useState<string[]>(['base', 'optimistic', 'pessimistic']);

  // Define scenarios
  const scenarios: Record<string, Scenario> = {
    base: {
      name: 'Basis',
      icon: <Target className="w-4 h-4" />,
      color: '#8884d8',
      description: 'Forventede verdier',
      adjustments: { revenue: 1, costs: 1, investment: 1 }
    },
    optimistic: {
      name: 'Optimistisk',
      icon: <Sun className="w-4 h-4" />,
      color: '#82ca9d',
      description: 'Alt går bedre enn forventet',
      adjustments: { revenue: 1.15, costs: 0.9, investment: 0.95 }
    },
    pessimistic: {
      name: 'Pessimistisk',
      icon: <CloudRain className="w-4 h-4" />,
      color: '#ff7c7c',
      description: 'Alt går dårligere enn forventet',
      adjustments: { revenue: 0.85, costs: 1.1, investment: 1.05 }
    },
    realistic_bad: {
      name: 'Realistisk dårlig',
      icon: <Cloud className="w-4 h-4" />,
      color: '#ffc658',
      description: 'Moderate utfordringer',
      adjustments: { revenue: 0.92, costs: 1.05, investment: 1.02 }
    }
  };

  // Calculate NPV
  const calculateNPV = (revenue: number, costs: number, investment: number, rate: number, years: number) => {
    let npv = -investment;
    const annualCashFlow = revenue - costs;
    
    for (let year = 1; year <= years; year++) {
      npv += annualCashFlow / Math.pow(1 + rate / 100, year);
    }
    
    return npv;
  };

  // Generate sensitivity data
  const sensitivityData = useMemo(() => {
    const steps = 9;
    const data = [];
    
    for (let i = 0; i <= steps; i++) {
      const change = -sensitivityRange + (i * sensitivityRange * 2 / steps);
      let npv;
      
      switch (sensitivityVariable) {
        case 'revenue':
          npv = calculateNPV(
            baseAssumptions.revenue * (1 + change / 100),
            baseAssumptions.costs,
            baseAssumptions.investment,
            baseAssumptions.discountRate,
            baseAssumptions.years
          );
          break;
        case 'costs':
          npv = calculateNPV(
            baseAssumptions.revenue,
            baseAssumptions.costs * (1 + change / 100),
            baseAssumptions.investment,
            baseAssumptions.discountRate,
            baseAssumptions.years
          );
          break;
        case 'discountRate':
          npv = calculateNPV(
            baseAssumptions.revenue,
            baseAssumptions.costs,
            baseAssumptions.investment,
            baseAssumptions.discountRate + change,
            baseAssumptions.years
          );
          break;
        default:
          npv = 0;
      }
      
      data.push({
        change,
        npv,
        label: `${change > 0 ? '+' : ''}${change}%`
      });
    }
    
    return data;
  }, [baseAssumptions, sensitivityVariable, sensitivityRange]);

  // Calculate scenario NPVs
  const scenarioResults = useMemo(() => {
    return selectedScenarios.map(scenarioId => {
      const scenario = scenarios[scenarioId];
      const npv = calculateNPV(
        baseAssumptions.revenue * scenario.adjustments.revenue,
        baseAssumptions.costs * scenario.adjustments.costs,
        baseAssumptions.investment * scenario.adjustments.investment,
        baseAssumptions.discountRate,
        baseAssumptions.years
      );
      
      return {
        ...scenario,
        id: scenarioId,
        npv
      };
    });
  }, [selectedScenarios, baseAssumptions]);

  // Tornado chart data
  const tornadoData = useMemo(() => {
    const baseNPV = calculateNPV(
      baseAssumptions.revenue,
      baseAssumptions.costs,
      baseAssumptions.investment,
      baseAssumptions.discountRate,
      baseAssumptions.years
    );
    
    const variables = [
      { name: 'Inntekter', key: 'revenue' },
      { name: 'Kostnader', key: 'costs' },
      { name: 'Investering', key: 'investment' },
      { name: 'Avkastningskrav', key: 'discountRate' }
    ];
    
    return variables.map(variable => {
      let lowNPV, highNPV;
      
      if (variable.key === 'discountRate') {
        // For discount rate, use +/- 3 percentage points
        lowNPV = calculateNPV(
          baseAssumptions.revenue,
          baseAssumptions.costs,
          baseAssumptions.investment,
          baseAssumptions.discountRate - 3,
          baseAssumptions.years
        );
        highNPV = calculateNPV(
          baseAssumptions.revenue,
          baseAssumptions.costs,
          baseAssumptions.investment,
          baseAssumptions.discountRate + 3,
          baseAssumptions.years
        );
      } else {
        // For other variables, use +/- 15%
        const lowValue = variable.key === 'revenue' 
          ? baseAssumptions[variable.key] * 0.85
          : baseAssumptions[variable.key] * 1.15;
          
        const highValue = variable.key === 'revenue'
          ? baseAssumptions[variable.key] * 1.15
          : baseAssumptions[variable.key] * 0.85;
        
        if (variable.key === 'revenue') {
          lowNPV = calculateNPV(lowValue, baseAssumptions.costs, baseAssumptions.investment, baseAssumptions.discountRate, baseAssumptions.years);
          highNPV = calculateNPV(highValue, baseAssumptions.costs, baseAssumptions.investment, baseAssumptions.discountRate, baseAssumptions.years);
        } else if (variable.key === 'costs') {
          lowNPV = calculateNPV(baseAssumptions.revenue, lowValue, baseAssumptions.investment, baseAssumptions.discountRate, baseAssumptions.years);
          highNPV = calculateNPV(baseAssumptions.revenue, highValue, baseAssumptions.investment, baseAssumptions.discountRate, baseAssumptions.years);
        } else if (variable.key === 'investment') {
          lowNPV = calculateNPV(baseAssumptions.revenue, baseAssumptions.costs, lowValue, baseAssumptions.discountRate, baseAssumptions.years);
          highNPV = calculateNPV(baseAssumptions.revenue, baseAssumptions.costs, highValue, baseAssumptions.discountRate, baseAssumptions.years);
        }
      }
      
      const impact = Math.abs(highNPV - lowNPV);
      
      // For tornado chart, we need the actual NPV values, not the differences
      return {
        name: variable.name,
        lowValue: Math.min(lowNPV, highNPV),
        highValue: Math.max(lowNPV, highNPV),
        impact,
        base: baseNPV,
        // For the bars, we show from min to max
        minNPV: Math.min(lowNPV, highNPV),
        maxNPV: Math.max(lowNPV, highNPV)
      };
    }).sort((a, b) => b.impact - a.impact);
  }, [baseAssumptions]);

  // Monte Carlo simulation data (simplified)
  const monteCarloData = useMemo(() => {
    const simulations = 100;
    const results = [];
    
    for (let i = 0; i < simulations; i++) {
      // Random variations within +/- 20%
      const revenueMultiplier = 0.8 + Math.random() * 0.4;
      const costsMultiplier = 0.8 + Math.random() * 0.4;
      const investmentMultiplier = 0.9 + Math.random() * 0.2;
      
      const npv = calculateNPV(
        baseAssumptions.revenue * revenueMultiplier,
        baseAssumptions.costs * costsMultiplier,
        baseAssumptions.investment * investmentMultiplier,
        baseAssumptions.discountRate,
        baseAssumptions.years
      );
      
      results.push({
        simulation: i,
        npv,
        revenue: revenueMultiplier,
        costs: costsMultiplier
      });
    }
    
    // Create histogram data
    const min = Math.min(...results.map(r => r.npv));
    const max = Math.max(...results.map(r => r.npv));
    const buckets = 10;
    const bucketSize = (max - min) / buckets;
    
    const histogram = Array(buckets).fill(0).map((_, i) => {
      const rangeMin = min + i * bucketSize;
      const rangeMax = rangeMin + bucketSize;
      const count = results.filter(r => r.npv >= rangeMin && r.npv < rangeMax).length;
      
      return {
        range: `${(rangeMin / 1000).toFixed(0)}-${(rangeMax / 1000).toFixed(0)}k`,
        count,
        probability: count / simulations * 100
      };
    });
    
    return { results, histogram };
  }, [baseAssumptions]);

  const formatCurrency = (value: number) => {
    const absValue = Math.abs(value);
    if (absValue >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M kr`;
    }
    return `${(value / 1000).toFixed(0)}k kr`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-xl font-bold text-primary">
          Sensitivitets- og scenarioanalyse
        </h1>
        <p className="text-sm text-muted-foreground">
          Utforsk hvordan usikkerhet påvirker investeringsbeslutninger
        </p>
      </div>

      {/* Base Assumptions */}
      <Card className="border-primary">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            Grunnforutsetninger
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium">Årlige inntekter: {formatCurrency(baseAssumptions.revenue)}</label>
              <Slider
                value={[baseAssumptions.revenue / 10000]}
                onValueChange={(value) => setBaseAssumptions({...baseAssumptions, revenue: value[0] * 10000})}
                min={50}
                max={200}
                step={10}
                className="mt-2"
              />
            </div>
            <div>
              <label className="text-xs font-medium">Årlige kostnader: {formatCurrency(baseAssumptions.costs)}</label>
              <Slider
                value={[baseAssumptions.costs / 10000]}
                onValueChange={(value) => setBaseAssumptions({...baseAssumptions, costs: value[0] * 10000})}
                min={30}
                max={120}
                step={10}
                className="mt-2"
              />
            </div>
            <div>
              <label className="text-xs font-medium">Investering: {formatCurrency(baseAssumptions.investment)}</label>
              <Slider
                value={[baseAssumptions.investment / 10000]}
                onValueChange={(value) => setBaseAssumptions({...baseAssumptions, investment: value[0] * 10000})}
                min={100}
                max={500}
                step={10}
                className="mt-2"
              />
            </div>
            <div>
              <label className="text-xs font-medium">Avkastningskrav: {baseAssumptions.discountRate}%</label>
              <Slider
                value={[baseAssumptions.discountRate]}
                onValueChange={(value) => setBaseAssumptions({...baseAssumptions, discountRate: value[0]})}
                min={5}
                max={25}
                step={0.5}
                className="mt-2"
              />
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-primary/5 rounded-lg">
            <p className="text-sm font-semibold">
              Basis NPV: {formatCurrency(calculateNPV(
                baseAssumptions.revenue,
                baseAssumptions.costs,
                baseAssumptions.investment,
                baseAssumptions.discountRate,
                baseAssumptions.years
              ))}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Analysis Tabs */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Analyser</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="sensitivity" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="sensitivity">Sensitivitet</TabsTrigger>
              <TabsTrigger value="tornado">Tornado</TabsTrigger>
              <TabsTrigger value="scenario">Scenarioer</TabsTrigger>
              <TabsTrigger value="montecarlo">Simulering</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sensitivity" className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <label className="text-sm font-medium">Analyser variabel:</label>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={sensitivityVariable === 'revenue' ? 'default' : 'outline'}
                    onClick={() => setSensitivityVariable('revenue')}
                  >
                    Inntekter
                  </Button>
                  <Button
                    size="sm"
                    variant={sensitivityVariable === 'costs' ? 'default' : 'outline'}
                    onClick={() => setSensitivityVariable('costs')}
                  >
                    Kostnader
                  </Button>
                  <Button
                    size="sm"
                    variant={sensitivityVariable === 'discountRate' ? 'default' : 'outline'}
                    onClick={() => setSensitivityVariable('discountRate')}
                  >
                    Avkastningskrav
                  </Button>
                </div>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={sensitivityData} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="label" 
                      label={{ value: `Endring i ${
                        sensitivityVariable === 'revenue' ? 'inntekter' : 
                        sensitivityVariable === 'costs' ? 'kostnader' : 
                        'avkastningskrav'
                      }`, position: 'insideBottom', offset: -5, style: { fontSize: 10 } }}
                      tick={{ fontSize: 10 }}
                    />
                    <YAxis 
                      tick={{ fontSize: 10 }}
                      tickFormatter={(value) => formatCurrency(value)}
                      label={{ value: 'NPV', angle: -90, position: 'insideLeft', style: { fontSize: 10 } }}
                    />
                    <Tooltip formatter={(value: number) => formatCurrency(value)} />
                    
                    <ReferenceLine y={0} stroke="#666" strokeDasharray="3 3" />
                    <ReferenceLine x="0%" stroke="#666" strokeDasharray="3 3" />
                    
                    <Line 
                      type="monotone" 
                      dataKey="npv" 
                      stroke="#8884d8" 
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-xs">
                  <strong>Tolkning:</strong> Jo brattere kurve, desto mer sensitiv er NPV for endringer i variabelen.
                  {sensitivityVariable === 'revenue' && ' Inntekter har typisk stor påvirkning på lønnsomheten.'}
                  {sensitivityVariable === 'costs' && ' Kostnader påvirker negativt - økte kostnader gir lavere NPV.'}
                  {sensitivityVariable === 'discountRate' && ' Høyere avkastningskrav reduserer alltid NPV.'}
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="tornado" className="space-y-4">
              <div className="space-y-3">
                {/* Custom tornado diagram */}
                <div className="relative">
                  {/* Base NPV line */}
                  <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
                    <div className="h-full w-0.5 bg-gray-600"></div>
                  </div>
                  
                  {/* Variables */}
                  <div className="space-y-2">
                    {tornadoData.map((item, index) => {
                      const maxRange = Math.max(...tornadoData.map(d => d.impact));
                      const leftWidth = ((item.base - item.minNPV) / maxRange) * 45;
                      const rightWidth = ((item.maxNPV - item.base) / maxRange) * 45;
                      
                      return (
                        <div key={item.name} className="relative">
                          <div className="flex items-center">
                            {/* Variable name */}
                            <div className="w-24 text-xs font-medium text-right pr-2">
                              {item.name}
                            </div>
                            
                            {/* Bar container */}
                            <div className="flex-1 flex items-center justify-center h-8 relative">
                              {/* Left bar (negative impact) */}
                              <div 
                                className="absolute right-1/2 h-6 bg-red-500 opacity-80 rounded-l"
                                style={{ width: `${leftWidth}%` }}
                              />
                              
                              {/* Right bar (positive impact) */}
                              <div 
                                className="absolute left-1/2 h-6 bg-green-500 opacity-80 rounded-r"
                                style={{ width: `${rightWidth}%` }}
                              />
                              
                              {/* Hover info */}
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                <div className="bg-black bg-opacity-90 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                  {formatCurrency(item.minNPV)} til {formatCurrency(item.maxNPV)}
                                </div>
                              </div>
                            </div>
                            
                            {/* Impact value */}
                            <div className="w-20 text-xs text-right">
                              {formatCurrency(item.impact)}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Scale labels */}
                  <div className="flex items-center mt-4 text-xs text-gray-500">
                    <div className="w-24"></div>
                    <div className="flex-1 flex justify-between px-4">
                      <span>Negativ påvirkning</span>
                      <span className="font-semibold">Basis NPV: {formatCurrency(tornadoData[0]?.base || 0)}</span>
                      <span>Positiv påvirkning</span>
                    </div>
                    <div className="w-20"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-50 p-3 rounded-lg">
                <p className="text-xs">
                  <strong>Tornado-diagram:</strong> Viser hvilke variabler som har størst påvirkning på NPV.
                  <span className="text-red-500"> Røde søyler</span> viser reduksjon fra basis NPV,
                  <span className="text-green-500"> grønne søyler</span> viser økning fra basis NPV.
                  Jo bredere total søyle, desto større påvirkning har variabelen. Variablene er sortert med de mest kritiske øverst.
                </p>
              </div>
              
              <div className="mt-2 text-xs text-muted-foreground">
                <p>• Inntekter/Kostnader/Investering: ±15% endring fra basisverdi</p>
                <p>• Avkastningskrav: ±3 prosentpoeng endring</p>
                <p>• Høyre kolonne viser total påvirkning (maks - min NPV)</p>
              </div>
            </TabsContent>
            
            <TabsContent value="scenario" className="space-y-4">
              <div className="grid md:grid-cols-4 gap-3 mb-4">
                {Object.entries(scenarios).map(([id, scenario]) => (
                  <button
                    key={id}
                    onClick={() => {
                      if (selectedScenarios.includes(id)) {
                        setSelectedScenarios(selectedScenarios.filter(s => s !== id));
                      } else {
                        setSelectedScenarios([...selectedScenarios, id]);
                      }
                    }}
                    className={`p-3 rounded-lg border transition-all ${
                      selectedScenarios.includes(id)
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-center mb-2" style={{ color: scenario.color }}>
                      {scenario.icon}
                    </div>
                    <h5 className="font-semibold text-xs">{scenario.name}</h5>
                    <p className="text-xs text-muted-foreground mt-1">{scenario.description}</p>
                  </button>
                ))}
              </div>
              
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={scenarioResults}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} tickFormatter={(value) => formatCurrency(value)} />
                    <Tooltip formatter={(value: number) => formatCurrency(value)} />
                    
                    <ReferenceLine y={0} stroke="#666" strokeDasharray="3 3" />
                    
                    <Bar dataKey="npv" name="NPV">
                      {scenarioResults.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="space-y-2">
                {scenarioResults.map(result => (
                  <div key={result.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <div className="flex items-center gap-2">
                      <div style={{ color: result.color }}>{result.icon}</div>
                      <span className="text-sm font-medium">{result.name}</span>
                    </div>
                    <span className={`text-sm font-mono ${result.npv >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {formatCurrency(result.npv)}
                    </span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="montecarlo" className="space-y-4">
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monteCarloData.histogram}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="range" tick={{ fontSize: 9 }} angle={-45} textAnchor="end" />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip 
                      formatter={(value: number) => `${value.toFixed(1)}%`}
                      labelFormatter={(label) => `NPV-intervall: ${label}`}
                    />
                    
                    <Bar dataKey="probability" name="Sannsynlighet (%)" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid md:grid-cols-3 gap-3 text-center">
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-xs font-semibold">Sannsynlighet for positiv NPV</p>
                  <p className="text-lg font-bold text-green-600">
                    {(monteCarloData.results.filter(r => r.npv > 0).length / monteCarloData.results.length * 100).toFixed(1)}%
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-xs font-semibold">Forventet NPV</p>
                  <p className="text-lg font-bold text-blue-600">
                    {formatCurrency(monteCarloData.results.reduce((sum, r) => sum + r.npv, 0) / monteCarloData.results.length)}
                  </p>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg">
                  <p className="text-xs font-semibold">Verste utfall (5%)</p>
                  <p className="text-lg font-bold text-amber-600">
                    {formatCurrency(monteCarloData.results.sort((a, b) => a.npv - b.npv)[Math.floor(monteCarloData.results.length * 0.05)].npv)}
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-xs">
                  <strong>Monte Carlo-simulering:</strong> Kjører 100 simuleringer med tilfeldige variasjoner i 
                  inntekter, kostnader og investering. Viser sannsynlighetsfordelingen av mulige NPV-utfall.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Key Insights */}
      <Card className="bg-amber-50 border-amber-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Hvorfor sensitivitetsanalyse er kritisk
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-600 mt-0.5" />
              <div>
                <p className="font-semibold">Avkastningskravet fanger ikke all usikkerhet</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Selv om risiko justeres i avkastningskravet, har ulike beslutningstakere ofte 
                  forskjellige syn på sannsynlige utfall for priser, kostnader og markedsforhold.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <Activity className="w-4 h-4 text-amber-600 mt-0.5" />
              <div>
                <p className="font-semibold">Identifiser kritiske variabler</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Tornado-diagrammet viser hvilke faktorer som har størst innvirkning. 
                  Fokuser innsatsen på å få gode estimater for disse!
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <Shuffle className="w-4 h-4 text-amber-600 mt-0.5" />
              <div>
                <p className="font-semibold">Test robustheten</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Hvis prosjektet kun er lønnsomt under optimistiske forutsetninger, 
                  bør du revurdere eller finne måter å redusere risikoen på.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practical Tips */}
      <Card className="bg-primary/5 border-primary">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">🎯 Praktiske tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>• Start alltid med sensitivitetsanalyse av én variabel</p>
            <p>• Bruk tornado-diagram for å prioritere videre analyse</p>
            <p>• Lag realistiske scenarioer - ikke bare beste/verste</p>
            <p>• Presenter alltid usikkerhetsanalyse sammen med NPV</p>
            <p>• Vurder tiltak for å redusere risiko i kritiske variabler</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SensitivityAnalysis;