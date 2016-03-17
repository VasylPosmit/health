(function() {
  'use strict';
  describe('kil-recommendations', function() {
    var directiveElem, scope, state, userService, sectionsService;

    beforeEach( function(){
      module( 'healthGuide' );

      inject( function ($compile, $rootScope, _userService_, _sectionsService_) {
        scope = $rootScope.$new();
        directiveElem = $compile('<kil-recommendations/>')(scope);
        userService = _userService_;
        sectionsService = _sectionsService_;
        state = 'nutrition';
        scope.layout = {
          user: userService.user,
          data: sectionsService.data[state]
        };
        scope.$digest();
      });
    });

// if the directive is rendered or not.
    it('should applied template', function () {
      expect(directiveElem.html()).not.toEqual('');
    });

    it('should compile text', function () {
      expect(directiveElem.find('div[ng-cloak]').text()).toEqual(jasmine.any(String));
    });

    it('should not compile p congaing ng-if', function () {
      expect(directiveElem.find('p[ng-if]').length).toEqual(0);
    });

// if the directive displays all the values
    it('should display BMI', function () {
      userService.user.BMI = 22;
      scope.$digest();
      expect(directiveElem.find('p[ng-if]').text()).toContain('22');
    });

    it('should display BMR', function () {
      userService.user.BMR = 1040;
      scope.$digest();
      expect(directiveElem.find('p[ng-if]').text()).toContain('1040');
    });

    it('should display user name', function() {
      userService.user.name = 'Vasyl';
      scope.$digest();
      expect(directiveElem.find('h2').text()).toContain('Vasyl');
    });

    it('should display recommendations.label', function () {
      scope.layout.data.recommendations[0].label = 'mock label';
      scope.$digest();
      expect(directiveElem.find('md-tabs').text()).toContain('mock label');
    });

    it('should display recommendations.header', function () {
      scope.layout.data.recommendations[0].header = 'mock header';
      scope.$digest();
      expect(directiveElem.find('h2').text()).toContain('mock header');
    });

// if the directive displays correct values for every case (ng-show, ng-if)
    it('should display BMI based on weight and height', function() {
      userService.user.nutrition.weight = 40;
      userService.user.nutrition.height = 150;

      userService.getUser();
      expect(scope.layout.user.BMI).toBe(17.8);
      scope.$digest();

      expect(directiveElem.find('p').text()).toContain('17.8.');
    });

    it('should displays "slim" message if BMI < 19', function() {
      userService.user.BMI = 18;
      scope.$digest();
      expect(directiveElem.find('p').text()).toContain('slim');
      expect(directiveElem.find('p').text()).not.toContain('fit');
      expect(directiveElem.find('p').text()).not.toContain('overweight');
    });

    it('should displays "fit" message if 19 < BMI < 25', function() {
      userService.user.BMI = 22;
      scope.$digest();
      expect(directiveElem.find('p').text()).not.toContain('slim');
      expect(directiveElem.find('p').text()).toContain('fit');
      expect(directiveElem.find('p').text()).not.toContain('overweight');
    });


    it('should displays "overweight" message if BMI > 25', function() {
      userService.user.BMI = 26;
      scope.$digest();
      expect(directiveElem.find('p').text()).not.toContain('slim');
      expect(directiveElem.find('p').text()).not.toContain('fit');
      expect(directiveElem.find('p').text()).toContain('overweight');
    });

    it('should displays one h2 with "Health recommendations if user name undefined"', function() {
      expect(directiveElem.find('h2[ng-if]').length).toEqual(1);
    });

    it('should displays one h2 with "Health recommendations if user name defined"', function() {
      userService.user.name = 'Vasyl';
      expect(directiveElem.find('h2[ng-if]').length).toEqual(1);
    });

    it('<li> should have ng-if class', function() {
      expect(directiveElem.find('li').attr('ng-if')).toBeTruthy();
    });

    describe('display of recommendation in md-tabs', function() {
      it('should have 1 md-tabs', function () {
        var mdTabsElement = directiveElem.find('md-tabs');
        expect(mdTabsElement).toBeDefined();
        expect(mdTabsElement.length).toEqual(1);
      });

      it('should have 3 "md-tab"s at "nutrition" state', function () {
        expect(directiveElem.find('md-tab').length).toEqual(3);
      });

      it('should have 3 "md-tab"s at "sleep" state', function () {
        scope.layout.data = sectionsService.data['sleep'];
        scope.$digest();
        expect(directiveElem.find('md-tab').length).toEqual(3);
      });

      it('should have 2 "md-tab"s at "activity" state', function () {
        scope.layout.data = sectionsService.data['activity'];
        scope.$digest();
        expect(directiveElem.find('md-tab').length).toEqual(2);
      });

      it('should have 3 "md-tab"s at "you" state', function () {
        scope.layout.data = sectionsService.data['you'];
        scope.$digest();
        expect(directiveElem.find('md-tab').length).toEqual(3);
      });

      it('should have at least 3 recommendations', function() {
        expect(directiveElem.find('li[ng-if]').length).toBeGreaterThan(2);
      });
    });
  });
})();
