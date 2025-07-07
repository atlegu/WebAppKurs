import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { 
  Calculator, 
  TrendingUp, 
  TrendingDown, 
  AlertCircle, 
  CheckCircle2,
  Info,
  Target,
  DollarSign,
  Zap,
  Shield
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
  Label,
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NPVProfile from './NPVProfile';

interface CashFlow {
  year: number;
  amount: number;
  description: string;
}

interface NPVScenario {
  name: string;
  riskLevel: 'low' | 'medium' | 'high';
  discountRate: number;
  cashFlows: CashFlow[];
}

const NPVCalculator = () => {
  const [selectedScenario, setSelectedScenario] = useState<'apartment' | 'machine' | 'custom'>('apartment');
  const [discountRate, setDiscountRate] = useState(8);
  const [showRiskExplanation, setShowRiskExplanation] = useState(false);
  
  // Custom scenario state
  const [customCashFlows, setCustomCashFlows] = useState<CashFlow[]>([
    { year: 0, amount: -1000000, description: 'Initiell investering' },
    { year: 1, amount: 200000, description: 'Kontantstrøm år 1' },
    { year: 2, amount: 250000, description: 'Kontantstrøm år 2' },
    { year: 3, amount: 300000, description: 'Kontantstrøm år 3' },
    { year: 4, amount: 300000, description: 'Kontantstrøm år 4' },
    { year: 5, amount: 350000, description: 'Kontantstrøm år 5' },
  ]);

  // Predefined scenarios
  const scenarios: Record<string, NPVScenario> = {
    apartment: {
      name: 'Utleieleilighet',
      riskLevel: 'low',
      discountRate: 5,
      cashFlows: [
        { year: 0, amount: -3000000, description: 'Kjøp av leilighet' },
        { year: 1, amount: 240000, description: 'Netto leieinntekt år 1' },
        { year: 2, amount: 245000, description: 'Netto leieinntekt år 2' },
        { year: 3, amount: 250000, description: 'Netto leieinntekt år 3' },
        { year: 4, amount: 255000, description: 'Netto leieinntekt år 4' },
        { year: 5, amount: 260000, description: 'Netto leieinntekt år 5' },
        { year: 5, amount: 3500000, description: 'Salg av leilighet' },
      ]
    },
    machine: {
      name: 'Produksjonsmaskin',
      riskLevel: 'medium',
      discountRate: 12,
      cashFlows: [
        { year: 0, amount: -2000000, description: 'Kjøp og installasjon' },
        { year: 1, amount: 600000, description: 'Økt overskudd år 1' },
        { year: 2, amount: 650000, description: 'Økt overskudd år 2' },
        { year: 3, amount: 700000, description: 'Økt overskudd år 3' },
        { year: 4, amount: 500000, description: 'Økt overskudd år 4' },
        { year: 5, amount: 300000, description: 'Økt overskudd år 5' },
        { year: 5, amount: 200000, description: 'Salgsverdi maskin' },
      ]
    }
  };

  // Get current cash flows
  const currentCashFlows = selectedScenario === 'custom' 
    ? customCashFlows 
    : scenarios[selectedScenario].cashFlows;

  // Calculate NPV
  const calculateNPV = (cashFlows: CashFlow[], rate: number) => {
    return cashFlows.reduce((npv, cf) => {
      const pv = cf.amount / Math.pow(1 + rate / 100, cf.year);
      return npv + pv;
    }, 0);
  };

  // Calculate NPV for current scenario
  const currentNPV = calculateNPV(currentCashFlows, discountRate);

  // Generate NPV profile data
  const npvProfileData = useMemo(() => {
    const rates = [];
    for (let rate = 0; rate <= 30; rate += 1) {
      rates.push({
        rate,
        npv: calculateNPV(currentCashFlows, rate)
      });
    }
    return rates;
  }, [currentCashFlows]);

  // Find IRR (where NPV = 0)
  const findIRR = () => {
    let low = 0;
    let high = 100;
    let mid;
    
    for (let i = 0; i < 50; i++) {
      mid = (low + high) / 2;
      const npv = calculateNPV(currentCashFlows, mid);
      
      if (Math.abs(npv) < 1) return mid;
      
      if (npv > 0) low = mid;
      else high = mid;
    }
    
    return mid || 0;
  };

  const irr = findIRR();

  // Cash flow breakdown with PV
  const cashFlowBreakdown = useMemo(() => {
    return currentCashFlows.map(cf => {
      const pv = cf.amount / Math.pow(1 + discountRate / 100, cf.year);
      return {
        ...cf,
        pv,
        discountFactor: 1 / Math.pow(1 + discountRate / 100, cf.year)
      };
    });
  }, [currentCashFlows, discountRate]);

  // Risk levels explanation
  const riskLevels = {
    low: { 
      name: 'Lav risiko', 
      rate: '4-7%', 
      examples: 'Statsobligasjoner, utleieboliger i sentrale strøk',
      color: 'green'
    },
    medium: { 
      name: 'Middels risiko', 
      rate: '8-15%', 
      examples: 'Etablerte bedrifter, normale investeringsprosjekter',
      color: 'yellow'
    },
    high: { 
      name: 'Høy risiko', 
      rate: '15-25%+', 
      examples: 'Oppstartsbedrifter, nye markeder, teknologiprosjekter',
      color: 'red'
    }
  };

  const formatCurrency = (value: number) => {
    const absValue = Math.abs(value);
    const formatted = absValue.toLocaleString('no-NO');
    return value < 0 ? `-${formatted} kr` : `${formatted} kr`;
  };

  const formatPercent = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border text-xs">
          <p className="font-semibold mb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.name.includes('Rate') ? formatPercent(entry.value) : formatCurrency(entry.value)}
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
          Netto Nåverdi (NPV) - Investeringsanalysens hovedverktøy
        </h1>
        <p className="text-sm text-muted-foreground">
          Fra kontantstrømmer til investeringsbeslutning - med NPV-profil
        </p>
      </div>

      {/* What is NPV */}
      <Card className="border-primary">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            Hva er netto nåverdi?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="text-sm font-semibold mb-2">Definisjon:</p>
              <p className="text-sm">
                Netto nåverdi (NPV) = Summen av alle kontantstrømmer diskontert til dagens verdi
              </p>
              <p className="text-xs mt-2 text-muted-foreground">
                NPV forteller deg hvor mye rikere (eller fattigere) investeringen gjør deg i dagens kroner.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-green-600" />
                <p className="text-xs font-semibold">NPV &gt; 0</p>
                <p className="text-xs">Investeringen skaper verdi</p>
              </div>
              
              <div className="bg-yellow-50 p-3 rounded-lg text-center">
                <AlertCircle className="w-6 h-6 mx-auto mb-2 text-yellow-600" />
                <p className="text-xs font-semibold">NPV = 0</p>
                <p className="text-xs">Break-even</p>
              </div>
              
              <div className="bg-red-50 p-3 rounded-lg text-center">
                <TrendingDown className="w-6 h-6 mx-auto mb-2 text-red-600" />
                <p className="text-xs font-semibold">NPV &lt; 0</p>
                <p className="text-xs">Investeringen ødelegger verdi</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Scenario Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Velg scenario eller lag ditt eget</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3 mb-4">
            <button
              onClick={() => {
                setSelectedScenario('apartment');
                setDiscountRate(5);
              }}
              className={`p-4 rounded-lg border transition-all ${
                selectedScenario === 'apartment' 
                  ? 'border-primary bg-primary/5' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Shield className="w-6 h-6 mx-auto mb-2 text-green-600" />
              <h5 className="font-semibold text-sm">Utleieleilighet</h5>
              <p className="text-xs text-muted-foreground">Lav risiko</p>
            </button>
            
            <button
              onClick={() => {
                setSelectedScenario('machine');
                setDiscountRate(12);
              }}
              className={`p-4 rounded-lg border transition-all ${
                selectedScenario === 'machine' 
                  ? 'border-primary bg-primary/5' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Zap className="w-6 h-6 mx-auto mb-2 text-yellow-600" />
              <h5 className="font-semibold text-sm">Produksjonsmaskin</h5>
              <p className="text-xs text-muted-foreground">Middels risiko</p>
            </button>
            
            <button
              onClick={() => setSelectedScenario('custom')}
              className={`p-4 rounded-lg border transition-all ${
                selectedScenario === 'custom' 
                  ? 'border-primary bg-primary/5' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Calculator className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <h5 className="font-semibold text-sm">Egendefinert</h5>
              <p className="text-xs text-muted-foreground">Lag ditt eget</p>
            </button>
          </div>
          
          <div className="space-y-3">
            <div>
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
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowRiskExplanation(!showRiskExplanation)}
            >
              <Info className="w-4 h-4 mr-2" />
              {showRiskExplanation ? 'Skjul' : 'Vis'} risiko og avkastningskrav
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Risk Explanation */}
      {showRiskExplanation && (
        <Card className="bg-amber-50 border-amber-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Risiko og avkastningskrav</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                Avkastningskravet reflekterer risikoen i investeringen. 
                Høyere risiko = høyere avkastningskrav = lavere nåverdi.
              </p>
              
              <div className="space-y-3">
                {Object.entries(riskLevels).map(([key, level]) => (
                  <div key={key} className={`p-3 rounded-lg ${
                  key === 'low' ? 'bg-green-100 border border-green-300' :
                  key === 'medium' ? 'bg-yellow-100 border border-yellow-300' :
                  'bg-red-100 border border-red-300'
                }`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h5 className="font-semibold text-sm">{level.name}</h5>
                        <p className="text-xs mt-1">Typisk avkastningskrav: {level.rate}</p>
                        <p className="text-xs text-muted-foreground">{level.examples}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-white p-3 rounded-lg border border-amber-300">
                <p className="text-xs">
                  <strong>Husk:</strong> Risikoen legges i avkastningskravet (diskonteringsrenten), 
                  ikke i kontantstrømmene. Kontantstrømmene skal være forventede verdier.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* NPV Profile Highlight */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            NPV-profil - Visualisering av lønnsomhet
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            NPV-profilen nedenfor viser hvordan prosjektets nåverdi endres med avkastningskravet. 
            Den røde linjen markerer <strong>internrenten (IRR)</strong> - punktet hvor NPV = 0. 
            Dette gir deg en visuell forståelse av prosjektets robusthet.
          </p>
        </CardContent>
      </Card>

      {/* NPV Calculation */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">NPV-beregning og analyse</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">NPV-profil</TabsTrigger>
              <TabsTrigger value="breakdown">Detaljert</TabsTrigger>
              <TabsTrigger value="timeline">Tidslinje</TabsTrigger>
            </TabsList>
            
            <TabsContent value="breakdown" className="space-y-4">
              <div className="space-y-3">
                {cashFlowBreakdown.map((cf, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      cf.amount < 0 
                        ? 'bg-red-50 border-red-200' 
                        : 'bg-green-50 border-green-200'
                    }`}
                  >
                    <div className="grid grid-cols-5 gap-2 text-xs">
                      <div>
                        <p className="font-medium">År {cf.year}</p>
                        <p className="text-muted-foreground">{cf.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">Kontantstrøm</p>
                        <p>{formatCurrency(cf.amount)}</p>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">÷</p>
                        <p>(1+{discountRate}%)^{cf.year}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">Diskonteringsfaktor</p>
                        <p>{cf.discountFactor.toFixed(4)}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">Nåverdi</p>
                        <p className="font-bold">{formatCurrency(cf.pv)}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="p-4 bg-primary/10 rounded-lg border border-primary">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold">Sum netto nåverdi (NPV):</span>
                    <span className={`text-xl font-bold ${currentNPV >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {formatCurrency(currentNPV)}
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="timeline" className="space-y-4">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={cashFlowBreakdown} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="year" 
                      label={{ value: 'År', position: 'insideBottom', offset: -5, style: { fontSize: 10 } }}
                      tick={{ fontSize: 10 }}
                    />
                    <YAxis 
                      tick={{ fontSize: 10 }}
                      tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: '10px' }} />
                    
                    <Bar dataKey="amount" name="Kontantstrøm" fill="#8884d8" />
                    <Line type="monotone" dataKey="pv" name="Nåverdi" stroke="#82ca9d" strokeWidth={2} />
                    
                    <ReferenceLine y={0} stroke="#666" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-semibold mb-1">Internrente (IRR):</p>
                  <p className="text-lg font-bold text-blue-700">{formatPercent(irr)}</p>
                  <p className="text-muted-foreground mt-1">
                    Avkastningskravet som gir NPV = 0
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="font-semibold mb-1">Beslutningsregel:</p>
                  <p className="mt-1">
                    {currentNPV > 0 
                      ? "✅ Aksepter - NPV &gt; 0" 
                      : currentNPV < 0 
                      ? "❌ Forkast - NPV &lt; 0"
                      : "🟡 Break-even - NPV = 0"}
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="profile" className="space-y-4">
              {/* Use the new NPV Profile component */}
              <NPVProfile 
                cashFlows={currentCashFlows}
                currentRate={discountRate}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* What NPV Really Means */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Hva betyr NPV egentlig?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-sm">
              En NPV på {formatCurrency(currentNPV)} betyr:
            </p>
            
            {currentNPV > 0 ? (
              <div className="space-y-2">
                <p className="text-sm">
                  ✅ Investeringen gjør deg {formatCurrency(currentNPV)} rikere i dagens kroner
                </p>
                <p className="text-sm">
                  ✅ Du får tilbake investeringen + {formatPercent(discountRate)} avkastning + {formatCurrency(currentNPV)} ekstra
                </p>
                <p className="text-sm">
                  ✅ Prosjektet skaper verdi utover avkastningskravet
                </p>
              </div>
            ) : currentNPV < 0 ? (
              <div className="space-y-2">
                <p className="text-sm">
                  ❌ Investeringen gjør deg {formatCurrency(Math.abs(currentNPV))} fattigere
                </p>
                <p className="text-sm">
                  ❌ Du får ikke engang {formatPercent(discountRate)} avkastning
                </p>
                <p className="text-sm">
                  ❌ Bedre å sette pengene i banken eller andre prosjekter
                </p>
              </div>
            ) : (
              <p className="text-sm">
                🟡 Du får akkurat {formatPercent(discountRate)} avkastning - verken mer eller mindre
              </p>
            )}
            
            <div className="bg-white p-3 rounded-lg border border-blue-300 mt-4">
              <p className="text-xs font-semibold mb-1">Viktig innsikt:</p>
              <p className="text-xs">
                NPV tar hensyn til både tidsverdien av penger OG risikoen (gjennom avkastningskravet). 
                Det er derfor det er investeringsanalysens viktigste verktøy.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="bg-primary/5 border-primary">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">🎯 Det viktigste å huske</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <p>NPV &gt; 0 = Gjennomfør investeringen</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <p>NPV forteller hvor mye rikere investeringen gjør deg</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <p>Risiko håndteres gjennom avkastningskravet</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <p>Kontantstrømmene skal være forventede verdier</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <p>NPV tar hensyn til både tid og risiko</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NPVCalculator;