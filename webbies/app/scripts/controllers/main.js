'use strict';

var App = angular.module('webbiesApp');
App.controller('MainCtrl', ['$scope','$rootScope', '$FireUser',function ($scope, $rootScope, $FireUser) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // This is my firebase data for users. Example: $scope.fireuser.name
    $rootScope.fireuser = $FireUser;

	}]);