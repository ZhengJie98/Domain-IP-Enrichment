jQuery(document).ready(function($) {
    $(".auto-scrolling-images-list").each(function(index) {

        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 8; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        var rand = "auto-scrolling-images-" + text;
        $(this).addClass(rand);
        rand = "." + rand;

        var direction_from_db = $(this).parent().find(".auto-scrolling-images-scroll-direction").val();
        var speed_from_db = $(this).parent().find(".auto-scrolling-images-speed").val();
        var hover_stop_from_db = $(this).parent().find(".auto-scrolling-images-hover-stop").val();
        var start = $(this).parent().find(".auto-scrolling-images-start").val();
        var start_visible = $(this).parent().find(".auto-scrolling-images-start-visible").val();
        var stop = $(this).parent().find(".auto-scrolling-images-stop").val();
        var hide = $(this).parent().find(".scrolling-image-hide-when-is-shortcode").val();
        var container_height = $(this).parent().find(".scrolling-image-container-height").val();
        if (hide == "yes") {
            if(!$(this).closest('.widget').hasClass("auto-sccrolling-shortcode-widget")){
                $(this).closest('.widget').remove();
            }
        }

        if (container_height == "") {
            container_height = "300px";
        }
        else {
            container_height = container_height + "px";
        }
        var orientation = "forwards";
        var direction = "horizontal";
        if (direction_from_db == "right-left") {
            $(rand).find("li").css("height", container_height);
            direction = "forwards";
            orientation = "horizontal";
        }
        if (direction_from_db == "left-right") {
            $(rand).find("li").css("height", container_height);
            direction = "backwards";
            orientation = "horizontal";
        }
        if (direction_from_db == "top-down") {
            $(rand).find("li").css("clear", "both");
            $(rand).find("li").css("width", "100%");
            $(rand).find("li").css("height", container_height);
            direction = "backwards";
            orientation = "vertical";
        }
        if (direction_from_db == "down-top") {
            $(rand).find("li").css("clear", "both");
            $(rand).find("li").css("width", "100%");
            $(rand).find("li").css("height", container_height);
            direction = "forwards";
            orientation = "vertical";
        }
        var hover_stop = true;
        if (hover_stop_from_db == "yes") {
            hover_stop = true;
        }
        else {
            hover_stop = false;
        }
        var frames = 32;
        var speed = 4;

        if (speed_from_db == "1") {
            speed = 1;
            frames = 16;
        }
        if (speed_from_db == "2") {
            speed = 2;
            frames = 22;
        }
        if (speed_from_db == "3") {
            speed = 3;
            frames = 26;
        }
        if (speed_from_db == "4") {
            speed = 4;
            frames = 32;
        }
        if (speed_from_db == "5") {
            speed = 5;
            frames = 36;
        }
        if (speed_from_db == "6") {
            speed = 6;
            frames = 40;
        }
        if (speed_from_db == "7") {
            frames = 44;
            speed = 7;
        }
        if (speed_from_db == "8") {
            speed = 8;
            frames = 50;
        }
        if (speed_from_db == "9") {
            speed = 9;
            frames = 56;
        }
        if (speed_from_db == "10") {
            speed = 10;
            frames = 62;
        }
        if(speed_from_db > 10 || speed_from_db<1){
            speed = 4;
            frames = 32;
        }
        start = 1000 * parseInt(start);
        if (start_visible == "yes") {
            var temp = 0;
            setInterval(function(){
                if(isScrolledIntoView(rand) && temp == 0) {
                    temp = 1;
                    $(rand).find("li").css("display", "block");
                    $(rand).simplyScroll({
                        direction: direction,
                        pauseOnHover: hover_stop,
                        orientation: orientation,
                        speed: speed,
                        frameRate: frames,
                        pauseButton: true
                    });
                    $(rand).parent().css("height", container_height);
                    $(rand).parent().parent().css("height", container_height);
                    $(".simply-scroll-btn-pause").hide();
                    if (stop != "") {
                        stop = 1000 * parseInt(stop);
                        setTimeout(function () {
                            $(rand).parent().parent().find(".simply-scroll-btn-pause").click();
                        }, stop);
                    }
                }
            }, 100);
        }
        else
        {
            setTimeout(function () {
                $(rand).find("li").css("display", "block");
                $(rand).simplyScroll({
                    direction: direction,
                    pauseOnHover: hover_stop,
                    orientation: orientation,
                    speed: speed,
                    frameRate: frames,
                    pauseButton: true
                });
                $(rand).parent().css("height", container_height);
                $(rand).parent().parent().css("height", container_height);
                $(".simply-scroll-btn-pause").hide();
                if (stop != "") {
                    stop = 1000 * parseInt(stop);
                    setTimeout(function () {
                        $(rand).parent().parent().find(".simply-scroll-btn-pause").click();
                    }, stop);
                }
            }, start);
        }
    });

    function isScrolledIntoView(elem)
    {
        var $elem = $(elem);
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

});

