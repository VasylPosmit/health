(function() {
  'use strict';
  angular
    .module('app.core')
    .directive('kilTime', kilTime);

  function kilTime($filter) {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function (scope, elem, attrs, ngModel) {
        ngModel.$formatters.push(function (modelValue) {
            return (modelValue) ? $filter('date')(modelValue, 'HH:mm') : '';
        });
        ngModel.$parsers.push(function (modelValue) {
            return (modelValue) ? $filter('date')(modelValue, 'HH-mm') : '';
        });
      }
    };
  }

})();
