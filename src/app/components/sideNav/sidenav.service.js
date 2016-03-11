(function () {
  'use strict';
  angular
  .module('app.sidenav')
    .service('sidenavService', sidenavService);

  sidenavService.$inject = ['$mdSidenav'];

  function sidenavService( $mdSidenav ) {
    /*jshint validthis: true*/
    var self = this;
    self.check = console.log('sidenavService connected');
    self.toggleList   = toggleSidenav;
    self.openLeftMenu = openLeftMenu;
    self.closeSidenav = closeSidenav;

    function toggleSidenav() {
      $mdSidenav('left').toggle();
    }
    function openLeftMenu() {
      $mdSidenav('left').open();
    }
    function closeSidenav() {
      $mdSidenav('left').close();
    }
  }
})();
