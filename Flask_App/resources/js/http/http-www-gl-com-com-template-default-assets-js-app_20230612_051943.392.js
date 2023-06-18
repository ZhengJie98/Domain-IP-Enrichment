var app = {
    config: config || {},
    // 简单的点击实现元素展开和收缩的功能
    clickToggle: function(elea,eleb){
        $(elea).click(function(){
            if(!$(eleb).is(':visible')){
                $(this).addClass('clicked');
                $(eleb).slideDown();
            }else{
                $(this).removeClass('clicked');
                $(eleb).slideUp();
            }
        })
    },

    //返回顶部
    backTop: function(ele,time){
        $(ele).click(function () {
            $('html, body').animate({
                scrollTop:'0'
            },time);
        })
    },

    // 随机数字
    RndNum: function(n){
        var rand="";
        for(var i=0;i<n;i++)
            rand += Math.floor(Math.random()*10);
        return rand;
    },

    //切换验证码图片
    changCode: function(url, width, height){
        var rand = new Date().getTime();
        var str  = url+'source/include/imagecode.php?act=verifycode&width='+width+'&height='+height+'&random=' + rand + this.RndNum(4);
        $("#checkCodeImg").attr("src",str);
    },

    // tab 切换
    tabs: function(tabs, tab_box, _event) {
        $(tab_box).hide();
        $(tab_box).eq(0).show();
        $(tabs).eq(0).addClass('on');
        $(tabs).bind(_event,function(){
            $(this).addClass("on").siblings().removeClass("on");
            var _index = $(this).index();
            $(tab_box).eq(_index).show().siblings().hide();
        })
    },

    // 手机站跳转
    mobile: function () {
        if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))) {
            var pathname = location.pathname;
            var urlArray = pathname.split("/");
            var murl = '';

            if ((this.config.mUrl.match(urlArray[1]))) {
                for (i=2;i<urlArray.length;i++) {
                    murl= murl+"/"+urlArray[i];
                }
                murl = (this.config.mUrl + murl).replace('m//', 'm/');
            } else {
                murl = this.config.mUrl + pathname.substr(1);
            }

            if(urlArray[2] == 'p') {
                window.location.href = this.config.mUrl;
            } else {
                location.replace(murl);
            }
        }
    },

    // 是否支持 placeholder 属性
    placeholderSupport: function () {
        return 'placeholder' in document.createElement('input');
    },
    // ie9 兼容 placeholder
    iePlaceholder: function () {
        $("[placeholder]").each(function(){
            var _this = $(this);
            _this.wrapAll('<div class="input-box"></div>');
            var left = _this.css("padding-left");
            _this.parent().append('<span class="placeholder" data-type="placeholder" style="left: ' + left + '">' + _this.attr("placeholder") + '</span>');
            if(_this.val() != ""){
                _this.parent().find("span.placeholder").hide();
            }
            else{
                _this.parent().find("span.placeholder").show();
            }
        }).on("focus", function(){
            $(this).parent().find("span.placeholder").hide();
        }).on("blur", function(){
            var _this = $(this);
            if(_this.val() != ""){
                _this.parent().find("span.placeholder").hide();
            }
            else{
                _this.parent().find("span.placeholder").show();
            }
        });
        // 点击表示placeholder的标签相当于触发input
        $("span.placeholder").on("click", function(){
            $(this).hide();
            $(this).siblings("[placeholder]").trigger("click");
            $(this).siblings("[placeholder]").trigger("focus");
        });
        $("input[name='checkcode']").css('width', '100%').parents('.input-box').css('display','inline-block');
    },
    // 防复制代码
    antiClone: function () {
        // 防止ctrl+C
        document.onkeydown = function (e) {
            var e = e || event;
            if (e.ctrlKey == 1 && e.keyCode == 67) {
                return false;
            }
        };
        // 阻止复制
        document.body.oncopy = function (){ return false; };
        //禁止选取
        document.body.onselectstart=document.body.oncontextmenu=function(){return false;};
    },
    // 访客统计
    judgeTerminalBrowser: function (userAgent) {
        var data = {
            os: undefined,
            browser: undefined
        };
        var terminal = {
            'windows nt 10'      : 'Windows 10',
            'windows nt 6.3'     : 'Windows 8.1',
            'windows nt 6.2'     : 'Windows 8',
            'windows nt 6.1'     : 'Windows 7',
            'windows nt 6.0'     : 'Windows Vista',
            'windows nt 5.2'     : 'Windows Server 2003XP x64',
            'windows nt 5.1'     : 'Windows XP',
            'windows xp'         : 'Windows XP',
            'windows nt 5.0'     : 'Windows 2000',
            'windows me'         : 'Windows ME',
            'win98'              : 'Windows 98',
            'win95'              : 'Windows 95',
            'win16'              : 'Windows 3.11',
            'macintosh|mac os x' : 'Mac OS X',
            'mac_powerpc'        : 'Mac OS 9',
            'linux'              : 'Linux',
            'ubuntu'             : 'Ubuntu',
            'phone'              : 'iPhone',
            'pod'                : 'iPod',
            'pad'                : 'iPad',
            'android'            : 'Android',
            'blackberry'         : 'BlackBerry',
            'webos'              : 'Mobile',
            'freebsd'            : 'FreeBSD',
            'sunos'              : 'Solaris'
        };


        Object.keys(terminal).forEach(function (key) {
            if (new RegExp(key).test(userAgent.toLowerCase())) {
                data.os = terminal[key];
                return true;
            }
        });

        if (regs = userAgent.match(/MSIE\s(\d+)\..*/)) {
            // ie 除11
            data.browser = 'IE ' + regs['1'];
        } else if (regs = userAgent.match(/Firefox\/(\d+)\..*/)) {
            data.browser = 'FIREFOX';
        } else if (regs = userAgent.match(/Opera[\s|\/](\d+)\..*/)) {
            data.browser = 'OPERA';
        } else if (regs = userAgent.match(/Chrome\/(\d+)\..*/)) {
            data.browser = 'CHROME';
        } else if (regs = userAgent.match(/Safari\/(\d+)\..*$/)) {
            // chrome浏览器都声明了safari
            data.browser = 'SAFARI';
        } else if (regs = userAgent.match(/rv:(\d+)\..*/)) {
            // ie 11
            data.browser = 'IE ' + regs['1'];
        }

        $.ajax({
            url: this.config.homeUrl + 'source/include/visitor.php',
            type: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            data: data
        })
    }
};

//当配置为普通站的时候，手机站跳转
if(app.config.hasOwnProperty('mUrl') && app.config.murl !== 'm') {
    app.mobile();
}