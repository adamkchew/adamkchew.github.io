export default /**@ngInject*/($scope, $sce) => {

  $scope.videogular = {
    config: {
      preload: "none",
      sources: [
        {src: $sce.trustAsResourceUrl("https://video-ort2-2.xx.fbcdn.net/v/t43.1792-2/10000000_1541691082580747_7455988867087204352_n.mp4?efg=eyJybHIiOjMwOTksInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=3099&vabr=2066&oh=0481859693dde717a3bcf2b4be887a99&oe=5A67E4BE"), type: "video/mp4"}
      ],
      tracks: [],
      theme: {
        url: "https://unpkg.com/videogular@2.1.2/dist/themes/default/videogular.css"
      }
    }
  }

};