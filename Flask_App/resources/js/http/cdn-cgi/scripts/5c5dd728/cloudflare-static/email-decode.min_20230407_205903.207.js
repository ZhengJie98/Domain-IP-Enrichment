<!doctype html>
<html>
<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://cdnjs.cloudflare.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Staatliches&display=swap" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet">
<style>
    body,
    html {
      min-width: 800px;
      background-color: black;
    }

    div#bg {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      height: 100vh;
      background-image: url("img/thomas-kelley-unsplash.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      filter: opacity(0.7);
    }

    div#offset {
      width: 600px;
      margin-top: 50px;
      margin-left: max(50px, calc(20% - 110px));
      padding: 40px;
      border: 10px solid black;
      filter: drop-shadow(0 0 50px gray);
      background-color: white;
    }

    @media only screen and (min-height: 1270px) {
      div#offset {
        margin-top: 150px;
      }
    }

    h1 {
      font-family: "Staatliches", cursive;
      font-size: 40px;
      margin: 0;
      letter-spacing: 1px;
    }

    h2 {
      font-family: "Staatliches", cursive;
      font-size: 30px;
      margin-top: 45px;
      margin-bottom: 0;
      letter-spacing: 1px;
    }

    p {
      font-family: "Roboto Slab", serif;
      font-size: 18px;
      text-align: justify;
      margin: 20px 0;
    }

    p.standout:before {
      content: "❗";
      height: 4em;
      float: left;
      padding-right: 5px;
      margin-left: -5px;
    }

    div#ips {
      display: none;
      margin: 0 30px;
    }

    div#ips:target {
      display: flex;
    }

    pre {
      flex: 50%;
      font-family: monospace;
      font-size: 14px;
      line-height: 20px;
      margin: 0 30px;
    }

    p#credit {
      font-size: 12px;
      text-align: right;
      padding-top: 50px;
      margin-bottom: -10px;
    }
  </style>
</head>
<body>
<div id="bg"></div>
<div id="offset">
<h1>
internet-measurement.com
</h1>
<p>
This domain is operated by <a href="https://driftnet.io/">driftnet.io</a>. It is used to discover and measure services that network owners and operators have publicly exposed.
</p>
<p>
Traffic from this domain is not an attack. Traffic from this domain will never attempt to log in to your systems.
</p>
<p>
Spam is not sent from this domain. SPF, DKIM and DMARC records mark internet-measurement.com as completely unable to send email.
</p>
<h2>
Problem Reports
</h2>
<p>
If particular probes technically or operationally problematic for you, let us know: <a href="/cdn-cgi/l/email-protection#5525273a3739303826153c3b2130273b3021783830342620273038303b217b363a38"><span class="__cf_email__" data-cfemail="7101031e131d141c0231181f0514031f14055c1c1410020403141c141f055f121e1c">[email&#160;protected]</span></a>.
</p>
<p>
We read, investigate and take action on reports. If we are causing unusual noise in your logs, please tell us and we'll try to do better.
</p>
<h2>
Viewing your Network
</h2>
<p>
Network administrators may freely obtain an external view of their network at <a href="https://driftnet.io/">driftnet.io</a>.
</p>
<h2>
Opting Out
</h2>
<p>
To opt out, block <a href="#ips">our IP ranges</a>.
If you wish to block all similar traffic, please see the IP ranges in <a href="https://gitlab.com/mcollins_at_isi/acknowledged_scanners">this repository</a>.
</p>
<div id="ips">
<pre>87.236.176.0/24
193.163.125.0/24
68.183.53.77/32
104.248.203.191/32
104.248.204.195/32
142.93.191.98/32
157.245.216.203/32
165.22.39.64/32
167.99.209.184/32
188.166.26.88/32
206.189.7.178/32
209.97.152.248/32</pre>
<pre>2a06:4880::/32
2604:a880:800:10::c4b:f000/124
2604:a880:800:10::c51:a000/124
2604:a880:800:10::c52:d000/124
2604:a880:800:10::c55:5000/124
2604:a880:800:10::c56:b000/124
2a03:b0c0:2:d0::153e:a000/124
2a03:b0c0:2:d0::1576:8000/124
2a03:b0c0:2:d0::1577:7000/124
2a03:b0c0:2:d0::1579:e000/124
2a03:b0c0:2:d0::157c:a000/124</pre>
</div>
<p>
You may also opt out by sending your IP ranges and/or domain names to <a href="/cdn-cgi/l/email-protection#741b04001b0100341d1a0011061a1100591911150701061119111a005a171b19"><span class="__cf_email__" data-cfemail="b7d8c7c3d8c2c3f7ded9c3d2c5d9d2c39adad2d6c4c2c5d2dad2d9c399d4d8da">[email&#160;protected]</span></a>.
We will also need some reasonable method of authenticating you as the end-user of those IPs: an email sent from an address listed in public WHOIS is preferred.
Where that isn't possible, get in touch and we can suggest alternate methods.
</p>
<p>
We aim to process requests quickly. We block senders of abusive, profane or threatening messages.
</p>
<p id="credit">
Photo by <a href="https://unsplash.com/@thkelley">Thomas Kelley</a> on <a href="https://unsplash.com">Unsplash</a>
</p>
</div>
<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "484043fc782c4f32a340f29632cbd85d"}'></script><script>(function(){var js = "window['__CF$cv$params']={r:'7b42723c0c2540a8',m:'zyRKvNy6D29OYzsKpZvjqIjxVH3TUKCcvJC5So_M_vA-1680872350-0-AQ5zsmePIM8Uf88K1Aje4pvaK0TlnznziT3AJLjUR3BcsoOI6amwoSEmvQ0WS0Oa2WZ2DzwY46e8qFbwvPgg6dd42C9wFv5U8ZJnJpRbe6Ns6sC37nWBP3a84KJTAweO/w==',s:[0xf7157b6422,0xe833e2bd2b],u:'/cdn-cgi/challenge-platform/h/b'};var now=Date.now()/1000,offset=14400,ts=''+(Math.floor(now)-Math.floor(now%offset)),_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/h/b/scripts/alpha/invisible.js?ts='+ts,document.getElementsByTagName('head')[0].appendChild(_cpo);";var _0xh = document.createElement('iframe');_0xh.height = 1;_0xh.width = 1;_0xh.style.position = 'absolute';_0xh.style.top = 0;_0xh.style.left = 0;_0xh.style.border = 'none';_0xh.style.visibility = 'hidden';document.body.appendChild(_0xh);function handler() {var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;if (_0xi) {var _0xj = _0xi.createElement('script');_0xj.nonce = '';_0xj.innerHTML = js;_0xi.getElementsByTagName('head')[0].appendChild(_0xj);}}if (document.readyState !== 'loading') {handler();} else if (window.addEventListener) {document.addEventListener('DOMContentLoaded', handler);} else {var prev = document.onreadystatechange || function () {};document.onreadystatechange = function (e) {prev(e);if (document.readyState !== 'loading') {document.onreadystatechange = prev;handler();}};}})();</script></body>
</html>