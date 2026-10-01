const CACHE_NAME = 'gvr-shell-v1';
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/about.html',
  '/locations.html',
  '/beith-running.html',
  '/dalry-running.html',
  '/kilbirnie-running.html',
  '/lochwinnoch-running.html',
  '/runs/week-runs.html',
  '/runs/runs.json',
  '/manifest.webmanifest',
  '/assets/styles.css',
  '/assets/site.js',
  '/assets/images/icon-192.png',
  '/assets/images/icon-512.png',
  '/assets/images/apple-touch-icon.png',
  '/assets/images/gvr-group-2.webp',
  '/assets/images/gvr-group-6.webp',
  '/assets/images/gvr-group-7.webp',
  '/assets/images/gvr-group-9.webp',
  '/assets/images/gvr-group-10.webp',
  '/assets/images/gvr-group-12.webp',
  '/assets/images/gvr-logo.webp',
  '/assets/images/lindsay-donachy.webp',
  '/assets/images/liz-duncan.webp',
  '/assets/images/mhairi-blair.webp',
  '/assets/images/paul-cook.webp',
  '/assets/images/running-banner-placeholder.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith('gvr-shell-') && cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);
  if (event.request.method !== 'GET' || requestUrl.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseCopy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseCopy));
          return response;
        })
        .catch(async () => (await caches.match(event.request)) || caches.match('/index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request).then((response) => {
        if (response.ok) {
          const responseCopy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseCopy));
        }
        return response;
      });
    })
  );
});