/*!
* General.js
* Copyright 2013 Dian Afrial.
*/

(function($){
	
	/*
	*  Exists
	*
	*  @description: returns true / false		
	*/
	
	gix = {};

	$.fn.exists = function()
	{
		return $(this).length>0;
	};
	
	
	$(document).ready(function () {
		
		//init_size();
		
		shortcodes();
		
		$( 'a[rel^="prettyPhoto"]' ).prettyPhoto();

		/* dropdown toggle */
		$('.dropdown-toggle').dropdown();

		/* reviews */
		$("#add_review").on("click", function(){
			$('.nav-tabs a[href="#reviews"]').tab('show')
			
			gix.scrollto( $("#respond") ,500);

		});

		$("#orderyby").on("change", function(){
			$("#orderbyForm").submit();
		});

		/* register form */
		validate_form(".register-form");

		/* login form */
		validate_form(".login-form");

		/* add listing form */
		validate_form("#submitlisting-form");

		/* contact form */
		validate_form(".sidebar-moneylender-web .mini-form");
		validate_form(".sidebar-moneylender-mobile .mini-form");
		validate_form(".contact-form");
		
		if( mobileAndTabletcheck() )
		{
			
		}
		
		$("#fm_prop_contactno, #fm_home_contactno, #fm_home_amount").keypress(function (e) {
			if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) 
			{
				return false;
			}
		});	

		if ( $( '.latest-slider' ).exists ) {
			/* Setup dynamic variables. */
			if ( $( '.latest-slider .slide' ).length > 1 ) {

				$( '.latest-slider' ).slidesjs({	
					width:778,
					height:260,
					play:{
						active:false,
						effect: "fade",
						interval: 6000,
						auto:true,
						pauseOnHover: true,
					},
					pagination:{active:false},
					navigation:{active:false,effect: "fade"}
				});
			
			} else {
				$( '.latest-slider .slide' ).fadeIn();
			}
		}

		/* responsiveness*/
		if( $(window).width() < 767 )
		{
			$(".search-button-top,.search-top-close").on("click", function(){
				$(".search-top-wrapper").SearchBar();
			});
			$(".single .sidebar").prepend($(".single .main-content h1.page-title"));

			var template_moreS = $('<span class="more-sidebar"><i class="fa fa-arrow-down"></i>more</span>')
			$(".sidebar").append(template_moreS);
			var moreS = $(".more-sidebar");
			moreS.on("click",function(){
				$(".toggle-sidebar").toggle("slow",function(){
					
					if($(this).is(":visible"))
					{
						moreS.html('<i class="fa fa-arrow-up"></i>less');
					
					}
					else if( $(this).is(":hidden") )
					{
						moreS.html('<i class="fa fa-arrow-down"></i>more');
					}
				});
			});

			var jPM = $.jPanelMenu({
			    menu: '.panel-wrapper',
			    trigger: '.trigger-menu-top'
			});

			jPM.on();
		}
		
		
	}); // End $()
	 $(window).load(function(){
	   
    });

 	$.fn.SearchBar = function()
	{
		var search = $(this);
		search.toggle("slow");
	};
	
	function shortcodes(){
	/*-----------------------------------------------------------------------------------
	  Toggle shortcode
	-----------------------------------------------------------------------------------*/
			
		if ( $( '.shortcode-toggle').length ) {	
			
			$( '.shortcode-toggle').each( function () {
				
				var toggleObj = $(this);
				var iconplus = 'fa fa-plus';
				var iconminus = 'fa fa-minus';

				toggleObj.find( 'h4.toggle-trigger a').click( function () {
				
					toggleObj.find( '.toggle-content').animate({ opacity: 'toggle', height: 'toggle' }, 300);
					toggleObj.toggleClass( 'open' ).toggleClass( 'closed' );
					
					if ( toggleObj.hasClass( 'open') ) {
					
						$(this).find('i').removeClass();
						$(this).find('i').addClass(iconminus);
					} // End IF Statement
					
					if ( toggleObj.hasClass( 'closed') ) {
					
						$(this).find('i').removeClass();
						$(this).find('i').addClass(iconplus);
					
					} // End IF Statement
					
					return false;
				
				});
						
			});


		} // End IF Statement
	}
	function check_first_number(a, arr) {
		check = null;
		for (i = 0; i < arr.length; i++) {
			if (a == arr[i]) {
				check = true;
				return check;
			}
		}
		return check;
		
	}
	
	function validate_form(obj){
		if($(obj).exists){
			$(obj).submit(function() {
				var pretext = 'Please note following required fields : ';
				var errors = [];
				var limit = 7;
				var hasError = false;
				
				$(obj).find( '.required').not( $(obj).find(".select2-container") ).each(function() {
					
					if($.trim($(this).val()) == '') 
					{
						var labelText = $(this).attr("placeholder");
						if(this.tagName == 'SELECT'){
							errors.push('Please Select ' +labelText);
						}
						else if($(this).hasClass("select"))
						{
							errors.push('Please ' +labelText);
						}
						else
						{
							errors.push('Please Enter ' +labelText);
						}						
						
						hasError = true;
					} 
					
					else if( $(this).hasClass( 'email') ) 
					{
						var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
						if(!emailReg.test($.trim(this.value))) {
							var labelText = $(this).attr("placeholder");
							errors.push('Please Enter Correct Email');
							hasError = true;
						}
					
					}
					else if($(this).hasClass( 'password')) 
					{
						limit = $(this).attr("data-minlimit");
						if( typeof(limit) != 'undefined' && limit != '' )
						{
							limit = parseInt(limit);
							if($.trim($(this).val().length) < limit){
								errors.push('Password Must Be '+limit+' Characters');
								hasError = true;
							}
						}
						revalue = $(this).attr("data-reval");
						if( typeof(revalue) != 'undefined' && revalue != '' )
						{
							revalue = $('#' + revalue);
							if(revalue.val() != $(this).val())
							{
								errors.push('Password Does Not Match');
								hasError = true;
							}
							
						}
					}
					else if($(this).hasClass( 'restricted')) 
					{
						var d = $(this).val();
						var arr = [8,9];
						if(d.length < 8){
							errors.push('Please Enter Correct Contact No.');
							hasError = true;
						}
						if(!check_first_number(d.substring(0,1),arr)){
							errors.push('Please Enter Mobile No. Only');
							hasError = true;
						}
					}
				});
				
				if( $(obj).find('input[type="checkbox"]').hasClass('tick') ) {
					var d = $(obj).find('input[type="checkbox"].tick');
					var i = 0;
					var n = d.each(function(index, element){
						if( $(this).is(":checked") ) {
							i = index+1;
						}
					});
					if( i == 0 ){
						errors.push('Please Tick Apply To');
						hasError = true;
					}
				}
				
				if( $(obj).find('input[type="checkbox"]').hasClass('terms')) {
					if(! $(obj).find('input.terms').is(':checked')){
						errors.push('You Must Agree With Our Terms & Condition');	
						hasError = true;
					}
				}
				if(hasError)
				{
					if(errors){
						var message = pretext + '\n\n';
						for (var i in errors) {
						  message+=errors[i] + '\n';
						}
						alert(message);
					}
					return false;
				}
				errors = [];
			});
		}
	}

	/*====================================================================*/
	window.gix.scrollto = function(to, duration, correction) {
		var destination = 0;
		if( typeof(to) === 'object' ) {
			if( to instanceof jQuery ) {
				destination = to.offset().top + (correction === undefined ? 0 : correction);
			}
		} else if( typeof(to) === 'number' ) {
			destination = to;
		}

		if( duration === 0 ) {
			$('html, body').scrollTop = destination;
		} else {
			$('html, body').animate({
				scrollTop: destination
			},{
				queue: false,
				duration: duration ? duration : 2 * 1000,
			});
		}

		
		//console.log(destination);
	};

	window.mobileAndTabletcheck = function() {
	  var check = false;
	  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	  return check;
	}

})(jQuery);