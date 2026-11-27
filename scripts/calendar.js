// Calendrier des rotations : zones sauvages, donjons, événements et Zone de Combat, en cours et à venir.
// Lecture seule : reprend exactement les formules de getSeed() (explore.js), sans rien modifier dans la partie.
// S'ouvre par tooltipData("calendarPanel") depuis les Paramètres ou en touchant le minuteur d'une rotation.

const CAL_HALF_DAY = 1000 * 60 * 60 * 12;
const CAL_PERIOD = 1000 * 60 * 60 * 24 * 3;
const CAL_WILD_ROWS = 6; // 3 jours de zones sauvages

// Mêmes calculs que getSeed(), pour un instant quelconque
function calWild(h) {
    let r = ((h - 6) % rotationWildMax) + 1;
    if (saved.alternateWildRotation == "true") { r--; if (r <= 0) r = rotationWildMax; } // option « rotation alternative »
    return r;
}
function calDungeon(h) { return (h % rotationDungeonMax) + 1; }
function calEvent(p) { return ((p - 3) % rotationEventMax) + 1; }
function calFrontier(p) { return (p % rotationFrontierMax) + 1; }

function calDate(ms) {
    return new Date(ms).toLocaleString(numLocale(), { weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
}

function calInRotation(area, r) {
    return Array.isArray(area.rotation) ? area.rotation.includes(r) : area.rotation === r;
}

// Espèces de la zone pas encore capturées
function calMissing(area) {
    const ids = new Set();
    for (const tier in area.spawns || {}) {
        const list = area.spawns[tier];
        if (!Array.isArray(list)) continue;
        for (const p of list) if (p && p.id && pkmn[p.id] && !(pkmn[p.id].caught > 0)) ids.add(p.id);
    }
    return ids.size;
}

function calAreas(type, r, category) {
    const out = [];
    for (const i in areas) {
        if (areas[i].type !== type || !calInRotation(areas[i], r)) continue;
        if (category !== undefined && areas[i].category !== category) continue;
        const missing = calMissing(areas[i]);
        const icon = areas[i].icon && areas[i].icon.id;
        out.push(`<span style="display:inline-flex; align-items:center; gap:0.15rem; margin:0.1rem 0.5rem 0.1rem 0">
            ${icon ? `<img src="img/pkmn/sprite/${icon}.png" style="width:1.6rem; height:1.6rem; image-rendering:pixelated" loading="lazy">` : ""}
            ${format(i, "area")}${missing ? ` <span style="opacity:0.7; font-size:0.8rem">(${t("ui.calendar_to_catch", { v: missing })})</span>` : ""}</span>`);
    }
    return { html: out.join(""), count: out.length };
}

// Événements : une liste repliable par catégorie (Novice / Élite), sinon ~18 zones par rotation
function calEventBody(r) {
    return [[1, t("ui.novice")], [2, t("ui.elite")]].map(([cat, name]) => {
        const a = calAreas("event", r, cat);
        if (!a.count) return "";
        return `<details style="margin-top:0.2rem"><summary style="cursor:pointer">${t("ui.calendar_group", { v: name, v2: a.count })}</summary>
            <div style="padding:0.2rem 0 0.2rem 0.8rem">${a.html}</div></details>`;
    }).join("");
}

function calEventTitle(r) {
    return [t("ui.return_to_kanto"), t("ui.primeval_wilds"), t("ui.ancients_awoken"), t("ui.aether_takeover"),
        t("ui.science_future"), t("ui.sinnoh_expedition")][r - 1] || "";
}

function calFrontierTitle(r) {
    const o = { cupsvg: "", cupsvg2: "" };
    return [t("ui.cupsvg_little_cup_cupsvg", o), t("ui.cupsvg_great_league_cupsvg", o),
        t("ui.cupsvg_ultra_league_cupsvg", o), t("ui.cupsvg_master_league_cupsvg", o)][r - 1] || "";
}

// rows : [{ start, end, label, body }] ; la première est la rotation en cours
function calSection(title, rows) {
    let html = `<div style="margin:0.9rem 0 0.2rem; font-weight:bold; font-size:1.1rem">${title}</div>`;
    rows.forEach((row, k) => {
        const when = k === 0 ? t("ui.calendar_now", { v: calDate(row.end) }) : calDate(row.start);
        html += `<div style="padding:0.35rem 0.2rem; border-top:1px solid rgba(255,255,255,0.1); ${k === 0 ? "background:rgba(98,169,227,0.15)" : ""}">
            <div style="display:flex; justify-content:space-between; gap:0.5rem; font-size:0.9rem">
                <strong>${row.label}</strong><span style="opacity:0.8">${when}</span></div>
            ${row.body ? `<div style="margin-top:0.2rem">${row.body}</div>` : ""}</div>`;
    });
    return html;
}

function calendarRender() {
    getSeed(); // rotationFrontierMax dépend de la progression
    const now = Date.now();
    const h0 = Math.floor(now / CAL_HALF_DAY);
    const p0 = Math.floor(now / CAL_PERIOD);
    const half = (k) => ({ start: (h0 + k) * CAL_HALF_DAY, end: (h0 + k + 1) * CAL_HALF_DAY });
    const period = (k) => ({ start: (p0 + k) * CAL_PERIOD, end: (p0 + k + 1) * CAL_PERIOD });
    const range = (n) => Array.from({ length: n }, (_, k) => k);
    const rot = (r, max) => t("ui.calendar_rotation", { v: r, v2: max });

    const wild = range(CAL_WILD_ROWS).map((k) => {
        const r = calWild(h0 + k);
        return { ...half(k), label: rot(r, rotationWildMax), body: calAreas("wild", r).html };
    });
    const dungeon = range(rotationDungeonMax).map((k) => {
        const r = calDungeon(h0 + k);
        return { ...half(k), label: rot(r, rotationDungeonMax), body: calAreas("dungeon", r).html };
    });
    const event = range(3).map((k) => {
        const r = calEvent(p0 + k);
        return { ...period(k), label: `${calEventTitle(r)} · ${rot(r, rotationEventMax)}`, body: calEventBody(r) };
    });
    const frontier = range(rotationFrontierMax).map((k) => {
        const r = calFrontier(p0 + k);
        return { ...period(k), label: `${calFrontierTitle(r)} · ${rot(r, rotationFrontierMax)}`, body: "" };
    });

    document.getElementById("tooltipTop").style.display = "none";
    document.getElementById("tooltipTitle").style.display = "inline";
    document.getElementById("tooltipTitle").innerHTML = t("ui.calendar_title");
    document.getElementById("tooltipBottom").style.display = "none";
    document.getElementById("tooltipMid").style.display = "inline";
    document.getElementById("tooltipMid").innerHTML = `<div style="text-align:left">
        <div style="opacity:0.75; font-size:0.85rem">${t("ui.calendar_hint")}</div>
        ${calSection(t("ui.wild_areas"), wild)}
        ${calSection(t("ui.dungeons"), dungeon)}
        ${calSection(t("ui.events"), event)}
        ${calSection(t("ui.battle_frontier"), frontier)}
        </div>`;
    openTooltip();
}

function openCalendar() {
    tooltipStack.length = 0; // nouveau panneau : on repart d'une pile vide
    tooltipData("calendarPanel", undefined);
}

// Toucher le minuteur d'une rotation (en-tête des zones) ouvre le calendrier
document.addEventListener("click", (e) => {
    if (e.target.closest && e.target.closest(".rotation-timer")) openCalendar();
});
