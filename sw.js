const CACHE_NAME = 'hstu-cover-builder-v2';
const APP_SHELL = [
    './',
    './index.html',
    './manifest.webmanifest',
    './icon-192.png',
    './icon-512.png',
    './apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(APP_SHELL))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;

    const url = new URL(req.url);
    if (url.origin !== self.location.origin) return;

    const networkPromise = req.mode === 'navigate'
        ? fetch(url.href, { cache: 'no-cache' })
        : fetch(req);

    event.respondWith(
        networkPromise
            .then((res) => {
                if (res && res.status === 200 && res.type === 'basic') {
                    const copy = res.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(req, copy);
                    }).catch(() => {});
                }
                return res;
            })
            .catch(async () => {
                const cached = await caches.match(req, { ignoreSearch: true });
                if (cached) return cached;
                if (req.mode === 'navigate') {
                    return (await caches.match('./index.html')) || (await caches.match('./'));
                }
                return new Response('', { status: 503, statusText: 'Offline' });
            })
    );
});
