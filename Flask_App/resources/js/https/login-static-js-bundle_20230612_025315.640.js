/*! jQuery v3.6.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,y,s,c,v,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[S]&&(y=Ce(y)),v&&!v[S]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function $(){E.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||S.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(t,e){S.event.special[t]={setup:function(){return Se(this,t,Ce),!1},trigger:function(){return Se(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&(a=a.replace($e,"$1")),""!==a||ie(e)||(a=S.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=E.createElement("div").style,Xe={};function Ve(e){var t=S.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return B(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return B(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){S(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=S(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:yt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},v.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),v.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,S.ajaxSettings),t):Bt(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=S.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?S(v):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=E.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=S.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=S.event&&y.global)&&0==S.active++&&S.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(Et.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<S.inArray("script",y.dataTypes)&&S.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

/*
 AngularJS
 (c) 2010-2020 Google LLC. http://angularjs.org
 License: MIT
 XLTS for AngularJS v1.8.7
 (c) 2021 XLTS.dev All Rights Reserved. https://xlts.dev/angularjs
 License: Obtain a commercial license from XLTS.dev before using this software.
*/
(function(A){'use strict';function we(a){if(D(a))w(a.objectMaxDepth)&&(Xb.objectMaxDepth=Yb(a.objectMaxDepth)?a.objectMaxDepth:NaN),w(a.urlErrorParamsEnabled)&&Ga(a.urlErrorParamsEnabled)&&(Xb.urlErrorParamsEnabled=a.urlErrorParamsEnabled);else return Xb}function Yb(a){return X(a)&&0<a}function F(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.xlts.dev/1.8.7/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=
encodeURIComponent,f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;c+=e(f)}return new b(c)}}function Aa(a){if(null==a||$a(a))return!1;if(H(a)||C(a)||x&&a instanceof x)return!0;var b="length"in Object(a)&&a.length;return X(b)&&(0<=b&&b-1 in a||"function"===typeof a.item)}function r(a,b,d){var c,e;if(a)if(B(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],
c,a);else if(H(a)||Aa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==r)a.forEach(b,d,a);else if(Pc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)ta.call(a,c)&&b.call(d,a[c],c,a);return a}function Qc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Zb(a){return function(b,d){a(d,
b)}}function xe(){return++qb}function $b(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(D(g)||B(g))for(var k=Object.keys(g),h=0,l=k.length;h<l;h++){var m=k[h],p=g[m];d&&D(p)?ha(p)?a[m]=new Date(p.valueOf()):ab(p)?a[m]=new RegExp(p):p.nodeName?a[m]=p.cloneNode(!0):ac(p)?a[m]=p.clone():"__proto__"!==m&&(D(a[m])||(a[m]=H(p)?[]:{}),$b(a[m],[p],!0)):a[m]=p}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function S(a){return $b(a,Ha.call(arguments,1),!1)}function ye(a){return $b(a,Ha.call(arguments,
1),!0)}function fa(a){return parseInt(a,10)}function bc(a,b){return S(Object.create(a),b)}function E(){}function Ta(a){return a}function ia(a){return function(){return a}}function cc(a){return B(a.toString)&&a.toString!==la}function z(a){return"undefined"===typeof a}function w(a){return"undefined"!==typeof a}function D(a){return null!==a&&"object"===typeof a}function Pc(a){return null!==a&&"object"===typeof a&&!Rc(a)}function C(a){return"string"===typeof a}function X(a){return"number"===typeof a}
function ha(a){return"[object Date]"===la.call(a)}function H(a){return Array.isArray(a)||a instanceof Array}function dc(a){switch(la.call(a)){case "[object Error]":return!0;case "[object Exception]":return!0;case "[object DOMException]":return!0;default:return a instanceof Error}}function B(a){return"function"===typeof a}function ab(a){return"[object RegExp]"===la.call(a)}function $a(a){return a&&a.window===a}function bb(a){return a&&a.$evalAsync&&a.$watch}function Ga(a){return"boolean"===typeof a}
function ze(a){return a&&X(a.length)&&Ae.test(la.call(a))}function ac(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function Be(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ua(a){return K(a.nodeName||a[0]&&a[0].nodeName)}function cb(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Ia(a,b,d){function c(a,b,c){c--;if(0>c)return"...";var d=b.$$hashKey,f;if(H(a)){f=0;for(var g=a.length;f<g;f++)b.push(e(a[f],c))}else if(Pc(a))for(f in a)b[f]=
e(a[f],c);else if(a&&"function"===typeof a.hasOwnProperty)for(f in a)a.hasOwnProperty(f)&&(b[f]=e(a[f],c));else for(f in a)ta.call(a,f)&&(b[f]=e(a[f],c));d?b.$$hashKey=d:delete b.$$hashKey;return b}function e(a,b){if(!D(a))return a;var d=g.indexOf(a);if(-1!==d)return k[d];if($a(a)||bb(a))throw oa("cpws");var d=!1,e=f(a);void 0===e&&(e=H(a)?[]:Object.create(Rc(a)),d=!0);g.push(a);k.push(e);return d?c(a,e,b):e}function f(a){switch(la.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(e(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(B(a.cloneNode))return a.cloneNode(!0)}
var g=[],k=[];d=Yb(d)?d:NaN;if(b){if(ze(b)||"[object ArrayBuffer]"===la.call(b))throw oa("cpta");if(a===b)throw oa("cpi");H(b)?b.length=0:r(b,function(a,c){"$$hashKey"!==c&&delete b[c]});g.push(a);k.push(b);return c(a,b,d)}return e(a,d)}function ec(a,b){return a===b||a!==a&&b!==b}function va(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(H(a)){if(!H(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!va(a[c],
b[c]))return!1;return!0}}else{if(ha(a))return ha(b)?ec(a.getTime(),b.getTime()):!1;if(ab(a))return ab(b)?a.toString()===b.toString():!1;if(bb(a)||bb(b)||$a(a)||$a(b)||H(b)||ha(b)||ab(b))return!1;d=T();for(c in a)if("$"!==c.charAt(0)&&!B(a[c])){if(!va(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&w(b[c])&&!B(b[c]))return!1;return!0}return!1}function db(a,b,d){return a.concat(Ha.call(b,d))}function Va(a,b){var d=2<arguments.length?Ha.call(arguments,2):[];return!B(b)||b instanceof
RegExp?b:d.length?function(){return arguments.length?b.apply(a,db(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Sc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:$a(b)?d="$WINDOW":b&&A.document===b?d="$DOCUMENT":bb(b)&&(d="$SCOPE");return d}function eb(a,b){if(!z(a))return X(b)||(b=b?2:null),JSON.stringify(a,Sc,b)}function Tc(a){return C(a)?JSON.parse(a):a}function fc(a,b){a=a.replace(Ce,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+
a)/6E4;return Y(d)?b:d}function Uc(a,b){a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function gc(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=fc(b,c);return Uc(a,d*(b-c))}function Ba(a){a=x(a).clone().empty();var b=x("<div></div>").append(a).html();try{return a[0].nodeType===Pa?K(b):b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+K(b)})}catch(d){return K(b)}}function Vc(a){try{return decodeURIComponent(a)}catch(b){}}function hc(a){var b={};r((a||"").split("&"),
function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Vc(e),w(e)&&(f=w(f)?Vc(f):!0,ta.call(b,e)?H(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function De(a){var b=[];r(a,function(a,c){H(a)?r(a,function(a){b.push(ca(c,!0)+(!0===a?"":"="+ca(a,!0)))}):b.push(ca(c,!0)+(!0===a?"":"="+ca(a,!0)))});return b.length?b.join("&"):""}function ic(a){return ca(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ca(a,
b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function Ee(a,b){var d,c,e=Qa.length;for(c=0;c<e;++c)if(d=Qa[c]+b,C(d=a.getAttribute(d)))return d;return null}function Fe(a,b){var d,c,e={};r(Qa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});r(Qa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});
d&&(Ge?(e.strictDi=null!==Ee(d,"strict-di"),b(d,c?[c]:[],e)):A.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Wc(a,b,d){D(d)||(d={});d=S({strictDi:!1},d);var c=function(){a=x(a);if(a.injector()){var c=a[0]===A.document?"document":Ba(a);throw oa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",
function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=fb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;A&&e.test(A.name)&&(d.debugInfoEnabled=!0,A.name=A.name.replace(e,""));if(A&&!f.test(A.name))return c();A.name=A.name.replace(f,"");da.resumeBootstrap=function(a){r(a,function(a){b.push(a)});return c()};B(da.resumeDeferredBootstrap)&&
da.resumeDeferredBootstrap()}function He(){A.name="NG_ENABLE_DEBUG_INFO!"+A.name;A.location.reload()}function Ie(a){a=da.element(a).injector();if(!a)throw oa("test");return a.get("$$testability")}function Xc(a,b){b=b||"_";return a.replace(Je,function(a,c){return(c?b:"")+a.toLowerCase()})}function Ke(){var a;if(!Yc){var b=rb();(sb=z(b)?A.jQuery:b?A[b]:void 0)&&sb.fn.on?(x=sb,S(sb.fn,{scope:Wa.scope,isolateScope:Wa.isolateScope,controller:Wa.controller,injector:Wa.injector,inheritedData:Wa.inheritedData})):
x=U;a=x.cleanData;x.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=(x._data(f)||{}).events)&&c.$destroy&&x(f).triggerHandler("$destroy");a(b)};da.element=x;Yc=!0}}function Le(){U.htmlPrefilter=function(a){var b=a.replace(Me,"<$1></$2>");A.console&&A.console.warn&&a!==b&&A.console.warn("JQLite changed the HTML string:\n\n"+a+"\n\nto remove self-closing tags, resulting in this HTML string:\n\n"+b+"\n\nJQLite no longer does this replacement when you stop calling UNSAFE_restoreLegacyJqLiteXHTMLReplacement; please update your code to avoid self-closing tags.");
return b}}function gb(a,b,d){if(!a)throw oa("areq",b||"?",d||"required");return a}function tb(a,b,d){d&&H(a)&&(a=a[a.length-1]);gb(B(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ja(a,b){if("hasOwnProperty"===a)throw oa("badname",b);}function Ne(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&B(a)?Va(e,a):a}function ub(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||
a[e]!==b)c||(c=x(Ha.call(a,0,e))),c.push(b);return c||a}function T(){return Object.create(null)}function jc(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!cc(a)||H(a)||ha(a)?eb(a):a.toString()}return a}function Oe(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=F("$injector"),c=F("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||F;return b(a,"module",function(){var a={};return function(f,g,k){var h={};if("hasOwnProperty"===f)throw c("badname",
"module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,f){f||(f=e);return function(){f[d||"push"]([b,c,arguments]);return t}}function b(a,c,d){d||(d=e);return function(b,e){e&&B(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return t}}if(!g)throw d("nomod",f);var e=[],n=[],s=[],G=a("$injector","invoke","push",n),t={_invokeQueue:e,_configBlocks:n,_runBlocks:s,info:function(a){if(w(a)){if(!D(a))throw c("aobj","value");h=a;return this}return h},requires:g,name:f,provider:b("$provide",
"provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",n),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:G,run:function(a){s.push(a);return this}};k&&G(k);return t})}})}function ja(a,b){if(H(a)){b=
b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(D(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function Pe(a,b){var d=[];Yb(b)&&(a=da.copy(a,null,b));return JSON.stringify(a,function(a,b){b=Sc(a,b);if(D(b)){if(0<=d.indexOf(b))return"...";d.push(b)}return b})}function Qe(a){S(a,{errorHandlingConfig:we,bootstrap:Wc,copy:Ia,extend:S,merge:ye,equals:va,element:x,forEach:r,injector:fb,noop:E,bind:Va,toJson:eb,fromJson:Tc,identity:Ta,isUndefined:z,isDefined:w,
isString:C,isFunction:B,isObject:D,isNumber:X,isElement:ac,isArray:H,version:Re,isDate:ha,callbacks:{$$counter:0},getTestability:Ie,reloadWithDebugInfo:He,UNSAFE_restoreLegacyJqLiteXHTMLReplacement:Le,$$minErr:F,$$csp:Ca,$$encodeUriSegment:ic,$$encodeUriQuery:ca,$$lowercase:K,$$stringify:jc,$$uppercase:vb});lc=Oe(A);lc("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Se});a.provider("$compile",Zc).directive({a:Te,input:$c,textarea:$c,form:Ue,script:Ve,select:We,option:Xe,ngBind:Ye,
ngBindHtml:Ze,ngBindTemplate:$e,ngClass:af,ngClassEven:bf,ngClassOdd:cf,ngCloak:df,ngController:ef,ngForm:ff,ngHide:gf,ngIf:hf,ngInclude:jf,ngInit:kf,ngNonBindable:lf,ngPluralize:mf,ngRef:nf,ngRepeat:of,ngShow:pf,ngStyle:qf,ngSwitch:rf,ngSwitchWhen:sf,ngSwitchDefault:tf,ngOptions:uf,ngTransclude:vf,ngModel:wf,ngList:xf,ngChange:yf,pattern:ad,ngPattern:ad,required:bd,ngRequired:bd,minlength:cd,ngMinlength:cd,maxlength:dd,ngMaxlength:dd,ngValue:zf,ngModelOptions:Af}).directive({ngInclude:Bf,input:Cf}).directive(wb).directive(ed);
a.provider({$anchorScroll:Df,$animate:Ef,$animateCss:Ff,$$animateJs:Gf,$$animateQueue:Hf,$$AnimateRunner:If,$$animateAsyncRun:Jf,$browser:Kf,$cacheFactory:Lf,$controller:Mf,$document:Nf,$$isDocumentHidden:Of,$exceptionHandler:Pf,$filter:fd,$$forceReflow:Qf,$interpolate:Rf,$interval:Sf,$$intervalFactory:Tf,$http:Uf,$httpParamSerializer:Vf,$httpParamSerializerJQLike:Wf,$httpBackend:Xf,$xhrFactory:Yf,$jsonpCallbacks:Zf,$location:$f,$log:ag,$parse:bg,$rootScope:cg,$q:dg,$$q:eg,$sce:fg,$sceDelegate:gg,
$sniffer:hg,$$taskTrackerFactory:ig,$templateCache:jg,$templateRequest:kg,$$testability:lg,$timeout:mg,$window:ng,$$rAF:og,$$jqLite:pg,$$Map:qg,$$cookieReader:rg})}]).info({angularVersion:"1.8.7"})}function xb(a,b){return b.toUpperCase()}function yb(a){return a.replace(sg,xb)}function mc(a){a=a.nodeType;return 1===a||!a||9===a}function gd(a,b){var d,c,e,f=b.createDocumentFragment(),g=[],k;if(nc.test(a)){d=f.appendChild(b.createElement("div"));c=(tg.exec(a)||["",""])[1].toLowerCase();e=U.htmlPrefilter(a);
if(10>wa)for(c=hb[c]||hb._default,d.innerHTML=c[1]+e+c[2],k=c[0];k--;)d=d.firstChild;else{c=qa[c]||[];for(k=c.length;-1<--k;)d.appendChild(A.document.createElement(c[k])),d=d.firstChild;d.innerHTML=e}g=db(g,d.childNodes);d=f.firstChild;d.textContent=""}else g.push(b.createTextNode(a));f.textContent="";f.innerHTML="";r(g,function(a){f.appendChild(a)});return f}function U(a){if(a instanceof U)return a;var b;C(a)&&(a=V(a),b=!0);if(!(this instanceof U)){if(b&&"<"!==a.charAt(0))throw oc("nosel");return new U(a)}if(b){b=
A.document;var d;a=(d=ug.exec(a))?[b.createElement(d[1])]:(d=gd(a,b))?d.childNodes:[];pc(this,a)}else B(a)?hd(a):pc(this,a)}function qc(a){return a.cloneNode(!0)}function zb(a,b){!b&&mc(a)&&x.cleanData([a]);a.querySelectorAll&&x.cleanData(a.querySelectorAll("*"))}function id(a){for(var b in a)return!1;return!0}function jd(a){var b=a.ng339,d=b&&Ka[b],c=d&&d.events,d=d&&d.data;d&&!id(d)||c&&!id(c)||(delete Ka[b],a.ng339=void 0)}function kd(a,b,d,c){if(w(c))throw oc("offargs");var e=(c=Ab(a))&&c.events,
f=c&&c.handle;if(f){if(b){var g=function(b){var c=e[b];w(d)&&cb(c||[],d);w(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};r(b.split(" "),function(a){g(a);Bb[a]&&g(Bb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f),delete e[b];jd(a)}}function rc(a,b){var d=a.ng339;if(d=d&&Ka[d])b?delete d.data[b]:d.data={},jd(a)}function Ab(a,b){var d=a.ng339,d=d&&Ka[d];b&&!d&&(a.ng339=d=++vg,d=Ka[d]={events:{},data:{},handle:void 0});return d}function sc(a,b,d){if(mc(a)){var c,e=w(d),
f=!e&&b&&!D(b),g=!b;a=(a=Ab(a,!f))&&a.data;if(e)a[yb(b)]=d;else{if(g)return a;if(f)return a&&a[yb(b)];for(c in b)a[yb(c)]=b[c]}}}function Cb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Db(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=V(a);c=c.replace(" "+a+" "," ")});c!==d&&a.setAttribute("class",V(c))}}function Eb(a,b){if(b&&a.setAttribute){var d=
(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=V(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});c!==d&&a.setAttribute("class",V(c))}}function pc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function ld(a,b){return Fb(a,"$"+(b||"ngController")+"Controller")}function Fb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=H(b)?b:[b];a;){for(var c=
0,e=b.length;c<e;c++)if(w(d=x.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function md(a){for(zb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Gb(a,b){b||zb(a);var d=a.parentNode;d&&d.removeChild(a)}function wg(a,b){b=b||A;if("complete"===b.document.readyState)b.setTimeout(a);else x(b).on("load",a)}function hd(a){function b(){A.document.removeEventListener("DOMContentLoaded",b);A.removeEventListener("load",b);a()}"complete"===A.document.readyState?A.setTimeout(a):(A.document.addEventListener("DOMContentLoaded",
b),A.addEventListener("load",b))}function nd(a,b){var d=Hb[b.toLowerCase()];return d&&od[ua(a)]&&d}function xg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(z(c.immediatePropagationStopped)){var k=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();k&&k.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};
var h=f.specialHandlerWrapper||yg;1<g&&(f=ja(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||h(a,c,f[l])}};d.elem=a;return d}function yg(a,b,d){d.call(a,b)}function zg(a,b,d){var c=b.relatedTarget;c&&(c===a||Ag.call(a,c))||d.call(a,b)}function pg(){this.$get=function(){return S(U,{hasClass:function(a,b){a.attr&&(a=a[0]);return Cb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Eb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Db(a,b)}})}}function La(a,b){var d=a&&a.$$hashKey;
if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||xe)():d+":"+a}function pd(){this._keys=[];this._values=[];this._lastKey=NaN;this._lastIndex=-1}function qd(a){a=Function.prototype.toString.call(a).replace(Bg,"");return a.match(Cg)||a.match(Dg)}function Eg(a){return(a=qd(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function fb(a,b){function d(a){return function(b,c){if(D(b))r(b,Zb(a));else return a(b,
c)}}function c(a,b){Ja(a,"service");if(B(b)||H(b))b=n.instantiate(b);if(!b.$get)throw Da("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=t.invoke(b,this);if(z(c))throw Da("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){gb(z(a)||H(a),"modulesToLoad","not an array");var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=n.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.set(a,!0);try{C(a)?(c=lc(a),
t.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):B(a)?b.push(n.invoke(a)):H(a)?b.push(n.invoke(a)):tb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Da("modulerr",a,e.stack||e.message||e);}}});return b}function k(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===h)throw Da("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=h,a[b]=c(b,e),
a[b]}catch(f){throw a[b]===h&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=fb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Da("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);H(a)&&(a=a[a.length-1]);d=a;if(wa||"function"!==typeof d)d=!1;else{var f=d.$$ngIsClass;Ga(f)||(f=d.$$ngIsClass=/^class\b/.test(Function.prototype.toString.call(d)));d=f}return d?
(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=H(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:fb.$$annotate,has:function(b){return p.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var h={},l=[],m=new Ib,p={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,
ia(b),!1)}),constant:d(function(a,b){Ja(a,"constant");p[a]=b;s[a]=b}),decorator:function(a,b){var c=n.get(a+"Provider"),d=c.$get;c.$get=function(){var a=t.invoke(d,c);return t.invoke(b,null,{$delegate:a})}}}},n=p.$injector=k(p,function(a,b){da.isString(b)&&l.push(b);throw Da("unpr",l.join(" <- "));}),s={},G=k(s,function(a,b){var c=n.get(a+"Provider",b);return t.invoke(c.$get,c,void 0,a)}),t=G;p.$injectorProvider={$get:ia(G)};t.modules=n.modules=T();var N=g(a),t=G.get("$injector");t.strictDi=b;r(N,
function(a){a&&t.invoke(a)});t.loadNewModules=function(a){r(g(a),function(a){a&&t.invoke(a)})};return t}function Df(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;B(c)?c=c():ac(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):X(c)||
(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=C(a)?a:X(a)?a.toString():d.hash();var b;a?(b=k.getElementById(a))?f(b):(b=e(k.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var k=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||wg(function(){c.$evalAsync(g)})});return g}]}function ib(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;H(a)&&(a=a.join(" "));H(b)&&(b=b.join(" "));return a+" "+b}function Fg(a){C(a)&&
(a=a.split(" "));var b=T();r(a,function(a){a.length&&(b[a]=!0)});return b}function ra(a){return D(a)?a:{}}function Gg(a,b,d,c,e){function f(){pa=null;k()}function g(){t=y();t=z(t)?null:t;va(t,P)&&(t=P);N=P=t}function k(){var a=N;g();if(v!==h.url()||a!==t)v=h.url(),N=t,r(J,function(a){a(h.url(),t)})}var h=this,l=a.location,m=a.history,p=a.setTimeout,n=a.clearTimeout,s={},G=e(d);h.isMock=!1;h.$$completeOutstandingRequest=G.completeTask;h.$$incOutstandingRequestCount=G.incTaskCount;h.notifyWhenNoOutstandingRequests=
G.notifyWhenNoPendingTasks;var t,N,v=l.href,kc=b.find("base"),pa=null,y=c.history?function(){try{return m.state}catch(a){}}:E;g();h.url=function(b,d,e){z(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=N===e;b=ga(b).href;if(v===b&&(!c.history||f))return h;var k=v&&xa(v)===xa(b);v=b;N=e;!c.history||k&&f?(k||(pa=b),d?l.replace(b):k?(d=l,e=b,f=e.indexOf("#"),e=-1===f?"":e.substr(f),d.hash=e):l.href=b,l.href!==b&&(pa=b)):(m[d?"replaceState":"pushState"](e,"",b),g());
pa&&(pa=b);return h}return(pa||l.href).replace(/#$/,"")};h.state=function(){return t};var J=[],I=!1,P=null;h.onUrlChange=function(b){if(!I){if(c.history)x(a).on("popstate",f);x(a).on("hashchange",f);I=!0}J.push(b);return b};h.$$applicationDestroyed=function(){x(a).off("hashchange popstate",f)};h.$$checkUrlChange=k;h.baseHref=function(){var a=kc.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,""):""};h.defer=function(a,b,c){var d;b=b||0;c=c||G.DEFAULT_TASK_TYPE;G.incTaskCount(c);d=p(function(){delete s[d];
G.completeTask(a,c)},b);s[d]=c;return d};h.defer.cancel=function(a){if(s.hasOwnProperty(a)){var b=s[a];delete s[a];n(a);G.completeTask(E,b);return!0}return!1}}function Kf(){this.$get=["$window","$log","$sniffer","$document","$$taskTrackerFactory",function(a,b,d,c,e){return new Gg(a,c,b,d,e)}]}function Lf(){this.$get=function(){function a(a,c){function e(a){a!==p&&(n?n===a&&(n=a.n):n=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw F("$cacheFactory")("iid",
a);var g=0,k=S({},c,{id:a}),h=T(),l=c&&c.capacity||Number.MAX_VALUE,m=T(),p=null,n=null;return b[a]={put:function(a,b){if(!z(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in h||g++;h[a]=b;g>l&&this.remove(n.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return h[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===p&&(p=b.p);b===n&&(n=b.n);f(b.n,b.p);delete m[a]}a in h&&(delete h[a],g--)},removeAll:function(){h=T();g=0;m=T();
p=n=null},destroy:function(){m=k=h=null;delete b[a]},info:function(){return S({},k,{size:g})}}}var b={};a.info=function(){var a={};r(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function jg(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Zc(a,b){function d(a,b,c){var d=/^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/,e=T();r(a,function(a,f){a=a.trim();if(a in p)e[f]=p[a];else{var g=a.match(d);if(!g)throw $("iscp",b,f,a,c?"controller bindings definition":
"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(p[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==K(b))throw $("baddir",a);if(a!==a.trim())throw $("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!H(b)&&D(b)&&r(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,k=/(([\w-]+)(?::([^;]+))?;?)/,h=Be("ngSrc,ngSrcset,src,srcset"),
l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,p=T();this.directive=function pa(b,d){gb(b,"name");Ja(b,"directive");C(b)?(c(b),gb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];r(f[b],function(f,g){try{var h=a.invoke(f);B(h)?h={compile:ia(h)}:!h.compile&&h.link&&(h.compile=ia(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);var k=h,l=h.restrict;if(l&&(!C(l)||!/[EACM]/.test(l)))throw $("badrestrict",
l,b);k.restrict=l||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),f[b].push(d)):r(b,Zb(pa));return this};this.component=function y(a,b){function c(a){function e(b){return B(b)||H(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Hg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",
require:b.require};r(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}if(!C(a))return r(a,Zb(Va(this,y))),this;var d=b.controller||function(){};r(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,B(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationTrustedUrlList=function(a){return w(a)?(b.aHrefSanitizationTrustedUrlList(a),this):b.aHrefSanitizationTrustedUrlList()};Object.defineProperty(this,"aHrefSanitizationWhitelist",{get:function(){return this.aHrefSanitizationTrustedUrlList},
set:function(a){this.aHrefSanitizationTrustedUrlList=a}});this.imgSrcSanitizationTrustedUrlList=function(a){return w(a)?(b.imgSrcSanitizationTrustedUrlList(a),this):b.imgSrcSanitizationTrustedUrlList()};Object.defineProperty(this,"imgSrcSanitizationWhitelist",{get:function(){return this.imgSrcSanitizationTrustedUrlList},set:function(a){this.imgSrcSanitizationTrustedUrlList=a}});var n=!0;this.debugInfoEnabled=function(a){return w(a)?(n=a,this):n};var s=!1;this.strictComponentBindingsEnabled=function(a){return w(a)?
(s=a,this):s};var G=10;this.onChangesTtl=function(a){return arguments.length?(G=a,this):G};var t=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(t=a,this):t};var N=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(N=a,this):N};var v=T();this.addPropertySecurityContext=function(a,b,c){var d=a.toLowerCase()+"|"+b.toLowerCase();if(d in v&&v[d]!==c)throw $("ctxoverride",a,b,v[d],c);v[d]=c;return this};(function(){function a(b,c){r(c,function(a){v[a.toLowerCase()]=
b})}a(W.HTML,["iframe|srcdoc","*|innerHTML","*|outerHTML"]);a(W.CSS,["*|style"]);a(W.URL,"area|href area|ping a|href a|ping blockquote|cite body|background del|cite input|src ins|cite q|cite".split(" "));a(W.MEDIA_URL,"audio|src img|src img|srcset source|src source|srcset track|src video|src video|poster".split(" "));a(W.RESOURCE_URL,"*|formAction applet|code applet|codebase base|href embed|src frame|src form|action head|profile html|manifest iframe|src link|href media|src object|codebase object|data script|src".split(" "))})();
this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate",function(a,b,c,e,p,M,L,u,R){function q(){try{if(!--Ja)throw Ua=void 0,$("infchng",G);L.$apply(function(){for(var a=0,b=Ua.length;a<b;++a)try{Ua[a]()}catch(d){c(d)}Ua=void 0})}finally{Ja++}}function ma(a,b){if(!a)return a;if(!C(a))throw $("srcset",b,a.toString());for(var c="",d=V(a),e=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,e=/\s/.test(d)?e:/(,)/,d=d.split(e),e=Math.floor(d.length/
2),f=0;f<e;f++)var g=2*f,c=c+u.getTrustedMediaUrl(V(d[g])),c=c+(" "+V(d[g+1]));d=V(d[2*f]).split(/\s/);c+=u.getTrustedMediaUrl(V(d[0]));2===d.length&&(c+=" "+V(d[1]));return c}function w(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function O(a,b,c){Fa.innerHTML="<span "+b+">";b=Fa.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function sa(a,b){try{a.addClass(b)}catch(c){}}
function ba(a,b,c,d,e){a instanceof x||(a=x(a));var f=Xa(a,b,a,c,d,e);ba.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw $("multilink");gb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&la.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?x(ja(g,x("<div></div>").append(a).html())):c?Wa.clone.call(a):
a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);ba.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Xa(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,p,I,t;if(n)for(t=Array(c.length),m=0;m<h.length;m+=3)f=h[m],t[f]=c[f];else t=c;m=0;for(p=h.length;m<p;)k=t[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),ba.$$addScopeInfo(x(k),l)):l=a,I=c.transcludeOnThisElement?ka(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ka(a,b):null,c(f,l,k,d,I)):f&&f(a,k.childNodes,
void 0,e)}for(var h=[],k=H(a)||a instanceof x,l,m,p,I,n,t=0;t<a.length;t++){l=new w;11===wa&&jb(a,t,k);m=tc(a[t],[],l,0===t?d:void 0,e);(f=m.length?aa(m,a[t],l,b,c,null,[],[],f):null)&&f.scope&&ba.$$addScopeClass(l.$$element);l=f&&f.terminal||!(p=a[t].childNodes)||!p.length?null:Xa(p,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(t,f,l),I=!0,n=n||f;f=null}return I?g:null}function jb(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===Pa)for(;;){f=e?d.nextSibling:
a[b+1];if(!f||f.nodeType!==Pa)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function ka(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=T(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ka(a,b.$$slots[f],c):null;return d}function tc(a,b,d,e,f){var g=d.$attr,h;switch(a.nodeType){case 1:h=ua(a);Y(b,ya(h),"E",e,f);for(var l,m,
n,t,J,s=a.attributes,v=0,G=s&&s.length;v<G;v++){var P=!1,N=!1,r=!1,y=!1,u=!1,M;l=s[v];m=l.name;t=l.value;n=ya(m.toLowerCase());(J=n.match(Ra))?(r="Attr"===J[1],y="Prop"===J[1],u="On"===J[1],m=m.replace(sd,"").toLowerCase().substr(4+J[1].length).replace(/_(.)/g,function(a,b){return b.toUpperCase()})):(M=n.match(Sa))&&da(M[1])&&(P=m,N=m.substr(0,m.length-5)+"end",m=m.substr(0,m.length-6));if(y||u)d[n]=t,g[n]=l.name,y?Ea(a,b,n,m):b.push(td(p,L,c,n,m,!1));else{n=ya(m.toLowerCase());g[n]=m;if(r||!d.hasOwnProperty(n))d[n]=
t,nd(a,n)&&(d[n]=!0);Ia(a,b,t,n,r);Y(b,n,"A",e,f,P,N)}}"input"===h&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");if(!Qa)break;g=a.className;D(g)&&(g=g.animVal);if(C(g)&&""!==g)for(;a=k.exec(g);)n=ya(a[2]),Y(b,n,"C",e,f)&&(d[n]=V(a[3])),g=g.substr(a.index+a[0].length);break;case Pa:na(b,a.nodeValue);break;case 8:if(!Oa)break;F(a,b,d,e,f)}b.sort(ia);return b}function F(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=ya(f[1]);Y(b,h,"M",d,e)&&(c[h]=V(f[2]))}}catch(k){}}
function U(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw $("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return x(d)}function W(a,b,c){return function(d,e,f,g,h){e=U(e[0],b,c);return a(d,e,f,g,h)}}function Z(a,b,c,d,e,f){var g;return a?ba(b,c,d,e,f):function(){g||(g=ba(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function aa(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=
W(a,c,d));a.require=u.require;a.directiveName=Q;if(s===u||u.$$isolateScope)a=Ca(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=W(b,c,d));b.require=u.require;b.directiveName=Q;if(s===u||u.$$isolateScope)b=Ca(b,{isolateScope:!0});k.push(b)}}function p(a,e,f,g,l){function m(a,b,c,d){var e;bb(a)||(d=c,c=b,b=a,a=void 0);N&&(e=P);c||(c=N?Q.parent():Q);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,R);if(z(f))throw $("noslot",d,Ba(Q));}else return l(a,b,e,c,R)}var n,u,L,y,G,P,M,Q;b===f?(g=d,Q=d.$$element):(Q=
x(f),g=new w(Q,d));G=e;s?y=e.$new(!0):t&&(G=e.$parent);l&&(M=m,M.$$boundTransclude=l,M.isSlotFilled=function(a){return!!l.$$slots[a]});J&&(P=ea(Q,g,M,J,y,e,s));s&&(ba.$$addScopeInfo(Q,y,!0,!(v&&(v===s||v===s.$$originalDirective))),ba.$$addScopeClass(Q,!0),y.$$isolateBindings=s.$$isolateBindings,u=xa(e,g,y,y.$$isolateBindings,s),u.removeWatches&&y.$on("$destroy",u.removeWatches));for(n in P){u=J[n];L=P[n];var rd=u.$$bindings.bindToController;B(ba.$$customAssignBindings)&&ba.$$customAssignBindings(rd,
L,u,G,Q,g,xa)||(L.instance=L(),Q.data("$"+u.name+"Controller",L.instance),L.bindingInfo=xa(G,g,L.instance,rd,u))}r(J,function(a,b){var c=a.require;a.bindToController&&!H(c)&&D(c)&&S(P[b].instance,X(b,c,Q,P))});r(P,function(a){var b=a.instance;if(B(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(B(b.$onInit))try{b.$onInit()}catch(e){c(e)}B(b.$doCheck)&&(G.$watch(function(){b.$doCheck()}),b.$doCheck());B(b.$onDestroy)&&G.$on("$destroy",function(){b.$onDestroy()})});n=0;
for(u=h.length;n<u;n++)L=h[n],Da(L,L.isolateScope?y:e,Q,g,L.require&&X(L.directiveName,L.require,Q,P),M);var R=e;s&&(s.template||null===s.templateUrl)&&(R=y);a&&a(R,f.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)L=k[n],Da(L,L.isolateScope?y:e,Q,g,L.require&&X(L.directiveName,L.require,Q,P),M);r(P,function(a){a=a.instance;B(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,t=l.newScopeDirective,J=l.controllerDirectives,s=l.newIsolateScopeDirective,v=l.templateDirective,L=l.nonTlbTranscludeDirective,
G=!1,P=!1,N=l.hasElementTranscludeDirective,y=d.$$element=x(b),u,Q,M,R=e,q,ma=!1,Jb=!1,O,sa=0,C=a.length;sa<C;sa++){u=a[sa];var E=u.$$start,jb=u.$$end;E&&(y=U(b,E,jb));M=void 0;if(n>u.priority)break;if(O=u.scope)u.templateUrl||(D(O)?(ca("new/isolated scope",s||t,u,y),s=u):ca("new/isolated scope",s,u,y)),t=t||u;Q=u.name;if(!ma&&(u.replace&&(u.templateUrl||u.template)||u.transclude&&!u.$$tlb)){for(O=sa+1;ma=a[O++];)if(ma.transclude&&!ma.$$tlb||ma.replace&&(ma.templateUrl||ma.template)){Jb=!0;break}ma=
!0}!u.templateUrl&&u.controller&&(J=J||T(),ca("'"+Q+"' controller",J[Q],u,y),J[Q]=u);if(O=u.transclude)if(G=!0,u.$$tlb||(ca("transclusion",L,u,y),L=u),"element"===O)N=!0,n=u.priority,M=y,y=d.$$element=x(ba.$$createComment(Q,d[Q])),b=y[0],oa(f,Ha.call(M,0),b),R=Z(Jb,M,e,n,g&&g.name,{nonTlbTranscludeDirective:L});else{var ka=T();if(D(O)){M=A.document.createDocumentFragment();var Xa=T(),F=T();r(O,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Xa[a]=b;ka[b]=null;F[b]=c});r(y.contents(),function(a){var b=
Xa[ya(ua(a))];b?(F[b]=!0,ka[b]=ka[b]||A.document.createDocumentFragment(),ka[b].appendChild(a)):M.appendChild(a)});r(F,function(a,b){if(!a)throw $("reqslot",b);});for(var K in ka)ka[K]&&(R=x(ka[K].childNodes),ka[K]=Z(Jb,R,e));M=x(M.childNodes)}else M=x(qc(b)).contents();y.empty();R=Z(Jb,M,e,void 0,void 0,{needsNewScope:u.$$isolateScope||u.$$newScope});R.$$slots=ka}if(u.template)if(P=!0,ca("template",v,u,y),v=u,O=B(u.template)?u.template(y,d):u.template,O=Na(O),u.replace){g=u;M=nc.test(O)?ud(ja(u.templateNamespace,
V(O))):[];b=M[0];if(1!==M.length||1!==b.nodeType)throw $("tplrt",Q,"");oa(f,y,b);C={$attr:{}};O=tc(b,[],C);var Ig=a.splice(sa+1,a.length-(sa+1));(s||t)&&fa(O,s,t);a=a.concat(O).concat(Ig);ga(d,C);C=a.length}else y.html(O);if(u.templateUrl)P=!0,ca("template",v,u,y),v=u,u.replace&&(g=u),p=ha(a.splice(sa,a.length-sa),y,d,f,G&&R,h,k,{controllerDirectives:J,newScopeDirective:t!==u&&t,newIsolateScopeDirective:s,templateDirective:v,nonTlbTranscludeDirective:L}),C=a.length;else if(u.compile)try{q=u.compile(y,
d,R);var Y=u.$$originalDirective||u;B(q)?m(null,Va(Y,q),E,jb):q&&m(Va(Y,q.pre),Va(Y,q.post),E,jb)}catch(da){c(da,Ba(y))}u.terminal&&(p.terminal=!0,n=Math.max(n,u.priority))}p.scope=t&&!0===t.scope;p.transcludeOnThisElement=G;p.templateOnThisElement=P;p.transclude=R;l.hasElementTranscludeDirective=N;return p}function X(a,b,c,d){var e;if(C(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e="^^"===
g&&c[0]&&9===c[0].nodeType?null:g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw $("ctreq",b,a);}else if(H(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=X(a,b[g],c,d);else D(b)&&(e={},r(b,function(b,f){e[f]=X(a,b,c,d)}));return e||null}function ea(a,b,c,d,e,f,g){var h=T(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},p=l.controller;"@"===p&&(p=b[l.name]);m=M(p,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function fa(a,
b,c){for(var d=0,e=a.length;d<e;d++)a[d]=bc(a[d],{$$isolateScope:b,$$newScope:c})}function Y(b,c,e,g,h,k,l){if(c===h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var p=0,n=h.length;p<n;p++)if(c=h[p],(z(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){k&&(c=bc(c,{$$start:k,$$end:l}));if(!c.$$bindings){var I=m=c,t=c.name,u={isolateScope:null,bindToController:null};D(I.scope)&&(!0===I.bindToController?(u.bindToController=d(I.scope,t,!0),u.isolateScope={}):u.isolateScope=d(I.scope,
t,!1));D(I.bindToController)&&(u.bindToController=d(I.bindToController,t,!0));if(u.bindToController&&!I.controller)throw $("noctrl",t);m=m.$$bindings=u;D(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function da(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function ga(a,b){var c=b.$attr,d=a.$attr;r(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):
b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ha(a,b,d,f,g,h,k,l){var m=[],p,n,t=b[0],u=a.shift(),J=bc(u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),s=B(u.templateUrl)?u.templateUrl(b,d):u.templateUrl,L=u.templateNamespace;b.empty();e(s).then(function(c){var e,I;c=Na(c);if(u.replace){c=nc.test(c)?ud(ja(L,V(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw $("tplrt",u.name,
s);c={$attr:{}};oa(f,b,e);var v=tc(e,[],c);D(u.scope)&&fa(v,!0);a=v.concat(a);ga(d,c)}else e=t,b.html(c);a.unshift(J);p=aa(a,e,d,g,b,u,h,k,l);r(f,function(a,c){a===e&&(f[c]=b[0])});for(n=Xa(b[0].childNodes,g);m.length;){c=m.shift();I=m.shift();var y=m.shift(),P=m.shift(),v=b[0];if(!c.$$destroyed){if(I!==t){var G=I.className;l.hasElementTranscludeDirective&&u.replace||(v=qc(e));oa(y,x(I),v);sa(x(v),G)}I=p.transcludeOnThisElement?ka(c,p.transclude,P):P;p(n,c,v,f,I)}}m=null})["catch"](function(a){dc(a)&&
c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,c,d,a):(p.transcludeOnThisElement&&(a=ka(b,p.transclude,e)),p(n,b,c,d,a)))}}function ia(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function ca(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw $("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,Ba(d));}function na(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;
b&&ba.$$addBindingClass(a);return function(a,c){var e=c.parent();b||ba.$$addBindingClass(e);ba.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ja(a,b){a=K(a||"html");switch(a){case "svg":case "math":var c=A.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function qa(a,b){if("srcdoc"===b)return u.HTML;if("src"===b||"ngSrc"===b)return-1===["img","video","audio","source","track"].indexOf(a)?
u.RESOURCE_URL:u.MEDIA_URL;if("xlinkHref"===b)return"image"===a?u.MEDIA_URL:"a"===a?u.URL:u.RESOURCE_URL;if("form"===a&&"action"===b||"base"===a&&"href"===b||"link"===a&&"href"===b)return u.RESOURCE_URL;if("a"===a&&("href"===b||"ngHref"===b))return u.URL}function za(a,b){var c=b.toLowerCase();return v[a+"|"+c]||v["*|"+c]}function Aa(a){return ma(u.valueOf(a),"ng-prop-srcset")}function Ea(a,b,c,d){if(m.test(d))throw $("nodomevents");a=ua(a);var e=za(a,d),f=Ta;"srcset"!==d||"img"!==a&&"source"!==a?
e&&(f=u.getTrusted.bind(u,e)):f=Aa;b.push({priority:100,compile:function(a,b){var e=p(b[c]),g=p(b[c],function(a){return u.valueOf(a)});return{pre:function(a,b){function c(){var g=e(a);b[0][d]=f(g)}c();a.$watch(g,c)}}}})}function Ia(a,c,d,e,f){var g=ua(a),k=qa(g,e),l=h[e]||f,p=b(d,!f,k,l);if(p){if("multiple"===e&&"select"===g)throw $("selmulti",Ba(a));if(m.test(e))throw $("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=T());var g=f[e];
g!==d&&(p=g&&b(g,!0,k,l),d=g);p&&(f[e]=p(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&f.$$observers[e].$$scope||a).$watch(p,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function oa(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=A.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);
x.hasData(d)&&(x.data(c,x.data(d)),x(d).off("$destroy"));x.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function Ca(a,b){return S(function(){return a.apply(null,arguments)},a,b)}function Da(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,Ba(d))}}function ra(a,b){if(s)throw $("missingattr",a,b);}function xa(a,c,d,e,f){function g(b,c,e){B(d.$onChanges)&&!ec(c,e)&&(Ua||(a.$$postDigest(q),Ua=[]),m||(m={},Ua.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Kb(e,c))}function h(){d.$onChanges(m);
m=void 0}var k=[],l={},m;r(e,function(e,h){var m=e.attrName,n=e.optional,I,t,u,s;switch(e.mode){case "@":n||ta.call(c,m)||(ra(m,f.name),d[h]=c[m]=void 0);n=c.$observe(m,function(a){if(C(a)||Ga(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;I=c[m];C(I)?d[h]=b(I)(a):Ga(I)&&(d[h]=I);l[h]=new Kb(uc,d[h]);k.push(n);break;case "=":if(!ta.call(c,m)){if(n)break;ra(m,f.name);c[m]=void 0}if(n&&!c[m])break;t=p(c[m]);s=t.literal?va:ec;u=t.assign||function(){I=d[h]=t(a);throw $("nonassign",c[m],m,f.name);
};I=d[h]=t(a);n=function(b){s(b,d[h])||(s(b,I)?u(a,b=d[h]):d[h]=b);return I=b};n.$stateful=!0;n=e.collection?a.$watchCollection(c[m],n):a.$watch(p(c[m],n),null,t.literal);k.push(n);break;case "<":if(!ta.call(c,m)){if(n)break;ra(m,f.name);c[m]=void 0}if(n&&!c[m])break;t=p(c[m]);var v=t.literal,L=d[h]=t(a);l[h]=new Kb(uc,d[h]);n=a[e.collection?"$watchCollection":"$watch"](t,function(a,b){if(b===a){if(b===L||v&&va(b,L))return;b=L}g(h,a,b);d[h]=a});k.push(n);break;case "&":n||ta.call(c,m)||ra(m,f.name);
t=c.hasOwnProperty(m)?p(c[m]):E;if(t===E&&n)break;d[h]=function(b){return t(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ma=/^\w/,Fa=A.document.createElement("div"),Oa=t,Qa=N,Ja=G,Ua;w.prototype={$normalize:ya,$addClass:function(a){a&&0<a.length&&R.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&R.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=vd(a,b);c&&c.length&&R.addClass(this.$$element,c);(c=
vd(b,a))&&c.length&&R.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=nd(this.$$element[0],a),g=wd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Xc(a,"-"));"img"===ua(this.$$element)&&"srcset"===a&&(this[a]=b=ma(b,"$set('srcset', value)"));!1!==d&&(null===b||z(b)?this.$$element.removeAttr(e):Ma.test(e)?f&&!1===b?this.$$element.removeAttr(e):this.$$element.attr(e,b):O(this.$$element[0],e,b));(a=this.$$observers)&&
r(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=T()),e=d[a]||(d[a]=[]);e.push(b);L.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||z(c[a])||b(c[a])});return function(){cb(e,b)}}};var Ka=b.startSymbol(),La=b.endSymbol(),Na="{{"===Ka&&"}}"===La?Ta:function(a){return a.replace(/\{\{/g,Ka).replace(/}}/g,La)},Ra=/^ng(Attr|Prop|On)([A-Z].*)$/,Sa=/^(.+)Start$/;ba.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):
c.push(b);a.data("$binding",c)}:E;ba.$$addBindingClass=n?function(a){sa(a,"ng-binding")}:E;ba.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:E;ba.$$addScopeClass=n?function(a,b){sa(a,b?"ng-isolate-scope":"ng-scope")}:E;ba.$$createComment=function(a,b){var c="";n&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return A.document.createComment(c)};return ba}]}function Kb(a,b){this.previousValue=a;this.currentValue=b}function ya(a){return a.replace(sd,"").replace(Jg,
function(a,d,c){return c?d.toUpperCase():d})}function vd(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],k=0;k<e.length;k++)if(g===e[k])continue a;d+=(0<d.length?" ":"")+g}return d}function ud(a){a=x(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Pa&&""===d.nodeValue.trim())&&Kg.call(a,b,1)}return a}function Hg(a,b){if(b&&C(b))return b;if(C(a)){var d=xd.exec(a);if(d)return d[3]}}function Mf(){var a={};this.has=function(b){return a.hasOwnProperty(b)};
this.register=function(b,d){Ja(b,"controller");D(b)?S(a,b):a[b]=d};this.$get=["$injector",function(b){function d(a,b,d,g){if(!a||!D(a.$scope))throw F("$controller")("noscp",g,b);a.$scope[b]=d}return function(c,e,f,g){var k,h,l;f=!0===f;g&&C(g)&&(l=g);if(C(c)){g=c.match(xd);if(!g)throw yd("ctrlfmt",c);h=g[1];l=l||g[3];c=a.hasOwnProperty(h)?a[h]:Ne(e.$scope,h,!0);if(!c)throw yd("ctrlreg",h);tb(c,h,!0)}if(f)return f=(H(c)?c[c.length-1]:c).prototype,k=Object.create(f||null),l&&d(e,l,k,h||c.name),S(function(){var a=
b.invoke(c,k,e,h);a!==k&&(D(a)||B(a))&&(k=a,l&&d(e,l,k,h||c.name));return k},{instance:k,identifier:l});k=b.instantiate(c,e,h);l&&d(e,l,k,h||c.name);return k}}]}function Nf(){this.$get=["$window",function(a){return x(a.document)}]}function Of(){this.$get=["$document","$rootScope",function(a,b){function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return e}}]}function Pf(){this.$get=["$log",function(a){return function(b,
d){a.error.apply(a,arguments)}}]}function vc(a){return D(a)?ha(a)?a.toISOString():eb(a):a}function Vf(){this.$get=function(){return function(a){if(!a)return"";var b=[];Qc(a,function(a,c){null===a||z(a)||B(a)||(H(a)?r(a,function(a){b.push(ca(c)+"="+ca(vc(a)))}):b.push(ca(c)+"="+ca(vc(a))))});return b.join("&")}}}function Wf(){this.$get=function(){return function(a){function b(a,e,f){H(a)?r(a,function(a,c){b(a,e+"["+(D(a)?c:"")+"]")}):D(a)&&!ha(a)?Qc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):
(B(a)&&(a=a()),d.push(ca(e)+"="+(null==a?"":ca(vc(a)))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function wc(a,b){if(C(a)){var d=a.replace(Lg,"").trim();if(d){var c=b("Content-Type"),c=c&&0===c.indexOf(zd),e;(e=c)||(e=(e=d.match(Mg))&&Ng[e[0]].test(d));if(e)try{a=Tc(d)}catch(f){if(!c)return a;throw Lb("baddata",a,f);}}}return a}function Ad(a){var b=T(),d;C(a)?r(a.split("\n"),function(a){d=a.indexOf(":");var e=K(V(a.substr(0,d)));a=V(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):D(a)&&
r(a,function(a,d){var f=K(d),g=V(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function Bd(a){var b;return function(d){b||(b=Ad(a));return d?(d=b[K(d)],void 0===d&&(d=null),d):b}}function Cd(a,b,d,c){if(B(c))return c(a,b,d);r(c,function(c){a=c(a,b,d)});return a}function Uf(){var a=this.defaults={transformResponse:[wc],transformRequest:[function(a){return D(a)&&"[object File]"!==la.call(a)&&"[object Blob]"!==la.call(a)&&"[object FormData]"!==la.call(a)?eb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:ja(xc),put:ja(xc),patch:ja(xc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return w(a)?(b=!!a,this):b};var d=this.interceptors=[],c=this.xsrfTrustedOrigins=[];Object.defineProperty(this,"xsrfWhitelistedOrigins",{get:function(){return this.xsrfTrustedOrigins},set:function(a){this.xsrfTrustedOrigins=a}});this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope",
"$q","$injector","$sce",function(e,f,g,k,h,l,m,p){function n(b){function c(a,b){for(var d=0,e=b.length;d<e;){var f=b[d++],g=b[d++];a=a.then(f,g)}b.length=0;return a}function d(a,b){var c,e={};r(a,function(a,d){B(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}function f(a){var b=S({},a);b.data=Cd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:l.reject(b)}if(!D(b))throw F("$http")("badreq",b);if(!C(p.valueOf(b.url)))throw F("$http")("badreq",b.url);var g=S({method:"get",
transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},b);g.headers=function(b){var c=a.headers,e=S({},b.headers),f,g,h,c=S({},c.common,c[K(b.method)]);a:for(f in c){g=K(f);for(h in e)if(K(h)===g)continue a;e[f]=c[f]}return d(e,ja(b))}(b);g.method=vb(g.method);g.paramSerializer=C(g.paramSerializer)?m.get(g.paramSerializer):g.paramSerializer;e.$$incOutstandingRequestCount("$http");var h=[],k=[];b=l.resolve(g);
r(v,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&k.push(a.response,a.responseError)});b=c(b,h);b=b.then(function(b){var c=b.headers,d=Cd(b.data,Bd(c),void 0,b.transformRequest);z(d)&&r(c,function(a,b){"content-type"===K(b)&&delete c[b]});z(b.withCredentials)&&!z(a.withCredentials)&&(b.withCredentials=a.withCredentials);return s(b,d).then(f,f)});b=c(b,k);return b=b.finally(function(){e.$$completeOutstandingRequest(E,"$http")})}function s(c,
d){function e(a){if(a){var c={};r(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function k(a,c,d,e,f){function g(){m(c,a,d,e,f)}R&&(200<=a&&300>a?R.put(O,[a,c,Ad(d),e,f]):R.remove(O));b?h.$applyAsync(g):(g(),h.$$phase||h.$apply())}function m(a,b,d,e,f){b=-1<=b?b:0;(200<=b&&300>b?L.resolve:L.reject)({data:a,status:b,headers:Bd(d),config:c,statusText:e,xhrStatus:f})}function s(a){m(a.data,a.status,ja(a.headers()),a.statusText,a.xhrStatus)}
function v(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var L=l.defer(),u=L.promise,R,q,ma=c.headers,x="jsonp"===K(c.method),O=c.url;x?O=p.getTrustedResourceUrl(O):C(O)||(O=p.valueOf(O));O=G(O,c.paramSerializer(c.params));x&&(O=t(O,c.jsonpCallbackParam));n.pendingRequests.push(c);u.then(v,v);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(R=D(c.cache)?c.cache:D(a.cache)?a.cache:N);R&&(q=R.get(O),w(q)?q&&B(q.then)?q.then(s,s):H(q)?m(q[1],q[0],
ja(q[2]),q[3],q[4]):m(q,200,{},"OK","complete"):R.put(O,u));z(q)&&((q=kc(c.url)?g()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(ma[c.xsrfHeaderName||a.xsrfHeaderName]=q),f(c.method,O,d,k,ma,c.timeout,c.withCredentials,c.responseType,e(c.eventHandlers),e(c.uploadEventHandlers)));return u}function G(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function t(a,b){var c=a.split("?");if(2<c.length)throw Lb("badjsonp",a);c=hc(c[1]);r(c,function(c,d){if("JSON_CALLBACK"===c)throw Lb("badjsonp",
a);if(d===b)throw Lb("badjsonp",b,a);});return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var N=k("$http");a.paramSerializer=C(a.paramSerializer)?m.get(a.paramSerializer):a.paramSerializer;var v=[];r(d,function(a){v.unshift(C(a)?m.get(a):m.invoke(a))});var kc=Og(c);n.pendingRequests=[];(function(a){r(arguments,function(a){n[a]=function(b,c){return n(S({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){n[a]=function(b,c,d){return n(S({},d||
{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Yf(){this.$get=function(){return function(){return new A.XMLHttpRequest}}}function Xf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return Pg(a,c,a.defer,b,d[0])}]}function Pg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",
m);e.body.removeChild(f);f=null;var g=-1,s="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),s=a.type,g="error"===a.type?404:200);d&&d(g,s)};f.addEventListener("load",m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,k,h,l,m,p,n,s,G,t){function N(a){J="timeout"===a;pa&&pa();y&&y.abort()}function v(a,b,c,e,f,g){w(P)&&d.cancel(P);pa=y=null;a(b,c,e,f,g)}k=k||a.url();if("jsonp"===K(e))var q=c.createCallback(k),pa=f(k,q,function(a,b){var d=200===a&&c.getResponse(q);
v(l,a,d,"",b,"complete");c.removeCallback(q)});else{var y=b(e,k),J=!1;y.open(e,k,!0);r(m,function(a,b){w(a)&&y.setRequestHeader(b,a)});y.onload=function(){var a=y.statusText||"",b="response"in y?y.response:y.responseText,c=1223===y.status?204:y.status;0===c&&(c=b?200:"file"===ga(k).protocol?404:0);v(l,c,b,y.getAllResponseHeaders(),a,"complete")};y.onerror=function(){v(l,-1,null,null,"","error")};y.ontimeout=function(){v(l,-1,null,null,"","timeout")};y.onabort=function(){v(l,-1,null,null,"",J?"timeout":
"abort")};r(G,function(a,b){y.addEventListener(b,a)});r(t,function(a,b){y.upload.addEventListener(b,a)});n&&(y.withCredentials=!0);if(s)try{y.responseType=s}catch(I){if("json"!==s)throw I;}y.send(z(h)?null:h)}if(0<p)var P=d(function(){N("timeout")},p);else p&&B(p.then)&&p.then(function(){N(w(p.$$timeoutId)?"timeout":"abort")})}}function Rf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler",
"$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(p,a).replace(n,b)}function k(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function h(f,h,n,p){function v(a){try{return a=n&&!r?e.getTrusted(n,a):e.valueOf(a),p&&!w(a)?a:jc(a)}catch(b){c(Ma.interr(f,b))}}var r=n===e.URL||n===e.MEDIA_URL;if(!f.length||-1===f.indexOf(a)){if(h)return;h=g(f);r&&(h=e.getTrusted(n,h));h=ia(h);h.exp=f;h.expressions=[];h.$$watchDelegate=k;return h}p=!!p;for(var q,y,J=
0,I=[],P,Q=f.length,M=[],L=[],u;J<Q;)if(-1!==(q=f.indexOf(a,J))&&-1!==(y=f.indexOf(b,q+l)))J!==q&&M.push(g(f.substring(J,q))),J=f.substring(q+l,y),I.push(J),J=y+m,L.push(M.length),M.push("");else{J!==Q&&M.push(g(f.substring(J)));break}u=1===M.length&&1===L.length;var R=r&&u?void 0:v;P=I.map(function(a){return d(a,R)});if(!h||I.length){var x=function(a){for(var b=0,c=I.length;b<c;b++){if(p&&z(a[b]))return;M[L[b]]=a[b]}if(r)return e.getTrusted(n,u?M[0]:M.join(""));n&&1<M.length&&Ma.throwNoconcat(f);
return M.join("")};return S(function(a){var b=0,d=I.length,e=Array(d);try{for(;b<d;b++)e[b]=P[b](a);return x(e)}catch(g){c(Ma.interr(f,g))}},{exp:f,expressions:I,$$watchDelegate:function(a,b){var c;return a.$watchGroup(P,function(d,e){var f=x(d);b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,p=new RegExp(a.replace(/./g,f),"g"),n=new RegExp(b.replace(/./g,f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function Sf(){this.$get=["$$intervalFactory",
"$window",function(a,b){var d={},c=function(a){b.clearInterval(a);delete d[a]},e=a(function(a,c,e){a=b.setInterval(a,c);d[a]=e;return a},c);e.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$intervalId"))throw Qg("badprom");if(!d.hasOwnProperty(a.$$intervalId))return!1;a=a.$$intervalId;var b=d[a],e=b.promise;e.$$state&&(e.$$state.pur=!0);b.reject("canceled");c(a);return!0};return e}]}function Tf(){this.$get=["$browser","$q","$$q","$rootScope",function(a,b,d,c){return function(e,f){return function(g,
k,h,l){function m(){p?g.apply(null,n):g(s)}var p=4<arguments.length,n=p?Ha.call(arguments,4):[],s=0,G=w(l)&&!l,t=(G?d:b).defer(),r=t.promise;h=w(h)?h:0;r.$$intervalId=e(function(){G?a.defer(m):c.$evalAsync(m);t.notify(s++);0<h&&s>=h&&(t.resolve(s),f(r.$$intervalId));G||c.$apply()},k,t,G);return r}}}]}function Dd(a,b){var d=ga(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=fa(d.port)||Rg[d.protocol]||null}function Ed(a,b,d){if(Sg.test(a))throw kb("badpath",a);var c="/"!==a.charAt(0);c&&(a=
"/"+a);a=ga(a);for(var c=(c&&"/"===a.pathname.charAt(0)?a.pathname.substring(1):a.pathname).split("/"),e=c.length;e--;)c[e]=decodeURIComponent(c[e]),d&&(c[e]=c[e].replace(/\//g,"%2F"));d=c.join("/");b.$$path=d;b.$$search=hc(a.search);b.$$hash=decodeURIComponent(a.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function yc(a,b){return a.slice(0,b.length)===b}function za(a,b){if(yc(b,a))return b.substr(a.length)}function xa(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function zc(a,
b,d){this.$$html5=!0;d=d||"";Dd(a,this);this.$$parse=function(a){var d=za(b,a);if(!C(d))throw kb("ipthprfx",a,b);Ed(d,this,!0);this.$$path||(this.$$path="/");this.$$compose()};this.$$normalizeUrl=function(a){return b+a.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;w(f=za(a,c))?(g=f,g=d&&w(f=za(d,f))?b+(za("/",f)||f):a+g):w(f=za(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function Ac(a,b,d){Dd(a,this);this.$$parse=function(c){var e=
za(a,c)||za(b,c),f;z(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",z(e)&&(a=c,this.replace())):(f=za(d,e),z(f)&&(f=e));Ed(f,this,!1);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;yc(f,e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$normalizeUrl=function(b){return a+(b?d+b:"")};this.$$parseLinkUrl=function(b,d){return xa(a)===xa(b)?(this.$$parse(b),!0):!1}}function Fd(a,b,d){this.$$html5=!0;Ac.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&
"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a===xa(c)?f=c:(g=za(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$normalizeUrl=function(b){return a+d+b}}function Mb(a){return function(){return this[a]}}function Gd(a,b){return function(d){if(z(d))return this[a];this[a]=b(d);this.$$compose();return this}}function $f(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return w(b)?(a=b,this):a};this.html5Mode=function(a){if(Ga(a))return b.enabled=
a,this;if(D(a)){Ga(a.enabled)&&(b.enabled=a.enabled);Ga(a.requireBase)&&(b.requireBase=a.requireBase);if(Ga(a.rewriteLinks)||C(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function k(a,b){return a===b||ga(a).href===ga(b).href}function h(a,b,d){var e=m.url(),f=m.$$state;try{c.url(a,b,d),m.$$state=c.state()}catch(g){throw m.url(e),m.$$state=f,g;}}function l(a,b){d.$broadcast("$locationChangeSuccess",
m.absUrl(),a,m.$$state,b)}var m,p;p=c.baseHref();var n=c.url(),s;if(b.enabled){if(!p&&b.requireBase)throw kb("nobase");s=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(p||"/");p=e.history?zc:Fd}else s=xa(n),p=Ac;var r=s.substr(0,xa(s).lastIndexOf("/")+1);m=new p(s,r,"#"+a);m.$$parseLinkUrl(n,n);m.$$state=c.state();var t=/^\s*(javascript|mailto):/i;f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var g=x(a.target);"a"!==ua(g[0]);)if(g[0]===
f[0]||!(g=g.parent())[0])return;if(!C(e)||!z(g.attr(e))){var e=g.prop("href"),h=g.attr("href")||g.attr("xlink:href");D(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=ga(e.animVal).href);t.test(e)||!e||g.attr("target")||a.isDefaultPrevented()||!m.$$parseLinkUrl(e,h)||(a.preventDefault(),m.absUrl()!==c.url()&&d.$apply())}}});m.absUrl()!==n&&c.url(m.absUrl(),!0);var N=!0;c.onUrlChange(function(a,b){yc(a,r)?(d.$evalAsync(function(){var c=m.absUrl(),e=m.$$state,f;m.$$parse(a);m.$$state=b;f=d.$broadcast("$locationChangeStart",
a,c,b,e).defaultPrevented;m.absUrl()===a&&(f?(m.$$parse(c),m.$$state=e,h(c,!1,e)):(N=!1,l(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(N||m.$$urlUpdatedByLocation){m.$$urlUpdatedByLocation=!1;var a=c.url(),b=m.absUrl(),f=c.state(),g=m.$$replace,n=!k(a,b)||m.$$html5&&e.history&&f!==m.$$state;if(N||n)N=!1,d.$evalAsync(function(){var b=m.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,m.$$state,f).defaultPrevented;m.absUrl()===b&&(c?(m.$$parse(a),m.$$state=f):(n&&h(b,
g,f===m.$$state?null:m.$$state),l(a,f)))})}m.$$replace=!1});return m}]}function ag(){var a=!0,b=this;this.debugEnabled=function(b){return w(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){dc(a)&&(a.stack&&f?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||E;return function(){var a=[];r(arguments,function(b){a.push(c(b))});return Function.prototype.apply.call(e,
b,a)}}var f=wa||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Tg(a){return a+""}function Ug(a,b){return"undefined"!==typeof a?a:b}function Hd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Vg(a,b){switch(a.type){case q.MemberExpression:if(a.computed)return!1;break;case q.UnaryExpression:return 1;case q.BinaryExpression:return"+"!==
a.operator?1:!1;case q.CallExpression:return!1}return void 0===b?Id:b}function Z(a,b,d){var c,e,f=a.isPure=Vg(a,d);switch(a.type){case q.Program:c=!0;r(a.body,function(a){Z(a.expression,b,f);c=c&&a.expression.constant});a.constant=c;break;case q.Literal:a.constant=!0;a.toWatch=[];break;case q.UnaryExpression:Z(a.argument,b,f);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case q.BinaryExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=
a.left.toWatch.concat(a.right.toWatch);break;case q.LogicalExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case q.ConditionalExpression:Z(a.test,b,f);Z(a.alternate,b,f);Z(a.consequent,b,f);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case q.Identifier:a.constant=!1;a.toWatch=[a];break;case q.MemberExpression:Z(a.object,b,f);a.computed&&Z(a.property,b,f);a.constant=a.object.constant&&
(!a.computed||a.property.constant);a.toWatch=a.constant?[]:[a];break;case q.CallExpression:c=d=a.filter?!b(a.callee.name).$stateful:!1;e=[];r(a.arguments,function(a){Z(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=c;a.toWatch=d?e:[a];break;case q.AssignmentExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case q.ArrayExpression:c=!0;e=[];r(a.elements,function(a){Z(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=c;
a.toWatch=e;break;case q.ObjectExpression:c=!0;e=[];r(a.properties,function(a){Z(a.value,b,f);c=c&&a.value.constant;e.push.apply(e,a.value.toWatch);a.computed&&(Z(a.key,b,!1),c=c&&a.key.constant,e.push.apply(e,a.key.toWatch))});a.constant=c;a.toWatch=e;break;case q.ThisExpression:a.constant=!1;a.toWatch=[];break;case q.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Jd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Kd(a){return a.type===
q.Identifier||a.type===q.MemberExpression}function Ld(a){if(1===a.body.length&&Kd(a.body[0].expression))return{type:q.AssignmentExpression,left:a.body[0].expression,right:{type:q.NGValueParameter},operator:"="}}function Md(a){this.$filter=a}function Nd(a){this.$filter=a}function Nb(a,b,d){this.ast=new q(a,d);this.astCompiler=d.csp?new Nd(b):new Md(b)}function Bc(a){return B(a.valueOf)?a.valueOf():Wg.call(a)}function bg(){var a=T(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=
function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(e){function f(b,c){var d,f;switch(typeof b){case "string":return f=b=b.trim(),d=a[f],d||(d=new Ob(G),d=(new Nb(d,e,G)).parse(b),a[f]=p(d)),s(d,c);case "function":return s(b,c);default:return s(E,c)}}function g(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=Bc(a),"object"!==typeof a||c)?a===b||a!==a&&b!==b:!1}function k(a,b,c,d,e){var f=d.inputs,h;if(1===f.length){var k=g,f=f[0];
return a.$watch(function(a){var b=f(a);g(b,k,f.isPure)||(h=d(a,void 0,void 0,[b]),k=b&&Bc(b));return h},b,c,e)}for(var l=[],m=[],n=0,p=f.length;n<p;n++)l[n]=g,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var k=f[c](a);if(b||(b=!g(k,l[c],f[c].isPure)))m[c]=k,l[c]=k&&Bc(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,e)}function h(a,b,c,d,e){function f(){h(m)&&k()}function g(a,b,c,d){m=u&&d?d[0]:n(a,b,c,d);h(m)&&a.$$postDigest(f);return s(m)}var h=d.literal?l:w,k,m,n=d.$$intercepted||
d,s=d.$$interceptor||Ta,u=d.inputs&&!n.inputs;g.literal=d.literal;g.constant=d.constant;g.inputs=d.inputs;p(g);return k=a.$watch(g,b,c,e)}function l(a){var b=!0;r(a,function(a){w(a)||(b=!1)});return b}function m(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function p(a){a.constant?a.$$watchDelegate=m:a.oneTime?a.$$watchDelegate=h:a.inputs&&(a.$$watchDelegate=k);return a}function n(a,b){function c(d){return b(a(d))}c.$stateful=a.$stateful||b.$stateful;c.$$pure=a.$$pure&&b.$$pure;
return c}function s(a,b){if(!b)return a;a.$$interceptor&&(b=n(a.$$interceptor,b),a=a.$$intercepted);var c=!1,d=function(d,e,f,g){d=c&&g?g[0]:a(d,e,f,g);return b(d)};d.$$intercepted=a;d.$$interceptor=b;d.literal=a.literal;d.oneTime=a.oneTime;d.constant=a.constant;b.$stateful||(c=!a.inputs,d.inputs=a.inputs?a.inputs:[a],b.$$pure||(d.inputs=d.inputs.map(function(a){return a.isPure===Id?function(b){return a(b)}:a})));return p(d)}var G={csp:Ca().noUnsafeEval,literals:Ia(b),isIdentifierStart:B(d)&&d,isIdentifierContinue:B(c)&&
c};f.$$getAst=function(a){var b=new Ob(G);return(new Nb(b,e,G)).getAst(a).ast};return f}]}function dg(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Od(function(a){b.$evalAsync(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return w(b)?(a=b,this):a}}function eg(){var a=!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Od(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return w(b)?(a=b,this):a}}function Od(a,b,d){function c(){return new e}
function e(){var a=this.promise=new f;this.resolve=function(b){h(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){n(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!w&&x.length;){var a=x.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):z(c)?"undefined":"string"!==typeof c?Pe(c,void 0):c);dc(a.value)?b(a.value,c):b(c)}}}function k(c){!d||c.pending||2!==c.status||c.pur||(0===w&&0===x.length&&
a(g),x.push(c));!c.processScheduled&&c.pending&&(c.processScheduled=!0,++w,a(function(){var e,f,k;k=c.pending;c.processScheduled=!1;c.pending=void 0;try{for(var l=0,n=k.length;l<n;++l){c.pur=!0;f=k[l][0];e=k[l][c.status];try{B(e)?h(f,e(c.value)):1===c.status?h(f,c.value):m(f,c.value)}catch(p){m(f,p),p&&!0===p.$$passToExceptionHandler&&b(p)}}}finally{--w,d&&0===w&&a(g)}}))}function h(a,b){a.$$state.status||(b===a?p(a,v("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||
(g=!0,p(a,b))}function e(b){n(a,b)}var f,g=!1;try{if(D(b)||B(b))f=b.then;B(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,k(a.$$state))}catch(h){d(h)}}function m(a,b){a.$$state.status||p(a,b)}function p(a,b){a.$$state.value=b;a.$$state.status=2;k(a.$$state)}function n(c,d){var e=c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{n(c,B(a)?a(d):d)}catch(h){b(h)}}})}function s(a){var b=new f;m(b,
a);return b}function G(a,b,c){var d=null;try{B(c)&&(d=c())}catch(e){return s(e)}return d&&B(d.then)?d.then(function(){return b(a)},s):b(a)}function t(a,b,c,d){var e=new f;h(e,a);return e.then(b,c,d)}function q(a){if(!B(a))throw v("norslvr",a);var b=new f;a(function(a){h(b,a)},function(a){m(b,a)});return b}var v=F("$q",TypeError),w=0,x=[];S(f.prototype,{then:function(a,b,c){if(z(a)&&z(b)&&z(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);
0<this.$$state.status&&k(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return G(b,y,a)},function(b){return G(b,s,a)},b)}});var y=t;q.prototype=f.prototype;q.defer=c;q.reject=s;q.when=t;q.resolve=y;q.all=function(a){var b=new f,c=0,d=H(a)?[]:{};r(a,function(a,e){c++;t(a).then(function(a){d[e]=a;--c||h(b,d)},function(a){m(b,a)})});0===c&&h(b,d);return b};q.race=function(a){var b=c();r(a,function(a){t(a).then(b.resolve,b.reject)});
return b.promise};return q}function og(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function cg(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;
this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++qb;this.$$ChildScope=null;this.$$suspended=!1}b.prototype=a;return b}var b=10,d=F("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,k){function h(a){a.currentScope.$$destroyed=!0}function l(a){9===wa&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=
a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++qb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$suspended=this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function p(a){if(v.$$phase)throw d("inprog",v.$$phase);v.$$phase=a}function n(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function s(a,b,c){do a.$$listenerCount[c]-=
b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function G(){}function t(){for(;y.length;)try{y.shift()()}catch(a){f(a)}e=null}function q(){null===e&&(e=k.defer(function(){v.$apply(t)},null,"$applyAsync"))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):
c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",h);return d},$watch:function(a,b,d,e){var f=g(a);b=B(b)?b:E;if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:G,get:f,exp:e||a,eq:!!d};c=null;k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;n(this,1);return function(){var a=cb(k,l);0<=a&&(n(h,-1),a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;try{k?(k=
!1,b(e,e,g)):b(e,d,g)}finally{for(var f=0;f<a.length;f++)d[f]=e[f]}}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var d=g.$watch(a,function(a){e[b]=a;h||(h=!0,g.$evalAsync(c))});f.push(d)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,
g,h;if(!z(e)){if(D(e))if(Aa(e))for(f!==n&&(f=n,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},t=0,l++);a=0;for(b in e)ta.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)ta.call(e,b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$$pure=g(a).literal;c.$stateful=!c.$$pure;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},s=!0,t=0;return this.$watch(m,
function(){s?(s=!1,b(e,e,d)):b(e,h,d);if(k)if(D(e))if(Aa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ta.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,h,l,m,n,s,r=b,q,y=w.length?v:this,N=[],z,A;p("$digest");k.$$checkUrlChange();this===v&&null!==e&&(k.defer.cancel(e),t());c=null;do{s=!1;q=y;for(n=0;n<w.length;n++){try{A=w[n],l=A.fn,l(A.scope,A.locals)}catch(C){f(C)}c=null}w.length=0;a:do{if(n=!q.$$suspended&&q.$$watchers)for(n.$$digestWatchIndex=n.length;n.$$digestWatchIndex--;)try{if(a=
n[n.$$digestWatchIndex])if(m=a.get,(g=m(q))!==(h=a.last)&&!(a.eq?va(g,h):Y(g)&&Y(h)))s=!0,c=a,a.last=a.eq?Ia(g,null):g,l=a.fn,l(g,h===G?g:h,q),5>r&&(z=4-r,N[z]||(N[z]=[]),N[z].push({msg:B(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:h}));else if(a===c){s=!1;break a}}catch(E){f(E)}if(!(n=!q.$$suspended&&q.$$watchersCount&&q.$$childHead||q!==y&&q.$$nextSibling))for(;q!==y&&!(n=q.$$nextSibling);)q=q.$parent}while(q=n);if((s||w.length)&&!r--)throw v.$$phase=null,d("infdig",b,N);
}while(s||w.length);for(v.$$phase=null;J<x.length;)try{x[J++]()}catch(D){f(D)}x.length=J=0;k.$$checkUrlChange()},$suspend:function(){this.$$suspended=!0},$isSuspended:function(){return this.$$suspended},$resume:function(){this.$$suspended=!1},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===v&&k.$$applicationDestroyed();n(this,-this.$$watchersCount);for(var b in this.$$listenerCount)s(this,this.$$listenerCount[b],b);a&&a.$$childHead===
this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=E;this.$on=this.$watch=this.$watchGroup=function(){return E};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){v.$$phase||
w.length||k.defer(function(){w.length&&v.$digest()},null,"$evalAsync");w.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){x.push(a)},$apply:function(a){try{p("$apply");try{return this.$eval(a)}finally{v.$$phase=null}}catch(b){f(b)}finally{try{v.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&y.push(b);a=g(a);q()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=
0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(delete c[d],s(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=db([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)break;e=e.$parent}while(e);h.currentScope=
null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=db([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=
null;return e}};var v=new m,w=v.$$asyncQueue=[],x=v.$$postDigestQueue=[],y=v.$$applyAsyncQueue=[],J=0;return v}]}function Se(){var a=/^\s*(https?|s?ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationTrustedUrlList=function(b){return w(b)?(a=b,this):a};this.imgSrcSanitizationTrustedUrlList=function(a){return w(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f=ga(d&&d.trim()).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function Xg(a){if("self"===
a)return a;if(C(a)){if(-1<a.indexOf("***"))throw Ea("iwcard",a);a=Pd(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+a+"$")}if(ab(a))return new RegExp("^"+a.source+"$");throw Ea("imatcher");}function Qd(a){var b=[];w(a)&&r(a,function(a){b.push(Xg(a))});return b}function gg(){this.SCE_CONTEXTS=W;var a=["self"],b=[];this.trustedResourceUrlList=function(b){arguments.length&&(a=Qd(b));return a};Object.defineProperty(this,"resourceUrlWhitelist",{get:function(){return this.trustedResourceUrlList},
set:function(a){this.trustedResourceUrlList=a}});this.bannedResourceUrlList=function(a){arguments.length&&(b=Qd(a));return b};Object.defineProperty(this,"resourceUrlBlacklist",{get:function(){return this.bannedResourceUrlList},set:function(a){this.bannedResourceUrlList=a}});this.$get=["$injector","$$sanitizeUri",function(d,c){function e(a,b){var c;"self"===a?(c=Cc(b,Rd))||(A.document.baseURI?c=A.document.baseURI:(Na||(Na=A.document.createElement("a"),Na.href=".",Na=Na.cloneNode(!1)),c=Na.href),c=
Cc(b,c)):c=!!a.exec(b.href);return c}function f(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var g=function(a){throw Ea("unsafe");};d.has("$sanitize")&&(g=d.get("$sanitize"));var k=f(),h={};h[W.HTML]=f(k);h[W.CSS]=f(k);h[W.MEDIA_URL]=f(k);h[W.URL]=f(h[W.MEDIA_URL]);h[W.JS]=f(k);h[W.RESOURCE_URL]=f(h[W.URL]);
return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ea("icontext",a,b);if(null===b||z(b)||""===b)return b;if("string"!==typeof b)throw Ea("itype",a);return new c(b)},getTrusted:function(d,f){if(null===f||z(f)||""===f)return f;var k=h.hasOwnProperty(d)?h[d]:null;if(k&&f instanceof k)return f.$$unwrapTrustedValue();B(f.$$unwrapTrustedValue)&&(f=f.$$unwrapTrustedValue());if(d===W.MEDIA_URL||d===W.URL)return c(f.toString(),d===W.MEDIA_URL);if(d===W.RESOURCE_URL){var k=ga(f.toString()),
n,s,r=!1;n=0;for(s=a.length;n<s;n++)if(e(a[n],k)){r=!0;break}if(r)for(n=0,s=b.length;n<s;n++)if(e(b[n],k)){r=!1;break}if(r)return f;throw Ea("insecurl",f.toString());}if(d===W.HTML)return g(f);throw Ea("unsafe");},valueOf:function(a){return a instanceof k?a.$$unwrapTrustedValue():a}}}]}function fg(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>wa)throw Ea("iequirks");var c=ja(W);c.isEnabled=function(){return a};c.trustAs=
d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ta);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;r(W,function(a,b){var d=K(b);c[("parse_as_"+d).replace(Dc,xb)]=function(b){return e(a,b)};c[("get_trusted_"+d).replace(Dc,xb)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(Dc,xb)]=function(b){return g(a,b)}});return c}]}
function hg(){this.$get=["$window","$document",function(a,b){var d={},c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=fa((/android (\d+)/.exec(K((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},k=g.body&&g.body.style,h=!1,l=!1;k&&(h=!!("transition"in k||"webkitTransition"in k),l=!!("animation"in k||"webkitAnimation"in k));return{history:!(!c||
4>e||f),hasEvent:function(a){if("input"===a&&wa)return!1;if(z(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ca(),transitions:h,animations:l,android:e}}]}function ig(){this.$get=ia(function(a){return new Yg(a)})}function Yg(a){function b(){var a=e.pop();return a&&a.cb}function d(a){for(var b=e.length-1;0<=b;--b){var c=e[b];if(c.type===a)return e.splice(b,1),c.cb}}var c={},e=[],f=this.ALL_TASKS_TYPE="$$all$$",g=this.DEFAULT_TASK_TYPE="$$default$$";this.completeTask=function(e,
h){h=h||g;try{e()}finally{var l;l=h||g;c[l]&&(c[l]--,c[f]--);l=c[h];var m=c[f];if(!m||!l)for(l=m?d:b;m=l(h);)try{m()}catch(p){a.error(p)}}};this.incTaskCount=function(a){a=a||g;c[a]=(c[a]||0)+1;c[f]=(c[f]||0)+1};this.notifyWhenNoPendingTasks=function(a,b){b=b||f;c[b]?e.push({type:b,cb:a}):a()}}function kg(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler","$templateCache","$http","$q","$sce",function(b,d,c,e,f){function g(k,h){g.totalPendingRequests++;if(!C(k)||
z(d.get(k)))k=f.getTrustedResourceUrl(k);var l=c.defaults&&c.defaults.transformResponse;H(l)?l=l.filter(function(a){return a!==wc}):l===wc&&(l=null);return c.get(k,S({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){return d.put(k,a.data)},function(a){h||(a=Zg("tpload",k,a.status,a.statusText),b(a));return e.reject(a)})}g.totalPendingRequests=0;return g}]}function lg(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,
b,d){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var c=da.element(a).data("$binding");c&&r(c,function(c){d?(new RegExp("(^|\\s)"+Pd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],k=0;k<g.length;++k){var h=a.querySelectorAll("["+g[k]+"model"+(d?"=":"*=")+'"'+b+'"]');if(h.length)return h}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},
whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function mg(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,h,l){B(f)||(l=h,h=f,f=E);var m=Ha.call(arguments,3),p=w(l)&&!l,n=(p?c:d).defer(),s=n.promise,r;r=b.defer(function(){try{n.resolve(f.apply(null,m))}catch(b){n.reject(b),e(b)}finally{delete g[s.$$timeoutId]}p||a.$apply()},h,"$timeout");s.$$timeoutId=r;g[r]=n;return s}var g={};f.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$timeoutId"))throw $g("badprom");
if(!g.hasOwnProperty(a.$$timeoutId))return!1;a=a.$$timeoutId;var c=g[a],d=c.promise;d.$$state&&(d.$$state.pur=!0);c.reject("canceled");delete g[a];return b.defer.cancel(a)};return f}]}function ga(a){if(!C(a))return a;wa&&(aa.setAttribute("href",a),a=aa.href);aa.setAttribute("href",a);a=aa.hostname;!ah&&-1<a.indexOf(":")&&(a="["+a+"]");return{href:aa.href,protocol:aa.protocol?aa.protocol.replace(/:$/,""):"",host:aa.host,search:aa.search?aa.search.replace(/^\?/,""):"",hash:aa.hash?aa.hash.replace(/^#/,
""):"",hostname:a,port:aa.port,pathname:"/"===aa.pathname.charAt(0)?aa.pathname:"/"+aa.pathname}}function Og(a){var b=[Rd].concat(a.map(ga));return function(a){a=ga(a);return b.some(Cc.bind(null,a))}}function Cc(a,b){a=ga(a);b=ga(b);return a.protocol===b.protocol&&a.host===b.host}function ng(){this.$get=ia(A)}function Sd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,k,h,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=
e.split("; "),c={},k=0;k<a.length;k++)g=a[k],h=g.indexOf("="),0<h&&(l=b(g.substring(0,h)),z(c[l])&&(c[l]=b(g.substring(h+1))));return c}}function rg(){this.$get=Sd}function fd(a){function b(d,c){if(D(d)){var e={};r(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Td);b("date",Ud);b("filter",bh);b("json",ch);b("limitTo",dh);b("lowercase",eh);b("number",Vd);b("orderBy",
Wd);b("uppercase",fh)}function bh(){return function(a,b,d,c){if(!Aa(a)){if(null==a)return a;throw F("filter")("notarray",a);}c=c||"$";var e;switch(Ec(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=gh(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function gh(a,b,d,c){var e=D(a)&&d in a;!0===b?b=va:B(b)||(b=function(a,b){if(z(a))return!1;if(null===a||null===b)return a===b;if(D(b)||D(a)&&!cc(a))return!1;a=K(""+a);b=K(""+
b);return-1!==a.indexOf(b)});return function(f){return e&&!D(f)?Fa(f,a[d],b,d,!1):Fa(f,a,b,d,c)}}function Fa(a,b,d,c,e,f){var g=Ec(a),k=Ec(b);if("string"===k&&"!"===b.charAt(0))return!Fa(a,b.substring(1),d,c,e);if(H(a))return a.some(function(a){return Fa(a,b,d,c,e)});switch(g){case "object":var h;if(e){for(h in a)if(h.charAt&&"$"!==h.charAt(0)&&Fa(a[h],b,d,c,!0))return!0;return f?!1:Fa(a,b,d,c,!1)}if("object"===k){for(h in b)if(f=b[h],!B(f)&&!z(f)&&(g=h===c,!Fa(g?a:a[h],f,d,c,g,g)))return!1;return!0}return d(a,
b);case "function":return!1;default:return d(a,b)}}function Ec(a){return null===a?"null":typeof a}function Td(a){var b=a.NUMBER_FORMATS;return function(a,c,e){z(c)&&(c=b.CURRENCY_SYM);z(e)&&(e=b.PATTERNS[1].maxFrac);var f=c?/\u00A4/g:/\s*\u00A4\s*/g;return null==a?a:Xd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(f,c)}}function Vd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Xd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function hh(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Yd))&&
(a=a.replace(Yd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)===Fc;e++);if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===Fc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Zd&&(d=d.splice(0,Zd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function ih(a,b,d,c){var e=a.d,f=e.length-a.i;b=z(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=
1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Xd(a,b,d,c,e){if(!C(a)&&!X(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,k=Math.abs(a)+"",h="";if(f)h="\u221e";else{g=hh(k);ih(g,e,b.minFrac,b.maxFrac);h=g.d;k=g.i;e=g.e;f=[];for(g=h.reduce(function(a,b){return a&&!b},
!0);0>k;)h.unshift(0),k++;0<k?f=h.splice(k,h.length):(f=h,h=[0]);k=[];for(h.length>=b.lgSize&&k.unshift(h.splice(-b.lgSize,h.length).join(""));h.length>b.gSize;)k.unshift(h.splice(-b.gSize,h.length).join(""));h.length&&k.unshift(h.join(""));h=k.join(d);f.length&&(h+=c+f.join(""));e&&(h+="e+"+e)}return 0>a&&!g?b.negPre+h+b.negSuf:b.posPre+h+b.posSuf}function Pb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=Fc+a;d&&(a=a.substr(a.length-b));return e+a}function ea(a,
b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Pb(f,b,c,e)}}function lb(a,b,d){return function(c,e){var f=c["get"+a](),g=vb((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function $d(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function ae(a){return function(b){var d=$d(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Pb(b,a)}}function Gc(a,b){return 0>=
a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Ud(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,k=b[8]?a.setUTCFullYear:a.setFullYear,h=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=fa(b[9]+b[10]),g=fa(b[9]+b[11]));k.call(a,fa(b[1]),fa(b[2])-1,fa(b[3]));f=fa(b[4]||0)-f;g=fa(b[5]||0)-g;k=fa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));h.call(a,f,g,k,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,
d,f){var g="",k=[],h,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;C(c)&&(c=jh.test(c)?fa(c):b(c));X(c)&&(c=new Date(c));if(!ha(c)||!isFinite(c.getTime()))return c;for(;d;)(l=kh.exec(d))?(k=db(k,l,1),d=k.pop()):(k.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=fc(f,m),c=gc(c,f,!0));r(k,function(b){h=lh[b];g+=h?h(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function ch(){return function(a,b){z(b)&&(b=2);return eb(a,b)}}function dh(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):fa(b);if(Y(b))return a;X(a)&&(a=a.toString());if(!Aa(a))return a;d=!d||isNaN(d)?0:fa(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?Hc(a,d,d+b):0===d?Hc(a,b,a.length):Hc(a,Math.max(0,d+b),d)}}function Hc(a,b,d){return C(a)?a.slice(b,d):Ha.call(a,b,d)}function Wd(a){function b(b){return b.map(function(b){var c=1,d=Ta;if(B(b))d=b;else if(C(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=
d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,h=b.type;if(d===h){var h=a.value,l=b.value;"string"===d?(h=h.toLowerCase(),l=l.toLowerCase()):"object"===d&&(D(h)&&(h=a.index),D(l)&&(l=b.index));h!==l&&(c=h<l?-1:1)}else c="undefined"===d?1:"undefined"===h?-1:"null"===d?1:"null"===h?-1:d<h?-1:1;return c}return function(a,f,g,k){if(null==a)return a;if(!Aa(a))throw F("orderBy")("notarray",
a);H(f)||(f=[f]);0===f.length&&(f=["+"]);var h=b(f),l=g?-1:1,m=B(k)?k:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:h.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="null";else if("object"===c)a:{if(B(e.valueOf)&&(e=e.valueOf(),d(e)))break a;cc(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var d=0,e=h.length;d<e;d++){var f=m(a.predicateValues[d],b.predicateValues[d]);if(f)return f*
h[d].descending*l}return(m(a.tieBreaker,b.tieBreaker)||c(a.tieBreaker,b.tieBreaker))*l});return a=a.map(function(a){return a.value})}}function Ra(a){B(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ia(a)}function Qb(a,b,d,c,e){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=mb;this.$$element=a;this.$$animate=c;be(this)}function be(a){a.$$classCache=
{};a.$$classCache[ce]=!(a.$$classCache[nb]=a.$$element.hasClass(nb))}function de(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Xc(c,"-"):"";b(a,nb+c,!0===d);b(a,ce+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,k){z(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,k)):(this.$pending&&e(this.$pending,
a,k),ee(this.$pending)&&(this.$pending=void 0));Ga(g)?g?(e(this.$error,a,k),c(this.$$success,a,k)):(c(this.$error,a,k),e(this.$$success,a,k)):(e(this.$error,a,k),e(this.$$success,a,k));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=ee(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,
g,this)}}function ee(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Ic(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Sa(a,b,d,c,e,f){var g=K(b[0].type);if(!e.android){var k=!1;b.on("compositionstart",function(){k=!0});b.on("compositionupdate",function(a){if(z(a.data)||""===a.data)k=!1});b.on("compositionend",function(){k=!1;l()})}var h,l=function(a){h&&(f.defer.cancel(h),h=null);if(!k){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&
"false"===d.ngTrim||(e=V(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){h||(h=f.defer(function(){h=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut drop",m)}b.on("change",l);if(fe[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!h){var b=this.validity,
c=b.badInput,d=b.typeMismatch;h=f.defer(function(){h=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Rb(a,b){return function(d,c){var e,f;if(ha(d))return d;if(C(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(mh.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),
ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),e=new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0),100>f.yyyy&&e.setFullYear(f.yyyy),e}return NaN}}function ob(a,b,d,c){return function(e,f,g,k,h,l,m,p){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function s(a){return w(a)&&!ha(a)?r(a)||void 0:a}function r(a,b){var c=k.$options.getOption("timezone");v&&v!==c&&(b=Uc(b,fc(v)));var e=d(a,
b);!isNaN(e)&&c&&(e=gc(e,c));return e}Jc(e,f,g,k,a);Sa(e,f,g,k,h,l);var t="time"===a||"datetimelocal"===a,q,v;k.$parsers.push(function(c){if(k.$isEmpty(c))return null;if(b.test(c))return r(c,q);k.$$parserName=a});k.$formatters.push(function(a){if(a&&!ha(a))throw pb("datefmt",a);if(n(a)){q=a;var b=k.$options.getOption("timezone");b&&(v=b,q=gc(q,b,!0));var d=c;t&&C(k.$options.getOption("timeSecondsFormat"))&&(d=c.replace("ss.sss",k.$options.getOption("timeSecondsFormat")).replace(/:$/,""));a=m("date")(a,
d,b);t&&k.$options.getOption("timeStripZeroSeconds")&&(a=a.replace(/(?::00)?(?:\.000)?$/,""));return a}v=q=null;return""});if(w(g.min)||g.ngMin){var x=g.min||p(g.ngMin)(e),A=s(x);k.$validators.min=function(a){return!n(a)||z(A)||d(a)>=A};g.$observe("min",function(a){a!==x&&(A=s(a),x=a,k.$validate())})}if(w(g.max)||g.ngMax){var y=g.max||p(g.ngMax)(e),J=s(y);k.$validators.max=function(a){return!n(a)||z(J)||d(a)<=J};g.$observe("max",function(a){a!==y&&(J=s(a),y=a,k.$validate())})}}}function Jc(a,b,d,
c,e){(c.$$hasNativeValidators=D(b[0].validity))&&c.$parsers.push(function(a){var d=b.prop("validity")||{};if(d.badInput||d.typeMismatch)c.$$parserName=e;else return a})}function ge(a){a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(nh.test(b))return parseFloat(b);a.$$parserName="number"});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!X(b))throw pb("numfmt",b);b=b.toString()}return b})}function na(a){w(a)&&!X(a)&&(a=parseFloat(a));return Y(a)?void 0:a}function Kc(a){var b=a.toString(),
d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function he(a,b,d){a=Number(a);var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Kc(a):0,k=e?Kc(b):0,h=f?Kc(d):0,g=Math.max(g,k,h),g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&(a=Math.round(a));e&&(b=Math.round(b));f&&(d=Math.round(d))}return 0===(a-b)%d}function ie(a,b,d,c,e){if(w(c)){a=a(c);if(!a.constant)throw pb("constexpr",d,c);return a(b)}return e}function Lc(a,b){function d(a,b){if(!a||!a.length)return[];
if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e===b[m])continue a;c.push(e)}return c}function c(a){if(!a)return a;var b=a;H(a)?b=a.map(c).join(" "):D(a)?b=Object.keys(a).filter(function(b){return a[b]}).join(" "):C(a)||(b=a+"");return b}a="ngClass"+a;var e;return["$parse",function(f){return{restrict:"AC",link:function(g,k,h){function l(a,b){var c=[];r(a,function(a){if(0<b||p[a])p[a]=(p[a]||0)+b,p[a]===+(0<b)&&c.push(a)});return c.join(" ")}function m(a){if(a===
b){var c=s,c=l(c&&c.split(" "),1);h.$addClass(c)}else c=s,c=l(c&&c.split(" "),-1),h.$removeClass(c);n=a}var p=k.data("$classCounts"),n=!0,s;p||(p=T(),k.data("$classCounts",p));"ngClass"!==a&&(e||(e=f("$index",function(a){return a&1})),g.$watch(e,m));g.$watch(f(h[a],c),function(a){if(n===b){var c=s&&s.split(" "),e=a&&a.split(" "),f=d(c,e),c=d(e,c),f=l(f,-1),c=l(c,1);h.$addClass(c);h.$removeClass(f)}s=a})}}}]}function td(a,b,d,c,e,f){return{restrict:"A",compile:function(g,k){var h=a(k[c]);return function(a,
c){c.on(e,function(c){var e=function(){h(a,{$event:c})};if(b.$$phase)if(f)a.$evalAsync(e);else try{e()}catch(g){d(g)}else a.$apply(e)})}}}}function Sb(a,b,d,c,e,f,g,k,h){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=
void 0;this.$name=h(d.name||"",!1)(a);this.$$parentForm=mb;this.$options=Tb;this.$$updateEvents="";this.$$updateEventHandler=this.$$updateEventHandler.bind(this);this.$$parsedNgModel=e(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$parserName="parse";this.$$currentValidationRunId=0;this.$$scope=a;this.$$rootScope=a.$root;this.$$attr=d;
this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=k;this.$$exceptionHandler=b;be(this);oh(this)}function oh(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);b===a.$modelValue||a.$modelValue!==a.$modelValue&&b!==b||a.$$setModelValue(b);return b})}function Mc(a){this.$$options=a}function je(a,b){r(b,function(b,c){w(a[c])||(a[c]=b)})}function Oa(a,b){a.prop("selected",b);a.attr("selected",b)}function ke(a,b,d){if(a){C(a)&&(a=new RegExp("^"+a+"$"));if(!a.test)throw F("ngPattern")("noregexp",
b,a,Ba(d));return a}}function Ub(a){a=fa(a);return Y(a)?-1:a}var Xb={objectMaxDepth:5,urlErrorParamsEnabled:!0},le=/^\/(.+)\/([a-z]*)$/,ta=Object.prototype.hasOwnProperty,K=function(a){return C(a)?a.toLowerCase():a},vb=function(a){return C(a)?a.toUpperCase():a},wa,x,sb,Ha=[].slice,Kg=[].splice,ph=[].push,la=Object.prototype.toString,Rc=Object.getPrototypeOf,oa=F("ng"),da=A.angular||(A.angular={}),lc,qb=0;wa=A.document.documentMode;var Y=Number.isNaN||function(a){return a!==a};E.$inject=[];Ta.$inject=
[];var Ae=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,V=function(a){return C(a)?a.trim():a},Pd=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Ca=function(){if(!w(Ca.rules)){var a=A.document.querySelector("[ng-csp]")||A.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ca.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==
b.indexOf("no-inline-style")}}else{a=Ca;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ca.rules},rb=function(){if(w(rb.name_))return rb.name_;var a,b,d=Qa.length,c,e;for(b=0;b<d;++b)if(c=Qa[b],a=A.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return rb.name_=e},Ce=/:/g,Qa=["ng-","data-ng-","ng:","x-ng-"],Ge=function(a){var b=a.currentScript;if(!b)return!0;if(!(b instanceof A.HTMLScriptElement||b instanceof A.SVGScriptElement))return!1;
b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;if(!b.value)return!1;var c=a.createElement("a");c.href=b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}})}(A.document),Je=/[A-Z]/g,Yc=!1,Me=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)(?:[^\w:>-][^>]*)?)\/>/gi,Pa=3,Re={full:"1.8.7",
major:1,minor:8,dot:7,codeName:"childlike-rejuvenation"};U.expando="ng339";var Ka=U.cache={},vg=1;U._data=function(a){return this.cache[a[this.expando]]||{}};var sg=/-([a-z])/g,qh=/^-ms-/,Bb={mouseleave:"mouseout",mouseenter:"mouseover"},oc=F("jqLite"),ug=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,nc=/<|&#?\w+;/,tg=/<([\w:-]+)/,qa={thead:["table"],col:["colgroup","table"],tr:["tbody","table"],td:["tr","tbody","table"]};qa.tbody=qa.tfoot=qa.colgroup=qa.caption=qa.thead;qa.th=qa.td;var hb={option:[1,'<select multiple="multiple">',
"</select>"],_default:[0,"",""]},Nc;for(Nc in qa){var me=qa[Nc],ne=me.slice().reverse();hb[Nc]=[ne.length,"<"+ne.join("><")+">","</"+me.join("></")+">"]}hb.optgroup=hb.option;var Ag=A.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Wa=U.prototype={ready:hd,toString:function(){var a=[];r(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?x(this[a]):x(this[this.length+a])},length:0,push:ph,sort:[].sort,splice:[].splice},Hb={};r("multiple selected checked disabled readOnly required open".split(" "),
function(a){Hb[K(a)]=a});var od={};r("input select option textarea button form details".split(" "),function(a){od[a]=!0});var wd={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};r({data:sc,removeData:rc,hasData:function(a){for(var b in Ka[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)rc(a[b]),kd(a[b])},htmlPrefilter:function(a){return a}},function(a,b){U[b]=a});r({data:sc,inheritedData:Fb,scope:function(a){return x.data(a,
"$scope")||Fb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return x.data(a,"$isolateScope")||x.data(a,"$isolateScopeNoTemplate")},controller:ld,injector:function(a){return Fb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Cb,css:function(a,b,d){b=yb(b.replace(qh,"ms-"));if(w(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Pa&&2!==c&&8!==c&&a.getAttribute){var c=K(b),e=Hb[c];if(w(d))null===d||!1===d&&e?a.removeAttribute(b):
a.setAttribute(b,e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(w(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(z(d)){var c=a.nodeType;return 1===c||c===Pa?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(z(b)){if(a.multiple&&"select"===ua(a)){var d=[];r(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(z(b))return a.innerHTML;zb(a,!0);
a.innerHTML=b},empty:md},function(a,b){U.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==md&&z(2===a.length&&a!==Cb&&a!==ld?b:c)){if(D(b)){for(e=0;e<g;e++)if(a===sc)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=z(e)?Math.min(g,1):g;for(f=0;f<g;f++){var k=a(this[f],b,c);e=e?e+k:k}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});r({removeData:rc,on:function(a,b,d,c){if(w(c))throw oc("onargs");if(mc(a)){c=Ab(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=xg(a,e));
c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,k=function(b,c,g){var k=e[b];k||(k=e[b]=[],k.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));k.push(d)};g--;)b=c[g],Bb[b]?(k(Bb[b],zg),k(b,void 0,!0)):k(b)}},off:kd,one:function(a,b,d){a=x(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;zb(a);r(new U(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];r(a.childNodes,
function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new U(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;r(new U(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=x(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Gb,detach:function(a){Gb(a,!0)},after:function(a,
b){var d=a,c=a.parentNode;if(c){b=new U(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Eb,removeClass:Db,toggleClass:function(a,b,d){b&&r(b.split(" "),function(b){var e=d;z(e)&&(e=!Cb(a,b));(e?Eb:Db)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:qc,triggerHandler:function(a,b,d){var c,e,f=b.type||
b,g=Ab(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:E,type:f,target:a},b.type&&(c=S(c,b)),b=ja(g),e=d?[c].concat(d):[c],r(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){U.prototype[b]=function(b,
c,e){for(var f,g=0,k=this.length;g<k;g++)z(f)?(f=a(this[g],b,c,e),w(f)&&(f=x(f))):pc(f,a(this[g],b,c,e));return w(f)?f:this}});U.prototype.bind=U.prototype.on;U.prototype.unbind=U.prototype.off;var rh=Object.create(null);pd.prototype={_idx:function(a){a!==this._lastKey&&(this._lastKey=a,this._lastIndex=this._keys.indexOf(a));return this._lastIndex},_transformKey:function(a){return Y(a)?rh:a},get:function(a){a=this._transformKey(a);a=this._idx(a);if(-1!==a)return this._values[a]},has:function(a){a=
this._transformKey(a);return-1!==this._idx(a)},set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};var Ib=pd,qg=[function(){this.$get=[function(){return Ib}]}],Cg=/^([^(]+?)=>/,Dg=/^[^(]*\(\s*([^)]*)\)/m,sh=/,/,th=/^\s*(_?)(\S+?)\1\s*$/,Bg=
/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Da=F("$injector");fb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw C(d)&&d||(d=a.name||Eg(a)),Da("strictdi",d);b=qd(a);r(b[1].split(sh),function(a){a.replace(th,function(a,b,d){c.push(d)})})}a.$inject=c}}else H(a)?(b=a.length-1,tb(a[b],"fn"),c=a.slice(0,b)):tb(a,"fn",!0);return c};var oe=F("$animate"),Gf=function(){this.$get=E},Hf=function(){var a=new Ib,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,
c){function e(a,b,c){var d=!1;b&&(b=C(b)?b.split(" "):H(b)?b:[],r(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){r(b,function(b){var c=a.get(b);if(c){var d=Fg(b.attr("class")),e="",f="";r(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});r(b,function(a){e&&Eb(a,e);f&&Db(a,f)});a.delete(b)}});b.length=0}return{enabled:E,on:E,off:E,pin:E,push:function(g,k,h,l){l&&l();h=h||{};h.from&&g.css(h.from);h.to&&g.css(h.to);if(h.addClass||h.removeClass)if(k=h.addClass,l=
h.removeClass,h=a.get(g)||{},k=e(h,k,!0),l=e(h,l,!1),k||l)a.set(g,h),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},Ef=["$provide",function(a){var b=this,d=null,c=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){if(c&&"."!==c.charAt(0))throw oe("notcsel",c);var g=c+"-animation";b.$$registeredAnimations[c.substr(1)]=g;a.factory(g,d)};this.customFilter=function(a){1===arguments.length&&(c=B(a)?a:null);return c};this.classNameFilter=function(a){if(1===
arguments.length&&(d=a instanceof RegExp?a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,oe("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){var f=d[e];if(1===f.nodeType){e=f;break a}}e=void 0}!e||e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.cancel&&a.cancel()},enter:function(c,d,h,l){d=d&&
x(d);h=h&&x(h);d=d||h.parent();b(c,d,h);return a.push(c,"enter",ra(l))},move:function(c,d,h,l){d=d&&x(d);h=h&&x(h);d=d||h.parent();b(c,d,h);return a.push(c,"move",ra(l))},leave:function(b,c){return a.push(b,"leave",ra(c),function(){b.remove()})},addClass:function(b,c,d){d=ra(d);d.addClass=ib(d.addclass,c);return a.push(b,"addClass",d)},removeClass:function(b,c,d){d=ra(d);d.removeClass=ib(d.removeClass,c);return a.push(b,"removeClass",d)},setClass:function(b,c,d,f){f=ra(f);f.addClass=ib(f.addClass,
c);f.removeClass=ib(f.removeClass,d);return a.push(b,"setClass",f)},animate:function(b,c,d,f,m){m=ra(m);m.from=m.from?S(m.from,c):c;m.to=m.to?S(m.to,d):d;m.tempClasses=ib(m.tempClasses,f||"ng-inline-animate");return a.push(b,"animate",m)}}}]}],Jf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},If=function(){this.$get=["$q","$sniffer",
"$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;r(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},
progress:E,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&
this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(r(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},Ff=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=
null);g.to&&(b.css(g.to),g.to=null);k||h.complete();k=!0});return h}var g=e||{};g.$$prepared||(g=Ia(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var k,h=new d;return{start:f,end:f}}}]},$=F("$compile"),uc=new function(){};Zc.$inject=["$provide","$$sanitizeUriProvider"];Kb.prototype.isFirstChange=function(){return this.previousValue===uc};var sd=/^((?:x|data)[:\-_])/i,Jg=/[:\-_]+(.)/g,yd=F("$controller"),xd=/^(\S+)(\s+as\s+([\w$]+))?$/,Qf=function(){this.$get=["$document",
function(a){return function(b){b?!b.nodeType&&b instanceof x&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},zd="application/json",xc={"Content-Type":zd+";charset=utf-8"},Mg=/^\[|^\{(?!\{)/,Ng={"[":/]$/,"{":/}$/},Lg=/^\)]\}',?\n/,Lb=F("$http"),Ma=da.$interpolateMinErr=F("$interpolate");Ma.throwNoconcat=function(a){throw Ma("noconcat",a);};Ma.interr=function(a,b){return Ma("interr",a,b.toString())};var Qg=F("$interval"),Zf=function(){this.$get=function(){function a(a){var b=function(a){b.data=a;b.called=
!0};b.id=a;return b}var b=da.callbacks,d={};return{createCallback:function(c){c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},uh=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,Rg={http:80,https:443,ftp:21},kb=F("$location"),Sg=/^\s*[\\/]{2,}/,vh={$$absUrl:"",$$html5:!1,$$replace:!1,$$compose:function(){for(var a=this.$$path,
b=this.$$hash,d=De(this.$$search),b=b?"#"+ic(b):"",a=a.split("/"),c=a.length;c--;)a[c]=ic(a[c].replace(/%2F/g,"/"));this.$$url=a.join("/")+(d?"?"+d:"")+b;this.$$absUrl=this.$$normalizeUrl(this.$$url);this.$$urlUpdatedByLocation=!0},absUrl:Mb("$$absUrl"),url:function(a){if(z(a))return this.$$url;var b=uh.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Mb("$$protocol"),host:Mb("$$host"),port:Mb("$$port"),
path:Gd("$$path",function(a){a=null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(C(a)||X(a))a=a.toString(),this.$$search=hc(a);else if(D(a))a=Ia(a,{}),r(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw kb("isrcharg");break;default:z(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:Gd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=
!0;return this}};r([Fd,Ac,zc],function(a){a.prototype=Object.create(vh);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==zc||!this.$$html5)throw kb("nostate");this.$$state=z(b)?null:b;this.$$urlUpdatedByLocation=!0;return this}});var Ya=F("$parse"),Wg={}.constructor.prototype.valueOf,Vb=T();r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Vb[a]=!0});var wh={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Ob=function(a){this.options=a};Ob.prototype=
{constructor:Ob,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=
Vb[b],e=Vb[d];Vb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},
isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},
codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=w(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ya("lexerr",a,b,this.text);
},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=K(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},
readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=wh[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var q=function(a,b){this.lexer=a;this.options=b};q.Program="Program";q.ExpressionStatement="ExpressionStatement";q.AssignmentExpression="AssignmentExpression";q.ConditionalExpression="ConditionalExpression";
q.LogicalExpression="LogicalExpression";q.BinaryExpression="BinaryExpression";q.UnaryExpression="UnaryExpression";q.CallExpression="CallExpression";q.MemberExpression="MemberExpression";q.Identifier="Identifier";q.Literal="Literal";q.ArrayExpression="ArrayExpression";q.Property="Property";q.ObjectExpression="ObjectExpression";q.ThisExpression="ThisExpression";q.LocalsExpression="LocalsExpression";q.NGValueParameter="NGValueParameter";q.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);
a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:q.Program,body:a}},expressionStatement:function(){return{type:q.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},
assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Kd(a))throw Ya("lval");a={type:q.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:q.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:q.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};
return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:q.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=
this.multiplicative(),b;b=this.expect("+","-");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:q.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),
this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Ia(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:q.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===
b.text?(a={type:q.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:q.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:q.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:q.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=
[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:q.Identifier,name:a.text}},constant:function(){return{type:q.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:q.ArrayExpression,
elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:q.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):
this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:q.ObjectExpression,properties:a}},throwError:function(a,b){throw Ya("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ya("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ya("ueoe",this.text);return this.tokens[0]},
peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:q.ThisExpression},$locals:{type:q.LocalsExpression}}};var Id=2;Md.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],
body:[],own:{}},inputs:[]};Z(a,b.$filter);var d="",c;this.stage="assign";if(c=Ld(a))this.state.computing="assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=Jd(a.body);b.stage="inputs";r(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;var k=b.nextId();b.recurse(a,k);b.return_(k);b.state.inputs.push({name:d,isPure:a.isPure});a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);
a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+d+this.watchFns()+"return fn;";a=(new Function("$filter","getStringValue","ifDefined","plus",a))(this.$filter,Tg,Ug,Hd);this.state=this.stage=void 0;return a},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;r(b,function(b){a.push("var "+b.name+"="+d.generateFunction(b.name,"s"));b.isPure&&a.push(b.name,".isPure="+JSON.stringify(b.isPure)+";")});b.length&&a.push("fn.inputs=["+
b.map(function(a){return a.name}).join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;r(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,
f){var g,k,h=this,l,m,p;c=c||E;if(!f&&w(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case q.Program:r(a.body,function(b,c){h.recurse(b.expression,void 0,void 0,function(a){k=a});c!==a.body.length-1?h.current().body.push(k,";"):h.return_(k)});break;case q.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);break;case q.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){k=a});m=
a.operator+"("+this.ifDefined(k,0)+")";this.assign(b,m);c(m);break;case q.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){k=a});m="+"===a.operator?this.plus(g,k):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(k,0):"("+g+")"+a.operator+"("+k+")";this.assign(b,m);c(m);break;case q.LogicalExpression:b=b||this.nextId();h.recurse(a.left,b);h.if_("&&"===a.operator?b:h.not(b),h.lazyRecurse(a.right,b));c(b);break;case q.ConditionalExpression:b=
b||this.nextId();h.recurse(a.test,b);h.if_(b,h.lazyRecurse(a.alternate,b),h.lazyRecurse(a.consequent,b));c(b);break;case q.Identifier:b=b||this.nextId();d&&(d.context="inputs"===h.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);h.if_("inputs"===h.stage||h.not(h.getHasOwnProperty("l",a.name)),function(){h.if_("inputs"===h.stage||"s",function(){e&&1!==e&&h.if_(h.isNull(h.nonComputedMember("s",a.name)),h.lazyAssign(h.nonComputedMember("s",a.name),
"{}"));h.assign(b,h.nonComputedMember("s",a.name))})},b&&h.lazyAssign(b,h.nonComputedMember("l",a.name)));c(b);break;case q.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();h.recurse(a.object,g,void 0,function(){h.if_(h.notNull(g),function(){a.computed?(k=h.nextId(),h.recurse(a.property,k),h.getStringValue(k),e&&1!==e&&h.if_(h.not(h.computedMember(g,k)),h.lazyAssign(h.computedMember(g,k),"{}")),m=h.computedMember(g,k),h.assign(b,m),d&&(d.computed=!0,d.name=k)):(e&&
1!==e&&h.if_(h.isNull(h.nonComputedMember(g,a.property.name)),h.lazyAssign(h.nonComputedMember(g,a.property.name),"{}")),m=h.nonComputedMember(g,a.property.name),h.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){h.assign(b,"undefined")});c(b)},!!e);break;case q.CallExpression:b=b||this.nextId();a.filter?(k=h.filter(a.callee.name),l=[],r(a.arguments,function(a){var b=h.nextId();h.recurse(a,b);l.push(b)}),m=k+"("+l.join(",")+")",h.assign(b,m),c(b)):(k=h.nextId(),g={},l=[],h.recurse(a.callee,
k,g,function(){h.if_(h.notNull(k),function(){r(a.arguments,function(b){h.recurse(b,a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m=g.name?h.member(g.context,g.name,g.computed)+"("+l.join(",")+")":k+"("+l.join(",")+")";h.assign(b,m)},function(){h.assign(b,"undefined")});c(b)}));break;case q.AssignmentExpression:k=this.nextId();g={};this.recurse(a.left,void 0,g,function(){h.if_(h.notNull(g.context),function(){h.recurse(a.right,k);m=h.member(g.context,g.name,g.computed)+a.operator+k;
h.assign(b,m);c(b||m)})},1);break;case q.ArrayExpression:l=[];r(a.elements,function(b){h.recurse(b,a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case q.ObjectExpression:l=[];p=!1;r(a.properties,function(a){a.computed&&(p=!0)});p?(b=b||this.nextId(),this.assign(b,"{}"),r(a.properties,function(a){a.computed?(g=h.nextId(),h.recurse(a.key,g)):g=a.key.type===q.Identifier?a.key.name:""+a.key.value;k=h.nextId();h.recurse(a.value,k);h.assign(h.member(b,
g,a.computed),k)})):(r(a.properties,function(b){h.recurse(b.value,a.constant?void 0:h.nextId(),void 0,function(a){l.push(h.escape(b.key.type===q.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case q.ThisExpression:this.assign(b,"s");c(b||"s");break;case q.LocalsExpression:this.assign(b,"l");c(b||"l");break;case q.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||
(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;
c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,
"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(C(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(X(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";
if("undefined"===typeof a)return"undefined";throw Ya("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Nd.prototype={compile:function(a){var b=this;Z(a,b.$filter);var d,c;if(d=Ld(a))c=this.recurse(d);d=Jd(a.body);var e;d&&(e=[],r(d,function(a,c){var d=b.recurse(a);d.isPure=a.isPure;a.input=d;e.push(d);a.watchId=c}));var f=[];r(a.body,function(a){f.push(b.recurse(a.expression))});
a=0===a.body.length?E:1===a.body.length?f[0]:function(a,b){var c;r(f,function(d){c=d(a,b)});return c};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case q.Literal:return this.value(a.value,b);case q.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case q.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+
a.operator](c,e,b);case q.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case q.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case q.Identifier:return f.identifier(a.name,b,d);case q.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d):this.nonComputedMember(c,
e,b,d);case q.CallExpression:return g=[],r(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var p=[],n=0;n<g.length;++n)p.push(g[n](a,c,d,f));a=e.apply(void 0,p,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,f){var p=e(a,c,d,f),n;if(null!=p.value){n=[];for(var s=0;s<g.length;++s)n.push(g[s](a,c,d,f));n=p.value.apply(p.context,n)}return b?{value:n}:n};case q.AssignmentExpression:return c=
this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var p=c(a,d,f,g);a=e(a,d,f,g);p.context[p.name]=a;return b?{value:a}:a};case q.ArrayExpression:return g=[],r(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case q.ObjectExpression:return g=[],r(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===q.Identifier?a.key.name:
""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},n=0;n<g.length;++n)g[n].computed?f[g[n].key(a,c,d,e)]=g[n].value(a,c,d,e):f[g[n].key]=g[n].value(a,c,d,e);return b?{value:f}:f};case q.ThisExpression:return function(a){return b?{value:a}:a};case q.LocalsExpression:return function(a,c){return b?{value:c}:c};case q.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?+d:0;return b?{value:d}:
d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=Hd(k,c);return d?{value:k}:k}},"binary-":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=(w(k)?k:0)-(w(c)?c:0);return d?{value:k}:k}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);
return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?
{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:
c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k)?b(e,f,g,k):d(e,f,g,k);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){c=e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]=
{});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:e}},computedMember:function(a,b,d,c){return function(e,f,g,k){var h=a(e,f,g,k),l,m;null!=h&&(l=b(e,f,g,k),l+="",c&&1!==c&&h&&!h[l]&&(h[l]={}),m=h[l]);return d?{context:h,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};Nb.prototype=
{constructor:Nb,parse:function(a){a=this.getAst(a);var b=this.astCompiler.compile(a.ast),d=a.ast;b.literal=0===d.body.length||1===d.body.length&&(d.body[0].expression.type===q.Literal||d.body[0].expression.type===q.ArrayExpression||d.body[0].expression.type===q.ObjectExpression);b.constant=a.ast.constant;b.oneTime=a.oneTime;return b},getAst:function(a){var b=!1;a=a.trim();":"===a.charAt(0)&&":"===a.charAt(1)&&(b=!0,a=a.substring(2));return{ast:this.ast.ast(a),oneTime:b}}};var Ea=F("$sce"),W={HTML:"html",
CSS:"css",MEDIA_URL:"mediaUrl",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Dc=/_([a-z])/g,Zg=F("$templateRequest"),$g=F("$timeout"),aa=A.document.createElement("a"),Rd=ga(A.location.href),Na;aa.href="http://[::1]";var ah="[::1]"===aa.hostname;Sd.$inject=["$document"];fd.$inject=["$provide"];var Zd=22,Yd=".",Fc="0";Td.$inject=["$locale"];Vd.$inject=["$locale"];var lh={yyyy:ea("FullYear",4,0,!1,!0),yy:ea("FullYear",2,0,!0,!0),y:ea("FullYear",1,0,!1,!0),MMMM:lb("Month"),MMM:lb("Month",!0),MM:ea("Month",
2,1),M:ea("Month",1,1),LLLL:lb("Month",!1,!0),dd:ea("Date",2),d:ea("Date",1),HH:ea("Hours",2),H:ea("Hours",1),hh:ea("Hours",2,-12),h:ea("Hours",1,-12),mm:ea("Minutes",2),m:ea("Minutes",1),ss:ea("Seconds",2),s:ea("Seconds",1),sss:ea("Milliseconds",3),EEEE:lb("Day"),EEE:lb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Pb(Math[0<a?"floor":"ceil"](a/60),2)+Pb(Math.abs(a%60),2))},ww:ae(2),w:ae(1),G:Gc,GG:Gc,GGG:Gc,GGGG:function(a,
b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},kh=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,jh=/^-?\d+$/;Ud.$inject=["$locale"];var eh=ia(K),fh=ia(vb);Wd.$inject=["$parse"];var Te=ia({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===la.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),
wb={};r(Hb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=ya("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});wb[c]=function(){return{restrict:"A",priority:100,link:e}}}});r(wd,function(a,b){wb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(le))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});r(["src",
"srcset","href"],function(a){var b=ya("ng-"+a);wb[b]=["$sce",function(d){return{priority:99,link:function(c,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===la.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$set(b,d.getTrustedMediaUrl(f[b]));f.$observe(b,function(b){b?(f.$set(k,b),wa&&g&&e.prop(g,f[k])):"href"===a&&f.$set(k,null)})}}}]});var mb={$addControl:E,$getControls:ia([]),$$renameControl:function(a,b){a.$name=b},$removeControl:E,$setValidity:E,$setDirty:E,
$setPristine:E,$setSubmitted:E,$$setSubmitted:E};Qb.$inject=["$element","$attrs","$scope","$animate","$interpolate"];Qb.prototype={$rollbackViewValue:function(){r(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){r(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Ja(a.$name,"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$getControls:function(){return ja(this.$$controls)},$$renameControl:function(a,b){var d=
a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&this[a.$name]===a&&delete this[a.$name];r(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);r(this.$error,function(b,d){this.$setValidity(d,null,a)},this);r(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);cb(this.$$controls,a);a.$$parentForm=mb},$setDirty:function(){this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,Wb);this.$dirty=!0;this.$pristine=
!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,Za,Wb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;r(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){r(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){for(var a=this;a.$$parentForm&&a.$$parentForm!==mb;)a=a.$$parentForm;a.$$setSubmitted()},$$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=
!0;r(this.$$controls,function(a){a.$$setSubmitted&&a.$$setSubmitted()})}};de({clazz:Qb,set:function(a,b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&(cb(c,d),0===c.length&&delete a[b])}});var pe=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||E}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Qb,compile:function(d,f){d.addClass(Za).addClass(nb);var g=f.name?
"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var p=f[0];if(!("action"in e)){var n=function(b){a.$apply(function(){p.$commitViewValue();p.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",n);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",n)},0,!1)})}(f[1]||p.$$parentForm).$addControl(p);var s=g?c(p.$name):E;g&&(s(a,p),e.$observe(g,function(b){p.$name!==b&&(s(a,void 0),p.$$parentForm.$$renameControl(p,b),s=c(p.$name),s(a,p))}));d.on("$destroy",
function(){p.$$parentForm.$removeControl(p);s(a,void 0);S(p,mb)})}}}}}]},Ue=pe(),ff=pe(!0),mh=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,xh=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,yh=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,nh=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
qe=/^(\d{4,})-(\d{2})-(\d{2})$/,re=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Oc=/^(\d{4,})-W(\d\d)$/,se=/^(\d{4,})-(\d\d)$/,te=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,fe=T();r(["date","datetime-local","month","time","week"],function(a){fe[a]=!0});var ue={text:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Ic(c)},date:ob("date",qe,Rb(qe,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":ob("datetimelocal",re,Rb(re,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:ob("time",
te,Rb(te,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:ob("week",Oc,function(a,b){if(ha(a))return a;if(C(a)){Oc.lastIndex=0;var d=Oc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,k=0,h=$d(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),k=b.getMilliseconds());return new Date(c,0,h.getDate()+e,d,f,g,k)}}return NaN},"yyyy-Www"),month:ob("month",se,Rb(se,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f,g,k){Jc(a,b,d,c,"number");ge(c);Sa(a,b,d,c,e,f);var h;if(w(d.min)||d.ngMin){var l=
d.min||k(d.ngMin)(a);h=na(l);c.$validators.min=function(a,b){return c.$isEmpty(b)||z(h)||b>=h};d.$observe("min",function(a){a!==l&&(h=na(a),l=a,c.$validate())})}if(w(d.max)||d.ngMax){var m=d.max||k(d.ngMax)(a),p=na(m);c.$validators.max=function(a,b){return c.$isEmpty(b)||z(p)||b<=p};d.$observe("max",function(a){a!==m&&(p=na(a),m=a,c.$validate())})}if(w(d.step)||d.ngStep){var n=d.step||k(d.ngStep)(a),s=na(n);c.$validators.step=function(a,b){return c.$isEmpty(b)||z(s)||he(b,h||0,s)};d.$observe("step",
function(a){a!==n&&(s=na(a),n=a,c.$validate())})}},url:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Ic(c);c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||xh.test(d)}},email:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Ic(c);c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||yh.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==V(d.ngTrim);z(d.name)&&b.attr("name",++qb);b.on("change",function(a){var g;b[0].checked&&(g=d.value,e&&(g=V(g)),c.$setViewValue(g,a&&a.type))});
c.$render=function(){var a=d.value;e&&(a=V(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,c){b.attr(a,d[a]);var e=d[a];d.$observe(a,function(a){a!==e&&(e=a,c(a))})}function k(a){p=na(a);Y(c.$modelValue)||(m?(a=b.val(),p>a&&(a=p,b.val(a)),c.$setViewValue(a)):c.$validate())}function h(a){n=na(a);Y(c.$modelValue)||(m?(a=b.val(),n<a&&(b.val(n),a=n<p?p:n),c.$setViewValue(a)):c.$validate())}function l(a){s=na(a);Y(c.$modelValue)||(m?c.$viewValue!==
b.val()&&c.$setViewValue(b.val()):c.$validate())}Jc(a,b,d,c,"range");ge(c);Sa(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&"range"===b[0].type,p=m?0:void 0,n=m?100:void 0,s=m?1:void 0,r=b[0].validity;a=w(d.min);e=w(d.max);f=w(d.step);var q=c.$render;c.$render=m&&w(r.rangeUnderflow)&&w(r.rangeOverflow)?function(){q();c.$setViewValue(b.val())}:q;a&&(p=na(d.min),c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||z(p)||b>=p},g("min",k));e&&(n=na(d.max),c.$validators.max=m?function(){return!0}:
function(a,b){return c.$isEmpty(b)||z(n)||b<=n},g("max",h));f&&(s=na(d.step),c.$validators.step=m?function(){return!r.stepMismatch}:function(a,b){return c.$isEmpty(b)||z(s)||he(b,p||0,s)},g("step",l))},checkbox:function(a,b,d,c,e,f,g,k){var h=ie(k,a,"ngTrueValue",d.ngTrueValue,!0),l=ie(k,a,"ngFalseValue",d.ngFalseValue,!1);b.on("change",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return va(a,
h)});c.$parsers.push(function(a){return a?h:l})},hidden:E,button:E,submit:E,reset:E,file:E},$c=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,k){k[0]&&(ue[K(g.type)]||ue.text)(e,f,g,k[0],b,a,d,c)}}}}],Cf=function(){var a={configurable:!0,enumerable:!1,get:function(){return this.getAttribute("value")||""},set:function(a){this.setAttribute("value",a)}};return{restrict:"E",priority:200,compile:function(b,d){if("hidden"===
K(d.type))return{pre:function(b,d,f,g){b=d[0];b.parentNode&&b.parentNode.insertBefore(b,b.nextSibling);Object.defineProperty&&Object.defineProperty(b,"value",a)}}}}},zh=/^(true|false|\d+)$/,zf=function(){function a(a,d,c){var e=w(c)?c:9===wa?"":null;a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return zh.test(d.ngValue)?function(b,d,f){b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,function(b){a(d,f,b)})}}}},Ye=["$compile",function(a){return{restrict:"AC",
compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=jc(a)})}}}}],$e=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=z(a)?"":a})}}}}],Ze=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,
e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],yf=ia({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),af=Lc("",!0),cf=Lc("Odd",0),bf=Lc("Even",1),df=Ra({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),ef=[function(){return{restrict:"A",
scope:!0,controller:"@",priority:500}}],ed={},Ah={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=ya("ng-"+a);ed[b]=["$parse","$rootScope","$exceptionHandler",function(d,c,e){return td(d,c,e,b,a,Ah[a])}]});var hf=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,
e,f,g){var k,h,l;d.$watch(e.ngIf,function(d){d?h||g(function(d,f){h=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);k={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),h&&(h.$destroy(),h=null),k&&(l=ub(k.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),k=null))})}}}],jf=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:da.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",
k=e.autoscroll;return function(c,e,m,p,n){var r=0,q,t,x,v=function(){t&&(t.remove(),t=null);q&&(q.$destroy(),q=null);x&&(d.leave(x).done(function(a){!1!==a&&(t=null)}),t=x,x=null)};c.$watch(f,function(f){var m=function(a){!1===a||!w(k)||k&&!c.$eval(k)||b()},t=++r;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&t===r){var b=c.$new();p.template=a;a=n(b,function(a){v();d.enter(a,null,e).done(m)});q=b;x=a;q.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||t!==r||(v(),c.$emit("$includeContentError",
f))}),c.$emit("$includeContentRequested",f)):(v(),p.template=null)})}}}}],Bf=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){la.call(d[0]).match(/SVG/)?(d.empty(),a(gd(e.template,A.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],kf=Ra({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),xf=function(){return{restrict:"A",priority:100,require:"ngModel",
link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?V(e):e;c.$parsers.push(function(a){if(!z(a)){var b=[];a&&r(a.split(g),function(a){a&&b.push(f?V(a):a)});return b}});c.$formatters.push(function(a){if(H(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},nb="ng-valid",ce="ng-invalid",Za="ng-pristine",Wb="ng-dirty",pb=F("ngModel");Sb.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Sb.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=
this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);B(c)&&(c=a(b));return c};this.$$ngModelSet=function(a,c){B(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw pb("nonassign",this.$$attr.ngModel,Ba(this.$$element));},$render:E,$isEmpty:function(a){return z(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,
"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Wb);this.$$animate.addClass(this.$$element,Za)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,Wb);this.$$parentForm.$setDirty()},
$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!Y(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,
d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),f=this;this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;r(h.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(r(h.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;r(h.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!B(h.then))throw pb("nopromise",
h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?h.$$q.all(c).then(function(){g(d)},E):g(!0)}function f(a,b){k===h.$$currentValidationRunId&&h.$setValidity(a,b)}function g(a){k===h.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var k=this.$$currentValidationRunId,h=this;(function(){var a=h.$$parserName;if(z(h.$$parserValid))f(a,null);else return h.$$parserValid||(r(h.$validators,function(a,b){f(b,null)}),r(h.$asyncValidators,function(a,b){f(b,
null)})),f(a,h.$$parserValid),h.$$parserValid;return!0})()?c()?e():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;this.$$parserValid=z(a)?void 0:!0;this.$setValidity(this.$$parserName,
null);this.$$parserName="parse";if(this.$$parserValid)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),z(a)){this.$$parserValid=!1;break}Y(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));var c=this.$modelValue,e=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){e||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},
$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,this.$modelValue);r(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");X(b[a])?b=b[a]:X(b["default"])&&-1===this.$options.getOption("updateOn").indexOf(a)?b=b["default"]:X(b["*"])&&(b=b["*"]);this.$$timeout.cancel(this.$$pendingDebounce);
var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$rootScope.$$phase?this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},$overrideModelOptions:function(a){this.$options=this.$options.createChild(a);this.$$setUpdateOnEvents()},$processModelValue:function(){var a=this.$$format();this.$viewValue!==a&&(this.$$updateEmptyClasses(a),this.$viewValue=this.$$lastCommittedViewValue=a,this.$render(),this.$$runValidators(this.$modelValue,
this.$viewValue,E))},$$format:function(){for(var a=this.$formatters,b=a.length,d=this.$modelValue;b--;)d=a[b](d);return d},$$setModelValue:function(a){this.$modelValue=this.$$rawModelValue=a;this.$$parserValid=void 0;this.$processModelValue()},$$setUpdateOnEvents:function(){this.$$updateEvents&&this.$$element.off(this.$$updateEvents,this.$$updateEventHandler);if(this.$$updateEvents=this.$options.getOption("updateOn"))this.$$element.on(this.$$updateEvents,this.$$updateEventHandler)},$$updateEventHandler:function(a){this.$$debounceViewValueCommit(a&&
a.type)}};de({clazz:Sb,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var wf=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Sb,priority:1,compile:function(b){b.addClass(Za).addClass("ng-untouched").addClass(nb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;if(f=f[2])g.$options=f.$options;g.$$initGetterSetters();b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});
a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){function g(){k.$setTouched()}var k=f[0];k.$$setUpdateOnEvents();c.on("blur",function(){k.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Tb,Bh=/(\s+|^)default(\s+|$)/;Mc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=!1;a=S({},a);r(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):
"updateOn"===c&&(a.updateOnDefault=!1,a[c]=V(d.replace(Bh,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],je(a,this.$$options));je(a,Tb.$$options);return new Mc(a)}};Tb=new Mc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var Af=function(){function a(a,d){this.$$attrs=a;this.$$scope=d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Tb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);
this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},lf=Ra({terminal:!0,priority:1E3}),Ch=F("ngOptions"),Dh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,uf=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,
b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!r&&Aa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var p=a.match(Dh);if(!p)throw Ch("iexp",a,Ba(b));var n=p[5]||p[7],r=p[6];a=/ as /.test(p[0])&&p[1];var q=p[9];b=d(p[2]?p[1]:n);var t=a&&d(a)||b,w=q&&d(q),v=q?function(a,b){return w(c,b)}:function(a){return La(a)},x=function(a,b){return v(a,B(a,b))},z=d(p[2]||p[1]),y=d(p[3]||""),J=d(p[4]||""),
I=d(p[8]),A={},B=r?function(a,b){A[r]=b;A[n]=a;return A}:function(a){A[n]=a;return A};return{trackBy:q,getTrackByValue:x,getWatchables:d(I,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var k=a===d?g:d[g],l=a[k],k=B(l,k),l=v(l,k);b.push(l);if(p[2]||p[1])l=z(c,k),b.push(l);p[4]&&(k=J(c,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},d=I(c)||[],g=f(d),k=g.length,n=0;n<k;n++){var p=d===g?n:g[n],r=B(d[p],p),s=t(c,r),p=v(s,r),w=z(c,r),A=y(c,r),r=J(c,r),s=new e(p,s,
w,A,r);a.push(s);b[p]=s}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[x(a)]},getViewValueFromOption:function(a){return q?Ia(a.viewValue):a.viewValue}}}}}var e=A.document.createElement("option"),f=A.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=E},post:function(d,k,h,l){function m(a){var b=(a=v.getOptionFromViewValue(a))&&a.element;b&&!b.selected&&(b.selected=!0);return a}
function p(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}var n=l[0],q=l[1],z=h.multiple;l=0;for(var t=k.children(),A=t.length;l<A;l++)if(""===t[l].value){n.hasEmptyOption=!0;n.emptyOption=t.eq(l);break}k.empty();l=!!n.emptyOption;x(e.cloneNode(!1)).val("?");var v,B=c(h.ngOptions,k,d),C=b[0].createDocumentFragment();n.generateUnknownOptionValue=function(a){return"?"};z?(n.writeValue=function(a){if(v){var b=a&&a.map(m)||[];v.items.forEach(function(a){a.element.selected&&
-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})}},n.readValue=function(){var a=k.val()||[],b=[];r(a,function(a){(a=v.selectValueMap[a])&&!a.disabled&&b.push(v.getViewValueFromOption(a))});return b},B.trackBy&&d.$watchCollection(function(){if(H(q.$viewValue))return q.$viewValue.map(function(a){return B.getTrackByValue(a)})},function(){q.$render()})):(n.writeValue=function(a){if(v){var b=k[0].options[k[0].selectedIndex],c=v.getOptionFromViewValue(a);b&&b.removeAttribute("selected");
c?(k[0].value!==c.selectValue&&(n.removeUnknownOption(),k[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):n.selectUnknownOrEmptyOption(a)}},n.readValue=function(){var a=v.selectValueMap[k.val()];return a&&!a.disabled?(n.unselectEmptyOption(),n.removeUnknownOption(),v.getViewValueFromOption(a)):null},B.trackBy&&d.$watch(function(){return B.getTrackByValue(q.$viewValue)},function(){q.$render()}));l&&(a(n.emptyOption)(d),k.prepend(n.emptyOption),8===n.emptyOption[0].nodeType?
(n.hasEmptyOption=!1,n.registerOption=function(a,b){""===b.val()&&(n.hasEmptyOption=!0,n.emptyOption=b,n.emptyOption.removeClass("ng-scope"),q.$render(),b.on("$destroy",function(){var a=n.$isEmptyOptionSelected();n.hasEmptyOption=!1;n.emptyOption=void 0;a&&q.$render()}))}):n.emptyOption.removeClass("ng-scope"));d.$watchCollection(B.getWatchables,function(){var a=v&&n.readValue();if(v)for(var b=v.items.length-1;0<=b;b--){var c=v.items[b];w(c.group)?Gb(c.element.parentNode):Gb(c.element)}v=B.getOptions();
var d={};v.items.forEach(function(a){var b;if(w(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),C.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);var c=e.cloneNode(!1);b.appendChild(c);p(a,c)}else b=e.cloneNode(!1),C.appendChild(b),p(a,b)});k[0].appendChild(C);q.$render();q.$isEmpty(a)||(b=n.readValue(),(B.trackBy||z?va(a,b):a===b)||(q.$setViewValue(b),q.$render()))})}}}}],mf=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,
g,k){function h(a){g.text(a||"")}var l=k.count,m=k.$attr.when&&g.attr(k.$attr.when),p=k.offset||0,n=f.$eval(m)||{},q={},w=b.startSymbol(),t=b.endSymbol(),x=w+l+"-"+p+t,v=da.noop,A;r(k,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+K(c[2]),n[c]=g.attr(k.$attr[b]))});r(n,function(a,d){q[d]=b(a.replace(c,x))});f.$watch(l,function(b){var c=parseFloat(b),e=Y(c);e||c in n||(c=a.pluralCat(c-p));c===A||e&&Y(A)||(v(),e=q[c],z(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),v=E,h()):
v=f.$watch(e,h),A=c)})}}}],ve=F("ngRef"),nf=["$parse",function(a){return{priority:-1,restrict:"A",compile:function(b,d){var c=ya(ua(b)),e=a(d.ngRef),f=e.assign||function(){throw ve("nonassign",d.ngRef);};return function(a,b,h){var l;if(h.hasOwnProperty("ngRefRead"))if("$element"===h.ngRefRead)l=b;else{if(l=b.data("$"+h.ngRefRead+"Controller"),!l)throw ve("noctrl",h.ngRefRead,d.ngRef);}else l=b.data("$"+c+"Controller");l=l||b;f(a,l);b.on("$destroy",function(){e(a)===l&&f(a,null)})}}}}],of=["$parse",
"$animate","$compile",function(a,b,d){var c=F("ngRepeat"),e=function(a,b,c,d,e,f,g){a[c]=d;e&&(a[e]=f);a.$index=b;a.$first=0===b;a.$last=b===g-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))},f=function(a,b,c){return La(c)},g=function(a,b){return b};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(k,h){var l=h.ngRepeat,m=d.$$createComment("end ngRepeat",l),p=l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!p)throw c("iexp",l);var n=p[1],q=p[2],w=p[3],t=p[4],p=n.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!p)throw c("iidexp",n);var x=p[3]||p[1],v=p[2];if(w&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(w)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(w)))throw c("badident",w);var A;if(t){var z={$id:La},y=a(t);A=function(a,b,c,d){v&&(z[v]=b);z[x]=c;z.$index=d;return y(a,z)}}return function(a,d,h,k,n){var p=T();a.$watchCollection(q,function(h){var k,
q,t=d[0],s,y=T(),B,C,E,D,H,F,K;w&&(a[w]=h);if(Aa(h))H=h,q=A||f;else for(K in q=A||g,H=[],h)ta.call(h,K)&&"$"!==K.charAt(0)&&H.push(K);B=H.length;K=Array(B);for(k=0;k<B;k++)if(C=h===H?k:H[k],E=h[C],D=q(a,C,E,k),p[D])F=p[D],delete p[D],y[D]=F,K[k]=F;else{if(y[D])throw r(K,function(a){a&&a.scope&&(p[a.id]=a)}),c("dupes",l,D,E);K[k]={id:D,scope:void 0,clone:void 0};y[D]=!0}z&&(z[x]=void 0);for(s in p){F=p[s];D=ub(F.clone);b.leave(D);if(D[0].parentNode)for(k=0,q=D.length;k<q;k++)D[k].$$NG_REMOVED=!0;F.scope.$destroy()}for(k=
0;k<B;k++)if(C=h===H?k:H[k],E=h[C],F=K[k],F.scope){s=t;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);F.clone[0]!==s&&b.move(ub(F.clone),null,t);t=F.clone[F.clone.length-1];e(F.scope,k,x,E,v,C,B)}else n(function(a,c){F.scope=c;var d=m.cloneNode(!1);a[a.length++]=d;b.enter(a,null,t);t=d;F.clone=a;y[F.id]=F;e(F.scope,k,x,E,v,C,B)});p=y})}}}}],pf=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],
gf=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],qf=Ra(function(a,b,d){a.$watchCollection(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,c){b.css(c,"")});a&&b.css(a)})}),rf=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],k=[],h=[],l=[],m=function(a,b){return function(c){!1!==
c&&a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){for(var d,e;h.length;)a.cancel(h.pop());d=0;for(e=l.length;d<e;++d){var q=ub(k[d].clone);l[d].$destroy();(h[d]=a.leave(q)).done(m(h,d))}k.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");k.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],sf=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a});r(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),tf=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Eh=F("ngTransclude"),vf=["$compile",function(a){return{restrict:"EAC",compile:function(b){var d=a(b.contents());b.empty();
return function(a,b,f,g,k){function h(){d(a,function(a){b.append(a)})}if(!k)throw Eh("orphan",Ba(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;k(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==Pa||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(h(),c.$destroy())},null,f);f&&!k.isSlotFilled(f)&&h()}}}}],Ve=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===
d.type&&a.put(d.id,b[0].text)}}}],Fh={$setViewValue:E,$render:E},Gh=["$element","$scope",function(a,b){function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),a&&e.ngModelCtrl.$render())}))}var e=this,f=new Ib;e.selectValueMap={};e.ngModelCtrl=Fh;e.multiple=!1;e.unknownOption=x(A.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=
function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);Oa(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Oa(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+La(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),Oa(e.emptyOption,!0))};e.unselectEmptyOption=
function(){e.hasEmptyOption&&Oa(e.emptyOption,!1)};b.$on("$destroy",function(){e.renderUnknownOption=E});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];c&&Oa(x(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=La(b),a.val(c in e.selectValueMap?c:b),Oa(x(a[0].options[a[0].selectedIndex]),!0)):e.selectUnknownOrEmptyOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Ja(a,
'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){var b=f.get(a);b&&(1===b?(f.delete(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){return!!f.get(a)};e.$hasEmptyOption=function(){return e.hasEmptyOption};e.$isUnknownOptionSelected=function(){return a[0].options[0]===e.unknownOption[0]};e.$isEmptyOptionSelected=function(){return e.hasEmptyOption&&a[0].options[a[0].selectedIndex]===
e.emptyOption[0]};e.selectUnknownOrEmptyOption=function(a){null==a&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(a):e.renderUnknownOption(a)};var g=!1,k=!1;e.registerOption=function(a,b,f,g,k){if(f.$attr.ngValue){var q,r;f.$observe("value",function(a){var d,f=b.prop("selected");w(r)&&(e.removeOption(q),delete e.selectValueMap[r],d=!0);r=La(a);q=a;e.selectValueMap[r]=a;e.addOption(a,b);b.attr("value",r);d&&f&&c()})}else g?f.$observe("value",
function(a){e.readValue();var d,f=b.prop("selected");w(q)&&(e.removeOption(q),d=!0);q=a;e.addOption(a,b);d&&f&&c()}):k?a.$watch(k,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&
a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],We=function(){return{restrict:"E",require:["select","?ngModel"],controller:Gh,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),d.multiple){e.multiple=!0;e.readValue=function(){var a=[];r(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b))});return a};e.writeValue=
function(a){r(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));c!==b.selected&&Oa(x(b),c)})};var g,k=NaN;a.$watch(function(){k!==f.$viewValue||va(g,f.$viewValue)||(g=ja(f.$viewValue),f.$render());k=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=E},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Xe=["$interpolate",
function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,e;w(d.ngValue)||(w(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var h=b.parent();(h=h.data("$selectController")||h.parent().data("$selectController"))&&h.registerOption(a,b,d,c,e)}}}}],bd=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.hasOwnProperty("required")||a(c.ngRequired)(b);c.ngRequired||(c.required=!0);e.$validators.required=
function(a,b){return!f||!e.$isEmpty(b)};c.$observe("required",function(a){f!==a&&(f=a,e.$validate())})}}}}],ad=["$parse",function(a){return{restrict:"A",require:"?ngModel",compile:function(b,d){var c,e;d.ngPattern&&(c=d.ngPattern,e="/"===d.ngPattern.charAt(0)&&le.test(d.ngPattern)?function(){return d.ngPattern}:a(d.ngPattern));return function(a,b,d,h){if(h){var l=d.pattern;d.ngPattern?l=e(a):c=d.pattern;var m=ke(l,c,b);d.$observe("pattern",function(a){var d=m;m=ke(a,c,b);(d&&d.toString())!==(m&&m.toString())&&
h.$validate()});h.$validators.pattern=function(a,b){return h.$isEmpty(b)||z(m)||m.test(b)}}}}}}],dd=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.maxlength||a(c.ngMaxlength)(b),g=Ub(f);c.$observe("maxlength",function(a){f!==a&&(g=Ub(a),f=a,e.$validate())});e.$validators.maxlength=function(a,b){return 0>g||e.$isEmpty(b)||b.length<=g}}}}}],cd=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.minlength||
a(c.ngMinlength)(b),g=Ub(f)||-1;c.$observe("minlength",function(a){f!==a&&(g=Ub(a)||-1,f=a,e.$validate())});e.$validators.minlength=function(a,b){return e.$isEmpty(b)||b.length>=g}}}}}];A.angular.bootstrap?A.console&&console.log("WARNING: Tried to load AngularJS more than once."):(Ke(),Qe(da),da.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",
mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==
f?"one":"other"}})}]),x(function(){Fe(A.document,Wc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend(window.angular.element("<style>").text('@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}'));
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS
 (c) 2010-2020 Google LLC. http://angularjs.org
 License: MIT
 XLTS for AngularJS v1.8.7
 (c) 2021 XLTS.dev All Rights Reserved. https://xlts.dev/angularjs
 License: Obtain a commercial license from XLTS.dev before using this software.
*/
(function(n,e){'use strict';function m(d,k,l){var a=l.baseHref(),h=d[0];return function(f,b,c){var d,g;c=c||{};g=c.expires;d=e.isDefined(c.path)?c.path:a;e.isUndefined(b)&&(g="Thu, 01 Jan 1970 00:00:00 GMT",b="");e.isString(g)&&(g=new Date(g));b=encodeURIComponent(f)+"="+encodeURIComponent(b);b=b+(d?";path="+d:"")+(c.domain?";domain="+c.domain:"");b+=g?";expires="+g.toUTCString():"";b+=c.secure?";secure":"";b+=c.samesite?";samesite="+c.samesite:"";c=b.length+1;4096<c&&k.warn("Cookie '"+f+"' possibly not set or overflowed because it was too large ("+
c+" > 4096 bytes)!");h.cookie=b}}e.module("ngCookies",["ng"]).info({angularVersion:"1.8.7"}).provider("$cookies",[function(){var d=this.defaults={};this.$get=["$$cookieReader","$$cookieWriter",function(k,l){return{get:function(a){return k()[a]},getObject:function(a){return(a=this.get(a))?e.fromJson(a):a},getAll:function(){return k()},put:function(a,h,f){l(a,h,f?e.extend({},d,f):d)},putObject:function(a,d,f){this.put(a,e.toJson(d),f)},remove:function(a,h){l(a,void 0,h?e.extend({},d,h):d)}}}]}]);m.$inject=
["$document","$log","$browser"];e.module("ngCookies").provider("$$cookieWriter",function(){this.$get=m})})(window,window.angular);
//# sourceMappingURL=angular-cookies.min.js.map

!function(a){return function(a){"use strict";function b(a,b,c,d){function e(a){return"{{"+a+"}}"}function f(a,b){var d=c[a];if(!d)return a;for(var f in b)b.hasOwnProperty(f)&&(d=d.replace(new RegExp(e(f)),b[f]));return d=d.replace(/{{.*?}}/g,"")}var g=a.has("translateFilter")||d.customFilterName;return function(a,c){if(g){var e=d.customFilterName||"translate",h=b(e)(d.prefix+a,c);if(h&&h!==a)return h}return f(a,c)}}a.constant("fallbacks",{SEARCH_ELLIPSIS:"Search...",CLOSE:"Close",CURRENT_PAGE:"<b>Page {{current}}</b> of <b>{{total}}</b>",RANGE_TEXT:"{min} to {max}",PAGE_N:"Page {{page}}",JUMP_TO:"Jump to...",ENTER_PAGE:"Go to page <span qstrap.page-input></span> of {{total}}",FIRST_PAGE:"First Page",LAST_PAGE:"Last Page",NO_ITEMS_TO_DISPLAY:"No items to display",ON:"On",OFF:"Off",SUN_ABBR:"S",MON_ABBR:"M",TUE_ABBR:"T",WED_ABBR:"W",THU_ABBR:"T",FRI_ABBR:"F",SAT_ABBR:"S",NUM_SEARCH_RESULTS:"There are {{numResults}} results",ONE_SEARCH_RESULT:"There is one result"}).provider("qstrapTranslateFilter",[function(){this.prefix="",this.setPrefix=function(a){this.prefix=a},this.setFilterName=function(a){this.customFilterName=a};var a=this;this.$get=["$injector","$filter","fallbacks",function(c,d,e){return new b(c,d,e,{prefix:a.prefix,customFilterName:a.customFilterName})}]}])}(angular.module("qstrap.translate",[])),function(a){"use strict";a.factory("qstrap.util",["$timeout","$q",function(a,b){function c(b,c){var d=null,e=null;return function(){var f=this;d?e=arguments:(d=a(c)["finally"](function(){if(d=null,e){var a=e;e=null,b.apply(f,a)}}),b.apply(f,arguments))}}function d(a){var c=0,d=null,e=-1;return function(){var f=++c;return b.when(a.apply(null,arguments)).then(function(a){return f>e&&(d=a,e=f),d})}}function e(a,b){return void 0!==a?a:b}var f={TAB:9,ENTER:13,ESCAPE:27,SPACE:32,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40},g=["input:not([disabled])","select:not([disabled])","textarea:not([disabled])","a[href]","button:not([disabled])","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],h=g.join(",");return{throttle:c,ignoreStaleResponses:d,keys:f,focusableSelector:h,defaultFor:e}}])}(angular.module("qstrap.util",[])),function(b){"use strict";b.factory("qstrap.$autoComplete",["$q","$timeout","qstrap.$menu","qstrap.util",function(b,c,d,e){function f(a,c,f){var g=this;this._element=a,this._valuesPromise=b.when(c),this._options=f,this._items=[],this._selectedIndex=-1,this._searchTerm="",this._searchFn=f.searchFn,f.searchFn&&f.searchInterval&&(this._searchFn=e.ignoreStaleResponses(f.searchFn),this.updateMenuItems=e.throttle(this.updateMenuItems,f.searchInterval));var h={items:this._valuesPromise,action:function(a,b){g.useSuggestion(b)},showEvent:" ",shouldSetFocusOnFirstItem:!1};this._menu=new d(a,h),a.data("q.qmenu",this._menu),a.on("blur",this.hideMenu.bind(this)),a.on("keyup",this.handleInput.bind(this)),a.on("keydown",this.handleKeydown.bind(this))}function g(a,b){var c=[];return angular.forEach(b,function(b){var d="string"==typeof b?b:b.label;d&&0===d.toLowerCase().indexOf(a)&&c.push(d)}),c}var h=2;return f.prototype={filterItems:function(a){return a=a.toLowerCase(),this._searchFn?b.when(this._searchFn({$searchTerm:a})):this._valuesPromise.then(function(b){var c=g(a,b);return c})},formatMenuItems:function(a){if(!a||!a.length)return[];for(var b=[],c=0;c<a.length;c++){var d=a[c];"string"==typeof d?b.push({label:d,value:d,className:this._selectedIndex===c?"autocomplete-selected":""}):"object"==typeof d&&(d.className=this._selectedIndex===c?"autocomplete-selected":"",b.push(d))}return b},updateMenuItems:function(){this._items=[],this._selectedIndex=-1;var a=this,b=this.filterItems(this._searchTerm).then(this.formatMenuItems.bind(this)).then(function(b){return a._items=b,b});this.menuVisible()?this._menu.updateMenuItems(b):(this._menu._menuDef.items=b,this._element[0].showMenu(),this.bindMenuDOMEvents()),c(function(){a.bindMenuItemDOMEvents()})},hideMenu:function(a){var b=this;c(function(){b.closeMenu(),b.clearSuggestion(),b._selectedIndex=-1},250)},closeMenu:function(){this._element[0].closeMenu()},handleInput:function(a){var b=this._element[0].value;if(b!==this._searchTerm){this._searchTerm=b,this._selectedIndex=-1,this.clearSuggestion();var c=this._options.minChars||h;b&&b.length>=c?this.updateMenuItems():this.closeMenu()}},menuVisible:function(){return!!this._menu._menuDom},handleKeydown:function(a){var b=a.keyCode;switch(b){case 38:this.handleChangeIndex(a,this.indexUp.bind(this));break;case 40:this.handleChangeIndex(a,this.indexDown.bind(this));break;case 13:this.handleReturnKey(a);break;case 27:this.handleEscapeKey(a);break;case 9:this.handleTabKey(a)}},handleChangeIndex:function(a,b){if(a.preventDefault(),a.stopPropagation(),this.menuVisible()){if(this._menu._menuDom&&this._menu._menuDom._isMouseOver)return;b(),this.setSuggestion(this._selectedIndex)}this.updateSelectedMenuItem(),this.scrollToSelected()},indexUp:function(){this.changeIndexBy(-1)},indexDown:function(){this.changeIndexBy(1)},changeIndexBy:function(a){var b=this._items.length,c=0;do++c,this._selectedIndex=this._selectedIndex+a,this._selectedIndex>=b&&(this._selectedIndex=0),this._selectedIndex<0&&(this._selectedIndex=b-1);while(c<=b&&this._items[this._selectedIndex].header);c>b&&(this._selectedIndex=-1)},updateSelectedMenuItem:function(){if(this.menuVisible()){if(a(this._menu._menuDom).find(".autocomplete-selected").removeClass("autocomplete-selected"),this._selectedIndex>-1){var b=this,c=a(this._menu._menuDom).find("ul").children("li"),d=c.get(b._selectedIndex);a(d).addClass("autocomplete-selected")}}else this.updateMenuItems()},scrollToSelected:function(){var b=this;c(function(){var c=a(b._menu._menuDom).find("ul"),d=a(c).find(".autocomplete-selected");if(d.length){var e=c.scrollTop(),f=c.innerHeight(),g=d.position().top,h=d.outerHeight();g<0?c.scrollTop(e+g):g+h>f&&c.scrollTop(e+g+h-f)}})},handleReturnKey:function(a){this.menuVisible()&&this._selectedIndex!==-1&&(a.preventDefault(),this.useSuggestion(this._items[this._selectedIndex]),this.closeMenu())},handleEscapeKey:function(a){a.preventDefault(),this.closeMenu(),this._selectedIndex=-1,this.clearSuggestion()},handleTabKey:function(a){this.menuVisible()&&this._selectedIndex!==-1&&(this.useSuggestion(this._items[this._selectedIndex]),this.closeMenu())},bindMenuDOMEvents:function(){var a=this;this._menu._menuDom.on("mouseleave",function(){a.clearSuggestion(),a._menu._menuDom._isMouseOver=!1}),this._menu._menuDom.on("mouseenter",function(){a.setSelectedIndex(-1),a._menu._menuDom._isMouseOver=!0})},bindMenuItemDOMEvents:function(){var b=this;this._menu._menuDom.find("ul").first().children().each(function(c){a(this).find("a").first().on("mouseenter",function(){b.setSuggestion(c)})})},setSelectedIndex:function(a){this._selectedIndex!==a&&(this._selectedIndex=a,this.updateSelectedMenuItem())},setSuggestion:function(a){var b=this._items[a]||{},c=b.label;if(c&&"string"==typeof c){var d=this._searchTerm+c.substring(this._searchTerm.length);this._options.setSuggestion(d)}},clearSuggestion:function(){this._options.setSuggestion("")},useSuggestion:function(a){this.clearSuggestion(),this._searchTerm=this._options.setValue(a)}},f}]),b.directive("qstrap.autoComplete",["$q","$timeout","$templateCache","$compile","qstrap.$autoComplete",function(b,c,d,e,f){return d.put("qstrap.autoComplete.html",'<div class="autocomplete-container"><input class="form-control" type="text" ng-model="value" ng-attr-placeholder="{{placeholder}}" /><input class="form-control" type="text" ng-model="suggestion" disabled="true" /></div>'),{scope:{value:"=",items:"=",search:"&?",searchInterval:"@?",startChars:"@?",placeholder:"@?",onChange:"&?"},replace:!0,templateUrl:"qstrap.autoComplete.html",link:function(b,c,d){b.setSuggestion=function(a){b.$apply(function(){b.suggestion=a})},b.setValue=function(a){return b.$apply(function(){b.value=a.label,b.onChange&&b.onChange({$value:a.label})}),a.label};var e=angular.element(a(c).find("input:not([disabled])")[0]);e.on("input",function(a){b.onChange&&b.onChange({$value:b.value})});var g=d.search?b.search:null;new f(e,b.items,{setSuggestion:b.setSuggestion,minChars:parseInt(b.startChars,10),setValue:b.setValue,searchFn:g,searchInterval:parseInt(b.searchInterval,10)})}}}])}(angular.module("qstrap.autoComplete",["qstrap.menu","qstrap.util"])),function(b){"use strict";b.directive("qstrap.quickSearch",["$templateCache","qstrap.$autoComplete",function(b,c){return b.put("qstrap.quickSearch.html",'<input class="form-control" type="text" ng-model="value" ng-attr-placeholder="{{placeholder}}" />'),{scope:{search:"&",searchInterval:"@?",startChars:"@?",placeholder:"@?",onSelect:"&?"},replace:!0,templateUrl:"qstrap.quickSearch.html",link:function(b,d,e){b.setSuggestion=angular.noop,b.setValue=function(a){return b.value=!!e.onSelect&&b.onSelect({$item:a})||"",b.$apply(),b.value};var f=angular.element(a(d)),g=e.search?b.search:null;new c(f,b.items,{setSuggestion:b.setSuggestion,minChars:parseInt(b.startChars,10),setValue:b.setValue,searchFn:g,searchInterval:parseInt(b.searchInterval,10)})}}}])}(angular.module("qstrap.autoComplete")),function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):window.jQuery&&!window.jQuery.fn.colorpicker&&a(window.jQuery)}(function(a){"use strict";var b=function(a){this.value={h:0,s:0,b:0,a:1},this.origFormat=null,a&&(void 0!==a.toLowerCase?this.setColor(a):void 0!==a.h&&(this.value=a))};b.prototype={constructor:b,colors:{aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c","indigo ":"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},_sanitizeNumber:function(a){return"number"==typeof a?a:isNaN(a)||null===a||""===a||void 0===a?1:void 0!==a.toLowerCase?parseFloat(a):1},setColor:function(a){a=a.toLowerCase(),"#"!==a.charAt(0)&&(a="#"+a),this.value=this.stringToHSB(a)||{h:0,s:0,b:0,a:1}},stringToHSB:function(b){b=b.toLowerCase();var c=this,d=!1;return a.each(this.stringParsers,function(a,e){var f=e.re.exec(b),g=f&&e.parse.apply(c,[f]),h=e.format||"rgba";return!g||(d=h.match(/hsla?/)?c.RGBtoHSB.apply(c,c.HSLtoRGB.apply(c,g)):c.RGBtoHSB.apply(c,g),c.origFormat=h,!1)}),d},setHue:function(a){this.value.h=1-a},setSaturation:function(a){this.value.s=a},setBrightness:function(a){this.value.b=1-a},setAlpha:function(a){this.value.a=parseInt(100*(1-a),10)/100},toRGB:function(a,b,c,d){a||(a=this.value.h,b=this.value.s,c=this.value.b),a*=360;var e,f,g,h,i;return a=a%360/60,i=c*b,h=i*(1-Math.abs(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],{r:Math.round(255*e),g:Math.round(255*f),b:Math.round(255*g),a:d||this.value.a}},toHex:function(a,b,c,d){var e=this.toRGB(a,b,c,d);return"#"+(1<<24|parseInt(e.r)<<16|parseInt(e.g)<<8|parseInt(e.b)).toString(16).substr(1)},toHSL:function(a,b,c,d){a=a||this.value.h,b=b||this.value.s,c=c||this.value.b,d=d||this.value.a;var e=a,f=(2-b)*c,g=b*c;return g/=f>0&&f<=1?f:2-f,f/=2,g>1&&(g=1),{h:isNaN(e)?0:e,s:isNaN(g)?0:g,l:isNaN(f)?0:f,a:isNaN(d)?0:d}},toAlias:function(a,b,c,d){var e=this.toHex(a,b,c,d);for(var f in this.colors)if(this.colors[f]==e)return f;return!1},RGBtoHSB:function(a,b,c,d){a/=255,b/=255,c/=255;var e,f,g,h;return g=Math.max(a,b,c),h=g-Math.min(a,b,c),e=0===h?null:g===a?(b-c)/h:g===b?(c-a)/h+2:(a-b)/h+4,e=(e+360)%6*60/360,f=0===h?0:h/g,{h:this._sanitizeNumber(e),s:f,b:g,a:this._sanitizeNumber(d)}},HueToRGB:function(a,b,c){return c<0?c+=1:c>1&&(c-=1),6*c<1?a+(b-a)*c*6:2*c<1?b:3*c<2?a+(b-a)*(2/3-c)*6:a},HSLtoRGB:function(a,b,c,d){b<0&&(b=0);var e;e=c<=.5?c*(1+b):c+b-c*b;var f=2*c-e,g=a+1/3,h=a,i=a-1/3,j=Math.round(255*this.HueToRGB(f,e,g)),k=Math.round(255*this.HueToRGB(f,e,h)),l=Math.round(255*this.HueToRGB(f,e,i));return[j,k,l,this._sanitizeNumber(d)]},toString:function(a){a=a||"rgba";var b,c;switch(a){case"rgb":return b=this.toRGB(),"rgb("+b.r+","+b.g+","+b.b+")";case"rgba":return b=this.toRGB(),"rgba("+b.r+","+b.g+","+b.b+","+b.a+")";case"hsl":return c=this.toHSL(),"hsl("+Math.round(360*c.h)+","+Math.round(100*c.s)+"%,"+Math.round(100*c.l)+"%)";case"hsla":return c=this.toHSL(),"hsla("+Math.round(360*c.h)+","+Math.round(100*c.s)+"%,"+Math.round(100*c.l)+"%,"+c.a+")";case"hex":return this.toHex();case"alias":return this.toAlias()||this.toHex();default:return!1}},stringParsers:[{re:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,format:"hex",parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16),1]}},{re:/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,format:"hex",parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16),1]}},{re:/rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,format:"rgb",parse:function(a){return[a[1],a[2],a[3],1]}},{re:/rgb\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*?\)/,format:"rgb",parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],1]}},{re:/rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,format:"rgba",parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,format:"rgba",parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{re:/hsl\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*?\)/,format:"hsl",parse:function(a){return[a[1]/360,a[2]/100,a[3]/100,a[4]]}},{re:/hsla\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,format:"hsla",parse:function(a){return[a[1]/360,a[2]/100,a[3]/100,a[4]]}},{re:/^([a-z]{3,})$/,format:"alias",parse:function(a){var b=this.colorNameToHex(a[0])||"#000000",c=this.stringParsers[0].re.exec(b),d=c&&this.stringParsers[0].parse.apply(this,[c]);return d}}],colorNameToHex:function(a){return"undefined"!=typeof this.colors[a.toLowerCase()]&&this.colors[a.toLowerCase()]}};var c={inline:!1,color:!1,format:!1,input:"input",container:!1,component:".add-on, .input-group-addon",sliders:{saturation:{maxLeft:100,maxTop:100,callLeft:"setSaturation",callTop:"setBrightness"},hue:{maxLeft:0,maxTop:100,callLeft:!1,callTop:"setHue"},alpha:{maxLeft:0,maxTop:100,callLeft:!1,callTop:"setAlpha"}},slidersHorz:{saturation:{maxLeft:100,maxTop:100,callLeft:"setSaturation",callTop:"setBrightness"},hue:{maxLeft:100,maxTop:0,callLeft:"setHue",callTop:!1},alpha:{maxLeft:100,maxTop:0,callLeft:"setAlpha",callTop:!1}},template:'<div class="colorpicker qmenu dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div></div>'},d=function(d,e){this.element=a(d).addClass("colorpicker-element"),this.options=a.extend({},c,this.element.data(),e),this.component=this.options.component,this.component=this.component!==!1&&this.element.find(this.component),this.component&&0===this.component.length&&(this.component=!1),this.container=this.options.container===!0?this.element:this.options.container,this.container=this.container!==!1&&a(this.container),this.picker=a(this.options.template),this.input=this.element.is("input")?this.element:!!this.options.input&&this.element.find(this.options.input),this.input&&0===this.input.length&&(this.input=!1),this.color=new b(this.options.color!==!1?this.options.color:this.getValue()),this.format=this.options.format!==!1?this.options.format:this.color.origFormat,this.inputFormat=this.options.inputFormat||this.format;var f=!1;this.input===!1&&this.options.showInput&&(f=!0,this.picker.find(".colorpicker-color div").append(this.input=a("<input>")),this.updateInput());var g=["#272727","#404040","#777777","#CCCCCC","#DDDDDD","#F7F7F7","#FFFFFF"],h=g.concat(this.options.swatches||[]),i=a('<div class="colorpicker-swatches"></div>'),j=this;a.each(h,function(b,c){i.append(a('<span style="background:'+c+'"></span>').on("mouseup",a.proxy(j.setValue,j,c)))}),this.picker.find(".colorpicker-color").before(i),this.options.inline?this.picker.addClass("colorpicker-inline colorpicker-visible").removeClass("qmenu dropdown-menu"):this.picker.addClass("colorpicker-hidden"),"rgba"!==this.format&&"hsla"!==this.format||this.picker.addClass("colorpicker-with-alpha"),this.picker.on("mousedown.colorpicker",a.proxy(this.mousedown,this)),this.picker.appendTo(this.container?this.container:a("body")),this.input!==!1&&(this.input.on({"keyup.colorpicker":a.proxy(this.keyup,this)}),this.component===!1&&this.element.on({"focus.colorpicker":a.proxy(this.show,this)}),this.options.inline!==!1||f||this.element.on({"focusout.colorpicker":a.proxy(this.hide,this)})),this.component!==!1&&this.component.on({"click.colorpicker":a.proxy(this.show,this)}),this.input!==!1&&!f||this.component!==!1||this.element.on({"click.colorpicker":a.proxy(this.show,this)}),this.update(),a(a.proxy(function(){this.element.trigger("create")},this))};d.version="2.0.0-beta",d.Color=b,d.prototype={constructor:d,destroy:function(){this.picker.remove(),this.element.removeData("colorpicker").off(".colorpicker"),this.input!==!1&&this.input.off(".colorpicker"),this.component!==!1&&this.component.off(".colorpicker"),this.element.removeClass("colorpicker-element"),this.element.trigger({type:"destroy"})},reposition:function(){if(this.options.inline!==!1)return!1;var b=this.container&&this.container[0]!==document.body?"position":"offset",c=this.component||this.element,d=c[b](),e=c.outerHeight(),f=c.outerWidth(),g=a(window).width(),h=a(window).height(),i=a(document).scrollTop(),j=a(document).scrollLeft(),k=this.picker.outerHeight(),l=this.picker.outerWidth(),m=d.top+e;m+k>h+i&&(m=d.top-k);var n=d.left;n+l>g+j&&(n=d.left+f-l),this.picker.css({top:m,left:n})},show:function(b){return!this.isDisabled()&&(this.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"),this.reposition(),a(window).on("resize.colorpicker",a.proxy(this.reposition,this)),!this.hasInput()&&b&&b.stopPropagation&&b.preventDefault&&(b.stopPropagation(),b.preventDefault()),this.options.inline===!1&&a(window.document).on({"mousedown.colorpicker":a.proxy(this.hide,this)}),this.element.addClass("active"),void this.element.trigger({type:"showPicker",color:this.color}))},hide:function(){this.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"),a(window).off("resize.colorpicker",this.reposition),a(document).off({"mousedown.colorpicker":this.hide}),this.update(),this.element.removeClass("active"),this.element.trigger({type:"hidePicker",color:this.color})},updateData:function(a){return a=a||this.color.toString(this.format),this.element.data("color",a),a},updateInput:function(){var a=this.color.toString(this.inputFormat||this.format);return this.input!==!1&&this.input.prop("value",a),a},updatePicker:function(a){void 0!==a&&(this.color=new b(a));var c=this.options.sliders,d=this.picker.find("i");if(0!==d.length)return d.eq(1).css("top",c.hue.maxTop*(1-this.color.value.h)).end().eq(2).css("top",c.alpha.maxTop*(1-this.color.value.a)),d.eq(0).css({top:c.saturation.maxTop-this.color.value.b*c.saturation.maxTop,left:this.color.value.s*c.saturation.maxLeft}),this.picker.find(".colorpicker-saturation").css("backgroundColor",this.color.toHex(this.color.value.h,1,1,1)),this.picker.find(".colorpicker-alpha").css("backgroundColor",this.color.toHex()),this.picker.find(".colorpicker-color, .colorpicker-color div").css("backgroundColor",this.color.toString(this.format)),a},updateComponent:function(a){if(a=a||this.color.toString(this.format),this.component!==!1){var b=this.component.find("i").eq(0);b.length>0?b.css({backgroundColor:a}):this.component.css({backgroundColor:a})}return a},update:function(a){var b=this.updateComponent();return this.getValue(!1)===!1&&a!==!0||(this.updateInput(b),this.updateData(b)),this.updatePicker(),b},setValue:function(a){this.color=new b(a),this.update(),this.element.trigger({type:"changeColor",color:this.color,value:a})},getValue:function(a){a=void 0===a?"#000000":a;var b;return b=this.hasInput()?this.input.val():this.element.data("color"),void 0!==b&&""!==b&&null!==b||(b=a),b},hasInput:function(){return this.input!==!1},isDisabled:function(){return!!this.hasInput()&&this.input.prop("disabled")===!0},disable:function(){return!!this.hasInput()&&(this.input.prop("disabled",!0),!0)},enable:function(){return!!this.hasInput()&&(this.input.prop("disabled",!1),!0)},currentSlider:null,mousePointer:{left:0,top:0},mousedown:function(b){if(b.stopPropagation(),b.target!=this.input[0]){b.preventDefault();var c=a(b.target),d=c.closest("div"),e=this.options.sliders;if(!d.is(".colorpicker")){if(d.is(".colorpicker-saturation"))this.currentSlider=a.extend({},e.saturation);else if(d.is(".colorpicker-hue"))this.currentSlider=a.extend({},e.hue);else{if(!d.is(".colorpicker-alpha"))return!1;this.currentSlider=a.extend({},e.alpha)}var f=d.offset();this.currentSlider.guide=d.find("i")[0].style,this.currentSlider.left=b.pageX-f.left,this.currentSlider.top=b.pageY-f.top,this.mousePointer={left:b.pageX,top:b.pageY},a(document).on({"mousemove.colorpicker":a.proxy(this.mousemove,this),"mouseup.colorpicker":a.proxy(this.mouseup,this)}).trigger("mousemove")}return!1}},mousemove:function(a){a.stopPropagation(),a.preventDefault();var b=Math.max(0,Math.min(this.currentSlider.maxLeft,this.currentSlider.left+((a.pageX||this.mousePointer.left)-this.mousePointer.left))),c=Math.max(0,Math.min(this.currentSlider.maxTop,this.currentSlider.top+((a.pageY||this.mousePointer.top)-this.mousePointer.top)));return this.currentSlider.guide.left=b+"px",this.currentSlider.guide.top=c+"px",this.currentSlider.callLeft&&this.color[this.currentSlider.callLeft].call(this.color,b/100),this.currentSlider.callTop&&this.color[this.currentSlider.callTop].call(this.color,c/100),this.update(!0),this.element.trigger({type:"changeColor",color:this.color}),!1},mouseup:function(b){return b.stopPropagation(),b.preventDefault(),a(document).off({"mousemove.colorpicker":this.mousemove,"mouseup.colorpicker":this.mouseup}),!1},keyup:function(a){var c;38===a.keyCode?(this.color.value.a<1&&(this.color.value.a=Math.round(100*(this.color.value.a+.01))/100),this.update(!0)):40===a.keyCode?(this.color.value.a>0&&(this.color.value.a=Math.round(100*(this.color.value.a-.01))/100),this.update(!0)):(c=this.input.val(),this.color=new b(c),this.getValue(!1)!==!1&&(this.updateData(),this.updateComponent(),this.updatePicker())),this.element.trigger({type:"changeColor",color:this.color,value:c})}},a.colorpicker=d,a.fn.colorpicker=function(b){var c=arguments;return this.each(function(){var e=a(this),f=e.data("colorpicker"),g="object"==typeof b?b:{};f||"string"==typeof b?f&&"string"==typeof b&&f[b].apply(f,Array.prototype.slice.call(c,1)):e.data("colorpicker",new d(this,g))})},a.fn.colorpicker.constructor=d}),angular.module("qstrap.colorpicker",[]).directive("qstrap.colorPicker",["qstrap.swatchService",function(a){"use strict";var b={getLocalStorage:function(){return"localStorage"in window&&window.localStorage},getRecentSwatches:function(){var a=[],b=this.getLocalStorage();return b&&"function"==typeof b.getItem&&(a=angular.fromJson(b.getItem("qstrap.recentSwatches")||"[]")),a},setRecentSwatches:function(a){var b=this.getLocalStorage();b&&"function"==typeof b.setItem&&b.setItem("qstrap.recentSwatches",angular.toJson(a))},addRecentSwatch:function(a){if(a&&"string"==typeof a){a=a.toUpperCase();var b=this.getRecentSwatches();if(!(b.indexOf(a)>=0)){for(b.push(a);b.length>20;)b.shift();this.setRecentSwatches(b)}}},getGraphSwatches:function(b){for(var c=angular.copy(b||a.get()),d=this.getRecentSwatches(),e=0;e<d.length&&c.length<35;e++)c.indexOf(d[e])===-1&&c.push(d[e]);return c.length>35&&(c.length=35),c}},c=1;return{scope:{color:"=",onChange:"&?",afterChange:"&?",onOpen:"&?",swatches:"=?",defaultColor:"@",format:"@",transparentColor:"@"},link:function(a,d,e){var f,g=e.hasOwnProperty("transparentColor");d.on("mousedown",function(e){if(e.which===c&&(d.colorpicker({defaultColor:a.defaultColor,format:a.format||"hex",inputFormat:"hex",color:a.color||a.defaultColor||"#000000",showInput:!0,swatches:b.getGraphSwatches(a.swatches)}).on("changeColor",function(b){f&&clearTimeout(f),f=setTimeout(function(){if("rgb"==a.format||"rgba"==a.format){var c=b.color.toRGB();c.a<.05&&g?a.color=a.transparentColor:a.color="rgba("+c.r+","+c.g+","+c.b+","+c.a+")"}else a.color=b.color.toHex();a.onChange&&a.onChange({$value:a.color}),a.$apply(),a.afterChange&&a.afterChange({$value:a.color})},100)}).on("hidePicker",function(a){var c=a.color.toHex();b.addRecentSwatch(c),d.colorpicker("destroy")}),a.onOpen)){d.data("colorpicker").picker;a.onOpen({})}})}}}]),angular.module("qstrap.colorpicker").factory("qstrap.swatchService",[function(){"use strict";function a(a){if(a=angular.copy(a),a&&a.length)for(var b=0;b<a.length;b++)a[b]=a[b].toUpperCase();c=a}function b(){return angular.copy(c||d)}var c,d=["#2179F9","#1AA884","#5114C6","#EE6868","#DC267F","#5899DA","#BA69B9","#002B7E","#9D0031","#13A4B4","#007468","#D7663F","#6C8893","#570408"];return{set:a,get:b}}]),angular.module("qstrap.inlineInput",["qstrap.util"]).directive("qstrap.inlineInput",["$document","$window","qstrap.util",function(a,b,c){"use strict";return{restrict:"A",scope:{validate:"&",onChange:"&",afterChange:"&",defaultValue:"@"},require:"?ngModel",link:function(d,e,f,g){function h(){var c=a[0].createRange();c.selectNodeContents(e[0]);var d=b.getSelection();d.removeAllRanges(),d.addRange(c)}function i(a){"number"===f.inputType&&(a=parseFloat(a)||0),g.$viewValue!=a&&(f.hasOwnProperty("onChange")&&d.onChange({$value:a}),g.$setViewValue(a),f.hasOwnProperty("afterChange")&&d.afterChange({$value:a}))}function j(){var a=l();i(a)}function k(){var a=l();""===a&&(f.hasOwnProperty("defaultValue")&&angular.isDefined(f.defaultValue)?a=f.defaultValue:"number"===f.inputType&&(a="0"),e.text(a)),i(a)}function l(){var a=e.text();return"<br>"===a&&(a=""),a}g&&(e.addClass("q-inline-input"),e.attr("contenteditable",!0),e.attr("tabindex",0),g.$render=function(){e.text(g.$viewValue)},e.on("keydown",function(a){a.which!==c.keys.ENTER&&a.which!==c.keys.ESCAPE||(a.stopPropagation(),a.preventDefault(),e.hasClass("editMode")&&(e.toggleClass("editMode"),e.attr("contenteditable",!1)))}),e.on("focus",function(){e.toggleClass("editMode"),e.attr("contenteditable",!0),d.$evalAsync(h)}),e.on("keyup change",function(){return d.$evalAsync(j)}),e.on("focusout",function(){return e.hasClass("editMode")&&(e.toggleClass("editMode"),e.attr("contenteditable",!1),b.getSelection().removeAllRanges()),d.$evalAsync(k)}),d.$on("$destroy",function(){e&&(e.off(),e.remove(),e=null)}))}}}]),function(a){"use strict";function b(a){return["$timeout","$parse",function(b,d){return{link:function(e,f,g){if(c||(f.wrap('<label class="'+a+'"></label>'),f.after("<i><i><i></i></i></i>")),g.ngModel&&(g.onChange||g.afterChange)){var h,i;e.$watch(g.ngModel,function(a,c){c!==a&&(g.onChange&&(h||(h=d(g.onChange)),h(e,{$value:a})),g.afterChange&&(i||(i=d(g.afterChange)),b(function(){i(e,{$value:a})})))})}}}}]}var c=window.navigator.userAgent.indexOf("MSIE 8")>0;a.directive("qstrap.checkbox",b("qcheckbox")),a.directive("qstrap.radio",b("qradio"))}(angular.module("qstrap.inputs",[])),angular.module("qstrap.placeholder",[]).directive("placeholder",["$document",function(a){"use strict";return"placeholder"in a[0].createElement("input")?{}:{restrict:"A",require:"?ngModel",link:function(a,b,c,d){function e(){c.placeholder&&(b.val(c.placeholder),b.addClass("placeholder"),j&&b.attr("type","text"))}function f(){b.val(""),b.removeClass("placeholder"),j&&b.attr("type","password")}function g(){!h&&angular.isDefined(c.placeholder)&&(h=c.$observe("placeholder",function(){""===i&&e()}))}var h,i="",j="password"===c.type;b.on("focus",function(){""===i&&f()}),b.on("blur",function(){""===b.val()&&e()}),c.ngModel&&d?(d.$formatters.unshift(function(a){return a?a:(e(),i="",c.placeholder)}),a.$watch(c.ngModel,function(a){(!a||""===i&&a===c.placeholder)&&(a=""),i=a,g()})):(i=b.val(),g())}}}]),function(a,b){"use strict";var c=[],d="left",e="right";a.factory("qstrap.$menu",["$q","$rootScope","$timeout","$filter","qstrap.util",function(a,f,g,h,i){function j(a,c,d){function e(d){d.keyCode===i.keys.DOWN_ARROW?(d.preventDefault(),j=k.index(document.activeElement),k.get(++j).focus(),b(a).find(".menu-items").attr("aria-multiselectable")&&b(a).find("ul").attr("aria-activedescendant",k.get(j).id)):d.keyCode===i.keys.UP_ARROW?(d.preventDefault(),j=k.index(document.activeElement),k.get(--j).focus(),b(a).find(".menu-items").attr("aria-multiselectable")&&b(a).find("ul").attr("aria-activedescendant",k.get(j).id)):d.keyCode!==i.keys.ESCAPE&&d.keyCode!==i.keys.TAB||(d.preventDefault(),c())}function f(a){a.keyCode===i.keys.UP_ARROW&&(a.stopPropagation(),a.preventDefault(),m.focus())}function g(a){a.keyCode===i.keys.DOWN_ARROW&&(a.stopPropagation(),a.preventDefault(),l.focus())}function h(){a.removeEventListener("keydown",e),l&&l.removeEventListener("keydown",f),m&&m.removeEventListener("keydown",g)}var j,k=b(a).find(i.focusableSelector),l=k.get(0),m=k.get(k.length-1);return d=i.defaultFor(d,!0),l&&d&&l.focus(),a.addEventListener("keydown",e),l&&l.addEventListener("keydown",f),m&&m.addEventListener("keydown",g),h}var k,l={watchMouseTravel:function(a,c,d){if(c&&d){var e=b(document),f=(a.getMenuOffset(),
c+e.scrollLeft()),g=d+e.scrollTop();l.watching={menu:a,v1:{x:f,y:g}},l.updateWatcherMenuInfo(a)}},updateWatcherMenuInfo:function(a){if(l.watching&&a){var b=a.getMenuOffset(),c=a.getIsFlyingLeft()?b.left+b.width:b.left,d=b.top,e=b.top+b.height;l.watching.v2={x:c,y:e},l.watching.v3={x:c,y:d}}},isTravelingToSubmenu:function(a,c){l.watchingTimeout&&(g.cancel(l.watchingTimeout),delete l.watchingTimeout);var d=l.watching;if(d&&d.menu&&!d.menu.visited&&d.menu==m.reg[m.reg.length-1]){var e=b(document),f={x:a+e.scrollLeft(),y:c+e.scrollTop()};if(l.isPointInTriangle(f,d.v1,d.v2,d.v3))return l.watchingTimeout=g(function(){var a,b;l.watching&&l.watching.v1&&(a=l.watching.v1.x,b=l.watching.v1.y),delete l.watching,l.unsuppressCurrentHover(a,b)},1e3),d.v1=f,!0}return delete l.watching,!1},cross:function(a,b,c){return(a.x-c.x)*(b.y-c.y)-(b.x-c.x)*(a.y-c.y)},isPointInTriangle:function(a,b,c,d){var e=l.cross(a,b,c)<0,f=l.cross(a,c,d)<0,g=l.cross(a,d,b)<0;return e==f&&f==g},registerSuppressed:function(a){l.activeSuppressed=a},unregisterSuppressed:function(){l.activeSuppressed=null},unsuppressCurrentHover:function(a,b){l.activeSuppressed&&(p(l.activeSuppressed,a,b),l.unregisterSuppressed())},registerHover:function(a){m.activeHover=a,a&&b(a).addClass("hoverable")},clearExistingHover:function(){m.activeHover&&(b(m.activeHover).removeClass("hoverable"),m.activeHover=null)}},m={reg:c,register:function(a){m.reg.push(a),m.listen()},closeAllMenus:function(a){for(var b=l.watching&&l.watching.menu;m.reg.length;){var c=m.reg.pop();if(b==c&&delete l.watching,c==a){m.reg.push(c),c._searchInputDom&&c._searchInputDom.focus();break}c.close()}m.reg.length||(m.stopListening(),l.unregisterSuppressed())},listen:function(){m.listening||(m.listening=!0,b(document).on("mouseup touchend",m.closeAllMenus))},stopListening:function(){m.listening=!1,b(document).off("mouseup touchend",m.closeAllMenus)}},n=function(a){a.preventDefault(),a.stopPropagation()},o=function(a){var b=this;p(b,a.clientX,a.clientY)},p=function(a,b,c){if(l.clearExistingHover(),l.unregisterSuppressed(),l.isTravelingToSubmenu(b,c))return void l.registerSuppressed(a);l.registerHover(a);var d=s(a),e=d.menu,f=d.submenu;e.visited=!0,m.closeAllMenus(e),f&&(f.show(),l.watchMouseTravel(f,b,c))},q=function(a,c){a.stopImmediatePropagation(),a.preventDefault();var d,e=c,f=s(e),g=f.menu,h=f.value,i=f.item,j=i.action,l=i.label||i,n=!1;if(g._menuDef.selectMenu&&!i.notSelectable){for(b(g._menuItems).children("ul").children("li.checked").removeClass("checked"),d=0;d<g._allItems.length;++d)g._allItems[d].selected&&(g._allItems[d].selected=!1);e.className+=" checked",i.selected=!0}else if(g._menuDef.multiSelectMenu&&!i.notSelectable){n=!0,b(g._menuItems).children("ul").children("li.checked").each(function(){var a=s(this),c=a.item||{};c!==i&&(c.exclusive||i.exclusive)&&(b(this).removeClass("checked"),b(this).attr("aria-selected",!1))}),b(e).toggleClass("checked"),g._menuDef.multiSelectMenu&&b(e).attr("aria-selected",!i.selected),i.selected=!i.selected;var o=[],p=[],q=[];for(d=0;d<g._allItems.length;++d){var t=g._allItems[d];if(t.selected)if(t!==i&&(t.exclusive||i.exclusive))t.selected=!1;else{var u=void 0===t.value?d:t.value;o.push(u),p.push(t),q.push(t.label||t)}}l=q.length>6?q.length+" selected":q.join(", "),i=p,h=o}else i.hasOwnProperty("selected")&&(i.selected=!i.selected,b(e).toggleClass("checked"),g._menuDef.multiSelectMenu&&b(e).attr("aria-selected",i.selected));g._menuDef.updateButton&&r(g,l),(j||g._menuDef.action||b.noop)(h,i,a),n||(b(e).fadeOut(50).fadeIn(100,m.closeAllMenus),"function"==typeof k&&k(),g._element.focus())},r=function(a,c){var d=a._menuDef.updateButton,e=b("<span>");d===!0&&(d=a._element.contents().filter(function(){return 3==this.nodeType})),e.append(x(c)),d.replaceWith(e),a._menuDef.updateButton=e},s=function(a){return b(a).data("q.qmenu.itemInfo")||{}},t=function(a,c){b(a).data("q.qmenu.itemInfo",c)},u=function(a,c){if(!c)return a;var d=a instanceof Array,e=d?[]:{};for(var f in a)if(a.hasOwnProperty(f)){var g=a[f],h=b("<div>").append(x(g.label||g.domNode||g)).text()||"";h.toLowerCase().indexOf(c)>-1&&(d?e.push(g):e[f]=g)}return e},v=function(a,b,c){var d=(b-1)*c,e=d+c;if(a instanceof Array)return a.slice(d,e);var f={},g=0;for(var h in a)if(a.hasOwnProperty(h)){var i=a[h];g>=d&&g<e&&(f[h]=i),g++}return f},w=function(a){if(a instanceof Array)return a.length;var b=0;for(var c in a)b+=a.hasOwnProperty(c);return b},x=function(a){return"string"==typeof a?document.createTextNode(a):a},y=function(a,b){var c;return function(){var d=this,e=arguments,f=function(){return c=null,a.apply(d,e)};return g.cancel(c),c=g(f,b)}},z=function(a,c,d,e){var g=this;if(this.$rootScope=f,this._element=a,this.setMenuDef(c),this._parentMenu=d,this.options=e,this._menuDef.isSubmenu)this.depth=this._parentMenu.depth+1;else{var h=b.proxy(this.toggle,this);this._element[0].showMenu=function(){g.show()},this._element[0].closeMenu=m.closeAllMenus,this._element.on(this._menuDef.showEvent||"mousedown touchstart",h),this._element[0].addEventListener("keydown",function(a){a.keyCode!==i.keys.ENTER&&a.keyCode!==i.keys.SPACE&&a.keyCode!==i.keys.DOWN_ARROW||h(a)}),this.depth=0}this.shouldShowPagination()&&(this._page=1,this._totalItems=0),this._parentMenu&&(this.preferredDirection=this._parentMenu.getPreferredDirection()),this._menuDef.preferredDirection&&(this.preferredDirection=this._menuDef.preferredDirection)};return z.prototype={isFlyingLeft:!1,toggle:function(a){var b=this._menuDef.disabled;"function"==typeof b&&(b=b()),b||(this._menuDom?this.close(a):this.show(a))},show:function(a){angular.extend(this._menuDef,this.options||{}),a&&a.preventDefault(),this._menuDef.isSubmenu||(m.closeAllMenus(),this._element.on("mouseup touchstart touchend",n)),m.register(this),this.shouldShowPagination()&&(this._page=1),b("body").append(this.buildMenu()),"function"==typeof this._menuDef.onOpen&&this._menuDef.onOpen(),this.positionMenu(),this._element.addClass("active"),this._searchInputDom&&this._searchInputDom.focus()},setMenuDef:function(a){a=a||{},"function"==typeof a.searchCallback&&(a.searchable=!0),a.localizedText=a.localizedText||{},this._menuDef=a},buildMenu:function(){return this._menuDom=b("<div>",{"class":"qmenu dropdown-menu "+(this._menuDef.className||"")+(this._menuDef.isSubmenu?" qsubmenu":"")}),(this._menuDef.searchable||this._menuDef.filterable)&&this._menuDom.append(this.buildSearchBox()).addClass("search-menu"),this._menuDom.append(this.buildMenuItems()),this.shouldShowPagination()&&this._menuDom.append(this.buildPaginationControls()),this._menuDom.on("mouseup touchend",n),this._menuDom.on("mousedown touchstart",function(a){a.stopPropagation()}),this._menuDom},buildMenuItems:function(){var a=b("<div>",{"class":"menu-items",role:"listbox"});return this._menuDef.multiSelectMenu&&a.attr({"aria-multiselectable":"true",tabindex:"0",id:"sub"+this.depth}),this._menuItems=a,this.updateMenuItems(this.getMenuItems()),this._menuItems},updateMenuItems:function(c,d){var e=this._menuItems,f=this,i=!1,l=g(function(){i||(e.empty(),e.append(b('<li><div class="waiter-spinner-sm"></li>')),f.updatePaginationControls(!0),f.positionMenu(d))},10),n=function(){i=!0,g.cancel(l)};return a.when(c).then(function(a){function c(){m.closeAllMenus(),f._element.focus()}n(),e.empty();var g=b("<ul role='group'>"),i=0;for(var l in a)if(a.hasOwnProperty(l)){if(a[l].hasOwnProperty("header")){g.children("li").length&&e.append(g);var o=f.buildMenuItem(a[l],l);g=b("<ul role='group' aria-labelledby="+o[0].id+">"),g.append(o)}else g.append(f.buildMenuItem(a[l],l));a[l].divider||a[l].domNode||a[l].header||i++}if(l||0===l||g.append(f.buildMenuItem({header:f._menuDef.localizedText.emptyText||h("qstrapTranslate")("NO_ITEMS_TO_DISPLAY")})),e.append(g),f._menuDef.searchable){var p=h("qstrapTranslate"),q=1===i?p("ONE_SEARCH_RESULT"):p("NUM_SEARCH_RESULTS",{numResults:i});b("#search-results-count").attr("aria-label",q)}f.shouldShowPagination()&&f.updatePaginationControls(),f.positionMenu(d),"function"==typeof k&&k(),f._menuDom&&(k=j(f._menuDom.get(0),c,f._menuDef.shouldSetFocusOnFirstItem))})["catch"](function(a){n(),e.empty(),e.append(f.buildMenuItem({header:f._menuDef.localizedText.emptyText||h("qstrapTranslate")("NO_ITEMS_TO_DISPLAY")}))})},getMenuItems:function(b){var c=this._menuDef.items,d=this._menuDef.searchCallback,e=this._menuDef.pagination||{},f=e.limit,g=this._page,h=(this._page-1)*f,i=b&&d||c||d;this._menuDef.filterable&&this._allItems&&(i=this._allItems),"function"==typeof i&&i===d?i=i(b,f,h):"function"==typeof i&&(i=i());var j=this;return a.when(i||[]).then(function(a){a=a||[];var c=a.items||a;return j._allItems=c,b&&!d&&(c=u(c,b)),j._totalItems=a.total||w(c),g&&f&&!a.total&&(c=v(c,g,f)),c})},buildMenuItem:function(a,c){var d=b("<li>");if(d.attr({role:"option",tabindex:"0",id:"sub"+this.depth+"_"+c}),a.className&&d.addClass(a.className),a.divider)d.addClass("divider"),d.attr("aria-hidden","true"),d.removeAttr("tabindex role aria-selected");else if(a.domNode||a.header)d.append(x(a.label)||a.domNode||a.header),d.addClass("dom-node"),a.header&&(d.addClass("dropdown-header"),d.attr({role:"presentation"}),d.removeAttr("tabindex"));else{var e=x(a.label||a),f=a.submenu,g=this._menuDef.selectMenu||this._menuDef.multiSelectMenu||a.hasOwnProperty("selected")?b("<i>",{"class":"checkmark icon icon-check-sm"}):"",h=a.icon?b("<i>",{"class":"icon "+a.icon}):"",j=f?b('<b class="icon icon-angle-right-sm">'):"";a.replaceCheck&&a.icon&&(d.addClass("no-check"),d.attr("aria-selected",void 0),g="");var k=b("<a>");k.append(g,h,e,j),d.append(k);var l={menu:this,item:a,value:void 0!==a.value?a.value:c};f&&("function"==typeof f&&(f=f(a)),f.isSubmenu=!0,f.action||(f.action=a.action||this._menuDef.action),void 0===f.localizedText&&(f.localizedText=a.localizedText||this._menuDef.localizedText),d.attr("aria-selected",void 0),l.submenu=new z(d,f,this)),t(d,l),a.selected&&d.addClass("checked"),this._menuDef.multiSelectMenu&&d.attr("aria-selected",a.selected);var m=a.disabled;"function"==typeof m&&(m=m()),m&&(d.addClass("disabled"),d.attr("aria-disabled",!0)),d.on("mouseenter touchstart",o),m||f&&!a.selectable||d.on("mouseup touchend keydown",function(a){"mouseup"!==a.type&&"touchend"!==a.type&&("keydown"!==a.type||a.keyCode!==i.keys.ENTER&&a.keyCode!==i.keys.SPACE)||q(a,b(this))})}return d},buildSearchBox:function(){var a=this._menuDef.localizedText.searchText||h("qstrapTranslate")("SEARCH_ELLIPSIS");this._searchInputDom=b("<input>",{"class":"form-control input-sm",placeholder:a}),this._menuDef.localizedText.searchText&&this._searchInputDom.attr("size",a.length);var c=b.proxy(this.searchMenu,this);this._menuDef.searchCallback&&(c=y(c,300)),this._searchInputDom.keyup(c),this.searchBox=b("<div>",{"class":"search-box"}).append(b("<i>",{"class":"icon icon-search"}),this._searchInputDom,b("<div>",{id:"search-results-count","aria-live":"polite"}));var d=this;return this.searchBox.on("mouseenter",function(){m.closeAllMenus(d)}),this.searchBox},getPreferredDirection:function(){return this.preferredDirection},getPreferredLeft:function(){return this.preferredDirection===d},positionMenu:function(a){if(this._menuDom){var c,f,g,h,i,j,k=this._menuDom,m=b(window).width(),n=b(window).height(),o=b(document).scrollTop(),p=b(document).scrollLeft(),q=this._element.offset(),r=this._element.outerWidth(),s=this._element.outerHeight(),t=5,u=o+t,v=n-2*t,w=o+(n-t),x=!1;if(!this.preferredDirection){var y=this._element.offset().left>b(window).width()/2;this.preferredDirection=y?d:e}if(k.removeClass("positioned scroll-hidden").css({height:""}),a||k.css({width:"",top:0,left:0}),i=k.height(),c=q.left,g=k.outerWidth()+t,c=q.left+r,h=m-(c+p),g>h||this.getPreferredLeft()){var z=q.left-p;z>g&&(c=q.left-g,this.isFlyingLeft=!0)}a||k.css({width:g+"px"});var A=this._menuDef.maxHeight?Math.min(this._menuDef.maxHeight,i):i;if(j=A,f=q.top,f+j>w){var B=f+j-w;f-=B}if(f<u&&(f=u),j>v)j=v;else if(!this._menuDef.isSubmenu){var C=!1;A<v-(q.top-o+s)?(f=q.top+s,C=!0):A<q.top-o&&(f=q.top-A,C=!0),C&&(this.getPreferredLeft()?(x=!0,c=q.left+r-g):c=q.left)}var D={height:j+"px",maxHeight:"99%"},E=document.body.scrollWidth-g-1;c=Math.min(E,c),a||b.extend(D,{top:Math.floor(f)+"px",left:Math.floor(c)+"px",width:g+"px"}),k.addClass("positioned").css(D);var F=this._menuItems[0];if(F.scrollHeight>F.offsetHeight){if(F.clientWidth===F.offsetWidth){k.addClass("scroll-hidden");k[0].offsetHeight}var G=b(F).outerWidth(!0)-F.clientWidth;g+=G,x&&(c-=G),k.css({left:c+"px",width:g+"px"})}l.updateWatcherMenuInfo(this)}},close:function(){this._element.removeClass("active"),this._element.off("mouseup touchstart",n),this._menuDom&&this._menuDom.detach(),delete this._menuDom,delete this._pagination,this.visited=!1,"function"==typeof this._menuDef.onClose&&this._menuDef.onClose(),"function"==typeof k&&k()},getMenuOffset:function(){var a=this._menuDom.offset();return a.height=this._menuDom.outerHeight(),a.width=this._menuDom.outerWidth(),a},getIsFlyingLeft:function(){return this.isFlyingLeft},searchMenu:function(a){this._menuDef.pagination&&a.target.value&&(this._page=1);var b=(a.target.value||"").toLowerCase(),c=this.getMenuItems(b);this.updateMenuItems(c,!0)},buildPaginationControls:function(a){var c=this._menuDef.pagination.limit,d=this._totalItems,e=Math.floor(d/c)+(d%c>0?1:0);if(this._menuDom.removeClass("paginated-menu"),!e||d<=c||a)return this._pagination=b("<div>");this._menuDom.addClass("paginated-menu");var f=this._page+" of "+e;this._menuDef.localizedText.paginationText&&(f=this._menuDef.localizedText.paginationText,f=f.replace("%1",this._page).replace("%2",e));var g=b('<div class="page-text">'+f+"</div>"),h=b('<button class="btn btn-sm btn-hover left-btn"><span class="icon btn-icon-angle-left"></span></button>"'),i=b('<button class="btn btn-sm btn-hover right-btn"><span class="icon btn-icon-angle-right"></span></button>"');return this._page>1?h.on("click",b.proxy(this.changePage,this,-1)):h.attr("disabled","disabled"),this._page<e?i.on("click",b.proxy(this.changePage,this,1)):i.attr("disabled",!0),this._pagination=b("<div>",{"class":"pagination no-select"}).append(g,h,i)},updatePaginationControls:function(a){var b=this._pagination;return b&&b.replaceWith(this.buildPaginationControls(a))},changePage:function(a){m.closeAllMenus(this),this._page+=a,this.updatePaginationControls();var b=this._searchInputDom&&this._searchInputDom.val().toLowerCase()||null,c=this.getMenuItems(b);this.updateMenuItems(c);var d=this;g(function(){function a(){m.closeAllMenus(),d._element.focus()}"function"==typeof k&&k(),k=j(d._menuDom.get(0),a,d._menuDef.shouldSetFocusOnFirstItem)})},shouldShowPagination:function(){return!!this._menuDef.pagination}},z}]),a.directive("qstrap.menu",["qstrap.$menu",function(a){return{scope:{items:"&?",action:"&",selectMenu:"@?",multiSelectMenu:"@?",className:"@?",updateButton:"@?",searchable:"@?",preferredDirection:"@",maxHeight:"@?",filterable:"@?",pagination:"=",_searchCallback:"&searchCallback",localizedText:"=?",onOpen:"&?",onClose:"&?",afterChange:"&?",showEvent:"@?",disabled:"=ngDisabled"},link:function(b,c,d){d.items||delete b.items,d.searchCallback&&(b.searchCallback=function(a,c,d){return b._searchCallback({$search:a,$limit:c,$offset:d})});var e=b.action;b.action=function(a,c,d){e({$value:a,$item:c,$event:d}),b.$apply(),b.afterChange&&b.afterChange({$value:a,$item:c,$event:d})};var f=new a(c,b);c.data("q.qmenu",f),b.$watch("preferredDirection",function(a){a&&(f.preferredDirection=a)}),b.getMenu=function(){return f}}}}]);var f=angular.injector(["ng","qstrap.menu","qstrap.translate"]).get("qstrap.$menu"),g=b.fn.qmenu;b.fn.qmenu=function(a){return this.each(function(){var c=b(this);c.data("q.qmenu")||c.data("q.qmenu",new f(c,a))})},b.fn.qmenu.Constructor=f,b.fn.qmenu.noConflict=function(){return b.fn.qmenu=g,this}}(angular.module("qstrap.menu",["qstrap.util"]),jQuery),function(a){"use strict";a.directive("qstrap.selectMenu",["qstrap.$menu",function(a){return{require:"ngModel",scope:{items:"&",onChange:"&",afterChange:"&",options:"&",disabled:"=ngDisabled"},link:function(b,c,d,e){function f(a){var b=[],c=e.$modelValue;i&&!c&&(c=[]);for(var d in a)if(a.hasOwnProperty(d)){var f=a[d];"string"==typeof f&&(f={label:f}),f.hasOwnProperty("value")||(f.value=d),(i&&h(f)&&c.indexOf(f.value)>=0||f.value==c)&&(f.selected=!0),f.submenu&&f.submenu.items&&(f.submenu.items=g(f.submenu.items)),b.push(f)}return b}function g(a){return function(){var b=a;return"function"==typeof b&&(b=b()),"function"==typeof b.then?b.then(f):f(b)}}function h(a){return!(a.divider||a.header||a.domNode)}var i=!!c.attr("multi-select"),j={selectMenu:!0,items:g(b.items),action:function(a,c,d){b.onChange&&b.onChange({$value:a,$item:c,$event:d}),e.$setViewValue(a),b.$apply(),b.afterChange&&b.afterChange({$value:a,$item:c,$event:d})}};i&&(delete j.selectMenu,j.multiSelectMenu=!0),j.disabled=function(){return b.disabled},c.data("q.qmenu",new a(c,j,null,b.options()))}}}])}(angular.module("qstrap.selectMenu",["qstrap.menu"])),function(b){"use strict";b.factory("qstrap.modal",["$templateCache","$compile","$rootScope","$window","$timeout","$q","$http","qstrap.util",function(b,c,d,e,f,g,h,i){function j(a,d){var e;return a.templateUrl?e=k(b.get("qstrap.modal.template"),a):(e=angular.element(b.get("qstrap.modal.html")),l(e,a),m(e,a),n(e,a)),g.when(e).then(function(b){return a.controller&&(b=angular.element(b).attr("ng-controller",a.controller)),b=c(b)(d),a.className&&b.addClass(a.className),a.ariaLabelledBy&&b.find(".modal-dialog").attr("aria-labelledby",a.ariaLabelledBy),b})}function k(a,b){return q(b.templateUrl).then(function(b){angular.isObject(b)&&(b=b.data),b=String.prototype.trim.apply(b);var c=angular.element(a);return c.find(".modal-content").html(b),c[0].outerHTML})}function l(a,b){var c=a.find(".modal-header");b.headerTemplate?c.html("<div ng-include=\"'"+b.headerTemplate+"'\"></div>"):b.header?c.html(b.header):b.title&&c.html('<h3 class="modal-title">'+b.title+"</h3>")}function m(a,b){var c=a.find(".modal-body");b.bodyTemplate||b.contentTemplate?c.html("<div ng-include=\"'"+(b.bodyTemplate||b.contentTemplate)+"'\"></div>"):(b.body||b.content)&&c.html(b.body||b.content)}function n(a,b){var c=a.find(".modal-footer");b.footerTemplate?c.html("<div ng-include=\"'"+b.footerTemplate+"'\"></div>"):b.footer?c.html(b.footer):b.buttons&&c.html(b.buttons.join(""))}function o(b){var c=b.find(".modal-body"),d=140;c.css({"max-width":.85*e.innerWidth+"px","max-height":.85*e.innerHeight-d+"px"});var f=a("body");f[0].scrollHeight>f[0].clientHeight&&f.css("margin-right",p()+"px")}function p(){if(null===s){var b=a("<div>").css({width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"});a("body").append(b),s=b[0].offsetWidth-b[0].clientWidth,b.remove()}return s}function q(a){return t[a]?t[a]:(t[a]=g.when(b.get(a)||h.get(a)),t[a].then(function(c){return angular.isObject(c)?(b.put(a,c.data),c.data):c}))}b.put("qstrap.modal.html",'<div class="modal"><div class="modal-dialog" role="dialog" aria-modal="true"><div class="modal-content scale"><div class="modal-header"><h4 class="modal-title"></h4></div><div class="modal-body"></div><div class="modal-footer"><button class="btn btn-hover" ng-click="close()">{{"CLOSE" | qstrapTranslate}}</button></div></div></div><div class="modal-backdrop"></div></div>'),b.put("qstrap.modal.template",'<div class="modal"><div class="modal-dialog" role="dialog" aria-modal="true"><div class="modal-content scale"></div></div><div class="modal-backdrop"></div></div>');var r=function(b){this.definition=b,this.scope=(this.definition.scope||d).$new(),delete this.definition.scope,this.scope.close=a.proxy(this.close,this);var c=this;this._resize=function(){c.resize.call(c)},this.definition.show&&this.show()};r.prototype={show:function(){var b=this;return b.modalDestroyed?void console.error("Attempting to show modal after it was destroyed."):j(this.definition,this.scope).then(function(c){b.modal=c,a("body").append(b.modal).addClass("modal-visible"),o(b.modal),b.modal.addClass("modal-show"),b.focusedElBeforeOpen=document.activeElement,b.containerElement=b.modal.get(0).firstElementChild,b.containerElement.setAttribute("tabindex",0),a(e).on("resize",b._resize),f(function(){b.handleFocusTrap(b.containerElement)})})},handleFocusTrap:function(a){function b(b){var d=window.document.activeElement,e=a.querySelectorAll(i.focusableSelector);if(b.keyCode===i.keys.ESCAPE&&c.close(),b.keyCode===i.keys.TAB){var f=e[0],g=e[e.length-1];b.shiftKey?d===f&&(g.focus(),b.preventDefault()):d===g&&(f.focus(),b.preventDefault())}}var c=this;a.addEventListener("keydown",b),f(function(){var b=a.querySelectorAll(i.focusableSelector);b.length?b[0].focus():a.focus()})},close:function(b){if(this.modal){this.modal.removeClass("modal-show");var c=this,d=a("body");return f(function(){c.definition.destroyScopeOnClose&&(c.modalDestroyed=!0,c.scope.$destroy()),c.modal.remove(),delete c.modal,a(e).off("resize",c._resize),a(".modal:not(.persistent-modal)").length||d.removeClass("modal-visible").css("margin-right",0),c.focusedElBeforeOpen.focus()},300)}},resize:function(){this.modal&&o(this.modal)}};var s=null,t={};return function(a){return new r(a)}}])}(angular.module("qstrap.modal",["qstrap.util"])),angular.module("qstrap.paginationControls",[]).filter("paginationText",function(){"use strict";return function(a,b,c){return a||(a="Showing page ${currentPg} of ${totalPgs}"),a.replace("${currentPg}",b).replace("${totalPgs}",c)}}).directive("qstrap.paginationControls",[function(){"use strict";return{restrict:"A",scope:{total:"=",offset:"=",limit:"=",msgTemplate:"@",onChange:"&",beforeChange:"&",afterChange:"&"},link:function(a,b,c){function d(){if(f){var b=a.beforeChange({offset:a.offset,total:a.total,limit:a.limit});return"boolean"!=typeof b||b}return!0}function e(){return h?a.afterChange({offset:a.offset,total:a.total,limit:a.limit}):!g||a.onChange({$offset:a.offset,$currPage:a.currPage})}if(a.offset=parseInt(a.offset,10),a.limit=parseInt(a.limit,10),a.total=parseInt(a.total,10),a.offset>a.total)throw new Error("paginationControl: Provided offset larger than total");var f="string"==typeof c.beforeChange,g="string"==typeof c.onChange,h="string"==typeof c.afterChange,i=function(){a.currPage=Math.floor(a.offset/a.limit)+1,a.totalPages=Math.ceil(a.total/a.limit),a.enableBack=0!==a.offset,a.enableForward=a.offset+a.limit<a.total};a.$watch("offset",i),a.$watch("limit",i),a.$watch("total",i),a.pagination={start:function(){a.enableBack&&d()&&(a.offset=0,e())},back:function(){a.enableBack&&d()&&(a.offset-=a.limit,e())},forward:function(){a.enableForward&&d()&&(a.offset+=a.limit,e())},end:function(){if(a.enableForward&&d()){var b=Math.ceil(a.total/a.limit)-1;a.offset=b*a.limit,e()}}}},template:'<div class="pagination"> \t\t\t\t<div class="message" ng-bind="msgTemplate | paginationText : currPage : totalPages"></div>\t\t\t\t<div class="controls" ng-show="total> limit"> \t\t\t\t\t<div ng-class="{disabled: !enableBack}" class="btn btn-default back" ng-click="pagination.back()"> \t\t\t\t\t\t<span class="icon btn-icon-angle-left"> </span>\t\t\t\t\t</div>\t\t\t\t\t<div ng-class="{disabled: !enableForward}" class="btn btn-default forward" ng-click="pagination.forward()"> \t\t\t\t\t\t<span class="icon btn-icon-angle-right"> </span>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t</div>'}}]),function(b){"use strict";b.controller("PaginationController",["$scope","$filter","$sce",function(b,c,d){function e(a,c,d){d.stopPropagation(),b.editPage=b.pagination.page+1,b.isEditing=!0,b.$digest(),b.focusInput()}function f(a){a>b.pagination.totalPages?a=b.pagination.totalPages:a<1&&(a=1),b.setPage({page:a-1}),b.isEditing=!1}var g=c("qstrapTranslate"),h={RETURN:13,ESCAPE:27};b.isEditing=!1,b.pageItems=function(){var c,d=b.pagination.page+1,f=b.pagination.totalPages,h=0,i=[{label:a('<div class="page-item-bold"></div>').html(g("PAGE_N",{page:d})),value:d,selected:!0}];for(c=d-1;c>1&&h<3;c--)i.unshift({label:g("PAGE_N",{page:c}),value:c}),h++;for(1!==d&&(i.unshift({divider:!0}),i.unshift({label:g("FIRST_PAGE"),value:1})),h=0,c=d+1;c<f&&h<3;c++)i.push({label:g("PAGE_N",{page:c}),value:c}),h++;return d!==f&&(i.push({divider:!0}),i.push({label:g("LAST_PAGE"),value:f})),i.push({divider:!0}),i.push({label:g("JUMP_TO"),notSelectedable:!0,action:e,value:-1}),i},b.goToPage=function(a){b.setPage({page:a.value-1})},b.hasNext=function(){return b.pagination.page<b.pagination.totalPages-1},b.nextPage=function(){b.setPage({page:b.pagination.page+1})},b.hasPrev=function(){return b.pagination.page>0},b.prevPage=function(){b.setPage({page:b.pagination.page-1})},b.currentPageMessage=function(){return d.trustAsHtml(g("CURRENT_PAGE",{current:b.pagination.page+1,total:+b.pagination.totalPages}))},b.input=function(a){switch(a.keyCode){case h.RETURN:f(b.editPage);break;case h.ESCAPE:b.isEditing=!1,b.editPage=b.pagination.page+1}},b.inputBlur=function(){b.isEditing=!1,b.editPage=b.pagination.page+1}}]),b.directive("qstrap.pagination",["$timeout","$filter","$compile","$templateCache",function(a,b,c,d){d.put("qstrap.pagination.html",'<div class="pagination-controls"><div ng-show="pagination && pagination.totalPages > 1"><div class="btn btn-hover prev-button" ng-class="{disabled: disable || !hasPrev()}" ng-click="prevPage()"><span class="icon icon-angle-left-lg" ></span></div><div ng-show="!isEditing" class="btn btn-hover btn-page" qstrap.select-menu ng-model="editPage" items="pageItems()" on-change="goToPage($item)" options="{\'preferredDirection\': \'right\'}" ><span ng-bind-html="currentPageMessage()"></span><div class="icon icon-angle-down-sm"></div></div><div class="manual-entry" ng-show="isEditing"></div><div class="btn btn-hover next-button" ng-class="{disabled: disable || !hasNext()}" ng-click="nextPage()"><span class="icon icon-angle-right-lg"></span></div></div></div>');var e=b("qstrapTranslate");return{templateUrl:"qstrap.pagination.html",scope:{pagination:"=",setPage:"&",disabled:"=?"},link:function(b,d,f){var g=jQuery(d).find(".manual-entry");b.focusInput=function(){a(function(){var a=jQuery(d).find("input");a.focus(),a.select()})},b.$watch("pagination",function(a,d){var f=b.pagination&&b.pagination.totalPages||0,h=e("ENTER_PAGE",{total:+f}),i=c("<span>"+h+"</span>")(b);g.html(i),b.editPage=b.pagination.page+1},!0)},controller:"PaginationController"}}]),b.directive("qstrap.pageInput",[function(){return{scope:!1,restrict:"A",replace:!0,template:'<input class="form-control form-control-sm" type="number" ng-model="editPage" ng-keydown="$event.stopPropagation()" ng-keyup="input($event)" ng-blur="inputBlur();" maxlength="{{limit}}" />'}}])}(angular.module("qstrap.pagination",["qstrap.selectMenu","qstrap.translate"])),function(b){"use strict";var c,d="qstrap-popover.tpl.html";b.factory("qstrap.$popover",["$document","$templateCache","$timeout","qstrap.$tooltip","qstrap.util",function(b,e,f,g,h){function i(a,b){function c(c){0===l.length&&c.keyCode===h.keys.TAB?(c.preventDefault(),g()):c.keyCode===h.keys.TAB&&c.shiftKey&&document.activeElement===a?(c.preventDefault(),b()):c.keyCode===h.keys.ESCAPE&&b()}function d(b){b.keyCode===h.keys.TAB&&b.shiftKey&&(b.stopPropagation(),b.preventDefault(),a.focus())}function e(a){a.keyCode!==h.keys.TAB||a.shiftKey||(a.stopPropagation(),a.preventDefault(),g())}function g(){var a=m;m=null,a.hide();var b=a.options.anchor[0],c=document.querySelectorAll(h.focusableSelector);c[c.length-1]===b?b.focus():c[Array.prototype.indexOf.call(c,b)+1].focus()}function i(){f(function(){var b=a.querySelectorAll(h.focusableSelector);b.length!==l.length&&(k(),j())})}function j(){l=a.querySelectorAll(h.focusableSelector),n=l[0],o=l[l.length-1],a.addEventListener("keydown",c),a.addEventListener("keyup",i),n&&n.addEventListener("keydown",d),o&&o.addEventListener("keydown",e)}function k(){a.removeEventListener("keydown",c),a.removeEventListener("keyup",i),n&&n.removeEventListener("keydown",d),o&&o.removeEventListener("keydown",e)}var l,n,o;return j(),a.setAttribute("tabindex",-1),a.focus(),k}function j(d){d!==m&&(k(),d&&d.options&&d.options.onOpen&&d.options.onOpen(),d.show().then(function(b){function e(){k(),d.options.anchor.focus()}a(b).on("mousedown touchstart",l),c=i(b.get(0),e)}),m=d,a(m.options.anchor).addClass("active"),a(m.options.anchor).on("mousedown touchstart",l),a(b).on("mousedown touchstart",k))}function k(){if(m&&m.tooltip){m.tooltip.find(":focus").blur();var d=m;m=null,d.options.onClose&&d.options.onClose(),f(function(){d.hide(),a(d.options.anchor).removeClass("active"),a(d.options.anchor).focus()})}a(b).off("mousedown touchstart",k),"function"==typeof c&&c()}function l(a){a&&a.stopImmediatePropagation&&a.stopImmediatePropagation()}e.put(d,'<div class="popover"><div class="arrow"></div><div class="popover-content">{{content}}</div></div>');var m;return function(b){b.template||(b.template=d),b.adjustHeight=!0;var c=g(b);return c.close=k,b.anchor&&a(b.anchor).on("mousedown keydown",function(a){l(a),"mousedown"!==a.type&&a.keyCode!==h.keys.SPACE&&a.keyCode!==h.keys.ENTER||(m===c?k():j(c))}),c}}]),b.directive("qstrap.popover",["qstrap.$popover","$parse",function(a,b){return{restrict:"A",link:function(c,e,f){var g={html:f.html,content:f.content,position:f.position,template:f.template||d,controller:f.controller,anchor:e,className:f.className||"",scope:c};g.onClose=function(){f.onClose&&b(f.onClose)(c)},g.onOpen=function(){f.onOpen&&b(f.onOpen)(c)};var h=a(g);e.data("qstrap.popover",h);var i=[c.$watch(function(){return f.position+""+f.template},function(){g.position=f.position||g.position,g.template=f.template||g.template,h.build()}),c.$watch(function(){return f.content},function(){h.updateContent(f.content)})];e.on("$destroy",function(){if(c){for(var a=i.length;a--;)i[a]();i=null,c.$destroy(),c=null,h.destroy()}})}}}])}(angular.module("qstrap.popover",["qstrap.tooltip","qstrap.util"])),function(b){"use strict";b.factory("qstrap.$position",["$window","$document",function(b,c){function d(a){return{width:a.outerWidth()||+(a.attr("width")||"0"),height:a.outerHeight()||+(a.attr("height")||"0")}}function e(c,d,e){if("top"!==c&&"bottom"!==c)return!1;var f=a(e)[0].getBoundingClientRect(),g=f.top,h=a(b).innerHeight()-f.bottom;return"top"===c&&g<d.height&&h>g||"bottom"===c&&h<d.height&&g>h}function f(c,d,e){if("left"!==c&&"right"!==c)return!1;var f=a(e)[0].getBoundingClientRect(),g=f.left,h=a(b).innerWidth()-f.right;return"left"===c&&g<d.width&&h>g||"right"===c&&h<d.width&&g>h}function g(c){c=a(c);var d=c[0].getBoundingClientRect(),e=Math.min(d.top,0)||Math.max(d.bottom-a(b).innerHeight(),0);if(e){var f=c[0].offsetTop;f-e<0&&(e-=0-(f-e)),c.css("top",f-e+"px")}return-e}function h(c){c=a(c);var d=c[0].getBoundingClientRect(),e=Math.min(d.left,0)||Math.max(d.right-a(b).innerWidth(),0);if(e){var f=c[0].offsetLeft;c.css("left",f-e+"px")}return-e}function i(c,d){c=a(c);var e=c[0].getBoundingClientRect(),f=Math.max(0,e.bottom-a(b).innerHeight());return f&&c.css("max-height",d.height-f+"px"),f}function j(a){"function"==typeof a&&a.apply(null,Array.prototype.slice.call(arguments,1))}function k(b){var c=a(b.element);c.css({top:0,left:0,"max-height":"none"});var k=a(b.anchor),n=d(c),o=d(k),p=k.offset();c.css({"min-width":n.width+"px","min-height":n.height+"px"});var q=b.position.split(" "),r=q[0]||"top",s=q[1]||"center",t=b.autoReflect,u=b.autoAdjust;t&&("top"!==t&&f(s,n,k)&&(s="left"===s?"right":"left",j(b.onReflectLeft,s)),"left"!==t&&e(r,n,k)&&(r="top"===r?"bottom":"top",j(b.onReflectTop,r)));var v=(l[r]||l.top)(n,o,p),w=(m[s]||m.center)(n,o,p);if(c.css({top:v+"px",left:w+"px"}),u){if("top"!==u){var x=h(c);x&&j(b.onAdjustLeft,x)}if("left"!==u){var y=g(c);y&&j(b.onAdjustTop,y)}}if(b.adjustHeight!==!1){var z=i(c,n);z&&j(b.onAdjustHeight,z)}c.css({"min-width":0,"min-height":0})}var l={top:function(a,b,c){return c.top-a.height},center:function(a,b,c){return c.top+b.height/2-a.height/2},bottom:function(a,b,c){return c.top+b.height}},m={left:function(a,b,c){return c.left-a.width},center:function(a,b,c){return c.left+b.width/2-a.width/2},
right:function(a,b,c){return c.left+b.width}};return k}])}(angular.module("qstrap.position",[])),angular.module("qstrap",["qstrap.autoComplete","qstrap.translate","qstrap.colorpicker","qstrap.inputs","qstrap.menu","qstrap.pagination","qstrap.paginationControls","qstrap.rangeSlider","qstrap.slider","qstrap.selectMenu","qstrap.sortable","qstrap.spinner","qstrap.spin","qstrap.switch","qstrap.inlineInput","qstrap.tabs","qstrap.tooltip","qstrap.modal","qstrap.placeholder","qstrap.popover","qstrap.position","qstrap.weekday"]),"undefined"==typeof window||window.keyboardUserListenersAdded||(window.keyboardUserListenersAdded=!0,document.addEventListener("mousedown",function(){document.body.classList.remove("keyboard-user")}),document.addEventListener("keydown",function(a){9===a.keyCode&&document.body.classList.add("keyboard-user")})),angular.module("qstrap.rangeSlider",["qstrap.translate"]).directive("qstrap.rangeSlider",["$compile","$filter","qstrap.util",function(b,c,d){"use strict";return{template:"<div aria-live='polite' aria-label='{{getSliderRangeAriaLabel()}}'class='qslider'><div class='track'><div class='fill' ng-style='getFillStyles()'></div><button role='slider' aria-valuemin='{{rangeMin}}' aria-valuemax='{{maxValue}}' aria-valuenow='{{minValue}}' aria-valuetext='{{getMinSliderAriaValueText()}}' class='btn round btn-min'><div class='tooltip-container'><div class='tooltip bottom'><div class='tooltip-arrow'></div><div class='tooltip-inner'>{{formatValue(minValue)}}</div></div></div></button><button role='slider' aria-valuemin='{{minValue}}' aria-valuemax='{{rangeMax}}' aria-valuenow='{{maxValue}}' aria-valuetext='{{getMaxSliderAriaValueText()}}' class='btn round btn-max'><div class='tooltip-container'><div class='tooltip bottom'><div class='tooltip-arrow'></div><div class='tooltip-inner'>{{formatValue(maxValue)}}</div></div></div></button></div><span class='description'></span></div>",replace:!0,scope:{minValue:"=",maxValue:"=",rangeMin:"=",rangeMax:"=",localizedText:"=?",step:"@?",onChangeCallback:"&onChange",afterChangeCallback:"&afterChange",formatter:"&"},link:function(e,f,g){function h(){return e.rangeMax-e.rangeMin}function i(a){var b=a/C.width()*h();return Math.round(e.rangeMin+b)}function j(a){var b=(a-e.rangeMin)/h(),c=b*C.width();return c}function k(a){var b=e.rangeMin,c=e.rangeMax,d=parseFloat(e.step)||1;a<b?a=b:a>c&&(a=c);var f=(a-b)%d;return a+=f>d/2?d-f:-f,a>c&&(a-=d),a}function l(a){a.stopPropagation();var b=a.pageX-C.offset().left,c=i(b),d=Math.abs(e.minValue-c),f=Math.abs(e.maxValue-c);I=f<d?F:E,s(b),I=null}function m(b){if(!(M.indexOf(b.keyCode)<0)){I=a(b.target);var c=e.minValue,d=e.maxValue;if(I.hasClass("btn-min")&&(c=n(b,c)),I.hasClass("btn-max")&&(d=n(b,d)),o(c,d)){var f=t(I.hasClass("btn-min")?c:d);f&&(b.stopPropagation(),b.preventDefault())}}}function n(a,b){return a.keyCode==d.keys.LEFT_ARROW||a.keyCode==d.keys.DOWN_ARROW?(a.stopPropagation(),a.preventDefault(),b-=1):a.keyCode==d.keys.RIGHT_ARROW||a.keyCode==d.keys.UP_ARROW?(a.stopPropagation(),a.preventDefault(),b+=1):void 0}function o(a,b){var c=!1;return c=I.hasClass("btn-min")?a>=e.rangeMin&&a<e.maxValue:b>e.minValue&&b<=e.rangeMax}function p(b){b.stopPropagation(),I=a(b.target),a(document).bind("mouseup",q),a(document).bind("mousemove",r)}function q(b){a(document).unbind("mouseup",q),a(document).unbind("mousemove",r),I=null}function r(a){s(a.pageX-C.offset().left)}function s(a){if(I){a=I.hasClass("btn-min")?Math.min(a,parseFloat(F.css("left"))+H):Math.max(a,parseFloat(E.css("left"))+G),a=Math.min(Math.max(0,a),C.width());var b=i(a);b=k(b),t(b)&&(a=j(b),I.css("left",a-I.width()/2+"px"),J=!0)}}function t(a){if(!I)return!1;if(I.hasClass("btn-min")){if(e.minValue===a)return!1;e.minValue=a}else{if(e.maxValue===a)return!1;e.maxValue=a}return clearTimeout(K),K=setTimeout(L,10),!0}function u(){var a=E.width()/2,b=F.width()/2;E.css({left:j(+e.minValue)-a+"px",top:-1*a+"px"}),F.css({left:j(+e.maxValue)-b+"px",top:-1*b+"px"})}function v(a,b){if(a.is(":visible"))b();else var c=e.$watch(function(){a.is(":visible")&&(b(),c())})}function w(a){a=parseFloat(a),a<N?e.rangeMin=a:e.rangeMin!==N&&(e.rangeMin=N)}function x(a){a=parseFloat(a),a>O?e.rangeMax=a:e.rangeMax!==O&&(e.rangeMax=O)}var y="<strong qstrap.inline-input ng-model='minValue' input-type='number' validate='validateRange($value, maxValue)' on-change='onChange($value, maxValue)' after-change='afterChange($value, maxValue)'>{{formatValue(minValue)}}</strong>",z="<strong qstrap.inline-input ng-model='maxValue' input-type='number' validate='validateRange(minValue, $value)' on-change='onChange(minValue, $value)' after-change='afterChange(minValue, $value)'>{{formatValue(maxValue)}}</strong>",A=(e.localizedText||{}).rangeText||c("qstrapTranslate")("RANGE_TEXT");A=A.replace("{min}",y).replace("{max}",z),f.find(".description").append(b("<span>"+A+"</span>")(e)),void 0===e.rangeMin&&(e.rangeMin=0),void 0===e.rangeMax&&(e.rangeMax=100),e.formatValue=function(a){return"formatter"in g?e.formatter({$value:a}):a};var B=c("qstrapTranslate");e.getSliderRangeAriaLabel=function(){return B("ACCESSIBLE_FILTER_LABELS.SELECTED_RANGE",{minValue:e.minValue||0==e.minValue?e.minValue:"",maxValue:e.maxValue||0==e.maxValue?e.maxValue:""})},e.getMinSliderAriaValueText=function(){return B("ACCESSIBLE_FILTER_LABELS.MIN_RANGE_SLIDER_VAL",{val:e.minValue||0==e.minValue?e.minValue:""})},e.getMaxSliderAriaValueText=function(){return B("ACCESSIBLE_FILTER_LABELS.MAX_RANGE_SLIDER_VAL",{val:e.maxValue||0==e.maxValue?e.maxValue:""})},e.validateRange=function(a,b){return w(a),x(b),!(a>b||b<a||a<e.rangeMin||b>e.rangeMax)},e.onChange=function(a,b){"onChange"in g&&e.onChangeCallback({$min:a,$max:b})},e.afterChange=function(a,b){"afterChange"in g&&e.afterChangeCallback({$min:a,$max:b})},e.getFillStyles=function(){return{left:j(e.minValue)+"px",right:C.width()-j(e.maxValue)+"px"}};var C=f.find(".track"),D=C.find(".fill"),E=C.find(".btn-min"),F=C.find(".btn-max"),G=E.width()/2,H=F.width()/2,I=null,J=!1,K=0,L=function(){e.onChange(e.minValue,e.maxValue),e.$apply(),e.afterChange(e.minValue,e.maxValue)};C.mousedown(l),D.mousedown(l),E.mousedown(p),F.mousedown(p),a(E).bind("keydown",m),a(F).bind("keydown",m);var M=[d.keys.LEFT_ARROW,d.keys.UP_ARROW,d.keys.RIGHT_ARROW,d.keys.DOWN_ARROW];v(f,u),e.$watch("[minValue, maxValue]",function(){J?J=!1:u()},!0);var N=e.rangeMin,O=e.rangeMax}}}]),angular.module("qstrap.slider",[]).directive("qstrap.slider",[function(){"use strict";return{template:"<div class='qslider'><div class='track'><button class='btn round btn-val'><div class='tooltip-container'><div class='tooltip bottom'><div class='tooltip-arrow'></div><div class='tooltip-inner'>{{formatValue(value)}}</div></div></div></button></div></div>",replace:!0,scope:{value:"=",rangeMin:"=?",rangeMax:"=?",step:"@",onChangeCallback:"&onChange",afterChangeCallback:"&afterChange",formatter:"&"},link:function(b,c,d){function e(){return b.rangeMax-b.rangeMin}function f(a){var c=a/q.width()*e();return Math.round(b.rangeMin+c)}function g(a){var c=(a-b.rangeMin)/e(),d=c*q.width();return d}function h(a){var c=b.rangeMin,d=b.rangeMax,e=parseFloat(b.step)||1;a<c?a=c:a>d&&(a=d);var f=(a-c)%e;return a+=f>e/2?e-f:-f,a>d&&(a-=e),a}function i(a){a.stopPropagation();var b=a.pageX-q.offset().left;f(b);s=r,m(b),s=null}function j(b){b.stopPropagation(),s=a(b.target),a(document).bind("mouseup",k),a(document).bind("mousemove",l)}function k(b){a(document).unbind("mouseup",k),a(document).unbind("mousemove",l),s=null}function l(a){m(a.pageX-q.offset().left)}function m(a){if(s){a=Math.min(Math.max(0,a),q.width());var b=f(a);b=h(b),n(b)&&(a=g(b),s.css("left",a-s.width()/2+"px"))}}function n(a){return b.value!==a&&(b.value=a,clearTimeout(t),t=setTimeout(u,10),!0)}function o(){var a=r.width()/2;r.css({left:g(+b.value)-a+"px",top:-1*a+"px"})}function p(a,c){if(a.is(":visible"))c();else var d=b.$watch(function(){a.is(":visible")&&(c(),d())})}void 0===b.rangeMin&&(b.rangeMin=0),void 0===b.rangeMax&&(b.rangeMax=100),void 0!==b.step&&b.step<1&&(b.step=1),b.formatValue=function(a){return"formatter"in d?b.formatter({$value:a}):a},b.onChange=function(a){"onChange"in d&&b.onChangeCallback({$value:a})},b.afterChange=function(a){"afterChange"in d&&b.afterChangeCallback({$value:a})};var q=c.find(".track"),r=q.find(".btn-val"),s=(r.width()/2,null),t=0,u=function(){b.onChange(b.value),b.$apply(),b.afterChange(b.value)};q.mousedown(i),r.mousedown(j),p(c,o),b.$watch("value",function(){var a=h(b.value);a!=b.value?b.value=a:o()},!0)}}}]),!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";a.ui=a.ui||{},a.ui.version="1.13.1";var b,c=0,d=Array.prototype.hasOwnProperty,e=Array.prototype.slice;a.cleanData=(b=a.cleanData,function(c){for(var d,e,f=0;null!=(e=c[f]);f++)(d=a._data(e,"events"))&&d.remove&&a(e).triggerHandler("remove");b(c)}),a.widget=function(b,c,d){var e,f,g,h={},i=b.split(".")[0],j=i+"-"+(b=b.split(".")[1]);return d||(d=c,c=a.Widget),Array.isArray(d)&&(d=a.extend.apply(null,[{}].concat(d))),a.expr.pseudos[j.toLowerCase()]=function(b){return!!a.data(b,j)},a[i]=a[i]||{},e=a[i][b],f=a[i][b]=function(a,b){return this&&this._createWidget?void(arguments.length&&this._createWidget(a,b)):new f(a,b)},a.extend(f,e,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),(g=new c).options=a.widget.extend({},g.options),a.each(d,function(a,b){function d(){return c.prototype[a].apply(this,arguments)}function e(b){return c.prototype[a].apply(this,b)}h[a]="function"==typeof b?function(){var a,c=this._super,f=this._superApply;return this._super=d,this._superApply=e,a=b.apply(this,arguments),this._super=c,this._superApply=f,a}:b}),f.prototype=a.widget.extend(g,{widgetEventPrefix:e&&g.widgetEventPrefix||b},h,{constructor:f,namespace:i,widgetName:b,widgetFullName:j}),e?(a.each(e._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,f,c._proto)}),delete e._childConstructors):c._childConstructors.push(f),a.widget.bridge(b,f),f},a.widget.extend=function(b){for(var c,f,g=e.call(arguments,1),h=0,i=g.length;h<i;h++)for(c in g[h])f=g[h][c],d.call(g[h],c)&&void 0!==f&&(a.isPlainObject(f)?b[c]=a.isPlainObject(b[c])?a.widget.extend({},b[c],f):a.widget.extend({},f):b[c]=f);return b},a.widget.bridge=function(b,c){var d=c.prototype.widgetFullName||b;a.fn[b]=function(f){var g="string"==typeof f,h=e.call(arguments,1),i=this;return g?this.length||"instance"!==f?this.each(function(){var c,e=a.data(this,d);return"instance"===f?(i=e,!1):e?"function"!=typeof e[f]||"_"===f.charAt(0)?a.error("no such method '"+f+"' for "+b+" widget instance"):(c=e[f].apply(e,h))!==e&&void 0!==c?(i=c&&c.jquery?i.pushStack(c.get()):c,!1):void 0:a.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+f+"'")}):i=void 0:(h.length&&(f=a.widget.extend.apply(null,[f].concat(h))),this.each(function(){var b=a.data(this,d);b?(b.option(f||{}),b._init&&b._init()):a.data(this,d,new c(f,this))})),i}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(b,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=c++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=a(),this.hoverable=a(),this.focusable=a(),this.classesElementLookup={},d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this.options=a.widget.extend({},this.options,this._getCreateOptions(),b),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){var b=this;this._destroy(),a.each(this.classesElementLookup,function(a,c){b._removeClass(c,a)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:a.noop,widget:function(){return this.element},option:function(b,c){var d,e,f,g=b;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof b)if(g={},b=(d=b.split(".")).shift(),d.length){for(e=g[b]=a.widget.extend({},this.options[b]),f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];if(b=d.pop(),1===arguments.length)return void 0===e[b]?null:e[b];e[b]=c}else{if(1===arguments.length)return void 0===this.options[b]?null:this.options[b];g[b]=c}return this._setOptions(g),this},_setOptions:function(a){for(var b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return"classes"===a&&this._setOptionClasses(b),this.options[a]=b,"disabled"===a&&this._setOptionDisabled(b),this},_setOptionClasses:function(b){var c,d,e;for(c in b)e=this.classesElementLookup[c],b[c]!==this.options.classes[c]&&e&&e.length&&(d=a(e.get()),this._removeClass(e,c),d.addClass(this._classes({element:d,keys:c,classes:b,add:!0})))},_setOptionDisabled:function(a){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!a),a&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(b){function c(c,f){for(var g,h=0;h<c.length;h++)g=e.classesElementLookup[c[h]]||a(),g=b.add?(function(){var c=[];b.element.each(function(b,d){a.map(e.classesElementLookup,function(a){return a}).some(function(a){return a.is(d)})||c.push(d)}),e._on(a(c),{remove:"_untrackClassesElement"})}(),a(a.uniqueSort(g.get().concat(b.element.get())))):a(g.not(b.element).get()),e.classesElementLookup[c[h]]=g,d.push(c[h]),f&&b.classes[c[h]]&&d.push(b.classes[c[h]])}var d=[],e=this;return(b=a.extend({element:this.element,classes:this.options.classes||{}},b)).keys&&c(b.keys.match(/\S+/g)||[],!0),b.extra&&c(b.extra.match(/\S+/g)||[]),d.join(" ")},_untrackClassesElement:function(b){var c=this;a.each(c.classesElementLookup,function(d,e){-1!==a.inArray(b.target,e)&&(c.classesElementLookup[d]=a(e.not(b.target).get()))}),this._off(a(b.target))},_removeClass:function(a,b,c){return this._toggleClass(a,b,c,!1)},_addClass:function(a,b,c){return this._toggleClass(a,b,c,!0)},_toggleClass:function(a,b,c,d){var e="string"==typeof a||null===a,c={extra:e?b:c,keys:e?a:b,element:e?this.element:a,add:d="boolean"==typeof d?d:c};return c.element.toggleClass(this._classes(c),d),this},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){if(b||!0!==f.options.disabled&&!a(this).hasClass("ui-state-disabled"))return("string"==typeof g?f[g]:g).apply(f,arguments)}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^([\w:-]*)\s*(.*)$/),d=i[1]+f.eventNamespace,i=i[2];i?e.on(d,i,h):c.on(d,h)})},_off:function(b,c){c=(c||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,b.off(c),this.bindings=a(this.bindings.not(b).get()),this.focusable=a(this.focusable.not(b).get()),this.hoverable=a(this.hoverable.not(b).get())},_delay:function(a,b){var c=this;return setTimeout(function(){return("string"==typeof a?c[a]:a).apply(c,arguments)},b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){this._addClass(a(b.currentTarget),null,"ui-state-hover")},mouseleave:function(b){this._removeClass(a(b.currentTarget),null,"ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){this._addClass(a(b.currentTarget),null,"ui-state-focus")},focusout:function(b){this._removeClass(a(b.currentTarget),null,"ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},(c=a.Event(c)).type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!("function"==typeof g&&!1===g.apply(this.element[0],[c].concat(d))||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){var g,h=(e="string"==typeof e?{effect:e}:e)?!0!==e&&"number"!=typeof e&&e.effect||c:b;"number"==typeof(e=e||{})?e={duration:e}:!0===e&&(e={}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}}),a.widget,a.extend(a.expr.pseudos,{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])}}),a.fn.scrollParent=function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,b=this.parents().filter(function(){var b=a(this);return(!d||"static"!==b.css("position"))&&e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&b.length?b:a(this[0].ownerDocument||document)},a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var f=!1;a(document).on("mouseup",function(){f=!1}),a.widget("ui.mouse",{version:"1.13.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.on("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).on("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(b){if(!f){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var c=this,d=1===b.which,e=!("string"!=typeof this.options.cancel||!b.target.nodeName)&&a(b.target).closest(this.options.cancel).length;return!(d&&!e&&this._mouseCapture(b))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=!1!==this._mouseStart(b),!this._mouseStarted)?(b.preventDefault(),!0):(!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return c._mouseMove(a)},this._mouseUpDelegate=function(a){return c._mouseUp(a)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),f=!0))}},_mouseMove:function(b){if(this._mouseMoved){if(a.ui.ie&&(!document.documentMode||document.documentMode<9)&&!b.button)return this._mouseUp(b);if(!b.which)if(b.originalEvent.altKey||b.originalEvent.ctrlKey||b.originalEvent.metaKey||b.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(b)}return(b.which||b.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,b),this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted)},_mouseUp:function(b){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target===this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,f=!1,b.preventDefault()},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),a.widget("ui.sortable",a.ui.mouse,{version:"1.13.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(a,b,c){return b<=a&&a<b+c},_isFloating:function(a){return/left|right/.test(a.css("float"))||/inline|table-cell/.test(a.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(a,b){this._super(a,b),"handle"===a&&this._setHandleClassName()},_setHandleClassName:function(){var b=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),a.each(this.items,function(){b._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var a=this.items.length-1;0<=a;a--)this.items[a].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(b,c){var d=null,e=!1,f=this;return!(this.reverting||this.options.disabled||"static"===this.options.type||(this._refreshItems(b),a(b.target).parents().each(function(){if(a.data(this,f.widgetName+"-item")===f)return d=a(this),!1}),!(d=a.data(b.target,f.widgetName+"-item")===f?a(b.target):d)||this.options.handle&&!c&&(a(this.options.handle,d).find("*").addBack().each(function(){this===b.target&&(e=!0)}),!e)||(this.currentItem=d,this._removeCurrentsFromItems(),0)))},_mouseStart:function(b,c,d){var e,f,g=this.options;if((this.currentContainer=this).refreshPositions(),this.appendTo=a("parent"!==g.appendTo?g.appendTo:this.currentItem.parent()),this.helper=this._createHelper(b),this._cacheHelperProportions(),this._cacheMargins(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),g.cursorAt&&this._adjustOffsetFromHelper(g.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),this.scrollParent=this.placeholder.scrollParent(),a.extend(this.offset,{parent:this._getParentOffset()}),g.containment&&this._setContainment(),g.cursor&&"auto"!==g.cursor&&(f=this.document.find("body"),this.storedCursor=f.css("cursor"),f.css("cursor",g.cursor),this.storedStylesheet=a("<style>*{ cursor: "+g.cursor+" !important; }</style>").appendTo(f)),g.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",g.zIndex)),g.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",g.opacity)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",b,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!d)for(e=this.containers.length-1;0<=e;e--)this.containers[e]._trigger("activate",b,this._uiHash(this));return a.ui.ddmanager&&(a.ui.ddmanager.current=this),a.ui.ddmanager&&!g.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this.helper.parent().is(this.appendTo)||(this.helper.detach().appendTo(this.appendTo),this.offset.parent=this._getParentOffset()),this.position=this.originalPosition=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,this.lastPositionAbs=this.positionAbs=this._convertPositionTo("absolute"),this._mouseDrag(b),!0},_scroll:function(a){var b=this.options,c=!1;return this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-a.pageY<b.scrollSensitivity?this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop+b.scrollSpeed:a.pageY-this.overflowOffset.top<b.scrollSensitivity&&(this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop-b.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-a.pageX<b.scrollSensitivity?this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft+b.scrollSpeed:a.pageX-this.overflowOffset.left<b.scrollSensitivity&&(this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft-b.scrollSpeed)):(a.pageY-this.document.scrollTop()<b.scrollSensitivity?c=this.document.scrollTop(this.document.scrollTop()-b.scrollSpeed):this.window.height()-(a.pageY-this.document.scrollTop())<b.scrollSensitivity&&(c=this.document.scrollTop(this.document.scrollTop()+b.scrollSpeed)),a.pageX-this.document.scrollLeft()<b.scrollSensitivity?c=this.document.scrollLeft(this.document.scrollLeft()-b.scrollSpeed):this.window.width()-(a.pageX-this.document.scrollLeft())<b.scrollSensitivity&&(c=this.document.scrollLeft(this.document.scrollLeft()+b.scrollSpeed))),c},_mouseDrag:function(b){var c,d,e,f,g=this.options;for(this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),g.scroll&&!1!==this._scroll(b)&&(this._refreshItemPositions(!0),a.ui.ddmanager&&!g.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b)),this.dragDirection={vertical:this._getDragVerticalDirection(),horizontal:this._getDragHorizontalDirection()},c=this.items.length-1;0<=c;c--)if(e=(d=this.items[c]).item[0],(f=this._intersectsWithPointer(d))&&d.instance===this.currentContainer&&!(e===this.currentItem[0]||this.placeholder[1===f?"next":"prev"]()[0]===e||a.contains(this.placeholder[0],e)||"semi-dynamic"===this.options.type&&a.contains(this.element[0],e))){if(this.direction=1===f?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(d))break;this._rearrange(b,d),this._trigger("change",b,this._uiHash());break}return this._contactContainers(b),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),this._trigger("sort",b,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(b,c){var d,e,f,g;if(b)return a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,b),this.options.revert?(e=(d=this).placeholder.offset(),g={},(f=this.options.axis)&&"x"!==f||(g.left=e.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),f&&"y"!==f||(g.top=e.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,a(this.helper).animate(g,parseInt(this.options.revert,10)||500,function(){d._clear(b)})):this._clear(b,c),!1},cancel:function(){if(this.dragging){this._mouseUp(new a.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var b=this.containers.length-1;0<=b;b--)this.containers[b]._trigger("deactivate",null,this._uiHash(this)),this.containers[b].containerCache.over&&(this.containers[b]._trigger("out",null,this._uiHash(this)),this.containers[b].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),a.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},a(c).each(function(){var c=(a(b.item||this).attr(b.attribute||"id")||"").match(b.expression||/(.+)[\-=_](.+)/);c&&d.push((b.key||c[1]+"[]")+"="+(b.key&&b.expression?c[1]:c[2]))}),!d.length&&b.key&&d.push(b.key+"="),d.join("&")},toArray:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},c.each(function(){d.push(a(b.item||this).attr(b.attribute||"id")||"")}),d},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,d=this.positionAbs.top,e=d+this.helperProportions.height,f=a.left,g=f+a.width,h=a.top,i=h+a.height,j=this.offset.click.top,k=this.offset.click.left,j="x"===this.options.axis||h<d+j&&d+j<i,k="y"===this.options.axis||f<b+k&&b+k<g;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?j&&k:f<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<g&&h<d+this.helperProportions.height/2&&e-this.helperProportions.height/2<i},_intersectsWithPointer:function(a){var b="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height),a="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width);return!(!b||!a)&&(b=this.dragDirection.vertical,a=this.dragDirection.horizontal,this.floating?"right"===a||"down"===b?2:1:b&&("down"===b?2:1))},_intersectsWithSides:function(a){var b=this._isOverAxis(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height),c=this._isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width),d=this.dragDirection.vertical,a=this.dragDirection.horizontal;return this.floating&&a?"right"===a&&c||"left"===a&&!c:d&&("down"===d&&b||"up"===d&&!b)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return 0!=a&&(0<a?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return 0!=a&&(0<a?"right":"left")},refresh:function(a){return this._refreshItems(a),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var a=this.options;return a.connectWith.constructor===String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(b){function c(){h.push(this)}var d,e,f,g,h=[],i=[],j=this._connectWith();if(j&&b)for(d=j.length-1;0<=d;d--)for(e=(f=a(j[d],this.document[0])).length-1;0<=e;e--)(g=a.data(f[e],this.widgetFullName))&&g!==this&&!g.options.disabled&&i.push(["function"==typeof g.options.items?g.options.items.call(g.element):a(g.options.items,g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),g]);for(i.push(["function"==typeof this.options.items?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),d=i.length-1;0<=d;d--)i[d][0].each(c);return a(h)},_removeCurrentsFromItems:function(){var b=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=a.grep(this.items,function(a){
for(var c=0;c<b.length;c++)if(b[c]===a.item[0])return!1;return!0})},_refreshItems:function(b){this.items=[],this.containers=[this];var c,d,e,f,g,h,i,j,k=this.items,l=[["function"==typeof this.options.items?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]],m=this._connectWith();if(m&&this.ready)for(c=m.length-1;0<=c;c--)for(d=(e=a(m[c],this.document[0])).length-1;0<=d;d--)(f=a.data(e[d],this.widgetFullName))&&f!==this&&!f.options.disabled&&(l.push(["function"==typeof f.options.items?f.options.items.call(f.element[0],b,{item:this.currentItem}):a(f.options.items,f.element),f]),this.containers.push(f));for(c=l.length-1;0<=c;c--)for(g=l[c][1],j=(h=l[c][d=0]).length;d<j;d++)(i=a(h[d])).data(this.widgetName+"-item",g),k.push({item:i,instance:g,width:0,height:0,left:0,top:0})},_refreshItemPositions:function(b){for(var c,d,e=this.items.length-1;0<=e;e--)c=this.items[e],this.currentContainer&&c.instance!==this.currentContainer&&c.item[0]!==this.currentItem[0]||(d=this.options.toleranceElement?a(this.options.toleranceElement,c.item):c.item,b||(c.width=d.outerWidth(),c.height=d.outerHeight()),d=d.offset(),c.left=d.left,c.top=d.top)},refreshPositions:function(a){var b,c;if(this.floating=!!this.items.length&&("x"===this.options.axis||this._isFloating(this.items[0].item)),this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset()),this._refreshItemPositions(a),this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(b=this.containers.length-1;0<=b;b--)c=this.containers[b].element.offset(),this.containers[b].containerCache.left=c.left,this.containers[b].containerCache.top=c.top,this.containers[b].containerCache.width=this.containers[b].element.outerWidth(),this.containers[b].containerCache.height=this.containers[b].element.outerHeight();return this},_createPlaceholder:function(b){var c,d,e=(b=b||this).options;e.placeholder&&e.placeholder.constructor!==String||(c=e.placeholder,d=b.currentItem[0].nodeName.toLowerCase(),e.placeholder={element:function(){var e=a("<"+d+">",b.document[0]);return b._addClass(e,"ui-sortable-placeholder",c||b.currentItem[0].className)._removeClass(e,"ui-sortable-helper"),"tbody"===d?b._createTrPlaceholder(b.currentItem.find("tr").eq(0),a("<tr>",b.document[0]).appendTo(e)):"tr"===d?b._createTrPlaceholder(b.currentItem,e):"img"===d&&e.attr("src",b.currentItem.attr("src")),c||e.css("visibility","hidden"),e},update:function(a,f){c&&!e.forcePlaceholderSize||(f.height()&&(!e.forcePlaceholderSize||"tbody"!==d&&"tr"!==d)||f.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10)),f.width()||f.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10)))}}),b.placeholder=a(e.placeholder.element.call(b.element,b.currentItem)),b.currentItem.after(b.placeholder),e.placeholder.update(b,b.placeholder)},_createTrPlaceholder:function(b,c){var d=this;b.children().each(function(){a("<td>&#160;</td>",d.document[0]).attr("colspan",a(this).attr("colspan")||1).appendTo(c)})},_contactContainers:function(b){for(var c,d,e,f,g,h,i,j,k,l=null,m=null,n=this.containers.length-1;0<=n;n--)a.contains(this.currentItem[0],this.containers[n].element[0])||(this._intersectsWith(this.containers[n].containerCache)?l&&a.contains(this.containers[n].element[0],l.element[0])||(l=this.containers[n],m=n):this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",b,this._uiHash(this)),this.containers[n].containerCache.over=0));if(l)if(1===this.containers.length)this.containers[m].containerCache.over||(this.containers[m]._trigger("over",b,this._uiHash(this)),this.containers[m].containerCache.over=1);else{for(d=1e4,e=null,f=(j=l.floating||this._isFloating(this.currentItem))?"left":"top",g=j?"width":"height",k=j?"pageX":"pageY",c=this.items.length-1;0<=c;c--)a.contains(this.containers[m].element[0],this.items[c].item[0])&&this.items[c].item[0]!==this.currentItem[0]&&(h=this.items[c].item.offset()[f],i=!1,b[k]-h>this.items[c][g]/2&&(i=!0),Math.abs(b[k]-h)<d&&(d=Math.abs(b[k]-h),e=this.items[c],this.direction=i?"up":"down"));(e||this.options.dropOnEmpty)&&(this.currentContainer!==this.containers[m]?(e?this._rearrange(b,e,null,!0):this._rearrange(b,null,this.containers[m].element,!0),this._trigger("change",b,this._uiHash()),this.containers[m]._trigger("change",b,this._uiHash(this)),this.currentContainer=this.containers[m],this.options.placeholder.update(this.currentContainer,this.placeholder),this.scrollParent=this.placeholder.scrollParent(),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this.containers[m]._trigger("over",b,this._uiHash(this)),this.containers[m].containerCache.over=1):this.currentContainer.containerCache.over||(this.containers[m]._trigger("over",b,this._uiHash()),this.currentContainer.containerCache.over=1))}},_createHelper:function(b){var c=this.options,b="function"==typeof c.helper?a(c.helper.apply(this.element[0],[b,this.currentItem])):"clone"===c.helper?this.currentItem.clone():this.currentItem;return b.parents("body").length||this.appendTo[0].appendChild(b[0]),b[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),b[0].style.width&&!c.forceHelperSize||b.width(this.currentItem.width()),b[0].style.height&&!c.forceHelperSize||b.height(this.currentItem.height()),b},_adjustOffsetFromHelper:function(a){"string"==typeof a&&(a=a.split(" ")),"left"in(a=Array.isArray(a)?{left:+a[0],top:+a[1]||0}:a)&&(this.offset.click.left=a.left+this.margins.left),"right"in a&&(this.offset.click.left=this.helperProportions.width-a.right+this.margins.left),"top"in a&&(this.offset.click.top=a.top+this.margins.top),"bottom"in a&&(this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),{top:(b=this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&a.ui.ie?{top:0,left:0}:b).top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d=this.options;"parent"===d.containment&&(d.containment=this.helper[0].parentNode),"document"!==d.containment&&"window"!==d.containment||(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===d.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===d.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(d.containment)||(b=a(d.containment)[0],c=a(d.containment).offset(),d="hidden"!==a(b).css("overflow"),this.containment=[c.left+(parseInt(a(b).css("borderLeftWidth"),10)||0)+(parseInt(a(b).css("paddingLeft"),10)||0)-this.margins.left,c.top+(parseInt(a(b).css("borderTopWidth"),10)||0)+(parseInt(a(b).css("paddingTop"),10)||0)-this.margins.top,c.left+(d?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(a(b).css("borderLeftWidth"),10)||0)-(parseInt(a(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,c.top+(d?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(a(b).css("borderTopWidth"),10)||0)-(parseInt(a(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(b,c){c=c||this.position;var d="absolute"===b?1:-1,e="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,b=/(html|body)/i.test(e[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():b?0:e.scrollTop())*d,left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():b?0:e.scrollLeft())*d}},_generatePosition:function(b){var c=this.options,d=b.pageX,e=b.pageY,f="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,g=/(html|body)/i.test(f[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(b.pageX-this.offset.click.left<this.containment[0]&&(d=this.containment[0]+this.offset.click.left),b.pageY-this.offset.click.top<this.containment[1]&&(e=this.containment[1]+this.offset.click.top),b.pageX-this.offset.click.left>this.containment[2]&&(d=this.containment[2]+this.offset.click.left),b.pageY-this.offset.click.top>this.containment[3]&&(e=this.containment[3]+this.offset.click.top)),c.grid&&(b=this.originalPageY+Math.round((e-this.originalPageY)/c.grid[1])*c.grid[1],e=!this.containment||b-this.offset.click.top>=this.containment[1]&&b-this.offset.click.top<=this.containment[3]?b:b-this.offset.click.top>=this.containment[1]?b-c.grid[1]:b+c.grid[1],b=this.originalPageX+Math.round((d-this.originalPageX)/c.grid[0])*c.grid[0],d=!this.containment||b-this.offset.click.left>=this.containment[0]&&b-this.offset.click.left<=this.containment[2]?b:b-this.offset.click.left>=this.containment[0]?b-c.grid[0]:b+c.grid[0])),{top:e-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():g?0:f.scrollTop()),left:d-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())}},_rearrange:function(a,b,c,d){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?b.item[0]:b.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var e=this.counter;this._delay(function(){e===this.counter&&this.refreshPositions(!d)})},_clear:function(a,b){function c(a,b,c){return function(d){c._trigger(a,d,b._uiHash(b))}}this.reverting=!1;var d,e=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(d in this._storedCSS)"auto"!==this._storedCSS[d]&&"static"!==this._storedCSS[d]||(this._storedCSS[d]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!b&&e.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||b||e.push(function(a){this._trigger("update",a,this._uiHash())}),this!==this.currentContainer&&(b||(e.push(function(a){this._trigger("remove",a,this._uiHash())}),e.push(function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}.call(this,this.currentContainer)),e.push(function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}.call(this,this.currentContainer)))),d=this.containers.length-1;0<=d;d--)b||e.push(c("deactivate",this,this.containers[d])),this.containers[d].containerCache.over&&(e.push(c("out",this,this.containers[d])),this.containers[d].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,b||this._trigger("beforeStop",a,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!b){for(d=0;d<e.length;d++)e[d].call(this,a);this._trigger("stop",a,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){!1===a.Widget.prototype._trigger.apply(this,arguments)&&this.cancel()},_uiHash:function(b){var c=b||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:b?b.element:null}}})}),angular.module("qstrap.sortable",[]).directive("qstrap.sortable",["$timeout","$log","$filter","qstrap.util",function(b,c,d,e){"use strict";return{require:"?ngModel",link:function(f,g,h,i){function j(){var b=a(document.activeElement).index()+1,c=g.find("> .sortable-item").length,d=a(document.activeElement).parents("ol, ul").length;return p("ACCESSIBLE_SORTABLE.CURRENT_POSITION",{index:b,numItems:c,level:d})}function k(){g.find(".aria-live-text").text(j())}function l(){g.find("> .active-sortable-item").length?g.find("> .aria-live-text").text(p("ACCESSIBLE_SORTABLE.ITEM_GRABBED")+" "+j()):g.find("> .aria-live-text").text(p("ACCESSIBLE_SORTABLE.ITEM_DROPPED")+" "+j())}function m(a,b){return b&&"function"==typeof b?function(c,d){a(c,d),b(c,d)}:a}function n(a,b){var c=a.sortable("option","helper");return"clone"===c||"function"==typeof c&&b.item.sortable.isCustomHelperUsed()}var o,p=d("qstrapTranslate");if(h.hasOwnProperty("class")&&h["class"].indexOf("accessible-sort")!==-1){var q=g.parents("ol, ul").length;g.append('<span aria-live="assertive" class="assistive-text aria-live-text"></span>'),g.append('<span id="operation-lvl-'+q+'" class="assistive-text">'+p("ACCESSIBLE_SORTABLE.OPERATION")+"</span>"),b(function(){g.find("> .sortable-item").attr("aria-describedby","operation-lvl-"+q)}),g.on("keydown",function(b){a(document.activeElement).hasClass("sortable-item")?g[0]===a(document.activeElement).parent()[0]&&(b.which===e.keys.SPACE&&(a(document.activeElement).toggleClass("active-sortable-item"),l()),a(".active-sortable-item")&&(b.which!==e.keys.LEFT_ARROW&&b.which!==e.keys.UP_ARROW||(b.preventDefault(),g.find(".active-sortable-item").insertBefore(g.find(".active-sortable-item").prev()),g.find(".active-sortable-item").focus(),k()),b.which!==e.keys.RIGHT_ARROW&&b.which!==e.keys.DOWN_ARROW||(b.preventDefault(),g.find(".active-sortable-item").insertAfter(g.find(".active-sortable-item").next()),g.find(".active-sortable-item").focus(),k()))):g.find(".active-sortable-item").removeClass("active-sortable-item")})}var r={},s={receive:null,remove:null,start:null,stop:null,update:null},t={helper:null};return angular.extend(r,f.$eval(h["qstrap.sortable"])),angular.element.fn&&angular.element.fn.jquery?(i?(f.$watch(h.ngModel+".length",function(){b(function(){g.data("ui-sortable")&&g.sortable("refresh")})}),s.start=function(a,b){b.item.sortable={index:b.item.index(),cancel:function(){b.item.sortable._isCanceled=!0},isCanceled:function(){return b.item.sortable._isCanceled},isCustomHelperUsed:function(){return!!b.item.sortable._isCustomHelperUsed},_isCanceled:!1,_isCustomHelperUsed:b.item.sortable._isCustomHelperUsed}},s.activate=function(){o=g.contents();var a=g.sortable("option","placeholder");if(a&&a.element&&"function"==typeof a.element){var b=a.element();b=angular.element(b);var c=g.find('[class="'+b.attr("class")+'"]');o=o.not(c)}},s.update=function(a,b){b.item.sortable.received||(b.item.sortable.dropindex=b.item.index(),b.item.sortable.droptarget=b.item.parent(),g.sortable("cancel")),n(g,b)&&!b.item.sortable.received&&(o=o.not(o.last())),o.appendTo(g),b.item.sortable.received&&!b.item.sortable.isCanceled()&&f.$apply(function(){var a=i.$modelValue.slice(0,b.item.sortable.dropindex),c=i.$modelValue.slice(b.item.sortable.dropindex);i.$setViewValue(a.concat([b.item.sortable.moved]).concat(c))})},s.stop=function(a,b){!b.item.sortable.received&&"dropindex"in b.item.sortable&&!b.item.sortable.isCanceled()?f.$apply(function(){var a=i.$modelValue.slice(0,b.item.sortable.index),c=i.$modelValue.slice(b.item.sortable.index+1),d=a.concat(c);d.splice(b.item.sortable.dropindex,0,i.$modelValue[b.item.sortable.index]),i.$setViewValue(d)}):"dropindex"in b.item.sortable&&!b.item.sortable.isCanceled()||n(g,b)||o.appendTo(g)},s.receive=function(a,b){b.item.sortable.received=!0},s.remove=function(a,b){"dropindex"in b.item.sortable||(g.sortable("cancel"),b.item.sortable.cancel()),b.item.sortable.isCanceled()||f.$apply(function(){b.item.sortable.moved=i.$modelValue[b.item.sortable.index];var a=i.$modelValue.slice(0,b.item.sortable.index),c=i.$modelValue.slice(b.item.sortable.index+1);i.$setViewValue(a.concat(c))})},t.helper=function(a){return a&&"function"==typeof a?function(b,c){var d=a(b,c);return c.sortable._isCustomHelperUsed=c!==d,d}:a},f.$watch(h["qstrap.sortable"],function(a){g.data("ui-sortable")&&angular.forEach(a,function(a,b){s[b]?("stop"===b&&(a=m(a,function(){f.$apply()})),a=m(s[b],a)):t[b]&&(a=t[b](a)),g.sortable("option",b,a)})},!0),angular.forEach(s,function(a,b){r[b]=m(a,r[b])})):c.info("ui.sortable: ngModel not provided!",g),void g.sortable(r)):void c.error("ui.sortable: jQuery should be included before AngularJS!")}}}]),angular.module("qstrap.spin",[]).directive("qstrap.spin",["spinnerFactory",function(a){"use strict";return{scope:{spinIf:"=",spinSize:"@",spinInvert:"@",spinCover:"@",spinEnable:"@"},restrict:"A",link:function(b,c){var d={};if(b.spinSize){var e={sm:{length:5,width:2,radius:4},md:{length:7,width:2,radius:6},lg:{length:10,width:3,radius:8}};d=e[b.spinSize]}"true"==b.spinInvert&&(d.color="#FFF");var f=new a(d);b.$watch("spinIf",function(a){a?("true"!=b.spinEnable&&c.addClass("spinner-disabled"),b.spinCover?c.children().addClass("spinner-"+b.spinCover):c.children().addClass("spinner-fade"),f.spin(c[0])):(f.stop(),"true"!=b.spinEnable&&c.removeClass("spinner-disabled"),b.spinCover?c.children().removeClass("spinner-"+b.spinCover):c.children().removeClass("spinner-fade"))})}}}]),angular.module("qstrap.spin").factory("spinnerFactory",function(){"use strict";function a(a,b){var c,d=document.createElement(a||"div");for(c in b)d[c]=b[c];return d}function b(a){for(var b=1,c=arguments.length;b<c;b++)a.appendChild(arguments[b]);return a}function c(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=j.substring(0,j.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return l[e]||(m.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",m.cssRules.length),l[e]=1),e}function d(a,b){var c,d,e=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<k.length;d++)if(c=k[d]+b,void 0!==e[c])return c;if(void 0!==e[b])return b}function e(a,b){for(var c in b)a.style[d(a,c)||c]=b[c];return a}function f(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)void 0===a[d]&&(a[d]=c[d])}return a}function g(a,b){return"string"==typeof a?a:a[b%a.length]}function h(a){this.opts=f(a||{},n)}function i(){function c(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}m.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(a,d){function f(){return e(c("group",{coordsize:k+" "+k,coordorigin:-j+" "+-j}),{width:k,height:k})}function h(a,h,i){b(m,b(e(f(),{rotation:360/d.lines*a+"deg",left:~~h}),b(e(c("roundrect",{arcsize:d.corners}),{width:j,height:d.width,left:d.radius,top:-d.width>>1,filter:i}),c("fill",{color:g(d.color,a),opacity:d.opacity}),c("stroke",{opacity:0}))))}var i,j=d.length+d.width,k=2*j,l=2*-(d.width+d.length)+"px",m=e(f(),{position:"absolute",top:l,left:l});for(i=1;i<=d.lines;i++)h(i);return b(a,m)},h.prototype.opacity=function(a,b,c){var d=a.firstChild;d&&b<d.childNodes.length&&(d=d.childNodes[b],d=d&&d.firstChild,d=d&&d.firstChild,d&&(d.opacity=c))}}var j,k=["webkit","Moz","ms","O"],l={},m=function(){var c=a("style",{type:"text/css"});return b(document.getElementsByTagName("head")[0],c),c.sheet||c.styleSheet}(),n={lines:9,length:5,width:2,radius:4,rotate:0,corners:0,color:"#000",direction:1,speed:1.5,trail:60,opacity:.25,fps:20,zIndex:1050,className:"spinner",top:"50%",left:"50%",position:"absolute"};f(h.prototype,{spin:function(b){this.stop();var c=this,d=c.opts,f=c.el=e(a(0,{className:d.className}),{position:d.position,width:0,zIndex:d.zIndex});if(e(f,{left:d.left,top:d.top}),b&&b.insertBefore(f,b.firstChild||null),f.setAttribute("role","progressbar"),f.setAttribute("aria-label","loading"),f.setAttribute("tabIndex",0),c.lines(f,c.opts),!j){var g,h=0,i=(d.lines-1)*(1-d.direction)/2,k=d.fps,l=k/d.speed,m=(1-d.opacity)/(l*d.trail/100),n=l/d.lines;!function o(){h++;for(var a=0;a<d.lines;a++)g=Math.max(1-(h+(d.lines-a)*n)%l*m,d.opacity),c.opacity(f,a*d.direction+i,g);c.timeout=c.el&&setTimeout(o,~~(1e3/k))}()}return c},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=void 0),this},lines:function(d,f){function h(b,c){return e(a(),{position:"absolute",width:f.length+f.width+"px",height:f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k+f.rotate)+"deg) translate("+f.radius+"px,0)",borderRadius:(f.corners*f.width>>1)+"px"})}for(var i,k=0,l=(f.lines-1)*(1-f.direction)/2;k<f.lines;k++)i=e(a(),{position:"absolute",top:1+~(f.width/2)+"px",transform:"",opacity:f.opacity,animation:j&&c(f.opacity,f.trail,l+k*f.direction,f.lines)+" "+1/f.speed+"s linear infinite"}),b(d,b(i,h(g(f.color,k),"0 0 1px rgba(0,0,0,.1)")));return d},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var o=e(a("group"),{behavior:"url(#default#VML)"});return!d(o,"transform")&&o.adj?i():j=d(o,"animation"),h}),angular.module("qstrap.spinner",[]).directive("qstrap.spinner",["$timeout",function(a){return{template:'<span aria-live="polite" aria-label="{{ val }}"class="qspinner" ng-class="{simple:simple}"><button aria-label="{{ \'ACCESSIBLE_FILTER_LABELS.SPINNER_DECREMENT_BUTTON\' | qstrapTranslate }}" class="btn" ng-disabled="val<=min" ng-class="{\'round-minus\':!simple}" ng-click="decrement()"></button><input class="form-control" type="number" ng-model="val" placeholder="{{placeholder}}" ng-blur="validate()" ng-style="{width: size}" ng-keypress="keyPressed($event.keyCode)"><button aria-label="{{ \'ACCESSIBLE_FILTER_LABELS.SPINNER_INCREMENT_BUTTON\' | qstrapTranslate }}" class="btn" ng-disabled="val>=max" ng-class="{\'round-plus\':!simple}" ng-click="increment()"></button></span>',replace:!0,scope:{onChange:"&",afterChange:"&",min:"@",max:"@",placeholder:"@",step:"@?"},require:"ngModel",link:function(b,c,d,e){e.$render=function(){b.val=e.$viewValue,b.validate(!0)},angular.extend(b,{simple:!!d.simple,decrement:function(){b.val-=+(b.step||1),b.validate()},increment:function(){b.val+=+(b.step||1),b.validate()},validate:function(c){var f=e.$viewValue;return b.val=Math.round(100*b.val)/100,isNaN(b.val)?void(b.val=f):(b.val>+b.max?b.val=+b.max:b.val<+b.min&&(b.val=+b.min),e.$setViewValue(b.val),d.hasOwnProperty("onChange")&&!c&&b.onChange({$value:e.$viewValue,$previous:f}),void(d.hasOwnProperty("afterChange")&&!c&&a(function(){b.afterChange({$value:e.$viewValue,$previous:f})})))},keyPressed:function(a){13===a&&b.validate()}}),b.size=10*(Math.max((""+Math.abs(+b.max)).length,(""+Math.abs(+b.min)).length,(""+Math.abs(+b.step)).length)+1)}}}]),function(a,b){a.factory("qstrap.$switch",["$filter",function(a){"use strict";var c={onText:a("qstrapTranslate")("ON"),offText:a("qstrapTranslate")("OFF"),className:"",size:""},d=function(a,d){this._input=b(a),this._input.is(":checkbox")||console.warn("QSwitch works best with checkbox inputs"),this._options=b.extend({},c,d),this.init()};return d.prototype={updateToggleClass:function(a){this.dom.toggleClass("on",a),this.dom.toggleClass("off",!a)},init:function(){var a=this;this._input.after(this.build()),this._input.hide(),this.sizeText(),this._input.on("update",function(){var b=a._input.is(":checked");a.updateToggleClass(b)})},build:function(){var a=this._input.is(":checked"),c=this._options.size?" btn-"+this._options.size:"";return this.dom=b("<a>",{"class":"q-switch "+(a?"on":"off")+this._options.className}).append(b("<span>",{"class":"btn btn-primary active"+c}).append(this.onText=b("<span>").append(this._options.onText)),b("<span>",{"class":"btn btn-default active"+c}).append(this.offText=b("<span>").append(this._options.offText)),b("<b>",{"class":"btn "+c})).click(b.proxy(this.toggle,this))},toggle:function(){var a=!this._input.is(":checked");this._input.prop("checked",a),this.updateToggleClass(a),this._options.onChange&&this._options.onChange(a)},sizeText:function(){var a={position:"absolute",visibility:"hidden",display:"block"},b=this.dom.parents().not(":visible"),c=[];b.each(function(){var b={};for(var d in a)b[d]=this.style[d],this.style[d]=a[d];c.push(b)});var d={width:Math.max(this.onText.width(),this.offText.width())+"px"};b.each(function(b){var d=c[b];for(var e in a)this.style[e]=d[e]}),this.offText.css(d),this.onText.css(d)}},d}]);var c=b.fn.qswitch,d=angular.injector(["ng","qstrap.switch","qstrap.translate"]).get("qstrap.$switch");b.fn.qswitch=function(a){return this.each(function(){var c=b(this);c.data("q.switch")||c.data("q.switch",new d(c,a))})},b.fn.qswitch.Constructor=d,b.fn.qswitch.noConflict=function(){return b.fn.qswitch=c,this}}(angular.module("qstrap.switch",[]),jQuery),angular.module("qstrap.switch",[]).directive("qstrap.switch",[function(){"use strict";return{template:'<input type="checkbox">',restrict:"A",replace:!0,scope:{qval:"=ngModel",onText:"@",offText:"@",callback:"&onChange",afterChange:"&"},link:function(a,b){a.$watch("qval",function(a,c){void 0!==a&&(b.prop("checked",a||null),b.trigger("update"))}),b.prop("checked",a.qval||null),a.onChange=function(b){a.qval=b,a.callback({$value:b}),a.$apply(),a.afterChange&&a.afterChange({$value:b})},b.qswitch(a)}}}]),angular.module("qstrap.tabs",[]).run(["$templateCache",function(a){"use strict";a.put("$qstrap.tab-content",'<div ng-bind-html="tab.content"></div>')}]).directive("qstrap.tabs",["$parse","$sce","$timeout",function(a,b,c){"use strict";return{restrict:"A",scope:!0,template:"<div class='qstrap-tabs'><ul class='tab-list'><li ng-repeat='tab in tabs' ng-class='{active: tab.selected}' ng-style='{width: (100 / tabs.length) + \"%\"}'><a ng-click='select(tab)' ng-bind-html='tab.title'></a></li></ul><div class='tab-content'><div ng-repeat='tab in tabs' class='tab-pane' ng-class='{active: tab.selected }' ng-include='tab.template || \"$qstrap.tab-content\"'></div></div></div>",link:function(d,e,f){function g(a){angular.forEach(d.tabs,function(a){a.selected=!1}),a.selected=!0}var h=f.tabs?d.$eval(f.tabs):[],i=f.selectedIndex?d.$eval(f.selectedIndex):0;angular.forEach(h,function(a){a.title=b.trustAsHtml(a.title),a.content&&(a.content=b.trustAsHtml(a.content))});var j=f.onChange&&a(f.onChange),k=f.afterChange&&a(f.afterChange);angular.extend(d,{tabs:h,select:function(a){g(a),j&&j(d,{$tab:a}),k&&c(function(){k(d,{$tab:a})})}}),d.tabs.length&&g(d.tabs[i])}}}]),function(b){"use strict";b.factory("qstrap.$tooltip",["$compile","$document","$http","$q","$timeout","$templateCache","qstrap.$position",function(b,c,d,e,f,g,h){function i(a){return d.get(a||m,{cache:g}).then(function(a){return a.data})}function j(a,b,c,d){function e(a){b.removeClass(c).addClass(a)}function f(a){j.css("margin-top",parseInt(j.css("margin-top")||"0",10)-a+"px")}function g(a){j.css("margin-left",parseInt(j.css("margin-left"),10)-a+"px")}function i(a){k.css("max-height",k.height()-a+"px"),"left"!==c&&"right"!==c||f(-a/2)}c=c||"top",b.removeClass("top right bottom left").addClass(c);var j=b.find(".tooltip-arrow, .arrow");j[0]&&j[0].style&&(j[0].style["margin-top"]=null,j[0].style["margin-left"]=null);var k=b.find(".tooltip-inner, .popover-content");k.length&&d&&k.css("max-height","none");var l={top:"top center",right:"center right",bottom:"bottom center",left:"center left"},m={top:"top",right:"left",bottom:"top",left:"left"},n={top:"left",right:"top",bottom:"left",left:"top"};h({element:b,anchor:a,position:l[c],autoReflect:m[c],autoAdjust:n[c],adjustHeight:!!d,onAdjustLeft:g,onAdjustTop:f,onAdjustHeight:i,onReflectLeft:e,onReflectTop:e})}function k(a){return i(a.template).then(function(c){if(a.content||""===a.content){var d;if(a.html)d=a.content;else{var e=document.createElement("div");e.innerHTML=a.content,d=e.textContent||e.innerText||""}d=d.replace(/({{)|(}})/g,""),c=c.replace("{{content}}",d)}var f=a.scope?a.scope.$new():$rootScope.$new();a.controller&&(c=angular.element(c).attr("ng-controller",a.controller));var g=b(c)(f);return a.className&&g.addClass(a.className),g})}function l(b){this.options=b,b.show&&this.show(),this._boundHide=a.proxy(this.hide,this),this._boundPosition=a.proxy(this.position,this)}var m="qstrap-tooltip.tpl.html";return g.put(m,'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner">{{content}}</div></div>'),l.prototype={show:function(){this.hide(),this.options.anchor&&a(this.options.anchor).on("remove $destroy",this._boundHide);var b=this.tooltip?e.when(this.tooltip):this.build(),d=this._boundPosition,f=this;return b.then(function(b){return a(c[0].body).append(b),d(),f._stopWatchingHeight=b.scope().$watch(function(){return b.height()},d),b})},hide:function(){this.tooltip&&this.tooltip.detach(),this.options.anchor&&a(this.options.anchor).off("remove $destroy",this._boundHide),"function"==typeof this._stopWatchingHeight&&this._stopWatchingHeight()},position:function(){j(this.options.anchor,this.tooltip,this.options.position,this.options.adjustHeight)},build:function(){this.destroy();var a=this;return k(this.options).then(function(b){return a.tooltip=b,a.tooltip})},updateContent:function(a){if(this.options.content!==a){this.options.content=a;var b=this.tooltip&&this.tooltip.parent().length;this.destroy(),b&&this.show()}},destroy:function(){this.hide(),delete this.tooltip}},function(a){return new l(a)}}]),b.directive("qstrap.tooltip",["$timeout","qstrap.$tooltip",function(a,b){return{restrict:"A",scope:{content:"@?",position:"@?",html:"=",tooltipDisabled:"=",delay:"="},link:function(c,d,e){function f(b){return a(function(){b||j.show()},c.delay||0)}var g,h,i={html:c.html,content:c.content,position:c.position,template:e.template,anchor:d,scope:c.$parent,className:e.className},j=b(i);d.on("mouseenter touchstart",function(){h=!0,g=f(c.tooltipDisabled)}),d.on("mouseleave touchend",function(){h=!1,a.cancel(g),j.hide()});var k=[c.$watch("tooltipDisabled",function(b,c){c!==b&&(b?(a.cancel(g),j.hide()):!b&&h&&(g=f(b)))}),c.$watch(function(){return e.position+""+e.template},function(){i.position=e.position||i.position,i.template=e.template||i.template,j.build()}),c.$watch(function(){return e.content},function(){
j.updateContent(e.content)})];d.on("$destroy",function(){if(c){for(var a=k.length;a--;)k[a]();k=null,c.$destroy(),c=null,j.destroy()}})}}}])}(angular.module("qstrap.tooltip",["qstrap.position"])),function(a){"use strict";a.directive("qstrap.weekday",["$parse","qstrap._weekday",function(a,b){return{template:'<div class="qweekday-wrapper"><div ng-repeat="weekday in weekdays" class="btn qweekday" ng-class="{\'qweekday-selected\': weekday.isSelected }" ng-click="toggleWeekday(weekday)">{{::weekday.label}}</div></div>',scope:{onChange:"&?",startWithMon:"<?",selectedWeekdays:"=ngModel"},require:"ngModel",link:function(a,c,d,e){a.selectedWeekdays="object"==typeof a.selectedWeekdays?a.selectedWeekdays:{},a.startWithMon=!!a.startWithMon,angular.extend(a,{toggleWeekday:function(b){b.isSelected=!b.isSelected,a.selectedWeekdays[b.id]=b.isSelected,a.onChange&&a.onChange({$value:a.selectedWeekdays})}});a.$watchCollection("selectedWeekdays",function(b){for(var c=0;c<a.weekdays.length;c++)a.weekdays[c].isSelected=!!b[a.weekdays[c].id]});a.weekdays=b.getWeekdays(a.startWithMon,a.selectedWeekdays)}}}]).factory("qstrap._weekday",["$filter",function(a){var b={},c=["sun","mon","tue","wed","thu","fri","sat"],d={sun:"SUN_ABBR",mon:"MON_ABBR",tue:"TUE_ABBR",wed:"WED_ABBR",thu:"THU_ABBR",fri:"FRI_ABBR",sat:"SAT_ABBR"};return b.getWeekdays=function(b,e){for(var f=[],g=0;g<c.length;g++)f[g]={id:c[g],label:a("qstrapTranslate")(d[c[g]]),isSelected:!!e[c[g]]};return b&&f.push(f.shift()),f},b}])}(angular.module("qstrap.weekday",["qstrap.translate"])),{}}(jQuery);
//# sourceMappingURL=qstrap.min.js.map
/*!
 * clipboard.js v1.5.16
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Clipboard=e()}}(function(){var e,t,n;return function e(t,n,i){function o(a,c){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(r)return r(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return o(n?n:e)},u,u.exports,e,t,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(e,t,n){function i(e,t){for(;e&&e.nodeType!==o;){if(e.matches(t))return e;e=e.parentNode}}var o=9;if(Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=i},{}],2:[function(e,t,n){function i(e,t,n,i,r){var a=o.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}function o(e,t,n,i){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&i.call(e,n)}}var r=e("./closest");t.exports=i},{"./closest":1}],3:[function(e,t,n){n.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},n.nodeList=function(e){var t=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===t||"[object HTMLCollection]"===t)&&"length"in e&&(0===e.length||n.node(e[0]))},n.string=function(e){return"string"==typeof e||e instanceof String},n.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},{}],4:[function(e,t,n){function i(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!c.string(t))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(e))return o(e,t,n);if(c.nodeList(e))return r(e,t,n);if(c.string(e))return a(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function r(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function a(e,t,n){return l(document.body,e,t,n)}var c=e("./is"),l=e("delegate");t.exports=i},{"./is":3,delegate:2}],5:[function(e,t,n){function i(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName)e.focus(),e.setSelectionRange(0,e.value.length),t=e.value;else{e.hasAttribute("contenteditable")&&e.focus();var n=window.getSelection(),i=document.createRange();i.selectNodeContents(e),n.removeAllRanges(),n.addRange(i),t=n.toString()}return t}t.exports=i},{}],6:[function(e,t,n){function i(){}i.prototype={on:function(e,t,n){var i=this.e||(this.e={});return(i[e]||(i[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function i(){o.off(e,i),t.apply(n,arguments)}var o=this;return i._=t,this.on(e,i,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),i=0,o=n.length;for(i;i<o;i++)n[i].fn.apply(n[i].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),i=n[e],o=[];if(i&&t)for(var r=0,a=i.length;r<a;r++)i[r].fn!==t&&i[r].fn._!==t&&o.push(i[r]);return o.length?n[e]=o:delete n[e],this}},t.exports=i},{}],7:[function(t,n,i){!function(o,r){if("function"==typeof e&&e.amd)e(["module","select"],r);else if("undefined"!=typeof i)r(n,t("select"));else{var a={exports:{}};r(a,o.select),o.clipboardAction=a.exports}}(this,function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(t),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=function(){function e(t){i(this,e),this.resolveOptions(t),this.initSelection()}return a(e,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function e(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function e(){var t=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.addEventListener("focus",window.scrollTo(0,i)),this.fakeElem.style.top=i+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function e(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function e(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function e(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function e(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function e(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function e(){this.removeFake()}},{key:"action",set:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function e(){return this._action}},{key:"target",set:function e(t){if(void 0!==t){if(!t||"object"!==("undefined"==typeof t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function e(){return this._target}}]),e}();e.exports=c})},{select:5}],8:[function(t,n,i){!function(o,r){if("function"==typeof e&&e.amd)e(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof i)r(n,t("./clipboard-action"),t("tiny-emitter"),t("good-listener"));else{var a={exports:{}};r(a,o.clipboardAction,o.tinyEmitter,o.goodListener),o.clipboard=a.exports}}(this,function(e,t,n,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var s=o(t),u=o(n),f=o(i),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),h=function(e){function t(e,n){r(this,t);var i=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.resolveOptions(n),i.listenClick(e),i}return c(t,e),d(t,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText}},{key:"listenClick",value:function e(t){var n=this;this.listener=(0,f.default)(t,"click",function(e){return n.onClick(e)})}},{key:"onClick",value:function e(t){var n=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})}},{key:"defaultAction",value:function e(t){return l("action",t)}},{key:"defaultTarget",value:function e(t){var n=l("target",t);if(n)return document.querySelector(n)}},{key:"defaultText",value:function e(t){return l("text",t)}},{key:"destroy",value:function e(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}]),t}(u.default);e.exports=h})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});
/*! ngclipboard - v1.1.1 - 2016-02-26
* https://github.com/sachinchoolur/ngclipboard
* Copyright (c) 2016 Sachin; Licensed MIT */
!function(){"use strict";var a,b,c="ngclipboard";"object"==typeof module&&module.exports?(a=require("angular"),b=require("clipboard"),module.exports=c):(a=window.angular,b=window.Clipboard),a.module(c,[]).directive("ngclipboard",function(){return{restrict:"A",scope:{ngclipboardSuccess:"&",ngclipboardError:"&"},link:function(a,c){var d=new b(c[0]);d.on("success",function(b){a.$apply(function(){a.ngclipboardSuccess({e:b})})}),d.on("error",function(b){a.$apply(function(){a.ngclipboardError({e:b})})})}}})}();
/*
 * angular-qrcode
 * (c) 2017 Monospaced http://monospaced.com
 * License: MIT
 */

if (typeof module !== 'undefined' &&
    typeof exports !== 'undefined' &&
    module.exports === exports){
  module.exports = 'monospaced.qrcode';
}

angular.module('monospaced.qrcode', [])
  .directive('qrcode', ['$window', function($window) {

    var canvas2D = !!$window.CanvasRenderingContext2D,
        levels = {
          'L': 'Low',
          'M': 'Medium',
          'Q': 'Quartile',
          'H': 'High'
        },
        draw = function(context, qr, modules, tile, color) {
          for (var row = 0; row < modules; row++) {
            for (var col = 0; col < modules; col++) {
              var w = (Math.ceil((col + 1) * tile) - Math.floor(col * tile)),
                  h = (Math.ceil((row + 1) * tile) - Math.floor(row * tile));

              context.fillStyle = qr.isDark(row, col) ? color.foreground : color.background;
              context.fillRect(Math.round(col * tile),
                               Math.round(row * tile), w, h);
            }
          }
        };

    return {
      restrict: 'E',
      template: '<canvas class="qrcode"></canvas>',
      link: function(scope, element, attrs) {
        var domElement = element[0],
            $canvas = element.find('canvas'),
            canvas = $canvas[0],
            context = canvas2D ? canvas.getContext('2d') : null,
            download = 'download' in attrs,
            href = attrs.href,
            link = download || href ? document.createElement('a') : '',
            trim = /^\s+|\s+$/g,
            error,
            version,
            errorCorrectionLevel,
            data,
            size,
            modules,
            tile,
            qr,
            $img,
            color = {
              foreground: '#000',
              background: '#fff'
            },
            setColor = function(value) {
              color.foreground = value || color.foreground;
            },
            setBackground = function(value) {
              color.background = value || color.background;
            },
            setVersion = function(value) {
              version = Math.max(1, Math.min(parseInt(value, 10), 40)) || 5;
            },
            setErrorCorrectionLevel = function(value) {
              errorCorrectionLevel = value in levels ? value : 'M';
            },
            setData = function(value) {
              if (!value) {
                return;
              }

              data = value.replace(trim, '');
              qr = qrcode(version, errorCorrectionLevel);
              qr.addData(data);

              try {
                qr.make();
              } catch (e) {
                var newVersion;
                if (version >= 40) {
                  throw new Error('Data is too long', e);
                }
                newVersion = version + 1;
                setVersion(newVersion);
                console.warn('qrcode version is too low and has been incremented to', newVersion)
                setData(value);
                return;
              }

              error = false;
              modules = qr.getModuleCount();
            },
            setSize = function(value) {
              size = parseInt(value, 10) || modules * 2;
              tile = size / modules;
              canvas.width = canvas.height = size;
            },
            render = function() {
              if (!qr) {
                return;
              }

              if (error) {
                if (link) {
                  link.removeAttribute('download');
                  link.title = '';
                  link.href = '#_';
                }
                if (!canvas2D) {
                  domElement.innerHTML = '<img src width="' + size + '"' +
                                         'height="' + size + '"' +
                                         'class="qrcode">';
                }
                scope.$emit('qrcode:error', error);
                return;
              }

              if (download) {
                domElement.download = 'qrcode.png';
                domElement.title = 'Download QR code';
              }

              if (canvas2D) {
                draw(context, qr, modules, tile, color);

                if (download) {
                  domElement.href = canvas.toDataURL('image/png');
                  return;
                }
              } else {
                domElement.innerHTML = qr.createImgTag(tile, 0);
                $img = element.find('img');
                $img.addClass('qrcode');

                if (download) {
                  domElement.href = $img[0].src;
                  return;
                }
              }

              if (href) {
                domElement.href = href;
              }
            };

        if (link) {
          link.className = 'qrcode-link';
          $canvas.wrap(link);
          domElement = domElement.firstChild;
        }

        setColor(attrs.color);
        setBackground(attrs.background);
        setVersion(attrs.version);
        setErrorCorrectionLevel(attrs.errorCorrectionLevel);
        setSize(attrs.size);

        attrs.$observe('version', function(value) {
          if (!value) {
            return;
          }

          setVersion(value);
          setData(data);
          setSize(size);
          render();
        });

        attrs.$observe('errorCorrectionLevel', function(value) {
          if (!value) {
            return;
          }

          setErrorCorrectionLevel(value);
          setData(data);
          setSize(size);
          render();
        });

        attrs.$observe('data', function(value) {
          if (!value) {
            return;
          }

          setData(value);
          setSize(size);
          render();
        });

        attrs.$observe('size', function(value) {
          if (!value) {
            return;
          }

          setSize(value);
          render();
        });

        attrs.$observe('color', function(value) {
          if (!value) {
            return;
          }

          setColor(value);
          render();
        });

        attrs.$observe('background', function(value) {
          if (!value) {
            return;
          }

          setBackground(value);
          render();
        });

        attrs.$observe('href', function(value) {
          if (!value) {
            return;
          }

          href = value;
          render();
        });
      }
    };
  }]);

//---------------------------------------------------------------------
//
// QR Code Generator for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//  http://www.opensource.org/licenses/mit-license.php
//
// The word 'QR Code' is registered trademark of
// DENSO WAVE INCORPORATED
//  http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------

var qrcode = function() {

  //---------------------------------------------------------------------
  // qrcode
  //---------------------------------------------------------------------

  /**
   * qrcode
   * @param typeNumber 1 to 40
   * @param errorCorrectionLevel 'L','M','Q','H'
   */
  var qrcode = function(typeNumber, errorCorrectionLevel) {

    var PAD0 = 0xEC;
    var PAD1 = 0x11;

    var _typeNumber = typeNumber;
    var _errorCorrectionLevel = QRErrorCorrectionLevel[errorCorrectionLevel];
    var _modules = null;
    var _moduleCount = 0;
    var _dataCache = null;
    var _dataList = [];

    var _this = {};

    var makeImpl = function(test, maskPattern) {

      _moduleCount = _typeNumber * 4 + 17;
      _modules = function(moduleCount) {
        var modules = new Array(moduleCount);
        for (var row = 0; row < moduleCount; row += 1) {
          modules[row] = new Array(moduleCount);
          for (var col = 0; col < moduleCount; col += 1) {
            modules[row][col] = null;
          }
        }
        return modules;
      }(_moduleCount);

      setupPositionProbePattern(0, 0);
      setupPositionProbePattern(_moduleCount - 7, 0);
      setupPositionProbePattern(0, _moduleCount - 7);
      setupPositionAdjustPattern();
      setupTimingPattern();
      setupTypeInfo(test, maskPattern);

      if (_typeNumber >= 7) {
        setupTypeNumber(test);
      }

      if (_dataCache == null) {
        _dataCache = createData(_typeNumber, _errorCorrectionLevel, _dataList);
      }

      mapData(_dataCache, maskPattern);
    };

    var setupPositionProbePattern = function(row, col) {

      for (var r = -1; r <= 7; r += 1) {

        if (row + r <= -1 || _moduleCount <= row + r) continue;

        for (var c = -1; c <= 7; c += 1) {

          if (col + c <= -1 || _moduleCount <= col + c) continue;

          if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
              || (0 <= c && c <= 6 && (r == 0 || r == 6) )
              || (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
            _modules[row + r][col + c] = true;
          } else {
            _modules[row + r][col + c] = false;
          }
        }
      }
    };

    var getBestMaskPattern = function() {

      var minLostPoint = 0;
      var pattern = 0;

      for (var i = 0; i < 8; i += 1) {

        makeImpl(true, i);

        var lostPoint = QRUtil.getLostPoint(_this);

        if (i == 0 || minLostPoint > lostPoint) {
          minLostPoint = lostPoint;
          pattern = i;
        }
      }

      return pattern;
    };

    var setupTimingPattern = function() {

      for (var r = 8; r < _moduleCount - 8; r += 1) {
        if (_modules[r][6] != null) {
          continue;
        }
        _modules[r][6] = (r % 2 == 0);
      }

      for (var c = 8; c < _moduleCount - 8; c += 1) {
        if (_modules[6][c] != null) {
          continue;
        }
        _modules[6][c] = (c % 2 == 0);
      }
    };

    var setupPositionAdjustPattern = function() {

      var pos = QRUtil.getPatternPosition(_typeNumber);

      for (var i = 0; i < pos.length; i += 1) {

        for (var j = 0; j < pos.length; j += 1) {

          var row = pos[i];
          var col = pos[j];

          if (_modules[row][col] != null) {
            continue;
          }

          for (var r = -2; r <= 2; r += 1) {

            for (var c = -2; c <= 2; c += 1) {

              if (r == -2 || r == 2 || c == -2 || c == 2
                  || (r == 0 && c == 0) ) {
                _modules[row + r][col + c] = true;
              } else {
                _modules[row + r][col + c] = false;
              }
            }
          }
        }
      }
    };

    var setupTypeNumber = function(test) {

      var bits = QRUtil.getBCHTypeNumber(_typeNumber);

      for (var i = 0; i < 18; i += 1) {
        var mod = (!test && ( (bits >> i) & 1) == 1);
        _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
      }

      for (var i = 0; i < 18; i += 1) {
        var mod = (!test && ( (bits >> i) & 1) == 1);
        _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
      }
    };

    var setupTypeInfo = function(test, maskPattern) {

      var data = (_errorCorrectionLevel << 3) | maskPattern;
      var bits = QRUtil.getBCHTypeInfo(data);

      // vertical
      for (var i = 0; i < 15; i += 1) {

        var mod = (!test && ( (bits >> i) & 1) == 1);

        if (i < 6) {
          _modules[i][8] = mod;
        } else if (i < 8) {
          _modules[i + 1][8] = mod;
        } else {
          _modules[_moduleCount - 15 + i][8] = mod;
        }
      }

      // horizontal
      for (var i = 0; i < 15; i += 1) {

        var mod = (!test && ( (bits >> i) & 1) == 1);

        if (i < 8) {
          _modules[8][_moduleCount - i - 1] = mod;
        } else if (i < 9) {
          _modules[8][15 - i - 1 + 1] = mod;
        } else {
          _modules[8][15 - i - 1] = mod;
        }
      }

      // fixed module
      _modules[_moduleCount - 8][8] = (!test);
    };

    var mapData = function(data, maskPattern) {

      var inc = -1;
      var row = _moduleCount - 1;
      var bitIndex = 7;
      var byteIndex = 0;
      var maskFunc = QRUtil.getMaskFunction(maskPattern);

      for (var col = _moduleCount - 1; col > 0; col -= 2) {

        if (col == 6) col -= 1;

        while (true) {

          for (var c = 0; c < 2; c += 1) {

            if (_modules[row][col - c] == null) {

              var dark = false;

              if (byteIndex < data.length) {
                dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
              }

              var mask = maskFunc(row, col - c);

              if (mask) {
                dark = !dark;
              }

              _modules[row][col - c] = dark;
              bitIndex -= 1;

              if (bitIndex == -1) {
                byteIndex += 1;
                bitIndex = 7;
              }
            }
          }

          row += inc;

          if (row < 0 || _moduleCount <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    };

    var createBytes = function(buffer, rsBlocks) {

      var offset = 0;

      var maxDcCount = 0;
      var maxEcCount = 0;

      var dcdata = new Array(rsBlocks.length);
      var ecdata = new Array(rsBlocks.length);

      for (var r = 0; r < rsBlocks.length; r += 1) {

        var dcCount = rsBlocks[r].dataCount;
        var ecCount = rsBlocks[r].totalCount - dcCount;

        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);

        dcdata[r] = new Array(dcCount);

        for (var i = 0; i < dcdata[r].length; i += 1) {
          dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
        }
        offset += dcCount;

        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);

        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);
        for (var i = 0; i < ecdata[r].length; i += 1) {
          var modIndex = i + modPoly.getLength() - ecdata[r].length;
          ecdata[r][i] = (modIndex >= 0)? modPoly.getAt(modIndex) : 0;
        }
      }

      var totalCodeCount = 0;
      for (var i = 0; i < rsBlocks.length; i += 1) {
        totalCodeCount += rsBlocks[i].totalCount;
      }

      var data = new Array(totalCodeCount);
      var index = 0;

      for (var i = 0; i < maxDcCount; i += 1) {
        for (var r = 0; r < rsBlocks.length; r += 1) {
          if (i < dcdata[r].length) {
            data[index] = dcdata[r][i];
            index += 1;
          }
        }
      }

      for (var i = 0; i < maxEcCount; i += 1) {
        for (var r = 0; r < rsBlocks.length; r += 1) {
          if (i < ecdata[r].length) {
            data[index] = ecdata[r][i];
            index += 1;
          }
        }
      }

      return data;
    };

    var createData = function(typeNumber, errorCorrectionLevel, dataList) {

      var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectionLevel);

      var buffer = qrBitBuffer();

      for (var i = 0; i < dataList.length; i += 1) {
        var data = dataList[i];
        buffer.put(data.getMode(), 4);
        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
        data.write(buffer);
      }

      // calc num max data.
      var totalDataCount = 0;
      for (var i = 0; i < rsBlocks.length; i += 1) {
        totalDataCount += rsBlocks[i].dataCount;
      }

      if (buffer.getLengthInBits() > totalDataCount * 8) {
        throw 'code length overflow. ('
          + buffer.getLengthInBits()
          + '>'
          + totalDataCount * 8
          + ')';
      }

      // end code
      if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
        buffer.put(0, 4);
      }

      // padding
      while (buffer.getLengthInBits() % 8 != 0) {
        buffer.putBit(false);
      }

      // padding
      while (true) {

        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(PAD0, 8);

        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(PAD1, 8);
      }

      return createBytes(buffer, rsBlocks);
    };

    _this.addData = function(data, mode) {

      mode = mode || 'Byte';

      var newData = null;

      switch(mode) {
      case 'Numeric' :
        newData = qrNumber(data);
        break;
      case 'Alphanumeric' :
        newData = qrAlphaNum(data);
        break;
      case 'Byte' :
        newData = qr8BitByte(data);
        break;
      case 'Kanji' :
        newData = qrKanji(data);
        break;
      default :
        throw 'mode:' + mode;
      }

      _dataList.push(newData);
      _dataCache = null;
    };

    _this.isDark = function(row, col) {
      if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
        throw row + ',' + col;
      }
      return _modules[row][col];
    };

    _this.getModuleCount = function() {
      return _moduleCount;
    };

    _this.make = function() {
      if (_typeNumber < 1) {
        var typeNumber = 1;

        for (; typeNumber < 40; typeNumber++) {
          var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, _errorCorrectionLevel);
          var buffer = qrBitBuffer();

          for (var i = 0; i < _dataList.length; i++) {
            var data = _dataList[i];
            buffer.put(data.getMode(), 4);
            buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
            data.write(buffer);
          }

          var totalDataCount = 0;
          for (var i = 0; i < rsBlocks.length; i++) {
            totalDataCount += rsBlocks[i].dataCount;
          }

          if (buffer.getLengthInBits() <= totalDataCount * 8) {
            break;
          }
        }

        _typeNumber = typeNumber;
      }

      makeImpl(false, getBestMaskPattern() );
    };

    _this.createTableTag = function(cellSize, margin) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var qrHtml = '';

      qrHtml += '<table style="';
      qrHtml += ' border-width: 0px; border-style: none;';
      qrHtml += ' border-collapse: collapse;';
      qrHtml += ' padding: 0px; margin: ' + margin + 'px;';
      qrHtml += '">';
      qrHtml += '<tbody>';

      for (var r = 0; r < _this.getModuleCount(); r += 1) {

        qrHtml += '<tr>';

        for (var c = 0; c < _this.getModuleCount(); c += 1) {
          qrHtml += '<td style="';
          qrHtml += ' border-width: 0px; border-style: none;';
          qrHtml += ' border-collapse: collapse;';
          qrHtml += ' padding: 0px; margin: 0px;';
          qrHtml += ' width: ' + cellSize + 'px;';
          qrHtml += ' height: ' + cellSize + 'px;';
          qrHtml += ' background-color: ';
          qrHtml += _this.isDark(r, c)? '#000000' : '#ffffff';
          qrHtml += ';';
          qrHtml += '"/>';
        }

        qrHtml += '</tr>';
      }

      qrHtml += '</tbody>';
      qrHtml += '</table>';

      return qrHtml;
    };

    _this.createSvgTag = function(cellSize, margin, alt, title) {

      var opts = {};
      if (typeof arguments[0] == 'object') {
        // Called by options.
        opts = arguments[0];
        // overwrite cellSize and margin.
        cellSize = opts.cellSize;
        margin = opts.margin;
        alt = opts.alt;
        title = opts.title;
      }

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      // Compose alt property surrogate
      alt = (typeof alt === 'string') ? {text: alt} : alt || {};
      alt.text = alt.text || null;
      alt.id = (alt.text) ? alt.id || 'qrcode-description' : null;

      // Compose title property surrogate
      title = (typeof title === 'string') ? {text: title} : title || {};
      title.text = title.text || null;
      title.id = (title.text) ? title.id || 'qrcode-title' : null;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var c, mc, r, mr, qrSvg='', rect;

      rect = 'l' + cellSize + ',0 0,' + cellSize +
        ' -' + cellSize + ',0 0,-' + cellSize + 'z ';

      qrSvg += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"';
      qrSvg += !opts.scalable ? ' width="' + size + 'px" height="' + size + 'px"' : '';
      qrSvg += ' viewBox="0 0 ' + size + ' ' + size + '" ';
      qrSvg += ' preserveAspectRatio="xMinYMin meet"';
      qrSvg += (title.text || alt.text) ? ' role="img" aria-labelledby="' +
          escapeXml([title.id, alt.id].join(' ').trim() ) + '"' : '';
      qrSvg += '>';
      qrSvg += (title.text) ? '<title id="' + escapeXml(title.id) + '">' +
          escapeXml(title.text) + '</title>' : '';
      qrSvg += (alt.text) ? '<description id="' + escapeXml(alt.id) + '">' +
          escapeXml(alt.text) + '</description>' : '';
      qrSvg += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>';
      qrSvg += '<path d="';

      for (r = 0; r < _this.getModuleCount(); r += 1) {
        mr = r * cellSize + margin;
        for (c = 0; c < _this.getModuleCount(); c += 1) {
          if (_this.isDark(r, c) ) {
            mc = c*cellSize+margin;
            qrSvg += 'M' + mc + ',' + mr + rect;
          }
        }
      }

      qrSvg += '" stroke="transparent" fill="black"/>';
      qrSvg += '</svg>';

      return qrSvg;
    };

    _this.createDataURL = function(cellSize, margin) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      return createDataURL(size, size, function(x, y) {
        if (min <= x && x < max && min <= y && y < max) {
          var c = Math.floor( (x - min) / cellSize);
          var r = Math.floor( (y - min) / cellSize);
          return _this.isDark(r, c)? 0 : 1;
        } else {
          return 1;
        }
      } );
    };

    _this.createImgTag = function(cellSize, margin, alt) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;

      var img = '';
      img += '<img';
      img += '\u0020src="';
      img += _this.createDataURL(cellSize, margin);
      img += '"';
      img += '\u0020width="';
      img += size;
      img += '"';
      img += '\u0020height="';
      img += size;
      img += '"';
      if (alt) {
        img += '\u0020alt="';
        img += escapeXml(alt);
        img += '"';
      }
      img += '/>';

      return img;
    };

    var escapeXml = function(s) {
      var escaped = '';
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charAt(i);
        switch(c) {
        case '<': escaped += '&lt;'; break;
        case '>': escaped += '&gt;'; break;
        case '&': escaped += '&amp;'; break;
        case '"': escaped += '&quot;'; break;
        default : escaped += c; break;
        }
      }
      return escaped;
    };

    var _createHalfASCII = function(margin) {
      var cellSize = 1;
      margin = (typeof margin == 'undefined')? cellSize * 2 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      var y, x, r1, r2, p;

      var blocks = {
        '██': '█',
        '█ ': '▀',
        ' █': '▄',
        '  ': ' '
      };

      var blocksLastLineNoMargin = {
        '██': '▀',
        '█ ': '▀',
        ' █': ' ',
        '  ': ' '
      };

      var ascii = '';
      for (y = 0; y < size; y += 2) {
        r1 = Math.floor((y - min) / cellSize);
        r2 = Math.floor((y + 1 - min) / cellSize);
        for (x = 0; x < size; x += 1) {
          p = '█';

          if (min <= x && x < max && min <= y && y < max && _this.isDark(r1, Math.floor((x - min) / cellSize))) {
            p = ' ';
          }

          if (min <= x && x < max && min <= y+1 && y+1 < max && _this.isDark(r2, Math.floor((x - min) / cellSize))) {
            p += ' ';
          }
          else {
            p += '█';
          }

          // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
          ascii += (margin < 1 && y+1 >= max) ? blocksLastLineNoMargin[p] : blocks[p];
        }

        ascii += '\n';
      }

      if (size % 2 && margin > 0) {
        return ascii.substring(0, ascii.length - size - 1) + Array(size+1).join('▀');
      }

      return ascii.substring(0, ascii.length-1);
    };

    _this.createASCII = function(cellSize, margin) {
      cellSize = cellSize || 1;

      if (cellSize < 2) {
        return _createHalfASCII(margin);
      }

      cellSize -= 1;
      margin = (typeof margin == 'undefined')? cellSize * 2 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      var y, x, r, p;

      var white = Array(cellSize+1).join('██');
      var black = Array(cellSize+1).join('  ');

      var ascii = '';
      var line = '';
      for (y = 0; y < size; y += 1) {
        r = Math.floor( (y - min) / cellSize);
        line = '';
        for (x = 0; x < size; x += 1) {
          p = 1;

          if (min <= x && x < max && min <= y && y < max && _this.isDark(r, Math.floor((x - min) / cellSize))) {
            p = 0;
          }

          // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
          line += p ? white : black;
        }

        for (r = 0; r < cellSize; r += 1) {
          ascii += line + '\n';
        }
      }

      return ascii.substring(0, ascii.length-1);
    };

    _this.renderTo2dContext = function(context, cellSize) {
      cellSize = cellSize || 2;
      var length = _this.getModuleCount();
      for (var row = 0; row < length; row++) {
        for (var col = 0; col < length; col++) {
          context.fillStyle = _this.isDark(row, col) ? 'black' : 'white';
          context.fillRect(row * cellSize, col * cellSize, cellSize, cellSize);
        }
      }
    }

    return _this;
  };

  //---------------------------------------------------------------------
  // qrcode.stringToBytes
  //---------------------------------------------------------------------

  qrcode.stringToBytesFuncs = {
    'default' : function(s) {
      var bytes = [];
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charCodeAt(i);
        bytes.push(c & 0xff);
      }
      return bytes;
    }
  };

  qrcode.stringToBytes = qrcode.stringToBytesFuncs['default'];

  //---------------------------------------------------------------------
  // qrcode.createStringToBytes
  //---------------------------------------------------------------------

  /**
   * @param unicodeData base64 string of byte array.
   * [16bit Unicode],[16bit Bytes], ...
   * @param numChars
   */
  qrcode.createStringToBytes = function(unicodeData, numChars) {

    // create conversion map.

    var unicodeMap = function() {

      var bin = base64DecodeInputStream(unicodeData);
      var read = function() {
        var b = bin.read();
        if (b == -1) throw 'eof';
        return b;
      };

      var count = 0;
      var unicodeMap = {};
      while (true) {
        var b0 = bin.read();
        if (b0 == -1) break;
        var b1 = read();
        var b2 = read();
        var b3 = read();
        var k = String.fromCharCode( (b0 << 8) | b1);
        var v = (b2 << 8) | b3;
        unicodeMap[k] = v;
        count += 1;
      }
      if (count != numChars) {
        throw count + ' != ' + numChars;
      }

      return unicodeMap;
    }();

    var unknownChar = '?'.charCodeAt(0);

    return function(s) {
      var bytes = [];
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charCodeAt(i);
        if (c < 128) {
          bytes.push(c);
        } else {
          var b = unicodeMap[s.charAt(i)];
          if (typeof b == 'number') {
            if ( (b & 0xff) == b) {
              // 1byte
              bytes.push(b);
            } else {
              // 2bytes
              bytes.push(b >>> 8);
              bytes.push(b & 0xff);
            }
          } else {
            bytes.push(unknownChar);
          }
        }
      }
      return bytes;
    };
  };

  //---------------------------------------------------------------------
  // QRMode
  //---------------------------------------------------------------------

  var QRMode = {
    MODE_NUMBER :    1 << 0,
    MODE_ALPHA_NUM : 1 << 1,
    MODE_8BIT_BYTE : 1 << 2,
    MODE_KANJI :     1 << 3
  };

  //---------------------------------------------------------------------
  // QRErrorCorrectionLevel
  //---------------------------------------------------------------------

  var QRErrorCorrectionLevel = {
    L : 1,
    M : 0,
    Q : 3,
    H : 2
  };

  //---------------------------------------------------------------------
  // QRMaskPattern
  //---------------------------------------------------------------------

  var QRMaskPattern = {
    PATTERN000 : 0,
    PATTERN001 : 1,
    PATTERN010 : 2,
    PATTERN011 : 3,
    PATTERN100 : 4,
    PATTERN101 : 5,
    PATTERN110 : 6,
    PATTERN111 : 7
  };

  //---------------------------------------------------------------------
  // QRUtil
  //---------------------------------------------------------------------

  var QRUtil = function() {

    var PATTERN_POSITION_TABLE = [
      [],
      [6, 18],
      [6, 22],
      [6, 26],
      [6, 30],
      [6, 34],
      [6, 22, 38],
      [6, 24, 42],
      [6, 26, 46],
      [6, 28, 50],
      [6, 30, 54],
      [6, 32, 58],
      [6, 34, 62],
      [6, 26, 46, 66],
      [6, 26, 48, 70],
      [6, 26, 50, 74],
      [6, 30, 54, 78],
      [6, 30, 56, 82],
      [6, 30, 58, 86],
      [6, 34, 62, 90],
      [6, 28, 50, 72, 94],
      [6, 26, 50, 74, 98],
      [6, 30, 54, 78, 102],
      [6, 28, 54, 80, 106],
      [6, 32, 58, 84, 110],
      [6, 30, 58, 86, 114],
      [6, 34, 62, 90, 118],
      [6, 26, 50, 74, 98, 122],
      [6, 30, 54, 78, 102, 126],
      [6, 26, 52, 78, 104, 130],
      [6, 30, 56, 82, 108, 134],
      [6, 34, 60, 86, 112, 138],
      [6, 30, 58, 86, 114, 142],
      [6, 34, 62, 90, 118, 146],
      [6, 30, 54, 78, 102, 126, 150],
      [6, 24, 50, 76, 102, 128, 154],
      [6, 28, 54, 80, 106, 132, 158],
      [6, 32, 58, 84, 110, 136, 162],
      [6, 26, 54, 82, 110, 138, 166],
      [6, 30, 58, 86, 114, 142, 170]
    ];
    var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
    var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
    var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);

    var _this = {};

    var getBCHDigit = function(data) {
      var digit = 0;
      while (data != 0) {
        digit += 1;
        data >>>= 1;
      }
      return digit;
    };

    _this.getBCHTypeInfo = function(data) {
      var d = data << 10;
      while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
        d ^= (G15 << (getBCHDigit(d) - getBCHDigit(G15) ) );
      }
      return ( (data << 10) | d) ^ G15_MASK;
    };

    _this.getBCHTypeNumber = function(data) {
      var d = data << 12;
      while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
        d ^= (G18 << (getBCHDigit(d) - getBCHDigit(G18) ) );
      }
      return (data << 12) | d;
    };

    _this.getPatternPosition = function(typeNumber) {
      return PATTERN_POSITION_TABLE[typeNumber - 1];
    };

    _this.getMaskFunction = function(maskPattern) {

      switch (maskPattern) {

      case QRMaskPattern.PATTERN000 :
        return function(i, j) { return (i + j) % 2 == 0; };
      case QRMaskPattern.PATTERN001 :
        return function(i, j) { return i % 2 == 0; };
      case QRMaskPattern.PATTERN010 :
        return function(i, j) { return j % 3 == 0; };
      case QRMaskPattern.PATTERN011 :
        return function(i, j) { return (i + j) % 3 == 0; };
      case QRMaskPattern.PATTERN100 :
        return function(i, j) { return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0; };
      case QRMaskPattern.PATTERN101 :
        return function(i, j) { return (i * j) % 2 + (i * j) % 3 == 0; };
      case QRMaskPattern.PATTERN110 :
        return function(i, j) { return ( (i * j) % 2 + (i * j) % 3) % 2 == 0; };
      case QRMaskPattern.PATTERN111 :
        return function(i, j) { return ( (i * j) % 3 + (i + j) % 2) % 2 == 0; };

      default :
        throw 'bad maskPattern:' + maskPattern;
      }
    };

    _this.getErrorCorrectPolynomial = function(errorCorrectLength) {
      var a = qrPolynomial([1], 0);
      for (var i = 0; i < errorCorrectLength; i += 1) {
        a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0) );
      }
      return a;
    };

    _this.getLengthInBits = function(mode, type) {

      if (1 <= type && type < 10) {

        // 1 - 9

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 10;
        case QRMode.MODE_ALPHA_NUM : return 9;
        case QRMode.MODE_8BIT_BYTE : return 8;
        case QRMode.MODE_KANJI     : return 8;
        default :
          throw 'mode:' + mode;
        }

      } else if (type < 27) {

        // 10 - 26

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 12;
        case QRMode.MODE_ALPHA_NUM : return 11;
        case QRMode.MODE_8BIT_BYTE : return 16;
        case QRMode.MODE_KANJI     : return 10;
        default :
          throw 'mode:' + mode;
        }

      } else if (type < 41) {

        // 27 - 40

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 14;
        case QRMode.MODE_ALPHA_NUM : return 13;
        case QRMode.MODE_8BIT_BYTE : return 16;
        case QRMode.MODE_KANJI     : return 12;
        default :
          throw 'mode:' + mode;
        }

      } else {
        throw 'type:' + type;
      }
    };

    _this.getLostPoint = function(qrcode) {

      var moduleCount = qrcode.getModuleCount();

      var lostPoint = 0;

      // LEVEL1

      for (var row = 0; row < moduleCount; row += 1) {
        for (var col = 0; col < moduleCount; col += 1) {

          var sameCount = 0;
          var dark = qrcode.isDark(row, col);

          for (var r = -1; r <= 1; r += 1) {

            if (row + r < 0 || moduleCount <= row + r) {
              continue;
            }

            for (var c = -1; c <= 1; c += 1) {

              if (col + c < 0 || moduleCount <= col + c) {
                continue;
              }

              if (r == 0 && c == 0) {
                continue;
              }

              if (dark == qrcode.isDark(row + r, col + c) ) {
                sameCount += 1;
              }
            }
          }

          if (sameCount > 5) {
            lostPoint += (3 + sameCount - 5);
          }
        }
      };

      // LEVEL2

      for (var row = 0; row < moduleCount - 1; row += 1) {
        for (var col = 0; col < moduleCount - 1; col += 1) {
          var count = 0;
          if (qrcode.isDark(row, col) ) count += 1;
          if (qrcode.isDark(row + 1, col) ) count += 1;
          if (qrcode.isDark(row, col + 1) ) count += 1;
          if (qrcode.isDark(row + 1, col + 1) ) count += 1;
          if (count == 0 || count == 4) {
            lostPoint += 3;
          }
        }
      }

      // LEVEL3

      for (var row = 0; row < moduleCount; row += 1) {
        for (var col = 0; col < moduleCount - 6; col += 1) {
          if (qrcode.isDark(row, col)
              && !qrcode.isDark(row, col + 1)
              &&  qrcode.isDark(row, col + 2)
              &&  qrcode.isDark(row, col + 3)
              &&  qrcode.isDark(row, col + 4)
              && !qrcode.isDark(row, col + 5)
              &&  qrcode.isDark(row, col + 6) ) {
            lostPoint += 40;
          }
        }
      }

      for (var col = 0; col < moduleCount; col += 1) {
        for (var row = 0; row < moduleCount - 6; row += 1) {
          if (qrcode.isDark(row, col)
              && !qrcode.isDark(row + 1, col)
              &&  qrcode.isDark(row + 2, col)
              &&  qrcode.isDark(row + 3, col)
              &&  qrcode.isDark(row + 4, col)
              && !qrcode.isDark(row + 5, col)
              &&  qrcode.isDark(row + 6, col) ) {
            lostPoint += 40;
          }
        }
      }

      // LEVEL4

      var darkCount = 0;

      for (var col = 0; col < moduleCount; col += 1) {
        for (var row = 0; row < moduleCount; row += 1) {
          if (qrcode.isDark(row, col) ) {
            darkCount += 1;
          }
        }
      }

      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;

      return lostPoint;
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // QRMath
  //---------------------------------------------------------------------

  var QRMath = function() {

    var EXP_TABLE = new Array(256);
    var LOG_TABLE = new Array(256);

    // initialize tables
    for (var i = 0; i < 8; i += 1) {
      EXP_TABLE[i] = 1 << i;
    }
    for (var i = 8; i < 256; i += 1) {
      EXP_TABLE[i] = EXP_TABLE[i - 4]
        ^ EXP_TABLE[i - 5]
        ^ EXP_TABLE[i - 6]
        ^ EXP_TABLE[i - 8];
    }
    for (var i = 0; i < 255; i += 1) {
      LOG_TABLE[EXP_TABLE[i] ] = i;
    }

    var _this = {};

    _this.glog = function(n) {

      if (n < 1) {
        throw 'glog(' + n + ')';
      }

      return LOG_TABLE[n];
    };

    _this.gexp = function(n) {

      while (n < 0) {
        n += 255;
      }

      while (n >= 256) {
        n -= 255;
      }

      return EXP_TABLE[n];
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // qrPolynomial
  //---------------------------------------------------------------------

  function qrPolynomial(num, shift) {

    if (typeof num.length == 'undefined') {
      throw num.length + '/' + shift;
    }

    var _num = function() {
      var offset = 0;
      while (offset < num.length && num[offset] == 0) {
        offset += 1;
      }
      var _num = new Array(num.length - offset + shift);
      for (var i = 0; i < num.length - offset; i += 1) {
        _num[i] = num[i + offset];
      }
      return _num;
    }();

    var _this = {};

    _this.getAt = function(index) {
      return _num[index];
    };

    _this.getLength = function() {
      return _num.length;
    };

    _this.multiply = function(e) {

      var num = new Array(_this.getLength() + e.getLength() - 1);

      for (var i = 0; i < _this.getLength(); i += 1) {
        for (var j = 0; j < e.getLength(); j += 1) {
          num[i + j] ^= QRMath.gexp(QRMath.glog(_this.getAt(i) ) + QRMath.glog(e.getAt(j) ) );
        }
      }

      return qrPolynomial(num, 0);
    };

    _this.mod = function(e) {

      if (_this.getLength() - e.getLength() < 0) {
        return _this;
      }

      var ratio = QRMath.glog(_this.getAt(0) ) - QRMath.glog(e.getAt(0) );

      var num = new Array(_this.getLength() );
      for (var i = 0; i < _this.getLength(); i += 1) {
        num[i] = _this.getAt(i);
      }

      for (var i = 0; i < e.getLength(); i += 1) {
        num[i] ^= QRMath.gexp(QRMath.glog(e.getAt(i) ) + ratio);
      }

      // recursive call
      return qrPolynomial(num, 0).mod(e);
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // QRRSBlock
  //---------------------------------------------------------------------

  var QRRSBlock = function() {

    var RS_BLOCK_TABLE = [

      // L
      // M
      // Q
      // H

      // 1
      [1, 26, 19],
      [1, 26, 16],
      [1, 26, 13],
      [1, 26, 9],

      // 2
      [1, 44, 34],
      [1, 44, 28],
      [1, 44, 22],
      [1, 44, 16],

      // 3
      [1, 70, 55],
      [1, 70, 44],
      [2, 35, 17],
      [2, 35, 13],

      // 4
      [1, 100, 80],
      [2, 50, 32],
      [2, 50, 24],
      [4, 25, 9],

      // 5
      [1, 134, 108],
      [2, 67, 43],
      [2, 33, 15, 2, 34, 16],
      [2, 33, 11, 2, 34, 12],

      // 6
      [2, 86, 68],
      [4, 43, 27],
      [4, 43, 19],
      [4, 43, 15],

      // 7
      [2, 98, 78],
      [4, 49, 31],
      [2, 32, 14, 4, 33, 15],
      [4, 39, 13, 1, 40, 14],

      // 8
      [2, 121, 97],
      [2, 60, 38, 2, 61, 39],
      [4, 40, 18, 2, 41, 19],
      [4, 40, 14, 2, 41, 15],

      // 9
      [2, 146, 116],
      [3, 58, 36, 2, 59, 37],
      [4, 36, 16, 4, 37, 17],
      [4, 36, 12, 4, 37, 13],

      // 10
      [2, 86, 68, 2, 87, 69],
      [4, 69, 43, 1, 70, 44],
      [6, 43, 19, 2, 44, 20],
      [6, 43, 15, 2, 44, 16],

      // 11
      [4, 101, 81],
      [1, 80, 50, 4, 81, 51],
      [4, 50, 22, 4, 51, 23],
      [3, 36, 12, 8, 37, 13],

      // 12
      [2, 116, 92, 2, 117, 93],
      [6, 58, 36, 2, 59, 37],
      [4, 46, 20, 6, 47, 21],
      [7, 42, 14, 4, 43, 15],

      // 13
      [4, 133, 107],
      [8, 59, 37, 1, 60, 38],
      [8, 44, 20, 4, 45, 21],
      [12, 33, 11, 4, 34, 12],

      // 14
      [3, 145, 115, 1, 146, 116],
      [4, 64, 40, 5, 65, 41],
      [11, 36, 16, 5, 37, 17],
      [11, 36, 12, 5, 37, 13],

      // 15
      [5, 109, 87, 1, 110, 88],
      [5, 65, 41, 5, 66, 42],
      [5, 54, 24, 7, 55, 25],
      [11, 36, 12, 7, 37, 13],

      // 16
      [5, 122, 98, 1, 123, 99],
      [7, 73, 45, 3, 74, 46],
      [15, 43, 19, 2, 44, 20],
      [3, 45, 15, 13, 46, 16],

      // 17
      [1, 135, 107, 5, 136, 108],
      [10, 74, 46, 1, 75, 47],
      [1, 50, 22, 15, 51, 23],
      [2, 42, 14, 17, 43, 15],

      // 18
      [5, 150, 120, 1, 151, 121],
      [9, 69, 43, 4, 70, 44],
      [17, 50, 22, 1, 51, 23],
      [2, 42, 14, 19, 43, 15],

      // 19
      [3, 141, 113, 4, 142, 114],
      [3, 70, 44, 11, 71, 45],
      [17, 47, 21, 4, 48, 22],
      [9, 39, 13, 16, 40, 14],

      // 20
      [3, 135, 107, 5, 136, 108],
      [3, 67, 41, 13, 68, 42],
      [15, 54, 24, 5, 55, 25],
      [15, 43, 15, 10, 44, 16],

      // 21
      [4, 144, 116, 4, 145, 117],
      [17, 68, 42],
      [17, 50, 22, 6, 51, 23],
      [19, 46, 16, 6, 47, 17],

      // 22
      [2, 139, 111, 7, 140, 112],
      [17, 74, 46],
      [7, 54, 24, 16, 55, 25],
      [34, 37, 13],

      // 23
      [4, 151, 121, 5, 152, 122],
      [4, 75, 47, 14, 76, 48],
      [11, 54, 24, 14, 55, 25],
      [16, 45, 15, 14, 46, 16],

      // 24
      [6, 147, 117, 4, 148, 118],
      [6, 73, 45, 14, 74, 46],
      [11, 54, 24, 16, 55, 25],
      [30, 46, 16, 2, 47, 17],

      // 25
      [8, 132, 106, 4, 133, 107],
      [8, 75, 47, 13, 76, 48],
      [7, 54, 24, 22, 55, 25],
      [22, 45, 15, 13, 46, 16],

      // 26
      [10, 142, 114, 2, 143, 115],
      [19, 74, 46, 4, 75, 47],
      [28, 50, 22, 6, 51, 23],
      [33, 46, 16, 4, 47, 17],

      // 27
      [8, 152, 122, 4, 153, 123],
      [22, 73, 45, 3, 74, 46],
      [8, 53, 23, 26, 54, 24],
      [12, 45, 15, 28, 46, 16],

      // 28
      [3, 147, 117, 10, 148, 118],
      [3, 73, 45, 23, 74, 46],
      [4, 54, 24, 31, 55, 25],
      [11, 45, 15, 31, 46, 16],

      // 29
      [7, 146, 116, 7, 147, 117],
      [21, 73, 45, 7, 74, 46],
      [1, 53, 23, 37, 54, 24],
      [19, 45, 15, 26, 46, 16],

      // 30
      [5, 145, 115, 10, 146, 116],
      [19, 75, 47, 10, 76, 48],
      [15, 54, 24, 25, 55, 25],
      [23, 45, 15, 25, 46, 16],

      // 31
      [13, 145, 115, 3, 146, 116],
      [2, 74, 46, 29, 75, 47],
      [42, 54, 24, 1, 55, 25],
      [23, 45, 15, 28, 46, 16],

      // 32
      [17, 145, 115],
      [10, 74, 46, 23, 75, 47],
      [10, 54, 24, 35, 55, 25],
      [19, 45, 15, 35, 46, 16],

      // 33
      [17, 145, 115, 1, 146, 116],
      [14, 74, 46, 21, 75, 47],
      [29, 54, 24, 19, 55, 25],
      [11, 45, 15, 46, 46, 16],

      // 34
      [13, 145, 115, 6, 146, 116],
      [14, 74, 46, 23, 75, 47],
      [44, 54, 24, 7, 55, 25],
      [59, 46, 16, 1, 47, 17],

      // 35
      [12, 151, 121, 7, 152, 122],
      [12, 75, 47, 26, 76, 48],
      [39, 54, 24, 14, 55, 25],
      [22, 45, 15, 41, 46, 16],

      // 36
      [6, 151, 121, 14, 152, 122],
      [6, 75, 47, 34, 76, 48],
      [46, 54, 24, 10, 55, 25],
      [2, 45, 15, 64, 46, 16],

      // 37
      [17, 152, 122, 4, 153, 123],
      [29, 74, 46, 14, 75, 47],
      [49, 54, 24, 10, 55, 25],
      [24, 45, 15, 46, 46, 16],

      // 38
      [4, 152, 122, 18, 153, 123],
      [13, 74, 46, 32, 75, 47],
      [48, 54, 24, 14, 55, 25],
      [42, 45, 15, 32, 46, 16],

      // 39
      [20, 147, 117, 4, 148, 118],
      [40, 75, 47, 7, 76, 48],
      [43, 54, 24, 22, 55, 25],
      [10, 45, 15, 67, 46, 16],

      // 40
      [19, 148, 118, 6, 149, 119],
      [18, 75, 47, 31, 76, 48],
      [34, 54, 24, 34, 55, 25],
      [20, 45, 15, 61, 46, 16]
    ];

    var qrRSBlock = function(totalCount, dataCount) {
      var _this = {};
      _this.totalCount = totalCount;
      _this.dataCount = dataCount;
      return _this;
    };

    var _this = {};

    var getRsBlockTable = function(typeNumber, errorCorrectionLevel) {

      switch(errorCorrectionLevel) {
      case QRErrorCorrectionLevel.L :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
      case QRErrorCorrectionLevel.M :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
      case QRErrorCorrectionLevel.Q :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
      case QRErrorCorrectionLevel.H :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
      default :
        return undefined;
      }
    };

    _this.getRSBlocks = function(typeNumber, errorCorrectionLevel) {

      var rsBlock = getRsBlockTable(typeNumber, errorCorrectionLevel);

      if (typeof rsBlock == 'undefined') {
        throw 'bad rs block @ typeNumber:' + typeNumber +
            '/errorCorrectionLevel:' + errorCorrectionLevel;
      }

      var length = rsBlock.length / 3;

      var list = [];

      for (var i = 0; i < length; i += 1) {

        var count = rsBlock[i * 3 + 0];
        var totalCount = rsBlock[i * 3 + 1];
        var dataCount = rsBlock[i * 3 + 2];

        for (var j = 0; j < count; j += 1) {
          list.push(qrRSBlock(totalCount, dataCount) );
        }
      }

      return list;
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // qrBitBuffer
  //---------------------------------------------------------------------

  var qrBitBuffer = function() {

    var _buffer = [];
    var _length = 0;

    var _this = {};

    _this.getBuffer = function() {
      return _buffer;
    };

    _this.getAt = function(index) {
      var bufIndex = Math.floor(index / 8);
      return ( (_buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
    };

    _this.put = function(num, length) {
      for (var i = 0; i < length; i += 1) {
        _this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
      }
    };

    _this.getLengthInBits = function() {
      return _length;
    };

    _this.putBit = function(bit) {

      var bufIndex = Math.floor(_length / 8);
      if (_buffer.length <= bufIndex) {
        _buffer.push(0);
      }

      if (bit) {
        _buffer[bufIndex] |= (0x80 >>> (_length % 8) );
      }

      _length += 1;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrNumber
  //---------------------------------------------------------------------

  var qrNumber = function(data) {

    var _mode = QRMode.MODE_NUMBER;
    var _data = data;

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _data.length;
    };

    _this.write = function(buffer) {

      var data = _data;

      var i = 0;

      while (i + 2 < data.length) {
        buffer.put(strToNum(data.substring(i, i + 3) ), 10);
        i += 3;
      }

      if (i < data.length) {
        if (data.length - i == 1) {
          buffer.put(strToNum(data.substring(i, i + 1) ), 4);
        } else if (data.length - i == 2) {
          buffer.put(strToNum(data.substring(i, i + 2) ), 7);
        }
      }
    };

    var strToNum = function(s) {
      var num = 0;
      for (var i = 0; i < s.length; i += 1) {
        num = num * 10 + chatToNum(s.charAt(i) );
      }
      return num;
    };

    var chatToNum = function(c) {
      if ('0' <= c && c <= '9') {
        return c.charCodeAt(0) - '0'.charCodeAt(0);
      }
      throw 'illegal char :' + c;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrAlphaNum
  //---------------------------------------------------------------------

  var qrAlphaNum = function(data) {

    var _mode = QRMode.MODE_ALPHA_NUM;
    var _data = data;

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _data.length;
    };

    _this.write = function(buffer) {

      var s = _data;

      var i = 0;

      while (i + 1 < s.length) {
        buffer.put(
          getCode(s.charAt(i) ) * 45 +
          getCode(s.charAt(i + 1) ), 11);
        i += 2;
      }

      if (i < s.length) {
        buffer.put(getCode(s.charAt(i) ), 6);
      }
    };

    var getCode = function(c) {

      if ('0' <= c && c <= '9') {
        return c.charCodeAt(0) - '0'.charCodeAt(0);
      } else if ('A' <= c && c <= 'Z') {
        return c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
      } else {
        switch (c) {
        case ' ' : return 36;
        case '$' : return 37;
        case '%' : return 38;
        case '*' : return 39;
        case '+' : return 40;
        case '-' : return 41;
        case '.' : return 42;
        case '/' : return 43;
        case ':' : return 44;
        default :
          throw 'illegal char :' + c;
        }
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qr8BitByte
  //---------------------------------------------------------------------

  var qr8BitByte = function(data) {

    var _mode = QRMode.MODE_8BIT_BYTE;
    var _data = data;
    var _bytes = qrcode.stringToBytes(data);

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _bytes.length;
    };

    _this.write = function(buffer) {
      for (var i = 0; i < _bytes.length; i += 1) {
        buffer.put(_bytes[i], 8);
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrKanji
  //---------------------------------------------------------------------

  var qrKanji = function(data) {

    var _mode = QRMode.MODE_KANJI;
    var _data = data;

    var stringToBytes = qrcode.stringToBytesFuncs['SJIS'];
    if (!stringToBytes) {
      throw 'sjis not supported.';
    }
    !function(c, code) {
      // self test for sjis support.
      var test = stringToBytes(c);
      if (test.length != 2 || ( (test[0] << 8) | test[1]) != code) {
        throw 'sjis not supported.';
      }
    }('\u53cb', 0x9746);

    var _bytes = stringToBytes(data);

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return ~~(_bytes.length / 2);
    };

    _this.write = function(buffer) {

      var data = _bytes;

      var i = 0;

      while (i + 1 < data.length) {

        var c = ( (0xff & data[i]) << 8) | (0xff & data[i + 1]);

        if (0x8140 <= c && c <= 0x9FFC) {
          c -= 0x8140;
        } else if (0xE040 <= c && c <= 0xEBBF) {
          c -= 0xC140;
        } else {
          throw 'illegal char at ' + (i + 1) + '/' + c;
        }

        c = ( (c >>> 8) & 0xff) * 0xC0 + (c & 0xff);

        buffer.put(c, 13);

        i += 2;
      }

      if (i < data.length) {
        throw 'illegal char at ' + (i + 1);
      }
    };

    return _this;
  };

  //=====================================================================
  // GIF Support etc.
  //

  //---------------------------------------------------------------------
  // byteArrayOutputStream
  //---------------------------------------------------------------------

  var byteArrayOutputStream = function() {

    var _bytes = [];

    var _this = {};

    _this.writeByte = function(b) {
      _bytes.push(b & 0xff);
    };

    _this.writeShort = function(i) {
      _this.writeByte(i);
      _this.writeByte(i >>> 8);
    };

    _this.writeBytes = function(b, off, len) {
      off = off || 0;
      len = len || b.length;
      for (var i = 0; i < len; i += 1) {
        _this.writeByte(b[i + off]);
      }
    };

    _this.writeString = function(s) {
      for (var i = 0; i < s.length; i += 1) {
        _this.writeByte(s.charCodeAt(i) );
      }
    };

    _this.toByteArray = function() {
      return _bytes;
    };

    _this.toString = function() {
      var s = '';
      s += '[';
      for (var i = 0; i < _bytes.length; i += 1) {
        if (i > 0) {
          s += ',';
        }
        s += _bytes[i];
      }
      s += ']';
      return s;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // base64EncodeOutputStream
  //---------------------------------------------------------------------

  var base64EncodeOutputStream = function() {

    var _buffer = 0;
    var _buflen = 0;
    var _length = 0;
    var _base64 = '';

    var _this = {};

    var writeEncoded = function(b) {
      _base64 += String.fromCharCode(encode(b & 0x3f) );
    };

    var encode = function(n) {
      if (n < 0) {
        // error.
      } else if (n < 26) {
        return 0x41 + n;
      } else if (n < 52) {
        return 0x61 + (n - 26);
      } else if (n < 62) {
        return 0x30 + (n - 52);
      } else if (n == 62) {
        return 0x2b;
      } else if (n == 63) {
        return 0x2f;
      }
      throw 'n:' + n;
    };

    _this.writeByte = function(n) {

      _buffer = (_buffer << 8) | (n & 0xff);
      _buflen += 8;
      _length += 1;

      while (_buflen >= 6) {
        writeEncoded(_buffer >>> (_buflen - 6) );
        _buflen -= 6;
      }
    };

    _this.flush = function() {

      if (_buflen > 0) {
        writeEncoded(_buffer << (6 - _buflen) );
        _buffer = 0;
        _buflen = 0;
      }

      if (_length % 3 != 0) {
        // padding
        var padlen = 3 - _length % 3;
        for (var i = 0; i < padlen; i += 1) {
          _base64 += '=';
        }
      }
    };

    _this.toString = function() {
      return _base64;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // base64DecodeInputStream
  //---------------------------------------------------------------------

  var base64DecodeInputStream = function(str) {

    var _str = str;
    var _pos = 0;
    var _buffer = 0;
    var _buflen = 0;

    var _this = {};

    _this.read = function() {

      while (_buflen < 8) {

        if (_pos >= _str.length) {
          if (_buflen == 0) {
            return -1;
          }
          throw 'unexpected end of file./' + _buflen;
        }

        var c = _str.charAt(_pos);
        _pos += 1;

        if (c == '=') {
          _buflen = 0;
          return -1;
        } else if (c.match(/^\s$/) ) {
          // ignore if whitespace.
          continue;
        }

        _buffer = (_buffer << 6) | decode(c.charCodeAt(0) );
        _buflen += 6;
      }

      var n = (_buffer >>> (_buflen - 8) ) & 0xff;
      _buflen -= 8;
      return n;
    };

    var decode = function(c) {
      if (0x41 <= c && c <= 0x5a) {
        return c - 0x41;
      } else if (0x61 <= c && c <= 0x7a) {
        return c - 0x61 + 26;
      } else if (0x30 <= c && c <= 0x39) {
        return c - 0x30 + 52;
      } else if (c == 0x2b) {
        return 62;
      } else if (c == 0x2f) {
        return 63;
      } else {
        throw 'c:' + c;
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // gifImage (B/W)
  //---------------------------------------------------------------------

  var gifImage = function(width, height) {

    var _width = width;
    var _height = height;
    var _data = new Array(width * height);

    var _this = {};

    _this.setPixel = function(x, y, pixel) {
      _data[y * _width + x] = pixel;
    };

    _this.write = function(out) {

      //---------------------------------
      // GIF Signature

      out.writeString('GIF87a');

      //---------------------------------
      // Screen Descriptor

      out.writeShort(_width);
      out.writeShort(_height);

      out.writeByte(0x80); // 2bit
      out.writeByte(0);
      out.writeByte(0);

      //---------------------------------
      // Global Color Map

      // black
      out.writeByte(0x00);
      out.writeByte(0x00);
      out.writeByte(0x00);

      // white
      out.writeByte(0xff);
      out.writeByte(0xff);
      out.writeByte(0xff);

      //---------------------------------
      // Image Descriptor

      out.writeString(',');
      out.writeShort(0);
      out.writeShort(0);
      out.writeShort(_width);
      out.writeShort(_height);
      out.writeByte(0);

      //---------------------------------
      // Local Color Map

      //---------------------------------
      // Raster Data

      var lzwMinCodeSize = 2;
      var raster = getLZWRaster(lzwMinCodeSize);

      out.writeByte(lzwMinCodeSize);

      var offset = 0;

      while (raster.length - offset > 255) {
        out.writeByte(255);
        out.writeBytes(raster, offset, 255);
        offset += 255;
      }

      out.writeByte(raster.length - offset);
      out.writeBytes(raster, offset, raster.length - offset);
      out.writeByte(0x00);

      //---------------------------------
      // GIF Terminator
      out.writeString(';');
    };

    var bitOutputStream = function(out) {

      var _out = out;
      var _bitLength = 0;
      var _bitBuffer = 0;

      var _this = {};

      _this.write = function(data, length) {

        if ( (data >>> length) != 0) {
          throw 'length over';
        }

        while (_bitLength + length >= 8) {
          _out.writeByte(0xff & ( (data << _bitLength) | _bitBuffer) );
          length -= (8 - _bitLength);
          data >>>= (8 - _bitLength);
          _bitBuffer = 0;
          _bitLength = 0;
        }

        _bitBuffer = (data << _bitLength) | _bitBuffer;
        _bitLength = _bitLength + length;
      };

      _this.flush = function() {
        if (_bitLength > 0) {
          _out.writeByte(_bitBuffer);
        }
      };

      return _this;
    };

    var getLZWRaster = function(lzwMinCodeSize) {

      var clearCode = 1 << lzwMinCodeSize;
      var endCode = (1 << lzwMinCodeSize) + 1;
      var bitLength = lzwMinCodeSize + 1;

      // Setup LZWTable
      var table = lzwTable();

      for (var i = 0; i < clearCode; i += 1) {
        table.add(String.fromCharCode(i) );
      }
      table.add(String.fromCharCode(clearCode) );
      table.add(String.fromCharCode(endCode) );

      var byteOut = byteArrayOutputStream();
      var bitOut = bitOutputStream(byteOut);

      // clear code
      bitOut.write(clearCode, bitLength);

      var dataIndex = 0;

      var s = String.fromCharCode(_data[dataIndex]);
      dataIndex += 1;

      while (dataIndex < _data.length) {

        var c = String.fromCharCode(_data[dataIndex]);
        dataIndex += 1;

        if (table.contains(s + c) ) {

          s = s + c;

        } else {

          bitOut.write(table.indexOf(s), bitLength);

          if (table.size() < 0xfff) {

            if (table.size() == (1 << bitLength) ) {
              bitLength += 1;
            }

            table.add(s + c);
          }

          s = c;
        }
      }

      bitOut.write(table.indexOf(s), bitLength);

      // end code
      bitOut.write(endCode, bitLength);

      bitOut.flush();

      return byteOut.toByteArray();
    };

    var lzwTable = function() {

      var _map = {};
      var _size = 0;

      var _this = {};

      _this.add = function(key) {
        if (_this.contains(key) ) {
          throw 'dup key:' + key;
        }
        _map[key] = _size;
        _size += 1;
      };

      _this.size = function() {
        return _size;
      };

      _this.indexOf = function(key) {
        return _map[key];
      };

      _this.contains = function(key) {
        return typeof _map[key] != 'undefined';
      };

      return _this;
    };

    return _this;
  };

  var createDataURL = function(width, height, getPixel) {
    var gif = gifImage(width, height);
    for (var y = 0; y < height; y += 1) {
      for (var x = 0; x < width; x += 1) {
        gif.setPixel(x, y, getPixel(x, y) );
      }
    }

    var b = byteArrayOutputStream();
    gif.write(b);

    var base64 = base64EncodeOutputStream();
    var bytes = b.toByteArray();
    for (var i = 0; i < bytes.length; i += 1) {
      base64.writeByte(bytes[i]);
    }
    base64.flush();

    return 'data:image/gif;base64,' + base64;
  };

  //---------------------------------------------------------------------
  // returns qrcode function.

  return qrcode;
}();

// multibyte support
!function() {

  qrcode.stringToBytesFuncs['UTF-8'] = function(s) {
    // http://stackoverflow.com/questions/18729405/how-to-convert-utf8-string-to-byte-array
    function toUTF8Array(str) {
      var utf8 = [];
      for (var i=0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
          utf8.push(0xc0 | (charcode >> 6),
              0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
          utf8.push(0xe0 | (charcode >> 12),
              0x80 | ((charcode>>6) & 0x3f),
              0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
          i++;
          // UTF-16 encodes 0x10000-0x10FFFF by
          // subtracting 0x10000 and splitting the
          // 20 bits of 0x0-0xFFFFF into two halves
          charcode = 0x10000 + (((charcode & 0x3ff)<<10)
            | (str.charCodeAt(i) & 0x3ff));
          utf8.push(0xf0 | (charcode >>18),
              0x80 | ((charcode>>12) & 0x3f),
              0x80 | ((charcode>>6) & 0x3f),
              0x80 | (charcode & 0x3f));
        }
      }
      return utf8;
    }
    return toUTF8Array(s);
  };

}();

(function (factory) {
  if (typeof define === 'function' && define.amd) {
      define([], factory);
  } else if (typeof exports === 'object') {
      module.exports = factory();
  }
}(function () {
    return qrcode;
}));

//---------------------------------------------------------------------
//
// QR Code Generator for JavaScript UTF8 Support (optional)
//
// Copyright (c) 2011 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//  http://www.opensource.org/licenses/mit-license.php
//
// The word 'QR Code' is registered trademark of
// DENSO WAVE INCORPORATED
//  http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------

!function(qrcode) {

  //---------------------------------------------------------------------
  // overwrite qrcode.stringToBytes
  //---------------------------------------------------------------------

  qrcode.stringToBytes = qrcode.stringToBytesFuncs['UTF-8'];

}(qrcode);

/*
 * International Telephone Input v11.1.6
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],function(b){a(b,window,document)}):"object"==typeof module&&module.exports?module.exports=a(require("jquery"),window,document):a(jQuery,window,document)}(function(a,b,c,d){"use strict";function e(b,c){this.a=a(b),this.b=a.extend({},h,c),this.ns="."+f+g++,this.d=Boolean(b.setSelectionRange),this.e=Boolean(a(b).attr("placeholder"))}var f="intlTelInput",g=1,h={allowDropdown:!0,autoHideDialCode:!0,autoPlaceholder:"polite",customPlaceholder:null,dropdownContainer:"",excludeCountries:[],formatOnDisplay:!0,geoIpLookup:null,initialCountry:"",nationalMode:!0,onlyCountries:[],placeholderNumberType:"MOBILE",preferredCountries:["us","gb"],separateDialCode:!1,utilsScript:""},i={b:38,c:40,d:13,e:27,f:43,A:65,Z:90,j:32,k:9},j=["800","822","833","844","855","866","877","880","881","882","883","884","885","886","887","888","889"];a(b).on("load",function(){a.fn[f].windowLoaded=!0}),e.prototype={_a:function(){return this.b.nationalMode&&(this.b.autoHideDialCode=!1),this.b.separateDialCode&&(this.b.autoHideDialCode=this.b.nationalMode=!1),this.g=/Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),this.g&&(a("body").addClass("iti-mobile"),this.b.dropdownContainer||(this.b.dropdownContainer="body")),this.h=new a.Deferred,this.i=new a.Deferred,this.s={},this._b(),this._f(),this._h(),this._i(),this._i2(),[this.h,this.i]},_b:function(){this._d(),this._d2(),this._e()},_c:function(a,b,c){b in this.q||(this.q[b]=[]);var d=c||0;this.q[b][d]=a},_d:function(){if(this.b.onlyCountries.length){var a=this.b.onlyCountries.map(function(a){return a.toLowerCase()});this.p=k.filter(function(b){return a.indexOf(b.iso2)>-1})}else if(this.b.excludeCountries.length){var b=this.b.excludeCountries.map(function(a){return a.toLowerCase()});this.p=k.filter(function(a){return b.indexOf(a.iso2)===-1})}else this.p=k},_d2:function(){this.q={};for(var a=0;a<this.p.length;a++){var b=this.p[a];if(this._c(b.iso2,b.dialCode,b.priority),b.areaCodes)for(var c=0;c<b.areaCodes.length;c++)this._c(b.iso2,b.dialCode+b.areaCodes[c])}},_e:function(){this.preferredCountries=[];for(var a=0;a<this.b.preferredCountries.length;a++){var b=this.b.preferredCountries[a].toLowerCase(),c=this._y(b,!1,!0);c&&this.preferredCountries.push(c)}},_f:function(){this.a.attr("autocomplete","off");var b="intl-tel-input";this.b.allowDropdown&&(b+=" allow-dropdown"),this.b.separateDialCode&&(b+=" separate-dial-code"),this.a.wrap(a("<div>",{"class":b})),this.k=a("<div>",{"class":"flag-container"}).insertBefore(this.a);var c=a("<div>",{"class":"selected-flag"});c.appendTo(this.k),this.l=a("<div>",{"class":"iti-flag"}).appendTo(c),this.b.separateDialCode&&(this.t=a("<div>",{"class":"selected-dial-code"}).appendTo(c)),this.b.allowDropdown?(c.attr("tabindex","0"),a("<div>",{"class":"iti-arrow"}).appendTo(c),this.m=a("<ul>",{"class":"country-list hide"}),this.preferredCountries.length&&(this._g(this.preferredCountries,"preferred"),a("<li>",{"class":"divider"}).appendTo(this.m)),this._g(this.p,""),this.o=this.m.children(".country"),this.b.dropdownContainer?this.dropdown=a("<div>",{"class":"intl-tel-input iti-container"}).append(this.m):this.m.appendTo(this.k)):this.o=a()},_g:function(a,b){for(var c="",d=0;d<a.length;d++){var e=a[d];c+="<li class='country "+b+"' data-dial-code='"+e.dialCode+"' data-country-code='"+e.iso2+"'>",c+="<div class='flag-box'><div class='iti-flag "+e.iso2+"'></div></div>",c+="<span class='country-name'>"+e.name+"</span>",c+="<span class='dial-code'>+"+e.dialCode+"</span>",c+="</li>"}this.m.append(c)},_h:function(){var a=this.a.val();this._af(a)&&(!this._isRegionlessNanp(a)||this.b.nationalMode&&!this.b.initialCountry)?this._v(a):"auto"!==this.b.initialCountry&&(this.b.initialCountry?this._z(this.b.initialCountry.toLowerCase()):(this.j=this.preferredCountries.length?this.preferredCountries[0].iso2:this.p[0].iso2,a||this._z(this.j)),a||this.b.nationalMode||this.b.autoHideDialCode||this.b.separateDialCode||this.a.val("+"+this.s.dialCode)),a&&this._u(a)},_i:function(){this._j(),this.b.autoHideDialCode&&this._l(),this.b.allowDropdown&&this._i1()},_i1:function(){var a=this,b=this.a.closest("label");b.length&&b.on("click"+this.ns,function(b){a.m.hasClass("hide")?a.a.focus():b.preventDefault()}),this.l.parent().on("click"+this.ns,function(b){!a.m.hasClass("hide")||a.a.prop("disabled")||a.a.prop("readonly")||a._n()}),this.k.on("keydown"+a.ns,function(b){!a.m.hasClass("hide")||b.which!=i.b&&b.which!=i.c&&b.which!=i.j&&b.which!=i.d||(b.preventDefault(),b.stopPropagation(),a._n()),b.which==i.k&&a._ac()})},_i2:function(){var c=this;this.b.utilsScript?a.fn[f].windowLoaded?a.fn[f].loadUtils(this.b.utilsScript,this.i):a(b).on("load",function(){a.fn[f].loadUtils(c.b.utilsScript,c.i)}):this.i.resolve(),"auto"===this.b.initialCountry?this._i3():this.h.resolve()},_i3:function(){a.fn[f].autoCountry?this.handleAutoCountry():a.fn[f].startedLoadingAutoCountry||(a.fn[f].startedLoadingAutoCountry=!0,"function"==typeof this.b.geoIpLookup&&this.b.geoIpLookup(function(b){a.fn[f].autoCountry=b.toLowerCase(),setTimeout(function(){a(".intl-tel-input input").intlTelInput("handleAutoCountry")})}))},_j:function(){var a=this;this.a.on("keyup"+this.ns,function(){a._v(a.a.val())&&a._triggerCountryChange()}),this.a.on("cut"+this.ns+" paste"+this.ns,function(){setTimeout(function(){a._v(a.a.val())&&a._triggerCountryChange()})})},_j2:function(a){var b=this.a.attr("maxlength");return b&&a.length>b?a.substr(0,b):a},_l:function(){var b=this;this.a.on("mousedown"+this.ns,function(a){b.a.is(":focus")||b.a.val()||(a.preventDefault(),b.a.focus())}),this.a.on("focus"+this.ns,function(a){b.a.val()||b.a.prop("readonly")||!b.s.dialCode||(b.a.val("+"+b.s.dialCode),b.a.one("keypress.plus"+b.ns,function(a){a.which==i.f&&b.a.val("")}),setTimeout(function(){var a=b.a[0];if(b.d){var c=b.a.val().length;a.setSelectionRange(c,c)}}))});var c=this.a.prop("form");c&&a(c).on("submit"+this.ns,function(){b._removeEmptyDialCode()}),this.a.on("blur"+this.ns,function(){b._removeEmptyDialCode()})},_removeEmptyDialCode:function(){var a=this.a.val();if("+"==a.charAt(0)){var b=this._m(a);b&&this.s.dialCode!=b||this.a.val("")}this.a.off("keypress.plus"+this.ns)},_m:function(a){return a.replace(/\D/g,"")},_n:function(){this._o();var a=this.m.children(".active");a.length&&(this._x(a),this._ad(a)),this._p(),this.l.children(".iti-arrow").addClass("up"),this.a.trigger("open:countrydropdown")},_o:function(){var c=this;if(this.b.dropdownContainer&&this.dropdown.appendTo(this.b.dropdownContainer),this.n=this.m.removeClass("hide").outerHeight(),!this.g){var d=this.a.offset(),e=d.top,f=a(b).scrollTop(),g=e+this.a.outerHeight()+this.n<f+a(b).height(),h=e-this.n>f;if(this.m.toggleClass("dropup",!g&&h),this.b.dropdownContainer){var i=!g&&h?0:this.a.innerHeight();this.dropdown.css({top:e+i,left:d.left}),a(b).on("scroll"+this.ns,function(){c._ac()})}}},_p:function(){var b=this;this.m.on("mouseover"+this.ns,".country",function(c){b._x(a(this))}),this.m.on("click"+this.ns,".country",function(c){b._ab(a(this))});var d=!0;a("html").on("click"+this.ns,function(a){d||b._ac(),d=!1});var e="",f=null;a(c).on("keydown"+this.ns,function(a){a.preventDefault(),a.which==i.b||a.which==i.c?b._q(a.which):a.which==i.d?b._r():a.which==i.e?b._ac():(a.which>=i.A&&a.which<=i.Z||a.which==i.j)&&(f&&clearTimeout(f),e+=String.fromCharCode(a.which),b._s(e),f=setTimeout(function(){e=""},1e3))})},_q:function(a){var b=this.m.children(".highlight").first(),c=a==i.b?b.prev():b.next();c.length&&(c.hasClass("divider")&&(c=a==i.b?c.prev():c.next()),this._x(c),this._ad(c))},_r:function(){var a=this.m.children(".highlight").first();a.length&&this._ab(a)},_s:function(a){for(var b=0;b<this.p.length;b++)if(this._t(this.p[b].name,a)){var c=this.m.children("[data-country-code="+this.p[b].iso2+"]").not(".preferred");this._x(c),this._ad(c,!0);break}},_t:function(a,b){return a.substr(0,b.length).toUpperCase()==b},_u:function(a){if(this.b.formatOnDisplay&&b.intlTelInputUtils&&this.s){var c=this.b.separateDialCode||!this.b.nationalMode&&"+"==a.charAt(0)?intlTelInputUtils.numberFormat.INTERNATIONAL:intlTelInputUtils.numberFormat.NATIONAL;a=intlTelInputUtils.formatNumber(a,this.s.iso2,c)}a=this._ah(a),this.a.val(a)},_v:function(b){b&&this.b.nationalMode&&"1"==this.s.dialCode&&"+"!=b.charAt(0)&&("1"!=b.charAt(0)&&(b="1"+b),b="+"+b);var c=this._af(b),d=null,e=this._m(b);if(c){var f=this.q[this._m(c)],g=a.inArray(this.s.iso2,f)>-1,h="+1"==c&&e.length>=4;if((!("1"==this.s.dialCode)||!this._isRegionlessNanp(e))&&(!g||h))for(var i=0;i<f.length;i++)if(f[i]){d=f[i];break}}else"+"==b.charAt(0)&&e.length?d="":b&&"+"!=b||(d=this.j);return null!==d&&this._z(d)},_isRegionlessNanp:function(b){var c=this._m(b);if("1"==c.charAt(0)){var d=c.substr(1,3);return a.inArray(d,j)>-1}return!1},_x:function(a){this.o.removeClass("highlight"),a.addClass("highlight")},_y:function(a,b,c){for(var d=b?k:this.p,e=0;e<d.length;e++)if(d[e].iso2==a)return d[e];if(c)return null;throw new Error("No country data for '"+a+"'")},_z:function(a){var b=this.s.iso2?this.s:{};this.s=a?this._y(a,!1,!1):{},this.s.iso2&&(this.j=this.s.iso2),this.l.attr("class","iti-flag "+a);var c=a?this.s.name+": +"+this.s.dialCode:"Unknown";if(this.l.parent().attr("title",c),this.b.separateDialCode){var d=this.s.dialCode?"+"+this.s.dialCode:"",e=this.a.parent();b.dialCode&&e.removeClass("iti-sdc-"+(b.dialCode.length+1)),d&&e.addClass("iti-sdc-"+d.length),this.t.text(d)}return this._aa(),this.o.removeClass("active"),a&&this.o.find(".iti-flag."+a).first().closest(".country").addClass("active"),b.iso2!==a},_aa:function(){var a="aggressive"===this.b.autoPlaceholder||!this.e&&(this.b.autoPlaceholder===!0||"polite"===this.b.autoPlaceholder);if(b.intlTelInputUtils&&a){var c=intlTelInputUtils.numberType[this.b.placeholderNumberType],d=this.s.iso2?intlTelInputUtils.getExampleNumber(this.s.iso2,this.b.nationalMode,c):"";d=this._ah(d),"function"==typeof this.b.customPlaceholder&&(d=this.b.customPlaceholder(d,this.s)),this.a.attr("placeholder",d)}},_ab:function(a){var b=this._z(a.attr("data-country-code"));if(this._ac(),this._ae(a.attr("data-dial-code"),!0),this.a.focus(),this.d){var c=this.a.val().length;this.a[0].setSelectionRange(c,c)}b&&this._triggerCountryChange()},_ac:function(){this.m.addClass("hide"),this.l.children(".iti-arrow").removeClass("up"),a(c).off(this.ns),a("html").off(this.ns),this.m.off(this.ns),this.b.dropdownContainer&&(this.g||a(b).off("scroll"+this.ns),this.dropdown.detach()),this.a.trigger("close:countrydropdown")},_ad:function(a,b){var c=this.m,d=c.height(),e=c.offset().top,f=e+d,g=a.outerHeight(),h=a.offset().top,i=h+g,j=h-e+c.scrollTop(),k=d/2-g/2;if(h<e)b&&(j-=k),c.scrollTop(j);else if(i>f){b&&(j+=k);var l=d-g;c.scrollTop(j-l)}},_ae:function(a,b){var c,d=this.a.val();if(a="+"+a,"+"==d.charAt(0)){var e=this._af(d);c=e?d.replace(e,a):a}else{if(this.b.nationalMode||this.b.separateDialCode)return;if(d)c=a+d;else{if(!b&&this.b.autoHideDialCode)return;c=a}}this.a.val(c)},_af:function(b){var c="";if("+"==b.charAt(0))for(var d="",e=0;e<b.length;e++){var f=b.charAt(e);if(a.isNumeric(f)&&(d+=f,this.q[d]&&(c=b.substr(0,e+1)),4==d.length))break}return c},_ag:function(){var b,c=a.trim(this.a.val()),d=this.s.dialCode,e=this._m(c),f="1"==e.charAt(0)?e:"1"+e;return b=this.b.separateDialCode?"+"+d:"+"!=c.charAt(0)&&"1"!=c.charAt(0)&&d&&"1"==d.charAt(0)&&4==d.length&&d!=f.substr(0,4)?d.substr(1):"",b+c},_ah:function(a){if(this.b.separateDialCode){var b=this._af(a);if(b){null!==this.s.areaCodes&&(b="+"+this.s.dialCode);var c=" "===a[b.length]||"-"===a[b.length]?b.length+1:b.length;a=a.substr(c)}}return this._j2(a)},_triggerCountryChange:function(){this.a.trigger("countrychange",this.s)},handleAutoCountry:function(){"auto"===this.b.initialCountry&&(this.j=a.fn[f].autoCountry,this.a.val()||this.setCountry(this.j),this.h.resolve())},handleUtils:function(){b.intlTelInputUtils&&(this.a.val()&&this._u(this.a.val()),this._aa()),this.i.resolve()},destroy:function(){if(this.allowDropdown&&(this._ac(),this.l.parent().off(this.ns),this.a.closest("label").off(this.ns)),this.b.autoHideDialCode){var b=this.a.prop("form");b&&a(b).off(this.ns)}this.a.off(this.ns),this.a.parent().before(this.a).remove()},getExtension:function(){return b.intlTelInputUtils?intlTelInputUtils.getExtension(this._ag(),this.s.iso2):""},getNumber:function(a){return b.intlTelInputUtils?intlTelInputUtils.formatNumber(this._ag(),this.s.iso2,a):""},getNumberType:function(){return b.intlTelInputUtils?intlTelInputUtils.getNumberType(this._ag(),this.s.iso2):-99},getSelectedCountryData:function(){return this.s},getValidationError:function(){return b.intlTelInputUtils?intlTelInputUtils.getValidationError(this._ag(),this.s.iso2):-99},isValidNumber:function(){var c=a.trim(this._ag()),d=this.b.nationalMode?this.s.iso2:"";return b.intlTelInputUtils?intlTelInputUtils.isValidNumber(c,d):null},setCountry:function(a){a=a.toLowerCase(),this.l.hasClass(a)||(this._z(a),this._ae(this.s.dialCode,!1),this._triggerCountryChange())},setNumber:function(a){var b=this._v(a);this._u(a),b&&this._triggerCountryChange()}},a.fn[f]=function(b){var c=arguments;if(b===d||"object"==typeof b){var g=[];return this.each(function(){if(!a.data(this,"plugin_"+f)){var c=new e(this,b),d=c._a();g.push(d[0]),g.push(d[1]),a.data(this,"plugin_"+f,c)}}),a.when.apply(null,g)}if("string"==typeof b&&"_"!==b[0]){var h;return this.each(function(){var d=a.data(this,"plugin_"+f);d instanceof e&&"function"==typeof d[b]&&(h=d[b].apply(d,Array.prototype.slice.call(c,1))),"destroy"===b&&a.data(this,"plugin_"+f,null)}),h!==d?h:this}},a.fn[f].getCountryData=function(){return k},a.fn[f].loadUtils=function(b,c){a.fn[f].loadedUtilsScript?c&&c.resolve():(a.fn[f].loadedUtilsScript=!0,a.ajax({type:"GET",url:b,complete:function(){a(".intl-tel-input input").intlTelInput("handleUtils")},dataType:"script",cache:!0}))},a.fn[f].defaults=h,a.fn[f].version="11.1.6";for(var k=[["Afghanistan (‫افغانستان‬‎)","af","93"],["Albania (Shqipëri)","al","355"],["Algeria (‫الجزائر‬‎)","dz","213"],["American Samoa","as","1684"],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1264"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54"],["Armenia (Հայաստան)","am","374"],["Aruba","aw","297"],["Australia","au","61",0],["Austria (Österreich)","at","43"],["Azerbaijan (Azərbaycan)","az","994"],["Bahamas","bs","1242"],["Bahrain (‫البحرين‬‎)","bh","973"],["Bangladesh (বাংলাদেশ)","bd","880"],["Barbados","bb","1246"],["Belarus (Беларусь)","by","375"],["Belgium (België)","be","32"],["Belize","bz","501"],["Benin (Bénin)","bj","229"],["Bermuda","bm","1441"],["Bhutan (འབྲུག)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina (Босна и Херцеговина)","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1284"],["Brunei","bn","673"],["Bulgaria (България)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (កម្ពុជា)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599",1],["Cayman Islands","ky","1345"],["Central African Republic (République centrafricaine)","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (中国)","cn","86"],["Christmas Island","cx","61",2],["Cocos (Keeling) Islands","cc","61",1],["Colombia","co","57"],["Comoros (‫جزر القمر‬‎)","km","269"],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243"],["Congo (Republic) (Congo-Brazzaville)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["Côte d’Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Curaçao","cw","599",0],["Cyprus (Κύπρος)","cy","357"],["Czech Republic (Česká republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic (República Dominicana)","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt (‫مصر‬‎)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea (Guinea Ecuatorial)","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (Føroyar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358",0],["France","fr","33"],["French Guiana (Guyane française)","gf","594"],["French Polynesia (Polynésie française)","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (საქართველო)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (Ελλάδα)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1473"],["Guadeloupe","gp","590",0],["Guam","gu","1671"],["Guatemala","gt","502"],["Guernsey","gg","44",1],["Guinea (Guinée)","gn","224"],["Guinea-Bissau (Guiné Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (香港)","hk","852"],["Hungary (Magyarország)","hu","36"],["Iceland (Ísland)","is","354"],["India (भारत)","in","91"],["Indonesia","id","62"],["Iran (‫ایران‬‎)","ir","98"],["Iraq (‫العراق‬‎)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44",2],["Israel (‫ישראל‬‎)","il","972"],["Italy (Italia)","it","39",0],["Jamaica","jm","1876"],["Japan (日本)","jp","81"],["Jersey","je","44",3],["Jordan (‫الأردن‬‎)","jo","962"],["Kazakhstan (Казахстан)","kz","7",1],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (‫الكويت‬‎)","kw","965"],["Kyrgyzstan (Кыргызстан)","kg","996"],["Laos (ລາວ)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (‫لبنان‬‎)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (‫ليبيا‬‎)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (澳門)","mo","853"],["Macedonia (FYROM) (Македонија)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (‫موريتانيا‬‎)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262",1],["Mexico (México)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (Монгол)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1664"],["Morocco (‫المغرب‬‎)","ma","212",0],["Mozambique (Moçambique)","mz","258"],["Myanmar (Burma) (မြန်မာ)","mm","95"],["Namibia (Namibië)","na","264"],["Nauru","nr","674"],["Nepal (नेपाल)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Calédonie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (조선 민주주의 인민 공화국)","kp","850"],["Northern Mariana Islands","mp","1670"],["Norway (Norge)","no","47",0],["Oman (‫عُمان‬‎)","om","968"],["Pakistan (‫پاکستان‬‎)","pk","92"],["Palau","pw","680"],["Palestine (‫فلسطين‬‎)","ps","970"],["Panama (Panamá)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Perú)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar (‫قطر‬‎)","qa","974"],["Réunion (La Réunion)","re","262",0],["Romania (România)","ro","40"],["Russia (Россия)","ru","7",0],["Rwanda","rw","250"],["Saint Barthélemy","bl","590",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Martin (Saint-Martin (partie française))","mf","590",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["São Tomé and Príncipe (São Tomé e Príncipe)","st","239"],["Saudi Arabia (‫المملكة العربية السعودية‬‎)","sa","966"],["Senegal (Sénégal)","sn","221"],["Serbia (Србија)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1721"],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (대한민국)","kr","82"],["South Sudan (‫جنوب السودان‬‎)","ss","211"],["Spain (España)","es","34"],["Sri Lanka (ශ්‍රී ලංකාව)","lk","94"],["Sudan (‫السودان‬‎)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47",1],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (‫سوريا‬‎)","sy","963"],["Taiwan (台灣)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (ไทย)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia (‫تونس‬‎)","tn","216"],["Turkey (Türkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1649"],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1340"],["Uganda","ug","256"],["Ukraine (Україна)","ua","380"],["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)","ae","971"],["United Kingdom","gb","44",0],["United States","us","1",0],["Uruguay","uy","598"],["Uzbekistan (Oʻzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Città del Vaticano)","va","39",1],["Venezuela","ve","58"],["Vietnam (Việt Nam)","vn","84"],["Wallis and Futuna (Wallis-et-Futuna)","wf","681"],["Western Sahara (‫الصحراء الغربية‬‎)","eh","212",1],["Yemen (‫اليمن‬‎)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["Åland Islands","ax","358",1]],l=0;l<k.length;l++){var m=k[l];k[l]={name:m[0],iso2:m[1],dialCode:m[2],priority:m[3]||0,areaCodes:m[4]||null}}});
/*!
 * angular-translate - v2.19.0 - 2021-09-02
 * 
 * Copyright (c) 2021 The angular-translate team, Pascal Precht; Licensed MIT
 */
!function(t,e){"function"==typeof define&&define.amd?define([],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():e()}(0,function(){function t(e){"use strict";var n=e.storageKey(),a=e.storage(),t=function(){var t=e.preferredLanguage();angular.isString(t)?e.use(t):a.put(n,e.use())};t.displayName="fallbackFromIncorrectStorageValue",a?a.get(n)?e.use(a.get(n))["catch"](t):t():angular.isString(e.preferredLanguage())&&e.use(e.preferredLanguage())}function e(t,r,e,i){"use strict";var T,c,z,x,F,I,_,n,V,R,D,K,U,M,H,G,q={},Y=[],B=t,J=[],Q="translate-cloak",W=!1,X=!1,Z=!0,tt=".",et=!1,nt=!1,at=0,rt=!0,a="default",s={default:function(t){return(t||"").split("-").join("_")},java:function(t){var e=(t||"").split("-").join("_"),n=e.split("_");return 1<n.length?n[0].toLowerCase()+"_"+n[1].toUpperCase():e},bcp47:function(t){var e=(t||"").split("_").join("-"),n=e.split("-");switch(n.length){case 1:n[0]=n[0].toLowerCase();break;case 2:n[0]=n[0].toLowerCase(),4===n[1].length?n[1]=n[1].charAt(0).toUpperCase()+n[1].slice(1).toLowerCase():n[1]=n[1].toUpperCase();break;case 3:n[0]=n[0].toLowerCase(),n[1]=n[1].charAt(0).toUpperCase()+n[1].slice(1).toLowerCase(),n[2]=n[2].toUpperCase();break;default:return e}return n.join("-")},"iso639-1":function(t){return(t||"").split("_").join("-").split("-")[0].toLowerCase()}},o=function(){if(angular.isFunction(i.getLocale))return i.getLocale();var t,e,n=r.$get().navigator,a=["language","browserLanguage","systemLanguage","userLanguage"];if(angular.isArray(n.languages))for(t=0;t<n.languages.length;t++)if((e=n.languages[t])&&e.length)return e;for(t=0;t<a.length;t++)if((e=n[a[t]])&&e.length)return e;return null};o.displayName="angular-translate/service: getFirstBrowserLanguage";var it=function(){var t=o()||"";return s[a]&&(t=s[a](t)),t};it.displayName="angular-translate/service: getLocale";var st=function(t,e){for(var n=0,a=t.length;n<a;n++)if(t[n]===e)return n;return-1},ot=function(){return this.toString().replace(/^\s+|\s+$/g,"")},f=function(t){return angular.isString(t)?t.toLowerCase():t},lt=function(t){if(t){for(var e,n=[],a=f(t),r=0,i=Y.length;r<i;r++)n.push(f(Y[r]));if(-1<(r=st(n,a)))return Y[r];if(c)for(var s in c)if(c.hasOwnProperty(s)){var o=!1,l=Object.prototype.hasOwnProperty.call(c,s)&&f(s)===f(t);if("*"===s.slice(-1)&&(o=f(s.slice(0,-1))===f(t.slice(0,s.length-1))),(l||o)&&(e=c[s],-1<st(n,f(e))))return e}var u=t.split("_");return 1<u.length&&-1<st(n,f(u[0]))?u[0]:void 0}},ut=function(t,e){if(!t&&!e)return q;if(t&&!e){if(angular.isString(t))return q[t]}else angular.isObject(q[t])||(q[t]={}),angular.extend(q[t],ct(e));return this};this.translations=ut,this.cloakClassName=function(t){return t?(Q=t,this):Q},this.allowNamespaces=function(t){return void 0===t?Z:(Z=t,this)},this.nestedObjectDelimeter=function(t){return t?(tt=t,this):tt};var ct=function(t,e,n,a){var r,i,s;if(e||(e=[]),n||(n={}),!Z)return t;for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s=t[r],angular.isObject(s)?ct(s,e.concat(r),n,r):(i=e.length?""+e.join(tt)+tt+r:r,e.length&&r===a&&(n[""+e.join(tt)]="@:"+i),n[i]=s));return n};ct.displayName="flatObject",this.addInterpolation=function(t){return J.push(t),this},this.useMessageFormatInterpolation=function(){return this.useInterpolation("$translateMessageFormatInterpolation")},this.useInterpolation=function(t){return R=t,this},this.useSanitizeValueStrategy=function(t){return e.useStrategy(t),this},this.preferredLanguage=function(t){return t?(ft(t),this):T};var ft=function(t){return t&&(T=t),T};this.translationNotFoundIndicator=function(t){return this.translationNotFoundIndicatorLeft(t),this.translationNotFoundIndicatorRight(t),this},this.translationNotFoundIndicatorLeft=function(t){return t?(U=t,this):U},this.translationNotFoundIndicatorRight=function(t){return t?(M=t,this):M},this.fallbackLanguage=function(t){return gt(t),this};var gt=function(t){return t?(angular.isString(t)?(x=!0,z=[t]):angular.isArray(t)&&(x=!1,z=t),angular.isString(T)&&st(z,T)<0&&z.push(T),this):x?z[0]:z};this.use=function(t){if(t){if(!q[t]&&!D)throw new Error("$translateProvider couldn't find translationTable for langKey: '"+t+"'");return F=t,this}return F},this.resolveClientLocale=function(){return it()};var pt=function(t){return t?(B=t,this):n?n+B:B};this.storageKey=pt,this.useUrlLoader=function(t,e){return this.useLoader("$translateUrlLoader",angular.extend({url:t},e))},this.useStaticFilesLoader=function(t){return this.useLoader("$translateStaticFilesLoader",t)},this.useLoader=function(t,e){return D=t,K=e||{},this},this.useLocalStorage=function(){return this.useStorage("$translateLocalStorage")},this.useCookieStorage=function(){return this.useStorage("$translateCookieStorage")},this.useStorage=function(t){return _=t,this},this.storagePrefix=function(t){return t?(n=t,this):t},this.useMissingTranslationHandlerLog=function(){return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")},this.useMissingTranslationHandler=function(t){return V=t,this},this.usePostCompiling=function(t){return W=!!t,this},this.forceAsyncReload=function(t){return X=!!t,this},this.uniformLanguageTag=function(t){return t?angular.isString(t)&&(t={standard:t}):t={},a=t.standard,this},this.determinePreferredLanguage=function(t){var e=t&&angular.isFunction(t)?t():it();return T=Y.length&&lt(e)||e,this},this.registerAvailableLanguageKeys=function(t,e){return t?(Y=t,e&&(c=e),this):Y},this.useLoaderCache=function(t){return!1===t?H=void 0:!0===t?H=!0:void 0===t?H="$translationCache":t&&(H=t),this},this.directivePriority=function(t){return void 0===t?at:(at=t,this)},this.statefulFilter=function(t){return void 0===t?rt:(rt=t,this)},this.postProcess=function(t){return G=t||void 0,this},this.keepContent=function(t){return nt=!!t,this},this.$get=["$log","$injector","$rootScope","$q",function(t,o,s,m){var i,$,y,b=o.get(R||"$translateDefaultInterpolation"),S=!1,L={},f={},w=function(t,s,o,l,u,c){!F&&T&&(F=T);var a=u&&u!==F?lt(u)||u:F;if(u&&v(u),angular.isArray(t)){return function(t){for(var a={},e=[],n=function(e){var n=m.defer(),t=function(t){a[e]=t,n.resolve([e,t])};return w(e,s,o,l,u,c).then(t,t),n.promise},r=0,i=t.length;r<i;r++)e.push(n(t[r]));return m.all(e).then(function(){return a})}(t)}var e=m.defer();if(!t)throw new TypeError("translationId must be a not empty string");t=ot.apply(t);var n=function(){var t=f[a]||f[T];if($=0,_&&!t){var e=i.get(B);if(t=f[e],z&&z.length){var n=st(z,e);$=0===n?1:0,st(z,T)<0&&z.push(T)}}return t}();if(n){var r=function(){u||(a=F),h(t,s,o,l,a,c).then(e.resolve,e.reject)};r.displayName="promiseResolved",n.finally(r)["catch"](angular.noop)}else h(t,s,o,l,a,c).then(e.resolve,e.reject);return e.promise},j=function(t){return U&&(t=[U,t].join(" ")),M&&(t=[t,M].join(" ")),t},l=function(t){F=t,_&&i.put(w.storageKey(),F),s.$emit("$translateChangeSuccess",{language:t}),b.setLocale(F);var e=function(t,e){L[e].setLocale(F)};e.displayName="eachInterpolatorLocaleSetter",angular.forEach(L,e),s.$emit("$translateChangeEnd",{language:t})},u=function(n){if(!n)throw"No language key specified for loading.";var a=m.defer();s.$emit("$translateLoadingStart",{language:n}),S=!0;var t=H;"string"==typeof t&&(t=o.get(t));var e=angular.extend({},K,{key:n,$http:angular.extend({},{cache:t},K.$http)}),r=function(t){var e={};s.$emit("$translateLoadingSuccess",{language:n}),angular.isArray(t)?angular.forEach(t,function(t){angular.extend(e,ct(t))}):angular.extend(e,ct(t)),S=!1,a.resolve({key:n,table:e}),s.$emit("$translateLoadingEnd",{language:n})};r.displayName="onLoaderSuccess";var i=function(t){s.$emit("$translateLoadingError",{language:t}),a.reject(t),s.$emit("$translateLoadingEnd",{language:t})};return i.displayName="onLoaderError",o.get(D)(e).then(r,i),a.promise};if(_&&(!(i=o.get(_)).get||!i.put))throw new Error("Couldn't use storage '"+_+"', missing get() or put() method!");if(J.length){var e=function(t){var e=o.get(t);e.setLocale(T||F),L[e.getInterpolationIdentifier()]=e};e.displayName="interpolationFactoryAdder",angular.forEach(J,e)}var c=function(a,r,i,s,o){var l=m.defer(),t=function(t){if(Object.prototype.hasOwnProperty.call(t,r)&&null!==t[r]){s.setLocale(a);var e=t[r];if("@:"===e.substr(0,2))c(a,e.substr(2),i,s,o).then(l.resolve,l.reject);else{var n=s.interpolate(t[r],i,"service",o,r);n=O(r,t[r],n,i,a),l.resolve(n)}s.setLocale(F)}else l.reject()};return t.displayName="fallbackTranslationResolver",function(t){var e=m.defer();if(Object.prototype.hasOwnProperty.call(q,t))e.resolve(q[t]);else if(f[t]){var n=function(t){ut(t.key,t.table),e.resolve(t.table)};n.displayName="translationTableResolver",f[t].then(n,e.reject)}else e.reject();return e.promise}(a).then(t,l.reject),l.promise},g=function(t,e,n,a,r){var i,s=q[t];if(s&&Object.prototype.hasOwnProperty.call(s,e)&&null!==s[e]){if(a.setLocale(t),i=a.interpolate(s[e],n,"filter",r,e),i=O(e,s[e],i,n,t,r),!angular.isString(i)&&angular.isFunction(i.$$unwrapTrustedValue)){var o=i.$$unwrapTrustedValue();if("@:"===o.substr(0,2))return g(t,o.substr(2),n,a,r)}else if("@:"===i.substr(0,2))return g(t,i.substr(2),n,a,r);a.setLocale(F)}return i},C=function(t,e,n,a){return V?o.get(V)(t,F,e,n,a):t},N=function(t,e,n,a,r,i){var s=m.defer();if(t<z.length){var o=z[t];c(o,e,n,a,i).then(function(t){s.resolve(t)},function(){return N(t+1,e,n,a,r,i).then(s.resolve,s.reject)})}else if(r)s.resolve(r);else{var l=C(e,n,r);V&&l?s.resolve(l):s.reject(j(e))}return s.promise},p=function(t,e,n,a,r){var i;if(t<z.length){var s=z[t];(i=g(s,e,n,a,r))||""===i||(i=p(t+1,e,n,a))}return i},h=function(t,e,n,a,r,i){var s,o,l,u,c,f=m.defer(),g=r?q[r]:q,p=n?L[n]:b;if(g&&Object.prototype.hasOwnProperty.call(g,t)&&null!==g[t]){var h=g[t];if("@:"===h.substr(0,2))w(h.substr(2),e,n,a,r,i).then(f.resolve,f.reject);else{var d=p.interpolate(h,e,"service",i,t);d=O(t,h,d,e,r),f.resolve(d)}}else{var v;V&&!S&&(v=C(t,e,a)),r&&z&&z.length?(s=t,o=e,l=p,u=a,c=i,N(0<y?y:$,s,o,l,u,c)).then(function(t){f.resolve(t)},function(t){f.reject(j(t))}):V&&!S&&v?a?f.resolve(a):f.resolve(v):a?f.resolve(a):f.reject(j(t))}return f.promise},d=function(t,e,n,a,r){var i,s=a?q[a]:q,o=b;if(L&&Object.prototype.hasOwnProperty.call(L,n)&&(o=L[n]),s&&Object.prototype.hasOwnProperty.call(s,t)&&null!==s[t]){var l=s[t];i="@:"===l.substr(0,2)?d(l.substr(2),e,n,a,r):(i=o.interpolate(l,e,"filter",r,t),O(t,l,i,e,a,r))}else{var u;V&&!S&&(u=C(t,e,r)),i=a&&z&&z.length?p(($=0)<y?y:$,t,e,o,r):V&&!S&&u?u:j(t)}return i},O=function(t,e,n,a,r,i){var s=G;return s&&("string"==typeof s&&(s=o.get(s)),s)?s(t,e,n,a,r,i):n},v=function(t){q[t]||!D||f[t]||(f[t]=u(t).then(function(t){return ut(t.key,t.table),t}))};w.preferredLanguage=function(t){return t&&ft(t),T},w.cloakClassName=function(){return Q},w.allowNamespaces=function(){return Z},w.nestedObjectDelimeter=function(){return tt},w.fallbackLanguage=function(t){if(null!=t){if(gt(t),D&&z&&z.length)for(var e=0,n=z.length;e<n;e++)f[z[e]]||(f[z[e]]=u(z[e]));w.use(w.use())}return x?z[0]:z},w.useFallbackLanguage=function(t){if(null!=t)if(t){var e=st(z,t);-1<e&&(y=e)}else y=0},w.proposedLanguage=function(){return I},w.storage=function(){return i},w.negotiateLocale=lt,w.use=function(e){if(!e)return F;var n=m.defer();n.promise.then(null,angular.noop),s.$emit("$translateChangeStart",{language:e});var t=lt(e);return 0<Y.length&&!t?m.reject(e):(t&&(e=t),I=e,!X&&q[e]||!D||f[e]?f[e]?f[e].then(function(t){return I===t.key&&l(t.key),n.resolve(t.key),t},function(t){return!F&&z&&0<z.length&&z[0]!==t?w.use(z[0]).then(n.resolve,n.reject):n.reject(t)}):(n.resolve(e),l(e)):(f[e]=u(e).then(function(t){return ut(t.key,t.table),n.resolve(t.key),I===e&&l(t.key),t},function(t){return s.$emit("$translateChangeError",{language:t}),n.reject(t),s.$emit("$translateChangeEnd",{language:t}),m.reject(t)}),f[e].finally(function(){var t;I===(t=e)&&(I=void 0),f[t]=void 0})["catch"](angular.noop)),n.promise)},w.resolveClientLocale=function(){return it()},w.storageKey=function(){return pt()},w.isPostCompilingEnabled=function(){return W},w.isForceAsyncReloadEnabled=function(){return X},w.isKeepContent=function(){return nt},w.refresh=function(t){if(!D)throw new Error("Couldn't refresh translation table, no loader registered!");s.$emit("$translateRefreshStart",{language:t});var e=m.defer(),n={};function a(e){var t=u(e);return(f[e]=t).then(function(t){q[e]={},ut(e,t.table),n[e]=!0},angular.noop),t}if(e.promise.then(function(){for(var t in q)q.hasOwnProperty(t)&&(t in n||delete q[t]);F&&l(F)},angular.noop).finally(function(){s.$emit("$translateRefreshEnd",{language:t})}),t)q[t]?a(t).then(e.resolve,e.reject):e.reject();else{var r=z&&z.slice()||[];F&&-1===r.indexOf(F)&&r.push(F),m.all(r.map(a)).then(e.resolve,e.reject)}return e.promise},w.instant=function(t,e,n,a,r){var i=a&&a!==F?lt(a)||a:F;if(null===t||angular.isUndefined(t))return t;if(a&&v(a),angular.isArray(t)){for(var s={},o=0,l=t.length;o<l;o++)s[t[o]]=w.instant(t[o],e,n,a,r);return s}if(angular.isString(t)&&t.length<1)return t;t&&(t=ot.apply(t));var u,c,f=[];T&&f.push(T),i&&f.push(i),z&&z.length&&(f=f.concat(z));for(var g=0,p=f.length;g<p;g++){var h=f[g];if(q[h]&&void 0!==q[h][t]&&(u=d(t,e,n,i,r)),void 0!==u)break}u||""===u||(U||M?u=j(t):(u=b.interpolate(t,e,"filter",r),V&&!S&&(c=C(t,e,r)),V&&!S&&c&&(u=c)));return u},w.versionInfo=function(){return"2.19.0"},w.loaderCache=function(){return H},w.directivePriority=function(){return at},w.statefulFilter=function(){return rt},w.isReady=function(){return et};var n=m.defer();n.promise.then(function(){et=!0}),w.onReady=function(t){var e=m.defer();return angular.isFunction(t)&&e.promise.then(t),et?e.resolve():n.promise.then(e.resolve),e.promise},w.getAvailableLanguageKeys=function(){return 0<Y.length?Y:null},w.getTranslationTable=function(t){return(t=t||w.use())&&q[t]?angular.copy(q[t]):null};var a=s.$on("$translateReady",function(){n.resolve(),a(),a=null}),r=s.$on("$translateChangeEnd",function(){n.resolve(),r(),r=null});if(D){if(angular.equals(q,{})&&w.use()&&w.use(w.use()),z&&z.length)for(var E=function(t){return ut(t.key,t.table),s.$emit("$translateChangeEnd",{language:t.key}),t},k=0,P=z.length;k<P;k++){var A=z[k];!X&&q[A]||(f[A]=u(A).then(E))}}else s.$emit("$translateReady",{language:w.use()});return w}]}function n(s,o){"use strict";var t={};return t.setLocale=function(t){t},t.getInterpolationIdentifier=function(){return"default"},t.useSanitizeValueStrategy=function(t){return o.useStrategy(t),this},t.interpolate=function(t,e,n,a,r){var i;return e=e||{},e=o.sanitize(e,"params",a,n),i=angular.isNumber(t)?""+t:angular.isString(t)?(i=s(t)(e),o.sanitize(i,"text",a,n)):""},t}function a(S,L,w,j,C){"use strict";var N=function(t){return angular.isString(t)?t.toLowerCase():t};return{restrict:"AE",scope:!0,priority:S.directivePriority(),compile:function(t,h){var d=h.translateValues?h.translateValues:void 0,v=h.translateInterpolation?h.translateInterpolation:void 0,m=h.translateSanitizeStrategy?h.translateSanitizeStrategy:void 0,$=t[0].outerHTML.match(/translate-value-+/i),y="^(.*)("+L.startSymbol()+".*"+L.endSymbol()+")(.*)",b="^(.*)"+L.startSymbol()+"(.*)"+L.endSymbol()+"(.*)";return function(r,l,u){r.interpolateParams={},r.preText="",r.postText="",r.translateNamespace=function t(e){if(e.translateNamespace)return e.translateNamespace;if(e.$parent)return t(e.$parent)}(r);var i={},s=function(t){if(angular.isFunction(s._unwatchOld)&&(s._unwatchOld(),s._unwatchOld=void 0),angular.equals(t,"")||!angular.isDefined(t)){var e=function(){return this.toString().replace(/^\s+|\s+$/g,"")}.apply(l.text()).replace(/\n/g," "),n=e.match(y);if(angular.isArray(n)){r.preText=n[1],r.postText=n[3],i.translate=L(n[2])(r.$parent);var a=e.match(b);angular.isArray(a)&&a[2]&&a[2].length&&(s._unwatchOld=r.$watch(a[2],function(t){i.translate=t,c()}))}else i.translate=e||void 0}else i.translate=t;c()},t=function(e){u.$observe(e,function(t){i[e]=t,c()})};!function(t,e,n){if(e.translateValues&&angular.extend(t,j(e.translateValues)(r.$parent)),$)for(var a in n)Object.prototype.hasOwnProperty.call(e,a)&&"translateValue"===a.substr(0,14)&&"translateValues"!==a&&(t[N(a.substr(14,1))+a.substr(15)]=n[a])}(r.interpolateParams,u,h);var e=!0;for(var n in u.$observe("translate",function(t){void 0===t?s(""):""===t&&e||(i.translate=t,c()),e=!1}),u)u.hasOwnProperty(n)&&"translateAttr"===n.substr(0,13)&&13<n.length&&t(n);if(u.$observe("translateDefault",function(t){r.defaultText=t,c()}),m&&u.$observe("translateSanitizeStrategy",function(t){r.sanitizeStrategy=j(t)(r.$parent),c()}),d&&u.$observe("translateValues",function(t){t&&r.$parent.$watch(function(){angular.extend(r.interpolateParams,j(t)(r.$parent))})}),$){var a=function(n){u.$observe(n,function(t){var e=N(n.substr(14,1))+n.substr(15);r.interpolateParams[e]=t})};for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&"translateValue"===o.substr(0,14)&&"translateValues"!==o&&a(o)}var c=function(){for(var t in i)i.hasOwnProperty(t)&&void 0!==i[t]&&f(t,i[t],r,r.interpolateParams,r.defaultText,r.translateNamespace)},f=function(e,t,n,a,r,i){t?(i&&"."===t.charAt(0)&&(t=i+t),S(t,a,v,r,n.translateLanguage,n.sanitizeStrategy).then(function(t){g(t,n,!0,e)},function(t){g(t,n,!1,e)})):g(t,n,!1,e)},g=function(t,e,n,a){if(n||void 0!==e.defaultText&&(t=e.defaultText),"translate"===a){(n||!n&&!S.isKeepContent()&&void 0===u.translateKeepContent)&&l.empty().append(e.preText+t+e.postText);var r=S.isPostCompilingEnabled(),i=void 0!==h.translateCompile,s=i&&"false"!==h.translateCompile;(r&&!i||s)&&w(l.contents())(e)}else{var o=u.$attr[a];"data-"===o.substr(0,5)&&(o=o.substr(5)),o=o.substr(15),l.attr(o,t)}};(d||$||u.translateDefault)&&r.$watch("interpolateParams",c,!0),r.$on("translateLanguageChanged",c);var p=C.$on("$translateChangeSuccess",c);l.text().length?u.translate?s(u.translate):s(""):u.translate&&s(u.translate),c(),r.$on("$destroy",p)}}}}function r(u,c){"use strict";return{restrict:"A",priority:u.directivePriority(),link:function(n,a,r){var i,s,o,l={},t=function(){angular.forEach(i,function(t,e){t&&(l[e]=!0,n.translateNamespace&&"."===t.charAt(0)&&(t=n.translateNamespace+t),u(t,s,r.translateInterpolation,void 0,n.translateLanguage,o).then(function(t){a.attr(e,t)},function(t){a.attr(e,t)}))}),angular.forEach(l,function(t,e){i[e]||(a.removeAttr(e),delete l[e])})};f(n,r.translateAttr,function(t){i=t},t),f(n,r.translateValues,function(t){s=t},t),f(n,r.translateSanitizeStrategy,function(t){o=t},t),r.translateValues&&n.$watch(r.translateValues,t,!0),n.$on("translateLanguageChanged",t);var e=c.$on("$translateChangeSuccess",t);t(),n.$on("$destroy",e)}}}function f(t,e,n,a){"use strict";e&&("::"===e.substr(0,2)?e=e.substr(2):t.$watch(e,function(t){n(t),a()},!0),n(t.$eval(e)))}function i(s,o){"use strict";return{compile:function(t){var i=function(t){t.addClass(s.cloakClassName())};return i(t),function(t,e,n){var a=function(t){t.removeClass(s.cloakClassName())}.bind(this,e),r=i.bind(this,e);n.translateCloak&&n.translateCloak.length?(n.$observe("translateCloak",function(t){s(t).then(a,r)}),o.$on("$translateChangeSuccess",function(){s(n.translateCloak).then(a,r)})):s.onReady(a)}}}}function s(){"use strict";return{restrict:"A",scope:!0,compile:function(){return{pre:function(t,e,n){t.translateNamespace=function t(e){if(e.translateNamespace)return e.translateNamespace;if(e.$parent)return t(e.$parent)}(t),t.translateNamespace&&"."===n.translateNamespace.charAt(0)?t.translateNamespace+=n.translateNamespace:t.translateNamespace=n.translateNamespace}}}}}function o(){"use strict";return{restrict:"A",scope:!0,compile:function(){return function(e,t,n){n.$observe("translateLanguage",function(t){e.translateLanguage=t}),e.$watch("translateLanguage",function(){e.$broadcast("translateLanguageChanged")})}}}}function l(i,s){"use strict";var t=function(t,e,n,a){if(!angular.isObject(e)){var r=this||{__SCOPE_IS_NOT_AVAILABLE:"More info at https://github.com/angular/angular.js/commit/8863b9d04c722b278fa93c5d66ad1e578ad6eb1f"};e=i(e)(r)}return s.instant(t,e,n,a)};return s.statefulFilter()&&(t.$stateful=!0),t}function u(t){"use strict";return t("translations")}return t.$inject=["$translate"],e.$inject=["$STORAGE_KEY","$windowProvider","$translateSanitizationProvider","pascalprechtTranslateOverrider"],n.$inject=["$interpolate","$translateSanitization"],a.$inject=["$translate","$interpolate","$compile","$parse","$rootScope"],r.$inject=["$translate","$rootScope"],i.$inject=["$translate","$rootScope"],l.$inject=["$parse","$translate"],u.$inject=["$cacheFactory"],angular.module("pascalprecht.translate",["ng"]).run(t),t.displayName="runTranslate",angular.module("pascalprecht.translate").provider("$translateSanitization",function(){"use strict";var n,a,g,p=null,h=!1,d=!1;(g={sanitize:function(t,e){return"text"===e&&(t=i(t)),t},escape:function(t,e){return"text"===e&&(t=r(t)),t},sanitizeParameters:function(t,e){return"params"===e&&(t=o(t,i)),t},escapeParameters:function(t,e){return"params"===e&&(t=o(t,r)),t},sce:function(t,e,n){return"text"===e?t=s(t):"params"===e&&"filter"!==n&&(t=o(t,r)),t},sceParameters:function(t,e){return"params"===e&&(t=o(t,s)),t}}).escaped=g.escapeParameters,this.addStrategy=function(t,e){return g[t]=e,this},this.removeStrategy=function(t){return delete g[t],this},this.useStrategy=function(t){return h=!0,p=t,this},this.$get=["$injector","$log",function(u,c){var e,f={};return u.has("$sanitize")&&(n=u.get("$sanitize")),u.has("$sce")&&(a=u.get("$sce")),{useStrategy:(e=this,function(t){e.useStrategy(t)}),sanitize:function(t,e,n,a){if(p||h||d||(c.warn("pascalprecht.translate.$translateSanitization: No sanitization strategy has been configured. This can have serious security implications. See http://angular-translate.github.io/docs/#/guide/19_security for details."),d=!0),n||null===n||(n=p),!n)return t;a||(a="service");var r,i,s,o,l=angular.isArray(n)?n:[n];return r=t,i=e,s=a,o=l,angular.forEach(o,function(e){if(angular.isFunction(e))r=e(r,i,s);else if(angular.isFunction(g[e]))r=g[e](r,i,s);else{if(!angular.isString(g[e]))throw new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '"+e+"'");if(!f[g[e]])try{f[g[e]]=u.get(g[e])}catch(t){throw f[g[e]]=function(){},new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '"+e+"'")}r=f[g[e]](r,i,s)}}),r}}}];var r=function(t){var e=angular.element("<div></div>");return e.text(t),e.html()},i=function(t){if(!n)throw new Error("pascalprecht.translate.$translateSanitization: Error cannot find $sanitize service. Either include the ngSanitize module (https://docs.angularjs.org/api/ngSanitize) or use a sanitization strategy which does not depend on $sanitize, such as 'escape'.");return n(t)},s=function(t){if(!a)throw new Error("pascalprecht.translate.$translateSanitization: Error cannot find $sce service.");return a.trustAsHtml(t)},o=function(t,n,a){if(angular.isDate(t))return t;if(angular.isObject(t)){var r=angular.isArray(t)?[]:{};if(a){if(-1<a.indexOf(t))throw new Error("pascalprecht.translate.$translateSanitization: Error cannot interpolate parameter due recursive object")}else a=[];return a.push(t),angular.forEach(t,function(t,e){angular.isFunction(t)||(r[e]=o(t,n,a))}),a.splice(-1,1),r}return angular.isNumber(t)?t:!0===t||!1===t?t:angular.isUndefined(t)||null===t?t:n(t)}}),angular.module("pascalprecht.translate").constant("pascalprechtTranslateOverrider",{}).provider("$translate",e),e.displayName="displayName",angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation",n),n.displayName="$translateDefaultInterpolation",angular.module("pascalprecht.translate").constant("$STORAGE_KEY","NG_TRANSLATE_LANG_KEY"),angular.module("pascalprecht.translate").directive("translate",a),a.displayName="translateDirective",angular.module("pascalprecht.translate").directive("translateAttr",r),r.displayName="translateAttrDirective",angular.module("pascalprecht.translate").directive("translateCloak",i),i.displayName="translateCloakDirective",angular.module("pascalprecht.translate").directive("translateNamespace",s),s.displayName="translateNamespaceDirective",angular.module("pascalprecht.translate").directive("translateLanguage",o),o.displayName="translateLanguageDirective",angular.module("pascalprecht.translate").filter("translate",l),l.displayName="translateFilterFactory",angular.module("pascalprecht.translate").factory("$translationCache",u),u.displayName="$translationCache","pascalprecht.translate"});
/*!
 * angular-translate - v2.18.4 - 2021-01-14
 * 
 * Copyright (c) 2021 The angular-translate team, Pascal Precht; Licensed MIT
 */
!function(t,e){"function"==typeof define&&define.amd?define([],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():e()}(0,function(){function t(e){"use strict";var n=e.storageKey(),a=e.storage(),t=function(){var t=e.preferredLanguage();angular.isString(t)?e.use(t):a.put(n,e.use())};t.displayName="fallbackFromIncorrectStorageValue",a?a.get(n)?e.use(a.get(n))["catch"](t):t():angular.isString(e.preferredLanguage())&&e.use(e.preferredLanguage())}function e(t,r,e,i){"use strict";var T,c,z,x,F,I,_,n,V,R,D,K,U,M,H,G,q={},Y=[],B=t,J=[],Q="translate-cloak",W=!1,X=!1,Z=".",tt=!1,et=!1,nt=0,at=!0,a="default",s={default:function(t){return(t||"").split("-").join("_")},java:function(t){var e=(t||"").split("-").join("_"),n=e.split("_");return 1<n.length?n[0].toLowerCase()+"_"+n[1].toUpperCase():e},bcp47:function(t){var e=(t||"").split("_").join("-"),n=e.split("-");switch(n.length){case 1:n[0]=n[0].toLowerCase();break;case 2:n[0]=n[0].toLowerCase(),4===n[1].length?n[1]=n[1].charAt(0).toUpperCase()+n[1].slice(1).toLowerCase():n[1]=n[1].toUpperCase();break;case 3:n[0]=n[0].toLowerCase(),n[1]=n[1].charAt(0).toUpperCase()+n[1].slice(1).toLowerCase(),n[2]=n[2].toUpperCase();break;default:return e}return n.join("-")},"iso639-1":function(t){return(t||"").split("_").join("-").split("-")[0].toLowerCase()}},o=function(){if(angular.isFunction(i.getLocale))return i.getLocale();var t,e,n=r.$get().navigator,a=["language","browserLanguage","systemLanguage","userLanguage"];if(angular.isArray(n.languages))for(t=0;t<n.languages.length;t++)if((e=n.languages[t])&&e.length)return e;for(t=0;t<a.length;t++)if((e=n[a[t]])&&e.length)return e;return null};o.displayName="angular-translate/service: getFirstBrowserLanguage";var rt=function(){var t=o()||"";return s[a]&&(t=s[a](t)),t};rt.displayName="angular-translate/service: getLocale";var it=function(t,e){for(var n=0,a=t.length;n<a;n++)if(t[n]===e)return n;return-1},st=function(){return this.toString().replace(/^\s+|\s+$/g,"")},f=function(t){return angular.isString(t)?t.toLowerCase():t},ot=function(t){if(t){for(var e,n=[],a=f(t),r=0,i=Y.length;r<i;r++)n.push(f(Y[r]));if(-1<(r=it(n,a)))return Y[r];if(c)for(var s in c)if(c.hasOwnProperty(s)){var o=!1,l=Object.prototype.hasOwnProperty.call(c,s)&&f(s)===f(t);if("*"===s.slice(-1)&&(o=f(s.slice(0,-1))===f(t.slice(0,s.length-1))),(l||o)&&(e=c[s],-1<it(n,f(e))))return e}var u=t.split("_");return 1<u.length&&-1<it(n,f(u[0]))?u[0]:void 0}},lt=function(t,e){if(!t&&!e)return q;if(t&&!e){if(angular.isString(t))return q[t]}else angular.isObject(q[t])||(q[t]={}),angular.extend(q[t],ut(e));return this};this.translations=lt,this.cloakClassName=function(t){return t?(Q=t,this):Q},this.nestedObjectDelimeter=function(t){return t?(Z=t,this):Z};var ut=function(t,e,n,a){var r,i,s;for(r in e||(e=[]),n||(n={}),t)Object.prototype.hasOwnProperty.call(t,r)&&(s=t[r],angular.isObject(s)?ut(s,e.concat(r),n,r):(i=e.length?""+e.join(Z)+Z+r:r,e.length&&r===a&&(n[""+e.join(Z)]="@:"+i),n[i]=s));return n};ut.displayName="flatObject",this.addInterpolation=function(t){return J.push(t),this},this.useMessageFormatInterpolation=function(){return this.useInterpolation("$translateMessageFormatInterpolation")},this.useInterpolation=function(t){return R=t,this},this.useSanitizeValueStrategy=function(t){return e.useStrategy(t),this},this.preferredLanguage=function(t){return t?(ct(t),this):T};var ct=function(t){return t&&(T=t),T};this.translationNotFoundIndicator=function(t){return this.translationNotFoundIndicatorLeft(t),this.translationNotFoundIndicatorRight(t),this},this.translationNotFoundIndicatorLeft=function(t){return t?(U=t,this):U},this.translationNotFoundIndicatorRight=function(t){return t?(M=t,this):M},this.fallbackLanguage=function(t){return ft(t),this};var ft=function(t){return t?(angular.isString(t)?(x=!0,z=[t]):angular.isArray(t)&&(x=!1,z=t),angular.isString(T)&&it(z,T)<0&&z.push(T),this):x?z[0]:z};this.use=function(t){if(t){if(!q[t]&&!D)throw new Error("$translateProvider couldn't find translationTable for langKey: '"+t+"'");return F=t,this}return F},this.resolveClientLocale=function(){return rt()};var gt=function(t){return t?(B=t,this):n?n+B:B};this.storageKey=gt,this.useUrlLoader=function(t,e){return this.useLoader("$translateUrlLoader",angular.extend({url:t},e))},this.useStaticFilesLoader=function(t){return this.useLoader("$translateStaticFilesLoader",t)},this.useLoader=function(t,e){return D=t,K=e||{},this},this.useLocalStorage=function(){return this.useStorage("$translateLocalStorage")},this.useCookieStorage=function(){return this.useStorage("$translateCookieStorage")},this.useStorage=function(t){return _=t,this},this.storagePrefix=function(t){return t?(n=t,this):t},this.useMissingTranslationHandlerLog=function(){return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")},this.useMissingTranslationHandler=function(t){return V=t,this},this.usePostCompiling=function(t){return W=!!t,this},this.forceAsyncReload=function(t){return X=!!t,this},this.uniformLanguageTag=function(t){return t?angular.isString(t)&&(t={standard:t}):t={},a=t.standard,this},this.determinePreferredLanguage=function(t){var e=t&&angular.isFunction(t)?t():rt();return T=Y.length&&ot(e)||e,this},this.registerAvailableLanguageKeys=function(t,e){return t?(Y=t,e&&(c=e),this):Y},this.useLoaderCache=function(t){return!1===t?H=void 0:!0===t?H=!0:void 0===t?H="$translationCache":t&&(H=t),this},this.directivePriority=function(t){return void 0===t?nt:(nt=t,this)},this.statefulFilter=function(t){return void 0===t?at:(at=t,this)},this.postProcess=function(t){return G=t||void 0,this},this.keepContent=function(t){return et=!!t,this},this.$get=["$log","$injector","$rootScope","$q",function(t,o,s,m){var i,$,y,b=o.get(R||"$translateDefaultInterpolation"),S=!1,L={},f={},w=function(t,s,o,l,u,c){!F&&T&&(F=T);var a=u&&u!==F?ot(u)||u:F;if(u&&v(u),angular.isArray(t)){return function(t){for(var a={},e=[],n=function(e){var n=m.defer(),t=function(t){a[e]=t,n.resolve([e,t])};return w(e,s,o,l,u,c).then(t,t),n.promise},r=0,i=t.length;r<i;r++)e.push(n(t[r]));return m.all(e).then(function(){return a})}(t)}var e=m.defer();if(!t)throw new TypeError("translationId must be a not empty string");t=st.apply(t);var n=function(){var t=f[a]||f[T];if($=0,_&&!t){var e=i.get(B);if(t=f[e],z&&z.length){var n=it(z,e);$=0===n?1:0,it(z,T)<0&&z.push(T)}}return t}();if(n){var r=function(){u||(a=F),h(t,s,o,l,a,c).then(e.resolve,e.reject)};r.displayName="promiseResolved",n.finally(r)["catch"](angular.noop)}else h(t,s,o,l,a,c).then(e.resolve,e.reject);return e.promise},j=function(t){return U&&(t=[U,t].join(" ")),M&&(t=[t,M].join(" ")),t},l=function(t){F=t,_&&i.put(w.storageKey(),F),s.$emit("$translateChangeSuccess",{language:t}),b.setLocale(F);var e=function(t,e){L[e].setLocale(F)};e.displayName="eachInterpolatorLocaleSetter",angular.forEach(L,e),s.$emit("$translateChangeEnd",{language:t})},u=function(n){if(!n)throw"No language key specified for loading.";var a=m.defer();s.$emit("$translateLoadingStart",{language:n}),S=!0;var t=H;"string"==typeof t&&(t=o.get(t));var e=angular.extend({},K,{key:n,$http:angular.extend({},{cache:t},K.$http)}),r=function(t){var e={};s.$emit("$translateLoadingSuccess",{language:n}),angular.isArray(t)?angular.forEach(t,function(t){angular.extend(e,ut(t))}):angular.extend(e,ut(t)),S=!1,a.resolve({key:n,table:e}),s.$emit("$translateLoadingEnd",{language:n})};r.displayName="onLoaderSuccess";var i=function(t){s.$emit("$translateLoadingError",{language:t}),a.reject(t),s.$emit("$translateLoadingEnd",{language:t})};return i.displayName="onLoaderError",o.get(D)(e).then(r,i),a.promise};if(_&&(!(i=o.get(_)).get||!i.put))throw new Error("Couldn't use storage '"+_+"', missing get() or put() method!");if(J.length){var e=function(t){var e=o.get(t);e.setLocale(T||F),L[e.getInterpolationIdentifier()]=e};e.displayName="interpolationFactoryAdder",angular.forEach(J,e)}var c=function(a,r,i,s,o){var l=m.defer(),t=function(t){if(Object.prototype.hasOwnProperty.call(t,r)&&null!==t[r]){s.setLocale(a);var e=t[r];if("@:"===e.substr(0,2))c(a,e.substr(2),i,s,o).then(l.resolve,l.reject);else{var n=s.interpolate(t[r],i,"service",o,r);n=O(r,t[r],n,i,a),l.resolve(n)}s.setLocale(F)}else l.reject()};return t.displayName="fallbackTranslationResolver",function(t){var e=m.defer();if(Object.prototype.hasOwnProperty.call(q,t))e.resolve(q[t]);else if(f[t]){var n=function(t){lt(t.key,t.table),e.resolve(t.table)};n.displayName="translationTableResolver",f[t].then(n,e.reject)}else e.reject();return e.promise}(a).then(t,l.reject),l.promise},g=function(t,e,n,a,r){var i,s=q[t];if(s&&Object.prototype.hasOwnProperty.call(s,e)&&null!==s[e]){if(a.setLocale(t),i=a.interpolate(s[e],n,"filter",r,e),i=O(e,s[e],i,n,t,r),!angular.isString(i)&&angular.isFunction(i.$$unwrapTrustedValue)){var o=i.$$unwrapTrustedValue();if("@:"===o.substr(0,2))return g(t,o.substr(2),n,a,r)}else if("@:"===i.substr(0,2))return g(t,i.substr(2),n,a,r);a.setLocale(F)}return i},C=function(t,e,n,a){return V?o.get(V)(t,F,e,n,a):t},N=function(t,e,n,a,r,i){var s=m.defer();if(t<z.length){var o=z[t];c(o,e,n,a,i).then(function(t){s.resolve(t)},function(){return N(t+1,e,n,a,r,i).then(s.resolve,s.reject)})}else if(r)s.resolve(r);else{var l=C(e,n,r);V&&l?s.resolve(l):s.reject(j(e))}return s.promise},p=function(t,e,n,a,r){var i;if(t<z.length){var s=z[t];(i=g(s,e,n,a,r))||""===i||(i=p(t+1,e,n,a))}return i},h=function(t,e,n,a,r,i){var s,o,l,u,c,f=m.defer(),g=r?q[r]:q,p=n?L[n]:b;if(g&&Object.prototype.hasOwnProperty.call(g,t)&&null!==g[t]){var h=g[t];if("@:"===h.substr(0,2))w(h.substr(2),e,n,a,r,i).then(f.resolve,f.reject);else{var d=p.interpolate(h,e,"service",i,t);d=O(t,h,d,e,r),f.resolve(d)}}else{var v;V&&!S&&(v=C(t,e,a)),r&&z&&z.length?(s=t,o=e,l=p,u=a,c=i,N(0<y?y:$,s,o,l,u,c)).then(function(t){f.resolve(t)},function(t){f.reject(j(t))}):V&&!S&&v?a?f.resolve(a):f.resolve(v):a?f.resolve(a):f.reject(j(t))}return f.promise},d=function(t,e,n,a,r){var i,s=a?q[a]:q,o=b;if(L&&Object.prototype.hasOwnProperty.call(L,n)&&(o=L[n]),s&&Object.prototype.hasOwnProperty.call(s,t)&&null!==s[t]){var l=s[t];i="@:"===l.substr(0,2)?d(l.substr(2),e,n,a,r):(i=o.interpolate(l,e,"filter",r,t),O(t,l,i,e,a,r))}else{var u;V&&!S&&(u=C(t,e,r)),i=a&&z&&z.length?p(($=0)<y?y:$,t,e,o,r):V&&!S&&u?u:j(t)}return i},O=function(t,e,n,a,r,i){var s=G;return s&&("string"==typeof s&&(s=o.get(s)),s)?s(t,e,n,a,r,i):n},v=function(t){q[t]||!D||f[t]||(f[t]=u(t).then(function(t){return lt(t.key,t.table),t}))};w.preferredLanguage=function(t){return t&&ct(t),T},w.cloakClassName=function(){return Q},w.nestedObjectDelimeter=function(){return Z},w.fallbackLanguage=function(t){if(null!=t){if(ft(t),D&&z&&z.length)for(var e=0,n=z.length;e<n;e++)f[z[e]]||(f[z[e]]=u(z[e]));w.use(w.use())}return x?z[0]:z},w.useFallbackLanguage=function(t){if(null!=t)if(t){var e=it(z,t);-1<e&&(y=e)}else y=0},w.proposedLanguage=function(){return I},w.storage=function(){return i},w.negotiateLocale=ot,w.use=function(e){if(!e)return F;var n=m.defer();n.promise.then(null,angular.noop),s.$emit("$translateChangeStart",{language:e});var t=ot(e);return 0<Y.length&&!t?m.reject(e):(t&&(e=t),I=e,!X&&q[e]||!D||f[e]?f[e]?f[e].then(function(t){return I===t.key&&l(t.key),n.resolve(t.key),t},function(t){return!F&&z&&0<z.length&&z[0]!==t?w.use(z[0]).then(n.resolve,n.reject):n.reject(t)}):(n.resolve(e),l(e)):(f[e]=u(e).then(function(t){return lt(t.key,t.table),n.resolve(t.key),I===e&&l(t.key),t},function(t){return s.$emit("$translateChangeError",{language:t}),n.reject(t),s.$emit("$translateChangeEnd",{language:t}),m.reject(t)}),f[e].finally(function(){var t;I===(t=e)&&(I=void 0),f[t]=void 0})["catch"](angular.noop)),n.promise)},w.resolveClientLocale=function(){return rt()},w.storageKey=function(){return gt()},w.isPostCompilingEnabled=function(){return W},w.isForceAsyncReloadEnabled=function(){return X},w.isKeepContent=function(){return et},w.refresh=function(t){if(!D)throw new Error("Couldn't refresh translation table, no loader registered!");s.$emit("$translateRefreshStart",{language:t});var e=m.defer(),n={};function a(e){var t=u(e);return(f[e]=t).then(function(t){q[e]={},lt(e,t.table),n[e]=!0},angular.noop),t}if(e.promise.then(function(){for(var t in q)q.hasOwnProperty(t)&&(t in n||delete q[t]);F&&l(F)},angular.noop).finally(function(){s.$emit("$translateRefreshEnd",{language:t})}),t)q[t]?a(t).then(e.resolve,e.reject):e.reject();else{var r=z&&z.slice()||[];F&&-1===r.indexOf(F)&&r.push(F),m.all(r.map(a)).then(e.resolve,e.reject)}return e.promise},w.instant=function(t,e,n,a,r){var i=a&&a!==F?ot(a)||a:F;if(null===t||angular.isUndefined(t))return t;if(a&&v(a),angular.isArray(t)){for(var s={},o=0,l=t.length;o<l;o++)s[t[o]]=w.instant(t[o],e,n,a,r);return s}if(angular.isString(t)&&t.length<1)return t;t&&(t=st.apply(t));var u,c,f=[];T&&f.push(T),i&&f.push(i),z&&z.length&&(f=f.concat(z));for(var g=0,p=f.length;g<p;g++){var h=f[g];if(q[h]&&void 0!==q[h][t]&&(u=d(t,e,n,i,r)),void 0!==u)break}u||""===u||(U||M?u=j(t):(u=b.interpolate(t,e,"filter",r),V&&!S&&(c=C(t,e,r)),V&&!S&&c&&(u=c)));return u},w.versionInfo=function(){return"2.18.4"},w.loaderCache=function(){return H},w.directivePriority=function(){return nt},w.statefulFilter=function(){return at},w.isReady=function(){return tt};var n=m.defer();n.promise.then(function(){tt=!0}),w.onReady=function(t){var e=m.defer();return angular.isFunction(t)&&e.promise.then(t),tt?e.resolve():n.promise.then(e.resolve),e.promise},w.getAvailableLanguageKeys=function(){return 0<Y.length?Y:null},w.getTranslationTable=function(t){return(t=t||w.use())&&q[t]?angular.copy(q[t]):null};var a=s.$on("$translateReady",function(){n.resolve(),a(),a=null}),r=s.$on("$translateChangeEnd",function(){n.resolve(),r(),r=null});if(D){if(angular.equals(q,{})&&w.use()&&w.use(w.use()),z&&z.length)for(var E=function(t){return lt(t.key,t.table),s.$emit("$translateChangeEnd",{language:t.key}),t},k=0,P=z.length;k<P;k++){var A=z[k];!X&&q[A]||(f[A]=u(A).then(E))}}else s.$emit("$translateReady",{language:w.use()});return w}]}function n(s,o){"use strict";var t={};return t.setLocale=function(t){t},t.getInterpolationIdentifier=function(){return"default"},t.useSanitizeValueStrategy=function(t){return o.useStrategy(t),this},t.interpolate=function(t,e,n,a,r){var i;return e=e||{},e=o.sanitize(e,"params",a,n),i=angular.isNumber(t)?""+t:angular.isString(t)?(i=s(t)(e),o.sanitize(i,"text",a,n)):""},t}function a(S,L,w,j,C){"use strict";var N=function(t){return angular.isString(t)?t.toLowerCase():t};return{restrict:"AE",scope:!0,priority:S.directivePriority(),compile:function(t,h){var d=h.translateValues?h.translateValues:void 0,v=h.translateInterpolation?h.translateInterpolation:void 0,m=h.translateSanitizeStrategy?h.translateSanitizeStrategy:void 0,$=t[0].outerHTML.match(/translate-value-+/i),y="^(.*)("+L.startSymbol()+".*"+L.endSymbol()+")(.*)",b="^(.*)"+L.startSymbol()+"(.*)"+L.endSymbol()+"(.*)";return function(r,l,u){r.interpolateParams={},r.preText="",r.postText="",r.translateNamespace=function t(e){if(e.translateNamespace)return e.translateNamespace;if(e.$parent)return t(e.$parent)}(r);var i={},s=function(t){if(angular.isFunction(s._unwatchOld)&&(s._unwatchOld(),s._unwatchOld=void 0),angular.equals(t,"")||!angular.isDefined(t)){var e=function(){return this.toString().replace(/^\s+|\s+$/g,"")}.apply(l.text()).replace(/\n/g," "),n=e.match(y);if(angular.isArray(n)){r.preText=n[1],r.postText=n[3],i.translate=L(n[2])(r.$parent);var a=e.match(b);angular.isArray(a)&&a[2]&&a[2].length&&(s._unwatchOld=r.$watch(a[2],function(t){i.translate=t,c()}))}else i.translate=e||void 0}else i.translate=t;c()},t=function(e){u.$observe(e,function(t){i[e]=t,c()})};!function(t,e,n){if(e.translateValues&&angular.extend(t,j(e.translateValues)(r.$parent)),$)for(var a in n)Object.prototype.hasOwnProperty.call(e,a)&&"translateValue"===a.substr(0,14)&&"translateValues"!==a&&(t[N(a.substr(14,1))+a.substr(15)]=n[a])}(r.interpolateParams,u,h);var e=!0;for(var n in u.$observe("translate",function(t){void 0===t?s(""):""===t&&e||(i.translate=t,c()),e=!1}),u)u.hasOwnProperty(n)&&"translateAttr"===n.substr(0,13)&&13<n.length&&t(n);if(u.$observe("translateDefault",function(t){r.defaultText=t,c()}),m&&u.$observe("translateSanitizeStrategy",function(t){r.sanitizeStrategy=j(t)(r.$parent),c()}),d&&u.$observe("translateValues",function(t){t&&r.$parent.$watch(function(){angular.extend(r.interpolateParams,j(t)(r.$parent))})}),$){var a=function(n){u.$observe(n,function(t){var e=N(n.substr(14,1))+n.substr(15);r.interpolateParams[e]=t})};for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&"translateValue"===o.substr(0,14)&&"translateValues"!==o&&a(o)}var c=function(){for(var t in i)i.hasOwnProperty(t)&&void 0!==i[t]&&f(t,i[t],r,r.interpolateParams,r.defaultText,r.translateNamespace)},f=function(e,t,n,a,r,i){t?(i&&"."===t.charAt(0)&&(t=i+t),S(t,a,v,r,n.translateLanguage,n.sanitizeStrategy).then(function(t){g(t,n,!0,e)},function(t){g(t,n,!1,e)})):g(t,n,!1,e)},g=function(t,e,n,a){if(n||void 0!==e.defaultText&&(t=e.defaultText),"translate"===a){(n||!n&&!S.isKeepContent()&&void 0===u.translateKeepContent)&&l.empty().append(e.preText+t+e.postText);var r=S.isPostCompilingEnabled(),i=void 0!==h.translateCompile,s=i&&"false"!==h.translateCompile;(r&&!i||s)&&w(l.contents())(e)}else{var o=u.$attr[a];"data-"===o.substr(0,5)&&(o=o.substr(5)),o=o.substr(15),l.attr(o,t)}};(d||$||u.translateDefault)&&r.$watch("interpolateParams",c,!0),r.$on("translateLanguageChanged",c);var p=C.$on("$translateChangeSuccess",c);l.text().length?u.translate?s(u.translate):s(""):u.translate&&s(u.translate),c(),r.$on("$destroy",p)}}}}function r(u,c){"use strict";return{restrict:"A",priority:u.directivePriority(),link:function(n,a,r){var i,s,o,l={},t=function(){angular.forEach(i,function(t,e){t&&(l[e]=!0,n.translateNamespace&&"."===t.charAt(0)&&(t=n.translateNamespace+t),u(t,s,r.translateInterpolation,void 0,n.translateLanguage,o).then(function(t){a.attr(e,t)},function(t){a.attr(e,t)}))}),angular.forEach(l,function(t,e){i[e]||(a.removeAttr(e),delete l[e])})};f(n,r.translateAttr,function(t){i=t},t),f(n,r.translateValues,function(t){s=t},t),f(n,r.translateSanitizeStrategy,function(t){o=t},t),r.translateValues&&n.$watch(r.translateValues,t,!0),n.$on("translateLanguageChanged",t);var e=c.$on("$translateChangeSuccess",t);t(),n.$on("$destroy",e)}}}function f(t,e,n,a){"use strict";e&&("::"===e.substr(0,2)?e=e.substr(2):t.$watch(e,function(t){n(t),a()},!0),n(t.$eval(e)))}function i(s,o){"use strict";return{compile:function(t){var i=function(t){t.addClass(s.cloakClassName())};return i(t),function(t,e,n){var a=function(t){t.removeClass(s.cloakClassName())}.bind(this,e),r=i.bind(this,e);n.translateCloak&&n.translateCloak.length?(n.$observe("translateCloak",function(t){s(t).then(a,r)}),o.$on("$translateChangeSuccess",function(){s(n.translateCloak).then(a,r)})):s.onReady(a)}}}}function s(){"use strict";return{restrict:"A",scope:!0,compile:function(){return{pre:function(t,e,n){t.translateNamespace=function t(e){if(e.translateNamespace)return e.translateNamespace;if(e.$parent)return t(e.$parent)}(t),t.translateNamespace&&"."===n.translateNamespace.charAt(0)?t.translateNamespace+=n.translateNamespace:t.translateNamespace=n.translateNamespace}}}}}function o(){"use strict";return{restrict:"A",scope:!0,compile:function(){return function(e,t,n){n.$observe("translateLanguage",function(t){e.translateLanguage=t}),e.$watch("translateLanguage",function(){e.$broadcast("translateLanguageChanged")})}}}}function l(i,s){"use strict";var t=function(t,e,n,a){if(!angular.isObject(e)){var r=this||{__SCOPE_IS_NOT_AVAILABLE:"More info at https://github.com/angular/angular.js/commit/8863b9d04c722b278fa93c5d66ad1e578ad6eb1f"};e=i(e)(r)}return s.instant(t,e,n,a)};return s.statefulFilter()&&(t.$stateful=!0),t}function u(t){"use strict";return t("translations")}return t.$inject=["$translate"],e.$inject=["$STORAGE_KEY","$windowProvider","$translateSanitizationProvider","pascalprechtTranslateOverrider"],n.$inject=["$interpolate","$translateSanitization"],a.$inject=["$translate","$interpolate","$compile","$parse","$rootScope"],r.$inject=["$translate","$rootScope"],i.$inject=["$translate","$rootScope"],l.$inject=["$parse","$translate"],u.$inject=["$cacheFactory"],angular.module("pascalprecht.translate",["ng"]).run(t),t.displayName="runTranslate",angular.module("pascalprecht.translate").provider("$translateSanitization",function(){"use strict";var n,a,g,p=null,h=!1,d=!1;(g={sanitize:function(t,e){return"text"===e&&(t=i(t)),t},escape:function(t,e){return"text"===e&&(t=r(t)),t},sanitizeParameters:function(t,e){return"params"===e&&(t=o(t,i)),t},escapeParameters:function(t,e){return"params"===e&&(t=o(t,r)),t},sce:function(t,e,n){return"text"===e?t=s(t):"params"===e&&"filter"!==n&&(t=o(t,r)),t},sceParameters:function(t,e){return"params"===e&&(t=o(t,s)),t}}).escaped=g.escapeParameters,this.addStrategy=function(t,e){return g[t]=e,this},this.removeStrategy=function(t){return delete g[t],this},this.useStrategy=function(t){return h=!0,p=t,this},this.$get=["$injector","$log",function(u,c){var e,f={};return u.has("$sanitize")&&(n=u.get("$sanitize")),u.has("$sce")&&(a=u.get("$sce")),{useStrategy:(e=this,function(t){e.useStrategy(t)}),sanitize:function(t,e,n,a){if(p||h||d||(c.warn("pascalprecht.translate.$translateSanitization: No sanitization strategy has been configured. This can have serious security implications. See http://angular-translate.github.io/docs/#/guide/19_security for details."),d=!0),n||null===n||(n=p),!n)return t;a||(a="service");var r,i,s,o,l=angular.isArray(n)?n:[n];return r=t,i=e,s=a,o=l,angular.forEach(o,function(e){if(angular.isFunction(e))r=e(r,i,s);else if(angular.isFunction(g[e]))r=g[e](r,i,s);else{if(!angular.isString(g[e]))throw new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '"+e+"'");if(!f[g[e]])try{f[g[e]]=u.get(g[e])}catch(t){throw f[g[e]]=function(){},new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '"+e+"'")}r=f[g[e]](r,i,s)}}),r}}}];var r=function(t){var e=angular.element("<div></div>");return e.text(t),e.html()},i=function(t){if(!n)throw new Error("pascalprecht.translate.$translateSanitization: Error cannot find $sanitize service. Either include the ngSanitize module (https://docs.angularjs.org/api/ngSanitize) or use a sanitization strategy which does not depend on $sanitize, such as 'escape'.");return n(t)},s=function(t){if(!a)throw new Error("pascalprecht.translate.$translateSanitization: Error cannot find $sce service.");return a.trustAsHtml(t)},o=function(t,n,a){if(angular.isDate(t))return t;if(angular.isObject(t)){var r=angular.isArray(t)?[]:{};if(a){if(-1<a.indexOf(t))throw new Error("pascalprecht.translate.$translateSanitization: Error cannot interpolate parameter due recursive object")}else a=[];return a.push(t),angular.forEach(t,function(t,e){angular.isFunction(t)||(r[e]=o(t,n,a))}),a.splice(-1,1),r}return angular.isNumber(t)?t:!0===t||!1===t?t:angular.isUndefined(t)||null===t?t:n(t)}}),angular.module("pascalprecht.translate").constant("pascalprechtTranslateOverrider",{}).provider("$translate",e),e.displayName="displayName",angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation",n),n.displayName="$translateDefaultInterpolation",angular.module("pascalprecht.translate").constant("$STORAGE_KEY","NG_TRANSLATE_LANG_KEY"),angular.module("pascalprecht.translate").directive("translate",a),a.displayName="translateDirective",angular.module("pascalprecht.translate").directive("translateAttr",r),r.displayName="translateAttrDirective",angular.module("pascalprecht.translate").directive("translateCloak",i),i.displayName="translateCloakDirective",angular.module("pascalprecht.translate").directive("translateNamespace",s),s.displayName="translateNamespaceDirective",angular.module("pascalprecht.translate").directive("translateLanguage",o),o.displayName="translateLanguageDirective",angular.module("pascalprecht.translate").filter("translate",l),l.displayName="translateFilterFactory",angular.module("pascalprecht.translate").factory("$translationCache",u),u.displayName="$translationCache","pascalprecht.translate"});
/*!
 * angular-translate - v2.19.0 - 2021-09-02
 * 
 * Copyright (c) 2021 The angular-translate team, Pascal Precht; Licensed MIT
 */
!function(t,e){"function"==typeof define&&define.amd?define(["messageformat"],function(t){return e(t)}):"object"==typeof module&&module.exports?module.exports=e(require("messageformat")):e(t.MessageFormat)}(this,function(r){function i(u,t,e,n){"use strict";var a={},c=t.get(e),f=new r("en");return angular.isFunction(n)&&n(f),c||(c=t(e)),c.put("en",f),a.setLocale=function(t){(f=c.get(t))||(f=new r(t),angular.isFunction(n)&&n(f),c.put(t,f))},a.getInterpolationIdentifier=function(){return"messageformat"},a.useSanitizeValueStrategy=function(t){return u.useStrategy(t),this},a.interpolate=function(t,e,n,a){e=e||{},e=u.sanitize(e,"params",a);var r=c.get("mf:"+t);if(!r){for(var i in e)if(e.hasOwnProperty(i)){var o=parseInt(e[i],10);angular.isNumber(o)&&""+o===e[i]&&(e[i]=o)}r=f.compile(t),c.put("mf:"+t,r)}var s=r(e);return u.sanitize(s,"text",a)},a}return angular.module("pascalprecht.translate").constant("TRANSLATE_MF_INTERPOLATION_CACHE","$translateMessageFormatInterpolation").provider("$translateMessageFormatInterpolation",function(){"use strict";var a;this.messageFormatConfigurer=function(t){a=t},this.$get=["$translateSanitization","$cacheFactory","TRANSLATE_MF_INTERPOLATION_CACHE",function(t,e,n){return i(t,e,n,a)}]}),i.displayName="$translateMessageFormatInterpolation","pascalprecht.translate"});
/*!
 * angular-translate - v2.19.0 - 2021-09-02
 * 
 * Copyright (c) 2021 The angular-translate team, Pascal Precht; Licensed MIT
 */
!function(t,e){"function"==typeof define&&define.amd?define(["messageformat"],function(t){return e(t)}):"object"==typeof module&&module.exports?module.exports=e(require("messageformat")):e(t.MessageFormat)}(this,function(r){function i(u,t,e,n){"use strict";var a={},c=t.get(e),f=new r("en");return angular.isFunction(n)&&n(f),c||(c=t(e)),c.put("en",f),a.setLocale=function(t){(f=c.get(t))||(f=new r(t),angular.isFunction(n)&&n(f),c.put(t,f))},a.getInterpolationIdentifier=function(){return"messageformat"},a.useSanitizeValueStrategy=function(t){return u.useStrategy(t),this},a.interpolate=function(t,e,n,a){e=e||{},e=u.sanitize(e,"params",a);var r=c.get("mf:"+t);if(!r){for(var i in e)if(e.hasOwnProperty(i)){var o=parseInt(e[i],10);angular.isNumber(o)&&""+o===e[i]&&(e[i]=o)}r=f.compile(t),c.put("mf:"+t,r)}var s=r(e);return u.sanitize(s,"text",a)},a}return angular.module("pascalprecht.translate").constant("TRANSLATE_MF_INTERPOLATION_CACHE","$translateMessageFormatInterpolation").provider("$translateMessageFormatInterpolation",function(){"use strict";var a;this.messageFormatConfigurer=function(t){a=t},this.$get=["$translateSanitization","$cacheFactory","TRANSLATE_MF_INTERPOLATION_CACHE",function(t,e,n){return i(t,e,n,a)}]}),i.displayName="$translateMessageFormatInterpolation","pascalprecht.translate"});
/*!
 * angular-translate - v2.18.4 - 2021-01-14
 * 
 * Copyright (c) 2021 The angular-translate team, Pascal Precht; Licensed MIT
 */
!function(t,e){"function"==typeof define&&define.amd?define(["messageformat"],function(t){return e(t)}):"object"==typeof module&&module.exports?module.exports=e(require("messageformat")):e(t.MessageFormat)}(this,function(r){function i(u,t,e,n){"use strict";var a={},c=t.get(e),f=new r("en");return angular.isFunction(n)&&n(f),c||(c=t(e)),c.put("en",f),a.setLocale=function(t){(f=c.get(t))||(f=new r(t),angular.isFunction(n)&&n(f),c.put(t,f))},a.getInterpolationIdentifier=function(){return"messageformat"},a.useSanitizeValueStrategy=function(t){return u.useStrategy(t),this},a.interpolate=function(t,e,n,a){e=e||{},e=u.sanitize(e,"params",a);var r=c.get("mf:"+t);if(!r){for(var i in e)if(e.hasOwnProperty(i)){var o=parseInt(e[i],10);angular.isNumber(o)&&""+o===e[i]&&(e[i]=o)}r=f.compile(t),c.put("mf:"+t,r)}var s=r(e);return u.sanitize(s,"text",a)},a}return angular.module("pascalprecht.translate").constant("TRANSLATE_MF_INTERPOLATION_CACHE","$translateMessageFormatInterpolation").provider("$translateMessageFormatInterpolation",function(){"use strict";var a;this.messageFormatConfigurer=function(t){a=t},this.$get=["$translateSanitization","$cacheFactory","TRANSLATE_MF_INTERPOLATION_CACHE",function(t,e,n){return i(t,e,n,a)}]}),i.displayName="$translateMessageFormatInterpolation","pascalprecht.translate"});
/*!
 * angular-translate - v2.18.3 - 2020-07-08
 * 
 * Copyright (c) 2020 The angular-translate team, Pascal Precht; Licensed MIT
 */
!function(e,i){"function"==typeof define&&define.amd?define([],function(){return i()}):"object"==typeof module&&module.exports?module.exports=i():i()}(0,function(){function e(n,a){"use strict";return function(r){if(!(r&&(angular.isArray(r.files)||angular.isString(r.prefix)&&angular.isString(r.suffix))))throw new Error("Couldn't load static files, no files and prefix or suffix specified!");r.files||(r.files=[{prefix:r.prefix,suffix:r.suffix}]);for(var e=function(e){if(!e||!angular.isString(e.prefix)||!angular.isString(e.suffix))throw new Error("Couldn't load static file, no prefix or suffix specified!");var i=[e.prefix,r.key,e.suffix].join("");return angular.isObject(r.fileMap)&&r.fileMap[i]&&(i=r.fileMap[i]),a(angular.extend({url:i,method:"GET"},r.$http)).then(function(e){return e.data},function(){return n.reject(r.key)})},i=[],t=r.files.length,f=0;f<t;f++)i.push(e({prefix:r.files[f].prefix,key:r.key,suffix:r.files[f].suffix}));return n.all(i).then(function(e){for(var i=e.length,r={},t=0;t<i;t++)for(var f in e[t])r[f]=e[t][f];return r})}}return e.$inject=["$q","$http"],angular.module("pascalprecht.translate").factory("$translateStaticFilesLoader",e),e.displayName="$translateStaticFilesLoader","pascalprecht.translate"});
/*!
 * angular-translate - v2.19.0 - 2021-09-02
 * 
 * Copyright (c) 2021 The angular-translate team, Pascal Precht; Licensed MIT
 */
!function(e,i){"function"==typeof define&&define.amd?define([],function(){return i()}):"object"==typeof module&&module.exports?module.exports=i():i()}(0,function(){function e(n,a){"use strict";return function(r){if(!(r&&(angular.isArray(r.files)||angular.isString(r.prefix)&&angular.isString(r.suffix))))throw new Error("Couldn't load static files, no files and prefix or suffix specified!");r.files||(r.files=[{prefix:r.prefix,suffix:r.suffix}]);for(var e=function(e){if(!e||!angular.isString(e.prefix)||!angular.isString(e.suffix))throw new Error("Couldn't load static file, no prefix or suffix specified!");var i=[e.prefix,r.key,e.suffix].join("");return angular.isObject(r.fileMap)&&r.fileMap[i]&&(i=r.fileMap[i]),a(angular.extend({url:i,method:"GET"},r.$http)).then(function(e){return e.data},function(){return n.reject(r.key)})},i=[],t=r.files.length,f=0;f<t;f++)i.push(e({prefix:r.files[f].prefix,key:r.key,suffix:r.files[f].suffix}));return n.all(i).then(function(e){for(var i=e.length,r={},t=0;t<i;t++)for(var f in e[t])r[f]=e[t][f];return r})}}return e.$inject=["$q","$http"],angular.module("pascalprecht.translate").factory("$translateStaticFilesLoader",e),e.displayName="$translateStaticFilesLoader","pascalprecht.translate"});
/*!
 * angular-translate - v2.18.4 - 2021-01-14
 * 
 * Copyright (c) 2021 The angular-translate team, Pascal Precht; Licensed MIT
 */
!function(e,i){"function"==typeof define&&define.amd?define([],function(){return i()}):"object"==typeof module&&module.exports?module.exports=i():i()}(0,function(){function e(n,a){"use strict";return function(r){if(!(r&&(angular.isArray(r.files)||angular.isString(r.prefix)&&angular.isString(r.suffix))))throw new Error("Couldn't load static files, no files and prefix or suffix specified!");r.files||(r.files=[{prefix:r.prefix,suffix:r.suffix}]);for(var e=function(e){if(!e||!angular.isString(e.prefix)||!angular.isString(e.suffix))throw new Error("Couldn't load static file, no prefix or suffix specified!");var i=[e.prefix,r.key,e.suffix].join("");return angular.isObject(r.fileMap)&&r.fileMap[i]&&(i=r.fileMap[i]),a(angular.extend({url:i,method:"GET"},r.$http)).then(function(e){return e.data},function(){return n.reject(r.key)})},i=[],t=r.files.length,f=0;f<t;f++)i.push(e({prefix:r.files[f].prefix,key:r.key,suffix:r.files[f].suffix}));return n.all(i).then(function(e){for(var i=e.length,r={},t=0;t<i;t++)for(var f in e[t])r[f]=e[t][f];return r})}}return e.$inject=["$q","$http"],angular.module("pascalprecht.translate").factory("$translateStaticFilesLoader",e),e.displayName="$translateStaticFilesLoader","pascalprecht.translate"});
(function () {
	'use strict';

	angular
		.module('loginService', [
			'loginService.login',
			'ngCookies',
			'pascalprecht.translate'
		])
		.config([
			'$translateProvider',
			function ($translateProvider) {
				$translateProvider
				    .translations(window.Qualtrics.locale, window.Qualtrics.strings)
				    .preferredLanguage(window.Qualtrics.locale);
			}
		]);
})();

(function(){var g=function(e,h,f,g){
this.get=function(a){for(var a=a+"=",c=document.cookie.split(";"),b=0,e=c.length;b<e;b++)
{for(var d=c[b];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}
return null};
this.set=function(a,c)
{var b="",b=new Date;b.setTime(b.getTime()+6048E5);b="; expires="+b.toGMTString();document.cookie=a+"="+c+b+"; path=/; "}
;
this.check=function(){var a=this.get(f);if(a)a=a.split(":");else if(100!=e)"v"==h&&(e=Math.random()>=e/100?0:100),a=[h,e,0],this.set(f,a.join(":"));else return!0;var c=a[1];if(100==c)return!0;switch(a[0])
{case "v":return!1;case "r":return c=a[2]%Math.floor(100/c),a[2]++,this.set(f,a.join(":")),!c}
return!0};
this.go=function(){if(this.check()){var a=document.createElement("script");a.type="text/javascript";a.src=g+ "&t=" + (new Date()).getTime();document.body&&document.body.appendChild(a)}};
this.start=function(){var a=this;window.addEventListener?window.addEventListener("load",function()
{a.go()},!1):window.attachEvent&&window.attachEvent("onload",function(){a.go()}
)}};
try
{(new g(100,"r","QSI_S_ZN_cYDxfeM8jruPnSJ","//zncydxfem8jrupnsj-qwebsite.siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_ZID=ZN_cYDxfeM8jruPnSJ&Q_LOC="+encodeURIComponent(window.location.href))).start()}
catch(i){}})();


(function () {
  'use strict';
  angular
    .module('loginService.login', [
      'loginService.login.controllers',
      'loginService.login.services',
      'loginService.login.directives'
    ])
		.filter('spaceless', function() {
			return function(input) {
				if (input) {
					return input.replace(/\s+/g, '-');
				}
			}
		})
    //IDS-3592 override required otherwise it breaks tickets and vocalize
    .config(['$locationProvider', function($locationProvider) {
			$locationProvider.hashPrefix('');
     }]);
  angular
    .module('loginService.login.controllers', ['qstrap', 'ngclipboard']);
  angular
    .module('loginService.login.services', ['monospaced.qrcode']);
  angular
    .module('loginService.login.directives', []);
})();

// Other helper methods
// Overriding String.format if not defined
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

(function () {
  'use strict';
  angular
    .module('support', [
      'support.controllers',
      'support.directives',
      'support.services'
    ])
    .factory("$loggedIn", function() {
        var user = "";
        var accessToken = "";
        return {
          getAccessToken: function() { return accessToken },
          setAccessToken: function(val) { accessToken = val },
          get: function() { return user },
          set: function(val) { user = val }
        }
     });

  angular
    .module('support.controllers', []);
  angular
    .module('support.directives', []);
  angular
      .module('support.services', []);    
})();

(function () {
	'use strict';
	angular
		.module('loginService.login.controllers')
		.controller('EmailVerificationController',
			['$scope', 'EmailVerificationService', '$timeout', '$window', '$location', '$translate', 'Utils',
				function ($scope, EmailVerificationService, $timeout, $window, $location, $translate, Utils) {
					var evc = this;

					evc.states = {
						VERIFYING_EMAIL: 1,
						EMAIL_VERIFIED: 2,
						EMAIL_VERIFICATION_FAILED: 3
					};

					evc.state = evc.states.VERIFYING_EMAIL;
					evc.data = {
						errorMessage: '',
						errorTag: ''
					};

					if (evc.state === evc.states.VERIFYING_EMAIL) {
						verifyEmail();
					}

					function verifyEmail() {
						var code = getCode();
						EmailVerificationService.verifyEmail(code)
							.then(
								function (response) {
									evc.state = evc.states.EMAIL_VERIFIED;
									evc.data = response.data;
								},
								function (response) {
									evc.state = evc.states.EMAIL_VERIFICATION_FAILED;
									evc.data.errorMessage = 'LOGIN.' + response.data.message;
									evc.data.errorTag = response.data.errorTag;
								});
					}

					function getCode() {
						var queryParams = Utils.getQueryParams();
						return queryParams["code"];
					}

					function getRequestData(key) {
						return evc.data[key];
					}

					evc.getRequestData = getRequestData;
				}
			])
})();

(function () {
	'use strict';
	angular
		.module('loginService.login.controllers')
		.controller('EnrollmentController',
		['$scope', 'EnrollmentService', 'ResetPasswordService', 'Credentials', '$timeout', '$window', '$location', '$translate', 'Utils',
			function ($scope, EnrollmentService, ResetPasswordService, Credentials, $timeout, $window, $location, $translate, Utils) {
				$scope.state = 'enrollment-start';
        $scope.lc.showError = false;

				$scope.onFormSubmit = function() {
					if ($scope.state === 'enrollment-start') {
						enrollUser();
					}
					else if ($scope.state === 'enrollment-verify') {
						processEnrollment();
					}
					else if ($scope.state === 'enrollment-verified') {
						signIn();
					}
					else if ($scope.state === 'enrollment-collect-attributes') {
						collectAttributes();
					}
					else if ($scope.state === 'enrollment-unverified'
					 || $scope.state === 'enrollment-disabled') {
						window.location.href = "/login";
					}
				};

				var enrollUser = function() {
					if (!$scope.lc.selfEnrollmentEmail) {
						$scope.lc.message = $translate.instant('LOGIN.NEED_EMAIL');
						$scope.lc.showError = true;
					} else {
						$scope.lc.resetErrors();
						Credentials.enrollUser($scope.lc.selfEnrollmentEmail, $scope.lc.enrollmentBrandId, $scope.lc.selfEnrollmentAccessCode).then(
							function(data, status, headers, config) {
								$scope.state = 'enrollment-sent'
							},
							function(data, status, headers, config) {
								if(data.status === 400) {
									if (data.data.message === 'COUPON_CODE_REQUIRED') {
										$scope.lc.message = $translate.instant('LOGIN.COUPON_CODE_REQUIRED');
										$scope.lc.showError = true;
									} else {
										$scope.lc.showError = true;
										$scope.lc.message = $translate.instant('LOGIN.' + data.data.message);
									}
								} else {
									$scope.lc.message =  $translate.instant('LOGIN.UNABLE_TO_COMPLETE');
								}
							}
						);
					}
				};

				var redirectToLogin = function() {
					window.location.href = ("/login" + window.location.search);
				};

				$scope.redirectToLogin = redirectToLogin;

				var processEnrollment = function() {
					$scope.lc.showError = false;
          $scope.lc.message = '';

          if (!$scope.lc.password || !$scope.lc.confirmPassword) {
						$scope.lc.message = $translate.instant('LOGIN.PASSWORD_CONFIRM');
						$scope.lc.showError = true;
						return;
					}
					else if ($scope.lc.password !== $scope.lc.confirmPassword) {
						$scope.lc.message = $translate.instant('LOGIN.PASSWORD_NOT_MATCH');
						$scope.lc.showError = true;
						return;
					}

          if (!$scope.lc.firstName) {
            $scope.lc.message = $translate.instant('LOGIN.NEED_FIRST_NAME');
            $scope.lc.showError = true;
            return;
          }

          if (!$scope.lc.lastName) {
            $scope.lc.message = $translate.instant('LOGIN.NEED_LAST_NAME');
            $scope.lc.showError = true;
            return;
          }

					if ($scope.lc.collectAdditionalAttributes) {
						$scope.state = 'enrollment-collect-attributes';
					} else {
						finishEnrollment()
					}
				};

				var finishEnrollment = function() {
					var code = getCode();
					$scope.resetInProgress = true;
					EnrollmentService.processEnrollment($scope.lc.version, code, $scope.lc.firstName, $scope.lc.lastName, $scope.lc.password, $scope.lc.attributeValues).then(function(response) {
						$scope.resetInProgress = false;
						$scope.state = 'enrollment-verified';

						if (response.data && response.data.redirectUrl) {
							$scope.redirectUrl = response.data.redirectUrl;
						}
					}, function(response) {
						$scope.resetInProgress = false;
						if(response.data && response.data.message) {
							$scope.lc.message = $translate.instant('LOGIN.' + response.data.message);
						}
						else {
							$scope.lc.message = $translate.instant('LOGIN.EXP_ISSUES');
						}

						$scope.lc.showError = true;
					});
				};

				var signIn = function() {
					if ($scope.redirectUrl) {
						$window.location.href = $scope.redirectUrl;
					} else {
						Utils.redirectPost("/login", {username: $scope.lc.username, password: $scope.lc.password});
					}
				};

				var collectAttributes = function() {
					$scope.lc.showError = false;

					// check to see if each custom value has been set in attributeValues via ngModel
					// needs to be checked dynamically since different brands will have different requirements
					for (var i = 0; i < $scope.lc.attributesToCollect.length; i++) {
						//TODO(@imobbs) - Change back to `.id` after EAX is ready for attribute IDs
						var attributeId = $scope.lc.attributesToCollect[i].label;
						if (!$scope.lc.attributeValues[attributeId]) {
							$scope.lc.showError = true;
							return;
						}
					}

					// verify enrollment and sign in
					$scope.state = 'enrollment-verified';
					finishEnrollment();
				};

				var getCode = function() {
          var queryParams = Utils.getQueryParams();
          return queryParams["code"];
				};

				var verifyRequest = function() {
					var code = getCode();
					if (code) {
						$scope.state = 'enrollment-verifying';
						EnrollmentService.verifyRequest($scope.lc.version, code).then(function(response) {
							$scope.state = 'enrollment-verify';
							$scope.lc.username = response.data.username;
							$scope.lc.constraints = ResetPasswordService.verifyPasswordConstraints(response.data.passwordConstraints);

 							if (response.data.hasOwnProperty("attributesToCollect")) {
								$scope.lc.collectAdditionalAttributes = true;
								$scope.lc.attributesToCollect = response.data.attributesToCollect;
								$scope.lc.attributesToCollect.forEach(function(attr) {
									if (attr.type === 'options') {
										attr.options = idToValue(attr.options)
									}
								});
								$scope.lc.attributeValues = {};
							} else {
								$scope.lc.collectAdditionalAttributes = false;
							}

						}, function(response) {
							$scope.state = 'enrollment-unverified';
							if (response.status === 400) {
									$scope.lc.message = $translate.instant('LOGIN.' + response.data.message);
							} else {
								$scope.lc.message =  $translate.instant('LOGIN.EXP_ISSUES');
							}
						});
					} else if (!$scope.lc.enrollmentBrandId) {
						$scope.state = 'enrollment-disabled';
					}
				};

				function idToValue(options) {
					// TODO(@imobbs): change `value: o.label` to `value: o.id` after EAX is ready for IDs
					return options.map(function(o) {return {value: o.label, label: o.label}});
				}

				function getItemLabel(item) {
					var selected = item.options.find(function(i) {return i.selected});
					return selected ? selected.label : item.label;
				}
				$scope.lc.getItemLabel = getItemLabel;

				verifyRequest();
			}
		])
})();

(function () {
	angular
		.module('loginService.login.controllers')
		.controller('LoginController',
		['$scope',
			'$cookies',
			'$window',
			'Credentials',
			'Utils',
			'$translate',
			'$location',
			'$timeout',
			'$sce',
			function ($scope, $cookies, $window, Credentials, Utils, $translate, $location, $timeout, $sce) {
				var lc = this;
				var loginErrorCodes = [
					'DEFAULT_INTERNAL_FAILURE', 'PASSWORD_TOO_COMMON', 'LINK_EXPIRED_HEADER', 'IP_ADDRESS_RESTRICTION',
					'USERNAME_LOCKED', 'TOO_MANY_SESSIONS', 'USER_DISABLED', 'BRAND_DISABLED', 'INCORRECT_CODE',
					'ORGANIZATION_DISABLED', 'RESTRICT_TO_DOMAIN', 'RESTRICT_TO_BRAND', 'EMAIL_MISSING', 'INVALID_REDIRECT_URL',
					'NEED_CAPTCHA', 'RELOCATION_LOCK', 'USER_CREATION_LIMIT_EXCEEDED', 'LOGIN_WEBHOOK_IS_UNAVAILABLE',
					'GBAAS_GBA451', 'GBAAS_GBB451', 'GBAAS_GBC451',
					'LOGIN_PROVIDER_DISABLED', 'CONNECTION_TEST_ERROR', 'SSO_REQUEST_TIMEOUT',
					'FIRST_PARTY_APPLICATION_LOGIN_DISABLED', 'EMAIL_NOT_VERIFIED', 'DEFAULT_BAD_REQUEST',
					'LOGIN_PAGE_1', 'LOGIN_PAGE_2','LOGIN_PAGE_3','LOGIN_PAGE_4','LOGIN_PAGE_5','LOGIN_PAGE_6','LOGIN_PAGE_7',
					'LOGIN_PAGE_8','LOGIN_PAGE_9','LOGIN_PAGE_10','LOGIN_PAGE_11',
					'AUTH_1', 'AUTH_2', 'AUTH_3', 'AUTH_4', 'AUTH_5', 'AUTH_6', 'AUTH_7', 'AUTH_8',
					'SSO_AUTH_1', 'SSO_AUTH_2', 'SSO_AUTH_3', 'SSO_AUTH_4', 'SSO_AUTH_5',
					'AUTH_TR_1', 'AUTH_TR_2',
					'API_AUTH_1', 'ID_AUTH_1', 'FP_AUTH_1', 'FP_AUTH_2', 'FP_AUTH_3',
					'SUPPORT_PAGE_1', 'SUPPORT_AUTH_1', 'SUPPORT_AUTH_2', 'SUPPORT_AUTH_3', 'SUPPORT_AUTH_4'
				];

				var accountSelectErrors = [
					'FIRST_PARTY_APPLICATION_LOGIN_DISABLED',
					'EMAIL_NOT_VERIFIED',
					'AUTH_4'
				];

				var mfaErrorCodes = [
					'ALREADY_ENROLLED_IN_MFA_OPTION',
					'INVALID_PHONE_NUMBER',
				];

				// used to provide suggestions for authenticator apps during the MFA enrollment process
				$scope.duo = {
					name: "Duo Mobile",
					androidLink: "https://play.google.com/store/apps/details?id=com.duosecurity.duomobile&hl=en",
					iOSLink: "https://itunes.apple.com/us/app/duo-mobile/id422663827?mt=8"
				};
				$scope.authy = {
					name: "Authy",
					androidLink: "https://play.google.com/store/apps/details?id=com.authy.authy&hl=en",
					iOSLink: "https://itunes.apple.com/us/app/authy/id494168017?mt=8"
				};
				$scope.gauth = {
					name: "Google Authenticator",
					androidLink: "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en",
					iOSLink: "https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8"
				};

				/**
				 * variables
				 * */
				lc.forgotPasswordText = $sce.trustAsHtml($translate.instant('LOGIN.FORGOT_PASSWORD_WITH_LINK') + "&nbsp;");
				lc.newUserText = $sce.trustAsHtml($translate.instant('LOGIN.NEW_USER') + "&nbsp;");
				lc.needUsernameText = $sce.trustAsHtml($translate.instant('LOGIN.NEED_USERNAME_OR_EMAIL'));
				lc.optionalLoginText = null;
				lc.brandCustomText = null;
				lc.message = null;
				lc.userEmail = null;
				lc.recaptchaSiteKey= '6LdFdyQTAAAAAM5BnlGoA6uwbNuuBjUmHaEzF007';
				lc.showResetLink = null;
				lc.showResetLinkNewUser = null;
				lc.stateID = null;
				lc.accountList = null;
				lc.lastAccountPressed = null;
				lc.accountSelected = false;
				lc.accountSelectText = null;
				lc.showResendCodeMessageTimeout = null;
				lc.page = 'login';
				lc.showResendCodeMessage = false;
				lc.mfaRememberDevice = false;
				lc.mobile = false;
				lc.visible = false;
				lc.hideHeader = false;
				// IE 10 and below has MSIE
				lc.unsupportedBrowser = navigator.userAgent.indexOf("MSIE") >= 0;
				lc.showNeedHelpLink = (isApiAuth()|| isIDAuth());
				// Variables for Identity Provider Selection
				lc.currenlySelectedIdP = null;
				lc.isIdPSelected = false;
				lc.idpList = [];
				lc.language = $translate.proposedLanguage() || $translate.use();

				/**
				 * page showing control variables
				 **/
				lc.pageControls = {
					showQRCode: false,
					showLoginOptions: false,
					showInputToken: false,
					showMFAEnrollmentMessage: false,
					showAuthenticatorAppInfo: false,
					showInvalidLink: false,
					showLoadingPage: false,
					showExtraFactors: false,
					showExtraFactorsMessage: false,
					showEnterPhoneNumber: false,
					showLinkExpired: false
				};

				/**
				 * function declarations
				 * */
				lc.clearError = clearError;
				lc.login = login;
				lc.oAuthLogin = oAuthLogin;
				lc.redirectToEnrollment = redirectToEnrollment;
				lc.returnToLogin = returnToLogin;
				lc.forgotPassword = forgotPassword;
				lc.sendPasswordResetEmail = sendPasswordResetEmail;
				lc.verifyMFACode = verifyMFACode;
				lc.resendMFACode = resendMFACode;
				lc.redirectToLogin = redirectToLogin;
				lc.checkIfUserIsEnrolled = checkIfUserIsEnrolled;
				lc.continueLogin = continueLogin;
				lc.saveBackupCodes = saveBackupCodes;
				lc.printBackupCodes = printBackupCodes;
				lc.userSavedBackupCodes = userSavedBackupCodes;
				lc.copiedBackupCodes = copiedBackupCodes;
				lc.prepEnrollExtraFactors = prepEnrollExtraFactors;
				lc.checkToCloseWindow = checkToCloseWindow;
				lc.closeWindow = closeWindow;
				lc.enrollPhoneNumber = enrollPhoneNumber;
				lc.showOrganizationLogin = showOrganizationLogin;
				lc.onLogoClick = onLogoClick;
				lc.organizationLogin = organizationLogin;
				lc.accountSelectOnOver = accountSelectOnOver;
				lc.accountSelectOnRelease = accountSelectOnRelease;
				lc.accountSelectOnExit = accountSelectOnExit;
				lc.accountSelectOnDown = accountSelectOnDown;
				lc.accountSelectOnEnter = accountSelectOnEnter;
				lc.mobileRedirectToBlank = mobileRedirectToBlank;
				lc.fedrampRedirect = fedrampRedirect;
				lc.fedrampClientRedirect = fedrampClientRedirect;
				lc.trustSrc = function(src) {
					return $sce.trustAsResourceUrl(src);
				};
				lc.resetErrors = resetErrors;
				lc.idpSelectOnOver = idpSelectOnOver;
				lc.idpSelectOnRelease = idpSelectOnRelease;
				lc.idpSelectOnExit = idpSelectOnExit;
				lc.idpSelectOnDown = idpSelectOnDown;
				lc.idpSelectOnEnter = idpSelectOnEnter;

				/* *
				 * page showing control functions
				 * */
				lc.transitionToInputToken = transitionToInputToken;
				lc.transitionToMFAEnrollment = transitionToMFAEnrollment;
				lc.transitionToMFAEnrolled = transitionToMFAEnrolled;
				lc.transitionToMoreOptions = transitionToMoreOptions;
				lc.transitionToOption = transitionToOption;
				lc.transitionToQRCode = transitionToQRCode;
				lc.transitionToBackupCodes = transitionToBackupCodes;
				lc.transitionToEnrollExtraFactors = transitionToEnrollExtraFactors;
				lc.transitionToEnrollExtraFactorsMessage = transitionToEnrollExtraFactorsMessage;
				lc.transitionToInvalidLink = transitionToInvalidLink;
				lc.transitionToExpiredLink = transitionToExpiredLink;
				lc.hideAllPages = hideAllPages;

				/**
				 * objects
				 * */
				lc.showError = {
					username: false,
					password: false,
					unauthorized: false,
					mfaCode: false,
					mfaPhoneNumber: false,
				};

				lc.states = {
					OK: 1,
					LOADING: 2,
					INITIALIZING: 4,
					FORGOT_PASSWORD: 5,
					PASSWORD_RESET_SENT: 6,
					SIGN_IN: 8,
					SELECT_ACCOUNT: 9,
					ENROLL_IN_MFA: 10,
					MFA: 11,
					MFA_CODE_WAIT: 12,
					ORGANIZATION_LOGIN: 13,
					ORGANIZATION_LOGIN_EMAIL_SENT: 14,
					LINK_EXPIRED: 15,
					IDENTITY_PROVIDER_SELECT: 16,
					IE_DEPRECATION: 17
				};


				lc.errorMessages = {
					needUsername: 'LOGIN.NEED_USERNAME',
					needPassword: 'LOGIN.NEED_PASSWORD',
					needUserPass: 'LOGIN.NEED_USERPASS',
					invalidLogin: 'LOGIN.INVALID_LOGIN',
					ipAddressError: 'LOGIN.IP_ADDRESS_RESTRICTION',
					needCaptcha: 'LOGIN.NEED_CAPTCHA',
					usernameLockedError: 'LOGIN.USERNAME_LOCKED',
					unableToComplete: 'LOGIN.UNABLE_TO_COMPLETE',
					incompleteContactAdmin: 'LOGIN.INCOMPLETE_CONTACT_ADMIN',
					incorrectCodeError: 'LOGIN.INCORRECT_CODE',
					experiencingIssues: 'LOGIN.EXP_ISSUES',
					tooManySessionsError: 'LOGIN.TOO_MANY_SESSIONS',
					relocationLockError: 'LOGIN.RELOCATION_LOCK'
				};

				lc.config = {
					state: lc.states.OK
				};

				lc.translation = {
					state: lc.states.INITIALIZING
				};

				lc.passwordResetResolved = {
					state: lc.states.OK
				}

				lc.mfaCodeResolved = {
					state: lc.states.OK
				}

				lc.mfaInfo = {
					backupCodes: null,
					backupCodesSaved: false,
					backupCodesToCopy: function() {
						if (lc.mfaInfo.backupCodes) {
							return $translate.instant('LOGIN.COPIED_MESSAGE') + lc.mfaInfo.backupCodes.join(', ');
						} else {
							return "";
						}
					},
					continueLoginData: null,
					enrolled: false,
					enrollExtraFactors: false,
					secretKey: null,
					qrCode: {
						// More info about the link's formatting: https://github.com/google/google-authenticator/wiki/Key-Uri-Format
						_PREFIX_URL: "otpauth://totp/Qualtrics:",
						_SUFFIX_URL: "?issuer=Qualtrics&algorithm=SHA1&digits=6&period=30&secret=",
						URL: null,
						generateURL: function(email) {
							lc.mfaInfo.qrCode.URL = lc.mfaInfo.qrCode._PREFIX_URL + email + lc.mfaInfo.qrCode._SUFFIX_URL + lc.mfaInfo.secretKey;
						}
					},
					type: null,
					types: {
						APP: "APP",
						BACKUP: "BACKUP",
						EMAIL: "EMAIL",
						SMS: "SMS"
					},
					transitions: {
						APP: checkIfUserIsEnrolled,
						BACKUP: transitionToBackupInputCode,
						EMAIL: resendMFACode,
						SMS: checkIfUserIsEnrolled,
					},
					enrolledTransitions: {
						APP: transitionToAppInputToken,
						EMAIL: transitionToEmailInputToken,
						SMS: transitionToSMSInputToken
					},
					inEmailMFA: function() {
						return lc.mfaInfo.type === lc.mfaInfo.types.EMAIL;
					},
					inAppMFA: function() {
						return lc.mfaInfo.type === lc.mfaInfo.types.APP;
					},
					mfaObfuscatedEmail: null, //filled in when we receive information from the server
					mfaOptions: [],
					typeToMFAOptionMessage: {
						APP: function() { return $translate.instant('LOGIN.SEND_APP'); },
						BACKUP: function() { return $translate.instant('LOGIN.USE_BACKUP_CODE'); },
						EMAIL: function() { return $translate.instant('LOGIN.SEND_EMAIL') + ' ' + lc.mfaInfo.mfaObfuscatedEmail; },
						SMS: function() {
							return (lc.mfaInfo.mfaObfuscatedNumber) ?  $translate.instant('LOGIN.SEND_SMS_TO') + ' ' + lc.mfaInfo.mfaObfuscatedNumber : $translate.instant('LOGIN.USE_SMS');
						}
					},
					message: null,
					messages: {
						// to be consistent with the EMAIL field
						APP: function() { return $translate.instant('LOGIN.ENTER_APP_TOKEN'); },
						BACKUP: function() { return $translate.instant('LOGIN.ENTER_BACKUP_TOKEN');},
						EMAIL: function() { return $translate.instant('LOGIN.SEND_CODE_TO') + ' ' + lc.mfaInfo.mfaObfuscatedEmail; },
						SMS: function() { return $translate.instant('LOGIN.ENTER_SMS_TOKEN') + ' ' + lc.mfaInfo.mfaObfuscatedNumber; }
					},
					phoneNumber: null
				};
				lc.deviceToken = $cookies.deviceToken;

				var brand = window.Qualtrics.brand;
				var isBrandKnown = !angular.equals(brand, {}); // unknown brands represented by an empty object

				lc.brandCustomText = $sce.trustAsHtml(brand.customText);
				lc.optionalLoginText = $sce.trustAsHtml(brand.optionalLoginText);
				lc.loginSupportLink = $sce.trustAsHtml(brand.loginSupportLink);
				lc.loginSupportLinkText = $sce.trustAsHtml(brand.loginSupportLinkText);
				lc.allowSelfEnrollment = (brand.allowSelfEnrollment !== undefined) ? brand.allowSelfEnrollment : false;
				lc.openIdEnabled = (brand.openIDEnabled !== undefined) ? brand.openIDEnabled : false;
				lc.isLdapEnabled = (brand.isLdapEnabled !== undefined) ? brand.isLdapEnabled : false;
				lc.showResetLink = (brand.showForgotPasswordLink !== undefined) ? brand.showForgotPasswordLink : true;
				lc.showResetLinkNewUser = lc.showResetLink && isBrandKnown && !lc.allowSelfEnrollment;
				lc.enrollmentBrandId = brand.enrollmentBrandId;
				lc.forgetPasswordLabelName = $translate.instant('LOGIN.FORGOT_PASSWORD');
				// ignore ssologin query param for branded logins
				lc.ssologin = isBrandKnown ? false : isSSOLoginQueryParam();
				lc.isXmappMagicLinkEnabled = isXmappMagicLinkQueryParam();
				// remove after hydra stuff is done
				lc.isOauthRedirect = Utils.getQueryParams().path === "/login/oauth/authorize";
				lc.isIdAuthRedirect = Utils.getQueryParams().path === "/login/idauth";
				lc.clientId = Utils.getQueryParams().client_id;
				lc.supportRedirectText = "Can't login or don't have an account?";
				lc.supportRedirectLink = "https://support-portal.qualtrics.com/lite";
				lc.isFedrampEnvironment = ($window.location.origin === "https://gov1.qualtrics.com");

				lc.showOrganizationLoginLink =
				(isApiAuth()
				|| isIDAuth()
				|| (isFPAuth() && lc.ssologin === undefined)
				|| lc.isOauthRedirect) && (lc.enrollmentBrandId === undefined);

				lc.showOrganizationHeader =
				(isApiAuth()
				|| isIDAuth()
				|| isFPAuth()
				|| lc.isOauthRedirect) && lc.enrollmentBrandId;

				lc.brandLogo = undefined;
				setBrandLogoWithUrl(brand.logoUrl);

				lc.marketingBanner = window.Qualtrics.marketingBanner
					&& (location.pathname !== '/login/enrollment')
					&& (location.pathname !== '/login/account-select')
					&& (location.pathname !== '/login/identity-provider-select')
					&& (location.pathname !== '/login/reset')
					&& !isApiAuth()
					&& !isIDAuth()
					&& !isFPAuth()
					&& !lc.isOauthRedirect;
				lc.errorTag = window.Qualtrics.errorTag;
				lc.errorCode = window.Qualtrics.errorCode;
				lc.errorDebuggingCode = window.Qualtrics.errorDebuggingCode;
				lc.hideRetry = window.Qualtrics.hideRetry;
				lc.needLoginCaptcha = window.Qualtrics.needLoginCaptcha;

			  var clientAdditionalMetadata = window.Qualtrics.clientAdditionalMetadata;
				if(clientAdditionalMetadata) {
					lc.showSupportLink = clientAdditionalMetadata.showSupportLink;
					lc.showSupportLoginBanner = clientAdditionalMetadata.showSupportLoginBanner;
					lc.fedrampRedirectLink = clientAdditionalMetadata.fedrampRedirectLink;
				}

				var error = Utils.getQueryParams().error;

				if (inIframe()) {
					var url = (window.location !== window.parent.location)
					? document.referrer
					: document.location.href;
					var data = {
						"info" : "Url " + url + " is framing login service."
					}
					$.ajax({
						url:'/login/v1/logger',
						type:'post',
						data: data,
						success:function() {
						}
					});
				}

				function inIframe () {
					try {
						return $window.self !== $window.top;
					} catch (e) {
						return true;
					}
				}

				showIeDeprecationIfBrowserIsIE();

				if(error) {
					lc.error = $translate.instant('LOGIN.' + error);
					lc.visible = true;
				}
				else if(window.Qualtrics.error) {
					lc.error = window.Qualtrics.error;
					if (window.Qualtrics.firstPartyAppName) {
						lc.error = lc.error.format(window.Qualtrics.firstPartyAppName);
					} else if (isInternalAuthError(lc.error)) {
						lc.error = $translate.instant('LOGIN.INTERNAL_ERROR_WITH_CODE').format(lc.error);
					}
					lc.visible = true;
				}
				else if(window.Qualtrics.user && window.Qualtrics.user.username) {
					// IDS-6257 - can decode safely here as we only come here with X-DC user login
					// after encoding in LoginPageTemplateService
					lc.username = htmlDecode(window.Qualtrics.user.username);
					lc.password = htmlDecode(window.Qualtrics.user.password);
					login();
				}
				else if (window.Qualtrics.organizationLoginId) {
					lc.showOrganizationLogin();
					// IDS-6257 - this field if non-empty in a X-DC call is encoded, so also must be decoded
					lc.organizationLoginId = htmlDecode(window.Qualtrics.organizationLoginId);
					organizationLogin();
				} else if (window.location.pathname === '/login/account-select') {
					showAccountChoose();
				} else if (window.location.pathname === '/login/identity-provider-select') {
					showIdPChoose();
				}
				else if(lc.ssologin === true) {
					lc.showOrganizationLogin();
					lc.organizationLoginId = Utils.getQueryParams().orgid;
					if (lc.organizationLoginId){
						organizationLogin();
					} else {
						lc.visible = true;
					}
				}
				else {
					lc.visible = true;
				}

				window.Qualtrics.user = undefined;

				function htmlDecode(html) {
					var txt = document.createElement("textarea");
					txt.innerHTML = html;
					return txt.value;
				}

				function setBrandLogoWithUrl(logoUrl) {
					if (logoUrl) {

						function logoSuccess(data, status, headers, config) {
							lc.brandLogo = (data !== true ? false : logoUrl);
						}
						function logoError(data, status, headers, config) {
							lc.brandLogo = false;
						}

						Credentials.checkIfImageExistsAtUrl(logoUrl).then(
							logoSuccess, logoError);
					}
					else {
						lc.brandLogo = false;
					}
				}

				function clearError(key) {
					lc.showError.unauthorized = false;
					lc.showError[key] = false;
					if (key === 'username') {
						lc.message = $translate.instant(lc.errorMessages.needPassword);
					} else {
						lc.message = '';
					}
				}

				function clearPasswordForgotError(key) {
					lc.showError.unauthorized = false;
					lc.showError[key] = false;
					lc.message = '';
				}

				function oAuthLogin() {
					$window.location.href = '/ControlPanel?GoogleOAuth=1';
				}

				function fedrampRedirect() {
					var currentUrl = $window.location.href;
					var origin = $window.location.origin;
					var redirectUrl = currentUrl.replace(origin, "https://gov1.qualtrics.com");
					$window.location.href = redirectUrl;
				}

				function fedrampClientRedirect() {
					$window.location.href = lc.fedrampRedirectLink;
					return;
				}

				function isApiAuth() {
					var path = Utils.getQueryParams().path;
					return (path && path.indexOf("/login/apiauth") === 0);
				}

				function isIDAuth() {
					var path = Utils.getQueryParams().path;
					return (path && path.indexOf("/login/idauth") === 0);
				}

				function isFPAuth() {
					var path = Utils.getQueryParams().path;
					return (path && path.indexOf("/login/fpauth") === 0);
				}

				function isSSOLoginQueryParam() {
					const ssologin = Utils.getQueryParams().ssologin;
					return Utils.convertValueToBooleanOrUndefined(ssologin);
				}

				function isXmappMagicLinkQueryParam() {
					const magicLink = Utils.getQueryParams().xmapp_magic_link;
					return Utils.convertValueToBooleanOrUndefined(magicLink);
				}

				function accountSelectOnDown(msg, $event) {
					if(!lc.accountSelected) {
						var element = event.currentTarget;
						element.style.background = '#C4C4C4';
						lc.lastAccountPressed = element;
					}
				}

				function onLinkError(data) {
					if(accountSelectErrors.indexOf(data.data.message) === -1) {
						data.data = {message: "LINK_EXPIRED_HEADER"};
					}
					loginError(data);
				}

				function accountSelectOnRelease(msg, $event) {
					if(!lc.accountSelected) {
						var element = event.currentTarget;
						if (lc.lastAccountPressed !== null && lc.lastAccountPressed === element) {
							var params = Utils.getQueryParams();
							var stateID = Utils.getQueryParams().stateID;
							var sourceDC = Utils.getQueryParams().sourceDC;
							lc.accountSelected = true;

							// On error, only send magic link users to the expired page. Other users will be redirected to
							//		web login with the translated error message "Link Expired" allowing them to more easily log in again
							var onError = onLinkError;
							if(params.magic) {
								lc.mobile = (params.hasOwnProperty('mobile') ? params.mobile : false);
								onError = lc.transitionToExpiredLink;
							}
							Credentials.processAccountChooseItem(
								stateID, sourceDC, lc.accountList.itemMap[element.getAttribute('index')]).then(loginSuccess, onError);
						} else {
							element.style.background = '#E7E8EA';
						}
					}
				}

				function accountSelectOnEnter(msg, $event) {
					if(!lc.accountSelected) {
						var element = event.currentTarget;
						element.style.background = '#C4C4C4';
						var params = Utils.getQueryParams();
						var stateID = Utils.getQueryParams().stateID;
						var sourceDC = Utils.getQueryParams().sourceDC;
						lc.accountSelected = true;

						// On error, only send magic link users to the expired page. Other users will be redirected to
						//		web login with the translated error message "Link Expired" allowing them to more easily log in again
						var onError = onLinkError;
						if(params.magic) {
							lc.mobile = (params.hasOwnProperty('mobile') ? params.mobile : false);
							onError = lc.transitionToExpiredLink;
						}
						Credentials.processAccountChooseItem(
							stateID, sourceDC, lc.accountList.itemMap[element.getAttribute('index')]).then(loginSuccess, onError);
					}
				}

				function mobileRedirectToBlank() {
					setTimeout(function() {
						window.location.href = 'about:blank';
					}, 5000);
				}

				function accountSelectOnOver(msg, $event) {
					if(!lc.accountSelected) {
						var element = event.currentTarget;
						element.style.background = '#E7E8EA';
					}
				}

				function accountSelectOnExit(msg, $event) {
					if(!lc.accountSelected) {
						var element = event.currentTarget;
						element.style.background = '#FAFAFA';
					}
				}

				function showAccountChoose() {
					var params = Utils.getQueryParams();
					var stateID = Utils.getQueryParams().stateID;
					var sourceDC = Utils.getQueryParams().sourceDC;
					var selectedUserID = Utils.getQueryParams().userID;
					Credentials.retrieveAccountChooseStateInfo(stateID, sourceDC).then(
            function(data, status) {
							var accounts;
							if (selectedUserID) {
								accounts = [];
								for (var index in data.data.accounts) {
									var account = data.data.accounts[index];
									if (account.userID === selectedUserID) {
										accounts.push(account);
										break;
									}
								}
							} else {
								accounts = data.data.accounts;
							}
							if (accounts.length === 1) {
								// If one account, skip the account selector
								Credentials.processAccountChooseItem(
									stateID, sourceDC, accounts[0].userID).then(loginSuccess, loginError);
							} else {
								var i = 0;
								var usernames = [];

								for(var index in accounts) {
									var account = accounts[index];
									var fullName = account.firstName + ' ' + account.lastName;
									if(usernames.indexOf(fullName) === -1) {
										usernames.push(fullName);
									}
								}

								if(params.magic) {
									lc.accountSelectText = $translate.instant('LOGIN.MORE_THAN_ONE_ACCOUNT');
								} else {
									lc.accountSelectText = $translate.instant('LOGIN.MULTIPLE_ORGANIZATIONS');
								}
								for (var index in accounts) {
									var account = accounts[index];
									var item = {};
									item.header = (account.brandDescription) ? account.brandDescription : account.brandID;
									item.username = (usernames.length > 1) ? account.firstName + " " + account.lastName : "";
									item.brand = ((account.brandBaseUrl != null) ? account.brandBaseUrl : "").replace("https://", "");
									item.index = i;
									lc.accountList.items.push(item);
									lc.accountList.itemMap[i] = account.userID;
									i++;
								}

								lc.hideHeader = true;
								lc.config.state = lc.states.SELECT_ACCOUNT;
								lc.visible = true;
							}
            },
            function() {
            	if(params.magic) {
            		lc.mobile = (params.hasOwnProperty('mobile') ? params.mobile : false);
            		lc.transitionToExpiredLink();
								lc.visible = true;
							} else {
								window.location.href = "/login";
							}
						}
          );
				}

				function idpSelectOnDown(msg, $event) {
					if(!lc.isIdPSelected) {
						var element = event.currentTarget;
						element.style.background = '#C4C4C4';
						lc.currenlySelectedIdP = element;
					}
				}

				function idpSelectOnRelease(msg, $event) {
					if(!lc.isIdPSelected) {
						var element = event.currentTarget;
						if (lc.currenlySelectedIdP !== null && lc.currenlySelectedIdP === element) {
							lc.isIdPSelected = true;
							Credentials.loginWithOrganizationSSOConfig(lc.idpList[parseInt(element.getAttribute('index'))].organizationSSOConfigId);
						} else {
							element.style.background = '#E7E8EA';
						}
					}
				}

				function idpSelectOnOver(msg, $event) {
					if(!lc.isIdPSelected) {
						var element = event.currentTarget;
						element.style.background = '#E7E8EA';
					}
				}

				function idpSelectOnExit(msg, $event) {
					if(!lc.isIdPSelected) {
						var element = event.currentTarget;
						element.style.background = '#FAFAFA';
					}
				}

				function idpSelectOnEnter(msg, $event) {
					if(!lc.isIdPSelected) {
						var element = event.currentTarget;
						element.style.background = '#C4C4C4';
						var state = Utils.getQueryParams().stateID;
						var path = Utils.getQueryParams().path;
						lc.isIdPSelected = true;
						Credentials.loginWithOrganizationSSOConfig(lc.idpList[parseInt(element.getAttribute('index'))].organizationSSOConfigId, state, path);
					}
				}

				function showIdPChoose() {
					var params = Utils.getQueryParams();
					var stateID = Utils.getQueryParams().stateID;
					var path = Utils.getQueryParams().path;
					Credentials.getIdentityProviderSelectInfo(stateID).then(
						function(data, status) {
							var providers = [];
							if (data.data) {
								providers = data.data.identityProviderList;
							}
							if (providers.length === 1) {
								// If one account, skip the account selector
								Credentials.loginWithOrganizationSSOConfig(providers.organizationSSOConfigId, stateID, path);
							} else {
								var i = 0;

								for (var index in providers) {
									var provider = providers[index];
									var item = {};
									item.index = i;
									if ( provider.type !== 'SSO') {
										item.header =' LOGIN.LOGIN_WITH_QUALTRICS';
									} else {
										item.header = provider.displayName || 'LOGIN.LOGIN_WITH_SSO';
									}
									item.organizationSSOConfigId = provider.organizationSSOConfigId;
									lc.idpList.push(item);
									i++;
								}
								lc.hideHeader = true;
								lc.config.state = lc.states.IDENTITY_PROVIDER_SELECT;
								lc.visible = true;
							}
						},
						function() {
								window.location.href = "/login";
						}
					);
				}

				function showIeDeprecationIfBrowserIsIE() {
					var ua = window.navigator.userAgent;
					var msie = ua.indexOf("MSIE");
					var trident = ua.indexOf("Trident")

					var isBrowserIE = msie > 0 || trident > 0;

					if (isBrowserIE) {
						lc.config.state = lc.states.IE_DEPRECATION;
						lc.visible = true;
						lc.marketingBanner = false;
					}
				}

				function login() {
					if (isEmpty(lc.username) && isEmpty(lc.password)) {
						lc.message = $translate.instant(lc.errorMessages.needUserPass);
						lc.showError.username = true;
						lc.showError.password = true;
					} else if (isEmpty(lc.username)) {
						lc.message = $translate.instant(lc.errorMessages.needUsername);
						lc.showError.username = true;
					} else if (isEmpty(lc.password)) {
						lc.message = $translate.instant(lc.errorMessages.needPassword);
						lc.showError.password = true;
					} else {
						resetErrors();
						lc.config.state = lc.states.SIGN_IN;
						lc.needLoginCaptcha = false;
						Credentials.verify(lc.username, lc.password, lc.deviceToken).then(loginSuccess, loginError);
					}
				}

				lc.accountList = {
					items: [],
					itemMap: {}
				};

				function loginSuccess(data, status, headers, config) {
					var params = Utils.getQueryParams();
					if(params.mobile) {
						lc.mobileRedirectToBlank();
					}
					if (data.data.redirectUrl) {
						$window.location.href = data.data.redirectUrl;
					} else if (data.data.datacenterRedirectUrl) {
						Utils.redirectPost(data.data.datacenterRedirectUrl, {username: lc.username, password: lc.password});
					} else if (data.data.enrollInMFA) {
						transitionToMFAEnrollment(data);
						lc.visible = true;
					} else if (data.data.mfaDeliveryType) {
						transitionToMFAEnrolled(data);
						lc.visible = true;
					} else {
						lc.config.state = lc.states.ERROR;
						lc.showError.unauthorized = true;
						lc.message =  $translate.instant('LOGIN.UNABLE_TO_COMPLETE');
						lc.visible = true;
					}
				}

				function loginError(data) {
					lc.hideHeader = false;
					lc.visible = true;
					lc.config.state = lc.states.ERROR;
					lc.password = '';
					lc.focusPasswordInput = true;
					lc.errorTag = '';
					lc.errorCode = '';
					if (data.status === 500 || data.status === undefined) {
						if (data.data && "message" in data.data && isInternalAuthError(data.data.message)) {
							lc.message = $translate.instant('LOGIN.INTERNAL_ERROR_WITH_CODE').format(data.data.message);
						} else {
							lc.message = $translate.instant('LOGIN.UNABLE_TO_COMPLETE');
						}
						if (data.data && "errorTag" in data.data) {
							lc.errorTag = data.data.errorTag;
						}
					} else if (data.data && "message" in data.data && loginErrorCodes.indexOf(data.data.message) >= 0) {
						lc.message = $translate.instant('LOGIN.' + data.data.message);
						if ("errorTag" in data.data) {
							lc.errorTag = data.data.errorTag;
						}
						if ("errorCode" in data.data) {
							lc.errorCode = data.data.errorCode;
						}
						if("appName" in data.data) {
							lc.message = $translate.instant('LOGIN.' + data.data.message).format(data.data.appName);
						}
						if (data.data.message === "NEED_CAPTCHA") {
							window.grecaptcha.reset();
							lc.needLoginCaptcha = true;
							lc.message = $translate.instant(lc.errorMessages.invalidLogin);
						}
					} else if (data.data && data.data.hasOwnProperty("loginWebhookResponseMessage")) {
						lc.message = data.data.loginWebhookResponseMessage;
					} else {
						lc.message = $translate.instant(lc.errorMessages.invalidLogin);
					}
					lc.showError.unauthorized = true;
				}

				function isInternalAuthError(error) {
					return error.startsWith('LOGIN_PAGE_')
						|| error.startsWith('AUTH_')
						|| error.startsWith('SSO_AUTH_')
						|| error.startsWith('AUTH_TR_')
						|| error.startsWith('API_AUTH_')
						|| error.startsWith('ID_AUTH_')
						|| error.startsWith('FP_AUTH_')
						|| error.startsWith('SUPPORT_PAGE_')
						|| error.startsWith('SUPPORT_AUTH_')
						|| error.startsWith('SAML_DELEGATION_')
						|| error.startsWith('LOGIN_WEBHOOK_');
				}

				function forgotPassword() {
					lc.userEmail = null;
					lc.config.state = lc.states.FORGOT_PASSWORD;
					if (window.grecaptcha !== undefined) {
						window.grecaptcha.reset(1);
						lc.needPasswordResetCaptcha = true;
					} else {
						lc.needPasswordResetCaptcha = false;
					}
				}

				function sendPasswordResetEmail() {
					if (isEmpty(lc.username)) {
						lc.message = $translate.instant(lc.errorMessages.needUsername);
						lc.showError.username = true;
					} else {
						resetErrors();
						Credentials.passwordReset(lc.username).then(
							resetPasswordEmailSuccess, resetPasswordEmailFailure);
					}

					function resetPasswordEmailSuccess(data, status, headers, config) {
						lc.config.state = lc.states.PASSWORD_RESET_SENT;
					}

					function resetPasswordEmailFailure(data, status, headers, config) {
						lc.showError.forgotPassword = true;
						lc.message =  $translate.instant('LOGIN.UNABLE_TO_COMPLETE');
						if (loginErrorCodes.indexOf(data.data.message) >= 0) {
							lc.message = $translate.instant('LOGIN.' + data.data.message);
						}
					}
				}

				function resetErrors() {
					for (var error in lc.showError) {
						if (lc.showError.hasOwnProperty(error)) {
							lc.showError[error] = false;
						}
					}
				}

				function isEmpty(value) {
					return (value === undefined || value === null || value.length === 0);
				}

				function redirectToLogin() {
					var redirectUrl;
					if(window.Qualtrics.firstPartyAppName === "Basecamp") {
					  if(lc.isFedrampEnvironment) {
							redirectUrl = "https://gov1-basecamp.qualtrics.com/";
						} else {
						  redirectUrl = "https://basecamp.qualtrics.com/";
						}
					}
					else if(lc.loginUrl) {
						redirectUrl = lc.loginUrl;
					}
					else {
						var redirectQueryParams = Utils.getRedirectQueryParamString(['error']);
						if(redirectQueryParams) {
							redirectUrl = "/login?" + redirectQueryParams;
						}
						else {
							redirectUrl = "/login";
						}
					}

					window.location.href = redirectUrl;
				}

				function redirectToEnrollment() {
					if (window.Qualtrics.useLoginServiceEnrollment) {
						$window.location.href = ("/login/enrollment" + window.location.search);
					} else {
						$window.location.href = "/ControlPanel/Register.php?BrandID=" + lc.enrollmentBrandId;
					}
				}

				function returnToLogin() {
					if (window.grecaptcha !== undefined) {
						window.grecaptcha.reset(0);
          }
					hideAllPages();
					if (lc.config.state === lc.states.PASSWORD_RESET_SENT && lc.username) {
						lc.username = null;
					}
					lc.userEmail = null;
					lc.organizationLoginId = null;
					lc.brandSupportsOrganizationLogin = true;
					lc.config.state = lc.states.OK;
				}

				function onLogoClick() {
					var params = Utils.getQueryParams();
					if(params.hasOwnProperty('redirect_uri')) {
						if(params.redirect_uri.startsWith('xmapp://')) {
							return;
						}
					}
					var lang = Utils.getQueryParams().lang;
					var url = "https://www.qualtrics.com" + (lang ? ("/" + lang.toLowerCase()) : "");
					$window.location.href = url;
				}

				function showOrganizationLogin() {
					lc.config.state=lc.states.ORGANIZATION_LOGIN;
					lc.brandSupportsOrganizationLogin = true;
					lc.organizationLoginId = undefined;
					lc.showError.organizationLogin = false;
				}

				function organizationLogin() {
					if (lc.brandSupportsOrganizationLogin) {

						Credentials.organizationAuthenticate(lc.organizationLoginId).then(
							function(data, status, headers, config) {
								if (data.data.brandBaseUrl) {
									var redirectUrl = data.data.brandBaseUrl + window.location.pathname + window.location.search;
									$window.location.href = redirectUrl;
								} else if (data.data.datacenterRedirectUrl) {
										Utils.redirectPost(data.data.datacenterRedirectUrl, { organizationLoginId: lc.organizationLoginId });
								} else {
									lc.brandSupportsOrganizationLogin = false;
								}

								lc.visible = true;
							},
							function (data) {
								lc.showError.organizationLogin = true;
								if(data.status === 404) {
									lc.message =  $translate.instant('LOGIN.INVALID_ORGANIZATION_ID');
								} else {
									lc.message =  $translate.instant('LOGIN.UNABLE_TO_COMPLETE');
									if (data.data && "errorTag" in data.data) {
										lc.errorTag = data.data.errorTag;
									}
								}

								lc.visible = true;
							}
						);

					} else {

						Credentials.organizationAuthenticateWithEmail(lc.organizationLoginId, lc.organizationLoginUserEmail).then(
							function(data, status, headers, config) {
								lc.showError.organizationLogin = false;
								lc.config.state = lc.states.ORGANIZATION_LOGIN_EMAIL_SENT;
							},
							function (data) {
								lc.showError.organizationLogin = true;
								if(data.status === 404) {
									lc.message =  $translate.instant('LOGIN.EMAIL_NOT_FOUND');
								} else {
									lc.message =  $translate.instant('LOGIN.UNABLE_TO_COMPLETE');
									if (data.data && "errorTag" in data.data) {
										lc.errorTag = data.data.errorTag;
									}
								}
							}
						);

					}
				}

				function transitionToOption(mfaType) {
					lc.mfaInfo.type = mfaType;
					lc.mfaInfo.inputTokenMessage = lc.mfaInfo.messages[mfaType]();
					lc.mfaInfo.transitions[mfaType]();
				}

				function transitionToMFAEnrolled(data) {
					lc.mfaInfo.enrolled = true;
					lc.mfaInfo.mfaObfuscatedEmail = data.data.mfaObfuscatedContact;
					lc.mfaInfo.type = data.data.mfaDeliveryType;
					lc.stateID = data.data.mfaInfoID;

					lc.mfaInfo.enrolledTransitions[data.data.mfaDeliveryType](data);
				}

				function transitionToBackupCodes(data) {
					hideAllPages();
					lc.pageControls.showBackupCodes = true;
					lc.mfaInfo.backupCodes = data.data.mfaBackupCodes.split(':');
					lc.mfaInfo.continueLoginData = data;
				}

				function transitionToBackupInputCode() {
					hideAllPages();
					lc.mfaInfo.inputTokenMessage = lc.mfaInfo.messages.BACKUP();

					transitionToInputToken();
				}

				function transitionToEnterPhoneNumber() {
					hideAllPages();
					lc.pageControls.showEnterPhoneNumber = true;
				}

				function removeMFAOption(mfaType) {
					for (var i = 0; i < lc.mfaInfo.mfaOptions.length; ++i) {
						if (lc.mfaInfo.mfaOptions[i].value === mfaType) {
							lc.mfaInfo.mfaOptions.splice(i, 1);
						}
					}
				}

				function getAllMFALoginOptions() {
					var options = getAllMFAEnrollmentOptions();
					options.push(lc.mfaInfo.types.BACKUP);
					return options;
				}

				function getAllMFAEnrollmentOptions() {
					return [lc.mfaInfo.types.EMAIL, lc.mfaInfo.types.APP];
				}

				function prepEnrollExtraFactors(data) {
					data.data.mfaInfoID = Utils.getQueryParams().VerifyCode;
					initializeBasicData(data);

					populateMFAOptions(getAllMFALoginOptions());

					var options = splitMFAOptions(data);
					for (var i = 0; i < options.length; ++i) {
						removeMFAOption(options[i]);
					}

					transitionToEnrollExtraFactors();
				}

				function transitionToEnrollExtraFactors() {
					hideAllPages();
					if (checkToShowFinishEnrollmentMessage()) {
						showFinishEnrollmentMessage();
						return;
					}

					// update MFA type so we're selecting and showing the first element to users
					lc.mfaInfo.type = lc.mfaInfo.mfaOptions[0].value;

					lc.mfaInfo.enrollExtraFactors = true;
					lc.mfaCode = null;
					lc.pageControls.showLoginOptions = true;

				}

				function transitionToEnrollExtraFactorsMessage() {
					hideAllPages();
					removeMFAOption(lc.mfaInfo.type);
					if (checkToShowFinishEnrollmentMessage()) {
						showFinishEnrollmentMessage();
						return;
					}

					lc.pageControls.showExtraFactorsMessage = true;
				}

				function checkToShowFinishEnrollmentMessage() {
					return lc.mfaInfo.mfaOptions.length === 0;
				}

				function showFinishEnrollmentMessage() {
					// user has enrolled in all available options
					hideAllPages();
					lc.mfaInfo.enrolled = true;
					lc.mfaInfo.enrollExtraFactors = false;
					lc.pageControls.showFinishEnrollmentMessage = true;
				}

				function transitionToMFAEnrollment(data) {
					hideAllPages();
					lc.mfaInfo.enrolled = false;
					lc.pageControls.showLoginOptions = true;
					lc.config.state = lc.states.ENROLL_IN_MFA;
					// default to showing email as enrollment method
					lc.mfaInfo.type = lc.mfaInfo.types.EMAIL;

					initializeBasicData(data);
					populateMFAOptions(getAllMFAEnrollmentOptions());
				}

				function initializeBasicData(data) {
					if (data) {
						lc.stateID = data.data.mfaInfoID;
						lc.mfaInfo.secretKey = data.data.secretKey;
						lc.mfaInfo.qrCode.generateURL(data.data.email);
						lc.mfaInfo.mfaObfuscatedEmail = data.data.mfaObfuscatedContact;
					}
				}

				function enrollPhoneNumber() {
					console.log("Enrolling phone number", lc.mfaInfo.phoneNumber);
					resetErrors();
					if (!$("#phone").intlTelInput("isValidNumber")) {
						lc.showError.mfaPhoneNumber = true;
						lc.message = $translate.instant('LOGIN.INVALID_PHONE_NUMBER');
						return;
					}
					var fullPhoneNumber = $("#phone").intlTelInput("getNumber");
					Credentials.enrollPhoneNumber(lc.stateID, fullPhoneNumber).then(resendMFACodeSuccess, enrollPhoneNumberError);
				}

				function enrollPhoneNumberError(data) {
					resetErrors();
					lc.showError.mfaPhoneNumber = true;

					if (mfaErrorCodes.indexOf(data.data.message) >= 0) {
						lc.message = $translate.instant('LOGIN.' + data.data.message);
					} else if (data.data.message === 'MFA_CODE_EXPIRED') {
						$window.location.reload();
					} else {
						lc.message = $translate.instant(lc.errorMessages.experiencingIssues);
					}
				}

				function transitionToQRCode() {
					hideAllPages();
					lc.pageControls.showQRCode = true;
				}

				function transitionToAppInputToken(data) {
					hideAllPages();
					lc.mfaInfo.inputTokenMessage = lc.mfaInfo.messages.APP();

					transitionToInputToken();
				}

				function transitionToEmailInputToken(data) {
					hideAllPages();
					lc.mfaInfo.type = lc.mfaInfo.types.EMAIL;

					lc.stateID = data.data.mfaInfoID;
					lc.mfaInfo.mfaObfuscatedEmail = data.data.mfaObfuscatedContact;
					lc.mfaInfo.inputTokenMessage = lc.mfaInfo.messages.EMAIL();
					lc.showResendCodeMessageTimeout = $timeout(function() { lc.showResendCodeMessage = true; }, 180000);

					transitionToInputToken();
				}

				function transitionToSMSInputToken(data) {
					hideAllPages();
					lc.mfaInfo.type = lc.mfaInfo.types.SMS;

					lc.stateID = data.data.mfaInfoID;
					lc.mfaInfo.mfaObfuscatedNumber = data.data.mfaObfuscatedContact;
					lc.mfaInfo.inputTokenMessage = lc.mfaInfo.messages.SMS();
					lc.showResendCodeMessageTimeout = $timeout(function() { lc.showResendCodeMessage = true; }, 30000);

					transitionToInputToken();
				}

				function transitionToMFAAction() {
					hideAllPages();
					lc.config.state = lc.states.MFA;
					lc.pageControls.showLoadingPage = true;

					var queryParams = Utils.getQueryParams();

					if (queryParams.regenerateBackupCodes === 'true') {
						transitionToRegeneratedMFABackupCodes();
					} else if (queryParams.enrollExtraFactors === 'true') {
						Credentials.getEnrollExtraFactorsInfo(queryParams.VerifyCode).then(prepEnrollExtraFactors, transitionToInvalidLink);
					}
				}

				function transitionToRegeneratedMFABackupCodes() {
					hideAllPages();
					lc.mfaInfo.enrolled = true;

					var queryParams = Utils.getQueryParams();
					Credentials.getRegeneratedMFABackupCodes(queryParams.VerifyCode).then(transitionToBackupCodes, transitionToInvalidLink);
				}

				function transitionToInvalidLink() {
					hideAllPages();
					lc.pageControls.showInvalidLink = true;
				}

				function transitionToExpiredLink() {
					hideAllPages();
					lc.pageControls.showLinkExpired = true;
					lc.config.state = lc.states.LINK_EXPIRED;
					lc.hideHeader = true;
				}

				function transitionToMoreOptions() {
					hideAllPages();
					resetErrors();
					lc.mfaCode = null;
					if (lc.mfaInfo.enrolled) {
						if (lc.mfaInfo.mfaOptions && lc.mfaInfo.mfaOptions.length === 0) {
							Credentials.getMFAOptions(lc.stateID).then(getMFAOptionsSuccess, getMFAOptionsFailure);
						}
					}
					lc.pageControls.showLoginOptions = true;
					$timeout.cancel(lc.showResendCodeMessageTimeout);
				}

				function transitionToInputToken() {
					hideAllPages();
					lc.pageControls.showInputToken = true;
					lc.showResendCodeMessage = false;
					lc.config.state = lc.states.MFA;
				}

				function hideAllPages() {
					for (var page in lc.pageControls) {
						lc.pageControls[page] = false;
					}
				}

				function verifyMFACode() {
					if (isEmpty(lc.mfaCode)) {
						lc.message = $translate.instant('LOGIN.NEED_VERIFICATION_CODE');
						lc.showError.mfaCode = true;
					} else if (lc.mfaInfo.enrollExtraFactors) {
						resetErrors();
						Credentials.verifyMFACodeAndEnrollExtraFactor(lc.mfaCode, lc.stateID, lc.mfaRememberDevice, lc.mfaInfo.type)
							.then(verifyMFACodeSuccess, enrollExtraFactorError);
					} else {
						resetErrors();
						Credentials.verifyMFACode(lc.mfaCode, lc.stateID, lc.mfaRememberDevice, lc.mfaInfo.type)
							.then(verifyMFACodeSuccess, verifyMFACodeError);
					}
				}

				function verifyMFACodeSuccess(data, status, headers, config) {
					lc.mfaInfo.mfaObfuscatedEmail = data.data.mfaObfuscatedContact;
					if (data.data.mfaBackupCodes){
						transitionToBackupCodes(data);
					} else if (lc.mfaInfo.enrollExtraFactors){
						transitionToEnrollExtraFactorsMessage();
					} else if (data.data.redirectUrl) {
						if (data.data.deviceToken) {
							$cookies.put("deviceToken", data.data.deviceToken);
						}
						$window.location.href = data.data.redirectUrl;
					} else {
						lc.config.state = lc.states.OK;
					}
				}

				function enrollExtraFactorError(data) {
					if (mfaErrorCodes.indexOf(data.data.message) >= 0) {
						lc.message = $translate.instant('LOGIN.' + data.data.message);
					} else {
						lc.message = $translate.instant(lc.errorMessages.incorrectCodeError);
					}
					lc.showError.mfaCode = true;
				}

				function verifyMFACodeError(data, status, headers, config) {
					if (loginErrorCodes.indexOf(data.data.message) >= 0) {
						lc.message = $translate.instant('LOGIN.' + data.data.message);
						lc.showError.mfaCode = true;
					} else if (data.data.message === 'MFA_CODE_EXPIRED') {
						$window.location.reload();
					} else {
						lc.message = $translate.instant(lc.errorMessages.incorrectCodeError);
						lc.showError.mfaCode = true;
					}
				}

				function getMFAOptionsSuccess(data) {
					if (data.data.mfaObfuscatedContact)
						lc.mfaInfo.mfaObfuscatedEmail = data.data.mfaObfuscatedContact;

					if (data.data.mfaObfuscatedNumber)
						lc.mfaInfo.mfaObfuscatedNumber = data.data.mfaObfuscatedNumber;

					populateMFAOptions(splitMFAOptions(data));
				}

				function splitMFAOptions(data) {
					if (data.data.mfaOptions) {
						return data.data.mfaOptions.split(':');
					}
					console.warn("No MFA options specified when trying to split them")
					return [];
				}

				function getMFAOptionsFailure(data, status, headers, config) {
					populateMFAOptions([lc.mfaInfo.types.BACKUP]);
				}

				function populateMFAOptions(mfaOptions) {
					lc.mfaInfo.type = mfaOptions[0];
					var uiOptions = lc.mfaInfo.mfaOptions;
					for (var i = 0; i < mfaOptions.length; ++i) {
						// Don't add MFA Option if it's already in the list.
						var duplicate = false;
						for (var j = 0; j < uiOptions.length; j++){
							if (uiOptions[j].value === mfaOptions[i]){
								duplicate=true;
								break;
							}
						}

						if (!duplicate)
							uiOptions.push({value: mfaOptions[i], text: lc.mfaInfo.typeToMFAOptionMessage[mfaOptions[i]]()});
					}
				}

				function continueLogin() {
					lc.mfaInfo.continueLoginData.data.mfaBackupCodes = null;
					verifyMFACodeSuccess(lc.mfaInfo.continueLoginData, null, null, null);
				}

				function saveBackupCodes() {
					resetErrors();
					lc.checkToCloseWindow();

					Credentials.saveBackupCodes(lc.stateID, lc.mfaInfo.type).then(saveBackupCodesSuccess, saveBackupCodesError);
				}

				function checkToCloseWindow() {
					if (lc.mfaInfo.enrolled) {
						lc.closeWindow();
					}
				}

				function closeWindow() {
					$window.close();
				}

				function saveBackupCodesSuccess(data, status, headers, config) {
					lc.continueLogin();
				}

				function saveBackupCodesError(data, status, headers, config) {
					lc.showError.mfaCode = true;
				}

				function checkIfUserIsEnrolled() {
					if (lc.mfaInfo.enrolled) {
						transitionToInputToken();
					} else {
						hideAllPages();
						if (lc.mfaInfo.type === lc.mfaInfo.types.APP) {
							lc.pageControls.showAuthenticatorAppInfo = true;
						} else if (lc.mfaInfo.type === lc.mfaInfo.types.SMS) {
							lc.pageControls.showEnterPhoneNumber = true;
						}
					}
				}

				function resendMFACode() {
					lc.mfaCodeResolved.state = lc.states.MFA_CODE_WAIT;
					resetErrors();
					lc.mfaCode = null;
					Credentials.resendMFACode(lc.stateID, lc.mfaInfo.type).then(resendMFACodeSuccess, resendMFACodeError);
				}

				function resendMFACodeSuccess(data, status, headers, config) {
					lc.mfaCodeResolved.state = lc.states.OK;
					lc.mfaInfo.enrolledTransitions[lc.mfaInfo.type](data);
				}

				function resendMFACodeError(data, status, headers, config) {
					if (data.data.message === 'USERNAME_LOCKED') {
						lc.showError.mfaCode = true;
						lc.message = $translate.instant(lc.errorMessages.usernameLockedError);
						lc.mfaCodeResolved.state = lc.states.OK;
					} else if (data.data.message === 'MFA_CODE_EXPIRED') {
						$window.location.reload();
					} else {
						lc.mfaInfo.mfaObfuscatedEmail = null;
						lc.mfaCodeResolved.state = lc.states.OK;
					}
				}

				function printBackupCodes() {
					userSavedBackupCodes();
					window.print();
				}

				function userSavedBackupCodes() {
					lc.mfaInfo.backupCodesSaved = true;
				}

				function copiedBackupCodes() {
					userSavedBackupCodes();
					lc.userCopiedBackupCodes = true;
					$timeout(function() { lc.userCopiedBackupCodes = false; }, 750);
				}

				// host:port/login/{page}
				function assignCurrentPageFromURL() {
					var pathElements = window.location.pathname.split('/').filter(Boolean);
					var loginIndex = pathElements.indexOf('login');
					if (loginIndex < pathElements.length-1) {
						if (pathElements[loginIndex+1] === "reset" || pathElements[loginIndex+1] === "enrollment") {
							lc.page = pathElements[loginIndex+1];
						} else if (pathElements[loginIndex+1] === "sso" && pathElements[loginIndex+2] === "user"
							&& pathElements[loginIndex+3] === "provision") {
							lc.page = "sso-provision-user";
						} else if (pathElements[loginIndex+1] === "redirect" && pathElements[loginIndex+2] === "notification") {
							lc.page = "redirect-notification";
						} else if (pathElements[loginIndex+1] === "mfa") {
							transitionToMFAAction();
						} else if (pathElements[loginIndex+1] === "sso" && pathElements[loginIndex+2] === "test"
							&& pathElements[loginIndex+3] === "debug") {
							lc.page = "sso-test-connection";
						} else if (pathElements[loginIndex+1] === "debug-codes") {
							lc.page = "debug-codes";
						} else if (pathElements[loginIndex+1] === "email-verification") {
							lc.page = "email-verification";
						} else {
							lc.page = "login";
						}

						if (pathElements[pathElements.length -1] === 'v2') {
							lc.version = 'v2';
						} else {
							lc.version = 'v1';
						}
					}
				}

				assignCurrentPageFromURL();
			}
		]
	);
})();

(function () {
	'use strict';
	angular
		.module('loginService.login.controllers')
		.controller('RedirectNotificationController',
			['$scope', '$timeout', '$window', '$location', '$translate', 'Utils', 'RedirectNotificationService',
				function ($scope, $timeout, $window, $location, $translate, Utils, RedirectNotificationService) {
					$scope.state = 'verifying';
					$scope.onFormSubmit = function () {
						var redirectId = getRedirectId();
						window.location = "/login/v1/redirect?redirectID=" + redirectId;
					}

					var getRedirectId = function () {
						var queryParams = Utils.getQueryParams();
						return queryParams["redirectID"];
					};

					var verifyRequest = function () {
						var redirectId = getRedirectId();
						RedirectNotificationService.verifyRequest(redirectId).then(
							function (response) {
								if (response.data.message) {
									$scope.lc.message = response.data.message;
									$scope.state = 'initialized';
								} else {
									$scope.onFormSubmit();
								}
							}
						)
					};

					verifyRequest();
				}
			])
})();

(function () {
	'use strict';
	angular
		.module('loginService.login.controllers')
		.controller('ResetController',
		['$scope', 'ResetPasswordService', '$timeout', '$window', '$location', '$translate', 'Utils',
			function ($scope, ResetPasswordService, $timeout, $window, $location, $translate, Utils) {
				var loginPath = '/login';
				$scope.state = 'verifying';

				$scope.onFormSubmit = function() {
					if ($scope.state === 'reset') {
						resetPassword();
					}
					else if ($scope.state === 'complete') {
						signIn();
					}
					else if ($scope.state === 'unverified') {
						redirectToLogin();
					}
				};

				var redirectToLogin = function() {
					var redirectUrl = $scope.loginUrl ? $scope.loginUrl : "/login";
					window.location.href = redirectUrl;
				};

				var resetPassword = function() {
					$scope.lc.showError.password = false;
					if (!$scope.lc.username) {
						$scope.lc.message = $translate.instant('LOGIN.NEED_USERNAME');
						$scope.lc.showError.password = true;
						return;
					}
					if (!$scope.lc.password || !$scope.lc.confirmPassword) {
						$scope.lc.message = $translate.instant('LOGIN.PASSWORD_CONFIRM');
						$scope.lc.showError.password = true;
						return;
					}
					else if ($scope.lc.password != $scope.lc.confirmPassword) {
						$scope.lc.message = $translate.instant('LOGIN.PASSWORD_NOT_MATCH');
						$scope.lc.showError.password = true;
						return;
					}

					var code = getCode();
					$scope.resetInProgress = true;
					ResetPasswordService.reset(code, $scope.lc.username, $scope.lc.password).then(function(response) {
						$scope.resetInProgress = false;
						$scope.state = 'complete';
					}, function(response) {
						$scope.resetInProgress = false;
						if(response.data && response.data.customMessage) {
							$scope.lc.message = response.data.customMessage;
						} else if (response.data && response.data.message) {
							$scope.lc.message = $translate.instant('LOGIN.' + response.data.message);
						}
						else {
							$scope.lc.message = $translate.instant('LOGIN.EXP_ISSUES');
						}

						$scope.lc.showError.password = true;
					});
				};

				var signIn = function() {
					var redirectUrl = $scope.loginUrl ? $scope.loginUrl : "/login";
					Utils.redirectPost(redirectUrl, {username: $scope.lc.username, password: $scope.lc.password});
				};

				var getCode = function() {
					var ret = "";
					var queryStringSplit = $location.absUrl().split('?');
					if (queryStringSplit.length < 2)
						return ret;
					var queryString = queryStringSplit[1];
					var assignments = queryString.split('&');
					for (var i=0; i<assignments.length; i++) {
						var split = assignments[i].split('=');
						if (split[0] == "VerifyCode")
							ret = split[1];
					}
					return ret;
				};

				var verifyRequest = function() {
					var code = getCode();

					ResetPasswordService.verifyRequest(code).then(function(response) {

						$scope.state = 'reset';
						$scope.loginUrl = response.data.redirectUrl;
						$scope.resetReason = response.data.resetReason;
						$scope.lc.username = response.data.username;
						$scope.lc.constraints = ResetPasswordService.verifyPasswordConstraints(response.data.passwordConstraints);

					}, function(response) {
						$scope.state = 'unverified';
						if(response.data && response.data.InvalidResetCode) {
							$scope.lc.message = $translate.instant('LOGIN.INVALID_RESET_CODE');
						}
						else {
							$scope.lc.message = $translate.instant('LOGIN.EXP_ISSUES');
						}
					});
				};

				verifyRequest();
			}
		])
})();

(function () {
    'use strict';
    angular
        .module('loginService.login.controllers')
        .controller('SSOProvisionUserController',
            ['$scope', 'SSOProvisionUserService', '$timeout', '$window', '$location', '$translate', 'Utils',
                function ($scope, SSOProvisionUserService, $timeout, $window, $location, $translate, Utils) {
                    var pc = this; //Provisioning Controller scope

                    pc.states = {
                        VERIFY_REQUEST: 1,
                        PROMPT_PROVISION: 2,
                        MERGE: 3,
                        MERGE_WAIT: 4,
                        CREATE_WAIT: 5,
                        MERGE_SUCCESS: 6,
                        CREATE_SUCCESS: 7,
                        VERIFY_FAILED: 8,
                        PROVISION_ERROR: 9,
                        MERGE_SIGN_IN: 10,
                        CREATE_SIGN_IN: 11,
                        COLLECT_ATTRIBUTES: 12,
                        CREATING_WITH_ATTRIBUTES: 13
                    };

                    pc.state = pc.states.VERIFY_REQUEST;

                    pc.redirectToLogin = redirectToLogin;
                    pc.onFormSubmit = onFormSubmit;
                    pc.showMergeUser = showMergeUser;
                    pc.createNewUser = createNewUser;
                    pc.collectAttributes = collectAttributes;

                    function onFormSubmit() {
                        if (pc.state === pc.states.MERGE) {
                            mergeExistingUser();
                        }
                        else if (pc.state === pc.states.MERGE_SUCCESS) {
                            signIn(pc.states.MERGE_SIGN_IN);
                        }
                        else if (pc.state === pc.states.CREATE_SUCCESS) {
                            signIn(pc.states.CREATE_SIGN_IN);
                        }
                        else if (pc.state === pc.states.VERIFY_FAILED) {
                            redirectToLogin();
                        }
                    }

                    function signIn(state) {
                        pc.state = state;
                        SSOProvisionUserService.login(getState())
                            .then(loginSuccess, function(response) {
                                pc.state = pc.states.PROVISION_ERROR;
                                loginError(response);
                            });
                    }

                    function redirectToLogin() {
                        var redirectUrl = $scope.loginUrl ? $scope.loginUrl : "/login";
                        window.location.href = redirectUrl;
                    }

                    function showMergeUser() {
                        pc.state = pc.states.MERGE;
                    }

                    function createNewUser() {
                        // check if we're collecting attributes - if so, collect before creation
                        if (pc.collectAdditionalAttributes) {
                            pc.state = pc.states.COLLECT_ATTRIBUTES;
                            return;
                        }
                        // check where to display the create_wait message
                        if (typeof pc.attributeValues == "undefined") {
                            pc.state = pc.states.CREATE_WAIT;
                            pc.attributeValues = null;
                        } else {
                            pc.state = pc.states.CREATING_WITH_ATTRIBUTES;
                        }
                        // create the user
                        SSOProvisionUserService.createNewUser(getState(), pc.attributeValues)
                            .then(function(response){
                                pc.state = pc.states.CREATE_SUCCESS;
                            }, function(response) {
                                pc.state = pc.states.PROVISION_ERROR;
																loginError(response);
                            });
                    }

                    function mergeExistingUser() {
                        if (isEmpty($scope.lc.username) && isEmpty($scope.lc.password)) {
                            $scope.lc.message = $translate.instant($scope.lc.errorMessages.needUserPass);
                            $scope.lc.showError.username = true;
                            $scope.lc.showError.password = true;
                        } else if (isEmpty($scope.lc.username)) {
                            $scope.lc.message = $translate.instant($scope.lc.errorMessages.needUsername);
                            $scope.lc.showError.username = true;
                        } else if (isEmpty($scope.lc.password)) {
                            $scope.lc.message = $translate.instant($scope.lc.errorMessages.needPassword);
                            $scope.lc.showError.password = true;
                        } else {
                            resetErrors();
                            pc.state = pc.states.MERGE_WAIT;
                            $scope.lc.config.state = $scope.lc.states.SIGN_IN;
                            SSOProvisionUserService
                                .mergeExistingUser(getState(), $scope.lc.username, $scope.lc.password)
                                .then(function(response){
                                    pc.state = pc.states.MERGE_SUCCESS;
                                }, function(response) {
                                    pc.state = pc.states.MERGE;
                                    loginError(response);
                                });
                        }
                    }

                    function collectAttributes() {
                        // check to see if each custom value has been set in attributeValues via ngModel
                        // needs to be checked dynamically since different brands will have different requirements
                        for (var i = 0; i < pc.attributesToCollect.length; i++) {
                            //TODO(@imobbs) - Change back to `.id` after EAX is ready for attribute IDs
                            var attributeId = pc.attributesToCollect[i].label;
                            if (!pc.attributeValues[attributeId]) {
                                $scope.lc.showError.attributes = true;
                                return;
                            }
                        }

                        // verify enrollment and sign in
                        pc.collectAdditionalAttributes = false;
                        createNewUser();
                    }

                    function loginSuccess(response) {
                        if (response.data.redirectUrl) {
                            $window.location.href = response.data.redirectUrl;
                        } else {
                            pc.state = pc.states.PROVISION_ERROR;
                            $scope.lc.showError.unauthorized = true;
                            $scope.lc.message = $translate.instant('LOGIN.UNABLE_TO_COMPLETE');
                        }
                    }

                    function loginError(response) {
                        $scope.lc.username = '';
                        $scope.lc.password = '';
                        $scope.lc.focusPasswordInput = true;
                        if(response.status === 500) {
                            pc.state = pc.states.PROVISION_ERROR;
                            $scope.lc.message = $translate.instant('LOGIN.EXP_ISSUES')
                        } else {
                            $scope.lc.message = $translate.instant('LOGIN.'+response.data.message);
                        }
                        $scope.lc.showError.unauthorized = true;
                    }

                    function resetErrors() {
                        for (var error in $scope.lc.showError) {
                            if ($scope.lc.showError.hasOwnProperty(error)) {
                                $scope.lc.showError[error] = false;
                            }
                        }
                    }

                    function isEmpty(value) {
                        return (value === undefined || value === null || value.length === 0);
                    }

                    function getState() {
                        var ret = "";
                        var queryStringSplit = $location.absUrl().split('?');
                        if (queryStringSplit.length < 2)
                            return ret;
                        var queryString = queryStringSplit[1];
                        var assignments = queryString.split('&');
                        for (var i=0; i<assignments.length; i++) {
                            var split = assignments[i].split('=');
                            if (split[0] === "state")
                                ret = split[1];
                        }
                        return ret;
                    }

                    function verifyRequest() {
                        var state = getState();

                        SSOProvisionUserService.verifyRequest(state).then(function(response) {
                            pc.state = pc.states.PROMPT_PROVISION;
                            $scope.loginUrl = response.data.originalUrl;

                            if (response.data.hasOwnProperty("attributesToCollect")) {
                                pc.collectAdditionalAttributes = true;
                                pc.attributesToCollect = response.data.attributesToCollect;
                                pc.attributesToCollect.forEach(function(attr) {
                                    if (attr.type == 'options') {
                                        attr.options = idToValue(attr.options)
                                    }
                                });
                                pc.attributeValues = {};
														}

                        }, function(response) {
                            pc.state = pc.states.VERIFY_FAILED;
                        });
                    }

                    function idToValue(options) {
                        // TODO(@imobbs): change `value: o.label` to `value: o.id` after EAX is ready for IDs
                        return options.map(function(o) {return {value: o.label, label: o.label}});
                    }

                    function getItemLabel(item) {
                        var selected = item.options.find(function(i) {return i.selected});
                        return selected ? selected.label : item.label;
                    }
                    pc.getItemLabel = getItemLabel;

                    verifyRequest();
                }
            ])
})();

(function () {
    'use strict';
    angular
        .module('loginService.login.controllers')
        .controller('SSOTestConnectionController',
            ['$scope', 'SSOTestConnectionService', '$timeout', '$window', '$location', '$translate', 'Utils',
                function ($scope, SSOTestConnectionService, $timeout, $window, $location, $translate, Utils) {
                    var pc = this; //Test Connection Controller scope

                    pc.states = {
                        VERIFY_REQUEST: 1,
                        VERIFIED: 2,
                        VERIFY_FAILED: 3
                    };

                    pc.getRequestData = getRequestData;

                    pc.state = pc.states.VERIFY_REQUEST;
                    pc.errorMessage = "";

                    function getState() {
                        var queryStringSplit = $location.absUrl().split('?');

                        if (queryStringSplit.length < 2) {
                            return "";
                        }

                        var queryString = queryStringSplit[1];
                        var assignments = queryString.split('&');

                        for (var i=0; i<assignments.length; i++) {
                            var split = assignments[i].split('=');
                            if (split[0] === "state")
                                return split[1];
                        }

                        return "";
                    }

                    function verifyRequest() {
                        var state = getState();

                        pc.data = {};

                        SSOTestConnectionService.verifyRequest(state).then(function(response) {
                            pc.state = pc.states.VERIFIED;
                            pc.data = response.data;
                            pc.errorMessage = "";
                        }, function(response) {
                            pc.state = pc.states.VERIFY_FAILED;
                            pc.errorMessage = $translate.instant('LOGIN.'+response.data.message);
                        });
                    }

                    function getRequestData(key) {
                        return pc.data[key];
                    }

                    verifyRequest();
                }
            ])
})();

(function () {
	angular
		.module('support.controllers')
		.controller('GoogleSignInController',
		['$scope',
			'$loggedIn',
			'$location',
			'$window',
			'$http',
			'SupportService',
			function ($scope, $loggedIn, $location, $window, $http, SupportService) {

        $scope.userIs = function(desired) {
          var user = $loggedIn.get();
          var state = "logged-out";
          if (user !== "") {
            if (user === "logged-failed") {
              state = "logged-failed";
            } else {
              state = "logged-in";
            }
          }

          return (desired === state);
        }

        $scope.onSuccess = function(googleUser) {
					$scope.resetInProgress = true;
					$scope.$apply(function() {
						$loggedIn.setAccessToken(googleUser.getAuthResponse().id_token);

						var params = SupportService.getQueryParams();
						var username = params["username"];
						var brandId = params["brandId"];
						var userId = params["userId"];

						if ((userId || username) && brandId) {
							SupportService.authenticate(userId, username, brandId).then(
								authenticateSuccess,
								authenticateFailure
							);

							function authenticateSuccess(data, status, headers) {
								if (data.data.datacenterRedirectUrl) {
									window.location = data.data.datacenterRedirectUrl;
								} else {
									$scope.resetInProgress = false;
									$scope.error = false;
									$loggedIn.set(data.data);
								}
							}

							function authenticateFailure (data, status, headers) {
								$scope.resetInProgress = false;
								if (data.status === 500) {
									$scope.error =  $translate.instant('LOGIN.UNABLE_TO_COMPLETE');
								} else if (data.data) {
									$scope.error = data.data.message;
								}

								$loggedIn.set("logged-failed");
							}
						} else {
							$scope.error = "Required query parameters userId and brandId need to be specified";
							$loggedIn.set("logged-failed");
						}
          });
        };

				$scope.onClose = function() {
					$window.close();;
				};

        $scope.onFailure = function() {
					$scope.$apply(function() {
            $loggedIn.set("logged-failed");
          });
        };

        $window.renderSignInButton = function() {
          $window.gapi.signin2.render(
            'google-signin2', {
              'scope': 'profile email',
              'width': 240,
              'height': 40,
              'longtitle': true,
              'theme': 'dark',
              'onsuccess': $scope.onSuccess,
              'onfailure': $scope.onFailure
            });
        };
      }
		])
		.controller('SupportViewController',
		['$scope',
			'$window',
			'$loggedIn',
			'SupportService',
			function ($scope, $window, $loggedIn, SupportService) {
				$scope.selectedTicket = {};
				$scope.getRequestData = function(key) {
						var loggedIn = $loggedIn.get();
						if (loggedIn.data) {
							return loggedIn.data[key];
						}
				};

				$scope.onContinue = function() {
					$window.location.href = $scope.getRequestData("redirectUrl");
				};

				$scope.onClose = function() {
					$window.close();;
				};

				$scope.onTicketSelected = function() {
					var params = SupportService.getQueryParams();
					var username = params["username"];
					var brandId = params["brandId"];
					var userId = params["userId"];

					$scope.selectedTicket.progress = true;

					SupportService.authenticate(userId, username, brandId, $scope.selectedTicket.id).then(
						function(data, status, headers) {
							$scope.selectedTicket.progress = false;
							if (data.status === 200) {
								$scope.error = false;
								$loggedIn.set(data.data);
							}
							if (data.status === 500) {
								$scope.error =  $translate.instant('LOGIN.UNABLE_TO_COMPLETE');
							} else {
								$scope.error = data.data.message;
							}
						}
					);
				}

				$scope.permissionGranted = function() {
					var permissionGrant = $scope.getRequestData('permissionGranted');
					if(permissionGrant) {
						return "Login permission has been granted through the customer’s account";
					} else {
						return "You may only log in if the below conditions are met";
					}
				};
			}
		]
	);
})();

(function () {
	'use strict';
	angular
		.module('loginService.login.directives')
    .directive('focusMe', function($timeout) {
    return {
      scope: { trigger: '@focusMe' },
      link: function(scope, element) {
        scope.$watch('trigger', function(value) {
          if(value === "true") {
            $timeout(function() {
              element[0].focus();
            });
          }
        });
      }
    };
  });
})();

(function () {
	'use strict';
	angular
		.module('loginService.login.directives')
		.directive('login', function() {
			return {
				restrict: 'A',
				scope: true,
				templateUrl: '/login/static/views/login.min.html',
				link: function(scope, element) {
					var scriptTag = angular.element(document.createElement('script'));
					scriptTag.attr('async', '');
					scriptTag.attr('defer', '');
					scriptTag.attr('src', 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit&hl=' + window.Qualtrics.locale);
					element.append(scriptTag);
				}
			}
		})
		.directive('logo', function() {
			return {
				restrict: 'E',
				scope: true,
				templateUrl: '/login/static/views/logo.min.html'
			};
		})
		.directive('verifyingRequest', function() {
			return {
				restrict: 'E',
				scope: true,
				templateUrl: '/login/static/views/verifying-request.min.html'
			};
		})
		.directive('twoStepHeader', function() {
			return {
				restrict: 'E',
				scope: true,
				templateUrl: '/login/static/views/two-step-header.min.html'
			};
		})
		.directive('scanQrCode', function() {
			return {
				restrict: 'E',
				scope: true,
				templateUrl: '/login/static/views/scan-qr-code.min.html'
			};
		})
		.directive('enrollment', function() {
			return {
				controller: 'EnrollmentController',
				restrict: 'A',
				scope: true,
				templateUrl: '/login/static/views/enrollment.min.html'
			};
		})
		.directive('resetPassword', function() {
			return {
				controller: 'ResetController',
				restrict: 'A',
				scope: true,
				templateUrl: '/login/static/views/reset.min.html'
			};
		})
		.directive('ssoProvisionUser', function() {
				return {
						controller: 'SSOProvisionUserController',
						restrict: 'A',
						scope: true,
						templateUrl: '/login/static/views/sso-provision-user.min.html'
				};
		})
		.directive('ssoTestConnection', function() {
			return {
				controller: 'SSOTestConnectionController',
				restrict: 'A',
				scope: true,
				templateUrl: '/login/static/views/sso-test-connection.min.html'
			};
		})
		.directive('debugCodes', function() {
			return {
				restrict: 'A',
				scope: true,
				templateUrl: '/login/static/views/debug-codes.min.html'
			};
		})
		.directive('redirectNotification', function() {
				return {
						controller: 'RedirectNotificationController',
						restrict: 'A',
						scope: true,
						templateUrl: '/login/static/views/redirect-notification.min.html'
				};
		})
		.directive('moreVerificationOptionsButton', function() {
			return {
				restrict: 'E',
				scope: true,
				templateUrl: '/login/static/views/more-verification-options-button.min.html'
			};
		})
		.directive('mfaRegenerateBackupCodeError', function() {
			return {
				restrict: 'E',
				scope: true,
				templateUrl: '/login/static/views/mfa-regenerate-backup-code-error.min.html'
			};
		})
		.directive('mfaFinishEnrollingMessage', function() {
			return {
				restrict: 'E',
				scope: true,
				templateUrl: '/login/static/views/mfa-finish-enrolling-message.min.html'
			};
		})
		.directive('mfaBackupCodes', function() {
			return {
				restrict: 'E',
				scope: true,
				templateUrl: '/login/static/views/mfa-backup-codes.min.html'
			};
		})
		.directive('loginText', function() {
			return {
				restrict: 'E',
				scope: {
					message: '@'
				},
				template: '<div class="all_centered_flex"> <div class="mfa_text"> {{ message | translate }} </div> </div>'
			};
		})
		.directive('inputToken', function() {
			return {
				restrict: 'E',
				scope: true,
				templateUrl: '/login/static/views/input-token.min.html'
			};
		})
		.directive('enrollExtraFactorsMessage', function() {
			return {
				restrict: 'E',
				scope: true,
				templateUrl: '/login/static/views/enroll-extra-factors-message.min.html'
			};
		})
		.directive('btn', function() {
			return {
				restrict: 'E',
				scope: {
					toCall: '&',
					message: '@',
					btnType: '=?',
				},
				templateUrl: '/login/static/views/btn.min.html',
				controller: function($scope){
					$scope.btnType = angular.isDefined($scope.btnType) ? $scope.btnType : 'btn-success';
				}
			};
		})
		.directive('boldHeader', function() {
			return {
				restrict: 'E',
				scope: {
					message: "@",
				},
				templateUrl: '/login/static/views/bold-header.min.html'
			};
		})
		.directive('backToLoginButton', function() {
			return {
				restrict: 'E',
				scope: true,
				templateUrl: '/login/static/views/back-to-login-button.min.html'
			};
		})
		.directive('authenticatorAppOption', function() {
			return {
				restrict: 'E',
				scope: {
					appInfo: "=appName"
				},
				templateUrl: '/login/static/views/authenticator-app-option.min.html'
			};
		})
		.directive('authenticatorAppInfo', function() {
			return {
				restrict: 'E',
				scope: true,
				templateUrl: '/login/static/views/authenticator-app-info.min.html'
			};
		})
		.directive('mfaLinkExpired', function() {
			return {
				restrict: 'E',
				scope: true,
				templateUrl: '/login/static/views/mfa-link-expired.min.html'
			};
		})
		.directive('mfaLoginOptions', function() {
			return {
				restrict: 'E',
				scope: true,
				templateUrl: '/login/static/views/mfa-login-options.min.html'
			};
		})
		.directive('mfaEnterPhoneNumber', function() {
			return {
				restrict: 'E',
				scope: true,
				templateUrl: '/login/static/views/mfa-enter-phone-number.min.html'
			};
		})
		.directive('accountSelect', function() {
			return {
				restrict: 'E',
				scope: true,
				templateUrl: '/login/static/views/account-select.min.html'
			};
		})
		.directive('identityProviderSelect', function() {
			return {
				restrict: 'E',
				scope: true,
				templateUrl: '/login/static/views/identity-provider-select.min.html'
			};
		})
		.directive('errorBanner', function() {
			return {
				restrict: 'E',
				scope: {
					errorMessage: '=',
				},
				templateUrl: '/login/static/views/error-banner.min.html'
			};
		})
		.directive('linkExpired', function() {
			return {
				restrict: 'E',
				scope: true,
				templateUrl: '/login/static/views/link-expired.min.html'
			}
		})
		.directive('emailVerification', function() {
			return {
				controller: 'EmailVerificationController',
				restrict: 'A',
				scope: true,
				templateUrl: '/login/static/views/email-verification.min.html'
			};
		});
})();


(function () {
	'use strict';
	angular
		.module('loginService.login.directives')
		.directive('qmenu', function() {
			return {
				restrict: 'A',
				link: function ($scope, $element, $attrs) {
					var options = $scope.$eval($attrs['qmenu']);
					$($element).qmenu(options);
				}
			};
		});
})();


(function () {
	'use strict';
	angular
		.module('support.directives')
		.directive('supportView', function() {
			return {
			    restrict: "E",
          transclude: true,
          templateUrl: "/login/static/views/support-view.min.html"
				}
		})
		.directive('googleSignIn', function() {
			return {
			    restrict: "E",
          transclude: true,
          templateUrl: "/login/static/views/google-sign-in.min.html"
				}
		});
})();

(function () {
	'use strict';
	angular
		.module('loginService.login.services')
		.service('EmailVerificationService', ['$q', '$http', function ($q, $http) {
				this.verifyEmail = function (code) {
					return $http.get("/login/v1/email-verification?code=" + code);
				};
			}]
		);
})();

(function () {
	'use strict';
	angular
		.module('loginService.login.services')
		.service('EnrollmentService', ['$q', '$http', function ($q, $http) {

				this.processEnrollment = function (version, code, firstName, lastName, password, attributeValues) {
					if (version === 'v1') {
						return $http.post("/login/v1/enrollment/complete?code=" + code, {
							firstName: firstName,
							lastName: lastName,
							password: password,
							attributeValues: attributeValues
						});
					} else if (version === 'v2') {
						return $http.post("/login/v2/enrollment/finish", {
							firstName: firstName,
							lastName: lastName,
							password: password,
							code: code
						});
					}
				};

				this.verifyRequest = function (version, code) {
					if (version === 'v1') {
						return $http.get("/login/v1/enrollment?code=" + code);
					} else if (version === 'v2') {
						return $http.get("/login/v2/enrollment/verify/" + code);
					}
				};
			}]
		);
})();

(function () {
	'use strict';
	angular
	.module('loginService.login.services')
	.service('Utils',
		['$location',
		function($location) {
			function getQueryParams() {
				var params = window.location.search.substring(1).split("&");
				var result = {};
				for (var i = 0; i < params.length; i++) {
					// query parameters may contain base64, so split only the first '='
					var param = [];
					param[0]=params[i].substring(0, params[i].indexOf('='));
					param[1]=params[i].substring(params[i].indexOf('=') + 1);
					var decodedParam = decodeURIComponent(param[1]);
					if (verifyParam(decodedParam)) {
						result[param[0]] = decodedParam;
					}
				}
				return result;
			}

			function verifyParam(param) {
				// https://tools.ietf.org/html/rfc1738#page-2
				// We will reject these even if they are URL encoded to avoid issues with XSS
				var unsafeCharacters = ["{", "}", "|", "\\", "^", "~", "[", "]", "`", "<", ">"];
				var paramValid = true;
				for (var i = 0; i < unsafeCharacters.length; i++) {
					if (param.indexOf(unsafeCharacters[i]) !== -1) {
						paramValid = false;
						console.log("Query parameter contains an invalid character");
						break;
					}
				}
				return paramValid;
			}

		function redirectPost(url, postData) {
			// IDS-6257 - changed to allow inputs with single & double quotes
			var form = document.createElement('form');
			form.method = 'POST';
			form.action = url;

			for (var key in postData) {
				if (postData.hasOwnProperty(key)) {
					var input = document.createElement('input');
					input.type = 'hidden';
					input.name = key;
					input.value = postData[key];
					form.appendChild(input);
				}
			}

			$('body').append(form);
			$(form).submit();
		}

		function getOriginalUrlInfo() {
			var queryParams = getQueryParams();
			var originalUrlInfo = {
				absoluteURL: $location.absUrl(),
				origin: location.origin ? location.origin : location.protocol + "//" + location.hostname + (location.port ? ':' + location.port : '')
			};

			originalUrlInfo.product = (queryParams.product ? queryParams.product : "login");
			originalUrlInfo.redirectPath = (queryParams.path ? queryParams.path : "");
			originalUrlInfo.redirectQueryParams = filterRedirectQueryParams(['ssotoken', 'path', 'product']);
			return originalUrlInfo;
		}

		function filterRedirectQueryParams(filteredParams) {
			var queryParams = getQueryParams();
			var queryString = '';
			for (var key in queryParams) {
				if (key && queryParams.hasOwnProperty(key)) {
					var value = queryParams[key];
					if (filteredParams.indexOf(key) >= 0) {
						continue;
					}

					var param = key + "=" + encodeURIComponent(value);
					if(queryString === '') {
						queryString = param;
					} else {
						queryString += '&' + param;
					}
				}
			}

			return queryString;
		}

		function getQueryParamFromString(paramsToKeep) {
			var queryParams = getQueryParams();
			var queryString = '';
			for (var key in queryParams) {
				if (key && queryParams.hasOwnProperty(key)) {
					var value = queryParams[key];
					if (paramsToKeep.indexOf(key) < 0) {
						continue;
					}

					var param = key + "=" + encodeURIComponent(value);
					if(queryString === '') {
						queryString = param;
					} else {
						queryString += '&' + param;
					}
				}
			}

			return queryString;
		}

		function convertValueToBooleanOrUndefined(value) {
			if (value === undefined) {
				return undefined;
			} else {
				value = value.toLowerCase();
			}

			if (value === "true") {
				return true;
			} else if (value === "false") {
				return false;
			} else {
				return undefined;
			}
		}

		return {
			getQueryParams: getQueryParams,
			getRedirectQueryParamString: filterRedirectQueryParams,
			getOriginalUrlInfo: getOriginalUrlInfo,
			redirectPost: redirectPost,
			getQueryParamFromString: getQueryParamFromString,
			convertValueToBooleanOrUndefined: convertValueToBooleanOrUndefined
		};
	}])
	.service('Credentials',
	['$http',
		'$location',
		'$q',
		'Utils',
		function ($http, $location, $q, Utils) {
			function passwordReset(username) {
				return $http.post('/login/v1/password/reset/request', {
					username: username,
					recaptchaResponse: (window.grecaptcha !== undefined ? window.grecaptcha.getResponse(1) : ""),
					originalUrlInfo: Utils.getOriginalUrlInfo()
				});
			}

			function verify(username, password, deviceToken) {
				return $http.post('/login/v1/authenticate', {
					username: username,
					password: password,
					recaptchaResponse: (window.grecaptcha !== undefined ? window.grecaptcha.getResponse(0) : ""),
					deviceToken: deviceToken,
					originalUrlInfo: Utils.getOriginalUrlInfo()
				});
			}

			function organizationAuthenticate(brandId) {
				var endpoint = '/login/v1/organization/authenticate';
				return $http.post(endpoint, {
					brandID: brandId.toLowerCase(),
					originalUrlInfo: Utils.getOriginalUrlInfo()
				});
			}

			function organizationAuthenticateWithEmail(brandId, email) {
				var endpoint = '/login/v1/authenticate/email';
				return $http.post(endpoint, {
					email: email,
					brandID: brandId.toLowerCase(),
					originalUrlInfo: Utils.getOriginalUrlInfo()
				});
			}

			function retrieveAccountChooseStateInfo(stateID, sourceDC) {
				if (sourceDC) {
					return $http.get("/login/v1/account-select?stateID=" + stateID + "&sourceDC=" + sourceDC);
				} else {
					return $http.get("/login/v1/account-select?stateID=" + stateID);
				}
			}

			function processAccountChooseItem(stateID, sourceDC, userId) {
				if (sourceDC) {
					return $http.put("/login/v1/account-select?stateID=" + stateID + "&userID=" + userId + "&sourceDC=" + sourceDC);
				} else {
					return $http.put("/login/v1/account-select?stateID=" + stateID + "&userID=" + userId);
				}
			}

			function verifyMFACode(mfaCode, mfaStateID, mfaRememberDevice, mfaType, endpoint) {
				endpoint = endpoint || '/login/v1/mfa/verifyCode';
				return $http.post(endpoint, {
					mfaCode: mfaCode,
					mfaStateID: mfaStateID,
					mfaRememberDevice: mfaRememberDevice,
					mfaType: mfaType
				});
			}

			function verifyMFACodeAndEnrollExtraFactor(mfaCode, mfaStateID, mfaRememberDevice, mfaType) {
				return verifyMFACode(mfaCode, mfaStateID, mfaRememberDevice, mfaType, '/login/v1/mfa/verifyAndEnrollExtraFactor');
			}

			function resendMFACode(mfaStateID, mfaDeliveryType) {
				return $http.post('/login/v1/mfa/resendCode', {
					mfaStateID: mfaStateID,
					mfaDeliveryType: mfaDeliveryType
				});
			}

			function saveBackupCodes(mfaStateID, mfaType) {
				return $http.post('/login/v1/mfa/saveBackupCodes', {
					mfaStateID: mfaStateID,
					mfaType: mfaType
				});
			}

			function getMFAOptions(mfaStateID) {
				return $http.post('/login/v1/mfa/getEnrolledMFAOptions', {
					mfaStateID: mfaStateID
				});
			}

			function getRegeneratedMFABackupCodes(mfaStateID) {
				return $http.get('/login/v1/mfa/regenerateMFABackupCodes?VerifyCode=' + mfaStateID);
			}

			function getEnrollExtraFactorsInfo(mfaStateID) {
				return $http.get('/login/v1/mfa/enrollExtraFactorsInfo?VerifyCode=' + mfaStateID);
			}

			function enrollPhoneNumber(mfaStateID, phoneNumber) {
				return $http.post('/login/v1/mfa/enrollPhoneNumber', {
					mfaStateID: mfaStateID,
					phoneNumber: phoneNumber
				});
			}

			/*
				Helper functions below
				*/

			function isEmpty(value) {
				return (value === undefined || value === null || value.length === 0);
			}

			function checkIfImageExistsAtUrl(src) {
				var deferred = $q.defer();
				var image = new Image();
				image.onerror = function() {
					deferred.resolve(false);
				};
				image.onload = function() {
					deferred.resolve(true);
				};
				image.src = src;
				return deferred.promise;
			}

			function enrollUser(email, brandId, accessCode) {
				return $http.post('/login/v1/enrollment', {
					email: email,
					brandId: brandId,
					couponCode: accessCode,
					originalUrlInfo: Utils.getOriginalUrlInfo()
				});
			}

			function loginWithOrganizationSSOConfig(organizationSSOConfigId) {
				var queryString = window.location.search.substring(1);
				window.location.href = '/login?organizationSSOConfigId=' + organizationSSOConfigId + '&' + queryString;
			}

			function getIdentityProviderSelectInfo(stateID) {
				return $http.get("/login/v1/identity-provider-select?stateID=" + stateID);
			}

			return {
				passwordReset: passwordReset,
				verify: verify,
				checkIfImageExistsAtUrl: checkIfImageExistsAtUrl,
				verifyMFACode: verifyMFACode,
				resendMFACode: resendMFACode,
				saveBackupCodes: saveBackupCodes,
				getMFAOptions: getMFAOptions,
				getRegeneratedMFABackupCodes: getRegeneratedMFABackupCodes,
				verifyMFACodeAndEnrollExtraFactor: verifyMFACodeAndEnrollExtraFactor,
				getEnrollExtraFactorsInfo: getEnrollExtraFactorsInfo,
				enrollPhoneNumber: enrollPhoneNumber,
				organizationAuthenticate: organizationAuthenticate,
				organizationAuthenticateWithEmail: organizationAuthenticateWithEmail,
				enrollUser: enrollUser,
				retrieveAccountChooseStateInfo: retrieveAccountChooseStateInfo,
				processAccountChooseItem: processAccountChooseItem,
				loginWithOrganizationSSOConfig: loginWithOrganizationSSOConfig,
				getIdentityProviderSelectInfo: getIdentityProviderSelectInfo,
			};
		}
	]);
})();

(function () {
  'use strict';
  angular
  .module('loginService.login.services')
  .service('RedirectNotificationService', ['$q', '$http', function($q, $http) {

    this.verifyRequest = function (redirectId) {
    	return $http.get("/login/v1/redirect/notification?redirectID=" + redirectId);
    };
  }]
);
})();

(function () {
  'use strict';
  angular
  .module('loginService.login.services')
  .service('ResetPasswordService', ['$q', '$http', '$translate', function($q, $http, $translate) {

    this.reset = function (code, username, password) {
      return $http.post("/login/v1/password/reset",  {
				code: code,
        username: username,
				password: password
     	});
    };

    this.verifyRequest = function (code) {
    	return $http.get("/login/v1/password/reset?code=" + code);
    };

    this.verifyPasswordConstraints = function(passwordConstraints) {
      var constraints = [];

      if(passwordConstraints) {
          if(passwordConstraints.minLength && passwordConstraints.minLength > 0) {
            constraints.push(passwordConstraints.minLength === 1 ?
              $translate.instant('LOGIN.MIN_LEN_REQUIRED_SINGLE') :
              $translate.instant('LOGIN.MIN_LEN_REQUIRED').format(passwordConstraints.minLength)
            );
          }

	  constraints.push($translate.instant('LOGIN.MAX_LEN_REQUIRED').format(64));

          if(passwordConstraints.minUpperChars && passwordConstraints.minUpperChars > 0) {
            constraints.push(passwordConstraints.minUpperChars === 1 ?
              $translate.instant('LOGIN.MIN_UPPER_CHARS_REQUIRED_SINGLE') :
              $translate.instant('LOGIN.MIN_UPPER_CHARS_REQUIRED').format(passwordConstraints.minUpperChars)
            );
          }
          if(passwordConstraints.minLowerChars && passwordConstraints.minLowerChars > 0) {
            constraints.push(passwordConstraints.minLowerChars === 1 ?
              $translate.instant('LOGIN.MIN_LOWERS_CHARS_REQUIRED_SINGLE') :
              $translate.instant('LOGIN.MIN_LOWERS_CHARS_REQUIRED').format(passwordConstraints.minLowerChars)
            );
          }
          if(passwordConstraints.minNumericChars && passwordConstraints.minNumericChars > 0) {
            constraints.push(passwordConstraints.minNumericChars === 1 ?
              $translate.instant('LOGIN.MIN_NUMERIC_CHARS_REQUIRED_SINGLE') :
              $translate.instant('LOGIN.MIN_NUMERIC_CHARS_REQUIRED').format(passwordConstraints.minNumericChars)
            );
          }
          if(passwordConstraints.minSpecialChars && passwordConstraints.minSpecialChars > 0) {
            constraints.push(passwordConstraints.minSpecialChars === 1 ?
              $translate.instant('LOGIN.MIN_NON_ALPHA_LEN_REQUIRED_SINGLE') :
              $translate.instant('LOGIN.MIN_NON_ALPHA_LEN_REQUIRED').format(passwordConstraints.minSpecialChars)
            );
          }
      }

			constraints.push($translate.instant('LOGIN.PASSWORD_NOT_BEEN_COMMONLY_USED'));
			constraints.push($translate.instant('LOGIN.PASSWORD_NOT_BEEN_CURRENTLY_USED'));

      return constraints;
    };
  }]
);
})();

(function () {
    'use strict';
    angular
        .module('loginService.login.services')
        .service('SSOProvisionUserService', ['$q', '$http', function($q, $http) {

                this.mergeExistingUser = function (state, username, password) {
                    return $http.post("/login/v1/sso/user/merge",  {
                        state: state,
                        username: username,
                        password: password
                    });
                };

                this.createNewUser = function (state, attributes) {
                    return $http.post("/login/v1/sso/user/create", {
                        state: state,
                        attributes: attributes
                    });
                };

                this.verifyRequest = function (state) {
                    return $http.get("/login/v1/sso/user/merge?state=" + state);
                };

                this.login = function (state) {
                    return $http.post("/login/v1/sso/user/authenticate", {
                        state: state
                        //TODO recaptcha?
                    });
                }
            }]
        );
})();

(function () {
    'use strict';
    angular
        .module('loginService.login.services')
        .service('SSOTestConnectionService', ['$q', '$http', function($q, $http) {
                this.verifyRequest = function (state) {
                    return $http.get("/login/v1/sso/test/info?state=" + state);
                };
            }]
        );
})();

(function () {
  'use strict';
  angular
  .module('support.services')
  .service('SupportService', ['$q', '$http', '$location', '$loggedIn', function($q, $http, $location, $loggedIn) {

    this.authenticate = function (userId, username, brandId, selectedTicket) {
      return $http.post('/login/support/authenticate', {
        originalUrlInfo: getOriginalUrlInfo(),
        username: username,
        brandId: brandId,
        userId: userId,
        selectedTicket: selectedTicket,
        accessToken: $loggedIn.getAccessToken()
      });
    }

     this.getQueryParams = function() {
      var params = window.location.search.substring(1).split("&");
      var result = {};
      for (var i = 0; i < params.length; i++) {
        // query parameters may contain base64, so split only the first '='
        var param = [];
        param[0]=params[i].substring(0, params[i].indexOf('='));
        param[1]=params[i].substring(params[i].indexOf('=') + 1);
        result[param[0]] = decodeURIComponent(param[1]);
      }
      return result;
    }


    function getOriginalUrlInfo() {
      var originalUrlInfo = {
        absoluteURL: $location.absUrl(),
        origin: location.origin ? location.origin : location.protocol + "//" + location.hostname + (location.port ? ':' + location.port : ''),
        product: "supportlogin"
      };

      return originalUrlInfo;
    }
  }]
);
})();
