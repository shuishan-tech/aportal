define(["../core","../core/stripAndCollapse","./support","../core/nodeName","../var/isFunction","../core/init"],function(u,n,e,c,a){"use strict";var i=/\r/g;u.fn.extend({val:function(n){var o,e,r,t=this[0];return arguments.length?(r=a(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=r?n.call(this,e,u(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=u.map(t,function(e){return null==e?"":e+""})),(o=u.valHooks[this.type]||u.valHooks[this.nodeName.toLowerCase()])&&"set"in o&&void 0!==o.set(this,t,"value")||(this.value=t))})):t?(o=u.valHooks[t.type]||u.valHooks[t.nodeName.toLowerCase()])&&"get"in o&&void 0!==(e=o.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(i,""):null==e?"":e:void 0}}),u.extend({valHooks:{option:{get:function(e){var t=u.find.attr(e,"value");return null!=t?t:n(u.text(e))}},select:{get:function(e){var t,n,o,r=e.options,a=e.selectedIndex,i="select-one"===e.type,l=i?null:[],s=i?a+1:r.length;for(o=a<0?s:i?a:0;o<s;o++)if(((n=r[o]).selected||o===a)&&!n.disabled&&(!n.parentNode.disabled||!c(n.parentNode,"optgroup"))){if(t=u(n).val(),i)return t;l.push(t)}return l},set:function(e,t){for(var n,o,r=e.options,a=u.makeArray(t),i=r.length;i--;)((o=r[i]).selected=-1<u.inArray(u.valHooks.option.get(o),a))&&(n=!0);return n||(e.selectedIndex=-1),a}}}}),u.each(["radio","checkbox"],function(){u.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<u.inArray(u(e).val(),t)}},e.checkOn||(u.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})});