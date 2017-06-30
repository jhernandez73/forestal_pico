	// create the module and name it forestalApp
	var forestalApp = angular.module('forestalApp', ['ngRoute']);

	// configure our routes
	forestalApp.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl : '/views/inicio.html',
				controller  : ''
			})
			.when('/ubicacion', {
				templateUrl : '/views/ubicacion.html',
				controller  : 'mapController'
			})
			.when('/servicios', {
				templateUrl : '/views/servicios.html',
				controller  : ''
			})
			.when('/forestrans', {
				templateUrl : '/views/servicios_forestrans.html',
				controller  : ''
			})
			.when('/mision', {
				templateUrl : '/views/institucional_mision.html',
				controller  : ''
			})
			.when('/armaduras', {
				templateUrl : '/views/servicios_armaduras.html',
				controller  : ''
			})
			.when('/industrial', {
				templateUrl : '/views/servicios_industrial.html',
				controller  : ''
			})
			.when('/contacto', {
				templateUrl : '/views/contacto.html',
				controller  : ''
			})
			.when('/historia', {
				templateUrl : '/views/historia.html',
				controller  : ''
			})
			.when('/', {
				templateUrl : '/views/Contacto.html',
				controller  : 'serviceController'
			});
	});
	
