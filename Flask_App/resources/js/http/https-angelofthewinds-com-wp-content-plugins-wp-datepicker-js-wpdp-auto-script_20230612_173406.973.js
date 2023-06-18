	
	

	jQuery(document).ready(function($){


		
		if($('.wpcf7-form-control.wpcf7-repeater-add').length>0){
			$('.wpcf7-form-control.wpcf7-repeater-add').on('click', function(){
				wpdp_refresh_90529(jQuery, true);
			});
		}
		
	
});
var wpdp_refresh_first_90529 = 'yes';
var wpdp_intv_90529;
var wpdp_counter_90529 = 0;
var wpdp_month_array_90529 = [];
var wpdp_dateFormat = "mm/dd/yy";
var wpdp_defaultDate = "";
function wpdp_refresh_90529($, force){
			var wpml_code = wpdp_obj.wpml_current_language;
			
			wpml_code = (wpml_code?wpml_code:"en-GB");
			switch(wpml_code){
				case "en":
					wpml_code = "en-US";
				break;
			}
	
	
			
				if(typeof $.datepicker!='undefined' && typeof $.datepicker.regional[wpml_code]!='undefined'){
					
				wpdp_month_array_90529 = $.datepicker.regional[wpml_code].monthNames;
									
				}
				
				
		
				


				if($("#wpdp-1").length>0){
					
				$("#wpdp-1").attr("autocomplete", "off");
					
				//document.title = wpdp_refresh_first=='yes';
				//force = true;
								if(wpdp_refresh_first_90529 == 'yes' || force){
					
					
					
										
					if(typeof $.datepicker!='undefined')
					$("#wpdp-1").datepicker( "destroy" );
					
					
					$("#wpdp-1").removeClass("hasDatepicker");
					wpdp_refresh_first_90529 = 'done';
					
				}
								$('body').on('mouseover, mousemove', function(){//
				
			
				
				if ($("#wpdp-1").length>0) {
					$.each($("#wpdp-1"), function(wp_si, wp_sv){
						if($(this).val()!=''){
							$(this).attr('data-default-val', $(this).val());
						}
					});
				}		
				
				
								if(wpdp_counter_90529 > 2)
				clearInterval(wpdp_intv_90529);
								
				
					
				if($("#wpdp-1.hasDatepicker").length!=$("#wpdp-1").length){

				
					
				$("#wpdp-1").datepicker($.extend(  
					{},  // empty object  
					$.datepicker.regional[ wpml_code ],       // Dynamically  
					{  
 					dateFormat: wpdp_dateFormat
					}
				)).on( "change", function() {
						
				}); 
				
				
				
				
				
				$("#wpdp-1").datepicker( "option", "dateFormat", "mm/dd/yy" );


setTimeout(function(){ 

	 $.each($("#wpdp-1"), function(){

        
            $(this).prop('autocomplete', 'on');


         		 		
		var expected_default = $(this).data('default');		

		
		var expected_stamp = $(this).data('default_stamp');
		var expected_stamp_date = new Date(expected_stamp*1000);
		var expected_stamp_str = $.datepicker.formatDate('mm/dd/yy', expected_stamp_date);		 
	 
		if(expected_default != undefined && expected_default!=''){ $(this).datepicker().datepicker('setDate', expected_default); }
		if(expected_stamp != undefined && expected_stamp!=''){ $(this).datepicker().datepicker('setDate', expected_stamp_str); }		
		
	});
	
}, 100);
	






					$.each($("#wpdp-1"), function(){
						var this_selector = $(this);
						var parent_form = this_selector.closest('form');
						
						parent_form.on('reset', function(){
							if(this_selector.data('default-val')!= ""){
								setTimeout(function(){
									if(this_selector.val() == ''){
										this_selector.val(this_selector.data('default-val'));
									}
								});
							}
						});
						if($(this).data('default-val')!= ""){
							$(this).val($(this).data('default-val'));
						}
						
					});
						
				
				}
				
				
				
				});
				}


				if($("#wpdp-2").length>0){
					
				$("#wpdp-2").attr("autocomplete", "off");
					
				//document.title = wpdp_refresh_first=='yes';
				//force = true;
								if(wpdp_refresh_first_90529 == 'yes' || force){
					
					
					
										
					if(typeof $.datepicker!='undefined')
					$("#wpdp-2").datepicker( "destroy" );
					
					
					$("#wpdp-2").removeClass("hasDatepicker");
					wpdp_refresh_first_90529 = 'done';
					
				}
								$('body').on('mouseover, mousemove', function(){//
				
			
				
				if ($("#wpdp-2").length>0) {
					$.each($("#wpdp-2"), function(wp_si, wp_sv){
						if($(this).val()!=''){
							$(this).attr('data-default-val', $(this).val());
						}
					});
				}		
				
				
								if(wpdp_counter_90529 > 2)
				clearInterval(wpdp_intv_90529);
								
				
					
				if($("#wpdp-2.hasDatepicker").length!=$("#wpdp-2").length){

				
					
				$("#wpdp-2").datepicker($.extend(  
					{},  // empty object  
					$.datepicker.regional[ wpml_code ],       // Dynamically  
					{  
 					dateFormat: wpdp_dateFormat
					}
				)).on( "change", function() {
						
				}); 
				
				
				
				
				
				$("#wpdp-2").datepicker( "option", "dateFormat", "mm/dd/yy" );


setTimeout(function(){ 

	 $.each($("#wpdp-2"), function(){

        
            $(this).prop('autocomplete', 'on');


         		 		
		var expected_default = $(this).data('default');		

		
		var expected_stamp = $(this).data('default_stamp');
		var expected_stamp_date = new Date(expected_stamp*1000);
		var expected_stamp_str = $.datepicker.formatDate('mm/dd/yy', expected_stamp_date);		 
	 
		if(expected_default != undefined && expected_default!=''){ $(this).datepicker().datepicker('setDate', expected_default); }
		if(expected_stamp != undefined && expected_stamp!=''){ $(this).datepicker().datepicker('setDate', expected_stamp_str); }		
		
	});
	
}, 100);
	






					$.each($("#wpdp-2"), function(){
						var this_selector = $(this);
						var parent_form = this_selector.closest('form');
						
						parent_form.on('reset', function(){
							if(this_selector.data('default-val')!= ""){
								setTimeout(function(){
									if(this_selector.val() == ''){
										this_selector.val(this_selector.data('default-val'));
									}
								});
							}
						});
						if($(this).data('default-val')!= ""){
							$(this).val($(this).data('default-val'));
						}
						
					});
						
				
				}
				
				
				
				});
				}
		


		
		$('.ui-datepicker').addClass('notranslate');
}
	wpdp_intv_90529 = setInterval(function(){
		wpdp_counter_90529++;
		wpdp_refresh_90529(jQuery, false);
		
	}, 500);

	                jQuery(document).ready(function($){

                        $("#wpdp-1").on('click', function(){

                            $('.ui-datepicker-div-wrapper').prop('class', 'ui-datepicker-div-wrapper wp_datepicker_option-1 ');

                        });

                        setTimeout(function () {
                                $("#wpdp-1").click();
                                //$("//").focusout();
                        }, 1000);



                });

                            jQuery(document).ready(function($){

                        $("#wpdp-2").on('click', function(){

                            $('.ui-datepicker-div-wrapper').prop('class', 'ui-datepicker-div-wrapper wp_datepicker_option-1 ');

                        });

                        setTimeout(function () {
                                $("#wpdp-2").click();
                                //$("//").focusout();
                        }, 1000);



                });

            
    //wpdp_refresh_//(jQuery, false);
	
	    
