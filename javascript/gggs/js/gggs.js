let gnb = document.querySelectorAll(".menu li");
let lnb = document.querySelectorAll(".lnb");
let sub = document.querySelectorAll(".sub");

function myfnc() {
  lnb.forEach(function (keys, item) {
    keys.style.height = 0 + "px";
  });
  document.querySelectorAll(".menu li a").forEach(function (o, i) {
    o.style.color = "#fff";
  });
  document.querySelector("header").style.background = "none";
  document.querySelector(".logo").classList.remove("on");
}
gnb.forEach(function (keys, item) {
  keys.onmouseenter = function () {
    sub.forEach(function (o, i) {
      let ht = sub[item].offsetHeight;
      lnb[item].style.height = ht + "px";
    });
    document.querySelector("header").style.background = "#fff";
    document.querySelector(".logo").classList.add("on");
    document.querySelectorAll(".menu li a").forEach(function (o, i) {
      o.style.color = "#333";
    });
  };
  keys.onmouseleave = function () {
    myfnc();
  };
});
