# Evaluare TaskFlow — Nume Prenume

## Mediu
- Sistem de operare: Linux
- Versiune Node.js: v22.22.0
- Browser: Chromium (Playwright) + verificare manuală
- Comenzi pornite: `npm install`, `npm run api`, `npm run dev`, `npm run build`

## Probleme identificate și remediate

| Nr. | Pași de reproducere | Comportament observat | Comportament așteptat | Soluție aplicată | Verificare |
|---|---|---|---|---|---|
| 1 | Tasks → filtru status „In progress” | Lista goală (codul compara cu `'In Progress'`, în date e `'In progress'`) | Se afișează sarcinile „In progress” | `Tasks.jsx`: comparație directă `task.status === status` | High + In progress → 1 rând |
| 2 | Tasks → căutare cu litere mari/mici sau sarcină fără `assignee` | Căutarea după persoană era case-sensitive și putea crăpa pe `assignee` lipsă | Căutare insensibilă la majuscule, null-safe | `Tasks.jsx`: `toLowerCase()` + `(task.assignee \|\| '')` | căutare „irina” → găsește „Irina Luca” |
| 3 | Dashboard → card „In progress” | Mereu 0 (`'In Progress'`) | Numără sarcinile „In progress” | `Dashboard.jsx` | card = 2 |
| 4 | Dashboard → „View all” | Redirect la Overview (rută `/task` inexistentă) | Deschide `/tasks` | `Dashboard.jsx` link `/tasks` | click → `/tasks` |
| 5 | Detalii sarcină → Delete | După ștergere redirect la `/task` → Overview | Revenire la lista `/tasks` | `TaskDetails.jsx` `navigate('/tasks')` | ștergere → `/tasks` |
| 6 | Projects → „View project” | Link `/project/1` duce la Overview | Deschide `/projects/1` | `Projects.jsx` | click → pagina proiectului |
| 7 | Editează o sarcină, schimbă proiectul și salvează | `projectId` salvat ca string → proiectul nu mai e găsit | `projectId` numeric | `TaskDetails.jsx`: `Number(form.projectId)` | proiect afișat corect după edit |
| 8 | Create task cu titlu format doar din spații | Se accepta titlul „gol” | Eroare de validare, valori trimmed, fără dublu submit | `TaskForm.jsx`: `trim()`, stare `submitting` | mesaj de eroare; fără dubluri |
| 9 | Sidebar → contor Tasks | Mereu „7” (hardcodat) | Număr real, actualizat la creare/ștergere | `App.jsx`: fetch + `useLocation` | 7 → 8 → 7 |
| 10 | Dashboard / topbar → dată | Mereu „Thursday, October 15” (hardcodat) | Data curentă (+ salut după oră) | `Dashboard.jsx`, `App.jsx` | data curentă afișată |

Remedieri suplimentare: `api.js` (headers suprascriau `Content-Type`), mesaje de eroare când API-ul e oprit pe Dashboard/Projects/ProjectDetails, proiect implicit în formular = primul proiect existent (nu `'1'` hardcodat).

## Funcționalitate nouă — filtru după prioritate
- Ce am implementat: select „Filter by priority” (All priorities / Low / Medium / High) în `Tasks.jsx`, buton „Reset filters” (apare când există filtre active); starea goală folosește același reset.
- Cum se folosește: Tasks → alege prioritatea; se combină cu căutarea și statusul.
- Cum am verificat: test automat Playwright (18 verificări) — combinații prioritate+status+căutare, contor „Showing X of Y”, stare goală, reset.

## Verificări finale
- [x] `npm run build`
- [x] CRUD verificat prin interfață (create, edit, delete)
- [x] Navigarea între pagini verificată
- [x] Căutarea și filtrele verificate împreună
- [x] Scenariu fără rezultate verificat
- [x] Formular cu date invalide verificat
- [x] PR descrie modificările și testele

## Limitări
- Nu există paginare/sortare după prioritate (nu era cerută).
