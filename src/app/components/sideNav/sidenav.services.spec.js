(function() {
  'use strict';
  describe('sidenavService', function() {
    var sidenavService;

    beforeEach( function(){
      module( 'healthGuide' ); //.module('app.sidenav') do not contain $mdSiidenav

      inject( function (_sidenavService_) {
        sidenavService = _sidenavService_;
      });
    });
    it('should contain only functions', function() {
      expect(sidenavService.toggleList).toEqual(jasmine.any(Function));
      expect(sidenavService.openLeftMenu).toEqual(jasmine.any(Function));
      expect(sidenavService.closeSidenav).toEqual(jasmine.any(Function));
    });
    it('should not activate any function', function() {
      spyOn(sidenavService, 'toggleList');
      expect(sidenavService.toggleList).not.toHaveBeenCalled();

      spyOn(sidenavService, 'openLeftMenu');
      expect(sidenavService.openLeftMenu).not.toHaveBeenCalled();

      spyOn(sidenavService, 'closeSidenav');
      expect(sidenavService.closeSidenav).not.toHaveBeenCalled();
    });
    it('toggleList should not trigger open/close functions', function() {
      spyOn(sidenavService, 'openLeftMenu');
      spyOn(sidenavService, 'closeSidenav');

      sidenavService.toggleList();
      expect(sidenavService.openLeftMenu).not.toHaveBeenCalled();
      expect(sidenavService.closeSidenav).not.toHaveBeenCalled();
    });
  });
})();
