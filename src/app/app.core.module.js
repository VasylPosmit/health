(function() {
  'use strict';

  angular
    .module('app.core', [
        /*Angular modules*/
      'ngAnimate',
      'ngCookies',
      'ngTouch',    //better analog is Angular Hammer
      'ngSanitize',
      'ngMessages',
      'ngAria',
      'ngResource',
      'ngMaterial',
      /*3-d party modules*/
      'ui.router',
      'LocalForageModule',
      'cfp.hotkeys'
                    //'hmTouchEvents'
      /*Cross-app modules*/
       ]);
})();
