import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

interface FinancialProduct {
  id: string;
  name: string;
  description: string;
  icon: string;
  correctCategory: string;
  explanation: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  color: string;
}

const FINANCIAL_PRODUCTS: FinancialProduct[] = [
  {
    id: "housing-loan",
    name: "Boliglån",
    description: "Du låner penger i dag for å kjøpe hus, betaler tilbake over 20+ år",
    icon: "🏠",
    correctCategory: "move-backward",
    explanation: "Du får pengene nå, betaler i fremtiden - flytter penger bakover i tid"
  },
  {
    id: "crowdfunding",
    name: "Crowdfunding-aksje", 
    description: "Du investerer penger nå i håp om fremtidig gevinst",
    icon: "📈",
    correctCategory: "move-forward",
    explanation: "Du gir penger nå for fremtidig gevinst - flytter penger fremover + tar risiko"
  },
  {
    id: "government-bond",
    name: "Statsobligasjon",
    description: "Du låner staten penger mot fast rente over tid", 
    icon: "🏛️",
    correctCategory: "move-forward",
    explanation: "Du gir staten penger nå, får tilbake med rente senere - flytter penger fremover"
  }
];

const CATEGORIES: Category[] = [
  {
    id: "move-forward",
    name: "Flytte penger fremover",
    description: "Fra nåtid til fremtid",
    color: "bg-blue-50 border-blue-200 text-blue-800"
  },
  {
    id: "move-backward", 
    name: "Flytte penger bakover",
    description: "Fra fremtid til nåtid",
    color: "bg-green-50 border-green-200 text-green-800"
  },
  {
    id: "transfer-risk",
    name: "Flytte risiko",
    description: "Overføre usikkerhet mellom parter", 
    color: "bg-purple-50 border-purple-200 text-purple-800"
  }
];

export const FinanceCategorizeExercise: React.FC = () => {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [assignments, setAssignments] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, productId: string) => {
    setDraggedItem(productId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, categoryId: string) => {
    e.preventDefault();
    if (draggedItem) {
      setAssignments(prev => ({
        ...prev,
        [draggedItem]: categoryId
      }));
      setDraggedItem(null);
    }
  };

  // Alternative click-based assignment for mobile/accessibility
  const handleProductClick = (productId: string) => {
    setSelectedProduct(productId);
  };

  const handleCategoryClick = (categoryId: string) => {
    if (selectedProduct) {
      setAssignments(prev => ({
        ...prev,
        [selectedProduct]: categoryId
      }));
      setSelectedProduct(null);
    }
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const resetExercise = () => {
    setAssignments({});
    setShowResults(false);
    setSelectedProduct(null);
  };

  const getResultForProduct = (product: FinancialProduct) => {
    const assigned = assignments[product.id];
    if (!assigned) return null;
    return assigned === product.correctCategory ? "correct" : "incorrect";
  };

  const allAssigned = FINANCIAL_PRODUCTS.every(p => assignments[p.id]);
  const correctCount = FINANCIAL_PRODUCTS.filter(p => getResultForProduct(p) === "correct").length;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🎮 Interaktiv øvelse: Kategoriser finansielle produkter
          </CardTitle>
          <p className="text-muted-foreground">
            Dra produktene til riktig kategori, eller klikk på produkt først og deretter kategori på mobil.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Financial Products */}
          <div className="space-y-3">
            <h3 className="font-semibold">Finansielle produkter:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {FINANCIAL_PRODUCTS.map((product) => {
                const result = showResults ? getResultForProduct(product) : null;
                const isSelected = selectedProduct === product.id;
                const isAssigned = assignments[product.id];
                
                return (
                  <Card
                    key={product.id}
                    className={`cursor-pointer transition-all duration-200 ${
                      isSelected ? "ring-2 ring-primary" : ""
                    } ${
                      isAssigned && !showResults ? "opacity-60" : ""
                    } ${
                      result === "correct" ? "bg-green-50 border-green-200" :
                      result === "incorrect" ? "bg-red-50 border-red-200" : ""
                    }`}
                    draggable
                    onDragStart={(e) => handleDragStart(e, product.id)}
                    onClick={() => !showResults && handleProductClick(product.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{product.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-medium flex items-center gap-2">
                            {product.name}
                            {result === "correct" && <CheckCircle className="w-4 h-4 text-green-600" />}
                            {result === "incorrect" && <XCircle className="w-4 h-4 text-red-600" />}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {product.description}
                          </p>
                          {showResults && assignments[product.id] && (
                            <div className="mt-2 p-2 bg-muted rounded text-xs">
                              <strong>Forklaring:</strong> {product.explanation}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h3 className="font-semibold">Kategorier:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CATEGORIES.map((category) => {
                const assignedProducts = FINANCIAL_PRODUCTS.filter(p => assignments[p.id] === category.id);
                
                return (
                  <Card
                    key={category.id}
                    className={`${category.color} border-2 border-dashed min-h-[120px] transition-all duration-200 ${
                      selectedProduct ? "cursor-pointer hover:scale-105" : ""
                    }`}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, category.id)}
                    onClick={() => selectedProduct && handleCategoryClick(category.id)}
                  >
                    <CardContent className="p-4">
                      <h4 className="font-semibold">{category.name}</h4>
                      <p className="text-sm opacity-80 mb-2">{category.description}</p>
                      
                      {assignedProducts.length > 0 && (
                        <div className="space-y-1">
                          {assignedProducts.map((product) => (
                            <Badge key={product.id} variant="secondary" className="text-xs">
                              {product.icon} {product.name}
                            </Badge>
                          ))}
                        </div>
                      )}
                      
                      {assignedProducts.length === 0 && (
                        <div className="text-xs opacity-60 italic">
                          Dra produkter hit eller klikk når produkt er valgt
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4">
            {!showResults ? (
              <Button 
                onClick={checkAnswers} 
                disabled={!allAssigned}
                className="flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                Sjekk svar
              </Button>
            ) : (
              <div className="text-center space-y-4">
                <div className="text-lg font-semibold">
                  Du fikk {correctCount} av {FINANCIAL_PRODUCTS.length} riktig! 
                  {correctCount === FINANCIAL_PRODUCTS.length ? " 🎉" : ""}
                </div>
                <Button onClick={resetExercise} variant="outline" className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Prøv igjen
                </Button>
              </div>
            )}
          </div>

          {selectedProduct && (
            <div className="text-center text-sm text-muted-foreground">
              <Badge variant="outline">
                {FINANCIAL_PRODUCTS.find(p => p.id === selectedProduct)?.name} er valgt - klikk på en kategori
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};