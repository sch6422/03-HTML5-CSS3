var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
var swiper1 = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
$(function () {
  $(".last,.menu_txt").hover(
    function () {
      //$(".menu_txt").fadeIn();
      $(".menu_txt").css({ display: "block" });
      //  $(".menu_txt").fadeIn();
    },
    function () {
      $(".menu_txt").css({ display: "none" });

      // $(".menu_txt").fadeOut();
    }
  );
});
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  //centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
$(function () {
  $(".footer_img>li").click(function () {
    $(".footer_img>li").removeClass("on");
    $(".footer_img>li").addClass("on");
  });
});
