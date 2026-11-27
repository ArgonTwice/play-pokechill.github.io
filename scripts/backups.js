// Sauvegardes de secours automatiques : une copie de la partie par jour, les 3 dernières sont gardées.
// Stockées dans IndexedDB (et non localStorage) pour ne pas entamer la place de la sauvegarde principale.
// Paramètres → « Sauvegardes de secours » pour en restaurer une (la partie actuelle est d'abord mise de côté).

const BACKUP_DB = "pokechill-backups";
const BACKUP_KEEP = 3;

function backupDb() {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open(BACKUP_DB, 1);
        req.onupgradeneeded = () => req.result.createObjectStore("saves", { keyPath: "id" });
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}

async function backupList() {
    const db = await backupDb();
    return new Promise((resolve, reject) => {
        const req = db.transaction("saves").objectStore("saves").getAll();
        req.onsuccess = () => resolve(req.result.sort((a, b) => b.at.localeCompare(a.at))); // plus récente d'abord
        req.onerror = () => reject(req.error);
    });
}

async function backupPut(entry) {
    const db = await backupDb();
    await new Promise((resolve, reject) => {
        const tx = db.transaction("saves", "readwrite");
        tx.objectStore("saves").put(entry);
        tx.oncomplete = resolve;
        tx.onerror = () => reject(tx.error);
    });
    // On ne garde que les plus récentes
    const all = await backupList();
    const extra = all.slice(BACKUP_KEEP);
    if (extra.length) {
        const tx = db.transaction("saves", "readwrite");
        for (const e of extra) tx.objectStore("saves").delete(e.id);
    }
}

function backupToday() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// Copie du jour (une seule par jour : la suivante du même jour la remplace)
async function backupDaily() {
    if (saved.firstTimePlaying) return;
    const data = localStorage.getItem("gameData");
    if (!data) return;
    try {
        await backupPut({ id: backupToday(), at: new Date().toISOString(), data });
    } catch (err) {
        console.warn("backups:", err);
    }
}

async function backupRestore(id) {
    const entry = (await backupList()).find((e) => e.id === id);
    if (!entry) return;
    if (!confirm(t("ui.backup_restore_confirm", { date: cloudDate(entry.at) }))) return;
    JSON.parse(entry.data); // refuse une copie illisible avant d'écraser quoi que ce soit
    saveGame();
    const current = localStorage.getItem("gameData");
    // La partie actuelle devient une copie « avant restauration » : on peut revenir en arrière
    if (current) await backupPut({ id: `before-${Date.now()}`, at: new Date().toISOString(), data: current });
    localStorage.setItem("gameData", entry.data);
    if (cloudConf().token) cloudSetConf({ lastSyncVersion: undefined }); // la synchro cloud demandera quoi faire
    cloudReload();
}

async function backupMenu() {
    document.getElementById("tooltipTop").style.display = "none";
    document.getElementById("tooltipTitle").style.display = "inline";
    document.getElementById("tooltipTitle").innerHTML = t("ui.backup_title");
    document.getElementById("tooltipBottom").innerHTML = "";
    document.getElementById("tooltipBottom").style.display = "none";
    let list = [];
    try { list = await backupList(); } catch (err) { console.warn("backups:", err); }
    const rows = list.map((e) => {
        let info = "";
        try { info = t("ui.backup_info", { n: Object.values(JSON.parse(e.data)).filter((p) => p && p.caught > 0).length }); } catch { /* copie illisible */ }
        return `<div style="display:flex; align-items:center; justify-content:space-between; gap:0.5rem; padding:0.4rem 0; border-top:1px solid rgba(255,255,255,0.1)">
            <span style="text-align:left">${cloudDate(e.at)}<br><span style="opacity:0.7; font-size:0.85rem">${info}</span></span>
            <div onclick="backupRestore('${e.id}')" class="custom-challenge-button" style="margin:0">${t("ui.backup_restore")}</div></div>`;
    }).join("");
    document.getElementById("tooltipMid").style.display = "inline";
    document.getElementById("tooltipMid").innerHTML = `<div style="margin-bottom:0.5rem">${t("ui.backup_intro")}</div>${rows || t("ui.backup_none")}`;
    openTooltip();
}

setTimeout(backupDaily, 10000);                 // au lancement, une fois la partie chargée
setInterval(backupDaily, 60 * 60 * 1000);       // puis toutes les heures (remplace la copie du jour)
