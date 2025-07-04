import React, { useState, useEffect } from 'react';

const GordonGrowthOverlay = ({ isOpen, onClose }) => {
  const [dividendCurrent, setDividendCurrent] = useState('');
  const [growthRate, setGrowthRate] = useState('');
  const [requiredReturn, setRequiredReturn] = useState('');
  const [result, setResult] = useState(null);

  const calculateGordonGrowth = () => {
    const D0 = parseFloat(dividendCurrent);
    const g = parseFloat(growthRate) / 100;
    const r = parseFloat(requiredReturn) / 100;

    if (isNaN(D0) || isNaN(g) || isNaN(r)) {
      alert('Vennligst fyll ut alle felt med gyldige tall');
      return;
    }

    if (r <= g) {
      alert('Avkastningskravet må være høyere enn vekstrate');
      return;
    }

    const D1 = D0 * (1 + g);
    const price = D1 / (r - g);

    setResult({
      nextDividend: D1,
      stockPrice: price
    });
  };

  const resetCalculator = () => {
    setDividendCurrent('');
    setGrowthRate('');
    setRequiredReturn('');
    setResult(null);
  };

  // Close on Escape key
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

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-800 to-blue-600 text-white p-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">📈 Gordon Growth Model</h1>
            <p className="text-blue-100">Beregn aksjeverdien basert på utbytte og vekst</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 text-3xl font-bold leading-none"
          >
            ×
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Formula Explanation */}
          <div className="p-6 bg-gray-50 border-b">
            <h3 className="font-semibold text-gray-700 mb-2">Formelen:</h3>
            <div className="bg-white p-4 rounded border text-center">
              <span className="text-lg font-mono">P = D₁ / (r - g)</span>
            </div>
            <div className="text-sm text-gray-600 mt-2">
              <p><strong>P</strong> = Aksjepris</p>
              <p><strong>D₁</strong> = Neste års utbytte</p>
              <p><strong>r</strong> = Avkastningskrav</p>
              <p><strong>g</strong> = Vekstrate for utbytte</p>
            </div>
          </div>

          {/* Calculator */}
          <div className="p-6">
            <div className="grid gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nåværende utbytte (D₀) - NOK
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={dividendCurrent}
                  onChange={(e) => setDividendCurrent(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="F.eks. 5.50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Forventet vekstrate (g) - %
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={growthRate}
                  onChange={(e) => setGrowthRate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="F.eks. 3.5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Avkastningskrav (r) - %
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={requiredReturn}
                  onChange={(e) => setRequiredReturn(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="F.eks. 8.0"
                />
              </div>
            </div>

            <div className="flex gap-3 mb-6">
              <button
                onClick={calculateGordonGrowth}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium"
              >
                🧮 Beregn Aksjepris
              </button>
              <button
                onClick={resetCalculator}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 font-medium"
              >
                🔄 Reset
              </button>
            </div>

            {/* Results */}
            {result && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-3">📊 Resultater:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded border">
                    <div className="text-sm text-gray-600">Neste års utbytte (D₁)</div>
                    <div className="text-xl font-bold text-green-700">
                      {result.nextDividend.toFixed(2)} NOK
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <div className="text-sm text-gray-600">Beregnet aksjepris</div>
                    <div className="text-xl font-bold text-green-700">
                      {result.stockPrice.toFixed(2)} NOK
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component that includes trigger button and overlay
const GordonGrowthWithOverlay = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={() => setIsCalculatorOpen(true)}
        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        📈 Gordon Growth Kalkulator
      </button>

      {/* Calculator Overlay */}
      <GordonGrowthOverlay 
        isOpen={isCalculatorOpen} 
        onClose={() => setIsCalculatorOpen(false)} 
      />
    </div>
  );
};

export default GordonGrowthWithOverlay;