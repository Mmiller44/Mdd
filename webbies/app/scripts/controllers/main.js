'use strict';

angular.module('webbiesApp')
.controller('MainCtrl', ['$scope', 'FireUser',function ($scope, FireUser) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.fireuser = FireUser;

	}]);