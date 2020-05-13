!function(c){"use strict";c.HSCore.components.HSModalWindow={_baseConfig:{bounds:100,debounce:50,overlayOpacity:.48,overlayColor:"#000000",speed:400,type:"onscroll",effect:"fadein",modalIsClosingByEsc:!0,modalIsClosingByOverlay:!0,onOpen:function(){},onClose:function(){},onComplete:function(){}},_pageCollection:c(),init:function(o,e){var t=c(o);if(t.length)return(e=e&&c.isPlainObject(e)?c.extend({},this._baseConfig,e):this._baseConfig).selector=o,this._pageCollection=this._pageCollection.add(t.not(this._pageCollection)),e.autonomous?this.initAutonomousModalWindows(t,e):this.initBaseModalWindows(t,e)},initBaseModalWindows:function(o,i){return o.on("click",function(o){var e,t,a,n,l;"Custombox"in window&&(e=c(this),t=e.data("modal-target"),a=e.data("modal-effect")||i.effect,n=void 0!==e.data("modal-is-closing-by-esc")?Boolean(e.data("modal-is-closing-by-esc")):i.modalIsClosingByEsc,l=void 0!==e.data("modal-is-closing-by-overlay")?Boolean(e.data("modal-is-closing-by-overlay")):i.modalIsClosingByOverlay,t&&c(t).length&&(new Custombox.modal({content:{target:t,effect:a,close:n,onOpen:function(){i.onOpen.call(c(t))},onClose:function(){i.onClose.call(c(t))},onComplete:function(){i.onComplete.call(c(t))}},overlay:{color:e.data("overlay-color")||i.overlayColor,opacity:e.data("overlay-opacity")||i.overlayOpacity,close:l,speedIn:e.data("speed")||i.speed,speedOut:e.data("speed")||i.speed}}).open(),o.preventDefault()))})},initAutonomousModalWindows:function(o,a){var n=this;return o.each(function(o,e){var t=c(e);switch(t.data("modal-type")){case"hashlink":n.initHashLinkPopup(t,a);break;case"onscroll":n.initOnScrollPopup(t,a);break;case"beforeunload":n.initBeforeUnloadPopup(t,a);break;case"ontarget":n.initOnTargetPopup(t,a);break;case"aftersometime":n.initAfterSomeTimePopup(t,a)}})},initHashLinkPopup:function(o,e){var t=c(window.location.hash),a=c("#"+o.attr("id"));t.length&&t.attr("id")==o.attr("id")&&new Custombox.modal({content:{target:"#"+o.attr("id"),effect:o.data("effect")||e.effect,onOpen:function(){e.onOpen.call(c(a))},onClose:function(){e.onClose.call(c(a))},onComplete:function(){e.onComplete.call(c(a))}},overlay:{color:o.data("overlay-color")||e.overlayColor,opacity:o.data("overlay-opacity")||e.overlayOpacity,speedIn:o.data("speed")||e.speed,speedOut:o.data("speed")||e.speed}}).open()},initOnScrollPopup:function(e,t){var a=c(window),n=e.data("breakpoint")?e.data("breakpoint"):0,l=c("#"+e.attr("id"));a.on("scroll.popup",function(){var o=a.scrollTop()+a.height();n<=o&&(new Custombox.modal({content:{target:"#"+e.attr("id"),effect:e.data("effect")||t.effect,onOpen:function(){t.onOpen.call(c(l))},onClose:function(){t.onClose.call(c(l))},onComplete:function(){t.onComplete.call(c(l))}},overlay:{color:e.data("overlay-color")||t.overlayColor,opacity:e.data("overlay-opacity")||t.overlayOpacity,speedIn:e.data("speed")||t.speed,speedOut:e.data("speed")||t.speed}}).open(),a.off("scroll.popup"))}),a.trigger("scroll.popup")},initBeforeUnloadPopup:function(e,t){var a,n=0,l=c("#"+e.attr("id"));window.addEventListener("mousemove",function(o){a&&clearTimeout(a),a=setTimeout(function(){o.clientY<10&&!n&&(n++,new Custombox.modal({content:{target:"#"+e.attr("id"),effect:e.data("effect")||t.effect,onOpen:function(){t.onOpen.call(c(l))},onClose:function(){t.onClose.call(c(l))},onComplete:function(){t.onComplete.call(c(l))}},overlay:{color:e.data("overlay-color")||t.overlayColor,opacity:e.data("overlay-opacity")||t.overlayOpacity,speedIn:e.data("speed")||t.speed,speedOut:e.data("speed")||t.speed}}).open())},10)})},initOnTargetPopup:function(e,t){var a=e.data("target");a&&c(a).length&&appear({bounds:t.bounds,debounce:t.debounce,elements:function(){return document.querySelectorAll(a)},appear:function(o){new Custombox.modal({content:{target:"#"+e.attr("id"),effect:e.data("effect")||t.effect,onOpen:function(){t.onOpen.call(c(a))},onClose:function(){t.onClose.call(c(a))},onComplete:function(){t.onComplete.call(c(a))}},overlay:{color:e.data("overlay-color")||t.overlayColor,opacity:e.data("overlay-opacity")||t.overlayOpacity,speedIn:e.data("speed")||t.speed,speedOut:e.data("speed")||t.speed}}).open()}})},initAfterSomeTimePopup:function(o,e){var t=c("#"+o.attr("id"));setTimeout(function(){new Custombox.modal({content:{target:"#"+o.attr("id"),effect:o.data("effect")||e.effect,onOpen:function(){e.onOpen.call(c(t))},onClose:function(){e.onClose.call(c(t))},onComplete:function(){e.onComplete.call(c(t))}},overlay:{color:o.data("overlay-color")||e.overlayColor,opacity:o.data("overlay-opacity")||e.overlayOpacity,speedIn:o.data("speed")||e.speed,speedOut:o.data("speed")||e.speed}}).open()},o.data("delay")?o.data("delay"):10)}}}(jQuery);