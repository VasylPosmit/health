(function() {
  'use strict';

  angular
    .module('healthGuide')
    .config(routerConfig);

  function routerConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/states/default.html',
        controller: getDefaultController('default'), // 'default'
        controllerAs: 'layout'
      })
      .state('Nutrition', {
        url: '/nutrition',
        templateUrl: 'app/states/nutrition.html',
        controller: getDefaultController('nutrition'),
        controllerAs: 'layout'
      })
      .state('sleep', {
        url: '/sleep',
        templateUrl: 'app/states/sleep.html',
        controller: getDefaultController('sleep'),
        controllerAs: 'layout'
      })
      .state('Activity', {
        url: '/activity',
        templateUrl: 'app/states/activity.html',
        controller: getDefaultController('activity'),
        controllerAs: 'layout'
      })
      .state('You', {
        url: '/way_to_healthy_life',
        templateUrl: 'app/states/you.html',
        controller: getDefaultController('you'),
        controllerAs: 'layout'
      });
  }

  function getDefaultController(dataKey) {
    return function ( $scope,
                      sectionsService,
                      sidenavService,
                      userService
                      ) {
      "ngInject";
      /*jshint validthis: true*/
      var self = this;
      self.toggleSideNav = sidenavService.toggleList;
      self.openLeftMenu = sidenavService.openLeftMenu;
      self.closeSidenav = sidenavService.closeSidenav;
      self.calculate = calculate;

      self.user = userService.user;
      $scope.user = userService.user;

      self.data = sectionsService.data[dataKey];

      activate();

      function activate() {
        console.log('router Controller connected');
        self.closeSidenav();
      }

      function calculate(){

        $scope.$watch('layout.user', function(newVal, oldVal){

          self.user.BMI = newVal.nutrition.weight/Math.pow(newVal.nutrition.height/100, 2);

          self.data.recommendations[0].list[0].isShownCondition = newVal.nutrition.weight <= 60;
          self.data.recommendations[0].list[1].isShownCondition = newVal.nutrition.weight > 60 &&
                                                                     newVal.nutrition.weight <= 80;
          self.data.recommendations[0].list[2].isShownCondition = newVal.nutrition.weight > 80;
        });
      }
    };
  }

})();
