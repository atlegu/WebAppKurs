import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronDown, ChevronRight } from "lucide-react";
import { useProgressContext } from "@/contexts/ProgressContext";

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

interface ModuleSidebarProps {
  modules: Module[];
  selectedModule: Module | null;
  selectedSubModule: SubModule | null;
  onModuleSelect: (module: Module) => void;
  onSubModuleSelect: (subModule: SubModule) => void;
  userProgress?: Record<string, boolean>;
}

export const ModuleSidebar: React.FC<ModuleSidebarProps> = ({
  modules,
  selectedModule,
  selectedSubModule,
  onModuleSelect,
  onSubModuleSelect,
  userProgress
}) => {
  const { isModuleCompleted } = useProgressContext();
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>(() => {
    // Auto-expand the bonds module if it has sub-modules
    const initialExpanded: Record<string, boolean> = {};
    modules.forEach(module => {
      if (module.subModules && module.subModules.length > 0) {
        initialExpanded[module.id] = true;
      }
    });
    return initialExpanded;
  });

  // Professional financial education color scheme for modules
  const getModuleColors = (index: number) => {
    const colors = [
      "bg-gradient-to-br from-module-1-50 to-module-1-100 border-module-1-200 text-module-1-700 shadow-module-1-200/25", // Module 1: Financial Blue
      "bg-gradient-to-br from-module-2-50 to-module-2-100 border-module-2-200 text-module-2-700 shadow-module-2-200/25", // Module 2: Growth Green
      "bg-gradient-to-br from-module-3-50 to-module-3-100 border-module-3-200 text-module-3-700 shadow-module-3-200/25", // Module 3: Professional Amber
      "bg-gradient-to-br from-module-4-50 to-module-4-100 border-module-4-200 text-module-4-700 shadow-module-4-200/25", // Module 4: Deep Purple
      "bg-gradient-to-br from-module-5-50 to-module-5-100 border-module-5-200 text-module-5-700 shadow-module-5-200/25", // Module 5: Rose
      "bg-gradient-to-br from-module-6-50 to-module-6-100 border-module-6-200 text-module-6-700 shadow-module-6-200/25", // Module 6: Sustainable Teal
      "bg-gradient-to-br from-esg-environmental/10 to-success/10 border-esg-environmental/30 text-esg-environmental shadow-success/25", // Module 7: ESG Environmental
      "bg-gradient-to-br from-esg-social/10 to-esg-social/20 border-esg-social/30 text-esg-social shadow-esg-social/25", // Module 8: ESG Social
      "bg-gradient-to-br from-esg-governance/10 to-esg-governance/20 border-esg-governance/30 text-esg-governance shadow-esg-governance/25", // Module 9: ESG Governance
      "bg-gradient-to-br from-financial-teal/10 to-accent/10 border-accent/30 text-accent shadow-accent/25", // Module 10: Sustainable Finance
    ];
    return colors[index % colors.length];
  };
  return (
    <Card className="sticky top-24 w-full">
      <CardHeader>
        <CardTitle className="text-lg">Kursmoduler</CardTitle>
        <CardDescription>
          {modules.length} moduler tilgjengelig
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {modules.map((module, index) => {
          const isCompleted = userProgress?.[module.id];
          const isExpanded = expandedModules[module.id];
          const hasSubModules = module.subModules && module.subModules.length > 0;
          const isSelected = selectedModule?.id === module.id && !selectedSubModule;
          const moduleColors = getModuleColors(index);

          return (
            <div key={module.id} className="space-y-1">
              <div
                className={`rounded-xl border-2 transition-all duration-300 shadow-sm hover:shadow-md ${
                  isSelected
                    ? moduleColors
                    : 'bg-background border-border hover:border-primary/30 hover:bg-primary/5'
                }`}
              >
                <Button
                  variant="ghost"
                  className={`w-full justify-start text-left h-auto p-3 rounded-lg border-0 ${
                    isSelected
                      ? 'hover:bg-transparent'
                      : 'hover:bg-muted/50'
                  }`}
                  onClick={() => {
                    // Always select the module to show overview
                    onModuleSelect(module);
                    onSubModuleSelect(null as any); // Clear selected sub-module

                    // Also toggle expand/collapse if it has sub-modules
                    if (hasSubModules) {
                      setExpandedModules(prev => ({
                        ...prev,
                        [module.id]: !prev[module.id]
                      }));
                    }

                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                <div className="flex items-start justify-between w-full min-w-0">
                  <div className="flex items-start gap-2 min-w-0 flex-1">
                    {hasSubModules && (
                      <div className="mt-1 flex-shrink-0">
                        {isExpanded ? 
                          <ChevronDown className="w-4 h-4" /> : 
                          <ChevronRight className="w-4 h-4" />
                        }
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-sm">
                        Modul {index + 1}
                      </div>
                      <div className="text-xs opacity-80 leading-tight whitespace-normal break-words">
                        {module.title}
                      </div>
                    </div>
                  </div>
                  {isModuleCompleted(module.id) && (
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1 drop-shadow-sm" />
                  )}
                </div>
                </Button>
              </div>
              
              {/* Sub-modules */}
              {hasSubModules && isExpanded && (
                <div className="ml-6 space-y-1">
                  {module.subModules!.map((subModule, subIndex) => {
                    const isSubSelected = selectedSubModule?.id === subModule.id;
                    return (
                      <div
                        key={subModule.id}
                        className={`rounded-lg border transition-all duration-200 shadow-sm ${
                          isSubSelected
                            ? 'bg-gradient-to-r from-primary/8 to-accent/8 border-primary/25 shadow-primary/10'
                            : 'bg-background/80 border-border/40 hover:border-primary/20 hover:bg-primary/5 hover:shadow-md'
                        }`}
                      >
                        <Button
                          variant="ghost"
                          className={`w-full justify-start text-left h-auto p-3 text-sm rounded-lg border-0 ${
                            isSubSelected
                              ? 'hover:bg-primary/5'
                              : 'hover:bg-transparent'
                          }`}
                          onClick={() => {
                            onModuleSelect(module);
                            onSubModuleSelect(subModule);
                          }}
                        >
                          <div className="flex items-start gap-3 min-w-0 w-full">
                            <span className={`text-xs flex-shrink-0 mt-0.5 font-medium ${
                              isSubSelected ? 'text-primary' : 'text-muted-foreground'
                            }`}>
                              {index + 1}.{subIndex + 1}
                            </span>
                            <span className={`leading-tight whitespace-normal break-words text-xs ${
                              isSubSelected ? 'text-primary font-medium' : 'text-foreground'
                            }`}>
                              {subModule.title.replace(/^\d+\.\d+\s+/, '')}
                            </span>
                          </div>
                        </Button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};