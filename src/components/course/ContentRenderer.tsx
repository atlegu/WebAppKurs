import React from "react";
import { BondPricingFormula } from "./BondPricingFormula";

interface ContentRendererProps {
  content: string;
}

export const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  console.log('DEBUG: renderContent called with:', { content, type: typeof content });
  
  if (!content) {
    console.log('DEBUG: No content provided');
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