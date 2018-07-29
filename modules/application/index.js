//JQuery plugins
global.$ = require('jquery');
window.jQuery = window.$ = global.$;

require('jquery-lazy');
require('jquery-mousewheel');

import angular from "angular";
import angularRoute from "angular-route";
import angularCookies from "angular-cookies";
import angularSanitize from "angular-sanitize";
import splashModule from "../splash";
import motionModule from "../motion";
import photographyModule from "../photography";
import projectModule from "../project";
import learnModule from "../learn";
import contactModule from "../contact";

let application = angular.module('adamkchew', [angularRoute, angularCookies, angularSanitize, splashModule, motionModule, photographyModule, projectModule, learnModule, contactModule]);

//Configurations
application.config(/**@ngInject*/($locationProvider) => {

  //Hashbang for Google SEO
  $locationProvider.html5Mode(true).hashPrefix('!');

});

//Application start
application.run(/**@ngInject*/($rootScope, $location) => {

  $rootScope.path;

  $rootScope.$on("$routeChangeStart", function(event, next, current) {
    $rootScope.path = $location.path();
  });

});

module.export = application;