!function(o){"use strict";o.HSCore.components.HSFileAttach={_baseConfig:{},pageCollection:o(),init:function(t,i){if(this.collection=t&&o(t).length?o(t):o(),o(t).length)return this.config=i&&o.isPlainObject(i)?o.extend({},this._baseConfig,i):this._baseConfig,this.config.itemSelector=t,this.initFileAttach(),this.pageCollection},initFileAttach:function(){this.config;var n=this.pageCollection;this.collection.each(function(t,i){var i=o(i),e=i.data("result-text-target");i.on("change",function(){var t=o(this).val();console.log(t.replace(/.+[\\\/]/,"")),o(e).text(t.replace(/.+[\\\/]/,""))}),n=n.add(i)})}}}(jQuery);