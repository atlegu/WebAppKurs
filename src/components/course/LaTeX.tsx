import React from 'react';
import katex from 'katex';

interface LaTeXProps {
  children: string;
  displayMode?: boolean;
}

export const LaTeX: React.FC<LaTeXProps> = ({ children, displayMode = false }) => {
  try {
    const html = katex.renderToString(children, { 
      displayMode,
      throwOnError: false,
      strict: false
    });
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  } catch (error) {
    console.warn('LaTeX rendering error:', error);
    return <code className="text-destructive">{children}</code>;
  }
};