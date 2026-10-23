# Fișa proiectului — TaskFlow

## Identificare

| Câmp | Valoare |
| --- | --- |
| Denumire | TaskFlow — gestionarea sarcinilor în echipă |
| Tip | Aplicație web (frontend) |
| Tehnologii | React, Vite, JavaScript (JSX), CSS |
| Sursa datelor | Serviciu asincron peste localStorage (interfață de tip API REST) |

## Scopul aplicației

TaskFlow este o aplicație web destinată elevilor care lucrează în echipe. Rezolvă problema sarcinilor
împrăștiate în mesaje și caiete: permite organizarea lor, stabilirea termenelor-limită și urmărirea
progresului. Utilizatorii pot crea, modifica, șterge și filtra sarcinile după status și prioritate.
Aplicația oferă un dashboard cu statistici despre sarcinile finalizate și cele restante, astfel încât
echipa vede imediat ce are de făcut.

- **Ce problemă rezolvă?** Lipsa unei imagini clare asupra sarcinilor și a termenelor.
- **Cine sunt utilizatorii?** Elevii care lucrează în echipe de proiect.
- **Ce operațiuni pot efectua?** Adăugare, afișare, editare, ștergere, schimbare status, căutare, filtrare, sortare.
- **Ce beneficii oferă?** Vizibilitate asupra progresului, termene respectate, repartizare clară a responsabilităților.

## Funcționalități

### Obligatorii

1. Dashboard cu statistici (total, pe status, restante, progres %, termene apropiate).
2. Navigare între 3 secțiuni: Dashboard, Sarcini, Despre.
3. Afișarea listei de sarcini.
4. Adăugarea unei sarcini (titlu, descriere, status, prioritate, termen, responsabil).
5. Editarea unei sarcini.
6. Ștergerea unei sarcini, cu confirmare.
7. Schimbarea rapidă a statusului.
8. Căutare și filtrare (status, prioritate).
9. Validarea datelor din formular.
10. Mesaje de succes, eroare și confirmare; stări de încărcare, eroare și listă goală.
11. Afișarea datelor dintr-o sursă de date prin serviciu asincron.

### Opționale (implementate)

- Sortare după termen, prioritate sau titlu.
- Marcarea vizuală a sarcinilor restante.
- Interfață adaptată pentru ecrane mici.

### Opționale (neimplementate)

- Autentificare și conturi de utilizator.
- Conectare la un API REST extern (json-server).
- Notificări pentru termenele apropiate.

## Arhitectură tehnică pe scurt

Vezi [03-arhitectura-ui.md](03-arhitectura-ui.md).
