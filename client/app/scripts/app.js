'use strict';

angular.module('clientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/expertise', {
        templateUrl: 'views/expertise.html',
        controller: 'ExpertiseCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
