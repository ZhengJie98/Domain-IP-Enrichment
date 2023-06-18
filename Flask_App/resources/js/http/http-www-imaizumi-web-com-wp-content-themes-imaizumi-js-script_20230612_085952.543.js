// JavaScript Document

$(function() {

    jQuery.preloadImages = function(){
        for(var i = 0; i<arguments.length; i++){
            jQuery("<img>").attr("src", arguments[i]);
        }
    };
    $.preloadImages("./img/index/nav01_o.png","./img/index/nav02_o.png","./img/index/nav03_o.png","./img/index/nav04_o.png");


	/*********************************
		 　ページ内リンクスクロール
	*********************************/
	$("a.scroll[href*='#']").easingScroll({
		easing: "easeOutQuint",
		duration: 1000
	});
	
	$("ul#changeSizeList li a.big")

	/*********************************
		 　ロールオーバー（透過）
	*********************************/
	  $('.fade1').hover(function () {
			        $(this).stop().fadeTo('slow', 0.6);
		}, function () {
			        $(this).stop().fadeTo('slow', 1.0);
	    });
			
	  $('.fade2').hover(function () {
			        $(this).stop().fadeTo('slow', 0.7);
		}, function () {
			        $(this).stop().fadeTo('slow', 1.0);
	    });
			
	  $('.fade3').hover(function () {
			        $(this).stop().fadeTo('slow', 0.8);
		}, function () {
			        $(this).stop().fadeTo('slow', 1.0);
	    });
			
	  $('.fade4').hover(function () {
			        $(this).stop().fadeTo('fast', 0.0);
		}, function () {
			        $(this).stop().fadeTo('fast', 1.0);
	    });


	/*********************************
		 　アコーディオンパネル
	*********************************/
	//普通に開け閉め
	$("div#naviOpenButton").click(function(){
		if($("nav#globalNaviSP").css("display")=="none"){
			$("nav#globalNaviSP").slideDown("fast");
			/*
			$("dl.accordion dt").removeClass("selected");
			$(this).addClass("selected");
			*/
		}
		else {
			$("nav#globalNaviSP").slideUp("fast");
		}
	});
	//お電話でのお問合せ
	$("li#telB").click(function(){
		if($("li#telC").css("display")=="none"){
			//$("li#telB").css({ width:"200%", height:"100px" });
			$("ul#contactLsp").css({ width:"100%", height:"auto", float:"none" });
			$("ul#contactRsp").css({ display:"none"});
			$("li#telC").slideDown("fast");
			//$("li#telD").slideDown("fast");
		}
		else {
			$("li#telC").slideUp("fast");
			$("ul#contactRsp").css({ display:"block"});
			$("ul#contactLsp").css({ width:"50%", height:"auto", float:"left" });
			//$("li#telD").slideUp("fast");
		}
	});
	//自動電話予約
	$("li#telE").click(function(){
		if($("li#telF").css("display")=="none"){
			//$("li#telB").css({ width:"200%", height:"100px" });
			$("ul#contactRsp").css({ width:"100%", height:"auto", float:"none" });
			$("ul#contactLsp").css({ display:"none"});
			$("li#telF").slideDown("fast");
			//$("li#telD").slideDown("fast");
		}
		else {
			$("li#telF").slideUp("fast");
			$("ul#contactLsp").css({ display:"block"});
			$("ul#contactRsp").css({ width:"50%", height:"auto", float:"right" });
			//$("li#telD").slideUp("fast");
		}
	});

	$("a#openCloseButton_smph").click(function(){
		if($("div#bnrBoxInner ul li.close").css("display")=="none"){
			$("div#bnrBoxInner ul li.close").slideDown("fast");
			$("a#openCloseButton_smph span").text("閉じる");
			$(this).addClass("close");
		}
		else {
			$("div#bnrBoxInner ul li.close").slideUp("fast");
			$("a#openCloseButton_smph span").text("全て表示");
			$(this).removeClass("close");
		}
	});


});



$(window).load(function() {

	
});