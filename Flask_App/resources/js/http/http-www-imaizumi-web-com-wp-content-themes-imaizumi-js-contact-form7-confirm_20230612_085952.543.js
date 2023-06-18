/*
 * Copyright (c) 2012 takashi shinohara
 * this Library is licensed. http://aulta.jp/library/
 * http://aulta.jp/library/wordpress/contactForm7Confirm.html
 * last update: 2012-02-15, 0.0.1.
 */
jQuery(document).ready(function(){
	
	var option = {
		pages : [
			{
				'path' : ['/contact.html'],
				'button' : {
					'areaClassName' : 'submit-button',	//	<p class="submit-button">[submit "送信"]</p>
					'confirm' : '<input class="button-confirm" type="button" value="確認画面へ" />',	//	html
					'rewrite' : '<input class="button-rewrite" type="button" value="戻る" />&nbsp;'	//	html
				}
			}
		],
		validates : {
			required : {
				before : '',
				after : 'は必須です。'
			},
			email : {
				match : /^[A-Za-z0-9]+[\w-]+@[\w\.-]+\.\w{2,}$/,
				before : '',
				after : 'を確認してください。'
			},
			email_same : {
				before : '',
				after : 'が一致しません。'
			}
		}
	};
	
	var flg = false;
	for(var i in option.pages){
		var page = option.pages[i];
		for(var j in page.path){
			var path = page.path[j];
			if (path == document.location.pathname){
				flg = true;
				option.page = page;
				break;
			}
		}
	}
	if ( ! flg) return;

	jQuery('form.wpcf7-form')
	.each(function(){
		
		jQuery(this).find('.wpcf7-form-control-wrap')
		.each(function(){
			
			var child = jQuery(this).children(0);
			
			if (child.hasClass('wpcf7-text')){
				jQuery(this)
				.after(
					jQuery('<span>').addClass('wpcf7-form-control-wrap-confirm')
				);
				child
				.change(function(){
					jQuery(this).parent().next().text(
						jQuery(this).val()
					);
				})
				.change()
				;
			} else if (child.get(0).tagName.toLowerCase() == 'textarea'){
				jQuery(this)
				.after(
					jQuery('<span>').addClass('wpcf7-form-control-wrap-confirm')
				);
				child
				.change(function(){
					jQuery(this).parent().next().html(
						jQuery('<span>').text(jQuery(this).val()).html().replace(/\n/g, '<br />')
					);
				})
				.change()
				;
			} else if (child.hasClass('wpcf7-select')){
				jQuery(this)
				.after(
					jQuery('<span>').addClass('wpcf7-form-control-wrap-confirm')
				);
				child
				.change(function(){
					jQuery(this).parent().next().text(
						jQuery(this).find('option[value="' + jQuery(this).val() + '"]').text()
					);
				})
				.change()
				;
			} if (child.hasClass('wpcf7-radio')){
				jQuery(this)
				.after(
					jQuery('<span>').addClass('wpcf7-form-control-wrap-confirm')
				);
				child.find('input[type="radio"]')
				.change(function(){
					jQuery(this).parents('.wpcf7-form-control-wrap').find('input[type="radio"]')
					.each(function(){
						if (this.checked){
							jQuery(this).parents('.wpcf7-form-control-wrap').next().text(
								jQuery(this).parent().text()
							);
						}
					});
				})
				.change()
				;
			} if (child.hasClass('wpcf7-checkbox')){
				jQuery(this)
				.after(
					jQuery('<span>').addClass('wpcf7-form-control-wrap-confirm')
				);
				child.find('input[type="checkbox"]')
				.change(function(){
					var a = [];
					jQuery(this).parents('.wpcf7-form-control-wrap').find('input[type="checkbox"]')
					.each(function(){
						if (this.checked){
							a.push(jQuery('<span>').text(jQuery(this).parent().text()).html());
						}
					});
					jQuery(this).parents('.wpcf7-form-control-wrap').next().html(
						a.join('<br />')
					);
				})
				.change()
				;
			}
			
		});
		
		jQuery(this)
		.prepend(
			jQuery('<ul>').addClass('error-messages').hide()
		);
		
		jQuery(this).find('.' + option.page.button.areaClassName)
		.addClass('buttons-area');
		
		jQuery(this).find('.buttons-area')
		.prepend(
			option.page.button.rewrite
		)
		.after(
			jQuery('<span>')
			.addClass('buttons-area-confirm')
			.html(option.page.button.confirm)
		);
		
		jQuery(this).addClass('wpcf7-form-mode-edit');
		jQuery(this).find('.wpcf7-form-control-wrap-confirm').hide();
		jQuery(this).find('.wpcf7-form-control-wrap').show();
		jQuery(this).find('.buttons-area').hide();
		jQuery(this).find('.buttons-area-confirm').show();
		
		jQuery(this).submit(function(){
			jQuery(this).find('.buttons-area input[type="submit"]').hide();
		});
		
		jQuery(this).find('.buttons-area .button-rewrite')
		.click(function(){
			var form = jQuery(this).parents('form.wpcf7-form');
			form.addClass('wpcf7-form-mode-edit').removeClass('wpcf7-form-mode-confirm');
			form.find('.buttons-area input[type="submit"]').show();
			form.find('.wpcf7-response-output').empty().removeClass('wpcf7-mail-sent-ok');
			form.find('.wpcf7-form-control-wrap-confirm').hide();
			form.find('.wpcf7-form-control-wrap').show();
			form.find('.buttons-area').hide();
			form.find('.buttons-area-confirm').show();
			jQuery('html,body').animate({ scrollTop: form.offset().top - 30}, 'slow', null);
			return false;
		})
		;
		
		jQuery(this).find('.buttons-area-confirm .button-confirm')
		.click(function(){
			var form = jQuery(this).parents('form.wpcf7-form')
				, error = form.find('ul.error-messages');
			error.empty();
			form.find('dd').removeClass('error');
			form.find('.wpcf7-form-control-wrap')
			.each(function(){
				var child = jQuery(this).children(0)
					, title = child.parent().parent().parent().find('span.title:first-child').text();
				if (title.length == 0){
					title = "タイトル";
				}
				if (child.hasClass('wpcf7-text')){
					if (child.hasClass('wpcf7-validates-as-required') && child.val().length == 0){
						error.append(jQuery('<li>').text(option.validates.required.before + title.replace('必須', '') + option.validates.required.after));
						jQuery(this).parents('dd').addClass('error');
					} else if (child.hasClass('wpcf7-validates-as-email') && ( ! child.val().match(option.validates.email.match))){
						error.append(jQuery('<li>').text(option.validates.email.before + title.replace('必須', '') + option.validates.email.after));
						jQuery(this).parents('dd').addClass('error');
					} else if (child.hasClass('email-same-check1-reinput') && ( child.val() != jQuery("input.email-same-check1").val() )){
						/*
						alert(child.val());
						alert(jQuery("input.email-same-check1").val());
						*/
						error.append(jQuery('<li>').text(option.validates.email_same.before + title.replace('必須', '') + option.validates.email_same.after));
						jQuery(this).parents('dd').addClass('error');
					}
				} else if (child.get(0).tagName.toLowerCase() == 'textarea'){
					if (child.hasClass('wpcf7-validates-as-required') && child.val().length == 0){
						error.append(jQuery('<li>').text(option.validates.required.before + title.replace('必須', '') + option.validates.required.after));
						jQuery(this).parents('dd').addClass('error');
					}
				} else if (child.hasClass('wpcf7-select')){
					if (child.hasClass('wpcf7-validates-as-required') && (( ! child.val()) || child.val().length == 0 || child.val() == '---')){
						error.append(jQuery('<li>').text(option.validates.required.before + title.replace('必須', '') + option.validates.required.after));
						jQuery(this).parents('dd').addClass('error');
					}
				} if (child.hasClass('wpcf7-radio')){
					if (child.hasClass('wpcf7-validates-as-required')){
						var flg = false;
						jQuery(this).find('input[type="radio"]')
						.each(function(){
							if (this.checked){
								flg = true;
								return;
							}
						});
						if ( ! flg){
							error.append(jQuery('<li>').text(option.validates.required.before + title.replace('必須', '') + option.validates.required.after));
							jQuery(this).parents('dd').addClass('error');
						}
					}
				} if (child.hasClass('wpcf7-checkbox')){
					if (child.hasClass('wpcf7-validates-as-required')){
						var flg = false;
						jQuery(this).find('input[type="checkbox"]')
						.each(function(){
							if (this.checked){
								flg = true;
								return;
							}
						});
						if ( ! flg){
							error.append(jQuery('<li>').text(option.validates.required.before + title.replace('必須', '') + option.validates.required.after));
							jQuery(this).parents('dd').addClass('error');
						}
					}
				}
			});
			if (error.children().length > 0){
				error.show();
				jQuery("ul.error-messages").css({ border:"1px solid red" });
				jQuery("input#reset").css({ display:"inline" });
			} else {
				form.addClass('wpcf7-form-mode-confirm').removeClass('wpcf7-form-mode-edit');
				form.find('.wpcf7-form-control-wrap').hide();
				form.find('.wpcf7-form-control-wrap-confirm').show();
				form.find('.buttons-area-confirm').hide();
				form.find('.buttons-area').show();
				jQuery("ul.error-messages").css({ border:"none" });
				jQuery("input#reset").css({ display:"none" });
			}
			jQuery('html,body').animate({ scrollTop: form.offset().top - 30}, 'slow', null);
			return false;
		});
		
	});
	
});

