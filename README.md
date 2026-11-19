# play-pokechill.github.io
Monsters and Chill

## Langues / Languages

Traduction FR : AmicusSoft.

Le jeu est disponible en **anglais** et en **français**. La langue se choisit dans *Paramètres → Langue (Language)* ; au premier lancement, elle suit celle du navigateur. Le choix est enregistré séparément de la sauvegarde (clé `pokechill_lang`), qui n’est jamais modifiée.

- Textes : `lang/en.json`, `lang/fr.json` (générés par `node tools/build-lang.js`).
- Noms du jeu (Pokémon, capacités, talents, objets, types, lieux…) : `tools/glossary-fr.json`, avec la source de chaque terme (nom officiel, motif officiel ou traduction validée) et, pour le contenu propre à Pokechill, une note de justification. Tous les termes sont relus et validés.
- Recherche : le Pokédex et le dictionnaire trouvent un Pokémon, une capacité, un talent ou un objet par son nom français comme par son nom anglais.
- Contrôle : `node tools/check-i18n.js` (installer d’abord les outils : `cd tools && npm install`).
- Mise à jour depuis le projet d’origine : voir [`tools/UPDATING.md`](tools/UPDATING.md).

Seul le glossaire des termes du jeu est versionné : la bible de traduction utilisée pour le constituer reste locale et n’est pas publiée.

## Crédits

Fork de [play-pokechill/play-pokechill.github.io](https://github.com/play-pokechill/play-pokechill.github.io) : tout le mérite du jeu revient au projet d’origine. Ce fork ajoute uniquement la traduction française et le système de langues.

Projet de fan **non officiel**, sans lien avec Nintendo, Creatures Inc., GAME FREAK ou The Pokémon Company. Pokémon et les noms associés sont des marques de leurs détenteurs respectifs. Noms français officiels recoupés avec Poképédia, Pokébip, PokéAPI, Serebii et Bulbapedia.

*Unofficial fan project. All credit for the game goes to the original [Pokechill](https://github.com/play-pokechill/play-pokechill.github.io) project; this fork only adds a language system and a French translation.*
