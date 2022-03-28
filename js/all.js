$(document).ready(function () {
  $('.nav > ul >li > a').click(function (e) { 
    e.preventDefault();
    $(this).parent().find('ul').slideToggle();
    $(this).parent().siblings().find('ul').slideUp();
  });

  $(".top img").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0
      },
      500
    );
  });

  const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    effect: 'fade',

    grabCursor: true,

    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
  });

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
  })
});