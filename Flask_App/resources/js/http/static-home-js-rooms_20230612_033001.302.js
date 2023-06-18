function my_success(info,url) {
    layer.open({
        content: info,
        skin: 'msg',
        time: 1 ,//2秒后自动关闭
        end: function(elem){
            window.location.href=url;
        }
    });
}
function my_error(info) {
    layer.open({
        content: info,
        skin: 'msg',
        time: 2
    });
}
function random() {
	var txt = $('#open_notice').text();
    if (txt = '开奖中') {
		var run = setInterval(function() {
	    	$('.num01').text(parseInt(Math.random() * 9));
	        $('.num02').text(parseInt(Math.random() * 9));
	        $('.num03').text(parseInt(Math.random() * 9));
	        $('.num04').text(parseInt(Math.random() * 9));
            $('.num05').text(parseInt(Math.random() * 9));
	     }, 200);
	 }
	 setTimeout(function() {
	   clearInterval(run);
	}, 3000);
}