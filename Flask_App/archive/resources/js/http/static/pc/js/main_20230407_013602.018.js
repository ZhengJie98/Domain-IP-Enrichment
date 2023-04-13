// ========== main.js ==========
$(function() {
	// ========== header-nav ==========
	jQuery("#nav").slide({ 
	type:"menu",// 效果类型，针对菜单/导航而引入的参数（默认slide）
	titCell:".nLi", //鼠标触发对象
	targetCell:".sub", //titCell里面包含的要显示/消失的对象
	effect:"slideDown", //targetCell下拉效果
	delayTime:300 , //效果时间
	triggerTime:150, //鼠标延迟触发时间（默认150）
	returnDefault:true //鼠标移走后返回默认状态，例如默认频道是“预告片”，鼠标移走后会返回“预告片”（默认false）
	});
	// ========== solution ==========
	$(".solution-slide li:nth-child(1) i").addClass('fa-building-o');
	$(".solution-slide li:nth-child(2) i").addClass('fa-line-chart');
	$(".solution-slide li:nth-child(3) i").addClass('fa-laptop');
	$(".solution-slide li:nth-child(4) i").addClass('fa-google-plus');
	$(".solution-slide li:nth-child(5) i").addClass('fa-diamond');
	$(".solution-slide li:nth-child(6) i").addClass('fa-shopping-cart');
	$(".solution-slide li:nth-child(7) i").addClass('fa-university');
	$(".solution-slide li:nth-child(8) i").addClass('fa-mobile');
	// ========== qr-code ==========
	var qrcode;
	jQuery(".qr-code ul li").hover(function(){
		var curItem = jQuery(this);
		qrcode = setTimeout(function(){//延时触发
			curItem.find(".qr-code-img").slideDown('fast');
			qrcode = null;
		});
	}, function(){
		if(qrcode!=null)clearTimeout(qr);
		jQuery(this).find(".qr-code-img").slideUp('fast');
	});
	// ========== gotoTop ==========
  $("#back-top").hide();  //首先将gotoTop隐藏
	$(window).scroll(function() {
    var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
    var documentheight = parseFloat($(document).height());
		if (documentheight - totalheight <= 1000){ //当滚动条距底部<400像素时显示，否则消失
      $("#back-top").fadeIn(1500);
    } else {
      $("#back-top").fadeOut(1500);
    }
  });
  $("#back-top").click(function() { //当点击跳转链接后，回到页面顶部位置
    $('body,html').animate({
      scrollTop: 0
    },
    1000, "easeInOutQuad");
    return false;
  });
	// ========== alertbox ==========
	setTimeout(function(){
		$("#alertbox").show();
	},10000);
	  $("#alertbox .close").on('click', function() {
		$("#alertbox").hide();
	});
});
// ========== cases ==========
function boxMoveUp(e){ //移入图片动画
	// var e = this;
	$(e).find('img').css({transition:'0s'});
	var t = $(e).height(),
			i = $(e).find("img").height(),
			n = i - t;
	var time = n/i;
	times = (3*time).toFixed(1);
	n > 0 && $(e).find("img").css({ transform: "translateY(-" + n + "px)",transition:times+"s" })
}
function boxMoveDown(e){ //移出图片动画
	var t = $(e).height(),
			i = $(e).find("img").height(),
			n = i - t;
	var ot = n/i;
	ots = (3*ot).toFixed(1);
	$(e).find("img").css({transform:"translateY(0px)",transition:ots+'s'})
}
// ========== livechat-girl ==========
(function($) {
	setInterval(function(){
		if($(".animated-circles").hasClass("animated")){
			$(".animated-circles").removeClass("animated");
		}else{
			$(".animated-circles").addClass('animated');
		}
	},3000);
	var wait = setInterval(function(){
		$(".livechat-hint").removeClass("show_hint").addClass("hide_hint");
		clearInterval(wait);
	},4500);
	$(".livechat-girl").hover(function(){
		clearInterval(wait);
		$(".livechat-hint").removeClass("hide_hint").addClass("show_hint");
	},function(){
		$(".livechat-hint").removeClass("show_hint").addClass("hide_hint");
	}).click(function(){
		if(isMobile){
			 window.location.href = 'tencent://message/?uin=907850562&Site=在线咨询&Menu=yes';
		}else{
			var oWidth = 640,
				  oHeight = 360,
				  top = ($(window).height()/2)-(oHeight/2),
				  left = ($(window).width()/2)-(oWidth/2);
			window.open('tencent://message/?uin=907850562&Site=在线咨询&Menu=yes','','width='+oWidth+',height='+oHeight+',scrollbars=yes,top='+top+',left='+left+',resizable=yes');
		}
	});
})(jQuery);