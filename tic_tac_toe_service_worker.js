var cacheName = 'Tictactoe';
var cachefiles = [
    'https://vishalkumarsankhyan.github.io/Tic_Tac_toe.github.io/',/*url*/
    'https://vishalkumarsankhyan.github.io/Tic_Tac_toe.github.io/index.html',
    'https://vishalkumarsankhyan.github.io/Tic_Tac_toe.github.io/tic_tac_toe_app_css.css',
    'https://vishalkumarsankhyan.github.io/Tic_Tac_toe.github.io/tic_tac_toe_app_js.js',
    
    'https://vishalkumarsankhyan.github.io/Tic_Tac_toe.github.io/tic_tac_toe_service_worker.js',

    'https://vishalkumarsankhyan.github.io/Tic_Tac_toe.github.io/tic_tac_toe_icon.ico',

    'https://vishalkumarsankhyan.github.io/Tic_Tac_toe.github.io/tic_tac_toe_icon_64X64.png',
    'https://vishalkumarsankhyan.github.io/Tic_Tac_toe.github.io/tic_tac_toe_icon_72X72.png',
    'https://vishalkumarsankhyan.github.io/Tic_Tac_toe.github.io/tic_tac_toe_icon_92X92.png',
    'https://vishalkumarsankhyan.github.io/Tic_Tac_toe.github.io/tic_tac_toe_icon_128X128.png',
    'https://vishalkumarsankhyan.github.io/Tic_Tac_toe.github.io/tic_tac_toe_icon_144X144.png',
    'https://vishalkumarsankhyan.github.io/Tic_Tac_toe.github.io/tic_tac_toe_icon_152X152.png',
    'https://vishalkumarsankhyan.github.io/Tic_Tac_toe.github.io/tic_tac_toe_icon_192X192.png',
    'https://vishalkumarsankhyan.github.io/Tic_Tac_toe.github.io/tic_tac_toe_icon_256X256.png',
    'https://vishalkumarsankhyan.github.io/Tic_Tac_toe.github.io/tic_tac_toe_icon_512X512.png'
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
