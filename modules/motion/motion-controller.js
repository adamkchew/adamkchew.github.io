export default /**@ngInject*/($scope, $sce) => {

  $scope.videogularTheme = {url: "https://unpkg.com/videogular@2.1.2/dist/themes/default/videogular.css"};

  $scope.videos = [
    {
      url: 'https://video-ort2-2.xx.fbcdn.net/v/t43.1792-2/10000000_1541691082580747_7455988867087204352_n.mp4?efg=eyJybHIiOjMwOTksInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=3099&vabr=2066&oh=0481859693dde717a3bcf2b4be887a99&oe=5A67E4BE',
      title: 'Easter Island',
      description: 'When traveling to the end of the world, I mind as well visit the most remote island in South America.'
    },

    {
      url: 'https://video-ort2-2.xx.fbcdn.net/v/t43.1792-2/21098800_662592177283555_2784153141644361728_n.mp4?efg=eyJybHIiOjMxMTIsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=3112&vabr=2075&oh=4b2e94fa4d582c8a550e3658b0cd2fa7&oe=5A67F2BB&dl=1',
      title: 'Epic National Parks',
      description: 'Hiking in middle America: Rocky Mountain NP, Yellowstone NP, Grand Teton NP, Arches NP, and Canyonland NP.'
    },

    {
      url: 'https://video-ort2-2.xx.fbcdn.net/v/t43.1792-2/19555418_253699198446646_6774439129863159808_n.mp4?efg=eyJybHIiOjI2NzEsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=2671&vabr=1781&oh=545c6b52a915673aaa4bf85668722f5a&oe=5A67EC47&dl=1',
      title: 'Movement Cycling Club Race',
      description: 'Droning the race with the MCC crew in kissena velodrome race.'
    },

    {
      url: 'https://video-ort2-2.xx.fbcdn.net/v/t43.1792-2/15677863_972436326224901_6701991174837633024_n.mp4?efg=eyJybHIiOjI2MDUsInJsYSI6NDA2NSwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=2605&vabr=1737&oh=f76b80d2b6cee3d4e52a398e995a3cd3&oe=5A67FF38',
      title: 'Visiting the Komodo Dragons',
      description: 'Influenced by Planet Earth II, I had to see these giant lizards myself.'
    },

    {
      url: 'https://video-ort2-2.xx.fbcdn.net/v/t43.1792-2/12437316_418957054970015_1475061987_n.mp4?efg=eyJybHIiOjI1MTgsInJsYSI6Mzk1MCwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=2518&vabr=1679&oh=982981ac1d262c5b5f4fb175bb4d8b19&oe=5A680330',
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