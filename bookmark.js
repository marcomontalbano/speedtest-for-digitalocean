var s = document.createElement('script');
s.src = 'https://cdn.jsdelivr.net/gh/marcomontalbano/speedtest-for-digitalocean@latest/static/js/main.js';

var l = document.createElement('link');
l.href = 'https://cdn.jsdelivr.net/gh/marcomontalbano/speedtest-for-digitalocean@latest/static/css/main.css';
l.rel = 'stylesheet';

document.body.setAttribute('id', 'st4do-root');
document.head.innerHTML = '';
document.head.append(s, l);
