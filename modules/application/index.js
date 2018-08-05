//JQuery plugins
import jquery from "jquery";
import bootstrap from "bootstrap";
import angular from "angular";
import angularRoute from "angular-route";
import angularCookies from "angular-cookies";
import angularSanitize from "angular-sanitize";
import angularUIBootstrap from "angular-ui-bootstrap";
import splashModule from "../splash";
import motionModule from "../motion";
import photographyModule from "../photography";
import projectModule from "../project";
import learnModule from "../learn";
import contactModule from "../contact";
window.jquery = window.$ = window.jQuery = jquery;
window.bootstrap = bootstrap;

require('jquery-lazy');
require('jquery-mousewheel');

let application = angular.module('adamkchew', [angularRoute, angularCookies, angularSanitize, angularUIBootstrap, splashModule, photographyModule, motionModule, projectModule, learnModule, contactModule]);

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