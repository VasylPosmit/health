(function() {
  'use strict';

  angular
    .module('healthGuide')
    .config(routerConfig);

  function routerConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/states/default.html',
        controller: 'LayoutController',
        controllerAs: 'layout'
      })
      .state('Nutrition', {
        url: '/nutrition',
        templateUrl: 'app/states/nutrition.html',
        controller: 'LayoutController',
        controllerAs: 'layout'
      })
      .state('Sleep', {
        url: '/sleep',
        templateUrl: 'app/states/sleep.html',
        controller: 'LayoutController',
        controllerAs: 'layout'
      })
      .state('Activity', {
        url: '/activity',
        templateUrl: 'app/states/activity.html',
        controller: 'LayoutController',
        controllerAs: 'layout'
      })
      .state('Your health', {
        url: '/way_to_healthy_life',
        templateUrl: 'app/states/you.html',
        controller: 'LayoutController',
        controllerAs: 'layout'
      });

    $urlRouterProvider.otherwise('/');
  }
})();
