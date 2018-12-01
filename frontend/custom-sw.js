console.log("Custom-sw!"); // tslint:disable-line
self.addEventListener('fetch', e => {
    console.log(e.request.url); // tslint:disable-line
    if(e.request.url.indexOf('auth') > -1) {
        console.log('Fetching auth'); // tslint:disable-line
        return fetch(e.request);
    }
});