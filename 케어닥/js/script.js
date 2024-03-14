var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
$(function () {
  $(".menu ul li:nth-child(6) a").hover(function () {
    $(".menu ul li .menu_txt").css({ opasity: "1" });
  });
});
