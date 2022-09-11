"use strict";

var searchBox = document.querySelector('.search_box');
var searchIcon = document.querySelector('.search_icon');
var searchClose = document.querySelector('.search_close');
var hamburger = document.querySelector('.hamburger');
var navTag = document.getElementsByTagName('nav')[0];
searchIcon.addEventListener('click', function () {
  if (window.innerWidth < 960) {
    searchBox.classList.add('search_open');
    navTag.classList.remove('menu_open');
  }
});
searchClose.addEventListener('click', function () {
  if (window.innerWidth < 960) {
    searchBox.classList.remove('search_open');
  }
});
hamburger.addEventListener('click', function () {
  if (window.innerWidth < 960) {
    navTag.classList.toggle('menu_open');
  }
});
var artistSwiper = new Swiper(".index-artist", {
  speed: 800,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  grabCursor: true,
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      loopedSlides: 3
    },
    1140: {
      slidesPerView: 3,
      loopedSlides: 5
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
var indexMasonry = document.querySelector('#indexMasonry');

if (indexMasonry) {
  var iMasonry = new Masonry(indexMasonry, {
    itemSelector: 'li',
    horizontalOrder: true
  });
  imagesLoaded("#indexMasonry").on("progress", function () {
    iMasonry.layout();
  });
}

;
//# sourceMappingURL=all.js.map
