import React from "react";
import { BondPricingFormula } from "./BondPricingFormula";
import { CourseMap } from "./CourseMap";
import { LaTeX } from "./LaTeX";
import { PortfolioRiskCalculator } from "./PortfolioRiskCalculator";
import { RiskMeasurementCalculator } from "./RiskMeasurementCalculator";
import { ReturnCalculator } from "./ReturnCalculator";
import { RiskReturnVisualization } from "./RiskReturnVisualization";

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
        
        // Handle videos (YouTube, Vimeo, etc.)
        if (trimmedLine.startsWith('!video[') && trimmedLine.includes('](') && trimmedLine.endsWith(')')) {
          const videoMatch = trimmedLine.match(/!video\[([^\]]*)\]\(([^)]+)\)/);
          if (videoMatch) {
            const [, title, videoUrl] = videoMatch;
            // Convert various video URLs to embed format
            let embedUrl = videoUrl;
            
            if (videoUrl.includes('youtube.com/watch?v=')) {
              const videoId = videoUrl.split('v=')[1]?.split('&')[0];
              embedUrl = `https://www.youtube.com/embed/${videoId}`;
            } else if (videoUrl.includes('youtu.be/')) {
              const videoId = videoUrl.split('youtu.be/')[1]?.split('?')[0];
              embedUrl = `https://www.youtube.com/embed/${videoId}`;
            } else if (videoUrl.includes('vimeo.com/')) {
              const videoId = videoUrl.split('vimeo.com/')[1];
              embedUrl = `https://player.vimeo.com/video/${videoId}`;
            }
            
            return (
              <div key={index} className="my-8">
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src={embedUrl}
                    title={title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                {title && (
                  <p className="text-center text-sm text-muted-foreground mt-2">{title}</p>
                )}
              </div>
            );
          }
        }

        // Handle reflection questions
        if (trimmedLine.startsWith('?? ')) {
          const question = trimmedLine.slice(3);
          return (
            <div key={index} className="my-6 p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl font-bold">💭</span>
                <div>
                  <h4 className="font-semibold text-primary mb-2 text-sm uppercase tracking-wide">
                    Spørsmål til ettertanke
                  </h4>
                  <p className="text-foreground leading-relaxed">{question}</p>
                </div>
              </div>
            </div>
          );
        }

        // Handle think boxes
        if (trimmedLine.startsWith('!think ')) {
          const content = trimmedLine.slice(7);
          return (
            <div key={index} className="my-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 text-xl">🤔</span>
                <div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2 text-sm uppercase tracking-wide">
                    Tenk over dette
                  </h4>
                  <p className="text-foreground leading-relaxed">{content}</p>
                </div>
              </div>
            </div>
          );
        }

        // Handle insight boxes
        if (trimmedLine.startsWith('!insight ')) {
          const content = trimmedLine.slice(9);
          return (
            <div key={index} className="my-6 p-5 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-yellow-600 dark:text-yellow-400 text-xl">💡</span>
                <div>
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2 text-sm uppercase tracking-wide">
                    Viktig innsikt
                  </h4>
                  <p className="text-foreground leading-relaxed">{content}</p>
                </div>
              </div>
            </div>
          );
        }

        // Handle images
        if (trimmedLine.startsWith('![') && trimmedLine.includes('](') && trimmedLine.endsWith(')')) {
          const imageMatch = trimmedLine.match(/!\[([^\]]*)\]\(([^)]+)\)/);
          if (imageMatch) {
            const [, altText, imageUrl] = imageMatch;
            // Convert Supabase storage URLs to public URLs
            const publicUrl = imageUrl.startsWith('course-images/') 
              ? `https://tqpryezzddufpovfbpld.supabase.co/storage/v1/object/public/course-images/${imageUrl.replace('course-images/', '')}`
              : imageUrl;
            
            return (
              <div key={index} className="my-6 flex justify-center">
                <img 
                  src={publicUrl}
                  alt={altText}
                  className="max-w-full h-auto rounded-lg shadow-sm"
                  loading="lazy"
                />
              </div>
            );
          }
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
        
        // Handle interactive components
        if (trimmedLine.includes('!component:portfolio-calculator')) {
          return <PortfolioRiskCalculator key={index} />;
        }
        
        if (trimmedLine.includes('!component:risk-calculator')) {
          return <RiskMeasurementCalculator key={index} />;
        }
        
        if (trimmedLine.includes('!component:return-calculator')) {
          return <ReturnCalculator key={index} />;
        }
        
        if (trimmedLine.includes('!component:risk-return-viz')) {
          return <RiskReturnVisualization key={index} />;
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