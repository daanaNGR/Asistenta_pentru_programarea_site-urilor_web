# Task Manager cu API (task_5)

Aplicație realizată cu **React + Vite (JavaScript)** pentru lucrarea practică
„Inițializarea unei aplicații Frontend și realizarea unei funcționalități”.

## Funcționalități

- **GET** – sarcinile se încarcă de la API la deschiderea paginii;
- **POST** – adăugarea unei sarcini (nu se acceptă denumiri goale);
- **PATCH** – marcarea ca finalizată / nefinalizată;
- **DELETE** – ștergerea unei sarcini;
- stări **LOADING / SUCCESS / ERROR** (mesaj „Se încarcă...", mesaj de eroare + buton „Reîncarcă");
- contor `Total sarcini: X` și `Finalizate: Y`, filtrare `Toate / Active / Finalizate`.

## API

Se folosește [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos) (`/todos`).
Adresa se poate schimba prin variabila `VITE_API_URL` (fișier `.env`).

| Operație | HTTP | Endpoint |
|---|---|---|
| Read | GET | `/todos?_limit=10` |
| Create | POST | `/todos` |
| Update | PATCH | `/todos/:id` |
| Delete | DELETE | `/todos/:id` |

**Notă:** JSONPlaceholder nu salvează datele (răspunde corect, dar la refresh revine lista inițială)
și returnează mereu `id: 201` la POST. De aceea sarcinile noi (id > 200) sunt actualizate/șterse doar local.

## Arhitectură

```
src/
├── components/   # UI: Task, TaskForm
├── services/
│   └── taskService.js   # comunicarea cu API-ul (fetch)
├── App.jsx       # pagina: stare, loading, error
└── main.jsx
```

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
git add task_5
git commit -m "Add task_5: Task Manager connected to API"
git push
```
