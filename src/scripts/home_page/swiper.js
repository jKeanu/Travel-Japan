// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
  

//Swiper for the images on the dropdown menu
new Swiper(".right-dslides", {
  grabCursor: true,
  effect: "creative",
  loop: true,   
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

//Swiper for the images on the hero section
new Swiper('.hero-slides', {
    slidesPerView: 5,
    spaceBetween: 10,
    autoplay:{
        delay: 5000,
        disableOnInteraction: false,
},
    loop: true,
});


//Swiper for the personal interests section
new Swiper(".adventure-swiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: "#adventure-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#next-adventure",
    prevEl: "#prev-adventure",
  },
});

