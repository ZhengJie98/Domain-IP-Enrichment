
$(document).ready(function(){
	var ben = $('section').is('.widget_media_gallery');
	if (ben) {
		var section = $('section');
		var num = section.length;
		for (let a = 0; a < num; a++) {
			var div = section.eq(a).children('.gallery');
			var figure = div.children('figure');
			var len = figure.length;
			var heig = figure.eq(0).height();
			div.css({'height':heig,'max-height':'630px'});
			div.prepend('<div class="zdy-gf-banne"></div>');
			for (let b = 0; b < len; b++) {
				figure.eq(b).css('display','none');
				var src = figure.eq(b).children().children().attr('src');
				if (src == undefined) {
					src = figure.eq(b).children().children().children().attr('src');
				}
				div.children('.zdy-gf-banne').append('<div style="background-image:url('+src+');left:'+100*b+'%;"></div>');
                if (b == len-1) {
                    div.children('.zdy-gf-banne').prepend('<div style="background-image:url('+src+');left:-100%;"></div>');
                }
			}
            if (len > 1) {
                var htm = "<span class='towards towards-left'>&#x2329;</span><span class='towards towards-right'>&#x232A;</span>";
                div.children('.zdy-gf-banne').after(htm);
            }
		}
	}
})

$(document).on("click",".towards-left",function(){
    var div = $(this).prev();
    towards_left(div);
})

$(document).on("click",".towards-right",function(){
    var div = $(this).prev().prev();
    towards_right(div);
})


$(document).ready(function(){
    $.extend({
       show:function(){
            var ben = $('section').is('.widget_media_gallery');
            if (ben) {
                var section = $('section');
                var num = section.length;
                for (let a = 0; a < num; a++) {
                    var div = section.eq(a).children('.gallery').children('.zdy-gf-banne');
                    towards_right(div);
                    product_sdfs_dfsnh();
                }
            }
       }
    });
    setInterval("$.show()",8000);
});
    