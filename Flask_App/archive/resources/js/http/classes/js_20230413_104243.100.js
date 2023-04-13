

if (top != self) {
    try {
        if (top.location.host != self.location.host) {
            top.location = self.location;
        }
    } catch (err) {
        top.location = self.location;
    }
}

function new_transload_window() {
    var tmp = new Date();
    tmp = tmp.getTime();
    $('form[name=transload]').attr('target', 'rapidleech_' + tmp);
    var options = "width=700,height=320,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=no";
    window.open('', 'rapidleech_' + tmp, options);
    window.setTimeout("$('form[name=transload]').submit();", 200);
}

function new_window(form, submit) {
    var tmp = new Date();
    tmp = tmp.getTime();
    $('form[name=' + form + ']').attr('target', 'rapidleech_' + tmp);
    var options = "width=700,height=320,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=no";
    window.open('', 'rapidleech_' + tmp, options);
    if (submit) {
        window.setTimeout("$('form[name=" + form + "]').submit();", 200);
    }
}

function table_filelist_refresh_headers() {
    if ($.browser.msie == true) {
        if ($('#table_filelist').parent().height() > 450) {
            $('#table_filelist').parent().height(450);
        }
        $('#table_filelist_h, #table_filelist_f').width($('#table_filelist').width());
        $('#table_filelist tr.flisttblhdr td').each(function (id) {
            $('#table_filelist_h tr.flisttblhdr td:eq(' + id + ')').html($(this).html().replace(/(<span .*?sorttable.*?>|<\/span>)/gi, ''));
            $('#table_filelist_h tr.flisttblhdr td:eq(' + id + '), #table_filelist_f tr.flisttblftr td:eq(' + id + ')').width($(this).width());
        });
    } else {
        $('#table_filelist_h, #table_filelist_f').css('width', $('#table_filelist').css('width'));
        $('#table_filelist tr.flisttblhdr td').each(function (id) {
            $('#table_filelist_h tr.flisttblhdr td:eq(' + id + ')').html($(this).html().replace(/(<span .*?sorttable.*?>|<\/span>)/gi, ''));
            $('#table_filelist_h tr.flisttblhdr td:eq(' + id + '), #table_filelist_f tr.flisttblftr td:eq(' + id + ')').css('width', $(this).css('width'));
        });
    }
}

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) {
            return null;
        }
    } else {
        begin += 2;
    }
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
        end = dc.length;
    }
    return unescape(dc.substring(begin + prefix.length, end));
}

function deleteCookie(name, path, domain) {
    if (getCookie(name)) {
        document.cookie = name + "=" + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}

function clear(name) {
    document.cookie = name + " = " + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
}

function showAll() {
    if (getCookie("showAll") == 1) {
        deleteCookie("showAll");
        location.href = location.href.split('?', 1) + '?act=files';
    } else {
        document.cookie = "showAll = 1;";
        location.href = location.href.split('?', 1) + '?act=files';
    }
}

function mail(str, field) {
    document.getElementById("mailPart." + field).innerHTML = str;
    return true;
}

function setFtpParams() {
    setParam("host");
    setParam("port");
    setParam("login");
    setParam("password");
    setParam("dir");
    document.cookie = "ftpParams=1";
    document.getElementById("hrefSetFtpParams").style.color = "#808080";
    document.getElementById("hrefDelFtpParams").style.color = "#0000FF";
}

function delFtpParams() {
    deleteCookie("host");
    deleteCookie("port");
    deleteCookie("login");
    deleteCookie("password");
    deleteCookie("dir");
    deleteCookie("ftpParams");
    document.getElementById("hrefSetFtpParams").style.color = "#0000FF";
    document.getElementById("hrefDelFtpParams").style.color = "#808080";
}

function setParam(param) {
    document.cookie = param + "=" + document.getElementById(param).value;
}

function pr(percent, received, speed) {
    document.getElementById("received").innerHTML = '<b>' + received + '</b>';
    document.getElementById("percent").innerHTML = '<b>' + percent + '%</b>';
    document.getElementById("progress").style.width = percent + '%';
    document.getElementById("speed").innerHTML = '<b>' + speed + ' KB/s</b>';
    document.title = 'Uploaded ' + percent + '%';
    return true;
}

function changeStatus(file, size) {
    document.getElementById("status").innerHTML = 'Uploading File <b>' + file + '</b>, Size <b>' + size + '</b>...<br />';
}

function checkFile(id) {
    if (document.getElementById('files' + id).checked == true) {
        document.getElementById('files' + id).checked = false;
    } else {
        document.getElementById('files' + id).checked = true;
    }
    return false;
}

function openHist() {
    var options = "width=768,height=450,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,copyhistory=no";
    window.open('hist.php', '_blank', options);
}

function openEmpty(name) {
    var options = "width=500,height=150,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,copyhistory=no";
    var win = window.open('about:blank', name, options);
    win.focus();
}

function openSampler(file) {
    var options = "width=700,height=450,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,copyhistory=no";
    window.open('sampler.php?file=' + file, '_blank', options);
}

function startLinkCheck() {
    $.ajax({
        type: "POST",
        url: 'ajax.php?ajax=linkcheck',
        data: ({
            submit: "Check Links",
            links: $('#links').val(),
            k: ($('#chk_k').is(':checked')) ? 1 : 0,
            d: ($('#chk_d').is(':checked')) ? 1 : 0
        }),
        beforeSend: function () {
            $('#linkchecker-results').hide();
            $('#loading').show();
            $('#linkchecker').addClass('linkchecker-load');
            $('#submit').attr("disabled", "disabled");
        },
        success: function (data) {
            $('#linkchecker-results').html(data);
            $('#linkchecker-results').show();
        },
        complete: function () {
            $('#loading').hide();
            $('#linkchecker').removeClass('linkchecker-load');
            $('#linkchecker-results').show();
            $('#submit').removeAttr("disabled");
        }
    });
    return false;
}

function stripslashes(str) {
    return str.replace('/\0/g', '0').replace('/\(.)/g', '$1');
}

function urldecode(str) {
    return decodeURIComponent((str + '').replace(/\+/g, '%20'));
}

function HTMLParser(aHTMLString) {
    var html = document.implementation.createDocument("http://www.w3.org/1999/xhtml", "html", null),
        body = document.createElementNS("http://www.w3.org/1999/xhtml", "body");
    html.documentElement.appendChild(body);
    body.appendChild(Components.classes["@mozilla.org/feed-unescapehtml;1"].getService(Components.interfaces.nsIScriptableUnescapeHTML).parseFragment(aHTMLString, false, null, body));
    return body;
}

function DetectEnterPressed(e) {
    var characterCode
    if (e && e.which) {
        e = e
        characterCode = e.which
    } else {
        e = event
        characterCode = e.keyCode
    }
    if (characterCode == 13) return true
    else return false
}

function AcceptSendParams() {
    document.getElementById("captcha_block2").style.display = "none";
    var els = document.getElementsByName("ent_namefield2");
    var prm = "";
    for (var i in els) {
        if (!els.hasOwnProperty(i)) continue;
        if (els[i].id) {
            if (prm) prm = prm + "&";
            prm = prm + els[i].id + "=" + urlencode(els[i].value);
        }
    }
    var job = document.getElementById("captcha_frame2").name;
    showsendjobs("inputs=" + urlencode(prm) + "&job=" + job + "&restart_upload=" + job);
}

function selheader(me) {
    me.style.backgroundColor = '#D1F1FF';
}

function unselheader(me) {
    me.style.backgroundColor = '';
}

function showheader(id, onprogress) {
    $("#" + id).show({
        duration: 400, progress: function () {
            if (typeof onprogress !== 'undefined') onprogress();
        }
    });
    document.getElementById(id + '_img').className = 'img img2';
}

function hideheader(id, onprogress) {
    $("#" + id).hide({
        duration: 400, progress: function () {
            if (typeof onprogress !== 'undefined') onprogress();
        }
    });
    document.getElementById(id + '_img').className = 'img img3';
}

function clickheader(id, onprogress) {
    var el = document.getElementById(id);
    // console.log(el);
    if (el.style.display != 'none') {
        hideheader(id, onprogress)
    } else {
        showheader(id, onprogress)
    }
    if (typeof ReHeight !== 'undefined') ReHeight();
}

function explode(delimiter, string) {
    var emptyArray = {0: ''};
    if (arguments.length != 2 || typeof arguments[0] == 'undefined' || typeof arguments[1] == 'undefined') {
        return null;
    }
    if (delimiter === '' || delimiter === false || delimiter === null) {
        return false;
    }
    if (typeof delimiter == 'function' || typeof delimiter == 'object' || typeof string == 'function' || typeof string == 'object') {
        return emptyArray;
    }
    if (delimiter === true) {
        delimiter = '1';
    }
    return string.toString().split(delimiter.toString());
}

function implode(glue, pieces) {
    return ((pieces instanceof Array) ? pieces.join(glue) : pieces);
}

function showid(name) {
    document.getElementById(name).style.display = '';
}

function numselover(name, max) {
    //showid(name);
    elts = document.getElementsByName("numsel_" + name);
    var elts_cnt = (typeof (elts.length) != 'undefined') ? elts.length : 0;
    if (elts_cnt) {
        for (var i = 0; i < elts_cnt; i++) {
            if (i <= max) {
                elts[i].className = 'numselitem_on';
            } else {
                elts[i].className = 'numselitem_off';
            }
        }
    }
}

function toggle_checkbox(id) {
    var el = document.getElementById(id);
    el.checked = !el.checked;
}

function over_checkbox(id) {
    var el = document.getElementById(id + '_l');
    el.style = 'color:#00f';
}

function out_checkbox(id) {
    var el = document.getElementById(id + '_l');
    el.style = '';
}

function cut_str(str, left, right) {
    var le = str.indexOf(left);
    var tmp = str.substring(le + left.length);
    var ri = tmp.indexOf(right);
    var ristr = str.indexOf(right);
    var cut = str.substring(0, le) + str.substring(ristr + right.length);
    return [tmp.substring(0, ri), cut];
}

function isNumber(o) {
    return !isNaN(o - 0) && o !== null && o.replace(/^\s\s*/, '') !== "" && o !== false;
}

function open_pay_win(url, winname) {
    var options = "toolbar=yes,location=yes,directories=no,status=no,menubar=yes,scrollbars=yes,resizable=no,copyhistory=no";
    window.open(url, winname, options);
    window.focus();
}

var decodeEntities = (function () {
    var element = document.createElement('div');

    function decodeHTMLEntities(str) {
        if (str && typeof str === 'string') {
            str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
            str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
            element.innerHTML = str;
            str = element.textContent;
            element.textContent = '';
        }
        return str;
    }

    return decodeHTMLEntities;
})();

function xor_check(el) {
    var elname = $(el).attr('name');
    if (elname == '0') {
        $(el).attr('class', 'img img36 unselectable');
        $(el).attr('name', '1');
    } else if (elname == '1') {
        $(el).attr('class', 'img img35 unselectable');
        $(el).attr('name', '0');
    } else if (elname == '2') {
        $(el).attr('class', 'img img35 unselectable');
        $(el).attr('name', '0');
    }
    return $(el).attr('name');
}

function ch_click2(el, parent, id, doxor) {
    if (doxor) xor_check(el);
    var n0 = 0;
    var n1 = 0;
    var n2 = 0;
    for (var i = 0; true; i++) {
        var el = document.getElementById(parent + '_' + i);
        if (el) {
            if ($(el).attr('name') === '0') n0++;
            if ($(el).attr('name') === '1') n1++;
            if ($(el).attr('name') === '2') n2++;
        } else break;
    }
    var el = document.getElementById(parent);
    if ((n1 == 0) && (n2 == 0)) {
        $(el).attr('class', 'img img35 unselectable');
        $(el).attr('name', '0');
    } else if ((n0 == 0) && (n2 == 0)) {
        $(el).attr('class', 'img img36 unselectable');
        $(el).attr('name', '1');
    } else {
        $(el).attr('class', 'img img37 unselectable');
        $(el).attr('name', '2');
    }
    var ex = explode('_', parent);
    if (ex.length > 1) {
        id = ex[ex.length - 1];
        ex.length = ex.length - 1;
        parent = implode('_', ex);
        ch_click(parent, id, false);
    }
}

function formatBytes(bytes, decimals) {
    if (bytes == 0) return '0 Byte';
    var k = 1024;
    var dm = decimals + 1 || 3;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function tree_up_cnts(size_div_id) {
    var res = ch_scan(0);
    $("#" + size_div_id).html(formatBytes(res[1]));
}

function ch_click(parent, id, doxor, size_div_id) {
    var el = document.getElementById(parent + '_' + id);
    if (el) {
        ch_click2(el, parent, id, doxor);
    }
}

function ch_under(parent, id, set, up, size_div_id) {
    var el1 = document.getElementById(parent + '_' + id);
    if (el1.id != '') {
        if (set === false) var set = xor_check(el1);
        for (var i = 0; true; i++) {
            var el = document.getElementById(parent + '_' + id + '_' + i);
            if (el) {
                if (set === '0') {
                    $(el).attr('class', 'img img35 unselectable');
                    $(el).attr('name', '0');
                } else if (set === '1') {
                    $(el).attr('class', 'img img36 unselectable');
                    $(el).attr('name', '1');
                }
                ch_under(parent + '_' + id, i, set, false);
            } else break;
        }
    }
    if (up) ch_click2(el1, parent, id, false);
}

function resize_tree_in_dialog1(dialog_id, tree_id) {
    var el = top.$("#id_tree_" + tree_id);
    el.css("overflow-y", "visible");
    el.height("auto");
}

function resize_tree_in_dialog2(dialog_id, tree_id) {
    top.dialog_fit_in_window();
    var di = top.$("#" + dialog_id);
    var he = di.height();
    var el = top.$("#id_tree_" + tree_id);
    el.height(he - 8);
    el.css("overflow-y", "scroll");
}

function pl_check(id, tree_id, dialog_id) {
    if (typeof dialog_id != "undefined") {
        resize_tree_in_dialog1(dialog_id, tree_id);
    }
    var el = document.getElementById('pl_' + id);
    var el2 = document.getElementById('im_' + id);
    if (el) {
        if (el.style.display == 'none') {
            $(el).show();
            $(el2).attr('class', 'img img2 unselectable');
        } else {
            $(el).hide();
            $(el2).attr('class', 'img img3 unselectable');
        }
    }
    if (typeof dialog_id != "undefined") {
        resize_tree_in_dialog2(dialog_id, tree_id);
    }
}

var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function base64_encode(input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    input = _utf8_encode(input);
    while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }
        output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
    }
    return output;
}

function base64_decode(input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < input.length) {
        enc1 = this._keyStr.indexOf(input.charAt(i++));
        enc2 = this._keyStr.indexOf(input.charAt(i++));
        enc3 = this._keyStr.indexOf(input.charAt(i++));
        enc4 = this._keyStr.indexOf(input.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output = output + String.fromCharCode(chr1);
        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }
    }
    output = _utf8_decode(output);
    return output;
}

function _utf8_encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) {
            utftext += String.fromCharCode(c);
        } else if ((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        } else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }
    }
    return utftext;
}

function _utf8_decode(utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;
    while (i < utftext.length) {
        c = utftext.charCodeAt(i);
        if (c < 128) {
            string += String.fromCharCode(c);
            i++;
        } else if ((c > 191) && (c < 224)) {
            c2 = utftext.charCodeAt(i + 1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
        } else {
            c2 = utftext.charCodeAt(i + 1);
            c3 = utftext.charCodeAt(i + 2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }
    }
    return string;
}

function toggle_chkbutton(id) {
    var el = $('#img_' + id)[0];
    var ischk = el.className == 'img img36';
    if (ischk) {
        el.className = 'img img35'
    } else {
        el.className = 'img img36'
    }
    $('#' + id)[0].value = ischk ? '0' : '1';
    return !ischk;
}

function in_array(needle, haystack, strict) {
    var found = false, key, strict = !!strict;
    for (key in haystack) {
        if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
            found = true;
            break;
        }
    }
    return found;
}

function isVisible(obj) {
    if (obj == document) return true
    if (!obj) return false
    if (!obj.parentNode) return false
    if (obj.style) {
        if (obj.style.display == 'none') return false
        if (obj.style.visibility == 'hidden') return false
    }
    if (window.getComputedStyle) {
        var style = window.getComputedStyle(obj, "")
        if (style.display == 'none') return false
        if (style.visibility == 'hidden') return false
    }
    var style = obj.currentStyle
    if (style) {
        if (style['display'] == 'none') return false
        if (style['visibility'] == 'hidden') return false
    }
    return isVisible(obj.parentNode)
}

function addHidden(theForm, key, value) {
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    theForm.appendChild(input);
}

function urlencode(str) {
    str = (str + '').toString();
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}

function get_checked_files_by_comma() {
    var sels = top.inc.mainframe.$("[name='files[]']");
    //console.log(sels);
    // var sels = top.inc.mainframe.$("form input:checkbox:checked");
    var ret = '';
    sels.each(function (index) {
        if (this.checked) {
            if (ret.length > 0) ret += ',';
            ret = ret + $(this).val();
        }
    });
    return ret;
}

$.fn.extend({
    disableSelection: function () {
        this.each(function () {
            if (typeof this.onselectstart != 'undefined') {
                this.onselectstart = function () {
                    return false;
                };
            } else if (typeof this.style.MozUserSelect != 'undefined') {
                this.style.MozUserSelect = 'none';
            } else {
                this.onmousedown = function () {
                    return false;
                };
            }
        });
    }
});

function get_radio_buttons_selected_id(id) {
    return $("#" + id + " :radio:checked").val();
}

function get_multiselected_values_string(id) {
    var ret = '';
    $("#" + id + " :selected").each(function (i, selected) {
        ret += urlencode(selected.value) + ',';
    });
    return ret;
}

function get_multiselected_values(id) {
    var ret = [];
    $("#" + id + " :selected").each(function (i, selected) {
        ret.push(selected.value);
    });
    return ret;
}

function ch_scan(now) {
    var mas = [];
    var size = 0;
    for (var i = 0; true; i++) {
        var el = document.getElementById(now + '_' + i);
        if (el) {
            if (($(el).attr('lang') !== '') && ($(el).attr('name') === '1')) {
                mas.push(el.lang);
                size += parseInt(el.getAttribute("data-size"));
            }
            var sub = ch_scan(now + '_' + i);
            if (sub[0].length > 0) {
                for (var key in sub[0]) {
                    mas.push(sub[0][key]);
                }
                size += sub[1];
            }
        } else break;
    }
    return [mas, size];
}

function ch_process(now, op) {
    for (var i = 0; true; i++) {
        var el = document.getElementById(now + '_' + i);
        if (el) {
            if (op < 2) {
                $(el).attr('class', 'img img3' + (5 + op));
                $(el).attr('name', op);
            } else {
                var v = $(el).attr('name');
                $(el).attr('class', 'img img3' + (5 + (1 - v)));
                $(el).attr('name', 1 - v);
            }
            var sub = ch_process(now + '_' + i, op);
        } else break;
    }
}

function tree_resize(id, mh) {
    $("#id_tree_" + id).each(function (index) {
        var notvis = !$(this).is(":visible");
        var h = $(this).height();
        if (h > mh || notvis) $(this).css('max-height', mh + 'px');
    });
}

$(document).ready(function () {
    $('label').disableSelection();
});

function disable_div_mainframe(id) {
    top.inc.mainframe.$('#' + id + '').children().each(function (index) {
        $(this).addClass("disabled");
    });
}

function enable_div_mainframe(id) {
    top.inc.mainframe.$('#' + id + '').children().each(function (index) {
        $(this).removeClass("disabled");
    });
}

function serialize_element(id) {
    return $("#" + id).find("select, textarea, input").serialize();
}

function serialize_element_by_name(name) {
    return $('[name="' + name + '"]').find("select, textarea, input").serialize();
}

function javascript_abort() {
    throw new Error('This is not an error. This is just to abort javascript');
}

function OnSelectKey(th) {
    var el = $(th);
    var eldiv = $(th).parent();
    var el2 = $(el[0].selectedOptions[0])[0];
    el2.scrollIntoView();
}

function switch_tab(name, x) {
    $("[id^=" + name + "]").removeClass('selected');
    $('#' + name + '_' + x).addClass('selected');
    $("[id^=page_" + name + "_]").hide(0);
    $("[id^=page_" + name + "_" + x + "]").show(0);
    $("#" + name + '_active').val(x);
}

$(document).ready(function () {
    if (!(window.mozInnerScreenX == null)) {
        $('textarea[rows]').each(function (i, el) {
            if (!$(el).data('ffRowsFixed')) {
                var rows = parseInt($(el).attr('rows'));
                if (rows > 1) {
                    $(el).attr('rows', (rows - 1));
                }
                $(el).data('ffRowsFixed', true);
            }
        });
    }
});

function init_datatable(id, columns) {
    var params = {
        scrollY: 0,
        "paging": false,
        "fnRowCallback": function (nRow, aData, iDisplayIndex) {
            $('td', nRow).each(function (index) {
                var was = $(this).attr('style');
                $(this).attr('style', was + '; overflow: hidden; white-space:pre; max-width: 10px; ');
            });
            return nRow;
        },
        "autoWidth": true,
        "columnDefs": columns,
        "bSort": false,
        "info": false,
        "deferRender": true,
        "language": {"emptyTable": "", "zeroRecords": "", "loadingRecords": "",},
        "bJQueryUI": true,
        "bAutoWidth": false,
        "sDom": 't',
        scrollCollapse: false,
    };
    mc_global_table = $('#' + id).DataTable(params);
    mc_global_table.on('xhr', function (some, some2) {
        var auto_table_json = mc_global_table.ajax.json();
        eval(auto_table_json.custom_js);
    });
    $.fn.dataTable.ext.errMode = 'none';
    mc_global_table.on('error.dt', function (e, settings, techNote, message) {
    });
}

function fill_datatable(id, dat) {
    var wrapper = $("#" + id + "_wrapper");
    automation_scrollPos = wrapper.find(".dataTables_scrollBody").scrollTop();
    var oTable = $('#' + id).dataTable();
    oTable.fnClearTable();
    oTable.fnAddData(dat);
    wrapper.find(".dataTables_scrollBody").scrollTop(automation_scrollPos);
}

function toggleStatus(id) {
    if ($('#' + id).is(':checked')) {
        $('#' + id + ' :input').prop('disabled', true);
    } else {
        $('#' + id + ' :input').removeAttr('disabled');
    }
}

function disable_div_contents(id) {
    $('#' + id + ' :input').prop('disabled', true);
    $('#' + id).prop('disabled', true);
}

function enable_div_contents(id) {
    $('#' + id + ' :input').removeAttr('disabled');
    $('#' + id).removeAttr('disabled');
}


function just_ajax(url, post, nodialog, onsucc, onerr, dialogid, pre_exec_js) {
    if (typeof (dialogid) === 'undefined') dialogid = 'dialog';
    if (typeof (pre_exec_js) === 'undefined') pre_exec_js = false;
    var dlg = $("#" + dialogid);
    if (!nodialog) {
        dlg.fadeTo(200, 0.5);
    }
    $.ajax({
        url: url,
        method: "POST",
        cache: false,
        data: post,
        error: function (data, textStatus) {
            if (!nodialog) $("#" + dialogid).fadeTo(100, 1);
            if (typeof onerr !== 'undefined') if (onerr !== null) onerr();
            if (!nodialog) {
                dlg.fadeTo(100, 1);
                dlg.html(data);
            }
        },
        success: function (data, textStatus) {
            delete inner_create;

            if (pre_exec_js) {
                var eva = cut_str(data, "\<script\>", "\<\/script\>");
                eval(eva[0]);
                if (eva[0].length > 0) {
                    data = eva[1];
                }
            }

            if (typeof onsucc !== 'undefined') if (onsucc !== null) onsucc(data);
            var vis = isVisible(dlg);
            if (!vis && dlg.hasClass('ui-dialog-content')) {
                vis = dlg.dialog('isOpen');
            }
            if (vis) {
                if (!nodialog) dlg.fadeTo(100, 1);
                if (!nodialog) {
                    //console.log("html >"+data);
                    dlg.html(data);
                } else {
                    if (!pre_exec_js) {
                        $("#dialog_js").html(data);
                    }
                }
                if (!nodialog) {
                    if (typeof inner_create === 'function') inner_create();
                }
                if (!nodialog) dialog_fit_in_window(dialogid);
            } else {
                if (nodialog) {
                    $("#dialog_js").html(data);
                }
            }
        }
    });

}

sleep = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

