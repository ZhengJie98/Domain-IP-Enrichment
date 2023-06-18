/* eslint-disable */
(function () {
    let source, isMicroSite, activationStatus, enterpriseNumber;
    let secondIframeLoaded = false, onceClickedOnSecFrame = false, windowIframeBody;

    try {
        if (window && window.parent && window.parent.__INITIAL_STATE__ && window.parent.__INITIAL_STATE__.homeReducer && window.parent.__INITIAL_STATE__.homeReducer.data) {
            let homeReducerData = window.parent.__INITIAL_STATE__.homeReducer.data;
            isMicroSite = true; //ask microsite
            enterpriseNumber = homeReducerData.enterpriseInfo ? homeReducerData.enterpriseInfo.businessNumber : homeReducerData.businessNumber;
            source = 6;
            activationStatus = homeReducerData.activationStatus;
            //var businessName = homeReducerData.name;
        }
    } catch (e) {
        log(e);
    }

    if (!document.getElementsByClassName) {
        document.getElementsByClassName = function(className) {
            return this.querySelectorAll("." + className);
        };
        Element.prototype.getElementsByClassName = document.getElementsByClassName;
    }
    let bfi;
    let totalWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let totalHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let parentTitle = document.title;
    let newTitle = isMicroSite ? document.title : "(1) New Message!";
    let titleChangeInterval;
    let titleFlag = 0;
    let tries = 1;
    let extensionInterval;
    let env;
    let windowIframe;
    window.be_webchat = null;

    function playBubbleSound() {
        let context, source = "https://d3cnqzq0ivprch.cloudfront.net/prod/media/notification-sound.mp3";
        try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            context = new AudioContext();
            let request = new XMLHttpRequest();
            request.open("GET", source, true);
            request.responseType = "arraybuffer";
            request.onload = function() {
                context.decodeAudioData(request.response, function(buffer) {
                    let source = context.createBufferSource();
                    source.buffer = buffer;
                    source.connect(context.destination);
                    source.start(0);
                    context.resume();
                }, function(e) {
                    console.log("error", e);
                });
            };
            request.send();
        } catch (e) {
            if (/Edge\/|Trident\/|MSIE /.test(navigator.userAgent)) {
                let audio = document.createElement("audio");
                audio.autoplay = true;
                audio.src = source;
                audio.play();
            }
        }
    };

    function getGoodBot(type) {
        const goodBots = ["facebookexternalhit", "Facebot", "Googlebot", "Google", "LinkedInBot"];
        const ua = navigator.userAgent;
        let isGoodBots = false;
        let botName = "";

        for (let i = 0; i < goodBots.length; i++) {
            const bot = goodBots[i];
            if (ua.indexOf(bot) > -1) {
                isGoodBots = true;
                botName = bot.toLowerCase();
                break;
            }
        }
        if (type == "isGoodBot") {
            return isGoodBots;
        } else {
            botName = (botName != "") ? botName : "facebook";
            botName = botName.indexOf("face") > -1 ? "facebook" : botName;
            botName = botName.indexOf("linked") > -1 ? "linked-in" : botName;
            return botName;
        }
    }

    function initIframe() {
        
        let bfdiv = document.getElementById("bf-revz-widget-" + window.wid);
        if (!bfdiv) {
            tries++;
            if (tries > 50) {
                return false;
            }
            setTimeout(initIframe, 500);
            return;
        }

        if (!bfdiv.firstChild) {
            bfdiv.appendChild(bfi);
        } else if (bfdiv.firstChild && bfdiv.firstChild.nodeName != "IFRAME") {
            bfdiv.insertBefore(bfi, bfdiv.firstChild);
        }
    }

    let winHeight = 670;
    if (window.innerHeight < 670) {
        winHeight = window.innerHeight;
    }

    window.addEventListener("resize", function() {
        if (window.innerHeight < 727) {
            winHeight = window.innerHeight;
        } else {
            winHeight = 773;
        }
    });

    const openWebchatFromOutside = (objFromClient) => {
        const firstIframe = document.getElementById("bewebchat");
        const secondIframe = document.getElementById("window-iframe");
        firstIframe.contentWindow.postMessage({type: "post-message-from-outside", clientObj: objFromClient, beWebchatWindowObj: JSON.stringify(window.be_webchat) }, "*");
        secondIframe.contentWindow.postMessage({type: "post-message-from-outside-chat", clientObj: objFromClient, beWebchatWindowObj: JSON.stringify(window.be_webchat) }, "*");
    }

    window.onmessage = function(e) {
        if (e.data && e.data.split) {
            let dataReceivedSplit = e.data.split("***");
            let dataReceived = dataReceivedSplit[0];
            let widthReceived = dataReceivedSplit[1];

            if (totalWidth < 960) {
                widthReceived = "drawer";
            }

            if (dataReceived == "icon-clicked") {
                if (!secondIframeLoaded) {

                    if (!onceClickedOnSecFrame) {
                        loadNewIframe();
                    }
                }
                document.getElementById("bewebchat").style.height = "80px";
                document.getElementById("bewebchat").style.width = "70px";

                if (widthReceived == "floating") {
                    document.getElementById("window-iframe").setAttribute("style", "-webkit-overflow-scrolling: touch; visibility: visible; opacity: 1; right:20px; bottom:20px; position:fixed; overflow:hidden; width:346px; z-index:9999998; border: 0; height: " + winHeight + "px; ");
                } else {
                    document.getElementById("window-iframe").setAttribute("style", "-webkit-overflow-scrolling: touch; visibility: visible; opacity: 1; z-index: 9999999; right:0px; bottom:0px; position:fixed; overflow:hidden; width:346px; height: 100%; border: 0;");
                }

                if (titleChangeInterval) {
                    clearInterval(titleChangeInterval);
                }
                document.title = parentTitle;

                window.be_webchat = {
                    ...window.be_webchat,
                    windowOpened: true
                };

            } else if (dataReceived == "icon-closed") {
                let wid = "20px";
                if (totalWidth < 960) {
                    wid = "20px";
                }

                let element = document.getElementById("window-iframe");
                element.style.height = 0;

                secondIframeLoaded = false;

                window.be_webchat = {
                    ...window.be_webchat,
                    windowOpened: false
                };

            } else if (dataReceived == "getwidth") {
                e.source.postMessage({width: totalWidth, height: totalHeight, src: "birdeye", updateValFromParent: window.update}, "*");
            } else if (dataReceived == "show-bubble") {

                bfi.setAttribute("style", "-webkit-overflow-scrolling: touch; visibility: visible; opacity: 1; z-index: 9999999; right:20px; bottom:20px; position:fixed; overflow:hidden; width:340px; height: 227px; border: 0;");

                if (!getGoodBot("isGoodBot")) {
                    titleChangeInterval = setInterval(function() {
                        document.title = titleFlag ? parentTitle : newTitle;
                        titleFlag = !titleFlag;
                    }, 2500);
                }
            } else if (dataReceived == "hide-bubble") {
                bfi.setAttribute("style", "-webkit-overflow-scrolling: touch; visibility: visible; opacity: 1; z-index: 9999999; right:20px; bottom:20px; position:fixed; overflow:hidden; width:70px; height: 80px; border: 0;");

                if (titleChangeInterval) {
                    clearInterval(titleChangeInterval);
                }
                document.title = parentTitle;
            } else if (dataReceived == "get-parent-url") {
                if (!window.be_webchat) {
                    window.be_webchat = {
                        open: openWebchatFromOutside
                    };
                }
                e.source.postMessage({type: "put-parent-url", url: document.location.href,hostname: document.location.hostname, href: document.location.origin, src: "birdeye", isMicroSite: isMicroSite ? isMicroSite : false, enterpriseNumber: isMicroSite ? enterpriseNumber : null, width: totalWidth, height: totalHeight, src: "birdeye", updateValFromParent: window.update, bizDataResp: window.bizDataResp, beWebchatWindowObj: JSON.stringify(window.be_webchat), updatedBizData: true }, "*");
            } else if (dataReceived == "push-datalayer" && window && typeof (window.dataLayer) !== "undefined") {
                window.dataLayer.push(JSON.parse(dataReceivedSplit[1]));
            } else if (dataReceived == "push-analytics") {
                try {
                    try {
                        const config = JSON.parse(dataReceivedSplit[1]);

                        switch (config.googleAnalyticsVersion) {
                            case "UA":
                                if (ga && typeof (ga) == "function") {
                                    const nonInteractionObj = config.nonInteraction ? {'nonInteraction': 1} : null;

                                    ga('send', 'event', 'webchat', config.action, config.actionLabel, nonInteractionObj);
                                } else {
                                    console.warn("Webchat Analytics ReferenceError: ga is not defined");
                                }
                                break;
                            case "GST":
                                if (gtag && typeof (gtag) == "function") {
                                    const nonInteractionObj = config.nonInteraction ? {'non_interaction': true} : {};

                                    gtag('event', config.action, {
                                        'event_category': 'webchat',
                                        'event_label': config.actionLabel.trim(),
                                        'value': 1,
                                        ...nonInteractionObj
                                    });
                                } else {
                                    console.warn("Webchat Analytics ReferenceError: gtag is not defined");
                                }
                                break;
                        }
                    } catch (e) {
                        console.warn("Webchat Analytics", e);
                    }
                } catch (e) {
                    console.warn("Webchat Analytics", e);
                }
            } else if (dataReceived == "be-custom-event-fire") {
                const customEventData = JSON.parse(dataReceivedSplit[1]);
                const be_event = new CustomEvent("beWebchatCustomEvent", { detail: customEventData });
                window.parent.document.dispatchEvent(be_event);
            }
            else if(dataReceived == "bubble-icon-sound") {
                playBubbleSound();
            }
        }
    };

    if(document.readyState === "complete") {
        extensionInterval = setInterval(function() {
            env = window.envObj ? window.envObj : {};
            const bizResp = window.bizDataResp ? window.bizDataResp : {};
            const locationListLen = bizResp ? bizResp["businessLocations"] && bizResp["businessLocations"].length : 0;

            if (Object.keys(env).length && locationListLen > 0) {
                getFirstIframeAndInit(env);
            }
        }, 100);

    } else {
        if (window.addEventListener) {
            // DOM2 standard
            window.addEventListener("load", windowOnloadHandler, false);
        }
        else if (window.attachEvent) {
            // Microsoft's precursor to it, IE8 and earlier
            window.attachEvent("onload", windowOnloadHandler);
        }
        else {
            // Some pre-1999 browser
            window.onload = windowOnloadHandler;
        }
        
        function windowOnloadHandler() {
            env = window.envObj ? window.envObj : {};
            const bizResp = window.bizDataResp ? window.bizDataResp : {};
            const locationListLen = bizResp ? bizResp["businessLocations"] && bizResp["businessLocations"].length : 0;

            if (locationListLen > 0) {
                getFirstIframeAndInit(env);
            }
        }
    }

    function getFirstIframeAndInit(env) {
        extensionInterval && clearInterval(extensionInterval);
        bfi = document.createElement("iframe");
        bfi.name = "bfiframe";
        bfi.id = "bewebchat";
        bfi.loading = "lazy";
        bfi.title="Webchat widget";
        bfi.src = env.protocol + env.domain + `/getBubbleContent?update=${window.update}&source=${window.source}&bNum=${window.bNum}&apikey=${window.apikey}&widgetApiVersion=${window.widgetApiVersion}`;
        bfi.setAttribute("style", "-webkit-overflow-scrolling: touch; visibility: visible; opacity: 1; z-index: 9999999; right:20px; bottom:20px; position:fixed; overflow:hidden; width:70px; height: 80px; border:0");
        initIframe();
        bfi.onload = loadNewIframe.bind(this);
    }

    function appendSecondIframe() {
        secondIframeLoaded = true;
        onceClickedOnSecFrame = true;
        let bfdiv = document.getElementById("bf-revz-widget-" + window.wid);

        bfdiv.appendChild(windowIframe);

        const bodyEl = document.querySelector("#window-iframe").parentElement.parentElement;
        windowIframeBody = document.querySelector("#window-iframe").contentDocument ?  document.querySelector("#window-iframe").contentDocument.body : null;

        bodyEl.addEventListener("click", function(e){
            let emojiEl = windowIframeBody && windowIframeBody.querySelector(".emoji-wrap");

            if (emojiEl && e.target !== document.querySelector("#window-iframe")) {
                emojiEl.classList.add("hide-emoji");
                emojiEl.style.display= "none";
            }
        });
    }

    function loadNewIframe() {
        windowIframe = document.createElement("iframe");
        windowIframe.name = "wciframe";
        windowIframe.id = "window-iframe";
        windowIframe.loading = "lazy";
        windowIframe.title = "Webchat widget";
        windowIframe.src = env.protocol + env.domain + `/getChatWindowContent?emailRequired=${window.emailRequired}&bNum=${window.bNum}&mobileRequired=${window.mobileRequired}&defaultCountryCode=${window.defaultCountryCode}&apikey=${window.apikey}&widgetApiVersion=${window.widgetApiVersion}&isMicroSite=${window.isMicroSite}&activationStatus=${window.activationStatus}`;
        windowIframe.setAttribute("style", "-webkit-overflow-scrolling: touch; visibility: visible; opacity: 1; right:20px; bottom:20px; position:fixed; overflow:hidden; width:346px; z-index:9999998; border: 0; height: 0px;");
        appendSecondIframe();
    }
})();


 
    var wid = 3824495332; 
    var update = 0; 
    var soundOff = 1; 
    var envObj = {"domain":"webchat.birdeye.com","protocol":"https://"};
    var emailRequired = 0;
    var defaultCountryCode = 0;
    var mobileRequired = 1;
    var apikey = "1d72bb73fe4d48886bb4657c7e3edac4fb4f156ca6c639f1";
    var widgetApiVersion = 2;
    var bNum = 102685;
    var update = 0;
    var isMicroSite = false;
    var activationStatus = false;
    var source = false;
    var bizDataResp = {"businessId":166093869559959,"chatTheme":"floating","chatIcon":"twocolored","chatIconValue":null,"bannerColor":"#F8F8F8","bannerTextColor":"#212121","btnColor":"#1976D2","btnTxtColor":"#FFFFFF","enableReplyInBusinessHr":1,"enableReplyPostBusinessHr":1,"autoReplyTxt":"Thank you for contacting Angel Of The Winds Casino Resort! Someone from our team will reach out shortly.","replyTextPostBusinessHr":"Thank you for contacting us! We are currently out of business hours, but we’ll get back to you as soon as we can.","headerHeadline":"Hi there!","headerDescription":"Questions? We're here to help! Send us a message below.","webChatOnlineClosingMessageHeader":"We will text you !","webChatOnlineClosingMessageBody":"We will follow up with you soon. You can always text us at [Business Texting Number] ","apiKey":null,"businessDomain":null,"smb":false,"popupInterval":null,"microsite":0,"userProfile":[{"userProfileName":"","userProfileImage":""}],"businessLocations":[{"businessId":166215705729720,"location":"Arlington, WA - 3438 Stoluckquamish Ln","businessSMSPhoneNumber":"(360) 525-9511","address":null,"name":"Whiskey Prime Steakhouse","countryCode":"US","zipcode":"98223","address1":"3438 Stoluckquamish Ln","address2":null,"chatEnabled":true,"city":"Arlington","state":"WA","locationName":"Whiskey Prime Steakhouse","businessAlias":"Whiskey Prime Steakhouse","businessName":"Whiskey Prime Steakhouse","primaryName":"Whiskey Prime Steakhouse","secondaryName":"3438 Stoluckquamish Ln, Arlington, WA-98223","shortBusinessId":960766,"latitude":48.2145095,"longitude":-122.1841675,"phone":"(360) 474-9740"},{"businessId":166215705751936,"location":"Arlington, WA - 3438 Stoluckquamish Ln","businessSMSPhoneNumber":"(360) 346-9945","address":null,"name":"210 Brewing CO","countryCode":"US","zipcode":"98223","address1":"3438 Stoluckquamish Ln","address2":null,"chatEnabled":true,"city":"Arlington","state":"WA","locationName":"210 Brewing CO","businessAlias":"210 Brewing CO","businessName":"210 Brewing CO","primaryName":"210 Brewing CO","secondaryName":"3438 Stoluckquamish Ln, Arlington, WA-98223","shortBusinessId":960767,"latitude":48.2145095,"longitude":-122.1841675,"phone":"(360) 474-9740"},{"businessId":166118766843394,"location":"Arlington, WA - 3438 Stoluckquamish Ln","businessSMSPhoneNumber":"(360) 516-1951","address":null,"name":"Angel of the Winds Casino Resort","countryCode":"US","zipcode":"98223","address1":"3438 Stoluckquamish Ln","address2":null,"chatEnabled":true,"city":"Arlington","state":"WA","locationName":"Angel of the Winds Casino Resort","businessAlias":"Angel Of The Winds Casino Resort","businessName":"Angel of the Winds Casino Resort","primaryName":"Angel Of The Winds Casino Resort","secondaryName":"3438 Stoluckquamish Ln, Arlington, WA-98223","shortBusinessId":950700,"latitude":48.2145095,"longitude":-122.1841675,"phone":"(360) 474-9740"},{"businessId":166215705709937,"location":"Arlington, WA - 3438 Stoluckquamish Ln","businessSMSPhoneNumber":"(360) 531-6893","address":null,"name":"All Things Sports","countryCode":"US","zipcode":"98223","address1":"3438 Stoluckquamish Ln","address2":null,"chatEnabled":true,"city":"Arlington","state":"WA","locationName":"All Things Sports","businessAlias":"All Things Sports","businessName":"All Things Sports","primaryName":"All Things Sports","secondaryName":"3438 Stoluckquamish Ln, Arlington, WA-98223","shortBusinessId":960765,"latitude":48.2145095,"longitude":-122.1841675,"phone":"(360) 474-9740"},{"businessId":166215705872734,"location":"Arlington, WA - 3438 Stoluckquamish Ln","businessSMSPhoneNumber":"(360) 564-6734","address":null,"name":"Strikerz Bowling","countryCode":"US","zipcode":"98223","address1":"3438 Stoluckquamish Ln","address2":null,"chatEnabled":true,"city":"Arlington","state":"WA","locationName":"Strikerz Bowling","businessAlias":"Strikerz Bowling","businessName":"Strikerz Bowling","primaryName":"Strikerz Bowling","secondaryName":"3438 Stoluckquamish Ln, Arlington, WA-98223","shortBusinessId":960772,"latitude":48.2145095,"longitude":-122.1841675,"phone":"(360) 572-3904"},{"businessId":166215705973663,"location":"Arlington, WA - 3438 Stoluckquamish Ln","businessSMSPhoneNumber":"(360) 776-6185","address":null,"name":"Angel Of The Winds Fuel station","countryCode":"US","zipcode":"98223","address1":"3438 Stoluckquamish Ln","address2":null,"chatEnabled":true,"city":"Arlington","state":"WA","locationName":"Angel Of The Winds Fuel station","businessAlias":"Angel of the Winds Fuel station","businessName":"Angel Of The Winds Fuel station","primaryName":"Angel of the Winds Fuel station","secondaryName":"3438 Stoluckquamish Ln, Arlington, WA-98223","shortBusinessId":960773,"latitude":48.2145095,"longitude":-122.1841675,"phone":"(360) 474-9740"},{"businessId":166215705853075,"location":"Arlington, WA - 3438 Stoluckquamish Ln","businessSMSPhoneNumber":"(360) 492-4790","address":null,"name":"The Book @ 210 Brewing CO","countryCode":"US","zipcode":"98223","address1":"3438 Stoluckquamish Ln","address2":null,"chatEnabled":true,"city":"Arlington","state":"WA","locationName":"The Book @ 210 Brewing CO","businessAlias":"The Book @ 210 Brewing CO","businessName":"The Book @ 210 Brewing CO","primaryName":"The Book","secondaryName":"3438 Stoluckquamish Ln, Arlington, WA-98223","shortBusinessId":960770,"latitude":48.2145095,"longitude":-122.1841675,"phone":"(360) 572-3887"},{"businessId":166215705869794,"location":"Arlington, WA - 3438 Stoluckquamish Ln","businessSMSPhoneNumber":"(360) 404-7639","address":null,"name":"Jade Fusion","countryCode":"US","zipcode":"98223","address1":"3438 Stoluckquamish Ln","address2":null,"chatEnabled":true,"city":"Arlington","state":"WA","locationName":"Jade Fusion","businessAlias":"Jade Fusion","businessName":"Jade Fusion","primaryName":"Jade Fusion","secondaryName":"3438 Stoluckquamish Ln, Arlington, WA-98223","shortBusinessId":960771,"latitude":48.2145095,"longitude":-122.1841675,"phone":"(360) 474-9740"},{"businessId":166215705792488,"location":"Arlington, WA - 3438 Stoluckquamish Ln","businessSMSPhoneNumber":"(360) 276-2590","address":null,"name":"Rivers Run Event Center","countryCode":"US","zipcode":"98223","address1":"3438 Stoluckquamish Ln","address2":null,"chatEnabled":true,"city":"Arlington","state":"WA","locationName":"Rivers Run Event Center","businessAlias":"Rivers Run Event Center","businessName":"Rivers Run Event Center","primaryName":"Rivers Run Event Center","secondaryName":"3438 Stoluckquamish Ln, Arlington, WA-98223","shortBusinessId":960768,"latitude":48.2145095,"longitude":-122.1841675,"phone":"(360) 474-9740"},{"businessId":166215705806321,"location":"Arlington, WA - 3438 Stoluckquamish Ln","businessSMSPhoneNumber":"(360) 858-8950","address":null,"name":"Hotel","countryCode":"US","zipcode":"98223","address1":"3438 Stoluckquamish Ln","address2":null,"chatEnabled":true,"city":"Arlington","state":"WA","locationName":"Hotel","businessAlias":"Hotel","businessName":"Hotel","primaryName":"Hotel","secondaryName":"3438 Stoluckquamish Ln, Arlington, WA-98223","shortBusinessId":960769,"latitude":48.2145095,"longitude":-122.1841675,"phone":"(360) 474-9740"}],"chatBubble":"Have a question? We're here to help!","enableChatBubble":1,"enableChatBubbleSound":1,"chatIconColor":"#000000","chatIconForeColor":"#FFFFFF","chatConfigId":null,"widgetConfigId":102685,"supportedCountryCodes":["US","CA","PR","VI","MX"],"businessName":"Angel Of The Winds Casino Resort","widgetName":null,"enabled":1,"businessSMSPhoneNumber":null,"isLiveChatEnabled":true,"isChatbotEnabled":true,"businessTypeTitle":null,"teams":null,"enableGoogleAnalytics":false,"googleAnalyticsVersion":"","googleTrackingId":"","webChatOfflineClosingMessageHeader":"We will text you !","webChatOfflineClosingMessageBody":"We will follow up with you soon. You can always text us at [Business Texting Number].","liveChatOfflineClosingMessageHeader":"Text us!","liveChatOfflineClosingMessageBody":"The best way to get ahold of us is to text us [Business Texting Number].","liveChatOnlineClosingMessageHeader":"Text us!","liveChatOnlineClosingMessageBody":"The best way to get ahold of us is to text us [Business Texting Number].","liveChatOfflineWelcomeMessage":"We're closed right now but we got your message. We'll text you on your number when we're back!","liveChatOnlineWelcomeMessage":"Give us a moment while we look for someone available to help you.","installed":1,"websites":["http%3A//angelofthewinds.com","https%3A//angelofthewinds-com.translate.goog","https%3A//angelofthewinds.com"],"statusUpdateOn":1686538867000,"emailMandatory":false,"customFields":null,"disclaimer":"By sending this message, you expressly consent to receive communications from us. You may opt out at any time.","autoDetectLocationEnabled":false,"accountType":1,"livechatTimeout":60,"businessOpen":false};
    