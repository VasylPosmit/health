
(function() {
  'use strict';
  angular
    .module('healthGuide')
    .controller('defaultController', defaultController);

  function defaultController(
                      localForageService,
                      sectionsService,
                      sidenavService,
                      userService
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
        if (_.isEqual(userService.user, userService.mockUser)) {
          // require tests
          console.log('should execute applyStorageData() only on page reload');

          localForageService.getUser().then(function(result){
            if (result){
              userService.user = result;
              calculate();
            }
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
