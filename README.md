# LU1 Proof of Concept – Vrij lezen op maat

## Van mini-leesprofiel naar drie onderbouwde leesadviezen

Dit project is een individuele Proof of Concept (PoC) voor **Vrij lezen op maat**.  
De applicatie ondersteunt studenten bij het kiezen van passend leesmateriaal op basis van een leesprofiel en geeft docenten inzicht in leeslijsten van gekoppelde studenten.

---

## Doel van de PoC

De PoC demonstreert:

- het invullen, opslaan en aanpassen van een leesprofiel;
- het genereren van minimaal drie onderbouwde leesadviezen uit bestaande catalogusdata;
- het doorzoeken van een catalogus met filters;
- het beheren van een persoonlijke leeslijst;
- rolgebaseerde toegang voor student/docent;
- een consistente componentgebaseerde architectuur met passende dataopslag.

---

## Functionele requirements (scope)

### FR1 – Leesprofiel invullen
- Student vult vragen in over taalniveau, genre, onderwerp, gewenste lengte en leesdoel.
- Verplichte velden zijn gemarkeerd en moeten ingevuld zijn voor opslaan.
- Bij onbedoeld weg-navigeren blijven ingevulde gegevens behouden.
- Na opslaan krijgt de student een bevestiging.
- In deze PoC wordt een representatieve set van minimaal 3 profielvragen gebruikt.

### FR2 – Leesprofiel inzien en wijzigen
- Opgeslagen profiel wordt correct getoond.
- Wijzigingen worden opgeslagen en gebruikt bij een volgend advies.
- Niet-opgeslagen wijzigingen kunnen bevestigd of geannuleerd worden.

### FR3 – Leesadvies ontvangen
- Op basis van profiel toont de app minimaal 3 suggesties.
- Elke suggestie bevat:
  - titel;
  - korte beschrijving;
  - motivatie waarom deze titel past bij het profiel.
- Alleen titels uit de bestaande database/document store worden getoond.

### FR4 – Catalogus inzien
- Catalogus is gepagineerd en toont totaal aantal resultaten.
- Filters op taalniveau, genre, onderwerp en lengte.
- Filters zijn combineerbaar en resetbaar.
- Elke titel toont minimaal titel + korte beschrijving.
- Data komt uit de document store.

### FR5 – Leeslijst bijhouden
- Student voegt titels toe vanuit advies of catalogus.
- Itemstatus is te togglen tussen *gelezen* en *niet gelezen*.
- Leeslijst toont status per item.
- Leeslijst is persoonlijk en zichtbaar voor eigenaar + gekoppelde docent.
- Leeslijst-items worden relationeel opgeslagen.

### FR6 – Inzage in leeslijst door docenten
- Docent ziet studenten met ingevuld leesprofiel.
- Student koppelt zichzelf aan docent.
- Docent ziet alleen leeslijsten van gekoppelde studenten.
- Docent kan catalogusitems toevoegen aan leeslijst van gekoppelde student.
- Toegang is rolgebaseerd afgedwongen in de back-end.

---

## Niet-functionele requirements

### NFR1 – Componentgebaseerde, consistente architectuur
- Herbruikbare UI-componenten (geen duplicatie van gedeelde elementen).
- Duidelijke scheiding front-end / back-end / datalaag.
- Nieuwe feature past binnen dezelfde structuur zonder architectuurbreuk.

### NFR2 – README en onboarding
Deze README biedt:
- projectdoel en scope;
- functionele en niet-functionele requirements;
- voorgestelde mappenstructuur;
- afspraken voor coding style;
- lokale opzet- en runinstructies.

### NFR3 – Geautomatiseerde tests op kernlogica
- Unit tests voor matching-/advieslogica met minimaal één randgeval.
- Of componenttests op belangrijke UI-onderdelen (invoer + weergavegedrag).

### NFR4 – Responsive zonder functieverlies
- Volledig bruikbaar op desktop en smartphone.
- Kernfunctionaliteit blijft gelijk op beide form factors.

### NFR5 – Accessibility
- Front-end voldoet minimaal aan **WCAG level A**.

### NFR6 – Authenticatie/autorisatie
- Back-end afgeschermd met JWT.
- Front-end leidt gebruiker bij verboden paden naar veilige route of duidelijke foutmelding.

### NFR7 – Passende dataopslag
- Relationele database voor transactionele/sterk gerelateerde data (met constraints/FK’s).
- Document store voor contentcatalogus met flexibele metadata.

---

## Voorgestelde codebase-structuur

> Pas deze structuur toe of houd hierop aan wanneer de implementatie wordt uitgebreid.

```text
.
├─ README.md
├─ frontend/
│  ├─ src/
│  │  ├─ components/      # herbruikbare UI-componenten
│  │  ├─ pages/           # routes/views (profiel, advies, catalogus, leeslijst)
│  │  ├─ services/        # API-calls
│  │  └─ styles/
│  └─ tests/              # component/UI-tests
├─ backend/
│  ├─ src/
│  │  ├─ auth/            # JWT-auth/autorisatie
│  │  ├─ modules/         # domeinmodules (profiel, advies, catalogus, leeslijst)
│  │  ├─ db/              # relationele toegang
│  │  └─ document-store/  # catalogusdata toegang
│  └─ tests/              # unit/integratietests
└─ docs/
   └─ architecture/       # architectuurbesluiten
```

---

## Lokale setup en draaien

> De exacte commando’s hangen af van de gekozen stack. Onderstaande stappen zijn de minimale basis voor een standaard Node.js full-stack setup.

1. Installeer:
   - Node.js LTS
   - npm
   - relationele database (bijv. PostgreSQL)
   - document store (bijv. MongoDB)
2. Installeer dependencies:
   ```bash
   npm install
   ```
3. Configureer omgevingsvariabelen in `.env`:
   - JWT secret
   - relationele DB-verbinding
   - document-store verbinding
4. Start de applicatie:
   ```bash
   npm run dev
   ```
5. Voer tests uit:
   ```bash
   npm test
   ```

---

## Coding style guide

Voor deze PoC wordt één consistente style guide aangehouden:

- **JavaScript/TypeScript**: ESLint + Prettier (met projectconfiguratie).
- Naamgeving:
  - `camelCase` voor variabelen/functies;
  - `PascalCase` voor componenten/classes;
  - duidelijke domeinnamen voor modules (`readingProfile`, `readingAdvice`, `catalog`).
- Kleine, herbruikbare componenten boven duplicatie.
- Businesslogica in services/modules, niet in UI-componenten.

Controleer stijl en kwaliteit met:

```bash
npm run lint
```

---

## Definitie van “done” voor deze PoC

De PoC is afgerond wanneer:

- FR1 t/m FR6 aantoonbaar werken;
- NFR1 t/m NFR7 aantoonbaar zijn ingevuld;
- kernlogica is getest;
- README voldoende is voor onboarding van een nieuwe ontwikkelaar.
