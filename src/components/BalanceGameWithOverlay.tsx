import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

interface BalanceItem {
  id: string;
  name: string;
  amount: number;
  category: 'assets' | 'liabilities' | 'equity';
}

const balanceItems: BalanceItem[] = [
  { id: '1', name: 'Kontanter', amount: 50000, category: 'assets' },
  { id: '2', name: 'Banklån', amount: 200000, category: 'liabilities' },
  { id: '3', name: 'Varelager', amount: 80000, category: 'assets' },
  { id: '4', name: 'Aksjekapital', amount: 100000, category: 'equity' },
  { id: '5', name: 'Leverandørgjeld', amount: 30000, category: 'liabilities' },
  { id: '6', name: 'Maskiner', amount: 150000, category: 'assets' },
  { id: '7', name: 'Opptjent egenkapital', amount: 50000, category: 'equity' },
  { id: '8', name: 'Kundefordringer', amount: 100000, category: 'assets' },
];

const BalanceGameWithOverlay = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedItems, setSelectedItems] = useState<{[key: string]: 'assets' | 'liabilities' | 'equity' | null}>({});
  const [showResults, setShowResults] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const startGame = () => {
    setGameStarted(true);
    setSelectedItems({});
    setShowResults(false);
    setCurrentItemIndex(0);
  };

  const selectCategory = (category: 'assets' | 'liabilities' | 'equity') => {
    const currentItem = balanceItems[currentItemIndex];
    setSelectedItems(prev => ({
      ...prev,
      [currentItem.id]: category
    }));

    if (currentItemIndex < balanceItems.length - 1) {
      setCurrentItemIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const getResults = () => {
    let correct = 0;
    balanceItems.forEach(item => {
      if (selectedItems[item.id] === item.category) {
        correct++;
      }
    });
    return { correct, total: balanceItems.length };
  };

  const resetGame = () => {
    setGameStarted(false);
    setSelectedItems({});
    setShowResults(false);
    setCurrentItemIndex(0);
  };

  if (!gameStarted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">🎮 Balanseregneskap Spill</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            Test kunnskapen din om balanseregnskapet! Du vil få presentert ulike poster, 
            og må plassere dem i riktig kategori: Eiendeler, Gjeld eller Egenkapital.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Husk balanselikningen:</h4>
            <p className="text-primary font-medium">Eiendeler = Gjeld + Egenkapital</p>
          </div>
          <Button onClick={startGame} size="lg">
            Start Spillet
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (showResults) {
    const results = getResults();
    const percentage = Math.round((results.correct / results.total) * 100);
    
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">📊 Resultater</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {results.correct}/{results.total}
            </div>
            <p className="text-lg">
              Du fikk {percentage}% riktig!
            </p>
            <Badge variant={percentage >= 70 ? "default" : "secondary"} className="mt-2">
              {percentage >= 70 ? "Bra jobbet!" : "Øv deg mer!"}
            </Badge>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold">Dine svar:</h4>
            {balanceItems.map(item => {
              const userAnswer = selectedItems[item.id];
              const isCorrect = userAnswer === item.category;
              
              return (
                <div key={item.id} className="flex items-center justify-between p-2 rounded border">
                  <span>{item.name}</span>
                  <div className="flex items-center gap-2">
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                    <Badge variant={isCorrect ? "default" : "destructive"}>
                      {userAnswer} {!isCorrect && `(riktig: ${item.category})`}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-2 justify-center">
            <Button onClick={resetGame} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Spill på nytt
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentItem = balanceItems[currentItemIndex];
  
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Kategoriser regnskapsposten</CardTitle>
          <Badge variant="outline">
            {currentItemIndex + 1} av {balanceItems.length}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center p-6 bg-muted/50 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">{currentItem.name}</h3>
          <p className="text-lg text-muted-foreground">
            {currentItem.amount.toLocaleString('no-NO')} kr
          </p>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Hvor hører denne posten hjemme i balansen?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Button 
            onClick={() => selectCategory('assets')}
            variant="outline"
            className="h-20 flex flex-col"
          >
            <span className="text-lg font-semibold">Eiendeler</span>
            <span className="text-sm text-muted-foreground">Assets</span>
          </Button>
          
          <Button 
            onClick={() => selectCategory('liabilities')}
            variant="outline"
            className="h-20 flex flex-col"
          >
            <span className="text-lg font-semibold">Gjeld</span>
            <span className="text-sm text-muted-foreground">Liabilities</span>
          </Button>
          
          <Button 
            onClick={() => selectCategory('equity')}
            variant="outline"
            className="h-20 flex flex-col"
          >
            <span className="text-lg font-semibold">Egenkapital</span>
            <span className="text-sm text-muted-foreground">Equity</span>
          </Button>
        </div>

        <div className="bg-muted/30 p-3 rounded text-sm text-center">
          <strong>Tips:</strong> Eiendeler = det selskapet eier, Gjeld = det selskapet skylder, Egenkapital = eiernes andel
        </div>
      </CardContent>
    </Card>
  );
};

export default BalanceGameWithOverlay;