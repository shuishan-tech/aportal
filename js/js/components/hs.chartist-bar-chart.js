!function(c){"use strict";c.HSCore.components.HSChartistBarChart={_baseConfig:{},pageCollection:c(),init:function(t,e){if(this.collection=t&&c(t).length?c(t):c(),c(t).length)return this.config=e&&c.isPlainObject(e)?c.extend({},this._baseConfig,e):this._baseConfig,this.config.itemSelector=t,this.initCharts(),this.pageCollection},initCharts:function(){var h=this.pageCollection;this.collection.each(function(t,e){var a=c(e).data("stroke-width"),i=c(e).data("stroke-color");c(e).attr("id","barCharts"+t),c('<style id="barChartsStyle'+t+'"></style>').insertAfter(c(e));var s="",o=JSON.parse(e.getAttribute("data-series")),r=JSON.parse(e.getAttribute("data-labels")),o={series:o||!1,labels:r||!1},r={width:"100%",height:c(e).data("height"),high:c(e).data("high"),low:c(e).data("low"),seriesBarDistance:c(e).data("distance"),axisX:{offset:0,scaleMinSpace:0,showGrid:Boolean(c(e).data("is-show-axis-x")),showLabel:!1},axisY:{offset:0,scaleMinSpace:0,showGrid:Boolean(c(e).data("is-show-axis-y")),showLabel:!1},chartPadding:{top:0,right:0,bottom:0,left:0}},r=new Chartist.Bar(e,o,r),n=1;r.on("created",function(){1==n&&(c(e).find(".ct-series").each(function(){s+="#barCharts"+t+" .ct-series .ct-bar {stroke-width: "+a+"; stroke: "+i+"}"}),c("#barChartsStyle"+t).text(s)),n++}),r.update(),h=h.add(c(e))})}}}(jQuery);