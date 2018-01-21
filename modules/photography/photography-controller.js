global.PhotoSwipe = require('photoswipe/dist/photoswipe');
global.PhotoSwipeUI_Default = require('photoswipe/dist/photoswipe-ui-default');

export default /**@ngInject*/($scope) => {

  let images = [
    {path: '2017-102.jpg', title: 'Lima', description: ''},
    {path: '2017-103.jpg', title: 'Lima', description: ''},
    {path: '2017-104.jpg', title: 'Isolina Taberna Peruana', description: ''},
    {path: '2017-105.jpg', title: 'Barranco', description: ''},
    {path: '2017-106.jpg', title: 'Cusco', description: ''},
    {path: '2017-107.jpg', title: 'Sacred Valley', description: ''},
    {path: '2017-108.jpg', title: 'Sacred Valley', description: ''},
    {path: '2017-109.jpg', title: 'Sacred Valley', description: ''},
    {path: '2017-110.jpg', title: 'Humantay Lake', description: ''},
    {path: '2017-101.jpg', title: 'Salkantay Trek', description: ''},
    {path: '2017-111.jpg', title: 'Salkantay Trek', description: ''},
    {path: '2017-112.jpg', title: 'Salkantay', description: ''},
    {path: '2017-113.jpg', title: 'Salkantay', description: ''},
    {path: '2017-114.jpg', title: 'Salkantay Lake', description: ''},
    {path: '2017-115.jpg', title: 'Salkantay', description: ''},
    {path: '2017-116.jpg', title: 'Machu Picchu', description: ''},
    {path: '2017-117.jpg', title: 'Machu Picchu', description: ''},
    {path: '2017-118.jpg', title: 'Ahu Tahai', description: ''},
    {path: '2017-119.jpg', title: 'Ahu Tongariki', description: ''},
    {path: '2017-120.jpg', title: 'Ahu Tongariki', description: ''},
    {path: '2017-121.jpg', title: 'Ahu Tongariki', description: ''},
    {path: '2017-122.jpg', title: 'Ahu Nau Nau', description: ''},
    {path: '2017-123.jpg', title: 'Fujifilm GFX', description: ''},
    {path: '2017-124.jpg', title: 'Easter Island', description: ''},
    {path: '2017-100.jpg', title: 'Easter Island', description: ''},
    {path: '2017-125.jpg', title: 'Rano Kau', description: ''},
    {path: '2017-126.jpg', title: 'Torres del Paine Trek', description: ''},
    {path: '2017-127.jpg', title: 'Torres del Paine Trek', description: ''},
    {path: '2017-128.jpg', title: 'Almirante Nieto', description: ''},
    {path: '2017-129.jpg', title: 'Torres del Paine', description: ''},
    {path: '2017-130.jpg', title: 'Magellanic Penguins', description: ''},
    {path: '2017-131.jpg', title: 'Christmas', description: ''},
    {path: '2017-132.jpg', title: 'Coffee Challenge', description: ''}
  ];

  $scope.photos = [];

  images.forEach(image => {
    $scope.photos.push({title: image.title, url: require(`./renditions/${image.path}`), original: require(`./originals/${image.path}`)})
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

        if(useLargeImages && realViewportWidth < 2000) {
          useLargeImages = false;
          imageSrcWillChange = true;
        } else if(!useLargeImages && realViewportWidth >= 2000) {
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