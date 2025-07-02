import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
}

export const ModuleSidebar: React.FC<ModuleSidebarProps> = ({
  modules,
  selectedModule,
  onModuleSelect
}) => (
  <Card className="sticky top-24">
    <CardHeader>
      <CardTitle className="text-lg">Kursmoduler</CardTitle>
    </CardHeader>
    <CardContent className="space-y-2">
      {modules.map((module, index) => (
        <Button
          key={module.id}
          variant={selectedModule?.id === module.id ? "default" : "ghost"}
          className="w-full justify-start text-left h-auto p-3"
          onClick={() => onModuleSelect(module)}
        >
          <div>
            <div className="font-medium">
              Modul {index + 1}
            </div>
            <div className="text-sm opacity-80">
              {module.title}
            </div>
          </div>
        </Button>
      ))}
    </CardContent>
  </Card>
);