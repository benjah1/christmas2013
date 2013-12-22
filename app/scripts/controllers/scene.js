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
		'$rootScope',
		'Resizer',
		'Animate',
		function($scope, $rootScope, resizer, animate) {
		
			if(1===0){ $scope=null;}
			//var isSupported = Sprite3D.isSupported();
			//var fps = 2;
				
			Sprite3D.stage($('#stage').get(0)).origin(0, 0, 0).position(0 ,0,0).perspective(700).update();

			var scene = Sprite3D.create($('.scene').get(0)).origin(0,0,0).position(-400,0,0).rotation(10,0,0).update();

			var data = [
				['ground','1', '1', [0,160,0],null],

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
				['g_mid_t','6', '1', [245,85,149],[0,0,0]],
				['g_right_t','6', '1', [245+150/2-1,85,150/2],[0,90,0]],

				['g_left_l','6', '1', [250-140/2+1,450/2-140,140/2],[0,90,0]],
				['g_mid_l','6', '1', [250,450/2-140,140-1],[0,0,0]],
				['g_right_l','6', '1', [250+140/2-1,450/2-140,140/2],[0,90,0]],

				
				['t_text','7', '1', [230,260,440],[-110,0,0]]
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
				$('.'+d[0]).wrap('<div class="animate bouncing-'+d[1]+' wrapper-'+d[0]+'">');
			}

			//stage.scale(0.5,0.5,0.5).update();			

			(function(){
				var hasTimer = false, updated = false, dx, dy, dg = 16,
				timeFunc = function(){
					scene.rotation(-dy/dg+10, dx/dg, 0).update();
					if(updated){
						setTimeout(timeFunc,300);
						updated = false;
					}else{
						hasTimer = false;
					}
				},
				mousemove = function(e){
					var win = resizer.size();
					dx = e.pageX - win.width/2;
					dy = e.pageY - win.height/2;
					if(hasTimer){
						updated = true;
					}else{
						hasTimer = true;
						updated = false;
						scene.rotation(-dy/dg+10, dx/dg, 0).update();
						setTimeout(timeFunc, 300);
					}
				};
				$(document).mousemove(mousemove);
			})();

			
			var box = $('.g_top, .g_left_t, .g_mid_t, .g_right_t, .g_left_l, .g_mid_l, .g_right_l');

			box.singleDoubleClick(function(){
				$scope.$broadcast('boxClick');

			}, function(){
				$rootScope.$broadcast('showModal');
				console.log('double click');

			},200);

			$scope.$on('updateScene',function(a,o){
				var ratio = o.w/1800;
				scene.scale(ratio, ratio, ratio).update();
				$('#stage').css('margin-top',o.oh-450-(o.oh-o.h)/2);
			});
		
			$scope.$on('play',function(){
				$('.content').css('display','block');
				animate('bounce', (1.6+0.28*1.6*7)*1000);
			});

		}
	]);
});
