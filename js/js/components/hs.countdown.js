!function(o){"use strict";o.HSCore.components.HSCountdown={_baseConfig:{yearsElSelector:".years",monthsElSelector:".months",daysElSelector:".days",hoursElSelector:".hours",minutesElSelector:".minutes",secondsElSelector:".seconds",circles:!1,wrpClass:"wrpClass",textClass:"textClass",valueStrokeClass:"valueStrokeClass",maxValueStrokeClass:"maxValueStrokeClass",styleWrapper:"styleWrapper",styleText:"styleText"},pageCollection:o(),_circlesIds:[0],init:function(t,e){if(this.collection=t&&o(t).length?o(t):o(),o(t).length)return this.config=e&&o.isPlainObject(e)?o.extend({},this._baseConfig,e):this._baseConfig,this.config.itemSelector=t,this.initCountdowns(),this.pageCollection},initCountdowns:function(){var l=this;this.collection.each(function(t,e){var a=o(e),s={endDate:a.data("end-date")?new Date(a.data("end-date")):new Date,startDate:a.data("start-date")?new Date(a.data("start-date")):new Date,yearsEl:a.find(l.config.yearsElSelector),yearsFormat:a.data("years-format"),monthsEl:a.find(l.config.monthsElSelector),monthsFormat:a.data("months-format"),daysEl:a.find(l.config.daysElSelector),daysFormat:a.data("days-format"),hoursEl:a.find(l.config.hoursElSelector),hoursFormat:a.data("hours-format"),minutesEl:a.find(l.config.minutesElSelector),minutesFormat:a.data("minutes-format"),secondsEl:a.find(l.config.secondsElSelector),secondsFormat:a.data("seconds-format")};l.config.circles&&a.data("start-date")?l._initPiesImplementation(a,s):l._initBaseImplementation(a,s),l.pageCollection=l.pageCollection.add(a)})},_initBaseImplementation:function(t,e){t.countdown(e.endDate,function(t){e.yearsEl.length&&e.yearsEl.text(t.strftime(e.yearsFormat)),e.monthsEl.length&&e.monthsEl.text(t.strftime(e.monthsFormat)),e.daysEl.length&&e.daysEl.text(t.strftime(e.daysFormat)),e.hoursEl.length&&e.hoursEl.text(t.strftime(e.hoursFormat)),e.minutesEl.length&&e.minutesEl.text(t.strftime(e.minutesFormat)),e.secondsEl.length&&e.secondsEl.text(t.strftime(e.secondsFormat))})},_initPiesImplementation:function(t,e){var a=this;e.yearsEl.length&&a._preparePieItem(e.yearsEl,{maxValue:e.endDate.getFullYear()-e.startDate.getFullYear(),radius:t.data("circles-radius"),width:t.data("circles-stroke-width"),"fg-color":t.data("circles-fg-color"),"bg-color":t.data("circles-bg-color"),"additional-text":t.data("circles-additional-text"),"font-size":t.data("circles-font-size")}),e.monthsEl.length&&a._preparePieItem(e.monthsEl,{maxValue:Math.round(Math.abs((e.endDate.getTime()-e.startDate.getTime())/864e5))/12,radius:t.data("circles-radius"),width:t.data("circles-stroke-width"),"fg-color":t.data("circles-fg-color"),"bg-color":t.data("circles-bg-color"),"additional-text":t.data("circles-additional-text"),"font-size":t.data("circles-font-size")}),e.daysEl.length&&a._preparePieItem(e.daysEl,{maxValue:a._getDaysMaxValByFormat(e.daysFormat,e.startDate,e.endDate),radius:t.data("circles-radius"),width:t.data("circles-stroke-width"),"fg-color":t.data("circles-fg-color"),"bg-color":t.data("circles-bg-color"),"additional-text":t.data("circles-additional-text"),"font-size":t.data("circles-font-size")}),e.hoursEl.length&&a._preparePieItem(e.hoursEl,{maxValue:60,radius:t.data("circles-radius"),width:t.data("circles-stroke-width"),"fg-color":t.data("circles-fg-color"),"bg-color":t.data("circles-bg-color"),"additional-text":t.data("circles-additional-text"),"font-size":t.data("circles-font-size")}),e.minutesEl.length&&a._preparePieItem(e.minutesEl,{maxValue:60,radius:t.data("circles-radius"),width:t.data("circles-stroke-width"),"fg-color":t.data("circles-fg-color"),"bg-color":t.data("circles-bg-color"),"additional-text":t.data("circles-additional-text"),"font-size":t.data("circles-font-size")}),e.secondsEl.length&&a._preparePieItem(e.secondsEl,{maxValue:60,radius:t.data("circles-radius"),width:t.data("circles-stroke-width"),"fg-color":t.data("circles-fg-color"),"bg-color":t.data("circles-bg-color"),"additional-text":t.data("circles-additional-text"),"font-size":t.data("circles-font-size")}),t.countdown(e.endDate,function(t){e.yearsEl.length&&e.yearsEl.data("circle").update(t.strftime(e.yearsFormat)),e.monthsEl.length&&e.monthsEl.data("circle").update(t.strftime(e.monthsFormat)),e.daysEl.length&&e.daysEl.data("circle").update(t.strftime(e.daysFormat)),e.hoursEl.length&&e.hoursEl.data("circle").update(t.strftime(e.hoursFormat)),e.minutesEl.length&&e.minutesEl.data("circle").update(t.strftime(e.minutesFormat)),e.secondsEl.length&&e.secondsEl.data("circle").update(t.strftime(e.secondsFormat))})},_preparePieItem:function(t,e){var a=this,s=a._circlesIds[a._circlesIds.length-1]+1;a._circlesIds.push(s),t.attr("id","hs-countdown-element-"+s),t.data("circle",Circles.create({id:"hs-countdown-element-"+s,radius:e.radius||80,value:0,maxValue:e.maxValue||100,width:e.width||10,text:function(t){return t+(e["additional-text"]||"")},colors:[e["bg-color"]||"#eeeeee",e["fg-color"]||"#72c02c"],duration:0,wrpClass:a.config.wrpClass,textClass:a.config.textClass,valueStrokeClass:a.config.valueStrokeClass,maxValueStrokeClass:a.config.maxValueStrokeClass,styleWrapper:a.config.styleWrapper,styleText:a.config.styleText})),e["font-size"]&&t.find("."+a.config.textClass).css("font-size",e["font-size"]+"px")},_getDaysMaxValByFormat:function(t,e,a){return"%D"!==t?31:Math.round(Math.abs((a.getTime()-e.getTime())/864e5))}}}(jQuery);