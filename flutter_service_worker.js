'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f03d7415d5025a61cbcd9f194549ebc7",
"assets/AssetManifest.bin.json": "be5e3c163f0850288412118b97a73148",
"assets/AssetManifest.json": "92e6ae166b68e4a91d28f72f7f9f9bbc",
"assets/assets/fonts/SpaceGrotesk-Bold.ttf": "a17e24dc3fccc03e32a6e66100fb05df",
"assets/assets/fonts/SpaceGrotesk-Light.ttf": "021142e7734a57a1a48ca495158863cf",
"assets/assets/fonts/SpaceGrotesk-Medium.ttf": "705b51b5e52edb8d669adf36eac8f771",
"assets/assets/fonts/SpaceGrotesk-Regular.ttf": "7f510d38d1c785c851d73882c0ca58c0",
"assets/assets/fonts/SpaceGrotesk-SemiBold.ttf": "73a35ae608e5c13b794c5f893b67bf61",
"assets/assets/images/backdrop.png": "3e7dab1cfec274eb5c7e7fe682a6a932",
"assets/assets/images/dsps/7digital.jpg": "8a4c21e89999e99afd577baceb2280d2",
"assets/assets/images/dsps/acrcloud.jpg": "42998304cfda0b488a68bcef4bfeda68",
"assets/assets/images/dsps/alibaba.jpg": "0ddcd4a38e21fee26729d3eadb8effc4",
"assets/assets/images/dsps/amazon.png": "1154da58a2ed168455fda220466902f7",
"assets/assets/images/dsps/ami.png": "3bd6981e16937a6cfc664e791b5bea1b",
"assets/assets/images/dsps/Anghami.jpg": "2ccc94a75c45de68b8fb1008a76db0ee",
"assets/assets/images/dsps/Apple%2520Music.png": "838cdbcb6be22aa32e43b8318123066e",
"assets/assets/images/dsps/Audible%2520Magic.png": "5fb8a4f89fd8d586c15fbeb689736471",
"assets/assets/images/dsps/Audiomack.png": "5bb792ff93fc0cab3465d7c63fca8230",
"assets/assets/images/dsps/BMAT.jpg": "bcab8ccd7e02479de7143ad9a7203bff",
"assets/assets/images/dsps/Boomplay.jpg": "27eedbccc70a7c9b38646dd78e35721d",
"assets/assets/images/dsps/Claro.png": "b395840ac2db77dfc8465e41061b17b7",
"assets/assets/images/dsps/ClicknClear.png": "9e482532e01c6c665dddbd8a44649950",
"assets/assets/images/dsps/d'Music.png": "757e1958242e2b282d766392a0d03e0a",
"assets/assets/images/dsps/Deezer.png": "a2d38681b36cf41b29efc1673e50640c",
"assets/assets/images/dsps/facebook.png": "1558058507e530e0baa784fb4f993de7",
"assets/assets/images/dsps/Gracenote.png": "ffaaacd2fed82a93d61ee6cd3205aab4",
"assets/assets/images/dsps/iHeartRadio.png": "c9c6ee6be04833700e6ef2c6ce31c3f6",
"assets/assets/images/dsps/instagram.png": "7bd927fade740523df1f8765643e68f7",
"assets/assets/images/dsps/JioSaavn.png": "1aa53c5e1963f9860b9b12b42561bb7a",
"assets/assets/images/dsps/JOOX.jpg": "1140efc458e3b2938d256552de638f74",
"assets/assets/images/dsps/Kan%2520Music.jpg": "6383538f4f5bc455c8328d8610cb1cf3",
"assets/assets/images/dsps/KDM(K%2520Digital%2520Media).png": "ac47dcb730bb081095ff958e9ef9f635",
"assets/assets/images/dsps/KK%2520Box.png": "d2751acb147d6c215b3341ad2c97e8cf",
"assets/assets/images/dsps/LiveOne.jpg": "3ff5b67faf4b8baac4627a57d098f29a",
"assets/assets/images/dsps/Medianet.png": "f5c832bcbd0d8c16127134809c66c401",
"assets/assets/images/dsps/meta.png": "ab58cbebc67622bd081762b78aeadac3",
"assets/assets/images/dsps/mixcloud.png": "f20379f410af49f03d696a702ec3aab2",
"assets/assets/images/dsps/moodmedia.png": "353f1a24e8396108820a726c59bbc7c9",
"assets/assets/images/dsps/Pandora.png": "d8414b02aab46fef4a98648c43061c82",
"assets/assets/images/dsps/Peloton.png": "1268ab4ece41a9990a935d98508d81c1",
"assets/assets/images/dsps/Pretzel.png": "f83175f14e73221f6ed7f986329171b4",
"assets/assets/images/dsps/Qobuz.jpg": "317b5224454bf00159b899388ccb6132",
"assets/assets/images/dsps/Resso.png": "1e0e5d3f7283b7c7cb9d687ca3771957",
"assets/assets/images/dsps/shazam.png": "71ba696a4a4c87fda39014c6095d1ce5",
"assets/assets/images/dsps/soundcloud.png": "90f6ca8d23712836fc083fdf41737885",
"assets/assets/images/dsps/spotify.png": "a162f1ee10d257abc6325e58fbb2a51a",
"assets/assets/images/dsps/tidal.png": "5885c2c09e643832e18e0814172ee8d1",
"assets/assets/images/dsps/tiktok.png": "cbea54f334a80611eb14a45d7100127f",
"assets/assets/images/dsps/TouchTunes.jpg": "9172790b1e152dfab5465ac1ad93f000",
"assets/assets/images/dsps/Trebel.png": "2e483102bf0ed62a28bde062c2144a4a",
"assets/assets/images/dsps/Tuned%2520Global.png": "d150d4acbe55103cd4c6677584b49b6b",
"assets/assets/images/dsps/USEA.png": "5e8545eaba2823286361e530e0f7ae3a",
"assets/assets/images/dsps/VL%2520Group.webp": "a4db62c893b2ff352dfd5687ad9f3634",
"assets/assets/images/dsps/x.png": "a9beb72efc58de51836a4605d616d942",
"assets/assets/images/dsps/YouSee.png": "c62c2beb0e3472cf24001734033e8e2e",
"assets/assets/images/dsps/youtube.png": "d337e86234003f84a90624e9a34727c9",
"assets/assets/images/ico.png": "aedcb014e0725a62155084932adbdbbd",
"assets/assets/images/placeholder.png": "1674f15e008cb5d6d17a3ef9566f5e2b",
"assets/FontManifest.json": "4577f59bc9a32d030124ebd147c48a07",
"assets/fonts/MaterialIcons-Regular.otf": "f5ba50050243b4bedbc536354c67110d",
"assets/NOTICES": "133d5661c57365a839adc29ff90075d4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/flutter_sound/assets/js/async_processor.js": "1665e1cb34d59d2769956d2f14290274",
"assets/packages/flutter_sound/assets/js/tau_web.js": "32cc693445f561133647b10d1b97ca07",
"assets/packages/flutter_sound_web/howler/howler.js": "3030c6101d2f8078546711db0d1a24e9",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "3c26fcc60917c4cbaa6a30a231f7d4d8",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "b14f8d190230d77c02ffc51ce962ce80",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "0ec45f8c46d7ddb18691714c0c7348c8",
"assets/packages/flutter_sound_web/src/flutter_sound_stream_processor.js": "48d52b8f36a769ea0e90cf9e58eddfa7",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "fb130bde670810da1f18a4d8fd789462",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "c6b7a65d9869a13814fae31825154fbe",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "eb066c73fd60e01b4e001a6ab1717ac5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "13f34c3530f3018d3ab4d56d0bd2f58c",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "e0bc44bbfe026e93d9835bae272802f7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "162fd9dc98f2559b0f1e4574248edfc9",
"/": "162fd9dc98f2559b0f1e4574248edfc9",
"main.dart.js": "ba9536406887b1155c8dd6252e74eaed",
"manifest.json": "3f664823ca40b92a7b5e2723384dc784",
"splash/img/dark-1x.png": "35b8d8890db96bb3b1985a1d91b81b81",
"splash/img/dark-2x.png": "537226088b869d31e1e7075163153c06",
"splash/img/dark-3x.png": "ef6d84aa4f2624d94047cb588f62854f",
"splash/img/dark-4x.png": "e823c2344b0e2b5a51576b58d829d4a1",
"splash/img/light-1x.png": "35b8d8890db96bb3b1985a1d91b81b81",
"splash/img/light-2x.png": "537226088b869d31e1e7075163153c06",
"splash/img/light-3x.png": "ef6d84aa4f2624d94047cb588f62854f",
"splash/img/light-4x.png": "e823c2344b0e2b5a51576b58d829d4a1",
"version.json": "406deb88aad48c9669940b3c6b35e9c1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
