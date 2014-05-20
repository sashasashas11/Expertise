'use strict';

angular.module('expertise.controllers', []).
	controller('expertiseController', function ($scope, $http, $cookieStore, $location, $cookies) {

		$scope.foo = function(item) {
			console.log(item)
		};
		$scope.test = 'test';

		$scope.singOut = function () {
			$cookieStore.remove('_expertise_session');
			delete $cookies['_expertise_session'];
			$location.path("/users/sign_in");
//			$http.delete('/users/sign_out').success(function() {
//				console.log('ok');
//			});
		}

	});