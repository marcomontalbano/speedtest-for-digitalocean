if (!/^speedtest\-.*\.digitalocean\.com$/.test(location.hostname)) {
  location.href = 'http://speedtest-do.marcomontalbano.com'
}

if (document.body.getAttribute('id') !== 'st4do-root') {
  var r = Math.random()
  
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/gh/marcomontalbano/speedtest-for-digitalocean@latest/static/js/main.js?_=' + r;
  
  var l = document.createElement('link');
  l.href = 'https://cdn.jsdelivr.net/gh/marcomontalbano/speedtest-for-digitalocean@latest/static/css/main.css?_=' + r;
  l.rel = 'stylesheet';
  
  document.head.innerHTML = '';
  document.body.innerHTML = '';
  
  document.body.setAttribute('id', 'st4do-root');
  document.head.append(s, l);
}
