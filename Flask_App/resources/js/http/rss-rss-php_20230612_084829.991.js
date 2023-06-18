function rss_view(){
	var blog_view = document.getElementById('blog_view');
	var blog_rss = '<ul class="rss_ul"><li class="rss_li"><a href="http://hiranoya-web.com/b2/index.php?blog=2&title=6a_a_ra_ma_ca_saf_1&more=1&c=1&tb=1&pb=1" target="_blank" class="rss_link">6¶¥()</a><br><span class="rss_description"><p>123¶≥</p><p>‚Ë2¶¥¶≥¶≥èËÊ<br/>è™∆¶¥ß’...</span></li></ul>';
	blog_view.innerHTML = blog_rss;
}

function addEvent(object, type, handler)
{
	if (object.addEventListener) {
		object.addEventListener(type, handler, false);
	} else if (object.attachEvent) {
		object.attachEvent(['on',type].join(''),handler);
	} else {
		object[['on',type].join('')] = handler;
	}
}

addEvent(window,'load',function() {
	rss_view();
});
