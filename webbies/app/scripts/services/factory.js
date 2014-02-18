'use strict';

/*global Firebase */
angular.module('webbiesApp')

.factory('FireUser', ['$firebase', function ($firebase) {

	var url = 'https://webbies.firebaseIO.com/users',
		ref = new Firebase( url );

	return $firebase(ref);
}]);