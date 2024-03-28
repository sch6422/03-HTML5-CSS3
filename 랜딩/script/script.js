$(".mySwiper .swiper-slide").eq(0).find(".main h1").addClass("on");
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  on: {
    slideChange: function () {
      let i = this.realIndex;
      console.log(i);
      $(".mySwiper .swiper-slide .main h1").removeClass("on");
      $(".mySwiper .swiper-slide .wrap .man").removeClass("on");
      $(".mySwiper .swiper-slide .me ul").removeClass("on");
      $(".mySwiper .swiper-slide div.skill img").removeClass("on");
      $(".mySwiper .swiper-slide .use_tool h2").removeClass("on");
      $(this.slides[i]).find("h1").addClass("on");
      $(this.slides[i]).find("img").addClass("on");
      $(this.slides[i]).find("ul").addClass("on");
      $(this.slides[i]).find("img").addClass("on");
      $(this.slides[i]).find("h2").addClass("on");
    },
  },
});
gsap.to(".wrap .man", { duration: 1, opacity: 1, delay: 1 });
gsap.to(".me ul", { opacity: 1, delay: 1.7 });
gsap.to(".use_tool", { duration: 1, opacity: 1, delay: 3 });
