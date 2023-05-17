var configApp = "https://www.bsprot.com/";

var hlra = window.location.host;
var prot = window.location.protocol;
if (hlra) {
  configApp = prot+'//'+hlra+'/';
}
