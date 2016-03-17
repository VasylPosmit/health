(function() {
  'use strict';
  describe('kil-toolbar', function() {
    var $httpBackend, directiveElem, scope, userService, sidenavService;

    beforeEach( function(){
      module( 'healthGuide' ); // works
      //module( 'app.layout' ); // does not work cause to route configuration

      directiveElem = angular.element('<kil-toolbar/>');

      inject( function ($compile, $rootScope, _$httpBackend_, _userService_, _sidenavService_) {
        $httpBackend = _$httpBackend_;
        userService    = _userService_;
        sidenavService = _sidenavService_;
        scope = $rootScope.$new();

        $httpBackend // md-icon compile async with http
          .whenGET('../assets/svg/menu.svg')
          .respond('');
        $compile(directiveElem)(scope);

        scope.layout = {
          user: userService.user,
          toggleSideNav: sidenavService.toggleList
        };
        scope.$digest();
      });
    });

    describe('directive', function() {

      it('should applied template', function () {
        expect(directiveElem.html()).not.toEqual('');
      });

      it('should compile text', function () {
        expect(directiveElem.find('h3').text()).toContain('Health guide');
      });

      it('should contain one link', function() {
        expect(directiveElem.find('a').length).toEqual(1);
      });

      it('should display kg based on user input', function() {
        userService.user.nutrition.weight = 40;

        userService.getUser();
        scope.$digest();
        expect(directiveElem.find('p').text()).toContain('40kg');
      });

      it('should display user name', function() {
        userService.user.name = 'Vasyl';
        scope.$digest();
        expect(directiveElem.find('p').text()).toContain('Vasyl');
      });

      it('should have md-icon', function() {
        expect(directiveElem.find('md-icon')).toBeDefined();
      });

      it('<p> should have ng-show attr', function() {
        expect(directiveElem.find('p').attr('ng-show')).toBeTruthy();
      });

      it('<i> should have material-icons class', function() {
        expect(directiveElem.find('i').hasClass('material-icons')).toBeTruthy();
      });

    });

    describe('toggleSideNav()', function() {
      beforeEach(function() {
        spyOn(scope.layout, 'toggleSideNav').and.callThrough();
      });

      it('should not be triggered on activate', function() {
        expect(scope.layout.toggleSideNav).not.toHaveBeenCalled();
      });

      it('should run on click', function() {
        directiveElem.find('.menu').triggerHandler('click');
        scope.$digest();
        expect(scope.layout.toggleSideNav).toHaveBeenCalled();
      });

    });
  });
})();
