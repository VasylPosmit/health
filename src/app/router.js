(function() {
  'use strict';

  angular
    .module('healthGuide')
    .config(routerConfig);

  function routerConfig($stateProvider,
                        $urlRouterProvider
                        ) {
    $stateProvider
    //DRY
      .state('home', {
        url: '/',
        templateUrl: 'app/templates/default.html',
        controller: 'LayoutController',
        controllerAs: 'layout'
      })
      .state('Nutrition', {
        url: '/nutrition',
        templateUrl: 'app/templates/nutrition.html',
        controller: 'LayoutController',
        controllerAs: 'layout'
      })
      .state('Sleep', {
        url: '/sleep',
        templateUrl: 'app/templates/sleep.html',
        controller: 'LayoutController',
        controllerAs: 'layout'
      })
      .state('Activity', {
        url: '/activity',
        templateUrl: 'app/templates/activity.html',
        controller: 'LayoutController',
        controllerAs: 'layout'
      })
      .state('Your health', {
        url: '/way_to_healthy_life',
        templateUrl: 'app/templates/you.html',
        controller: 'LayoutController',
        controllerAs: 'layout'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
