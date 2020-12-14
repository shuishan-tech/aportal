var jsdom,jQuery,rulesEngine={};try{!jQuery&&module&&module.exports&&(jQuery=require("jquery"),jsdom=require("jsdom").jsdom,jQuery=jQuery(jsdom().defaultView))}catch(r){}!function(c,i){"use strict";var r={};i.forbiddenSequences=["0123456789","abcdefghijklmnopqrstuvwxyz","qwertyuiop","asdfghjkl","zxcvbnm","!@#$%^&*()_+"],r.wordNotEmail=function(r,e,n){return e.match(/^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i)?n:0},r.wordMinLength=function(r,e,n){var t=e.length,e=Math.pow(t,r.rules.raisePower);return t<r.common.minChar&&(e+=n),e},r.wordMaxLength=function(r,e,n){var t=e.length,e=Math.pow(t,r.rules.raisePower);return t>r.common.maxChar?n:e},r.wordInvalidChar=function(r,e,n){return r.common.invalidCharsRegExp.test(e)?n:0},r.wordMinLengthStaticScore=function(r,e,n){return e.length<r.common.minChar?0:n},r.wordMaxLengthStaticScore=function(r,e,n){return e.length>r.common.maxChar?0:n},r.wordSimilarToUsername=function(r,e,n){r=c(r.common.usernameField).val();return r&&e.toLowerCase().match(r.replace(/[\-\[\]\/\{\}\(\)\*\+\=\?\:\.\\\^\$\|\!\,]/g,"\\$&").toLowerCase())?n:0},r.wordTwoCharacterClasses=function(r,e,n){return e.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)||e.match(/([a-zA-Z])/)&&e.match(/([0-9])/)||e.match(/(.[!,@,#,$,%,\^,&,*,?,_,~])/)&&e.match(/[a-zA-Z0-9_]/)?n:0},r.wordRepetitions=function(r,e,n){return e.match(/(.)\1\1/)?n:0},r.wordSequences=function(r,n,e){var t,o=!1;return 2<n.length&&(c.each(i.forbiddenSequences,function(r,e){o||(e=[e,e.split("").reverse().join("")],c.each(e,function(r,e){for(t=0;t<n.length-2;t+=1)-1<e.indexOf(n.toLowerCase().substring(t,t+3))&&(o=!0)}))}),o)?e:0},r.wordLowercase=function(r,e,n){return e.match(/[a-z]/)&&n},r.wordUppercase=function(r,e,n){return e.match(/[A-Z]/)&&n},r.wordOneNumber=function(r,e,n){return e.match(/\d+/)&&n},r.wordThreeNumbers=function(r,e,n){return e.match(/(.*[0-9].*[0-9].*[0-9])/)&&n},r.wordOneSpecialChar=function(r,e,n){return e.match(/[!,@,#,$,%,\^,&,*,?,_,~]/)&&n},r.wordTwoSpecialChar=function(r,e,n){return e.match(/(.*[!,@,#,$,%,\^,&,*,?,_,~].*[!,@,#,$,%,\^,&,*,?,_,~])/)&&n},r.wordUpperLowerCombo=function(r,e,n){return e.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)&&n},r.wordLetterNumberCombo=function(r,e,n){return e.match(/([a-zA-Z])/)&&e.match(/([0-9])/)&&n},r.wordLetterNumberCharCombo=function(r,e,n){return e.match(/([a-zA-Z0-9].*[!,@,#,$,%,\^,&,*,?,_,~])|([!,@,#,$,%,\^,&,*,?,_,~].*[a-zA-Z0-9])/)&&n},r.wordIsACommonPassword=function(r,e,n){return 0<=c.inArray(e,r.rules.commonPasswords)?n:0},i.validation=r,i.executeRules=function(o,a){var u=0;return c.each(o.rules.activated,function(r,e){var n,t;e&&(n=o.rules.scores[r],e=i.validation[r],c.isFunction(e)||(e=o.rules.extra[r]),c.isFunction(e)&&((n=e(o,a,n))&&(u+=n),(n<0||!c.isNumeric(n)&&!n)&&0<(t=o.ui.spanError(o,r)).length&&o.instances.errors.push(t)))}),u}}(jQuery,rulesEngine);try{module&&module.exports&&(module.exports=rulesEngine)}catch(r){}