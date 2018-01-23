//Global elements the needs to be loaded once
// global.bootstrap = require('bootstrap');

global.$ = require('jquery');
window.jQuery = window.$ = global.$;

//JQuery plugins
require('jquery-lazy');

import angular from "angular";
import angularRoute from "angular-route";
import angularCookies from "angular-cookies";
import angularSantize from "angular-sanitize";
import splashModule from "../splash";
import motionModule from "../motion";
import photographyModule from "../photography";
import projectModule from "../project";
import contactModule from "../contact";

let application = angular.module('adamkchew', [angularRoute, angularCookies, angularSantize, splashModule, motionModule, photographyModule, projectModule, contactModule]);

application.constant('API_URL', location.host === 'www.adamkchew.com' ? 'https://api.adamkchew.com' : 'http://localhost:3001');

//Configurations
application.config(/**@ngInject*/($locationProvider, $httpProvider, API_URL) => {

  //Hashbang for Google SEO
  $locationProvider.html5Mode(true).hashPrefix('!');

  //HTTP base uri rewrite to access api server
  $httpProvider.interceptors.push(() => {
    return {
      request: (config) => {
        if(config.url.startsWith("/api/"))

          config.url = config.url.startsWith("/api/") ? (API_URL + config.url) : config.url; // prepend base url
        return config;
      }
    };
  });

});

//Application start
application.run(/**@ngInject*/($rootScope, $location) => {

  $rootScope.path;

  $rootScope.$on("$routeChangeStart", function(event, next, current) {
    $rootScope.path = $location.path();
  });

});

module.export = application;