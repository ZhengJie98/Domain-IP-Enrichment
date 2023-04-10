Utils.ns("Login"),Login.LangTypeArr=[{type:"Web_zh_CN",Lang:"简体中文"},{type:"Web_en_US",Lang:"English"},{type:"Web_zh_TW",Lang:"繁體中文"},{type:"Web_ja",Lang:"にほんご"},{type:"Web_ko",Lang:"한국의"},{type:"Web_fr",Lang:"Français"},{type:"Web_es",Lang:"español"},{type:"Web_ru",Lang:"русский"},{type:"Web_de",Lang:"Deutsch"},{type:"Web_ps",Lang:"فارسی"},{type:"Web_pl",Lang:"polski"},{type:"Web_ina",Lang:"bahasa Indonesia"},{type:"Web_th",Lang:"ไทย"},{type:"Web_pt",Lang:"Português"},{type:"Web_ar",Lang:"عربي"},{type:"Web_iw",Lang:"עברית"},{type:"Web_it",Lang:"Italiano"},{type:"Web_el",Lang:"ελληνικά"},{type:"Web_cs",Lang:"čeština"},{type:"Web_tr",Lang:"TÜRKÇE"},{type:"Web_da",Lang:"dansk"},{type:"Web_no",Lang:"Norsk språk"},{type:"Web_ro",Lang:"român"},{type:"Web_du",Lang:"Nederlands"},{type:"Web_sk",Lang:"Slovenčina"},{type:"Web_hu",Lang:"Magyar"},{type:"Web_bul",Lang:"български"},{type:"Web_cro",Lang:"Hrvatski"},{},{},{},{type:"Web_en_US",Lang:"Custom Lang"}],Login.submitLogin=function(){var e=document.getElementById("loginForm"),n=document.getElementById("szUserName").value,t=$("#szUserPasswdSrc"),o=t.val();if(""===n)return alert(Login.lang.Text.TipInputUserName),!1;var i=n.getBytesLength();if(1>i||i>18)return alert(Login.lang.Text.TipUserNameIllegal),!1;var a=hex_md5(o);$("#szUserLoginCert").val(a);var r=$("#szUserLoginCertEx");if(void 0===Login.u32PublicKey||void 0===Login.u64PublicElement)r.prop("disabled",!0);else{var g=t2c(o,Login.u32PublicKey,Login.u64PublicElement);r.val("["+g.join(",")+"]")}var s=$("#szServIpAddr");s.val(Login.hostName.replace("[","").replace("]","")),e.action="cgi-bin/main-cgi",e.method="post",e.submit(),document.getElementById("login").disabled=!0},Login.resetLoginForm=function(){document.getElementById("szUserName").value="",document.getElementById("szUserLoginCert").value="",document.getElementById("szUserPasswdSrc").value="",document.getElementById("szUserLoginCertEx").value=""},Login.checkSetting=function(){var e;if(!1===Login.keepLivePlug.checkVersion()&&(e=Login.keepLivePlug.createTip(Login.lang,Login.szCustomerCode)),void 0!==e){var n=$("#pluginVersionTip");n.html(e),n.on("dblclick",function(){n.fadeOut()}),n.fadeIn()}},Login.loadLanguageFile=Class.extend({settings:{fileArr:[],defaultFile:"res/Web_en_US.json",dataType:"json"},init:function(e){for(var n=0;n<Login.LangTypeArr.length;n++)this.settings.fileArr.push("/res/"+Login.LangTypeArr[n].type+".json");$.extend(this.settings,e)},get:function(e){var n=this.settings.defaultFile;return parseInt(e,10)===Utils.CUSTOM_LANG_ENUM?$.ajax({url:"script/plugins/jquery.xml2json.js",dataType:"script",cache:!1,async:!1,success:function(){this.data=Utils.getCustomLang()},context:this}):parseInt(e,10)==e&&(e=parseInt(e,10),void 0!==this.settings.fileArr[e]&&(n=this.settings.fileArr[e])),$.ajax({url:n,type:"GET",cache:!1,async:!1,dataType:this.settings.dataType,context:this,success:this.success,error:this.error}),this},success:function(e){return Login.lang=Utils.extendCustomLang(e,this.data),Utils.loadLang(Login.lang),Login.setLabelcss(),this},error:function(){return this}}),Login.setLabelcss=function(){var e=function(e){var n=[];return $(e).each(function(){var e=$(this).width();n.push(e)}),n.length>0?Math.max.apply(null,n):0},n=e(".login_left"),t=e(".login_label");if(n>t){var o=parseInt((n-t)/2,10);$(".login_label_div").css({"padding-left":o,"padding-right":o})}},Login.getLangCapAndTitle=function(){var e=116;$.ajax({url:"/cgi-bin/main-cgi",cache:!1,async:!1,type:"get",dataType:"json",data:'json={"cmd": '+e+"}",success:function(e){Login.u32PublicKey=e.u32PublicKey,Login.u64PublicElement=e.u64PublicElement,Login.szCustomerCode=e.szCustomerCode,document.title=e.szDevModel;for(var n="",t=0;t<Login.LangTypeArr.length;t++)n+='<option value="'+t+'">'+Login.LangTypeArr[t].Lang+"</option>";$("#language").html(n).val(e.u32CurrentLang);var o=parseInt(e.u32CurrentLang,10),i=Login.LangTypeArr[o].type,a=i.replace("Web_","lang-");return $("body").addClass(a),this.bIsConfigured=e.bIsConfigured,this},error:function(){return document.title="Video System",this},context:this})},Login.base64encode=function(e){function n(e){var n,t,i,a,r,g;for(i=e.length,t=0,n="";i>t;){if(a=255&e.charCodeAt(t++),t==i){n+=o.charAt(a>>2),n+=o.charAt((3&a)<<4),n+="==";break}if(r=e.charCodeAt(t++),t==i){n+=o.charAt(a>>2),n+=o.charAt((3&a)<<4|(240&r)>>4),n+=o.charAt((15&r)<<2),n+="=";break}g=e.charCodeAt(t++),n+=o.charAt(a>>2),n+=o.charAt((3&a)<<4|(240&r)>>4),n+=o.charAt((15&r)<<2|(192&g)>>6),n+=o.charAt(63&g)}return n}function t(e){var n,t,o,i;for(n="",o=e.length,t=0;o>t;t++)i=e.charCodeAt(t),i>=1&&127>=i?n+=e.charAt(t):i>2047?(n+=String.fromCharCode(224|i>>12&15),n+=String.fromCharCode(128|i>>6&63),n+=String.fromCharCode(128|i>>0&63)):(n+=String.fromCharCode(192|i>>6&31),n+=String.fromCharCode(128|i>>0&63));return n}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";return n(t(e))},Login.setDefaultLang=function(){$("#language").on("change",function(){var e=$(this).val();Login.data.get(e)}).trigger("change")},Login.loginByDDNS=function(){var e=document.location.href,n=e.split("/?").length;n>1&&(window.location.href=document.location.protocol+"//"+document.location.host+"/cgi-bin/main-cgi/"+document.location.search+"&lLan="+$("#language").val())},Login.handleLangAndError=function(){var e=window.location.href,n=-1,t=e.split("?")[1];if(t){for(var o=t.split("&"),i={},a=0;a<o.length;a++){var r=o[a].split("=")[0],g=o[a].split("=")[1];i[r]=g}if(void 0!==i.lang){var s=parseInt(i.lang,10);$("#language").val(s),n=s,Login.data.get(s)}else Login.setDefaultLang();if(void 0!==i.code){var l=Login.lang.Error["E"+i.code];void 0===l&&(l=Login.lang.Error.E61122);var c;$("#idErrorMsg").text(l),void 0!==i.status&&(c=$.map(i.status.split("."),function(e){return parseInt(e,10)}));var d="";return"50801"===i.code?d=Login.lang.Text.TipRetryLogin.replace("%s","").replace("%d",c[0]):"50807"===i.code?d=Login.lang.Text.TipUnlock.replace("%s","").replace("%d",10):"50808"===i.code?d=Login.lang.Text.TipUnlock.replace("%s","").replace("%d",Math.ceil(c[1]/60)):"50810"===i.code&&(d=Login.lang.Text.LoginFaild9),$("#idErrorInfo").text(d),void(void 0!==window.history.replaceState&&window.history.replaceState({},"",document.location.protocol+"//"+document.location.host+document.location.pathname))}(void 0!==i.Key||void 0!==i.Key2)&&Login.loginByDDNS(),void 0!==window.history.replaceState&&window.history.replaceState({},"",document.location.protocol+"//"+document.location.host+document.location.pathname)}else Login.setDefaultLang();if(!this.bIsConfigured&&"192.168.0.30"==document.location.host){this.flag=!0,$(".all_login_hidden").addClass("hidden"),$(".login_tips").addClass("hidden");var d="<a class='login-Addr-jump' href='"+document.location.protocol+"//192.168.1.30' target='_self' title='"+Login.lang.Text.NoteChangeDefaultAddr+"'>"+Login.lang.Text.NoteChangeDefaultAddr+"</a>";$("#ErrorMsg").addClass("new_login_msg"),$("#idErrorMsg").html(d)}},Login.loadPlugins=function(){$(window).unload(function(){try{}catch(e){}}),Login.keepLivePlug=new Utils.Frame({id:"loginKeepLivePlugin",hostName:window.location.hostname,container:"loginPlugs",name:"Login.keepLivePlgn"})},Login.setFocus=function(){""===$("#szUserName").val()?$("#szUserName").focus():$("#szUserLoginCert").focus()},Login.addListener=function(){this.flag||($("body").on("keypress",function(e){13===e.which&&Login.submitLogin()}),document.getElementById("login").onclick=Login.submitLogin,document.getElementById("reset").onclick=Login.resetLoginForm,Login.resetLoginForm())},$(function(){Login.data=new Login.loadLanguageFile({}),Login.getLangCapAndTitle(),Login.handleLangAndError(),Login.hostName=window.location.hostname,Login.loadPlugins(),Login.addListener(),Login.setFocus();var e=100;(Utils.isMac()||Utils.isWin64())&&(e=2e3),setTimeout(function(){Login.checkSetting()},e)});