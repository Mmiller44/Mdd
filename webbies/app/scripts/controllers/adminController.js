'use strict';

/* global Firebase */
var App = angular.module('webbiesApp');
App.controller('adminController', ['$window','$scope','$rootScope','$FireUser','$FireQuiz','$routeParams',function ($window, $scope, $rootScope, $FireUser, $FireQuiz, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // $scope.firequiz = $FireQuiz.$child('questions');
    // console.log($scope.firequiz);

    // $scope.firequiz.questions = [];
    // $scope.firequiz.$save('questions');

    // // If the logged in user is not me, then redirect them to the home page.
    // // If there is no user, redirect them to the home page.
    // if($rootScope.user.name !== 'Mmiller44' || $rootScope.user === undefined)
    // {
    //   $window.location.href = '#/quizLanding';
    // }

    // // Function gets called on the submit button click.
    // $scope.save = function()
    // {
    //   var text = $scope.question;
    //   var optionA = $scope.optionA;
    //   var optionB = $scope.optionB;
    //   var optionC = $scope.optionC;
    //   var optionD = $scope.optionD;
    //   var answer = $scope.answer;
    //   var last_question = $scope.last_question;

    //   var totalQuestions = $scope.firequiz.questions.length + 1;
    //   var number = $routeParams.number;

    // };

	}]);