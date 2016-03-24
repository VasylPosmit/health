
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

        //executed only on first load
        if (_.isEqual(userService.user, userService.mockUser)) {
          // require tests
          console.log('should execute applyStorageData() only on page reload');

          // localForageService.getUser().then(function(result){
          //   if (result){
          //     userService.user = result;
          //     calculate();
          //   }
          // });
        }

        //execute on page load and state changes include
        $(function() {
          $http.get('/getUserDataUrl').then(function(result){
            if (result){
              userService.user = result;
              calculate();
              console.log('$http resolved with user object:');
              console.log(result);
            }
          });
        });

      }

      function calculate(){
        self.user = userService.getUser();
        self.data = sectionsService.getData()[self.state];
        localForageService.setUser(self.user);
      }

  }
})();
