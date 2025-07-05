-- Insert Module 1.2: Enkeltpersonforetak vs. Aksjeselskap
INSERT INTO public.sub_modules (title, module_id, order_index, content)
SELECT 
  'Enkeltpersonforetak vs. Aksjeselskap',
  m.id,
  2,
  '{
    "sections": [
      {
        "title": "Enkeltpersonforetak vs. Aksjeselskap",
        "type": "text",
        "content": "Når du starter virksomhet i Norge står du i praksis overfor to hovedvalg: enkeltpersonforetak (ENK) eller aksjeselskap (AS). Valget bestemmer hvor mye risiko du selv bærer, hvor lett du kan hente kapital – og hvordan overskuddet beskattes.\n\n**1. Eier og ansvar**\n\nEnkeltpersonforetak eies av én fysisk person. Du og bedriften er juridisk sett det samme, noe som betyr ubegrenset personlig ansvar: Klarer ikke foretaket å betale gjelden, kan kreditorene ta pant i bilen din eller boligen din.\n\nAksjeselskap eies av én eller flere aksjonærer som skyter inn aksjekapital (minimum 30 000 kr). Ansvarsbegrensningen gjør at eierne i verste fall taper aksjekapitalen – ikke private eiendeler.\n\n**2. Tilgang på kapital**\n\nENK blir ofte finansiert av personlig sparekapital eller banklån med personlig kausjon. Det fungerer fint for en enkelt konsulent eller håndverker, men setter tak på veksten.\n\nAS kan selge nye aksjer eller hente banklån uten personlig kausjon. Dermed kan et vellykket pizzabakeri raskt vokse til landsdekkende kjede.\n\n**3. Skatteregime**\n\nENK: Hele overskuddet beskattes som personinntekt. Du betaler trygdeavgift (11,4 %) og trinnskatt på toppen av 22 % alminnelig inntektsskatt.\n\nAS: Selskapet betaler 22 % selskapsskatt. Resten kan enten reinvesteres eller deles ut som utbytte, som igjen beskattes hos aksjonærene (effektiv sats ≈ 37,8 %). Resultatet er at utsatt beskatning kan gi gunstigere likviditet for ekspanderende selskaper.\n\n**4. Ledelse og nøkkelroller**\n\nI et ENK er eieren i praksis alt-i-ett: daglig leder, regnskapsfører og finanssjef. I et større AS deles ansvar typisk slik:\n\n| Rolle | Hovedoppdrag | Typiske verktøy |\n|-------|--------------|----------------|\n| Investeringssjef (CFO-hatt 1) | Velge prosjekter som øker verdien | Nåverdi, internrente |\n| Finansieringssjef (CFO-hatt 2) | Finne rett miks av gjeld og egenkapital | Låneanalyse, emisjon |\n| Likviditetsansvarlig (CFO-hatt 3) | Sørge for penger til regninger og lønn | Kontantstrømbudsjett |\n\n**5. Levetid og kontinuitet**\n\nEt ENK opphører dersom eieren dør eller ønsker å avslutte. Et AS har evig liv så lenge aksjonærene ønsker det; eierskap kan skifte hender uten at virksomheten må avvikles. Dette gjør AS spesielt attraktivt for investorer som vil kunne selge seg ut senere.\n\n**6. Sammenligning på ett øyeblikk**\n\n| Kriterium | Enkeltpersonforetak | Aksjeselskap |\n|-----------|-------------------|-------------|\n| Eier | 1 person | 1+ aksjonærer |\n| Ansvar | Ubegrenset | Begrenset til aksjekapital |\n| Minstekapital | Ingen | 30 000 kr |\n| Skatt | Personinntekt | 22% selskapsskatt + utbytte |\n| Kapitalinnhenting | Egenkapital, banklån m/ kausjon | Aksjesalg, banklån |\n| Levetid | Slutter med eier | Uavhengig av eier |\n\n**Poenget:** Overgangen fra ENK til AS er ofte billetten fra hobby­bedrift til vekst­maskin – men du bytter mindre byråkrati mot mer rapportering og strengere styring. Velger du AS, må du også håndtere de tre CFO-hattene, enten selv eller ved å ansette eksperter."
      },
      {
        "title": "Video: Fra enkeltpersonforetak til multinasjonal gigant",
        "type": "video",
        "content": "",
        "video": "En 4-minutters video som viser overgangen fra enkeltpersonforetak til børsnotert selskap. Starter med animasjon av en kaffevogn som vokser til en Starbucks-lignende kjede, forklarer de fire selskapsformene med motion-graphics, introduserer CFO-rollen med tre ikon-animasjoner, og avslutter med case-studie av et norsk el-sykkel-startup."
      },
      {
        "title": "Finanssjefens tre hatter",
        "type": "infographic",
        "content": "!component:cfo-roles-infographic\n\n**Hatt 1: Investor**\n- Hovedoppdrag: Velge prosjekter som øker verdien\n- Verktøy: NPV (nåverdi), IRR (internrente)\n\n**Hatt 2: Kapitalinnhenter**\n- Hovedoppdrag: Finne rett miks av gjeld og egenkapital\n- Verktøy: Gjeld vs egenkapital-analyse, emisjonsplanlegging\n\n**Hatt 3: Likviditetsvakt**\n- Hovedoppdrag: Sørge for penger til regninger og lønn\n- Verktøy: Cash-budget & arbeidskapital-styring"
      },
      {
        "title": "Regneoppgave: Skatteeffekt ENK vs AS",
        "type": "exercise",
        "content": "**Problem:** Et overskudd på 2 000 000 kr skal tas ut av virksomheten.\n\n**Scenario A: Enkeltpersonforetak (ENK)**\nBeskattes som personinntekt:\n- 22% alminnelig inntektsskatt\n- 11,4% trygdeavgift\n- 15% toppskatt på alt over 1 000 000 kr\n\n**Scenario B: Aksjeselskap (AS)**\n- Selskapet betaler 22% selskapsskatt\n- Eier tar ut resterende som utbytte (37,84% effektiv utbytteskatt)\n\n**Regnetrinn:**\n\n| Trinn | Formel | ENK | AS |\n|-------|--------|-----|----|\n| 1 | Driftsresultat | 2 000 000 | 2 000 000 |\n| 2 | Selskapsskatt (22%) | – | –440 000 |\n| 3 | Disponibelt i selskap | – | 1 560 000 |\n| 4 | Eierbeskatning | Beregn selv | 1 560 000 × 0,3784 |\n| 5 | **Netto til eier** | **?** | **?** |\n\n**Oppgave:** Beregn og sammenlign hvor mye eieren får netto i hver scenario."
      },
      {
        "title": "Til ettertanke",
        "type": "reflection", 
        "content": "**«Hvem eier egentlig Apple?»**\n\nBlackRock, Vanguard, Statens pensjonsfond utland (Oljefondet) og millioner av småsparere eier hver sin bit. Diskuter i kommentarfeltet om disse eierne bryr seg om mer enn avkastning – og hvordan det påvirker ledelsens beslutninger.",
        "reflection": "Hvem eier egentlig Apple? BlackRock, Vanguard, Statens pensjonsfond utland (Oljefondet) og millioner av småsparere eier hver sin bit. Diskuter om disse eierne bryr seg om mer enn avkastning – og hvordan det påvirker ledelsens beslutninger."
      }
    ]
  }'::jsonb
FROM modules m 
WHERE m.title = 'Grunnleggende finans og selskapsformer' 
AND m.order_index = 1;