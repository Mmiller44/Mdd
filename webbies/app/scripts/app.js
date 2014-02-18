'use strict';

/* global Firebase */
var App = angular.module('webbiesApp', [
  'ngRoute',
  'firebase'
]);

App.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing.tpl',
        controller: 'MainCtrl'
      })
      .when('/rankings', {
        templateUrl: 'views/rankings.tpl',
        controller: 'rankingsController'
      })
      .when('/quiz', {
        templateUrl: 'views/quiz.tpl',
        controller: 'quizController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

App.run(['$firebaseSimpleLogin', '$rootScope', '$location', function($firebaseSimpleLogin, $rootScope, $location){

    // Reference to Firebase
    var dataRef = new Firebase('https://webbies.firebaseIO.com');
    
    // Sets up simple login
    $rootScope.loginObj = $firebaseSimpleLogin(dataRef);
    
    console.log($rootScope.loginObj);

    if($rootScope.loginObj !== null)
    {
      $location.path('#/quiz');
    }else
    {
      $location.path('#/');
    }

  }]);