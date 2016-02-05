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
    self.select = select;

    activate();

    function activate() {
      console.log('sidenavController connected');
    }

    function select (section) {
      sectionsService.selectSection(section);
      self.toggleSidenav();
    }
  }
})();
