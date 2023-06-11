jQuery(document).ready(function($){

  var gallCount = 0;
  var curGall = 0;

  $('.light-box figure a img').each(function(){

    initLightBox( $(this) );

  });

  $('img.light-box').each(function(){

    $(this).wrap( '<a href="' + $(this).attr('src') + '"></a>' );

    initLightBox( $(this) );

  });

  function initLightBox( image ) {

    if ( image.parent().is( 'a' ) && !image.parent().hasClass( 'woocommerce-LoopProduct-link' ) && !image.parent().parent().hasClass( 'woocommerce-product-gallery__image' ) && !image.parent().hasClass('prettyphoto') ) {

      var link = image.parent();

      link.attr( 'data-full-image', link.attr('href') );
      link.attr( 'href', 'javascript:void(0)' );
      link.attr( 'data-lightbox', 'true' );
      link.attr( 'data-lightbox-id', gallCount );
      gallCount++;

    }

  }

  $('a[data-lightbox="true"]').click(function(){

    var img = $(this).attr('data-full-image');
    curGall = $(this).attr('data-lightbox-id');

    $('#lightbox-image').attr('src', img);
    $('.rb-lightbox').addClass('show');

  });

  $('.rb-lightbox .close').click(function(){

    $('.rb-lightbox').removeClass('show');

  });

  $('.rb-lightbox .background').click(function(){

    $('.rb-lightbox').removeClass('show');

  });

});
