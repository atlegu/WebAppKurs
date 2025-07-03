import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Eye, EyeOff, Calculator } from "lucide-react";

interface BondExercisesProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const exercises = [
  {
    id: 1,
    title: "Oppgave 1",
    content: "Obligasjon A har tre år igjen til forfall, mens obligasjon B har fem år igjen til forfall. Årlig kupongrente er 8% for obligasjon A og 4% for obligasjon B. Den effektive renten på de to obligasjonene er 6,0% for obligasjon A og 5,6% for obligasjon B.\n\nFinn prisen på hver av de to obligasjonene som prosent av pålydende. Forklar kort hvorfor den ene obligasjonen står i overkurs og den andre i underkurs.",
    solution: "" // Will be filled later when HTML is provided
  },
  {
    id: 2,
    title: "Oppgave 2", 
    content: "For syv år siden arvet du en obligasjon etter din grandtante. Obligasjonens pålydende er 1.000 kr. Obligasjonens pålydende rente som utbetales i slutten av hvert år, er 7%. Markedsrenten er nå 5,5 %. Obligasjonen vil bli innløst i sin helhet om tre år. Din yngre bror vil kjøpe obligasjonen av deg i dag for 1.085 kr.\n\nEr du villig til å selge? Svaret skal underbygges med beregninger.\nGitt at du selger obligasjonen, hvilke effektiv rente får da din yngre bror på sin investering (ca. tall godkjennes) ?",
    solution: ""
  },
  {
    id: 3,
    title: "Oppgave 3",
    content: "Obligasjon A og obligasjon B forfaller begge om to år. Obligasjon A koster i dag kr 197,16, mens obligasjon B koster kr 102,06. Pålydende beløp er kr 200 for obligasjon A og kr 100 for obligasjon B. Årlig nominell rente (kupongrente) er 10% for obligasjon A og 12% for obligasjon B.\n\nFinn den effektive renten på hver av de to obligasjonene.",
    solution: ""
  },
  {
    id: 4,
    title: "Oppgave 4",
    content: "En obligasjon pålydende kr 5000, som innløses etter 10 år, betales det ut 7 % rente hvert år. Beregn markedsverdien for obligasjonen når man alternativt kan plassere pengene til 5 %. Hvilken avkastning oppnår man hvis man kjøper obligasjonen for kr 5250?",
    solution: ""
  },
  {
    id: 5,
    title: "Oppgave 5",
    content: "På en obligasjon pålydende kr 10000, som innløses etter 5 år, betales det ut 4 % rente hvert halvår. Hva blir avkastning pr. År for denne investeringen når obligasjonen kjøpes for kr 9000?",
    solution: ""
  },
  {
    id: 6,
    title: "Oppgave 6",
    content: "En obligasjon omsettes i dag for kr. 911,37. Dens pålydende er kr. 1000 og den har en kupongrente på 8% som utbetales med kr. 40,00 hvert halvår. Obligasjonens forfallstidspunkt er om seks år. Hva er obligasjonens \"yield to maturity\" (per halvår og per år)? Dersom en ikke klarer å regne det ut, kan en bruke prøve å feile metoden.",
    solution: ""
  },
  {
    id: 7,
    title: "Oppgave 7",
    content: "Ett års spotrente er i dag 6%, og terminrenten for år 2 og 3 er hhv. [mangler tall]\n\nHva er dagens markedspris for en obligasjon med kupongrente på 6% som betales en gang pr. år, pålydende kr 1000 og løpetid 3 år fra i dag? Første rentebetaling er om ett år fra i dag.",
    solution: ""
  },
  {
    id: 8,
    title: "Oppgave 8",
    content: "Da du startet på ÅS brukte du studielånet ditt til å handle 100 obligasjon med pålydende verdi 1000 kr. Obligasjonens pålydende rente/kupong som utbetales i slutten av hvert år, er 6 %. Markedsrenten er nå 5,2 %. Obligasjonen vil bli innløst i sin helhet om fire år.\n\na) Hvilken salgsverdi har obligasjonene i dag? Har obligasjonen en over- eller underkurs? (Gi en kort begrunnelse)",
    solution: ""
  },
  {
    id: 9,
    title: "Oppgave 9",
    content: "Du har en obligasjon som betaler årlig kupong på 5. Om 4 år forfaller obligasjonen og du får 100 pålydende. Dagens rente er 6%.\n\na) Dersom renten synker fra 6% til 3%, hvor mange prosent øker obligasjonsprisen med?\nb) Dersom renten øker fra 6% til 9%, hvor mange prosent synker obligasjonsprisen med?\nc) Hva skyldes størrelsesforskjellen i svarene i a) og b)?",
    solution: ""
  },
  {
    id: 10,
    title: "Oppgave 10",
    content: "a) For obligasjonen i oppgave 1. Regn ut Macaulay's durasjon når renten er 6%.\n\nb) Hva betyr dette tallet?\n\nc) Regn ut modifisert durasjon. Hva betyr dette tallet?\n\nd) Dersom du hadde brukt tallet for modifisert durasjon for å estimere prisendringen i prosent i oppgave 1 hva ville estimatet for endringen vært?\n\ne) Hvorfor stemte ikke den prosentvise endringen i oppgave 1 med tallet for modifisert durasjon?",
    solution: ""
  },
  {
    id: 11,
    title: "Oppgave 11", 
    content: "Du har en nullkupong obligasjon som forfaller om 4 år. Hva er durasjonen til denne obligasjonen?",
    solution: ""
  }
];

export const BondExercises: React.FC<BondExercisesProps> = ({ isOpen, onOpenChange }) => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  const currentExercise = exercises[currentExerciseIndex];

  const handleNext = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setShowSolution(false);
    }
  };

  const handlePrevious = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(currentExerciseIndex - 1);
      setShowSolution(false);
    }
  };

  const toggleSolution = () => {
    setShowSolution(!showSolution);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            Obligasjonsoppgaver
          </DialogTitle>
          <DialogDescription>
            Løs oppgavene og sjekk løsningsforslaget når du er ferdig.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress */}
          <div className="flex items-center justify-between">
            <Badge variant="outline">
              {currentExercise.title} - {currentExerciseIndex + 1} av {exercises.length}
            </Badge>
            <div className="flex gap-1">
              {exercises.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentExerciseIndex ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Exercise Content */}
          <Card>
            <CardHeader>
              <CardTitle>{currentExercise.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-foreground leading-relaxed whitespace-pre-line">
                  {currentExercise.content}
                </div>

                {/* Solution Toggle */}
                <div className="pt-4 border-t">
                  <Button
                    onClick={toggleSolution}
                    variant="outline"
                    className="w-full"
                  >
                    {showSolution ? (
                      <>
                        <EyeOff className="w-4 h-4 mr-2" />
                        Skjul løsningsforslag
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4 mr-2" />
                        Vis løsningsforslag
                      </>
                    )}
                  </Button>

                  {showSolution && (
                    <Card className="mt-4 bg-muted/30">
                      <CardHeader>
                        <CardTitle className="text-lg">Løsningsforslag</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {currentExercise.solution ? (
                          <div 
                            className="prose max-w-none"
                            dangerouslySetInnerHTML={{ __html: currentExercise.solution }}
                          />
                        ) : (
                          <p className="text-muted-foreground italic">
                            Løsningsforslag kommer snart...
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentExerciseIndex === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Forrige oppgave
            </Button>
            <Button
              variant="outline"
              onClick={handleNext}
              disabled={currentExerciseIndex === exercises.length - 1}
            >
              Neste oppgave
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};