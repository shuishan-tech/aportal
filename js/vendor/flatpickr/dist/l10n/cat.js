!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.cat={})}(this,function(e){"use strict";var n="undefined"!=typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},r={weekdays:{shorthand:["Dg","Dl","Dt","Dc","Dj","Dv","Ds"],longhand:["Diumenge","Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte"]},months:{shorthand:["Gen","Febr","Març","Abr","Maig","Juny","Jul","Ag","Set","Oct","Nov","Des"],longhand:["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"]},ordinal:function(e){var n=e%100;if(3<n&&n<21)return"è";switch(n%10){case 1:return"r";case 2:return"n";case 3:return"r";case 4:return"t";default:return"è"}},firstDayOfWeek:1};n.l10ns.cat=r;var t=n.l10ns;e.Catalan=r,e.default=t,Object.defineProperty(e,"__esModule",{value:!0})});