(function($) {
	$.fn.numKey = function(options) {
		var defaults = {
			limit: 100,
			disorder: false
		}
		var options = $.extend({}, defaults, options);
		var input = $(this);
		var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		if(options.disorder) {
			nums.sort(function() {
				return 0.5 - Math.random();
			});
		}
		var html = '\
		<div class="fuzy-numKey">\
		<div class="fuzy-numKey-active" style="display:none;"></div>\
		<table>\
		<tr>\
		<td class="fuzy-numKey-lightgray fuzy-numKey-active">' + nums[1] + '</td>\
		<td class="fuzy-numKey-lightgray fuzy-numKey-active">' + nums[2] + '</td>\
		<td class="fuzy-numKey-lightgray fuzy-numKey-active">' + nums[3] + '</td>\
		</tr>\
		<tr>\
		<td class="fuzy-numKey-lightgray fuzy-numKey-active">' + nums[4] + '</td>\
		<td class="fuzy-numKey-lightgray fuzy-numKey-active">' + nums[5] + '</td>\
		<td class="fuzy-numKey-lightgray fuzy-numKey-active">' + nums[6] + '</td>\
		</tr>\
		<tr>\
		<td class="fuzy-numKey-lightgray fuzy-numKey-active">' + nums[7] + '</td>\
		<td class="fuzy-numKey-lightgray fuzy-numKey-active">' + nums[8] + '</td>\
		<td class="fuzy-numKey-lightgray fuzy-numKey-active">' + nums[9] + '</td>\
		</tr>\
		<tr>\
		<td class=""></td>\
		<td class="fuzy-numKey-lightgray fuzy-numKey-active">' + nums[0] + '</td>\
		<td class="fuzy-numKey-darkgray fuzy-numKey-active">&larr;</td>\
		</tr>\
		</table>\
		<style type="text/css">\
		* {\
			padding: 0 0;\
			margin: 0 0;\
		}\
		.fuzy-numKey {\
			width: 100%;\
			position: absolute;\
			bottom: 0;\
			display: none;\
			box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.1);\
			background-color: #031728;\
			text-align: center;\
			padding: 15px;\
			height: 40%;\
			max-height: 280px;\
			z-index: 999;\
		}\
		.fuzy-numKey div {\
			height: 10%;\
			width: 100%;\
			font-weight: bold;\
			font-family: "Roboto";\
			background-color: #00233f;\
			color: #fff;\
			margin-bottom: 2%;\
			border-radius: 12px;\
			line-height: 200%;\
		}\
		.fuzy-numKey table {\
			max-width: 500px;\
			width: 100%;\
			height: 100%;\
			margin: auto;\
			border-collapse: separate;\
			border-spacing: 10px 15px;\
		}\
		.fuzy-numKey td {\
			font-weight: bold;\
			font-family: "Roboto";\
			width: 30%;\
			color: #fff;\
			border-radius: 20px;\
		}\
		.fuzy-numKey-darkgray{\
			background: #666;\
		}\
		.fuzy-numKey-lightgray{\
			background: #b1b1b1;\
		}\
		.fuzy-numKey-active {\
			max-width:500px;\
			margin: auto;\
			background-color: #00233f;\
		}\
		.fuzy-numKey-active:active {\
			background: deepskyblue;\
		}\
		</style>\
		</div>';
		input.on("click", function() {
			$(this).attr('readonly', 'readonly');
			$(".fuzy-numKey").remove();
			$('body').append(html);
			$(".fuzy-numKey").show(100);
			$(".fuzy-numKey table tr td").on("click", function() {
				if(isNaN($(this).text())) {
					if($(this).text() == 'Clear') {
						input.val('');
					} else {
						input.val(input.val().substring(0, input.val().length - 1));
						
					}
				} else {
					input.val(input.val() + $(this).text());
					console.log(input.val());
					if(input.val().length >= options.limit) {
						input.val(input.val().substring(0, options.limit));
						remove();
					}
				}
			});
			$(".fuzy-numKey div").on("click", function() {
				remove();
			});
			$(document).mouseup(function(e) 
			{
				var container = $(".fuzy-numKey");

				// if the target of the click isn't the container nor a descendant of the container
				if (!container.is(e.target) && container.has(e.target).length === 0) 
				{
					remove();
				}
			});
		});

		function remove() {
			$(".fuzy-numKey").hide(100, function() {
				$(".fuzy-numKey").remove();
			});
			input.removeAttr('readonly');
		}
	}
})(jQuery)