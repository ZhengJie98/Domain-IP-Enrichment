/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

// Fire theme:touch once and set window.theme.isTouch to the value of whether it's a touch device.
function wasTouched() {
	window.theme.isTouch = true;
	document.removeEventListener('touchstart', wasTouched, { passive: true });
	document.documentElement.className = document.documentElement.className.replace('no-touch', 'touch');
	document.dispatchEvent(new CustomEvent('theme:touch', {
		bubbles: true
	}));
}
document.addEventListener('touchstart', wasTouched, { passive: true });

/*!
 * Squirrelly JS
 * https://squirrelly.js.org/
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Sqrl={})}(this,(function(e){"use strict";function t(e){var n,r,a=new Error(e);return n=a,r=t.prototype,Object.setPrototypeOf?Object.setPrototypeOf(n,r):n.__proto__=r,a}function n(e,n,r){var a=n.slice(0,r).split(/\n/),i=a.length,s=a[i-1].length+1;throw t(e+=" at line "+i+" col "+s+":\n\n  "+n.split(/\n/)[i-1]+"\n  "+Array(s).join(" ")+"^")}t.prototype=Object.create(Error.prototype,{name:{value:"Squirrelly Error",enumerable:!1}});var r=new Function("return this")().Promise,a=!1;try{a=new Function("return (async function(){}).constructor")()}catch(e){if(!(e instanceof SyntaxError))throw e}function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function s(e,t,n){for(var r in t)i(t,r)&&(null==t[r]||"object"!=typeof t[r]||"storage"!==r&&"prefixes"!==r||n?e[r]=t[r]:e[r]=s({},t[r]));return e}var c=/^async +/,o=/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g,l=/'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g,f=/"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g,u=/[.*+\-?^${}()|[\]\\]/g;function p(e){return u.test(e)?e.replace(u,"\\$&"):e}function h(e,r){r.rmWhitespace&&(e=e.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")),o.lastIndex=0,l.lastIndex=0,f.lastIndex=0;var a=r.prefixes,i=[a.h,a.b,a.i,a.r,a.c,a.e].reduce((function(e,t){return e&&t?e+"|"+p(t):t?p(t):e}),""),s=new RegExp("([|()]|=>)|('|\"|`|\\/\\*)|\\s*((\\/)?(-|_)?"+p(r.tags[1])+")","g"),u=new RegExp("([^]*?)"+p(r.tags[0])+"(-|_)?\\s*("+i+")?\\s*","g"),h=0,d=!1;function g(t,a){var i,p={f:[]},g=0,v="c";function m(t){var a=e.slice(h,t),i=a.trim();if("f"===v)"safe"===i?p.raw=!0:r.async&&c.test(i)?(i=i.replace(c,""),p.f.push([i,"",!0])):p.f.push([i,""]);else if("fp"===v)p.f[p.f.length-1][1]+=i;else if("err"===v){if(i){var s=a.search(/\S/);n("invalid syntax",e,h+s)}}else p[v]=i;h=t+1}for("h"===a||"b"===a||"c"===a?v="n":"r"===a&&(p.raw=!0,a="i"),s.lastIndex=h;null!==(i=s.exec(e));){var y=i[1],x=i[2],b=i[3],w=i[4],F=i[5],S=i.index;if(y)"("===y?(0===g&&("n"===v?(m(S),v="p"):"f"===v&&(m(S),v="fp")),g++):")"===y?0===--g&&"c"!==v&&(m(S),v="err"):0===g&&"|"===y?(m(S),v="f"):"=>"===y&&(m(S),h+=1,v="res");else if(x){if("/*"===x){var I=e.indexOf("*/",s.lastIndex);-1===I&&n("unclosed comment",e,i.index),s.lastIndex=I+2}else if("'"===x){l.lastIndex=i.index,l.exec(e)?s.lastIndex=l.lastIndex:n("unclosed string",e,i.index)}else if('"'===x){f.lastIndex=i.index,f.exec(e)?s.lastIndex=f.lastIndex:n("unclosed string",e,i.index)}else if("`"===x){o.lastIndex=i.index,o.exec(e)?s.lastIndex=o.lastIndex:n("unclosed string",e,i.index)}}else if(b)return m(S),h=S+i[0].length,u.lastIndex=h,d=F,w&&"h"===a&&(a="s"),p.t=a,p}return n("unclosed tag",e,t),p}var v=function i(s,o){s.b=[],s.d=[];var l,f=!1,p=[];function v(e,t){e&&(e=function(e,t,n,r){var a,i;return"string"==typeof t.autoTrim?a=i=t.autoTrim:Array.isArray(t.autoTrim)&&(a=t.autoTrim[1],i=t.autoTrim[0]),(n||!1===n)&&(a=n),(r||!1===r)&&(i=r),"slurp"===a&&"slurp"===i?e.trim():("_"===a||"slurp"===a?e=String.prototype.trimLeft?e.trimLeft():e.replace(/^[\s\uFEFF\xA0]+/,""):"-"!==a&&"nl"!==a||(e=e.replace(/^(?:\n|\r|\r\n)/,"")),"_"===i||"slurp"===i?e=String.prototype.trimRight?e.trimRight():e.replace(/[\s\uFEFF\xA0]+$/,""):"-"!==i&&"nl"!==i||(e=e.replace(/(?:\n|\r|\r\n)$/,"")),e)}(e,r,d,t))&&(e=e.replace(/\\|'/g,"\\$&").replace(/\r\n|\n|\r/g,"\\n"),p.push(e))}for(;null!==(l=u.exec(e));){var m,y=l[1],x=l[2],b=l[3]||"";for(var w in a)if(a[w]===b){m=w;break}v(y,x),h=l.index+l[0].length,m||n("unrecognized tag type: "+b,e,h);var F=g(l.index,m),S=F.t;if("h"===S){var I=F.n||"";r.async&&c.test(I)&&(F.a=!0,F.n=I.replace(c,"")),F=i(F),p.push(F)}else if("c"===S){if(s.n===F.n)return f?(f.d=p,s.b.push(f)):s.d=p,s;n("Helper start and end don't match",e,l.index+l[0].length)}else if("b"===S){f?(f.d=p,s.b.push(f)):s.d=p;var R=F.n||"";r.async&&c.test(R)&&(F.a=!0,F.n=R.replace(c,"")),f=F,p=[]}else if("s"===S){var T=F.n||"";r.async&&c.test(T)&&(F.a=!0,F.n=T.replace(c,"")),p.push(F)}else p.push(F)}if(!o)throw t('unclosed helper "'+s.n+'"');return v(e.slice(h,e.length),!1),s.d=p,s}({f:[]},!0);if(r.plugins)for(var m=0;m<r.plugins.length;m++){var y=r.plugins[m];y.processAST&&(v.d=y.processAST(v.d,r))}return v.d}function d(e,t){var n=h(e,t),r="var tR='';"+(t.useWith?"with("+t.varName+"||{}){":"")+x(n,t)+"if(cb){cb(null,tR)} return tR"+(t.useWith?"}":"");if(t.plugins)for(var a=0;a<t.plugins.length;a++){var i=t.plugins[a];i.processFnString&&(r=i.processFnString(r,t))}return r}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n][0],a=t[n][1];e=(t[n][2]?"await ":"")+"c.l('F','"+r+"')("+e,a&&(e+=","+a),e+=")"}return e}function v(e,t,n,r,a,i){var s="{exec:"+(a?"async ":"")+y(n,t,e)+",params:["+r+"]";return i&&(s+=",name:'"+i+"'"),a&&(s+=",async:true"),s+="}"}function m(e,t){for(var n="[",r=0;r<e.length;r++){var a=e[r];n+=v(t,a.res||"",a.d,a.p||"",a.a,a.n),r<e.length&&(n+=",")}return n+="]"}function y(e,t,n){return"function("+t+"){var tR='';"+x(e,n)+"return tR}"}function x(e,t){for(var n=0,r=e.length,a="";n<r;n++){var i=e[n];if("string"==typeof i){a+="tR+='"+i+"';"}else{var s=i.t,c=i.c||"",o=i.f,l=i.n||"",f=i.p||"",u=i.res||"",p=i.b,h=!!i.a;if("i"===s){t.defaultFilter&&(c="c.l('F','"+t.defaultFilter+"')("+c+")");var d=g(c,o);!i.raw&&t.autoEscape&&(d="c.l('F','e')("+d+")"),a+="tR+="+d+";"}else if("h"===s)if(t.storage.nativeHelpers.get(l))a+=t.storage.nativeHelpers.get(l)(i,t);else{var y=(h?"await ":"")+"c.l('H','"+l+"')("+v(t,u,i.d,f,h);y+=p?","+m(p,t):",[]",a+="tR+="+g(y+=",c)",o)+";"}else"s"===s?a+="tR+="+g((h?"await ":"")+"c.l('H','"+l+"')({params:["+f+"]},[],c)",o)+";":"e"===s&&(a+=c+"\n")}}return a}var b=function(){function e(e){this.cache=e}return e.prototype.define=function(e,t){this.cache[e]=t},e.prototype.get=function(e){return this.cache[e]},e.prototype.remove=function(e){delete this.cache[e]},e.prototype.reset=function(){this.cache={}},e.prototype.load=function(e){s(this.cache,e,!0)},e}(),w=new b({});function F(e,n,r,a){if(n&&n.length>0)throw t((a?"Native":"")+"Helper '"+e+"' doesn't accept blocks");if(r&&r.length>0)throw t((a?"Native":"")+"Helper '"+e+"' doesn't accept filters")}var S=new b({each:function(e,t){var n="",r=e.params[0];if(F("each",t,!1),e.async)return new Promise((function(t){!function e(t,n,r,a,i){r(t[n],n).then((function(s){a+=s,n===t.length-1?i(a):e(t,n+1,r,a,i)}))}(r,0,e.exec,n,t)}));for(var a=0;a<r.length;a++)n+=e.exec(r[a],a);return n},foreach:function(e,t){var n=e.params[0];if(F("foreach",t,!1),e.async)return new Promise((function(t){!function e(t,n,r,a,i,s){a(n[r],t[n[r]]).then((function(c){i+=c,r===n.length-1?s(i):e(t,n,r+1,a,i,s)}))}(n,Object.keys(n),0,e.exec,"",t)}));var r="";for(var a in n)i(n,a)&&(r+=e.exec(a,n[a]));return r},include:function(e,n,r){F("include",n,!1);var a=r.storage.templates.get(e.params[0]);if(!a)throw t('Could not fetch template "'+e.params[0]+'"');return a(e.params[1],r)},extends:function(e,n,r){var a=e.params[1]||{};a.content=e.exec();for(var i=0;i<n.length;i++){var s=n[i];a[s.name]=s.exec()}var c=r.storage.templates.get(e.params[0]);if(!c)throw t('Could not fetch template "'+e.params[0]+'"');return c(a,r)},useScope:function(e,t){return F("useScope",t,!1),e.exec(e.params[0])}}),I=new b({if:function(e,t){F("if",!1,e.f,!0);var n="if("+e.p+"){"+x(e.d,t)+"}";if(e.b)for(var r=0;r<e.b.length;r++){var a=e.b[r];"else"===a.n?n+="else{"+x(a.d,t)+"}":"elif"===a.n&&(n+="else if("+a.p+"){"+x(a.d,t)+"}")}return n},try:function(e,n){if(F("try",!1,e.f,!0),!e.b||1!==e.b.length||"catch"!==e.b[0].n)throw t("native helper 'try' only accepts 1 block, 'catch'");var r="try{"+x(e.d,n)+"}",a=e.b[0];return r+="catch"+(a.res?"("+a.res+")":"")+"{"+x(a.d,n)+"}"},block:function(e,t){return F("block",e.b,e.f,!0),"if(!"+t.varName+"["+e.p+"]){tR+=("+y(e.d,"",t)+")()}else{tR+="+t.varName+"["+e.p+"]}"}}),R={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function T(e){return R[e]}var E=new b({e:function(e){var t=String(e);return/[&<>"']/.test(t)?t.replace(/[&<>"']/g,T):t}}),j={varName:"it",autoTrim:[!1,"nl"],autoEscape:!0,defaultFilter:!1,tags:["{{","}}"],l:function(e,n){if("H"===e){var r=this.storage.helpers.get(n);if(r)return r;throw t("Can't find helper '"+n+"'")}if("F"===e){var a=this.storage.filters.get(n);if(a)return a;throw t("Can't find filter '"+n+"'")}},async:!1,storage:{helpers:S,nativeHelpers:I,filters:E,templates:w},prefixes:{h:"@",b:"#",i:"",r:"*",c:"/",e:"!"},cache:!1,plugins:[],useWith:!1};function H(e,t){var n={};return s(n,j),t&&s(n,t),e&&s(n,e),n.l.bind(n),n}function O(e,n){var r=H(n||{}),i=Function;if(r.async){if(!a)throw t("This environment doesn't support async/await");i=a}try{return new i(r.varName,"c","cb",d(e,r))}catch(n){throw n instanceof SyntaxError?t("Bad template syntax\n\n"+n.message+"\n"+Array(n.message.length+1).join("=")+"\n"+d(e,r)):n}}function _(e,t){var n;return t.cache&&t.name&&t.storage.templates.get(t.name)?t.storage.templates.get(t.name):(n="function"==typeof e?e:O(e,t),t.cache&&t.name&&t.storage.templates.define(t.name,n),n)}j.l.bind(j),e.compile=O,e.compileScope=x,e.compileScopeIntoFunction=y,e.compileToString=d,e.defaultConfig=j,e.filters=E,e.getConfig=H,e.helpers=S,e.nativeHelpers=I,e.parse=h,e.render=function(e,n,a,i){var s=H(a||{});if(!s.async)return _(e,s)(n,s);if(!i){if("function"==typeof r)return new r((function(t,r){try{t(_(e,s)(n,s))}catch(e){r(e)}}));throw t("Please provide a callback function, this env doesn't support Promises")}try{_(e,s)(n,s,i)}catch(e){return i(e)}},e.templates=w,Object.defineProperty(e,"__esModule",{value:!0})}));

/*!
 * Scroll lock
 * https://github.com/FL3NKEY/scroll-lock
*/
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.scrollLock=t():e.scrollLock=t()}(this,function(){return function(l){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=l,o.c=r,o.d=function(e,t,l){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(l,r,function(e){return t[e]}.bind(null,r));return l},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,l){"use strict";l.r(t);var r=function(e){return Array.isArray(e)?e:[e]},a=function(e){return e instanceof Node},o=function(e,t){if(e&&t){e=e instanceof NodeList?e:[e];for(var l=0;l<e.length&&!0!==t(e[l],l,e.length);l++);}},n=function(e){return console.error("[scroll-lock] ".concat(e))},b=function(e){if(Array.isArray(e))return e.join(", ")},c=function(e){var t=[];return o(e,function(e){return t.push(e)}),t},h=function(e,t){var l=!(2<arguments.length&&void 0!==arguments[2])||arguments[2],r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:document;if(l&&-1!==c(r.querySelectorAll(t)).indexOf(e))return e;for(;(e=e.parentElement)&&-1===c(r.querySelectorAll(t)).indexOf(e););return e},v=function(e,t){var l=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;return-1!==c(l.querySelectorAll(t)).indexOf(e)},i=function(e){if(e)return"hidden"===getComputedStyle(e).overflow},m=function(e){if(e)return!!i(e)||e.scrollTop<=0},S=function(e){if(e){if(i(e))return!0;var t=e.scrollTop;return e.scrollHeight<=t+e.offsetHeight}},y=function(e){if(e)return!!i(e)||e.scrollLeft<=0},k=function(e){if(e){if(i(e))return!0;var t=e.scrollLeft;return e.scrollWidth<=t+e.offsetWidth}};l.d(t,"disablePageScroll",function(){return d}),l.d(t,"enablePageScroll",function(){return s}),l.d(t,"getScrollState",function(){return f}),l.d(t,"clearQueueScrollLocks",function(){return p}),l.d(t,"getTargetScrollBarWidth",function(){return g}),l.d(t,"getCurrentTargetScrollBarWidth",function(){return A}),l.d(t,"getPageScrollBarWidth",function(){return G}),l.d(t,"getCurrentPageScrollBarWidth",function(){return T}),l.d(t,"addScrollableTarget",function(){return L}),l.d(t,"removeScrollableTarget",function(){return W}),l.d(t,"addScrollableSelector",function(){return x}),l.d(t,"removeScrollableSelector",function(){return F}),l.d(t,"addLockableTarget",function(){return Y}),l.d(t,"addLockableSelector",function(){return E}),l.d(t,"setFillGapMethod",function(){return O}),l.d(t,"addFillGapTarget",function(){return P}),l.d(t,"removeFillGapTarget",function(){return j}),l.d(t,"addFillGapSelector",function(){return q}),l.d(t,"removeFillGapSelector",function(){return M}),l.d(t,"refillGaps",function(){return N});var u=["padding","margin","width","max-width","none"],w={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:u[0],startTouchY:0,startTouchX:0},d=function(e){w.queue<=0&&(w.scroll=!1,B(),X()),L(e),w.queue++},s=function(e){0<w.queue&&w.queue--,w.queue<=0&&(w.scroll=!0,C(),Q()),W(e)},f=function(){return w.scroll},p=function(){w.queue=0},g=function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(a(e)){var l=e.style.overflowY;t?f()||(e.style.overflowY=e.getAttribute("data-scroll-lock-saved-overflow-y-property")):e.style.overflowY="scroll";var r=A(e);return e.style.overflowY=l,r}return 0},A=function(e){if(a(e)){if(e===document.body){var t=document.documentElement.clientWidth;return window.innerWidth-t}var l=e.style.borderLeftWidth,r=e.style.borderRightWidth;e.style.borderLeftWidth="0px",e.style.borderRightWidth="0px";var o=e.offsetWidth-e.clientWidth;return e.style.borderLeftWidth=l,e.style.borderRightWidth=r,o}return 0},G=function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];return g(document.body,e)},T=function(){return A(document.body)},L=function(e){e&&r(e).map(function(e){o(e,function(e){a(e)?e.setAttribute("data-scroll-lock-scrollable",""):n('"'.concat(e,'" is not a Element.'))})})},W=function(e){e&&r(e).map(function(e){o(e,function(e){a(e)?e.removeAttribute("data-scroll-lock-scrollable"):n('"'.concat(e,'" is not a Element.'))})})},x=function(e){e&&r(e).map(function(e){w.scrollableSelectors.push(e)})},F=function(e){e&&r(e).map(function(t){w.scrollableSelectors=w.scrollableSelectors.filter(function(e){return e!==t})})},Y=function(e){e&&(r(e).map(function(e){o(e,function(e){a(e)?e.setAttribute("data-scroll-lock-lockable",""):n('"'.concat(e,'" is not a Element.'))})}),f()||B())},E=function(e){e&&(r(e).map(function(e){w.lockableSelectors.push(e)}),f()||B(),q(e))},O=function(e){if(e)if(-1!==u.indexOf(e))w.fillGapMethod=e,N();else{var t=u.join(", ");n('"'.concat(e,'" method is not available!\nAvailable fill gap methods: ').concat(t,"."))}},P=function(e){e&&r(e).map(function(e){o(e,function(e){a(e)?(e.setAttribute("data-scroll-lock-fill-gap",""),w.scroll||H(e)):n('"'.concat(e,'" is not a Element.'))})})},j=function(e){e&&r(e).map(function(e){o(e,function(e){a(e)?(e.removeAttribute("data-scroll-lock-fill-gap"),w.scroll||I(e)):n('"'.concat(e,'" is not a Element.'))})})},q=function(e){e&&r(e).map(function(e){-1===w.fillGapSelectors.indexOf(e)&&(w.fillGapSelectors.push(e),w.scroll||D(e))})},M=function(e){e&&r(e).map(function(t){w.fillGapSelectors=w.fillGapSelectors.filter(function(e){return e!==t}),w.scroll||z(t)})},N=function(){w.scroll||X()},B=function(){var e=b(w.lockableSelectors);K(e)},C=function(){var e=b(w.lockableSelectors);R(e)},K=function(e){var t=document.querySelectorAll(e);o(t,function(e){U(e)})},R=function(e){var t=document.querySelectorAll(e);o(t,function(e){_(e)})},U=function(e){if(a(e)&&"true"!==e.getAttribute("data-scroll-lock-locked")){var t=window.getComputedStyle(e);e.setAttribute("data-scroll-lock-saved-overflow-y-property",t.overflowY),e.setAttribute("data-scroll-lock-saved-inline-overflow-property",e.style.overflow),e.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",e.style.overflowY),e.style.overflow="hidden",e.setAttribute("data-scroll-lock-locked","true")}},_=function(e){a(e)&&"true"===e.getAttribute("data-scroll-lock-locked")&&(e.style.overflow=e.getAttribute("data-scroll-lock-saved-inline-overflow-property"),e.style.overflowY=e.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-saved-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-locked"))},X=function(){w.fillGapSelectors.map(function(e){D(e)})},Q=function(){w.fillGapSelectors.map(function(e){z(e)})},D=function(e){var t=document.querySelectorAll(e),l=-1!==w.lockableSelectors.indexOf(e);o(t,function(e){H(e,l)})},H=function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(a(e)){var l;if(""===e.getAttribute("data-scroll-lock-lockable")||t)l=g(e,!0);else{var r=h(e,b(w.lockableSelectors));l=g(r,!0)}"true"===e.getAttribute("data-scroll-lock-filled-gap")&&I(e);var o=window.getComputedStyle(e);if(e.setAttribute("data-scroll-lock-filled-gap","true"),e.setAttribute("data-scroll-lock-current-fill-gap-method",w.fillGapMethod),"margin"===w.fillGapMethod){var n=parseFloat(o.marginRight);e.style.marginRight="".concat(n+l,"px")}else if("width"===w.fillGapMethod)e.style.width="calc(100% - ".concat(l,"px)");else if("max-width"===w.fillGapMethod)e.style.maxWidth="calc(100% - ".concat(l,"px)");else if("padding"===w.fillGapMethod){var c=parseFloat(o.paddingRight);e.style.paddingRight="".concat(c+l,"px")}}},z=function(e){var t=document.querySelectorAll(e);o(t,function(e){I(e)})},I=function(e){if(a(e)&&"true"===e.getAttribute("data-scroll-lock-filled-gap")){var t=e.getAttribute("data-scroll-lock-current-fill-gap-method");e.removeAttribute("data-scroll-lock-filled-gap"),e.removeAttribute("data-scroll-lock-current-fill-gap-method"),"margin"===t?e.style.marginRight="":"width"===t?e.style.width="":"max-width"===t?e.style.maxWidth="":"padding"===t&&(e.style.paddingRight="")}};"undefined"!=typeof window&&window.addEventListener("resize",function(e){N()}),"undefined"!=typeof document&&(document.addEventListener("touchstart",function(e){w.scroll||(w.startTouchY=e.touches[0].clientY,w.startTouchX=e.touches[0].clientX)}),document.addEventListener("touchmove",function(n){if(!w.scroll){var e=w.startTouchY,t=w.startTouchX,l=n.touches[0].clientY,r=n.touches[0].clientX;if(n.touches.length<2){var c=b(w.scrollableSelectors),a=e<l,i=l<e,u=t<r,d=r<t,s=e+3<l,f=l<e-3,p=t+3<r,g=r<t-3;!function e(t){var l=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(t){var r=h(t,c,!1);if(v(t,'input[type="range"]'))return!1;if(l||v(t,'textarea, [contenteditable="true"]')&&h(t,c)||v(t,c)){var o=!1;y(t)&&k(t)?(a&&m(t)||i&&S(t))&&(o=!0):m(t)&&S(t)?(u&&y(t)||d&&k(t))&&(o=!0):(s&&m(t)||f&&S(t)||p&&y(t)||g&&k(t))&&(o=!0),o&&(r?e(r,!0):n.preventDefault())}else e(r)}else n.preventDefault()}(n.target)}}},{passive:!1}),document.addEventListener("touchend",function(e){w.scroll||(w.startTouchY=0,w.startTouchX=0)}));var J={hide:function(e){n('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget'),d(e)},show:function(e){n('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget'),s(e)},toggle:function(e){n('"toggle" is deprecated! Do not use it.'),f()?d():s(e)},getState:function(){return n('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate'),f()},getWidth:function(){return n('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth'),G()},getCurrentWidth:function(){return n('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth'),T()},setScrollableTargets:function(e){n('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget'),L(e)},setFillGapSelectors:function(e){n('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector'),q(e)},setFillGapTargets:function(e){n('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget'),P(e)},clearQueue:function(){n('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks'),p()}},V=function(o){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(e){var t,l,r;t=o,r=n[l=e],l in t?Object.defineProperty(t,l,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[l]=r})}return o}({disablePageScroll:d,enablePageScroll:s,getScrollState:f,clearQueueScrollLocks:p,getTargetScrollBarWidth:g,getCurrentTargetScrollBarWidth:A,getPageScrollBarWidth:G,getCurrentPageScrollBarWidth:T,addScrollableSelector:x,removeScrollableSelector:F,addScrollableTarget:L,removeScrollableTarget:W,addLockableSelector:E,addLockableTarget:Y,addFillGapSelector:q,removeFillGapSelector:M,addFillGapTarget:P,removeFillGapTarget:j,setFillGapMethod:O,refillGaps:N,_state:w},J);t.default=V}]).default});

/*!
 * enquire.js v2.1.6 - Awesome Media Queries in JavaScript
 * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT */

!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.enquire=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function d(a,b){this.query=a,this.isUnconditional=b,this.handlers=[],this.mql=window.matchMedia(a);var c=this;this.listener=function(a){c.mql=a.currentTarget||a,c.assess()},this.mql.addListener(this.listener)}var e=a(3),f=a(4).each;d.prototype={constuctor:d,addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var b=this.handlers;f(b,function(c,d){if(c.equals(a))return c.destroy(),!b.splice(d,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){f(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";f(this.handlers,function(b){b[a]()})}},b.exports=d},{3:3,4:4}],2:[function(a,b,c){function d(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}var e=a(1),f=a(4),g=f.each,h=f.isFunction,i=f.isArray;d.prototype={constructor:d,register:function(a,b,c){var d=this.queries,f=c&&this.browserIsIncapable;return d[a]||(d[a]=new e(a,f)),h(b)&&(b={match:b}),i(b)||(b=[b]),g(b,function(b){h(b)&&(b={match:b}),d[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},b.exports=d},{1:1,4:4}],3:[function(a,b,c){function d(a){this.options=a,!a.deferSetup&&this.setup()}d.prototype={constructor:d,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},b.exports=d},{}],4:[function(a,b,c){function d(a,b){var c=0,d=a.length;for(c;c<d&&b(a[c],c)!==!1;c++);}function e(a){return"[object Array]"===Object.prototype.toString.apply(a)}function f(a){return"function"==typeof a}b.exports={isFunction:f,isArray:e,each:d}},{}],5:[function(a,b,c){var d=a(2);b.exports=new d},{2:2}]},{},[5])(5)});

/*!
 * Flickity PACKAGED v2.2.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2019 Metafizzy
 */

!function(e,i){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("jquery")):e.jQueryBridget=i(e,e.jQuery)}(window,function(t,e){"use strict";var d=Array.prototype.slice,i=t.console,u=void 0===i?function(){}:function(t){i.error(t)};function n(h,s,c){(c=c||e||t.jQuery)&&(s.prototype.option||(s.prototype.option=function(t){c.isPlainObject(t)&&(this.options=c.extend(!0,this.options,t))}),c.fn[h]=function(t){if("string"!=typeof t)return n=t,this.each(function(t,e){var i=c.data(e,h);i?(i.option(n),i._init()):(i=new s(e,n),c.data(e,h,i))}),this;var e,o,r,a,l,n,i=d.call(arguments,1);return r=i,l="$()."+h+'("'+(o=t)+'")',(e=this).each(function(t,e){var i=c.data(e,h);if(i){var n=i[o];if(n&&"_"!=o.charAt(0)){var s=n.apply(i,r);a=void 0===a?s:a}else u(l+" is not a valid method")}else u(h+" not initialized. Cannot call methods, i.e. "+l)}),void 0!==a?a:e},o(c))}function o(t){!t||t&&t.bridget||(t.bridget=n)}return o(e||t.jQuery),n}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],s=0;s<i.length;s++){var o=i[s];n&&n[o]&&(this.off(t,o),delete n[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function m(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}var i="undefined"==typeof console?function(){}:function(t){console.error(t)},y=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],b=y.length;function E(t){var e=getComputedStyle(t);return e||i("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}var S,C=!1;function x(t){if(!function(){if(!C){C=!0;var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var e=document.body||document.documentElement;e.appendChild(t);var i=E(t);S=200==Math.round(m(i.width)),x.isBoxSizeOuter=S,e.removeChild(t)}}(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=E(t);if("none"==e.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<b;e++){t[y[e]]=0}return t}();var i={};i.width=t.offsetWidth,i.height=t.offsetHeight;for(var n=i.isBorderBox="border-box"==e.boxSizing,s=0;s<b;s++){var o=y[s],r=e[o],a=parseFloat(r);i[o]=isNaN(a)?0:a}var l=i.paddingLeft+i.paddingRight,h=i.paddingTop+i.paddingBottom,c=i.marginLeft+i.marginRight,d=i.marginTop+i.marginBottom,u=i.borderLeftWidth+i.borderRightWidth,f=i.borderTopWidth+i.borderBottomWidth,p=n&&S,g=m(e.width);!1!==g&&(i.width=g+(p?0:l+u));var v=m(e.height);return!1!==v&&(i.height=v+(p?0:h+f)),i.innerWidth=i.width-(l+u),i.innerHeight=i.height-(h+f),i.outerWidth=i.width+c,i.outerHeight=i.height+d,i}}return x}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var i=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(t,e){return t[i](e)}}),function(e,i){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("desandro-matches-selector")):e.fizzyUIUtils=i(e,e.matchesSelector)}(window,function(h,o){var c={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},e=Array.prototype.slice;c.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?e.call(t):[t]},c.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},c.getParent=function(t,e){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,o(t,e))return t},c.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},c.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},c.filterFindElements=function(t,n){t=c.makeArray(t);var s=[];return t.forEach(function(t){if(t instanceof HTMLElement)if(n){o(t,n)&&s.push(t);for(var e=t.querySelectorAll(n),i=0;i<e.length;i++)s.push(e[i])}else s.push(t)}),s},c.debounceMethod=function(t,e,n){n=n||100;var s=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,i=this;this[o]=setTimeout(function(){s.apply(i,e),delete i[o]},n)}},c.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},c.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var d=h.console;return c.htmlInit=function(a,l){c.docReady(function(){var t=c.toDashed(l),s="data-"+t,e=document.querySelectorAll("["+s+"]"),i=document.querySelectorAll(".js-"+t),n=c.makeArray(e).concat(c.makeArray(i)),o=s+"-options",r=h.jQuery;n.forEach(function(e){var t,i=e.getAttribute(s)||e.getAttribute(o);try{t=i&&JSON.parse(i)}catch(t){return void(d&&d.error("Error parsing "+s+" on "+e.className+": "+t))}var n=new a(e,t);r&&r.data(e,l,n)})})},c}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/cell",["get-size/get-size"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("get-size")):(e.Flickity=e.Flickity||{},e.Flickity.Cell=i(e,e.getSize))}(window,function(t,e){function i(t,e){this.element=t,this.parent=e,this.create()}var n=i.prototype;return n.create=function(){this.element.style.position="absolute",this.element.setAttribute("aria-hidden","true"),this.x=0,this.shift=0},n.destroy=function(){this.unselect(),this.element.style.position="";var t=this.parent.originSide;this.element.style[t]=""},n.getSize=function(){this.size=e(this.element)},n.setPosition=function(t){this.x=t,this.updateTarget(),this.renderPosition(t)},n.updateTarget=n.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},n.renderPosition=function(t){var e=this.parent.originSide;this.element.style[e]=this.parent.getPositionValue(t)},n.select=function(){this.element.classList.add("is-selected"),this.element.removeAttribute("aria-hidden")},n.unselect=function(){this.element.classList.remove("is-selected"),this.element.setAttribute("aria-hidden","true")},n.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},n.remove=function(){this.element.parentNode.removeChild(this.element)},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/slide",e):"object"==typeof module&&module.exports?module.exports=e():(t.Flickity=t.Flickity||{},t.Flickity.Slide=e())}(window,function(){"use strict";function t(t){this.parent=t,this.isOriginLeft="left"==t.originSide,this.cells=[],this.outerWidth=0,this.height=0}var e=t.prototype;return e.addCell=function(t){if(this.cells.push(t),this.outerWidth+=t.size.outerWidth,this.height=Math.max(t.size.outerHeight,this.height),1==this.cells.length){this.x=t.x;var e=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=t.size[e]}},e.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft",e=this.getLastCell(),i=e?e.size[t]:0,n=this.outerWidth-(this.firstMargin+i);this.target=this.x+this.firstMargin+n*this.parent.cellAlign},e.getLastCell=function(){return this.cells[this.cells.length-1]},e.select=function(){this.cells.forEach(function(t){t.select()})},e.unselect=function(){this.cells.forEach(function(t){t.unselect()})},e.getCellElements=function(){return this.cells.map(function(t){return t.element})},t}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/animate",["fizzy-ui-utils/utils"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("fizzy-ui-utils")):(e.Flickity=e.Flickity||{},e.Flickity.animatePrototype=i(e,e.fizzyUIUtils))}(window,function(t,e){var i={startAnimation:function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},animate:function(){this.applyDragForce(),this.applySelectedAttraction();var t=this.x;if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this;requestAnimationFrame(function(){e.animate()})}},positionSlider:function(){var t=this.x;this.options.wrapAround&&1<this.cells.length&&(t=e.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),this.setTranslateX(t,this.isAnimating),this.dispatchScrollEvent()},setTranslateX:function(t,e){t+=this.cursorPosition,t=this.options.rightToLeft?-t:t;var i=this.getPositionValue(t);this.slider.style.transform=e?"translate3d("+i+",0,0)":"translateX("+i+")"},dispatchScrollEvent:function(){var t=this.slides[0];if(t){var e=-this.x-t.target,i=e/this.slidesWidth;this.dispatchEvent("scroll",null,[i,e])}},positionSliderAtSelected:function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},getPositionValue:function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},settle:function(t){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*t)||this.restingFrames++,2<this.restingFrames&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},shiftWrapCells:function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)},_shiftCells:function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n],o=0<e?i:0;s.wrapShift(o),e-=s.size.outerWidth}},_unshiftCells:function(t){if(t&&t.length)for(var e=0;e<t.length;e++)t[e].wrapShift(0)},integratePhysics:function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},applyForce:function(t){this.velocity+=t},getFrictionFactor:function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},getRestingPosition:function(){return this.x+this.velocity/(1-this.getFrictionFactor())},applyDragForce:function(){if(this.isDraggable&&this.isPointerDown){var t=this.dragX-this.x-this.velocity;this.applyForce(t)}},applySelectedAttraction:function(){if(!(this.isDraggable&&this.isPointerDown)&&!this.isFreeScrolling&&this.slides.length){var t=(-1*this.selectedSlide.target-this.x)*this.options.selectedAttraction;this.applyForce(t)}}};return i}),function(r,a){if("function"==typeof define&&define.amd)define("flickity/js/flickity",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(t,e,i,n,s,o){return a(r,t,e,i,n,s,o)});else if("object"==typeof module&&module.exports)module.exports=a(r,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"));else{var t=r.Flickity;r.Flickity=a(r,r.EvEmitter,r.getSize,r.fizzyUIUtils,t.Cell,t.Slide,t.animatePrototype)}}(window,function(n,t,e,a,i,r,s){var l=n.jQuery,o=n.getComputedStyle,h=n.console;function c(t,e){for(t=a.makeArray(t);t.length;)e.appendChild(t.shift())}var d=0,u={};function f(t,e){var i=a.getQueryElement(t);if(i){if(this.element=i,this.element.flickityGUID){var n=u[this.element.flickityGUID];return n.option(e),n}l&&(this.$element=l(this.element)),this.options=a.extend({},this.constructor.defaults),this.option(e),this._create()}else h&&h.error("Bad element for Flickity: "+(i||t))}f.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},f.createMethods=[];var p=f.prototype;a.extend(p,t.prototype),p._create=function(){var t=this.guid=++d;for(var e in this.element.flickityGUID=t,(u[t]=this).selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&n.addEventListener("resize",this),this.options.on){var i=this.options.on[e];this.on(e,i)}f.createMethods.forEach(function(t){this[t]()},this),this.options.watchCSS?this.watchCSS():this.activate()},p.option=function(t){a.extend(this.options,t)},p.activate=function(){this.isActive||(this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize(),c(this._filterFindCellElements(this.element.children),this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate"),this.selectInitialIndex(),this.isInitActivated=!0,this.dispatchEvent("ready"))},p._createSlider=function(){var t=document.createElement("div");t.className="flickity-slider",t.style[this.originSide]=0,this.slider=t},p._filterFindCellElements=function(t){return a.filterFindElements(t,this.options.cellSelector)},p.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},p._makeCells=function(t){return this._filterFindCellElements(t).map(function(t){return new i(t,this)},this)},p.getLastCell=function(){return this.cells[this.cells.length-1]},p.getLastSlide=function(){return this.slides[this.slides.length-1]},p.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},p._positionCells=function(t){t=t||0,this.maxCellHeight=t&&this.maxCellHeight||0;var e=0;if(0<t){var i=this.cells[t-1];e=i.x+i.size.outerWidth}for(var n=this.cells.length,s=t;s<n;s++){var o=this.cells[s];o.setPosition(e),e+=o.size.outerWidth,this.maxCellHeight=Math.max(o.size.outerHeight,this.maxCellHeight)}this.slideableWidth=e,this.updateSlides(),this._containSlides(),this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0},p._sizeCells=function(t){t.forEach(function(t){t.getSize()})},p.updateSlides=function(){if(this.slides=[],this.cells.length){var n=new r(this);this.slides.push(n);var s="left"==this.originSide?"marginRight":"marginLeft",o=this._getCanCellFit();this.cells.forEach(function(t,e){if(n.cells.length){var i=n.outerWidth-n.firstMargin+(t.size.outerWidth-t.size[s]);o.call(this,e,i)||(n.updateTarget(),n=new r(this),this.slides.push(n)),n.addCell(t)}else n.addCell(t)},this),n.updateTarget(),this.updateSelectedSlide()}},p._getCanCellFit=function(){var t=this.options.groupCells;if(!t)return function(){return!1};if("number"==typeof t){var e=parseInt(t,10);return function(t){return t%e!=0}}var i="string"==typeof t&&t.match(/^(\d+)%$/),n=i?parseInt(i[1],10)/100:1;return function(t,e){return e<=(this.size.innerWidth+1)*n}},p._init=p.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},p.getSize=function(){this.size=e(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var g={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};return p.setCellAlign=function(){var t=g[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign},p.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=t+"px"}},p._getWrapShiftCells=function(){if(this.options.wrapAround){this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition,e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1),t=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(t,0,1)}},p._getGapCells=function(t,e,i){for(var n=[];0<t;){var s=this.cells[e];if(!s)break;n.push(s),e+=i,t-=s.size.outerWidth}return n},p._containSlides=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length){var t=this.options.rightToLeft,e=t?"marginRight":"marginLeft",i=t?"marginLeft":"marginRight",n=this.slideableWidth-this.getLastCell().size[i],s=n<this.size.innerWidth,o=this.cursorPosition+this.cells[0].size[e],r=n-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(t){s?t.target=n*this.cellAlign:(t.target=Math.max(t.target,o),t.target=Math.min(t.target,r))},this)}},p.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),l&&this.$element){var s=t+=this.options.namespaceJQueryEvents?".flickity":"";if(e){var o=l.Event(e);o.type=t,s=o}this.$element.trigger(s,i)}},p.select=function(t,e,i){if(this.isActive&&(t=parseInt(t,10),this._wrapSelect(t),(this.options.wrapAround||e)&&(t=a.modulo(t,this.slides.length)),this.slides[t])){var n=this.selectedIndex;this.selectedIndex=t,this.updateSelectedSlide(),i?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select",null,[t]),t!=n&&this.dispatchEvent("change",null,[t]),this.dispatchEvent("cellSelect")}},p._wrapSelect=function(t){var e=this.slides.length;if(!(this.options.wrapAround&&1<e))return t;var i=a.modulo(t,e),n=Math.abs(i-this.selectedIndex),s=Math.abs(i+e-this.selectedIndex),o=Math.abs(i-e-this.selectedIndex);!this.isDragSelect&&s<n?t+=e:!this.isDragSelect&&o<n&&(t-=e),t<0?this.x-=this.slideableWidth:e<=t&&(this.x+=this.slideableWidth)},p.previous=function(t,e){this.select(this.selectedIndex-1,t,e)},p.next=function(t,e){this.select(this.selectedIndex+1,t,e)},p.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex];t&&(this.unselectSelectedSlide(),(this.selectedSlide=t).select(),this.selectedCells=t.cells,this.selectedElements=t.getCellElements(),this.selectedCell=t.cells[0],this.selectedElement=this.selectedElements[0])},p.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},p.selectInitialIndex=function(){var t=this.options.initialIndex;if(this.isInitActivated)this.select(this.selectedIndex,!1,!0);else{if(t&&"string"==typeof t)if(this.queryCell(t))return void this.selectCell(t,!1,!0);var e=0;t&&this.slides[t]&&(e=t),this.select(e,!1,!0)}},p.selectCell=function(t,e,i){var n=this.queryCell(t);if(n){var s=this.getCellSlideIndex(n);this.select(s,e,i)}},p.getCellSlideIndex=function(t){for(var e=0;e<this.slides.length;e++){if(-1!=this.slides[e].cells.indexOf(t))return e}},p.getCell=function(t){for(var e=0;e<this.cells.length;e++){var i=this.cells[e];if(i.element==t)return i}},p.getCells=function(t){t=a.makeArray(t);var i=[];return t.forEach(function(t){var e=this.getCell(t);e&&i.push(e)},this),i},p.getCellElements=function(){return this.cells.map(function(t){return t.element})},p.getParentCell=function(t){var e=this.getCell(t);return e||(t=a.getParent(t,".flickity-slider > *"),this.getCell(t))},p.getAdjacentCellElements=function(t,e){if(!t)return this.selectedSlide.getCellElements();e=void 0===e?this.selectedIndex:e;var i=this.slides.length;if(i<=1+2*t)return this.getCellElements();for(var n=[],s=e-t;s<=e+t;s++){var o=this.options.wrapAround?a.modulo(s,i):s,r=this.slides[o];r&&(n=n.concat(r.getCellElements()))}return n},p.queryCell=function(t){if("number"==typeof t)return this.cells[t];if("string"==typeof t){if(t.match(/^[#\.]?[\d\/]/))return;t=this.element.querySelector(t)}return this.getCell(t)},p.uiChange=function(){this.emitEvent("uiChange")},p.childUIPointerDown=function(t){"touchstart"!=t.type&&t.preventDefault(),this.focus()},p.onresize=function(){this.watchCSS(),this.resize()},a.debounceMethod(f,"onresize",150),p.resize=function(){if(this.isActive){this.getSize(),this.options.wrapAround&&(this.x=a.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");var t=this.selectedElements&&this.selectedElements[0];this.selectCell(t,!1,!0)}},p.watchCSS=function(){this.options.watchCSS&&(-1!=o(this.element,":after").content.indexOf("flickity")?this.activate():this.deactivate())},p.onkeydown=function(t){var e=document.activeElement&&document.activeElement!=this.element;if(this.options.accessibility&&!e){var i=f.keyboardHandlers[t.keyCode];i&&i.call(this)}},f.keyboardHandlers={37:function(){var t=this.options.rightToLeft?"next":"previous";this.uiChange(),this[t]()},39:function(){var t=this.options.rightToLeft?"previous":"next";this.uiChange(),this[t]()}},p.focus=function(){var t=n.pageYOffset;this.element.focus({preventScroll:!0}),n.pageYOffset!=t&&n.scrollTo(n.pageXOffset,t)},p.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.unselectSelectedSlide(),this.cells.forEach(function(t){t.destroy()}),this.element.removeChild(this.viewport),c(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},p.destroy=function(){this.deactivate(),n.removeEventListener("resize",this),this.allOff(),this.emitEvent("destroy"),l&&this.$element&&l.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete u[this.guid]},a.extend(p,s),f.data=function(t){var e=(t=a.getQueryElement(t))&&t.flickityGUID;return e&&u[e]},a.htmlInit(f,"flickity"),l&&l.bridget&&l.bridget("flickity",f),f.setJQuery=function(t){l=t},f.Cell=i,f.Slide=r,f}),function(e,i){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.Unipointer=i(e,e.EvEmitter)}(window,function(s,t){function e(){}var i=e.prototype=Object.create(t.prototype);i.bindStartEvent=function(t){this._bindStartEvent(t,!0)},i.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},i._bindStartEvent=function(t,e){var i=(e=void 0===e||e)?"addEventListener":"removeEventListener",n="mousedown";s.PointerEvent?n="pointerdown":"ontouchstart"in s&&(n="touchstart"),t[i](n,this)},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier)return i}},i.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},i.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},i.onpointerdown=function(t){this._pointerDown(t,t)},i._pointerDown=function(t,e){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},i.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var n={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return i._bindPostStartEvents=function(t){if(t){var e=n[t.type];e.forEach(function(t){s.addEventListener(t,this)},this),this._boundPointerEvents=e}},i._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(t){s.removeEventListener(t,this)},this),delete this._boundPointerEvents)},i.onmousemove=function(t){this._pointerMove(t,t)},i.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},i.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},i._pointerMove=function(t,e){this.pointerMove(t,e)},i.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},i.onmouseup=function(t){this._pointerUp(t,t)},i.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},i.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},i._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},i._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},i._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},i.pointerDone=function(){},i.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},i.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},i._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},i.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},e.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},e}),function(e,i){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("unipointer")):e.Unidragger=i(e,e.Unipointer)}(window,function(o,t){function e(){}var i=e.prototype=Object.create(t.prototype);i.bindHandles=function(){this._bindHandles(!0)},i.unbindHandles=function(){this._bindHandles(!1)},i._bindHandles=function(t){for(var e=(t=void 0===t||t)?"addEventListener":"removeEventListener",i=t?this._touchActionValue:"",n=0;n<this.handles.length;n++){var s=this.handles[n];this._bindStartEvent(s,t),s[e]("click",this),o.PointerEvent&&(s.style.touchAction=i)}},i._touchActionValue="none",i.pointerDown=function(t,e){this.okayPointerDown(t)&&(this.pointerDownPointer=e,t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e]))};var s={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},r={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return i.okayPointerDown=function(t){var e=s[t.target.nodeName],i=r[t.target.type],n=!e||i;return n||this._pointerReset(),n},i.pointerDownBlur=function(){var t=document.activeElement;t&&t.blur&&t!=document.body&&t.blur()},i.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},i._dragPointerMove=function(t,e){var i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(i)&&this._dragStart(t,e),i},i.hasDragStarted=function(t){return 3<Math.abs(t.x)||3<Math.abs(t.y)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},i._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},i._dragStart=function(t,e){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,e)},i.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},i._dragMove=function(t,e,i){this.isDragging&&this.dragMove(t,e,i)},i.dragMove=function(t,e,i){t.preventDefault(),this.emitEvent("dragMove",[t,e,i])},i._dragEnd=function(t,e){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},i.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},i.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},i._staticClick=function(t,e){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,e),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},i.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},e.getPointerPoint=t.getPointerPoint,e}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/drag",["./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unidragger"),require("fizzy-ui-utils")):n.Flickity=s(n,n.Flickity,n.Unidragger,n.fizzyUIUtils)}(window,function(i,t,e,a){a.extend(t.defaults,{draggable:">1",dragThreshold:3}),t.createMethods.push("_createDrag");var n=t.prototype;a.extend(n,e.prototype),n._touchActionValue="pan-y";var s="createTouch"in document,o=!1;n._createDrag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable),s&&!o&&(i.addEventListener("touchmove",function(){}),o=!0)},n.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},n.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},n.updateDraggable=function(){">1"==this.options.draggable?this.isDraggable=1<this.slides.length:this.isDraggable=this.options.draggable,this.isDraggable?this.element.classList.add("is-draggable"):this.element.classList.remove("is-draggable")},n.bindDrag=function(){this.options.draggable=!0,this.updateDraggable()},n.unbindDrag=function(){this.options.draggable=!1,this.updateDraggable()},n._uiChangeDrag=function(){delete this.isFreeScrolling},n.pointerDown=function(t,e){this.isDraggable?this.okayPointerDown(t)&&(this._pointerDownPreventDefault(t),this.pointerDownFocus(t),document.activeElement!=this.element&&this.pointerDownBlur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=l(),i.addEventListener("scroll",this),this._pointerDownDefault(t,e)):this._pointerDownDefault(t,e)},n._pointerDownDefault=function(t,e){this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},this._bindPostStartEvents(t),this.dispatchEvent("pointerDown",t,[e])};var r={INPUT:!0,TEXTAREA:!0,SELECT:!0};function l(){return{x:i.pageXOffset,y:i.pageYOffset}}return n.pointerDownFocus=function(t){r[t.target.nodeName]||this.focus()},n._pointerDownPreventDefault=function(t){var e="touchstart"==t.type,i="touch"==t.pointerType,n=r[t.target.nodeName];e||i||n||t.preventDefault()},n.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold},n.pointerUp=function(t,e){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",t,[e]),this._dragPointerUp(t,e)},n.pointerDone=function(){i.removeEventListener("scroll",this),delete this.pointerDownScroll},n.dragStart=function(t,e){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),i.removeEventListener("scroll",this),this.dispatchEvent("dragStart",t,[e]))},n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,i]),this._dragMove(t,e,i)},n.dragMove=function(t,e,i){if(this.isDraggable){t.preventDefault();var n=this.options.rightToLeft?-1:1;this.options.wrapAround&&(i.x=i.x%this.slideableWidth);var s=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.slides.length){var o=Math.max(-this.slides[0].target,this.dragStartPosition);s=o<s?.5*(s+o):s;var r=Math.min(-this.getLastSlide().target,this.dragStartPosition);s=s<r?.5*(s+r):s}this.dragX!==s&&(this.previousDragX=this.dragX),this.dragX=s,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",t,[e,i])}},n.dragEnd=function(t,e){if(this.isDraggable){this.options.freeScroll&&(this.isFreeScrolling=!0);var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingPosition();this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target}else this.options.freeScroll||i!=this.selectedIndex||(i+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.options.wrapAround,this.select(i),delete this.isDragSelect,this.dispatchEvent("dragEnd",t,[e])}},n.dragEndRestingSelect=function(){var t=this.getRestingPosition(),e=Math.abs(this.getSlideDistance(-t,this.selectedIndex)),i=this._getClosestResting(t,e,1),n=this._getClosestResting(t,e,-1);return i.distance<n.distance?i.index:n.index},n._getClosestResting=function(t,e,i){for(var n=this.selectedIndex,s=1/0,o=this.options.contain&&!this.options.wrapAround?function(t,e){return t<=e}:function(t,e){return t<e};o(e,s)&&(n+=i,s=e,null!==(e=this.getSlideDistance(-t,n)));)e=Math.abs(e);return{distance:s,index:n-i}},n.getSlideDistance=function(t,e){var i=this.slides.length,n=this.options.wrapAround&&1<i,s=n?a.modulo(e,i):e,o=this.slides[s];if(!o)return null;var r=n?this.slideableWidth*Math.floor(e/i):0;return t-(o.target+r)},n.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||100<new Date-this.dragMoveTime)return 0;var t=this.getSlideDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX;return 0<t&&0<e?1:t<0&&e<0?-1:0},n.staticClick=function(t,e){var i=this.getParentCell(t.target),n=i&&i.element,s=i&&this.cells.indexOf(i);this.dispatchEvent("staticClick",t,[e,n,s])},n.onscroll=function(){var t=l(),e=this.pointerDownScroll.x-t.x,i=this.pointerDownScroll.y-t.y;(3<Math.abs(e)||3<Math.abs(i))&&this._pointerDone()},t}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/prev-next-button",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}(window,function(t,e,i,n){"use strict";var s="http://www.w3.org/2000/svg";function o(t,e){this.direction=t,this.parent=e,this._create()}(o.prototype=Object.create(i.prototype))._create=function(){this.isEnabled=!0,this.isPrevious=-1==this.direction;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");e.className="flickity-button flickity-prev-next-button",e.className+=this.isPrevious?" previous":" next",e.setAttribute("type","button"),this.disable(),e.setAttribute("aria-label",this.isPrevious?"Previous":"Next");var i=this.createSVG();e.appendChild(i),this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},o.prototype.activate=function(){this.bindStartEvent(this.element),this.element.addEventListener("click",this),this.parent.element.appendChild(this.element)},o.prototype.deactivate=function(){this.parent.element.removeChild(this.element),this.unbindStartEvent(this.element),this.element.removeEventListener("click",this)},o.prototype.createSVG=function(){var t=document.createElementNS(s,"svg");t.setAttribute("class","flickity-button-icon"),t.setAttribute("viewBox","0 0 100 100");var e,i=document.createElementNS(s,"path"),n="string"!=typeof(e=this.parent.options.arrowShape)?"M "+e.x0+",50 L "+e.x1+","+(e.y1+50)+" L "+e.x2+","+(e.y2+50)+" L "+e.x3+",50  L "+e.x2+","+(50-e.y2)+" L "+e.x1+","+(50-e.y1)+" Z":e;return i.setAttribute("d",n),i.setAttribute("class","arrow"),this.isLeft||i.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(i),t},o.prototype.handleEvent=n.handleEvent,o.prototype.onclick=function(){if(this.isEnabled){this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()}},o.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},o.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},o.prototype.update=function(){var t=this.parent.slides;if(this.parent.options.wrapAround&&1<t.length)this.enable();else{var e=t.length?t.length-1:0,i=this.isPrevious?0:e;this[this.parent.selectedIndex==i?"disable":"enable"]()}},o.prototype.destroy=function(){this.deactivate(),this.allOff()},n.extend(e.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),e.createMethods.push("_createPrevNextButtons");var r=e.prototype;return r._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new o(-1,this),this.nextButton=new o(1,this),this.on("activate",this.activatePrevNextButtons))},r.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},r.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},e.PrevNextButton=o,e}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/page-dots",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}(window,function(t,e,i,n){function s(t){this.parent=t,this._create()}(s.prototype=Object.create(i.prototype))._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",this.dots=[],this.handleClick=this.onClick.bind(this),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},s.prototype.activate=function(){this.setDots(),this.holder.addEventListener("click",this.handleClick),this.bindStartEvent(this.holder),this.parent.element.appendChild(this.holder)},s.prototype.deactivate=function(){this.holder.removeEventListener("click",this.handleClick),this.unbindStartEvent(this.holder),this.parent.element.removeChild(this.holder)},s.prototype.setDots=function(){var t=this.parent.slides.length-this.dots.length;0<t?this.addDots(t):t<0&&this.removeDots(-t)},s.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),i=[],n=this.dots.length,s=n+t,o=n;o<s;o++){var r=document.createElement("li");r.className="dot",r.setAttribute("aria-label","Page dot "+(o+1)),e.appendChild(r),i.push(r)}this.holder.appendChild(e),this.dots=this.dots.concat(i)},s.prototype.removeDots=function(t){this.dots.splice(this.dots.length-t,t).forEach(function(t){this.holder.removeChild(t)},this)},s.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot",this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected",this.selectedDot.setAttribute("aria-current","step"))},s.prototype.onTap=s.prototype.onClick=function(t){var e=t.target;if("LI"==e.nodeName){this.parent.uiChange();var i=this.dots.indexOf(e);this.parent.select(i)}},s.prototype.destroy=function(){this.deactivate(),this.allOff()},e.PageDots=s,n.extend(e.defaults,{pageDots:!0}),e.createMethods.push("_createPageDots");var o=e.prototype;return o._createPageDots=function(){this.options.pageDots&&(this.pageDots=new s(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},o.activatePageDots=function(){this.pageDots.activate()},o.updateSelectedPageDots=function(){this.pageDots.updateSelected()},o.updatePageDots=function(){this.pageDots.setDots()},o.deactivatePageDots=function(){this.pageDots.deactivate()},e.PageDots=s,e}),function(t,n){"function"==typeof define&&define.amd?define("flickity/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickity"],function(t,e,i){return n(t,e,i)}):"object"==typeof module&&module.exports?module.exports=n(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickity")):n(t.EvEmitter,t.fizzyUIUtils,t.Flickity)}(window,function(t,e,i){function n(t){this.parent=t,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}(n.prototype=Object.create(t.prototype)).play=function(){"playing"!=this.state&&(document.hidden?document.addEventListener("visibilitychange",this.onVisibilityPlay):(this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()))},n.prototype.tick=function(){if("playing"==this.state){var t=this.parent.options.autoPlay;t="number"==typeof t?t:3e3;var e=this;this.clear(),this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},n.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},n.prototype.unpause=function(){"paused"==this.state&&this.play()},n.prototype.visibilityChange=function(){this[document.hidden?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},e.extend(i.defaults,{pauseAutoPlayOnHover:!0}),i.createMethods.push("_createPlayer");var s=i.prototype;return s._createPlayer=function(){this.player=new n(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},s.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},s.playPlayer=function(){this.player.play()},s.stopPlayer=function(){this.player.stop()},s.pausePlayer=function(){this.player.pause()},s.unpausePlayer=function(){this.player.unpause()},s.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},s.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},s.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},i.Player=n,i}),function(i,n){"function"==typeof define&&define.amd?define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./flickity"),require("fizzy-ui-utils")):n(i,i.Flickity,i.fizzyUIUtils)}(window,function(t,e,n){var i=e.prototype;return i.insert=function(t,e){var i=this._makeCells(t);if(i&&i.length){var n=this.cells.length;e=void 0===e?n:e;var s,o,r=(s=i,o=document.createDocumentFragment(),s.forEach(function(t){o.appendChild(t.element)}),o),a=e==n;if(a)this.slider.appendChild(r);else{var l=this.cells[e].element;this.slider.insertBefore(r,l)}if(0===e)this.cells=i.concat(this.cells);else if(a)this.cells=this.cells.concat(i);else{var h=this.cells.splice(e,n-e);this.cells=this.cells.concat(i).concat(h)}this._sizeCells(i),this.cellChange(e,!0)}},i.append=function(t){this.insert(t,this.cells.length)},i.prepend=function(t){this.insert(t,0)},i.remove=function(t){var e=this.getCells(t);if(e&&e.length){var i=this.cells.length-1;e.forEach(function(t){t.remove();var e=this.cells.indexOf(t);i=Math.min(e,i),n.removeFrom(this.cells,t)},this),this.cellChange(i,!0)}},i.cellSizeChange=function(t){var e=this.getCell(t);if(e){e.getSize();var i=this.cells.indexOf(e);this.cellChange(i)}},i.cellChange=function(t,e){var i=this.selectedElement;this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize();var n=this.getCell(i);n&&(this.selectedIndex=this.getCellSlideIndex(n)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[t]),this.select(this.selectedIndex),e&&this.positionSliderAtSelected()},e}),function(i,n){"function"==typeof define&&define.amd?define("flickity/js/lazyload",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./flickity"),require("fizzy-ui-utils")):n(i,i.Flickity,i.fizzyUIUtils)}(window,function(t,e,o){"use strict";e.createMethods.push("_createLazyload");var i=e.prototype;function s(t,e){this.img=t,this.flickity=e,this.load()}return i._createLazyload=function(){this.on("select",this.lazyLoad)},i.lazyLoad=function(){var t=this.options.lazyLoad;if(t){var e="number"==typeof t?t:0,i=this.getAdjacentCellElements(e),n=[];i.forEach(function(t){var e=function(t){if("IMG"==t.nodeName){var e=t.getAttribute("data-flickity-lazyload"),i=t.getAttribute("data-flickity-lazyload-src"),n=t.getAttribute("data-flickity-lazyload-srcset");if(e||i||n)return[t]}var s=t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");return o.makeArray(s)}(t);n=n.concat(e)}),n.forEach(function(t){new s(t,this)},this)}},s.prototype.handleEvent=o.handleEvent,s.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);var t=this.img.getAttribute("data-flickity-lazyload")||this.img.getAttribute("data-flickity-lazyload-src"),e=this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src=t,e&&this.img.setAttribute("srcset",e),this.img.removeAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload-src"),this.img.removeAttribute("data-flickity-lazyload-srcset")},s.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")},s.prototype.onerror=function(t){this.complete(t,"flickity-lazyerror")},s.prototype.complete=function(t,e){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);var i=this.flickity.getParentCell(this.img),n=i&&i.element;this.flickity.cellSizeChange(n),this.img.classList.add(e),this.flickity.dispatchEvent("lazyLoad",t,n)},e.LazyLoader=s,e}),function(t){"function"==typeof define&&define.amd?define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],t):"object"==typeof module&&module.exports&&(module.exports=t(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}((window,function(t){return t})),function(t,e){"function"==typeof define&&define.amd?define("flickity-as-nav-for/as-nav-for",["flickity/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("flickity"),require("fizzy-ui-utils")):t.Flickity=e(t.Flickity,t.fizzyUIUtils)}(window,function(n,s){n.createMethods.push("_createAsNavFor");var t=n.prototype;return t._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var t=this.options.asNavFor;if(t){var e=this;setTimeout(function(){e.setNavCompanion(t)})}},t.setNavCompanion=function(t){t=s.getQueryElement(t);var e=n.data(t);if(e&&e!=this){this.navCompanion=e;var i=this;this.onNavCompanionSelect=function(){i.navCompanionSelect()},e.on("select",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect(!0)}},t.navCompanionSelect=function(t){var e=this.navCompanion&&this.navCompanion.selectedCells;if(e){var i,n,s,o=e[0],r=this.navCompanion.cells.indexOf(o),a=r+e.length-1,l=Math.floor((i=r,n=a,s=this.navCompanion.cellAlign,(n-i)*s+i));if(this.selectCell(l,!1,t),this.removeNavSelectedElements(),!(l>=this.cells.length)){var h=this.cells.slice(r,1+a);this.navSelectedElements=h.map(function(t){return t.element}),this.changeNavSelectedClass("add")}}},t.changeNavSelectedClass=function(e){this.navSelectedElements.forEach(function(t){t.classList[e]("is-nav-selected")})},t.activateAsNavFor=function(){this.navCompanionSelect(!0)},t.removeNavSelectedElements=function(){this.navSelectedElements&&(this.changeNavSelectedClass("remove"),delete this.navSelectedElements)},t.onNavStaticClick=function(t,e,i,n){"number"==typeof n&&this.navCompanion.selectCell(n)},t.deactivateAsNavFor=function(){this.removeNavSelectedElements()},t.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("select",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},n}),function(e,i){"use strict";"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.imagesLoaded=i(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){var o=e.jQuery,r=e.console;function a(t,e){for(var i in e)t[i]=e[i];return t}var l=Array.prototype.slice;function h(t,e,i){if(!(this instanceof h))return new h(t,e,i);var n,s=t;("string"==typeof t&&(s=document.querySelectorAll(t)),s)?(this.elements=(n=s,Array.isArray(n)?n:"object"==typeof n&&"number"==typeof n.length?l.call(n):[n]),this.options=a({},this.options),"function"==typeof e?i=e:a(this.options,e),i&&this.on("always",i),this.getImages(),o&&(this.jqDeferred=new o.Deferred),setTimeout(this.check.bind(this))):r.error("Bad element for imagesLoaded "+(s||t))}(h.prototype=Object.create(t.prototype)).options={},h.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},h.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&c[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var s=i[n];this.addImage(s)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(n=0;n<o.length;n++){var r=o[n];this.addElementBackgroundImages(r)}}}};var c={1:!0,9:!0,11:!0};function i(t){this.img=t}function n(t,e){this.url=t,this.element=e,this.img=new Image}return h.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var s=n&&n[2];s&&this.addBackground(s,t),n=i.exec(e.backgroundImage)}},h.prototype.addImage=function(t){var e=new i(t);this.images.push(e)},h.prototype.addBackground=function(t,e){var i=new n(t,e);this.images.push(i)},h.prototype.check=function(){var n=this;function e(t,e,i){setTimeout(function(){n.progress(t,e,i)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(t){t.once("progress",e),t.check()}):this.complete()},h.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&r&&r.log("progress: "+i,t,e)},h.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},(i.prototype=Object.create(t.prototype)).check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},i.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},i.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},i.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},(n.prototype=Object.create(i.prototype)).check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},n.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},n.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},(h.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((o=t).fn.imagesLoaded=function(t,e){return new h(this,t,e).jqDeferred.promise(o(this))})})(),h}),function(i,n){"function"==typeof define&&define.amd?define(["flickity/js/index","imagesloaded/imagesloaded"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("flickity"),require("imagesloaded")):i.Flickity=n(i,i.Flickity,i.imagesLoaded)}(window,function(t,e,i){"use strict";e.createMethods.push("_createImagesLoaded");var n=e.prototype;return n._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},n.imagesLoaded=function(){if(this.options.imagesLoaded){var n=this;i(this.slider).on("progress",function(t,e){var i=n.getParentCell(e.img);n.cellSizeChange(i&&i.element),n.options.freeScroll||n.positionSliderAtSelected()})}},e});

/*
	 _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
				   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
	Docs: http://kenwheeler.github.io/slick
	Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
(function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)})(function(i){"use strict";var e=window.Slick||{};e=function(){function e(e,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(e),appendDots:i(e),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(e),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(e).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,"undefined"!=typeof document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=t++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}var t=0;return e}(),e.prototype.activateADA=function(){var i=this;i.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):o===!0?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),s.options.rtl===!0&&s.options.vertical===!1&&(e=-e),s.transformsEnabled===!1?s.options.vertical===!1?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):s.cssTransitions===!1?(s.options.rtl===!0&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),s.options.vertical===!1?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),s.options.vertical===!1?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this,o=t.getNavTarget();null!==o&&"object"==typeof o&&o.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};e.options.fade===!1?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(i.options.infinite===!1&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1===0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;e.options.arrows===!0&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),e.options.infinite!==!0&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(o.options.dots===!0&&o.slideCount>o.options.slidesToShow){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),e.options.centerMode!==!0&&e.options.swipeToSlide!==!0||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.options.draggable===!0&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>0){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(r.originalSettings.mobileFirst===!1?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||l===!1||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!==0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t,o=this;if(e=o.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var s in e){if(i<e[s]){i=t;break}t=e[s]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),e.options.accessibility===!0&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),e.options.accessibility===!0&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),e.options.accessibility===!0&&e.$list.off("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>0&&(i=e.$slides.children().children(),i.removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){var e=this;e.shouldClick===!1&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;t.cssTransitions===!1?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;e.cssTransitions===!1?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick","*",function(t){var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&o.is(":focus")&&(e.focussed=!0,e.autoPlay())},0)}).on("blur.slick","*",function(t){i(this);e.options.pauseOnFocus&&(e.focussed=!1,e.autoPlay())})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){var i=this;return i.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(i.options.infinite===!0)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(i.options.centerMode===!0)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),n.options.infinite===!0?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,n.options.vertical===!0&&n.options.centerMode===!0&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!==0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),n.options.centerMode===!0&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:n.options.centerMode===!0&&n.options.infinite===!0?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:n.options.centerMode===!0&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=n.options.vertical===!1?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,n.options.variableWidth===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=n.options.rtl===!0?o[0]?(n.$slideTrack.width()-o[0].offsetLeft-o.width())*-1:0:o[0]?o[0].offsetLeft*-1:0,n.options.centerMode===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=n.options.rtl===!0?o[0]?(n.$slideTrack.width()-o[0].offsetLeft-o.width())*-1:0:o[0]?o[0].offsetLeft*-1:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){var e=this;return e.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(e.options.infinite===!1?i=e.slideCount:(t=e.options.slidesToScroll*-1,o=e.options.slidesToScroll*-1,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o,s,n=this;return s=n.options.centerMode===!0?Math.floor(n.$list.width()/2):0,o=n.swipeLeft*-1+s,n.options.swipeToSlide===!0?(n.$slideTrack.find(".slick-slide").each(function(e,s){var r,l,d;if(r=i(s).outerWidth(),l=s.offsetLeft,n.options.centerMode!==!0&&(l+=r/2),d=l+r,o<d)return t=s,!1}),e=Math.abs(i(t).attr("data-slick-index")-n.currentSlide)||1):n.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){var t=this;t.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),t.options.accessibility===!0&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);if(i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),s!==-1){var n="slick-slide-control"+e.instanceUid+s;i("#"+n).length&&i(this).attr({"aria-describedby":n})}}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.options.focusOnChange?e.$slides.eq(s).attr({tabindex:"0"}):e.$slides.eq(s).removeAttr("tabindex");e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),i.options.accessibility===!0&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),e.options.accessibility===!0&&e.$dots.on("keydown.slick",e.keyHandler)),e.options.dots===!0&&e.options.pauseOnDotsHover===!0&&e.slideCount>e.options.slidesToShow&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),e.options.accessibility===!0&&e.$list.on("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&e.options.accessibility===!0?e.changeSlide({data:{message:e.options.rtl===!0?"next":"previous"}}):39===i.keyCode&&e.options.accessibility===!0&&e.changeSlide({data:{message:e.options.rtl===!0?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||r.$slider.attr("data-sizes"),n=document.createElement("img");n.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),r.$slider.trigger("lazyLoaded",[r,e,t])})},n.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,e,t])},n.src=t})}var t,o,s,n,r=this;if(r.options.centerMode===!0?r.options.infinite===!0?(s=r.currentSlide+(r.options.slidesToShow/2+1),n=s+r.options.slidesToShow+2):(s=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),n=2+(r.options.slidesToShow/2+1)+r.currentSlide):(s=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,n=Math.ceil(s+r.options.slidesToShow),r.options.fade===!0&&(s>0&&s--,n<=r.slideCount&&n++)),t=r.$slider.find(".slick-slide").slice(s,n),"anticipated"===r.options.lazyLoad)for(var l=s-1,d=n,a=r.$slider.find(".slick-slide"),c=0;c<r.options.slidesToScroll;c++)l<0&&(l=r.slideCount-1),t=t.add(a.eq(l)),t=t.add(a.eq(d)),l--,d++;e(t),r.slideCount<=r.options.slidesToShow?(o=r.$slider.find(".slick-slide"),e(o)):r.currentSlide>=r.slideCount-r.options.slidesToShow?(o=r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow),e(o)):0===r.currentSlide&&(o=r.$slider.find(".slick-cloned").slice(r.options.slidesToShow*-1),e(o))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){var i=this;i.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;if(!t.unslicked&&(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),t.options.accessibility===!0&&(t.initADA(),t.options.focusOnChange))){var o=i(t.$slides.get(t.currentSlide));o.attr("tabindex",0).focus()}},e.prototype.prev=e.prototype.slickPrev=function(){var i=this;i.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),r=document.createElement("img"),r.onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),l.options.adaptiveHeight===!0&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;return"boolean"==typeof i?(e=i,i=e===!0?0:o.slideCount-1):i=e===!0?--i:i,!(o.slideCount<1||i<0||i>o.slideCount-1)&&(o.unload(),t===!0?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,void o.reinit())},e.prototype.setCSS=function(i){var e,t,o=this,s={};o.options.rtl===!0&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,o.transformsEnabled===!1?o.$slideTrack.css(s):(s={},o.cssTransitions===!1?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;i.options.vertical===!1?i.options.centerMode===!0&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),i.options.centerMode===!0&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),i.options.vertical===!1&&i.options.variableWidth===!1?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):i.options.variableWidth===!0?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();i.options.variableWidth===!1&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,t.options.rtl===!0?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":"undefined"!=typeof arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),i.options.fade===!1?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=i.options.vertical===!0?"top":"left",
"top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||i.options.useCSS===!0&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&i.animType!==!1&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&i.animType!==!1},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),n.options.centerMode===!0){var r=n.options.slidesToShow%2===0?1:0;e=Math.floor(n.options.slidesToShow/2),n.options.infinite===!0&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=n.options.infinite===!0?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(s.options.fade===!0&&(s.options.centerMode=!1),s.options.infinite===!0&&s.options.fade===!1&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=s.options.centerMode===!0?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));return s||(s=0),t.slideCount<=t.options.slidesToShow?void t.slideHandler(s,!1,!0):void t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(a.animating===!0&&a.options.waitForAnimate===!0||a.options.fade===!0&&a.currentSlide===i))return e===!1&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,a.options.infinite===!1&&a.options.centerMode===!1&&(i<0||i>a.getDotCount()*a.options.slidesToScroll)?void(a.options.fade===!1&&(o=a.currentSlide,t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o))):a.options.infinite===!1&&a.options.centerMode===!0&&(i<0||i>a.slideCount-a.options.slidesToScroll)?void(a.options.fade===!1&&(o=a.currentSlide,t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o))):(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!==0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!==0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=a.getNavTarget(),l=l.slick("getSlick"),l.slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide)),a.updateDots(),a.updateArrows(),a.options.fade===!0?(t!==!0?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight()):void(t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)))},e.prototype.startLoad=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),o=Math.round(180*t/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0?s.options.rtl===!1?"left":"right":o<=360&&o>=315?s.options.rtl===!1?"left":"right":o>=135&&o<=225?s.options.rtl===!1?"right":"left":s.options.verticalSwiping===!0?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(o.touchObject.edgeHit===!0&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(e.options.swipe===!1||"ontouchend"in document&&e.options.swipe===!1||e.options.draggable===!1&&i.type.indexOf("mouse")!==-1))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,e.options.verticalSwiping===!0&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(l.options.verticalSwiping===!0&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(l.options.rtl===!1?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),l.options.verticalSwiping===!0&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,l.options.infinite===!1&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),l.options.vertical===!1?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,l.options.verticalSwiping===!0&&(l.swipeLeft=e+o*s),l.options.fade!==!0&&l.options.touchMove!==!1&&(l.animating===!0?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;return t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow?(t.touchObject={},!1):(void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,void(t.dragging=!0))},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i,e=this;i=Math.floor(e.options.slidesToShow/2),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&e.options.centerMode===!1?(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-1&&e.options.centerMode===!0&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||"undefined"==typeof s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),"undefined"!=typeof t)return t;return o}});
/**!
 * trunk8 v1.3.3
 * https://github.com/rviscomi/trunk8
 *
 * Copyright 2012 Rick Viscomi
 * Released under the MIT License.
 *
 * Date: September 26, 2012
 */

!function(t,e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?e(require("jquery")):e(t.jQuery)}(this,function(t){var e,n,r="center",i="left",a="right",s={auto:"auto"};function o(e){this.$element=t(e),this.original_text=t.trim(this.$element.html()),this.settings=t.extend({},t.fn.trunk8.defaults)}function l(t){var e=document.createElement("DIV");return e.innerHTML=t,void 0!==e.textContent?e.textContent:e.innerText}function u(e,n,r){e=e.replace(r,"");var i=function(n,a){var s,o,l,u,h="";for(u=0;u<n.length;u++)s=n[u],l=t.trim(e).split(" ").length,t.trim(e).length&&("string"==typeof s?(/<br\s*\/?>/i.test(s)||(1===l&&t.trim(e).length<=s.length?(s=e,"p"!==a&&"div"!==a||(s+=r),e=""):e=e.replace(s,"")),h+=t.trim(s)+(u===n.length-1||l<=1?"":" ")):(o=i(s.content,s.tag),s.after&&(e=e.replace(s.after,"")),o&&(s.after||(s.after=" "),h+="<"+s.tag+s.attribs+">"+o+"</"+s.tag+">"+s.after)));return h},a=i(n);return a.slice(a.length-r.length)!==r&&(a+=r),a}function h(){var e,r,i,a,o,h,c=this.data("trunk8"),f=c.settings,g=f.width,d=f.side,p=f.fill,m=f.parseHTML,v=n.getLineHeight(this)*f.lines,y=c.original_text,S=y.length,x="";if(this.html(y),o=this.text(),m&&l(y)!==y&&(h=function t(e){if(l(e)===e)return e.split(/\s/g);for(var n,r,i=[],a=/<([a-z]+)([^<]*)(?:>([\S\s]*?(?!<\1>))<\/\1>|\s+\/>)(['.?!,]*)|((?:[^<>\s])+['.?!,]*\w?|<br\s?\/?>)/gi,s=a.exec(e);s&&n!==a.lastIndex;)n=a.lastIndex,s[5]?i.push(s[5]):s[1]&&i.push({tag:s[1],attribs:s[2],content:s[3],after:s[4]}),s=a.exec(e);for(r=0;r<i.length;r++)"string"!=typeof i[r]&&i[r].content&&(i[r].content=t(i[r].content));return i}(y),S=(y=l(y)).length),g===s.auto){if(this.height()<=v)return;for(e=0,r=S-1;e<=r;)i=e+(r-e>>1),a=n.eatStr(y,d,S-i,p),m&&h&&(a=u(a,h,p)),this.html(a),this.height()>v?r=i-1:(e=i+1,x=x.length>a.length?x:a);this.html(""),this.html(x),f.tooltip&&this.attr("title",o)}else{if(isNaN(g))return void t.error('Invalid width "'+g+'".');i=S-g,a=n.eatStr(y,d,i,p),this.html(a),f.tooltip&&this.attr("title",y)}f.onTruncate()}o.prototype.updateSettings=function(e){this.settings=t.extend(this.settings,e)},e={init:function(e){return this.each(function(){var n=t(this),r=n.data("trunk8");r||n.data("trunk8",r=new o(this)),r.updateSettings(e),h.call(n)})},update:function(e){return this.each(function(){var n=t(this);e&&(n.data("trunk8").original_text=e),h.call(n)})},revert:function(){return this.each(function(){var e=t(this).data("trunk8").original_text;t(this).html(e)})},getSettings:function(){return t(this.get(0)).data("trunk8").settings}},(n={eatStr:function(e,s,o,l){var u,h,c=e.length,f=n.eatStr.generateKey.apply(null,arguments);if(n.eatStr.cache[f])return n.eatStr.cache[f];if("string"==typeof e&&0!==c||t.error('Invalid source string "'+e+'".'),o<0||o>c)t.error('Invalid bite size "'+o+'".');else if(0===o)return e;switch("string"!=typeof(l+"")&&t.error("Fill unable to be converted to a string."),s){case a:return n.eatStr.cache[f]=t.trim(e.substr(0,c-o))+l;case i:return n.eatStr.cache[f]=l+t.trim(e.substr(o));case r:return u=c>>1,h=o>>1,n.eatStr.cache[f]=t.trim(n.eatStr(e.substr(0,c-u),a,o-h,""))+l+t.trim(n.eatStr(e.substr(c-u),i,h,""));default:t.error('Invalid side "'+s+'".')}},getLineHeight:function(e){var n=t(e).css("float");"none"!==n&&t(e).css("float","none");var r=t(e).css("position");"absolute"===r&&t(e).css("position","static");var i,a=t(e).html(),s="line-height-test";return t(e).html("i").wrap('<div id="'+s+'" />'),i=t("#"+s).innerHeight(),t(e).html(a).css({float:n,position:r}).unwrap(),i}}).eatStr.cache={},n.eatStr.generateKey=function(){return Array.prototype.join.call(arguments,"")},t.fn.trunk8=function(n){return e[n]?e[n].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof n&&n?void t.error("Method "+n+" does not exist on jQuery.trunk8"):e.init.apply(this,arguments)},t.fn.trunk8.defaults={fill:"&hellip;",lines:1,side:a,tooltip:!0,width:s.auto,parseHTML:!1,onTruncate:function(){}}});
/**!
 * jquery.visible.min.js
 * https://github.com/customd/jquery-visible
 * @license MIT (https://github.com/customd/jquery-visible/blob/master/LICENSE.txt)
 */
!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);

/* Ajaxify v1 | Copyright (c) 2017 Elkfox Co Pty Ltd | https://elkfox.com | Project lead: George Butter | MIT License | https://github.com/Elkfox/Ajaxify */
ajaxify = function(settings) {
	settings = settings || {}
	// Change the default selectors here
	var linkParent = settings.linkParent || '.pagination' // Class of pagination container
	var parentContainer = settings.parentContainer || '#MainContent' // All of the content selector used to detect scroll bottom distance
	var endlessScrollContainer = settings.endlessScrollContainer || '.EndlessScroll' // Selector for endless scroll pages
	var endlessClickContainer = settings.endlessClickContainer || '.EndlessClick' // Class of pagination container
	var endlessOffset = settings.endlessOffset || 0 // Offset the distance from the bottom of the page
	var ajaxinateContainer = settings.ajaxinateContainer || '.Ajaxinate' // ID Selector for ajax pagination pages
	var ajaxinateLink = settings.ajaxinateLink || '.page a' // Class Selector for ajax pagination links
	var sectionId = $( endlessScrollContainer ).closest( '[data-section-id]' ).data( 'section-id' ) ||
					$( endlessClickContainer ).closest( '[data-section-id]' ).data( 'section-id' ) ||
					$( ajaxinateContainer ).closest( '[data-section-id]' ).data( 'section-id' ) || '';
	var fade = settings.fade || 'fast' // fade speed
	var textChange = settings.textChange || 'Loading' // Text whilst loading content
	const callback = settings.callback || false

	var linkElem;
	var contentContainer;
	var pageNumber;
	var pageType;
	var action;
	var moreURL;

	$.loadMore = function() {
		if (moreURL.length){
			$.ajax({
				type: 'GET',
				dataType: 'html',
				url: moreURL,
				success: function(data) {
					if (pageType == 'ajax') {
						$(ajaxinateContainer).not('[data-page="'+pageNumber+'"]').hide();
						history.pushState({}, pageNumber, moreURL);
					} else {
						$(linkElem).fadeOut(fade);
					}

					var filteredData = $(data).find(contentContainer).html();
					$(contentContainer)
						.find('.visually-hidden')
							.removeClass('visually-hidden')
						.end()
						.find('.gridSpacer, .pagination').remove().end().append( filteredData );

					if (pageType == 'endlessScroll') {
						$.endlessScroll();
					} else if (pageType == 'ajax') {
						$.ajaxinationClick();
					} else if (pageType == 'endlessClick') {
						$.endlessClick();
					}

					$(document).trigger('ajaxify:updated', [data]);
					if(callback && typeof(callback) === 'function') {
						callback(data);
					}
				}
			});
		} else {
			$(contentContainer).find('.visually-hidden').removeClass('visually-hidden');

			// Simulate ajaxify update
			$(document).trigger('ajaxify:updated');
		}
	}

	// Check whether the page is at the bottom
	$.endlessScroll = function() {
		action = 'scroll.endlessScroll--' + sectionId + ' load resize.endlessScroll--' + sectionId;
		$(window).on( action, function() {
			contentContainer = endlessScrollContainer;
			moreURL = $(contentContainer+':last-of-type '+linkElem).attr('href');
			pageType = 'endlessScroll';
			$(linkElem).text(textChange);
			if ($(contentContainer+':last-of-type '+linkElem).length){
				var bottom = $( parentContainer ).outerHeight();
				var docTop = ($(document).scrollTop() + $(window).height() + endlessOffset);
				if( docTop > bottom ) {
				$(window).off(action);
					$.loadMore();
				}
			}
		});
	}

	//Endless click function
	$.endlessClick = function() {
		$(linkElem).on( 'click', function(e) {
			e.preventDefault();
			action = 'click';
			contentContainer = endlessClickContainer;
			moreURL = $(this).attr('href');
			pageType = 'endlessClick';
			$(linkElem).text(textChange);
			$(linkElem).off(action);
			$(linkElem).on('click', function(e) {
				e.preventDefault();
			});

			$.loadMore();
		});
	}

	//Ajaxination click function
	$.ajaxinationClick = function() {
		$(linkElem).on( 'click', function(e) {
			e.preventDefault();
			action = 'click';
			contentContainer = ajaxinateContainer;
			moreURL = $(this).attr('href');
			pageNumber = $(this).attr('data-number');
			pageType = 'ajax';
			if( $(contentContainer+'[data-page="'+pageNumber+'"]').length ) {
				$(contentContainer).not('[data-page="'+pageNumber+'"]').hide();
				$(contentContainer+'[data-page="'+pageNumber+'"]').fadeIn(fade);
				history.pushState({}, pageNumber, moreURL);
			} else {
				$(linkElem).off(action);
				$.loadMore();
			}
			$('html, body').animate({ scrollTop: $(parentContainer).offset().top }, 300 );
		});
	}

	// Detect whether the pagination types exist
	// Endless Click Initialize
	if ( $( endlessClickContainer ).length ) {
		linkElem = linkParent+' a';
		$.endlessClick();
	}
		// Ajaxination Click Initialize
	if ( $( ajaxinateContainer ).length ) {
		linkElem = ajaxinateLink;
		$.ajaxinationClick();
	}
		// Endless Scroll Initialize
	if ( $( endlessScrollContainer ).length ) {
		linkElem = linkParent+' a';
		$.endlessScroll();
	}

}

	// Library loader for 3D Model and Plyr video player
	var LibraryLoader = (function() {
	var types = {
		link: 'link',
		script: 'script'
	};

	var status = {
		requested: 'requested',
		loaded: 'loaded'
	};

	var cloudCdn = 'https://cdn.shopify.com/shopifycloud/';

	var libraries = {
		youtubeSdk: {
			tagId: 'youtube-sdk',
			src: 'https://www.youtube.com/iframe_api',
			type: types.script
		},
		plyrShopifyStyles: {
			tagId: 'plyr-shopify-styles',
			src: cloudCdn + 'shopify-plyr/v1.0/shopify-plyr.css',
			type: types.link
		},
		modelViewerUiStyles: {
			tagId: 'shopify-model-viewer-ui-styles',
			src: cloudCdn + 'model-viewer-ui/assets/v1.0/model-viewer-ui.css',
			type: types.link
		}
	};

	function load(libraryName, callback) {
		var library = libraries[libraryName];

		if (!library) return;
		if (library.status === status.requested) return;

		callback = callback || function() {};
		if (library.status === status.loaded) {
			callback();
			return;
		}

		library.status = status.requested;

		var tag;

		switch (library.type) {
			case types.script:
				tag = createScriptTag(library, callback);
				break;
			case types.link:
				tag = createLinkTag(library, callback);
				break;
			}

		tag.id = library.tagId;
		library.element = tag;

		var firstScriptTag = document.getElementsByTagName(library.type)[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}

	function createScriptTag(library, callback) {
		var tag = document.createElement('script');
		tag.src = library.src;
		tag.addEventListener('load', function() {
			library.status = status.loaded;
			callback();
		});
		return tag;
	}

	function createLinkTag(library, callback) {
		var tag = document.createElement('link');
		tag.href = library.src;
		tag.rel = 'stylesheet';
		tag.type = 'text/css';
		tag.addEventListener('load', function() {
			library.status = status.loaded;
			callback();
		});
		return tag;
	}

	return {
		load: load
	};
})();

jQuery( function ($) {
	var Sections = {
		init: function() {
			$( document )
				.on( 'shopify:section:load', this._onSectionLoad )
				.on( 'shopify:section:unload', this._onSectionUnload )
				.on( 'shopify:section:select', this._onSectionSelect )
				.on( 'shopify:section:deselect', this._onSectionDeselect )
				.on( 'shopify:block:select', this._onBlockSelect )
				.on( 'shopify:block:deselect', this._onBlockDeselect );
		},

		/**
		 * A section has been added or re-rendered.
		 */
		_onSectionLoad: function( e ) {
			var section = $( e.target ).children( '[data-section-type]' ).data( 'section-type' ) || false;

			Site.animations.init();

			switch( section ) {
				case 'header':
					_loadHeader( e.target );
					break;
				case 'footer':
					_loadFooter( e.target );
					break;
				case 'product':
					_loadProduct( e.target );
					break;
				case 'gallery':
					_loadGallery( e.target );
					break;
				case 'mosaic':
					_loadMosaic( e.target );
				case 'map':
					_loadGmap( e.target );
					break;
				case 'slideshow':
					_loadHero( e.target );
					break;
				case 'collection-template':
					_loadCollectionTemplate( e.target );
					break;
				case 'featured-collection':
					_loadFeaturedCollection( e.target );
					break;
				case 'collection-grid':
					_loadListCollections( e.target );
					break;
				case 'related-products':
					_loadRelatedProductsTemplate( e.target );
					break;
				case 'blog-template':
					_loadBlogTemplate( e.target );
					break;
				case 'featured-blog':
					_loadFeaturedBlog( e.target );
					break;
				case 'featured-video':
					_loadFeaturedVideo( e.target );
					break;
				case 'logos-list':
					_loadLogosList( e.target );
					break;
				case 'about-template':
					_loadAboutTemplate( e.target );
					break;
				case 'faq-template':
					_loadFaqList( e.target );
					break;
				case 'faq-section':
					_loadFaqList( e.target );
					break;
			}

			function _loadHeader( t ) {
				Site.header.resetHeader();
				Site.nav.hide();
				Site.nav.init();
				Site.header.init();

				Search.init();
				if ( !$('.template-cart').length ) {
					Cart.init();
				}

				setTimeout( function() {
					$(window).scroll();
				}, 100);
			}

			function _loadFooter( t ) {
				Site.footer();
			}

			function _loadProduct( t ) {
				var sectionId = $( t ).find( '[data-section-id]' ).data( 'section-id' ),
					update = true;

				Product.init( update, sectionId );

				Site.video();
				Site.initReviews();
			}

			function _loadGmap( t ) {
				Gmap.init( );
			}

			function _loadFeaturedBlog( t ) {
				Blog.init();
			}

			function _loadBlogTemplate( t ) {
				// Reload ajaxify
				ajaxify();
				Blog.init();
			}

			function _loadGallery( t ) {
				var slider = $( t ).find( '.js-slider' ),
					autoplay = slider.data( 'autoplay' ),
					options = JSON.parse( slider.data( 'slick' ).replace(/'/g, '"') );

				options = $.extend({}, options, {
					'autoplay': autoplay,
					'prevArrow': '<button class="slick-prev slick-arrow" aria-label="' + window.theme.translations.previous + '" type="button">' + window.theme.icons.arrowSlider + '</button>',
					'nextArrow': '<button class="slick-next slick-arrow" aria-label="' + window.theme.translations.next + '" type="button">' + window.theme.icons.arrowSlider + '</button>'
				});

				slider.on('init', function() {
					$(this).removeClass('gallery-slider--is-loading');
				});
				slider.slick( options );
			}

			function _loadMosaic( t ) {
				var section = $( t ),
					slider = $( t ).find( '.js-mosaic__blocks'),
					sectionId = $( t ).children().first().data( 'section-id' ),
					lastWindowWidth = window.innerWidth || document.documentElement.clientWidth;

				Site.sliders.initMobileSlider(slider);
				Site.sliders.truncateMosaicText(section);
				Site.video();

				$(window)
					.on( 'load', Site.sliders.truncateMosaicText(section))
					.on( 'resize.' + sectionId, Reqs.debounce( function() {
						var windowWidth = window.innerWidth || document.documentElement.clientWidth;

						// Continue on window resize width change only
						if ( lastWindowWidth != windowWidth ) Site.sliders.initMobileSlider(slider);
						lastWindowWidth = windowWidth;
						Site.sliders.truncateMosaicText( section );
					}, 250));
			}

			function _loadHero( t ) {
				var hero = $( t ).find( '.js-hero-slider' ),
					autoplay = hero.data( 'autoplay' ),
					options = JSON.parse( hero.data( 'slick' ).replace(/'/g, '"') ),
					scrollDownBtn = $( t ).find('.js-scroll-down');

				options = $.extend({}, options, {
					'autoplay': autoplay,
					'prevArrow': '<button class="slick-prev slick-arrow" aria-label="' + window.theme.translations.previous + '" type="button">' + window.theme.icons.arrowSlider + '</button>',
					'nextArrow': '<button class="slick-next slick-arrow" aria-label="' + window.theme.translations.next + '" type="button">' + window.theme.icons.arrowSlider + '</button>'
				});

				hero.on('init', function() {
					var currentStyle = $(this).find('.js-slide[data-slick-index="1"]').data('style');
					$(this).attr('data-current-style', currentStyle);
					$(this).removeClass('hero--is-loading');
				});

				hero.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
					var activeSlide = parseInt(nextSlide + 1);
					var $nextSlide = $(this).find('.js-slide[data-slick-index="' + activeSlide +'"]');
					var currentStyle = $nextSlide.data('style');

					$(this).attr('data-current-style', currentStyle);
				});

				hero.slick( options );

				$(window).on( 'scroll.slideshow resize.slideshow', Reqs.throttle( function() {
					var windowHeight = $(window).height();
					var windowScroll = $(window).scrollTop();
					var heroHeight = hero.height();
					var heroOffsetTop = hero.offset().top;

					// If Hero is outside the the viewport pause slideshow
					if ( heroOffsetTop + heroHeight >= windowScroll && heroOffsetTop - windowHeight <= windowScroll && autoplay ) {
						hero.slick( 'slickPlay' );
					} else {
						hero.slick( 'slickPause' );
					}
				}, 100));

				scrollDownBtn.on('click', function(e) {
					e.preventDefault();
					var headerHeight = 59;
					var scrollToPosition = parseInt(hero.offset().top + hero.outerHeight() - headerHeight);
					$('html, body').stop(true, false).animate({ 'scrollTop': scrollToPosition }, 500);
				});

				Site.header.resetHeader();
				Site.header.init();
			}

			function _loadFeaturedCollection( t ) {
				var collectionGrid = $( t ).find('.js-collectionGrid'),
					sectionId = collectionGrid.data( 'section-id' );

				Collection.init();

				Site.initReviews();
				Site.sliders.collection();
				Site.sliders.setCarouselState( collectionGrid );
				$(window).on('resize.' + sectionId, Reqs.debounce(function() {
					Site.sliders.setCarouselState( collectionGrid );
				}, 250));
			}

			function _loadCollectionTemplate( t ) {
				Collection.init();
				Site.sliders.collection();
				Site.initReviews();
			}

			function _loadListCollections( t ) {
				var collectionList = $( t ).find( '.collectionList' ),
					sectionId = collectionList.data( 'section-id' );

				ListCollections.truncateBlockText( collectionList );
				$(window).on( 'resize.' + sectionId, Reqs.throttle( function() {
					ListCollections.truncateBlockText( collectionList );
				}, 50));
				$(document).on( 'ajaxify:updated', function() {
					ListCollections.truncateBlockText( collectionList );
				});
			}

			function _loadFeaturedVideo( t ) {
				Site.video();
			}

			function _loadLogosList( t ) {
				var slider, options;

				slider = $( t ).find( '.js-logos-slider' );
				options = {
					'infinite': true,
					'autoplay': false,
					'speed': 300,
					'slidesToShow': 8,
					'centerPadding': '80px',
					'arrows': true,
					'dots': false,
					'prevArrow': '<button class="slick-prev slick-arrow" aria-label="' + window.theme.translations.previous + '" type="button">' + window.theme.icons.arrowSlider + '</button>',
					'nextArrow': '<button class="slick-next slick-arrow" aria-label="' + window.theme.translations.next + '" type="button">' + window.theme.icons.arrowSlider + '</button>',
					'responsive': [
						{
						  'breakpoint': 1440,
						  'settings': {
							'centerPadding': '40px',
							'slidesToShow': 6
						  }
						},
						{
						  'breakpoint': 1024,
						  'settings': {
							'centerPadding': '30px',
							'slidesToShow': 5
						  }
						},
						{
						  'breakpoint': 992,
						  'settings': {
							'centerPadding': '25px',
							'slidesToShow': 4
						  }
						},
						{
						  'breakpoint': 768,
						  'settings': {
							'centerPadding': '20px',
							'slidesToShow': 3
						  }
						},
						{
						  'breakpoint': 640,
						  'settings': {
							'centerPadding': '15px',
							'slidesToShow': 2
						  }
						},
						{
						  'breakpoint': 375,
						  'settings': {
							'centerPadding': '10px',
							'slidesToShow': 1
						  }
						}
					]
				};

				slider.slick( options );
			}

			function _loadAboutTemplate( t ) {
				Site.header.init();
			}

			function _loadRelatedProductsTemplate( t ) {
				RelatedProducts.init();
			}

			function _loadFaqList( t ) {
				var $faqList = $( t ).find( '.faq-list' );

				$faqList.on('click', '.faq-list__item-question', function(e) {
					e.preventDefault();
					$(this).parent().toggleClass('is-expanded');
				});
			}
		},

		/**
		 * A section has been deleted or is being re-rendered.
		 */
		_onSectionUnload: function( e ) {
			var section = e.target.children[ 0 ].getAttribute( 'data-section-type' ) || false;

			switch( section ) {
				case 'header':
					_unloadHeader( e.target );
					break;
				case 'gallery':
					_unloadGallery( e.target );
					break;
				case 'slideshow':
					_unloadHero( e.target );
					break;
				case 'logos-list':
					_unloadLogosList( e.target );
					break;
				case 'mosaic':
					_unloadMosaic( e.target );
					break;
				case 'popup':
					_unloadPopup( e.target );
					break;
				case 'product':
					_unloadProduct( e.target );
					break;
				case 'collection-grid':
					_unloadListCollections( e.target );
					break;
				case 'collection-template':
					_unloadProductGrid( e.target );
					break;
				case 'featured-collection':
					_unloadProductGrid( e.target );
					break;
				case 'related-products':
					_unloadProductGrid( e.target );
					break;
				case 'blog-template':
					_unloadBlogTemplate( e.target );
					break;
			}

			function _unloadHeader( t ) {
				$(window).off( 'scroll.header resize.header' );
			}

			function _unloadGallery( t ) {
				var slider = $( t ).find( '.js-slider' );

				slider.slick( 'unslick' );

				$(window).off( 'scroll.gallery' );
			}

			function _unloadHero( t ) {
				var hero = $( t ).find( '.js-hero-slider' );

				hero.slick( 'unslick' );

				$(window).off( 'scroll.slideshow resize.slideshow' );
			}

			function _unloadLogosList( t ) {
				var slider = $( t ).find( '.js-logos-slider' );

				slider.slick( 'unslick' );
			}

			function _unloadMosaic( t ) {
				var slider = $( t ).find( '.js-mosaic__blocks' ),
					isSlickActive = slider.hasClass('slick-initialized'),
					sectionId = sectionId = $( t ).children().first().data( 'section-id' );

				if ( isSlickActive ) {
					slider.slick( 'unslick' );
				}
				$(window).off( 'resize.' + sectionId );
			}

			function _unloadPopup( t ) {
				Popup.hide();
			}

			function _unloadListCollections( t ) {
				var sectionId = $( t ).children().first().data( 'section-id' ),
					actions = 'scroll.endlessScroll--' + sectionId + ' load resize.endlessScroll--' + sectionId + ' resize.' + sectionId;

				// Destroy ajaxify event listeners
				$(window).off( actions );
			}

			function _unloadProduct( t ) {
				var $container = $( t ).children().first(),
					sectionId = $container.data( 'section-id' ),
					namespace = '.product' + sectionId,
					$shopBar = $( '#shop-bar' );

				$shopBar.remove();

				ProductVideo.removeSectionVideos( sectionId );
				ProductModel.removeSectionModels( sectionId );

				$(window).off( 'resize.product' );
				$(window).off( 'scroll.product' );

				$container.off( namespace );
			}

			function _unloadProductGrid( t ) {
				var sectionId = $( t ).children().first().data( 'section-id' ),
					actions = 'resize.' + sectionId + ' scroll.endlessScroll--' + sectionId + ' load resize.endlessScroll--' + sectionId;

				$(window).off( actions );
				$(window).off( 'resize.collection' );
			}

			function _unloadBlogTemplate( t ) {
				var sectionId = $( t ).children().first().data( 'section-id' ),
					actions = 'scroll.endlessScroll--' + sectionId + ' load resize.endlessScroll--' + sectionId;

				// Destroy ajaxify event listeners
				$(window).off( actions );
			}
		},

		/**
		 * User has selected the section in the sidebar.
		 */
		_onSectionSelect: function( e ) {
			var section = e.target.children[ 0 ].getAttribute( 'data-section-type' ) || e.target.children[ 1 ].getAttribute( 'data-section-type' ) || e.target.children[ 2 ].getAttribute( 'data-section-type' ) || false;

			switch( section ) {
				case 'header':
					_selectHeader( e.target );
					break;
				case 'blog-template':
					_selectBlog( e.target );
					break;
				case 'popup':
					_selectPopup( e.target );
					break;
			}

			function _selectHeader( t ) {
				Site.header.resetHeader();
				Site.nav.hide();
				Site.header.init();
			}

			function _selectPopup( t ) {
				Popup.init();
			}

			function _selectBlog( t ) {
				Blog.init();
			}
		},

		/**
		 * User has selected the section in the sidebar.
		 */
		_onSectionDeselect: function( e ) {
			var section = e.target.children[ 0 ].getAttribute( 'data-section-type' ) || false;

			switch( section ) {
				case 'header':
					_deselectHeader( e.target );
					break;
			}

			function _deselectHeader( t ) {
				Site.nav.hide();
			}

		},

		/**
		 * User has selected the block in the sidebar.
		 */
		_onBlockSelect: function( e ) {
			var block = e.target.getAttribute( 'data-block' ) || false;

			switch( block ) {
				case 'slide':
					_selectBlockSlide( e.target );
					break;
				case 'mosaic':
					_selectBlockMosaic( e.target );
					break;
				case 'testimonial':
					_selectBlockTestimonial( e.target );
					break;
				case 'item_logo':
					_selectBlockItemLogo( e.target );
					break;
			}

			function _selectBlockSlide( t ) {
				var slider = $( t ).parents( '.slick-slider' ),
					index = $( t ).parents('.slick-slide:not(.slick-cloned)').attr( 'data-slick-index' );

				slider.slick( 'slickGoTo', index );
				slider.slick( 'slickPause' );
			}

			function _selectBlockMosaic( t ) {
				var section = $( t ).parents( '.section-mosaic' ),
					slider = $( t ).parents( '.js-mosaic__blocks' ),
					isSlickActive = slider.hasClass( 'slick-initialized' ),
					index;

				if (isSlickActive) {
					index = $( t ).parents('.slick-slide:not(.slick-cloned)').attr( 'data-slick-index' );

					slider.slick( 'slickGoTo', index );
					slider.slick( 'slickPause' );
				}

				Site.sliders.truncateMosaicText( section );
				Site.video();
			}

			function _selectBlockItemLogo( t ) {
				var slider = $( t ).parents( '.js-logos-slider' ),
					index = $( t ).parents('.slick-slide:not(.slick-cloned)').attr( 'data-slick-index' );

				slider.slick( 'slickGoTo', index );
			}
		},

		/**
		 * User has DEselected the block in the sidebar.
		 */
		_onBlockDeselect: function( e ) {
			var block = e.target.getAttribute( 'data-block' ) || false;

			switch( block ) {
				case 'slide':
					_deselectBlockSlide( e.target );
					break;
				case 'item_logo':
					_deselectBlockItemLogo( e.target );
					break;
			}

			function _deselectBlockSlide( t ) {
				var slider = $( t ).parents( '.slick-slider' ),
					autoplay = slider.data( 'autoplay' );

				if ( autoplay ) {
					slider.slick( 'slickPlay' );
				}
			}

			function _deselectBlockItemLogo( t ) {
				var slider = $( t ).parents( '.js-logos-slider' );
				slider.slick( 'slickPlay' );
			}
		}
	}

	var s;
	window.Site = {
		settings: {
			b: $('body'),
			w: $(window),
			d: $(document)
		},

		init: function(){
			s = this.settings;

			this.general();
			this.setScrollbarWidth();
			this.header.init();
			this.footer();
			this.nav.init();
			this.sliders.init();
			this.addresses.init();
			this.keyboardAccessible();
			this.video();
			this.faq();
			this.checkReviewsApp();

			if (this.getQueryParameter('customer_posted') == "true") {
				$('body').addClass('signUp-posted');
				s.d.scrollTop( s.d.height() - s.w.height() );
			}
		},

		/*
		 * General Bindings
		 */
		general: function() {
			// Social sharing links
			s.b.on('click', '.share-link', function(event) {

				event.preventDefault();

				var el = $(this),
					popup = el.attr('data-network'),
					link = el.attr('href'),
					w = 700,
					h = 400;

				switch (popup) {
					case 'twitter':
						h = 300;
						break;
				}

				window.open(link, popup, 'width=' + w + ', height=' + h);
			});

			// Smooth scroll to anchored element
			s.b.on('click', '[data-anchor-link]', function(e) {
				var anchor = $(this).attr( 'href' );

				if ( $(anchor).length ) {
					var anchorTop = $(anchor).offset().top - 60;
					$( 'html, body' ).stop().animate({ scrollTop: anchorTop });

					e.preventDefault();
				}

			});
		},

		setScrollbarWidth: function() {
			var root = document.documentElement,
				scrollbarWidth = scrollLock.getPageScrollBarWidth() + 'px';

			root.style.setProperty('--scrollbar-width', scrollbarWidth );
		},

		getQueryParameter: function(name) {
			name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
				results = regex.exec(location.search);
			return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		},

		keyboardAccessible: function(){
			s.w.mousedown(function(event) {
				s.b.addClass("no-outline");
			});
			s.w.keyup(function(event) {
				if ( event.keyCode === 9 ) {
					s.b.removeClass("no-outline");
				}
			});
		},

		/*
		 * Header Scroll Function
		 */
		header: {
			init: function() {
				var $header = $( '.site-header' ),
					$headerContainer = $( '#shopify-section-header' ),
					$bodyWrap = $( '.bodyWrap' ),
					lastWindowWidth = window.innerWidth || document.documentElement.clientWidth,
					namespace = '.header';

				checkNavigationOverlapping();

				$(window)
					.off( namespace )
					.on( 'load', checkNavigationOverlapping )
					.on( 'scroll' + namespace, Reqs.throttle( stickyHeaderState, 50) )
					.on( 'resize' + namespace, Reqs.throttle( Site.setCartClosePosition, 50) )
					.on( 'resize' + namespace, Reqs.debounce( function() {
						var windowWidth = window.innerWidth || document.documentElement.clientWidth;

						// Skip window height resize event
						if ( lastWindowWidth != windowWidth ) checkNavigationOverlapping();
						lastWindowWidth = windowWidth;
					}, 250) );

				function stickyHeaderState() {
					var scrolled = $(window).scrollTop(),
						contentTop = $bodyWrap.offset().top;

					if ( scrolled > contentTop ) {
						$headerContainer.addClass( 'shopify-section-header--fixed' );
						$header.addClass( 'header--has-scrolled' );
					} else {
						$headerContainer.removeClass( 'shopify-section-header--fixed' );
						$header.removeClass( 'header--has-scrolled' );
					}
				}

				function checkNavigationOverlapping() {
					var isNavigationStandard = $header.hasClass( 'header--standard' ),
						$scrollableElement = document.querySelector( '.nav-search-scroller' );

					if ( isNavigationStandard ) {
						var isNavigationOverlapping = getNavigationOverlapping();
						var isDesktop = $(window).width() >= 1024;

						if ( isNavigationOverlapping || !isDesktop ) {
							$header.removeClass('header--is-standard header--search-visible').addClass('header--is-hamburger');
							scrollLock.enablePageScroll( $scrollableElement );
						} else {
							Site.nav.hide();
						}
					}

					setBodySpacer();

					$(document).one( 'shopify:section:unload', function() {
						setTimeout(setBodySpacer, 100); // Needed for section:unload event when section is disabled
					})
				}

				function getNavigationOverlapping() {
					$header.addClass('header--is-standard').removeClass('header--is-hamburger');

					var headerContainerWidth = $('.site-header .container > .row').width();
					var navMenuWidth = getMenuItemsWidth();
					var isNavigationOverlapping = false;
					var isNavCentered = $header.hasClass('header--logo_center_links_center') || $header.hasClass('header--logo_left_links_center');
					var isNavLeftLogoCentered = $header.hasClass('header--logo_center_links_left') || $header.hasClass('header--logo_left_links_left');
					var additionalSpace = 40; // Additional spacing from margins
					var headerIconsWidth = $('.header-icons').outerWidth();
					var logoWidth = getLogoWidth();

					if (isNavCentered) {
						logoWidth = logoWidth < headerIconsWidth ? headerIconsWidth : logoWidth;
						logoWidth = logoWidth * 2;
						headerIconsWidth = 0;
					}

					isNavigationOverlapping = parseInt( headerContainerWidth ) < parseInt( navMenuWidth + logoWidth + headerIconsWidth + additionalSpace );

					if ( isNavLeftLogoCentered ) {
						isNavigationOverlapping = parseInt( ( headerContainerWidth - logoWidth ) / 2 ) < parseInt( navMenuWidth );
					}

					return isNavigationOverlapping;
				}

				function getLogoWidth() {
					var logoWidth = 0,
						$logoImage = $('.logo__image-link'),
						$logoText = $('.logo__text');

					if ( $logoImage.length ) {
						logoWidth = $logoImage.data( 'width' );
					}

					if ( $logoText.length ) {
						logoWidth += $logoText.outerWidth();
					}

					return logoWidth;
				}

				function getMenuItemsWidth() {
					var itemsWidth = 0;
					$('.nav-standard .menu > li').each(function() {
						itemsWidth += $(this).outerWidth(true);
					});
					return itemsWidth;
				}

				function setBodySpacer() {
					var heroEnabled = Site.isHeroEnabled();

					if ( heroEnabled ) {
						$header.addClass( 'header--no-bg' );
						$bodyWrap.removeAttr( 'data-spacer' );
					} else {
						$header.removeClass('header--no-bg' );
						$bodyWrap.attr( 'data-spacer', 'default' );

						if ( $header.hasClass( 'header--is-hamburger' ) ) {
							$bodyWrap.attr( 'data-spacer', 'small' );
						} else if ( $header.hasClass( 'header--logo_center_links_center' ) )
							$bodyWrap.attr( 'data-spacer', 'large' );
					}
				}
			},

			resetHeader: function() {
				var $body = $( 'body' ),
					$bodyWrap = $( '.bodyWrap' ),
					$hamburger = $( '#hamburger-menu' ),
					$transformElements = $( '.site-header, .siteAlert, .bodyWrap, .shop-bar' ),
					$scrollableElement = document.querySelector('.nav-inner');

				$body.removeClass( 'nav--is-visible' );
				$bodyWrap.removeAttr( 'style' );
				$transformElements.css( 'transform', 'none' );
				$hamburger.removeClass( 'open' );

				scrollLock.enablePageScroll( $scrollableElement );

				if ( $body.hasClass( 'cart--is-visible' ) ) {
					$( '.js-cartToggle' ).eq(0).trigger( 'click' );
				}
			}
		},

		isHeroEnabled: function() {
			var headerTransparent = $( '.site-header' ).data( 'transparent' ),
				headerFull = $('.main-content').children().first( '.shopify-section' ).hasClass( 'header--full' ) || $('.main-content').children().first( '.shopify-section' ).find( '[data-header-style="index"]').length;

			return headerFull && headerTransparent;
		},

		setCartClosePosition: function() {
			if ( $('#cartTotal').length ) {
				var $cartBtnClose = $('.cart-drawer .js-cartToggle'),
					scrollTop = $(window).scrollTop(),
					cartBtnPositionTop = $('#cartTotal').offset().top - scrollTop,
					containerPadding = 40,
					cartBtnTop = cartBtnPositionTop - containerPadding;

				$cartBtnClose.css( 'top', cartBtnTop );
			}
		},

		footer: function() {
			var $productContainer = $( '.js-product-template' );
			var $siteFooter = $( '.site-footer' );

			var selectors = {
				disclosureLocale: '[data-disclosure-locale]',
				disclosureCurrency: '[data-disclosure-currency]'
			};

			var $disclosureLocale = $( selectors.disclosureLocale, $siteFooter );
			var disclosureLocale = {};

			var $disclosureCurrency = $( selectors.disclosureCurrency, $siteFooter );
			var disclosureCurrency = {};

			if ($disclosureLocale.length){
				disclosureLocale = new Disclosure($disclosureLocale);
			}
			if ($disclosureCurrency.length){
				disclosureCurrency = new Disclosure($disclosureCurrency);
			}

			$(window).on('scroll',
				Reqs.throttle( function(){
					var scrolled = $(window).scrollTop();
					var $shopBar = $('#shop-bar');

					if ( $productContainer.length && $shopBar.length ) {
						var productContainerOffset = $productContainer.offset().top;

						if ( scrolled > productContainerOffset ) {
							$shopBar.addClass('shop-bar--is-visible');
							$siteFooter.addClass('site-footer--push')
						} else if ( scrolled < productContainerOffset - 60 ) {
							$shopBar.removeClass('shop-bar--is-visible');
							$siteFooter.removeClass('site-footer--push')
						}
					}
				}, 100)
			);
		},

		video: function(){
			Reqs.lightbox();
			$('.js-video').each( function() {
				$(this).magnificPopup({
					closeMarkup: '<button title="%title%" type="button" class="mfp-close">' + window.theme.icons.close + '</button>',
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					autoFocusLast: false,
					fixedContentPos: false,
					iframe: {
					 	markup: '<div class="mfp-iframe-scaler">'+
									'<div class="mfp-close"></div>'+
									'<iframe class="mfp-iframe" frameborder="0" allowfullscreen allow="autoplay, fullscreen"></iframe>'+
								'</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
						patterns: {
							youtube: {
								index: 'youtube.com/',
								id: 'v=',
								src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0modestbranding=0' // URL that will be set as a source for iframe.
							},
							youtube_short: {
								index: 'youtu.be/',
								id: 'youtu.be/',
								src: '//www.youtube.com/embed/%id%?autoplay=1&autohide=0&branding=0&cc_load_policy=0&controls=0&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&quality=hd720&rel=0&showinfo=0&wmode=opaque'
							}
						},
						srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
					}
				});
			});
		},

		faq: function(){
			$( '.faq-list__item-question' ).on('click', function(e) {
				e.preventDefault();
				$(this).parent().toggleClass('is-expanded');
			});
		},

		/*
		 * Sliders
		 */
		sliders: {
			init: function(){
				this.hero();
				this.carousel();
				this.collection();
				this.gallery();
				this.mosaic();
				this.logosList();
			},

			/* Homepage Hero Slider */
			hero: function(){
				var hero = $( '.js-hero-slider' ),
					scrollDownBtn = $('.js-scroll-down');

				hero.each( function () {
					var currentHero = $(this),
						autoplay = currentHero.data( 'autoplay' ),
						options = JSON.parse( currentHero.data( 'slick' ).replace(/'/g, '"') );

					options = $.extend({}, options, {
						'autoplay': false,
						'prevArrow': '<button class="slick-prev slick-arrow" aria-label="' + window.theme.translations.previous + '" type="button">' + window.theme.icons.arrowSlider + '</button>',
						'nextArrow': '<button class="slick-next slick-arrow" aria-label="' + window.theme.translations.next + '" type="button">' + window.theme.icons.arrowSlider + '</button>'
					});

					currentHero.on('init', function() {
						var currentStyle = $(this).find('.js-slide[data-slick-index="1"]').data('style');
						$(this)
							.attr('data-current-style', currentStyle)
							.removeClass('hero--is-loading');
					});

					currentHero.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
						var activeSlide = parseInt(nextSlide + 1),
							$nextSlide = $(this).find('.js-slide[data-slick-index="' + activeSlide +'"]'),
							currentStyle = $nextSlide.data('style');

						$(this).attr('data-current-style', currentStyle);
					});

					currentHero.slick( options );

					$(window).on( 'scroll.slideshow resize.slideshow', Reqs.throttle( function() {
						var isSlideshowVisible = currentHero.visible(true),
							slickInitialized = currentHero.hasClass( 'slick-initialized' );

						if ( slickInitialized ) {
							if ( isSlideshowVisible && autoplay ) {
								// If Hero is inside the viewport play slideshow
								currentHero.slick( 'slickPlay' );
							} else {
								// If Hero is outside the the viewport pause slideshow
								currentHero.slick( 'slickPause' );
							}
						}
					}, 100));

					$(window).on( 'load', function() {
						if ( autoplay ) {
							hero.slick( 'slickPlay' );
						}
					});
				} );

				$('.slick-list').attr('tabindex','-1');

				scrollDownBtn.on('click', function(e) {
					e.preventDefault();
					var headerHeight = 59;
					var scrollToPosition = parseInt(hero.offset().top + hero.outerHeight() - headerHeight);
					$('html, body').stop(true, false).animate({ 'scrollTop': scrollToPosition }, 500);
				});
			},

			/* Carousel Slider
			 * Called multiple times throughout site
			 */
			carousel: function(){
				var $carousel = $( '.js-carousel-slider' );
				var flickity = $carousel.data( 'flickity' );
				if (flickity == undefined) {
					$carousel.flickity({
						cellSelector: '.js-slide',
						cellAlign: 'center',
						watchCSS: true,
						prevNextButtons: false,
						pageDots: false
					});
				}
			},

			/* Collection Slider */
			collection: function(){
				var $container = $( '.js-collection-grid' ),
					$carousel = $( '.js-collection-slider' );

				$('.quickView-button', $carousel).on('click', function() {
					$(this).closest('.slick-slide').addClass('slick-slide--quickView');
				});

				$('html, body').on('quickView:show', function() {
					setQuickViewPosition();
					$carousel.find('.slick-slide--quickView').removeClass('slick-slide--quickView');
				});

				$('html, body').on('quickView:ajax', setQuickViewPosition);

				$container.each(function() {
					Site.sliders.setCarouselState( $(this) );
				});

				$carousel.each(function() {
					Site.removeAnimationClass( $(this) );
				});

				$(window).on( 'resize', Reqs.debounce(function() {
					setQuickViewPosition();

					$container.each(function() {
						Site.sliders.setCarouselState( $(this) );
					});
				}, 250));

				function setQuickViewPosition() {
					var $slide = $carousel.find('.slick-slide--quickView');

					if ( !$slide.length ) {
						$slide = $carousel.find('.quickView--is-visible').closest('.slick-slide');
					}

					if ( $carousel.length && $slide.length ) {
						var $quickView = $slide.find('.quickView-wrap');
						var offsetLeft = $carousel.find('.slick-slide.slick-current').position().left - $slide.position().left;

						$quickView.css('left', offsetLeft);
					}
				}
			},

			setCarouselState: function($container) {
				if ( typeof $container == 'undefined' ) return;

				var $carousel = $container.find( '.js-collection-slider' );

				if ( $carousel.length ) {
					Site.removeAnimationClass( $container );

					var isDesktopInitialized = $carousel.hasClass( 'slick-initialized' ),
						slidesPerRow = parseInt( $container.data( 'slides-per-row' ) ),
						windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
						options = {
							'slidesPerRow': slidesPerRow,
							'infinite': false,
							'dots': false,
							'prevArrow': '<button class="slick-prev slick-arrow" aria-label="' + window.theme.translations.previous + '" type="button">' + window.theme.icons.arrowLong + '</button>',
							'nextArrow': '<button class="slick-next slick-arrow" aria-label="' + window.theme.translations.next + '" type="button">' + window.theme.icons.arrowLong + '</button>',
							'responsive': [
								{
									'breakpoint': 1024,
									'settings': {
										'slidesPerRow': 2
									}
								}
							]
						};

					if ( windowWidth >= 768 ) {
						// Init carousel on desktop
						initCarousel();
					} else {
						// Destroy carousel if initialized on desktop
						if ( isDesktopInitialized ) {
							$carousel.slick( 'unslick' );
						}
					}

					setArrowsPosition();
				}

				function initCarousel() {
					if ( !isDesktopInitialized ) {
						$carousel.on( 'init', setArrowsPosition );
						$carousel
							.slick( options )
							.on( 'beforeChange', function() {
								if ( $( '.quickView--is-visible' ).length ) {
									QuickView.hide();
								}
							});
					}
				}

				function setArrowsPosition() {
					var $arrows = $carousel.find( '.slick-arrow' );
					var arrowTop = $carousel.find( '.collectionBlock-image' ).outerHeight() / 2;
					$arrows.css( 'top', arrowTop );
				}
			},

			/* Gallery Slider */
			gallery: function(){
				var slider = $('.js-slider');

				slider.each( function () {
					var currentSlider = $(this),
						autoplay = currentSlider.data( 'autoplay' ),
						options = JSON.parse( currentSlider.data( 'slick' ).replace(/'/g, '"') );

					options = $.extend({}, options, {
						'autoplay': false,
						'prevArrow': '<button class="slick-prev slick-arrow" aria-label="' + window.theme.translations.previous + '" type="button">' + window.theme.icons.arrowSlider + '</button>',
						'nextArrow': '<button class="slick-next slick-arrow" aria-label="' + window.theme.translations.next + '" type="button">' + window.theme.icons.arrowSlider + '</button>'
					});

					currentSlider.on('init', function() {
						$(this).removeClass('gallery-slider--is-loading');
					});

					currentSlider.slick( options );

					// Pause slider if it's outside the viewport to prevent elements shaking
					$(window)
						.on( 'scroll.gallery',
							Reqs.debounce( function() {
								var isSliderVisible = isAnyPartOfElementInViewport(currentSlider.get( 0 ));

								if ( isSliderVisible && autoplay ) {
									currentSlider.slick( 'slickPlay' );
								} else {
									currentSlider.slick( 'slickPause' );
								}
							}, 150)
						)
						.on( 'load', function() {
							if ( autoplay ) {
								currentSlider.slick( 'slickPlay' );
							}
						});
				} );

				function isAnyPartOfElementInViewport(el) {

					const rect = el.getBoundingClientRect();
					const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
					const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

					const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
					const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

					return (vertInView && horInView);
				}
			},

			/* Mosaic Slider Mobile */
			mosaic: function() {
				var self = this,
					slider = $('.js-mosaic__blocks');

				slider.each( function() {
					var currentSlider = $(this),
						section = $(this).closest( '.section-mosaic' ),
						sectionId = $(this).closest( '[data-section-id]' ).data( 'section-id' ),
						lastWindowWidth = window.innerWidth || document.documentElement.clientWidth;

					self.initMobileSlider(currentSlider);
					$(window)
						.on( 'load', self.truncateMosaicText(section))
						.on( 'resize.' + sectionId, Reqs.debounce( function() {
							var windowWidth = window.innerWidth || document.documentElement.clientWidth;

							// Continue on window resize width change only
							if ( lastWindowWidth != windowWidth ) self.initMobileSlider(currentSlider);
							lastWindowWidth = windowWidth;

							self.truncateMosaicText(section)
						}, 250));
				});
			},

			truncateMosaicText: function(container) {
				$(container).find('.mosaic__heading, .mosaic__subheading').trunk8({ lines: 1 });
				$(container).find('.mosaic__text').trunk8({ lines: 2 });
				$(container).find('.mosaic__block-text-title').trunk8({ lines: 3 });
				$(container).find('.mosaic__image-text > p').trunk8({ lines: 8 });
			},

			initMobileSlider: function(currentSlider) {
				var isMobile = $(window).width() < 768;
				var isSlickActive = currentSlider.hasClass('slick-initialized');
				var options = {
					'infinite': true,
					'autoplay': false,
					'speed': 300,
					'slidesToShow': 1,
					'arrows': true,
					'prevArrow': '<button class="slick-prev slick-arrow" aria-label="' + window.theme.translations.previous + '" type="button">' + window.theme.icons.arrowSlider + '</button>',
					'nextArrow': '<button class="slick-next slick-arrow" aria-label="' + window.theme.translations.next + '" type="button">' + window.theme.icons.arrowSlider + '</button>',
					'dots': false
				};

				// Init Slick on mobily only and destroy it otherwise
				if (isMobile && !isSlickActive) {
					currentSlider.slick( options );
				} else if (!isMobile && isSlickActive) {
					currentSlider.slick( 'unslick' );
				}
			},

			/* Logos list carousel */
			logosList: function(){
				var self = this;
				var slider = $('.js-logos-slider');
				var options = {
					'infinite': true,
					'autoplay': false,
					'speed': 300,
					'slidesToShow': 8,
					'centerPadding': '80px',
					'arrows': true,
					'dots': false,
					'prevArrow': '<button class="slick-prev slick-arrow" aria-label="' + window.theme.translations.previous + '" type="button">' + window.theme.icons.arrowSlider + '</button>',
					'nextArrow': '<button class="slick-next slick-arrow" aria-label="' + window.theme.translations.next + '" type="button">' + window.theme.icons.arrowSlider + '</button>',
					'responsive': [
						{
						  'breakpoint': 1440,
						  'settings': {
							'centerPadding': '40px',
							'slidesToShow': 6
						  }
						},
						{
						  'breakpoint': 1024,
						  'settings': {
							'centerPadding': '30px',
							'slidesToShow': 5
						  }
						},
						{
						  'breakpoint': 992,
						  'settings': {
							'centerPadding': '25px',
							'slidesToShow': 4
						  }
						},
						{
						  'breakpoint': 768,
						  'settings': {
							'centerPadding': '20px',
							'slidesToShow': 3
						  }
						},
						{
						  'breakpoint': 640,
						  'settings': {
							'centerPadding': '15px',
							'slidesToShow': 2
						  }
						},
						{
						  'breakpoint': 375,
						  'settings': {
							'centerPadding': '10px',
							'slidesToShow': 1
						  }
						}
					]
				};

				slider.each(function() {
					$( this ).slick( options );
				});
			},

			checkThumbnailsOverflow: function( $thumbs ) {
				var thumbWidth = $thumbs.find( '.js-slide' ).outerWidth(),
					slidesCount = $thumbs.find( '.js-slide' ).length,
					slidesWidth = parseInt( thumbWidth * slidesCount ),
					slidesContainerWidth = $thumbs.width();

				return (slidesContainerWidth < slidesWidth);
			},
		},

		/*
		 * Main Menu
		 */
		nav: {
			getWidth: function() {
				var ww = $(window).outerWidth();

				if(ww >= 1280) {
					return ww / 3;
				} else if(ww >= 768) {
					return ww * 2 / 3;
				} else {
					return ww;
				}
			},
			init: function(){
				Site.nav.bindings();
				Site.nav.activeLinks();
			},
			bindings: function(){
				var $body = $( 'body' ),
					$header = $( '.site-header' );

				$('.js-menuToggle').on('click', function(e){
					e.preventDefault();

					$('body').hasClass('nav--is-visible') ? Site.nav.hide() : Site.nav.show();
				});

				$('.nav-standard .has-submenu').on('mouseover', function() {
					$(this).addClass('is-expanded').find('a[aria-expanded]').attr('aria-expanded', true);
					$(this).siblings().removeClass('is-expanded').find('a[aria-expanded]').attr('aria-expanded', false);
				});

				// Close dropdown
				$('.nav-standard .menu-item--dropdown').on('mouseleave', function() {
					$(this).removeClass('is-expanded').find('a[aria-expanded]').attr('aria-expanded', false);
				});

				// Open/close megamenu
				$('.nav-standard .menu-item--meganav')
					.on('mouseover', function() {
						$('.site-header').addClass('header--megamenu-visible');
						$(this).find('.visible-nav-link').removeAttr('tabindex');
					})
					.on('mouseleave', function() {
						$(this).removeClass('is-expanded').find('a[aria-expanded]').attr('aria-expanded', false);
						$('.site-header').removeClass('header--megamenu-visible');
						$('.visible-nav-link').attr('tabindex', '-1');
					});

				// A11y
				$('.nav-standard .toggle-submenu').on( 'click', function(e) {
					var el = $(this),
						isSubmenuOpen = el.parent().hasClass( 'is-expanded' );

					if ( isSubmenuOpen ) {
						// Close mega menu
						Site.nav.submenuStandard.close();
					} else {
						Site.nav.submenuStandard.open( el );
					}
				});

				// Close header dropdowns and search on focus another elements or ESC key is pressed
				$body.on('keyup', function(e) {
					if ( e.keyCode !== slate.utils.keyboardKeys.TAB && e.keyCode !== slate.utils.keyboardKeys.ESCAPE ) return;

					var $focusedElement = $(e.target),
						isSubmenuChild = $focusedElement.parents( '.submenu' ).length,
						isHamburgerChild = $focusedElement.parents( '.nav-hamburger' ).length,
						isSearchChild = $focusedElement.parents( '.nav-search' ).length || !$focusedElement.is( '.js-searchToggle--open' );

					if ( e.keyCode === slate.utils.keyboardKeys.TAB ) {
						if ( !isSubmenuChild ) {
							// Close submenu or megamenu
							Site.nav.submenuStandard.close();
						}

						if ( !isHamburgerChild ) {
							// Close hamburger menu
							Site.nav.hide();
						}

						if ( !isSearchChild ) {
							// Close search
							Site.nav.search.close();
							Search.close();
						}
					} else if ( e.keyCode === slate.utils.keyboardKeys.ESCAPE ) {
						Site.nav.submenuStandard.close();
						Site.nav.search.close();
						Search.close();
						Site.nav.hide();
					}
				});

				$('.main-content').children().first().on('click', function(){
					Site.nav.hide();
				});

				$('.nav-hamburger .has-submenu .dropdown-arrow').on('click', function(e) {
					if ( $(this).parent().hasClass( 'is-expanded' ) ) {
						Site.nav.submenu.close( $(this).parent() );
					} else {
						Site.nav.submenu.open( $(this).parent() );
					}
				});

				$('.js-searchToggle').on('click', function(e) {
					e.preventDefault();

					if ( $header.hasClass('header--search-visible') ){
						Site.nav.search.close();
						Search.close();
					} else {
						var search = $(this).data( 'search-nav' );
						Site.nav.search.open( search );
					}
				});

				// Hide search modal on click outside
				$(document).on('click', function(e){
					if (!$(e.target).is('.nav-search-overlay, .nav-search-overlay *, .js-searchToggle, .js-searchToggle *')) {
						if ($header.hasClass('header--search-visible')){
							Site.nav.search.close();
							Search.close();
						}
					}
				});

				// Close hamburger menu on body click
				$body.on('click', function(e) {
					if (!$(e.target).is('.js-menuToggle, .js-menuToggle *, .nav-main *')) {
						Site.nav.hide();
					}
				});
			},
			show: function(){
				var navMenuWidth = $( '.nav-hamburger' ).width() + 'px',
					$body = $( 'body' ),
					$hamburger = $( '#hamburger-menu' ),
					$transformElements = $( '.site-header, .siteAlert, .bodyWrap, .shop-bar' ),
					$scrollableElement = document.querySelector('.nav-inner');

				$hamburger.addClass('open');
				$body.addClass('nav--is-visible');

				scrollLock.disablePageScroll( $scrollableElement );

				$('.header-icons a:not(.js-menuToggle)').attr('tabindex', '-1' );
				$('.nav-hamburger').find( 'button, a' ).removeAttr( 'tabindex' );

				$transformElements.css({ 'transform': 'translateX(' + navMenuWidth + ')' });

				$(window).on('resize.siteNav', Reqs.debounce( function() {
					var isHamburger = $('.site-header').hasClass('header--is-hamburger');
					if ( isHamburger ) {
						navMenuWidth = $('.nav-hamburger').width() + 'px';
						$transformElements.css({ 'transform': 'translateX(' + navMenuWidth + ')' });
					}
				}, 100 ));
			},
			hide: function(){
				var $body = $('body'),
					$hamburger = $( '#hamburger-menu' ),
					$transformElements = $( '.site-header, .siteAlert, .bodyWrap, .shop-bar' ),
					$scrollableElement = document.querySelector('.nav-inner');

				if ( !$body.hasClass( 'nav--is-visible')) return;

				$hamburger.removeClass('open');
				$body.addClass('nav--is-hiding').removeClass( 'nav--is-visible' );
				$transformElements.css({ 'transform': 'none' });
				scrollLock.enablePageScroll( $scrollableElement );

				$(window).off('resize.siteNav');

				setTimeout(function(){
					$body.removeClass('nav--is-hiding');
				}, 300);

				$('.header-icons a').removeAttr('tabindex');
				$('.nav-hamburger').find( 'button, a' ).attr( 'tabindex', '-1' );
			},

			activeLinks: function(){
				var $menu_items = $(".menu-item"),
					$submenu_items = $('.submenu-item');

				$menu_items.each(function(){
					if ($(this).find('> a').attr('href')=== window.location.pathname) {
						$(this).addClass('is-active');
					}
					// if no top-level link is active, then a submenu link is probably active
					else {
						$submenu_items.each(function(){
							if ($(this).find('> a').attr('href')=== window.location.pathname) {
								$(this).addClass('is-active'); // activate the active submenu link
								$(this).closest('.menu-item.has-submenu').addClass('is-active'); // activate parent as well
							} else {
								return; // must be homepage or page not in menu
							}
						});
					}
				});
			},

			submenuStandard: {
				open: function(el) {
					// Close other mega menus
					el.parent().siblings('.menu-item--meganav').removeClass('is-expanded').find('a[aria-expanded]').attr('aria-expanded', false);
					el.parent().siblings('.menu-item--meganav').find('.visible-nav-link').attr('tabindex', '-1');

					// Open selected mega menu
					el.attr('aria-expanded', true).parent().addClass('is-expanded');
					el.parent().find('.visible-nav-link').removeAttr('tabindex');

					// Header state when megamenu is open
					if ( el.parents('.menu-item--meganav').length ) {
						$('.site-header').addClass('header--megamenu-visible');
					}
				},
				close: function() {
					$('.visible-nav-link').attr('tabindex', '-1');
					$('.nav-standard .menu li').removeClass('is-expanded').find('a[aria-expanded]').attr('aria-expanded', false);
					$('.site-header').removeClass('header--megamenu-visible');
				}
			},

			/*
			 * Sub Menus
			 */
			submenu: {
				open: function(el){
					var $elSubMenu = $(el);

					$elSubMenu.addClass('is-expanded').find('> .submenu').stop(true).slideDown('fast');
					$elSubMenu.find('.visible-nav-link').removeAttr('tabindex');
				},
				close: function(el){
					var $elSubMenu = $(el);

					$elSubMenu.removeClass('is-expanded').find('> .submenu').stop(true).slideUp('fast');
					$elSubMenu.find('.visible-nav-link').attr('tabindex', '-1');
				}
			},

			/*
			 * Search
			 */
			search: {
				open: function(search){
					var $header = $( '.site-header' ),
						$searchToggleBtn = $( '.js-searchToggle' ),
						$searchInput = $( search ).find( '.nav-search-input' ),
						$clickableElements = $( search ).find( '.nav-search-input, .nav-search-submit, .js-searchToggle--close' ),
						$scrollableElement = document.querySelector( '.nav-search-scroller' );

					$header.addClass( 'header--search-visible' );
					$searchToggleBtn.attr( 'aria-expanded', true );
					$clickableElements.removeAttr( 'tabindex' );
					$searchInput.focus().select();

					scrollLock.disablePageScroll( $scrollableElement );
				},
				close: function(){
					var $header = $( '.site-header' ),
						$searchToggleBtn = $( '.js-searchToggle' ),
						$searchToggleBtnOpen = $( '.js-searchToggle--open' ),
						$clickableElements = $( '.nav-search-input, .nav-search-submit, .js-searchToggle--close' ),
						$scrollableElement = document.querySelector( '.nav-search-scroller' ),
						isSearchVisible = $header.hasClass( 'header--search-visible' );

					$clickableElements.attr( 'tabindex', '-1' );
					$searchToggleBtn.attr( 'aria-expanded', false);

					if ( isSearchVisible) {
						$header.addClass( 'header--search-hiding' ).removeClass( 'header--search-visible' );
						$searchToggleBtnOpen.focus();
						setTimeout(function(){
							$header.removeClass( 'header--search-hiding' );
							scrollLock.enablePageScroll( $scrollableElement );
						}, 300);
					}
				}
			}
		},

		/*
		 * Form Address Validation
		 */
		addresses: {
			addAddressForm: $(".js-addAddress > form"),
			editAddressForm: $(".js-editAddress > form"),
			init: function () {
				$addAddressForm = this.addAddressForm,
				$editAddressForm = this.editAddressForm;

				Site.addresses.validating();
			},
			validating: function () {
				$addAddressForm.add($editAddressForm).submit(function (e) {
					var isEmpty = true;

					// Display notification if input is empty
					$(this).find('input').not(".optional").each(function () {
						if (!$(this).val()) {
							$(this).next().addClass("validation--showup");
						} else {
							$(this).next().removeClass("validation--showup");
						}
					});

					// Detect whether form is valid
					$(this).find('input').not(".optional").each(function () {
						if (!$(this).val()) {
							isEmpty = false;
						}
					});
					if (!isEmpty) {
						return false;
					}
				});
			}
		},

		checkReviewsApp: function() {
			var showReviews = window.theme.settings.showReviews,
				showYotpo = window.theme.settings.enableYotpo,
				yotpoID = window.theme.settings.yotpoId;

			if ( !showReviews || !(showYotpo && yotpoID) ) return;

			var checkingApp = setInterval(function() {
				var reviewsAppInstalled = typeof window.SPR == 'function' && showReviews || typeof yotpo == 'object' && showYotpo && yotpoID;

				if (!reviewsAppInstalled) {
					$('body').attr('data-app-reviews', 'not-installed');
				} else {
					$('body').removeAttr('data-app-reviews');
					clearInterval(checkingApp);
				}
			}, 1000);

			setTimeout(function() {
				clearInterval(checkingApp);
			}, 20000);
		},

		animations: {
			init: function() {
				var self = this,
					enableTextAnimations = window.theme.settings.enableTextAnimations,
					enableGridItemsAnimations = window.theme.settings.enableGridItemsAnimations;

				$( 'body' ).removeClass( 'is-page-loading' );

				if ( !enableTextAnimations && !enableGridItemsAnimations ) return;

				if ( enableGridItemsAnimations ) {
					// Allow grid items animations
					$( 'body' ).addClass( 'allow-grid-items-animations' );
				}

				this.animateAll();

				$(document).on('ajaxify:updated', this.animateAll);
				$(window)
					.on('load', this.animateAll)
					.on('scroll', Reqs.throttle(self.animateAll, 100));
			},

			animateAll: function( $animatedElements ) {
				var $animatedElements = $('.will-animate');

				$animatedElements.each(function() {
					var $element = $(this),
						animationClass = 'animated ' + $element.data('animation'),
						delay = $element.data( 'animation-delay' ) || 0,
						duration = 1000 + delay; // 1000ms is the default duration time

					if ( $element.visible(true) ) {
						$element.addClass(animationClass).removeClass('will-animate');

						setTimeout( function() {
							$element.removeClass( animationClass );
						}, duration);
					}
				});
			}
		},

		initReviews: function() {
			var showReviews = window.theme.settings.showReviews,
				enableYotpo = window.theme.settings.enableYotpo,
				yotpoID = window.theme.settings.yotpoId;

			if ( enableYotpo && yotpoID != '' && typeof yotpo != 'undefined' ) {
				yotpo.initialized ? yotpo.refreshWidgets() : yotpo.initWidgets();
				$( '.star-clickable' ).removeAttr( 'tabindex' );
			} else if ( showReviews && typeof window.SPR == 'function' ) {
				window.SPR.initDomEls();
				window.SPR.loadBadges();
				window.SPR.loadProducts();
			}
		},

		removeAnimationClass: function( container ) {
			// Remove will-animate class to prevent elements stay hidden on horizontal scroll
			$( '.will-animate', container ).removeClass( 'will-animate' );
		}
	}

	Site.init();
	Cart.init();
	Collection.init();
	ListCollections.init();
	Blog.init();
	Site.animations.init();

	$(document).ready(function() {
		Gmap.init();
	});

	Sections.init();
	Popup.init();
	Search.init();

	if ( $('.template-product').length ) {
		Product.init();
		RelatedProducts.init();
	}

	if ( $('.featured-product' ).length ) {
		Product.init();
	}

	if ( $('.template-password').length ) {
		Password.init();
	}

	if ( $('.template-customers-login').length ) {
		Login.init();
	}

	if ( $('.template-customers-addresses').length ) {
		Addresses.init();
	}

	if ( $('.template-search').length ) {
		SearchTemplate.init();
	}

	if ( window.theme.settings.showQuickView ) {
		QuickView.init();
	}

	slate.a11y.pageLinkFocus($(window.location.hash));

	$('.in-page-link').on('click', function(evt) {
		slate.a11y.pageLinkFocus($(evt.currentTarget.hash));
	});

	$(document).on( 'shopify:section:reorder', Site.header.init );
	$(document).on( 'shopify:section:unload', Site.header.init );
});

Cart = {
	popoverTimer: 0,
	init: function() {
		var $cart = $( '#Cart' ),
			$body = $( 'body' ),
			$popover = $( '#CartPopoverCont' ),
			enableAjaxCart = window.theme.settings.enableAjaxCart;

		this.counter();
		this.initTermsAcceptance();

		$( window ).on( 'resize', Reqs.throttle( Site.setCartClosePosition, 10));

		/* Continue Shopping link - hide cart overlay if on desktop */
		$cart.on('click', '.js-continueShopping', function(e){
			e.preventDefault();
			var referrer = document.referrer;
			var origin = window.location.origin + '/';
			var isMobile = $(window).width() < 768;

			if ( !isMobile && !(window.location.href.indexOf('/cart') > -1) ){
				$('.js-cartToggle-close').eq(0).trigger('click');
			} else {
				if ( referrer === origin ) {
					window.location.href = window.theme.routes.root_url;
				} else {
					history.back(1);
				}
			}
		});

		// Don't init cart functions if ajax cart disabled
		if ( !enableAjaxCart ) return false;

		$( document ).off( 'click', '.js-cartToggle' );
		$( document ).on( 'click', '.js-cartToggle', function(e){
			var $this = $(this),
				isCartTemplate = $( 'body' ).hasClass( 'template-cart' ),
				windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
				$scrollableElement = document.querySelector('.scroll');

			if ( isCartTemplate ) return false;

			if ( windowWidth > 768 ) {
				e.preventDefault();

				Site.setCartClosePosition();

				$body.toggleClass('cart--is-visible');
				if ($body.hasClass('cart--is-visible')) {
					$cart.removeClass('close');
					$cart.addClass('open');
					$('#cartTotal').attr('aria-expanded', true);
					scrollLock.disablePageScroll($scrollableElement);
				} else {
					$cart.removeClass('open');
					$cart.addClass('close');
					$('#cartTotal').attr('aria-expanded', false);
					Cart.popover.hide($popover);
					scrollLock.enablePageScroll($scrollableElement);
				}
				$('.js-continueShopping').attr('tabindex','0');
			} else {
				if ($this.hasClass('js-cartToggle-close')) {
					e.preventDefault();
					$('html').css('overflow','initial');
					$body.removeClass('cart--is-visible');
					$cart.removeClass('open');
					$cart.addClass('close');
					$('#cartTotal').attr('aria-expanded', false);
					Cart.popover.hide($popover);
				}
				$('.js-continueShopping').attr('tabindex','-1');
			}
		});

		$('body').on('click', '[data-add-to-cart]', function(e) {
			var $form = $(this).closest('form.productForm');

			if ( enableAjaxCart ) {
				e.preventDefault();

				if ($form.find('[type="file"]').length) return;

				Cart.submit($(this));
			}
		});

		$(window).on( 'keyup', function(e) {
			if ( e.key === "Escape" ) {
				$body.removeClass('cart--is-visible');
				$cart.removeClass('open');
				$cart.addClass('close');
				$scrollableElement = document.querySelector('.scroll');
				$('#cartTotal').attr('aria-expanded', false);
				Cart.popover.hide($popover);
				scrollLock.enablePageScroll($scrollableElement);
			}
		});
	},
	submit: function(el) {
		var instance = this,
			$form = el.closest( 'form.productForm' ),
			product_handle = el.attr( 'data-handle' ),
			variant_id = $form.find( '[name="id"]' ).val(),
			form_array = $form.serializeArray(),
			addToCart = el,
			addToCartText = el.find( '[data-add-to-cart-text]' );

		var form_data = {};
		$.map(form_array, function(val, i){
			form_data[val.name] = val.value;
		});

		$.ajax({
			method: 'POST',
			url: '/cart/add.js',
			dataType: 'json',
			data: form_data,
			success: function(product){
				addToCart.attr( 'disabled', true )
				addToCartText.html( window.theme.icons.check );

				setTimeout(function(){
					addToCart.attr( 'disabled', false );
					addToCartText.html( window.theme.translations.form_submit );
				}, 2000);

				Cart.getCart(Cart.buildCart);

				if ($(window).width() >= 550){
					Cart.popover.show(product);
				}
			},
			// If there are no products in the inventory
			error: function(data){
				$.ajax({
					method: 'GET',
					url: '/products/'+product_handle+'.js',
					dataType: 'json',
					success: function(product){
						var variants = product.variants,
							// variants is an array [0{},1{},2{}...]
							variant = $.each(variants, function(i, val){
								// val returns the contents of 0,1,2
								if (val.id == variant_id) {
									return variant_quantity = val.inventory_quantity; // set variant_quantity variable
								}
							}),
							$popover = $('#CartPopoverCont'), // same popover container used to show succesful cart/add.js
							error_details = window.theme.translations.form_submit_error_details, // translation string
							tag = new RegExp('\[\[i\]\]'), // checks for [[i]]
							error = error_details; // set error to just default to error_details

						if (tag.test(error_details) == true){
							// [[i]] is part of the trans string, this can be whatever,
							// but in the tutorial we use [[i]] so leave it
							error = error_details.replace('[[i]]', variant_quantity); // re-set error with new string
						}

						addToCartText.html( window.theme.translations.form_submit_error ); // swap button text
						setTimeout(function(){
							addToCartText.html( window.theme.translations.form_submit ); // swap it back
						}, 1000);

						// clear popover timer, set at top of Cart object
						clearTimeout(instance.popoverTimer);

						// empty popover, add error (with inventory), show it, remove click events so it doesn't open cart
						$popover.empty().append('<div class="popover-error">' + error + '</div>').addClass( 'is-visible' ).css({ 'pointer-events': 'none' });

						// set new instance of popoverTimer
						instance.popoverTimer = setTimeout(function(){
							$popover.removeClass('is-visible').css({'pointer-events': 'auto'});
						}, 5000);
					},
					error: function(){
						console.log("Error: product is out of stock. If you're seeing this, Cart.submit.error() must have failed.");
					}
				});
			}
		});
	},
	popover: {
		show: function(product){
			var instance = this,
				$popover = $('#CartPopoverCont'),
				item = {},
				source = $('#CartPopover').text(),
				productTitle = this.getTruncatedTitle( product.product_title ),
				price = slate.Currency.formatMoney( product.final_price, window.moneyFormat ),
				unitPrice = '';

			// Unit price
			if ( product.unit_price_measurement ) {
				unitPrice = slate.Currency.formatMoney(product.unit_price, window.moneyFormat) + ' ';
				if ( product.unit_price_measurement.reference_value != 1 ) {
					unitPrice += product.unit_price_measurement.reference_value;
				}
				unitPrice += product.unit_price_measurement.reference_unit;
			}

			// Product image
			if (product.image != null){
				var prodImg = product.image.replace(/(\.[^.]*)$/, "_150x$1").replace('http:', '');
			} else {
				var prodImg = "//cdn.shopify.com/s/assets/admin/no-image-medium-cc9732cb976dd349a0df1d39816fbcc7.gif";
			}

			item = {
				item_count: product.quantity,
				img: prodImg,
				product_title: productTitle,
				variation: product.variant_title == 'Default Title' ? false : product.variant_title,
				price: product.price,
				price_formatted: price,
				unit_price: unitPrice
			};

			var template = Sqrl.render(source, item);

			$popover.empty().append( template );
			$popover.addClass('is-visible');

			// clear popover timer, set at top of Cart object
			clearTimeout(instance.popoverTimer);

			// set new instace of popoverTimer
			instance.popoverTimer = setTimeout(function(){
				Cart.popover.hide($popover);
			}, 5000);
		},
		hide: function(el){
			el.removeClass('is-visible');
			setTimeout(function(){
				el.empty();
			}, 300);
		},
		getTruncatedTitle: function( title ) {
			if (title.length > 20){
				title = title.substring(0, 20) + ' ...';
			}

			return title;
		}
	},
	getCart: function(callback) {
	  $.getJSON('/cart.js', function (cart, textStatus) {
		if ((typeof callback) === 'function') {
		  callback(cart);
		}
		else {
		  ShopifyAPI.onCartUpdate(cart);
		}
	  });
	},
	buildCart: function (cart) {
		var self = this,
			$cart = $('#Cart'),
			$body = $('body'),
			acceptanceChecked = !!$cart.attr( 'data-acceptance-checked' ) || false;

		// Start with a fresh cart div
		$cart.empty();

		// Append close icon if page is not cart template only
		if ( !$body.hasClass( 'template-cart') ) {
			$cart.append( '<div class="js-cartToggle js-cartToggle-close cart-close">' + window.theme.icons.close + '</div>' );
		}

		// Show empty cart
		if (cart.item_count === 0) {
			$cart.append('<div class="cart-title cart-title--empty">\
							<h2>' + window.theme.translations.cart_title + '</h2>\
							<p>' + window.theme.translations.cart_empty + '</p>\
							<a tabindex="-1" class="js-continueShopping js-continueShopping--empty js-go-back button">' + window.theme.translations.continue_shopping + '</a>\
						</div>');

			// Update cart total
			self.updateCartTotal();
			Site.setCartClosePosition();

			return;
		}

		// Handlebars.js cart layout
		var items = [],
			item = {},
			data = {},
			source = $("#CartTemplate").html();

		// Add each item to our handlebars.js data
		$.each(cart.items, function(index, cartItem) {
			var itemQty = cartItem.quantity,
				itemVariantId = cartItem.variant_id,
				discountsArray = cartItem.discounts,
				discounts = '',
				productPrice = '',
				productTotalPrice = '',
				unitPrice = '';

			// Get line price value
			if ( cartItem.original_price > cartItem.final_price ) {
				productPrice += '<s>' + slate.Currency.formatMoney( cartItem.original_price, window.moneyFormat ) + '</s> ';
			}
			productPrice += '<span>' + slate.Currency.formatMoney( cartItem.final_price, window.moneyFormat ) + '</span>';

				// Get total line price value
				if ( cartItem.original_line_price > cartItem.final_line_price ) {
					productTotalPrice += '<s>' + slate.Currency.formatMoney( cartItem.original_line_price, window.moneyFormat ) + '</s> ';
				}
				productTotalPrice += slate.Currency.formatMoney( cartItem.final_line_price, window.moneyFormat );

			// Get discounts
			if ( discountsArray.length ) {
				discounts += '<div class="cart-product__discounts">';
				for ( var j = 0; j < discountsArray.length; j++ ) {
					discounts += '<p>' + discountsArray[j].title + ' (-' + slate.Currency.formatMoney( discountsArray[j].amount, window.moneyFormat ) + ')</p>';
				}
				discounts += '</div>';
			}

			// Unit price
			if ( cartItem.unit_price_measurement ) {
				unitPrice = slate.Currency.formatMoney(cartItem.unit_price, window.moneyFormat) + ' ';
				unitPrice += '<span aria-hidden="true">/</span><span class="visually-hidden">' + window.theme.translations.unit_price_separator + '</span>&nbsp;';
				if ( cartItem.unit_price_measurement.reference_value != 1 ) {
					unitPrice += cartItem.unit_price_measurement.reference_value;
				}
				unitPrice += cartItem.unit_price_measurement.reference_unit;
			}

			/* Hack to get product image thumbnail
			*   - If image is not null
			*     - Remove file extension, add _small, and re-add extension
			*     - Create server relative link
			*   - A hard-coded url of no-image
			*/

			if (cartItem.image != null){
				var prodImg = cartItem.image.replace(/(\.[^.]*)$/, "_300x$1").replace('http:', '');
			} else {
				var prodImg = "//cdn.shopify.com/s/assets/admin/no-image-medium-cc9732cb976dd349a0df1d39816fbcc7.gif";
			}

			var prodName = cartItem.product_title,
				prodVariation = cartItem.variant_title;

			if (prodVariation == 'Default Title') {
				prodVariation = false;
			}

			// Create item's data object and add to 'items' array
			item = {
				id: cartItem.variant_id,
				url: cartItem.url,
				img: prodImg,
				name: prodName,
				variation: prodVariation,
				itemQty: itemQty,
				itemVariantId: itemVariantId,
				properties: cartItem.properties,
				price: cartItem.price,
				priceFormatted: productPrice,
				unitPrice: unitPrice,
				linePriceFormatted: productTotalPrice,
				discounts: discounts,
				vendor: cartItem.vendor,
				iconPlus: window.theme.icons.plus,
				iconMinus: window.theme.icons.minus
			};

			items.push(item);
		});

		// Update cart totals
		var totalDiscounts = '';
		var cartDiscounts = cart.cart_level_discount_applications;

		if ( cartDiscounts.length ) {
			totalDiscounts += '<p class="cart-discounts">';
			for ( var j = 0; j < cartDiscounts.length; j++ ) {
				totalDiscounts += '<span>' + cartDiscounts[j].title + ':</span>';
				totalDiscounts += '<span>-' + slate.Currency.formatMoney( cartDiscounts[j].total_allocated_amount, window.moneyFormat ) + '</span>';
			}
			totalDiscounts += '</p>';
		}

		// Gather all cart data and add to DOM
		data = {
			item_count: cart.item_count,
			items: items,
			note: cart.note,
			totalDiscounts: totalDiscounts,
			totalPrice: slate.Currency.formatMoney(cart.total_price, window.moneyFormat),
			acceptanceChecked: acceptanceChecked
		}

		var template = Sqrl.render( source, data )
		// update cart slide-out with new cart
		$cart.append( template );

		// Update cart total
		Cart.updateCartTotal();
		Cart.initTermsAcceptance();
		Site.setCartClosePosition();

		/**
		 * Re-init the ajax cart buttons.
		 * These are added to the handlebars template, but this
		 * js needs to fire to show them after the new
		 * cart is built and inserted.
		 * @see https://help.shopify.com/themes/customization/cart/add-more-checkout-buttons-to-cart-page
		 */
		if (window.Shopify && Shopify.StorefrontExpressButtons) {
			Shopify.StorefrontExpressButtons.initialize();
		}
	},
	/*
	 * Form Counter
	 */
	counter: function(){
		var self = this,
			$cart = $('#Cart'),
			namespace = '.cart';

		$cart
			// Reset all event listeners here
			.off( namespace )
			.on( 'change' + namespace, '.inputCounter', function() {
				var el = $(this),
					value = $(this).val();

				self.inputCounter( el, value );
			})
			.on( 'click' + namespace, '.inputCounter__btn--down', function(e){
				var el = $(this),
					$input = el.siblings( '.inputCounter' ),
					value = parseInt( $input.val() ) - 1;

				self.inputCounter(el, value);
			})
			.on( 'click' + namespace, '.inputCounter__btn--up', function(e){
				var el = $(this),
					$input = el.siblings( '.inputCounter' ),
					value = parseInt( $input.val() ) + 1;

				self.inputCounter(el, value);
			})
			/* Remove line item on x click */
			.on( 'click' + namespace, '.cart-product__remove', function() {
				var el = $(this);

				self.inputCounter(el, 0);
			});
	},

	// Product/Quick View Product Submit Form
	inputCounter: function( el, value ) {
		var self = this,
			$input = el.closest( '.line-item' ).find( '.inputCounter' );

		// Set quantity to 0 and remove the item
		if ( value == 0 ) {
			$input.closest( '.line-item' ).fadeOut( function() {
				$( this ).remove();
			} );

		// Prevent a negative quantity
		} else if (value < 0) {
			value = 0;
		}

		var qty = value;
		var line = parseInt( $input.closest( '.line-item' ).index() + 1 );

		$.ajax( {
			type: 'post',
			url: '/cart/change.js',
			dataType: 'json',
			data: {
				'quantity': qty,
				'line': line
			},
			success: function( cart ) {
				Cart.buildCart( cart );
			}
		});

		// remove line item if the quantity is 0
		if ( qty == 0 ) {
			$( this ).closest( '.line-item' ).fadeOut( function() {
				$( this ).remove();
				self.updateCartTotal();
			} );
		}
	},
	updateCartTotal: function() {
		$.getJSON('/cart.js', function(cart) {
			$( '#CartToggleItemCount' ).html( cart.item_count );
			cart.item_count ? $( '.js-cartToggle' ).removeClass( 'cartToggle--empty' ) : $( '.js-cartToggle' ).addClass( 'cartToggle--empty' );
		});
	},
	initTermsAcceptance: function() {
		var namespace = '.cart';
		var selectors = {
			cartAcceptance: '[data-cart-acceptance]',
			cartButtons: '[data-cart-buttons]',
			cartButtonsFieldset: '[data-cart-buttons-fieldset]',
			cartContainer: '.cart-container',
			cartFormError: '[data-cart-error]'
		};

		// Terms and conditions checkbox listener
		if ( $( selectors.cartAcceptance ).length ) {
			var cartFormErrorElement = '<div class="errors" data-cart-error>' + window.theme.translations.cart_acceptance_error + '</div>',
				termsAccepted = $( selectors.cartAcceptance ).is( ':checked' );

			var	formSubmitFunction = function(e) {
				var termsAccepted = $( selectors.cartAcceptance ).is( ':checked' );

				// Disable form submit if terms and conditions are not accepted
				if ( !termsAccepted ) {
					e.preventDefault();
					if ( $( selectors.cartFormError ).length ) return;

					$( selectors.cartButtonsFieldset ).attr( 'disabled', true );
					$( selectors.cartButtons ).before( cartFormErrorElement );
					$( selectors.cartFormError ).slideDown();
					$( selectors.cartContainer ).removeAttr( 'data-acceptance-checked' );
				} else {
					// Enable buttons
					$( selectors.cartFormError ).stop().slideUp( 'fast', function() {
						$(this).remove();
					});
					$( selectors.cartButtonsFieldset ).removeAttr( 'disabled' );
					$( selectors.cartContainer ).attr( 'data-acceptance-checked', 'checked' );
				}
			};

			if ( !termsAccepted ) {
				// Disable buttons
				$( selectors.cartButtonsFieldset ).attr( 'disabled', true );
			}

			$( selectors.cartContainer )
				.on( 'click' + namespace, selectors.cartButtons, formSubmitFunction )
				.on( 'submit' + namespace, selectors.cartForm, formSubmitFunction )
				.on( 'submit' + namespace, selectors.cartFormDynamicCheckout, formSubmitFunction )
				.on( 'change' + namespace, selectors.cartAcceptance, formSubmitFunction );
		}
	}
};

var Collection = {
	selectors: {
		body: 'body',
		collectionWrapper: '[data-collection-wrapper]',
		collectionBannerImage: '[data-collection-banner-image]',
		collectionBannerContent: '[data-collection-banner-content]',
		collectionProductsWrapper: '[data-collection-products-wrapper]',
		collectionProducts: '[data-collection-products]',
		collectionFilters: '[data-collection-filters]',
		collectionFiltersResetButton: '[data-collection-filters-reset-button]',
		collectionFilter: '[data-collection-filter]',
		collectionFilterTag: '[data-collection-filter-tag]',
		collectionFilterTagButton: '[data-collection-filter-tag-button]',
		collectionFilterTitle: '[data-collection-filter-title]',
		collectionPagination: '[data-collection-pagination]',
		collectionSort: '[data-collection-sort]',
		collectionBlockImage: '.collectionBlock-image',
		collectionFeaturedImage: '.featured-block',
		productsFoundLabel: '[data-products-found-label]',
		loadMoreButton: '[data-load-more]',
		loadMoreIcon: '[data-icon-load-more]',
		gridSpacer: '.gridSpacer'
	},
	classes: {
		loading: 'loading',
		isActive: 'is-active',
		isVisible: 'is-visible',
		isExpanded: 'is-expanded',
		isLoading: 'is-loading',
		ajaxSorting: 'ajax-sorting',
		hasTagsExpanded: 'has-tags-expanded',
		collectionFiltersTop: 'collection__filters--top',
		collectionFiltersHasTagsSelected: 'collection__filters--has-tags-selected',
		collectionFiltersResetButtonFullwidth: 'collection__filters-reset--fullwidth',
		collectionFilterAccordionExpanded: 'collection__filter--accordion-expanded'
	},
	init: function() {
		var self = this;

		this.filterProductsRequest = null;

		if( $( this.selectors.collectionSort ).length ) {
			$( this.selectors.collectionSort ).on( 'change', function() {
				document.location.href = '?sort_by=' + this.options[ this.selectedIndex ].value;
			} );
		}

		$( this.selectors.collectionProducts ).each( function() {
			var $container = $(this),
				sectionId = $(this).data( 'section-id' );

			if ( window.theme.settings.imageBackgroundSize == 'contain' ) {
				var $image = $( self.selectors.collectionBlockImage, $container );
				Collection.setBadgePosition( $image );
				$(window).on( 'resize.' + sectionId, Reqs.debounce( self.setBadgePosition.bind( self, $image ), 50));
			}

			self.initFilters( $container );
		});

		ajaxify();
		Product.qtyAdjust();

		$(document).on('ajaxify:updated', function() {
			Site.initReviews();
		});

		// Truncate Featured Image text
		this.truncateFeaturedImageText();
		$(window).on( 'resize.collection', Reqs.throttle( self.truncateFeaturedImageText.bind( self ), 50 ));
	},

	ajaxSort: function(url) {
		var self = this,
			$loadMoreIcon = $( this.selectors.loadMoreIcon );

		$loadMoreIcon.show();
		$( this.selectors.collectionProducts ).hide().next( '.row' ).hide();

		$.ajax({
			type: 'GET',
			dataType: "html",
			url: url,
			success: function(data) {
				var products = $(data).find( self.selectors.collectionProducts )[0].outerHTML;
				var nextPage = $(data).find( self.selectors.collectionProducts ).next('.row')[0] ? $(data).find( self.selectors.collectionProducts ).next('.row')[0].outerHTML : '';

				$( self.selectors.collectionProducts ).replaceWith(products);
				$( self.selectors.collectionProducts ).next('.row').replaceWith(nextPage);
				$loadMoreIcon.hide();

				$( self.selectors.collectionSort ).removeClass( self.classes.loading );
				$( self.selectors.body ).removeClass( self.classes.ajaxSorting );

			}
		});
	},

	/*
	 * AJAX call to load more products
	 */
	initLoadMore: function() {
		var self = this;

		$( this.selectors.body ).on( 'click', self.selectors.loadMoreButton, function(event) {
			var isLoading = $(this).hasClass( self.classes.isLoading );

			if ( isLoading ) return;

			// hide open quickViews
			QuickView.hide();

			var $el = $(event.target);
			var url = $el.attr('href');

			event.preventDefault();

			$el.addClass( self.classes.loading );

			// load products
			self.ajaxLoadMore(url);

		});
	},

	ajaxLoadMore: function(url) {
		var self = this;

		$.ajax({
			type: 'GET',
			dataType: "html",
			url: url,
			success: function(data) {
				var products = $(data).find( self.selectors.collectionProducts ).html(),
					nextPage = $(data).find( self.selectors.loadMoreButton ).attr('href');

				$( self.selectors.collectionProducts ).find( self.selectors.gridSpacer ).remove();

				$(products).appendTo( self.selectors.collectionProducts );

				if ( typeof(nextPage) !== 'undefined' ){
					$( self.selectors.loadMoreButton ).attr('href', nextPage).removeClass( self.classes.loading );
				} else {
					$( self.selectors.loadMoreButton ).remove();
				}

				collectionBlocks = $('.js-collectionBlock');
			}
		});
	},

	setBadgePosition: function(image) {
		$(image).each( function() {
			var $image = $(this),
				$saleBadge = $image.find( '.product-status-flag' );

			if ( !$saleBadge.length ) return;

			var imageAspectRatio = $image.data( 'aspectratio' ),
				imageWidth = $image.outerWidth(),
				imageHeight = $image.outerHeight(),
				containerAspectRatio = imageWidth / imageHeight,
				posTop = 0,
				posLeft = 0;

			if ( imageAspectRatio < containerAspectRatio ) {
				posLeft = (imageWidth - (imageHeight * imageAspectRatio)) / 2;
			} else {
				posTop = (imageHeight - (imageWidth / imageAspectRatio)) / 2;
			}

			$saleBadge.css({
				'top': posTop,
				'left': posLeft
			});
		});
	},

	initFilters: function( container ) {
		var self = this,
			$container = $( container ),
			$collectionFilters = $( this.selectors.collectionFilters );

		if ( !$collectionFilters.length ) return;

		var sectionId = $( container ).data( 'section-id' ),
			collection = $container.data( 'collection' ),
			sort = $container.data( 'sort' );

		this.tags = $container.data( 'tags' );
		this.preventBannerContentOverflow();
		this.checkFiltersPosition();
		$(window).on('resize.' + sectionId, Reqs.debounce( function() {
			self.preventBannerContentOverflow(self);
			self.checkFiltersPosition(self);
		}, 50));

		/* Bind toggle buttons */
		$collectionFilters.on( 'click', this.selectors.collectionFilterTitle, function() {
			var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
				isTopPosition = windowWidth < 1280 || $( '.collection__filters--top' ).length,
				isAriaExpanded = !( $(this).parent().hasClass( self.classes.isExpanded ) || $(this).parent().hasClass( self.classes.collectionFilterAccordionExpanded ) );

			if ( isTopPosition ) {
				$(this)
					.parent()
						.toggleClass( self.classes.isExpanded )
						.attr( 'aria-expanded', isAriaExpanded )
						.siblings()
							.removeClass( self.classes.isExpanded )
							.attr( 'aria-expanded', false );

				if ( $collectionFilters.find( '.collection__filter.is-expanded' ).length ) {
					$collectionFilters.addClass( self.classes.hasTagsExpanded );
				} else {
					$collectionFilters.removeClass( self.classes.hasTagsExpanded );
				}
			} else {
				$(this)
					.parent()
						.toggleClass( self.classes.collectionFilterAccordionExpanded )
						.attr( 'aria-expanded', isAriaExpanded )
						.siblings()
							.removeClass( self.classes.isExpanded )
							.attr( 'aria-expanded', false );
			}
		});

		/* Close dropdowns on click outside their container */
		$( document ).on( 'click', function(e) {
			if ( !$( e.target ).is( '.collection__filters *' ) ) {
				$collectionFilters
					.find( self.selectors.collectionFilter )
						.removeClass( self.classes.isExpanded )
						.attr( 'aria-expanded', false )
					.end()
						.removeClass( self.classes.hasTagsExpanded );
			}
		});

		$collectionFilters.on( 'click', this.selectors.collectionFilterTagButton, function(e) {
			var $collectionFilterTag = $( this ).parent(),
				selectedTag = $( this ).data( 'tag' ),
				isTagActive = $collectionFilterTag.hasClass( self.classes.isActive );

			if ( isTagActive ) {
				var tagIndex = self.tags.indexOf( selectedTag );

				$collectionFilterTag.removeClass( self.classes.isActive );

				if ( tagIndex > -1 ) {
					self.tags.splice( tagIndex, 1 );
				}
			} else {
				$collectionFilterTag.addClass( self.classes.isActive );

				self.tags.push( selectedTag );
			}

			$container.attr( 'data-tags', self.tags );

			// Close filters dropdown on tag select
			$collectionFilters
				.find( self.selectors.collectionFilter )
					.removeClass( self.classes.isExpanded )
					.attr( 'aria-expanded', false )
				.end()
					.removeClass( self.classes.hasTagsExpanded );

			var requestedURL = collection + '/' + self.tags.join( '+' ) + '?sort_by=' + sort;

			self.requestFilteredProducts( self, container, requestedURL );

			e.preventDefault();
		});

		this.bindResetButton( container );
	},

	requestFilteredProducts: function( instance, container, requestedURL ) {
		var self = instance,
			$container = $( container ),
			sectionId = $( container ).data( 'section-id' ),
			productsTop = parseInt( Math.ceil( $( self.selectors.collectionWrapper ).offset().top ) - 60 ), // Add 60px to give space for the header
			action = 'scroll.endlessScroll--' + sectionId + ' resize.endlessScroll--' + sectionId;

		// Remove infinity scroll event listener from window
		$(window).off( action );

		// Kill previous ajax request
		if ( self.filterProductsRequest != null ) {
			self.filterProductsRequest.abort();
		}

		if ( !self.tags.length ) {
			$( self.selectors.collectionFiltersResetButton ).removeClass( self.classes.isVisible ).slideUp( 300 );
			$( self.selectors.collectionFilters ).removeClass( self.classes.collectionFiltersHasTagsSelected );
		}

		$( self.selectors.collectionWrapper ).addClass( self.classes.isLoading );

		// Scroll back to top
		$( 'html, body' ).stop(true).animate({ 'scrollTop': productsTop }, 300);

		self.filterProductsRequest = $.ajax({
			method: 'GET',
			url: requestedURL,
			dataType: 'html',
		}).done(function(data) {
			var collectionProducts = $( data ).find( self.selectors.collectionProducts ).html(),
				productsFoundLabel = $( data ).find( self.selectors.productsFoundLabel ).html(),
				$pagination = $( data ).find( self.selectors.collectionPagination );

			$container.html( collectionProducts );
			$( self.selectors.productsFoundLabel ).html( productsFoundLabel );

			if ( $pagination.length ) {
				$( self.selectors.collectionPagination, container ).html( $pagination.html() );
			} else {
				$( self.selectors.collectionPagination, container ).empty();
			}

			self.bindResetButton( container );

			Site.animations.animateAll();
			Site.initReviews();
			ajaxify();

			if ( window.theme.settings.imageBackgroundSize == 'contain' ) {
				var $image = $( self.selectors.collectionBlockImage, container );

				self.setBadgePosition( $image );
				$(window)
					.off( 'resize.products' )
					.on( 'resize.products', Reqs.debounce( Collection.setBadgePosition.bind( this, $image ), 50));
			}

			// Show reset button if there are tags selected
			if ( self.tags.length ) {
				$( self.selectors.collectionFiltersResetButton )
					.addClass( self.classes.isVisible )
					.slideDown( 300 );

				$( self.selectors.collectionFilters ).addClass( self.classes.collectionFiltersHasTagsSelected );
			}

			// Stop loading animation
			setTimeout(function() {
				$( self.selectors.collectionWrapper ).removeClass( self.classes.isLoading );
			}, 450);

			// Update page URL if supported by the browser
			if (history.replaceState) {
				window.history.pushState( { path: requestedURL }, '', requestedURL );
			}
		}).fail( function( jqXHR, textStatus, errorThrown ) {
			$( self.selectors.collectionWrapper ).removeClass( self.classes.isLoading );
		});
	},

	checkFiltersPosition: function() {
		var isFiltersPositionTop = $( this.selectors.collectionFilters ).hasClass( this.classes.collectionFiltersTop ),
			windowWidth = window.innerWidth || document.documentElement.clientWidth,
			containerWidth = $( this.selectors.collectionFilters ).children().first().width(),
			$resetButton = $( this.selectors.collectionFiltersResetButton ),
			$collectionFilter = $( this.selectors.collectionFilter ),
			resetButtonWidth = $resetButton.outerWidth( true ),
			collectionFiltersWidth = 0,
			spaceBetween = 60,
			isOverlapping = false;

		// Run only if filters position is set to "Top" or window width is < 1280
		if ( isFiltersPositionTop || windowWidth < 1280 ) {
			$collectionFilter.each( function() {
				collectionFiltersWidth += $(this).outerWidth( true );
			});

			isOverlapping = (containerWidth - collectionFiltersWidth - spaceBetween ) < resetButtonWidth;

			if ( isOverlapping ) {
				$resetButton.parent().addClass( this.classes.collectionFiltersResetButtonFullwidth );
			} else {
				$resetButton.parent().removeClass( this.classes.collectionFiltersResetButtonFullwidth );
			}
		}
	},

	preventBannerContentOverflow: function() {
		var $image = $( this.selectors.collectionBannerImage ),
			$content = $( this.selectors.collectionBannerContent ),
			contentHeight = $content.outerHeight();

		$image.css( 'min-height', contentHeight );
	},

	/* Reset filters */
	bindResetButton: function( container ) {
		var self = this,
			$collectionFilters = $( self.selectors.collectionFilters ),
			collection = $( container ).data( 'collection' ),
			sort = $( container ).data( 'sort' ),
			requestedURL = collection + '/?sort_by=' + sort;

		$( this.selectors.collectionFiltersResetButton ).on( 'click', function(e) {
			$collectionFilters.find( self.selectors.collectionFilter ).removeClass( self.classes.isExpanded );
			$collectionFilters.find( self.selectors.collectionFilterTag ).removeClass( self.classes.isActive );
			$collectionFilters.removeClass( self.classes.hasTagsExpanded );

			// Reset saved tags
			self.tags = [];
			$( container ).attr( 'data-tags', false );

			self.requestFilteredProducts( self, container, requestedURL );

			e.preventDefault();
		});
	},

	truncateFeaturedImageText: function() {
		var $heading = $( 'h2', this.selectors.collectionFeaturedImage ),
			$text = $( 'p', this.selectors.collectionFeaturedImage ),
			textLines = 4,
			imageAspectRatio = window.theme.settings.imageAspectRatio,
			windowWidth = window.innerWidth || document.documentElement.clientWidth;

		// Limit text lines to 2 if product image aspect ratio is less than 1
		if ( imageAspectRatio < 1 || windowWidth < 768 ) {
			textLines = 2;
		}

		$heading.trunk8({ lines: 2 });
		$text.trunk8({ lines: textLines });
	}
}

var ListCollections = {
	selectors: {
		listCollectionsContainer: '.collectionList',
		collectionBlock: '.collectionBlock',
		collectionBlockTitle: '.collectionBlock-info h2',
		collectionBlockText: '.collectionBlock-info h4'
	},
	classes: {
		isLoading: 'is-loading',
		gridLargeOneQuarter: 'lg_s14'
	},
	init: function() {
		var self = this;

		$( this.selectors.listCollectionsContainer ).each( function() {
			var $container = $(this),
				sectionId = $container.data( 'section-id' );

			self.truncateBlockText( $container );
			$(window).on( 'resize.' + sectionId, Reqs.throttle( self.truncateBlockText.bind( self, $container ), 50 ));

			$(document).on( 'ajaxify:updated', function() {
				self.truncateBlockText( $container );
			});
		})
	},

	truncateBlockText: function( $collectionList ) {
		var fourPerRow = $collectionList.find( this.selectors.collectionBlock ).hasClass( this.classes.gridLargeOneQuarter ),
			textLines = fourPerRow ? 2 : 3;

		$( this.selectors.collectionBlockText, $collectionList ).trunk8({
			lines: textLines
		});

		$( this.selectors.collectionBlockTitle, $collectionList ).trunk8({
			lines: 2
		});

		$( this.selectors.collectionBlock, $collectionList ).removeClass( this.classes.isLoading );
	}
}


/*
 * quickView AJAX methods
 *
 * Key:
 * * el = ELEMENT attached to, one or more .js-collectionBlock
 * * handle = product HANDLE, delivered from the front-end {{product.handle}} attached to .js-quickView
 * * obj = product OBJECT, in JSON
 */

var QuickView = {
	selectors: {
		addToCart: '[data-add-to-cart]',
		addToCartText: '[data-add-to-cart-text]',
		section: '[data-section-id]',
		quickViewButton: '.js-quickView-button',
		closeButton: '.js-quickView-close',
		collectionGrid: '.js-collectionGrid',
		productMedia: '[data-product-single-media-group]',
		productMediaSlider: '[data-product-single-media-slider]',
		productMediaWrapper: '[data-product-single-media-wrapper]',
		productMediaThumbs: '[data-product-single-media-thumbs]',
		productMediaTypeVideo: '[data-product-media-type-video]',
		productMediaTypeModel: '[data-product-media-type-model]',
		productTitle: '[data-product-title]',
		productPrice: '[data-product-price]',
		comparePrice: '[data-compare-price]',
		unitPrice: '[data-unit-price]',
		unitBase: '[data-unit-base]',
		unitWrapper: '[data-unit-wrapper]',
		originalSelectorId: '[data-product-select]',
		singleOptionSelector: '[data-single-option-selector]',
		priceWrapper: '[data-price-wrapper]',
		productForm: '[data-product-form]',
		productFormWrapper: '[data-product-form-wrapper]',
		productFormBlock: '.productForm-block',
		productFormSelectWrapper: '.selector-wrapper',
		productDescription: '[data-product-description]',
		collectionBlock: '[data-collection-block]'
	},

	init: function() {
		var self = this,
			isQuickViewLoading = this.isQuickViewLoading = false;

		$(document).on( 'click', this.selectors.quickViewButton, function(e) {
			var $selector = $(this),
				el = $(this).closest( self.selectors.collectionBlock ), // the .collectionBlock that contains the product js-quickView;
				url = $(this).attr( 'href' ),
				sectionId = $selector.closest( self.selectors.section ).data( 'section-id' );

			if (!isQuickViewLoading) {
				self.isQuickViewLoading = true;
				el.addClass( 'quickView--is-loading' );

				// if loaded and visible
				if ( el.hasClass('is-loaded') && el.hasClass('quickView--is-visible') ) {
					self.hide( self );
				}

				// if loaded but not visible, no other quickViews open
				else if (el.hasClass('is-loaded') && !el.hasClass('quickView--is-visible') && !$('.quickView--is-visible').length) {
					self.show( el );
				}

				// if loaded and not visible, other quickViews are open
				else if (el.hasClass('is-loaded') && !el.hasClass('quickView--is-visible') && $('.quickView--is-visible').length) {
					self.hide( self );
					setTimeout(function(){
						self.show( el );
					}, 200);
				}

				// if not loaded yet, other quickViews open
				else if ( $('.quickView--is-visible').length ) {
					self.hide( self );
					setTimeout(function(){
						self.ajaxSearch( el, url, sectionId );
					}, 200);
				}

				// if not loaded yet, no other quickViews open
				else {
					self.ajaxSearch( el, url, sectionId );
				}
			}

			e.preventDefault();
		});
	},

	show: function( el ) {
		var self = this,
			sub = ($(window).height() - 680)/2,
			offset = el.children( '.quickView' ).offset().top,
			headerHeight = 60,
			scrollPosition = offset - sub - headerHeight,
			isFocusActive = !$( 'body' ).hasClass( 'no-outline' );

		el.addClass( 'quickView--is-active' );
		el.removeClass( 'quickView--is-loading' );

		$('html, body').stop(true, true).animate({ scrollTop: scrollPosition }, 300, function() {
			Site.initReviews();

			if (el.hasClass('is-loaded')) {
				el.addClass('quickView--is-visible');
			} else {
				el.addClass('quickView--is-visible is-loaded');
			}

			self.isQuickViewLoading = false;
		});

		$('html, body').trigger( 'quickView:show' );

		if ( isFocusActive ) {
			el.find( this.selectors.closeButton ).focus();
		}
	},

	hide: function() {
		var $collectionBlock = $( this.selectors.collectionBlock ),
			isQuickViewVisible = $collectionBlock.hasClass( 'quickView--is-visible' );

		if ( isQuickViewVisible ) {
			$collectionBlock.removeClass( 'quickView--is-visible quickView--is-active quickView--is-loading' );
		}

		$collectionBlock.find( '.product-image.is-selected' ).trigger( 'mediaHidden' ).addClass( 'media--hidden' );

		setTimeout( function() {
			Site.animations.animateAll();
		}, 300);

		$('html, body').trigger( 'quickView:hide' );
	},

	ajaxSearch: function(el, url, sectionId ) {
		var self = this,
			showProductDescription = window.theme.settings.showProductDescription;

		el.addClass( 'quickView--is-loading' );

		$.ajax({
			url: url,
			cache: false,
			dataType: 'html'
		}).done(function( data ) {
			var productSectionId = 'product-template',
				productJSON = $(data).find( '#ProductJson--' + productSectionId ).text(),
				productMediaJson = $(data).find( '#ModelJson-' + productSectionId ).html(),
				product = JSON.parse(productJSON),
				productMediaSlider = self.modifyProductMediaSettings( $(data).find( self.selectors.productMediaSlider ), self.settings ),
				productMediaThumbs = $(data).find( self.selectors.productMediaThumbs ).html(),
				productTitle = self.addProductTitleLink( $(data).find( self.selectors.productTitle ), url ),
				productForm = self.modifyProductFormIds( $(data).find( self.selectors.productForm ), product.id ),
				productDescription = showProductDescription ? $(data).find( self.selectors.productDescription ).html() : '',
				isProductMediaSingle = $(data).find( '.js-productImgContainer > .js-slide' ).length == 1,
				item = {},
				source = $( '#ProductQuickViewTemplate--' + sectionId ).html();

			item = {
				productMediaSlider: productMediaSlider,
				productMediaThumbs: productMediaThumbs,
				productTitle: productTitle,
				productForm: productForm,
				productDescription: productDescription,
				productMediaJson: productMediaJson,
				isProductMediaSingle: isProductMediaSingle
			};

			var template = Sqrl.render( source, item );
			el.append( template );
			el.attr( 'data-section-id', productSectionId );
			el.on( 'click', self.selectors.closeButton, function(e) {
				e.preventDefault();
				self.hide( self )
			} );

			self.initProductMediaSlider( el );
			self.initProductVideo( el );
			self.initMediaSwitch( el );
			self.initModelViewerLibraries( el );
			self.initShopifyXrLaunch( el );
			self.initVariants( el, product );
			self.initPaymentButton( el );
			self.show( el );

			$( 'html, body' ).trigger( 'quickView:ajax' );
		});
	},

	/* Product Slider */
	initProductMediaSlider: function( container ) {
		var self = this,
			$productSection = $( container ),
			$productImgSlider = $productSection.find( '.js-productImgSlider' ),
			$productImgSliderNav = $productSection.find( '.js-productImgSlider-nav' ),
			activeArrows = $productImgSlider.data( 'arrows' ),
			isDraggable = !($productImgSlider.find( '.product-single__media--video' ).length || $productImgSlider.find( '.product-single__media--model' ).length),
			activeSlide = $productImgSlider.find( '.is-selected-product' ).index(),
			lastWindowWidth = window.innerWidth || document.documentElement.clientWidth;

		activeSlide = activeSlide == -1 ? 0 : activeSlide;

		if ( $productImgSlider.find('.js-slide').length > 1 ) {
			$productImgSlider
				.on( 'ready.flickity', function() {
					$productImgSlider.attr( 'tabindex', '-1' );
					$productImgSlider.find( '.js-slide' ).attr( 'tabindex', '-1' );
				})
				.on( 'change.flickity', function( event, index ) {
					var $currentSlide = $productImgSlider.find( '.js-slide' ).eq( index ),
						$currentSlideImage = $currentSlide.find( '.product-single__media--image' );

					if ( !$currentSlideImage.hasClass( 'lazyloaded' ) ) {
						$currentSlideImage.addClass( 'lazyload' );
					}
				})
				.on( 'settle.flickity', function( event, index ) {
					var $currentSlide = $productImgSlider.find( '.js-slide' ).eq( index ),
						mediaId = $currentSlide.data( 'media-id' );

					self.switchMedia( container, mediaId );
				});

			$productImgSlider.flickity({
				cellSelector: '.js-slide',
				prevNextButtons: activeArrows,
				arrowShape: window.theme.icons.arrowNavSlider,
				pageDots: false,
				initialIndex: activeSlide,
				draggable: isDraggable,
				adaptiveHeight: true,
				contain: true,
				wrapAround: true
			});

			$productImgSliderNav.on( 'ready.flickity', function() {
				$productImgSliderNav.attr( 'tabindex', '-1' );
			});

			initSliderNav();
			$(window).on( 'resize.product', Reqs.debounce( function() {
				var windowWidth = window.innerWidth || document.documentElement.clientWidth;
				// Continue on window resize width change only
				if ( lastWindowWidth != windowWidth ) initSliderNav();
				lastWindowWidth = windowWidth;
			}, 250));

			function initSliderNav() {
				var isInitialized = $productImgSliderNav.data( 'flickity' ),
					sliderNavArrows = Site.sliders.checkThumbnailsOverflow( $productImgSliderNav );

				if ( isInitialized != undefined ) {
					$productImgSliderNav.flickity( 'destroy' );
				}

				$productImgSliderNav.flickity({
					cellSelector: '.js-slide',
					asNavFor: $productImgSlider[0],
					initialIndex: activeSlide,
					pageDots: false,
					prevNextButtons: sliderNavArrows,
					arrowShape: window.theme.icons.arrowNavSlider,
					contain: true,
					wrapAround: sliderNavArrows
				});
			}
		}
	},

	handleMediaFocus: function( e ) {
		// If not ENTER key (13) or TAB key (9)
		if (e.keyCode !== 13 && e.keyCode !== 9) return;

		var $container = $(e.currentTarget).closest( this.selectors.collectionBlock ),
			mediaId = $(e.currentTarget).data( 'thumbnail-id' ),
			slideIndex = $( this.selectors.productMediaWrapper + '[data-media-id="' + mediaId + '"]', $container ).index(),
			flick = $( this.selectors.productMediaSlider, $container ).data('flickity');
			flickNav = $( this.selectors.productMediaThumbs, $container ).data('flickity');

		// Go to the related slide media
		if (flick && flick.isActive && slideIndex > -1 && e.keyCode === 13) {
			flick.select( slideIndex );
		}

		// Move thumbs to the selected one
		if (flickNav && flickNav.isActive && slideIndex > -1 ) {
			flickNav.select( slideIndex );
		}
	},

	switchMedia: function( container, mediaId ) {
		var $container = $( container ),
			$currentMedia = $( this.selectors.productMediaWrapper + ':not(.media--hidden)', $container ),
			$newMedia = $( this.selectors.productMediaWrapper + '[data-media-id="' + mediaId + '"]', $container ),
			$otherMedia = $( this.selectors.productMediaWrapper + ':not([data-media-id="' + mediaId + '"])', $container ),
			isFocusEnabled = !$( 'body' ).hasClass( 'no-outline' );

		if ( isFocusEnabled ) $newMedia.focus();

		$currentMedia.trigger( 'mediaHidden' );
		$newMedia.removeClass( 'media--hidden' ).trigger( 'mediaVisible' );
		$otherMedia.addClass( 'media--hidden' );
	},

	initMediaSwitch: function( container ) {
		var self = this,
			$container = $( container ),
			$productThumbImages = $( '[data-thumbnail-id]', $container );

		if (!$productThumbImages.length) return;

		$productThumbImages
			.on( 'click', function(e) {
				e.preventDefault();
			})
			.on( 'keyup', self.handleMediaFocus.bind(self) );
	},

	initProductVideo: function( container ) {
		var sectionId = $(container).data( 'section-id' );

		$( this.selectors.productMediaTypeVideo, container).each(function() {
			var $video = $(this);
			ProductVideo.init($video, sectionId);
		});
	},

	initModelViewerLibraries: function( container ) {
		var sectionId = $( container ).data( 'section-id' ),
			$modelViewerElements = $( this.selectors.productMediaTypeModel, container );
		if ($modelViewerElements.length < 1) return;

		ProductModel.init($modelViewerElements, sectionId);
	},

	initShopifyXrLaunch: function( container ) {
		var self = this;

		$(document).on('shopify_xr_launch', function() {
			var $currentMedia = $( self.selectors.productMediaWrapper + ':not(.media--hidden)', container );
			$currentMedia.trigger('xrLaunch');
		});
	},

	initVariants: function( container, product ) {
		/**
		 * Initialize variants dropdown.
		 */
		var $container = $(container),
			sectionId = $(container).data( 'section-id' ),
			namespace = '.product' + sectionId,
			enableHistoryState = false;

		var options = {
			$container: $container,
			enableHistoryState: enableHistoryState,
			singleOptionSelector: this.selectors.singleOptionSelector,
			originalSelectorId: this.selectors.originalSelectorId,
			product: product
		};

		this.$container = $(container);
		this.variants = new slate.Variants(options);

		$container.on('variantChange' + namespace, this.updateAddToCartState.bind(this));
		$container.on('variantChange' + namespace, this.updateColorName.bind(this));
		$container.on('variantPriceChange' + namespace, this.updateProductPrices.bind(this));
		$container.on('variantUnitChange' + namespace, this.updateProductUnits.bind(this));
		$container.on('variantImageChange' + namespace, this.updateProductImage.bind(this));
	},

	updateAddToCartState: function(evt) {
		var variant = evt.variant;

		if ( variant ) {
			if ( variant.available ) {
				$( this.selectors.addToCart, this.$container ).prop( 'disabled', false );
				$( this.selectors.addToCartText, this.$container ).html( window.theme.translations.add_to_cart );
				$( this.selectors.notificationForm, this.$container ).addClass( 'visually-hidden' );
			} else {
				$( this.selectors.addToCart, this.$container ).prop( 'disabled', true );
				$( this.selectors.addToCartText, this.$container ).html( window.theme.translations.sold_out );
				$( this.selectors.notificationForm, this.$container ).removeClass( 'visually-hidden' );
			}
		} else {
			$( this.selectors.addToCart, this.$container ).prop( 'disabled', true );
			$( this.selectors.addToCartText, this.$container ).html( window.theme.translations.unavailable );
			$( this.selectors.notificationForm, this.$container ).removeClass( 'visually-hidden' );
		}
	},

	updateColorName: function(evt) {
		var colorName = $( this.selectors.colorSwatch, this.$container ).filter( ':checked' ).val();

		$( this.selectors.colorLabel ).text( colorName );
	},

	updateProductPrices: function(evt) {
		var variant = evt.variant,
			$comparePrice = $( this.selectors.comparePrice, this.$container ),
			$productPrice =  $( this.selectors.productPrice, this.$container );

		// Update product price
		$productPrice.html( slate.Currency.formatMoney(variant.price, window.moneyFormat));

		// Update sale price
		if ( variant.compare_at_price > variant.price ) {
			$comparePrice
				.html( slate.Currency.formatMoney(variant.compare_at_price, window.moneyFormat) )
				.removeClass( 'visually-hidden' );
		} else {
			$comparePrice
				.html('')
				.addClass( 'visually-hidden' );
		}
	},

	updateProductUnits: function(evt) {
		var variant = evt.variant;

		if (typeof variant.unit_price !== 'undefined'){
			var price = slate.Currency.formatMoney(variant.unit_price, window.moneyFormat),
				base = this.getBaseUnit(variant);

			$( this.selectors.unitPrice, this.$container ).html( price );
			$( this.selectors.unitBase, this.$container ).html( base );
			$( this.selectors.unitWrapper, this.$container ).show()
		} else{
			$( this.selectors.unitWrapper, this.$container ).hide()
		}
	},

	getBaseUnit: function(variant) {
		return variant.unit_price_measurement.reference_value === 1
			? variant.unit_price_measurement.reference_unit
			: variant.unit_price_measurement.reference_value + variant.unit_price_measurement.reference_unit;
	},

	updateProductImage: function(evt) {
		var variant = evt.variant,
			variantMediaId = variant.featured_media ? variant.featured_media.id : '',
			$imgSlider = $( this.selectors.productMediaSlider, this.$container ),
			flick = $imgSlider.data('flickity');

		// Activate image slide in mobile view
		if ( flick && flick.isActive) {
			var $variantSlide = $imgSlider.find( '[data-id="' + variantMediaId + '"]' );

			if ($variantSlide.index() != -1) {
				flick.select($variantSlide.index());
			}
		}
	},

	initPaymentButton: function( container ) {
		// Init dynamic checkout buttons
		var enablePaymentButton = window.theme.settings.enablePaymentButton,
			enableAcceptTerms = window.theme.settings.enableAcceptTerms,
			$addToCartButton = $( this.selectors.addToCart, container );

		if ( enablePaymentButton && !enableAcceptTerms ) {
			$addToCartButton.addClass( 'button--alt' );

			if ( Shopify.PaymentButton ) {
				Shopify.PaymentButton.init();
			}
		} else {
			$addToCartButton.removeClass( 'button--alt' );
		}
	},

	modifyProductMediaSettings: function( productMediaSlider ) {
		productMediaSlider.find( '.product-image' ).each( function() {
			$(this)
				.attr( 'data-enable-video-looping', window.theme.settings.enableVideoLooping )
				.attr( 'data-show_quantity', window.theme.settings.showQuantity )
				.attr( 'tabindex', '-1' );
		});
		return productMediaSlider.html();
	},

	modifyProductFormIds: function( productForm, productId ) {
		// Find all "id" attributes and add "--quickView" suffix
		productForm.find( '[id]' ).each( function() {
			var currentId = $(this).attr( 'id' ),
				newId = currentId + '--' + productId + '-quickView';
			$(this).attr( 'id', newId );
		});

		// Find all "for" attributes and add "--quickView" suffix
		productForm.find( '[for]' ).each( function() {
			var currentId = $(this).attr( 'for' ),
				newId = currentId + '--' + productId + '-quickView';
			$(this).attr( 'for', newId );
		});

		return productForm.html();
	},

	addProductTitleLink: function( productTitle, url ) {
		var productTitleText = productTitle.find( '.product-title' ).text();
		productTitle.find( '.product-title' ).html( '<a href="' + url + '">' + productTitleText + '</a>' );
		return productTitle.html();
	}
};

var Product = {
	selectors: {
		body: 'body',
		addToCart: '[data-add-to-cart]',
		addToCartText: '[data-add-to-cart-text]',
		productPrice: '[data-product-price]',
		comparePrice: '[data-compare-price]',
		unitPrice: '[data-unit-price]',
		unitBase: '[data-unit-base]',
		unitWrapper: '[data-unit-wrapper]',
		priceWrapper: '[data-price-wrapper]',
		notificationForm: '[data-notification-form]',
		originalSelectorId: '[data-product-select]',
		singleOptionSelector: '[data-single-option-selector]',
		productSection: '[data-section-type="product"]',
		productSectionContainer: '.js-product-template',
		productSliderContainer: '.js-productImgContainer',
		productSlider: '[data-product-single-media-slider]',
		productSliderNav: '.js-productImgSlider-nav',
		productSlide: '.js-slide',
		productScroller: '.js-productImgScroller',
		productScrollerNav: '.js-productImgScroller-nav',
		productSelected: '.is-selected-product',
		productMediaSlider: '[data-product-single-media-slider]',
		productMediaWrapper: '[data-product-single-media-wrapper]',
		productMediaTypeVideo: '[data-product-media-type-video]',
		productMediaTypeModel: '[data-product-media-type-model]',
		productMediaVideo: '.product-single__media--video',
		productMediaModel: '.product-single__media--model',
		productMediaImage: '.product-single__media--image',
		productMediaThumb: '.product-single__media-thumb',
		productThumbnail: '.js-product-single__thumbnail',
		productImageLightboxLink: '[data-lightbox-link]',
		productLayoutScrollable: '.product-layout--scrollable',
		productTabs: '.js-product-tabs',
		productTabsNav: '.product-tabs-nav',
		productTabsContents: '.product-tabs-contents',
		productTabTitle: '.product-tab-title',
		productTabContent: '.product-tab-content',
		productForm: '.productForm',
		productFormBlock: '.productForm-block',
		productFormSelectWrapper: '.selector-wrapper',
		storeAvailabilityContainer: '[data-store-availability-container]',
		cartStatus: '[data-cart-status]',
		colorSwatch: '[data-color-swatch]',
		colorLabel: '[data-color-label]',
		shopBar: '.shop-bar',
		zoomContainer: '.zoom-container'
	},

	classes: {
		visibilityHidden: 'visibility-hidden'
	},

	init: function( update, sectionId ){
		var self = this,
			update = (typeof update !== 'undefined') ? update : false;

		if ( update ) {
			var container = document.querySelector( '[data-section-id="' + sectionId + '"]' );

			this.initSingleProduct( container, update );
		} else {
			var productSections = document.querySelectorAll( this.selectors.productSection );

			productSections.forEach((container) => {
				self.initSingleProduct( container, update );
			});
		}
	},

	initSingleProduct: function( container, update ) {
		var self = this,
			showShopBar = $( this.selectors.shopBar, container ).length,
			isLayoutScrollable = $( this.selectors.productLayoutScrollable, container ).length,
			isOnboarding = $(container).hasClass( 'onboarding-product' ),
			isProductTemplate = !$(container).hasClass( 'featured-product' );

		if ( !isOnboarding ) {

			if ( isProductTemplate ) {
				this.mfpOpen = true;
				this.storeAvailabilityContainer = container.querySelector( this.selectors.storeAvailabilityContainer );

				if (this.storeAvailabilityContainer) {
					this.storeAvailability = new theme.StoreAvailability(
						this.storeAvailabilityContainer
					);
				}

				this.initProductTabs( container );
				this.initImageGallery( container );
				this.qtyAdjust();

				if ( isLayoutScrollable ) {
					this.initScroller( container, update );
				} else {
					this.initProductMediaSlider( container );
				}

				if ( showShopBar ) {
					this.initShopBar( container );
				}
			} else {
				this.initProductMediaSlider( container );
			}

			this.initProductVideo( container );
			this.initMediaSwitch( container );
			this.initModelViewerLibraries( container );
			this.initShopifyXrLaunch( container );
			this.initVariants( container );
			Site.initReviews();
		} else {
			// Init quantity buttons
			this.qtyAdjust();

			// Update color swatches label on FP
			$( this.selectors.colorSwatch, container ).on( 'change', function() {
				var colorName = $( self.selectors.colorSwatch, container ).filter( ':checked' ).val();

				$( self.selectors.colorLabel, container ).text( colorName );
			});
		}
	},

	initVariants: function( container ) {
		/**
		 * Initialize variants dropdown.
		 */
		var $container = $(container),
			sectionId = $(container).data( 'section-id' ),
			namespace = '.product' + sectionId,
			product = JSON.parse(document.getElementById('ProductJson--' + sectionId).innerHTML),
			isFeaturedProduct = $(container).hasClass( 'featured-product' ),
			enableHistoryState = !isFeaturedProduct;

		var options = {
			$container: $container,
			enableHistoryState: enableHistoryState,
			singleOptionSelector: this.selectors.singleOptionSelector,
			originalSelectorId: this.selectors.originalSelectorId,
			product: product
		};

		this.variants = new slate.Variants(options);
		this.productSingleObject = product;

		if (this.storeAvailability) {
			this.storeAvailability.updateContent(
				this.variants.currentVariant.id,
				options.product.title
			);
		}

		$container.on('variantChange' + namespace, this.updateAddToCartState.bind(this));
		$container.on('variantChange' + namespace, this.updateColorName.bind(this));
		$container.on('variantChange' + namespace, this.updateAvailability.bind(this));
		$container.on('variantPriceChange' + namespace, this.updateProductPrices.bind(this));
		$container.on('variantUnitChange' + namespace, this.updateProductUnits.bind(this));
		$container.on('variantImageChange' + namespace, this.updateProductImage.bind(this));
	},

	updateAddToCartState: function(evt) {
		var container = evt.target,
			variant = evt.variant,
			$shopBar = $( this.selectors.shopBar );

		if ( variant ) {
			if ( variant.available ) {
				$( this.selectors.addToCart, container ).prop( 'disabled', false );
				$( this.selectors.addToCartText, container ).html( window.theme.translations.add_to_cart );
				$( this.selectors.notificationForm, container ).addClass( 'visually-hidden' );
			} else {
				$( this.selectors.addToCart, container ).prop( 'disabled', true );
				$( this.selectors.addToCartText, container ).html( window.theme.translations.sold_out );
				$( this.selectors.notificationForm, container ).removeClass( 'visually-hidden' );
			}
		} else {
			$( this.selectors.addToCart, container ).prop( 'disabled', true );
			$( this.selectors.addToCartText, container ).html( window.theme.translations.unavailable );
			$( this.selectors.notificationForm, container ).removeClass( 'visually-hidden' );
		}

		if ( $shopBar.length ) {
			if ( variant ) {
				if ( variant.available ) {
					$( this.selectors.addToCart, $shopBar ).prop( 'disabled', false );
					$( this.selectors.addToCartText, $shopBar ).html( window.theme.translations.add_to_cart );
				} else {
					$( this.selectors.addToCart, $shopBar ).prop('disabled', true);
					$( this.selectors.addToCartText, $shopBar ).html( window.theme.translations.sold_out );
				}
			} else {
				$( this.selectors.addToCart, $shopBar ).prop('disabled', true);
				$( this.selectors.addToCartText, $shopBar ).html( window.theme.translations.unavailable );
			}
		}
	},

	updateColorName: function(evt) {
		var container = evt.target;
		var colorName = $( this.selectors.colorSwatch, container ).filter( ':checked' ).val();

		$( this.selectors.colorLabel, container ).text( colorName );
	},

	updateProductPrices: function(evt) {
		var container = evt.target,
			variant = evt.variant,
			$comparePrice = $( this.selectors.comparePrice, container ).add( $( this.selectors.comparePrice, this.selectors.shopBar ) ),
			$productPrice =  $( this.selectors.productPrice, container ).add( $( this.selectors.productPrice, this.selectors.shopBar ) );

		// Update product price
		$productPrice.html( slate.Currency.formatMoney(variant.price, window.moneyFormat));

		// Update sale price
		if ( variant.compare_at_price > variant.price ) {
			$comparePrice
				.html( slate.Currency.formatMoney(variant.compare_at_price, window.moneyFormat) )
				.removeClass( 'visually-hidden' );
		} else {
			$comparePrice
				.html('')
				.addClass( 'visually-hidden' );
		}
	},

	updateProductUnits: function(evt) {
		var container = evt.target,
			variant = evt.variant;

		if (typeof variant.unit_price !== 'undefined'){
			var price = slate.Currency.formatMoney(variant.unit_price, window.moneyFormat),
				base = this.getBaseUnit(variant);

			$( this.selectors.unitPrice, container ).html( price );
			$( this.selectors.unitBase, container ).html( base );
			$( this.selectors.unitWrapper, container ).show()
		} else{
			$( this.selectors.unitWrapper, container ).hide()
		}
	},

	getBaseUnit: function(variant) {
		return variant.unit_price_measurement.reference_value === 1
			? variant.unit_price_measurement.reference_unit
			: variant.unit_price_measurement.reference_value + variant.unit_price_measurement.reference_unit;
	},

	updateAvailability: function(evt) {
		// update store availabilities info
		this.updateStoreAvailabilityContent(evt);
	},

	updateStoreAvailabilityContent: function(evt) {
		if (!this.storeAvailability) {
			return;
		}

		var variant = evt.variant;
		if (variant) {
			this.storeAvailability.updateContent(
				variant.id,
				this.productSingleObject.title
			);
		} else {
			this.storeAvailability.clearContent();
		}
	},

	updateProductImage: function(evt) {
		var container = evt.target,
			variant = evt.variant,
			variantMediaId = variant.featured_media ? variant.featured_media.id : '',
			isLayoutScrollable = $( this.selectors.productLayoutScrollable, container ).length,
			$imgSlider = $( this.selectors.productSlider, container ),
			flick = $imgSlider.data('flickity');

		// Activate image slide in mobile view
		if ( flick && flick.isActive) {
			var $variantSlide = $imgSlider.find( '[data-id="' + variantMediaId + '"]' );

			if ($variantSlide.index() != -1) {
				flick.select($variantSlide.index());
			}
		}

		if ( isLayoutScrollable ) {
			var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

			if (windowWidth >= 768) {
				var $selectedImage = $( this.selectors.productMediaWrapper + '[data-id="' + variantMediaId + '"]'),
					headerHeight = 59,
					additionalSpace = 40;

				if ( $selectedImage.length ) {
					var mediaId = $selectedImage.data( 'media-id' );
					$('html, body')
						.stop( true, false )
						.animate({ scrollTop: $selectedImage.offset().top - headerHeight - additionalSpace }, 500, function() {
							Product.switchMedia( container, mediaId )
						});
				}
			}
		}
	},

	/* Product Slider */
	initProductMediaSlider: function( container ) {
		var self = this,
			$productImgSlider = $( this.selectors.productSlider, container ),
			$productImgSliderNav = $( this.selectors.productSliderNav, container ),
			activeArrows = $productImgSlider.data( 'arrows' ),
			activeDots = $productImgSlider.data( 'dots' ),
			isDraggable = !( $( this.selectors.productMediaVideo, $productImgSlider ).length || $( this.selectors.productMediaModel, $productImgSlider ).length),
			activeSlide = $( this.selectors.productSelected, $productImgSlider ).index(),
			hasSlides = $( this.selectors.productSlide, $productImgSlider ).length > 1,
			lastWindowWidth = window.innerWidth || document.documentElement.clientWidth;

		activeSlide = activeSlide == -1 ? 0 : activeSlide;

		if ( hasSlides ) {
			$productImgSlider
				.on( 'ready.flickity', function() {
					$productImgSlider.attr( 'tabindex', '-1' );
					$( self.selectors.productSlide, $productImgSlider ).attr( 'tabindex', '-1' );
				})
				.on( 'change.flickity', function( event, index ) {
					var $currentSlide = $( self.selectors.productSlide, $productImgSlider ).eq( index ),
						$currentSlideImage = $( self.selectors.productMediaImage, $currentSlide );

					if ( !$currentSlideImage.hasClass( 'lazyloaded' ) ) {
						$currentSlideImage.addClass( 'lazyload' );
					}

					// Disable lightbox when changing slides
					setTimeout(function() {
						self.mfpOpen = true;
					}, 10);
				})
				.on( 'dragStart.flickity', function( event, index ) {
					self.mfpOpen = false;
				}).on( 'settle.flickity', function( event, index ) {
					var $currentSlide = $( self.selectors.productSlide, $productImgSlider ).eq( index ),
						mediaId = $currentSlide.data( 'media-id' );

					self.switchMedia( container, mediaId );
				});

			$productImgSlider.flickity({
				cellSelector: self.selectors.productSlide,
				prevNextButtons: activeArrows,
				arrowShape: window.theme.icons.arrowNavSlider,
				pageDots: activeDots,
				initialIndex: activeSlide,
				draggable: isDraggable,
				adaptiveHeight: true,
				contain: true,
				wrapAround: true
			});

			$productImgSliderNav.on( 'ready.flickity', function() {
				$productImgSliderNav.attr( 'tabindex', '-1' );
			});

			initSliderNav();
			$(window).on( 'resize.product', Reqs.debounce( function() {
				var windowWidth = window.innerWidth || document.documentElement.clientWidth;
				// Continue on window resize width change only
				if ( lastWindowWidth != windowWidth ) initSliderNav();
				lastWindowWidth = windowWidth;
			}, 250));

			function initSliderNav() {
				var isInitialized = $productImgSliderNav.data( 'flickity' ),
					sliderNavArrows = Site.sliders.checkThumbnailsOverflow( $productImgSliderNav );

				if ( isInitialized != undefined ) {
					$productImgSliderNav.flickity( 'destroy' );
				}

				$productImgSliderNav.flickity({
					cellSelector: '.js-slide',
					asNavFor: $productImgSlider[0],
					initialIndex: activeSlide,
					pageDots: false,
					prevNextButtons: sliderNavArrows,
					arrowShape: window.theme.icons.arrowNavSlider,
					contain: true,
					wrapAround: sliderNavArrows
				});
			}
		}
	},

	initImageGallery: function( container ) {
		var self = this,
			$productImgContainer = $( self.selectors.productSliderContainer, container ),
			lightbox = $productImgContainer.data( 'lightbox' );

		if ( !lightbox ) return;

		Reqs.lightbox();
		Reqs.zoom();

		$( self.selectors.productImageLightboxLink, $productImgContainer ).magnificPopup({
			mainClass: 'mfp-fade-in-up',
			type: 'image',
			removalDelay: 300,
			fixedContentPos: true,
			closeOnContentClick: false,
			closeOnBgClick: false,
			closeBtnInside: true,
			gallery: {
				enabled: true,
				preload: 0,
				tCounter: '<div class="mfp-counter-text">%curr% / %total%</div>',
				arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%">' + window.theme.icons.arrowSlider + '</button>'
			},
			tLoading: '<span class="icon-loader"></span>',
			closeMarkup: '<button title="%title%" type="button" class="mfp-close">' + window.theme.icons.close + '</button>',
			disableOn: function() {
				return self.mfpOpen;
			},
			callbacks: {
				open: function() {
					var imgSrc = $(this.currItem.el).attr('href'),
						$contentContainer = $(this.contentContainer);
					self.initZoom( imgSrc, $contentContainer );
				},
				change: function() {
					var imgSrc = $(this.currItem.el).attr('href'),
						$contentContainer = $(this.contentContainer);
					self.initZoom( imgSrc, $contentContainer );
				}
			}
		});
	},

	initZoom: function( imgSrc, $contentContainer ) {
		if ( !$( this.selectors.zoomContainer, $contentContainer ).length ) {
			$contentContainer.append( '<span class="zoom-container"></span>' );
		}

		$contentContainer
			.find( this.selectors.zoomContainer )
			.removeClass( 'zoom-container--loaded is-zoomed' )
			.trigger( 'zoom.destroy' )
			.empty()
			.zoom({
				on: 'click',
				url: imgSrc,
				magnify: 1.5,
				duration: 500,
				callback: function() {
					$(this).parent().removeClass( 'is-zoomed' ).addClass( 'zoom-container--loaded' );
				},
				onZoomIn: function() {
					$(this).parent().addClass( 'is-zoomed' );
				},
				onZoomOut: function() {
					$(this).parent().removeClass( 'is-zoomed' );
				}
			});
	},

	/* Product Tabs */
	initProductTabs: function( container ) {
		var self = this,
			$productTabs = $( this.selectors.productTabs, container );

		enquire.register("screen and (min-width: 768px)", function() {
			var tabsTitles = $( self.selectors.productTabsNav, $productTabs ),
				tabsContents = $( self.selectors.productTabsContents, $productTabs );
			$( self.selectors.productTabTitle, $productTabs ).remove().appendTo( tabsTitles );
			$( self.selectors.productTabContent, $productTabs ).remove().appendTo( tabsContents );
		});

		enquire.register("screen and (max-width: 767px)", function() {
			var tabsTitles = $( self.selectors.productTabTitle, $productTabs ),
				tabsContents = $( self.selectors.productTabContent, $productTabs );

			for ( var i = 0; i < tabsTitles.length; i++ ) {
				tabsTitles.eq( i ).remove().appendTo( $productTabs );
				tabsContents.eq( i ).remove().appendTo( $productTabs );
			}
		});

		// Click the product-tab title to change the tab
		$productTabs.on( 'click', self.selectors.productTabTitle, function(){
			var tabIndex = $(this).index(),
				isActive = $(this).hasClass( 'is-active' ),
				tabsCount = $(this).siblings( self.selectors.productTabTitle ).length + 1,
				windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

			// Do nothing if there's a single tab on Desktop
			if ( tabsCount == 1 && windowWidth >= 768 ) return;

			$productTabs.find( self.selectors.productTabTitle ).removeClass( 'is-active' );
			$productTabs.find( self.selectors.productTabContent ).removeClass( 'is-active' );

			if ( isActive ) {
				tabIndex++;

				// Check if next tab exists or set to first
				if ( !$productTabs.find( self.selectors.productTabTitle ).eq( tabIndex ).length ) {
					tabIndex = 0;
				}

				if ( windowWidth >= 768 ) {
					$productTabs.find( self.selectors.productTabTitle ).eq( tabIndex ).addClass( 'is-active' ).siblings().removeClass( 'is-active' );
					$productTabs.find( self.selectors.productTabContent ).eq( tabIndex ).addClass( 'is-active' ).siblings().removeClass( 'is-active' );
				} else {
					if ( $(this).next().next( self.selectors.productTabTitle ).length ) {
						// Show next tab on mobile if exists
						$(this).next().next( self.selectors.productTabTitle ).addClass( 'is-active' ).next( self.selectors.productTabContent ).addClass( 'is-active' );
					} else {
						if ( tabsCount == 1 ) {
							// Close current tab if it's a single one
							$(this).removeClass( 'is-active' ).next( self.selectors.productTabContent ).removeClass( 'is-active' );
						} else {
							// Show first tab on mobile if the current is last
							$(this).parent().find( self.selectors.productTabTitle ).eq(0).addClass( 'is-active' ).next( self.selectors.productTabContent ).addClass( 'is-active' );
						}
					}
				}
			} else {
				if ( windowWidth >= 768 ) {
					$productTabs.find( self.selectors.productTabTitle ).eq( tabIndex ).addClass( 'is-active' ).siblings().removeClass( 'is-active' );
					$productTabs.find( self.selectors.productTabContent ).eq( tabIndex ).addClass( 'is-active' ).siblings().removeClass( 'is-active' );
				} else {
					$(this).addClass( 'is-active' ).next( self.selectors.productTabContent ).addClass( 'is-active' );
				}
			}

			// Scroll to the active tab on mobile
			if ( windowWidth < 768 && $productTabs.find( self.selectors.productTabTitle + '.is-active' ).length ) {
				setTimeout(function() {
					var activeTabPosition = $productTabs.find( self.selectors.productTabTitle + '.is-active' ).offset().top - 61; // 60px header height + 1px border top width
					$( 'html, body' ).stop(true, true).animate({ scrollTop: activeTabPosition });
				}, 300);
			}
		});
	},

	initScroller: function( container, update ) {
		var self = this,
			productImages = $( this.selectors.productMediaWrapper, container ).length;

		if (productImages > 1) {
			var isPageLoaded = false,
				$productLayoutScrollable = $( this.selectors.productLayoutScrollable, container ),
				$productImg = $( this.selectors.productMediaWrapper, container ),
				$productImgNav = $( this.selectors.productScrollerNav, container );

			// Adjust thumbnails position if change setting in TE
			if ( update ) stickyThumbnails();

			$(window)
				.on( 'scroll.product', Reqs.throttle( stickyThumbnails, 10 ) )
				.on( 'load', function() {
					isPageLoaded = true;
				});

			// Bind product thumb image click to scroll function
			$productImgNav.on( 'click', this.selectors.productThumbnail, function(e) {
				e.preventDefault();

				var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

				if (windowWidth >= 768) {
					var id = $(this).parent().data( 'id' ),
						$selectedImage = $( self.selectors.productMediaWrapper + '[data-id="' + id + '"]'),
						headerHeight = 59,
						additionalSpace = 40;

					if ( $selectedImage.length ) {
						var mediaId = $selectedImage.data( 'media-id' );
						if ( isPageLoaded || update ) {
							$('html, body')
								.stop( true, false )
								.animate({ scrollTop: $selectedImage.offset().top - headerHeight - additionalSpace }, 500, function() {
									Product.switchMedia( container, mediaId )
								});
						}
					}
				}
			});

			$(window).on('resize.product', Reqs.throttle( toggleMobileSlider, 250));

			toggleMobileSlider();

			function toggleMobileSlider() {
				var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
					hasSlides = $( self.selectors.productSlide, $productLayoutScrollable ).length > 1;

				if ( windowWidth < 768 && hasSlides) {
					initMobileSlider();
				} else {
					destroyMobileSlider();
				}
			}

			function stickyThumbnails() {
				var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

				if (windowWidth >= 768) {
					var scrolled = $(window).scrollTop(),
						productOffset = $productLayoutScrollable.offset().top - 100;

					for ( var i = $productImg.length - 1; i >= 0; i--) {
						var $currentProduct = $( self.selectors.productMediaWrapper ).eq( i ),
							id = $currentProduct.data( 'id' ),
							productOffset = parseInt( $currentProduct.offset().top - 100 );

						if (scrolled >= productOffset) {
							$productImgNav.find( self.selectors.productMediaThumb + '[data-id="' + id + '"]').addClass( 'active' ).siblings().removeClass( 'active' );
							break;
						}
					}
				}
			}
		}

		// If product layout is scroller and is mobile then load slider
		function initMobileSlider() {
			var $productImgSlider = $( self.selectors.productScroller, container ),
				$productImgSliderNav = $( self.selectors.productScrollerNav, container ),
				hasSlides = $( self.selectors.productSlide, container ).length > 1,
				activeArrows = $productImgSlider.data('arrows'),
				activeDots = $productImgSlider.data('dots'),
				sliderNavArrows = Site.sliders.checkThumbnailsOverflow( $productImgSliderNav ),
				isDraggable = !( $( self.selectors.productMediaVideo, $productImgSlider ).length || $( self.selectors.productMediaModel, $productImgSlider ).length ),
				activeSlide = $( self.selectors.productSelected, $productImgSlider ).index();

			activeSlide = activeSlide == -1 ? 0 : activeSlide;

			var flickity = $productImgSlider.data( 'flickity' ),
				flickityNav = $productImgSliderNav.data( 'flickity' );

			if ( hasSlides ) {
				if (flickity == undefined) {

					$productImgSlider
						.on( 'change.flickity', function( event, index ) {
							var $currentSlide = $( self.selectors.productSlide, $productImgSlider ).eq( index );
							if ( !$currentSlide.hasClass( 'lazyloaded') ) {
								$currentSlide.addClass( 'lazyload');
							}

							// Disable lightbox when changing slides
							setTimeout(function() {
								self.mfpOpen = true;
							}, 10);
						})
						.on( 'dragStart.flickity', function( event, index ) {
							self.mfpOpen = false;
						});

					$productImgSlider.flickity({
						cellSelector: '.js-slide',
						prevNextButtons: activeArrows,
						arrowShape: window.theme.icons.arrowNavSlider,
						pageDots: activeDots,
						initialIndex: activeSlide,
						draggable: isDraggable,
						selectedAttraction: 0.08,
						friction: 0.8,
						adaptiveHeight: true,
						contain: true,
						wrapAround: true
					});
				}

				if (flickityNav == undefined) {
					$productImgSliderNav.flickity({
						cellSelector: '.js-slide',
						asNavFor: $productImgSlider[0],
						initialIndex: activeSlide,
						pageDots: false,
						prevNextButtons: sliderNavArrows,
						arrowShape: window.theme.icons.arrowNavSlider,
						contain: true,
						wrapAround: sliderNavArrows
					});
				}
			}
		}

		function destroyMobileSlider() {
			var $productImgSlider = $( self.selectors.productScroller, container ),
				$productImgSliderNav = $( self.selectors.productScrollerNav, container ),
				flickity = $productImgSlider.data( 'flickity' ),
				flickityNav = $productImgSliderNav.data( 'flickity' );

			if (flickity && flickity.isActive) {
				$productImgSlider.flickity('destroy')
			}

			if (flickityNav && flickityNav.isActive) {
				$productImgSliderNav.flickity('destroy')
			}
		}
	},

	handleMediaFocus: function( e, container ) {
		// Do nothing if not ENTER key (13) or TAB key (9)
		if (e.keyCode !== 13 && e.keyCode !== 9) return;

		var mediaId = $( e.currentTarget ).data( 'thumbnail-id' ),
			slideIndex = $( this.selectors.productSlide + '[data-media-id="' + mediaId + '"]', container ).index(),
			flick = $( this.selectors.productSliderContainer, container ).data('flickity'),
			flickNav = $( this.selectors.productSliderNav, container ).data('flickity');

		// Go to the related slide media
		if (flick && flick.isActive && slideIndex > -1 && e.keyCode === 13 ) {
			flick.select( slideIndex );
		}

		// Move thumbs to the selected one
		if (flickNav && flickNav.isActive && slideIndex > -1 ) {
			flickNav.select( slideIndex );
		}
	},

	switchMedia: function( container, mediaId ) {
		var $currentMedia = $( this.selectors.productMediaWrapper + ':not(.media--hidden)', container ),
			$newMedia = $( this.selectors.productMediaWrapper + '[data-media-id="' + mediaId + '"]', container ),
			$otherMedia = $( this.selectors.productMediaWrapper + ':not([data-media-id="' + mediaId + '"])', container ),
			isFocusEnabled = !$( this.selectors.body ).hasClass( 'no-outline' );

		if ( isFocusEnabled ) $newMedia.focus();

		$currentMedia.trigger( 'mediaHidden' );
		$newMedia.removeClass( 'media--hidden' ).trigger( 'mediaVisible' );
		$otherMedia.addClass( 'media--hidden' );
	},

	pauseOtherMedia: function( mediaId, container ) {
		var $currentMedia = $( this.selectors.productMediaWrapper + '[data-media-id="' + mediaId + '"]' ),
			$otherMedia = $( this.selectors.productMediaWrapper + ':not([data-media-id="' + mediaId + '"])' );

		$currentMedia.removeClass( 'media--hidden' );
		$otherMedia.trigger( 'mediaHidden' ).addClass( 'media--hidden' );
	},

	initMediaSwitch: function( container ) {
		var $productThumbImages = $( this.selectors.productThumbnail, container );

		if (!$productThumbImages.length) return;

		$productThumbImages
			.on( 'click', function(e) {
				e.preventDefault();
			})
			.on( 'keyup', this.handleMediaFocus.bind(this) );
	},

	initProductVideo: function( container ) {
		var sectionId = $(container).data( 'section-id' );

		$( this.selectors.productMediaTypeVideo, container).each(function() {
			var $video = $(this);
			ProductVideo.init($video, sectionId);
		});
	},

	initModelViewerLibraries: function( container ) {
		var sectionId = $(container).data( 'section-id' ),
			$modelViewerElements = $( this.selectors.productMediaTypeModel, container );

		if ($modelViewerElements.length < 1) return;

		ProductModel.init($modelViewerElements, sectionId);
	},

	initShopifyXrLaunch: function( container ) {
		var self = this;

		$(document).on('shopify_xr_launch', function() {
			var $currentMedia = $( self.selectors.productMediaWrapper + ':not(.media--hidden)', container );
			$currentMedia.trigger( 'xrLaunch' );
		});
	},

	/*
	 * Sticky "Shop" Bar in product.liquid
	 * Hidden via CSS under 768px viewport size
	 */
	initShopBar: function(container) {
		var self = this,
			sectionId = $( container ).data( 'section-id' ),
			namespace = '.product' + sectionId,
			product = JSON.parse(document.getElementById('ProductJson--' + sectionId).innerHTML),
			$body = $( this.selectors.body ),
			$shopBar = $( this.selectors.shopBar, container ),
			$productContainer = $( this.selectors.productSectionContainer, container ),
			$siteFooter = $( '.site-footer' );
			enableHistoryState = false;

		/*
		* Move shop bar html outside the .bodyWrap
		* .bodyWrap has transform property which causes the shop bar disappearing as it has position: fixed
		*/
		$shopBar.remove().appendTo( $body );

		var options = {
			$container: $shopBar,
			enableHistoryState: enableHistoryState,
			singleOptionSelector: this.selectors.singleOptionSelector,
			originalSelectorId: this.selectors.originalSelectorId,
			product: product
		};

		this.variants = new slate.Variants(options);

		$shopBar.on('variantChange' + namespace, this.updateAddToCartState.bind(this));
		$shopBar.on('variantPriceChange' + namespace, this.updateProductPrices.bind(this));
		$shopBar.on('variantImageChange' + namespace, this.updateProductImage.bind(this));

		// Update shop bar on product form variant change
		$shopBar.on( 'change', 'select', function(e) {
			var optionSelected = $(this).val(),
				optionIndex = $(this).data( 'index' ),
				$singleOptionSelector = $( self.selectors.singleOptionSelector, container ),
				$formElement = $singleOptionSelector.filter( '[data-index="' + optionIndex + '"]');

			if ( $formElement.is( 'select') ) {
				$formElement.val( optionSelected ).triggerHandler( 'change' );
			} else {
				$formElement.filter( '[value="' + optionSelected + '"]' ).prop( 'checked', true ).triggerHandler( 'change' );
			}
		});

		// Update shop bar on product form variant change
		$( this.selectors.singleOptionSelector, container ).on( 'change', function(e) {
			var optionIndex = $(this).data('index'),
				optionSelected = $(this).val();

			$shopBar.find('[data-index="' + optionIndex+ '"]').val( optionSelected ).triggerHandler( 'change' );
		});

		$(window)
			.on( 'scroll.product',
				Reqs.throttle( function(){
					var scrolled = $(window).scrollTop();

					if ( $productContainer.length && $shopBar.length ) {
						var productContainerOffset = $productContainer.offset().top;

						if ( scrolled > productContainerOffset ) {
							$shopBar.addClass('shop-bar--is-visible');
							$siteFooter.addClass('site-footer--push')
						} else if ( scrolled < productContainerOffset - 60 ) {
							$shopBar.removeClass('shop-bar--is-visible');
							$siteFooter.removeClass('site-footer--push')
						}
					}
				}, 100)
			)
			.trigger( 'scroll.product' );
	},

	// show variant image within quickView or within slideshow (mobile product page)
	showVariantImage: function(variant, container) {
		var variantMediaId = variant.featured_media ? variant.featured_media.id : '',
			$productImage = container.find('.product-image'),
			$imgSlider = container.find('.js-productImgContainer'),
			$imgScrollerNav = container.find('.productImgScroller-nav'),
			flick = $imgSlider.data('flickity');

		// Activate image slide in mobile view
		if ( flick && flick.isActive) {
			var $variantSlide = $imgSlider.find('[data-id="' + variantMediaId + '"]');

			if ($variantSlide.index() != -1) {
				flick.select($variantSlide.index());
			}

			$productImage.removeClass('is-selected-product');
			$variantSlide.addClass('is-selected-product');
		} else {
			var $variantThumb = $imgScrollerNav.find('[data-id="' + variantMediaId + '"] .js-product-single__thumbnail');

			if ( $variantThumb.length ) {
				$variantThumb.trigger('click');
			}
		}
	},

	qtyAdjust: function() {
		// Setup listeners to add/subtract from the input
		var $body = $( 'body' );
		$body.off( 'click', '.js-qty__adjust-btn' );
		$body.on( 'click', '.js-qty__adjust-btn', function(e) {
			e.preventDefault();
			var $adjustBtn = $(this),
				$qtySelector = $(this).siblings( '.qty__adjust-input' );
				qty = validateQty( parseInt($qtySelector.val().replace(/\D/g, '') ));

			// Add or subtract from the current quantity
			if ( $adjustBtn.hasClass( 'increase' )) {
				qty += 1;
			} else {
				qty -= 1;
				if (qty < 1) qty = 1;
			}

			// Update the input's number
			$qtySelector.val(qty);
		});

		// Prevent 0 quantity
		$body.off( 'focusout', '.qty__adjust > input' );
		$body.on( 'focusout', '.qty__adjust > input', function(e) {
			var currentValue = $(this).val();
			if ( !currentValue ) $(this).prop( 'value', 1 );
		} );

		$body.off( 'keydown', '.qty__adjust > input' );
		$body.on( 'keydown', '.qty__adjust > input', function(e) {
			var currentValue = $(this).val();
			if ( e.keyCode === 13 && !currentValue ) $(this).prop( 'value', 1 );
		});

		function validateQty(qty) {
			if((parseFloat(qty) != parseInt(qty)) || isNaN(qty)) {
				qty = 1;
			}
			return qty;
		};
	}
}

window.isYoutubeAPILoaded = false;

function onYouTubeIframeAPIReady() {
	ProductVideo.loadVideos(ProductVideo.hosts.youtube);
	window.isYoutubeAPILoaded = true;
}

var ProductVideo = (function() {
	var videos = {};

	var hosts = {
		html5: 'html5',
		youtube: 'youtube'
	};

	var selectors = {
		productMediaWrapper: '[data-product-single-media-wrapper]'
	};

	var attributes = {
		enableVideoLooping: 'enable-video-looping',
		videoId: 'video-id',
		mediaId: 'media-id'
	};

	function init(videoContainer, sectionId) {
		if (!videoContainer.length) {
			return;
		}

		var videoElement = videoContainer.find('iframe, video')[0];
		var mediaId = videoContainer.data('mediaId');

		if (!videoElement) {
			return;
		}

		videos[mediaId] = {
			mediaId: mediaId,
			sectionId: sectionId,
			host: hostFromVideoElement(videoElement),
			container: videoContainer,
			element: videoElement,
			ready: function() {
				createPlayer(this);
			}
		};

		var video = videos[mediaId];

		switch (video.host) {
			case hosts.html5:
				window.Shopify.loadFeatures([
					{
						name: 'video-ui',
						version: '1.0',
						onLoad: setupPlyrVideos
					}
				]);
				LibraryLoader.load('plyrShopifyStyles');
				break;
			case hosts.youtube:
				if ( window.isYoutubeAPILoaded ) {
					ProductVideo.loadVideos(ProductVideo.hosts.youtube);
				} else {
					LibraryLoader.load('youtubeSdk');
				}
				break;
		}
	}

	function setupPlyrVideos(errors) {
		if (errors) {
			fallbackToNativeVideo();
			return;
		}

		loadVideos(hosts.html5);
	}

	function createPlayer(video) {
		if (video.player) {
			return;
		}

		var productMediaWrapper = video.container,
			enableLooping = productMediaWrapper.data(attributes.enableVideoLooping),
			mediaId = productMediaWrapper.data(attributes.mediaId);

		switch (video.host) {
			case hosts.html5:
				// eslint-disable-next-line no-undef
				video.player = new Shopify.Plyr(video.element, {
					loop: { active: enableLooping },
					focusOnPlay: true
				});

				video.player.on( 'play', function() {
					Product.pauseOtherMedia( mediaId );
				});
				break;
			case hosts.youtube:
				var videoId = productMediaWrapper.data(attributes.videoId);
				video.player = new YT.Player(video.element, {
					videoId: videoId,
					events: {
						// onReady: function(event) {},
						onStateChange: function(event) {
							if (event.data === 0 && enableLooping) event.target.seekTo(0);
							if (event.data === 1 ) Product.pauseOtherMedia( mediaId );
						}
					}
				});
				break;
		}

		productMediaWrapper.on('mediaHidden xrLaunch', function( e ) {
			if (!video.player) return;

			if (video.host === hosts.html5) {
				video.player.pause();
			}

			if (video.host === hosts.youtube && video.player.pauseVideo) {
				video.player.pauseVideo();
			}
		});

		productMediaWrapper.on('mediaVisible', function( e ) {
			if (window.theme.isTouch) return;
			if (!video.player) return;

			if (video.host === hosts.html5) {
				video.player.play();
			}

			if (video.host === hosts.youtube && video.player.playVideo) {
				video.player.playVideo();
			}
		});
	}

	function hostFromVideoElement(video) {
		if (video.tagName === 'VIDEO') {
			return hosts.html5;
		}

		if (video.tagName === 'IFRAME') {
			if (
				/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
					video.src
				)
			) {
				return hosts.youtube;
			}
		}
		return null;
	}

	function loadVideos(host) {
		for (var key in videos) {
			if (videos.hasOwnProperty(key)) {
				var video = videos[key];
				if (video.host === host) {
					video.ready();
				}
			}
		}
	}

	function fallbackToNativeVideo() {
		for (var key in videos) {
			if (videos.hasOwnProperty(key)) {
				var video = videos[key];

				if (video.nativeVideo) continue;

				if (video.host === hosts.html5) {
					video.element.setAttribute('controls', 'controls');
					video.nativeVideo = true;
				}
			}
		}
	}

	function removeSectionVideos(sectionId) {
		for (var key in videos) {
			if (videos.hasOwnProperty(key)) {
				var video = videos[key];

				if (video.sectionId === sectionId) {
					if (video.player) video.player.destroy();
					delete videos[key];
				}
			}
		}
	}

	return {
		init: init,
		hosts: hosts,
		loadVideos: loadVideos,
		removeSectionVideos: removeSectionVideos
	};
})();

var ProductModel = (function() {
	var modelJsonSections = {},
		models = {},
		xrButtons = {};

	var selectors = {
		mediaGroup: '[data-product-single-media-group]',
		xrButton: '[data-shopify-xr]'
	};

	function init(modelViewerContainers, sectionId) {
		modelJsonSections[sectionId] = {
			loaded: false
		};

		modelViewerContainers.each(function(index) {
			var $modelViewerContainer = $(this);
			var mediaId = $modelViewerContainer.data('media-id');
			var $modelViewerElement = $(
				$modelViewerContainer.find('model-viewer')[0]
			);
			var modelId = $modelViewerElement.data('model-id');

			if (index === 0) {
				var $xrButton = $modelViewerContainer
					.closest(selectors.mediaGroup)
					.find(selectors.xrButton);
				xrButtons[sectionId] = {
					$element: $xrButton,
					defaultId: modelId
				};
			}

			models[mediaId] = {
				modelId: modelId,
				mediaId: mediaId,
				sectionId: sectionId,
				$container: $modelViewerContainer,
				$element: $modelViewerElement
			};
		});

		window.Shopify.loadFeatures([
			{
				name: 'shopify-xr',
				version: '1.0',
				onLoad: setupShopifyXr
			},
			{
				name: 'model-viewer-ui',
				version: '1.0',
				onLoad: setupModelViewerUi
			}
		]);
		LibraryLoader.load('modelViewerUiStyles');
	}

	function setupShopifyXr(errors) {
		if (errors) return;

		if (!window.ShopifyXR) {
			document.addEventListener('shopify_xr_initialized', function() {
				setupShopifyXr();
			});
			return;
		}

		for (var sectionId in modelJsonSections) {
			if (modelJsonSections.hasOwnProperty(sectionId)) {
				var modelSection = modelJsonSections[sectionId];

				if (modelSection.loaded) continue;
				var $modelJson = $('#ModelJson-' + sectionId);

				window.ShopifyXR.addModels(JSON.parse($modelJson.html()));
				modelSection.loaded = true;
			}
		}
		window.ShopifyXR.setupXRElements();
	}

	function setupModelViewerUi(errors) {
		if (errors) return;

		for (var key in models) {
			if (models.hasOwnProperty(key)) {
				var model = models[key];
				if (!model.modelViewerUi) {
					model.modelViewerUi = new Shopify.ModelViewerUI(model.$element);
				}

				setupModelViewerListeners(model);
			}
		}
	}

	function setupModelViewerListeners(model) {
		var xrButton = xrButtons[model.sectionId];

		model.$container.on('mediaVisible', function() {
			xrButton.$element.attr('data-shopify-model3d-id', model.modelId);
			Product.pauseOtherMedia( model.mediaId );
			if (window.theme.isTouch) return;
			model.modelViewerUi.play();
		});

		model.$container
			.on('mediaHidden', function() {
				xrButton.$element.attr('data-shopify-model3d-id', xrButton.defaultId);
				model.modelViewerUi.pause();
			})
			.on('xrLaunch', function() {
				model.modelViewerUi.pause();
			});

		model.$element.on( 'shopify_model_viewer_ui_toggle_play', function() {
			Product.pauseOtherMedia( model.mediaId );
		});
	}

	function removeSectionModels(sectionId) {
		for (var key in models) {
			if (models.hasOwnProperty(key)) {
				var model = models[key];
				if (model.sectionId === sectionId) {
					models[key].modelViewerUi.destroy();
					delete models[key];
				}
			}
		}
		delete modelJsonSections[sectionId];
	}

	return {
		init: init,
		removeSectionModels: removeSectionModels
	};
})();

var RelatedProducts = {
	init: function() {
		var $container = $( '[data-section-type="related-products"]' ),
			sectionId = $container.attr('data-section-id'),
			productId = $container.data('product-id'),
			limit = $container.data('limit'),
			requestUrl = window.theme.routes.product_recommendations_url + '?section_id=' + sectionId + '&limit=' + limit + '&product_id=' + productId;

		$.get(requestUrl)
			.done(function(data) {
				var products = $( data ).find( '[data-section-type="related-products"]' ).html();
				$container.hide().html( products ).slideDown( 'slow' );

				var $image = $container.find( '.collectionBlock-image' );

				Site.animations.animateAll();
				Site.initReviews();

				if ( window.theme.settings.imageBackgroundSize == 'contain' ) {
					Collection.setBadgePosition( $image );
					$(window)
						.off( 'resize.products' )
						.on( 'resize.products', Reqs.debounce( Collection.setBadgePosition.bind( this, $image ), 50));
				}
		});
	}
}

var Blog = {
	selectors: {
		blogContainer: '[data-blog-container]',
		blogPosts: '[data-blog-posts]',
		blogPost: '[data-blog-post]',
		blogPostContent: '[data-post-title], [data-post-excerpt]'
	},
	classes: {
		blogPostHasImage: 'blogModule-posts__post--has-image'
	},
	init: function() {
		var self = this,
			namespace = '.blog';

		this.truncateText();
		this.removeAnimations();

		$(window)
			.off( namespace )
			.on( 'load', this.truncateText.bind(this) )
			.on( 'resize' + namespace, Reqs.debounce( self.truncateText.bind(self), 250) )
			.on( 'resize' + namespace, Reqs.debounce( self.removeAnimations.bind(self), 250) );

		$(document).on('ajaxify:updated', this.truncateText.bind(this) );
	},

	removeAnimations: function() {
		// Remove animations on Featured blog section on mobile only
		var windowWidth = window.innerWidth || document.decumentElement.clientWidth;

		if ( windowWidth < 768 ) {
			$( this.selectors.blogContainer ).each(function() {
				Site.removeAnimationClass( $(this) );
			});
		}
	},

	truncateText: function() {
		var self = this,
			$blogPost = $( this.selectors.blogPost );

		if ( $blogPost.length ) {
			$blogPost.each(function() {
				var $itemContent = $(this).find( self.selectors.blogPostContent ),
					hasImage = $(this).hasClass( self.classes.blogPostHasImage ),
					lines = hasImage ? 2 : 4;

				$itemContent.trunk8({ lines: lines });
			});
		}
	}
}

var Reqs = {
	throttle: function(fn, threshhold, scope) {
		threshhold || (threshhold = 250);

		var last,
			deferTimer;

		return function () {
			var context = scope || this;

			var now = +new Date,
				args = arguments;

			if (last && now < last + threshhold) {
				// hold on to it
				clearTimeout(deferTimer);
				deferTimer = setTimeout(function () {
					last = now;
					fn.apply(context, args);
				}, threshhold);
			} else {
				last = now;
				fn.apply(context, args);
			}
		}
	},
	debounce: function(fn, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) fn.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) fn.apply(context, args);
		};
	},
	lightbox: function() {
		/*! Magnific Popup - v1.1.0 - 2016-02-20
		* http://dimsemenov.com/plugins/magnific-popup/
		* Copyright (c) 2016 Dmitry Semenov; */
		!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
	},
	zoom: function() {
		/*!
			Zoom 1.7.21
			license: MIT
			http://www.jacklmoore.com/zoom
		*/
		(function(o){var t={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};o.zoom=function(t,n,e,i){var u,c,a,r,m,l,s,f=o(t),h=f.css("position"),d=o(n);return t.style.position=/(absolute|fixed)/.test(h)?h:"relative",t.style.overflow="hidden",e.style.width=e.style.height="",o(e).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:e.width*i,height:e.height*i,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(t),{init:function(){c=f.outerWidth(),u=f.outerHeight(),n===t?(r=c,a=u):(r=d.outerWidth(),a=d.outerHeight()),m=(e.width-c)/r,l=(e.height-u)/a,s=d.offset()},move:function(o){var t=o.pageX-s.left,n=o.pageY-s.top;n=Math.max(Math.min(n,a),0),t=Math.max(Math.min(t,r),0),e.style.left=t*-m+"px",e.style.top=n*-l+"px"}}},o.fn.zoom=function(n){return this.each(function(){var e=o.extend({},t,n||{}),i=e.target&&o(e.target)[0]||this,u=this,c=o(u),a=document.createElement("img"),r=o(a),m="mousemove.zoom",l=!1,s=!1;if(!e.url){var f=u.querySelector("img");if(f&&(e.url=f.getAttribute("data-src")||f.currentSrc||f.src),!e.url)return}c.one("zoom.destroy",function(o,t){c.off(".zoom"),i.style.position=o,i.style.overflow=t,a.onload=null,r.remove()}.bind(this,i.style.position,i.style.overflow)),a.onload=function(){function t(t){f.init(),f.move(t),r.stop().fadeTo(o.support.opacity?e.duration:0,1,o.isFunction(e.onZoomIn)?e.onZoomIn.call(a):!1)}function n(){r.stop().fadeTo(e.duration,0,o.isFunction(e.onZoomOut)?e.onZoomOut.call(a):!1)}var f=o.zoom(i,u,a,e.magnify);"grab"===e.on?c.on("mousedown.zoom",function(e){1===e.which&&(o(document).one("mouseup.zoom",function(){n(),o(document).off(m,f.move)}),t(e),o(document).on(m,f.move),e.preventDefault())}):"click"===e.on?c.on("click.zoom",function(e){return l?void 0:(l=!0,t(e),o(document).on(m,f.move),o(document).one("click.zoom",function(){n(),l=!1,o(document).off(m,f.move)}),!1)}):"toggle"===e.on?c.on("click.zoom",function(o){l?n():t(o),l=!l}):"mouseover"===e.on&&(f.init(),c.on("mouseenter.zoom",t).on("mouseleave.zoom",n).on(m,f.move)),e.touch&&c.on("touchstart.zoom",function(o){o.preventDefault(),s?(s=!1,n()):(s=!0,t(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(o){o.preventDefault(),f.move(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}).on("touchend.zoom",function(o){o.preventDefault(),s&&(s=!1,n())}),o.isFunction(e.callback)&&e.callback.call(a)},a.setAttribute("role","presentation"),a.alt="",a.src=e.url})},o.fn.zoom.defaults=t})(window.jQuery);
	},
	cookie: function() {
		/*!
		 * JavaScript Cookie v2.1.0
		 * https://github.com/js-cookie/js-cookie
		 *
		 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
		 * Released under the MIT license
		 */

		!function(e){if("function"==typeof define&&define.amd)define(e);else if("object"==typeof exports)module.exports=e();else{var n=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=n,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(t){function o(n,r,i){var c;if(arguments.length>1){if(i=e({path:"/"},o.defaults,i),"number"==typeof i.expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*i.expires),i.expires=s}try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(a){}return r=t.write?t.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)),n=n.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),n=n.replace(/[\(\)]/g,escape),document.cookie=[n,"=",r,i.expires&&"; expires="+i.expires.toUTCString(),i.path&&"; path="+i.path,i.domain&&"; domain="+i.domain,i.secure?"; secure":""].join("")}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var f=p[u].split("="),l=f[0].replace(d,decodeURIComponent),m=f.slice(1).join("=");'"'===m.charAt(0)&&(m=m.slice(1,-1));try{if(m=t.read?t.read(m,l):t(m,l)||m.replace(d,decodeURIComponent),this.json)try{m=JSON.parse(m)}catch(a){}if(n===l){c=m;break}n||(c[l]=m)}catch(a){}}return c}return o.get=o.set=o,o.getJSON=function(){return o.apply({json:!0},[].slice.call(arguments))},o.defaults={},o.remove=function(n,t){o(n,"",e(t,{expires:-1}))},o.withConverter=n,o}return n(function(){})});
	}
}

var apiStatus = null;
var Gmap = {
	selectors: {
		map: '[data-section-type="map"]'
	},
	init: function( ) {

		var instance = this,
			mapsToLoad = [];

		$(this.selectors.map).each( function() {
			var container = this,
				key = $(container).data('api-key');

			if (typeof key !== 'string' || key === '') {
				return;
			}

			if ( apiStatus === 'loaded') {
				// Check if the script has previously been loaded with this key
				var $script = $('script[src*="' + key + '&"]');
				if ( $script.length === 0 ) {
					$.getScript(
						'https://maps.googleapis.com/maps/api/js?key=' + key
					).then(function() {
						apiStatus = 'loaded';
						instance.createMap(container);
					});
				} else {
					instance.createMap(container);
				}
			} else {
				mapsToLoad.push(this);

				if (apiStatus !== 'loading') {
					apiStatus = 'loading';
					if (typeof window.google === 'undefined') {
						$.getScript(
							'https://maps.googleapis.com/maps/api/js?key=' + key
						).then(function() {
							apiStatus = 'loaded';
							initAllMaps();
						});
					}
				}
			}
		});

		function initAllMaps() {
			// API has loaded, load all Map instances in queue
			$.each(mapsToLoad, function(index, container) {
				instance.createMap(container);
			});
		}
	},
	geolocate: function($map) {
		var deferred = $.Deferred(),
			geocoder = new google.maps.Geocoder(),
			defaultAddress = '37.4439064, -122.1639733',
			address = $map.closest(this.selectors.map).data('address') || defaultAddress;

		geocoder.geocode({ 'address': address }, function(results, status) {
			if (status !== google.maps.GeocoderStatus.OK) {
				deferred.reject(status);
			}

			deferred.resolve(results);
		});

		return deferred;
	},
	createMap: function(container) {
		var instance = this,
			style = $(container).data('style'),
			zoom = $(container).data('zoom'),
			id = $(container).data('section-id'),
			$map = $( '.map--' + id ),
			standard =[];

		var silver =[{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}];
		var retro =[{"elementType":"geometry","stylers":[{"color":"#ebe3cd"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#523735"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f1e6"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#c9b2a6"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.stroke","stylers":[{"color":"#dcd2be"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#ae9e90"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#93817c"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#a5b076"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#447530"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#f5f1e6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#fdfcf8"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#f8c967"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#e9bc62"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#e98d58"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"color":"#db8555"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#806b63"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"transit.line","elementType":"labels.text.fill","stylers":[{"color":"#8f7d77"}]},{"featureType":"transit.line","elementType":"labels.text.stroke","stylers":[{"color":"#ebe3cd"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#b9d3c2"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#92998d"}]}];
		var dark =[{"elementType":"geometry","stylers":[{"color":"#212121"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#212121"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#757575"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#181818"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"color":"#1b1b1b"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#8a8a8a"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#373737"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#3c3c3c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#3d3d3d"}]}];
		var night =[{"elementType":"geometry","stylers":[{"color":"#242f3e"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#746855"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#242f3e"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#263c3f"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#6b9a76"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#38414e"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#212a37"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#9ca5b3"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#746855"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#1f2835"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#f3d19c"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#2f3948"}]},{"featureType":"transit.station","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#17263c"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#515c6d"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#17263c"}]}];
		var aubergine =[{"elementType":"geometry","stylers":[{"color":"#1d2c4d"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#8ec3b9"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#1a3646"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#64779e"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"color":"#334e87"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#023e58"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#283d6a"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#6f9ba5"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#023e58"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#3C7680"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#304a7d"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#2c6675"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#255763"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#b0d5ce"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#023e58"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#283d6a"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#3a4762"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#0e1626"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#4e6d70"}]}];

		var styles = '';
		if ( style == 'standard') {
			styles = standard;
		} else if (style == 'silver') {
			styles = silver;
		} else if (style == 'retro') {
			styles = retro;
		} else if (style == 'dark') {
			styles = dark;
		} else if (style == 'night') {
			styles = night;
		} else {
			styles = aubergine;
		}

		return instance.geolocate($map)
			.then(
				function(results) {
					var mapOptions = {
						styles: styles,
						center: results[0].geometry.location,
						clickableIcons: false,
						scrollwheel: false,
						zoomControl: true,
						disableDefaultUI: true,
						navigationControl: false,
						mapTypeControl: false,
						scaleControl: false,
						draggable: false,
						zoom: zoom
					};

					var map = new google.maps.Map($map[0], mapOptions);
					var center = map.getCenter();

					//eslint-disable-next-line no-unused-vars
					var marker = new google.maps.Marker({
						map: map,
						position: center
					});

					google.maps.event.addDomListener(window, 'resize', function() {
						google.maps.event.trigger(map, 'resize');
						map.setCenter(center);
					});
				}.bind(this)
			);
	}
}

var Popup = {
	init: function() {
		var self = this,
			$popup = this.$popup = $( '#popup' ),
			$popupClose = $popup.find( '.popup__close' ),
			popupEnabled = $popup.data( 'enabled' ),
			popupTimeout = this.popupTimeout = 0;

		if (popupEnabled) {
			var testMode = $popup.data('testmode'),
				modalDelay = parseInt($popup.data('delay')) * 1000, // Convert from ms to seconds
				reappearTime = parseInt($popup.data('reappear_time')) * 1000; // Convert from ms to seconds

			enquire.register("screen and (min-width:768px)", function() {
				Reqs.cookie();

				if (testMode) {
					self.show($popup, modalDelay, testMode);
				} else {
					//If cookie doesn't exist or it's expired
					if (Cookies.get('newsletter_delay') === undefined || reappearTime == 0){
						self.show($popup, modalDelay, testMode);
						self.createCookie(reappearTime);
					}
				}
			});

			$( window ).on( 'resize', Reqs.debounce( function() {
				var windowWidth = window.innerWidth || document.documentElement.clientWidth,
					hasPopup = $popup.hasClass( 'popup--visible' );

				// Hide popup on mobile if visible
				if ( windowWidth < 768 && hasPopup ) {
					self.hide();
				}
			}, 100 ));

			$popupClose.on( 'click', function() {
				$popup.removeClass( 'popup--visible' );
			});
		}
	},
	show: function($popup, modalDelay, testMode){
		//Only show if it hasn't already been shown during that browser session
		if (sessionStorage.name != "shown" ){
			this.popupTimeout = setTimeout(function() {
				$popup.addClass( 'popup--visible' );
				$popup.find( '.popup__close' ).focus();
			}, modalDelay);

			// Safari Private Browsing Mode shiv
			if (typeof localStorage === 'object') {
				try {
					localStorage.setItem('localStorage', 1);
					localStorage.removeItem('localStorage');
					sessionStorage.name = "shown";
				} catch (e) {
					Storage.prototype._setItem = Storage.prototype.setItem;
					Storage.prototype.setItem = function() {};
				}
			}
		} else if (testMode) {
			this.popupTimeout = setTimeout(function() {
				$popup.addClass( 'popup--visible' );
				$popup.find( '.popup__close' ).focus();
			}, modalDelay);
		}
	},
	hide: function() {
		clearTimeout( this.popupTimeout );
		this.$popup.removeClass( 'popup--visible' );
	},
	createCookie: function(reappearTime){
		if (reappearTime != 0){
			Cookies.set('newsletter_delay', 'value', { expires: reappearTime });
		}
	}
}

var SearchTemplate = {
	init: function() {
		var $image = $( '.collectionBlock-image' );

		if ( window.theme.settings.imageBackgroundSize == 'contain' ) {
			Collection.setBadgePosition( $image );
			$(window).on( 'resize.search', Reqs.debounce( Collection.setBadgePosition.bind( this, $image ), 50));
		}
	}
}
var Search = {
	init: function() {
		var self = this,
			enableSearch = window.theme.settings.enableSearch;

		if ( !enableSearch ) return;

		this.searchForm = $('.nav-search .search-form');
		this.searchContainer = $('.nav-search-container');
		this.searchScroller = $('.nav-search-scroller');
		this.searchResultsContainer = $('#search-results');
		this.searchType = window.theme.settings.searchType;
		this.searchOptionsPrefix = this.searchForm.find('input[name="options[prefix]"]').val();
		this.searchRequest = null;
		this.searchForm.on('keyup', '.nav-search-input', function(e) {
			// Close if escape key pressed
			if ( e.keyCode === slate.utils.keyboardKeys.ESCAPE ) {
				self.close();
				Site.nav.search.close();
			}

			if ( e.keyCode === slate.utils.keyboardKeys.ENTER ) e.preventDefault();

			var query = $(this).val();
			if (query.length) {
				self.request(query);
			} else {
				self.close();
			}
		});
	},
	close: function() {
		this.searchResultsContainer.empty();
		this.searchContainer.removeClass('is-searching');
	},
	request: function(query) {
		var self = this;

		// Kill previous ajax request
		if (this.searchRequest != null) {
			this.searchRequest.abort();
		}

		this.searchResultsContainer.empty();
		this.searchContainer.addClass('is-searching');

		// Do a new ajax request
		this.searchRequest = $.ajax({
			method: 'GET',
			url: window.theme.routes.search_url + '?view=json',
			dataType: 'json',
			data: {
				q: query,
				type: self.searchType,
				options: { prefix: self.searchOptionsPrefix }
			}
		}).done(function(data) {
			self.displaySearchResults(data);
		}).fail(function(data, jqXHR, textStatus, errorThrown) {
			self.displaySearchResults(data);
		});
	},
	displaySearchResults: function(data) {
		var searchResultsContent = this.getResultsContent(data);

		this.searchResultsContainer.html( searchResultsContent );
		this.searchContainer.removeClass( 'is-searching' );

		var $image = $( '.result__image', this.searchResultsContainer );
		if ( window.theme.settings.imageBackgroundSize == 'contain' ) {
			Collection.setBadgePosition( $image );
			$(window).on( 'resize.search', Reqs.debounce( Collection.setBadgePosition.bind( this, $image ), 50));
		}
	},
	getResultsContent: function(data) {
		var searchResults = '',
			searchResultsProducts = '',
			searchResultsPages = '',
			searchResultsArticles = '',
			limitProducts = 4,
			limitPages = 10,
			limitArticles = 10,
			countProducts = 0,
			countPages = 0,
			countArticles = 0,
			viewAllProducts = '',
			searchQuery = $( '.nav-search-input' ).val(),
			searchOptionsPrefix = $( '.nav-search-options' ).val(),
			searchType = window.theme.settings.searchType;

		if ( data.results ) {
			for ( var i = 0; i < data.results.length; i++ ) {
				var title = data.results[i].title,
					url = data.results[i].url,
					price = slate.Currency.formatMoney( data.results[i].price ),
					image = data.results[i].featured_image,
					imageWidths = '295,394,590,700,800,1000,1200,1500,1800,2000,2400',
					imageAspectRatio = data.results[i].image_aspectratio || 1, // Default to 1 if aspect ratio is not defined
					imageBlank = window.theme.icons.blank,
					object_type = data.results[i].object_type,
					sold_out = data.results[i].available ? false : true,
					on_sale = data.results[i].on_sale,
					badge = '',
					badgeText = '',
					badgeClass = ' product-status-flag--' + window.theme.settings.productBadgeStyle,
					badgeStyle = window.theme.settings.productBadgeStyle,
					itemClass = 'result__item';

				if ( window.theme.settings.productTitlePosition == 'center' ) {
					itemClass += ' result__item--center';
				}

				if (object_type == 'product')  {
					if (on_sale || sold_out) {
						badgeClass += on_sale ? ' is-sale' : '';
						badgeClass += sold_out ? ' is-sold-out' : '';

						badge = '<span class="product-status-flag' + badgeClass + '">';
						if (sold_out) {
							badgeText = window.theme.translations.sold_out;
						} else if (on_sale) {
							badgeText = window.theme.translations.on_sale;
						} else if (on_sale && sold_out) {
							badgeText = window.theme.translations.sold_out;
						}
						// New line required to prevent ellipse when style is set to "circle"
						if ( badgeStyle == 'circle' ) badgeText = badgeText.replace(' ', '<br>' );

						badge += badgeText;
						badge += '</span>';
					}
					if ( countProducts < limitProducts ) {
						searchResultsProducts +=
							'<li class="' + itemClass + '">' +
								'<div class="result__image" data-aspectratio="' + imageAspectRatio + '">' +
									'<a href="' + url + '">' +
									'<img class="lazyload" alt="' + title + '"' +
										'src="' + imageBlank + '"' +
										'data-src="' + image.replace( '_1x1.', '_{width}x.' ) + '"' +
										'data-widths="[' + imageWidths + ']"' +
										'data-aspectratio="' + imageAspectRatio + '"' +
										'data-sizes="auto" />' + badge + '</a>' +
								'</div>' +
								'<p class="result__price">' + price + '</p>' +
								'<h3 class="result__title"><a href="' + url + '">' + title + '</a></h3>' +
							'</li>';
					}
					countProducts++;
				} else if (object_type == 'page') {
					if ( countPages < limitPages ) {
						searchResultsPages += '<li class="result__item"><h3 class="result__title"><a href="' + url + '">' + title + '</a></h3></li>';
					}
					countPages++;
				} else if (object_type == 'article') {
					if ( countArticles < limitArticles ) {
						searchResultsArticles += '<li class="result__item"><h3 class="result__title"><a href="' + url + '">' + title + '</a></h3></li>';
					}
					countArticles++;
				}
			}
		}

		// Check for empty results
		searchResultsProducts = countProducts ? searchResultsProducts : '<li class="result__item"><p class="result__title">' + window.theme.translations.no_results + '</p></li>';
		searchResultsPages = countPages ? searchResultsPages : '<li class="result__item"><p class="result__title">' + window.theme.translations.no_results + '</p></li>';
		searchResultsArticles = countArticles ? searchResultsArticles : '<li class="result__item"><p class="result__title">' + window.theme.translations.no_results + '</p></li>';

		// View all products button
		viewAllProducts = countProducts ? '<a href="' + window.theme.routes.search_url + '?type=product&q=' + searchQuery + '&options[prefix]=' + searchOptionsPrefix + '" class="view-all" title="' + window.theme.translations.view_all + '">' + window.theme.icons.arrowLong + '</a>' : '';

		// Always display products
		searchResults +=
			'<div class="results__column results__column--products">' +
				'<div class="results__heading">' +
					'<span>' + window.theme.translations.results_products + ' (' + countProducts + ')</span>' + viewAllProducts +
				'</div>' +
				'<ul class="results__list">' + searchResultsProducts + '</ul>' +
			'</div>';

		// Only display pages if enabled
		if ( searchType.indexOf( 'page' ) > -1 ) {
			searchResults +=
				'<div class="results__column results__column--pages">' +
					'<div class="results__heading">' +
						'<span>' + window.theme.translations.results_pages + ' (' + countPages + ')</span>' +
					'</div>' +
					'<ul class="results__list">' + searchResultsPages + '</ul>' +
				'</div>';
		}
		// Only display articles if enabled
		if ( searchType.indexOf( 'article' ) > -1 ) {
			searchResults +=
				'<div class="results__column results__column--articles">' +
					'<div class="results__heading">' +
						'<span>' + window.theme.translations.results_articles + ' (' + countArticles + ')</span>' +
					'</div>' +
					'<ul class="results__list">' + searchResultsArticles + '</ul>' +
				'</div>';
		}

		return searchResults;
	}
}

var Password = {
	init: function() {
		var $targets = $('.password-signup, .password-login');

		$targets.each( function(){
			var $el = $(this);
			if ( $el.find('div.errors').length ) {
				$el.find('input.password, input.email').select();
			}
		});
	}
}

var Login = {
	init: function() {
		this.bind();

		if (window.location.hash == '#recover') {
			this.recover.show();
		} else {
			this.recover.hide();
		}
	},

	bind: function(){
		$('.js-recoverToggle').on('click', Login.recover.show);
		$('.js-recoverCancel').on('click', Login.recover.hide);
	},

	recover: {
		show: function(e){
			$('.js-loginForm').hide();
			$('.js-recoverForm').show();
			window.location.hash = '#recover';
			return false;
		},
		hide: function(e){
			$('.js-loginForm').show();
			$('.js-recoverForm').hide();
			window.location.hash = '';
			return false;
		}
	}
}

var Addresses = {
	init: function(){
		// Initialize observers on address selectors, defined in shopify_common.js
		if (Shopify.CountryProvinceSelector) {
			new Shopify.CountryProvinceSelector( 'AddressCountryNew', 'AddressProvinceNew', {
				hideElement: 'AddressProvinceContainerNew'
			});
		}

		// Initialize each edit form's country/province selector
		$( '.address-country-option' ).each(function() {
			var formId = $(this).data( 'form-id' );
			var countrySelector = 'AddressCountry_' + formId;
			var provinceSelector = 'AddressProvince_' + formId;
			var containerSelector = 'AddressProvinceContainer_' + formId;

			new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
				hideElement: containerSelector
			});
		});

		// Modified contents of customer_area.js (global asset)
		Shopify.CustomerAddress = {
			toggleForm: function(id) {
				var editEl = document.getElementById('EditAddress_'+id);
				editEl.style.display = editEl.style.display == 'none' ? '' : 'none';
				return false;
			},

			toggleNewForm: function() {
				var el = document.getElementById('AddAddress'),
					toggle = document.getElementById('js-addAddress');
				el.style.display = el.style.display == 'none' ? '' : 'none';
				toggle.style.display = toggle.style.display == 'inline-block' ? 'none' : 'inline-block';
				return false;
			},

			destroy: function(id, confirm_msg) {
				if (confirm(confirm_msg || "Are you sure you wish to delete this address?")) {
					Shopify.postLink('/account/addresses/'+id, {'parameters': {'_method': 'delete'}});
				}
			}
		}
	}
}

/**
 * Slate utilities
 * -----------------------------------------------------------------------------
 * A collection of useful utilities to help build your theme
 *
 *
 * @namespace utils
 */

slate.utils = {
	/**
	 * Get the query params in a Url
	 * Ex
	 * https://mysite.com/search?q=noodles&b
	 * getParameterByName('q') = "noodles"
	 * getParameterByName('b') = "" (empty value)
	 * getParameterByName('test') = null (absent)
	 */
	getParameterByName: function(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[[\]]/g, '\\$&');
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	},

	/**
	 * Return an object from an array of objects that matches the provided key and value
	 *
	 * @param {array} array - Array of objects
	 * @param {string} key - Key to match the value against
	 * @param {string} value - Value to get match of
	 */
	findInstance: function(array, key, value) {
		for (var i = 0; i < array.length; i++) {
			if (array[i][key] === value) {
				return array[i];
			}
		}
	},

	/**
	 * Remove an object from an array of objects by matching the provided key and value
	 *
	 * @param {array} array - Array of objects
	 * @param {string} key - Key to match the value against
	 * @param {string} value - Value to get match of
	 */
	removeInstance: function(array, key, value) {
		var i = array.length;
		while(i--) {
			if (array[i][key] === value) {
				array.splice(i, 1);
				break;
			}
		}

		return array;
	},

	/**
	 * _.compact from lodash
	 * Remove empty/false items from array
	 * Source: https://github.com/lodash/lodash/blob/master/compact.js
	 *
	 * @param {array} array
	 */
	compact: function(array) {
		var index = -1;
		var length = array == null ? 0 : array.length;
		var resIndex = 0;
		var result = [];

		while (++index < length) {
			var value = array[index];
			if (value) {
				result[resIndex++] = value;
			}
		}
		return result;
	},

	/**
	 * _.defaultTo from lodash
	 * Checks `value` to determine whether a default value should be returned in
	 * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
	 * or `undefined`.
	 * Source: https://github.com/lodash/lodash/blob/master/defaultTo.js
	 *
	 * @param {*} value - Value to check
	 * @param {*} defaultValue - Default value
	 * @returns {*} - Returns the resolved value
	 */
	defaultTo: function(value, defaultValue) {
		return (value == null || value !== value) ? defaultValue : value
	},

	keyboardKeys: {
		TAB: 9,
		ENTER: 13,
		ESCAPE: 27,
		LEFTARROW: 37,
		RIGHTARROW: 39
	}
};

slate.a11y = {
	/**
	 * For use when focus shifts to a container rather than a link
	 * eg for In-page links, after scroll, focus shifts to content area so that
	 * next `tab` is where user expects if focusing a link, just $link.focus();
	 *
	 * @param {JQuery} $element - The element to be acted upon
	 */
	pageLinkFocus: function($element) {
		var focusClass = 'js-focus-hidden';

		$element
			.first()
			.attr('tabIndex', '-1')
			.focus()
			.addClass(focusClass)
			.one('blur', callback);

		function callback() {
			$element
				.first()
				.removeClass(focusClass)
				.removeAttr('tabindex');
		}
	},

	/**
	 * If there's a hash in the url, focus the appropriate element
	 */
	focusHash: function() {
		var hash = window.location.hash;

		// is there a hash in the url? is it an element on the page?
		if (hash && document.getElementById(hash.slice(1))) {
			this.pageLinkFocus($(hash));
		}
	},

	/**
	 * When an in-page (url w/hash) link is clicked, focus the appropriate element
	 */
	bindInPageLinks: function() {
		$('a[href*=#]').on(
			'click',
			function(evt) {
				this.pageLinkFocus($(evt.currentTarget.hash));
			}.bind(this)
		);
	},

	/**
	 * Traps the focus in a particular container
	 *
	 * @param {object} options - Options to be used
	 * @param {jQuery} options.$container - Container to trap focus within
	 * @param {jQuery} options.$elementToFocus - Element to be focused when focus leaves container
	 * @param {string} options.namespace - Namespace used for new focus event handler
	 */
	trapFocus: function(options) {
		var eventsName = {
			focusin: options.namespace ? 'focusin.' + options.namespace : 'focusin',
			focusout: options.namespace
				? 'focusout.' + options.namespace
				: 'focusout',
			keydown: options.namespace
				? 'keydown.' + options.namespace
				: 'keydown.handleFocus'
		};

		/**
		 * Get every possible visible focusable element
		 */
		var $focusableElements = options.$container.find(
			$(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex^="-"])'
			).filter(':visible')
		);
		var firstFocusable = $focusableElements[0];
		var lastFocusable = $focusableElements[$focusableElements.length - 1];

		if (!options.$elementToFocus) {
			options.$elementToFocus = options.$container;
		}

		function _manageFocus(evt) {
			if (evt.keyCode !== slate.utils.keyboardKeys.TAB) return;

			/**
			 * On the last focusable element and tab forward,
			 * focus the first element.
			 */
			if (evt.target === lastFocusable && !evt.shiftKey) {
				evt.preventDefault();
				firstFocusable.focus();
			}
			/**
			 * On the first focusable element and tab backward,
			 * focus the last element.
			 */
			if (evt.target === firstFocusable && evt.shiftKey) {
				evt.preventDefault();
				lastFocusable.focus();
			}
		}

		options.$container.attr('tabindex', '-1');
		options.$elementToFocus.focus();

		$(document).off('focusin');

		$(document).on(eventsName.focusout, function() {
			$(document).off(eventsName.keydown);
		});

		$(document).on(eventsName.focusin, function(evt) {
			if (evt.target !== lastFocusable && evt.target !== firstFocusable) return;

			$(document).on(eventsName.keydown, function(evt) {
				_manageFocus(evt);
			});
		});
	},

	/**
	 * Removes the trap of focus in a particular container
	 *
	 * @param {object} options - Options to be used
	 * @param {jQuery} options.$container - Container to trap focus within
	 * @param {string} options.namespace - Namespace used for new focus event handler
	 */
	removeTrapFocus: function(options) {
		var eventName = options.namespace
			? 'focusin.' + options.namespace
			: 'focusin';

		if (options.$container && options.$container.length) {
			options.$container.removeAttr('tabindex');
		}

		$(document).off(eventName);
	},

	/**
	 * Add aria-describedby attribute to external and new window links
	 *
	 * @param {object} options - Options to be used
	 * @param {object} options.messages - Custom messages to be used
	 * @param {jQuery} options.$links - Specific links to be targeted
	 */
	accessibleLinks: function(options) {
		var body = document.querySelector('body');

		var idSelectors = {
			newWindow: 'a11y-new-window-message',
			external: 'a11y-external-message',
			newWindowExternal: 'a11y-new-window-external-message'
		};

		if (options.$links === undefined || !options.$links.jquery) {
			options.$links = $('a[href]:not([aria-describedby])');
		}

		function generateHTML(customMessages) {
			if (typeof customMessages !== 'object') {
				customMessages = {};
			}

			var messages = $.extend(
				{
					newWindow: 'Opens in a new window.',
					external: 'Opens external website.',
					newWindowExternal: 'Opens external website in a new window.'
				},
				customMessages
			);

			var container = document.createElement('ul');
			var htmlMessages = '';

			for (var message in messages) {
				htmlMessages +=
					'<li id=' + idSelectors[message] + '>' + messages[message] + '</li>';
			}

			container.setAttribute('hidden', true);
			container.innerHTML = htmlMessages;

			body.appendChild(container);
		}

		function _externalSite($link) {
			var hostname = window.location.hostname;

			return $link[0].hostname !== hostname;
		}

		$.each(options.$links, function() {
			var $link = $(this);
			var target = $link.attr('target');
			var rel = $link.attr('rel');
			var isExternal = _externalSite($link);
			var isTargetBlank = target === '_blank';

			if (isExternal) {
				$link.attr('aria-describedby', idSelectors.external);
			}
			if (isTargetBlank) {
				if (rel === undefined || rel.indexOf('noopener') === -1) {
					$link.attr('rel', function(i, val) {
						var relValue = val === undefined ? '' : val + ' ';
						return relValue + 'noopener';
					});
				}
				$link.attr('aria-describedby', idSelectors.newWindow);
			}
			if (isExternal && isTargetBlank) {
				$link.attr('aria-describedby', idSelectors.newWindowExternal);
			}
		});

		generateHTML(options.messages);
	}
};

/**
 * Variant Selection scripts
 * ------------------------------------------------------------------------------
 *
 * Handles change events from the variant inputs in any `cart/add` forms that may
 * exist. Also updates the master select and triggers updates when the variants
 * price or image changes.
 *
 * @namespace variants
 */

slate.Variants = (function() {

	/**
	 * Variant constructor
	 *
	 * @param {object} options - Settings from `product.js`
	 */
	function Variants(options) {
		this.$container = options.$container;
		this.product = options.product;
		this.singleOptionSelector = options.singleOptionSelector;
		this.originalSelectorId = options.originalSelectorId;
		this.enableHistoryState = options.enableHistoryState;
		this.currentVariant = this._getVariantFromOptions();

		$(this.singleOptionSelector, this.$container).on('change', this._onSelectChange.bind(this));
	}

	Variants.prototype = $.extend({}, Variants.prototype, {

		/**
		 * Get the currently selected options from add-to-cart form. Works with all
		 * form input elements.
		 *
		 * @return {array} options - Values of currently selected variants
		 */
		_getCurrentOptions: function() {
			var currentOptions = $.map($(this.singleOptionSelector, this.$container), function(element) {
				var $element = $(element);
				var type = $element.attr('type');
				var currentOption = {};

				if (type === 'radio' || type === 'checkbox') {
					if ($element[0].checked) {
						currentOption.value = $element.val();
						currentOption.index = $element.data('index');

						return currentOption;
					} else {
						return false;
					}
				} else {
					currentOption.value = $element.val();
					currentOption.index = $element.data('index');

					return currentOption;
				}
			});

			// remove any unchecked input values if using radio buttons or checkboxes
			currentOptions = slate.utils.compact(currentOptions);

			return currentOptions;
		},

		/**
		 * Find variant based on selected values.
		 *
		 * @param  {array} selectedValues - Values of variant inputs
		 * @return {object || undefined} found - Variant object from product.variants
		 */
		_getVariantFromOptions: function() {
			var selectedValues = this._getCurrentOptions();
			var variants = this.product.variants;
			var found = false;

			variants.forEach(function(variant) {
				var satisfied = true;

				selectedValues.forEach(function(option) {
					if (satisfied) {
						satisfied = (option.value === variant[option.index]);
					}
				});

				if (satisfied) {
					found = variant;
				}
			});

			return found || null;
		},

		/**
		 * Event handler for when a variant input changes.
		 */
		_onSelectChange: function() {
			var variant = this._getVariantFromOptions();

			this.$container.trigger({
				type: 'variantChange',
				variant: variant
			});

			if (!variant) {
				return;
			}

			this._updateMasterSelect(variant);
			this._updateImages(variant);
			this._updatePrice(variant);
			this._updateUnits(variant);
			this.currentVariant = variant;

			if (this.enableHistoryState) {
				this._updateHistoryState(variant);
			}
		},

		/**
		 * Trigger event when variant image changes
		 *
		 * @param  {object} variant - Currently selected variant
		 * @return {event}  variantImageChange
		 */
		_updateImages: function(variant) {
			var variantImage = variant.featured_image || {};
			var currentVariantImage = this.currentVariant.featured_image || {};

			if (!variant.featured_image || variantImage.src === currentVariantImage.src) {
				return;
			}

			this.$container.trigger({
				type: 'variantImageChange',
				variant: variant
			});
		},

		/**
		 * Trigger event when variant price changes.
		 *
		 * @param  {object} variant - Currently selected variant
		 * @return {event} variantPriceChange
		 */
		_updatePrice: function(variant) {
			if (variant.price === this.currentVariant.price && variant.compare_at_price === this.currentVariant.compare_at_price) {
				return;
			}

			this.$container.trigger({
				type: 'variantPriceChange',
				variant: variant
			});
		},

		/**
		 * Trigger event when variant price per unit changes.
		 *
		 * @param  {object} variant - Currently selected variant
		 * @return {event} variantUnitChange
		 */
		_updateUnits: function(variant) {
			this.$container.trigger({
				type: 'variantUnitChange',
				variant: variant
			});
		},

		/**
		 * Update history state for product deeplinking
		 *
		 * @param {object} variant - Currently selected variant
		 */
		_updateHistoryState: function(variant) {
			if (!history.replaceState || !variant) {
				return;
			}

			var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
			window.history.replaceState({path: newurl}, '', newurl);
		},

		/**
		 * Update hidden master select of variant change
		 *
		 * @param {object} variant - Currently selected variant
		 */
		_updateMasterSelect: function(variant) {
			$(this.originalSelectorId, this.$container)[0].value = variant.id;
		}
	});

	return Variants;
})();
/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 * Alternatives
 * - Accounting.js - http://openexchangerates.github.io/accounting.js/
 *
 */

slate.Currency = (function() {
	var moneyFormat = '${{amount}}'; // eslint-disable-line camelcase

	function formatMoney(cents, format) {
		if (typeof cents === 'string') {
			cents = cents.replace('.', '');
		}
		var value = '';
		var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
		var formatString = format || moneyFormat;

		function formatWithDelimiters(number, precision, thousands, decimal) {
			thousands = thousands || ',';
			decimal = decimal || '.';

			if (isNaN(number) || number === null) {
				return 0;
			}

			number = (number / 100.0).toFixed(precision);

			var parts = number.split('.');
			var dollarsAmount = parts[0].replace(
				/(\d)(?=(\d\d\d)+(?!\d))/g,
				'$1' + thousands
			);
			var centsAmount = parts[1] ? decimal + parts[1] : '';

			return dollarsAmount + centsAmount;
		}

		switch (formatString.match(placeholderRegex)[1]) {
			case 'amount':
				value = formatWithDelimiters(cents, 2);
				break;
			case 'amount_no_decimals':
				value = formatWithDelimiters(cents, 0);
				break;
			case 'amount_with_comma_separator':
				value = formatWithDelimiters(cents, 2, '.', ',');
				break;
			case 'amount_no_decimals_with_comma_separator':
				value = formatWithDelimiters(cents, 0, '.', ',');
				break;
			case 'amount_no_decimals_with_space_separator':
				value = formatWithDelimiters(cents, 0, ' ');
				break;
			case 'amount_with_apostrophe_separator':
				value = formatWithDelimiters(cents, 2, "'");
				break;
		}

		return formatString.replace(placeholderRegex, value);
	}

	return {
		formatMoney: formatMoney
	};
})();

var Disclosure = (function() {
	var selectors = {
		disclosureList: '[data-disclosure-list]',
		disclosureToggle: '[data-disclosure-toggle]',
		disclosureInput: '[data-disclosure-input]',
		disclosureOptions: '[data-disclosure-option]'
	};

	var classes = {
		listVisible: 'disclosure-list--visible'
	};

	function Disclosure($disclosure) {
		this.$container = $disclosure;
		this.cache = {};
		this._cacheSelectors();
		this._connectOptions();
		this._connectToggle();
		this._onFocusOut();
	}

	Disclosure.prototype = $.extend({}, Disclosure.prototype, {
		_cacheSelectors: function() {
			this.cache = {
				$disclosureList: this.$container.find(selectors.disclosureList),
				$disclosureToggle: this.$container.find(selectors.disclosureToggle),
				$disclosureInput: this.$container.find(selectors.disclosureInput),
				$disclosureOptions: this.$container.find(selectors.disclosureOptions)
			};
		},

		_connectToggle: function() {
			this.cache.$disclosureToggle.on(
				'click',
				function(evt) {
					var ariaExpanded = $(evt.currentTarget).attr('aria-expanded') === 'true';
					$(evt.currentTarget).attr('aria-expanded', !ariaExpanded);

					this.cache.$disclosureList.toggleClass(classes.listVisible);
					evt.preventDefault();
				}.bind(this)
			);
		},

		_connectOptions: function() {
			this.cache.$disclosureOptions.on(
				'click',
				function(evt) {
					this._submitForm($(evt.currentTarget).data('value'));
					evt.preventDefault();
				}.bind(this)
			);
		},

		_onFocusOut: function() {
			this.cache.$disclosureToggle.on(
				'focusout',
				function(evt) {
					var disclosureLostFocus =
						this.$container.has(evt.relatedTarget).length === 0;

					if (disclosureLostFocus) {
						this._hideList();
					}
				}.bind(this)
			);

			this.cache.$disclosureList.on(
				'focusout',
				function(evt) {
					var childInFocus =
						$(evt.currentTarget).has(evt.relatedTarget).length > 0;
					var isVisible = this.cache.$disclosureList.hasClass(
						classes.listVisible
					);

					if (isVisible && !childInFocus) {
						this._hideList();
					}
				}.bind(this)
			);

			this.$container.on(
				'keyup',
				function(evt) {
					if (evt.which !== slate.utils.keyboardKeys.ESCAPE) return;
					this._hideList();
					this.cache.$disclosureToggle.focus();
				}.bind(this)
			);

			this.bodyOnClick = function(evt) {
				var isOption = this.$container.has(evt.target).length > 0;
				var isVisible = this.cache.$disclosureList.hasClass(
					classes.listVisible
				);

				if (isVisible && !isOption) {
					this._hideList();
				}
			}.bind(this);

			$('body').on('click', this.bodyOnClick);
		},

		_submitForm: function(value) {
			this.cache.$disclosureInput.val(value);
			this.$container.parents('form').submit();
		},

		_hideList: function() {
			this.cache.$disclosureList.removeClass(classes.listVisible);
			this.cache.$disclosureToggle.attr('aria-expanded', false);
		},

		unload: function() {
			$('body').off('click', this.bodyOnClick);
			this.cache.$disclosureOptions.off();
			this.cache.$disclosureToggle.off();
			this.cache.$disclosureList.off();
			this.$container.off();
		}
	});

	return Disclosure;
})();

theme.StoreAvailability = (function() {
	var selectors = {
		body: 'body',
		storeAvailabilityModal: '[data-store-availability-modal]',
		storeAvailabilityModalOpen: '[data-store-availability-modal-open]',
		storeAvailabilityModalProductTitle: '[data-store-availability-modal-product-title]',
		storeAvailabilityUnitSystem: '[data-unit-system]',
		storeAvailabilityLocationDistance: '[data-distance]',
		storeAvailabilityDistanceUnit: '[data-distance-unit]'
	};

	var classes = {
		hidden: 'visually-hidden'
	};

	function StoreAvailability(container) {
		this.container = container;
	}

	StoreAvailability.prototype = Object.assign({}, StoreAvailability.prototype, {
		updateContent: function(variantId, productTitle) {
			var options = {
				maximumAge: 3600000, // 1 hour
				timeout: 5000
			};
			var self = this;
			// Not all browsers have geolocation API
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					// success callback
					function(position) {
						self._useGeolocation(position, variantId, productTitle);
					},
					// failure callback
					function() {
						self._fetchStoreAvailabilities(variantId, productTitle);
					},
					options
				);
			} else {
				this._fetchStoreAvailabilities(variantId, productTitle);
			}
		},

		clearContent: function() {
			this.container.innerHTML = '';
		},

		_initModal: function() {
			return new theme.Modals(
				'StoreAvailabilityModal',
				'store-availability-modal',
				{
					close: '.js-modal-close-store-availability-modal',
					closeModalOnClick: true,
					openClass: 'store-availabilities-modal--active',
					scrollIntoView: true
				}
			);
		},

		_useGeolocation: function(position, variantId, productTitle) {
			var coordinates = position.coords;
			var latitude = coordinates.latitude;
			var longitude = coordinates.longitude;
			if (theme.Helpers.cookiesEnabled()) {
				var latitudeFromCookie = theme.Helpers.getCookie('latitude');
				var longitudeFromCookie = theme.Helpers.getCookie('longitude');
				if (
					latitudeFromCookie &&
					longitudeFromCookie &&
					parseFloat(latitudeFromCookie) === latitude &&
					parseFloat(longitudeFromCookie) === longitude
				) {
					this._fetchStoreAvailabilities(
						variantId,
						productTitle,
						latitude,
						longitude
					);
				} else {
					var oneHour = 1 / 24;
					theme.Helpers.setCookie('latitude', latitude, oneHour);
					theme.Helpers.setCookie('longitude', longitude, oneHour);
					this._setBuyerLocation(latitude, longitude, variantId, productTitle);
				}
			} else {
				this._fetchStoreAvailabilities(variantId, productTitle);
			}
		},

		_setBuyerLocation: function(latitude, longitude, variantId, productTitle) {
			var self = this;
			fetch('/localization.json', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ latitude: latitude, longitude: longitude })
			}).then(function() {
				self._fetchStoreAvailabilities(
					variantId,
					productTitle,
					latitude,
					longitude
				);
			});
		},

		_fetchStoreAvailabilities: function(
			variantId,
			productTitle,
			latitude,
			longitude
		) {
			var variantSectionUrl =
				'/variants/' + variantId + '/?section_id=store-availability';
			this.clearContent();
			var self = this;
			fetch(variantSectionUrl)
				.then(function(response) {
					return response.text();
				})
				.then(function(storeAvailabilityHTML) {
					if (storeAvailabilityHTML.trim() === '') {
						return;
					}

					var body = document.querySelector( selectors.body );
					var storeAvailabilityModal = body.querySelector( selectors.storeAvailabilityModal );

					if ( storeAvailabilityModal ) {
						storeAvailabilityModal.remove();
					}

					self.container.innerHTML = storeAvailabilityHTML;
					self.container.innerHTML = self.container.firstElementChild.innerHTML;

					var storeAvailabilityModalOpen = self.container.querySelector(
						selectors.storeAvailabilityModalOpen
					);
					// Only create modal if open modal element exists
					if (!storeAvailabilityModalOpen) {
						return;
					}

					self.modal = self._initModal();
					self._updateProductTitle(productTitle);
					if (latitude && longitude) {
						self._updateLocationDistances(latitude, longitude);
					} else {
						self._hideDistanceUnits();
					}

					var storeAvailabilityModal = self.container.querySelector( selectors.storeAvailabilityModal );

					if ( storeAvailabilityModal ) {
						body.appendChild( storeAvailabilityModal );
					}
				});
		},

		_updateProductTitle: function(productTitle) {
			var storeAvailabilityModalProductTitle = this.container.querySelector(
				selectors.storeAvailabilityModalProductTitle
			);
			storeAvailabilityModalProductTitle.textContent = productTitle;
		},

		// Haversine Distance
		// The haversine formula is an equation giving great-circle distances between
		// two points on a sphere from their longitudes and latitudes
		_calculateDistance: function(
			latitude1,
			longitude1,
			latitude2,
			longitude2,
			unitSystem
		) {
			var dtor = Math.PI / 180;
			var radius = unitSystem === 'metric' ? 6378.14 : 3959;

			var rlat1 = latitude1 * dtor;
			var rlong1 = longitude1 * dtor;
			var rlat2 = latitude2 * dtor;
			var rlong2 = longitude2 * dtor;

			var dlon = rlong1 - rlong2;
			var dlat = rlat1 - rlat2;

			var a =
				Math.pow(Math.sin(dlat / 2), 2) +
				Math.cos(rlat1) * Math.cos(rlat2) * Math.pow(Math.sin(dlon / 2), 2);
			var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
			return radius * c;
		},

		_updateLocationDistances: function(latitude, longitude) {
			var countryCode = document.querySelector(
				selectors.storeAvailabilityUnitSystem
			);
			var unitSystem = countryCode.dataset.unitSystem;
			var allDistances = document.querySelectorAll(
				selectors.storeAvailabilityLocationDistance
			);
			var allDistancesArray = Array.from(allDistances);
			var self = this;
			allDistancesArray.forEach(function(locationDistance) {
				var distance = self
					._calculateDistance(
						latitude,
						longitude,
						parseFloat(locationDistance.dataset.latitude),
						parseFloat(locationDistance.dataset.longitude),
						unitSystem
					)
					.toFixed(1);
				locationDistance.innerHTML = distance;
			});
		},

		_hideDistanceUnits: function() {
			var distanceUnits = document.querySelectorAll(
				selectors.storeAvailabilityDistanceUnit
			);

			if (!distanceUnits) {
				return;
			}

			var distanceUnitsArray = Array.from(distanceUnits);
			distanceUnitsArray.forEach(function(distanceUnit) {
				distanceUnit.classList.add(classes.hidden);
			});
		}
	});

	return StoreAvailability;
})();

theme.Modals = (function() {
	function Modal(id, name, options) {
		var defaults = {
			close: '.js-modal-close',
			open: '.js-modal-open-' + name,
			openClass: 'modal--is-active',
			openBodyClass: 'modal--is-visible',
			closeModalOnClick: false,
			scrollIntoView: false
		};

		this.modal = document.getElementById(id);

		if (!this.modal) return false;

		this.nodes = {
			parents: [document.querySelector('html'), document.body]
		};

		this.config = Object.assign(defaults, options);

		this.modalIsOpen = false;

		this.focusOnOpen = this.config.focusOnOpen
			? document.getElementById(this.config.focusOnOpen)
			: this.modal;

		this.openElement = document.querySelector(this.config.open);
		this.init();
	}

	Modal.prototype.init = function() {
		this.openElement.addEventListener('click', this.open.bind(this));

		this.modal
			.querySelector(this.config.close)
			.addEventListener('click', this.closeModal.bind(this));
	};

	Modal.prototype.open = function(evt) {
		var self = this;

		// Keep track if modal was opened from a click, or called by another function
		var externalCall = false;

		if (this.modalIsOpen) return;

		// Prevent following href if link is clicked
		if (evt) {
			evt.preventDefault();
		} else {
			externalCall = true;
		}

		// Without this, the modal opens, the click event bubbles up
		// which closes the modal.
		if (evt && evt.stopPropagation) {
			evt.stopPropagation();
		}

		if (this.modalIsOpen && !externalCall) {
			this.closeModal();
		}

		this.modal.classList.add(this.config.openClass);

		this.nodes.parents.forEach(function(node) {
			node.classList.add(self.config.openBodyClass);
		});

		this.modalIsOpen = true;

		var scrollableElement = document.querySelector( '.store-availabilities-list' );
		scrollLock.disablePageScroll( scrollableElement );

		slate.a11y.trapFocus({
			$container: $(this.modal),
			$elementToFocus: $(this.focusOnOpen)
		});

		if (this.config.scrollIntoView) {
			this.scrollIntoView();
		}

		this.bindEvents();
	};

	Modal.prototype.closeModal = function() {
		if (!this.modalIsOpen) return;

		document.activeElement.blur();

		this.modal.classList.remove(this.config.openClass);

		var self = this;
		var scrollableElement = document.querySelector( '.store-availabilities-list' );
		scrollLock.enablePageScroll( scrollableElement );

		this.nodes.parents.forEach(function(node) {
			node.classList.remove(self.config.openBodyClass);
		});

		this.modalIsOpen = false;

		slate.a11y.removeTrapFocus({
			$container: $(this.modal)
		});

		this.openElement.focus();

		this.unbindEvents();
	};

	Modal.prototype.bindEvents = function() {
		this.keyupHandler = this.keyupHandler.bind(this);
		this.clickHandler = this.clickHandler.bind(this);
		document.body.addEventListener('keyup', this.keyupHandler);
		document.body.addEventListener('click', this.clickHandler);
	};

	Modal.prototype.unbindEvents = function() {
		document.body.removeEventListener('keyup', this.keyupHandler);
		document.body.removeEventListener('click', this.clickHandler);
	};

	Modal.prototype.keyupHandler = function(event) {
		if (event.keyCode === 27) {
			this.closeModal();
		}
	};

	Modal.prototype.clickHandler = function(event) {
		if (this.config.closeModalOnClick && !this.modal.contains(event.target)) {
			this.closeModal();
		}
	};

	Modal.prototype.scrollIntoView = function() {
		this.focusOnOpen.scrollIntoView({
			behavior: 'smooth'
		});
	};

	return Modal;
})();

theme.Helpers = (function() {
	function cookiesEnabled() {
		var cookieEnabled = navigator.cookieEnabled;

		if (!cookieEnabled) {
			document.cookie = 'testcookie';
			cookieEnabled = document.cookie.indexOf('testcookie') !== -1;
		}

		return cookieEnabled;
	}

	function setCookie(name, value, days) {
		var expires = '';
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
			expires = '; expires=' + date.toUTCString();
		}
		document.cookie = name + '=' + (value || '') + expires + '; path=/';
	}

	function getCookie(name) {
		var cookie = document.cookie.split('; ').find(function(row) {
			return row.startsWith(name);
		});

		if (cookie) {
			return cookie.split('=')[1];
		} else {
			return null;
		}
	}

	return {
		cookiesEnabled: cookiesEnabled,
		setCookie: setCookie,
		getCookie: getCookie
	};
})();