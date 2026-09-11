// app.js — transformă pagina din static în dinamic:
// serviciile, echipa și programul se randează din data.js;
// serviciile pot fi filtrate pe categorie;
// formularul de programare e validat și trimis fără reîncărcarea paginii.

import { servicii, echipa, program } from "./data.js";

// ---------- randare servicii (cu filtrare după categorie) ----------

const serviciiList = document.querySelector("#servicii-list");
const filtreContainer = document.querySelector("#servicii-filtre");

function formateazaPret(pret) {
  return `${pret} MDL`;
}

function renderServicii(lista) {
  serviciiList.innerHTML = lista
    .map(
      (s) => `
      <li>
        <span class="tag">${s.categorie}</span>
        <div class="serviciu-top">
          <h3>${s.nume}</h3>
          <span class="serviciu-pret">${formateazaPret(s.pret)}</span>
        </div>
        <p>${s.descriere}</p>
      </li>`
    )
    .join("");
}

function renderFiltre() {
  const categorii = ["Toate", ...new Set(servicii.map((s) => s.categorie))];

  filtreContainer.innerHTML = categorii
    .map(
      (categorie, index) => `
      <button type="button" class="filtru-btn${index === 0 ? " activ" : ""}" data-categorie="${categorie}">
        ${categorie}
      </button>`
    )
    .join("");

  filtreContainer.querySelectorAll(".filtru-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      filtreContainer.querySelectorAll(".filtru-btn").forEach((b) => b.classList.remove("activ"));
      btn.classList.add("activ");

      const categorie = btn.dataset.categorie;
      const filtrate =
        categorie === "Toate" ? servicii : servicii.filter((s) => s.categorie === categorie);
      renderServicii(filtrate);
    });
  });
}

// ---------- randare echipă ----------

const echipaGrid = document.querySelector("#echipa-grid");

function renderEchipa() {
  echipaGrid.innerHTML = echipa
    .map(
      (m) => `
      <figure>
        <img src="${m.imagine}" width="300" height="300" loading="lazy" alt="${m.alt}">
        <figcaption>
          <strong>${m.nume}</strong>
          <span>${m.rol}</span>
        </figcaption>
      </figure>`
    )
    .join("");
}

// ---------- randare tabel program ----------

const programBody = document.querySelector("#program-body");

function renderProgram() {
  programBody.innerHTML = program
    .map(
      (p) => `
      <tr>
        <td>${p.ziua}</td>
        <td>${p.ora}</td>
        <td>${p.serviciu}</td>
        <td class="price">${p.pret}</td>
      </tr>`
    )
    .join("");
}

// ---------- populare select "Serviciu dorit" din aceleași date ----------

const selectServiciu = document.querySelector("#serviciu");

function renderOptiuniServiciu() {
  selectServiciu.innerHTML = servicii
    .map((s) => `<option value="${s.id}">${s.nume} — ${formateazaPret(s.pret)}</option>`)
    .join("");
}

// ---------- validare + trimitere formular, fără reîncărcare ----------

const form = document.querySelector("#programare-form");
const formStatus = document.querySelector("#form-status");

function afiseazaEroare(input, mesaj) {
  const field = input.closest(".field");
  let eroare = field.querySelector(".field-error");
  if (!eroare) {
    eroare = document.createElement("p");
    eroare.className = "field-error";
    field.appendChild(eroare);
  }
  eroare.textContent = mesaj;
  input.setAttribute("aria-invalid", "true");
}

function curataEroare(input) {
  const field = input.closest(".field");
  const eroare = field.querySelector(".field-error");
  if (eroare) eroare.remove();
  input.removeAttribute("aria-invalid");
}

function valideazaFormular() {
  let valid = true;

  const nume = form.querySelector("#nume");
  const telefon = form.querySelector("#telefon");

  if (nume.value.trim().length < 3) {
    afiseazaEroare(nume, "Introdu numele complet (minim 3 caractere).");
    valid = false;
  } else {
    curataEroare(nume);
  }

  const telefonRegex = /^[+0-9\s]{8,}$/;
  if (!telefonRegex.test(telefon.value.trim())) {
    afiseazaEroare(telefon, "Introdu un număr de telefon valid.");
    valid = false;
  } else {
    curataEroare(telefon);
  }

  return valid;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!valideazaFormular()) {
    formStatus.textContent = "Verifică datele marcate mai jos și încearcă din nou.";
    formStatus.className = "form-status form-status--eroare";
    return;
  }

  const nume = form.querySelector("#nume").value.trim();
  const serviciuAles = servicii.find((s) => s.id === selectServiciu.value);

  formStatus.textContent = `Mulțumim, ${nume}! Programarea pentru „${serviciuAles.nume}" (${formateazaPret(
    serviciuAles.pret
  )}) a fost înregistrată — te confirmăm telefonic în cel mai scurt timp.`;
  formStatus.className = "form-status form-status--succes";

  form.reset();
});

// ---------- an curent în footer ----------

const anCurent = document.querySelector("#an-curent");
if (anCurent) anCurent.textContent = new Date().getFullYear();

// ---------- inițializare ----------

renderFiltre();
renderServicii(servicii);
renderEchipa();
renderProgram();
renderOptiuniServiciu();
