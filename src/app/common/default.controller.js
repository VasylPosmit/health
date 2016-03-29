
(function() {
  'use strict';
  angular
    .module('healthGuide')
    .controller('defaultController', defaultController);

  function defaultController(
                      sectionsService,
                      sidenavService,
                      userService,
                      $mdDialog,
                      $http,
                      hotkeys
                      ) {
      "ngInject";
      /*jshint validthis: true*/
      var self = this;
      self.state = 'default';
      self.message = '';

      self.toggleSideNav = sidenavService.toggleList;
      self.openLeftMenu = sidenavService.openLeftMenu;
      self.closeSidenav = sidenavService.closeSidenav;

      self.user = userService.user;
      self.data = sectionsService.data[self.state];
      self.calculate = calculate;
      self.getBMI = getBMI;
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
        userService.setStoredUser(self.user);
      }

      function getBMI(event) {
        calculate();
        if (self.user.BMI<19) {
          self.message = 'You body mass index is ' + self.user.BMI + '. You are slim.';
        } else if (self.user.BMI >= 19 && self.user.BMI <= 25){
          self.message = 'You body mass index is ' + self.user.BMI + '. You are fit.';
        } else if (self.user.BMI<19){
          self.message = 'You body mass index is ' + self.user.BMI + '. You are overweight.';
        }
          self.message += ' Also consider that your Basal metabolic rate is ';
          self.message += self.user.BMR;
          self.message += '. That means you need ';
          self.message += self.user.BMR;
          self.message += ' calories per day just to maintain basic body functions.';
      // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm({
          title : 'Information about your shape',
          textContent : self.message,
          ariaLabel : 'Lucky day',
          targetEvent: event,
          clickOutsideToClose: true,
          ok : 'Display this information',
          cancel:'Hide this information'
        });

        $mdDialog.show(confirm).then(function() {
        }, function() {
          self.message = 'You decided to keep your information hidden.';
        });
      }

      hotkeys.add({
        combo: ['enter'],
        description: 'Calculate recommendations',
        callback: function() {
          calculate();
        }
      });

  }
})();
