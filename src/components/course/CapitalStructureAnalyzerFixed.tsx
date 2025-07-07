import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { 
  PieChart, 
  TrendingUp, 
  TrendingDown,
  AlertTriangle,
  Building,
  Calculator,
  Info,
  BarChart3,
  Shield,
  DollarSign,
  Briefcase
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
  PieChart as RechartsPieChart,
  Pie,
  Cell
} from 'recharts';

interface FirmData {
  equity: number;
  debt: number;
  ebit: number;
  taxRate: number;
  interestRate: number;
  shares: number;
  debtEquityRatio: number;
}

const CapitalStructureAnalyzerFixed = () => {
  const [firmData, setFirmData] = useState<FirmData>({
    equity: 8000000,
    debt: 0,
    ebit: 1500000,
    taxRate: 22,
    interestRate: 5,
    shares: 400000,
    debtEquityRatio: 0
  });

  const [targetDebt, setTargetDebt] = useState(0);
  const [showMMWithTax, setShowMMWithTax] = useState(false);
  const [showFinancialDistress, setShowFinancialDistress] = useState(false);
  const [activeTab, setActiveTab] = useState<'leverage' | 'value' | 'eps' | 'pie'>('leverage');
  
  // Calculate key metrics
  const calculateMetrics = (debt: number, equity: number) => {
    const totalValue = debt + equity;
    const sharesAfterRecap = debt > 0 ? firmData.shares * (equity / firmData.equity) : firmData.shares;
    const interest = debt * (firmData.interestRate / 100);
    const ebt = firmData.ebit - interest;
    const tax = Math.max(0, ebt * (firmData.taxRate / 100));
    const netIncome = ebt - tax;
    const eps = sharesAfterRecap > 0 ? netIncome / sharesAfterRecap : 0;
    const roe = equity > 0 ? netIncome / equity : 0;
    const wacc = calculateWACC(debt, equity);
    
    return {
      totalValue,
      interest,
      ebt,
      tax,
      netIncome,
      eps,
      roe,
      shares: sharesAfterRecap,
      wacc
    };
  };

  // Calculate WACC
  const calculateWACC = (debt: number, equity: number) => {
    const totalValue = debt + equity;
    if (totalValue === 0) return 0;
    
    const weightDebt = debt / totalValue;
    const weightEquity = equity / totalValue;
    
    // Cost of equity using M&M Proposition II
    const unleveredCostOfEquity = 0.12; // 12% base cost
    const costOfEquity = unleveredCostOfEquity + 
      (unleveredCostOfEquity - firmData.interestRate / 100) * (debt / equity) * (1 - firmData.taxRate / 100);
    
    const afterTaxCostOfDebt = (firmData.interestRate / 100) * (1 - firmData.taxRate / 100);
    
    return weightEquity * costOfEquity + weightDebt * afterTaxCostOfDebt;
  };

  // Calculate firm value with taxes
  const calculateFirmValueWithTax = (debt: number) => {
    const unleveredValue = firmData.equity; // Original all-equity value
    const taxShield = debt * (firmData.taxRate / 100);
    return unleveredValue + taxShield;
  };

  // Calculate financial distress costs
  const calculateDistressCosts = (debt: number) => {
    const debtRatio = debt / (debt + firmData.equity);
    // Simple quadratic function for distress costs
    return Math.pow(debtRatio, 2) * firmData.equity * 0.3;
  };

  // Current metrics
  const currentMetrics = useMemo(() => 
    calculateMetrics(firmData.debt, firmData.equity), 
    [firmData]
  );

  // Recapitalization metrics
  const recapMetrics = useMemo(() => {
    const newEquity = firmData.equity - targetDebt;
    return calculateMetrics(targetDebt, newEquity);
  }, [targetDebt, firmData]);

  // Generate leverage scenarios
  const leverageScenarios = useMemo(() => {
    const scenarios = [];
    const ebitScenarios = [
      { name: 'Resesjon', ebit: firmData.ebit * 0.5 },
      { name: 'Forventet', ebit: firmData.ebit },
      { name: 'Ekspansjon', ebit: firmData.ebit * 1.5 }
    ];

    for (const scenario of ebitScenarios) {
      // No debt
      const noDebtMetrics = {
        ...scenario,
        debt: 0,
        interest: 0,
        ebt: scenario.ebit,
        tax: scenario.ebit * (firmData.taxRate / 100),
        netIncome: scenario.ebit * (1 - firmData.taxRate / 100),
        eps: (scenario.ebit * (1 - firmData.taxRate / 100)) / firmData.shares,
        roe: (scenario.ebit * (1 - firmData.taxRate / 100)) / firmData.equity
      };

      // With debt
      const interest = targetDebt * (firmData.interestRate / 100);
      const newShares = firmData.shares * ((firmData.equity - targetDebt) / firmData.equity);
      const ebt = scenario.ebit - interest;
      const tax = Math.max(0, ebt * (firmData.taxRate / 100));
      const netIncome = ebt - tax;
      
      const withDebtMetrics = {
        ...scenario,
        debt: targetDebt,
        interest,
        ebt,
        tax,
        netIncome,
        eps: newShares > 0 ? netIncome / newShares : 0,
        roe: (firmData.equity - targetDebt) > 0 ? netIncome / (firmData.equity - targetDebt) : 0
      };

      scenarios.push(noDebtMetrics, withDebtMetrics);
    }

    return scenarios;
  }, [firmData, targetDebt]);

  // Generate value curve data
  const valueCurveData = useMemo(() => {
    const data = [];
    const maxDebt = firmData.equity * 2;
    
    for (let debt = 0; debt <= maxDebt; debt += maxDebt / 50) {
      const baseValue = firmData.equity;
      let value = baseValue;
      
      if (showMMWithTax) {
        value = calculateFirmValueWithTax(debt);
      }
      
      if (showFinancialDistress && debt > 0) {
        value -= calculateDistressCosts(debt);
      }
      
      const wacc = calculateWACC(debt, Math.max(baseValue - debt, 0));
      
      data.push({
        debt,
        value,
        wacc: wacc * 100,
        debtRatio: debt / value * 100
      });
    }
    
    return data;
  }, [firmData, showMMWithTax, showFinancialDistress]);

  // Find optimal capital structure
  const optimalStructure = useMemo(() => {
    if (!showFinancialDistress || !showMMWithTax) return null;
    
    let maxValue = 0;
    let optimalDebt = 0;
    
    valueCurveData.forEach(point => {
      if (point.value > maxValue) {
        maxValue = point.value;
        optimalDebt = point.debt;
      }
    });
    
    return { debt: optimalDebt, value: maxValue };
  }, [valueCurveData, showFinancialDistress, showMMWithTax]);

  // EPS-EBIT analysis data
  const epsEbitData = useMemo(() => {
    const data = [];
    const ebitRange = firmData.ebit * 2;
    
    for (let ebit = 0; ebit <= ebitRange; ebit += ebitRange / 20) {
      // No debt
      const epsNoDebt = (ebit * (1 - firmData.taxRate / 100)) / firmData.shares;
      
      // With target debt
      const interest = targetDebt * (firmData.interestRate / 100);
      const newShares = firmData.shares * ((firmData.equity - targetDebt) / firmData.equity);
      const epsWithDebt = newShares > 0 ? 
        ((ebit - interest) * (1 - firmData.taxRate / 100)) / newShares : 0;
      
      data.push({
        ebit,
        epsNoDebt,
        epsWithDebt
      });
    }
    
    return data;
  }, [firmData, targetDebt]);

  // Break-even EBIT
  const breakEvenEBIT = useMemo(() => {
    const interest = targetDebt * (firmData.interestRate / 100);
    const newShares = firmData.shares * ((firmData.equity - targetDebt) / firmData.equity);
    
    if (newShares === 0) return 0;
    
    // At break-even: EPS with debt = EPS without debt
    // (EBIT × (1-T)) / shares = ((EBIT - Interest) × (1-T)) / newShares
    return (interest * firmData.shares) / (firmData.shares - newShares);
  }, [firmData, targetDebt]);

  const formatCurrency = (value: number) => {
    return `${(value / 1000000).toFixed(2)}M kr`;
  };

  const formatPercent = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-xl font-bold text-primary">
          Kapitalstruktur - M&M og virkeligheten
        </h1>
        <p className="text-sm text-muted-foreground">
          Utforsk hvordan gjeld påvirker verdien av selskapet
        </p>
      </div>

      {/* Control Panel */}
      <Card className="border-primary">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            Selskapets grunndata
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">
                EBIT (årlig): {formatCurrency(firmData.ebit)}
              </label>
              <Slider
                value={[firmData.ebit / 10000]}
                onValueChange={(value) => setFirmData({...firmData, ebit: value[0] * 10000})}
                min={50}
                max={300}
                step={10}
                className="mt-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium">
                Skattesats: {formatPercent(firmData.taxRate)}
              </label>
              <Slider
                value={[firmData.taxRate]}
                onValueChange={(value) => setFirmData({...firmData, taxRate: value[0]})}
                min={0}
                max={35}
                step={1}
                className="mt-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium">
                Rente på gjeld: {formatPercent(firmData.interestRate)}
              </label>
              <Slider
                value={[firmData.interestRate]}
                onValueChange={(value) => setFirmData({...firmData, interestRate: value[0]})}
                min={2}
                max={15}
                step={0.5}
                className="mt-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium">
                Ønsket gjeld: {formatCurrency(targetDebt)}
              </label>
              <Slider
                value={[targetDebt / 10000]}
                onValueChange={(value) => setTargetDebt(value[0] * 10000)}
                min={0}
                max={1600}
                step={10}
                className="mt-2"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              type="button"
              size="sm"
              variant={showMMWithTax ? "default" : "outline"}
              onClick={() => setShowMMWithTax(!showMMWithTax)}
            >
              <Shield className="w-4 h-4 mr-2" />
              M&M med skatt
            </Button>
            <Button
              type="button"
              size="sm"
              variant={showFinancialDistress ? "default" : "outline"}
              onClick={() => setShowFinancialDistress(!showFinancialDistress)}
            >
              <AlertTriangle className="w-4 h-4 mr-2" />
              Konkurskostnader
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Analysis Tabs - Custom Implementation */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Analyse av kapitalstruktur</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Custom Tab Navigation */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 p-1 bg-muted rounded-lg">
              <button
                type="button"
                onClick={() => setActiveTab('leverage')}
                className={`flex-1 min-w-[120px] px-3 py-2 text-sm font-medium rounded transition-colors ${
                  activeTab === 'leverage' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Finansiell giring
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('value')}
                className={`flex-1 min-w-[120px] px-3 py-2 text-sm font-medium rounded transition-colors ${
                  activeTab === 'value' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Selskapsverdi
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('eps')}
                className={`flex-1 min-w-[120px] px-3 py-2 text-sm font-medium rounded transition-colors ${
                  activeTab === 'eps' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EPS-EBIT
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('pie')}
                className={`flex-1 min-w-[120px] px-3 py-2 text-sm font-medium rounded transition-colors ${
                  activeTab === 'pie' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Kakediagram
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'leverage' && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Uten gjeld</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>EBIT:</span>
                        <span className="font-mono">{formatCurrency(firmData.ebit)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Renter:</span>
                        <span className="font-mono">{formatCurrency(0)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Skatt:</span>
                        <span className="font-mono">{formatCurrency(currentMetrics.tax)}</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="font-semibold">Nettoresultat:</span>
                        <span className="font-mono font-semibold">{formatCurrency(currentMetrics.netIncome)}</span>
                      </div>
                      <div className="flex justify-between text-blue-600">
                        <span>ROE:</span>
                        <span className="font-mono">{formatPercent(currentMetrics.roe * 100)}</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>EPS:</span>
                        <span className="font-mono">{(currentMetrics.eps).toFixed(2)} kr</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Med gjeld ({formatCurrency(targetDebt)})</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>EBIT:</span>
                        <span className="font-mono">{formatCurrency(firmData.ebit)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Renter:</span>
                        <span className="font-mono text-red-600">{formatCurrency(recapMetrics.interest)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Skatt:</span>
                        <span className="font-mono">{formatCurrency(recapMetrics.tax)}</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="font-semibold">Nettoresultat:</span>
                        <span className="font-mono font-semibold">{formatCurrency(recapMetrics.netIncome)}</span>
                      </div>
                      <div className="flex justify-between text-blue-600">
                        <span>ROE:</span>
                        <span className="font-mono">{formatPercent(recapMetrics.roe * 100)}</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>EPS:</span>
                        <span className="font-mono">{(recapMetrics.eps).toFixed(2)} kr</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-sm mb-2">Finansiell giring i ulike scenarier</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Scenario</th>
                          <th className="text-right px-3">Gjeld</th>
                          <th className="text-right px-3">EBIT</th>
                          <th className="text-right px-3">Nettoresultat</th>
                          <th className="text-right px-3">ROE</th>
                          <th className="text-right px-3">EPS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leverageScenarios.map((scenario, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-amber-50'}>
                            <td className="py-2">{scenario.name}</td>
                            <td className="text-right px-3">{formatCurrency(scenario.debt)}</td>
                            <td className="text-right px-3">{formatCurrency(scenario.ebit)}</td>
                            <td className="text-right px-3">{formatCurrency(scenario.netIncome)}</td>
                            <td className="text-right px-3">{formatPercent(scenario.roe * 100)}</td>
                            <td className="text-right px-3">{scenario.eps.toFixed(2)} kr</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'value' && (
            <div className="space-y-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={valueCurveData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="debt"
                      tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
                      label={{ value: 'Gjeld (MNOK)', position: 'insideBottom', offset: -10 }}
                    />
                    <YAxis 
                      yAxisId="left"
                      tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
                      label={{ value: 'Selskapsverdi (MNOK)', angle: -90, position: 'insideLeft' }}
                    />
                    <YAxis 
                      yAxisId="right"
                      orientation="right"
                      tickFormatter={(value) => `${value.toFixed(0)}%`}
                      label={{ value: 'WACC (%)', angle: 90, position: 'insideRight' }}
                    />
                    <Tooltip 
                      formatter={(value: number, name: string) => {
                        if (name === 'wacc') return `${value.toFixed(2)}%`;
                        return formatCurrency(value);
                      }}
                    />
                    <Legend />
                    
                    <Area
                      yAxisId="left"
                      type="monotone"
                      dataKey="value"
                      fill="#8884d8"
                      stroke="#8884d8"
                      fillOpacity={0.3}
                      name="Selskapsverdi"
                    />
                    
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="wacc"
                      stroke="#ff7300"
                      strokeWidth={2}
                      dot={false}
                      name="WACC"
                    />
                    
                    {/* Reference line for current debt */}
                    <ReferenceLine 
                      x={targetDebt} 
                      stroke="#666" 
                      strokeDasharray="3 3"
                      label="Valgt gjeld"
                    />
                    
                    {/* Optimal structure */}
                    {optimalStructure && (
                      <ReferenceLine 
                        x={optimalStructure.debt} 
                        stroke="#10b981" 
                        strokeWidth={2}
                        label="Optimal"
                      />
                    )}
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-sm mb-2">M&M uten skatt</h4>
                    <p className="text-xs">
                      Kapitalstrukturen er irrelevant. Selskapsverdien forblir konstant uansett gjeldsgrad.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className={`${showMMWithTax ? 'bg-green-50 border-green-200' : 'bg-gray-50'}`}>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-sm mb-2">M&M med skatt</h4>
                    <p className="text-xs">
                      Gjeld gir skattefordel. Verdien øker med: Skattesats × Gjeld = {formatPercent(firmData.taxRate)} × Gjeld
                    </p>
                  </CardContent>
                </Card>
                
                <Card className={`${showFinancialDistress ? 'bg-red-50 border-red-200' : 'bg-gray-50'}`}>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-sm mb-2">Static trade-off</h4>
                    <p className="text-xs">
                      Optimal kapitalstruktur balanserer skattefordeler mot konkurskostnader.
                      {optimalStructure && ` Optimal gjeld: ${formatCurrency(optimalStructure.debt)}`}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'eps' && (
            <div className="space-y-4">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={epsEbitData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="ebit"
                      tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                      label={{ value: 'EBIT (MNOK)', position: 'insideBottom', offset: -10 }}
                    />
                    <YAxis 
                      label={{ value: 'EPS (kr)', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      formatter={(value: number) => `${value.toFixed(2)} kr`}
                      labelFormatter={(value) => `EBIT: ${formatCurrency(value)}`}
                    />
                    <Legend />
                    
                    <Line
                      type="monotone"
                      dataKey="epsNoDebt"
                      stroke="#8884d8"
                      strokeWidth={2}
                      name="Uten gjeld"
                    />
                    
                    <Line
                      type="monotone"
                      dataKey="epsWithDebt"
                      stroke="#82ca9d"
                      strokeWidth={2}
                      name={`Med ${formatCurrency(targetDebt)} gjeld`}
                    />
                    
                    {/* Break-even point */}
                    <ReferenceLine 
                      x={breakEvenEBIT} 
                      stroke="#666" 
                      strokeDasharray="3 3"
                      label={`Break-even: ${formatCurrency(breakEvenEBIT)}`}
                    />
                    
                    {/* Current EBIT */}
                    <ReferenceLine 
                      x={firmData.ebit} 
                      stroke="#ff7300" 
                      strokeWidth={2}
                      label="Nåværende EBIT"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    Tolkning av EPS-EBIT analysen
                  </h4>
                  <ul className="text-xs space-y-1">
                    <li>• <strong>Break-even EBIT:</strong> {formatCurrency(breakEvenEBIT)} - her er EPS lik med og uten gjeld</li>
                    <li>• <strong>Over break-even:</strong> Gjeld gir høyere EPS (finansiell giring er fordelaktig)</li>
                    <li>• <strong>Under break-even:</strong> Gjeld gir lavere EPS (finansiell giring er ufordelaktig)</li>
                    <li>• <strong>Helning:</strong> Jo mer gjeld, desto brattere linje = høyere sensitivitet</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'pie' && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-center mb-4">Uten gjeld</h4>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={[
                            { name: 'Egenkapital', value: firmData.equity },
                            { name: 'Gjeld', value: 0 }
                          ]}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          <Cell fill="#8884d8" />
                          <Cell fill="#82ca9d" />
                        </Pie>
                        <Tooltip formatter={(value: number) => formatCurrency(value)} />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="text-center text-sm">
                    <p>Total verdi: {formatCurrency(firmData.equity)}</p>
                    <p className="text-muted-foreground">WACC: {formatPercent(currentMetrics.wacc * 100)}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-center mb-4">Med gjeld</h4>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={[
                            { name: 'Egenkapital', value: firmData.equity - targetDebt },
                            { name: 'Gjeld', value: targetDebt }
                          ]}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          <Cell fill="#8884d8" />
                          <Cell fill="#82ca9d" />
                        </Pie>
                        <Tooltip formatter={(value: number) => formatCurrency(value)} />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="text-center text-sm">
                    <p>Total verdi: {formatCurrency(recapMetrics.totalValue)}</p>
                    <p className="text-muted-foreground">WACC: {formatPercent(recapMetrics.wacc * 100)}</p>
                  </div>
                </div>
              </div>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-sm mb-2">M&M Proposisjon I - Kaketeoremet</h4>
                  <p className="text-xs mb-2">
                    I en perfekt verden (uten skatt og konkurskostnader) er størrelsen på kaken 
                    (selskapsverdien) uavhengig av hvordan den deles mellom gjeld og egenkapital.
                  </p>
                  {showMMWithTax && (
                    <p className="text-xs text-green-700">
                      <strong>Med skatt:</strong> Gjeld øker kakens størrelse pga. skattefordelen 
                      (rentefradrag).
                    </p>
                  )}
                  {showFinancialDistress && (
                    <p className="text-xs text-red-700">
                      <strong>Med konkurskostnader:</strong> For mye gjeld reduserer kakens størrelse 
                      pga. finansielle problemer.
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Key Insights */}
      <Card className="bg-primary/5 border-primary">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">🎯 Sentrale lærdommer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>• <strong>M&M uten skatt:</strong> Kapitalstruktur er irrelevant - bare kakebitene endres</p>
            <p>• <strong>M&M med skatt:</strong> Gjeld gir skattefordel - 100% gjeld er optimalt (urealistisk!)</p>
            <p>• <strong>Static trade-off:</strong> Optimal struktur balanserer skattefordeler mot konkurskostnader</p>
            <p>• <strong>Finansiell giring:</strong> Forsterker både opp- og nedsiden - øker risiko for egenkapital</p>
            <p>• <strong>WACC:</strong> Faller først (skattefordel), stiger senere (finansiell risiko)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CapitalStructureAnalyzerFixed;