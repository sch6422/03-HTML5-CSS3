let gnb = document.querySelectorAll(".menu>li");
let gnbA = document.querySelectorAll(".menu>li>a");
let sub = document.querySelectorAll(".sub");
function menu_in() {
  document.querySelector("header").classList.add("on");
  gnbA.forEach(function (value, index) {
    value.classList.add("on");
  });
  document.querySelector(".logo img").src = "images/logo.svg";
  document.querySelector(".search img").src = "images/search_icon.svg";
  document.querySelector(".country img").src = "images/country_icon.svg";
  sub.forEach(function (value, index) {
    value.classList.add("on");
  });
  document.querySelector(".info").classList.add("on");
}
function menu_out() {
  document.querySelector("header").classList.remove("on");
  gnbA.forEach(function (value, index) {
    value.classList.remove("on");
  });
  document.querySelector(".logo img").src = "images/logo_white.svg";
  document.querySelector(".search img").src = "images/search_white_icon.svg";
  document.querySelector(".country img").src = "images/country_white_icon.svg";
  sub.forEach(function (value, index) {
    value.classList.remove("on");
  });
  document.querySelector(".info").classList.remove("on");
}
gnb.forEach(function (value, index) {
  value.onmouseenter = function () {
    menu_in();
  };
  value.onmouseleave = function () {
    menu_out();
  };
  document.querySelector(".info").onmouseenter = menu_in;
  document.querySelector(".info").onmouseleave = menu_out;
});
