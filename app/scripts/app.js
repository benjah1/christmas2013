'use strict';

angular.module('christmas2013App',[
	'ngRoute'
]).config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
	
});

