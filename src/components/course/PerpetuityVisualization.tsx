import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Info, TrendingDown, Infinity } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

const PerpetuityVisualization = () => {
  const [annualPayment, setAnnualPayment] = useState(10000);
  const [interestRate, setInterestRate] = useState(5);
  const [yearsToShow, setYearsToShow] = useState(50);

  // Calculate perpetuity value
  const perpetuityValue = annualPayment / (interestRate / 100);

  // Calculate cumulative present value over time
  const chartData = useMemo(() => {
    const data = [];
    let cumulativePV = 0;
    
    for (let year = 1; year <= yearsToShow; year++) {
      const pvOfPayment = annualPayment / Math.pow(1 + interestRate / 100, year);
      cumulativePV += pvOfPayment;
      
      data.push({
        year,
        paymentPV: pvOfPayment,
        cumulativePV,
        percentageOfTotal: (cumulativePV / perpetuityValue) * 100,
        remainingValue: perpetuityValue - cumulativePV
      });
    }
    
    return data;
  }, [annualPayment, interestRate, yearsToShow, perpetuityValue]);

  // Find key milestones
  const halfValueYear = chartData.find(d => d.percentageOfTotal >= 50)?.year || yearsToShow;
  const ninetyPercentYear = chartData.find(d => d.percentageOfTotal >= 90)?.year || yearsToShow;
  const finalYearPercentage = chartData[chartData.length - 1]?.percentageOfTotal || 0;

  const formatCurrency = (value: number) => {
    return `${Math.round(value).toLocaleString('no-NO')} kr`;
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  // Bank account calculation
  const requiredBankDeposit = perpetuityValue;
  const annualInterest = requiredBankDeposit * (interestRate / 100);

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border text-xs">
          <p className="font-semibold mb-1">År {label}</p>
          <p>Nåverdi av betaling: {formatCurrency(data.paymentPV)}</p>
          <p>Akkumulert nåverdi: {formatCurrency(data.cumulativePV)}</p>
          <p>Andel av total: {formatPercentage(data.percentageOfTotal)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-xl font-bold text-primary flex items-center justify-center gap-2">
          Perpetuitet - Uendelig kontantstrøm
          <Infinity className="w-5 h-5" />
        </h1>
        <p className="text-sm text-muted-foreground">
          Forstå hvordan en evig kontantstrøm har en endelig verdi
        </p>
      </div>

      {/* The Bank Account Explanation */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Info className="w-4 h-4" />
            Tenk på det som en bankkonto
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm">
            <strong>Spørsmål:</strong> Hvor mye må du sette inn i banken i dag for å kunne ta ut {formatCurrency(annualPayment)} hvert år til evig tid?
          </p>
          <div className="bg-white p-3 rounded-lg border border-blue-300">
            <p className="text-sm font-semibold">Svar: {formatCurrency(requiredBankDeposit)}</p>
            <p className="text-xs text-muted-foreground mt-1">
              Med {formatPercentage(interestRate)} rente gir dette {formatCurrency(annualInterest)} i årlig rente, 
              som er nøyaktig nok til å ta ut {formatCurrency(annualPayment)} hvert år uten å røre hovedstolen.
            </p>
          </div>
          <div className="text-xs italic">
            Dette er nøyaktig hva en perpetuitet er verdt: beløpet som genererer nok rente til å betale ut kontantstrømmen evig!
          </div>
        </CardContent>
      </Card>

      {/* Controls */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Juster parametrene</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-medium">
                Årlig utbetaling: {formatCurrency(annualPayment)}
              </label>
              <Slider
                value={[annualPayment]}
                onValueChange={(value) => setAnnualPayment(value[0])}
                min={1000}
                max={50000}
                step={1000}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-medium">
                Rente: {formatPercentage(interestRate)}
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
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-medium">
              Vis frem til år: {yearsToShow}
            </label>
            <Slider
              value={[yearsToShow]}
              onValueChange={(value) => setYearsToShow(value[0])}
              min={20}
              max={100}
              step={10}
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* Formula and Value */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Perpetuitetsformelen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <div className="text-lg font-mono">
                PV = C / r
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                PV = {formatCurrency(annualPayment)} / {formatPercentage(interestRate)}
              </div>
              <div className="text-base font-bold text-primary mt-2">
                = {formatCurrency(perpetuityValue)}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Nøkkeltall</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Total verdi:</span>
              <span className="font-bold">{formatCurrency(perpetuityValue)}</span>
            </div>
            <div className="flex justify-between">
              <span>50% av verdien innen:</span>
              <span className="font-medium">{halfValueYear} år</span>
            </div>
            <div className="flex justify-between">
              <span>90% av verdien innen:</span>
              <span className="font-medium">{ninetyPercentYear} år</span>
            </div>
            <div className="flex justify-between">
              <span>Etter {yearsToShow} år:</span>
              <span className="font-medium">{formatPercentage(finalYearPercentage)} mottatt</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Hvordan verdien bygges opp over tid</CardTitle>
          <p className="text-xs text-muted-foreground">
            Se hvordan nåverdien av fremtidige betalinger gradvis nærmer seg totalverdien
          </p>
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="year" 
                  label={{ value: 'År', position: 'insideBottom', offset: -5, style: { fontSize: 12 } }}
                  tick={{ fontSize: 10 }}
                />
                <YAxis 
                  label={{ value: 'Nåverdi (kr)', angle: -90, position: 'insideLeft', style: { fontSize: 12 } }}
                  tick={{ fontSize: 10 }}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                
                <Area 
                  type="monotone" 
                  dataKey="cumulativePV" 
                  stroke="#3B82F6" 
                  fill="#3B82F6" 
                  fillOpacity={0.6}
                  name="Akkumulert nåverdi"
                />
                
                <ReferenceLine 
                  y={perpetuityValue} 
                  stroke="#EF4444" 
                  strokeDasharray="5 5"
                  label={{ value: "Total verdi", position: "right", style: { fontSize: 10 } }}
                />
                
                <ReferenceLine 
                  y={perpetuityValue * 0.5} 
                  stroke="#10B981" 
                  strokeDasharray="3 3"
                  strokeOpacity={0.5}
                />
                
                <ReferenceLine 
                  y={perpetuityValue * 0.9} 
                  stroke="#10B981" 
                  strokeDasharray="3 3"
                  strokeOpacity={0.5}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          {/* Year by year breakdown for first 5 years */}
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <h4 className="text-xs font-semibold mb-2">De første årene i detalj:</h4>
            <div className="grid grid-cols-5 gap-2 text-xs">
              {chartData.slice(0, 5).map((data) => (
                <div key={data.year} className="text-center">
                  <div className="font-medium">År {data.year}</div>
                  <div className="text-muted-foreground">{formatCurrency(data.paymentPV)}</div>
                  <div className="text-blue-600">{formatPercentage(data.paymentPV / perpetuityValue * 100)}</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Insights */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <TrendingDown className="w-4 h-4" />
            Viktige innsikter
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2 text-sm">
            <p>
              <strong>Overraskende faktum:</strong> Selv om utbetalingene fortsetter til evig tid, 
              er totalverdien bare {(1 / (interestRate / 100)).toFixed(1)} ganger den årlige utbetalingen!
            </p>
            <p>
              <strong>Hvorfor så "lite"?</strong> Fremtidige betalinger diskonteres kraftig. 
              En betaling om {Math.round(72 / interestRate)} år er bare verdt halvparten av dagens verdi.
            </p>
            <p>
              <strong>Praktisk betydning:</strong> Dette forklarer hvorfor stater kan utstede evigvarende 
              obligasjoner (consols) og hvorfor aksjer med stabil utbyttebetaling kan verdsettes.
            </p>
          </div>
          
          <div className="bg-white p-3 rounded-lg border border-yellow-300">
            <p className="text-xs font-semibold mb-1">Husk formelen:</p>
            <p className="text-sm text-center font-mono">Perpetuitet = Årlig betaling ÷ Rente</p>
            <p className="text-xs text-muted-foreground text-center mt-1">
              Jo høyere rente, desto lavere verdi!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerpetuityVisualization;