!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.scrollPlugin=n()}(this,function(){"use strict";function r(e){return Math.max(-1,Math.min(1,e.wheelDelta||-e.deltaY))}function o(e){e.preventDefault();var n=new CustomEvent("increment",{bubbles:!0});n.delta=r(e),e.target.dispatchEvent(n)}return function(){return function(e){var n,t=(n=e,function(e){e.preventDefault();e=r(e);n.changeMonth(e)});return{onReady:function(){e.timeContainer&&e.timeContainer.addEventListener("wheel",o),e.yearElements.forEach(function(e){return e.addEventListener("wheel",o)}),e.monthElements.forEach(function(e){return e.addEventListener("wheel",t)})},onDestroy:function(){e.timeContainer&&e.timeContainer.removeEventListener("wheel",o),e.yearElements.forEach(function(e){return e.removeEventListener("wheel",o)}),e.monthElements.forEach(function(e){return e.removeEventListener("wheel",t)})}}}}});