# Task Manager (React + Vite)

Aplicație Task Manager realizată cu React (JavaScript) și Vite. Permite adăugarea, vizualizarea, marcarea ca finalizată, ștergerea și filtrarea sarcinilor.

## Pornire

```bash
npm install
npm run dev
```

## Structura proiectului

```
src/
├── components/
│   ├── Task.jsx
│   └── TaskForm.jsx
├── App.jsx
├── App.css
└── main.jsx
```

## Răspunsuri la întrebări

**1. Care este rolul folderului `src`?**
Conține codul sursă al aplicației (componente React, stiluri, fișierul de intrare `main.jsx`). Tot ce scriem noi ca dezvoltatori se află aici, iar Vite îl compilează și îl include în aplicația finală.

**2. Ce reprezintă fișierul `App.jsx`?**
Este componenta principală (rădăcină) a aplicației. Ea conține starea globală (lista de sarcini) și compune celelalte componente (`TaskForm`, `Task`). `main.jsx` o montează în pagină, în elementul `#root` din `index.html`.

**3. Ce informații sunt păstrate în `package.json`?**
Numele și versiunea proiectului, scripturile (`dev`, `build`, `lint`, `preview`), dependențele necesare în aplicație (`react`, `react-dom`) și dependențele de dezvoltare (`vite`, plugin-ul React, oxlint etc.), cu versiunile lor.

**4. Ce reprezintă folderul `node_modules`?**
Folderul în care npm descarcă și instalează toate pachetele (dependențele) listate în `package.json`, împreună cu dependențele lor. Se generează cu `npm install`, nu se editează manual și nu se urcă pe Git (este în `.gitignore`).

## Alte elemente ale proiectului

- `public/` – fișiere statice servite direct, fără procesare.
- `index.html` – pagina HTML de bază, în care este montată aplicația.
- `vite.config.js` – configurarea Vite (plugin-ul React).

## Funcționalități

- adăugare sarcină (nu se acceptă input gol);
- afișarea listei cu `map()`;
- marcare finalizată / nefinalizată (checkbox, text tăiat și ✓);
- ștergere cu `filter()`;
- contor: *Total sarcini* și *Finalizate*;
- mesaj „Nu există sarcini momentan.";
- **Bonus:** filtre *Toate / Active / Finalizate*.
