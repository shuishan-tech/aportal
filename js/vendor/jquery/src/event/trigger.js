define(["../core","../var/document","../data/var/dataPriv","../data/var/acceptData","../var/hasOwn","../var/isFunction","../var/isWindow","../event"],function(f,y,m,w,h,x,P){"use strict";function b(e){e.stopPropagation()}var E=/^(?:focusinfocus|focusoutblur)$/;return f.extend(f.event,{trigger:function(e,t,n,r){var a,i,p,o,s,u,d,l=[n||y],g=h.call(e,"type")?e.type:e,v=h.call(e,"namespace")?e.namespace.split("."):[],c=d=i=n=n||y;if(3!==n.nodeType&&8!==n.nodeType&&!E.test(g+f.event.triggered)&&(-1<g.indexOf(".")&&(g=(v=g.split(".")).shift(),v.sort()),o=g.indexOf(":")<0&&"on"+g,(e=e[f.expando]?e:new f.Event(g,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=v.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:f.makeArray(t,[e]),u=f.event.special[g]||{},r||!u.trigger||!1!==u.trigger.apply(n,t))){if(!r&&!u.noBubble&&!P(n)){for(p=u.delegateType||g,E.test(p+g)||(c=c.parentNode);c;c=c.parentNode)l.push(c),i=c;i===(n.ownerDocument||y)&&l.push(i.defaultView||i.parentWindow||window)}for(a=0;(c=l[a++])&&!e.isPropagationStopped();)d=c,e.type=1<a?p:u.bindType||g,(s=(m.get(c,"events")||{})[e.type]&&m.get(c,"handle"))&&s.apply(c,t),(s=o&&c[o])&&s.apply&&w(c)&&(e.result=s.apply(c,t),!1===e.result&&e.preventDefault());return e.type=g,r||e.isDefaultPrevented()||u._default&&!1!==u._default.apply(l.pop(),t)||!w(n)||o&&x(n[g])&&!P(n)&&((i=n[o])&&(n[o]=null),f.event.triggered=g,e.isPropagationStopped()&&d.addEventListener(g,b),n[g](),e.isPropagationStopped()&&d.removeEventListener(g,b),f.event.triggered=void 0,i&&(n[o]=i)),e.result}},simulate:function(e,t,n){e=f.extend(new f.Event,n,{type:e,isSimulated:!0});f.event.trigger(e,null,t)}}),f.fn.extend({trigger:function(e,t){return this.each(function(){f.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return f.event.trigger(e,t,n,!0)}}),f});