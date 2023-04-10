function hex_md5(d){return binl2hex(core_md5(str2binl(d),d.length*chrsz))}function b64_md5(d){return binl2b64(core_md5(str2binl(d),d.length*chrsz))}function hex_hmac_md5(d,r){return binl2hex(core_hmac_md5(d,r))}function b64_hmac_md5(d,r){return binl2b64(core_hmac_md5(d,r))}function calcMD5(d){return binl2hex(core_md5(str2binl(d),d.length*chrsz))}function md5_vm_test(){return"900150983cd24fb0d6963f7d28e17f72"==hex_md5("abc")}function core_md5(d,r){d[r>>5]|=128<<r%32,d[(r+64>>>9<<4)+14]=r;for(var _=1732584193,m=-271733879,n=-1732584194,f=271733878,h=0;h<d.length;h+=16){var t=_,i=m,e=n,c=f;_=md5_ff(_,m,n,f,d[h+0],7,-680876936),f=md5_ff(f,_,m,n,d[h+1],12,-389564586),n=md5_ff(n,f,_,m,d[h+2],17,606105819),m=md5_ff(m,n,f,_,d[h+3],22,-1044525330),_=md5_ff(_,m,n,f,d[h+4],7,-176418897),f=md5_ff(f,_,m,n,d[h+5],12,1200080426),n=md5_ff(n,f,_,m,d[h+6],17,-1473231341),m=md5_ff(m,n,f,_,d[h+7],22,-45705983),_=md5_ff(_,m,n,f,d[h+8],7,1770035416),f=md5_ff(f,_,m,n,d[h+9],12,-1958414417),n=md5_ff(n,f,_,m,d[h+10],17,-42063),m=md5_ff(m,n,f,_,d[h+11],22,-1990404162),_=md5_ff(_,m,n,f,d[h+12],7,1804603682),f=md5_ff(f,_,m,n,d[h+13],12,-40341101),n=md5_ff(n,f,_,m,d[h+14],17,-1502002290),m=md5_ff(m,n,f,_,d[h+15],22,1236535329),_=md5_gg(_,m,n,f,d[h+1],5,-165796510),f=md5_gg(f,_,m,n,d[h+6],9,-1069501632),n=md5_gg(n,f,_,m,d[h+11],14,643717713),m=md5_gg(m,n,f,_,d[h+0],20,-373897302),_=md5_gg(_,m,n,f,d[h+5],5,-701558691),f=md5_gg(f,_,m,n,d[h+10],9,38016083),n=md5_gg(n,f,_,m,d[h+15],14,-660478335),m=md5_gg(m,n,f,_,d[h+4],20,-405537848),_=md5_gg(_,m,n,f,d[h+9],5,568446438),f=md5_gg(f,_,m,n,d[h+14],9,-1019803690),n=md5_gg(n,f,_,m,d[h+3],14,-187363961),m=md5_gg(m,n,f,_,d[h+8],20,1163531501),_=md5_gg(_,m,n,f,d[h+13],5,-1444681467),f=md5_gg(f,_,m,n,d[h+2],9,-51403784),n=md5_gg(n,f,_,m,d[h+7],14,1735328473),m=md5_gg(m,n,f,_,d[h+12],20,-1926607734),_=md5_hh(_,m,n,f,d[h+5],4,-378558),f=md5_hh(f,_,m,n,d[h+8],11,-2022574463),n=md5_hh(n,f,_,m,d[h+11],16,1839030562),m=md5_hh(m,n,f,_,d[h+14],23,-35309556),_=md5_hh(_,m,n,f,d[h+1],4,-1530992060),f=md5_hh(f,_,m,n,d[h+4],11,1272893353),n=md5_hh(n,f,_,m,d[h+7],16,-155497632),m=md5_hh(m,n,f,_,d[h+10],23,-1094730640),_=md5_hh(_,m,n,f,d[h+13],4,681279174),f=md5_hh(f,_,m,n,d[h+0],11,-358537222),n=md5_hh(n,f,_,m,d[h+3],16,-722521979),m=md5_hh(m,n,f,_,d[h+6],23,76029189),_=md5_hh(_,m,n,f,d[h+9],4,-640364487),f=md5_hh(f,_,m,n,d[h+12],11,-421815835),n=md5_hh(n,f,_,m,d[h+15],16,530742520),m=md5_hh(m,n,f,_,d[h+2],23,-995338651),_=md5_ii(_,m,n,f,d[h+0],6,-198630844),f=md5_ii(f,_,m,n,d[h+7],10,1126891415),n=md5_ii(n,f,_,m,d[h+14],15,-1416354905),m=md5_ii(m,n,f,_,d[h+5],21,-57434055),_=md5_ii(_,m,n,f,d[h+12],6,1700485571),f=md5_ii(f,_,m,n,d[h+3],10,-1894986606),n=md5_ii(n,f,_,m,d[h+10],15,-1051523),m=md5_ii(m,n,f,_,d[h+1],21,-2054922799),_=md5_ii(_,m,n,f,d[h+8],6,1873313359),f=md5_ii(f,_,m,n,d[h+15],10,-30611744),n=md5_ii(n,f,_,m,d[h+6],15,-1560198380),m=md5_ii(m,n,f,_,d[h+13],21,1309151649),_=md5_ii(_,m,n,f,d[h+4],6,-145523070),f=md5_ii(f,_,m,n,d[h+11],10,-1120210379),n=md5_ii(n,f,_,m,d[h+2],15,718787259),m=md5_ii(m,n,f,_,d[h+9],21,-343485551),_=safe_add(_,t),m=safe_add(m,i),n=safe_add(n,e),f=safe_add(f,c)}return Array(_,m,n,f)}function md5_cmn(d,r,_,m,n,f){return safe_add(bit_rol(safe_add(safe_add(r,d),safe_add(m,f)),n),_)}function md5_ff(d,r,_,m,n,f,h){return md5_cmn(r&_|~r&m,d,r,n,f,h)}function md5_gg(d,r,_,m,n,f,h){return md5_cmn(r&m|_&~m,d,r,n,f,h)}function md5_hh(d,r,_,m,n,f,h){return md5_cmn(r^_^m,d,r,n,f,h)}function md5_ii(d,r,_,m,n,f,h){return md5_cmn(_^(r|~m),d,r,n,f,h)}function core_hmac_md5(d,r){var _=str2binl(d);_.length>16&&(_=core_md5(_,d.length*chrsz));for(var m=Array(16),n=Array(16),f=0;16>f;f++)m[f]=909522486^_[f],n[f]=1549556828^_[f];var h=core_md5(m.concat(str2binl(r)),512+r.length*chrsz);return core_md5(n.concat(h),640)}function safe_add(d,r){var _=(65535&d)+(65535&r),m=(d>>16)+(r>>16)+(_>>16);return m<<16|65535&_}function bit_rol(d,r){return d<<r|d>>>32-r}function str2binl(d){for(var r=Array(),_=(1<<chrsz)-1,m=0;m<d.length*chrsz;m+=chrsz)r[m>>5]|=(d.charCodeAt(m/chrsz)&_)<<m%32;return r}function binl2hex(d){for(var r=hexcase?"0123456789ABCDEF":"0123456789abcdef",_="",m=0;m<4*d.length;m++)_+=r.charAt(d[m>>2]>>m%4*8+4&15)+r.charAt(d[m>>2]>>m%4*8&15);return _}function binl2b64(d){for(var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",_="",m=0;m<4*d.length;m+=3)for(var n=(d[m>>2]>>8*(m%4)&255)<<16|(d[m+1>>2]>>8*((m+1)%4)&255)<<8|d[m+2>>2]>>8*((m+2)%4)&255,f=0;4>f;f++)_+=8*m+6*f>32*d.length?b64pad:r.charAt(n>>6*(3-f)&63);return _}var hexcase=0,b64pad="",chrsz=8,t2c=function(){var d=function(d,r,_){var m=1;for(r+=1;1!=r;)m*=d,m%=_,r--;return m};return function(r,_,m){if("string"!=typeof r)return"";for(var n=[],f=0,h=r.length;h>f;f++)n.push(d(r.charCodeAt(f),_,m));return n}}();