import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContentSection } from "./ContentSection";

interface SubModule {
  id: string;
  title: string;
  content: any;
}

interface SubModuleContentProps {
  subModule: SubModule;
  moduleTitle: string;
  moduleIndex: number;
  subModuleIndex: number;
}

export const SubModuleContent: React.FC<SubModuleContentProps> = ({
  subModule,
  moduleTitle,
  moduleIndex,
  subModuleIndex
}) => {
  return (
    <div>
      {/* Sub-module Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Badge>Modul {moduleIndex}</Badge>
          <Badge variant="outline">{moduleIndex}.{subModuleIndex}</Badge>
        </div>
        <h2 className="text-3xl font-bold mb-4">{subModule.title}</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Del av {moduleTitle}
        </p>
      </div>

      {/* Sub-module Content */}
      <div className="space-y-6">
        {subModule.content && (
          <ContentSection 
            section={subModule.content} 
            index={0} 
          />
        )}
      </div>
    </div>
  );
};