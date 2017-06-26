	// create the module and name it forestalApp
	var forestalApp = angular.module('forestalApp', ['ngRoute']);

	// configure our routes
	/*forestalApp.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl : '/views/basicView.html',
				controller  : 'serviceController'
			});
	});*/
	forestalApp.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl : '/views/Contacto.html',
				controller  : 'serviceController'
			});
	});
