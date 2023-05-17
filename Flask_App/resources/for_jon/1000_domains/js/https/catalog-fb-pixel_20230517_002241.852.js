var fb_pixel_obj = {
    "hnuuy.com": "865417667729762"
}
var tk_pixel_obj = {
    "zraction.shop": "C7L7783CV636UB5MRDI0"
}
var more_info_html = {
     "luoye.shop" : "<p><b>Email: </b>cpattyf1d6@hotmail.com</p>",
    "jksdha.shop" : "<p><b>Email: </b>paulettefwddh@hotmail.com </p>"
}

function loadScriptString(code) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    try {
        script.appendChild(document.createTextNode(code));
    } catch (ex) {
        script.text = code;
    }
    document.head.appendChild(script);
}

var hh = window.location.host;
hh = hh.replace("www.", "");
var tk_pixel = '';
if (typeof tk_pixel_obj !== "undefined" && tk_pixel_obj.hasOwnProperty(hh)){
    tk_pixel = tk_pixel_obj[hh];
}
var more_info = $('#more_info');
if (more_info.length && more_info_html.hasOwnProperty(hh)) {
    console.log('more info');
    more_info.html(more_info_html[hh]);
}
if (typeof tk_pixel !== "undefined" && tk_pixel) {
    console.log(tk_pixel);
    var js_str = `!function (w, d, t) {
        w.TiktokAnalyticsObject=t;
        var ttq=w[t]=w[t]||[];
        ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
        for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
        ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
        var o=document.createElement("script");
        o.type="text/javascript",
        o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;
        var a=document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(o,a)};
        ttq.load('${tk_pixel}');
        ttq.page();
    }(window, document, 'ttq');`;
    loadScriptString(js_str);;
}
