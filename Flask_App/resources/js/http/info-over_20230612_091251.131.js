
function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function changeImages() {
	if (document.images && (preloadFlag == true)) {
		for (var i=0; i<changeImages.arguments.length; i+=2) {
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	}
}

var preloadFlag = false;
function preloadImages() {
	if (document.images) {
		navi_01_over = newImage("info/images/navi_01-over.gif");
		navi_02_over = newImage("info/images/navi_02-over.gif");
		navi_03_over = newImage("info/images/navi_03-over.gif");
		navi_04_over = newImage("info/images/navi_04-over.gif");
		navi_05_over = newImage("info/images/navi_05-over.gif");
		navi_06_over = newImage("info/images/navi_06-over.gif");
		navi_07_over = newImage("info/images/form-new_05.gif");
		preloadFlag = true;
	}
}


