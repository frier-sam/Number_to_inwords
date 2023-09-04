self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('num2words-cache-v1').then(function(cache) {
        return cache.addAll([
          '',
          'index.html',
          'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css',
          'https://code.jquery.com/jquery-3.5.1.slim.min.js',
          'img/n2w.png',
          'img/n2w-192.png',
          'img/n2w-512.png',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
    );
  });
  