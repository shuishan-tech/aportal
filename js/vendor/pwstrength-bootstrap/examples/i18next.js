!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.i18next=e()}(this,function(){"use strict";function u(t){return null==t?"":""+t}function f(t,e,n){function o(t){return t&&-1<t.indexOf("###")?t.replace(/###/g,"."):t}function r(){return!t||"string"==typeof t}for(var i="string"!=typeof e?[].concat(e):e.split(".");1<i.length;){if(r())return{};var s=o(i.shift());!t[s]&&n&&(t[s]=new n),t=t[s]}return r()?{}:{obj:t,k:o(i.shift())}}function l(t,e,n){var o=f(t,e,Object);o.obj[o.k]=n}function p(t,e){var n=f(t,e),o=n.obj,r=n.k;if(o)return o[r]}function n(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function o(t){return"string"==typeof t?t.replace(/[&<>"'\/]/g,function(t){return x[t]}):t}function r(t){return t.charAt(0).toUpperCase()+t.slice(1)}function a(t){return"string"==typeof t.ns&&(t.ns=[t.ns]),"string"==typeof t.fallbackLng&&(t.fallbackLng=[t.fallbackLng]),"string"==typeof t.fallbackNS&&(t.fallbackNS=[t.fallbackNS]),t.whitelist&&t.whitelist.indexOf("cimode")<0&&(t.whitelist=t.whitelist.concat(["cimode"])),t}function c(){}function t(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i,s,h,g,L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},N=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},y=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},v=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(o=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&a.return&&a.return()}finally{if(r)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},m={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,e){var n;console&&console[t]&&(n=console)[t].apply(n,function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(e))}},b=new(M.prototype.init=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};this.prefix=e.prefix||"i18next:",this.logger=t||m,this.options=e,this.debug=e.debug},M.prototype.setDebug=function(t){this.debug=t},M.prototype.log=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"log","",!0)},M.prototype.warn=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"warn","",!0)},M.prototype.error=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"error","")},M.prototype.deprecate=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"warn","WARNING DEPRECATED: ",!0)},M.prototype.forward=function(t,e,n,o){return o&&!this.debug?null:("string"==typeof t[0]&&(t[0]=""+n+this.prefix+" "+t[0]),this.logger[e](t))},M.prototype.create=function(t){return new M(this.logger,N({prefix:this.prefix+":"+t+":"},this.options))},M),e=(K.prototype.on=function(t,e){var n=this;t.split(" ").forEach(function(t){n.observers[t]=n.observers[t]||[],n.observers[t].push(e)})},K.prototype.off=function(e,n){var o=this;this.observers[e]&&this.observers[e].forEach(function(){var t;n?-1<(t=o.observers[e].indexOf(n))&&o.observers[e].splice(t,1):delete o.observers[e]})},K.prototype.emit=function(n){for(var t=arguments.length,o=Array(1<t?t-1:0),e=1;e<t;e++)o[e-1]=arguments[e];this.observers[n]&&[].concat(this.observers[n]).forEach(function(t){t.apply(void 0,o)}),this.observers["*"]&&[].concat(this.observers["*"]).forEach(function(t){var e;t.apply(t,(e=[n]).concat.apply(e,o))})},K),x={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},S=(t(V,h=e),V.prototype.addNamespaces=function(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)},V.prototype.removeNamespaces=function(t){var e=this.options.ns.indexOf(t);-1<e&&this.options.ns.splice(e,1)},V.prototype.getResource=function(t,e,n){var o=(3<arguments.length&&void 0!==arguments[3]?arguments[3]:{}).keySeparator||this.options.keySeparator;void 0===o&&(o=".");var r=[t,e];return n&&"string"!=typeof n&&(r=r.concat(n)),n&&"string"==typeof n&&(r=r.concat(o?n.split(o):n)),-1<t.indexOf(".")&&(r=t.split(".")),p(this.data,r)},V.prototype.addResource=function(t,e,n,o){var r=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{silent:!1},i=this.options.keySeparator;void 0===i&&(i=".");var s=[t,e];n&&(s=s.concat(i?n.split(i):n)),-1<t.indexOf(".")&&(o=e,e=(s=t.split("."))[1]),this.addNamespaces(e),l(this.data,s,o),r.silent||this.emit("added",t,e,n,o)},V.prototype.addResources=function(t,e,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var r in n)"string"==typeof n[r]&&this.addResource(t,e,r,n[r],{silent:!0});o.silent||this.emit("added",t,e,n)},V.prototype.addResourceBundle=function(t,e,n,o,r){var i=5<arguments.length&&void 0!==arguments[5]?arguments[5]:{silent:!1},s=[t,e];-1<t.indexOf(".")&&(o=n,n=e,e=(s=t.split("."))[1]),this.addNamespaces(e);var a=p(this.data,s)||{};o?function t(e,n,o){for(var r in n)r in e?"string"==typeof e[r]||e[r]instanceof String||"string"==typeof n[r]||n[r]instanceof String?o&&(e[r]=n[r]):t(e[r],n[r],o):e[r]=n[r];return e}(a,n,r):a=N({},a,n),l(this.data,s,a),i.silent||this.emit("added",t,e,n)},V.prototype.removeResourceBundle=function(t,e){this.hasResourceBundle(t,e)&&delete this.data[t][e],this.removeNamespaces(e),this.emit("removed",t,e)},V.prototype.hasResourceBundle=function(t,e){return void 0!==this.getResource(t,e)},V.prototype.getResourceBundle=function(t,e){return e=e||this.options.defaultNS,"v1"===this.options.compatibilityAPI?N({},this.getResource(t,e)):this.getResource(t,e)},V.prototype.toJSON=function(){return this.data},V),k={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,e,n,o,r){var i=this;return t.forEach(function(t){i.processors[t]&&(e=i.processors[t].process(e,n,o,r))}),e}},w=(t(H,s=e),H.prototype.changeLanguage=function(t){t&&(this.language=t)},H.prototype.exists=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{interpolation:{}},n=this.resolve(t,e);return n&&void 0!==n.res},H.prototype.extractFromKey=function(t,e){var n=e.nsSeparator||this.options.nsSeparator;void 0===n&&(n=":");var o,r=e.keySeparator||this.options.keySeparator||".",i=e.ns||this.options.defaultNS;return n&&-1<t.indexOf(n)&&(o=t.split(n),(n!==r||n===r&&-1<this.options.ns.indexOf(o[0]))&&(i=o.shift()),t=o.join(r)),"string"==typeof i&&(i=[i]),{key:t,namespaces:i}},H.prototype.translate=function(t,n){var o=this;if("object"!==(void 0===n?"undefined":L(n))&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),n=n||{},null==t||""===t)return"";"number"==typeof t&&(t=String(t)),"string"==typeof t&&(t=[t]);var e=n.keySeparator||this.options.keySeparator||".",r=this.extractFromKey(t[t.length-1],n),i=r.key,s=r.namespaces,a=s[s.length-1],l=n.lng||this.language,u=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(l&&"cimode"===l.toLowerCase()){if(u){var p=n.nsSeparator||this.options.nsSeparator;return a+p+i}return i}var c=this.resolve(t,n),f=c&&c.res,h=c&&c.usedKey||i,g=Object.prototype.toString.apply(f),d=void 0!==n.joinArrays?n.joinArrays:this.options.joinArrays;if(f&&"string"!=typeof f&&"boolean"!=typeof f&&"number"!=typeof f&&["[object Number]","[object Function]","[object RegExp]"].indexOf(g)<0&&(!d||"[object Array]"!==g)){if(!n.returnObjects&&!this.options.returnObjects)return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,f,n):"key '"+i+" ("+this.language+")' returned an object instead of string.";if(n.keySeparator||this.options.keySeparator){var y,v="[object Array]"===g?[]:{};for(var m in f)Object.prototype.hasOwnProperty.call(f,m)&&(y=""+h+e+m,v[m]=this.translate(y,N({},n,{joinArrays:!1,ns:s})),v[m]===y&&(v[m]=f[m]));f=v}}else if(d&&"[object Array]"===g)(f=f.join(d))&&(f=this.extendTranslation(f,t,n));else{var b=!1,x=!1;this.isValidLookup(f)||void 0===n.defaultValue||(b=!0,f=n.defaultValue),this.isValidLookup(f)||(x=!0,f=i);var S=n.defaultValue&&n.defaultValue!==f&&this.options.updateMissing;if(x||b||S){this.logger.log(S?"updateKey":"missingKey",l,a,i,S?n.defaultValue:f);var k=[],w=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if("fallback"===this.options.saveMissingTo&&w&&w[0])for(var O=0;O<w.length;O++)k.push(w[O]);else"all"===this.options.saveMissingTo?k=this.languageUtils.toResolveHierarchy(n.lng||this.language):k.push(n.lng||this.language);var R=function(t,e){o.options.missingKeyHandler?o.options.missingKeyHandler(t,a,e,S?n.defaultValue:f,S,n):o.backendConnector&&o.backendConnector.saveMissing&&o.backendConnector.saveMissing(t,a,e,S?n.defaultValue:f,S,n),o.emit("missingKey",t,a,e,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&n.count?k.forEach(function(e){o.pluralResolver.getPluralFormsOfKey(e,i).forEach(function(t){return R([e],t)})}):R(k,i))}f=this.extendTranslation(f,t,n,c),x&&f===i&&this.options.appendNamespaceToMissingKey&&(f=a+":"+i),x&&this.options.parseMissingKeyHandler&&(f=this.options.parseMissingKeyHandler(f))}return f},H.prototype.extendTranslation=function(t,e,n,o){var r,i=this;this.i18nFormat&&this.i18nFormat.parse?t=this.i18nFormat.parse(t,n,o.usedLng,o.usedNS,o.usedKey):(n.interpolation&&this.interpolator.init(N({},n,{interpolation:N({},this.options.interpolation,n.interpolation)})),r=n.replace&&"string"!=typeof n.replace?n.replace:n,this.options.interpolation.defaultVariables&&(r=N({},this.options.interpolation.defaultVariables,r)),t=this.interpolator.interpolate(t,r,n.lng||this.language),!1!==n.nest&&(t=this.interpolator.nest(t,function(){return i.translate.apply(i,arguments)},n)),n.interpolation&&this.interpolator.reset());var s=n.postProcess||this.options.postProcess,a="string"==typeof s?[s]:s;return null!=t&&a&&a.length&&!1!==n.applyPostProcessor&&(t=k.handle(a,t,e,n,this)),t},H.prototype.resolve=function(t){var u=this,p=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=void 0,r=void 0,f=void 0,h=void 0;return"string"==typeof t&&(t=[t]),t.forEach(function(t){var e,s,n,a,l,o;u.isValidLookup(c)||(e=u.extractFromKey(t,p),s=e.key,r=s,n=e.namespaces,u.options.fallbackNS&&(n=n.concat(u.options.fallbackNS)),a=void 0!==p.count&&"string"!=typeof p.count,l=void 0!==p.context&&"string"==typeof p.context&&""!==p.context,o=p.lngs?p.lngs:u.languageUtils.toResolveHierarchy(p.lng||u.language),n.forEach(function(i){u.isValidLookup(c)||(h=i,o.forEach(function(t){if(!u.isValidLookup(c)){f=t;var e,n,o=s,r=[o];for(u.i18nFormat&&u.i18nFormat.addLookupKeys?u.i18nFormat.addLookupKeys(r,s,t,i,p):(e=void 0,a&&(e=u.pluralResolver.getSuffix(t,p.count)),a&&l&&r.push(o+e),l&&r.push(o+=""+u.options.contextSeparator+p.context),a&&r.push(o+=e));n=r.pop();)u.isValidLookup(c)||(c=u.getResource(t,i,n,p))}}))}))}),{res:c,usedKey:r,usedLng:f,usedNS:h}},H.prototype.isValidLookup=function(t){return!(void 0===t||!this.options.returnNull&&null===t||!this.options.returnEmptyString&&""===t)},H.prototype.getResource=function(t,e,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};return this.resourceStore.getResource(t,e,n,o)},H),O=(T.prototype.getScriptPartFromCode=function(t){if(!t||t.indexOf("-")<0)return null;var e=t.split("-");return 2===e.length?null:(e.pop(),this.formatLanguageCode(e.join("-")))},T.prototype.getLanguagePartFromCode=function(t){if(!t||t.indexOf("-")<0)return t;var e=t.split("-");return this.formatLanguageCode(e[0])},T.prototype.formatLanguageCode=function(t){if("string"==typeof t&&-1<t.indexOf("-")){var e=["hans","hant","latn","cyrl","cans","mong","arab"],n=t.split("-");return this.options.lowerCaseLng?n=n.map(function(t){return t.toLowerCase()}):2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),-1<e.indexOf(n[1].toLowerCase())&&(n[1]=r(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),-1<e.indexOf(n[1].toLowerCase())&&(n[1]=r(n[1].toLowerCase())),-1<e.indexOf(n[2].toLowerCase())&&(n[2]=r(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t},T.prototype.isWhitelisted=function(t){return"languageOnly"!==this.options.load&&!this.options.nonExplicitWhitelist||(t=this.getLanguagePartFromCode(t)),!this.whitelist||!this.whitelist.length||-1<this.whitelist.indexOf(t)},T.prototype.getFallbackCodes=function(t,e){if(!t)return[];if("string"==typeof t&&(t=[t]),"[object Array]"===Object.prototype.toString.apply(t))return t;if(!e)return t.default||[];var n=t[e];return(n=(n=(n=n||t[this.getScriptPartFromCode(e)])||t[this.formatLanguageCode(e)])||t.default)||[]},T.prototype.toResolveHierarchy=function(t,e){function n(t){t&&(o.isWhitelisted(t)?i.push(t):o.logger.warn("rejecting non-whitelisted language code: "+t))}var o=this,r=this.getFallbackCodes(e||this.options.fallbackLng||[],t),i=[];return"string"==typeof t&&-1<t.indexOf("-")?("languageOnly"!==this.options.load&&n(this.formatLanguageCode(t)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&n(this.getScriptPartFromCode(t)),"currentOnly"!==this.options.load&&n(this.getLanguagePartFromCode(t))):"string"==typeof t&&n(this.formatLanguageCode(t)),r.forEach(function(t){i.indexOf(t)<0&&n(o.formatLanguageCode(t))}),i},T),R=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","he","hi","hu","hy","ia","it","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","id","ja","jbo","ka","kk","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21}],C={1:function(t){return Number(1<t)},2:function(t){return Number(1!=t)},3:function(t){return 0},4:function(t){return Number(t%10==1&&t%100!=11?0:2<=t%10&&t%10<=4&&(t%100<10||20<=t%100)?1:2)},5:function(t){return Number(0===t?0:1==t?1:2==t?2:3<=t%100&&t%100<=10?3:11<=t%100?4:5)},6:function(t){return Number(1==t?0:2<=t&&t<=4?1:2)},7:function(t){return Number(1==t?0:2<=t%10&&t%10<=4&&(t%100<10||20<=t%100)?1:2)},8:function(t){return Number(1==t?0:2==t?1:8!=t&&11!=t?2:3)},9:function(t){return Number(2<=t)},10:function(t){return Number(1==t?0:2==t?1:t<7?2:t<11?3:4)},11:function(t){return Number(1==t||11==t?0:2==t||12==t?1:2<t&&t<20?2:3)},12:function(t){return Number(t%10!=1||t%100==11)},13:function(t){return Number(0!==t)},14:function(t){return Number(1==t?0:2==t?1:3==t?2:3)},15:function(t){return Number(t%10==1&&t%100!=11?0:2<=t%10&&(t%100<10||20<=t%100)?1:2)},16:function(t){return Number(t%10==1&&t%100!=11?0:0!==t?1:2)},17:function(t){return Number(1==t||t%10==1?0:1)},18:function(t){return Number(0==t?0:1==t?1:2)},19:function(t){return Number(1==t?0:0===t||1<t%100&&t%100<11?1:10<t%100&&t%100<20?2:3)},20:function(t){return Number(1==t?0:0===t||0<t%100&&t%100<20?1:2)},21:function(t){return Number(t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0)}},j=(U.prototype.addRule=function(t,e){this.rules[t]=e},U.prototype.getRule=function(t){return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]},U.prototype.needsPlural=function(t){var e=this.getRule(t);return e&&1<e.numbers.length},U.prototype.getPluralFormsOfKey=function(n,o){var r=this,i=[],t=this.getRule(n);return t&&t.numbers.forEach(function(t){var e=r.getSuffix(n,t);i.push(""+o+e)}),i},U.prototype.getSuffix=function(t,e){var n=this,o=this.getRule(t);if(o){var r=o.noAbs?o.plurals(e):o.plurals(Math.abs(e)),i=o.numbers[r];this.options.simplifyPluralSuffix&&2===o.numbers.length&&1===o.numbers[0]&&(2===i?i="plural":1===i&&(i=""));var s=function(){return n.options.prepend&&i.toString()?n.options.prepend+i.toString():i.toString()};return"v1"===this.options.compatibilityJSON?1===i?"":"number"==typeof i?"_plural_"+i.toString():s():"v2"===this.options.compatibilityJSON||2===o.numbers.length&&1===o.numbers[0]||2===o.numbers.length&&1===o.numbers[0]?s():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}return this.logger.warn("no plural rule found for: "+t),""},U),E=(A.prototype.init=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};arguments[1]&&(this.options=t,this.format=t.interpolation&&t.interpolation.format||function(t){return t},this.escape=t.interpolation&&t.interpolation.escape||o),t.interpolation||(t.interpolation={escapeValue:!0});var e=t.interpolation;this.escapeValue=void 0===e.escapeValue||e.escapeValue,this.prefix=e.prefix?n(e.prefix):e.prefixEscaped||"{{",this.suffix=e.suffix?n(e.suffix):e.suffixEscaped||"}}",this.formatSeparator=e.formatSeparator?e.formatSeparator:e.formatSeparator||",",this.unescapePrefix=e.unescapeSuffix?"":e.unescapePrefix||"-",this.unescapeSuffix=!this.unescapePrefix&&e.unescapeSuffix||"",this.nestingPrefix=e.nestingPrefix?n(e.nestingPrefix):e.nestingPrefixEscaped||n("$t("),this.nestingSuffix=e.nestingSuffix?n(e.nestingSuffix):e.nestingSuffixEscaped||n(")"),this.maxReplaces=e.maxReplaces?e.maxReplaces:1e3,this.resetRegExp()},A.prototype.reset=function(){this.options&&this.init(this.options)},A.prototype.resetRegExp=function(){var t=this.prefix+"(.+?)"+this.suffix;this.regexp=new RegExp(t,"g");var e=""+this.prefix+this.unescapePrefix+"(.+?)"+this.unescapeSuffix+this.suffix;this.regexpUnescape=new RegExp(e,"g");var n=this.nestingPrefix+"(.+?)"+this.nestingSuffix;this.nestingRegexp=new RegExp(n,"g")},A.prototype.interpolate=function(t,r,i){function e(t){if(t.indexOf(s.formatSeparator)<0)return p(r,t);var e=t.split(s.formatSeparator),n=e.shift().trim(),o=e.join(s.formatSeparator).trim();return s.format(p(r,n),o,i)}var n,s=this,o=void 0,a=void 0,l=void 0;for(this.resetRegExp(),l=0;(o=this.regexpUnescape.exec(t))&&(a=e(o[1].trim()),t=t.replace(o[0],a),this.regexpUnescape.lastIndex=0,!(++l>=this.maxReplaces)););for(l=0;(o=this.regexp.exec(t))&&(void 0===(a=e(o[1].trim()))?a="function"==typeof this.options.missingInterpolationHandler?"string"==typeof(n=this.options.missingInterpolationHandler(t,o))?n:"":(this.logger.warn("missed to pass in variable "+o[1]+" for interpolating "+t),""):"string"!=typeof a&&(a=u(a)),a=(this.escapeValue?this.escape(a):a).replace(/\$/g,"$$$$"),t=t.replace(o[0],a),this.regexp.lastIndex=0,!(++l>=this.maxReplaces)););return t},A.prototype.nest=function(t,e){function n(t,e){if(t.indexOf(",")<0)return t;var n=t.split(",");t=n.shift();var o=n.join(",");o=(o=this.interpolate(o,i)).replace(/'/g,'"');try{i=JSON.parse(o),e&&(i=N({},e,i))}catch(e){this.logger.error("failed parsing options string in nesting for key "+t,e)}return t}var o=void 0,r=void 0,i=N({},2<arguments.length&&void 0!==arguments[2]?arguments[2]:{});for(i.applyPostProcessor=!1;o=this.nestingRegexp.exec(t);){if((r=e(n.call(this,o[1].trim(),i),i))&&o[0]===t&&"string"!=typeof r)return r;"string"!=typeof r&&(r=u(r)),r||(this.logger.warn("missed to resolve "+o[1]+" for nesting "+t),r=""),t=t.replace(o[0],r),this.regexp.lastIndex=0}return t},A),P=(t(F,i=e),F.prototype.queueLoad=function(t,e,n){var r=this,i=[],s=[],a=[],l=[];return t.forEach(function(n){var o=!0;e.forEach(function(t){var e=n+"|"+t;r.store.hasResourceBundle(n,t)?r.state[e]=2:r.state[e]<0||(1===r.state[e]?s.indexOf(e)<0&&s.push(e):(r.state[e]=1,o=!1,s.indexOf(e)<0&&s.push(e),i.indexOf(e)<0&&i.push(e),l.indexOf(t)<0&&l.push(t)))}),o||a.push(n)}),(i.length||s.length)&&this.queue.push({pending:s,loaded:{},errors:[],callback:n}),{toLoad:i,pending:s,toLoadLanguages:a,toLoadNamespaces:l}},F.prototype.loaded=function(a,l,t){var u=this,e=a.split("|"),n=v(e,2),p=n[0],c=n[1];l&&this.emit("failedLoading",p,c,l),t&&this.store.addResourceBundle(p,c,t),this.state[a]=l?-1:2,this.queue.forEach(function(t){var e,n,o,r,i,s;e=t.loaded,n=c,r=f(e,[p],Object),i=r.obj,s=r.k,i[s]=i[s]||[],o&&(i[s]=i[s].concat(n)),o||i[s].push(n),function(t,e){for(var n=t.indexOf(e);-1!==n;)t.splice(n,1),n=t.indexOf(e)}(t.pending,a),l&&t.errors.push(l),0!==t.pending.length||t.done||(u.emit("loaded",t.loaded),t.done=!0,t.errors.length?t.callback(t.errors):t.callback())}),this.queue=this.queue.filter(function(t){return!t.done})},F.prototype.read=function(n,o,r){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0,s=this,a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:250,l=arguments[5];return n.length?this.backend[r](n,o,function(t,e){t&&e&&i<5?setTimeout(function(){s.read.call(s,n,o,r,i+1,2*a,l)},a):l(t,e)}):l(null,{})},F.prototype.load=function(t,e,n){var o=this;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();"string"==typeof t&&(t=this.languageUtils.toResolveHierarchy(t)),"string"==typeof e&&(e=[e]);var r=this.queueLoad(t,e,n);if(!r.toLoad.length)return r.pending.length||n(),null;r.toLoad.forEach(function(t){o.loadOne(t)})},F.prototype.reload=function(t,n){var o=this;this.backend||this.logger.warn("No backend was added via i18next.use. Will not load resources."),"string"==typeof t&&(t=this.languageUtils.toResolveHierarchy(t)),"string"==typeof n&&(n=[n]),t.forEach(function(e){n.forEach(function(t){o.loadOne(e+"|"+t,"re")})})},F.prototype.loadOne=function(n){var o=this,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",t=n.split("|"),e=v(t,2),i=e[0],s=e[1];this.read(i,s,"read",null,null,function(t,e){t&&o.logger.warn(r+"loading namespace "+s+" for language "+i+" failed",t),!t&&e&&o.logger.log(r+"loaded namespace "+s+" for language "+i,e),o.loaded(n,t,e)})},F.prototype.saveMissing=function(t,e,n,o,r){var i=5<arguments.length&&void 0!==arguments[5]?arguments[5]:{};this.backend&&this.backend.create&&this.backend.create(t,e,n,o,null,N({},i,{isUpdate:r})),t&&t[0]&&this.store.addResource(t[0],e,n,o)},F);function F(t,e,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};d(this,F);var r=y(this,i.call(this));return r.backend=t,r.store=e,r.languageUtils=n.languageUtils,r.options=o,r.logger=b.create("backendConnector"),r.state={},r.queue=[],r.backend&&r.backend.init&&r.backend.init(n,o.backend,o),r}function A(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};d(this,A),this.logger=b.create("interpolator"),this.init(t,!0)}function U(t){var n,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};d(this,U),this.languageUtils=t,this.options=e,this.logger=b.create("pluralResolver"),this.rules=(n={},R.forEach(function(e){e.lngs.forEach(function(t){n[t]={numbers:e.nr,plurals:C[e.fc]}})}),n)}function T(t){d(this,T),this.options=t,this.whitelist=this.options.whitelist||!1,this.logger=b.create("languageUtils")}function H(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};d(this,H);var n,o,r=y(this,s.call(this));return n=t,o=r,["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat"].forEach(function(t){n[t]&&(o[t]=n[t])}),r.options=e,r.logger=b.create("translator"),r}function V(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};d(this,V);var n=y(this,h.call(this));return n.data=t||{},n.options=e,n}function K(){d(this,K),this.observers={}}function M(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};d(this,M),this.init(t,e)}return t(D,g=e),D.prototype.init=function(){function t(t){return t?"function"==typeof t?new t:t:null}var e,n,r=this,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1];function s(){r.changeLanguage(r.options.lng,function(t,e){r.isInitialized=!0,r.logger.log("initialized",r.options),r.emit("initialized",r.options),i(t,e)})}return"function"==typeof o&&(i=o,o={}),this.options=N({},{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,whitelist:!1,nonExplicitWhitelist:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:function(){},parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){var e={};return t[1]&&(e.defaultValue=t[1]),t[2]&&(e.tDescription=t[2]),e},interpolation:{escapeValue:!0,format:function(t,e,n){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",maxReplaces:1e3}},this.options,a(o)),this.format=this.options.interpolation.format,i=i||c,this.options.isClone||(this.modules.logger?b.init(t(this.modules.logger),this.options):b.init(null,this.options),e=new O(this.options),this.store=new S(this.options.resources,this.options),(n=this.services).logger=b,n.resourceStore=this.store,n.languageUtils=e,n.pluralResolver=new j(e,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),n.interpolator=new E(this.options),n.backendConnector=new P(t(this.modules.backend),n.resourceStore,n,this.options),n.backendConnector.on("*",function(t){for(var e=arguments.length,n=Array(1<e?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];r.emit.apply(r,[t].concat(n))}),this.modules.languageDetector&&(n.languageDetector=t(this.modules.languageDetector),n.languageDetector.init(n,this.options.detection,this.options)),this.modules.i18nFormat&&(n.i18nFormat=t(this.modules.i18nFormat),n.i18nFormat.init&&n.i18nFormat.init(this)),this.translator=new w(this.services,this.options),this.translator.on("*",function(t){for(var e=arguments.length,n=Array(1<e?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];r.emit.apply(r,[t].concat(n))}),this.modules.external.forEach(function(t){t.init&&t.init(r)})),["getResource","addResource","addResources","addResourceBundle","removeResourceBundle","hasResourceBundle","getResourceBundle"].forEach(function(e){r[e]=function(){var t;return(t=r.store)[e].apply(t,arguments)}}),this.options.resources||!this.options.initImmediate?s():setTimeout(s,0),this},D.prototype.loadResources=function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:c;if(this.options.resources)t(null);else{if(this.language&&"cimode"===this.language.toLowerCase())return t();var n=[],o=function(t){t&&e.services.languageUtils.toResolveHierarchy(t).forEach(function(t){n.indexOf(t)<0&&n.push(t)})};this.language?o(this.language):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(o),this.options.preload&&this.options.preload.forEach(o),this.services.backendConnector.load(n,this.options.ns,t)}},D.prototype.reloadResources=function(t,e){t=t||this.languages,e=e||this.options.ns,this.services.backendConnector.reload(t,e)},D.prototype.use=function(t){return"backend"===t.type&&(this.modules.backend=t),("logger"===t.type||t.log&&t.warn&&t.error)&&(this.modules.logger=t),"languageDetector"===t.type&&(this.modules.languageDetector=t),"i18nFormat"===t.type&&(this.modules.i18nFormat=t),"postProcessor"===t.type&&k.addPostProcessor(t),"3rdParty"===t.type&&this.modules.external.push(t),this},D.prototype.changeLanguage=function(t,r){function e(o){o&&(i.language=o,i.languages=i.services.languageUtils.toResolveHierarchy(o),i.translator.language||i.translator.changeLanguage(o),i.services.languageDetector&&i.services.languageDetector.cacheUserLanguage(o)),i.loadResources(function(t){var e,n;e=t,n=o,i.translator.changeLanguage(n),n&&(i.emit("languageChanged",n),i.logger.log("languageChanged",n)),r&&r(e,function(){return i.t.apply(i,arguments)})})}var i=this;t||!this.services.languageDetector||this.services.languageDetector.async?!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect(e):e(t):e(this.services.languageDetector.detect())},D.prototype.getFixedT=function(t,e){function s(t,e){for(var n=arguments.length,o=Array(2<n?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];var i=N({},e);return"object"!==(void 0===e?"undefined":L(e))&&(i=a.options.overloadTranslationOptionHandler([t,e].concat(o))),i.lng=i.lng||s.lng,i.lngs=i.lngs||s.lngs,i.ns=i.ns||s.ns,a.t(t,i)}var a=this;return"string"==typeof t?s.lng=t:s.lngs=t,s.ns=e,s},D.prototype.t=function(){var t;return this.translator&&(t=this.translator).translate.apply(t,arguments)},D.prototype.exists=function(){var t;return this.translator&&(t=this.translator).exists.apply(t,arguments)},D.prototype.setDefaultNamespace=function(t){this.options.defaultNS=t},D.prototype.loadNamespaces=function(t,e){var n=this;if(!this.options.ns)return e&&e();"string"==typeof t&&(t=[t]),t.forEach(function(t){n.options.ns.indexOf(t)<0&&n.options.ns.push(t)}),this.loadResources(e)},D.prototype.loadLanguages=function(t,e){"string"==typeof t&&(t=[t]);var n=this.options.preload||[],o=t.filter(function(t){return n.indexOf(t)<0});if(!o.length)return e();this.options.preload=n.concat(o),this.loadResources(e)},D.prototype.dir=function(t){return!(t=t||(this.languages&&0<this.languages.length?this.languages[0]:this.language))||0<=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(t))?"rtl":"ltr"},D.prototype.createInstance=function(){return new D(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},arguments[1])},D.prototype.cloneInstance=function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:c,o=N({},this.options,t,{isClone:!0}),r=new D(o);return["store","services","language"].forEach(function(t){r[t]=e[t]}),r.translator=new w(r.services,r.options),r.translator.on("*",function(t){for(var e=arguments.length,n=Array(1<e?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];r.emit.apply(r,[t].concat(n))}),r.init(o,n),r.translator.options=r.options,r},new D;function D(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];d(this,D);var n,o=y(this,g.call(this));if(o.options=a(t),o.services={},o.logger=b,o.modules={external:[]},e&&!o.isInitialized&&!t.isClone){if(!o.options.initImmediate)return n=o.init(t,e),y(o,n);setTimeout(function(){o.init(t,e)},0)}return o}});