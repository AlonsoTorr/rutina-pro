const CACHE_NAME = "rutina-pro-v1";

const urlsToCache = [
  "/",
  "/Ejercicios/Prototipo2.html",
  "/labatidora.js",
  "/inmersion.js",
  "/manifest.json",
  "/icon.png"
];

// Instalar
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Activar
self.addEventListener("activate", event => {
  console.log("SW activo");
});

// Interceptar requests
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});