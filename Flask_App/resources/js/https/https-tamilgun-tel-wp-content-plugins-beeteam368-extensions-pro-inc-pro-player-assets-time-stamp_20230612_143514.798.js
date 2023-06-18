/*
Time-Stamp Feature
Author: BeeTeam368
Author URI: http://themeforest.net/user/beeteam368
License: Themeforest Licence
License URI: http://themeforest.net/licenses
*/

;(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function ($) {
    'use strict';

    var $d = $(document);
    var $w = $(window);
    var _d = document;
    var _w = window;
    var $h = $('html');
    var $b = $('body');
	
	$.isNumber = function(n){
		var _ = this;
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
	
	$d.on('click', '.beeteam368-time-action-control', function(){
		var $t = $(this);
		
		var player_id = $t.attr('data-id');
		var time = $t.attr('data-time');
		
		if(typeof(player_id) === 'undefined' || typeof(time) === 'undefined' || typeof(beeteam368_global_player_action_loaded) === 'undefined' || typeof(beeteam368_global_player_action_loaded[player_id]) === 'undefined'){
			return;
		}
		
		time = $.trim(time);
		
		var $player = beeteam368_global_player_action_loaded[player_id];
		var $parent = $t.parents('.beeteam368-player-control');
		
		if(time!=''){
			var time =  time.split(':');
			var time_length = time.length;
			
			var hours = 0;
			var mins = 0;
			var secs = 0;
			
			var seek_time = 0;
			
			switch(time_length){
				case 3:
					
					hours = $.trim(time[0]);
					mins = $.trim(time[1]);
					secs = $.trim(time[2]);
					
					if($.isNumber(hours) && $.isNumber(mins) && $.isNumber(secs)){
						seek_time = parseFloat(hours) * 3600 + parseFloat(mins) * 60 + parseFloat(secs);
					}						
					
					break;
					
				case 2:
					
					mins = $.trim(time[0]);
					secs = $.trim(time[1]);
					
					if($.isNumber(mins) && $.isNumber(secs)){
						seek_time = parseFloat(mins) * 60 + parseFloat(secs);
					}
				
					break;
					
				case 1:
				
					secs = $.trim(time[0]);
					
					if($.isNumber(secs)){
						seek_time = parseFloat(secs);
					}
					
					break;		
			}
			
			if(seek_time == 0){
				seek_time = 0.01;
			}
			
			if(seek_time > 0){
				
				$player.setCurrentTime(seek_time);
				$player.play();
				$player.setVolume(1);
				$player.setMuted(false);				
				
				if($parent.length > 0){
					$parent.find('.beeteam368-player-unmute-control').addClass('disable-mute');
					$('html, body').stop().animate({scrollTop:$parent.offset().top-90}, {duration:500}, function(){});
				}

			}
		}
	});
}));