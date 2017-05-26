	// create the module and name it forestalApp
	var forestalApp = angular.module('forestalApp', ['ngRoute']);

	// configure our routes
	forestalApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			/*.when('/', {
				templateUrl : 'views/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'views/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'views/contact.html',
				controller  : 'contactController'
			});*/
	});

	