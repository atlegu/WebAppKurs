import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, ArrowDown, TrendingDown, TrendingUp } from 'lucide-react';

export const HomemadeDividendIllustration = () => {
  const [scenario, setScenario] = useState<'dividend' | 'no-dividend'>('dividend');
  const [showHomemade, setShowHomemade] = useState(false);

  const initialValue = 1000000; // 1 million kr
  const dividendAmount = 50000; // 50k kr dividend
  const sharesBefore = 10;
  const priceBeforeDividend = 100000;
  const priceAfterDividend = 95000;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Interaktiv demonstrasjon av hjemmelaget utbytte</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={scenario} onValueChange={(v) => { setScenario(v as any); setShowHomemade(false); }}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="dividend">Scenario A: Selskapet betaler utbytte</TabsTrigger>
            <TabsTrigger value="no-dividend">Scenario B: Ingen utbytte</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dividend" className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Før utbytte</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Antall aksjer</p>
                  <p className="text-lg font-bold">{sharesBefore}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Aksjekurs</p>
                  <p className="text-lg font-bold">kr {priceBeforeDividend.toLocaleString()}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-600">Total verdi</p>
                  <p className="text-xl font-bold text-blue-600">kr {initialValue.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="text-gray-400" size={32} />
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Etter utbytte</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Antall aksjer</p>
                  <p className="text-lg font-bold">{sharesBefore}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Aksjekurs</p>
                  <p className="text-lg font-bold flex items-center gap-2">
                    kr {priceAfterDividend.toLocaleString()}
                    <TrendingDown className="text-red-500" size={16} />
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Verdi av aksjer</p>
                  <p className="text-lg">kr {(sharesBefore * priceAfterDividend).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Mottatt utbytte</p>
                  <p className="text-lg text-green-600">+ kr {dividendAmount.toLocaleString()}</p>
                </div>
                <div className="col-span-2 border-t pt-2">
                  <p className="text-sm text-gray-600">Total verdi</p>
                  <p className="text-xl font-bold text-blue-600">kr {initialValue.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold">💡 Investors totale formue er uendret!</p>
              <p className="text-sm mt-1">Utbyttet reduserer aksjekursen tilsvarende, så total verdi forblir kr 1.000.000</p>
            </div>
          </TabsContent>
          
          <TabsContent value="no-dividend" className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Ingen utbytte betalt</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Antall aksjer</p>
                  <p className="text-lg font-bold">{sharesBefore}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Aksjekurs</p>
                  <p className="text-lg font-bold">kr {priceBeforeDividend.toLocaleString()}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-600">Total verdi</p>
                  <p className="text-xl font-bold text-blue-600">kr {initialValue.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {!showHomemade && (
              <div className="text-center">
                <p className="mb-4 text-gray-600">Men hva hvis investoren ønsker kr 50.000 i kontanter?</p>
                <Button onClick={() => setShowHomemade(true)}>
                  Lag hjemmelaget utbytte
                </Button>
              </div>
            )}

            {showHomemade && (
              <>
                <div className="flex justify-center">
                  <ArrowDown className="text-gray-400" size={32} />
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Hjemmelaget utbytte (selg 0,5 aksje)</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Antall aksjer etter salg</p>
                      <p className="text-lg font-bold">9,5</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Aksjekurs</p>
                      <p className="text-lg font-bold">kr {priceBeforeDividend.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Verdi av aksjer</p>
                      <p className="text-lg">kr {(9.5 * priceBeforeDividend).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Kontanter fra salg</p>
                      <p className="text-lg text-green-600">+ kr {dividendAmount.toLocaleString()}</p>
                    </div>
                    <div className="col-span-2 border-t pt-2">
                      <p className="text-sm text-gray-600">Total verdi</p>
                      <p className="text-xl font-bold text-blue-600">kr {initialValue.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="font-semibold">💡 Samme resultat som med utbytte!</p>
                  <p className="text-sm mt-1">Investor kan selv skape ønsket kontantstrøm ved å justere aksjebeholdningen</p>
                </div>
              </>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export const MMAssumptionsChecker = () => {
  const [assumptions, setAssumptions] = useState({
    noTaxes: true,
    noTransactionCosts: true,
    perfectInfo: true,
    rationalInvestors: true,
    noAgencyCosts: true,
    perfectCapitalMarkets: true
  });

  const toggleAssumption = (key: keyof typeof assumptions) => {
    setAssumptions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const allPerfect = Object.values(assumptions).every(v => v);

  const realWorldFactors = {
    noTaxes: "I Norge beskattes utbytte med 35,2% over skjermingsfradrag",
    noTransactionCosts: "Kurtasje og spread gjør hjemmelaget utbytte dyrere",
    perfectInfo: "Ledelsen vet mer enn investorene - utbytte blir signal",
    rationalInvestors: "Mange foretrekker kontantutbytte av psykologiske grunner",
    noAgencyCosts: "Utbytte disiplinerer ledelsen ved å redusere fri kontantstrøm",
    perfectCapitalMarkets: "Små investorer kan ikke låne til samme rente som selskaper"
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>M&M-forutsetninger: Teori vs. virkelighet</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">Klikk på forutsetningene for å se virkeligheten:</p>
          
          {Object.entries(assumptions).map(([key, value]) => {
            const labels = {
              noTaxes: "Ingen skatter",
              noTransactionCosts: "Ingen transaksjonskostnader",
              perfectInfo: "Symmetrisk informasjon",
              rationalInvestors: "Rasjonelle investorer",
              noAgencyCosts: "Ingen agentkostnader",
              perfectCapitalMarkets: "Perfekte kapitalmarkeder"
            };
            
            return (
              <div key={key} className="space-y-2">
                <button
                  onClick={() => toggleAssumption(key as keyof typeof assumptions)}
                  className={`w-full p-3 rounded-lg text-left transition-colors ${
                    value 
                      ? 'bg-green-50 hover:bg-green-100 border border-green-200' 
                      : 'bg-red-50 hover:bg-red-100 border border-red-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{labels[key as keyof typeof labels]}</span>
                    <span className={`text-sm ${value ? 'text-green-600' : 'text-red-600'}`}>
                      {value ? '✓ Perfekt' : '✗ Virkelighet'}
                    </span>
                  </div>
                  {!value && (
                    <p className="text-sm text-gray-600 mt-2">
                      {realWorldFactors[key as keyof typeof realWorldFactors]}
                    </p>
                  )}
                </button>
              </div>
            );
          })}
        </div>
        
        <div className={`mt-6 p-4 rounded-lg ${allPerfect ? 'bg-green-50' : 'bg-orange-50'}`}>
          <p className="font-semibold">
            {allPerfect 
              ? "✓ Med perfekte forutsetninger: Utbyttepolitikk er irrelevant!" 
              : "✗ I virkeligheten: Utbyttepolitikk har betydning!"}
          </p>
          <p className="text-sm mt-1">
            {allPerfect 
              ? "Investorer kan skape hjemmelaget utbytte uten kostnader eller friksjon" 
              : "Markedsimperfeksjoner gjør at utbyttepolitikk påvirker selskapets verdi"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export const DividendIrrelevanceProof = () => {
  const [step, setStep] = useState(0);
  const steps = [
    {
      title: "Utgangspunkt",
      formula: "P_0 = \\text{Aksjekurs før utbytte}",
      value: "P_0 = 100\\,000 \\text{ kr}"
    },
    {
      title: "Utbytte annonseres",
      formula: "D = \\text{Utbytte per aksje}",
      value: "D = 5\\,000 \\text{ kr}"
    },
    {
      title: "Aksjekurs etter utbytte",
      formula: "P_1 = P_0 - D",
      value: "P_1 = 100\\,000 - 5\\,000 = 95\\,000 \\text{ kr}"
    },
    {
      title: "For investor med n aksjer",
      formula: "\\text{Verdi før} = n \\times P_0",
      value: "10 \\times 100\\,000 = 1\\,000\\,000 \\text{ kr}"
    },
    {
      title: "Verdi etter utbytte",
      formula: "\\text{Verdi etter} = n \\times P_1 + n \\times D",
      value: "10 \\times 95\\,000 + 10 \\times 5\\,000"
    },
    {
      title: "Forenkle uttrykket",
      formula: "= n \\times (P_0 - D) + n \\times D",
      value: "= 10 \\times (100\\,000 - 5\\,000) + 10 \\times 5\\,000"
    },
    {
      title: "Endelig resultat",
      formula: "= n \\times P_0",
      value: "= 10 \\times 100\\,000 = 1\\,000\\,000 \\text{ kr}"
    }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Matematisk bevis for utbytteirrelevans</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <Button 
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              variant="outline"
              size="sm"
            >
              Forrige
            </Button>
            <span className="text-sm text-gray-600">
              Steg {step + 1} av {steps.length}
            </span>
            <Button 
              onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
              disabled={step === steps.length - 1}
              variant="outline"
              size="sm"
            >
              Neste
            </Button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg min-h-[200px] flex flex-col justify-center">
            <h4 className="font-semibold mb-4">{steps[step].title}</h4>
            <div className="text-center space-y-4">
              <p className="text-2xl font-mono">
                {steps[step].formula}
              </p>
              <p className="text-xl text-blue-600 font-mono">
                {steps[step].value}
              </p>
            </div>
          </div>

          {step === steps.length - 1 && (
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold">💡 Konklusjon</p>
              <p className="text-sm mt-1">
                Total verdi forblir uendret (n × P₀) uansett om selskapet betaler utbytte eller ikke!
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};