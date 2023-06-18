/* 
 *
 * library.js v1.0
 * 
 * jQueryとEasingとhashchangeとCookieとMouseWheelが必要です。
 * 
 */

(function($) {
	$.library = {
		analysis: function(path){
			var self = this;
			this.originalPath = path;
			this.absolutePath = (function(){
				var e = document.createElement('span');
				e.innerHTML = '<a href="' + path + '" />';
				return e.firstChild.href;
			})();
			
			var fields = {'schema' : 2, 'username' : 5, 'password' : 6, 'host' : 7, 'path' : 9, 'query' : 10, 'fragment' : 11};
			var r = /^((\w+):)?(\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/.exec(this.absolutePath);
			for (var field in fields) {
				this[field] = r[fields[field]];
			}
			this.querys = {};
			if(this.query){
				$.each(self.query.split('&'), function(){
					var a = this.split('=');
					if (a.length == 2) self.querys[a[0]] = a[1];
				});
			}
		},
		browser: function(){
			var target = '';
			var agent = navigator.userAgent;
			
			if(agent.search(/iPhone/) != -1){
				target = 'iphone';
			}else if(agent.search(/Android/) != -1){
				target = 'android';
			}else if(agent.search(/iPad/) != -1){
				target = 'ipad';
			}else if(agent.search(/iPod/) != -1){
				target = 'ipod';
			}else{
				if(!$.support.checkOn && $.support.checkClone){
					target = 'webkit';
				}else if($.support.checkOn && $.support.noCloneEvent && window.globalStorage){
					target = 'firefox';
				}else if($.support.checkOn && $.support.noCloneEvente && !window.globalStorage){
					target = 'opera';
				}else if(!$.support.noCloneEvent && $.support.opacity){
					target = 'ie9';
				}else if(!$.support.opacity){
					if(!$.support.style){
						if(typeof document.documentElement.style.maxHeight != "undefined") {
							target = 'ie7';
						}else{
							target = 'ie6';
						}
					}else{
						target = 'ie8';
					}
				}else{
					target = false;
				}
			}
			return target;
		},
		flashplayer: function(){
			var isFlashInstalled = function(){
				if(navigator.plugins['Shockwave Flash']){
					return true;
				}
				try{
					new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
					return true;
				}catch(e){
					return false;
				}
			}();
			return isFlashInstalled;
		},
		ie6update: function(options){
			var c = $.extend({
				duration : 800,
				easing   : 'easeOutQuint',
				idname   : 'Ie6Update'
			}, options);
			var agent = $.library.browser();
			var output = '';
			
			if(agent == 'ie6'){
				output = '<div id="Ie6Update"><div class="bg"></div><p>現在、ご利用のブラウザは[<strong>Internet Explorer6</strong>]です。<br />快適なインターネットライフを実現するには、<a href="http://windows.microsoft.com/ja-JP/internet-explorer/downloads/ie-8" target="_blank">こちら</a>から最新版をダウンロードしてください。</p></div>';
				$('body').prepend(output);
				var workingHeight = $('#Ie6Update').height();
				$('#Ie6Update').find('div.bg').height($('#Ie6Update').outerHeight({margin:true})).css('opacity','0.7');
				$('#Ie6Update').height(0);
				setTimeout(function(){
					$('#Ie6Update').stop(false,true).animate({'height':workingHeight},{duration:c.duration,easing:c.easing});
				},500);
				
				$('#Ie6Update').click(function(){
					window.open($(this).find('a').attr('href'),'_blank');
					$('#Ie6Update').stop(false,true).animate({'height':'0'},{duration:c.duration,easing:c.easing,complete:function(){
						$('#Ie6Update').hide();
					}});
					return false;
				});
			}
		},
		rollover: function(options){
			var c = $.extend({
				hoverSelector : 'img.rover, input.rover, .all-rover img',
				groupSelector : '.group-rover',
				activeclass   : 'active',
				postfix       : '_on'
			}, options);
			
			var rolloverImgs = $(c.hoverSelector).filter(isNotCurrent);
			
			rolloverImgs.each(function(){
				this.originalSrc = $(this).attr('src');
				this.rolloverSrc = this.originalSrc.replace(new RegExp('('+c.postfix+')?(\.gif|\.jpg|\.png)$'), c.postfix+"$2");
				this.rolloverImg = new Image;
				this.rolloverImg.src = this.rolloverSrc;
			});
			
			var groupingImgs = $(c.groupSelector).find('img').filter(isRolloverImg);
			
			rolloverImgs.not(groupingImgs).hover(function(){
				if(!$(this).hasClass(c.activeclass)){$(this).attr('src',this.rolloverSrc);}
			},function(){
				if(!$(this).hasClass(c.activeclass)){$(this).attr('src',this.originalSrc);}
			});
			
			rolloverImgs.not(groupingImgs).click(function(){
				var $this_target = $(this);
				$this_target.attr('src',$this_target.attr('src').replace(/_on/i,""));
			});
			
			$(c.groupSelector).hover(function(){
				$(this).find('img').filter(isRolloverImg).each(function(){
					if(!$(this).hasClass(c.activeclass)){$(this).attr('src',this.rolloverSrc);}
				});
			},function(){
				$(this).find('img').filter(isRolloverImg).each(function(){
					if(!$(this).hasClass(c.activeclass)){$(this).attr('src',this.originalSrc);}
				});
			});
			
			$(c.groupSelector).click(function(){
				$(this).find('img.rover').each(function(){
					$(this).attr('src',$(this).attr('src').replace(/_on/i,""));
				});
			});
			
			function isNotCurrent(i){return Boolean(!this.currentSrc);}
			function isRolloverImg(i){return Boolean(this.rolloverSrc);}
		},
		nav: function(target,options){
			var c = $.extend({
				type        : 'swap', //swap or opacity
				activeclass : 'active',
				postfix     : '_on',
				duration    : 500,
				easing      : 'easeOutBack'
			}, options);
			
			$(target).each(function(){
				var $Clone = '';
				$(this).parent().css({'width':$(this).width(),'height':$(this).height(),'overflow':'hidden','display':'block','position':'relative'});
				$Clone = $(this).clone().addClass('clone');
				$(this).css({'position':'absolute','top':'0','left':'0'}).addClass('original');
				var dot = $Clone.attr('src').lastIndexOf('.');
				var imgsrc_ro = $Clone.attr('src').substr(0, dot) + '_on' + $Clone.attr('src').substr(dot, 4);
				$Clone.attr('src',imgsrc_ro).addClass(c.addclass);
				if(c.type == 'swap'){
					$Clone.css({'position':'absolute','top':$(this).height(),'left':'0'});
				}else if(c.type == 'opacity'){
					$Clone.css({'position':'absolute','top':'0','left':'0','opacity':'0'});
				}
				$(this).after($Clone);
			});
			
			$(target).parent().hover(function(){
				if(!$(this).find('img').hasClass(c.activeclass)){
					if(c.type == 'swap'){
						$(this).find('.original').stop(false,true).animate({'top':'-'+$(this).height()},{duration:c.duration,easing:c.easing});
						$(this).find('.clone').stop(false,true).animate({'top':'0'},{duration:c.duration,easing:c.easing});
					}else if(c.type == 'opacity'){
						$(this).find('img.clone').stop(false,true).animate({'opacity':'1'},{duration:c.duration,easing:'linear'});
					}
				}
			},function(){
				if(!$(this).find('img').hasClass(c.activeclass)){
					if(c.type == 'swap'){
						$(this).find('.original').stop(false,true).animate({'top':'0'},{duration:c.duration,easing:c.easing});
						$(this).find('.clone').stop(false,true).animate({'top':$(this).height()},{duration:c.duration,easing:c.easing});
					}else if(c.type == 'opacity'){
						$(this).find('img.clone').stop(false,true).animate({'opacity':'0'},{duration:c.duration,easing:'linear'});
					}
				}
			});
			
			$(target).parent().click(function(){
				if(c.type == 'swap'){
					$(this).find('.original').css({'top':'0'});
					$(this).find('.clone').css({'top':$(this).height()});
				}else if(c.type == 'opacity'){
					$(this).find('.clone').css({'opacity':'0'});
				}
			});
			
			
		},
		active: function(id,options){
			var c = $.extend({
				type     : 'img',
				addclass : 'active',
				postfix  : '_on'
			}, options);
			if(id != '' && c.type == 'img'){
				var dot = $("img#"+id).attr('src').lastIndexOf('.');
				var imgsrc_ro = $("img#"+id).attr('src').substr(0, dot) + c.postfix + $("img#"+id).attr('src').substr(dot, 4);
				$("img#"+id).attr('src',imgsrc_ro).addClass(c.addclass);
			}else if(id != '' && c.type == 'text'){
				$("#"+id).addClass(c.addclass);
			}else if(id != '' && c.type == 'swap'){
				$("#"+id).parent().each(function(){
					$(this).find('img').css({'top':0}).addClass(c.addclass);
				});
			}else if(id != '' && c.type == 'opacity'){
				$("#"+id+'.clone').css({'opacity':'1'}).addClass(c.addclass);
			}
		},
		scroll: function(options){
			var scroller = (function() {
				var c = $.extend({
					easing:100,
					step:30,
					fps:60,
					fragment:''
				}, options);
				c.ms = Math.floor(1000/c.fps);
				var timerId;
				var param = {
					stepCount:0,
					startY:0,
					endY:0,
					lastY:0
				};
				function move() {
					if(param.stepCount == c.step){
						//setFragment(param.hrefdata.absolutePath);
						window.scrollTo(getCurrentX(), param.endY);
					}else if (param.lastY == getCurrentY()){
						param.stepCount++;
						window.scrollTo(getCurrentX(), getEasingY());
						param.lastY = getEasingY();
						timerId = setTimeout(move, c.ms); 
					}else{
						if(getCurrentY()+getViewportHeight() == getDocumentHeight()){
							//setFragment(param.hrefdata.absolutePath);
						}
					}
				}
				function setFragment(path){
					location.href = path
				}
				function getCurrentY(){
					return document.body.scrollTop  || document.documentElement.scrollTop;
				}
				function getCurrentX(){
					return document.body.scrollLeft  || document.documentElement.scrollLeft;
				}
				function getDocumentHeight(){
					return document.documentElement.scrollHeight || document.body.scrollHeight;
				}
				function getViewportHeight(){
					return (!$.browser.safari && !$.browser.opera) ? document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight : window.innerHeight;
				}
				function getEasingY(){
					return Math.floor(getEasing(param.startY, param.endY, param.stepCount, c.step, c.easing));
				}
				function getEasing(start, end, stepCount, step, easing){
					var s = stepCount / step;
					return (end - start) * (s + easing / (100 * Math.PI) * Math.sin(Math.PI * s)) + start;
				}
				return {
					set: function(options) {
						this.stop();
						if (options.startY == undefined) options.startY = getCurrentY();
						param = $.extend(param, options);
						param.lastY = param.startY;
						timerId = setTimeout(move, c.ms); 
					},
					stop: function(){
						clearTimeout(timerId);
						param.stepCount = 0;
					}
				};
			})();
			
			var target = '';
			var agent = navigator.userAgent;
			if(agent.search(/iPhone/) != -1){
				target = 'iphone';
			}else if(agent.search(/Android/) != -1){
				target = 'android';
			}else if(agent.search(/iPad/) != -1){
				target = 'ipad';
			}else if(agent.search(/iPod/) != -1){
				target = 'ipod';
			}
			
			if((target=='iphone') || (target=='ipad') || (target=='ipod') || (target=='android')){
				$('a[href^=#], area[href^=#]').not('a[href=#], area[href=#]').each(function(i){
					this.hrefdata = new $.library.analysis(this.getAttribute('href'));
				}).click(function(){
					var target = $('#'+this.hrefdata.fragment);
					if(target.length == 0){ target = $('a[name='+this.hrefdata.fragment+']');}
					if(target.length){
						$('html,body').stop(false,true).animate({scrollTop:target.offset().top},{duration:500,easing:"easeOutExpo"});
						return false;
					}
				});
			}else{
				$('a[href^=#], area[href^=#]').not('a[href=#], area[href=#]').each(function(i){
					this.hrefdata = new $.library.analysis(this.getAttribute('href'));
				}).click(function(){
					var target = $('#'+this.hrefdata.fragment);
					if (target.length == 0) target = $('a[name='+this.hrefdata.fragment+']');
					if (target.length) {
						scroller.set({
							endY: target.offset().top,
							hrefdata: this.hrefdata
						});
						return false;
					}
				});
			}
			$("a[name]").each(function(i){
				if(($(this).html() == '') && ($(this).text() == '') && ($(this).attr('id') != '')){
					$(this).css({'height':'0','width':'0','display':'block','overflow':'hidden'});
				}
			});
		},
		windowscroll:function(options){
			var c = $.extend({
				scrolly  : 0,
				duration : 500,
				speed    : 300,
				easing   : 'easeOutExpo'
			}, options);
			var scrolly = 0;
			$('#Container').mousewheel(function(event,mov){
				if(mov > 0){
					scrolly = $('html,body').scrollTop() - c.speed;
				}else if(mov < 0){
					scrolly = $('html').scrollTop() + c.speed;
				}
				$('html,body').stop(false,true).animate({scrollTop: scrolly},{duration:c.duration,easing:c.easing});
				return false;
			});
		},
		blank: function(options) {
			var c = $.extend({
				externalClass : 'wind_blank',
				addIconSrc    : ''
			}, options);
			var url = new $.library.analysis(location.href);
			var e = $('a[href^="http://"]').not('a[href^="' + url.schema + '://' + url.host + '/' + '"]');
			if(c.addIconSrc){
				e.not(':has(img)').after($('<img src="'+c.addIconSrc+'" class="externalIcon" />'));
			}
			e.attr('target','_blank');
			e.addClass(c.externalClass);
		},
		inputfocus: function(target,options) {
			var c = $.extend({
				usuallyClass : 'input-usually',
				focusClass   : 'input-focus'
			}, options);
			$(target).addClass(c.usuallyClass);
			$('.'+c.usuallyClass).focus(function(){
				$(this).addClass(c.focusClass);
			});
			$('.'+c.usuallyClass).blur(function(){
				if($(this).find(c.focusClass)){
					$(this).removeClass(c.focusClass);
				}
			});
		},
		heights: function(target,options){
			var c = $.extend({
				row    : 0
			}, options);
			
			if(c.row > 0){
				var sets = [], temp = [];
				$(target).each(function(i){
					
					temp.push(this);
					if(i % c.row == (c.row-1)){
						sets.push(temp);
						temp = [];
					}
				});
				if(temp.length){
					sets.push(temp);
				}
				$.each(sets, function(){
					$.library.flatheights(this);
				});
			}else{
				$.library.flatheights(target);
			}
		},
		flatheights: function(target,options){
			var c = $.extend({
				handlers : [],
				interval : 1000,
				currentSize: 0
			}, options);
			
			
			var ins = $('<ins>M</ins>').css({
				display: 'block',
				visibility: 'hidden',
				position: 'absolute',
				padding: '0',
				top: '0'
			});
			
			var isChanged = function() {
				ins.appendTo('body');
				var size = ins[0].offsetHeight;
				ins.remove();
				if (c.currentSize == size) return false;
				c.currentSize = size;
				return true;
			};
			
			$(isChanged);
			
			var observer = function() {
				if (!isChanged()) return;
				$.each(c.handlers, function(i, handler) {
					handler();
				});
			};
			
			c.addHandler = function(func) {
				c.handlers.push(func);
				if (c.handlers.length == 1) {
					setInterval(observer, c.interval);
				}
			};
			
			var sets = [];
			
			function flat(set){
				var maxHeight = 0;
				$(set).each(function(){
					var height = $(this).height();
					if (height > maxHeight) maxHeight = height;
				});
				$(set).css('height', maxHeight + 'px');
			}
			
			if($(target).length > 1){
				flat($(target));
				sets.push($(target));
			}
			
			c.addHandler(function(){
				$.each(sets, function(){
					$(this).height('auto');
					flat($(this));
				});
			});
		},
		boxhover: function(target,options){
			var c = $.extend({
				addclass  : 'hover',
				linkclass : 'location'
			}, options);
			
			if(target != ''){
				$(target).each(function(){
					$(this).removeClass(c.addclass);
					$(this).css('cursor','pointer');
					if($(this).find('a').hasClass(c.linkclass)){
						var Url = $(this).find('a.'+c.linkclass).attr('href');
						$(this).hover(function(){
							$(this).addClass(c.addclass);
						},function(){
							$(this).removeClass(c.addclass);
						});
						$(this).click(function(){
							if($(this).find('a.'+c.linkclass).attr('target') == '_blank'){
								window.open(Url,'_blank');
							}else{
								location.href = Url;
							}
							return false;
						});
					}
				});
			}
		},
		fontsize: function(Change,options){
			var c = $.extend({
				target : '#Container',
				history : $.cookie('FontSize'),
				type : 'img',
				addClass : 'active'
			},options);
			
			if(c.history){
				$(c.target).addClass(c.history);
			}else{
				$(c.target).addClass('FontM');
				c.history="FontM";
			}
			BtnChange(c.history);
			$(Change).click(function(){
				var SetFontSize = $(this).attr('id');
				$.cookie('FontSize',SetFontSize,{expires:30,path:'/'});
				$(c.target).attr('class',SetFontSize);
				
				if(c.type == 'img'){
					$(Change).find('img').each(function(){
						$(this).attr('src',$(this).attr('src').replace(/_on/i,"")).removeClass(c.addClass);
					});
				}else{
					$(Change).removeClass(c.addClass);
				}
				
				$(this).removeClass(c.addClass);
				BtnChange(SetFontSize);
				return false;
			});
			
			function BtnChange(Id){
				if(c.type == 'img'){
					var $ActiveBtn = $(Change).filter('#'+Id).find('img');
					var dot = $ActiveBtn.attr('src').lastIndexOf('.');
					var imgsrc_ro = $ActiveBtn.attr('src').substr(0,dot)+'_on'+$ActiveBtn.attr('src').substr(dot,4);
					$ActiveBtn.attr('src',imgsrc_ro).addClass(c.addClass);
				}else{
					$(Change).filter('#'+Id).addClass(c.addClass);
				}
			}
		}
	};
	
	$(document).ready(function(){
		var agent = $.library.browser();
		if((agent=='iphone') || (agent=='ipad') || (agent=='ipod') || (agent=='android')){
			setTimeout(scrollTo,100,0,1);
		}else{
			$.library.ie6update();
			$.library.rollover();
			$.library.inputfocus('input[type=text],input[type=password],textarea');
		}
		
		//$("html").niceScroll({cursorborder:'0'});
		$.library.scroll();
		//$.library.windowscroll();
		$.library.blank();
	});
})(jQuery);


var UA = 'UA-30306116-1';
if(UA){
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount',UA]);
	_gaq.push(['_trackPageview']);

	(function(){
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
}