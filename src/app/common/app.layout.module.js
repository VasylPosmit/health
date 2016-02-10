(function() {
  'use strict';

  angular
    .module('app.layout', [
        /*Shared modules*/
        'app.core',

        /*Feature (components) modules*/
        'app.sections',
        'app.sidenav',
        /*yeoman start-up modules*/
        'toastr'
        ]);
})();
