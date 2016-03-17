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
        controller: getDefaultController('default'),
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
    return function (
                      $localForage,
                      $timeout,
                      sectionsService,
                      sidenavService,
                      userService
                      ) {
      "ngInject";
      /*jshint validthis: true*/
      var self = this;
      self.state = dataKey;

      self.toggleSideNav = sidenavService.toggleList;
      self.openLeftMenu = sidenavService.openLeftMenu;
      self.closeSidenav = sidenavService.closeSidenav;

      self.user = userService.user;
      self.data = sectionsService.data[self.state];
      self.calculate = calculate;

      activate();


      function activate() {
        self.closeSidenav();
        if (_.isEqual(userService.user, userService.mockUser)) {
          console.log('should execute getStorageData() only on page reload'); // require specs

          getStorageData();
          $timeout(function(){
            getStorageData();
            console.log('calculate executed');
          }, 3000);
        }
      }

      function calculate(){
        self.user = userService.getUser();
        self.data = sectionsService.getData()[self.state];
        setStorageData();
      }

      function setStorageData() {
        $localForage.setItem('userInput', self.user);
      }
      function getStorageData() {
        $localForage.getItem('userInput').then(function(data) {
          if (data) {
          userService.user = data;
          self.user = userService.user;
          }
        });
      }

    };
  }

})();
