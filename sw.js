const VERSION = '0' // neds to be updated wit each release that invalidates chache
// TODO some script for this

oninstall = evt => {
  evt.waitUntil(
    caches.open(VERSION)
      .then(cache => cache.addAll([
        './style.css',
        './index.js',
        './components/tp-header/index.js',
        './components/tp-header/style.css',
      ]))
  )
}

onactivate = evt => {
  evt.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(
          keys.map(key => {
            if (key !== VERSION) return caches.delete(key)
          }) 
        )
      )
  )
}

onfetch = evt => {
  evt.waitUntil(
    caches.match(evt.request)
      .then(match => {
        if (match) {
          return match 
        }
        return fetch(evt.request)
      })
  )
}
