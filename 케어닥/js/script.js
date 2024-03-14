<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>;
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
$(function () {
  $(".menu ul li:nth-child(6) a").hover(function () {
    $(".menu ul li .menu_txt").css({ opasity: "1" });
  });
});
