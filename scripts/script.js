// Swiper
new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 1,
});

// AOS
AOS.init({ duration: 1000 });

// Lucide
lucide.createIcons();