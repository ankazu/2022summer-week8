const searchBox = document.querySelector('.search_box');
const searchIcon = document.querySelector('.search_icon');
const searchClose = document.querySelector('.search_close');
const hamburger = document.querySelector('.hamburger');
const navTag = document.getElementsByTagName('nav')[0];
const tabs = document.querySelectorAll('.operations_tab');
const tabsContainer = document.querySelector('.operations_tab-container');
const tabsContent = document.querySelectorAll('.operations_content');


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

tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations_tab');

  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations_tab-active'));
  tabsContent.forEach(c => c.classList.remove('operations_content-active'));

  clicked.classList.add('operations_tab-active');

  document
    .querySelector(`.operations_content-${clicked.dataset.tab}`)
    .classList.add('operations_content-active');
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

tabsContainer.addEventListener('click', function() {
  let artistMasonry = document.querySelector('#artistMasonry');
  if (artistMasonry) {
    new Masonry(artistMasonry, {
      itemSelector: 'li',
      horizontalOrder: true
    });
  };
})

