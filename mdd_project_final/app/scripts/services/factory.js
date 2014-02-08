'use strict';

/*global Firebase */
angular.module('mddProjectFinalApp')

.factory('FireConn', ['$firebase', function ($firebase) {

	var url = 'https://mmportfolio.firebaseIO.com/projects',
		ref = new Firebase( url );

	return $firebase(ref);
}]);