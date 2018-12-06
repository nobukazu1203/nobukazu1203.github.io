//キャッシュするアセットのリスト
var urlsToCache = [
   '/',
   '/index.html'
];

//install イベントのハンドラ
self.addEventListener('install', function(event) {
   event.waitUntil(
      //キャッシュを開く
      caches.open('pwa-test')
         .then(function(cache) {
            //アセットのリストをキャッシュに登録
//            return cache.addAll(urlsToCache.map(url => new Request(url, {credentials: 'same-origin'})));
            return cache.addAll(urlsToCache);
   }));
});


self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== 'pwa-test') {
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

