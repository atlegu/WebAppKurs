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
          className={`p-6 rounded-xl bg-gradient-to-r ${moduleTheme?.gradient || 'from-gray-50 to-gray-100'} border-2 ${moduleTheme ? `border-${moduleTheme.primary}-200` : 'border-gray-200'} mb-6`}
        >
          <div className="flex items-center gap-2 mb-3">
            <Badge className={moduleTheme?.badge || 'bg-gray-100 text-gray-800'}>
              Modul {selectedModule.order_index}
            </Badge>
            <Badge variant="outline">📘</Badge>
          </div>
          <h2 className={`text-3xl font-bold mb-3 ${moduleTheme?.accent || 'text-gray-900'}`}>
            {selectedModule.title}
          </h2>
          <p className="text-lg opacity-80 mb-4">{selectedModule.description}</p>
        </div>
        
        {/* Show sub-modules overview if available */}
        {selectedModule.subModules && selectedModule.subModules.length > 0 && (
          <div className={`bg-gradient-to-r ${moduleTheme?.gradient || 'from-gray-50 to-gray-100'} rounded-lg p-4 mb-6 border ${moduleTheme ? `border-${moduleTheme.primary}-200` : 'border-gray-200'}`}>
            <h3 className={`font-semibold mb-3 ${moduleTheme?.accent || 'text-gray-900'}`}>Denne modulen inneholder:</h3>
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
              <div className="flex items-center gap-2 text-green-600">
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