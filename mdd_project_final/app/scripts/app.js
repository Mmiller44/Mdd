'use strict';

/* global Firebase */
var App = angular.module('mddProjectFinalApp',  [
  'ngRoute',
  'firebase'
]);
App.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landingView.tpl',
        controller: 'MainCtrl'
      })
      .when('/detail/:id', {
        templateUrl : 'views/projectDetailView.tpl',
        controller : 'projectDetailController'
      })
      .when('/work', {
        templateUrl : 'views/projectListView.tpl',
        controller : 'projectListController'
      })
      .when('/admin', {
        templateUrl : 'views/adminView.tpl',
        controller : 'adminController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

App.run(['$firebaseSimpleLogin', '$rootScope', function($firebaseSimpleLogin, $rootScope){

    // Reference to Firebase
    var dataRef = new Firebase('https://mmportfolio.firebaseIO.com');
    
    // Sets up simple login
    $rootScope.loginObj = $firebaseSimpleLogin(dataRef);
    
    console.log($rootScope.loginObj);


  }]);