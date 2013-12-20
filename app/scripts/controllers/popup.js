'use strict';

define([
	'app',
	'jQuery',
	'services/resizer',
	'services/animate',
	'Modal'
], function(app,$){
	
	return app.controller('PopupCtrl', ['$scope','$sce','Resizer','Animate', function($scope,$sce) {
	
		var modal = $('.modal-popup').modal({show:false});

		/*
		modal.on('shown.bs.modal',function(){
			//$(this).addClass('in');	
		}).on('hidden.bs.modal',function(){
			$(this).removeClass('in');	
		});
		*/

		var showModal = function(){
			modal.modal('toggle');
		};

		$scope.$on('showModal',showModal);
		


		$scope.message = '<div style="text-align:center;text-shadow:0 0 5px #f00;"><p>Wishing you<br/>peace, joy and happiness<br/>through<br/>Christmas and the coming year.</p><br/><p>by Zhibin and Lixue</p></div>';
		$scope.updateMessage = function(){
			$scope.url = $scope.newMessage;
		};

		$scope.getMessage = function(){
			return $sce.trustAsHtml($scope.message);
		}

	}]);

});
