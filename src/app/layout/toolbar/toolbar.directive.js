(function() {
  'use strict';
  angular
    .module('app.layout')
    .directive('kilToolbar', kilToolbar);

  /** @ngInject */
  function kilToolbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/layout/toolbar/toolbar.html',
      controller: 'LayoutController',
      controllerAs: 'layout',
      bindToController: true
    };
    return directive;
  }

})();
