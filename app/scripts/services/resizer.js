'use strict';

define(['app','jQuery'], function(app,$){
	
	return app.factory('Resizer',[
		'$rootScope',
		function($rootScope){
			var width = $(window).width(),
					height = $(window).height(),
					ratio = 16/9,
					resize = function(){
						width = $(window).width();
						height = $(window).height();
						var w = width,
								h = height;
						
						console.log(w);
						if( 1600 >= width || 900 >= height ){
							var dt = (width/height)/ratio;
							if( 1 <= dt ){
								// height
								w = height*ratio;
							}else{
								h = width/ratio;
							}
						}else{
							w = 1600;
							h = 900;
						}
						$rootScope.$broadcast('updateScene',{w:w,h:h,ow:width,oh:height});
					};

			$(window).resize(resize);
			setTimeout(resize,1000);
			return {
				size: function(){
					return {
						width: width,
						height: height
					};
				}
			};
			
		}
	]);
});

