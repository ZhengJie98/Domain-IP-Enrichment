$(function(){

    $("#pics").owlCarousel({
        loop:true,
        autoplay:true,
		nav:true,
		dots:false,
		autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1,
                margin: 15
            },
            768: {
                items: 2,
                margin: 15
            },
            991: {
                items: 3,
                margin: 24
            },
            1366: {
                items: 3,
                margin: 28
            },
			1441: {
                items: 3,
                margin: 32
            }
        },
		navText:['<a href="javascript:void();"></a>','<a href="javascript:void();"></a>']
    });	

  $("#focus").owlCarousel({
	items: 1,
	loop: true,
	autoplay: true,
	smartSpeed: 800,
	autoplayTimeout: 5000,
	responsiveClass: true,
	autoplayHoverPause: true,
	autoHeight: true,
	nav: true,
	navText:['<i></i>','<i></i>'],
	autoPlay : 3000,
    stopOnHover : true,
    paginationSpeed : 1000,
    goToFirstSpeed : 2000,
    singleItem : true,
    animateOut: 'fadeOut'
  });

  $("#video").owlCarousel({
	items:1,
	dots:false,
	loop:true,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
	autoHeight:true,
	navText:['<i></i>','<i></i>'],
	animateOut:'fadeOut'
  });
  
  $("#banner").owlCarousel({
	items:1,
	nav:true,
	loop:true,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
	autoHeight:true,
	navText:['<i></i>','<i></i>'],
	animateOut:'fadeOut'
  });
})