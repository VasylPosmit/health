(function() {
  'use strict';
  angular
    .module('app.sidenav')
    .controller('sidenavController', sidenavController);

  sidenavController.$inject = [
                    'sectionsService',
                    'sidenavService'];

  function sidenavController(
                            sectionsService,
                            sidenavService){
    /*jshint validthis: true*/
    var vm = this;
    vm.toggleSidenav = sidenavService.toggleList;

    vm.selected = sectionsService.selected;
    vm.content = sectionsService.content;
    vm.select = select;

    activate();

    function activate() {
      console.log('sidenavController connected');
      // body...
    }

    function select (section) {
      sectionsService.selectSection(section);
      vm.selected = sectionsService.selected;

      vm.toggleSidenav();
    }
  }
})();
