'use strict';

var App = angular.module('webbiesApp');
App.controller('adminController', ['$window','$scope','$rootScope','$FireUser','$FireQuiz',function ($window, $scope, $rootScope, $FireUser, $FireQuiz) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // If the logged in user is not me, then redirect them to the home page.
    // If there is no user, redirect them to the home page.
    if($rootScope.user.name !== 'Mmiller44' || !$rootScope.user )
    {
      $window.location.href = '#/quizLanding';

    }else
    {
      // This is where I will populate the Questions and answerGuide arrays.
    }


	}]);