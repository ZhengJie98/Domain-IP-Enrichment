"use strict";

// Window Load
$(window).on('load', function(){
	/*======== Banner Height ========*/
	if ($("#banner").length) {
		var winWidth=$(window).width();
		var winHeight=$(window).height();
		$('#wrapper').css('min-height',winHeight +'px');
		$(".banner-thumb").css('height',winHeight +'px');
	}

	headerHeight(); //Sticky Header
});

// Window Ready
$(function($) {
	$('#header nav > li > a').each(function(){
		var a = $(this),
			link = a.prop('href'),
			currentLink = window.location.href;
		a.on('click', function(e) {
			var href = a.attr('href').replace('/', ''), id;
			if(href.indexOf('#') > -1){
				e.preventDefault();
				$('html, body').animate({
					scrollTop: $(href).offset().top - 50
				}, 500);
				history.pushState(null, '', href);``
			}
		});
		if (currentLink.slice(-1) == '/') {
			currentLink = currentLink.substring(0, currentLink.length - 1);
		}
		if (link.slice(-1) == '/') {
			link = link.substring(0, link.length - 1);
		}
		if (link == currentLink) {
			a.closest('li').addClass('active');
		}
	});
	/*======== Banner Slider ========*/
	if ($("#banner").length) {
		$('.banner-img-slider').slick({
			infinite: true,
			speed: 500,
			fade: true,
			cssEase: 'linear',
		});
	}
	/*======== Latest Properties Slider ========*/
	if ($("#latest-properties").length) {
		$('.properties-slider').slick({
			dots: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows:false,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
						slidesToScroll:2
					}
				},
				{
				breakpoint:639,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}],
		});
	}
	/*======== What Client Say Slider ========*/
	if ($("#client-say").length) {
		$('.client-say-slider').slick({
			dots: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows:false,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
						slidesToScroll:2
					}
				},
				{
				breakpoint:639,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}],
		});
	}
	/*======== Abount Agent Slider ========*/
	if ($("#about-agent").length) {
		$('.agent-slider').slick({
			infinite: true,
			speed: 500,
			fade: true,
			cssEase: 'linear',
		});
	}
	/*======== Our Clients Slider ========*/
	if ($("#our-clients").length) {
		$('.clients-slider').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1199,
					settings: {
						slidesToShow: 5,
						slidesToScroll:1,
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 639,
					settings: {
						slidesToShow: 3,
						slidesToScroll:3
					}
				},
				{
				breakpoint: 479,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}],
		});
	}
	/*======== Property Slider ========*/
	if ($(".property-img-slider").length) {
		var $status = $('.get-the-title');
		var $slickElement = $('.property-img-slider');

		$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			$status.text(i + '/' + slick.slideCount);
		});
		$slickElement.slick({
        	autoplay: false,
			autoHeight:true
    	});
	}
	/*======== Banner Height ========*/
	if ($("#banner").length) {
		var winWidth=$(window).width();
		var winHeight=$(window).height();
		$('#wrapper').css('min-height',winHeight +'px');
		$(".banner-thumb").css('height',winHeight +'px');
	}

	searchBox(); //SearchBox
	headerHeight(); //Sticky Header
	SubmenuToggle(); // Mobile Menu
	showFilter(); // Show Filters

	// Counter JS
	if ($(".counter").length) {
		$('.counter').counterUp({
			delay: 10,
			time:1000
		});
	}

	//Copyright Year
	var currentYear = (new Date).getFullYear();
	$("#footer .copyright .year").text(currentYear);
});


// Window Resize
$(window).on('resize', function(){
	/*======== Banner Height ========*/
	if ($("#banner").length) {
		var winWidth=$(window).width();
		var winHeight=$(window).height();
		$('#wrapper').css('min-height',winHeight +'px');
		$(".banner-thumb").css('height',winHeight +'px');
	}

	/*======== Home Sticky Navigation ========*/
	if($(".homePage").length){
		$(window).scroll(function() {
			var banner_height = $("#banner").outerHeight();
			var header_height = $("#header").outerHeight();
			var scroll_height = banner_height - header_height;
			var navbar = $(".navbar");
			if($(window).scrollTop() > scroll_height ){
				var header_height = $("#header").outerHeight();
				navbar.addClass("fixed");
				navbar.css("top",header_height + "px");
			}
			else{
				navbar.removeClass("fixed");
				navbar.css("top", "0px");
			}
		});
	}
	searchBox(); //SearchBox
	headerHeight(); //Sticky Header
});

$(window).on('scroll', function(){
	/*======== Home Sticky Header ========*/
	var header = $("#header");
	if($(window).scrollTop() > 0 )
	{
		header.addClass("fixed");
	}
	else
	{
		header.removeClass("fixed");
	}

	/*======== Home Sticky Navigation ========*/
	if($(".homePage").length){
		var banner_height = $("#banner").outerHeight();
		var header_height = $("#header").outerHeight();
		var scroll_height = banner_height - header_height;
		var navbar = $(".navbar");
		if($(window).scrollTop() > scroll_height ){
			var header_height = $("#header").outerHeight();
			navbar.addClass("fixed");
			navbar.css("top",header_height + "px");
		}
		else{
			navbar.removeClass("fixed");
			navbar.css("top", "0px");
		}
	}
});

//SearchBox Spacing
function searchBox(){
	var winWidth=$(window).width();
	var left_offset = 0;
	var left_offset = $(".container").offset().left + 15; // 15=padding of container
	var searchbox = $(".navbar .search-box");
	searchbox.css("padding-right",  left_offset +"px");
	searchbox.css("margin-right",'-' + left_offset +"px");
	if(winWidth < 992 ){
		searchbox.css("padding-left",  left_offset +"px");
		searchbox.css("margin-left",'-' + left_offset +"px");
	}
	else
	{
		searchbox.css("padding-left","0px");
		searchbox.css("margin-left",30+"px");
	}
}

// Set Sticky Header
function headerHeight(){
	var header_height = $("#header").outerHeight();
	var wrapper =  $("#wrapper");
	wrapper.css("padding-top","0px");
	if($(".breadcrumb-wrapper").length){
		wrapper.css("padding-top", header_height + "px");
	}
	if($(".homePage").length){
		if ( $(window).width() <= 767 ){
			wrapper.css("padding-top", header_height + "px");
		}
		else
		{
			wrapper.css("padding-top","0px");
		}
	}
}

// For Mobile Menu
function SubmenuToggle(){
	$(".navbar-nav li > .menu-arrow").on("click", function() {
        $(".active").not(jQuery(this).closest('li')).removeClass('active');
        $(this).closest('li').toggleClass('active').children(".dropdown-menu").stop("true", "true").slideToggle(500);
        $(this).closest('li').siblings().find(".dropdown-menu").stop("true", "true").slideUp();
    });
}


// Show More Filters
function showFilter(){
	if ($(".search-control-wrapper").length) {
		$("#showFilter").on("click", function() {
            if($(this).next(".more-filters").is(":visible"))
			{
				$(this).html('<i class="fa fa-angle-down" aria-hidden="true"></i> More Filters');
				$(this).next(".more-filters").slideUp();
			}
			else
			{
				$(this).html('<i class="fa fa-angle-up" aria-hidden="true"></i> Less Filters');
				$(this).next(".more-filters").slideDown();
			}
			return false;
        });
	}
}