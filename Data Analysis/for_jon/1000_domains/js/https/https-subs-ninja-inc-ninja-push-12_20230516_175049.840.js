﻿var ninja_url = window.location.search.replace('?', '');
if ('1' == '0') { var ninja_go = '?'; var ninja_go2 = '?'; } else { var ninja_go = '?'+ninja_url; var ninja_go2 = '?'+ninja_url; }

var qs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));

function csetCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function cgetCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function ceraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

var isvisited = cgetCookie('ninja_visited');
if (qs["label"] == null){
if (isvisited == null){
var label = '';
} else {
var label = isvisited;
}
var staturl = 'https://subs.ninja/inc/ninja_push_stat/12';
} else {
var label = qs["label"];
var staturl = 'https://subs.ninja/inc/ninja_push_stat/12/?label='+label;
}

if (isvisited == null){
csetCookie('ninja_visited',label,1);
$.getScript(staturl);
}

$(function(){
				firebase.initializeApp({
					messagingSenderId: '30702220664'
				});
				if(firebase.messaging.isSupported() && 'Notification' in window){
					var messaging = firebase.messaging();
					messaging.requestPermission()
						.then(function(){
							messaging.getToken()
								.then(function(currentToken){									
									if(currentToken){
										sendTokenToServer(currentToken);
									} else {
										if (0 == 1) {
										location.href = ninja_go2;
										}
									}
								})
								.catch(function(err){
										if (0 == 1) {
										location.href = ninja_go2;
										}
								});
						})
						.catch(function (err) {
										if (0 == 1) {
										location.href = ninja_go2;
										}
						});

				} else {
										if (0 == 1) {
										location.href = ninja_go2;
										}
				}
			});
			function sendTokenToServer(currentToken){
				if(!isTokenSentToServer(currentToken)) {
					setTokenSentToServer(currentToken);
					data = {'landing': '0', 'sid': '12', 'label': label, 'token': currentToken};
				$.ajax({
					url: 'https://subs.ninja/inc/func_send_token.php',
					data: data,
					method: 'post',
					cache: false,
					beforeSend: function(){
					},
					success: function(data){
										if (0 == 1) {
										location.href = ninja_go;
										}
					},
					error: function(){
						 console.log('Проверьте подключение к интернету ...');
					},
					complete: function(){
					}
				});
				} else {
						if (0 == 1) {
						location.href = ninja_go;
						}
				}
			}
			function isTokenSentToServer(currentToken) {
				return window.localStorage.getItem('sentFirebaseMessagingToken') == currentToken;
			}
			function setTokenSentToServer(currentToken) {
				window.localStorage.setItem(
					'sentFirebaseMessagingToken',
					currentToken ? currentToken : ''
				);
			}