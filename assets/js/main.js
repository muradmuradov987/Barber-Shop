/*-----Navbar-----*/

$("#menu-toggle").click(() => {
  $("#mobile-menu").toggle(300);
  $("nav").toggleClass("show-menu");
});

$(window).scroll(() => {
  if (window.scrollY > 5) {
    $("nav").addClass("active-nav");
  } else {
    $("nav").removeClass("active-nav");
  }
});

/*-----Navbar end-----*/

/*-----Testimonial Slider-----*/
var swiper = new Swiper(".testimonial-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.8,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/*-----Testimonial Slider end-----*/
