(function($){
  $(function(){
    // Wrapにファイル名をclassとして付与
    var url = location.href;
    var filename = '';
    if(url.match(".+/(.+?)\.[a-z]+([\?#;].*)?$") != null) {
      var filename = url.match(".+/(.+?)\.[a-z]+([\?#;].*)?$")[1];
    }
    var classname = filename + 'Ctg' + ' cat__top';
    $('#Wrap').addClass(classname);

    // サムネイルbg生成
    var tmpArr = [];
    $('#imgstore > ul li').each(function(){
      tmpArr.push($('img',this).attr('src'));
    });
    var arrLen = tmpArr.length;
    for(var i = 0;i < arrLen;i++){
      $('#main_img .gallery-thumbs ul').append('<li class="swiper-slide" style="background-image:url(' + tmpArr[i] + ');"></li>');
    }

    // main slider initialize
    var slideLen = $('.gallery-wrapper .swiper-slide').length;
    $('.gallery-thumbs').width($('.gallery-thumbs .gallerybox li').width() * slideLen);
    var gallery = new Swiper('.gallery-content', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 'auto',
      spaceBetween: 0,
      loop:true,
      loopedSlides: slideLen,
      centeredSlides:true,
      autoplay: 3000,
      preventClicks: false
    });
    // thumbnail initialize
    var thumbs = new Swiper('.gallery-thumbs',{
      slidesPerView: slideLen,
      spaceBetween: 10,
      touchRatio: 0.2,
      loop:true,
      loopedSlides: slideLen, //looped slides should be the same
      slideToClickedSlide: 3000,
      grabCursor: true,
    });
    gallery.params.control = thumbs;
    thumbs.params.control = gallery;

    //new item and ranking scroll initialize
//    var newLen = $('#new_box .swiper-slide').length;
//    var innerW = $('#new_box .swiper-slide').outerWidth(true) * newLen;
//    $('#new_box .swiper-container > .itemCnt').width(innerW);
    var newitemScroll = new Swiper('#new_box .swiper-container',{
      nextButton: '.button-next',
      prevButton: '.button-prev',
      setWrapperSize: true,
      spaceBetween: 15,
      slidesPerView: 4,
      autoplay: 3000,
      loop:true
    });
    var innerW2 = $('#ranking .item-h-scroll .swiper-slide').outerWidth(true) * $('#ranking .item-h-scroll .swiper-slide').length;
    $('#ranking .item-h-scroll > .itemCnt').width(innerW2);
    var rankitemScroll = new Swiper('#ranking .item-h-scroll',{
      scrollbar: '.swiper-scrollbar',
      scrollbarHide: true,
      slidesPerView: 'auto',
      spaceBetween: 0,
      grabCursor: true,
      preventClicks: false
    });
    $('#gift .item-h-scroll').each(function(){
     var innerW3 = $('.swiper-slide',this).outerWidth(true) * $('.swiper-slide',this).length;
      $('#gift .item-h-scroll > .itemCnt').width(innerW3);
      var rankitemScroll = new Swiper(this,{
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: true,
        slidesPerView: 'auto',
        spaceBetween: 0,
        grabCursor: true,
        preventClicks: false
      });

    });

/*    var innerW3 = $('#gift .item-h-scroll .swiper-slide').outerWidth(true) * $('#gift .item-h-scroll .swiper-slide').length;
    $('#gift .item-h-scroll > .itemCnt').width(innerW3);
    var rankitemScroll = new Swiper('#gift .item-h-scroll',{
      scrollbar: '.swiper-scrollbar',
      scrollbarHide: true,
      slidesPerView: 'auto',
      spaceBetween: 0,
      grabCursor: true,
      preventClicks: false
    });*/
    // menu fixed
    menuPosition();

    $('#brand_box ul li').each(function(){
      var ck = $('img',this);
      ck.attr('src',ck.attr('src'));
      ck.error(function(){
        ck.hide();
        ck.next().css('margin-left','89px');
      });
    });
  });
})(jQuery);