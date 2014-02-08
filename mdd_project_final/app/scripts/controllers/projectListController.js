'use strict';
angular.module('mddProjectFinalApp')
  .controller('projectListController', ['$scope', '$routeParams', 'FireConn',function ($scope, $routeParams, FireConn) {
  $scope.projects = FireConn;

}]);