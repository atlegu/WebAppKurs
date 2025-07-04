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
  
  // Pre-process multi-line LaTeX blocks before splitting by lines
  const processMultiLineLatex = (text: string) => {
    // Handle multi-line display math blocks ($$\begin{aligned}...\end{aligned}$$)
    const multiLinePattern = /\$\$\\begin\{aligned\}[\s\S]*?\\end\{aligned\}\$\$/g;
    let processedText = text;
    const latexBlocks: { placeholder: string; content: string }[] = [];
    let blockIndex = 0;

    // Replace multi-line LaTeX with placeholders
    processedText = processedText.replace(multiLinePattern, (match) => {
      const placeholder = `__MULTILINE_LATEX_${blockIndex}__`;
      latexBlocks.push({ placeholder, content: match });
      blockIndex++;
      return placeholder;
    });

    return { processedText, latexBlocks };
  };

  const { processedText, latexBlocks } = processMultiLineLatex(content);
  
  return (
    <div className="space-y-4">
      {processedText.split('\n').map((line, index) => {
        const trimmedLine = line.trim();
        console.log(`Line ${index}: "${trimmedLine}"`);
        
        if (!trimmedLine) return <div key={index} className="h-2" />;
        
        // Handle multi-line LaTeX placeholders
        const latexBlock = latexBlocks.find(block => trimmedLine === block.placeholder);
        if (latexBlock) {
          const latexContent = latexBlock.content.slice(2, -2); // Remove $$ from both ends
          console.log(`Found multi-line LaTeX block: ${latexContent}`);
          return (
            <div key={index} className="my-4">
              <LaTeX displayMode={true}>{latexContent}</LaTeX>
            </div>
          );
        }
        
        // Handle bold headers with ** 
        if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && trimmedLine.split('**').length === 3) {
          const text = trimmedLine.slice(2, -2);
          
          // If this is the course map header (specifically "3. Kurskart"), render the course map
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

        // Handle bullet points FIRST (with bold text and LaTeX support)
        if (trimmedLine.startsWith('•') || trimmedLine.startsWith('- ')) {
          const text = trimmedLine.slice(2);
          
          // Check if the bullet point contains LaTeX
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
                      // Process the text part but remove redundant variable names that are already in LaTeX
                      const cleanedPart = part
                        .replace(/\bPstart\w*\b\s*/gi, '') // Remove "Pstart", "Pstarter", etc.
                        .replace(/\bPslutt\w*\b\s*/gi, '') // Remove "Pslutt", "Pslutter", etc.
                        .replace(/\bDD?\w*\b\s*/g, '') // Remove "D", "DD", etc.
                        .replace(/\s+/g, ' ') // Clean up extra spaces
                        .trim();
                      return cleanedPart ? processBoldText(cleanedPart) : '';
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
        
        // Handle LaTeX math expressions EARLY - before any other processing
        if (trimmedLine.includes('$')) {
          console.log(`Processing LaTeX line ${index}: "${trimmedLine}"`);
          
          // Check for display math ($$...$$)
          if (trimmedLine.includes('$$')) {
            const displayMathMatch = trimmedLine.match(/\$\$(.*?)\$\$/g);
            if (displayMathMatch) {
              console.log(`Found display math: ${displayMathMatch}`);
              return displayMathMatch.map((match, mathIndex) => {
                const latexContent = match.slice(2, -2); // Remove $$ from both ends
                return (
                  <div key={`${index}-${mathIndex}`} className="my-4">
                    <LaTeX displayMode={true}>{latexContent}</LaTeX>
                  </div>
                );
              });
            }
          }
          
          // Check for inline math ($...$)
          const inlineMathMatches = trimmedLine.match(/\$([^$]+)\$/g);
          if (inlineMathMatches) {
            console.log(`Found inline math: ${inlineMathMatches}`);
            const parts = trimmedLine.split(/(\$[^$]+\$)/);
            return (
              <p key={index} className="text-foreground leading-relaxed mb-3">
                {parts.map((part, partIndex) => {
                  if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
                    const latexContent = part.slice(1, -1); // Remove $ from both ends
                    return <LaTeX key={partIndex}>{latexContent}</LaTeX>;
                  }
                  return processBoldText(part);
                })}
              </p>
            );
          }
          
          // If line contains $ but no matches, still return early to prevent double processing
          console.log(`Line contains $ but no LaTeX matches found: "${trimmedLine}"`);
          return (
            <p key={index} className="text-foreground leading-relaxed mb-3">
              {processBoldText(trimmedLine)}
            </p>
          );
        }
        
        // Handle bond pricing formula specifically
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

        // Handle formulas and code (but NOT LaTeX which has $ symbols - already handled above)
        if (trimmedLine.includes('=') && (trimmedLine.includes('(') || trimmedLine.includes('^')) && !trimmedLine.includes('$')) {
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