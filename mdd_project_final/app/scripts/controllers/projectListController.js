'use strict';
angular.module('mddProjectFinalApp')
 .controller('projectListController', function($scope) {
    $scope.actionTime = function(){
      console.log('user:', $scope.user );
    };

  });