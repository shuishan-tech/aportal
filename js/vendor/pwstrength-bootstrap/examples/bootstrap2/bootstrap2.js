!function(e){e(function(){var t;e.support.transition=(t=function(){var t,e=document.createElement("bootstrap"),i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in i)if(void 0!==e.style[t])return i[t]}())&&{end:t}})}(window.jQuery),function(h){function n(t,e){this.init("tooltip",t,e)}n.prototype={constructor:n,init:function(t,e,i){var o,n,s,r;for(this.type=t,this.$element=h(e),this.options=this.getOptions(i),this.enabled=!0,r=(n=this.options.trigger.split(" ")).length;r--;)"click"==(s=n[r])?this.$element.on("click."+this.type,this.options.selector,h.proxy(this.toggle,this)):"manual"!=s&&(o="hover"==s?"mouseenter":"focus",s="hover"==s?"mouseleave":"blur",this.$element.on(o+"."+this.type,this.options.selector,h.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,h.proxy(this.leave,this)));this.options.selector?this._options=h.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return(t=h.extend({},h.fn[this.type].defaults,this.$element.data(),t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var e,i=h.fn[this.type].defaults,o={};if(this._options&&h.each(this._options,function(t,e){i[t]!=e&&(o[t]=e)},this),!(e=h(t.currentTarget)[this.type](o).data(this.type)).options.delay||!e.options.delay.show)return e.show();clearTimeout(this.timeout),e.hoverState="in",this.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)},leave:function(t){var e=h(t.currentTarget)[this.type](this._options).data(this.type);if(this.timeout&&clearTimeout(this.timeout),!e.options.delay||!e.options.delay.hide)return e.hide();e.hoverState="out",this.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)},show:function(){var t,e,i,o,n,s=h.Event("show");if(this.hasContent()&&this.enabled&&(this.$element.trigger(s),!s.isDefaultPrevented())){switch(t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s="function"==typeof this.options.placement?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),e=this.getPosition(),i=t[0].offsetWidth,o=t[0].offsetHeight,s){case"bottom":n={top:e.top+e.height,left:e.left+e.width/2-i/2};break;case"top":n={top:e.top-o,left:e.left+e.width/2-i/2};break;case"left":n={top:e.top+e.height/2-o/2,left:e.left-i};break;case"right":n={top:e.top+e.height/2-o/2,left:e.left+e.width}}this.applyPlacement(n,s),this.$element.trigger("shown")}},applyPlacement:function(t,e){var i,o,n,s=this.tip(),r=s[0].offsetWidth,h=s[0].offsetHeight;s.offset(t).addClass(e).addClass("in"),i=s[0].offsetWidth,o=s[0].offsetHeight,"top"==e&&o!=h&&(t.top=t.top+h-o,n=!0),"bottom"==e||"top"==e?(e=0,t.left<0&&(e=-2*t.left,t.left=0,s.offset(t),i=s[0].offsetWidth,o=s[0].offsetHeight),this.replaceArrow(e-r+i,i,"left")):this.replaceArrow(o-h,o,"top"),n&&s.offset(t)},replaceArrow:function(t,e,i){this.arrow().css(i,t?50*(1-t/e)+"%":"")},setContent:function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},hide:function(){var t,e=this.tip(),i=h.Event("hide");if(this.$element.trigger(i),!i.isDefaultPrevented())return e.removeClass("in"),h.support.transition&&this.$tip.hasClass("fade")?(t=setTimeout(function(){e.off(h.support.transition.end).detach()},500),e.one(h.support.transition.end,function(){clearTimeout(t),e.detach()})):e.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var t=this.$element;!t.attr("title")&&"string"==typeof t.attr("data-original-title")||t.attr("data-original-title",t.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return h.extend({},"function"==typeof t.getBoundingClientRect?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},tip:function(){return this.$tip=this.$tip||h(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){t=t?h(t.currentTarget)[this.type](this._options).data(this.type):this;t.tip().hasClass("in")?t.hide():t.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var t=h.fn.tooltip;h.fn.tooltip=function(o){return this.each(function(){var t=h(this),e=t.data("tooltip"),i="object"==typeof o&&o;e||t.data("tooltip",e=new n(this,i)),"string"==typeof o&&e[o]()})},h.fn.tooltip.Constructor=n,h.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},h.fn.tooltip.noConflict=function(){return h.fn.tooltip=t,this}}(window.jQuery),function(n){function s(t,e){this.init("popover",t,e)}s.prototype=n.extend({},n.fn.tooltip.Constructor.prototype,{constructor:s,setContent:function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content")[this.options.html?"html":"text"](i),t.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var t=this.$element,e=this.options;return("function"==typeof e.content?e.content.call(t[0]):e.content)||t.attr("data-content")},tip:function(){return this.$tip||(this.$tip=n(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var t=n.fn.popover;n.fn.popover=function(o){return this.each(function(){var t=n(this),e=t.data("popover"),i="object"==typeof o&&o;e||t.data("popover",e=new s(this,i)),"string"==typeof o&&e[o]()})},n.fn.popover.Constructor=s,n.fn.popover.defaults=n.extend({},n.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),n.fn.popover.noConflict=function(){return n.fn.popover=t,this}}(window.jQuery);