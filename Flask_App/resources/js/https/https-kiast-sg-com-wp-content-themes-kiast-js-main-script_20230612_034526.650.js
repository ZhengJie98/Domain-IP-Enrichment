function updateWrapper() {
    var windowHeight = $(window).height(),
        footHeight = $(".footer-wrapper").outerHeight();
		headerHeight = $("#pageHeader").outerHeight();
    $("#wrapper").css({marginBottom:-footHeight});
	$('.pushContainer').css({height:footHeight});
	$('.home-banner figure img').css({height:windowHeight});
}

jQuery(document).ready(function () {
	updateWrapper();
	jQuery(window).resize(function() {
		updateWrapper();
	});
});

$(document).ready(function () {
	$('.nav-container .nav').meanmenu({
		meanScreenWidth:"991"	
	});
});

jQuery(document).ready(function () {
	updateContainer();
	jQuery(window).resize(function() {
		updateContainer();
	});
});
function updateContainer() {
	jQuery('.inner-menu').next().remove('a.mean-expand');
}

equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0;
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
	equalheight('.banner-group');
	equalheight('.resources-icon-pic');
});

$(window).resize(function(){
	equalheight('.banner-group');
	equalheight('.resources-icon-pic');
});

$(window).load(function() {
	$('body, #wrapper, .footer-wrapper').css({opacity:1});	
});

var sliderInit = $('.homeBannerSlider');
$(document).ready(function () {
	sliderInit.slick({
		//fade: true,
		dots: true,
		speed:2000,
		arrows: false,
		autoplay: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		autoplaySpeed:7000
	});
	sliderInit.slickAnimation();
});

$('.testimonial-slider').slick({
	dots:false,
	speed:2000,
	arrows:false,
	autoplay:true,
	infinite:true,
	slidesToShow:1,
	slidesToScroll:1,
	pauseOnHover:false,
	autoplaySpeed:5000
});

$('.sprev1').click(function(){
	$('.testimonial-slider').slick('slickPrev');
})

$('.snext1').click(function(){
	$('.testimonial-slider').slick('slickNext');
})

$('.client-slider').slick({
	dots: false,
	speed: 1000,
	arrows: true,
	infinite: true,
	slidesToShow:4,
	slidesToScroll:4,
	autoplay: true,
	focusOnSelect: true,
	accessibility: false,
	autoplaySpeed:5000,
	adaptiveHeight: true,	
	prevArrow: '<button class="left-slick slick-prev" aria-label="Previous" type="button"><i class="fas fa-arrow-circle-left"></i></button>',
	nextArrow: '<button class="right-slick slick-next" aria-label="Next" type="button"><i class="fas fa-arrow-circle-right"></i></button>',
	responsive: [
	  {
		breakpoint: 991,
		settings: {
			slidesToShow: 3,
			slidesToScroll:3,
		}
	  },
	  {
		breakpoint: 768,
		settings: {
			slidesToShow: 2,
			slidesToScroll:2,
		}
	  },
	  {
		breakpoint: 500,
		settings: {
			slidesToShow:1,
			slidesToScroll:1,
		}
	  },

	]
});

$(document).ready(function() {	
	$('.bg-img').each(function() {
		var imgUrl1 = $(this).find('img').attr('src');
		$(this).fixbg({ srcimg : imgUrl1});           
    });
	
	$('.fancybox').fancybox({	
		helpers : {
			title : {
				type : 'outside'
			},
			overlay : {
                closeClick: false
            }
		},
		closeClick : false,
        keys : {
            close: null
        }
	});	
	jQuery().UItoTop({ easingType: 'easeOutQuart' });
});

// Select all »a« elements with a parent class »links« and add a function that is executed on click
$( '.product-menu ul li a' ).on( 'click', function(e){
	
  // Define variable of the clicked »a« element (»this«) and get its href value.
  var href = $(this).attr( 'href' );
  
  // Run a scroll animation to the position of the element which has the same id like the href value.
  $( 'html, body' ).animate({
		scrollTop: $( href ).offset().top
  }, '1000' );
	
  // Prevent the browser from showing the attribute name of the clicked link in the address bar
  e.preventDefault();

});