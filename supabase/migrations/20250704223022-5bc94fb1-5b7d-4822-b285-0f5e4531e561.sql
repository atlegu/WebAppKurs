-- Fix missing content for accounting sub-modules 2.3, 2.4, and 2.6

-- Update 2.3 Resultatregnskap with proper content
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', '📊 Hva er et resultatregnskap?',
            'type', 'content',
            'content', 'Resultatregnskapet viser bedriftens lønnsomhet over en periode – vanligvis et kvartal eller et år. Det er som bedriftens "karakterrapport" for økonomisk prestasjon.

**🔍 Hovedformålet:**
• Vise hvor mye penger bedriften tjente (inntekter)
• Vise hvor mye penger bedriften brukte (kostnader)
• Beregne overskudd eller underskudd

**📈 Grunnleggende struktur:**
```
Driftsinntekter
- Driftskostnader
= Driftsresultat

+ Finansinntekter
- Finanskostnader
= Resultat før skatt

- Skattekostnad
= Årsresultat
```

**💡 Viktige begreper:**
• **Driftsinntekter**: Penger fra kjernevirksomheten (salg av varer/tjenester)
• **Driftskostnader**: Kostnader knyttet til drift (lønn, husleie, råvarer)
• **Finansposter**: Renter og andre finansielle inntekter/kostnader
• **Årsresultat**: Bunnlinjen - hva som står igjen til eierne',
            'video', 'Video (4 min): "Resultatregnskapet forklart"',
            'exercise', 'Øvelse: Lag et enkelt resultatregnskap for et tenkt selskap'
        )
    )
)
WHERE title = '2.3 Resultatregnskap';

-- Update 2.4 Kontantstrømoppstilling with proper content  
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', '💰 Hva er en kontantstrømoppstilling?',
            'type', 'content',
            'content', 'Kontantstrømoppstillingen viser de faktiske pengestrømmene inn og ut av bedriften. Den svarer på spørsmålet: "Hvor kom pengene fra, og hvor gikk de?"

**🎯 Hvorfor er den viktig?**
• Viser bedriftens likviditet (evne til å betale regninger)
• Avslører forskjellen mellom resultat og kontantstrøm
• Hjelper med å forutse fremtidige pengebehov

**📊 De tre hovedkategoriene:**

**1. Operasjonelle aktiviteter** 💼
• Kontantstrøm fra daglig drift
• Innbetalinger fra kunder
• Utbetalinger til leverandører og ansatte
• Skatter og avgifter

**2. Investeringsaktiviteter** 🏗️
• Kjøp og salg av maskiner, bygninger
• Investeringer i andre selskaper
• Utvikling av produkter/teknologi

**3. Finansieringsaktiviteter** 🏦
• Låneopptak og nedbetaling
• Egenkapitaltilførsel
• Utbytte til aksjonærer

**⚖️ Balanse:**
Netto endring i kontanter = Sum av alle tre kategorier',
            'video', 'Video (5 min): "Kontantstrøm vs. resultat - forskjellen"',
            'exercise', 'Oppgave: Klassifiser ulike transaksjoner i riktig kontantstrømkategori'
        )
    )
)
WHERE title = '2.4 Kontantstrømoppstilling';

-- Update 2.6 Oppgaver with proper task content
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', '📝 Praktiske oppgaver - Regnskap',
            'type', 'content', 
            'content', '**Oppgave 1: Balanse-puslespill** 🧩
Gitt følgende tall, sett opp en korrekt balanse:
• Kontanter: 50 000 kr
• Varelager: 120 000 kr
• Maskiner: 300 000 kr
• Leverandørgjeld: 80 000 kr
• Banklån: 200 000 kr
• Aksjekapital: ?

**Oppgave 2: Resultat vs. kontantstrøm** 💡
Et selskap har følgende i januar:
• Solgt varer for 100 000 kr (60% betalt kontant)
• Kjøpt råvarer for 40 000 kr (alt betalt kontant)
• Lønnskostnader: 25 000 kr (betalt kontant)

Beregn: a) Månedens resultat, b) Kontantstrøm fra drift

**Oppgave 3: Nøkkeltall-detektiv** 🔍
Et selskap har:
• Omsetning: 2 mill. kr
• Kostnader: 1,6 mill. kr
• Eiendeler: 800 000 kr
• Egenkapital: 300 000 kr

Beregn lønnsomhetsmargin og egenkapitalandel. Hva forteller disse tallene?',
            'exercise', 'Løs oppgavene individuelt, deretter diskuter i grupper'
        )
    )
)
WHERE title = '2.6 Oppgaver';