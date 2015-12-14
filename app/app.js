var app = angular.module("app", ['ngRoute', 'firebase', 'angular.filter']);

app.config(['$routeProvider',
  function($routeProvider) {
  	$routeProvider
		.when('/clocker/login', {
      templateUrl: 'Partials/login.html',
      controller: 'login'
    })
    .when('/clocker/adminsignup', {
    	templateUrl: 'Partials/adminSignUp.html',
    	controller: 'adminSignUp'
    })
    .when('/clocker/visitorsignin', {
    	templateUrl: 'Partials/visitorSignIn.html',
    	controller: 'visitorSignIn'
    })
    .when('/clocker/backend/activity', {
      templateUrl: 'Partials/backend-activity.html',
      controller: 'backend-activity'
    })
    .otherwise('/clocker/login');
  }]);