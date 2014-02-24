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

		// Getting a snapshot of the entire users DB.
		ref.once('value', function(usersSnapshot) {
			var y = usersSnapshot.val();
			console.log(y);

			// Calling a forEach function to run through all the children of /users
			// This will allow me to get the scores.
			usersSnapshot.forEach(function(childSnapshot) {
				var childData = childSnapshot.val();

				if(childData.currentNumber === 'done')
				{
					var score = childData.score;
					var name = childData.name;
					console.log(score + ' ' + name);

					$scope.user.score = score;
					$scope.user.name = name;
				}

			});

		});	// ending ref.once

	}]);