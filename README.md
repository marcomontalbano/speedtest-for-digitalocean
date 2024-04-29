# Speed Test for DigitalOcean

> [!WARNING]
> Unfortunately, this service is no longer available, as DigitalOcean's regional speedtest subdomains, such as [speedtest-nyc1.digitalocean.com](https://speedtest-nyc1.digitalocean.com/), are no longer up and running. As [suggested by them](https://www.digitalocean.com/community/questions/how-to-test-digitalocean-speed-and-ping-now), you can refer to their new documentation for instructions on [how to test latency](https://docs.digitalocean.com/products/paperspace/machines/how-to/test-latency/).

DigitalOcean provides usefull links to run speed tests for each datacenter, but only one at a time.
I created this repository to speed up this process.

Run speed tests for all DigitalOcean datacenters faster than ever.

[https://speedtest-do.marcomontalbano.com](https://speedtest-do.marcomontalbano.com)

Just click start!

![Speedtest for DigitalOcean - Screenshot](public/images/speedtest-for-digitalocean-screenshot-without-header.jpg)

This tool uses the same service used by __speedtest-*.digitalocean.com__ so the result should be the same.


## Micro Frontend

Unfortunately, this application is not working anymore from my domain since the speed test service is now validating the domain name.

Of course, the valid domain is the DigitalOcean domain. Given that, I decided to refactor this application to be **served as a micro-frontend** so that we are able to inject it into their website.

### How does it work?

When Travis CI builds the website and publishes it to GitHub Pages, two files are generated (`main.js` and `main.css`). They are used both to render the website hosted at [speedtest-do.marcomontalbano.com](https://speedtest-do.marcomontalbano.com/) and to render the injected application at [speedtest-nyc1.digitalocean.com](https://speedtest-nyc1.digitalocean.com/).

The `bookmark` is simply a javascript code that injects both files in the website in a similar way:

```js
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/gh/marcomontalbano/speedtest-for-digitalocean@latest/static/js/main.js';

var style = document.createElement('link');
style.href = 'https://cdn.jsdelivr.net/gh/marcomontalbano/speedtest-for-digitalocean@latest/static/css/main.css';
style.rel = 'stylesheet';

document.head.innerHTML = '';
document.body.innerHTML = '';

document.body.setAttribute('id', 'st4do-root');
document.head.append(script, style);
```

You can take a look at the production code being used: [`bookmark.js`](./bookmark.js)


## Need an account for DigitalOcean?

Click [here](https://m.do.co/c/45b8cffe90f8) to register a new one!


## Privacy

Google Analytics is used to record the following:

* [Basic visit data](https://support.google.com/analytics/answer/6004245?ref_topic=2919631).
* `ping`, `download` and `upload` speed for each region in order to provide the consultable table.

Clicking on `start` you accept this terms & condition; no additional data is sent to the server.
