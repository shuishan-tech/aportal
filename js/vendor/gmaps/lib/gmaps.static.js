GMaps.prototype.toImage=function(e){var t,e=e||{},r={};if(r.size=e.size||[this.el.clientWidth,this.el.clientHeight],r.lat=this.getCenter().lat(),r.lng=this.getCenter().lng(),0<this.markers.length){r.markers=[];for(var s=0;s<this.markers.length;s++)r.markers.push({lat:this.markers[s].getPosition().lat(),lng:this.markers[s].getPosition().lng()})}return 0<this.polylines.length&&(t=this.polylines[0],r.polyline={},r.polyline.path=google.maps.geometry.encoding.encodePath(t.getPath()),r.polyline.strokeColor=t.strokeColor,r.polyline.strokeOpacity=t.strokeOpacity,r.polyline.strokeWeight=t.strokeWeight),GMaps.staticMapURL(r)},GMaps.staticMapURL=function(e){var t=[],r=("file:"===location.protocol?"http:":location.protocol)+"//maps.googleapis.com/maps/api/staticmap";e.url&&(r=e.url,delete e.url),r+="?";var s=e.markers;delete e.markers,!s&&e.marker&&(s=[e.marker],delete e.marker);var o=e.styles;delete e.styles;var l,i=e.polyline;delete e.polyline,e.center?(t.push("center="+e.center),delete e.center):e.address?(t.push("center="+e.address),delete e.address):e.lat?(t.push(["center=",e.lat,",",e.lng].join("")),delete e.lat,delete e.lng):e.visible&&(l=encodeURI(e.visible.join("|")),t.push("visible="+l));var a=e.size;a?(a.join&&(a=a.join("x")),delete e.size):a="630x300",t.push("size="+a),e.zoom||!1===e.zoom||(e.zoom=15);var n=!e.hasOwnProperty("sensor")||!!e.sensor;for(u in delete e.sensor,t.push("sensor="+n),e)e.hasOwnProperty(u)&&t.push(u+"="+e[u]);if(s)for(var p,h,c=0;C=s[c];c++){for(var u in p=[],C.size&&"normal"!==C.size?(p.push("size:"+C.size),delete C.size):C.icon&&(p.push("icon:"+encodeURI(C.icon)),delete C.icon),C.color&&(p.push("color:"+C.color.replace("#","0x")),delete C.color),C.label&&(p.push("label:"+C.label[0].toUpperCase()),delete C.label),h=C.address?C.address:C.lat+","+C.lng,delete C.address,delete C.lat,delete C.lng,C)C.hasOwnProperty(u)&&p.push(u+":"+C[u]);p.length||0===c?(p.push(h),p=p.join("|"),t.push("markers="+encodeURI(p))):(p=t.pop()+encodeURI("|"+h),t.push(p))}if(o)for(c=0;c<o.length;c++){var d=[];o[c].featureType&&d.push("feature:"+o[c].featureType.toLowerCase()),o[c].elementType&&d.push("element:"+o[c].elementType.toLowerCase());for(var g=0;g<o[c].stylers.length;g++)for(var m in o[c].stylers[g]){var y=o[c].stylers[g][m];"hue"!=m&&"color"!=m||(y="0x"+y.substring(1)),d.push(m+":"+y)}var f=d.join("|");""!=f&&t.push("style="+f)}function k(e,t){if("#"===e[0]&&(e=e.replace("#","0x"),t)){if(t=parseFloat(t),0===(t=Math.min(1,Math.max(t,0))))return"0x00000000";1===(t=(255*t).toString(16)).length&&(t+=t),e=e.slice(0,8)+t}return e}if(i){var v,z,C=i,i=[];C.strokeWeight&&i.push("weight:"+parseInt(C.strokeWeight,10)),C.strokeColor&&(v=k(C.strokeColor,C.strokeOpacity),i.push("color:"+v)),C.fillColor&&(z=k(C.fillColor,C.fillOpacity),i.push("fillcolor:"+z));var j=C.path;if(j.join)for(var b,g=0;b=j[g];g++)i.push(b.join(","));else i.push("enc:"+j);i=i.join("|"),t.push("path="+encodeURI(i))}var w=window.devicePixelRatio||1;return t.push("scale="+w),r+(t=t.join("&"))};