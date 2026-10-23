# Web Quality Lab

Proiect pentru lucrarea practică despre utilizarea Prettier și ESLint.

## Instalare

```bash
npm install
```

## Comenzi

Verificare formatare:

```bash
npm run format:check
```

Formatare automată:

```bash
npm run format
```

Analiză ESLint:

```bash
npm run lint
```

Corectare automată ESLint:

```bash
npm run lint:fix
```

## Scop

Proiectul conține intenționat:

- formatare neuniformă;
- variabile neutilizate;
- utilizarea `==` în loc de `===`;
- variabile ce pot folosi `const`;
- apeluri `console.log()`.

Elevii trebuie să analizeze rezultatele Prettier și ESLint, să corecteze problemele și să compare rolul celor două instrumente.

## Raport de laborator (rezolvare)

### Înainte de corectare

- `npm run format:check` → 5 fișiere cu formatare neuniformă (`css/style.css`, `eslint.config.mjs`, `index.html`, `js/app.js`, `README.md`).
- `npm run lint` → 9 probleme (1 eroare, 8 avertismente) în `js/app.js`:

| Regulă            | Problemă                               | Corectare                                  |
| ----------------- | -------------------------------------- | ------------------------------------------ |
| `no-unused-vars`  | `unusedMessage` neutilizată            | variabila a fost ștearsă                   |
| `no-unused-vars`  | `applicationName` neutilizată          | acum se folosește pentru `document.title`  |
| `no-unused-vars`  | funcția `findStudent` neutilizată      | conectată la câmpul de căutare             |
| `prefer-const`    | `let` pentru valori care nu se schimbă | `const`                                    |
| `eqeqeq` (eroare) | `student.name == name`                 | `===`                                      |
| `no-console`      | 3 apeluri `console.log()`              | șterse; media clasei se afișează în pagină |

### Rezultat

`npm run format:check` → _All matched files use Prettier code style!_
`npm run lint` → fără erori și fără avertismente.

### Prettier vs ESLint

- **Prettier** formatează codul (spații, ghilimele, `;`, indentare) și nu schimbă comportamentul programului.
- **ESLint** analizează calitatea și corectitudinea codului (variabile nefolosite, `==`, `console.log`). Doar o parte din probleme se corectează automat cu `--fix`; restul necesită intervenție manuală.
- Se completează: Prettier asigură un stil unitar, ESLint previne erori și practici proaste.
