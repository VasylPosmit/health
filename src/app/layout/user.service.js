(function () {
  'use strict';
  angular
  .module('app.layout')
    .service('userService', userService);

  function userService(){
    /*jshint validthis: true*/
    var self = this;
    self.user = {
      name : null,
      gender: null,
      age: null,
      weight: null,
      height: null,
      weightUnits : 'kg',
      heightUnits : 'cm',

      asleep: null,
      wake: null,

      BMI: null
    };
  }
})();
