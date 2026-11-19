# play-pokechill.github.io
Monsters and Chill

## Langues / Languages

Le jeu est disponible en **anglais** et en **français**. La langue se choisit dans *Paramètres → Langue (Language)* ; au premier lancement, elle suit celle du navigateur. Le choix est enregistré séparément de la sauvegarde (clé `pokechill_lang`), qui n’est jamais modifiée.

- Textes : `lang/en.json`, `lang/fr.json` (générés par `node tools/build-lang.js`).
- Noms officiels (Pokémon, capacités, talents, objets, types, lieux) : `tools/glossary-fr.json`, avec la source de chaque terme ; le contenu propre au jeu porte le statut « à valider ».
- Contrôle : `node tools/check-i18n.js` (installer d’abord les outils : `cd tools && npm install`).

## Crédits

Fork de [play-pokechill/play-pokechill.github.io](https://github.com/play-pokechill/play-pokechill.github.io) : tout le mérite du jeu revient au projet d’origine. Ce fork ajoute uniquement la traduction française et le système de langues.

Projet de fan **non officiel**, sans lien avec Nintendo, Creatures Inc., GAME FREAK ou The Pokémon Company. Pokémon et les noms associés sont des marques de leurs détenteurs respectifs. Noms français officiels recoupés avec Poképédia et PokéAPI.
