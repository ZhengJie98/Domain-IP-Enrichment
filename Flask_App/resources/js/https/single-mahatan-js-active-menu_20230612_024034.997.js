
$(document).ready(function () {
    active('#main-menu', 'active');

    $(document).on("scroll", onScroll);
    //smoothscroll
    $(document).on('click', '.header .navbar ul li a', function () {

        $(document).off("scroll");

        $('.header .navbar ul li a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
        new Body();

    });

});


function onScroll(event){
    if(window.location.pathname != '/'){
        return true;
    }

    var scrollPos = $(document).scrollTop();
    var n = 0;
    $('.header .navbar ul li a').each(function () {
        var currLink = $(this);
        if(currLink.attr("href") == '/'){ return true;};

        var href = currLink.attr("href");
        if(href.indexOf("http:") >=0){
            return true;
        }

        if(href.indexOf("#") == -1){
            return true;
        }

        var id = currLink.attr("href").replace('/', '');
        var refElement = $(id);

        if(checkVisible( id)){
            if(n == 0) {
                $('.header .navbar ul li a').removeClass("active");
                currLink.addClass("active");
                n = 1;
            }

        } else {
            currLink.removeClass("active");
        }
    });
}

function checkVisible( elm) {
    eval = "visible";
    if($(elm).length >0){
        var vpH = $(window).height(), // Viewport Height
            st = $(window).scrollTop() , // Scroll Top
            y = $(elm).offset().top,
            elementHeight = $(elm).height()  -100;

        if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
        if (eval == "above") return ((y < (vpH + st)));
    }
}



function active(id, classActive){
    $(id+' a').each(function(){
        var currentLink = window.location.href;
        if (currentLink.slice(-1) == '/') {
            currentLink = currentLink.substring(0, currentLink.length - 1);
        }

        var link = $(this).prop('href');

        if (link.slice(-1) == '/') {
            link = link.substring(0, link.length - 1);
        }
        if (link == currentLink) {
            $(this).addClass(classActive);
            return false;
        }
    });
}




