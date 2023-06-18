(function($){
  // fixed menu
  var menuPosition = function(){
    var menu = $('#Header .menu_wrapper');
    var h = $('#Header').outerHeight();
    $(window).scroll(function(){
      if($(this).scrollTop() > h ){
        menu.addClass('fixed');
      } else {
        menu.removeClass('fixed');
      }
    });
  }

  //toggle sns btn
  var toggleSNSBtn = function(e){
    e.preventDefault();
    var tgt = $(this).attr('href');
    if($(tgt).hasClass('fadein')){
      $(tgt).removeClass('fadein');
    } else {
      $(tgt).addClass('fadein');
    }
  }


  $(function(){
    // menu fixed
    menuPosition();

    // sns btn click
    $('#btn_instagram').live('click',toggleSNSBtn);
    $('#instaBox .btn_close').live('click',function(){
      $(this).parents('#instaBox').removeClass('fadein');
    });
  });
})(jQuery);