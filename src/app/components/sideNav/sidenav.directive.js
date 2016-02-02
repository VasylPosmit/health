(function() {
  'use strict';
  angular
    .module('app.sidenav')
    .directive('kilSidenav', kilSidenav);

  function kilSidenav() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sideNav/sidenav.html',
      controller: 'sidenavController',
      controllerAs: 'sideNav',
      bindToController: true
    };
    return directive;
  }

})();
