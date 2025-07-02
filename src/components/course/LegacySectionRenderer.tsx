import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, PlayCircle, FileText, CheckCircle, Target } from "lucide-react";
import { LegacyContentRenderer } from "./LegacyContentRenderer";

interface ContentSection {
  title: string;
  type: string;
  content: string;
  video?: string;
  reflection?: string;
  exercise?: string;
  selftest?: boolean;
  download?: string;
}

interface LegacySectionRendererProps {
  section: ContentSection;
  index: number;
  onQuizStart: () => void;
}

export const LegacySectionRenderer: React.FC<LegacySectionRendererProps> = ({ 
  section, 
  index, 
  onQuizStart 
}) => (
  <Card key={index} className="mb-6">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-primary" />
        {section.title}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="prose max-w-none">
        <LegacyContentRenderer content={section.content} />
      </div>

      {section.video && (
        <div className="bg-muted/30 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <PlayCircle className="w-5 h-5 text-red-500" />
            <span className="font-medium">Video</span>
          </div>
          <div className="relative bg-black rounded-lg overflow-hidden aspect-video group cursor-pointer hover:scale-[1.01] transition-transform">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
              <div className="bg-white/90 hover:bg-white rounded-full p-4 transition-colors">
                <PlayCircle className="w-12 h-12 text-gray-800" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-sm font-medium drop-shadow-lg">{section.video}</p>
            </div>
          </div>
        </div>
      )}

      {section.exercise && (
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="font-medium">Oppgave</span>
          </div>
          <p className="text-sm text-green-700">{section.exercise}</p>
        </div>
      )}

      {section.reflection && (
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-purple-500" />
            <span className="font-medium">Refleksjonsspørsmål</span>
          </div>
          <p className="text-sm text-purple-700">{section.reflection}</p>
        </div>
      )}

      {section.download && (
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-5 h-5 text-yellow-600" />
            <span className="font-medium">Nedlasting</span>
          </div>
          <p className="text-sm text-yellow-700">{section.download}</p>
        </div>
      )}

      {section.selftest && (
        <Button variant="outline" className="w-full" onClick={onQuizStart}>
          Start selvtest
        </Button>
      )}
    </CardContent>
  </Card>
);