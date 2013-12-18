'use strict';

define([
	'app',
	'jQuery',
	'Sprite3D',
	'services/resizer',
	'services/animate',
	'single_double_click'
], function(app,$,Sprite3D){
	
	return app.controller('SceneCtrl', [
		'$scope',
		'Resizer',
		'Animate',
		function($scope, resizer, animate) {
		
			if(1===0){ $scope=null;}
			//var isSupported = Sprite3D.isSupported();
			//var fps = 2;
				
			var stage = Sprite3D.stage($('#stage').get(0)).origin(0, 0, 0).position(0 ,0,0).perspective(700).update();

			var scene = Sprite3D.create($('.scene').get(0)).origin(0,0,0).position(0,0,0).update();

			var data = [
				['ground','1', '1', [0,160,-225],null],

				['t_feet','2', '1', [60,-65,-75],[0,20,0]],
				['t_mid','3', '1', [-100,-90,30],[15,0,0]],
				['t_top','4', '1', [80,-80,35],null],
				['t_star','5', '1', [60,-200,50],[-15,0,0]],

				['b_body','4', '1', [470,-50,0],[0,-15,0]],
				['b_dress','5', '1', [20,65,10],null],
				['b_hat','6', '1', [40,0,15],null],

		
				['a_body','3', '1', [530,-115,80],[0,-30,0]],
				['a_dress','4', '1', [45,80,10],null],
				['a_hat','5', '1', [50,-5,10],null],

				['g_top','6', '1', [245,10,150/2],[-90,0,0]],
				['g_left_t','6', '1', [245-150/2+1,85,150/2],[0,90,0]],
				['g_mid_t','6', '1', [245,85,150],[0,0,0]],
				['g_right_t','6', '1', [245+150/2,85,150/2],[0,90,0]],

				['g_left_l','6', '1', [250-140/2,450/2-140,140/2],[0,90,0]],
				['g_mid_l','6', '1', [250,450/2-140,140],[0,0,0]],
				['g_right_l','6', '1', [250+140/2,450/2-140,140/2],[0,90,0]]

			];

			var item, tmp, d;
			for(item in data){
				d = data[item];
				tmp = Sprite3D.create($('.'+d[0]).get(0));
				if( null !== d[3] ){
					tmp.position(
						d[3][0],
						d[3][1],
						d[3][2]
					);
				}
				if( null !== d[4] ){
					tmp.rotation(
						d[4][0],
						d[4][1],
						d[4][2]
					);
				}
				tmp.update();
			}


			for(item in data){
				d = data[item];
				$('.'+d[0]).wrap('<div class="animate bouncing-'+d[1]+' eruption-'+d[2]+' wrapper-'+d[0]+'">');
			}

			stage.scale(0.5,0.5,0.5).update();
			animate('bounce', (1.6+0.28*1.6*6)*1000);

			(function(){
				var hasTimer = false, updated = false, dx, dy, dg = 16,
				timeFunc = function(){
					scene.rotation(-dy/dg, dx/dg, 0).update();
					if(updated){
						setTimeout(timeFunc,300);
						updated = false;
					}else{
						hasTimer = false;
					}
				},
				mousemove = function(e){
					if(hasTimer){
						updated = true;
					}else{
						hasTimer = true;
						updated = false;
						scene.rotation(-dy/dg, dx/dg, 0).update();
						setTimeout(timeFunc, 300);
					}
					var win = resizer.size();
					dx = e.pageX - win.width/2;
					dy = e.pageY - win.height/2;
				};
				$(document).mousemove(mousemove);
			})();

			
			var box = $('.g_top, .g_left_t, .g_mid_t, .g_right_t, .g_left_l, .g_mid_l, .g_right_l');

			box.singleDoubleClick(function(){
				$scope.$broadcast('boxClick');


			}, function(){

				console.log('hi2');
			},200);

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

		}
	]);
});
