import React from "react";
import { BondPricingFormula } from "./BondPricingFormula";
import { CourseMap } from "./CourseMap";

interface ContentRendererProps {
  content: string;
}

export const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  console.log('ContentRenderer: Content received:', content);
  console.log('ContentRenderer: Content type:', typeof content);
  console.log('ContentRenderer: Content length:', content?.length);
  
  if (!content) {
    console.log('ContentRenderer: No content provided, returning null');
    return null;
  }

  // Helper function to process bold text within any string
  const processBoldText = (text: string) => {
    if (!text.includes('**')) return text;
    
    const parts = text.split('**');
    return parts.map((part, partIndex) => {
      if (partIndex % 2 === 1) {
        // This is content between ** - make it bold
        return <strong key={partIndex} className="font-bold">{part}</strong>;
      }
      return part;
    });
  };
  
  return (
    <div className="space-y-4">
      {content.split('\n').map((line, index) => {
        const trimmedLine = line.trim();
        
        if (!trimmedLine) return <div key={index} className="h-2" />;
        
        // Handle bold headers with ** 
        if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && trimmedLine.split('**').length === 3) {
          const text = trimmedLine.slice(2, -2);
          return (
            <h3 key={index} className="text-lg font-bold text-primary mb-3 mt-6">
              {text}
            </h3>
          );
        }
        
        // Handle links
        if (trimmedLine.startsWith('[') && trimmedLine.includes('](') && trimmedLine.endsWith(')')) {
          const linkMatch = trimmedLine.match(/\[([^\]]+)\]\(([^)]+)\)/);
          if (linkMatch) {
            const [, linkText, linkUrl] = linkMatch;
            return (
              <div key={index} className="mb-3">
                <a 
                  href={linkUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 underline"
                >
                  {linkText}
                  <span className="text-xs">↗</span>
                </a>
              </div>
            );
          }
        }

        // Handle bullet points (with bold text support)
        if (trimmedLine.startsWith('•') || trimmedLine.startsWith('- ')) {
          const text = trimmedLine.slice(2);
          return (
            <div key={index} className="flex items-start gap-2 mb-2">
              <span className="text-primary mt-1">•</span>
              <span className="text-foreground">{processBoldText(text)}</span>
            </div>
          );
        }
        
        // Handle bond pricing formula specifically
        if (trimmedLine.includes('Pris = (Kupong/(1+r)') || 
            trimmedLine.includes('Pris = (Kupong/(1+r)¹') ||
            (trimmedLine.includes('Pris =') && trimmedLine.includes('Kupong') && trimmedLine.includes('Pålydende'))) {
          return <BondPricingFormula key={index} />;
        }

        // Handle course map specifically
        if (index === 42) {
          console.log('ContentRenderer: Line 42 exact content:', JSON.stringify(trimmedLine));
          console.log('ContentRenderer: Includes Kurskart?', trimmedLine.includes('Kurskart'));
          console.log('ContentRenderer: Includes Finans-linjen?', trimmedLine.includes('Finans-linjen'));
        }
        
        if (trimmedLine.includes('Kurskart') && trimmedLine.includes('Finans-linjen')) {
          console.log('ContentRenderer: FOUND KURSKART! Rendering CourseMap for line:', trimmedLine);
          return (
            <div key={index}>
              <h3 className="text-lg font-bold text-primary mb-4">3. Kurskart – «Finans-linjen»</h3>
              <CourseMap />
            </div>
          );
        }
        
        // Handle iframe embeds
        if (trimmedLine.includes('<iframe')) {
          return (
            <div 
              key={index} 
              className="my-6 flex justify-center"
              dangerouslySetInnerHTML={{ __html: trimmedLine }}
            />
          );
        }

        // Handle formulas and code
        if (trimmedLine.includes('=') && (trimmedLine.includes('(') || trimmedLine.includes('^'))) {
          return (
            <div key={index} className="bg-muted p-3 rounded-lg my-3 border">
              <code className="text-sm font-mono">{trimmedLine}</code>
            </div>
          );
        }
        
        // Regular paragraphs (with bold text support)
        return (
          <p key={index} className="text-foreground leading-relaxed mb-3">
            {processBoldText(trimmedLine)}
          </p>
        );
      })}
    </div>
  );
};