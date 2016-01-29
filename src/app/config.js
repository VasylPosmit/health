(function() {
  'use strict';

  angular
    .module('healthGuide')
    .config(config)
    .run(runBlock)
// constants used by entire app
    .constant('moment', moment)

  function config($logProvider,
                  toastrConfig,
                  $mdIconProvider,
                  $mdThemingProvider
                  ) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    $mdIconProvider
      .defaultIconSet("../assets/svg/avatars.svg", 128)
      .icon("menu"       , "../assets/svg/menu.svg"        , 24)
      .icon("share"      , "../assets/svg/share.svg"       , 24)
      .icon("google_plus", "../assets/svg/google_plus.svg" , 512)
      .icon("hangouts"   , "../assets/svg/hangouts.svg"    , 512)
      .icon("twitter"    , "../assets/svg/twitter.svg"     , 512)
      .icon("phone"      , "../assets/svg/phone.svg"       , 512)
      .icon("angular"    , "../assets/images/angular.png"  , 512);

    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('blue', {
            default: '400'
        });
  }


  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }
})();
