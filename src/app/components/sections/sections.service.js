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
              isShown: userService.user.BMI < 19
            },
            {
              text: 'BMI > 25. Overweight. Try not to eat 3 h before sleep',
              isShown: userService.user.BMI > 25
            },
            {
              text: 'TEST. weight > 80',
              isShown: userService.user.nutrition.weight > 80
            },
            {
              text: 'You can’t outrun your fork.  When trying to lose weight, feel healthy, and get in shape, 80% (not an exaggeration) of your success or failure will come from how well you eat',
              isShown: userService.user.BMI > 25
            },
            {
              text: 'You are in perfect shape. Eat whenever you want ^_^',
              isShown: false
            }
          ]
        },
        {
          label: 'Quality',
          header: 'What to eat',
          list: [
            {
              text: 'You have to know today what you will eat tomorrow.',
              isShown: userService.user.nutrition.isControl
            },
            {
              text: 'You are in good shape! Eat what makes you happy occasionally and then go right back to healthy eating',
              isShown: false //BMI 19-25
            },
            {
              text: 'Eat more real food, you must.  Eat less junk food, you will. Yes, you can live without certain foods',
              isShown: userService.user.nutrition.isControl
            },
            {
              text: 'You are not a slave to your taste buds. As we’ve learned from the Matrix, you do have a choice – stop letting the food companies, who have all designed these crappy foods for maximum addictiveness, hold you hostage',
              isShown: userService.user.nutrition.isControl
            },
            {
              text: 'Start by swapping out processed refined carbohydrates for more natural foods.',
              isShown: userService.user.nutrition.isControl
            },
            {
              text: 'If you cannot control when and how much you eat, try Paleo Diet. Eat as if you were Fred Flinstone, consuming only foods that existed way back in the day. Eat this: meat, fowl, fish, eggs, vegetables, fruits, nuts, seeds, healthy oils.Don’t eat: anything else.Boom.  No calorie counting.  No perfectly timed meals. Only eat the stuff above, and eat as much of it as you want whenever you’re hungry',
              isShown: !userService.user.nutrition.isControl
            },
            {
              text: 'If you’re a vegetarian or vegan, then this is the path that I’d recommend for you – cut back on grains and crappy carbs, load up on vegetables, nuts, beans, fruits, and some low-glycemic grains if you’re running low on calories, and make sure you’re getting enough protein!',
              isShown: userService.user.nutrition.isVegan
            }
          ]
        },
        {
          label: 'Amount',
          header: 'How much to eat',
          list: [
            {
              text: 'We do not know how much do you need to eat until we know your weight and height',
              isShown: true
            },
            {
              text: 'Eat as much as you want ^_^',
              isShown: false
            },
            {
              text: 'Now you know how much you should be eating to maintain current weight. One pound of fat = 3500 calories. To lose a pound a week, knock 500 calories out of that diet per day. It might mean one less snack, ordering a smaller lunch.',
              isShown: false
            },
            {
              text: 'You can’t outrun your fork.  When trying to lose weight, feel healthy, and get in shape, 80% (not an exaggeration) of your success or failure will come from how well you eat ',
              isShown:
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
          label: 'Schedules',
          header: 'When to eat',
          list: [
            {
              text: 'Please, provide some information about your sleep to get more precise recommendation. In general: plan to sleep 8 h per day. Do not eat 3 h before sleep. Wake up each single day at fixed time. Yes, at the weekdays too. Eat whenever you want but not before sleep ^_^',
              isShown: true
            },
            {
              text: 'Go to sleep and get up at the same time every day. Sticking to a consistent sleep-wake schedule helps set your body’s internal clock and optimize the quality of your sleep. Start by setting a realistic bedtime that will work with your lifestyle.',
              isShown: false
            },
            {
              text: 'Avoid sleeping in — even on weekends or nights you’ve stayed up late. It can be tempting to sleep in on weekends, but even a couple hour difference in wake time disrupts your internal clock. The more your weekend/weekday sleep schedules differ, the worse the jetlag-like symptoms you’ll experience. If you need to make up for a late night, opt for a daytime nap rather than sleeping in.',
              isShown: false
            },
            {
              text: 'Well done! We should rather learn from you.',
              isShown: false
            }
          ]
        },
        {
          label: 'Environment',
          header: 'Environment for sleep',
          list: [
            {
              text: 'Avoid bright screens within 2 hours of your bedtime. All nighttime light can interfere with sleep and your body’s rhythms, but the blue light emitted by electronics is especially disruptive. This includes the screen on your phone, tablet, computer, or TV. You can minimize the impact by using devices with smaller screens, turning the brightness down, or using light-altering software such as f.lux that adjusts the color of your display.',
              isShown: true
            },
            {
              text: 'When it’s time to sleep, make sure the room is dark. The darker it is, the better you’ll sleep. Use heavy curtains or shades to block light from windows, or try a sleep mask to cover your eyes. Also consider covering up or moving any electronics that emit light. Even the red numbers on a digital clock can disrupt sleep.',
              isShown: false
            },
            {
              text: 'Expose yourself to bright sunlight in the morning. The closer to the time you get up, the better. Have your coffee outside, for example, or eat breakfast by a sunny window. Skip the sunglasses! The light on your face will help you wake up and feel more alert.',
              isShown: true
            },
            {
              text: 'Keep noise down. If you can’t avoid or eliminate noise from barking dogs, loud neighbors, city traffic, or other people in your household, try masking it with a fan, recordings of soothing sounds, or white noise. You can buy a special sound machine or generate your own white noise by setting your radio between stations. Earplugs may also help.',
              isShown: false
            },
            {
              text: 'Keep your room cool. The temperature of your bedroom also affects sleep. Most people sleep best in a slightly cool room (around 65° F or 18° C) with adequate ventilation. A bedroom that is too hot or too cold can interfere with quality sleep.',
              isShown: false
            },
            {
              text: 'Make sure your bed is comfortable. Your bed covers should leave you enough room to stretch and turn comfortably without becoming tangled. If you often wake up with a sore back or an aching neck, you may need to invest in a new mattress or a try a different pillow. Experiment with different levels of mattress firmness, foam or egg crate toppers, and pillows that provide more or less support.',
              isShown: false
            }
          ]
        },
        {
          label: 'Habits',
          header: 'Best sleep habits',
          list: [
            {
              text: 'Reserve your bed for sleeping and sex',
              isShown: true
            },
            {
              text: 'Cut down on caffeine. You might be surprised to know that caffeine can cause sleep problems up to ten to twelve hours after drinking it! Consider eliminating caffeine after lunch or cutting back your overall intake.',
              isShown: true
            },
            {
              text: 'Stay away from big meals at night. Try to make dinnertime earlier in the evening, and avoid heavy, rich foods within two hours of bed. Fatty foods take a lot of work for your stomach to digest and may keep you up. Also be cautious when it comes to spicy or acidic foods in the evening, as they can cause stomach trouble and heartburn.',
              isShown: true
            },
                        {
              text: 'Avoid alcohol before bed. While a nightcap may help you relax and fall asleep faster, it interferes with your sleep cycle once you’re out. To optimize the quality of your sleep, stay away from alcohol in the hours leading up to your bedtime.',
              isShown: true
            },
            {
              text: 'Avoid drinking too many liquids in the evening. Drinking lots of water, juice, tea, or other fluids may result in frequent bathroom trips throughout the night. Caffeinated drinks, which act as diuretics, only make things worse.',
              isShown: true
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
              isShown: true
            },
            {
              text: '2.Lifestyle.Do not eat 3h before sleep',
              isShown: false
            },
            {
              text: '3.Lifestyle.Do not eat 3h before sleep',
              isShown: true
            }
          ]
        },
        {
          label: 'Sport',
          header: 'What to eat',
          list: [
            {
              text: '“What’s the best workout plan?”  The one that you’ll actually stick with!',
              isShown: true
            },
            {
              text: '2.Sport.Do not eat 3h before sleep',
              isShown: false
            },
            {
              text: '3.Sport.Do not eat 3h before sleep',
              isShown: true
            }
          ]
        },
        {
          label: 'Best habits',
          header: 'Best sleep habits',
          list: [
            {
              text: '1.Best habits.Do not eat 3h before sleep',
              isShown: true
            },
            {
              text: '2.Best habits.Do not eat 3h before sleep',
              isShown: false
            },
            {
              text: '3.Best habits.Do not eat 3h before sleep',
              isShown: true
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
              isShown: true
            }
          ]
        },
        {
          label: 'Sleep',
          header: 'Best sleep habits',
          list: [
            {
              text: self.data.sleep.firstRec,
              isShown: true
            }
          ]
        },
        {
          label: 'Activity',
          header: 'Best activity habits',
          list: [
            {
              text: self.data.nutrition.firstRec,
              isShown: true
            }
          ]
        }
      ]
    };

    self.content = [
      self.data.nutrition,
      self.data.sleep,
      self.data.activity,
      self.data.you
    ];

    function concat(dataKey){
      var fullList = [];
      var recs = self.data[dataKey].recommendations;

      fullList = _.flatten(_.map(recs, 'list'));

      return fullList;
    }

    function getData(updatedUser){
      //not DRY
      //Nutrition
      var time    = self.data.nutrition.recommendations[0];
      var quality = self.data.nutrition.recommendations[1];
      var amount  = self.data.nutrition.recommendations[2];

        time.list[0].isShown = updatedUser.BMI < 19;
        time.list[1].isShown = updatedUser.BMI > 25;
        time.list[2].isShown = updatedUser.nutrition.weight > 80;
        time.list[3].isShown = updatedUser.BMI > 25;
        time.list[4].isShown = updatedUser.BMI > 19 && updatedUser.BMI < 25;

        quality.list[0].isShown = updatedUser.nutrition.isControl;
        quality.list[1].isShown = updatedUser.BMI > 19 && updatedUser.BMI < 25;
        quality.list[2].isShown = updatedUser.nutrition.isControl;
        quality.list[3].isShown = updatedUser.nutrition.isControl;
        quality.list[4].isShown = updatedUser.nutrition.isControl;
        quality.list[5].isShown = !updatedUser.nutrition.isControl;
        quality.list[6].isShown = updatedUser.nutrition.isVegan;

        amount.list[0].isShown = isNaN(updatedUser.BMI) || updatedUser.BMI === 0;
        amount.list[1].isShown = updatedUser.BMI > 19 && updatedUser.BMI < 25;
        amount.list[2].isShown = updatedUser.BMI > 25;
        amount.list[3].isShown = updatedUser.BMI > 25;
    //Sleep
      var schedules   = self.data.sleep.recommendations[0];
      var environment = self.data.sleep.recommendations[1];
      var habit       = self.data.sleep.recommendations[2];

        schedules.list[0].isShown = false;
        schedules.list[1].isShown = updatedUser.sleep.hasRegim === false;
        schedules.list[2].isShown = updatedUser.sleep.hasHabit === false;
        schedules.list[3].isShown = updatedUser.sleep.hasRegim &&
                                    updatedUser.sleep.hasHabit &&
                                    updatedUser.user.sleepDuration > 6 &&
                                    updatedUser.user.sleepDuration < 8.5;

        environment.list[0].isShown = updatedUser.sleep.lightOff;
        environment.list[1].isShown = updatedUser.sleep.lightOff;
        environment.list[2].isShown = true;
        environment.list[3].isShown = !updatedUser.sleep.hasNoNoise;
        environment.list[4].isShown = !updatedUser.sleep.isFreshAir;
        environment.list[5].isShown = !updatedUser.sleep.bedIsComfortable;

        habit.list[0].isShown = true;
        habit.list[1].isShown = true;
        habit.list[2].isShown = true;
        habit.list[3].isShown = true;
        habit.list[4].isShown = true;

    //ACTIVITY
      // var lifestyle = self.data.activity.recommendations[0];
      // var sport     = self.data.activity.recommendations[1];

      //   lifestyle.list[0].isShown = updatedUser.nutrition.isControl;
      //   lifestyle.list[1].isShown = updatedUser.BMI > 19 && updatedUser.BMI < 25;
      //   lifestyle.list[2].isShown = updatedUser.nutrition.isControl;
      //   lifestyle.list[3].isShown = updatedUser.nutrition.isControl;
      //   lifestyle.list[4].isShown = updatedUser.nutrition.isControl;
      //   lifestyle.list[5].isShown = !updatedUser.nutrition.isControl;
      //   lifestyle.list[6].isShown = updatedUser.nutrition.isVegan;

      //   sport.list[0].isShown = updatedUser.nutrition.isControl;
      //   sport.list[1].isShown = updatedUser.BMI > 19 && updatedUser.BMI < 25;
      //   sport.list[2].isShown = updatedUser.nutrition.isControl;
      //   sport.list[3].isShown = updatedUser.nutrition.isControl;
      //   sport.list[4].isShown = updatedUser.nutrition.isControl;
      //   sport.list[5].isShown = !updatedUser.nutrition.isControl;
      //   sport.list[6].isShown = updatedUser.nutrition.isVegan;
      console.log(self.data);
    return self.data;
    }
  }
})();
