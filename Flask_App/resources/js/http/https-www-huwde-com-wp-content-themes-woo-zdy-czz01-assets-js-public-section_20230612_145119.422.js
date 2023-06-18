function towards_left(div) {
    var num = div.children().length;
    div.append(div.children().eq(1).clone());
    div.children().eq(num).css('left',100*(num-1)+'%');
    div.children().eq(0).remove();

    for (let a = 0; a < num; a++) {
        var dsbh = 100*a-100;
        div.children().eq(a).css('left',dsbh+"%");
    }
}

function towards_right(div) {
    var num = div.children().length;
    for (let a = 0; a < num; a++) {
        if (a == num-1) {
            div.children().eq(a).remove();
        }else{
            div.children().eq(a).css('left',100*a+"%");
        }
    }
    div.prepend(div.children().eq(num-2).clone());
    div.children().eq(0).css('left','-100%');
}


function threeFn(num){
	var gf = document.getElementById("uk-badge");
	gf.innerHTML= num -1 ;
}

function header(){
	var ww = $(window).width();
	$('.py-header').children('.py-header-nav').css({'position':'static','top':'0px','width':ww}); 
	if(!$('.py-header').children('.py-header-nav').is('.uk-sticky')){	
		$('.py-header').children('.py-header-nav').addClass('uk-sticky uk-sticky-fixed uk-active uk-sticky-below');
	}
	var hh_g = 80;
	if(ww == 640){
		hh_g = 78;
	}else if(ww < 640){
		hh_g = 65;		
	}
	if($('.py-header').children('div').is('.uk-sticky-placeholder')){
		$('.py-header').children('.uk-sticky-placeholder').css('height',hh_g);
	}else{
		$('.py-header').children('.py-header-nav').after('<div class="uk-sticky-placeholder" style="height:'+hh_g+'px; margin: 0px;"></div>');
	}
	
	$('.py-header').children('.py-header-nav').children().children('.uk-navbar-right').children('.uk-navbar-toggle').addClass('uk-icon uk-navbar-toggle-icon');
	$('.py-header').children('.py-header-nav').children().children('.uk-navbar-right').children('.uk-navbar-toggle').html('<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="navbar-toggle-icon"><rect y="9" width="20" height="2"></rect><rect y="3" width="20" height="2"></rect><rect y="15" width="20" height="2"></rect></svg>');

	var lan = $('.py-language').children('#py-language-dropdown').children('ul').children('li').eq(0).children('a').html();
	$('.py-language').children('.uk-button').html(lan);
	var cur = $('.py-currency').children('#py-currency-dropdown').children('ul').children('li').eq(1).children('a').html();
	$('.py-currency').children('.uk-button').html(cur);

}


function product_ajax(moreURL) {
    if (moreURL.length){
      $.ajax({
        type: 'GET',
        dataType: 'html',
        url: moreURL,
        beforeSend:function(){
            var ej = 100;
            $('.zdy-quan-cen').css('height',ej+'px');
            $('.zdy-quan-cen').children('.loding').css('display','block');
            $('.zdy-quan-cen').children('.loding').children('img').css('width','84px');
        },
        complete: function (data) {
            var dh = $(".woocommerce-product-gallery--with-images", data.responseText);
            if(dh.length){
                $('.zdy-quan-cen').css('height','100%');
                $('.zdy-quan-close').css('display','block');
                $('.zdy-quan-cen').children('.loding').css('display','');
                $('.zdy-quan-cen .woo_zdy_czz01-grid .zdy-fqe-left').append(dh.html());
                var figure = $('.zdy-quan-cen .woo_zdy_czz01-grid .zdy-fqe-left').children().children('figure');
                figure.children('div').eq(0).addClass('action');
                var dsnjks = figure.children();
                figure.after('<ul class="sdbhgs"></ul>');
                for (let a = 0; a < dsnjks.length; a++) {
                    var src = dsnjks.eq(a).attr('data-thumb');
                    if ( a == 0 ) {
                        figure.next().append('<li class="action"><img src="'+src+'" /></li>');
                    }else{
                        figure.next().append('<li><img src="'+src+'" /></li>');
                    }
                }

            }else{
                $('#butt_vue').css('display','');
                $('.zdy-quan-cen').css('height','');
                $('.zdy-quan-cen').children('.loding').css('display','');
                $('.zdy-quan-cen').children('.loding').children('img').css('width','');
            }

            var jhg = $(".entry-summary-inner .entry-summary-box", data.responseText);
            if (jhg.length) {
                $('.zdy-quan-cen .woo_zdy_czz01-grid .zdy-fqe-right').append(jhg.children('.product_title-wrapper').children('h1').clone());
                $('.zdy-quan-cen .woo_zdy_czz01-grid .zdy-fqe-right').append(jhg.children('.price').clone());
                $('.zdy-quan-cen .woo_zdy_czz01-grid .zdy-fqe-right').append(jhg.children('form').clone());
                var form = $('.zdy-quan-cen .woo_zdy_czz01-grid .zdy-fqe-right ').children('form');

                var pd = form.children('div').is('.quantity');
                if (pd){
                    var div = form.children('.quantity'); 
                }else{
                    var div = form.children('.single_variation_wrap').children().eq(1).children('.quantity');
                }

                var mjn = "<span class='input-qty-pm ghjags'><button type='button' class='input-pm-act input-pm-minus zdy-cp-minus'>-</button>";
                div.append(mjn+'<button type="button" class="input-pm-act input-pm-plus zdy-cp-plus">+</button></span>');
                div.children('span').children('.input-pm-minus').after(div.children('input').clone());
                div.children('input').remove();

                var hghujhu = form.children().is('table');
                if (hghujhu) {
                    var tr = form.children('table').children('tbody').children('tr');
                    variations_table(tr);
                    variations_option(tr);
                }
            }
            product_sdfs_dfsnh();
        }
      });
    }
  }

function variations_table(tr){
    for (let a = 0; a < tr.length; a++) {
        var td = tr.eq(a).children('.value');
        var option = td.children('select').children('option');
        var jhg = '';
        for (let b = 1; b < option.length; b++) {
            var nu = option.eq(b).attr('value');
			jhg += '<button type="button" class="uk-button uk-button-default uk-button-small woo-jiujs-jhu zdy-quanbu-jiujs-jhu" data-value="'+nu+'" data-key="'+b+'">'+nu+'</button>';	
        }
        td.after("<td class='py-variation-select count-2'>"+jhg+"</td>");
    }
}

function variations_option(tr) {
    if (tr.length) {
        for (let a = 0; a < tr.length; a++) {
            var td = tr.eq(a).children('td');
            td.eq(2).children().eq(0).addClass('uk-active');
        }
    }
    tr.parent().parent().next().children().eq(0).removeClass('single_variation');
    variations_price(tr);
}

function variations_price(tr) {
    var tbody = tr.parent();
    var dkmm = tr.length;

    var dbjhsd = '';
    for (let a = 0; a < dkmm; a++) {
        var td = tr.eq(a).children().eq(2);
        var name = td.children('.uk-active').attr('data-value');
        dbjhsd += name+'&';
    }
    var li = tbody.parent().prev().children('ul').children('li');
    for (let b = 0; b < li.length; b++) {
        var dsnjsn = li.eq(b).attr('darsc');
        if (dsnjsn == dbjhsd) {
            var value_id = li.eq(b).attr('variation_id');
            var htmmm = li.eq(b).html();
            tbody.parent().next().children().eq(0).html(htmmm);
            tbody.parent().next().children('div').eq(1).children('.variation_id').attr('value',value_id);
            tbody.parent().next().children('div').eq(1).children('.variation_id').val(value_id);
        }
    }
}

function  close_butt_vue() {
	$('.zdy-quan-cen').css('height','0px');
    $('#butt_vue').css('display','');
	$('.zdy-dnhfenij-vebgh').children().empty();
}

function cart_list_btn(div,num) {
    var a = div.next();
	var li = div.parent();
	var href = a.attr('href').replace('remove_item','cart_item_key');
	var dnjh = href.split('&')[0];
	var url = dnjh+'&cart_item_qty='+num;
    console.log(url);
	add_cart_mini_ajax(url,li);
}

function add_cart_ajax(moreURL,gdsa) {
    if (moreURL.length){
        $.ajax({
          type: 'GET',
          dataType: 'html',
          url: moreURL,
          beforeSend:function(){
            gdsa.parent().children('.mini_list-fli').css('display','block');
          },
          complete: function (data) {
            gdsa.parent().children('.mini_list-fli').css('display','');

            $('#py-mini-cart').children('script').remove();
            $('#py-mini-cart').append("<script id='zdy-snjh-dfsnjwe' src='/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js'></script>");
            setTimeout(function () { 
                $('.zdy-sdbhj-dsfnjsi').remove();
             },1000);
          }
        });
      }
}

function add_cart_mini_ajax(moreURL,gdsa) {
    if (moreURL.length){
        $.ajax({
          type: 'GET',
          dataType: 'html',
          url: moreURL,
          beforeSend:function(){
            gdsa.children('.mini_list-fli').css('display','block');
          },
          complete: function (data) {
            gdsa.children('.mini_list-fli').css('display','');
            mini_cart_list();
            // setTimeout(function () { 
            //     $('#py-mini-cart').children('script').remove();
            //     $('#py-mini-cart').append("<script id='zdy-snjh-dfsnjwe' src='/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js'></script>");
            //  },1000);
        }
        });
      }
}

function  mini_cart_list() {
    var pd = $('ul').is('#mini_cart_sff');
    if (pd) {
        var ul = $('#mini_cart_sff');
        var li = ul.children('li');
        var num = li.length;
        if (num > 0) {
            var z_num = 0;
            var z_dhdj = 0;
            for (let a = 0; a < num; a++) {
                var qty = li.eq(a).children('.quantity').children('span').children('input').val();
                var sgg = li.eq(a).children('.woocommerce-Price-amount').attr('data-price');
                var price = sgg.replace('$','');
                var dhfbh = price.replace(',','');
                var z_price = Number(dhfbh)*Number(qty);
                z_num += Number(qty);
                z_dhdj += Number(z_price.toFixed(2));
            }

            var dsnhj = z_dhdj.toFixed(2);
            var span = $('#mini_cart_total').children('strong').children('span');
            span.attr('data-price','$'+dsnhj);
            var jh = span.children().children('span').text();
            span.children().html('<span class="woocommerce-Price-currencySymbol">'+jh+'</span>'+dsnhj);

            $('#zdy_cart_num').eq(0).text(z_num);
            $('#zdy_cart_num').eq(1).text(z_num);
        }
    }
}


function product_price() {
    var div = $('.woocommerce-Price-amount');
    for (let a = 0; a < div.length; a++) {
        var dmj = div.eq(a).children().text();
        div.eq(a).attr('data-price',dmj);
    }
    product_sdfs_dfsnh();
}

function product_sdfs_dfsnh() {
    var dakkj = $('.woocommerce-Price-amount');
    var num = dakkj.length;
    for (let a = 0; a < num; a++) {
        var span = dakkj.eq(a);
        var price = span.attr('data-price');
        if (price == undefined) {
            price = span.children().text();
            span.attr('data-price',price);
        }

        var dsn = price.replace("$",'');

        var li = $('.zdy-currency-msg').children('ul').children('.active');
        var fl = li.attr('fl');
        var fh = li.attr('fh');

        var bdsh = product_convert(dsn,fl);

        var html = "<span class='woocommerce-Price-currencySymbol'>"+fh+"</span>";

        if (fl == 1) {
            html += bdsh;
        }else{
            var whweju = li.children('a').attr('data-currencycode');
            html += bdsh+" "+whweju;
        }
        span.children().html(html);
    }
}


function product_convert(price,fl) {
    var dsjk =  Number(price)*Number(fl);
    var dsnjhsn = dsjk.toFixed(2);
    return dsnjhsn;
}