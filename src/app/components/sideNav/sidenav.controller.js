(function() {
  'use strict';
  angular
    .module('app.sidenav')
    .controller('sidenavController', sidenavController);

  function sidenavController(sectionsService, sidenavService){
    /*jshint validthis: true*/
    var self = this;
    self.toggleSidenav = sidenavService.toggleList;

    self.content = sectionsService.content;

    activate();

    function activate() {
      console.log('sidenavController connected');
    }

  }
})();
