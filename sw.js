// Service worker : rend le jeu installable et jouable hors ligne.
// Stratégie « réseau d'abord » : en ligne, on sert toujours la dernière version publiée
// sur GitHub Pages ; hors ligne, on retombe sur la copie mise en cache.
const CACHE = "pokechill-v1";

const PRECACHE = [
  "./",
  "index.html",
  "styles.css",
  "mobile.css",
  "manifest.webmanifest",
  "lang/en.json",
  "lang/fr.json",
  "img/icons/icon.png",
  "img/icons/app-192.png",
  "img/icons/app-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  // Seulement les GET de notre propre site (l'API GitHub de updateCheck passe en direct)
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy));
        }
        return res;
      })
      .catch(() =>
        caches.match(req, { ignoreSearch: true })
          .then((hit) => hit || (req.mode === "navigate" ? caches.match("index.html") : Response.error()))
      )
  );
});
