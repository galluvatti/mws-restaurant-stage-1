self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('mws-restaurant-static-v1').then(function (cache) {
            return cache.addAll([
                '/',
                'index.html',
                'restaurant.html',
                'js/main.js',
                'js/dbhelper.js',
                'js/restaurant_info.js',
                'js/serviceWorkerRegistration.js',
                'css/styles.css',
                'img/1.jpg',
                'img/2.jpg',
                'img/3.jpg',
                'img/4.jpg',
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',
                'img/8.jpg',
                'img/9.jpg',
                'img/10.jpg',
                'data/restaurants.json',
                'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.open('mws-restaurant-static-v1')
            .then(cache => cache.match(event.request))
            .then(response => {
                return response || fetch(event.request);
            })
    );
});

self.addEventListener('activate', function(event) {
    console.log('Activating Service Worker...')
    const cacheWhitelist = ['mws'];
    event.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (cacheWhitelist.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
});
