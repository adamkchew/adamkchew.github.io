global.PhotoSwipe = require('photoswipe/dist/photoswipe');
global.PhotoSwipeUI_Default = require('photoswipe/dist/photoswipe-ui-default');

export default /**@ngInject*/($scope) => {

  $scope.photos = [
    {title: 'Macchu Picchu', url: require('./renditions/UNADJUSTEDNONRAW_thumb_78a8.jpg')},
    {title: 'Macchu Picchu', url: require('./renditions/UNADJUSTEDNONRAW_thumb_78a9.jpg')},
    {title: 'Macchu Picchu', url: require('./renditions/UNADJUSTEDNONRAW_thumb_78aa.jpg')},
    {title: 'Macchu Picchu', url: require('./renditions/UNADJUSTEDNONRAW_thumb_78ab.jpg')},
    {title: 'Macchu Picchu', url: require('./renditions/UNADJUSTEDNONRAW_thumb_78ac.jpg')},
    {title: 'Macchu Picchu', url: require('./renditions/UNADJUSTEDNONRAW_thumb_78ad.jpg')},
    {title: 'Macchu Picchu', url: require('./renditions/UNADJUSTEDNONRAW_thumb_78ae.jpg')},
    {title: 'Macchu Picchu', url: require('./renditions/UNADJUSTEDNONRAW_thumb_78af.jpg')},
    {title: 'Macchu Picchu', url: require('./renditions/UNADJUSTEDNONRAW_thumb_78b0.jpg')},
    {title: 'Macchu Picchu', url: require('./renditions/UNADJUSTEDNONRAW_thumb_78b1.jpg')},
    {title: 'Macchu Picchu', url: require('./renditions/UNADJUSTEDNONRAW_thumb_78f2.jpg')},
    {title: 'Macchu Picchu', url: require('./renditions/UNADJUSTEDNONRAW_thumb_78f3.jpg')},
    {title: 'Macchu Picchu', url: require('./renditions/UNADJUSTEDNONRAW_thumb_78f4.jpg')},
    {title: 'Macchu Picchu', url: require('./renditions/UNADJUSTEDNONRAW_thumb_78f5.jpg')},
    {title: 'Macchu Picchu', url: require('./renditions/UNADJUSTEDNONRAW_thumb_78f6.jpg')},
    {title: 'Macchu Picchu', url: require('./renditions/UNADJUSTEDNONRAW_thumb_78f7.jpg')},
    {title: 'Macchu Picchu', url: require('./renditions/UNADJUSTEDNONRAW_thumb_78f8.jpg')},
    {title: 'Macchu Picchu', url: require('./renditions/UNADJUSTEDNONRAW_thumb_78f9.jpg')},
  ];

  $scope.firstRowPhotos = [];
  $scope.secondRowPhotos = [];
  $scope.thirdRowPhotos = [];

  $scope.photos.forEach((photo, index) => {
    if(index % 3 === 0) $scope.firstRowPhotos.push(photo);
    if(index % 3 === 1) $scope.secondRowPhotos.push(photo);
    if(index % 3 === 2) $scope.thirdRowPhotos.push(photo);
  });


  $scope.showGallery = (index) => {
    if(global.PhotoSwipe && global.PhotoSwipeUI_Default) {
      let photoSwipesElement = document.querySelectorAll('.pswp')[0];
      let images = $scope.photos.map(image => ({src: image.url, h: 0, w: 0}));
      let gallery = new PhotoSwipe(photoSwipesElement, global.PhotoSwipeUI_Default, images, {index: (index ? index : 0)});

      gallery.listen('gettingData', function(index, item) {
        let image = new Image();
        image.onload = function() { // will get size after load
          item.w = this.width; // set image width
          item.h = this.height; // set image height
          gallery.updateSize(true); // reinit Items
        };
        image.src = item.src; // let's download image
      });

      gallery.init();
    }
  };

  $(document).ready(() => {
    $('.photography-cell').lazy({appendScroll: $('div.photography-table-container')});
  });


};