import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

export const BondPricingFormula: React.FC = () => {
  const [principal, setPrincipal] = useState(1000);
  const [couponRate, setCouponRate] = useState(5);
  const [marketRate, setMarketRate] = useState(4);
  const [years, setYears] = useState(3);
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const calculateBondPrice = () => {
    const coupon = principal * (couponRate / 100);
    const market = marketRate / 100;
    let price = 0;
    
    // Calculate present value of coupon payments
    for (let t = 1; t <= years; t++) {
      if (t === years) {
        // Final payment includes principal
        price += (coupon + principal) / Math.pow(1 + market, t);
      } else {
        price += coupon / Math.pow(1 + market, t);
      }
    }
    
    setCalculatedPrice(price);
  };

  useEffect(() => {
    calculateBondPrice();
  }, [principal, couponRate, marketRate, years]);

  return (
    <div className="space-y-6">
      {/* Main Formula */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-slate-800">
            📊 Obligasjonsprising Formel
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-inner">
            <div className="flex items-center justify-center flex-wrap gap-4 text-2xl">
              <span className="font-bold text-slate-800">Pris</span>
              <span className="font-bold text-red-600 text-3xl">=</span>
              
              {/* First term */}
              <div className="bg-blue-500 text-white px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="border-b-2 border-white pb-1 mb-1 text-sm">Kupong</div>
                  <div className="text-xs">(1+r)¹</div>
                </div>
              </div>
              
              <span className="font-bold text-green-600 text-2xl">+</span>
              
              {/* Second term */}
              <div className="bg-blue-500 text-white px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="border-b-2 border-white pb-1 mb-1 text-sm">Kupong</div>
                  <div className="text-xs">(1+r)²</div>
                </div>
              </div>
              
              <span className="font-bold text-green-600 text-2xl">+</span>
              <span className="text-gray-500 text-3xl font-bold">...</span>
              <span className="font-bold text-green-600 text-2xl">+</span>
              
              {/* Final term */}
              <div className="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="border-b-2 border-white pb-1 mb-1 text-sm">Kupong + Pålydende</div>
                  <div className="text-xs">(1+r)ⁿ</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Variable Explanations */}
      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🔍 Forklaring av variablene
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-l-blue-500">
              <div className="font-bold text-blue-600 text-lg">Kupong</div>
              <div className="text-gray-600">Årlig renteutbetaling (Pålydende × Kupongrente)</div>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-l-blue-500">
              <div className="font-bold text-blue-600 text-lg">r</div>
              <div className="text-gray-600">Markedsrente (diskonteringsrente)</div>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-l-blue-500">
              <div className="font-bold text-blue-600 text-lg">n</div>
              <div className="text-gray-600">Antall år til forfall</div>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-l-blue-500">
              <div className="font-bold text-blue-600 text-lg">Pålydende</div>
              <div className="text-gray-600">Hovedstol som betales tilbake ved forfall</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example */}
      <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-l-red-500">
        <CardHeader>
          <CardTitle>📋 Eksempel</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">3-årig obligasjon:</h4>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Pålydende: 1 000 kr</li>
                <li>Kupongrente: 5% → Kupong = 50 kr/år</li>
                <li>Markedsrente: 4%</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold mb-2">Beregning:</p>
              <p className="font-mono text-sm mb-2">
                Pris = 50/(1.04)¹ + 50/(1.04)² + (50+1000)/(1.04)³
              </p>
              <p className="font-mono text-sm">
                Pris = 48.08 + 46.23 + 933.51 = <span className="font-bold text-green-600">1 027.82 kr</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Calculator */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5" />
            🧮 Interaktiv kalkulator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pålydende (kr):
              </label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kupongrente (%):
              </label>
              <input
                type="number"
                value={couponRate}
                onChange={(e) => setCouponRate(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min="0"
                step="0.1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Markedsrente (%):
              </label>
              <input
                type="number"
                value={marketRate}
                onChange={(e) => setMarketRate(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min="0"
                step="0.1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                År til forfall:
              </label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min="1"
                max="30"
              />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">
              Beregnet pris: {calculatedPrice.toFixed(2)} kr
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};