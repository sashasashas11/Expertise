'use strict';

angular.module('Expertise', [
		'expertise.controllers',
		'ngRoute',
		'ngCookies',
		'ui'
	]).config(['$routeProvider', function ($routeProvider) {
		$routeProvider.
			when("/welcome", { templateUrl: "templates/welcome.html", controller: "expertiseController" }).
			otherwise({redirectTo: '/welcome'});
	}])
	.config(['$locationProvider', function ($locationProvider) {
		$locationProvider.html5Mode(true).hashPrefix('!');
	}]);