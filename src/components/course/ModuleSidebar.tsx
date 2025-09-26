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

  // Color scheme for different modules
  const getModuleColors = (index: number) => {
    const colors = [
      "bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-300 text-blue-900", // Module 1
      "bg-gradient-to-br from-emerald-50 to-green-100 border-emerald-300 text-emerald-900", // Module 2
      "bg-gradient-to-br from-amber-50 to-yellow-100 border-amber-300 text-amber-900", // Module 3
      "bg-gradient-to-br from-purple-50 to-violet-100 border-purple-300 text-purple-900", // Module 4
      "bg-gradient-to-br from-rose-50 to-pink-100 border-rose-300 text-rose-900", // Module 5
      "bg-gradient-to-br from-cyan-50 to-teal-100 border-cyan-300 text-cyan-900", // Module 6
      "bg-gradient-to-br from-orange-50 to-red-100 border-orange-300 text-orange-900", // Module 7
      "bg-gradient-to-br from-slate-50 to-gray-100 border-slate-300 text-slate-900", // Module 8
      "bg-gradient-to-br from-indigo-50 to-blue-100 border-indigo-300 text-indigo-900", // Module 9
      "bg-gradient-to-br from-lime-50 to-green-100 border-lime-300 text-lime-900", // Module 10
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
                className={`rounded-lg border-2 transition-all duration-200 ${
                  isSelected
                    ? moduleColors
                    : 'bg-background border-border hover:border-primary/20'
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
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
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
                        className={`rounded-md border transition-all duration-200 ${
                          isSubSelected
                            ? 'bg-primary/10 border-primary/30'
                            : 'bg-background border-border/50 hover:border-primary/20'
                        }`}
                      >
                        <Button
                          variant="ghost"
                          className={`w-full justify-start text-left h-auto p-2 text-sm rounded-md border-0 ${
                            isSubSelected
                              ? 'hover:bg-primary/5'
                              : 'hover:bg-muted/30'
                          }`}
                          onClick={() => {
                            onModuleSelect(module);
                            onSubModuleSelect(subModule);
                          }}
                        >
                          <div className="flex items-start gap-2 min-w-0 w-full">
                            <span className="text-muted-foreground text-xs flex-shrink-0 mt-0.5">{index + 1}.{subIndex + 1}</span>
                            <span className="leading-tight whitespace-normal break-words text-xs">
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