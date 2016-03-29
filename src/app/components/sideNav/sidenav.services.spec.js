(function() {
  'use strict';
  describe('sidenavService', function() {
    var sidenavService, sidenav, scope;

    beforeEach( function(){
      module( 'healthGuide' );

      inject( function (_sidenavService_, _$mdSidenav_, $rootScope, $compile) {
        sidenavService = _sidenavService_;
        scope = $rootScope.$new();
        $compile('<md-sidenav md-component-id="left"></md-sidenav>')(scope);
        sidenav = _$mdSidenav_('left');
        });
    });

    it('toggleSidenav() should open and close sideNav', function() {
       expect(sidenav.isOpen()).toEqual(false);
       sidenavService.toggleList();
       expect(sidenav.isOpen()).toBeTruthy();
       sidenavService.toggleList();
       expect(sidenav.isOpen()).toEqual(false);
    });

    it('openLeftMenu() should open sideNav', function() {
       expect(sidenav.isOpen()).toEqual(false);
       sidenavService.openLeftMenu();
       expect(sidenav.isOpen()).toBeTruthy();
    });

    it('closeSidenav() should close sideNav', function() {
      sidenavService.openLeftMenu();

      expect(sidenav.isOpen()).toBeTruthy();
      sidenavService.closeSidenav();
      expect(sidenav.isOpen()).toEqual(false);
    });
  });
})();
