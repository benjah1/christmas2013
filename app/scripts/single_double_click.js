'use strict';
// Author:  Jacek Becela
// Source:  http://gist.github.com/399624
// License: MIT

define(['jQuery'], function($){
	$.fn.singleDoubleClick = function(singleClickCallback, doubleClickCallback, timeout) {
		return this.each(function(){
			var clicks = 0, self = this;
			$(this).click(function(event){
				clicks++;
				if ( 1 === clicks ) {
					setTimeout(function(){
						if( 1 === clicks ) {
							singleClickCallback.call(self, event);
						} else {
							doubleClickCallback.call(self, event);
						}
						clicks = 0;
					}, timeout || 200);
				}
			});
		});
	};
});
