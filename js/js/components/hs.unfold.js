!function(f){"use strict";function a(t,e){var n=this;return!!t.length&&(n.element=t,n.config=e,n.target=f(n.element.data("unfold-target")),n.allInvokers=f('[data-unfold-target="'+n.element.data("unfold-target")+'"]'),n.toggle=function(){if(!n.target.length)return n;var t=n.element[0].dataset,e=!!t.unfoldOverlay&&JSON.parse(t.unfoldOverlay);return n.defaultState?(t.unfoldOverlay&&(f("."+e.className).length||f('<div class="'+e.className+'" style="background-color: '+e.background+'"></div>').prependTo("body"),f("."+e.className).length&&f("."+e.className).fadeIn(e.animationSpeed?e.animationSpeed:200)),n.show()):(f("."+e.className).length&&(n.config.unfoldTimeOut=setTimeout(function(){f("."+e.className).fadeOut(e.animationSpeed?e.animationSpeed:200)},n.config.unfoldDelay)),n.hide()),n},this.smartPosition=function(t){t.data("baseDirection")&&t.css(t.data("baseDirection").direction,t.data("baseDirection").value),t.removeClass("u-unfold--reverse-y");var e=f(window),n=getComputedStyle(t.get(0)),a=Math.abs(parseInt(n.left,10))<40?"left":"right",o=t.offset();"right"==a?(t.data("baseDirection")||t.data("baseDirection",{direction:"right",value:parseInt(n.right,10)}),o.left<0&&t.css("right",-1*(parseInt(t.css("right"),10)-(o.left-10)))):(t.data("baseDirection")||t.data("baseDirection",{direction:"left",value:parseInt(n.left,10)}),o.left+t.outerWidth()>e.width()&&t.css("left",parseInt(t.css("left"),10)-(o.left+t.outerWidth()+10-e.width()))),o.top+t.outerHeight()-e.scrollTop()>e.height()&&t.addClass("u-unfold--reverse-y")},this.getOption=function(t){return this.config[t]?this.config[t]:null},!0)}function s(t,e){a.call(this,t,e)&&(Object.defineProperty(this,"defaultState",{get:function(){return this.target.hasClass("u-unfold--hidden")}}),this.target.addClass("u-unfold--simple"),this.hide())}function r(t,e){var n;a.call(this,t,e)&&((n=this).target.addClass("u-unfold--css-animation u-unfold--hidden").css("animation-duration",n.config.unfoldDuration+"ms"),Object.defineProperty(this,"defaultState",{get:function(){return this.target.hasClass("u-unfold--hidden")}}),this.target.length&&this.target.on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(t){n.target.hasClass(n.config.unfoldAnimationOut)&&(n.target.removeClass(n.config.unfoldAnimationOut).addClass("u-unfold--hidden"),n.allInvokers.length&&n.allInvokers.attr("aria-expanded","false"),n.config.afterClose.call(n.target,n.element)),n.target.hasClass(n.config.unfoldAnimationIn)&&(n.allInvokers.length&&n.allInvokers.attr("aria-expanded","true"),n.config.afterOpen.call(n.target,n.element)),t.preventDefault(),t.stopPropagation()}))}function u(t,e){a.call(this,t,e)&&(this.target.addClass("u-unfold--jquery-slide u-unfold--hidden").hide(),Object.defineProperty(this,"defaultState",{get:function(){return this.target.hasClass("u-unfold--hidden")}}))}f.HSCore.components.HSUnfold={_baseConfig:{unfoldEvent:"click",unfoldType:"simple",unfoldDuration:300,unfoldEasing:"linear",unfoldAnimationIn:"fadeIn",unfoldAnimationOut:"fadeOut",unfoldHideOnScroll:!0,unfoldHideOnBlur:!1,unfoldDelay:350,unfoldOpenedElement:"init",unfoldOverlay:!1,afterOpen:function(t){},beforeClose:function(t){},afterClose:function(t){}},_pageCollection:f(),init:function(t,i){if(t&&t.length){var d,l=this;return t.each(function(t,e){var n,a=f(e);if(!a.data("HSUnfold")){switch((n=i&&f.isPlainObject(i)?f.extend(!0,{},l._baseConfig,i,a.data()):f.extend(!0,{},l._baseConfig,a.data())).unfoldType){case"css-animation":a.data("HSUnfold",new r(a,n));break;case"jquery-slide":a.data("HSUnfold",new u(a,n));break;default:a.data("HSUnfold",new s(a,n))}l._pageCollection=l._pageCollection.add(a),l._bindEvents(a,n.unfoldEvent,n.unfoldDelay);var o=f(e).data("HSUnfold");d=f(o.target).find("input, textarea").length,f(o.target).find("[data-unfold-target]").length&&a.addClass("target-of-invoker-has-unfolds")}}),f(document).on("click touchstart","body",function(t){t.target.id!==l._baseConfig.unfoldOpenedElement&&(f(t.target).closest("#"+l._baseConfig.unfoldOpenedElement).length||l._pageCollection.each(function(t,e){var n=window.innerWidth,a=Boolean(f(e).data("is-mobile-only"));(!a||a&&n<769)&&f(e).data("HSUnfold").hide(),f(e).data("HSUnfold").config.unfoldOverlay&&(f(e).data("HSUnfold").config.unfoldDelay=setTimeout(function(){f("."+f(e).data("HSUnfold").config.unfoldOverlay.className).fadeOut(f(e).data("HSUnfold").config.unfoldOverlay.animationSpeed?f(e).data("HSUnfold").config.unfoldOverlay.animationSpeed:200)},f(e).data("HSUnfold").config.unfoldDelay)),f(e).data("HSUnfold").config.beforeClose.call(l.target,l.element)}))}),f(window).on("scroll.HSUnfold",function(){l._pageCollection.each(function(t,e){var n=f(e).data("HSUnfold");(n.getOption("unfoldHideOnScroll")&&0===d||n.getOption("unfoldHideOnScroll")&&!/iPhone|iPad|iPod/i.test(navigator.userAgent))&&n.hide()})}),f(window).on("resize.HSUnfold",function(){l._resizeTimeOutId&&clearTimeout(l._resizeTimeOutId),l._resizeTimeOutId=setTimeout(function(){l._pageCollection.each(function(t,e){var n=f(e).data("HSUnfold");n.smartPosition(n.target)})},50)}),f(document).on("keydown.HSUnfold",function(t){f("body").hasClass("u-unfold-opened")&&((t.keyCode&&38===t.keyCode||t.keyCode&&40===t.keyCode)&&t.preventDefault(),t.keyCode&&27===t.keyCode&&(l._pageCollection.each(function(t,e){f(e).data("HSUnfold").hide(),f("."+f(e).data("HSUnfold").config.unfoldOverlay.className).fadeOut(f(e).data("HSUnfold").config.unfoldOverlay.animationSpeed?f(e).data("HSUnfold").config.unfoldOverlay.animationSpeed:200)}),f("body").removeClass("u-unfold-opened")))}),t}},_bindEvents:function(e,t,n){var o=this,a=f(e.data("unfold-target"));"hover"!==t||"ontouchstart"in window?(e.on("click.HSUnfold",function(t){var e=f(this),n=f("[data-unfold-target].active:not(.target-of-invoker-has-unfolds)"),a=f("[data-unfold-target].active.target-of-invoker-has-unfolds");o._baseConfig.unfoldOpenedElement=e.data("HSUnfold").target[0].id,e.data("HSUnfold")&&(e.hasClass("target-of-invoker-has-unfolds")?a.length&&a.data("HSUnfold").toggle():n.length&&n.data("HSUnfold").toggle(),e.data("HSUnfold").toggle(),f("body").toggleClass("u-unfold-opened"),t.stopPropagation(),t.preventDefault())}),Boolean(e.data("unfold-target-is-menu"))&&f(e.data("unfold-target")).children().on("click",function(){e.data("HSUnfold").toggle()})):(e.on("mouseenter.HSUnfold",function(){var t=f(this).data("HSUnfold");t&&(t.unfoldTimeOut&&clearTimeout(t.unfoldTimeOut),t.show(),f("body").addClass("u-unfold-opened"))}).on("mouseleave.HSUnfold",function(){var t=f(this).data("HSUnfold");t&&(t.unfoldTimeOut=setTimeout(function(){t.hide(),f("body").removeClass("u-unfold-opened")},n))}),a.length&&a.on("mouseenter.HSUnfold",function(){var t=e.data("HSUnfold");t.unfoldTimeOut&&clearTimeout(t.unfoldTimeOut),t.show()}).on("mouseleave.HSUnfold",function(){var t=e.data("HSUnfold");t.unfoldTimeOut=setTimeout(function(){t.hide()},n)}))}},s.prototype.show=function(){var t=f(this)[0].config.unfoldTarget;return f('[data-unfold-target="'+t+'"]').addClass("active"),this.smartPosition(this.target),this.target.removeClass("u-unfold--hidden"),this.allInvokers.length&&this.allInvokers.attr("aria-expanded","true"),this.config.afterOpen.call(this.target,this.element),this},s.prototype.hide=function(){var t=f(this)[0].config.unfoldTarget;return f('[data-unfold-target="'+t+'"]').removeClass("active"),this.target.addClass("u-unfold--hidden"),this.allInvokers.length&&this.allInvokers.attr("aria-expanded","false"),this.config.afterClose.call(this.target,this.element),this},r.prototype.show=function(){var t=this,e=f(t)[0].config.unfoldTarget;f('[data-unfold-target="'+e+'"]').addClass("active"),t.smartPosition(t.target),t.target.removeClass("u-unfold--hidden").removeClass(t.config.unfoldAnimationOut),t.config.unfoldOverlay?setTimeout(function(){t.target.addClass(t.config.unfoldAnimationIn)}):t.target.addClass(t.config.unfoldAnimationIn),t.config.afterOpen.call(t.target,t.element)},r.prototype.hide=function(){var t=f(this)[0].config.unfoldTarget;f('[data-unfold-target="'+t+'"]').removeClass("active"),this.target.removeClass(this.config.unfoldAnimationIn).addClass(this.config.unfoldAnimationOut)},u.prototype.show=function(){var t=this,e=f(this)[0].config.unfoldTarget;f('[data-unfold-target="'+e+'"]').addClass("active"),this.smartPosition(this.target),this.target.removeClass("u-unfold--hidden").stop().slideDown({duration:t.config.unfoldDuration,easing:t.config.unfoldEasing,complete:function(){t.config.afterOpen.call(t.target,t.element)}})},u.prototype.hide=function(){var t=this,e=f(this)[0].config.unfoldTarget;f('[data-unfold-target="'+e+'"]').removeClass("active"),this.target.slideUp({duration:t.config.unfoldDuration,easing:t.config.unfoldEasing,complete:function(){t.config.afterClose.call(t.target,t.element),t.target.addClass("u-unfold--hidden")}})}}(jQuery);