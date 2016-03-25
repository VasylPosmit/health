(function () {
  'use strict';
  angular
  .module('healthGuide')
    .factory('getUserInterceptor', getUserInterceptor);


  function getUserInterceptor( $q, localForageService ) {
    /*jshint validthis: true*/

    return {
        requestError: function(errorData){
          return localForageService.getUser();
        },
        responseError: function(errorData) {
          return localForageService.getUser();
        }
      };

  }
})();
