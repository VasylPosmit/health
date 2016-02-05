(function() {
  'use strict';
  angular
    .module('app.sections')
    .directive('kilSection', kilSection);

  function kilSection() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sections/sections.html',
      //controller: 'SectionsController',
      //controllerAs: 'sections',
      // bindToController: true,
      scope: {
        state: '='
      }
    };
    return directive;
  }

})();
