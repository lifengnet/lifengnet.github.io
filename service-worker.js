"use strict";var precacheConfig=[["/index.html","6b768e38225b92deb63df0159d6b70ae"],["/static/css/app.0f32abe1.css","0f32abe119de2dc50b7d85510fd0b9bb"],["/static/js/0.eded7733.chunk.js","4f85a1668cac43a3cf422d9088ace9cd"],["/static/js/1.dc6507b7.chunk.js","81cdab336cf6d0f04604adff6ec26a56"],["/static/js/10.e492dad9.chunk.js","6cf1a7b4f7c2be8cf86ff67c670a6196"],["/static/js/2.a2e67239.chunk.js","9d5fffc4cfcc7e9b57126cabf1dd84b1"],["/static/js/3.ef853c22.chunk.js","9defdefc795fab146d91d9830f32c16f"],["/static/js/4.f6008a83.chunk.js","59679c58c74151af1d7148b3064b427b"],["/static/js/5.a355fd1d.chunk.js","5b1dba494002b2a62e31baca8b87dc4d"],["/static/js/6.f200acf8.chunk.js","2c6c28930d6923d4b4d697e42861cf7b"],["/static/js/7.a64346bf.chunk.js","7a6886d66b25c61310c7dfda228dd6bc"],["/static/js/8.aadf781d.chunk.js","93239b83094f058fc37c68d010612444"],["/static/js/9.959f3599.chunk.js","142222a5d8f1fa150203ce73614d43c2"],["/static/js/app.92fb7e1a.js","93957afdfba303ccad305475d8bce5b7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});