import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContentSection } from "./ContentSection";
import { ContentRenderer } from "./ContentRenderer";
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

  // Color scheme for different modules
  const getModuleTheme = (index: number) => {
    const themes = [
      { primary: "blue", gradient: "from-blue-50 to-indigo-100", badge: "bg-blue-100 text-blue-800", accent: "text-blue-600" }, // Module 1
      { primary: "emerald", gradient: "from-emerald-50 to-green-100", badge: "bg-emerald-100 text-emerald-800", accent: "text-emerald-600" }, // Module 2
      { primary: "amber", gradient: "from-amber-50 to-yellow-100", badge: "bg-amber-100 text-amber-800", accent: "text-amber-600" }, // Module 3
      { primary: "purple", gradient: "from-purple-50 to-violet-100", badge: "bg-purple-100 text-purple-800", accent: "text-purple-600" }, // Module 4
      { primary: "rose", gradient: "from-rose-50 to-pink-100", badge: "bg-rose-100 text-rose-800", accent: "text-rose-600" }, // Module 5
      { primary: "cyan", gradient: "from-cyan-50 to-teal-100", badge: "bg-cyan-100 text-cyan-800", accent: "text-cyan-600" }, // Module 6
      { primary: "orange", gradient: "from-orange-50 to-red-100", badge: "bg-orange-100 text-orange-800", accent: "text-orange-600" }, // Module 7
      { primary: "slate", gradient: "from-slate-50 to-gray-100", badge: "bg-slate-100 text-slate-800", accent: "text-slate-600" }, // Module 8
      { primary: "indigo", gradient: "from-indigo-50 to-blue-100", badge: "bg-indigo-100 text-indigo-800", accent: "text-indigo-600" }, // Module 9
      { primary: "lime", gradient: "from-lime-50 to-green-100", badge: "bg-lime-100 text-lime-800", accent: "text-lime-600" }, // Module 10
    ];
    return themes[index % themes.length];
  };

  const moduleTheme = getModuleTheme(moduleIndex - 1);
  
  // Scroll to top when sub-module changes
  useEffect(() => {
    // Find the scrollable content area and scroll it to top
    const contentArea = document.querySelector('.lg\\:col-span-3 > div[class*="overflow-y-auto"]');
    if (contentArea) {
      contentArea.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Fallback to window scroll if content area not found
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [subModule.id]);
  
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
      <div className="mb-8">
        <div
          className={`p-6 rounded-xl bg-gradient-to-r ${moduleTheme?.gradient || 'from-gray-50 to-gray-100'} border-2 ${moduleTheme ? `border-${moduleTheme.primary}-200` : 'border-gray-200'} mb-6`}
        >
          <div className="flex items-center gap-2 mb-3">
            <Badge className={moduleTheme?.badge || 'bg-gray-100 text-gray-800'}>
              {moduleIndex}.{subModuleIndex}
            </Badge>
          </div>
          <h2 className={`text-2xl font-bold break-words ${moduleTheme?.accent || 'text-gray-900'}`}>
            {subModule.title.replace(/^\d+\.\d+\s+/, '')}
          </h2>
        </div>
      </div>

      {/* Sub-module Content */}
      <div className="w-full space-y-6 overflow-hidden">
        {subModule.content && subModule.content.sections && subModule.content.sections.length > 0 ? (
          <div className="w-full space-y-6">
            {subModule.content.sections.map((section: any, index: number) => (
              <ContentSection 
                key={index}
                section={section}
                index={index}
                moduleIndex={moduleIndex}
              />
            ))}
          </div>
        ) : (
          <div className="bg-card rounded-lg p-6 border">
            <p className="text-card-foreground">Innhold lastes... ({JSON.stringify(subModule.content)})</p>
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