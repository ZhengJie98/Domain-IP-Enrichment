$('.back').bind('click',function(){
    var path = window.location.pathname
    var baseurl = window.location.href;
    var parseUrl = baseurl.split('?');
    var parseData= parseUrl[1];
    if(parseData == 'id=1&level=0&t=13') {
        $.cookie('backUrl',null, { expires:-1,path: '/'});
        $('.back').parent().attr('href','javascript:window.location.href=\'/datastatisticsnew/community/index?id=1&level=0&t=13\'');
    }else{
        var parseUrl = path.split('/')
        var controller = parseUrl[2]
        var module = parseUrl[1]
        var getUrls = $.cookie('backUrl');
        var url = '';

        if (getUrls == undefined) {
            $.cookie('backUrl',null, { expires:-1,path: '/'})
            $('.back').parent().attr('href','javascript:window.location.href=\'/datastatisticsnew/community/index?id=1&level=0&t=13\'')
            return false;
        }else {
            getUrls = JSON.parse(getUrls);
            if (controller == 'community' || controller == 'grid' || controller == 'china'|| controller == 'new-community' || controller == 'street-community') {
                url = getUrls.pop()
                url = getUrls.pop()
            } else {
                url = getUrls.pop()
            }
            if(url == undefined) {
                $.cookie('backUrl',null, { expires:-1,path: '/'})
                $('.back').parent().attr('href','javascript:window.location.href=\'/datastatisticsnew/community/index?id=1&level=0&t=13\'');
                return false;
            }
            $.cookie("backUrl", JSON.stringify(getUrls), {expires: 7, path: '/'});
            $('.back').parent().attr('href', 'javascript:window.location.href=\'' + url + '\'')
        }
    }
});

function rediectUrl(){
    var path = window.location.pathname
    var parseUrl = path.split('/')
    var controller = parseUrl[2]
    var module = parseUrl[1];
    var host = window.location.host;
    var getUrls = $.cookie('backUrl');
    var currentUrl = window.location.href;
    var currentParseUrl = currentUrl.split('?');
    var parseData= currentParseUrl[1];
    if(parseData == 'id=1&level=0&t=13') {
        $.cookie('backUrl',null, { expires:-1,path: '/'});
    }else{
        if (controller == 'community' || controller == 'grid' || controller == 'china'|| controller == 'new-community' || controller == 'street-community') {
            if (getUrls != undefined) {
                getUrls = JSON.parse(getUrls);
                var isExist = isExistValue(currentUrl,getUrls);
                if( !isExist ) {
                    getUrls.push(currentUrl);
                    $.cookie("backUrl", JSON.stringify(getUrls), { expires:7,path: '/'});
                }
            } else {
                var urls = ['http://'+host + '/datastatisticsnew/community/index?id=1&level=0&t=13'];
                urls.push(currentUrl);
                $.cookie("backUrl",JSON.stringify(urls), { expires:7,path: '/'});
            }
        }
    }
}

function isExistValue(key,arrays) {
    for (var i = 0; i < arrays.length; i++) {
        if (key == arrays[i]) {
            return 1;
        }
    }
    return 0;
}

rediectUrl();