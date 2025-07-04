import React, { useState, useEffect } from 'react';

const GordonGrowthOverlay = ({ isOpen, onClose }) => {
  const [inputs, setInputs] = useState({
    eps: 10,
    roe: 20,
    payoutRatio: 40,
    requiredReturn: 12
  });

  const [results, setResults] = useState({
    retentionRatio: 0,
    growthRate: 0,
    dividendPerShare: 0,
    stockPrice: 0,
    isValid: true
  });

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('no-NO', {
      style: 'currency',
      currency: 'NOK',
      minimumFractionDigits: 2
    }).format(num);
  };

  const updateInput = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const calculateGordonModel = () => {
    const { eps, roe, payoutRatio, requiredReturn } = inputs;
    
    const retentionRatio = 1 - (payoutRatio / 100);
    const growthRate = retentionRatio * (roe / 100);
    const dividendPerShare = eps * (payoutRatio / 100);
    
    let stockPrice = 0;
    let isValid = true;
    
    if (growthRate >= (requiredReturn / 100)) {
      isValid = false;
    } else {
      stockPrice = dividendPerShare / ((requiredReturn / 100) - growthRate);
    }

    setResults({
      retentionRatio,
      growthRate,
      dividendPerShare,
      stockPrice,
      isValid
    });
  };

  useEffect(() => {
    calculateGordonModel();
  }, [inputs]);

  // Close on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Generate comprehensive sensitivity analysis
  const sensitivityData = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(payout => {
    const retention = 1 - (payout / 100);
    const growth = retention * (inputs.roe / 100);
    const dividend = inputs.eps * (payout / 100);
    
    let price = 'Ugyldig';
    let priceNum = 0;
    if (growth < (inputs.requiredReturn / 100)) {
      priceNum = dividend / ((inputs.requiredReturn / 100) - growth);
      price = formatCurrency(priceNum);
    }
    
    return {
      payout,
      retention: (retention * 100).toFixed(1),
      growth: (growth * 100).toFixed(1),
      dividend: formatCurrency(dividend),
      price,
      priceNum,
      isCurrent: Math.abs(payout - inputs.payoutRatio) < 2
    };
  });

  // ROE sensitivity analysis
  const roeSensitivity = [5, 10, 15, 20, 25, 30, 35, 40].map(roe => {
    const retention = results.retentionRatio;
    const growth = retention * (roe / 100);
    const dividend = results.dividendPerShare;
    
    let price = 'Ugyldig';
    if (growth < (inputs.requiredReturn / 100)) {
      const priceNum = dividend / ((inputs.requiredReturn / 100) - growth);
      price = formatCurrency(priceNum);
    }
    
    return {
      roe,
      growth: (growth * 100).toFixed(1),
      price,
      isCurrent: Math.abs(roe - inputs.roe) < 1
    };
  });

  const getInsightText = () => {
    const { payoutRatio, roe } = inputs;
    const { retentionRatio, growthRate } = results;
    
    if (!results.isValid) {
      return `⚠️ KRITISK: Vekstraten (${(growthRate * 100).toFixed(1)}%) er høyere enn avkastningskravet (${inputs.requiredReturn}%)! Dette skaper en "eksplosjonsmodell" som ikke er realistisk. Reduser ROE, øk utbytteandelen, eller øk avkastningskravet.`;
    }
    
    if (payoutRatio > 80) {
      return `🔥 EKSTREM utbyttepolitikk! ${payoutRatio}% utbetales, kun ${(retentionRatio * 100).toFixed(0)}% reinvesteres. Dette gir minimal vekst på ${(growthRate * 100).toFixed(1)}%, men høye kontantutbetalinger nå.`;
    } else if (payoutRatio > 60) {
      return `💰 HØY utbytteandel (${payoutRatio}%) prioriterer kontanter til aksjonærene. Med ROE på ${roe}% gir de resterende ${(retentionRatio * 100).toFixed(0)}% kun ${(growthRate * 100).toFixed(1)}% vekst.`;
    } else if (payoutRatio > 30) {
      return `⚖️ BALANSERT tilnærming: ${payoutRatio}% utbytte gir kontanter nå, mens ${(retentionRatio * 100).toFixed(0)}% reinvestering skaper ${(growthRate * 100).toFixed(1)}% vekst. Med ROE på ${roe}% får du "beste av begge verdener".`;
    } else if (payoutRatio > 5) {
      return `🚀 VEKST-fokusert: Kun ${payoutRatio}% utbetales som utbytte. Med ${(retentionRatio * 100).toFixed(0)}% reinvestering og ROE på ${roe}% oppnås ${(growthRate * 100).toFixed(1)}% vekst - perfekt for langsiktige investorer!`;
    } else {
      return `⚡ SUPER-VEKST: Nesten alt (${(retentionRatio * 100).toFixed(0)}%) reinvesteres! Med ROE på ${roe}% gir dette eksplosiv vekst på ${(growthRate * 100).toFixed(1)}%. Perfekt for høyvekstselskaper i tidlig fase.`;
    }
  };

  const getOptimalStrategy = () => {
    const validPrices = sensitivityData.filter(d => d.priceNum > 0);
    if (validPrices.length === 0) return "Ingen gyldig strategi med nåværende parametre.";
    
    const maxPrice = Math.max(...validPrices.map(d => d.priceNum));
    const optimal = validPrices.find(d => d.priceNum === maxPrice);
    
    return `🎯 OPTIMAL strategi: ${optimal.payout}% utbytte gir høyest aksjepris (${formatCurrency(maxPrice)}). Dette balanserer perfekt mellom kontanter nå (${formatCurrency(inputs.eps * optimal.payout / 100)}) og fremtidig vekst (${optimal.growth}%).`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-[95vw] w-full max-h-[95vh] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-800 to-blue-600 text-white p-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">📈 Gordon Growth Model - Interaktiv Lekeplass</h1>
            <p className="text-blue-100">Eksperimenter med parametrene og se umiddelbare effekter på aksjepris!</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 text-3xl font-bold leading-none"
          >
            ×
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(95vh-120px)]">
          <div className="grid lg:grid-cols-5 gap-0">
            
            {/* Input Section - 2 columns */}
            <div className="lg:col-span-2 bg-gray-50 p-6 border-r border-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
                🎮 Eksperimenter med parametrene
              </h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-blue-800 mb-2">🧪 Eksperimenter-tips:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Øk ROE - se hvordan det påvirker vekst</li>
                  <li>• Reduser utbytte - mer reinvestering = mer vekst</li>
                  <li>• Øk utbytte - mer kontanter nå, mindre vekst</li>
                  <li>• Se hva som skjer når g nærmer seg r!</li>
                </ul>
              </div>

              {/* EPS Input */}
              <div className="mb-6">
                <label className="block font-semibold text-gray-700 mb-2">
                  Fortjeneste per aksje (EPS) - {formatCurrency(inputs.eps)}
                </label>
                <input
                  type="range"
                  value={inputs.eps}
                  onChange={(e) => updateInput('eps', e.target.value)}
                  min="1"
                  max="50"
                  step="0.5"
                  className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>1 kr</span>
                  <span>50 kr</span>
                </div>
              </div>

              {/* ROE Input */}
              <div className="mb-6">
                <label className="block font-semibold text-gray-700 mb-2">
                  Egenkapitalrentabilitet (ROE) - {inputs.roe}%
                </label>
                <input
                  type="range"
                  value={inputs.roe}
                  onChange={(e) => updateInput('roe', e.target.value)}
                  min="5"
                  max="50"
                  step="0.5"
                  className="w-full h-3 bg-green-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>5%</span>
                  <span>50%</span>
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  Hvor effektivt selskapet bruker egenkapitalen
                </div>
              </div>

              {/* Payout Ratio Input */}
              <div className="mb-6">
                <label className="block font-semibold text-gray-700 mb-2">
                  Utbytteandel - {inputs.payoutRatio}% 
                  <span className="text-sm text-gray-600">(Retention: {(100-inputs.payoutRatio)}%)</span>
                </label>
                <input
                  type="range"
                  value={inputs.payoutRatio}
                  onChange={(e) => updateInput('payoutRatio', e.target.value)}
                  min="0"
                  max="100"
                  step="1"
                  className="w-full h-3 bg-yellow-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>0% (Alt reinvesteres)</span>
                  <span>100% (Alt utbetales)</span>
                </div>
              </div>

              {/* Required Return Input */}
              <div className="mb-6">
                <label className="block font-semibold text-gray-700 mb-2">
                  Avkastningskrav (r) - {inputs.requiredReturn}%
                </label>
                <input
                  type="range"
                  value={inputs.requiredReturn}
                  onChange={(e) => updateInput('requiredReturn', e.target.value)}
                  min="5"
                  max="25"
                  step="0.1"
                  className="w-full h-3 bg-red-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>5%</span>
                  <span>25%</span>
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  Hva investorer krever i avkastning
                </div>
              </div>

              {/* Live calculations display */}
              <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">⚡ Live beregninger:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Retention Ratio:</span>
                    <span className="font-mono font-bold">{(results.retentionRatio * 100).toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vekstrate (g):</span>
                    <span className="font-mono font-bold text-green-600">{(results.growthRate * 100).toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dividende (D₁):</span>
                    <span className="font-mono font-bold">{formatCurrency(results.dividendPerShare)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>r - g:</span>
                    <span className={`font-mono font-bold ${results.isValid ? 'text-blue-600' : 'text-red-600'}`}>
                      {((inputs.requiredReturn / 100) - results.growthRate).toFixed(3)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section - 3 columns */}
            <div className="lg:col-span-3 bg-white p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
                📊 Resultater og Innsikter
              </h2>

              {/* Formula and Price Display */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center">
                  <h3 className="text-lg mb-3 opacity-90">Gordon Growth Model</h3>
                  <div className="text-2xl font-bold font-mono mb-2">P = D₁ / (r - g)</div>
                  <div className="text-sm opacity-90">
                    P = {formatCurrency(results.dividendPerShare)} / ({inputs.requiredReturn}% - {(results.growthRate * 100).toFixed(1)}%)
                  </div>
                </div>

                <div className={`p-6 rounded-xl text-center text-white ${results.isValid ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-red-500 to-red-600'}`}>
                  <h3 className="text-lg mb-3 opacity-90">Aksjepris</h3>
                  <div className="text-4xl font-bold mb-2">
                    {results.isValid ? formatCurrency(results.stockPrice) : 'UGYLDIG'}
                  </div>
                  <div className="text-sm opacity-90">
                    {results.isValid ? 'Teoretisk verdi' : 'g ≥ r!'}
                  </div>
                </div>
              </div>

              {/* Insight Box */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-purple-800 mb-3 text-lg">🧠 Smart Analyse</h4>
                <p className="text-purple-700 leading-relaxed mb-4">{getInsightText()}</p>
                <p className="text-purple-600 text-sm font-medium">{getOptimalStrategy()}</p>
              </div>

              {/* Visual Progress Bars */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-gray-800 mb-4 text-lg">📊 Visuell Fordeling</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">💰 Utbytte (kontanter nå)</span>
                      <span className="font-bold">{inputs.payoutRatio}% = {formatCurrency(results.dividendPerShare)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-4 rounded-full transition-all duration-500"
                        style={{ width: `${inputs.payoutRatio}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">🔄 Reinvestering</span>
                      <span className="font-bold">{(results.retentionRatio * 100).toFixed(1)}% = {formatCurrency(inputs.eps * results.retentionRatio)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-green-500 h-4 rounded-full transition-all duration-500"
                        style={{ width: `${results.retentionRatio * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">🚀 Resulterende vekstrate</span>
                      <span className="font-bold">{(results.growthRate * 100).toFixed(1)}% (av max {inputs.roe}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className="bg-gradient-to-r from-blue-400 to-blue-500 h-4 rounded-full transition-all duration-500"
                        style={{ width: `${(results.growthRate * 100) / inputs.roe * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comprehensive Sensitivity Analysis */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Payout Sensitivity */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">🔄 Utbyttepolitikk-analyse</h4>
                  <div className="overflow-y-auto max-h-80">
                    <table className="w-full text-xs">
                      <thead className="sticky top-0">
                        <tr className="bg-blue-500 text-white">
                          <th className="p-2 text-left">Utbytte</th>
                          <th className="p-2 text-left">Vekst</th>
                          <th className="p-2 text-left">Aksjepris</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sensitivityData.map((row, index) => (
                          <tr 
                            key={index}
                            className={`border-b hover:bg-gray-100 ${row.isCurrent ? 'bg-blue-100 font-bold border-blue-300' : ''}`}
                          >
                            <td className="p-2">{row.payout}%</td>
                            <td className="p-2">{row.growth}%</td>
                            <td className="p-2 font-mono">{row.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ROE Sensitivity */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">⚡ ROE-sensitivitet</h4>
                  <div className="overflow-y-auto max-h-80">
                    <table className="w-full text-xs">
                      <thead className="sticky top-0">
                        <tr className="bg-green-500 text-white">
                          <th className="p-2 text-left">ROE</th>
                          <th className="p-2 text-left">Vekst</th>
                          <th className="p-2 text-left">Aksjepris</th>
                        </tr>
                      </thead>
                      <tbody>
                        {roeSensitivity.map((row, index) => (
                          <tr 
                            key={index}
                            className={`border-b hover:bg-gray-100 ${row.isCurrent ? 'bg-green-100 font-bold border-green-300' : ''}`}
                          >
                            <td className="p-2">{row.roe}%</td>
                            <td className="p-2">{row.growth}%</td>
                            <td className="p-2 font-mono">{row.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Key Learning Points */}
              <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-3 text-lg">🎯 Nøkkel-lærepunkter</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">📈 Vekst-faktorer:</h5>
                    <ul className="text-green-600 space-y-1">
                      <li>• Høyere ROE = mer vekst per reinvestert krone</li>
                      <li>• Lavere utbytte = mer penger til reinvestering</li>
                      <li>• g = Retention Ratio × ROE</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">⚖️ Trade-offs:</h5>
                    <ul className="text-green-600 space-y-1">
                      <li>• Mer utbytte nå = mindre vekst senere</li>
                      <li>• g må være &lt; r for at modellen fungerer</li>
                      <li>• Optimal utbytte balanserer begge</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

// Main component with trigger button
const GordonGrowthWithOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        📈 Gordon Growth Model - Interaktiv Lekeplass
      </button>

      <GordonGrowthOverlay 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </div>
  );
};

export default GordonGrowthWithOverlay;