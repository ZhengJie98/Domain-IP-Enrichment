jQuery(function($) {         

// add a class to parent of mousehover element to style it
$(".home-industry-content").hover(function() {
    $(this).parent().addClass("blue-overlay");
}, function() {
    $(this).parent().removeClass("blue-overlay");
});

$(".home-industry-title").hover(function() {
    $(this).parent().addClass("blue-overlay");
}, function() {
    $(this).parent().removeClass("blue-overlay");
});


// collapsible mobile menu
 function setup_collapsible_submenus() {
        var $menu = $('#mobile_menu'),
            top_level_link = '#mobile_menu .menu-item-has-children > a';
             
        $menu.find('a').each(function() {
            $(this).off('click');
              
            if ( $(this).is(top_level_link) ) {
                $(this).attr('href', '#');
            }
              
            if ( ! $(this).siblings('.sub-menu').length ) {
                $(this).on('click', function(event) {
                    $(this).parents('.mobile_nav').trigger('click');
                });
            } else {
                $(this).on('click', function(event) {
                    event.preventDefault();
                    $(this).parent().toggleClass('visible');
                });
            }
        });
    }
      
    $(window).load(function() {
        setTimeout(function() {
            setup_collapsible_submenus();
        }, 700);
    });
	
	
// open map detail by default	
setTimeout(function(){

		$this_map_container = $('.et_pb_map_container'); 
		$this_map_container.find('.et_pb_map_pin').each(function(){
			var $this_marker = $(this);

			var marker = new google.maps.Marker({
				position: new google.maps.LatLng( parseFloat( $this_marker.attr('data-lat') ) , parseFloat( $this_marker.attr('data-lng') ) ),
				map: $this_map_container.data('map'),
				title: $this_marker.attr('data-title'),
				icon: { url: et_pb_custom.builder_images_uri + 'https://divibooster-6d4b.kxcdn.com/marker.png', size: new google.maps.Size( 46, 43 ), anchor: new google.maps.Point( 16, 43 ) },
				shape: { coord: [1, 1, 46, 43], type: 'rect' },
				anchorPoint: new google.maps.Point(0, -45),
				opacity: 0
			});
			
			if ( $this_marker.find('.infowindow').length ) {
				var infowindow = new google.maps.InfoWindow({
					content: $this_marker.html()
				});
				
				infowindow.open( $this_map_container.data('map'), marker );

				google.maps.event.addListener( $this_map_container.data('map'), 'click', function() {
					infowindow.close();
					marker.setMap(null);
				});
				
				google.maps.event.addListener(infowindow, 'closeclick', function() {
					infowindow.close();
					marker.setMap(null);
				});
			}
		});
		
	}, 1000);	

   
}); 

