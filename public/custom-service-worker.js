importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

const bgSyncPlugin = new workbox.backgroundSync.Plugin("todoQueue", {
  maxRetentionTime: 24 * 60,
});

workbox.routing.registerRoute(
  /\.(?:js|css|html|svg)$/,
  new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
  // Custom `matchCallback` function
  ({ event }) => event.request.destination === "image",
  new workbox.strategies.CacheFirst({
    cacheName: "image",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
      }),
    ],
  })
);

// // workbox.routing.registerRoute(
// //   "http://localhost:3000",
// //   workbox.strategies.networkFirst()
// // );

// // workbox.routing.registerRoute(
// //   "http://localhost:8000/todos",
// //   workbox.strategies.networkFirst(),
// //   "GET"
// // );

// // workbox.routing.registerRoute(
// //   "http://localhost:8000/todos",
// //   workbox.strategies.networkFirst({
// //     plugins: [bgSyncPlugin],
// //   }),
// //   "POST"
// // );
