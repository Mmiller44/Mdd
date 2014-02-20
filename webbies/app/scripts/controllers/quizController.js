'use strict';

var App = angular.module('webbiesApp');
App.controller('quizController', ['$window','$scope','$rootScope','$routeParams', '$FireUser','$FireQuiz', function ($window, $scope, $rootScope, $routeParams, $FireUser, $FireQuiz) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Setting my quiz number to be the route parameter number.
    $scope.firequiz = $FireQuiz.$child($routeParams.number);

    // Making a condition to check when the quiz is done, and to relocate the user.
    if($routeParams.number === 'done')
    {
      $window.location.href = '#/done';
    }

    // This function will be called everytimes they click an answer to move forward.
    $scope.saveAnswer = function (answer)
    {
			// The answer needs to be saved to the user.
			// Saving the users place in the quiz as currentNumber.
			$rootScope.user.currentNumber = ($routeParams.number * 1) + 1;
			$rootScope.user.answers.push(answer);
			$rootScope.user.$save('answers');
			$rootScope.user.$save('currentNumber');
		};


	}]);