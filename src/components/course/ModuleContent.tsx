import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Target, BookOpen, CheckCircle } from "lucide-react";
import { ContentSection } from "./ContentSection";
import { SubModuleContent } from "./SubModuleContent";
import { useProgressContext } from "@/contexts/ProgressContext";
import { useAuth } from "@/contexts/AuthContext";

interface SubModule {
  id: string;
  title: string;
  content: any;
}

interface Module {
  id: string;
  course_id: string;
  title: string;
  description: string | null;
  content: any;
  order_index: number;
  subModules?: SubModule[];
}

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

interface ModuleContentProps {
  selectedModule: Module | null;
  selectedSubModule?: SubModule | null;
  onSubModuleSelect?: (subModule: SubModule) => void;
  onModuleSelect?: (module: Module) => void;
  modules?: Module[];
  totalModules: number;
}

export const ModuleContent: React.FC<ModuleContentProps> = ({
  selectedModule,
  selectedSubModule,
  onSubModuleSelect,
  onModuleSelect,
  modules = [],
  totalModules
}) => {
  const { markModuleComplete, isModuleCompleted } = useProgressContext();
  const { user } = useAuth();

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
  // Scroll to top when module changes
  useEffect(() => {
    // Find the scrollable content area and scroll it to top
    const contentArea = document.querySelector('.lg\\:col-span-3 > div[class*="overflow-y-auto"]');
    if (contentArea) {
      contentArea.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Fallback to window scroll if content area not found
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedModule?.id]);

  const handlePreviousModule = () => {
    if (selectedModule && selectedModule.order_index > 1 && onModuleSelect) {
      const previousModule = modules.find(m => m.order_index === selectedModule.order_index - 1);
      if (previousModule) {
        onModuleSelect(previousModule);
      }
    }
  };

  const handleNextModule = () => {
    if (selectedModule) {
      // If current module has sub-modules and we're on the overview, go to first sub-module
      if (selectedModule.subModules && selectedModule.subModules.length > 0 && onSubModuleSelect) {
        onSubModuleSelect(selectedModule.subModules[0]);
      } 
      // Otherwise, go to next module if available
      else if (selectedModule.order_index < totalModules && onModuleSelect) {
        const nextModule = modules.find(m => m.order_index === selectedModule.order_index + 1);
        if (nextModule) {
          onModuleSelect(nextModule);
        }
      }
    }
  };
  if (!selectedModule) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">Ingen modul valgt</h3>
          <p className="text-muted-foreground">
            Velg en modul fra sidemenyen for å starte læringen.
          </p>
        </CardContent>
      </Card>
    );
  }

  // If a sub-module is selected, show that instead
  if (selectedSubModule && onSubModuleSelect) {
    return (
      <SubModuleContent
        subModule={selectedSubModule}
        module={selectedModule}
        moduleIndex={selectedModule.order_index}
        subModuleIndex={selectedModule.subModules?.findIndex(sub => sub.id === selectedSubModule.id) + 1 || 1}
        onSubModuleSelect={onSubModuleSelect}
      />
    );
  }

  const moduleTheme = selectedModule ? getModuleTheme(selectedModule.order_index - 1) : null;

  return (
    <div>
      {/* Module Header */}
      <div className="mb-8">
        <div
          className={`p-6 rounded-xl ${moduleTheme?.gradient || 'bg-gradient-to-br from-muted/20 to-muted/40'} border-2 ${moduleTheme?.border || 'border-border'} mb-6 shadow-sm backdrop-blur-sm`}
        >
          <div className="flex items-center gap-2 mb-3">
            <Badge className={`${moduleTheme?.badge || 'bg-primary/10 text-primary border-primary/20'} border backdrop-blur-sm`}>
              Modul {selectedModule.order_index}
            </Badge>
            <Badge variant="outline">📘</Badge>
          </div>
          <h2 className={`text-3xl font-bold mb-3 ${moduleTheme?.accent || 'text-foreground'} drop-shadow-sm`}>
            {selectedModule.title}
          </h2>
          <p className="text-lg opacity-80 mb-4">{selectedModule.description}</p>
        </div>
        
        {/* Show sub-modules overview if available */}
        {selectedModule.subModules && selectedModule.subModules.length > 0 && (
          <div className={`${moduleTheme?.gradient || 'bg-gradient-to-br from-muted/20 to-muted/40'} rounded-lg p-4 mb-6 border ${moduleTheme?.border || 'border-border'} shadow-sm backdrop-blur-sm`}>
            <h3 className={`font-semibold mb-3 ${moduleTheme?.accent || 'text-foreground'}`}>Denne modulen inneholder:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {selectedModule.subModules.map((subModule, index) => (
                <div key={subModule.id} className="flex items-center gap-2 text-sm">
                  <span className={`font-medium ${moduleTheme?.accent || 'text-primary'}`}>{selectedModule.order_index}.{index + 1}</span>
                  <span className="text-foreground/90">{subModule.title}</span>
                </div>
              ))}
            </div>
            <p className="text-sm opacity-70 mt-3">
              Velg en underside fra menyen til venstre for å starte læringen.
            </p>
          </div>
        )}
      </div>

      <Separator className="mb-6" />

      {/* Module Sections - only show if no sub-modules */}
      {(!selectedModule.subModules || selectedModule.subModules.length === 0) && (
        selectedModule.content?.sections?.map((section: ContentSectionData, index: number) => 
          <ContentSection key={index} section={section} index={index} moduleIndex={selectedModule.order_index} />
        )
      )}

      {/* Module Navigation */}
      {/* Module completion button */}
      {user && (
        <div className="mt-8 pt-6 border-t">
          <div className="flex items-center justify-center mb-6">
            {isModuleCompleted(selectedModule.id) ? (
              <div className="flex items-center gap-2 text-success">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Modul fullført!</span>
              </div>
            ) : (
              <Button 
                onClick={() => markModuleComplete(selectedModule.id)}
                className="flex items-center gap-2"
                variant="default"
              >
                <CheckCircle className="w-4 h-4" />
                Marker modul som fullført
              </Button>
            )}
          </div>
        </div>
      )}

      <div className="flex justify-between mt-4 pt-6 border-t">
        <Button 
          variant="outline" 
          disabled={selectedModule.order_index <= 1}
          onClick={handlePreviousModule}
        >
          Forrige modul
        </Button>
        <Button 
          disabled={selectedModule.order_index >= totalModules && (!selectedModule.subModules || selectedModule.subModules.length === 0)}
          onClick={handleNextModule}
        >
          {selectedModule.subModules && selectedModule.subModules.length > 0 ? 'Neste del' : 'Neste modul'}
        </Button>
      </div>
    </div>
  );
};