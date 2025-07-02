import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Target, BookOpen } from "lucide-react";
import { ContentSection } from "./ContentSection";
import { StockPricingModule } from "./StockPricingModule";

interface Module {
  id: string;
  course_id: string;
  title: string;
  description: string | null;
  content: any;
  order_index: number;
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
  totalModules: number;
}

export const ModuleContent: React.FC<ModuleContentProps> = ({ selectedModule, totalModules }) => {
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
      </div>


      <Separator className="mb-6" />

      {/* Module Sections */}
      {selectedModule.order_index === 5 ? (
        <StockPricingModule />
      ) : (
        selectedModule.content?.sections?.map((section: ContentSectionData, index: number) => 
          <ContentSection key={index} section={section} index={index} />
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