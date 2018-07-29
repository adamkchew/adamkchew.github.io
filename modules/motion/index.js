const name = 'Motion';

import angular from "angular";

require("videogular/dist/videogular/videogular");
require("videogular/dist/controls/vg-controls");
require("videogular/dist/overlay-play/vg-overlay-play");

module.exports = angular.module(`${name.toLowerCase()}-module`, ['com.2fdevs.videogular', 'com.2fdevs.videogular.plugins.controls', 'com.2fdevs.videogular.plugins.overlayplay'])
  .controller(`${name}Controller`, require(`./${name.toLowerCase()}`).default)
  .config(/**@ngInject*/($routeProvider) => {
    $routeProvider
      .when(`/${name.toLowerCase()}`, {templateUrl: require(`./${name.toLowerCase()}.html`), controller: `${name}Controller`});
  }).name;