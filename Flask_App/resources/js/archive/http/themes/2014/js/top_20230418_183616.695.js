$(document).ready(function() {

	var $win = $(window);

	$(window).scroll(function(){
        if ($(this).scrollTop() > 25) {
            $('.top-of-page-link').fadeIn();
			} else {
            $('.top-of-page-link').fadeOut();
		}
	});

	$('.top-of-page-link').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
});