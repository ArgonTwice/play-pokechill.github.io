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

## Jouer sur téléphone

Adresse : <https://argontwice.github.io/play-pokechill.github.io/>

Le jeu s’installe comme une application (icône sur l’écran d’accueil, plein écran) :

- **Android (Chrome)** : menu ⋮ → *Installer l’application*.
- **iPhone / iPad (Safari)** : bouton *Partager* → *Sur l’écran d’accueil*.

Une fois ouvert, il reste jouable sans réseau pour ce qui a déjà été chargé. Chaque nouvelle version publiée est récupérée automatiquement, et une bannière la signale en jeu. L’appui long remplace le clic droit.

## Sauvegarde cloud (PC ↔ téléphone)

Chaque appareil garde sa propre sauvegarde. Pour jouer à la même partie partout, *Paramètres → Sauvegarde cloud* :

1. Toucher *Créer un jeton sur GitHub* : la page s’ouvre avec la seule permission **gist** cochée. Choisir une expiration, générer, copier le jeton.
2. Coller le jeton puis *Connecter*. Sur le premier appareil, la partie est envoyée dans un Gist **secret** ; sur les suivants, le jeu propose de la reprendre.
3. Ensuite tout est automatique : vérification au lancement, envoi toutes les 5 minutes et quand on quitte l’appli.

Sécurités : rien n’est écrasé sans confirmation. Si la partie a changé sur un autre appareil, la synchro se met en pause et demande *Envoyer* ou *Récupérer*. Avant tout chargement depuis le cloud, la partie locale est gardée et peut être rétablie avec *Restaurer la copie de secours*. L’historique du Gist sur GitHub conserve aussi les anciennes versions. Le jeton reste uniquement sur l’appareil ; *Déconnecter* l’efface.

## Crédits

Fork de [play-pokechill/play-pokechill.github.io](https://github.com/play-pokechill/play-pokechill.github.io) : tout le mérite du jeu revient au projet d’origine. Ce fork ajoute la traduction française et le système de langues, la version installable pour téléphone, la sauvegarde cloud et quelques corrections de bugs, sans toucher aux règles du jeu.

Projet de fan **non officiel**, sans lien avec Nintendo, Creatures Inc., GAME FREAK ou The Pokémon Company. Pokémon et les noms associés sont des marques de leurs détenteurs respectifs. Noms français officiels recoupés avec Poképédia, Pokébip, PokéAPI, Serebii et Bulbapedia.

*Unofficial fan project. All credit for the game goes to the original [Pokechill](https://github.com/play-pokechill/play-pokechill.github.io) project; this fork adds a language system, a French translation, an installable mobile version, cloud save sync and a few bug fixes, without changing the game rules.*
