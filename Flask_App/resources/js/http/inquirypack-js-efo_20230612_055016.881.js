// JavaScript Document

(function($){
	$.entryform = {
		checkval: function(options){
			var c = $.extend({
				target : 'null',
				error  : 'error'
			}, options);
			
			$('.' + c.target+ ' input:text, .' + c.target+ ' textarea').blur(function(){
				//初期化
				$(this).each(function(){
					$(this).parent().removeClass('false true '+c.error);
					$(this).parent().find('strong').remove();
				});
				
				//正規表現のチェック
				if($(this).val() == ''){
					$(this).addClass(c.error);
					$(this).parent().addClass('false');
					$(this).parent().append('<strong class="error"><span class="icon">エラー</span>必須項目です。</strong>');
				} else {
					
					/* 必須項目
					 null => 必須
					 alp  => 半角英字
					 num  => 半角数字
					 han  => 半角英数字
					 kana => 全角カタカナ
					 mail => メールアドレス
					*/
					
					if($(this).hasClass('mail')){
						if($(this).val().match(/^[A-Za-z0-9]+[\w-]+@[\w\.-]+\.\w{2,}$/)){
							$(this).parent().addClass('true');
							$(this).removeClass(c.error);
						} else {
							$(this).parent().append('<strong class="error"><span class="icon">エラー</span>有効なメールアドレスを入力ください。</strong>');
							$(this).parent().addClass('false');
							$(this).addClass(c.error);
						}
						
						
					} else if($(this).hasClass('num')){
						if($(this).val().match(/^[0-9-]+$/)){
							$(this).parent().addClass('true');
							$(this).removeClass(c.error);
						} else {
							$(this).parent().append('<strong class="error"><span class="icon">エラー</span>半角数字で入力ください。</strong>');
							$(this).parent().addClass('false');
							$(this).addClass(c.error);
						}
					} else if($(this).hasClass('url')){
						if($(this).val().match(/^(https?|ftp)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)$/)){
							$(this).parent().addClass('true');
						} else {
							$(this).parent().append('<strong class="error"><span class="icon">エラー</span>有効なURLを入力してください。</strong>');
							$(this).parent().addClass('false');
						}
					} else if($(this).hasClass('alp')){
						if($(this).val().match(/^[a-zA-Z]+$/)){
							$(this).parent().addClass('true');
							$(this).removeClass(c.error);
						} else {
							$(this).parent().append('<strong class="error"><span class="icon">エラー</span>半角英字で入力ください。</strong>');
							$(this).parent().addClass('false');
							$(this).addClass(c.error);
						}
					} else if($(this).hasClass('han')){
						if($(this).val().match(/^[a-zA-Z0-9]+$/)){
							$(this).parent().addClass('true');
							$(this).removeClass(c.error);
						} else {
							$(this).parent().append('<strong class="error"><span class="icon">エラー</span>半角英数字で入力ください。</strong>');
							$(this).parent().addClass('false');
							$(this).addClass(c.error);
						}
					} else if($(this).hasClass('kana')){
						if($(this).val().match(/^[ア-ン]+$/)){
							$(this).parent().addClass('true');
							$(this).removeClass(c.error);
						} else {
							$(this).parent().append('<strong class="error"><span class="icon">エラー</span>全角カタカナで入力ください。</strong>');
							$(this).parent().addClass('false');
							$(this).addClass(c.error);
						}
					} else {
						$(this).parent().addClass('true');
						$(this).removeClass(c.error);
					}
				}
			});
		},
		formtips: function(input,options){
			var c = $.extend({
				tippedClass : 'tipped'
			}, options);
			
			$(input).each(function(){
				var $target = $(this);
				var ThisTitle = $target.attr('title');
				
				$target.bind('focus', function() {
					if($target.val() == ThisTitle) {
						$(this).val('').removeClass(c.tippedClass);
					}
					return true;
				});
				
				$target.bind('blur', function() {
					if($target.val() == '') {
						$target.val(ThisTitle).addClass(c.tippedClass);
					}
					return true;
				});
				
				if($target.val() == '' || $target.val() == $target.attr('title')) {
					$target.val(ThisTitle).addClass(c.tippedClass);
				} else {
					$target.removeClass(c.tippedClass);
				}
				
				$('input[name=conf],input[name=sumit],input[name=back],input[type=submit]').click(function(){
					if($target.val() == ThisTitle) {
						$target.val('').removeClass(c.tippedClass);
					}
				});
			});
		},
		resizer: function(options){
			var c = $.extend({
				target        : 'textarea',
				textarea      : '',
				staticOffset  : '',
				iLastMousePos : 0,
				iMin          : 32
			}, options);
			
			
			$(c.target + ':not(.processed)').each(function(){
				c.textarea = $(this).addClass('processed')
				c.staticOffset = null;
				$(this).wrap('<div class="resizable-textarea"></div>').parent().append($('<div class="grippie"></div>').bind("mousedown",{el: this} , startDrag));
				$('div.grippie').css('width',$(this).outerWidth());
				//var $grippie = $('div.grippie', $(this).parent())[0];
				//grippie.style.marginRight = (grippie.offsetWidth - $(this)[0].offsetWidth) +'px';
				
			});
			
			function startDrag(e) {
				c.textarea = $(e.data.el);
				c.textarea.blur();
				c.iLastMousePos = mousePosition(e).y;
				c.staticOffset = c.textarea.height() - c.iLastMousePos;
				c.textarea.css('opacity', 0.25);
				$(document).mousemove(performDrag).mouseup(endDrag);
				return false;
			}

			function performDrag(e) {
				var iThisMousePos = mousePosition(e).y;
				var iMousePos = c.staticOffset + iThisMousePos;
				if(c.iLastMousePos >= (iThisMousePos)){
					iMousePos -= 5;
				}
				c.iLastMousePos = iThisMousePos;
				iMousePos = Math.max(c.iMin, iMousePos);
				c.textarea.height(iMousePos + 'px');
				if (iMousePos < c.iMin) {
					endDrag(e);
				}
				return false;
			}

			function endDrag(e) {
				$(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
				c.textarea.css('opacity', 1);
				c.textarea.focus();
				c.textarea = null;
				c.staticOffset = null;
				c.iLastMousePos = 0;
			}

			function mousePosition(e) {
				return { x: e.clientX + document.documentElement.scrollLeft, y: e.clientY + document.documentElement.scrollTop };
			};
		}
	};
	
	
	$(function(){
		$.entryform.checkval();
		$.entryform.formtips('form input:text');
		//$.entryform.resizer();
		
	});
})(jQuery);