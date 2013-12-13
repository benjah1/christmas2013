'use strict';

define(['app','jQuery','Sprite3D'], function(app,$,Sprite3D){
	
	return app.controller('MainCtrl', ['$scope', function MainCtrl($scope) {
	
		console.log('hi2');
		if(1===0){ $scope=null;}
		//var isSupported = Sprite3D.isSupported();
		/*
		var sta = {
			width: $('#stage').width(),
			height: $('#stage').height()
		};
		*/
		var win = {
				width: $(window).width(),
				height: $(window).height()
			};
		//var fps = 2;
			
		var stage = Sprite3D.stage($('#stage').get(0)).origin(0, 0, 0).position(0 ,0,0).perspective(900).update();

		var scene = Sprite3D.create($('.scene').get(0)).origin(0,0,0).position(0,0,0).update();

		var data = [
			['ground','s1',[0,160,-225],null],

			['t_feet','s2',[60,-65,-30],[0,20,0]],
			['t_mid','s3',[-100,-90,30],[15,0,0]],
			['t_top','s4',[80,-80,35],null],
			['t_star','s5',[60,-200,50],[-15,0,0]],

			['b_body','s4',[470,-50,30],[0,-15,0]],
			['b_dress','s5',[20,65,10],null],
			['b_hat','s6',[40,0,15],null],

	
			['a_body','s3',[530,-115,110],[0,-30,0]],
			['a_dress','s4',[45,80,10],null],
			['a_hat','s4',[50,-5,10],null]

		
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

		$(document).resize(function(){
			win = {
				width: $(window).width(),
				height: $(window).height()
			};
		});

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
				dx = e.pageX - win.width/2;
				dy = e.pageY - win.height/2;
			};
			$(document).mousemove(mousemove);
		})();

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
