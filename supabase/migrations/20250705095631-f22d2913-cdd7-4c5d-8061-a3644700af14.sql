-- Update Module 1.1 with comprehensive content
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        -- Main content section
        jsonb_build_object(
            'title', 'Hva er finans – og hvorfor angår det deg?',
            'type', 'content',
            'content', '**Finans handler om hvordan vi flytter penger i tid og mellom ulike risikonivåer.** Uansett om du driver et småbruk, leder et gründer-selskap eller forvalter et oljefond, må du svare på tre grunnleggende spørsmål:

1. **Hvilke prosjekter skal vi investere i?**
2. **Hvordan skaffer vi kapitalen?** 
3. **Hvordan passer vi på at kontantene rekker til regninger i morgen?**

For å ta gode beslutninger trenger du to grunnpilarer:

**💰 Pengenes tidsverdi** – En krone i dag er mer verdt enn en krone i morgen fordi du kan investere den og få avkastning.

**⚖️ Law of One Price (ingen arbitrasje)** – To identiske pengestrømmer skal koste det samme. Hvis ikke, kan noen tjene «gratis-penger» og markedet vil korrigere seg.

Disse prinsippene gjør finans til både et analyseverktøy og et språk for å diskutere alt fra grønn obligasjons-finansiering til hvordan du skal spare til bolig. Som Berk & DeMarzo sier: *Selv den beste idé krever kapital for å bli virkelig.*

**Hvorfor er dette relevant for deg?**

Enten du skal starte egen bedrift, kjøpe bolig, eller bare forstå hvordan økonomien fungerer – finansielle beslutninger påvirker livet ditt daglig. Ved å forstå disse grunnprinsippene får du verktøyene til å:

- Evaluere investeringsmuligheter
- Forstå risiko og avkastning
- Ta klokere økonomiske beslutninger
- Forstå nyheter om økonomi og finans

Finans er ikke bare for folk på Wall Street – det er for alle som vil ta kontroll over sin økonomiske fremtid.'
        ),
        
        -- Video placeholder section
        jsonb_build_object(
            'title', 'Video: Finans i dagliglivet',
            'type', 'video',
            'content', 'Se hvordan finansprinsipper påvirker alt fra boligkjøp til oppstartsfinansiering.',
            'video', '🎬 **Video kommer snart** (2-3 min)

**Innhold:**
- Åpning: Klipp fra *The Big Short* og *Moneyball* - "Hva har boligboblen og baseballstatistikk felles?"
- Illustrasjon av tidsverdi: 100 kr i sparegris vs. 100 kr i bank (5% rente = 105 kr om ett år)
- Kursoversikt med tidslinje over modulene 1-4

*Videoer vil bli lagt til etter hvert som de blir produsert.*'
        ),
        
        -- Interactive drag & drop section
        jsonb_build_object(
            'title', '🎮 Interaktiv øvelse: Kategoriser finansielle produkter',
            'type', 'exercise',
            'content', '**Oppgave:** Dra de tre eksemplene til riktig kategori basert på hvordan de flytter penger i tid eller risiko.

**Eksempler å kategorisere:**
- 🏠 **Boliglån** - Du låner penger i dag for å kjøpe hus, betaler tilbake over 20+ år
- 📈 **Crowdfunding-aksje** - Du investerer penger nå i håp om fremtidig gevinst
- 🏛️ **Statsobligasjon** - Du låner staten penger mot fast rente over tid

**Kategorier:**
1. **Flytte penger fremover** (fra nåtid til fremtid)
2. **Flytte penger bakover** (fra fremtid til nåtid) 
3. **Flytte risiko** (overføre usikkerhet mellom parter)

**Fasit:**
- **Boliglån:** Flytte penger bakover (du får pengene nå, betaler i fremtiden)
- **Crowdfunding-aksje:** Flytte penger fremover + risiko (du gir penger nå for fremtidig gevinst/tap)
- **Statsobligasjon:** Flytte penger fremover (du gir staten penger nå, får tilbake med rente senere)

*En interaktiv drag & drop-versjon vil bli lagt til senere.*'
        ),
        
        -- Reflection section
        jsonb_build_object(
            'title', '🤔 Refleksjonsspørsmål',
            'type', 'reflection',
            'content', 'Tenk på en nyhetssak fra den siste måneden der penger, tid eller risiko stod sentralt. Hvordan ville utfallet endret seg hvis aktørene ikke forsto tidsverdi eller risikooverføring?

**Eksempler å tenke på:**
- Renteendringer fra Norges Bank
- Oppkjøp eller fusjoner mellom selskaper  
- Nye investeringer i grønn teknologi
- Boligmarkedet og prissetting
- Kryptovaluta-svingninger

**Skriv ned dine tanker:** *(Kommentarfelt vil bli lagt til for klassediskusjon)*',
            'reflection', 'Tenk på en nyhetssak fra den siste måneden der penger, tid eller risiko stod sentralt. Hvordan ville utfallet endret seg hvis aktørene ikke forsto tidsverdi eller risikooverføring?'
        ),
        
        -- Mini-quiz section
        jsonb_build_object(
            'title', '📝 Mini-quiz: Test forståelsen din',
            'type', 'quiz',
            'content', '**Selvtest med 3 flervalgs-spørsmål:**

**Spørsmål 1:** Hva beskriver best tidsverdien av penger?
- a) 1 kr nå = 1 kr senere
- b) 1 kr nå > 1 kr senere ✓
- c) 1 kr nå < 1 kr senere

*Begrunnelse: Pengene kan investeres og vokse over tid.*

**Spørsmål 2:** Hvilket prinsipp sier at like kontantstrømmer må prises likt?
- a) Diversifisering
- b) Law of One Price ✓
- c) Regnskapsloven

*Begrunnelse: Prisavvik mellom identiske produkter gir arbitrasje-muligheter.*

**Spørsmål 3:** Hvilken rolle tilhører IKKE finanssjefens kjerneoppgaver?
- a) Likviditetsstyring
- b) Produkt-design ✓
- c) Finansiering

*Begrunnelse: Produkt-design hører til markedsføring/utvikling, ikke finans.*

*En interaktiv quiz-versjon vil bli implementert senere.*',
            'selftest', true
        ),
        
        -- Summary section
        jsonb_build_object(
            'title', '📋 Oppsummering',
            'type', 'content',
            'content', '**🎯 Det viktigste du har lært:**

- **Finans** handler om å flytte penger i tid og mellom risikonivåer
- **Tre grunnspørsmål:** Hva investere i? Hvordan finansiere? Hvordan styre likviditet?
- **To grunnpilarer:** Tidsverdien av penger + Law of One Price
- **Praktisk relevans:** Gjelder alt fra privatøkonomi til bedriftsstrategi

**🚀 Neste steg:**
Du er nå klar for å utforske hvordan bedrifter skaper verdi og hvorfor eierskap er viktig. I neste seksjon ser vi på sammenhengen mellom bedrifter, eierskap og verdiskaping.'
        )
    )
)
WHERE module_id IN (
    SELECT id FROM modules WHERE order_index = 1 AND title = 'Introduksjon til finans'
) AND order_index = 1;