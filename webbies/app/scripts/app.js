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
        controller: 'quizController'
      })
      .when('/quiz/:number', {
        templateUrl: 'views/quiz.tpl',
        controller: 'quizController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

App.run(['$firebaseSimpleLogin', '$FireUser', '$rootScope', '$location', function($firebaseSimpleLogin, $FireUser, $rootScope, $location){

    // Reference to Firebase
    var dataRef = new Firebase('https://webbies.firebaseIO.com');
    
    // Sets up simple login
    $rootScope.loginObj = $firebaseSimpleLogin(dataRef);

    // As soon as firebaseSimpleLogin has ran, this function is called.
    $rootScope.$on('$firebaseSimpleLogin:login', function(e, user) {
      console.log('User ' + user.username);

      // Setting rootScope variables to equal the user id and username. 
      // Uid is the providers name and the persons id.
      $rootScope.user = $FireUser(user.uid);
      $rootScope.user.name = user.username;

      // Saving the rootScope.name to the firebase DB. 
      $rootScope.user.$save('name');

      // if there is a user, relocate them to the quiz page.
      if(user)
      {
        $location.path('/quizLanding');
      }else
      {
        $location.path('/');
      }

    });

    $rootScope.$on('$firebaseSimpleLogin:logout', function() {
        $location.path('/');
      });

  }]);











