(function() {
  'use strict';

  describe('sectionsService ', function(){
    var self, controller, scope, sectionsService;

    beforeEach( module('healthGuide'));
    beforeEach( inject( function (_sectionsService_) {
      sectionsService = _sectionsService_;
    }));

    describe('content', function(){

      it('is Object', function() {
        expect(sectionsService.content).toEqual(jasmine.any(Object));
        expect(sectionsService.content).toContain(jasmine.any(Object));
      });

    });
  });
})();


