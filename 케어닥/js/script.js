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
  let btn = true;
  $(".footer_img>li>button").click(function () {
    if (btn) {
      $(".footer_img>li>a").addClass("on");
    } else {
      $(".footer_img>li>a").removeClass("on");
    }
    btn = !btn;
  });
});
var swiper = new Swiper(".swiper-container", {
  loop: true,
  autoHeight: true,
  slidesPerView: 4,
  spaceBetween: 0,
  centeredSlides: true,
  speed: 800,

  pagination: {
    el: ".service-img-slider .swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
setInterval(function () {
  swiper.slidePrev();
}, 5000); // 5초 간격으로 슬라이드 이동
