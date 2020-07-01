define(["./core","./var/concat","./var/isFunction","./var/push","./core/access","./manipulation/var/rcheckableType","./manipulation/var/rtagName","./manipulation/var/rscriptType","./manipulation/wrapMap","./manipulation/getAll","./manipulation/setGlobalEval","./manipulation/buildFragment","./manipulation/support","./data/var/dataPriv","./data/var/dataUser","./data/var/acceptData","./core/DOMEval","./core/nodeName","./core/init","./traversing","./selector","./event"],function(v,y,m,c,t,h,i,g,a,T,f,x,C,D,p,o,b,n){"use strict";var r=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,s=/<script|<style|<link/i,N=/checked\s*(?:[^=]|=\s*.checked.)/i,k=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function l(e,t){return n(e,"table")&&n(11!==t.nodeType?t:t.firstChild,"tr")&&v(e).children("tbody")[0]||e}function w(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function A(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function d(e,t){var n,r,i,a,o,c,s,l;if(1===t.nodeType){if(D.hasData(e)&&(a=D.access(e),o=D.set(t,a),l=a.events))for(i in delete o.handle,o.events={},l)for(n=0,r=l[i].length;n<r;n++)v.event.add(t,i,l[i][n]);p.hasData(e)&&(c=p.access(e),s=v.extend({},c),p.set(t,s))}}function L(n,r,i,a){r=y.apply([],r);var e,t,o,c,s,l,p=0,u=n.length,h=u-1,f=r[0],d=m(f);if(d||1<u&&"string"==typeof f&&!C.checkClone&&N.test(f))return n.each(function(e){var t=n.eq(e);d&&(r[0]=f.call(this,e,t.html())),L(t,r,i,a)});if(u&&(t=(e=x(r,n[0].ownerDocument,!1,n,a)).firstChild,1===e.childNodes.length&&(e=t),t||a)){for(c=(o=v.map(T(e,"script"),w)).length;p<u;p++)s=e,p!==h&&(s=v.clone(s,!0,!0),c&&v.merge(o,T(s,"script"))),i.call(n[p],s,p);if(c)for(l=o[o.length-1].ownerDocument,v.map(o,A),p=0;p<c;p++)s=o[p],g.test(s.type||"")&&!D.access(s,"globalEval")&&v.contains(l,s)&&(s.src&&"module"!==(s.type||"").toLowerCase()?v._evalUrl&&v._evalUrl(s.src):b(s.textContent.replace(k,""),l,s))}return n}function u(e,t,n){for(var r,i=t?v.filter(t,e):e,a=0;null!=(r=i[a]);a++)n||1!==r.nodeType||v.cleanData(T(r)),r.parentNode&&(n&&v.contains(r.ownerDocument,r)&&f(T(r,"script")),r.parentNode.removeChild(r));return e}return v.extend({htmlPrefilter:function(e){return e.replace(r,"<$1></$2>")},clone:function(e,t,n){var r,i,a,o,c,s,l,p=e.cloneNode(!0),u=v.contains(e.ownerDocument,e);if(!(C.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||v.isXMLDoc(e)))for(o=T(p),r=0,i=(a=T(e)).length;r<i;r++)c=a[r],s=o[r],l=void 0,"input"===(l=s.nodeName.toLowerCase())&&h.test(c.type)?s.checked=c.checked:"input"!==l&&"textarea"!==l||(s.defaultValue=c.defaultValue);if(t)if(n)for(a=a||T(e),o=o||T(p),r=0,i=a.length;r<i;r++)d(a[r],o[r]);else d(e,p);return 0<(o=T(p,"script")).length&&f(o,!u&&T(e,"script")),p},cleanData:function(e){for(var t,n,r,i=v.event.special,a=0;void 0!==(n=e[a]);a++)if(o(n)){if(t=n[D.expando]){if(t.events)for(r in t.events)i[r]?v.event.remove(n,r):v.removeEvent(n,r,t.handle);n[D.expando]=void 0}n[p.expando]&&(n[p.expando]=void 0)}}}),v.fn.extend({detach:function(e){return u(this,e,!0)},remove:function(e){return u(this,e)},text:function(e){return t(this,function(e){return void 0===e?v.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return L(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||l(this,e).appendChild(e)})},prepend:function(){return L(this,arguments,function(e){var t;1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(t=l(this,e)).insertBefore(e,t.firstChild)})},before:function(){return L(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return L(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(v.cleanData(T(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return t(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!s.test(e)&&!a[(i.exec(e)||["",""])[1].toLowerCase()]){e=v.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(v.cleanData(T(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return L(this,arguments,function(e){var t=this.parentNode;v.inArray(this,n)<0&&(v.cleanData(T(this)),t&&t.replaceChild(e,this))},n)}}),v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,o){v.fn[e]=function(e){for(var t,n=[],r=v(e),i=r.length-1,a=0;a<=i;a++)t=a===i?this:this.clone(!0),v(r[a])[o](t),c.apply(n,t.get());return this.pushStack(n)}}),v});