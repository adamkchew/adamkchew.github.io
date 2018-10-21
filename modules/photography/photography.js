global.PhotoSwipe = require('photoswipe/dist/photoswipe');
global.PhotoSwipeUI_Default = require('photoswipe/dist/photoswipe-ui-default');

export default /**@ngInject*/($scope) => {

  let images = [
    {path: '2015/2015-001.jpg', title: 'Mom', description: ''},
    {path: '2015/2015-002.jpg', title: 'Breakneck Ridge', description: ''},
    {path: '2015/2015-004.jpg', title: 'Minnewaska', description: ''},
    {path: '2015/2015-034.jpg', title: 'Harriman State Park', description: ''},
    {path: '2015/2015-007.jpg', title: 'Yosemite Falls', description: ''},
    {path: '2015/2015-008.jpg', title: 'Mirror Lake', description: ''},
    {path: '2015/2015-009.jpg', title: 'Grand Canyon', description: ''},
    {path: '2015/2015-010.jpg', title: 'Grand Canyon', description: ''},

    {path: '2015/2015-006.jpg', title: 'New York City', description: ''},
    {path: '2015/2015-014.jpg', title: 'New York City', description: ''},
    {path: '2015/2015-011.jpg', title: 'Brooklyn', description: ''},
    {path: '2015/2015-012.jpg', title: 'Nisha', description: ''},
    {path: '2015/2015-013.jpg', title: 'Zion', description: ''},
    {path: '2015/2015-018.jpg', title: 'Squad', description: ''},
    {path: '2015/2015-019.jpg', title: 'Zion', description: ''},
    {path: '2015/2015-020.jpg', title: 'Zion', description: ''},

    {path: '2015/2015-015.jpg', title: 'Quilotoa', description: ''},
    {path: '2015/2015-016.jpg', title: 'Casa del Arbol', description: ''},
    {path: '2015/2015-017.jpg', title: 'Cotapaxi', description: ''},
    {path: '2015/2015-021.jpg', title: 'Quito', description: ''},
    {path: '2015/2015-022.jpg', title: 'Quito', description: ''},
    {path: '2015/2015-023.jpg', title: 'Quilotoa', description: ''},
    {path: '2015/2015-024.jpg', title: 'Quilotoa Loop', description: ''},
    {path: '2015/2015-031.jpg', title: 'Guayaquil', description: ''},
    {path: '2015/2015-025.jpg', title: 'Nicole', description: ''},
    {path: '2015/2015-026.jpg', title: 'Arkam', description: ''},
    {path: '2015/2015-027.jpg', title: 'Isla Isabela', description: ''},
    {path: '2015/2015-028.jpg', title: 'Isla Isabela', description: ''},
    {path: '2015/2015-029.jpg', title: 'Isla Isabela', description: ''},
    {path: '2015/2015-003.jpg', title: 'Galapagos Diving', description: ''},
    {path: '2015/2015-030.jpg', title: 'Christmas', description: ''},

    {path: '2015/2015-032.jpg', title: 'Hailin', description: ''},

    {path: '2016/2016-001.jpg', title: 'Uluwatu Temple', description: ''},
    {path: '2016/2016-002.jpg', title: 'Uluwatu Temple', description: ''},
    {path: '2016/2016-003.jpg', title: 'Uluwatu Temple', description: ''},
    {path: '2016/2016-004.jpg', title: 'Uluwatu Temple', description: ''},
    {path: '2016/2016-005.jpg', title: 'Ubud Monkey Forest', description: ''},
    {path: '2016/2016-006.jpg', title: 'Tegallalang Rice Terraces', description: ''},
    {path: '2016/2016-007.jpg', title: 'Tegallalang Rice Terraces', description: ''},
    {path: '2016/2016-008.jpg', title: 'Pura Ulun Danu Bratan', description: ''},
    {path: '2016/2016-009.jpg', title: 'Pura Ulun Danu Bratan', description: ''},
    {path: '2016/2016-010.jpg', title: 'Pura Ulun Danu Bratan', description: ''},

    {path: '2016/2016-011.jpg', title: 'Mount Agung', description: ''},
    {path: '2016/2016-012.jpg', title: 'Liang Bua', description: ''},
    {path: '2016/2016-014.jpg', title: 'Komodo Dragon', description: ''},
    {path: '2016/2016-015.jpg', title: 'Cruise', description: ''},
    {path: '2016/2016-016.jpg', title: 'Hailin & Sushi', description: ''},
    {path: '2016/2016-017.jpg', title: 'Crabbing', description: ''},
    {path: '2016/2016-018.jpg', title: 'Indonesia', description: ''},
    {path: '2016/2016-019.jpg', title: 'Coke', description: ''},
    {path: '2016/2016-020.jpg', title: 'Golden Gate Bridge', description: ''},

    {path: '2016/2016-021.jpg', title: 'New York City', description: ''},
    {path: '2016/2016-022.jpg', title: 'Golden Gate Bridge', description: ''},
    {path: '2016/2016-023.jpg', title: 'Golden Gate Bridge', description: ''},
    {path: '2016/2016-024.jpg', title: 'Yosemite', description: ''},
    {path: '2016/2016-025.jpg', title: 'Sunset', description: ''},
    {path: '2016/2016-026.jpg', title: 'Nisha', description: ''},
    {path: '2016/2016-027.jpg', title: 'Christmas', description: ''},
    {path: '2016/2016-028.jpg', title: 'Sunset', description: ''},
    {path: '2016/2016-029.jpg', title: 'Ada', description: ''},
    {path: '2016/2016-030.jpg', title: 'Alice', description: ''},

    {path: '2016/2016-031.jpg', title: 'Nisha', description: ''},

    {path: '2017/2017-002.jpg', title: 'Island Pond', description: ''},
    {path: '2017/2017-001.jpg', title: 'Catskill', description: ''},
    {path: '2017/2017-003.jpg', title: 'Catskill', description: ''},
    {path: '2017/2017-004.jpg', title: 'Catskill Camping', description: ''},
    {path: '2017/2017-005.jpg', title: 'Catskill Camping', description: ''},
    {path: '2017/2017-006.jpg', title: 'Gary', description: ''},
    {path: '2017/2017-007.jpg', title: 'Alice', description: ''},
    {path: '2017/2017-008.jpg', title: 'Alice', description: ''},
    {path: '2017/2017-009.jpg', title: 'Grandma', description: ''},
    {path: '2017/2017-010.jpg', title: 'Wisconsin', description: ''},

    {path: '2017/2017-011.jpg', title: 'Grandma & Sister', description: ''},
    {path: '2017/2017-012.jpg', title: 'Acadia', description: ''},
    {path: '2017/2017-013.jpg', title: 'DIY Slider', description: ''},
    {path: '2017/2017-014.jpg', title: 'Paulina', description: ''},
    {path: '2017/2017-015.jpg', title: 'Kaaterskill Falls', description: ''},
    {path: '2017/2017-028.jpg', title: 'Kaaterskill Falls', description: ''},
    // {path: '2017/2017-016.jpg', title: 'Mandy', description: ''},
    // {path: '2017/2017-023.jpg', title: 'Mandy', description: ''},
    {path: '2017/2017-017.jpg', title: 'MD5 Hackathon', description: ''},
    {path: '2017/2017-022.jpg', title: 'Photo Challenge Day 5', description: ''},
    {path: '2017/2017-018.jpg', title: 'Photo Challenge Day 9', description: ''},
    {path: '2017/2017-021.jpg', title: 'Photo Challenge Day 16', description: ''},
    {path: '2017/2017-019.jpg', title: 'Photo Challenge Day 25', description: ''},
    {path: '2017/2017-020.jpg', title: 'Photo Challenge Day 28', description: ''},

    {path: '2017/2017-024.jpg', title: 'Coney Island', description: ''},
    {path: '2017/2017-025.jpg', title: 'Nayak', description: ''},
    {path: '2017/2017-026.jpg', title: 'Captree', description: ''},
    {path: '2017/2017-027.jpg', title: 'NYIT', description: ''},
    {path: '2017/2017-029.jpg', title: 'Photo Challenge Dinner', description: ''},
    {path: '2017/2017-030.jpg', title: 'New York City', description: ''},

    {path: '2017/2017-031.jpg', title: 'Rocky Mountain', description: ''},
    {path: '2017/2017-032.jpg', title: 'Rocky Mountain', description: ''},
    {path: '2017/2017-034.jpg', title: 'Road to Yellowstone', description: ''},
    {path: '2017/2017-035.jpg', title: 'Eclipse', description: ''},
    {path: '2017/2017-036.jpg', title: 'Yellowstone Camping', description: ''},
    {path: '2017/2017-037.jpg', title: 'Lower Yellowstone Falls', description: ''},
    {path: '2017/2017-045.jpg', title: 'Yellowstone', description: ''},
    {path: '2017/2017-038.jpg', title: 'Bison', description: ''},
    {path: '2017/2017-033.jpg', title: 'Grand Teton', description: ''},
    {path: '2017/2017-039.jpg', title: 'Grand Teton', description: ''},
    {path: '2017/2017-040.jpg', title: 'Aches', description: ''},

    {path: '2017/2017-041.jpg', title: 'Aches', description: ''},
    {path: '2017/2017-042.jpg', title: 'Aches', description: ''},
    {path: '2017/2017-043.jpg', title: 'Delicate Arch', description: ''},
    {path: '2017/2017-044.jpg', title: 'Mesa Arch', description: ''},
    {path: '2017/2017-046.jpg', title: 'Philly Bike Marathon', description: ''},
    {path: '2017/2017-048.jpg', title: 'Philly Ride Marathon', description: ''},
    {path: '2017/2017-049.jpg', title: 'Philly Ride Marathon', description: ''},
    {path: '2017/2017-050.jpg', title: 'SkyGarten', description: ''},

    {path: '2017/2017-051.jpg', title: 'Song', description: ''},
    {path: '2017/2017-052.jpg', title: 'Ping(uin)', description: ''},
    {path: '2017/2017-053.jpg', title: 'Catskill', description: ''},
    {path: '2017/2017-054.jpg', title: 'Zoltan', description: ''},
    {path: '2017/2017-055.jpg', title: 'Uri', description: ''},
    {path: '2017/2017-056.jpg', title: 'Catskill', description: ''},

    {path: '2017/2017-102.jpg', title: 'Lima', description: ''},
    {path: '2017/2017-103.jpg', title: 'Lima', description: ''},
    {path: '2017/2017-104.jpg', title: 'Isolina Taberna Peruana', description: ''},
    {path: '2017/2017-105.jpg', title: 'Barranco', description: ''},
    {path: '2017/2017-106.jpg', title: 'Cusco', description: ''},
    {path: '2017/2017-107.jpg', title: 'Sacred Valley', description: ''},
    {path: '2017/2017-108.jpg', title: 'Sacred Valley', description: ''},
    {path: '2017/2017-109.jpg', title: 'Sacred Valley', description: ''},
    {path: '2017/2017-110.jpg', title: 'Humantay Lake', description: ''},
    {path: '2017/2017-101.jpg', title: 'Salkantay Trek', description: ''},
    {path: '2017/2017-111.jpg', title: 'Salkantay Trek', description: ''},
    {path: '2017/2017-112.jpg', title: 'Salkantay', description: ''},
    {path: '2017/2017-113.jpg', title: 'Salkantay', description: ''},
    {path: '2017/2017-114.jpg', title: 'Salkantay Lake', description: ''},
    {path: '2017/2017-115.jpg', title: 'Salkantay', description: ''},
    {path: '2017/2017-116.jpg', title: 'Machu Picchu', description: ''},
    {path: '2017/2017-117.jpg', title: 'Machu Picchu', description: ''},
    {path: '2017/2017-118.jpg', title: 'Ahu Tahai', description: ''},
    {path: '2017/2017-119.jpg', title: 'Ahu Tongariki', description: ''},
    {path: '2017/2017-120.jpg', title: 'Ahu Tongariki', description: ''},
    {path: '2017/2017-121.jpg', title: 'Ahu Tongariki', description: ''},
    {path: '2017/2017-122.jpg', title: 'Ahu Nau Nau', description: ''},
    {path: '2017/2017-123.jpg', title: 'Fujifilm GFX', description: ''},
    {path: '2017/2017-124.jpg', title: 'Easter Island', description: ''},
    {path: '2017/2017-100.jpg', title: 'Easter Island', description: ''},
    {path: '2017/2017-125.jpg', title: 'Rano Kau', description: ''},
    {path: '2017/2017-126.jpg', title: 'Torres del Paine Trek', description: ''},
    {path: '2017/2017-127.jpg', title: 'Torres del Paine Trek', description: ''},
    {path: '2017/2017-128.jpg', title: 'Almirante Nieto', description: ''},
    {path: '2017/2017-129.jpg', title: 'Torres del Paine', description: ''},
    {path: '2017/2017-130.jpg', title: 'Magellanic Penguins', description: ''},
    // {path: '2017/2017-131.jpg', title: 'Christmas', description: ''},
    // {path: '2017/2017-132.jpg', title: 'Coffee Challenge', description: ''},
    {path: '2018/2018-001.jpg', title: 'Alice', description: ''},
    {path: '2018/2018-002.jpg', title: 'New York City', description: ''},
    {path: '2018/2018-003.jpg', title: 'William', description: ''},
    {path: '2018/2018-004.jpg', title: 'Work', description: ''},
    {path: '2018/2018-005.jpg', title: 'Sunset Park', description: ''},
    {path: '2018/2018-006.jpg', title: 'Rise NYC', description: ''},
    {path: '2018/2018-007.jpg', title: 'New York City', description: ''},
    {path: '2018/2018-010.jpg', title: 'Sunrise', description: ''},
    {path: '2018/2018-011.jpg', title: 'Viñales', description: ''},
    {path: '2018/2018-012.jpg', title: 'Cuba', description: ''},
    {path: '2018/2018-013.jpg', title: 'Cuba', description: ''},
    {path: '2018/2018-014.jpg', title: 'Cuban Cigars', description: ''},
    {path: '2018/2018-015.jpg', title: 'Cuba', description: ''},
    {path: '2018/2018-016.jpg', title: 'Caverna de Santo Tomás', description: ''},
    {path: '2018/2018-017.jpg', title: 'Mural de la Prehistoria', description: ''},
    {path: '2018/2018-018.jpg', title: 'Trinidad', description: ''},
    {path: '2018/2018-019.jpg', title: 'Salto del Caburni', description: ''},
    {path: '2018/2018-020.jpg', title: 'Salto del Caburni', description: ''},
    {path: '2018/2018-021.jpg', title: 'Zoltan', description: ''},
    {path: '2018/2018-022.jpg', title: 'Adam', description: ''},
    {path: '2018/2018-023.jpg', title: 'Grandma & Serena', description: ''},
    {path: '2018/2018-024.jpg', title: 'Sunset', description: ''},
    {path: '2018/2018-025.jpg', title: 'New York City', description: ''},
    {path: '2018/2018-026.jpg', title: 'Alex', description: ''},
    {path: '2018/2018-027.jpg', title: 'Top Gun', description: ''},
    {path: '2018/2018-028.jpg', title: 'Kumo', description: ''},
    {path: '2018/2018-029.jpg', title: 'Clouds', description: ''},

    {path: '2018/2018-030.jpg', title: 'Helsinki', description: ''},
    {path: '2018/2018-031.jpg', title: 'Helsinki', description: ''},
    {path: '2018/2018-032.jpg', title: 'Latvia', description: ''},
    {path: '2018/2018-033.jpg', title: 'Latvia', description: ''},
    {path: '2018/2018-034.jpg', title: 'Helsinki', description: ''},
    {path: '2018/2018-035.jpg', title: 'Helsinki', description: ''},
    {path: '2018/2018-036.jpg', title: 'Helsinki', description: ''},
    {path: '2018/2018-037.jpg', title: 'Estonia', description: ''},
    {path: '2018/2018-038.jpg', title: 'Estonia', description: ''},
    {path: '2018/2018-039.jpg', title: 'Latvia', description: ''},
    {path: '2018/2018-040.jpg', title: 'Minnewaska State Park', description: ''},
    {path: '2018/2018-041.jpg', title: 'Minnewaska State Park', description: ''},
    {path: '2018/2018-042.jpg', title: 'Minnewaska State Park', description: ''},
    {path: '2018/2018-043.jpg', title: 'Kaaterskill Falls', description: ''},
    {path: '2018/2018-044.jpg', title: 'Kaaterskill Falls', description: ''},
    {path: '2018/2018-045.jpg', title: 'Kaaterskill Falls', description: ''},

  ];

  $scope.photos = [];

  images.reverse();
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


    let photographyTableContainer = $('.photography-table-container');

    photographyTableContainer.mousewheel((event) => {

      // Only update the scroll left of the container if the mouse wheel is moved from the Y axis (horizontal scroll)
      if(event.deltaY !== 0) {
        let originalLeftPosition = photographyTableContainer.scrollLeft();
        let scrolledLeftPosition = originalLeftPosition + event.deltaY;
        photographyTableContainer.scrollLeft(scrolledLeftPosition);
      }
    });

  });


};