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
	var fps = 2;
		
	var stage = Sprite3D.stage($('#stage').get(0)).origin(0, 0, 0).position(0 ,0,0).perspective(400).update();
//	$('#stage')
//		.css(Sprite3D._browserPrefix+'TransformStyle', 'preserve-3d');
//		.css('transition', 'all '+(1/fps)+'s');

	var container = Sprite3D.create('#container').origin(0,0,0).position(0,0,0).update();

	console.log(stage);
	var bg = Sprite3D.create('#bg').transformOrigin(0,0).position(-sta.width*2,0,-1000).update();
	var object1 = Sprite3D.create('.object1 obj').position(300,150,100).origin(0,0,0).update();
	var object2 = Sprite3D.create('.object2 obj').position(-45,-20,10).origin(0,0,0).update();

	stage.appendChild( container );
	container.appendChild( bg);
	container.appendChild( object1 );
	object1.appendChild( object2 );

	$('#container').wrap('<div class="bouncing s0 pContainer">');
	$('.object1').wrap('<div class="bouncing s1 pObject1">');
	$('.object2').wrap('<div class="bouncing s2 pObject2">');

console.log($('#bg'));
	$('#bg').css('top','500px');

	$(document).resize(function(){
		win = {
			width: $(window).width(),
			height: $(window).height()
		};
	});

	//$('body').addClass('animate');

	$(document).mousemove(function(e){

		var dx = e.pageX - win.width/2;
		var dy = e.pageY - win.height/2;

		var dg = 8;

		//console.log(dx);
		//container.origin((e.pageX-width/2)*0.2+width/2,-200,0).rotation(Math.abs(e.pageX-width/2)*0.00, 0, 0).update();
		//stage.rotation(dy/dg, dx/dg, 0).update();
		
	container.rotation(-dy/dg, dx/dg, 0).update();


		//bg.rotation(dy/dg ,dx/dg, 0).update();
//		object1.rotation(dy/dg ,dx/(dg), 0).update();

	});

/*
	setInterval((function(){
		var s = 0, dt = 1;
		return function(){
			switch(s){
				case 0:
					stage.rotationY(dt).update();
					break;
				case 1:
					stage.rotationX(dt*-1).update();
					break;
				case 2:
					stage.rotationY(dt*-1).update();
					break;
				case 3:
					stage.rotationX(dt).update();	
					break;
			}
			s = (++s)%4;
			console.log(s);
		}
	})(),1000/(fps*2));
	*/
});
