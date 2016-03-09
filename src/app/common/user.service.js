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
    self.sleepDuration = sleepDuration;
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

    function getUser(){
      //all formulas fall here
      self.user.BMI = self.calculateBMI();
      self.user.BMR = self.calculateBMR();
      self.user.sleepDuration = self.sleepDuration();
      return self.user;
    }

    function calculateBMI() {
      if (self.user.nutrition.weight && self.user.nutrition.height) {
        var weight = self.user.nutrition.weight;
        var height = self.user.nutrition.height;
        return Math.round(weight/Math.pow(height/100, 2)*10)/10;
      }
    }
    function calculateBMR() {
      var weight = self.user.nutrition.weight;
      var height = self.user.nutrition.height;
      var age    = self.user.age;
      var isMale = self.user.isMale;
      if (isMale !== null && age && weight && height) {
        if (isMale) {
          return Math.round(weight*13.75 + height*5 - age*6.75 + 66.5);
        } else {
          return Math.round(weight*9.56 + height*1.85 - age*4.68 + 665.1);
        }
      }
    }
    function sleepDuration() {
      if (self.user.sleep.end && self.user.sleep.start) {
        var duration = (self.user.sleep.end - self.user.sleep.start)/3600000;
        if (duration >= 0 ) {
          return duration;
        } else {
          return duration + 24;
        }
      } else {
        return null;
      }
    }

  }
})();
