(function() {
  'use strict';

  angular
    .module('app.core', [
        /*Angular modules*/
      'ngAnimate',
      'ngCookies',
      'ngSanitize',
      'ngMessages',
      'ngAria',
      'ngResource',
      'ngMaterial',
      /*3-d party modules*/
      'ui.router',
      'LocalForageModule',
      'cfp.hotkeys'

      /*Cross-app modules*/
       ]);
})();
