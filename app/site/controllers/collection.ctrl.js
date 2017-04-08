'use strict';

(function(){
	angular
		.module("mainApp")
		.controller("CollectionCtrl", CollectionCtrl);

	function CollectionCtrl ($state){
		var collectVm = this;
      	collectVm.route = route;

		function route(num){
	        if (num == 1){
	          
	          $state.go('home');
	        } else if (num == 3){
	          
	          $state.go('collection');
	        } else if (num == 4){
	          
	          $state.go('connect');
	        } 
	    }

  		function isSelected(label){

			if (label == homeVm.selected){
				return 'selected'
			}
  		}
	}	
})();