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
// Boucle for...of + template literals + ternaire
// ============================================================

function afficherFilmsConsole(liste) {
  console.log(`\n--- ${liste.length} film(s) ---`);

  for (const film of liste) {
    // Attribuer des étoiles selon la note du film
    let etoiles;
    if (film.note >= 8.5) {
      etoiles = "★★★";
    } else if (film.note >= 7) {
      etoiles = "★★";
    } else {
      etoiles = "★";
    }
    console.log(
      `  ${etoiles} ${film.titre} (${film.annee})` +
      ` - ${film.genre} - ${film.note}/10`
    );
  }
}

afficherFilmsConsole(films);


// ============================================================
// PHASE 3 : TRIER (M5)
// sort() avec spread [...] pour copier d'abord
// ============================================================

function trierParNote(liste) {
  return [...liste].sort((a, b) => b.note - a.note);
}

console.log("\n--- Triés par note ---");
afficherFilmsConsole(trierParNote(films));


// ============================================================
// PHASE 4 : RECHERCHER (M5)
// filter() + includes() + toLowerCase()
// ============================================================

function rechercherFilm(liste, terme) {
  // "Early return" : si pas de terme, on retourne tout de suite la liste complète
  // Ça évite d'imbriquer tout le reste dans un else
  if (!terme) return liste;

  // toLowerCase() pour que "Nolan", "nolan" et "NOLAN" donnent le même résultat
  const recherche = terme.toLowerCase();
  return liste.filter(film =>
    film.titre.toLowerCase().includes(recherche) ||
    film.realisateur.toLowerCase().includes(recherche)
  );
}

console.log("\n--- Recherche 'nolan' ---");
afficherFilmsConsole(rechercherFilm(films, "nolan"));


// ============================================================
// PHASE 5 : AFFICHAGE HTML (preview M7)
// innerHTML + template literals + querySelector
// ============================================================

function creerCarteFilm(film) {
  // On retourne une string qui contient du HTML
  // Les backticks ` ` permettent d'écrire sur plusieurs lignes
  // ${film.titre} injecte la valeur de la propriété dans le HTML
  return `<article class="film-card">
  <img src="${film.poster}" alt="${film.titre}" class="film-poster">
  <div class="film-info">
    <h3>${film.titre}</h3>
    <p class="film-meta">${film.annee} · ${film.genre}</p>
    <p class="film-realisateur">${film.realisateur}</p>
    <div class="film-note">
      <span class="note-badge">${film.note}</span>
    </div>
  </div>
</article>`;
}

function afficherFilmsHTML(liste) {
  const container = document.querySelector("#films-container");

  if (liste.length === 0) {
    container.innerHTML = "<p class=\"empty-message\">Aucun film trouvé</p>";
    return;
  }

  // On construit tout le HTML dans une string, puis on l'injecte d'un coup
  // C'est plus performant que d'ajouter les cartes une par une au DOM
  let html = "";
  liste.forEach(film => {
    html += creerCarteFilm(film);
  });
  container.innerHTML = html; // Remplace le contenu du conteneur
}


// ============================================================
// PHASE 6 : CONTRÔLES INTERACTIFS (preview M8)
// addEventListener + chaînage de fonctions
// ============================================================

function rafraichir() {
  const terme = document.querySelector("#recherche").value;

  // Chaînage : recherche → tri → affichage
  let resultats = rechercherFilm(films, terme);
  resultats = trierParNote(resultats);
  afficherFilmsHTML(resultats);
}

// On passe la fonction rafraichir SANS parenthèses ()
// Avec () → on l'appelle tout de suite. Sans () → on dit "appelle-la plus tard"
document.querySelector("#recherche")
  .addEventListener("input", rafraichir);

// Premier affichage au chargement de la page
rafraichir();
