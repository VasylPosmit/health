(function() {
  'use strict';
  angular
    .module('healthGuide', [
            /*Shared modules*/
            'app.core',
            /*Feature (components) modules*/
            'app.layout',
            'app.sections'
            ])
    .config(config)
    .run(runBlock);

  function config(
                  $logProvider,
                  $mdIconProvider,
                  $mdThemingProvider
                  ) {
    // Enable log
    $logProvider.debugEnabled(true);
    // Set options third-party lib

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

  function runBlock($log) {
    $log.debug('runBlock end');
  }
})();
