let bg = document.querySelector(".head");
let gnb = document.querySelectorAll(".menu>li");
let sub = document.querySelectorAll(".sub");
let subUl = document.querySelectorAll(".sub>ul");

function myfnc() {
  sub.forEach(function (value, index) {
    value.classList.remove("on");
    value.style.height = 0 + "px";
  });
  bg.style.background = "none";
  bg.style.height = 0 + "px";
}
gnb.forEach(function (value, index) {
  value.onmouseenter = function () {
    bg.style.background = "#fff";
    subUl.forEach(function (keys, item) {
      try {
        let ht = subUl[index].offsetHeight + 120;
        console.log(ht);
        gnb[index].querySelector(".sub").style.height = ht + "px";
        gnb[index].querySelector(".sub").classList.add("on");
        bg.style.height = ht + "px";
      } catch (error) {
        bg.style.height = 80 + "px";
      }
    });
  };
  value.onmouseleave = function () {
    myfnc();
  };
  bg.onmouseenter = function () {
    gnb.forEach(function (value, index) {
      value.querySelector("a").classList.add("on");
    });
    bg.style.height = 80 + "px";
    bg.style.background = "#fff";
    document.querySelector(".logo img").src = "images/logo-d.svg";
  };
  bg.onmouseleave = function () {
    myfnc();

    gnb.forEach(function (value, index) {
      value.querySelector("a").classList.remove("on");
    });
    document.querySelector(".logo img").src = "images/logo.svg";
  };
});
