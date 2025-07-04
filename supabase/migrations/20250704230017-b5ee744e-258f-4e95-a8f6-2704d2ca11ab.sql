-- Fix 4.2 Obligasjonsstruktur og nøkkeltall with proper content
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', '📋 Obligasjonsstruktur og nøkkeltall',
            'type', 'content',
            'content', 'Når du kjøper en obligasjon, er det noen faste komponenter du må kjenne til som bestemmer hvordan avkastning og risiko ser ut.

**Hovedkomponenter i en obligasjon:**

**1. Pålydende verdi (Face Value/Par Value)**
• Det beløpet som betales tilbake ved forfall
• Vanligvis 1 000 kr, 10 000 kr eller 100 000 kr
• Grunnlaget for kupongberegninger

**2. Kupongrente**
• Den årlige renten som betales på pålydende verdi
• Eksempel: 4% kupong på 1 000 kr = 40 kr per år
• Kan være fast eller flytende

**3. Løpetid (Maturity)**
• Når obligasjonen forfaller og pålydende betales tilbake
• Kan være fra måneder til 50+ år
• Påvirker obligasjonens risiko og volatilitet

**4. Kupongfrekvens**
• Hvor ofte kuponger betales ut
• Vanlig: Årlig, halvårlig eller kvartalsvis
• Påvirker reinvesteringsrisiko

**5. Utstedelseskurs**
• Prisen obligasjonen først selges for
• Kan være til pari (100%), over pari eller under pari

**Nøkkeltall du må forstå:**
• **Aktuell yield** = Årlig kupong ÷ Markedspris
• **Yield to Maturity (YTM)** = Total årlig avkastning til forfall
• **Kredittvurdering** = Risikovurdering (AAA til D)
• **Durasjon** = Følsomhet for renteendringer',
            'video', 'Video (5 min): "Obligasjonsstruktur - byggeklossene"',
            'exercise', 'Identifiser komponentene i 3 ulike obligasjoner'
        )
    )
)
WHERE title = '4.2 Obligasjonsstruktur og nøkkeltall';

-- Fix 4.3 Pris og avkastning med proper content
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', '💰 Pris og avkastning på obligasjoner',
            'type', 'content',
            'content', 'Obligasjoner utstedes vanligvis til en pålydende verdi, men på annenhåndsmarkedet kan de omsettes til priser over eller under pari.

**Tre prisscenarier:**

**1. Pris = Pålydende (100% eller "pari")**
• Obligasjonens kupongrente = Markedsrenten
• Eksempel: 4% kupong når markedsrenten er 4%
• Ingen gevinst/tap ved forfall

**2. Pris < Pålydende (Under pari/med rabatt)**
• Markedsrenten > Kupongrenten
• Eksempel: 3% kupong når markedsrenten er 5%
• Investor får kapitalgevinst ved forfall + kupongbetalinger

**3. Pris > Pålydende (Over pari/med premie)**
• Markedsrenten < Kupongrenten  
• Eksempel: 6% kupong når markedsrenten er 4%
• Investor betaler ekstra for høyere kupong

**Faktorer som påvirker obligasjonspriser:**

**Renter** 📈
• Viktigste faktor: Inverse forhold til obligasjonspriser
• Renter opp → Obligasjonspriser ned
• Renter ned → Obligasjonspriser opp

**Kredittrisiko** ⚠️
• Høyere risiko → Lavere pris (høyere yield)
• Kredittvurdering påvirker direkte prissetting

**Tid til forfall** ⏰
• Lengre løpetid → Mer prisfølsomhet for renteendringer
• "Pull to par" - prisene trekker mot pålydende ved nærmere forfall

**Likviditet** 💧
• Likvide obligasjoner handles til bedre priser
• Små utstedelser kan ha store kjøp/salg-spreader

**Praktisk eksempel:**
Obligasjon: 1 000 kr pålydende, 5% kupong, 3 år løpetid
• Markedsrente 5%: Pris ≈ 1 000 kr
• Markedsrente 6%: Pris ≈ 973 kr  
• Markedsrente 4%: Pris ≈ 1 028 kr',
            'video', 'Video (6 min): "Hvorfor endres obligasjonspriser?"',
            'exercise', 'Beregn prisen på en obligasjon gitt ulike markedsrenter'
        )
    )
)
WHERE title = '4.3 Pris og avkastning på obligasjoner';

-- Add missing oppgaver section for obligasjoner (modul 4)
INSERT INTO sub_modules (module_id, title, order_index, content)
SELECT 
    m.id,
    'Oppgaver',
    9,
    jsonb_build_object(
        'sections', jsonb_build_array(
            jsonb_build_object(
                'title', '🎯 Oppgaver og selvtest - Obligasjoner',
                'type', 'content',
                'content', 'Test og utvid kunnskapen din om obligasjoner gjennom våre interaktive øvelser.

**Tilgjengelige oppgaver:**

**📝 Flervalgsoppgaver**
15 tilfeldige spørsmål som dekker alle områder fra obligasjonsmodulen:
• Grunnleggende obligasjonsbegreper
• Pris- og avkastningsberegninger  
• Effektiv rente (YTM)
• Renterisiko og durasjon
• Kredittrating og markedsforhold
• Grønne obligasjoner

**🧮 Regneoppgaver**
11 praktiske oppgaver med steg-for-steg løsninger:
• Obligasjonsprising
• YTM-beregninger
• Durasjonsanalyse
• Portefølje-risiko
• Rentefølsomhet

**💡 Selvtest**
Rask gjennomgang av nøkkelbegreper og sammenhenger.

Start med flervalgsoppgavene for å sjekke din generelle forståelse, deretter gå videre til regneoppgavene for å øve på beregninger.'
            )
        )
    )
FROM modules m 
WHERE m.order_index = 4;