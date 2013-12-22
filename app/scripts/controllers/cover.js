'use strict';

define([
	'app',
	'jQuery',
	'services/resizer',
], function(app,$){
	
	return app.controller('CoverCtrl', [
		'$scope',
		'$rootScope',
		'Resizer',
		function($scope, $rootScope, resizer) {
			$scope.play = function(){
				$rootScope.$broadcast('play');
				
				$('.cover').css('opacity',0);
				setTimeout(function(){
					$('.cover').remove();
				},500);

			}
		}
	]);

});
