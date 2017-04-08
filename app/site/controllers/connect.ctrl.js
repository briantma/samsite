'use strict';

(function(){
	angular
		.module("mainApp")
		.controller("ConnectCtrl", ConnectCtrl);

	function ConnectCtrl ($state){
		var connectVm = this;
      	connectVm.route = route;

		function route(num){
	        if (num == 1){
	          $state.go('home');
	        } else if (num == 3){
	          $state.go('collection');
	        } else if (num ==4){
	          $state.go('connect');
	        } 
	    }
	}	
})();