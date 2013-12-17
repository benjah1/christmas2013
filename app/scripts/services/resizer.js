'use strict';

define(['app','jQuery'], function(app,$){
	
	return app.service('Resizer',
		(function(){
			var width = $(window).width(),
					height = $(window).height();

			$(window).resize(function(){
				width = $(window).width();
				height = $(window).height();
			});

			return function(){
				return {
					size: function(){
						return {
							width: width,
							height: height
						};
					}
				};
			};
		})()
	);
});

