const CACHE_NAME = "todo-zjs-{9ec61b7d-46ba-41ba-b0a4-80bfcfceabfe}";
const PAGES = [
  "/index.html",
  "/favicon.ico",
  "/logo_small.png",
  "/manifest.json",
  "/global.css",
  "/build/bundle.css",
  "/build/bundle.js",
  "/build/bundle.js.map",
  "/styles/clickables.css",
];

// Handles Install
// self.addEventListener("install", installWorker);
// async function installWorker(e) {
//   await self.skipWaiting();
// }

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PAGES);
    })
  );
});

// Handles activation
// self.addEventListener("activate", activateServiceWorker);
// async function activateServiceWorker(event) {
//   await deleteOldCaches();
//   await installCachedFiles();
//   event.waitUntil(self.clients.claim()); // make the current sw the active sw in all cached pages
// }
// async function installCachedFiles() {
//   const cache = await caches.open(CACHE_NAME);
//   return cache.addAll(PAGES);
// }
// async function deleteOldCaches() {
//   const keys = await caches.keys();
//   const oldVersions = keys.filter((name) => {
//     if (/^todo-zjs-(\w{8}(-\w{4}){3}-\w{12}?)/.test(name)) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   return Promise.all(oldVersions.map((key) => caches.delete(key)));
// }

// Handles Fetching
// self.addEventListener("fetch", (event) => {
//   if (
//     event.request.mode === "navigate" ||
//     event.request.destination === "style" ||
//     event.request.destination === "script" ||
//     event.request.destination === "image"
//   ) {
//     event.respondWith(cacheResponse(event.request, event));
//   }
// });
// async function cacheResponse(request, event) {
//   const cache = await caches.open(CACHE_NAME);
//   const match = await cache.match(request.url);
//   if (match) {
//     return match;
//   }
//   // Create promises for both the network response,
//   // and a copy of the response that can be used in the cache.
//   const fetchResponseP = fetch(request);
//   const fetchResponseCloneP = fetchResponseP.then((r) => r.clone());
//   event.waitUntil(
//     (async function () {
//       await cache.put(request, await fetchResponseCloneP);
//     })()
//   );
//   return fetchResponseP;
// }
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return (
        resp ||
        fetch(event.request).then((response) => {
          return caches
            .open(CACHE_NAME)
            .then((cache) => {
              //cache.put(event.request, response.clone());
              return response;
            })
            .catch(() => {
              return caches.match("/index.html");
            });
        })
      );
    })
  );
});
