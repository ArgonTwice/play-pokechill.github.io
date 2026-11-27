// « Quoi de neuf » : nouveautés de cette version du jeu.
// S'affiche une fois après une mise à jour (pas pour une nouvelle partie), et reste consultable dans les Paramètres.
// Pour une nouvelle publication : ajouter une entrée EN TÊTE, avec des clés ui.news_* dans tools/strings.

const NEWS = [
    {
        id: "2026-11-27-2", // 2e publication du jour : seule la date (3 premiers nombres) est affichée
        items: () => [t("ui.news_20261127_calendar"), t("ui.news_20261127_battery")],
    },
    {
        id: "2026-11-27",
        items: () => [
            t("ui.news_20261127_backups"),
            t("ui.news_20261127_textsize"),
            t("ui.news_20261127_stats"),
            t("ui.news_20261127_mobile"),
            t("ui.news_20261127_cloud"),
            t("ui.news_20261127_fixes"),
        ],
    },
];
const NEWS_SEEN_KEY = "pokechill_news_seen";

function newsMenu() {
    document.getElementById("tooltipTop").style.display = "none";
    document.getElementById("tooltipTitle").style.display = "inline";
    document.getElementById("tooltipTitle").innerHTML = t("ui.news_title");
    document.getElementById("tooltipBottom").innerHTML = "";
    document.getElementById("tooltipBottom").style.display = "none";
    document.getElementById("tooltipMid").style.display = "inline";
    document.getElementById("tooltipMid").innerHTML = NEWS.map((n) => {
        const [y, m, d] = n.id.split("-").map(Number);
        const date = new Date(y, m - 1, d).toLocaleDateString(numLocale(), { dateStyle: "long" });
        return `<div style="text-align:left; margin-bottom:0.8rem"><strong>${date}</strong>
            <ul style="margin:0.3rem 0 0 1.2rem">${n.items().map((i) => `<li style="margin:0.2rem 0">${i}</li>`).join("")}</ul></div>`;
    }).join("");
    openTooltip();
    localStorage.setItem(NEWS_SEEN_KEY, NEWS[0].id);
}

// Après une mise à jour : afficher une fois. Nouvelle partie : rien à annoncer, on marque comme vu.
setTimeout(() => {
    if (localStorage.getItem(NEWS_SEEN_KEY) === NEWS[0].id) return;
    if (saved.firstTimePlaying) { localStorage.setItem(NEWS_SEEN_KEY, NEWS[0].id); return; }
    if (document.getElementById("tooltipBackground").style.display === "flex") return; // une fenêtre est déjà ouverte : on réessaiera au prochain lancement
    newsMenu();
}, 4000);
