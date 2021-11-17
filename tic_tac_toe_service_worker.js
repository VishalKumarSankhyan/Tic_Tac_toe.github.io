var cacheName = 'Tictactoe';
var cachefiles = [
    'https://github.com/VishalKumarSankhyan/Tic_Tac_toe.github.io/',/*url*/
    'https://github.com/VishalKumarSankhyan/Tic_Tac_toe.github.io/index.html',
    'https://github.com/VishalKumarSankhyan/Tic_Tac_toe.github.io/tic_tac_toe_app_css.css',
    'https://github.com/VishalKumarSankhyan/Tic_Tac_toe.github.io/tic_tac_toe_app_js.js',
    
    'https://github.com/VishalKumarSankhyan/Tic_Tac_toe.github.io/tic_tac_toe_service_worker.js',

    'https://github.com/VishalKumarSankhyan/Tic_Tac_toe.github.io/tic_tac_toe_icon.ico',

    'https://github.com/VishalKumarSankhyan/Tic_Tac_toe.github.io/tic_tac_toe_icon_64X64.png',
    'https://github.com/VishalKumarSankhyan/Tic_Tac_toe.github.io/tic_tac_toe_icon_72X72.png',
    'https://github.com/VishalKumarSankhyan/Tic_Tac_toe.github.io/tic_tac_toe_icon_92X92.png',
    'https://github.com/VishalKumarSankhyan/Tic_Tac_toe.github.io/tic_tac_toe_icon_128X128.png',
    'https://github.com/VishalKumarSankhyan/Tic_Tac_toe.github.io/tic_tac_toe_icon_144X144.png',
    'https://github.com/VishalKumarSankhyan/Tic_Tac_toe.github.io/tic_tac_toe_icon_152X152.png',
    'https://github.com/VishalKumarSankhyan/Tic_Tac_toe.github.io/tic_tac_toe_icon_192X192.png',
    'https://github.com/VishalKumarSankhyan/Tic_Tac_toe.github.io/tic_tac_toe_icon_256X256.png',
    'https://github.com/VishalKumarSankhyan/Tic_Tac_toe.github.io/tic_tac_toe_icon_512X512.png'
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
