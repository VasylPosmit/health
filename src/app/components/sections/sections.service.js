(function () {
  'use strict';
  angular
  .module('app.sections')
    .service('sectionsService', sectionsService);

  function sectionsService($q){
    /*jshint validthis: true*/
    var self = this;
    self.checkConnection = console.log('1. sectionsService connected');

    self.selectSection = selectSection;

    self.data = {};
    self.data.nutrition = {
      name: 'Nutrition',
      icon: 'twitter',
      firstRec: 'You know what is healthy food and what is crap.',
      state: 'Nutrition',
      mdIcon: 'local_dining',
      recomendations: [
        {
          label: 'Time',
          header: 'When to eat',
          text: 'Eat whenever you want ^_^'},
        {
          label: 'Quality',
          header: 'What to eat',
          text: 'Eat whatever you want ^_^'},
        {
          label: 'Amount',
          header: 'How much to eat',
          text: 'Eat as much as you want ^_^'}
      ]
    };
    self.data.sleep = {
      name: 'Sleep',
      icon: 'phone',
      firstRec: 'Receipt is simple: sleep 8 hours per day in dark room with fresh air.',
      state:'Sleep',
      mdIcon: 'local_hotel',
      recomendations: [
        {
          label: 'Mode',
          header: 'When to eat',
          text: 'Plan to sleep 8 h per day. Do not eat 3 h before sleep. Wake up each single day at fixed time. Yes, at the weekdays too. Eat whenever you want but not before sleep ^_^'},
        {
          label: 'Conditions',
          header: 'What to eat',
          text: 'Room must be dark. Fresh air. Eat whatever you want ^_^'},
        {
          label: 'Body state',
          header: 'Best sleep habits',
          text: 'Do not eat 3h before sleep'}
      ]
    };
    self.data.activity = {
      name: 'Activity',
      icon: 'google_plus',
      firstRec: 'Walk everyday at least 3 km (outside the house!) and do any sport 3 times per week. Yes, it does matter',
      state:'Activity',
      mdIcon: 'directions_run',
      recomendations: [
        {
          label: 'Lifestyle',
          header: 'When to eat',
          text: 'Eat whenever you want ^_^'},
        {
          label: 'Sport',
          header: 'What to eat',
          text: 'Eat whatever you want ^_^'},
        {
          label: 'Best habits',
          header: 'Best sleep habits',
          text: 'Do not eat 3h before sleep'}
        ]
      };
    self.data.you = {
      name: 'Your health',
      icon: 'hangouts',
      firstRec: 'You know what is healthy food and what is crap.',
      state:'Your health',
      mdIcon: 'account_circle',
      recomendations: [
        {
          label: 'Nutrition',
          header: 'Best habits',
          text: 'Eat whenever you want ^_^'},
        {
          label: 'Sleep',
          header: 'Best sleep habits',
          text: 'Eat whatever you want ^_^'},
        {
          label: 'Activity',
          header: 'Best activity habits',
          text: 'Do not eat 3h before sleep'}
        ]
      };
    self.data.default = {
      name: 'Your health',
      icon: 'hangouts',
      firstRec: 'You know what is healthy food and what is crap.',
      state:'nutrition',
      recomendations: [
        {
          label: 'Nutrition',
          header: 'Best habits',
          text: 'Eat whenever you want ^_^'},
        {
          label: 'Sleep',
          header: 'Best sleep habits',
          text: 'Eat whatever you want ^_^'},
        {
          label: 'Activity',
          header: 'Best activity habits',
          text: 'Do not eat 3h before sleep'}
        ]
      };

    self.content = [
      self.data.nutrition,
      self.data.sleep,
      self.data.activity,
      self.data.you,
    ];
    self.selected = self.data.nutrition;

    function selectSection(section) {
        console.log('sectionsService.select()');
        self.selected = angular.isNumber(section) ? self.content[section] : section;
        console.log(self.selected);
      }

    // Promise-based API
        // Simulate async nature of real remote calls
    // return {
    //   loadContent : function() {
    //     return $q.when(self.content);
    //   }
    // };
  }
})();
