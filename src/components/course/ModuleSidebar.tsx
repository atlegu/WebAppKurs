import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronDown, ChevronRight } from "lucide-react";

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
          
          return (
            <div key={module.id} className="space-y-1">
              <Button
                variant={selectedModule?.id === module.id && !selectedSubModule ? "default" : "ghost"}
                className="w-full justify-start text-left h-auto p-3"
                onClick={() => {
                  if (hasSubModules) {
                    setExpandedModules(prev => ({
                      ...prev,
                      [module.id]: !prev[module.id]
                    }));
                  } else {
                    onModuleSelect(module);
                    onSubModuleSelect(null as any); // Clear selected sub-module
                  }
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
                  {isCompleted && (
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  )}
                </div>
              </Button>
              
              {/* Sub-modules */}
              {hasSubModules && isExpanded && (
                <div className="ml-6 space-y-1">
                  {module.subModules!.map((subModule, subIndex) => (
                    <Button
                      key={subModule.id}
                      variant={selectedSubModule?.id === subModule.id ? "default" : "ghost"}
                      className="w-full justify-start text-left h-auto p-2 text-sm"
                      onClick={() => {
                        onModuleSelect(module);
                        onSubModuleSelect(subModule);
                      }}
                    >
                      <div className="flex items-start gap-2 min-w-0 w-full">
                        <span className="text-muted-foreground text-xs flex-shrink-0 mt-0.5">{index + 1}.{subIndex + 1}</span>
                        <span className="leading-tight whitespace-normal break-words text-xs">
                          {subModule.title}
                        </span>
                      </div>
                    </Button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};