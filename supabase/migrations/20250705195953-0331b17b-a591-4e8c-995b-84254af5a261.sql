-- Update 3.1 Introduksjon with detailed content
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'type', 'lesson',
            'title', 'Introduksjon – renter og tidsverdien av penger',
            'content', '«Vil du ha 100 kr i dag eller 105 kr om ett år?»

Det enkle spørsmålet skjuler hele poenget med renteregning: penger skifter verdi når de flyttes i tid.

## 1. Hvorfor 100 kr i dag er mer verdt enn 100 kr i morgen

**Inflasjon**
Prisene stiger som regel litt hvert år. En femtilapp som kjøper to kaffekopper i dag, kjøper kanskje bare én neste år. Derfor krever långiver en kompensasjon som dekker forventet prisvekst – inflasjonspremien.

**Usikkerhet (kredittrisiko)**
Det finnes alltid en sjanse for at du ikke får pengene tilbake i tide eller i det hele tatt. Jo høyere denne risikoen er, desto større risikopremie må låntaker betale.

**Alternativkostnad**
Penger du låner bort kunne vært brukt til annet forbruk eller investering underveis. Rente kompenserer for den tapt muligheten.

Tilsammen gir disse komponentene nominell rente – prisen på å flytte kroner frem eller tilbake i tid.

## 2. Hva er renter?

Renter er prisen på å disponere kapital over tid.

Når du låner, betaler du renter; når du sparer, mottar du dem. Bankens fortjeneste ligger i differansen mellom den renten de tar når de låner ut og den de gir når du setter penger inn.

## 3. Enkle versus sammensatte renter

**Enkel rente** beregnes bare på selve hovedstolen hver periode.

**Sammensatt rente** (renters rente) beregnes på hovedstol pluss tidligere opptjente renter – derfor vokser saldo eksponentielt.

Denne eksponentielle veksten gjør tid til den viktigste faktoren i sparing og gjeld.

## 4. Nominell, effektiv og reell rente

**Nominell rente** – den annonserte satsen.

**Effektiv rente** – nominell rente justert for gebyrer og hvor ofte renten legges til (månedlig, kvartalsvis, årlig).

**Reell rente** – nominell rente minus forventet inflasjon; den viser hvor mye kjøpekraften faktisk øker.

Å skille disse begrepene er avgjørende for å sammenligne lån og spareprodukter på tvers av banker og perioder.

## 5. Rentens rolle i finansielle markeder

Finansmarkedets hovedfunksjon er å flytte ressurser mellom dem som har overskudd i dag og dem som trenger midler nå, mot et løfte om tilbakebetaling i fremtiden. Rente er prislappen som balanserer denne utvekslingen.

På makronivå påvirker rentenivået alt fra boliglåns­kostnader til verdsetting av selskaper og statsobligasjoner. På mikronivå bestemmer det om du bør spare eller nedbetale gjeld først.',
            'reflection', 'Tenk over dine egne finansielle valg: Hvor ofte tar du hensyn til tidsverdien av penger når du sammenligner ulike alternativer?'
        )
    )
)
WHERE title = '3.1 Introduksjon' 
AND module_id = (SELECT id FROM modules WHERE title = 'Tidsverdien av penger');