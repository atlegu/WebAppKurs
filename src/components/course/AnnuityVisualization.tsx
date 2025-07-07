import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Calculator, Minus, Plus, Infinity } from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
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

const AnnuityVisualization = () => {
  const [payment, setPayment] = useState(10000);
  const [interestRate, setInterestRate] = useState(5);
  const [periods, setPeriods] = useState(10);
  const [showDerivation, setShowDerivation] = useState(false);
  
  // Calculate annuity values
  const annuityPV = useMemo(() => {
    const r = interestRate / 100;
    if (r === 0) return payment * periods;
    return payment * (1/r - 1/(r * Math.pow(1 + r, periods)));
  }, [payment, interestRate, periods]);
  
  const annuityFV = useMemo(() => {
    const r = interestRate / 100;
    if (r === 0) return payment * periods;
    return payment * ((Math.pow(1 + r, periods) - 1) / r);
  }, [payment, interestRate, periods]);
  
  // Calculate perpetuity values for derivation
  const perpetuity1 = payment / (interestRate / 100);
  const perpetuity2Value = payment / (interestRate / 100);
  const perpetuity2PV = perpetuity2Value / Math.pow(1 + interestRate / 100, periods);
  
  // Generate data for visualization
  const chartData = useMemo(() => {
    const data = [];
    const r = interestRate / 100;
    let cumulativePV = 0;
    let cumulativeFV = 0;
    
    for (let period = 1; period <= periods; period++) {
      const pvOfPayment = payment / Math.pow(1 + r, period);
      const fvOfPayment = payment * Math.pow(1 + r, periods - period);
      cumulativePV += pvOfPayment;
      cumulativeFV += payment;
      
      data.push({
        period,
        paymentPV: pvOfPayment,
        cumulativePV,
        paymentFV: fvOfPayment,
        cumulativeFV: cumulativeFV * Math.pow(1 + r, periods - period),
        perpetuity1: period <= 30 ? perpetuity1 : null,
        perpetuity2: period > periods && period <= 30 ? perpetuity2PV : null,
      });
    }
    
    // Add extra periods for perpetuity visualization
    if (showDerivation) {
      for (let period = periods + 1; period <= 30; period++) {
        data.push({
          period,
          paymentPV: 0,
          cumulativePV,
          paymentFV: 0,
          cumulativeFV,
          perpetuity1: perpetuity1,
          perpetuity2: perpetuity2PV,
        });
      }
    }
    
    return data;
  }, [payment, interestRate, periods, showDerivation, perpetuity1, perpetuity2PV]);
  
  const formatCurrency = (value: number) => {
    return `${value.toLocaleString('no-NO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} kr`;
  };
  
  const formatNumber = (value: number) => {
    return value.toFixed(2);
  };
  
  // Annuity factor
  const annuityFactor = annuityPV / payment;
  
  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border text-xs">
          <p className="font-semibold mb-1">Periode {label}</p>
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
          Annuitet - Like betalinger over tid
        </h1>
        <p className="text-sm text-muted-foreground">
          Forstå hvordan annuiteter verdsettes og utledes fra perpetuiteter
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
                Årlig betaling: {formatCurrency(payment)}
              </label>
              <Slider
                value={[payment]}
                onValueChange={(value) => setPayment(value[0])}
                min={1000}
                max={50000}
                step={1000}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-medium">
                Rente: {interestRate}%
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
            
            <div className="space-y-2">
              <label className="text-xs font-medium">
                Antall perioder: {periods}
              </label>
              <Slider
                value={[periods]}
                onValueChange={(value) => setPeriods(value[0])}
                min={2}
                max={30}
                step={1}
                className="w-full"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Derivation */}
      <Card className={`${showDerivation ? 'border-blue-500' : ''}`}>
        <CardHeader>
          <CardTitle className="text-base flex items-center justify-between">
            <span>Utledning via perpetuiteter</span>
            <Button
              size="sm"
              variant={showDerivation ? "default" : "outline"}
              onClick={() => setShowDerivation(!showDerivation)}
            >
              {showDerivation ? "Skjul" : "Vis"} utledning
            </Button>
          </CardTitle>
        </CardHeader>
        {showDerivation && (
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-green-50 border-green-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Infinity className="w-4 h-4" />
                    Perpetuitet 1
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs mb-2">Starter i år 1, evig</p>
                  <p className="text-sm font-mono">PV₁ = C/r</p>
                  <p className="text-base font-bold text-green-700">
                    {formatCurrency(perpetuity1)}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-red-50 border-red-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Minus className="w-4 h-4" />
                    Perpetuitet 2
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs mb-2">Starter i år {periods + 1}, evig</p>
                  <p className="text-sm font-mono">PV₂ = (C/r) / (1+r)ⁿ</p>
                  <p className="text-base font-bold text-red-700">
                    {formatCurrency(perpetuity2PV)}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Annuitet
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs mb-2">År 1 til {periods}</p>
                  <p className="text-sm font-mono">PV = PV₁ - PV₂</p>
                  <p className="text-base font-bold text-blue-700">
                    {formatCurrency(annuityPV)}
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-semibold mb-2">Matematisk utledning:</h4>
              <div className="space-y-2 text-xs font-mono">
                <p>PV(annuitet) = PV(perpetuitet₁) - PV(perpetuitet₂)</p>
                <p>PV = C/r - (C/r)/(1+r)ⁿ</p>
                <p>PV = C/r × [1 - 1/(1+r)ⁿ]</p>
                <p className="font-bold text-blue-700">PV = C × [1/r - 1/(r(1+r)ⁿ)]</p>
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Formula and Values */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Annuitetsformelen</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs font-semibold mb-1">Nåverdi:</p>
              <p className="text-sm font-mono text-center">
                PV = C × [1/r - 1/(r(1+r)ⁿ)]
              </p>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs font-semibold mb-1">Annuitetsfaktor:</p>
              <p className="text-sm font-mono text-center">
                AF = 1/r - 1/(r(1+r)ⁿ) = {formatNumber(annuityFactor)}
              </p>
              <p className="text-xs text-muted-foreground text-center mt-1">
                PV = {formatCurrency(payment)} × {formatNumber(annuityFactor)}
              </p>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs font-semibold mb-1">Sluttverdi:</p>
              <p className="text-sm font-mono text-center">
                FV = C × [(1+r)ⁿ - 1]/r
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-primary">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Beregnet verdi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-xs text-muted-foreground">Nåverdi av annuitet:</p>
              <p className="text-xl font-bold text-primary">{formatCurrency(annuityPV)}</p>
            </div>
            
            <div>
              <p className="text-xs text-muted-foreground">Sluttverdi av annuitet:</p>
              <p className="text-xl font-bold text-green-600">{formatCurrency(annuityFV)}</p>
            </div>
            
            <div className="pt-2 border-t">
              <p className="text-xs text-muted-foreground">Totale innbetalinger:</p>
              <p className="text-base font-medium">{formatCurrency(payment * periods)}</p>
              <p className="text-xs text-muted-foreground mt-1">
                Renter tjent: {formatCurrency(annuityFV - payment * periods)}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Visualisering av kontantstrømmer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="period" 
                  label={{ value: 'Periode', position: 'insideBottom', offset: -5, style: { fontSize: 10 } }}
                  tick={{ fontSize: 10 }}
                />
                <YAxis 
                  label={{ value: 'Verdi (kr)', angle: -90, position: 'insideLeft', style: { fontSize: 10 } }}
                  tick={{ fontSize: 10 }}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '10px' }} />
                
                <Bar dataKey="paymentPV" name="Nåverdi av betaling" fill="#3B82F6" />
                
                {showDerivation && (
                  <>
                    <Line 
                      type="monotone" 
                      dataKey="perpetuity1" 
                      name="Perpetuitet 1" 
                      stroke="#10B981" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="perpetuity2" 
                      name="Perpetuitet 2" 
                      stroke="#EF4444" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                    />
                  </>
                )}
                
                <ReferenceLine 
                  x={periods} 
                  stroke="#666" 
                  strokeDasharray="3 3"
                  label={{ value: "Siste betaling", position: "top", style: { fontSize: 10 } }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          
          {/* Payment schedule */}
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <h4 className="text-xs font-semibold mb-2">Betalingsplan (første 5 perioder):</h4>
            <div className="grid grid-cols-5 gap-2 text-xs">
              {chartData.slice(0, Math.min(5, periods)).map((data) => (
                <div key={data.period} className="text-center">
                  <div className="font-medium">År {data.period}</div>
                  <div className="text-muted-foreground">{formatCurrency(payment)}</div>
                  <div className="text-blue-600">NV: {formatCurrency(data.paymentPV)}</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Examples */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            Praktiske eksempler
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold mb-2">Billån</h4>
              <p className="text-xs">
                Lånebeløp: 300 000 kr, 5% rente, 5 år
              </p>
              <p className="text-xs mt-1">
                Årlig betaling = 300 000 / AF(5%, 5 år) = {formatCurrency(300000 / (1/0.05 - 1/(0.05 * Math.pow(1.05, 5))))}
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-2">Pensjonssparing</h4>
              <p className="text-xs">
                Spare 50 000/år, 7% avkastning, 30 år
              </p>
              <p className="text-xs mt-1">
                Sluttverdi = 50 000 × [(1.07³⁰ - 1)/0.07] = {formatCurrency(50000 * ((Math.pow(1.07, 30) - 1) / 0.07))}
              </p>
            </div>
          </div>
          
          <div className="bg-white p-3 rounded-lg border border-yellow-300">
            <p className="text-xs font-semibold mb-1">Husk:</p>
            <ul className="text-xs space-y-1">
              <li>• Annuitet = Like betalinger over begrenset tid</li>
              <li>• Annuitetsfaktor = "Hvor mange år med betaling" justert for rente</li>
              <li>• Jo høyere rente, desto lavere nåverdi</li>
              <li>• Jo flere perioder, desto nærmere perpetuitet</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnnuityVisualization;