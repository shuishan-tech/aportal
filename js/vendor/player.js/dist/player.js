!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.Vimeo=e.Vimeo||{},e.Vimeo.Player=t())}(this,function(){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var e="undefined"!=typeof global&&"[object global]"==={}.toString.call(global);function i(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function c(e){return/^(https?:)?\/\/((player|www).)?vimeo.com(?=$|\/)/.test(e)}function u(e){var t,n=0<arguments.length&&void 0!==e?e:{},o=n.id,r=n.url,i=o||r;if(!i)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(t=i,!isNaN(parseFloat(t))&&isFinite(t)&&Math.floor(t)==t)return"https://vimeo.com/".concat(i);if(c(i))return i.replace("http:","https:");if(o)throw new TypeError("“".concat(o,"” is not a valid video id."));throw new TypeError("“".concat(i,"” is not a vimeo.com url."))}var t=void 0!==Array.prototype.indexOf,n="undefined"!=typeof window&&void 0!==window.postMessage;if(!(e||t&&n))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var a="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(e){if(!e.WeakMap){var n=Object.prototype.hasOwnProperty,o=function(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n};e.WeakMap=(o(t.prototype,"delete",function(e){if(r(this,"delete"),!a(e))return!1;var t=e[this._id];return!(!t||t[0]!==e||(delete e[this._id],0))}),o(t.prototype,"get",function(e){if(r(this,"get"),a(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}}),o(t.prototype,"has",function(e){if(r(this,"has"),!a(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)}),o(t.prototype,"set",function(e,t){if(r(this,"set"),!a(e))throw new TypeError("Invalid value used as weak map key");var n=e[this._id];return n&&n[0]===e?n[1]=t:o(e,this._id,[e,t]),this}),o(t,"_polyfill",!0),t)}function t(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(o(this,"_id","_WeakMap"+"_"+i()+"."+i()),0<arguments.length)throw new TypeError("WeakMap iterable is not supported")}function r(e,t){if(!a(e)||!n.call(e,"_id"))throw new TypeError(t+" method called on incompatible receiver "+typeof e)}function i(){return Math.random().toString().substring(2)}function a(e){return Object(e)===e}}("undefined"!=typeof self?self:"undefined"!=typeof window?window:a);var o,s=(function(e){var t,n,o;o=function(){var t,n,o,r,i,a,e=Object.prototype.toString,u="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),t=function(e,t,n,o){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==o})}}catch(e){t=function(e,t,n){return e[t]=n,e}}function c(e,t){this.fn=e,this.self=t,this.next=void 0}function s(e,t){o.add(e,t),n=n||u(o.drain)}function l(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function f(){for(var e=0;e<this.chain.length;e++)d(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function d(e,t,n){var o,r;try{!1===t?n.reject(e.msg):(o=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(r=l(o))?r.call(o,n.resolve,n.reject):n.resolve(o)}catch(e){n.reject(e)}}function h(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,0<t.chain.length&&s(f,t))}function v(e,n,o,r){for(var t=0;t<n.length;t++)!function(t){e.resolve(n[t]).then(function(e){o(t,e)},r)}(t)}function p(e){this.def=e,this.triggered=!1}function y(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function m(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var o=new y(this);this.then=function(e,t){var n={success:"function"!=typeof e||e,failure:"function"==typeof t&&t};return n.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");n.resolve=e,n.reject=t}),o.chain.push(n),0!==o.state&&s(f,o),n.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,function(e){(function e(n){var o,r=this;if(!r.triggered){r.triggered=!0,r.def&&(r=r.def);try{(o=l(n))?s(function(){var t=new p(r);try{o.call(n,function(){e.apply(t,arguments)},function(){h.apply(t,arguments)})}catch(e){h.call(t,e)}}):(r.msg=n,r.state=1,0<r.chain.length&&s(f,r))}catch(e){h.call(new p(r),e)}}}).call(o,e)},function(e){h.call(o,e)})}catch(e){h.call(o,e)}}var w=t({},"constructor",m,!(o={add:function(e,t){a=new c(e,t),i?i.next=a:r=a,i=a,a=void 0},drain:function(){var e=r;for(r=i=n=void 0;e;)e.fn.call(e.self),e=e.next}}));return t(m.prototype=w,"__NPO__",0,!1),t(m,"resolve",function(n){return n&&"object"==typeof n&&1===n.__NPO__?n:new this(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");e(n)})}),t(m,"reject",function(n){return new this(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");t(n)})}),t(m,"all",function(t){var a=this;return"[object Array]"!=e.call(t)?a.reject(TypeError("Not an array")):0===t.length?a.resolve([]):new a(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");var o=t.length,r=Array(o),i=0;v(a,t,function(e,t){r[e]=t,++i===o&&n(r)},e)})}),t(m,"race",function(t){var o=this;return"[object Array]"!=e.call(t)?o.reject(TypeError("Not an array")):new o(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");v(o,t,function(e,t){n(t)},e)})}),m},(n=a)[t="Promise"]=n[t]||o(),e.exports&&(e.exports=n[t])}(o={exports:{}},o.exports),o.exports),l=new WeakMap;function f(e,t,n){var o=l.get(e.element)||{};t in o||(o[t]=[]),o[t].push(n),l.set(e.element,o)}function d(e,t){return(l.get(e.element)||{})[t]||[]}function h(e,t,n){var o=l.get(e.element)||{};if(!o[t])return!0;if(!n)return o[t]=[],l.set(e.element,o),!0;var r=o[t].indexOf(n);return-1!==r&&o[t].splice(r,1),l.set(e.element,o),o[t]&&0===o[t].length}var v=["autopause","autoplay","background","byline","color","height","id","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","title","transparent","url","width"];function p(o,e){var t=1<arguments.length&&void 0!==e?e:{};return v.reduce(function(e,t){var n=o.getAttribute("data-vimeo-".concat(t));return!n&&""!==n||(e[t]=""===n?1:n),e},t)}function y(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var o=document.createElement("div");return o.innerHTML=n,t.appendChild(o.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function m(i,e,t){var a=1<arguments.length&&void 0!==e?e:{},u=2<arguments.length?t:void 0;return new Promise(function(t,n){if(!c(i))throw new TypeError("“".concat(i,"” is not a vimeo.com url."));var e="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(i),"&domain=").concat(window.location.hostname);for(var o in a)a.hasOwnProperty(o)&&(e+="&".concat(o,"=").concat(encodeURIComponent(a[o])));var r=new("XDomainRequest"in window?XDomainRequest:XMLHttpRequest);r.open("GET",e,!0),r.onload=function(){if(404!==r.status)if(403!==r.status)try{var e=JSON.parse(r.responseText);if(403===e.domain_status_code)return y(e,u),void n(new Error("“".concat(i,"” is not embeddable.")));t(e)}catch(e){n(e)}else n(new Error("“".concat(i,"” is not embeddable.")));else n(new Error("“".concat(i,"” was not found.")))},r.onerror=function(){var e=r.status?" (".concat(r.status,")"):"";n(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},r.send()})}function w(e){return"string"==typeof e&&(e=JSON.parse(e)),e}function g(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var o={method:t};void 0!==n&&(o.value=n);var r=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));8<=r&&r<10&&(o=JSON.stringify(o)),e.element.contentWindow.postMessage(o,e.origin)}}function b(n,o){var t,e=[];if((o=w(o)).event){if("error"===o.event)d(n,o.data.method).forEach(function(e){var t=new Error(o.data.message);t.name=o.data.name,e.reject(t),h(n,o.data.method,e)});e=d(n,"event:".concat(o.event)),t=o.data}else if(o.method){var r=function(e,t){var n=d(e,t);if(n.length<1)return!1;var o=n.shift();return h(e,t,o),o}(n,o.method);r&&(e.push(r),t=o.value)}e.forEach(function(e){try{if("function"==typeof e)return void e.call(n,t);e.resolve(t)}catch(e){}})}var k=new WeakMap,E=new WeakMap,T=function(){function n(i){var a=this,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),window.jQuery&&i instanceof jQuery&&(1<i.length&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),i=i[0]),"undefined"!=typeof document&&"string"==typeof i&&(i=document.getElementById(i)),!(i instanceof window.HTMLElement))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==i.nodeName){var e=i.querySelector("iframe");e&&(i=e)}if("IFRAME"===i.nodeName&&!c(i.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(k.has(i))return k.get(i);this.element=i,this.origin="*";var t=new s(function(r,t){function e(e){if(c(e.origin)&&a.element.contentWindow===e.source){"*"===a.origin&&(a.origin=e.origin);var t=w(e.data),n="event"in t&&"ready"===t.event,o="method"in t&&"ping"===t.method;if(n||o)return a.element.setAttribute("data-ready","true"),void r();b(a,t)}}if(window.addEventListener?window.addEventListener("message",e,!1):window.attachEvent&&window.attachEvent("onmessage",e),"IFRAME"!==a.element.nodeName){var n=p(i,o);m(u(n),n,i).then(function(e){var t,n,o,r=y(e,i);return a.element=r,a._originalElement=i,t=i,n=r,o=l.get(t),l.set(n,o),l.delete(t),k.set(a.element,a),e}).catch(function(e){return t(e)})}});return E.set(this,t),k.set(this.element,this),"IFRAME"===this.element.nodeName&&g(this,"ping"),this}var e,t,o;return e=n,(t=[{key:"callMethod",value:function(n,e){var o=this,r=1<arguments.length&&void 0!==e?e:{};return new s(function(e,t){return o.ready().then(function(){f(o,n,{resolve:e,reject:t}),g(o,n,r)}).catch(function(e){t(e)})})}},{key:"get",value:function(n){var o=this;return new s(function(e,t){return n=i(n,"get"),o.ready().then(function(){f(o,n,{resolve:e,reject:t}),g(o,n)})})}},{key:"set",value:function(o,e){var r=this;return s.resolve(e).then(function(n){if(o=i(o,"set"),null==n)throw new TypeError("There must be a value to set.");return r.ready().then(function(){return new s(function(e,t){f(r,o,{resolve:e,reject:t}),g(r,o,n)})})})}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===d(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch(function(){}),f(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");h(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch(function(e){})}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=E.get(this)||new s(function(e,t){t(new Error("Unknown player. Probably unloaded."))});return s.resolve(e)}},{key:"addCuePoint",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:{};return this.callMethod("addCuePoint",{time:e,data:n})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var t=this;return new s(function(e){E.delete(t),k.delete(t.element),t._originalElement&&(k.delete(t._originalElement),t._originalElement.removeAttribute("data-vimeo-initialized")),t.element&&"IFRAME"===t.element.nodeName&&t.element.remove(),e()})}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}])&&r(e.prototype,t),o&&r(e,o),n}();return e||!window.Vimeo||window.Vimeo.Player||(function(e){function n(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))}var t=0<arguments.length&&void 0!==e?e:document;[].slice.call(t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")).forEach(function(t){try{if(null!==t.getAttribute("data-vimeo-defer"))return;var e=p(t);m(u(e),e,t).then(function(e){return y(e,t)}).catch(n)}catch(e){n(e)}})}(),function(e){function t(e){if(c(e.origin)&&e.data&&"spacechange"===e.data.event)for(var t=o.querySelectorAll("iframe"),n=0;n<t.length;n++)if(t[n].contentWindow===e.source){t[n].parentElement.style.paddingBottom="".concat(e.data.data[0].bottom,"px");break}}var o=0<arguments.length&&void 0!==e?e:document;window.addEventListener?window.addEventListener("message",t,!1):window.attachEvent&&window.attachEvent("onmessage",t)}()),T});