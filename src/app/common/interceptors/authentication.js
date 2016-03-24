(function () {
  'use strict';
  angular
  .module('healthGuide')
    .factory('authenticationInterceptor', authenticationInterceptor);


  function authenticationInterceptor( $q, $window, $document ) {
    /*jshint validthis: true*/

    return {
        request: function(data){
            console.log('authenticationInterceptor');
            return $q.resolve(data);
        },
        responseError: function(rejection) {
          if ($document.find('.ng-dirty').length % 3 === 2) {
            console.log('authenticationInterceptor');
            if (rejection.status === 401) {
              $window.location.href = 'https://github.com/VasylPosmit/health';//PATH.apps + SIGN_IN_URL;
            }
            return $q.reject(rejection);
          }
        }
      };

  }
})();
