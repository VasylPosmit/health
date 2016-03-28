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
                  $mdThemingProvider,
                  $localForageProvider,
                  $httpProvider
                  ) {
    // Enable log
    $logProvider.debugEnabled(true);
    // Set options third-party lib

    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('amber', {default: '400'})
      .warnPalette('red')
      .backgroundPalette('grey');

    $localForageProvider.config({
        name        : 'healthGuide',
        description : 'storage for user input'
    });

    $httpProvider.interceptors.push('authenticationInterceptor');
    $httpProvider.interceptors.push('getUserInterceptor');

  }

  function runBlock($log) {
    $log.debug('runBlock end');
  }
})();
