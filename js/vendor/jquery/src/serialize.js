define(["./core","./core/toType","./manipulation/var/rcheckableType","./var/isFunction","./core/init","./traversing","./attributes/prop"],function(s,u,n,a){"use strict";var o=/\[\]$/,r=/\r?\n/g,t=/^(?:submit|button|image|reset|file)$/i,i=/^(?:input|select|textarea|keygen)/i;return s.param=function(e,n){function t(e,n){n=a(n)?n():n,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)}var r,i=[];if(Array.isArray(e)||e.jquery&&!s.isPlainObject(e))s.each(e,function(){t(this.name,this.value)});else for(r in e)!function t(r,e,i,a){if(Array.isArray(e))s.each(e,function(e,n){i||o.test(r)?a(r,n):t(r+"["+("object"==typeof n&&null!=n?e:"")+"]",n,i,a)});else if(i||"object"!==u(e))a(r,e);else for(var n in e)t(r+"["+n+"]",e[n],i,a)}(r,e[r],n,t);return i.join("&")},s.fn.extend({serialize:function(){return s.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=s.prop(this,"elements");return e?s.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!s(this).is(":disabled")&&i.test(this.nodeName)&&!t.test(e)&&(this.checked||!n.test(e))}).map(function(e,n){var t=s(this).val();return null==t?null:Array.isArray(t)?s.map(t,function(e){return{name:n.name,value:e.replace(r,"\r\n")}}):{name:n.name,value:t.replace(r,"\r\n")}}).get()}}),s});