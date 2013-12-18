'use strict';

define(['app','jQuery'], function(app, $){
	
	return app.service('Animate',
		(function(){
			var _onHold = false,
			_exec = function( classname, timeout ){
				if(_onHold){
					return false;
				}
				console.log(classname);
				$('body').addClass(classname);
				setTimeout(function(){
					$('body').removeClass(classname);
					_onHold = false;
				}, timeout);
				_onHold = true;
				return true;
			};

			return function(){
				return _exec;
			};

		})()
	);
});

