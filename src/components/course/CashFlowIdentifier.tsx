import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  AlertCircle, 
  CheckCircle2,
  XCircle,
  Calculator,
  Building,
  Package,
  Receipt,
  Banknote,
  Info,
  RefreshCw
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CashFlowItem {
  id: string;
  description: string;
  amount: number;
  category: 'investment' | 'operating' | 'tax' | 'workingCapital' | 'salvage' | 'irrelevant';
  isInflow: boolean;
  explanation: string;
  year: number;
}

interface DragDropItem {
  id: string;
  description: string;
  isRelevant: boolean;
  explanation: string;
  category: string;
}

const CashFlowIdentifier = () => {
  const [selectedScenario, setSelectedScenario] = useState<'machine' | 'store' | null>(null);
  const [showTaxExample, setShowTaxExample] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, boolean>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // Machine investment scenario
  const machineScenario: CashFlowItem[] = [
    {
      id: 'initial',
      description: 'Kjøp av maskin',
      amount: -2000000,
      category: 'investment',
      isInflow: false,
      explanation: 'Initiell investering - alltid relevant',
      year: 0
    },
    {
      id: 'revenue',
      description: 'Økte salgsinntekter per år',
      amount: 800000,
      category: 'operating',
      isInflow: true,
      explanation: 'Direkte kontantstrøm fra drift',
      year: 1
    },
    {
      id: 'opex',
      description: 'Driftskostnader per år',
      amount: -300000,
      category: 'operating',
      isInflow: false,
      explanation: 'Direkte utbetalinger for drift',
      year: 1
    },
    {
      id: 'depreciation',
      description: 'Avskrivninger per år',
      amount: -400000,
      category: 'tax',
      isInflow: false,
      explanation: 'Ikke kontantstrøm, men påvirker skatt',
      year: 1
    },
    {
      id: 'tax',
      description: 'Skatt på overskudd',
      amount: -22000,
      category: 'tax',
      isInflow: false,
      explanation: 'Faktisk utbetaling basert på skattbart overskudd',
      year: 1
    },
    {
      id: 'salvage',
      description: 'Salgsverdi etter 5 år',
      amount: 400000,
      category: 'salvage',
      isInflow: true,
      explanation: 'Restverdi ved salg',
      year: 5
    }
  ];

  // Drag and drop quiz items
  const dragDropItems: DragDropItem[] = [
    {
      id: 'sunk1',
      description: 'Konsulenthonorar for markedsanalyse (betalt i fjor)',
      isRelevant: false,
      explanation: 'Sunk cost - allerede betalt, kan ikke påvirkes',
      category: 'Sunk cost'
    },
    {
      id: 'financing1',
      description: 'Renter på lån for å finansiere investeringen',
      isRelevant: false,
      explanation: 'Finansieringskostnader holdes utenfor - dekkes av avkastningskravet',
      category: 'Finansiering'
    },
    {
      id: 'opportunity1',
      description: 'Tapt leieinntekt fra bygning som brukes til prosjektet',
      isRelevant: true,
      explanation: 'Alternativkostnad - faktisk tapt kontantstrøm',
      category: 'Alternativkostnad'
    },
    {
      id: 'working1',
      description: 'Økt behov for varelager',
      isRelevant: true,
      explanation: 'Arbeidskapital bindes opp - reell kontantstrøm',
      category: 'Arbeidskapital'
    },
    {
      id: 'allocated1',
      description: 'Andel av konsernets felleskostnader',
      isRelevant: false,
      explanation: 'Kun relevant hvis kostnadene faktisk øker pga prosjektet',
      category: 'Allokerte kostnader'
    },
    {
      id: 'incremental1',
      description: 'Ekstra strømforbruk fra ny produksjon',
      isRelevant: true,
      explanation: 'Inkrementell kostnad - direkte utbetaling',
      category: 'Driftskostnad'
    }
  ];

  const calculateTax = (revenue: number, costs: number, depreciation: number, taxRate: number) => {
    const taxableIncome = revenue - costs - depreciation;
    const tax = Math.max(0, taxableIncome * taxRate);
    return {
      taxableIncome,
      tax,
      cashFlowBeforeTax: revenue - costs,
      cashFlowAfterTax: revenue - costs - tax
    };
  };

  const handleQuizSubmit = () => {
    let correct = 0;
    dragDropItems.forEach(item => {
      if (selectedAnswers[item.id] === item.isRelevant) {
        correct++;
      }
    });
    setQuizScore(correct);
    setShowQuizResults(true);
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setQuizScore(null);
    setShowQuizResults(false);
  };

  const formatCurrency = (value: number) => {
    const absValue = Math.abs(value);
    const formatted = absValue.toLocaleString('no-NO');
    return value < 0 ? `-${formatted} kr` : `${formatted} kr`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-xl font-bold text-primary">
          Kontantstrømmer - Hva teller?
        </h1>
        <p className="text-sm text-muted-foreground">
          Lær å identifisere relevante inn- og utbetalinger for investeringsanalyse
        </p>
      </div>

      {/* Key Principles */}
      <Card className="border-primary">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            Grunnprinsippene for kontantstrømmer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-sm mb-2 text-green-700">✅ Ta med:</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Faktiske inn- og utbetalinger</li>
                  <li>• Inkrementelle kontantstrømmer</li>
                  <li>• Alternativkostnader</li>
                  <li>• Endringer i arbeidskapital</li>
                  <li>• Skatteeffekter</li>
                  <li>• Restverdi/salgsverdi</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-sm mb-2 text-red-700">❌ Ikke ta med:</h4>
                <ul className="space-y-1 text-xs">
                  <li>• Sunk costs (kostnader som allerede er påløpt)</li>
                  <li>• Finansieringskostnader (renter, avdrag)</li>
                  <li>• Regnskapsmessige poster (kun avskrivninger)</li>
                  <li>• Allokerte felleskostnader (hvis ikke øker)</li>
                  <li>• Ikke-kontante poster</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-amber-50 p-3 rounded-lg border border-amber-300">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5" />
                <div className="text-xs">
                  <p className="font-semibold mb-1">Husk hovedregelen:</p>
                  <p>Hvis investeringen fører til at bedriften mottar eller betaler penger, er det en relevant kontantstrøm!</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Scenario */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Eksempel: Maskininvestering</CardTitle>
          <p className="text-xs text-muted-foreground">
            La oss se på et konkret eksempel med alle typer kontantstrømmer
          </p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="timeline" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="timeline">Tidslinje</TabsTrigger>
              <TabsTrigger value="breakdown">Oppstilling</TabsTrigger>
              <TabsTrigger value="tax">Skatteberegning</TabsTrigger>
            </TabsList>
            
            <TabsContent value="timeline" className="space-y-4">
              <div className="relative">
                {/* Timeline */}
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-300"></div>
                
                <div className="relative flex justify-between">
                  {[0, 1, 2, 3, 4, 5].map((year) => {
                    const yearFlows = machineScenario.filter(cf => 
                      cf.year === year || (cf.year === 1 && year > 0 && year < 5)
                    );
                    
                    return (
                      <div key={year} className="flex flex-col items-center">
                        <div className="mb-2 space-y-1">
                          {yearFlows.map(flow => (
                            <div
                              key={`${flow.id}-${year}`}
                              className={`text-xs px-2 py-1 rounded ${
                                flow.isInflow 
                                  ? 'bg-green-100 text-green-700' 
                                  : 'bg-red-100 text-red-700'
                              }`}
                            >
                              {formatCurrency(flow.amount)}
                            </div>
                          ))}
                        </div>
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <div className="mt-1 text-xs font-medium">År {year}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-semibold mb-2">Forklaring:</h4>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1"></div>
                    <div>
                      <span className="font-medium">År 0:</span> Initiell investering på 2 MNOK
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1"></div>
                    <div>
                      <span className="font-medium">År 1-5:</span> Årlige netto kontantstrømmer fra drift
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1"></div>
                    <div>
                      <span className="font-medium">År 5:</span> Salg av maskin gir 400 000 kr
                    </div>
                  </li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="breakdown" className="space-y-4">
              <div className="space-y-3">
                {machineScenario.map((flow) => (
                  <div
                    key={flow.id}
                    className={`p-3 rounded-lg border ${
                      flow.isInflow 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5">
                          {flow.isInflow ? (
                            <TrendingUp className="w-4 h-4 text-green-600" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-red-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h5 className="font-medium text-sm">{flow.description}</h5>
                          <p className="text-xs text-muted-foreground mt-1">
                            {flow.explanation}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-sm">{formatCurrency(flow.amount)}</p>
                        <p className="text-xs text-muted-foreground">
                          {flow.year === 0 ? 'Ved start' : flow.year === 5 ? 'År 5' : 'Per år'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tax" className="space-y-4">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Hvordan avskrivninger påvirker kontantstrøm</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-xs">
                      Avskrivninger er IKKE en kontantstrøm, men påvirker skatten som ER en kontantstrøm:
                    </p>
                    
                    <div className="bg-white p-3 rounded-lg">
                      <h5 className="text-xs font-semibold mb-2">Årlig beregning:</h5>
                      <div className="space-y-1 text-xs font-mono">
                        <div className="flex justify-between">
                          <span>Salgsinntekter:</span>
                          <span>800 000 kr</span>
                        </div>
                        <div className="flex justify-between">
                          <span>- Driftskostnader:</span>
                          <span>300 000 kr</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span>= Kontantstrøm før skatt:</span>
                          <span className="font-bold">500 000 kr</span>
                        </div>
                        <div className="flex justify-between pt-1">
                          <span>- Avskrivninger:</span>
                          <span>400 000 kr</span>
                        </div>
                        <div className="flex justify-between">
                          <span>= Skattbart overskudd:</span>
                          <span>100 000 kr</span>
                        </div>
                        <div className="flex justify-between">
                          <span>× Skattesats (22%):</span>
                          <span>22 000 kr</span>
                        </div>
                        <div className="flex justify-between border-t pt-1">
                          <span className="font-bold">Kontantstrøm etter skatt:</span>
                          <span className="font-bold">478 000 kr</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-amber-100 p-3 rounded-lg">
                      <p className="text-xs">
                        <strong>Merk:</strong> Avskrivninger "skjermer" 400 000 kr fra beskatning, 
                        som sparer bedriften 400 000 × 22% = 88 000 kr i skatt årlig.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Common Pitfalls Quiz */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center justify-between">
            <span>Test: Relevante kontantstrømmer</span>
            {showQuizResults && (
              <Button size="sm" variant="outline" onClick={resetQuiz}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Prøv igjen
              </Button>
            )}
          </CardTitle>
          <p className="text-xs text-muted-foreground">
            Hvilke av disse skal inkluderes i investeringsanalysen?
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {dragDropItems.map((item) => (
              <div
                key={item.id}
                className={`p-3 rounded-lg border ${
                  showQuizResults
                    ? selectedAnswers[item.id] === item.isRelevant
                      ? 'border-green-500 bg-green-50'
                      : selectedAnswers[item.id] !== undefined
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200'
                    : 'border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.description}</p>
                    {showQuizResults && (
                      <p className="text-xs text-muted-foreground mt-2">
                        <span className="font-medium">{item.category}:</span> {item.explanation}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant={selectedAnswers[item.id] === true ? "default" : "outline"}
                      onClick={() => setSelectedAnswers({...selectedAnswers, [item.id]: true})}
                      disabled={showQuizResults}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant={selectedAnswers[item.id] === false ? "default" : "outline"}
                      onClick={() => setSelectedAnswers({...selectedAnswers, [item.id]: false})}
                      disabled={showQuizResults}
                    >
                      <XCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {!showQuizResults ? (
            <Button 
              className="w-full mt-4" 
              onClick={handleQuizSubmit}
              disabled={Object.keys(selectedAnswers).length < dragDropItems.length}
            >
              Sjekk svar
            </Button>
          ) : (
            <div className="mt-4 p-4 bg-primary/5 rounded-lg text-center">
              <p className="text-lg font-semibold">
                Du fikk {quizScore} av {dragDropItems.length} riktige!
              </p>
              {quizScore === dragDropItems.length && (
                <p className="text-sm text-green-600 mt-1">
                  Utmerket! Du forstår hvilke kontantstrømmer som er relevante.
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Working Capital */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Package className="w-4 h-4" />
            Arbeidskapital - Den glemte kontantstrømmen
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm">
              Mange glemmer at økt aktivitet ofte krever mer arbeidskapital:
            </p>
            
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-orange-50 p-3 rounded-lg text-center">
                <Banknote className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                <h5 className="font-medium text-xs">Kundefordringer</h5>
                <p className="text-xs text-muted-foreground mt-1">
                  Kunder betaler senere = bundet kapital
                </p>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg text-center">
                <Package className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <h5 className="font-medium text-xs">Varelager</h5>
                <p className="text-xs text-muted-foreground mt-1">
                  Mer produksjon = større lager
                </p>
              </div>
              
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <Receipt className="w-6 h-6 mx-auto mb-2 text-green-600" />
                <h5 className="font-medium text-xs">Leverandørgjeld</h5>
                <p className="text-xs text-muted-foreground mt-1">
                  Kredittid = frigjort kapital
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs font-mono">
                ΔArbeidskapital = ΔKundefordringer + ΔVarelager - ΔLeverandørgjeld
              </p>
              <p className="text-xs mt-2">
                <strong>Viktig:</strong> Arbeidskapital bindes ved prosjektstart og frigjøres ved slutt!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="bg-primary/5 border-primary">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">🎯 Husk disse reglene</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <p>Kun faktiske inn- og utbetalinger teller</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <p>Avskrivninger påvirker kun skatteberegningen</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <p>Sunk costs er irrelevante - se fremover, ikke bakover</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <p>Finansiering holdes utenfor - dekkes av avkastningskravet</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
              <p>Husk arbeidskapital og restverdi</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CashFlowIdentifier;