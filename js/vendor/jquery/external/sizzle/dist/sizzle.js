!function(n){function f(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(65536+r):String.fromCharCode(r>>10|55296,1023&r|56320)}function o(){x()}var e,p,w,i,u,h,d,g,N,a,c,x,C,l,E,m,s,y,v,D="sizzle"+ +new Date,b=n.document,S=0,r=0,A=ue(),T=ue(),L=ue(),I=function(e,t){return e===t&&(c=!0),0},q={}.hasOwnProperty,t=[],B=t.pop,R=t.push,$=t.push,P=t.slice,z=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},H="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",k="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",F="\\["+M+"*("+k+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+k+"))|)"+M+"*\\]",O=":("+k+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+F+")*)|.*)\\)|)",j=new RegExp(M+"+","g"),G=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),U=new RegExp("^"+M+"*,"+M+"*"),V=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),X=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),J=new RegExp(O),K=new RegExp("^"+k+"$"),Q={ID:new RegExp("^#("+k+")"),CLASS:new RegExp("^\\.("+k+")"),TAG:new RegExp("^("+k+"|[*])"),ATTR:new RegExp("^"+F),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+H+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,re=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{$.apply(t=P.call(b.childNodes),b.childNodes),t[b.childNodes.length].nodeType}catch(e){$={apply:t.length?function(e,t){R.apply(e,P.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function ie(e,t,n,r){var o,i,u,l,a,c,s,f=t&&t.ownerDocument,d=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==d&&9!==d&&11!==d)return n;if(!r&&((t?t.ownerDocument||t:b)!==C&&x(t),t=t||C,E)){if(11!==d&&(a=_.exec(e)))if(o=a[1]){if(9===d){if(!(u=t.getElementById(o)))return n;if(u.id===o)return n.push(u),n}else if(f&&(u=f.getElementById(o))&&v(t,u)&&u.id===o)return n.push(u),n}else{if(a[2])return $.apply(n,t.getElementsByTagName(e)),n;if((o=a[3])&&p.getElementsByClassName&&t.getElementsByClassName)return $.apply(n,t.getElementsByClassName(o)),n}if(p.qsa&&!L[e+" "]&&(!m||!m.test(e))){if(1!==d)f=t,s=e;else if("object"!==t.nodeName.toLowerCase()){for((l=t.getAttribute("id"))?l=l.replace(ne,re):t.setAttribute("id",l=D),i=(c=h(e)).length;i--;)c[i]="#"+l+" "+ge(c[i]);s=c.join(","),f=ee.test(e)&&pe(t.parentNode)||t}if(s)try{return $.apply(n,f.querySelectorAll(s)),n}catch(e){}finally{l===D&&t.removeAttribute("id")}}}return g(e.replace(G,"$1"),t,n,r)}function ue(){var n=[];function r(e,t){return n.push(e+" ")>w.cacheLength&&delete r[n.shift()],r[e+" "]=t}return r}function le(e){return e[D]=!0,e}function ae(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ce(e,t){for(var n=e.split("|"),r=n.length;r--;)w.attrHandle[n[r]]=t}function se(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function fe(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&oe(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function de(u){return le(function(i){return i=+i,le(function(e,t){for(var n,r=u([],e.length,i),o=r.length;o--;)e[n=r[o]]&&(e[n]=!(t[n]=e[n]))})})}function pe(e){return e&&void 0!==e.getElementsByTagName&&e}for(e in p=ie.support={},u=ie.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},x=ie.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:b;return r!==C&&9===r.nodeType&&r.documentElement&&(l=(C=r).documentElement,E=!u(C),b!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",o,!1):n.attachEvent&&n.attachEvent("onunload",o)),p.attributes=ae(function(e){return e.className="i",!e.getAttribute("className")}),p.getElementsByTagName=ae(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),p.getElementsByClassName=Z.test(C.getElementsByClassName),p.getById=ae(function(e){return l.appendChild(e).id=D,!C.getElementsByName||!C.getElementsByName(D).length}),p.getById?(w.filter.ID=function(e){var t=e.replace(te,f);return function(e){return e.getAttribute("id")===t}},w.find.ID=function(e,t){if(void 0!==t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(w.filter.ID=function(e){var n=e.replace(te,f);return function(e){var t=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},w.find.ID=function(e,t){if(void 0!==t.getElementById&&E){var n,r,o,i=t.getElementById(e);if(i){if((n=i.getAttributeNode("id"))&&n.value===e)return[i];for(o=t.getElementsByName(e),r=0;i=o[r++];)if((n=i.getAttributeNode("id"))&&n.value===e)return[i]}return[]}}),w.find.TAG=p.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):p.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e);if("*"!==e)return i;for(;n=i[o++];)1===n.nodeType&&r.push(n);return r},w.find.CLASS=p.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],m=[],(p.qsa=Z.test(C.querySelectorAll))&&(ae(function(e){l.appendChild(e).innerHTML="<a id='"+D+"'></a><select id='"+D+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+M+"*(?:value|"+H+")"),e.querySelectorAll("[id~="+D+"-]").length||m.push("~="),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+D+"+*").length||m.push(".#.+[+~]")}),ae(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),l.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")})),(p.matchesSelector=Z.test(y=l.matches||l.webkitMatchesSelector||l.mozMatchesSelector||l.oMatchesSelector||l.msMatchesSelector))&&ae(function(e){p.disconnectedMatch=y.call(e,"*"),y.call(e,"[s!='']:x"),s.push("!=",O)}),m=m.length&&new RegExp(m.join("|")),s=s.length&&new RegExp(s.join("|")),t=Z.test(l.compareDocumentPosition),v=t||Z.test(l.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},I=t?function(e,t){if(e===t)return c=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!p.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===b&&v(b,e)?-1:t===C||t.ownerDocument===b&&v(b,t)?1:a?z(a,e)-z(a,t):0:4&n?-1:1)}:function(e,t){if(e===t)return c=!0,0;var n,r=0,o=e.parentNode,i=t.parentNode,u=[e],l=[t];if(!o||!i)return e===C?-1:t===C?1:o?-1:i?1:a?z(a,e)-z(a,t):0;if(o===i)return se(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;u[r]===l[r];)r++;return r?se(u[r],l[r]):u[r]===b?-1:l[r]===b?1:0}),C},ie.matches=function(e,t){return ie(e,null,null,t)},ie.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&x(e),t=t.replace(X,"='$1']"),p.matchesSelector&&E&&!L[t+" "]&&(!s||!s.test(t))&&(!m||!m.test(t)))try{var n=y.call(e,t);if(n||p.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){}return 0<ie(t,C,null,[e]).length},ie.contains=function(e,t){return(e.ownerDocument||e)!==C&&x(e),v(e,t)},ie.attr=function(e,t){(e.ownerDocument||e)!==C&&x(e);var n=w.attrHandle[t.toLowerCase()],r=n&&q.call(w.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:p.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},ie.escape=function(e){return(e+"").replace(ne,re)},ie.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ie.uniqueSort=function(e){var t,n=[],r=0,o=0;if(c=!p.detectDuplicates,a=!p.sortStable&&e.slice(0),e.sort(I),c){for(;t=e[o++];)t===e[o]&&(r=n.push(o));for(;r--;)e.splice(n[r],1)}return a=null,e},i=ie.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t);return n},(w=ie.selectors={cacheLength:50,createPseudo:le,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,f),e[3]=(e[3]||e[4]||e[5]||"").replace(te,f),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ie.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ie.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&J.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,f).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=A[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&A(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,o){return function(e){var t=ie.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===o:"!="===r?t!==o:"^="===r?o&&0===t.indexOf(o):"*="===r?o&&-1<t.indexOf(o):"$="===r?o&&t.slice(-o.length)===o:"~="===r?-1<(" "+t.replace(j," ")+" ").indexOf(o):"|="===r&&(t===o||t.slice(0,o.length+1)===o+"-"))}},CHILD:function(h,e,t,g,m){var y="nth"!==h.slice(0,3),v="last"!==h.slice(-4),b="of-type"===e;return 1===g&&0===m?function(e){return!!e.parentNode}:function(e,t,n){var r,o,i,u,l,a,c=y!=v?"nextSibling":"previousSibling",s=e.parentNode,f=b&&e.nodeName.toLowerCase(),d=!n&&!b,p=!1;if(s){if(y){for(;c;){for(u=e;u=u[c];)if(b?u.nodeName.toLowerCase()===f:1===u.nodeType)return!1;a=c="only"===h&&!a&&"nextSibling"}return!0}if(a=[v?s.firstChild:s.lastChild],v&&d){for(p=(l=(r=(o=(i=(u=s)[D]||(u[D]={}))[u.uniqueID]||(i[u.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],u=l&&s.childNodes[l];u=++l&&u&&u[c]||(p=l=0)||a.pop();)if(1===u.nodeType&&++p&&u===e){o[h]=[S,l,p];break}}else if(d&&(p=l=(r=(o=(i=(u=e)[D]||(u[D]={}))[u.uniqueID]||(i[u.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===p)for(;(u=++l&&u&&u[c]||(p=l=0)||a.pop())&&((b?u.nodeName.toLowerCase()!==f:1!==u.nodeType)||!++p||(d&&((o=(i=u[D]||(u[D]={}))[u.uniqueID]||(i[u.uniqueID]={}))[h]=[S,p]),u!==e)););return(p-=m)===g||p%g==0&&0<=p/g}}},PSEUDO:function(e,i){var t,u=w.pseudos[e]||w.setFilters[e.toLowerCase()]||ie.error("unsupported pseudo: "+e);return u[D]?u(i):1<u.length?(t=[e,e,"",i],w.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){for(var n,r=u(e,i),o=r.length;o--;)e[n=z(e,r[o])]=!(t[n]=r[o])}):function(e){return u(e,0,t)}):u}},pseudos:{not:le(function(e){var r=[],o=[],l=d(e.replace(G,"$1"));return l[D]?le(function(e,t,n,r){for(var o,i=l(e,null,r,[]),u=e.length;u--;)(o=i[u])&&(e[u]=!(t[u]=o))}):function(e,t,n){return r[0]=e,l(r,null,n,o),r[0]=null,!o.pop()}}),has:le(function(t){return function(e){return 0<ie(t,e).length}}),contains:le(function(t){return t=t.replace(te,f),function(e){return-1<(e.textContent||e.innerText||i(e)).indexOf(t)}}),lang:le(function(n){return K.test(n||"")||ie.error("unsupported lang: "+n),n=n.replace(te,f).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===l},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:fe(!1),disabled:fe(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!w.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return W.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:de(function(){return[0]}),last:de(function(e,t){return[t-1]}),eq:de(function(e,t,n){return[n<0?n+t:n]}),even:de(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:de(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:de(function(e,t,n){for(var r=n<0?n+t:n;0<=--r;)e.push(r);return e}),gt:de(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=w.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[e]=function(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}(e);for(e in{submit:!0,reset:!0})w.pseudos[e]=function(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}(e);function he(){}function ge(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(l,e,t){var a=e.dir,c=e.next,s=c||a,f=t&&"parentNode"===s,d=r++;return e.first?function(e,t,n){for(;e=e[a];)if(1===e.nodeType||f)return l(e,t,n);return!1}:function(e,t,n){var r,o,i,u=[S,d];if(n){for(;e=e[a];)if((1===e.nodeType||f)&&l(e,t,n))return!0}else for(;e=e[a];)if(1===e.nodeType||f)if(o=(i=e[D]||(e[D]={}))[e.uniqueID]||(i[e.uniqueID]={}),c&&c===e.nodeName.toLowerCase())e=e[a]||e;else{if((r=o[s])&&r[0]===S&&r[1]===d)return u[2]=r[2];if((o[s]=u)[2]=l(e,t,n))return!0}return!1}}function ye(o){return 1<o.length?function(e,t,n){for(var r=o.length;r--;)if(!o[r](e,t,n))return!1;return!0}:o[0]}function ve(e,t,n,r,o){for(var i,u=[],l=0,a=e.length,c=null!=t;l<a;l++)(i=e[l])&&(n&&!n(i,r,o)||(u.push(i),c&&t.push(l)));return u}function be(p,h,g,m,y,e){return m&&!m[D]&&(m=be(m)),y&&!y[D]&&(y=be(y,e)),le(function(e,t,n,r){var o,i,u,l=[],a=[],c=t.length,s=e||function(e,t,n){for(var r=0,o=t.length;r<o;r++)ie(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!p||!e&&h?s:ve(s,l,p,n,r),d=g?y||(e?p:c||m)?[]:t:f;if(g&&g(f,d,n,r),m)for(o=ve(d,a),m(o,[],n,r),i=o.length;i--;)(u=o[i])&&(d[a[i]]=!(f[a[i]]=u));if(e){if(y||p){if(y){for(o=[],i=d.length;i--;)(u=d[i])&&o.push(f[i]=u);y(null,d=[],o,r)}for(i=d.length;i--;)(u=d[i])&&-1<(o=y?z(e,u):l[i])&&(e[o]=!(t[o]=u))}}else d=ve(d===t?d.splice(c,d.length):d),y?y(null,t,d,r):$.apply(t,d)})}function we(m,y){function e(e,t,n,r,o){var i,u,l,a=0,c="0",s=e&&[],f=[],d=N,p=e||b&&w.find.TAG("*",o),h=S+=null==d?1:Math.random()||.1,g=p.length;for(o&&(N=t===C||t||o);c!==g&&null!=(i=p[c]);c++){if(b&&i){for(u=0,t||i.ownerDocument===C||(x(i),n=!E);l=m[u++];)if(l(i,t||C,n)){r.push(i);break}o&&(S=h)}v&&((i=!l&&i)&&a--,e&&s.push(i))}if(a+=c,v&&c!==a){for(u=0;l=y[u++];)l(s,f,t,n);if(e){if(0<a)for(;c--;)s[c]||f[c]||(f[c]=B.call(r));f=ve(f)}$.apply(r,f),o&&!e&&0<f.length&&1<a+y.length&&ie.uniqueSort(r)}return o&&(S=h,N=d),s}var v=0<y.length,b=0<m.length;return v?le(e):e}he.prototype=w.filters=w.pseudos,w.setFilters=new he,h=ie.tokenize=function(e,t){var n,r,o,i,u,l,a,c=T[e+" "];if(c)return t?0:c.slice(0);for(u=e,l=[],a=w.preFilter;u;){for(i in n&&!(r=U.exec(u))||(r&&(u=u.slice(r[0].length)||u),l.push(o=[])),n=!1,(r=V.exec(u))&&(n=r.shift(),o.push({value:n,type:r[0].replace(G," ")}),u=u.slice(n.length)),w.filter)!(r=Q[i].exec(u))||a[i]&&!(r=a[i](r))||(n=r.shift(),o.push({value:n,type:i,matches:r}),u=u.slice(n.length));if(!n)break}return t?u.length:u?ie.error(e):T(e,l).slice(0)},d=ie.compile=function(e,t){var n,r=[],o=[],i=L[e+" "];if(!i){for(n=(t=t||h(e)).length;n--;)(i=function e(t){for(var o,n,r,i=t.length,u=w.relative[t[0].type],l=u||w.relative[" "],a=u?1:0,c=me(function(e){return e===o},l,!0),s=me(function(e){return-1<z(o,e)},l,!0),f=[function(e,t,n){var r=!u&&(n||t!==N)||((o=t).nodeType?c:s)(e,t,n);return o=null,r}];a<i;a++)if(n=w.relative[t[a].type])f=[me(ye(f),n)];else{if((n=w.filter[t[a].type].apply(null,t[a].matches))[D]){for(r=++a;r<i&&!w.relative[t[r].type];r++);return be(1<a&&ye(f),1<a&&ge(t.slice(0,a-1).concat({value:" "===t[a-2].type?"*":""})).replace(G,"$1"),n,a<r&&e(t.slice(a,r)),r<i&&e(t=t.slice(r)),r<i&&ge(t))}f.push(n)}return ye(f)}(t[n]))[D]?r.push(i):o.push(i);(i=L(e,we(o,r))).selector=e}return i},g=ie.select=function(e,t,n,r){var o,i,u,l,a,c="function"==typeof e&&e,s=!r&&h(e=c.selector||e);if(n=n||[],1===s.length){if(2<(i=s[0]=s[0].slice(0)).length&&"ID"===(u=i[0]).type&&9===t.nodeType&&E&&w.relative[i[1].type]){if(!(t=(w.find.ID(u.matches[0].replace(te,f),t)||[])[0]))return n;c&&(t=t.parentNode),e=e.slice(i.shift().value.length)}for(o=Q.needsContext.test(e)?0:i.length;o--&&(u=i[o],!w.relative[l=u.type]);)if((a=w.find[l])&&(r=a(u.matches[0].replace(te,f),ee.test(i[0].type)&&pe(t.parentNode)||t))){if(i.splice(o,1),!(e=r.length&&ge(i)))return $.apply(n,r),n;break}}return(c||d(e,s))(r,t,!E,n,!t||ee.test(e)&&pe(t.parentNode)||t),n},p.sortStable=D.split("").sort(I).join("")===D,p.detectDuplicates=!!c,x(),p.sortDetached=ae(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ae(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ce("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),p.attributes&&ae(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ce("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ae(function(e){return null==e.getAttribute("disabled")})||ce(H,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null});var Ne=n.Sizzle;ie.noConflict=function(){return n.Sizzle===ie&&(n.Sizzle=Ne),ie},"function"==typeof define&&define.amd?define(function(){return ie}):"undefined"!=typeof module&&module.exports?module.exports=ie:n.Sizzle=ie}(window);