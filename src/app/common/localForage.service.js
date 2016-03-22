(function () {
  'use strict';
  angular
    .module('LocalForageModule')
      .service('localForageService', localForageService);

  function localForageService($localForage) {
    /*jshint validthis: true*/
    var self = this;
    self.setUser = setUser;
    self.getUser = getUser;

    function setUser(user) {
      $localForage.clear();
      $localForage.setItem( 'userObject', user );
    }

    function getUser() {
      return $localForage.getItem( 'userObject' );
    }
  }
})();
