'use strict';

angular.module('mddProjectFinalApp')
  .controller('MainCtrl', ['$scope', 'FireConn',function ($scope, FireConn) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.firecon = FireConn;


  }]);