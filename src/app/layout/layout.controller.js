(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('LayoutController', LayoutController);

  LayoutController.$inject = [
                            'sectionsService',
                            'sidenavService',
                            '$timeout',
                            'webDevTec',
                            'toastr'];
  /** @ngInject */
  function LayoutController(
                            sectionsService,
                            sidenavService,
                            $timeout,
                            webDevTec,
                            toastr) {
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

      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);

      // vm.selected = sectionsService.content[0];
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
