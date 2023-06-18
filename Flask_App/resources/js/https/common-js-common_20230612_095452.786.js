
// JavaScript Document


	$(function() {
		
		    // viewPort 強制設定（iPadはPC VIEWを表示）
		    var ua = navigator.userAgent;
		    if((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)){
		        $('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1">');
		    } else {
		        $('head').prepend('<meta name="viewport" content="width=1260">');
		    }



			//ページトップへ
		    var topBtn = $('#page-top');    
		    topBtn.hide();
		    //スクロールが100に達したらボタン表示
		    $(window).scroll(function () {
		        if ($(this).scrollTop() > 100) {
		            topBtn.fadeIn();
		        } else {
		            topBtn.fadeOut();
		        }
		    });
		    //スクロールしてトップ
		    topBtn.click(function () {
		        $('body,html').animate({
		            scrollTop: 0
		        }, 500);
		        return false;
		    });
		    
		    
	// ページ内リンク スムーススクロール
	$('a[href^="#"]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		//ヘッダーの高さを取得
		var header = $('header').height();
		//ヘッダーの高さを引く
		var position = target.offset().top - header;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
    
			
		  
		

					
		//select Menu
		$('.mySelectBoxClass').customSelect();
		
	});