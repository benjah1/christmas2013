'use strict';

require.config({
	paths: {
		sprite: '../bower_components/sprite/Sprite3D',	
		jquery: '../bower_components/jquery/jquery.min'
	},
	shim: {
		sprite: {
			exports: 'sprite'	
		}
	}
});

require( ['sprite','jquery'], function(sprite, $ ){
	alert('hi');
	
});
