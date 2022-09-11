const searchBox = document.querySelector('.search_box');
const searchIcon = document.querySelector('.search_icon');
const searchClose = document.querySelector('.search_close');
const hamburger = document.querySelector('.hamburger');
const navTag = document.getElementsByTagName('nav')[0];


  searchIcon.addEventListener('click', function() {
    if(window.innerWidth < 960) {
      searchBox.classList.add('search_open');
      navTag.classList.remove('menu_open')
    }
  });
  
  searchClose.addEventListener('click', function() {
    if(window.innerWidth < 960) {
      searchBox.classList.remove('search_open');
    }
  });
  
  hamburger.addEventListener('click', function() {
    if(window.innerWidth < 960) {
      navTag.classList.toggle('menu_open');
    }
  });

let artistSwiper = new Swiper(".index-artist", {
  speed: 800,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
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
    clickable: true,
  }
});

let indexMasonry = document.querySelector('#indexMasonry');
if (indexMasonry) {
  let iMasonry = new Masonry(indexMasonry, {
    itemSelector: 'li',
    horizontalOrder: true
  });
  imagesLoaded("#indexMasonry").on("progress", function () {
    iMasonry.layout();
  });
};