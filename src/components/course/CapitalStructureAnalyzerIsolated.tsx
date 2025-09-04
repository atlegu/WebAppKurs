import React, { useState, useMemo, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle, Calculator, Info } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  Area,
  Legend,
  ReferenceLine,
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

const CapitalStructureAnalyzerIsolated = () => {
  const [activeTab, setActiveTab] = useState('leverage');
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

  const formatCurrency = (value: number) => {
    return `${(value / 1000000).toFixed(2)}M kr`;
  };

  const formatPercent = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  // Calculate WACC
  const calculateWACC = useCallback((debt: number, equity: number) => {
    const totalValue = debt + equity;
    if (totalValue === 0) return 0;
    
    const weightDebt = debt / totalValue;
    const weightEquity = equity / totalValue;
    
    const unleveredCostOfEquity = 0.12;
    let costOfEquity = unleveredCostOfEquity;
    
    if (equity > 0) {
      costOfEquity = unleveredCostOfEquity + 
        (unleveredCostOfEquity - firmData.interestRate / 100) * (debt / equity) * (1 - firmData.taxRate / 100);
    }
    
    const afterTaxCostOfDebt = (firmData.interestRate / 100) * (1 - firmData.taxRate / 100);
    
    return weightEquity * costOfEquity + weightDebt * afterTaxCostOfDebt;
  }, [firmData.interestRate, firmData.taxRate]);

  // Calculate firm value with taxes
  const calculateFirmValueWithTax = useCallback((debt: number) => {
    const unleveredValue = firmData.equity;
    const taxShield = debt * (firmData.taxRate / 100);
    return unleveredValue + taxShield;
  }, [firmData.equity, firmData.taxRate]);

  // Calculate financial distress costs
  const calculateDistressCosts = useCallback((debt: number) => {
    const debtRatio = debt / (debt + firmData.equity);
    return Math.pow(debtRatio, 2) * firmData.equity * 0.3;
  }, [firmData.equity]);

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
      
      const waccValue = isFinite(wacc * 100) ? wacc * 100 : 0;
      const debtRatioValue = value > 0 ? (debt / value * 100) : 0;
      
      data.push({
        debt,
        value: Math.max(0, value),
        wacc: waccValue,
        debtRatio: isFinite(debtRatioValue) ? debtRatioValue : 0
      });
    }
    
    return data;
  }, [firmData, showMMWithTax, showFinancialDistress]);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      {/* Header and Introduction */}
      <div className="text-center space-y-2">
        <h1 className="text-xl font-bold text-primary">
          Kapitalstruktur - Modigliani & Miller teoremet
        </h1>
        <p className="text-sm text-muted-foreground">
          Utforsk hvordan gjeld påvirker selskapets verdi og risiko
        </p>
      </div>

      {/* Assumptions Card */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Info className="w-4 h-4" />
            Forutsetninger og veiledning
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div>
              <h4 className="font-semibold mb-1">Grunnleggende forutsetninger:</h4>
              <ul className="space-y-1 ml-4 list-disc text-muted-foreground">
                <li>Perfekte kapitalmarkeder (ingen transaksjonsKostnader eller informasjonsasymmetri)</li>
                <li>Ingen personlig skatt (kun selskapsskatt)</li>
                <li>Konstant EBIT (ingen vekst)</li>
                <li>All gjeld er risikofri til fast rente</li>
                <li>Ved rekapitalisering kjøpes aksjer tilbake til markedspris</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-1">Slik bruker du kalkulatoren:</h4>
              <ol className="space-y-1 ml-4 list-decimal text-muted-foreground">
                <li>Juster EBIT og ønsket gjeldsnivå med skyveknappene</li>
                <li>Aktiver "M&M med skatt" for å se skattefordelen av gjeld</li>
                <li>Aktiver "Konkurskostnader" for å se static trade-off teorien</li>
                <li>Utforsk de ulike fanene for å se hvordan gjeld påvirker ulike aspekter</li>
              </ol>
            </div>

            <div className="bg-amber-100 p-3 rounded-md">
              <p className="text-xs">
                <strong>Merk:</strong> Dette er en forenkling av virkeligheten. I praksis påvirkes kapitalstruktur av mange andre faktorer som agentkostnader, signaleffekter og markedsimperfeksjoner.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

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

      {/* Key Metrics Display */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Uten gjeld</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <p className="text-muted-foreground">Nettoresultat</p>
                <p className="font-semibold">{formatCurrency(firmData.ebit * (1 - firmData.taxRate / 100))}</p>
              </div>
              <div>
                <p className="text-muted-foreground">ROE</p>
                <p className="font-semibold text-blue-600">{formatPercent((firmData.ebit * (1 - firmData.taxRate / 100)) / firmData.equity * 100)}</p>
              </div>
              <div>
                <p className="text-muted-foreground">EPS</p>
                <p className="font-semibold text-green-600">{((firmData.ebit * (1 - firmData.taxRate / 100)) / firmData.shares).toFixed(2)} kr</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Med gjeld ({formatCurrency(targetDebt)})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <p className="text-muted-foreground">Nettoresultat</p>
                <p className="font-semibold">{formatCurrency(Math.max(0, (firmData.ebit - targetDebt * (firmData.interestRate / 100)) * (1 - firmData.taxRate / 100)))}</p>
              </div>
              <div>
                <p className="text-muted-foreground">ROE</p>
                <p className="font-semibold text-blue-600">{formatPercent((firmData.equity - targetDebt) > 0 ? (Math.max(0, (firmData.ebit - targetDebt * (firmData.interestRate / 100)) * (1 - firmData.taxRate / 100)) / (firmData.equity - targetDebt) * 100) : 0)}</p>
              </div>
              <div>
                <p className="text-muted-foreground">EPS</p>
                <p className="font-semibold text-green-600">{(firmData.shares * ((firmData.equity - targetDebt) / firmData.equity) > 0 ? (Math.max(0, (firmData.ebit - targetDebt * (firmData.interestRate / 100)) * (1 - firmData.taxRate / 100)) / (firmData.shares * ((firmData.equity - targetDebt) / firmData.equity))).toFixed(2) : 0)} kr</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analysis Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Analyse av kapitalstruktur</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Tab buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => {
                  console.log('Clicking leverage');
                  setActiveTab('leverage');
                }}
                className={`px-4 py-2 rounded ${
                  activeTab === 'leverage' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                Finansiell giring
              </button>
              <button
                onClick={() => {
                  console.log('Clicking companyvalue');
                  setActiveTab('companyvalue');
                }}
                className={`px-4 py-2 rounded ${
                  activeTab === 'companyvalue' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                Selskapsverdi
              </button>
              <button
                onClick={() => {
                  console.log('Clicking eps');
                  setActiveTab('eps');
                }}
                className={`px-4 py-2 rounded ${
                  activeTab === 'eps' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                EPS-EBIT
              </button>
              <button
                onClick={() => {
                  console.log('Clicking pie');
                  setActiveTab('pie');
                }}
                className={`px-4 py-2 rounded ${
                  activeTab === 'pie' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                Kakediagram
              </button>
            </div>

            {/* Tab content */}
            <div className="mt-4 p-4 border rounded">
              {activeTab === 'leverage' && (
                <div className="space-y-4">
                  <Card className="bg-amber-50 border-amber-200">
                    <CardHeader>
                      <CardTitle className="text-sm">Finansiell giring i ulike scenarier</CardTitle>
                    </CardHeader>
                    <CardContent>
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
                            <tr className="bg-white">
                              <td className="py-2">Resesjon - Uten gjeld</td>
                              <td className="text-right px-3">0 kr</td>
                              <td className="text-right px-3">{formatCurrency(firmData.ebit * 0.5)}</td>
                              <td className="text-right px-3">{formatCurrency(firmData.ebit * 0.5 * (1 - firmData.taxRate / 100))}</td>
                              <td className="text-right px-3">{formatPercent((firmData.ebit * 0.5 * (1 - firmData.taxRate / 100)) / firmData.equity * 100)}</td>
                              <td className="text-right px-3">{((firmData.ebit * 0.5 * (1 - firmData.taxRate / 100)) / firmData.shares).toFixed(2)} kr</td>
                            </tr>
                            <tr className="bg-amber-50">
                              <td className="py-2">Resesjon - Med gjeld</td>
                              <td className="text-right px-3">{formatCurrency(targetDebt)}</td>
                              <td className="text-right px-3">{formatCurrency(firmData.ebit * 0.5)}</td>
                              <td className="text-right px-3">{formatCurrency(Math.max(0, (firmData.ebit * 0.5 - targetDebt * (firmData.interestRate / 100)) * (1 - firmData.taxRate / 100)))}</td>
                              <td className="text-right px-3">{formatPercent((firmData.equity - targetDebt) > 0 ? Math.max(0, (firmData.ebit * 0.5 - targetDebt * (firmData.interestRate / 100)) * (1 - firmData.taxRate / 100)) / (firmData.equity - targetDebt) * 100 : 0)}</td>
                              <td className="text-right px-3">{(firmData.shares * ((firmData.equity - targetDebt) / firmData.equity) > 0 ? Math.max(0, (firmData.ebit * 0.5 - targetDebt * (firmData.interestRate / 100)) * (1 - firmData.taxRate / 100)) / (firmData.shares * ((firmData.equity - targetDebt) / firmData.equity)) : 0).toFixed(2)} kr</td>
                            </tr>
                            <tr className="bg-white">
                              <td className="py-2">Normal - Uten gjeld</td>
                              <td className="text-right px-3">0 kr</td>
                              <td className="text-right px-3">{formatCurrency(firmData.ebit)}</td>
                              <td className="text-right px-3">{formatCurrency(firmData.ebit * (1 - firmData.taxRate / 100))}</td>
                              <td className="text-right px-3">{formatPercent((firmData.ebit * (1 - firmData.taxRate / 100)) / firmData.equity * 100)}</td>
                              <td className="text-right px-3">{((firmData.ebit * (1 - firmData.taxRate / 100)) / firmData.shares).toFixed(2)} kr</td>
                            </tr>
                            <tr className="bg-amber-50">
                              <td className="py-2">Normal - Med gjeld</td>
                              <td className="text-right px-3">{formatCurrency(targetDebt)}</td>
                              <td className="text-right px-3">{formatCurrency(firmData.ebit)}</td>
                              <td className="text-right px-3">{formatCurrency(Math.max(0, (firmData.ebit - targetDebt * (firmData.interestRate / 100)) * (1 - firmData.taxRate / 100)))}</td>
                              <td className="text-right px-3">{formatPercent((firmData.equity - targetDebt) > 0 ? Math.max(0, (firmData.ebit - targetDebt * (firmData.interestRate / 100)) * (1 - firmData.taxRate / 100)) / (firmData.equity - targetDebt) * 100 : 0)}</td>
                              <td className="text-right px-3">{(firmData.shares * ((firmData.equity - targetDebt) / firmData.equity) > 0 ? Math.max(0, (firmData.ebit - targetDebt * (firmData.interestRate / 100)) * (1 - firmData.taxRate / 100)) / (firmData.shares * ((firmData.equity - targetDebt) / firmData.equity)) : 0).toFixed(2)} kr</td>
                            </tr>
                            <tr className="bg-white">
                              <td className="py-2">Ekspansjon - Uten gjeld</td>
                              <td className="text-right px-3">0 kr</td>
                              <td className="text-right px-3">{formatCurrency(firmData.ebit * 1.5)}</td>
                              <td className="text-right px-3">{formatCurrency(firmData.ebit * 1.5 * (1 - firmData.taxRate / 100))}</td>
                              <td className="text-right px-3">{formatPercent((firmData.ebit * 1.5 * (1 - firmData.taxRate / 100)) / firmData.equity * 100)}</td>
                              <td className="text-right px-3">{((firmData.ebit * 1.5 * (1 - firmData.taxRate / 100)) / firmData.shares).toFixed(2)} kr</td>
                            </tr>
                            <tr className="bg-amber-50">
                              <td className="py-2">Ekspansjon - Med gjeld</td>
                              <td className="text-right px-3">{formatCurrency(targetDebt)}</td>
                              <td className="text-right px-3">{formatCurrency(firmData.ebit * 1.5)}</td>
                              <td className="text-right px-3">{formatCurrency(Math.max(0, (firmData.ebit * 1.5 - targetDebt * (firmData.interestRate / 100)) * (1 - firmData.taxRate / 100)))}</td>
                              <td className="text-right px-3">{formatPercent((firmData.equity - targetDebt) > 0 ? Math.max(0, (firmData.ebit * 1.5 - targetDebt * (firmData.interestRate / 100)) * (1 - firmData.taxRate / 100)) / (firmData.equity - targetDebt) * 100 : 0)}</td>
                              <td className="text-right px-3">{(firmData.shares * ((firmData.equity - targetDebt) / firmData.equity) > 0 ? Math.max(0, (firmData.ebit * 1.5 - targetDebt * (firmData.interestRate / 100)) * (1 - firmData.taxRate / 100)) / (firmData.shares * ((firmData.equity - targetDebt) / firmData.equity)) : 0).toFixed(2)} kr</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-xs text-muted-foreground mt-3">
                        Merk hvordan gjeld forsterker både oppside og nedside - finansiell giring øker risikoen!
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )}
              {activeTab === 'companyvalue' && (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Selskapsverdi</h4>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={valueCurveData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis 
                              dataKey="debt"
                              tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
                            />
                            <YAxis 
                              tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
                            />
                            <Tooltip 
                              formatter={(value: number) => formatCurrency(value)}
                            />
                            <Line
                              type="monotone"
                              dataKey="value"
                              stroke="#8884d8"
                              strokeWidth={2}
                              name="Verdi"
                            />
                            <ReferenceLine 
                              x={targetDebt} 
                              stroke="#666" 
                              strokeDasharray="3 3"
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold mb-2">WACC</h4>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={valueCurveData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis 
                              dataKey="debt"
                              tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
                            />
                            <YAxis 
                              tickFormatter={(value) => `${value.toFixed(0)}%`}
                            />
                            <Tooltip 
                              formatter={(value: number) => `${value.toFixed(2)}%`}
                            />
                            <Line
                              type="monotone"
                              dataKey="wacc"
                              stroke="#ff7300"
                              strokeWidth={2}
                              dot={false}
                              name="WACC"
                            />
                            <ReferenceLine 
                              x={targetDebt} 
                              stroke="#666" 
                              strokeDasharray="3 3"
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
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
                      <LineChart 
                        data={[
                          { ebit: 0, epsNoDebt: 0, epsWithDebt: targetDebt > 0 ? -(targetDebt * (firmData.interestRate / 100) * (1 - firmData.taxRate / 100)) / (firmData.shares * ((firmData.equity - targetDebt) / firmData.equity)) : 0 },
                          { ebit: firmData.ebit * 0.5, epsNoDebt: (firmData.ebit * 0.5 * (1 - firmData.taxRate / 100)) / firmData.shares, epsWithDebt: ((firmData.ebit * 0.5 - targetDebt * (firmData.interestRate / 100)) * (1 - firmData.taxRate / 100)) / (firmData.shares * ((firmData.equity - targetDebt) / firmData.equity)) },
                          { ebit: firmData.ebit, epsNoDebt: (firmData.ebit * (1 - firmData.taxRate / 100)) / firmData.shares, epsWithDebt: ((firmData.ebit - targetDebt * (firmData.interestRate / 100)) * (1 - firmData.taxRate / 100)) / (firmData.shares * ((firmData.equity - targetDebt) / firmData.equity)) },
                          { ebit: firmData.ebit * 1.5, epsNoDebt: (firmData.ebit * 1.5 * (1 - firmData.taxRate / 100)) / firmData.shares, epsWithDebt: ((firmData.ebit * 1.5 - targetDebt * (firmData.interestRate / 100)) * (1 - firmData.taxRate / 100)) / (firmData.shares * ((firmData.equity - targetDebt) / firmData.equity)) },
                          { ebit: firmData.ebit * 2, epsNoDebt: (firmData.ebit * 2 * (1 - firmData.taxRate / 100)) / firmData.shares, epsWithDebt: ((firmData.ebit * 2 - targetDebt * (firmData.interestRate / 100)) * (1 - firmData.taxRate / 100)) / (firmData.shares * ((firmData.equity - targetDebt) / firmData.equity)) }
                        ]}
                        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          dataKey="ebit"
                          tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                        />
                        <YAxis />
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
                        
                        <ReferenceLine 
                          x={firmData.ebit} 
                          stroke="#ff7300" 
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-sm mb-2">Tolkning av EPS-EBIT analysen</h4>
                      <ul className="text-xs space-y-1">
                        <li>• <strong>Krysningspunkt:</strong> Der linjene krysser hverandre er break-even EBIT</li>
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
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-center mb-4">Med gjeld</h4>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsPieChart>
                            <Pie
                              data={[
                                { name: 'Egenkapital', value: Math.max(0, firmData.equity - targetDebt) },
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
                        <p>Total verdi: {formatCurrency(firmData.equity)}</p>
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
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Insights */}
      <Card className="bg-primary/5 border-primary">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">🎯 Sentrale lærdommer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>• <strong>M&M uten skatt:</strong> Kapitalstruktur er irrelevant - verdien av selskapet avhenger kun av driftsinntektene</p>
            <p>• <strong>M&M med skatt:</strong> Gjeld gir skattefordel, teoretisk optimal kapitalstruktur er 100% gjeld</p>
            <p>• <strong>Static trade-off:</strong> Optimal kapitalstruktur balanserer skattefordeler mot konkurskostnader</p>
            <p>• <strong>Finansiell giring:</strong> Øker både forventet avkastning og risiko for egenkapitalen</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CapitalStructureAnalyzerIsolated;