// Écran Statistiques : temps de jeu, captures, records et progression du Pokédex par génération.
// Lecture seule de la partie, sauf saved.playSeconds (temps de jeu, nouveau compteur).
// S'ouvre par tooltipData("statsPanel", gen) pour profiter de la pile d'infobulles du jeu
// (retour au panneau après avoir consulté la fiche d'un Pokémon manquant).

const STATS_TICK_S = 10;
setInterval(() => {
    if (saved.firstTimePlaying) return;
    saved.playSeconds = (saved.playSeconds || 0) + STATS_TICK_S;
}, STATS_TICK_S * 1000);

function statsDuration(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    return h > 0 ? `${h.toLocaleString(numLocale())} h ${String(m).padStart(2, "0")} min` : `${m} min`;
}

// Même règle que le compteur du Pokédex : on ignore seulement ceux impossibles à obtenir et pas encore capturés
function statsCountable(id) {
    const p = pkmn[id];
    if (p.caught == 0 && p.tagObtainedIn == "unobtainable") return false;
    return true;
}

function statsCompute() {
    const s = { species: 0, total: 0, catches: 0, shiny: 0, gens: {} };
    for (let g = 1; g <= 9; g++) s.gens[g] = { got: 0, total: 0, missing: [] };
    for (const id in pkmn) {
        if (!statsCountable(id)) continue;
        const caught = pkmn[id].caught > 0;
        s.total++;
        if (caught) { s.species++; s.catches += pkmn[id].caught; }
        if (caught && pkmn[id].shiny) s.shiny++;
        const g = s.gens[pkmnGeneration[id]];
        if (!g) continue;
        g.total++;
        if (caught) g.got++; else g.missing.push(id);
    }
    s.vsTotal = 0; s.vsWon = 0;
    for (const i in areas) {
        if (areas[i].type !== "vs") continue;
        s.vsTotal++;
        if (areas[i].defeated) s.vsWon++;
    }
    return s;
}

// Clés littérales (check-i18n refuse les clés construites)
function statsRegion(g) {
    return [t("ui.stats_region_1"), t("ui.stats_region_2"), t("ui.stats_region_3"), t("ui.stats_region_4"), t("ui.stats_region_5"),
        t("ui.stats_region_6"), t("ui.stats_region_7"), t("ui.stats_region_8"), t("ui.stats_region_9")][g - 1];
}

function statsBar(got, total) {
    const pct = total ? (got / total) * 100 : 0;
    const done = got === total;
    return `<div style="height:0.5rem; background:rgba(0,0,0,0.25); border-radius:0.3rem; overflow:hidden; margin-top:0.2rem">
        <div style="height:100%; width:${pct}%; background:${done ? "#CEA446" : "#62A9E3"}"></div></div>`;
}

// openGen : génération dont la liste des manquants est dépliée (ou undefined)
function statsRender(openGen) {
    openGen = Number(openGen) || undefined;
    const s = statsCompute();
    const line = (txt) => `<div style="margin:0.15rem 0">${txt}</div>`;

    document.getElementById("tooltipTop").style.display = "none";
    document.getElementById("tooltipTitle").style.display = "inline";
    document.getElementById("tooltipTitle").innerHTML = t("ui.stats_title");
    document.getElementById("tooltipBottom").style.display = "none";

    let html = `<div style="text-align:left">
        ${line(t("ui.stats_playtime", { v: statsDuration(saved.playSeconds || 0) }))}
        ${line(t("ui.stats_species", { v: s.species.toLocaleString(numLocale()), v2: s.total.toLocaleString(numLocale()) }))}
        ${line(t("ui.stats_total_caught", { v: s.catches.toLocaleString(numLocale()) }))}
        ${line(t("ui.stats_shiny", { v: s.shiny.toLocaleString(numLocale()) }))}
        ${line(t("ui.stats_trainers", { v: s.vsWon, v2: s.vsTotal }))}
        ${line(`${format("frontierSpiralingTower", "area")} — ${t("ui.highest_floor_maxspiralfloor", { maxSpiralFloor: saved.maxSpiralFloor ?? 1 })}`)}
        ${line(`${format("frontierBattleFactory", "area")} — ${t("ui.highest_score_maxfactoryscore", { maxFactoryScore: saved.maxFactoryScore ?? 0 })}`)}
        <div style="margin:0.8rem 0 0.3rem; font-weight:bold">${t("ui.stats_by_generation")}</div>
        <div style="opacity:0.75; font-size:0.85rem; margin-bottom:0.4rem">${t("ui.stats_missing_hint")}</div>`;

    for (let g = 1; g <= 9; g++) {
        const gen = s.gens[g];
        const done = gen.got === gen.total;
        html += `<div onclick="statsToggleGen(${g})" style="cursor:pointer; padding:0.35rem 0.2rem; border-top:1px solid rgba(255,255,255,0.1)">
            <div style="display:flex; justify-content:space-between; gap:0.5rem">
                <span>${t("ui.stats_generation", { v: g, region: statsRegion(g) })}</span>
                <span>${done ? t("ui.stats_complete") : `${gen.got} / ${gen.total}`}</span>
            </div>${statsBar(gen.got, gen.total)}</div>`;
        if (openGen === g && gen.missing.length) {
            html += `<div style="display:flex; flex-wrap:wrap; gap:0.3rem; padding:0.3rem 0 0.6rem">` +
                gen.missing.map((id) => `<div onclick="statsShowPkmn('${id}')" style="cursor:pointer; display:flex; flex-direction:column; align-items:center; width:4.2rem; font-size:0.7rem; text-align:center">
                    <img src="img/pkmn/sprite/${id}.png" style="width:3rem; height:3rem; image-rendering:pixelated" loading="lazy">
                    <span>${format(id, "pkmn")}</span></div>`).join("") +
                `</div>`;
        }
    }
    html += `</div>`;
    document.getElementById("tooltipMid").style.display = "inline";
    document.getElementById("tooltipMid").innerHTML = html;
    if (document.getElementById("tooltipBackground").style.display !== "flex") openTooltip(); // pas d'animation à chaque dépliage
}

function statsToggleGen(g) {
    const top = tooltipStack[tooltipStack.length - 1];
    const next = top && top.category === "statsPanel" && Number(top.ttdata) === g ? undefined : g;
    if (top && top.category === "statsPanel") top.ttdata = next; // le retour depuis une fiche garde la génération ouverte
    statsRender(next);
}

function statsShowPkmn(id) {
    document.getElementById("tooltipBottom").style.display = "inline"; // la fiche Dictionnaire l'utilise sans le réafficher
    tooltipData("dictionaryPkmn", id);
}

function openStats() {
    tooltipStack.length = 0; // nouveau panneau : on repart d'une pile vide
    tooltipData("statsPanel", undefined);
}
