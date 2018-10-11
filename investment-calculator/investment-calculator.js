/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
        void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

// Generated by CoffeeScript 1.3.1

/*
                  Verdict.coffee 0.0.0.0.0.1
 (c) 2011 Radagaisus MIT open-source license
 Inspired by tangle.js - http://worrydream.com/Tangle/

 requirements: jQuery        http://www.jquery.com/
*/


/*
 usage:
  add adjustable_number class if you want some spiffy css
  $("#cookies").numbers
    max: 200
    min: 0
    step: 1
    integer: false
*/


(function() {

    (function($) {
        $.format || ($.format = {});
        $.format.num = function(num) {
            return ('' + num).replace(/(\d+)(\..*)?/, function($0, $1, $2) {
                return $1.replace(/(\d)(?=(\d{3})+$)/g, '$1,') + ($2 || '');
            });
        };
        return $.fn.numbers = function(o) {
            var defaults, number_drag;
            defaults = {
                step: 1,
                integer: true,
                speed: 2,
                limit: 1,
                growth: 1,
                slowdown: false,
                slowdownStep: null
            };
            o = $.extend(defaults, o);

            number_drag = function(elem) {
                var x;
                function updateValue(change) {
                    var dir, val;
                    val = Number(elem.text().replace(/,/g, ''));
                    if((change.pageX - x) > o.limit || (change.pageX - x) < -o.limit) {

                        dir = o.speed * (x < change.pageX) - 1;

                        slowVal = Math.max(Math.min(val + dir * o.slowdownStep, o.max || Infinity), o.min);
                        if (o.slowdown && slowVal <= o.slowdown) {
                            val = slowVal;
                        } else {
                            val = Math.max(Math.min(val + dir * o.step, o.max || Infinity), o.min);
                        }

                        x = change.pageX;

                    }
                    elem.text($.format.num(val));
                    return elem.trigger('verdict_change', val);
                }
                elem.css('cursor', 'cursor');

                elem[0].addEventListener('touchstart', function(e) {
                    x = e.pageX;
                    return document.addEventListener('touchmove', updateValue);
                });
                elem[0].addEventListener('touchend', function() {
                    document.removeEventListener('touchmove', updateValue);
                });

                elem.mousedown(function(e) {
                    document.body.onselectstart = function() {
                        return false;
                    };
                    document.body.style.MozUserSelect = "none";
                    document.body.onmousedown = function() {
                        return false;
                    };
                    document.body.style.cursor = "col-resize";
                    x = e.pageX;
                    return $(window).bind('mousemove.numbers', updateValue);
                });
                $(window).mouseup(function() {
                    $(window).unbind('mousemove.numbers');
                    document.body.onselectstart = null;
                    document.body.style.MozUserSelect = "";
                    document.body.onmousedown = null;
                    return document.body.style.cursor = "inherit";
                });
            };
            return this.each(function() {
                return number_drag($(this));
            });
        };
    })(window.jQuery);

    /*
     usage:
      add toggle class if you want some spiffy css
      $("#cookies").toggle_select
        list of alternative contents
    */

    (function($) {
        return $.fn.bool_select = function(o) {
            var bool, monthval;
            bool = function(elem, first) {
                return elem.click(function(e) {
                    if (elem.text() === o.first) {
                        elem.text(o.second);
                    } else {
                        elem.text(o.first);
                    }
                    return elem.trigger('verdict_change', elem.text());
                });
            };
            return this.each(function() {
                return bool($(this));
            });
        };
    })(window.jQuery);

}).call(this);

(function(){function e(a){var b=-1,c=a.length,d=[];while(++b<c)d.push(a[b]);return d}function f(a){return Array.prototype.slice.call(a)}function i(){return this}function j(a){return a!=null&&!isNaN(a)}function k(a){return a.length}function l(a){return a==null}function m(a){return a.replace(/(^\s+)|(\s+$)/g,"").replace(/\s+/g," ")}function o(){}function p(){function c(){var b=a,c=-1,d=b.length,e;while(++c<d)(e=b[c])._on&&e.apply(this,arguments)}var a=[],b={};return c.on=function(d,e){var f,g;if(f=b[d])f._on=!1,a=a.slice(0,g=a.indexOf(f)).concat(a.slice(g+1)),delete b[d];return e&&(e._on=!0,a.push(e),b[d]=e),c},c}function s(a,b){return b-(a?1+Math.floor(Math.log(a+Math.pow(10,1+Math.floor(Math.log(a)/Math.LN10)-b))/Math.LN10):1)}function t(a){return a+""}function u(a){var b=a.lastIndexOf("."),c=b>=0?a.substring(b):(b=a.length,""),d=[];while(b>0)d.push(a.substring(b-=3,b+3));return d.reverse().join(",")+c}function w(a,b){return{scale:Math.pow(10,(8-b)*3),symbol:a}}function B(a){return function(b){return b<=0?0:b>=1?1:a(b)}}function C(a){return function(b){return 1-a(1-b)}}function D(a){return function(b){return.5*(b<.5?a(2*b):2-a(2-2*b))}}function E(a){return a}function F(a){return function(b){return Math.pow(b,a)}}function G(a){return 1-Math.cos(a*Math.PI/2)}function H(a){return Math.pow(2,10*(a-1))}function I(a){return 1-Math.sqrt(1-a*a)}function J(a,b){var c;return arguments.length<2&&(b=.45),arguments.length<1?(a=1,c=b/4):c=b/(2*Math.PI)*Math.asin(1/a),function(d){return 1+a*Math.pow(2,10*-d)*Math.sin((d-c)*2*Math.PI/b)}}function K(a){return a||(a=1.70158),function(b){return b*b*((a+1)*b-a)}}function L(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}function M(){d3.event.stopPropagation(),d3.event.preventDefault()}function O(a){return a=="transform"?d3.interpolateTransform:d3.interpolate}function P(a,b){return b=b-(a=+a)?1/(b-a):0,function(c){return(c-a)*b}}function Q(a,b){return b=b-(a=+a)?1/(b-a):0,function(c){return Math.max(0,Math.min(1,(c-a)*b))}}function R(a,b,c){return new S(a,b,c)}function S(a,b,c){this.r=a,this.g=b,this.b=c}function T(a){return a<16?"0"+Math.max(0,a).toString(16):Math.min(255,a).toString(16)}function U(a,b,c){var d=0,e=0,f=0,g,h,i;g=/([a-z]+)\((.*)\)/i.exec(a);if(g){h=g[2].split(",");switch(g[1]){case"hsl":return c(parseFloat(h[0]),parseFloat(h[1])/100,parseFloat(h[2])/100);case"rgb":return b(W(h[0]),W(h[1]),W(h[2]))}}return(i=X[a])?b(i.r,i.g,i.b):(a!=null&&a.charAt(0)==="#"&&(a.length===4?(d=a.charAt(1),d+=d,e=a.charAt(2),e+=e,f=a.charAt(3),f+=f):a.length===7&&(d=a.substring(1,3),e=a.substring(3,5),f=a.substring(5,7)),d=parseInt(d,16),e=parseInt(e,16),f=parseInt(f,16)),b(d,e,f))}function V(a,b,c){var d=Math.min(a/=255,b/=255,c/=255),e=Math.max(a,b,c),f=e-d,g,h,i=(e+d)/2;return f?(h=i<.5?f/(e+d):f/(2-e-d),a==e?g=(b-c)/f+(b<c?6:0):b==e?g=(c-a)/f+2:g=(a-b)/f+4,g*=60):h=g=0,Z(g,h,i)}function W(a){var b=parseFloat(a);return a.charAt(a.length-1)==="%"?Math.round(b*2.55):b}function Z(a,b,c){return new $(a,b,c)}function $(a,b,c){this.h=a,this.s=b,this.l=c}function _(a,b,c){function f(a){return a>360?a-=360:a<0&&(a+=360),a<60?d+(e-d)*a/60:a<180?e:a<240?d+(e-d)*(240-a)/60:d}function g(a){return Math.round(f(a)*255)}var d,e;return a%=360,a<0&&(a+=360),b=b<0?0:b>1?1:b,c=c<0?0:c>1?1:c,e=c<=.5?c*(1+b):c+b-c*b,d=2*c-e,R(g(a+120),g(a),g(a-120))}function ba(a){return h(a,bd),a}function be(a){return function(){return bb(a,this)}}function bf(a){return function(){return bc(a,this)}}function bh(a,b){function f(){if(b=this.classList)return b.add(a);var b=this.className,d=b.baseVal!=null,e=d?b.baseVal:b;c.lastIndex=0,c.test(e)||(e=m(e+" "+a),d?b.baseVal=e:this.className=e)}function g(){if(b=this.classList)return b.remove(a);var b=this.className,d=b.baseVal!=null,e=d?b.baseVal:b;e=m(e.replace(c," ")),d?b.baseVal=e:this.className=e}function h(){(b.apply(this,arguments)?f:g).call(this)}var c=new RegExp("(^|\\s+)"+d3.requote(a)+"(\\s+|$)","g");if(arguments.length<2){var d=this.node();if(e=d.classList)return e.contains(a);var e=d.className;return c.lastIndex=0,c.test(e.baseVal!=null?e.baseVal:e)}return this.each(typeof b=="function"?h:b?f:g)}function bi(a){return{__data__:a}}function bj(a){return arguments.length||(a=d3.ascending),function(b,c){return a(b&&b.__data__,c&&c.__data__)}}function bl(a){return h(a,bm),a}function bn(a,b,c){h(a,br);var d={},e=d3.dispatch("start","end"),f=bu;return a.id=b,a.time=c,a.tween=function(b,c){return arguments.length<2?d[b]:(c==null?delete d[b]:d[b]=c,a)},a.ease=function(b){return arguments.length?(f=typeof b=="function"?b:d3.ease.apply(d3,arguments),a):f},a.each=function(b,c){return arguments.length<2?bv.call(a,b):(e.on(b,c),a)},d3.timer(function(g){return a.each(function(h,i,j){function p(a){if(o.active>b)return r();o.active=b;for(var f in d)(f=d[f].call(l,h,i))&&k.push(f);return e.start.call(l,h,i),q(a)||d3.timer(q,0,c),1}function q(a){if(o.active!==b)return r();var c=(a-m)/n,d=f(c),g=k.length;while(g>0)k[--g].call(l,d);if(c>=1)return r(),bt=b,e.end.call(l,h,i),bt=0,1}function r(){return--o.count||delete l.__transition__,1}var k=[],l=this,m=a[j][i].delay,n=a[j][i].duration,o=l.__transition__||(l.__transition__={active:0,count:0});++o.count,m<=g?p(g):d3.timer(p,m,c)}),1},0,c),a}function bp(a,b,c){return c!=""&&bo}function bq(a,b){function d(a,d,e){var f=b.call(this,a,d);return f==null?e!=""&&bo:e!=f&&c(e,f)}function e(a,d,e){return e!=b&&c(e,b)}var c=O(a);return typeof b=="function"?d:b==null?bp:(b+="",e)}function bv(a){for(var b=0,c=this.length;b<c;b++)for(var d=this[b],e=0,f=d.length;e<f;e++){var g=d[e];g&&a.call(g=g.node,g.__data__,e,b)}return this}function bz(){var a,b=Date.now(),c=bw;while(c)a=b-c.then,a>=c.delay&&(c.flush=c.callback(a)),c=c.next;var d=bA()-b;d>24?(isFinite(d)&&(clearTimeout(by),by=setTimeout(bz,d)),bx=0):(bx=1,bB(bz))}function bA(){var a=null,b=bw,c=Infinity;while(b)b.flush?b=a?a.next=b.next:bw=b.next:(c=Math.min(c,b.then+b.delay),b=(a=b).next);return c}function bC(a){var b=[a.a,a.b],c=[a.c,a.d],d=bE(b),e=bD(b,c),f=bE(bF(c,b,-e));this.translate=[a.e,a.f],this.rotate=Math.atan2(a.b,a.a)*bH,this.scale=[d,f||0],this.skew=f?e/f*bH:0}function bD(a,b){return a[0]*b[0]+a[1]*b[1]}function bE(a){var b=Math.sqrt(bD(a,a));return a[0]/=b,a[1]/=b,b}function bF(a,b,c){return a[0]+=c*b[0],a[1]+=c*b[1],a}function bI(){}function bJ(a){var b=a[0],c=a[a.length-1];return b<c?[b,c]:[c,b]}function bK(a,b){var c=0,d=a.length-1,e=a[c],f=a[d],g;f<e&&(g=c,c=d,d=g,g=e,e=f,f=g);if(g=f-e)b=b(g),a[c]=b.floor(e),a[d]=b.ceil(f);return a}function bL(){return Math}function bM(a,b,c,d){function g(){var g=a.length==2?bS:bT,i=d?Q:P;return e=g(a,b,i,c),f=g(b,a,i,d3.interpolate),h}function h(a){return e(a)}var e,f;return h.invert=function(a){return f(a)},h.domain=function(b){return arguments.length?(a=b.map(Number),g()):a},h.range=function(a){return arguments.length?(b=a,g()):b},h.rangeRound=function(a){return h.range(a).interpolate(d3.interpolateRound)},h.clamp=function(a){return arguments.length?(d=a,g()):d},h.interpolate=function(a){return arguments.length?(c=a,g()):c},h.ticks=function(b){return bQ(a,b)},h.tickFormat=function(b){return bR(a,b)},h.nice=function(){return bK(a,bO),g()},h.copy=function(){return bM(a,b,c,d)},g()}function bN(a,b){return a.range=d3.rebind(a,b.range),a.rangeRound=d3.rebind(a,b.rangeRound),a.interpolate=d3.rebind(a,b.interpolate),a.clamp=d3.rebind(a,b.clamp),a}function bO(a){return a=Math.pow(10,Math.round(Math.log(a)/Math.LN10)-1),{floor:function(b){return Math.floor(b/a)*a},ceil:function(b){return Math.ceil(b/a)*a}}}function bP(a,b){var c=bJ(a),d=c[1]-c[0],e=Math.pow(10,Math.floor(Math.log(d/b)/Math.LN10)),f=b/d*e;return f<=.15?e*=10:f<=.35?e*=5:f<=.75&&(e*=2),c[0]=Math.ceil(c[0]/e)*e,c[1]=Math.floor(c[1]/e)*e+e*.5,c[2]=e,c}function bQ(a,b){return d3.range.apply(d3,bP(a,b))}function bR(a,b){return d3.format(",."+Math.max(0,-Math.floor(Math.log(bP(a,b)[2])/Math.LN10+.01))+"f")}function bS(a,b,c,d){var e=c(a[0],a[1]),f=d(b[0],b[1]);return function(a){return f(e(a))}}function bT(a,b,c,d){var e=[],f=[],g=0,h=a.length;while(++g<h)e.push(c(a[g-1],a[g])),f.push(d(b[g-1],b[g]));return function(b){var c=d3.bisect(a,b,1,a.length-1)-1;return f[c](e[c](b))}}function bU(a,b){function d(c){return a(b(c))}var c=b.pow;return d.invert=function(b){return c(a.invert(b))},d.domain=function(e){return arguments.length?(b=e[0]<0?bX:bW,c=b.pow,a.domain(e.map(b)),d):a.domain().map(c)},d.nice=function(){return a.domain(bK(a.domain(),bL)),d},d.ticks=function(){var d=bJ(a.domain()),e=[];if(d.every(isFinite)){var f=Math.floor(d[0]),g=Math.ceil(d[1]),h=Math.round(c(d[0])),i=Math.round(c(d[1]));if(b===bX){e.push(c(f));for(;f++<g;)for(var j=9;j>0;j--)e.push(c(f)*j)}else{for(;f<g;f++)for(var j=1;j<10;j++)e.push(c(f)*j);e.push(c(f))}for(f=0;e[f]<h;f++);for(g=e.length;e[g-1]>i;g--);e=e.slice(f,g)}return e},d.tickFormat=function(a,e){arguments.length<2&&(e=bV);if(arguments.length<1)return e;var f=a/d.ticks().length,g=b===bX?(h=-1e-15,Math.floor):(h=1e-15,Math.ceil),h;return function(a){return a/c(g(b(a)+h))<f?e(a):""}},d.copy=function(){return bU(a.copy(),b)},bN(d,a)}function bW(a){return Math.log(a)/Math.LN10}function bX(a){return-Math.log(-a)/Math.LN10}function bY(a,b){function e(b){return a(c(b))}var c=bZ(b),d=bZ(1/b);return e.invert=function(b){return d(a.invert(b))},e.domain=function(b){return arguments.length?(a.domain(b.map(c)),e):a.domain().map(d)},e.ticks=function(a){return bQ(e.domain(),a)},e.tickFormat=function(a){return bR(e.domain(),a)},e.nice=function(){return e.domain(bK(e.domain(),bO))},e.exponent=function(a){if(!arguments.length)return b;var f=e.domain();return c=bZ(b=a),d=bZ(1/b),e.domain(f)},e.copy=function(){return bY(a.copy(),b)},bN(e,a)}function bZ(a){return function(b){return b<0?-Math.pow(-b,a):Math.pow(b,a)}}function b$(a,b){function f(b){return d[((c[b]||(c[b]=a.push(b)))-1)%d.length]}function g(b,c){return d3.range(a.length).map(function(a){return b+c*a})}var c,d,e;return f.domain=function(d){if(!arguments.length)return a;a=[],c={};var e=-1,g=d.length,h;while(++e<g)c[h=d[e]]||(c[h]=a.push(h));return f[b.t](b.x,b.p)},f.range=function(a){return arguments.length?(d=a,e=0,b={t:"range",x:a},f):d},f.rangePoints=function(c,h){arguments.length<2&&(h=0);var i=c[0],j=c[1],k=(j-i)/(a.length-1+h);return d=g(a.length<2?(i+j)/2:i+k*h/2,k),e=0,b={t:"rangePoints",x:c,p:h},f},f.rangeBands=function(c,h){arguments.length<2&&(h=0);var i=c[0],j=c[1],k=(j-i)/(a.length+h);return d=g(i+k*h,k),e=k*(1-h),b={t:"rangeBands",x:c,p:h},f},f.rangeRoundBands=function(c,h){arguments.length<2&&(h=0);var i=c[0],j=c[1],k=Math.floor((j-i)/(a.length+h));return d=g(i+Math.round((j-i-(a.length-h)*k)/2),k),e=Math.round(k*(1-h)),b={t:"rangeRoundBands",x:c,p:h},f},f.rangeBand=function(){return e},f.copy=function(){return b$(a,b)},f.domain(a)}function cd(a,b){function d(){var d=0,f=a.length,g=b.length;c=[];while(++d<g)c[d-1]=d3.quantile(a,d/g);return e}function e(a){return isNaN(a=+a)?NaN:b[d3.bisect(c,a)]}var c;return e.domain=function(b){return arguments.length?(a=b.filter(function(a){return!isNaN(a)}).sort(d3.ascending),d()):a},e.range=function(a){return arguments.length?(b=a,d()):b},e.quantiles=function(){return c},e.copy=function(){return cd(a,b)},d()}function ce(a,b,c){function f(b){return c[Math.max(0,Math.min(e,Math.floor(d*(b-a))))]}function g(){return d=c.length/(b-a),e=c.length-1,f}var d,e;return f.domain=function(c){return arguments.length?(a=+c[0],b=+c[c.length-1],g()):[a,b]},f.range=function(a){return arguments.length?(c=a,g()):c},f.copy=function(){return ce(a,b,c)},g()}function ch(a){return a.innerRadius}function ci(a){return a.outerRadius}function cj(a){return a.startAngle}function ck(a){return a.endAngle}function cl(a){function g(d){return d.length<1?null:"M"+e(a(cm(this,d,b,c)),f)}var b=cn,c=co,d="linear",e=cp[d],f=.7;return g.x=function(a){return arguments.length?(b=a,g):b},g.y=function(a){return arguments.length?(c=a,g):c},g.interpolate=function(a){return arguments.length?(e=cp[d=a],g):d},g.tension=function(a){return arguments.length?(f=a,g):f},g}function cm(a,b,c,d){var e=[],f=-1,g=b.length,h=typeof c=="function",i=typeof d=="function",j;if(h&&i)while(++f<g)e.push([c.call(a,j=b[f],f),d.call(a,j,f)]);else if(h)while(++f<g)e.push([c.call(a,b[f],f),d]);else if(i)while(++f<g)e.push([c,d.call(a,b[f],f)]);else while(++f<g)e.push([c,d]);return e}function cn(a){return a[0]}function co(a){return a[1]}function cq(a){var b=0,c=a.length,d=a[0],e=[d[0],",",d[1]];while(++b<c)e.push("L",(d=a[b])[0],",",d[1]);return e.join("")}function cr(a){var b=0,c=a.length,d=a[0],e=[d[0],",",d[1]];while(++b<c)e.push("V",(d=a[b])[1],"H",d[0]);return e.join("")}function cs(a){var b=0,c=a.length,d=a[0],e=[d[0],",",d[1]];while(++b<c)e.push("H",(d=a[b])[0],"V",d[1]);return e.join("")}function ct(a,b){return a.length<4?cq(a):a[1]+cw(a.slice(1,a.length-1),cx(a,b))}function cu(a,b){return a.length<3?cq(a):a[0]+cw((a.push(a[0]),a),cx([a[a.length-2]].concat(a,[a[1]]),b))}function cv(a,b,c){return a.length<3?cq(a):a[0]+cw(a,cx(a,b))}function cw(a,b){if(b.length<1||a.length!=b.length&&a.length!=b.length+2)return cq(a);var c=a.length!=b.length,d="",e=a[0],f=a[1],g=b[0],h=g,i=1;c&&(d+="Q"+(f[0]-g[0]*2/3)+","+(f[1]-g[1]*2/3)+","+f[0]+","+f[1],e=a[1],i=2);if(b.length>1){h=b[1],f=a[i],i++,d+="C"+(e[0]+g[0])+","+(e[1]+g[1])+","+(f[0]-h[0])+","+(f[1]-h[1])+","+f[0]+","+f[1];for(var j=2;j<b.length;j++,i++)f=a[i],h=b[j],d+="S"+(f[0]-h[0])+","+(f[1]-h[1])+","+f[0]+","+f[1]}if(c){var k=a[i];d+="Q"+(f[0]+h[0]*2/3)+","+(f[1]+h[1]*2/3)+","+k[0]+","+k[1]}return d}function cx(a,b){var c=[],d=(1-b)/2,e,f=a[0],g=a[1],h=1,i=a.length;while(++h<i)e=f,f=g,g=a[h],c.push([d*(g[0]-e[0]),d*(g[1]-e[1])]);return c}function cy(a){if(a.length<3)return cq(a);var b=1,c=a.length,d=a[0],e=d[0],f=d[1],g=[e,e,e,(d=a[1])[0]],h=[f,f,f,d[1]],i=[e,",",f];cG(i,g,h);while(++b<c)d=a[b],g.shift(),g.push(d[0]),h.shift(),h.push(d[1]),cG(i,g,h);b=-1;while(++b<2)g.shift(),g.push(d[0]),h.shift(),h.push(d[1]),cG(i,g,h);return i.join("")}function cz(a){if(a.length<4)return cq(a);var b=[],c=-1,d=a.length,e,f=[0],g=[0];while(++c<3)e=a[c],f.push(e[0]),g.push(e[1]);b.push(cC(cF,f)+","+cC(cF,g)),--c;while(++c<d)e=a[c],f.shift(),f.push(e[0]),g.shift(),g.push(e[1]),cG(b,f,g);return b.join("")}function cA(a){var b,c=-1,d=a.length,e=d+4,f,g=[],h=[];while(++c<4)f=a[c%d],g.push(f[0]),h.push(f[1]);b=[cC(cF,g),",",cC(cF,h)],--c;while(++c<e)f=a[c%d],g.shift(),g.push(f[0]),h.shift(),h.push(f[1]),cG(b,g,h);return b.join("")}function cB(a,b){var c=a.length-1,d=a[0][0],e=a[0][1],f=a[c][0]-d,g=a[c][1]-e,h=-1,i,j;while(++h<=c)i=a[h],j=h/c,i[0]=b*i[0]+(1-b)*(d+j*f),i[1]=b*i[1]+(1-b)*(e+j*g);return cy(a)}function cC(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]}function cG(a,b,c){a.push("C",cC(cD,b),",",cC(cD,c),",",cC(cE,b),",",cC(cE,c),",",cC(cF,b),",",cC(cF,c))}function cH(a,b){return(b[1]-a[1])/(b[0]-a[0])}function cI(a){var b=0,c=a.length-1,d=[],e=a[0],f=a[1],g=d[0]=cH(e,f);while(++b<c)d[b]=g+(g=cH(e=f,f=a[b+1]));return d[b]=g,d}function cJ(a){var b=[],c,d,e,f,g=cI(a),h=-1,i=a.length-1;while(++h<i)c=cH(a[h],a[h+1]),Math.abs(c)<1e-6?g[h]=g[h+1]=0:(d=g[h]/c,e=g[h+1]/c,f=d*d+e*e,f>9&&(f=c*3/Math.sqrt(f),g[h]=f*d,g[h+1]=f*e));h=-1;while(++h<=i)f=(a[Math.min(i,h+1)][0]-a[Math.max(0,h-1)][0])/(6*(1+g[h]*g[h])),b.push([f||0,g[h]*f||0]);return b}function cK(a){return a.length<3?cq(a):a[0]+cw(a,cJ(a))}function cL(a){var b,c=-1,d=a.length,e,f;while(++c<d)b=a[c],e=b[0],f=b[1]+cf,b[0]=e*Math.cos(f),b[1]=e*Math.sin(f);return a}function cM(a){function j(f){if(f.length<1)return null;var j=cm(this,f,b,d),k=cm(this,f,b===c?cN(j):c,d===e?cO(j):e);return"M"+g(a(k),i)+"L"+h(a(j.reverse()),i)+"Z"}var b=cn,c=cn,d=0,e=co,f,g,h,i=.7;return j.x=function(a){return arguments.length?(b=c=a,j):c},j.x0=function(a){return arguments.length?(b=a,j):b},j.x1=function(a){return arguments.length?(c=a,j):c},j.y=function(a){return arguments.length?(d=e=a,j):e},j.y0=function(a){return arguments.length?(d=a,j):d},j.y1=function(a){return arguments.length?(e=a,j):e},j.interpolate=function(a){return arguments.length?(g=cp[f=a],h=g.reverse||g,j):f},j.tension=function(a){return arguments.length?(i=a,j):i},j.interpolate("linear")}function cN(a){return function(b,c){return a[c][0]}}function cO(a){return function(b,c){return a[c][1]}}function cP(a){return a.source}function cQ(a){return a.target}function cR(a){return a.radius}function cS(a){return a.startAngle}function cT(a){return a.endAngle}function cU(a){return[a.x,a.y]}function cV(a){return function(){var b=a.apply(this,arguments),c=b[0],d=b[1]+cf;return[c*Math.cos(d),c*Math.sin(d)]}}function cX(a,b){var c=(a.ownerSVGElement||a).createSVGPoint();if(cW<0&&(window.scrollX||window.scrollY)){var d=d3.select(document.body).append("svg:svg").style("position","absolute").style("top",0).style("left",0),e=d[0][0].getScreenCTM();cW=!e.f&&!e.e,d.remove()}return cW?(c.x=b.pageX,c.y=b.pageY):(c.x=b.clientX,c.y=b.clientY),c=c.matrixTransform(a.getScreenCTM().inverse()),[c.x,c.y]}function cY(){return 64}function cZ(){return"circle"}function db(a,b){a.attr("transform",function(a){return"translate("+b(a)+",0)"})}function dc(a,b){a.attr("transform",function(a){return"translate(0,"+b(a)+")"})}function dd(a,b,c){e=[];if(c&&b.length>1){var d=bJ(a.domain()),e,f=-1,g=b.length,h=(b[1]-b[0])/++c,i,j;while(++f<g)for(i=c;--i>0;)(j=+b[f]-i*h)>=d[0]&&e.push(j);for(--f,i=0;++i<c&&(j=+b[f]+i*h)<d[1];)e.push(j)}return e}function dp(a,b){a.select(".extent").attr("x",b[0][0]),a.selectAll(".n,.s,.w,.nw,.sw").attr("x",b[0][0]-2),a.selectAll(".e,.ne,.se").attr("x",b[1][0]-3),a.selectAll(".extent,.n,.s").attr("width",b[1][0]-b[0][0])}function dq(a,b){a.select(".extent").attr("y",b[0][1]),a.selectAll(".n,.e,.w,.nw,.ne").attr("y",b[0][1]-3),a.selectAll(".s,.se,.sw").attr("y",b[1][1]-4),a.selectAll(".extent,.e,.w").attr("height",b[1][1]-b[0][1])}function dr(){d3.event.keyCode==32&&dg&&!dk&&(dm=null,dn[0]-=dj[1][0],dn[1]-=dj[1][1],dk=2,M())}function ds(){d3.event.keyCode==32&&dk==2&&(dn[0]+=dj[1][0],dn[1]+=dj[1][1],dk=0,M())}function dt(){if(dn){var a=d3.svg.mouse(dg),b=d3.select(dg);dk||(d3.event.altKey?(dm||(dm=[(dj[0][0]+dj[1][0])/2,(dj[0][1]+dj[1][1])/2]),dn[0]=dj[+(a[0]<dm[0])][0],dn[1]=dj[+(a[1]<dm[1])][1]):dm=null),dh&&(du(a,dh,0),dp(b,dj)),di&&(du(a,di,1),dq(b,dj)),df("brush")}}function du(a,b,c){var d=bJ(b.range()),e=dn[c],f=dj[1][c]-dj[0][c],g,h;dk&&(d[0]-=e,d[1]-=f+e),g=Math.max(d[0],Math.min(d[1],a[c])),dk?h=(g+=e)+f:(dm&&(e=Math.max(d[0],Math.min(d[1],2*dm[c]-g))),e<g?(h=g,g=e):h=e),dj[0][c]=g,dj[1][c]=h}function dv(){dn&&(dt(),d3.select(dg).selectAll(".resize").style("pointer-events",de.empty()?"none":"all"),df("brushend"),de=df=dg=dh=di=dj=dk=dl=dm=dn=null,M())}function dE(a){var b=d3.event,c=dz.parentNode,d=0,e=0;c&&(c=dF(c),d=c[0]-dB[0],e=c[1]-dB[1],dB=c,dC|=d|e);try{d3.event={dx:d,dy:e},dx[a].apply(dz,dA)}finally{d3.event=b}b.preventDefault()}function dF(a,b){var c=d3.event.changedTouches;return c?d3.svg.touches(a,c)[0]:d3.svg.mouse(a)}function dG(){if(!dz)return;var a=dz.parentNode;if(!a)return dH();dE("drag"),M()}function dH(){if(!dz)return;dE("dragend"),dz=null,dC&&dy===d3.event.target&&(dD=!0,M())}function dI(){dD&&dy===d3.event.target&&(M(),dD=!1,dy=null)}function dW(a){return[a[0]-dO[0],a[1]-dO[1],dO[2]]}function dX(){dJ||(dJ=d3.select("body").append("div").style("visibility","hidden").style("top",0).style("height",0).style("width",0).style("overflow-y","scroll").append("div").style("height","2000px").node().parentNode);var a=d3.event,b;try{dJ.scrollTop=1e3,dJ.dispatchEvent(a),b=1e3-dJ.scrollTop}catch(c){b=a.wheelDelta||-a.detail*5}return b*.005}function dY(){var a=d3.svg.touches(dS),b=-1,c=a.length,d;while(++b<c)dM[(d=a[b]).identifier]=dW(d);return a}function dZ(){var a=d3.svg.touches(dS);switch(a.length){case 1:var b=a[0];eb(dO[2],b,dM[b.identifier]);break;case 2:var c=a[0],d=a[1],e=[(c[0]+d[0])/2,(c[1]+d[1])/2],f=dM[c.identifier],g=dM[d.identifier],h=[(f[0]+g[0])/2,(f[1]+g[1])/2,f[2]];eb(Math.log(d3.event.scale)/Math.LN2+f[2],e,h)}}function d$(){dL=null,dK&&(dU=!0,eb(dO[2],d3.svg.mouse(dS),dK))}function d_(){dK&&(dU&&dR===d3.event.target&&(dV=!0),d$(),dK=null)}function ea(){dV&&dR===d3.event.target&&(d3.event.stopPropagation(),d3.event.preventDefault(),dV=!1,dR=null)}function eb(a,b,c){function l(a,b,c){a.domain(a.range().map(function(f){return a.invert((f-c)*d/e+b)}))}a=ed(a,2);var d=Math.pow(2,dO[2]),e=Math.pow(2,a),f=Math.pow(2,(dO[2]=a)-c[2]),g=dO[0],h=dO[1],i=dO[0]=ed(b[0]-c[0]*f,0,e),j=dO[1]=ed(b[1]-c[1]*f,1,e),k=d3.event;d3.event={scale:e,translate:[i,j],transform:function(a,b){a&&l(a,g,i),b&&l(b,h,j)}};try{dQ.apply(dS,dT)}finally{d3.event=k}k.preventDefault()}function ed(a,b,c){var d=dP[b],e=d[0],f=d[1];return arguments.length===3?Math.max(f*(f===Infinity?-Infinity:1/c-1),Math.min(e===-Infinity?Infinity:e,a/c))*c:Math.max(e,Math.min(f,a))}Date.now||(Date.now=function(){return+(new Date)});try{document.createElement("div").style.setProperty("opacity",0,"")}catch(a){var b=CSSStyleDeclaration.prototype,c=b.setProperty;b.setProperty=function(a,b,d){c.call(this,a,b+"",d)}}d3={version:"2.5.0"};var d=f;try{d(document.documentElement.childNodes)[0].nodeType}catch(g){d=e}var h=[].__proto__?function(a,b){a.__proto__=b}:function(a,b){for(var c in b)a[c]=b[c]};d3.functor=function(a){return typeof a=="function"?a:function(){return a}},d3.rebind=function(a,b){return function(){var c=b.apply(a,arguments);return arguments.length?a:c}},d3.ascending=function(a,b){return a<b?-1:a>b?1:a>=b?0:NaN},d3.descending=function(a,b){return b<a?-1:b>a?1:b>=a?0:NaN},d3.mean=function(a,b){var c=a.length,d,e=0,f=-1,g=0;if(arguments.length===1)while(++f<c)j(d=a[f])&&(e+=(d-e)/++g);else while(++f<c)j(d=b.call(a,a[f],f))&&(e+=(d-e)/++g);return g?e:undefined},d3.median=function(a,b){return arguments.length>1&&(a=a.map(b)),a=a.filter(j),a.length?d3.quantile(a.sort(d3.ascending),.5):undefined},d3.min=function(a,b){var c=-1,d=a.length,e,f;if(arguments.length===1){while(++c<d&&((e=a[c])==null||e!=e))e=undefined;while(++c<d)(f=a[c])!=null&&e>f&&(e=f)}else{while(++c<d&&((e=b.call(a,a[c],c))==null||e!=e))e=undefined;while(++c<d)(f=b.call(a,a[c],c))!=null&&e>f&&(e=f)}return e},d3.max=function(a,b){var c=-1,d=a.length,e,f;if(arguments.length===1){while(++c<d&&((e=a[c])==null||e!=e))e=undefined;while(++c<d)(f=a[c])!=null&&f>e&&(e=f)}else{while(++c<d&&((e=b.call(a,a[c],c))==null||e!=e))e=undefined;while(++c<d)(f=b.call(a,a[c],c))!=null&&f>e&&(e=f)}return e},d3.extent=function(a,b){var c=-1,d=a.length,e,f,g;if(arguments.length===1){while(++c<d&&((e=g=a[c])==null||e!=e))e=g=undefined;while(++c<d)(f=a[c])!=null&&(e>f&&(e=f),g<f&&(g=f))}else{while(++c<d&&((e=g=b.call(a,a[c],c))==null||e!=e))e=undefined;while(++c<d)(f=b.call(a,a[c],c))!=null&&(e>f&&(e=f),g<f&&(g=f))}return[e,g]},d3.random={normal:function(a,b){return arguments.length<2&&(b=1),arguments.length<1&&(a=0),function(){var c,d,e;do c=Math.random()*2-1,d=Math.random()*2-1,e=c*c+d*d;while(!e||e>1);return a+b*c*Math.sqrt(-2*Math.log(e)/e)}}},d3.sum=function(a,b){var c=0,d=a.length,e,f=-1;if(arguments.length===1)while(++f<d)isNaN(e=+a[f])||(c+=e);else while(++f<d)isNaN(e=+b.call(a,a[f],f))||(c+=e);return c},d3.quantile=function(a,b){var c=(a.length-1)*b+1,d=Math.floor(c),e=a[d-1],f=c-d;return f?e+f*(a[d]-e):e},d3.zip=function(){if(!(e=arguments.length))return[];for(var a=-1,b=d3.min(arguments,k),c=new Array(b);++a<b;)for(var d=-1,e,f=c[a]=new Array(e);++d<e;)f[d]=arguments[d][a];return c},d3.bisectLeft=function(a,b,c,d){arguments.length<3&&(c=0),arguments.length<4&&(d=a.length);while(c<d){var e=c+d>>1;a[e]<b?c=e+1:d=e}return c},d3.bisect=d3.bisectRight=function(a,b,c,d){arguments.length<3&&(c=0),arguments.length<4&&(d=a.length);while(c<d){var e=c+d>>1;b<a[e]?d=e:c=e+1}return c},d3.first=function(a,b){var c=0,d=a.length,e=a[0],f;arguments.length===1&&(b=d3.ascending);while(++c<d)b.call(a,e,f=a[c])>0&&(e=f);return e},d3.last=function(a,b){var c=0,d=a.length,e=a[0],f;arguments.length===1&&(b=d3.ascending);while(++c<d)b.call(a,e,f=a[c])<=0&&(e=f);return e},d3.nest=function(){function f(c,g){if(g>=b.length)return e?e.call(a,c):d?c.sort(d):c;var h=-1,i=c.length,j=b[g++],k,l,m={};while(++h<i)(k=j(l=c[h]))in m?m[k].push(l):m[k]=[l];for(k in m)m[k]=f(m[k],g);return m}function g(a,d){if(d>=b.length)return a;var e=[],f=c[d++],h;for(h in a)e.push({key:h,values:g(a[h],d)});return f&&e.sort(function(a,b){return f(a.key,b.key)}),e}var a={},b=[],c=[],d,e;return a.map=function(a){return f(a,0)},a.entries=function(a){return g(f(a,0),0)},a.key=function(c){return b.push(c),a},a.sortKeys=function(d){return c[b.length-1]=d,a},a.sortValues=function(b){return d=b,a},a.rollup=function(b){return e=b,a},a},d3.keys=function(a){var b=[];for(var c in a)b.push(c);return b},d3.values=function(a){var b=[];for(var c in a)b.push(a[c]);return b},d3.entries=function(a){var b=[];for(var c in a)b.push({key:c,value:a[c]});return b},d3.permute=function(a,b){var c=[],d=-1,e=b.length;while(++d<e)c[d]=a[b[d]];return c},d3.merge=function(a){return Array.prototype.concat.apply([],a)},d3.split=function(a,b){var c=[],d=[],e,f=-1,g=a.length;arguments.length<2&&(b=l);while(++f<g)b.call(d,e=a[f],f)?d=[]:(d.length||c.push(d),d.push(e));return c},d3.range=function(a,b,c){arguments.length<3&&(c=1,arguments.length<2&&(b=a,a=0));if((b-a)/c==Infinity)throw new Error("infinite range");var d=[],e=-1,f;if(c<0)while((f=a+c*++e)>b)d.push(f);else while((f=a+c*++e)<b)d.push(f);return d},d3.requote=function(a){return a.replace(n,"\\$&")};var n=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;d3.round=function(a,b){return b?Math.round(a*Math.pow(10,b))*Math.pow(10,-b):Math.round(a)},d3.xhr=function(a,b,c){var d=new XMLHttpRequest;arguments.length<3?c=b:b&&d.overrideMimeType&&d.overrideMimeType(b),d.open("GET",a,!0),d.onreadystatechange=function(){d.readyState===4&&c(d.status<300?d:null)},d.send(null)},d3.text=function(a,b,c){function d(a){c(a&&a.responseText)}arguments.length<3&&(c=b,b=null),d3.xhr(a,b,d)},d3.json=function(a,b){d3.text(a,"application/json",function(a){b(a?JSON.parse(a):null)})},d3.html=function(a,b){d3.text(a,"text/html",function(a){if(a!=null){var c=document.createRange();c.selectNode(document.body),a=c.createContextualFragment(a)}b(a)})},d3.xml=function(a,b,c){function d(a){c(a&&a.responseXML)}arguments.length<3&&(c=b,b=null),d3.xhr(a,b,d)},d3.ns={prefix:{svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},qualify:function(a){var b=a.indexOf(":");return b<0?a:{space:d3.ns.prefix[a.substring(0,b)],local:a.substring(b+1)}}},d3.dispatch=function(){var a=new o,b=-1,c=arguments.length;while(++b<c)a[arguments[b]]=p();return a},o.prototype.on=function(a,b){var c=a.indexOf("."),d="";c>0&&(d=a.substring(c+1),a=a.substring(0,c)),this[a].on(d,b)},d3.format=function(a){var b=q.exec(a),c=b[1]||" ",d=b[3]||"",e=b[5],f=+b[6],g=b[7],h=b[8],i=b[9],j=1,k="",l=!1;h&&(h=+h.substring(1)),e&&(c="0",g&&(f-=Math.floor((f-1)/4)));switch(i){case"n":g=!0,i="g";break;case"%":j=100,k="%",i="f";break;case"p":j=100,k="%",i="r";break;case"d":l=!0,h=0;break;case"s":j=-1,i="r"}return i=="r"&&!h&&(i="g"),i=r[i]||t,function(a){if(l&&a%1)return"";var b=a<0&&(a=-a)?"−":d;if(j<0){var m=d3.formatPrefix(a,h);a*=m.scale,k=m.symbol}else a*=j;a=i(a,h);if(e){var n=a.length+b.length;n<f&&(a=(new Array(f-n+1)).join(c)+a),g&&(a=u(a)),a=b+a}else{g&&(a=u(a)),a=b+a;var n=a.length;n<f&&(a=(new Array(f-n+1)).join(c)+a)}return a+k}};var q=/(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/,r={g:function(a,b){return a.toPrecision(b)},e:function(a,b){return a.toExponential(b)},f:function(a,b){return a.toFixed(b)},r:function(a,b){return d3.round(a,b=s(a,b)).toFixed(Math.max(0,Math.min(20,b)))}},v=["y","z","a","f","p","n","μ","m","","k","M","G","T","P","E","Z","Y"].map(w);d3.formatPrefix=function(a,b){var c=0;return a&&(a<0&&(a*=-1),b&&(a=d3.round(a,s(a,b))),c=1+Math.floor(1e-12+Math.log(a)/Math.LN10),c=Math.max(-24,Math.min(24,Math.floor((c<=0?c+1:c-1)/3)*3))),v[8+c/3]};var x=F(2),y=F(3),z={linear:function(){return E},poly:F,quad:function(){return x},cubic:function(){return y},sin:function(){return G},exp:function(){return H},circle:function(){return I},elastic:J,back:K,bounce:function(){return L}},A={"in":function(a){return a},out:C,"in-out":D,"out-in":function(a){return D(C(a))}};d3.ease=function(a){var b=a.indexOf("-"),c=b>=0?a.substring(0,b):a,d=b>=0?a.substring(b+1):"in";return B(A[d](z[c].apply(null,Array.prototype.slice.call(arguments,1))))},d3.event=null,d3.interpolate=function(a,b){var c=d3.interpolators.length,d;while(--c>=0&&!(d=d3.interpolators[c](a,b)));return d},d3.interpolateNumber=function(a,b){return b-=a,function(c){return a+b*c}},d3.interpolateRound=function(a,b){return b-=a,function(c){return Math.round(a+b*c)}},d3.interpolateString=function(a,b){var c,d,e,f=0,g=0,h=[],i=[],j,k;N.lastIndex=0;for(d=0;c=N.exec(b);++d)c.index&&h.push(b.substring(f,g=c.index)),i.push({i:h.length,x:c[0]}),h.push(null),f=N.lastIndex;f<b.length&&h.push(b.substring(f));for(d=0,j=i.length;(c=N.exec(a))&&d<j;++d){k=i[d];if(k.x==c[0]){if(k.i)if(h[k.i+1]==null){h[k.i-1]+=k.x,h.splice(k.i,1);for(e=d+1;e<j;++e)i[e].i--}else{h[k.i-1]+=k.x+h[k.i+1],h.splice(k.i,2);for(e=d+1;e<j;++e)i[e].i-=2}else if(h[k.i+1]==null)h[k.i]=k.x;else{h[k.i]=k.x+h[k.i+1],h.splice(k.i+1,1);for(e=d+1;e<j;++e)i[e].i--}i.splice(d,1),j--,d--}else k.x=d3.interpolateNumber(parseFloat(c[0]),parseFloat(k.x))}while(d<j)k=i.pop(),h[k.i+1]==null?h[k.i]=k.x:(h[k.i]=k.x+h[k.i+1],h.splice(k.i+1,1)),j--;return h.length===1?h[0]==null?i[0].x:function(){return b}:function(a){for(d=0;d<j;++d)h[(k=i[d]).i]=k.x(a);return h.join("")}},d3.interpolateTransform=function(a,b){return d3.interpolateString(d3.transform(a)+"",d3.transform(b)+"")},d3.interpolateRgb=function(a,b){a=d3.rgb(a),b=d3.rgb(b);var c=a.r,d=a.g,e=a.b,f=b.r-c,g=b.g-d,h=b.b-e;return function(a){return"#"+T(Math.round(c+f*a))+T(Math.round(d+g*a))+T(Math.round(e+h*a))}},d3.interpolateHsl=function(a,b){a=d3.hsl(a),b=d3.hsl(b);var c=a.h,d=a.s,e=a.l,f=b.h-c,g=b.s-d,h=b.l-e;return function(a){return _(c+f*a,d+g*a,e+h*a).toString()}},d3.interpolateArray=function(a,b){var c=[],d=[],e=a.length,f=b.length,g=Math.min(a.length,b.length),h;for(h=0;h<g;++h)c.push(d3.interpolate(a[h],b[h]));for(;h<e;++h)d[h]=a[h];for(;h<f;++h)d[h]=b[h];return function(a){for(h=0;h<g;++h)d[h]=c[h](a);return d}},d3.interpolateObject=function(a,b){var c={},d={},e;for(e in a)e in b?c[e]=O(e)(a[e],b[e]):d[e]=a[e];for(e in b)e in a||(d[e]=b[e]);return function(a){for(e in c)d[e]=c[e](a);return d}};var N=/[-+]?(?:\d*\.?\d+)(?:[eE][-+]?\d+)?/g;d3.interpolators=[d3.interpolateObject,function(a,b){return b instanceof Array&&d3.interpolateArray(a,b)},function(a,b){return typeof b=="string"&&d3.interpolateString(a+"",b)},function(a,b){return(typeof b=="string"?b in X||/^(#|rgb\(|hsl\()/.test(b):b instanceof S||b instanceof $)&&d3.interpolateRgb(a+"",b)},function(a,b){return typeof b=="number"&&d3.interpolateNumber(+a,b)}],d3.rgb=function(a,b,c){return arguments.length===1?a instanceof S?R(a.r,a.g,a.b):U(""+a,R,_):R(~~a,~~b,~~c)},S.prototype.brighter=function(a){a=Math.pow(.7,arguments.length?a:1);var b=this.r,c=this.g,d=this.b,e=30;return!b&&!c&&!d?R(e,e,e):(b&&b<e&&(b=e),c&&c<e&&(c=e),d&&d<e&&(d=e),R(Math.min(255,Math.floor(b/a)),Math.min(255,Math.floor(c/a)),Math.min(255,Math.floor(d/a))))},S.prototype.darker=function(a){return a=Math.pow(.7,arguments.length?a:1),R(Math.floor(a*this.r),Math.floor(a*this.g),Math.floor(a*this.b))},S.prototype.hsl=function(){return V(this.r,this.g,this.b)},S.prototype.toString=function(){return"#"+T(this.r)+T(this.g)+T(this.b)};var X={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080"
    ,green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};for(var Y in X)X[Y]=U(X[Y],R,_);d3.hsl=function(a,b,c){return arguments.length===1?a instanceof $?Z(a.h,a.s,a.l):U(""+a,V,Z):Z(+a,+b,+c)},$.prototype.brighter=function(a){return a=Math.pow(.7,arguments.length?a:1),Z(this.h,this.s,this.l/a)},$.prototype.darker=function(a){return a=Math.pow(.7,arguments.length?a:1),Z(this.h,this.s,a*this.l)},$.prototype.rgb=function(){return _(this.h,this.s,this.l)},$.prototype.toString=function(){return this.rgb().toString()};var bb=function(a,b){return b.querySelector(a)},bc=function(a,b){return b.querySelectorAll(a)};typeof Sizzle=="function"&&(bb=function(a,b){return Sizzle(a,b)[0]},bc=function(a,b){return Sizzle.uniqueSort(Sizzle(a,b))});var bd=[];d3.selection=function(){return bk},d3.selection.prototype=bd,bd.select=function(a){var b=[],c,d,e,f;typeof a!="function"&&(a=be(a));for(var g=-1,h=this.length;++g<h;){b.push(c=[]),c.parentNode=(e=this[g]).parentNode;for(var i=-1,j=e.length;++i<j;)(f=e[i])?(c.push(d=a.call(f,f.__data__,i)),d&&"__data__"in f&&(d.__data__=f.__data__)):c.push(null)}return ba(b)},bd.selectAll=function(a){var b=[],c,e;typeof a!="function"&&(a=bf(a));for(var f=-1,g=this.length;++f<g;)for(var h=this[f],i=-1,j=h.length;++i<j;)if(e=h[i])b.push(c=d(a.call(e,e.__data__,i))),c.parentNode=e;return ba(b)},bd.attr=function(a,b){function d(){this.removeAttribute(a)}function e(){this.removeAttributeNS(a.space,a.local)}function f(){this.setAttribute(a,b)}function g(){this.setAttributeNS(a.space,a.local,b)}function h(){var c=b.apply(this,arguments);c==null?this.removeAttribute(a):this.setAttribute(a,c)}function i(){var c=b.apply(this,arguments);c==null?this.removeAttributeNS(a.space,a.local):this.setAttributeNS(a.space,a.local,c)}a=d3.ns.qualify(a);if(arguments.length<2){var c=this.node();return a.local?c.getAttributeNS(a.space,a.local):c.getAttribute(a)}return this.each(b==null?a.local?e:d:typeof b=="function"?a.local?i:h:a.local?g:f)},bd.classed=function(a,b){var c=a.split(bg),d=c.length,e=-1;if(arguments.length>1){while(++e<d)bh.call(this,c[e],b);return this}while(++e<d)if(!bh.call(this,c[e]))return!1;return!0};var bg=/\s+/g;bd.style=function(a,b,c){function d(){this.style.removeProperty(a)}function e(){this.style.setProperty(a,b,c)}function f(){var d=b.apply(this,arguments);d==null?this.style.removeProperty(a):this.style.setProperty(a,d,c)}return arguments.length<3&&(c=""),arguments.length<2?window.getComputedStyle(this.node(),null).getPropertyValue(a):this.each(b==null?d:typeof b=="function"?f:e)},bd.property=function(a,b){function c(){delete this[a]}function d(){this[a]=b}function e(){var c=b.apply(this,arguments);c==null?delete this[a]:this[a]=c}return arguments.length<2?this.node()[a]:this.each(b==null?c:typeof b=="function"?e:d)},bd.text=function(a){return arguments.length<1?this.node().textContent:this.each(typeof a=="function"?function(){this.textContent=a.apply(this,arguments)}:function(){this.textContent=a})},bd.html=function(a){return arguments.length<1?this.node().innerHTML:this.each(typeof a=="function"?function(){this.innerHTML=a.apply(this,arguments)}:function(){this.innerHTML=a})},bd.append=function(a){function b(){return this.appendChild(document.createElement(a))}function c(){return this.appendChild(document.createElementNS(a.space,a.local))}return a=d3.ns.qualify(a),this.select(a.local?c:b)},bd.insert=function(a,b){function c(){return this.insertBefore(document.createElement(a),bb(b,this))}function d(){return this.insertBefore(document.createElementNS(a.space,a.local),bb(b,this))}return a=d3.ns.qualify(a),this.select(a.local?d:c)},bd.remove=function(){return this.each(function(){var a=this.parentNode;a&&a.removeChild(this)})},bd.data=function(a,b){function f(a,f){var g,h=a.length,i=f.length,j=Math.min(h,i),k=Math.max(h,i),l=[],m=[],n=[],o,p;if(b){var q={},r=[],s,t=f.length;for(g=-1;++g<h;)s=b.call(o=a[g],o.__data__,g),s in q?n[t++]=o:q[s]=o,r.push(s);for(g=-1;++g<i;)o=q[s=b.call(f,p=f[g],g)],o?(o.__data__=p,l[g]=o,m[g]=n[g]=null):(m[g]=bi(p),l[g]=n[g]=null),delete q[s];for(g=-1;++g<h;)r[g]in q&&(n[g]=a[g])}else{for(g=-1;++g<j;)o=a[g],p=f[g],o?(o.__data__=p,l[g]=o,m[g]=n[g]=null):(m[g]=bi(p),l[g]=n[g]=null);for(;g<i;++g)m[g]=bi(f[g]),l[g]=n[g]=null;for(;g<k;++g)n[g]=a[g],m[g]=l[g]=null}m.update=l,m.parentNode=l.parentNode=n.parentNode=a.parentNode,c.push(m),d.push(l),e.push(n)}var c=[],d=[],e=[],g=-1,h=this.length,i;if(typeof a=="function")while(++g<h)f(i=this[g],a.call(i,i.parentNode.__data__,g));else while(++g<h)f(i=this[g],a);var j=ba(d);return j.enter=function(){return bl(c)},j.exit=function(){return ba(e)},j},bd.filter=function(a){var b=[],c,d,e;for(var f=0,g=this.length;f<g;f++){b.push(c=[]),c.parentNode=(d=this[f]).parentNode;for(var h=0,i=d.length;h<i;h++)(e=d[h])&&a.call(e,e.__data__,h)&&c.push(e)}return ba(b)},bd.map=function(a){return this.each(function(){this.__data__=a.apply(this,arguments)})},bd.sort=function(a){a=bj.apply(this,arguments);for(var b=0,c=this.length;b<c;b++)for(var d=this[b].sort(a),e=1,f=d.length,g=d[0];e<f;e++){var h=d[e];h&&(g&&g.parentNode.insertBefore(h,g.nextSibling),g=h)}return this},bd.on=function(a,b,c){arguments.length<3&&(c=!1);var d="__on"+a,e=a.indexOf(".");return e>0&&(a=a.substring(0,e)),arguments.length<2?(e=this.node()[d])&&e._:this.each(function(e,f){function h(a){var c=d3.event;d3.event=a;try{b.call(g,g.__data__,f)}finally{d3.event=c}}var g=this;g[d]&&g.removeEventListener(a,g[d],c),b&&g.addEventListener(a,g[d]=h,c),h._=b})},bd.each=function(a){for(var b=-1,c=this.length;++b<c;)for(var d=this[b],e=-1,f=d.length;++e<f;){var g=d[e];g&&a.call(g,g.__data__,e,b)}return this},bd.call=function(a){return a.apply(this,(arguments[0]=this,arguments)),this},bd.empty=function(){return!this.node()},bd.node=function(a){for(var b=0,c=this.length;b<c;b++)for(var d=this[b],e=0,f=d.length;e<f;e++){var g=d[e];if(g)return g}return null},bd.transition=function(){var a=[],b,c;for(var d=-1,e=this.length;++d<e;){a.push(b=[]);for(var f=this[d],g=-1,h=f.length;++g<h;)b.push((c=f[g])?{node:c,delay:0,duration:250}:null)}return bn(a,bt||++bs,Date.now())};var bk=ba([[document]]);bk[0].parentNode=document.documentElement,d3.select=function(a){return typeof a=="string"?bk.select(a):ba([[a]])},d3.selectAll=function(a){return typeof a=="string"?bk.selectAll(a):ba([d(a)])};var bm=[];bm.append=bd.append,bm.insert=bd.insert,bm.empty=bd.empty,bm.node=bd.node,bm.select=function(a){var b=[],c,d,e,f,g;for(var h=-1,i=this.length;++h<i;){e=(f=this[h]).update,b.push(c=[]),c.parentNode=f.parentNode;for(var j=-1,k=f.length;++j<k;)(g=f[j])?(c.push(e[j]=d=a.call(f.parentNode,g.__data__,j)),d.__data__=g.__data__):c.push(null)}return ba(b)};var bo={},br=[],bs=0,bt=0,bu=d3.ease("cubic-in-out");br.call=bd.call,d3.transition=function(){return bk.transition()},d3.transition.prototype=br,br.select=function(a){var b=[],c,d,e;typeof a!="function"&&(a=be(a));for(var f=-1,g=this.length;++f<g;){b.push(c=[]);for(var h=this[f],i=-1,j=h.length;++i<j;)(e=h[i])&&(d=a.call(e.node,e.node.__data__,i))?("__data__"in e.node&&(d.__data__=e.node.__data__),c.push({node:d,delay:e.delay,duration:e.duration})):c.push(null)}return bn(b,this.id,this.time).ease(this.ease())},br.selectAll=function(a){var b=[],c,d,e;typeof a!="function"&&(a=bf(a));for(var f=-1,g=this.length;++f<g;)for(var h=this[f],i=-1,j=h.length;++i<j;)if(e=h[i]){d=a.call(e.node,e.node.__data__,i),b.push(c=[]);for(var k=-1,l=d.length;++k<l;)c.push({node:d[k],delay:e.delay,duration:e.duration})}return bn(b,this.id,this.time).ease(this.ease())},br.attr=function(a,b){return this.attrTween(a,bq(a,b))},br.attrTween=function(a,b){function d(a,d){var e=b.call(this,a,d,this.getAttribute(c));return e===bo?(this.removeAttribute(c),null):e&&function(a){this.setAttribute(c,e(a))}}function e(a,d){var e=b.call(this,a,d,this.getAttributeNS(c.space,c.local));return e===bo?(this.removeAttributeNS(c.space,c.local),null):e&&function(a){this.setAttributeNS(c.space,c.local,e(a))}}var c=d3.ns.qualify(a);return this.tween("attr."+a,c.local?e:d)},br.style=function(a,b,c){return arguments.length<3&&(c=""),this.styleTween(a,bq(a,b),c)},br.styleTween=function(a,b,c){return arguments.length<3&&(c=""),this.tween("style."+a,function(d,e){var f=b.call(this,d,e,window.getComputedStyle(this,null).getPropertyValue(a));return f===bo?(this.style.removeProperty(a),null):f&&function(b){this.style.setProperty(a,f(b),c)}})},br.text=function(a){return this.tween("text",function(b,c){this.textContent=typeof a=="function"?a.call(this,b,c):a})},br.remove=function(){return this.each("end",function(){var a;!this.__transition__&&(a=this.parentNode)&&a.removeChild(this)})},br.delay=function(a){var b=this;return b.each(typeof a=="function"?function(c,d,e){b[e][d].delay=+a.apply(this,arguments)}:(a=+a,function(c,d,e){b[e][d].delay=a}))},br.duration=function(a){var b=this;return b.each(typeof a=="function"?function(c,d,e){b[e][d].duration=+a.apply(this,arguments)}:(a=+a,function(c,d,e){b[e][d].duration=a}))},br.transition=function(){return this.select(i)};var bw=null,bx,by;d3.timer=function(a,b,c){var d=!1,e,f=bw;if(arguments.length<3){if(arguments.length<2)b=0;else if(!isFinite(b))return;c=Date.now()}while(f){if(f.callback===a){f.then=c,f.delay=b,d=!0;break}e=f,f=f.next}d||(bw={callback:a,then:c,delay:b,next:bw}),bx||(by=clearTimeout(by),bx=1,bB(bz))},d3.timer.flush=function(){var a,b=Date.now(),c=bw;while(c)a=b-c.then,c.delay||(c.flush=c.callback(a)),c=c.next;bA()};var bB=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){setTimeout(a,17)};d3.transform=function(a){return bG.setAttribute("transform",a),new bC(bG.transform.baseVal.consolidate().matrix)},bC.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var bG=document.createElementNS(d3.ns.prefix.svg,"g"),bH=180/Math.PI;d3.scale={},d3.scale.linear=function(){return bM([0,1],[0,1],d3.interpolate,!1)},d3.scale.log=function(){return bU(d3.scale.linear(),bW)};var bV=d3.format("e");bW.pow=function(a){return Math.pow(10,a)},bX.pow=function(a){return-Math.pow(10,-a)},d3.scale.pow=function(){return bY(d3.scale.linear(),1)},d3.scale.sqrt=function(){return d3.scale.pow().exponent(.5)},d3.scale.ordinal=function(){return b$([],{t:"range",x:[]})},d3.scale.category10=function(){return d3.scale.ordinal().range(b_)},d3.scale.category20=function(){return d3.scale.ordinal().range(ca)},d3.scale.category20b=function(){return d3.scale.ordinal().range(cb)},d3.scale.category20c=function(){return d3.scale.ordinal().range(cc)};var b_=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"],ca=["#1f77b4","#aec7e8","#ff7f0e","#ffbb78","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5","#8c564b","#c49c94","#e377c2","#f7b6d2","#7f7f7f","#c7c7c7","#bcbd22","#dbdb8d","#17becf","#9edae5"],cb=["#393b79","#5254a3","#6b6ecf","#9c9ede","#637939","#8ca252","#b5cf6b","#cedb9c","#8c6d31","#bd9e39","#e7ba52","#e7cb94","#843c39","#ad494a","#d6616b","#e7969c","#7b4173","#a55194","#ce6dbd","#de9ed6"],cc=["#3182bd","#6baed6","#9ecae1","#c6dbef","#e6550d","#fd8d3c","#fdae6b","#fdd0a2","#31a354","#74c476","#a1d99b","#c7e9c0","#756bb1","#9e9ac8","#bcbddc","#dadaeb","#636363","#969696","#bdbdbd","#d9d9d9"];d3.scale.quantile=function(){return cd([],[])},d3.scale.quantize=function(){return ce(0,1,[0,1])},d3.svg={},d3.svg.arc=function(){function e(){var e=a.apply(this,arguments),f=b.apply(this,arguments),g=c.apply(this,arguments)+cf,h=d.apply(this,arguments)+cf,i=(h<g&&(i=g,g=h,h=i),h-g),j=i<Math.PI?"0":"1",k=Math.cos(g),l=Math.sin(g),m=Math.cos(h),n=Math.sin(h);return i>=cg?e?"M0,"+f+"A"+f+","+f+" 0 1,1 0,"+ -f+"A"+f+","+f+" 0 1,1 0,"+f+"M0,"+e+"A"+e+","+e+" 0 1,0 0,"+ -e+"A"+e+","+e+" 0 1,0 0,"+e+"Z":"M0,"+f+"A"+f+","+f+" 0 1,1 0,"+ -f+"A"+f+","+f+" 0 1,1 0,"+f+"Z":e?"M"+f*k+","+f*l+"A"+f+","+f+" 0 "+j+",1 "+f*m+","+f*n+"L"+e*m+","+e*n+"A"+e+","+e+" 0 "+j+",0 "+e*k+","+e*l+"Z":"M"+f*k+","+f*l+"A"+f+","+f+" 0 "+j+",1 "+f*m+","+f*n+"L0,0"+"Z"}var a=ch,b=ci,c=cj,d=ck;return e.innerRadius=function(b){return arguments.length?(a=d3.functor(b),e):a},e.outerRadius=function(a){return arguments.length?(b=d3.functor(a),e):b},e.startAngle=function(a){return arguments.length?(c=d3.functor(a),e):c},e.endAngle=function(a){return arguments.length?(d=d3.functor(a),e):d},e.centroid=function(){var e=(a.apply(this,arguments)+b.apply(this,arguments))/2,f=(c.apply(this,arguments)+d.apply(this,arguments))/2+cf;return[Math.cos(f)*e,Math.sin(f)*e]},e};var cf=-Math.PI/2,cg=2*Math.PI-1e-6;d3.svg.line=function(){return cl(Object)};var cp={linear:cq,"step-before":cr,"step-after":cs,basis:cy,"basis-open":cz,"basis-closed":cA,bundle:cB,cardinal:cv,"cardinal-open":ct,"cardinal-closed":cu,monotone:cK},cD=[0,2/3,1/3,0],cE=[0,1/3,2/3,0],cF=[0,1/6,2/3,1/6];d3.svg.line.radial=function(){var a=cl(cL);return a.radius=a.x,delete a.x,a.angle=a.y,delete a.y,a},cr.reverse=cs,cs.reverse=cr,d3.svg.area=function(){return cM(Object)},d3.svg.area.radial=function(){var a=cM(cL);return a.radius=a.x,delete a.x,a.innerRadius=a.x0,delete a.x0,a.outerRadius=a.x1,delete a.x1,a.angle=a.y,delete a.y,a.startAngle=a.y0,delete a.y0,a.endAngle=a.y1,delete a.y1,a},d3.svg.chord=function(){function f(c,d){var e=g(this,a,c,d),f=g(this,b,c,d);return"M"+e.p0+i(e.r,e.p1)+(h(e,f)?j(e.r,e.p1,e.r,e.p0):j(e.r,e.p1,f.r,f.p0)+i(f.r,f.p1)+j(f.r,f.p1,e.r,e.p0))+"Z"}function g(a,b,f,g){var h=b.call(a,f,g),i=c.call(a,h,g),j=d.call(a,h,g)+cf,k=e.call(a,h,g)+cf;return{r:i,a0:j,a1:k,p0:[i*Math.cos(j),i*Math.sin(j)],p1:[i*Math.cos(k),i*Math.sin(k)]}}function h(a,b){return a.a0==b.a0&&a.a1==b.a1}function i(a,b){return"A"+a+","+a+" 0 0,1 "+b}function j(a,b,c,d){return"Q 0,0 "+d}var a=cP,b=cQ,c=cR,d=cj,e=ck;return f.radius=function(a){return arguments.length?(c=d3.functor(a),f):c},f.source=function(b){return arguments.length?(a=d3.functor(b),f):a},f.target=function(a){return arguments.length?(b=d3.functor(a),f):b},f.startAngle=function(a){return arguments.length?(d=d3.functor(a),f):d},f.endAngle=function(a){return arguments.length?(e=d3.functor(a),f):e},f},d3.svg.diagonal=function(){function d(d,e){var f=a.call(this,d,e),g=b.call(this,d,e),h=(f.y+g.y)/2,i=[f,{x:f.x,y:h},{x:g.x,y:h},g];return i=i.map(c),"M"+i[0]+"C"+i[1]+" "+i[2]+" "+i[3]}var a=cP,b=cQ,c=cU;return d.source=function(b){return arguments.length?(a=d3.functor(b),d):a},d.target=function(a){return arguments.length?(b=d3.functor(a),d):b},d.projection=function(a){return arguments.length?(c=a,d):c},d},d3.svg.diagonal.radial=function(){var a=d3.svg.diagonal(),b=cU,c=a.projection;return a.projection=function(a){return arguments.length?c(cV(b=a)):b},a},d3.svg.mouse=function(a){return cX(a,d3.event)};var cW=/WebKit/.test(navigator.userAgent)?-1:0;d3.svg.touches=function(a,b){return arguments.length<2&&(b=d3.event.touches),b?d(b).map(function(b){var c=cX(a,b);return c.identifier=b.identifier,c}):[]},d3.svg.symbol=function(){function c(c,d){return(c$[a.call(this,c,d)]||c$.circle)(b.call(this,c,d))}var a=cZ,b=cY;return c.type=function(b){return arguments.length?(a=d3.functor(b),c):a},c.size=function(a){return arguments.length?(b=d3.functor(a),c):b},c};var c$={circle:function(a){var b=Math.sqrt(a/Math.PI);return"M0,"+b+"A"+b+","+b+" 0 1,1 0,"+ -b+"A"+b+","+b+" 0 1,1 0,"+b+"Z"},cross:function(a){var b=Math.sqrt(a/5)/2;return"M"+ -3*b+","+ -b+"H"+ -b+"V"+ -3*b+"H"+b+"V"+ -b+"H"+3*b+"V"+b+"H"+b+"V"+3*b+"H"+ -b+"V"+b+"H"+ -3*b+"Z"},diamond:function(a){var b=Math.sqrt(a/(2*da)),c=b*da;return"M0,"+ -b+"L"+c+",0"+" 0,"+b+" "+ -c+",0"+"Z"},square:function(a){var b=Math.sqrt(a)/2;return"M"+ -b+","+ -b+"L"+b+","+ -b+" "+b+","+b+" "+ -b+","+b+"Z"},"triangle-down":function(a){var b=Math.sqrt(a/c_),c=b*c_/2;return"M0,"+c+"L"+b+","+ -c+" "+ -b+","+ -c+"Z"},"triangle-up":function(a){var b=Math.sqrt(a/c_),c=b*c_/2;return"M0,"+ -c+"L"+b+","+c+" "+ -b+","+c+"Z"}};d3.svg.symbolTypes=d3.keys(c$);var c_=Math.sqrt(3),da=Math.tan(30*Math.PI/180);d3.svg.axis=function(){function j(j){j.each(function(k,l,m){var n=d3.select(this),o=j.delay?function(a){var b=bt;try{return bt=j.id,a.transition().delay(j[m][l].delay).duration(j[m][l].duration).ease(j.ease())}finally{bt=b}}:Object,p=a.ticks.apply(a,g),q=h==null?a.tickFormat.apply(a,g):h,r=dd(a,p,i),s=n.selectAll(".minor").data(r,String),t=s.enter().insert("svg:line","g").attr("class","tick minor").style("opacity",1e-6),u=o(s.exit()).style("opacity",1e-6).remove(),v=o(s).style("opacity",1),w=n.selectAll("g").data(p,String),x=w.enter().insert("svg:g","path").style("opacity",1e-6),y=o(w.exit()).style("opacity",1e-6).remove(),z=o(w).style("opacity",1),A,B=bJ(a.range()),C=n.selectAll(".domain").data([0]),D=C.enter().append("svg:path").attr("class","domain"),E=o(C),F=this.__chart__||a;this.__chart__=a.copy(),x.append("svg:line").attr("class","tick"),x.append("svg:text"),z.select("text").text(q);switch(b){case"bottom":A=db,v.attr("x2",0).attr("y2",d),z.select("line").attr("x2",0).attr("y2",c),z.select("text").attr("x",0).attr("y",Math.max(c,0)+f).attr("dy",".71em").attr("text-anchor","middle"),E.attr("d","M"+B[0]+","+e+"V0H"+B[1]+"V"+e);break;case"top":A=db,v.attr("x2",0).attr("y2",-d),z.select("line").attr("x2",0).attr("y2",-c),z.select("text").attr("x",0).attr("y",-(Math.max(c,0)+f)).attr("dy","0em").attr("text-anchor","middle"),E.attr("d","M"+B[0]+","+ -e+"V0H"+B[1]+"V"+ -e);break;case"left":A=dc,v.attr("x2",-d).attr("y2",0),z.select("line").attr("x2",-c).attr("y2",0),z.select("text").attr("x",-(Math.max(c,0)+f)).attr("y",0).attr("dy",".32em").attr("text-anchor","end"),E.attr("d","M"+ -e+","+B[0]+"H0V"+B[1]+"H"+ -e);break;case"right":A=dc,v.attr("x2",d).attr("y2",0),z.select("line").attr("x2",c).attr("y2",0),z.select("text").attr("x",Math.max(c,0)+f).attr("y",0).attr("dy",".32em").attr("text-anchor","start"),E.attr("d","M"+e+","+B[0]+"H0V"+B[1]+"H"+e)}x.call(A,F),z.call(A,a),y.call(A,a),t.call(A,F),v.call(A,a),u.call(A,a)})}var a=d3.scale.linear(),b="bottom",c=6,d=6,e=6,f=3,g=[10],h,i=0;return j.scale=function(b){return arguments.length?(a=b,j):a},j.orient=function(a){return arguments.length?(b=a,j):b},j.ticks=function(){return arguments.length?(g=arguments,j):g},j.tickFormat=function(a){return arguments.length?(h=a,j):h},j.tickSize=function(a,b,f){if(!arguments.length)return c;var g=arguments.length-1;return c=+a,d=g>1?+b:c,e=g>0?+arguments[g]:c,j},j.tickPadding=function(a){return arguments.length?(f=+a,j):f},j.tickSubdivide=function(a){return arguments.length?(i=+a,j):i},j},d3.svg.brush=function(){function e(a){var g=b&&c?["n","e","s","w","nw","ne","se","sw"]:b?["e","w"]:c?["n","s"]:[];a.each(function(){var a=d3.select(this).on("mousedown.brush",f),h=a.selectAll(".background").data([,]),i=a.selectAll(".extent").data([,]),j=a.selectAll(".resize").data(g,String),k;h.enter().append("svg:rect").attr("class","background").style("visibility","hidden").style("pointer-events","all").style("cursor","crosshair"),i.enter().append("svg:rect").attr("class","extent").style("cursor","move"),j.enter().append("svg:rect").attr("class",function(a){return"resize "+a}).attr("width",6).attr("height",6).style("visibility","hidden").style("pointer-events",e.empty()?"none":"all").style("cursor",function(a){return dw[a]}),j.exit().remove(),b&&(k=bJ(b.range()),h.attr("x",k[0]).attr("width",k[1]-k[0]),dp(a,d)),c&&(k=bJ(c.range()),h.attr("y",k[0]).attr("height",k[1]-k[0]),dq(a,d))})}function f(){var a=d3.select(d3.event.target);de=e,dg=this,dj=d,dn=d3.svg.mouse(dg),(dk=a.classed("extent"))?(dn[0]=d[0][0]-dn[0],dn[1]=d[0][1]-dn[1]):a.classed("resize")?(dl=d3.event.target.__data__,dn[0]=d[+/w$/.test(dl)][0],dn[1]=d[+/^n/.test(dl)][1]):d3.event.altKey&&(dm=dn.slice()),dh=!/^(n|s)$/.test(dl)&&b,di=!/^(e|w)$/.test(dl)&&c,df=g(this,arguments),df("brushstart"),dt(),M()}function g(b,c){return function(d){var f=d3.event;try{d3.event={type:d,target:e},a[d].apply(b,c)}finally{d3.event=f}}}var a=d3.dispatch("brushstart","brush","brushend"),b,c,d=[[0,0],[0,0]];return e.x=function(a){return arguments.length?(b=a,e):b},e.y=function(a){return arguments.length?(c=a,e):c},e.extent=function(a){var f,g,h,i,j;return arguments.length?(b&&(f=a[0],g=a[1],c&&(f=f[0],g=g[0]),f=b(f),g=b(g),g<f&&(j=f,f=g,g=j),d[0][0]=f,d[1][0]=g),c&&(h=a[0],i=a[1],b&&(h=h[1],i=i[1]),h=c(h),i=c(i),i<h&&(j=h,h=i,i=j),d[0][1]=h,d[1][1]=i),e):(b&&(f=b.invert(d[0][0]),g=b.invert(d[1][0]),g<f&&(j=f,f=g,g=j)),c&&(h=c.invert(d[0][1]),i=c.invert(d[1][1]),i<h&&(j=h,h=i,i=j)),b&&c?[[f,h],[g,i]]:b?[f,g]:c&&[h,i])},e.clear=function(){return d[0][0]=d[0][1]=d[1][0]=d[1][1]=0,e},e.empty=function(){return b&&d[0][0]===d[1][0]||c&&d[0][1]===d[1][1]},e.on=function(b,c){return a.on(b,c),e},d3.select(window).on("mousemove.brush",dt).on("mouseup.brush",dv).on("keydown.brush",dr).on("keyup.brush",ds),e};var de,df,dg,dh,di,dj,dk,dl,dm,dn,dw={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"};d3.behavior={},d3.behavior.drag=function(){function b(){this.on("mousedown.drag",d).on("touchstart.drag",d),d3.select(window).on("mousemove.drag",dG).on("touchmove.drag",dG).on("mouseup.drag",dH,!0).on("touchend.drag",dH,!0).on("click.drag",dI,!0)}function c(){dx=a,dy=d3.event.target,dB=dF((dz=this).parentNode),dC=0,dA=arguments}function d(){c.apply(this,arguments),dE("dragstart")}var a=d3.dispatch("drag","dragstart","dragend");return b.on=function(c,d){return a.on(c,d),b},b};var dx,dy,dz,dA,dB,dC,dD;d3.behavior.zoom=function(){function d(){this.on("mousedown.zoom",f).on("mousewheel.zoom",g).on("DOMMouseScroll.zoom",g).on("dblclick.zoom",h).on("touchstart.zoom",i),d3.select(window).on("mousemove.zoom",d$).on("mouseup.zoom",d_).on("touchmove.zoom",dZ).on("touchend.zoom",dY).on("click.zoom",ea,!0)}function e(){dO=a,dP=c,dQ=b.zoom,dR=d3.event.target,dS=this,dT=arguments}function f(){e.apply(this,arguments),dK=dW(d3.svg.mouse(dS)),dU=!1,d3.event.preventDefault(),window.focus()}function g(){e.apply(this,arguments),dL||(dL=dW(d3.svg.mouse(dS))),eb(dX()+a[2],d3.svg.mouse(dS),dL)}function h(){e.apply(this,arguments);var b=d3.svg.mouse(dS);eb(d3.event.shiftKey?Math.ceil(a[2]-1):Math.floor(a[2]+1),b,dW(b))}function i(){e.apply(this,arguments);var b=dY(),c,d=Date.now();b.length===1&&d-dN<300&&eb(1+Math.floor(a[2]),c=b[0],dM[c.identifier]),dN=d}var a=[0,0,0],b=d3.dispatch("zoom"),c=ec;return d.extent=function(a){return arguments.length?(c=a==null?ec:a,d):c},d.on=function(a,c){return b.on(a,c),d},d};var dJ,dK,dL,dM={},dN=0,dO,dP,dQ,dR,dS,dT,dU,dV,ec=[[-Infinity,Infinity],[-Infinity,Infinity],[-Infinity,Infinity]]})();
(function(){function a(a){var b=a.source,d=a.target,e=c(b,d),f=[b];while(b!==e)b=b.parent,f.push(b);var g=f.length;while(d!==e)f.splice(g,0,d),d=d.parent;return f}function b(a){var b=[],c=a.parent;while(c!=null)b.push(a),a=c,c=c.parent;return b.push(a),b}function c(a,c){if(a===c)return a;var d=b(a),e=b(c),f=d.pop(),g=e.pop(),h=null;while(f===g)h=f,f=d.pop(),g=e.pop();return h}function g(a){a.fixed|=2}function h(a){a!==f&&(a.fixed&=1)}function i(){j(),f.fixed&=1,e=f=null}function j(){f.px+=d3.event.dx,f.py+=d3.event.dy,e.resume()}function k(a,b,c){var d=0,e=0;a.charge=0;if(!a.leaf){var f=a.nodes,g=f.length,h=-1,i;while(++h<g){i=f[h];if(i==null)continue;k(i,b,c),a.charge+=i.charge,d+=i.charge*i.cx,e+=i.charge*i.cy}}if(a.point){a.leaf||(a.point.x+=Math.random()-.5,a.point.y+=Math.random()-.5);var j=b*c[a.point.index];a.charge+=a.pointCharge=j,d+=j*a.point.x,e+=j*a.point.y}a.cx=d/a.charge,a.cy=e/a.charge}function l(a){return 20}function m(a){return 1}function o(a){return a.x}function p(a){return a.y}function q(a,b,c){a.y0=b,a.y=c}function t(a){var b=1,c=0,d=a[0][1],e,f=a.length;for(;b<f;++b)(e=a[b][1])>d&&(c=b,d=e);return c}function u(a){return a.reduce(v,0)}function v(a,b){return a+b[1]}function w(a,b){return x(a,Math.ceil(Math.log(b.length)/Math.LN2+1))}function x(a,b){var c=-1,d=+a[0],e=(a[1]-d)/b,f=[];while(++c<=b)f[c]=e*c+d;return f}function y(a){return[d3.min(a),d3.max(a)]}function z(a,b){return a.sort=d3.rebind(a,b.sort),a.children=d3.rebind(a,b.children),a.links=D,a.value=d3.rebind(a,b.value),a.nodes=function(b){return E=!0,(a.nodes=a)(b)},a}function A(a){return a.children}function B(a){return a.value}function C(a,b){return b.value-a.value}function D(a){return d3.merge(a.map(function(a){return(a.children||[]).map(function(b){return{source:a,target:b}})}))}function F(a,b){return a.value-b.value}function G(a,b){var c=a._pack_next;a._pack_next=b,b._pack_prev=a,b._pack_next=c,c._pack_prev=b}function H(a,b){a._pack_next=b,b._pack_prev=a}function I(a,b){var c=b.x-a.x,d=b.y-a.y,e=a.r+b.r;return e*e-c*c-d*d>.001}function J(a){function l(a){b=Math.min(a.x-a.r,b),c=Math.max(a.x+a.r,c),d=Math.min(a.y-a.r,d),e=Math.max(a.y+a.r,e)}var b=Infinity,c=-Infinity,d=Infinity,e=-Infinity,f=a.length,g,h,i,j,k;a.forEach(K),g=a[0],g.x=-g.r,g.y=0,l(g);if(f>1){h=a[1],h.x=h.r,h.y=0,l(h);if(f>2){i=a[2],O(g,h,i),l(i),G(g,i),g._pack_prev=i,G(i,h),h=g._pack_next;for(var m=3;m<f;m++){O(g,h,i=a[m]);var n=0,o=1,p=1;for(j=h._pack_next;j!==h;j=j._pack_next,o++)if(I(j,i)){n=1;break}if(n==1)for(k=g._pack_prev;k!==j._pack_prev;k=k._pack_prev,p++)if(I(k,i)){p<o&&(n=-1,j=k);break}n==0?(G(g,i),h=i,l(i)):n>0?(H(g,j),h=j,m--):(H(j,h),g=j,m--)}}}var q=(b+c)/2,r=(d+e)/2,s=0;for(var m=0;m<f;m++){var t=a[m];t.x-=q,t.y-=r,s=Math.max(s,t.r+Math.sqrt(t.x*t.x+t.y*t.y))}return a.forEach(L),s}function K(a){a._pack_next=a._pack_prev=a}function L(a){delete a._pack_next,delete a._pack_prev}function M(a){var b=a.children;b&&b.length?(b.forEach(M),a.r=J(b)):a.r=Math.sqrt(a.value)}function N(a,b,c,d){var e=a.children;a.x=b+=d*a.x,a.y=c+=d*a.y,a.r*=d;if(e){var f=-1,g=e.length;while(++f<g)N(e[f],b,c,d)}}function O(a,b,c){var d=a.r+c.r,e=b.x-a.x,f=b.y-a.y;if(d&&(e||f)){var g=b.r+c.r,h=Math.sqrt(e*e+f*f),i=Math.max(-1,Math.min(1,(d*d+h*h-g*g)/(2*d*h))),j=Math.acos(i),k=i*(d/=h),l=Math.sin(j)*d;c.x=a.x+k*e+l*f,c.y=a.y+k*f-l*e}else c.x=a.x+d,c.y=a.y}function P(a){return 1+d3.max(a,function(a){return a.y})}function Q(a){return a.reduce(function(a,b){return a+b.x},0)/a.length}function R(a){var b=a.children;return b&&b.length?R(b[0]):a}function S(a){var b=a.children,c;return b&&(c=b.length)?S(b[c-1]):a}function T(a,b){return a.parent==b.parent?1:2}function U(a){var b=a.children;return b&&b.length?b[0]:a._tree.thread}function V(a){var b=a.children,c;return b&&(c=b.length)?b[c-1]:a._tree.thread}function W(a,b){var c=a.children;if(c&&(e=c.length)){var d,e,f=-1;while(++f<e)b(d=W(c[f],b),a)>0&&(a=d)}return a}function X(a,b){return a.x-b.x}function Y(a,b){return b.x-a.x}function Z(a,b){return a.depth-b.depth}function $(a,b){function c(a,d){var e=a.children;if(e&&(i=e.length)){var f,g=null,h=-1,i;while(++h<i)f=e[h],c(f,g),g=f}b(a,d)}c(a,null)}function _(a){var b=0,c=0,d=a.children,e=d.length,f;while(--e>=0)f=d[e]._tree,f.prelim+=b,f.mod+=b,b+=f.shift+(c+=f.change)}function ba(a,b,c){a=a._tree,b=b._tree;var d=c/(b.number-a.number);a.change+=d,b.change-=d,b.shift+=c,b.prelim+=c,b.mod+=c}function bb(a,b,c){return a._tree.ancestor.parent==b.parent?a._tree.ancestor:c}function bc(a){return{x:a.x,y:a.y,dx:a.dx,dy:a.dy}}function bd(a,b){var c=a.x+b[3],d=a.y+b[0],e=a.dx-b[1]-b[3],f=a.dy-b[0]-b[2];return e<0&&(c+=e/2,e=0),f<0&&(d+=f/2,f=0),{x:c,y:d,dx:e,dy:f}}d3.layout={},d3.layout.bundle=function(){return function(b){var c=[],d=-1,e=b.length;while(++d<e)c.push(a(b[d]));return c}},d3.layout.chord=function(){function j(){var a={},j=[],l=d3.range(e),m=[],n,o,p,q,r;b=[],c=[],n=0,q=-1;while(++q<e){o=0,r=-1;while(++r<e)o+=d[q][r];j.push(o),m.push(d3.range(e)),n+=o}g&&l.sort(function(a,b){return g(j[a],j[b])}),h&&m.forEach(function(a,b){a.sort(function(a,c){return h(d[b][a],d[b][c])})}),n=(2*Math.PI-f*e)/n,o=0,q=-1;while(++q<e){p=o,r=-1;while(++r<e){var s=l[q],t=m[s][r],u=d[s][t],v=o,w=o+=u*n;a[s+"-"+t]={index:s,subindex:t,startAngle:v,endAngle:w,value:u}}c.push({index:s,startAngle:p,endAngle:o,value:(o-p)/n}),o+=f}q=-1;while(++q<e){r=q-1;while(++r<e){var x=a[q+"-"+r],y=a[r+"-"+q];(x.value||y.value)&&b.push(x.value<y.value?{source:y,target:x}:{source:x,target:y})}}i&&k()}function k(){b.sort(function(a,b){return i((a.source.value+a.target.value)/2,(b.source.value+b.target.value)/2)})}var a={},b,c,d,e,f=0,g,h,i;return a.matrix=function(f){return arguments.length?(e=(d=f)&&d.length,b=c=null,a):d},a.padding=function(d){return arguments.length?(f=d,b=c=null,a):f},a.sortGroups=function(d){return arguments.length?(g=d,b=c=null,a):g},a.sortSubgroups=function(c){return arguments.length?(h=c,b=null,a):h},a.sortChords=function(c){return arguments.length?(i=c,b&&k(),a):i},a.chords=function(){return b||j(),b},a.groups=function(){return c||j(),c},a},d3.layout.force=function(){function A(a){return function(b,c,d,e,f){if(b.point!==a){var g=b.cx-a.x,h=b.cy-a.y,i=1/Math.sqrt(g*g+h*h);if((e-c)*i<t){var j=b.charge*i*i;return a.px-=g*j,a.py-=h*j,!0}if(b.point&&isFinite(i)){var j=b.pointCharge*i*i;a.px-=g*j,a.py-=h*j}}return!b.charge}}function B(){var a=v.length,d=w.length,e,f,g,h,i,j,l,m,p;for(f=0;f<d;++f){g=w[f],h=g.source,i=g.target,m=i.x-h.x,p=i.y-h.y;if(j=m*m+p*p)j=n*y[f]*((j=Math.sqrt(j))-x[f])/j,m*=j,p*=j,i.x-=m*(l=h.weight/(i.weight+h.weight)),i.y-=p*l,h.x+=m*(l=1-l),h.y+=p*l}if(l=n*s){m=c[0]/2,p=c[1]/2,f=-1;if(l)while(++f<a)g=v[f],g.x+=(m-g.x)*l,g.y+=(p-g.y)*l}if(r){k(e=d3.geom.quadtree(v),n,z),f=-1;while(++f<a)(g=v[f]).fixed||e.visit(A(g))}f=-1;while(++f<a)g=v[f],g.fixed?(g.x=g.px,g.y=g.py):(g.x-=(g.px-(g.px=g.x))*o,g.y-=(g.py-(g.py=g.y))*o);return b.tick({type:"tick",alpha:n}),(n*=.99)<.005}function C(b){g(f=b),e=a}var a={},b=d3.dispatch("tick"),c=[1,1],d,n,o=.9,p=l,q=m,r=-30,s=.1,t=.8,u,v=[],w=[],x,y,z;return a.on=function(c,d){return b.on(c,d),a},a.nodes=function(b){return arguments.length?(v=b,a):v},a.links=function(b){return arguments.length?(w=b,a):w},a.size=function(b){return arguments.length?(c=b,a):c},a.linkDistance=function(b){return arguments.length?(p=d3.functor(b),a):p},a.distance=a.linkDistance,a.linkStrength=function(b){return arguments.length?(q=d3.functor(b),a):q},a.friction=function(b){return arguments.length?(o=b,a):o},a.charge=function(b){return arguments.length?(r=typeof b=="function"?b:+b,a):r},a.gravity=function(b){return arguments.length?(s=b,a):s},a.theta=function(b){return arguments.length?(t=b,a):t},a.start=function(){function k(a,c){var d=l(b),e=-1,f=d.length,g;while(++e<f)if(!isNaN(g=d[e][a]))return g;return Math.random()*c}function l(){if(!i){i=[];for(d=0;d<e;++d)i[d]=[];for(d=0;d<f;++d){var a=w[d];i[a.source.index].push(a.target),i[a.target.index].push(a.source)}}return i[b]}var b,d,e=v.length,f=w.length,g=c[0],h=c[1],i,j;for(b=0;b<e;++b)(j=v[b]).index=b,j.weight=0;x=[],y=[];for(b=0;b<f;++b)j=w[b],typeof j.source=="number"&&(j.source=v[j.source]),typeof j.target=="number"&&(j.target=v[j.target]),x[b]=p.call(this,j,b),y[b]=q.call(this,j,b),++j.source.weight,++j.target.weight;for(b=0;b<e;++b)j=v[b],isNaN(j.x)&&(j.x=k("x",g)),isNaN(j.y)&&(j.y=k("y",h)),isNaN(j.px)&&(j.px=j.x),isNaN(j.py)&&(j.py=j.y);z=[];if(typeof r=="function")for(b=0;b<e;++b)z[b]=+r.call(this,v[b],b);else for(b=0;b<e;++b)z[b]=r;return a.resume()},a.resume=function(){return n=.1,d3.timer(B),a},a.stop=function(){return n=0,a},a.drag=function(){d||(d=d3.behavior.drag().on("dragstart",C).on("drag",j).on("dragend",i)),this.on("mouseover.force",g).on("mouseout.force",h).call(d)},a};var e,f;d3.layout.partition=function(){function c(a,b,d,e){var f=a.children;a.x=b,a.y=a.depth*e,a.dx=d,a.dy=e;if(f&&(h=f.length)){var g=-1,h,i,j;d=a.value?d/a.value:0;while(++g<h)c(i=f[g],b,j=i.value*d,e),b+=j}}function d(a){var b=a.children,c=0;if(b&&(f=b.length)){var e=-1,f;while(++e<f)c=Math.max(c,d(b[e]))}return 1+c}function e(e,f){var g=a.call(this,e,f);return c(g[0],0,b[0],b[1]/d(g[0])),g}var a=d3.layout.hierarchy(),b=[1,1];return e.size=function(a){return arguments.length?(b=a,e):b},z(e,a)},d3.layout.pie=function(){function f(g,h){var i=g.map(function(b,c){return+a.call(f,b,c)}),j=+(typeof c=="function"?c.apply(this,arguments):c),k=((typeof e=="function"?e.apply(this,arguments):e)-c)/d3.sum(i),l=d3.range(g.length);b!=null&&l.sort(b===n?function(a,b){return i[b]-i[a]}:function(a,c){return b(g[a],g[c])});var m=l.map(function(a){return{data:g[a],value:d=i[a],startAngle:j,endAngle:j+=d*k}});return g.map(function(a,b){return m[l[b]]})}var a=Number,b=n,c=0,e=2*Math.PI;return f.value=function(b){return arguments.length?(a=b,f):a},f.sort=function(a){return arguments.length?(b=a,f):b},f.startAngle=function(a){return arguments.length?(c=a,f):c},f.endAngle=function(a){return arguments.length?(e=a,f):e},f};var n={};d3.layout.stack=function(){function g(h,i){var j=h.map(function(b,c){return a.call(g,b,c)}),k=j.map(function(a,b){return a.map(function(a,b){return[e.call(g,a,b),f.call(g,a,b)]})}),l=b.call(g,k,i);j=d3.permute(j,l),k=d3.permute(k,l);var m=c.call(g,k,i),n=j.length,o=j[0].length,p,q,r;for(q=0;q<o;++q){d.call(g,j[0][q],r=m[q],k[0][q][1]);for(p=1;p<n;++p)d.call(g,j[p][q],r+=k[p-1][q][1],k[p][q][1])}return h}var a=Object,b=r["default"],c=s.zero,d=q,e=o,f=p;return g.values=function(b){return arguments.length?(a=b,g):a},g.order=function(a){return arguments.length?(b=typeof a=="function"?a:r[a],g):b},g.offset=function(a){return arguments.length?(c=typeof a=="function"?a:s[a],g):c},g.x=function(a){return arguments.length?(e=a,g):e},g.y=function(a){return arguments.length?(f=a,g):f},g.out=function(a){return arguments.length?(d=a,g):d},g};var r={"inside-out":function(a){var b=a.length,c,d,e=a.map(t),f=a.map(u),g=d3.range(b).sort(function(a,b){return e[a]-e[b]}),h=0,i=0,j=[],k=[];for(c=0;c<b;++c)d=g[c],h<i?(h+=f[d],j.push(d)):(i+=f[d],k.push(d));return k.reverse().concat(j)},reverse:function(a){return d3.range(a.length).reverse()},"default":function(a){return d3.range(a.length)}},s={silhouette:function(a){var b=a.length,c=a[0].length,d=[],e=0,f,g,h,i=[];for(g=0;g<c;++g){for(f=0,h=0;f<b;f++)h+=a[f][g][1];h>e&&(e=h),d.push(h)}for(g=0;g<c;++g)i[g]=(e-d[g])/2;return i},wiggle:function(a){var b=a.length,c=a[0],d=c.length,e=0,f,g,h,i,j,k,l,m,n,o=[];o[0]=m=n=0;for(g=1;g<d;++g){for(f=0,i=0;f<b;++f)i+=a[f][g][1];for(f=0,j=0,l=c[g][0]-c[g-1][0];f<b;++f){for(h=0,k=(a[f][g][1]-a[f][g-1][1])/(2*l);h<f;++h)k+=(a[h][g][1]-a[h][g-1][1])/l;j+=k*a[f][g][1]}o[g]=m-=i?j/i*l:0,m<n&&(n=m)}for(g=0;g<d;++g)o[g]-=n;return o},expand:function(a){var b=a.length,c=a[0].length,d=1/b,e,f,g,h=[];for(f=0;f<c;++f){for(e=0,g=0;e<b;e++)g+=a[e][f][1];if(g)for(e=0;e<b;e++)a[e][f][1]/=g;else for(e=0;e<b;e++)a[e][f][1]=d}for(f=0;f<c;++f)h[f]=0;return h},zero:function(a){var b=-1,c=a[0].length,d=[];while(++b<c)d[b]=0;return d}};d3.layout.histogram=function(){function e(e,f){var g=[],h=e.map(b,this),i=c.call(this,h,f),j=d.call(this,i,h,f),k,f=-1,l=h.length,m=j.length-1,n=a?1:1/l,o;while(++f<m)k=g[f]=[],k.dx=j[f+1]-(k.x=j[f]),k.y=0;f=-1;while(++f<l)o=h[f],o>=i[0]&&o<=i[1]&&(k=g[d3.bisect(j,o,1,m)-1],k.y+=n,k.push(e[f]));return g}var a=!0,b=Number,c=y,d=w;return e.value=function(a){return arguments.length?(b=a,e):b},e.range=function(a){return arguments.length?(c=d3.functor(a),e):c},e.bins=function(a){return arguments.length?(d=typeof a=="number"?function(b){return x(b,a)}:d3.functor(a),e):d},e.frequency=function(b){return arguments.length?(a=!!b,e):a},e},d3.layout.hierarchy=function(){function e(f,h,i){var j=b.call(g,f,h),k=E?f:{data:f};k.depth=h,i.push(k);if(j&&(m=j.length)){var l=-1,m,n=k.children=[],o=0,p=h+1;while(++l<m)d=e(j[l],p,i),d.parent=k,n.push(d),o+=d.value;a&&n.sort(a),c&&(k.value=o)}else c&&(k.value=+c.call(g,f,h)||0);return k}function f(a,b){var d=a.children,e=0;if(d&&(i=d.length)){var h=-1,i,j=b+1;while(++h<i)e+=f(d[h],j)}else c&&(e=+c.call(g,E?a:a.data,b)||0);return c&&(a.value=e),e}function g(a){var b=[];return e(a,0,b),b}var a=C,b=A,c=B;return g.sort=function(b){return arguments.length?(a=b,g):a},g.children=function(a){return arguments.length?(b=a,g):b},g.value=function(a){return arguments.length?(c=a,g):c},g.revalue=function(a){return f(a,0),a},g};var E=!1;d3.layout.pack=function(){function c(c,d){var e=a.call(this,c,d),f=e[0];f.x=0,f.y=0,M(f);var g=b[0],h=b[1],i=1/Math.max(2*f.r/g,2*f.r/h);return N(f,g/2,h/2,i),e}var a=d3.layout.hierarchy().sort(F),b=[1,1];return c.size=function(a){return arguments.length?(b=a,c):b},z(c,a)},d3.layout.cluster=function(){function d(d,e){var f=a.call(this,d,e),g=f[0],h,i=0,j,k;$(g,function(a){var c=a.children;c&&c.length?(a.x=Q(c),a.y=P(c)):(a.x=h?i+=b(a,h):0,a.y=0,h=a)});var l=R(g),m=S(g),n=l.x-b(l,m)/2,o=m.x+b(m,l)/2;return $(g,function(a){a.x=(a.x-n)/(o-n)*c[0],a.y=(1-a.y/g.y)*c[1]}),f}var a=d3.layout.hierarchy().sort(null).value(null),b=T,c=[1,1];return d.separation=function(a){return arguments.length?(b=a,d):b},d.size=function(a){return arguments.length?(c=a,d):c},z(d,a)},d3.layout.tree=function(){function d(d,e){function h(a,c){var d=a.children,e=a._tree;if(d&&(f=d.length)){var f,g=d[0],i,k=g,l,m=-1;while(++m<f)l=d[m],h(l,i),k=j(l,i,k),i=l;_(a);var n=.5*(g._tree.prelim+l._tree.prelim);c?(e.prelim=c._tree.prelim+b(a,c),e.mod=e.prelim-n):e.prelim=n}else c&&(e.prelim=c._tree.prelim+b(a,c))}function i(a,b){a.x=a._tree.prelim+b;var c=a.children;if(c&&(e=c.length)){var d=-1,e;b+=a._tree.mod;while(++d<e)i(c[d],b)}}function j(a,c,d){if(c){var e=a,f=a,g=c,h=a.parent.children[0],i=e._tree.mod,j=f._tree.mod,k=g._tree.mod,l=h._tree.mod,m;while(g=V(g),e=U(e),g&&e)h=U(h),f=V(f),f._tree.ancestor=a,m=g._tree.prelim+k-e._tree.prelim-i+b(g,e),m>0&&(ba(bb(g,a,d),a,m),i+=m,j+=m),k+=g._tree.mod,i+=e._tree.mod,l+=h._tree.mod,j+=f._tree.mod;g&&!V(f)&&(f._tree.thread=g,f._tree.mod+=k-j),e&&!U(h)&&(h._tree.thread=e,h._tree.mod+=i-l,d=a)}return d}var f=a.call(this,d,e),g=f[0];$(g,function(a,b){a._tree={ancestor:a,prelim:0,mod:0,change:0,shift:0,number:b?b._tree.number+1:0}}),h(g),i(g,-g._tree.prelim);var k=W(g,Y),l=W(g,X),m=W(g,Z),n=k.x-b(k,l)/2,o=l.x+b(l,k)/2,p=m.depth||1;return $(g,function(a){a.x=(a.x-n)/(o-n)*c[0],a.y=a.depth/p*c[1],delete a._tree}),f}var a=d3.layout.hierarchy().sort(null).value(null),b=T,c=[1,1];return d.separation=function(a){return arguments.length?(b=a,d):b},d.size=function(a){return arguments.length?(c=a,d):c},z(d,a)},d3.layout.treemap=function(){function i(a,b){var c=-1,d=a.length,e,f;while(++c<d)f=(e=a[c]).value*(b<0?0:b),e.area=isNaN(f)||f<=0?0:f}function j(a){var b=a.children;if(b&&b.length){var c=e(a),d=[],f=b.slice(),g,h=Infinity,k,n=Math.min(c.dx,c.dy),o;i(f,c.dx*c.dy/a.value),d.area=0;while((o=f.length)>0)d.push(g=f[o-1]),d.area+=g.area,(k=l(d,n))<=h?(f.pop(),h=k):(d.area-=d.pop().area,m(d,n,c,!1),n=Math.min(c.dx,c.dy),d.length=d.area=0,h=Infinity);d.length&&(m(d,n,c,!0),d.length=d.area=0),b.forEach(j)}}function k(a){var b=a.children;if(b&&b.length){var c=e(a),d=b.slice(),f,g=[];i(d,c.dx*c.dy/a.value),g.area=0;while(f=d.pop())g.push(f),g.area+=f.area,f.z!=null&&(m(g,f.z?c.dx:c.dy,c,!d.length),g.length=g.area=0);b.forEach(k)}}function l(a,b){var c=a.area,d,e=0,f=Infinity,g=-1,i=a.length;while(++g<i){if(!(d=a[g].area))continue;d<f&&(f=d),d>e&&(e=d)}return c*=c,b*=b,c?Math.max(b*e*h/c,c/(b*f*h)):Infinity}function m(a,c,d,e){var f=-1,g=a.length,h=d.x,i=d.y,j=c?b(a.area/c):0,k;if(c==d.dx){if(e||j>d.dy)j=j?d.dy:0;while(++f<g)k=a[f],k.x=h,k.y=i,k.dy=j,h+=k.dx=j?b(k.area/j):0;k.z=!0,k.dx+=d.x+d.dx-h,d.y+=j,d.dy-=j}else{if(e||j>d.dx)j=j?d.dx:0;while(++f<g)k=a[f],k.x=h,k.y=i,k.dx=j,i+=k.dy=j?b(k.area/j):0;k.z=!1,k.dy+=d.y+d.dy-i,d.x+=j,d.dx-=j}}function n(b){var d=g||a(b),e=d[0];return e.x=0,e.y=0,e.dx=c[0],e.dy=c[1],g&&a.revalue(e),i([e],e.dx*e.dy/e.value),(g?k:j)(e),f&&(g=d),d}var a=d3.layout.hierarchy(),b=Math.round,c=[1,1],d=null,e=bc,f=!1,g,h=.5*(1+Math.sqrt(5));return n.size=function(a){return arguments.length?(c=a,n):c},n.padding=function(a){function b(b){var c=a.call(n,b,b.depth);return c==null?bc(b):bd(b,typeof c=="number"?[c,c,c,c]:c)}function c(b){return bd(b,a)}if(!arguments.length)return d;var f;return e=(d=a)==null?bc:(f=typeof a)==="function"?b:f==="number"?(a=[a,a,a,a],c):c,n},n.round=function(a){return arguments.length?(b=a?Math.round:Number,n):b!=Number},n.sticky=function(a){return arguments.length?(f=a,g=null,n):f},n.ratio=function(a){return arguments.length?(h=a,n):h},z(n,a)}})();
Rickshaw = {

    namespace: function(namespace, obj) {

        var parts = namespace.split('.');

        // for rudimentary compatibility w/ node
        var root = typeof global != 'undefined' ? global : window;

        var parent = root.Rickshaw;

        for(var i = 1, length = parts.length; i < length; i++) {
            currentPart = parts[i];
            parent[currentPart] = parent[currentPart] || {};
            parent = parent[currentPart];
        }
        return parent;
    },

    keys: function(obj) {
        var keys = [];
        for (var key in obj) keys.push(key);
        return keys;
    },

    extend: function(destination, source) {

        for (var property in source) {
            destination[property] = source[property];
        }
        return destination;
    }
};

/* Adapted from https://github.com/Jakobo/PTClass */

/*
Copyright (c) 2005-2010 Sam Stephenson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
/* Based on Alex Arnell's inheritance implementation. */
/** section: Language
 * class Class
 *
 *  Manages Prototype's class-based OOP system.
 *
 *  Refer to Prototype's web site for a [tutorial on classes and
 *  inheritance](http://prototypejs.org/learn/class-inheritance).
 **/
(function(globalContext) {
    /* ------------------------------------ */
    /* Import from object.js                */
    /* ------------------------------------ */
    var _toString = Object.prototype.toString,
        NULL_TYPE = 'Null',
        UNDEFINED_TYPE = 'Undefined',
        BOOLEAN_TYPE = 'Boolean',
        NUMBER_TYPE = 'Number',
        STRING_TYPE = 'String',
        OBJECT_TYPE = 'Object',
        FUNCTION_CLASS = '[object Function]';
    function isFunction(object) {
        return _toString.call(object) === FUNCTION_CLASS;
    }
    function extend(destination, source) {
        for (var property in source) if (source.hasOwnProperty(property)) // modify protect primitive slaughter
            destination[property] = source[property];
        return destination;
    }
    function keys(object) {
        if (Type(object) !== OBJECT_TYPE) { throw new TypeError(); }
        var results = [];
        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                results.push(property);
            }
        }
        return results;
    }
    function Type(o) {
        switch(o) {
            case null: return NULL_TYPE;
            case (void 0): return UNDEFINED_TYPE;
        }
        var type = typeof o;
        switch(type) {
            case 'boolean': return BOOLEAN_TYPE;
            case 'number':  return NUMBER_TYPE;
            case 'string':  return STRING_TYPE;
        }
        return OBJECT_TYPE;
    }
    function isUndefined(object) {
        return typeof object === "undefined";
    }
    /* ------------------------------------ */
    /* Import from Function.js              */
    /* ------------------------------------ */
    var slice = Array.prototype.slice;
    function argumentNames(fn) {
        var names = fn.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1]
            .replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, '')
            .replace(/\s+/g, '').split(',');
        return names.length == 1 && !names[0] ? [] : names;
    }
    function wrap(fn, wrapper) {
        var __method = fn;
        return function() {
            var a = update([bind(__method, this)], arguments);
            return wrapper.apply(this, a);
        }
    }
    function update(array, args) {
        var arrayLength = array.length, length = args.length;
        while (length--) array[arrayLength + length] = args[length];
        return array;
    }
    function merge(array, args) {
        array = slice.call(array, 0);
        return update(array, args);
    }
    function bind(fn, context) {
        if (arguments.length < 2 && isUndefined(arguments[0])) return this;
        var __method = fn, args = slice.call(arguments, 2);
        return function() {
            var a = merge(args, arguments);
            return __method.apply(context, a);
        }
    }

    /* ------------------------------------ */
    /* Import from Prototype.js             */
    /* ------------------------------------ */
    var emptyFunction = function(){};

    var Class = (function() {

        // Some versions of JScript fail to enumerate over properties, names of which
        // correspond to non-enumerable properties in the prototype chain
        var IS_DONTENUM_BUGGY = (function(){
            for (var p in { toString: 1 }) {
                // check actual property name, so that it works with augmented Object.prototype
                if (p === 'toString') return false;
            }
            return true;
        })();

        function subclass() {
        }
        function create() {
            var parent = null, properties = [].slice.apply(arguments);
            if (isFunction(properties[0]))
                parent = properties.shift();

            function klass() {
                this.initialize.apply(this, arguments);
            }

            extend(klass, Class.Methods);
            klass.superclass = parent;
            klass.subclasses = [];

            if (parent) {
                subclass.prototype = parent.prototype;
                klass.prototype = new subclass;
                try { parent.subclasses.push(klass) } catch(e) {}
            }

            for (var i = 0, length = properties.length; i < length; i++)
                klass.addMethods(properties[i]);

            if (!klass.prototype.initialize)
                klass.prototype.initialize = emptyFunction;

            klass.prototype.constructor = klass;
            return klass;
        }

        function addMethods(source) {
            var ancestor   = this.superclass && this.superclass.prototype,
                properties = keys(source);

            // IE6 doesn't enumerate `toString` and `valueOf` (among other built-in `Object.prototype`) properties,
            // Force copy if they're not Object.prototype ones.
            // Do not copy other Object.prototype.* for performance reasons
            if (IS_DONTENUM_BUGGY) {
                if (source.toString != Object.prototype.toString)
                    properties.push("toString");
                if (source.valueOf != Object.prototype.valueOf)
                    properties.push("valueOf");
            }

            for (var i = 0, length = properties.length; i < length; i++) {
                var property = properties[i], value = source[property];
                if (ancestor && isFunction(value) &&
                    argumentNames(value)[0] == "$super") {
                    var method = value;
                    value = wrap((function(m) {
                        return function() { return ancestor[m].apply(this, arguments); };
                    })(property), method);

                    value.valueOf = bind(method.valueOf, method);
                    value.toString = bind(method.toString, method);
                }
                this.prototype[property] = value;
            }

            return this;
        }

        return {
            create: create,
            Methods: {
                addMethods: addMethods
            }
        };
    })();

    if (globalContext.exports) {
        globalContext.exports.Class = Class;
    }
    else {
        globalContext.Class = Class;
    }
})(Rickshaw);
Rickshaw.namespace('Rickshaw.Compat.ClassList');

Rickshaw.Compat.ClassList = function() {

    /* adapted from http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

    if (typeof document !== "undefined" && !("classList" in document.createElement("a"))) {

        (function (view) {

            "use strict";

            var
                classListProp = "classList"
                , protoProp = "prototype"
                , elemCtrProto = (view.HTMLElement || view.Element)[protoProp]
                , objCtr = Object
                , strTrim = String[protoProp].trim || function () {
                    return this.replace(/^\s+|\s+$/g, "");
                }
                , arrIndexOf = Array[protoProp].indexOf || function (item) {
                    var
                        i = 0
                        , len = this.length
                    ;
                    for (; i < len; i++) {
                        if (i in this && this[i] === item) {
                            return i;
                        }
                    }
                    return -1;
                }
                // Vendors: please allow content code to instantiate DOMExceptions
                , DOMEx = function (type, message) {
                    this.name = type;
                    this.code = DOMException[type];
                    this.message = message;
                }
                , checkTokenAndGetIndex = function (classList, token) {
                    if (token === "") {
                        throw new DOMEx(
                            "SYNTAX_ERR"
                            , "An invalid or illegal string was specified"
                        );
                    }
                    if (/\s/.test(token)) {
                        throw new DOMEx(
                            "INVALID_CHARACTER_ERR"
                            , "String contains an invalid character"
                        );
                    }
                    return arrIndexOf.call(classList, token);
                }
                , ClassList = function (elem) {
                    var
                        trimmedClasses = strTrim.call(elem.className)
                        , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
                        , i = 0
                        , len = classes.length
                    ;
                    for (; i < len; i++) {
                        this.push(classes[i]);
                    }
                    this._updateClassName = function () {
                        elem.className = this.toString();
                    };
                }
                , classListProto = ClassList[protoProp] = []
                , classListGetter = function () {
                    return new ClassList(this);
                }
            ;
            // Most DOMException implementations don't allow calling DOMException's toString()
            // on non-DOMExceptions. Error's toString() is sufficient here.
            DOMEx[protoProp] = Error[protoProp];
            classListProto.item = function (i) {
                return this[i] || null;
            };
            classListProto.contains = function (token) {
                token += "";
                return checkTokenAndGetIndex(this, token) !== -1;
            };
            classListProto.add = function (token) {
                token += "";
                if (checkTokenAndGetIndex(this, token) === -1) {
                    this.push(token);
                    this._updateClassName();
                }
            };
            classListProto.remove = function (token) {
                token += "";
                var index = checkTokenAndGetIndex(this, token);
                if (index !== -1) {
                    this.splice(index, 1);
                    this._updateClassName();
                }
            };
            classListProto.toggle = function (token) {
                token += "";
                if (checkTokenAndGetIndex(this, token) === -1) {
                    this.add(token);
                } else {
                    this.remove(token);
                }
            };
            classListProto.toString = function () {
                return this.join(" ");
            };

            if (objCtr.defineProperty) {
                var classListPropDesc = {
                    get: classListGetter
                    , enumerable: true
                    , configurable: true
                };
                try {
                    objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
                } catch (ex) { // IE 8 doesn't support enumerable:true
                    if (ex.number === -0x7FF5EC54) {
                        classListPropDesc.enumerable = false;
                        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
                    }
                }
            } else if (objCtr[protoProp].__defineGetter__) {
                elemCtrProto.__defineGetter__(classListProp, classListGetter);
            }

        }(self));

    }
};

if ( (typeof RICKSHAW_NO_COMPAT !== "undefined" && !RICKSHAW_NO_COMPAT) || typeof RICKSHAW_NO_COMPAT === "undefined") {
    new Rickshaw.Compat.ClassList();
}
Rickshaw.namespace('Rickshaw.Graph');

Rickshaw.Graph = function(args) {

    this.element = args.element;
    this.series = args.series;

    this.defaults = {
        interpolation: 'cardinal',
        offset: 'zero',
        min: undefined,
        max: undefined
    };

    Rickshaw.keys(this.defaults).forEach( function(k) {
        this[k] = args[k] || this.defaults[k];
    }, this );

    this.window = {};

    this.updateCallbacks = [];

    var self = this;

    this.initialize = function(args) {

        this.validateSeries(args.series);

        this.series.active = function() { return self.series.filter( function(s) { return !s.disabled } ) };

        this.setSize({ width: args.width, height: args.height });

        this.element.classList.add('rickshaw_graph');
        this.vis = d3.select(this.element)
            .append("svg:svg")
            .attr('width', this.width)
            .attr('height', this.height);

        var renderers = [
            Rickshaw.Graph.Renderer.Stack,
            Rickshaw.Graph.Renderer.Line,
            Rickshaw.Graph.Renderer.Bar,
            Rickshaw.Graph.Renderer.Area,
            Rickshaw.Graph.Renderer.ScatterPlot
        ];

        renderers.forEach( function(r) {
            if (!r) return;
            self.registerRenderer(new r( { graph: self } ));
        } );

        this.setRenderer(args.renderer || 'stack', args);
        this.discoverRange();
    };

    this.validateSeries = function(series) {

        if (!(series instanceof Array) && !(series instanceof Rickshaw.Series)) {
            var seriesSignature = Object.prototype.toString.apply(series);
            throw "series is not an array: " + seriesSignature;
        }

        var pointsCount;

        series.forEach( function(s) {

            if (!(s instanceof Object)) {
                throw "series element is not an object: " + s;
            }
            if (!(s.data)) {
                throw "series has no data: " + JSON.stringify(s);
            }
            if (!(s.data instanceof Array)) {
                throw "series data is not an array: " + JSON.stringify(s.data);
            }

            pointsCount = pointsCount || s.data.length;

            if (pointsCount && s.data.length != pointsCount) {
                throw "series cannot have differing numbers of points: " +
                pointsCount	+ " vs " + s.data.length + "; see Rickshaw.Series.zeroFill()";
            }

            var dataTypeX = typeof s.data[0].x;
            var dataTypeY = typeof s.data[0].y;

            if (dataTypeX != 'number' || dataTypeY != 'number') {
                throw "x and y properties of points should be numbers instead of " +
                dataTypeX + " and " + dataTypeY;
            }
        } );
    };

    this.dataDomain = function() {

        // take from the first series
        var data = this.series[0].data;

        return [ data[0].x, data.slice(-1).shift().x ];

    };

    this.discoverRange = function() {

        var domain = this.renderer.domain();

        this.x = d3.scale.linear().domain(domain.x).range([0, this.width]);

        this.y = d3.scale.linear().domain(domain.y).range([this.height, 0]);

        this.y.magnitude = d3.scale.linear()
            .domain([domain.y[0] - domain.y[0], domain.y[1] - domain.y[0]])
            .range([0, this.height]);
    };

    this.render = function() {

        var stackedData = this.stackData();
        this.discoverRange();

        this.renderer.render();

        this.updateCallbacks.forEach( function(callback) {
            callback();
        } );
    };

    this.update = this.render;

    this.stackData = function() {

        var data = this.series.active()
            .map( function(d) { return d.data } )
            .map( function(d) { return d.filter( function(d) { return this._slice(d) }, this ) }, this);

        this.stackData.hooks.data.forEach( function(entry) {
            data = entry.f.apply(self, [data]);
        } );

        var layout = d3.layout.stack();
        layout.offset( self.offset );

        var stackedData = layout(data);

        this.stackData.hooks.after.forEach( function(entry) {
            stackedData = entry.f.apply(self, [data]);
        } );

        var i = 0;
        this.series.forEach( function(series) {
            if (series.disabled) return;
            series.stack = stackedData[i++];
        } );

        this.stackedData = stackedData;
        return stackedData;
    };

    this.stackData.hooks = { data: [], after: [] };

    this._slice = function(d) {

        if (this.window.xMin || this.window.xMax) {

            var isInRange = true;

            if (this.window.xMin && d.x < this.window.xMin) isInRange = false;
            if (this.window.xMax && d.x > this.window.xMax) isInRange = false;

            return isInRange;
        }

        return true;
    };

    this.onUpdate = function(callback) {
        this.updateCallbacks.push(callback);
    };

    this.registerRenderer = function(renderer) {
        this._renderers = this._renderers || {};
        this._renderers[renderer.name] = renderer;
    };

    this.configure = function(args) {

        if (args.width || args.height) {
            this.setSize(args);
        }

        Rickshaw.keys(this.defaults).forEach( function(k) {
            this[k] = k in args ? args[k]
                : k in this ? this[k]
                    : this.defaults[k];
        }, this );

        this.setRenderer(args.renderer || this.renderer.name, args);
    };

    this.setRenderer = function(name, args) {

        if (!this._renderers[name]) {
            throw "couldn't find renderer " + name;
        }
        this.renderer = this._renderers[name];

        if (typeof args == 'object') {
            this.renderer.configure(args);
        }
    };

    this.setSize = function(args) {

        args = args || {};

        if (typeof window !== undefined) {
            var style = window.getComputedStyle(this.element, null);
            var elementWidth = parseInt(style.getPropertyValue('width'));
            var elementHeight = parseInt(style.getPropertyValue('height'));
        }

        this.width = args.width || elementWidth || 400;
        this.height = args.height || elementHeight || 250;

        this.vis && this.vis
            .attr('width', this.width)
            .attr('height', this.height);
    };

    this.initialize(args);
};
Rickshaw.namespace('Rickshaw.Fixtures.Color');

Rickshaw.Fixtures.Color = function() {

    this.schemes = {};

    this.schemes.spectrum14 = [
        '#ecb796',
        '#dc8f70',
        '#b2a470',
        '#92875a',
        '#716c49',
        '#d2ed82',
        '#bbe468',
        '#a1d05d',
        '#e7cbe6',
        '#d8aad6',
        '#a888c2',
        '#9dc2d3',
        '#649eb9',
        '#387aa3'
    ].reverse();

    this.schemes.spectrum2000 = [
        '#57306f',
        '#514c76',
        '#646583',
        '#738394',
        '#6b9c7d',
        '#84b665',
        '#a7ca50',
        '#bfe746',
        '#e2f528',
        '#fff726',
        '#ecdd00',
        '#d4b11d',
        '#de8800',
        '#de4800',
        '#c91515',
        '#9a0000',
        '#7b0429',
        '#580839',
        '#31082b'
    ];

    this.schemes.spectrum2001 = [
        '#2f243f',
        '#3c2c55',
        '#4a3768',
        '#565270',
        '#6b6b7c',
        '#72957f',
        '#86ad6e',
        '#a1bc5e',
        '#b8d954',
        '#d3e04e',
        '#ccad2a',
        '#cc8412',
        '#c1521d',
        '#ad3821',
        '#8a1010',
        '#681717',
        '#531e1e',
        '#3d1818',
        '#320a1b'
    ];

    this.schemes.classic9 = [
        '#423d4f',
        '#4a6860',
        '#848f39',
        '#a2b73c',
        '#ddcb53',
        '#c5a32f',
        '#7d5836',
        '#963b20',
        '#7c2626',
        '#491d37',
        '#2f254a'
    ].reverse();

    this.schemes.httpStatus = {
        503: '#ea5029',
        502: '#d23f14',
        500: '#bf3613',
        410: '#efacea',
        409: '#e291dc',
        403: '#f457e8',
        408: '#e121d2',
        401: '#b92dae',
        405: '#f47ceb',
        404: '#a82a9f',
        400: '#b263c6',
        301: '#6fa024',
        302: '#87c32b',
        307: '#a0d84c',
        304: '#28b55c',
        200: '#1a4f74',
        206: '#27839f',
        201: '#52adc9',
        202: '#7c979f',
        203: '#a5b8bd',
        204: '#c1cdd1'
    };

    this.schemes.colorwheel = [
        '#b5b6a9',
        '#858772',
        '#785f43',
        '#96557e',
        '#4682b4',
        '#65b9ac',
        '#73c03a',
        '#cb513a'
    ].reverse();

    this.schemes.cool = [
        '#5e9d2f',
        '#73c03a',
        '#4682b4',
        '#7bc3b8',
        '#a9884e',
        '#c1b266',
        '#a47493',
        '#c09fb5'
    ];

    this.schemes.munin = [
        '#00cc00',
        '#0066b3',
        '#ff8000',
        '#ffcc00',
        '#330099',
        '#990099',
        '#ccff00',
        '#ff0000',
        '#808080',
        '#008f00',
        '#00487d',
        '#b35a00',
        '#b38f00',
        '#6b006b',
        '#8fb300',
        '#b30000',
        '#bebebe',
        '#80ff80',
        '#80c9ff',
        '#ffc080',
        '#ffe680',
        '#aa80ff',
        '#ee00cc',
        '#ff8080',
        '#666600',
        '#ffbfff',
        '#00ffcc',
        '#cc6699',
        '#999900'
    ];
};
Rickshaw.namespace('Rickshaw.Fixtures.RandomData');

Rickshaw.Fixtures.RandomData = function(timeInterval) {

    var addData;
    timeInterval = timeInterval || 1;

    var lastRandomValue = 200;

    var timeBase = Math.floor(new Date().getTime() / 1000);

    this.addData = function(data) {

        var randomValue = Math.random() * 100 + 15 + lastRandomValue;
        var index = data[0].length;

        var counter = 1;

        data.forEach( function(series) {
            var randomVariance = Math.random() * 20;
            var v = randomValue / 25  + counter++
                + (Math.cos((index * counter * 11) / 960) + 2) * 15
                + (Math.cos(index / 7) + 2) * 7
                + (Math.cos(index / 17) + 2) * 1;

            series.push( { x: (index * timeInterval) + timeBase, y: v + randomVariance } );
        } );

        lastRandomValue = randomValue * .85;
    }
};

Rickshaw.namespace('Rickshaw.Fixtures.Time');

Rickshaw.Fixtures.Time = function() {

    var tzOffset = new Date().getTimezoneOffset() * 60;

    var self = this;

    this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    this.units = [
        {
            name: 'decade',
            seconds: 86400 * 365.25 * 10,
            formatter: function(d) { return (parseInt(d.getUTCFullYear() / 10) * 10) }
        }, {
            name: 'year',
            seconds: 86400 * 365.25,
            formatter: function(d) { return d.getUTCFullYear() }
        }, {
            name: 'month',
            seconds: 86400 * 30.5,
            formatter: function(d) { return self.months[d.getUTCMonth()] }
        }, {
            name: 'week',
            seconds: 86400 * 7,
            formatter: function(d) { return self.formatDate(d) }
        }, {
            name: 'day',
            seconds: 86400,
            formatter: function(d) { return d.getUTCDate() }
        }, {
            name: '6 hour',
            seconds: 3600 * 6,
            formatter: function(d) { return self.formatTime(d) }
        }, {
            name: 'hour',
            seconds: 3600,
            formatter: function(d) { return self.formatTime(d) }
        }, {
            name: '15 minute',
            seconds: 60 * 15,
            formatter: function(d) { return self.formatTime(d) }
        }, {
            name: 'minute',
            seconds: 60,
            formatter: function(d) { return d.getUTCMinutes() }
        }, {
            name: '5 second',
            seconds: 5,
            formatter: function(d) { return d.getUTCSeconds() + ' YEARS' }
        }, {
            name: 'second',
            seconds: 1,
            formatter: function(d) { return d.getUTCSeconds() + ' YEARS' }
        }
    ];

    this.unit = function(unitName) {
        return this.units.filter( function(unit) { return unitName == unit.name } ).shift();
    };

    this.formatDate = function(d) {
        return d.toUTCString().match(/, (\w+ \w+ \w+)/)[1];
    };

    this.formatTime = function(d) {
        return d.toUTCString().match(/(\d+:\d+):/)[1];
    };

    this.ceil = function(time, unit) {

        if (unit.name == 'month') {

            var nearFuture = new Date((time + unit.seconds - 1) * 1000);

            var rounded = new Date(0);
            rounded.setUTCFullYear(nearFuture.getUTCFullYear());
            rounded.setUTCMonth(nearFuture.getUTCMonth());
            rounded.setUTCDate(1);
            rounded.setUTCHours(0);
            rounded.setUTCMinutes(0);
            rounded.setUTCSeconds(0);
            rounded.setUTCMilliseconds(0);

            return rounded.getTime() / 1000;
        }

        if (unit.name == 'year') {

            var nearFuture = new Date((time + unit.seconds - 1) * 1000);

            var rounded = new Date(0);
            rounded.setUTCFullYear(nearFuture.getUTCFullYear());
            rounded.setUTCMonth(0);
            rounded.setUTCDate(1);
            rounded.setUTCHours(0);
            rounded.setUTCMinutes(0);
            rounded.setUTCSeconds(0);
            rounded.setUTCMilliseconds(0);

            return rounded.getTime() / 1000;
        }

        return Math.ceil(time / unit.seconds) * unit.seconds;
    };
};
Rickshaw.namespace('Rickshaw.Fixtures.Number');

Rickshaw.Fixtures.Number.formatKMBT = function(y) {
    if (y >= 1000000000000)   { return y / 1000000000000 + "T" }
    else if (y >= 1000000000) { return y / 1000000000 + "B" }
    else if (y >= 1000000)    { return y / 1000000 + "M" }
    else if (y >= 1000)       { return y / 1000 + "K" }
    else if (y < 1 && y > 0)  { return y.toFixed(2) }
    else if (y == 0)          { return '' }
    else                      { return y }
};

Rickshaw.Fixtures.Number.formatBase1024KMGTP = function(y) {
    if (y >= 1125899906842624)  { return y / 1125899906842624 + "P" }
    else if (y >= 1099511627776){ return y / 1099511627776 + "T" }
    else if (y >= 1073741824)   { return y / 1073741824 + "G" }
    else if (y >= 1048576)      { return y / 1048576 + "M" }
    else if (y >= 1024)         { return y / 1024 + "K" }
    else if (y < 1 && y > 0)    { return y.toFixed(2) }
    else if (y == 0)            { return '' }
    else                        { return y }
};
Rickshaw.namespace("Rickshaw.Color.Palette");

Rickshaw.Color.Palette = function(args) {

    var color = new Rickshaw.Fixtures.Color();

    args = args || {};
    this.schemes = {};

    this.scheme = color.schemes[args.scheme] || args.scheme || color.schemes.colorwheel;
    this.runningIndex = 0;
    this.generatorIndex = 0;

    if (args.interpolatedStopCount) {
        var schemeCount = this.scheme.length - 1;
        var i, j, scheme = [];
        for (i = 0; i < schemeCount; i++) {
            scheme.push(this.scheme[i]);
            var generator = d3.interpolateHsl(this.scheme[i], this.scheme[i + 1]);
            for (j = 1; j < args.interpolatedStopCount; j++) {
                scheme.push(generator((1 / args.interpolatedStopCount) * j));
            }
        }
        scheme.push(this.scheme[this.scheme.length - 1]);
        this.scheme = scheme;
    }
    this.rotateCount = this.scheme.length;

    this.color = function(key) {
        return this.scheme[key] || this.scheme[this.runningIndex++] || this.interpolateColor() || '#808080';
    };

    this.interpolateColor = function() {
        if (!Array.isArray(this.scheme)) return;
        var color;
        if (this.generatorIndex == this.rotateCount * 2 - 1) {
            color = d3.interpolateHsl(this.scheme[this.generatorIndex], this.scheme[0])(0.5);
            this.generatorIndex = 0;
            this.rotateCount *= 2;
        } else {
            color = d3.interpolateHsl(this.scheme[this.generatorIndex], this.scheme[this.generatorIndex + 1])(0.5);
            this.generatorIndex++;
        }
        this.scheme.push(color);
        return color;
    };

};
Rickshaw.namespace('Rickshaw.Graph.Ajax');

Rickshaw.Graph.Ajax = Rickshaw.Class.create( {

    initialize: function(args) {

        this.dataURL = args.dataURL;

        this.onData = args.onData || function(d) { return d };
        this.onComplete = args.onComplete || function() {};
        this.onError = args.onError || function() {};

        this.args = args; // pass through to Rickshaw.Graph

        this.request();
    },

    request: function() {

        $.ajax( {
            url: this.dataURL,
            dataType: 'json',
            success: this.success.bind(this),
            error: this.error.bind(this)
        } );
    },

    error: function() {

        console.log("error loading dataURL: " + this.dataURL);
        this.onError(this);
    },

    success: function(data, status) {

        data = this.onData(data);
        this.args.series = this._splice({ data: data, series: this.args.series });

        this.graph = new Rickshaw.Graph(this.args);
        this.graph.render();

        this.onComplete(this);
    },

    _splice: function(args) {

        var data = args.data;
        var series = args.series;

        if (!args.series) return data;

        series.forEach( function(s) {

            var seriesKey = s.key || s.name;
            if (!seriesKey) throw "series needs a key or a name";

            data.forEach( function(d) {

                var dataKey = d.key || d.name;
                if (!dataKey) throw "data needs a key or a name";

                if (seriesKey == dataKey) {
                    var properties = ['color', 'name', 'data'];
                    properties.forEach( function(p) {
                        s[p] = s[p] || d[p];
                    } );
                }
            } );
        } );

        return series;
    }
} );

Rickshaw.namespace('Rickshaw.Graph.Annotate');

Rickshaw.Graph.Annotate = function(args) {

    var graph = this.graph = args.graph;
    this.elements = { timeline: args.element };

    var self = this;

    this.data = {};

    this.elements.timeline.classList.add('rickshaw_annotation_timeline');

    this.add = function(time, content, end_time) {
        self.data[time] = self.data[time] || {'boxes': []};
        self.data[time].boxes.push({content: content, end: end_time});
    };

    this.update = function() {

        Rickshaw.keys(self.data).forEach( function(time) {

            var annotation = self.data[time];
            var left = self.graph.x(time);

            if (left < 0 || left > self.graph.x.range()[1]) {
                if (annotation.element) {
                    annotation.line.classList.add('offscreen');
                    annotation.element.style.display = 'none';
                }

                annotation.boxes.forEach( function(box) {
                    if ( box.rangeElement ) box.rangeElement.classList.add('offscreen');
                });

                return;
            }

            if (!annotation.element) {
                var element = annotation.element = document.createElement('div');
                element.classList.add('annotation');
                this.elements.timeline.appendChild(element);
                element.addEventListener('click', function(e) {
                    element.classList.toggle('active');
                    annotation.line.classList.toggle('active');
                    annotation.boxes.forEach( function(box) {
                        if ( box.rangeElement ) box.rangeElement.classList.toggle('active');
                    });
                }, false);

            }

            annotation.element.style.left = left + 'px';
            annotation.element.style.display = 'block';

            annotation.boxes.forEach( function(box) {


                var element = box.element;

                if (!element) {
                    element = box.element = document.createElement('div');
                    element.classList.add('content');
                    element.innerHTML = box.content;
                    annotation.element.appendChild(element);

                    annotation.line = document.createElement('div');
                    annotation.line.classList.add('annotation_line');
                    self.graph.element.appendChild(annotation.line);

                    if ( box.end ) {
                        box.rangeElement = document.createElement('div');
                        box.rangeElement.classList.add('annotation_range');
                        self.graph.element.appendChild(box.rangeElement);
                    }

                }

                if ( box.end ) {

                    var annotationRangeStart = left;
                    var annotationRangeEnd   = Math.min( self.graph.x(box.end), self.graph.x.range()[1] );

                    // annotation makes more sense at end
                    if ( annotationRangeStart > annotationRangeEnd ) {
                        annotationRangeEnd   = left;
                        annotationRangeStart = Math.max( self.graph.x(box.end), self.graph.x.range()[0] );
                    }

                    var annotationRangeWidth = annotationRangeEnd - annotationRangeStart;

                    box.rangeElement.style.left  = annotationRangeStart + 'px';
                    box.rangeElement.style.width = annotationRangeWidth + 'px';

                    box.rangeElement.classList.remove('offscreen');
                }

                annotation.line.classList.remove('offscreen');
                annotation.line.style.left = left + 'px';
            } );
        }, this );
    };

    this.graph.onUpdate( function() { self.update() } );
};
Rickshaw.namespace('Rickshaw.Graph.Axis.Time');

Rickshaw.Graph.Axis.Time = function(args) {

    var self = this;

    this.graph = args.graph;
    this.elements = [];
    this.ticksTreatment = args.ticksTreatment || 'plain';
    this.fixedTimeUnit = args.timeUnit;

    var time = new Rickshaw.Fixtures.Time();

    this.appropriateTimeUnit = function() {

        var unit;
        var units = time.units;

        var domain = this.graph.x.domain();
        var rangeSeconds = domain[1] - domain[0];

        units.forEach( function(u) {
            if (Math.floor(rangeSeconds / u.seconds) >= 2) {
                unit = unit || u;
            }
        } );

        return (unit || time.units[time.units.length - 1]);
    };

    this.tickOffsets = function() {

        var domain = this.graph.x.domain();

        var unit = this.fixedTimeUnit || this.appropriateTimeUnit();
        var count = Math.ceil((domain[1] - domain[0]) / unit.seconds);

        var runningTick = domain[0];

        var offsets = [];

        for (var i = 0; i < count; i++) {

            tickValue = time.ceil(runningTick, unit);
            runningTick = tickValue + unit.seconds / 2;

            offsets.push( { value: tickValue, unit: unit } );
        }

        return offsets;
    };

    this.render = function() {

        this.elements.forEach( function(e) {
            e.parentNode.removeChild(e);
        } );

        this.elements = [];

        var offsets = this.tickOffsets();

        offsets.forEach( function(o) {

            if (self.graph.x(o.value) > self.graph.x.range()[1]) return;

            var element = document.createElement('div');
            element.style.left = self.graph.x(o.value) + 'px';
            element.classList.add('x_tick');
            element.classList.add(self.ticksTreatment);

            var title = document.createElement('div');
            title.classList.add('title');
            title.innerHTML = o.unit.formatter(new Date(o.value * 1000));
            element.appendChild(title);

            self.graph.element.appendChild(element);
            self.elements.push(element);

        } );
    };

    this.graph.onUpdate( function() { self.render() } );
};

Rickshaw.namespace('Rickshaw.Graph.Axis.Y');

Rickshaw.Graph.Axis.Y = function(args) {

    var self = this;
    var berthRate = 0.10;

    this.initialize = function(args) {

        this.graph = args.graph;
        this.orientation = args.orientation || 'right';

        var pixelsPerTick = args.pixelsPerTick || 75;
        this.ticks = args.ticks || Math.floor(this.graph.height / pixelsPerTick);
        this.tickSize = args.tickSize || 4;
        this.ticksTreatment = args.ticksTreatment || 'plain';

        if (args.element) {

            this.element = args.element;
            this.vis = d3.select(args.element)
                .append("svg:svg")
                .attr('class', 'rickshaw_graph y_axis');

            this.element = this.vis[0][0];
            this.element.style.position = 'relative';

            this.setSize({ width: args.width, height: args.height });

        } else {
            this.vis = this.graph.vis;
        }

        this.graph.onUpdate( function() { self.render() } );
    };

    this.setSize = function(args) {

        args = args || {};

        if (!this.element) return;

        if (typeof window !== 'undefined') {

            var style = window.getComputedStyle(this.element.parentNode, null);
            var elementWidth = parseInt(style.getPropertyValue('width'));

            if (!args.auto) {
                var elementHeight = parseInt(style.getPropertyValue('height'));
            }
        }

        this.width = args.width || elementWidth || this.graph.width * berthRate;
        this.height = args.height || elementHeight || this.graph.height;

        this.vis
            .attr('width', this.width)
            .attr('height', this.height * (1 + berthRate));

        var berth = this.height * berthRate;
        this.element.style.top = -1 * berth + 'px';
    };

    this.render = function() {

        if (this.graph.height !== this._renderHeight) this.setSize({ auto: true });

        var axis = d3.svg.axis().scale(this.graph.y).orient(this.orientation);
        axis.tickFormat( args.tickFormat || function(y) { return y } );

        if (this.orientation == 'left') {
            var berth = this.height * berthRate;
            var transform = 'translate(' + this.width + ', ' + berth + ')';
        }

        if (this.element) {
            this.vis.selectAll('*').remove();
        }

        this.vis
            .append("svg:g")
            .attr("class", ["y_ticks", this.ticksTreatment].join(" "))
            .attr("transform", transform)
            .call(axis.ticks(this.ticks).tickSubdivide(0).tickSize(this.tickSize));

        var gridSize = (this.orientation == 'right' ? 1 : -1) * this.graph.width;

        this.graph.vis
            .append("svg:g")
            .attr("class", "y_grid")
            .call(axis.ticks(this.ticks).tickSubdivide(0).tickSize(gridSize));

        this._renderHeight = this.graph.height;
    };

    this.initialize(args);
};

Rickshaw.namespace('Rickshaw.Graph.Behavior.Series.Highlight');

Rickshaw.Graph.Behavior.Series.Highlight = function(args) {

    this.graph = args.graph;
    this.legend = args.legend;

    var self = this;

    var colorSafe = {};

    this.addHighlightEvents = function (l) {
        l.element.addEventListener( 'mouseover', function(e) {

            self.legend.lines.forEach( function(line) {
                if (l === line) return;
                colorSafe[line.series.name] = colorSafe[line.series.name] || line.series.color;
                line.series.color = d3.interpolateRgb(line.series.color, d3.rgb('#d8d8d8'))(0.8).toString();
            } );

            self.graph.update();

        }, false );

        l.element.addEventListener( 'mouseout', function(e) {

            self.legend.lines.forEach( function(line) {
                if (colorSafe[line.series.name]) {
                    line.series.color = colorSafe[line.series.name];
                }
            } );

            self.graph.update();

        }, false );
    };

    if (this.legend) {
        this.legend.lines.forEach( function(l) {
            self.addHighlightEvents(l);
        } );
    }

};
Rickshaw.namespace('Rickshaw.Graph.Behavior.Series.Order');

Rickshaw.Graph.Behavior.Series.Order = function(args) {

    this.graph = args.graph;
    this.legend = args.legend;

    var self = this;

    $(function() {
        $(self.legend.list).sortable( {
            containment: 'parent',
            tolerance: 'pointer',
            update: function( event, ui ) {
                var series = [];
                $(self.legend.list).find('li').each( function(index, item) {
                    if (!item.series) return;
                    series.push(item.series);
                } );

                for (var i = self.graph.series.length - 1; i >= 0; i--) {
                    self.graph.series[i] = series.shift();
                }

                self.graph.update();
            }
        } );
        $(self.legend.list).disableSelection();
    });

    //hack to make jquery-ui sortable behave
    this.graph.onUpdate( function() {
        var h = window.getComputedStyle(self.legend.element).height;
        self.legend.element.style.height = h;
    } );
};
Rickshaw.namespace('Rickshaw.Graph.Behavior.Series.Toggle');

Rickshaw.Graph.Behavior.Series.Toggle = function(args) {

    this.graph = args.graph;
    this.legend = args.legend;

    var self = this;

    this.addAnchor = function(line) {
        var anchor = document.createElement('a');
        anchor.innerHTML = '&#10004;';
        anchor.classList.add('action');
        line.element.insertBefore(anchor, line.element.firstChild);

        anchor.onclick = function(e) {
            if (line.series.disabled) {
                line.series.enable();
                line.element.classList.remove('disabled');
            } else {
                line.series.disable();
                line.element.classList.add('disabled');
            }
        };

        var label = line.element.getElementsByTagName('span')[0];
        label.onclick = function(e){

            var disableAllOtherLines = line.series.disabled;
            if ( ! disableAllOtherLines ) {
                for ( var i = 0; i < self.legend.lines.length; i++ ) {
                    var l = self.legend.lines[i];
                    if ( line.series === l.series ) {
                        // noop
                    } else if ( l.series.disabled ) {
                        // noop
                    } else {
                        disableAllOtherLines = true;
                        break;
                    }
                }
            }

            // show all or none
            if ( disableAllOtherLines ) {

                // these must happen first or else we try ( and probably fail ) to make a no line graph
                line.series.enable();
                line.element.classList.remove('disabled');

                self.legend.lines.forEach(function(l){
                    if ( line.series === l.series ) {
                        // noop
                    } else {
                        l.series.disable();
                        l.element.classList.add('disabled');
                    }
                });

            } else {

                self.legend.lines.forEach(function(l){
                    l.series.enable();
                    l.element.classList.remove('disabled');
                });

            }

        };

    };

    if (this.legend) {

        $(this.legend.list).sortable( {
            start: function(event, ui) {
                ui.item.bind('no.onclick',
                    function(event) {
                        event.preventDefault();
                    }
                );
            },
            stop: function(event, ui) {
                setTimeout(function(){
                    ui.item.unbind('no.onclick');
                }, 250);
            }
        });

        this.legend.lines.forEach( function(l) {
            self.addAnchor(l);
        } );
    }

    this._addBehavior = function() {

        this.graph.series.forEach( function(s) {

            s.disable = function() {

                if (self.graph.series.length <= 1) {
                    throw('only one series left');
                }

                s.disabled = true;
                self.graph.update();
            };

            s.enable = function() {
                s.disabled = false;
                self.graph.update();
            };
        } );
    };
    this._addBehavior();

    this.updateBehaviour = function () { this._addBehavior() };

};
Rickshaw.namespace('Rickshaw.Graph.HoverDetail');

Rickshaw.Graph.HoverDetail = Rickshaw.Class.create({

    initialize: function(args) {

        var graph = this.graph = args.graph;

        this.xFormatter = args.xFormatter || function(x) {
            return new Date( x * 1000 ).toUTCString();
        };

        this.yFormatter = args.yFormatter || function(y) {
            return y.toFixed(2);
        };

        var element = this.element = document.createElement('div');
        element.className = 'detail';

        this.visible = true;
        graph.element.appendChild(element);

        this.lastEvent = null;
        this._addListeners();

        this.onShow = args.onShow;
        this.onHide = args.onHide;
        this.onRender = args.onRender;

        this.formatter = args.formatter || this.formatter;
    },

    formatter: function(series, x, y, formattedX, formattedY, d) {
        return series.name + ':&nbsp;' + formattedY;
    },

    update: function(e) {

        e = e || this.lastEvent;
        if (!e) return;
        this.lastEvent = e;

        if (!e.target.nodeName.match(/^(path|svg|rect)$/)) return;

        var graph = this.graph;

        var eventX = e.offsetX || e.layerX;
        var eventY = e.offsetY || e.layerY;

        var domainX = graph.x.invert(eventX);
        var stackedData = graph.stackedData;

        var topSeriesData = stackedData.slice(-1).shift();

        var domainIndexScale = d3.scale.linear()
            .domain([topSeriesData[0].x, topSeriesData.slice(-1).shift().x])
            .range([0, topSeriesData.length]);

        var approximateIndex = Math.floor(domainIndexScale(domainX));
        var dataIndex = Math.min(approximateIndex || 0, stackedData[0].length - 1);

        for (var i = approximateIndex; i < stackedData[0].length - 1;) {

            if (!stackedData[0][i] || !stackedData[0][i + 1]) {
                break;
            }

            if (stackedData[0][i].x <= domainX && stackedData[0][i + 1].x > domainX) {
                dataIndex = i;
                break;
            }
            if (stackedData[0][i + 1] <= domainX) { i++ } else { i-- }
        }

        var domainX = stackedData[0][dataIndex].x;
        var formattedXValue = this.xFormatter(domainX);
        var graphX = graph.x(domainX);
        var order = 0;

        var detail = graph.series.active()
            .map( function(s) { return { order: order++, series: s, name: s.name, value: s.stack[dataIndex] } } );

        var activeItem;

        var sortFn = function(a, b) {
            return (a.value.y0 + a.value.y) - (b.value.y0 + b.value.y);
        };

        var domainMouseY = graph.y.magnitude.invert(graph.element.offsetHeight - eventY);

        detail.sort(sortFn).forEach( function(d) {

            d.formattedYValue = (this.yFormatter.constructor == Array) ?
                this.yFormatter[detail.indexOf(d)](d.value.y) :
                this.yFormatter(d.value.y);

            d.graphX = graphX;
            d.graphY = graph.y(d.value.y0 + d.value.y);

            if (domainMouseY > d.value.y0 && domainMouseY < d.value.y0 + d.value.y && !activeItem) {
                activeItem = d;
                d.active = true;
            }

        }, this );

        this.element.innerHTML = '';
        this.element.style.left = graph.x(domainX) + 'px';

        if (this.visible) {
            this.render( {
                detail: detail,
                domainX: domainX,
                formattedXValue: formattedXValue,
                mouseX: eventX,
                mouseY: eventY
            } );
        }
    },

    hide: function() {
        this.visible = false;
        this.element.classList.add('inactive');

        if (typeof this.onHide == 'function') {
            this.onHide();
        }
    },

    show: function() {
        this.visible = true;
        this.element.classList.remove('inactive');

        if (typeof this.onShow == 'function') {
            this.onShow();
        }
    },

    render: function(args) {

        var detail = args.detail;
        var domainX = args.domainX;

        var mouseX = args.mouseX;
        var mouseY = args.mouseY;

        var formattedXValue = args.formattedXValue;

        var xLabel = document.createElement('div');
        xLabel.className = 'x_label';
        xLabel.innerHTML = formattedXValue;
        this.element.appendChild(xLabel);

        detail.forEach( function(d) {

            var item = document.createElement('div');
            item.className = 'item';
            item.innerHTML = this.formatter(d.series, domainX, d.value.y, formattedXValue, d.formattedYValue, d);
            item.style.top = this.graph.y(d.value.y0 + d.value.y) + 'px';

            this.element.appendChild(item);

            var dot = document.createElement('div');
            dot.className = 'dot';
            dot.style.top = item.style.top;
            dot.style.borderColor = d3.interpolateRgb(d.series.color, 'black')(0.2);

            this.element.appendChild(dot);

            if (d.active) {
                item.className = 'item active';
                dot.className = 'dot active';
            }

        }, this );

        this.show();

        if (typeof this.onRender == 'function') {
            this.onRender(args);
        }
    },

    _addListeners: function() {

        this.graph.element.addEventListener(
            'mousemove',
            function(e) {
                this.visible = true;
                this.update(e)
            }.bind(this),
            false
        );

        this.graph.onUpdate( function() { this.update() }.bind(this) );

        this.graph.element.addEventListener(
            'mouseout',
            function(e) {
                if (e.relatedTarget && !(e.relatedTarget.compareDocumentPosition(this.graph.element) & Node.DOCUMENT_POSITION_CONTAINS)) {
                    this.hide();
                }
            }.bind(this),
            false
        );
    }
});

Rickshaw.namespace('Rickshaw.Graph.JSONP');

Rickshaw.Graph.JSONP = Rickshaw.Class.create( Rickshaw.Graph.Ajax, {

    request: function() {

        $.ajax( {
            url: this.dataURL,
            dataType: 'jsonp',
            success: this.success.bind(this),
            error: this.error.bind(this)
        } );
    }
} );
Rickshaw.namespace('Rickshaw.Graph.Legend');

Rickshaw.Graph.Legend = function(args) {

    var element = this.element = args.element;
    var graph = this.graph = args.graph;

    var self = this;

    element.classList.add('rickshaw_legend');

    var list = this.list = document.createElement('ul');
    element.appendChild(list);

    var series = graph.series
        .map( function(s) { return s } )
        .reverse();

    this.lines = [];

    this.addLine = function (series) {
        var line = document.createElement('li');
        line.className = 'line';

        var swatch = document.createElement('div');
        swatch.className = 'swatch';
        swatch.style.backgroundColor = series.color;

        line.appendChild(swatch);

        var label = document.createElement('span');
        label.className = 'label';
        label.innerHTML = series.name;

        line.appendChild(label);
        list.appendChild(line);

        line.series = series;

        if (series.noLegend) {
            line.style.display = 'none';
        }

        var _line = { element: line, series: series };
        if (self.shelving) {
            self.shelving.addAnchor(_line);
            self.shelving.updateBehaviour();
        }
        if (self.highlighter) {
            self.highlighter.addHighlightEvents(_line);
        }
        self.lines.push(_line);
    };

    series.forEach( function(s) {
        self.addLine(s);
    } );

    graph.onUpdate( function() {} );
};
Rickshaw.namespace('Rickshaw.Graph.RangeSlider');

Rickshaw.Graph.RangeSlider = function(args) {

    var element = this.element = args.element;
    var graph = this.graph = args.graph;

    $( function() {
        $(element).slider( {

            range: true,
            min: graph.dataDomain()[0],
            max: graph.dataDomain()[1],
            values: [
                graph.dataDomain()[0],
                graph.dataDomain()[1]
            ],
            slide: function( event, ui ) {

                graph.window.xMin = ui.values[0];
                graph.window.xMax = ui.values[1];
                graph.update();

                // if we're at an extreme, stick there
                if (graph.dataDomain()[0] == ui.values[0]) {
                    graph.window.xMin = undefined;
                }
                if (graph.dataDomain()[1] == ui.values[1]) {
                    graph.window.xMax = undefined;
                }
            }
        } );
    } );

    element[0].style.width = graph.width + 'px';

    graph.onUpdate( function() {

        var values = $(element).slider('option', 'values');

        $(element).slider('option', 'min', graph.dataDomain()[0]);
        $(element).slider('option', 'max', graph.dataDomain()[1]);

        if (graph.window.xMin == undefined) {
            values[0] = graph.dataDomain()[0];
        }
        if (graph.window.xMax == undefined) {
            values[1] = graph.dataDomain()[1];
        }

        $(element).slider('option', 'values', values);

    } );
};

Rickshaw.namespace("Rickshaw.Graph.Renderer");

Rickshaw.Graph.Renderer = Rickshaw.Class.create( {

    initialize: function(args) {
        this.graph = args.graph;
        this.tension = args.tension || this.tension;
        this.graph.unstacker = this.graph.unstacker || new Rickshaw.Graph.Unstacker( { graph: this.graph } );
        this.configure(args);
    },

    seriesPathFactory: function() {
        //implement in subclass
    },

    seriesStrokeFactory: function() {
        // implement in subclass
    },

    defaults: function() {
        return {
            tension: 0.8,
            strokeWidth: 2,
            unstack: true,
            padding: { top: 0.01, right: 0, bottom: 0.01, left: 0 },
            stroke: false,
            fill: false
        };
    },

    domain: function() {

        var values = [];
        var stackedData = this.graph.stackedData || this.graph.stackData();

        var topSeriesData = this.unstack ? stackedData : [ stackedData.slice(-1).shift() ];

        topSeriesData.forEach( function(series) {
            series.forEach( function(d) {
                values.push( d.y + d.y0 );
            } );
        } );

        var xMin = stackedData[0][0].x;
        var xMax = stackedData[0][ stackedData[0].length - 1 ].x;

        xMin -= (xMax - xMin) * this.padding.left;
        xMax += (xMax - xMin) * this.padding.right;

        var yMin = this.graph.min === 'auto' ? d3.min( values ) : this.graph.min || 0;
        var yMax = this.graph.max || d3.max( values );

        if (this.graph.min === 'auto' || yMin < 0) {
            yMin -= (yMax - yMin) * this.padding.bottom;
        }

        if (this.graph.max === undefined) {
            yMax += (yMax - yMin) * this.padding.top;
        }

        return { x: [xMin, xMax], y: [yMin, yMax] };
    },

    render: function() {

        var graph = this.graph;

        graph.vis.selectAll('*').remove();

        var nodes = graph.vis.selectAll("path")
            .data(this.graph.stackedData)
            .enter().append("svg:path")
            .attr("d", this.seriesPathFactory());

        var i = 0;
        graph.series.forEach( function(series) {
            if (series.disabled) return;
            series.path = nodes[0][i++];
            this._styleSeries(series);
        }, this );
    },

    _styleSeries: function(series) {

        var fill = this.fill ? series.color : 'none';
        var stroke = this.stroke ? series.color : 'none';

        series.path.setAttribute('fill', fill);
        series.path.setAttribute('stroke', stroke);
        series.path.setAttribute('stroke-width', this.strokeWidth);
        series.path.setAttribute('class', series.className);
    },

    configure: function(args) {

        args = args || {};

        Rickshaw.keys(this.defaults()).forEach( function(key) {

            if (!args.hasOwnProperty(key)) {
                this[key] = this[key] || this.graph[key] || this.defaults()[key];
                return;
            }

            if (typeof this.defaults()[key] == 'object') {

                Rickshaw.keys(this.defaults()[key]).forEach( function(k) {

                    this[key][k] =
                        args[key][k] !== undefined ? args[key][k] :
                            this[key][k] !== undefined ? this[key][k] :
                                this.defaults()[key][k];
                }, this );

            } else {
                this[key] =
                    args[key] !== undefined ? args[key] :
                        this[key] !== undefined ? this[key] :
                            this.graph[key] !== undefined ? this.graph[key] :
                                this.defaults()[key];
            }

        }, this );
    },

    setStrokeWidth: function(strokeWidth) {
        if (strokeWidth !== undefined) {
            this.strokeWidth = strokeWidth;
        }
    },

    setTension: function(tension) {
        if (tension !== undefined) {
            this.tension = tension;
        }
    }
} );

Rickshaw.namespace('Rickshaw.Graph.Renderer.Line');

Rickshaw.Graph.Renderer.Line = Rickshaw.Class.create( Rickshaw.Graph.Renderer, {

    name: 'line',

    defaults: function($super) {

        return Rickshaw.extend( $super(), {
            unstack: true,
            fill: false,
            stroke: true
        } );
    },

    seriesPathFactory: function() {

        var graph = this.graph;

        return d3.svg.line()
            .x( function(d) { return graph.x(d.x) } )
            .y( function(d) { return graph.y(d.y) } )
            .interpolate(this.graph.interpolation).tension(this.tension);
    }
} );

Rickshaw.namespace('Rickshaw.Graph.Renderer.Stack');

Rickshaw.Graph.Renderer.Stack = Rickshaw.Class.create( Rickshaw.Graph.Renderer, {

    name: 'stack',

    defaults: function($super) {

        return Rickshaw.extend( $super(), {
            fill: true,
            stroke: false,
            unstack: false
        } );
    },

    seriesPathFactory: function() {

        var graph = this.graph;

        return d3.svg.area()
            .x( function(d) { return graph.x(d.x) } )
            .y0( function(d) { return graph.y(d.y0) } )
            .y1( function(d) { return graph.y(d.y + d.y0) } )
            .interpolate(this.graph.interpolation).tension(this.tension);
    }
} );

Rickshaw.namespace('Rickshaw.Graph.Renderer.Bar');

Rickshaw.Graph.Renderer.Bar = Rickshaw.Class.create( Rickshaw.Graph.Renderer, {

    name: 'bar',

    defaults: function($super) {

        var defaults = Rickshaw.extend( $super(), {
            gapSize: 0.05,
            unstack: false
        } );

        delete defaults.tension;
        return defaults;
    },

    initialize: function($super, args) {
        args = args || {};
        this.gapSize = args.gapSize || this.gapSize;
        $super(args);
    },

    domain: function($super) {

        var domain = $super();

        var frequentInterval = this._frequentInterval();
        domain.x[1] += parseInt(frequentInterval.magnitude);

        return domain;
    },

    barWidth: function() {

        var stackedData = this.graph.stackedData || this.graph.stackData();
        var data = stackedData.slice(-1).shift();

        var frequentInterval = this._frequentInterval();
        var barWidth = this.graph.x(data[0].x + frequentInterval.magnitude * (1 - this.gapSize));

        return barWidth;
    },

    render: function() {

        var graph = this.graph;

        graph.vis.selectAll('*').remove();

        var barWidth = this.barWidth();
        var barXOffset = 0;

        var activeSeriesCount = graph.series.filter( function(s) { return !s.disabled; } ).length;
        var seriesBarWidth = this.unstack ? barWidth / activeSeriesCount : barWidth;

        var transform = function(d) {
            // add a matrix transform for negative values
            var matrix = [ 1, 0, 0, (d.y < 0 ? -1 : 1), 0, (d.y < 0 ? graph.y.magnitude(Math.abs(d.y)) * 2 : 0) ];
            return "matrix(" + matrix.join(',') + ")";
        };

        graph.series.forEach( function(series) {

            if (series.disabled) return;

            var nodes = graph.vis.selectAll("path")
                .data(series.stack)
                .enter().append("svg:rect")
                .attr("x", function(d) { return graph.x(d.x) + barXOffset })
                .attr("y", function(d) { return (graph.y(d.y0 + Math.abs(d.y))) * (d.y < 0 ? -1 : 1 ) })
                .attr("width", seriesBarWidth)
                .attr("height", function(d) { return graph.y.magnitude(Math.abs(d.y)) })
                .attr("transform", transform);

            Array.prototype.forEach.call(nodes[0], function(n) {
                n.setAttribute('fill', series.color);
            } );

            if (this.unstack) barXOffset += seriesBarWidth;

        }, this );
    },

    _frequentInterval: function() {

        var stackedData = this.graph.stackedData || this.graph.stackData();
        var data = stackedData.slice(-1).shift();

        var intervalCounts = {};

        for (var i = 0; i < data.length - 1; i++) {
            var interval = data[i + 1].x - data[i].x;
            intervalCounts[interval] = intervalCounts[interval] || 0;
            intervalCounts[interval]++;
        }

        var frequentInterval = { count: 0 };

        Rickshaw.keys(intervalCounts).forEach( function(i) {
            if (frequentInterval.count < intervalCounts[i]) {

                frequentInterval = {
                    count: intervalCounts[i],
                    magnitude: i
                };
            }
        } );

        this._frequentInterval = function() { return frequentInterval };

        return frequentInterval;
    }
} );

Rickshaw.namespace('Rickshaw.Graph.Renderer.Area');

Rickshaw.Graph.Renderer.Area = Rickshaw.Class.create( Rickshaw.Graph.Renderer, {

    name: 'area',

    defaults: function($super) {

        return Rickshaw.extend( $super(), {
            unstack: false,
            fill: false,
            stroke: false
        } );
    },

    seriesPathFactory: function() {

        var graph = this.graph;

        return d3.svg.area()
            .x( function(d) { return graph.x(d.x) } )
            .y0( function(d) { return graph.y(d.y0) } )
            .y1( function(d) { return graph.y(d.y + d.y0) } )
            .interpolate(graph.interpolation).tension(this.tension);
    },

    seriesStrokeFactory: function() {

        var graph = this.graph;

        return d3.svg.line()
            .x( function(d) { return graph.x(d.x) } )
            .y( function(d) { return graph.y(d.y + d.y0) } )
            .interpolate(graph.interpolation).tension(this.tension);
    },

    render: function() {

        var graph = this.graph;

        graph.vis.selectAll('*').remove();

        var nodes = graph.vis.selectAll("path")
            .data(this.graph.stackedData)
            .enter().insert("svg:g", 'g');

        nodes.append("svg:path")
            .attr("d", this.seriesPathFactory())
            .attr("class", 'area');

        if (this.stroke) {
            nodes.append("svg:path")
                .attr("d", this.seriesStrokeFactory())
                .attr("class", 'line');
        }

        var i = 0;
        graph.series.forEach( function(series) {
            if (series.disabled) return;
            series.path = nodes[0][i++];
            this._styleSeries(series);
        }, this );
    },

    _styleSeries: function(series) {

        if (!series.path) return;

        d3.select(series.path).select('.area')
            .attr('fill', series.color);

        if (this.stroke) {
            d3.select(series.path).select('.line')
                .attr('fill', 'none')
                .attr('stroke', series.stroke || d3.interpolateRgb(series.color, 'black')(0.2))
                .attr('stroke-width', this.strokeWidth);
        }

        if (series.className) {
            series.path.setAttribute('class', series.className);
        }
    }
} );

Rickshaw.namespace('Rickshaw.Graph.Renderer.ScatterPlot');

Rickshaw.Graph.Renderer.ScatterPlot = Rickshaw.Class.create( Rickshaw.Graph.Renderer, {

    name: 'scatterplot',

    defaults: function($super) {

        return Rickshaw.extend( $super(), {
            unstack: true,
            fill: true,
            stroke: false,
            padding:{ top: 0.01, right: 0.01, bottom: 0.01, left: 0.01 },
            dotSize: 4
        } );
    },

    initialize: function($super, args) {
        $super(args);
    },

    render: function() {

        var graph = this.graph;

        graph.vis.selectAll('*').remove();

        graph.series.forEach( function(series) {

            if (series.disabled) return;

            var nodes = graph.vis.selectAll("path")
                .data(series.stack)
                .enter().append("svg:circle")
                .attr("cx", function(d) { return graph.x(d.x) })
                .attr("cy", function(d) { return graph.y(d.y) })
                .attr("r", function(d) { return ("r" in d) ? d.r : graph.renderer.dotSize});

            Array.prototype.forEach.call(nodes[0], function(n) {
                n.setAttribute('fill', series.color);
            } );

        }, this );
    }
} );
Rickshaw.namespace('Rickshaw.Graph.Smoother');

Rickshaw.Graph.Smoother = function(args) {

    this.graph = args.graph;
    this.element = args.element;

    var self = this;

    this.aggregationScale = 1;

    if (this.element) {

        $( function() {
            $(self.element).slider( {
                min: 1,
                max: 100,
                slide: function( event, ui ) {
                    self.setScale(ui.value);
                    self.graph.update();
                }
            } );
        } );
    }

    self.graph.stackData.hooks.data.push( {
        name: 'smoother',
        orderPosition: 50,
        f: function(data) {

            var aggregatedData = [];

            data.forEach( function(seriesData) {

                var aggregatedSeriesData = [];

                while (seriesData.length) {

                    var avgX = 0, avgY = 0;
                    var slice = seriesData.splice(0, self.aggregationScale);

                    slice.forEach( function(d) {
                        avgX += d.x / slice.length;
                        avgY += d.y / slice.length;
                    } );

                    aggregatedSeriesData.push( { x: avgX, y: avgY } );
                }

                aggregatedData.push(aggregatedSeriesData);
            } );

            return aggregatedData;
        }
    } );

    this.setScale = function(scale) {

        if (scale < 1) {
            throw "scale out of range: " + scale;
        }

        this.aggregationScale = scale;
        this.graph.update();
    }
};

Rickshaw.namespace('Rickshaw.Graph.Unstacker');

Rickshaw.Graph.Unstacker = function(args) {

    this.graph = args.graph;
    var self = this;

    this.graph.stackData.hooks.after.push( {
        name: 'unstacker',
        f: function(data) {

            if (!self.graph.renderer.unstack) return data;

            data.forEach( function(seriesData) {
                seriesData.forEach( function(d) {
                    d.y0 = 0;
                } );
            } );

            return data;
        }
    } );
};

Rickshaw.namespace('Rickshaw.Series');

Rickshaw.Series = Rickshaw.Class.create( Array, {

    initialize: function (data, palette, options) {

        options = options || {};

        this.palette = new Rickshaw.Color.Palette(palette);

        this.timeBase = typeof(options.timeBase) === 'undefined' ?
            Math.floor(new Date().getTime() / 1000) :
            options.timeBase;

        var timeInterval = typeof(options.timeInterval) == 'undefined' ?
            1000 :
            options.timeInterval;

        this.setTimeInterval(timeInterval);

        if (data && (typeof(data) == "object") && (data instanceof Array)) {
            data.forEach( function(item) { this.addItem(item) }, this );
        }
    },

    addItem: function(item) {

        if (typeof(item.name) === 'undefined') {
            throw('addItem() needs a name');
        }

        item.color = (item.color || this.palette.color(item.name));
        item.data = (item.data || []);

        // backfill, if necessary
        if ((item.data.length == 0) && this.length && (this.getIndex() > 0)) {
            this[0].data.forEach( function(plot) {
                item.data.push({ x: plot.x, y: 0 });
            } );
        } else if (item.data.length == 0) {
            item.data.push({ x: this.timeBase - (this.timeInterval || 0), y: 0 });
        }

        this.push(item);

        if (this.legend) {
            this.legend.addLine(this.itemByName(item.name));
        }
    },

    addData: function(data) {

        var index = this.getIndex();

        Rickshaw.keys(data).forEach( function(name) {
            if (! this.itemByName(name)) {
                this.addItem({ name: name });
            }
        }, this );

        this.forEach( function(item) {
            item.data.push({
                x: (index * this.timeInterval || 1) + this.timeBase,
                y: (data[item.name] || 0)
            });
        }, this );
    },

    getIndex: function () {
        return (this[0] && this[0].data && this[0].data.length) ? this[0].data.length : 0;
    },

    itemByName: function(name) {

        for (var i = 0; i < this.length; i++) {
            if (this[i].name == name)
                return this[i];
        }
    },

    setTimeInterval: function(iv) {
        this.timeInterval = iv / 1000;
    },

    setTimeBase: function (t) {
        this.timeBase = t;
    },

    dump: function() {

        var data = {
            timeBase: this.timeBase,
            timeInterval: this.timeInterval,
            items: []
        };

        this.forEach( function(item) {

            var newItem = {
                color: item.color,
                name: item.name,
                data: []
            };

            item.data.forEach( function(plot) {
                newItem.data.push({ x: plot.x, y: plot.y });
            } );

            data.items.push(newItem);
        } );

        return data;
    },

    load: function(data) {

        if (data.timeInterval) {
            this.timeInterval = data.timeInterval;
        }

        if (data.timeBase) {
            this.timeBase = data.timeBase;
        }

        if (data.items) {
            data.items.forEach( function(item) {
                this.push(item);
                if (this.legend) {
                    this.legend.addLine(this.itemByName(item.name));
                }

            }, this );
        }
    }
} );

Rickshaw.Series.zeroFill = function(series) {

    var x;
    var i = 0;

    var data = series.map( function(s) { return s.data } );

    while ( i < Math.max.apply(null, data.map( function(d) { return d.length } )) ) {

        x = Math.min.apply( null,
            data
                .filter(function(d) { return d[i] })
                .map(function(d) { return d[i].x })
        );

        data.forEach( function(d) {
            if (!d[i] || d[i].x != x) {
                d.splice(i, 0, { x: x, y: 0 });
            }
        } );

        i++;
    }
};
Rickshaw.namespace('Rickshaw.Series.FixedDuration');

Rickshaw.Series.FixedDuration = Rickshaw.Class.create(Rickshaw.Series, {

    initialize: function (data, palette, options) {

        var options = options || {};

        if (typeof(options.timeInterval) === 'undefined') {
            throw new Error('FixedDuration series requires timeInterval');
        }

        if (typeof(options.maxDataPoints) === 'undefined') {
            throw new Error('FixedDuration series requires maxDataPoints');
        }

        this.palette = new Rickshaw.Color.Palette(palette);
        this.timeBase = typeof(options.timeBase) === 'undefined' ? Math.floor(new Date().getTime() / 1000) : options.timeBase;
        this.setTimeInterval(options.timeInterval);

        if (this[0] && this[0].data && this[0].data.length) {
            this.currentSize = this[0].data.length;
            this.currentIndex = this[0].data.length;
        } else {
            this.currentSize  = 0;
            this.currentIndex = 0;
        }

        this.maxDataPoints = options.maxDataPoints;


        if (data && (typeof(data) == "object") && (data instanceof Array)) {
            data.forEach( function (item) { this.addItem(item) }, this );
            this.currentSize  += 1;
            this.currentIndex += 1;
        }

        // reset timeBase for zero-filled values if needed
        this.timeBase -= (this.maxDataPoints - this.currentSize) * this.timeInterval;

        // zero-fill up to maxDataPoints size if we don't have that much data yet
        if ((typeof(this.maxDataPoints) !== 'undefined') && (this.currentSize < this.maxDataPoints)) {
            for (var i = this.maxDataPoints - this.currentSize - 1; i > 0; i--) {
                this.currentSize  += 1;
                this.currentIndex += 1;
                this.forEach( function (item) {
                    item.data.unshift({ x: ((i-1) * this.timeInterval || 1) + this.timeBase, y: 0, i: i });
                }, this );
            }
        }
    },

    addData: function($super, data) {

        $super(data);

        this.currentSize += 1;
        this.currentIndex += 1;

        if (this.maxDataPoints !== undefined) {
            while (this.currentSize > this.maxDataPoints) {
                this.dropData();
            }
        }
    },

    dropData: function() {

        this.forEach(function(item) {
            item.data.splice(0, 1);
        } );

        this.currentSize -= 1;
    },

    getIndex: function () {
        return this.currentIndex;
    }
} );


/*! iFrame Resizer (iframeSizer.contentWindow.min.js) - v3.6.1 - 2018-04-29
 *  Desc: Include this file in any page being loaded into an iframe
 *        to force the iframe to resize to the content size.
 *  Requires: iframeResizer.min.js on host page.
 *  Copyright: (c) 2018 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function(a){"use strict";function b(a,b,c){"addEventListener"in window?a.addEventListener(b,c,!1):"attachEvent"in window&&a.attachEvent("on"+b,c)}function c(a,b,c){"removeEventListener"in window?a.removeEventListener(b,c,!1):"detachEvent"in window&&a.detachEvent("on"+b,c)}function d(a){return a.charAt(0).toUpperCase()+a.slice(1)}function e(a){var b,c,d,e=null,f=0,g=function(){f=Ha(),e=null,d=a.apply(b,c),e||(b=c=null)};return function(){var h=Ha();f||(f=h);var i=xa-(h-f);return b=this,c=arguments,i<=0||i>xa?(e&&(clearTimeout(e),e=null),f=h,d=a.apply(b,c),e||(b=c=null)):e||(e=setTimeout(g,i)),d}}function f(a){return ma+"["+oa+"] "+a}function g(a){la&&"object"==typeof window.console&&console.log(f(a))}function h(a){"object"==typeof window.console&&console.warn(f(a))}function i(){j(),g("Initialising iFrame ("+location.href+")"),k(),n(),m("background",W),m("padding",$),A(),s(),t(),o(),C(),u(),ia=B(),N("init","Init message from host page"),Da()}function j(){function b(a){return"true"===a}var c=ha.substr(na).split(":");oa=c[0],X=a!==c[1]?Number(c[1]):X,_=a!==c[2]?b(c[2]):_,la=a!==c[3]?b(c[3]):la,ja=a!==c[4]?Number(c[4]):ja,U=a!==c[6]?b(c[6]):U,Y=c[7],fa=a!==c[8]?c[8]:fa,W=c[9],$=c[10],ua=a!==c[11]?Number(c[11]):ua,ia.enable=a!==c[12]&&b(c[12]),qa=a!==c[13]?c[13]:qa,Aa=a!==c[14]?c[14]:Aa}function k(){function a(){var a=window.iFrameResizer;g("Reading data from page: "+JSON.stringify(a)),Ca="messageCallback"in a?a.messageCallback:Ca,Da="readyCallback"in a?a.readyCallback:Da,ta="targetOrigin"in a?a.targetOrigin:ta,fa="heightCalculationMethod"in a?a.heightCalculationMethod:fa,Aa="widthCalculationMethod"in a?a.widthCalculationMethod:Aa}function b(a,b){return"function"==typeof a&&(g("Setup custom "+b+"CalcMethod"),Fa[b]=a,a="custom"),a}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(a(),fa=b(fa,"height"),Aa=b(Aa,"width")),g("TargetOrigin for parent set to: "+ta)}function l(a,b){return-1!==b.indexOf("-")&&(h("Negative CSS value ignored for "+a),b=""),b}function m(b,c){a!==c&&""!==c&&"null"!==c&&(document.body.style[b]=c,g("Body "+b+' set to "'+c+'"'))}function n(){a===Y&&(Y=X+"px"),m("margin",l("margin",Y))}function o(){document.documentElement.style.height="",document.body.style.height="",g('HTML & body height set to "auto"')}function p(a){var e={add:function(c){function d(){N(a.eventName,a.eventType)}Ga[c]=d,b(window,c,d)},remove:function(a){var b=Ga[a];delete Ga[a],c(window,a,b)}};a.eventNames&&Array.prototype.map?(a.eventName=a.eventNames[0],a.eventNames.map(e[a.method])):e[a.method](a.eventName),g(d(a.method)+" event listener: "+a.eventType)}function q(a){p({method:a,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),p({method:a,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),p({method:a,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),p({method:a,eventType:"Input",eventName:"input"}),p({method:a,eventType:"Mouse Up",eventName:"mouseup"}),p({method:a,eventType:"Mouse Down",eventName:"mousedown"}),p({method:a,eventType:"Orientation Change",eventName:"orientationchange"}),p({method:a,eventType:"Print",eventName:["afterprint","beforeprint"]}),p({method:a,eventType:"Ready State Change",eventName:"readystatechange"}),p({method:a,eventType:"Touch Start",eventName:"touchstart"}),p({method:a,eventType:"Touch End",eventName:"touchend"}),p({method:a,eventType:"Touch Cancel",eventName:"touchcancel"}),p({method:a,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),p({method:a,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),p({method:a,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),"child"===qa&&p({method:a,eventType:"IFrame Resized",eventName:"resize"})}function r(a,b,c,d){return b!==a&&(a in c||(h(a+" is not a valid option for "+d+"CalculationMethod."),a=b),g(d+' calculation method set to "'+a+'"')),a}function s(){fa=r(fa,ea,Ia,"height")}function t(){Aa=r(Aa,za,Ja,"width")}function u(){!0===U?(q("add"),F()):g("Auto Resize disabled")}function v(){g("Disable outgoing messages"),ra=!1}function w(){g("Remove event listener: Message"),c(window,"message",S)}function x(){null!==Z&&Z.disconnect()}function y(){q("remove"),x(),clearInterval(ka)}function z(){v(),w(),!0===U&&y()}function A(){var a=document.createElement("div");a.style.clear="both",a.style.display="block",document.body.appendChild(a)}function B(){function c(){return{x:window.pageXOffset!==a?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==a?window.pageYOffset:document.documentElement.scrollTop}}function d(a){var b=a.getBoundingClientRect(),d=c();return{x:parseInt(b.left,10)+parseInt(d.x,10),y:parseInt(b.top,10)+parseInt(d.y,10)}}function e(b){function c(a){var b=d(a);g("Moving to in page link (#"+e+") at x: "+b.x+" y: "+b.y),R(b.y,b.x,"scrollToOffset")}var e=b.split("#")[1]||b,f=decodeURIComponent(e),h=document.getElementById(f)||document.getElementsByName(f)[0];a!==h?c(h):(g("In page link (#"+e+") not found in iFrame, so sending to parent"),R(0,0,"inPageLink","#"+e))}function f(){""!==location.hash&&"#"!==location.hash&&e(location.href)}function i(){function a(a){function c(a){a.preventDefault(),e(this.getAttribute("href"))}"#"!==a.getAttribute("href")&&b(a,"click",c)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),a)}function j(){b(window,"hashchange",f)}function k(){setTimeout(f,ba)}function l(){Array.prototype.forEach&&document.querySelectorAll?(g("Setting up location.hash handlers"),i(),j(),k()):h("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return ia.enable?l():g("In page linking not enabled"),{findTarget:e}}function C(){g("Enable public methods"),Ba.parentIFrame={autoResize:function(a){return!0===a&&!1===U?(U=!0,u()):!1===a&&!0===U&&(U=!1,y()),U},close:function(){R(0,0,"close"),z()},getId:function(){return oa},getPageInfo:function(a){"function"==typeof a?(Ea=a,R(0,0,"pageInfo")):(Ea=function(){},R(0,0,"pageInfoStop"))},moveToAnchor:function(a){ia.findTarget(a)},reset:function(){Q("parentIFrame.reset")},scrollTo:function(a,b){R(b,a,"scrollTo")},scrollToOffset:function(a,b){R(b,a,"scrollToOffset")},sendMessage:function(a,b){R(0,0,"message",JSON.stringify(a),b)},setHeightCalculationMethod:function(a){fa=a,s()},setWidthCalculationMethod:function(a){Aa=a,t()},setTargetOrigin:function(a){g("Set targetOrigin: "+a),ta=a},size:function(a,b){N("size","parentIFrame.size("+(a||"")+(b?","+b:"")+")",a,b)}}}function D(){0!==ja&&(g("setInterval: "+ja+"ms"),ka=setInterval(function(){N("interval","setInterval: "+ja)},Math.abs(ja)))}function E(){function b(a){function b(a){!1===a.complete&&(g("Attach listeners to "+a.src),a.addEventListener("load",f,!1),a.addEventListener("error",h,!1),k.push(a))}"attributes"===a.type&&"src"===a.attributeName?b(a.target):"childList"===a.type&&Array.prototype.forEach.call(a.target.querySelectorAll("img"),b)}function c(a){k.splice(k.indexOf(a),1)}function d(a){g("Remove listeners from "+a.src),a.removeEventListener("load",f,!1),a.removeEventListener("error",h,!1),c(a)}function e(b,c,e){d(b.target),N(c,e+": "+b.target.src,a,a)}function f(a){e(a,"imageLoad","Image loaded")}function h(a){e(a,"imageLoadFailed","Image load failed")}function i(a){N("mutationObserver","mutationObserver: "+a[0].target+" "+a[0].type),a.forEach(b)}function j(){var a=document.querySelector("body"),b={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return m=new l(i),g("Create body MutationObserver"),m.observe(a,b),m}var k=[],l=window.MutationObserver||window.WebKitMutationObserver,m=j();return{disconnect:function(){"disconnect"in m&&(g("Disconnect body MutationObserver"),m.disconnect(),k.forEach(d))}}}function F(){var a=0>ja;window.MutationObserver||window.WebKitMutationObserver?a?D():Z=E():(g("MutationObserver not supported in this browser!"),D())}function G(a,b){function c(a){if(/^\d+(px)?$/i.test(a))return parseInt(a,V);var c=b.style.left,d=b.runtimeStyle.left;return b.runtimeStyle.left=b.currentStyle.left,b.style.left=a||0,a=b.style.pixelLeft,b.style.left=c,b.runtimeStyle.left=d,a}var d=0;return b=b||document.body,"defaultView"in document&&"getComputedStyle"in document.defaultView?(d=document.defaultView.getComputedStyle(b,null),d=null!==d?d[a]:0):d=c(b.currentStyle[a]),parseInt(d,V)}function H(a){a>xa/2&&(xa=2*a,g("Event throttle increased to "+xa+"ms"))}function I(a,b){for(var c=b.length,e=0,f=0,h=d(a),i=Ha(),j=0;j<c;j++)(e=b[j].getBoundingClientRect()[a]+G("margin"+h,b[j]))>f&&(f=e);return i=Ha()-i,g("Parsed "+c+" HTML elements"),g("Element position calculated in "+i+"ms"),H(i),f}function J(a){return[a.bodyOffset(),a.bodyScroll(),a.documentElementOffset(),a.documentElementScroll()]}function K(a,b){function c(){return h("No tagged elements ("+b+") found on page"),document.querySelectorAll("body *")}var d=document.querySelectorAll("["+b+"]");return 0===d.length&&c(),I(a,d)}function L(){return document.querySelectorAll("body *")}function M(b,c,d,e){function f(){da=m,ya=n,R(da,ya,b)}function h(){function b(a,b){return!(Math.abs(a-b)<=ua)}return m=a!==d?d:Ia[fa](),n=a!==e?e:Ja[Aa](),b(da,m)||_&&b(ya,n)}function i(){return!(b in{init:1,interval:1,size:1})}function j(){return fa in pa||_&&Aa in pa}function k(){g("No change in size detected")}function l(){i()&&j()?Q(c):b in{interval:1}||k()}var m,n;h()||"init"===b?(O(),f()):l()}function N(a,b,c,d){function e(){a in{reset:1,resetPage:1,init:1}||g("Trigger event: "+b)}function f(){return va&&a in aa}f()?g("Trigger event cancelled: "+a):(e(),"init"===a?M(a,b,c,d):Ka(a,b,c,d))}function O(){va||(va=!0,g("Trigger event lock on")),clearTimeout(wa),wa=setTimeout(function(){va=!1,g("Trigger event lock off"),g("--")},ba)}function P(a){da=Ia[fa](),ya=Ja[Aa](),R(da,ya,a)}function Q(a){var b=fa;fa=ea,g("Reset trigger event: "+a),O(),P("reset"),fa=b}function R(b,c,d,e,f){function h(){a===f?f=ta:g("Message targetOrigin: "+f)}function i(){var h=b+":"+c,i=oa+":"+h+":"+d+(a!==e?":"+e:"");g("Sending message to host page ("+i+")"),sa.postMessage(ma+i,f)}!0===ra&&(h(),i())}function S(a){function c(){return ma===(""+a.data).substr(0,na)}function d(){return a.data.split("]")[1].split(":")[0]}function e(){return a.data.substr(a.data.indexOf(":")+1)}function f(){return!("undefined"!=typeof module&&module.exports)&&"iFrameResize"in window}function j(){return a.data.split(":")[2]in{true:1,false:1}}function k(){var b=d();b in m?m[b]():f()||j()||h("Unexpected message ("+a.data+")")}function l(){!1===ca?k():j()?m.init():g('Ignored message of type "'+d()+'". Received before initialization.')}var m={init:function(){function c(){ha=a.data,sa=a.source,i(),ca=!1,setTimeout(function(){ga=!1},ba)}"interactive"===document.readyState||"complete"===document.readyState?c():(g("Waiting for page ready"),b(window,"readystatechange",m.initFromParent))},reset:function(){ga?g("Page reset ignored by init"):(g("Page size reset by host page"),P("resetPage"))},resize:function(){N("resizeParent","Parent window requested size check")},moveToAnchor:function(){ia.findTarget(e())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var a=e();g("PageInfoFromParent called from parent: "+a),Ea(JSON.parse(a)),g(" --")},message:function(){var a=e();g("MessageCallback called from parent: "+a),Ca(JSON.parse(a)),g(" --")}};c()&&l()}function T(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}if("undefined"!=typeof window){var U=!0,V=10,W="",X=0,Y="",Z=null,$="",_=!1,aa={resize:1,click:1},ba=128,ca=!0,da=1,ea="bodyOffset",fa=ea,ga=!0,ha="",ia={},ja=32,ka=null,la=!1,ma="[iFrameSizer]",na=ma.length,oa="",pa={max:1,min:1,bodyScroll:1,documentElementScroll:1},qa="child",ra=!0,sa=window.parent,ta="*",ua=0,va=!1,wa=null,xa=16,ya=1,za="scroll",Aa=za,Ba=window,Ca=function(){h("MessageCallback function not defined")},Da=function(){},Ea=function(){},Fa={height:function(){return h("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return h("Custom width calculation function not defined"),document.body.scrollWidth}},Ga={},Ha=Date.now||function(){return(new Date).getTime()},Ia={bodyOffset:function(){return document.body.offsetHeight+G("marginTop")+G("marginBottom")},offset:function(){return Ia.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return Fa.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,J(Ia))},min:function(){return Math.min.apply(null,J(Ia))},grow:function(){return Ia.max()},lowestElement:function(){return Math.max(Ia.bodyOffset()||Ia.documentElementOffset(),I("bottom",L()))},taggedElement:function(){return K("bottom","data-iframe-height")}},Ja={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return Fa.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(Ja.bodyScroll(),Ja.documentElementScroll())},max:function(){return Math.max.apply(null,J(Ja))},min:function(){return Math.min.apply(null,J(Ja))},rightMostElement:function(){return I("right",L())},taggedElement:function(){return K("right","data-iframe-width")}},Ka=e(M);b(window,"message",S),T()}}();
//# sourceMappingURL=iframeResizer.contentWindow.map
var M4S={};M4S.Calc={startingBalance:5e3,savingsPerMonth:500,yearsToInvest:25,rateOfReturn:.06,inflation:0,savingsIncrease:.03,annualFees:.0075,graphBalance:[],graphContributions:[],previousBalance:null,rules:{startingBalance:{max:1e6,min:0,step:5e3,limit:8,slowdown:2e4,slowdownStep:1e3},savingsPerMonth:{max:25e3,min:1,step:100,limit:10},yearsToInvest:{max:50,min:1,step:1,limit:8},rateOfReturn:{max:12,min:0,step:1,limit:10},savingsIncrease:{max:10,min:0,step:1,limit:10},annualFees:{max:5,min:0,step:.25,limit:10}},chartContainer:null,initialize:function(){var a=document.getElementById("InvestmentCalculator");M4S.Calc.chartContainer=document.getElementById("js-chartContainer"),$("#chart").length&&(M4S.Calc.initMoreOptionsText(),M4S.Calc.calculateValues(),M4S.Calc.initGraph(),M4S.Calc.updateText(),$("#startingBalance, #savingsPerMonth, #yearsToInvest, #rateOfReturn, #savingsIncrease, #annualFees").mousedown(function(){M4S.Calc.previousBalance=M4S.Calc.getBalance(),$(this).parent().addClass("dragging")}).mouseup(function(){$(this).parent().removeClass("dragging")}),$("#startingBalance").numbers(M4S.Calc.rules.startingBalance).bind("verdict_change",function(a,e){M4S.Calc.startingBalance=e,M4S.Calc.recalculateAndRender()}),$("#savingsPerMonth").numbers(M4S.Calc.rules.savingsPerMonth).bind("verdict_change",function(a,e){M4S.Calc.savingsPerMonth=e,M4S.Calc.recalculateAndRender()}),$("#yearsToInvest").numbers(M4S.Calc.rules.yearsToInvest).bind("verdict_change",function(a,e){M4S.Calc.yearsToInvest=e,M4S.Calc.recalculateAndRender()}),$("#rateOfReturn").numbers(M4S.Calc.rules.rateOfReturn).bind("verdict_change",function(a,e){M4S.Calc.rateOfReturn=e/100,M4S.Calc.recalculateAndRender()}),$("#savingsIncrease").numbers(M4S.Calc.rules.savingsIncrease).bind("verdict_change",function(a,e){M4S.Calc.savingsIncrease=e/100,M4S.Calc.recalculateAndRender()}),$("#annualFees").numbers(M4S.Calc.rules.annualFees).bind("verdict_change",function(a,e){M4S.Calc.annualFees=e/100,M4S.Calc.recalculateAndRender()}),$("#period").bool_select({first:"of annual",second:"of monthly"}).bind("verdict_change",function(a,e){M4S.Calc.periodMonth="of monthly"===e,M4S.Calc.calcFourPercent()}),M4S.draggableElementsExtension.init(a),M4S.Calc.resize(),window.addEventListener("resize",M4S.Calc.resize))},getBalance:function(){return parseInt(M4S.Calc.stripFormatting($("#finalbal").text()))},stripFormatting:function(a){return a.replace(/[^0-9-.]/g,"")},resetValues:function(){return M4S.Calc.graphContributions.length=0,M4S.Calc.graphContributions.push({x:0,y:M4S.Calc.startingBalance}),M4S.Calc.graphBalance.length=0,M4S.Calc.graphBalance.push({x:0,y:M4S.Calc.startingBalance})},calculateValues:function(){var a,e,n,t;for(M4S.Calc.resetValues(),a=M4S.Calc.startingBalance,n=M4S.Calc.startingBalance,savingsPerYear=12*M4S.Calc.savingsPerMonth,t=1;t<=M4S.Calc.yearsToInvest;)a=(a+(e=savingsPerYear*Math.pow(1+M4S.Calc.savingsIncrease,t-1)))*(1+M4S.Calc.rateOfReturn-M4S.Calc.inflation),a-=a*M4S.Calc.annualFees,M4S.Calc.graphBalance.push({x:t,y:a}),n+=e,M4S.Calc.graphContributions.push({x:t,y:n}),t++;M4S.Calc.finalContributions=n,M4S.Calc.finalBalance=a,M4S.Calc.finalEarnings=M4S.Calc.finalBalance-M4S.Calc.finalContributions},updateText:function(){var a,e,n,t,r,l,i;if(M4S.Calc.calcFourPercent(),1e3<M4S.Calc.finalEarnings?(l=1e3*Math.round(M4S.Calc.finalEarnings/1e3),a=1e3*Math.round(M4S.Calc.finalBalance/1e3),t=1e3*Math.round(M4S.Calc.finalContributions/1e3)):(l=Math.round(M4S.Calc.finalEarnings),a=Math.round(M4S.Calc.finalBalance),t=Math.round(M4S.Calc.finalContributions)),$("#finalbal").text($.format.num(a)),$("#fromearnings").text($.format.num(l)),$("#fromsavings").text($.format.num(t)),r=100-(i=Math.round(M4S.Calc.finalEarnings/M4S.Calc.finalBalance*100)),$("#fromint_percent").text(i),$("#invested_percent").text(r),M4S.Calc.previousBalance)return e=M4S.Calc.getBalance()-M4S.Calc.previousBalance,n=Math.round(e/M4S.Calc.previousBalance*100),$("#previous-balance").html("Previous Balance: <strong class='has-currency'>"+$.format.num(M4S.Calc.previousBalance)+"</strong><br>Change: <strong class='has-currency'>"+$.format.num(Math.abs(e))+"</strong> (<strong>"+(0<e?"+":"-")+Math.abs(n)+"%</strong>)")},initMoreOptionsText:function(){$("#rateOfReturn").text($.format.num(100*M4S.Calc.rateOfReturn)),$("#savingsIncrease").text($.format.num(100*M4S.Calc.savingsIncrease)),$("#annualFees").text($.format.num(100*M4S.Calc.annualFees))},cssVarColorsOrDefault:function(){var a={earningsColor:"#f76400",savingsColor:"#FFAE78"},e=document.getElementById("InvestmentCalculator");if(!e)return a;var n=getComputedStyle(e);return{earningsColor:n.getPropertyValue("--earnings-color").trim()||a.earningsColor,savingsColor:n.getPropertyValue("--savings-color").trim()||a.savingsColor}},initGraph:function(){var a=M4S.Calc.cssVarColorsOrDefault();M4S.Calc.graph=new Rickshaw.Graph({element:document.getElementById("chart"),width:960,height:420,renderer:"area",stroke:!0,strokeWidth:4,series:[{color:a.savingsColor,data:M4S.Calc.graphContributions,name:"Without interest"},{color:a.earningsColor,data:M4S.Calc.graphBalance,name:"Total balance"}]}),new Rickshaw.Graph.Axis.Time({graph:M4S.Calc.graph}),new Rickshaw.Graph.Axis.Y({graph:M4S.Calc.graph,orientation:"right",tickFormat:Rickshaw.Fixtures.Number.formatKMBT,element:document.getElementById("y_axis")}),500<window.innerWidth&&new Rickshaw.Graph.HoverDetail({graph:M4S.Calc.graph,formatter:function(a,e,n){var t;return t='<span class="date">'+e+"</span>",'<span class="detail_swatch" style="background-color: '+a.color+'"></span>'+"Year: "+t+"<br>Total: $"+$.format.num(Math.floor(n-1))}}),M4S.Calc.graph.renderer.unstack=!0,M4S.Calc.graph.render(),M4S.Calc.replaceYearTagsWithSpanElement()},calcFourPercent:function(){var a;a=.04*M4S.Calc.finalBalance,M4S.Calc.periodMonth&&(a/=12),a=M4S.Calc.periodMonth&&100<a?100*Math.round(a/100):1e3<a?1e3*Math.round(a/1e3):Math.round(a),$("#fourpercent").text($.format.num(a))},recalculateAndRender:function(){M4S.Calc.calculateValues(),M4S.Calc.graph.render(),M4S.Calc.updateText(),M4S.Calc.replaceYearTagsWithSpanElement()},resize:function(a){(void 0===a||a.target===window)&&(M4S.Calc.graph.configure({width:M4S.Calc.chartContainer.clientWidth}),M4S.Calc.graph.render(),M4S.Calc.replaceYearTagsWithSpanElement())},replaceYearTagsWithSpanElement:function(){if(window.innerWidth<=500){var a=document.querySelectorAll(".x_tick .title");for(i=0;i<=a.length-1;i++)a[i].innerHTML=a[i].innerHTML.replace(" YEARS"," yrs")}}},M4S.draggableElementsExtension=function(){var n,e;return{init:function(a){e=a.querySelectorAll("#startingBalance, #savingsPerMonth, #yearsToInvest "),n=0,a.addEventListener("mousedown",function(){n=0},!1),a.addEventListener("mousemove",function(){n++},!1),e.forEach(function(e){["mouseup"].forEach(function(a){e.addEventListener(a,function(a){var e=a.target.parentNode;n<5&&e.firstChild&&"INPUT"!==e.firstChild.type&&function(t){var c=t.getElementsByTagName("span")[0],s=t.getElementsByTagName("input")[0],r=c.textContent;function a(){var a=s.selectionStart,e=s.selectionEnd,n=s.value.length,t=s.value.replace(/,/g,""),r=M4S.Calc.rules[c.id];t&&(maxLength=(r.max+"").length,t=t.length>maxLength?t.substring(0,maxLength):t),isNaN(t)&&(t="");var l=$.format.num(t);c.innerText=s.value=l;var i=l.length-n;s.setSelectionRange(a+i,e+i),s.style.width=Math.max(c.clientWidth,1)}t.classList.add("editing"),s.value=$.format.num(r),s.addEventListener("input",a,!1),a(),s.addEventListener("blur",function(){var a,e,n=s.value||r;c.innerText=$.format.num(n),t.classList.remove("editing"),n!==r&&(a=c.id,e=n,M4S.Calc[a]=Number(e.replace(/,/g,"")),M4S.Calc.recalculateAndRender())}),s.focus(),s.select()}(e),n=0}.bind(this))})})}}}(),$(document).ready(function(){M4S.Calc.initialize()});