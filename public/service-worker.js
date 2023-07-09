const CACHE_NAME = "raffle-app-cache-v1";
const urlsToCache = [
    "/",
    "/favicon.ico",
    "/index.php",
    "/css/app.css",
    "/js/app.js",
    "/js/bootstrap.js",
    "/views/dashboard.blade.php",
    "/views/welcome.blade.php",
    "/views/layouts/app.blade.php",
    "/views/layouts/guest.blade.php",
    "/views/auth/login.blade.php",
    "/views/auth/register.blade.php",
    // Add more URLs of assets to cache as needed
];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            // If the requested resource is present in the cache, return it
            if (response) {
                return response;
            }
            // Otherwise, fetch the resource from the network
            return fetch(event.request);
        })
    );
});
