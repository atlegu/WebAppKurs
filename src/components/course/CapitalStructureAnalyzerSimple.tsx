import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle, Calculator } from 'lucide-react';
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

const CapitalStructureAnalyzerSimple = () => {
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
  const calculateWACC = (debt: number, equity: number) => {
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
  };

  // Calculate firm value with taxes
  const calculateFirmValueWithTax = (debt: number) => {
    const unleveredValue = firmData.equity;
    const taxShield = debt * (firmData.taxRate / 100);
    return unleveredValue + taxShield;
  };

  // Calculate financial distress costs
  const calculateDistressCosts = (debt: number) => {
    const debtRatio = debt / (debt + firmData.equity);
    return Math.pow(debtRatio, 2) * firmData.equity * 0.3;
  };

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
                <div>
                  <h3 className="font-bold mb-2">Finansiell giring</h3>
                  <p>Dette er innholdet for finansiell giring.</p>
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
                            <Area
                              type="monotone"
                              dataKey="value"
                              fill="#8884d8"
                              stroke="#8884d8"
                              fillOpacity={0.3}
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
                <div>
                  <h3 className="font-bold mb-2">EPS-EBIT</h3>
                  <p>Dette er innholdet for EPS-EBIT analyse.</p>
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
    </div>
  );
};

export default CapitalStructureAnalyzerSimple;