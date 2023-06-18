var configApp = "https://www.mercatoxit.com";

var hlra = window.location.host;
var prot = window.location.protocol;
if (hlra) {
  configApp = prot+'//'+hlra+'/';
}
