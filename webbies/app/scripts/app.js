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
      .when('/quizLanding', {
        templateUrl: 'views/quizLanding.tpl',
        controller: 'quizLandingController'
      })
      .when('/quiz/:number', {
        templateUrl: 'views/quiz.tpl',
        controller: 'quizController'
      })
      .when('/done', {
        templateUrl: 'views/finished.tpl',
        controller: 'finishedController'
      })
      .when('/admin', {
        templateUrl: 'views/adminView.tpl',
        controller: 'adminController'
      })
      .when('/answers', {
        templateUrl: 'views/answers.tpl',
        controller: 'answersController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

App.run(['$firebaseSimpleLogin','$window', '$FireUser', '$rootScope', '$location', function($firebaseSimpleLogin, $window, $FireUser, $rootScope, $location){

    // Reference to Firebase
    var dataRef = new Firebase('https://webbies.firebaseIO.com');
    
    // Sets up simple login
    $rootScope.loginObj = $firebaseSimpleLogin(dataRef);

    // As soon as firebaseSimpleLogin has ran, this function is called.
    $rootScope.$on('$firebaseSimpleLogin:login', function(e, user) {

      // Setting rootScope variables to equal the user id and username. 
      // Uid is the providers name and the persons id.
      $rootScope.user = $FireUser(user.uid);
      $rootScope.user.name = user.username;

      // if there is a user, relocate them to the quiz page.
      if(user)
      {
        // $location.path('/quizLanding');
        $window.location.href = '#/quizLanding';
      }

    });

    $rootScope.$on('$firebaseSimpleLogin:logout', function() {
        $location.path('/');
      });

  }]);











