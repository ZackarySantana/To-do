self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("airhorner").then(function (cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/favicon.ico",
        "/logo_small.png",
        "/manifest.json",
        "/global.css",
        "/build.bundle.css",
        "/build/bundle.js",
        "/build/bundle.js.map",
        "/styles/clickables.map",
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
