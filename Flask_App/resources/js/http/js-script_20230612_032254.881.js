var $body = $('html, body');
$(document).on('click', 'a[href^="#"]', function() {
	var top = 0;
	if(this.hash != '#' && this.hash != '' && $(this.hash).length) {
		top = $(this.hash).offset().top;
	}
	$body.stop(true, false).animate({scrollTop: top}, 500);
	return false;
});
