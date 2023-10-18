var swiper = new Swiper(".sevaPolyclinic", {
  slidesPerView: 1,
  spaceBetween: 22,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 22
    },
  },
});

var swiper = new Swiper(".ourPartners", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20
    },
  },
});

var swiper = new Swiper(".doctorsReview", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2
    },
    
    1399: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

