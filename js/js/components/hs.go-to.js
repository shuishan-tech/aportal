!function(h){"use strict";h.HSCore.components.HSGoTo={_baseConfig:{},pageCollection:h(),init:function(t,i){if(this.collection=t&&h(t).length?h(t):h(),h(t).length)return this.config=i&&h.isPlainObject(i)?h.extend({},this._baseConfig,i):this._baseConfig,this.config.itemSelector=t,this.initGoTo(),this.pageCollection},initGoTo:function(){var r=this.pageCollection;this.collection.each(function(t,i){var o=h(i),s=o.data("target"),a=Boolean(o.data("is-referenced-to-page")),e=o.data("type"),n=o.data("show-effect"),c=o.data("hide-effect"),l=JSON.parse(i.getAttribute("data-position")),d=h(o.data("compensation")).outerHeight(),f=o.data("offset-top");"static"===e?o.css({display:"inline-block"}):o.addClass("animated").css({display:"inline-block",position:e,opacity:0}),"fixed"!==e&&"absolute"!==e||o.css(l),o.on("click",function(t){a||(t.preventDefault(),h("html, body").stop().animate({scrollTop:d?s?h(s).offset().top-d:0:s?h(s).offset().top:0},800))}),o.data("offset-top")||o.hasClass("js-animation-was-fired")||"static"===e||o.offset().top<=h(window).height()&&(o.show(),setTimeout(function(){o.addClass("js-animation-was-fired "+n).css({opacity:""})})),"static"!==e&&(h(window).on("scroll",function(){if(clearTimeout(h.data(this,"scrollTimer")),o.data("offset-top"))h(window).scrollTop()>=f&&!o.hasClass("js-animation-was-fired")?(o.show(),setTimeout(function(){o.addClass("js-animation-was-fired "+n).css({opacity:""})})):h(window).scrollTop()<=f&&o.hasClass("js-animation-was-fired")&&h.data(this,"scrollTimer",setTimeout(function(){o.removeClass("js-animation-was-fired "+n),setTimeout(function(){o.addClass(c).css({opacity:0})},100),setTimeout(function(){o.removeClass(c).hide()},400)},500));else{var t=o.offset().top;o.hasClass("js-animation-was-fired")||h(window).scrollTop()>=t-h(window).height()&&(o.show(),setTimeout(function(){o.addClass("js-animation-was-fired "+n).css({opacity:""})}))}}),h(window).trigger("scroll")),r=r.add(o)})}}}(jQuery);