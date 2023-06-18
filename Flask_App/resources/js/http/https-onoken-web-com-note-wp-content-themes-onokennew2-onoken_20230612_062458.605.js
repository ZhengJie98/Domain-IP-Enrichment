//スクロール
jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
        jQuery('#pagetop').fadeIn();
        jQuery('#pagenext').fadeIn();
		jQuery('#pageprevious').fadeIn();
		jQuery('#pcontact').fadeIn();
    } else {
        jQuery('#pagetop').fadeOut();
        jQuery('#pagenext').fadeOut();
		jQuery('#pageprevious').fadeOut();
		jQuery('#pcontact').fadeOut();

    }
});


jQuery(function($){
     $("#pagetop a").click(function(){
     $('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'fast','swing');
     return false;
     })
	
     $("#pagenext a").click(function(){
     $('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'fast','swing');
     return false;
     })
	
     $("#pageprevious a").click(function(){
     $('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'fast','swing');
     return false;
     })
	
     $("#pcontact a").click(function(){
     $('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'fast','swing');
     return false;
     })
});


////スムーズスクロール
jQuery(function(){
   // #で始まるアンカーをクリックした場合に処理
   jQuery('a[href^=#]').click(function() {
	  // スクロールの速度
	  var speed = 400; // ミリ秒
	  // アンカーの値取得
	  var href= jQuery(this).attr("href");
	  // 移動先を取得
	  var target = jQuery(href == "#" || href == "" ? 'html' : href);
	  // 移動先を数値で取得
	  var position = target.offset().top;
	  // スムーススクロール
	  jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
	  return false;
   });
});

//フェードイン
jQuery(function(){
jQuery('.entry img').css('visibility','hidden');
jQuery(window).scroll(function(){
 var windowHeight = jQuery(window).height(),
     topWindow = jQuery(window).scrollTop();
 jQuery('.entry img').each(function(){
  var targetPosition = jQuery(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   jQuery(this).addClass("fadeInDown");
  }
 });
});
});

jQuery(function(){
jQuery('.entry img').css('visibility','hidden');
jQuery(document).ready( function(){
 var windowHeight = jQuery(window).height(),
     topWindow = jQuery(window).scrollTop();
 jQuery('.entry img').each(function(){
  var targetPosition = jQuery(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
   jQuery(this).addClass("fadeInDown");
  }
 });
});
});

