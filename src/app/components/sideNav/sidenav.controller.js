(function() {
  'use strict';
  angular
    .module('app.sidenav')
    .controller('sidenavController', sidenavController);

  function sidenavController(sectionsService, sidenavService, hotkeys, $state){
    /*jshint validthis: true*/
    var self = this;
    self.toggleSidenav = sidenavService.toggleList;
    self.content = sectionsService.content;

    var states = ['Nutrition', 'sleep', 'Activity' , 'You'];

    hotkeys.add({
      combo: ['n', 'ctrl+n'],
      description: 'Nutrition recommendations',
      callback: function() {
        $state.go('Nutrition');
      }
    });

    hotkeys.add({
      combo: ['s', 'ctrl+s'],
      description: 'Sleep recommendations',
      callback: function() {
        $state.go('sleep');
      }
    });

    hotkeys.add({
      combo: ['a', 'ctrl+a'],
      description: 'Activity recommendations',
      callback: function() {
        $state.go('Activity');
      }
    });

    hotkeys.add({
      combo: ['h', 'ctrl+h'],
      description: 'Summary of health recommendations',
      callback: function() {
        $state.go('You');
      }
    });

    hotkeys.add({
      combo: ['ctrl+down' ],
      description: 'Next of health recommendations',
      callback: function() {
        var i = states.indexOf($state.current.name);
        var nextState = states[(i+1)%4];
        $state.go(nextState);
      }
    });

    hotkeys.add({
      combo: ['ctrl+up' ],
      description: 'Previous of health recommendations',
      callback: function() {
        var i = states.indexOf($state.current.name);
        var previousState = states[(i+3)%4];
        $state.go(previousState);
      }
    });

  }
})();
