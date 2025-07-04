import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const PortfolioRiskCalculator = () => {
  const [assetA, setAssetA] = useState({
    expectedReturn: 8,
    volatility: 15,
  });
  
  const [assetB, setAssetB] = useState({
    expectedReturn: 5,
    volatility: 7,
  });
  
  const [correlation, setCorrelation] = useState([0.2]);
  const [weightA, setWeightA] = useState([60]);

  const portfolioMetrics = useMemo(() => {
    const wA = weightA[0] / 100;
    const wB = 1 - wA;
    const rho = correlation[0];
    
    const expectedReturn = wA * assetA.expectedReturn + wB * assetB.expectedReturn;
    
    const variance = 
      Math.pow(wA, 2) * Math.pow(assetA.volatility, 2) +
      Math.pow(wB, 2) * Math.pow(assetB.volatility, 2) +
      2 * wA * wB * assetA.volatility * assetB.volatility * rho;
    
    const volatility = Math.sqrt(variance);
    
    return {
      expectedReturn: expectedReturn.toFixed(2),
      volatility: volatility.toFixed(2),
      sharpeRatio: (expectedReturn / volatility).toFixed(3)
    };
  }, [assetA, assetB, correlation, weightA]);

  return (
    <Card className="w-full max-w-4xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-center">🎯 Interaktiv Porteføljerisiko-kalkulator</CardTitle>
        <p className="text-center text-muted-foreground">
          Eksperimenter med ulike verdipapirer og se hvordan risiko og avkastning endres
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Asset A */}
          <div className="space-y-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300">Verdipapir A</h3>
            <div className="space-y-3">
              <div>
                <Label htmlFor="returnA">Forventet avkastning (%)</Label>
                <Input
                  id="returnA"
                  type="number"
                  value={assetA.expectedReturn}
                  onChange={(e) => setAssetA({...assetA, expectedReturn: Number(e.target.value)})}
                  step="0.1"
                />
              </div>
              <div>
                <Label htmlFor="volatilityA">Volatilitet/risiko (%)</Label>
                <Input
                  id="volatilityA"
                  type="number"
                  value={assetA.volatility}
                  onChange={(e) => setAssetA({...assetA, volatility: Number(e.target.value)})}
                  step="0.1"
                />
              </div>
            </div>
          </div>

          {/* Asset B */}
          <div className="space-y-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
            <h3 className="font-semibold text-green-800 dark:text-green-300">Verdipapir B</h3>
            <div className="space-y-3">
              <div>
                <Label htmlFor="returnB">Forventet avkastning (%)</Label>
                <Input
                  id="returnB"
                  type="number"
                  value={assetB.expectedReturn}
                  onChange={(e) => setAssetB({...assetB, expectedReturn: Number(e.target.value)})}
                  step="0.1"
                />
              </div>
              <div>
                <Label htmlFor="volatilityB">Volatilitet/risiko (%)</Label>
                <Input
                  id="volatilityB"
                  type="number"
                  value={assetB.volatility}
                  onChange={(e) => setAssetB({...assetB, volatility: Number(e.target.value)})}
                  step="0.1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio composition */}
        <div className="space-y-4 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
          <h3 className="font-semibold text-purple-800 dark:text-purple-300">Porteføljesammensetning</h3>
          
          <div className="space-y-3">
            <div>
              <Label>Andel av verdipapir A: {weightA[0]}%</Label>
              <Slider
                value={weightA}
                onValueChange={setWeightA}
                max={100}
                min={0}
                step={5}
                className="mt-2"
              />
              <div className="text-sm text-muted-foreground mt-1">
                Verdipapir B: {100 - weightA[0]}%
              </div>
            </div>

            <div>
              <Label>Korrelasjon mellom verdipapirene: {correlation[0].toFixed(2)}</Label>
              <Slider
                value={correlation}
                onValueChange={setCorrelation}
                max={1}
                min={-1}
                step={0.1}
                className="mt-2"
              />
              <div className="text-sm text-muted-foreground mt-1">
                -1.0 = perfekt negativ, 0 = ingen sammenheng, 1.0 = perfekt positiv
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
          <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-4 text-center">
            📊 Porteføljeresultater
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                {portfolioMetrics.expectedReturn}%
              </div>
              <div className="text-sm text-muted-foreground">Forventet avkastning</div>
            </div>
            
            <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {portfolioMetrics.volatility}%
              </div>
              <div className="text-sm text-muted-foreground">Volatilitet (risiko)</div>
            </div>
            
            <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {portfolioMetrics.sharpeRatio}
              </div>
              <div className="text-sm text-muted-foreground">Sharpe-ratio</div>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-center text-muted-foreground">
            Sharpe-ratio måler avkastning per enhet risiko (høyere er bedre)
          </div>
        </div>
      </CardContent>
    </Card>
  );
};