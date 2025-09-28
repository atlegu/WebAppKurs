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

  // Professional financial education color themes for modules
  const getModuleTheme = (index: number) => {
    const themes = [
      { gradient: "bg-gradient-to-br from-module-1-50 to-module-1-100", badge: "bg-module-1-100 text-module-1-700 border-module-1-200", accent: "text-module-1-700", border: "border-module-1-200" }, // Module 1: Financial Blue
      { gradient: "bg-gradient-to-br from-module-2-50 to-module-2-100", badge: "bg-module-2-100 text-module-2-700 border-module-2-200", accent: "text-module-2-700", border: "border-module-2-200" }, // Module 2: Growth Green
      { gradient: "bg-gradient-to-br from-module-3-50 to-module-3-100", badge: "bg-module-3-100 text-module-3-700 border-module-3-200", accent: "text-module-3-700", border: "border-module-3-200" }, // Module 3: Professional Amber
      { gradient: "bg-gradient-to-br from-module-4-50 to-module-4-100", badge: "bg-module-4-100 text-module-4-700 border-module-4-200", accent: "text-module-4-700", border: "border-module-4-200" }, // Module 4: Deep Purple
      { gradient: "bg-gradient-to-br from-module-5-50 to-module-5-100", badge: "bg-module-5-100 text-module-5-700 border-module-5-200", accent: "text-module-5-700", border: "border-module-5-200" }, // Module 5: Rose
      { gradient: "bg-gradient-to-br from-module-6-50 to-module-6-100", badge: "bg-module-6-100 text-module-6-700 border-module-6-200", accent: "text-module-6-700", border: "border-module-6-200" }, // Module 6: Sustainable Teal
      { gradient: "bg-gradient-to-br from-esg-environmental/10 to-success/10", badge: "bg-esg-environmental/15 text-esg-environmental border-esg-environmental/30", accent: "text-esg-environmental", border: "border-esg-environmental/30" }, // Module 7: ESG Environmental
      { gradient: "bg-gradient-to-br from-esg-social/10 to-esg-social/20", badge: "bg-esg-social/15 text-esg-social border-esg-social/30", accent: "text-esg-social", border: "border-esg-social/30" }, // Module 8: ESG Social
      { gradient: "bg-gradient-to-br from-esg-governance/10 to-esg-governance/20", badge: "bg-esg-governance/15 text-esg-governance border-esg-governance/30", accent: "text-esg-governance", border: "border-esg-governance/30" }, // Module 9: ESG Governance
      { gradient: "bg-gradient-to-br from-financial-teal/10 to-accent/10", badge: "bg-accent/15 text-accent border-accent/30", accent: "text-accent", border: "border-accent/30" }, // Module 10: Sustainable Finance
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
          className={`p-6 rounded-xl ${moduleTheme?.gradient || 'bg-gradient-to-br from-muted/20 to-muted/40'} border-2 ${moduleTheme?.border || 'border-border'} mb-6 shadow-sm backdrop-blur-sm`}
        >
          <div className="flex items-center gap-2 mb-3">
            <Badge className={`${moduleTheme?.badge || 'bg-primary/10 text-primary border-primary/20'} border backdrop-blur-sm`}>
              {moduleIndex}.{subModuleIndex}
            </Badge>
          </div>
          <h2 className={`text-2xl font-bold break-words ${moduleTheme?.accent || 'text-foreground'} drop-shadow-sm`}>
            {subModule.title.replace(/^\d+\.\d+\s+/, '')}
          </h2>
        </div>
      </div>

      {/* Sub-module Content */}
      <div className="w-full space-y-6 overflow-hidden">
        {subModule.content && subModule.content.sections && subModule.content.sections.length > 0 ? (
          <div className="w-full space-y-6">
            {subModule.content.sections.map((section: any, index: number) => {
              // Skip showing section title if it's the same as submodule title and it's the first section
              const cleanSubModuleTitle = subModule.title.replace(/^\d+\.\d+\s+/, '').trim().toLowerCase();
              const cleanSectionTitle = section.title.trim().toLowerCase();
              const shouldHideTitle = index === 0 && cleanSectionTitle === cleanSubModuleTitle;

              return (
                <ContentSection
                  key={index}
                  section={{
                    ...section,
                    title: shouldHideTitle ? '' : section.title
                  }}
                  index={index}
                  moduleIndex={moduleIndex}
                />
              );
            })}
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