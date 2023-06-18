/**
Custom module for you to write your own javascript functions
**/
var Main = function () {
	
    // external window links in pages and modals	
	var externalWindows = function () {
	    function openWindow() {
	        window.open($(this).attr('href')); 
	        return false;
	    }
	    
	    $("a[data-window='external']").click(openWindow);
	};

	//scroll to top button w options
	var scrolltoTop = function () {
	
		scrollSettings = {
			wrapper: $('body'),
			offset: 200,
			buttonClass: 'scroll-to-top', //remove hidden mobile if you want
			iconClass: 'fa fa-chevron-up',
			delay: 500,
			visibleMobile: false,
			label: false
		};

		// create markup to add
		el = $('<a />')
			.addClass(scrollSettings.buttonClass)
			.attr({
				'href': '#header',
			})
			.append(
				$('<i />')
				.addClass(scrollSettings.iconClass)
		);

		// visible on mobile?
		if (!scrollSettings.visibleMobile)
		{
			el.addClass('hidden-mobile');
		}

		// label?
		if (scrollSettings.label)
		{
			el.append(
				$('<span />').html(scrollSettings.label)
			);
		}
		
		//append markup to body
		scrollSettings.wrapper.append(el);
		
		// click action
		$('.scroll-to-top, .scroll-to-top2 a').on('click', function(e)
		{
			e.preventDefault();
			$('body, html').animate({
				scrollTop: 0
			}, scrollSettings.delay);
			return false;
		});

		//set initially to false
		_isScrolling = false;

		// show/hide button on scroll
		$(window).scroll(function()
		{
			if (!_isScrolling)
			{
				_isScrolling = true;

				if ($(window).scrollTop() > scrollSettings.offset)
				{
					el.stop(true, true).addClass('visible');
					_isScrolling = false;

				}
				else
				{
					el.stop(true, true).removeClass('visible');
					_isScrolling = false;
				}
			}
		});
	};
	
	//init tooltips
	var tooltips = function () {
		$('[rel~="tooltip"]').tooltip();
	};    
    
    // public functions
    return {

        //main function
        init: function () {
            //initialize something here
            externalWindows(); //external window links
            scrolltoTop(); //scroll to top button
            tooltips(); //tooltips
        }

    };

}();