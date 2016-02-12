(function () {
  'use strict';
  angular
  .module('app.layout')
    .service('userService', userService);

  function userService(){
    /*jshint validthis: true*/
    var self = this;
    self.getUser = getUser;
    self.user = {
      name : null,
      isMale: null,
      age: null,
      nutrition: {
        weight: null,
        weightIskg : true,
        height: null,
        heightIscm : true,
        isVegan: false,
        isControl: false
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
        contraindications: 'Fortunately, I have not'
      },
      BMI: null
    };

      function getUser(){
        //all formulas fall here
        self.user.BMI = Math.round(self.user.nutrition.weight/Math.pow(self.user.nutrition.height/100, 2)*10)/10;
        console.log(self.user);
        return self.user;
      }

  }

})();
