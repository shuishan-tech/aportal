!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.rangePlugin=t()}(this,function(){"use strict";return function(n){return void 0===n&&(n={}),function(a){var s,c,l,d="",t={onParseConfig:function(){a.config.mode="range",d=a.config.altInput?a.config.altFormat:a.config.dateFormat},onReady:function(){var e;n.input?s=n.input instanceof Element?n.input:window.document.querySelector(n.input):((s=a._input.cloneNode()).removeAttribute("id"),s._flatpickr=void 0),!s.value||(e=a.parseDate(s.value))&&a.selectedDates.push(e),s.setAttribute("data-fp-omit",""),a._bind(s,["focus","click"],function(){a.selectedDates[1]&&(a.latestSelectedDateObj=a.selectedDates[1],a._setHoursFromDate(a.selectedDates[1]),a.jumpToDate(a.selectedDates[1])),c=!0,a.isOpen=!1,a.open(void 0,s)}),a._bind(a._input,["focus","click"],function(e){e.preventDefault(),a.isOpen=!1,a.open()}),a.config.allowInput&&a._bind(s,"keydown",function(e){"Enter"===e.key&&(a.setDate([a.selectedDates[0],s.value],!0,d),s.click())}),n.input||a._input.parentNode&&a._input.parentNode.insertBefore(s,a._input.nextSibling),a.config.ignoredFocusElements.push(s),a.config.allowInput?(a._input.removeAttribute("readonly"),s.removeAttribute("readonly")):s.setAttribute("readonly","readonly"),a._bind(a._input,"focus",function(){a.latestSelectedDateObj=a.selectedDates[0],a._setHoursFromDate(a.selectedDates[0]),c=!1,a.jumpToDate(a.selectedDates[0])}),a.config.allowInput&&a._bind(a._input,"keydown",function(e){"Enter"===e.key&&a.setDate([a._input.value,a.selectedDates[1]],!0,d)}),a.setDate(a.selectedDates,!1),t.onValueUpdate(a.selectedDates)},onPreCalendarPosition:function(){c&&(a._positionElement=s,setTimeout(function(){a._positionElement=a._input},0))},onChange:function(){a.selectedDates.length||setTimeout(function(){a.selectedDates.length||(s.value="",l=[])},10),c&&setTimeout(function(){s.focus()},0)},onDestroy:function(){n.input||s.parentNode&&s.parentNode.removeChild(s)},onValueUpdate:function(e){var t,n,o,i,u;s&&((l=!l||e.length>=l.length?e.concat():l).length>e.length&&(t=e[0],n=c?[l[0],t]:[t,l[1]],a.setDate(n,!1),l=n.concat()),i=(o=a.selectedDates.map(function(e){return a.formatDate(e,d)}))[0],a._input.value=void 0===i?"":i,u=o[1],s.value=void 0===u?"":u)}};return t}}});