// Aqua Blitz — Service Worker
// Caches all game assets so the game works fully offline (required for Play Store TWA)

const CACHE = 'aqua-blitz-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/config.js',
  '/bucket.png',
  '/coin.png',
  '/hourglass.png',
  '/shop.png',
  '/timestop.mp3',
  '/manifest.json',
];

// Install: cache everything up front
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting(); // activate immediately without waiting for old tabs to close
});

// Activate: delete old cache versions
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim(); // take control of all open tabs
});

// Fetch: serve from cache, fall back to network
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
