$.extend({
	/**
	 * form validation
	 * @param string id : from id
	 * @param string news : The new message displays the ID address.
	 * @param bool successNews : Is the success message displayed? true: yes, false: no, default false
	 * @param string loading : Replace contents in button download process
	 * @param bool popup : Is the message displayed in the pop-up box? true: yes, false: no, default false
	 * @param function done : Post successful operation
	 */
	valid: function (options) {
		var defaults = {
			id: '',
			url: '',
			news: '',
			successNews: false,
			loading: '',
			popup: false,
			done: function (result) {
			},
			success: function (result) {
			},
			error: function () {
			}
		};

		options = $.extend({}, defaults, options);

		if (!options.id || !options.url) {
			return false;
		}

		var success = options.success,
			error = options.error,
			data;

		options.headers = options.headers || {};
		data = options.data || false;

		delete options.success;
		delete options.error;

		$('#' + options.id).submit(function (event) {
			var form = $(this), btnHtml, len = 0, news, message = $('#J_MessageModal');

			news = options.news ? $(options.news) : form;

			if (form[0].checkValidity() === false) {
				event.preventDefault();
				event.stopPropagation();
				form.addClass('was-validated')
			} else {
				options.data = data || form.serialize();

				if (options.loading) {
					var btn = form.find('button[type=submit]'),
						len = btn.length;
					if (len) {
						btnHtml = btn.html();
						btn.attr('disabled', true).html(options.loading);
					}
				}

				$.ajax($.extend({
					type: 'get'
					, dataType: 'json'
					, success: function (result) {
						if ('undefined' != typeof result.msg && result.msg != '') {
							if (result.error || !options.successNews) {
								if (options.popup) {
									var str = result.error ? 'alert-danger' : 'alert-success';
									str = '<div class="alert ' + str + '" role="alert">' + result.msg.join("<br>") + '</div>';
									message.find('.modal-body').prepend(str)
									message.modal('show');
								} else {
									var str = result.error ? 'alert-danger' : 'alert-success';
									str = '<div class="alert ' + str + '" role="alert">' + result.msg.join("<br>")
										+ '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
										+ '</div>';

									news.children('.alert').remove()
									news.prepend(str)
								}
							}
						}

						if (len) {
							btn.attr('disabled', false).html(btnHtml);
						}

						if (!result.error) {
							typeof options.done === 'function' && options.done(result);
						}

						typeof success === 'function' && success(result);
					}
					, error: function (e, code) {
						if (options.popup) {
							var str = '<div class="alert alert-danger" role="alert">Request error, please contact us!</div>';
							message.find('.modal-body').prepend(str)
							message.modal('show');
						} else {
							var str = '<div class="alert alert-danger" role="alert">Request error, please contact us!'
								+ '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
								+ '</div>';
							news.children('.alert').remove()
							news.prepend(str)
						}

						typeof error === 'function' && error(e, code);
					}
				}, options));
			}
			return false;
		})
	},
	req: function (options) {
		// set default
		var defaults = {
			url: '',
			message: 1,
			messageID: '',
			successMessage: true,
		};

		options = $.extend({}, defaults, options);

		if (!options.url) {
			return false;
		}

		var success = options.success,
			error = options.error,
			message;

		options.headers = options.headers || {};
		options.data = options.data || {};

		delete options.success;
		delete options.error;

		// message type
		switch (options.message) {
			case 2:
				if (!options.messageID) return false;
				message = $(options.messageID);
				break;
			case 1:
			default:
				message = $('#J_MessageModal');
				break;
		}

		$.ajax($.extend({
			type: 'get'
			, dataType: 'json'
			, success: function (result) {
				// result = JSON.parse(result);
				var str = '';

				if (typeof result.msg != 'undefined' && result.msg != '') {
					if (result.error || options.successMessage) {
						str = result.error ? 'alert-danger' : 'alert-success';
						result.msg = result.msg.join("<br>")

						// message type
						switch (options.message) {
							case 2:
								str = '<div class="alert ' + str + '" role="alert">' + result.msg
								str += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
								str += '</div>'
								message.children('.alert').remove()
								message.prepend(str)
								break;
							case 1:
							default:
								str = '<div class="alert ' + str + '" role="alert">' + result.msg + '</div>'
								message.find('.modal-body').prepend(str)
								message.modal('show')
								break;
						}
					}
				}

				// success
				if (!result.error) {
					typeof options.done === 'function' && options.done(result);
				}

				typeof success === 'function' && success(result);
			}
			, error: function (e, code) {
				var str = '';

				// message type
				switch (options.message) {
					case 2:
						str += '<div class="alert alert-danger" role="alert">Request error, please contact us!'
						str += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
						str += '</div>'
						message.children('.alert').remove()
						message.prepend(str)
						break;
					case 1:
					default:
						str += '<div class="alert alert-danger" role="alert">Request error, please contact us!</div>'
						message.find('.modal-body').prepend(str)
						message.modal('show')
						break;
				}

				typeof error === 'function' && error(e, code);
			}
		}, options));
	}
})

$.fn.extend({
	/**
	 * form ajax submit
	 * @param url : ajax submit url
	 * @param message : message type (1: popup, 2: html)
	 * @param messageID : message === 2 use ID, The new message displays the ID address.
	 * @param successMessage : Is the success message displayed? true: yes, false: no, default false
	 * @param loadHtml : Replace contents in button download process
	 * @param function done : Post successful operation
	 */
	reqForm:function(options){
		// set default
		var defaults = {
			url: '',
			message: 1,
			messageID: '',
			successMessage: true,
			loadHtml: '',
		};

		options = $.extend({}, defaults, options);

		if (!options.url) {
			return false;
		}

		var success = options.success,
			error = options.error,
			form = $(this),
			btnHtml = '',
			btnLen = 0,
			message;

		options.headers = options.headers || {};
		options.data = options.data || form.serialize();

		delete options.success;
		delete options.error;

		if (options.loadHtml) {
			var btn = form.find('button[type=submit]'),
				btnLen = btn.length;
			if (btnLen) {
				btnHtml = btn.html();
				btn.attr('disabled', true).html(options.loadHtml);
			}
		}

		// message type
		switch (options.message) {
			case 2:
				message = options.messageID ? $(options.messageID) : form;
				break;
			case 1:
			default:
				message = $('#J_MessageModal');
				break;
		}

		$.ajax($.extend({
			type: 'get'
			, dataType: 'json'
			, success: function (result) {
				// result = JSON.parse(result);
				var str = '';

				if (typeof result.msg != 'undefined' && result.msg != '') {
					if (result.error || options.successMessage) {
						str = result.error ? 'alert-danger' : 'alert-success';
						result.msg = result.msg.join("<br>")

						// message type
						switch (options.message) {
							case 2:
								str = '<div class="alert ' + str + '" role="alert">' + result.msg
								str += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
								str += '</div>'
								message.children('.alert').remove()
								message.prepend(str)
								break;
							case 1:
							default:
								str = '<div class="alert ' + str + '" role="alert">' + result.msg + '</div>'
								message.find('.modal-body').prepend(str)
								message.modal('show')
								break;
						}
					}
				}

				if (btnLen) {
					btn.attr('disabled', false).html(btnHtml);
				}

				// success
				if (!result.error) {
					typeof options.done === 'function' && options.done(result);
				}

				typeof success === 'function' && success(result);
			}
			, error: function (e, code) {
				var str = '';

				// message type
				switch (options.message) {
					case 2:
						str += '<div class="alert alert-danger" role="alert">Request error, please contact us!'
						str += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
						str += '</div>'
						message.children('.alert').remove()
						message.prepend(str)
						break;
					case 1:
					default:
						str += '<div class="alert alert-danger" role="alert">Request error, please contact us!</div>'
						message.find('.modal-body').prepend(str)
						message.modal('show')
						break;
				}

				if (btnLen) {
					btn.attr('disabled', false).html(btnHtml);
				}

				typeof error === 'function' && error(e, code);
			}
		}, options));
	},
	verifyInput:function(options){
		var defaults = {
			done: function () {
			}
		};

		options = $.extend({}, defaults, options);

		$(this).on('input', function () {
			var t = $(this);
			if (t.val() !== '') {
				t.addClass('common-group-input-add');
				t.prev().addClass('common-group-label-add');
				typeof options.done === 'function' && options.done(t);
			}
		}).on('blur', function () {
			var t = $(this);
			if (t.val() == '') {
				t.removeClass('common-group-input-add').addClass('common-group-input-add1');
				t.prev().removeClass('common-group-label-add');
				t.parent().find('label.error').remove();
			}
		});
	},
	qtyCalculation:function(options){
		// set default
		var self = $(this)
			,defaults = {
			add:''
			,reduces:''
			,maxVal:0
		};

		options = $.extend({},defaults,options);
		options.maxVal = parseInt(options.maxVal);

		if (options.maxVal < 1) {
			return false
		}

		self.on('input',function(){
			var t = $(this)
				,val = parseInt(t.val())
				,max = options.maxVal;

			if (val > 0) {
				if (val > max) {
					t.val(max);
				} else if (val > 1 && val <= max) {
					t.val(val);
				} else {
					t.val(1);
				}
			} else {
				t.val('');
			}
		}).on('blur',function(){
			var t = $(this)
				,val = parseInt(t.val());

			if (val > 0 && val <= options.maxVal) {
				return;
			}

			if (val > options.maxVal) {
				val = options.maxVal;
			} else {
				val = 1;
			}

			t.val(val);
		});

		// add qty
		if (options.add) {
			$(options.add).on('click',function(){
				var val = parseInt(self.val());
				val++;

				if (val > options.maxVal) {
					val = options.maxVal
				}

				self.val(val);
			});
		}

		// reduces qty
		if (options.reduces) {
			$(options.reduces).on('click',function(){
				var val = parseInt(self.val());
				val--;

				if (val < 1) {
					val = 0;
				}

				self.val(val);
			});
		}
	},
	cleareModal:function(options){
		var self = $(this),
			defaults = {
				titleId:'',
				contentId:''
			};

		options = $.extend({},defaults,options);

		self.on('hide.bs.modal',function(e){
			$(options.titleId).html('');
			$(options.contentId).html('');
		});
	},
	verifyRequired:function(options){
		var self = $(this),
			defaults = {
				contentId:'',
				name:[]
			};

		options = $.extend({},defaults,options);

		self.change(function(){
			var t = $(options.contentId),nameValue,dom,itself = $(this);
			for (var i in options.name) {
				nameValue = options.name[i];
				dom = t.find('input[name="' + nameValue + '"]');
				if (itself.is(':checked')) {
					t.addClass('show');
					dom.attr('required',true);
				} else {
					t.removeClass('show');
					dom.removeAttr('required').val('');
				}
			}
		});
	},
	showErrorMsg:function(options){
		var t = $(this),
			m = $('#J_MessageModal'),
			defaults = {
				msg: 'Request error, please contact us!'
			};

		options = $.extend({},defaults,options);

		var str = '<div class="alert alert-danger" role="alert">' + options.msg + '</div>';
		m.find('.modal-body').prepend(str);
		m.modal('show');
		t.removeClass('show');
	},
	merchandiseCountdown:function(options){
		var self = $(this),
			defaults = {
				flipclockTimer:'',
				flipclockDay:''
			};
		options = $.extend({},defaults,options);
		var interval,timer;
		timer = self.attr('id');

		if (timer != '' && timer != undefined) {
			interval = setInterval(GetRTime,1000,timer);
		}

		function GetRTime(endTimes){
			var t = endTimes.replace(/-/g,'/');
			var EndTime = new Date(t),
				NowTime = new Date(),
				t = EndTime.getTime() - NowTime.getTime(),
				d = Math.floor(t / 1000 / 60 / 60 / 24),
				h = Math.floor(t / 1000 / 60 / 60 % 24),
				m = Math.floor(t / 1000 / 60 % 60),
				s = Math.floor(t / 1000 % 60);
			d = checkTime(d);
			h = checkTime(h);
			m = checkTime(m);
			s = checkTime(s);

			if (t <= 0) {
				$(options.flipclockDay).html('00');
				$(options.flipclockTimer).find('.flipclock-times').html('00:00:00');

				clearInterval(interval);
			} else {
				$(options.flipclockDay).html(d);
				$(options.flipclockTimer).find('.flipclock-times').html(h + ':' + m + ':' + s);
			}
			if(d<=0){
				$(options.flipclockDay).hide()
			}else{
				$(options.flipclockDay).show()
			}
		}

		function checkTime(i){
			if (i < 10) {
				i = "0" + i;
			}
			return i;
		}
	},
	verifyPositiveInteger:function(options){
		// set default
		var self = $(this)
			,defaults = {
			maxVal:0
		};

		options = $.extend({},defaults,options);
		options.maxVal = parseInt(options.maxVal);
		if (options.maxVal < 0) {
			return false
		}
		self.on('keypress',function(){
			return (/[\d]/.test(String.fromCharCode(event.keyCode)));
		}).on('input',function(){
			var t = $(this)
				,val = parseInt(t.val())
				,max = options.maxVal;

			if (val >= 0) {
				if (val > max) {
					t.val(max);
				} else if (val >= 0 && val <= max) {
					t.val(val);
				}
			} else {
				t.val('');
			}
		}).on('blur',function(){
			var t = $(this)
				,val = parseInt(t.val());

			if (val >= 0 && val <= options.maxVal) {
				return;
			}

			if (val > options.maxVal) {
				val = options.maxVal;
			} else {
				val = 1;
			}

			t.val(val);
		})
	}
});

// collection status identifier
var collecStatus = false;

// Tripartite Checkout
function laoding() {
	$('.J_checkLaoding').addClass('hide');
}

$(function () {
	// message
	$('#J_MessageModal').on('hidden.bs.modal',function(e){
		$(this).find('.modal-body').empty();
	});

	// Lazy picture loading
	$('.J_imgLazyLoading').lazyload({
		effect:'fadeIn',
		skip_invisible : false
	});

	// Lazy loading background map
	$(".J_imgBgLazyLoading").lazyload({
		effect:'fadeIn',
		load:function(elements_left,settings){
			var url = $(this).attr('src');
			$(this).css({'background-image':'url('+ url + ')','background-size':'cover'}).removeClass('common-background-img');
		}
	});

	// collection
	$('body').on('click', '.J_collectAjax', function () {
		collectAjax($(this));
	});

	//search
	var jqThis, len=0;
	$(document).on('keydown',function(e){
		if ($('.matching-box').is(':visible')) {
			$('.matching-li').each(function(){
				if ($(this).hasClass('active')) {
					jqThis = $(this);
					len = $(this).parent().find('.matching-li').length;
				}
			});
			var thisMatching = jqThis.parent().parent().parent().find('.search-matching');

			switch (e.keyCode) {
				case 38:
					$('.search-matching').blur();
					if (jqThis.index() == 0) {
						return false;
					} else {
						jqThis.prev().addClass('active');
						jqThis.removeClass('active');
					}
					event.preventDefault();
					break;
				case 40:
					$('.search-matching').blur();
					if (jqThis.index() == len - 1) {
						return false;
					} else {
						jqThis.next().addClass('active');
						jqThis.removeClass('active');
					}
					event.preventDefault();
					break;
				case 13:
					thisMatching.val(jqThis.find('a').text());
					$('.matching-box').hide();
					event.preventDefault();
					break;
			}
		}
	});

	//Remove spaces
	$('.J_removeSpaces').on('change',function () {
		$(this)[0].value = $(this)[0].value.replace(/\s/gi, '')
	});
})

// collection
function collectAjax(e) {
	var productId = e.attr('data-id'),
		url = e.attr('data-url'),
		i = e.find('i'),
		collectStatus = i.attr('data-status'),
		aHref = e.find('a').attr('href');

	if (collecStatus) {
		return false;
	}

	if ((aHref != undefined && aHref != 'javascript:;') || productId < 1 || collectStatus == undefined) {
		return false;
	}

	collecStatus = true;

	$.req({
		url: url,
		type: 'post',
		data: {product_id: productId, status: collectStatus},
		done: function (result) {
			collecStatus = false;

			if (!result.error) {
				if (collectStatus == 0) {
					i.removeClass('heartAnimation J_bgPositionRight').addClass('J_bgPositionLeft').attr('data-status', '1');
				} else {
					i.addClass('heartAnimation J_bgPositionRight').removeClass('J_bgPositionLeft').attr('data-status', '0');
				}
			}
		},
		error:function(){
			collecStatus = false;
		}
	})
}

//Verification card number
function cardVerify(e) {
	var t, n, o, i, a, s, u;
	for (null == e && (e = ""), o = "0123456789", u = "", n = e.split(""), i = 0, s = n.length; s > i; i++) {
		t = n[i], a = o.indexOf(t);

		if (a > -1) u += t;
	}
	return u
}

function cardw(e) {
	var t, n, r, o, i, a, s, u;
	for (null == e && (e = ""), r = "锛愶紤锛掞紦锛旓紩锛栵紬锛橈紮", o = "0123456789", u = "", n = e.split(""), i = 0, s = n.length; s > i; i++) {
		t = n[i], a = r.indexOf(t), a > -1 && (t = o[a]), u += t;
	}
	return u
}

//Verification card date
function formatCardExpiry(e) {
	var t, n, r, o;
	return e = cardw(e), (n = e.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/)) ? (t = n[1] || "", r = n[2] || "", o = n[3] || "", o.length > 0 ? r = " / " : " /" === r ? (t = t.substring(0, 1), r = "") : 2 === t.length || r.length > 0 ? r = " / " : 1 === t.length && "0" !== t && "1" !== t && (t = "0" + t, r = " / "), t + r + o) : ""
}

function htmldecode(str) {
	str = replaceAll(str, "&amp;", '&');
	str = replaceAll(str, "&lt;", '<');
	str = replaceAll(str, "&gt;", '>');
	str = replaceAll(str, "&quot;", '"');
	str = replaceAll(str, "&#039;", "'");
	str = replaceAll(str, "&nbsp;", ' ');
	return str;
}

function replaceAll(str, sptr, sptr1) {
	while (str.indexOf(sptr) >= 0) {
		str = str.replace(sptr, sptr1);
	}
	return str;
}
