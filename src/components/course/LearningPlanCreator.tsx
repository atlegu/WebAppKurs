import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Download, Target, Users, User } from "lucide-react";
import { format, addWeeks } from "date-fns";
import { nb } from "date-fns/locale";

interface ModuleGoal {
  moduleId: number;
  title: string;
  goal: string;
  plannedWeek: Date | null;
}

const courseModules = [
  { id: 1, title: "Introduksjon til finans", icon: "🎯" },
  { id: 2, title: "Regnskap", icon: "📊" },
  { id: 3, title: "Tidsverdien av penger", icon: "⏰" },
  { id: 4, title: "Obligasjoner", icon: "📜" },
  { id: 5, title: "Aksjer og aksjeprising", icon: "📈" },
  { id: 6, title: "Avkastning og risiko", icon: "⚖️" },
  { id: 7, title: "Investeringsanalyse", icon: "🔍" },
  { id: 8, title: "Kapitalstruktur", icon: "🏗️" },
  { id: 9, title: "EU-taksonomi og klimafinans", icon: "🌱" },
  { id: 10, title: "ESG og grønn finans", icon: "♻️" }
];

const exampleGoals = [
  "Forstå grunnleggende begreper",
  "Beregne nåverdi og fremtidig verdi",
  "Analysere porteføljerisiko",
  "Vurdere ESG-faktorer i investeringer",
  "Gjennomføre investeringsanalyse",
  "Forstå obligasjonsprising"
];

export const LearningPlanCreator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [studyPartner, setStudyPartner] = useState<string>("");
  const [moduleGoals, setModuleGoals] = useState<ModuleGoal[]>(
    courseModules.map(module => ({
      moduleId: module.id,
      title: module.title,
      goal: "",
      plannedWeek: null
    }))
  );

  const handleGoalChange = (moduleId: number, goal: string) => {
    setModuleGoals(prev => 
      prev.map(module => 
        module.moduleId === moduleId 
          ? { ...module, goal: goal.slice(0, 50) } 
          : module
      )
    );
  };

  const handleWeekSelect = (moduleId: number, date: Date) => {
    setModuleGoals(prev => 
      prev.map(module => 
        module.moduleId === moduleId 
          ? { ...module, plannedWeek: date } 
          : module
      )
    );
  };

  const generateWeekSuggestions = () => {
    const suggestions = moduleGoals.map((module, index) => ({
      ...module,
      plannedWeek: addWeeks(startDate, index * 2) // 2 weeks per module
    }));
    setModuleGoals(suggestions);
  };

  const generatePDF = () => {
    const plan = {
      createdAt: new Date().toISOString(),
      startDate: startDate.toISOString(),
      studyPartner,
      modules: moduleGoals,
      estimatedHours: moduleGoals.length * 3.5 // 3-4 hours per module
    };
    
    localStorage.setItem('learning-plan', JSON.stringify(plan));
    
    // Create a simple text-based "PDF" content
    const pdfContent = `
PERSONLIG LÆRINGSPLAN - FINANSKURS

Opprettet: ${format(new Date(), "dd. MMMM yyyy", { locale: nb })}
Startdato: ${format(startDate, "dd. MMMM yyyy", { locale: nb })}
Studiepartner: ${studyPartner || "Solo"}
Estimert tidsbruk: ${moduleGoals.length * 3.5} timer totalt

MODULER OG MÅL:
${moduleGoals.map(module => `
Modul ${module.moduleId}: ${module.title}
Mål: ${module.goal || "Ikke definert"}
Planlagt uke: ${module.plannedWeek ? format(module.plannedWeek, "dd. MMM yyyy", { locale: nb }) : "Ikke planlagt"}
`).join('')}

TIPS FOR SUKSESS:
- Sett av 3-4 timer per modul
- Gjennomfør øvelser og case-studier
- Delta aktivt i diskusjoner
- Bruk anbefalte fagverktøy
- Revider regelmessig

Lykke til med studiene!
    `;

    // Create and download the file
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'min-laeringsplan.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const isStepComplete = (step: number) => {
    switch (step) {
      case 1: return startDate !== null;
      case 2: return moduleGoals.every(module => module.goal.length > 0);
      case 3: return studyPartner !== null;
      default: return false;
    }
  };

  const allStepsComplete = isStepComplete(1) && isStepComplete(2) && isStepComplete(3);

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          Lag din personlige læringsplan
        </CardTitle>
        <div className="flex gap-2">
          {[1, 2, 3].map(step => (
            <Badge 
              key={step}
              variant={currentStep === step ? "default" : isStepComplete(step) ? "secondary" : "outline"}
              className="cursor-pointer"
              onClick={() => setCurrentStep(step)}
            >
              Steg {step}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {currentStep === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Steg 1: Tidsplanlegging</h3>
            <p className="text-muted-foreground">
              Når vil du starte kurset? Vi foreslår en tidsplan basert på din startdato.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="start-date">Startdato</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "dd. MMMM yyyy", { locale: nb }) : "Velg dato"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={(date) => date && setStartDate(date)}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                
                <Button 
                  onClick={generateWeekSuggestions} 
                  variant="outline" 
                  size="sm" 
                  className="mt-2 w-full"
                >
                  Foreslå tidsplan (2 uker per modul)
                </Button>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">💡 Anbefaling</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 3-4 timer per modul</li>
                  <li>• 2 uker per modul for grundig læring</li>
                  <li>• Total varighet: ca. 20 uker</li>
                  <li>• Inkluder tid til repetisjon</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Steg 2: Læringsmål</h3>
            <p className="text-muted-foreground">
              Definer hva du vil oppnå med hver modul (maks 50 tegn per mål).
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {moduleGoals.map((module, index) => {
                const courseModule = courseModules.find(m => m.id === module.moduleId);
                return (
                  <Card key={module.moduleId} className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{courseModule?.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-medium">Modul {module.moduleId}: {module.title}</h4>
                        {module.plannedWeek && (
                          <p className="text-sm text-muted-foreground">
                            Planlagt: {format(module.plannedWeek, "dd. MMM", { locale: nb })}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`goal-${module.moduleId}`}>Mitt mål med denne modulen:</Label>
                      <Input
                        id={`goal-${module.moduleId}`}
                        value={module.goal}
                        onChange={(e) => handleGoalChange(module.moduleId, e.target.value)}
                        placeholder="F.eks. Forstå grunnleggende begreper..."
                        maxLength={50}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{module.goal.length}/50 tegn</span>
                        <div className="flex gap-1">
                          {exampleGoals.slice(0, 3).map((example, i) => (
                            <Button
                              key={i}
                              variant="ghost"
                              size="sm"
                              className="h-auto p-1 text-xs"
                              onClick={() => handleGoalChange(module.moduleId, example)}
                            >
                              {example.slice(0, 20)}...
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Steg 3: Studiepartner</h3>
            <p className="text-muted-foreground">
              Vil du jobbe alene eller sammen med en studiepartner?
            </p>
            
            <RadioGroup value={studyPartner} onValueChange={setStudyPartner}>
              <div className="flex items-center space-x-2 p-4 border rounded-lg">
                <RadioGroupItem value="solo" id="solo" />
                <Label htmlFor="solo" className="flex items-center gap-2 cursor-pointer">
                  <User className="h-4 w-4" />
                  Jeg jobber solo
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-4 border rounded-lg">
                <RadioGroupItem value="partner" id="partner" />
                <Label htmlFor="partner" className="flex items-center gap-2 cursor-pointer">
                  <Users className="h-4 w-4" />
                  Jeg vil ha en studiepartner
                </Label>
              </div>
            </RadioGroup>

            {studyPartner === "partner" && (
              <div className="bg-blue-50 p-4 rounded-lg dark:bg-blue-950/20">
                <h4 className="font-medium mb-2">Fordeler med studiepartner:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Motivasjon og accountability</li>
                  <li>• Diskutere case-studier og konsepter</li>
                  <li>• Dele ressurser og tips</li>
                  <li>• Øve sammen på oppgaver</li>
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="flex justify-between pt-4 border-t">
          <Button 
            variant="outline" 
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
          >
            Forrige
          </Button>
          
          {currentStep < 3 ? (
            <Button 
              onClick={() => setCurrentStep(currentStep + 1)}
              disabled={!isStepComplete(currentStep)}
            >
              Neste
            </Button>
          ) : (
            <Button 
              onClick={generatePDF}
              disabled={!allStepsComplete}
              className="gap-2"
            >
              <Download className="h-4 w-4" />
              Last ned læringsplan
            </Button>
          )}
        </div>

        {allStepsComplete && (
          <div className="bg-green-50 p-4 rounded-lg dark:bg-green-950/20">
            <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">
              🎉 Læringsplan klar!
            </h4>
            <p className="text-sm text-green-700 dark:text-green-300">
              Din personlige læringsplan er klar for nedlasting. Den kan deles i klasse-kanalen 
              for accountability og motivasjon.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};