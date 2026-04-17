# Kursoversikt: Bærekraftig Foretaksfinans

## Modulstruktur

**VIKTIG:** Filnavn stemmer IKKE med visningsrekkefølge på siden. Bruk `order`-verdien for å forstå rekkefølgen.

| Filnavn | Tittel | Order (vises som) |
|---------|--------|-------------------|
| modul1-velkommen.ts | Velkommen til Din Finansreise | 1 |
| modul2-regnskap.ts | Grunnleggende Regnskap | 2 |
| modul2-tidverdi.ts | Pengenes Tidsverdi | 3 |
| modul3-obligasjoner.ts | Obligasjoner – Forstå Gjeld som Investering | 4 |
| modul4-aksjer.ts | Aksjer og Eierskap | 5 |
| modul5-portefolje.ts | Porteføljeteori og Diversifisering | 6 |
| modul7-investeringsanalyse.ts | Investeringsanalyse | 7 |
| modul8-kapitalkostnad.ts | Kapitalkostnad | 8 |
| modul8-kapitalstruktur.ts | Kapitalstruktur og Dividende | 9 |
| modul6-baerekraft.ts | Bærekraftig Finans i Praksis | 10 |
| modul7-fremtid.ts | Din Finansielle Fremtid | 11 |

## Podcaster (audio)

Alle podcast-filer ligger i `/public/` mappen:

| Fil | Modul | Plassering |
|-----|-------|------------|
| /public/renteregning.m4a | modul2-tidverdi.ts (Pengenes Tidsverdi) | Seksjon 3-1, order 2 |
| /public/riskreturn.m4a | modul5-portefolje.ts (Porteføljeteori) | Seksjon 5-1, order 2 |
| /public/obligasjon.m4a | modul3-obligasjoner.ts | Seksjon 4-1 |
| /public/aksjer.m4a | modul4-aksjer.ts | Seksjon 5-1 |
| /public/investanalyse.m4a | modul7-investeringsanalyse.ts | Seksjon 7-1, order 2 |
| /public/Kapitalkostnad.m4a | modul8-kapitalkostnad.ts | Seksjon 8-1, order 2 |

## Interaktive verktøy

### Kalkulatorer
| Type | Modul | Beskrivelse |
|------|-------|-------------|
| compound-interest | modul2-tidverdi.ts | Renters rente-kalkulator |
| present-value | modul2-tidverdi.ts | Nåverdi-kalkulator |
| future-value | modul2-tidverdi.ts | Fremtidsverdi-kalkulator |
| loan-payment | modul2-tidverdi.ts | Lånekalkulator |
| bond-price | modul3-obligasjoner.ts | Obligasjonspris-kalkulator |
| npv | modul7-investeringsanalyse.ts | NPV-kalkulator |
| irr-approx | modul7-investeringsanalyse.ts | IRR-kalkulator |
| wacc | modul8-kapitalkostnad.ts | WACC-kalkulator (NY) |

### Interaktive modeller
| Type | Modul | Beskrivelse |
|------|-------|-------------|
| bond-pricing | modul3-obligasjoner.ts | Pris-rente kurve med durasjon |
| capm-sml | modul8-kapitalkostnad.ts | Security Market Line visualisering (NY) |
| portfolio-two-asset | modul5-portefolje.ts | Effektiv front med to aktiva |

## Quiz-system

- Hver modul har ca **40 spørsmål** i moduleQuiz
- **20 tilfeldige spørsmål** velges per forsøk (Fisher-Yates shuffle)
- Bestått: **80%** (16 av 20 riktige)
- Konfigurasjon: `questionsToShow: 20`, `passingScore: 80`

## Bilder

| Fil | Beskrivelse |
|-----|-------------|
| /public/birger.png | Birger finanshai - chatbot-maskot |
| /public/startbilde.jpg | Forsidebilde (spire fra mynter) |

## Chatbot (Birger)

- Widget i høyre hjørne med snakkeboble "Spør meg!"
- Kode: `src/components/ChatWidget.ts`
- Styling: `src/style.css` (søk etter `.chat-fab`)
- Ingen blå bakgrunn, transparent med drop-shadow
- Forstørres til 1.4x ved hover

## Viktige filer

- `src/main.ts` - Hovedapplikasjon og routing
- `src/components/HomePage.ts` - Forsiden med hero-bilde
- `src/components/ModuleQuizHandler.ts` - Quiz-logikk med tilfeldig utvalg
- `src/types/course.ts` - TypeScript-typer inkl. questionsToShow
- `src/style.css` - All styling

## Fargepalett – "Nordic Finance"

- Primary (Teal/Bærekraft): `#0D9488`
- Primary light: `#14B8A6`
- Primary dark: `#0F766E`
- Accent gold: `#F59E0B`
- Accent blue: `#3B82F6`
- Accent purple: `#8B5CF6`
- Success: `#10B981`
- Error: `#EF4444`

## Deploy

- Git push til `main` deployer automatisk til Vercel
- Repo: https://github.com/atlegu/WebAppKurs

## Supabase

- Brukes for autentisering og brukerdata
- Edge Functions i `supabase/functions/`

---
*Sist oppdatert: 17. april 2026*
