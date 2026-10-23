# Plan și rezultate de testare

Fiecare scenariu a fost verificat în browser (Chromium), cu un script automat care folosește
aplicația construită (`npm run build` + `npm run preview`). Starea „Trecut" înseamnă că rezultatul
obținut a coincis cu cel așteptat.

| ID | User Story | Scenariu de test | Rezultat așteptat | Status |
| --- | --- | --- | --- | --- |
| T01 | US-01 | Adăugarea unei sarcini valide | Sarcina apare în listă, mesaj de succes | Trecut |
| T02 | US-02 | Trimiterea formularului fără titlu | Eroare „Titlul este obligatoriu." | Trecut |
| T03 | US-02 | Titlu de 2 caractere | Eroare „minimum 3 caractere" | Trecut |
| T04 | US-03 | Editarea unei sarcini existente | Modificările apar în listă | Trecut |
| T05a | US-05 | Ștergere → Anulează | Sarcina rămâne în listă | Trecut |
| T05b | US-05 | Ștergere → Da, șterge | Sarcina dispare | Trecut |
| T06 | US-04 | Schimbarea statusului în „Finalizat" | Cardul apare tăiat | Trecut |
| T07 | US-06 | Filtrare după status „Finalizat" | Doar sarcinile finalizate | Trecut |
| T08 | US-06 | Filtrare după prioritate „Scăzută" | Doar sarcinile cu prioritate scăzută | Trecut |
| T09a | US-06 | Căutare „figma" | O singură sarcină | Trecut |
| T09b | US-06 | Căutare fără rezultate („zzzz") | Mesaj „Nicio sarcină nu corespunde filtrelor." | Trecut |
| T09c | US-06 | Buton „Resetează filtrele" | Lista completă revine | Trecut |
| T10 | US-08 | Lista goală | Mesaj „Nu există sarcini momentan." | Trecut |
| T11 | US-08 | Eroare la încărcarea datelor | Mesaj de eroare și buton „Reîncarcă" | Trecut |
| T12 | US-07 | Dashboard după modificări | Statisticile corespund listei | Trecut |
| T13 | US-07 | Navigarea între pagini | Se afișează secțiunea aleasă | Trecut |
| T14 | US-09 | Reîncărcarea paginii | Sarcinile rămân | Trecut |
| T15 | — | Ecran îngust (390 px) | Fără derulare orizontală | Trecut |

## Situații-limită verificate

Titlu gol sau prea scurt, căutare fără rezultate, listă goală, eroare de acces la date.

## Bug-uri găsite în timpul testării

În prima rulare a testelor nu au apărut bug-uri în aplicație; eșecurile inițiale au fost greșeli în
scriptul de test (așteptări prea timpurii), corectate înainte de rezultatul final.

> Când găsești un bug real, urmează procesul din cerințe: task în Jira cu pașii de reproducere, rezultat obținut/așteptat, branch `fix/...`, Pull Request, actualizarea statusului.
