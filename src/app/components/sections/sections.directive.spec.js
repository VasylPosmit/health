(function() {
  'use strict';
  describe('kil-section', function() {
    var directiveElem, scope, compile, state, sectionsService;

    beforeEach( function(){
      module( 'healthGuide' ); // works
      //module( 'app.sections' ); // does not work cause to route configuration

      inject( function ($compile, $rootScope, _sectionsService_) {
        compile = $compile;
        sectionsService = _sectionsService_;
        scope = $rootScope.$new(); //isolated scope

        state = 'nutrition';
        scope.layout = {
          data: sectionsService.data[state]
        };
      });
    });
    function getCompiledElement(template){
      var compiledDirective = compile(angular.element(template))(scope);
      scope.$digest();
      return compiledDirective;
    }
    describe('compilation', function() {
      it('should fail ngBind if statedata is not specified', function () {
        expect(getCompiledElement("<kil-section/>").find('h3').text().length)
        .toEqual(15);
      });

      it('should be falsy if directive specified as attribute', function () {
        expect(getCompiledElement("<div kil-section statedata='layout.data'></div>").html())
        .toBeFalsy();
      });
    });

    describe('template and scope', function() {
      beforeEach(function() {
        directiveElem = getCompiledElement("<kil-section statedata='layout.data'/>");
      });

      it('should applied template', function () {
        expect(directiveElem.html()).not.toEqual('');
      });

      it('should have replaced directive element', function () {
        expect(directiveElem.find('kil-section').length).toEqual(0);
      });

      it('should compile text', function () {
        expect(directiveElem.find('h3').text()).toContain('Health guide');
      });

      it('should display state name', function () {
        expect(directiveElem.find('.md-display-1').text()).toContain('Nutrition');
      });
    });
  });
}) ();
