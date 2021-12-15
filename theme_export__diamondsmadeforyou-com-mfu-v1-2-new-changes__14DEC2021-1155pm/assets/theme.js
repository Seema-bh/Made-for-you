/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
/* jQuery v3.6.0 End */

/*! js-cookie v3.0.0-beta.3 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,r=e.Cookies=t();r.noConflict=function(){return e.Cookies=n,r}}())}(this,function(){"use strict";var e={read:function(e){return e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function t(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}return function n(r,o){function i(e,n,i){if("undefined"!=typeof document){"number"==typeof(i=t({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),n=r.write(n,e),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=e+"="+n+c}}return Object.create({set:i,get:function(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var n=document.cookie?document.cookie.split("; "):[],o={},i=0;i<n.length;i++){var c=n[i].split("="),u=c.slice(1).join("=");'"'===u[0]&&(u=u.slice(1,-1));try{var f=e.read(c[0]);if(o[f]=r.read(u,f),t===f)break}catch(e){}}return t?o[t]:o}},remove:function(e,n){i(e,"",t({},n,{expires:-1}))},withAttributes:function(e){return n(this.converter,t({},this.attributes,e))},withConverter:function(e){return n(t({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(r)}})}(e,{path:"/"})});
/*! js-cookie v3.0.0-rc.1 end */

/* slick slider Version: 1.9.0 */
  (function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)})(function(i){"use strict";var e=window.Slick||{};e=function(){function e(e,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(e),appendDots:i(e),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(e),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(e).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,"undefined"!=typeof document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=t++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}var t=0;return e}(),e.prototype.activateADA=function(){var i=this;i.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):o===!0?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),s.options.rtl===!0&&s.options.vertical===!1&&(e=-e),s.transformsEnabled===!1?s.options.vertical===!1?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):s.cssTransitions===!1?(s.options.rtl===!0&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),s.options.vertical===!1?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),s.options.vertical===!1?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this,o=t.getNavTarget();null!==o&&"object"==typeof o&&o.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};e.options.fade===!1?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(i.options.infinite===!1&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1===0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;e.options.arrows===!0&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),e.options.infinite!==!0&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(o.options.dots===!0&&o.slideCount>o.options.slidesToShow){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),e.options.centerMode!==!0&&e.options.swipeToSlide!==!0||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.options.draggable===!0&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>0){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(r.originalSettings.mobileFirst===!1?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||l===!1||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!==0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t,o=this;if(e=o.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var s in e){if(i<e[s]){i=t;break}t=e[s]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),e.options.accessibility===!0&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),e.options.accessibility===!0&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),e.options.accessibility===!0&&e.$list.off("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>0&&(i=e.$slides.children().children(),i.removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){var e=this;e.shouldClick===!1&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;t.cssTransitions===!1?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;e.cssTransitions===!1?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick","*",function(t){var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&o.is(":focus")&&(e.focussed=!0,e.autoPlay())},0)}).on("blur.slick","*",function(t){i(this);e.options.pauseOnFocus&&(e.focussed=!1,e.autoPlay())})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){var i=this;return i.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(i.options.infinite===!0)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(i.options.centerMode===!0)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),n.options.infinite===!0?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,n.options.vertical===!0&&n.options.centerMode===!0&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!==0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),n.options.centerMode===!0&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:n.options.centerMode===!0&&n.options.infinite===!0?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:n.options.centerMode===!0&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=n.options.vertical===!1?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,n.options.variableWidth===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=n.options.rtl===!0?o[0]?(n.$slideTrack.width()-o[0].offsetLeft-o.width())*-1:0:o[0]?o[0].offsetLeft*-1:0,n.options.centerMode===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=n.options.rtl===!0?o[0]?(n.$slideTrack.width()-o[0].offsetLeft-o.width())*-1:0:o[0]?o[0].offsetLeft*-1:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){var e=this;return e.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(e.options.infinite===!1?i=e.slideCount:(t=e.options.slidesToScroll*-1,o=e.options.slidesToScroll*-1,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o,s,n=this;return s=n.options.centerMode===!0?Math.floor(n.$list.width()/2):0,o=n.swipeLeft*-1+s,n.options.swipeToSlide===!0?(n.$slideTrack.find(".slick-slide").each(function(e,s){var r,l,d;if(r=i(s).outerWidth(),l=s.offsetLeft,n.options.centerMode!==!0&&(l+=r/2),d=l+r,o<d)return t=s,!1}),e=Math.abs(i(t).attr("data-slick-index")-n.currentSlide)||1):n.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){var t=this;t.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),t.options.accessibility===!0&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);if(i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),s!==-1){var n="slick-slide-control"+e.instanceUid+s;i("#"+n).length&&i(this).attr({"aria-describedby":n})}}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.options.focusOnChange?e.$slides.eq(s).attr({tabindex:"0"}):e.$slides.eq(s).removeAttr("tabindex");e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),i.options.accessibility===!0&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),e.options.accessibility===!0&&e.$dots.on("keydown.slick",e.keyHandler)),e.options.dots===!0&&e.options.pauseOnDotsHover===!0&&e.slideCount>e.options.slidesToShow&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),e.options.accessibility===!0&&e.$list.on("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&e.options.accessibility===!0?e.changeSlide({data:{message:e.options.rtl===!0?"next":"previous"}}):39===i.keyCode&&e.options.accessibility===!0&&e.changeSlide({data:{message:e.options.rtl===!0?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||r.$slider.attr("data-sizes"),n=document.createElement("img");n.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),r.$slider.trigger("lazyLoaded",[r,e,t])})},n.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,e,t])},n.src=t})}var t,o,s,n,r=this;if(r.options.centerMode===!0?r.options.infinite===!0?(s=r.currentSlide+(r.options.slidesToShow/2+1),n=s+r.options.slidesToShow+2):(s=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),n=2+(r.options.slidesToShow/2+1)+r.currentSlide):(s=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,n=Math.ceil(s+r.options.slidesToShow),r.options.fade===!0&&(s>0&&s--,n<=r.slideCount&&n++)),t=r.$slider.find(".slick-slide").slice(s,n),"anticipated"===r.options.lazyLoad)for(var l=s-1,d=n,a=r.$slider.find(".slick-slide"),c=0;c<r.options.slidesToScroll;c++)l<0&&(l=r.slideCount-1),t=t.add(a.eq(l)),t=t.add(a.eq(d)),l--,d++;e(t),r.slideCount<=r.options.slidesToShow?(o=r.$slider.find(".slick-slide"),e(o)):r.currentSlide>=r.slideCount-r.options.slidesToShow?(o=r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow),e(o)):0===r.currentSlide&&(o=r.$slider.find(".slick-cloned").slice(r.options.slidesToShow*-1),e(o))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){var i=this;i.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;if(!t.unslicked&&(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),t.options.accessibility===!0&&(t.initADA(),t.options.focusOnChange))){var o=i(t.$slides.get(t.currentSlide));o.attr("tabindex",0).focus()}},e.prototype.prev=e.prototype.slickPrev=function(){var i=this;i.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),r=document.createElement("img"),r.onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),l.options.adaptiveHeight===!0&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;return"boolean"==typeof i?(e=i,i=e===!0?0:o.slideCount-1):i=e===!0?--i:i,!(o.slideCount<1||i<0||i>o.slideCount-1)&&(o.unload(),t===!0?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,void o.reinit())},e.prototype.setCSS=function(i){var e,t,o=this,s={};o.options.rtl===!0&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,o.transformsEnabled===!1?o.$slideTrack.css(s):(s={},o.cssTransitions===!1?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;i.options.vertical===!1?i.options.centerMode===!0&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),i.options.centerMode===!0&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),i.options.vertical===!1&&i.options.variableWidth===!1?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):i.options.variableWidth===!0?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();i.options.variableWidth===!1&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,t.options.rtl===!0?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":"undefined"!=typeof arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),i.options.fade===!1?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=i.options.vertical===!0?"top":"left",
  "top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||i.options.useCSS===!0&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&i.animType!==!1&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&i.animType!==!1},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),n.options.centerMode===!0){var r=n.options.slidesToShow%2===0?1:0;e=Math.floor(n.options.slidesToShow/2),n.options.infinite===!0&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=n.options.infinite===!0?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(s.options.fade===!0&&(s.options.centerMode=!1),s.options.infinite===!0&&s.options.fade===!1&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=s.options.centerMode===!0?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));return s||(s=0),t.slideCount<=t.options.slidesToShow?void t.slideHandler(s,!1,!0):void t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(a.animating===!0&&a.options.waitForAnimate===!0||a.options.fade===!0&&a.currentSlide===i))return e===!1&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,a.options.infinite===!1&&a.options.centerMode===!1&&(i<0||i>a.getDotCount()*a.options.slidesToScroll)?void(a.options.fade===!1&&(o=a.currentSlide,t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o))):a.options.infinite===!1&&a.options.centerMode===!0&&(i<0||i>a.slideCount-a.options.slidesToScroll)?void(a.options.fade===!1&&(o=a.currentSlide,t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o))):(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!==0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!==0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=a.getNavTarget(),l=l.slick("getSlick"),l.slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide)),a.updateDots(),a.updateArrows(),a.options.fade===!0?(t!==!0?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight()):void(t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)))},e.prototype.startLoad=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),o=Math.round(180*t/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0?s.options.rtl===!1?"left":"right":o<=360&&o>=315?s.options.rtl===!1?"left":"right":o>=135&&o<=225?s.options.rtl===!1?"right":"left":s.options.verticalSwiping===!0?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(o.touchObject.edgeHit===!0&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(e.options.swipe===!1||"ontouchend"in document&&e.options.swipe===!1||e.options.draggable===!1&&i.type.indexOf("mouse")!==-1))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,e.options.verticalSwiping===!0&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(l.options.verticalSwiping===!0&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(l.options.rtl===!1?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),l.options.verticalSwiping===!0&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,l.options.infinite===!1&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),l.options.vertical===!1?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,l.options.verticalSwiping===!0&&(l.swipeLeft=e+o*s),l.options.fade!==!0&&l.options.touchMove!==!1&&(l.animating===!0?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;return t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow?(t.touchObject={},!1):(void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,void(t.dragging=!0))},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i,e=this;i=Math.floor(e.options.slidesToShow/2),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&e.options.centerMode===!1?(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-1&&e.options.centerMode===!0&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||"undefined"==typeof s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),"undefined"!=typeof t)return t;return o}});
/* slick js end  */
window.theme = window.theme || {};

/* ================ SLATE ================ */
window.theme = window.theme || {};

theme.Sections = function Sections() {
  this.constructors = {};
  this.instances = [];

  document.addEventListener(
    'shopify:section:load',
    this._onSectionLoad.bind(this)
  );
  document.addEventListener(
    'shopify:section:unload',
    this._onSectionUnload.bind(this)
  );
  document.addEventListener(
    'shopify:section:select',
    this._onSelect.bind(this)
  );
  document.addEventListener(
    'shopify:section:deselect',
    this._onDeselect.bind(this)
  );
  document.addEventListener(
    'shopify:block:select',
    this._onBlockSelect.bind(this)
  );
  document.addEventListener(
    'shopify:block:deselect',
    this._onBlockDeselect.bind(this)
  );
};

theme.Sections.prototype = Object.assign({}, theme.Sections.prototype, {
  _createInstance: function(container, constructor) {
    var id = container.getAttribute('data-section-id');
    var type = container.getAttribute('data-section-type');

    constructor = constructor || this.constructors[type];

    if (typeof constructor === 'undefined') {
      return;
    }

    var instance = Object.assign(new constructor(container), {
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);
  },

  _onSectionLoad: function(evt) {
    var container = document.querySelector(
      '[data-section-id="' + evt.detail.sectionId + '"]'
    );

    if (container) {
      this._createInstance(container);
    }
  },

  _onSectionUnload: function(evt) {
    this.instances = this.instances.filter(function(instance) {
      var isEventInstance = instance.id === evt.detail.sectionId;

      if (isEventInstance) {
        if (typeof instance.onUnload === 'function') {
          instance.onUnload(evt);
        }
      }

      return !isEventInstance;
    });
  },

  _onSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onSelect === 'function'
    ) {
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onDeselect === 'function'
    ) {
      instance.onDeselect(evt);
    }
  },

  _onBlockSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onBlockSelect === 'function'
    ) {
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = this.instances.find(function(instance) {
      return instance.id === evt.detail.sectionId;
    });

    if (
      typeof instance !== 'undefined' &&
      typeof instance.onBlockDeselect === 'function'
    ) {
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructor) {
    this.constructors[type] = constructor;

    document.querySelectorAll('[data-section-type="' + type + '"]').forEach(
      function(container) {
        this._createInstance(container, constructor);
      }.bind(this)
    );
  }
});

window.slate = window.slate || {};

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

  resizeSelects: function(selects) {
    selects.forEach(function(select) {
      var arrowWidth = 55;

      var test = document.createElement('span');
      test.innerHTML = select.selectedOptions[0].label;

      document.querySelector('.site-footer').appendChild(test);

      var width = test.offsetWidth + arrowWidth;
      test.remove();

      select.style.width = width + 'px';
    });
  },

  keyboardKeys: {
    TAB: 9,
    ENTER: 13,
    ESCAPE: 27,
    LEFTARROW: 37,
    RIGHTARROW: 39
  }
};

window.slate = window.slate || {};

/**
 * iFrames
 * -----------------------------------------------------------------------------
 * Wrap videos in div to force responsive layout.
 *
 * @namespace iframes
 */

slate.rte = {
  /**
   * Wrap tables in a container div to make them scrollable when needed
   *
   * @param {object} options - Options to be used
   * @param {NodeList} options.tables - Elements of the table(s) to wrap
   * @param {string} options.tableWrapperClass - table wrapper class name
   */
  wrapTable: function(options) {
    options.tables.forEach(function(table) {
      var wrapper = document.createElement('div');
      wrapper.classList.add(options.tableWrapperClass);

      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  },

  /**
   * Wrap iframes in a container div to make them responsive
   *
   * @param {object} options - Options to be used
   * @param {NodeList} options.iframes - Elements of the iframe(s) to wrap
   * @param {string} options.iframeWrapperClass - class name used on the wrapping div
   */
  wrapIframe: function(options) {
    options.iframes.forEach(function(iframe) {
      var wrapper = document.createElement('div');
      wrapper.classList.add(options.iframeWrapperClass);

      iframe.parentNode.insertBefore(wrapper, iframe);
      wrapper.appendChild(iframe);

      iframe.src = iframe.src;
    });
  }
};

window.slate = window.slate || {};

/**
 * A11y Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help make your theme more accessible
 * to users with visual impairments.
 *
 *
 * @namespace a11y
 */

slate.a11y = {
  state: {
    firstFocusable: null,
    lastFocusable: null
  },
  /**
   * For use when focus shifts to a container rather than a link
   * eg for In-page links, after scroll, focus shifts to content area so that
   * next `tab` is where user expects
   *
   * @param {HTMLElement} element - The element to be acted upon
   */
  pageLinkFocus: function(element) {
    if (!element) return;
    var focusClass = 'js-focus-hidden';

    element.setAttribute('tabIndex', '-1');
    element.focus();
    element.classList.add(focusClass);
    element.addEventListener('blur', callback, { once: true });

    function callback() {
      element.classList.remove(focusClass);
      element.removeAttribute('tabindex');
    }
  },

  /**
   * Traps the focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {HTMLElement} options.container - Container to trap focus within
   * @param {HTMLElement} options.elementToFocus - Element to be focused when focus leaves container
   */
  trapFocus: function(options) {
    var focusableElements = Array.from(
      options.container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex^="-"])'
      )
    ).filter(function(element) {
      var width = element.offsetWidth;
      var height = element.offsetHeight;

      return (
        width !== 0 &&
        height !== 0 &&
        getComputedStyle(element).getPropertyValue('display') !== 'none'
      );
    });

    this.state.firstFocusable = focusableElements[0];
    this.state.lastFocusable = focusableElements[focusableElements.length - 1];

    if (!options.elementToFocus) {
      options.elementToFocus = options.container;
    }

    options.container.setAttribute('tabindex', '-1');
    options.elementToFocus.focus();

    this._setupHandlers();

    document.addEventListener('focusin', this._onFocusInHandler);
    document.addEventListener('focusout', this._onFocusOutHandler);
  },

  _setupHandlers: function() {
    if (!this._onFocusInHandler) {
      this._onFocusInHandler = this._onFocusIn.bind(this);
    }

    if (!this._onFocusOutHandler) {
      this._onFocusOutHandler = this._onFocusIn.bind(this);
    }

    if (!this._manageFocusHandler) {
      this._manageFocusHandler = this._manageFocus.bind(this);
    }
  },

  _onFocusOut: function() {
    document.removeEventListener('keydown', this._manageFocusHandler);
  },

  _onFocusIn: function(evt) {
    if (
      evt.target !== this.state.lastFocusable &&
      evt.target !== this.state.firstFocusable
    )
      return;

    document.addEventListener('keydown', this._manageFocusHandler);
  },

  _manageFocus: function(evt) {
    if (evt.keyCode !== slate.utils.keyboardKeys.TAB) return;

    /**
     * On the last focusable element and tab forward,
     * focus the first element.
     */
    if (evt.target === this.state.lastFocusable && !evt.shiftKey) {
      evt.preventDefault();
      this.state.firstFocusable.focus();
    }
    /**
     * On the first focusable element and tab backward,
     * focus the last element.
     */
    if (evt.target === this.state.firstFocusable && evt.shiftKey) {
      evt.preventDefault();
      this.state.lastFocusable.focus();
    }
  },

  /**
   * Removes the trap of focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {HTMLElement} options.container - Container to trap focus within
   */
  removeTrapFocus: function(options) {
    if (options.container) {
      options.container.removeAttribute('tabindex');
    }
    document.removeEventListener('focusin', this._onFocusInHandler);
  },

  /**
   * Add aria-describedby attribute to external and new window links
   *
   * @param {object} options - Options to be used
   * @param {object} options.messages - Custom messages to be used
   * @param {HTMLElement} options.links - Specific links to be targeted
   */
  accessibleLinks: function(options) {
    var body = document.querySelector('body');

    var idSelectors = {
      newWindow: 'a11y-new-window-message',
      external: 'a11y-external-message',
      newWindowExternal: 'a11y-new-window-external-message'
    };

    if (options.links === undefined || !options.links.length) {
      options.links = document.querySelectorAll(
        'a[href]:not([aria-describedby])'
      );
    }

    function generateHTML(customMessages) {
      if (typeof customMessages !== 'object') {
        customMessages = {};
      }

      var messages = Object.assign(
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

    function _externalSite(link) {
      var hostname = window.location.hostname;

      return link.hostname !== hostname;
    }

    options.links.forEach(function(link) {
      var target = link.getAttribute('target');
      var rel = link.getAttribute('rel');
      var isExternal = _externalSite(link);
      var isTargetBlank = target === '_blank';

      if (isExternal) {
        link.setAttribute('aria-describedby', idSelectors.external);
      }

      if (isTargetBlank) {
        if (!rel || rel.indexOf('noopener') === -1) {
          var relValue = rel === undefined ? '' : rel + ' ';
          relValue = relValue + 'noopener';
          link.setAttribute('rel', relValue);
        }

        link.setAttribute('aria-describedby', idSelectors.newWindow);
      }

      if (isExternal && isTargetBlank) {
        link.setAttribute('aria-describedby', idSelectors.newWindowExternal);
      }
    });

    generateHTML(options.messages);
  }
};

/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * A collection of functions that help with basic image operations.
 *
 */

theme.Images = (function() {
  /**
   * Preloads an image in memory and uses the browsers cache to store it until needed.
   *
   * @param {Array} images - A list of image urls
   * @param {String} size - A shopify image size attribute
   */

  function preload(images, size) {
    if (typeof images === 'string') {
      images = [images];
    }

    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      this.loadImage(this.getSizedImageUrl(image, size));
    }
  }

  /**
   * Loads and caches an image in the browsers cache.
   * @param {string} path - An image url
   */
  function loadImage(path) {
    new Image().src = path;
  }

  /**
   * Swaps the src of an image for another OR returns the imageURL to the callback function
   * @param image
   * @param element
   * @param callback
   */
  function switchImage(image, element, callback) {
    var size = this.imageSize(element.src);
    var imageUrl = this.getSizedImageUrl(image.src, size);

    if (callback) {
      callback(imageUrl, image, element); // eslint-disable-line callback-return
    } else {
      element.src = imageUrl;
    }
  }

  /**
   * +++ Useful
   * Find the Shopify image attribute size
   *
   * @param {string} src
   * @returns {null}
   */
  function imageSize(src) {
    var match = src.match(
      /.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\\.@]/
    );

    if (match !== null) {
      if (match[2] !== undefined) {
        return match[1] + match[2];
      } else {
        return match[1];
      }
    } else {
      return null;
    }
  }

  /**
   * +++ Useful
   * Adds a Shopify size attribute to a URL
   *
   * @param src
   * @param size
   * @returns {*}
   */
  function getSizedImageUrl(src, size) {
    if (size === null) {
      return src;
    }

    if (size === 'master') {
      return this.removeProtocol(src);
    }

    var match = src.match(
      /\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i
    );

    if (match !== null) {
      var prefix = src.split(match[0]);
      var suffix = match[0];

      return this.removeProtocol(prefix[0] + '_' + size + suffix);
    }

    return null;
  }

  function removeProtocol(path) {
    return path.replace(/http(s)?:/, '');
  }

  return {
    preload: preload,
    loadImage: loadImage,
    switchImage: switchImage,
    imageSize: imageSize,
    getSizedImageUrl: getSizedImageUrl,
    removeProtocol: removeProtocol
  };
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

theme.Currency = (function() {
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

/**
 * Variant Selection scripts
 * ------------------------------------------------------------------------------
 *
 * Handles change events from the variant inputs in any `cart/add` forms that may
 * exist.  Also updates the master select and triggers updates when the variants
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
  function selectOption(variant){
    if (variant) {
      var form = $('.swatches').closest('form');
      for (var i=0,length=variant.options.length; i<length; i++) {
        var radioButton = form.find('.swatch[data-option-index="' + i + '"] :radio[value="' + variant.options[i] +'"]');
        try{
          radioButton.get(0).checked = true;
        }catch(e){
          console.log(e);
        }
      }
    }
  }
  
  function Variants(options) {
//     alert();
    this.container = options.container;
    this.product = options.product;
    this.originalSelectorId = options.originalSelectorId;
    this.enableHistoryState = options.enableHistoryState;
    this.singleOptions = this.container.querySelectorAll(
      options.singleOptionSelector
    );
    this.currentVariant = this._getVariantFromOptions();

    this.singleOptions.forEach(
      function(option) {
        option.addEventListener('change', this._onSelectChange.bind(this));
      }.bind(this)
    );
    selectOption(this.currentVariant);
    if(this.currentVariant.available){
      $('#mhaRnProduct').hide();
    }
  }

  Variants.prototype = Object.assign({}, Variants.prototype, {
    /**
     * Get the currently selected options from add-to-cart form. Works with all
     * form input elements.
     *
     * @return {array} options - Values of currently selected variants
     */
    _getCurrentOptions: function() {
      var result = [];

      this.singleOptions.forEach(function(option) {
        var type = option.getAttribute('type');
        var isRadioOrCheckbox = type === 'radio' || type === 'checkbox';

        if (!isRadioOrCheckbox || option.checked) {
          result.push({
            value: option.value,
            index: option.getAttribute('data-index')
          });
        }
      });

      return result;
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

      var found = variants.find(function(variant) {
        return selectedValues.every(function(values) {
          return variant[values.index] === values.value;
        });
      });
      
      console.log(variants,found);

      return found;
    },

    
    
    /**
     * Event handler for when a variant input changes.
     */
    _onSelectChange: function() {
      
      var variant = this._getVariantFromOptions();

      this.container.dispatchEvent(
        new CustomEvent('variantChange', {
          detail: {
            variant: variant
          },
          bubbles: true,
          cancelable: true
        })
      );
      
      console.log(variant);

      if (!variant) {
        return;
      }

      this._updateMasterSelect(variant);
      this._updateImages(variant);
      this._updatePrice(variant);
      this._updateSKU(variant);
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

      if (
        !variant.featured_image ||
        variantImage.src === currentVariantImage.src
      ) {
        return;
      }

      this.container.dispatchEvent(
        new CustomEvent('variantImageChange', {
          detail: {
            variant: variant
          },
          bubbles: true,
          cancelable: true
        })
      );
    },

    /**
     * Trigger event when variant price changes.
     *
     * @param  {object} variant - Currently selected variant
     * @return {event} variantPriceChange
     */
    _updatePrice: function(variant) {
      if (
        variant.price === this.currentVariant.price &&
        variant.compare_at_price === this.currentVariant.compare_at_price &&
        variant.unit_price === this.currentVariant.unit_price
      ) {
        return;
      }

      this.container.dispatchEvent(
        new CustomEvent('variantPriceChange', {
          detail: {
            variant: variant
          },
          bubbles: true,
          cancelable: true
        })
      );
    },

    /**
     * Trigger event when variant sku changes.
     *
     * @param  {object} variant - Currently selected variant
     * @return {event} variantSKUChange
     */
    _updateSKU: function(variant) {
      if (variant.sku === this.currentVariant.sku) {
        return;
      }

      this.container.dispatchEvent(
        new CustomEvent('variantSKUChange', {
          detail: {
            variant: variant
          },
          bubbles: true,
          cancelable: true
        })
      );
    },

    /**
     * Update history state for product deeplinking
     *
     * @param  {variant} variant - Currently selected variant
     * @return {k}         [description]
     */
    _updateHistoryState: function(variant) {
      if (!history.replaceState || !variant) {
        return;
      }

      var newurl =
        window.location.protocol +
        '//' +
        window.location.host +
        window.location.pathname +
        '?variant=' +
        variant.id;
      window.history.replaceState({ path: newurl }, '', newurl);
    },

    /**
     * Update hidden master select of variant change
     *
     * @param  {variant} variant - Currently selected variant
     */
    _updateMasterSelect: function(variant) {
      var masterSelect = this.container.querySelector(this.originalSelectorId);

      if (!masterSelect) return;
      masterSelect.value = variant.id;
    }
  });

  return Variants;
})();


this.Shopify = this.Shopify || {};
this.Shopify.theme = this.Shopify.theme || {};
this.Shopify.theme.PredictiveSearch = (function() {
  'use strict';

  function validateQuery(query) {
    var error;

    if (query === null || query === undefined) {
      error = new TypeError("'query' is missing");
      error.type = 'argument';
      throw error;
    }

    if (typeof query !== 'string') {
      error = new TypeError("'query' is not a string");
      error.type = 'argument';
      throw error;
    }
  }

  function GenericError() {
    var error = Error.call(this);

    error.name = 'Server error';
    error.message = 'Something went wrong on the server';
    error.status = 500;

    return error;
  }

  function NotFoundError(status) {
    var error = Error.call(this);

    error.name = 'Not found';
    error.message = 'Not found';
    error.status = status;

    return error;
  }

  function ServerError() {
    var error = Error.call(this);

    error.name = 'Server error';
    error.message = 'Something went wrong on the server';
    error.status = 500;

    return error;
  }

  function ContentTypeError(status) {
    var error = Error.call(this);

    error.name = 'Content-Type error';
    error.message = 'Content-Type was not provided or is of wrong type';
    error.status = status;

    return error;
  }

  function JsonParseError(status) {
    var error = Error.call(this);

    error.name = 'JSON parse error';
    error.message = 'JSON syntax error';
    error.status = status;

    return error;
  }

  function ThrottledError(status, name, message, retryAfter) {
    var error = Error.call(this);

    error.name = name;
    error.message = message;
    error.status = status;
    error.retryAfter = retryAfter;

    return error;
  }

  function InvalidParameterError(status, name, message) {
    var error = Error.call(this);

    error.name = name;
    error.message = message;
    error.status = status;

    return error;
  }

  function ExpectationFailedError(status, name, message) {
    var error = Error.call(this);

    error.name = name;
    error.message = message;
    error.status = status;

    return error;
  }

  function request(searchUrl, queryParams, query, onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    var route = searchUrl + '/suggest.json';

    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) {
        return;
      }

      var contentType = xhr.getResponseHeader('Content-Type');

      if (xhr.status >= 500) {
        onError(new ServerError());

        return;
      }

      if (xhr.status === 404) {
        onError(new NotFoundError(xhr.status));

        return;
      }

      if (
        typeof contentType !== 'string' ||
        contentType.toLowerCase().match('application/json') === null
      ) {
        onError(new ContentTypeError(xhr.status));

        return;
      }

      if (xhr.status === 417) {
        try {
          var invalidParameterJson = JSON.parse(xhr.responseText);

          onError(
            new InvalidParameterError(
              xhr.status,
              invalidParameterJson.message,
              invalidParameterJson.description
            )
          );
        } catch (error) {
          onError(new JsonParseError(xhr.status));
        }

        return;
      }

      if (xhr.status === 422) {
        try {
          var expectationFailedJson = JSON.parse(xhr.responseText);

          onError(
            new ExpectationFailedError(
              xhr.status,
              expectationFailedJson.message,
              expectationFailedJson.description
            )
          );
        } catch (error) {
          onError(new JsonParseError(xhr.status));
        }

        return;
      }

      if (xhr.status === 429) {
        try {
          var throttledJson = JSON.parse(xhr.responseText);

          onError(
            new ThrottledError(
              xhr.status,
              throttledJson.message,
              throttledJson.description,
              xhr.getResponseHeader('Retry-After')
            )
          );
        } catch (error) {
          onError(new JsonParseError(xhr.status));
        }

        return;
      }

      if (xhr.status === 200) {
        try {
          var res = JSON.parse(xhr.responseText);
          res.query = query;
          onSuccess(res);
        } catch (error) {
          onError(new JsonParseError(xhr.status));
        }

        return;
      }

      try {
        var genericErrorJson = JSON.parse(xhr.responseText);
        onError(
          new GenericError(
            xhr.status,
            genericErrorJson.message,
            genericErrorJson.description
          )
        );
      } catch (error) {
        onError(new JsonParseError(xhr.status));
      }

      return;
    };

    xhr.open(
      'get',
      route + '?q=' + encodeURIComponent(query) + '&' + queryParams
    );

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send();
  }

  function Cache(config) {
    this._store = {};
    this._keys = [];
    if (config && config.bucketSize) {
      this.bucketSize = config.bucketSize;
    } else {
      this.bucketSize = 20;
    }
  }

  Cache.prototype.set = function(key, value) {
    if (this.count() >= this.bucketSize) {
      var deleteKey = this._keys.splice(0, 1);
      this.delete(deleteKey);
    }

    this._keys.push(key);
    this._store[key] = value;

    return this._store;
  };

  Cache.prototype.get = function(key) {
    return this._store[key];
  };

  Cache.prototype.has = function(key) {
    return Boolean(this._store[key]);
  };

  Cache.prototype.count = function() {
    return Object.keys(this._store).length;
  };

  Cache.prototype.delete = function(key) {
    var exists = Boolean(this._store[key]);
    delete this._store[key];
    return exists && !this._store[key];
  };

  function Dispatcher() {
    this.events = {};
  }

  Dispatcher.prototype.on = function(eventName, callback) {
    var event = this.events[eventName];
    if (!event) {
      event = new DispatcherEvent(eventName);
      this.events[eventName] = event;
    }
    event.registerCallback(callback);
  };

  Dispatcher.prototype.off = function(eventName, callback) {
    var event = this.events[eventName];
    if (event && event.callbacks.indexOf(callback) > -1) {
      event.unregisterCallback(callback);
      if (event.callbacks.length === 0) {
        delete this.events[eventName];
      }
    }
  };

  Dispatcher.prototype.dispatch = function(eventName, payload) {
    var event = this.events[eventName];
    if (event) {
      event.fire(payload);
    }
  };

  function DispatcherEvent(eventName) {
    this.eventName = eventName;
    this.callbacks = [];
  }

  DispatcherEvent.prototype.registerCallback = function(callback) {
    this.callbacks.push(callback);
  };

  DispatcherEvent.prototype.unregisterCallback = function(callback) {
    var index = this.callbacks.indexOf(callback);
    if (index > -1) {
      this.callbacks.splice(index, 1);
    }
  };

  DispatcherEvent.prototype.fire = function(payload) {
    var callbacks = this.callbacks.slice(0);
    callbacks.forEach(function(callback) {
      callback(payload);
    });
  };

  function debounce(func, wait) {
    var timeout = null;
    return function() {
      var context = this;
      var args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        timeout = null;
        func.apply(context, args);
      }, wait || 0);
    };
  }

  function objectToQueryParams(obj, parentKey) {
    var output = '';
    parentKey = parentKey || null;

    Object.keys(obj).forEach(function(key) {
      var outputKey = key + '=';
      if (parentKey) {
        outputKey = parentKey + '[' + key + ']';
      }

      switch (trueTypeOf(obj[key])) {
        case 'object':
          output += objectToQueryParams(obj[key], parentKey ? outputKey : key);
          break;
        case 'array':
          output += outputKey + '=' + obj[key].join(',') + '&';
          break;
        default:
          if (parentKey) {
            outputKey += '=';
          }
          output += outputKey + encodeURIComponent(obj[key]) + '&';
          break;
      }
    });

    return output;
  }

  function trueTypeOf(obj) {
    return Object.prototype.toString
      .call(obj)
      .slice(8, -1)
      .toLowerCase();
  }

  var DEBOUNCE_RATE = 10;
  var requestDebounced = debounce(request, DEBOUNCE_RATE);

  function PredictiveSearch(params, searchUrl) {
    if (!params) {
      throw new TypeError('No params object was specified');
    }

    this.searchUrl = searchUrl;

    this._retryAfter = null;
    this._currentQuery = null;

    this.dispatcher = new Dispatcher();
    this.cache = new Cache({ bucketSize: 40 });

    this.queryParams = objectToQueryParams(params);
  }

  PredictiveSearch.TYPES = {
    PRODUCT: 'product',
    PAGE: 'page',
    ARTICLE: 'article'
  };

  PredictiveSearch.FIELDS = {
    AUTHOR: 'author',
    BODY: 'body',
    PRODUCT_TYPE: 'product_type',
    TAG: 'tag',
    TITLE: 'title',
    VARIANTS_BARCODE: 'variants.barcode',
    VARIANTS_SKU: 'variants.sku',
    VARIANTS_TITLE: 'variants.title',
    VENDOR: 'vendor'
  };

  PredictiveSearch.UNAVAILABLE_PRODUCTS = {
    SHOW: 'show',
    HIDE: 'hide',
    LAST: 'last'
  };

  PredictiveSearch.prototype.query = function query(query) {
    try {
      validateQuery(query);
    } catch (error) {
      this.dispatcher.dispatch('error', error);
      return;
    }

    if (query === '') {
      return this;
    }

    this._currentQuery = normalizeQuery(query);
    var cacheResult = this.cache.get(this._currentQuery);
    if (cacheResult) {
      this.dispatcher.dispatch('success', cacheResult);
      return this;
    }

    requestDebounced(
      this.searchUrl,
      this.queryParams,
      query,
      function(result) {
        this.cache.set(normalizeQuery(result.query), result);
        if (normalizeQuery(result.query) === this._currentQuery) {
          this._retryAfter = null;
          this.dispatcher.dispatch('success', result);
        }
      }.bind(this),
      function(error) {
        if (error.retryAfter) {
          this._retryAfter = error.retryAfter;
        }
        this.dispatcher.dispatch('error', error);
      }.bind(this)
    );

    return this;
  };

  PredictiveSearch.prototype.on = function on(eventName, callback) {
    this.dispatcher.on(eventName, callback);

    return this;
  };

  PredictiveSearch.prototype.off = function on(eventName, callback) {
    this.dispatcher.off(eventName, callback);

    return this;
  };

  function normalizeQuery(query) {
    if (typeof query !== 'string') {
      return null;
    }

    return query
      .trim()
      .replace(' ', '-')
      .toLowerCase();
  }

  return PredictiveSearch;
})();

this.Shopify = this.Shopify || {};
this.Shopify.theme = this.Shopify.theme || {};
this.Shopify.theme.PredictiveSearchComponent = (function(PredictiveSearch) {
  'use strict';

  PredictiveSearch =
    PredictiveSearch && PredictiveSearch.hasOwnProperty('default')
      ? PredictiveSearch['default']
      : PredictiveSearch;

  var DEFAULT_PREDICTIVE_SEARCH_API_CONFIG = {
    resources: {
      type: [PredictiveSearch.TYPES.PRODUCT],
      options: {
        unavailable_products: PredictiveSearch.UNAVAILABLE_PRODUCTS.LAST,
        fields: [
          PredictiveSearch.FIELDS.TITLE,
          PredictiveSearch.FIELDS.VENDOR,
          PredictiveSearch.FIELDS.PRODUCT_TYPE,
          PredictiveSearch.FIELDS.VARIANTS_TITLE
        ]
      }
    }
  };

  function PredictiveSearchComponent(config) {
    // validate config
    if (
      !config ||
      !config.selectors ||
      !config.selectors.input ||
      !isString(config.selectors.input) ||
      !config.selectors.result ||
      !isString(config.selectors.result) ||
      !config.resultTemplateFct ||
      !isFunction(config.resultTemplateFct) ||
      !config.numberOfResultsTemplateFct ||
      !isFunction(config.numberOfResultsTemplateFct) ||
      !config.loadingResultsMessageTemplateFct ||
      !isFunction(config.loadingResultsMessageTemplateFct)
    ) {
      var error = new TypeError(
        'PredictiveSearchComponent config is not valid'
      );
      error.type = 'argument';
      throw error;
    }

    // Find nodes
    this.nodes = findNodes(config.selectors);

    // Validate nodes
    if (!isValidNodes(this.nodes)) {
      // eslint-disable-next-line no-console
      console.warn('Could not find valid nodes');
      return;
    }

    this.searchUrl = config.searchUrl || '/search';

    // Store the keyword that was used for the search
    this._searchKeyword = '';

    // Assign result template
    this.resultTemplateFct = config.resultTemplateFct;

    // Assign number of results template
    this.numberOfResultsTemplateFct = config.numberOfResultsTemplateFct;

    // Assign loading state template function
    this.loadingResultsMessageTemplateFct =
      config.loadingResultsMessageTemplateFct;

    // Assign number of search results
    this.numberOfResults = config.numberOfResults || 4;

    // Set classes
    this.classes = {
      visibleVariant: config.visibleVariant
        ? config.visibleVariant
        : 'predictive-search-wrapper--visible',
      itemSelected: config.itemSelectedClass
        ? config.itemSelectedClass
        : 'predictive-search-item--selected',
      clearButtonVisible: config.clearButtonVisibleClass
        ? config.clearButtonVisibleClass
        : 'predictive-search__clear-button--visible'
    };

    this.selectors = {
      searchResult: config.searchResult
        ? config.searchResult
        : '[data-search-result]'
    };

    // Assign callbacks
    this.callbacks = assignCallbacks(config);

    // Add input attributes
    addInputAttributes(this.nodes.input);

    // Add input event listeners
    this._addInputEventListeners();

    // Add body listener
    this._addBodyEventListener();

    // Add accessibility announcer
    this._addAccessibilityAnnouncer();

    // Display the reset button if the input is not empty
    this._toggleClearButtonVisibility();

    // Instantiate Predictive Search API
    this.predictiveSearch = new PredictiveSearch(
      config.PredictiveSearchAPIConfig
        ? config.PredictiveSearchAPIConfig
        : DEFAULT_PREDICTIVE_SEARCH_API_CONFIG,
      this.searchUrl
    );

    // Add predictive search success event listener
    this.predictiveSearch.on(
      'success',
      this._handlePredictiveSearchSuccess.bind(this)
    );

    // Add predictive search error event listener
    this.predictiveSearch.on(
      'error',
      this._handlePredictiveSearchError.bind(this)
    );
  }

  /**
   * Private methods
   */
  function findNodes(selectors) {
    return {
      input: document.querySelector(selectors.input),
      reset: document.querySelector(selectors.reset),
      result: document.querySelector(selectors.result)
    };
  }

  function isValidNodes(nodes) {
    if (
      !nodes ||
      !nodes.input ||
      !nodes.result ||
      nodes.input.tagName !== 'INPUT'
    ) {
      return false;
    }

    return true;
  }

  function assignCallbacks(config) {
    return {
      onBodyMousedown: config.onBodyMousedown,
      onBeforeOpen: config.onBeforeOpen,
      onOpen: config.onOpen,
      onBeforeClose: config.onBeforeClose,
      onClose: config.onClose,
      onInputFocus: config.onInputFocus,
      onInputKeyup: config.onInputKeyup,
      onInputBlur: config.onInputBlur,
      onInputReset: config.onInputReset,
      onBeforeDestroy: config.onBeforeDestroy,
      onDestroy: config.onDestroy
    };
  }

  function addInputAttributes(input) {
    input.setAttribute('autocorrect', 'off');
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('autocapitalize', 'off');
    input.setAttribute('spellcheck', 'false');
  }

  function removeInputAttributes(input) {
    input.removeAttribute('autocorrect', 'off');
    input.removeAttribute('autocomplete', 'off');
    input.removeAttribute('autocapitalize', 'off');
    input.removeAttribute('spellcheck', 'false');
  }

  /**
   * Public variables
   */
  PredictiveSearchComponent.prototype.isResultVisible = false;
  PredictiveSearchComponent.prototype.results = {};

  /**
   * "Private" variables
   */
  PredictiveSearchComponent.prototype._latencyTimer = null;
  PredictiveSearchComponent.prototype._resultNodeClicked = false;

  /**
   * "Private" instance methods
   */
  PredictiveSearchComponent.prototype._addInputEventListeners = function() {
    var input = this.nodes.input;
    var reset = this.nodes.reset;

    if (!input) {
      return;
    }

    this._handleInputFocus = this._handleInputFocus.bind(this);
    this._handleInputBlur = this._handleInputBlur.bind(this);
    this._handleInputKeyup = this._handleInputKeyup.bind(this);
    this._handleInputKeydown = this._handleInputKeydown.bind(this);

    input.addEventListener('focus', this._handleInputFocus);
    input.addEventListener('blur', this._handleInputBlur);
    input.addEventListener('keyup', this._handleInputKeyup);
    input.addEventListener('keydown', this._handleInputKeydown);

    if (reset) {
      this._handleInputReset = this._handleInputReset.bind(this);
      reset.addEventListener('click', this._handleInputReset);
    }
  };

  PredictiveSearchComponent.prototype._removeInputEventListeners = function() {
    var input = this.nodes.input;

    input.removeEventListener('focus', this._handleInputFocus);
    input.removeEventListener('blur', this._handleInputBlur);
    input.removeEventListener('keyup', this._handleInputKeyup);
    input.removeEventListener('keydown', this._handleInputKeydown);
  };

  PredictiveSearchComponent.prototype._addBodyEventListener = function() {
    this._handleBodyMousedown = this._handleBodyMousedown.bind(this);

    document
      .querySelector('body')
      .addEventListener('mousedown', this._handleBodyMousedown);
  };

  PredictiveSearchComponent.prototype._removeBodyEventListener = function() {
    document
      .querySelector('body')
      .removeEventListener('mousedown', this._handleBodyMousedown);
  };

  PredictiveSearchComponent.prototype._removeClearButtonEventListener = function() {
    var reset = this.nodes.reset;

    if (!reset) {
      return;
    }

    reset.removeEventListener('click', this._handleInputReset);
  };

  /**
   * Event handlers
   */
  PredictiveSearchComponent.prototype._handleBodyMousedown = function(evt) {
    if (this.isResultVisible && this.nodes !== null) {
      if (
        evt.target.isEqualNode(this.nodes.input) ||
        this.nodes.input.contains(evt.target) ||
        evt.target.isEqualNode(this.nodes.result) ||
        this.nodes.result.contains(evt.target)
      ) {
        this._resultNodeClicked = true;
      } else {
        if (isFunction(this.callbacks.onBodyMousedown)) {
          var returnedValue = this.callbacks.onBodyMousedown(this.nodes);
          if (isBoolean(returnedValue) && returnedValue) {
            this.close();
          }
        } else {
          this.close();
        }
      }
    }
  };

  PredictiveSearchComponent.prototype._handleInputFocus = function(evt) {
    if (isFunction(this.callbacks.onInputFocus)) {
      var returnedValue = this.callbacks.onInputFocus(this.nodes);
      if (isBoolean(returnedValue) && !returnedValue) {
        return false;
      }
    }

    if (evt.target.value.length > 0) {
      this._search();
    }

    return true;
  };

  PredictiveSearchComponent.prototype._handleInputBlur = function() {
    // This has to be done async, to wait for the focus to be on the next
    // element and avoid closing the results.
    // Example: Going from the input to the reset button.
    setTimeout(
      function() {
        if (isFunction(this.callbacks.onInputBlur)) {
          var returnedValue = this.callbacks.onInputBlur(this.nodes);
          if (isBoolean(returnedValue) && !returnedValue) {
            return false;
          }
        }

        if (document.activeElement.isEqualNode(this.nodes.reset)) {
          return false;
        }

        if (this._resultNodeClicked) {
          this._resultNodeClicked = false;
          return false;
        }

        this.close();
      }.bind(this)
    );

    return true;
  };

  PredictiveSearchComponent.prototype._addAccessibilityAnnouncer = function() {
    this._accessibilityAnnouncerDiv = window.document.createElement('div');

    this._accessibilityAnnouncerDiv.setAttribute(
      'style',
      'position: absolute !important; overflow: hidden; clip: rect(0 0 0 0); height: 1px; width: 1px; margin: -1px; padding: 0; border: 0;'
    );

    this._accessibilityAnnouncerDiv.setAttribute('data-search-announcer', '');
    this._accessibilityAnnouncerDiv.setAttribute('aria-live', 'polite');
    this._accessibilityAnnouncerDiv.setAttribute('aria-atomic', 'true');

    this.nodes.result.parentElement.appendChild(
      this._accessibilityAnnouncerDiv
    );
  };

  PredictiveSearchComponent.prototype._removeAccessibilityAnnouncer = function() {
    this.nodes.result.parentElement.removeChild(
      this._accessibilityAnnouncerDiv
    );
  };

  PredictiveSearchComponent.prototype._updateAccessibilityAttributesAfterSelectingElement = function(
    previousSelectedElement,
    currentSelectedElement
  ) {
    // Update the active descendant on the search input
    this.nodes.input.setAttribute(
      'aria-activedescendant',
      currentSelectedElement.id
    );

    // Unmark the previousSelected elemented as selected
    if (previousSelectedElement) {
      previousSelectedElement.removeAttribute('aria-selected');
    }

    // Mark the element as selected
    currentSelectedElement.setAttribute('aria-selected', true);
  };

  PredictiveSearchComponent.prototype._clearAriaActiveDescendant = function() {
    this.nodes.input.setAttribute('aria-activedescendant', '');
  };

  PredictiveSearchComponent.prototype._announceNumberOfResultsFound = function(
    results
  ) {
    var currentAnnouncedMessage = this._accessibilityAnnouncerDiv.innerHTML;
    var newMessage = this.numberOfResultsTemplateFct(results);

    // If the messages are the same, they won't get announced
    // add white space so it gets announced
    if (currentAnnouncedMessage === newMessage) {
      newMessage = newMessage + '&nbsp;';
    }

    this._accessibilityAnnouncerDiv.innerHTML = newMessage;
  };

  PredictiveSearchComponent.prototype._announceLoadingState = function() {
    this._accessibilityAnnouncerDiv.innerHTML = this.loadingResultsMessageTemplateFct();
  };

  PredictiveSearchComponent.prototype._handleInputKeyup = function(evt) {
    var UP_ARROW_KEY_CODE = 38;
    var DOWN_ARROW_KEY_CODE = 40;
    var RETURN_KEY_CODE = 13;
    var ESCAPE_KEY_CODE = 27;

    if (isFunction(this.callbacks.onInputKeyup)) {
      var returnedValue = this.callbacks.onInputKeyup(this.nodes);
      if (isBoolean(returnedValue) && !returnedValue) {
        return false;
      }
    }

    this._toggleClearButtonVisibility();

    if (this.isResultVisible && this.nodes !== null) {
      if (evt.keyCode === UP_ARROW_KEY_CODE) {
        this._navigateOption(evt, 'UP');
        return true;
      }

      if (evt.keyCode === DOWN_ARROW_KEY_CODE) {
        this._navigateOption(evt, 'DOWN');
        return true;
      }

      if (evt.keyCode === RETURN_KEY_CODE) {
        this._selectOption();
        return true;
      }

      if (evt.keyCode === ESCAPE_KEY_CODE) {
        this.close();
      }
    }

    if (evt.target.value.length <= 0) {
      this.close();
      this._setKeyword('');
    } else if (evt.target.value.length > 0) {
      this._search();
    }

    return true;
  };

  PredictiveSearchComponent.prototype._handleInputKeydown = function(evt) {
    var RETURN_KEY_CODE = 13;
    var UP_ARROW_KEY_CODE = 38;
    var DOWN_ARROW_KEY_CODE = 40;

    // Prevent the form default submission if there is a selected option
    if (evt.keyCode === RETURN_KEY_CODE && this._getSelectedOption() !== null) {
      evt.preventDefault();
    }

    // Prevent the cursor from moving in the input when using the up and down arrow keys
    if (
      evt.keyCode === UP_ARROW_KEY_CODE ||
      evt.keyCode === DOWN_ARROW_KEY_CODE
    ) {
      evt.preventDefault();
    }
  };

  PredictiveSearchComponent.prototype._handleInputReset = function(evt) {
    evt.preventDefault();

    if (isFunction(this.callbacks.onInputReset)) {
      var returnedValue = this.callbacks.onInputReset(this.nodes);
      if (isBoolean(returnedValue) && !returnedValue) {
        return false;
      }
    }

    this.nodes.input.value = '';
    this.nodes.input.focus();
    this._toggleClearButtonVisibility();
    this.close();

    return true;
  };

  PredictiveSearchComponent.prototype._navigateOption = function(
    evt,
    direction
  ) {
    var currentOption = this._getSelectedOption();

    if (!currentOption) {
      var firstOption = this.nodes.result.querySelector(
        this.selectors.searchResult
      );
      firstOption.classList.add(this.classes.itemSelected);
      this._updateAccessibilityAttributesAfterSelectingElement(
        null,
        firstOption
      );
    } else {
      if (direction === 'DOWN') {
        var nextOption = currentOption.nextElementSibling;
        if (nextOption) {
          currentOption.classList.remove(this.classes.itemSelected);
          nextOption.classList.add(this.classes.itemSelected);
          this._updateAccessibilityAttributesAfterSelectingElement(
            currentOption,
            nextOption
          );
        }
      } else {
        var previousOption = currentOption.previousElementSibling;
        if (previousOption) {
          currentOption.classList.remove(this.classes.itemSelected);
          previousOption.classList.add(this.classes.itemSelected);
          this._updateAccessibilityAttributesAfterSelectingElement(
            currentOption,
            previousOption
          );
        }
      }
    }
  };

  PredictiveSearchComponent.prototype._getSelectedOption = function() {
    return this.nodes.result.querySelector('.' + this.classes.itemSelected);
  };

  PredictiveSearchComponent.prototype._selectOption = function() {
    var selectedOption = this._getSelectedOption();

    if (selectedOption) {
      selectedOption.querySelector('a, button').click();
    }
  };

  PredictiveSearchComponent.prototype._search = function() {
    var newSearchKeyword = this.nodes.input.value;

    if (this._searchKeyword === newSearchKeyword) {
      return;
    }

    clearTimeout(this._latencyTimer);
    this._latencyTimer = setTimeout(
      function() {
        this.results.isLoading = true;

        // Annonuce that we're loading the results
        this._announceLoadingState();

        this.nodes.result.classList.add(this.classes.visibleVariant);
        // NOTE: We could benifit in using DOMPurify.
        // https://github.com/cure53/DOMPurify
        this.nodes.result.innerHTML = this.resultTemplateFct(this.results);
      }.bind(this),
      500
    );

    this.predictiveSearch.query(newSearchKeyword);
    this._setKeyword(newSearchKeyword);
  };

  PredictiveSearchComponent.prototype._handlePredictiveSearchSuccess = function(
    json
  ) {
    clearTimeout(this._latencyTimer);
    this.results = json.resources.results;

    this.results.isLoading = false;
    this.results.products = this.results.products.slice(
      0,
      this.numberOfResults
    );
    this.results.canLoadMore =
      this.numberOfResults <= this.results.products.length;
    this.results.searchQuery = this.nodes.input.value;

    if (this.results.products.length > 0 || this.results.searchQuery) {
      this.nodes.result.innerHTML = this.resultTemplateFct(this.results);
      this._announceNumberOfResultsFound(this.results);
      this.open();
    } else {
      this.nodes.result.innerHTML = '';

      this._closeOnNoResults();
    }
  };

  PredictiveSearchComponent.prototype._handlePredictiveSearchError = function() {
    clearTimeout(this._latencyTimer);
    this.nodes.result.innerHTML = '';

    this._closeOnNoResults();
  };

  PredictiveSearchComponent.prototype._closeOnNoResults = function() {
    if (this.nodes) {
      this.nodes.result.classList.remove(this.classes.visibleVariant);
    }

    this.isResultVisible = false;
  };

  PredictiveSearchComponent.prototype._setKeyword = function(keyword) {
    this._searchKeyword = keyword;
  };

  PredictiveSearchComponent.prototype._toggleClearButtonVisibility = function() {
    if (!this.nodes.reset) {
      return;
    }

    if (this.nodes.input.value.length > 0) {
      this.nodes.reset.classList.add(this.classes.clearButtonVisible);
    } else {
      this.nodes.reset.classList.remove(this.classes.clearButtonVisible);
    }
  };

  /**
   * Public methods
   */
  PredictiveSearchComponent.prototype.open = function() {
    if (this.isResultVisible) {
      return;
    }

    if (isFunction(this.callbacks.onBeforeOpen)) {
      var returnedValue = this.callbacks.onBeforeOpen(this.nodes);
      if (isBoolean(returnedValue) && !returnedValue) {
        return false;
      }
    }

    this.nodes.result.classList.add(this.classes.visibleVariant);
    this.nodes.input.setAttribute('aria-expanded', true);
    this.isResultVisible = true;

    if (isFunction(this.callbacks.onOpen)) {
      return this.callbacks.onOpen(this.nodes) || true;
    }

    return true;
  };

  PredictiveSearchComponent.prototype.close = function() {
    if (!this.isResultVisible) {
      return true;
    }

    if (isFunction(this.callbacks.onBeforeClose)) {
      var returnedValue = this.callbacks.onBeforeClose(this.nodes);
      if (isBoolean(returnedValue) && !returnedValue) {
        return false;
      }
    }

    if (this.nodes) {
      this.nodes.result.classList.remove(this.classes.visibleVariant);
    }

    this.nodes.input.setAttribute('aria-expanded', false);
    this._clearAriaActiveDescendant();
    this._setKeyword('');

    if (isFunction(this.callbacks.onClose)) {
      this.callbacks.onClose(this.nodes);
    }

    this.isResultVisible = false;
    this.results = {};

    return true;
  };

  PredictiveSearchComponent.prototype.destroy = function() {
    this.close();

    if (isFunction(this.callbacks.onBeforeDestroy)) {
      var returnedValue = this.callbacks.onBeforeDestroy(this.nodes);
      if (isBoolean(returnedValue) && !returnedValue) {
        return false;
      }
    }

    this.nodes.result.classList.remove(this.classes.visibleVariant);
    removeInputAttributes(this.nodes.input);
    this._removeInputEventListeners();
    this._removeBodyEventListener();
    this._removeAccessibilityAnnouncer();
    this._removeClearButtonEventListener();

    if (isFunction(this.callbacks.onDestroy)) {
      this.callbacks.onDestroy(this.nodes);
    }

    return true;
  };

  PredictiveSearchComponent.prototype.clearAndClose = function() {
    this.nodes.input.value = '';
    this.close();
  };

  /**
   * Utilities
   */
  function getTypeOf(value) {
    return Object.prototype.toString.call(value);
  }

  function isString(value) {
    return getTypeOf(value) === '[object String]';
  }

  function isBoolean(value) {
    return getTypeOf(value) === '[object Boolean]';
  }

  function isFunction(value) {
    return getTypeOf(value) === '[object Function]';
  }

  return PredictiveSearchComponent;
})(Shopify.theme.PredictiveSearch);

window.theme = window.theme || {};

theme.TouchEvents = function TouchEvents(element, options) {
  this.axis;
  this.checkEvents = [];
  this.eventHandlers = {};
  this.eventModel = {};
  this.events = [
    ['touchstart', 'touchmove', 'touchend', 'touchcancel'],
    ['pointerdown', 'pointermove', 'pointerup', 'pointercancel'],
    ['mousedown', 'mousemove', 'mouseup']
  ];
  this.eventType;
  this.difference = {};
  this.direction;
  this.start = {};

  this.element = element;
  this.options = Object.assign(
    {},
    {
      dragThreshold: 10,
      start: function() {}, // eslint-disable-line
      move: function() {}, // eslint-disable-line
      end: function() {} // eslint-disable-line
    },
    options
  );

  this.checkEvents = this._getCheckEvents();
  this.eventModel = this._getEventModel();

  this._setupEventHandlers();
};

theme.TouchEvents.prototype = Object.assign({}, theme.TouchEvents.prototype, {
  destroy: function() {
    this.element.removeEventListener(
      'dragstart',
      this.eventHandlers.preventDefault
    );

    this.element.removeEventListener(
      this.events[this.eventModel][0],
      this.eventHandlers.touchStart
    );

    if (!this.eventModel) {
      this.element.removeEventListener(
        this.events[2][0],
        this.eventHandlers.touchStart
      );
    }

    this.element.removeEventListener('click', this.eventHandlers.preventClick);
  },

  _setupEventHandlers: function() {
    this.eventHandlers.preventDefault = this._preventDefault.bind(this);
    this.eventHandlers.preventClick = this._preventClick.bind(this);
    this.eventHandlers.touchStart = this._touchStart.bind(this);
    this.eventHandlers.touchMove = this._touchMove.bind(this);
    this.eventHandlers.touchEnd = this._touchEnd.bind(this);

    // Prevent element from dragging when using mouse
    this.element.addEventListener(
      'dragstart',
      this.eventHandlers.preventDefault
    );

    // Bind the touchstart/pointerdown event
    this.element.addEventListener(
      this.events[this.eventModel][0],
      this.eventHandlers.touchStart
    );

    // Bind mousedown if necessary
    if (!this.eventModel) {
      this.element.addEventListener(
        this.events[2][0],
        this.eventHandlers.touchStart
      );
    }

    // No clicking during touch
    this.element.addEventListener('click', this.eventHandlers.preventClick);
  },

  _touchStart: function(event) {
    this.eventType = this.eventModel;

    if (event.type === 'mousedown' && !this.eventModel) {
      this.eventType = 2;
    }

    if (this.checkEvents[this.eventType](event)) return;
    if (this.eventType) this._preventDefault(event);

    document.addEventListener(
      this.events[this.eventType][1],
      this.eventHandlers.touchMove
    );

    document.addEventListener(
      this.events[this.eventType][2],
      this.eventHandlers.touchEnd
    );

    if (this.eventType < 2) {
      document.addEventListener(
        this.events[this.eventType][3],
        this.eventHandlers.touchEnd
      );
    }

    this.start = {
      xPosition: this.eventType ? event.clientX : event.touches[0].clientX,
      yPosition: this.eventType ? event.clientY : event.touches[0].clientY,
      time: new Date().getTime()
    };

    // Ensure we empty out the this.difference object
    Object.keys(this.difference).forEach(
      function(key) {
        delete this.difference[key];
      }.bind(this)
    );

    this.options.start(event);
  },

  _touchMove: function(event) {
    this.difference = this._getDifference(event);

    // Prevent document from scrolling during swipe gesture
    document['on' + this.events[this.eventType][1]] = function(event) {
      this._preventDefault(event);
    }.bind(this);

    // Get the direction user is dragging
    if (!this.axis) {
      if (this.options.dragThreshold < Math.abs(this.difference.xPosition)) {
        this.axis = 'xPosition';
      } else if (
        this.options.dragThreshold < Math.abs(this.difference.yPosition)
      ) {
        this.axis = 'yPosition';
      } else {
        this.axis = false;
      }
    } else if (this.axis === 'xPosition') {
      this.direction = this.difference.xPosition < 0 ? 'left' : 'right';
    } else if (this.axis === 'yPosition') {
      this.direction = this.difference.yPosition < 0 ? 'up' : 'down';
    }

    this.options.move(event, this.direction, this.difference);
  },

  _touchEnd: function(event) {
    document.removeEventListener(
      this.events[this.eventType][1],
      this.eventHandlers.touchMove
    );

    document.removeEventListener(
      this.events[this.eventType][2],
      this.eventHandlers.touchEnd
    );

    if (this.eventType < 2) {
      document.removeEventListener(
        this.events[this.eventType][3],
        this.eventHandlers.touchEnd
      );
    }

    // Re-enable document scrolling
    document['on' + this.events[this.eventType][1]] = function() {
      return true;
    };

    this.options.end(event, this.direction, this.difference);
    this.axis = false;
  },

  _getDifference: function(event) {
    return {
      xPosition:
        (this.eventType ? event.clientX : event.touches[0].clientX) -
        this.start.xPosition,
      yPosition:
        (this.eventType ? event.clientY : event.touches[0].clientY) -
        this.start.yPosition,
      time: new Date().getTime() - this.start.time
    };
  },

  _getCheckEvents: function() {
    return [
      // Touch events
      function(event) {
        // Skip the event if it's a multi-touch or pinch move
        return (
          (event.touches && event.touches.length > 1) ||
          (event.scale && event.scale !== 1)
        );
      },
      // Pointer events
      function(event) {
        // Skip it, if:
        // 1. The event is not primary (other pointers during multi-touch),
        // 2. Left mouse button is not pressed,
        // 3. Event is not a touch event
        return (
          !event.isPrimary ||
          (event.buttons && event.buttons !== 1) ||
          (event.pointerType !== 'touch' && event.pointerType !== 'pen')
        );
      },
      // Mouse events
      function(event) {
        // Skip the event if left mouse button is not pressed
        return event.buttons && event.buttons !== 1;
      }
    ];
  },

  _getEventModel: function() {
    return window.navigator.pointerEnabled ? 1 : 0;
  },

  _preventDefault: function(event) {
    event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  },

  _preventClick: function(event) {
    if (Math.abs(this.difference.xPosition) > this.options.dragThreshold) {
      this._preventDefault(event);
    }
  }
});


/* ================ GLOBAL ================ */
/*============================================================================
  Drawer modules
==============================================================================*/
theme.Drawers = (function() {
  function Drawer(id, position, options) {
    var DEFAULT_OPEN_CLASS = 'js-drawer-open';
    var DEFAULT_CLOSE_CLASS = 'js-drawer-close';

    var defaults = {
      selectors: {
        openVariant: '.' + DEFAULT_OPEN_CLASS + '-' + position,
        close: '.' + DEFAULT_CLOSE_CLASS
      },
      classes: {
        open: DEFAULT_OPEN_CLASS,
        openVariant: DEFAULT_OPEN_CLASS + '-' + position
      },
      withPredictiveSearch: false
    };

    this.nodes = {
      parents: [document.documentElement, document.body],
      page: document.getElementById('PageContainer')
    };

    this.eventHandlers = {};

    this.config = Object.assign({}, defaults, options);
    this.position = position;
    this.drawer = document.getElementById(id);

    if (!this.drawer) {
      return false;
    }

    this.drawerIsOpen = false;
    this.init();
  }

  Drawer.prototype.init = function() {
    document
      .querySelector(this.config.selectors.openVariant)
      .addEventListener('click', this.open.bind(this));
    this.drawer
      .querySelector(this.config.selectors.close)
      .addEventListener('click', this.close.bind(this));
  };

  Drawer.prototype.open = function(evt) {
    // Keep track if drawer was opened from a click, or called by another function
    var externalCall = false;

    // Prevent following href if link is clicked
    if (evt) {
      evt.preventDefault();
    } else {
      externalCall = true;
    }

    // Without this, the drawer opens, the click event bubbles up to nodes.page
    // which closes the drawer.
    if (evt && evt.stopPropagation) {
      evt.stopPropagation();
      // save the source of the click, we'll focus to this on close
      this.activeSource = evt.currentTarget;
    }

    if (this.drawerIsOpen && !externalCall) {
      return this.close();
    }

    // Add is-transitioning class to moved elements on open so drawer can have
    // transition for close animation
    if (!this.config.withPredictiveSearch) {
      theme.Helpers.prepareTransition(this.drawer);
    }

    this.nodes.parents.forEach(
      function(parent) {
        parent.classList.add(
          this.config.classes.open,
          this.config.classes.openVariant
        );
      }.bind(this)
    );

    this.drawerIsOpen = true;

    // Run function when draw opens if set
    if (
      this.config.onDrawerOpen &&
      typeof this.config.onDrawerOpen === 'function'
    ) {
      if (!externalCall) {
        this.config.onDrawerOpen();
      }
    }

    if (this.activeSource && this.activeSource.hasAttribute('aria-expanded')) {
      this.activeSource.setAttribute('aria-expanded', 'true');
    }

    // Set focus on drawer
    var trapFocusConfig = {
      container: this.drawer
    };

    if (this.config.elementToFocusOnOpen) {
      trapFocusConfig.elementToFocus = this.config.elementToFocusOnOpen;
    }

    slate.a11y.trapFocus(trapFocusConfig);

    this.bindEvents();

    return this;
  };

  Drawer.prototype.close = function() {
    if (!this.drawerIsOpen) {
      // don't close a closed drawer
      return;
    }

    // deselect any focused form elements
    document.activeElement.dispatchEvent(
      new CustomEvent('blur', { bubbles: true, cancelable: true })
    );

    // Ensure closing transition is applied to moved elements, like the nav
    if (!this.config.withPredictiveSearch) {
      theme.Helpers.prepareTransition(this.drawer);
    }

    this.nodes.parents.forEach(
      function(parent) {
        parent.classList.remove(
          this.config.classes.open,
          this.config.classes.openVariant
        );
      }.bind(this)
    );

    if (this.activeSource && this.activeSource.hasAttribute('aria-expanded')) {
      this.activeSource.setAttribute('aria-expanded', 'false');
    }

    this.drawerIsOpen = false;

    // Remove focus on drawer
    slate.a11y.removeTrapFocus({
      container: this.drawer
    });

    this.unbindEvents();

    // Run function when draw closes if set
    if (
      this.config.onDrawerClose &&
      typeof this.config.onDrawerClose === 'function'
    ) {
      this.config.onDrawerClose();
    }
  };

  Drawer.prototype.bindEvents = function() {
    this.eventHandlers.drawerKeyupHandler = function(evt) {
      // close on 'esc' keypress
      if (evt.keyCode === 27) {
        this.close();
        return false;
      } else {
        return true;
      }
    }.bind(this);

    this.eventHandlers.drawerTouchmoveHandler = function() {
      return false;
    };

    this.eventHandlers.drawerClickHandler = function() {
      this.close();
      return false;
    }.bind(this);

    // Add event listener to document body
    document.body.addEventListener(
      'keyup',
      this.eventHandlers.drawerKeyupHandler
    );

    // Lock scrolling on mobile
    this.nodes.page.addEventListener(
      'touchmove',
      this.eventHandlers.drawerTouchmoveHandler
    );

    this.nodes.page.addEventListener(
      'click',
      this.eventHandlers.drawerClickHandler
    );
  };

  Drawer.prototype.unbindEvents = function() {
    this.nodes.page.removeEventListener(
      'touchmove',
      this.eventHandlers.drawerTouchmoveHandler
    );
    this.nodes.page.removeEventListener(
      'click',
      this.eventHandlers.drawerClickHandler
    );
    document.body.removeEventListener(
      'keyup',
      this.eventHandlers.drawerKeyupHandler
    );
  };

  return Drawer;
})();

theme.Helpers = (function() {
  var touchDevice = false;

  var classes = {
    preventScrolling: 'prevent-scrolling'
  };

  var scrollPosition = window.pageYOffset;

  function setTouch() {
    touchDevice = true;
  }

  function isTouch() {
    return touchDevice;
  }

  function enableScrollLock() {
    scrollPosition = window.pageYOffset;
    document.body.style.top = '-' + scrollPosition + 'px';
    document.body.classList.add(classes.preventScrolling);
  }

  function disableScrollLock() {
    document.body.classList.remove(classes.preventScrolling);
    document.body.style.removeProperty('top');
    window.scrollTo(0, scrollPosition);
  }

  function debounce(func, wait, immediate) {
    var timeout;

    return function() {
      var context = this,
        args = arguments;

      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function getScript(source, beforeEl) {
    return new Promise(function(resolve, reject) {
      var script = document.createElement('script');
      var prior = beforeEl || document.getElementsByTagName('script')[0];

      script.async = true;
      script.defer = true;

      // eslint-disable-next-line shopify/prefer-early-return
      function onloadHander(_, isAbort) {
        if (
          isAbort ||
          !script.readyState ||
          /loaded|complete/.test(script.readyState)
        ) {
          script.onload = null;
          script.onreadystatechange = null;
          script = undefined;

          if (isAbort) {
            reject();
          } else {
            resolve();
          }
        }
      }

      script.onload = onloadHander;
      script.onreadystatechange = onloadHander;

      script.src = source;
      prior.parentNode.insertBefore(script, prior);
    });
  }

  /* Based on the prepareTransition by Jonathan Snook */
  /* Jonathan Snook - MIT License - https://github.com/snookca/prepareTransition */
  function prepareTransition(element) {
    element.addEventListener(
      'transitionend',
      function(event) {
        event.currentTarget.classList.remove('is-transitioning');
      },
      { once: true }
    );

    var properties = [
      'transition-duration',
      '-moz-transition-duration',
      '-webkit-transition-duration',
      '-o-transition-duration'
    ];

    var duration = 0;

    properties.forEach(function(property) {
      var computedValue = getComputedStyle(element)[property];

      if (computedValue) {
        computedValue.replace(/\D/g, '');
        duration || (duration = parseFloat(computedValue));
      }
    });

    if (duration !== 0) {
      element.classList.add('is-transitioning');
      element.offsetWidth;
    }
  }

  /*!
   * Serialize all form data into a SearchParams string
   * (c) 2020 Chris Ferdinandi, MIT License, https://gomakethings.com
   * @param  {Node}   form The form to serialize
   * @return {String}      The serialized form data
   */
  function serialize(form) {
    var arr = [];
    Array.prototype.slice.call(form.elements).forEach(function(field) {
      if (
        !field.name ||
        field.disabled ||
        ['file', 'reset', 'submit', 'button'].indexOf(field.type) > -1
      )
        return;
      if (field.type === 'select-multiple') {
        Array.prototype.slice.call(field.options).forEach(function(option) {
          if (!option.selected) return;
          arr.push(
            encodeURIComponent(field.name) +
              '=' +
              encodeURIComponent(option.value)
          );
        });
        return;
      }
      if (['checkbox', 'radio'].indexOf(field.type) > -1 && !field.checked)
        return;
      arr.push(
        encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value)
      );
    });
    return arr.join('&');
  }
  function cookiesEnabled() {
    var cookieEnabled = navigator.cookieEnabled;

    if (!cookieEnabled) {
      document.cookie = 'testcookie';
      cookieEnabled = document.cookie.indexOf('testcookie') !== -1;
    }

    return cookieEnabled;
  }

  function promiseStylesheet(stylesheet) {
    var stylesheetUrl = stylesheet || theme.stylesheet;

    if (typeof this.stylesheetPromise === 'undefined') {
      this.stylesheetPromise = new Promise(function(resolve) {
        var link = document.querySelector('link[href="' + stylesheetUrl + '"]');

        if (link.loaded) resolve();

        link.addEventListener('load', function() {
          setTimeout(resolve, 0);
        });
      });
    }

    return this.stylesheetPromise;
  }

  return {
    setTouch: setTouch,
    isTouch: isTouch,
    enableScrollLock: enableScrollLock,
    disableScrollLock: disableScrollLock,
    debounce: debounce,
    getScript: getScript,
    prepareTransition: prepareTransition,
    serialize: serialize,
    cookiesEnabled: cookiesEnabled,
    promiseStylesheet: promiseStylesheet
  };
})();

theme.LibraryLoader = (function() {
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
    plyrShopifyStyles: {
      tagId: 'plyr-shopify-styles',
      src: cloudCdn + 'plyr/v2.0/shopify-plyr.css',
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


/* ================ MODULES ================ */
window.theme = window.theme || {};

theme.Header = (function() {
  var selectors = {
    body: 'body',
    navigation: '#AccessibleNav',
    siteNavHasDropdown: '[data-has-dropdowns]',
    siteNavChildLinks: '.site-nav__child-link',
    siteNavActiveDropdown: '.site-nav--active-dropdown',
    siteNavHasCenteredDropdown: '.site-nav--has-centered-dropdown',
    siteNavCenteredDropdown: '.site-nav__dropdown--centered',
    siteNavLinkMain: '.site-nav__link--main',
    siteNavChildLink: '.site-nav__link--last',
    siteNavDropdown: '.site-nav__dropdown',
    siteHeader: '.site-header'
  };

  var config = {
    activeClass: 'site-nav--active-dropdown',
    childLinkClass: 'site-nav__child-link',
    rightDropdownClass: 'site-nav__dropdown--right',
    leftDropdownClass: 'site-nav__dropdown--left'
  };

  var cache = {};

  function init() {
    cacheSelectors();
    styleDropdowns(document.querySelectorAll(selectors.siteNavHasDropdown));
    positionFullWidthDropdowns();

    cache.parents.forEach(function(element) {
      element.addEventListener('click', submenuParentClickHandler);
    });

    // check when we're leaving a dropdown and close the active dropdown
    cache.siteNavChildLink.forEach(function(element) {
      element.addEventListener('focusout', submenuFocusoutHandler);
    });

    cache.topLevel.forEach(function(element) {
      element.addEventListener('focus', hideDropdown);
    });

    cache.subMenuLinks.forEach(function(element) {
      element.addEventListener('click', stopImmediatePropagation);
    });

    window.addEventListener('resize', resizeHandler);
  }

  function stopImmediatePropagation(event) {
    event.stopImmediatePropagation();
  }

  function cacheSelectors() {
    var navigation = document.querySelector(selectors.navigation);

    cache = {
      nav: navigation,
      topLevel: document.querySelectorAll(selectors.siteNavLinkMain),
      parents: navigation.querySelectorAll(selectors.siteNavHasDropdown),
      subMenuLinks: document.querySelectorAll(selectors.siteNavChildLinks),
      activeDropdown: document.querySelector(selectors.siteNavActiveDropdown),
      siteHeader: document.querySelector(selectors.siteHeader),
      siteNavChildLink: document.querySelectorAll(selectors.siteNavChildLink)
    };
  }

  function showDropdown(element) {
    element.classList.add(config.activeClass);

    if (cache.activeDropdown) hideDropdown();

    cache.activeDropdown = element;

    element
      .querySelector(selectors.siteNavLinkMain)
      .setAttribute('aria-expanded', 'true');

    setTimeout(function() {
      window.addEventListener('keyup', keyUpHandler);
      document.body.addEventListener('click', hideDropdown);
    }, 250);
  }

  function hideDropdown() {
    if (!cache.activeDropdown) return;

    cache.activeDropdown
      .querySelector(selectors.siteNavLinkMain)
      .setAttribute('aria-expanded', 'false');
    cache.activeDropdown.classList.remove(config.activeClass);

    cache.activeDropdown = document.querySelector(
      selectors.siteNavActiveDropdown
    );

    window.removeEventListener('keyup', keyUpHandler);
    document.body.removeEventListener('click', hideDropdown);
  }

  function styleDropdowns(dropdownListItems) {
    dropdownListItems.forEach(function(item) {
      var dropdownLi = item.querySelector(selectors.siteNavDropdown);

      if (!dropdownLi) return;

      if (isRightOfLogo(item)) {
        dropdownLi.classList.remove(config.leftDropdownClass);
        dropdownLi.classList.add(config.rightDropdownClass);
      } else {
        dropdownLi.classList.remove(config.rightDropdownClass);
        dropdownLi.classList.add(config.leftDropdownClass);
      }
    });
  }

  function isRightOfLogo(item) {
    var rect = item.getBoundingClientRect();
    var win = item.ownerDocument.defaultView;
    var leftOffset = rect.left + win.pageXOffset;

    var headerWidth = Math.floor(cache.siteHeader.offsetWidth) / 2;
    return leftOffset > headerWidth;
  }

  function positionFullWidthDropdowns() {
    document
      .querySelectorAll(selectors.siteNavHasCenteredDropdown)
      .forEach(function(el) {
        var fullWidthDropdown = el.querySelector(
          selectors.siteNavCenteredDropdown
        );

        var fullWidthDropdownOffset = el.offsetTop + 41;
        fullWidthDropdown.style.top = fullWidthDropdownOffset + 'px';
      });
  }

  function keyUpHandler(event) {
    if (event.keyCode === 27) hideDropdown();
  }

  function resizeHandler() {
    adjustStyleAndPosition();
  }

  function submenuParentClickHandler(event) {
    var element = event.currentTarget;

    element.classList.contains(config.activeClass)
      ? hideDropdown()
      : showDropdown(element);
  }

  function submenuFocusoutHandler() {
    setTimeout(function() {
      if (
        document.activeElement.classList.contains(config.childLinkClass) ||
        !cache.activeDropdown
      ) {
        return;
      }

      hideDropdown();
    });
  }

  var adjustStyleAndPosition = theme.Helpers.debounce(function() {
    styleDropdowns(document.querySelectorAll(selectors.siteNavHasDropdown));
    positionFullWidthDropdowns();
  }, 50);

  function unload() {
    cache.topLevel.forEach(function(element) {
      element.removeEventListener('focus', hideDropdown);
    });

    cache.subMenuLinks.forEach(function(element) {
      element.removeEventListener('click', stopImmediatePropagation);
    });

    cache.parents.forEach(function(element) {
      element.removeEventListener('click', submenuParentClickHandler);
    });

    cache.siteNavChildLink.forEach(function(element) {
      element.removeEventListener('focusout', submenuFocusoutHandler);
    });

    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('keyup', keyUpHandler);
    document.body.removeEventListener('click', hideDropdown);
  }

  return {
    init: init,
    unload: unload
  };
})();

window.theme = window.theme || {};

theme.MobileNav = (function() {
  var classes = {
    mobileNavOpenIcon: 'mobile-nav--open',
    mobileNavCloseIcon: 'mobile-nav--close',
    navLinkWrapper: 'mobile-nav__item',
    navLink: 'mobile-nav__link',
    subNavLink: 'mobile-nav__sublist-link',
    return: 'mobile-nav__return-btn',
    subNavActive: 'is-active',
    subNavClosing: 'is-closing',
    navOpen: 'js-menu--is-open',
    subNavShowing: 'sub-nav--is-open',
    thirdNavShowing: 'third-nav--is-open',
    subNavToggleBtn: 'js-toggle-submenu'
  };

  var cache = {};
  var isTransitioning;
  var activeSubNav;
  var activeTrigger;
  var menuLevel = 1;
  var mediumUpQuery = '(min-width: ' + theme.breakpoints.medium + 'px)';
  var mql = window.matchMedia(mediumUpQuery);

  function init() {
    cacheSelectors();

    if (cache.mobileNavToggle) {
      cache.mobileNavToggle.addEventListener('click', toggleMobileNav);
    }

    cache.subNavToggleBtns.forEach(function(element) {
      element.addEventListener('click', toggleSubNav);
    });

    mql.addListener(initBreakpoints);
  }

  function initBreakpoints() {
    if (
      mql.matches &&
      cache.mobileNavContainer.classList.contains(classes.navOpen)
    ) {
      closeMobileNav();
    }
  }

  function toggleMobileNav() {
    var mobileNavIsOpen = cache.mobileNavToggle.classList.contains(
      classes.mobileNavCloseIcon
    );

    if (mobileNavIsOpen) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  }

  function cacheSelectors() {
    cache = {
      pageContainer: document.querySelector('#PageContainer'),
      siteHeader: document.querySelector('.site-header'),
      mobileNavToggle: document.querySelector('.js-mobile-nav-toggle'),
      mobileNavContainer: document.querySelector('.mobile-nav-wrapper'),
      mobileNav: document.querySelector('#MobileNav'),
      sectionHeader: document.querySelector('#shopify-section-header'),
      subNavToggleBtns: document.querySelectorAll('.' + classes.subNavToggleBtn)
    };
  }

  function openMobileNav() {
    var translateHeaderHeight = cache.siteHeader.offsetHeight;

    theme.Helpers.prepareTransition(cache.mobileNavContainer);
    cache.mobileNavContainer.classList.add(classes.navOpen);

    cache.mobileNavContainer.style.transform =
      'translateY(' + translateHeaderHeight + 'px)';

    cache.pageContainer.style.transform =
      'translate3d(0, ' + cache.mobileNavContainer.scrollHeight + 'px, 0)';

    slate.a11y.trapFocus({
      container: cache.sectionHeader,
      elementToFocus: cache.mobileNavToggle
    });

    cache.mobileNavToggle.classList.add(classes.mobileNavCloseIcon);
    cache.mobileNavToggle.classList.remove(classes.mobileNavOpenIcon);
    cache.mobileNavToggle.setAttribute('aria-expanded', true);

    window.addEventListener('keyup', keyUpHandler);
  }

  function keyUpHandler(event) {
    if (event.which === 27) {
      closeMobileNav();
    }
  }

  function closeMobileNav() {
    theme.Helpers.prepareTransition(cache.mobileNavContainer);
    cache.mobileNavContainer.classList.remove(classes.navOpen);
    cache.mobileNavContainer.style.transform = 'translateY(-100%)';
    cache.pageContainer.setAttribute('style', '');

    slate.a11y.trapFocus({
      container: document.querySelector('html'),
      elementToFocus: document.body
    });

    cache.mobileNavContainer.addEventListener(
      'transitionend',
      mobileNavRemoveTrapFocus,
      { once: true }
    );

    cache.mobileNavToggle.classList.add(classes.mobileNavOpenIcon);
    cache.mobileNavToggle.classList.remove(classes.mobileNavCloseIcon);
    cache.mobileNavToggle.setAttribute('aria-expanded', false);
    cache.mobileNavToggle.focus();

    window.removeEventListener('keyup', keyUpHandler);
    window.scrollTo(0, 0);
  }

  function mobileNavRemoveTrapFocus() {
    slate.a11y.removeTrapFocus({
      container: cache.mobileNav
    });
  }

  function toggleSubNav(event) {
    if (isTransitioning) return;

    var toggleBtn = event.currentTarget;
    var isReturn = toggleBtn.classList.contains(classes.return);

    isTransitioning = true;

    if (isReturn) {
      var subNavToggleBtn = document.querySelectorAll(
        '.' + classes.subNavToggleBtn + "[data-level='" + (menuLevel - 1) + "']"
      );

      subNavToggleBtn.forEach(function(element) {
        element.classList.remove(classes.subNavActive);
      });

      if (activeTrigger) {
        activeTrigger.classList.remove(classes.subNavActive);
      }
    } else {
      toggleBtn.classList.add(classes.subNavActive);
    }

    activeTrigger = toggleBtn;

    goToSubnav(toggleBtn.getAttribute('data-target'));
  }

  function goToSubnav(target) {
    var targetMenu = target
      ? document.querySelector(
          '.mobile-nav__dropdown[data-parent="' + target + '"]'
        )
      : cache.mobileNav;

    menuLevel = targetMenu.dataset.level ? Number(targetMenu.dataset.level) : 1;

    if (activeSubNav) {
      theme.Helpers.prepareTransition(activeSubNav);
      activeSubNav.classList.add(classes.subNavClosing);
    }

    activeSubNav = targetMenu;

    var translateMenuHeight = targetMenu.offsetHeight;

    var openNavClass =
      menuLevel > 2 ? classes.thirdNavShowing : classes.subNavShowing;

    cache.mobileNavContainer.style.height = translateMenuHeight + 'px';
    cache.mobileNavContainer.classList.remove(classes.thirdNavShowing);
    cache.mobileNavContainer.classList.add(openNavClass);

    if (!target) {
      cache.mobileNavContainer.classList.remove(
        classes.thirdNavShowing,
        classes.subNavShowing
      );
    }

    /* if going back to first subnav, focus is on whole header */
    var container = menuLevel === 1 ? cache.sectionHeader : targetMenu;

    cache.mobileNavContainer.addEventListener(
      'transitionend',
      trapMobileNavFocus,
      { once: true }
    );

    function trapMobileNavFocus() {
      slate.a11y.trapFocus({
        container: container
      });

      cache.mobileNavContainer.removeEventListener(
        'transitionend',
        trapMobileNavFocus
      );

      isTransitioning = false;
    }

    // Match height of subnav
    cache.pageContainer.style.transform =
      'translateY(' + translateMenuHeight + 'px)';

    activeSubNav.classList.remove(classes.subNavClosing);
  }

  function unload() {
    mql.removeListener(initBreakpoints);
  }

  return {
    init: init,
    unload: unload,
    closeMobileNav: closeMobileNav
  };
})();

window.Modals = (function() {
  function Modal(id, name, options) {
    var defaults = {
      close: '.js-modal-close',
      open: '.js-modal-open-' + name,
      openClass: 'modal--is-active',
      closeModalOnClick: false
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
      node.classList.add(self.config.openClass);
    });

    this.modalIsOpen = true;

    slate.a11y.trapFocus({
      container: this.modal,
      elementToFocus: this.focusOnOpen
    });

    this.bindEvents();
  };

  Modal.prototype.closeModal = function() {
    if (!this.modalIsOpen) return;

    document.activeElement.blur();

    this.modal.classList.remove(this.config.openClass);

    var self = this;

    this.nodes.parents.forEach(function(node) {
      node.classList.remove(self.config.openClass);
    });

    this.modalIsOpen = false;

    slate.a11y.removeTrapFocus({
      container: this.modal
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

  return Modal;
})();

(function() {
  var selectors = {
    backButton: '.return-link'
  };

  var backButton = document.querySelector(selectors.backButton);

  if (!document.referrer || !backButton || !window.history.length) {
    return;
  }

  backButton.addEventListener(
    'click',
    function(evt) {
      evt.preventDefault();

      var referrerDomain = urlDomain(document.referrer);
      var shopDomain = urlDomain(window.location.href);

      if (shopDomain === referrerDomain) {
        history.back();
      }

      return false;
    },
    { once: true }
  );

  function urlDomain(url) {
    var anchor = document.createElement('a');
    anchor.ref = url;

    return anchor.hostname;
  }
})();

theme.Slideshow = (function() {
  var selectors = {
    button: '[data-slider-button]',
    indicator: '[data-slider-indicator]',
    indicators: '[data-slider-indicators]',
    pause: '[data-slider-pause]',
    slider: '[data-slider]',
    sliderItem: '[data-slider-item]',
    sliderItemLink: '[data-slider-item-link]',
    sliderTrack: '[data-slider-track]',
    sliderContainer: '[data-slider-container]'
  };

  var classes = {
    isPaused: 'slideshow__pause--is-paused',
    indicator: 'slider-indicators__item',
    indicatorActive: 'slick-active',
    sliderInitialized: 'slick-initialized',
    slideActive: 'slideshow__slide--active',
    slideClone: 'slick-cloned'
  };

  var attributes = {
    buttonNext: 'data-slider-button-next'
  };

  function Slideshow(container, options) {
    this.container = container;
    this.slider = this.container.querySelector(selectors.slider);

    if (!this.slider) return;

    this.eventHandlers = {};
    this.lastSlide = 0;
    this.slideIndex = 0;
    this.sliderContainer = null;
    this.slides = [];
    this.options = Object.assign(
      {},
      {
        autoplay: false,
        canUseKeyboardArrows: true,
        canUseTouchEvents: false,
        slideActiveClass: classes.slideActive,
        slideInterval: 0,
        slidesToShow: 0,
        slidesToScroll: 1,
        type: 'fade'
      },
      options
    );

    this.sliderContainer = this.slider.querySelector(selectors.sliderContainer);
    this.adaptHeight =
      this.sliderContainer.getAttribute('data-adapt-height') === 'true';
    this.slides = Array.from(
      this.sliderContainer.querySelectorAll(selectors.sliderItem)
    );
    // adding -1 to accomodate Array order
    this.lastSlide = this.slides.length - 1;
    this.buttons = this.container.querySelectorAll(selectors.button);
    this.pause = this.container.querySelector(selectors.pause);
    this.indicators = this.container.querySelectorAll(selectors.indicators);

    if (this.slides.length <= 1) return;

    this.timeout = 250;

    if (this.options.autoplay) {
      this.startAutoplay();
    }

    if (this.adaptHeight) {
      this.setSlideshowHeight();
    }

    if (this.options.type === 'slide') {
      this.isFirstSlide = false;
      this.isLastSlide = false;
      this.sliderItemWidthTotal = 0;
      this.sliderTrack = this.slider.querySelector(selectors.sliderTrack);
      // added setTimeout due to matchMedia calling too early
      // which result wrong value when getting dimension from an element
      this.sliderItemWidthTotal = 0;
      theme.Helpers.promiseStylesheet().then(
        function() {
          this._setupSlideType();
        }.bind(this)
      );
    } else {
      this.setupSlider(0);
    }

    this._setupEventHandlers();
  }

  Slideshow.prototype = Object.assign({}, Slideshow.prototype, {
    /**
     * Moves to the previous slide
     */
    previousSlide: function() {
      this._move();
    },

    /**
     * Moves to the next slide
     */
    nextSlide: function() {
      this._move('next');
    },

    /**
     * Moves to the specified slide
     * @param {Number} index - The index of the slide to move to
     */
    setSlide: function(index) {
      this._setPosition(Number(index));
    },

    /**
     * Starts autoplaying the slider if autoplay is enabled
     */
    startAutoplay: function() {
      this.isAutoPlaying = true;

      window.clearTimeout(this.autoTimeOut);

      this.autoTimeOut = window.setTimeout(
        function() {
          var nextSlideIndex = this._getNextSlideIndex('next');
          this._setPosition(nextSlideIndex);
        }.bind(this),
        this.options.slideInterval
      );
    },

    /**
     * Stops autoplaying the slider if autoplay is enabled
     */
    stopAutoplay: function() {
      this.isAutoPlaying = false;

      window.clearTimeout(this.autoTimeOut);
    },

    /**
     * Set active states for sliders and indicators
     * @param {index} integer - Slide index to set up slider from
     */
    setupSlider: function(index) {
      this.slideIndex = index;

      if (this.indicators.length) {
        this._setActiveIndicator(index);
      }

      this._setupActiveSlide(index);
    },

    /**
     * Removes event listeners, among other things when wanting to destroy the
     * slider instance. This method needs to be called manually and will most
     * likely be included in a section's onUnload() method.
     */
    destroy: function() {
      if (this.adaptHeight) {
        window.removeEventListener('resize', this.eventHandlers.debounceResize);
      }

      this.container.removeEventListener(
        'focus',
        this.eventHandlers.focus,
        true
      );
      this.slider.removeEventListener(
        'focusin',
        this.eventHandlers.focusIn,
        true
      );
      this.slider.removeEventListener(
        'focusout',
        this.eventHandlers.focusOut,
        true
      );
      this.container.removeEventListener('blur', this.eventHandlers.blur, true);

      if (this.buttons) {
        this.buttons.forEach(
          function(button) {
            button.removeEventListener('click', this.eventHandlers.clickButton);
          }.bind(this)
        );
      }

      this.indicators.forEach(function(indicatorWrapper) {
        indicatorWrapper.childNodes.forEach(function(indicator) {
          indicator.firstElementChild.removeEventListener(
            'click',
            this.eventHandlers.onClickIndicator
          );

          indicator.firstElementChild.removeEventListener(
            'keydown',
            this.eventHandlers.onKeydownIndicator
          );
        }, this);
      }, this);

      if (this.options.type === 'slide') {
        window.removeEventListener(
          'resize',
          this.eventHandlers.debounceResizeSlideIn
        );

        if (this.touchEvents && this.options.canUseTouchEvents) {
          this.touchEvents.destroy();
          this.touchEvents = null;
        }
      }
    },

    _setupEventHandlers: function() {
      this.eventHandlers.focus = this._onFocus.bind(this);
      this.eventHandlers.focusIn = this._onFocusIn.bind(this);
      this.eventHandlers.focusOut = this._onFocusOut.bind(this);
      this.eventHandlers.blur = this._onBlur.bind(this);
      this.eventHandlers.keyUp = this._onKeyUp.bind(this);
      this.eventHandlers.clickButton = this._onClickButton.bind(this);
      this.eventHandlers.onClickIndicator = this._onClickIndicator.bind(this);
      this.eventHandlers.onKeydownIndicator = this._onKeydownIndicator.bind(
        this
      );
      this.eventHandlers.onClickPause = this._onClickPause.bind(this);

      if (this.adaptHeight) {
        this.eventHandlers.debounceResize = theme.Helpers.debounce(
          function() {
            this.setSlideshowHeight();
          }.bind(this),
          50
        );

        window.addEventListener('resize', this.eventHandlers.debounceResize);
      }

      this.container.addEventListener('focus', this.eventHandlers.focus, true);
      this.slider.addEventListener('focusin', this.eventHandlers.focusIn, true);
      this.slider.addEventListener(
        'focusout',
        this.eventHandlers.focusOut,
        true
      );
      this.container.addEventListener('blur', this.eventHandlers.blur, true);

      if (this.buttons) {
        this.buttons.forEach(
          function(button) {
            button.addEventListener('click', this.eventHandlers.clickButton);
          }.bind(this)
        );
      }

      if (this.pause) {
        this.pause.addEventListener('click', this.eventHandlers.onClickPause);
      }

      this.indicators.forEach(function(indicatorWrapper) {
        indicatorWrapper.childNodes.forEach(function(indicator) {
          indicator.firstElementChild.addEventListener(
            'click',
            this.eventHandlers.onClickIndicator
          );

          indicator.firstElementChild.addEventListener(
            'keydown',
            this.eventHandlers.onKeydownIndicator
          );
        }, this);
      }, this);

      if (this.options.type === 'slide') {
        this.eventHandlers.debounceResizeSlideIn = theme.Helpers.debounce(
          function() {
            this.sliderItemWidthTotal = 0;
            this._setupSlideType(true);
          }.bind(this),
          50
        );

        window.addEventListener(
          'resize',
          this.eventHandlers.debounceResizeSlideIn
        );

        if (
          this.options.canUseTouchEvents &&
          this.options.slidesToScroll < this.slides.length
        ) {
          this._setupTouchEvents();
        }
      }
    },

    _setupTouchEvents: function() {
      this.touchEvents = new theme.TouchEvents(this.sliderTrack, {
        start: function() {
          this._onTouchStart();
        }.bind(this),
        move: function(event, direction, difference) {
          this._onTouchMove(event, direction, difference);
        }.bind(this),
        end: function(event, direction, difference) {
          this._onTouchEnd(event, direction, difference);
        }.bind(this)
      });
    },

    /**
     * Set slideshop for "slide-in" effect
     * @param {Boolean} onResize if function call came from resize event
     */
    _setupSlideType: function(onResize) {
      this.sliderItemWidth = Math.floor(
        this.sliderContainer.offsetWidth / this.options.slidesToShow
      );
      this.sliderTranslateXMove =
        this.sliderItemWidth * this.options.slidesToScroll;

      if (!onResize) {
        this.sliderContainer.classList.add(classes.sliderInitialized);
      }

      // Loop through all slider items
      // Set width according to the number of items to show in 1 slide
      // Set container width to accomodate all items
      this.slides.forEach(function(sliderItem, index) {
        var sliderItemLink = sliderItem.querySelector(selectors.sliderItemLink);
        sliderItem.style.width = this.sliderItemWidth + 'px';
        sliderItem.setAttribute('aria-hidden', true);
        sliderItem.setAttribute('tabindex', -1);
        this.sliderItemWidthTotal =
          this.sliderItemWidthTotal + sliderItem.offsetWidth;

        if (sliderItemLink) {
          sliderItemLink.setAttribute('tabindex', -1);
        }

        if (index < this.options.slidesToShow) {
          sliderItem.setAttribute('aria-hidden', false);
          sliderItem.classList.add(this.options.slideActiveClass);

          if (sliderItemLink) {
            sliderItemLink.setAttribute('tabindex', 0);
          }
        }
      }, this);

      this.sliderTrack.style.width =
        Math.floor(this.sliderItemWidthTotal) + 'px';
      this.sliderTrack.style.transform = 'translateX(-0px)';

      // set disabled attribute on Previous button
      if (this.buttons.length) {
        this.buttons[0].setAttribute('aria-disabled', true);
        this.buttons[1].removeAttribute('aria-disabled');
      }

      if (this.indicators.length) {
        this._setActiveIndicator(0);
      }
    },

    _onTouchStart: function() {
      this.touchStartPosition = this._getTranslateXPosition();
    },

    _onTouchMove: function(event, direction, difference) {
      // Fix touch events cause unexpected behaviour
      // when the dragging motion goes beyond the theme editor preview.
      var threshold = 80;
      if (
        Shopify.designMode &&
        (event.clientX <= threshold ||
          event.clientX >= window.innerWidth - threshold)
      ) {
        event.target.dispatchEvent(
          new MouseEvent('mouseup', {
            bubbles: true,
            cancelable: true
          })
        );
        return;
      }

      if (direction !== 'left' && direction !== 'right') return;

      this.touchMovePosition = this.touchStartPosition + difference.xPosition;

      this.sliderTrack.style.transform =
        'translateX(' + this.touchMovePosition + 'px';
    },

    _onTouchEnd: function(event, direction, difference) {
      var nextTranslateXPosition = 0;

      if (Object.keys(difference).length === 0) return;

      var slideDirection = direction === 'left' ? 'next' : '';

      if (direction === 'left') {
        if (this._isNextTranslateXLast(this.touchStartPosition)) {
          nextTranslateXPosition = this.touchStartPosition;
        } else {
          nextTranslateXPosition =
            this.touchStartPosition - this.sliderTranslateXMove;
        }
      } else {
        nextTranslateXPosition =
          this.touchStartPosition + this.sliderTranslateXMove;
        if (this._isNextTranslateXFirst(this.touchStartPosition)) {
          nextTranslateXPosition = 0;
        }
      }

      this.slideIndex = this._getNextSlideIndex(slideDirection);

      this.sliderTrack.style.transition = 'transform 500ms ease 0s';
      this.sliderTrack.style.transform =
        'translateX(' + nextTranslateXPosition + 'px';

      window.setTimeout(
        function() {
          this.sliderTrack.style.transition = '';
        }.bind(this),
        500
      );

      this._verifyFirstLastSlideTranslateX(nextTranslateXPosition);

      this._postTransitionEnd();
    },

    /**
     * Events handlers for next and previous button
     * @param {Object} event event handler
     */
    _onClickButton: function(event) {
      // prevent multiple clicks
      if (event.detail > 1) return;

      var button = event.currentTarget;
      var nextButton = button.hasAttribute(attributes.buttonNext);

      if (
        this.options.type === 'slide' &&
        button.getAttribute('aria-disabled') === 'true'
      ) {
        return;
      }

      if (this.options.autoplay && this.isAutoPlaying) {
        this.stopAutoplay();
      }

      if (nextButton) {
        this.nextSlide();
      } else {
        this.previousSlide();
      }
    },

    _onClickIndicator: function(event) {
      event.preventDefault();

      if (event.target.classList.contains(classes.indicatorActive)) return;

      if (this.options.autoplay && this.isAutoPlaying) {
        this.stopAutoplay();
      }

      this.slideIndex = Number(event.target.dataset.slideNumber);
      this.goToSlideByIndex(this.slideIndex);
    },

    goToSlideByIndex: function(index) {
      this._setPosition(index);

      if (this.options.type === 'slide' && this.sliderTrack) {
        this.sliderTrack.style.transition = 'transform 500ms ease 0s';
        var newPosition = index * this.slides[0].offsetWidth;

        this.sliderTrack.style.transform = 'translateX(-' + newPosition + 'px)';

        if (this.options.slidesToShow > 1) {
          this._verifyFirstLastSlideTranslateX(newPosition);

          if (this.buttons.length) {
            this._disableArrows();
          }

          this._setupMultipleActiveSlide(
            index,
            index + (this.options.slidesToShow - 1)
          );
        }
      }
    },

    _onKeydownIndicator: function(event) {
      if (event.keyCode !== slate.utils.keyboardKeys.ENTER) return;

      this._onClickIndicator(event);

      this.slider.focus();
    },

    _onClickPause: function(event) {
      if (!event.currentTarget.classList.contains(classes.isPaused)) {
        event.currentTarget.classList.add(classes.isPaused);
        this.stopAutoplay();
      } else {
        event.currentTarget.classList.remove(classes.isPaused);
        this.startAutoplay();
      }
    },

    _onFocus: function() {
      this.container.addEventListener('keyup', this.eventHandlers.keyUp);
    },

    _onFocusIn: function() {
      if (this.slider.hasAttribute('aria-live')) return;

      if (this.options.autoplay && this.isAutoPlaying) {
        this.stopAutoplay();
      }

      this.slider.setAttribute('aria-live', 'polite');
    },

    _onBlur: function() {
      this.container.removeEventListener('keyup', this.eventHandlers.keyUp);
    },

    _onFocusOut: function() {
      this.slider.removeAttribute('aria-live');

      // Adding a setTimeout because everytime we focus out
      // It automatically goes to <body>
      // We want to resume autoplay when focus is outside of the slideshow container
      setTimeout(
        function() {
          if (
            !document.activeElement.closest(
              '#' + this.slider.getAttribute('id')
            )
          ) {
            if (
              this.options.autoplay &&
              !this.isAutoPlaying &&
              !this.pause.classList.contains(classes.isPaused)
            ) {
              this.startAutoplay();
            }
          }
        }.bind(this),
        this.timeout
      );
    },

    _onKeyUp: function(event) {
      switch (event.keyCode) {
        case slate.utils.keyboardKeys.LEFTARROW:
          if (!this.options.canUseKeyboardArrows) return;

          if (this.options.type === 'slide' && this.isFirstSlide) {
            return;
          }

          this.previousSlide();

          break;
        case slate.utils.keyboardKeys.RIGHTARROW:
          if (!this.options.canUseKeyboardArrows) return;

          if (this.options.type === 'slide' && this.isLastSlide) {
            return;
          }

          this.nextSlide();

          break;
        case slate.utils.keyboardKeys.ESCAPE:
          this.slider.blur();
          break;
      }
    },

    _move: function(direction) {
      if (this.options.type === 'slide') {
        this.slideIndex = this._getNextSlideIndex(direction);
        this._moveSlideshow(direction);
      } else {
        var nextSlideIndex = this._getNextSlideIndex(direction);
        this._setPosition(nextSlideIndex);
      }
    },

    _moveSlideshow: function(direction) {
      this.direction = direction;
      var valueXToMove = 0;

      // Get current position of translateX
      var currentTranslateXPosition = this._getTranslateXPosition();
      var currentActiveSlidesIndex = this._getActiveSlidesIndex();

      // In the future, we'll use ES6 deconstructure
      // Math.min(...currentActiveSlidesIndex);
      var currentActiveSlidesMinIndex = Math.min.apply(
        Math,
        currentActiveSlidesIndex
      );
      var currentActiveSlidesMaxIndex = Math.max.apply(
        Math,
        currentActiveSlidesIndex
      );

      // Set the next active state depending on the direction
      // We bump up the index depending on the "slidesToShow" option
      this.nextMinIndex =
        direction === 'next'
          ? currentActiveSlidesMinIndex + this.options.slidesToShow
          : currentActiveSlidesMinIndex - this.options.slidesToShow;
      this.nextMaxIndex =
        direction === 'next'
          ? currentActiveSlidesMaxIndex + this.options.slidesToShow
          : currentActiveSlidesMinIndex - 1;

      this.sliderTrack.style.transition = 'transform 500ms ease 0s';

      if (direction === 'next') {
        valueXToMove = currentTranslateXPosition - this.sliderTranslateXMove;
        this.sliderTrack.style.transform = 'translateX(' + valueXToMove + 'px)';
      } else {
        valueXToMove = currentTranslateXPosition + this.sliderTranslateXMove;
        this.sliderTrack.style.transform = 'translateX(' + valueXToMove + 'px)';
      }

      this._verifyFirstLastSlideTranslateX(valueXToMove);

      this._postTransitionEnd();

      this._setupMultipleActiveSlide(this.nextMinIndex, this.nextMaxIndex);
    },

    _setPosition: function(nextSlideIndex) {
      this.slideIndex = nextSlideIndex;

      if (this.indicators.length) {
        this._setActiveIndicator(nextSlideIndex);
      }

      this._setupActiveSlide(nextSlideIndex);

      if (this.options.autoplay && this.isAutoPlaying) {
        this.startAutoplay();
      }

      this.container.dispatchEvent(
        new CustomEvent('slider_slide_changed', {
          detail: nextSlideIndex
        })
      );
    },

    _setupActiveSlide: function(index) {
      this.slides.forEach(function(slide) {
        slide.setAttribute('aria-hidden', true);
        slide.classList.remove(this.options.slideActiveClass);
      }, this);

      this.slides[index].setAttribute('aria-hidden', false);
      this.slides[index].classList.add(this.options.slideActiveClass);
    },

    /**
     * Loops through all slide items
     * Set the active state depending the direction and slide indexes
     * Because slide-in effect can have multiple items in 1 slide, we need to target multiple active elements
     * @param {String} direction "next" for next slides or empty string for previous
     * @param {*} minIndex the current active minimum index
     * @param {*} maxIndex the current active maximum index
     */
    _setupMultipleActiveSlide: function(minIndex, maxIndex) {
      this.slides.forEach(function(slide) {
        var sliderIndex = Number(slide.getAttribute('data-slider-slide-index'));
        var sliderItemLink = slide.querySelector(selectors.sliderItemLink);

        slide.setAttribute('aria-hidden', true);
        slide.classList.remove(this.options.slideActiveClass);
        if (sliderItemLink) {
          sliderItemLink.setAttribute('tabindex', -1);
        }

        if (sliderIndex >= minIndex && sliderIndex <= maxIndex) {
          slide.setAttribute('aria-hidden', false);
          slide.classList.add(this.options.slideActiveClass);

          if (sliderItemLink) {
            sliderItemLink.setAttribute('tabindex', 0);
          }
        }
      }, this);
    },

    _setActiveIndicator: function(index) {
      this.indicators.forEach(function(indicatorWrapper) {
        var activeIndicator = indicatorWrapper.querySelector(
          '.' + classes.indicatorActive
        );

        var nextIndicator = indicatorWrapper.childNodes[index];

        if (activeIndicator) {
          activeIndicator.setAttribute('aria-selected', false);
          activeIndicator.classList.remove(classes.indicatorActive);
          activeIndicator.firstElementChild.removeAttribute('aria-current');
        }

        nextIndicator.classList.add(classes.indicatorActive);
        nextIndicator.setAttribute('aria-selected', true);
        nextIndicator.firstElementChild.setAttribute('aria-current', true);
      }, this);
    },

    setSlideshowHeight: function() {
      var minAspectRatio = this.sliderContainer.getAttribute(
        'data-min-aspect-ratio'
      );
      this.sliderContainer.style.height =
        document.documentElement.offsetWidth / minAspectRatio + 'px';
    },

    /**
     * Increase or decrease index position of the slideshow
     * Automatically auto-rotate
     * - Last slide goes to first slide when clicking "next"
     * - First slide goes to last slide when clicking "previous"
     * @param {String} direction "next" as a String, other empty string is previous slide
     */
    _getNextSlideIndex: function(direction) {
      var counter = direction === 'next' ? 1 : -1;

      if (direction === 'next') {
        if (this.slideIndex === this.lastSlide) {
          return this.options.type === 'slide' ? this.lastSlide : 0;
        }
      } else if (!this.slideIndex) {
        return this.options.type === 'slide' ? 0 : this.lastSlide;
      }

      return this.slideIndex + counter;
    },

    /**
     * In "slide-in" type, multiple items are active in 1 slide
     * This will return an array containing their indexes
     */
    _getActiveSlidesIndex: function() {
      var currentActiveSlides = this.slides.filter(function(sliderItem) {
        if (sliderItem.classList.contains(this.options.slideActiveClass)) {
          return sliderItem;
        }
      }, this);
      var currentActiveSlidesIndex = currentActiveSlides.map(function(
        sliderItem
      ) {
        return Number(sliderItem.getAttribute('data-slider-slide-index'));
      });

      return currentActiveSlidesIndex;
    },

    /**
     * This checks the next "translateX" value and verifies
     * If it's at the last slide or beginning of the slide
     * So we can disable the arrow buttons
     */
    _disableArrows: function() {
      if (this.buttons.length === 0) return;

      var previousButton = this.buttons[0];
      var nextButton = this.buttons[1];

      // first slide
      if (this.isFirstSlide) {
        previousButton.setAttribute('aria-disabled', true);
      } else {
        previousButton.removeAttribute('aria-disabled');
      }

      // last slide
      if (this.isLastSlide) {
        nextButton.setAttribute('aria-disabled', true);
      } else {
        nextButton.removeAttribute('aria-disabled');
      }
    },

    /**
     * Verify if translateX reaches at first or last slide
     * @param {Number} translateXValue
     */
    _verifyFirstLastSlideTranslateX: function(translateXValue) {
      // first slide
      if (this._isNextTranslateXFirst(translateXValue)) {
        this.isFirstSlide = true;
      } else {
        this.isFirstSlide = false;
      }

      // last slide
      if (this._isNextTranslateXLast(translateXValue)) {
        this.isLastSlide = true;
      } else {
        this.isLastSlide = false;
      }
    },

    _getTranslateXPosition: function() {
      return Number(this.sliderTrack.style.transform.match(/(-?[0-9]+)/g)[0]);
    },

    _isNextTranslateXFirst: function(translateXValue) {
      return translateXValue === 0;
    },

    _isNextTranslateXLast: function(translateXValue) {
      // because translateX values are using negative, I'm converting into positive value
      var translateXValueAbsolute = Math.abs(translateXValue);
      var nextTranslateXValue =
        translateXValueAbsolute + this.sliderTranslateXMove;

      return nextTranslateXValue >= this.sliderItemWidthTotal;
    },

    _postTransitionEnd: function() {
      if (this.buttons.length) {
        this._disableArrows();
      }

      if (this.indicators.length) {
        this._setActiveIndicator(this.slideIndex);
      }
    }
  });

  return Slideshow;
})();

theme.Video = (function() {
  var autoplayCheckComplete = false;
  var playOnClickChecked = false;
  var playOnClick = false;
  var youtubeLoaded = false;
  var videos = {};
  var videoPlayers = [];
  var videoOptions = {
    ratio: 16 / 9,
    scrollAnimationDuration: 400,
    playerVars: {
      // eslint-disable-next-line camelcase
      iv_load_policy: 3,
      modestbranding: 1,
      autoplay: 0,
      controls: 0,
      wmode: 'opaque',
      branding: 0,
      autohide: 0,
      rel: 0
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerChange
    }
  };
  var classes = {
    playing: 'video-is-playing',
    paused: 'video-is-paused',
    loading: 'video-is-loading',
    loaded: 'video-is-loaded',
    backgroundVideoWrapper: 'video-background-wrapper',
    videoWithImage: 'video--image_with_play',
    backgroundVideo: 'video--background',
    userPaused: 'is-paused',
    supportsAutoplay: 'autoplay',
    supportsNoAutoplay: 'no-autoplay',
    wrapperMinHeight: 'video-section-wrapper--min-height'
  };

  var selectors = {
    section: '.video-section',
    videoWrapper: '.video-section-wrapper',
    playVideoBtn: '.video-control__play',
    closeVideoBtn: '.video-control__close-wrapper',
    pauseVideoBtn: '.video__pause',
    pauseVideoStop: '.video__pause-stop',
    pauseVideoResume: '.video__pause-resume',
    fallbackText: '.icon__fallback-text'
  };

  /**
   * Public functions
   */
  function init(video) {
    if (!video) return;

    videos[video.id] = {
      id: video.id,
      videoId: video.dataset.id,
      type: video.dataset.type,
      status:
        video.dataset.type === 'image_with_play' ? 'closed' : 'background', // closed, open, background
      video: video,
      videoWrapper: video.closest(selectors.videoWrapper),
      section: video.closest(selectors.section),
      controls: video.dataset.type === 'background' ? 0 : 1
    };

    if (!youtubeLoaded) {
      // This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    playOnClickCheck();
  }

  function customPlayVideo(playerId) {
    // Make sure we have carried out the playOnClick check first
    if (!playOnClickChecked && !playOnClick) {
      return;
    }

    if (playerId && typeof videoPlayers[playerId].playVideo === 'function') {
      privatePlayVideo(playerId);
    }
  }

  function pauseVideo(playerId) {
    if (
      videoPlayers[playerId] &&
      typeof videoPlayers[playerId].pauseVideo === 'function'
    ) {
      videoPlayers[playerId].pauseVideo();
    }
  }

  function loadVideos() {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        createPlayer(key);
      }
    }

    initEvents();
    youtubeLoaded = true;
  }

  function editorLoadVideo(key) {
    if (!youtubeLoaded) {
      return;
    }
    createPlayer(key);

    initEvents();
  }

  /**
   * Private functions
   */

  function privatePlayVideo(id, clicked) {
    var videoData = videos[id];
    var player = videoPlayers[id];
    var videoWrapper = videoData.videoWrapper;

    if (playOnClick) {
      // playOnClick means we are probably on mobile (no autoplay).
      // setAsPlaying will show the iframe, requiring another click
      // to play the video.
      setAsPlaying(videoData);
    } else if (clicked || autoplayCheckComplete) {
      // Play if autoplay is available or clicked to play
      videoWrapper.classList.remove(classes.loading);
      setAsPlaying(videoData);
      player.playVideo();
      return;
    } else {
      player.playVideo();
    }
  }

  function setAutoplaySupport(supported) {
    var supportClass = supported
      ? classes.supportsAutoplay
      : classes.supportsNoAutoplay;
    document.documentElement.classList.remove(
      classes.supportsAutoplay,
      classes.supportsNoAutoplay
    );
    document.documentElement.classList.add(supportClass);

    if (!supported) {
      playOnClick = true;
    }

    autoplayCheckComplete = true;
  }

  function playOnClickCheck() {
    if (playOnClickChecked) {
      return;
    }

    if (isMobile()) {
      playOnClick = true;
    }

    if (playOnClick) {
      // No need to also do the autoplay check
      setAutoplaySupport(false);
    }

    playOnClickChecked = true;
  }

  // The API will call this function when each video player is ready
  function onPlayerReady(evt) {
    evt.target.setPlaybackQuality('hd1080');
    var videoData = getVideoOptions(evt);
    var videoTitle = evt.target.getVideoData().title;
    playOnClickCheck();

    // Prevent tabbing through YouTube player controls until visible
    document.getElementById(videoData.id).setAttribute('tabindex', '-1');

    sizeBackgroundVideos();
    setButtonLabels(videoData.videoWrapper, videoTitle);

    // Customize based on options from the video ID
    if (videoData.type === 'background') {
      evt.target.mute();
      privatePlayVideo(videoData.id);
    }

    videoData.videoWrapper.classList.add(classes.loaded);
  }

  function onPlayerChange(evt) {
    var videoData = getVideoOptions(evt);
    if (
      videoData.status === 'background' &&
      !isMobile() &&
      !autoplayCheckComplete &&
      (evt.data === YT.PlayerState.PLAYING ||
        evt.data === YT.PlayerState.BUFFERING)
    ) {
      setAutoplaySupport(true);
      autoplayCheckComplete = true;
      videoData.videoWrapper.classList.remove(classes.loading);
    }
    switch (evt.data) {
      case YT.PlayerState.ENDED:
        setAsFinished(videoData);
        break;
      case YT.PlayerState.PAUSED:
        // Seeking on a YouTube video also fires a PAUSED state change,
        // checking the state after a delay prevents us pausing the video when
        // the user is seeking instead of pausing
        setTimeout(function() {
          if (evt.target.getPlayerState() === YT.PlayerState.PAUSED) {
            setAsPaused(videoData);
          }
        }, 200);
        break;
    }
  }

  function setAsFinished(videoData) {
    switch (videoData.type) {
      case 'background':
        videoPlayers[videoData.id].seekTo(0);
        break;
      case 'image_with_play':
        closeVideo(videoData.id);
        toggleExpandVideo(videoData.id, false);
        break;
    }
  }

  function setAsPlaying(videoData) {
    var videoWrapper = videoData.videoWrapper;
    var pauseButton = videoWrapper.querySelector(selectors.pauseVideoBtn);

    videoWrapper.classList.remove(classes.loading);

    if (pauseButton.classList.contains(classes.userPaused)) {
      pauseButton.classList.remove(classes.userPaused);
    }

    // Do not change element visibility if it is a background video
    if (videoData.status === 'background') {
      return;
    }

    document.getElementById(videoData.id).setAttribute('tabindex', '0');

    if (videoData.type === 'image_with_play') {
      videoWrapper.classList.remove(classes.paused);
      videoWrapper.classList.add(classes.playing);
    }

    // Update focus to the close button so we stay within the video wrapper,
    // allowing time for the scroll animation
    setTimeout(function() {
      videoWrapper.querySelector(selectors.closeVideoBtn).focus();
    }, videoOptions.scrollAnimationDuration);
  }

  function setAsPaused(videoData) {
    var videoWrapper = videoData.videoWrapper;

    // YT's events fire after our click event. This status flag ensures
    // we don't interact with a closed or background video.
    if (videoData.type === 'image_with_play') {
      if (videoData.status === 'closed') {
        videoWrapper.classList.remove(classes.paused);
      } else {
        videoWrapper.classList.add(classes.paused);
      }
    }

    videoWrapper.classList.remove(classes.playing);
  }

  function closeVideo(playerId) {
    var videoData = videos[playerId];
    var videoWrapper = videoData.videoWrapper;

    document.getElementById(videoData.id).setAttribute('tabindex', '-1');

    videoData.status = 'closed';

    switch (videoData.type) {
      case 'image_with_play':
        videoPlayers[playerId].stopVideo();
        setAsPaused(videoData); // in case the video is already paused
        break;
      case 'background':
        videoPlayers[playerId].mute();
        setBackgroundVideo(playerId);
        break;
    }

    videoWrapper.classList.remove(classes.paused, classes.playing);
  }

  function getVideoOptions(evt) {
    var id = evt.target.getIframe().id;
    return videos[id];
  }

  function toggleExpandVideo(playerId, expand) {
    var video = videos[playerId];
    var elementTop =
      video.videoWrapper.getBoundingClientRect().top + window.pageYOffset;
    var playButton = video.videoWrapper.querySelector(selectors.playVideoBtn);
    var offset = 0;
    var newHeight = 0;

    if (isMobile()) {
      video.videoWrapper.parentElement.classList.toggle('page-width', !expand);
    }

    if (expand) {
      if (isMobile()) {
        newHeight = window.innerWidth / videoOptions.ratio;
      } else {
        newHeight = video.videoWrapper.offsetWidth / videoOptions.ratio;
      }
      offset = (window.innerHeight - newHeight) / 2;

      video.videoWrapper.style.height =
        video.videoWrapper.getBoundingClientRect().height + 'px';
      video.videoWrapper.classList.remove(classes.wrapperMinHeight);
      video.videoWrapper.style.height = newHeight + 'px';

      // Animate doesn't work in mobile editor, so we don't use it
      if (!(isMobile() && Shopify.designMode)) {
        var scrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'smooth';
        window.scrollTo({ top: elementTop - offset });
        document.documentElement.style.scrollBehavior = scrollBehavior;
      }
    } else {
      if (isMobile()) {
        newHeight = video.videoWrapper.dataset.mobileHeight;
      } else {
        newHeight = video.videoWrapper.dataset.desktopHeight;
      }

      video.videoWrapper.style.height = newHeight + 'px';

      setTimeout(function() {
        video.videoWrapper.classList.add(classes.wrapperMinHeight);
      }, 600);
      // Set focus on play button, but don't scroll page
      var x = window.scrollX;
      var y = window.scrollY;
      playButton.focus();
      window.scrollTo(x, y);
    }
  }

  function togglePause(playerId) {
    var pauseButton = videos[playerId].videoWrapper.querySelector(
      selectors.pauseVideoBtn
    );
    var paused = pauseButton.classList.contains(classes.userPaused);
    if (paused) {
      pauseButton.classList.remove(classes.userPaused);
      customPlayVideo(playerId);
    } else {
      pauseButton.classList.add(classes.userPaused);
      pauseVideo(playerId);
    }
    pauseButton.setAttribute('aria-pressed', !paused);
  }

  function startVideoOnClick(playerId) {
    var video = videos[playerId];

    // add loading class to wrapper
    video.videoWrapper.classList.add(classes.loading);

    // Explicity set the video wrapper height (needed for height transition)
    video.videoWrapper.style.height = video.videoWrapper.offsetHeight + 'px';

    video.status = 'open';

    switch (video.type) {
      case 'image_with_play':
        privatePlayVideo(playerId, true);
        break;
      case 'background':
        unsetBackgroundVideo(playerId, video);
        videoPlayers[playerId].unMute();
        privatePlayVideo(playerId, true);
        break;
    }

    toggleExpandVideo(playerId, true);

    // esc to close video player
    document.addEventListener('keydown', handleVideoPlayerKeydown);
  }

  var handleVideoPlayerKeydown = function(evt) {
    var playerId = document.activeElement.dataset.controls;
    if (evt.keyCode !== slate.utils.keyboardKeys.ESCAPE || !playerId) {
      return;
    }

    closeVideo(playerId);
    toggleExpandVideo(playerId, false);
  };

  function sizeBackgroundVideos() {
    var backgroundVideos = document.querySelectorAll(
      '.' + classes.backgroundVideo
    );
    backgroundVideos.forEach(function(el) {
      sizeBackgroundVideo(el);
    });
  }

  function sizeBackgroundVideo(videoPlayer) {
    if (!youtubeLoaded) {
      return;
    }

    if (isMobile()) {
      videoPlayer.style.cssText = null;
    } else {
      var videoWrapper = videoPlayer.closest(selectors.videoWrapper);
      var videoWidth = videoWrapper.clientWidth;
      var playerWidth = videoPlayer.clientWidth;
      var desktopHeight = videoWrapper.dataset.desktopHeight;

      // when screen aspect ratio differs from video, video must center and underlay one dimension
      if (videoWidth / videoOptions.ratio < desktopHeight) {
        playerWidth = Math.ceil(desktopHeight * videoOptions.ratio); // get new player width
        var styles =
          'width: ' +
          playerWidth +
          'px; height: ' +
          desktopHeight +
          'px; left: ' +
          (videoWidth - playerWidth) / 2 +
          'px; top: 0;';
        videoPlayer.style.cssText = styles;
      } else {
        // new video width < window width (gap to right)
        desktopHeight = Math.ceil(videoWidth / videoOptions.ratio); // get new player height
        var styles2 =
          'width: ' +
          videoWidth +
          'px; height: ' +
          desktopHeight +
          'px; top: ' +
          (desktopHeight - desktopHeight) / 2 +
          'px; left: 0;'; // player height is greater, offset top; reset left
        videoPlayer.style.cssText = styles2;
      }

      theme.Helpers.prepareTransition(videoPlayer);
      videoWrapper.classList.add(classes.loaded);
    }
  }

  function unsetBackgroundVideo(playerId) {
    // Switch the background video to a chrome-only player once played
    var player = document.getElementById(playerId);
    player.classList.remove(classes.backgroundVideo);
    player.classList.add(classes.videoWithImage);

    setTimeout(function() {
      document.getElementById(playerId).style.cssText = null;
    }, 600);

    videos[playerId].videoWrapper.classList.remove(
      classes.backgroundVideoWrapper
    );
    videos[playerId].videoWrapper.classList.add(classes.playing);

    videos[playerId].status = 'open';
  }

  function setBackgroundVideo(playerId) {
    var player = document.getElementById(playerId);
    player.classList.remove(classes.videoWithImage);
    player.classList.add(classes.backgroundVideo);

    videos[playerId].videoWrapper.classList.add(classes.backgroundVideoWrapper);

    videos[playerId].status = 'background';
    sizeBackgroundVideo(player);
  }

  function isMobile() {
    return window.innerWidth < theme.breakpoints.medium;
  }

  var handleWindowResize = theme.Helpers.debounce(function() {
    if (!youtubeLoaded) return;
    var key;
    var fullscreen = window.innerHeight === screen.height;
    sizeBackgroundVideos();

    if (isMobile()) {
      for (key in videos) {
        if (videos.hasOwnProperty(key)) {
          if (videos[key].videoWrapper.classList.contains(classes.playing)) {
            if (!fullscreen) {
              pauseVideo(key);
              setAsPaused(videos[key]);
            }
          }
          videos[key].videoWrapper.style.height =
            document.documentElement.clientWidth / videoOptions.ratio + 'px';
        }
      }
      setAutoplaySupport(false);
    } else {
      setAutoplaySupport(true);
      for (key in videos) {
        var videosWithImage = videos[key].videoWrapper.querySelectorAll(
          '.' + classes.videoWithImage
        );
        if (videosWithImage.length) {
          continue;
        }
        videoPlayers[key].playVideo();
        setAsPlaying(videos[key]);
      }
    }
  }, 200);

  var handleWindowScroll = theme.Helpers.debounce(function() {
    if (!youtubeLoaded) return;

    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var videoWrapper = videos[key].videoWrapper;
        var condition =
          videoWrapper.getBoundingClientRect().top +
            window.pageYOffset +
            videoWrapper.offsetHeight * 0.75 <
            window.pageYOffset ||
          videoWrapper.getBoundingClientRect().top +
            window.pageYOffset +
            videoWrapper.offsetHeight * 0.25 >
            window.pageYOffset + window.innerHeight;

        // Close the video if more than 75% of it is scrolled out of view
        if (videoWrapper.classList.contains(classes.playing)) {
          if (!condition) return;
          closeVideo(key);
          toggleExpandVideo(key, false);
        }
      }
    }
  }, 50);

  function initEvents() {
    var playVideoBtns = document.querySelectorAll(selectors.playVideoBtn);
    var closeVideoBtns = document.querySelectorAll(selectors.closeVideoBtn);
    var pauseVideoBtns = document.querySelectorAll(selectors.pauseVideoBtn);

    playVideoBtns.forEach(function(btn) {
      btn.addEventListener('click', function(evt) {
        var playerId = evt.currentTarget.dataset.controls;
        startVideoOnClick(playerId);
      });
    });

    closeVideoBtns.forEach(function(btn) {
      btn.addEventListener('click', function(evt) {
        var playerId = evt.currentTarget.dataset.controls;

        evt.currentTarget.blur();
        closeVideo(playerId);
        toggleExpandVideo(playerId, false);
      });
    });

    pauseVideoBtns.forEach(function(btn) {
      btn.addEventListener('click', function(evt) {
        var playerId = evt.currentTarget.dataset.controls;
        togglePause(playerId);
      });
    });

    // Listen to resize to keep a background-size:cover-like layout
    window.addEventListener('resize', handleWindowResize);

    window.addEventListener('scroll', handleWindowScroll);
  }

  function createPlayer(key) {
    var args = Object.assign(videoOptions, videos[key]);

    args.playerVars.controls = args.controls;
    videoPlayers[key] = new YT.Player(key, args);
  }

  function removeEvents() {
    document.removeEventListener('keydown', handleVideoPlayerKeydown);
    window.removeEventListener('resize', handleWindowResize);
    window.removeEventListener('scroll', handleWindowScroll);
  }

  function setButtonLabels(videoWrapper, title) {
    var playButtons = videoWrapper.querySelectorAll(selectors.playVideoBtn);
    var closeButton = videoWrapper.querySelector(selectors.closeVideoBtn);
    var pauseButton = videoWrapper.querySelector(selectors.pauseVideoBtn);
    var closeButtonText = closeButton.querySelector(selectors.fallbackText);

    var pauseButtonStop = pauseButton.querySelector(selectors.pauseVideoStop);
    var pauseButtonStopText = pauseButtonStop.querySelector(
      selectors.fallbackText
    );

    var pauseButtonResume = pauseButton.querySelector(
      selectors.pauseVideoResume
    );
    var pauseButtonResumeText = pauseButtonResume.querySelector(
      selectors.fallbackText
    );

    // Insert the video title retrieved from YouTube into the instructional text
    // for each button
    playButtons.forEach(function(playButton) {
      var playButtonText = playButton.querySelector(selectors.fallbackText);

      playButtonText.textContent = playButtonText.textContent.replace(
        '[video_title]',
        title
      );
    });
    closeButtonText.textContent = closeButtonText.textContent.replace(
      '[video_title]',
      title
    );
    pauseButtonStopText.textContent = pauseButtonStopText.textContent.replace(
      '[video_title]',
      title
    );
    pauseButtonResumeText.textContent = pauseButtonResumeText.textContent.replace(
      '[video_title]',
      title
    );
  }

  return {
    init: init,
    editorLoadVideo: editorLoadVideo,
    loadVideos: loadVideos,
    playVideo: customPlayVideo,
    pauseVideo: pauseVideo,
    removeEvents: removeEvents
  };
})();

theme.ProductVideo = (function() {
  var videos = {};

  var hosts = {
    shopify: 'shopify',
    external: 'external'
  };

  var selectors = {
    productMediaWrapper: '[data-product-single-media-wrapper]'
  };

  var attributes = {
    enableVideoLooping: 'enable-video-looping',
    videoId: 'video-id'
  };

  function init(videoContainer, sectionId) {
    if (!videoContainer) {
      return;
    }

    var videoElement = videoContainer.querySelector('iframe, video');

    if (!videoElement) {
      return;
    }

    var mediaId = videoContainer.getAttribute('data-media-id');

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

    window.Shopify.loadFeatures([
      {
        name: 'video-ui',
        version: '2.0',
        onLoad: setupVideos
      }
    ]);
    theme.LibraryLoader.load('plyrShopifyStyles');
  }

  function setupVideos(errors) {
    if (errors) {
      fallbackToNativeVideo();
      return;
    }

    loadVideos();
  }

  function createPlayer(video) {
    if (video.player) {
      return;
    }

    var productMediaWrapper = video.container.closest(
      selectors.productMediaWrapper
    );

    var enableLooping = productMediaWrapper.getAttribute(
      'data-' + attributes.enableVideoLooping
    );

    // eslint-disable-next-line no-undef
    video.player = new Shopify.Video(video.element, {
      loop: { active: enableLooping }
    });

    var pauseVideo = function() {
      if (!video.player) return;
      video.player.pause();
    };

    productMediaWrapper.addEventListener('mediaHidden', pauseVideo);
    productMediaWrapper.addEventListener('xrLaunch', pauseVideo);

    productMediaWrapper.addEventListener('mediaVisible', function() {
      if (theme.Helpers.isTouch()) return;
      if (!video.player) return;
      video.player.play();
    });
  }

  function hostFromVideoElement(video) {
    if (video.tagName === 'VIDEO') {
      return hosts.shopify;
    }

    return hosts.external;
  }

  function loadVideos() {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];
        video.ready();
      }
    }
  }

  function fallbackToNativeVideo() {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];

        if (video.nativeVideo) continue;

        if (video.host === hosts.shopify) {
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

theme.ProductModel = (function() {
  var modelJsonSections = {};
  var models = {};
  var xrButtons = {};

  var selectors = {
    mediaGroup: '[data-product-single-media-group]',
    xrButton: '[data-shopify-xr]'
  };

  function init(modelViewerContainers, sectionId) {
    modelJsonSections[sectionId] = {
      loaded: false
    };

    modelViewerContainers.forEach(function(modelViewerContainer, index) {
      var mediaId = modelViewerContainer.getAttribute('data-media-id');
      var modelViewerElement = modelViewerContainer.querySelector(
        'model-viewer'
      );
      var modelId = modelViewerElement.getAttribute('data-model-id');

      if (index === 0) {
        var mediaGroup = modelViewerContainer.closest(selectors.mediaGroup);
        var xrButton = mediaGroup.querySelector(selectors.xrButton);
        xrButtons[sectionId] = {
          element: xrButton,
          defaultId: modelId
        };
      }

      models[mediaId] = {
        modelId: modelId,
        sectionId: sectionId,
        container: modelViewerContainer,
        element: modelViewerElement
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
    theme.LibraryLoader.load('modelViewerUiStyles');
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
        var modelJson = document.querySelector('#ModelJson-' + sectionId);

        window.ShopifyXR.addModels(JSON.parse(modelJson.innerHTML));
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
          model.modelViewerUi = new Shopify.ModelViewerUI(model.element);
        }
        setupModelViewerListeners(model);
      }
    }
  }

  function setupModelViewerListeners(model) {
    var xrButton = xrButtons[model.sectionId];

    model.container.addEventListener('mediaVisible', function() {
      xrButton.element.setAttribute('data-shopify-model3d-id', model.modelId);
      if (theme.Helpers.isTouch()) return;
      model.modelViewerUi.play();
    });

    model.container.addEventListener('mediaHidden', function() {
      xrButton.element.setAttribute(
        'data-shopify-model3d-id',
        xrButton.defaultId
      );
      model.modelViewerUi.pause();
    });

    model.container.addEventListener('xrLaunch', function() {
      model.modelViewerUi.pause();
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

window.theme = window.theme || {};

theme.FormStatus = (function() {
  var selectors = {
    statusMessage: '[data-form-status]'
  };

  function init() {
    var statusMessages = document.querySelectorAll(selectors.statusMessage);

    statusMessages.forEach(function(statusMessage) {
      statusMessage.setAttribute('tabindex', -1);
      statusMessage.focus();

      statusMessage.addEventListener(
        'blur',
        function(evt) {
          evt.target.removeAttribute('tabindex');
        },
        { once: true }
      );
    });
  }

  return {
    init: init
  };
})();

theme.Hero = (function() {
  var classes = {
    indexSectionFlush: 'index-section--flush'
  };

  var selectors = {
    heroFixedWidthContent: '.hero-fixed-width__content',
    heroFixedWidthImage: '.hero-fixed-width__image'
  };

  function hero(el, sectionId) {
    var hero = document.querySelector(el);
    var layout = hero.getAttribute('data-layout');
    var parentSection = document.querySelector('#shopify-section-' + sectionId);
    var heroContent = parentSection.querySelector(
      selectors.heroFixedWidthContent
    );
    var heroImage = parentSection.querySelector(selectors.heroFixedWidthImage);

    if (layout !== 'fixed_width') {
      return;
    }

    parentSection.classList.remove(classes.indexSectionFlush);
    heroFixedHeight();

    window.addEventListener('resize', function() {
      theme.Helpers.debounce(function() {
        heroFixedHeight();
      }, 50);
    });

    function heroFixedHeight() {
      var contentHeight;
      var imageHeight;

      if (heroContent) {
        contentHeight = heroContent.offsetHeight + 50;
      }

      if (heroImage) {
        imageHeight = heroImage.offsetHeight;
      }

      if (contentHeight > imageHeight) {
        heroImage.style.minHeight = contentHeight + 'px';
      }
    }
  }

  return hero;
})();

// prettier-ignore
window.theme = window.theme || {};

theme.SearchResultsTemplate = (function() {
  function renderResults(products, isLoading, searchQuery) {
    return [
      '<div class="predictive-search">',
      renderHeader(products, isLoading),
      renderProducts(products, searchQuery),
      '</div>'
    ].join('');
  }

  function renderHeader(products, isLoading) {
    if (products.length === 0) {
      return '';
    }

    return [
      '<div class="predictive-search-title">',
      '<h3 id="predictive-search" class="predictive-search-title__content">' +
        theme.strings.products +
        '</h3>',
      '<span class="predictive-search-title__loading-spinner">' +
        (isLoading
          ? '<span class= "icon-predictive-search-spinner" ></span >'
          : '') +
        '</span>',
      '</div>'
    ].join('');
  }

  function loadingState() {
    return [
      '<div class="predictive-search">',
      '<div class="predictive-search-loading">',
      '<span class="visually-hidden">' + theme.strings.loading + '</span>',
      '<span class="predictive-search-loading__icon">',
      '<span class="icon-predictive-search-spinner"></span>',
      '</span>',
      '</div>',
      '</div>'
    ].join('');
  }

  function renderViewAll(searchQuery) {
    return [
      '<button type="submit" class="predictive-search-view-all__button" tabindex="-1">',
      theme.strings.searchFor +
        '<span class="predictive-search-view-all__query"> &ldquo;' +
        _htmlEscape(searchQuery) +
        '&rdquo;</span>',
      '</button>'
    ].join('');
  }

  function renderProducts(products, searchQuery) {
    var resultsCount = products.length;

    return [
      '<ul id="predictive-search-results" class="predictive-search__list" role="listbox" aria-labelledby="predictive-search">',
      products
        .map(function(product, index) {
          return renderProduct(normalizeProduct(product), index, resultsCount);
        })
        .join(''),
      '<li id="search-all" class="predictive-search-view-all" role="option" data-search-result>' +
        renderViewAll(searchQuery) +
        '</li>',
      '</ul>'
    ].join('');
  }

  function renderProduct(product, index, resultsCount) {
    return [
      '<li id="search-result-' +
        index +
        '" class="predictive-search-item" role="option" data-search-result>',
      '<a class="predictive-search-item__link" href="' +
        product.url +
        '" tabindex="-1">',
      '<div class="predictive-search__column predictive-search__column--image" data-image-loading-animation>',
      renderProductImage(product),
      '</div>',
      '<div class="predictive-search__column predictive-search__column--content ' +
        (getDetailsCount() ? '' : 'predictive-search__column--center') +
        '">',
      '<span class="predictive-search-item__title">',
      '<span class="predictive-search-item__title-text">' +
        product.title +
        '</span>',
      '</span>' + (getDetailsCount() ? renderProductDetails(product) : ''),
      '<span class="visually-hidden">, </span>',
      '<span class="visually-hidden">' +
        getNumberOfResultsString(index + 1, resultsCount) +
        '</span>',
      '</div>',
      '</a>',
      '</li>'
    ].join('');
  }

  function renderProductImage(product) {
    if (product.image === null) {
      return '';
    }

    return (
      '<img class="predictive-search-item__image lazyload" src="' +
      product.image.url +
      '" data-src="' +
      product.image.url +
      '" data-image alt="' +
      product.image.alt +
      '" />'
    );
  }

  function renderProductDetails(product) {
    return [
      '<dl class="predictive-search-item__details price' +
        (product.isOnSale ? ' price--on-sale' : '') +
        (!product.available ? ' price--sold-out' : '') +
        (!product.isPriceVaries && product.isCompareVaries
          ? ' price--compare-price-hidden'
          : '') +
        '">',
      '<div class="predictive-search-item__detail">',
      renderVendor(product),
      '</div>',
      '<div class="predictive-search-item__detail predictive-search-item__detail--inline">' +
        renderProductPrice(product),
      '</div>',
      '</dl>'
    ].join('');
  }
  function renderProductPrice(product) {
    if (!theme.settings.predictiveSearchShowPrice) {
      return '';
    }

    var accessibilityAnnounceComma = '<span class="visually-hidden">, </span>';

    var priceMarkup =
      '<div class="price__regular">' + renderPrice(product) + '</div>';

    var salePriceMarkup =
      '<div class="price__sale">' + renderSalePrice(product) + '</div>';

    return (
      accessibilityAnnounceComma +
      '<div class="price__pricing-group">' +
      (product.isOnSale ? salePriceMarkup : priceMarkup) +
      '</div>'
    );
  }

  function renderSalePrice(product) {
    return [
      '<dt>',
      '<span class="visually-hidden">' + theme.strings.salePrice + '</span>',
      '</dt>',
      '<dd>',
      '<span class="predictive-search-item__price predictive-search-item__price--sale">' +
        (product.isPriceVaries
          ? theme.strings.fromLowestPrice.replace('[price]', product.price)
          : product.price) +
        '</span>',
      '</dd>',
      '<div class="price__compare">' + renderCompareAtPrice(product) + '</div>'
    ].join('');
  }

  function renderCompareAtPrice(product) {
    return [
      '<dt>',
      '<span class="visually-hidden">' +
        theme.strings.regularPrice +
        '</span> ',
      '</dt>',
      '<dd>',
      '<span class="predictive-search-item__price predictive-search-item__price--compare">' +
        product.compareAtPrice +
        '</span>',
      '</dd>'
    ].join('');
  }

  function renderPrice(product) {
    return [
      '<dt>',
      '<span class="visually-hidden">' + theme.strings.regularPrice + '</span>',
      '</dt>',
      '<dd>',
      '<span class="predictive-search-item__price">' +
        (product.isPriceVaries
          ? theme.strings.fromLowestPrice.replace('[price]', product.price)
          : product.price) +
        '</span>',
      '</dd>'
    ].join('');
  }

  function renderVendor(product) {
    if (!theme.settings.predictiveSearchShowVendor || product.vendor === '') {
      return '';
    }

    return [
      '<dt>',
      '<span class="visually-hidden">' + theme.strings.vendor + '</span>',
      '</dt>',
      '<dd class="predictive-search-item__vendor">' + product.vendor + '</dd>'
    ].join('');
  }

  function normalizeProduct(product) {
    var productOrVariant =
      product.variants.length > 0 ? product.variants[0] : product;

    return {
      url: productOrVariant.url,
      image: getProductImage(product),
      title: product.title,
      vendor: product.vendor || '',
      price: theme.Currency.formatMoney(product.price_min, theme.moneyFormat),
      compareAtPrice: theme.Currency.formatMoney(
        product.compare_at_price_min,
        theme.moneyFormat
      ),
      available: product.available,
      isOnSale: isOnSale(product),
      isPriceVaries: isPriceVaries(product),
      isCompareVaries: isCompareVaries(product)
    };
  }

  function getProductImage(product) {
    var image;
    var featuredImage;

    if (product.variants.length > 0 && product.variants[0].image !== null) {
      featuredImage = product.variants[0].featured_image;
    } else if (product.image) {
      featuredImage = product.featured_image;
    } else {
      image = null;
    }

    if (image !== null) {
      image = {
        url: theme.Images.getSizedImageUrl(featuredImage.url, '100x'),
        alt: featuredImage.alt
      };
    }

    return image;
  }

  function isOnSale(product) {
    return (
      product.compare_at_price_min !== null &&
      parseInt(product.compare_at_price_min, 10) >
        parseInt(product.price_min, 10)
    );
  }

  function isPriceVaries(product) {
    return product.price_max !== product.price_min;
  }

  function isCompareVaries(product) {
    return product.compare_at_price_max !== product.compare_at_price_min;
  }

  // Returns the number of optional product details to be shown,
  // values of the detailsList need to be boolean.
  function getDetailsCount() {
    var detailsList = [
      theme.settings.predictiveSearchShowPrice,
      theme.settings.predictiveSearchShowVendor
    ];

    var detailsCount = detailsList.reduce(function(acc, detail) {
      return acc + (detail ? 1 : 0);
    }, 0);

    return detailsCount;
  }

  function getNumberOfResultsString(resultNumber, resultsCount) {
    return theme.strings.number_of_results
      .replace('[result_number]', resultNumber)
      .replace('[results_count]', resultsCount);
  }

  function _htmlEscape(input) {
    return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  return function(data) {
    var products = data.products || [];
    var isLoading = data.isLoading;
    var searchQuery = data.searchQuery || '';

    if (isLoading && products.length === 0) {
      return loadingState();
    }

    return renderResults(products, isLoading, searchQuery);
  };
})();

window.theme = window.theme || {};

(function() {
  // (a11y) This function will be used by the Predictive Search Component
  // to announce the number of search results
  function numberOfResultsTemplateFct(data) {
    if (data.products.length === 1) {
      return theme.strings.one_result_found;
    } else {
      return theme.strings.number_of_results_found.replace(
        '[results_count]',
        data.products.length
      );
    }
  }

  // (a11y) This function will be used by the Predictive Search Component
  // to announce that it's loading results
  function loadingResultsMessageTemplateFct() {
    return theme.strings.loading;
  }

  function isPredictiveSearchSupported() {
    var shopifyFeatures = JSON.parse(
      document.getElementById('shopify-features').textContent
    );

    return shopifyFeatures.predictiveSearch;
  }

  function isPredictiveSearchEnabled() {
    return window.theme.settings.predictiveSearchEnabled;
  }

  function canInitializePredictiveSearch() {
    return isPredictiveSearchSupported() && isPredictiveSearchEnabled();
  }

  // listen for search submits and validate query
  function validateSearchHandler(searchEl, submitEl) {
    submitEl.addEventListener(
      'click',
      validateSearchInput.bind(this, searchEl)
    );
  }

  // if there is nothing in the search field, prevent submit
  function validateSearchInput(searchEl, evt) {
    var isInputValueEmpty = searchEl.value.trim().length === 0;
    if (!isInputValueEmpty) {
      return;
    }

    if (typeof evt !== 'undefined') {
      evt.preventDefault();
    }

    searchEl.focus();
  }

  window.theme.SearchPage = (function() {
    var selectors = {
      searchReset: '[data-search-page-predictive-search-clear]',
      searchInput: '[data-search-page-predictive-search-input]',
      searchSubmit: '[data-search-page-predictive-search-submit]',
      searchResults: '[data-predictive-search-mount="default"]'
    };

    var componentInstance;

    function init(config) {
      var searchInput = document.querySelector(selectors.searchInput);
      var searchSubmit = document.querySelector(selectors.searchSubmit);
      var searchUrl = searchInput.dataset.baseUrl;

      componentInstance = new window.Shopify.theme.PredictiveSearchComponent({
        selectors: {
          input: selectors.searchInput,
          reset: selectors.searchReset,
          result: selectors.searchResults
        },
        searchUrl: searchUrl,
        resultTemplateFct: window.theme.SearchResultsTemplate,
        numberOfResultsTemplateFct: numberOfResultsTemplateFct,
        loadingResultsMessageTemplateFct: loadingResultsMessageTemplateFct,
        onOpen: function(nodes) {
          if (config.isTabletAndUp) {
            return;
          }

          var searchInputBoundingRect = searchInput.getBoundingClientRect();
          var bodyHeight = document.body.offsetHeight;
          var offset = 50;
          var resultsMaxHeight =
            bodyHeight - searchInputBoundingRect.bottom - offset;

          nodes.result.style.maxHeight = resultsMaxHeight + 'px';
        },
        onBeforeDestroy: function(nodes) {
          // If the viewport width changes from mobile to tablet
          // reset the top position of the results
          nodes.result.style.maxHeight = '';
        }
      });

      validateSearchHandler(searchInput, searchSubmit);
    }

    function unload() {
      if (!componentInstance) {
        return;
      }
      componentInstance.destroy();
      componentInstance = null;
    }

    return {
      init: init,
      unload: unload
    };
  })();

  window.theme.SearchHeader = (function() {
    var selectors = {
      searchInput: '[data-predictive-search-drawer-input]',
      searchResults: '[data-predictive-search-mount="drawer"]',
      searchFormContainer: '[data-search-form-container]',
      searchSubmit: '[data-search-form-submit]'
    };

    var componentInstance;

    function init(config) {
      var searchInput = document.querySelector(selectors.searchInput);
      var searchSubmit = document.querySelector(selectors.searchSubmit);
      var searchUrl = searchInput.dataset.baseUrl;

      componentInstance = new window.Shopify.theme.PredictiveSearchComponent({
        selectors: {
          input: selectors.searchInput,
          result: selectors.searchResults
        },
        searchUrl: searchUrl,
        resultTemplateFct: window.theme.SearchResultsTemplate,
        numberOfResultsTemplateFct: numberOfResultsTemplateFct,
        numberOfResults: config.numberOfResults,
        loadingResultsMessageTemplateFct: loadingResultsMessageTemplateFct,
        onInputBlur: function() {
          return false;
        },
        onOpen: function(nodes) {
          var searchInputBoundingRect = searchInput.getBoundingClientRect();

          // For tablet screens and up, stop the scroll area from extending past
          // the bottom of the screen because we're locking the body scroll
          var maxHeight =
            window.innerHeight -
            searchInputBoundingRect.bottom -
            (config.isTabletAndUp ? 20 : 0);

          nodes.result.style.top = config.isTabletAndUp
            ? ''
            : searchInputBoundingRect.bottom + 'px';
          nodes.result.style.maxHeight = maxHeight + 'px';
        },
        onClose: function(nodes) {
          nodes.result.style.maxHeight = '';
        },
        onBeforeDestroy: function(nodes) {
          // If the viewport width changes from mobile to tablet
          // reset the top position of the results
          nodes.result.style.top = '';
        }
      });

      validateSearchHandler(searchInput, searchSubmit);
    }

    function unload() {
      if (!componentInstance) {
        return;
      }

      componentInstance.destroy();
      componentInstance = null;
    }

    function clearAndClose() {
      if (!componentInstance) {
        return;
      }

      componentInstance.clearAndClose();
    }

    return {
      init: init,
      unload: unload,
      clearAndClose: clearAndClose
    };
  })();

  window.theme.Search = (function() {
    var classes = {
      searchTemplate: 'template-search'
    };
    var selectors = {
      siteHeader: '.site-header'
    };
    var mediaQueryList = {
      mobile: window.matchMedia('(max-width: 749px)'),
      tabletAndUp: window.matchMedia('(min-width: 750px)')
    };

    function init() {
      if (!document.querySelector(selectors.siteHeader)) {
        return;
      }

      if (!canInitializePredictiveSearch()) {
        return;
      }

      Object.keys(mediaQueryList).forEach(function(device) {
        mediaQueryList[device].addListener(initSearchAccordingToViewport);
      });

      initSearchAccordingToViewport();
    }

    function initSearchAccordingToViewport() {
      theme.SearchDrawer.close();
      theme.SearchHeader.unload();
      theme.SearchPage.unload();

      if (mediaQueryList.mobile.matches) {
        theme.SearchHeader.init({
          numberOfResults: 4,
          isTabletAndUp: false
        });

        if (isSearchPage()) {
          theme.SearchPage.init({ isTabletAndUp: false });
        }
      } else {
        // Tablet and up
        theme.SearchHeader.init({
          numberOfResults: 4,
          isTabletAndUp: true
        });

        if (isSearchPage()) {
          theme.SearchPage.init({ isTabletAndUp: true });
        }
      }
    }

    function isSearchPage() {
      return document.body.classList.contains(classes.searchTemplate);
    }

    function unload() {
      theme.SearchHeader.unload();
      theme.SearchPage.unload();
    }

    return {
      init: init,
      unload: unload
    };
  })();
})();

window.theme = window.theme || {};

theme.SearchDrawer = (function() {
  var selectors = {
    headerSection: '[data-header-section]',
    drawer: '[data-predictive-search-drawer]',
    drawerOpenButton: '[data-predictive-search-open-drawer]',
    headerSearchInput: '[data-predictive-search-drawer-input]',
    predictiveSearchWrapper: '[data-predictive-search-mount="drawer"]'
  };

  var drawerInstance;

  function init() {
    setAccessibilityProps();

    drawerInstance = new theme.Drawers('SearchDrawer', 'top', {
      onDrawerOpen: function() {
        setHeight();
        theme.MobileNav.closeMobileNav();
        lockBodyScroll();
      },
      onDrawerClose: function() {
        theme.SearchHeader.clearAndClose();
        var drawerOpenButton = document.querySelector(
          selectors.drawerOpenButton
        );

        if (drawerOpenButton) drawerOpenButton.focus();

        unlockBodyScroll();
      },
      withPredictiveSearch: true,
      elementToFocusOnOpen: document.querySelector(selectors.headerSearchInput)
    });
  }

  function setAccessibilityProps() {
    var drawerOpenButton = document.querySelector(selectors.drawerOpenButton);

    if (drawerOpenButton) {
      drawerOpenButton.setAttribute('aria-controls', 'SearchDrawer');
      drawerOpenButton.setAttribute('aria-expanded', 'false');
      drawerOpenButton.setAttribute('aria-controls', 'dialog');
    }
  }

  function setHeight() {
    var searchDrawer = document.querySelector(selectors.drawer);
    var headerHeight = document.querySelector(selectors.headerSection)
      .offsetHeight;

    searchDrawer.style.height = headerHeight + 'px';
  }

  function close() {
    drawerInstance.close();
  }

  function lockBodyScroll() {
    theme.Helpers.enableScrollLock();
  }

  function unlockBodyScroll() {
    theme.Helpers.disableScrollLock();
  }

  return {
    init: init,
    close: close
  };
})();

theme.Disclosure = (function() {
  var selectors = {
    disclosureForm: '[data-disclosure-form]',
    disclosureList: '[data-disclosure-list]',
    disclosureToggle: '[data-disclosure-toggle]',
    disclosureInput: '[data-disclosure-input]',
    disclosureOptions: '[data-disclosure-option]'
  };

  var classes = {
    listVisible: 'disclosure-list--visible'
  };

  function Disclosure(disclosure) {
    this.container = disclosure;
    this._cacheSelectors();
    this._setupListeners();
  }

  Disclosure.prototype = Object.assign({}, Disclosure.prototype, {
    _cacheSelectors: function() {
      this.cache = {
        disclosureForm: this.container.closest(selectors.disclosureForm),
        disclosureList: this.container.querySelector(selectors.disclosureList),
        disclosureToggle: this.container.querySelector(
          selectors.disclosureToggle
        ),
        disclosureInput: this.container.querySelector(
          selectors.disclosureInput
        ),
        disclosureOptions: this.container.querySelectorAll(
          selectors.disclosureOptions
        )
      };
    },

    _setupListeners: function() {
      this.eventHandlers = this._setupEventHandlers();

      this.cache.disclosureToggle.addEventListener(
        'click',
        this.eventHandlers.toggleList
      );

      this.cache.disclosureOptions.forEach(function(disclosureOption) {
        disclosureOption.addEventListener(
          'click',
          this.eventHandlers.connectOptions
        );
      }, this);

      this.container.addEventListener(
        'keyup',
        this.eventHandlers.onDisclosureKeyUp
      );

      this.cache.disclosureList.addEventListener(
        'focusout',
        this.eventHandlers.onDisclosureListFocusOut
      );

      this.cache.disclosureToggle.addEventListener(
        'focusout',
        this.eventHandlers.onDisclosureToggleFocusOut
      );

      document.body.addEventListener('click', this.eventHandlers.onBodyClick);
    },

    _setupEventHandlers: function() {
      return {
        connectOptions: this._connectOptions.bind(this),
        toggleList: this._toggleList.bind(this),
        onBodyClick: this._onBodyClick.bind(this),
        onDisclosureKeyUp: this._onDisclosureKeyUp.bind(this),
        onDisclosureListFocusOut: this._onDisclosureListFocusOut.bind(this),
        onDisclosureToggleFocusOut: this._onDisclosureToggleFocusOut.bind(this)
      };
    },

    _connectOptions: function(event) {
      event.preventDefault();

      this._submitForm(event.currentTarget.dataset.value);
    },

    _onDisclosureToggleFocusOut: function(event) {
      var disclosureLostFocus =
        this.container.contains(event.relatedTarget) === false;

      if (disclosureLostFocus) {
        this._hideList();
      }
    },

    _onDisclosureListFocusOut: function(event) {
      var childInFocus = event.currentTarget.contains(event.relatedTarget);

      var isVisible = this.cache.disclosureList.classList.contains(
        classes.listVisible
      );

      if (isVisible && !childInFocus) {
        this._hideList();
      }
    },

    _onDisclosureKeyUp: function(event) {
      if (event.which !== slate.utils.keyboardKeys.ESCAPE) return;
      this._hideList();
      this.cache.disclosureToggle.focus();
    },

    _onBodyClick: function(event) {
      var isOption = this.container.contains(event.target);
      var isVisible = this.cache.disclosureList.classList.contains(
        classes.listVisible
      );

      if (isVisible && !isOption) {
        this._hideList();
      }
    },

    _submitForm: function(value) {
      this.cache.disclosureInput.value = value;
      this.cache.disclosureForm.submit();
    },

    _hideList: function() {
      this.cache.disclosureList.classList.remove(classes.listVisible);
      this.cache.disclosureToggle.setAttribute('aria-expanded', false);
    },

    _toggleList: function() {
      var ariaExpanded =
        this.cache.disclosureToggle.getAttribute('aria-expanded') === 'true';
      this.cache.disclosureList.classList.toggle(classes.listVisible);
      this.cache.disclosureToggle.setAttribute('aria-expanded', !ariaExpanded);
    },

    destroy: function() {
      this.cache.disclosureToggle.removeEventListener(
        'click',
        this.eventHandlers.toggleList
      );

      this.cache.disclosureOptions.forEach(function(disclosureOption) {
        disclosureOption.removeEventListener(
          'click',
          this.eventHandlers.connectOptions
        );
      }, this);

      this.container.removeEventListener(
        'keyup',
        this.eventHandlers.onDisclosureKeyUp
      );

      this.cache.disclosureList.removeEventListener(
        'focusout',
        this.eventHandlers.onDisclosureListFocusOut
      );

      this.cache.disclosureToggle.removeEventListener(
        'focusout',
        this.eventHandlers.onDisclosureToggleFocusOut
      );

      document.body.removeEventListener(
        'click',
        this.eventHandlers.onBodyClick
      );
    }
  });

  return Disclosure;
})();

theme.Zoom = (function() {
  var selectors = {
    imageZoom: '[data-image-zoom]'
  };

  var classes = {
    zoomImg: 'zoomImg'
  };

  var attributes = {
    imageZoomTarget: 'data-image-zoom-target'
  };

  function Zoom(container) {
    this.container = container;
    this.cache = {};
    this.url = container.dataset.zoom;

    this._cacheSelectors();

    if (!this.cache.sourceImage) return;

    this._duplicateImage();
  }

  Zoom.prototype = Object.assign({}, Zoom.prototype, {
    _cacheSelectors: function() {
      this.cache = {
        sourceImage: this.container.querySelector(selectors.imageZoom)
      };
    },

    _init: function() {
      var targetWidth = this.cache.targetImage.width;
      var targetHeight = this.cache.targetImage.height;

      if (this.cache.sourceImage === this.cache.targetImage) {
        this.sourceWidth = targetWidth;
        this.sourceHeight = targetHeight;
      } else {
        this.sourceWidth = this.cache.sourceImage.width;
        this.sourceHeight = this.cache.sourceImage.height;
      }

      this.xRatio =
        (this.cache.sourceImage.width - targetWidth) / this.sourceWidth;
      this.yRatio =
        (this.cache.sourceImage.height - targetHeight) / this.sourceHeight;
    },

    _start: function(e) {
      this._init();
      this._move(e);
    },

    _stop: function() {
      this.cache.targetImage.style.opacity = 0;
    },

    /**
     * Sets the correct coordinates top and left position in px
     * It sets a limit within between 0 and the max height of the image
     * So when the mouse leaves the target image, it could
     * never go above or beyond the target image zone
     */
    _setTopLeftMaxValues: function(top, left) {
      return {
        left: Math.max(Math.min(left, this.sourceWidth), 0),
        top: Math.max(Math.min(top, this.sourceHeight), 0)
      };
    },

    _move: function(e) {
      // get left and top position within the "source image" zone
      var left =
        e.pageX -
        (this.cache.sourceImage.getBoundingClientRect().left + window.scrollX);
      var top =
        e.pageY -
        (this.cache.sourceImage.getBoundingClientRect().top + window.scrollY);
      // make sure the left and top position don't go
      // above or beyond the target image zone
      var position = this._setTopLeftMaxValues(top, left);

      top = position.top;
      left = position.left;

      this.cache.targetImage.style.left = -(left * -this.xRatio) + 'px';
      this.cache.targetImage.style.top = -(top * -this.yRatio) + 'px';
      this.cache.targetImage.style.opacity = 1;
    },

    /**
     * This loads a high resolution image
     * via the data attributes url
     * It adds all necessary CSS styles and adds to the container
     */
    _duplicateImage: function() {
      this._loadImage()
        .then(
          function(image) {
            this.cache.targetImage = image;
            image.style.width = image.width + 'px';
            image.style.height = image.height + 'px';
            image.style.position = 'absolute';
            image.style.maxWidth = 'none';
            image.style.maxHeight = 'none';
            image.style.opacity = 0;
            image.style.border = 'none';
            image.style.left = 0;
            image.style.top = 0;

            this.container.appendChild(image);

            this._init();

            this._start = this._start.bind(this);
            this._stop = this._stop.bind(this);
            this._move = this._move.bind(this);

            this.container.addEventListener('mouseenter', this._start);
            this.container.addEventListener('mouseleave', this._stop);
            this.container.addEventListener('mousemove', this._move);

            this.container.style.position = 'relative';
            this.container.style.overflow = 'hidden';
          }.bind(this)
        )
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.warn('Error fetching image', error);
        });
    },

    _loadImage: function() {
      // eslint-disable-next-line
      return new Promise(function(resolve, reject) {
          var image = new Image();
          image.setAttribute('role', 'presentation');
          image.setAttribute(attributes.imageZoomTarget, true);
          image.classList.add(classes.zoomImg);
          image.src = this.url;

          image.addEventListener('load', function() {
            resolve(image);
          });

          image.addEventListener('error', function(error) {
            reject(error);
          });
        }.bind(this)
      );
    },

    unload: function() {
      var targetImage = this.container.querySelector(
        '[' + attributes.imageZoomTarget + ']'
      );
      if (targetImage) {
        targetImage.remove();
      }

      this.container.removeEventListener('mouseenter', this._start);
      this.container.removeEventListener('mouseleave', this._stop);
      this.container.removeEventListener('mousemove', this._move);
    }
  });

  return Zoom;
})();


/* ================ TEMPLATES ================ */
(function() {
  var filterBys = document.querySelectorAll('[data-blog-tag-filter]');

  if (!filterBys.length) return;

  slate.utils.resizeSelects(filterBys);

  filterBys.forEach(function(filterBy) {
    filterBy.addEventListener('change', function(evt) {
      location.href = evt.target.value;
    });
  });
})();

window.theme = theme || {};

theme.customerTemplates = (function() {
  var selectors = {
    RecoverHeading: '#RecoverHeading',
    RecoverEmail: '#RecoverEmail',
    LoginHeading: '#LoginHeading'
  };

  function initEventListeners() {
    this.recoverHeading = document.querySelector(selectors.RecoverHeading);
    this.recoverEmail = document.querySelector(selectors.RecoverEmail);
    this.loginHeading = document.querySelector(selectors.LoginHeading);
    var recoverPassword = document.getElementById('RecoverPassword');
    var hideRecoverPasswordLink = document.getElementById(
      'HideRecoverPasswordLink'
    );

    // Show reset password form
    if (recoverPassword) {
      recoverPassword.addEventListener(
        'click',
        function(evt) {
          evt.preventDefault();
          showRecoverPasswordForm();
          this.recoverHeading.setAttribute('tabindex', '-1');
          this.recoverHeading.focus();
        }.bind(this)
      );
    }

    // Hide reset password form
    if (hideRecoverPasswordLink) {
      hideRecoverPasswordLink.addEventListener(
        'click',
        function(evt) {
          evt.preventDefault();
          hideRecoverPasswordForm();
          this.loginHeading.setAttribute('tabindex', '-1');
          this.loginHeading.focus();
        }.bind(this)
      );
    }

    if (this.recoverHeading) {
      this.recoverHeading.addEventListener('blur', function(evt) {
        evt.target.removeAttribute('tabindex');
      });
    }

    if (this.loginHeading) {
      this.loginHeading.addEventListener('blur', function(evt) {
        evt.target.removeAttribute('tabindex');
      });
    }
  }

  /**
   *
   *  Show/Hide recover password form
   *
   */

  function showRecoverPasswordForm() {
    document.getElementById('RecoverPasswordForm').classList.remove('hide');
    document.getElementById('CustomerLoginForm').classList.add('hide');

    if (this.recoverEmail.getAttribute('aria-invalid') === 'true') {
      this.recoverEmail.focus();
    }
  }

  function hideRecoverPasswordForm() {
    document.getElementById('RecoverPasswordForm').classList.add('hide');
    document.getElementById('CustomerLoginForm').classList.remove('hide');
  }

  /**
   *
   *  Show reset password success message
   *
   */
  function resetPasswordSuccess() {
    var formState = document.querySelector('.reset-password-success');

    // check if reset password form was successfully submited.
    if (!formState) {
      return;
    }

    // show success message
    var resetSuccess = document.getElementById('ResetSuccess');
    resetSuccess.classList.remove('hide');
    resetSuccess.focus();
  }

  /**
   *
   *  Show/hide customer address forms
   *
   */
  function customerAddressForm() {
    var newAddressForm = document.getElementById('AddressNewForm');
    var newAddressFormButton = document.getElementById('AddressNewButton');

    if (!newAddressForm) {
      return;
    }

    // Initialize observers on address selectors, defined in shopify_common.js
    if (Shopify) {
      // eslint-disable-next-line no-new
      new Shopify.CountryProvinceSelector(
        'AddressCountryNew',
        'AddressProvinceNew',
        {
          hideElement: 'AddressProvinceContainerNew'
        }
      );
    }

    // Initialize each edit form's country/province selector
    document
      .querySelectorAll('.address-country-option')
      .forEach(function(option) {
        var formId = option.dataset.formId;
        var countrySelector = 'AddressCountry_' + formId;
        var provinceSelector = 'AddressProvince_' + formId;
        var containerSelector = 'AddressProvinceContainer_' + formId;

        // eslint-disable-next-line no-new
        new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
          hideElement: containerSelector
        });
      });

    // Toggle new/edit address forms
    document.querySelectorAll('.address-new-toggle').forEach(function(button) {
      button.addEventListener('click', function() {
        var isExpanded =
          newAddressFormButton.getAttribute('aria-expanded') === 'true';

        newAddressForm.classList.toggle('hide');
        newAddressFormButton.setAttribute('aria-expanded', !isExpanded);
        newAddressFormButton.focus();
      });
    });

    document.querySelectorAll('.address-edit-toggle').forEach(function(button) {
      button.addEventListener('click', function(evt) {
        var formId = evt.target.dataset.formId;
        var editButton = document.getElementById('EditFormButton_' + formId);
        var editAddress = document.getElementById('EditAddress_' + formId);
        var isExpanded = editButton.getAttribute('aria-expanded') === 'true';

        editAddress.classList.toggle('hide');
        editButton.setAttribute('aria-expanded', !isExpanded);
        editButton.focus();
      });
    });

    document.querySelectorAll('.address-delete').forEach(function(button) {
      button.addEventListener('click', function(evt) {
        var target = evt.target.dataset.target;
        var confirmMessage = evt.target.dataset.confirmMessage;

        // eslint-disable-next-line no-alert
        if (
          confirm(
            confirmMessage || 'Are you sure you wish to delete this address?'
          )
        ) {
          Shopify.postLink(target, {
            parameters: { _method: 'delete' }
          });
        }
      });
    });
  }

  /**
   *
   *  Check URL for reset password hash
   *
   */
  function checkUrlHash() {
    var hash = window.location.hash;

    // Allow deep linking to recover password form
    if (hash === '#recover') {
      showRecoverPasswordForm.bind(this)();
    }
  }

  return {
    init: function() {
      initEventListeners();
      checkUrlHash();
      resetPasswordSuccess();
      customerAddressForm();
    }
  };
})();


/*================ SECTIONS ================*/
window.theme = window.theme || {};

theme.Cart = (function() {
  var selectors = {
    cartCount: '[data-cart-count]',
    cartCountBubble: '[data-cart-count-bubble]',
    cartDiscount: '[data-cart-discount]',
    cartDiscountTitle: '[data-cart-discount-title]',
    cartDiscountAmount: '[data-cart-discount-amount]',
    cartDiscountWrapper: '[data-cart-discount-wrapper]',
    cartErrorMessage: '[data-cart-error-message]',
    cartErrorMessageWrapper: '[data-cart-error-message-wrapper]',
    cartItem: '[data-cart-item]',
    cartItemDetails: '[data-cart-item-details]',
    cartItemDiscount: '[data-cart-item-discount]',
    cartItemDiscountedPriceGroup: '[data-cart-item-discounted-price-group]',
    cartItemDiscountTitle: '[data-cart-item-discount-title]',
    cartItemDiscountAmount: '[data-cart-item-discount-amount]',
    cartItemDiscountList: '[data-cart-item-discount-list]',
    cartItemFinalPrice: '[data-cart-item-final-price]',
    cartItemImage: '[data-cart-item-image]',
    cartItemLinePrice: '[data-cart-item-line-price]',
    cartItemOriginalPrice: '[data-cart-item-original-price]',
    cartItemPrice: '[data-cart-item-price]',
    cartItemPriceList: '[data-cart-item-price-list]',
    cartItemProperty: '[data-cart-item-property]',
    cartItemPropertyName: '[data-cart-item-property-name]',
    cartItemPropertyValue: '[data-cart-item-property-value]',
    cartItemRegularPriceGroup: '[data-cart-item-regular-price-group]',
    cartItemRegularPrice: '[data-cart-item-regular-price]',
    cartItemTitle: '[data-cart-item-title]',
    cartItemOption: '[data-cart-item-option]',
    cartItemSellingPlanName: '[data-cart-item-selling-plan-name]',
    cartLineItems: '[data-cart-line-items]',
    cartNote: '[data-cart-notes]',
    cartQuantityErrorMessage: '[data-cart-quantity-error-message]',
    cartQuantityErrorMessageWrapper:
      '[data-cart-quantity-error-message-wrapper]',
    cartRemove: '[data-cart-remove]',
    cartStatus: '[data-cart-status]',
    cartSubtotal: '[data-cart-subtotal]',
    cartTableCell: '[data-cart-table-cell]',
    cartWrapper: '[data-cart-wrapper]',
    emptyPageContent: '[data-empty-page-content]',
    quantityInput: '[data-quantity-input]',
    quantityInputMobile: '[data-quantity-input-mobile]',
    quantityInputDesktop: '[data-quantity-input-desktop]',
    quantityLabelMobile: '[data-quantity-label-mobile]',
    quantityLabelDesktop: '[data-quantity-label-desktop]',
    inputQty: '[data-quantity-input]',
    thumbnails: '.cart__image',
    unitPrice: '[data-unit-price]',
    unitPriceBaseUnit: '[data-unit-price-base-unit]',
    unitPriceGroup: '[data-unit-price-group]'
  };

  var classes = {
    cartNoCookies: 'cart--no-cookies',
    cartRemovedProduct: 'cart__removed-product',
    thumbnails: 'cart__image',
    hide: 'hide',
    inputError: 'input--error'
  };

  var attributes = {
    cartItemIndex: 'data-cart-item-index',
    cartItemKey: 'data-cart-item-key',
    cartItemQuantity: 'data-cart-item-quantity',
    cartItemTitle: 'data-cart-item-title',
    cartItemUrl: 'data-cart-item-url',
    quantityItem: 'data-quantity-item'
  };

  var mediumUpQuery = '(min-width: ' + theme.breakpoints.medium + 'px)';

  function Cart(container) {
    this.container = container;
    this.thumbnails = this.container.querySelectorAll(selectors.thumbnails);
    this.quantityInputs = this.container.querySelectorAll(selectors.inputQty);
    this.ajaxEnabled =
      this.container.getAttribute('data-ajax-enabled') === 'true';

    this._handleInputQty = theme.Helpers.debounce(
      this._handleInputQty.bind(this),
      500
    );
    this.setQuantityFormControllers = this.setQuantityFormControllers.bind(
      this
    );
    this._onNoteChange = this._onNoteChange.bind(this);
    this._onRemoveItem = this._onRemoveItem.bind(this);

    if (!theme.Helpers.cookiesEnabled()) {
      this.container.classList.add(classes.cartNoCookies);
    }

    this.thumbnails.forEach(function(element) {
      element.style.cursor = 'pointer';
    });

    this.container.addEventListener('click', this._handleThumbnailClick);
    this.container.addEventListener('change', this._handleInputQty);

    this.mql = window.matchMedia(mediumUpQuery);
    this.mql.addListener(this.setQuantityFormControllers);

    this.setQuantityFormControllers();

    if (this.ajaxEnabled) {
      /**
       * Because the entire cart is recreated when a cart item is updated,
       * we cannot cache the elements in the cart. Instead, we add the event
       * listeners on the cart's container to allow us to retain the event
       * listeners after rebuilding the cart when an item is updated.
       */
      this.container.addEventListener('click', this._onRemoveItem);
      this.container.addEventListener('change', this._onNoteChange);

      this._setupCartTemplates();
    }
  }

  Cart.prototype = Object.assign({}, Cart.prototype, {
    _setupCartTemplates: function() {
      var cartItem = this.container.querySelector(selectors.cartItem);
      if (!cartItem) return;

      this.itemTemplate = this.container
        .querySelector(selectors.cartItem)
        .cloneNode(true);

      this.itemDiscountTemplate = this.itemTemplate
        .querySelector(selectors.cartItemDiscount)
        .cloneNode(true);

      this.cartDiscountTemplate = this.container
        .querySelector(selectors.cartDiscount)
        .cloneNode(true);

      this.itemPriceListTemplate = this.itemTemplate
        .querySelector(selectors.cartItemPriceList)
        .cloneNode(true);

      this.itemOptionTemplate = this.itemTemplate
        .querySelector(selectors.cartItemOption)
        .cloneNode(true);

      this.itemPropertyTemplate = this.itemTemplate
        .querySelector(selectors.cartItemProperty)
        .cloneNode(true);

      this.itemSellingPlanNameTemplate = this.itemTemplate
        .querySelector(selectors.cartItemSellingPlanName)
        .cloneNode(true);
    },

    _handleInputQty: function(evt) {
      if (!evt.target.hasAttribute('data-quantity-input')) return;

      var input = evt.target;
      var itemElement = input.closest(selectors.cartItem);

      var itemIndex = Number(input.getAttribute('data-quantity-item'));

      var itemQtyInputs = this.container.querySelectorAll(
        "[data-quantity-item='" + itemIndex + "']"
      );

      var value = parseInt(input.value);

      var isValidValue = !(value < 0 || isNaN(value));

      itemQtyInputs.forEach(function(element) {
        element.value = value;
      });

      this._hideCartError();
      this._hideQuantityErrorMessage();

      if (!isValidValue) {
        this._showQuantityErrorMessages(itemElement);
        return;
      }

      if (isValidValue && this.ajaxEnabled) {
        this._updateItemQuantity(itemIndex, itemElement, itemQtyInputs, value);
      }
    },

    _updateItemQuantity: function(
      itemIndex,
      itemElement,
      itemQtyInputs,
      value
    ) {
      var key = itemElement.getAttribute(attributes.cartItemKey);
      var index = Number(itemElement.getAttribute(attributes.cartItemIndex));

      var request = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;'
        },
        body: JSON.stringify({
          line: index,
          quantity: value
        })
      };

      fetch('/cart/change.js', request)
        .then(function(response) {
          return response.json();
        })
        .then(
          function(state) {
            this._setCartCountBubble(state.item_count);

            if (!state.item_count) {
              this._emptyCart();
              return;
            }

            // Cache current in-focus element, used later to restore focus
            var inFocus = document.activeElement;

            this._createCart(state);

            if (!value) {
              this._showRemoveMessage(itemElement.cloneNode(true));
              return;
            }

            var item = this.getItem(key, state);

            this._updateLiveRegion(item);

            // Restore focus to the "equivalent" element after the DOM has been updated
            if (!inFocus) return;
            var row = inFocus.closest('[' + attributes.cartItemIndex + ']');
            if (!row) return;
            var target = this.container.querySelector(
              '[' +
                attributes.cartItemIndex +
                '="' +
                row.getAttribute(attributes.cartItemIndex) +
                '"] [data-role="' +
                inFocus.getAttribute('data-role') +
                '"]'
            );
            if (!target) return;
            target.focus();
          }.bind(this)
        )
        .catch(
          function() {
            this._showCartError(null);
          }.bind(this)
        );
    },

    getItem: function(key, state) {
      return state.items.find(function(item) {
        return item.key === key;
      });
    },

    _liveRegionText: function(item) {
      // Dummy content for live region
      var liveRegionText =
        theme.strings.update +
        ': [QuantityLabel]: [Quantity], [Regular] [$$] [DiscountedPrice] [$]. [PriceInformation]';

      // Update Quantity
      liveRegionText = liveRegionText
        .replace('[QuantityLabel]', theme.strings.quantity)
        .replace('[Quantity]', item.quantity);

      // Update pricing information
      var regularLabel = '';
      var regularPrice = theme.Currency.formatMoney(
        item.original_line_price,
        theme.moneyFormat
      );
      var discountLabel = '';
      var discountPrice = '';
      var discountInformation = '';

      if (item.original_line_price > item.final_line_price) {
        regularLabel = theme.strings.regularTotal;

        discountLabel = theme.strings.discountedTotal;
        discountPrice = theme.Currency.formatMoney(
          item.final_line_price,
          theme.moneyFormat
        );

        discountInformation = theme.strings.priceColumn;
      }

      liveRegionText = liveRegionText
        .replace('[Regular]', regularLabel)
        .replace('[$$]', regularPrice)
        .replace('[DiscountedPrice]', discountLabel)
        .replace('[$]', discountPrice)
        .replace('[PriceInformation]', discountInformation)
        .trim();

      return liveRegionText;
    },

    _updateLiveRegion: function(item) {
      if (!item) return;

      var liveRegion = this.container.querySelector(selectors.cartStatus);

      liveRegion.textContent = this._liveRegionText(item);
      liveRegion.setAttribute('aria-hidden', false);

      setTimeout(function() {
        liveRegion.setAttribute('aria-hidden', true);
      }, 1000);
    },

    _createCart: function(state) {
      var cartDiscountList = this._createCartDiscountList(state);

      var cartTable = this.container.querySelector(selectors.cartLineItems);
      cartTable.innerHTML = '';

      this._createLineItemList(state).forEach(function(lineItem) {
        cartTable.appendChild(lineItem);
      });

      this.setQuantityFormControllers();

      this.cartNotes =
        this.cartNotes || this.container.querySelector(selectors.cartNote);

      if (this.cartNotes) {
        this.cartNotes.value = state.note;
      }

      var discountWrapper = this.container.querySelector(
        selectors.cartDiscountWrapper
      );

      if (cartDiscountList.length === 0) {
        discountWrapper.innerHTML = '';
        discountWrapper.classList.add(classes.hide);
      } else {
        discountWrapper.innerHTML = '';

        cartDiscountList.forEach(function(discountItem) {
          discountWrapper.appendChild(discountItem);
        });

        discountWrapper.classList.remove(classes.hide);
      }

      this.container.querySelector(
        selectors.cartSubtotal
      ).innerHTML = theme.Currency.formatMoney(
        state.total_price,
        theme.moneyFormatWithCurrency
      );
    },

    _createCartDiscountList: function(cart) {
      return cart.cart_level_discount_applications.map(
        function(discount) {
          var discountNode = this.cartDiscountTemplate.cloneNode(true);

          discountNode.querySelector(selectors.cartDiscountTitle).textContent =
            discount.title;

          discountNode.querySelector(
            selectors.cartDiscountAmount
          ).innerHTML = theme.Currency.formatMoney(
            discount.total_allocated_amount,
            theme.moneyFormat
          );

          return discountNode;
        }.bind(this)
      );
    },

    _createLineItemList: function(state) {
      return state.items.map(
        function(item, index) {
          var itemNode = this.itemTemplate.cloneNode(true);

          var itemPriceList = this.itemPriceListTemplate.cloneNode(true);

          this._setLineItemAttributes(itemNode, item, index);
          this._setLineItemImage(itemNode, item.featured_image);

          var cartItemTitle = itemNode.querySelector(selectors.cartItemTitle);
          cartItemTitle.textContent = item.product_title;
          cartItemTitle.setAttribute('href', item.url);

          var selling_plan_name = item.selling_plan_allocation
            ? item.selling_plan_allocation.selling_plan.name
            : null;

          var productDetailsList = this._createProductDetailsList(
            item.product_has_only_default_variant,
            item.options_with_values,
            item.properties,
            selling_plan_name
          );

          this._setProductDetailsList(itemNode, productDetailsList);

          this._setItemRemove(itemNode, item.title);

          itemPriceList.innerHTML = this._createItemPrice(
            item.original_price,
            item.final_price
          ).outerHTML;

          if (item.unit_price_measurement) {
            itemPriceList.appendChild(
              this._createUnitPrice(
                item.unit_price,
                item.unit_price_measurement
              )
            );
          }

          this._setItemPrice(itemNode, itemPriceList);

          var itemDiscountList = this._createItemDiscountList(item);
          this._setItemDiscountList(itemNode, itemDiscountList);
          this._setQuantityInputs(itemNode, item, index);

          var itemLinePrice = this._createItemPrice(
            item.original_line_price,
            item.final_line_price
          );

          this._setItemLinePrice(itemNode, itemLinePrice);

          return itemNode;
        }.bind(this)
      );
    },

    _setLineItemAttributes: function(itemNode, item, index) {
      itemNode.setAttribute(attributes.cartItemKey, item.key);
      itemNode.setAttribute(attributes.cartItemUrl, item.url);
      itemNode.setAttribute(attributes.cartItemTitle, item.title);
      itemNode.setAttribute(attributes.cartItemIndex, index + 1);
      itemNode.setAttribute(attributes.cartItemQuantity, item.quantity);
    },

    _setLineItemImage: function(itemNode, featuredImage) {
      var image = itemNode.querySelector(selectors.cartItemImage);

      var sizedImageUrl =
        featuredImage.url !== null
          ? theme.Images.getSizedImageUrl(featuredImage.url, 'x190')
          : null;

      if (sizedImageUrl) {
        image.setAttribute('alt', featuredImage.alt);
        image.setAttribute('src', sizedImageUrl);
        image.classList.remove(classes.hide);
      } else {
        image.parentNode.removeChild(image);
      }
    },

    _setProductDetailsList: function(item, productDetailsList) {
      var itemDetails = item.querySelector(selectors.cartItemDetails);

      if (productDetailsList.length) {
        itemDetails.classList.remove(classes.hide);
        itemDetails.innerHTML = productDetailsList.reduce(function(
          result,
          element
        ) {
          return result + element.outerHTML;
        },
        '');

        return;
      }

      itemDetails.classList.add(classes.hide);
      itemDetails.textContent = '';
    },

    _setItemPrice: function(item, price) {
      item.querySelector(selectors.cartItemPrice).innerHTML = price.outerHTML;
    },

    _setItemDiscountList: function(item, discountList) {
      var itemDiscountList = item.querySelector(selectors.cartItemDiscountList);

      if (discountList.length === 0) {
        itemDiscountList.innerHTML = '';
        itemDiscountList.classList.add(classes.hide);
      } else {
        itemDiscountList.innerHTML = discountList.reduce(function(
          result,
          element
        ) {
          return result + element.outerHTML;
        },
        '');

        itemDiscountList.classList.remove(classes.hide);
      }
    },

    _setItemRemove: function(item, title) {
      item
        .querySelector(selectors.cartRemove)
        .setAttribute(
          'aria-label',
          theme.strings.removeLabel.replace('[product]', title)
        );
    },

    _setQuantityInputs: function(itemNode, item, index) {
      var mobileInput = itemNode.querySelector(selectors.quantityInputMobile);
      var desktopInput = itemNode.querySelector(selectors.quantityInputDesktop);

      mobileInput.setAttribute('id', 'updates_' + item.key);
      desktopInput.setAttribute('id', 'updates_large_' + item.key);

      [mobileInput, desktopInput].forEach(function(element) {
        element.setAttribute(attributes.quantityItem, index + 1);
        element.value = item.quantity;
      });

      itemNode
        .querySelector(selectors.quantityLabelMobile)
        .setAttribute('for', 'updates_' + item.key);

      itemNode
        .querySelector(selectors.quantityLabelDesktop)
        .setAttribute('for', 'updates_large_' + item.key);
    },

    setQuantityFormControllers: function() {
      var desktopQuantityInputs = document.querySelectorAll(
        selectors.quantityInputDesktop
      );

      var mobileQuantityInputs = document.querySelectorAll(
        selectors.quantityInputMobile
      );

      if (this.mql.matches) {
        addNameAttribute(desktopQuantityInputs);
        removeNameAttribute(mobileQuantityInputs);
      } else {
        addNameAttribute(mobileQuantityInputs);
        removeNameAttribute(desktopQuantityInputs);
      }

      function addNameAttribute(inputs) {
        inputs.forEach(function(element) {
          element.setAttribute('name', 'updates[]');
        });
      }

      function removeNameAttribute(inputs) {
        inputs.forEach(function(element) {
          element.removeAttribute('name');
        });
      }
    },

    _setItemLinePrice: function(item, price) {
      item.querySelector(selectors.cartItemLinePrice).innerHTML =
        price.outerHTML;
    },

    _createProductDetailsList: function(
      product_has_only_default_variant,
      options,
      properties,
      selling_plan_name
    ) {
      var optionsPropertiesHTML = [];

      if (!product_has_only_default_variant) {
        optionsPropertiesHTML = optionsPropertiesHTML.concat(
          this._getOptionList(options)
        );
      }

      if (selling_plan_name) {
        optionsPropertiesHTML = optionsPropertiesHTML.concat(
          this._getSellingPlanName(selling_plan_name)
        );
      }

      if (properties !== null && Object.keys(properties).length !== 0) {
        optionsPropertiesHTML = optionsPropertiesHTML.concat(
          this._getPropertyList(properties)
        );
      }

      return optionsPropertiesHTML;
    },

    _getOptionList: function(options) {
      return options.map(
        function(option) {
          var optionElement = this.itemOptionTemplate.cloneNode(true);

          optionElement.textContent = option.name + ': ' + option.value;
          optionElement.classList.remove(classes.hide);

          return optionElement;
        }.bind(this)
      );
    },

    _getPropertyList: function(properties) {
      var propertiesArray =
        properties !== null ? Object.entries(properties) : [];

      var filteredPropertiesArray = propertiesArray.filter(function(property) {
        // Line item properties prefixed with an underscore are not to be displayed
        // if the property value has a length of 0 (empty), don't display it
        if (property[0].charAt(0) === '_' || property[1].length === 0) {
          return false;
        } else {
          return true;
        }
      });

      return filteredPropertiesArray.map(
        function(property) {
          var propertyElement = this.itemPropertyTemplate.cloneNode(true);

          propertyElement.querySelector(
            selectors.cartItemPropertyName
          ).textContent = property[0] + ': ';

          if (property[0].indexOf('/uploads/') === -1) {
            propertyElement.querySelector(
              selectors.cartItemPropertyValue
            ).textContent = property[1];
          } else {
            propertyElement.querySelector(
              selectors.cartItemPropertyValue
            ).innerHTML =
              '<a href="' +
              property[1] +
              '"> ' +
              property[1].split('/').pop() +
              '</a>';
          }

          propertyElement.classList.remove(classes.hide);

          return propertyElement;
        }.bind(this)
      );
    },

    _getSellingPlanName: function(selling_plan_name) {
      var sellingPlanNameElement = this.itemSellingPlanNameTemplate.cloneNode(
        true
      );

      sellingPlanNameElement.textContent = selling_plan_name;
      sellingPlanNameElement.classList.remove(classes.hide);

      return sellingPlanNameElement;
    },

    _createItemPrice: function(original_price, final_price) {
      var originalPriceHTML = theme.Currency.formatMoney(
        original_price,
        theme.moneyFormat
      );

      var resultHTML;

      if (original_price !== final_price) {
        resultHTML = this.itemPriceListTemplate
          .querySelector(selectors.cartItemDiscountedPriceGroup)
          .cloneNode(true);

        resultHTML.querySelector(
          selectors.cartItemOriginalPrice
        ).innerHTML = originalPriceHTML;

        resultHTML.querySelector(
          selectors.cartItemFinalPrice
        ).innerHTML = theme.Currency.formatMoney(
          final_price,
          theme.moneyFormat
        );
      } else {
        resultHTML = this.itemPriceListTemplate
          .querySelector(selectors.cartItemRegularPriceGroup)
          .cloneNode(true);

        resultHTML.querySelector(
          selectors.cartItemRegularPrice
        ).innerHTML = originalPriceHTML;
      }

      resultHTML.classList.remove(classes.hide);
      return resultHTML;
    },

    _createUnitPrice: function(unitPrice, unitPriceMeasurement) {
      var unitPriceGroup = this.itemPriceListTemplate
        .querySelector(selectors.unitPriceGroup)
        .cloneNode(true);

      var unitPriceBaseUnit =
        (unitPriceMeasurement.reference_value !== 1
          ? unitPriceMeasurement.reference_value
          : '') + unitPriceMeasurement.reference_unit;

      unitPriceGroup.querySelector(
        selectors.unitPriceBaseUnit
      ).textContent = unitPriceBaseUnit;

      unitPriceGroup.querySelector(
        selectors.unitPrice
      ).innerHTML = theme.Currency.formatMoney(unitPrice, theme.moneyFormat);

      unitPriceGroup.classList.remove(classes.hide);

      return unitPriceGroup;
    },

    _createItemDiscountList: function(item) {
      return item.line_level_discount_allocations.map(
        function(discount) {
          var discountNode = this.itemDiscountTemplate.cloneNode(true);

          discountNode.querySelector(
            selectors.cartItemDiscountTitle
          ).textContent = discount.discount_application.title;

          discountNode.querySelector(
            selectors.cartItemDiscountAmount
          ).innerHTML = theme.Currency.formatMoney(
            discount.amount,
            theme.moneyFormat
          );

          return discountNode;
        }.bind(this)
      );
    },

    _showQuantityErrorMessages: function(itemElement) {
      itemElement
        .querySelectorAll(selectors.cartQuantityErrorMessage)
        .forEach(function(element) {
          element.textContent = theme.strings.quantityMinimumMessage;
        });

      itemElement
        .querySelectorAll(selectors.cartQuantityErrorMessageWrapper)
        .forEach(function(element) {
          element.classList.remove(classes.hide);
        });

      itemElement
        .querySelectorAll(selectors.inputQty)
        .forEach(function(element) {
          element.classList.add(classes.inputError);
          element.focus();
        });
    },

    _hideQuantityErrorMessage: function() {
      var errorMessages = document.querySelectorAll(
        selectors.cartQuantityErrorMessageWrapper
      );

      errorMessages.forEach(function(element) {
        element.classList.add(classes.hide);

        element.querySelector(selectors.cartQuantityErrorMessage).textContent =
          '';
      });

      this.container
        .querySelectorAll(selectors.inputQty)
        .forEach(function(element) {
          element.classList.remove(classes.inputError);
        });
    },

    _handleThumbnailClick: function(evt) {
      if (!evt.target.classList.contains(classes.thumbnails)) return;

      window.location.href = evt.target
        .closest(selectors.cartItem)
        .getAttribute('data-cart-item-url');
    },

    _onNoteChange: function(evt) {
      if (!evt.target.hasAttribute('data-cart-notes')) return;

      var note = evt.target.value;
      this._hideCartError();
      this._hideQuantityErrorMessage();

      var headers = new Headers({ 'Content-Type': 'application/json' });

      var request = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ note: note })
      };

      fetch('/cart/update.js', request).catch(
        function() {
          this._showCartError(evt.target);
        }.bind(this)
      );
    },

    _showCartError: function(elementToFocus) {
      document.querySelector(selectors.cartErrorMessage).textContent =
        theme.strings.cartError;

      document
        .querySelector(selectors.cartErrorMessageWrapper)
        .classList.remove(classes.hide);

      if (!elementToFocus) return;
      elementToFocus.focus();
    },

    _hideCartError: function() {
      document
        .querySelector(selectors.cartErrorMessageWrapper)
        .classList.add(classes.hide);
      document.querySelector(selectors.cartErrorMessage).textContent = '';
    },

    _onRemoveItem: function(evt) {
      if (!evt.target.hasAttribute('data-cart-remove')) return;

      evt.preventDefault();
      var lineItem = evt.target.closest(selectors.cartItem);
      var index = Number(lineItem.getAttribute(attributes.cartItemIndex));

      this._hideCartError();

      var request = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;'
        },
        body: JSON.stringify({
          line: index,
          quantity: 0
        })
      };

      fetch('/cart/change.js', request)
        .then(function(response) {
          return response.json();
        })
        .then(
          function(state) {
            if (state.item_count === 0) {
              this._emptyCart();
            } else {
              this._createCart(state);
              this._showRemoveMessage(lineItem.cloneNode(true));
            }

            this._setCartCountBubble(state.item_count);
          }.bind(this)
        )
        .catch(
          function() {
            this._showCartError(null);
          }.bind(this)
        );
    },

    _showRemoveMessage: function(lineItem) {
      var index = lineItem.getAttribute('data-cart-item-index');
      var removeMessage = this._getRemoveMessage(lineItem);

      if (index - 1 === 0) {
        this.container
          .querySelector('[data-cart-item-index="1"]')
          .insertAdjacentHTML('beforebegin', removeMessage.outerHTML);
      } else {
        this.container
          .querySelector("[data-cart-item-index='" + (index - 1) + "']")
          .insertAdjacentHTML('afterend', removeMessage.outerHTML);
      }

      this.container.querySelector('[data-removed-item-row]').focus();
    },

    _getRemoveMessage: function(lineItem) {
      var formattedMessage = this._formatRemoveMessage(lineItem);

      var tableCell = lineItem
        .querySelector(selectors.cartTableCell)
        .cloneNode(true);

      tableCell.removeAttribute('class');
      tableCell.classList.add(classes.cartRemovedProduct);
      tableCell.setAttribute('colspan', '4');
      tableCell.innerHTML = formattedMessage;

//       lineItem.setAttribute('role', 'alert');
      lineItem.setAttribute('tabindex', '-1');
      lineItem.setAttribute('data-removed-item-row', true);
      lineItem.innerHTML = tableCell.outerHTML;

      return lineItem;
    },

    _formatRemoveMessage: function(lineItem) {
      var quantity = lineItem.getAttribute('data-cart-item-quantity');
      var url = lineItem.getAttribute(attributes.cartItemUrl);
      var title = lineItem.getAttribute(attributes.cartItemTitle);

      return theme.strings.removedItemMessage
        .replace('[quantity]', quantity)
        .replace(
          '[link]',
          '<a ' +
            'href="' +
            url +
            '" class="text-link text-link--accent">' +
            title +
            '</a>'
        );
    },

    _setCartCountBubble: function(quantity) {
      this.cartCountBubble =
        this.cartCountBubble ||
        document.querySelector(selectors.cartCountBubble);

      this.cartCount =
        this.cartCount || document.querySelector(selectors.cartCount);

      if (quantity > 0) {
        this.cartCountBubble.classList.remove(classes.hide);
        this.cartCount.textContent = quantity;
      } else {
        this.cartCountBubble.classList.add(classes.hide);
        this.cartCount.textContent = '';
      }
    },

    _emptyCart: function() {
      this.emptyPageContent =
        this.emptyPageContent ||
        this.container.querySelector(selectors.emptyPageContent);

      this.cartWrapper =
        this.cartWrapper || this.container.querySelector(selectors.cartWrapper);

      this.emptyPageContent.classList.remove(classes.hide);
      this.cartWrapper.classList.add(classes.hide);
    }
  });

  return Cart;
})();

window.theme = window.theme || {};

theme.Filters = (function() {
  var settings = {
    mediaQueryMediumUp: '(min-width: ' + theme.breakpoints.medium + 'px)'
  };

  var selectors = {
    filterSelection: '#FilterTags',
    sortSelection: '#SortBy',
    selectInput: '[data-select-input]'
  };

  function Filters(container) {
    this.filterSelect = container.querySelector(selectors.filterSelection);
    this.sortSelect = container.querySelector(selectors.sortSelection);

    this.selects = document.querySelectorAll(selectors.selectInput);

    if (this.sortSelect) {
      this.defaultSort = this._getDefaultSortValue();
    }

    if (this.selects.length) {
      this.selects.forEach(function(select) {
        select.classList.remove('hidden');
      });
    }

    this.initBreakpoints = this._initBreakpoints.bind(this);

    this.mql = window.matchMedia(settings.mediaQueryMediumUp);
    this.mql.addListener(this.initBreakpoints);

    if (this.filterSelect) {
      this.filterSelect.addEventListener(
        'change',
        this._onFilterChange.bind(this)
      );
    }

    if (this.sortSelect) {
      this.sortSelect.addEventListener('change', this._onSortChange.bind(this));
    }

    theme.Helpers.promiseStylesheet().then(
      function() {
        this._initBreakpoints();
      }.bind(this)
    );
    this._initParams();
  }

  Filters.prototype = Object.assign({}, Filters.prototype, {
    _initBreakpoints: function() {
      if (this.mql.matches) {
        slate.utils.resizeSelects(this.selects);
      }
    },

    _initParams: function() {
      this.queryParams = {};
      if (location.search.length) {
        var aKeyValue;
        var aCouples = location.search.substr(1).split('&');
        for (var i = 0; i < aCouples.length; i++) {
          aKeyValue = aCouples[i].split('=');
          if (aKeyValue.length > 1) {
            this.queryParams[
              decodeURIComponent(aKeyValue[0])
            ] = decodeURIComponent(aKeyValue[1]);
          }
        }
      }
    },

    _onSortChange: function() {
      this.queryParams.sort_by = this._getSortValue();

      if (this.queryParams.page) {
        delete this.queryParams.page;
      }

      window.location.search = decodeURIComponent(
        new URLSearchParams(Object.entries(this.queryParams)).toString()
      );
    },

    _onFilterChange: function() {
      document.location.href = this._getFilterValue();
    },

    _getFilterValue: function() {
      return this.filterSelect.value;
    },

    _getSortValue: function() {
      return this.sortSelect.value || this.defaultSort;
    },

    _getDefaultSortValue: function() {
      return this.sortSelect.dataset.defaultSortby;
    },

    onUnload: function() {
      if (this.filterSelect) {
        this.filterSelect.removeEventListener('change', this._onFilterChange);
      }

      if (this.sortSelect) {
        this.sortSelect.removeEventListener('change', this._onSortChange);
      }

      this.mql.removeListener(this.initBreakpoints);
    }
  });

  return Filters;
})();

window.theme = window.theme || {};

theme.HeaderSection = (function() {
  function Header() {
    theme.Header.init();
    theme.MobileNav.init();
    theme.SearchDrawer.init();
    theme.Search.init();
  }

  Header.prototype = Object.assign({}, Header.prototype, {
    onUnload: function() {
      theme.Header.unload();
      theme.Search.unload();
      theme.MobileNav.unload();
    }
  });

  return Header;
})();

theme.Maps = (function() {
  var config = {
    zoom: 14
  };
  var apiStatus = null;
  var mapsToLoad = [];

  var errors = {
    addressNoResults: theme.strings.addressNoResults,
    addressQueryLimit: theme.strings.addressQueryLimit,
    addressError: theme.strings.addressError,
    authError: theme.strings.authError
  };

  var selectors = {
    section: '[data-section-type="map"]',
    map: '[data-map]',
    mapOverlay: '[data-map-overlay]'
  };

  var classes = {
    mapError: 'map-section--load-error',
    errorMsg: 'map-section__error errors text-center'
  };

  // Global function called by Google on auth errors.
  // Show an auto error message on all map instances.
  // eslint-disable-next-line camelcase, no-unused-vars
  window.gm_authFailure = function() {
    if (!Shopify.designMode) {
      return;
    }

    document.querySelector(selectors.section).classList.add(classes.mapError);
    document.querySelector(selectors.map).remove();
    document
      .querySelector(selectors.mapOverlay)
      .insertAdjacentHTML(
        'afterend',
        '<div class="' +
          classes.errorMsg +
          '">' +
          theme.strings.authError +
          '</div>'
      );
  };

  function Map(container) {
    this.map = container.querySelector(selectors.map);
    if (!this.map) return;
    this.key = this.map.dataset.apiKey;

    if (typeof this.key === 'undefined') {
      return;
    }

    if (apiStatus === 'loaded') {
      this.createMap();
    } else {
      mapsToLoad.push(this);

      if (apiStatus !== 'loading') {
        apiStatus = 'loading';
        if (typeof window.google === 'undefined') {
          theme.Helpers.getScript(
            'https://maps.googleapis.com/maps/api/js?key=' + this.key
          ).then(function() {
            apiStatus = 'loaded';
            initAllMaps();
          });
        }
      }
    }
  }

  function initAllMaps() {
    // API has loaded, load all Map instances in queue
    mapsToLoad.forEach(function(map) {
      map.createMap();
    });
  }

  function geolocate(map) {
    return new Promise(function(resolve, reject) {
      var geocoder = new google.maps.Geocoder();
      var address = map.dataset.addressSetting;

      geocoder.geocode({ address: address }, function(results, status) {
        if (status !== google.maps.GeocoderStatus.OK) {
          reject(status);
        }

        resolve(results);
      });
    });
  }

  Map.prototype = Object.assign({}, Map.prototype, {
    createMap: function() {
      return geolocate(this.map)
        .then(
          function(results) {
            var mapOptions = {
              zoom: config.zoom,
              center: results[0].geometry.location,
              draggable: false,
              clickableIcons: false,
              scrollwheel: false,
              disableDoubleClickZoom: true,
              disableDefaultUI: true
            };

            var map = (this.map = new google.maps.Map(this.map, mapOptions));
            var center = (this.center = map.getCenter());

            //eslint-disable-next-line no-unused-vars
            var marker = new google.maps.Marker({
              map: map,
              position: map.getCenter()
            });

            google.maps.event.addDomListener(
              window,
              'resize',
              theme.Helpers.debounce(
                function() {
                  google.maps.event.trigger(map, 'resize');
                  map.setCenter(center);
                  this.map.removeAttribute('style');
                }.bind(this),
                250
              )
            );
          }.bind(this)
        )
        .catch(
          function() {
            var errorMessage;

            switch (status) {
              case 'ZERO_RESULTS':
                errorMessage = errors.addressNoResults;
                break;
              case 'OVER_QUERY_LIMIT':
                errorMessage = errors.addressQueryLimit;
                break;
              case 'REQUEST_DENIED':
                errorMessage = errors.authError;
                break;
              default:
                errorMessage = errors.addressError;
                break;
            }

            // Show errors only to merchant in the editor.
            if (Shopify.designMode) {
              this.map.parentNode.classList.add(classes.mapError);
              this.map.parentNode.innerHTML =
                '<div class="' +
                classes.errorMsg +
                '">' +
                errorMessage +
                '</div>';
            }
          }.bind(this)
        );
    },

    onUnload: function() {
      if (this.map) {
        google.maps.event.clearListeners(this.map, 'resize');
      }
    }
  });

  return Map;
})();

/* eslint-disable no-new */
theme.Product = (function() {
  function Product(container) {
    this.container = container;
    var sectionId = container.getAttribute('data-section-id');
    this.zoomPictures = [];
    this.ajaxEnabled = container.getAttribute('data-ajax-enabled') === 'true';

    this.settings = {
      // Breakpoints from src/stylesheets/global/variables.scss.liquid
      mediaQueryMediumUp: 'screen and (min-width: 750px)',
      mediaQuerySmall: 'screen and (max-width: 749px)',
      bpSmall: false,
      enableHistoryState:
        container.getAttribute('data-enable-history-state') || false,
      namespace: '.slideshow-' + sectionId,
      sectionId: sectionId,
      sliderActive: false,
      zoomEnabled: false
    };

    this.selectors = {
      addToCart: '[data-add-to-cart]',
      addToCartText: '[data-add-to-cart-text]',
      cartCount: '[data-cart-count]',
      cartCountBubble: '[data-cart-count-bubble]',
      cartPopup: '[data-cart-popup]',
      cartPopupCartQuantity: '[data-cart-popup-cart-quantity]',
      cartPopupClose: '[data-cart-popup-close]',
      cartPopupDismiss: '[data-cart-popup-dismiss]',
      cartPopupImage: '[data-cart-popup-image]',
      cartPopupImageWrapper: '[data-cart-popup-image-wrapper]',
      cartPopupImagePlaceholder: '[data-image-loading-animation]',
      cartPopupProductDetails: '[data-cart-popup-product-details]',
      cartPopupQuantity: '[data-cart-popup-quantity]',
      cartPopupQuantityLabel: '[data-cart-popup-quantity-label]',
      cartPopupTitle: '[data-cart-popup-title]',
      cartPopupWrapper: '[data-cart-popup-wrapper]',
      loader: '[data-loader]',
      loaderStatus: '[data-loader-status]',
      quantity: '[data-quantity-input]',
      SKU: '.variant-sku',
      productStatus: '[data-product-status]',
      originalSelectorId: '#ProductSelect-' + sectionId,
      productForm: '[data-product-form]',
      errorMessage: '[data-error-message]',
      errorMessageWrapper: '[data-error-message-wrapper]',
      imageZoomWrapper: '[data-image-zoom-wrapper]',
      productMediaWrapper: '[data-product-single-media-wrapper]',
      productThumbImages: '.product-single__thumbnail--' + sectionId,
      productThumbs: '.product-single__thumbnails-' + sectionId,
      productThumbListItem: '.product-single__thumbnails-item',
      productThumbsWrapper: '.thumbnails-wrapper',
      saleLabel: '.product-price__sale-label-' + sectionId,
      singleOptionSelector: '.single-option-selector-' + sectionId,
      shopifyPaymentButton: '.shopify-payment-button',
      productMediaTypeVideo: '[data-product-media-type-video]',
      productMediaTypeModel: '[data-product-media-type-model]',
      priceContainer: '[data-price]',
      regularPrice: '[data-regular-price]',
      salePrice: '[data-sale-price]',
      unitPrice: '[data-unit-price]',
      unitPriceBaseUnit: '[data-unit-price-base-unit]',
      productPolicies: '[data-product-policies]',
      storeAvailabilityContainer: '[data-store-availability-container]'
    };

    this.classes = {
      cartPopupWrapperHidden: 'cart-popup-wrapper--hidden',
      hidden: 'hide',
      visibilityHidden: 'visibility-hidden',
      inputError: 'input--error',
      jsZoomEnabled: 'js-zoom-enabled',
      productOnSale: 'price--on-sale',
      productUnitAvailable: 'price--unit-available',
      productUnavailable: 'price--unavailable',
      productSoldOut: 'price--sold-out',
      cartImage: 'cart-popup-item__image',
      productFormErrorMessageWrapperHidden:
        'product-form__error-message-wrapper--hidden',
      activeClass: 'active-thumb',
      variantSoldOut: 'product-form--variant-sold-out'
    };

    this.eventHandlers = {};

    this.quantityInput = container.querySelector(this.selectors.quantity);
    this.errorMessageWrapper = container.querySelector(
      this.selectors.errorMessageWrapper
    );
    this.productForm = container.querySelector(this.selectors.productForm);
    this.addToCart = container.querySelector(this.selectors.addToCart);
    this.addToCartText = this.addToCart.querySelector(
      this.selectors.addToCartText
    );
    this.shopifyPaymentButton = container.querySelector(
      this.selectors.shopifyPaymentButton
    );
    this.priceContainer = container.querySelector(
      this.selectors.priceContainer
    );
    this.productPolicies = container.querySelector(
      this.selectors.productPolicies
    );
    this.storeAvailabilityContainer = container.querySelector(
      this.selectors.storeAvailabilityContainer
    );
    if (this.storeAvailabilityContainer) {
      this._initStoreAvailability();
    }

    this.loader = this.addToCart.querySelector(this.selectors.loader);
    this.loaderStatus = container.querySelector(this.selectors.loaderStatus);

    this.imageZoomWrapper = container.querySelectorAll(
      this.selectors.imageZoomWrapper
    );

    // Stop parsing if we don't have the product json script tag when loading
    // section in the Theme Editor
    var productJson = document.getElementById('ProductJson-' + sectionId);
    if (!productJson || !productJson.innerHTML.length) {
      return;
    }

    this.productSingleObject = JSON.parse(productJson.innerHTML);

    // Initial state for global productState object
    this.productState = {
      available: true,
      soldOut: false,
      onSale: false,
      showUnitPrice: false
    };

    this.settings.zoomEnabled =
      this.imageZoomWrapper.length > 0
        ? this.imageZoomWrapper[0].classList.contains(
            this.classes.jsZoomEnabled
          )
        : false;

    this.initMobileBreakpoint = this._initMobileBreakpoint.bind(this);
    this.initDesktopBreakpoint = this._initDesktopBreakpoint.bind(this);

    this.mqlSmall = window.matchMedia(this.settings.mediaQuerySmall);
    this.mqlSmall.addListener(this.initMobileBreakpoint);

    this.mqlMediumUp = window.matchMedia(this.settings.mediaQueryMediumUp);
    this.mqlMediumUp.addListener(this.initDesktopBreakpoint);

    this.initMobileBreakpoint();
    this.initDesktopBreakpoint();
    this._stringOverrides();
    this._initVariants();
    this._initMediaSwitch();
    this._initAddToCart();
    this._setActiveThumbnail();
    this._initProductVideo();
    this._initModelViewerLibraries();
    this._initShopifyXrLaunch();
  }

  Product.prototype = Object.assign({}, Product.prototype, {
    _stringOverrides: function() {
      theme.productStrings = theme.productStrings || {};
      theme.strings = Object.assign({}, theme.strings, theme.productStrings);
    },

    _initStoreAvailability: function() {
      this.storeAvailability = new theme.StoreAvailability(
        this.storeAvailabilityContainer
      );

      var storeAvailabilityModalOpenedCallback = function(event) {
        if (
          this.cartPopupWrapper &&
          !this.cartPopupWrapper.classList.contains(
            this.classes.cartPopupWrapperHidden
          )
        ) {
          this._hideCartPopup(event);
        }
      };

      // hide cart popup modal if the store availability modal is also opened
      this.storeAvailabilityContainer.addEventListener(
        'storeAvailabilityModalOpened',
        storeAvailabilityModalOpenedCallback.bind(this)
      );
    },

    _initMobileBreakpoint: function() {
      if (this.mqlSmall.matches) {
        // initialize thumbnail slider on mobile if more than four thumbnails
        if (
          this.container.querySelectorAll(this.selectors.productThumbImages)
            .length > 4
        ) {
          this._initThumbnailSlider();
        }

        // destroy image zooming if enabled
        if (this.settings.zoomEnabled) {
          this.imageZoomWrapper.forEach(
            function(element, index) {
              this._destroyZoom(index);
            }.bind(this)
          );
        }

        this.settings.bpSmall = true;
      } else {
        if (this.settings.sliderActive) {
          this._destroyThumbnailSlider();
        }

        this.settings.bpSmall = false;
      }
    },

    _initDesktopBreakpoint: function() {
      if (this.mqlMediumUp.matches && this.settings.zoomEnabled) {
        this.imageZoomWrapper.forEach(
          function(element, index) {
            this._enableZoom(element, index);
          }.bind(this)
        );
      }
    },

    _initVariants: function() {
      var options = {
        container: this.container,
        enableHistoryState:
          this.container.getAttribute('data-enable-history-state') || false,
        singleOptionSelector: this.selectors.singleOptionSelector,
        originalSelectorId: this.selectors.originalSelectorId,
        product: this.productSingleObject
      };

      this.variants = new slate.Variants(options);
      if (this.storeAvailability && this.variants.currentVariant.available) {
        this.storeAvailability.updateContent(this.variants.currentVariant.id);
      }

      this.eventHandlers.updateAvailability = this._updateAvailability.bind(
        this
      );
      this.eventHandlers.updateMedia = this._updateMedia.bind(this);
      this.eventHandlers.updatePrice = this._updatePrice.bind(this);
      this.eventHandlers.updateSKU = this._updateSKU.bind(this);

      this.container.addEventListener(
        'variantChange',
        this.eventHandlers.updateAvailability
      );
      this.container.addEventListener(
        'variantImageChange',
        this.eventHandlers.updateMedia
      );
      this.container.addEventListener(
        'variantPriceChange',
        this.eventHandlers.updatePrice
      );
      this.container.addEventListener(
        'variantSKUChange',
        this.eventHandlers.updateSKU
      );
      
    },

    _initMediaSwitch: function() {
      if (!document.querySelector(this.selectors.productThumbImages)) {
        return;
      }

      var self = this;

      var productThumbImages = document.querySelectorAll(
        this.selectors.productThumbImages
      );

      this.eventHandlers.handleMediaFocus = this._handleMediaFocus.bind(this);

      productThumbImages.forEach(function(el) {
        el.addEventListener('click', function(evt) {
          evt.preventDefault();
          var mediaId = el.getAttribute('data-thumbnail-id');

          self._switchMedia(mediaId);
          self._setActiveThumbnail(mediaId);
        });
        el.addEventListener('keyup', self.eventHandlers.handleMediaFocus);
      });
    },

    _initAddToCart: function() {
      this.productForm.addEventListener(
        'submit',
        function(evt) {
          if (this.addToCart.getAttribute('aria-disabled') === 'true') {
            evt.preventDefault();
            return;
          }

          if (!this.ajaxEnabled) return;

          evt.preventDefault();

          this.previouslyFocusedElement = document.activeElement;

          var isInvalidQuantity =
            !!this.quantityInput && this.quantityInput.value <= 0;

          if (isInvalidQuantity) {
            this._showErrorMessage(theme.strings.quantityMinimumMessage);
            return;
          }

          if (!isInvalidQuantity && this.ajaxEnabled) {
            // disable the addToCart and dynamic checkout button while
            // request/cart popup is loading and handle loading state
            this._handleButtonLoadingState(true);
            this._addItemToCart(this.productForm);
            return;
          }
        }.bind(this)
      );
    },

    _initProductVideo: function() {
      var sectionId = this.settings.sectionId;

      var productMediaTypeVideo = this.container.querySelectorAll(
        this.selectors.productMediaTypeVideo
      );
      productMediaTypeVideo.forEach(function(el) {
        theme.ProductVideo.init(el, sectionId);
      });
    },

    _initModelViewerLibraries: function() {
      var modelViewerElements = this.container.querySelectorAll(
        this.selectors.productMediaTypeModel
      );
      if (modelViewerElements.length < 1) return;
      theme.ProductModel.init(modelViewerElements, this.settings.sectionId);
    },

    _initShopifyXrLaunch: function() {
      this.eventHandlers.initShopifyXrLaunchHandler = this._initShopifyXrLaunchHandler.bind(
        this
      );
      document.addEventListener(
        'shopify_xr_launch',
        this.eventHandlers.initShopifyXrLaunchHandler
      );
    },

    _initShopifyXrLaunchHandler: function() {
      var currentMedia = this.container.querySelector(
        this.selectors.productMediaWrapper +
          ':not(.' +
          self.classes.hidden +
          ')'
      );
      currentMedia.dispatchEvent(
        new CustomEvent('xrLaunch', {
          bubbles: true,
          cancelable: true
        })
      );
    },

    _addItemToCart: function(form) {
      var self = this;

      fetch('/cart/add.js', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: theme.Helpers.serialize(form)
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          if (json.status && json.status !== 200) {
            var error = new Error(json.description);
            error.isFromServer = true;
            throw error;
          }
          self._hideErrorMessage();
          self._setupCartPopup(json);
        })
        .catch(function(error) {
          self.previouslyFocusedElement.focus();
          self._showErrorMessage(
            error.isFromServer && error.message.length
              ? error.message
              : theme.strings.cartError
          );
          self._handleButtonLoadingState(false);
          // eslint-disable-next-line no-console
          console.log(error);
        });
    },

    _handleButtonLoadingState: function(isLoading) {
      if (isLoading) {
        this.addToCart.setAttribute('aria-disabled', true);
        this.addToCartText.classList.add(this.classes.hidden);
        this.loader.classList.remove(this.classes.hidden);

        if (this.shopifyPaymentButton) {
          this.shopifyPaymentButton.setAttribute('disabled', true);
        }

        this.loaderStatus.setAttribute('aria-hidden', false);
      } else {
        this.addToCart.removeAttribute('aria-disabled');
        this.addToCartText.classList.remove(this.classes.hidden);
        this.loader.classList.add(this.classes.hidden);

        if (this.shopifyPaymentButton) {
          this.shopifyPaymentButton.removeAttribute('disabled');
        }

        this.loaderStatus.setAttribute('aria-hidden', true);
      }
    },

    _showErrorMessage: function(errorMessage) {
      var errorMessageContainer = this.container.querySelector(
        this.selectors.errorMessage
      );
      errorMessageContainer.innerHTML = errorMessage;

      if (this.quantityInput) {
        this.quantityInput.classList.add(this.classes.inputError);
      }

      this.errorMessageWrapper.classList.remove(
        this.classes.productFormErrorMessageWrapperHidden
      );
      this.errorMessageWrapper.setAttribute('aria-hidden', true);
      this.errorMessageWrapper.removeAttribute('aria-hidden');
    },

    _hideErrorMessage: function() {
      this.errorMessageWrapper.classList.add(
        this.classes.productFormErrorMessageWrapperHidden
      );

      if (this.quantityInput) {
        this.quantityInput.classList.remove(this.classes.inputError);
      }
    },

    _setupCartPopup: function(item) {
      this.cartPopup =
        this.cartPopup || document.querySelector(this.selectors.cartPopup);
      this.cartPopupWrapper =
        this.cartPopupWrapper ||
        document.querySelector(this.selectors.cartPopupWrapper);
      this.cartPopupTitle =
        this.cartPopupTitle ||
        document.querySelector(this.selectors.cartPopupTitle);
      this.cartPopupQuantity =
        this.cartPopupQuantity ||
        document.querySelector(this.selectors.cartPopupQuantity);
      this.cartPopupQuantityLabel =
        this.cartPopupQuantityLabel ||
        document.querySelector(this.selectors.cartPopupQuantityLabel);
      this.cartPopupClose =
        this.cartPopupClose ||
        document.querySelector(this.selectors.cartPopupClose);
      this.cartPopupDismiss =
        this.cartPopupDismiss ||
        document.querySelector(this.selectors.cartPopupDismiss);
      this.cartPopupImagePlaceholder =
        this.cartPopupImagePlaceholder ||
        document.querySelector(this.selectors.cartPopupImagePlaceholder);

      this._setupCartPopupEventListeners();

      this._updateCartPopupContent(item);
    },

    _updateCartPopupContent: function(item) {
      var self = this;

      var quantity = this.quantityInput ? this.quantityInput.value : 1;

      var selling_plan_name = item.selling_plan_allocation
        ? item.selling_plan_allocation.selling_plan.name
        : null;

      this.cartPopupTitle.textContent = item.product_title;
      this.cartPopupQuantity.textContent = quantity;
      this.cartPopupQuantityLabel.textContent = theme.strings.quantityLabel.replace(
        '[count]',
        quantity
      );

      this._setCartPopupPlaceholder(item.featured_image.url);
      this._setCartPopupImage(item.featured_image.url, item.featured_image.alt);
      this._setCartPopupProductDetails(
        item.product_has_only_default_variant,
        item.options_with_values,
        item.properties,
        selling_plan_name
      );

      fetch('/cart.js', { credentials: 'same-origin' })
        .then(function(response) {
          return response.json();
        })
        .then(function(cart) {
          self._setCartQuantity(cart.item_count);
          self._setCartCountBubble(cart.item_count);
          self._showCartPopup();
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    },

    _setupCartPopupEventListeners: function() {
      this.eventHandlers.cartPopupWrapperKeyupHandler = this._cartPopupWrapperKeyupHandler.bind(
        this
      );
      this.eventHandlers.hideCartPopup = this._hideCartPopup.bind(this);
      this.eventHandlers.onBodyClick = this._onBodyClick.bind(this);

      this.cartPopupWrapper.addEventListener(
        'keyup',
        this.eventHandlers.cartPopupWrapperKeyupHandler
      );
      this.cartPopupClose.addEventListener(
        'click',
        this.eventHandlers.hideCartPopup
      );
      this.cartPopupDismiss.addEventListener(
        'click',
        this.eventHandlers.hideCartPopup
      );
      document.body.addEventListener('click', this.eventHandlers.onBodyClick);
    },

    _cartPopupWrapperKeyupHandler: function(event) {
      if (event.keyCode === slate.utils.keyboardKeys.ESCAPE) {
        this._hideCartPopup(event);
      }
    },

    _setCartPopupPlaceholder: function(imageUrl) {
      this.cartPopupImageWrapper =
        this.cartPopupImageWrapper ||
        document.querySelector(this.selectors.cartPopupImageWrapper);

      if (imageUrl === null) {
        this.cartPopupImageWrapper.classList.add(this.classes.hidden);
        return;
      }
    },

    _setCartPopupImage: function(imageUrl, imageAlt) {
      if (imageUrl === null) return;

      this.cartPopupImageWrapper.classList.remove(this.classes.hidden);
      var sizedImageUrl = theme.Images.getSizedImageUrl(imageUrl, '200x');
      var image = document.createElement('img');
      image.src = sizedImageUrl;
      image.alt = imageAlt;
      image.classList.add(this.classes.cartImage);
      image.setAttribute('data-cart-popup-image', '');

      image.onload = function() {
        this.cartPopupImagePlaceholder.removeAttribute(
          'data-image-loading-animation'
        );
        this.cartPopupImageWrapper.append(image);
      }.bind(this);
    },

    _setCartPopupProductDetails: function(
      product_has_only_default_variant,
      options,
      properties,
      selling_plan_name
    ) {
      this.cartPopupProductDetails =
        this.cartPopupProductDetails ||
        document.querySelector(this.selectors.cartPopupProductDetails);
      var variantPropertiesHTML = '';

      if (!product_has_only_default_variant) {
        variantPropertiesHTML =
          variantPropertiesHTML + this._getVariantOptionList(options);
      }

      if (selling_plan_name) {
        variantPropertiesHTML =
          variantPropertiesHTML + this._getSellingPlanHTML(selling_plan_name);
      }

      if (properties !== null && Object.keys(properties).length !== 0) {
        variantPropertiesHTML =
          variantPropertiesHTML + this._getPropertyList(properties);
      }

      if (variantPropertiesHTML.length === 0) {
        this.cartPopupProductDetails.innerHTML = '';
        this.cartPopupProductDetails.setAttribute('hidden', '');
      } else {
        this.cartPopupProductDetails.innerHTML = variantPropertiesHTML;
        this.cartPopupProductDetails.removeAttribute('hidden');
      }
    },

    _getVariantOptionList: function(variantOptions) {
      var variantOptionListHTML = '';

      variantOptions.forEach(function(variantOption) {
        variantOptionListHTML =
          variantOptionListHTML +
          '<li class="product-details__item product-details__item--variant-option">' +
          variantOption.name +
          ': ' +
          variantOption.value +
          '</li>';
      });

      return variantOptionListHTML;
    },

    _getPropertyList: function(properties) {
      var propertyListHTML = '';
      var propertiesArray = Object.entries(properties);

      propertiesArray.forEach(function(property) {
        // Line item properties prefixed with an underscore are not to be displayed
        if (property[0].charAt(0) === '_') return;

        // if the property value has a length of 0 (empty), don't display it
        if (property[1].length === 0) return;

        propertyListHTML =
          propertyListHTML +
          '<li class="product-details__item product-details__item--property">' +
          '<span class="product-details__property-label">' +
          property[0] +
          ': </span>' +
          property[1];
        ': ' + '</li>';
      });

      return propertyListHTML;
    },

    _getSellingPlanHTML: function(selling_plan_name) {
      var sellingPlanHTML =
        '<li class="product-details__item product-details__item--property">' +
        selling_plan_name +
        '</li>';

      return sellingPlanHTML;
    },

    _setCartQuantity: function(quantity) {
      this.cartPopupCartQuantity =
        this.cartPopupCartQuantity ||
        document.querySelector(this.selectors.cartPopupCartQuantity);
      var ariaLabel;

      if (quantity === 1) {
        ariaLabel = theme.strings.oneCartCount;
      } else if (quantity > 1) {
        ariaLabel = theme.strings.otherCartCount.replace('[count]', quantity);
      }

      this.cartPopupCartQuantity.textContent = quantity;
      this.cartPopupCartQuantity.setAttribute('aria-label', ariaLabel);
    },

    _setCartCountBubble: function(quantity) {
      this.cartCountBubble =
        this.cartCountBubble ||
        document.querySelector(this.selectors.cartCountBubble);
      this.cartCount =
        this.cartCount || document.querySelector(this.selectors.cartCount);

      this.cartCountBubble.classList.remove(this.classes.hidden);
      this.cartCount.textContent = quantity;
    },

    _showCartPopup: function() {
      theme.Helpers.prepareTransition(this.cartPopupWrapper);

      this.cartPopupWrapper.classList.remove(
        this.classes.cartPopupWrapperHidden
      );
      this._handleButtonLoadingState(false);

      slate.a11y.trapFocus({
        container: this.cartPopupWrapper,
        elementToFocus: this.cartPopup,
        namespace: 'cartPopupFocus'
      });
    },

    _hideCartPopup: function(event) {
      var setFocus = event.detail === 0 ? true : false;
      theme.Helpers.prepareTransition(this.cartPopupWrapper);
      this.cartPopupWrapper.classList.add(this.classes.cartPopupWrapperHidden);

      var cartPopupImage = document.querySelector(
        this.selectors.cartPopupImage
      );
      if (cartPopupImage) {
        cartPopupImage.remove();
      }
      this.cartPopupImagePlaceholder.setAttribute(
        'data-image-loading-animation',
        ''
      );

      slate.a11y.removeTrapFocus({
        container: this.cartPopupWrapper,
        namespace: 'cartPopupFocus'
      });

      if (setFocus) this.previouslyFocusedElement.focus();

      this.cartPopupWrapper.removeEventListener(
        'keyup',
        this.eventHandlers.cartPopupWrapperKeyupHandler
      );
      this.cartPopupClose.removeEventListener(
        'click',
        this.eventHandlers.hideCartPopup
      );
      this.cartPopupDismiss.removeEventListener(
        'click',
        this.eventHandlers.hideCartPopup
      );
      document.body.removeEventListener(
        'click',
        this.eventHandlers.onBodyClick
      );
    },

    _onBodyClick: function(event) {
      var target = event.target;

      if (
        target !== this.cartPopupWrapper &&
        !target.closest(this.selectors.cartPopup)
      ) {
        this._hideCartPopup(event);
      }
    },

    _setActiveThumbnail: function(mediaId) {
      // If there is no element passed, find it by the current product image
      if (typeof mediaId === 'undefined') {
        var productMediaWrapper = this.container.querySelector(
          this.selectors.productMediaWrapper + ':not(.hide)'
        );

        if (!productMediaWrapper) return;
        mediaId = productMediaWrapper.getAttribute('data-media-id');
      }

      var thumbnailWrappers = this.container.querySelectorAll(
        this.selectors.productThumbListItem + ':not(.slick-cloned)'
      );

      var activeThumbnail;
      thumbnailWrappers.forEach(
        function(el) {
          var current = el.querySelector(
            this.selectors.productThumbImages +
              "[data-thumbnail-id='" +
              mediaId +
              "']"
          );
          if (current) {
            activeThumbnail = current;
          }
        }.bind(this)
      );

      var productThumbImages = document.querySelectorAll(
        this.selectors.productThumbImages
      );
      productThumbImages.forEach(
        function(el) {
          el.classList.remove(this.classes.activeClass);
          el.removeAttribute('aria-current');
        }.bind(this)
      );

      if (activeThumbnail) {
        activeThumbnail.classList.add(this.classes.activeClass);
        activeThumbnail.setAttribute('aria-current', true);
        this._adjustThumbnailSlider(activeThumbnail);
      }
    },

    _adjustThumbnailSlider: function(activeThumbnail) {
      var sliderItem = activeThumbnail.closest('[data-slider-item]');
      if (!sliderItem) return;

      var slideGroupLeaderIndex =
        Math.floor(
          Number(sliderItem.getAttribute('data-slider-slide-index')) / 3
        ) * 3;

      window.setTimeout(
        function() {
          if (!this.slideshow) return;
          this.slideshow.goToSlideByIndex(slideGroupLeaderIndex);
        }.bind(this),
        251
      );
    },

    _switchMedia: function(mediaId) {
      var currentMedia = this.container.querySelector(
        this.selectors.productMediaWrapper +
          ':not(.' +
          this.classes.hidden +
          ')'
      );

      var newMedia = this.container.querySelector(
        this.selectors.productMediaWrapper + "[data-media-id='" + mediaId + "']"
      );

      var otherMedia = this.container.querySelectorAll(
        this.selectors.productMediaWrapper +
          ":not([data-media-id='" +
          mediaId +
          "'])"
      );

      currentMedia.dispatchEvent(
        new CustomEvent('mediaHidden', {
          bubbles: true,
          cancelable: true
        })
      );
      newMedia.classList.remove(this.classes.hidden);
      newMedia.dispatchEvent(
        new CustomEvent('mediaVisible', {
          bubbles: true,
          cancelable: true
        })
      );
      otherMedia.forEach(
        function(el) {
          el.classList.add(this.classes.hidden);
        }.bind(this)
      );
    },

    _handleMediaFocus: function(evt) {
      if (evt.keyCode !== slate.utils.keyboardKeys.ENTER) return;

      var mediaId = evt.currentTarget.getAttribute('data-thumbnail-id');

      var productMediaWrapper = this.container.querySelector(
        this.selectors.productMediaWrapper + "[data-media-id='" + mediaId + "']"
      );
      productMediaWrapper.focus();
    },

    _initThumbnailSlider: function() {
      setTimeout(
        function() {
          this.slideshow = new theme.Slideshow(
            this.container.querySelector('[data-thumbnail-slider]'),
            {
              canUseTouchEvents: true,
              type: 'slide',
              slideActiveClass: 'slick-active',
              slidesToShow: 3,
              slidesToScroll: 3
            }
          );

          this.settings.sliderActive = true;
        }.bind(this),
        250
      );
    },

    _destroyThumbnailSlider: function() {
      var sliderButtons = this.container.querySelectorAll(
        '[data-slider-button]'
      );
      var sliderTrack = this.container.querySelector('[data-slider-track]');
      var sliderItems = sliderTrack.querySelectorAll('[data-slider-item');
      this.settings.sliderActive = false;

      if (sliderTrack) {
        sliderTrack.removeAttribute('style');
        sliderItems.forEach(function(sliderItem) {
          var sliderItemLink = sliderItem.querySelector(
            '[data-slider-item-link]'
          );
          sliderItem.classList.remove('slick-active');
          sliderItem.removeAttribute('style');
          sliderItem.removeAttribute('tabindex');
          sliderItem.removeAttribute('aria-hidden');
          sliderItemLink.removeAttribute('tabindex');
        });
      }

      sliderButtons.forEach(function(sliderButton) {
        sliderButton.removeAttribute('aria-disabled');
      });

      this.slideshow.destroy();
      this.slideshow = null;
    },

    _liveRegionText: function(variant) {
      // Dummy content for live region
      var liveRegionText =
        '[Availability] [Regular] [$$] [Sale] [$]. [UnitPrice] [$$$]';

      if (!this.productState.available) {
        liveRegionText = theme.strings.unavailable;
        return liveRegionText;
      }

      // Update availability
      var availability = this.productState.soldOut
        ? theme.strings.soldOut + ','
        : '';
      liveRegionText = liveRegionText.replace('[Availability]', availability);

      // Update pricing information
      var regularLabel = '';
      var regularPrice = theme.Currency.formatMoney(
        variant.price,
        theme.moneyFormat
      );
      var saleLabel = '';
      var salePrice = '';
      var unitLabel = '';
      var unitPrice = '';

      if (this.productState.onSale) {
        regularLabel = theme.strings.regularPrice;
        regularPrice =
          theme.Currency.formatMoney(
            variant.compare_at_price,
            theme.moneyFormat
          ) + ',';
        saleLabel = theme.strings.sale;
        salePrice = theme.Currency.formatMoney(
          variant.price,
          theme.moneyFormat
        );
      }

      if (this.productState.showUnitPrice) {
        unitLabel = theme.strings.unitPrice;
        unitPrice =
          theme.Currency.formatMoney(variant.unit_price, theme.moneyFormat) +
          ' ' +
          theme.strings.unitPriceSeparator +
          ' ' +
          this._getBaseUnit(variant);
      }

      liveRegionText = liveRegionText
        .replace('[Regular]', regularLabel)
        .replace('[$$]', regularPrice)
        .replace('[Sale]', saleLabel)
        .replace('[$]', salePrice)
        .replace('[UnitPrice]', unitLabel)
        .replace('[$$$]', unitPrice)
        .trim();

      return liveRegionText;
    },

    _updateLiveRegion: function(evt) {
      var variant = evt.detail.variant;
      var liveRegion = this.container.querySelector(
        this.selectors.productStatus
      );
      liveRegion.innerHTML = this._liveRegionText(variant);
      liveRegion.setAttribute('aria-hidden', false);
      // hide content from accessibility tree after announcement
      setTimeout(function() {
        liveRegion.setAttribute('aria-hidden', true);
      }, 1000);
    },

    _enableAddToCart: function(message) {
      this.addToCart.removeAttribute('aria-disabled');
      this.addToCart.setAttribute('aria-label', message);
      this.addToCartText.innerHTML = message;
      this.productForm.classList.remove(this.classes.variantSoldOut);
    },

    _disableAddToCart: function(message) {
      message = message || theme.strings.unavailable;
      this.addToCart.setAttribute('aria-disabled', true);
      this.addToCart.setAttribute('aria-label', message);
      this.addToCartText.innerHTML = message;
      this.productForm.classList.add(this.classes.variantSoldOut);
    },

    _updateAddToCart: function() {
      if (!this.productState.available) {
        this._disableAddToCart(theme.strings.unavailable);
        return;
      }
      if (this.productState.soldOut) {
        this._disableAddToCart(theme.strings.soldOut);
        return;
      }

      this._enableAddToCart(theme.strings.addToCart);
    },

    /**
     * The returned productState object keeps track of a number of properties about the current variant and product
     * Multiple functions within product.js leverage the productState object to determine how to update the page's UI
     * @param {object} evt - object returned from variant change event
     * @return {object} productState - current product variant's state
     *                  productState.available - true if current product options result in valid variant
     *                  productState.soldOut - true if variant is sold out
     *                  productState.onSale - true if variant is on sale
     *                  productState.showUnitPrice - true if variant has unit price value
     */
    _setProductState: function(evt) {
      var variant = evt.detail.variant;

      if (!variant) {
        this.productState.available = false;
        return;
      }

      this.productState.available = true;
      this.productState.soldOut = !variant.available;
      this.productState.onSale = variant.compare_at_price > variant.price;
      this.productState.showUnitPrice = !!variant.unit_price;
    },

    _updateAvailability: function(evt) {
      // remove error message if one is showing
      this._hideErrorMessage();

      // set product state
      this._setProductState(evt);

      // update store availabilities info
      this._updateStoreAvailabilityContent(evt);
      // update form submit
      this._updateAddToCart();
      // update live region
      this._updateLiveRegion(evt);

      this._updatePriceComponentStyles(evt);
    },

    _updateStoreAvailabilityContent: function(evt) {
      if (!this.storeAvailability) {
        return;
      }

      if (this.productState.available && !this.productState.soldOut) {
        this.storeAvailability.updateContent(evt.detail.variant.id);
      } else {
        this.storeAvailability.clearContent();
      }
    },

    _updateMedia: function(evt) {
      var variant = evt.detail.variant;
      var mediaId = variant.featured_media.id;
      var sectionMediaId = this.settings.sectionId + '-' + mediaId;

      this._switchMedia(sectionMediaId);
      this._setActiveThumbnail(sectionMediaId);
    },

    _hidePriceComponent: function() {
      this.priceContainer.classList.add(this.classes.productUnavailable);
      this.priceContainer.setAttribute('aria-hidden', true);
      if (this.productPolicies) {
        this.productPolicies.classList.add(this.classes.visibilityHidden);
      }
    },

    _updatePriceComponentStyles: function(evt) {
      var variant = evt.detail.variant;

      var unitPriceBaseUnit = this.priceContainer.querySelector(
        this.selectors.unitPriceBaseUnit
      );

      if (!this.productState.available) {
        this._hidePriceComponent();
        return;
      }

      if (this.productState.soldOut) {
        this.priceContainer.classList.add(this.classes.productSoldOut);
      } else {
        this.priceContainer.classList.remove(this.classes.productSoldOut);
      }

      if (this.productState.showUnitPrice) {
        unitPriceBaseUnit.innerHTML = this._getBaseUnit(variant);
        this.priceContainer.classList.add(this.classes.productUnitAvailable);
      } else {
        this.priceContainer.classList.remove(this.classes.productUnitAvailable);
      }

      if (this.productState.onSale) {
        this.priceContainer.classList.add(this.classes.productOnSale);
      } else {
        this.priceContainer.classList.remove(this.classes.productOnSale);
      }

      this.priceContainer.classList.remove(this.classes.productUnavailable);
      this.priceContainer.removeAttribute('aria-hidden');
      if (this.productPolicies) {
        this.productPolicies.classList.remove(this.classes.visibilityHidden);
      }
    },

    _updatePrice: function(evt) {
      var variant = evt.detail.variant;

      var regularPrices = this.priceContainer.querySelectorAll(
        this.selectors.regularPrice
      );
      var salePrice = this.priceContainer.querySelector(
        this.selectors.salePrice
      );
      var unitPrice = this.priceContainer.querySelector(
        this.selectors.unitPrice
      );

      var formatRegularPrice = function(regularPriceElement, price) {
        regularPriceElement.innerHTML = theme.Currency.formatMoney(
          price,
          theme.moneyFormat
        );
      };

      // On sale
      if (this.productState.onSale) {
        regularPrices.forEach(function(regularPrice) {
          formatRegularPrice(regularPrice, variant.compare_at_price);
        });
        salePrice.innerHTML = theme.Currency.formatMoney(
          variant.price,
          theme.moneyFormat
        );
      } else {
        // Regular price
        regularPrices.forEach(function(regularPrice) {
          formatRegularPrice(regularPrice, variant.price);
        });
      }

      // Unit price
      if (this.productState.showUnitPrice) {
        unitPrice.innerHTML = theme.Currency.formatMoney(
          variant.unit_price,
          theme.moneyFormat
        );
      }
    },

    _getBaseUnit: function(variant) {
      return variant.unit_price_measurement.reference_value === 1
        ? variant.unit_price_measurement.reference_unit
        : variant.unit_price_measurement.reference_value +
            variant.unit_price_measurement.reference_unit;
    },

    _updateSKU: function(evt) {
      var variant = evt.detail.variant;

      // Update the sku
      var sku = document.querySelector(this.selectors.SKU);
      if (!sku) return;
      sku.innerHTML = variant.sku;
    },

    _enableZoom: function(el, index) {
      this.zoomPictures[index] = new theme.Zoom(el);
    },

    _destroyZoom: function(index) {
      if (this.zoomPictures.length === 0) return;
      this.zoomPictures[index].unload();
    },

    onUnload: function() {
      this.container.removeEventListener(
        'variantChange',
        this.eventHandlers.updateAvailability
      );
      this.container.removeEventListener(
        'variantImageChange',
        this.eventHandlers.updateMedia
      );
      this.container.removeEventListener(
        'variantPriceChange',
        this.eventHandlers.updatePrice
      );
      this.container.removeEventListener(
        'variantSKUChange',
        this.eventHandlers.updateSKU
      );
      theme.ProductVideo.removeSectionVideos(this.settings.sectionId);
      theme.ProductModel.removeSectionModels(this.settings.sectionId);

      if (this.mqlSmall) {
        this.mqlSmall.removeListener(this.initMobileBreakpoint);
      }

      if (this.mqlMediumUp) {
        this.mqlMediumUp.removeListener(this.initDesktopBreakpoint);
      }
    }
  });

  return Product;
})();

theme.ProductRecommendations = (function() {
  function ProductRecommendations(container) {
    var baseUrl = container.dataset.baseUrl;
    var productId = container.dataset.productId;
    var recommendationsSectionUrl =
      baseUrl +
      '?section_id=product-recommendations&product_id=' +
      productId +
      '&limit=4';

    window.performance.mark(
      'debut:product:fetch_product_recommendations.start'
    );

    fetch(recommendationsSectionUrl)
      .then(function(response) {
        return response.text();
      })
      .then(function(productHtml) {
        if (productHtml.trim() === '') return;

        container.innerHTML = productHtml;
        container.innerHTML = container.firstElementChild.innerHTML;

        window.performance.mark(
          'debut:product:fetch_product_recommendations.end'
        );

        performance.measure(
          'debut:product:fetch_product_recommendations',
          'debut:product:fetch_product_recommendations.start',
          'debut:product:fetch_product_recommendations.end'
        );
      });
  }

  return ProductRecommendations;
})();

theme.Quotes = (function() {
  var config = {
    mediaQuerySmall: 'screen and (max-width: 749px)',
    mediaQueryMediumUp: 'screen and (min-width: 750px)',
    slideCount: 0
  };

  var defaults = {
    canUseKeyboardArrows: false,
    type: 'slide',
    slidesToShow: 3
  };

  function Quotes(container) {
    this.container = container;
    var sectionId = container.getAttribute('data-section-id');
    this.slider = document.getElementById('Quotes-' + sectionId);

    this.sliderActive = false;

    this.mobileOptions = Object.assign({}, defaults, {
      canUseTouchEvents: true,
      slidesToShow: 1
    });

    this.desktopOptions = Object.assign({}, defaults, {
      slidesToShow: Math.min(
        defaults.slidesToShow,
        this.slider.getAttribute('data-count')
      )
    });

    this.initMobileSlider = this._initMobileSlider.bind(this);
    this.initDesktopSlider = this._initDesktopSlider.bind(this);

    this.mqlSmall = window.matchMedia(config.mediaQuerySmall);
    this.mqlSmall.addListener(this.initMobileSlider);

    this.mqlMediumUp = window.matchMedia(config.mediaQueryMediumUp);
    this.mqlMediumUp.addListener(this.initDesktopSlider);

    this.initMobileSlider();
    this.initDesktopSlider();
  }

  Quotes.prototype = Object.assign({}, Quotes.prototype, {
    onUnload: function() {
      this.mqlSmall.removeListener(this.initMobileSlider);
      this.mqlMediumUp.removeListener(this.initDesktopSlider);
      this.slideshow.destroy();
    },

    // eslint-disable-next-line no-unused-vars
    onBlockSelect: function(evt) {
      var slide = document.querySelector(
        '.quotes-slide--' + evt.detail.blockId
      );
      var slideIndex = Number(slide.getAttribute('data-slider-slide-index'));

      if (this.mqlMediumUp.matches) {
        slideIndex = Math.max(
          0,
          Math.min(slideIndex, this.slideshow.slides.length - 3)
        );
      }

      this.slideshow.goToSlideByIndex(slideIndex);
    },

    _initMobileSlider: function() {
      if (this.mqlSmall.matches) {
        this._initSlider(this.mobileOptions);
      }
    },

    _initDesktopSlider: function() {
      if (this.mqlMediumUp.matches) {
        this._initSlider(this.desktopOptions);
      }
    },

    // eslint-disable-next-line no-unused-vars
    _initSlider: function(args) {
      if (this.sliderActive) {
        this.slideshow.destroy();
        this.sliderActive = false;
      }

      this.slideshow = new theme.Slideshow(this.container, args);
      this.sliderActive = true;
    }
  });

  return Quotes;
})();

theme.SlideshowSection = (function() {
  var selectors = {
    sliderMobileContentIndex: '[data-slider-mobile-content-index]'
  };

  function SlideshowSection(container) {
    var sectionId = container.dataset.sectionId;

    this.container = container;
    this.eventHandlers = {};
    this.slideshowDom = container.querySelector('#Slideshow-' + sectionId);
    this.sliderMobileContentIndex = container.querySelectorAll(
      selectors.sliderMobileContentIndex
    );

    this.slideshow = new theme.Slideshow(container, {
      autoplay: this.slideshowDom.getAttribute('data-autorotate') === 'true',
      slideInterval: this.slideshowDom.getAttribute('data-speed')
    });
    this._setupEventListeners();
  }

  return SlideshowSection;
})();

theme.SlideshowSection.prototype = Object.assign(
  {},
  theme.SlideshowSection.prototype,
  {
    _setupEventListeners: function() {
      this.eventHandlers.onSliderSlideChanged = function(event) {
        this._onSliderSlideChanged(event.detail);
      }.bind(this);

      this.container.addEventListener(
        'slider_slide_changed',
        this.eventHandlers.onSliderSlideChanged
      );
    },

    _onSliderSlideChanged: function(slideIndex) {
      var activeClass = 'slideshow__text-content--mobile-active';

      this.sliderMobileContentIndex.forEach(function(element) {
        if (
          Number(element.getAttribute('data-slider-mobile-content-index')) ===
          slideIndex
        ) {
          element.classList.add(activeClass);
        } else {
          element.classList.remove(activeClass);
        }
      });
    },

    onUnload: function() {
      this.slideshow.destroy();
    },

    onBlockSelect: function(evt) {
      if (this.slideshow.adaptHeight) {
        this.slideshow.setSlideshowHeight();
      }

      // Get slide's index using theme editor's id
      var slide = this.container.querySelector(
        '.slideshow__slide--' + evt.detail.blockId
      );
      var slideIndex = slide.getAttribute('data-slider-slide-index');

      // Go to selected slide, pause auto-rotate
      this.slideshow.setSlide(slideIndex);
      this.slideshow.stopAutoplay();
    },

    onBlockDeselect: function() {
      // Resume auto-rotate
      this.slideshow.startAutoplay();
    }
  }
);

window.theme = window.theme || {};

theme.StoreAvailability = (function() {
  var selectors = {
    storeAvailabilityModalOpen: '[data-store-availability-modal-open]',
    storeAvailabilityModalProductTitle:
      '[data-store-availability-modal-product-title]',
    storeAvailabilityModalVariantTitle:
      '[data-store-availability-modal-variant-title]'
  };

  var classes = {
    hidden: 'hide'
  };

  function StoreAvailability(container) {
    this.container = container;
    this.productTitle = this.container.dataset.productTitle;
    this.hasOnlyDefaultVariant =
      this.container.dataset.hasOnlyDefaultVariant === 'true';
  }

  StoreAvailability.prototype = Object.assign({}, StoreAvailability.prototype, {
    updateContent: function(variantId) {
      var variantSectionUrl =
        this.container.dataset.baseUrl +
        '/variants/' +
        variantId +
        '/?section_id=store-availability';
      var self = this;

      var storeAvailabilityModalOpen = self.container.querySelector(
        selectors.storeAvailabilityModalOpen
      );

      this.container.style.opacity = 0.5;
      if (storeAvailabilityModalOpen) {
        storeAvailabilityModalOpen.disabled = true;
        storeAvailabilityModalOpen.setAttribute('aria-busy', true);
      }

      fetch(variantSectionUrl)
        .then(function(response) {
          return response.text();
        })
        .then(function(storeAvailabilityHTML) {
          if (storeAvailabilityHTML.trim() === '') {
            return;
          }
          self.container.innerHTML = storeAvailabilityHTML;
          self.container.innerHTML = self.container.firstElementChild.innerHTML;
          self.container.style.opacity = 1;

          // Need to query this again because we updated the DOM
          storeAvailabilityModalOpen = self.container.querySelector(
            selectors.storeAvailabilityModalOpen
          );

          if (!storeAvailabilityModalOpen) {
            return;
          }

          storeAvailabilityModalOpen.addEventListener(
            'click',
            self._onClickModalOpen.bind(self)
          );

          self.modal = self._initModal();
          self._updateProductTitle();
          if (self.hasOnlyDefaultVariant) {
            self._hideVariantTitle();
          }
        });
    },

    clearContent: function() {
      this.container.innerHTML = '';
    },

    _onClickModalOpen: function() {
      this.container.dispatchEvent(
        new CustomEvent('storeAvailabilityModalOpened', {
          bubbles: true,
          cancelable: true
        })
      );
    },

    _initModal: function() {
      return new window.Modals(
        'StoreAvailabilityModal',
        'store-availability-modal',
        {
          close: '.js-modal-close-store-availability-modal',
          closeModalOnClick: true,
          openClass: 'store-availabilities-modal--active'
        }
      );
    },

    _updateProductTitle: function() {
      var storeAvailabilityModalProductTitle = this.container.querySelector(
        selectors.storeAvailabilityModalProductTitle
      );
      storeAvailabilityModalProductTitle.textContent = this.productTitle;
    },

    _hideVariantTitle: function() {
      var storeAvailabilityModalVariantTitle = this.container.querySelector(
        selectors.storeAvailabilityModalVariantTitle
      );
      storeAvailabilityModalVariantTitle.classList.add(classes.hidden);
    }
  });

  return StoreAvailability;
})();

theme.VideoSection = (function() {
  function VideoSection(container) {
    container.querySelectorAll('.video').forEach(function(el) {
      theme.Video.init(el);
      theme.Video.editorLoadVideo(el.id);
    });
  }

  return VideoSection;
})();

theme.VideoSection.prototype = Object.assign({}, theme.VideoSection.prototype, {
  onUnload: function() {
    theme.Video.removeEvents();
  }
});

theme.heros = {};

theme.HeroSection = (function() {
  function HeroSection(container) {
    var sectionId = container.getAttribute('data-section-id');
    var hero = '#Hero-' + sectionId;
    theme.heros[hero] = new theme.Hero(hero, sectionId);
  }

  return HeroSection;
})();

window.theme = window.theme || {};

var selectors = {
  disclosureLocale: '[data-disclosure-locale]',
  disclosureCurrency: '[data-disclosure-currency]'
};

theme.FooterSection = (function() {
  function Footer(container) {
    this.container = container;
    this.cache = {};
    this.cacheSelectors();

    if (this.cache.localeDisclosure) {
      this.localeDisclosure = new theme.Disclosure(this.cache.localeDisclosure);
    }

    if (this.cache.currencyDisclosure) {
      this.currencyDisclosure = new theme.Disclosure(
        this.cache.currencyDisclosure
      );
    }
  }

  Footer.prototype = Object.assign({}, Footer.prototype, {
    cacheSelectors: function() {
      this.cache = {
        localeDisclosure: this.container.querySelector(
          selectors.disclosureLocale
        ),
        currencyDisclosure: this.container.querySelector(
          selectors.disclosureCurrency
        )
      };
    },

    onUnload: function() {
      if (this.cache.localeDisclosure) {
        this.localeDisclosure.destroy();
      }

      if (this.cache.currencyDisclosure) {
        this.currencyDisclosure.destroy();
      }
    }
  });

  return Footer;
})();


document.addEventListener('DOMContentLoaded', function() {
  var sections = new theme.Sections();

  sections.register('cart-template', theme.Cart);
  sections.register('product', theme.Product);
  sections.register('collection-template', theme.Filters);
  sections.register('product-template', theme.Product);
  sections.register('header-section', theme.HeaderSection);
  sections.register('map', theme.Maps);
  sections.register('slideshow-section', theme.SlideshowSection);
  sections.register('store-availability', theme.StoreAvailability);
  sections.register('video-section', theme.VideoSection);
  sections.register('quotes', theme.Quotes);
  sections.register('hero-section', theme.HeroSection);
  sections.register('product-recommendations', theme.ProductRecommendations);
  sections.register('footer-section', theme.FooterSection);

  theme.customerTemplates.init();

  // Theme-specific selectors to make tables scrollable
  var tableSelectors = '.rte table,' + '.custom__item-inner--html table';

  slate.rte.wrapTable({
    tables: document.querySelectorAll(tableSelectors),
    tableWrapperClass: 'scrollable-wrapper'
  });

  // Theme-specific selectors to make iframes responsive
  var iframeSelectors =
    '.rte iframe[src*="youtube.com/embed"],' +
    '.rte iframe[src*="player.vimeo"],' +
    '.custom__item-inner--html iframe[src*="youtube.com/embed"],' +
    '.custom__item-inner--html iframe[src*="player.vimeo"]';

  slate.rte.wrapIframe({
    iframes: document.querySelectorAll(iframeSelectors),
    iframeWrapperClass: 'video-wrapper'
  });

  // Common a11y fixes
  slate.a11y.pageLinkFocus(
    document.getElementById(window.location.hash.substr(1))
  );

  var inPageLink = document.querySelector('.in-page-link');
  if (inPageLink) {
    inPageLink.addEventListener('click', function(evt) {
      slate.a11y.pageLinkFocus(
        document.getElementById(evt.currentTarget.hash.substr(1))
      );
    });
  }

  document.querySelectorAll('a[href="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(evt) {
      evt.preventDefault();
    });
  });

  slate.a11y.accessibleLinks({
    messages: {
      newWindow: theme.strings.newWindow,
      external: theme.strings.external,
      newWindowExternal: theme.strings.newWindowExternal
    },
    links: document.querySelectorAll(
      'a[href]:not([aria-describedby]), .product-single__thumbnail'
    )
  });

  theme.FormStatus.init();

  var selectors = {
    image: '[data-image]',
    lazyloaded: '.lazyloaded'
  };

  document.addEventListener('lazyloaded', function(evt) {
    var image = evt.target;

    removeImageLoadingAnimation(image);

    if (document.body.classList.contains('template-index')) {
      var mainContent = document.getElementById('MainContent');

      if (mainContent && mainContent.children && mainContent.children.length) {
        var firstSection = document.getElementsByClassName('index-section')[0];

        if (!firstSection.contains(image)) return;

        window.performance.mark('debut:index:first_image_visible');
      }
    }

    if (image.hasAttribute('data-bgset')) {
      var innerImage = image.querySelector(selectors.lazyloaded);

      if (innerImage) {
        var alt = image.getAttribute('data-alt');
        var src = innerImage.hasAttribute('data-src')
          ? innerImage.getAttribute('data-src')
          : image.getAttribute('data-bg');

        image.setAttribute('alt', alt ? alt : '');
        image.setAttribute('src', src ? src : '');
      }
    }

    if (!image.hasAttribute('data-image')) {
      return;
    }
  });

  // When the theme loads, lazysizes might load images before the "lazyloaded"
  // event listener has been attached. When this happens, the following function
  // hides the loading placeholders.
  function onLoadHideLazysizesAnimation() {
    var alreadyLazyloaded = document.querySelectorAll('.lazyloaded');
    alreadyLazyloaded.forEach(function(image) {
      removeImageLoadingAnimation(image);
    });
  }

  onLoadHideLazysizesAnimation();

  document.addEventListener(
    'touchstart',
    function() {
      theme.Helpers.setTouch();
    },
    { once: true }
  );

  if (document.fonts) {
    document.fonts.ready.then(function() {
      window.performance.mark('debut:fonts_loaded');
    });
  }
});

// Youtube API callback
// eslint-disable-next-line no-unused-vars
function onYouTubeIframeAPIReady() {
  theme.Video.loadVideos();
}

function removeImageLoadingAnimation(image) {
  // Remove loading animation
  var imageWrapper = image.hasAttribute('data-image-loading-animation')
    ? image
    : image.closest('[data-image-loading-animation]');

  if (imageWrapper) {
    imageWrapper.removeAttribute('data-image-loading-animation');
  }
}


$(document).ready(function() {
  // Homepage Sliders start
  var homePage = {
    initBannerSlider: function() {
      var bannerSlider = $('.mfu__banner');
      if(bannerSlider.length) {
        bannerSlider.slick({
          dots: true,
          arrows: false,
          infinite: true,
          speed: 500,
          autoplaySpeed: 15000,
          autoplay: true
        });
      }
    },
    initCollectionProductSlider: function() {
      var collectionSlider = $('.collection_list .grid-slider');
      var collectionSliderCount = parseInt($(collectionSlider).find('.grid__item').length);
      if (collectionSlider.length && collectionSliderCount > 2) {
        collectionSlider.slick({
          dots: false,
          arrows: true,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: false,
          prevArrow:'<button type="button" class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 33"><g id="7f9a1925-e8c7-4614-8787-3c6095a9f6e1" data-name="Layer 2"><g id="c9b7920a-81fa-4bfe-ad13-4da717c6854b" data-name="Layer 1"><g id="c2d982ff-0cf6-4220-b365-47f30d708fea" data-name="e4eb89a6-f885-43b8-9259-0d6b1516fab0"><g id="f51d455e-6b9c-4c4e-96db-a5004582beda" data-name="8e584754-6657-46f1-a9d8-2cfd6623b552"><polygon points="0 16.5 2.1 18.5 17 33 17 29.3 5.9 18.5 3.8 16.5 5.9 14.5 17 3.7 17 0 2.1 14.5 0 16.5"></polygon></g></g></g></g></svg></button>',
          nextArrow:'<button type="button" class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 17 33" xml:space="preserve"><g id="e4eb89a6-f885-43b8-9259-0d6b1516fab0"><g id="_x38_e584754-6657-46f1-a9d8-2cfd6623b552"><g><polygon points="14.9,14.5 0,0 0,3.7 11.1,14.5 13.2,16.5 11.1,18.5 0,29.3 0,33 14.9,18.5 17,16.5 "></polygon></g></g></g></svg></button>',
          responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 640,
              settings: {
                arrows: false,
                slidesToShow: 1.4
              }
            }
          ]
        });
      }
    },
    announcementBarSlider: function() {
      var announcementSlider = $('.announcement-text-wrapper');
      if(announcementSlider.length) {
        announcementSlider.slick({
          dots: false,
          arrows: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true
        });
      }
    },
    promotionPopup: function() {
      var popup = Cookies.get('popup');
      if(popup != 'open'){
        $("#size-chart-popup").css({"visibility":"visible","opacity":"1"});
      }

      $("#size-chart-popup").click(function(e){
        if($(e.target).closest(".popup").length<1){
          $(this).css({"visibility":"hidden","opacity":"0"});
          $("body").css("overflow","unset").removeClass('mm-popup--opened');
          Cookies.set('popup', 'open');
        }
      });

      $(".overlay .close-popup").click(function(e){
        $(this).closest('.overlay').css({"visibility":"hidden","opacity":"0"});
        Cookies.set('popup', 'open');
      });
    }
  }
  
  var productPage = {
    productThumbnilSlider:function(){
      var thumbnailSlider = $('.product-single__thumbnails');
      var gallerySlider= $('.product-single--medium-media .feature-image-wrapper');
      thumbnailSlider.slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 5,
        rows:0,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="17.378" height="26.68" viewBox="0 0 17.378 26.68"><defs><style>.sl-pr-a{fill:none;stroke:#020506;stroke-miterlimit:10;stroke-width:3.5px;}</style></defs><path class="sl-pr-a" d="M2790.106,2324.637l-13.579,12.029,13.579,12.031" transform="translate(-2773.888 -2323.327)"/></svg><span class="visuallyhidden">Slick arrow</span></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="17.378" height="26.68" viewBox="0 0 17.378 26.68"><defs><style>.sl-nx-a{fill:none;stroke:#020506;stroke-miterlimit:10;stroke-width:3.5px;}</style></defs><path class="sl-nx-a" d="M2926.528,2348.7l13.579-12.029-13.579-12.031" transform="translate(-2925.367 -2323.328)"/></svg><span class="visuallyhidden">Slick arrow</span></button>',
        responsive: [
          {
            breakpoint: 1281,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
              verticalSwiping: false,
              vertical: false
            }
          }
        ]
      });
      
      if($(window).width()<767){
        gallerySlider.slick({
          slidesToShow: 1,
          rows:0,
          slidesToScroll: 1,
          dots: true
        });
      }
      	  
      function productImageFilter(variantName){
        var windowWidth = $(window).width();
        if(windowWidth<768){
          gallerySlider.slick('slickUnfilter');
          gallerySlider.slick('slickFilter', variantName);
        }else{
          thumbnailSlider.slick('slickUnfilter');
          thumbnailSlider.slick('slickFilter', variantName);
          $('.product-single__thumbnails-item.slick-current .product-single__thumbnail img').click();
        }
      }

      var variantName = $('.swatch.metal .swatch-element input:checked + label').attr("data-color");
      var variantImageCount = $(variantName).length;
      console.log(variantImageCount);
      if(variantImageCount>1){
        setTimeout(function(){
          productImageFilter(variantName);
          console.log(variantName);
        },100);

        $('.swatch.metal .swatch-element label').on('click',function(){
          var $this = $(this);
          setTimeout(function(){
            variantName = $this.closest('.swatch-element').attr("data-color");
            console.log(variantName);
            productImageFilter(variantName);
          },100);
        });
      }
      
    },
    relatedProductSlider:function(){
      var relatedProduct = $('.mm__recommended--items');
      relatedProduct.slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="17.378" height="26.68" viewBox="0 0 17.378 26.68"><defs><style>.sl-pr-a{fill:none;stroke:#020506;stroke-miterlimit:10;stroke-width:3.5px;}</style></defs><path class="sl-pr-a" d="M2790.106,2324.637l-13.579,12.029,13.579,12.031" transform="translate(-2773.888 -2323.327)"/></svg><span class="visuallyhidden">Slick arrow</span></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="17.378" height="26.68" viewBox="0 0 17.378 26.68"><defs><style>.sl-nx-a{fill:none;stroke:#020506;stroke-miterlimit:10;stroke-width:3.5px;}</style></defs><path class="sl-nx-a" d="M2926.528,2348.7l13.579-12.029-13.579-12.031" transform="translate(-2925.367 -2323.328)"/></svg><span class="visuallyhidden">Slick arrow</span></button>',
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1.4,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      });
    },
    initAccordion: function() {      
      $(".product_description--accordion").on("click", ".accordion-header", function() {
        $(this).toggleClass("active").next().slideToggle();
        $(".accordion-header").not(this).removeClass("active").next().slideUp();
      });
    },
    swatchVariantChange: function() {
      jQuery(function() {
        jQuery('.swatch :radio').change(function() {
          var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
          var optionValue = jQuery(this).val();
          jQuery(this).closest('form').find('.single-option-selector').eq(optionIndex).val(optionValue).trigger('change');
          var option1 = $('.single-option-selector[data-index="option1"]').val();
          var option2 = $('.single-option-selector[data-index="option2"]').val();
          if(option2 != undefined){
            var finalOption = option1+" / "+option2;
          }else{
            var finalOption = option1;
          }
          //           console.log(option1,option2,finalOption);
          var valofText = $('[name="id"] option').filter(function() {
            return this.text == finalOption
          }).val();
          //           console.log(valofText);
          $('[name="id"]').val(valofText).trigger('change');
        });
        
        $('[name="id"]').on('change',function(){
          var variant = $(this).val();
          var variantSku = $(this).children('option:selected').data('sku');
          var isVariantAvailable = $(this).children('option:selected').data('available');
          var variantPriceWithCurrency = $(this).children('option:selected').data('price');
          var variantComparePriceWithCurrency = $(this).children('option:selected').data('compare-price');
          var variantPriceWithoutCurrency = parseInt($(this).children('option:selected').data('price-without-currency'));
          var variantComparePriceWithoutCurrency = parseInt($(this).children('option:selected').data('compare-price-without-currency')||0);
          console.log(variantComparePriceWithoutCurrency);
          $('.price__regular [data-regular-price]').text(variantPriceWithCurrency);
          $('.price__sale [data-sale-price]').text(variantPriceWithCurrency);
          $('.price__sale [data-regular-price]').text(variantComparePriceWithCurrency);
          variantComparePriceWithoutCurrency>variantPriceWithoutCurrency?$('.product__price .price').addClass('price--on-sale'):$('.product__price .price').removeClass('price--on-sale');
          $('.product-sku span').text(variantSku);
          function variantAvailable(){
            $(".estimated_date").removeClass('hide');
            $('.product-form__item--submit').find('[name="add"]').attr('aria-label','Add to cart').text('Add to cart');
            $('.product-form__item--submit').find('[name="add"]').show();
            $('#mhaRnProduct').hide();
            $('.product-form').removeClass('product-form--variant-sold-out');
          }
          function variantNotAvailable(){
            $(".estimated_date").addClass('hide');
            $('.product-form__item--submit').find('[name="add"]').attr('aria-label','Sold out').text('Sold out');
            $('.product-form__item--submit').find('[name="add"]').hide();
            $('#mhaRnProduct').show();
            $('.product-form').addClass('product-form--variant-sold-out');
          }
          isVariantAvailable == false ? variantNotAvailable() : variantAvailable();
          var newurl =window.location.protocol +'//' +window.location.host +window.location.pathname +'?variant='+variant;
          window.history.replaceState({ path: newurl }, '', newurl);
        });
        
        $(document).on('click','.item-swatch li a',function(e){
          e.preventDefault();
          var swatchLink = $(this).attr('href');
          var firstImage = $(this).data('first-image');
          var secondImage = $(this).data('second-image');
           $(this).closest('.product-card').find('.mm-product-link').attr('href',swatchLink);
          $(this).closest('.product-card').find('.images-first').attr('srcset',firstImage).attr('src',firstImage);;
          $(this).closest('.product-card').find('.images-two img').attr('srcset',secondImage).attr('src',secondImage);;
        });
        
      });
    }
  }
  
  var MobileMenu = {
    open: function() {
      $('.hamburger_menu').on('click', function() {
        $('.mobile__menu').addClass('show');
        $('.dark_overlay').show();
      })
    },
    close: function() {
      $('.dark_overlay').click(function() {
        $(this).hide();
        $('.mobile__menu').removeClass('show');
        event.stopPropagation();
      });
      $('.profile .profile_pic').click(function() {
        $('.dark_overlay').hide();
        $('.mobile__menu').removeClass('show');
        event.stopPropagation();
      });
    },
    openSubmenu: function() {
      $('.has-submenu .toggle-icon').click(function() {
        $(this).closest('.has-submenu').toggleClass('has--closed');
        var dataLevel = $(this).closest('.has-submenu').find('a').data('menu');
        console.log(dataLevel);
        $('[data-parent="'+dataLevel+'"]').slideToggle();
        event.stopPropagation();
      });
    }
  }
  
  var ajaxCartDrawer = {
    AjaxcartOpen: function() {
      var body = $('body'),
          ajaxCart = $('.mm-ajaxcart'),
          ajaxOverlay = $('.mm-ajaxcart-overlay');
      body.addClass('mm-no-scroll');
      ajaxCart.addClass('has--opened');
      ajaxOverlay.addClass('has--active');
    },
    AjaxcartClose: function() {
      var body = $('body'),
          ajaxCart = $('.mm-ajaxcart'),
          ajaxOverlay = $('.mm-ajaxcart-overlay');
      body.removeClass('mm-no-scroll');
      ajaxCart.removeClass('has--opened');
      ajaxOverlay.removeClass('has--active');
    },
    AjaxcartRender: function() {
      $.get('/cart?view=mm-ajax', function(cart) {
        $('.mm-ajaxcart').html(cart);
      })
    },
    AjaxcartChangeHandler: function(data) {
      $.ajax({
        url: '/cart/change.js',
        dataType: 'json',
        cache: false,
        type: 'post',
        data: data,
        success: function(cart) {
          ajaxCartDrawer.AjaxcartRender();
          var CartCount = cart.item_count;
          if (CartCount > 0) {
            $('#CartCount').removeClass('hide');	
          } else {
            $('#CartCount').addClass('hide');
          }
          $('[data-cart-count]').html(CartCount);
          CartCount < 2?($('.cart-popup__heading span').text(CartCount+' item')):($('.cart-popup__heading span').text(CartCount+' items'));
        }
      });
    },
    AjaxcartQuantityHandler: function() {
      $(document).on('click', '.quantity-plus', function() {
        let q = $(this).parent().find('.quantity-input').val(),
            i = 1,
            p = parseInt(i),
            u = parseInt(q) + p;
        $(this).parent().find('.quantity-input').val(u).trigger('change');
      })
      $(document).on('click', '.quantity-minus', function() {
        let q = $(this).parent().find('.quantity-input').val(),
            i = 1,
            p = parseInt(i),
            u = parseInt(q) - p;
        $(this).parent().find('.quantity-input').val(u).trigger('change');
      })
      $(document).on('change', '.quantity-input', function() {
        var UpdatedQuantity = parseInt($(this).val()),
            QuantityLine = parseInt($(this).attr('data-line')),
            params = {
              quantity: UpdatedQuantity,
              line: QuantityLine
            };
        ajaxCartDrawer.AjaxcartChangeHandler(params);
      })
      $(document).on('click', '.mm-ajaxcart-remove-item', function() {
        var RemoveLine = parseInt($(this).attr('data-line')),
            params = {
              quantity: 0,
              line: RemoveLine
            };
        ajaxCartDrawer.AjaxcartChangeHandler(params);
      })
    }
  }

  MobileMenu.open();
  MobileMenu.close();
  MobileMenu.openSubmenu();
  
  homePage.initBannerSlider();
  homePage.announcementBarSlider();
  homePage.promotionPopup();
  homePage.initCollectionProductSlider();
  
  productPage.productThumbnilSlider();
  productPage.swatchVariantChange();
  productPage.relatedProductSlider();
  productPage.initAccordion();
  
  ajaxCartDrawer.AjaxcartRender();
  ajaxCartDrawer.AjaxcartQuantityHandler();
  
  $("button.shopify-payment-button__button.shopify-payment-button__button--unbranded").on("click",function(e){
    e.preventDefault();
    var variantId = $('[name="id"]').find(":selected").val()
    console.log(variantId);
    window.location.href = "/cart/"+variantId+":1";
  });
  
  $(document).on('click', '.mm-ajaxcart-open,.site-header__cart', function(e) {
    e.preventDefault();
    ajaxCartDrawer.AjaxcartOpen();
    ajaxCartDrawer.AjaxcartRender();
  })

  $(document).on('click', '.mm-ajaxcart-close, .mm-ajaxcart-overlay', function(e) {
    e.preventDefault();
    ajaxCartDrawer.AjaxcartClose();
  });
  
  //AJAX ADD TO CART PDP
  $(document).on('click', '.product-form button[name="add"]', function(e) {
    e.preventDefault();
    var formData = $('form.product-form').serializeArray();
    var $this = $(this);
    function ajaxAdd(data) {
      $.ajax({
        url: '/cart/add.js',
        dataType: 'json',
        cache: false,
        type: 'post',
        data: data,
        beforeSend: function () {
          $this.find("span").addClass("hide");
          $this.find("[data-loader]").removeClass("hide");
        },
        success: function () {
          ajaxCartDrawer.AjaxcartRender();
          setTimeout(function () {
            ajaxCartDrawer.AjaxcartOpen();
            $this.find("span").removeClass("hide");
            $this.find("[data-loader]").addClass("hide");
          }, 500);

          //Call Cart JSON
          $.getJSON('/cart.js', function(cart) {
            var currentCartCount = cart.item_count;
            if (currentCartCount > 0) {
              $('#CartCount').removeClass('hide');	
            } else {
              $('#CartCount').addClass('hide');
            }
            $('[data-cart-count]').html(currentCartCount);
            currentCartCount < 2?($('.cart-popup__heading span').text(CartCount+' item')):($('.cart-popup__heading span').text(CartCount+' items'));
          });
        },
        error: function (error) {
          console.log('error',error);
        }
      });
    }
    ajaxAdd(formData);
  });
  
});