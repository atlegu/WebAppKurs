import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Info, TrendingUp, Layers } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from 'recharts';

const CompoundInterestVisualization = () => {
  const [principal, setPrincipal] = useState(10000);
  const [interestRate, setInterestRate] = useState(7);
  const [years, setYears] = useState(20);
  const [showBreakdown, setShowBreakdown] = useState(true);

  // Calculate compound interest data
  const chartData = useMemo(() => {
    const data = [];
    let totalInterestOnInterest = 0;
    
    for (let year = 0; year <= years; year++) {
      if (year === 0) {
        data.push({
          year,
          principal,
          simpleInterest: 0,
          compoundInterest: 0,
          total: principal,
        });
      } else {
        // Simple interest (what you'd get without compounding)
        const simpleInterest = principal * (interestRate / 100) * year;
        
        // Total value with compound interest
        const totalValue = principal * Math.pow(1 + interestRate / 100, year);
        
        // Total compound interest earned
        const totalCompoundInterest = totalValue - principal;
        
        // Interest on interest is the difference between compound and simple interest
        const interestOnInterest = totalCompoundInterest - simpleInterest;
        
        data.push({
          year,
          principal,
          simpleInterest,
          interestOnInterest,
          total: totalValue,
          totalInterest: totalCompoundInterest,
        });
      }
    }
    
    return data;
  }, [principal, interestRate, years]);

  const finalValue = chartData[chartData.length - 1]?.total || principal;
  const totalInterest = finalValue - principal;
  const simpleInterestTotal = principal * (interestRate / 100) * years;
  const compoundInterestBenefit = totalInterest - simpleInterestTotal;

  const formatCurrency = (value: number) => {
    return `${Math.round(value).toLocaleString('no-NO')} kr`;
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  // Custom tooltip for the chart
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border">
          <p className="font-semibold mb-2">År {label}</p>
          <div className="space-y-1 text-sm">
            <p className="text-blue-600">Hovedstol: {formatCurrency(data.principal)}</p>
            <p className="text-green-600">Enkel rente: {formatCurrency(data.simpleInterest)}</p>
            <p className="text-purple-600">Rentes rente: {formatCurrency(data.interestOnInterest)}</p>
            <p className="font-semibold border-t pt-1">Total: {formatCurrency(data.total)}</p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-primary">
          Rentes rente-effekten visualisert
        </h1>
        <p className="text-sm text-muted-foreground">
          Se hvordan pengene dine vokser eksponentielt over tid
        </p>
      </div>

      {/* Introduction */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Info className="w-4 h-4" />
            Hva er rentes rente?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm">
            <strong>Rentes rente</strong> (compound interest) er når du tjener renter ikke bare på 
            hovedstolen, men også på tidligere opptjente renter. Dette skaper en snøballeffekt 
            som får pengene dine til å vokse eksponentielt over tid.
          </p>
          <div className="bg-white p-4 rounded-lg border border-blue-300">
            <p className="text-sm font-semibold mb-2">Eksempel med 1000 kr til 10% rente:</p>
            <ul className="text-sm space-y-1">
              <li>• År 1: 1000 kr + 100 kr rente = 1100 kr</li>
              <li>• År 2: 1100 kr + 110 kr rente = 1210 kr (10 kr er rente på rente!)</li>
              <li>• År 3: 1210 kr + 121 kr rente = 1331 kr (21 kr er rente på rente!)</li>
            </ul>
          </div>
          <p className="text-sm italic">
            Albert Einstein kalte rentes rente for "verdens åttende underverk" og "den sterkeste 
            kraften i universet". Forstå denne effekten, og du forstår grunnlaget for all 
            langsiktig formuesbygging!
          </p>
        </CardContent>
      </Card>

      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Juster parametrene</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <label className="text-sm font-medium">
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
            
            <div className="space-y-3">
              <label className="text-sm font-medium">
                Årlig rente: {formatPercentage(interestRate)}
              </label>
              <Slider
                value={[interestRate]}
                onValueChange={(value) => setInterestRate(value[0])}
                min={1}
                max={15}
                step={0.5}
                className="w-full"
              />
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-medium">
                Antall år: {years}
              </label>
              <Slider
                value={[years]}
                onValueChange={(value) => setYears(value[0])}
                min={5}
                max={40}
                step={1}
                className="w-full"
              />
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button
              variant={showBreakdown ? "default" : "outline"}
              onClick={() => setShowBreakdown(!showBreakdown)}
              className="flex items-center gap-2"
            >
              <Layers className="w-4 h-4" />
              {showBreakdown ? "Vis oppdeling" : "Skjul oppdeling"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Vekst over tid</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="year" 
                  label={{ value: 'År', position: 'insideBottom', offset: -5 }}
                />
                <YAxis 
                  label={{ value: 'Verdi (kr)', angle: -90, position: 'insideLeft' }}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                
                {showBreakdown ? (
                  <>
                    <Bar dataKey="principal" name="Hovedstol" stackId="a" fill="#3B82F6" />
                    <Bar dataKey="simpleInterest" name="Enkel rente" stackId="a" fill="#10B981" />
                    <Bar dataKey="interestOnInterest" name="Rentes rente" stackId="a" fill="#8B5CF6" />
                  </>
                ) : (
                  <Bar dataKey="total" name="Total verdi" fill="#3B82F6">
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? '#3B82F6' : '#10B981'} />
                    ))}
                  </Bar>
                )}
                
                <ReferenceLine y={principal} stroke="#666" strokeDasharray="3 3" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-muted-foreground">Startbeløp</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold text-blue-600">{formatCurrency(principal)}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-muted-foreground">Sluttverdi</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold text-green-600">{formatCurrency(finalValue)}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {((finalValue / principal - 1) * 100).toFixed(0)}% økning
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-muted-foreground">Total rente</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">{formatCurrency(totalInterest)}</p>
          </CardContent>
        </Card>
        
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-muted-foreground">Rentes rente-gevinst</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold text-purple-600">
              {formatCurrency(compoundInterestBenefit)}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {((compoundInterestBenefit / totalInterest) * 100).toFixed(0)}% av total rente
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Key Insights */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Viktige innsikter
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Eksponentiell vekst</h4>
              <p className="text-sm">
                Med {formatPercentage(interestRate)} rente dobles pengene dine cirka hvert {Math.round(72 / interestRate)}. år 
                (72-regelen). Etter {years} år har {formatCurrency(principal)} blitt 
                til {formatCurrency(finalValue)}.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Tidens magi</h4>
              <p className="text-sm">
                Jo lenger tid, desto større andel kommer fra rentes rente. 
                I ditt eksempel utgjør rentes rente {formatCurrency(compoundInterestBenefit)} eller {' '}
                {((compoundInterestBenefit / totalInterest) * 100).toFixed(0)}% av den totale 
                renteinntekten!
              </p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-yellow-300">
            <p className="text-sm font-semibold mb-2">💡 Praktisk tips:</p>
            <ul className="text-sm space-y-1">
              <li>• Start sparing tidlig - tid er din beste venn</li>
              <li>• Reinvester alltid avkastningen for maksimal effekt</li>
              <li>• Små forskjeller i rente gir store utslag over tid</li>
              <li>• Vær tålmodig - de største gevinstene kommer sent</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Examples */}
      <div className="grid md:grid-cols-2 gap-4">
        <Button
          variant="outline"
          onClick={() => {
            setPrincipal(10000);
            setInterestRate(8);
            setYears(30);
          }}
        >
          Eksempel: Pensjonssparing (30 år)
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setPrincipal(50000);
            setInterestRate(12);
            setYears(10);
          }}
        >
          Eksempel: Aksjefond (10 år)
        </Button>
      </div>
    </div>
  );
};

export default CompoundInterestVisualization;