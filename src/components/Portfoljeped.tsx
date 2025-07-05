import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Scatter } from 'recharts';

const Portfoljeped = () => {
  const [stockWeight, setStockWeight] = useState(50);
  const [correlation, setCorrelation] = useState(0.2);
  const [showEfficient, setShowEfficient] = useState(true);
  const [activeCorrelation, setActiveCorrelation] = useState(0.2);

  // Asset characteristics (from your presentation)
  const assets = {
    stocks: { return: 11.0, risk: 14.3 },
    bonds: { return: 7.0, risk: 8.2 }
  };

  // Calculate portfolio metrics
  const calculatePortfolio = (stockPct, correlation) => {
    const w1 = stockPct / 100;
    const w2 = 1 - w1;
    
    const expectedReturn = w1 * assets.stocks.return + w2 * assets.bonds.return;
    
    const variance = Math.pow(w1 * assets.stocks.risk, 2) + 
                    Math.pow(w2 * assets.bonds.risk, 2) + 
                    2 * w1 * w2 * assets.stocks.risk * assets.bonds.risk * correlation;
    
    const risk = Math.sqrt(variance);
    
    return { return: expectedReturn, risk: risk };
  };

  // Generate efficient frontier data
  const generateEfficientFrontier = (correlation) => {
    const data = [];
    for (let i = 0; i <= 100; i += 5) {
      const portfolio = calculatePortfolio(i, correlation);
      data.push({
        stockWeight: i,
        risk: portfolio.risk,
        return: portfolio.return,
        label: `${i}% aksjer`
      });
    }
    return data;
  };

  // Current portfolio data
  const currentPortfolio = useMemo(() => 
    calculatePortfolio(stockWeight, correlation), 
    [stockWeight, correlation]
  );

  // Efficient frontier data for different correlations
  const frontierData = useMemo(() => ({
    current: generateEfficientFrontier(correlation),
    perfect: generateEfficientFrontier(1.0),
    negative: generateEfficientFrontier(-1.0),
    zero: generateEfficientFrontier(0.0)
  }), [correlation]);

  // Data for the detailed table
  const tableData = useMemo(() => {
    const data = [];
    for (let i = 0; i <= 100; i += 5) {
      const portfolio = calculatePortfolio(i, correlation);
      data.push({
        stockPct: i,
        bondPct: 100 - i,
        risk: portfolio.risk.toFixed(1),
        return: portfolio.return.toFixed(1)
      });
    }
    return data;
  }, [correlation]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="font-semibold">{`${data.stockWeight}% aksjer, ${100-data.stockWeight}% obligasjoner`}</p>
          <p className="text-blue-600">{`Risiko: ${data.risk.toFixed(1)}%`}</p>
          <p className="text-green-600">{`Avkastning: ${data.return.toFixed(1)}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-lg shadow-lg mb-6">
        <h1 className="text-3xl font-bold text-center">Effisiente Porteføljer - Risiko og Avkastning</h1>
        <p className="text-center mt-2 text-yellow-100">Utforsk sammenhengen mellom risiko, avkastning og korrelasjon</p>
      </div>

      {/* Controls */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Porteføljesammensetning</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Andel aksjer: {stockWeight}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={stockWeight}
                onChange={(e) => setStockWeight(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>0% (kun obligasjoner)</span>
                <span>100% (kun aksjer)</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-blue-50 p-3 rounded">
                <div className="text-sm text-gray-600">Aksjer</div>
                <div className="font-semibold text-blue-600">{stockWeight}%</div>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <div className="text-sm text-gray-600">Obligasjoner</div>
                <div className="font-semibold text-green-600">{100 - stockWeight}%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Korrelasjon og Resultater</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Korrelasjon (ρ): {correlation.toFixed(1)}
              </label>
              <input
                type="range"
                min="-1"
                max="1"
                step="0.1"
                value={correlation}
                onChange={(e) => setCorrelation(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>-1.0 (perfekt negativ)</span>
                <span>+1.0 (perfekt positiv)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-red-50 p-3 rounded">
                <div className="text-sm text-gray-600">Risiko (σ)</div>
                <div className="font-semibold text-red-600">{currentPortfolio.risk.toFixed(1)}%</div>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <div className="text-sm text-gray-600">Forventet avkastning</div>
                <div className="font-semibold text-green-600">{currentPortfolio.return.toFixed(1)}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visualization */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Risiko-Avkastning Diagram</h3>
          <div className="space-x-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={showEfficient}
                onChange={(e) => setShowEfficient(e.target.checked)}
                className="mr-2"
              />
              <span className="text-sm">Vis forskjellige korrelasjoner</span>
            </label>
          </div>
        </div>

        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                type="number" 
                dataKey="risk" 
                domain={['dataMin - 1', 'dataMax + 1']}
                label={{ value: 'Risiko (standardavvik) %', position: 'insideBottom', offset: -10 }}
              />
              <YAxis 
                type="number" 
                dataKey="return" 
                domain={['dataMin - 0.5', 'dataMax + 0.5']}
                label={{ value: 'Forventet avkastning %', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip content={<CustomTooltip />} />
              
              {/* Linear combination line (no diversification benefit) */}
              <Line
                type="linear"
                dataKey="return"
                data={[
                  { risk: assets.bonds.risk, return: assets.bonds.return },
                  { risk: assets.stocks.risk, return: assets.stocks.return }
                ]}
                stroke="#fbbf24"
                strokeWidth={4}
                strokeDasharray="8 4"
                dot={false}
                connectNulls={true}
                name="Lineær kombinasjonslinje"
              />
              
              {/* Efficient frontier for current correlation */}
              <Line
                type="monotone"
                dataKey="return"
                data={frontierData.current}
                stroke="#2563eb"
                strokeWidth={3}
                dot={false}
                name={`Effisient frontier (ρ = ${correlation.toFixed(1)})`}
              />
              
              {/* Different correlation curves */}
              {showEfficient && (
                <>
                  <Line
                    type="monotone"
                    dataKey="return"
                    data={frontierData.perfect}
                    stroke="#dc2626"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={false}
                    name="ρ = 1.0"
                  />
                  <Line
                    type="monotone"
                    dataKey="return"
                    data={frontierData.negative}
                    stroke="#059669"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={false}
                    name="ρ = -1.0"
                  />
                  <Line
                    type="monotone"
                    dataKey="return"
                    data={frontierData.zero}
                    stroke="#7c2d12"
                    strokeWidth={2}
                    strokeDasharray="2 2"
                    dot={false}
                    name="ρ = 0.0"
                  />
                </>
              )}
              
              {/* Individual assets as scatter points */}
              <Scatter 
                data={[
                  { risk: assets.bonds.risk, return: assets.bonds.return, name: '100% Obligasjoner' }
                ]} 
                fill="#ef4444"
              />
              <Scatter 
                data={[
                  { risk: assets.stocks.risk, return: assets.stocks.return, name: '100% Aksjer' }
                ]} 
                fill="#3b82f6"
              />
              
              {/* Current portfolio point */}
              <Scatter 
                data={[{ 
                  risk: currentPortfolio.risk, 
                  return: currentPortfolio.return, 
                  name: 'Din portefølje' 
                }]} 
                fill="#fbbf24"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-600 rounded"></div>
            <span>Effisient frontier (ρ = {correlation.toFixed(1)})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 bg-yellow-400" style={{borderTop: '4px dashed'}}></div>
            <span>Lineær kombinasjonslinje (uten diversifisering)</span>
          </div>
          {showEfficient && (
            <>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-red-600" style={{borderTop: '2px dashed'}}></div>
                <span>Perfekt korrelasjon (ρ = 1.0)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-green-600" style={{borderTop: '2px dashed'}}></div>
                <span>Perfekt negativ korrelasjon (ρ = -1.0)</span>
              </div>
            </>
          )}
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
            <span>Din portefølje ({stockWeight}% aksjer)</span>
          </div>
        </div>
      </div>

      {/* Educational content */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Nøkkelkonsepter</h3>
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-blue-50 rounded">
              <strong className="text-blue-800">Effisient portefølje:</strong> En portefølje som gir høyest mulig avkastning for et gitt risikonivå.
            </div>
            <div className="p-3 bg-green-50 rounded">
              <strong className="text-green-800">Diversifisering:</strong> Å spre investeringer reduserer risiko uten å nødvendigvis redusere avkastning. 
              Området mellom den gule linjen og den blå kurven viser diversifiseringsgevinsten!
            </div>
            <div className="p-3 bg-red-50 rounded">
              <strong className="text-red-800">Korrelasjon:</strong> Måler hvor sterkt to aktivaklasser beveger seg sammen. Lavere korrelasjon gir bedre diversifisering.
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Korrelasjonens Effekt</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <span>ρ = +1.0:</span>
              <span className="text-red-600 font-medium">Ingen risikoreduksjon</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <span>ρ = 0.0:</span>
              <span className="text-yellow-600 font-medium">Moderat risikoreduksjon</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <span>ρ = -1.0:</span>
              <span className="text-green-600 font-medium">Maksimal risikoreduksjon</span>
            </div>
            <div className="mt-3 p-3 bg-yellow-50 rounded">
              <strong>Tips:</strong> Den gule stiplede linjen viser den lineære kombinasjonen av aktivaklassene (uten diversifiseringsgevinst). 
              Den blå kurven viser det effisiente settet - hvor mye bedre du kan gjøre det med riktig diversifisering!
            </div>
          </div>
        </div>
      </div>

      {/* Data table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Porteføljedata (ρ = {correlation.toFixed(1)})
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">% Aksjer</th>
                <th className="px-4 py-2 text-left">% Obligasjoner</th>
                <th className="px-4 py-2 text-left">Risiko (%)</th>
                <th className="px-4 py-2 text-left">Avkastning (%)</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr 
                  key={index} 
                  className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} 
                             ${row.stockPct === stockWeight ? 'bg-yellow-100 font-semibold' : ''}`}
                >
                  <td className="px-4 py-2">{row.stockPct}</td>
                  <td className="px-4 py-2">{row.bondPct}</td>
                  <td className="px-4 py-2">{row.risk}</td>
                  <td className="px-4 py-2">{row.return}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Portfoljeped;