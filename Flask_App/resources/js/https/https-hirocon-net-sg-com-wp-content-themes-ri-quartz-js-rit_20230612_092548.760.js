var window_height = jQuery(window).height(), window_width = jQuery(window).width(), header_height = jQuery(".site-header").width();
jQuery(document).ready(function () {
    "use strict";
    function e() {
        var e = jQuery(".slider-boxed-scroller").find(".boxed-image");
        jQuery(".slider-boxed-scroller .boxed-content, .slider-boxed-scroller .boxed-image").css("height", window_height), jQuery(e).each(function () {
            jQuery(this).css("background-color", jQuery(this).data("bg"))
        })
    }

    function i() {
        var e = jQuery(".parralax-size-large").find(".rit-parallax-wrap");
        jQuery(e).css("min-height", window_height)
    }

    function a() {
        var e = jQuery(".image-hover-inner").find(".image-content-hover .content"), r = jQuery(e).closest(".image-hover-inner").height(), i = jQuery(e).height();
        jQuery(e).css("margin-top", (r - i) / 2)
    }

    var width = jQuery(window).width();
    // qty product
    jQuery('.items-count.reduced').each(function(){
        jQuery(this).click(function(){
            var result = jQuery(this).closest('.quantity').find('#qty'),
                qty = result.val();
            if( !isNaN( qty ) && qty > 0 ){
                qty--;
                result.val(qty);
                return false;
            }
        });
    });
    jQuery('.items-count.increase').each(function(){
        jQuery(this).click(function(){
            var result = jQuery(this).closest('.quantity').find('#qty'),
                qty = result.val();
            if( !isNaN( qty ) && qty >= 0 ){
                qty++;
                result.val(qty);
                return false;
            }
        });
    });
    //Woocommerce sidebar
    jQuery('.woocommerce .sidebar').append('<span class="close-sidebar"><i class="clever-icon-close"></i></span>');
    jQuery('.active-sidebar, .sidebar-actived').live('click',function () {
        jQuery('.sidebar').toggleClass('active');
        jQuery('body.woocommerce').toggleClass('sidebar-actived');
    });
    // Change layout
    jQuery('#sort-by li a').on("click", function (e) {
        e.preventDefault();
        if (jQuery(this).not('.active')) {
            jQuery.cookie('product-view', jQuery(this).attr('data-sort'));
            jQuery('#sort-by li a').removeClass('active');
            jQuery(this).addClass('active');
            if(jQuery(this).attr('data-sort')=='grid'){
                jQuery('.rit-smart-layout').removeClass('products-list').addClass('products-grid');
            }else{
                jQuery('.rit-smart-layout').removeClass('products-grid').addClass('products-list');
            }
            jQuery('.rit-smart-layout').layoutWoocommerce();
        }

    });
    //Resize layout

    jQuery(window).resize(function () {
        if(jQuery(window).width()<769){
            jQuery('.footer-primary').slideUp();
        }else{
            jQuery('.footer-primary').slideDown();
        }
    }).resize();
    jQuery('.toogle-footer').on('click',function () {
        if(jQuery('.footer-primary').is(":visible")){
            jQuery('.footer-primary').slideUp();
        }else{
            jQuery('.footer-primary').slideDown();
        }
    })

    jQuery('[data-toggle="tooltip"]').tooltip();
    jQuery(window).load(function () {
        jQuery(window).resize(function () {
            jQuery('.rit-smart-layout').layoutWoocommerce();
        }).resize();
    });

    jQuery('.rit-smart-layout').bind('DOMNodeInserted DOMNodeRemoved', function(event) {
        jQuery('.rit-smart-layout').layoutWoocommerce();
    });
    jQuery(window).resize(function () {
        if(jQuery(window).width()<993){
            if(jQuery(window).width()<768){
                jQuery(".ordering").sticky({topSpacing:jQuery('#masthead').height()});
            }else{
                if(jQuery('#sticker')){
                    jQuery(".ordering").sticky({topSpacing:jQuery('#sticker').height()});
                }
            }
        }
        else{
            if(jQuery("#sticky-wrapper>.ordering")[0]){
                jQuery(".ordering").unstick();
            }
        }
    }).resize();
    //End Woocommerce sidebar
    jQuery(".rit-owl-carousel").each(function () {
        var e = "", r = "", i = jQuery(this).data("number");
        var rt=i;
        if(jQuery(this).width()>1200){rt=rt+1 }
        a = jQuery(this).data("smalldes"), t = jQuery(this).data("tablet"), s = jQuery(this).data("mobile"), n = (jQuery(this).data("transition"), jQuery(this).data("pager")), u = jQuery(this).data("control");
        r = "yes" == n ? !0 : !1, e = "yes" == u ? !0 : !1, jQuery(this).owlCarousel({
            items: rt,
            navigation: e,
            navigationText: ["<i class='clever-icon-preview'></i>", "<i class='clever-icon-next'></i>"],
            autoPlay: !1,
            pagination: r,
            loop: !0,
            singleItem: !1,
            itemsDesktop: [1200, i],
            itemsDesktopSmall: [922, a],
            itemsTablet: [768, t],
            itemsMobile: [479, s]
        })
    }), jQuery(".bxslider").each(function () {
        var e = (jQuery(this).find(".thumb-image"), jQuery(this).data("pager")), r = !1;
        1 == e && (r = !0), jQuery(this).bxSlider({
            pager: r,
            nextText: '<i class="fa fa-angle-right"></i>',
            prevText: '<i class="fa fa-angle-left"></i>',
            buildPager: function (e) {
                switch (e) {
                    case 0:
                        return '<img src="' + jQuery(".thumb-image-0").data("image0") + '">';
                    case 1:
                        return '<img src="' + jQuery(".thumb-image-1").data("image1") + '">';
                    case 2:
                        return '<img src="' + jQuery(".thumb-image-2").data("image2") + '">';
                    case 3:
                        return '<img src="' + jQuery(".thumb-image-3").data("image3") + '">';
                    case 4:
                        return '<img src="' + jQuery(".thumb-image-4").data("image4") + '">';
                    case 5:
                        return '<img src="' + jQuery(".thumb-image-5").data("image5") + '">';
                    case 6:
                        return '<img src="' + jQuery(".thumb-image-6").data("image6") + '">';
                    case 7:
                        return '<img src="' + jQuery(".thumb-image-7").data("image7") + '">';
                    case 8:
                        return '<img src="' + jQuery(".thumb-image-8").data("image8") + '">';
                    case 9:
                        return '<img src="' + jQuery(".thumb-image-9").data("image9") + '">';
                    case 10:
                        return '<img src="' + jQuery(".thumb-image-10").data("image10") + '">';
                    case 11:
                        return '<img src="' + jQuery(".thumb-image-11").data("image11") + '">';
                    case 12:
                        return '<img src="' + jQuery(".thumb-image-12").data("image12") + '">';
                    case 13:
                        return '<img src="' + jQuery(".thumb-image-13").data("image13") + '">';
                    case 14:
                        return '<img src="' + jQuery(".thumb-image-14").data("image14") + '">';
                    case 15:
                        return '<img src="' + jQuery(".thumb-image-15").data("image15") + '">';
                    case 16:
                        return '<img src="' + jQuery(".thumb-image-16").data("image16") + '">';
                    case 17:
                        return '<img src="' + jQuery(".thumb-image-17").data("image17") + '">';
                    case 18:
                        return '<img src="' + jQuery(".thumb-image-18").data("image18") + '">';
                    case 19:
                        return '<img src="' + jQuery(".thumb-image-19").data("image19") + '">'
                }
            }
        })
    }), jQuery(".arrow-down a").click(function () {
        var e = jQuery(this).attr("href");
        return jQuery("html, body").animate({scrollTop: jQuery(e).offset().top}, 1e3), !1
    });
    var t = jQuery("body").find("#page");
    jQuery("header:not(.header-1).rit-search .icon-search").click(function () {
        jQuery(t).addClass("open-search")
    }), jQuery(".search-wrap .icon-close").click(function () {
        jQuery(t).removeClass("open-search")
    });
    var s = jQuery("body").find(".search-click");
    s.length > 0 && jQuery(s).click(function () {
        var e = jQuery(this).closest(".site-header").find(".search-wrap"), r = e.find(".search-field");
        e.hasClass("open") ? (e.slideUp(), e.removeClass("open"), jQuery(this).find("i").removeClass("clever-icon-close").addClass("clever-icon-search-4")) : (e.slideDown(), e.addClass("open"), jQuery(this).find("i").removeClass("clever-icon-search-4").addClass("clever-icon-close"), jQuery(r).focus())
    }), jQuery(window).scroll(function () {
        jQuery(this).scrollTop() > 400 ? jQuery("#back-to-top").fadeIn() : jQuery("#back-to-top").fadeOut()
    }), jQuery("#back-to-top").click(function (e) {
        return e.preventDefault(), jQuery("html, body").animate({scrollTop: 0}, 1e3), !1
    });
    var n = '<span class="menu-arrow clever-icon-plus"></span>', u = jQuery(".mobile-menu").find(".sub-menu"), o = jQuery(".canvas-menu").find(".icon-menu"), c = jQuery(".canvas-menu").find(".icon-close");
    jQuery(u).closest(".menu-item").append(n); jQuery(o).click(function () {
        jQuery(this).closest(".canvas-menu").find(".canvas-main").css({opacity: "1", visibility: "visible"})
    }), jQuery(c).click(function () {
        jQuery(this).closest(".canvas-menu").find(".canvas-main").css({opacity: "0", visibility: "hidden"})
    }), jQuery(".mobile-menu .menu-arrow").click(function () {
        jQuery(this).closest("ul").find(".sub-menu").slideUp();
        jQuery(".mobile-menu .menu-arrow").removeClass("clever-icon-minus").addClass("clever-icon-plus");
        if(!jQuery(this).prev().is(":visible")){
            jQuery(this).prev().slideDown();
            jQuery(this).removeClass("clever-icon-plus").addClass("clever-icon-minus")
        }
        else{
            jQuery(this).removeClass("clever-icon-minus").addClass("clever-icon-plus")
        }
        });
    var l = jQuery("body").find(".rit-promotion-wrap");
    l.length > 0 && jQuery(function () {
        jQuery(".marquee").marquee({direction: "horizontal", speed: 2, delay: 0, timing: 50})
    }), jQuery(".box-toggle").each(function () {
        var e = jQuery(this).find(".link-toggle"), r = jQuery(this).find(".content-toggle");
        e.click(function (e) {
            e.preventDefault(), r.is(":visible") ? r.slideUp() : r.slideDown()
        })
    }), jQuery().waypoint && jQuery(".rit-progress").waypoint(function () {
        jQuery(this).css("visibility", "visible"), jQuery(".rit-progress").each(function () {
            var e = jQuery(this).find(".progress-bar").data("percent");
            jQuery(this).find(".progress-bar").css("width", "0%"), jQuery(this).find(".progress-bar").css("width", e + "%")
        })
    }, {triggerOnce: !0, offset: "bottom-in-view"}), jQuery(".menu-toggle").click(function () {
        var e = jQuery(this).closest(".site-header");
        e.toggleClass("open-menu")
    }), jQuery("#sticker").sticky({topSpacing: 0});
    var y = jQuery("body").find(".sticky-wrapper");
    y.length > 0 && jQuery(window).scroll(function () {
        y.hasClass("is-sticky") ? jQuery("body").addClass("adminbar-hidden") : jQuery("body").removeClass("adminbar-hidden")
    }), jQuery(".rit-element-tabs").each(function () {
        var e = jQuery(this).find(".tab-title-item").find("a"), r = jQuery(this).find(".rit-tab-content-item");
        jQuery(e).click(function (i) {
            i.preventDefault(), jQuery(e).removeClass("active"), jQuery(this).addClass("active"), jQuery(r).removeClass("active"), jQuery(this).closest(".rit-element-tabs").find("#" + jQuery(this).data("content")).addClass("active")
        })
    }), jQuery(".woocommerce-ordering .orderby, .rit-search-category").length > 0 && jQuery(".rit-search-category").selectBox(), jQuery(".vertical-menu").length > 0 && jQuery(".vertical-menu").hasClass("click") && jQuery(".vertical-menu-title span").click(function () {
        jQuery(".vertical-menu").hasClass("open") ? jQuery(".vertical-menu").removeClass("open") : jQuery(".vertical-menu").addClass("open")
    });
    var d = jQuery(".woocommerce").find(".products-category-wrap");
    jQuery("#rit-quickview-button").click(function () {
        var e = jQuery("#yith-quick-view-content").find(".product-label").html();
        alert(e), jQuery("#yith-quick-view-content").find(".images").append(e), jQuery(e).remove()
    }), e(), jQuery(window).resize(function () {
        e()
    });
    if (jQuery("body").hasClass("one-page")) {
        var j = jQuery("body").find(".entry-content > .vc_row"), Q = jQuery("body").find(".rit-one-page .one-pager");
        jQuery(j).each(function () {
            var e = jQuery(this).attr("id"), r = e.replace("parallax", "");
            jQuery(Q).append('<li><a href="#' + e + '"><span class="text">' + r + '</span><span class="icon"></span></a></li>')
        }), jQuery(".one-pager a").click(function () {
            var e = jQuery(this).attr("href");
            return jQuery("html, body").animate({scrollTop: jQuery(e).offset().top}, 1e3), !1
        });

    }
    jQuery("body").find(".rit-element-builder").hasClass("parralax-size-large") && (i(), jQuery(window).resize(function () {
        i()
    })), jQuery(".image-hover-inner").find(".content").parent().parent().hasClass("image-box-content") && (a(), jQuery(window).resize(function () {
        a()
    }));
    var h = jQuery("#mega-menu-primary > li");
    jQuery(h).hasClass("mega-menu-megamenu") && jQuery(h).closest(".mega-menu-wrap").addClass("has-megamenu");
    var g = jQuery("body").find("#myContainer");
    jQuery(g).hasClass("slider-boxed-scroller") && jQuery("#myContainer").multiscroll({
        sectionsColor: ["transparent", "transparent", "transparent", "transparent"],
        anchors: ["first", "second", "third", "four"],
        menu: "#menu",
        navigation: !0,
        loopBottom: !0,
        loopTop: !0
    }), jQuery(".rit-veno-item").venobox(), jQuery(".newsletter-email").val("Enter your email..."), jQuery(".newsletter-email").focus(function () {
        jQuery(this).val("")
    }), jQuery(".newsletter-email").blur(function () {
        jQuery(this).val("Enter your email...")
    }), jQuery(window).resize(function () {
        var e = jQuery(window).height();
        jQuery(".header-position-fixed-vertical").css("height", e)
    }), jQuery(".deal-countdown .countdown").each(function () {
        var e = jQuery(this).data("date");
        jQuery(this).hasClass("layout-3") ? jQuery(this).countdown(e, function (e) {
            jQuery(this).html(e.strftime("<span>%D<br />Day</span><span>%H<br />Hours</span><span>%M<br />Minutes</span><span>%S<br />Seconds</span>"))
        }) : jQuery(this).countdown(e, function (e) {
            jQuery(this).text(e.strftime("%Dd - %Hh - %Mm - %Ss"))
        })
    });
}), jQuery(window).load(function () {
    jQuery(".se-pre-con").fadeOut("slow"), jQuery(".product-mini").find(".rit-button").removeClass("rit-button-border-gray rit-button-has-icon").addClass("rit-button-white")
});
jQuery.fn.extend({
    layoutWoocommerce:function () {
    if(jQuery(this)[0]) {
        jQuery(this).each(function () {
            var col;
            var $this=jQuery(this);
            var wrap_w = $this.outerWidth();
            if ($this.hasClass('products-grid')||$this.hasClass('rit-element-builder')) {
                if(jQuery(window).width()>361) {
                    var item_w = jQuery(this).data('width');
                    if(item_w==undefined){
                        item_w=parseInt(jQuery(this).find('.product-item').css('min-height'),10)
                    }
                    col = Math.floor(wrap_w / item_w);
                }else{
                    col=2;
                }
                var col_w = wrap_w / col;
                $this.find('.product-item').outerWidth(col_w - 1);
            }
            if ($this.hasClass('products-list')) {
                $this.find('.product-item').outerWidth(wrap_w);
            }
            $this.find('.products').imagesLoaded( function() {
                $this.find('.products').isotope({
                    layoutMode: 'fitRows',
                    masonry: {
                        columns: col
                    }
                });
            });
        })

    }
    }
});
jQuery( document ).ready( function($){
    jQuery('.add_to_wishlist').on('click',function() {
        var $this=$(this);
        $.ajax({
            beforeSend: function () {

            },
            complete  : function () {

            },
            data      : {
                action: 'update_wishlist_count'
            },
            success   : function (data) {
                $this.parent().toggleClass('hide');$this.parent().toggleClass('show');
                $this.parents('.yith-wcwl-add-to-wishlist').find('.yith-wcwl-wishlistexistsbrowse').toggleClass('hide');
                $this.parents('.yith-wcwl-add-to-wishlist').find('.yith-wcwl-wishlistexistsbrowse').toggleClass('show');
                //do something
            },

            url: yith_wcwl_l10n.ajax_url
        });
    });
} );