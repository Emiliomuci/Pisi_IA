// Service Worker para Pisi
const CACHE_NAME = 'pisi-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return new Response('Pisi necesita conexión a internet para funcionar mejor.');
        })
    );
});
