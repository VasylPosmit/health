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

    self.getData = getData;
    self.user = userService.user;
    self.data = {};
    self.data.user = userService.user;

    self.data.nutrition = {
      name: 'Nutrition',
      state: 'Nutrition',
      icon: 'twitter',
      firstRec: 'You’re smart and you know what real food is, so stop eating crap.',
      mdIcon: 'local_dining',
      recommendations: [
        {
          label: 'Time',
          header: 'When to eat',
          list: [
            {
              text: 'BMI < 19. You areYou are lighter than 60 kg. Eat whenever you want ^_^',
              isShownCondition: userService.user.nutrition.weight < 60
            },
            {
              text: 'BMI > 25. Overweight. Try not to eat 3 h before sleep',
              isShownCondition:
                userService.user.nutrition.weight >= 60 &&
                userService.user.nutrition.weight < 80
            },
            {
              text: 'TEST. weight > 80',
              isShownCondition: userService.user.nutrition.weight > 80
            },
            {
              text: 'You can’t outrun your fork.  When trying to lose weight, feel healthy, and get in shape, 80% (not an exaggeration) of your success or failure will come from how well you eat',
              isShownCondition: userService.user.BMI > 25
            }
          ]
        },
        {
          label: 'Quality',
          header: 'What to eat',
          list: [
            {
              text: 'You have to know today what you will eat tomorrow.',
              isShownCondition: userService.user.nutrition.isControl
            },
            {
              text: 'You are in good shape! Eat what makes you happy occasionally and then go right back to healthy eating',
              isShownCondition: false //BMI 19-25
            },
            {
              text: 'Eat more real food, you must.  Eat less junk food, you will. Yes, you can live without certain foods',
              isShownCondition: userService.user.nutrition.isControl
            },
            {
              text: 'You are not a slave to your taste buds. As we’ve learned from the Matrix, you do have a choice – stop letting the food companies, who have all designed these crappy foods for maximum addictiveness, hold you hostage',
              isShownCondition: userService.user.nutrition.isControl
            },
            {
              text: 'Start by swapping out processed refined carbohydrates for more natural foods.',
              isShownCondition: userService.user.nutrition.isControl
            },
            {
              text: 'Eat as if you were Fred Flinstone, consuming only foods that existed way back in the day. Eat this: meat, fowl, fish, eggs, vegetables, fruits, nuts, seeds, healthy oils.Don’t eat: anything else.Boom.  No calorie counting.  No perfectly timed meals. Only eat the stuff above, and eat as much of it as you want whenever you’re hungry',
              isShownCondition: !userService.user.nutrition.isControl

            }
          ]
        },
        {
          label: 'Amount',
          header: 'How much to eat',
          list: [
            {
              text: 'Eat as much as you want ^_^',
              isShownCondition: true
            },
            {
              text: 'Now you know how much you should be eating to maintain current weight. One pound of fat = 3500 calories. To lose a pound a week, knock 500 calories out of that diet per day. It might mean one less snack, ordering a smaller lunch.',
              isShownCondition: false
            },
            {
              text: '3.Eat as much as you want ^_^',
              isShownCondition: true
            },
            {
              text: 'You can’t outrun your fork.  When trying to lose weight, feel healthy, and get in shape, 80% (not an exaggeration) of your success or failure will come from how well you eat ',
              isShownCondition:
                userService.user.BMI > 25
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
              text: '“What’s the best workout plan?”  The one that you’ll actually stick with!',
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

    function getData(updatedUser){
      self.data.nutrition.recommendations[0].list[0].isShownCondition = updatedUser.nutrition.weight <= 60;
      self.data.nutrition.recommendations[0].list[1].isShownCondition = updatedUser.nutrition.weight > 60 && updatedUser.nutrition.weight <= 80;
      self.data.nutrition.recommendations[0].list[2].isShownCondition = updatedUser.nutrition.weight > 80;
      return self.data;
    }
  }
})();
