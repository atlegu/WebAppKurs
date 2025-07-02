import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface Module {
  id: string;
  course_id: string;
  title: string;
  description: string | null;
  content: any;
  order_index: number;
}

interface ModuleSidebarProps {
  modules: Module[];
  selectedModule: Module | null;
  onModuleSelect: (module: Module) => void;
  userProgress?: Record<string, boolean>;
}

export const ModuleSidebar: React.FC<ModuleSidebarProps> = ({
  modules,
  selectedModule,
  onModuleSelect,
  userProgress
}) => {
  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="text-lg">Kursmoduler</CardTitle>
        <CardDescription>
          {modules.length} moduler tilgjengelig
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {modules.map((module, index) => {
          const isCompleted = userProgress?.[module.id];
          
          return (
            <Button
              key={module.id}
              variant={selectedModule?.id === module.id ? "default" : "ghost"}
              className="w-full justify-start text-left h-auto p-3"
              onClick={() => onModuleSelect(module)}
            >
              <div className="flex items-center justify-between w-full">
                <div>
                  <div className="font-medium">
                    Modul {index + 1}
                  </div>
                  <div className="text-sm opacity-80">
                    {module.title}
                  </div>
                </div>
                {isCompleted && (
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                )}
              </div>
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
};