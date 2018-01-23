export default /**@ngInject*/($scope, $sce) => {

  $scope.videogularTheme = {url: "https://unpkg.com/videogular@2.1.2/dist/themes/default/videogular.css"};

  $scope.videos = [
    {
      url: 'https://video-ort2-2.xx.fbcdn.net/v/t43.1792-2/10000000_1541691082580747_7455988867087204352_n.mp4?efg=eyJybHIiOjMwOTksInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=3099&vabr=2066&oh=0481859693dde717a3bcf2b4be887a99&oe=5A67E4BE',
      title: 'Easter Island',
      description: 'Spent a few weeks to travel to end of the world in South America.'
    },

    {
      url: 'https://video-ort2-2.xx.fbcdn.net/v/t43.1792-2/21098800_662592177283555_2784153141644361728_n.mp4?efg=eyJybHIiOjMxMTIsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=3112&vabr=2075&oh=4b2e94fa4d582c8a550e3658b0cd2fa7&oe=5A67F2BB&dl=1',
      title: '5 National Parks',
      description: 'Rocky mountain, Yellowstone, Grand Teton, Arches, and Canyonlands.'
    },

    {
      url: 'https://video-ort2-2.xx.fbcdn.net/v/t43.1792-2/19555418_253699198446646_6774439129863159808_n.mp4?efg=eyJybHIiOjI2NzEsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=2671&vabr=1781&oh=545c6b52a915673aaa4bf85668722f5a&oe=5A67EC47&dl=1',
      title: 'Movement Cycling Club',
      description: 'Kissena velodrome race.'
    }
  ];

  $scope.videogulars = [];

  $scope.videos.forEach(video => {
    let videogular = {sources: [{src: $sce.trustAsResourceUrl(video.url), type: "video/mp4"}], title: video.title, description: video.description};
    $scope.videogulars.push(videogular);
  });

};