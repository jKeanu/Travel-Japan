// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
  
const swiper1 = new Swiper('.hero-slides', {
    slidesPerView: 5,
    spaceBetween: 10,
    autoplay:{
        delay: 5000,
        disableOnInteraction: false,
},
    loop: true,
});

const swiper2 = new Swiper(".adventure-swiper", {
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

