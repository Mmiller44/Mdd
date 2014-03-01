'use strict';

/*global Firebase */
angular.module('webbiesApp')

.factory('$FireUser', ['$firebase', '$rootScope', function ($firebase, $rootScope) {

	// This function needs the uid to run. The uid is provider:uniqueID;
	return function(uid)
	{
		var url = 'https://webbies.firebaseIO.com/users/' + uid,
		ref = new Firebase( url );

		// Checking the firebase reference to make sure the user doesn't already exist.
		if(ref.child(uid))
		{
			console.log('Exists');
		}else
		{
			// User didn't exist in Firebase.
			// Setting the firebase 'Name' to be the username.
			console.log('does not exist');
			$rootScope.user.name = ref.username;
			$rootScope.user.currentNumber = 1;
			$rootScope.user.score = 0;

			// Setting an empty answers array to the user. Will populate this as the user goes through the quiz.
			$rootScope.user.answers = {0: 'null'};

			// Saving the rootScope.name to the firebase DB. 
			$rootScope.user.$save('name');
			$rootScope.user.$save('answers');
			$rootScope.user.$save('currentNumber');
			$rootScope.user.$save('score');
		}

		return $firebase(ref);
	};
}])

.factory('$FireQuiz', ['$firebase', function ($firebase) {

	var ref = new Firebase('https://webbies.firebaseIO.com/quiz/');

	return $firebase(ref);
}]);