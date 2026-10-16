# TaskFlow — proiect de evaluare

TaskFlow este o aplicație React pentru gestionarea proiectelor și sarcinilor unei echipe. Repository-ul este folosit pentru o evaluare practică la disciplina **Asistență pentru programarea site-urilor web**.

## Scopul evaluării

Pornind de la aplicația existentă, fiecare student trebuie să:

1. investigheze aplicația și să identifice **10 bug-uri/erori**;
2. reproducă și să corecteze fiecare problemă;
3. implementeze funcționalitatea suplimentară descrisă mai jos;
4. verifice aplicația și să documenteze modificările;
5. trimită soluția printr-un Pull Request către repository-ul personal derivat din proiectul inițial.

Nu modificați direct repository-ul cadrului didactic. Lucrați în propriul fork.

## Tehnologii

- React + Vite
- React Router
- JSON Server ca API REST local
- Lucide React pentru pictograme
- CSS responsive, fără framework CSS suplimentar

## Cerințe tehnice

- Node.js 18+ și npm instalate.
- Git instalat.
- Un cont GitHub.

## Instalare și pornire

Clonați propriul fork, apoi instalați dependențele:

```bash
npm install
```

Porniți API-ul într-un terminal:

```bash
npm run api
```

API-ul va fi disponibil la `http://localhost:3001`.

Porniți aplicația într-un al doilea terminal:

```bash
npm run dev
```

Deschideți URL-ul local afișat de Vite, de regulă `http://localhost:5173`.

Pentru verificarea build-ului:

```bash
npm run build
```

> API-ul trebuie să ruleze separat de serverul Vite. Datele de test se află în `db.json`; operațiile de creare, editare și ștergere modifică acest fișier prin JSON Server.

## Funcționalități existente

- Dashboard cu statistici și sarcini recente.
- Listă de sarcini cu căutare și filtre.
- Vizualizarea detaliilor unei sarcini.
- Crearea, editarea și ștergerea sarcinilor prin API.
- Listă de proiecte și pagină de detalii a proiectului.
- Navigare între pagini prin React Router.
- Date inițiale pentru testare în `db.json`.

Unele comportamente ale aplicației nu funcționează corect intenționat. Investigați aplicația prin utilizare, inspectarea codului și verificarea cererilor API.

## Funcționalitatea suplimentară de implementat

### Filtrare și organizare după prioritate

Implementați o opțiune completă de filtrare a sarcinilor după prioritate: **Low, Medium, High**.

Criterii de acceptare:

- utilizatorul poate selecta o prioritate sau „Toate prioritățile”;
- filtrul funcționează împreună cu căutarea și filtrul după status, fără ca un criteriu să îl anuleze pe celălalt;
- numărul sarcinilor afișate corespunde rezultatului filtrat;
- starea goală este afișată când nu există rezultate;
- controlul are etichetă accesibilă și stil vizual coerent cu aplicația;
- filtrele pot fi resetate ușor.

Nu este suficient să adăugați doar un element vizual: filtrarea trebuie să funcționeze efectiv.

## Flux GitHub obligatoriu

### 1. Fork și clonare

1. Deschideți repository-ul inițial furnizat de cadrul didactic.
2. Apăsați **Fork** pentru a crea o copie în contul propriu.
3. Clonați fork-ul:

```bash
git clone https://github.com/USERNAME/taskflow-evaluare.git
cd taskflow-evaluare
npm install
```

Înlocuiți `USERNAME` cu numele contului vostru GitHub.

### 2. Creați un branch de lucru

```bash
git checkout -b feature/fix-taskflow
```

Lucrați pe acest branch, nu direct pe `main`.

### 3. Salvați modificările prin commit-uri clare

Exemple de mesaje de commit:

```bash
git add .
git commit -m "fix: correct task status filtering"
git commit -m "fix: validate task form"
git commit -m "feat: add priority filter"
```

Fiecare commit trebuie să reprezinte o schimbare logică. Nu este obligatoriu să folosiți exact aceste mesaje, dar mesajele trebuie să fie explicite.

### 4. Publicați branch-ul

```bash
git push -u origin feature/fix-taskflow
```

### 5. Deschideți Pull Request

Din GitHub, creați un Pull Request din branch-ul de lucru către `main` din propriul fork. Dacă cadrul didactic solicită explicit un PR către repository-ul inițial, selectați repository-ul cadrului didactic ca bază.

Titlu recomandat: `Evaluare TaskFlow — Nume Prenume`

În descriere includeți:

- lista celor 10 bug-uri identificate;
- pașii prin care ați reprodus fiecare problemă;
- explicația soluției aplicate;
- descrierea funcționalității noi;
- verificările manuale și comenzile de testare executate;
- eventuale limitări rămase.

## Livrabile

- Fork GitHub cu istoricul commit-urilor.
- Branch de lucru.
- Pull Request completat.
- Cod funcțional și formatat.
- Descrierea celor 10 bug-uri și a soluțiilor.
- Funcționalitatea suplimentară implementată.
- Build fără erori.

## Reguli de lucru

- Nu eliminați funcționalități existente pentru a evita repararea lor.
- Nu înlocuiți API-ul cu date hardcodate în componente.
- Nu includeți fișierele `node_modules` sau `dist` în Git.
- Testați și scenariile cu liste goale, date invalide și răspunsuri API eșuate.
- Codul trebuie să fie lizibil și împărțit logic în componente.
- Fiecare student trebuie să lucreze individual și să poată explica propriile modificări.

## Criterii de evaluare

Baremul detaliat este comunicat de cadrul didactic. Evaluarea ia în considerare corectitudinea remedierilor, calitatea implementării, utilizarea API-ului, navigarea, testarea și calitatea Pull Request-ului.
