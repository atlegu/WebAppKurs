import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, PlayCircle, FileText, CheckCircle, Target, Brain } from "lucide-react";
import { ContentRenderer } from "./ContentRenderer";
import { BondQuiz } from "./BondQuiz";
import { DurationCalculator } from "./DurationCalculator";
import { BondExercises } from "./BondExercises";
import StockPricingQuiz from "./StockPricingQuiz";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import GordonGrowthWithOverlay from "../GordonGrowthWithOverlay";

interface ContentSectionData {
  title: string;
  type: string;
  content: string;
  video?: string;
  reflection?: string;
  exercise?: string;
  selftest?: boolean;
  download?: string;
}

interface ContentSectionProps {
  section: ContentSectionData;
  index: number;
  moduleIndex?: number;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ section, index, moduleIndex }) => {
  const [showBondQuiz, setShowBondQuiz] = useState(false);
  const [showBondExercises, setShowBondExercises] = useState(false);
  const [showStockQuiz, setShowStockQuiz] = useState(false);

  return (
    <>
      <Card key={index} className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            {section.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose max-w-none">
            <ContentRenderer content={section.content} />
          </div>

          {/* Duration Calculator - Show only for the duration section (4.8) */}
          {section.title.toLowerCase().includes('durasjon') && (
            <div className="my-6">
              <DurationCalculator />
            </div>
          )}

          {/* Gordon Growth Calculator - Show for DDM and FCFE section in module 5 */}
          {section.title.toLowerCase().includes('ddm') && moduleIndex === 5 && (
            <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl">
              <h4 className="text-lg font-semibold mb-3 text-blue-800">🎮 Interaktiv Gordon Growth kalkulator</h4>
              <p className="text-blue-700 mb-4">
                Eksperimenter med Gordon-modellen i praksis! Juster parametrene og se umiddelbare effekter på aksjepris.
              </p>
              <div className="flex justify-center">
                <GordonGrowthWithOverlay />
              </div>
            </div>
          )}

          {section.video && (
            <div className="bg-muted/50 border border-border p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <PlayCircle className="w-5 h-5 text-destructive" />
                <span className="font-semibold text-foreground">Video</span>
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                <ContentRenderer content={section.video} />
              </div>
            </div>
          )}

          {section.exercise && (
            <div className="bg-muted/30 border border-border p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Oppgave</span>
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                <ContentRenderer content={section.exercise} />
              </div>
            </div>
          )}

          {section.reflection && (
            <div className="bg-accent/10 border border-accent/30 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-accent-foreground" />
                <span className="font-semibold text-foreground">Refleksjonsspørsmål</span>
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                <ContentRenderer content={section.reflection} />
              </div>
            </div>
          )}

          {section.download && (
            <div className="bg-secondary/50 border border-secondary p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-secondary-foreground" />
                <span className="font-semibold text-foreground">Nedlasting</span>
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                <ContentRenderer content={section.download} />
              </div>
            </div>
          )}

          {section.selftest && (
            <Button variant="outline" className="w-full">
              Start selvtest
            </Button>
          )}

          {/* Quiz Buttons - Show only for "Oppgaver" sections */}
          {section.title.toLowerCase().includes('oppgaver') && moduleIndex === 4 && (
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-foreground">Flervalgsoppgaver</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Test kunnskapen din med 15 tilfeldige spørsmål om obligasjoner
                </p>
                <Button onClick={() => setShowBondQuiz(true)} className="w-full">
                  Start flervalgsoppgaver
                </Button>
              </div>
              
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-foreground">Regneoppgaver</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Øv på obligasjonsberegninger med 11 praktiske oppgaver
                </p>
                <Button onClick={() => setShowBondExercises(true)} className="w-full" variant="outline">
                  Start regneoppgaver
                </Button>
              </div>
            </div>
          )}

          {/* Stock Quiz Button - Show only for "Oppgaver" sections in module 5 */}
          {section.title.toLowerCase().includes('oppgaver') && moduleIndex === 5 && (
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-foreground">Selvtest</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Test kunnskapen din med 15 tilfeldige spørsmål om aksjeanalyse og verdsettelse
              </p>
              <Button onClick={() => setShowStockQuiz(true)} className="w-full">
                Start selvtest
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      
      <BondQuiz 
        isOpen={showBondQuiz} 
        onOpenChange={setShowBondQuiz} 
      />
      
      <BondExercises 
        isOpen={showBondExercises} 
        onOpenChange={setShowBondExercises} 
      />
      
      {/* Stock Quiz Dialog */}
      <Dialog open={showStockQuiz} onOpenChange={setShowStockQuiz}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Selvtest: Aksjeanalyse og verdsettelse</DialogTitle>
          </DialogHeader>
          <StockPricingQuiz />
        </DialogContent>
      </Dialog>
    </>
  );
};