import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, PlayCircle, FileText, CheckCircle, Target } from "lucide-react";
import { ContentRenderer } from "./ContentRenderer";

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

interface ContentSectionProps {
  section: ContentSectionData;
  index: number;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ section, index }) => (
  <Card key={index} className="mb-6">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-primary" />
        {section.title}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="prose max-w-none">
        <ContentRenderer content={section.content} />
      </div>

      {section.video && (
        <div className="bg-muted/50 border border-border p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <PlayCircle className="w-5 h-5 text-destructive" />
            <span className="font-semibold text-foreground">Video</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{section.video}</p>
        </div>
      )}

      {section.exercise && (
        <div className="bg-muted/30 border border-border p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">Oppgave</span>
          </div>
          <div className="text-sm text-muted-foreground leading-relaxed">
            <ContentRenderer content={section.exercise} />
          </div>
        </div>
      )}

      {section.reflection && (
        <div className="bg-accent/10 border border-accent/30 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-accent-foreground" />
            <span className="font-semibold text-foreground">Refleksjonsspørsmål</span>
          </div>
          <div className="text-sm text-muted-foreground leading-relaxed">
            <ContentRenderer content={section.reflection} />
          </div>
        </div>
      )}

      {section.download && (
        <div className="bg-secondary/50 border border-secondary p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-secondary-foreground" />
            <span className="font-semibold text-foreground">Nedlasting</span>
          </div>
          <div className="text-sm text-muted-foreground leading-relaxed">
            <ContentRenderer content={section.download} />
          </div>
        </div>
      )}

      {section.selftest && (
        <Button variant="outline" className="w-full">
          Start selvtest
        </Button>
      )}
    </CardContent>
  </Card>
);