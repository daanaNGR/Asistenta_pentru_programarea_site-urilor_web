# Arhitectura tehnică și proiectarea interfeței

## Tehnologii

| Domeniu | Alegere |
| --- | --- |
| Frontend | React 19 |
| Limbaj | JavaScript și JSX |
| Build | Vite |
| Stilizare | CSS propriu (variabile CSS, design responsive) |
| Date | Serviciu asincron `taskService.js` peste localStorage; poate fi înlocuit cu un API REST fără a modifica componentele |
| Calitate | oxlint |
| Versionare | Git, GitHub |
| Management | Jira (board Kanban) |

## Structura proiectului

```
taskflow/src/
├── components/   # componente reutilizabile: Navbar, TaskCard, TaskForm, TaskFilters,
│                 #   StatCard, ConfirmDialog, Toast
├── pages/        # DashboardPage, TasksPage, AboutPage
├── services/     # taskService.js — operațiile CRUD (asincrone)
├── hooks/        # useTasks.js — starea listei, loading și error
├── utils/        # constants, dates, validation
├── App.jsx       # navigare, mesaje (Toast), alegerea paginii
├── App.css
└── main.jsx
```

## Responsabilitățile straturilor

- **Component** — doar interfața (primește date și funcții prin props).
- **Page** — coordonează o secțiune (filtre, formular, confirmare).
- **Hook `useTasks`** — ține starea aplicației și apelează serviciul.
- **Service** — singurul loc care accesează sursa de date.

## Fluxul de navigare

```
Navbar ──► Dashboard ──(buton „Gestionează sarcinile")──► Sarcini
   │                                                        │
   ├──► Sarcini ──► [+ Sarcină nouă] / [Editează] ──► Formular ──► înapoi la listă
   │             └─► [Șterge] ──► Confirmare ──► înapoi la listă
   └──► Despre
```

## Schițe de interfață (wireframe)

### 1. Dashboard

```
┌──────────────────────────────────────────────────────────┐
│ TaskFlow                       [Dashboard] Sarcini Despre│
├──────────────────────────────────────────────────────────┤
│ Dashboard                                                │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐             │
│ │  6   │ │  3   │ │  1   │ │  2   │ │  1   │             │
│ │Total │ │De f. │ │În l. │ │Final.│ │Rest. │             │
│ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘             │
│ Progres general: 33%                                     │
│ [██████░░░░░░░░░░░░░░░░]                                 │
│ ┌─────────────────────┐ ┌─────────────────────┐          │
│ │ Termene apropiate   │ │ După prioritate     │          │
│ │ Titlu ........ data │ │ Ridicată ... 2      │          │
│ │ Titlu ........ data │ │ Medie ...... 1      │          │
│ │                     │ │ [Gestionează...]    │          │
│ └─────────────────────┘ └─────────────────────┘          │
└──────────────────────────────────────────────────────────┘
```

### 2. Pagina de gestionare a sarcinilor

```
┌──────────────────────────────────────────────────────────┐
│ Sarcini                                  [+ Sarcină nouă]│
│ [Caută...        ] [Status ▾] [Prioritate ▾] [Sortare ▾] │
│ ┌──────────────────────────────────────────────────────┐ │
│▌│ Titlu sarcină                         [Status ▾]     │ │
│▌│ Descriere                             [Editează]     │ │
│▌│ (Prioritate) Termen: dd.mm.yyyy       [Șterge]       │ │
│ └──────────────────────────────────────────────────────┘ │
│  ... (bara din stânga: culoarea = prioritatea)           │
└──────────────────────────────────────────────────────────┘
```

### 3. Formular de adăugare / editare

```
┌──────────────────────────────────────────┐
│ Sarcină nouă                             │
│ Titlu *      [______________________]    │
│              ! mesaj de eroare           │
│ Descriere    [______________________]    │
│ Status [De făcut ▾]  Prioritate [Medie ▾]│
│ Termen [zz.ll.aaaa]  Responsabil [_____] │
│                  [Anulează] [Adaugă]     │
└──────────────────────────────────────────┘
```

### 4. Stări speciale

- **Încărcare:** „Se încarcă sarcinile..."
- **Eroare:** mesaj roșu + buton „Reîncarcă"
- **Listă goală:** „Nu există sarcini momentan. Adaugă prima sarcină."
- **Fără rezultate:** „Nicio sarcină nu corespunde filtrelor." + „Resetează filtrele"

Variantele finale, realizate în aplicație, sunt în `screenshots/`.

> Dacă profesorul cere schița în Figma, aceste wireframe-uri se pot redesena acolo și atașa la task-ul din Jira.
