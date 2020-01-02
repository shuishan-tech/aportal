define(["./core","./core/access","./var/document","./var/documentElement","./var/isFunction","./css/var/rnumnonpx","./css/curCSS","./css/addGetHookIf","./css/support","./var/isWindow","./core/init","./css","./selector"],function(u,o,t,e,d,s,n,f,i,c){"use strict";return u.offset={setOffset:function(t,e,o){var s,n,f,i,c,r,l=u.css(t,"position"),a=u(t),p={};"static"===l&&(t.style.position="relative"),c=a.offset(),f=u.css(t,"top"),r=u.css(t,"left"),n=("absolute"===l||"fixed"===l)&&-1<(f+r).indexOf("auto")?(i=(s=a.position()).top,s.left):(i=parseFloat(f)||0,parseFloat(r)||0),d(e)&&(e=e.call(t,o,u.extend({},c))),null!=e.top&&(p.top=e.top-c.top+i),null!=e.left&&(p.left=e.left-c.left+n),"using"in e?e.using.call(t,p):a.css(p)}},u.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){u.offset.setOffset(this,e,t)});var t,o,s=this[0];return s?s.getClientRects().length?(t=s.getBoundingClientRect(),o=s.ownerDocument.defaultView,{top:t.top+o.pageYOffset,left:t.left+o.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var t,e,o,s=this[0],n={top:0,left:0};if("fixed"===u.css(s,"position"))e=s.getBoundingClientRect();else{for(e=this.offset(),o=s.ownerDocument,t=s.offsetParent||o.documentElement;t&&(t===o.body||t===o.documentElement)&&"static"===u.css(t,"position");)t=t.parentNode;t&&t!==s&&1===t.nodeType&&((n=u(t).offset()).top+=u.css(t,"borderTopWidth",!0),n.left+=u.css(t,"borderLeftWidth",!0))}return{top:e.top-n.top-u.css(s,"marginTop",!0),left:e.left-n.left-u.css(s,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&"static"===u.css(t,"position");)t=t.offsetParent;return t||e})}}),u.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var f="pageYOffset"===n;u.fn[e]=function(t){return o(this,function(t,e,o){var s;if(c(t)?s=t:9===t.nodeType&&(s=t.defaultView),void 0===o)return s?s[n]:t[e];s?s.scrollTo(f?s.pageXOffset:o,f?o:s.pageYOffset):t[e]=o},e,t,arguments.length)}}),u.each(["top","left"],function(t,o){u.cssHooks[o]=f(i.pixelPosition,function(t,e){if(e)return e=n(t,o),s.test(e)?u(t).position()[o]+"px":e})}),u});