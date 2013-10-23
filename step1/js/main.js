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
	var isSupported = Sprite3D.isSupported(), width = $('#stage').width();

  console.log( isSupported );	

	console.log( document.querySelector("#stage") );
	console.log( $('#stage').get(0) );

	var stage = Sprite3D.stage($('#stage').get(0)).origin(width/2, 0, 0).position(width/2,0,0).rotation(5,0,0).perspective(400).update();

	// hack 
	$('#stage').css(Sprite3D._browserPrefix+'TransformStyle', 'preserve-3d');

	var upper = Sprite3D.create('#upper').position(0,-150, 50).update(),
		lower = Sprite3D.create('#lower').position(0,400,200).update(),
		object = Sprite3D.create('#object').position(width/2-30,290,180).update(),
		bg = Sprite3D.create('#bg').position(-width*2,200,-200).update();

	stage.appendChild( bg );
	stage.appendChild( upper );
	stage.appendChild( lower );
	stage.appendChild( object );


	$(document).resize(function(){
		width = $('#stage').width();
	});

	$(document).mousemove(function(e){
		var dt = e.pageX - width/2, dg = 16;
		console.log(dt);
		stage.origin((e.pageX-width/2)*0.2+width/2,-50,0).rotation(5+Math.abs(e.pageX-width/2)*0.005, 0, 0).update();
		bg.rotation(0 ,dt/dg, 0).update();
		upper.rotation(0 ,dt/dg, 0).update();
		lower.rotation(0 ,dt/(dg*2), 0).update();
		object.rotation(0 ,dt/(dg*1.5), 0).update();
	});
});
