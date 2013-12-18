'use strict';

define([
	'app',
	'jQuery',
	'services/resizer',
	'services/animate'
], function(app,$){
	
	return app.controller('SnowCtrl', ['$scope','Resizer','Animate', function($scope, resizer, animate) {
		var snowNum = 150;

		var Snowflake = function(){
			var size = resizer.size();

			var ySeed = Math.random();
			var _y = (0.2*ySeed-0.6)*size.height,
					_x = (Math.random()-0.5)*size.width* 0.5,
					_z = -ySeed*600+500;
		
			var direction = _x>0?1:-1;
			var xSpeed = direction*(Math.random()-0.1),
					ySpeed = (1-ySeed)*2+1;

			var lifeTime = Math.floor((1+Math.random())*size.height*0.8/ySpeed);

			var _inst;
			var init = function(){
				var layer = Math.floor(Math.random()*3);
				_inst = $('<div class="sf">').appendTo('#layer'+layer);
				_inst.css('-webkit-transform', 'translate3d('+_x+'px, '+_y+'px, '+_z+'px)');
				//_inst.css('box-shadow','#efefef 0 0 4px 4px');
				setTimeout(function(){
					_inst.addClass('s');
				},100);
			};

			var fall = function(){
				_y += ySpeed;
				_x += xSpeed;
				_inst.css('-webkit-transform', 'translate3d('+_x+'px, '+_y+'px, '+_z+'px)');
				if(--lifeTime > 0){
					setTimeout(fall,1000/60);
					if( 70 === lifeTime ){
						_inst.addClass('e');
					}
				}else{
					_inst.remove();
				}
			};
			
			init();
			fall();

			return this;
		};


		$scope.$on('boxClick',function(){
			if(animate('erupt',(1.6+0.28*1.6*3)*1000)){
				var i = snowNum,
					s = function(){
						new Snowflake();
						if(--i > 0){
							setTimeout(s,300);
						}
					};
				setTimeout(s,1000);
			}
		});


	}]);
});
