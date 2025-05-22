const CACHE_NAME = 'quirky-lady-charters-cache';

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll([
      './',
      'index.html',
      'index.js',
      'style.css',
      'favicon.ico',
      '192.png',
      '512.png',


      './img/anchor.svg',
      './img/bridge-view.jpeg',
      './img/nav-burger.svg',
      './img/sunset.JPG',
    ]);
  console.log("Caching complete");
  })());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    }),
  );
});