(function() {
  'use strict';

  angular
    .module('app.layout', [
        /*Shared modules*/
        'app.core',

        /*Feature (components) modules*/
        'app.sections',
        'app.sidenav',
        ])
    .config(config);

  function config($mdIconProvider) {
    $mdIconProvider
      .defaultIconSet( '../assets/svg/avatars.svg', 128)
      .icon( "menu"   , '../assets/svg/menu.svg'      , 24)
      .icon( "angular", '../assets/images/angular.png', 512);
  }
})();
