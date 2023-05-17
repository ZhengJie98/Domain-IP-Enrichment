<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>APP引导</title>
    <link rel="stylesheet" href="css/common.css" />
    <style>
        html, body {
            position: relative;
            height: 100%;
        }
        body {
            background: #eee;
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color:#000;
            margin: 0;
            padding: 0;
        }

        img{width: 100%;}
        div,a{ position: absolute; display: block;}
        a{ display: flex ;justify-content: flex-start; height: 26px; left: 30%; }
        a img{ width: auto; height: 100%;}
        .img_bg{ position: fixed; width: 100%; height: 100%; left: 0%;top: 0;}
        .text1{ top: 16%;width: 60%; left: 20%;}
        .text2{ top: 40%;}
        .text3{ top: 50%;}
        .text4{ top: 60%;}
        .text5{ bottom: 5%; width: 40%; left: 30%;}

        .onload{ position: fixed; background: #fff;left: 0; top: 0; width: 100%; height: 100%; z-index: 100;}
        .onload p{ width: 6rem; top: 50%; margin-top: -3rem; left: 50%; margin-left: -3rem; position: absolute;}
    </style>
</head>
<body>
<div class="onload">
    <p><img src="img/index/loading.gif"/></p>
</div>
<img class="img_bg" src="img/guide/index_bg.jpg"/>
<div class="text1"><img src="img/guide/text1.png"/></div>
<a class="text2" href="guide1.html"><img src="img/guide/text2.png"/></a>
<a class="text3" href="guide2.html"><img src="img/guide/text3.png"/></a>
<a class="text4" href="guide3.html"><img src="img/guide/text4.png"/></a>
<div class="text5"><img src="img/guide/text5.png"/></div>
</body>
<script src="js/jquery.min.js"></script>
<script>

    window.onload = function(){
        $('.onload').fadeOut(500);
    }
</script>
</html>