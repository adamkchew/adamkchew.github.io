global.PhotoSwipe = require('photoswipe/dist/photoswipe');
global.PhotoSwipeUI_Default = require('photoswipe/dist/photoswipe-ui-default');

export default /**@ngInject*/($scope) => {

  $scope.photos = [];

  let images = [
    '2017-100.jpg',
    '2017-101.jpg',
    '2017-102.jpg',
    '2017-103.jpg',
    '2017-104.jpg',
    '2017-105.jpg',
    '2017-106.jpg',
    '2017-107.jpg',
    '2017-108.jpg',
    '2017-109.jpg',
    '2017-110.jpg',
    '2017-111.jpg',
    '2017-112.jpg',
    '2017-113.jpg',
    '2017-114.jpg',
    '2017-115.jpg',
    '2017-116.jpg',
    '2017-117.jpg',
    '2017-118.jpg',
    '2017-119.jpg',
    '2017-120.jpg',
    '2017-121.jpg',
    '2017-122.jpg',
    '2017-123.jpg',
    '2017-124.jpg',
    '2017-125.jpg',
    '2017-126.jpg',
    '2017-127.jpg',
    '2017-128.jpg',
    '2017-129.jpg',
    '2017-130.jpg',
    '2017-131.jpg',
    '2017-132.jpg',
  ];

  images.forEach(image => {
    $scope.photos.push({title: '', url: require(`./renditions/${image}`), original: require(`./originals/${image}`)})
  });

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
      let images = $scope.photos.map(image => ({rendition: image.url, h: 0, w: 0, original: image.original}));
      let gallery = new PhotoSwipe(photoSwipesElement, global.PhotoSwipeUI_Default, images, {index: (index ? index : 0)});

      let realViewportWidth;
      let useLargeImages = false;
      let firstResize = true;
      let imageSrcWillChange;

      gallery.listen('beforeResize', () => {
        realViewportWidth = gallery.viewportSize.x * window.devicePixelRatio;

        if(useLargeImages && realViewportWidth < 1000) {
          useLargeImages = false;
          imageSrcWillChange = true;
        } else if(!useLargeImages && realViewportWidth >= 1000) {
          useLargeImages = true;
          imageSrcWillChange = true;
        }

        if(imageSrcWillChange && !firstResize) {
          gallery.invalidateCurrItems();
        }

        if(firstResize) firstResize = false;

        imageSrcWillChange = false;
      });

      gallery.listen('gettingData', (index, item) => {
        let image = new Image();

        image.onload = function() { // will get size after load
          item.w = this.width; // set image width
          item.h = this.height; // set image height
          gallery.updateSize(true); // reinit Items
        };

        if(useLargeImages) {
          image.src = item.original;
          item.src = item.original;
        } else {
          image.src = item.rendition;
          item.src = item.rendition;
        }
      });

      gallery.init();
    }
  };

  $(document).ready(() => {
    $('.photography-cell').lazy({appendScroll: $('div.photography-table-container')});
  });


};