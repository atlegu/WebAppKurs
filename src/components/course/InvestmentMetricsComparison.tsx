import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { 
  Calculator, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2,
  XCircle,
  Info,
  Calendar,
  Percent,
  DollarSign,
  BarChart3,
  Clock,
  Target
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
  Area,
  ComposedChart,
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CashFlow {
  year: number;
  amount: number;
}

interface Project {
  id: string;
  name: string;
  cashFlows: CashFlow[];
  color: string;
}

const InvestmentMetricsComparison = () => {
  const [discountRate, setDiscountRate] = useState(10);
  const [selectedProjects, setSelectedProjects] = useState<string[]>(['A', 'B']);
  const [showConflicts, setShowConflicts] = useState(false);
  
  // Project definitions
  const projects: Record<string, Project> = {
    A: {
      id: 'A',
      name: 'Prosjekt A - Rask tilbakebetaling',
      cashFlows: [
        { year: 0, amount: -1000000 },
        { year: 1, amount: 600000 },
        { year: 2, amount: 500000 },
        { year: 3, amount: 200000 },
        { year: 4, amount: 100000 },
        { year: 5, amount: 50000 }
      ],
      color: '#8884d8'
    },
    B: {
      id: 'B', 
      name: 'Prosjekt B - Langsom start',
      cashFlows: [
        { year: 0, amount: -1000000 },
        { year: 1, amount: 100000 },
        { year: 2, amount: 200000 },
        { year: 3, amount: 400000 },
        { year: 4, amount: 600000 },
        { year: 5, amount: 700000 }
      ],
      color: '#82ca9d'
    },
    C: {
      id: 'C',
      name: 'Prosjekt C - Stor investering',
      cashFlows: [
        { year: 0, amount: -2000000 },
        { year: 1, amount: 600000 },
        { year: 2, amount: 700000 },
        { year: 3, amount: 800000 },
        { year: 4, amount: 900000 },
        { year: 5, amount: 1000000 }
      ],
      color: '#ffc658'
    }
  };

  // Calculate NPV
  const calculateNPV = (cashFlows: CashFlow[], rate: number) => {
    return cashFlows.reduce((npv, cf) => {
      const pv = cf.amount / Math.pow(1 + rate / 100, cf.year);
      return npv + pv;
    }, 0);
  };

  // Calculate IRR using bisection method
  const calculateIRR = (cashFlows: CashFlow[]) => {
    let low = -0.99;
    let high = 10;
    let mid;
    
    for (let i = 0; i < 100; i++) {
      mid = (low + high) / 2;
      const npv = calculateNPV(cashFlows, mid * 100);
      
      if (Math.abs(npv) < 1) return mid * 100;
      
      if (npv > 0) low = mid;
      else high = mid;
    }
    
    return mid! * 100;
  };

  // Calculate Payback Period
  const calculatePayback = (cashFlows: CashFlow[]) => {
    let cumulative = 0;
    for (let i = 0; i < cashFlows.length; i++) {
      cumulative += cashFlows[i].amount;
      if (cumulative >= 0) {
        if (i === 0) return 0;
        // Interpolate for partial year
        const previousCumulative = cumulative - cashFlows[i].amount;
        const fraction = -previousCumulative / cashFlows[i].amount;
        return i - 1 + fraction;
      }
    }
    return null; // Never pays back
  };

  // Calculate Discounted Payback
  const calculateDiscountedPayback = (cashFlows: CashFlow[], rate: number) => {
    let cumulative = 0;
    for (let i = 0; i < cashFlows.length; i++) {
      const pv = cashFlows[i].amount / Math.pow(1 + rate / 100, i);
      cumulative += pv;
      if (cumulative >= 0) {
        if (i === 0) return 0;
        // Interpolate for partial year
        const previousCumulative = cumulative - pv;
        const fraction = -previousCumulative / pv;
        return i - 1 + fraction;
      }
    }
    return null; // Never pays back
  };

  // Calculate Profitability Index
  const calculatePI = (cashFlows: CashFlow[], rate: number) => {
    const initialInvestment = -cashFlows[0].amount;
    const pvFutureCashFlows = cashFlows.slice(1).reduce((sum, cf) => {
      return sum + cf.amount / Math.pow(1 + rate / 100, cf.year);
    }, 0);
    return pvFutureCashFlows / initialInvestment;
  };

  // Calculate metrics for selected projects
  const projectMetrics = useMemo(() => {
    return selectedProjects.map(projectId => {
      const project = projects[projectId];
      const npv = calculateNPV(project.cashFlows, discountRate);
      const irr = calculateIRR(project.cashFlows);
      const payback = calculatePayback(project.cashFlows);
      const discountedPayback = calculateDiscountedPayback(project.cashFlows, discountRate);
      const pi = calculatePI(project.cashFlows, discountRate);
      
      return {
        ...project,
        npv,
        irr,
        payback,
        discountedPayback,
        pi
      };
    });
  }, [selectedProjects, discountRate]);

  // Generate cumulative cash flow data
  const cumulativeData = useMemo(() => {
    const years = [0, 1, 2, 3, 4, 5];
    return years.map(year => {
      const data: any = { year };
      
      selectedProjects.forEach(projectId => {
        const project = projects[projectId];
        let cumulative = 0;
        let discountedCumulative = 0;
        
        for (let i = 0; i <= year; i++) {
          if (i < project.cashFlows.length) {
            cumulative += project.cashFlows[i].amount;
            discountedCumulative += project.cashFlows[i].amount / Math.pow(1 + discountRate / 100, i);
          }
        }
        
        data[`${projectId}_cumulative`] = cumulative;
        data[`${projectId}_discounted`] = discountedCumulative;
      });
      
      return data;
    });
  }, [selectedProjects, discountRate]);

  const formatCurrency = (value: number) => {
    const absValue = Math.abs(value);
    if (absValue >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M kr`;
    }
    return `${(value / 1000).toFixed(0)}k kr`;
  };

  const formatPercent = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const formatYears = (value: number | null) => {
    if (value === null) return 'Aldri';
    return `${value.toFixed(1)} år`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-xl font-bold text-primary">
          Investeringsmål - Sammenligning
        </h1>
        <p className="text-sm text-muted-foreground">
          Se hvordan ulike mål kan gi forskjellige konklusjoner
        </p>
      </div>

      {/* Project Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Velg prosjekter å sammenligne</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3">
            {Object.values(projects).map(project => (
              <button
                key={project.id}
                onClick={() => {
                  if (selectedProjects.includes(project.id)) {
                    setSelectedProjects(selectedProjects.filter(id => id !== project.id));
                  } else {
                    setSelectedProjects([...selectedProjects, project.id]);
                  }
                }}
                className={`p-3 rounded-lg border transition-all ${
                  selectedProjects.includes(project.id)
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <h5 className="font-semibold text-sm">{project.name}</h5>
                <p className="text-xs text-muted-foreground mt-1">
                  Investering: {formatCurrency(-project.cashFlows[0].amount)}
                </p>
              </button>
            ))}
          </div>
          
          <div className="mt-4">
            <label className="text-xs font-medium">
              Avkastningskrav: {formatPercent(discountRate)}
            </label>
            <Slider
              value={[discountRate]}
              onValueChange={(value) => setDiscountRate(value[0])}
              min={0}
              max={30}
              step={0.5}
              className="w-full mt-2"
            />
          </div>
        </CardContent>
      </Card>

      {/* Metrics Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Sammenligning av investeringsmål</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Prosjekt</th>
                  <th className="text-right px-3">NPV</th>
                  <th className="text-right px-3">IRR</th>
                  <th className="text-right px-3">Tilbakebetaling</th>
                  <th className="text-right px-3">Disk. tilbakebetaling</th>
                  <th className="text-right px-3">PI</th>
                  <th className="text-center px-3">Rangering</th>
                </tr>
              </thead>
              <tbody>
                {projectMetrics.map((project, index) => (
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
                    <td className={`text-right px-3 font-mono ${
                      project.npv > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {formatCurrency(project.npv)}
                    </td>
                    <td className="text-right px-3 font-mono">
                      {formatPercent(project.irr)}
                    </td>
                    <td className="text-right px-3 font-mono">
                      {formatYears(project.payback)}
                    </td>
                    <td className="text-right px-3 font-mono">
                      {formatYears(project.discountedPayback)}
                    </td>
                    <td className="text-right px-3 font-mono">
                      {project.pi.toFixed(2)}
                    </td>
                    <td className="text-center px-3">
                      {project.npv > 0 ? (
                        <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-600 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            className="mt-4"
            onClick={() => setShowConflicts(!showConflicts)}
          >
            <AlertTriangle className="w-4 h-4 mr-2" />
            {showConflicts ? 'Skjul' : 'Vis'} målkonflikter
          </Button>
          
          {showConflicts && selectedProjects.length > 1 && (
            <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-sm mb-2">Målkonflikter oppdaget!</h4>
              <div className="space-y-2 text-xs">
                {projectMetrics.length === 2 && (
                  <>
                    <p>
                      <strong>NPV:</strong> {projectMetrics.sort((a, b) => b.npv - a.npv)[0].name} er best
                    </p>
                    <p>
                      <strong>IRR:</strong> {projectMetrics.sort((a, b) => b.irr - a.irr)[0].name} er best
                    </p>
                    <p>
                      <strong>Tilbakebetaling:</strong> {projectMetrics.sort((a, b) => (a.payback || 999) - (b.payback || 999))[0].name} er best
                    </p>
                    <p className="mt-2 font-semibold">
                      Ved konflikt: Følg alltid NPV! Det er det eneste målet som konsistent maksimerer verdiskapningen.
                    </p>
                  </>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Visualizations */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Grafisk sammenligning</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="cumulative" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="cumulative">Kumulative kontantstrømmer</TabsTrigger>
              <TabsTrigger value="metrics">Målsammenligning</TabsTrigger>
              <TabsTrigger value="sensitivity">Følsomhetsanalyse</TabsTrigger>
            </TabsList>
            
            <TabsContent value="cumulative" className="space-y-4">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={cumulativeData} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="year" 
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
                    
                    <ReferenceLine y={0} stroke="#666" strokeDasharray="3 3" />
                    
                    {selectedProjects.map(projectId => (
                      <React.Fragment key={projectId}>
                        <Line
                          type="monotone"
                          dataKey={`${projectId}_cumulative`}
                          name={`${projects[projectId].name} (nominal)`}
                          stroke={projects[projectId].color}
                          strokeWidth={2}
                          dot={{ r: 3 }}
                        />
                        <Line
                          type="monotone"
                          dataKey={`${projectId}_discounted`}
                          name={`${projects[projectId].name} (diskontert)`}
                          stroke={projects[projectId].color}
                          strokeWidth={2}
                          strokeDasharray="5 5"
                          dot={{ r: 3 }}
                        />
                      </React.Fragment>
                    ))}
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs">
                  <strong>Forklaring:</strong> Heltrukne linjer viser nominelle verdier (tilbakebetaling), 
                  stiplede linjer viser diskonterte verdier (diskontert tilbakebetaling). 
                  Punktet hvor linjen krysser nullinjen er tilbakebetalingstiden.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="metrics" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="h-48">
                  <h5 className="text-sm font-semibold mb-2">NPV vs IRR</h5>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={projectMetrics}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="id" tick={{ fontSize: 10 }} />
                      <YAxis yAxisId="left" tick={{ fontSize: 10 }} />
                      <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 10 }} />
                      <Tooltip />
                      
                      <Bar yAxisId="left" dataKey="npv" fill="#8884d8" name="NPV (kr)">
                        {projectMetrics.map((entry, index) => (
                          <Bar key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="h-48">
                  <h5 className="text-sm font-semibold mb-2">Tilbakebetalingstid</h5>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={projectMetrics}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="id" tick={{ fontSize: 10 }} />
                      <YAxis tick={{ fontSize: 10 }} />
                      <Tooltip formatter={(value: any) => formatYears(value)} />
                      
                      <Bar dataKey="payback" fill="#82ca9d" name="Tilbakebetaling" />
                      <Bar dataKey="discountedPayback" fill="#ffc658" name="Disk. tilbakebetaling" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="sensitivity" className="space-y-4">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="rate"
                      domain={[0, 30]}
                      type="number"
                      label={{ value: 'Avkastningskrav (%)', position: 'insideBottom', offset: -5, style: { fontSize: 10 } }}
                      tick={{ fontSize: 10 }}
                    />
                    <YAxis 
                      tick={{ fontSize: 10 }}
                      tickFormatter={(value) => formatCurrency(value)}
                    />
                    <Tooltip 
                      formatter={(value: number) => formatCurrency(value)}
                      labelFormatter={(label) => `${label}%`}
                    />
                    <Legend wrapperStyle={{ fontSize: '10px' }} />
                    
                    <ReferenceLine y={0} stroke="#666" strokeDasharray="3 3" />
                    
                    {selectedProjects.map(projectId => {
                      const project = projects[projectId];
                      const data = Array.from({ length: 31 }, (_, i) => ({
                        rate: i,
                        npv: calculateNPV(project.cashFlows, i)
                      }));
                      
                      return (
                        <Line
                          key={projectId}
                          type="monotone"
                          data={data}
                          dataKey="npv"
                          name={project.name}
                          stroke={project.color}
                          strokeWidth={2}
                          dot={false}
                        />
                      );
                    })}
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-xs">
                  <strong>NPV-profiler:</strong> Viser hvordan NPV endres med avkastningskravet. 
                  Krysningspunktet med x-aksen er IRR. Merk at prosjektenes rangering kan 
                  endres ved forskjellige avkastningskrav!
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Method Explanations */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Fordeler og ulemper med hver metode</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-green-600 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">Netto nåverdi (NPV)</h4>
                  <div className="mt-2 grid md:grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="font-medium text-green-600">✓ Fordeler:</p>
                      <ul className="mt-1 space-y-0.5 text-muted-foreground">
                        <li>• Gir svar i kroner</li>
                        <li>• Tar hensyn til alle kontantstrømmer</li>
                        <li>• Additivt (kan summeres)</li>
                        <li>• Konsistent beslutningsregel</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-red-600">✗ Ulemper:</p>
                      <ul className="mt-1 space-y-0.5 text-muted-foreground">
                        <li>• Favoriserer store prosjekter</li>
                        <li>• Krever estimat av avkastningskrav</li>
                        <li>• Sier ikke noe om relativ lønnsomhet</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Percent className="w-5 h-5 text-blue-600 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">Internrente (IRR)</h4>
                  <div className="mt-2 grid md:grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="font-medium text-green-600">✓ Fordeler:</p>
                      <ul className="mt-1 space-y-0.5 text-muted-foreground">
                        <li>• Gir svar i prosent</li>
                        <li>• Lett å forstå</li>
                        <li>• Trenger ikke avkastningskrav</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-red-600">✗ Ulemper:</p>
                      <ul className="mt-1 space-y-0.5 text-muted-foreground">
                        <li>• Kan gi flere svar</li>
                        <li>• Antar reinvestering til IRR</li>
                        <li>• Kan rangere prosjekter feil</li>
                        <li>• Ignorerer prosjektstørrelse</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-600 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">Tilbakebetalingstid</h4>
                  <div className="mt-2 grid md:grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="font-medium text-green-600">✓ Fordeler:</p>
                      <ul className="mt-1 space-y-0.5 text-muted-foreground">
                        <li>• Enkelt å beregne</li>
                        <li>• Fokus på likviditet</li>
                        <li>• Lett å forstå</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-red-600">✗ Ulemper:</p>
                      <ul className="mt-1 space-y-0.5 text-muted-foreground">
                        <li>• Ignorerer tidsverdien (hvis ikke diskontert)</li>
                        <li>• Ignorerer kontantstrømmer etter cut-off</li>
                        <li>• Vilkårlig cut-off periode</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="bg-primary/5 border-primary">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">🎯 Viktige lærdommer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <p>NPV er det overordnede målet - bruk alltid NPV ved konflikt</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <p>IRR kan være nyttig, men pass på fallgruvene</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <p>Tilbakebetalingstid er best som tilleggsinformasjon om likviditet</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <p>Bruk flere mål, men la NPV ha siste ord</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvestmentMetricsComparison;