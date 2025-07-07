import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Calculator, Calendar, TrendingUp, AlertCircle } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
} from 'recharts';

const EffectiveRateCalculator = () => {
  const [nominalRate, setNominalRate] = useState(10);
  const [compoundingFrequency, setCompoundingFrequency] = useState('semiannually');
  const [showComparison, setShowComparison] = useState(false);
  const [principal, setPrincipal] = useState(10000);
  
  // Compounding frequencies
  const frequencies = {
    annually: { name: 'Årlig', periods: 1 },
    semiannually: { name: 'Halvårlig', periods: 2 },
    quarterly: { name: 'Kvartalsvis', periods: 4 },
    monthly: { name: 'Månedlig', periods: 12 },
    weekly: { name: 'Ukentlig', periods: 52 },
    daily: { name: 'Daglig', periods: 365 },
    continuous: { name: 'Kontinuerlig', periods: Infinity }
  };
  
  // Calculate effective annual rate
  const effectiveRate = useMemo(() => {
    const n = frequencies[compoundingFrequency].periods;
    if (n === Infinity) {
      // Continuous compounding: e^r - 1
      return Math.exp(nominalRate / 100) - 1;
    }
    // Discrete compounding: (1 + r/n)^n - 1
    return Math.pow(1 + nominalRate / 100 / n, n) - 1;
  }, [nominalRate, compoundingFrequency]);
  
  // Calculate period rate
  const periodRate = useMemo(() => {
    const n = frequencies[compoundingFrequency].periods;
    if (n === Infinity) return nominalRate / 100;
    return nominalRate / 100 / n;
  }, [nominalRate, compoundingFrequency]);
  
  // Generate growth data
  const growthData = useMemo(() => {
    const data = [];
    const n = frequencies[compoundingFrequency].periods;
    const periodsToShow = Math.min(n === Infinity ? 12 : n, 12);
    
    for (let period = 0; period <= periodsToShow; period++) {
      let value;
      if (n === Infinity) {
        // Continuous compounding
        value = principal * Math.exp(nominalRate / 100 * (period / 12));
      } else {
        // Discrete compounding
        const actualPeriods = Math.round(period * n / periodsToShow);
        value = principal * Math.pow(1 + nominalRate / 100 / n, actualPeriods);
      }
      
      data.push({
        period: period,
        periodLabel: n === 1 ? `År ${period}` : `Periode ${period}`,
        value: value,
        simpleInterest: principal * (1 + nominalRate / 100 * (period / periodsToShow)),
      });
    }
    
    return data;
  }, [principal, nominalRate, compoundingFrequency]);
  
  // Comparison data
  const comparisonData = useMemo(() => {
    return Object.entries(frequencies).map(([key, freq]) => {
      let ear;
      if (freq.periods === Infinity) {
        ear = Math.exp(nominalRate / 100) - 1;
      } else {
        ear = Math.pow(1 + nominalRate / 100 / freq.periods, freq.periods) - 1;
      }
      
      return {
        frequency: freq.name,
        effectiveRate: ear * 100,
        futureValue: principal * (1 + ear),
      };
    });
  }, [nominalRate, principal]);
  
  const formatCurrency = (value: number) => {
    return `${value.toLocaleString('no-NO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} kr`;
  };
  
  const formatPercent = (value: number, decimals = 2) => {
    return `${value.toFixed(2)}%`;
  };
  
  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border text-xs">
          <p className="font-semibold mb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {formatCurrency(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-xl font-bold text-primary">
          Nominell vs. Effektiv Rente
        </h1>
        <p className="text-sm text-muted-foreground">
          Utforsk hvordan rentesammensetning påvirker den faktiske avkastningen
        </p>
      </div>

      {/* Controls */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Juster parametrene</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-medium">
                Nominell årlig rente: {formatPercent(nominalRate)}
              </label>
              <Slider
                value={[nominalRate]}
                onValueChange={(value) => setNominalRate(value[0])}
                min={0}
                max={30}
                step={0.5}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-medium">
                Rentesammensetning
              </label>
              <Select value={compoundingFrequency} onValueChange={setCompoundingFrequency}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(frequencies).map(([key, freq]) => (
                    <SelectItem key={key} value={key}>
                      {freq.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-medium">
                Startbeløp: {formatCurrency(principal)}
              </label>
              <Slider
                value={[principal]}
                onValueChange={(value) => setPrincipal(value[0])}
                min={1000}
                max={100000}
                step={1000}
                className="w-full"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="border-primary">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Beregninger</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">Nominell årlig rente</p>
                <p className="text-lg font-bold">{formatPercent(nominalRate)}</p>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">Effektiv årlig rente (EAR)</p>
                <p className="text-lg font-bold text-blue-700">
                  {formatPercent(effectiveRate * 100)}
                </p>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-3 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Perioderente</p>
              <p className="text-base font-semibold">
                {formatPercent(periodRate * 100, 4)} per {frequencies[compoundingFrequency].name.toLowerCase()}
              </p>
              {frequencies[compoundingFrequency].periods !== Infinity && (
                <p className="text-xs text-gray-600 mt-1">
                  = {formatPercent(nominalRate)} / {frequencies[compoundingFrequency].periods} perioder
                </p>
              )}
            </div>
            
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-xs text-muted-foreground">Verdi etter 1 år</p>
              <p className="text-lg font-bold text-green-700">
                {formatCurrency(principal * (1 + effectiveRate))}
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Ekstra opptjent: {formatCurrency(principal * (effectiveRate - nominalRate / 100))}
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Formel</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {compoundingFrequency === 'continuous' ? (
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-xs font-semibold mb-2">Kontinuerlig rentesammensetning:</p>
                <p className="text-sm font-mono text-center mb-2">
                  EAR = e^r - 1
                </p>
                <p className="text-xs text-gray-600">
                  hvor r = nominell rente ({formatPercent(nominalRate)})
                </p>
                <p className="text-sm font-mono text-center mt-2">
                  EAR = e^{nominalRate/100} - 1 = {formatPercent(effectiveRate * 100)}
                </p>
              </div>
            ) : (
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-xs font-semibold mb-2">Diskret rentesammensetning:</p>
                <p className="text-sm font-mono text-center mb-2">
                  EAR = (1 + r/n)^n - 1
                </p>
                <p className="text-xs text-gray-600">
                  hvor r = nominell rente ({formatPercent(nominalRate)})<br/>
                  n = antall perioder per år ({frequencies[compoundingFrequency].periods})
                </p>
                <p className="text-sm font-mono text-center mt-2">
                  EAR = (1 + {(nominalRate/100).toFixed(3)}/{frequencies[compoundingFrequency].periods})^{frequencies[compoundingFrequency].periods} - 1
                </p>
                <p className="text-sm font-mono text-center">
                  = {formatPercent(effectiveRate * 100)}
                </p>
              </div>
            )}
            
            <div className="flex items-start gap-2 bg-amber-50 p-3 rounded-lg">
              <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5" />
              <div className="text-xs">
                <p className="font-semibold mb-1">Viktig å huske:</p>
                <p>Jo oftere renten legges til (compounds), desto høyere blir den effektive renten!</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Growth visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Vekst over tid</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="periodLabel" 
                  tick={{ fontSize: 10 }}
                />
                <YAxis 
                  tick={{ fontSize: 10 }}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '10px' }} />
                
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  name="Med rentesammensetning" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="simpleInterest" 
                  name="Enkel rente (uten sammensetning)" 
                  stroke="#EF4444" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center justify-between">
            <span>Sammenligning av renteperioder</span>
            <Button
              size="sm"
              variant={showComparison ? "default" : "outline"}
              onClick={() => setShowComparison(!showComparison)}
            >
              {showComparison ? "Skjul" : "Vis"} sammenligning
            </Button>
          </CardTitle>
        </CardHeader>
        {showComparison && (
          <CardContent>
            <div className="h-64 w-full mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="frequency" 
                    tick={{ fontSize: 10 }}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis 
                    tick={{ fontSize: 10 }}
                    tickFormatter={(value) => `${value.toFixed(1)}%`}
                  />
                  <Tooltip 
                    formatter={(value: number) => formatPercent(value)}
                  />
                  <Legend wrapperStyle={{ fontSize: '10px' }} />
                  
                  <Bar 
                    dataKey="effectiveRate" 
                    name="Effektiv årlig rente" 
                    fill="#3B82F6"
                  />
                  
                  <ReferenceLine 
                    y={nominalRate} 
                    stroke="#666" 
                    strokeDasharray="3 3"
                    label={{ value: "Nominell rente", position: "right", style: { fontSize: 10 } }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Renteperiode</th>
                    <th className="text-right p-2">Perioder/år</th>
                    <th className="text-right p-2">Perioderente</th>
                    <th className="text-right p-2">Effektiv årlig rente</th>
                    <th className="text-right p-2">Verdi etter 1 år</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2">{row.frequency}</td>
                      <td className="text-right p-2">
                        {frequencies[Object.keys(frequencies)[index]].periods === Infinity 
                          ? '∞' 
                          : frequencies[Object.keys(frequencies)[index]].periods}
                      </td>
                      <td className="text-right p-2">
                        {frequencies[Object.keys(frequencies)[index]].periods === Infinity 
                          ? '-' 
                          : formatPercent(nominalRate / frequencies[Object.keys(frequencies)[index]].periods, 3)}
                      </td>
                      <td className="text-right p-2 font-semibold">
                        {formatPercent(row.effectiveRate)}
                      </td>
                      <td className="text-right p-2">{formatCurrency(row.futureValue)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Example */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            Praktisk eksempel
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="bg-white p-3 rounded-lg border border-yellow-300">
            <h4 className="text-sm font-semibold mb-2">Avbetalingsordning</h4>
            <p className="text-xs mb-2">
              I stedet for å betale kr 10.000 kontant, kan du slå til på en avbetalingsordning som innebærer at
              du betaler kr 2.500 kontant og resten i form av 12 månedlige beløp, første gang om en måned. 
              Den årlige effektive renten er 60,1%.
            </p>
            
            <div className="bg-gray-50 p-2 rounded mt-2">
              <p className="text-xs font-semibold mb-1">Løsning:</p>
              <p className="text-xs">
                1. Restbeløp: 10.000 - 2.500 = 7.500 kr<br/>
                2. Månedlig rente: (1.601)^(1/12) - 1 = 4%<br/>
                3. Månedlig betaling = 7.500 / AF(4%, 12) = 7.500 / 9,385 = 799 kr
              </p>
            </div>
          </div>
          
          <div className="text-xs space-y-1">
            <p className="font-semibold">Tommelfingeregler:</p>
            <ul className="space-y-1 ml-4">
              <li>• Kredittkort: Ofte 20-25% nominell rente månedlig = 26-28% EAR</li>
              <li>• Boliglån: Typisk kvartalsvis renteberegning</li>
              <li>• Sparekonto: Ofte månedlig eller daglig renteberegning</li>
              <li>• Jo oftere renten beregnes, desto bedre for sparer/investor</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EffectiveRateCalculator;