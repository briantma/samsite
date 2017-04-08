'use strict';

(function(){
	angular
		.module('mainApp', ['ui.router', 'ngAnimate', 'toastr']);

	angular
		.module('mainApp')
		.config(function($stateProvider, $urlRouterProvider, toastrConfig){
			$urlRouterProvider.otherwise("/");
			$stateProvider
				.state('home',{
					url:"/",
					templateUrl: 'site/partials/home.html',
					controller: 'HomeCtrl as ctrl'
				})
				.state('collection',{
					url:"/collection",
					templateUrl: 'site/partials/collection.html',
					controller: 'CollectionCtrl as ctrl'
				})
				.state('connect',{
					url:"/connect",
					templateUrl: 'site/partials/connect.html',
					controller: 'ConnectCtrl as ctrl'
				})

			angular.extend(toastrConfig, {
				autoDismiss: false,
				allowHtml: false,
			    closeButton: false,
			    closeHtml: '<button>&times;</button>',
			    containerId: 'toast-container',
			    extendedTimeOut: 1000,
			    iconClasses: {
			      error: 'toast-error',
			      info: 'toast-info',
			      success: 'toast-success',
			      warning: 'toast-warning'
			    },
			    maxOpened: 0,  
			    messageClass: 'toast-message',
			    newestOnTop: true,
			    onHidden: null,
			    onShown: null,
			    onTap: null,
			    positionClass: 'toast-bottom-right',
			    preventDuplicates: false,
			    preventOpenDuplicates: false,
			    progressBar: true,
			    tapToDismiss: true,
			    target: 'body',
			    templates: {
			      toast: 'directives/toast/toast.html',
			      progressbar: 'directives/progressbar/progressbar.html'
			    },
			    timeOut: 5000,
			    titleClass: 'toast-title',
			    toastClass: 'toast'
			  });
		})

})();