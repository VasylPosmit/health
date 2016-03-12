(function() {
  'use strict';
  angular
    .module('app.sections')
    .directive('kilSection', kilSection);

  function kilSection() {
    return {
      replace: true,
      restrict: 'E',
      templateUrl: 'app/components/sections/sections.html',
      scope: {
        statedata: '='
      }
    };
  }

})();
