var country_city_list = [];
var windowWidth=$(window).width();
var area1=['660px', '540px'];
var area2=['460px', '360px'];
var area3=['460px', '400px'];
if(windowWidth<768){
	area1=['96%', '96%'];
	area2=['90%', '280px'];
	area3=['90%', '380px'];
}

function update_city(country){
    for(var i in country_city_list.list){
        if(country_city_list.list[i].countries_id == country){
            if(country_city_list.list[i].satate){
                $('#select_city').css('display','block');
                $('#select_city').html('');
                var cityListHtml = '';
				if(country_city_list.list[i].satate_default[0]){
				   cityListHtml += '<option value="" selected>'+country_city_list.list[i].satate_default[0]+'</option>';
			    }
                for(var j in country_city_list.list[i].satate){
                   cityListHtml += '<option value="'+country_city_list.list[i].satate[j].zone_id+'">'+country_city_list.list[i].satate[j].zone_name+'</option>';
                }
                $('#select_city').html(cityListHtml)
            }else{
                $('#select_city').css('display','none');
            }
        }
    }
}

function registerLayerFunc (){
    var registerLayer = layer.open({
         type: 1,
         title: false,
         area: area1,
         content: $('#register_layer'),
         shade:0,
         success: function(){
            $('.initLayerShade').show();
             $('body').bind('keydown', function(event) {
                 if(event.keyCode == '13'){
                     registerClickFun()
                 }
             });
            $('#registerLayerBtn').on('click',function(){
                registerClickFun()
            })
         },
         cancel: function(){
            // 右上角关闭事件的逻辑
			$("body").css("height","auto");
			$("body").css("overflow","auto");
            $('.initLayerShade').hide();
         }
    });
}

function registerClickFun(){
    var registerLoad = layer.load(2);
    $.ajax({
        type: "POST",
        url: "/index.php?main_page=create_account&jx=1",//"api/create_account?action=process"+urlParm,
        data: $('form[name="ajaxCreateAccountForm"]').serialize(),
        // async: false,
        //dataType: "json", //预期服务器返回数据的类型
        success: function(data){
            var new_data = JSON.parse(data)
            layer.close(registerLoad);

            if(new_data.code == '1'){
                //layer.msg('register success!');
                var reg = new RegExp("(^|&)" + "main_page" + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
                var r = window.location.search.substr(1).match(reg);  //匹配目标参数
                if (r != null) {
                    if(r[2] && r[2] == "logoff"){
                        window.location.href = '/';
                    }else{
                        location.reload()
                    }
                }else{
                    location.reload()
                };

            }else{
                layer.tips(new_data.error_result, '#registerLayerBtn', {
                    tips: [1, '#ff0000'],
                    time: 5000
                });
            }
        },
        error: function(xx) {
            layer.close(registerLoad);
        }
    })
}

function loginClickFun(){
    var layerLoad = layer.load(2);
    $.ajax({
        type: "POST",
        url: "/index.php?main_page=login&action=process",
        data: $('form[name="login"]').serialize(),
        success: function(data){
            var new_data = JSON.parse(data)
            layer.close(layerLoad);

            if(new_data.code == '0'){
                //layer.msg('register success!');
                var reg = new RegExp("(^|&)" + "main_page" + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
                var r = window.location.search.substr(1).match(reg);  //匹配目标参数
                if (r != null) {
                    if(r[2] && r[2] == "logoff"){
                        window.location.href = '/';
                    }else{
                        location.reload()
                    }
                }else{
                    location.reload()
                };

            }else{
                layer.tips(new_data.error_result, '#ajaxLoginBtn', {
                    tips: [1, '#ff0000'],
                    time: 5000
                });
            }
        },
        error: function(XMLHttpRequest) {
            console.log(XMLHttpRequest);
            layer.close(layerLoad);
            layer.msg("Error!!!", {anim: 6});
        }
    });
}

$(document).ready(
 function(){

	
   //$('#cart').delay(7000).hide(0);
   $(".login_box").on("click",function(){
		$('.initLayerShade').show();
       var loginLayer = layer.open({
         type: 1,
         title: false,
         area: area3,
         content: $('#login_layer'),
         shade:0,
         success: function(){
			$("body").css("height","100%");
			$("body").css("overflow","hidden");

             $('body').bind('keydown', function(event) {
                 if(event.keyCode == '13'){
                     loginClickFun()
                 }
             });

			$('#ajaxLoginBtn').click(function() {
                loginClickFun()
            });

            $("#forgotpswd").on("click",function(){
              layer.close(loginLayer); //关闭遮罩层
              var forgotpswdLayer = layer.open({
                  type: 1,
                  title: false,
                  area: area2,
                  content: $('#forgotpswd_layer'),
                  shade:0,
                  success: function(){
                     parent.layer.close(loginLayer);
                     $('.layui-layer-shade').css('z-index','99');

                     $('#forgotLayerBtn').on('click',function(){
                        var forgotlayerLoad = layer.load(2);
                        var forgot_email_address = $('#forgot_email_address').val();
                        $.ajax({
                            type: "GET",
                            url: "api/password_forgotten?action=process&email_address="+forgot_email_address,
                            // async: false,
                            dataType: "json", //预期服务器返回数据的类型
                            success: function(data){
                                layer.close(forgotlayerLoad);
                                if(data[0]){
                                    //找回密码成功
                                    layer.tips(data[1], '#forgot_email_address', {
                                      tips: [1, '#007fc3'],
                                      time: 5000,
                                      shade:0
                                    });
                                    setInterval(function(){
                                　　　　layer.close(forgotpswdLayer);
                                　　},5000);
                                }else{
                                    //错误提示
                                    layer.tips(data[1], '#forgot_email_address', {
                                      tips: [1, '#ff0000'],
                                      time: 5000,
                                      shade:0
                                    });
                                }
                            }
                        })
                     })

                  },
                  cancel: function(){
                     // 右上角关闭事件的逻辑
					 $("body").css("height","auto");
					 $("body").css("overflow","auto");
                     $('.initLayerShade').hide();
                  }
              });
            });

            $("#createAccountLayerBtn").on("click",function(){
                layer.close(loginLayer); //关闭遮罩层
                registerLayerFunc();
            });

         },
         cancel: function(){
            // 右上角关闭事件的逻辑
			$("body").css("height","auto");
			$("body").css("overflow","auto");
            $('.initLayerShade').hide();
         }
       });
   });

   //获取国家-城市
   $.ajax({
        type: "GET",
        url: "api/country",
       // async: false,
        dataType: "json", //预期服务器返回数据的类型
        success: function(data){
           //<option value="230">Viet Nam</option>
           country_city_list = data
           var countryListHtml = '';
           var cityListHtml = '';
           for(var i in data.list){
               $('#select_country').css('display','block');
               if(data.list[i].countries_id == data.count.countries_id){
                   countryListHtml += '<option value="'+data.list[i].countries_id+'" selected>'+data.list[i].countries_name+'</option>';
                   if(data.list[i].satate_default){
                       cityListHtml += '<option value="" selected>'+data.list[i].satate_default[0]+'</option>';
                   }
                   if(data.list[i].satate){
                       for(var j in data.list[i].satate){
                          if(data.list[i].satate_default){
                             if(data.list[i].satate[j].zone_name != data.list[i].satate_default[0]){
                                cityListHtml += '<option value="'+data.list[i].satate[j].zone_id+'">'+data.list[i].satate[j].zone_name+'</option>';
                             }
                          }else{
                             cityListHtml += '<option value="'+data.list[i].satate[j].zone_id+'">'+data.list[i].satate[j].zone_name+'</option>';
                          }

                       }
                       $('#select_city').css('display','block');
                       $('#select_city').html(cityListHtml)
                   }else{
                       $('#select_city').css('display','none')
                   }
               }else{
                   countryListHtml += '<option value="'+data.list[i].countries_id+'">'+data.list[i].countries_name+'</option>';
               }
           }
           $('#select_country').html(countryListHtml);

       }
   })

   $("#registerLogout").on("click",function(){
		   $("body").css("height","100%");
			$("body").css("overflow","hidden");
            registerLayerFunc();
   });

 });
