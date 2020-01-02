GMaps.prototype.createMarker=function(n){if(null==n.lat&&null==n.lng&&null==n.position)throw"No latitude or longitude defined.";var r=this,e=n.details,t=n.fences,a=n.outside,i={position:new google.maps.LatLng(n.lat,n.lng),map:null},o=extend_object(i,n);delete o.lat,delete o.lng,delete o.fences,delete o.outside;var s=new google.maps.Marker(o);if(s.fences=t,n.infoWindow){s.infoWindow=new google.maps.InfoWindow(n.infoWindow);for(var l=["closeclick","content_changed","domready","position_changed","zindex_changed"],d=0;d<l.length;d++)!function(e,r){n.infoWindow[r]&&google.maps.event.addListener(e,r,function(e){n.infoWindow[r].apply(this,[e])})}(s.infoWindow,l[d])}var h=["animation_changed","clickable_changed","cursor_changed","draggable_changed","flat_changed","icon_changed","position_changed","shadow_changed","shape_changed","title_changed","visible_changed","zindex_changed"],c=["dblclick","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup"];for(d=0;d<h.length;d++)!function(e,r){n[r]&&google.maps.event.addListener(e,r,function(){n[r].apply(this,[this])})}(s,h[d]);for(d=0;d<c.length;d++)!function(r,e,t){n[t]&&google.maps.event.addListener(e,t,function(e){e.pixel||(e.pixel=r.getProjection().fromLatLngToPoint(e.latLng)),n[t].apply(this,[e])})}(this.map,s,c[d]);return google.maps.event.addListener(s,"click",function(){this.details=e,n.click&&n.click.apply(this,[this]),s.infoWindow&&(r.hideInfoWindows(),s.infoWindow.open(r.map,s))}),google.maps.event.addListener(s,"rightclick",function(e){e.marker=this,n.rightclick&&n.rightclick.apply(this,[e]),null!=window.context_menu[r.el.id].marker&&r.buildContextMenu("marker",e)}),s.fences&&google.maps.event.addListener(s,"dragend",function(){r.checkMarkerGeofence(s,function(e,r){a(e,r)})}),s},GMaps.prototype.addMarker=function(e){var r;if(e.hasOwnProperty("gm_accessors_"))r=e;else{if(!(e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")||e.position))throw"No latitude or longitude defined.";r=this.createMarker(e)}return r.setMap(this.map),this.markerClusterer&&this.markerClusterer.addMarker(r),this.markers.push(r),GMaps.fire("marker_added",r,this),r},GMaps.prototype.addMarkers=function(e){for(var r,t=0;r=e[t];t++)this.addMarker(r);return this.markers},GMaps.prototype.hideInfoWindows=function(){for(var e,r=0;e=this.markers[r];r++)e.infoWindow&&e.infoWindow.close()},GMaps.prototype.removeMarker=function(e){for(var r=0;r<this.markers.length;r++)if(this.markers[r]===e){this.markers[r].setMap(null),this.markers.splice(r,1),this.markerClusterer&&this.markerClusterer.removeMarker(e),GMaps.fire("marker_removed",e,this);break}return e},GMaps.prototype.removeMarkers=function(e){var r=[];if(void 0===e){for(var t=0;t<this.markers.length;t++){(a=this.markers[t]).setMap(null),GMaps.fire("marker_removed",a,this)}this.markerClusterer&&this.markerClusterer.clearMarkers&&this.markerClusterer.clearMarkers(),this.markers=r}else{for(t=0;t<e.length;t++){var n=this.markers.indexOf(e[t]);if(-1<n)(a=this.markers[n]).setMap(null),this.markerClusterer&&this.markerClusterer.removeMarker(a),GMaps.fire("marker_removed",a,this)}for(t=0;t<this.markers.length;t++){var a;null!=(a=this.markers[t]).getMap()&&r.push(a)}this.markers=r}};