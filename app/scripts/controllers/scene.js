'use strict';

define(['app','jQuery','Sprite3D','services/resizer'], function(app,$,Sprite3D){
	
	return app.controller('SceneCtrl', ['$scope','Resizer', function($scope, resizer) {
	
		if(1===0){ $scope=null;}
		//var isSupported = Sprite3D.isSupported();
		//var fps = 2;
			
		var stage = Sprite3D.stage($('#stage').get(0)).origin(0, 0, 0).position(0 ,0,0).perspective(700).update();

		var scene = Sprite3D.create($('.scene').get(0)).origin(0,0,0).position(0,0,0).update();

		var data = [
			['ground','s1',[0,160,-225],null],

			['t_feet','s2',[60,-65,-75],[0,20,0]],
			['t_mid','s3',[-100,-90,30],[15,0,0]],
			['t_top','s4',[80,-80,35],null],
			['t_star','s5',[60,-200,50],[-15,0,0]],

			['b_body','s4',[470,-50,0],[0,-15,0]],
			['b_dress','s5',[20,65,10],null],
			['b_hat','s6',[40,0,15],null],

	
			['a_body','s3',[530,-115,80],[0,-30,0]],
			['a_dress','s4',[45,80,10],null],
			['a_hat','s5',[50,-5,10],null],

			['g_top', 's6', [245,245,140],null],
			['g_left_t', 's6', [245-150/2+1,245+45,140-60/2],[90,90,0]],
			['g_mid_t', 's6', [245,245+150/2+45-1,140-60/2],[90,0,0]],
			['g_right_t', 's6', [245+150/2-1,245+45,140-60/2],[90,90,0]],

			['g_left_l', 's6', [250-140/2,250,140/2],[90,90,0]],
			['g_mid_l', 's6', [250,250+140/2-1,140/2],[90,0,0]],
			['g_right_l', 's6', [250+140/2,250,140/2],[90,90,0]]

		];

		var item, tmp, d;
		for(item in data){
			d = data[item];
			tmp = Sprite3D.create($('.'+d[0]).get(0));
			if( null !== d[2] ){
				tmp.position(
					d[2][0],
					d[2][1],
					d[2][2]
				);
			}
			if( null !== d[3] ){
				tmp.rotation(
					d[3][0],
					d[3][1],
					d[3][2]
				);
			}
			tmp.update();
		}


		for(item in data){
			d = data[item];
			$('.'+d[0]).wrap('<div class="bouncing '+d[1]+' wrapper-'+d[0]+'">');
		}

		stage.scale(0.5,0.5,0.5).update();
		$('body').addClass('animate');

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

		$scope.clickGift = function(){
			console.log('1');
		}

		$scope.doubleClickGift = function(){
			console.log()('2');	
		}


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

	}]);
});
