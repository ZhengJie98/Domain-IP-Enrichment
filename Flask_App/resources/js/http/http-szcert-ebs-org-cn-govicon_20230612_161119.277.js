﻿/*public*/

/*public*//*ea_h*/
/*ea_h*//*ea_ba*/
/*xn_ba_js_1_banner
var xn_ba_js_1_autoPlay = false;
var xn_ba_js_1_interval = 4000;
var bannerW = "994";
var xn_ba_js_1_nextfunc;
var xn_ba_js_1_timer;
$(document).ready(function () {
    if ($("#xn_ba_js_1_banner").length>0) {
        xn_ba_js_1_start();
    };
    $("#ea_ba,#ea_c,#ea_b").wrapAll('<div class="extra-wrapper"></div>');
});
var xn_ba_js_1_start = function () {
    var maxLen = 0;
    var index = 0;
    var prev = -1;
    var imgW, imgH, sizeW, sizeH = 0;
    var running = false;
    maxLen = $(".xn_ba_js_1_element").length;
    imgW = $(".xn_ba_js_1_bigImg").find("img").eq(0).width();
    imgH = $(".xn_ba_js_1_bigImg").find("img").eq(0).height();
    for (var i = 0; i < $(".xn_ba_js_1_element").length; i++) {
        var ele = $(".xn_ba_js_1_element").eq(i).find("img");
        ele.attr("src", ele.attr("data-original"));
    }
    var btnData = "";
    for (var i = 0; i < maxLen; i++) btnData += '<li class="xn_ba_js_1_element_btn">';
    $(".xn_ba_js_1_btn").html(btnData);
    var btn = $(".xn_ba_js_1_btn").find("li").eq(0);
    var btnW = btn.width() + Math.round(btn.css("margin-left").replace(/[a-zA-Z]/g, ""));
    $(".xn_ba_js_1_btn").css("width", maxLen * btnW);
    btn.attr("class", "xn_ba_js_1_element_btn_on");
    $(".xn_ba_js_1_banner").css("visibility", "visible");
    for (var i = 0; i < maxLen; i++) {
        $(".xn_ba_js_1_element").eq(i).attr("id", "ea_ba_no_b_" + i);
        var _pos = Math.round(imgW * (i - index) + sizeW / 2 - imgW / 2);
        if (i == index) _opa = 1;
        if (_pos > sizeW) {
            _pos -= maxLen * imgW
        } else if (_pos < -imgW) {
            _pos += maxLen * imgW
        }
        $(".xn_ba_js_1_element").eq(i).css({
            left: _pos,
            opacity: 0
        }).animate({
            opacity: _opa
        }, {
            duration: 400,
            easing: 'linear'
        })
    }
    onResize();
    $(window).resize(onResize);
    function onResize() {
        for (var i = 0; i < maxLen; i++) {
            if (bannerW == "100%") {
                sizeW = $(window).width();
            } else {
                sizeW = parseInt(bannerW);
            }
            var _pos = Math.round(imgW * (i - index) + sizeW / 2 - imgW / 2);
            var _opa = 1;
            if (i == index) _opa = 1;
            if (_pos > sizeW) {
                _pos -= maxLen * imgW
            }
            $(".xn_ba_js_1_element").eq(i).stop().css({
                left: _pos,
                opacity: _opa
            })
        }
    };
    $(".xn_ba_js_1_btn li").each(function (i) {
        $(this).click(function () {
            skipHandler((i));
        });
    });
    timerRepeat();
    function skipHandler(target) {
        if (target == index) return;
        var d = 1;
        var pure = index;
        if (target < pure) d = -1;
        var btn = $(".xn_ba_js_1_btn").find("li");
        btn.eq(pure).attr("class", "xn_ba_js_1_element_btn");
        btn.eq(target).attr("class", "xn_ba_js_1_element_btn_on");
        var len;
        if (d == 1) {
            len = target - pure;
            if (len <= 1) {
                index = target;
                nextPage();
            } else {
                for (var k = pure; k <= target; k++) {
                    index = k;
                    nextPage();
                }
            }
        } else {
            len = index - target;
            if (len <= 1) {
                index = target;
                prevPage();
            } else {
                for (var k = index; k >= target; k--) {
                    index = k;
                    prevPage();
                }
            }
        }
    }
    function timerRepeat() {
        if (!xn_ba_js_1_autoPlay) return;
        xn_ba_js_1_nextfunc = isPause;
        xn_ba_js_1_timer = setInterval(xn_ba_js_1_nextfunc, xn_ba_js_1_interval);
    }
    function isPause() {
        var isRun = true;
        if (typeof parent.runonce != 'undefined') {
            isRun = parent.runonce;
        }
        if (isRun) {
            var cur = index;
            cur++;
            if (cur > maxLen - 1) cur = 0;
            skipHandler(cur);
            return false;
        } else {
            return true;
        }
    }
    function nextPage() {
        if (xn_ba_js_1_timer) {
            clearInterval(xn_ba_js_1_timer);
            timerRepeat();
        }
        if ($(window.parent.bannerparam).length > 0) {
            window.parent.bannerparam.cur_ba_index = index;
        }
        _pict = $(".xn_ba_js_1_element");
        for (var i = 0; i < maxLen; i++) {
            var _pos = Math.round(imgW * (i - index) + sizeW / 2 - imgW / 2);
            var _opa = 1;
            if (i == index) _opa = 1;
            if (_pos > sizeW) {
                _pos -= maxLen * imgW
            } else if (_pos < -imgW * 2) {
                _pos += maxLen * imgW
            }
            _pict.eq(i).stop().css({
                left: _pos + imgW
            }).animate({
                left: _pos,
                opacity: _opa
            }, {
                duration: 700,
                easing: 'easeOutQuint'
            })
        }
    }
    function prevPage() {
        if (xn_ba_js_1_timer) {
            clearInterval(xn_ba_js_1_timer);
            timerRepeat();
        }
        if ($(window.parent.bannerparam).length > 0) {
            window.parent.bannerparam.cur_ba_index = index;
        }
        for (var i = 0; i < maxLen; i++) {
            var _pos = Math.round(imgW * (i - index) + sizeW / 2 - imgW / 2);
            if (_pos < -imgW) {
                _pos += maxLen * imgW
            } else if (_pos > sizeW + imgW) {
                _pos -= maxLen * imgW
            }
            $(".xn_ba_js_1_element").eq(i).stop().css({
                left: _pos - imgW
            }).animate({
                left: _pos
            }, {
                duration: 700,
                easing: 'easeOutQuint'
            })
        }
    }
}
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuint',
    swing: function (x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    }, easeOutQuint: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    }
});
/*end_xn_ba_js_1_banner*/
/* xn_ba_js_15_banner */
$(function(){
  	/*
  var fleng=$(".xn_ba_js_1_element").length;
    $(".xn_ba_js_1_element").each(function(){
        var _src=$(this).find("img").attr("data-original");
        console.log(_src);
        var _html='<li class="xn_ba_js_15_li" >\
                        <div class="xn_ba_js_15_img">\
                            <img src="'+ _src +'" />\
                        </div>\
                    </li>'
        $(".xn_ba_js_15_ul").append(_html);
    })
  */
    if($("#xn_ba_js_15_banner").length > 0){
        var $wrap = $("#xn_ba_js_15_banner");
        var $main = $("#xn_ba_js_15_main");
        var $ul = $("#xn_ba_js_15_ul");
        var $li = $ul.children("li");
        var $lights = $("#xn_ba_js_15_lights");
        var speed1 = 800;
        var isAutoPlay1 = true;
        var timeInterval1 = 6000;
        var $currClass = "xn_ba_js_15_lightsCurr";
        var bwh = $(document).width();
        $ul.css("width",$li.length * bwh);
        $li.css("width",bwh);
        $li.each(function(){
            $lights.append("<span></span>");
             /*var img_src = $(this).find("img").attr("src");
           $(this).find(".xn_ba_js_15_img").css({"background":"url("+img_src+") center top no-repeat","background-size":"cover"});
            $(this).find("img").remove();*/
        });
        $lights.css("width",$lights.children().length * $lights.children().outerWidth(true));               
        var _index = 1;
        $lights.children().first().addClass($currClass).siblings().removeClass($currClass);
        $lights.children().click(function(){      
          clearInterval(auto2);
            var _this = $(this);
            _index = _this.index();
            $ul.animate({"left":"-" + $li.outerWidth(true) * _index + "px"},speed1);
            _this.addClass($currClass).siblings().removeClass($currClass);
          auto2 = setInterval(autoPlay,timeInterval1);
        });
        function autoPlay(){
          clearInterval(auto2);
            if(_index < $li.length){
                $ul.animate({"left":"-" + $li.outerWidth(true) * _index + "px"},speed1);
                $lights.children().eq(_index).addClass($currClass).siblings().removeClass($currClass);
                _index++;
            }else{
                _index = 0;
                $ul.animate({"left":0},speed1);
                $lights.children().eq(0).addClass($currClass).siblings().removeClass($currClass);
                _index++;
            }
           auto2 = setInterval(autoPlay,timeInterval1);
        }
        if(isAutoPlay1){
            var auto2 = setInterval(autoPlay,timeInterval1);
            $wrap.hover(function(){
                clearInterval(auto2);
            },function(){
                auto2 = setInterval(autoPlay,timeInterval1);
            });
        }
    }
});
/* end_xn_ba_js_15_banner */
/*ea_ba*/
$(function() {
  var width_ba = $(window).width();
  var ba_elm = $(".xn_ba_js_15_img");
  ba_elm.css("width", width_ba);
  $(".xn_ba_js_15_lights").css("top", width_ba / 3.1 + "px");
  
  var auto1 = setInterval(function(){
    var height_ba = $(".xn_ba_js_15_img img").eq(0).css("height");
  if($(".xn_ba_js_15_banner").css("height") != height_ba){
  	ba_elm.css("height", height_ba);
    $(".xn_ba_js_15_banner").css("height", height_ba);
  }
    else{clearInterval(auto1);}
  },100);
	
  
	
	
	//ba_elm.css("height", width_ba / 2.9 + "px");
  
	//$(".xn_ba_js_15_banner").css("height", width_ba / 2.9 + "px");
  
	
})
/*ea_c*/
/*i_tcase*/
/*end_i_tcase*/
/*xn_c_index_131_wrap*/
	$(function(){
		var $items = $("#xn_c_index_131_wbox");
		var $out = $("#xn_c_index_131_wrap");	
		var $items_child_width = $items.children().outerWidth(true);
		var iLilen=$items.children(".xn_c_index_131_list").length;
		$items.css('width',$items_child_width*iLilen+'px');
		var $left = $("#xn_c_index_131_right");
		var $right = $("#xn_c_index_131_left");
		var isAutoPlay = true; //是否自动播放
		var speed = 500;			//滚动速度
		var timeInterval = 3000;    //间隔时间
		$left.click(function(){		
			nextImg();
		});
		$right.click(function(){
			prevImg();
		});
		function nextImg(){
			$items.stop().animate({left:"-"+$items_child_width +"px"},speed,function(){
				$items.append($items.children().first());
				$items.css("left",0);
			});	
		}			
		function prevImg(){
			$items.css('left',-$items_child_width);
			$items.prepend($items.children().last());
			$items.stop().animate({"left":0},speed);
		}
		function arrowScroll(){
			nextImg();		
		};			
		if(isAutoPlay == true){
			var auto = setInterval(arrowScroll,timeInterval);
			$out.hover(function(){
				clearInterval(auto);
			},function(){
				auto = setInterval(arrowScroll,timeInterval);
			});
		}		
	}); 
/*end_xn_c_index_131_wrap*/
/*ea_c*/
/*ea_b*/
/*foot_nav2*/
/*end_foot_nav2*/
/*foot_tel*/
/*end_foot_tel*/
/*xn_f_21_wrap*/
/*end_xn_f_21_wrap*/
/*foot_copy*/
/*end_foot_copy*/
/*xn_f_2_warp*/
/*end_xn_f_2_warp*/
/*xn_f_1_warp*/
/*end_xn_f_1_warp*/
/*ea_b*/
/*ea_bg*/
/*ea_bg*/
/*ea_m*/
/*ea_m*/
/*ea_pi*/
/*ea_pi*/
/*ea_wj*/
/*ea_wj*/
