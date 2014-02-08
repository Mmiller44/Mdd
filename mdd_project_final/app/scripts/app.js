'use strict';

angular.module('mddProjectFinalApp',  [
  'ngRoute',
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landingView.tpl',
        controller: 'MainCtrl'
      })
      .when('/detail/:id', {
        templateUrl : 'views/projectDetailView.tpl',
        controller : 'projectDetailController'
      })
      .when('/work', {
        templateUrl : 'views/projectListView.tpl',
        controller : 'projectListController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });