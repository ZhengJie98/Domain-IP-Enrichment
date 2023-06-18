﻿document.writeln('<div id="couplet"></div>');
document.writeln('<div class="footer">');
document.writeln('	<div class="wrap"><a href="https://t.me/xxsir" target="_blank" class="tg"><i class="icon-telegram"></i></a><a href="http://wpa.qq.com/msgrd?v=3&uin=35768673&site=qq&menu=yes" target="_blank" class="qq"><i class="icon-qq"></i></a></div>');
document.writeln('</div>');
document.writeln('<div  class="wrap">');
document.writeln('	<div class="guide">');
document.writeln('		<a href="/" title="返回首页"><i class="icon-home"></i></a><a href="javascript:void(0)" id="btnGotop" onclick="goTop();return false;" style="display:none;" title="返回顶部"><i class="icon-top"></i></a>');
document.writeln('	</div>');
document.writeln('</div>');
var body = document.body;
var isMobile = ua.indexOf("windows nt") == -1 && ua.indexOf("macintosh") == -1 && ua.indexOf("pad") == -1 && ua.indexOf("x86_64") == -1;
var isAndroid = ua.indexOf("android") > -1;
var isPad = ua.indexOf("pad") > -1;
var isSafari = /Version[|\/]([0-9.]+)([^0-9a-zA-Z]+)Mobile[|\/]([0-9a-zA-Z]+)([^0-9a-zA-Z]+)Safari[|\/]([0-9.]+)$/i.test(ua);
body.addEventListener('touchstart',function(){});
window.baseready = (function(){
	var readyfn = [];
	var readyobj = function(fn){
		if(!!fn && typeof fn == "function"){
			readyfn.push({
				fn :fn
			});
		}
	};
	readyobj.insert = function(fn){
		if(!!fn && typeof fn == "function"){
			readyfn.push({
				fn :fn
			});	
		}
	};
	readyobj.excute = function(){
		for(var i = 0;i<readyfn.length;i++){
			if(typeof readyfn[i].fn == "function"){
				readyfn[i].fn();
			}
		}
	}
	return readyobj;
})();

baseready(function(){
	if(getId('header')){
		var headerHtml = '';
		headerHtml+='<div class="nav-wrap">';
		headerHtml+='	<div class="nav clearfix">';
		headerHtml+='		<ul class="logo">';
		headerHtml+='			<li class="domain"><a href="/">'+getDomain()+'</a></li>';
//		headerHtml+='			<li class="url">正确的网址输入方式<span><i>https://</i>www.'+getDomain()+'</span></li>';
		headerHtml+='		</ul>';
		if(!isAndroid && isSafari){
			addDesktop = '点击浏览器 <em class="icon-safari"></em><br>选择 <font color="#ffbf00">添加到主屏幕</font>';
		}else{
			addDesktop = '点击浏览器 <em class="icon-bs-menu"></em> 或 <em class="icon-bs-more"></em><br>选择 <font color="#ffbf00">添加到主屏幕</font> 或 <font color="#ffbf00">添加快捷方式</font>';
		}
		if(isMobile){
			headerHtml+='		<ul class="btn-icon"><li><a href="'+appUrl+'" target="_blank"><i class="icon-android"></i><span class="title">APP</span></a></li><li><a href="javascript:void(0)"><i class="icon-desktop"></i><span class="title">添加桌面</span><div class="tips">'+ addDesktop +'</div></a></li><li><a href="'+updateUrl+'" target="_blank"><i class="icon-url"></i><span class="title">永久网址</span></a></li><li><a href="javascript:void(0)"><i class="icon-email"></i><span class="title">邮箱获取</span><div class="tips"><p>'+emailUrl+'</p>任意文字发送到该邮箱获取新网址</div></a></li></ul>';
		}else{
			headerHtml+='		<ul class="btn-icon"><li><a href="'+appUrl+'" target="_blank"><i class="icon-android"></i><span class="title">APP下载</span><div class="pc"><span class="subtitle">关注微博，获取新网址</span></div></a></li><li><a href="javascript:void(0)"><i class="icon-desktop"></i><span class="title">加入收藏夹</span><div class="pc"><span class="subtitle">将本站加入到收藏夹</span></div><div class="tips"><p>Ctrl + D</p>将本站加入收藏夹，随时开撸！</div></a></li><li><a href="'+updateUrl+'" target="_blank"><i class="icon-url"></i><span class="title">官方永久网址</span><div class="pc"><span class="subtitle">收藏发布页，获取新网址</span></div></a></li><li><a href="javascript:void(0)"><i class="icon-email"></i><span class="title">邮箱获取网址</span><div class="pc"><span class="subtitle">发送文字到邮箱获取新网址</span></div><div class="tips"><p>'+emailUrl+'</p>任意文字发送到该邮箱获取新网址</div></a></li></ul>';
		}
		headerHtml+='	</div>';
		headerHtml+='</div>';
		getId('header').innerHTML = headerHtml;
	}
	/* Spons */
	if(typeof coupletData!=="undefined"){
		if(getCookie("couplet_status")!=0){
			coupletData.sort(randomsort);
			var coupletSpons = '';
			for(var i = 0;i<coupletData.length;i++){
				var img = coupletData[i].imgs[random() % coupletData[i].imgs.length];
				coupletSpons+='<div id="'+((i == 0) ? 'coupletLeft' : 'coupletRight') +'" class="'+((i == 0) ? "couplet-left" : "couplet-right")+'">';
				coupletSpons+='	<ul>';
				coupletSpons+='		<li><div class="btn-close" onclick="closeCouplet();"><i class="icon-close"></i></div><a href="'+coupletData[i].url+'" target="_blank"></a><img src="'+img+'" /><span>\u5e7f\u544a</a></li>';
				coupletSpons+='	</ul>';
				coupletSpons+='</div>';
			}
			getId('couplet').innerHTML = coupletSpons;
		}
	}
	var menuDiv = document.getElementsByClassName('menu')[0];
	if(typeof firstMenuData!=="undefined"){
		var firstMenu = document.createElement("dl");
		firstMenu.innerHTML+='	<dt><a href="'+firstMenuUrl+'" target="_blank" rel="nofollow">'+firstMenuName+'</a></dt>';
		for (var i = 0; i < firstMenuData.length; i++) {
			firstMenu.innerHTML+='	<dd><a href="'+firstMenuData[i].url+'" target="_blank" rel="nofollow">'+firstMenuData[i].name+'</a></dd>';
		}
		menuDiv.insertBefore(firstMenu,menuDiv.childNodes[0]);
	}
	if(typeof lastMenuData!=="undefined"){
		var lastMenu = document.createElement("dl");
		lastMenu.innerHTML+='	<dt><a href="'+lastMenuUrl+'" target="_blank" rel="nofollow">'+lastMenuName+'</a></dt>';
		for (var i = 0; i < lastMenuData.length; i++) {
			lastMenu.innerHTML+='	<dd><a href="'+lastMenuData[i].url+'" target="_blank" rel="nofollow">'+lastMenuData[i].name+'</a></dd>';
		}
		menuDiv.appendChild(lastMenu);
	}
	if(typeof topData!=="undefined"){
		topData.sort(randomsort);
		var topSpons = '';
		topSpons+='<div class="wrap">';
		topSpons+='	<div class="mod clearfix">';
		topSpons+='		<div class="row col2">';
		for (var i = 0; i < topData.length; i++) {
			var img = topData[i].imgs[random()  % topData[i].imgs.length];
			topSpons+='			<dl><dt><a href="'+topData[i].url+'" target="_blank" rel="nofollow"><img src="'+img+'" alt="" /></a></dt><dd>\u5e7f\u544a</dd></dl>';
		}
		topSpons+='		</div>';
		topSpons+='	</div>';
		topSpons+='</div>';
		getId('topBox').innerHTML = topSpons;
	}
	if(typeof midData!=="undefined"){
		midData.sort(randomsort);
		var midSpons = '';
		midSpons+='<div class="wrap">';
		midSpons+='	<div class="mod clearfix">';
		midSpons+='		<div class="row col3">';
		for (var i = 0; i < midData.length; i++) {
			var img = midData[i].imgs[random() % midData[i].imgs.length];
			midSpons+='			<dl><dt><a href="'+midData[i].url+'" target="_blank" rel="nofollow"><img src="'+img+'" alt="" /></a></dt><dd>\u5e7f\u544a</dd></dl>';
		}
		midSpons+='		</div>';
		midSpons+='	</div>';
		midSpons+='</div>';
		midSpons+='<div id="scroll"></div>';
		getId('midBox').innerHTML = midSpons;
	}
	if(typeof btmData!=="undefined"){
		btmData.sort(randomsort);
		var btmSpons = '';
		btmSpons+='<div class="wrap">';
		btmSpons+='	<div class="mod clearfix">';
		btmSpons+='		<div class="row col2">';
		for (var i = 0; i < btmData.length; i++) {
			var img = btmData[i].imgs[random() % btmData[i].imgs.length];
			btmSpons+='			<dl><dt><a href="'+btmData[i].url+'" target="_blank" rel="nofollow"><img src="'+img+'" alt="" /></a></dt><dd>\u5e7f\u544a</dd></dl>';
		}
		btmSpons+='		</div>';
		btmSpons+='	</div>';
		btmSpons+='</div>';
		getId('btmBox').innerHTML = btmSpons;
	}
	/* Spons end */
	(function(){
		if(isMobile || isPad){
			document.onscroll = function() {
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				var cHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
				var oDiv = document.getElementById('scroll');
				if(!couplet){return;}
				if(scrollTop > (oDiv.offsetTop - (cHeight / 2))){
					getId('couplet').style.display = "block";
				}else{
					getId('couplet').style.display = "none";
				}
			}
		}
		var posterImages = document.querySelectorAll('.nature');
		setTimeout(function(){loadImg(posterImages);}, 100);
		addEvent(window,'scroll',function(){
			loadImg(posterImages);
			if(getScrollTop() > 500){
				getId('btnGotop').style.display = 'block';
			}else{
				getId('btnGotop').style.display = "none";
			}
		});
	})();

});

document.onreadystatechange = function () {
	if (document.readyState == 'complete') {
		if(countUrl != ""){
			addScript(countUrl);
		}
	}
}

function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

/* LazyLoad */
function loadImg(arr){
	for (var i = 0, len = arr.length; i < len; i++) {
		if(arr[i].getBoundingClientRect().top < document.documentElement.clientHeight && !arr[i].isLoad) {
			arr[i].isLoad = true;
			arr[i].style.cssText = 'transition:0;opacity:0;';
			if(arr[i].dataset){
			aftLoadImg(arr[i],arr[i].dataset.original);  
		}else{
			aftLoadImg(arr[i],arr[i].getAttribute('data-original'));
		}
		(function(i){
			setTimeout(function(){
				arr[i].style.cssText = 'transition:1s;opacity:1;';
			},16)
		})(i);
		}
	}
}

function aftLoadImg(obj, url) {
	var oImg = new Image();
	oImg.onload = function(){
		obj.src = oImg.src;
	}
	oImg.src = url;
}

function getDomain(){
		var domain = document.domain.split('.').slice(-2).join('.');
		return domain;
}

function goTop(){
	var goTop = setInterval(scrollMove, 10);
	function scrollMove(){
		setScrollTop(getScrollTop() / 2);
		if (getScrollTop() == 0) clearInterval(goTop);
	}
}

function getScrollTop(){
	var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
	if(body){
		bodyScrollTop = body.scrollTop;
	}
	if(document.documentElement){
		documentScrollTop = document.documentElement.scrollTop;
	}
	scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
	return scrollTop;
}

function setScrollTop(value){
	if (document.documentElement.scrollTop){
		document.documentElement.scrollTop = value;
	}else{
		body.scrollTop = value;
	}
}

function addEvent(obj,type,fn){
	if(obj.addEventListener) obj.addEventListener(type,fn,false);
	else if(obj.attachEvent){
		obj["e"+type+fn]=fn;
		obj[type+fn]=function(){obj["e"+type+fn](window.event);}
		obj.attachEvent("on"+type,obj[type+fn]);
	}
}

function removeEvent(obj,type,fn){
	if(obj.removeEventListener) obj.removeEventListener(type,fn,false);
	else if(obj.detachEvent){
		obj.detachEvent("on"+type,obj[type+fn]);
		obj[type+fn]=null;
		obj["e"+type+fn]=null;
	}
}

function random(){
	return parseInt(Math.random() * 10);
}

function randomsort(a, b) {
	return random() > 5 ? -1 : 1;
}

function getRandomNumberByRange(start, end) {
	return Math.round(Math.random() * (end - start) + start)
}

function getImage(idName,num) {
	return document.getElementById(idName).getElementsByTagName('img')[num].clientHeight;
}

function getId(idName) {
	return document.getElementById(idName);
}

function getStyle(dom, attr) {
	if (window.getComputedStyle) {
		return window.getComputedStyle(dom, null)[attr];
	} else {
		return dom.currentStyle[attr];
	}
}

function getClass(clsName,oParent) {
	var oParents = (typeof(oParent) == "object") ? oParent : (!!oParent ? document.getElementById(oParent) : document);
	var boxArr = new Array();
	var oElements  = oParents.getElementsByTagName('*');
	for(i=0;i<oElements.length;i++){
		var classname = oElements[i].className || '';
		var classNameArr = (classname+"").split(/\s+/);
		for (j = 0; j < classNameArr.length; j++) {
			if(classNameArr[j] === clsName){
				boxArr.push(oElements[i]);
			}
		}
	}
	return boxArr;
}

function closeCouplet(){
	getId('couplet').style.display='none';
	couplet = false;
	setCookie("couplet_status","0","24");
}

function showMask(zIndex){
	var mask = document.createElement("div");
	mask.id = "maskBox";
	mask.setAttribute("class","mask");
	mask.setAttribute("onclick","hideMask();");
	mask.style.cssText = "z-index:"+zIndex;
	body.appendChild(mask);
	body.style.cssText = "overflow:hidden;";
}

function hideMask(){
	maskBox.parentNode.removeChild(maskBox);
	popBox = getId('popBox');
	body.removeChild(popBox);
	body.style.cssText = "overflow:auto;";
	setCookie("newurl","0","72");
}

function setCookie(cname,cvalue,exhours){
	var exp = new Date();
	exp.setTime(exp.getTime() + Number(exhours) * 3600 * 1000);
	document.cookie = cname + "=" + cvalue + "; path=/;expires = " + exp.toGMTString();
}

function getCookie(name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	return (arr=document.cookie.match(reg))?unescape(arr[2]):null;
}

function removeCookie(name){
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getCookie(name);
	if(cval!=null)
	document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

function prefixInteger(num, length) {
	return (Array(length).join('0') + num).slice(-length);
}

function copyUrl(text){
	var input = document.createElement('textarea');
	body.appendChild(input);
	input.style.cssText = "opacity:0;position:fixed;"
	input.value = text;
	input.select();
	document.execCommand('Copy');
	alert("复制成功，请粘贴到文本保存，方便以后访问！");
	if(isIE()||isIE11()){
		input.removeNode(true);
	}else{
		input.remove();
	}
	function isIE() {
		if (!!window.ActiveXobject || "ActiveXObject" in window) {
			return true;
		} else {
			return false;
		}
	}
	function isIE11(){
		if((/Trident\/7\./).test(ua)) {
			return true;
		} else {
			return false;
		}
	}
}

function goUrl(url){
	window.open(url,"_blank");
}

function goSpons(){
	//window.open(sponsUrl,"_blank");
}

baseready.excute();