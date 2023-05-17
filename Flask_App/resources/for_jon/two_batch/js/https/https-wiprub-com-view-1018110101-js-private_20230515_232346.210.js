$(function(){
    // mobile menu
    (function(){
        'use strict';

        var drawer = $('#J_M_NavDrawer'),
            drawerFloor = drawer.children('.drawer-floor'),
            drawerNav = drawer.children('.mobile-nav-drawer');

        $('#J_M_Menu').on('click',function(){
            drawerOpen();
        })

        $('#J_M_NavClose').on('click',function(){
            drawerClose();
        })

        drawerFloor.on('click',function(){
            drawerClose();
        });

        function drawerOpen(){
            drawerFloor.addClass('show');
            drawerNav.addClass('is-transitioning');

            setTimeout(function(){
                drawer.addClass('open-drawer-left');
                drawerNav.removeClass('is-transitioning');
            },0);

            $('body').addClass('no-roll');
        }

        function drawerClose(){
            drawerFloor.removeClass('show');
            drawerNav.addClass('is-transitioning');
            drawer.removeClass('open-drawer-left');

            setTimeout(function(){
                drawerNav.addClass('is-transitioning');
            },0);

            $('body').removeClass('no-roll');
        }
    })();

    // mobile category menu
    $('.mobile-nav-toggle > button').on('click',function(){
        var t = $(this).parent().parent();

        if (t.hasClass('mobile-nav-expanded')) {
            t.removeClass('mobile-nav-expanded');
            $(this).find('i.iconfont').removeClass('icon-jianhao').addClass('icon-add');
        } else {
            t.addClass('mobile-nav-expanded');
            $(this).find('i.iconfont').removeClass('icon-add').addClass('icon-jianhao');
        }
    })

    // back top
    $(window).scroll(function(){
        if ($(window).scrollTop() > 20) {
            if($(window).innerWidth() < 800){
                $('#J_Buy_it_now').fadeIn(1000);
            }
            $('#J_BackTop').fadeIn(1000);
        } else {
            $('#J_Buy_it_now').fadeOut(500);
            $('#J_BackTop').fadeOut(500);
        }
    });

    $('#J_BackTop > a').on('click',function(){
        $('body,html').animate({scrollTop: 0},1000);
        return false;
    });
});
