(function () {
  'use strict';
  angular
  .module('app.sidenav')
    .service('sidenavService', sidenavService);

  sidenavService.$inject = [
                      '$mdBottomSheet',
                      '$mdSidenav'];
  function sidenavService(
                      $mdBottomSheet,
                      $mdSidenav){
    /*jshint validthis: true*/
    var self = this;
    self.check = console.log('sidenavService connected');
    self.toggleList   = toggleSidenav;
    self.openLeftMenu = openLeftMenu;

    function toggleSidenav() {
      var pending = $mdBottomSheet.hide() || $q.when(true);
      console.log('toggleSidenav()');
      pending.then(function() {
        $mdSidenav('left').toggle();
      });
    }
    function openLeftMenu() {
      console.log('openLeftMenu()');
      $mdSidenav('left').toggle();
    }
  }
})();