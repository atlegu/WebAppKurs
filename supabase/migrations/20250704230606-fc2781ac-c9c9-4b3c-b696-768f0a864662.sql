-- Restore original 4.5 content from module content
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'title', 'Risikofaktorer ved obligasjoner',
            'type', 'lesson',
            'content', '**Hovedtyper risiko ved obligasjoner:**

**Kredittrisiko:** Risikoen for at utsteder ikke klarer å betale renter eller hovedstol
- Eksempel: Et selskap går konkurs før lånet forfaller

**Renterisiko:** Risikoen for at verdien faller når renten i markedet stiger
- Eksempel: Du eier en obligasjon med fast 3% rente når markedet stiger til 5%

**Likviditetsrisiko:** Risikoen for at du ikke får solgt obligasjonen til en rettferdig pris
- Eksempel: Lav omsetning eller spesialtilpasset obligasjon

**Inflasjonsrisiko:** Risikoen for at realverdien av betalingene reduseres over tid
- Eksempel: Du mottar fast rente, men inflasjonen stiger

**Valutarisiko:** Gjelder obligasjoner i utenlandsk valuta
- Eksempel: Valutasvingninger kan påvirke avkastningen i NOK

**Hvordan påvirker risiko pris og rente?**
- Høy risiko → høyere effektiv rente (investoren krever "risikopremie")
- Statsobligasjoner har normalt lavest risiko og lavest rente
- High yield-obligasjoner har høy risiko og høy potensiell avkastning

📌 Langsiktige obligasjoner påvirkes mer av renteendringer enn kortsiktige',
            'video', 'Obligasjonsrisiko forklart (4 min)',
            'reflection', 'Hvorfor tror du at 10-årige obligasjoner reagerer sterkere på renteendringer enn 1-årige obligasjoner?'
        )
    )
)
WHERE title = '4.5 Risikofaktorer ved obligasjoner';