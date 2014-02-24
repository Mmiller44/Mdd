'use strict';

/*global Firebase */
angular.module('webbiesApp')

.factory('$FireUser', ['$firebase', '$rootScope', function ($firebase, $rootScope) {

	// This function needs the uid to run. The uid is provider:uniqueID;
	return function(uid)
	{
		var url = 'https://webbies.firebaseIO.com/users/' + uid,
		ref = new Firebase( url );
		var fb = $firebase(ref);

		// Checking the firebase reference to make sure the user doesn't already exist.
		ref.on('value', function(snapshot) {
			if(snapshot.val() === null)
			{
				// User didn't exist in Firebase.
				// Setting the firebase 'Name' to be the username.
				console.log('does not exist');
				console.log(fb);
				fb.$set({name: $rootScope.user.name});
				$rootScope.user.currentNumber = 1;
				$rootScope.user.score = 0;

				// Setting an empty answers array to the user. Will populate this as the user goes through the quiz.
				$rootScope.user.answers = {0: 'null'};

				// Saving the rootScope.name to the firebase DB. 
				$rootScope.user.$save('name');
				$rootScope.user.$save('answers');
				$rootScope.user.$save('currentNumber');
				$rootScope.user.$save('score');

			}else
			{
				console.log('Exists');
			}

		});

		return $firebase(ref);
	};
}])

.factory('$FireQuiz', ['$firebase', function ($firebase) {

	var ref = new Firebase('https://webbies.firebaseIO.com/quiz/');

	return $firebase(ref);
}]);