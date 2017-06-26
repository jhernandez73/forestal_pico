	forestalApp.controller('mapController', function($scope) {
		//MAPS
		var maps = [
			{ coordinates: {lat: -35.678889, lng: -63.752500}, elementId: 'map1', zoom: 13 },
			{ coordinates: {lat: -35.676667, lng: -63.770278}, elementId: 'map2', zoom: 13 },
			{ coordinates: {lat: -37.287778, lng: -59.201667}, elementId: 'map3', zoom: 13 },
			{ coordinates: {lat: -38.912778, lng: -68.107778}, elementId: 'map4', zoom: 13 }
		];

		angular.forEach(maps, function(map, key) {
			initMap(map);
		});

		function initMap(map) {
			var uluru = map.coordinates;
        	var map = new google.maps.Map(document.getElementById(map.elementId), {
          		zoom: map.zoom,
          		center: uluru
        });
        	var marker = new google.maps.Marker({
          		position: uluru,
          		map: map
        });
		}
	});