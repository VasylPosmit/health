(function() {
  'use strict';

  describe('defaultController ', function(){
    var state, dataKey, controller;

    beforeEach( function(){
      module('healthGuide');

      inject( function( $controller){
        controller = $controller('defaultController');
      });
    });


    describe('values: ', function(){

      it('controller type is object', function() {
        expect(typeof(controller)).toEqual("object");
      });

      it('instance of defaultController testing', function ($controller) {
        expect(controller instanceof $controller('defaultController')).toBeTruthy();
      });

      it('dataKey is a string', function() {
        expect(controller.state).toEqual('default');
      });

      it('dataKey is a data', function() {
      //need to compile template?
      });

      it('data should be object', function(){
        expect(controller.data).toEqual(jasmine.any(Object));
      });

      it('should have no access to activate()', function() {
        expect(controller.activate).toBeUndefined();
      });

      // do not need to test activate() if have everything else tested
      it('closeSidenav() ', function(){

      });

      it('calculate() changes user', function(){

      });

      it('calculate() changes data', function(){

      });

      it('should execute localForageService.get only on page load', function() {

      });
    });

  });
})();


