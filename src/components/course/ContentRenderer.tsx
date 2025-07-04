import React from "react";
import { BondPricingFormula } from "./BondPricingFormula";
import { CourseMap } from "./CourseMap";
import { LaTeX } from "./LaTeX";

interface ContentRendererProps {
  content: string;
}

export const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  if (!content) {
    return null;
  }

  // Helper function to process bold text within any string
  const processBoldText = (text: string) => {
    if (!text.includes('**')) return text;
    
    const parts = text.split('**');
    return parts.map((part, partIndex) => {
      if (partIndex % 2 === 1) {
        return <strong key={partIndex} className="font-bold">{part}</strong>;
      }
      return part;
    });
  };

  // Pre-process multi-line LaTeX blocks
  const preprocessLatex = (text: string) => {
    // Replace multi-line LaTeX blocks with placeholders
    const multiLinePattern = /\$\$\\begin\{aligned\}[\s\S]*?\\end\{aligned\}\$\$/g;
    const latexBlocks: string[] = [];
    
    const processedText = text.replace(multiLinePattern, (match) => {
      const index = latexBlocks.length;
      latexBlocks.push(match);
      return `__LATEX_BLOCK_${index}__`;
    });
    
    return { processedText, latexBlocks };
  };

  const { processedText, latexBlocks } = preprocessLatex(content);
  
  return (
    <div className="space-y-4">
      {processedText.split('\n').map((line, index) => {
        const trimmedLine = line.trim();
        
        if (!trimmedLine) return <div key={index} className="h-2" />;
        
        // Handle LaTeX block placeholders
        const latexBlockMatch = trimmedLine.match(/^__LATEX_BLOCK_(\d+)__$/);
        if (latexBlockMatch) {
          const blockIndex = parseInt(latexBlockMatch[1]);
          const latexContent = latexBlocks[blockIndex].slice(2, -2); // Remove $$
          return (
            <div key={index} className="my-4">
              <LaTeX displayMode={true}>{latexContent}</LaTeX>
            </div>
          );
        }
        
        // Handle bold headers with ** 
        if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && trimmedLine.split('**').length === 3) {
          const text = trimmedLine.slice(2, -2);
          
          // If this is the course map header
          if (text.includes('3. Kurskart')) {
            return (
              <div key={index}>
                <h3 className="text-lg font-bold text-primary mb-4">{text}</h3>
                <CourseMap />
              </div>
            );
          }
          
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

        // Handle bullet points with LaTeX support
        if (trimmedLine.startsWith('•') || trimmedLine.startsWith('- ')) {
          const text = trimmedLine.slice(2);
          
          // Check if bullet point contains LaTeX
          if (text.includes('$')) {
            const inlineMathMatches = text.match(/\$([^$]+)\$/g);
            if (inlineMathMatches) {
              const parts = text.split(/(\$[^$]+\$)/);
              return (
                <div key={index} className="flex items-start gap-2 mb-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground">
                    {parts.map((part, partIndex) => {
                      if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
                        const latexContent = part.slice(1, -1);
                        return <LaTeX key={partIndex}>{latexContent}</LaTeX>;
                      }
                      return <span key={partIndex}>{processBoldText(part)}</span>;
                    })}
                  </span>
                </div>
              );
            }
          }
          
          return (
            <div key={index} className="flex items-start gap-2 mb-2">
              <span className="text-primary mt-1">•</span>
              <span className="text-foreground">{processBoldText(text)}</span>
            </div>
          );
        }
        
        // Handle single-line LaTeX (display math)
        if (trimmedLine.includes('$$')) {
          const displayMathMatch = trimmedLine.match(/\$\$(.*?)\$\$/);
          if (displayMathMatch) {
            const latexContent = displayMathMatch[1];
            return (
              <div key={index} className="my-4">
                <LaTeX displayMode={true}>{latexContent}</LaTeX>
              </div>
            );
          }
        }
        
        // Handle inline LaTeX in regular text
        if (trimmedLine.includes('$')) {
          const inlineMathMatches = trimmedLine.match(/\$([^$]+)\$/g);
          if (inlineMathMatches) {
            const parts = trimmedLine.split(/(\$[^$]+\$)/);
            return (
              <p key={index} className="text-foreground leading-relaxed mb-3">
                {parts.map((part, partIndex) => {
                  if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
                    const latexContent = part.slice(1, -1);
                    return <LaTeX key={partIndex}>{latexContent}</LaTeX>;
                  }
                  return <span key={partIndex}>{processBoldText(part)}</span>;
                })}
              </p>
            );
          }
        }
        
        // Handle bond pricing formula
        if (trimmedLine.includes('Pris = (Kupong/(1+r)') || 
            trimmedLine.includes('Pris = (Kupong/(1+r)¹') ||
            (trimmedLine.includes('Pris =') && trimmedLine.includes('Kupong') && trimmedLine.includes('Pålydende'))) {
          return <BondPricingFormula key={index} />;
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

        // Regular paragraphs
        return (
          <p key={index} className="text-foreground leading-relaxed mb-3">
            {processBoldText(trimmedLine)}
          </p>
        );
      })}
    </div>
  );
};