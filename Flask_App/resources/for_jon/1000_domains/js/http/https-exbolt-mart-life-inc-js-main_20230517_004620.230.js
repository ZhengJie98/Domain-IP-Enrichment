$(function(){
	init();
	onload();
	onresize();
	winscroll();
	$(window).load(function(){
		onload();
		onresize();

		$(".loading-page-parent").hide();
	})
	$(window).resize(function(){
		onresize();
	})
	$(window).scroll(function(){
		winscroll();
	})
	function init(){
		deviceAgent = navigator.userAgent.toLowerCase();

		isMobDevice = Modernizr.touch || 
		(deviceAgent.match(/(iphone|ipod|ipad)/) ||
		deviceAgent.match(/(android)/)  || 
		deviceAgent.match(/(iemobile)/) || 
		deviceAgent.match(/iphone/i) || 
		deviceAgent.match(/ipad/i) || 
		deviceAgent.match(/ipod/i) || 
		deviceAgent.match(/blackberry/i) || 
		deviceAgent.match(/bada/i));

		domain = $("body").attr('data-domain')
		winOldtop = 0;
    	dateHtml = "";
    	scrollTopAnimating = false;

    	// move overlay
    	$(".overlay-content").each(function(){
    		$("body").append($(this))
    	})

    	// clone
    	$(".js-clone").each(function(){
			thisData = $(this).attr("data-clone")
			thisObj = $(this).clone();
			$('.js-clone-resp[data-clone='+thisData+']').append(thisObj);
		})
		

		$(".footer-nav .sub-menu a:first-child").each(function(){
			thisHref = $(this).attr("href");
			$(this).parents(".nav-parent").find(".nav-head").attr("href",thisHref)
		})
		fullURL = window.location.href.split(/[?#]/)[0];
		$(".nav-parent a,.subnav-mob-inner a").each(function(){
			thisHref = $(this).attr("href").split(/[?#]/)[0];
			thisDataUrl = "";
			if($(this).attr("data-url")){
				thisDataUrl = $(this).attr("data-url").split("==")
				jQuery.each(thisDataUrl,function(i,val){
					if(val.indexOf("transaction_details")>-1){
						transactionDetailsID = fullURL.split("/")
						transactionDetailsID = transactionDetailsID[(transactionDetailsID.length-1)];
						transactionDetailsURL = val+"/"+transactionDetailsID
						thisDataUrl[i] = transactionDetailsURL;
					}
				})
			}
			if(thisHref==fullURL || (thisDataUrl!="" && jQuery.inArray(fullURL,thisDataUrl)>-1)){
				if($(this).hasClass("hidden") && $(this).hasClass("nav-child")){
					thisActive = $(this).prev(".nav-child").not('hidden');
				}else{
					thisActive = $(this);
				}
				thisActive.addClass("active").parents(".nav-parent").addClass('opened active');	
				// $(this).parents(".sub-menu").show();	

			}
		})
		if(!$(".nav-parent.active").hasClass("js-showheaderaction")){
			$(".postheader-action").addClass("hidden-xs")
		}else{
			$("body").addClass("haveheaderaction");
		}
		if($(".nav-parent.active").hasClass("js-nowathomepage")){
			$(".js-homepagehideshow--show").removeClass("hidden-xs")
		}else{
			$(".js-homepagehideshow--hide").removeClass("hidden-xs")
		}
		if($(".nav-parent.active .sub-menu").length<=0){
			$("body").addClass("nosubmenu")
		}

		if($(".footer-nav .nav-parent.active .sub-menu").length<=0){
			$('.subnav-mob').addClass("hidden");
		}
		$(".subnav-mob-inner").append($(".footer-nav .nav-parent.active .js-submenu"));

		
		$("input[readonly],input[disabled]").parents(".input-group").addClass("readonly")

		$(".table-scrollparent").before("<div class='scrollindi-parent'><span>"+$(".js-scrollindi").html()+"</span><i class='fa fa-arrow-circle-right ml-5'></i></div>")

		$('select').selectpicker({
   			style: 'form-control',
   			mobile:true
   		});

		
		overlayThis = ""
   		$(".overlay-content").each(function(){
   			$(".js-appendoverlay").append($(this));
   		})

   		title = document.getElementById('htxttitle');
        if(title!=null){
            $("#pagetitle,#pagetitle2,.js-titletext").html(title.value);
        }
        if($(".nav-parent.active .nav-head span").length>0){
	        $("#pagetitle,#pagetitle2,.js-titletext").html($(".nav-parent.active .nav-head span").html())
        }

        $(".datepicker").datepicker({format: "dd-mm-yyyy",todayBtn: "linked",autoclose: true,todayHighlight: true, closeOnDateSelect: true});
        $(".datepicker").attr('autocomplete','off');
        $("#content").resize(function() {
            var content_height = $(this).height();
            $( "#left" ).height(content_height+100);
        }).resize();

        
	}
	function onload(){

	}
	function onresize(){
		winwidth = $(window).innerWidth();
		winheight = window.innerHeight;
		isMob = false;
		$("body").addClass("desktop")
		if($(".visible-xs:not(.visible-sm):visible").length>0){
			isMob = true;
			$("body").removeClass("desktop")
		}


		// header
		// .mCustomScrollbar()
		$(".js-homebtm").outerHeight("");
		if(isMob)
		{
			botom = $(".footer-nav").outerHeight();

		}else{
			botom = $(".desktop-footer-nav").outerHeight();
		}
		$(".bodywrapper").css({
			paddingTop:$("header").outerHeight(),
			width: winwidth,
			paddingBottom:botom,
		})
		if($(".footer-nav:visible").length>0){
			contentMinHeight = winheight-$("header").outerHeight()-$(".footer-nav").outerHeight();
		}else{
			contentMinHeight = winheight-$("header").outerHeight()-$("footer").outerHeight();
		}
		
		$(".postlogin-content,.prelogin-content").css({
			// "min-height":winheight-$("footer").outerHeight()
			"min-height":contentMinHeight
		})
		$(".js-fullheight-parent").css({
			"min-height":""
		})
		$(".js-fullheight-parent").css({
			"min-height":$(".postlogin-content").height()
		})
		$(".js-homebtm").outerHeight($(".postlogin-content").height()-$(".js-hometop").outerHeight())

		// scroll infi
		$(".scrollindi-parent").hide();
		$(".table-scrollparent").removeClass("scrollable");
		$(".table-scrollparent").each(function(){
			if($(this).outerWidth()<$("table",this).outerWidth() || $(this).outerWidth()<$(".js-checkwidth",this).outerWidth()){
				$(this).prev().show();
				$(this).addClass("scrollable");
			}
		})
		$("input[type=radio]").change(function(){
	    	thisParent = $(this).parents(".js-radioparent");
	    	thisName = $(this).attr("name");
	    	thisVal = $("input[type=radio][name='"+thisName+"']:checked").attr("id");
	    	$(".js-radioitem",thisParent).removeClass("checked");
	    	$(".js-radioitem[for='"+thisVal+"']").addClass("checked");
	    })
		// share label
		$(".js-sharelabel").css({
			paddingLeft:''
		})
		if(!isMob){
			$(".js-sharelabel-parent").each(function(){
				thisData = $(this).attr("data-sharelabel")
				thisWidth = $(this).find(".form-label").parent().outerWidth();
				$(".js-sharelabel[data-sharelabel="+thisData+"]").css({
					paddingLeft:thisWidth
				})
			})
		}

		$(".cta-text").css({
			paddingTop:"",
			paddingBottom:""
		})
		$(".cta-link").each(function(){
			if($(this).outerHeight()<($(".cta-parent").outerHeight()-4)){
				parentHeight = $(".cta-parent").outerHeight()-4;
				thisHeight = $(this).outerHeight();
				$(".cta-text",this).css({
					paddingTop:(parentHeight-thisHeight)/2,
					paddingBottom:(parentHeight-thisHeight)/2
				})
			}
		})

		// home chart
		if($(".home-chart").length>0){
			if(isMob && chart.graphs[0].hideBulletsCount == 50){
				chart.graphs[0].hideBulletsCount = 8;
				chart.validateData();
			}else if(!isMob && chart.graphs[0].hideBulletsCount == 8){
				chart.graphs[0].hideBulletsCount = 50;
				chart.validateData();
			}
		}

		// dropdown
		$(".header-dropdown-menu--fixed").css({
			top:"",
			"max-height":""
		})
		if(isMob){

			$(".header-dropdown-menu--fixed").each(function(){
				thisParent = $(this).parents(".dropdown");
				thisParentHeight = thisParent.outerHeight()
				thisParentTop = thisParent.offset().top-$(window).scrollTop()
				$(this).css({
					top:thisParentTop+thisParentHeight,
					"max-height":winheight-(thisParentTop+thisParentHeight)-parseFloat($(this).css("marginTop"))-10
					// -$(".footer-nav").outerHeight()
				})
			})
		}

		if($(".postlogin-content").length>0){
			scrolledCondition = parseFloat($(".postlogin-content").css("paddingTop"))-2
		}else{
			scrolledCondition = parseFloat($(".prelogin-content").css("paddingTop"))-2
		}
		
		circlebtnFunction();
		btnSpanSize();

		vmidFunction();
		overlayPos()
	}
	function winscroll(){
		winTop = $(window).scrollTop();

		
		if(winTop>scrolledCondition && !$("header").hasClass("scrolled")){
			$("header").addClass("scrolled");
		}else if(winTop<=scrolledCondition && $("header").hasClass("scrolled")){
			$("header").removeClass("scrolled");
		}

		if($(".js-sectioncontent").length>0 && !scrollTopAnimating){
			$(".js-sectioncontent").each(function(){
				thisIndex = $(this).index()
				if($(this).offset().top<(winTop+(winheight/5*3))){
					currentSection = thisIndex
				}
			})
			$(".js-sectionnnav").removeClass("selected")
			$(".js-sectionnnav").eq(currentSection).addClass("selected");
		}
	}
	$(".js-sectionnnav").click(function(){
		thisNav = $(this);
		thisNavIndex = thisNav.index();
		scrollTopAnimating = true;
		$(".js-sectionnnav").removeClass("selected")
		thisNav.addClass("selected");
		$("body,html").stop(true).animate({
			scrollTop:$(".js-sectioncontent").eq(thisNavIndex).offset().top - $("header").outerHeight()
		},500,function(){
			scrollTopAnimating = false;
		})
	})
	function vmidFunction(){
		$(".js-vmid").css({
			paddingTop:""
		})
		$(".js-vmid").each(function(){
			if((!isMob && !$(this).hasClass("js-vmid-onlymob")) || $(this).hasClass("js-vmid-mob") || ($(this).hasClass("js-vmid-onlymob") && isMob)){
				vmidParent = $($(this).parents(".js-vmid-parent")[0]);
				$(this).css({
					paddingTop:(vmidParent.height()-$(this).height())/4
				})
			}
		})
	}

	// form control focus
	$(".form-control").focus(function(){
		if($(this).attr("readonly") != "readonly" && !$(this).attr("disabled") != "disabled"){
			$(this).parents(".input-group").addClass("focus")
		}
	}).blur(function(){
		$(this).parents(".input-group").removeClass("focus")
	})

	// form
	$.validator.setDefaults({
		ignore: ".input-hide",
		errorPlacement: function(error, element) {
			thisParent = $($(element).parents(".form-group")[0]);
			thisOutsideParent = $(element).parents(".form-group");

			if($(".field-parent",thisParent).length>0){
				$(".field-parent",thisParent).append(error);
			}else if($(".field-parent",thisOutsideParent).length>0){
				$(".field-parent",thisOutsideParent).append(error);
				error = error.clone()
				thisParent.append(error);
			}else if($(".form-input-parent",thisParent).length>0){
				$(".form-input-parent",thisParent).append(error);

			}else{
				thisParent.append(error);
			}

		}
	});
	$.validator.messages.equalTo = function(condition,obj,c){
		replaceTo = $($(obj).attr("data-rule-equalto"))
		replace1 = $(obj).parents(".form-group").find(".form-label").html().replace(":","").replace("*","")
		replace2 = replaceTo.parents(".form-group").find(".form-label").html().replace(":","").replace("*","")
		return $(".js-equalto-msg").html().replace("%s",replace1).replace("%s",replace2)
	};
	$.validator.messages.required = function(condition,obj,c){
		if($($(obj).parents(".form-group")[0]).find(".form-label").length<=0){
			replaceTo = $(obj).attr('placeholder');
		}else{
			replaceTo = $($(obj).parents(".form-group")[0]).find(".form-label").html();
		}
		return $(".js-required-msg").html().replace("%s",replaceTo).replace(":","").replace("*","");
	};
	$.validator.messages.email = function(condition,obj,c){
		return $(".js-email-msg").html();
	};

	$("form").validate({
		groups:{
        	dob_group: "search_start_date search_end_date",
		}
	})

	$(".datepicker").change(function(){
		$(this).valid()
	})

	// nav
	// $("nav .nav-head").click(function(){
	// 	thisParent = $(this).parents(".nav-parent");
	// 	if($(".sub-menu",thisParent).length>0){
	// 		$(".nav-parent").not(thisParent).removeClass("opened");
	// 		thisParent.toggleClass("opened")
	// 		navSubmenuFunction();
	// 	}
	// })
	// function navSubmenuFunction(){
	// 	submenuActive = $(".nav-parent.opened .sub-menu")
	// 	if(($(".sub-menu:visible").length<=0 || submenuActive.length<=0) || isMob){
	// 		$(".sub-menu").not(submenuActive).stop(true).slideUp("fast");
	// 		submenuActive.stop(true).slideDown("fast");
	// 	}else{
	// 		$(".sub-menu").not(submenuActive).hide()
	// 		submenuActive.show()
	// 	}
	// }
	
	// function closeSubmenu(){
	// 	if(!isMob){
	// 		$(".nav-parent").removeClass("opened");
	// 		navSubmenuFunction();	
	// 	}
		
	// }

	// $(".js-menu,.navopened-cover").click(function(){
	// 	$("nav").stop(true).slideToggle("fast")
	// })
	// $(document).click(function(e){
	// 	objTarget = $(e.target)
	// 	if(!objTarget.hasClass("nav") && objTarget.parents("nav").length<=0){
	// 		closeSubmenu();
	// 		if(!objTarget.hasClass("js-menu") && objTarget.parents(".js-menu").length<=0 && isMob){
	// 			$("nav").stop(true).slideUp("fast")
	// 		}
	// 	}
		
	// })

	// popup
	$(".js-trigoverlay").click(function(){
		thisData = $(this).attr("data-overlay");
		isvalid = true;
		if($(this).hasClass("js-bindreview")){
			bindReviewFunction($(this));
		}
		if($(this).hasClass("js-validform")){
			if(!$(this).parents("form").valid()){
				isvalid = false
			}else{
				isvalid = true;
			}
		}
		if(isvalid){
			overlayFunction(thisData,this);
		}
		vmidFunction()
	})
	$(".overlay-parent,.js-closeoverlay").click(function(){
		$(".overlay-parent,.overlay-close,.overlay-content").stop(true).fadeOut("fast");
	})
	if($(".overlay-content[data-overlay=successful]").length>0){
		overlayFunction("successful");
	}
	overlayThis =  $(".overlay-content");
	
	function bindReviewFunction(obj){
		objParent = obj.parents(".js-bindreview-parent");
		$(".js-reviewref",objParent).each(function(){
			thisName = $(this).attr("data-review");
			if($(".js-reviewval[data-review='"+thisName+"']").is("input")){
				$(".js-reviewval[data-review='"+thisName+"']").val($(this).html())
			}else{
				$(".js-reviewval[data-review='"+thisName+"']").html($(this).html())
			}
		})
	}

	// review function
	$("input").change(function(){
		thisName = $(this).attr("name");
		thisValDisplay = "";
		if($(this).is(":radio")){
			thisName = $(this).attr("name");
			thisChecked = $("input[name="+thisName+"]:checked");
			if(thisChecked.length>0){
				if(thisChecked.attr("data-display")){
					thisValDisplay = thisChecked.attr("data-display")
				}else{
					thisValDisplay = thisChecked.val()
				}
			}
			
		}else{
			thisValDisplay = $(this).val();
		}
		if(thisValDisplay == ""){
			thisValDisplay = "-";
		}
		$(".js-reviewval[data-review="+thisName+"]").html(thisValDisplay)
	})
	$("select").change(function(){
		thisName = $(this).attr("name");
		thisValDisplay = $("option:selected",this).html();
		if(thisValDisplay == ""){
			thisValDisplay = "-";
		}
		$(".js-reviewval[data-review="+thisName+"]").html(thisValDisplay)
	})
	$("input,select").each(function(){
		$(this).change();
	})

	// trig click
	$(".js-trig").click(function(){
		thisData  =$(this).attr("data-trig");
		$(".js-trig-resp[data-trig="+thisData+"]").trigger("click");
	})

	// select focus
	$("select").focus(function(){
		$(this).parents(".bootstrap-select").addClass("focus")
	}).blur(function(){
		$(this).parents(".bootstrap-select").removeClass("focus")
	})


	// language
	$(".language").click(function(e) {
        e.preventDefault();
        var language_select=$(this).find("input").val();
        $("input[name=language_select]").val(language_select);
        document.getElementById('language_select').submit();
    });


	// datetime
	if($('.js-datenow').length>0){
        setInterval(function(){
            getDateTimeNow();
        },1000)
        getDateTimeNow();
    }
    
    function getDateTimeNow(){
        if(dateHtml == ""){
            dateHtml = $(".js-datenow").html();
            timeHtml = $(".js-timenow").html();
            $(".js-datetimenow").css("opacity","1")
        }
        var dt = new Date();
        dayNow = dt.getDay();
        dayNow = $(".js-lang-day"+dayNow).html();

        dateNow = dt.getDate();

        monthNow = dt.getMonth();
        // monthNow = $(".js-lang-month"+monthNow).html();
        monthNow = monthNow+1;

        yearNow = dt.getFullYear();

        hourNow = dt.getHours();
        if(hourNow>=12){
            hourNow = hourNow-12;
            sessionNow = "pm"
        }else{
            sessionNow = "am"
        }
        if(hourNow==0){
            hourNow = 12;
        }

        sessionNow = $(".js-lang-"+sessionNow).html();

        minuteNow = dt.getMinutes()

        secondNow = dt.getSeconds()
        if(secondNow <10){
            secondNow = "0"+secondNow
        }
        if(minuteNow <10){
            minuteNow = "0"+minuteNow
        }
        if(hourNow <10){
            hourNow = "0"+hourNow
        }

        dateDisplay = dateHtml.replace("#day#",dayNow).replace("#date#",dateNow).replace("#month#",monthNow).replace("#year#",yearNow).replace("#hour#",hourNow).replace("#minute#",minuteNow).replace("#second#",secondNow).replace("#session#",sessionNow)
        timeDisplay = timeHtml.replace("#day#",dayNow).replace("#date#",dateNow).replace("#month#",monthNow).replace("#year#",yearNow).replace("#hour#",hourNow).replace("#minute#",minuteNow).replace("#second#",secondNow).replace("#session#",sessionNow)
        $(".js-datenow").html(dateDisplay);
        $(".js-timenow").html(timeDisplay);
    }


    function circlebtnFunction(){
		// btn circle
		$(".js-circlebtn").each(function(){
			$(this).outerHeight($(this).outerWidth())
			$(this).css({
				"line-height":$(this).innerHeight()+"px"
			})
		})
		$(".js-circlebtn-mob").css({
			"height":"",
			"line-height":""
		})
		if(isMob){
			$(".js-circlebtn-mob").each(function(){
				$(this).outerHeight($(this).outerWidth())
				$(this).css({
					"line-height":$(this).height()+"px"
				})
			})
		}
		
	}

	// ico rate
	$(".js-refresh-icorate").click(function(){
		$.ajax({
            method:"POST",
            url:domain+"member/ico_rate",
            cache:true,
            success:function(data){
            	$(".ico-rate-parent").html(data)
            }
        })
	})
	
	// clipboard
	$(".js-copy").click(function(){
		thisData = $(this).attr('data-copy');
		copyToClipboard(thisData);
	})

	function copyToClipboard(elementID) {
		result = document.getElementById(elementID).innerHTML;
		var $input = $('#copy_input');
		$input.removeClass("hidden");
		$input.val(result);
		if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
		  var el = $input.get(0);
		  var editable = el.contentEditable;
		  var readOnly = el.readOnly;
		  el.contentEditable = true;
		  el.readOnly = true;
		  var range = document.createRange();
		  range.selectNodeContents(el);
		  var sel = window.getSelection();
		  sel.removeAllRanges();
		  sel.addRange(range);
		  el.setSelectionRange(0, 999999);
		  el.contentEditable = editable;
		  el.readOnly = readOnly;
		} else {
		  $input.select();
		}
		document.execCommand('copy');
		$input.blur();

		$input.addClass("hidden");

	  $(".js-copyhideshow--pre").hide();
	  $(".js-copyhideshow--post").show();

	  setTimeout(function(){
	  	$(".js-copyhideshow--post").hide();
	  	$(".js-copyhideshow--pre").show();
	  },500)
	}


	// gradient btn
    function btnSpanSize(){
		$(".btn-action").outerWidth("")
	
		$(".btn-action:visible").each(function(){
			$(this).outerWidth(Math.ceil($(this).outerWidth()))
		})
	}
})

function overlayPos(){
	if(overlayThis!=""){
		$(".overlay-inner",overlayThis).height("");
		$(".overlay-content").css({
			left:0,
			top:0
		})
		overlayLeft = (winwidth-overlayThis.outerWidth())/2
		overlayTop = (winheight-overlayThis.outerHeight())/2
		overlayThis.css({
			left:overlayLeft,
			top:overlayTop
		})
		$(".overlay-inner",overlayThis).height(overlayThis.height()/1.05)
	}
	
}
function overlayFunction(thisData,obj=""){
	overlayThis= $(".overlay-content[data-overlay="+thisData+"]");
	if(thisData == "imgpopup"){
		$(".js-overlayimg",overlayThis).hide()
		$(".js-loading",overlayThis).show()
		if($("img",obj).length>0){
			imgSrc = $("img",obj).attr("src");
		}else{
			imgSrc = $(obj).attr("data-url");
		}
		$(".js-overlayimg",overlayThis).attr("src",imgSrc).load(function(){
			$(".js-overlayimg",overlayThis).show()
			$(".js-loading",overlayThis).hide()
			overlayPos();
		})
	}
	
	$(".overlay-parent,.overlay-close").stop(true).fadeIn("fast");
	overlayThis.stop(true).fadeIn("fast");
	overlayPos();
}