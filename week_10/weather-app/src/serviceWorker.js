self.addEventListener('fetch', (e) => {
    console.log(`Intercepting fetch request for: ${e.request.url}`)

    e.respondWith(
        caches.match(e.request).then((response) => {
            // if response is defined, it means we don't have to
            // ask network for it.  otherwise, make request
            return response || fetch(e.request)
        })
    )
})