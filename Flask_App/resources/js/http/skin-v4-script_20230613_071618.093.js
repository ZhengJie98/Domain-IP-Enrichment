﻿var obj = {};
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(a) {
	var d = 0;
	return function() {
		return d < a.length ? {
			done: !1,
			value: a[d++]
		}: {
			done: !0
		}
	}
};
$jscomp.arrayIterator = function(a) {
	return {
		next: $jscomp.arrayIteratorImpl(a)
	}
};
$jscomp.makeIterator = function(a) {
	var d = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
	return d ? d.call(a) : $jscomp.arrayIterator(a)
};
(function($) {
	$(window).bind("scroll",
	function() {
		if ($(this).scrollTop() > 200) {
			$(".back2top").show();
		} else {
			$(".back2top").hide();
		}
		obj.scroll_top = $(this).scrollTop();
	});
	$(document).on('click', '.setting_tool a',
	function(e) {
		if ($(this).is('.back2top')) {
			return $("html,body").animate({
				scrollTop: 0
			},
			400);
		} else {
			obj.st = $('.setting_tool');
			if ($(this).is('.sosearch') && !obj.st.is('.search')) {
				obj.st.addClass('search');
			} else if ($(this).is('.socolor') && !obj.st.is('.colors')) {
				obj.st.addClass('colors');
			} else {
				obj.st.removeClass('search');
				obj.st.removeClass('colors');
			}
		}
	});
	$(document).on('click', '.setting_tool .c ul li',
	function(e) {
		obj.lis = $(this);
		if (obj.lis.is('.sepia')) {
			localStorage.color_style = "sepia";
		} else if (obj.lis.is('.night')) {
			localStorage.color_style = "night";
		} else if (obj.lis.is('.serif')) {
			localStorage.font_style = "serif";
		} else if (obj.lis.is('.fss')) {
			localStorage.font_size = "fss";
		} else if (obj.lis.is('.fsm')) {
			localStorage.font_size = "fsm";
		} else if (obj.lis.is('.fsb')) {
			localStorage.font_size = "fsb";
		} else {
			obj.lis.is('.undefined') ? localStorage.removeItem('color_style') : localStorage.removeItem('font_style');
		}
		$("body").removeClass().addClass(localStorage.color_style || "").addClass(localStorage.font_style || "").addClass(localStorage.font_size || "");
	});
})(jQuery);

$(function(){
    if($(window).width()>991){
        var scrollTT=0
        $(window).scroll(function(){
            scrollT = $(window).scrollTop()
            if(scrollT>0){
                $('.header').addClass('scroll')
            }else{
                $('.header').removeClass('scroll')
            }
            if(scrollTT>scrollT){
                $('.header').addClass('into')
            }else{
                $('.header').removeClass('into')
            }
            scrollTT=scrollT
        })
    }else{
        $('.header').addClass('scroll into')
    }
})