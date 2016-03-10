(function() {
  'use strict';
  describe('kil-recommendations', function() {
    var directiveElem, scope, state, userService, sectionsService;

    beforeEach( module( 'healthGuide'));
    beforeEach( inject(function ($compile, $rootScope, _userService_, _sectionsService_) {
      scope = $rootScope.$new();
      directiveElem = $compile('<kil-recommendations></kil-recommendations>')(scope);
      userService = _userService_;
      sectionsService = _sectionsService_;
      state = 'nutrition';
      scope.layout = {
        user: userService.user,
        data: sectionsService.data[state]
      };
      scope.$digest();
    }));

    it('should applied template', function () {
      expect(directiveElem.html()).not.toEqual('');
    });

    it('should have md-tabs', function () {
      expect(directiveElem.find('md-tabs').length).toEqual(1);
    });

    it('should compile text', function () {
      expect(directiveElem.find('h2').text()).toContain('Health recommendations for ');
    });

    it('should display BMI based on weight and height', function() {
      userService.user.nutrition.weight = 40;
      userService.user.nutrition.height = 150;

      userService.getUser();
      expect(scope.layout.user.BMI).toBe(17.8);
      scope.$digest();

      expect(directiveElem.find('p').text()).toContain('Your Body mass index is 17.8.');
    });
    it('should display user name', function() {
      userService.user.name = 'Vasyl';
      scope.$digest();
      expect(directiveElem.find('h2').text()).toContain('Health recommendations for Vasyl');
    });
    it('should have 2 or 3 md-tab depended on state', function () {
      expect(directiveElem.find('md-tab').length).toEqual(3);

      scope.layout.data = sectionsService.data['sleep'];
      scope.$digest();
      expect(directiveElem.find('md-tab').length).toEqual(3);

      scope.layout.data = sectionsService.data['activity'];
      scope.$digest();
      expect(directiveElem.find('md-tab').length).toEqual(2);

      scope.layout.data = sectionsService.data['you'];
      scope.$digest();
      expect(directiveElem.find('md-tab').length).toEqual(3);
    });

    it('should have at least 3 recommendations', function() {
      expect(directiveElem.find('li').length).toBeGreaterThan(2);
    });
  });
})();
