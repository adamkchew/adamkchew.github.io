const name = 'Contact';

import angular from "angular";

module.exports = angular.module(`${name.toLowerCase()}-module`, [])
  .controller(`${name}Controller`, require(`./${name.toLowerCase()}`).default)
  .config(/**@ngInject*/($routeProvider) => {
    $routeProvider
      .when(`/${name.toLowerCase()}`, {templateUrl: require(`./${name.toLowerCase()}.html`), controller: `${name}Controller`});
  }).name;