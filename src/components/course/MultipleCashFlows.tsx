import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Minus, Calculator, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface CashFlow {
  id: number;
  amount: number;
  year: number;
}

const MultipleCashFlows = () => {
  const [cashFlows, setCashFlows] = useState<CashFlow[]>([
    { id: 1, amount: 1000, year: 1 },
    { id: 2, amount: 2000, year: 3 },
    { id: 3, amount: 1500, year: 5 },
  ]);
  const [interestRate, setInterestRate] = useState(5);
  const [targetYear, setTargetYear] = useState(5);
  const [nextId, setNextId] = useState(4);

  // Calculate present value and future value for each cash flow
  const calculations = useMemo(() => {
    return cashFlows.map(cf => {
      const yearsToTarget = targetYear - cf.year;
      let valueAtTarget: number;
      
      if (yearsToTarget > 0) {
        // Future value calculation
        valueAtTarget = cf.amount * Math.pow(1 + interestRate / 100, yearsToTarget);
      } else if (yearsToTarget < 0) {
        // Present value calculation
        valueAtTarget = cf.amount / Math.pow(1 + interestRate / 100, Math.abs(yearsToTarget));
      } else {
        // Already at target year
        valueAtTarget = cf.amount;
      }
      
      return {
        ...cf,
        valueAtTarget,
        yearsToTarget
      };
    });
  }, [cashFlows, interestRate, targetYear]);

  const totalAtTarget = calculations.reduce((sum, calc) => sum + calc.valueAtTarget, 0);

  const addCashFlow = () => {
    setCashFlows([...cashFlows, { id: nextId, amount: 1000, year: 2 }]);
    setNextId(nextId + 1);
  };

  const removeCashFlow = (id: number) => {
    setCashFlows(cashFlows.filter(cf => cf.id !== id));
  };

  const updateCashFlow = (id: number, field: 'amount' | 'year', value: number) => {
    setCashFlows(cashFlows.map(cf => 
      cf.id === id ? { ...cf, [field]: value } : cf
    ));
  };

  const formatCurrency = (value: number) => {
    return `${Math.round(value).toLocaleString('no-NO')} kr`;
  };

  // Generate timeline visualization data
  const timelineYears = Math.max(targetYear, ...cashFlows.map(cf => cf.year)) + 1;
  const yearArray = Array.from({ length: timelineYears + 1 }, (_, i) => i);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-xl font-bold text-primary">
          Slutt- og nåverdi av flere beløp
        </h1>
        <p className="text-sm text-muted-foreground">
          Se hvordan flere kontantstrømmer flyttes til samme tidspunkt
        </p>
      </div>

      {/* Controls */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Kontantstrømmer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {cashFlows.map((cf, index) => (
              <div key={cf.id} className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground w-8">#{index + 1}</span>
                <Input
                  type="number"
                  value={cf.amount}
                  onChange={(e) => updateCashFlow(cf.id, 'amount', Number(e.target.value))}
                  className="w-24 h-8 text-sm"
                />
                <span className="text-xs">kr i år</span>
                <Input
                  type="number"
                  value={cf.year}
                  onChange={(e) => updateCashFlow(cf.id, 'year', Number(e.target.value))}
                  className="w-16 h-8 text-sm"
                  min="0"
                  max="20"
                />
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => removeCashFlow(cf.id)}
                  className="h-8 w-8 p-0"
                >
                  <Minus className="h-3 w-3" />
                </Button>
              </div>
            ))}
            <Button
              size="sm"
              variant="outline"
              onClick={addCashFlow}
              className="w-full h-8 text-xs"
            >
              <Plus className="h-3 w-3 mr-1" />
              Legg til kontantstrøm
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Beregningsparametere</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-xs font-medium">Rente: {interestRate}%</label>
              <Input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-8 text-sm mt-1"
                min="0"
                max="20"
                step="0.5"
              />
            </div>
            <div>
              <label className="text-xs font-medium">Målår (flytt alle beløp hit): År {targetYear}</label>
              <Input
                type="number"
                value={targetYear}
                onChange={(e) => setTargetYear(Number(e.target.value))}
                className="w-full h-8 text-sm mt-1"
                min="0"
                max="20"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Timeline Visualization */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            Tidslinje og beregninger
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Timeline */}
          <div className="relative mb-8 mt-4">
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-300" />
            
            {/* Year markers */}
            {yearArray.map(year => (
              <div
                key={year}
                className="absolute top-4"
                style={{ left: `${(year / timelineYears) * 100}%` }}
              >
                <div className={`h-4 w-0.5 ${year === targetYear ? 'bg-primary' : 'bg-gray-400'}`} />
                <span className={`absolute -translate-x-1/2 text-xs mt-1 ${year === targetYear ? 'font-bold text-primary' : ''}`}>
                  {year}
                </span>
              </div>
            ))}

            {/* Cash flows on timeline */}
            {cashFlows.map((cf, index) => (
              <div
                key={cf.id}
                className="absolute"
                style={{ 
                  left: `${(cf.year / timelineYears) * 100}%`,
                  top: `${-20 - (index % 2) * 25}px`
                }}
              >
                <div className="relative">
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-6 bg-blue-400" />
                  <div className="bg-blue-100 border border-blue-400 rounded px-2 py-1 text-xs whitespace-nowrap">
                    {formatCurrency(cf.amount)}
                  </div>
                </div>
              </div>
            ))}

            {/* Target year indicator */}
            <div
              className="absolute -top-2 -bottom-2 w-0.5 bg-primary"
              style={{ left: `${(targetYear / timelineYears) * 100}%` }}
            />
          </div>

          {/* Calculations table */}
          <div className="space-y-4 mt-12">
            <h3 className="text-sm font-semibold">Beregninger:</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b">
                    <th className="text-left pb-2">Kontantstrøm</th>
                    <th className="text-right pb-2">Beløp</th>
                    <th className="text-center pb-2">Fra år</th>
                    <th className="text-center pb-2">Til år</th>
                    <th className="text-center pb-2">Antall år</th>
                    <th className="text-right pb-2">Verdi i år {targetYear}</th>
                  </tr>
                </thead>
                <tbody>
                  {calculations.map((calc, index) => (
                    <tr key={calc.id} className="border-b">
                      <td className="py-2">#{index + 1}</td>
                      <td className="text-right">{formatCurrency(calc.amount)}</td>
                      <td className="text-center">{calc.year}</td>
                      <td className="text-center">{targetYear}</td>
                      <td className="text-center">
                        {calc.yearsToTarget > 0 && `+${calc.yearsToTarget}`}
                        {calc.yearsToTarget < 0 && calc.yearsToTarget}
                        {calc.yearsToTarget === 0 && '0'}
                      </td>
                      <td className="text-right font-medium">
                        {formatCurrency(calc.valueAtTarget)}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={5} className="py-2 font-bold">Total verdi i år {targetYear}:</td>
                    <td className="text-right font-bold text-primary">
                      {formatCurrency(totalAtTarget)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Calculation examples */}
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h4 className="text-xs font-semibold mb-2">Eksempel på beregninger:</h4>
              {calculations.slice(0, 2).map((calc, index) => (
                <div key={calc.id} className="text-xs mb-2">
                  <span className="font-medium">Kontantstrøm #{index + 1}:</span>
                  {calc.yearsToTarget > 0 && (
                    <span className="ml-2">
                      FV = {formatCurrency(calc.amount)} × (1 + {interestRate}%)^{calc.yearsToTarget} = {formatCurrency(calc.valueAtTarget)}
                    </span>
                  )}
                  {calc.yearsToTarget < 0 && (
                    <span className="ml-2">
                      PV = {formatCurrency(calc.amount)} ÷ (1 + {interestRate}%)^{Math.abs(calc.yearsToTarget)} = {formatCurrency(calc.valueAtTarget)}
                    </span>
                  )}
                  {calc.yearsToTarget === 0 && (
                    <span className="ml-2">
                      Allerede i målår: {formatCurrency(calc.amount)}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key concept */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">💡 Nøkkelkonsept</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs">
            For å sammenligne eller summere flere kontantstrømmer, må alle flyttes til <strong>samme tidspunkt</strong>. 
            Dette gjøres ved å:
          </p>
          <ul className="text-xs mt-2 space-y-1">
            <li>• <strong>Fremtidsverdi:</strong> Multiplisere med (1+r)^n for beløp som skal fremover i tid</li>
            <li>• <strong>Nåverdi:</strong> Dividere med (1+r)^n for beløp som skal bakover i tid</li>
            <li>• <strong>Summere:</strong> Når alle beløp er på samme tidspunkt, kan de summeres</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default MultipleCashFlows;