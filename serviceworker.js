/*
Basic service worker: but will work fine, for now
ref: https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
*/

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

workbox.setConfig({ debug: true });   

workbox.routing.registerRoute(
    'https://api.github.com/users/gavindsouza/repos',
    workbox.strategies.networkFirst()
);


workbox.routing.registerRoute(
    /.*\.(?:js|css|ico|png)$/,
    workbox.strategies.cacheFirst({
        cacheName: 'mega-cache',
        cacheExpiration: {maxEntries: 20, maxAgeSeconds: 12 * 60 * 60},
        cacheableResponse: {statuses: [0, 200]}
    })
);


