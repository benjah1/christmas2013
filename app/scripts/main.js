'use strict';

require.config({
	paths: {
		angular: '/bower_components/angular/angular.min',
		jQuery: '/bower_components/jquery/jquery.min',
		Sprite3D: '/bower_components/sprite/Sprite3D',
		ngRoute: '/bower_components/angular-route/angular-route.min'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		jQuery: {
			exports: 'jQuery'
		},
		Sprite3D: {
			exports: 'Sprite3D'
		},
		ngRoute: {
			exports: 'ngRoute'	
		}
	}

});

require(['app','angular','ngRoute','controllers/main'],function(app,angular){
	console.log('hi');
	app.config(function($routeProvider){
		$routeProvider.when('/',{
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
	});
	angular.bootstrap(document, ['christmas2013App']);
});

