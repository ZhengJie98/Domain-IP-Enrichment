(function($) {
  "use strict";
	
	$('.navbar-nav').slicknav({
		label: ""
	});

	$('.slicknav_menu').find('.dropdown-menu').removeClass('dropdown-menu');

	var home_url = $('#home_url').attr('href');
	var blogname = $('#home_url').text();
    var logo = $('#logo').attr('src');
    if( typeof logo !== typeof undefined  ){
        $('.slicknav_menu').prepend('<div class="navbar-brand vertical-align"><a href="' + home_url + '"><img src="' + logo + '" alt=""></a></div>');
    } else {
    	$('.slicknav_menu').prepend('<div class="navbar-brand vertical-align"><a href="' + home_url + '">' + blogname + '</a></div>');
    }

	/* -------------------------------------------------------------------------
    ============================ Navigation menu ===============================
    --------------------------------------------------------------------------*/
    $('.nav-wrapper .dropdown').mouseenter(function(){
      $(this).addClass('open');
      $('.nav-wrapper .dropdown > a').attr('aria-expanded', 'true');
    }).mouseleave(function(){
      $(this).removeClass('open');
      $('.nav-wrapper .dropdown > a').attr('aria-expanded', 'false');
    });

	menuStyle();

	$(document).scroll(function(){
		menuStyle();
	});

	function menuStyle(){
		var scroll = $(document).scrollTop();

		if( scroll > 0 ){
			var back = "#fff";
			var text = "#333";

			$('.nav-wrapper').css({
		    	"background-color": back,
			    "border-bottom": "1px solid #e0e1e1",
			    "-webkit-transition": "all .5s",
    			"transition": "all .5s",
			});

			$('a#home_url').css({
				"color": text
			});

		} else {
			var back = "rgba(0,0,0,.3)";
			var text = "#fff";

			$('.nav-wrapper').css({
		    	"background-color": back,
			    "border-color": "transparent",
			});

			$('a#home_url').css({
				"color": text
			});
		}

		var x = ".nav-wrapper .navbar-nav > .active > a, .nav-wrapper .navbar-nav > .active > a:hover, .nav-wrapper .navbar-nav > .active > a:focus";
		$(x).css({
			"color": text
		});

		$('.nav-wrapper .navbar-nav > li > a').css({
			"color": text
		});

		$('.nav-wrapper .navbar-brand').css({
			"color": text
		});
	}

	$( "iframe" ).wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );
	$( ".psseo-singel-post-content .psseo-full-post-content img" ).addClass("img-responsive");
	$('.psseo-full-post-content table').addClass("table table-bordered");

})(jQuery);

