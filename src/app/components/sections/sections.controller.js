(function(){
  'use strict';
  angular
    .module('app.sections')
    .controller('SectionsController', SectionsController);

  SectionsController.$inject = ['sectionsService'];

  function SectionsController(sectionsService){
    /*jshint validthis: true */
    var vm = this;

    activate();

    function activate(){
      console.log('SectionsController connected');

    }
  }
})();
