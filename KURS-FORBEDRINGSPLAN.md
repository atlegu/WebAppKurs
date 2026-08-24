# Kurs­forbedringsplan – Bærekraftig Foretaksfinans

*Grundig gjennomgang av hele kurset (11 moduler + interaktive komponenter), august 2026.
Basert på seks parallelle dybdelesninger + verifisering av alle konkrete tall/feil.*

---

## Helhetsvurdering

Kurset har en **sterk pedagogisk grunnstruktur** – konsekvent hook → analogi → definisjon → eksempel → quiz → refleksjon, gode norske caser (Norwegian, Equinor, Enron, Oljefondet), og et solid sett interaktive modeller. De fem viktigste svakhetene er tverrgående:

1. **Matematikken er kursets svakest presenterte element.** 78 formel-blokker rendres som ren monospace-tekst (ikke KaTeX), inkonsekvent – noen med ekte Unicode (`σ₁²`), andre med literale `^`/`_`. KaTeX er allerede installert og brukt i oppgaver/chat.
2. **Null konseptuelle figurer i hele kurset.** 84 tabeller og 11 interaktive grafer, men ikke ett eneste forklarende diagram (tidslinjer, balanse-visual, diversifiseringskurve, NPV-profil …).
3. **Modulquizene tester stoff som aldri undervises** i de digitale seksjonene (gjelder minst 4 moduler). Siden quiz krever 80 % for bestått, er dette en reell rettferdighetssvakhet.
4. **En håndfull faktafeil** (alle verifisert nedenfor) – inkludert én med lekket AI-tenketekst.
5. **Flere interaktive modeller har regnefeil eller manglende interaktivitet** (feil enheter, tall som ikke matcher grafen, slidere som ikke gjør noe).

Prioritering under: **Effekt** (Høy/Middels/Lav) × **Innsats** (Quick win / Større bygg).

---

## A. Verifiserte feil å rette nå

Alle er kontrollert med egen utregning/kodelesing.

| # | Sted | Feil | Fiks | Prioritet |
|---|------|------|------|-----------|
| A1 | `modul8-kapitalkostnad.ts:1601` (`kk-q36`) | Riktig svar er 10,2 % (rE=3+1,2×6), men `correctAnswer:1` peker på 9,6 %. Forklaringen inneholder lekket AI-tekst: *«Men vent: … La meg sjekke: … Svaret er A.»* | `correctAnswer:0` + rens forklaringen | 🔴 Høy / Quick win |
| A2 | `modul7-investeringsanalyse.ts:465` (`7-3-example-1`) | «Ved 9%: NPV=+17 520» er feil (det er NPV@8%). NPV@9%≈−2 010. «IRR≈9,4%» feil, reell IRR≈8,9%. | Rett tallene: NPV@8%≈+17 640, NPV@9%≈−2 010, IRR≈8,9% | 🔴 Høy / Quick win |
| A3 | `modul3-obligasjoner.ts:718` (`3-4`) | «Nøyaktig YTM=6,76%» er feil (6,76% gir pris 954, ikke 960). Riktig ≈6,51%. Tolkningen gjentar 6,76%. | Rett til ~6,5% begge steder | 🟠 Høy / Quick win |
| A4 | `modul4-aksjer.ts:394` (`4-2-example-sammenligning`) | P/E-sammenligning er en markdown-tabell i et `calculation`-felt → vises som rå tekst med `|` og `|----|` | Del i `text` + ekte `table`-blokk | 🟠 Høy / Quick win |
| A5 | `modul7-investeringsanalyse.ts` `7-4-example-2` + `7-5-example-1` | Samme markdown-tabell-bug (PI-tabell, sensitivitetstabell) | → ekte `table`-blokker | 🟠 Middels / Quick win |
| A6 | `modul2-tidverdi.ts:1552,1557` (`q3-40`) | «Ca 16 år (to doblinger)» – to doblinger=×4, ikke ×3. Forklaringen lærer feil resonnement (tallet ~stemmer) | Bruk «114-regelen» (114/7≈16) for tredobling, fjern «to doblinger» | 🟡 Middels / Quick win |
| A7 | `modul7-fremtid.ts` `7-4-exercise-1` (~linje 693) | Oppgave ber om PV av *voksende* annuitet, men hintet sier vanlig annuitet (feil formel) | Rett hintet til voksende annuitet | 🟡 Middels / Quick win |

### Interaktive modeller – kodefeil (verifisert i `InteractiveModelHandler.ts`)

| # | Modell | Feil | Prioritet |
|---|--------|------|-----------|
| A8 | `sensitivity-spider` | Tornado-stolpene er faste ±20 % og reagerer ikke på prisendring-/volum-/kostnadssliderne (IMH:982). `breakEvenPrice` deler på `(priceNPV−baseNPV)` → Infinity/NaN når slider=0 (IMH:519) | 🟠 Middels / Quick win |
| A9 | `dupont-analysis` | Omløp (1,5×) og gearing (2,0×) ganges med 100 og får «%»-suffiks på akse merket «Verdi (%)» → vises som 150 % / 200 %. Fire ulike størrelser på én akse | 🟠 Middels / Quick win |
| A10 | `capital-structure` | `enterpriseValue = ebitda×(1/wacc)×10` gir ~100× EBITDA (meningsløst). Hamada-logikken av-/re-gearer ved hardkodet D/E=1 → `leveragedBeta` kollapser alltid til input | 🟠 Middels / Quick win |
| A11 | `yield-curve` | Resultat-tallene (lineær interpolasjon) ligger ikke på den tegnede kurven (Nelson-Siegel). `forwardRate` bruker feil y2 | 🟡 Middels / Quick win |
| A12 | `bond-pricing` (flaggskip) | Mangler «du er her»-markør: å dra YTM-slideren flytter tallene, men ingenting på pris-rente-kurven. `duration-simulator` har markøren – kopier den | 🟠 Middels / Quick win |
| A13 | `capm-sml` | Sharpe bruker hardkodet markeds-σ=0,15 (ingen slider styrer den). Alfa vises ikke visuelt (mangler stiplet linje til SML) | 🟡 Lav-Middels / Quick win |

---

## B. Tverrgående mønster: «testet, men ikke undervist»

Modulquizen trekker 20 tilfeldige av 40. Følgende testes i quiz/oppgaver, men står ikke i de digitale seksjonene:

| Modul | Mangler i brødtekst (men testes) |
|-------|-----------------------------------|
| Aksjer | **Dividende-/Gordon-modellen** (P=D₁/(r−g)), markedseffisiens (EMH, 3 spm), EV/EBITDA, ROE/PVGO |
| Tidsverdi | **Effektiv rente** ((1+r/m)^m−1), **perpetuitet** (C/r), **NPV** (npv-kalkulatoren finnes ubrukt) |
| Portefølje | **Sharpe-ratio**, **CML/tangentportefølje**, **CAPM/beta-seksjon**, kovarians, korrelasjonsformel |
| Kapitalstruktur | **Pecking order**, rentedekningsgrad, bird-in-the-hand, LBO, konvertibler, emisjonssignalering, agentkostnader |
| Bærekraft | Grønne obligasjoner/greenium, double materiality |

**Prinsipp (viktig):** Quizene speiler pensum (forelesninger + eksamen). Når et tema testes uten å være dekket, er løsningen **alltid å legge stoffet INN i kurset – aldri å fjerne spørsmålet**. Legg til korte seksjoner med definisjon/formel/eksempel (og gjerne egen quiz + visualisering) for hvert manglende tema. Dette er reell innholdsforfatting, ikke bare quick wins. Aksjer og portefølje har de største gapene.

---

## C. Største pedagogiske løft: visualiseringer

De mest slagkraftige, gruppert. «Signaturfigurer» som i dag mangler helt.

### Høy effekt
- **Vekst-/renters rente-graf (gjenbrukbar modell).** To divergerende vekstlinjer + skravert «pris for å vente»-areal. Dekker de mest slagkraftige eksemplene i kurset: Marie/Knut (M1), Lars/Marte + enkel-vs-renters-rente + annuitet (Tidsverdi). Én modell, 4+ bruksteder. *(Større bygg, men amortisert)*
- **Diversifiseringskurven** (Portefølje 5.1 + Aksjer 4.4). Fallende risiko-kurve mot systematisk «gulv». Finansfagets ikoniske figur – i dag kun tekstliste/tabell. *(Middels)*
- **NPV-profil** (Investeringsanalyse 7.2/7.3). NPV vs. avkastningskrav som krysser null i IRR – forener NPV, IRR og «hva skjer når r stiger» i én figur. Kan gjenbrukes til IRR-vs-NPV-kryssing (Fisher). *(Større bygg – ny modelltype `npv-profile`)*
- **Regnskapsfigurer** (Regnskap 2.2–2.4): 3-oppstillings-flytdiagram (modulens 1. læringsmål har null figur i dag), proporsjonal balanse-blokk, waterfall for resultat og kontantstrøm. *(Større bygg – statiske SVG)*
- **Gearing → ROE-vifte** (Kapitalstruktur). ROE i ned/normal/opp-scenario for gjeldsgrad 0/40/70 % – leverer modulens udekte læringsmål #3. Start som tabell (quick win), så modell. *(blandet)*
- **Obligasjons-kontantstrøm-tidslinje** (Obligasjoner 3.2) + flytt pris-rente-kurven fra 3.5 til 3.3 der konseptet introduseres. *(flytting=quick win; tidslinje=lite bygg)*
- **Korrelasjon visualisert** (Portefølje 5.2): ρ=+1/0/−1 som to prislinjer eller scatter. *(Middels)*

### Middels effekt
- Effektiv front som annotert scatter (Portefølje 5.3 – i dag tekstvegg)
- Trade-off verdikurve VL=VU+Tc·D−konkurskostnad med optimal D* (Kapitalstruktur)
- WACC-sammensetning som stablet «bro»-søyle (Kapitalkostnad 8.4)
- Macaulay-durasjon som balansebjelke (Obligasjoner 3.5)
- Kredittspread-stige AAA→CCC (Obligasjoner 3.7)
- Normalfordeling/klokkekurve for volatilitet (Aksjer 4.4)
- Amortiseringsgraf for boliglån (Tidsverdi 2.4)
- Glidebane aksje/obligasjon vs. alder (Portefølje 5.5)

### Draggames (innholdstypen finnes, nesten ubrukt – ren dataforfatting = quick win)
- **Scope 1/2/3** utslippskilder (Bærekraft 6.4) – «Scope 3=90 %» *oppdages*
- **ESG-pilar** E/S/G-hendelser (Bærekraft 6.1)
- **Atferds-bias**: scenario → skjevhet (Fremtid 7.2)
- **Systematisk vs. usystematisk risiko** (Portefølje 5.1)
- **Kontantstrøm-klassifisering**: inkrementell/sunk/alternativ/kannibalisering (Investeringsanalyse 7.1)
- Overkurs/pari/underkurs (Obligasjoner), SFDR art. 6/8/9 (Bærekraft), pecking order (Kapitalstruktur)

### Gjenbruk eksisterende kalkulatorer (quick wins – typene finnes)
- **Fremtid** (0 interaktivitet i dag): spare-/renters rente (`compound-interest`/`future-value`), lån (`loan-payment`), inflasjon (`inflation-visualizer`) – binder «mykt» personlig-økonomi-stoff til kursets formler
- **Velkommen**: en spare-kalkulator ved Marie/Knut-eksemplet
- **Aksjer**: mangler kalkulator helt

---

## D. Tekniske / plattform-løft

1. **KaTeX i hovedinnholdet.** Trekk ut `renderLatex` (duplisert i `ExerciseSetHandler`+`ChatWidget`) til delt util, kall den i `ContentRenderer.renderFormula` + inline `$…$` i `formatText`. `throwOnError:false` gjør migrering trygg (uendret visning til hver formel konverteres). Infrastruktur = quick win; konvertering av 78 formler = gradvis. **Høyest gevinst/innsats i hele kurset.**
2. **Inline SVG/diagram-content-type.** `renderImage` støtter allerede `data:`-URIer. Legg til en `diagram`-type (~10 linjer) eller tillat inline-SVG i `image` → åpner for alle konseptfigurene i del C.
3. **SVG «troverdighets- og mobilpakke»** (klynge quick wins): legg til `viewBox` (mangler → beskjæres på mobil), `ResizeObserver` (roter telefon → graf beholder gammel bredde), utled aksegrenser fra data (stopp klipping i capm/portfolio), formater aksetall med `Intl.NumberFormat`, slett død canvas-kode (IMH:1108).
4. **Recharts-avgjørelse.** Ligger i `dependencies` men er 100 % ubrukt (alle grafer er håndtegnet SVG). Enten adopter (får tooltips/akser/responsivitet gratis, men krever React-øyer i vanilla-TS) eller fjern fra `package.json`. Anbefaling: fjern nå, ta rammeverksvalg bevisst senere.
5. **NPV/IRR-kalkulatorene** håndterer kun like årlige kontantstrømmer – alle oppgaver bruker ujevne. Utvid til å ta en kontantstrømsvektor. *(Større bygg)*

---

## E. Per-modul kort

| Modul | Viktigste grep |
|-------|----------------|
| 1 Velkommen | 0 interaktivitet – legg inn spare-kalkulator + vekstgraf ved Marie/Knut; «feil»-liste → tabell |
| 2 Regnskap | Figurer for kjerne-læringsmålet (3-oppstilling, balanse-blokk, waterfalls); flytt DuPont-modellen tidligere + fiks enheter |
| 3 Tidsverdi | Tett quiz-gap (effektiv rente/perpetuitet/NPV); enkel-vs-renters-rente-graf; amortiseringsgraf; fiks q3-40; rydd Emma-eksempel |
| 4 Obligasjoner | Kontantstrøm-tidslinje; flytt pris-rente-kurve til 3.3; durasjon-balansebjelke; fiks YTM-tall; 3.5 er overlesset (3 modeller) |
| 5 Aksjer | **Legg til Gordon-modellen** (+EMH, EV/EBITDA); diversifiseringskurve; fiks markdown-tabell; ordliste-vegg i 4.3/4.5 → figurer |
| 6 Portefølje | Formel-verktøykasse (varians/kovarians/korrelasjon/Sharpe); CAPM-seksjon; diversifiserings- + korrelasjonsfigur; 5.3 tekstvegg |
| 7 Investeringsanalyse | Fiks IRR-eksempel; NPV-profil-diagram; annuitetsformel-blokk; markdown-tabeller → table; draggame kontantstrøm |
| 8 Kapitalkostnad | **Fiks kk-q36**; WACC-bro-søyle; Gordon-krysssjekk; skatteskjold-søyle |
| 9 Kapitalstruktur | Gearing→ROE-vifte (læringsmål #3); trade-off-kurve; pecking order + testet-ikke-undervist; balanser med inline-quiz; ex-dividende-tidslinje |
| 10 Bærekraft | Scope + ESG-pilar draggames; grønne obligasjoner + double materiality i tekst; oppdater ferskvare (CSRD/Omnibus, ESG-AUM, Equinor, Oljefondet-tall) |
| 11 Fremtid | Legg inn 2–3 eksisterende kalkulatorer (fjern total passivitet); bias-draggame; fiks annuitet-hint; sterkere fagkobling |

---

## F. Anbefalt rekkefølge

**Fase 1 – Rett feil (1 økt, alt quick wins):** A1–A13. Troverdighet først. Verifiserte feil, rene korreksjoner.

**Fase 2 – KaTeX-infrastruktur + inline-diagram-mekanikk (del D1–D2):** lav innsats, låser opp alt annet.

**Fase 3 – Tett «testet men ikke undervist» (del B):** mest alvorlige innholdshull; mest i Aksjer og Portefølje. Løses ved å **skrive nytt kursinnhold** (definisjon/formel/eksempel/quiz) – aldri ved å fjerne quiz-spørsmål. Reell innholdsforfatting, ikke quick wins.

**Fase 4 – Draggames + gjenbruk av eksisterende kalkulatorer (del C):** høy effekt, ren dataforfatting.

**Fase 5 – Signaturfigurer/nye modeller:** vekstgraf, diversifiseringskurve, NPV-profil, regnskapsfigurer, gearing→ROE. Bygges én og én, gjenbrukes bredt.

**Fase 6 – SVG-troverdighetspakke (D3) + Recharts-opprydding (D4).**
