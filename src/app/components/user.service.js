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
      nutrition: {
        weight: null,
        weightUnits : 'kg',
        height: null,
        heightUnits : 'cm',
      },
      sleep: {
        start: null,
        end: null,
        regim: null,
        habbit: null,
        light: null,
        air: null
      },
      activity: {
        workposition: null,
        training: 'Yep',
      },
      BMI: null
    };
    self.user.isMale = self.user.gender === 'male';

    self.user.BMI = self.user.weight/self.user.height;
  }
})();
