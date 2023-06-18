﻿/* 网站配置 */
var appName = "热览"; //APP名称
var appUrl = "/app.html"; //APP下载页地址
var updateUrl = "/update.html"; //永久网址发布页
var emailUrl = "<em>g</em><span>3</span><em>et</em><span>xl</span><em>ur</em><span>ui</span><em>l2</em><span>78</span><em>02</em><span>ou</span><em>0@</em><span>rr</span><em>ou</em><span>gh</span><em>tl</em><span>22</span><em>ook.com</em>";	//邮箱回复网址
var count = ""; //统计系统地址
var getSpons = true;

/* 新网址显示，5个以上则随机取
var moreUrl = [
"eses2.com"
];
*/

/* 菜单 [最多8个，随机排列展示] */
var firstMenuUrl = "https://7771325.com/al111.html"; //菜单链接
var firstMenuName = "\u535a\u5f69"; //主菜单名称
var firstMenuData = [
	{name:'\u771f\u4eba\u89c6\u8baf',url:firstMenuUrl},
	{name:'\u7535\u5b50\u5a31\u4e50',url:firstMenuUrl},
	{name:'\u6355\u9c7c\u5a31\u4e50',url:firstMenuUrl},
	{name:'\u4f53\u80b2\u6295\u6ce8',url:firstMenuUrl},
	{name:'\u5f00\u5143\u68cb\u724c',url:firstMenuUrl},
	{name:'\u5929\u5929\u8fd4\u6c34',url:firstMenuUrl},
	{name:'\u7f8e\u5973\u966a\u73a9',url:firstMenuUrl},
	{name:'\u62a2\u5e84\u725b\u725b',url:firstMenuUrl}
];

var lastMenuUrl = "https://esll10.net"; //菜单链接 
var lastMenuName = "\u7a7a\u964d"; //主菜单名称 
var lastMenuData = [ 
	{name:'\u5b66\u59b9\u63f4\u4ea4',url:lastMenuUrl}, 
	{name:'\u5c11\u5987\u517c\u804c',url:lastMenuUrl}, 
	{name:'\u6a21\u7279\u517c\u804c',url:lastMenuUrl}, 
	{name:'\u540c\u57ce\u7ea6\u70ae',url:lastMenuUrl}, 
	{name:'\u5b66\u751f\u517c\u804c',url:lastMenuUrl}, 
	{name:'\u7a7a\u964d\u540d\u5a9b',url:lastMenuUrl}, 
	{name:'\u514d\u8d39\u4e0a\u95e8',url:lastMenuUrl}, 
	{name:'\u70b9\u6211\u7ea6\u70ae',url:lastMenuUrl} 
]; 


/* 对联 [150*350] [固定2个] */
var couplet = true;
var coupletData = [
	{imgs:["https://ad01.2233445566m.com/xtqbb0001.gif"],url:'https://dh.tl603.cn'}, //1
	{imgs:["https://ad01.2233445566m.com/xtqbb0001.gif"],url:'https://dh.tl603.cn'} //2
];

/* 顶部4宫格 [640*150] [固定4个] */
var topData = [
	{imgs:["https://u22099.com/fba3974ce40be2d88a1ce4211d1ec44f.gif"],url:'https://5900127.cc:8443/?shareName=5900127.cc'}, //1
	{imgs:["https://u33011.com/6330df0d35c467599b180492881145de.gif"],url:'https://8700405.cc:8443/?shareName=8700405.cc'}, //2
	{imgs:["https://7780tp.com/7780/640x150.gif"],url:'https://1388765.com:1388/al171.html'},  //3
	{imgs:["https://u22033.com/8d8fbfa9eb711833e09718168c47b48a.gif"],url:'https://5680672.cc:8443/?shareName=5680672.cc'}  //4
];

/* 底部4宫格 [640*150] [固定4个] */
var btmData = [
	{imgs:["https://tm00738.bj.bcebos.com/640x150.gif"],url:'https://5345634358.com/vote_topic_86913786.do'}, //1
	{imgs:["https://ad01.2233445566m.com/xtqbb0002.gif"],url:'https://dh.tl603.cn'}, //2
	{imgs:["https://ad01.2233445566m.com/xtqbb0004.gif"],url:'https://tbr.lxng.cn'}, //3
	{imgs:["https://ad01.2233445566m.com/xtqbb0003.gif"],url:'https://cm.ny603.cn'} //4
];

/* 中间6宫格 [428*180] [固定6个] */
var midData = [
	{imgs:["https://tm00738.bj.bcebos.com/yb-se-420x180.gif"],url:'https://2335145458.com/vote_topic_72622645.do'}, //1
	{imgs:["https://ad01.2233445566m.com/xtqbb0003.gif"],url:'https://cm.ny603.cn'}, //2
	{imgs:["https://ad01.2233445566m.com/xtqbb0004.gif"],url:'https://tbr.lxng.cn'}, //3
	{imgs:["https://ad01.2233445566m.com/xtqbb0003.gif"],url:'https://cm.ny603.cn'}, //4
	{imgs:["https://ad01.2233445566m.com/n_v24cd0b53a3e9f4e7fab6da5faaed32407.gif"],url:'#'}, //5
	{imgs:["https://ad01.2233445566m.com/h4nx410.gif"],url:'https://hx.lxng.cn'} //6
];

var ua = navigator.userAgent.toLowerCase();
if (typeof(Worker) == "undefined" || ua.indexOf('mobile') > -1 && ua.indexOf('quark') > -1 || ua.indexOf('mobile') > -1 && ua.indexOf('ucbrowser') > -1){
	alert("\u4e0d\u652f\u6301\u7684\u6d4f\u89c8\u5668\u7c7b\u578b\uff0c\u63a8\u8350\u4f7f\u7528\u8c37\u6b4c\u6d4f\u89c8\u5668\u3002\u6216\u4e0b\u8f7d\u5feb\u6d3b\u89c6\u9891\x41\x50\x50\uff0c\u89c2\u770b\u6d77\u91cf\u514d\u8d39\u9ad8\u6e05\u89c6\u9891\u3002");
	window.location.href = appUrl;
}

if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<9){
	alert("您的浏览器版本过低，请下载IE9或以上版本，推荐使用谷歌浏览器。\r\n或下载"+appName+"，免费无限制观看成人视频。\r\n现在为您跳转...");
	window.location.href=appUrl;
	throw SyntaxError();
}

function addScript(url) {
	var script = document.createElement("script");
	script.src = url;
	document.body.appendChild(script);
}

addScript('/static/js/advertiser.js');