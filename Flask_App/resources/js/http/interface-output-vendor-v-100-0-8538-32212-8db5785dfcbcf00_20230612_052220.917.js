
<!DOCTYPE html>
<html ng-app="smartermail" ng-cloak>

<head>
	<!-- SmarterMail Copyright (c) 2003-2023 SmarterTools Inc.  All Rights Reserved. -->
	<meta charset="utf-8">
	<!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
	<meta name="Accept-CH" content="Sec-CH-UA-Full-Version-List" />


	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    <link href="/interface/output/fonts/roboto/roboto.css" rel="stylesheet" type="text/css">

	<!-- Title set in directive -->
	<title page-title></title>
	
    <!-- Prep theme -->
	
            <script>
		        var themeAttachFunc = function () {
                    try {
                        const themeName = localStorage && localStorage.getItem('theme');
                        const dark = (themeName || '').toLowerCase() == 'dark';
                        const matches = document.querySelectorAll('html, body');
                        matches.forEach((element) => {
                          element.classList.add(dark ? 'theme-dark' : 'theme-light');
                        });
                    } catch (err) { }
		        };
                if (document.readyState === 'complete' || (document.readyState !== 'loading'))
                    themeAttachFunc()
                else
                    document.addEventListener('DOMContentLoaded', themeAttachFunc);
            </script>
        

    <!-- Styles -->
	<link href="/interface/output/login-v-100.0.8538.32212.8db5785dfcbcf00.min.css" rel="stylesheet" />
	<style>
        .main-controller{display:none;}
        .popout-view {display:none;}
		.rotator:before,.spinner-wrapper::after{content:""}.spinner{display:block;margin-right:auto;margin-left:auto;width:4em;padding:7px;border-radius:50%;margin-top:4em;height:100%;transform:scale(1.5)}.spinner-wrapper{width:4em;height:4em;border-radius:100%;left:calc(50% - 2em);margin:auto;position:relative;top:38%}.spinner-wrapper::after{background:#f3f3f3;border-radius:50%;width:3em;height:3em;position:absolute;top:.5em;left:.5em}.rotator{position:relative;width:4em;border-radius:4em;overflow:hidden;animation:rotate 2s infinite linear}.rotator:before{position:absolute;top:0;left:0;right:0;bottom:0;background:#3F51B5;border:3px solid #f3f3f3;border-radius:100%}.inner-spin{background:#f3f3f3;height:4em;width:2em;animation:rotate-left 2.5s infinite cubic-bezier(.445,.050,.55,.95);border-radius:2em 0 0 2em;transform-origin:2em 2em}.inner-spin:last-child{animation:rotate-right 2.5s infinite cubic-bezier(.445,.050,.55,.95);margin-top:-4em;border-radius:0 2em 2em 0;float:right;transform-origin:0 50%}@keyframes rotate-left{100%,60%,75%{transform:rotate(360deg)}}@keyframes rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes rotate-right{0%,25%,45%{transform:rotate(0)}100%{transform:rotate(360deg)}}
	</style>

	<!-- Font Awesome and Bootstrap -->
	<link href="/interface/lib/font-awesome/css/font-awesome.css" rel="stylesheet" async />

	<script>
		var htmlCacheBustQs = "cachebust=100.0.8538.32212.8db5785dfcbcf00";
		var languageCacheBustQs = "cachebust=8db5785dfcbcf00";
		var angularLangList = ['ar','bn','cs','da','de','el','en','en-GB','es','fa','fi','fr','hi','id','it','ja','nl','pt','pt-BR','sl','sv','tr','zh-CN','zh-HK','zh-TW'];
		var angularLangMap = {'ar': 'ar', 'bn': 'bn', 'cs': 'cs', 'da': 'da', 'de': 'de', 'el': 'el', 'en': 'en', 'en-GB': 'en-GB', 'es': 'es', 'fa': 'fa', 'fi': 'fi', 'fr': 'fr', 'hi': 'hi', 'id': 'id', 'it': 'it', 'ja': 'ja', 'nl': 'nl', 'pt': 'pt', 'pt-BR': 'pt-BR', 'sl': 'sl', 'sv': 'sv', 'tr': 'tr', 'zh-CN': 'zh-CN', 'zh-HK': 'zh-HK', 'zh-TW': 'zh-TW', 'ar*': 'ar', 'bn*': 'bn', 'cs*': 'cs', 'da*': 'da', 'de*': 'de', 'el*': 'el', 'en*': 'en', 'es*': 'es', 'fa*': 'fa', 'fi*': 'fi', 'fr*': 'fr', 'hi*': 'hi', 'id*': 'id', 'it*': 'it', 'ja*': 'ja', 'nl*': 'nl', 'pt*': 'pt', 'sl*': 'sl', 'sv*': 'sv', 'tr*': 'tr', 'zh*': 'zh-CN'};
		var angularLangNames = [{v:'ar',n:'العربية'},{v:'bn',n:'বাংলা'},{v:'cs',n:'čeština'},{v:'da',n:'dansk'},{v:'de',n:'Deutsch'},{v:'el',n:'Ελληνικά'},{v:'en',n:'English'},{v:'en-GB',n:'English (United Kingdom)'},{v:'es',n:'español'},{v:'fa',n:'فارسى'},{v:'fi',n:'suomi'},{v:'fr',n:'français'},{v:'hi',n:'हिंदी'},{v:'id',n:'Bahasa Indonesia'},{v:'it',n:'italiano'},{v:'ja',n:'日本語'},{v:'nl',n:'Nederlands'},{v:'pt',n:'português'},{v:'pt-BR',n:'português (Brasil)'},{v:'sl',n:'slovenščina'},{v:'sv',n:'svenska'},{v:'tr',n:'Türkçe'},{v:'zh-CN',n:'中文(中华人民共和国)'},{v:'zh-HK',n:'中文(香港特別行政區)'},{v:'zh-TW',n:'中文(台灣)'}];
		var cssVersion = "100.0.8538.32212.8db5785dfcbcf00";
		var stProductVersion = "100.0.8538";
		var stProductBuild = "8538 (May 18, 2023)";
		var stSiteRoot = "/";
		var debugMode = 0;

		function cachebust(url) {
			if (!url) return null;
			var separator = url.indexOf("?")==-1 ? "?" : "&";
			return url + separator + htmlCacheBustQs;
		}
	</script>
</head>

<body onload="$('#loadingInd').hide()">
	<div id="loadingInd" style="height:100%;">
		<div class="spinner">
			<div class="spinner-wrapper">
				<div class="rotator">
					<div class="inner-spin"></div>
					<div class="inner-spin"></div>
				</div>
			</div>
		</div>
	</div>

	<script src="/interface/output/angular-v-100.0.8538.32212.8db5785dfcbcf00.js"></script>
	<script src="/interface/output/vendor-v-100.0.8538.32212.8db5785dfcbcf00.js"></script>
	<script src="/interface/output/site-v-100.0.8538.32212.8db5785dfcbcf00.js"></script> 
	<script src="/interface/output/site-v-100.0.8538.32212.8db5785dfcbcf00.templates.js"></script> 
	 
	<div ui-view class="app-view"></div>
	<div class="st-select-overlay" style="z-index: 2000; pointer-events:initial;" ng-click="$event.stopPropagation()" ng-if="spinner.isShown()" layout="row" layout-align="center center">
		<md-progress-circular md-mode="indeterminate" md-diameter="84"></md-progress-circular>
	</div>
	<div class="st-select-overlay" style="z-index: 2000; pointer-events:initial;" ng-click="$event.stopPropagation()" ng-if="determinateSpinner.isShown()" layout="row" layout-align="center center">
		<md-progress-circular md-mode="determinate" value="{{determinateSpinnerValue}}" md-diameter="84"></md-progress-circular>
	</div>
	<div id="context-menu-area"></div>
</body>

</html>