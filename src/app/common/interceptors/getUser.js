(function () {
  'use strict';
  angular
  .module('healthGuide')
    .factory('getUserInterceptor', getUserInterceptor);


  function getUserInterceptor( userService ) {
    /*jshint validthis: true*/

    return {
        requestError: function(errorData){
          return userService.getStoredUser();
        },
        responseError: function(errorData) {
          return userService.getStoredUser();
        }
      };

  }
})();
