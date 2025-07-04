-- Fix 5.5 Multippelanalyse with proper stock pricing content
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', '📊 Multippelanalyse - Verdsettelse med sammenlignbare selskaper',
            'type', 'content',
            'content', 'Multippelanalyse er en enkel og mye brukt metode for å verdsette aksjer ved å sammenligne med lignende selskaper. Ideen er at "like selskaper bør handles til like priser".

**🎯 Hovedprinsippet:**
Finn selskaper som ligner ditt målselskap, og bruk deres verdsettelse som referanse.

**📈 De viktigste multiplene:**

**1. P/E-ratio (Pris/Inntjening)**
• Formel: Aksjekurs ÷ Inntjening per aksje
• Forteller: Hvor mye investorer betaler for hver krone i inntjening
• Eksempel: P/E på 15 betyr at aksjen koster 15 kr for hver krone i årlig inntjening

**2. EV/EBITDA (Enterprise Value/EBITDA)**
• Formel: (Markedsverdi + Netto gjeld) ÷ EBITDA
• Forteller: Verdisettelse av hele selskapet relativt til driftsresultat
• Fordel: Mindre påvirket av finansieringsstruktur

**3. P/B-ratio (Pris/Bok)**
• Formel: Aksjekurs ÷ Bokført verdi per aksje
• Forteller: Hvor mye over/under bokført verdi aksjen handles
• Nyttig for: Selskaper med mye materielle eiendeler

**4. P/S-ratio (Pris/Salg)**
• Formel: Markedsverdi ÷ Omsetning
• Nyttig for: Selskaper uten positivt resultat
• Eksempel: Vekstselskaper og tech-aksjer

**🔍 Slik gjør du multippelanalyse:**
1. Identifiser 5-10 sammenlignbare selskaper
2. Beregn relevante multipler for hver
3. Finn medianen eller gjennomsnittet
4. Multipliser med målselskapets nøkkeltall
5. Vurder resultatet kritisk',
            'video', 'Video (6 min): "P/E, EV/EBITDA og andre multipler forklart"',
            'exercise', 'Oppgave: Beregn P/E og EV/EBITDA for 3 selskaper i samme bransje'
        )
    )
)
WHERE title = '5.5 Multippelanalyse' AND EXISTS (
    SELECT 1 FROM modules m WHERE m.id = module_id AND m.order_index = 5
);