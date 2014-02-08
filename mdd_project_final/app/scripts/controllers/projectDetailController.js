'use strict';
angular.module('mddProjectFinalApp')
  .controller('projectDetailController', ['$scope', '$routeParams', 'FireConn', function ($scope, $routeParams, FireConn) {    
  $scope.project = FireConn.$child($routeParams.id);

}]);