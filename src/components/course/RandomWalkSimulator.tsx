import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Play, RotateCcw, TrendingUp } from 'lucide-react';

interface PricePoint {
  period: number;
  price: number;
  return: number;
}

export const RandomWalkSimulator: React.FC = () => {
  const [priceData, setPriceData] = useState<PricePoint[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [periods, setPeriods] = useState(0);
  const [initialPrice] = useState(100);
  const [arithmeticMean, setArithmeticMean] = useState(0);
  const [geometricMean, setGeometricMean] = useState(0);
  const [finalPrice, setFinalPrice] = useState(100);

  const generateRandomReturn = () => {
    // Generate random return between -20% and +20% with slight positive bias
    return (Math.random() - 0.45) * 0.4;
  };

  const runSimulation = () => {
    if (isRunning) return;
    
    setIsRunning(true);
    const newData: PricePoint[] = [{ period: 0, price: initialPrice, return: 0 }];
    let currentPrice = initialPrice;
    
    const interval = setInterval(() => {
      if (newData.length >= 21) { // 20 periods + initial
        setIsRunning(false);
        clearInterval(interval);
        calculateMeans(newData.slice(1)); // Exclude initial point for return calculations
        return;
      }
      
      const returnRate = generateRandomReturn();
      currentPrice = currentPrice * (1 + returnRate);
      
      newData.push({
        period: newData.length,
        price: currentPrice,
        return: returnRate
      });
      
      setPriceData([...newData]);
      setPeriods(newData.length - 1);
      setFinalPrice(currentPrice);
    }, 200);
  };

  const calculateMeans = (data: PricePoint[]) => {
    if (data.length === 0) return;
    
    // Arithmetic mean
    const sumReturns = data.reduce((sum, point) => sum + point.return, 0);
    const arithmetic = sumReturns / data.length;
    setArithmeticMean(arithmetic);
    
    // Geometric mean
    const product = data.reduce((prod, point) => prod * (1 + point.return), 1);
    const geometric = Math.pow(product, 1 / data.length) - 1;
    setGeometricMean(geometric);
  };

  const reset = () => {
    setPriceData([{ period: 0, price: initialPrice, return: 0 }]);
    setPeriods(0);
    setArithmeticMean(0);
    setGeometricMean(0);
    setFinalPrice(initialPrice);
    setIsRunning(false);
  };

  const formatPercent = (value: number) => `${(value * 100).toFixed(2)}%`;
  const formatPrice = (value: number) => `${value.toFixed(2)} kr`;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Random Walk Simulator
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Se hvordan tilfeldig prisutvikling påvirker aritmetrisk vs. geometrisk gjennomsnitt
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        
        {/* Controls */}
        <div className="flex gap-3">
          <Button 
            onClick={runSimulation} 
            disabled={isRunning}
            className="flex items-center gap-2"
          >
            <Play className="w-4 h-4" />
            {isRunning ? 'Kjører...' : 'Start simulering'}
          </Button>
          <Button 
            onClick={reset} 
            variant="outline"
            className="flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Nullstill
          </Button>
        </div>

        {/* Statistics */}
        {periods > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-muted/30 rounded-lg">
              <div className="text-sm text-muted-foreground">Perioder</div>
              <div className="text-lg font-semibold">{periods}</div>
            </div>
            <div className="text-center p-3 bg-muted/30 rounded-lg">
              <div className="text-sm text-muted-foreground">Sluttkurs</div>
              <div className="text-lg font-semibold">{formatPrice(finalPrice)}</div>
            </div>
            <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
              <div className="text-sm text-muted-foreground">Aritmetrisk snitt</div>
              <div className="text-lg font-semibold text-blue-700 dark:text-blue-300">
                {formatPercent(arithmeticMean)}
              </div>
            </div>
            <div className="text-center p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
              <div className="text-sm text-muted-foreground">Geometrisk snitt</div>
              <div className="text-lg font-semibold text-green-700 dark:text-green-300">
                {formatPercent(geometricMean)}
              </div>
            </div>
          </div>
        )}

        {/* Key Insight */}
        {periods > 0 && arithmeticMean !== 0 && geometricMean !== 0 && (
          <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-yellow-600 dark:text-yellow-400 text-xl">💡</span>
              <div>
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                  Viktig observasjon
                </h4>
                <p className="text-sm text-foreground">
                  Geometrisk gjennomsnitt ({formatPercent(geometricMean)}) er 
                  {geometricMean < arithmeticMean ? ' lavere enn ' : ' høyere enn '}
                  aritmetrisk gjennomsnitt ({formatPercent(arithmeticMean)}). 
                  Dette illustrerer at geometrisk gjennomsnitt bedre reflekterer den faktiske 
                  vekstraten over tid, spesielt når det er volatilitet.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Chart */}
        {priceData.length > 1 && (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="period" 
                  label={{ value: 'Periode', position: 'insideBottom', offset: -5 }}
                />
                <YAxis 
                  label={{ value: 'Pris (kr)', angle: -90, position: 'insideLeft' }}
                  domain={['dataMin - 5', 'dataMax + 5']}
                />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'price' ? formatPrice(value as number) : formatPercent(value as number),
                    name === 'price' ? 'Pris' : 'Avkastning'
                  ]}
                  labelFormatter={(period) => `Periode ${period}`}
                />
                <ReferenceLine y={initialPrice} stroke="#666" strokeDasharray="2 2" />
                <Line 
                  type="monotone" 
                  dataKey="price" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 3 }}
                  activeDot={{ r: 5, fill: 'hsl(var(--primary))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Instructions */}
        <div className="text-sm text-muted-foreground bg-muted/20 p-3 rounded-lg">
          <p className="font-medium mb-2">Slik fungerer simuleringen:</p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Hver periode genereres en tilfeldig avkastning mellom -20% og +20%</li>
            <li>Prisen oppdateres basert på forrige pris × (1 + avkastning)</li>
            <li>Aritmetrisk snitt = gjennomsnittet av alle avkastningsratene</li>
            <li>Geometrisk snitt = ⁿ√(produkt av alle (1+avkastning)) - 1</li>
          </ul>
        </div>

      </CardContent>
    </Card>
  );
};