(function () {
  'use strict';
  angular
  .module('app.sections')
    .service('sectionsService', sectionsService);

  function sectionsService(userService){
    /*jshint validthis: true*/
    var self = this;
    self.checkConnection = console.log('1. sectionsService connected');
    self.concat = concat;


    self.user = userService.user;
    self.data = {};
    self.data.user = userService.user;

    self.data.nutrition = {
      name: 'Nutrition',
      state: 'Nutrition',
      icon: 'twitter',
      firstRec: 'You know what is healthy food and what is crap.',
      mdIcon: 'local_dining',
      recommendations: [
        {
          label: 'Time',
          header: 'When to eat',
          list: [
            {
              text: '1. You are lighter than 60 kg. Eat whenever you want ^_^',
              isShownCondition: userService.user.nutrition.weight < 60
            },
            {
              text: '2.Weight between 60 and 80? Try not to eat 3 h before sleep',
              isShownCondition:
                userService.user.nutrition.weight >= 60 &&
                userService.user.nutrition.weight < 80
            },
            {
              text: '3. You heavier than 80 kg? Try to skip dinner. Ha-ha-ha!',
              isShownCondition:
                userService.user.nutrition.weight > 80
            }
          ]
        },
        {
          label: 'Quality',
          header: 'What to eat',
          list: [
            {
              text: '1.Eat whatever you want ^_^',
              isShownCondition: true
            },
            {
              text: '2.Eat whatever you want ^_^',
              isShownCondition: false
            },
            {
              text: '3.Eat whatever you want ^_^',
              isShownCondition: true
            }
          ]
        },
        {
          label: 'Amount',
          header: 'How much to eat',
          list: [
            {
              text: '1.Eat as much as you want ^_^',
              isShownCondition: true
            },
            {
              text: '2.Eat as much as you want ^_^',
              isShownCondition: false
            },
            {
              text: '3.Eat as much as you want ^_^',
              isShownCondition: true
            }
          ]
        }
      ]
    };
    self.data.sleep = {
      name: 'Sleep',
      state:'sleep',
      icon: 'phone',
      firstRec: 'Receipt is simple: sleep 8 hours per day in dark room with fresh air.',
      mdIcon: 'local_hotel',
      recommendations: [
        {
          label: 'Mode',
          header: 'When to eat',
          list: [
            {
              text: '1.Plan to sleep 8 h per day. Do not eat 3 h before sleep. Wake up each single day at fixed time. Yes, at the weekdays too. Eat whenever you want but not before sleep ^_^',
              isShownCondition: true
            },
            {
              text: '2.Plan to sleep 8 h per day. Do not eat 3 h before sleep. Wake up each single day at fixed time. Yes, at the weekdays too. Eat whenever you want but not before sleep ^_^',
              isShownCondition: false
            },
            {
              text: '3.Plan to sleep 8 h per day. Do not eat 3 h before sleep. Wake up each single day at fixed time. Yes, at the weekdays too. Eat whenever you want but not before sleep ^_^',
              isShownCondition: true
            }
          ]
        },
        {
          label: 'Conditions',
          header: 'What to eat',
          list: [
            {
              text: '1.Room must be dark. Fresh air. Eat whatever you want ^_^',
              isShownCondition: true
            },
            {
              text: '2.Room must be dark. Fresh air. Eat whatever you want ^_^',
              isShownCondition: false
            },
            {
              text: '3.Room must be dark. Fresh air. Eat whatever you want ^_^',
              isShownCondition: true
            }
          ]
        },
        {
          label: 'Habits',
          header: 'Best sleep habits',
          list: [
            {
              text: '1.Do not eat 3h before sleep',
              isShownCondition: true
            },
            {
              text: '2.Do not eat 3h before sleep',
              isShownCondition: false
            },
            {
              text: '3.Do not eat 3h before sleep',
              isShownCondition: true
            }
          ]
        }
      ]
    };
    self.data.activity = {
      name: 'Activity',
      state:'Activity',
      icon: 'google_plus',
      firstRec: 'Walk everyday at least 3 km (outside the house!) and do any sport 3 times per week. Yes, it does matter',
      mdIcon: 'directions_run',
      recommendations: [
        {
          label: 'Lifestyle',
          header: 'When to eat',
          list: [
            {
              text: '1.Lifestyle.Do not eat 3h before sleep',
              isShownCondition: true
            },
            {
              text: '2.Lifestyle.Do not eat 3h before sleep',
              isShownCondition: false
            },
            {
              text: '3.Lifestyle.Do not eat 3h before sleep',
              isShownCondition: true
            }
          ]
        },
        {
          label: 'Sport',
          header: 'What to eat',
          list: [
            {
              text: '1.Sport.Do not eat 3h before sleep',
              isShownCondition: true
            },
            {
              text: '2.Sport.Do not eat 3h before sleep',
              isShownCondition: false
            },
            {
              text: '3.Sport.Do not eat 3h before sleep',
              isShownCondition: true
            }
          ]
        },
        {
          label: 'Best habits',
          header: 'Best sleep habits',
          list: [
            {
              text: '1.Best habits.Do not eat 3h before sleep',
              isShownCondition: true
            },
            {
              text: '2.Best habits.Do not eat 3h before sleep',
              isShownCondition: false
            },
            {
              text: '3.Best habits.Do not eat 3h before sleep',
              isShownCondition: true
            }
          ]
        }
      ]
    };
    self.data.you = {
      name: 'Your health',
      state:'You',
      icon: 'hangouts',
      firstRec: 'You know what is healthy food and what is crap.',
      mdIcon: 'account_circle',
      recommendations: [
        {
          label: 'Nutrition',
          header: 'Best habits',
          list: self.concat('nutrition')
        },
        {
          label: 'Sleep',
          header: 'Best sleep habits',
          list: self.concat('sleep')
        },
        {
          label: 'Activity',
          header: 'Best activity habits',
          list: self.concat('activity')
        }
        ]
      };
    self.data.default = {
      name: 'Health guide (default state)',
      state:'nutrition',
      icon: 'hangouts',
      firstRec: 'You know what is healthy food and what is crap.',
      recommendations: [
        {
          label: 'Nutrition',
          header: 'Best eating habits',
          list: [
            {
              text: self.data.nutrition.firstRec,
              isShownCondition: true
            }
          ]
        },
        {
          label: 'Sleep',
          header: 'Best sleep habits',
          list: [
            {
              text: self.data.sleep.firstRec,
              isShownCondition: true
            }
          ]
        },
        {
          label: 'Activity',
          header: 'Best activity habits',
          list: [
            {
              text: self.data.nutrition.firstRec,
              isShownCondition: true
            }
          ]
        }
      ]
    };

    self.content = [
      self.data.nutrition,
      self.data.sleep,
      self.data.activity,
      self.data.you,
    ];

    function concat(dataKey){
      var fullList = [];
      var recs = self.data[dataKey].recommendations;

      fullList = _.flatten(_.map(recs, 'list'));

      return fullList;
    }
  }
})();
