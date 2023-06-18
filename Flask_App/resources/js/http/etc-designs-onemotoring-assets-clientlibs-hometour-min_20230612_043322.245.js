$("body").addClass("homepageBody");

(function() {
  $(function() {
    var duration, remaining, tour;
    duration = 5000;
    remaining = duration;
	 $("#footer_links").append('<li><a id="startTour" class="mr-5" href="javascript:void(0);">Take Tour</a></li>'); 
    if(window.matchMedia){
        const mq = window.matchMedia( "(min-width: 1139px)" );
        if (mq.matches) {
          tour = new Tour({
              onStart: function() {
				$("body").css("overflow","hidden");
              },
              onEnd: function() {
				$("body").css("overflow","auto");
              },
              name: "home_tour",
              debug: false,
              template: "<div class='popover tour'><div class='arrow'></div>"+
                    "<h3 class='popover-title'></h3>"+
                    "<div class='popover-content'></div>"+
                    "<div class='popover-navigation'>"+
                    "    <button class='btn btn-default' data-role='prev'>Back</button>"+
                    "	 <button class='btn btn-default' data-role='next'>Next</button>"+
                    "</div>"+
                  "</div>",
              steps: [
                {
                  element: "#om_logo",
                  placement: "bottom",
                  content: "<span data-role='end' style=\"position:absolute;right:16px;top:10px;font-size:20px;cursor:pointer;\">X</span><br>Take a short tour of our new ONE.MOTORING portal!",
                  template: "<div class='popover tour'><div class='arrow'></div>"+
                    "<h3 class='popover-title'></h3>"+
                    "<div class='popover-content'></div>"+
                    "<div class='popover-navigation' style='text-align: center;'>"+
                    "	 <button class='btn btn-default' data-role='next'>Start tour</button>"+
                    "</div>"+
                  "</div>",
                  backdrop: true,
              	  onShown:function (tour) { $("body").css("overflow","hidden"); }
                },{
                  element: "#om_logo2",
                  placement: "bottom",
                  content: "<span data-role='end' style=\"position:absolute;right:16px;top:10px;font-size:20px;cursor:pointer;\">X</span><br>Take a short tour of our new ONE.MOTORING portal!",
                  template: "<div class='popover tour'><div class='arrow'></div>"+
                    "<h3 class='popover-title'></h3>"+
                    "<div class='popover-content'></div>"+
                    "<div class='popover-navigation' style='text-align: center;'>"+
                    "	 <button class='btn btn-default' data-role='next'>Start tour</button>"+
                    "</div>"+
                  "</div>",
                  backdrop: true
                }, {
                  element: "#desktop_navLinks",
                  placement: "bottom",
                  content: "<span data-role='end' style=\"position:absolute;right:16px;top:10px;font-size:20px;cursor:pointer;\">X</span><br>Looking for information about LTA, vehicle schemes, costs, transactions, etc? Navigate across these for more details.",
                  backdrop: true
                }, {
                  element: "#digitalServices",
                  placement: "bottom",
                  content: "<span data-role='end' style=\"position:absolute;right:16px;top:10px;font-size:20px;cursor:pointer;\">X</span><br>Click here to perform vehicle transactions online, including payment of LTA fines and fees.",
                  backdrop: true
                }, {
                  element: "#login-btn",
                  placement: "bottom",
                  content: "<span data-role='end' style=\"position:absolute;right:16px;top:10px;font-size:20px;cursor:pointer;\">X</span><br>Login here with your Singpass or Corppass to a personalised dashboard to view and transact on your vehicle assets.",
                  backdrop: true,
                  backdropPadding: 5
                }, {
                  orphan:true,
                  content: "<span data-role='end' style=\"position:absolute;right:16px;top:10px;font-size:20px;cursor:pointer;\">X</span>Thank you for taking the web tour. To take this tour again, click the \"Take Tour\" link at the bottom of the webpage.<br>If you have feedback pertaining to this new website, click <a target=\"_blank\" href=\"https://www.lta.gov.sg/content/ltagov/en/contact_us.html#contact_form\">here</a>.",
                  template: "<div class='popover tour'>"+
                    "<h3 class='popover-title'></h3>"+
                    "<div class='popover-content'></div>"+
                    "<div class='popover-navigation'>"+
                    "    <button class='btn btn-default' data-role='prev'>Back</button>"+
                    "	 <button class='btn btn-default' id='tourReplay'>Replay</button>"+
                    "</div>"+
                  "</div>",
                  backdrop: true,
                  onShown:function (tour) { $("#tourReplay").click(function (e) {tour.end();tour.restart();}); }
                }
              ]
            }).init();
        } else {
          tour = new Tour({
              onStart: function() {
                  $("body").css("overflow","hidden");
              },
              onEnd: function() {
                  $("body").css("overflow","auto");
              },
              debug: false,
              template: "<div class='popover tour'><div class='arrow'></div>"+
                    "<h3 class='popover-title'></h3>"+
                    "<div class='popover-content'></div>"+
                    "<div class='popover-navigation'>"+
                    "    <button class='btn btn-default' data-role='prev'>Back</button>"+
                    "	 <button class='btn btn-default' data-role='next'>Next</button>"+
                    "</div>"+
                  "</div>",
              steps: [
                {
                  orphan:true,
                  content: "<span data-role='end' style=\"position:absolute;right:16px;top:10px;font-size:20px;cursor:pointer;\">X</span><br><img src=\"/content/dam/onemotoring/img/general/primary_logo.jpg\" alt=\"menu mobile\" /><br>Take a short tour of our new ONE.MOTORING portal.",
                  template: "<div class='popover tour'><div class='arrow'></div>"+
                    "<h3 class='popover-title'></h3>"+
                    "<div class='popover-content'></div>"+
                    "<div class='popover-navigation' style='text-align: center;'>"+
                    "	 <button class='btn btn-default' data-role='next'>Start tour</button>"+
                    "</div>"+
                  "</div>",
                  backdrop: true,
                  onShown:function (tour) { $("body").css("overflow","hidden"); }
                },{
                  element: "#mobile_menu_tour",
                  placement: "bottom",
                  backdropPadding: 5,
                  content: "<span data-role='end' style=\"position:absolute;right:16px;top:10px;font-size:20px;cursor:pointer;\">X</span><br><img class=\"menu_mobi\" src=\"/content/dam/onemotoring/img/general/menu_mobi.jpg\" style=\"width: 50px;\" alt=\"menu mobile\" /><br>Looking for information about LTA, vehicle schemes, costs, transactions, etc? Navigate using our menu to view the topics under it.",
                  template: "<div class='popover tour'>"+
                    "<h3 class='popover-title'></h3>"+
                    "<div class='popover-content' style=\"text-align: center;\"></div>"+
                    "<div class='popover-navigation'>"+
                    "    <button class='btn btn-default' data-role='prev'>Back</button>"+
                    "	 <button class='btn btn-default' data-role='next'>Next</button>"+
                    "</div>"+
                  "</div>",
                  backdrop: true
                },{
                  element: "#mobile_menu_tour",
                  placement: "bottom",
                  backdropPadding: 5,
                  content: "<span data-role='end' style=\"position:absolute;right:16px;top:10px;font-size:20px;cursor:pointer;\">X</span><br><img src=\"/content/dam/onemotoring/img/general/tour1.PNG\" alt=\"menu mobile\" /><br>Tap here to perform vehicle transactions online, including payment of LTA fines and fees.",
                  template: "<div class='popover tour'>"+
                    "<h3 class='popover-title'></h3>"+
                    "<div class='popover-content' style=\"text-align: center;\"></div>"+
                    "<div class='popover-navigation'>"+
                    "    <button class='btn btn-default' data-role='prev'>Back</button>"+
                    "	 <button class='btn btn-default' data-role='next'>Next</button>"+
                    "</div>"+
                  "</div>",
                  backdrop: true
                },{
                  element: "#mobile_menu_tour",
                  placement: "bottom",
                  backdropPadding: 5,
                  content: "<span data-role='end' style=\"position:absolute;right:16px;top:10px;font-size:20px;cursor:pointer;\">X</span><br><img src=\"/content/dam/onemotoring/img/general/tour2.PNG\" alt=\"menu mobile\" /><br>Login here with your SingPass or CorpPass to a personalised dashboard to view and transact on your vehicle assets.",
                  template: "<div class='popover tour'>"+
                    "<h3 class='popover-title'></h3>"+
                    "<div class='popover-content' style=\"text-align: center;\"></div>"+
                    "<div class='popover-navigation'>"+
                    "    <button class='btn btn-default' data-role='prev'>Back</button>"+
                    "	 <button class='btn btn-default' data-role='next'>Next</button>"+
                    "</div>"+
                  "</div>",
                  backdrop: true
                },{
                  orphan:true,
                  content: "<span data-role='end' style=\"position:absolute;right:16px;top:10px;font-size:20px;cursor:pointer;\">X</span><br>Thank you for taking the web tour. To take this tour again, tap the \"Take Tour\" link at the bottom of the webpage.<br>If you have feedback pertaining to this new website, tap <a target=\"_blank\" href=\"https://www.lta.gov.sg/content/ltagov/en/contact_us.html#contact_form\">here</a>.",
                  template: "<div class='popover tour'>"+
                    "<h3 class='popover-title'></h3>"+
                    "<div class='popover-content' style=\"text-align: center;\"></div>"+
                    "<div class='popover-navigation'>"+
                    "    <button class='btn btn-default' data-role='prev'>Back</button>"+
                    "	 <button class='btn btn-default' id='tourReplay'>Replay</button>"+
                    "</div>"+
                  "</div>",
                  backdrop: true,
                  onShown:function (tour) { $("#tourReplay").click(function (e) {tour.end();tour.restart();}); }
                }
              ]
            });
        }

    }
    if (tour.ended()) {
		$("body").css("overflow","auto");
    }
    $("#startTour").click(function (e) {

        $( "html, body" ).animate({
				scrollTop: 0
          }, 500, function() {
			tour.restart();
         });
    });
      //$("html").smoothScroll();
  });

}).call(this);