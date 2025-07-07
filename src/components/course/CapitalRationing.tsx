import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { 
  Calculator, 
  Lock,
  Unlock,
  AlertCircle,
  TrendingUp,
  RefreshCw,
  DollarSign,
  Calendar,
  Info,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Target,
  BarChart3
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
  Scatter
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Project {
  id: string;
  name: string;
  investment: number;
  cashFlows: number[];
  life: number;
  color: string;
  repeatable: boolean;
}

interface RationingScenario {
  type: 'soft' | 'hard' | 'none';
  budget: number;
  description: string;
}

const CapitalRationing = () => {
  const [discountRate, setDiscountRate] = useState(10);
  const [inflationRate, setInflationRate] = useState(2);
  const [useRealRate, setUseRealRate] = useState(false);
  const [budget, setBudget] = useState(5000000);
  const [rationingType, setRationingType] = useState<'soft' | 'hard' | 'none'>('soft');
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);
  const [showEAA, setShowEAA] = useState(false);

  // Projects with different characteristics
  const projects: Record<string, Project> = {
    A: {
      id: 'A',
      name: 'Prosjekt A - Kort levetid',
      investment: 1000000,
      cashFlows: [500000, 600000, 400000],
      life: 3,
      color: '#8884d8',
      repeatable: true
    },
    B: {
      id: 'B',
      name: 'Prosjekt B - Lang levetid',
      investment: 2000000,
      cashFlows: [400000, 450000, 500000, 550000, 600000, 650000, 700000],
      life: 7,
      color: '#82ca9d',
      repeatable: true
    },
    C: {
      id: 'C',
      name: 'Prosjekt C - Høy PI',
      investment: 500000,
      cashFlows: [200000, 250000, 300000, 200000],
      life: 4,
      color: '#ffc658',
      repeatable: false
    },
    D: {
      id: 'D',
      name: 'Prosjekt D - Stor investering',
      investment: 3000000,
      cashFlows: [800000, 900000, 1000000, 1100000, 1200000],
      life: 5,
      color: '#ff7c7c',
      repeatable: true
    },
    E: {
      id: 'E',
      name: 'Prosjekt E - Liten, lønnsom',
      investment: 300000,
      cashFlows: [150000, 180000, 150000],
      life: 3,
      color: '#a78bfa',
      repeatable: false
    }
  };

  // Calculate effective discount rate
  const effectiveRate = useMemo(() => {
    if (!useRealRate) return discountRate;
    // Fisher equation: (1 + nominal) = (1 + real) × (1 + inflation)
    // real ≈ nominal - inflation (approximation for small rates)
    return discountRate - inflationRate;
  }, [discountRate, inflationRate, useRealRate]);

  // Calculate NPV
  const calculateNPV = (project: Project, rate: number) => {
    let npv = -project.investment;
    project.cashFlows.forEach((cf, i) => {
      npv += cf / Math.pow(1 + rate / 100, i + 1);
    });
    return npv;
  };

  // Calculate PI (Profitability Index)
  const calculatePI = (project: Project, rate: number) => {
    let pvCashFlows = 0;
    project.cashFlows.forEach((cf, i) => {
      pvCashFlows += cf / Math.pow(1 + rate / 100, i + 1);
    });
    return pvCashFlows / project.investment;
  };

  // Calculate IRR
  const calculateIRR = (project: Project) => {
    let low = -0.99;
    let high = 10;
    let mid;
    
    for (let i = 0; i < 100; i++) {
      mid = (low + high) / 2;
      const npv = calculateNPV(project, mid * 100);
      
      if (Math.abs(npv) < 1) return mid * 100;
      
      if (npv > 0) low = mid;
      else high = mid;
    }
    
    return mid! * 100;
  };

  // Calculate Equivalent Annual Annuity (EAA)
  const calculateEAA = (project: Project, rate: number) => {
    const npv = calculateNPV(project, rate);
    const annuityFactor = (1 - Math.pow(1 + rate / 100, -project.life)) / (rate / 100);
    return npv / annuityFactor;
  };

  // Calculate project metrics
  const projectMetrics = useMemo(() => {
    return Object.values(projects).map(project => ({
      ...project,
      npv: calculateNPV(project, effectiveRate),
      pi: calculatePI(project, effectiveRate),
      irr: calculateIRR(project),
      eaa: calculateEAA(project, effectiveRate),
      npvPerKrone: calculateNPV(project, effectiveRate) / project.investment
    }));
  }, [effectiveRate]);

  // Optimal project selection under capital rationing
  const optimalSelection = useMemo(() => {
    if (rationingType === 'none') {
      // No rationing - take all positive NPV projects
      return projectMetrics
        .filter(p => p.npv > 0)
        .map(p => p.id);
    }

    // Capital rationing - maximize NPV within budget
    // Sort by PI (NPV per invested krone)
    const sorted = [...projectMetrics]
      .filter(p => p.npv > 0)
      .sort((a, b) => b.pi - a.pi);

    const selected: string[] = [];
    let remainingBudget = budget;

    for (const project of sorted) {
      if (project.investment <= remainingBudget) {
        selected.push(project.id);
        remainingBudget -= project.investment;
      }
    }

    return selected;
  }, [projectMetrics, budget, rationingType]);

  // Calculate total metrics for selected projects
  const selectedMetrics = useMemo(() => {
    const selected = projectMetrics.filter(p => selectedProjects.includes(p.id));
    const totalInvestment = selected.reduce((sum, p) => sum + p.investment, 0);
    const totalNPV = selected.reduce((sum, p) => sum + p.npv, 0);
    const avgPI = totalInvestment > 0 ? 
      selected.reduce((sum, p) => sum + p.pi * p.investment, 0) / totalInvestment : 0;
    
    return {
      count: selected.length,
      totalInvestment,
      totalNPV,
      avgPI,
      budgetUtilization: (totalInvestment / budget) * 100
    };
  }, [selectedProjects, projectMetrics, budget]);

  // Data for repeating projects comparison
  const repeatingProjectsData = useMemo(() => {
    const repeatableProjects = projectMetrics.filter(p => p.repeatable);
    const periods = 21; // LCM of typical project lives
    
    return repeatableProjects.map(project => {
      const data = [];
      let cumulativeNPV = 0;
      
      for (let year = 0; year <= periods; year++) {
        if (year % project.life === 0 && year > 0) {
          // Project repeats
          const repeatNPV = project.npv / Math.pow(1 + effectiveRate / 100, year);
          cumulativeNPV += repeatNPV;
        }
        
        data.push({
          year,
          [project.name]: cumulativeNPV
        });
      }
      
      return { project, data };
    });
  }, [projectMetrics, effectiveRate]);

  const formatCurrency = (value: number) => {
    const absValue = Math.abs(value);
    if (absValue >= 1000000) {
      return `${(value / 1000000).toFixed(2)}M kr`;
    }
    return `${(value / 1000).toFixed(2)}k kr`;
  };

  const formatPercent = (value: number) => {
    return `${value.toFixed(2)}%`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-xl font-bold text-primary">
          Kapitalrasjonering og prosjektsammenligning
        </h1>
        <p className="text-sm text-muted-foreground">
          Når kapitalen ikke strekker til alle gode prosjekter
        </p>
      </div>

      {/* Rationing Type Selection */}
      <Card className="border-primary">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            Type kapitalrasjonering
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3">
            <button
              onClick={() => setRationingType('none')}
              className={`p-4 rounded-lg border transition-all ${
                rationingType === 'none'
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Unlock className="w-6 h-6 mx-auto mb-2 text-green-600" />
              <h5 className="font-semibold text-sm">Ingen rasjonering</h5>
              <p className="text-xs text-muted-foreground mt-1">
                Perfekt kapitalmarked - ta alle NPV &gt; 0
              </p>
            </button>
            
            <button
              onClick={() => setRationingType('soft')}
              className={`p-4 rounded-lg border transition-all ${
                rationingType === 'soft'
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Lock className="w-6 h-6 mx-auto mb-2 text-amber-600" />
              <h5 className="font-semibold text-sm">Soft rasjonering</h5>
              <p className="text-xs text-muted-foreground mt-1">
                Selvpålagt - kontrollhensyn, gjeldsaversjon
              </p>
            </button>
            
            <button
              onClick={() => setRationingType('hard')}
              className={`p-4 rounded-lg border transition-all ${
                rationingType === 'hard'
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Lock className="w-6 h-6 mx-auto mb-2 text-red-600" />
              <h5 className="font-semibold text-sm">Hard rasjonering</h5>
              <p className="text-xs text-muted-foreground mt-1">
                Markedspålagt - ingen vil finansiere
              </p>
            </button>
          </div>
          
          {rationingType !== 'none' && (
            <div className="mt-4">
              <label className="text-xs font-medium">
                Tilgjengelig kapital: {formatCurrency(budget)}
              </label>
              <Slider
                value={[budget / 10000]}
                onValueChange={(value) => setBudget(value[0] * 10000)}
                min={100}
                max={1000}
                step={10}
                className="w-full mt-2"
              />
            </div>
          )}
          
          <div className="mt-4 p-3 bg-amber-50 rounded-lg">
            <p className="text-xs">
              {rationingType === 'none' && (
                <span><strong>Ingen rasjonering:</strong> Gjennomfør alle prosjekter med positiv NPV. 
                Avkastningskravet reflekterer alternativkostnaden.</span>
              )}
              {rationingType === 'soft' && (
                <span><strong>Soft rasjonering:</strong> Ledelsen begrenser kapital av strategiske grunner. 
                Prioriter prosjekter med høyest NPV per investert krone (PI).</span>
              )}
              {rationingType === 'hard' && (
                <span><strong>Hard rasjonering:</strong> Markedet nekter finansiering. 
                Avkastningskravet undervurderer sann alternativkostnad.</span>
              )}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Discount Rate Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            Avkastningskrav - nominelt vs. reelt
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium">
                  Nominelt avkastningskrav: {formatPercent(discountRate)}
                </label>
                <Slider
                  value={[discountRate]}
                  onValueChange={(value) => setDiscountRate(value[0])}
                  min={0}
                  max={25}
                  step={0.5}
                  className="w-full mt-2"
                />
              </div>
              <div>
                <label className="text-xs font-medium">
                  Forventet inflasjon: {formatPercent(inflationRate)}
                </label>
                <Slider
                  value={[inflationRate]}
                  onValueChange={(value) => setInflationRate(value[0])}
                  min={0}
                  max={10}
                  step={0.5}
                  className="w-full mt-2"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                size="sm"
                variant={useRealRate ? 'default' : 'outline'}
                onClick={() => setUseRealRate(!useRealRate)}
              >
                {useRealRate ? 'Bruker reelt avkastningskrav' : 'Bruker nominelt avkastningskrav'}
              </Button>
              <span className="text-sm font-medium">
                Effektivt avkastningskrav: {formatPercent(effectiveRate)}
              </span>
            </div>
            
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-xs">
                <strong>Nominelt vs. reelt:</strong> Ved nominelle kontantstrømmer, bruk nominelt avkastningskrav. 
                Ved reelle (inflasjonsjusterte) kontantstrømmer, bruk reelt avkastningskrav. 
                Fisher-ligning: (1 + nom.) ≈ (1 + real) × (1 + infl.)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Prosjektanalyse</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="metrics" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="metrics">Prosjektmål</TabsTrigger>
              <TabsTrigger value="selection">Optimal seleksjon</TabsTrigger>
              <TabsTrigger value="repeating">Gjentakende prosjekter</TabsTrigger>
            </TabsList>
            
            <TabsContent value="metrics" className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Prosjekt</th>
                      <th className="text-right px-3">Investering</th>
                      <th className="text-right px-3">NPV</th>
                      <th className="text-right px-3">PI</th>
                      <th className="text-right px-3">IRR</th>
                      <th className="text-right px-3">Levetid</th>
                      {showEAA && <th className="text-right px-3">EAA</th>}
                      <th className="text-center px-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectMetrics.map(project => (
                      <tr key={project.id} className="border-b">
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-3 h-3 rounded-full" 
                              style={{ backgroundColor: project.color }}
                            />
                            <span className="font-medium">{project.name}</span>
                          </div>
                        </td>
                        <td className="text-right px-3 font-mono">
                          {formatCurrency(project.investment)}
                        </td>
                        <td className={`text-right px-3 font-mono ${
                          project.npv > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {formatCurrency(project.npv)}
                        </td>
                        <td className="text-right px-3 font-mono">
                          {project.pi.toFixed(2)}
                        </td>
                        <td className="text-right px-3 font-mono">
                          {formatPercent(project.irr)}
                        </td>
                        <td className="text-right px-3">
                          {project.life} år
                        </td>
                        {showEAA && (
                          <td className="text-right px-3 font-mono">
                            {formatCurrency(project.eaa)}
                          </td>
                        )}
                        <td className="text-center px-3">
                          <button
                            onClick={() => {
                              if (selectedProjects.includes(project.id)) {
                                setSelectedProjects(selectedProjects.filter(id => id !== project.id));
                              } else {
                                setSelectedProjects([...selectedProjects, project.id]);
                              }
                            }}
                            disabled={
                              rationingType !== 'none' &&
                              !selectedProjects.includes(project.id) &&
                              selectedMetrics.totalInvestment + project.investment > budget
                            }
                          >
                            {selectedProjects.includes(project.id) ? (
                              <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                            ) : (
                              <XCircle className="w-4 h-4 text-gray-400 mx-auto" />
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex items-center justify-between">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setShowEAA(!showEAA)}
                >
                  {showEAA ? 'Skjul' : 'Vis'} EAA (for sammenligning av ulik levetid)
                </Button>
                
                <Button
                  size="sm"
                  onClick={() => setSelectedProjects(optimalSelection)}
                >
                  Velg optimalt
                </Button>
              </div>
              
              {rationingType !== 'none' && (
                <div className="grid md:grid-cols-4 gap-3 text-center">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-xs font-semibold">Valgte prosjekter</p>
                    <p className="text-lg font-bold">{selectedMetrics.count}</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-xs font-semibold">Total NPV</p>
                    <p className="text-lg font-bold text-green-600">
                      {formatCurrency(selectedMetrics.totalNPV)}
                    </p>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <p className="text-xs font-semibold">Kapitalutnyttelse</p>
                    <p className="text-lg font-bold text-amber-600">
                      {selectedMetrics.budgetUtilization.toFixed(1)}%
                    </p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-xs font-semibold">Gj.snitt PI</p>
                    <p className="text-lg font-bold text-purple-600">
                      {selectedMetrics.avgPI.toFixed(2)}
                    </p>
                  </div>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="selection" className="space-y-4">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={projectMetrics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="id" 
                      tick={{ fontSize: 10 }}
                    />
                    <YAxis 
                      yAxisId="left"
                      tick={{ fontSize: 10 }}
                      tickFormatter={(value) => formatCurrency(value)}
                    />
                    <YAxis 
                      yAxisId="right"
                      orientation="right"
                      tick={{ fontSize: 10 }}
                    />
                    <Tooltip 
                      formatter={(value: number, name: string) => {
                        if (name === 'PI') return value.toFixed(2);
                        return formatCurrency(value);
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: '10px' }} />
                    
                    {rationingType !== 'none' && (
                      <ReferenceLine 
                        yAxisId="left"
                        y={budget} 
                        stroke="#666" 
                        strokeDasharray="3 3" 
                        label="Budsjett"
                      />
                    )}
                    
                    <Bar yAxisId="left" dataKey="investment" name="Investering" fill="#94a3b8">
                      {projectMetrics.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={optimalSelection.includes(entry.id) ? '#3b82f6' : '#94a3b8'} 
                        />
                      ))}
                    </Bar>
                    <Bar yAxisId="left" dataKey="npv" name="NPV" fill="#10b981">
                      {projectMetrics.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.npv > 0 ? '#10b981' : '#ef4444'} 
                        />
                      ))}
                    </Bar>
                    <Line yAxisId="right" type="monotone" dataKey="pi" name="PI" stroke="#f59e0b" strokeWidth={2} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              
              <div className="bg-amber-50 p-3 rounded-lg">
                <p className="text-xs">
                  <strong>Optimal seleksjon under rasjonering:</strong> Ranger prosjekter etter PI (NPV per investert krone), 
                  ikke etter total NPV. Ta prosjekter i rekkefølge til budsjettet er brukt opp. 
                  Blå søyler viser optimalt valgte prosjekter.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="repeating" className="space-y-4">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="year"
                      domain={[0, 21]}
                      ticks={[0, 3, 6, 9, 12, 15, 18, 21]}
                      label={{ value: 'År', position: 'insideBottom', offset: -5, style: { fontSize: 10 } }}
                      tick={{ fontSize: 10 }}
                    />
                    <YAxis 
                      tick={{ fontSize: 10 }}
                      tickFormatter={(value) => formatCurrency(value)}
                    />
                    <Tooltip 
                      formatter={(value: number) => formatCurrency(value)}
                      labelFormatter={(label) => `År ${label}`}
                    />
                    <Legend wrapperStyle={{ fontSize: '10px' }} />
                    
                    {repeatingProjectsData.map(({ project, data }) => (
                      <Line
                        key={project.id}
                        type="stepAfter"
                        data={data}
                        dataKey={project.name}
                        stroke={project.color}
                        strokeWidth={2}
                        dot={false}
                      />
                    ))}
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Gjentakende prosjekt</th>
                      <th className="text-right px-3">Levetid</th>
                      <th className="text-right px-3">NPV per syklus</th>
                      <th className="text-right px-3">EAA</th>
                      <th className="text-center px-3">Rangering</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectMetrics
                      .filter(p => p.repeatable)
                      .sort((a, b) => b.eaa - a.eaa)
                      .map((project, index) => (
                        <tr key={project.id} className="border-b">
                          <td className="py-3">
                            <div className="flex items-center gap-2">
                              <div 
                                className="w-3 h-3 rounded-full" 
                                style={{ backgroundColor: project.color }}
                              />
                              <span className="font-medium">{project.name}</span>
                            </div>
                          </td>
                          <td className="text-right px-3">
                            {project.life} år
                          </td>
                          <td className="text-right px-3 font-mono">
                            {formatCurrency(project.npv)}
                          </td>
                          <td className="text-right px-3 font-mono font-semibold">
                            {formatCurrency(project.eaa)}
                          </td>
                          <td className="text-center px-3">
                            #{index + 1}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-xs">
                  <strong>Ekvivalent årlig annuitet (EAA):</strong> Når prosjekter har ulik levetid og kan gjentas, 
                  sammenlign EAA istedenfor NPV. EAA = NPV / annuitetsfaktor. 
                  Prosjektet med høyest EAA gir best avkastning over tid.
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
            <Info className="w-4 h-4" />
            Viktige innsikter om kapitalrasjonering
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <Target className="w-4 h-4 text-amber-600 mt-0.5" />
              <div>
                <p className="font-semibold">NPV alene holder ikke</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Under rasjonering må du se på NPV per investert krone (PI). 
                  Et stort prosjekt med høy NPV kan være dårligere enn flere små med høyere samlet NPV.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <DollarSign className="w-4 h-4 text-amber-600 mt-0.5" />
              <div>
                <p className="font-semibold">Avkastningskravet kan være feil</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Ved hard rasjonering reflekterer ikke avkastningskravet den sanne alternativkostnaden 
                  - avkastningen på prosjekter du må si nei til.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <RefreshCw className="w-4 h-4 text-amber-600 mt-0.5" />
              <div>
                <p className="font-semibold">Levetid påvirker valget</p>
                <p className="text-xs text-muted-foreground mt-1">
                  For gjentakende prosjekter med ulik levetid, bruk EAA for rettferdig sammenligning. 
                  NPV favoriserer lange prosjekter selv om korte kan være bedre over tid.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practical Tips */}
      <Card className="bg-primary/5 border-primary">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">🎯 Praktiske retningslinjer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p className="font-semibold">Ved kapitalrasjonering:</p>
            <p>• Ranger alltid etter PI (lønnsomhetsindeks), ikke NPV</p>
            <p>• Sjekk om prosjekter er delbare eller udelbare</p>
            <p>• Vurder om rasjoneringen er midlertidig eller permanent</p>
            <p>• Se etter måter å øke budsjettet på (er rasjoneringen virkelig nødvendig?)</p>
            <p className="font-semibold mt-3">For prosjekter med ulik levetid:</p>
            <p>• Bruk EAA hvis prosjektene kan gjentas</p>
            <p>• Bruk NPV hvis prosjektene er engangs</p>
            <p>• Vurder realopsjoner ved usikkerhet om gjentakelse</p>
            <p className="font-semibold mt-3">Nominelt vs. reelt:</p>
            <p>• Match alltid kontantstrømmer og avkastningskrav</p>
            <p>• Ved usikkerhet, bruk nominelle tall (enklere)</p>
            <p>• Husk: Inflasjon påvirker både inntekter og kostnader</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CapitalRationing;