class ErudaUtil {
    static initEruda() {
        if (sysConfig.debugMode && location.pathname.indexOf('/grey/') < 0) {
            let src = sysConfig.domainUrl + 'static/common/eruda/eruda.js';
            document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
            document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
        }
    }
}
ErudaUtil.initEruda();
