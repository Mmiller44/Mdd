'use strict';

angular.module('mddProjectFinalApp')
  .controller('MainCtrl', ['$scope', 'FireConn',function ($scope, FireConn) {
    
    // FireConn.$bind($scope, 'projects');
    $scope.projects = FireConn;
    $scope.saveData = function(){
 
      FireConn.$add($scope.remoteData);

      location.reload();
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.firecon = FireConn;
    
  }]);