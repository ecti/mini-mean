'use strict';

angular.module('home').config(['$routeProvider',
  function($routeProvider) {
	$routeProvider.
	  when('/', {
			templateUrl: 'modules/home/views/home.html',
			controller: 'HomeController'
	  }).
	  otherwise({
			redirectTo: '/'
	  });
  }
]);