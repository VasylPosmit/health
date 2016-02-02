!function(){"use strict";angular.module("app.layout",["app.core","app.sections","app.sidenav","toastr"])}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"app/components/toolbar/toolbar.html",controller:"LayoutController",controllerAs:"layout",bindToController:!0};return e}angular.module("app.layout").directive("kilToolbar",e)}(),function(){"use strict";angular.module("app.sections",["ngMaterial"])}(),function(){"use strict";function e(e){function t(e){console.log("sectionsService.select()"),o.selected=angular.isNumber(e)?o.content[e]:e,console.log(o.selected)}var o=this;o.checkConnection=console.log("1. sectionsService connected"),o.selectSection=t,o.data={},o.data.nutrition={name:"Nutrition",icon:"twitter",firstRec:"You know what is healthy food and what is crap.",state:"Nutrition",mdIcon:"local_dining",recomendations:[{label:"Time",header:"When to eat",text:"Eat whenever you want ^_^"},{label:"Quality",header:"What to eat",text:"Eat whatever you want ^_^"},{label:"Amount",header:"How much to eat",text:"Eat as much as you want ^_^"}]},o.data.sleep={name:"Sleep",icon:"phone",firstRec:"Receipt is simple: sleep 8 hours per day in dark room with fresh air.",state:"Sleep",mdIcon:"local_hotel",recomendations:[{label:"Mode",header:"When to eat",text:"Plan to sleep 8 h per day. Do not eat 3 h before sleep. Wake up each single day at fixed time. Yes, at the weekdays too. Eat whenever you want but not before sleep ^_^"},{label:"Conditions",header:"What to eat",text:"Room must be dark. Fresh air. Eat whatever you want ^_^"},{label:"Body state",header:"Best sleep habits",text:"Do not eat 3h before sleep"}]},o.data.activity={name:"Activity",icon:"google_plus",firstRec:"Walk everyday at least 3 km (outside the house!) and do any sport 3 times per week. Yes, it does matter",state:"Activity",mdIcon:"directions_run",recomendations:[{label:"Lifestyle",header:"When to eat",text:"Eat whenever you want ^_^"},{label:"Sport",header:"What to eat",text:"Eat whatever you want ^_^"},{label:"Best habits",header:"Best sleep habits",text:"Do not eat 3h before sleep"}]},o.data.you={name:"Your health",icon:"hangouts",firstRec:"You know what is healthy food and what is crap.",state:"Your health",mdIcon:"account_circle",recomendations:[{label:"Nutrition",header:"Best habits",text:"Eat whenever you want ^_^"},{label:"Sleep",header:"Best sleep habits",text:"Eat whatever you want ^_^"},{label:"Activity",header:"Best activity habits",text:"Do not eat 3h before sleep"}]},o.content=[o.data.nutrition,o.data.sleep,o.data.activity,o.data.you],o.selected=o.data.nutrition}e.$inject=["$q"],angular.module("app.sections").service("sectionsService",e)}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"app/components/sections/sections.html",controller:"SectionsController",controllerAs:"sections",bindToController:!0};return e}angular.module("app.sections").directive("kilSection",e)}(),function(){"use strict";function e(e){function t(){console.log("SectionsController connected")}t()}e.$inject=["sectionsService"],angular.module("app.sections").controller("SectionsController",e)}(),function(){"use strict";angular.module("app.sidenav",[])}(),function(){"use strict";function e(e,t){function o(){var o=e.hide()||$q.when(!0);console.log("toggleSidenav()"),o.then(function(){t("left").toggle()})}function a(){console.log("openLeftMenu()"),t("left").toggle()}var l=this;l.check=console.log("sidenavService connected"),l.toggleList=o,l.openLeftMenu=a}angular.module("app.sidenav").service("sidenavService",e),e.$inject=["$mdBottomSheet","$mdSidenav"]}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"app/components/sideNav/sidenav.html",controller:"sidenavController",controllerAs:"sideNav",bindToController:!0};return e}angular.module("app.sidenav").directive("kilSidenav",e)}(),function(){"use strict";function e(e,t){function o(){console.log("sidenavController connected")}function a(t){e.selectSection(t),l.toggleSidenav()}var l=this;l.toggleSidenav=t.toggleList,l.content=e.content,l.select=a,o()}e.$inject=["sectionsService","sidenavService"],angular.module("app.sidenav").controller("sidenavController",e)}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"app/components/recommendations/recommendations.html",controller:"SectionsController",controllerAs:"sections",bindToController:!0};return e}angular.module("app.sections").directive("kilRecommendations",e)}(),function(){"use strict";function e(){var e=this;e.user={name:null,gender:null,age:null,weight:null,height:null,weightUnits:"kg",heightUnits:"cm",asleep:null,wake:null,BMI:null}}angular.module("app.layout").service("userService",e)}(),function(){"use strict";function e(e,t,o,a){function l(t){e.selectSection(t),i.toggleSideNav()}function n(){console.log("LayoutController connected"),a(function(){i.classAnimation="rubberBand"},4e3)}var i=this;i.awesomeThings=[],i.classAnimation="",i.toggleSideNav=t.toggleList,i.openLeftMenu=t.openLeftMenu,i.user=o.user,i.selected=e.selected,i.select=l,n()}e.$inject=["sectionsService","sidenavService","userService","$timeout"],angular.module("app.layout").controller("LayoutController",e)}(),function(){"use strict";function e(){var e=this;e.user={name:null,gender:null,age:null,weight:null,height:null,weightUnits:"kg",heightUnits:"cm",asleep:null,wake:null,BMI:null}}angular.module("app.layout").service("userService",e)}(),function(){"use strict";function e(e,t,o,a){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0,o.defaultIconSet("../assets/svg/avatars.svg",128).icon("menu","../assets/svg/menu.svg",24).icon("share","../assets/svg/share.svg",24).icon("google_plus","../assets/svg/google_plus.svg",512).icon("hangouts","../assets/svg/hangouts.svg",512).icon("twitter","../assets/svg/twitter.svg",512).icon("phone","../assets/svg/phone.svg",512).icon("angular","../assets/images/angular.png",512),a.theme("default").primaryPalette("blue-grey").accentPalette("blue",{"default":"400"})}function t(e){e.debug("runBlock end")}e.$inject=["$logProvider","toastrConfig","$mdIconProvider","$mdThemingProvider"],t.$inject=["$log"],angular.module("healthGuide",["app.core","app.layout","app.sections"]).config(e).run(t)}(),function(){"use strict";function e(e,t){e.state("home",{url:"/",templateUrl:"app/states/default.html",controller:"LayoutController",controllerAs:"layout"}).state("Nutrition",{url:"/nutrition",templateUrl:"app/states/nutrition.html",controller:"LayoutController",controllerAs:"layout"}).state("Sleep",{url:"/sleep",templateUrl:"app/states/sleep.html",controller:"LayoutController",controllerAs:"layout"}).state("Activity",{url:"/activity",templateUrl:"app/states/activity.html",controller:"LayoutController",controllerAs:"layout"}).state("Your health",{url:"/way_to_healthy_life",templateUrl:"app/states/you.html",controller:"LayoutController",controllerAs:"layout"}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("healthGuide").config(e)}(),function(){"use strict";angular.module("app.core",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngMaterial","ui.router"])}(),angular.module("healthGuide").run(["$templateCache",function(e){e.put("app/states/activity.html","<kil-section></kil-section><kil-recommendations></kil-recommendations>"),e.put("app/states/default.html","<kil-section></kil-section><kil-recommendations></kil-recommendations>"),e.put("app/states/nutrition.html",'<kil-section></kil-section><md-divider></md-divider><h2>{{layout.selected.name}} Input Block<md-tooltip md-direction="top">Please, answer few questions to get recommendations right for you</md-tooltip></h2><div layout-gt-sm="row" layout-xs="column" layout-align="space-between center" flex-gt-md="50"><md-input-container flex-gt-sm="60" flex-sm="100" class="md-block md-accent"><label>name</label> <input ng-model="layout.user.name"></md-input-container><md-radio-group flex="35" flex-xs="" layout="" ng-model="layout.user.gender"><md-radio-button value="male" class="md-accent">male</md-radio-button><md-radio-button value="female" class="md-warn">female</md-radio-button></md-radio-group></div><md-input-container flex-sm="50" flex-gt-sm="15" class="md-block md-accent"><label>age</label> <input min="18" max="99" type="number" ng-model="layout.user.age" aria-label="age" aria-controls="weight-slider"></md-input-container><div layout="row" layout-align="space-between center" flex-gt-md="30"><md-input-container flex="20" flex-gt-md="70" class="md-block md-accent"><label>weight</label> <input min="40" max="150" type="number" ng-model="layout.user.weight" aria-label="weight" aria-controls="weight-slider"></md-input-container><md-select flex="10" flex-gt-md="20" ng-model="layout.user.weightUnits" aria-label="weight units" class="md-accent"><md-option>kg</md-option><md-option>lbs</md-option></md-select><md-slider flex="50" min="40" max="150" ng-model="layout.user.weight" aria-label="weight" hide-gt-md="" class="md-accent"></md-slider></div><div layout="row" layout-align="space-between center" flex-gt-md="30"><md-input-container flex="20" flex-gt-md="70" class="md-block md-accent"><label>height</label> <input min="130" max="220" type="number" ng-model="layout.user.height" aria-label="height" aria-controls="height-slider"></md-input-container><md-select flex="10" flex-gt-md="20" ng-model="layout.user.heightUnits" aria-label="height units" class="md-accent"><md-option>cm</md-option><md-option>ft</md-option></md-select><md-slider flex="50" min="130" max="220" ng-model="layout.user.height" aria-label="height" hide-gt-md="" class="md-accent"></md-slider></div><p>Your Body mass index is {{layout.user.BMI}}</p><md-divider></md-divider><kil-recommendations></kil-recommendations>'),e.put("app/states/nutrition.input.html",'<md-divider></md-divider><h2>{{layout.selected.name}} Input Block<md-tooltip md-direction="top">Please, answer few questions to get recommendations right for you</md-tooltip></h2><div layout-gt-sm="row" layout-xs="column" layout-align="space-between center" flex-gt-md="50"><md-input-container flex-gt-sm="60" flex-sm="100" class="md-block md-accent"><label>name</label> <input ng-model="layout.user.name"></md-input-container><md-radio-group flex="35" flex-xs="" layout="" ng-model="layout.user.gender"><md-radio-button value="male" class="md-accent">male</md-radio-button><md-radio-button value="female" class="md-warn">female</md-radio-button></md-radio-group></div><md-input-container flex-sm="50" flex-gt-sm="15" class="md-block md-accent"><label>age</label> <input min="18" max="99" type="number" ng-model="layout.user.age" aria-label="age" aria-controls="weight-slider"></md-input-container><div layout="row" layout-align="space-between center" flex-gt-md="30"><md-input-container flex="20" flex-gt-md="70" class="md-block md-accent"><label>weight</label> <input min="40" max="150" type="number" ng-model="layout.user.weight" aria-label="weight" aria-controls="weight-slider"></md-input-container><md-select flex="10" flex-gt-md="20" ng-model="layout.user.weightUnits" aria-label="weight units" class="md-accent"><md-option>kg</md-option><md-option>lbs</md-option></md-select><md-slider flex="50" min="40" max="150" ng-model="layout.user.weight" aria-label="weight" hide-gt-md="" class="md-accent"></md-slider></div><div layout="row" layout-align="space-between center" flex-gt-md="30"><md-input-container flex="20" flex-gt-md="70" class="md-block md-accent"><label>height</label> <input min="130" max="220" type="number" ng-model="layout.user.height" aria-label="height" aria-controls="height-slider"></md-input-container><md-select flex="10" flex-gt-md="20" ng-model="layout.user.heightUnits" aria-label="height units" class="md-accent"><md-option>cm</md-option><md-option>ft</md-option></md-select><md-slider flex="50" min="130" max="220" ng-model="layout.user.height" aria-label="height" hide-gt-md="" class="md-accent"></md-slider></div><p>Your Body mass index is {{layout.user.BMI}}</p><md-divider></md-divider>'),e.put("app/states/sleep.html",'<kil-section></kil-section><md-divider></md-divider><h2>{{layout.selected.name}} Input Block<md-tooltip md-direction="top">Please, answer few questions to get recommendations right for you</md-tooltip></h2><div layout-gt-sm="row" layout-xs="column" layout-align="space-between center" flex-gt-md="50"><md-input-container flex-gt-sm="60" flex-sm="100" class="md-block md-accent"><label>name</label> <input ng-model="layout.user.name"></md-input-container></div><div layout="row" layout-align="space-between center" flex-gt-md="30"><md-input-container flex="20" flex-gt-md="70" class="md-block md-accent"><label>asleep</label> <input type="time" ng-model="layout.user.asleep" aria-label="asleep"></md-input-container></div><div layout="row" layout-align="space-between center" flex-gt-md="30"><md-input-container flex="20" flex-gt-md="70" class="md-block md-accent"><label>wake</label> <input type="time" ng-model="layout.user.wake" aria-label="wake"></md-input-container></div><md-input-container class="md-block"><label>Wake up habit</label><md-select flex="50" flex-gt-md="30" ng-model="layout.user.sleepHabit" aria-label="layout.user.sleepHabit" class="md-accent"><md-option>I wake up at the same time each day</md-option><md-option>I wake up at the same time at working days</md-option><md-option>I am not bothered by time I wake up</md-option></md-select></md-input-container><h3>Sleep checklist</h3><md-checkbox ng-model="layout.user.habbit">I wake up at the same time each day</md-checkbox><md-checkbox ng-model="layout.user.sleepLight">I sleep at the totally dark room</md-checkbox><md-checkbox ng-model="layout.user.freshAir">I sleep in well-conditioned room</md-checkbox><md-divider></md-divider><kil-recommendations></kil-recommendations>'),e.put("app/states/sleep.input.html",'<md-divider></md-divider><h2>{{layout.selected.name}} Input Block<md-tooltip md-direction="top">Please, answer few questions to get recommendations right for you</md-tooltip></h2><div layout-gt-sm="row" layout-xs="column" layout-align="space-between center" flex-gt-md="50"><md-input-container flex-gt-sm="60" flex-sm="100" class="md-block md-accent"><label>name</label> <input ng-model="layout.user.name"></md-input-container></div><div layout="row" layout-align="space-between center" flex-gt-md="30"><md-input-container flex="20" flex-gt-md="70" class="md-block md-accent"><label>asleep</label> <input type="time" ng-model="layout.user.asleep" aria-label="asleep"></md-input-container></div><div layout="row" layout-align="space-between center" flex-gt-md="30"><md-input-container flex="20" flex-gt-md="70" class="md-block md-accent"><label>wake</label> <input type="time" ng-model="layout.user.wake" aria-label="wake"></md-input-container></div><md-input-container class="md-block"><label>Wake up habit</label><md-select flex="50" flex-gt-md="30" ng-model="layout.user.sleepHabit" aria-label="layout.user.sleepHabit" class="md-accent"><md-option>I wake up at the same time each day</md-option><md-option>I wake up at the same time at working days</md-option><md-option>I am not bothered by time I wake up</md-option></md-select></md-input-container><h3>Sleep checklist</h3><md-checkbox ng-model="layout.user.habbit">I wake up at the same time each day</md-checkbox><md-checkbox ng-model="layout.user.sleepLight">I sleep at the totally dark room</md-checkbox><md-checkbox ng-model="layout.user.freshAir">I sleep in well-conditioned room</md-checkbox><md-divider></md-divider>'),e.put("app/states/you.html","<kil-section></kil-section><kil-recommendations></kil-recommendations>"),e.put("app/states/you.input.html",""),e.put("app/components/recommendations/recommendations.html",'<md-divider></md-divider><div ng-cloak=""><md-content layout="column" flex=""><h2>{{layout.selected.name}} recommendations for you {{layout.user.name}}</h2><md-tabs md-dynamic-height="" md-border-bottom=""><md-tab ng-repeat="recomendation in layout.selected.recomendations" label="{{recomendation.label}}"><md-content class="md-padding"><h2 class="md-headline">{{recomendation.header}}</h2><p>{{recomendation.text}}</p></md-content></md-tab></md-tabs></md-content></div>'),e.put("app/components/sections/sections.html",'<h3 hide-gt-md="">Health guide > {{layout.selected.name}}</h3><div layout="row"><md-icon md-svg-icon="{{layout.selected.icon}}" class="avatar"></md-icon><h1 flex-offset="5">{{layout.selected.name}}</h1></div><h4>{{layout.selected.firstRec}}</h4><md-button md-no-ink="" ng-click="showContactOptions($event)" aria-label="Contact User" class="contact"><md-tooltip>Contact {{ selected.name }}</md-tooltip><md-icon md-svg-icon="share"></md-icon></md-button>'),e.put("app/components/sideNav/sidenav.html",'<md-sidenav md-component-id="left" md-is-locked-open="$mdMedia(\'gt-md\')" class="site-sidenav md-sidenav-left md-whiteframe-z2"><md-toolbar layout="column" layout-align="space-around center" class="md-whiteframe-z1"><h3>Health</h3></md-toolbar><md-list layout="column"><md-item ng-repeat="section in sideNav.content"><a ui-sref="{{section.state}}" ui-sref-active="selected" ng-click="sideNav.select(section)" class="md-button"><i class="material-icons md-display-3">{{section.mdIcon}}</i>{{section.name}}</a></md-item><md-divider flex-offset="35"></md-divider></md-list></md-sidenav>'),e.put("app/components/toolbar/toolbar.html",'<md-toolbar layout="row" class="md-whiteframe-z1"><md-button hide-gt-md="" ng-click="layout.toggleSideNav()" aria-label="Show User List" class="menu"><md-icon md-svg-icon="menu"><md-tooltip md-direction="right">Navigation</md-tooltip></md-icon></md-button><h3 hide="" show-gt-md="">Health guide > {{layout.selected.name}}</h3><h3 hide-gt-md="">Health guide</h3></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-533e95a2e1.js.map