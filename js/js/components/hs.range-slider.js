var isEmpty=function(t){return/^function[^{]+\{\s*\}/m.test(t.toString())};!function(u){"use strict";u.HSCore.components.HSRangeSlider={_baseConfig:{hide_min_max:!0,hide_from_to:!0,onStart:function(){},onChange:function(){},onFinish:function(){},onUpdate:function(){}},pageCollection:u(),init:function(t,n){if(this.collection=t&&u(t).length?u(t):u(),u(t).length)return this.config=n&&u.isPlainObject(n)?u.extend({},this._baseConfig,n):this._baseConfig,this.config.itemSelector=t,this.initRangeSlider(),this.pageCollection},initRangeSlider:function(){var d=this.config,c=this.pageCollection;this.collection.each(function(t,n){var n=u(n),i=n.data("type"),o=n.data("result-min"),s=n.data("result-max"),r=n.data("result-secondary"),a=n.data("secondary-value"),f=Boolean(n.data("grid")),l=n.data("foreground-target");n.ionRangeSlider({hide_min_max:d.hide_min_max,hide_from_to:d.hide_from_to,onStart:!0===isEmpty(d.onStart)?function(e){var t;if(l&&(t=100-(e.from_percent+(100-e.to_percent)),u(l).css({left:e.from_percent+"%",width:t+"%"}),u(l+"> *").css({width:u(l).parent().width(),transform:"translateX(-"+e.from_percent+"%)"})),o&&"single"===i?u(o).is("input")?u(o).val(e.from):u(o).text(e.from):(o||s&&"double"===i)&&(u(o).is("input")?u(o).val(e.from):u(o).text(e.from),u(o).is("input")?u(s).val(e.to):u(s).text(e.to)),f&&"single"===i&&u(e.slider).find(".irs-grid-text").each(function(t){var n=u(this);u(n).text()===e.from&&(u(e.slider).find(".irs-grid-text").removeClass("current"),u(n).addClass("current"))}),r){a.steps.push(e.max+1),a.values.push(a.values[a.values.length-1]+1);for(var n=0;n<a.steps.length;n++)e.from>=a.steps[n]&&e.from<a.steps[n+1]&&(u(r).is("input")?u(r).val(a.values[n]):u(r).text(a.values[n]))}}:d.onStart,onChange:!0===isEmpty(d.onChange)?function(e){var t;if(l&&(t=100-(e.from_percent+(100-e.to_percent)),u(l).css({left:e.from_percent+"%",width:t+"%"}),u(l+"> *").css({width:u(l).parent().width(),transform:"translateX(-"+e.from_percent+"%)"})),o&&"single"===i?u(o).is("input")?u(o).val(e.from):u(o).text(e.from):(o||s&&"double"===i)&&(u(o).is("input")?u(o).val(e.from):u(o).text(e.from),u(o).is("input")?u(s).val(e.to):u(s).text(e.to)),f&&"single"===i&&u(e.slider).find(".irs-grid-text").each(function(t){var n=u(this);u(n).text()===e.from&&(u(e.slider).find(".irs-grid-text").removeClass("current"),u(n).addClass("current"))}),r)for(var n=0;n<a.steps.length;n++)e.from>=a.steps[n]&&e.from<a.steps[n+1]&&(u(r).is("input")?u(r).val(a.values[n]):u(r).text(a.values[n]))}:d.onChange,onFinish:!0===isEmpty(d.onFinish)?function(t){}:d.onFinish,onUpdate:!0===isEmpty(d.onUpdate)?function(t){}:d.onUpdate});var e=n.data("ionRangeSlider");o&&"single"===i&&u(o).is("input")?u(o).on("change",function(){e.update({from:u(this).val()})}):(o||s&&"double"===i&&u(o).is("input")||u(s).is("input"))&&(u(o).on("change",function(){e.update({from:u(this).val()})}),u(s).on("change",function(){e.update({to:u(this).val()})})),u(window).on("resize",function(){u(l+"> *").css({width:u(l).parent().width()})}),c=c.add(n)})}}}(jQuery);