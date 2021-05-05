const cacheName = 'cache-v1';
// List the files to precache
const precacheResources = [
  '/',
  '/index.html',
  '/main.js',
  '../src/index.js',
  '../src/App.js',
  '../src/App.test.js',
  '../src/App.css',
  '../src/helpers.js',
  '../src/reportWebVitals.js',
  '../src/setupTest.js',
  '../src/components/index.js',
  '../src/components/AppHeader/AppHeader.js',
  '../src/components/AppHeader/AppHeader.css',
  '../src/components/ItemAddForm/ItemAddForm.js',
  '../src/components/ItemAddForm/ItemAddForm.css',
  '../src/components/ItemStatusFilter/ItemStatusFilter.js',
  '../src/components/ItemStatusFilter/ItemStatusFilter.css',
  '../src/components/SearchPanel/SearchPanel.js',
  '../src/components/SearchPanel/SearchPanel.css',
  '../src/components/TodoList/TodoList.js',
  '../src/components/TodoList/TodoList.css',
  '../src/components/TodoListItem/TodoListItem.js',
  '../src/components/TodoListItem/TodoListItem.css'
];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
  console.log('Service worker install event!');
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener('activate', (event) => {
  //console.log('Service worker activate event!');
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', (event) => {
  //console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    }),
  );
});