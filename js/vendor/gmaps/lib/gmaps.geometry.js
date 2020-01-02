GMaps.prototype.drawPolyline=function(t){var e=[],o=t.path;if(o.length)if(void 0===o[0][0])e=o;else for(var s,n=0;s=o[n];n++)e.push(new google.maps.LatLng(s[0],s[1]));var l={map:this.map,path:e,strokeColor:t.strokeColor,strokeOpacity:t.strokeOpacity,strokeWeight:t.strokeWeight,geodesic:t.geodesic,clickable:!0,editable:!1,visible:!0};t.hasOwnProperty("clickable")&&(l.clickable=t.clickable),t.hasOwnProperty("editable")&&(l.editable=t.editable),t.hasOwnProperty("icons")&&(l.icons=t.icons),t.hasOwnProperty("zIndex")&&(l.zIndex=t.zIndex);for(var i=new google.maps.Polyline(l),p=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],a=0;a<p.length;a++)!function(e,o){t[o]&&google.maps.event.addListener(e,o,function(e){t[o].apply(this,[e])})}(i,p[a]);return this.polylines.push(i),GMaps.fire("polyline_added",i,this),i},GMaps.prototype.removePolyline=function(e){for(var o=0;o<this.polylines.length;o++)if(this.polylines[o]===e){this.polylines[o].setMap(null),this.polylines.splice(o,1),GMaps.fire("polyline_removed",e,this);break}},GMaps.prototype.removePolylines=function(){for(var e,o=0;e=this.polylines[o];o++)e.setMap(null);this.polylines=[]},GMaps.prototype.drawCircle=function(t){delete(t=extend_object({map:this.map,center:new google.maps.LatLng(t.lat,t.lng)},t)).lat,delete t.lng;for(var e=new google.maps.Circle(t),o=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],s=0;s<o.length;s++)!function(e,o){t[o]&&google.maps.event.addListener(e,o,function(e){t[o].apply(this,[e])})}(e,o[s]);return this.polygons.push(e),e},GMaps.prototype.drawRectangle=function(t){t=extend_object({map:this.map},t);var e=new google.maps.LatLngBounds(new google.maps.LatLng(t.bounds[0][0],t.bounds[0][1]),new google.maps.LatLng(t.bounds[1][0],t.bounds[1][1]));t.bounds=e;for(var o=new google.maps.Rectangle(t),s=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],n=0;n<s.length;n++)!function(e,o){t[o]&&google.maps.event.addListener(e,o,function(e){t[o].apply(this,[e])})}(o,s[n]);return this.polygons.push(o),o},GMaps.prototype.drawPolygon=function(t){var e=!1;t.hasOwnProperty("useGeoJSON")&&(e=t.useGeoJSON),delete t.useGeoJSON,t=extend_object({map:this.map},t),0==e&&(t.paths=[t.paths.slice(0)]),0<t.paths.length&&0<t.paths[0].length&&(t.paths=array_flat(array_map(t.paths,arrayToLatLng,e)));for(var o=new google.maps.Polygon(t),s=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],n=0;n<s.length;n++)!function(e,o){t[o]&&google.maps.event.addListener(e,o,function(e){t[o].apply(this,[e])})}(o,s[n]);return this.polygons.push(o),GMaps.fire("polygon_added",o,this),o},GMaps.prototype.removePolygon=function(e){for(var o=0;o<this.polygons.length;o++)if(this.polygons[o]===e){this.polygons[o].setMap(null),this.polygons.splice(o,1),GMaps.fire("polygon_removed",e,this);break}},GMaps.prototype.removePolygons=function(){for(var e,o=0;e=this.polygons[o];o++)e.setMap(null);this.polygons=[]};