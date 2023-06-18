/*! jQuery Migrate v3.4.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],a=1;a<=3;a++){if(+n[a]>+o[a])return 1;if(+n[a]<+o[a])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.4.0";var t=Object.create(null),o=(s.migrateDisablePatches=function(){for(var e=0;e<arguments.length;e++)t[arguments[e]]=!0},s.migrateEnablePatches=function(){for(var e=0;e<arguments.length;e++)delete t[arguments[e]]},s.migrateIsPatchEnabled=function(e){return!t[e]},n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion)),{});function i(e,t){var r=n.console;!s.migrateIsPatchEnabled(e)||s.migrateDeduplicateWarnings&&o[t]||(o[t]=!0,s.migrateWarnings.push(t+" ["+e+"]"),r&&r.warn&&!s.migrateMute&&(r.warn("JQMIGRATE: "+t),s.migrateTrace&&r.trace&&r.trace()))}function r(e,t,r,n,o){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return i(n,o),r},set:function(e){i(n,o),r=e}})}function a(e,t,r,n,o){var a=e[t];e[t]=function(){return o&&i(n,o),(s.migrateIsPatchEnabled(n)?r:a||s.noop).apply(this,arguments)}}function u(e,t,r,n,o){if(!o)throw new Error("No warning message provided");a(e,t,r,n,o)}function d(e,t,r,n){a(e,t,r,n)}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){o={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&i("quirks","jQuery is not compatible with Quirks Mode");var c,l,p,f={},m=s.fn.init,y=s.find,h=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,g=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,v=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(c in d(s.fn,"init",function(e){var t=Array.prototype.slice.call(arguments);return s.migrateIsPatchEnabled("selector-empty-id")&&"string"==typeof e&&"#"===e&&(i("selector-empty-id","jQuery( '#' ) is not a valid selector"),t[0]=[]),m.apply(this,t)},"selector-empty-id"),s.fn.init.prototype=s.fn,d(s,"find",function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&h.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(g,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),i("selector-hash","Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){i("selector-hash","Attribute selector with '#' was not fixed: "+r[0])}}return y.apply(this,r)},"selector-hash"),y)Object.prototype.hasOwnProperty.call(y,c)&&(s.find[c]=y[c]);u(s.fn,"size",function(){return this.length},"size","jQuery.fn.size() is deprecated and removed; use the .length property"),u(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"parseJSON","jQuery.parseJSON is deprecated; use JSON.parse"),u(s,"holdReady",s.holdReady,"holdReady","jQuery.holdReady is deprecated"),u(s,"unique",s.uniqueSort,"unique","jQuery.unique is deprecated; use jQuery.uniqueSort"),r(s.expr,"filters",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),r(s.expr,":",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&u(s,"trim",function(e){return null==e?"":(e+"").replace(v,"")},"trim","jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(u(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"nodeName","jQuery.nodeName is deprecated"),u(s,"isArray",Array.isArray,"isArray","jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(u(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"isNumeric","jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){f["[object "+t+"]"]=t.toLowerCase()}),u(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?f[Object.prototype.toString.call(e)]||"object":typeof e},"type","jQuery.type is deprecated"),u(s,"isFunction",function(e){return"function"==typeof e},"isFunction","jQuery.isFunction() is deprecated"),u(s,"isWindow",function(e){return null!=e&&e===e.window},"isWindow","jQuery.isWindow() is deprecated")),s.ajax&&(l=s.ajax,p=/(=)\?(?=&|$)|\?\?/,d(s,"ajax",function(){var e=l.apply(this,arguments);return e.promise&&(u(e,"success",e.done,"jqXHR-methods","jQXHR.success is deprecated and removed"),u(e,"error",e.fail,"jqXHR-methods","jQXHR.error is deprecated and removed"),u(e,"complete",e.always,"jqXHR-methods","jQXHR.complete is deprecated and removed")),e},"jqXHR-methods"),e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(p.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&p.test(e.data))&&i("jsonp-promotion","JSON-to-JSONP auto-promotion is deprecated")}));var j=s.fn.removeAttr,b=s.fn.toggleClass,w=/\S+/g;function Q(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}d(s.fn,"removeAttr",function(e){var r=this;return s.each(e.match(w),function(e,t){s.expr.match.bool.test(t)&&(i("removeAttr-bool","jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),j.apply(this,arguments)},"removeAttr-bool"),d(s.fn,"toggleClass",function(t){return void 0!==t&&"boolean"!=typeof t?b.apply(this,arguments):(i("toggleClass-bool","jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))},"toggleClass-bool");var x,A=!1,R=/^[a-z]/,T=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return A=!0,e=r.apply(this,arguments),A=!1,e})}),d(s,"swap",function(e,t,r,n){var o,a={};for(o in A||i("swap","jQuery.swap() is undocumented and deprecated"),t)a[o]=e.style[o],e.style[o]=t[o];for(o in r=r.apply(e,n||[]),t)e.style[o]=a[o];return r},"swap"),e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return i("cssProps","jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),e("4.0.0")&&"undefined"!=typeof Proxy&&(s.cssNumber=new Proxy({animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},{get:function(){return i("css-number","jQuery.cssNumber is deprecated"),Reflect.get.apply(this,arguments)},set:function(){return i("css-number","jQuery.cssNumber is deprecated"),Reflect.set.apply(this,arguments)}})),x=s.fn.css,d(s.fn,"css",function(e,t){var r,n=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(n,e,t)}),this):("number"==typeof t&&(t=Q(e),r=t,R.test(r)&&T.test(r[0].toUpperCase()+r.slice(1))||s.cssNumber[t]||i("css-number",'Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),x.apply(this,arguments))},"css-number");function C(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}var S,N,P,k,H,E,M,q=s.data,D=(d(s,"data",function(e,t,r){var n,o,a;if(t&&"object"==typeof t&&2===arguments.length){for(a in n=s.hasData(e)&&q.call(this,e),o={},t)a!==Q(a)?(i("data-camelCase","jQuery.data() always sets/gets camelCased names: "+a),n[a]=t[a]):o[a]=t[a];return q.call(this,e,o),t}return t&&"string"==typeof t&&t!==Q(t)&&(n=s.hasData(e)&&q.call(this,e))&&t in n?(i("data-camelCase","jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):q.apply(this,arguments)},"data-camelCase"),s.fx&&(P=s.Tween.prototype.run,k=function(e){return e},d(s.Tween.prototype,"run",function(){1<s.easing[this.easing].length&&(i("easing-one-arg","'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=k),P.apply(this,arguments)},"easing-one-arg"),S=s.fx.interval,N="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||i("fx-interval",N),s.migrateIsPatchEnabled("fx-interval")&&void 0===S?13:S},set:function(e){i("fx-interval",N),S=e}})),s.fn.load),F=s.event.add,W=s.event.fix,O=(s.event.props=[],s.event.fixHooks={},r(s.event.props,"concat",s.event.props.concat,"event-old-patch","jQuery.event.props.concat() is deprecated and removed"),d(s.event,"fix",function(e){var t=e.type,r=this.fixHooks[t],n=s.event.props;if(n.length){i("event-old-patch","jQuery.event.props are deprecated and removed: "+n.join());while(n.length)s.event.addProp(n.pop())}if(r&&!r._migrated_&&(r._migrated_=!0,i("event-old-patch","jQuery.event.fixHooks are deprecated and removed: "+t),(n=r.props)&&n.length))while(n.length)s.event.addProp(n.pop());return t=W.call(this,e),r&&r.filter?r.filter(t,e):t},"event-old-patch"),d(s.event,"add",function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&i("load-after-event","jQuery(window).on('load'...) called after load event occurred"),F.apply(this,arguments)},"load-after-event"),s.each(["load","unload","error"],function(e,t){d(s.fn,t,function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?D.apply(this,e):(i("shorthand-removed-v3","jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))},"shorthand-removed-v3")}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){u(s.fn,r,function(e,t){return 0<arguments.length?this.on(r,null,e,t):this.trigger(r)},"shorthand-deprecated-v3","jQuery.fn."+r+"() event shorthand is deprecated")}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&i("ready-event","'ready' event is deprecated")}},u(s.fn,"bind",function(e,t,r){return this.on(e,null,t,r)},"pre-on-methods","jQuery.fn.bind() is deprecated"),u(s.fn,"unbind",function(e,t){return this.off(e,null,t)},"pre-on-methods","jQuery.fn.unbind() is deprecated"),u(s.fn,"delegate",function(e,t,r,n){return this.on(t,e,r,n)},"pre-on-methods","jQuery.fn.delegate() is deprecated"),u(s.fn,"undelegate",function(e,t,r){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},"pre-on-methods","jQuery.fn.undelegate() is deprecated"),u(s.fn,"hover",function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)},"pre-on-methods","jQuery.fn.hover() is deprecated"),/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi),_=(s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.migrateEnablePatches("self-closed-tags")},d(s,"htmlPrefilter",function(e){var t,r;return(r=(t=e).replace(O,"<$1></$2>"))!==t&&C(t)!==C(r)&&i("self-closed-tags","HTML tags must be properly nested and closed: "+t),e.replace(O,"<$1></$2>")},"self-closed-tags"),s.migrateDisablePatches("self-closed-tags"),s.fn.offset);return d(s.fn,"offset",function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?_.apply(this,arguments):(i("offset-valid-elem","jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},"offset-valid-elem"),s.ajax&&(H=s.param,d(s,"param",function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(i("param-ajax-traditional","jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),H.call(this,e,t)},"param-ajax-traditional")),u(s.fn,"andSelf",s.fn.addBack,"andSelf","jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),s.Deferred&&(E=s.Deferred,M=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],d(s,"Deferred",function(e){var a=E(),i=a.promise();function t(){var o=arguments;return s.Deferred(function(n){s.each(M,function(e,t){var r="function"==typeof o[e]&&o[e];a[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===i?n.promise():this,r?[e]:arguments)})}),o=null}).promise()}return u(a,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),u(i,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),e&&e.call(a,a),a},"deferred-pipe"),s.Deferred.exceptionHook=E.exceptionHook),s});
(function( $ ) {
	'use strict';
	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */
	jQuery(document).ready( function($){
		var alp_ajax_loading = false; 
		if ( $('.amalinkspro-showcase.alp-load-api').length || $('.amalinkspro-comparison-table-public.alp-load-api').length ) {
			amalinkspro_afterload_or_ajax();
		}
		if ( $('.amalinkspro-showcase.alp-no-noapi').length || $('.amalinkspro-comparison-table-public.alp-no-noapi').length ) {
			amalinkspro_noapi_afterload_or_ajax();
		}
		if ( window.ALPvars && window.ALPvars.AlpNoAPI && window.ALPvars.AlpNoAPI === 'yesapi' ) {
			if ( alp_ajax_loading !== true ) {
				alp_ajax_loading = true;
				if (typeof almInit === "function") { 
					window.almComplete = function(alm){
						if ( window.ALPvars && $('.amalinkspro-showcase.alp-load-api' ).length ) {
							amalinkspro_afterload_or_ajax();
						}
					};
				}
				else {
					$( document ).ajaxComplete(function(e) {
						if ( window.ALPvars && $('.amalinkspro-showcase.alp-load-api' ).length ) {
							amalinkspro_afterload_or_ajax();
						}
					});
				}
			}
		}
		else if ( window.ALPvars && window.ALPvars.AlpNoAPI && window.ALPvars.AlpNoAPI === 'noapi' ) {
			if ( alp_ajax_loading !== true ) {
				alp_ajax_loading = true;
				if (typeof almInit === "function") { 
					window.almComplete = function(alm){
						if ( window.ALPvars && $('.amalinkspro-showcase.alp-no-noapi' ).length ) {
							amalinkspro_noapi_afterload_or_ajax();
						}
					};
				}
				else {
					$( document ).ajaxComplete(function(e) {
						if ( window.ALPvars && $('.amalinkspro-showcase.alp-no-noapi' ).length ) {
							amalinkspro_noapi_afterload_or_ajax();
						}
					});
				}
			}
		}
		function alp_build_showcase_api_data(showcase_obj, asin, asin_data, showcase_id) {
			console.log('*** showcase_id:' + showcase_id);
			if ( showcase_id == '4' ) {
				var hide_prime = showcase_obj.attr('data-alp-hide-prime');
	        	var hide_image = showcase_obj.attr('data-alp-hide-image');
	        	var hide_price = showcase_obj.attr('data-alp-hide-price');
	        	var hide_button = showcase_obj.attr('data-alp-hide-button');
	        	if ( hide_image !== '1' ) {
			    	if ( showcase_obj.attr('data-alp-img') === 'LargeImage' ) {
			    		if ( asin_data && asin_data.primaryImgUrlLg ) {
	            			var img_src = asin_data.primaryImgUrlLg;
	            			var img_height = asin_data.primaryImgUrlLgHeight;
	            			var img_width = asin_data.primaryImgUrlLgWidth;
	            		}
	            		else if ( asin_data && asin_data.primaryImgUrlMd ) {
	            			var img_src = asin_data.primaryImgUrlMd;
	            			var img_height = asin_data.primaryImgUrlMdHeight;
	            			var img_width = asin_data.primaryImgUrlMdWidth;
	            		}
	            		else if ( asin_data && asin_data.primaryImgUrlSm ) {
	            			var img_src = asin_data.primaryImgUrlSm;
	            			var img_height = asin_data.primaryImgUrlSmHeight;
	            			var img_width = asin_data.primaryImgUrlSmWidth;
	            		}
	            		else {
	            			showcase_obj.find('.amalinkspro-showcase-stats-col-img').remove();
	            		}
			    	}
			    	else {
			    		if ( ! showcase_obj.find('.amalinkspro-showcase-stats-col-img img').length ) {
			    			if ( asin_data && asin_data.imgVariants ) {
						    	if ( showcase_obj.attr('data-alp-img') ) {
						    		var chose_img_id = ''+showcase_obj.attr('data-alp-img')+'';
						    	}
						    	else {
						    		var chose_img_id = '0';
						    	}
						    	if ( asin_data.imgVariants[chose_img_id] && asin_data.imgVariants[chose_img_id].lg ) {
			            			var img_src = asin_data.imgVariants[chose_img_id].lg;
			            			var img_height = asin_data.imgVariants[chose_img_id].lgheight;
	            					var img_width = asin_data.imgVariants[chose_img_id].lgwidth;
			            		}
			            		else if ( asin_data.imgVariants[chose_img_id] && asin_data.imgVariants[chose_img_id].md ) {
			            			var img_src = asin_data.imgVariants[chose_img_id].md;
			            			var img_height = asin_data.imgVariants[chose_img_id].mdheight;
	            					var img_width = asin_data.imgVariants[chose_img_id].mdwidth;
			            		}
			            		else if ( asin_data.imgVariants[chose_img_id] && asin_data.imgVariants[chose_img_id].sm ) {
			            			var img_src = asin_data.imgVariants[chose_img_id].sm;
			            			var img_height = asin_data.imgVariants[chose_img_id].smheight;
	            					var img_width = asin_data.imgVariants[chose_img_id].smwidth;
			            		}
			            		else if ( asin_data && asin_data.primaryImgUrlLg ) {
			            			var img_src = asin_data.primaryImgUrlLg;
			            			var img_height = asin_data.primaryImgUrlLgHeight;
	            					var img_width = asin_data.primaryImgUrlLgWidth;
			            		}
			            		else if ( asin_data && asin_data.primaryImgUrlMd ) {
			            			var img_src = asin_data.primaryImgUrlMd;
			            			var img_height = asin_data.primaryImgUrlMdHeight;
	            					var img_width = asin_data.primaryImgUrlMdWidth;
			            		}
			            		else if ( asin_data && asin_data.primaryImgUrlSm ) {
			            			var img_src = asin_data.primaryImgUrlSm;
			            			var img_height = asin_data.primaryImgUrlSmHeight;
	            					var img_width = asin_data.primaryImgUrlSmWidth;
			            		}
			            		else {
			            			showcase_obj.find('.amalinkspro-showcase-stats-col-img').remove();
			            		}
		            		}
			    		}
	            	}
	        	}
	        	else {
	        		showcase_obj.find('.amalinkspro-showcase-stats-col-img').remove();
	        	}
	        	if ( img_src ) {
	    			showcase_obj.find('.alp-showcase-img-wrap .alp-showcase-img-link').append('<img src="'+img_src+'" width="'+img_width+'" height="'+img_height+'" alt="" />');
	    		}
	    		if (showcase_obj.hasClass('yesprime') && hide_prime !== '1' && asin_data && asin_data.prime ) {
			        $('<span class="alp-prime-eligible-tag"><span class="alp-prime-eligible-tag-top">Prime</span><span class="alp-prime-eligible-tag-bottom">Eligible</span></span>').insertBefore(showcase_obj.find('.amalinkspro-showcase-bottom-cta-link'));
			        showcase_obj.find('.amalinkspro-showcase-stats-col-info').prepend('<span class="alp-prime-eligible-tag"><span class="alp-prime-eligible-tag-top">Prime</span><span class="alp-prime-eligible-tag-bottom">Eligible</span></span>');
			    }
		        if ( hide_price !== '1' ) {
		        	if ( asin_data && asin_data.offerDisplay ) {
			            showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').html( asin_data.offerDisplay );
			        }
			        else {
			        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').remove();
			        }
			    }
			    else {
		        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').remove();
		        }
			    if ( hide_button === '1') {
		        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-link').remove();
		        }
			}
			else if ( showcase_id == '5' ) {
				if ( !showcase_obj.hasClass('apilink') && asin_data.detailPageURL ) {
					showcase_obj.find('a.amalinkspro-showcase-5-titlebox, .amalinkspro-showcase-bottom-cta-link, a.alp-showcase-img-link').attr('href', asin_data.detailPageURL);
				}
				var hide_prime = showcase_obj.attr('data-alp-hide-prime');
	        	var hide_image = showcase_obj.attr('data-alp-hide-image');
	        	var hide_price = showcase_obj.attr('data-alp-hide-price');
	        	var hide_button = showcase_obj.attr('data-alp-hide-button');
	        	if ( hide_image !== '1' ) {
			    	if ( showcase_obj.attr('data-alp-img') === 'LargeImage' ) {
			    		if ( asin_data && asin_data.primaryImgUrlLg ) {
	            			var img_src = asin_data.primaryImgUrlLg;
	            			var img_height = asin_data.primaryImgUrlLgHeight;
	            			var img_width = asin_data.primaryImgUrlLgWidth;
	            		}
	            		else if ( asin_data && asin_data.primaryImgUrlMd ) {
	            			var img_src = asin_data.primaryImgUrlMd;
	            			var img_height = asin_data.primaryImgUrlMdHeight;
	            			var img_width = asin_data.primaryImgUrlMdWidth;
	            		}
	            		else if ( asin_data && asin_data.primaryImgUrlSm ) {
	            			var img_src = asin_data.primaryImgUrlSm;
	            			var img_height = asin_data.primaryImgUrlSmHeight;
	            			var img_width = asin_data.primaryImgUrlSmWidth;
	            		}
	            		else {
	            			showcase_obj.find('.amalinkspro-showcase-stats-col-img').remove();
	            		}
			    	}
			    	else {
			    		if ( ! showcase_obj.find('.amalinkspro-showcase-stats-col-img img').length ) {
			    			if ( asin_data && asin_data.imgVariants ) {
						    	if ( showcase_obj.attr('data-alp-img') ) {
						    		var chose_img_id = ''+showcase_obj.attr('data-alp-img')+'';
						    	}
						    	else {
						    		var chose_img_id = '0';
						    	}
						    	if ( asin_data.imgVariants[chose_img_id] && asin_data.imgVariants[chose_img_id].lg ) {
			            			var img_src = asin_data.imgVariants[chose_img_id].lg;
			            			var img_height = asin_data.imgVariants[chose_img_id].lgheight;
	            					var img_width = asin_data.imgVariants[chose_img_id].lgwidth;
			            		}
			            		else if ( asin_data.imgVariants[chose_img_id] && asin_data.imgVariants[chose_img_id].md ) {
			            			var img_src = asin_data.imgVariants[chose_img_id].md;
			            			var img_height = asin_data.imgVariants[chose_img_id].mdheight;
	            					var img_width = asin_data.imgVariants[chose_img_id].mdwidth;
			            		}
			            		else if ( asin_data.imgVariants[chose_img_id] && asin_data.imgVariants[chose_img_id].sm ) {
			            			var img_src = asin_data.imgVariants[chose_img_id].sm;
			            			var img_height = asin_data.imgVariants[chose_img_id].smheight;
	            					var img_width = asin_data.imgVariants[chose_img_id].smwidth;
			            		}
			            		else if ( asin_data && asin_data.primaryImgUrlLg ) {
			            			var img_src = asin_data.primaryImgUrlLg;
			            			var img_height = asin_data.primaryImgUrlLgHeight;
	            					var img_width = asin_data.primaryImgUrlLgWidth;
			            		}
			            		else if ( asin_data && asin_data.primaryImgUrlMd ) {
			            			var img_src = asin_data.primaryImgUrlMd;
			            			var img_height = asin_data.primaryImgUrlMdHeight;
	            					var img_width = asin_data.primaryImgUrlMdWidth;
			            		}
			            		else if ( asin_data && asin_data.primaryImgUrlSm ) {
			            			var img_src = asin_data.primaryImgUrlSm;
			            			var img_height = asin_data.primaryImgUrlSmHeight;
	            					var img_width = asin_data.primaryImgUrlSmWidth;
			            		}
			            		else {
			            			showcase_obj.find('.amalinkspro-showcase-stats-col-img').remove();
			            		}
		            		}
			    		}
	            	}
	        	}
	        	else {
	        		showcase_obj.find('.amalinkspro-showcase-stats-col-img').remove();
	        	}
	        	if ( img_src ) {
	    			showcase_obj.find('.alp-showcase-img-wrap .alp-showcase-img-link').append('<img src="'+img_src+'" width="'+img_width+'" height="'+img_height+'" alt="" />');
	    		}
	    		if ( showcase_obj.hasClass('yesprime') && hide_prime !== '1' && asin_data && asin_data.prime ) {
	    			showcase_obj.find('.amalinkspro-showcase-bottom-cta-link').addClass('primeavailable');
			        $('<span class="alp-prime-eligible-tag"><span class="alp-prime-eligible-tag-top">Prime</span><span class="alp-prime-eligible-tag-bottom">Eligible</span></span>').insertBefore(showcase_obj.find('.amalinkspro-showcase-bottom-cta-link'));
			    }
		        if ( hide_price !== '1' ) {
		        	if ( asin_data && asin_data.offerDisplay ) {
			            showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').html( asin_data.offerDisplay );
			        }
			        else {
			        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').remove();
			        }
			    }
			    else {
		        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').remove();
		        }
			    if ( hide_button === '1') {
		        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-link').remove();
		        }
			}
			else if ( showcase_id == '6' ) {
				if ( !showcase_obj.hasClass('apilink') && asin_data.detailPageURL ) {
					showcase_obj.find('a.amalinkspro-showcase-6-titlebox').attr('href', asin_data.detailPageURL);
				}
				var hide_prime = showcase_obj.attr('data-alp-hide-prime');
	        	var hide_image = showcase_obj.attr('data-alp-hide-image');
	        	var hide_price = showcase_obj.attr('data-alp-hide-price');
	        	var hide_button = showcase_obj.attr('data-alp-hide-button');
	        	if ( hide_image !== '1' ) {
			    	if ( showcase_obj.attr('data-alp-img') === 'LargeImage' ) {
			    		if ( asin_data && asin_data.primaryImgUrlLg ) {
	            			var img_src = asin_data.primaryImgUrlLg;
	            			var img_height = asin_data.primaryImgUrlLgHeight;
	            			var img_width = asin_data.primaryImgUrlLgWidth;
	            		}
	            		else if ( asin_data && asin_data.primaryImgUrlMd ) {
	            			var img_src = asin_data.primaryImgUrlMd;
	            			var img_height = asin_data.primaryImgUrlMdHeight;
	            			var img_width = asin_data.primaryImgUrlMdWidth;
	            		}
	            		else if ( asin_data && asin_data.primaryImgUrlSm ) {
	            			var img_src = asin_data.primaryImgUrlSm;
	            			var img_height = asin_data.primaryImgUrlSmHeight;
	            			var img_width = asin_data.primaryImgUrlSmWidth;
	            		}
	            		else {
	            			showcase_obj.find('.amalinkspro-showcase-stats-col-img').remove();
	            		}
			    	}
			    	else {
			    		if ( ! showcase_obj.find('.amalinkspro-showcase-stats-col-img img').length ) {
			    			if ( asin_data && asin_data.imgVariants ) {
						    	if ( showcase_obj.attr('data-alp-img') ) {
						    		var chose_img_id = ''+showcase_obj.attr('data-alp-img')+'';
						    	}
						    	else {
						    		var chose_img_id = '0';
						    	}
						    	if ( asin_data.imgVariants[chose_img_id] && asin_data.imgVariants[chose_img_id].lg ) {
			            			var img_src = asin_data.imgVariants[chose_img_id].lg;
			            			var img_height = asin_data.imgVariants[chose_img_id].lgheight;
	            					var img_width = asin_data.imgVariants[chose_img_id].lgwidth;
			            		}
			            		else if ( asin_data.imgVariants[chose_img_id] && asin_data.imgVariants[chose_img_id].md ) {
			            			var img_src = asin_data.imgVariants[chose_img_id].md;
			            			var img_height = asin_data.imgVariants[chose_img_id].mdheight;
	            					var img_width = asin_data.imgVariants[chose_img_id].mdwidth;
			            		}
			            		else if ( asin_data.imgVariants[chose_img_id] && asin_data.imgVariants[chose_img_id].sm ) {
			            			var img_src = asin_data.imgVariants[chose_img_id].sm;
			            			var img_height = asin_data.imgVariants[chose_img_id].smheight;
	            					var img_width = asin_data.imgVariants[chose_img_id].smwidth;
			            		}
			            		else if ( asin_data && asin_data.primaryImgUrlLg ) {
			            			var img_src = asin_data.primaryImgUrlLg;
			            			var img_height = asin_data.primaryImgUrlLgHeight;
	            					var img_width = asin_data.primaryImgUrlLgWidth;
			            		}
			            		else if ( asin_data && asin_data.primaryImgUrlMd ) {
			            			var img_src = asin_data.primaryImgUrlMd;
			            			var img_height = asin_data.primaryImgUrlMdHeight;
	            					var img_width = asin_data.primaryImgUrlMdWidth;
			            		}
			            		else if ( asin_data && asin_data.primaryImgUrlSm ) {
			            			var img_src = asin_data.primaryImgUrlSm;
			            			var img_height = asin_data.primaryImgUrlSmHeight;
	            					var img_width = asin_data.primaryImgUrlSmWidth;
			            		}
			            		else {
			            			showcase_obj.find('.amalinkspro-showcase-stats-col-img').remove();
			            		}
		            		}
			    		}
	            	}
	        	}
	        	else {
	        		showcase_obj.find('.amalinkspro-showcase-stats-col-img').remove();
	        	}
	        	if ( img_src ) {
	    			showcase_obj.find('.alp-showcase-img-wrap .alp-showcase-img-link').append('<img src="'+img_src+'" width="'+img_width+'" height="'+img_height+'" alt="" />');
	    		}
	    		if ( showcase_obj.hasClass('yesprime') && hide_prime !== '1' && asin_data && asin_data.prime ) {
	    			showcase_obj.find('.amalinkspro-showcase-bottom-cta-link').addClass('primeavailable');
			        $('<span class="alp-prime-eligible-tag"><span class="alp-prime-eligible-tag-top">Prime</span><span class="alp-prime-eligible-tag-bottom">Eligible</span></span>').insertBefore(showcase_obj.find('.amalinkspro-showcase-bottom-cta-link'));
			    }
		        if ( hide_price !== '1' ) {
		        	if ( asin_data && asin_data.offerDisplay ) {
			            showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').html( asin_data.offerDisplay );
			        }
			        else {
			        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').remove();
			        }
			    }
			    else {
		        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').remove();
		        }
			    if ( hide_button === '1') {
		        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-link').remove();
		        }
			}
			else if ( showcase_id == '7' ) {
				if ( ! showcase_obj.hasClass('slick-initialized') ) {
					initiate_showcase_7_slick( showcase_obj );
				}
				if ( !showcase_obj.hasClass('apilink') && asin_data.detailPageURL ) {
					showcase_obj.find('a.amalinkspro-showcase-7-titlebox, a.alf-ama-img-slider-link, a.amalinkspro-showcase-cta-link').attr('href', asin_data.detailPageURL);
				}
				var hide_prime = showcase_obj.attr('data-alp-hide-prime');
	        	var hide_price = showcase_obj.attr('data-alp-hide-price');
	        	var hide_button = showcase_obj.attr('data-alp-hide-button');
	        	if ( showcase_obj.hasClass('yesprime') && hide_prime !== '1' && asin_data && asin_data.prime ) {
			        showcase_obj.find('.amalinkspro-showcase-cta-top .amalinkspro-showcase-cta-right').html('<span class="alp-prime-eligible-tag"><span class="alp-prime-eligible-tag-top">Prime</span><span class="alp-prime-eligible-tag-bottom">Eligible</span></span>');
			    }
		        if ( hide_price !== '1' ) {
		        	if ( asin_data && asin_data.offerDisplay ) {
			            showcase_obj.find('.amalinkspro-showcase-cta-top .amalinkspro-showcase-cta-price').html( asin_data.offerDisplay );
			        }
			        else {
			        	showcase_obj.find('.amalinkspro-showcase-cta-top .amalinkspro-showcase-cta-price').remove();
			        }
			    }
			    else {
		        	showcase_obj.find('.amalinkspro-showcase-cta-top .amalinkspro-showcase-cta-price').remove();
		        }
			    if ( hide_button === '1') {
		        	showcase_obj.find('.amalinkspro-showcase-cta-top .amalinkspro-showcase-cta-link').remove();
		        }
	        	var hide_prime_bottom = showcase_obj.attr('data-alp-hide-prime-bottom');
	        	var hide_price_bottom = showcase_obj.attr('data-alp-hide-price-bottom');
	        	var hide_button_bottom = showcase_obj.attr('data-alp-hide-button-bottom');
	        	if ( showcase_obj.hasClass('yesprime') && hide_prime_bottom !== '1' && asin_data && asin_data.prime ) {
	        		showcase_obj.find('.amalinkspro-showcase-cta-link').addClass('primeavailable');
			        showcase_obj.find('.amalinkspro-showcase-cta-bottom .amalinkspro-showcase-cta-right').html('<span class="alp-prime-eligible-tag"><span class="alp-prime-eligible-tag-top">Prime</span><span class="alp-prime-eligible-tag-bottom">Eligible</span></span>');
			    }
		        if ( hide_price_bottom !== '1' ) {
		        	if ( asin_data && asin_data.offerDisplay ) {
			            showcase_obj.find('.amalinkspro-showcase-cta-bottom .amalinkspro-showcase-cta-price').html( asin_data.offerDisplay );
			        }
			        else {
			        	showcase_obj.find('.amalinkspro-showcase-cta-bottom .amalinkspro-showcase-cta-price').remove();
			        }
			    }
			    else {
		        	showcase_obj.find('.amalinkspro-showcase-cta-bottom .amalinkspro-showcase-cta-price').remove();
		        }
			    if ( hide_button_bottom === '1') {
		        	showcase_obj.find('.amalinkspro-showcase-cta-bottom .amalinkspro-showcase-cta-link').remove();
		        }
			}
			else if ( showcase_id == '8' ) {
				if ( ! showcase_obj.hasClass('slick-initialized') ) {
					initiate_showcase_8_slick( showcase_obj );
				}
				if ( !showcase_obj.hasClass('apilink') && asin_data.detailPageURL ) {
					showcase_obj.find('a.amalinkspro-showcase-8-titlebox').attr('href', asin_data.detailPageURL);
				}
				var hide_prime = showcase_obj.attr('data-alp-hide-prime');
	        	var hide_price = showcase_obj.attr('data-alp-hide-price');
	        	var hide_button = showcase_obj.attr('data-alp-hide-button');
	    		if ( showcase_obj.hasClass('yesprime') && hide_prime !== '1' && asin_data && asin_data.prime ) {
	    			showcase_obj.find('.amalinkspro-showcase-bottom-cta-link').addClass('primeavailable');
			        $('<span class="alp-prime-eligible-tag"><span class="alp-prime-eligible-tag-top">Prime</span><span class="alp-prime-eligible-tag-bottom">Eligible</span></span>').insertBefore(showcase_obj.find('.amalinkspro-showcase-bottom-cta-link'));
			    }
		        if ( hide_price !== '1' ) {
		        	if ( asin_data && asin_data.offerDisplay ) {
			            showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').html( asin_data.offerDisplay );
			        }
			        else {
			        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').remove();
			        }
			    }
			    else {
		        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').remove();
		        }
			    if ( hide_button === '1') {
		        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-link').remove();
		        }
			}
			else if ( showcase_id == '9' ) {
				if ( ! showcase_obj.hasClass('slick-initialized') ) {
					initiate_showcase_9_slick( showcase_obj );
				}
				if ( !showcase_obj.hasClass('apilink') && asin_data.detailPageURL ) {
					showcase_obj.find('a.alf-ama-img-slider-link').attr('href', asin_data.detailPageURL);
				}
			}
			else if ( showcase_id == '10' ) {
				if ( !showcase_obj.hasClass('apilink') && asin_data.detailPageURL ) {
					showcase_obj.find('.alf-ama-img-slider-link').attr('href', asin_data.detailPageURL);
				}
			}
			else if ( showcase_id == '11' ) {
				var hide_prime = showcase_obj.attr('data-alp-hide-prime');
	        	var hide_image = showcase_obj.attr('data-alp-hide-image');
	        	var hide_price = showcase_obj.attr('data-alp-hide-price');
	        	var hide_button = showcase_obj.attr('data-alp-hide-button');
	        	if ( hide_image !== '1' ) {
			    	if ( showcase_obj.attr('data-alp-img') === 'LargeImage' ) {
			    		if ( asin_data && asin_data.primaryImgUrlLg ) {
	            			var img_src = asin_data.primaryImgUrlLg;
	            			var img_height = asin_data.primaryImgUrlLgHeight;
	            			var img_width = asin_data.primaryImgUrlLgWidth;
	            		}
	            		else if ( asin_data && asin_data.primaryImgUrlMd ) {
	            			var img_src = asin_data.primaryImgUrlMd;
	            			var img_height = asin_data.primaryImgUrlMdHeight;
	            			var img_width = asin_data.primaryImgUrlMdWidth;
	            		}
	            		else if ( asin_data && asin_data.primaryImgUrlSm ) {
	            			var img_src = asin_data.primaryImgUrlSm;
	            			var img_height = asin_data.primaryImgUrlSmHeight;
	            			var img_width = asin_data.primaryImgUrlSmWidth;
	            		}
	            		else {
	            			showcase_obj.find('.amalinkspro-showcase-stats-col-img').remove();
	            		}
			    	}
			    	else {
			    		if ( ! showcase_obj.find('.amalinkspro-showcase-stats-col-info img').length ) {
			    			if ( asin_data && asin_data.imgVariants ) {
						    	if ( showcase_obj.attr('data-alp-img') ) {
						    		var chose_img_id = ''+showcase_obj.attr('data-alp-img')+'';
						    	}
						    	else {
						    		var chose_img_id = '0';
						    	}
						    	if ( asin_data.imgVariants[chose_img_id] && asin_data.imgVariants[chose_img_id].lg ) {
			            			var img_src = asin_data.imgVariants[chose_img_id].lg;
			            			var img_height = asin_data.imgVariants[chose_img_id].lgheight;
	            					var img_width = asin_data.imgVariants[chose_img_id].lgwidth;
			            		}
			            		else if ( asin_data.imgVariants[chose_img_id] && asin_data.imgVariants[chose_img_id].md ) {
			            			var img_src = asin_data.imgVariants[chose_img_id].md;
			            			var img_height = asin_data.imgVariants[chose_img_id].mdheight;
	            					var img_width = asin_data.imgVariants[chose_img_id].mdwidth;
			            		}
			            		else if ( asin_data.imgVariants[chose_img_id] && asin_data.imgVariants[chose_img_id].sm ) {
			            			var img_src = asin_data.imgVariants[chose_img_id].sm;
			            			var img_height = asin_data.imgVariants[chose_img_id].smheight;
	            					var img_width = asin_data.imgVariants[chose_img_id].smwidth;
			            		}
			            		else if ( asin_data && asin_data.primaryImgUrlLg ) {
			            			var img_src = asin_data.primaryImgUrlLg;
			            			var img_height = asin_data.primaryImgUrlLgHeight;
	            					var img_width = asin_data.primaryImgUrlLgWidth;
			            		}
			            		else if ( asin_data && asin_data.primaryImgUrlMd ) {
			            			var img_src = asin_data.primaryImgUrlMd;
			            			var img_height = asin_data.primaryImgUrlMdHeight;
	            					var img_width = asin_data.primaryImgUrlMdWidth;
			            		}
			            		else if ( asin_data && asin_data.primaryImgUrlSm ) {
			            			var img_src = asin_data.primaryImgUrlSm;
			            			var img_height = asin_data.primaryImgUrlSmHeight;
	            					var img_width = asin_data.primaryImgUrlSmWidth;
			            		}
			            		else {
			            			showcase_obj.find('.amalinkspro-showcase-stats-col-img').remove();
			            		}
		            		}
			    		}
	            	}
	        	}
	        	else {
	        		showcase_obj.find('.amalinkspro-showcase-stats-col-img').remove();
	        	}
	        	if ( img_src ) {
	    			showcase_obj.find('.alp-showcase-img-wrap .alp-showcase-img-link').append('<img src="'+img_src+'" width="'+img_width+'" height="'+img_height+'" alt="" />');
	    		}
		        if ( hide_price !== '1' ) {
		        	if ( asin_data && asin_data.offerDisplay ) {
			            showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').html( asin_data.offerDisplay );
			        }
			        else {
			        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').remove();
			        }
			    }
			    else {
		        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').remove();
		        }
		        if ( showcase_obj.hasClass('yesprime') && hide_prime !== '1' && asin_data && asin_data.prime ) {
			        $('<span class="alp-prime-eligible-tag"><span class="alp-prime-eligible-tag-top">Prime</span><span class="alp-prime-eligible-tag-bottom">Eligible</span></span>').insertBefore(showcase_obj.find('.amalinkspro-showcase-bottom-cta-link'));
			    }
			    if ( hide_button === '1') {
		        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-link').remove();
		        }
			}
			else if ( showcase_id == '12' ) {
				var hide_prime = showcase_obj.attr('data-alp-hide-prime');
	        	var hide_image = showcase_obj.attr('data-alp-hide-image');
	        	var hide_price = showcase_obj.attr('data-alp-hide-price');
	        	var hide_button = showcase_obj.attr('data-alp-hide-button');
	        	if ( hide_image !== '1' ) {
			    	if ( showcase_obj.attr('data-alp-img') === 'LargeImage' ) {
			    		if ( asin_data && asin_data.primaryImgUrlLg ) {
	            			var img_src = asin_data.primaryImgUrlLg;
	            			var img_height = asin_data.primaryImgUrlLgHeight;
	            			var img_width = asin_data.primaryImgUrlLgWidth;
	            		}
	            		else if ( asin_data && asin_data.primaryImgUrlMd ) {
	            			var img_src = asin_data.primaryImgUrlMd;
	            			var img_height = asin_data.primaryImgUrlMdHeight;
	            			var img_width = asin_data.primaryImgUrlMdWidth;
	            		}
	            		else if ( asin_data && asin_data.primaryImgUrlSm ) {
	            			var img_src = asin_data.primaryImgUrlSm;
	            			var img_height = asin_data.primaryImgUrlSmHeight;
	            			var img_width = asin_data.primaryImgUrlSmWidth;
	            		}
	            		else {
	            			showcase_obj.find('.amalinkspro-showcase-stats-col-img').remove();
	            		}
			    	}
			    	else {
			    		if ( ! showcase_obj.find('.amalinkspro-showcase-stats-col-img img').length ) {
			    			if ( asin_data && asin_data.imgVariants ) {
						    	if ( showcase_obj.attr('data-alp-img') ) {
						    		var chose_img_id = ''+showcase_obj.attr('data-alp-img')+'';
						    	}
						    	else {
						    		var chose_img_id = '0';
						    	}
						    	if ( asin_data.imgVariants[chose_img_id] && asin_data.imgVariants[chose_img_id].lg ) {
			            			var img_src = asin_data.imgVariants[chose_img_id].lg;
			            			var img_height = asin_data.imgVariants[chose_img_id].lgheight;
	            					var img_width = asin_data.imgVariants[chose_img_id].lgwidth;
			            		}
			            		else if ( asin_data.imgVariants[chose_img_id] && asin_data.imgVariants[chose_img_id].md ) {
			            			var img_src = asin_data.imgVariants[chose_img_id].md;
			            			var img_height = asin_data.imgVariants[chose_img_id].mdheight;
	            					var img_width = asin_data.imgVariants[chose_img_id].mdwidth;
			            		}
			            		else if ( asin_data.imgVariants[chose_img_id] && asin_data.imgVariants[chose_img_id].sm ) {
			            			var img_src = asin_data.imgVariants[chose_img_id].sm;
			            			var img_height = asin_data.imgVariants[chose_img_id].smheight;
	            					var img_width = asin_data.imgVariants[chose_img_id].smwidth;
			            		}
			            		else if ( asin_data && asin_data.primaryImgUrlLg ) {
			            			var img_src = asin_data.primaryImgUrlLg;
			            			var img_height = asin_data.primaryImgUrlLgHeight;
	            					var img_width = asin_data.primaryImgUrlLgWidth;
			            		}
			            		else if ( asin_data && asin_data.primaryImgUrlMd ) {
			            			var img_src = asin_data.primaryImgUrlMd;
			            			var img_height = asin_data.primaryImgUrlMdHeight;
	            					var img_width = asin_data.primaryImgUrlMdWidth;
			            		}
			            		else if ( asin_data && asin_data.primaryImgUrlSm ) {
			            			var img_src = asin_data.primaryImgUrlSm;
			            			var img_height = asin_data.primaryImgUrlSmHeight;
	            					var img_width = asin_data.primaryImgUrlSmWidth;
			            		}
			            		else {
			            			showcase_obj.find('.amalinkspro-showcase-stats-col-img').remove();
			            		}
		            		}
			    		}
	            	}
	        	}
	        	else {
	        		showcase_obj.find('.amalinkspro-showcase-stats-col-img').remove();
	        	}
	        	if ( img_src ) {
	    			showcase_obj.find('.alp-showcase-img-wrap .alp-showcase-img-link').append('<img src="'+img_src+'" width="'+img_width+'" height="'+img_height+'" alt="" />');
	    		}
	    		if ( showcase_obj.hasClass('yesprime') && hide_prime !== '1' && asin_data && asin_data.prime ) {
			        showcase_obj.find('.amalinkspro-showcase-bottom-cta').prepend('<span class="alp-prime-eligible-tag"><span class="alp-prime-eligible-tag-top">Prime</span><span class="alp-prime-eligible-tag-bottom">Eligible</span></span>');
			    }
		        if ( hide_price !== '1' ) {
		        	if ( asin_data && asin_data.offerDisplay ) {
			            showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').html( asin_data.offerDisplay );
			        }
			        else {
			        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').remove();
			        }
			    }
			    else {
		        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').remove();
		        }
			    if ( hide_button === '1') {
		        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-link').remove();
		        }
			}
			else if ( showcase_id == '13' ) {
				if ( ! showcase_obj.hasClass('slick-initialized') ) {
					initiate_showcase_13_slick( showcase_obj );
				}
			}
	        if ( showcase_obj.hasClass('amalinkspro-showcase-auto') ) {
	        	var hide_title = showcase_obj.attr('data-alp-hide-title');
			    var hide_features = showcase_obj.attr('data-alp-hide-features');
			    if ( hide_title !== 'true' && showcase_obj.find('.amalinkspro-showcase-4-titlebox').text() === '' && asin_data && asin_data.title ) {
            		showcase_obj.find('.amalinkspro-showcase-4-titlebox').text( asin_data.title );
            	}
            	if ( asin_data && asin_data.features ) {
					var features = asin_data.features;
					if ( features ) {
						var featuresString = '<ul>';
							for (var i = 0, len = features.length; i < len; i++) {
								featuresString += '<li class="amalinkspro-showcase-feature">';
								featuresString += features[i];
								featuresString += '</li>';
							}
						featuresString += '</ul>';
					}
					else {
						featuresString += '<li></li>';
					}
					showcase_obj.find('.showcase-4-features').html(featuresString);
				}
				var hide_prime = showcase_obj.attr('data-alp-hide-prime');
	        	var hide_image = showcase_obj.attr('data-alp-hide-image');
	        	var hide_price = showcase_obj.attr('data-alp-hide-price');
	        	var hide_button = showcase_obj.attr('data-alp-hide-button');
	        	if ( hide_image !== '1' ) {
			    	if ( showcase_obj.attr('data-alp-img') === 'LargeImage' ) {
			    		if ( asin_data && asin_data.primaryImgUrlLg ) {
	            			var img_src = asin_data.primaryImgUrlLg;
	            		}
	            		else if ( asin_data && asin_data.primaryImgUrlMd ) {
	            			var img_src = asin_data.primaryImgUrlMd;
	            		}
	            		else if ( asin_data && asin_data.primaryImgUrlSm ) {
	            			var img_src = asin_data.primaryImgUrlSm;
	            		}
	            		else {
	            			showcase_obj.find('.amalinkspro-showcase-stats-col-img').remove();
	            		}
			    	}
			    	else {
					    if ( asin_data && asin_data.imgVariants ) {
					    	if ( showcase_obj.attr('data-alp-img') ) {
					    		var chose_img_id = ''+showcase_obj.attr('data-alp-img')+'';
					    	}
					    	else {
					    		var chose_img_id = '0';
					    	}
					    	if ( asin_data.imgVariants[chose_img_id] && asin_data.imgVariants[chose_img_id].lg ) {
		            			var img_src = asin_data.imgVariants[chose_img_id].lg;
		            		}
		            		else if ( asin_data.imgVariants[chose_img_id] && asin_data.imgVariants[chose_img_id].md ) {
		            			var img_src = asin_data.imgVariants[chose_img_id].md;
		            		}
		            		else if ( asin_data.imgVariants[chose_img_id] && asin_data.imgVariants[chose_img_id].sm ) {
		            			var img_src = asin_data.imgVariants[chose_img_id].sm;
		            		}
		            		else if ( asin_data && asin_data.primaryImgUrlLg ) {
		            			var img_src = asin_data.primaryImgUrlLg;
		            		}
		            		else if ( asin_data && asin_data.primaryImgUrlMd ) {
		            			var img_src = asin_data.primaryImgUrlMd;
		            		}
		            		else if ( asin_data && asin_data.primaryImgUrlSm ) {
		            			var img_src = asin_data.primaryImgUrlSm;
		            		}
		            		else {
		            			showcase_obj.find('.amalinkspro-showcase-stats-col-img').remove();
		            		}
	            		}
	            	}
	        	}
	        	else {
	        		showcase_obj.find('.amalinkspro-showcase-stats-col-img').remove();
	        	}
	        	if ( img_src ) {
	    			showcase_obj.find('.alp-showcase-img-wrap .alp-showcase-img-link').append('<img src="'+img_src+'" alt="" />');
	    		}
	    		if ( showcase_obj.hasClass('yesprime') && hide_prime !== '1' && asin_data && asin_data.prime ) {
			        $('<span class="alp-prime-eligible-tag"><span class="alp-prime-eligible-tag-top">Prime</span><span class="alp-prime-eligible-tag-bottom">Eligible</span></span>').insertBefore(showcase_obj.find('.amalinkspro-showcase-bottom-cta-link'));
			        showcase_obj.find('.amalinkspro-showcase-stats-col-info').prepend('<span class="alp-prime-eligible-tag"><span class="alp-prime-eligible-tag-top">Prime</span><span class="alp-prime-eligible-tag-bottom">Eligible</span></span>');
			    }
		        if ( hide_price !== '1' ) {
		        	if ( asin_data && asin_data.offerDisplay ) {
			            showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').html( asin_data.offerDisplay );
			        }
			        else {
			        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').remove();
			        }
			    }
			    else {
		        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').remove();
		        }
			    if ( hide_button === '1') {
		        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-link').remove();
		        }
	        }
	        if ( showcase_obj.hasClass('amalinkspro-showcase-auto-2') ) {
	        	var hide_title = showcase_obj.attr('data-alp-hide-title');
			    if ( hide_title !== 'true' && showcase_obj.find('.amalinkspro-showcase-4-titlebox').text() === '' && asin_data && asin_data.title ) {
            		showcase_obj.find('.amalinkspro-showcase-5-titlebox').text( asin_data.title );
            	}
	        	if ( !showcase_obj.hasClass('apilink') && asin_data.detailPageURL ) {
					showcase_obj.find('a.amalinkspro-showcase-5-titlebox, .amalinkspro-showcase-bottom-cta-link, a.alp-showcase-img-link').attr('href', asin_data.detailPageURL);
				}
				var hide_prime = showcase_obj.attr('data-alp-hide-prime');
	        	var hide_image = showcase_obj.attr('data-alp-hide-image');
	        	var hide_price = showcase_obj.attr('data-alp-hide-price');
	        	var hide_button = showcase_obj.attr('data-alp-hide-button');
	        	if ( hide_image !== '1' ) {
			    	if ( showcase_obj.attr('data-alp-img') === 'LargeImage' ) {
			    		if ( asin_data && asin_data.primaryImgUrlLg ) {
	            			var img_src = asin_data.primaryImgUrlLg;
	            		}
	            		else if ( asin_data && asin_data.primaryImgUrlMd ) {
	            			var img_src = asin_data.primaryImgUrlMd;
	            		}
	            		else if ( asin_data && asin_data.primaryImgUrlSm ) {
	            			var img_src = asin_data.primaryImgUrlSm;
	            		}
	            		else {
	            			showcase_obj.find('.amalinkspro-showcase-stats-col-img').remove();
	            		}
			    	}
			    	else {
					    if ( asin_data && asin_data.imgVariants ) {
					    	if ( showcase_obj.attr('data-alp-img') ) {
					    		var chose_img_id = ''+showcase_obj.attr('data-alp-img')+'';
					    	}
					    	else {
					    		var chose_img_id = '0';
					    	}
					    	if ( asin_data.imgVariants[chose_img_id] && asin_data.imgVariants[chose_img_id].lg ) {
		            			var img_src = asin_data.imgVariants[chose_img_id].lg;
		            		}
		            		else if ( asin_data.imgVariants[chose_img_id] && asin_data.imgVariants[chose_img_id].md ) {
		            			var img_src = asin_data.imgVariants[chose_img_id].md;
		            		}
		            		else if ( asin_data.imgVariants[chose_img_id] && asin_data.imgVariants[chose_img_id].sm ) {
		            			var img_src = asin_data.imgVariants[chose_img_id].sm;
		            		}
		            		else if ( asin_data && asin_data.primaryImgUrlLg ) {
		            			var img_src = asin_data.primaryImgUrlLg;
		            		}
		            		else if ( asin_data && asin_data.primaryImgUrlMd ) {
		            			var img_src = asin_data.primaryImgUrlMd;
		            		}
		            		else if ( asin_data && asin_data.primaryImgUrlSm ) {
		            			var img_src = asin_data.primaryImgUrlSm;
		            		}
		            		else {
		            			showcase_obj.find('.amalinkspro-showcase-stats-col-img').remove();
		            		}
	            		}
	            	}
	        	}
	        	else {
	        		showcase_obj.find('.amalinkspro-showcase-stats-col-img').remove();
	        	}
	        	if ( img_src ) {
	    			showcase_obj.find('.alp-showcase-img-wrap .alp-showcase-img-link').append('<img src="'+img_src+'" alt="" />');
	    		}
	    		if ( showcase_obj.hasClass('yesprime') && hide_prime !== '1' && asin_data && asin_data.prime ) {
	    			showcase_obj.find('.amalinkspro-showcase-bottom-cta-link').addClass('primeavailable');
			        $('<span class="alp-prime-eligible-tag"><span class="alp-prime-eligible-tag-top">Prime</span><span class="alp-prime-eligible-tag-bottom">Eligible</span></span>').insertBefore(showcase_obj.find('.amalinkspro-showcase-bottom-cta-link'));
			    }
		        if ( hide_price !== '1' ) {
		        	if ( asin_data && asin_data.offerDisplay ) {
			            showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').html( asin_data.offerDisplay );
			        }
			        else {
			        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').remove();
			        }
			    }
			    else {
		        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-price').remove();
		        }
			    if ( hide_button === '1') {
		        	showcase_obj.find('.amalinkspro-showcase-bottom-cta-link').remove();
		        }
	        }
		}
		/*
		on load: loop through all showcases and get the ASINS, combine in a group.
		on load: lookup the asin data
		on load: update loaded showcases with API data
		on ajax: loop through all NEW showcases and get the ASINS, ADD to the previous group
		on ajax: lookup the new asin data
		on ajax: apply the NEW api info to the NEW showcases
		*/
		var asins_string = '';
		var alp_showcase_counter = 0;
		var alp_asins = [];
		function amalinkspro_afterload_or_ajax() {
			if ( ALPvars.AlpNoAPI && ALPvars.AlpNoAPI && ALPvars.AlpNoAPI === 'yesapi' ) {
				alp_gather_new_asins();
			}
		}
		function amalinkspro_noapi_afterload_or_ajax() {
			var showcase = $('.amalinkspro-showcase.alp-no-noapi');
			showcase.each(function() {
				if ( $(this).hasClass('amalinkspro-showcase-7') ) {
					if ( ! $(this).hasClass('slick-initialized') ) {
						initiate_showcase_7_slick( $(this) );
					}
				}
				else if ( $(this).hasClass('amalinkspro-showcase-8') ) {
					if ( ! $(this).hasClass('slick-initialized') ) {
						initiate_showcase_8_slick( $(this) );
					}
				}
				else if ( $(this).hasClass('amalinkspro-showcase-9') ) {
					if ( ! $(this).hasClass('slick-initialized') ) {
						initiate_showcase_9_slick( $(this) );
					}
				}
				else if ( $(this).hasClass('amalinkspro-showcase-13') ) {
					if ( ! $(this).hasClass('slick-initialized') ) {
						initiate_showcase_13_slick( $(this) );
					}
				}
				$(this).removeClass('alp-no-noapi');
			});
			var tables = $('.amalinkspro-comparison-table-public.alp-no-noapi');
			tables.each(function() {
				$(this).find('i.icon-amalinkspro-spin3').remove();
				$(this).find('td[data-alp-table-td-type=price-offer]').html('<span class="alp-no-price">$</span>');
				$(this).find('td[data-alp-table-td-type=image]').html('<span class="alp-no-image">N/A</span>');
				$(this).footable();
			});
			alp_ajax_loading = false;
		}
		function alp_gather_new_asins() {
			alp_asins = [];
			alp_showcase_counter = 0;
			if ( $('.amalinkspro-text-link:not(.apilink)').length ) {
				$('.amalinkspro-text-link:not(.apilink)').each(function(i, obj) {
					if ( $(obj).attr('data-alp-asin') !== 'noapi' && $(obj).attr('data-alp-asin') !== '' ) {
						alp_asins[alp_showcase_counter] = $(obj).attr('data-alp-asin');
						alp_showcase_counter++;
					}
				});
			}
			$('.amalinkspro-image-link:not(.apilink)').each(function(i, obj) {
				if ( $(obj).attr('data-alp-asin') && $(obj).attr('data-alp-asin') !== 'noapi' && $(obj).attr('data-alp-asin') !== '' ) {
					alp_asins[alp_showcase_counter] = $(obj).attr('data-alp-asin');
					alp_showcase_counter++;
				}
			});
			$('.amalinkspro-cta-wrap .amalinkspro-cta-btn:not(.apilink)').each(function(i, obj) {
				if ( $(obj).attr('data-alp-asin') !== 'noapi' && $(obj).attr('data-alp-asin') !== '' ) {
					alp_asins[alp_showcase_counter] = $(obj).attr('data-alp-asin');
					alp_showcase_counter++;
				}
			});
			if ( $('.amalinkspro-showcase-4.alp-load-api').length ) {
				$('.amalinkspro-showcase-4.alp-load-api').each(function(i, obj) {
					if ( $(obj).attr('data-alp-asin') !== 'noapi' && $(obj).attr('data-alp-asin') !== '' && $(obj).attr('data-alp-asin') !== 'noasin' ) {
						if( alp_asins.indexOf( $(obj).attr('data-alp-asin') ) === -1){
							alp_asins[alp_showcase_counter] = $(obj).attr('data-alp-asin');
							alp_showcase_counter++;
						}
					}
				});
			}
			if ( $('.amalinkspro-showcase-auto').length ) {
				$('.amalinkspro-showcase-auto').each(function(i, obj) {
					if ( $(obj).attr('data-alp-asin') !== 'noapi' && $(obj).attr('data-alp-asin') !== '' && $(obj).attr('data-alp-asin') !== 'noasin' ) {
						if( alp_asins.indexOf( $(obj).attr('data-alp-asin') ) === -1){
							alp_asins[alp_showcase_counter] = $(obj).attr('data-alp-asin');
							alp_showcase_counter++;
						}
					}
				});
			}
			if ( $('.amalinkspro-showcase-auto-2').length ) {
				$('.amalinkspro-showcase-auto-2').each(function(i, obj) {
					if ( $(obj).attr('data-alp-asin') !== 'noapi' && $(obj).attr('data-alp-asin') !== '' && $(obj).attr('data-alp-asin') !== 'noasin' ) {
						if( alp_asins.indexOf( $(obj).attr('data-alp-asin') ) === -1){
							alp_asins[alp_showcase_counter] = $(obj).attr('data-alp-asin');
							alp_showcase_counter++;
						}
					}
				});
			}
			if ( $('.amalinkspro-showcase-5.alp-load-api').length ) {
				$('.amalinkspro-showcase-5.alp-load-api').each(function(i, obj) {
					if ( $(obj).attr('data-alp-asin') !== 'noapi' && $(obj).attr('data-alp-asin') !== '' && $(obj).attr('data-alp-asin') !== 'noasin' ) {
						if( alp_asins.indexOf( $(obj).attr('data-alp-asin') ) === -1){
							alp_asins[alp_showcase_counter] = $(obj).attr('data-alp-asin');
							alp_showcase_counter++;
						}
					}
				});
			}
			if ( $('.amalinkspro-showcase-6.alp-load-api').length ) {
				$('.amalinkspro-showcase-6.alp-load-api').each(function(i, obj) {
					if ( $(obj).attr('data-alp-asin') !== 'noapi' && $(obj).attr('data-alp-asin') !== '' && $(obj).attr('data-alp-asin') !== 'noasin' ) {
						if( alp_asins.indexOf( $(obj).attr('data-alp-asin') ) === -1){
							alp_asins[alp_showcase_counter] = $(obj).attr('data-alp-asin');
							alp_showcase_counter++;
						}
					}
				});
			}
			if ( $('.amalinkspro-showcase-7.alp-load-api').length ) {
				$('.amalinkspro-showcase-7.alp-load-api').each(function(i, obj) {
					if ( $(obj).attr('data-alp-asin') !== 'noapi' && $(obj).attr('data-alp-asin') !== '' && $(obj).attr('data-alp-asin') !== 'noasin' ) {
						if( alp_asins.indexOf( $(obj).attr('data-alp-asin') ) === -1){
							alp_asins[alp_showcase_counter] = $(obj).attr('data-alp-asin');
							alp_showcase_counter++;
						}
					}
				});
			}
			if ( $('.amalinkspro-showcase-8.alp-load-api').length ) {
				$('.amalinkspro-showcase-8.alp-load-api').each(function(i, obj) {
					if ( $(obj).attr('data-alp-asin') !== 'noapi' && $(obj).attr('data-alp-asin') !== '' && $(obj).attr('data-alp-asin') !== 'noasin' ) {
						if( alp_asins.indexOf( $(obj).attr('data-alp-asin') ) === -1){
							alp_asins[alp_showcase_counter] = $(obj).attr('data-alp-asin');
							alp_showcase_counter++;
						}
					}
				});
			}
			if ( $('.amalinkspro-showcase-9.alp-load-api').length ) {
				$('.amalinkspro-showcase-9.alp-load-api').each(function(i, obj) {
					if ( $(obj).attr('data-alp-asin') !== 'noapi' && $(obj).attr('data-alp-asin') !== '' && $(obj).attr('data-alp-asin') !== 'noasin' ) {
						if( alp_asins.indexOf( $(obj).attr('data-alp-asin') ) === -1){
							alp_asins[alp_showcase_counter] = $(obj).attr('data-alp-asin');
							alp_showcase_counter++;
						}
					}
				});
			}
			if ( $('.amalinkspro-showcase-10.alp-load-api').length ) {
				$('.amalinkspro-showcase-10.alp-load-api').each(function(i, obj) {
					if ( $(obj).attr('data-alp-asin') !== 'noapi' && $(obj).attr('data-alp-asin') !== '' && $(obj).attr('data-alp-asin') !== 'noasin' ) {
						if( alp_asins.indexOf( $(obj).attr('data-alp-asin') ) === -1){
							alp_asins[alp_showcase_counter] = $(obj).attr('data-alp-asin');
							alp_showcase_counter++;
						}
					}
				});
			}
			if ( $('.amalinkspro-showcase-11.alp-load-api').length ) {
				$('.amalinkspro-showcase-11.alp-load-api').each(function(i, obj) {
					if ( $(obj).attr('data-alp-asin') !== 'noapi' && $(obj).attr('data-alp-asin') !== '' && $(obj).attr('data-alp-asin') !== 'noasin' ) {
						if( alp_asins.indexOf( $(obj).attr('data-alp-asin') ) === -1){
							alp_asins[alp_showcase_counter] = $(obj).attr('data-alp-asin');
							alp_showcase_counter++;
						}
					}
				});
			}
			if ( $('.amalinkspro-showcase-12.alp-load-api').length ) {
				$('.amalinkspro-showcase-12.alp-load-api').each(function(i, obj) {
					if ( $(obj).attr('data-alp-asin') !== 'noapi' && $(obj).attr('data-alp-asin') !== '' && $(obj).attr('data-alp-asin') !== 'noasin' ) {
						if( alp_asins.indexOf( $(obj).attr('data-alp-asin') ) === -1){
							alp_asins[alp_showcase_counter] = $(obj).attr('data-alp-asin');
							alp_showcase_counter++;
						}
					}
				});
			}
			if ( $('.amalinkspro-showcase-13.alp-load-api').length ) {
				$('.amalinkspro-showcase-13.alp-load-api').each(function(i, obj) {
					if ( $(obj).attr('data-alp-asin') !== 'noapi' && $(obj).attr('data-alp-asin') !== '' && $(obj).attr('data-alp-asin') !== 'noasin' ) {
						if( alp_asins.indexOf( $(obj).attr('data-alp-asin') ) === -1){
							alp_asins[alp_showcase_counter] = $(obj).attr('data-alp-asin');
							alp_showcase_counter++;
						}
					}
				});
			}
			var all_table_asins = '';
			if ( $('.amalinkspro-comparison-table-public.alp-load-api').length ) {
				var count_tables = 0;
			 	$('.amalinkspro-comparison-table-public.alp-load-api').each(function(i, obj) {
			 		if (count_tables >= 1){
				 		all_table_asins += ',';
				 	}
			 		all_table_asins += $(this).attr('data-all-asins');
			 		count_tables ++;
		 		});
		 	}
			if ( alp_asins ) {
				var asins_string = alp_asins.join(',');
				if (asins_string !== '' && all_table_asins !== '' ) {
					asins_string = asins_string + ',' + all_table_asins;
				}
				else if (asins_string == '' && all_table_asins !== '' ) {
					asins_string = all_table_asins;
				}
			}
			else {
				asins_string = '';
			}
			if ( asins_string !== '') {
		 		var data = {
		            action: 'alp_paapi5_get_asin_groups_data_for_showcase',
		            asins: asins_string
		        };
		 		$.ajax({
		            type: 'POST',
		            url: ajaxurl,
		            data: data,
		            success: function(response) {
		            	function isJson(str) {
						    try {
						        JSON.parse(str);
						    } catch (e) {
						        return false;
						    }
						    return true;
						}
		            	if (response && isJson(response) ) 
						{
		            		var response_obj = JSON.parse(response);
		            		var alp_api5_asins = response_obj;
		            		var showcase_selector = '.amalinkspro-showcase.alp-load-api';
							var showcase = $(showcase_selector);
							if ( showcase && alp_api5_asins ) {
								showcase.each(function() {
									var showcase_obj = $(this);
									var alp_asin = showcase_obj.attr('data-alp-asin');
									var asin_data = alp_api5_asins[alp_asin];
									var showcase_id = showcase_obj.attr('data-alp-showcase-id');
			            			alp_build_showcase_api_data(showcase_obj,alp_asin, asin_data, showcase_id);
								});
								var currentTime = new Date();
								if ( currentTime ) {
									var hours = currentTime.getHours();
									var minutes = currentTime.getMinutes();
									var day = currentTime.getDate();
									var month = currentTime.getMonth()+1;
									var year = currentTime.getFullYear();
									var suffix = "AM";
									if (hours >= 12) {
									    suffix = "PM";
									    hours = hours - 12;
									}
									if (hours == 0) {
									    hours = 12;
									}
									if (minutes < 10) {
									    minutes = "0" + minutes;
									}
									var final_date_html = month + '/' + day + '/' + year + ' ' + hours + ":" + minutes + " " + suffix;
								}
								else {
									var final_date_html = 'Right Now.';
								}
								$('.amalinkspro-showcase').find('.alp-api-request-date').html(month + '/' + day + '/' + year + ' ' + hours + ":" + minutes + " " + suffix);
							}
							if ( $('.amalinkspro-comparison-table-public.alp-load-api').length ) {
			 					$('.amalinkspro-comparison-table-public.alp-load-api').each(function(i, obj) {
			 						var table_obj = $(this);
			 						var asin_data = alp_api5_asins;
			 						amalinkspro_tb_afterload_or_ajax(table_obj,asin_data);
			 					});
			 				}
			            	var textlink_selector = '.amalinkspro-text-link:not(.apilink)';
							var textlink = $(textlink_selector);
							if ( textlink && alp_api5_asins ) {
								textlink.each(function() {
									var textlink_asin = $(this).attr('data-alp-asin');
									var asin_data = alp_api5_asins[textlink_asin];
									$(this).attr('href', asin_data.detailPageURL );
								});
							}
							var imagelink_selector = '.amalinkspro-image-link:not(.apilink)';
							var imagelink = $(imagelink_selector);
							if ( imagelink && alp_api5_asins ) {
								imagelink.each(function() {
									var imagelink_asin = $(this).attr('data-alp-asin');
									var asin_data = alp_api5_asins[imagelink_asin];
									$(this).attr('href', asin_data.detailPageURL );
								});
							}
			            }
			        },
		            complete: function(response) {
		            	if ( $('.amalinkspro-showcase').hasClass('amalinkspro-showcase-7') ) {
							if ( ! $('.amalinkspro-showcase-7').hasClass('slick-initialized') ) {
							}
						}
						else if ( $('.amalinkspro-showcase').hasClass('amalinkspro-showcase-8') ) {
							if ( ! $('.amalinkspro-showcase-8').hasClass('slick-initialized') ) {
								initiate_showcase_8_slick( $('.amalinkspro-showcase-8') );
							}
						}
						else if ( $('.amalinkspro-showcase').hasClass('amalinkspro-showcase-9') ) {
							if ( ! $('.amalinkspro-showcase-9').hasClass('slick-initialized') ) {
								initiate_showcase_9_slick( $('.amalinkspro-showcase-9') );
							}
						}
						else if ( $('.amalinkspro-showcase').hasClass('amalinkspro-showcase-13') ) {
							if ( ! $('.amalinkspro-showcase-13').hasClass('slick-initialized') ) {
								initiate_showcase_8_slick( $('.amalinkspro-showcase-13') );
							}
						}
						$('.amalinkspro-showcase.alp-load-api').removeClass('alp-load-api');
		            }
		        });
		 	}
		 	alp_ajax_loading = false;
		}
		$('body').on('click', '.amalinkspro-showcase .alp-js-apidate-disclaimer', function(){
			$(this).closest('.amalinkspro-showcase').find('.alp-prices-discalimer').fadeIn(100);
		});
		$('body').on('click', '.amalinkspro-showcase .alp-js-close-price-info-popup', function(){
			$(this).closest('.amalinkspro-showcase').find('.alp-prices-discalimer').fadeOut(100);
		});
		if ( $('.alp-add-to-cart-true').length ) {
			var data = {
		            action: 'amazon_add_to_cart_setup',
		        };
		  		$.ajax({
		            type: 'POST',
		            url: ajaxurl,
		            data: data,
		            success: function(response) {
	            		console.log('amazon_add_to_cart_setup ajax call made.');
		            	console.log(response);
		            	$('body').append(response);
		            },
		        });
		}
		$('body').on('click', 'a.alp-add-to-cart-true', function(e){
			e.preventDefault();
			if ( $(this).hasClass('amalinkspro-showcase-bottom-cta-link') || $(this).hasClass('amalinkspro-showcase-4-titlebox') || $(this).hasClass('alp-showcase-img-link') ) {
				var alp_asin = $(this).closest('.amalinkspro-showcase').attr('data-alp-asin');
			}
			else {
				var alp_asin = $(this).attr('data-alp-asin');
			}
			$('#alp-amazon_addtocart_form').find('.alp-asin').attr('value', alp_asin);
			var alp_target = $(this).attr('target');
			if ( alp_target === '_blank' ) {
				$('#alp-amazon_addtocart_form').attr('target', '_blank');
			}
			$('#alp-amazon_addtocart_form').delay(300).submit();
		});
		function ALP_Track_Gtag_Events( cat, action, label ) {
			gtag('event', action, {
				event_category: cat,
				event_label: label
			});
		}
		function ALP_Track_Ga_Events( cat, action, label ) {
			ga('send', {
			  hitType: 'event',
			  eventCategory: cat,
			  eventAction: action,
			  eventLabel: label,
			  transport: 'beacon'
			});
		}
		if ( ALPvars.EventTrackingEnabled == 1 ) { 
			var cat = 'ID# ' + ALPvars.page_id +  ' - ' + $('html').find('head').find('title').html();
			$('body').on('click', '.amalinkspro-showcase .amalinkspro-showcase-4-titlebox', function () {
				var action = 'Showcase Title Link Click';
				var p = $(this).closest('.amalinkspro-showcase');
				var label = 'ASIN: ' + p.attr('data-alp-asin') + ',  Product Title: ' + $(this).text();
				if (typeof gtag === "function") { 
					ALP_Track_Gtag_Events( cat, action, label );
				}
				else {
					if (typeof ga === "function") { 
						ALP_Track_Ga_Events( cat, action, label );
					}
				}
			});
			$('body').on('click', '.amalinkspro-showcase .alp-showcase-img-link', function () {
				var action = 'Showcase Image Link Click';
				var p = $(this).closest('.amalinkspro-showcase');
				var label = 'ASIN: ' + p.attr('data-alp-asin') + ',  Product Title: ' + p.find('.amalinkspro-showcase-4-titlebox').text();
				if (typeof gtag === "function") { 
					ALP_Track_Gtag_Events( cat, action, label );
				}
				else {
					if (typeof ga === "function") { 
						ALP_Track_Ga_Events( cat, action, label );
					}
				}
			});
			$('body').on('click', '.amalinkspro-showcase.alp-no-noapi .alp-showcase-img-wrap a', function () {
				var action = 'Showcase Image Link Click';
				var p = $(this).closest('.amalinkspro-showcase');
				var label = 'Product Title: ' + p.find('.amalinkspro-showcase-4-titlebox').text();
				if (typeof gtag === "function") { 
					ALP_Track_Gtag_Events( cat, action, label );
				}
				else {
					if (typeof ga === "function") { 
						ALP_Track_Ga_Events( cat, action, label );
					}
				}
			});
			$('body').on('click', '.amalinkspro-showcase .amalinkspro-showcase-bottom-cta-link', function () {
				var action = 'Showcase Bottom Button Click';
				var p = $(this).closest('.amalinkspro-showcase');
				var label = 'ASIN: ' + p.attr('data-alp-asin') + ',  Product Title: ' + p.find('.amalinkspro-showcase-4-titlebox').text();
				if (typeof gtag === "function") { 
					ALP_Track_Gtag_Events( cat, action, label );
				}
				else {
					if (typeof ga === "function") { 
						ALP_Track_Ga_Events( cat, action, label );
					}
				}
			});
			$('body').on('click', '.alp-js-apidate-disclaimer', function () {
				var action = 'Showcase Opened Disclaimer Popup';
				var p = $(this).closest('.amalinkspro-showcase');
				var label = 'ASIN: ' + p.attr('data-alp-asin') + ',  Product Title: ' + p.find('.amalinkspro-showcase-4-titlebox').text();
				if (typeof gtag === "function") { 
					ALP_Track_Gtag_Events( cat, action, label );
				}
				else {
					if (typeof ga === "function") { 
						ALP_Track_Ga_Events( cat, action, label );
					}
				}
			});
			$('body').on('click', '.alp-js-close-price-info-popup', function () {
				var action = 'Showcase Closed Disclaimer Popup';
				var p = $(this).closest('.amalinkspro-showcase');
				var label = 'ASIN: ' + p.attr('data-alp-asin') + ',  Product Title: ' + p.find('.amalinkspro-showcase-4-titlebox').text();
				if (typeof gtag === "function") { 
					ALP_Track_Gtag_Events( cat, action, label );
				}
				else {
					if (typeof ga === "function") { 
						ALP_Track_Ga_Events( cat, action, label );
					}
				}
			});
			$('body').on('click', '.amalinkspro-comparison-table .alp-td-cover', function () {
				var action = 'Comparison Table Link Click';
				var table_row = $(this).closest('tr');
				var table_row_index = table_row.index() + 1;
				var label = 
					'Table ID# ' + 
					$(this).closest('.amalinkspro-comparison-table').attr('data-alp-table-id') + 
					', Row ' + table_row_index + ', ASIN: ' + 
					table_row.attr('alp-data-asin') + 
					', ' + 
					$(this).closest('td').attr('data-alp-table-td-type') + 
					' column, Clicked Link';
				if (typeof gtag === "function") { 
					ALP_Track_Gtag_Events( cat, action, label );
				}
				else {
					if (typeof ga === "function") { 
						ALP_Track_Ga_Events( cat, action, label );
					}
				}
			});
			$('body').on('click', '.amalinkspro-comparison-table .amalinkspro-cta-btn', function () {
				var action = 'Comparison Table Link Click';
				var table_row = $(this).closest('tr');
				var table_row_index = table_row.index() + 1;
				var label = 
					'Table ID# ' + 
					$(this).closest('.amalinkspro-comparison-table').attr('data-alp-table-id') + 
					', Row ' + table_row_index + ', ASIN: ' + 
					table_row.attr('alp-data-asin') + 
					', ' + 
					$(this).closest('td').attr('data-alp-table-td-type') + 
					' column, Clicked CTA Button';
				if (typeof gtag === "function") { 
					ALP_Track_Gtag_Events( cat, action, label );
				}
				else {
					if (typeof ga === "function") { 
						ALP_Track_Ga_Events( cat, action, label );
					}
				}
			});
			$('body').on('click', '.amalinkspro-comparison-table th.footable-sortable', function () {
				var action = 'Comparison Table Sorted Column';
				var table_row = $(this).closest('tr');
				var table_row_index = table_row.index() + 1;
				var label = 
					'Table ID# ' + $(this).closest('.amalinkspro-comparison-table').attr('data-alp-table-id') + 
					', Column:' +  $(this).text();
				if (typeof gtag === "function") { 
					ALP_Track_Gtag_Events( cat, action, label );
				}
				else {
					if (typeof ga === "function") { 
						ALP_Track_Ga_Events( cat, action, label );
					}
				}
			});
			$('body').on('click', '.amalinkspro-comparison-table .footable-page-link', function () {
				var action = 'Comparison Table Pagination Click';
				var label = 
					'Table ID# ' + $(this).closest('.amalinkspro-comparison-table').attr('data-alp-table-id') + 
					' : Page ' +  $(this).text();
				if (typeof gtag === "function") { 
					ALP_Track_Gtag_Events( cat, action, label );
				}
				else {
					if (typeof ga === "function") { 
						ALP_Track_Ga_Events( cat, action, label );
					}
				}
			});
			$('body').on('click', '.amalinkspro-text-link', function () {
				var action = 'Text Link Click';
				var label = 
					'Link Text: ' +  $(this).text() + 
					', ASIN: ' + $(this).attr('data-alp-asin');
				if (typeof gtag === "function") { 
					ALP_Track_Gtag_Events( cat, action, label );
				}
				else {
					if (typeof ga === "function") { 
						ALP_Track_Ga_Events( cat, action, label );
					}
				}
			});
			$('body').on('click', '.amalinkspro-image-link', function () {
				var action = 'Image Link Click';
				var label = 
					'Image Alt Tag: ' +  $(this).find('img').attr('alt') + 
					', ASIN: ' + $(this).attr('data-alp-asin');
				if (typeof gtag === "function") { 
					ALP_Track_Gtag_Events( cat, action, label );
				}
				else {
					if (typeof ga === "function") { 
						ALP_Track_Ga_Events( cat, action, label );
					}
				}
			});
			$('body').on('click', '.amalinkspro-cta-btn', function () {
				var action = 'CTA Button Click';
				var label = 
					'CTA Button: ' +  $(this).text() + 
					', ASIN: ' + $(this).attr('data-alp-asin');
				if (typeof gtag === "function") { 
					ALP_Track_Gtag_Events( cat, action, label );
				}
				else {
					if (typeof ga === "function") { 
						ALP_Track_Ga_Events( cat, action, label );
					}
				}
			});
		}
		function initiate_showcase_7_slick( slider ) {
				slider.not('.slick-initialized').find('.alf-ama-img-slider').slick({
					autoplay: false,
					autoplaySpeed: 6000,
					pauseOnHover: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					adaptiveHeight: true,
					nextArrow: '<button class="alp-slider-arrow alp-slider-next"><i class="icon-amalinkspro-right-open"></i></button>',
	  				prevArrow: '<button class="alp-slider-arrow alp-slider-prev"><i class="icon-amalinkspro-left-open"></i></button>',
					arrows: true, 
					dots: false, 
					infinite:true, 
					speed:500
				});
		}
		$('body').on('click', '.amalinkspro-showcase-7 .alf-ama-img-slider-nav > .alf-ama-img-slide', function(){
			$('.amalinkspro-showcase-7 .alf-ama-img-slider').slick('slickGoTo',$(this).index());
			$('.amalinkspro-showcase-7 .alf-ama-img-slider-nav > .alf-ama-img-slide').removeClass('slide-active').css('opacity', 0.6);
			$(this).addClass('slide-active').css('opacity', 1);
		});
		$('body').on('afterChange', '.amalinkspro-showcase-7 .alf-ama-img-slider', function(slick, currentSlide){
			$('.amalinkspro-showcase-7 .alf-ama-img-slider-nav > .alf-ama-img-slide').removeClass('slide-active').css('opacity', 0.6);
			$('.amalinkspro-showcase-7 .alf-ama-img-slider-nav > .alf-ama-img-slide').eq(currentSlide.currentSlide).addClass('slide-active').css('opacity', 1);
		});
		function initiate_showcase_8_slick(slider) {
			slider.find('.alf-ama-img-slider').not('.slick-initialized').slick({
				autoplay: false,
				autoplaySpeed: 6000,
				pauseOnHover: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: true,
				arrows:true, 
				nextArrow: '<button class="alp-slider-arrow alp-slider-next"><i class="icon-amalinkspro-right-open"></i></button>',
					prevArrow: '<button class="alp-slider-arrow alp-slider-prev"><i class="icon-amalinkspro-left-open"></i></button>',
				dots: false, 
				infinite:true, 
				speed:500,
			});
		}
		function initiate_showcase_9_slick(slider) {
			slider.find('.alf-ama-img-slider').not('.slick-initialized').slick({
				autoplay: false,
				autoplaySpeed: 6000,
				pauseOnHover: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: true,
				nextArrow: '<button class="alp-slider-arrow alp-slider-next"><i class="icon-amalinkspro-right-open"></i></button>',
  				prevArrow: '<button class="alp-slider-arrow alp-slider-prev"><i class="icon-amalinkspro-left-open"></i></button>',
				arrows: true, 
				dots: false, 
				infinite:true, 
				speed:500,
			});
		}
		$('body').on('click', '.amalinkspro-showcase-9 .alf-ama-img-slider-nav > .alf-ama-img-slide', function(){
			$('.amalinkspro-showcase-9 .alf-ama-img-slider').slick('slickGoTo',$(this).index());
			$('.amalinkspro-showcase-9 .alf-ama-img-slider-nav > .alf-ama-img-slide').removeClass('slide-active').css('opacity', 0.6);
			$(this).addClass('slide-active').css('opacity', 1);
		});
		$('body').on('afterChange', '.amalinkspro-showcase-9 .alf-ama-img-slider', function(slick, currentSlide){
			$('.amalinkspro-showcase-9 .alf-ama-img-slider-nav > .alf-ama-img-slide').removeClass('slide-active').css('opacity', 0.6);
			$('.amalinkspro-showcase-9 .alf-ama-img-slider-nav > .alf-ama-img-slide').eq(currentSlide.currentSlide).addClass('slide-active').css('opacity', 1);
		});
		function initiate_showcase_13_slick(slider) {
				slider.find('.alf-ama-img-slider').not('.slick-initialized').slick({
					autoplay: false,
					autoplaySpeed: 6000,
					pauseOnHover: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					adaptiveHeight: true,
					arrows:true, 
					nextArrow: '<button class="alp-slider-arrow alp-slider-next"><i class="icon-amalinkspro-right-open"></i></button>',
	  				prevArrow: '<button class="alp-slider-arrow alp-slider-prev"><i class="icon-amalinkspro-left-open"></i></button>',
					dots: false, 
					infinite:true, 
					speed:500,
				});
		}
		/*************************************/
		/******* Table Builder Scripts *******/
		/*************************************/
		function amalinkspro_tb_afterload_or_ajax(table_obj,asin_data) {
        	table_obj.find('tbody tr').each(function( index ) {
        		var current_row = $(this);
        		var row_asin = current_row.attr('alp-data-asin');
        		if ( asin_data[row_asin] ) {
            		current_row.find('td').each(function( index ) {
            			if ( $(this).attr('data-alp-table-td-type') === 'image') {
            				if ( asin_data[row_asin].title) {
				 				var alt_tag = asin_data[row_asin].title;
				 			}
				 			else {
				 				var alt_tag = 'Product Image';
				 			}
				 			var image_id = $(this).attr('data-img-id');
				 			if ( asin_data[row_asin] ) {
	            				if ( image_id === 'medium' && asin_data[row_asin].primaryImgUrlMd && alt_tag) {
					 				var td_value = '<img src="'+ asin_data[row_asin].primaryImgUrlMd+'" width="'+ asin_data[row_asin].primaryImgUrlMdWidth+'" height="'+ asin_data[row_asin].primaryImgUrlMdHeight+'" alt="'+alt_tag+'" />'; 
					 			}
					 			else if ( image_id === 'small' && asin_data[row_asin].primaryImgUrlSm && alt_tag) {
					 				var td_value = '<img src="'+ asin_data[row_asin].primaryImgUrlSm+'" width="'+ asin_data[row_asin].primaryImgUrlSmWidth+'" height="'+ asin_data[row_asin].primaryImgUrlSmHeight+'" alt="'+alt_tag+'" />'; 
					 			}
					 			else if ( image_id === 'large' && asin_data[row_asin].primaryImgUrlLg && alt_tag) {
					 				var td_value = '<img src="'+ asin_data[row_asin].primaryImgUrlLg+'" width="'+ asin_data[row_asin].primaryImgUrlLgWidth+'" height="'+ asin_data[row_asin].primaryImgUrlLgHeight+'" alt="'+alt_tag+'" />'; 
					 			}
					 			else if ( asin_data[row_asin].imgVariants ) {
					 				if ( asin_data[row_asin].imgVariants[image_id] && asin_data[row_asin].imgVariants[image_id].md) {
					 					var td_value = '<img src="'+ asin_data[row_asin].imgVariants[image_id].md +'" width="'+ asin_data[row_asin].imgVariants[image_id].mdwidth +'" height="'+ asin_data[row_asin].imgVariants[image_id].mdheight +'" alt="'+alt_tag+'" />';
					 				}
					 				else if ( asin_data[row_asin].imgVariants[image_id] && asin_data[row_asin].imgVariants[image_id].sm) {
					 					var td_value = '<img src="'+ asin_data[row_asin].imgVariants[image_id].sm +'" width="'+ asin_data[row_asin].imgVariants[image_id].smwidth +'" height="'+ asin_data[row_asin].imgVariants[image_id].smheight +'" alt="'+alt_tag+'" />';
					 				}
					 			}
					 			else {
					 				var td_value = 'N/A';
					 			}
					 		}
					 		else {
				 				var td_value = 'N/A';
				 			}
				 			if ($(this).find('icon-amalinkspro-spin3').length) {
				 				$(this).find('icon-amalinkspro-spin3').remove();
	            				$(this).prepend( td_value );
				 			}
            			}
				 		else if ( $(this).attr('data-alp-table-td-type') === 'price-offer' || $(this).attr('data-alp-table-td-type') === 'price-list' ) { 
				 			if ( asin_data[row_asin] && asin_data[row_asin].offerDisplay ) {
					 				var td_value = '<span class="alp-price-offer">'+asin_data[row_asin].offerDisplay+'</span>';
					 		} else {
					 			var td_value = '<span class="alp-no-price">$</span>';
					 		}
					 		$(this).find('icon-amalinkspro-spin3').remove();
					 		$(this).prepend( td_value );
				 		}
				 		else if ( $(this).attr('data-alp-table-td-type') === 'price-lowest-new-price') {
					 		var td_value = 'N/A';
					 		$(this).find('icon-amalinkspro-spin3').remove();
					 		$(this).prepend( td_value );
				 		}
				 		else if ( $(this).attr('data-alp-table-td-type') === 'price-lowest-used-price') { 
					 		var td_value = 'N/A';
					 		$(this).find('icon-amalinkspro-spin3').remove();
					 		$(this).prepend( td_value );
				 		}
        				var row_url = $(this).closest('tr').attr('data-row-url');
        				if ( $(this).find('.alp-td-cover').length && row_url !== '' ) {
        					$(this).find('.alp-td-cover').attr('href', row_url );
        				}
        				else {
        					$(this).find('.alp-td-cover').attr('href', asin_data[row_asin].detailPageURL );
        				}
            		});
            	}
        	});
        	$('i.icon-amalinkspro-spin3').remove();
        	if ( table_obj.find('tbody').length ) {
        		if ( !table_obj.hasClass('alp-simple-table') ) {
        			table_obj.footable();
        		}
        	}
        	var now = new Date();
        	var currentTime = new Date();
			if ( currentTime ) {
				var hours = currentTime.getHours();
				var minutes = currentTime.getMinutes();
				var day = currentTime.getDate();
				var month = currentTime.getMonth()+1;
				var year = currentTime.getFullYear();
				var suffix = "AM";
				if (hours >= 12) {
				    suffix = "PM";
				    hours = hours - 12;
				}
				if (hours == 0) {
				    hours = 12;
				}
				if (minutes < 10) {
				    minutes = "0" + minutes;
				}
				$('.amalinkspro-table-prices-accuracy-date').text(month + '/' + day + '/' + year + ' ' + hours + ":" + minutes + " " + suffix);
			}
        	$('.amalinkspro-comparison-table-public.alp-load-api').removeClass('alp-load-api');
		}
		if ( $('.alp-table-links-addtocart').length && !$('#alp-amazon_addtocart_form').length  ) {
			var data = {
	            action: 'amazon_add_to_cart_setup',
	        };
	  		$.ajax({
	            type: 'POST',
	            url: ajaxurl,
	            data: data,
	            success: function(response) {
	            	$('body').append(response);
	            },
	        });
		}
		$('body').on('click', 'table.alp-table-links-addtocart tbody a', function(e){
			var alp_asin = $(this).closest('tr').attr('alp-data-asin');
			if ( alp_asin !== '' ) {
				e.preventDefault();
				console.log('test 1');
				$('#alp-amazon_addtocart_form').find('.alp-asin').attr('value', alp_asin);
				if ( $(this).closest('table.alp-table-links-newwindow').length ) {
					$('#alp-amazon_addtocart_form').attr('target', '_blank');
				}
				$('#alp-amazon_addtocart_form').delay(300).submit();
			}
		});
		$('body').on('click', '.amalinkspro-table-prices-accuracy .alp-js-apidate-disclaimer', function(){
			$(this).closest('.amalinkspro-table-prices-accuracy').find('.alp-prices-discalimer').show();
		});
		$('body').on('click', '.amalinkspro-table-prices-accuracy .alp-js-close-price-info-popup', function(){
			$(this).closest('.amalinkspro-table-prices-accuracy').find('.alp-prices-discalimer').hide();
		});
	});
})( jQuery );
/********* Slick Slider *************/
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
/**
	* jquery.matchHeight-min.js master
	* http://brm.io/jquery-match-height/
	* License: MIT
	*/
	(function(c){var n=-1,f=-1,g=function(a){return parseFloat(a)||0},r=function(a){var b=null,d=[];c(a).each(function(){var a=c(this),k=a.offset().top-g(a.css("margin-top")),l=0<d.length?d[d.length-1]:null;null===l?d.push(a):1>=Math.floor(Math.abs(b-k))?d[d.length-1]=l.add(a):d.push(a);b=k});return d},p=function(a){var b={byRow:!0,property:"height",target:null,remove:!1};if("object"===typeof a)return c.extend(b,a);"boolean"===typeof a?b.byRow=a:"remove"===a&&(b.remove=!0);return b},b=c.fn.matchHeight=
	function(a){a=p(a);if(a.remove){var e=this;this.css(a.property,"");c.each(b._groups,function(a,b){b.elements=b.elements.not(e)});return this}if(1>=this.length&&!a.target)return this;b._groups.push({elements:this,options:a});b._apply(this,a);return this};b._groups=[];b._throttle=80;b._maintainScroll=!1;b._beforeUpdate=null;b._afterUpdate=null;b._apply=function(a,e){var d=p(e),h=c(a),k=[h],l=c(window).scrollTop(),f=c("html").outerHeight(!0),m=h.parents().filter(":hidden");m.each(function(){var a=c(this);
	a.data("style-cache",a.attr("style"))});m.css("display","block");d.byRow&&!d.target&&(h.each(function(){var a=c(this),b="inline-block"===a.css("display")?"inline-block":"block";a.data("style-cache",a.attr("style"));a.css({display:b,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px"})}),k=r(h),h.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||"")}));c.each(k,function(a,b){var e=c(b),f=0;if(d.target)f=
	d.target.outerHeight(!1);else{if(d.byRow&&1>=e.length){e.css(d.property,"");return}e.each(function(){var a=c(this),b={display:"inline-block"===a.css("display")?"inline-block":"block"};b[d.property]="";a.css(b);a.outerHeight(!1)>f&&(f=a.outerHeight(!1));a.css("display","")})}e.each(function(){var a=c(this),b=0;d.target&&a.is(d.target)||("border-box"!==a.css("box-sizing")&&(b+=g(a.css("border-top-width"))+g(a.css("border-bottom-width")),b+=g(a.css("padding-top"))+g(a.css("padding-bottom"))),a.css(d.property,
	f-b))})});m.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||null)});b._maintainScroll&&c(window).scrollTop(l/f*c("html").outerHeight(!0));return this};b._applyDataApi=function(){var a={};c("[data-match-height], [data-mh]").each(function(){var b=c(this),d=b.attr("data-mh")||b.attr("data-match-height");a[d]=d in a?a[d].add(b):b});c.each(a,function(){this.matchHeight(!0)})};var q=function(a){b._beforeUpdate&&b._beforeUpdate(a,b._groups);c.each(b._groups,function(){b._apply(this.elements,
	this.options)});b._afterUpdate&&b._afterUpdate(a,b._groups)};b._update=function(a,e){if(e&&"resize"===e.type){var d=c(window).width();if(d===n)return;n=d}a?-1===f&&(f=setTimeout(function(){q(e);f=-1},b._throttle)):q(e)};c(b._applyDataApi);c(window).bind("load",function(a){b._update(!1,a)});c(window).bind("resize orientationchange",function(a){b._update(!0,a)})})(jQuery);
/*
* FooTable v3 - FooTable is a jQuery plugin that aims to make HTML tables on smaller devices look awesome.
* @version 3.1.3
* @link http://fooplugins.com
* @copyright Steven Usher & Brad Vincent 2015
* @license Released under the GPLv3 license.
*/
!function(a,b){window.console=window.console||{log:function(){},error:function(){}},a.fn.footable=function(a,c){return a=a||{},this.filter("table").each(function(d,e){b.init(e,a,c)})};var c={events:[]};b.__debug__=JSON.parse(localStorage.getItem("footable_debug"))||!1,b.__debug_options__=JSON.parse(localStorage.getItem("footable_debug_options"))||c,b.debug=function(d,e){return b.is["boolean"](d)?(b.__debug__=d,void(b.__debug__?(localStorage.setItem("footable_debug",JSON.stringify(b.__debug__)),b.__debug_options__=a.extend(!0,{},c,e||{}),b.is.hash(e)&&localStorage.setItem("footable_debug_options",JSON.stringify(b.__debug_options__))):(localStorage.removeItem("footable_debug"),localStorage.removeItem("footable_debug_options")))):b.__debug__},b.get=function(b){return a(b).first().data("__FooTable__")},b.init=function(a,c,d){var e=b.get(a);return e instanceof b.Table&&e.destroy(),new b.Table(a,c,d)},b.getRow=function(b){var c=a(b).closest("tr");return c.hasClass("footable-detail-row")&&(c=c.prev()),c.data("__FooTableRow__")}}(jQuery,FooTable=window.FooTable||{}),function(a){var b=function(){return!0};a.arr={},a.arr.each=function(b,c){if(a.is.array(b)&&a.is.fn(c))for(var d=0,e=b.length;e>d&&c(b[d],d)!==!1;d++);},a.arr.get=function(b,c){var d=[];if(!a.is.array(b))return d;if(!a.is.fn(c))return b;for(var e=0,f=b.length;f>e;e++)c(b[e],e)&&d.push(b[e]);return d},a.arr.any=function(c,d){if(!a.is.array(c))return!1;d=a.is.fn(d)?d:b;for(var e=0,f=c.length;f>e;e++)if(d(c[e],e))return!0;return!1},a.arr.contains=function(b,c){if(!a.is.array(b)||a.is.undef(c))return!1;for(var d=0,e=b.length;e>d;d++)if(b[d]==c)return!0;return!1},a.arr.first=function(c,d){if(!a.is.array(c))return null;d=a.is.fn(d)?d:b;for(var e=0,f=c.length;f>e;e++)if(d(c[e],e))return c[e];return null},a.arr.map=function(b,c){var d=[],e=null;if(!a.is.array(b)||!a.is.fn(c))return d;for(var f=0,g=b.length;g>f;f++)null!=(e=c(b[f],f))&&d.push(e);return d},a.arr.remove=function(b,c){var d=[],e=[];if(!a.is.array(b)||!a.is.fn(c))return e;for(var f=0,g=b.length;g>f;f++)c(b[f],f,e)&&(d.push(f),e.push(b[f]));for(d.sort(function(a,b){return b-a}),f=0,g=d.length;g>f;f++){var h=d[f]-f;b.splice(h,1)}return e},a.arr["delete"]=function(b,c){var d=-1,e=null;if(!a.is.array(b)||a.is.undef(c))return e;for(var f=0,g=b.length;g>f;f++)if(b[f]==c){d=f,e=b[f];break}return-1!=d&&b.splice(d,1),e},a.arr.replace=function(a,b,c){var d=a.indexOf(b);-1!==d&&(a[d]=c)}}(FooTable),function(a){a.is={},a.is.type=function(a,b){return typeof a===b},a.is.defined=function(a){return"undefined"!=typeof a},a.is.undef=function(a){return"undefined"==typeof a},a.is.array=function(a){return"[object Array]"===Object.prototype.toString.call(a)},a.is.date=function(a){return"[object Date]"===Object.prototype.toString.call(a)&&!isNaN(a.getTime())},a.is["boolean"]=function(a){return"[object Boolean]"===Object.prototype.toString.call(a)},a.is.string=function(a){return"[object String]"===Object.prototype.toString.call(a)},a.is.number=function(a){return"[object Number]"===Object.prototype.toString.call(a)&&!isNaN(a)},a.is.fn=function(b){return a.is.defined(window)&&b===window.alert||"[object Function]"===Object.prototype.toString.call(b)},a.is.error=function(a){return"[object Error]"===Object.prototype.toString.call(a)},a.is.object=function(a){return"[object Object]"===Object.prototype.toString.call(a)},a.is.hash=function(b){return a.is.object(b)&&b.constructor===Object&&!b.nodeType&&!b.setInterval},a.is.element=function(a){return"object"==typeof HTMLElement?a instanceof HTMLElement:a&&"object"==typeof a&&null!==a&&1===a.nodeType&&"string"==typeof a.nodeName},a.is.promise=function(b){return a.is.object(b)&&a.is.fn(b.then)&&a.is.fn(b.promise)},a.is.jq=function(b){return a.is.defined(window.jQuery)&&b instanceof jQuery&&b.length>0},a.is.moment=function(b){return a.is.defined(window.moment)&&a.is.object(b)&&a.is["boolean"](b._isAMomentObject)},a.is.emptyObject=function(b){if(!a.is.hash(b))return!1;for(var c in b)if(b.hasOwnProperty(c))return!1;return!0},a.is.emptyArray=function(b){return a.is.array(b)?0===b.length:!0},a.is.emptyString=function(b){return a.is.string(b)?0===b.length:!0}}(FooTable),function(a){a.str={},a.str.contains=function(b,c,d){return a.is.emptyString(b)||a.is.emptyString(c)?!1:c.length<=b.length&&-1!==(d?b.toUpperCase().indexOf(c.toUpperCase()):b.indexOf(c))},a.str.containsExact=function(b,c,d){return a.is.emptyString(b)||a.is.emptyString(c)||c.length>b.length?!1:new RegExp("\\b"+a.str.escapeRegExp(c)+"\\b",d?"i":"").test(b)},a.str.containsWord=function(b,c,d){if(a.is.emptyString(b)||a.is.emptyString(c)||b.length<c.length)return!1;for(var e=b.split(/\W/),f=0,g=e.length;g>f;f++)if(d?e[f].toUpperCase()==c.toUpperCase():e[f]==c)return!0;return!1},a.str.from=function(b,c){return a.is.emptyString(b)?b:a.str.contains(b,c)?b.substring(b.indexOf(c)+1):b},a.str.startsWith=function(b,c){return a.is.emptyString(b)?b==c:b.slice(0,c.length)==c},a.str.toCamelCase=function(b){return a.is.emptyString(b)?b:b.toUpperCase()===b?b.toLowerCase():b.replace(/^([A-Z])|[-\s_](\w)/g,function(b,c,d){return a.is.string(d)?d.toUpperCase():c.toLowerCase()})},a.str.random=function(b){return b=a.is.emptyString(b)?"":b,b+Math.random().toString(36).substr(2,9)},a.str.escapeRegExp=function(b){return a.is.emptyString(b)?b:b.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}(FooTable),function(a){"use strict";function b(){}Object.create||(Object.create=function(){var b=function(){};return function(c){if(arguments.length>1)throw Error("Second argument not supported");if(!a.is.object(c))throw TypeError("Argument must be an object");b.prototype=c;var d=new b;return b.prototype=null,d}}());var c=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;b.__extend__=function(b,d,e,f){b[d]=a.is.fn(f)&&c.test(e)?function(a,b){return function(){var a,c;return a=this._super,this._super=f,c=b.apply(this,arguments),this._super=a,c}}(d,e):e},b.extend=function(d,e){function f(b,d,e,f){b[d]=a.is.fn(f)&&c.test(e)?function(a,b,c){return function(){var a,d;return a=this._super,this._super=c,d=b.apply(this,arguments),this._super=a,d}}(d,e,f):e}var g=Array.prototype.slice.call(arguments);if(d=g.shift(),e=g.shift(),a.is.hash(d)){var h=Object.create(this.prototype),i=this.prototype;for(var j in d)"__ctor__"!==j&&f(h,j,d[j],i[j]);var k=a.is.fn(h.__ctor__)?h.__ctor__:function(){if(!a.is.fn(this.construct))throw new SyntaxError('FooTable class objects must be constructed with the "new" keyword.');this.construct.apply(this,arguments)};return h.construct=a.is.fn(h.construct)?h.construct:function(){},k.prototype=h,h.constructor=k,k.extend=b.extend,k}a.is.string(d)&&a.is.fn(e)&&f(this.prototype,d,e,this.prototype[d])},a.Class=b,a.ClassFactory=a.Class.extend({construct:function(){this.registered={}},contains:function(b){return a.is.defined(this.registered[b])},names:function(){var a,b=[];for(a in this.registered)this.registered.hasOwnProperty(a)&&b.push(a);return b},register:function(b,c,d){if(a.is.string(b)&&a.is.fn(c)){var e=this.registered[b];this.registered[b]={name:b,klass:c,priority:a.is.number(d)?d:a.is.defined(e)?e.priority:0}}},load:function(b,c,d){var e,f,g=this,h=Array.prototype.slice.call(arguments),i=[],j=[];b=h.shift()||{};for(e in g.registered)if(g.registered.hasOwnProperty(e)){var k=g.registered[e];b.hasOwnProperty(e)&&(f=b[e],a.is.string(f)&&(f=a.getFnPointer(b[e])),a.is.fn(f)&&(k={name:e,klass:f,priority:g.registered[e].priority})),i.push(k)}for(e in b)b.hasOwnProperty(e)&&!g.registered.hasOwnProperty(e)&&(f=b[e],a.is.string(f)&&(f=a.getFnPointer(b[e])),a.is.fn(f)&&i.push({name:e,klass:f,priority:0}));return i.sort(function(a,b){return b.priority-a.priority}),a.arr.each(i,function(b){a.is.fn(b.klass)&&j.push(g._make(b.klass,h))}),j},make:function(b,c,d){var e,f=this,g=Array.prototype.slice.call(arguments);return b=g.shift(),e=f.registered[b],a.is.fn(e.klass)?f._make(e.klass,g):null},_make:function(a,b){function c(){return a.apply(this,b)}return c.prototype=a.prototype,new c}})}(FooTable),function(a,b){b.css2json=function(c){if(b.is.emptyString(c))return{};for(var d,e,f,g={},h=c.split(";"),i=0,j=h.length;j>i;i++)b.is.emptyString(h[i])||(d=h[i].split(":"),b.is.emptyString(d[0])||b.is.emptyString(d[1])||(e=b.str.toCamelCase(a.trim(d[0])),f=a.trim(d[1]),g[e]=f));return g},b.getFnPointer=function(a){if(b.is.emptyString(a))return null;var c=window,d=a.split(".");return b.arr.each(d,function(a){c[a]&&(c=c[a])}),b.is.fn(c)?c:null},b.checkFnValue=function(a,c,d){function e(a,c,d){return b.is.fn(c)?function(){return c.apply(a,arguments)}:d}return d=b.is.fn(d)?d:null,b.is.fn(c)?e(a,c,d):b.is.type(c,"string")?e(a,b.getFnPointer(c),d):d}}(jQuery,FooTable),function(a,b){b.Cell=b.Class.extend({construct:function(a,b,c,d){this.ft=a,this.row=b,this.column=c,this.created=!1,this.define(d)},define:function(c){this.$el=b.is.element(c)||b.is.jq(c)?a(c):null,this.$detail=null;var d=b.is.hash(c)&&b.is.hash(c.options)&&b.is.defined(c.value);this.value=this.column.parser.call(this.column,b.is.jq(this.$el)?this.$el:d?c.value:c,this.ft.o),this.o=a.extend(!0,{classes:null,style:null},d?c.options:{}),this.classes=b.is.jq(this.$el)&&this.$el.attr("class")?this.$el.attr("class").match(/\S+/g):b.is.array(this.o.classes)?this.o.classes:b.is.string(this.o.classes)?this.o.classes.match(/\S+/g):[],this.style=b.is.jq(this.$el)&&this.$el.attr("style")?b.css2json(this.$el.attr("style")):b.is.hash(this.o.style)?this.o.style:b.is.string(this.o.style)?b.css2json(this.o.style):{}},$create:function(){this.created||((this.$el=b.is.jq(this.$el)?this.$el:a("<td/>")).data("value",this.value).contents().detach().end().append(this.format(this.value)),this._setClasses(this.$el),this._setStyle(this.$el),this.$detail=a("<tr/>").addClass(this.row.classes.join(" ")).data("__FooTableCell__",this).append(a("<th/>")).append(a("<td/>")),this.created=!0)},collapse:function(){this.created&&(this.$detail.children("th").html(this.column.title),this.$detail.children("td").first().attr("class",this.$el.attr("class")).attr("style",this.$el.attr("style")).css("display","table-cell").append(this.$el.contents().detach()),b.is.jq(this.$detail.parent())||this.$detail.appendTo(this.row.$details.find(".footable-details > tbody")))},restore:function(){if(this.created){if(b.is.jq(this.$detail.parent())){var a=this.$detail.children("td").first();this.$el.attr("class",a.attr("class")).attr("style",a.attr("style")).css("display",this.column.hidden||!this.column.visible?"none":"table-cell").append(a.contents().detach())}this.$detail.detach()}},parse:function(){return this.column.parser.call(this.column,this.$el,this.ft.o)},format:function(a){return this.column.formatter.call(this.column,a,this.ft.o)},val:function(c,d){if(b.is.undef(c))return this.value;var e=this,f=b.is.hash(c)&&b.is.hash(c.options)&&b.is.defined(c.value);if(this.o=a.extend(!0,{classes:e.classes,style:e.style},f?c.options:{}),this.value=f?c.value:c,this.classes=b.is.array(this.o.classes)?this.o.classes:b.is.string(this.o.classes)?this.o.classes.match(/\S+/g):[],this.style=b.is.hash(this.o.style)?this.o.style:b.is.string(this.o.style)?b.css2json(this.o.style):{},this.created){this.$el.data("value",this.value).empty();var g=this.$detail.children("td").first().empty(),h=b.is.jq(this.$detail.parent())?g:this.$el;h.append(this.format(this.value)),this._setClasses(h),this._setStyle(h),(b.is["boolean"](d)?d:!0)&&this.row.draw()}},_setClasses:function(a){var c=!b.is.emptyArray(this.column.classes),d=!b.is.emptyArray(this.classes),e=null;a.removeAttr("class"),(c||d)&&(c&&d?e=this.classes.concat(this.column.classes).join(" "):c?e=this.column.classes.join(" "):d&&(e=this.classes.join(" ")),b.is.emptyString(e)||a.addClass(e))},_setStyle:function(c){var d=!b.is.emptyObject(this.column.style),e=!b.is.emptyObject(this.style),f=null;c.removeAttr("style"),(d||e)&&(d&&e?f=a.extend({},this.column.style,this.style):d?f=this.column.style:e&&(f=this.style),b.is.hash(f)&&c.css(f))}})}(jQuery,FooTable),function(a,b){b.Column=b.Class.extend({construct:function(a,c,d){this.ft=a,this.type=b.is.emptyString(d)?"text":d,this.virtual=b.is["boolean"](c.virtual)?c.virtual:!1,this.$el=b.is.jq(c.$el)?c.$el:null,this.index=b.is.number(c.index)?c.index:-1,this.define(c),this.$create()},define:function(a){this.hidden=b.is["boolean"](a.hidden)?a.hidden:!1,this.visible=b.is["boolean"](a.visible)?a.visible:!0,this.name=b.is.string(a.name)?a.name:null,null==this.name&&(this.name="col"+(a.index+1)),this.title=b.is.string(a.title)?a.title:null,!this.virtual&&null==this.title&&b.is.jq(this.$el)&&(this.title=this.$el.html()),null==this.title&&(this.title="Column "+(a.index+1)),this.style=b.is.hash(a.style)?a.style:b.is.string(a.style)?b.css2json(a.style):{},this.classes=b.is.array(a.classes)?a.classes:b.is.string(a.classes)?a.classes.match(/\S+/g):[],this.parser=b.checkFnValue(this,a.parser,this.parser),this.formatter=b.checkFnValue(this,a.formatter,this.formatter)},$create:function(){(this.$el=!this.virtual&&b.is.jq(this.$el)?this.$el:a("<th/>")).html(this.title)},parser:function(c){if(b.is.element(c)||b.is.jq(c)){var d=a(c).data("value");return b.is.defined(d)?d:a(c).text()}return b.is.defined(c)&&null!=c?c+"":null},formatter:function(a){return null==a?"":a},createCell:function(a){var c=b.is.jq(a.$el)?a.$el.children("td,th").get(this.index):null,d=b.is.hash(a.value)?a.value[this.name]:null;return new b.Cell(this.ft,a,this,c||d)}}),b.columns=new b.ClassFactory,b.columns.register("text",b.Column)}(jQuery,FooTable),function(a,b){b.Component=b.Class.extend({construct:function(a,c){if(!(a instanceof b.Table))throw new TypeError("The instance parameter must be an instance of FooTable.Table.");this.ft=a,this.enabled=b.is["boolean"](c)?c:!1},preinit:function(a){},init:function(){},destroy:function(){},predraw:function(){},draw:function(){},postdraw:function(){}}),b.components=new b.ClassFactory}(jQuery,FooTable),function(a,b){b.Defaults=function(){this.stopPropagation=!1,this.on=null},b.defaults=new b.Defaults}(jQuery,FooTable),function(a,b){b.Row=b.Class.extend({construct:function(a,b,c){this.ft=a,this.columns=b,this.created=!1,this.define(c)},define:function(c){this.$el=b.is.element(c)||b.is.jq(c)?a(c):null,this.$toggle=a("<span/>",{"class":"footable-toggle fooicon fooicon-plus"});var d=b.is.hash(c),e=d&&b.is.hash(c.options)&&b.is.hash(c.value);this.value=d?e?c.value:c:null,this.o=a.extend(!0,{expanded:!1,classes:null,style:null},e?c.options:{}),this.expanded=b.is.jq(this.$el)?this.$el.data("expanded")||this.o.expanded:this.o.expanded,this.classes=b.is.jq(this.$el)&&this.$el.attr("class")?this.$el.attr("class").match(/\S+/g):b.is.array(this.o.classes)?this.o.classes:b.is.string(this.o.classes)?this.o.classes.match(/\S+/g):[],this.style=b.is.jq(this.$el)&&this.$el.attr("style")?b.css2json(this.$el.attr("style")):b.is.hash(this.o.style)?this.o.style:b.is.string(this.o.style)?b.css2json(this.o.style):{},this.cells=this.createCells();var f=this;f.value={},b.arr.each(f.cells,function(a){f.value[a.column.name]=a.val()})},$create:function(){if(!this.created){(this.$el=b.is.jq(this.$el)?this.$el:a("<tr/>")).data("__FooTableRow__",this),this._setClasses(this.$el),this._setStyle(this.$el),"last"==this.ft.rows.toggleColumn&&this.$toggle.addClass("last-column"),this.$details=a("<tr/>",{"class":"footable-detail-row"}).append(a("<td/>",{colspan:this.ft.columns.visibleColspan}).append(a("<table/>",{"class":"footable-details "+this.ft.classes.join(" ")}).append("<tbody/>")));var c=this;b.arr.each(c.cells,function(a){a.created||a.$create(),c.$el.append(a.$el)}),c.$el.off("click.ft.row").on("click.ft.row",{self:c},c._onToggle),this.created=!0}},createCells:function(){var a=this;return b.arr.map(a.columns,function(b){return b.createCell(a)})},val:function(c,d){var e=this;if(!b.is.hash(c))return b.is.hash(this.value)&&!b.is.emptyObject(this.value)||(this.value={},b.arr.each(this.cells,function(a){e.value[a.column.name]=a.val()})),this.value;this.collapse(!1);var f=b.is.hash(c),g=f&&b.is.hash(c.options)&&b.is.hash(c.value);if(this.o=a.extend(!0,{expanded:e.expanded,classes:e.classes,style:e.style},g?c.options:{}),this.expanded=this.o.expanded,this.classes=b.is.array(this.o.classes)?this.o.classes:b.is.string(this.o.classes)?this.o.classes.match(/\S+/g):[],this.style=b.is.hash(this.o.style)?this.o.style:b.is.string(this.o.style)?b.css2json(this.o.style):{},f)if(g&&(c=c.value),b.is.hash(this.value))for(var h in c)c.hasOwnProperty(h)&&(this.value[h]=c[h]);else this.value=c;else this.value=null;b.arr.each(this.cells,function(a){b.is.defined(e.value[a.column.name])&&a.val(e.value[a.column.name],!1)}),this.created&&(this._setClasses(this.$el),this._setStyle(this.$el),(b.is["boolean"](d)?d:!0)&&this.draw())},_setClasses:function(a){var c=!b.is.emptyArray(this.classes),d=null;a.removeAttr("class"),c&&(d=this.classes.join(" "),b.is.emptyString(d)||a.addClass(d))},_setStyle:function(a){var c=!b.is.emptyObject(this.style),d=null;a.removeAttr("style"),c&&(d=this.style,b.is.hash(d)&&a.css(d))},expand:function(){if(this.created){var a=this;a.ft.raise("expand.ft.row",[a]).then(function(){a.__hidden__=b.arr.map(a.cells,function(a){return a.column.hidden&&a.column.visible?a:null}),a.__hidden__.length>0&&(a.$details.insertAfter(a.$el).children("td").first().attr("colspan",a.ft.columns.visibleColspan),b.arr.each(a.__hidden__,function(a){a.collapse()})),a.$el.attr("data-expanded",!0),a.$toggle.removeClass("fooicon-plus").addClass("fooicon-minus"),a.expanded=!0})}},collapse:function(a){if(this.created){var c=this;c.ft.raise("collapse.ft.row",[c]).then(function(){b.arr.each(c.__hidden__,function(a){a.restore()}),c.$details.detach(),c.$el.removeAttr("data-expanded"),c.$toggle.removeClass("fooicon-minus").addClass("fooicon-plus"),(b.is["boolean"](a)?a:!0)&&(c.expanded=!1)})}},predraw:function(a){this.created&&(this.expanded&&this.collapse(!1),this.$toggle.detach(),a=b.is["boolean"](a)?a:!0,a&&this.$el.detach())},draw:function(a){this.created||this.$create(),b.is.jq(a)&&a.append(this.$el);var c=this;b.arr.each(c.cells,function(a){a.$el.css("display",a.column.hidden||!a.column.visible?"none":"table-cell"),c.ft.rows.showToggle&&c.ft.columns.hasHidden&&("first"==c.ft.rows.toggleColumn&&a.column.index==c.ft.columns.firstVisibleIndex||"last"==c.ft.rows.toggleColumn&&a.column.index==c.ft.columns.lastVisibleIndex)&&a.$el.prepend(c.$toggle),a.$el.add(a.column.$el).removeClass("footable-first-visible footable-last-visible"),a.column.index==c.ft.columns.firstVisibleIndex&&a.$el.add(a.column.$el).addClass("footable-first-visible"),a.column.index==c.ft.columns.lastVisibleIndex&&a.$el.add(a.column.$el).addClass("footable-last-visible")}),this.expanded&&this.expand()},toggle:function(){this.created&&this.ft.columns.hasHidden&&(this.expanded?this.collapse():this.expand())},_onToggle:function(b){var c=b.data.self;a(b.target).is(c.ft.rows.toggleSelector)&&c.toggle()}})}(jQuery,FooTable),function(a,b){b.instances=[],b.Table=b.Class.extend({construct:function(c,d,e){this._resizeTimeout=null,this.id=b.instances.push(this),this.initialized=!1,this.$el=(b.is.jq(c)?c:a(c)).first(),this.o=a.extend(!0,{},b.defaults,d),this.data=this.$el.data()||{},this.classes=[],this.components=b.components.load(b.is.hash(this.data.components)?this.data.components:this.o.components,this),this.breakpoints=this.use(FooTable.Breakpoints),this.columns=this.use(FooTable.Columns),this.rows=this.use(FooTable.Rows),this._construct(e)},_construct:function(a){var c=this;this._preinit().then(function(){return c._init()}).always(function(d){return b.is.error(d)?void console.error("FooTable: unhandled error thrown during initialization.",d):c.raise("ready.ft.table").then(function(){b.is.fn(a)&&a.call(c,c)})})},_preinit:function(){var c=this;return this.raise("preinit.ft.table",[c.data]).then(function(){var d=(c.$el.attr("class")||"").match(/\S+/g)||[];c.o.ajax=b.checkFnValue(c,c.data.ajax,c.o.ajax),c.o.stopPropagation=b.is["boolean"](c.data.stopPropagation)?c.data.stopPropagation:c.o.stopPropagation;for(var e=0,f=d.length;f>e;e++)b.str.startsWith(d[e],"footable")||c.classes.push(d[e]);var g=a("<div/>",{"class":"footable-loader"}).append(a("<span/>",{"class":"fooicon fooicon-loader"}));return c.$el.hide().after(g),c.execute(!1,!1,"preinit",c.data).always(function(){c.$el.show(),g.remove()})})},_init:function(){var c=this;return c.raise("init.ft.table").then(function(){var d=c.$el.children("thead"),e=c.$el.children("tbody"),f=c.$el.children("tfoot");return c.$el.addClass("footable footable-"+c.id),b.is.hash(c.o.on)&&c.$el.on(c.o.on),0==f.length&&c.$el.append(f=a("<tfoot/>")),0==e.length&&c.$el.append("<tbody/>"),0==d.length&&c.$el.prepend(d=a("<thead/>")),c.execute(!1,!0,"init").then(function(){return c.$el.data("__FooTable__",c),0==f.children("tr").length&&f.remove(),0==d.children("tr").length&&d.remove(),c.raise("postinit.ft.table").then(function(){return c.draw()}).always(function(){a(window).off("resize.ft"+c.id,c._onWindowResize).on("resize.ft"+c.id,{self:c},c._onWindowResize),c.initialized=!0})})})},destroy:function(){var c=this;return c.raise("destroy.ft.table").then(function(){return c.execute(!0,!0,"destroy").then(function(){c.$el.removeData("__FooTable__").removeClass("footable-"+c.id),b.is.hash(c.o.on)&&c.$el.off(c.o.on),a(window).off("resize.ft"+c.id,c._onWindowResize),c.initialized=!1})}).fail(function(a){b.is.error(a)&&console.error("FooTable: unhandled error thrown while destroying the plugin.",a)})},raise:function(c,d){var e=this,f=b.__debug__&&(b.is.emptyArray(b.__debug_options__.events)||b.arr.any(b.__debug_options__.events,function(a){return b.str.contains(c,a)}));return d=d||[],d.unshift(this),a.Deferred(function(b){var g=a.Event(c);1==e.o.stopPropagation&&e.$el.one(c,function(a){a.stopPropagation()}),f&&console.log("FooTable:"+c+": ",d),e.$el.trigger(g,d),g.isDefaultPrevented()?(f&&console.log('FooTable: default prevented for the "'+c+'" event.'),b.reject(g)):b.resolve(g)})},use:function(a){for(var b=0,c=this.components.length;c>b;b++)if(this.components[b]instanceof a)return this.components[b];return null},draw:function(){var a=this;return a.execute(!1,!0,"predraw").then(function(){return a.raise("predraw.ft.table").then(function(){return a.execute(!1,!0,"draw").then(function(){return a.raise("draw.ft.table").then(function(){return a.execute(!1,!0,"postdraw").then(function(){return a.raise("postdraw.ft.table")})})})})}).fail(function(a){b.is.error(a)&&console.error("FooTable: unhandled error thrown during a draw operation.",a)})},execute:function(a,c,d,e,f){var g=this,h=Array.prototype.slice.call(arguments);a=h.shift(),c=h.shift();var i=c?b.arr.get(g.components,function(a){return a.enabled}):g.components.slice(0);return h.unshift(a?i.reverse():i),g._execute.apply(g,h)},_execute:function(c,d,e,f){if(!c||!c.length)return a.when();var g,h=this,i=Array.prototype.slice.call(arguments);return c=i.shift(),d=i.shift(),g=c.shift(),b.is.fn(g[d])?a.Deferred(function(a){try{var c=g[d].apply(g,i);if(b.is.promise(c))return c.then(a.resolve,a.reject);a.resolve(c)}catch(e){a.reject(e)}}).then(function(){return h._execute.apply(h,[c,d].concat(i))}):h._execute.apply(h,[c,d].concat(i))},_onWindowResize:function(a){var b=a.data.self;null!=b._resizeTimeout&&clearTimeout(b._resizeTimeout),b._resizeTimeout=setTimeout(function(){b._resizeTimeout=null,b.raise("resize.ft.table").then(function(){b.breakpoints.check()})},300)}})}(jQuery,FooTable),function(a,b){b.is.undef(window.moment)||(b.DateColumn=b.Column.extend({construct:function(a,c){this._super(a,c,"date"),this.formatString=b.is.string(c.formatString)?c.formatString:"MM-DD-YYYY"},parser:function(c){if(b.is.element(c)||b.is.jq(c)){var d=a(c).data("value");c=b.is.defined(d)?d:a(c).text(),b.is.string(c)&&(c=isNaN(c)?c:+c)}if(b.is.date(c))return moment(c);if(b.is.object(c)&&b.is["boolean"](c._isAMomentObject))return c;if(b.is.string(c)){if(isNaN(c))return moment(c,this.formatString);c=+c}return b.is.number(c)?moment(c):null},formatter:function(a){return b.is.object(a)&&b.is["boolean"](a._isAMomentObject)?a.format(this.formatString):""},filterValue:function(c){if((b.is.element(c)||b.is.jq(c))&&(c=a(c).data("filterValue")||a(c).text()),b.is.hash(c)&&b.is.hash(c.options)&&(b.is.string(c.options.filterValue)&&(c=c.options.filterValue),b.is.defined(c.value)&&(c=c.value)),b.is.object(c)&&b.is["boolean"](c._isAMomentObject))return c.format(this.formatString);if(b.is.string(c)){if(isNaN(c))return c;c=+c}return b.is.number(c)||b.is.date(c)?moment(c).format(this.formatString):b.is.defined(c)&&null!=c?c+"":""}}),b.columns.register("date",b.DateColumn))}(jQuery,FooTable),function(a,b){b.HTMLColumn=b.Column.extend({construct:function(a,b){this._super(a,b,"html")},parser:function(c){if(b.is.string(c)&&(c=a(a.trim(c))),b.is.element(c)&&(c=a(c)),b.is.jq(c)){var d=c.prop("tagName").toLowerCase();if("td"==d||"th"==d){var e=c.data("value");return b.is.defined(e)?e:c.contents()}return c}return null}}),b.columns.register("html",b.HTMLColumn)}(jQuery,FooTable),function(a,b){b.NumberColumn=b.Column.extend({construct:function(a,c){this._super(a,c,"number"),this.decimalSeparator=b.is.string(c.decimalSeparator)?c.decimalSeparator:".",this.thousandSeparator=b.is.string(c.thousandSeparator)?c.thousandSeparator:",",this.decimalSeparatorRegex=new RegExp(b.str.escapeRegExp(this.decimalSeparator),"g"),this.thousandSeparatorRegex=new RegExp(b.str.escapeRegExp(this.thousandSeparator),"g"),this.cleanRegex=new RegExp("[^0-9"+b.str.escapeRegExp(this.decimalSeparator)+"]","g")},parser:function(c){if(b.is.element(c)||b.is.jq(c)){var d=a(c).data("value");c=b.is.defined(d)?d:a(c).text().replace(this.cleanRegex,"")}return b.is.string(c)&&(c=c.replace(this.thousandSeparatorRegex,"").replace(this.decimalSeparatorRegex,"."),c=parseFloat(c)),b.is.number(c)?c:null},formatter:function(a){if(null==a)return"";var b=(a+"").split(".");return 2==b.length&&b[0].length>3&&(b[0]=b[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,this.thousandSeparator)),b.join(this.decimalSeparator)}}),b.columns.register("number",b.NumberColumn)}(jQuery,FooTable),function(a,b){b.Breakpoint=b.Class.extend({construct:function(a,b){this.name=a,this.width=b}})}(jQuery,FooTable),function(a,b){b.Breakpoints=b.Component.extend({construct:function(a){this._super(a,!0),this.o=a.o,this.current=null,this.array=[],this.cascade=this.o.cascade,this.useParentWidth=this.o.useParentWidth,this.hidden=null,this._classNames="",this.getWidth=b.checkFnValue(this,this.o.getWidth,this.getWidth)},preinit:function(a){var c=this;return this.ft.raise("preinit.ft.breakpoints",[a]).then(function(){c.cascade=b.is["boolean"](a.cascade)?a.cascade:c.cascade,c.o.breakpoints=b.is.hash(a.breakpoints)?a.breakpoints:c.o.breakpoints,c.getWidth=b.checkFnValue(c,a.getWidth,c.getWidth),null==c.o.breakpoints&&(c.o.breakpoints={xs:480,sm:768,md:992,lg:1200});for(var d in c.o.breakpoints)c.o.breakpoints.hasOwnProperty(d)&&(c.array.push(new b.Breakpoint(d,c.o.breakpoints[d])),c._classNames+="breakpoint-"+d+" ");c.array.sort(function(a,b){return b.width-a.width})})},init:function(){var a=this;return this.ft.raise("init.ft.breakpoints").then(function(){a.current=a.get()})},draw:function(){this.ft.$el.removeClass(this._classNames).addClass("breakpoint-"+this.current.name)},calculate:function(){for(var a,c=this,d=null,e=[],f=null,g=c.getWidth(),h=0,i=c.array.length;i>h;h++)a=c.array[h],(!d&&h==i-1||g>=a.width&&(f instanceof b.Breakpoint?g<f.width:!0))&&(d=a),d||e.push(a.name),f=a;return e.push(d.name),c.hidden=e.join(" "),d},visible:function(a){if(b.is.emptyString(a))return!0;if("all"===a)return!1;for(var c=a.split(" "),d=0,e=c.length;e>d;d++)if(this.cascade?b.str.containsWord(this.hidden,c[d]):c[d]==this.current.name)return!1;return!0},check:function(){var a=this,c=a.get();c instanceof b.Breakpoint&&c!=a.current&&a.ft.raise("before.ft.breakpoints",[a.current,c]).then(function(){var b=a.current;return a.current=c,a.ft.draw().then(function(){a.ft.raise("after.ft.breakpoints",[a.current,b])})})},get:function(a){return b.is.undef(a)?this.calculate():a instanceof b.Breakpoint?a:b.is.string(a)?b.arr.first(this.array,function(b){return b.name==a}):b.is.number(a)&&a>=0&&a<this.array.length?this.array[a]:null},getWidth:function(){return b.is.fn(this.o.getWidth)?this.o.getWidth(this.ft):1==this.useParentWidth?this.getParentWidth():this.getViewportWidth()},getParentWidth:function(){return this.ft.$el.parent().width()},getViewportWidth:function(){return Math.max(document.documentElement.clientWidth,window.innerWidth,0)}}),b.components.register("breakpoints",b.Breakpoints,1e3)}(jQuery,FooTable),function(a){a.Column.prototype.breakpoints=null,a.Column.prototype.__breakpoints_define__=function(b){this.breakpoints=a.is.emptyString(b.breakpoints)?null:b.breakpoints},a.Column.extend("define",function(a){this._super(a),this.__breakpoints_define__(a)})}(FooTable),function(a){a.Defaults.prototype.breakpoints=null,a.Defaults.prototype.cascade=!1,a.Defaults.prototype.useParentWidth=!1,a.Defaults.prototype.getWidth=null}(FooTable),function(a,b){b.Columns=b.Component.extend({construct:function(a){this._super(a,!0),this.o=a.o,this.array=[],this.$header=null,this.showHeader=a.o.showHeader,this._fromHTML=b.is.emptyArray(a.o.columns)&&!b.is.promise(a.o.columns)},parse:function(c){var d=this;return a.Deferred(function(c){function e(c,d){var e=[];if(0==c.length||0==d.length)e=c.concat(d);else{var f=0;b.arr.each(c.concat(d),function(a){a.index>f&&(f=a.index)}),f++;for(var g,h,i=0;f>i;i++)g={},b.arr.each(c,function(a){return a.index==i?(g=a,!1):void 0}),h={},b.arr.each(d,function(a){return a.index==i?(h=a,!1):void 0}),e.push(a.extend(!0,{},g,h))}return e}var f,g,h=[],i=[],j=d.ft.$el.find("tr.footable-header, thead > tr:last:has([data-breakpoints]), tbody > tr:first:has([data-breakpoints]), thead > tr:last, tbody > tr:first").first();if(j.length>0){var k=j.parent().is("tbody")&&j.children().length==j.children("td").length;k||(d.$header=j.addClass("footable-header")),j.children("td,th").each(function(b,c){f=a(c),g=f.data(),g.index=b,g.$el=f,g.virtual=k,i.push(g)}),k&&(d.showHeader=!1)}b.is.array(d.o.columns)&&!b.is.emptyArray(d.o.columns)?(b.arr.each(d.o.columns,function(a,b){a.index=b,h.push(a)}),d.parseFinalize(c,e(h,i))):b.is.promise(d.o.columns)?d.o.columns.then(function(a){b.arr.each(a,function(a,b){a.index=b,h.push(a)}),d.parseFinalize(c,e(h,i))},function(a){c.reject(Error("Columns ajax request error: "+a.status+" ("+a.statusText+")"))}):d.parseFinalize(c,e(h,i))})},parseFinalize:function(a,c){var d,e=this,f=[];b.arr.each(c,function(a){(d=b.columns.contains(a.type)?b.columns.make(a.type,e.ft,a):new b.Column(e.ft,a))&&f.push(d)}),b.is.emptyArray(f)?a.reject(Error("No columns supplied.")):(f.sort(function(a,b){return a.index-b.index}),a.resolve(f))},preinit:function(a){var c=this;return c.ft.raise("preinit.ft.columns",[a]).then(function(){return c.parse(a).then(function(d){c.array=d,c.showHeader=b.is["boolean"](a.showHeader)?a.showHeader:c.showHeader})})},init:function(){var a=this;return this.ft.raise("init.ft.columns",[a.array]).then(function(){a.$create()})},destroy:function(){var a=this;this.ft.raise("destroy.ft.columns").then(function(){a._fromHTML||a.$header.remove()})},predraw:function(){var a=this,c=!0;a.visibleColspan=0,a.firstVisibleIndex=0,a.lastVisibleIndex=0,a.hasHidden=!1,b.arr.each(a.array,function(b){b.hidden=!a.ft.breakpoints.visible(b.breakpoints),!b.hidden&&b.visible&&(c&&(a.firstVisibleIndex=b.index,c=!1),a.lastVisibleIndex=b.index,a.visibleColspan++),b.hidden&&(a.hasHidden=!0)}),a.ft.$el.toggleClass("breakpoint",a.hasHidden)},draw:function(){b.arr.each(this.array,function(a){a.$el.css("display",a.hidden||!a.visible?"none":"table-cell")}),!this.showHeader&&b.is.jq(this.$header.parent())&&this.$header.detach()},$create:function(){var c=this;c.$header=b.is.jq(c.$header)?c.$header:a("<tr/>",{"class":"footable-header"}),c.$header.children("th,td").detach(),b.arr.each(c.array,function(a){c.$header.append(a.$el)}),c.showHeader&&!b.is.jq(c.$header.parent())&&c.ft.$el.children("thead").append(c.$header);
},get:function(a){return a instanceof b.Column?a:b.is.string(a)?b.arr.first(this.array,function(b){return b.name==a}):b.is.number(a)?b.arr.first(this.array,function(b){return b.index==a}):b.is.fn(a)?b.arr.get(this.array,a):null},ensure:function(a){var c=this,d=[];return b.is.array(a)?(b.arr.each(a,function(a){d.push(c.get(a))}),d):d}}),b.components.register("columns",b.Columns,900)}(jQuery,FooTable),function(a){a.Defaults.prototype.columns=[],a.Defaults.prototype.showHeader=!0}(FooTable),function(a,b){b.Rows=b.Component.extend({construct:function(a){this._super(a,!0),this.o=a.o,this.array=[],this.all=[],this.showToggle=a.o.showToggle,this.toggleSelector=a.o.toggleSelector,this.toggleColumn=a.o.toggleColumn,this.emptyString=a.o.empty,this.expandFirst=a.o.expandFirst,this.expandAll=a.o.expandAll,this.$empty=null,this._fromHTML=b.is.emptyArray(a.o.rows)&&!b.is.promise(a.o.rows)},parse:function(){var c=this;return a.Deferred(function(a){var d=c.ft.$el.children("tbody").children("tr");b.is.array(c.o.rows)&&c.o.rows.length>0?c.parseFinalize(a,c.o.rows):b.is.promise(c.o.rows)?c.o.rows.then(function(b){c.parseFinalize(a,b)},function(b){a.reject(Error("Rows ajax request error: "+b.status+" ("+b.statusText+")"))}):b.is.jq(d)?(c.parseFinalize(a,d),d.detach()):c.parseFinalize(a,[])})},parseFinalize:function(c,d){var e=this,f=a.map(d,function(a){return new b.Row(e.ft,e.ft.columns.array,a)});c.resolve(f)},preinit:function(a){var c=this;return c.ft.raise("preinit.ft.rows",[a]).then(function(){return c.parse().then(function(d){c.all=d,c.array=c.all.slice(0),c.showToggle=b.is["boolean"](a.showToggle)?a.showToggle:c.showToggle,c.toggleSelector=b.is.string(a.toggleSelector)?a.toggleSelector:c.toggleSelector,c.toggleColumn=b.is.string(a.toggleColumn)?a.toggleColumn:c.toggleColumn,"first"!=c.toggleColumn&&"last"!=c.toggleColumn&&(c.toggleColumn="first"),c.emptyString=b.is.string(a.empty)?a.empty:c.emptyString,c.expandFirst=b.is["boolean"](a.expandFirst)?a.expandFirst:c.expandFirst,c.expandAll=b.is["boolean"](a.expandAll)?a.expandAll:c.expandAll})})},init:function(){var a=this;return a.ft.raise("init.ft.rows",[a.all]).then(function(){a.$create()})},destroy:function(){var a=this;this.ft.raise("destroy.ft.rows").then(function(){b.arr.each(a.array,function(b){b.predraw(!a._fromHTML)})})},predraw:function(){b.arr.each(this.array,function(a){a.predraw()}),this.array=this.all.slice(0)},$create:function(){this.$empty=a("<tr/>",{"class":"footable-empty"}).append(a("<td/>").text(this.emptyString))},draw:function(){var a=this,c=a.ft.$el.children("tbody"),d=!0;a.array.length>0?(a.$empty.detach(),b.arr.each(a.array,function(b){(a.expandFirst&&d||a.expandAll)&&(b.expanded=!0,d=!1),b.draw(c)})):(a.$empty.children("td").attr("colspan",a.ft.columns.visibleColspan),c.append(a.$empty))},load:function(c,d){var e=this,f=a.map(c,function(a){return new b.Row(e.ft,e.ft.columns.array,a)});b.arr.each(this.array,function(a){a.predraw()}),this.all=(b.is["boolean"](d)?d:!1)?this.all.concat(f):f,this.array=this.all.slice(0),this.ft.draw()},expand:function(){b.arr.each(this.array,function(a){a.expand()})},collapse:function(){b.arr.each(this.array,function(a){a.collapse()})}}),b.components.register("rows",b.Rows,800)}(jQuery,FooTable),function(a){a.Defaults.prototype.rows=[],a.Defaults.prototype.empty="No results",a.Defaults.prototype.showToggle=!0,a.Defaults.prototype.toggleSelector="tr,td,.footable-toggle",a.Defaults.prototype.toggleColumn="first",a.Defaults.prototype.expandFirst=!1,a.Defaults.prototype.expandAll=!1}(FooTable),function(a){a.Table.prototype.loadRows=function(a,b){this.rows.load(a,b)}}(FooTable),function(a){a.Filter=a.Class.extend({construct:function(b,c,d,e,f,g,h){this.name=b,this.space=!a.is.string(e)||"OR"!=e&&"AND"!=e?"AND":e,this.connectors=a.is["boolean"](f)?f:!0,this.ignoreCase=a.is["boolean"](g)?g:!0,this.hidden=a.is["boolean"](h)?h:!1,this.query=c instanceof a.Query?c:new a.Query(c,this.space,this.connectors,this.ignoreCase),this.columns=d},match:function(b){return a.is.string(b)?(a.is.string(this.query)&&(this.query=new a.Query(this.query,this.space,this.connectors,this.ignoreCase)),this.query instanceof a.Query?this.query.match(b):!1):!1},matchRow:function(b){var c=this,d=a.arr.map(b.cells,function(b){return a.arr.contains(c.columns,b.column)?b.filterValue:null}).join(" ");return c.match(d)}})}(FooTable),function(a,b){b.Filtering=b.Component.extend({construct:function(a){this._super(a,a.o.filtering.enabled),this.filters=a.o.filtering.filters,this.delay=a.o.filtering.delay,this.min=a.o.filtering.min,this.space=a.o.filtering.space,this.connectors=a.o.filtering.connectors,this.ignoreCase=a.o.filtering.ignoreCase,this.exactMatch=a.o.filtering.exactMatch,this.placeholder=a.o.filtering.placeholder,this.dropdownTitle=a.o.filtering.dropdownTitle,this.position=a.o.filtering.position,this.$row=null,this.$cell=null,this.$dropdown=null,this.$input=null,this.$button=null,this._filterTimeout=null,this._exactRegExp=/^"(.*?)"$/},preinit:function(a){var c=this;return c.ft.raise("preinit.ft.filtering").then(function(){c.ft.$el.hasClass("footable-filtering")&&(c.enabled=!0),c.enabled=b.is["boolean"](a.filtering)?a.filtering:c.enabled,c.enabled&&(c.space=b.is.string(a.filterSpace)?a.filterSpace:c.space,c.min=b.is.number(a.filterMin)?a.filterMin:c.min,c.connectors=b.is["boolean"](a.filterConnectors)?a.filterConnectors:c.connectors,c.ignoreCase=b.is["boolean"](a.filterIgnoreCase)?a.filterIgnoreCase:c.ignoreCase,c.exactMatch=b.is["boolean"](a.filterExactMatch)?a.filterExactMatch:c.exactMatch,c.delay=b.is.number(a.filterDelay)?a.filterDelay:c.delay,c.placeholder=b.is.string(a.filterPlaceholder)?a.filterPlaceholder:c.placeholder,c.dropdownTitle=b.is.string(a.filterDropdownTitle)?a.filterDropdownTitle:c.dropdownTitle,c.filters=b.is.array(a.filterFilters)?c.ensure(a.filterFilters):c.ensure(c.filters),c.ft.$el.hasClass("footable-filtering-left")&&(c.position="left"),c.ft.$el.hasClass("footable-filtering-center")&&(c.position="center"),c.ft.$el.hasClass("footable-filtering-right")&&(c.position="right"),c.position=b.is.string(a.filterPosition)?a.filterPosition:c.position)},function(){c.enabled=!1})},init:function(){var a=this;return a.ft.raise("init.ft.filtering").then(function(){a.$create()},function(){a.enabled=!1})},destroy:function(){var a=this;return a.ft.raise("destroy.ft.filtering").then(function(){a.ft.$el.removeClass("footable-filtering").find("thead > tr.footable-filtering").remove()})},$create:function(){var c,d=this,e=a("<div/>",{"class":"form-group footable-filtering-search"}).append(a("<label/>",{"class":"sr-only",text:"Search"})),f=a("<div/>",{"class":"input-group"}).appendTo(e),g=a("<div/>",{"class":"input-group-btn"}),h=a("<button/>",{type:"button","class":"btn btn-default dropdown-toggle"}).on("click",{self:d},d._onDropdownToggleClicked).append(a("<span/>",{"class":"caret"}));switch(d.position){case"left":c="footable-filtering-left";break;case"center":c="footable-filtering-center";break;default:c="footable-filtering-right"}d.ft.$el.addClass("footable-filtering").addClass(c),d.$row=a("<tr/>",{"class":"footable-filtering"}).prependTo(d.ft.$el.children("thead")),d.$cell=a("<th/>").attr("colspan",d.ft.columns.visibleColspan).appendTo(d.$row),d.$form=a("<form/>",{"class":"form-inline"}).append(e).appendTo(d.$cell),d.$input=a("<input/>",{type:"text","class":"form-control",placeholder:d.placeholder}),d.$button=a("<button/>",{type:"button","class":"btn btn-primary"}).on("click",{self:d},d._onSearchButtonClicked).append(a("<span/>",{"class":"fooicon fooicon-search"})),d.$dropdown=a("<ul/>",{"class":"dropdown-menu dropdown-menu-right"}),b.is.emptyString(d.dropdownTitle)||d.$dropdown.append(a("<li/>",{"class":"dropdown-header",text:d.dropdownTitle})),d.$dropdown.append(b.arr.map(d.ft.columns.array,function(b){return b.filterable?a("<li/>").append(a("<a/>",{"class":"checkbox"}).append(a("<label/>",{text:b.title}).prepend(a("<input/>",{type:"checkbox",checked:!0}).data("__FooTableColumn__",b)))):null})),d.delay>0&&(d.$input.on("keypress keyup paste",{self:d},d._onSearchInputChanged),d.$dropdown.on("click",'input[type="checkbox"]',{self:d},d._onSearchColumnClicked)),g.append(d.$button,h,d.$dropdown),f.append(d.$input,g)},predraw:function(){if(!b.is.emptyArray(this.filters)){var c=this;c.ft.rows.array=a.grep(c.ft.rows.array,function(a){return a.filtered(c.filters)})}},draw:function(){this.$cell.attr("colspan",this.ft.columns.visibleColspan);var a=this.find("search");if(a instanceof b.Filter){var c=a.query.val();this.exactMatch&&this._exactRegExp.test(c)&&(c=c.replace(this._exactRegExp,"$1")),this.$input.val(c)}else this.$input.val(null);this.setButton(!b.arr.any(this.filters,function(a){return!a.hidden}))},addFilter:function(a,c,d,e,f,g,h){var i=this.createFilter(a,c,d,e,f,g,h);i instanceof b.Filter&&(this.removeFilter(i.name),this.filters.push(i))},removeFilter:function(a){b.arr.remove(this.filters,function(b){return b.name==a})},filter:function(){var a=this;return a.filters=a.ensure(a.filters),a.ft.raise("before.ft.filtering",[a.filters]).then(function(){return a.filters=a.ensure(a.filters),a.ft.draw().then(function(){a.ft.raise("after.ft.filtering",[a.filters])})})},clear:function(){return this.filters=b.arr.get(this.filters,function(a){return a.hidden}),this.filter()},setButton:function(a){a?this.$button.children(".fooicon").removeClass("fooicon-remove").addClass("fooicon-search"):this.$button.children(".fooicon").removeClass("fooicon-search").addClass("fooicon-remove")},find:function(a){return b.arr.first(this.filters,function(b){return b.name==a})},columns:function(){return b.is.jq(this.$dropdown)?this.$dropdown.find("input:checked").map(function(){return a(this).data("__FooTableColumn__")}).get():this.ft.columns.get(function(a){return a.filterable})},ensure:function(a){var c=this,d=[],e=c.columns();return b.is.emptyArray(a)||b.arr.each(a,function(a){a=c._ensure(a,e),a instanceof b.Filter&&d.push(a)}),d},createFilter:function(a,c,d,e,f,g,h){return b.is.string(a)&&(a={name:a,query:c,columns:d,ignoreCase:e,connectors:f,space:g,hidden:h}),this._ensure(a,this.columns())},_ensure:function(a,c){return(b.is.hash(a)||a instanceof b.Filter)&&!b.is.emptyString(a.name)&&(!b.is.emptyString(a.query)||a.query instanceof b.Query)?(a.columns=b.is.emptyArray(a.columns)?c:this.ft.columns.ensure(a.columns),a.ignoreCase=b.is["boolean"](a.ignoreCase)?a.ignoreCase:this.ignoreCase,a.connectors=b.is["boolean"](a.connectors)?a.connectors:this.connectors,a.hidden=b.is["boolean"](a.hidden)?a.hidden:!1,a.space=!b.is.string(a.space)||"AND"!==a.space&&"OR"!==a.space?this.space:a.space,a.query=b.is.string(a.query)?new b.Query(a.query,a.space,a.connectors,a.ignoreCase):a.query,a instanceof b.Filter?a:new b.Filter(a.name,a.query,a.columns,a.space,a.connectors,a.ignoreCase,a.hidden)):null},_onSearchInputChanged:function(a){var c=a.data.self,d="keypress"==a.type&&!b.is.emptyString(String.fromCharCode(a.charCode)),e="keyup"==a.type&&(8==a.which||46==a.which),f="paste"==a.type;(d||e||f)&&(13==a.which&&a.preventDefault(),null!=c._filterTimeout&&clearTimeout(c._filterTimeout),c._filterTimeout=setTimeout(function(){c._filterTimeout=null;var a=c.$input.val();a.length>=c.min?(c.exactMatch&&!c._exactRegExp.test(a)&&(a='"'+a+'"'),c.addFilter("search",a),c.filter()):b.is.emptyString(a)&&c.clear()},c.delay))},_onSearchButtonClicked:function(a){a.preventDefault();var b=a.data.self;null!=b._filterTimeout&&clearTimeout(b._filterTimeout);var c=b.$button.children(".fooicon");if(c.hasClass("fooicon-remove"))b.clear();else{var d=b.$input.val();d.length>=b.min&&(b.exactMatch&&!b._exactRegExp.test(d)&&(d='"'+d+'"'),b.addFilter("search",d),b.filter())}},_onSearchColumnClicked:function(a){var b=a.data.self;null!=b._filterTimeout&&clearTimeout(b._filterTimeout),b._filterTimeout=setTimeout(function(){b._filterTimeout=null;var a=b.$button.children(".fooicon");a.hasClass("fooicon-remove")&&(a.removeClass("fooicon-remove").addClass("fooicon-search"),b.addFilter("search",b.$input.val()),b.filter())},b.delay)},_onDropdownToggleClicked:function(b){b.preventDefault(),b.stopPropagation();var c=b.data.self;c.$dropdown.parent().toggleClass("open"),c.$dropdown.parent().hasClass("open")?a(document).on("click.footable",{self:c},c._onDocumentClicked):a(document).off("click.footable",c._onDocumentClicked)},_onDocumentClicked:function(b){if(0==a(b.target).closest(".dropdown-menu").length){b.preventDefault();var c=b.data.self;c.$dropdown.parent().removeClass("open"),a(document).off("click.footable",c._onDocumentClicked)}}}),b.components.register("filtering",b.Filtering,500)}(jQuery,FooTable),function(a){a.Query=a.Class.extend({construct:function(b,c,d,e){this._original=null,this._value=null,this.space=!a.is.string(c)||"OR"!=c&&"AND"!=c?"AND":c,this.connectors=a.is["boolean"](d)?d:!0,this.ignoreCase=a.is["boolean"](e)?e:!0,this.left=null,this.right=null,this.parts=[],this.operator=null,this.val(b)},val:function(b){if(a.is.emptyString(b))return this._value;if(a.is.emptyString(this._original))this._original=b;else if(this._original==b)return;this._value=b,this._parse()},match:function(b){return a.is.emptyString(this.operator)||"OR"===this.operator?this._left(b,!1)||this._match(b,!1)||this._right(b,!1):"AND"===this.operator?this._left(b,!0)&&this._match(b,!0)&&this._right(b,!0):void 0},_match:function(b,c){var d=this,e=!1,f=a.is.emptyString(b);return a.is.emptyArray(d.parts)&&d.left instanceof a.Query?c:a.is.emptyArray(d.parts)?e:("OR"===d.space?a.arr.each(d.parts,function(c){if(c.empty&&f){if(e=!0,c.negate)return e=!1}else{var g=(c.exact?a.str.containsExact:a.str.contains)(b,c.query,d.ignoreCase);if(g&&!c.negate&&(e=!0),g&&c.negate)return e=!1}}):(e=!0,a.arr.each(d.parts,function(c){if(c.empty)return(!f&&!c.negate||f&&c.negate)&&(e=!1),e;var g=(c.exact?a.str.containsExact:a.str.contains)(b,c.query,d.ignoreCase);return(!g&&!c.negate||g&&c.negate)&&(e=!1),e})),e)},_left:function(b,c){return this.left instanceof a.Query?this.left.match(b):c},_right:function(b,c){return this.right instanceof a.Query?this.right.match(b):c},_parse:function(){if(!a.is.emptyString(this._value))if(/\sOR\s/.test(this._value)){this.operator="OR";var b=this._value.split(/(?:\sOR\s)(.*)?/);this.left=new a.Query(b[0],this.space,this.connectors,this.ignoreCase),this.right=new a.Query(b[1],this.space,this.connectors,this.ignoreCase)}else if(/\sAND\s/.test(this._value)){this.operator="AND";var c=this._value.split(/(?:\sAND\s)(.*)?/);this.left=new a.Query(c[0],this.space,this.connectors,this.ignoreCase),this.right=new a.Query(c[1],this.space,this.connectors,this.ignoreCase)}else{var d=this;this.parts=a.arr.map(this._value.match(/(?:[^\s"]+|"[^"]*")+/g),function(a){return d._part(a)})}},_part:function(b){var c={query:b,negate:!1,phrase:!1,exact:!1,empty:!1};return a.str.startsWith(c.query,"-")&&(c.query=a.str.from(c.query,"-"),c.negate=!0),/^"(.*?)"$/.test(c.query)?(c.query=c.query.replace(/^"(.*?)"$/,"$1"),c.phrase=!0,c.exact=!0):this.connectors&&/(?:\w)+?([-_\+\.])(?:\w)+?/.test(c.query)&&(c.query=c.query.replace(/(?:\w)+?([-_\+\.])(?:\w)+?/g,function(a,b){return a.replace(b," ")}),c.phrase=!0),c.empty=c.phrase&&a.is.emptyString(c.query),c}})}(FooTable),function(a){a.Cell.prototype.filterValue=null,a.Cell.prototype.__filtering_define__=function(a){this.filterValue=this.column.filterValue.call(this.column,a)},a.Cell.prototype.__filtering_val__=function(b){a.is.defined(b)&&(this.filterValue=this.column.filterValue.call(this.column,b))},a.Cell.extend("define",function(a){this._super(a),this.__filtering_define__(a)}),a.Cell.extend("val",function(a){var b=this._super(a);return this.__filtering_val__(a),b})}(FooTable),function(a,b){b.Column.prototype.filterable=!0,b.Column.prototype.filterValue=function(c){if(b.is.element(c)||b.is.jq(c)){var d=a(c).data("filterValue");return b.is.defined(d)?""+d:a(c).text()}if(b.is.hash(c)&&b.is.hash(c.options)){if(b.is.string(c.options.filterValue))return c.options.filterValue;b.is.defined(c.value)&&(c=c.value)}return b.is.defined(c)&&null!=c?c+"":""},b.Column.prototype.__filtering_define__=function(a){this.filterable=b.is["boolean"](a.filterable)?a.filterable:this.filterable,this.filterValue=b.checkFnValue(this,a.filterValue,this.filterValue)},b.Column.extend("define",function(a){this._super(a),this.__filtering_define__(a)})}(jQuery,FooTable),function(a){a.Defaults.prototype.filtering={enabled:!1,filters:[],delay:1200,min:1,space:"AND",placeholder:"Search",dropdownTitle:null,position:"right",connectors:!0,ignoreCase:!0,exactMatch:!1}}(FooTable),function(a){a.Row.prototype.filtered=function(b){var c=!0,d=this;return a.arr.each(b,function(a){return 0==(c=a.matchRow(d))?!1:void 0}),c}}(FooTable),function(a,b){b.Sorter=b.Class.extend({construct:function(a,b){this.column=a,this.direction=b}})}(jQuery,FooTable),function(a,b){b.Sorting=b.Component.extend({construct:function(a){this._super(a,a.o.sorting.enabled),this.o=a.o.sorting,this.column=null,this.allowed=!0,this.initial=null},preinit:function(a){var c=this;this.ft.raise("preinit.ft.sorting",[a]).then(function(){c.ft.$el.hasClass("footable-sorting")&&(c.enabled=!0),c.enabled=b.is["boolean"](a.sorting)?a.sorting:c.enabled,c.enabled&&(c.column=b.arr.first(c.ft.columns.array,function(a){return a.sorted}))},function(){c.enabled=!1})},init:function(){var c=this;this.ft.raise("init.ft.sorting").then(function(){if(!c.initial){var d=!!c.column;c.initial={isset:d,rows:c.ft.rows.all.slice(0),column:d?c.column.name:null,direction:d?c.column.direction:null}}b.arr.each(c.ft.columns.array,function(b){b.sortable&&b.$el.addClass("footable-sortable").append(a("<span/>",{"class":"fooicon fooicon-sort"}))}),c.ft.$el.on("click.footable",".footable-sortable",{self:c},c._onSortClicked)},function(){c.enabled=!1})},destroy:function(){var a=this;this.ft.raise("destroy.ft.paging").then(function(){a.ft.$el.off("click.footable",".footable-sortable",a._onSortClicked),a.ft.$el.children("thead").children("tr.footable-header").children(".footable-sortable").removeClass("footable-sortable footable-asc footable-desc").find("span.fooicon").remove()})},predraw:function(){if(this.column){var a=this,b=a.column;a.ft.rows.array.sort(function(a,c){return"DESC"==b.direction?b.sorter(c.cells[b.index].sortValue,a.cells[b.index].sortValue):b.sorter(a.cells[b.index].sortValue,c.cells[b.index].sortValue)})}},draw:function(){if(this.column){var a=this,b=a.ft.$el.find("thead > tr > .footable-sortable"),c=a.column.$el;b.removeClass("footable-asc footable-desc").children(".fooicon").removeClass("fooicon-sort fooicon-sort-asc fooicon-sort-desc"),b.not(c).children(".fooicon").addClass("fooicon-sort"),c.addClass("DESC"==a.column.direction?"footable-desc":"footable-asc").children(".fooicon").addClass("DESC"==a.column.direction?"fooicon-sort-desc":"fooicon-sort-asc")}},sort:function(a,b){return this._sort(a,b)},toggleAllowed:function(a){a=b.is["boolean"](a)?a:!this.allowed,this.allowed=a,this.ft.$el.toggleClass("footable-sorting-disabled",!this.allowed)},hasChanged:function(){return!(!this.initial||!this.column||this.column.name===this.initial.column&&(this.column.direction===this.initial.direction||null===this.initial.direction&&"ASC"===this.column.direction))},reset:function(){this.initial&&(this.initial.isset?this.sort(this.initial.column,this.initial.direction):(this.column&&(this.column.$el.removeClass("footable-asc footable-desc"),this.column=null),this.ft.rows.all=this.initial.rows,this.ft.draw()))},_sort:function(c,d){if(!this.allowed)return a.Deferred().reject("sorting disabled");var e=this,f=new b.Sorter(e.ft.columns.get(c),b.Sorting.dir(d));return e.ft.raise("before.ft.sorting",[f]).then(function(){return b.arr.each(e.ft.columns.array,function(a){a!=e.column&&(a.direction=null)}),e.column=e.ft.columns.get(f.column),e.column&&(e.column.direction=b.Sorting.dir(f.direction)),e.ft.draw().then(function(){e.ft.raise("after.ft.sorting",[f])})})},_onSortClicked:function(b){var c=b.data.self,d=a(this).closest("th,td"),e=d.is(".footable-asc, .footable-desc")?d.hasClass("footable-desc")?"ASC":"DESC":"ASC";c._sort(d.index(),e)}}),b.Sorting.dir=function(a){return!b.is.string(a)||"ASC"!=a&&"DESC"!=a?"ASC":a},b.components.register("sorting",b.Sorting,600)}(jQuery,FooTable),function(a){a.Cell.prototype.sortValue=null,a.Cell.prototype.__sorting_define__=function(a){this.sortValue=this.column.sortValue.call(this.column,a)},a.Cell.prototype.__sorting_val__=function(b){a.is.defined(b)&&(this.sortValue=this.column.sortValue.call(this.column,b))},a.Cell.extend("define",function(a){this._super(a),this.__sorting_define__(a)}),a.Cell.extend("val",function(a){var b=this._super(a);return this.__sorting_val__(a),b})}(FooTable),function(a,b){b.Column.prototype.direction=null,b.Column.prototype.sortable=!0,b.Column.prototype.sorted=!1,b.Column.prototype.sorter=function(a,b){return"string"==typeof a&&(a=a.toLowerCase()),"string"==typeof b&&(b=b.toLowerCase()),a===b?0:b>a?-1:1},b.Column.prototype.sortValue=function(c){if(b.is.element(c)||b.is.jq(c)){var d=a(c).data("sortValue");return b.is.defined(d)?d:this.parser(c)}if(b.is.hash(c)&&b.is.hash(c.options)){if(b.is.string(c.options.sortValue))return c.options.sortValue;b.is.defined(c.value)&&(c=c.value)}return b.is.defined(c)&&null!=c?c:null},b.Column.prototype.__sorting_define__=function(a){this.sorter=b.checkFnValue(this,a.sorter,this.sorter),this.direction=b.is.type(a.direction,"string")?b.Sorting.dir(a.direction):null,this.sortable=b.is["boolean"](a.sortable)?a.sortable:!0,this.sorted=b.is["boolean"](a.sorted)?a.sorted:!1,this.sortValue=b.checkFnValue(this,a.sortValue,this.sortValue)},b.Column.extend("define",function(a){this._super(a),this.__sorting_define__(a)})}(jQuery,FooTable),function(a){a.Defaults.prototype.sorting={enabled:!1}}(FooTable),function(a,b){b.HTMLColumn.extend("__sorting_define__",function(c){this._super(c),this.sortUse=b.is.string(c.sortUse)&&-1!==a.inArray(c.sortUse,["html","text"])?c.sortUse:"html"}),b.HTMLColumn.prototype.sortValue=function(c){if(b.is.element(c)||b.is.jq(c)){var d=a(c).data("sortValue");return b.is.defined(d)?d:a.trim(a(c)[this.sortUse]())}if(b.is.hash(c)&&b.is.hash(c.options)){if(b.is.string(c.options.sortValue))return c.options.sortValue;b.is.defined(c.value)&&(c=c.value)}return b.is.defined(c)&&null!=c?c:null}}(jQuery,FooTable),function(a){a.Table.prototype.sort=function(b,c){return this.use(a.Sorting).sort(b,c)}}(FooTable),function(a,b){b.Pager=b.Class.extend({construct:function(a,b,c,d,e){this.total=a,this.current=b,this.size=c,this.page=d,this.forward=e}})}(jQuery,FooTable),function(a,b){b.Paging=b.Component.extend({construct:function(a){this._super(a,a.o.paging.enabled),this.strings=a.o.paging.strings,this.current=a.o.paging.current,this.size=a.o.paging.size,this.limit=a.o.paging.limit,this.position=a.o.paging.position,this.countFormat=a.o.paging.countFormat,this.total=-1,this.totalRows=0,this.previous=-1,this.formattedCount=null,this.$row=null,this.$cell=null,this.$pagination=null,this.$count=null,this.detached=!0,this._createdLinks=0},preinit:function(a){var c=this;this.ft.raise("preinit.ft.paging",[a]).then(function(){c.ft.$el.hasClass("footable-paging")&&(c.enabled=!0),c.enabled=b.is["boolean"](a.paging)?a.paging:c.enabled,c.enabled&&(c.size=b.is.number(a.pagingSize)?a.pagingSize:c.size,c.current=b.is.number(a.pagingCurrent)?a.pagingCurrent:c.current,c.limit=b.is.number(a.pagingLimit)?a.pagingLimit:c.limit,c.ft.$el.hasClass("footable-paging-left")&&(c.position="left"),c.ft.$el.hasClass("footable-paging-center")&&(c.position="center"),c.ft.$el.hasClass("footable-paging-right")&&(c.position="right"),c.position=b.is.string(a.pagingPosition)?a.pagingPosition:c.position,c.countFormat=b.is.string(a.pagingCountFormat)?a.pagingCountFormat:c.countFormat,c.total=Math.ceil(c.ft.rows.all.length/c.size))},function(){c.enabled=!1})},init:function(){var a=this;this.ft.raise("init.ft.paging").then(function(){a.$create()},function(){a.enabled=!1})},destroy:function(){var a=this;this.ft.raise("destroy.ft.paging").then(function(){a.ft.$el.removeClass("footable-paging").find("tfoot > tr.footable-paging").remove(),a.detached=!0,a._createdLinks=0})},predraw:function(){this.total=Math.ceil(this.ft.rows.array.length/this.size),this.current=this.current>this.total?this.total:this.current<1?1:this.current,this.totalRows=this.ft.rows.array.length,this.totalRows>this.size&&(this.ft.rows.array=this.ft.rows.array.splice((this.current-1)*this.size,this.size));var a=this.size*(this.current-1)+1,b=this.size*this.current;0==this.ft.rows.array.length?(a=0,b=0):b=b>this.totalRows?this.totalRows:b,this.formattedCount=this._countFormat(this.current,this.total,a,b,this.totalRows)},draw:function(){if(this.total<=1)this.detached||(this.$row.detach(),this.detached=!0);else{if(this.detached){var b=this.ft.$el.children("tfoot");0==b.length&&(b=a("<tfoot/>"),this.ft.$el.append(b)),this.$row.appendTo(b),this.detached=!1}this.$cell.attr("colspan",this.ft.columns.visibleColspan),this._createLinks(),this._setVisible(this.current,this.current>this.previous),this._setNavigation(!0),this.$count.text(this.formattedCount)}},$create:function(){this._createdLinks=0;var b="footable-paging-center";switch(this.position){case"left":b="footable-paging-left";break;case"right":b="footable-paging-right"}this.ft.$el.addClass("footable-paging").addClass(b),this.$cell=a("<td/>").attr("colspan",this.ft.columns.visibleColspan);var c=this.ft.$el.children("tfoot");0==c.length&&(c=a("<tfoot/>"),this.ft.$el.append(c)),this.$row=a("<tr/>",{"class":"footable-paging"}).append(this.$cell).appendTo(c),this.$pagination=a("<ul/>",{"class":"pagination"}).on("click.footable","a.footable-page-link",{self:this},this._onPageClicked),this.$count=a("<span/>",{"class":"label label-default"}),this.$cell.append(this.$pagination,a("<div/>",{"class":"divider"}),this.$count),this.detached=!1},first:function(){return this._set(1)},prev:function(){return this._set(this.current-1>0?this.current-1:1)},next:function(){return this._set(this.current+1<this.total?this.current+1:this.total)},last:function(){return this._set(this.total)},"goto":function(a){return this._set(a>this.total?this.total:1>a?1:a)},prevPages:function(){var a=this.$pagination.children("li.footable-page.visible:first").data("page")-1;this._setVisible(a,!0),this._setNavigation(!1)},nextPages:function(){var a=this.$pagination.children("li.footable-page.visible:last").data("page")+1;this._setVisible(a,!1),this._setNavigation(!1)},pageSize:function(a){return b.is.number(a)?(this.size=a,this.total=Math.ceil(this.ft.rows.all.length/this.size),b.is.jq(this.$row)&&this.$row.remove(),this.$create(),void this.ft.draw()):this.size},_set:function(c){var d=this,e=new b.Pager(d.total,d.current,d.size,c,c>d.current);return d.ft.raise("before.ft.paging",[e]).then(function(){return e.page=e.page>e.total?e.total:e.page,e.page=e.page<1?1:e.page,d.current==c?a.when():(d.previous=d.current,d.current=e.page,d.ft.draw().then(function(){d.ft.raise("after.ft.paging",[e])}))})},_createLinks:function(){if(this._createdLinks!==this.total){var b=this,c=b.total>1,d=function(b,c,d){return a("<li/>",{"class":d}).attr("data-page",b).append(a("<a/>",{"class":"footable-page-link",href:"#"}).data("page",b).html(c))};b.$pagination.empty(),c&&(b.$pagination.append(d("first",b.strings.first,"footable-page-nav")),b.$pagination.append(d("prev",b.strings.prev,"footable-page-nav")),b.limit>0&&b.limit<b.total&&b.$pagination.append(d("prev-limit",b.strings.prevPages,"footable-page-nav")));for(var e,f=0;f<b.total;f++)e=d(f+1,f+1,"footable-page"),b.$pagination.append(e);c&&(b.limit>0&&b.limit<b.total&&b.$pagination.append(d("next-limit",b.strings.nextPages,"footable-page-nav")),b.$pagination.append(d("next",b.strings.next,"footable-page-nav")),b.$pagination.append(d("last",b.strings.last,"footable-page-nav"))),b._createdLinks=b.total}},_setNavigation:function(a){1==this.current?this.$pagination.children('li[data-page="first"],li[data-page="prev"]').addClass("disabled"):this.$pagination.children('li[data-page="first"],li[data-page="prev"]').removeClass("disabled"),this.current==this.total?this.$pagination.children('li[data-page="next"],li[data-page="last"]').addClass("disabled"):this.$pagination.children('li[data-page="next"],li[data-page="last"]').removeClass("disabled"),1==(this.$pagination.children("li.footable-page.visible:first").data("page")||1)?this.$pagination.children('li[data-page="prev-limit"]').addClass("disabled"):this.$pagination.children('li[data-page="prev-limit"]').removeClass("disabled"),(this.$pagination.children("li.footable-page.visible:last").data("page")||this.limit)==this.total?this.$pagination.children('li[data-page="next-limit"]').addClass("disabled"):this.$pagination.children('li[data-page="next-limit"]').removeClass("disabled"),this.limit>0&&this.total<this.limit?this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').hide():this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').show(),a&&this.$pagination.children("li.footable-page").removeClass("active").filter('li[data-page="'+this.current+'"]').addClass("active")},_setVisible:function(a,b){if(this.limit>0&&this.total>this.limit){if(!this.$pagination.children('li.footable-page[data-page="'+a+'"]').hasClass("visible")){var c=0,d=0;1==b?(d=a>this.total?this.total:a,c=d-this.limit):(c=1>a?0:a-1,d=c+this.limit),0>c&&(c=0,d=this.limit>this.total?this.total:this.limit),d>this.total&&(d=this.total,c=this.total-this.limit<0?0:this.total-this.limit),this.$pagination.children("li.footable-page").removeClass("visible").slice(c,d).addClass("visible")}}else this.$pagination.children("li.footable-page").removeClass("visible").slice(0,this.total).addClass("visible")},_countFormat:function(a,b,c,d,e){return this.countFormat.replace(/\{CP}/g,a).replace(/\{TP}/g,b).replace(/\{PF}/g,c).replace(/\{PL}/g,d).replace(/\{TR}/g,e)},_onPageClicked:function(b){if(b.preventDefault(),!a(b.target).closest("li").is(".active,.disabled")){var c=b.data.self,d=a(this).data("page");switch(d){case"first":return void c.first();case"prev":return void c.prev();case"next":return void c.next();case"last":return void c.last();case"prev-limit":return void c.prevPages();case"next-limit":return void c.nextPages();default:return void c._set(d)}}}}),b.components.register("paging",b.Paging,400)}(jQuery,FooTable),function(a){a.Defaults.prototype.paging={enabled:!1,countFormat:"{CP} of {TP}",current:1,limit:5,position:"center",size:10,strings:{first:"&laquo;",prev:"&lsaquo;",next:"&rsaquo;",last:"&raquo;",prevPages:"...",nextPages:"..."}}}(FooTable),function(a){a.Table.prototype.gotoPage=function(b){return this.use(a.Paging)["goto"](b)},a.Table.prototype.nextPage=function(){return this.use(a.Paging).next()},a.Table.prototype.prevPage=function(){return this.use(a.Paging).prev()},a.Table.prototype.firstPage=function(){return this.use(a.Paging).first()},a.Table.prototype.lastPage=function(){return this.use(a.Paging).last()},a.Table.prototype.nextPages=function(){return this.use(a.Paging).nextPages()},a.Table.prototype.prevPages=function(){return this.use(a.Paging).prevPages()},a.Table.prototype.pageSize=function(b){return this.use(a.Paging).pageSize(b)}}(FooTable),function(a,b){b.Editing=b.Component.extend({construct:function(c){this._super(c,c.o.editing.enabled),this.pageToNew=c.o.editing.pageToNew,this.alwaysShow=c.o.editing.alwaysShow,this.column=a.extend(!0,{},c.o.editing.column,{visible:this.alwaysShow}),this.position=c.o.editing.position,this.showText=c.o.editing.showText,this.hideText=c.o.editing.hideText,this.addText=c.o.editing.addText,this.editText=c.o.editing.editText,this.deleteText=c.o.editing.deleteText,this.viewText=c.o.editing.viewText,this.allowAdd=c.o.editing.allowAdd,this.allowEdit=c.o.editing.allowEdit,this.allowDelete=c.o.editing.allowDelete,this.allowView=c.o.editing.allowView,this._$buttons=null,this.callbacks={addRow:b.checkFnValue(this,c.o.editing.addRow),editRow:b.checkFnValue(this,c.o.editing.editRow),
deleteRow:b.checkFnValue(this,c.o.editing.deleteRow),viewRow:b.checkFnValue(this,c.o.editing.viewRow)}},preinit:function(c){var d=this;this.ft.raise("preinit.ft.editing",[c]).then(function(){if(d.ft.$el.hasClass("footable-editing")&&(d.enabled=!0),d.enabled=b.is["boolean"](c.editing)?c.editing:d.enabled,d.enabled){if(d.pageToNew=b.is["boolean"](c.editingPageToNew)?c.editingPageToNew:d.pageToNew,d.alwaysShow=b.is["boolean"](c.editingAlwaysShow)?c.editingAlwaysShow:d.alwaysShow,d.position=b.is.string(c.editingPosition)?c.editingPosition:d.position,d.showText=b.is.string(c.editingShowText)?c.editingShowText:d.showText,d.hideText=b.is.string(c.editingHideText)?c.editingHideText:d.hideText,d.addText=b.is.string(c.editingAddText)?c.editingAddText:d.addText,d.editText=b.is.string(c.editingEditText)?c.editingEditText:d.editText,d.deleteText=b.is.string(c.editingDeleteText)?c.editingDeleteText:d.deleteText,d.viewText=b.is.string(c.editingViewText)?c.editingViewText:d.viewText,d.allowAdd=b.is["boolean"](c.editingAllowAdd)?c.editingAllowAdd:d.allowAdd,d.allowEdit=b.is["boolean"](c.editingAllowEdit)?c.editingAllowEdit:d.allowEdit,d.allowDelete=b.is["boolean"](c.editingAllowDelete)?c.editingAllowDelete:d.allowDelete,d.allowView=b.is["boolean"](c.editingAllowView)?c.editingAllowView:d.allowView,d.column=new b.EditingColumn(d.ft,d,a.extend(!0,{},d.column,c.editingColumn,{visible:d.alwaysShow})),d.ft.$el.hasClass("footable-editing-left")&&(d.position="left"),d.ft.$el.hasClass("footable-editing-right")&&(d.position="right"),"right"===d.position)d.column.index=d.ft.columns.array.length;else{d.column.index=0;for(var e=0,f=d.ft.columns.array.length;f>e;e++)d.ft.columns.array[e].index+=1}d.ft.columns.array.push(d.column),d.ft.columns.array.sort(function(a,b){return a.index-b.index}),d.callbacks.addRow=b.checkFnValue(d,c.editingAddRow,d.callbacks.addRow),d.callbacks.editRow=b.checkFnValue(d,c.editingEditRow,d.callbacks.editRow),d.callbacks.deleteRow=b.checkFnValue(d,c.editingDeleteRow,d.callbacks.deleteRow),d.callbacks.viewRow=b.checkFnValue(d,c.editingViewRow,d.callbacks.viewRow)}},function(){d.enabled=!1})},init:function(){var a=this;this.ft.raise("init.ft.editing").then(function(){a.$create()},function(){a.enabled=!1})},destroy:function(){var a=this;this.ft.raise("destroy.ft.editing").then(function(){a.ft.$el.removeClass("footable-editing footable-editing-always-show footable-editing-no-add footable-editing-no-edit footable-editing-no-delete footable-editing-no-view").off("click.ft.editing").find("tfoot > tr.footable-editing").remove()})},$create:function(){var b=this,c="right"===b.position?"footable-editing-right":"footable-editing-left";b.ft.$el.addClass("footable-editing").addClass(c).on("click.ft.editing",".footable-show",{self:b},b._onShowClick).on("click.ft.editing",".footable-hide",{self:b},b._onHideClick).on("click.ft.editing",".footable-edit",{self:b},b._onEditClick).on("click.ft.editing",".footable-delete",{self:b},b._onDeleteClick).on("click.ft.editing",".footable-view",{self:b},b._onViewClick).on("click.ft.editing",".footable-add",{self:b},b._onAddClick),b.$cell=a("<td/>").attr("colspan",b.ft.columns.visibleColspan).append(b.$buttonShow()),b.allowAdd&&b.$cell.append(b.$buttonAdd()),b.$cell.append(b.$buttonHide()),b.alwaysShow&&b.ft.$el.addClass("footable-editing-always-show"),b.allowAdd||b.ft.$el.addClass("footable-editing-no-add"),b.allowEdit||b.ft.$el.addClass("footable-editing-no-edit"),b.allowDelete||b.ft.$el.addClass("footable-editing-no-delete"),b.allowView||b.ft.$el.addClass("footable-editing-no-view");var d=b.ft.$el.children("tfoot");0==d.length&&(d=a("<tfoot/>"),b.ft.$el.append(d)),b.$row=a("<tr/>",{"class":"footable-editing"}).append(b.$cell).appendTo(d)},$buttonShow:function(){return'<button type="button" class="btn btn-primary footable-show">'+this.showText+"</button>"},$buttonHide:function(){return'<button type="button" class="btn btn-default footable-hide">'+this.hideText+"</button>"},$buttonAdd:function(){return'<button type="button" class="btn btn-primary footable-add">'+this.addText+"</button> "},$buttonEdit:function(){return'<button type="button" class="btn btn-default footable-edit">'+this.editText+"</button> "},$buttonDelete:function(){return'<button type="button" class="btn btn-default footable-delete">'+this.deleteText+"</button>"},$buttonView:function(){return'<button type="button" class="btn btn-default footable-view">'+this.viewText+"</button> "},$rowButtons:function(){return b.is.jq(this._$buttons)?this._$buttons.clone():(this._$buttons=a('<div class="btn-group btn-group-xs" role="group"></div>'),this.allowView&&this._$buttons.append(this.$buttonView()),this.allowEdit&&this._$buttons.append(this.$buttonEdit()),this.allowDelete&&this._$buttons.append(this.$buttonDelete()),this._$buttons)},draw:function(){this.$cell.attr("colspan",this.ft.columns.visibleColspan)},_onEditClick:function(c){c.preventDefault();var d=c.data.self,e=a(this).closest("tr").data("__FooTableRow__");e instanceof b.Row&&d.ft.raise("edit.ft.editing",[e]).then(function(){d.callbacks.editRow.call(d.ft,e)})},_onDeleteClick:function(c){c.preventDefault();var d=c.data.self,e=a(this).closest("tr").data("__FooTableRow__");e instanceof b.Row&&d.ft.raise("delete.ft.editing",[e]).then(function(){d.callbacks.deleteRow.call(d.ft,e)})},_onViewClick:function(c){c.preventDefault();var d=c.data.self,e=a(this).closest("tr").data("__FooTableRow__");e instanceof b.Row&&d.ft.raise("view.ft.editing",[e]).then(function(){d.callbacks.viewRow.call(d.ft,e)})},_onAddClick:function(a){a.preventDefault();var b=a.data.self;b.ft.raise("add.ft.editing").then(function(){b.callbacks.addRow.call(b.ft)})},_onShowClick:function(a){a.preventDefault();var b=a.data.self;b.ft.raise("show.ft.editing").then(function(){b.ft.$el.addClass("footable-editing-show"),b.column.visible=!0,b.ft.draw()})},_onHideClick:function(a){a.preventDefault();var b=a.data.self;b.ft.raise("hide.ft.editing").then(function(){b.ft.$el.removeClass("footable-editing-show"),b.column.visible=!1,b.ft.draw()})}}),b.components.register("editing",b.Editing,850)}(jQuery,FooTable),function(a,b){b.EditingColumn=b.Column.extend({construct:function(a,b,c){this._super(a,c,"editing"),this.editing=b},$create:function(){(this.$el=!this.virtual&&b.is.jq(this.$el)?this.$el:a("<th/>",{"class":"footable-editing"})).html(this.title)},parser:function(c){if(b.is.string(c)&&(c=a(a.trim(c))),b.is.element(c)&&(c=a(c)),b.is.jq(c)){var d=c.prop("tagName").toLowerCase();return"td"==d||"th"==d?c.data("value")||c.contents():c}return null},createCell:function(c){var d=this.editing.$rowButtons(),e=a("<td/>").append(d);return b.is.jq(c.$el)&&(0===this.index?e.prependTo(c.$el):e.insertAfter(c.$el.children().eq(this.index-1))),new b.Cell(this.ft,c,this,e||e.html())}}),b.columns.register("editing",b.EditingColumn)}(jQuery,FooTable),function(a,b){b.Defaults.prototype.editing={enabled:!1,pageToNew:!0,position:"right",alwaysShow:!1,addRow:function(){},editRow:function(a){},deleteRow:function(a){},viewRow:function(a){},showText:'<span class="fooicon fooicon-pencil" aria-hidden="true"></span> Edit rows',hideText:"Cancel",addText:"New row",editText:'<span class="fooicon fooicon-pencil" aria-hidden="true"></span>',deleteText:'<span class="fooicon fooicon-trash" aria-hidden="true"></span>',viewText:'<span class="fooicon fooicon-stats" aria-hidden="true"></span>',allowAdd:!0,allowEdit:!0,allowDelete:!0,allowView:!1,column:{classes:"footable-editing",name:"editing",title:"",filterable:!1,sortable:!1}}}(jQuery,FooTable),function(a,b){b.is.defined(b.Paging)&&(b.Paging.prototype.unpaged=[],b.Paging.extend("predraw",function(){this.unpaged=this.ft.rows.array.slice(0),this._super()}))}(jQuery,FooTable),function(a,b){b.Row.prototype.add=function(c){c=b.is["boolean"](c)?c:!0;var d=this;return a.Deferred(function(a){var b=d.ft.rows.all.push(d)-1;return c?d.ft.draw().then(function(){a.resolve(b)}):void a.resolve(b)})},b.Row.prototype["delete"]=function(c){c=b.is["boolean"](c)?c:!0;var d=this;return a.Deferred(function(a){var e=d.ft.rows.all.indexOf(d);return b.is.number(e)&&e>=0&&e<d.ft.rows.all.length&&(d.ft.rows.all.splice(e,1),c)?d.ft.draw().then(function(){a.resolve(d)}):void a.resolve(d)})},b.is.defined(b.Paging)&&b.Row.extend("add",function(a){a=b.is["boolean"](a)?a:!0;var c,d=this,e=this._super(a),f=d.ft.use(b.Editing);return f&&f.pageToNew&&(c=d.ft.use(b.Paging))&&a?e.then(function(){var a=c.unpaged.indexOf(d),b=Math.ceil((a+1)/c.size);return c.current!==b?c["goto"](b):void 0}):e}),b.is.defined(b.Sorting)&&b.Row.extend("val",function(a,c){c=b.is["boolean"](c)?c:!0;var d=this._super(a);if(!b.is.hash(a))return d;var e=this;return c&&e.ft.draw().then(function(){var a,c=e.ft.use(b.Editing);if(b.is.defined(b.Paging)&&c&&c.pageToNew&&(a=e.ft.use(b.Paging))){var d=a.unpaged.indexOf(e),f=Math.ceil((d+1)/a.size);if(a.current!==f)return a["goto"](f)}}),d})}(jQuery,FooTable),function(a){a.Rows.prototype.add=function(b,c){var d=b;a.is.hash(b)&&(d=new FooTable.Row(this.ft,this.ft.columns.array,b)),d instanceof FooTable.Row&&d.add(c)},a.Rows.prototype.update=function(b,c,d){var e=this.ft.rows.all.length,f=b;a.is.number(b)&&b>=0&&e>b&&(f=this.ft.rows.all[b]),f instanceof FooTable.Row&&a.is.hash(c)&&f.val(c,d)},a.Rows.prototype["delete"]=function(b,c){var d=this.ft.rows.all.length,e=b;a.is.number(b)&&b>=0&&d>b&&(e=this.ft.rows.all[b]),e instanceof FooTable.Row&&e["delete"](c)}}(FooTable),function(a,b){var c=0,d=function(a){var b,c,d=2166136261;for(b=0,c=a.length;c>b;b++)d^=a.charCodeAt(b),d+=(d<<1)+(d<<4)+(d<<7)+(d<<8)+(d<<24);return d>>>0}(location.origin+location.pathname);b.State=b.Component.extend({construct:function(a){this._super(a,a.o.state.enabled),this._key="1",this.key=this._key+(b.is.string(a.o.state.key)?a.o.state.key:this._uid()),this.filtering=b.is["boolean"](a.o.state.filtering)?a.o.state.filtering:!0,this.paging=b.is["boolean"](a.o.state.paging)?a.o.state.paging:!0,this.sorting=b.is["boolean"](a.o.state.sorting)?a.o.state.sorting:!0},preinit:function(a){var c=this;this.ft.raise("preinit.ft.state",[a]).then(function(){c.enabled=b.is["boolean"](a.state)?a.state:c.enabled,c.enabled&&(c.key=c._key+(b.is.string(a.stateKey)?a.stateKey:c.key),c.filtering=b.is["boolean"](a.stateFiltering)?a.stateFiltering:c.filtering,c.paging=b.is["boolean"](a.statePaging)?a.statePaging:c.paging,c.sorting=b.is["boolean"](a.stateSorting)?a.stateSorting:c.sorting)},function(){c.enabled=!1})},get:function(a){return JSON.parse(localStorage.getItem(this.key+":"+a))},set:function(a,b){localStorage.setItem(this.key+":"+a,JSON.stringify(b))},remove:function(a){localStorage.removeItem(this.key+":"+a)},read:function(){this.ft.execute(!1,!0,"readState")},write:function(){this.ft.execute(!1,!0,"writeState")},clear:function(){this.ft.execute(!1,!0,"clearState")},_uid:function(){var a=this.ft.$el.attr("id");return d+"_"+(b.is.string(a)?a:++c)}}),b.components.register("state",b.State,700)}(jQuery,FooTable),function(a){a.Component.prototype.readState=function(){},a.Component.prototype.writeState=function(){},a.Component.prototype.clearState=function(){}}(FooTable),function(a){a.Defaults.prototype.state={enabled:!1,filtering:!0,paging:!0,sorting:!0,key:null}}(FooTable),function(a){a.Filtering&&(a.Filtering.prototype.readState=function(){if(this.ft.state.filtering){var b=this.ft.state.get("filtering");a.is.hash(b)&&!a.is.emptyArray(b.filters)&&(this.filters=this.ensure(b.filters))}},a.Filtering.prototype.writeState=function(){if(this.ft.state.filtering){var b=a.arr.map(this.filters,function(b){return{name:b.name,query:b.query instanceof a.Query?b.query.val():b.query,columns:a.arr.map(b.columns,function(a){return a.name}),hidden:b.hidden,space:b.space,connectors:b.connectors,ignoreCase:b.ignoreCase}});this.ft.state.set("filtering",{filters:b})}},a.Filtering.prototype.clearState=function(){this.ft.state.filtering&&this.ft.state.remove("filtering")})}(FooTable),function(a){a.Paging&&(a.Paging.prototype.readState=function(){if(this.ft.state.paging){var b=this.ft.state.get("paging");a.is.hash(b)&&(this.current=b.current,this.size=b.size)}},a.Paging.prototype.writeState=function(){this.ft.state.paging&&this.ft.state.set("paging",{current:this.current,size:this.size})},a.Paging.prototype.clearState=function(){this.ft.state.paging&&this.ft.state.remove("paging")})}(FooTable),function(a){a.Sorting&&(a.Sorting.prototype.readState=function(){if(this.ft.state.sorting){var b=this.ft.state.get("sorting");if(a.is.hash(b)){var c=this.ft.columns.get(b.column);c instanceof a.Column&&(this.column=c,this.column.direction=b.direction)}}},a.Sorting.prototype.writeState=function(){this.ft.state.sorting&&this.column instanceof a.Column&&this.ft.state.set("sorting",{column:this.column.name,direction:this.column.direction})},a.Sorting.prototype.clearState=function(){this.ft.state.sorting&&this.ft.state.remove("sorting")})}(FooTable),function(a){a.Table.extend("_construct",function(a){this.state=this.use(FooTable.State),this._super(a)}),a.Table.extend("_preinit",function(){var a=this;return a._super().then(function(){a.state.enabled&&a.state.read()})}),a.Table.extend("draw",function(){var a=this;return a._super().then(function(){a.state.enabled&&a.state.write()})})}(FooTable);
!function(){"use strict";if("querySelector"in document&&"addEventListener"in window){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(this))return null;do{if(t.matches(e))return t}while(null!==(t=t.parentElement));return null});var o=function(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})},e=document.querySelectorAll(".menu-toggle"),t=document.querySelectorAll("nav .dropdown-menu-toggle"),n=document.querySelectorAll("nav .main-nav ul a"),l=document.querySelector(".mobile-menu-control-wrapper"),r=document.body,c=document.documentElement,u=function(e){if(e&&r.classList.contains("dropdown-hover")){var t=e.querySelectorAll("li.menu-item-has-children");for(p=0;p<t.length;p++)t[p].querySelector(".dropdown-menu-toggle").removeAttribute("tabindex"),t[p].querySelector(".dropdown-menu-toggle").setAttribute("role","presentation"),t[p].querySelector(".dropdown-menu-toggle").removeAttribute("aria-expanded"),t[p].querySelector(".dropdown-menu-toggle").removeAttribute("aria-label")}},a=function(e){"false"!==e.getAttribute("aria-expanded")&&e.getAttribute("aria-expanded")?(e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label",generatepressMenu.openSubMenuLabel)):(e.setAttribute("aria-expanded","true"),e.setAttribute("aria-label",generatepressMenu.closeSubMenuLabel))},s=function(e,t){var n,s,o="";(o=(t=t||this).getAttribute("data-nav")?document.getElementById(t.getAttribute("data-nav")):document.getElementById(t.closest("nav").getAttribute("id")))&&(n=!1,t.closest(".mobile-menu-control-wrapper")&&(n=!0),s=o.getElementsByTagName("ul")[0],o.classList.contains("toggled")?(o.classList.remove("toggled"),c.classList.remove("mobile-menu-open"),s&&s.setAttribute("aria-hidden","true"),t.setAttribute("aria-expanded","false"),(n||l&&o.classList.contains("main-navigation"))&&l.classList.remove("toggled"),u(s)):(o.classList.add("toggled"),c.classList.add("mobile-menu-open"),s&&s.setAttribute("aria-hidden","false"),t.setAttribute("aria-expanded","true"),n?(l.classList.add("toggled"),l.querySelector(".search-item")&&l.querySelector(".search-item").classList.contains("active")&&l.querySelector(".search-item").click()):l&&o.classList.contains("main-navigation")&&l.classList.add("toggled"),function(e){if(e&&r.classList.contains("dropdown-hover")){var t=e.querySelectorAll("li.menu-item-has-children");for(p=0;p<t.length;p++)t[p].querySelector(".dropdown-menu-toggle").setAttribute("tabindex","0"),t[p].querySelector(".dropdown-menu-toggle").setAttribute("role","button"),t[p].querySelector(".dropdown-menu-toggle").setAttribute("aria-expanded","false"),t[p].querySelector(".dropdown-menu-toggle").setAttribute("aria-label",generatepressMenu.openSubMenuLabel)}}(s)))};for(p=0;p<e.length;p++)e[p].addEventListener("click",s,!1);var i=function(e,t){if(((t=t||this).closest("nav").classList.contains("toggled")||c.classList.contains("slide-opened"))&&!r.classList.contains("dropdown-click")){e.preventDefault();var n=t.closest("li");if(a(n.querySelector(".dropdown-menu-toggle")),t=n.querySelector(".sub-menu")?n.querySelector(".sub-menu"):n.querySelector(".children"),generatepressMenu.toggleOpenedSubMenus){var s=o(n);for(p=0;p<s.length;p++)s[p].classList.contains("sfHover")&&(s[p].classList.remove("sfHover"),s[p].querySelector(".toggled-on").classList.remove("toggled-on"),a(s[p].querySelector(".dropdown-menu-toggle")))}n.classList.toggle("sfHover"),t.classList.toggle("toggled-on")}e.stopPropagation()};for(p=0;p<t.length;p++)t[p].addEventListener("click",i,!1),t[p].addEventListener("keypress",function(e){"Enter"!==e.key&&" "!==e.key||i(e,this)},!1);var d=function(){var e=document.querySelectorAll(".toggled, .has-active-search");for(p=0;p<e.length;p++){var t=e[p].querySelector(".menu-toggle");if((t=l&&!t.closest("nav").classList.contains("mobile-menu-control-wrapper")?l.querySelector(".menu-toggle"):t)&&null===t.offsetParent){if(e[p].classList.contains("toggled")){var n,s,o,r=!1;if((r=e[p].classList.contains("mobile-menu-control-wrapper")?!0:r)||(s=(n=e[p].getElementsByTagName("ul")[0])?n.getElementsByTagName("li"):[],o=n?n.getElementsByTagName("ul"):[]),document.activeElement.blur(),e[p].classList.remove("toggled"),c.classList.remove("mobile-menu-open"),t.setAttribute("aria-expanded","false"),!r){for(var a=0;a<s.length;a++)s[a].classList.remove("sfHover");for(var i=0;i<o.length;i++)o[i].classList.remove("toggled-on");n&&n.removeAttribute("aria-hidden")}u(e[p])}l.querySelector(".search-item")&&l.querySelector(".search-item").classList.contains("active")&&l.querySelector(".search-item").click()}}};if(window.addEventListener("resize",d,!1),window.addEventListener("orientationchange",d,!1),r.classList.contains("dropdown-hover"))for(p=0;p<n.length;p++)n[p].addEventListener("click",function(e){var t;this.hostname!==window.location.hostname&&document.activeElement.blur(),(this.closest("nav").classList.contains("toggled")||c.classList.contains("slide-opened"))&&("#"!==(t=this.getAttribute("href"))&&""!==t||(e.preventDefault(),(e=this.closest("li")).classList.toggle("sfHover"),(e=e.querySelector(".sub-menu"))&&e.classList.toggle("toggled-on")))},!1);if(r.classList.contains("dropdown-hover")){for(var g=document.querySelectorAll(".menu-bar-items .menu-bar-item > a"),m=function(){if(!this.closest("nav").classList.contains("toggled")&&!this.closest("nav").classList.contains("slideout-navigation"))for(var e=this;-1===e.className.indexOf("main-nav");)"li"===e.tagName.toLowerCase()&&e.classList.toggle("sfHover"),e=e.parentElement},v=function(){if(!this.closest("nav").classList.contains("toggled")&&!this.closest("nav").classList.contains("slideout-navigation"))for(var e=this;-1===e.className.indexOf("menu-bar-items");)e.classList.contains("menu-bar-item")&&e.classList.toggle("sfHover"),e=e.parentElement},p=0;p<n.length;p++)n[p].addEventListener("focus",m),n[p].addEventListener("blur",m);for(p=0;p<g.length;p++)g[p].addEventListener("focus",v),g[p].addEventListener("blur",v)}if("ontouchend"in document.documentElement&&document.body.classList.contains("dropdown-hover")){var f=document.querySelectorAll(".sf-menu .menu-item-has-children");for(p=0;p<f.length;p++)f[p].addEventListener("touchend",function(e){if(!(this.closest("nav").classList.contains("toggled")||1!==e.touches.length&&0!==e.touches.length||(e.stopPropagation(),this.classList.contains("sfHover")))){e.target!==this&&e.target.parentNode!==this&&!e.target.parentNode.parentNode||e.preventDefault();var e=this.closest("li"),t=o(e);for(p=0;p<t.length;p++)t[p].classList.contains("sfHover")&&t[p].classList.remove("sfHover");this.classList.add("sfHover");var n,s=this;document.addEventListener("touchend",n=function(e){e.stopPropagation(),s.classList.remove("sfHover"),document.removeEventListener("touchend",n)})}})}}}();
!function(){"use strict";if("querySelector"in document&&"addEventListener"in window){var s=function(e,t){e.preventDefault(),t=t||this;var a=document.querySelectorAll(".navigation-search"),s=document.querySelectorAll(".search-item"),c=document.querySelectorAll('a[href], area[href], input:not([disabled]):not(.navigation-search), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),r="";t.closest(".mobile-menu-control-wrapper")&&(r=document.getElementById("site-navigation"));for(var i=0;i<a.length;i++)if(a[i].classList.contains("nav-search-active")){if(!a[i].closest("#sticky-placeholder")){a[i].classList.remove("nav-search-active");var n=document.querySelector(".has-active-search");n&&n.classList.remove("has-active-search");for(var o=0;o<s.length;o++){s[o].classList.remove("close-search"),s[o].classList.remove("active"),s[o].querySelector("a").setAttribute("aria-label",generatepressNavSearch.open);for(var l=0;l<c.length;l++)c[l].closest(".navigation-search")||c[l].closest(".search-item")||c[l].removeAttribute("tabindex")}document.activeElement.blur()}}else if(!a[i].closest("#sticky-placeholder")){n=a[i].closest(".toggled");n&&n.querySelector("button.menu-toggle").click(),r&&r.classList.add("has-active-search"),a[i].classList.add("nav-search-active");n=this.closest("nav");for(!n||(n=(n=n.classList.contains("mobile-menu-control-wrapper")?r:n).querySelector(".search-field"))&&n.focus(),o=0;o<s.length;o++){for(s[o].classList.add("active"),s[o].querySelector("a").setAttribute("aria-label",generatepressNavSearch.close),l=0;l<c.length;l++)c[l].closest(".navigation-search")||c[l].closest(".search-item")||c[l].setAttribute("tabindex","-1");s[o].classList.add("close-search")}}};if(document.body.classList.contains("nav-search-enabled")){for(var e=document.querySelectorAll(".search-item"),t=0;t<e.length;t++)e[t].addEventListener("click",s,!1);document.addEventListener("keydown",function(e){if(document.querySelector(".navigation-search.nav-search-active")&&"Escape"===e.key)for(var t=document.querySelectorAll(".search-item.active"),a=0;a<t.length;a++){s(e,t[a]);break}},!1)}}}();