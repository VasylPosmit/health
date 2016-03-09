(function() {
  'use strict';

  describe('sidenavController ', function(){
    var controller;

    beforeEach( module( 'healthGuide'));
    beforeEach( inject( function( $controller) {
      controller = $controller( 'sidenavController');
      spyOn( controller, 'toggleSidenav').and.callThrough();
    }));

    describe('content', function(){

      it('is Object', function() {
        expect(controller.content).toEqual(jasmine.any(Object));
        expect(controller.content).toContain(jasmine.any(Object));

      });

    });
    describe('toggle', function(){
      it('sidenavController do not activate toggleSidenav()', function() {
        expect(controller.toggleSidenav).not.toHaveBeenCalled();
      });

      it('toggleSidenav trigger sidenavService', function() {
        controller.toggleSidenav();
        expect(controller.toggleSidenav).toHaveBeenCalled();
      });
    });
    describe('has no activate', function() {
      it('activate should be undefined', function() {
        expect(controller.activate).not.toBeDefined();
      });
    });

  });
})();


