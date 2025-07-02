import React from 'react';
import { BondPricingFormula } from "./BondPricingFormula";
import { StockPricingModule } from "./StockPricingModule";

interface LegacyContentRendererProps {
  content: string;
}

export const LegacyContentRenderer: React.FC<LegacyContentRendererProps> = ({ content }) => {
  // Helper function to process bold text within any string
  const processBoldText = (text: string) => {
    if (!text.includes('**')) return text;
    
    const parts = text.split('**');
    return parts.map((part, partIndex) => {
      if (partIndex % 2 === 1) {
        // This is content between ** - make it bold
        return <strong key={partIndex} className="font-bold">{part}</strong>;
      }
      return part; // Return string directly, not wrapped in Fragment
    });
  };

  // Simple markdown-like rendering with cleanup
  return content
    .replace(/\*{3,}/g, '') // Remove *** or more asterisks
    .split('\n')
    .map((line, index) => {
      const trimmedLine = line.trim();
      
      if (!trimmedLine) return <br key={index} />;
      
      // Handle bond pricing formula specifically
      if (trimmedLine.includes('Pris = (Kupong/(1+r)') || 
          (trimmedLine.includes('Pris =') && trimmedLine.includes('Kupong') && trimmedLine.includes('Pålydende'))) {
        return <BondPricingFormula key={index} />;
      }

      // Handle stock pricing module specifically
      if (trimmedLine.includes('Modul 4: Verdsettelse av aksjer') || 
          (trimmedLine.includes('aksjeprising') && trimmedLine.includes('verdsettelse'))) {
        return <StockPricingModule key={index} />;
      }
      
      // Handle bullet points (with bold text support)
      if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('• ')) {
        const text = trimmedLine.startsWith('- ') ? trimmedLine.slice(2) : trimmedLine.slice(2);
        return (
          <li key={index} className="flex items-start gap-2 mb-2 ml-2">
            <span className="text-primary mt-1">•</span>
            <span>{processBoldText(text)}</span>
          </li>
        );
      }
      
      // Handle standalone headers (starts and ends with **)
      if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && trimmedLine.split('**').length === 3) {
        const headerText = trimmedLine.slice(2, -2);
        return <h4 key={index} className="font-bold text-lg mb-3 mt-6">{headerText}</h4>;
      }
      
      // Handle any line with bold text
      if (trimmedLine.includes('**')) {
        return <p key={index} className="mb-2">{processBoldText(trimmedLine)}</p>;
      }
      
      // Handle special callouts
      if (trimmedLine.startsWith('📌')) {
        return (
          <div key={index} className="bg-blue-50 border-l-4 border-blue-400 p-3 my-3">
            <p className="text-blue-800">{trimmedLine}</p>
          </div>
        );
      }
      
      // Handle mathematical formulas
      if (trimmedLine.includes('=') && (trimmedLine.includes('(') || trimmedLine.includes('^') || trimmedLine.includes('+'))) {
        return (
          <div key={index} className="bg-slate-50 border border-slate-200 p-6 rounded-lg my-4 overflow-x-auto">
            <div className="text-center font-mono text-lg text-slate-800 leading-relaxed">
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {trimmedLine.split(' ').map((part, partIndex) => {
                  if (part === '=') {
                    return <span key={partIndex} className="text-green-600 font-bold text-xl mx-2">=</span>;
                  }
                  if (part === '+') {
                    return <span key={partIndex} className="text-blue-600 font-bold text-xl mx-2">+</span>;
                  }
                  if (part === '...') {
                    return <span key={partIndex} className="text-gray-500 mx-2">...</span>;
                  }
                  if (part.includes('^')) {
                    const [base, exp] = part.split('^');
                    return (
                      <span key={partIndex} className="mx-1">
                        {base}<sup className="text-sm">{exp}</sup>
                      </span>
                    );
                  }
                  return <span key={partIndex} className="mx-1">{part}</span>;
                })}
              </div>
            </div>
          </div>
        );
      }
      
      return <p key={index} className="mb-2">{trimmedLine}</p>;
    });
};