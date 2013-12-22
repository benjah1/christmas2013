'use strict';

define([
	'app',
	'jQuery',
	'services/resizer',
	'services/animate',
	'Modal'
], function(app,$){
	
	return app.controller('PopupCtrl', ['$scope','$sce','Resizer','Animate', function($scope,$sce) {
	
		var modal = $('.modal').modal({show:false});
		//var modal = $('.modal').modal({});

		var showModal = function(){
			modal.css('display','block');
			setTimeout(function(){
				modal.modal('show');
			},100);
		};

		$scope.$on('showModal',showModal);
		
		$scope.message = '<div><div style="float:left;width:40%;"><img style="width:100%;" src="images/photo.png"/></div><div style="text-align:center;font-family:\'Coming Soon\', cursive;text-shadow:0 0 3px #666;font-size:36px;"><p>Wishing you<br/>peace, joy and happiness<br/>through<br/>Christmas<br/>and<br/>the coming year.<br/><br/>by Zhibin and Lixue</p></div><div style="clear:both;"></div></div>';
		$scope.updateMessage = function(){
			$scope.url = $scope.newMessage;
		};

		$scope.getMessage = function(){
			return $sce.trustAsHtml($scope.message);
		};
	}]);

});
