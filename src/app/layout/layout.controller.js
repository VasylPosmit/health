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
    vm.user.name;
    vm.user.gender;
    vm.user.age;
    vm.user.weight;
    vm.user.height;
    vm.user.weightUnits = 'kg';
    vm.user.heightUnits = 'cm';

    vm.user.asleep;
    vm.user.wake;

    vm.user.BMI = vm.user.weight;
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
