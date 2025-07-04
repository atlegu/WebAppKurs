import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContentSection } from "./ContentSection";
import BalanceGameWithOverlay from "@/components/BalanceGameWithOverlay";

interface SubModule {
  id: string;
  title: string;
  content: any;
}

interface Module {
  id: string;
  title: string;
  subModules?: SubModule[];
}

interface SubModuleContentProps {
  subModule: SubModule;
  module: Module;
  moduleIndex: number;
  subModuleIndex: number;
  onSubModuleSelect: (subModule: SubModule) => void;
}

export const SubModuleContent: React.FC<SubModuleContentProps> = ({
  subModule,
  module,
  moduleIndex,
  subModuleIndex,
  onSubModuleSelect
}) => {
  const totalSubModules = module.subModules?.length || 0;
  const currentIndex = subModuleIndex - 1; // Convert to 0-based index
  
  const handlePrevious = () => {
    if (currentIndex > 0 && module.subModules) {
      onSubModuleSelect(module.subModules[currentIndex - 1]);
    }
  };
  
  const handleNext = () => {
    if (currentIndex < totalSubModules - 1 && module.subModules) {
      onSubModuleSelect(module.subModules[currentIndex + 1]);
    }
  };

  // Check if this is the "Oppgaver" section in the accounting module
  const isAccountingTasks = module.title === "Regnskap" && subModule.title === "Oppgaver";
  
  return (
    <div className="w-full max-w-none overflow-hidden">
      {/* Sub-module Header */}
      <div className="mb-8 border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge>Modul {moduleIndex}</Badge>
          <Badge variant="outline">{moduleIndex}.{subModuleIndex}</Badge>
        </div>
        <h2 className="text-3xl font-bold mb-4 break-words">{subModule.title}</h2>
        <p className="text-lg text-muted-foreground mb-2">
          Del av {module.title}
        </p>
      </div>

      {/* Sub-module Content */}
      <div className="w-full space-y-6 overflow-hidden">
        {subModule.content && (
          <div className="w-full">
            <ContentSection 
              section={subModule.content} 
              index={0} 
            />
          </div>
        )}
        
        {/* Special content for accounting tasks */}
        {isAccountingTasks && (
          <div className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>🎮 Balanseregneskap Spill</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Test forståelsen din av balanseregnskapet med vårt interaktive spill.
                </p>
                <BalanceGameWithOverlay />
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Sub-module Navigation */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t">
        <Button 
          variant="outline" 
          disabled={currentIndex <= 0}
          onClick={handlePrevious}
        >
          ← Forrige del
        </Button>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{subModuleIndex} av {totalSubModules}</span>
        </div>
        
        <Button 
          disabled={currentIndex >= totalSubModules - 1}
          onClick={handleNext}
        >
          Neste del →
        </Button>
      </div>
    </div>
  );
};