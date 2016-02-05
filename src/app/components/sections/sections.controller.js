(function(){
  'use strict';
  angular
    .module('app.sections')
    .controller('SectionsController', SectionsController);

  function SectionsController($scope, sectionsService){
    /*jshint validthis: true */
    "ngInject";

    var self = this;
    self.data = sectionsService.data;
    $scope.Nutrition  = self.data['nutrition'];
    $scope.Sleep      = self.data['sleep'];
    $scope.Activity   = self.data['activity'];
    $scope.You        = self.data['you'];

    activate();

    function activate(){
      console.log('SectionsController connected');

    }
  }
})();
