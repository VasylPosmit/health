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
                  // $q,
                  // $window
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
      .primaryPalette('teal')
      .accentPalette('amber', {default: '400'})
      .warnPalette('red')
      .backgroundPalette('grey');

    $localForageProvider.config({
        name        : 'healthGuide',
        description : 'storage for user input'
    });

    var testInterceptor =  function($q, $window) {
      var interseprotRun = 1;
      return {
        request: function(config) {
          console.log('interceptor spy on $http requests to template. Iteration No '+ interseprotRun);
          //return $q.reject('requestRejector');
          console.log(config);
          interseprotRun++;
          return config;
        }
      };
    };

    var authenticationInterceptor = function($q, $window) {
      return {
        responseError: function(rejection) {
          if (rejection === 'requestRejector') {
              // Recover the request
            $window.alert('interceptor should be recovered!');

            return {
                transformRequest: [],
                transformResponse: [],
                method: 'GET',
                url: 'https://api.github.com/users/naorye/repos',
                headers: {
                    Accept: 'application/json, text/plain, */*'
              }
            };
          } else if (rejection.status === 401) {
            $window.location.href = 'https://github.com/VasylPosmit/health';//PATH.apps + SIGN_IN_URL;
          }
          return $q.reject(rejection);
        }
      };
    };
    $httpProvider.interceptors.push(authenticationInterceptor);
    $httpProvider.interceptors.push(testInterceptor);

  }

  function runBlock($log) {
    $log.debug('runBlock end');
  }
})();
