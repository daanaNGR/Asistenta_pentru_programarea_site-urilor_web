# Board Jira — task-uri, responsabili și estimări

Proiect Jira: **TaskFlow (TF)**, tip Kanban, coloane: `Backlog / To Do` → `In Progress` → `Code Review` → `Done`.

Estimarea se face în Story Points (șirul Fibonacci 1, 2, 3, 5, 8). Cele 16 task-uri se pot importa direct în Jira din [jira-import.csv](jira-import.csv) (Settings → System → External System Import → CSV).

| ID | Task | User Story | Responsabil | SP | Prioritate | Criterii de acceptare |
| --- | --- | --- | --- | --- | --- | --- |
| TF-1 | Definirea scopului și fișa proiectului | US-01..09 | Membrul 3 | 2 | High | Fișa conține scopul în 3–5 propoziții, publicul și lista funcționalităților. |
| TF-2 | Redactarea User Stories și a criteriilor de acceptare | US-01..09 | Membrul 3 | 3 | High | Minimum 6 User Stories, fiecare cu criterii verificabile prin testare. |
| TF-3 | Schițele interfeței (dashboard, listă, formular) | US-07 | Membrul 1 | 3 | High | Cele 3 schițe + stările de încărcare, eroare și listă goală. |
| TF-4 | Inițializarea repository-ului GitHub și a proiectului React (Vite) | — | Membrul 3 | 2 | High | Proiectul pornește cu npm run dev; branch-ul main este publicat pe GitHub. |
| TF-5 | Structura componentelor, Navbar și navigarea între pagini | US-07 | Membrul 1 | 3 | High | Navigare între Dashboard, Sarcini și Despre; pagina activă este evidențiată. |
| TF-6 | Serviciul de date asincron cu operații CRUD | US-01,03,05,09 | Membrul 2 | 3 | High | Funcții create/read/update/delete; datele rămân după refresh. |
| TF-7 | Lista sarcinilor (TaskCard) și stările încărcare / eroare / listă goală | US-08 | Membrul 1 | 3 | High | Lista se afișează; apar mesajele pentru încărcare, eroare și listă goală. |
| TF-8 | Formularul de adăugare și editare | US-01,03 | Membrul 1 | 3 | High | Formularul adaugă și modifică sarcini; la editare câmpurile sunt completate. |
| TF-9 | Validarea datelor din formular | US-02 | Membrul 2 | 3 | High | Titlu obligatoriu, 3–80 caractere; erori afișate lângă câmp. |
| TF-10 | Ștergerea sarcinii cu confirmare | US-05 | Membrul 2 | 2 | Medium | Dialog de confirmare; Anulează păstrează sarcina. |
| TF-11 | Schimbarea statusului dintr-un card | US-04 | Membrul 2 | 2 | Medium | Noul status se afișează; sarcinile finalizate apar tăiate. |
| TF-12 | Căutare, filtrare după status și prioritate, sortare | US-06 | Membrul 2 | 5 | Medium | Filtrele se combină; mesaj și reset când nu există rezultate. |
| TF-13 | Dashboard cu statistici | US-07 | Membrul 1 | 5 | Medium | Total, pe status, restante, progres %, termene apropiate; valori actualizate automat. |
| TF-14 | Mesaje de succes și eroare (Toast) | US-01,03,05,08 | Membrul 1 | 2 | Low | Mesaj după fiecare acțiune; dispare după 3 secunde. |
| TF-15 | Testarea cerințelor și remedierea bug-urilor | US-01..09 | Membrul 3 | 5 | High | Toate scenariile din tabelul de testare au status Trecut. |
| TF-16 | README.md, capturi de ecran și pregătirea prezentării | — | Membrul 3 | 3 | Medium | README complet, capturi adăugate, board Jira actualizat. |

## Distribuția efortului

| Membru | Rol orientativ | Story Points |
| --- | --- | --- |
| Membrul 1 | UI și frontend | 19 |
| Membrul 2 | Funcționalități și date | 15 |
| Membrul 3 | Integrare și calitate | 15 |
| **Total** | | **49** |

Volumul este echilibrat: diferența maximă dintre membri este de 4 SP, iar fiecare membru are cel puțin 5 task-uri cu rezultat verificabil.

> În Jira, înlocuiește „Membrul 1/2/3" cu numele reale ale membrilor echipei (câmpul Assignee).
