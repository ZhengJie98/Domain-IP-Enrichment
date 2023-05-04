
$(function () {


    $('.menu-btn').on('click', function () {
        $('.header').find('.nav').toggle();
    });

    if ($(window).width() > 991) {
        $('.dropdown').hover(function () {
            $(this).addClass('open');
        }, function () {
            $(this).removeClass('open');
        });
    } else {
        $('.dropdown').find('.arr').on('click', function () {
            $(this).parent().toggleClass('open');
        });
    }

    $('.sc-btn').on('click', function () {
        $('.sc-box').toggle();
    });


 // 右侧滑动返回顶部
    $('.kf .kf-side').click(function(){
        //$('.kf').animate({ right: '-208' }, "slow");
        var rt = $('.kf').css("right");
        //alert(rt);
        var num = parseInt(rt);
        //alert(num);
        if(num < 0){
            $('.kf').animate({ right: '20px' }, "slow");
            $('.kf .kf-side span.arrow').addClass('on');
        }else{
            $('.kf').animate({ right: '-208px' }, "slow");
            $('.kf .kf-side span.arrow').removeClass('on');
        }
    });
    $('.kt-top span.close').click(function(){
        $('.kf').animate({ right: '-208px' }, "slow");
    });

    $('.kf .backTop').click(function() {
        $("html,body").stop().animate({ scrollTop: '0' }, 500);
    });
    
    // // 右侧滑动返回顶部
    // var time;
    // var $kefu = $('.kefu');
    // var $c = $kefu.find('#kefu');
    // $kefu.css({
    //     'marginTop': -($kefu.height() / 2)
    // });
    // $c.find('li').on({
    //     'mouseenter': function () {
    //         var scope = this;
    //         time = setTimeout(function () {
    //             var divDom = $(scope).children('div');
    //             var maxWidth = divDom.width();
    //             $(scope).stop().animate({
    //                 left: 77 - maxWidth
    //             }, 'normal', function () {
    //                 var pic = $(scope).find('.kefu-weixin-pic');
    //                 if (pic.length > 0) {
    //                     pic.show();
    //                 }
    //             });
    //         }, 100);
    //     },
    //     'mouseleave': function () {
    //         var pic = $(this).find('.kefu-weixin-pic');
    //         if (pic.length > 0) {
    //             pic.hide();
    //         }
    //         clearTimeout(time);
    //         $(this).stop().animate({
    //             left: 0
    //         }, 'normal', function () {
    //         });
    //     }
    // });
    // $(window).scroll(function () {
    //     var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    //     var eltop = $c.find('.kefu-ftop');
    //     if (scrollTop > 0) {
    //         eltop.show();
    //     } else {
    //         eltop.hide();
    //     }
    // });
    // $c.find('.kefu-ftop').click(function () {
    //     var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    //     if (scrollTop > 0) {
    //         $('html,body').animate({
    //             scrollTop: 0
    //         }, 'slow');
    //     }
    // });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('.header').addClass('header-active');
        } else {
            $('.header').removeClass('header-active');
        }
    });

    new WOW().init();
});
