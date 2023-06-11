// Custom functionality
jQuery(document).ready(function($){
	
	// Replace original MM logo with the SVG version
	function replaceLogo(){
		$(".logo-holder .logo.logo-mobile, .logo-holder .logo.logo-dark").attr("src","https://static.mediamath.com/logo/MediaMath-Logo-2023.svg");
		
	}
	// setTimeout(() => replaceLogo(), 400);
	
	
	// Homepage Slider 4 Fix for Awards background
	if ( ($(window).width() < 490) && ( $('.home').length || $('.page-id-16329').length) ) {
	   $('[data-ssid="3"] [data-public-id="1"] picture.skip-lazy img').attr('src','https://static.mediamath.com/wp-content/uploads/2022/09/15010513/awmobg-4.jpg');
	   $('[data-ssid="4"] [data-public-id="1"] .n2-ss-slide-background-color').css({'background-image':'url(https://static.mediamath.com/wp-content/uploads/2022/09/15010513/awmobg-4.jpg)', 'background-size':'cover'});
	}
	
	
	// AdChoices banner (except EU/UK) v1.0
	function dnsmpi(){
	  $.getJSON( "https://geo.ipify.org/api/v1?apiKey=at_aFCzjXjAIgJ4TCXhTSElVgE09D6SH", function( json ) {
		  let dnsmpi = json.location.country || '';
		  let EU = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LT', 'LV', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB'];
		   
		   if( !EU.includes(dnsmpi) ){
		       $("#cookies").addClass('gdpr');
		   }
		  
		  
	  });
	}
	
	// AdChoices banner (except EU/UK) v2.0
	function gdpr(){
		
		fetch('https://www.cloudflare.com/cdn-cgi/trace')
			.then(res => res.text() ).then(t => {
				  var data = t.replace(/[\r\n]+/g, '","').replace(/\=+/g, '":"');
				      data = '{"' + data.slice(0, data.lastIndexOf('","')) + '"}';
				  var jsondata = JSON.parse(data);
				  //console.log(jsondata.loc);

				  let gdpr = jsondata.loc || '';
				  let EU = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LT', 'LV', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB'];
			          let Canada = ['CA'];

				  // if( !EU.includes(gdpr) ){
				  //      $("#cookies").addClass('gdpr');
				  // }
			          // Show AdChoices only to visitors from CA
			          if( Canada.includes(gdpr) ){
					   $("#cookies").addClass('gdpr');
				  }
			})
	}	
	

	function cookieNotice(){
	/* 
	 * EU Cookie Box
	 * https://www.gov.uk/eu-eea
	 * Austria, Belgium, Bulgaria, Croatia, Republic of Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden and the UK.
	 *
	 */ 
	setTimeout(function(){ 
		insertCookieNoticeBox(); // Display Cookie Box
		// dnsmpi();
		gdpr();
	}, 3500); // Get object after 3.5 seconds
	

/*
 *
 * 	jquery.cookie v1.4.1 | MIT 
 *
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});	


var $cookie_html;

function insertCookieNoticeBox(){
		// Define cookie box	
		// $cookie_html = $("<div id=\"cookies\" style=\"display:none;\">\n<h3>Allow Cookies</h3>\n<p>This website uses cookies to improve your user experience. By continuing to browse the site you are agreeing to our use of cookies.</p>\n\n<div class=\"options\">\n<a class=\"accept-cookies\">I accept</a>\n<a href=\"http://www.mediamath.com/cookie-notice/\" target=\"_blank\">Find out more about our cookie policy Â»</a>\n</div>\n</div>").hide();
		// $cookie_html = $("<div id=\"cookies\" style=\"display:none;\">\n<img src=\"https://static.mediamath.com/wp-content/uploads/2019/10/14112220/AdChoices.jpg\" border=\"0\" alt=\"\">\n<p>This website uses cookies to improve your user experience. By continuing to browse the site you are agreeing to our use of cookies.</p>\n\n<div class=\"options\">\n<a class=\"accept-cookies\">I accept</a>\n<a href=\"https://www.mediamath.com/cookie-notice/\" target=\"_blank\">Find out more about our cookie policy »</a>\n</div>\n</div>").hide();
		$cookie_html = $("<div id=\"cookies\" style=\"display:none;\">\n<a href=\"https://www.mediamath.com/ad-choices-opt-out/\"><img src=\"https://static.mediamath.com/wp-content/uploads/2019/12/19133732/choice.jpg\" border=\"0\" alt=\"AdChoices\"></a>\n<p>This website uses cookies to improve your user experience and to provide you with advertisements that are relevant to your interests. By continuing to browse the site you are agreeing to our use of cookies.</p>\n\n<div class=\"options\">\n<a class=\"accept-cookies\">I accept</a>\n<a href=\"https://www.mediamath.com/cookie-notice/\" target=\"_blank\">Find out more about our cookie policy »</a>\n</div>\n</div>").hide();


			
		//$cookie_html.insertAfter(".mediamath-footer"); 
		$("body").append($cookie_html);

		if ($.cookie('cookie_notice_displayed') == 'true') {
			$("#cookies").hide();
			$("#cookies").remove();
		} else {
			$("#cookies").fadeIn(2000);
		}

		$('body').on('click', 'a.accept-cookies', function() {
			$.cookie('cookie_notice_displayed', true, { path: '/', domain: '.mediamath.com' });
			$("#cookies").fadeOut();
			$("#cookies").remove();
		});
	}
}	
	
	
	cookieNotice();
	
	
	
	
});

