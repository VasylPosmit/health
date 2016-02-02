(function(){
  'use strict';
  angular
    .module('app.sections')
    .controller('SectionsController', SectionsController);

  function SectionsController(sectionsService){
    /*jshint validthis: true */
    var self = this;

    activate();

    function activate(){
      console.log('SectionsController connected');

    }
  }
})();
