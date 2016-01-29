(function() {
  'use strict';
  angular
    .module('app.sidenav')
    .directive('kilSidenav', kilSidenav);

  /** @ngInject */
  function kilSidenav() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/layout/sideNav/sidenav.html',
      controller: 'sidenavController',
      controllerAs: 'sideNav',
      bindToController: true
    };
    return directive;
  }

})();
