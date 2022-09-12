"use strict";

var searchBox = document.querySelector('.search_box');
var searchIcon = document.querySelector('.search_icon');
var searchClose = document.querySelector('.search_close');
var hamburger = document.querySelector('.hamburger');
var navTag = document.getElementsByTagName('nav')[0];
var tabs = document.querySelectorAll('.operations_tab');
var tabsContainer = document.querySelector('.operations_tab-container');
var tabsContent = document.querySelectorAll('.operations_content');
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
  new Masonry(indexMasonry, {
    itemSelector: 'li',
    horizontalOrder: true
  });
}

;

if (tabsContainer) {
  tabsContainer.addEventListener('click', function (e) {
    e.preventDefault();
    var clicked = e.target.closest('.operations_tab');
    if (!clicked) return;
    tabs.forEach(function (t) {
      return t.classList.remove('operations_tab-active');
    });
    tabsContent.forEach(function (c) {
      return c.classList.remove('operations_content-active');
    });
    clicked.classList.add('operations_tab-active');
    document.querySelector(".operations_content-".concat(clicked.dataset.tab)).classList.add('operations_content-active');
  });
  tabsContainer.addEventListener('click', function () {
    var artistMasonry = document.querySelector('#artistMasonry');

    if (artistMasonry) {
      new Masonry(artistMasonry, {
        itemSelector: 'li',
        horizontalOrder: true
      });
    }

    ;
  });
}

;
//# sourceMappingURL=all.js.map
