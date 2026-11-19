# Resynchroniser le fork avec upstream

Procédure pour intégrer une nouvelle version de [play-pokechill/play-pokechill.github.io](https://github.com/play-pokechill/play-pokechill.github.io) sans casser la traduction.

Prérequis : Node.js, `cd tools && npm install` (acorn, acorn-walk, parse5).

## 1. Récupérer upstream

```bash
git fetch upstream
git checkout feature/i18n-fr
git merge upstream/main          # jamais de rebase ni de force-push sur une branche publiée
git status                       # vérifier qu'aucun sprite n'apparaît modifié (voir « Pièges »)
```

Conflits fréquents : upstream modifie une ligne dont le texte a été remplacé par `t('…')`. Garder **la logique d'upstream** et **l'appel `t()`** ; si la phrase anglaise a changé, la nouvelle phrase deviendra une nouvelle clé à l'étape 2.

## 2. Extraire les nouveaux textes

```bash
node tools/extract-strings.js            # liste les candidats (tools/strings/candidates.json)
node tools/extract-strings.js --apply    # remplace par t() et complète tools/strings/en.json
```

Relire le diff de `scripts/` et `index.html` : seul l'affichage doit changer. Si une clé technique a été extraite par erreur (classe CSS, type MIME, identifiant, valeur d'`<option>`…) :

```bash
node tools/revert-keys.js ui.cle1 ui.cle2
```

## 3. Mettre à jour les noms du jeu (glossaire)

Si upstream ajoute des Pokémon, capacités, talents, objets, zones… :

```bash
node tools/build-glossary.js <dossier_csv_pokeapi> <dossier_bible>
```

- `<dossier_csv_pokeapi>` : les CSV de PokéAPI (`data/v2/csv/*.csv` du dépôt PokeAPI/pokeapi).
- `<dossier_bible>` : la bible de traduction locale, **lue seule, jamais versionnée**.
- Les nouveaux termes sans source officielle sortent avec le statut « à valider ». Les valider dans `tools/glossary-manual.json` (`overrides.<catégorie>.<clé>` : `fr`, `source`, `statut`, `note` de preuve). `node tools/review/make-review.js` (outil local, hors dépôt) les présente par motif.
- Règle de confiance : nom officiel prouvé (Poképédia + une autre source) > motif officiel (« CT … », « ROM … », « Absorbe-… », « Aire de <type> ») > traduction littérale validée.

## 4. Traduire les nouvelles phrases

Ajouter chaque nouvelle clé de `tools/strings/en.json` dans `tools/strings/fr.json`, en utilisant **les noms du glossaire** (même terme EN = même terme FR) et la typographie française (espaces insécables avant `! ? ; :` et dans « », apostrophe ’, points de suspension …). Conserver les `{variables}` et les balises HTML à l'identique.

```bash
node tools/build-lang.js      # régénère lang/en.json et lang/fr.json
node tools/check-i18n.js      # doit finir à « erreurs : 0 »
```

Exceptions justifiées (mot anglais commun, syntaxe à taper telle quelle) : `tools/check-allow.json`.

## 5. Tester

Servir le dossier en local (`python -m http.server`), puis dans Chrome **avec rechargement forcé (Ctrl+Maj+R)**, sinon les anciens scripts restent en cache :

- EN puis FR (Paramètres → Langue) : menus, équipe, combat, zones, boutique, génétique, entraînement, Pokédex, dictionnaire, paramètres ;
- recherche par nom FR et EN (« Bulbizarre » / « bulbasaur ») ;
- export puis import de la sauvegarde : données identiques ;
- 0 erreur dans la console, 0 texte anglais résiduel en FR.

Puis commit avec des chemins explicites (`git add <fichiers>`, jamais `-A`) et push sur `origin` uniquement.

## Pièges connus

- **13 sprites en collision de casse** (12 `img/pkmn/sprite/Hisuian*.png` / `hisuian*.png` + `woChien.png` / `wochien.png`) : sous Windows/macOS, Git les voit toujours modifiés. Ne jamais les ajouter ni les « corriger » ; ne pas utiliser `git add -A`.
- **Chemins relatifs** : le site est servi en sous-chemin (`/play-pokechill.github.io/`). Tout chemin absolu (`/img/…`) casse sur GitHub Pages ; utiliser `img/…`.
- **Clés par namespace** : toute clé est `ui.`, `msg.`, `pkmn.`, `move.`, `ability.`, `item.`, `area.`, `field.`, `status.`, `type.`… ; `format(id, ns)` exige toujours un namespace (`'raw'` pour un chemin d'image). `check-i18n.js` refuse une clé nue.
- **Texte traduit utilisé comme logique** : un texte affiché ne doit jamais servir de clé, de comparaison ou d'identifiant. Exemples corrigés : `item[x + t('ui.memory')]`, `textContent == "Abort"`, `sort.replace(t('ui.bst'), "")`, `itemName == "No item"`. `check-i18n.js` signale `t()`/`format()`/`tName()` dans un accès `obj[...]` ; les comparaisons (`==`, `includes`, `switch`) sur du texte affiché se vérifient à la relecture.
- **Fins de ligne** : les fichiers du jeu sont en CRLF. Ne pas utiliser `sed -i` (Git Bash convertit en LF) ; éditer avec un outil qui préserve les fins de ligne.
- **Noms de zones** : ils servent aussi d'identifiants DOM ; ils sont traduits en mémoire par `localizeAreaNames()`, jamais dans la sauvegarde.
