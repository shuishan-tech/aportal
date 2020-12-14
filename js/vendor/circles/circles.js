!function(t,e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define([],e):t.Circles=e()}(this,function(){"use strict";function e(t){var e=t.id;this._el=document.getElementById(e),null!==this._el&&(this._radius=t.radius||10,this._duration=void 0===t.duration?500:t.duration,this._value=0,this._maxValue=t.maxValue||100,this._text=void 0===t.text?function(t){return this.htmlifyNumber(t)}:t.text,this._strokeWidth=t.width||10,this._colors=t.colors||["#EEE","#F00"],this._svg=null,this._movingPath=null,this._wrapContainer=null,this._textContainer=null,this._wrpClass=t.wrpClass||"circles-wrp",this._textClass=t.textClass||"circles-text",this._valClass=t.valueStrokeClass||"circles-valueStroke",this._maxValClass=t.maxValueStrokeClass||"circles-maxValueStroke",this._styleWrapper=!1!==t.styleWrapper,this._styleText=!1!==t.styleText,e=Math.PI/180*270,this._start=-Math.PI/180*90,this._startPrecise=this._precise(this._start),this._circ=e-this._start,this._generate().update(t.value||0))}var o=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){setTimeout(t,1e3/60)};return e.prototype={VERSION:"0.0.6",_generate:function(){return this._svgSize=2*this._radius,this._radiusAdjusted=this._radius-this._strokeWidth/2,this._generateSvg()._generateText()._generateWrapper(),this._el.innerHTML="",this._el.appendChild(this._wrapContainer),this},_setPercentage:function(t){this._movingPath.setAttribute("d",this._calculatePath(t,!0)),this._textContainer.innerHTML=this._getText(this.getValueFromPercent(t))},_generateWrapper:function(){return this._wrapContainer=document.createElement("div"),this._wrapContainer.className=this._wrpClass,this._styleWrapper&&(this._wrapContainer.style.position="relative",this._wrapContainer.style.display="inline-block"),this._wrapContainer.appendChild(this._svg),this._wrapContainer.appendChild(this._textContainer),this},_generateText:function(){if(this._textContainer=document.createElement("div"),this._textContainer.className=this._textClass,this._styleText){var t,e={position:"absolute",top:0,left:0,textAlign:"center",width:"100%",fontSize:.7*this._radius+"px",height:this._svgSize+"px",lineHeight:this._svgSize+"px"};for(t in e)this._textContainer.style[t]=e[t]}return this._textContainer.innerHTML=this._getText(0),this},_getText:function(t){return this._text?(void 0===t&&(t=this._value),t=parseFloat(t.toFixed(2)),"function"==typeof this._text?this._text.call(this,t):this._text):""},_generateSvg:function(){return this._svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this._svg.setAttribute("xmlns","http://www.w3.org/2000/svg"),this._svg.setAttribute("width",this._svgSize),this._svg.setAttribute("height",this._svgSize),this._generatePath(100,!1,this._colors[0],this._maxValClass)._generatePath(1,!0,this._colors[1],this._valClass),this._movingPath=this._svg.getElementsByTagName("path")[1],this},_generatePath:function(t,e,i,s){var r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill","transparent"),r.setAttribute("stroke",i),r.setAttribute("stroke-width",this._strokeWidth),r.setAttribute("d",this._calculatePath(t,e)),r.setAttribute("class",s),this._svg.appendChild(r),this},_calculatePath:function(t,e){t=this._start+t/100*this._circ,t=this._precise(t);return this._arc(t,e)},_arc:function(t,e){var i=t-.001,t=t-this._startPrecise<Math.PI?0:1;return["M",this._radius+this._radiusAdjusted*Math.cos(this._startPrecise),this._radius+this._radiusAdjusted*Math.sin(this._startPrecise),"A",this._radiusAdjusted,this._radiusAdjusted,0,t,1,this._radius+this._radiusAdjusted*Math.cos(i),this._radius+this._radiusAdjusted*Math.sin(i),e?"":"Z"].join(" ")},_precise:function(t){return Math.round(1e3*t)/1e3},htmlifyNumber:function(t,e,i){e=e||"circles-integer",i=i||"circles-decimals";t=(t+"").split("."),e='<span class="'+e+'">'+t[0]+"</span>";return 1<t.length&&(e+='.<span class="'+i+'">'+t[1].substring(0,2)+"</span>"),e},updateRadius:function(t){return this._radius=t,this._generate().update(!0)},updateWidth:function(t){return this._strokeWidth=t,this._generate().update(!0)},updateColors:function(t){this._colors=t;var e=this._svg.getElementsByTagName("path");return e[0].setAttribute("stroke",t[0]),e[1].setAttribute("stroke",t[1]),this},getPercent:function(){return 100*this._value/this._maxValue},getValueFromPercent:function(t){return this._maxValue*t/100},getValue:function(){return this._value},getMaxValue:function(){return this._maxValue},update:function(t,e){if(!0===t)return this._setPercentage(this.getPercent()),this;if(this._value==t||isNaN(t))return this;void 0===e&&(e=this._duration);var s,r,a,n=this,h=n.getPercent(),u=1;return this._value=Math.min(this._maxValue,Math.max(0,t)),e?(s=n.getPercent(),r=h<s,u+=s%1,t=Math.floor(Math.abs(s-h)/u),a=e/t,function t(e){var i;r?h+=u:h-=u,r&&s<=h||!r&&h<=s?o(function(){n._setPercentage(s)}):(o(function(){n._setPercentage(h)}),i=Date.now(),a<=(e=i-e)?t(i):setTimeout(function(){t(Date.now())},a-e))}(Date.now())):this._setPercentage(this.getPercent()),this}},e.create=function(t){return new e(t)},e});