export default /**@ngInject*/($scope, $sce) => {

  $scope.videogularTheme = {url: "https://unpkg.com/videogular@2.1.2/dist/themes/default/videogular.css"};

  $scope.videos = [
    {
      url: require('./videos/easter-island.mp4'),
      title: 'Easter Island',
      description: 'When traveling to the end of the world, I mind as well visit the most remote island in South America.'
    },

    {
      url: require('./videos/national-parks.mp4'),
      title: 'Epic National Parks',
      description: 'Hiking in middle America: Rocky Mountain NP, Yellowstone NP, Grand Teton NP, Arches NP, and Canyonland NP.'
    },

    {
      url: require('./videos/movement-cycling-club.mp4'),
      title: 'Movement Cycling Club Race',
      description: 'Droning the race with the MCC crew in kissena velodrome race.'
    },

    {
      url: require('./videos/indonesia.mp4'),
      title: 'Visiting the Komodo Dragons',
      description: 'Influenced by Planet Earth II, I had to see these giant lizards myself.'
    },

    {
      url: require('./videos/ecuador.mp4'),
      title: '30 Day Ecuador Selfie',
      description: 'Backpacking 30 days in Ecuador eventually ending up in the Galapagos.'
    }
  ];

  $scope.videogulars = [];

  $scope.videos.forEach(video => {
    let videogular = {sources: [{src: $sce.trustAsResourceUrl(video.url), type: "video/mp4"}], title: video.title, description: video.description};
    $scope.videogulars.push(videogular);
  });

};