const name = 'Motion';

import angular from "angular";

require("videogular/dist/videogular/videogular");

module.exports = angular.module(`${name.toLowerCase()}-module`, ['com.2fdevs.videogular'])
  .controller(`${name}Controller`, require(`./${name.toLowerCase()}-controller`).default)
  .config(/**@ngInject*/($routeProvider) => {
    $routeProvider
      .when(`/${name.toLowerCase()}`, {templateUrl: require(`./${name.toLowerCase()}.html`), controller: `${name}Controller`});
  }).name;