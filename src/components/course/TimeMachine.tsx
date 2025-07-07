import React, { useState, useEffect, useMemo } from 'react';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, DollarSign, TrendingUp, TrendingDown, Clock, Banknote } from 'lucide-react';

const TimeMachine = () => {
  const [currentYear, setCurrentYear] = useState(2024);
  const [interestRate, setInterestRate] = useState(5);
  const [inflationRate, setInflationRate] = useState(2.5);
  const [initialAmount, setInitialAmount] = useState(1000);
  const [animating, setAnimating] = useState(false);

  const baseYear = 2024;
  const yearRange = { min: 2000, max: 2050 };

  // Calculate values for different scenarios
  const calculations = useMemo(() => {
    const yearDiff = currentYear - baseYear;
    
    // Future/Present value with interest
    const futureValue = yearDiff >= 0 
      ? initialAmount * Math.pow(1 + interestRate/100, yearDiff)
      : initialAmount / Math.pow(1 + interestRate/100, Math.abs(yearDiff));
    
    // Purchasing power (adjusted for inflation)
    const realValue = yearDiff >= 0
      ? initialAmount / Math.pow(1 + inflationRate/100, yearDiff)
      : initialAmount * Math.pow(1 + inflationRate/100, Math.abs(yearDiff));
    
    // Real interest return (nominal value adjusted for inflation)
    const inflationAdjustedValue = yearDiff >= 0
      ? futureValue / Math.pow(1 + inflationRate/100, yearDiff)
      : futureValue * Math.pow(1 + inflationRate/100, Math.abs(yearDiff));

    return {
      futureValue,
      realValue,
      inflationAdjustedValue,
      yearDiff
    };
  }, [currentYear, interestRate, inflationRate, initialAmount, baseYear]);

  // Animation effect when changing years
  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => setAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [currentYear]);

  const formatCurrency = (amount) => {
    return `${Math.round(amount).toLocaleString('no-NO')} kr`;
  };

  const getMoneySize = (value) => {
    const ratio = value / initialAmount;
    if (ratio > 2) return 'text-6xl';
    if (ratio > 1.5) return 'text-5xl';
    if (ratio > 1.2) return 'text-4xl';
    if (ratio > 0.8) return 'text-3xl';
    if (ratio > 0.5) return 'text-2xl';
    return 'text-xl';
  };

  const getMoneyColor = (value) => {
    const ratio = value / initialAmount;
    if (ratio > 1.2) return 'text-green-500';
    if (ratio > 1.0) return 'text-green-400';
    if (ratio > 0.9) return 'text-yellow-500';
    if (ratio > 0.7) return 'text-orange-500';
    return 'text-red-500';
  };

  const scenarios = [
    {
      title: 'Pengene i banken',
      description: 'Med renter, uten inflasjonsjustering',
      value: calculations.futureValue,
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'border-blue-200 bg-blue-50'
    },
    {
      title: 'Kjøpekraft i dag',
      description: 'Kun inflasjonspåvirkning',
      value: calculations.realValue,
      icon: <TrendingDown className="w-5 h-5" />,
      color: 'border-red-200 bg-red-50'
    },
    {
      title: 'Reell verdi',
      description: 'Bankrenter justert for inflasjon',
      value: calculations.inflationAdjustedValue,
      icon: <DollarSign className="w-5 h-5" />,
      color: 'border-green-200 bg-green-50'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Clock className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Pengenes Tidsmaskinen
          </h1>
          <Clock className="w-6 h-6 text-blue-600 scale-x-[-1]" />
        </div>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
          Reis gjennom tid og se hvordan renter og inflasjon påvirker pengenes verdi
        </p>
      </div>

      {/* Control Panel */}
      <Card className="border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
        <CardHeader>
          <CardTitle className="text-center text-lg">Kontrollpanel</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <label className="block text-sm font-medium">
                Startbeløp: {formatCurrency(initialAmount)}
              </label>
              <Slider
                value={[initialAmount]}
                onValueChange={(value) => setInitialAmount(value[0])}
                min={100}
                max={10000}
                step={100}
                className="w-full"
              />
            </div>
            
            <div className="space-y-3">
              <label className="block text-sm font-medium">
                Bankrente: {interestRate}%
              </label>
              <Slider
                value={[interestRate]}
                onValueChange={(value) => setInterestRate(value[0])}
                min={0}
                max={15}
                step={0.5}
                className="w-full"
              />
            </div>
            
            <div className="space-y-3">
              <label className="block text-sm font-medium">
                Inflasjon: {inflationRate}%
              </label>
              <Slider
                value={[inflationRate]}
                onValueChange={(value) => setInflationRate(value[0])}
                min={0}
                max={10}
                step={0.5}
                className="w-full"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Time Machine */}
      <Card className="border-4 border-purple-300 bg-gradient-to-b from-purple-50 to-blue-50">
        <CardContent className="p-8">
          {/* Year selector */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setCurrentYear(Math.max(yearRange.min, currentYear - 1))}
                className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                disabled={currentYear <= yearRange.min}
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {currentYear}
                </div>
                <div className="text-sm text-gray-600">
                  {calculations.yearDiff === 0 && "I dag"}
                  {calculations.yearDiff > 0 && `${calculations.yearDiff} år frem i tid`}
                  {calculations.yearDiff < 0 && `${Math.abs(calculations.yearDiff)} år tilbake i tid`}
                </div>
              </div>
              
              <button
                onClick={() => setCurrentYear(Math.min(yearRange.max, currentYear + 1))}
                className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                disabled={currentYear >= yearRange.max}
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-center">
                Eller velg år direkte:
              </label>
              <Slider
                value={[currentYear]}
                onValueChange={(value) => setCurrentYear(value[0])}
                min={yearRange.min}
                max={yearRange.max}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>{yearRange.min}</span>
                <span>I dag ({baseYear})</span>
                <span>{yearRange.max}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="grid md:grid-cols-3 gap-6">
        {scenarios.map((scenario, index) => (
          <Card key={index} className={`${scenario.color} border-2 transition-all duration-300 ${animating ? 'scale-105' : ''}`}>
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                {scenario.icon}
                <CardTitle className="text-base">{scenario.title}</CardTitle>
              </div>
              <p className="text-sm text-gray-600">{scenario.description}</p>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className={`transition-all duration-300 ${animating ? 'scale-110' : ''}`}>
                <Banknote className={`mx-auto ${getMoneySize(scenario.value)} ${getMoneyColor(scenario.value)} transition-all duration-300`} />
              </div>
              <div className="space-y-2">
                <div className={`text-2xl font-bold ${getMoneyColor(scenario.value)}`}>
                  {formatCurrency(scenario.value)}
                </div>
                <div className="text-sm text-gray-600">
                  {scenario.value > initialAmount ? '+' : ''}{((scenario.value - initialAmount) / initialAmount * 100).toFixed(1)}%
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Educational Content */}
      <Card className="border-2 border-yellow-300 bg-yellow-50">
        <CardHeader>
          <CardTitle className="text-center text-lg text-yellow-800">
            💡 Læringspoenger
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-blue-800">Hva ser du?</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Blå boks:</strong> Pengene vokser med bankrenten</li>
                <li>• <strong>Rød boks:</strong> Kjøpekraften synker med inflasjon</li>
                <li>• <strong>Grønn boks:</strong> Din reelle gevinst/tap</li>
                <li>• Jo lenger frem i tid, desto større forskjeller</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-green-800">Viktige innsikter:</h3>
              <ul className="space-y-2 text-sm">
                <li>• Hvis bankrente &lt; inflasjon = du taper kjøpekraft</li>
                <li>• Jo høyere bankrente, desto bedre beskytter den mot inflasjon</li>
                <li>• Sammensatt rente gir eksponentiell vekst over tid</li>
                <li>• Start tidlig - tid er pengenes beste venn!</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-yellow-300">
            <p className="text-center text-sm text-gray-700">
              <strong>Prøv dette:</strong> Sett bankrente til 2% og inflasjon til 3%. 
              Reis 20 år frem i tid og se hva som skjer med din kjøpekraft!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimeMachine;