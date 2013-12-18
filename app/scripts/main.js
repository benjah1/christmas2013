'use strict';

require.config({
	paths: {
		angular: '/bower_components/angular/angular.min',
		jQuery: '/bower_components/jquery/jquery.min',
		Sprite3D: '/bower_components/sprite/Sprite3D'
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
		}
	}

});

require([
	'app',
	'angular',
	'controllers/scene',
	'controllers/snow'
],function(app,angular){

	angular.bootstrap(document, ['christmas2013App']);
});

