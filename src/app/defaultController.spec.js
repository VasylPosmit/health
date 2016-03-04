(function() {
  'use strict';

  describe('getDefaultController check', function(){
    var state, dataKey, rootScope;
    // var getDefaultController= require('/router');
    // var controller = getDefaultController('default');


    beforeEach( module('healthGuide'));
    beforeEach( function(){
      console.log('executing beforeEach()');
    });
    beforeEach( module( function($provide){
      dataKey = {};
      $provide.value('dataKey', dataKey);
    }));


    beforeEach( inject( function( ) {
     //controller = getDefaultController('default');
    }));



    describe('values: ', function(){
      it('true is true', function(){
        expect(true).toBeTruthy();
      });
      xit('dataKey is a string', function() {
        expect(controller.state).toEqual('default');
      });
      xit('self.state is a string', function () {
        expect(controller.state).toBe(jasmine.any(String));
      });
      xit('getDefaultController has state', function(){
        expect(controller.state).toEqual(jasmine.any(String));
      });
      xit('self.data should be object', function(){
        expect(self.data).toEqual(jasmine.any(Object));
      });
      xit('self.data.name equal self.state', function(){
        expect(self.data.name).toEqual(self.state);
      });
      xit('self.closeSidenav() is called', function(){
        expect(self.closeSidenav).toHaveBeenCalled();
      });
      xit('self.calculate', function(){
        expect(self.calculate).not.toHaveBeenCalled();
      });
      xit('assigns a person to the scope', function () {
        expect(controller instanceof getDefaultController).toBeTruthy();
      });
    });

    xdescribe('has activate', function() {
      it('activate should not be undefined', function() {
        expect(controller.activate).not.toBeUndefined();
      });
    });
  });
})();


