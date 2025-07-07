import React, { useState, useEffect } from 'react';

const AksjesparingKalkulator = () => {
  const [inputs, setInputs] = useState({
    startAmount: 50000,
    monthlyAmount: 5000,
    annualReturn: 7,
    years: 10,
    taxRate: 22
  });

  const [results, setResults] = useState({
    totalValue: 0,
    totalPaid: 0,
    totalGain: 0,
    totalTax: 0,
    gainAfterTax: 0,
    finalValue: 0,
    paidPercent: 0,
    returnPercent: 0,
    timeline: []
  });

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('no-NO', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num);
  };

  const updateInput = (field: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const calculateSavings = () => {
    const { startAmount, monthlyAmount, annualReturn, years, taxRate } = inputs;
    
    const monthlyReturn = (annualReturn / 100) / 12;
    const months = years * 12;

    // Calculate future value with compound interest
    let totalValue = startAmount * Math.pow(1 + monthlyReturn, months);
    
    // Add monthly payments with compound interest
    if (monthlyReturn > 0) {
      totalValue += monthlyAmount * ((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn);
    } else {
      totalValue += monthlyAmount * months;
    }

    const totalPaid = startAmount + (monthlyAmount * months);
    const totalGainBeforeTax = totalValue - totalPaid;
    const totalTax = totalGainBeforeTax * (taxRate / 100);
    const totalGainAfterTax = totalGainBeforeTax - totalTax;
    const finalValue = totalPaid + totalGainAfterTax;

    // Calculate percentages
    const paidPercent = (totalPaid / finalValue) * 100;
    const returnPercent = (totalGainAfterTax / finalValue) * 100;

    // Generate timeline
    const timeline = [];
    for (let year = 1; year <= Math.min(years, 10); year++) {
      const yearMonths = year * 12;
      let yearValue = startAmount * Math.pow(1 + monthlyReturn, yearMonths);
      
      if (monthlyReturn > 0) {
        yearValue += monthlyAmount * ((Math.pow(1 + monthlyReturn, yearMonths) - 1) / monthlyReturn);
      } else {
        yearValue += monthlyAmount * yearMonths;
      }

      const yearTotalPaid = startAmount + (monthlyAmount * yearMonths);
      const yearGain = yearValue - yearTotalPaid;
      const yearTax = yearGain * (taxRate / 100);
      const yearFinalValue = yearTotalPaid + yearGain - yearTax;

      timeline.push({
        year,
        value: yearFinalValue
      });
    }

    setResults({
      totalValue,
      totalPaid,
      totalGain: totalGainBeforeTax,
      totalTax,
      gainAfterTax: totalGainAfterTax,
      finalValue,
      paidPercent,
      returnPercent,
      timeline
    });
  };

  useEffect(() => {
    calculateSavings();
  }, [inputs]);

  const InputGroup = ({ label, field, suffix, min = 0, max = 100, step = 1 }: {
    label: string;
    field: string;
    suffix: string;
    min?: number;
    max?: number;
    step?: number;
  }) => (
    <div className="mb-6">
      <label className="block font-semibold text-slate-700 mb-2 text-lg">
        {label}
      </label>
      <div className="relative">
        <input
          type="number"
          value={inputs[field as keyof typeof inputs]}
          onChange={(e) => updateInput(field, e.target.value)}
          min={min}
          max={max}
          step={step}
          className="w-full p-4 pr-12 border-2 border-slate-300 rounded-xl text-lg transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none bg-white"
        />
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-500 font-semibold pointer-events-none">
          {suffix}
        </span>
      </div>
      <div className="mt-3">
        <input
          type="range"
          value={inputs[field as keyof typeof inputs]}
          onChange={(e) => updateInput(field, e.target.value)}
          min={min}
          max={max}
          step={step}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
        />
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-blue-600 text-white p-10 text-center">
        <h1 className="text-5xl font-bold mb-3">📊 Aksjesparingskalkulator</h1>
        <p className="text-xl opacity-90">Beregn avkastningen på dine aksjeinvesteringer over tid</p>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
        {/* Input Section */}
        <div className="p-10 bg-slate-50 border-r border-slate-200">
          <h2 className="text-2xl font-bold text-slate-700 mb-8 border-b-4 border-blue-500 pb-3">
            💰 Dine Investeringsparametere
          </h2>

          <InputGroup
            label="Startbeløp"
            field="startAmount"
            suffix="kr"
            min={0}
            max={500000}
            step={1000}
          />

          <InputGroup
            label="Månedlig sparing"
            field="monthlyAmount"
            suffix="kr"
            min={0}
            max={20000}
            step={100}
          />

          <InputGroup
            label="Forventet årlig avkastning"
            field="annualReturn"
            suffix="%"
            min={0}
            max={15}
            step={0.1}
          />

          <InputGroup
            label="Spareperiode"
            field="years"
            suffix="år"
            min={1}
            max={50}
            step={1}
          />

          <InputGroup
            label="Skattesats på avkastning"
            field="taxRate"
            suffix="%"
            min={0}
            max={50}
            step={0.1}
          />
        </div>

        {/* Results Section */}
        <div className="p-10 bg-white">
          <h2 className="text-2xl font-bold text-slate-700 mb-8 border-b-4 border-blue-500 pb-3">
            📈 Dine Resultater
          </h2>

          {/* Main Result Card */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-2xl mb-6 text-center shadow-lg">
            <h3 className="text-xl mb-3 opacity-90">
              Total verdi etter {inputs.years} år
            </h3>
            <div className="text-4xl font-bold">
              kr {formatNumber(results.finalValue)}
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 p-5 rounded-xl text-center border-l-4 border-blue-500">
              <h4 className="text-sm text-slate-600 font-semibold uppercase tracking-wide mb-2">
                Totalt innbetalt
              </h4>
              <div className="text-2xl font-bold text-slate-700">
                kr {formatNumber(results.totalPaid)}
              </div>
            </div>
            <div className="bg-slate-50 p-5 rounded-xl text-center border-l-4 border-blue-500">
              <h4 className="text-sm text-slate-600 font-semibold uppercase tracking-wide mb-2">
                Gevinst før skatt
              </h4>
              <div className="text-2xl font-bold text-slate-700">
                kr {formatNumber(results.totalGain)}
              </div>
            </div>
            <div className="bg-slate-50 p-5 rounded-xl text-center border-l-4 border-blue-500">
              <h4 className="text-sm text-slate-600 font-semibold uppercase tracking-wide mb-2">
                Skatt på gevinst
              </h4>
              <div className="text-2xl font-bold text-slate-700">
                kr {formatNumber(results.totalTax)}
              </div>
            </div>
            <div className="bg-slate-50 p-5 rounded-xl text-center border-l-4 border-blue-500">
              <h4 className="text-sm text-slate-600 font-semibold uppercase tracking-wide mb-2">
                Gevinst etter skatt
              </h4>
              <div className="text-2xl font-bold text-slate-700">
                kr {formatNumber(results.gainAfterTax)}
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-slate-50 rounded-xl p-6 mb-6">
            <div className="text-lg font-semibold text-slate-700 mb-4">
              Fordeling av total verdi
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-24 text-sm text-slate-600 font-medium">Innbetalt</div>
                <div className="flex-1 mx-4 h-6 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-700"
                    style={{ width: `${results.paidPercent}%` }}
                  ></div>
                </div>
                <div className="w-16 text-right font-semibold text-slate-700">
                  {Math.round(results.paidPercent)}%
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-24 text-sm text-slate-600 font-medium">Avkastning</div>
                <div className="flex-1 mx-4 h-6 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-700"
                    style={{ width: `${results.returnPercent}%` }}
                  ></div>
                </div>
                <div className="w-16 text-right font-semibold text-slate-700">
                  {Math.round(results.returnPercent)}%
                </div>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl mb-6">
            <h4 className="text-lg font-semibold mb-3">💡 Om aksjesparing</h4>
            <p className="opacity-90 leading-relaxed">
              Aksjer gir historisk sett høyere avkastning enn obligasjoner, men med høyere risiko og volatilitet. 
              Langsiktig aksjesparing har vist seg å være en av de beste måtene å bygge formue på.
            </p>
          </div>

          {/* Timeline */}
          <div>
            <div className="text-lg font-semibold text-slate-700 mb-4">
              Verdeutvikling over tid
            </div>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {results.timeline.map((item: any) => (
                <div 
                  key={item.year}
                  className="flex justify-between items-center p-3 bg-white rounded-lg border-l-4 border-blue-500 shadow-sm"
                >
                  <span className="font-semibold text-slate-700">År {item.year}</span>
                  <span className="font-bold text-blue-600">kr {formatNumber(item.value)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default AksjesparingKalkulator;