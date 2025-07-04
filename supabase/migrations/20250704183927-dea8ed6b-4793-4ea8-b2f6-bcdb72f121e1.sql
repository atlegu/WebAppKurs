-- Update the content for 6.1 Introduksjon til risiko og avkastning
UPDATE public.sub_modules 
SET content = jsonb_build_object(
  'sections', jsonb_build_array(
    jsonb_build_object(
      'title', 'Kapittelintroduksjon: Risiko og avkastning',
      'type', 'content',
      'content', 'Når vi investerer, bytter vi en sikker krone i dag mot usikre kroner i morgen. Avkastning er belønningen vi forventer å få for å utsette forbruket – løpende kontantstrømmer pluss prisgevinst. Risiko er usikkerheten rundt hvor store disse kronene faktisk blir, vanligvis målt som varians eller standardavvik i avkastningen. Forholdet mellom de to danner finansfagets grunnfjell: høyere forventet avkastning krever høyere risiko, og omvendt. Klassiske "risiko-/avkastning-skyer" viser nettopp dette bytteforholdet: porteføljer med lav standardavvik ligger nederst til venstre, mens de med høy standardavvik – men også potensial for høy gevinst – ligger øverst til høyre.

**Hvorfor er temaet viktig?**

**Kapitalallokering** – Bedrifters investeringsbeslutninger og investorers porteføljevalg bestemmes av hvor mye risiko de må ta for å oppnå ønsket avkastning.

**Kapitalkostnad** – Banker, aksjeanalytikere og ESG-analytikere bruker risikomål (beta, durasjon, likviditetspåslag) for å sette kapitalkrav og rabatter.

**Regulerings- og bærekraftsperspektiv** – EUs taksonomi krever at selskaper vurderer klimarisiko i avkastningsvurderingen; ignorert risiko kan raskt bli virkelig kostnad.

**Et historisk sveip**

**1930-tallet:** Investorers mavefølelse rådet; risiko ble oppfattet som sjansen for tap mer enn som et eksakt tall.

**1952:** Harry M. Markowitz sin "Portfolio Selection" ga oss moderne porteføljeteori: det er kombinasjonen av aktiva – og korrelasjonen dem imellom – som avgjør porteføljerisikoen. "Ikke legg alle eggene i én kurv", som Markowitz selv oppsummerte da han tok imot Nobelprisen i 1990.

**1964-1965:** William Sharpe, John Lintner m.fl. koblet risiko direkte til forventet avkastning gjennom Capital Asset Pricing Model (CAPM). Modellen sier at bare den delen av risikoen som ikke kan diversifiseres bort – systematisk risiko, målt ved beta – gir krav på risikopremie.

**1970-2000:** Empiriske datasett som "Stocks, Bonds, Bills & Inflation" viste systematiske mønstre: aksjer har høyere gjennomsnittlig avkastning enn obligasjoner, men også større volatilitet.

**2000-tallet til i dag:** Risikobegrepet utvides til å omfatte likviditet, motparts- og klimarisiko. Markedsdata i sanntid, big data-analyse og stresstesting gjør risikostyring mer presis, samtidig som regulatoriske krav (Basel III/IV, EU-taksonomien) gjør konsekvensen av feilprising større.

**Hvordan dette kapitlet er bygget opp**

• **Begrepsgrunnlag:** definisjoner av avkastning, varians og standardavvik.

• **Historiske tall:** hvordan ulike aktivaklasser har belønnet risiko over tid.

• **Diversifisering:** hvorfor korrelasjon er nøkkelen til risikoreduksjon.

• **Systematisk vs. usystematisk risiko:** innføring i beta og CAPM.

• **Risikojusterte prestasjonsmål:** Sharpe- og Treynor-rater, Jensens alpha.

• **Bærekraftsdimensjonen:** klimarisiko, omdømmerisiko og ESG-premier.

Gjennom kapitlet vil du bruke Excel-maler og interaktive verktøy til å beregne historisk avkastning, varians, betaverdier og risikopremier, og se hvordan små endringer i antall verdipapirer eller korrelasjoner kan flytte en portefølje langs risiko-/avkastning-fronten. Målet er at du skal gå videre til neste modul med en dyp forståelse av hvor risikoen faktisk kommer fra – og hva som legitimerer en risikopremie.'
    )
  )
),
updated_at = now()
WHERE title = '6.1 Introduksjon til risiko og avkastning';