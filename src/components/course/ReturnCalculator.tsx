import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

interface PeriodReturn {
  period: number;
  return: number;
}

export const ReturnCalculator = () => {
  // HPR Calculator
  const [hprData, setHprData] = useState({
    startPrice: 37,
    endPrice: 40.33,
    dividend: 1.85,
    shares: 100
  });

  // Multi-period returns
  const [periodReturns, setPeriodReturns] = useState<PeriodReturn[]>([
    { period: 1, return: 10 },
    { period: 2, return: -5 },
    { period: 3, return: 15 },
    { period: 4, return: 8 }
  ]);

  // Annualization
  const [annualData, setAnnualData] = useState({
    periodReturn: 5,
    months: 3
  });

  // Risk premium and real return
  const [premiumData, setPremiumData] = useState({
    nominalReturn: 8,
    riskFreeRate: 2,
    inflationRate: 3
  });

  const addPeriod = () => {
    const nextPeriod = Math.max(...periodReturns.map(p => p.period)) + 1;
    setPeriodReturns([...periodReturns, { period: nextPeriod, return: 0 }]);
  };

  const removePeriod = (periodToRemove: number) => {
    if (periodReturns.length > 2) {
      setPeriodReturns(periodReturns.filter(p => p.period !== periodToRemove));
    }
  };

  const updatePeriodReturn = (period: number, newReturn: number) => {
    setPeriodReturns(periodReturns.map(p => 
      p.period === period ? { ...p, return: newReturn } : p
    ));
  };

  const hprCalculations = useMemo(() => {
    const totalDividend = hprData.dividend * hprData.shares;
    const capitalGain = (hprData.endPrice - hprData.startPrice) * hprData.shares;
    const totalInvestment = hprData.startPrice * hprData.shares;
    const hpr = ((totalDividend + capitalGain) / totalInvestment) * 100;
    
    return {
      totalDividend: totalDividend.toFixed(0),
      capitalGain: capitalGain.toFixed(0),
      totalInvestment: totalInvestment.toFixed(0),
      hpr: hpr.toFixed(2)
    };
  }, [hprData]);

  const multiPeriodCalculations = useMemo(() => {
    const returns = periodReturns.map(p => p.return);
    const arithmeticMean = returns.reduce((sum, r) => sum + r, 0) / returns.length;
    
    const geometricMean = Math.pow(
      returns.reduce((product, r) => product * (1 + r/100), 1),
      1/returns.length
    ) - 1;
    
    return {
      arithmeticMean: arithmeticMean.toFixed(2),
      geometricMean: (geometricMean * 100).toFixed(2),
      periods: returns.length
    };
  }, [periodReturns]);

  const annualCalculations = useMemo(() => {
    const annualizedReturn = Math.pow(1 + annualData.periodReturn/100, 12/annualData.months) - 1;
    return {
      annualizedReturn: (annualizedReturn * 100).toFixed(2)
    };
  }, [annualData]);

  const premiumCalculations = useMemo(() => {
    const riskPremium = premiumData.nominalReturn - premiumData.riskFreeRate;
    const realReturn = ((1 + premiumData.nominalReturn/100) / (1 + premiumData.inflationRate/100) - 1) * 100;
    
    return {
      riskPremium: riskPremium.toFixed(2),
      realReturn: realReturn.toFixed(2)
    };
  }, [premiumData]);

  return (
    <Card className="w-full max-w-6xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-center">📈 Interaktiv Avkastningskalkulator</CardTitle>
        <p className="text-center text-muted-foreground">
          Eksperimenter med ulike avkastningsmål og beregninger
        </p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="hpr" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="hpr">HPR</TabsTrigger>
            <TabsTrigger value="averages">Gjennomsnitt</TabsTrigger>
            <TabsTrigger value="annual">Annualisering</TabsTrigger>
            <TabsTrigger value="adjusted">Justert avkastning</TabsTrigger>
          </TabsList>

          {/* HPR Calculator */}
          <TabsContent value="hpr" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Holding-Period Return (HPR)</h3>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="startPrice">Startpris per aksje (kr)</Label>
                    <Input
                      id="startPrice"
                      type="number"
                      value={hprData.startPrice}
                      onChange={(e) => setHprData({...hprData, startPrice: Number(e.target.value)})}
                      step="0.01"
                    />
                  </div>
                  <div>
                    <Label htmlFor="endPrice">Sluttpris per aksje (kr)</Label>
                    <Input
                      id="endPrice"
                      type="number"
                      value={hprData.endPrice}
                      onChange={(e) => setHprData({...hprData, endPrice: Number(e.target.value)})}
                      step="0.01"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dividend">Utbytte per aksje (kr)</Label>
                    <Input
                      id="dividend"
                      type="number"
                      value={hprData.dividend}
                      onChange={(e) => setHprData({...hprData, dividend: Number(e.target.value)})}
                      step="0.01"
                    />
                  </div>
                  <div>
                    <Label htmlFor="shares">Antall aksjer</Label>
                    <Input
                      id="shares"
                      type="number"
                      value={hprData.shares}
                      onChange={(e) => setHprData({...hprData, shares: Number(e.target.value)})}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">📊 Beregning</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded">
                    <div className="flex justify-between">
                      <span className="text-sm">Total investering:</span>
                      <span className="font-semibold">{hprCalculations.totalInvestment} kr</span>
                    </div>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded">
                    <div className="flex justify-between">
                      <span className="text-sm">Utbytte totalt:</span>
                      <span className="font-semibold">{hprCalculations.totalDividend} kr</span>
                    </div>
                  </div>
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded">
                    <div className="flex justify-between">
                      <span className="text-sm">Kapitalgevinst:</span>
                      <span className="font-semibold">{hprCalculations.capitalGain} kr</span>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-lg border-2 border-indigo-200 dark:border-indigo-800">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-indigo-800 dark:text-indigo-300">HPR:</span>
                      <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{hprCalculations.hpr}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Average Returns */}
          <TabsContent value="averages" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Historisk avkastning (%)</h3>
                  <Button onClick={addPeriod} size="sm" variant="outline">
                    <Plus className="h-4 w-4 mr-1" />
                    Legg til periode
                  </Button>
                </div>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {periodReturns.map((item) => (
                    <div key={item.period} className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                      <Label className="w-16 text-sm">År {item.period}:</Label>
                      <Input
                        type="number"
                        value={item.return}
                        onChange={(e) => updatePeriodReturn(item.period, Number(e.target.value))}
                        step="0.1"
                        className="flex-1"
                      />
                      <span className="text-sm text-muted-foreground">%</span>
                      {periodReturns.length > 2 && (
                        <Button
                          onClick={() => removePeriod(item.period)}
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">📊 Gjennomsnitt</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-blue-800 dark:text-blue-300">Aritmetisk snitt:</span>
                      <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{multiPeriodCalculations.arithmeticMean}%</span>
                    </div>
                    <p className="text-xs text-blue-600 dark:text-blue-400">Bruk for prognoser og forventninger</p>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-green-800 dark:text-green-300">Geometrisk snitt:</span>
                      <span className="text-xl font-bold text-green-600 dark:text-green-400">{multiPeriodCalculations.geometricMean}%</span>
                    </div>
                    <p className="text-xs text-green-600 dark:text-green-400">Faktisk årlig vekstrate</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                    <div className="flex justify-between">
                      <span className="text-sm">Antall perioder:</span>
                      <span className="font-semibold">{multiPeriodCalculations.periods}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Annualization */}
          <TabsContent value="annual" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Annualisering</h3>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="periodReturn">Avkastning i perioden (%)</Label>
                    <Input
                      id="periodReturn"
                      type="number"
                      value={annualData.periodReturn}
                      onChange={(e) => setAnnualData({...annualData, periodReturn: Number(e.target.value)})}
                      step="0.1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="months">Lengde på periode (måneder)</Label>
                    <Input
                      id="months"
                      type="number"
                      value={annualData.months}
                      onChange={(e) => setAnnualData({...annualData, months: Number(e.target.value)})}
                      min="1"
                      max="12"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">📊 Resultat</h3>
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-purple-800 dark:text-purple-300">Annualisert avkastning:</span>
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">{annualCalculations.annualizedReturn}%</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Hvis {annualData.periodReturn}% avkastning i {annualData.months} måneder fortsetter hele året
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Adjusted Returns */}
          <TabsContent value="adjusted" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Justert avkastning</h3>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="nominalReturn">Nominell avkastning (%)</Label>
                    <Input
                      id="nominalReturn"
                      type="number"
                      value={premiumData.nominalReturn}
                      onChange={(e) => setPremiumData({...premiumData, nominalReturn: Number(e.target.value)})}
                      step="0.1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="riskFreeRate">Risikofri rente (%)</Label>
                    <Input
                      id="riskFreeRate"
                      type="number"
                      value={premiumData.riskFreeRate}
                      onChange={(e) => setPremiumData({...premiumData, riskFreeRate: Number(e.target.value)})}
                      step="0.1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="inflationRate">Inflasjonsrate (%)</Label>
                    <Input
                      id="inflationRate"
                      type="number"
                      value={premiumData.inflationRate}
                      onChange={(e) => setPremiumData({...premiumData, inflationRate: Number(e.target.value)})}
                      step="0.1"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">📊 Resultater</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-orange-800 dark:text-orange-300">Risikopremie:</span>
                      <span className="text-xl font-bold text-orange-600 dark:text-orange-400">{premiumCalculations.riskPremium}%</span>
                    </div>
                    <p className="text-xs text-orange-600 dark:text-orange-400">Meravkastning utover risikofri rente</p>
                  </div>
                  
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-red-800 dark:text-red-300">Real avkastning:</span>
                      <span className="text-xl font-bold text-red-600 dark:text-red-400">{premiumCalculations.realReturn}%</span>
                    </div>
                    <p className="text-xs text-red-600 dark:text-red-400">Avkastning justert for inflasjon</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};