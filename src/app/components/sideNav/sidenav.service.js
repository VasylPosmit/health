(function () {
  'use strict';
  angular
  .module('app.sidenav')
    .service('sidenavService', sidenavService);

  sidenavService.$inject = ['$mdSidenav'];

  function sidenavService( $mdSidenav ) {
    /*jshint validthis: true*/
    var self = this;
    var componentId = 'left';
    self.toggleList   = toggleSidenav;
    self.openLeftMenu = openLeftMenu;
    self.closeSidenav = closeSidenav;

    function toggleSidenav() {
      $mdSidenav(componentId).toggle();
    }

    function openLeftMenu() {
      $mdSidenav(componentId).open();
    }

    function closeSidenav() {
      $mdSidenav(componentId).close();
    }
  }
})();
