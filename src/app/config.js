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

    var authenticationInterceptor = function($q, $window, $document) {
      return {
        responseError: function(rejection) {
          if ($document.find('.ng-dirty').length % 3 === 2) {
            console.log('authenticationInterceptor()');
            if (rejection.status === 401) {
              $window.location.href = 'https://github.com/VasylPosmit/health';//PATH.apps + SIGN_IN_URL;
            }
            return $q.reject(rejection);
          }
        }
      };
    };
    $httpProvider.interceptors.push(authenticationInterceptor);
  }

  function runBlock($log) {
    $log.debug('runBlock end');
  }
})();
