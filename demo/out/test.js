var obj = {};
if (typeof window !== 'undefined') {
    obj.ua = window.navigator.userAgent.toLowerCase();
}
if (typeof window !== 'undefined') {
    if (window.location.hostname.includes('cool')) {
        obj.cool = true;
    }
}
if (obj.ua.includes('mozilla') && obj.cool) {
    window.addEventListener('message', function (evt) {
        console.log('The pizza data is', evt.data);
    });
}
if (typeof window !== 'undefined') {
    window.location = 'http://kevinmikles.com';
}
const life = 37;