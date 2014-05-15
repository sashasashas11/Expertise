'use strict';

angular.module('expertise.controllers', []).
	controller('expertiseController', function ($scope, $http) {

		$scope.foo = function(item) {
			console.log(item)
		};
		$scope.test = 'test';

		$scope.singOut = function () {
			$http.delete('/users/sign_out').success(function() {
				console.log('ok');
			});
		}

	});