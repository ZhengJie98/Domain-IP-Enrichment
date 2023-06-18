
    var EC={
        'Api': '/api.php/provide/',
        'ListApi' : '/api.php/xiao/vod',
        'Url': document.URL,
        'Cookie': {
            'Set': function(name,value,days){
                var exp = new Date();
                exp.setTime(exp.getTime() + days*24*60*60*1000);
                var arr=document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
                document.cookie=name+"="+encodeURIComponent(value)+";path=/;expires="+exp.toUTCString();
            },
            'Get': function(name){
                var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
                if(arr != null){ return decodeURIComponent(arr[2]); return null; }
            },
            'Del': function(name){
                var exp = new Date();
                exp.setTime(exp.getTime()-1);
                var cval = this.Get(name);
                if(cval != null){ document.cookie = name+"="+encodeURIComponent(cval)+";path=/;expires="+exp.toUTCString(); }
            }
        },
        'Parameter':function(){
            var url = location.search;
            var url = decodeURI(url);
            var theRequest = new Object();
            if (url.indexOf("?") != -1) {
                var str = url.substr(1);
                strs = str.split("&");
                for(var i = 0; i < strs.length; i ++) {
                    theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); }
            }
            return theRequest;
        },
        'Ajax':function(url,type,dataType,data,sfun,efun,cfun){
            type=type||'get';
            dataType=dataType||'json';
            data=data||'';
            efun=efun||'';
            cfun=cfun||'';

            $.ajax({
                url:url,
                type:type,
                dataType:dataType,
                data:data,
                timeout: 5000,
                beforeSend:function(XHR){

                },
                error:function(XHR,textStatus,errorThrown){
                    if(efun) efun(XHR,textStatus,errorThrown);
                },
                success:function(data){
                    sfun(data);
                },
                complete:function(XHR, TS){
                    if(cfun) cfun(XHR, TS);
                }
            })
        },
        'All': {
            'Flashback':function(){
                $("#zxdaoxu").each(function () {
                    $(this).on("click", function (e) {
                        e.preventDefault();
                        $(this).parent().parent().parent().find(".daoxu").each(function () {
                            var playlist = $(this).find("li");
                            for (let i = 0, j = playlist.length - 1; i < j;) {
                                var l = playlist.eq(i).clone(true);
                                var r = playlist.eq(j).replaceWith(l);
                                playlist.eq(i).replaceWith(r);
                                ++i;
                                --j;
                            }
                        });
                    });
                });
            },
            'Tag' :function(){
                $("#tag a").click(function(){
                    $(this).addClass("active").siblings().removeClass("active");
                    index = $("#tag a").index(this);
                    let q = $("#tagContent #playsx").eq(index);
                    q.fadeIn(800).siblings().hide();
                    q.addClass("daoxu").siblings().removeClass("daoxu");
                });
            },
            'slide': function(){
                var mySwiper1 = new Swiper('.swiper-container1',{
                    paginationClickable: true,
                    slidesPerView:'auto',
                });
            },
            'Details':function(){
                $('.ectogg').click(function(){
                    if($(this).children('.iconfont').hasClass("icon-zhankaixiajiantou-")){
                        $(this).removeClass('away');
                        $('.detailsTxt').css("height","auto");
                        $(this).html('닫기<i class="iconfont icon-shouqi"></i>');
                    }else{
                        $(this).addClass('away');
                        $('.detailsTxt').css("height","40px");
                        $(this).html('열기<i class="iconfont icon-zhankaixiajiantou-"></i>');
                    }
                })
            },
            'Top':function(){
                $('.fixed-nav .icon-fenxiang').tipso({useTitle: false, delay:2, background:'#333', width:100});
                $('.fixed-nav .icon-fankuixuanzhong').tipso({useTitle: false, delay:2, background:'#333' ,position:'right', width:100});

                let url = '<img class="mama" src="">';
				//let url = '<img class="mama" src="//api.pwmqr.com/qrcode/create/?url='+EC.Url+'">';
                $('.fixed-nav .icon-QR').tipso({useTitle: false, delay:2, background:'#333' ,content:url ,position:'bottom', width:100});

                $('.ecTop').click(function(){
                    let mi = $(this).attr('data-id');
                    if(mi == 6){
                        $("html,body").animate({scrollTop: $("body").offset().top}, 1000);
                    }else if(mi == 66){
                        EC.All.Copy();
                    }else if(mi > 0){
                        $("html,body").animate({scrollTop: $("#listId"+mi).offset().top}, 1000);
                    }
                })
                $(".ec-lrmenukey").on('click', function (e) {
                    $('.ec-lrmenu').toggleClass('ec-lrshow');
                });
                $(".history").on("click",".icon-shanchu", function() {
                    EC.Cookie.Del("ec_history");
                    EC.All.message('','검색기록 삭제 성공');
                    $('.history').html('<div class="movie-list-header cf"><span class="l">검색기록</span><a href="javascript:"  class="iconfont r icon-shanchu"></a></div><a href="javascript:" class="movie-list-subject cr2">기록이 없습니다</a></div>')
                });
                if($(".ShareButton").length) {
                    $(".ShareButton").click(function(){
                        EC.All.Copy();
                    })
                }
                $(".history_box").on("click",".historyClear", function() {
                    EC.Vod.Clear();
                });
            },
            'Copy':function(){
                $('#fixedUrl').html(window.location.href);
                let e = $('#fixedUrl');
                e.select();
                document.execCommand("Copy");
                EC.All.message('','복사성공~~');
            },
            'Swiper' :function(){
                var swiper1 = new Swiper('.swiper-container', {
                    loop : true,
                    effect : 'fade',
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    autoplay:true,
                });
            },
            'Navigation':function(){
                $('#react-burger-menu-btn').click(function(){
                    $('.bm-overlay').parent().show();
                    $(".header").parent().addClass("deviation");
                    $('.bm-menu-wrap').addClass("bm-list-right");
                })
                $(".icon-close2").click(function(){
                    $(".header").parent().removeClass("deviation");
                    $('.bm-menu-wrap').removeClass("bm-list-right");
                    $('.bm-overlay').parent().hide();
                })
                $(".bm-overlay").click(function(){
                    $(".header").parent().removeClass("deviation");
                    $('.bm-menu-wrap').removeClass("bm-list-right");
                    $('.bm-overlay').parent().hide();
                })
            },
            'Lazy':function(e){
                $(e).lazyload({effect: "fadeIn"});
                $('.icon-app').tipso({useTitle: false, delay:2, background:'#333', width:100});
            },
            'message':function(title,message,tx= ''){
                iziToast.show({
                    class: 'test',
                    titleColor: '#fff',
                    messageColor: 'hsla(0,0%,100%,.6)',
                    color:'rgba(18,19,24,.9)',
                    icon: 'icon-contacts',
                    title: title,
                    message: message,
                    position: 'topCenter',
                    transitionIn: 'flipInX',
                    transitionOut: 'flipOutX',
                    progressBarColor: '#22ce6b',
                    image: tx,
                    imageWidth: 70,
                    layout:2,
                    timeout:1000,
                    onClose: function(){
                        console.info('onClose');
                    },
                });
            },
            'Doen':function (){
                if($("#drop-down").length>0) {
                    let page = 1;
                    $(window).scroll(function() {
                        let btn = $(".load-message");
                        if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
                            $(btn).html('로딩중......');
                            if(page<20){
                                page = page+1;
                                EC.TypeList.List('?type=1&page='+page+'&limit=24', '.movie-list-body',2);
                                $(btn).html('더보기');
                            }else{
                                $(btn).html('분류를 다시 선택해주세요');
                            }
                        }
                    });
                }
            },
            'CommentInit':function (){
                if($(".mac_comment").length>0) {
                    let name = $("#CommentInit");
                    EC.Comment.Login = name.attr('data-login');
                    EC.Comment.Verify = name.attr('data-Verify');
                    EC.Comment.Init();
                    EC.Comment.Show(1);
                }
            }
        },
        'History': {
            'BoxShow':0,
            'Limit':8,
            'Days':7,
            'Json':'',
            'Init':function(){
                $(".search-field").click(function(){$('.suggestions').slideDown()})
                $(".search-box").keydown(function(){$(".suggestions").slideUp()});
                $(".header-box").mouseleave(function(){$(".suggestions").slideUp()})
                $('.search-button').click(function(){
                    let val = $('.search-field').val();
                    let url = $('#search').attr('action');
                    if(val.length > 1){
                        EC.History.Set(val,url);
                    }
                });

                var jsondata = [];
                if(this.Json){
                    jsondata = this.Json;
                }else{
                    var jsonstr = EC.Cookie.Get('ec_history');
                    if(jsonstr != undefined){
                        jsondata = eval(jsonstr);
                    }
                }
                let html = '<div class="movie-list-header cf"><span class="l">검색기록</span><a href="javascript:" class="iconfont r icon-shanchu"></a></div>';
                if(jsondata.length > 0){
                    for(let i=0; i<jsondata.length; i++){
                        html +='<a href="'+jsondata[i].url+'?wd='+jsondata[i].name+'" class="movie-list-subject cr2">'+jsondata[i].name+'</a>';
                    }
                }else{
                    html +='<a class="movie-list-subject cr2" href="javascript:">기록이 없습니다.</a>';
                }
                html +='</div>';
                $('.history').prepend(html);
            },
            'Set':function(name,url){
                var jsondata = EC.Cookie.Get('ec_history');
                if(jsondata != undefined){
                    this.Json = eval(jsondata);
                    for(let i=0;i<this.Json.length;i++){
                        if(this.Json[i].name == name){
                            return false;
                        }
                    }
                    jsonstr = '{log:[{"name":"'+name+'","url":"'+url+'"},';
                    for(let i=0; i<this.Json.length; i++){
                        if(i<= this.Limit && this.Json[i]){
                            let ecRepeat = this.Json[i].name;
                            if(ecRepeat === name){
                            }else{
                                jsonstr += '{"name":"'+this.Json[i].name+'","url":"'+this.Json[i].url+'"},';
                            }
                        }else{
                            break;
                        }
                    }
                    jsonstr = jsonstr.substring(0,jsonstr.lastIndexOf(','));
                    jsonstr += "]}";
                }else{
                    jsonstr = '{log:[{"name":"'+name+'","url":"'+url+'"}]}';
                }
                this.Json = eval(jsonstr);
                EC.Cookie.Set('ec_history',jsonstr,this.Days);
            },
        },
        'Vod': {
            'BoxShow':0,
            'Limit':8,
            'Days':7,
            'Json':'',
            'Init':function(){
                if($('.history_box').length ==0){return;}
                $('.history-box').hover(function() {$('.history_box').show();}, function() {$('.history_box').hide();});
                var jsondata = [];
                if(this.Json){
                    jsondata = this.Json;
                }else{
                    var jsonstr = EC.Cookie.Get('mac_history');
                    if(jsonstr != undefined){
                        jsondata = eval(jsonstr);
                    }
                }
                let html ='<a href="javascript:" class="historyClear iconfont r icon-shanchu"></a><ul class="record" style="padding:20px 0">';
                if(jsondata.length > 0){
                    for($i=0; $i<jsondata.length; $i++){
                        html +='<li><a href="'+jsondata[$i].link+'" target="_blank" class="l txtHide">'+jsondata[$i].name+'</a><a href="'+jsondata[$i].link+'" target="_blank" ><span class="r cor4">영상보기</span></a></li>';
                    }
                }else{
                    html +='<div class="nodata"><p><img src="https://static.hitv.com/pc/img/a49d610.png"></p><p>시청기록이 없습니다.</p></div>';
                }
                html += '</ul>';
                $('.history_box').prepend(html);

                if($(".mac_history_set").attr('data-name')){
                    let $that = $(".mac_history_set");
                    EC.Vod.Set($that.attr('data-name'),$that.attr('data-link'),$that.attr('data-mid'));
                }
            },
            'Set':function(name,link,mid){
                if(!link){ link = document.URL; }
                var jsondata = EC.Cookie.Get('mac_history');
                if(jsondata != undefined){
                    this.Json = eval(jsondata);

                    for($i=0;$i<this.Json.length;$i++){
                        if(this.Json[$i].link == link){
                            return false;
                        }
                    }
                    jsonstr = '{log:[{"name":"'+name+'","link":"'+link+'","mid":"'+mid+'"},';
                    for($i=0; $i<this.Json.length; $i++){
                        if($i<= this.Limit && this.Json[$i]){
                            let ecRepeat = this.Json[$i].name;
                            if(ecRepeat === name){
                            }else{
                                jsonstr += '{"name":"'+this.Json[$i].name+'","link":"'+this.Json[$i].link+'","mid":"'+this.Json[$i].mid+'"},';
                            }
                        }else{
                            break;
                        }
                    }
                    jsonstr = jsonstr.substring(0,jsonstr.lastIndexOf(','));
                    jsonstr += "]}";
                }else{
                    jsonstr = '{log:[{"name":"'+name+'","link":"'+link+'","mid":"'+mid+'"}]}';
                }
                this.Json = eval(jsonstr);
                EC.Cookie.Set('mac_history',jsonstr,this.Days);
            },
            'Clear': function(){
                EC.Cookie.Del('mac_history');
                $('.history_box').html('<div class="nodata"><p><img src="https://static.hitv.com/pc/img/a49d610.png"></p><p class="cor4">시청기록이 삭제되었습니다.</p></div>');
            },
        },
        'Ulog':{
            'Init':function(){
                EC.Ulog.Set();
                EC.Ulog.Click();
            },
            'Get':function(type,page,limit,call){
                EC.Ajax(maccms.path+'/index.php/user/ajax_ulog/?ac=list&type='+type+'&page='+page+'&limit='+limit,'get','json','',call);
            },
            'Set':function(){
                if($(".mac_ulog_set").attr('data-mid')){
                    let $that = $(".mac_ulog_set");
                    $.get(maccms.path+'/index.php/user/ajax_ulog/?ac=set&mid='+$that.attr("data-mid")+'&id='+$that.attr("data-id")+'&sid='+$that.attr("data-sid")+'&nid='+$that.attr("data-nid")+'&type='+$that.attr("data-type"));
                }
            },
            'Click':function(){
                $('body').on('click', 'a.mac_ulog', function(e){
                   
                    if(EC.User.IsLogin == 0){
                        EC.User.Login();
                        return;
                    }
                    var $that = $(this);
                    if($that.attr("data-id")){
                        EC.Ajax(maccms.path+'/index.php/user/ajax_ulog/?ac=set&mid='+$that.attr("data-mid")+'&id='+$that.attr("data-id")+'&type='+$that.attr("data-type"),'get','json','',function(r){
                            EC.All.message('',r.msg);
                            if(r.code == 1){
                                $that.addClass('disabled');
                            }else{
                                $that.attr('title', r.msg);
                            }
                        });
                    }
                });
            }
        },
        'User':{
            'BoxShow':0,
            'IsLogin':0,
            'UserId':'',
            'UserName':'',
            'GroupId':'',
            'GroupName':'',
            'Portrait':'',
            'Init':function(){
                if(EC.Cookie.Get('user_id') !=undefined && EC.Cookie.Get('user_id')!=''){
                    var url = maccms.path + '/index.php/user';
                    EC.User.UserId = EC.Cookie.Get('user_id');
                    EC.User.UserName = EC.Cookie.Get('user_name');
                    EC.User.GroupId = EC.Cookie.Get('group_id');
                    EC.User.GroupName = EC.Cookie.Get('group_name');
                    EC.User.Portrait = EC.Cookie.Get('user_portrait');
                    EC.User.IsLogin = 1;

                    if($('.mac_user').length >0) {
                        if ($('.mac_user').prop("outerHTML").substr(0, 2) == '<a') {
                            $('.mac_user').attr('href', url);
                            $('.mac_user').text(EC.User.UserName);
                        }
                        else {
                            //$('.mac_user').html('<a class="mac_text" href="'+ url +'">'+ name +'</a>');
                        }
                        var html = '<div class="mac_drop_box mac_user_box" style="display: none;">';
                        html += '<ul class="logged"><li><a target="_blank" href="' + url + '">마이페이지</a></li><li class="logout"><a class="logoutbt" href="javascript:;" onclick="EC.User.Logout();" target="_self"><i class="user-logout"></i>退出</a></li></ul>'
                        $('.mac_user').after(html);
                        var h = $('.mac_user').height();
                        var position = $('.mac_user').position();
                        $('.mac_user_box').css({'left': position.left, 'top': (position.top + h)});
                    }
                }
                else{
                }
            },
            'CheckLogin':function(){
                if(EC.User.IsLogin == 0){
                    EC.User.Login();
                }
            },
            'Login':function(){
                var ac='ajax_login';
                if(EC.Cookie.Get('user_id') !=undefined && EC.Cookie.Get('user_id')!=''){
                    ac= 'ajax_info';
                }
                EC.Pop.Show(300,280,'로그인',maccms.path+'/index.php/user/'+ac,function(r){
                    $('body').off('click', '.login_form_submit');
                    $('body').on('click', '.login_form_submit', function(e){
                        $(this).unbind('click');

                        EC.Ajax(maccms.path + '/index.php/user/login','post','json',$('.mac_login_form').serialize(),function(r){
                            EC.All.message('',r.msg);
                            if(r.code == 1){
                                location.reload();
                            }
                        });
                    });
                });
            },
            'Logout':function(){
                EC.Ajax(maccms.path + '/index.php/user/logout','post','json','',function(r){
                    EC.All.message('',msg);
                    if(r.code == 1){
                        location.reload();
                    }
                });
            },
            'PopedomCallBack':function(trysee,h) {
                window.setTimeout(function(){
                    $(window.frames["player_if"].document).find(".MacPlayer").html(h);
                },1000*10*trysee);
            },
            'BuyPopedom':function(o){
                var $that = $(o);
                if($that.attr("data-id")){
                    if (confirm('권한이 없습니다.')) {
                        EC.Ajax(maccms.path + '/index.php/user/ajax_buy_popedom.html?id=' + $that.attr("data-id") + '&mid=' + $that.attr("data-mid") + '&sid=' + $that.attr("data-sid") + '&nid=' + $that.attr("data-nid") + '&type=' + $that.attr("data-type"),'get','json','',function(r){
                            $that.addClass('disabled');
                            EC.All.message('',r.msg);
                            if (r.code == 1) {
                                top.location.reload();
                            }
                            $that.removeClass('disabled');
                        });
                    }
                }
            }
        },
        'TypeList': {
            'Init':function(){
                $('.listTypeClick').click(function(){
                    let id = $(this).attr('data-id');
                    let typeId = $(this).parent().attr('data-id');
                    EC.TypeList.Preload(typeId);
                    if(id == 'class'){
                        let className = $(this).html();
                        let type = $(this).attr('data-type');
                        EC.TypeList.List('?type='+type+'&class='+className+'&page=1&limit=12',typeId,1);
                    }else{
                        EC.TypeList.List('?type='+id+'&page=1&limit=12',typeId,1);
                    }
                    $(this).siblings(".active").removeClass('active');
                    $(this).addClass('active');
                })
            },
            'Preload': function(b){
                let html = '';
                for(let i=0;i<12;i++){
                    html+='<div class="movie-list-item br"><div class="movie-post-wrapper"><div class="movie-post-lazyload Lazy br"  style="background-image: url(/template/xiaozhuti/img/img-bj-k.png);"></div><svg aria-labelledby="q1cjw7d-aria" role="img" style="width:100%;height:39px"><title>Loading...</title><rect role="presentation" x="0" y="0" width="100%" height="100%" clip-path="url(#q1cjw7d-diff)" style="fill:url(#q1cjw7d-animated-diff)"/><defs><clipPath id="q1cjw7d-diff"><rect x="0" y="8" rx="4" ry="4" style="width:60%;height:11px"/><rect x="0" y="28" rx="4" ry="4" style="width:80%;height:11px"/></clipPath><linearGradient id="q1cjw7d-animated-diff"><stop offset="0%" stop-color="#f5f6f7" stop-opacity="1"><animate attributeName="offset" values="-2; -2; 1" keyTimes="0; 0.25; 1" dur="1.2s" repeatCount="indefinite"/></stop><stop offset="50%" stop-color="#eee" stop-opacity="1"><animate attributeName="offset" values="-1; -1; 2" keyTimes="0; 0.25; 1" dur="1.2s" repeatCount="indefinite"/></stop><stop offset="100%" stop-color="#f5f6f7" stop-opacity="1"><animate attributeName="offset" values="0; 0; 3" keyTimes="0; 0.25; 1" dur="1.2s" repeatCount="indefinite"/></stop></linearGradient></defs></svg></div></div>';
                }
                $('#'+b+' .movie-list-body').html(html);
            },
            'List': function(e,b,c){
                EC.Ajax(EC.ListApi+e,'get','json','',function(r) {
                    let data = r.list;
                    let html = '';
                    if(data.length === 0){
                        html = '<div class="no-result"><div><img src="/template/xiaozhuti/img/null.png"/></div>┑(￣Д ￣)┍</div>';
                    }else{
                        for (let i = 0; i < data.length; i++) {
                            let rate = '0';
                            let target = '_blank';
                            if(data[i].target == 0){
                                target = '_top';
                            }
                            let fraction = Math.floor(data[i].vod_score);
                            if(fraction == 0){rate = '0';}
                            else if (fraction== 1){rate = '05';}
                            else if (fraction== 2){rate = '10';}
                            else if (fraction== 3){rate = '15';}
                            else if (fraction== 4){rate = '20';}
                            else if (fraction== 5){rate = '25';}
                            else if (fraction== 6){rate = '30';}
                            else if (fraction== 7){rate = '35';}
                            else if (fraction== 8){rate = '40';}
                            else if (fraction== 9){rate = '45';}
                            else if (fraction== 10){rate = '50';}
                            html += '<div class="movie-list-item"><a target="'+target+'" href="'+data[i].detail_link+'"><div class="movie-post-wrapper"><div class="movie-post-lazyload Lazy br" data-original="'+data[i].vod_pic+'" style="background-image: url('+data[i].vod_pic_laz+');"></div></div><div class="movie-info"><div class="movie-title txtHide" title="'+data[i].vod_name+'影片信息">'+data[i].vod_name+'</div></div></a></div>';
                        }
                    }
                    if(c == 1){
                        setTimeout(function () {
                            $('#'+b+' .movie-list-body').html(html);
                            EC.All.Lazy('#'+b+' .movie-list-body .Lazy');
                        }, 600);
                    }else if(c == 2){
                        $('.movie-list-body').append(html);
                        EC.All.Lazy('.movie-list-body .Lazy');
                    }
                    else{
                        $('#'+b+' .movie-list-body').html(html);
                        EC.All.Lazy('#'+b+' .movie-list-body .Lazy');
                    }
                });
            }
        },Style:{
            'Init':function(){
                let style = EC.Cookie.Get('ec_style');
                if(style != null){
                    this.Css();
                }
                this.Switch();
            },
            'Set' : function(e){
                EC.Cookie.Set('ec_style',e);
            },
            'Switch' :function(){
                $('.icon-bairi').click(function(){
                    $('.icon-yueliang').toggle()
                    $('.icon-bairi').toggle()
                    let id = $(this).attr('data-id');
                    EC.Style.Set(id);
                    EC.Style.Css();
                    EC.All.message('','화이트모드로 변경되었습니다.');
                })
                $('.icon-yueliang').click(function(){
                    $('.icon-yueliang').toggle()
                    $('.icon-bairi').toggle()
                    let id = $(this).attr('data-id');
                    EC.Style.Set(id);
                    EC.Style.Css();
                    EC.All.message('','다크모드로 변경되었습니다.');
                })
            },
            'Css':function(){
                $("#cssFile").attr('href','/template/xiaozhuti/css/'+EC.Cookie.Get('ec_style')+'.css');
            }
        },
        'AddEm':function(obj,i){
            var oldtext = $(obj).val();
            $(obj).val( oldtext + '[em:' + i +']' );
        },
        'Remaining':function(obj,len,show){
            var count = len - $(obj).val().length;
            if(count < 0){
                count = 0;
                $(obj).val($(obj).val().substr(0,200));
            }
            $(show).text(count);
        },
        'Comment':{
            'Login':0,
            'Verify':0,
            'Init':function(){

                $('body').on('click', '.comment_face_box img', function(e){
                    var obj = $(this).parent().parent().parent().find('.comment_content');
                    EC.AddEm(obj,$(this).attr('data-id'));
                });
                $('body').on('click', '.comment_face_panel', function(e){
                    // $('.comment_face_box').toggle();
                    $(this).parent().find('.comment_face_box').toggle();
                });
                $('body').on('keyup', '.comment_content', function(e){
                    var obj = $(this).parent().parent().parent().parent().find('.comment_remaining');
                    EC.Remaining($(this),200,obj)
                });
                $('body').on('focus', '.comment_content', function(e){
                    if(EC.Comment.Login==1 && EC.User.IsLogin!=1){
                        EC.User.Login();
                    }
                });

                $('body').on('click', '.comment_report', function(e){
                    var $that = $(this);
                    if($(this).attr("data-id")){
                        EC.Ajax(maccms.path + '/index.php/comment/report.html?id='+$that.attr("data-id"),'get','json','',function(r){
                            $that.addClass('disabled');
                            EC.All.message('',r.msg);
                            if(r.code == 1){
                            }
                        });
                    }
                });

                $('body').on('click', '.comment_reply', function(e){
                    var $that = $(this);
                    if($that.attr("data-id")){
                        var str = $that.html();
                        $('.comment_reply_form').remove();
                        if (str == '댓글취소') {
                            $that.html('댓글');
                            return false;
                        }
                        if (str == '댓글') {
                            $('.comment_reply').html('댓글');
                        }
                        var html = $('.comment_form').prop("outerHTML");

                        var oo = $(html);
                        oo.addClass('comment_reply_form');
                        oo.find('input[name="comment_pid"]').val( $that.attr("data-id") );

                        $that.parent().after(oo);
                        $that.html('댓글취소');
                    }
                });

                $('body').on('click', '.comment_submit', function(e){
                    var $that = $(this);
                    EC.Comment.Submit($that);
                });

            },
            'Show':function($page){
                if($(".mac_comment").length>0){
                    EC.Ajax(maccms.path + '/index.php/comment/ajax.html?rid='+$('.mac_comment').attr('data-id')+'&mid='+ $('.mac_comment').attr('data-mid') +'&page='+$page,'get','json','',function(r){
                        $(".mac_comment").html(r);
                    },function(){
                        $(".mac_comment").html('<a href="javascript:void(0)" onclick="EC.Comment.Show('+$page+')">댓글 로딩 실패,클릭하여 다시 로딩해주세요...</a>');
                    });
                }
            },
            'Reply':function($o){

            },
            'Submit':function($o){
                let tx = '';
					
                let form = $o.parents('form');
                if($(form).find(".comment_content").val() == ''){
                    EC.All.message('','댓글을 입력해주세요.',tx);
                    return false;
                }
                if($('.mac_comment').attr('data-mid') == ''){
                    EC.All.message('','mid error',tx);
                    return false;
                }
                if($('.mac_comment').attr('data-id') == ''){
                    EC.All.message('','id error',tx);
                    return false;
                }
                EC.Ajax(maccms.path + '/index.php/comment/saveData','post','json',$(form).serialize() + '&comment_mid='+ $('.mac_comment').attr('data-mid') + '&comment_rid=' + $('.mac_comment').attr('data-id'),function(r){
                    EC.All.message('',r.msg);
                    if(r.code == 1){
                        EC.Comment.Show(1);
                    }
                    else{
                        if(EC.Comment.Verify==1){
                            EC.Verify.Refresh();
                        }
                    }
                });
            }
        },
        'Verify': {
            'Init': function(){
                EC.Verify.Focus();
                EC.Verify.Click();
            },
            'Focus': function(){//验证码框焦点
                $('body').on("focus", ".mac_verify", function(){
                    $(this).removeClass('mac_verify').after(EC.Verify.Show());
                    $(this).unbind();
                });
            },
            'Click': function(){//点击刷新
                $('body').on('click', 'img.mac_verify_img', function(){
                    $(this).attr('src', maccms.path +'/index.php/verify/index.html?r='+Math.random());
                });
            },
            'Refresh':function(){
                $('.mac_verify_img').attr('src', maccms.path +'/index.php/verify/index.html?r='+Math.random());
            },
            'Show':function(){
                return '<img class="mac_verify_img" src="'+ maccms.path +'/index.php/verify/index.html?"  title="바꾸기">';
            }
        },
        'Gbook':{
            'Login':0,
            'Verify':0,
            'Init':function(){
                $('body').on('keyup', '.gbook_content', function(e){
                    EC.Remaining($(this),200,'.gbook_remaining')
                });
                $('body').on('focus', '.gbook_content', function(e){
                    if(EC.Gbook.Login==1 && EC.User.IsLogin!=1){
                        EC.User.Login();
                    }
                });
                $('body').on('click', '.gbook_submit', function(e){
                    EC.Gbook.Submit();
                });
            },
            'Show':function($page){
                EC.Ajax(maccms.path+'/index.php/gbook/index?page='+$page,'post','json','',function(r){
                    $(".mac_gbook_box").html(r);
                },function(){
                    $(".mac_gbook_box").html('로딩실패 다시 로딩해주세요...');
                });
            },
            'Submit':function(){
                if($(".gbook_content").val() == ''){
                    let tx = '/template/xiaozhuti/img/tx2.jpeg';
                    EC.All.message('','내용을 입력해주세요.!',tx);
                    return false;
                }
                EC.Ajax(maccms.path + '/index.php/gbook/saveData','post','json',$('.gbook_form').serialize(),function(r){
                    EC.All.message('',r.msg);
                    if(r.code == 1){
                        location.reload();
                    }
                    else{
                        if(EC.Gbook.Verify==1){
                            EC.Verify.Refresh();
                        }
                    }
                });
            },
            'Report':function(name,id){

                EC.Pop.Show(400,300,'error',maccms.path+'/index.php/gbook/report.html?id='+id+'&name='+ encodeURIComponent(name),function(r){

                });

            }
        }
    }
    $(function(){
        //验证码初始化
        EC.Verify.Init();
        //返回顶部初始化
        EC.All.Top();
        //幻灯片初始化
        EC.All.Swiper();
        //测导航初始化
        EC.All.Navigation();
        //搜索初始化
        EC.History.Init();
        //历史记录初始化
        EC.Vod.Init();
        //用户访问记录初始化
        EC.Ulog.Init();
        //懒加载
        EC.All.Lazy('.Lazy');
        //首页列表切换初始化
        EC.TypeList.Init();
        //风格切换初始化
        EC.Style.Init();
        //倒叙切换
        EC.All.Flashback();
        //选集切换
        EC.All.Tag();
        //选集选集
        EC.All.slide();
        //详情信息展开收起
        EC.All.Details();
        //分类加载
        EC.All.Doen();
        //评论加载
        EC.All.CommentInit();
    });
