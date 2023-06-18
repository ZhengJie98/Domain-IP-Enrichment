// Smooth scrolling
$(document).ready(function(){
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 50
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    })
});

// Header
var $document = jQuery(document),
        $topMenu = $('.top-menu'),
        className = 'fixed';
$document.scroll(function () {
    $topMenu.toggleClass(className, $document.scrollTop() >= 50);
});
$document.ready(function () {
    $topMenu.toggleClass(className, $document.scrollTop() >= 50);
});


// On click of the button in Hero section randomly open any page, post, link on the website
jQuery(document).ready(function($) {
  // Listen for a click on the button
  $('#slider-1-slide-1-layer-2').on('click', function() {
    // Get all links on the page
    var allLinks = $('a');
    // Get all links on the site
    var siteLinks = $('a[href^="' + window.location.origin + '"]:not(.search-link)');

    // Combine links from both sources
    var links = $.merge(allLinks, siteLinks);

    // Filter out links to avoid opening links to admin pages or login pages
    links = $(links).not('[href*="wp-admin"], [href*="wp-login"], [href*="logout"], [href*="#"], [href*="javascript"], [href*="mailto"], [href*="tel"], [href*="skype"], [href*="whatsapp"], [href*="viber"], [href*="tg"], [href*="fb"], [href*="twitter"], [href*="linkedin"], [href*="instagram"], [href*="youtube"], [href*="pinterest"], [href*="tiktok"], [href*="spotify"], [href*="apple"], [href*="google"], [href*="amazon"], [href*="microsoft"], [href*="yahoo"], [href*="netflix"], [href*="ebay"], [href*="aliexpress"], [href*="wikipedia"], [href*="github"], [href*="stackoverflow"], [href*="medium"], [href*="quora"], [href*="reddit"], [href*="flickr"], [href*="dribbble"], [href*="behance"], [href*="vimeo"], [href*="twitch"], [href*="paypal"], [href*="patreon"], [href*="discord"], [href*="telegram"]');

    // Get all links to published pages and posts within the website
    var publishedLinks = links.filter(function() {
      return (this.href.indexOf(window.location.origin) === 0) && ($(this).attr('aria-hidden') !== 'true') && (!$(this).hasClass('search-link'));
    });

    // Get a random index from the publishedLinks array
    var randomIndex = Math.floor(Math.random() * publishedLinks.length);

    // Get the href of the random link
    var randomLink = publishedLinks[randomIndex].href;

    // Open the random link in the same tab
    window.location.href = randomLink;
  });
});

// // Splide JS
var splides = document.querySelectorAll('.splide');
// 1. query slider elements: are there any splide elements?
if(splides.length){
    // 2. process all instances
    for(var i=0; i<splides.length; i++){
        var splideElement = splides[i];
        //3.1 if no options are defined by 'data-splide' attribute: take these default options
        var splideDefaultOptions = 
        {
            type   : 'loop',
            rewind: true,
            perPage: 4,
            autoplay:false,
            arrows:true,
            pagination:false,
            drag:true,
            keyboard:true,
            breakpoints: {
              1200: { 
                perPage: 2,
              },
              640 : { 
                perPage: 1,
                fixedWidth: 350,
                padding: 0
              },
            },
        }
        /**
        * 3.2 if options are defined by 'data-splide' attribute: default options will we overridden
        * see documentation: https://splidejs.com/guides/options/#by-data-attribute
        **/
        
        var splide = new Splide( splideElement, splideDefaultOptions ); 
        // 3. mount/initialize this slider
        splide.mount();
    }
}

// Na stranici 'Narudbina je primljena' posle placanja karticom
$('.chevron-icon option:first-child').html(' ');

// Masonary
window.onload = function () {
  var imgDefer = document.getElementsByTagName("img");
  for (var i = 0; i < imgDefer.length; i++) {
      if (imgDefer[i].getAttribute("data-src")) {
          imgDefer[i].setAttribute("src", imgDefer[i].getAttribute("data-src"));
      }
  }
  var $container = $(".masonry");
  $container.imagesLoaded(function () {
      $container.masonry({
          percentPosition: true
      });
  });
};

// Video Section
$(document).ready(function(){
  var $iframe       = document.getElementById( 'iframe' );
  var $videoFile    = document.getElementById( 'video-file' );
  var playBtnIframe = document.getElementById( 'play-btn-iframe' );
  var playBtnVideo  = document.getElementById( 'play-btn-video' );

  $(playBtnIframe).click(function(){
    if ($(iframe).hasClass("active-video")){
      
        // $iframe.play();
      
      $(iframe).toggleClass("active-video");
    }
  });

  $(playBtnVideo).click(function(){
    if ($(videoFile).hasClass("active-video")){
      
        // $iframe.play();
      
      $(videoFile).toggleClass("active-video");
    }
  });
});

// Sticky Footer Widget Right
$(window).scroll(function() {
	var y = $(this).scrollTop();
	if(y<500) {
		$('.sticky-bar-hr').fadeOut();
	}
	if (y > 500) {
		$('.sticky-bar-hr').fadeIn();
	} 
	if(y+ $(this).height() == $(document).height()) {
		$('.sticky-bar-hr').fadeOut();
	}
});