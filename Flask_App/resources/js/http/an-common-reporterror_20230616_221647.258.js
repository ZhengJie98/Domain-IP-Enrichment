jserror_count = 0;

function reportError(msg,url,line) {
	par_url = parent.location.href;
	par_url = (par_url == location.href) ? "no parent" : par_url;

	query_string = "http://" + window.location.host
				+ "/servlet/an.service.server.LogErrorServlet"
				+ "?url=" + escape(location.href)
				+ "&referrer=" + escape(document.referrer)
				+ "&browserName=" + escape(navigator.appName)
				+ "&browserVersion=" + escape(navigator.appVersion)
				+ "&msg=" + escape(msg)
				+ "&line=" + escape(line)
				+ "&count=" + (++jserror_count);
   
	if (document.images) {
		reporter = new Image();
		reporter.src = query_string;
	}
	
	return true;
}

window.onerror = reportError;