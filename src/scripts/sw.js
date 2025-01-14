import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  '/',
  '/images/icons/icon_x48.png',
  '/images/icons/icon_x72.png',
  '/images/icons/icon_x96.png',
  '/images/icons/icon_x128.png',
  '/images/icons/icon_x192.png',
  '/images/icons/icon_x384.png',
  '/images/icons/icon_x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];



self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));

});


self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());

});


self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));

});

