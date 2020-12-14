define(["../core","../core/stripAndCollapse","./support","../core/nodeName","../var/isFunction","../core/init"],function(s,n,e,u,a){"use strict";var i=/\r/g;s.fn.extend({val:function(t){var n,e,o,r=this[0];return arguments.length?(o=a(t),this.each(function(e){1===this.nodeType&&(null==(e=o?t.call(this,e,s(this).val()):t)?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=s.map(e,function(e){return null==e?"":e+""})),(n=s.valHooks[this.type]||s.valHooks[this.nodeName.toLowerCase()])&&"set"in n&&void 0!==n.set(this,e,"value")||(this.value=e))})):r?(n=s.valHooks[r.type]||s.valHooks[r.nodeName.toLowerCase()])&&"get"in n&&void 0!==(e=n.get(r,"value"))?e:"string"==typeof(e=r.value)?e.replace(i,""):null==e?"":e:void 0}}),s.extend({valHooks:{option:{get:function(e){var t=s.find.attr(e,"value");return null!=t?t:n(s.text(e))}},select:{get:function(e){for(var t,n=e.options,o=e.selectedIndex,r="select-one"===e.type,a=r?null:[],i=r?o+1:n.length,l=o<0?i:r?o:0;l<i;l++)if(((t=n[l]).selected||l===o)&&!t.disabled&&(!t.parentNode.disabled||!u(t.parentNode,"optgroup"))){if(t=s(t).val(),r)return t;a.push(t)}return a},set:function(e,t){for(var n,o,r=e.options,a=s.makeArray(t),i=r.length;i--;)((o=r[i]).selected=-1<s.inArray(s.valHooks.option.get(o),a))&&(n=!0);return n||(e.selectedIndex=-1),a}}}}),s.each(["radio","checkbox"],function(){s.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<s.inArray(s(e).val(),t)}},e.checkOn||(s.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})});