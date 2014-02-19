'use strict';

/*global Firebase */
angular.module('webbiesApp')

.factory('$FireUser', ['$firebase', function ($firebase) {

	// This function needs the uid to run. The uid is provider:uniqueID;
	return function(uid)
	{
		var url = 'https://webbies.firebaseIO.com/users/' + uid,
		ref = new Firebase( url );

		return $firebase(ref);
	};
}])

.factory('$FireQuiz', ['$firebase', function ($firebase) {

	var ref = new Firebase('https://webbies.firebaseIO.com/quiz/questions');

	return $firebase(ref);
}]);