'use strict';

angular.module('Expertise', [
		'expertise.controllers',
		'welcome.controllers',
		'ngRoute',
		'ngCookies',
		'ui.bootstrap',
		'ui'
	]).config(['$routeProvider', function ($routeProvider) {
		$routeProvider.
			when("/welcome", { templateUrl: "templates/welcome.html", controller: "welcomeController" }).
			when("/expertise", { templateUrl: "templates/expertise.html", controller: "expertiseController" }).
			otherwise({redirectTo: '/'});
	}])
	.config(['$locationProvider', function ($locationProvider) {
		$locationProvider.html5Mode(true).hashPrefix('!');
	}]);