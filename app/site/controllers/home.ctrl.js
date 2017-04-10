'use strict';

(function(){
	angular
		.module("mainApp")
		.controller("HomeCtrl", HomeCtrl);

	function HomeCtrl($scope, $window, $state, $http, toastr){
		// document.getElementById('demovid').play();
    var homeVm = this;
      homeVm.selected = "home";
  		homeVm.isSelected = isSelected;
      homeVm.route = route;


  		// angular.element($window).bind("scroll", function() {
    //         var offset = $(document).scrollTop();
    //         var windowHeight = $window.innerHeight;
    //         var servicesHeight = document.getElementById('cover').getBoundingClientRect().top;
    //         var aboutHeight = document.getElementById('about').getBoundingClientRect().top;
    //         var contactHeight = document.getElementById('contact').getBoundingClientRect().top;

		 //    $scope.$apply(function(){
			//     if( offset<=1 ){
			//         homeVm.opacity=0;
			//         homeVm.socialDisplay = "none";
			//     }else if( offset<=windowHeight ){
			//         homeVm.opacity=offset/windowHeight;
			//         homeVm.socialDisplay = "auto";
			//     } else {
			//     	homeVm.opacity = 1;
			//     }

			//     if (offset < windowHeight/2){
			//     	homeVm.namePos = "logo__name--Abs";
			//     	homeVm.chevDisplay = "auto";
			//     } else {
			//     	homeVm.namePos = "logo__name--Fix";
			//     	homeVm.chevDisplay = "none";
			// 	    if(offset >= windowHeight){
			// 	    	homeVm.navBarPos = "fixed";
			// 	    	for (var i = 1; i <= 4; i++){
			// 		  		homeVm.fadeIn(i);
			// 	  		}
			// 	    } else {
			// 	    	homeVm.navBarPos = "absolute";
			// 	    }
			// 	}
			// });

  		// function smoothScroll(label){
  		// 	var target;
  		// 	target = document.getElementById(label);
  		// 	var scrollContainer = target;
  		// 	do { //find scroll container
		  //       scrollContainer = scrollContainer.parentNode;
		  //       if (!scrollContainer) return;
		  //       scrollContainer.scrollTop += 1;
		  //   } while (scrollContainer.scrollTop == 0);

		  //   var targetY = 0;
		  //   do { //find the top of target relatively to the container
		  //       if (target == scrollContainer){
		  //       	break;
		  //       }
		  //       targetY += target.offsetTop;
		  //   } while (target = target.offsetParent);

		  //   scroll = function(c, a, b, i) {
		  //       i++; if (i > 100) return;
		  //       c.scrollTop = a + (b - a) / 100 * i;
		  //       setTimeout(function(){
		  //       	scroll(c, a, b, i);
				//     if (label != 'cover' && label != 'top'){
			 //    		homeVm.selected = label;
		  //  			} else {
		  //  				homeVm.selected = 'services';
		  //  			}
		  //       }, 10);
		  //   }
		  //   start scrolling
		  //   scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
  		// }

  		// function scrollTo(num){
  		// 	if(num == 1){
  		// 		smoothScroll('cover')
  		// 	} else if (num == 2){
  		// 		smoothScroll("about")
  		// 	} else if (num == 3){
  		// 		smoothScroll("contact")
  		// 	} else if (num == 4){
  		// 		if ($(document).scrollTop() <= 400){
	  	// 			smoothScroll('cover')
	  	// 		} else {
	  	// 			smoothScroll('top');
	  	// 		}
  		// 	}
  		// }

  		function isSelected(label){
  			if (label == homeVm.selected){
  				return 'selected'
  			}
  		}


      function route(num){
        if(num == 1){
          homeVm.selected="home"
          $state.go('home');
        } else if (num == 3){
          $state.go('collection');
        } else if (num ==4){
          $state.go('connect');
        }
      }
  	// 	function sendEmail(ans){

  	// 		var isAns;

  	// 		if (ans == homeVm.rand1 + homeVm.rand2){
  	// 			isAns = true;
  	// 		} else {
  	// 			isAns = false;
  	// 		}

  	// 		var isPhone = Number.isInteger(parseInt(homeVm.phone.replace(/\D/, '')));

  	// 		if (homeVm.cont_name && homeVm.phone && homeVm.budget && homeVm.email){
	  // 			if (isPhone){
		 //  			if (isAns){
		 //  				var body = {comp_name: homeVm.comp_name,
  	// 					cont_name: homeVm.cont_name,
  	// 					phone: homeVm.phone,
  	// 					email: homeVm.email,
  	// 					budget: homeVm.budget};

			// 	  		$http({
			// 			  method: 'POST',
			// 			  url: '/api/email',
			// 			  data: body
			// 			}).then(function success(res){
			// 				toastr.success('Thank you for your interest! I will repond to you as soon as possible.', 'Email Sent');
			// 				console.log("success", res);
			// 			}, function error(res){
			// 				toastr.error('Sorry for the inconvenience', 'Error');
			// 				console.log("error", res);
			// 			});
		 //  			} else {
		 //  				toastr.warning('Please try again!', 'Incorrect answer to math question')
		 //  			}
	  // 			} else {
	  // 				toastr.warning('Please enter valid phone number', 'Form Incomplete');
	  // 			}
  	// 		} else {
  	// 			toastr.warning('Please fill out all required fields', 'Form Incomplete');
  	// 		}

			// homeVm.rand1 = Math.ceil(Math.random()*10);
  	// 		homeVm.rand2 = Math.ceil(Math.random()*10);
  	// 	}
    }

})();
