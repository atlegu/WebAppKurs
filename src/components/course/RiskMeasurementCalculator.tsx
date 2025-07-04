import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Trash2, Plus } from "lucide-react";

interface ReturnData {
  year: number;
  return: number;
}

export const RiskMeasurementCalculator = () => {
  const [investmentName, setInvestmentName] = useState("Min Investering");
  const [returns, setReturns] = useState<ReturnData[]>([
    { year: 1, return: 10 },
    { year: 2, return: -5 },
    { year: 3, return: 15 },
    { year: 4, return: 8 },
    { year: 5, return: 2 }
  ]);

  const addYear = () => {
    const nextYear = Math.max(...returns.map(r => r.year)) + 1;
    setReturns([...returns, { year: nextYear, return: 0 }]);
  };

  const removeYear = (yearToRemove: number) => {
    if (returns.length > 2) {
      setReturns(returns.filter(r => r.year !== yearToRemove));
    }
  };

  const updateReturn = (year: number, newReturn: number) => {
    setReturns(returns.map(r => 
      r.year === year ? { ...r, return: newReturn } : r
    ));
  };

  const statistics = useMemo(() => {
    const returnValues = returns.map(r => r.return);
    const n = returnValues.length;
    
    // Arithmetic mean
    const arithmeticMean = returnValues.reduce((sum, r) => sum + r, 0) / n;
    
    // Geometric mean
    const geometricMean = Math.pow(
      returnValues.reduce((product, r) => product * (1 + r/100), 1),
      1/n
    ) - 1;
    
    // Variance and standard deviation
    const variance = returnValues.reduce((sum, r) => 
      sum + Math.pow(r - arithmeticMean, 2), 0
    ) / (n - 1);
    const standardDeviation = Math.sqrt(variance);
    
    // Coefficient of variation
    const coefficientOfVariation = standardDeviation / Math.abs(arithmeticMean);
    
    // Range
    const minReturn = Math.min(...returnValues);
    const maxReturn = Math.max(...returnValues);
    const range = maxReturn - minReturn;
    
    return {
      arithmeticMean: arithmeticMean.toFixed(2),
      geometricMean: (geometricMean * 100).toFixed(2),
      variance: variance.toFixed(2),
      standardDeviation: standardDeviation.toFixed(2),
      coefficientOfVariation: coefficientOfVariation.toFixed(3),
      minReturn: minReturn.toFixed(1),
      maxReturn: maxReturn.toFixed(1),
      range: range.toFixed(1)
    };
  }, [returns]);

  return (
    <Card className="w-full max-w-5xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-center">📊 Interaktiv Risikomåling</CardTitle>
        <p className="text-center text-muted-foreground">
          Eksperimenter med historiske avkastningsdata og se ulike risikomål
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="investmentName">Investeringsnavn</Label>
              <Input
                id="investmentName"
                value={investmentName}
                onChange={(e) => setInvestmentName(e.target.value)}
                placeholder="Skriv inn navn på investering"
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-lg font-semibold">Historisk avkastning (%)</Label>
                <Button onClick={addYear} size="sm" variant="outline">
                  <Plus className="h-4 w-4 mr-1" />
                  Legg til år
                </Button>
              </div>
              
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {returns.map((item) => (
                  <div key={item.year} className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <Label className="w-12 text-sm">År {item.year}:</Label>
                    <Input
                      type="number"
                      value={item.return}
                      onChange={(e) => updateReturn(item.year, Number(e.target.value))}
                      step="0.1"
                      className="flex-1"
                    />
                    <span className="text-sm text-muted-foreground">%</span>
                    {returns.length > 2 && (
                      <Button
                        onClick={() => removeYear(item.year)}
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
          </div>

          {/* Results Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">📈 Resultater for {investmentName}</h3>
            
            <div className="grid grid-cols-1 gap-3">
              <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-blue-800 dark:text-blue-300">Aritmetisk gjennomsnitt:</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">{statistics.arithmeticMean}%</span>
                </div>
              </div>
              
              <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-green-800 dark:text-green-300">Geometrisk gjennomsnitt:</span>
                  <span className="font-bold text-green-600 dark:text-green-400">{statistics.geometricMean}%</span>
                </div>
              </div>
              
              <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-orange-800 dark:text-orange-300">Standardavvik (σ):</span>
                  <span className="font-bold text-orange-600 dark:text-orange-400">{statistics.standardDeviation}%</span>
                </div>
              </div>
              
              <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-purple-800 dark:text-purple-300">Variasjonskoeffisient:</span>
                  <span className="font-bold text-purple-600 dark:text-purple-400">{statistics.coefficientOfVariation}</span>
                </div>
              </div>
              
              <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-red-800 dark:text-red-300">Spredning (min-max):</span>
                  <span className="font-bold text-red-600 dark:text-red-400">{statistics.minReturn}% til {statistics.maxReturn}%</span>
                </div>
              </div>
              
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Totalt spenn:</span>
                  <span className="font-bold">{statistics.range}%</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">💡 Tolkning</h4>
              <div className="text-sm space-y-1">
                <p><strong>Høy standardavvik ({statistics.standardDeviation}%):</strong> {Number(statistics.standardDeviation) > 10 ? "Høy risiko - stor variasjon i avkastning" : "Moderat risiko - akseptabel variasjon"}</p>
                <p><strong>Variasjonskoeffisient:</strong> {Number(statistics.coefficientOfVariation) > 1 ? "Høy relativ risiko" : "Moderat relativ risiko"}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};