function hex2bin(str) {
    var ret = '';
    var tmp = '';
    for (var i = 0; i < str.length - 1; i += 2) {
        var c = String.fromCharCode(parseInt(str.substr(i, 2), 16));
        if (c.charCodeAt() > 127) {
            tmp += '%' + str.substr(i, 2);
            if (tmp.length == 9) {
                ret += decodeURIComponent(tmp);
                tmp = '';
            }
        } else {
            ret += c;
        }
    }
    return ret;
}

