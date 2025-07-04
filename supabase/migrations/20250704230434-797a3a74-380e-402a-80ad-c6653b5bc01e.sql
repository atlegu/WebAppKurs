-- Restore original 4.3 content with formulas from module content
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', 'Pris og avkastning på obligasjoner',
            'type', 'lesson',
            'content', '**Hvordan fastsettes prisen på en obligasjon?**

Obligasjoner utstedes vanligvis til en pålydende verdi (ofte 1 000 kr). Men på annenhåndsmarkedet kan de omsettes til priser over eller under pari – avhengig av endringer i markedsrenten og risiko.

En obligasjonspris er nåverdien av fremtidige kontantstrømmer – altså kupongbetalinger + tilbakebetaling av hovedstol – diskontert med markedsrenten.

**Formel for prising:**
Pris = (Kupong/(1+r)¹) + (Kupong/(1+r)²) + ... + (Kupong+Pålydende)/(1+r)ⁿ

Der:
- Kupong = årlig renteutbetaling
- r = markedsrente
- n = antall år til forfall

**Sammenheng mellom pris og rente:**
- Rente opp → Pris ned
- Rente ned → Pris opp

**Eksempel:**
3-årig obligasjon med pålydende 1 000 kr, kupongrente 5% (50 kr/år), markedsrente 4%.
Resultat: Obligasjonen prises over pari – ca. 1 026 kr.

📌 Når kupongrenten er høyere enn markedsrenten, prises obligasjonen over pari',
            'video', 'Prising av obligasjoner - eksempel med utregning (4 min)',
            'exercise', 'Beregn markedsverdien for en obligasjon på 5 000 kr, 10 år løpetid, 7% årlig rente når alternativ plassering gir 5%'
        )
    )
)
WHERE title = '4.3 Pris og avkastning på obligasjoner';