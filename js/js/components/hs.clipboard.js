!function(u){"use strict";u.HSCore.components.HSClipboard={_baseConfig:{},pageCollection:u(),init:function(t,e){if(this.collection=t&&u(t).length?u(t):u(),u(t).length)return this.config=e&&u.isPlainObject(e)?u.extend({},this._baseConfig,e):this._baseConfig,this.config.itemSelector=t,this.initClipboard(),this.pageCollection},initClipboard:function(){var d=this.pageCollection,r={};u("[data-content-target]").each(function(){var t=u(this).data("content-target");u(t).is("input, textarea, select")?r[t]=u(t).val():r[t]=u(t).html()}),this.collection.each(function(t,e){u(window).width();var a=u(e),i=a.get(0).lastChild.nodeValue,n=a.data("class-change-target"),o=a.data("default-class"),s=a.data("container"),l=a.attr("title"),c=a.data("type");a.on("click",function(t){t.preventDefault()}),new ClipboardJS(e,{container:!!s&&document.querySelector(s),text:function(t){var e=u(t).data("content-target");return r[e]}}).on("success",function(){var t=a.data("success-text"),e=a.data("success-class");(t||e)&&(t&&("tooltip"!==c?(a.get(0).lastChild.nodeValue=" "+t+" ",setTimeout(function(){a.get(0).lastChild.nodeValue=i},800)):(a.attr("data-original-title",t).tooltip("show"),a.on("mouseleave",function(){a.attr("data-original-title",l)}))),e&&(n?(u(n).removeClass(o).addClass(e),setTimeout(function(){u(n).removeClass(e).addClass(o)},800)):(a.removeClass(o).addClass(e),setTimeout(function(){a.removeClass(e).addClass(o)},800))))}),d=d.add(e)})}}}(jQuery);