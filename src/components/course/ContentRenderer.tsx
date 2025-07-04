import React from "react";
import { BondPricingFormula } from "./BondPricingFormula";
import { CourseMap } from "./CourseMap";
import { LaTeX } from "./LaTeX";

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

  // COMPLETELY separate LaTeX processing from text processing
  const processContent = (text: string) => {
    const elements: JSX.Element[] = [];
    let elementKey = 0;

    // Split into blocks separated by double newlines
    const blocks = text.split('\n\n');
    
    blocks.forEach((block, blockIndex) => {
      const trimmedBlock = block.trim();
      if (!trimmedBlock) return;

      // Check if entire block is a multi-line LaTeX equation
      if (trimmedBlock.includes('$$\\begin{aligned}') && trimmedBlock.includes('\\end{aligned}$$')) {
        const latexMatch = trimmedBlock.match(/\$\$([\s\S]*?)\$\$/);
        if (latexMatch) {
          console.log('Found multi-line LaTeX block:', latexMatch[1]);
          elements.push(
            <div key={`latex-${elementKey++}`} className="my-4">
              <LaTeX displayMode={true}>{latexMatch[1]}</LaTeX>
            </div>
          );
          return;
        }
      }

      // Process block line by line, but skip any line that contains LaTeX
      const lines = trimmedBlock.split('\n');
      
      lines.forEach((line, lineIndex) => {
        const trimmedLine = line.trim();
        if (!trimmedLine) {
          elements.push(<div key={`space-${elementKey++}`} className="h-2" />);
          return;
        }

        // If line contains ANY LaTeX, handle it specially
        if (trimmedLine.includes('$')) {
          // Display math
          if (trimmedLine.includes('$$') && trimmedLine.match(/\$\$(.*?)\$\$/)) {
            const displayMathMatch = trimmedLine.match(/\$\$(.*?)\$\$/);
            if (displayMathMatch) {
              console.log('Found display math:', displayMathMatch[1]);
              elements.push(
                <div key={`latex-${elementKey++}`} className="my-4">
                  <LaTeX displayMode={true}>{displayMathMatch[1]}</LaTeX>
                </div>
              );
              return;
            }
          }
          
          // Inline math in regular text
          const inlineMathMatches = trimmedLine.match(/\$([^$]+)\$/g);
          if (inlineMathMatches) {
            console.log('Found inline math:', inlineMathMatches);
            const parts = trimmedLine.split(/(\$[^$]+\$)/);
            
            // Handle bullet points specially
            if (trimmedLine.startsWith('•') || trimmedLine.startsWith('- ')) {
              elements.push(
                <div key={`bullet-${elementKey++}`} className="flex items-start gap-2 mb-2">
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
            } else {
              elements.push(
                <p key={`text-${elementKey++}`} className="text-foreground leading-relaxed mb-3">
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
            return;
          }
          
          // Line contains $ but no valid LaTeX - skip it entirely
          console.log('Skipping line with $ but no valid LaTeX:', trimmedLine);
          return;
        }

        // Regular text processing (NO LaTeX here)
        
        // Handle bold headers
        if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && trimmedLine.split('**').length === 3) {
          const text = trimmedLine.slice(2, -2);
          
          // Course map header
          if (text.includes('3. Kurskart')) {
            elements.push(
              <div key={`coursemap-${elementKey++}`}>
                <h3 className="text-lg font-bold text-primary mb-4">{text}</h3>
                <CourseMap />
              </div>
            );
            return;
          }
          
          elements.push(
            <h3 key={`header-${elementKey++}`} className="text-lg font-bold text-primary mb-3 mt-6">
              {text}
            </h3>
          );
          return;
        }
        
        // Handle links
        if (trimmedLine.startsWith('[') && trimmedLine.includes('](') && trimmedLine.endsWith(')')) {
          const linkMatch = trimmedLine.match(/\[([^\]]+)\]\(([^)]+)\)/);
          if (linkMatch) {
            const [, linkText, linkUrl] = linkMatch;
            elements.push(
              <div key={`link-${elementKey++}`} className="mb-3">
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
            return;
          }
        }

        // Handle bullet points (NO LaTeX here - those are handled above)
        if (trimmedLine.startsWith('•') || trimmedLine.startsWith('- ')) {
          const text = trimmedLine.slice(2);
          elements.push(
            <div key={`bullet-${elementKey++}`} className="flex items-start gap-2 mb-2">
              <span className="text-primary mt-1">•</span>
              <span className="text-foreground">{processBoldText(text)}</span>
            </div>
          );
          return;
        }
        
        // Handle bond pricing formula
        if (trimmedLine.includes('Pris = (Kupong/(1+r)') || 
            trimmedLine.includes('Pris = (Kupong/(1+r)¹') ||
            (trimmedLine.includes('Pris =') && trimmedLine.includes('Kupong') && trimmedLine.includes('Pålydende'))) {
          elements.push(<BondPricingFormula key={`bond-${elementKey++}`} />);
          return;
        }

        // Handle iframe embeds
        if (trimmedLine.includes('<iframe')) {
          elements.push(
            <div 
              key={`iframe-${elementKey++}`} 
              className="my-6 flex justify-center"
              dangerouslySetInnerHTML={{ __html: trimmedLine }}
            />
          );
          return;
        }

        // Regular paragraphs
        elements.push(
          <p key={`text-${elementKey++}`} className="text-foreground leading-relaxed mb-3">
            {processBoldText(trimmedLine)}
          </p>
        );
      });
    });

    return elements;
  };
  
  return (
    <div className="space-y-4">
      {processContent(content)}
    </div>
  );
};