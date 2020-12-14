GMaps.prototype.on=function(e,n){return GMaps.on(e,this,n)},GMaps.prototype.off=function(e){GMaps.off(e,this)},GMaps.prototype.once=function(e,n){return GMaps.once(e,this,n)},GMaps.custom_events=["marker_added","marker_removed","polyline_added","polyline_removed","polygon_added","polygon_removed","geolocated","geolocation_failed"],GMaps.on=function(e,n,t){if(-1==GMaps.custom_events.indexOf(e))return n instanceof GMaps&&(n=n.map),google.maps.event.addListener(n,e,t);t={handler:t,eventName:e};return n.registered_events[e]=n.registered_events[e]||[],n.registered_events[e].push(t),t},GMaps.off=function(e,n){-1==GMaps.custom_events.indexOf(e)?(n instanceof GMaps&&(n=n.map),google.maps.event.clearListeners(n,e)):n.registered_events[e]=[]},GMaps.once=function(e,n,t){if(-1==GMaps.custom_events.indexOf(e))return n instanceof GMaps&&(n=n.map),google.maps.event.addListenerOnce(n,e,t)},GMaps.fire=function(e,n,t){if(-1==GMaps.custom_events.indexOf(e))google.maps.event.trigger(n,e,Array.prototype.slice.apply(arguments).slice(2));else if(e in t.registered_events)for(var s=t.registered_events[e],o=0;o<s.length;o++)s[o].handler.apply(t,[n])};