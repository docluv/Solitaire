const preCacheName = "pre-cache-solitaire",
    preCacheFiles = [
        "/",
        "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css",
        "css/style.css",
        "css/cards.css",
        "https://code.jquery.com/jquery-3.1.1.js",
        "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js",
        "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",
        "js/solitaire.js",
        "js/event.js",
        "js/card.js",
        "js/deck.js",
        "js/pile.js",
        "js/board.js",
        "js/rulebook.js",
        "js/score.js",
        "js/timer.js",
        "js/main.js",
        "img/big/clubs/clubs-2.svg",
        "img/big/clubs/clubs-3.svg",
        "img/big/clubs/clubs-4.svg",
        "img/big/clubs/clubs-5.svg",
        "img/big/clubs/clubs-6.svg",
        "img/big/clubs/clubs-7.svg",
        "img/big/clubs/clubs-8.svg",
        "img/big/clubs/clubs-9.svg",
        "img/big/clubs/clubs-10.svg",
        "img/big/clubs/clubs-A.svg",
        "img/big/clubs/clubs-J.svg",
        "img/big/clubs/clubs-K.svg",
        "img/big/clubs/clubs-Q.svg",
        "img/big/hearts/hearts-2.svg",
        "img/big/hearts/hearts-3.svg",
        "img/big/hearts/hearts-4.svg",
        "img/big/hearts/hearts-5.svg",
        "img/big/hearts/hearts-6.svg",
        "img/big/hearts/hearts-7.svg",
        "img/big/hearts/hearts-8.svg",
        "img/big/hearts/hearts-9.svg",
        "img/big/hearts/hearts-10.svg",
        "img/big/hearts/hearts-A.svg",
        "img/big/hearts/hearts-J.svg",
        "img/big/hearts/hearts-K.svg",
        "img/big/hearts/hearts-Q.svg",
        "img/big/spades/spades-2.svg",
        "img/big/spades/spades-3.svg",
        "img/big/spades/spades-4.svg",
        "img/big/spades/spades-5.svg",
        "img/big/spades/spades-6.svg",
        "img/big/spades/spades-7.svg",
        "img/big/spades/spades-8.svg",
        "img/big/spades/spades-9.svg",
        "img/big/spades/spades-10.svg",
        "img/big/spades/spades-A.svg",
        "img/big/spades/spades-J.svg",
        "img/big/spades/spades-K.svg",
        "img/big/spades/spades-Q.svg",
        "img/big/tiles/tiles-2.svg",
        "img/big/tiles/tiles-3.svg",
        "img/big/tiles/tiles-4.svg",
        "img/big/tiles/tiles-5.svg",
        "img/big/tiles/tiles-6.svg",
        "img/big/tiles/tiles-7.svg",
        "img/big/tiles/tiles-8.svg",
        "img/big/tiles/tiles-9.svg",
        "img/big/tiles/tiles-10.svg",
        "img/big/tiles/tiles-A.svg",
        "img/big/tiles/tiles-J.svg",
        "img/big/tiles/tiles-K.svg",
        "img/big/tiles/tiles-Q.svg",
        "img/small/clubs/clubs-2.svg",
        "img/small/clubs/clubs-3.svg",
        "img/small/clubs/clubs-4.svg",
        "img/small/clubs/clubs-5.svg",
        "img/small/clubs/clubs-6.svg",
        "img/small/clubs/clubs-7.svg",
        "img/small/clubs/clubs-8.svg",
        "img/small/clubs/clubs-9.svg",
        "img/small/clubs/clubs-10.svg",
        "img/small/clubs/clubs-A.svg",
        "img/small/clubs/clubs-J.svg",
        "img/small/clubs/clubs-K.svg",
        "img/small/clubs/clubs-Q.svg",
        "img/small/hearts/hearts-2.svg",
        "img/small/hearts/hearts-3.svg",
        "img/small/hearts/hearts-4.svg",
        "img/small/hearts/hearts-5.svg",
        "img/small/hearts/hearts-6.svg",
        "img/small/hearts/hearts-7.svg",
        "img/small/hearts/hearts-8.svg",
        "img/small/hearts/hearts-9.svg",
        "img/small/hearts/hearts-10.svg",
        "img/small/hearts/hearts-A.svg",
        "img/small/hearts/hearts-J.svg",
        "img/small/hearts/hearts-K.svg",
        "img/small/hearts/hearts-Q.svg",
        "img/small/spades/spades-2.svg",
        "img/small/spades/spades-3.svg",
        "img/small/spades/spades-4.svg",
        "img/small/spades/spades-5.svg",
        "img/small/spades/spades-6.svg",
        "img/small/spades/spades-7.svg",
        "img/small/spades/spades-8.svg",
        "img/small/spades/spades-9.svg",
        "img/small/spades/spades-10.svg",
        "img/small/spades/spades-A.svg",
        "img/small/spades/spades-J.svg",
        "img/small/spades/spades-K.svg",
        "img/small/spades/spades-Q.svg",
        "img/small/tiles/tiles-2.svg",
        "img/small/tiles/tiles-3.svg",
        "img/small/tiles/tiles-4.svg",
        "img/small/tiles/tiles-5.svg",
        "img/small/tiles/tiles-6.svg",
        "img/small/tiles/tiles-7.svg",
        "img/small/tiles/tiles-8.svg",
        "img/small/tiles/tiles-9.svg",
        "img/small/tiles/tiles-10.svg",
        "img/small/tiles/tiles-A.svg",
        "img/small/tiles/tiles-J.svg",
        "img/small/tiles/tiles-K.svg",
        "img/small/tiles/tiles-Q.svg",
        "img/big/back.svg"
    ];


self.addEventListener("install", event => {

    console.log("installing precache files");

    caches.open(preCacheName).then(function (cache) {

        return cache.addAll(preCacheFiles);

    });

});

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request).then(response => {

            if (!response) {

                //fall back to the network fetch
                return fetch(event.request);

            }

            return response;

        })

    )

});
