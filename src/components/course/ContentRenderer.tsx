import React from "react";
import { BondPricingFormula } from "./BondPricingFormula";
import { CourseMap } from "./CourseMap";
import { LaTeX } from "./LaTeX";
import { MarketEfficiencyTable } from "./MarketEfficiencyTable";
import { PortfolioRiskCalculator } from "./PortfolioRiskCalculator";
import { RiskMeasurementCalculator } from "./RiskMeasurementCalculator";
import { ReturnCalculator } from "./ReturnCalculator";
import { RiskReturnVisualization } from "./RiskReturnVisualization";
import { CFORolesInfographic } from "./CFORolesInfographic";
import { LiquiditySimulator } from "./LiquiditySimulator";
import { BaselineQuiz } from "./BaselineQuiz";
import { LearningPlanCreator } from "./LearningPlanCreator";
import { ModuleConnectionsChart } from "./ModuleConnectionsChart";
import { RandomWalkSimulator } from "./RandomWalkSimulator";
import Portfoljeped from "../Portfoljeped";
import PortfolioRiskQuiz from "./PortfolioRiskQuiz";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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

  // Helper function to parse markdown tables
  const parseTable = (lines: string[], startIndex: number) => {
    const tableLines = [];
    let currentIndex = startIndex;
    
    // Find all table lines (starting from header)
    while (currentIndex < lines.length) {
      const line = lines[currentIndex].trim();
      if (line.includes('|')) {
        tableLines.push(line);
        currentIndex++;
      } else {
        break;
      }
    }
    
    if (tableLines.length < 2) return null; // Need at least header and separator
    
    const headerLine = tableLines[0];
    const separatorLine = tableLines[1];
    const dataLines = tableLines.slice(2);
    
    // Parse header
    const headers = headerLine.split('|').map(h => h.trim()).filter(h => h);
    
    // Parse data rows
    const rows = dataLines.map(line => 
      line.split('|').map(cell => cell.trim()).filter(cell => cell)
    );
    
    return {
      headers,
      rows,
      endIndex: currentIndex - 1
    };
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
  
  // Handle escaped newlines from database
  const normalizedContent = processedText.replace(/\\n/g, '\n');
  const lines = normalizedContent.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    const trimmedLine = line.trim();
    
    if (!trimmedLine) {
      elements.push(<div key={i} className="h-2" />);
      i++;
      continue;
    }
    
    // Handle markdown tables
    if (trimmedLine.includes('|') && trimmedLine.startsWith('|')) {
      const tableData = parseTable(lines, i);
      if (tableData) {
        elements.push(
          <div key={i} className="my-6 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  {tableData.headers.map((header, headerIndex) => (
                    <TableHead key={headerIndex} className="font-semibold">
                      {processBoldText(header)}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.rows.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <TableCell key={cellIndex}>
                        {processBoldText(cell)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        );
        i = tableData.endIndex + 1;
        continue;
      }
    }
    
    // Handle LaTeX block placeholders
    const latexBlockMatch = trimmedLine.match(/^__LATEX_BLOCK_(\d+)__$/);
    if (latexBlockMatch) {
      const blockIndex = parseInt(latexBlockMatch[1]);
      const latexContent = latexBlocks[blockIndex].slice(2, -2); // Remove $$
      elements.push(
        <div key={i} className="my-4">
          <LaTeX displayMode={true}>{latexContent}</LaTeX>
        </div>
      );
      i++;
      continue;
    }
    // Handle bold headers with ** 
    if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && trimmedLine.split('**').length === 3) {
      const text = trimmedLine.slice(2, -2);
      
      // If this is the course map header
      if (text.includes('3. Kurskart')) {
        elements.push(
          <div key={i}>
            <h3 className="text-lg font-bold text-primary mb-4">{text}</h3>
            <CourseMap />
          </div>
        );
        i++;
        continue;
      }
      
      // Check if this is a special styled section
      let sectionType = 'default';
      let icon = '';
      let colorClasses = '';
      
      if (text.includes('Case:') || text.includes('Fintech-revolusjon') || text.includes('Vipps')) {
        sectionType = 'case';
        icon = '💼';
        colorClasses = 'bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800';
      } else if (text.includes('Test forståelsen') || text.includes('Sant eller usant') || text.includes('Selvtest')) {
        sectionType = 'quiz';
        icon = '❓';
        colorClasses = 'bg-green-50 border-green-200 dark:bg-green-950/30 dark:border-green-800';
      } else if (text.includes('🎯 Det viktigste') || text.includes('Oppsummering')) {
        sectionType = 'summary';
        icon = '🎯';
        colorClasses = 'bg-purple-50 border-purple-200 dark:bg-purple-950/30 dark:border-purple-800';
      }
      
      if (sectionType !== 'default') {
        elements.push(
          <div key={i} className={`my-6 p-5 ${colorClasses} border rounded-lg`}>
            <div className="flex items-start gap-3">
              <span className="text-xl">{icon}</span>
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-3">{text}</h4>
              </div>
            </div>
          </div>
        );
      } else {
        elements.push(
          <h3 key={i} className="text-lg font-bold text-primary mb-3 mt-6">
            {text}
          </h3>
        );
      }
      i++;
      continue;
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
        
        elements.push(
          <div key={i} className="my-8">
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
        i++;
        continue;
      }
    }

    // Handle reflection questions
    if (trimmedLine.startsWith('?? ')) {
      const question = trimmedLine.slice(3);
      elements.push(
        <div key={i} className="my-6 p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
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
      i++;
      continue;
    }

    // Handle "Refleksjonsspørsmål" text blocks with same styling
    if (trimmedLine.includes('**Refleksjonsspørsmål:**') || trimmedLine.startsWith('Refleksjonsspørsmål:')) {
      const questionText = trimmedLine.replace(/\*\*Refleksjonsspørsmål:\*\*\s*/, '').replace(/^Refleksjonsspørsmål:\s*/, '');
      elements.push(
        <div key={i} className="my-6 p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
          <div className="flex items-start gap-3">
            <span className="text-primary text-xl font-bold">💭</span>
            <div>
              <h4 className="font-semibold text-primary mb-2 text-sm uppercase tracking-wide">
                Spørsmål til ettertanke
              </h4>
              <p className="text-foreground leading-relaxed">{questionText}</p>
            </div>
          </div>
        </div>
      );
      i++;
      continue;
    }

    // Handle think boxes
    if (trimmedLine.startsWith('!think ')) {
      const content = trimmedLine.slice(7);
      elements.push(
        <div key={i} className="my-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
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
      i++;
      continue;
    }

    // Handle insight boxes
    if (trimmedLine.startsWith('!insight ')) {
      const contentValue = trimmedLine.slice(9);
      elements.push(
        <div key={i} className="my-6 p-5 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <div className="flex items-start gap-3">
            <span className="text-yellow-600 dark:text-yellow-400 text-xl">💡</span>
            <div>
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2 text-sm uppercase tracking-wide">
                Viktig innsikt
              </h4>
              <p className="text-foreground leading-relaxed">{contentValue}</p>
            </div>
          </div>
        </div>
      );
      i++;
      continue;
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
        
        elements.push(
          <div key={i} className="my-6 flex justify-center">
            <img 
              src={publicUrl}
              alt={altText}
              className="max-w-full h-auto rounded-lg shadow-sm"
              loading="lazy"
            />
          </div>
        );
        i++;
        continue;
      }
    }

    // Handle links
    if (trimmedLine.startsWith('[') && trimmedLine.includes('](') && trimmedLine.endsWith(')')) {
      const linkMatch = trimmedLine.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        const [, linkText, linkUrl] = linkMatch;
        elements.push(
          <div key={i} className="mb-3">
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
        i++;
        continue;
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
          elements.push(
            <div key={i} className="flex items-start gap-2 mb-2">
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
          i++;
          continue;
        }
      }
      
      elements.push(
        <div key={i} className="flex items-start gap-2 mb-2">
          <span className="text-primary mt-1">•</span>
          <span className="text-foreground">{processBoldText(text)}</span>
        </div>
      );
      i++;
      continue;
    }
    
    // Handle single-line LaTeX (display math)
    if (trimmedLine.includes('$$')) {
      const displayMathMatch = trimmedLine.match(/\$\$(.*?)\$\$/);
      if (displayMathMatch) {
        const latexContent = displayMathMatch[1];
        elements.push(
          <div key={i} className="my-4">
            <LaTeX displayMode={true}>{latexContent}</LaTeX>
          </div>
        );
        i++;
        continue;
      }
    }
    
    // Handle inline LaTeX in regular text
    if (trimmedLine.includes('$')) {
      const inlineMathMatches = trimmedLine.match(/\$([^$]+)\$/g);
      if (inlineMathMatches) {
        const parts = trimmedLine.split(/(\$[^$]+\$)/);
        elements.push(
          <p key={i} className="text-foreground leading-relaxed mb-3">
            {parts.map((part, partIndex) => {
              if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
                const latexContent = part.slice(1, -1);
                return <LaTeX key={partIndex}>{latexContent}</LaTeX>;
              }
              return <span key={partIndex}>{processBoldText(part)}</span>;
            })}
          </p>
        );
        i++;
        continue;
      }
    }
    
    // Handle interactive components
    if (trimmedLine.includes('!component:baseline-quiz')) {
      elements.push(<BaselineQuiz key={i} />);
      i++;
      continue;
    }
    
    if (trimmedLine.includes('!component:learning-plan')) {
      elements.push(<LearningPlanCreator key={i} />);
      i++;
      continue;
    }
    
    if (trimmedLine.includes('!component:module-connections')) {
      elements.push(<ModuleConnectionsChart key={i} />);
      i++;
      continue;
    }
    
    if (trimmedLine.includes('!component:portfolio-calculator')) {
      elements.push(<PortfolioRiskCalculator key={i} />);
      elements.push(<Portfoljeped key={`${i}-overlay`} />);
      i++;
      continue;
    }
    
    if (trimmedLine.includes('!component:risk-calculator')) {
      elements.push(<RiskMeasurementCalculator key={i} />);
      i++;
      continue;
    }
    
    if (trimmedLine.includes('!component:return-calculator')) {
      elements.push(<ReturnCalculator key={i} />);
      i++;
      continue;
    }
    
    if (trimmedLine.includes('!component:risk-return-viz')) {
      elements.push(<RiskReturnVisualization key={i} />);
      i++;
      continue;
    }

    if (trimmedLine.includes('!component:market-efficiency-table')) {
      elements.push(<MarketEfficiencyTable key={i} />);
      i++;
      continue;
    }

    if (trimmedLine.includes('!component:cfo-roles-infographic')) {
      elements.push(<CFORolesInfographic key={i} />);
      i++;
      continue;
    }

    if (trimmedLine.includes('!component:liquidity-simulator')) {
      elements.push(<LiquiditySimulator key={i} />);
      i++;
      continue;
    }

    if (trimmedLine.includes('!component:random-walk-simulator')) {
      elements.push(<RandomWalkSimulator key={i} />);
      i++;
      continue;
    }

    if (trimmedLine.includes('!component:portfolio-risk-quiz')) {
      elements.push(
        <div key={i} className="my-8">
          <PortfolioRiskQuiz />
        </div>
      );
      i++;
      continue;
    }

    // Handle bond pricing formula
    if (trimmedLine.includes('Pris = (Kupong/(1+r)') || 
        trimmedLine.includes('Pris = (Kupong/(1+r)¹') ||
        (trimmedLine.includes('Pris =') && trimmedLine.includes('Kupong') && trimmedLine.includes('Pålydende'))) {
      elements.push(<BondPricingFormula key={i} />);
      i++;
      continue;
    }

    // Handle iframe embeds
    if (trimmedLine.includes('<iframe')) {
      elements.push(
        <div 
          key={i} 
          className="my-6 flex justify-center"
          dangerouslySetInnerHTML={{ __html: trimmedLine }}
        />
      );
      i++;
      continue;
    }

    // Regular paragraphs
    elements.push(
      <p key={i} className="text-foreground leading-relaxed mb-3">
        {processBoldText(trimmedLine)}
      </p>
    );
    i++;
  }
  
  return (
    <div className="space-y-4">
      {elements}
    </div>
  );
};