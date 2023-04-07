<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-param" content="_csrf">
<meta name="csrf-token" content="ikm6pbpS8Tl5uu-IfoaSZM9J5ZmFNsUJT3mQ13eSxTe7AeD1_zSAT0nLqcw_w_s1piix0NACvH4XTciwDdGxQA==">
    <title>Iniciar sesión</title>
    <link href="/assets/9bdb892e/authchoice.css" rel="stylesheet">
<link href="/assets/fdad3a65/css/font-awesome.min.css" rel="stylesheet">
<link href="/assets/dae867a8/css/bootstrap.css" rel="stylesheet">
<link href="/assets/f36f88b9/css/AdminLTE.css" rel="stylesheet">
<link href="/assets/f36f88b9/css/skins/_all-skins.min.css" rel="stylesheet"></head>
<body class="login-page">


    

    <div class="row">
        <div class="col-xs-12">
                    </div>
    </div>
<style>
    body{
        margin: 0;
        padding: 0;
        color: #9fe418;
        background: url('/imagenes/soil.jpg') !important;
    }
    .loginBox{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 350px;
        height: 420px;
        box-sizing: border-box;
        background: rgba(0,0,0,0.5);
    }
    .user{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        top: calc(-100px/2);
        left: calc(-50% -50px);
    }; 
    .loginBox p {
        margin: 0px;
        padding: 0px;
        font-weight: bold;
        color: #fff;
    }
    .loginBox input{
        width: 100%;
        margin-bottom: 10px;
    }
    ::placeholder{
        color: rgba(255,255,255,0.5);
    }
    .inputBox input[type="submit"]
    {
        border: none;
        outline: none;
        height: 40px;
        color: #fff;
        font-size: 16px; 
        background: #3cbc58;
        cursor: pointer;
        border-radius: 20px;
    }
    .inputBox input[type="submit"]:hover
    { 
        background: #efed40;
        color: #262626
    }
    .loginBox a { 
        font-size: 14px;
        color: #fff;
        font-weight: bold;
    }
</style>
<div class="loginBox">
    <img 
        style="
        width: 100px !important;
        text-align: center;
        height: 100px !important;
        border-radius: 50% !important;
        overflow: hidden !important;
        position: absolute !important;
        top: calc(-100px/2) !important;
        left: 35% !important;"
        src="/imagenes/farmer.jpeg"/><br><br><br>
    <h2 style="text-align: center !important; margin: 0px; padding: 0 0 20px; color: #efed40; ">Iniciar Sesión</h2>
    <div class="row">
        <div class="col-lg-12" style="padding-left:30px;padding-right:30px;">
            <form id="login-form" action="/user/login" method="post">
<input type="hidden" name="_csrf" value="ikm6pbpS8Tl5uu-IfoaSZM9J5ZmFNsUJT3mQ13eSxTe7AeD1_zSAT0nLqcw_w_s1piix0NACvH4XTciwDdGxQA=="><div class="form-group field-login-form-login required">
<label class="control-label" for="login-form-login">Usuario</label>
<input type="text" id="login-form-login" class="form-control" name="login-form[login]" autofocus="autofocus" tabindex="1" aria-required="true">

<div class="help-block"></div>
</div><div class="form-group field-login-form-password required">
<label class="control-label" for="login-form-password">Contraseña (<a href="/user/forgot" tabindex="5">¿No recuerda su contraseña?</a>)</label>
<input type="password" id="login-form-password" class="form-control" name="login-form[password]" tabindex="2" aria-required="true">

<div class="help-block"></div>
</div><div class="form-group field-login-form-rememberme">

<input type="hidden" name="login-form[rememberMe]" value="0"><label><input type="checkbox" id="login-form-rememberme" name="login-form[rememberMe]" value="1" tabindex="3"> Recuérdeme la próxima vez</label>

<div class="help-block"></div>
</div><button type="submit" class="btn btn-success btn-block" tabindex="4">Iniciar sesión</button></form>            <div id="w0"><ul class="auth-clients"></ul></div>        </div>
    </div>
</div>  

<script src="/assets/8e9ff9bf/jquery.js"></script>
<script src="/assets/858afa0a/yii.js"></script>
<script src="/assets/858afa0a/yii.activeForm.js"></script>
<script src="/assets/9bdb892e/authchoice.js"></script>
<script src="/assets/dae867a8/js/bootstrap.js"></script>
<script src="/assets/f36f88b9/js/adminlte.min.js"></script>
<script>jQuery(function ($) {
jQuery('#login-form').yiiActiveForm([{"id":"login-form-login","name":"login","container":".field-login-form-login","input":"#login-form-login","enableAjaxValidation":true,"validateOnChange":false,"validateOnBlur":false},{"id":"login-form-password","name":"password","container":".field-login-form-password","input":"#login-form-password","enableAjaxValidation":true,"validateOnChange":false,"validateOnBlur":false},{"id":"login-form-rememberme","name":"rememberMe","container":".field-login-form-rememberme","input":"#login-form-rememberme","enableAjaxValidation":true,"validateOnChange":false,"validateOnBlur":false}], []);
$('#w0').authchoice();
});</script></body>
</html>
