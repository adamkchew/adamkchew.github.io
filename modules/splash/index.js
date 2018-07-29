const name = 'Splash';

import angular from "angular";

module.exports = angular.module(`${name.toLowerCase()}-module`, [])
  .controller(`${name}Controller`, require(`./${name.toLowerCase()}`).default)
  .config(/**@ngInject*/($routeProvider) => {
    $routeProvider
      .when(`/`, {templateUrl: require(`./${name.toLowerCase()}.html`), controller: `${name}Controller`})
      .when(`/${name.toLowerCase()}`, {templateUrl: require(`./${name.toLowerCase()}.html`), controller: `${name}Controller`});
  }).name;