<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>智慧消防综合管理平台</title>

    
    <meta name="keywords" content="内容管理平台">
    
    <meta name="description" content="内容管理平台是一个完全响应式，基于Bootstrap3最新版本开发的扁平化主题，她采用了主流的左右两栏式布局，使用了Html5+CSS3等现代技术">
    <!--[if lt IE 9]>
    <meta http-equiv="refresh" content="0;ie.html"/>
    <![endif]-->

    <link rel="shortcut icon" href="/mc/favicon.ico;jsessionid=15E955C7549AEC6F36B3E9E0198B6195">
    <link href="/mc/css/bootstrap.min.css;jsessionid=15E955C7549AEC6F36B3E9E0198B6195?v=3.3.6" rel="stylesheet">
    <link href="/mc/css/font-awesome.min.css;jsessionid=15E955C7549AEC6F36B3E9E0198B6195?v=4.4.0" rel="stylesheet">
    <link href="/mc/css/animate.css;jsessionid=15E955C7549AEC6F36B3E9E0198B6195" rel="stylesheet">
    <link href="/mc/css/login.css;jsessionid=15E955C7549AEC6F36B3E9E0198B6195" rel="stylesheet">

    <script>if (window.top !== window.self) {
        window.top.location = window.location;
    }</script>
</head>

<body class="signin">
<div class="">
    
    <h1 class="threed">智慧消防综合管理平台 </h1></div>
<div class="signinpanel">
    <form id="loginForm" method="post" role="form"    >

        <div class="formRow user">
            <input id="userName" name="userName" type="text" class="input_text input-big" placeholder="帐号" required="">
        </div>
        <div class="formRow password">
            <input id="passWord"  name="passWord"  type="password" placeholder="密码" class="input_text input-big"
                   required="">
        </div>
        <div class="formRow">
            <button id="btnSubmit" class="btn btn-success btn-lg " type="button" data-complete-text="finished!">
                <i class="fa fa-check"></i>&nbsp;登&nbsp;&nbsp;&nbsp;&nbsp;录&nbsp;
            </button>
        </div>

    </form>

</div>

<!-- 全局js -->
<script src="/base/jquery/jquery-2.1.4/jquery.min.js;jsessionid=15E955C7549AEC6F36B3E9E0198B6195?v=2.1.4"></script>
<script src="/base/bootstrap/js/bootstrap.js;jsessionid=15E955C7549AEC6F36B3E9E0198B6195?v=3.3.7"></script>
<!-- layer javascript -->
<script src="/mc/js/plugins/layer/layer.js;jsessionid=15E955C7549AEC6F36B3E9E0198B6195"></script>
<script src="/mc/js/toastr.min.js;jsessionid=15E955C7549AEC6F36B3E9E0198B6195"></script>
<script src="/mc/js/my.js;jsessionid=15E955C7549AEC6F36B3E9E0198B6195"></script>


<div class="signup-footer"> &copy; 2017-2021 All Rights Reserved. Aide  &nbsp;&nbsp;&nbsp;&nbsp;<a href='https://beian.miit.gov.cn' target='_blank' style='color:#fff'>鲁ICP备19028114号-1</a></div>




<script type="text/javascript">
    jQuery(document).ready(function () {
         $('#btnSubmit').bind('click',function(){
             login_submit();
        })

        $('#passWord').bind('keypress', function (event) {
            if(event.keyCode == "13") {
                $('#btnSubmit').focus();
            }
        });

    });

    function login_submit() {
        if($("#userName").val()==""){
            showtips("error","请填写此内容","#userName",2);
            return ;
        }
        if($("#passWord").val()==""){
            showtips("error","请填写此内容","#passWord",2)
            return ;
        }

        var url = "userLogin.do";
        var formData = JSON.stringify({
            userName: $("#userName").val(),
            passWord: $("#passWord").val()
        });
        $.ajax({
            url: url,
            type: 'post',
            data: formData,
            contentType: "application/json; charset=utf-8",
            timeout: 2000,
            async: true,
            error: function () {
                showtoast("error","网络错误！","错误提示：");
            },
            success: function (result) {
                var r = JSON.parse(result);
                if(r.s == "1") {
                    window.location = r.url;
                }
                else {

                    showtips("error",r.m, '#btnSubmit',3);

                    //showtoast("error",r.m,"错误提示：");
                }
            }
        });
    }
</script>

</body>

</html>