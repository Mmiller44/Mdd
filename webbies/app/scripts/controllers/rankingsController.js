'use strict';

/* global Firebase */
var App = angular.module('webbiesApp');
App.controller('rankingsController', ['$scope', '$firebase', function ($scope, $firebase) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
		// Need a new firebase so I can access all children of /users
		var url = 'http://webbies.firebaseio.com/users';
		var	ref = new Firebase(url);

		$scope.user = $firebase(ref);

		// Setting an empty array which will hold my users name and score as objects.
		var userScore = [];

		// Getting a snapshot of the entire users DB.
		ref.once('value', function(usersSnapshot) {

			// Calling a forEach function to run through all the children of /users
			// This will allow me to get the scores.
			usersSnapshot.forEach(function(childSnapshot) {
				var childData = childSnapshot.val();

				// I only want the data from users who have completed the quiz, not all users.
				if(childData.currentNumber === 'done')
				{
					var score = childData.score;
					var name = childData.name;

					// Pushing objects into my array so I can use orderBy: on them.
					userScore.push({name: name, score: score});
				}
				// Setting a scope variable to be equal to my array of objects.
				$scope.scores = userScore;
				console.log($scope.scores);
				
			});	// Ending forEach

		});	// ending ref.once

	}]);