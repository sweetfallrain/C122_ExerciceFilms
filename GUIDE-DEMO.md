# CinéJS — Guide de démo live

**Durée** : ~90 min (buffer de 15 min inclus)
**Public** : ESIG1, débutants JavaScript
**Pré-requis** : M1 (variables), M3 (boucles), M4 (fonctions), M5 (tableaux), M6 (objets)
**Fichiers** : `index.html` (fourni), `style.css` (fourni), `script.js` (à coder en live)

> Le fichier `script.js` sur la branche `main` contient le squelette avec les TODO.
> La branche `solution` contient le code complet.

---

## Phase 1 — Les données (~10 min)

**Concepts** : `const`, tableau d'objets, notation point
**Support** : [Variables](https://devjs.ch/js/variables-et-constantes) · [Objets](https://devjs.ch/js/objets) · [Tableaux](https://devjs.ch/js/tableaux)
**Nuxy** : [Variables let](https://nuxy.ch/exercises/variables-declarations) · [Constantes](https://nuxy.ch/exercises/constantes) · [Tableau d'objets](https://nuxy.ch/exercises/tableau-objets)

### Ce qu'on fait

1. Ouvrir `index.html` dans le navigateur → page vide, c'est normal.
2. Ouvrir `script.js` → expliquer le `"use strict"`.
3. Créer le tableau `films` avec 3-4 films pour commencer :

```js
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
    titre: "The Dark Knight",
    realisateur: "Christopher Nolan",
    annee: 2008,
    note: 9.0,
    genre: "Action",
    poster: "affiches/dark-knight.jpg"
  }
];
```

4. Tester dans la console : `films.length`, `films[0].titre`, `films[1].note`.

### Points à souligner

- Un tableau `[]` contient des objets `{}`
- Chaque objet a les mêmes propriétés (structure cohérente)
- On accède aux propriétés avec le `.` (notation point)
- On ajoutera les autres films plus tard (copier-coller le bloc complet)

---

## Phase 2 — Affichage console (~15 min)

**Concepts** : `for...of`, template literals, `if/else if/else`, fonctions avec paramètres
**Support** : [Boucles](https://devjs.ch/js/boucles) · [Fonctions](https://devjs.ch/js/fonctions) · [Conditions](https://devjs.ch/js/conditions) · [Templates littéraux](https://devjs.ch/js-avance/templates-litteraux)
**Nuxy** : [Boucle for...of](https://nuxy.ch/exercises/boucle-for-of) · [Paramètres](https://nuxy.ch/exercises/fonction-parametres) · [Return](https://nuxy.ch/exercises/fonction-return) · [Conditions](https://nuxy.ch/exercises/premiere-condition)

### Ce qu'on fait

1. Créer la fonction `afficherFilmsConsole(liste)` :

```js
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
```

2. Appeler la fonction : `afficherFilmsConsole(films);`
3. Ouvrir la console du navigateur → voir le résultat.

### Points à souligner

- **`for...of`** : on parcourt chaque film du tableau, pas besoin d'index
- **`let` vs `const`** : `etoiles` change selon la condition → `let`
- **`if/else if/else`** : on teste du plus restrictif au plus large
- **Template literals** : les backticks `` ` ` `` permettent d'injecter des variables avec `${}`
- **Paramètre `liste`** : la fonction est réutilisable avec n'importe quel tableau de films

---

## Phase 3 — Trier par note (~10 min)

**Concepts** : `sort()`, spread `[...]`, callback de comparaison
**Support** : [Tableaux](https://devjs.ch/js/tableaux) · [Fonctions fléchées](https://devjs.ch/js-avance/fonctions-flechees)
**Nuxy** : [Trier un tableau d'objets](https://nuxy.ch/exercises/trier-tableau-objets) · [Copier/fusionner](https://nuxy.ch/exercises/copier-fusionner-tableaux) · [Arrow functions](https://nuxy.ch/exercises/arrow-function)

### Ce qu'on fait

1. Montrer le problème : `films.sort()` modifie le tableau original ! (piège classique)
2. Solution : copier d'abord avec le spread `[...]`

```js
function trierParNote(liste) {
  return [...liste].sort((a, b) => b.note - a.note);
}
```

3. Tester :

```js
console.log("\n--- Triés par note ---");
afficherFilmsConsole(trierParNote(films));
```

4. Vérifier dans la console : The Dark Knight (9.0) devrait être en premier.

### Points à souligner

- **`[...liste]`** : crée une copie (spread). Sans ça, on trie l'original
- **`b.note - a.note`** : positif → b avant a = tri décroissant
- **Réutilisation** : on passe le résultat de `trierParNote` directement à `afficherFilmsConsole`
- Inverser `a` et `b` pour trier dans l'autre sens

---

## Phase 4 — Rechercher (~10 min)

**Concepts** : `filter()`, `includes()`, `toLowerCase()`, early return
**Support** : [Tableaux](https://devjs.ch/js/tableaux) · [String](https://devjs.ch/js/string)
**Nuxy** : [Filtrer un tableau d'objets](https://nuxy.ch/exercises/filtrer-tableau-objets) · [Manipuler texte](https://nuxy.ch/exercises/manipuler-texte)

### Ce qu'on fait

```js
function rechercherFilm(liste, terme) {
  // Si pas de terme, on retourne la liste complète tout de suite
  if (!terme) return liste;

  // toLowerCase() : "Nolan", "nolan" et "NOLAN" donnent le même résultat
  const recherche = terme.toLowerCase();
  return liste.filter(film =>
    film.titre.toLowerCase().includes(recherche) ||
    film.realisateur.toLowerCase().includes(recherche)
  );
}
```

Tester :

```js
console.log("\n--- Recherche 'nolan' ---");
afficherFilmsConsole(rechercherFilm(films, "nolan"));
```

### Points à souligner

- **Early return** : si pas de terme → on sort tout de suite, ça évite un `else` inutile
- **`toLowerCase()`** : rend la recherche insensible à la casse
- **`filter()`** : retourne un nouveau tableau avec seulement les éléments qui passent le test
- **`||`** : on cherche dans le titre OU le réalisateur
- **`includes()`** : cherche une sous-chaîne (pas besoin de match exact)

---

## Phase 5 — Affichage HTML (~20 min)

**Concepts** : `querySelector`, template literals avec HTML, `forEach`
**Support** : [Accéder aux éléments](https://devjs.ch/dom/access-elements) · [Modifier le contenu](https://devjs.ch/dom/modifier-contenu) · [Templates littéraux](https://devjs.ch/js-avance/templates-litteraux)
**Nuxy** : [Sélectionner un élément](https://nuxy.ch/exercises/selectionner-element) · [Modifier le contenu](https://nuxy.ch/exercises/modifier-contenu) · [Créer des éléments](https://nuxy.ch/exercises/creer-elements)

> C'est la phase la plus complexe. On y va progressivement en 3 étapes.

### Étape 5a — Afficher juste les titres

Objectif : comprendre le principe avant de faire du HTML complexe.

```js
function afficherFilmsHTML(liste) {
  const container = document.querySelector("#films-container");
  let html = "";
  liste.forEach(film => {
    html += `<h2>${film.titre}</h2>`;
  });
  container.innerHTML = html;
}

afficherFilmsHTML(films);
```

**Montrer le résultat** dans le navigateur : les titres s'affichent !

Points clés :
- `querySelector("#films-container")` → récupère l'élément HTML avec cet `id`
- On construit une string `html` en concaténant avec `+=`
- `container.innerHTML` remplace tout le contenu du conteneur d'un coup

### Étape 5b — Ajouter la note

```js
html += `<div>
  <h2>${film.titre}</h2>
  <p>${film.note}/10</p>
</div>`;
```

**Montrer** : on peut écrire du HTML sur plusieurs lignes grâce aux backticks.

### Étape 5c — La carte complète

Extraire dans une fonction dédiée pour garder le code lisible :

```js
function creerCarteFilm(film) {
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
```

Modifier `afficherFilmsHTML` pour utiliser `creerCarteFilm` :

```js
function afficherFilmsHTML(liste) {
  const container = document.querySelector("#films-container");

  if (liste.length === 0) {
    container.innerHTML = "<p class=\"empty-message\">Aucun film trouvé</p>";
    return;
  }

  let html = "";
  liste.forEach(film => {
    html += creerCarteFilm(film);
  });
  container.innerHTML = html;
}
```

**Montrer le résultat** : les cartes apparaissent avec le CSS ! Effet wow.

### Points à souligner

- On construit du HTML comme une **string** → on l'injecte d'un coup
- C'est plus performant que d'ajouter les éléments un par un
- Les classes CSS (`film-card`, `film-poster`, etc.) sont déjà prévues dans `style.css`
- **`forEach` + `+=`** : on parcourt le tableau et on concatène chaque carte
- On a extrait `creerCarteFilm` pour séparer les responsabilités

---

## Phase 6 — Contrôles interactifs (~10 min)

**Concepts** : `addEventListener`, chaînage de fonctions
**Support** : [Événements](https://devjs.ch/dom/evenements) · [Récupérer la valeur des champs](https://devjs.ch/formulaires/recuperer-valeur-champs)
**Nuxy** : [Ajouter un événement](https://nuxy.ch/exercises/ajouter-evenement) · [Lire la valeur d'un champ](https://nuxy.ch/exercises/lire-valeur-champ)

### Ce qu'on fait

```js
function rafraichir() {
  const terme = document.querySelector("#recherche").value;

  // Chaînage : recherche → tri → affichage
  let resultats = rechercherFilm(films, terme);
  resultats = trierParNote(resultats);
  afficherFilmsHTML(resultats);
}

// On passe la fonction rafraichir SANS parenthèses ()
// Avec () → on l'appelle tout de suite
// Sans () → on dit "appelle-la plus tard, quand l'événement arrive"
document.querySelector("#recherche")
  .addEventListener("input", rafraichir);

// Premier affichage au chargement
rafraichir();
```

### Démonstration

1. Taper "nolan" → seuls les films de Nolan apparaissent, triés par note
2. Effacer → tous les films reviennent
3. Taper "action" → rien (on ne cherche pas par genre... extension possible !)

### Points à souligner

- **`addEventListener("input", rafraichir)`** : à chaque frappe, `rafraichir` est appelée
- **Sans `()`** : on passe la fonction comme référence, pas son résultat
- **Chaînage** : recherche → tri → affichage, chaque fonction fait une seule chose
- **`rafraichir()`** à la fin : affiche tous les films triés au chargement de la page

---

## Compléter les données

Une fois que tout fonctionne avec 3 films, copier-coller le tableau complet (16 films) pour un rendu plus impressionnant. Les élèves peuvent aussi ajouter leurs propres films.

---

## Récapitulatif des concepts

| Phase | Concepts JS | devjs.ch | nuxy.ch | Durée |
|-------|------------|----------|---------|-------|
| 1. Données | `const`, tableaux, objets | [Variables](https://devjs.ch/js/variables-et-constantes) · [Objets](https://devjs.ch/js/objets) | [Tableau d'objets](https://nuxy.ch/exercises/tableau-objets) | ~10 min |
| 2. Console | `for...of`, `if/else`, fonctions | [Boucles](https://devjs.ch/js/boucles) · [Fonctions](https://devjs.ch/js/fonctions) | [for...of](https://nuxy.ch/exercises/boucle-for-of) · [Return](https://nuxy.ch/exercises/fonction-return) | ~15 min |
| 3. Trier | `sort()`, spread `[...]` | [Tableaux](https://devjs.ch/js/tableaux) | [Trier objets](https://nuxy.ch/exercises/trier-tableau-objets) · [Copier](https://nuxy.ch/exercises/copier-fusionner-tableaux) | ~10 min |
| 4. Rechercher | `filter()`, `includes()` | [Tableaux](https://devjs.ch/js/tableaux) · [String](https://devjs.ch/js/string) | [Filtrer objets](https://nuxy.ch/exercises/filtrer-tableau-objets) | ~10 min |
| 5. HTML | `querySelector`, `innerHTML` | [Accéder éléments](https://devjs.ch/dom/access-elements) · [Contenu](https://devjs.ch/dom/modifier-contenu) | [Sélectionner](https://nuxy.ch/exercises/selectionner-element) · [Contenu](https://nuxy.ch/exercises/modifier-contenu) | ~20 min |
| 6. Interactif | `addEventListener` | [Événements](https://devjs.ch/dom/evenements) | [Événement](https://nuxy.ch/exercises/ajouter-evenement) · [Valeur champ](https://nuxy.ch/exercises/lire-valeur-champ) | ~10 min |
| **Total** | | | | **~75 min + 15 min buffer** |

---

## Extensions possibles

Si le temps le permet ou en exercice à faire seul :

- Ajouter la recherche par genre
- Ajouter un bouton pour trier par année
- Ajouter un compteur "X films trouvés"
- Permettre d'ajouter un film via un formulaire
