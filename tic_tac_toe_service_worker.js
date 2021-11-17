var cacheName = 'Tic_tac_toe';
var cachefiles = [
    'http://127.0.0.1:5500/Tic%20Tac%20Toe/',/*url*/
    'http://127.0.0.1:5500/Tic%20Tac%20Toe/index.html',
    'http://127.0.0.1:5500/Tic%20Tac%20Toe/tic_tac_toe_app_css.css',
    'http://127.0.0.1:5500/Tic%20Tac%20Toe/tic_tac_toe_app_js.js',
    
    'http://127.0.0.1:5500/Tic%20Tac%20Toe/tic_tac_toe_service_worker.js',

    'http://127.0.0.1:5500/Tic%20Tac%20Toe/tic_tac_toe_icon.ico',

    'http://127.0.0.1:5500/Tic%20Tac%20Toe/tic_tac_toe_icon_64X64.png',
    'http://127.0.0.1:5500/Tic%20Tac%20Toe/tic_tac_toe_icon_72X72.png',
    'http://127.0.0.1:5500/Tic%20Tac%20Toe/tic_tac_toe_icon_92X92.png',
    'http://127.0.0.1:5500/Tic%20Tac%20Toe/tic_tac_toe_icon_128X128.png',
    'http://127.0.0.1:5500/Tic%20Tac%20Toe/tic_tac_toe_icon_144X144.png',
    'http://127.0.0.1:5500/Tic%20Tac%20Toe/tic_tac_toe_icon_152X152.png',
    'http://127.0.0.1:5500/Tic%20Tac%20Toe/tic_tac_toe_icon_192X192.png',
    'http://127.0.0.1:5500/Tic%20Tac%20Toe/tic_tac_toe_icon_256X256.png',
    'http://127.0.0.1:5500/Tic%20Tac%20Toe/tic_tac_toe_icon_512X512.png'
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntill(
        caches.open(cacheName).then(cache => {
            cache.addAll(cachefiles)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res=>{
            return res || fetch(fetchEvent.request)
        })
    )
});
