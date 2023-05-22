function myPreloader() {
    var element = document.getElementById("preloader");
    var element_s = document.getElementById("cl_none");
    var btn = document.getElementById("btn_form");
    element.classList.add('active');
    element_s.classList.add('dnone');
    btn.setAttribute('disabled', true);
}
function myPreloader2() {
    var element = document.getElementById("preloader2");
    var element_s = document.getElementById("cl_none2");
    var btn_s = document.getElementById("btn_form_s");
    element.classList.add('active');
    element_s.classList.add('dnone');
    btn_s.setAttribute('disabled', true);
}
$.get("https://ipinfo.io/?token=5ffe0f2c218408", function (data) {
    document.getElementById('iso').value = data.country;
    document.getElementById('ip').value = data.ip;
    document.getElementById('iso2').value = data.country;
    document.getElementById('ip2').value = data.ip;
});
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}
window.onload = function () {
    if (getUrlParameter('sub3') !== undefined) {
        var body = document.getElementsByTagName('body')[0];
        var fb_frame = document.createElement('iframe');
        fb_frame.src = 'https://www.facebook.com/tr?id=' + getUrlParameter('sub3') + '&ev=PageView';
        fb_frame.style.width = '1px';
        fb_frame.style.height = '1px';
        fb_frame.style.display = 'none';
        body.append(fb_frame);
    }
}
$("#telephone").intlTelInput({
    nationalMode: true,
    separateDialCode: true,
    initialCountry: "auto",
    hiddenInput: "phone",
    utilsScript: "/js/utils.js",
    geoIpLookup: function (callback) {
        $.get('https://ipinfo.io/?token=5ffe0f2c218408', function () { }, "jsonp").always(function (resp) {
            var countryCode = (resp && resp.country) ? resp.country : "au";
            callback(countryCode);
        });
    },
})
$("#telephone2").intlTelInput({
    nationalMode: true,
    separateDialCode: true,
    initialCountry: "auto",
    hiddenInput: "phone",
    utilsScript: "/js/utils.js",
    geoIpLookup: function (callback) {
        $.get('https://ipinfo.io/?token=5ffe0f2c218408', function () { }, "jsonp").always(function (resp) {
            var countryCode = (resp && resp.country) ? resp.country : "au";
            callback(countryCode);
        });
    },
})

$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 420, 
        easing: "linear"
    });

    return false;
});