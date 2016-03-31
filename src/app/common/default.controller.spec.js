(function() {
  'use strict';

  describe('defaultController ', function(){
    var sidenav, scope, state, dataKey, controller, userService, sectionsService,
    localForage;

    beforeEach( function(){
      module('healthGuide');

      inject( function(
                        $compile,
                        $controller,
                        $rootScope,
                        $localForage,
                        $httpBackend,
                        _$mdSidenav_,
                        _sectionsService_,
                        _userService_
                        ){
        userService = _userService_;
        sectionsService = _sectionsService_;
        localForage = $localForage;
        scope = $rootScope.$new();
        dataKey = 'nutrition';
        controller = (function(){
          controller = $controller('defaultController', {$scope: scope});
          controller.state = dataKey;
          controller.data = sectionsService.data[dataKey];
          return controller;
        }());
        $compile('<md-sidenav md-component-id="left"></md-sidenav>')(scope);
        sidenav = _$mdSidenav_('left');

        $httpBackend.when('GET', '/assets/vasylData.json')
          .respond(userService.user);
      });
    });


    describe('init state values', function(){

      it('controller type is object', function() {
        expect(typeof(controller)).toEqual("object");
      });

      it('instance of defaultController testing', function ($controller) {
        expect(controller instanceof $controller('defaultController')).toBeTruthy();
      });

      it('dataKey is a string', function() {
        expect(controller.state).toEqual('nutrition');
      });

      it('firstLaunch is true', function() {
        expect(userService.firstLaunch).toEqual(true);
      });

      it('user object has mostly null values', function() {
        expect(controller.user).toEqual(jasmine.any(Object));
        expect(controller.user.name).toBeNull();
        expect(controller.user.age).toBeNull();
        expect(controller.user.BMI).toBeNull();
        expect(controller.user.BMR).toBeNull();
        expect(controller.user.dailyCalories).toBeNull();
        expect(controller.user.sleepDuration).toBeNull();
      });

      it('data object name should be Nutrition', function() {
        expect(controller.data).toEqual(jasmine.any(Object));
        expect(controller.data.name).toEqual('Nutrition');
      });
    });

    describe('functions', function() {
      it('calculate() changes user', function(){
        expect(controller.user.BMI).toBeNull();
        expect(controller.user.BMR).toBeNull();

        controller.user.nutrition.weight = 40;
        controller.user.nutrition.height = 150;
        controller.user.age = 25;
        controller.user.isMale = false;
        controller.calculate();

        expect(controller.user.BMI).toEqual(17.8);
        expect(controller.user.BMR).toEqual(1208);
      });

      it('calculate() changes data (recommendations display)', function(){
        controller.user.nutrition.weight = 40;
        controller.user.nutrition.height = 150;
        controller.user.age = 25;
        controller.user.isMale = false;
        controller.calculate();

        expect(controller.data.recommendations[0].list[0].isShown).toBeTruthy();
        expect(controller.data.recommendations[0].list[1].isShown).toBeFalsy();
        expect(controller.data.recommendations[0].list[2].isShown).toBeFalsy();
        expect(controller.data.recommendations[0].list[3].isShown).toBeFalsy();
      });

      it('calculate() should store user data to local storage', function() {
        controller.user.isMale = false;
        controller.calculate();
        localForage.getItem( 'userObject' ).then(function(result){
          expect(controller.user).toEqual(result);
        });
      });

      it('toggleSidenav() should open and close sideNav', function() {
       expect(sidenav.isOpen()).toEqual(false);
       controller.toggleSideNav();
       expect(sidenav.isOpen()).toEqual(true);
       controller.toggleSideNav();
       expect(sidenav.isOpen()).toEqual(false);
      });

      it('openLeftMenu() should open sideNav', function() {
         expect(sidenav.isOpen()).toEqual(false);
         controller.openLeftMenu();
         expect(sidenav.isOpen()).toEqual(true);
      });

      it('closeSidenav() should close sideNav', function() {
        controller.openLeftMenu();

        expect(sidenav.isOpen()).toEqual(true);
        controller.closeSidenav();
        expect(sidenav.isOpen()).toEqual(false);
      });

      describe('getBMI()', function() {

        it('should include BMI into controller.message ', function() {
          controller.user.nutrition.weight = 40;
          controller.user.nutrition.height = 150;
          userService.firstLaunch = false;
          controller.getBMI();
          scope.$digest();
          expect(controller.message).toContain('17.8');
        });

        it('should display BMR value into controller.message', function() {
          controller.user.nutrition.weight = 40;
          controller.user.nutrition.height = 150;
          controller.user.age = 25;
          controller.user.isMale = false;
          controller.getBMI();
          scope.$digest();
          expect(controller.message).toContain('1208');
        });

        it('should displays "slim" message if BMI < 19', function() {
          controller.user.nutrition.weight = 40;
          controller.user.nutrition.height = 150;
          controller.getBMI();
          scope.$digest();
          expect(controller.message).toContain('slim');
          expect(controller.message).not.toContain('fit');
          expect(controller.message).not.toContain('overweight');
        });

        it('should displays "fit" message if 19 < BMI < 25', function() {
          controller.user.nutrition.weight = 50;
          controller.user.nutrition.height = 150;
          controller.getBMI();
          scope.$digest();
          expect(controller.message).not.toContain('slim');
          expect(controller.message).toContain('fit');
          expect(controller.message).not.toContain('overweight');
        });

        it('should displays "overweight" message if BMI > 25', function() {
          controller.user.nutrition.weight = 70;
          controller.user.nutrition.height = 150;
          controller.getBMI();
          scope.$digest();
          expect(controller.message).not.toContain('slim');
          expect(controller.message).not.toContain('fit');
          expect(controller.message).toContain('overweight');
        });
      });

    });
  });
})();


