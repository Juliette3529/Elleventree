$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
          },
          on: {
            init: function () {
              console.log('swiper initialized');
            },
          },
      });
  });