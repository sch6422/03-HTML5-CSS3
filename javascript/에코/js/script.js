let menu = document.querySelectorAll(".menu ul li");
let sub = document.querySelector(".sub");
let sub1 = document.querySelectorAll(".sub ul li");
menu.forEach(function (o, i) {
  o.onmouseenter = function () {
    document.querySelector(".sub").classList.add("on");
  };
  o.onmouseleave = function () {
    document.querySelector(".sub").classList.remove("on");
  };
});
sub.forEach(function (o, i) {
  o.onmouseenter = function () {
    sub1.classList.add("on");
    menu[i].classList.add("on");
  };
  o.onmouseleave = function () {
    sub1.classList.remove("on");
    menu[i].classList.remove("on");
  };
});
