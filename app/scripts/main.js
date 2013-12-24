'use strict';

require.config({
	paths: {
		angular: '../bower_components/angular/angular',
		jQuery: '../bower_components/jquery/jquery.min',
		Sprite3D: '../bower_components/sprite/Sprite3D',
		angularsanitize: '../bower_components/angular-sanitize/angular-sanitize',
		Modal: '../bower_components/sass-bootstrap/js/modal',
		Tooltip: '../bower_components/sass-bootstrap/js/tooltip',
		Popover: '../bower_components/sass-bootstrap/js/popover',
		requirejs: '../bower_components/requirejs/require',
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
		angularsanitize: {
			deps: [
				'angular'
			],
			exports: 'angularsanitize'
		},
		Modal: {
			deps: [
				'jQuery'
			],
			exports: 'Modal'
		},
		Tooltip:{
			deps: ['jQuery'],
			exports: 'Tooltip'
		},
		Popover: {
			deps: [
				'jQuery','Tooltip'
			],
			exports: 'Popover'
		}

	}
});

require([
	'app',
	'angular',
	'controllers/scene',
	'controllers/snow',
	'controllers/popup',
	'controllers/cover'
],function(app,angular){

	angular.bootstrap(document, ['christmas2013App']);
});

