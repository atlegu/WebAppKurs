import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Target, BookOpen } from "lucide-react";
import { ContentSection } from "./ContentSection";
import { SubModuleContent } from "./SubModuleContent";

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
  totalModules: number;
}

export const ModuleContent: React.FC<ModuleContentProps> = ({ 
  selectedModule, 
  selectedSubModule, 
  onSubModuleSelect,
  totalModules 
}) => {
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

  return (
    <div>
      {/* Module Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Badge>Modul {selectedModule.order_index}</Badge>
          <Badge variant="outline">📘</Badge>
        </div>
        <h2 className="text-3xl font-bold mb-4">{selectedModule.title}</h2>
        <p className="text-lg text-muted-foreground mb-6">{selectedModule.description}</p>
        
        {/* Show sub-modules overview if available */}
        {selectedModule.subModules && selectedModule.subModules.length > 0 && (
          <div className="bg-muted/50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-3">Denne modulen inneholder:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {selectedModule.subModules.map((subModule, index) => (
                <div key={subModule.id} className="flex items-center gap-2 text-sm">
                  <span className="font-medium text-primary">{selectedModule.order_index}.{index + 1}</span>
                  <span>{subModule.title}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-3">
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
      <div className="flex justify-between mt-8 pt-6 border-t">
        <Button variant="outline" disabled={selectedModule.order_index <= 1}>
          Forrige modul
        </Button>
        <Button disabled={selectedModule.order_index >= totalModules}>
          Neste modul
        </Button>
      </div>
    </div>
  );
};