// Confort sur téléphone (sans effet sur les règles du jeu).

// 1. Enregistrer dès que l'appli passe en arrière-plan : le système d'un téléphone peut la fermer
//    à tout moment, et le jeu n'enregistre sinon que toutes les minutes.
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden" && !exitSaveBlocked) saveGame();
});
window.addEventListener("pagehide", () => { if (!exitSaveBlocked) saveGame(); });

// 2. Petite vibration quand un appui long ouvre une fiche (Android ; l'iPhone n'autorise pas la vibration web).
//    Uniquement pour un appui au doigt : le clic droit à la souris ne vibre pas.
let touchActiveSince = 0;
document.addEventListener("touchstart", () => { touchActiveSince = Date.now(); }, { passive: true });
document.addEventListener("touchend", () => { touchActiveSince = 0; }, { passive: true });
document.addEventListener("touchcancel", () => { touchActiveSince = 0; }, { passive: true });
document.addEventListener("contextmenu", () => {
    if (touchActiveSince && Date.now() - touchActiveSince < 2000 && navigator.vibrate) navigator.vibrate(15);
}, true);

// 3. Option « Garder l'écran allumé » : réglage propre à l'appareil (hors sauvegarde, donc hors synchro cloud).
const WAKELOCK_KEY = "pokechill_wakelock";
let wakeLock = null;

async function wakeLockApply() {
    const wanted = localStorage.getItem(WAKELOCK_KEY) === "true";
    if (wanted && document.visibilityState === "visible" && !wakeLock) {
        try {
            wakeLock = await navigator.wakeLock.request("screen");
            wakeLock.addEventListener("release", () => { wakeLock = null; });
        } catch (err) {
            wakeLock = null; // refusé (batterie faible, etc.) : on réessaiera au prochain retour au premier plan
        }
    } else if (!wanted && wakeLock) {
        wakeLock.release();
        wakeLock = null;
    }
}

(function initWakeLockSetting() {
    const row = document.getElementById("settings-wakelock-row");
    const select = document.getElementById("settings-wakelock");
    if (!("wakeLock" in navigator)) { row.style.display = "none"; return; }
    select.value = localStorage.getItem(WAKELOCK_KEY) === "true" ? "true" : "false";
    select.addEventListener("change", () => {
        localStorage.setItem(WAKELOCK_KEY, select.value);
        wakeLockApply();
    });
    // Le navigateur libère le verrou quand l'appli est masquée : on le reprend au retour
    document.addEventListener("visibilitychange", wakeLockApply);
    wakeLockApply();
})();

// 4. Rotation de l'écran : bloquée en portrait par défaut, option « Rotation automatique » pour la libérer.
//    Réglage propre à l'appareil. Le blocage n'est possible que dans l'appli installée ou en plein écran
//    (Android) ; l'iPhone ne le permet pas aux sites web (utiliser le verrou de rotation d'iOS).
const ROTATION_KEY = "pokechill_autorotate";

function rotationApply() {
    if (!screen.orientation?.lock) return;
    const free = localStorage.getItem(ROTATION_KEY) === "true";
    // Libre : unlock() rend la main au réglage « rotation auto » du téléphone (lock("any") l'ignorerait)
    if (free) screen.orientation.unlock?.();
    else screen.orientation.lock("portrait").catch(() => {}); // refusé hors appli/plein écran : sans effet
}

(function initRotationSetting() {
    const row = document.getElementById("settings-rotation-row");
    const select = document.getElementById("settings-rotation");
    // Inutile sur PC (souris) et là où l'API n'existe pas
    if (!screen.orientation?.lock || !matchMedia("(pointer: coarse)").matches) { row.style.display = "none"; return; }
    select.value = localStorage.getItem(ROTATION_KEY) === "true" ? "true" : "false";
    select.addEventListener("change", () => {
        localStorage.setItem(ROTATION_KEY, select.value);
        rotationApply();
    });
    document.addEventListener("fullscreenchange", rotationApply); // bouton Plein écran dans le navigateur
    rotationApply();
})();
