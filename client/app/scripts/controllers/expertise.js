'use strict';

angular.module('clientApp')
  .controller('ExpertiseCtrl', function ($scope, Expertise, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

		$http.get('/expertizes.json').success(function(res) {
			console.log(res);
		});
		$scope.expertise = Expertise.someMethod();
  });
