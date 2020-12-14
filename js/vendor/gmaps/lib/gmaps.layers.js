GMaps.prototype.getFromFusionTables=function(e){var s=e.events;delete e.events;var a,r=new google.maps.FusionTablesLayer(e);for(a in s)!function(a){google.maps.event.addListener(r,a,function(e){s[a].apply(this,[e])})}(a);return this.layers.push(r),r},GMaps.prototype.loadFromFusionTables=function(e){e=this.getFromFusionTables(e);return e.setMap(this.map),e},GMaps.prototype.getFromKML=function(e){var a=e.url,s=e.events;delete e.url,delete e.events;var r,t=new google.maps.KmlLayer(a,e);for(r in s)!function(a){google.maps.event.addListener(t,a,function(e){s[a].apply(this,[e])})}(r);return this.layers.push(t),t},GMaps.prototype.loadFromKML=function(e){e=this.getFromKML(e);return e.setMap(this.map),e},GMaps.prototype.addLayer=function(e,a){var s,r;switch(a=a||{},e){case"weather":this.singleLayers.weather=s=new google.maps.weather.WeatherLayer;break;case"clouds":this.singleLayers.clouds=s=new google.maps.weather.CloudLayer;break;case"traffic":this.singleLayers.traffic=s=new google.maps.TrafficLayer;break;case"transit":this.singleLayers.transit=s=new google.maps.TransitLayer;break;case"bicycling":this.singleLayers.bicycling=s=new google.maps.BicyclingLayer;break;case"panoramio":this.singleLayers.panoramio=s=new google.maps.panoramio.PanoramioLayer,s.setTag(a.filter),delete a.filter,a.click&&google.maps.event.addListener(s,"click",function(e){a.click(e),delete a.click});break;case"places":this.singleLayers.places=s=new google.maps.places.PlacesService(this.map),(a.search||a.nearbySearch||a.radarSearch)&&(r={bounds:a.bounds||null,keyword:a.keyword||null,location:a.location||null,name:a.name||null,radius:a.radius||null,rankBy:a.rankBy||null,types:a.types||null},a.radarSearch&&s.radarSearch(r,a.radarSearch),a.search&&s.search(r,a.search),a.nearbySearch&&s.nearbySearch(r,a.nearbySearch)),a.textSearch&&(r={bounds:a.bounds||null,location:a.location||null,query:a.query||null,radius:a.radius||null},s.textSearch(r,a.textSearch))}if(void 0!==s)return"function"==typeof s.setOptions&&s.setOptions(a),"function"==typeof s.setMap&&s.setMap(this.map),s},GMaps.prototype.removeLayer=function(e){if("string"==typeof e&&void 0!==this.singleLayers[e])this.singleLayers[e].setMap(null),delete this.singleLayers[e];else for(var a=0;a<this.layers.length;a++)if(this.layers[a]===e){this.layers[a].setMap(null),this.layers.splice(a,1);break}};