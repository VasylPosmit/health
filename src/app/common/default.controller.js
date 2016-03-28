
(function() {
  'use strict';
  angular
    .module('healthGuide')
    .controller('defaultController', defaultController);

  function defaultController(
                      localForageService,
                      sectionsService,
                      sidenavService,
                      userService,
                      $http
                      ) {
      "ngInject";
      /*jshint validthis: true*/
      var self = this;
      self.state = 'default';

      self.toggleSideNav = sidenavService.toggleList;
      self.openLeftMenu = sidenavService.openLeftMenu;
      self.closeSidenav = sidenavService.closeSidenav;

      self.user = userService.user;
      self.data = sectionsService.data[self.state];
      self.calculate = calculate;

      activate();

      function activate() {
        self.closeSidenav();
        if (userService.firstLaunch) {
          $http.get('/assets/vasylData.json').then(function(result){
            if (_.isObject(result.data)){
              userService.user = result.data;
            } else {
              userService.user = result;
            }
            calculate();
            userService.firstLaunch = false;
          });
        }
      }

      function calculate(){
        self.user = userService.getUser();
        self.data = sectionsService.getData()[self.state];
        localForageService.setUser(self.user);
      }

  }
})();
