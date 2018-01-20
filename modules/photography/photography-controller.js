global.PhotoSwipe = require('photoswipe/dist/photoswipe');
global.PhotoSwipeUI_Default = require('photoswipe/dist/photoswipe-ui-default');

export default /**@ngInject*/($scope) => {

  $scope.photos = [
    {title: 'Macchu Picchu', url: require('./images/UNADJUSTEDNONRAW_thumb_78a8.jpg'), width: 1200, height: 800},
    {title: 'Macchu Picchu', url: require('./images/UNADJUSTEDNONRAW_thumb_78a9.jpg'), width: 1200, height: 800},
    {title: 'Macchu Picchu', url: require('./images/UNADJUSTEDNONRAW_thumb_78aa.jpg'), width: 1200, height: 800},
    {title: 'Macchu Picchu', url: require('./images/UNADJUSTEDNONRAW_thumb_78ab.jpg'), width: 1200, height: 800},
    {title: 'Macchu Picchu', url: require('./images/UNADJUSTEDNONRAW_thumb_78ac.jpg'), width: 1200, height: 800},
    {title: 'Macchu Picchu', url: require('./images/UNADJUSTEDNONRAW_thumb_78ad.jpg'), width: 1200, height: 800},
    {title: 'Macchu Picchu', url: require('./images/UNADJUSTEDNONRAW_thumb_78ae.jpg'), width: 1200, height: 800},
    {title: 'Macchu Picchu', url: require('./images/UNADJUSTEDNONRAW_thumb_78af.jpg'), width: 1200, height: 800},
    {title: 'Macchu Picchu', url: require('./images/UNADJUSTEDNONRAW_thumb_78b0.jpg'), width: 1200, height: 800},
    {title: 'Macchu Picchu', url: require('./images/UNADJUSTEDNONRAW_thumb_78b1.jpg'), width: 1200, height: 800},
    {title: 'Macchu Picchu', url: require('./images/UNADJUSTEDNONRAW_thumb_78f2.jpg'), width: 1200, height: 800},
    {title: 'Macchu Picchu', url: require('./images/UNADJUSTEDNONRAW_thumb_78f3.jpg'), width: 1200, height: 800},
    {title: 'Macchu Picchu', url: require('./images/UNADJUSTEDNONRAW_thumb_78f4.jpg'), width: 1200, height: 800},
    {title: 'Macchu Picchu', url: require('./images/UNADJUSTEDNONRAW_thumb_78f5.jpg'), width: 1200, height: 800},
    {title: 'Macchu Picchu', url: require('./images/UNADJUSTEDNONRAW_thumb_78f6.jpg'), width: 1200, height: 800},
    {title: 'Macchu Picchu', url: require('./images/UNADJUSTEDNONRAW_thumb_78f7.jpg'), width: 1200, height: 800},
    {title: 'Macchu Picchu', url: require('./images/UNADJUSTEDNONRAW_thumb_78f8.jpg'), width: 1200, height: 800},
    {title: 'Macchu Picchu', url: require('./images/UNADJUSTEDNONRAW_thumb_78f9.jpg'), width: 1200, height: 800},
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
      let images = $scope.photos.map(image => ({src: image.url, h: image.height, w: image.width}));
      let gallery = new PhotoSwipe(photoSwipesElement, global.PhotoSwipeUI_Default, images, {index: (index ? index : 0)});
      gallery.init();
    }
  };

  $(document).ready(() => {
    $('.photography-cell').lazy({appendScroll: $('div.photography-table-container')});
  });


};