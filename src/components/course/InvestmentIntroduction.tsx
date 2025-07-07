import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Car, 
  Home, 
  Factory, 
  Laptop,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Calculator
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface InvestmentExample {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  initialCost: number;
  timeHorizon: string;
  expectedReturn: string;
  category: 'personal' | 'business';
}

const InvestmentIntroduction = () => {
  const [selectedExample, setSelectedExample] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const investmentExamples: InvestmentExample[] = [
    {
      id: 'education',
      title: 'Utdanning',
      icon: <GraduationCap className="w-6 h-6" />,
      description: 'Investere i en mastergrad',
      initialCost: 200000,
      timeHorizon: '2 år studie + 40 år karriere',
      expectedReturn: 'Høyere lønn, bedre karrieremuligheter',
      category: 'personal'
    },
    {
      id: 'car',
      title: 'Bil',
      icon: <Car className="w-6 h-6" />,
      description: 'Kjøpe bil vs. leasing',
      initialCost: 400000,
      timeHorizon: '5-10 år',
      expectedReturn: 'Transportverdi, eventuell videresalgsverdi',
      category: 'personal'
    },
    {
      id: 'apartment',
      title: 'Bolig',
      icon: <Home className="w-6 h-6" />,
      description: 'Kjøpe vs. leie leilighet',
      initialCost: 3000000,
      timeHorizon: '10-30 år',
      expectedReturn: 'Boligverdi, sparte leiekostnader',
      category: 'personal'
    },
    {
      id: 'factory',
      title: 'Fabrikk',
      icon: <Factory className="w-6 h-6" />,
      description: 'Utvide produksjonskapasitet',
      initialCost: 10000000,
      timeHorizon: '15-20 år',
      expectedReturn: 'Økte salgsinntekter, stordriftsfordeler',
      category: 'business'
    },
    {
      id: 'software',
      title: 'IT-system',
      icon: <Laptop className="w-6 h-6" />,
      description: 'Nytt ERP-system',
      initialCost: 2000000,
      timeHorizon: '5-7 år',
      expectedReturn: 'Reduserte kostnader, bedre beslutninger',
      category: 'business'
    },
    {
      id: 'solar',
      title: 'Solceller',
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Installere solcellepanel',
      initialCost: 150000,
      timeHorizon: '20-25 år',
      expectedReturn: 'Lavere strømregning, miljøgevinst',
      category: 'business'
    }
  ];

  const quizQuestions = [
    {
      id: 1,
      question: "Hvilke av følgende er eksempler på investeringer?",
      options: [
        "Kjøpe aksjer i Equinor",
        "Betale husleie denne måneden",
        "Ta videreutdanning",
        "Både A og C"
      ],
      correct: 3,
      explanation: "Investeringer innebærer å gi avkall på noe i dag for å få noe mer tilbake i fremtiden. Både aksjer og utdanning er investeringer."
    },
    {
      id: 2,
      question: "Hva kjennetegner en investering?",
      options: [
        "Alltid garantert positiv avkastning",
        "Kostnader nå, mulige inntekter senere",
        "Kun relevant for bedrifter",
        "Må være over 1 million kroner"
      ],
      correct: 1,
      explanation: "En investering kjennetegnes av at du ofrer noe i dag (penger, tid) for potensielle fremtidige fordeler."
    },
    {
      id: 3,
      question: "Hvorfor trenger vi investeringsanalyse?",
      options: [
        "For å garantere suksess",
        "For å sammenligne alternativer objektivt",
        "Fordi loven krever det",
        "Kun for store prosjekter"
      ],
      correct: 1,
      explanation: "Investeringsanalyse hjelper oss å sammenligne ulike alternativer på en objektiv måte ved å se på kontantstrømmer over tid."
    }
  ];

  const handleQuizSubmit = () => {
    setShowResults(true);
  };

  const calculateQuizScore = () => {
    let correct = 0;
    quizQuestions.forEach((q) => {
      if (parseInt(quizAnswers[q.id]) === q.correct) {
        correct++;
      }
    });
    return correct;
  };

  const selectedExampleData = investmentExamples.find(e => e.id === selectedExample);

  const formatCurrency = (value: number) => {
    return `${value.toLocaleString('no-NO')} kr`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-xl font-bold text-primary">
          Hva er en investering?
        </h1>
        <p className="text-sm text-muted-foreground">
          Fra hverdagsvalg til milliardbeslutninger - alt handler om tid og penger
        </p>
      </div>

      {/* Definition Card */}
      <Card className="border-primary">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            Grunnleggende definisjon
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="text-sm font-semibold mb-2">En investering er:</p>
              <p className="text-sm">
                Å gi avkall på noe av verdi i dag (vanligvis penger) for å oppnå noe av større verdi i fremtiden.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-3 text-xs">
              <div className="bg-red-50 p-3 rounded-lg">
                <p className="font-semibold text-red-700 mb-1">Kostnad nå</p>
                <p>Penger, tid eller ressurser du bruker i dag</p>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg">
                <p className="font-semibold text-yellow-700 mb-1">Usikkerhet</p>
                <p>Fremtidige inntekter er aldri 100% garantert</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="font-semibold text-green-700 mb-1">Forventet gevinst</p>
                <p>Høyere verdi tilbake over tid</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Investment Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Eksempler på investeringer</CardTitle>
          <p className="text-xs text-muted-foreground">
            Klikk på et eksempel for å se detaljer
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold mb-2">Personlige investeringer</h4>
              <div className="grid md:grid-cols-3 gap-3">
                {investmentExamples.filter(e => e.category === 'personal').map((example) => (
                  <button
                    key={example.id}
                    onClick={() => setSelectedExample(example.id)}
                    className={`p-4 rounded-lg border transition-all text-left ${
                      selectedExample === example.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-primary">{example.icon}</div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-sm">{example.title}</h5>
                        <p className="text-xs text-muted-foreground">{example.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-2">Bedriftsinvesteringer</h4>
              <div className="grid md:grid-cols-3 gap-3">
                {investmentExamples.filter(e => e.category === 'business').map((example) => (
                  <button
                    key={example.id}
                    onClick={() => setSelectedExample(example.id)}
                    className={`p-4 rounded-lg border transition-all text-left ${
                      selectedExample === example.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-primary">{example.icon}</div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-sm">{example.title}</h5>
                        <p className="text-xs text-muted-foreground">{example.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {selectedExampleData && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                {selectedExampleData.icon}
                {selectedExampleData.title}: {selectedExampleData.description}
              </h4>
              <div className="grid md:grid-cols-3 gap-3 text-xs">
                <div>
                  <p className="font-medium text-gray-600">Initiell kostnad:</p>
                  <p className="font-semibold">{formatCurrency(selectedExampleData.initialCost)}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-600">Tidshorisont:</p>
                  <p className="font-semibold">{selectedExampleData.timeHorizon}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-600">Forventet avkastning:</p>
                  <p className="font-semibold">{selectedExampleData.expectedReturn}</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Why Investment Analysis */}
      <Card className="bg-amber-50 border-amber-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            Hvorfor trenger vi investeringsanalyse?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm">
              Uten analyse blir investeringsbeslutninger bare synsing og gambling. 
              Investeringsanalyse gir oss verktøy til å:
            </p>
            
            <div className="space-y-2">
              {[
                "Sammenligne 'epler og pærer' - ulike investeringer med forskjellige tidshorisonter",
                "Ta hensyn til tidsverdien av penger - 1000 kr i dag er mer verdt enn 1000 kr om 5 år",
                "Kvantifisere usikkerhet - hva skjer hvis ting går bedre eller verre enn forventet?",
                "Kommunisere objektivt - tall og analyser fremfor følelser og synsing",
                "Lære av beslutninger - systematisk evaluere hva som gikk bra eller galt"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                  <p className="text-xs">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Decision Without Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Beslutninger uten analyse = Gambling</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-sm mb-2 text-red-700">❌ Uten investeringsanalyse:</h4>
              <ul className="space-y-1 text-xs">
                <li>• "Det føles som en god idé"</li>
                <li>• "Naboen gjorde det samme"</li>
                <li>• "Vi har alltid gjort det sånn"</li>
                <li>• Ignorerer alternativkostnader</li>
                <li>• Ser ikke hele bildet</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-sm mb-2 text-green-700">✅ Med investeringsanalyse:</h4>
              <ul className="space-y-1 text-xs">
                <li>• Objektive beregninger</li>
                <li>• Sammenlignbare alternativer</li>
                <li>• Dokumenterte forutsetninger</li>
                <li>• Kvantifisert risiko</li>
                <li>• Sporbare beslutninger</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mini Quiz */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center justify-between">
            <span>Test forståelsen din</span>
            <Button
              size="sm"
              variant={showQuiz ? "default" : "outline"}
              onClick={() => setShowQuiz(!showQuiz)}
            >
              {showQuiz ? "Skjul" : "Start"} quiz
            </Button>
          </CardTitle>
        </CardHeader>
        {showQuiz && (
          <CardContent className="space-y-4">
            {quizQuestions.map((q, index) => (
              <div key={q.id} className="space-y-3">
                <p className="text-sm font-medium">{index + 1}. {q.question}</p>
                <RadioGroup
                  value={quizAnswers[q.id]}
                  onValueChange={(value) => setQuizAnswers({...quizAnswers, [q.id]: value})}
                  disabled={showResults}
                >
                  {q.options.map((option, optIndex) => (
                    <div
                      key={optIndex}
                      className={`flex items-center space-x-2 p-2 rounded ${
                        showResults
                          ? optIndex === q.correct
                            ? 'bg-green-50'
                            : quizAnswers[q.id] === optIndex.toString()
                            ? 'bg-red-50'
                            : ''
                          : ''
                      }`}
                    >
                      <RadioGroupItem value={optIndex.toString()} id={`q${q.id}-opt${optIndex}`} />
                      <Label htmlFor={`q${q.id}-opt${optIndex}`} className="text-xs cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {showResults && (
                  <p className="text-xs text-muted-foreground italic">
                    {q.explanation}
                  </p>
                )}
              </div>
            ))}
            
            {!showResults ? (
              <Button 
                onClick={handleQuizSubmit} 
                className="w-full"
                disabled={Object.keys(quizAnswers).length < quizQuestions.length}
              >
                Sjekk svar
              </Button>
            ) : (
              <div className="text-center space-y-2">
                <p className="text-lg font-semibold">
                  Du fikk {calculateQuizScore()} av {quizQuestions.length} riktige!
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setShowResults(false);
                    setQuizAnswers({});
                  }}
                >
                  Prøv igjen
                </Button>
              </div>
            )}
          </CardContent>
        )}
      </Card>

      {/* Next Steps */}
      <Card className="bg-primary/5 border-primary">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Hva skal vi lære?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-sm">
              I denne modulen skal du lære de viktigste verktøyene for investeringsanalyse:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { step: "1", title: "Identifisere kontantstrømmer", desc: "Hva er relevante inn- og utbetalinger?" },
                { step: "2", title: "Beregne nåverdi (NPV)", desc: "Hovedverktøyet for å vurdere lønnsomhet" },
                { step: "3", title: "Finne internrente (IRR)", desc: "Prosjektets avkastning i prosent" },
                { step: "4", title: "Analysere følsomhet", desc: "Hva hvis ting går annerledes?" }
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-sm">{item.title}</h5>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reflection */}
      <Card className="bg-purple-50 border-purple-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">💭 Refleksjonsoppgave</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-3">
            Tenk på din siste store økonomiske beslutning. Det kan være:
          </p>
          <ul className="space-y-1 text-xs mb-4">
            <li>• Valg av utdanning</li>
            <li>• Kjøp av bil, sykkel eller annet transportmiddel</li>
            <li>• Oppussing eller flytting</li>
            <li>• Start av egen bedrift eller sidegeskjeft</li>
          </ul>
          <div className="bg-white p-3 rounded-lg border border-purple-300">
            <p className="text-xs font-semibold mb-2">Spør deg selv:</p>
            <ol className="space-y-1 text-xs list-decimal list-inside">
              <li>Hva var den initielle kostnaden?</li>
              <li>Hvilke fremtidige fordeler forventet du?</li>
              <li>Gjorde du noen beregninger, eller gikk du på magefølelsen?</li>
              <li>Ville en grundigere analyse endret beslutningen din?</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvestmentIntroduction;