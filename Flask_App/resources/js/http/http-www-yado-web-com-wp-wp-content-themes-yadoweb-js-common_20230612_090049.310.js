//common.js

/*--------------------------------------------------------------------------
	jquery.animate3.js
 ---------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------*
 *
 *  set transition animate
 *
 *  MIT-style license.
 *
 *  2010 Kazuma Nishihata
 *  http://blog.webcreativepark.net/2010/09/17-183446.html
 *
 *--------------------------------------------------------------------------*/
jQuery.fn.animate3 = function(prop,speed,easing,callback){
	var self = this;
	if (jQuery.isEmptyObject(prop)) {
		return self;
	}
	if(speed && !isNaN(speed)){
		speed = speed+"ms";
	}
	var def = $.Deferred();

	callback = callback? callback:function(){};

	self
		.css("transition","all "+speed+" "+easing)
		.unbind("webkitTransitionEnd")
		.one("webkitTransitionEnd",function(){
			self.css("transition","");
			setTimeout(function(){
				def.resolveWith(self);
			},1);
			callback.apply(self);
		}).css(prop);

	return def.promise(self);
};


/*---------------------------------------------
	UserAgent
  ---------------------------------------------*/
function ua(target) {
	var nut = navigator.userAgent.toLowerCase();
	var uaCheck = {
		"ie"		:nut.indexOf("msie") != -1,
		"ie6"		:nut.indexOf("msie 6") != -1,
		"ie7"		:nut.indexOf("msie 7") != -1,
		"ff"		:nut.indexOf("firefox") != -1,
		"safari"	:nut.indexOf("safari") != -1,
		"chrome"	:nut.indexOf("chrome") != -1,
		"opera"		:nut.indexOf("opera") != -1,
		"smartphone"	:nut.indexOf("iphone") != -1 || nut.indexOf("ipad") != -1 || nut.indexOf("ipod") != -1 || nut.indexOf("android") != -1,
		"win"		:navigator.appVersion.indexOf ("Win"),
		"mac"		:navigator.appVersion.indexOf ("Mac")
	};
	return uaCheck[target];
}

/*---------------------------------------------
	JavaScript On? Off?
  ---------------------------------------------*/
jQuery("html").addClass("jsOn");
if(ua("win")) jQuery("html").addClass("win");
if(ua("smartphone")) jQuery("html").addClass("smartphone");


/*---------------------------------------------
	loading
 ---------------------------------------------*/
jQuery(window).load(function(){
	jQuery("#loader").fadeOut(800,function(){
		//if(!ua("ie6"))jQuery("html,body").css("height","auto");
		jQuery("#loader").remove();
	});
});

/*---------------------------------------------
	enforce "target=new" (all external link (http//: ~ ))
 ---------------------------------------------*/
jQuery(document).ready( function () {
    jQuery("a[href^='http']:not([href*='" + location.hostname + "'])").attr('target', 'new');
});

/*---------------------------------------------
	スクロールイベント
 ---------------------------------------------*/
function scrollEvent () {
	jQuery(window).scroll(function (){
		if(jQuery(this).scrollTop() > 1400){
			//
		}else{
			//
		}
	});
};

jQuery(document).ready(function() {
	scrollEvent();
});

/*---------------------------------------------
	anchor-link
 ---------------------------------------------*/
jQuery(function(jQuery) {
	jQuery('.anchor-link').click(function(){
		jQuery('html,body').animate({ scrollTop: jQuery(jQuery(this).attr("href")).offset().top });
		return false;
	});
});

/*---------------------------------------------
	accordion
 ---------------------------------------------*/
jQuery(function(){
	jQuery(".acc_body").hide();
	jQuery(".acc_head").css("cursor","pointer");
	jQuery(".acc_head").click(function(){
		jQuery(this).next().slideToggle('slow');
		if(jQuery(".acc_head").hasClass("acc_headOff")){
        	jQuery(".acc_headOff").addClass("acc_headOn").removeClass("acc_headOff");
        }else{
        	jQuery(".acc_headOn").addClass("acc_headOff").removeClass("acc_headOn");
        }
	});
});

	jQuery(".acc_close").click(function(){
		jQuery(this).parent().slideToggle('slow');
		if(jQuery(".acc_head").hasClass("acc_headOff")){
        	jQuery(".acc_headOff").addClass("acc_headOn").removeClass("acc_headOff");
        }else{
        	jQuery(".acc_headOn").addClass("acc_headOff").removeClass("acc_headOn");
        }
	});


/*---------------------------------------------
	rollover
 ---------------------------------------------*/
jQuery(function(jQuery) {
	var postfix = '_on';
	jQuery('a.imgover img').not('[src*="'+ postfix +'."]').each(function() {
		var img = jQuery(this);
		var src = img.attr('src');
		var src_on = src.substr(0, src.lastIndexOf('.'))
				   + postfix
				   + src.substring(src.lastIndexOf('.'));
		jQuery('<img>').attr('src', src_on);
		img.hover(function() {
			img.attr('src', src_on);
		}, function() {
			img.attr('src', src);
		});
	});
});


/*---------------------------------------------
	Delayd Animation
 ---------------------------------------------*/
jQuery(document).ready(function() {
	//遅延表示アニメーション
	jQuery('.delayedFadeIn').css({"opacity":"0"});
	setTimeout(function(){
		jQuery('.delayedFadeIn').css({"opacity":"1"});
	},1000);

	jQuery('.delayedFadeIn2').css({"opacity":"0"});
	setTimeout(function(){
		jQuery('.delayedFadeIn2').css({"opacity":"1"});
	},2000);
});



/*---------------------------------------------
	トグルナビゲーション（サイド）
 ---------------------------------------------*/
var nav = jQuery('#nav');
var opener = jQuery(".button-open");
var closer = jQuery(".button-close");
var page = jQuery('#page');

nav.css({ "display":"block"});

function slideclose() {
	//スライド閉じるアニメーション
	nav.removeClass("on");
	closer.hide();
	opener.show();
}
function slideopen() {
	//スライド開くアニメーション
	nav.addClass("on");
	closer.show();
	opener.hide();
}

jQuery(document).ready(function () {
	opener.click(function(){
		slideopen();
	});

	closer.click(function(){
		slideclose();
	});

	//ページ本体クリックでスライド閉じる
	page.click(function(){
		slideclose();
	});
});


/*---------------------------------------------
	Contact Form 7 補助
 ---------------------------------------------*/

jQuery(document).ready(function () {
	jQuery(".wpcf7-response-output").click(function(){
		jQuery(this).css({"display":"none"});
	});
});

/*---------------------------------------------
	ウィンドウサイズの取得
 ---------------------------------------------*/
function getWindowSize() {
	var sW = window.innerWidth;
	var sH = window.innerHeight;

	//クラス名window-scaleの高さをウィンドウサイズに合わせる
	jQuery('.window-scale').css("height",sH);
}

jQuery(document).ready(function() {
	//ウィンドウサイズ取得実行
	getWindowSize();

	//ウィンドウがリサイズされる度にウィンドウサイズ取得実行
	window.onresize = getWindowSize;
});

/*---------------------------------------------

	UserAgent Junction

 ---------------------------------------------*/

if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	/*---------------------------------------------

		Mobile Only

	 ---------------------------------------------*/
	/*---------------------------------------------
		タッチエリアの確保
	 ---------------------------------------------*/
	jQuery(function(jQuery){
	    jQuery( 'a, div, .box' )
	      .bind( 'touchstart', function(){
	        jQuery( this ).addClass( 'hover' );
	    }).bind( 'touchend', function(){
	        jQuery( this ).removeClass( 'hover' );
	    });
	});


}

else {
	/*---------------------------------------------

		PC Only

	 ---------------------------------------------*/


};
