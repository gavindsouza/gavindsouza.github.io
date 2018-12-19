/*
Basic service worker: but will work fine, for now
ref: https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
*/

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');
workbox.setConfig({ debug: false });
workbox.routing.registerRoute(
    /.*\.(?:js|css|ico|png)$/,
    // Use cache but update in the background ASAP
    workbox.strategies.staleWhileRevalidate({
        // Use a custom cache name
        cacheName: 'mega-cache',
    })
);


