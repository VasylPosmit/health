(function() {
  'use strict';
  angular
    .module('app.sections')
    .directive('kilRecommendations', kilRecommendations);

  function kilRecommendations() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/recommendations/recommendations.html',
      controller: 'SectionsController',
      controllerAs: 'sections',
      bindToController: true
    };
    return directive;
  }

})();
