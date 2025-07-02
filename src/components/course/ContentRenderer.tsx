import React from "react";

interface ContentRendererProps {
  content: string;
}

export const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  console.log('DEBUG: renderContent called with:', { content, type: typeof content });
  
  if (!content) {
    console.log('DEBUG: No content provided');
    return null;
  }
  
  return (
    <div className="space-y-4">
      {content.split('\n').map((line, index) => {
        const trimmedLine = line.trim();
        
        if (!trimmedLine) return <div key={index} className="h-2" />;
        
        // Handle bold headers with ** 
        if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
          const text = trimmedLine.slice(2, -2);
          return (
            <h3 key={index} className="text-lg font-bold text-primary mb-3 mt-6">
              {text}
            </h3>
          );
        }
        
        // Handle bullet points
        if (trimmedLine.startsWith('•') || trimmedLine.startsWith('- ')) {
          const text = trimmedLine.slice(2);
          return (
            <div key={index} className="flex items-start gap-2 mb-2">
              <span className="text-primary mt-1">•</span>
              <span className="text-foreground">{text}</span>
            </div>
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
        
        // Regular paragraphs
        return (
          <p key={index} className="text-foreground leading-relaxed mb-3">
            {trimmedLine}
          </p>
        );
      })}
    </div>
  );
};