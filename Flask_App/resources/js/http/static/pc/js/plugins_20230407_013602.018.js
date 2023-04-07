// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});
  while (length--) {
    method = methods[length];
    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
// Place any jQuery/helper plugins in here.
// Copyright (C) 2019-2099 isicheng.com
document.onkeydown=function(){
	var e = window.event||arguments[0];
	if(e.keyCode==123){
		alert("请尊重劳动成果！已经申请版权登记，盗版将追究法律责任。");
		  return false;
	}else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
		alert("请尊重劳动成果！已经申请版权登记，盗版将追究法律责任。");
		  return false;
	}else if((e.ctrlKey)&&(e.keyCode==85)){
		alert("请尊重劳动成果！已经申请版权登记，盗版将追究法律责任。");
		  return false;
	}else if((e.ctrlKey)&&(e.keyCode==83)){
		alert("请尊重劳动成果！已经申请版权登记，盗版将追究法律责任。");
		  return false;
	}
}
document.oncontextmenu=function(){
  alert("请尊重劳动成果！已经申请版权登记，盗版将追究法律责任。");
    return false;
}
function iEsc() {
	return false;
}
function iRec(){
	return true;
}
function DisableKeys() {
	if(event.ctrlKey || event.shiftKey || event.altKey||event.keyCode == 123) {
		window.event.returnValue=false;
		iEsc();
	}
}
document.ondragstart=iEsc;
document.onkeydown=DisableKeys;
document.oncontextmenu=iEsc;
if(typeof document.onselectstart !="undefined") {
	document.onselectstart=iEsc;
}
else {
	document.onmousedown=iEsc;
	document.onmouseup=iRec;
}
function DisableRightClick(data) {
	if(window.Event){
		if (data.which == 2 || data.which == 3) {
			iEsc();
		}
	}
	else {
		if(event.button == 2 || event.button == 3) {
			event.cancelBubble = true
			event.returnValue = false;
			iEsc();
		}
	}
}