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
        controller: getDefaultController('nutrition'), // 'default'
        controllerAs: 'layout'
      })
      .state('Nutrition', {
        url: '/nutrition',
        templateUrl: 'app/states/nutrition.html',
        controller: getDefaultController('nutrition'),
        controllerAs: 'layout'
      })
      .state('Sleep', {
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
      .state('Your health', {
        url: '/way_to_healthy_life',
        templateUrl: 'app/states/you.html',
        controller: getDefaultController('you'),
        controllerAs: 'layout'
      });
  }

  function getDefaultController(dataKey) {
    return function (
                      sectionsService,
                      sidenavService,
                      userService,
                      $timeout) {
      "ngInject";
      /*jshint validthis: true*/
      var self = this;
      self.toggleSideNav = sidenavService.toggleList;
      self.openLeftMenu = sidenavService.openLeftMenu;
      self.closeSidenav = sidenavService.closeSidenav;

      self.user = userService.user;

      self.selected = sectionsService.data[dataKey];
      self.select = select;

      activate();

      function select (section) {
        sectionsService.selectSection(section);
        self.toggleSideNav();
      }

      function activate() {
        console.log('LayoutController connected');
        $timeout(function() {
          self.classAnimation = 'rubberBand';
        }, 4000);
        self.closeSidenav();
      }
    };
  }

})();
