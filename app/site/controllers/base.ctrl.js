'use strict';

(function(){
	angular
		.module("mainApp")
		.controller("BaseCtrl", BaseCtrl);

	function BaseCtrl ($state){
		let baseVm = this;

		//variable declarations
		baseVm.selected = "";

		//function bindings
      	baseVm.route = route;
      	baseVm.isSelected = isSelected;


      	baseVm.route(1);

		function route(num){
	        if (num == 1){
	          baseVm.selected = "home";
	          $state.go('base.home');
	          console.log(baseVm.selected)
	        } else if (num == 3){
	          baseVm.selected = "collection";
	          $state.go('base.collection');
	          console.log(baseVm.selected)
	        } else if (num == 4){
	          baseVm.selected = "connect";
	          $state.go('base.connect');
	          console.log(baseVm.selected)
	        } 
	    }

  		function isSelected(label){
			if (label == baseVm.selected){
				return 'selected'
			}
  		}
	}	
})();