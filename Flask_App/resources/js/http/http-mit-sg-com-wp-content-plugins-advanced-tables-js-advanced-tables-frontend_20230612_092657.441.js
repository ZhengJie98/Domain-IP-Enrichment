jQuery(document).ready(function($){
	'use strict';

	var $window = $(window),
		$tabs = $("#lptw-tables-responsive-tabs");

	function setCellsDisplay(){
		var windowWidth = $window.width();
		if (windowWidth < 640) {
			$('.lptw-advanced-table .responsive').each(function(){
				$('td').each(function(){
					var content = $(this).html();
					if (content == '') {
						$(this).css('display', 'none');
					} else {
						$(this).css('display', 'block');
					}
				});
			});
		} else {
			$('.lptw-advanced-table .responsive').each(function(){
				$('td').each(function(){
					$(this).css('display', 'table-cell');
				});
			});
		}
	}

	// Execute on load
	setCellsDisplay();
	// Bind event listener
	$(window).resize(setCellsDisplay);


	// initialize tabs
	$tabs.tabs();

	// add responsive feature for tabs
	$tabs.responsiveTabs();


});
