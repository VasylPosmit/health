(function() {
  'use strict';

  describe('userService ', function(){
    var self, controller, scope, userService, user;

    beforeEach( module('healthGuide'));
    beforeEach( inject( function (_userService_) {
      userService = _userService_;
      user = jQuery.extend(true, {}, userService.user);
    }));
    afterEach(function(){
      userService.user = user;
    });


    describe('user', function(){
      it('is Object', function() {
        expect(userService.user).toEqual(jasmine.any(Object));
      });
      it('has need property', function(){
        expect(Object.keys(userService.user)).toContain('name' && 'nutrition'&& 'activity' && 'sleep');
      });

      it('most init values are falsy', function() {
        expect(userService.user.BMI).toBeNull();
        expect(userService.user.BMR).toBeNull();
        expect(userService.user.dailyCalories).toBeNull();
        expect(userService.user.sleepDuration).toBeNull();

        _.values(userService.user.sleep).forEach(function (value) {
          expect(value).toBeFalsy();
        });
        _.values(userService.user.activity).forEach(function (value) {
          expect(value).toBeFalsy();
        });
      });
      it('metrics init values are true', function() {
        expect(userService.user.nutrition.isWeightKg).toBeTruthy();
        expect(userService.user.nutrition.isHeightCm).toBeTruthy();
      });
    });

    describe('calculate BMI', function() {
      it('is function', function() {
        expect(userService.calculateBMI).toEqual(jasmine.any(Function));
      });

      it('undefined if user does not have weight and height', function() {
        userService.user.nutrition.weight = null;
        userService.user.nutrition.height = null;
        expect(userService.calculateBMI()).toBeUndefined();
      });

      it('undefined if user has height, does not have weight', function() {
        userService.user.nutrition.height = 150;
        expect(userService.calculateBMI()).toBeUndefined();
      });

      it('undefined if user has weight, does not have height', function() {
        userService.user.nutrition.weight = 40;
        expect(userService.calculateBMI()).toBeUndefined();
      });

      it('user has weight and height and formula is calculated properly', function() {
        userService.user.nutrition.weight = 40;
        userService.user.nutrition.height = 150;
        expect(userService.calculateBMI()).toEqual(17.8);
      });
    });

    describe('calculate BMR', function() {
      it('is function', function() {
        expect(userService.calculateBMR).toEqual(jasmine.any(Function));
      });
      it('undefined if user does not have weight, height, age, isMale', function() {
        expect(userService.calculateBMR()).toBeUndefined();
      });

      it('undefined if user has height, age, isMale, does not have weight', function() {
        userService.user.nutrition.height = 150;
        userService.user.age = 25;
        userService.user.isMale = true;
        expect(userService.calculateBMR()).toBeUndefined();
      });

      it('undefined if user has weight, age, isMale, does not have height', function() {
        userService.user.nutrition.weight = 40;
        userService.user.age = 25;
        userService.user.isMale = true;
        expect(userService.calculateBMR()).toBeUndefined();
      });

      it('undefined if user has height, weight, isMale, does not have age', function() {
        userService.user.nutrition.weight = 40;
        userService.user.nutrition.height = 150;
        userService.user.isMale = true;
        expect(userService.calculateBMR()).toBeUndefined();
      });

      it('undefined if user has height, weight, age does not have isMale (gender)', function() {
        userService.user.nutrition.weight = 40;
        userService.user.nutrition.height = 150;
        userService.user.age = 25;
        expect(userService.calculateBMR()).toBeUndefined();
      });

      it('user has weight, height, age, (isMale= true) and formula is calculated properly', function() {
        userService.user.nutrition.weight = 40;
        expect(userService.calculateBMR()).toBeUndefined();
        userService.user.nutrition.height = 150;
        expect(userService.calculateBMR()).toBeUndefined();
        userService.user.age = 25;
        expect(userService.calculateBMR()).toBeUndefined();

        userService.user.isMale = true;
        expect(userService.calculateBMR()).toEqual(1198);
      });

      it('calculate changes user BMR and BMI', function() {
        userService.user.nutrition.weight = 40;
        userService.user.nutrition.height = 150;
        userService.user.age = 25;
        userService.user.isMale = false;

        expect(userService.calculateBMR()).toEqual(1208);
      });
    });

    describe('sleepDuration', function() {
      it('is a function', function() {
        expect(userService.getUser).toEqual(jasmine.any(Function));
      });

      it('returns null if user does not have sleep.start and sleep.end', function() {
        expect(userService.sleepDuration()).toBeNull();
      });

      it('returns null if user has sleep.start and does not have sleep.end', function() {
        userService.user.sleep.start = 1;
        expect(userService.sleepDuration()).toBeNull();
      });

      it('returns null if user has sleep.end and does not have sleep.start', function() {
        userService.user.sleep.end = 8;
        expect(userService.sleepDuration()).toBeNull();
      });

      it('user has sleep.start and sleep.end before midnight calculated properly', function() {
        userService.user.sleep.start = 72000000 - 3600000; //   21:00
        userService.user.sleep.end = 72000000;             //   22:00
        expect(userService.sleepDuration()).toEqual(1);
      });

      it('inputs before and after midnight', function() {
        userService.user.sleep.start = 72000000;           //   20:00
        userService.user.sleep.end = 36000000;             //   10:00
        expect(userService.sleepDuration()).toEqual(14);
      });

      it('user has sleep.start and sleep.end before midnight calculated properly', function() {
        userService.user.sleep.start = 3600000;            //   1 AM
        userService.user.sleep.end = 36000000;             //   10 AM
        expect(userService.sleepDuration()).toEqual(9);
      });
    });

    describe('getUser()', function() {
      it('is a function', function() {
        expect(userService.getUser).toEqual(jasmine.any(Function));
      });
      it('has not been called', function() {
        spyOn(userService, 'getUser');
        expect(userService.getUser).not.toHaveBeenCalled();
      });
      it('changes user.BMI', function() {
        expect(userService.user.BMI).toBeNull();

        userService.user.nutrition.weight = 40;
        userService.user.nutrition.height = 150;

        userService.getUser();
        expect(userService.user.BMI).toBeTruthy();
      });

      it('changes user.BMR', function() {
        expect(userService.user.BMR).toBeNull();

        userService.user.nutrition.weight = 40;
        userService.user.nutrition.height = 150;
        userService.user.age = 25;
        userService.user.isMale = false;

        userService.getUser();
        expect(userService.user.BMR).toBeTruthy();
      });

      it('triggers sleepDuration and change user.sleepDuration', function() {
        expect(userService.user.sleepDuration).toBeNull();

        userService.user.sleep.end = 8;
        userService.user.sleep.start = 1;

        userService.getUser();
        expect(userService.user.sleepDuration).toBeTruthy();
      });
    });
  });
})();


