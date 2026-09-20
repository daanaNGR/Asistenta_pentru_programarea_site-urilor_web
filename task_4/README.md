# Task Manager

Aplicație realizată cu **React + Vite (JavaScript)** pentru lucrarea practică
„Inițializarea unei aplicații Frontend și realizarea unei funcționalități”.

## Funcționalități

- adăugarea unei sarcini (nu se acceptă denumiri goale);
- vizualizarea tuturor sarcinilor;
- marcarea unei sarcini ca finalizată / nefinalizată (checkbox, text tăiat);
- ștergerea unei sarcini;
- contor: `Total sarcini: X` și `Finalizate: Y`;
- mesaj `Nu există sarcini momentan.` când lista este goală;
- **bonus:** filtrare `Toate / Active / Finalizate`.

## Pornire

```bash
npm install
npm run dev
```

Se deschide adresa afișată în terminal (de obicei `http://localhost:5173`).

## Structura proiectului

```
task-manager/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Task.jsx
│   │   └── TaskForm.jsx
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Răspunsuri la întrebări

**1. Care este rolul folderului `src`?**
Conține codul sursă al aplicației: componentele React, stilurile și punctul
de intrare (`main.jsx`). Tot ce scriem noi ca dezvoltatori se află aici, iar
Vite îl procesează și îl transformă în fișierele finale.

**2. Ce reprezintă fișierul `App.jsx`?**
Este componenta principală (rădăcină) a aplicației. Ține starea globală
(lista de sarcini, filtrul) și include celelalte componente (`TaskForm`,
`Task`). Este randată în pagină de `main.jsx`.

**3. Ce informații sunt păstrate în `package.json`?**
Numele și versiunea proiectului, scripturile (`dev`, `build`, `lint`,
`preview`), dependențele necesare aplicației (`react`, `react-dom`) și
dependențele de dezvoltare (`vite`, linter-ul etc.), împreună cu versiunile lor.

**4. Ce reprezintă folderul `node_modules`?**
Folderul în care `npm install` descarcă toate pachetele (și dependențele
lor) declarate în `package.json`. Este generat automat, este foarte mare și
nu se urcă pe GitHub (este ignorat prin `.gitignore`).

## Concepte folosite

- **Componente:** `App`, `TaskForm`, `Task`.
- **Props:** `Task` primește `task`, `onToggle` și `onDelete`; `TaskForm`
  primește `onAddTask`.
- **Stare (`useState`):** textul din input, lista de sarcini, filtrul activ.
- **Evenimente:** `onChange`, `onSubmit`, `onClick`.
- **Metode de array:** `map()` pentru afișare și actualizare, `filter()`
  pentru ștergere și filtrare.

## Git

```bash
git init
git add .
git commit -m "Initialize React project"
git commit -m "Add task form component"
git commit -m "Add task list functionality"
git commit -m "Add complete and delete functionality"
```
