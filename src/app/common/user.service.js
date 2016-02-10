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
      isMale: null,
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
        trainTimes: null,
        walk: null,
        contraindications: 'Fortunately, I have not',

      },
    };
      self.user.BMI = self.user.nutrition.weight/Math.pow(self.user.nutrition.height/100, 2);

  }

})();
