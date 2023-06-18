// 第三种 通过方法响应点击事件

$(window).bind("load resize",function(){
    header();
 });

$(document).on("click",'body',function(e){
	if(!$(e.target).closest(".item--currency_icon").length){
		var pd = $('.item--currency_icon').is('.active');
		if (pd) {
			$('.item--currency_icon').removeClass('active');
		}
	}
})

$(document).on("click","#zdy-mini-cart",function(){
	$('#py-mini-cart').addClass("uk-offcanvas uk-offcanvas-overlay uk-open");
	$('#py-mini-cart').css('display','block');
	$('#py-mini-cart').children('.uk-offcanvas-bar').addClass("uk-offcanvas-bar-animation uk-offcanvas-slide mymove");
	product_sdfs_dfsnh();
})

$(document).on("click","#py-mini-cart",function(e){
	
	if (!$(e.target).closest(".uk-offcanvas-bar").length) {
        $(this).children('.uk-offcanvas-bar').removeClass("uk-offcanvas-bar-animation uk-offcanvas-slide mymove");
		$(this).children('.uk-offcanvas-bar').addClass("mydhjs");
		setTimeout(function(){
			$("#py-mini-cart").children('.mydhjs').removeClass("mydhjs");
			$("#py-mini-cart").css('display','');
			$("#py-mini-cart").removeClass("uk-offcanvas uk-offcanvas-overlay uk-open");
		},1000);
	
    }
	
})


$(document).on("click",".item--currency_icon",function(e){
	
	if(!$(e.target).closest(".header-currency-modal-wrapper").length){
		var pd = $(this).is('.active');
		if (pd) {
			$(this).removeClass('active');
		}else{
	
			$(this).addClass('active');
		}
	}
})

$(document).on("click",".zdy-currency-msg ul li",function(){
	var pd = $(this).is('.active');
	if (!pd) {
		var inde = $(this).index();
		$('.zdy-currency-msg').children().children().removeClass('active');
		$(this).addClass('active');
		$.cookie('currency_num',inde,{path:'/'});
		product_sdfs_dfsnh();
	}
})

$(document).ready(function(){
	var num = $.cookie('currency_num');
	if (num != undefined) {
		var li = $('.zdy-currency-msg').children().children();
		li.removeClass('active');
		li.eq(num).addClass('active');
		product_price();
	}
})

$(document).on("click",".input-pm-plus",function(){

	var o = $(this).prev().val(); //获取上一个节点值
	$(this).parent('.input-qty-pm').parent('.quantity').next().attr("data-quantity",o);
})


$(document).on("click",".input-pm-minus",function(){
	var i = $(this).next().val(); //获取上一个节点值
	$(this).parent('.input-qty-pm').parent('.quantity').next().attr("data-quantity",i);
})

$(document).on("click",".zdy-cp-minus",function(){
	var i = $(this).next().val(); //获取上一个节点值
	if (Number(i) > 1) {
		var jg = Number(i)-1;
		$(this).next().val(jg);
		$(this).parent('.input-qty-pm').parent('.quantity').next().attr("data-quantity",jg);
	}
})

$(document).on("click",".zdy-cp-plus",function(){
	var o = $(this).prev().val(); //获取上一个节点值
	var jg = Number(o)+1;
	$(this).prev().val(jg);
	$(this).parent('.input-qty-pm').parent('.quantity').next().attr("data-quantity",jg);
})


$(document).on("click",".input-mini-plus",function(){
	
	var input =  $(this).prev();
	var o = input.val(); //获取上一个节点值
	var num = Number(o)+1;
	input.val(num);
	var div = $(this).parent().parent();
	cart_list_btn(div,num);
	
	return false; 
})

$(document).on("click",".input-mini-minus",function(){

	var input = $(this).next();
	var i = Number(input.val()); //获取下一个节点值
	if(i > 1){
		var num = i-1;
		input.val(num);
		var div = $(this).parent().parent();
		cart_list_btn(div,num);
	}else{
		$(this).parent().parent().next().trigger("click");
	}	
	return false; 
})

$(document).on("change",".mini_cart_input",function(){
	var num = Number($(this).val());
	if(num > 1){
		var div = $(this).parent().parent();
		cart_list_btn(div,num);
	}else{
		$(this).parent().parent().next().trigger("click");
	}
	return false;	
})

$(document).on("click",".variations_add_to_cart_button",function(){

	var gdsa = $(this);
	var par = gdsa.parent();

	var num = $(this).attr('data-quantity');
	var cart_id = $(this).next().attr('value');
	var variation_id = par.children('.variation_id').attr('value');
	var hg = par.parent().parent().attr('url');
	var url = hg+"?add-to-cart="+cart_id+"&variation_id="+variation_id+"&quantity="+num;
	add_cart_ajax(url,gdsa);
	return false; // 返回false，阻止跳转
})

/**产品添加购物车**/
$(document).on("click","#index_add_wsj",function(){
	console.log('测试');
	var url = $(this).attr('data_item');
	var gdsa = $(this).parent().parent();
	add_cart_ajax(url,gdsa);
})

/**产品添加购物车**/
$(document).on("click","#list_add_wsj",function(){
	var url = $(this).attr('data_item');
	var gdsa = $(this).parent();
	add_cart_ajax(url,gdsa);
})



$(document).on("click",".grouped_add_to_cart_button",function(){
	
	$(this).children('span').eq(1).css({"opacity":"1","transform":"translate3d(0px,0px,0px)","transition":"all 0s cubic-bezier(0, 0, 0, 0) 0s","display":"block"});
	var zj = $(this);
	var f = zj.prev();
	
	var o = f.is('input');
	
	var hg = zj.parent('#grouped_form').attr("url");
	
	var y = zj.offset().top - $(document).scrollTop();//元素在当前视窗距离顶部的位置
	var x = zj.offset().left;
	
	var cart_y = $('#uk-badge').offset().top - $(document).scrollTop();
	var cart_x = $('#uk-badge').offset().left;
	

	if(o){
		var cp = f.prev();
		if(cp.is('table')){
			var tr = cp.children('tbody').children('tr');
			if(tr.length > 0){
				
				tr.each(function () {

					var cart_id = $(this).attr("id").replace("product-","");
					var quantity = $(this).children('td').eq(0).children('div').children('span').children('input').val();

					if(quantity > 0){
						var url = hg + "?add-to-cart="+cart_id+"&quantity="+quantity;
						ajax_from_ady(url);

						zj.children('span#go_globule').css({"transform":"translate3d("+(cart_x-x)+"px,"+(cart_y-y)+"px,55px)","transition":"all 2s cubic-bezier(0,.68,0,1) 0s","opacity":"0"});
					}
				});
				setTimeout(function(){		
					var obj = document.getElementById("go_globule");
					obj.style.display = 'none';	
				}, 2000);
			}
		}
	}
	
	
	return false; // 返回false，阻止跳转

})


function ajax_from_ady(url){
	var host = window.location.host;
	
	//创建xmlHttp对象
	var xmlHttp;
	if(window.ActiveXObject){
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	else if(window.XMLHttpRequest){
		xmlHttp = new XMLHttpRequest();
	}

	//获取表单值
	var datastr = "update_my_cart";
	var url = url;

	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4){
			//alert(xmlHttp.responseText);
		}
	}
	
	//提交数据
	xmlHttp.open("POST",url,false);
	xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlHttp.send(datastr);
}

/**产品添加购物车**/
$(document).on("click","#cp_add_wsj",function(){
	var fd = $(this).parent().next().attr('dataid');
	var sd = $(fd).children('form').children('button').attr('class');
	if(sd == undefined){
		$(fd).children('form').children('div').children('div').eq(1).children('button').click();
	}else{
		$(fd).children('form').children('button').click();
	}
})


$(document).on("click","#wisnhju",function(){
	var href = $(this).parent().parent().prev().attr('href');
	product_ajax(href);
	$('#butt_vue').css('display','block');
})

$(document).on("click",".sdbhgs li",function(){
	var pd = $(this).is('.action');
	if (!pd) {
		$(this).parent().children('li').removeClass('action');
		$(this).addClass('action');
		var num = $(this).index();
		$(this).parent().prev().children().removeClass('action');
		$(this).parent().prev().children().eq(num).addClass('action');
	}
})

$(document).on("click",".uk-modal-close-default",function(){
	$(this).parent().parent().css('display','none');
	if($(this).parent().parent().parent().is('#butt_vue')){
		$('#butt_vue').css('display','none');
	}
})

function tan_kuan(){
	 $('#tan_kuan').html('operate successfully').addClass('alert-success').show().delay(1500).fadeOut();
}


$(document).on("click",".flex-control-thumbs li",function(){
	var num = $(this).index();
	var wid = $(this).parent('.flex-control-thumbs').prev().prev().width();
	if(num > 0){
		$(this).parent('.flex-control-thumbs').prev().children('figure').css("transform","translate3d(-"+wid*num+"px, 0px, 0px)");
	}
	
})

$(document).on("click",".pswp__button--close",function(){
	//alert("关闭");
	//var num = $(this).index();
	$('.pswp--supports-fs').css('display','none');
	//$('.pswp__container').empty();
	$('.pswp__img').css('display','none');
	
})

$(document).on("click",".pswp__container",function(){

	$('.pswp--supports-fs').css('display','none');
	$('.pswp__img').css('display','none');
	
})



$(document).on("click","#shipping_method li",function(){
	var sasa  = $(this).index();
	setTimeout(function(){
		$('#shipping_method li').eq(sasa).children('input').checked = true;
		$('#shipping_method li').eq(sasa).children('input').attr('checked',true);
	}, 3000);
})

$(document).on("click",".woo-jiujs-jhu",function(){
	var pd = $(this).is('.uk-active');
	if (!pd) {
		var gfd = $(this).parent();
		gfd.children().removeClass('uk-active');
		$(this).addClass('uk-active');
		var num = $(this).attr('data-key');
		var name = $(this).attr('data-value');
		var sel = gfd.prev().children();
		sel.attr('data-shnsd',num);
		sel.val(name);

		var tbody = gfd.parent().parent();
		var tr = tbody.children('tr');
		variations_price(tr);
	}

})


$(document).on("click","#butt_vue",function(e){

	if(!$(e.target).closest(".zdy-quan-cen").length){
		close_butt_vue();
	}
})

$(document).on("click",".zdy-quan-close",function(e){
	close_butt_vue();	
})


$(document).ready(function(){  
	var sdnj = window.location.pathname;
	var shg = window.location.search;

	var product = new RegExp('/product/');

	if(product.test(sdnj)){
		var form = $('.entry-summary-box form');
		var pd = form.children().is('table');
		if (pd) {
			var tr = form.children('table').children('tbody').children('tr');
			variations_table(tr);
			variations_option(tr);
		}
	}

}); 


//Whether to scroll
$(window).scroll(function(){
    //Scroll height
    var top_height = $(window).scrollTop();
	var wid = $(window).width();
	if (wid > 1024) {
		if (top_height > 100) {
			$('#cb-row--header-bottom').addClass('zdy-fj-fnjknsdj');
		}else{
			$('#cb-row--header-bottom').removeClass('zdy-fj-fnjknsdj');
		}
	}else{
		if (top_height > 60) {
			$('#cb-row--header-main').addClass('zdy-fj-fnjknsdj');
		}else{
			$('#cb-row--header-main').removeClass('zdy-fj-fnjknsdj');
		}
	}
})

