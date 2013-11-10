'use strict';

require.config({
	paths: {
		sprite: '../bower_components/sprite/Sprite3D',	
		jquery: '../bower_components/jquery/jquery.min'
	},
	shim: {
		sprite: {
			exports: 'Sprite3D'	
		}
	}
});

require( ['sprite','jquery'], function(Sprite3D, $ ){
	console.log( Sprite3D );
	var isSupported = Sprite3D.isSupported();
	var sta = { 
			width: $('#stage').width(),
			height: $('#stage').height()
		};
	var win = {
			width: $(window).width(),
			height: $(window).height()
		};
		
 	console.log( isSupported );	

	console.log( document.querySelector("#stage") );
	console.log( $('#stage').get(0) );

	var stage = Sprite3D.stage($('#stage').get(0)).origin(0, 0, 0).position(0 ,0,0).perspective(400).update();
	$('#stage').css(Sprite3D._browserPrefix+'TransformStyle', 'preserve-3d');

	var container = Sprite3D.create('#container').origin(0,0,0).position(0,0,0).update();

	console.log(stage);
	var bg = Sprite3D.create('#bg').transformOrigin(0,0).position(-sta.width*2,0,-1000).update();
	var object = Sprite3D.create('.object obj').position(300,100,100).origin(0,0,0).update();

	stage.appendChild( container );
	container.appendChild( bg );
	container.appendChild( object );

console.log($('#bg'));
	$('#bg').css('top','500px');

	$(document).resize(function(){
		win = {
			width: $(window).width(),
			height: $(window).height()
		};
	});

	$(document).mousemove(function(e){

		var dx = e.pageX - win.width/2;
		var dy = e.pageY - win.height/2;

		var dg = 8;

		//console.log(dx);
		//container.origin((e.pageX-width/2)*0.2+width/2,-200,0).rotation(Math.abs(e.pageX-width/2)*0.00, 0, 0).update();
		//stage.rotation(dy/dg, dx/dg, 0).update();
		
		container.rotation(dy/dg, dx/dg, 0).update();
		bg.rotation(dy/dg ,dx/dg, 0).update();
		//object.rotation(0 ,dx/(dg), 0).update();

	});
});
