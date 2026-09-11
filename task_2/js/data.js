// data.js — conținutul site-ului, ca date, nu ca HTML scris de mână.
// app.js citește aceste array-uri și construiește pagina dinamic.

export const servicii = [
  {
    id: "tuns-clasic",
    categorie: "Tuns",
    nume: "Tuns clasic, foarfecă și mașină",
    descriere: "Consultanță scurtă, spălat, tuns pe stil și styling final.",
    pret: 180,
  },
  {
    id: "tuns-skin-fade",
    categorie: "Tuns",
    nume: "Skin fade / undercut",
    descriere: "Degrade fin, trecere netă spre piele, contur cu briciul.",
    pret: 220,
  },
  {
    id: "barba",
    categorie: "Barbă",
    nume: "Aranjare barbă cu briciul",
    descriere: "Contur, prosop cald și ulei de îngrijire pentru piele.",
    pret: 150,
  },
  {
    id: "barba-tuns",
    categorie: "Barbă",
    nume: "Barbierit complet, cald",
    descriere: "Bărbierit clasic cu briciul, prosoape calde, aftershave.",
    pret: 190,
  },
  {
    id: "pachet-complet",
    categorie: "Pachete",
    nume: "Pachet complet: tuns + barbă",
    descriere: "Tuns pe stil, aranjare barbă și styling, la un singur preț.",
    pret: 330,
  },
  {
    id: "pachet-nunta",
    categorie: "Pachete",
    nume: "Pachet eveniment / nuntă",
    descriere: "Tuns, barbă, styling și retuș rapid înainte de eveniment.",
    pret: 450,
  },
];

export const echipa = [
  {
    imagine: "assets/img/avatar-1.svg",
    alt: "Portret ilustrat, bărbier cu barbă scurtă și șapcă",
    nume: "Vlad Ciobanu",
    rol: "Barber senior, specialist fade",
  },
  {
    imagine: "assets/img/avatar-2.svg",
    alt: "Portret ilustrat, bărbieriță cu păr prins și ochelari",
    nume: "Doina Rotaru",
    rol: "Barber, specialist barbierit clasic",
  },
  {
    imagine: "assets/img/avatar-3.svg",
    alt: "Portret ilustrat, bărbier cu barbă lungă și tunsoare undercut",
    nume: "Sergiu Lupu",
    rol: "Fondator, styling și evenimente",
  },
];

export const program = [
  { ziua: "Luni — Vineri", ora: "09:00 – 20:00", serviciu: "Program normal, cu și fără programare", pret: "de la 150 MDL" },
  { ziua: "Sâmbătă", ora: "10:00 – 18:00", serviciu: "Program normal, recomandăm programare", pret: "de la 150 MDL" },
  { ziua: "Duminică", ora: "11:00 – 16:00", serviciu: "Doar cu programare în prealabil", pret: "de la 150 MDL" },
  { ziua: "Zile de sărbătoare", ora: "Închis", serviciu: "—", pret: "—" },
];
