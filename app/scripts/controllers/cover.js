'use strict';

define([
	'app',
	'jQuery'
], function(app,$){
	
	return app.controller('CoverCtrl', [
		'$scope',
		'$rootScope',
		function($scope, $rootScope) {
			$scope.play = function(){
				$rootScope.$broadcast('play');
				
				$('.cover').css('opacity',0);
				setTimeout(function(){
					$('.cover').remove();
				},500);

			};
		}

	]);

});
