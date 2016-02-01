(function () {
  'use strict';
  angular
  .module('app.sections')
    .service('sectionsService', sectionsService);

    sectionsService.$inject = ['$q'];

    function sectionsService($q, SectionsController){
      /*jshint validthis: true*/
      var vm = this;
      vm.checkConnection = console.log('1. sectionsService connected');

      vm.selectSection = selectSection;

      vm.data = {};
      vm.data.nutrition = {name: 'Nutrition', icon: 'twitter'
          , firstRec: 'You know what is healthy food and what is crap.'
          , state: 'Nutrition'
          , mdIcon: 'local_dining'
          , recomendations: [
             {label: 'Time', header: 'When to eat', text: 'Eat whenever you want ^_^'}
            ,
             {label: 'Quality', header: 'What to eat', text: 'Eat whatever you want ^_^'}
            ,
             {label: 'Amount', header: 'How much to eat', text: 'Eat as much as you want ^_^'}
             ]};

      vm.data.sleep = {name: 'Sleep'    , icon: 'phone'
          , firstRec: 'Receipt is simple: sleep 8 hours per day in dark room with fresh air.'
          , state:'Sleep'
          , mdIcon: 'local_hotel'
          , recomendations: [
             {label: 'Mode', header: 'When to eat', text: 'Plan to sleep 8 h per day. Do not eat 3 h before sleep. Wake up each single day at fixed time. Yes, at the weekdays too. Eat whenever you want but not before sleep ^_^'}
            ,
             {label: 'Conditions', header: 'What to eat', text: 'Room must be dark. Fresh air. Eat whatever you want ^_^'}
            ,
             {label: 'Body state', header: 'Best sleep habits', text: 'Do not eat 3h before sleep'}
             ]};

      vm.data.activity = {name: 'Activity' , icon: 'google_plus'
          , firstRec: 'Walk everyday at least 3 km (outside the house!) and do any sport 3 times per week. Yes, it does matter'
          , state:'Activity'
          , mdIcon: 'directions_run'
          , recomendations: [
             {label: 'Lifestyle', header: 'When to eat', text: 'Eat whenever you want ^_^'}
            ,
             {label: 'Sport', header: 'What to eat', text: 'Eat whatever you want ^_^'}
            ,
             {label: 'Best habits', header: 'Best sleep habits', text: 'Do not eat 3h before sleep'}
             ]};
      vm.data.you = {name: 'Your health', icon: 'hangouts'
          , firstRec: 'You know what is healthy food and what is crap.'
          , state:'Your health'
          , mdIcon: 'account_circle'
          , recomendations: [
             {label: 'Nutrition', header: 'Best habits', text: 'Eat whenever you want ^_^'}
            ,
             {label: 'Sleep', header: 'Best sleep habits', text: 'Eat whatever you want ^_^'}
            ,
             {label: 'Activity', header: 'Best activity habits', text: 'Do not eat 3h before sleep'}
             ]};

      vm.content = [
          vm.data.nutrition
        , vm.data.sleep
        , vm.data.activity
        , vm.data.you
        ];

      vm.selected = vm.data.nutrition;
      function selectSection(section) {
          console.log('sectionsService.select()');

          vm.selected = angular.isNumber(section) ? vm.content[section] : section;

          console.log(vm.selected);
        }


    // Promise-based API
        // Simulate async nature of real remote calls
    // return {
    //   loadContent : function() {
    //     return $q.when(vm.content);
    //   }
    // };
  }
})();
