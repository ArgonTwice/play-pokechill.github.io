// Internationalisation : chargé avant tous les autres scripts.
// Les clés sont toujours préfixées par un namespace (ui.*, msg.*, pkmn.*, move.*, ability.*, item.*, area.*, type.*, field.*, status.*).
const LANGS = { en: 'English', fr: 'Français' };
const LANG_KEY = 'pokechill_lang';

let lang = localStorage.getItem(LANG_KEY);
if (!LANGS[lang]) lang = (navigator.language || '').toLowerCase().startsWith('fr') ? 'fr' : 'en';
document.documentElement.lang = lang;

// Chargement synchrone : le jeu construit son interface dès le chargement des scripts.
function loadLangFile(code) {
    try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `lang/${code}.json`, false);
        xhr.send();
        if (xhr.status === 200 || xhr.status === 0) return JSON.parse(xhr.responseText);
    } catch (e) { console.warn(`[i18n] lang/${code}.json`, e); }
    return {};
}
const i18nEn = loadLangFile('en');
const i18nCur = lang === 'en' ? i18nEn : loadLangFile(lang);

function t(key, vars) {
    // Pluriel simple : clé "<key>_one" utilisée pour n = 1 (en) ou |n| < 2 (fr)
    if (vars && typeof vars.n === 'number' && (lang === 'fr' ? Math.abs(vars.n) < 2 : vars.n === 1)) {
        const one = i18nCur[key + '_one'] ?? (i18nCur === i18nEn || !(key in i18nCur) ? i18nEn[key + '_one'] : undefined);
        if (one !== undefined) key = key + '_one';
    }
    let s = i18nCur[key] ?? i18nEn[key] ?? key;
    // Décimales : 1.15 → 1,15 en français (uniquement pour les valeurs purement numériques)
    const num = v => (lang === 'fr' && /^-?\d+\.\d+$/.test(String(v)) ? String(v).replace('.', ',') : v);
    if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? num(vars[k]) : m));
    return s;
}

// Nom affiché d'un identifiant interne, dans un namespace explicite (ex. tName('move', 'psychic')).
function tName(ns, id) {
    const key = `${ns}.${id}`;
    return i18nCur[key] ?? i18nEn[key];
}

function setLang(code) {
    if (!LANGS[code] || code === lang) return;
    localStorage.setItem(LANG_KEY, code);
    if (typeof saveGame === 'function') saveGame();
    location.reload();
}

// Les noms de zones servent aussi d'identifiants DOM : on les remplace en mémoire (jamais dans la sauvegarde).
function localizeAreaNames() {
    if (lang === 'en') return;
    for (const id in areas) {
        const tr = tName('area', id);
        if (typeof areas[id].name === 'string' && tr !== undefined) areas[id].name = tr;
    }
}

function numLocale() { return lang === 'fr' ? 'fr-FR' : 'en-US'; }

// Traduit le HTML statique : data-i18n (contenu), data-i18n-title (attribut title), data-i18n-placeholder.
function applyLang(root = document) {
    root.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
    root.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.dataset.i18nTitle); });
    root.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
}

document.addEventListener('DOMContentLoaded', () => {
    applyLang();
    const sel = document.getElementById('settings-lang');
    if (sel) {
        sel.value = lang;
        sel.addEventListener('change', e => setLang(e.target.value));
    }
});
