-- Clean up the formatting in 3.1 Introduksjon - remove redundant stars and fix double ##
UPDATE sub_modules 
SET content = jsonb_build_object(
    'sections', jsonb_build_array(
        jsonb_build_object(
            'type', 'lesson',
            'title', 'Introduksjon – renter og tidsverdien av penger',
            'content', '> «Vil du ha 100 kr i dag eller 105 kr om ett år?»  
> Det enkle spørsmålet skjuler hele poenget med renteregning: penger skifter verdi når de flyttes i tid.

## 1    Hvorfor 100 kr i dag er mer verdt enn 100 kr i morgen

1. **Inflasjon** – prisnivået stiger typisk over tid, og én fremtidig krone kjøper derfor færre varer enn en krone i dag.
2. **Usikkerhet (kredittrisiko)** – det finnes alltid en sjanse for forsinket eller uteblitt tilbakebetaling.
3. **Alternativkostnad** – pengene kunne vært brukt til annet forbruk eller andre investeringer i mellomtiden.

Summen av disse komponentene danner den *nominelle renten* – prisen for å flytte kapital frem eller tilbake i tid.

## 2    Hva er renter?

Renter er prisen på å disponere kapital over tid.

- *Låntaker* betaler renter til den som stiller kapital til rådighet.
- *Sparer* mottar renter som kompensasjon for å utsette forbruk.

Bankens fortjeneste ligger i differansen mellom renten de tar når de låner ut og den de gir på innskudd.

## 3    Enkle versus sammensatte renter

**Enkel rente:** beregnes kun på hovedstolen hver periode.

**Sammensatt rente:** beregnes på hovedstol *pluss* tidligere opptjente renter; saldo vokser derfor eksponentielt.

Renters-rente-effekten gjør *tid* til den viktigste faktoren i både sparing og gjeld.

## 4    Nominell, effektiv og reell rente

- **Nominell rente** – den annonserte satsen.
- **Effektiv rente** – nominell rente justert for gebyrer og hvor ofte renten kapitaliseres.
- **Reell rente** – nominell rente minus forventet inflasjon; viser faktisk kjøpekraftendring.

Å skille disse begrepene er nødvendig for å sammenligne lån og spareprodukter korrekt.

## 5    Rentens rolle i finansielle markeder

Finansmarkedet flytter ressurser fra overskuddsaktører til dem som trenger midler nå.

Renten er prislappen som balanserer denne utvekslingen og påvirker alt fra boliglånskostnader til verdsettelsen av selskaper og statsobligasjoner.

## 6    Tidslinjen – ditt viktigste verktøy

I renteregning tegnes først en tidslinje med alle kontantstrømmer.

Deretter flyttes hvert beløp til ett felles tidspunkt med

$$FV = PV(1+r)^n \quad\text{eller}\quad PV = \frac{FV}{(1+r)^n}$$

der $r$ er perioderenten og $n$ antall perioder.

Alt beslutningsgrunnlag reduseres til sammenlignbare kroner «her og nå».

## 7    Hvorfor du må mestre tidsverdien av penger

- Tidlig forståelse av *renters rente* kan forvandle små månedlige sparebidrag til store fremtidige beløp.
- Korrekt *nåverdiberegning* er grunnsteinen i investeringsanalyser, fra boliglån til bærekraftige prosjekter.
- Innsikt i *reell rente* beskytter kjøpekraften i perioder med høy inflasjon.

**Essensen:** Tidsverdien av penger er universalspråket i finans. Behersker du logikken bak renter, kan du analysere alt fra kredittkortvilkår til komplekse kontantstrømsprognoser.',
            'reflection', 'Tenk over dine egne finansielle valg: Hvor ofte tar du hensyn til tidsverdien av penger når du sammenligner ulike alternativer?'
        )
    )
)
WHERE title = '3.1 Introduksjon' 
AND module_id = (SELECT id FROM modules WHERE title = 'Tidsverdien av penger');