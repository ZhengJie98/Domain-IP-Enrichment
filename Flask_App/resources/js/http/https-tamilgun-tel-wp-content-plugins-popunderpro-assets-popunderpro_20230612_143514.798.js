(function(){
    var installed = false;
    function install () {
        if(installed){
            return;
        }
        installed = true;
        var script = document.getElementById('popunder-pro-script');

        var urls = JSON.parse(script.getAttribute('data-urls'));
        var wait = script.getAttribute('data-wait');
        var mobile_disable = JSON.parse(script.getAttribute('data-mobile-disable'));

        if(mobile_disable && is_mobile()){
            return;
        }


        var cookie_name = '__popunderpro__';

        function is_mobile() {
            if( navigator.userAgent.match(/Android/i)
                || navigator.userAgent.match(/webOS/i)
                || navigator.userAgent.match(/iPhone/i)
                || navigator.userAgent.match(/iPad/i)
                || navigator.userAgent.match(/iPod/i)
                || navigator.userAgent.match(/BlackBerry/i)
                || navigator.userAgent.match(/Windows Phone/i)
            ){
                return true;
            }
            else {
                return false;
            }
        }

        function has_cookie () {
            return document.cookie.indexOf(cookie_name + '=') !== -1;
        }

        function install_cookie() {
            var now = new Date();
            document.cookie = cookie_name + '=1;expires='
                + new Date(now.setTime(now.getTime() + wait * 1000)).toGMTString() + ';path=/';
        }

        function handler(e){
            if(has_cookie()){
                return;
            }
            var target = e.target.closest('a');
            target.target = '_blank';
            setTimeout(
                function(){
                    if(e.defaultPrevented){
                        //don't do anything if the click was handled by JS
                        return;
                    }
                    window.location = urls[Math.floor(Math.random()*urls.length)];
                },
                100
            );
            install_cookie()
        }

        function attach(selector, event, handler){
            var elements = document.querySelectorAll(selector);

            for(var i in elements){
                var element = elements[i];
                if(element.addEventListener){
                    element.addEventListener(event, handler);
                }else if(element.attachEvent){
                    window.attachEvent('on' + event, handler);
                }
            }
        }
        attach('a:not([href^="#"])', 'click', handler);
        attach('a:not([href^="#"])', 'touchstart', handler);
        attach('form', 'submit', handler);
    }

    if(document.readyState === "complete"){
        install();
    }else{
        if(document.addEventListener){
            window.addEventListener("load", install);
            window.addEventListener("DOMContentLoaded", install);
        }else if(document.attachEvent){
            window.attachEvent("onload", install);
        }
    }
})();