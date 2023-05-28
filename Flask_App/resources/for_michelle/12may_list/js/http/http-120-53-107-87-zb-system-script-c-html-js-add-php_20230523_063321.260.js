var zbpConfig = {
    bloghost: "http://120.53.107.87/",
    blogversion: "162135",
    ajaxurl: "http://120.53.107.87/zb_system/cmd.php?act=ajax&src=",
    cookiepath: "/",
    lang: {
        error: {
            72: "名称不能为空或格式不正确",
            29: "邮箱格式不正确，可能过长或为空",
            46: "评论内容不能为空或过长"
        }
    },
    comment: {
        useDefaultEvents: true,
        inputs: {
            action: {
                getter: function () {
                    return $("#inpId").parent("form").attr("action");
                }
            },
            name: {
                selector: '#inpName',
                saveLocally: true,
                required: true,
                validateRule: /^[\.\_A-Za-z0-9\u4e00-\u9fa5@]+$/ig,
                validateFailedErrorCode: 72,
            },
            email: {
                selector: '#inpEmail',
                saveLocally: true,
                validateRule: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/ig,
                validateFailedErrorCode: 29,
            },
            homepage: {
                selector: '#inpHomePage',
                getter: function () {
                    var t = $('#inpHomePage').val();
                    return (!/^(.+)\:\/\//.test(t) && t !== "") ? 'http://' + t : t; 
                },
                saveLocally: true
            },
            postid: {
                selector: '#inpId',
                required: true
            },
            verify: {
                selector: '#inpVerify'
            },
            content: {
                selector: '#txaArticle',
                required: true,
                validateRule: /./ig,
                validateFailedErrorCode: 46,
            },
            replyid: {
                selector: '#inpRevID'
            },
            format: {
                getter: function () {return 'json';}
            }
        }
    }
};
var zbp = new ZBP(zbpConfig);

var bloghost = zbp.options.bloghost;
var cookiespath = zbp.options.cookiepath;
var ajaxurl = zbp.options.ajaxurl;
var lang_comment_name_error = zbp.options.lang.error[72];
var lang_comment_email_error = zbp.options.lang.error[29];
var lang_comment_content_error = zbp.options.lang.error[46];

$(function () {

    zbp.cookie.set("timezone", (new Date().getTimezoneOffset()/60)*(-1));
    var $cpLogin = $(".cp-login").find("a");
    var $cpVrs = $(".cp-vrs").find("a");
    var $addinfo = zbp.cookie.get("addinfo");
    if (!$addinfo){
        return ;
    }
    $addinfo = JSON.parse($addinfo);

    if ($addinfo.chkadmin){
        $(".cp-hello").html("欢迎 " + $addinfo.useralias + " (" + $addinfo.levelname  + ")");
        if ($cpLogin.length == 1 && $cpLogin.html().indexOf("[") > -1) {
            $cpLogin.html("[后台管理]");
        } else {
            $cpLogin.html("后台管理");
        }
    }

    if($addinfo.chkarticle){
        if ($cpLogin.length == 1 && $cpVrs.html().indexOf("[") > -1) {
            $cpVrs.html("[新建文章]");
        } else {
            $cpVrs.html("新建文章");
        }
        $cpVrs.attr("href", zbp.options.bloghost + "zb_system/cmd.php?act=ArticleEdt");
    }
});
$(function(){
  let inpNameVal = $(zbpConfig.comment.inputs.name.selector).val();
  if (typeof inpNameVal === "undefined") {
    return;
  }
  if (inpNameVal.trim() === "" || inpNameVal === "访客"){
    zbp.userinfo.output();
  }
});

document.writeln("<script src='http://120.53.107.87/zb_users/plugin/UEditor/third-party/prism/prism.js' type='text/javascript'></script><link rel='stylesheet' type='text/css' href='http://120.53.107.87/zb_users/plugin/UEditor/third-party/prism/prism.css'/>");$(function(){var compatibility={as3:"actionscript","c#":"csharp",delphi:"pascal",html:"markup",xml:"markup",vb:"basic",js:"javascript",plain:"markdown",pl:"perl",ps:"powershell"};var runFunction=function(doms,callback){doms.each(function(index,unwrappedDom){var dom=$(unwrappedDom);var codeDom=$("<code>");if(callback)callback(dom);var languageClass="prism-language-"+function(classObject){if(classObject===null)return"markdown";var className=classObject[1];return compatibility[className]?compatibility[className]:className}(dom.attr("class").match(/prism-language-([0-9a-zA-Z]+)/));codeDom.html(dom.html()).addClass("prism-line-numbers").addClass(languageClass);dom.html("").addClass(languageClass).append(codeDom)})};runFunction($("pre.prism-highlight"));runFunction($('pre[class*="brush:"]'),function(preDom){var original;if((original=preDom.attr("class").match(/brush:([a-zA-Z0-9\#]+);/))!==null){preDom.get(0).className="prism-highlight prism-language-"+original[1]}});Prism.highlightAll()});

$(function(){ if($("#mochu_us_celan_login").length > 0 ){ var $mochu_us_addinfo = zbp.cookie.get("username");if (!$mochu_us_addinfo){ return ;} 
        var mochu_us_login_html = "<div class=\"mochu_us_logincelan\"><a class=\"mochu_us_logincelan_a mochu_us_logincelan_a_magleft\" href=\"http:\/\/120.53.107.87\/?login\">\u767b\u5f55<\/a><a class=\"mochu_us_logincelan_a\" href=\"http:\/\/120.53.107.87\/?register\">\u6ce8\u518c<\/a><\/div>";
        $("#mochu_us_celan_login").html(mochu_us_login_html);}});
$(function(){ var mochu_us_alert_html = "<div class=\"mochu_us_bei\"><\/div><div class=\"mochu_us_login_page\"><div> <div class=\"mochu_us_login_page_title\">\u6b22\u8fce\u767b\u5f55\u672c\u7ad9! <span><img src=\"http:\/\/120.53.107.87\/zb_users\/plugin\/mochu_us\/style\/close.png\" \/><\/span><\/div> <div class=\"mochu_us_login_page_div\"> <img src=\"http:\/\/120.53.107.87\/zb_users\/plugin\/mochu_us\/style\/user.png\" \/><input type=\"text\" id=\"mochu_us_Name\" \/><\/div><div class=\"mochu_us_login_page_div\"> <img src=\"http:\/\/120.53.107.87\/zb_users\/plugin\/mochu_us\/style\/pwd.png\" \/><input type=\"password\" id=\"mochu_us_password\"  \/><img class=\"mochu_us_eye\" src=\"http:\/\/120.53.107.87\/zb_users\/plugin\/mochu_us\/src\/style\/img\/c.png\" \/><\/div> <div class=\"mochu_us_login_page_jili\"> <span><input id=\"mochu_us_baochi_login\" value=\"1\" type=\"checkbox\">\u4fdd\u6301\u767b\u5f55<\/span> <a href=\"http:\/\/120.53.107.87\/?Retpass\" target=\"_blank\" class=\"mochu_us_right\">\u5fd8\u8bb0\u5bc6\u7801?<\/a> <\/div> <div class=\"mochu_us_login_page_button\"><button>\u767b \u5f55<\/button><\/div> <div class=\"mochu_us_login_page_qqs\"><span class=\"mochu_us_left\">\u5176\u5b83:<a href=\"http:\/\/120.53.107.87\/zb_users\/plugin\/mochu_us\/cmd.php?act=qqlogin\" target=\"_blank\"><img src=\"http:\/\/120.53.107.87\/zb_users\/plugin\/mochu_us\/style\/qq.png\" \/><\/a><\/span><a href=\"http:\/\/120.53.107.87\/?register\" target=\"_blank\" class=\"mochu_us_right\" href=\"\">\u6ce8\u518c\u8d26\u53f7<\/a> <\/div><\/div><\/div>";    
        $("#mochu_us_login_page_html").html(mochu_us_alert_html);  
        if (zbp.cookie.get("Mochu_us_nav") == 1) { var wd = $(document).width(); $(".mochu_us_foot_login").css("left", "-" + wd + "px"); $(".mochu_us_foot_open").css("left", "-25px"); } 
        if (zbp.cookie.get("Mochu_us_nav") == 2) { var wd = $(document).width(); $(".mochu_us_foot_login").css("left", "0px"); $(".mochu_us_foot_open").css("left", "-55px");}  $(".mochu_us_foot_login").css("display", "block"); $(".mochu_us_foot_open").css("display", "block"); 
        logindata = 1;     
    });
