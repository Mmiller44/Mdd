'use strict';

var App = angular.module('webbiesApp');
App.controller('quizController', ['$scope','$rootScope','$routeParams', '$FireUser','$FireQuiz', function ($scope, $rootScope, $routeParams, $FireUser, $FireQuiz) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // This is my firebase data for users. Example: $scope.fireuser.name
    $scope.fireuser = $FireUser;

    // Setting my quiz number to be the route parameter number.
    $scope.firequiz = $FireQuiz.$child($routeParams.number);

    // This function will be called everytimes they click an answer to move forward.
    // var saveCurrentNumber = function (number)
    // {

    // };

	}]);