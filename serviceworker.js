const staticAssets = [
    "/images/icons/icon-72x72.png",
    "/images/icons/icon-96x96.png",
    "/images/icons/icon-128x128.png",
    "/images/icons/icon-144x144.png",
    "/images/icons/icon-152x152.png",
    "/images/icons/icon-192x192.png",
    "/images/icons/icon-384x384.png",
    "/images/icons/icon-512x512.png",
    "/images/icons/site-icon.png",

    "/js/vendor/bootstrap.min.js",
    "/js/vendor/jquery-3.3.1.slim.min.js",

    "/js/main.js",
    "/js/links.js",
    "/js/responses.js",
    "/js/user.js",

    "/css/bootstrap.min.css",
    "/css/custom.css",

    "/index.html",
    "/404.html",
    "/robots.txt",
    "/favicon.ico"

]

self.addEventListener('install', async event => {
    const cache = await caches.open("gavins-world");
    cache.addAll(staticAssets);
    console.log("serviceWorker registered!");
});

self.addEventListener('change', event => {
    console.log("Shit changed!");
});

self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);

    if (url == location.origin) {
        event.respondWith(cacheFirst(request));
    } else {
        event.respondWith(networkFirst(request));
    }
});

async function cacheFirst(request) {
    const cachedResponse = await caches.open("gavins-world").match(request);
    return cachedResponse || fetch(request);
}

async function networkFirst(request) {
    // only github data for right now
    const cache = await caches.open("gavins-world-ext");
    try {
        response = await fetch(request);
        cache.put(request, response.clone());
        return response;
    } catch (error) {
        // if an error occurs due to not being able to get data from other sources
        // prepare a hardcoded response to give the client
        // currently, only github requests are made, (among others) but are displayed only in the console
        return await cache.match(request);
    }
}