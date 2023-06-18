jQuery(document).ready(function() { 
  jQuery(".allFaqs h3").eq(0).addClass("active"); 
  jQuery(".allFaqs div").eq(0).show(); 
  jQuery(".allFaqs h3").click(function() { 
    jQuery(this).next("div").slideToggle("mediam") .siblings("div:visible").slideUp("mediam"); 
	 jQuery(this).toggleClass("active"); $(this).siblings("h3").removeClass("active"); 
  }); 
});

jQuery('.bannerSlider').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
	nav:false,
	autoplay:true,
	autoplayTimeout:3000,
	smartSpeed:800,
	autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
        }
    }
});


jQuery(document).ready(function() {
	//alert('fdfd');
    jQuery("#form1").validate({
        rules: {
			yourname: "required",
			calltime: "required",
			outlet: "required",
			yourphone: {
                required: true,
				number: true
              
            },
			youremail: {
					required: true,
					email: true
			},
           yourmessage: "required",
        },
        messages: {
			yourname: "Please enter your name",
			calltime: "Please select call back time",
            outlet: "Please select preffered outlet",
			youremail: "Please enter a valid email address",
			yourphone: {
                required: "Please enter your Phone number",
                number: "Please enter only numeric value"
            },
		   yourmessage: "Please enter your Message",
         },
		submitHandler: function(form) {
		jQuery('.spinner').css('opacity', '1');
		var pathname = window.location.pathname;
        jQuery.ajax({
            url: "contactus_mail.php",
            type: "post",
            data: jQuery(form).serialize(),
            success: function(response) {
			console.log(response);
			jQuery('.spinner').css('opacity', '0');
                jQuery('.msg').html('Email has been successfully sent.');
				window.setTimeout(function(){
                  window.location.href = "thank-you.html"; 
                //   window.location.href = "https://lp.musee-sg.com/11-11/thank-you/";
              }, 1500);
            },
			error:
			function(response) {
			console.log(response);
			jQuery('.spinner').css('opacity', '0');
               
            }
        });
    } 
		  
    });
});

jQuery(document).ready(function() {
	//alert('fdfd');
    jQuery("#form2").validate({
        rules: {
			yourname2: "required",
			calltime2: "required",
			outlet2: "required",
			yourphone2: {
                required: true,
				number: true
              
            },
			youremail2: {
					required: true,
					email: true
			},
           yourmessage2: "required",
        },
        messages: {
			yourname2: "Please enter your name",
			calltime2: "Please select call back time",
            outlet2: "Please select preffered outlet",
			youremail2: "Please enter a valid email address",
			yourphone2: {
                required: "Please enter your Phone number",
                number: "Please enter only numeric value"
            },
		   yourmessage2: "Please enter your Message",
         },
		submitHandler: function(form) {
		jQuery('.spinner2').css('opacity', '1');
        jQuery.ajax({
            url: "contactus_mail2.php",
            type: "post",
            data: jQuery(form).serialize(),
            success: function(response) {
			console.log(response);
			jQuery('.spinner2').css('opacity', '0');
                jQuery('.msg2').html('Email has been successfully sent.');
				window.setTimeout(function(){
                  window.location.href = "thank-you.html"; 
                //   window.location.href = "https://lp.musee-sg.com/11-11/thank-you/";
              }, 1500);
            },
			error:
			function(response) {
			console.log(response);
			jQuery('.spinner2').css('opacity', '0');
               
            }
        });
    } 
		  
    });
});