(function() {
  'use strict';
  angular
    .module('app.layout')
    .directive('kilToolbar', kilToolbar);

  function kilToolbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/toolbar/toolbar.html',
    };
    return directive;
  }

})();
