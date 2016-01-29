(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('LayoutController', LayoutController);

  function LayoutController(
                            sectionsService,
                            sidenavService,
                            $timeout) {
    /*jshint validthis: true*/
    var vm = this;
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.toggleSideNav   = sidenavService.toggleList;
    vm.openLeftMenu = sidenavService.openLeftMenu;

    vm.user = {};

    vm.selected = sectionsService.selected;
    vm.select = select;

    activate();

    function select (section) {
                    sectionsService.selectSection(section);
      vm.selected = sectionsService.selected;

      vm.toggleSideNav();
    }

    function activate() {
      console.log('LayoutController connected');

      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);

      // vm.selected = sectionsService.content[0];
    }


  }
})();
