(function() {
  'use strict';

  describe('sectionsService ', function(){
    var self, controller, scope, sectionsService;

    beforeEach( module('healthGuide'));
    beforeEach( inject( function (_sectionsService_) {
      sectionsService = _sectionsService_;
    }));

    describe('content ', function(){
      it('is array', function() {
        expect(sectionsService.content).toEqual(jasmine.any(Object));
        expect(sectionsService.content).toContain(jasmine.any(Object));
      });
      it('is part of the data', function() {
        expect(sectionsService.content).toContain(sectionsService.data.nutrition);
      });
      it(' has no data.default', function() {
        expect(sectionsService.content).not.toContain(sectionsService.data.default);
      });
    });

    describe('data ', function(){
      it('is object', function() {
        expect(sectionsService.data).toEqual(jasmine.any(Object));
      });
      it(' has correct properties', function() {
        expect(Object.keys(sectionsService.data)).toContain('default' && 'nutrition' && 'activity' && 'sleep');
      });
      it('each state has necessary keys', function() {
        var states = ['default', 'nutrition', 'activity', 'sleep'];
        for (var i = 0; i < 4; i++) {
          expect(Object.keys(sectionsService.data[states[i]])).toContain('name' && 'state' && 'recommendations');
        }
      });
    });

    describe('concat ', function() {
      beforeEach( function(){
        spyOn(sectionsService, 'concat').and.callThrough();
      });
      it('is a function', function(){
        expect(sectionsService.concat).toEqual(jasmine.any(Function));
      });
      it('has not been called', function(){
        expect(sectionsService.concat).not.toHaveBeenCalled();
      });
      var dataKey = 'nutrition';
      it('return an array', function(){
        expect(sectionsService.concat(dataKey)).toEqual(jasmine.any(Object));
      });
      it('more than one recommendation', function(){
        dataKey = 'sleep';
        expect(sectionsService.concat(dataKey).length).toBeGreaterThan(1);
      });
    });

    describe('getData ', function() {
      it('is a function', function(){
        expect(sectionsService.getData).toEqual(jasmine.any(Function));
      });
      it('has not called', function(){
        spyOn(sectionsService, 'getData').and.callThrough();
        expect(sectionsService.getData).not.toHaveBeenCalled();
      });
      it('return an array', function(){
        expect(sectionsService.getData()).toEqual(jasmine.any(Object));
      });
      it('returns data', function() {
        expect(sectionsService.getData()).toEqual(sectionsService.data);
      });

      it('makes changes', function(){
        var dataClone = jQuery.extend(true, {}, sectionsService.data);
        expect(dataClone).toEqual(sectionsService.data);
        sectionsService.getData();
        expect(dataClone).not.toEqual(sectionsService.data);
      });
    });

  });
})();


