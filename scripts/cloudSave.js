// Synchronisation de la sauvegarde entre appareils via un Gist GitHub secret.
// Le jeton (permission « gist » uniquement) est saisi par le joueur et reste dans le localStorage de l'appareil.
// Règle de sécurité : on n'écrase jamais une sauvegarde (locale ou distante) modifiée ailleurs sans confirmation.
// Détection des changements : on compare la révision du gist (sha) à celle de notre dernière synchro.

const CLOUD_KEY = "cloudSave";
const CLOUD_FILE = "pokechill-save.json";
const CLOUD_API = "https://api.github.com";
const CLOUD_TOKEN_URL = "https://github.com/settings/tokens/new?scopes=gist&description=Pokechill";
const CLOUD_AUTO_MS = 5 * 60 * 1000;

let cloudBusy = false;
let cloudPaused = false;      // le cloud a changé ailleurs : on attend une décision du joueur
let cloudLastSent = null;     // dernière sauvegarde envoyée pendant cette session (évite les envois inutiles)

function cloudConf() {
    try { return JSON.parse(localStorage.getItem(CLOUD_KEY)) || {}; } catch { return {}; }
}
function cloudSetConf(patch) {
    localStorage.setItem(CLOUD_KEY, JSON.stringify({ ...cloudConf(), ...patch }));
}
function cloudAutoOn() {
    const conf = cloudConf();
    return Boolean(conf.token && conf.auto);
}

function cloudDevice() {
    const ua = navigator.userAgent;
    if (/iPhone|iPad|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) return "iPhone/iPad";
    if (/Android/.test(ua)) return "Android";
    return "PC";
}

function cloudDate(iso) {
    return new Date(iso).toLocaleString(lang === "fr" ? "fr-FR" : "en-US", { dateStyle: "short", timeStyle: "short" });
}

async function cloudFetch(path, options = {}) {
    const res = await fetch(CLOUD_API + path, {
        ...options,
        cache: "no-store",
        headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${cloudConf().token}`,
            ...(options.body ? { "Content-Type": "application/json" } : {}),
        },
    });
    // 401 : jeton invalide ; 403 : jeton sans la permission gist
    if (res.status === 401 || res.status === 403) throw new Error(t("ui.cloud_bad_token"));
    if (!res.ok) {
        const err = new Error(`HTTP ${res.status}`);
        err.status = res.status;
        throw err;
    }
    return res.json();
}

// Retrouve le gist de sauvegarde (même jeton sur chaque appareil = même gist), sans le créer
async function cloudFindGist() {
    const conf = cloudConf();
    if (conf.gistId) return conf.gistId;
    for (let page = 1; page <= 10; page++) {
        const list = await cloudFetch(`/gists?per_page=100&page=${page}`);
        const hit = list.find((g) => g.files && g.files[CLOUD_FILE]);
        if (hit) { cloudSetConf({ gistId: hit.id }); return hit.id; }
        if (list.length < 100) break;
    }
    return null;
}

// Révision actuelle du gist (requête légère, sans le contenu) ; null si aucun gist
async function cloudRemoteVersion() {
    const id = await cloudFindGist();
    if (!id) return null;
    try {
        const commits = await cloudFetch(`/gists/${id}/commits?per_page=1`);
        return commits[0]?.version || null;
    } catch (err) {
        if (err.status !== 404) throw err;
        cloudSetConf({ gistId: undefined, lastSyncVersion: undefined }); // gist supprimé sur GitHub
        return null;
    }
}

// Lit la sauvegarde distante : { version, savedAt, device, data } ou null
async function cloudReadRemote() {
    const id = await cloudFindGist();
    if (!id) return null;
    const gist = await cloudFetch(`/gists/${id}`);
    const file = gist.files[CLOUD_FILE];
    if (!file) return null;
    // Au-delà de 1 Mo, l'API tronque le contenu : on lit le fichier brut
    const content = file.truncated ? await (await fetch(file.raw_url, { cache: "no-store" })).text() : file.content;
    return { ...JSON.parse(content), version: gist.history?.[0]?.version };
}

// Écrit la sauvegarde et renvoie la nouvelle révision du gist
async function cloudWriteRemote(payload) {
    const files = { [CLOUD_FILE]: { content: JSON.stringify(payload) } };
    const id = await cloudFindGist();
    let gist;
    if (id) {
        gist = await cloudFetch(`/gists/${id}`, { method: "PATCH", body: JSON.stringify({ files }) });
    } else {
        try {
            gist = await cloudFetch(`/gists`, { method: "POST", body: JSON.stringify({ description: "Pokechill save", public: false, files }) });
        } catch (err) {
            // un jeton classique sans la case « gist » reçoit 404 à la création
            throw err.status === 404 ? new Error(t("ui.cloud_bad_token")) : err;
        }
    }
    cloudSetConf({ gistId: gist.id });
    return gist.history?.[0]?.version;
}

// Envoie la sauvegarde locale. interactive = action du joueur (confirmations possibles)
async function cloudUpload(interactive) {
    if (cloudBusy || exitSaveBlocked || !cloudConf().token) return;
    saveGame();
    const data = localStorage.getItem("gameData");
    if (!data) { if (interactive) cloudStatus(t("ui.cloud_no_local")); return; }
    if (!interactive && data === cloudLastSent) return; // rien de neuf depuis le dernier envoi

    cloudBusy = true;
    if (interactive) cloudStatus(t("ui.cloud_working"));
    try {
        const version = await cloudRemoteVersion();
        // Le cloud a été modifié par un autre appareil depuis notre dernière synchro
        if (version && version !== cloudConf().lastSyncVersion) {
            if (!interactive) { cloudPaused = true; return; }
            const remote = await cloudReadRemote();
            if (!confirm(t("ui.cloud_overwrite", { date: cloudDate(remote.savedAt), device: remote.device }))) { cloudStatus(""); return; }
        }
        const payload = { savedAt: new Date().toISOString(), device: cloudDevice(), data };
        const newVersion = await cloudWriteRemote(payload);
        cloudSetConf({ lastSyncVersion: newVersion, lastSyncAt: payload.savedAt });
        cloudLastSent = data;
        cloudPaused = false;
        if (interactive) cloudStatus(t("ui.cloud_uploaded"));
    } catch (err) {
        if (interactive) cloudStatus(t("ui.cloud_error", { error: err.message }));
        else console.warn("cloudSave:", err.message);
    } finally {
        cloudBusy = false;
        cloudRefreshMenu(interactive);
    }
}

// Récupère la sauvegarde distante. interactive = bouton du joueur ; sinon vérification au démarrage
async function cloudDownload(interactive) {
    if (cloudBusy || !cloudConf().token) return;
    cloudBusy = true;
    if (interactive) cloudStatus(t("ui.cloud_working"));
    try {
        const version = await cloudRemoteVersion();
        if (!version) { if (interactive) cloudStatus(t("ui.cloud_status_none")); return; }
        const changedElsewhere = version !== cloudConf().lastSyncVersion;
        if (!interactive && !changedElsewhere) return; // déjà à jour : aucune requête de plus

        const remote = await cloudReadRemote();
        JSON.parse(remote.data); // refuse une sauvegarde illisible avant d'écraser quoi que ce soit
        if (!confirm(t("ui.cloud_newer_remote", { date: cloudDate(remote.savedAt), device: remote.device }))) {
            if (changedElsewhere) cloudPaused = true; // l'envoi auto n'écrasera pas cette version
            cloudStatus("");
            cloudRefreshMenu(true);
            return;
        }
        cloudKeepBackup();
        localStorage.setItem("gameData", remote.data);
        cloudSetConf({ lastSyncVersion: remote.version, lastSyncAt: remote.savedAt });
        cloudReload();
    } catch (err) {
        if (interactive) cloudStatus(t("ui.cloud_error", { error: err.message }));
        else console.warn("cloudSave:", err.message);
    } finally {
        cloudBusy = false;
    }
}

// Copie de secours : la partie locale avant le dernier chargement depuis le cloud (ou avant une restauration)
function cloudKeepBackup() {
    const local = localStorage.getItem("gameData");
    if (!local) return;
    localStorage.setItem("gameData_backup", local);
    localStorage.setItem("gameData_backup_at", new Date().toISOString());
}

function cloudBackupDate() {
    const at = localStorage.getItem("gameData_backup_at");
    return at ? cloudDate(at) : "?";
}

function cloudReload() {
    exitSaveBlocked = true;        // idem pour l'enregistrement à la fermeture (scripts/mobile.js)
    saved.firstTimePlaying = true; // empêche saveGame() de réécrire l'ancienne partie avant le rechargement
    afkSeconds = 0;                // évite la boîte « Quitter la page ? » d'un combat en cours
    window.location.reload();
}

// Échange la partie actuelle et la copie de secours (on peut donc revenir en arrière)
function cloudRestoreBackup() {
    const backup = localStorage.getItem("gameData_backup");
    if (!backup) return;
    if (!confirm(t("ui.cloud_restore_confirm", { date: cloudBackupDate() }))) return;
    saveGame();
    cloudKeepBackup();
    localStorage.setItem("gameData", backup);
    // Synchro auto en pause au prochain envoi : le joueur choisira Envoyer ou Récupérer
    if (cloudConf().token) cloudSetConf({ lastSyncVersion: undefined });
    cloudReload();
}

async function cloudConnect() {
    const token = document.getElementById("cloud-token")?.value.trim();
    if (!token) return;
    cloudSetConf({ token, gistId: undefined, lastSyncVersion: undefined, lastSyncAt: undefined, auto: true });
    cloudStatus(t("ui.cloud_working"));
    try {
        await cloudFetch("/gists?per_page=1"); // vérifie le jeton
        cloudRefreshMenu();
        if (await cloudRemoteVersion()) await cloudDownload(true); // une partie existe déjà : proposer de la reprendre
        else await cloudUpload(true);                               // premier appareil : on crée le gist
    } catch (err) {
        localStorage.removeItem(CLOUD_KEY);
        cloudRefreshMenu();
        cloudStatus(t("ui.cloud_error", { error: err.message }));
    }
}

function cloudDisconnect() {
    localStorage.removeItem(CLOUD_KEY);
    cloudPaused = false;
    cloudLastSent = null;
    cloudRefreshMenu();
}

function cloudToggleAuto(checked) {
    cloudSetConf({ auto: checked });
}

function cloudStatus(text) {
    const el = document.getElementById("cloud-status");
    if (el) el.textContent = text;
}

// keepStatus : garde le message en cours (résultat d'une action) après le redessin
function cloudRefreshMenu(keepStatus) {
    const mid = document.getElementById("cloud-menu");
    if (!mid) return; // menu fermé
    const status = keepStatus ? document.getElementById("cloud-status")?.textContent || "" : "";
    const conf = cloudConf();
    const btn = (action, label) => `<div onclick="${action}" class="custom-challenge-button" style="margin:0.3rem">${label}</div>`;

    if (!conf.token) {
        mid.innerHTML = `
            <div style="margin-bottom:0.5rem">${t("ui.cloud_intro")}</div>
            <a href="${CLOUD_TOKEN_URL}" target="_blank" rel="noopener" style="color:inherit; text-decoration:underline">${t("ui.cloud_create_token")}</a>
            <input id="cloud-token" type="password" autocomplete="off" placeholder="${t("ui.cloud_token_placeholder")}"
                style="width:90%; margin:0.6rem 0; padding:0.5rem; font-size:1rem">
            ${btn("cloudConnect()", t("ui.cloud_connect"))}
            <div id="cloud-status" style="margin-top:0.5rem"></div>`;
    } else {
        const last = conf.lastSyncAt ? t("ui.cloud_last_sync", { date: cloudDate(conf.lastSyncAt) }) : "";
        mid.innerHTML = `
            <div style="margin-bottom:0.5rem">${last}</div>
            ${cloudPaused ? `<div style="margin-bottom:0.5rem; color:#E46B6F">${t("ui.cloud_conflict_auto")}</div>` : ""}
            <div style="display:flex; flex-wrap:wrap; justify-content:center">
                ${btn("cloudUpload(true)", t("ui.cloud_upload"))}
                ${btn("cloudDownload(true)", t("ui.cloud_download"))}
            </div>
            <label style="display:flex; align-items:center; justify-content:center; gap:0.5rem; margin:0.6rem 0">
                <input type="checkbox" ${conf.auto ? "checked" : ""} onchange="cloudToggleAuto(this.checked)"> ${t("ui.cloud_auto")}
            </label>
            ${btn("cloudDisconnect()", t("ui.cloud_disconnect"))}
            <div id="cloud-status" style="margin-top:0.5rem"></div>`;
    }
    if (localStorage.getItem("gameData_backup")) {
        mid.insertAdjacentHTML("beforeend", `<div style="margin-top:0.8rem; opacity:0.85">
            ${btn("cloudRestoreBackup()", t("ui.cloud_restore_backup", { date: cloudBackupDate() }))}</div>`);
    }
    cloudStatus(status);
}

function cloudSaveMenu() {
    document.getElementById("tooltipTop").style.display = "none";
    document.getElementById("tooltipTitle").style.display = "inline";
    document.getElementById("tooltipTitle").innerHTML = t("ui.cloud_save");
    document.getElementById("tooltipMid").innerHTML = `<div id="cloud-menu"></div>`;
    document.getElementById("tooltipBottom").innerHTML = "";
    document.getElementById("tooltipBottom").style.display = "none"; // closeTooltip() le réaffiche
    cloudRefreshMenu();
    openTooltip();
}

// Automatique : vérification au démarrage, envoi périodique et quand l'appli passe en arrière-plan
setTimeout(() => { if (cloudAutoOn()) cloudDownload(false); }, 3000);
setInterval(() => { if (cloudAutoOn() && !cloudPaused) cloudUpload(false); }, CLOUD_AUTO_MS);
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden" && cloudAutoOn() && !cloudPaused) cloudUpload(false);
});
