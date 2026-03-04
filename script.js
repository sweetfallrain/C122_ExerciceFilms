/**
 * CinéJS - Gestionnaire de Films
 * Démo live - Cours 122
 *
 * Concepts pratiqués :
 *   M1 : Variables (let, const), template literals
 *   M3 : Boucles (for...of)
 *   M4 : Fonctions (paramètres, return)
 *   M5 : Tableaux (filter, sort, forEach, spread [...])
 *   M6 : Objets (tableau d'objets, notation point)
 *   Preview M7 : innerHTML, querySelector
 *   Preview M8 : addEventListener
 */
"use strict";


// ============================================================
// PHASE 1 : LES DONNÉES (M1 + M6)
// Un tableau d'objets = notre "base de données"
// ============================================================

const films = [
  {
    titre: "Inception",
    realisateur: "Christopher Nolan",
    annee: 2010,
    note: 8.8,
    genre: "Science-Fiction",
    poster: "affiches/inception.jpg"
  },
  {
    titre: "Cats",
    realisateur: "Tom Hooper",
    annee: 2019,
    note: 2.8,
    genre: "Comédie",
    poster: "affiches/cats.jpg"
  },
  {
    titre: "Gladiator",
    realisateur: "Ridley Scott",
    annee: 2000,
    note: 8.5,
    genre: "Historique",
    poster: "affiches/gladiator.jpg"
  },
  {
    titre: "Spider-Man: No Way Home",
    realisateur: "Jon Watts",
    annee: 2021,
    note: 8.2,
    genre: "Action",
    poster: "affiches/spider-man.jpg"
  },
  {
    titre: "Parasite",
    realisateur: "Bong Joon-ho",
    annee: 2019,
    note: 8.5,
    genre: "Thriller",
    poster: "affiches/parasite.jpg"
  },
  {
    titre: "Morbius",
    realisateur: "Daniel Espinosa",
    annee: 2022,
    note: 5.2,
    genre: "Action",
    poster: "affiches/morbius.jpg"
  },
  {
    titre: "The Dark Knight",
    realisateur: "Christopher Nolan",
    annee: 2008,
    note: 9.0,
    genre: "Action",
    poster: "affiches/dark-knight.jpg"
  },
  {
    titre: "Le Loup de Wall Street",
    realisateur: "Martin Scorsese",
    annee: 2013,
    note: 8.2,
    genre: "Comédie",
    poster: "affiches/loup-wall-street.jpg"
  },
  {
    titre: "Madame Web",
    realisateur: "S.J. Clarkson",
    annee: 2024,
    note: 3.9,
    genre: "Action",
    poster: "affiches/madame-web.jpg"
  },
  {
    titre: "Django Unchained",
    realisateur: "Quentin Tarantino",
    annee: 2012,
    note: 8.4,
    genre: "Western",
    poster: "affiches/django.jpg"
  },
  {
    titre: "Intouchables",
    realisateur: "Nakache & Toledano",
    annee: 2011,
    note: 8.5,
    genre: "Comédie",
    poster: "affiches/intouchables.jpg"
  },
  {
    titre: "Borderlands",
    realisateur: "Eli Roth",
    annee: 2024,
    note: 3.0,
    genre: "Action",
    poster: "affiches/borderlands.jpg"
  },
  {
    titre: "Joker",
    realisateur: "Todd Phillips",
    annee: 2019,
    note: 8.4,
    genre: "Drame",
    poster: "affiches/joker.jpg"
  },
  {
    titre: "Interstellar",
    realisateur: "Christopher Nolan",
    annee: 2014,
    note: 8.7,
    genre: "Science-Fiction",
    poster: "affiches/interstellar.jpg"
  },
  {
    titre: "Avengers: Endgame",
    realisateur: "Russo Brothers",
    annee: 2019,
    note: 8.4,
    genre: "Action",
    poster: "affiches/avengers-endgame.jpg"
  },
  {
    titre: "Shutter Island",
    realisateur: "Martin Scorsese",
    annee: 2010,
    note: 8.2,
    genre: "Thriller",
    poster: "affiches/shutter-island.jpg"
  }
];


// ============================================================
// PHASE 2 : AFFICHAGE CONSOLE (M3 + M4)
// Boucle for...of + template literals + if/else
// ============================================================

/**
 * Affiche une liste de films dans la console.
 * Pour chaque film : étoiles (if/else), titre, année, genre, note.
 *
 * @param {Object[]} liste - Le tableau de films à afficher
 */
function afficherFilmsConsole(liste) {
  // TODO : console.log le nombre de films
  // TODO : for...of → pour chaque film :
  //   - if/else : note >= 8.5 → "★★★", >= 7 → "★★", sinon "★"
  //   - console.log avec template literal
}

afficherFilmsConsole(films);


// ============================================================
// PHASE 3 : TRIER (M5)
// sort() avec spread [...] pour copier d'abord
// ============================================================

/**
 * Trie les films par note décroissante.
 * [...liste] crée une copie, sort((a,b) => ...) compare.
 *
 * @param {Object[]} liste - Le tableau de films à trier
 * @returns {Object[]} Un NOUVEAU tableau trié
 */
function trierParNote(liste) {
  // TODO : return [...liste].sort(...)
}

console.log("\n--- Triés par note ---");
afficherFilmsConsole(trierParNote(films));


// ============================================================
// PHASE 4 : RECHERCHER (M5)
// filter() + includes() + toLowerCase()
// ============================================================

/**
 * Recherche des films par titre OU réalisateur.
 * toLowerCase() rend la recherche insensible à la casse.
 *
 * @param {Object[]} liste - Le tableau de films
 * @param {string} terme - Le texte recherché
 * @returns {Object[]} Les films correspondants
 */
function rechercherFilm(liste, terme) {
  // TODO : si pas de terme → retourner la liste entière
  // TODO : filter → titre OU réalisateur contient le terme
}

console.log("\n--- Recherche 'nolan' ---");
afficherFilmsConsole(rechercherFilm(films, "nolan"));


// ============================================================
// PHASE 5 : AFFICHAGE HTML (preview M7)
// innerHTML + template literals + querySelector
// ============================================================

/**
 * Crée le HTML d'une carte film (voir le modèle dans index.html).
 *
 * @param {Object} film - L'objet film
 * @returns {string} Le HTML de la carte
 */
function creerCarteFilm(film) {
  // TODO : retourner un template literal avec le HTML
  // Voir la carte d'exemple commentée dans index.html
}

/**
 * Affiche une liste de films dans la page HTML.
 *
 * @param {Object[]} liste - Le tableau de films à afficher
 */
function afficherFilmsHTML(liste) {
  // TODO : sélectionner #films-container
  // TODO : si liste vide → message "Aucun film trouvé"
  // TODO : sinon → forEach pour construire le HTML
}


// ============================================================
// PHASE 6 : CONTRÔLES INTERACTIFS (preview M8)
// addEventListener + chaînage de fonctions
// ============================================================

/**
 * Rafraîchit l'affichage : recherche → tri → affichage HTML.
 */
function rafraichir() {
  // TODO : lire la valeur de #recherche
  // TODO : chaîner rechercherFilm → trierParNote → afficherFilmsHTML
}

// TODO : addEventListener "input" sur #recherche → rafraichir

// TODO : appeler rafraichir() pour l'affichage initial
