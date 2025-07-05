-- Update 6.1 with comprehensive content combining existing visualization with new historical and conceptual content
UPDATE public.sub_modules 
SET content = jsonb_build_object(
  'sections', jsonb_build_array(
    jsonb_build_object(
      'title', 'Hvorfor avkastning og risiko?',
      'type', 'content', 
      'content', 'Hele finansfaget koker ned til to spørsmål: **Hvor mye kan jeg forvente å tjene?** (avkastning) og **Hvor mye kan tallene svinge underveis?** (risiko).

Når vi investerer, bytter vi en sikker krone i dag mot usikre kroner i morgen. **Avkastning** er belønningen vi forventer å få for å utsette forbruket – løpende kontantstrømmer pluss prisgevinst. **Risiko** er usikkerheten rundt hvor store disse kronene faktisk blir, vanligvis målt som varians eller standardavvik i avkastningen.

!insight Forholdet mellom risiko og avkastning danner finansfagets grunnfjell: høyere forventet avkastning krever høyere risiko, og omvendt. Dette er ikke en tilfeldighet, men et fundamentalt prinsipp som gjenspeiles i alle finansmarkeder.'
    ),
    jsonb_build_object(
      'title', 'Risiko-avkastning visualisering',
      'type', 'interactive',
      'content', 'Klassiske "risiko-/avkastning-skyer" viser bytteforholdet mellom risiko og avkastning: porteføljer med lav standardavvik ligger nederst til venstre, mens de med høy standardavvik – men også potensial for høy gevinst – ligger øverst til høyre.

!component:risk-return-viz

!think Tenk på dette som en markedsplass: Hvis høy avkastning var tilgjengelig uten høy risiko, ville alle valgt dette. Konkurransen ville presse prisene opp (og avkastningen ned) til balanse ble gjenopprettet.'
    ),
    jsonb_build_object(
      'title', 'Et historisk sveip',
      'type', 'content',
      'content', 'For å forstå hvordan dagens forståelse av risiko og avkastning har utviklet seg, må vi se tilbake på nøkkelbidragene:

**1900 – Louis Bachelier** publiserer *Théorie de la spéculation* og modellerer aksje­priser som en tilfeldig vandring (Brownsk bevegelse). Dette viser at prisendringer kan beskrives statistisk og at forventet avkastning kan skilles fra stokastisk risiko.

**1952 – Harry Markowitz** introduserer Moderne Porteføljeteori (MPT) og det berømte begrepet *Efficient Frontier*. Risiko måles som varians, og diversifisering kan senke risiko uten å redusere forventet avkastning.

**1964 – William Sharpe** (og John Lintner) lanserer CAPM: Bare systematisk risiko belønnes, og avkastningskravet øker lineært med β.

**1970 – Eugene Fama** formulerer Efficient-Market-Hypothesis (EMH): priser reflekterer all tilgjengelig informasjon.

**1990 – Nobelprisen** til Markowitz, Sharpe og Miller for porteføljevalg, CAPM og kapitalstruktur.

**2013 – Nobelprisen** til Fama (EMH) og Shiller for arbeidet med sammenhengen mellom risiko, avkastning og atferd.

Disse trinnene har gradvis gjort risiko-måling mer presis og avkastnings­forventninger mer kvantitative, noe som ligger til grunn for alt fra indeksfond til klimarisiko-modeller.'
    ),
    jsonb_build_object(
      'title', 'Nøkkelbegreper i dag',
      'type', 'content',
      'content', '**Avkastning (R):** Prosentvis endring i verdi inkl. utbytte/renter.
*Eksempel: Aksjekurs 100 → 110 → R = 10 %*

**Volatilitet (σ):** Standardavviket til periodiske avkastninger.
*Eksempel: OSEBX σ ≈ 38 % under COVID-sjokket 2020*

**Risiko­fri rente (rf):** Rente på «trygg» plassering.
*Eksempel: NIBOR 3 mnd ≈ 3 % pr. juli 2025*

**Risikopremie (RP):** Forventet R − rf.
*Eksempel: Norsk aksjepremie ≈ 7 % historisk*

**β (Beta):** Hvor mye en aksje/portefølje beveger seg når markedet beveger seg 1 %.
*Eksempel: β = 1,4 ⇒ forventet 14 % bevegelse hvis markedet går 10 %*'
    ),
    jsonb_build_object(
      'title', 'Slik henger det sammen',
      'type', 'content',
      'content', '**Kapitalkostnad** – Jo høyere risiko, jo høyere avkastningskrav stiller investorer (CAPM).

**Portefølje­bygging** – Kombiner aktiva med lav korrelasjon for å nå Markowitz'' Efficient Frontier.

**Verdsettelse & bærekraft** – Når du senere diskonterer et grønt prosjekt (Modul 10) må avkastningskravet speile både markeds- og klimarisiko.

!insight Disse sammenhengene er ikke bare teoretiske - de påvirker alt fra pensjonsavtaler til bedrifters investeringsbeslutninger.'
    ),
    jsonb_build_object(
      'title', 'Refleksjonsspørsmål',
      'type', 'reflection',
      'content', '**Historien viser...** Hvilket markedssjokk mener du best illustrerer sammenhengen mellom risiko og forventet premie – og hvorfor?

**Nobelspor:** Hvilken idé fra Markowitz, Sharpe eller Fama tror du påvirker spare­avtalene dine mest i praksis?

**Fremtid:** AI-drevet handel øker farten på informasjon. Hvordan kan det endre forholdet mellom avkastning og risiko?'
    )
  )
),
updated_at = now()
WHERE title = '6.1 Introduksjon til risiko og avkastning';