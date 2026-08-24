import katex from 'katex';
import 'katex/dist/katex.min.css';

/**
 * Render LaTeX math in a string. Supports display ($$...$$) and inline ($...$).
 * Text without `$` is returned untouched, so this is safe to run on all content
 * and lets us migrate formulas to LaTeX incrementally. `throwOnError: false`
 * degrades malformed LaTeX to a visible marker instead of crashing the render.
 *
 * Shared by ContentRenderer, ExerciseSetHandler and ChatWidget.
 */
export function renderLatex(text: string): string {
  if (!text || text.indexOf('$') === -1) return text;

  // Display math $$...$$ first
  let out = text.replace(/\$\$([\s\S]+?)\$\$/g, (_m, tex) => {
    try {
      return `<span class="katex-block">${katex.renderToString(tex.trim(), {
        displayMode: true,
        throwOnError: false,
        output: 'html',
      })}</span>`;
    } catch {
      return `<span class="latex-error">$$${tex}$$</span>`;
    }
  });

  // Inline math $...$ — single line, no nested $ or HTML brackets
  out = out.replace(/\$([^$<>\n]+?)\$/g, (_m, tex) => {
    try {
      return katex.renderToString(tex.trim(), {
        displayMode: false,
        throwOnError: false,
        output: 'html',
      });
    } catch {
      return `<span class="latex-error">$${tex}$</span>`;
    }
  });

  return out;
}

/**
 * Render a `formula` block. If the author used $-delimiters we honour them;
 * otherwise the whole string is treated as one display expression. Plain
 * (non-LaTeX) formulas should be rendered via the legacy path instead — see
 * `hasLatex` in ContentRenderer.renderFormula.
 */
export function renderFormulaBlock(formula: string): string {
  if (formula.indexOf('$') !== -1) return renderLatex(formula);
  try {
    return katex.renderToString(formula.trim(), {
      displayMode: true,
      throwOnError: false,
      output: 'html',
    });
  } catch {
    return formula;
  }
}
