(function () {
  'use strict';
  angular
  .module('app.layout')
    .service('userService', userService);

  function userService(){
    /*jshint validthis: true*/
    var self = this;

    self.getUser = getUser;
    self.calculateBMR = calculateBMR;
    self.calculateBMI = calculateBMI;
    self.user = {
      name : null,
      isMale: null,
      age: null,
      nutrition: {
        weight: null,
        isWeightKg: true,
        height: null,
        isHeightCm: true,
        heightInches: null,
        isVegan: false,
        isControl: false,
        isControlCoffee: false,
        isControlAlcohol: false
      },
      sleep: {
        start: null,
        end: null,
        hasRegim: null,
        hasHabit: null,
        lightOff: null,
        isFreshAir: null,
        hasNoNoise: null,
        isBedComfortable: null
      },
      activity: {
        isDynamicWork: null,
        isTrain: false,
        trainTimes: null,
        walk: null,
        hasContraindications: false,
        isWarmUp: false,
        hasTrainWarmUp: false
      },
      //to calculate
      BMI: null,
      BMR: null,
      dailyCalories: null,
      sleepDuration: null
    };
    self.mockUser = jQuery.extend(true, {}, self.user); //require specs

    function getUser(){
      //all formulas fall here
      self.user.BMI = self.calculateBMI();
      self.user.BMR = self.calculateBMR();
      self.user.sleepDuration = (self.user.sleep.end - self.user.sleep.start)/3600000 + 24;
      return self.user;
    }

    function calculateBMI() {
      if (self.user.nutrition.weight && self.user.nutrition.height) {
        return Math.round(self.user.nutrition.weight/Math.pow(self.user.nutrition.height/100, 2)*10)/10;
      }
    }

    function calculateBMR() {
      if (self.user.isMale !== null && self.user.age && self.user.nutrition.weight && self.user.nutrition.height) {
        if (self.user.isMale) {
          return self.user.nutrition.weight*13.75 + self.user.nutrition.height*5 - self.user.age*6.75 +66.5;
        } else {
          return self.user.nutrition.weight*9.56 + self.user.nutrition.height*1.85 - self.user.age*4.68 +665.1;
        }
      }

    }
  }
})();
