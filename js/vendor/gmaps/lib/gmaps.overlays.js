GMaps.prototype.drawOverlay=function(r){var s=new google.maps.OverlayView,n=!0;return s.setMap(this.map),null!=r.auto_show&&(n=r.auto_show),s.onAdd=function(){var e=document.createElement("div");e.style.borderStyle="none",e.style.borderWidth="0px",e.style.position="absolute",e.style.zIndex=100,e.innerHTML=r.content,s.el=e,r.layer||(r.layer="overlayLayer");var t=this.getPanes(),l=["contextmenu","DOMMouseScroll","dblclick","mousedown"];t[r.layer].appendChild(e);for(var o,a=0;a<l.length;a++)o=l[a],google.maps.event.addDomListener(e,o,function(e){-1!=navigator.userAgent.toLowerCase().indexOf("msie")&&document.all?(e.cancelBubble=!0,e.returnValue=!1):e.stopPropagation()});r.click&&(t.overlayMouseTarget.appendChild(s.el),google.maps.event.addDomListener(s.el,"click",function(){r.click.apply(s,[s])})),google.maps.event.trigger(this,"ready")},s.draw=function(){var e=this.getProjection().fromLatLngToDivPixel(new google.maps.LatLng(r.lat,r.lng));r.horizontalOffset=r.horizontalOffset||0,r.verticalOffset=r.verticalOffset||0;var t=s.el,l=t.children[0],o=l.clientHeight,a=l.clientWidth;switch(r.verticalAlign){case"top":t.style.top=e.y-o+r.verticalOffset+"px";break;default:case"middle":t.style.top=e.y-o/2+r.verticalOffset+"px";break;case"bottom":t.style.top=e.y+r.verticalOffset+"px"}switch(r.horizontalAlign){case"left":t.style.left=e.x-a+r.horizontalOffset+"px";break;default:case"center":t.style.left=e.x-a/2+r.horizontalOffset+"px";break;case"right":t.style.left=e.x+r.horizontalOffset+"px"}t.style.display=n?"block":"none",n||r.show.apply(this,[t])},s.onRemove=function(){var e=s.el;r.remove?r.remove.apply(this,[e]):(s.el.parentNode.removeChild(s.el),s.el=null)},this.overlays.push(s),s},GMaps.prototype.removeOverlay=function(e){for(var t=0;t<this.overlays.length;t++)if(this.overlays[t]===e){this.overlays[t].setMap(null),this.overlays.splice(t,1);break}},GMaps.prototype.removeOverlays=function(){for(var e,t=0;e=this.overlays[t];t++)e.setMap(null);this.overlays=[]};