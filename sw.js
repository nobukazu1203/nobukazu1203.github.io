//キャッシュするアセットのリスト
var urlsToCache = [
   '/',
   '/index.html'
];
var CACHE_NAME = "cache-v4";

//install イベントのハンドラ
self.addEventListener('install', function(event) {
   event.waitUntil(
      //キャッシュを開く
      caches.open(CACHE_NAME)
         .then(function(cache) {
            //アセットのリストをキャッシュに登録
//            return cache.addAll(urlsToCache.map(url => new Request(url, {credentials: 'same-origin'})));
            return cache.addAll(urlsToCache);
   }));
});


self.addEventListener('activate', function(e) {
  console.log('activate');
   e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request)
           .then(function(response) {
              return response || fetch(e.request);
    }));
})

