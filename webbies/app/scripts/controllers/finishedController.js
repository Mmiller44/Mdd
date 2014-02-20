'use strict';

var App = angular.module('webbiesApp');
App.controller('finishedController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log($rootScope.user);

	}]);