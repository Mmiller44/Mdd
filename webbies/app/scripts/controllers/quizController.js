'use strict';

var App = angular.module('webbiesApp');
App.controller('quizController', ['$window','$scope','$rootScope','$routeParams','$FireUser','$FireQuiz',function ($window, $scope, $rootScope, $routeParams, $FireUser, $FireQuiz) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Setting my quiz number to be the route parameter number.
    $scope.firequiz = $FireQuiz.$child('questions').$child($routeParams.number);
    $scope.firequiz.answerGuide = $FireQuiz.$child('answerGuide');
    // Making a condition to check when the quiz is done, and to relocate the user.
    console.log($scope.firequiz);
    if($routeParams.number === 'done')
    {
      $rootScope.user.currentNumber = 'done';
      $rootScope.user.$save('currentNumber');
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

      var score = 0;

      // For loop to check the two answer arrays against each other.
      for(var i = 0;i < $rootScope.user.answers.length; i++)
      {
        if($rootScope.user.answers[i] === $scope.firequiz.answerGuide[i])
        {
          score += 1;
          console.log(score);
        }
      }

      var finalscore = (score / ($rootScope.user.answers.length - 1)) * 100;
      console.log(finalscore);
      $rootScope.user.score = finalscore.toFixed(2);
      $rootScope.user.$save('score');
		};

    // I call this function with ng-style.
    // This function sets the width on my progress bar using the $routeParams.number
    $scope.setProgress = function()
    {
      // Multiplying by 10, so each question corresponds to 10% of the width.
      var progressNumber = $routeParams.number * 10;
      // ng-style needs an object returned.
      return {width: progressNumber + '%'};
    };


	}]);