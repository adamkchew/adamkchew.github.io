//Global elements the needs to be loaded once
global.bootstrap = require('bootstrap');

import angular from "angular";
import angularRoute from "angular-route";
import angularCookies from "angular-cookies";
import splashModule from "../splash";

let application = angular.module('adamkchew', [angularRoute, angularCookies, splashModule]);

application.constant('API_URL', location.host === 'www.adamkchew.com' ? 'http://api.adamkchew.com' : 'http://localhost:3001');

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
application.run(/**@ngInject*/($rootScope) => {


});

module.export = application;