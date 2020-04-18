const CACHE_NAME = 'v1'
let urlsToCache = [
    /* '/',
    '/index.html',
    '/assets/script.js',
    '/assets/MediaPlayer.js',
    '/assets/index.css',
    '/assets/BigBuckBunny.mp4',
    '/assets/plugins/AutoPause.js',
    '/assets/plugins/AutoPlay.js', */
];

self.addEventListener('install', event => {
    event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const request = event.request
    //get
    if(request.method !== 'GET') {
        return
    }
    // buscar en cache
    event.respondWith(cachedResponse(request))
    // actualizar el cache
    event.waitUntil(updateCache(request))
})

const precache = async () => {
    const cache = await caches.open(CACHE_NAME)
    return cache.addAll(urlsToCache)
}

const cachedResponse = async request => {
    const cache = await caches.open(CACHE_NAME)
    const response = await cache.match(request)
    // si no retornamos el fetch en caso de que el archivo no este, el usuario nunca lo va a obtener lo que pidio porque no dimos la opcion
    return response || fetch(request) 
}

const updateCache = async request => {
    const cache = await caches.open(CACHE_NAME)
    const response = await fetch(request) // esperamos la llamada network
    return cache.put(request, response) // agregamos el nuevo llamado al cache
}