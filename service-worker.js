const CACHE='tcdd-passaparola-v4';
const ASSETS=['./','./index.html','./about.html','./manifest.webmanifest','./css/style.css','./css/features.css','./css/about.css','./js/defaultQuestions.js','./js/storage.js','./js/gameEngine.js','./js/app.js','./js/features.js','./firebase-config.js','./assets/logo.png','./assets/logo192.png','./assets/logo512.png','./assets/favicon.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r;}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));});
