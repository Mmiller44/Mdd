'use strict';

var App = angular.module('webbiesApp');
App.controller('quizController', ['$scope','$rootScope','$routeParams', '$FireUser','$FireQuiz', function ($scope, $rootScope, $routeParams, $FireUser, $FireQuiz) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Setting my quiz number to be the route parameter number.
    $scope.firequiz = $FireQuiz.$child($routeParams.number);

    // This function will be called everytimes they click an answer to move forward.
    $scope.saveAnswer = function (answer)
    {
			// The answer needs to be saved to the user.
			// var currentNumber = $scope.firequiz;
			$rootScope.user.answers.push(answer);
			$rootScope.user.$save('answers');
		};

	}]);