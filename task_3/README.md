# Temă JavaScript

## Structură

```
tema-js/
├── package.json              type: "module" — activează import/export
├── 1-note/
│   └── grades.js             ex. 1: filter(), map(), reduce()
├── 2-elevi/
│   ├── utils.js               calculateSum, calculateAverage
│   ├── students.js            toată logica pentru elevi
│   └── main.js                importă utils.js + students.js
└── 3-cos-barbershop/
    ├── cart.js                modul coș de cumpărături
    └── main.js                demonstrație cu produse de barbershop
```

## Rulare

Necesită Node.js instalat (testat pe Node 22).

```bash
node 1-note/grades.js
node 2-elevi/main.js
node 3-cos-barbershop/main.js
```

sau, din rădăcina proiectului, folosind scripturile din `package.json`:

```bash
npm run ex1
npm run ex2
npm run ex3
```

## Exercițiul 1 — `1-note/grades.js`

Pornind de la `const grades = [7, 9, 5, 10, 8, 6]`, afișează:
- notele >= 8, cu `filter()`
- media notelor, cu `reduce()`
- fiecare notă mărită cu 1 punct, fără a depăși 10, cu `map()`

## Exercițiul 2 — `2-elevi/`

- **`utils.js`** exportă `calculateSum()` și `calculateAverage()`, funcții
  generice, reutilizabile pentru orice array de numere.
- **`students.js`** conține array-ul de elevi și toată logica: afișare,
  filtrare după notă, media clasei (folosind `calculateAverage` din
  `utils.js`), căutare după id (aruncă `Error` dacă nu există) și adăugare
  elev nou.
- **`main.js`** importă din ambele module, afișează rezultatele cu template
  literals și tratează cu `try/catch` cazul unui id inexistent.

## Exercițiul 3/4 — `3-cos-barbershop/` (coș de cumpărături)

Temă: produse dintr-un magazin de barbershop (ceară, loțiune after-shave,
foarfecă, aparat de tuns, pieptene).

- **`cart.js`** exportă `addProduct()`, `removeProduct()`,
  `updateQuantity()`, `calculateTotal()`, `getCart()`. Folosește `find()`,
  `filter()`, `map()`, `reduce()`, spread (`...item`) și destructuring
  (`{ id, name, price, quantity }`).
- Ștergerea sau modificarea unui produs inexistent aruncă o eroare cu
  `throw new Error(...)`.
- **`main.js`** demonstrează un scenariu complet: adăugare produse,
  creșterea automată a cantității la produs duplicat, modificare cantitate,
  ștergere produs existent, încercare de ștergere a unui produs inexistent
  (prinsă cu `try/catch`) și calculul totalului final.
