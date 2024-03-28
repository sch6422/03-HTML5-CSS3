let chat = gsap.timeline({
  defaults: { position: "fixed" },
});
chat.fromTo(
  ".chat1",
  {
    opacity: 0,
  },
  {
    opacity: 1,
  }
);
let chat1 = gsap.timeline();
chat1.to(".chat1", {
  position: "absolute",
});
ScrollTrigger.create({
  animation: chat,
  trigger: ".bestKia,.new,.new1",
  // markers: true,
  scrub: true,
});
ScrollTrigger.create({
  animation: chat1,
  trigger: ".ft",
  //markers: true,
  scrub: true,
});
$(".mySwiper .swiper-slide").eq(0).find(".kv p").addClass("on");
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  on: {
    slideChange: function () {
      let i = this.activeIndex;
      console.log(i);
      $(".mySwiper .swiper-slide .kv p").removeClass("on");
      $(".mySwiper .swiper-slide .kv2 p").removeClass("on");
      $(".mySwiper .swiper-slide .kv3 p").removeClass("on");
      $(this.slides[i]).find("p").addClass("on");
    },
  },
});
var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
$(function () {
  let ftButton = true;
  $(".btn>button").click(function () {
    if (ftButton) {
      $(".btn2").addClass("on");
      $(".btn").addClass("on");
      $(".btn").eq(0).find("button").addClass("on");
    } else {
      $(".btn2").removeClass("on");
      $(".btn").removeClass("on");
      $(".btn").eq(0).find("button").removeClass("on");
    }
    ftButton = !ftButton;
  });
});
$(function () {
  let kr = true;
  $(".kr li").click(function () {
    if (kr) {
      $(".kr2").addClass("on");
      $(".wrap .kr li").eq(0).find("a").addClass("on");
    } else {
      $(".kr2").removeClass("on");
      $(".wrap .kr li").eq(0).find("a").removeClass("on");
    }
    kr = !kr;
  });
});
gsap.to(".newsWrap .news .new1 li", {
  y: -50,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".newsWrap .news .new1 li",
    toggleActions: "play reverse reverse reverse",
  },
});

$(".menu1 li").click(function () {
  let i = $(this).index();
  let a = true;
  console.log(i);
  $(".wrap .menu").css("background", "#fff");
  $(".wrap .menu .menu1 li a").addClass("on");
  $(".wrap .menu .menu1 li a").removeClass("on1");
  $(".wrap .menu .menu1 li").eq(i).find("a").addClass("on1");
  $(".wrap .kr li a").addClass("on");
  $(".wrap .kr li a").addClass("on1");
  $(".logo li a img").attr("src", "images/logo.svg");
  $(".wrap .kr li").eq(0).find("a").addClass("on");
  if (i >= 1) {
    $(".sub_menu").css("display", "block");
    $(".sub").css("display", "none");
    $(".sub").eq(i).css("display", "flex");
  }
});
// $(".sub_menu").click(function () {
//   let a = $(this).attr("style");
//   console.log(a);
//   $(".wrap .menu .menu1 li a").removeClass("on1");
//   if (a == "display: block;") {
//     $(this).css("display", "none");
//     $(".wrap .menu").css("background", "transparent");
//     $(".wrap .kr li a").css("color", "#fff");
//     $(".wrap .menu .menu1 li a").css("color", "#fff");
//     $(".logo li a img").attr("src", "images/logo.png");
//   }
// });
$(".sub_menu").click(function () {
  let a = $(this).attr("style");
  console.log(a);
  if (a == "display: block;") {
    $(this).css("display", "none");
    $(".wrap .menu").css("background", "transparent");
    $(".wrap .menu .menu1 li a").removeClass("on on1");
    $(".logo li a img").attr("src", "images/logo.png");
    $(".wrap .kr li a").removeClass("on on1");
  }
});
