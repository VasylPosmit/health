(function () {
  'use strict';
  angular
  .module('healthGuide')
    .factory('getUserInterceptor', getUserInterceptor);


// when user opens the page
// get user data using $http fake,
// if the response has error, return data from localForage

  function getUserInterceptor( $q, localForageService ) {
    /*jshint validthis: true*/

    return {
        request: function(data){
            console.log('getUserInterceptor request');
            return $q.resolve(data);
        },
        requestError: function(data){
            console.log('getUserInterceptor requestError resolver');
            return localForageService.getUser();
        },
        responseError: function(rejection) {
          console.log('getUserInterceptor responseError resolver in action');
          return localForageService.getUser();
        }
      };

  }
})();
